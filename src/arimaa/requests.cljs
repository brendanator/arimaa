(ns arimaa.requests
  (:require
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

(defn- parse-move [move-string]
  (let [items (string/split move-string " ")
        [move steps] (split-at 1 items)]
    {:move (first move) :steps (vec steps)}))

(defn- parse-moves [moves-string]
  (map parse-move (string/split moves-string "\n")))

(defn- make-piece [piece-string row col]
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
      {:animal animal :colour colour :square {:row row :col (char (+ 96 col))}})))

(defn- parse-piece [position-string row col]
  (-> position-string
    (nth row)
    (nth (+ 1 (* 2 col)))
    (make-piece row col)))

(defn- parse-position [value]
  (let [piece-string (map seq (rest (string/split (decode-value value) #"\n")))]
    (remove nil?
      (for [row (range 1 9) col (range 1 9)]
        (parse-piece piece-string row col)))))

(defn- parse-game-state [value]
  (-> value
      parse-protocol1
      (update-in [:moves] parse-moves)
      (update-in [:position] parse-position)))

(defn game-state [gameserver-url gameserver-session-id]
  (async/map<
    parse-game-state
    (http/post gameserver-url 
      {:with-credentials? false 
       :form-params 
         {:action "gamestate" 
          :sid gameserver-session-id
          :wait 0}})))

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
