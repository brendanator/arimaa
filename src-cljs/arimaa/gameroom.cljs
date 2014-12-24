(ns arimaa.gameroom
  (:require
    [arimaa.requests :as requests]
    [arimaa.state :refer [gameroom-state logged-in session-id]]
    [cljs.core.async :as async :refer [timeout]])
  (:require-macros
    [cljs.core.async.macros :refer [go]]))

(defn update-gameroom-state []
  (go (let [response (<! (requests/gameroom-state @session-id))]
        (reset! gameroom-state response))))

(defn update-games []
  (go (while (logged-in) 
        (<! (timeout 2000))
        (update-gameroom-state))))

(defn new-game-view []
  [:section 
    [:header 
      [:h4 "New game"]]])

(defn game-view [game]
  [:div
    [:div
      [:a {:href (str "http://arimaa.com/arimaa/gameroom/playerpage.cgi?id=" (:wplayerid game))
           :target "_blank"}
        (:wusername game)]
      [:span " vs "]
      [:a {:href (str "http://arimaa.com/arimaa/gameroom/playerpage.cgi?id=" (:bplayerid game))
           :target "_blank"}
        (:busername game)]]
    [:div
      [:span (:wrating game)]
      [:a {:href (str "http://arimaa.com/arimaa/gameroom/opengamewin.cgi?gameid=" (:id game))
           :target "_blank"} "View game"]
      [:span (:brating game)]]])

(defn my-games-view []
  [:section 
    [:header 
      [:h4 "My games"]]
    [:div
      (map game-view (:mygames @gameroom-state))]])

(defn open-games-view []
  [:section 
    [:header 
      [:h4 "Open games"]]
    [:div
      (map game-view (:opengames @gameroom-state))]])

(defn live-games-view []
  [:section 
    [:header 
      [:h4 "Live games"]]
    [:div
      (map game-view (:livegames @gameroom-state))]])

(defn recent-games-view []
  [:section 
    [:header 
      [:h4 "Recent games"]]
    [:div
      (map game-view (:recentgames @gameroom-state))]])

(defn gameroom-view []
  (update-gameroom-state)
  [:section.games.pure-u-3-5
    [new-game-view]
    [my-games-view]
    [open-games-view]
    [live-games-view]
    [recent-games-view]])
