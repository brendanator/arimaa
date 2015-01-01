(ns arimaa.gameroom
  (:require
    [arimaa.requests :as requests]
    [arimaa.state :refer [gameroom-state logged-in session-id gameroom-id]]
    [arimaa.utils :refer [cols subscribe-atom-to-channel!]]
    [reagent.core :as reagent :refer [atom]]
    [cljs.core.async :as async :refer [chan timeout]])
  (:require-macros
    [cljs.core.async.macros :refer [go]]))

(defn gameroom-state-channel []
  (let [c (chan)]
    (go (loop []
          (let [gameroom-state-response (<! (requests/gameroom-state @session-id))]
              (when (>! c gameroom-state-response)
                (<! (timeout 2000))
                (recur)))))
    c))

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

(defn gameboard-square-class [row col]
  (cond
    (and (or (= col \c) ( = col \f)) (or (= row 3) ( = row 6)))
    "trap"
    (= row 8)
    "gold-goal"
    (= row 1)
    "silver-goal"))

(defn game-state-channel [game-id]
  (let [c (chan)]
    (go (let [reserve-seat-response (<! (requests/reserve-seat @session-id game-id :view))
              sit-response (<! (requests/sit (:gsurl reserve-seat-response) @gameroom-id (:tid reserve-seat-response)))]
          (loop [last-change 0]
            (let [game-state-response (<! (requests/game-state (:gsurl reserve-seat-response) (:sid sit-response) last-change))]
              (when (>! c game-state-response)
                (recur (:lastchange game-state-response)))))))
    c))

(defn piece-at-square [position col row]
  (first
    (filter
      (fn [piece] (= {:col col :row row} (:square piece)))
      position)))

(defn piece-to-image [piece]
  (let [colour-char (if (= :gold (:colour piece)) "w" "b")
        animal-char (case (:animal piece)
                      :rabbit "r"
                      :cat "c"
                      :dog "d"
                      :horse "h"
                      :camel "m"
                      :elephant "e")]
    (str "http://arimaa.com/arimaa/jsClient/pro/images/" colour-char animal-char ".gif")))

(defn piece-image-at-square [position col row]
  (let [piece (piece-at-square position col row)]
    (if piece
      [:img.piece {:src (piece-to-image piece)}]
      [:img.piece {:src "http://arimaa.com/arimaa/jsClient/pro/images/sp.gif"}])))

(defn ingame-view [game]
  (let [game-state (atom {})
        game-state-chan (game-state-channel (:id game))]
    (subscribe-atom-to-channel! game-state game-state-chan)
    (fn []
      (let [position (:position @game-state)]
        [:table.gameboard
          [:tbody
            (for [row (range 1 9)]
              [:tr
                (for [col cols]
                  [:td {:class (gameboard-square-class row col)}
                    [piece-image-at-square position col row]])])]]))))

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
      (for [live-game (:livegames @gameroom-state)]
        ^{:key (:id live-game)} [ingame-view live-game])]])

(defn recent-games-view []
  [:section
    [:header
      [:h4 "Recent games"]]
    [:div
      (map game-view (:recentgames @gameroom-state))]])

(defn gameroom-view []
  (subscribe-atom-to-channel! gameroom-state (gameroom-state-channel))
  [:section.games.pure-u-3-5
    [new-game-view]
    [my-games-view]
    [open-games-view]
    [live-games-view]
    [recent-games-view]])
