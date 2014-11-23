(ns arimaa.core
  (:require
    [reagent.core :as reagent :refer [atom]]
    [cljs-http.client :as http]
    [cljs.core.async :as async :refer [chan close! timeout]])
  (:require-macros
    [cljs.core.async.macros :refer [go alt!]]))

(defn log [message] (.log js/console (pr-str message)))
(def user (atom nil))
(def session-id (atom nil))
(def gameroom-id (atom nil))
(def logged-in (atom false))
(def open-games (atom []))
(def chat (atom "Empty!!!"))

(defn login [username password]
  (go (let [response (<! (http/post "http://arimaa.com/arimaa/chat/srv.php" {:form-params {:action "login" :username username :password password}}))
            body (:body response)]
     (log body)
     (reset! user username)
     (reset! session-id (:sid body))
     (reset! gameroom-id (:grid body))
     (reset! logged-in true))))


(defn load-chat []
  (go (let [response (<! (http/post "http://arimaa.com/arimaa/chat/srv.php" {:form-params {:user @user :auth @session-id :cmd "fetch"}}))]
        (log response)
        (reset! chat response)
  )))

(defn my-games []
  (go (let [response (<! (http/post "/arimaa-command" {:form-params {:action "mygames" :sid @session-id}}))]
     (log response)
  )))

(defn load-open-games []
  (go (let [response (<! (http/post "/arimaa-command" {:form-params {:url "http://arimaa.com/arimaa/gameroom/client2gr.cgi" (str "{\"sid\":" @session-id "\",\"action\":\"state\"}") ""}}))]
        (log response)
     (reset! open-games (:games (:body response))))))

(defn update-games []
  (go (while true (<! (timeout 5000))
        (if @logged-in)
          (load-open-games)
          ;(load-chat)
          )))

(defn game-row [game]
  )

(defn games []
  [:div
    [:h1 "Games"]
    [:h1 @session-id]
    [:table
      [:tbody
        (for [game @open-games] 
          ^{:key (:gid game)}
            [:tr
              [:td (:opponent game)]
              [:td (:timecontrol game)]
              [:td (:role game)]
              [:td (:rated game)]
              ])]]])

(defn chat-view []
  [:p @chat])

(defn arimaa-web []
  [:div
    [games]
    [chat-view]])
  
(defn ^:export run []
  (reagent/render-component [arimaa-web]
                            (.-body js/document))
  (login "Brendan_M" "M2n#k7e9#U@$")
  (update-games))
