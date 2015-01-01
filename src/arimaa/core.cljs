(ns arimaa.core
  (:require
    [arimaa.chat :refer [chat-view]]
    [arimaa.gameroom :refer [gameroom-view]]
    [arimaa.login :refer [login-view]]
    [arimaa.state :refer [logged-in]]
    [reagent.core :as reagent]))

(enable-console-print!)

(defn arimaa-web []
  (if (logged-in)
    [:div.pure-g
      [chat-view]
      [gameroom-view]]
    [login-view]))

(defn ^:export run []
  (reagent/render-component
    [arimaa-web]
    (.-body js/document)))
