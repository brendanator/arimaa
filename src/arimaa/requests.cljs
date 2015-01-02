(ns arimaa.requests
  (:require
    [arimaa.game :refer [Piece Square Step Capture Move PiecePosition PlaceStartingPiece]]
    [cljs-http.client :as http]
    [cljs.core.async :as async]
    [clojure.string :as string]
    [cljs-time.format :refer [formatter unparse]]
    [cljs-time.coerce :as coerce]))

(def ^:private protocol1-url "http://arimaa.com/arimaa/gameroom/client1gr.cgi")
(def ^:private protocol2-url "http://arimaa.com/arimaa/gameroom/client2gr.cgi")
(def ^:private chat-url "http://arimaa.com/arimaa/chat/srv.php")

(defn- decode-value [value]
  (-> value
      (string/replace "%13" "\n")
      (string/replace "%25" "%")))

(defn- parse-protocol1 [response]
  (->> (string/split (:body response) #"\n")
       (filter #(not= % "--END--"))
       (map #(let [[k v] (string/split % #"=" 2)] [(keyword k) (decode-value v)]))
       (into {})))

(defn- parse-games [response]
  (if (:error response) response
    {:games (map parse-protocol1 (vals (dissoc response :num)))}))

(defn login [username password]
  (async/map<
    parse-protocol1
    (http/post protocol1-url
      {:with-credentials? false
       :form-params
         {:action "login"
          :username username
          :password password}})))

(defn reserve-seat [session-id game-id role]
  (async/map<
    parse-protocol1
    (http/post protocol1-url
      {:with-credentials? false
       :form-params
         {:action "reserveseat"
          :sid session-id
          :gid game-id
          :role (case role
                  :gold "w"
                  :silver "b"
                  :view "v")}})))

(defn sit [gameserver-url gameroom-id temporary-authentication-id]
  (async/map<
    parse-protocol1
    (http/post gameserver-url
      {:with-credentials? false
       :form-params
         {:action "sit"
          :grid gameroom-id
          :tid temporary-authentication-id}})))

(defn- parse-piece [piece-string]
  (when piece-string
    (let [animal (case (.toUpperCase piece-string)
                   "R" :rabbit
                   "C" :cat
                   "D" :dog
                   "H" :horse
                   "M" :camel
                   "E" :elephant
                   nil)
          colour (if (= piece-string (.toUpperCase piece-string))
                   :gold
                   :silver)]
      (when animal
        (Piece. animal colour)))))

(def step-regex #"(?i)^([rcdhme])([a-h])([1-8])([nsew])$")
(def place-starting-piece-regex #"(?i)^([rcdhme])([a-h])([1-8])$")
(def capture-regex #"(?i)^([rcdhme])([a-h])([1-8])x$")

(defn- parse-direction [direction-string]
  (case direction-string
    "n" :north
    "s" :south
    "e" :east
    "w" :west))

(defn- parse-step [step-string]
  (if-let [step (re-find step-regex step-string)]
    (Step. (PiecePosition. (parse-piece (second step)) (Square. (nth step 2) (nth step 3))) (parse-direction (nth step 4)))
    (if-let [place-starting-piece (re-find place-starting-piece-regex step-string)]
      (PlaceStartingPiece. (PiecePosition. (parse-piece (second place-starting-piece)) (Square. (nth place-starting-piece 2) (nth place-starting-piece 3))))
      (if-let [capture (re-find capture-regex step-string)]
        (Capture. (PiecePosition. (parse-piece (second capture)) (Square. (nth capture 2) (nth capture 3))))))))

(defn- parse-move [move-string]
  (let [items (string/split move-string " ")
        [move-number steps] (split-at 1 items)
        precious-metal-move (-> (first move-number) (string/replace "w" "g") (string/replace "b" "s"))]
    (Move. precious-metal-move (map parse-step steps))))

(defn- parse-moves [moves-string]
  (map parse-move (string/split moves-string "\n")))

(defn- parse-piece-position [position-string col row]
  (-> position-string
    (nth row)
    (nth (+ 1 (* 2 col)))
    (parse-piece)
    (PiecePosition. (Square. (char (+ 96 col)) row))))

(defn- parse-position [value]
  (let [piece-string (map seq (rest (string/split (decode-value value) #"\n")))]
    (remove nil?
      (for [col (range 1 9) row (range 1 9)]
        (parse-piece-position piece-string col row)))))

(defn- parse-game-state [value]
  (-> value
      parse-protocol1
      (update-in [:moves] parse-moves)
      (update-in [:position] parse-position)))

(defn game-state [gameserver-url gameserver-session-id last-change]
  (async/map<
    parse-game-state
    (http/post gameserver-url
      {:with-credentials? false
       :form-params
         {:action "gamestate"
          :sid gameserver-session-id
          :wait 1
          :lastchange last-change}})))

(defn gameroom-state [session-id]
  (async/map<
    (fn [response] (js->clj (js/JSON.parse (:body response)) :keywordize-keys true))
    (http/post protocol2-url
      {:with-credentials? false
       :content-type "text/plain"
       :json-params {:sid session-id :action "state"}})))

(defn- parse-chat-line [chat-line]
  (let [timestamp (unparse (formatter "HH:mm") (coerce/from-long (* 1000 (first chat-line))))
        player-name (second chat-line)
        chat-type (keyword (nth chat-line 2))
        chat {:timestamp timestamp :player-name player-name :chat-type chat-type}]
    (if (= chat-type :msg)
      (merge chat {:color (str "#" (nth chat-line 3)) :message (nth chat-line 4)})
      chat)))

(defn- parse-chat [response]
  (let [response-lines (map #(string/split % #"\t" 5) (string/split (:body response) #"\n"))
        header (first (first response-lines))]
    (cond (= header "OK") {:data (first (second response-lines)) :chats (map parse-chat-line (drop 2 response-lines))}
          (= header "Nothing new") {:chats []}
          header (js/alert (str "Unhandled header" response)))))

(defn fetch-chat [username auth data]
  (async/map<
    parse-chat
    (http/post chat-url
      {:with-credentials? false
       :form-params {:user username :auth auth :data data :cmd "fetch"}})))

(defn send-chat [username auth message]
  (http/post chat-url
    {:with-credentials? false
     :form-params {:user username :auth auth :cmd "msg" :data message}}))
