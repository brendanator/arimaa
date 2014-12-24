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
      (.replace "%13" "\n")
      (.replace "%25" "%")))

(defn- parse-response [response]
  (->> (string/split (:body response) #"\n")
       (filter #(not= % "--END--"))
       (map #(let [[k v] (string/split % #"=" 2)] [(keyword k) (decode-value v)]))
       (into {})))

(defn- parse-games [response]
  (if (:error response) response
    {:games (map parse-response (vals (dissoc response :num)))}))

(defn login [username password]
  (async/map<
    parse-response
    (http/post protocol1-url 
      {:with-credentials? false 
       :form-params 
         {:action "login" 
          :username username 
          :password password}})))
 
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
