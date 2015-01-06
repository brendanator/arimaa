(ns arimaa.state
  (:require
    [arimaa.utils :refer [parse-timestamp]]
    [reagent.core :as reagent :refer [atom]]
    [cljs-time.core :refer [after? minutes now plus]]))

(def session-id (atom nil))
(def gameroom-id (atom nil))
(def gameroom-state (atom nil))

(def username (atom nil))

(defn logged-in []
  (and
    (not (nil? @username))
    (not (nil? @session-id))))

(defn auth []
  (:auth (:me @gameroom-state)))

(defn is-my-game [username game]
  (or (= username (:wusername game)) (= username (:busername game))))

(defn is-scheduled [game]
  (after? (parse-timestamp (:schts game)) (plus (now) (minutes 15))))

(defn my-games [username]
  (filter #(is-my-game username %) (:livegames @gameroom-state)))

(defn live-games [username]
  (filter (fn [game] (not (or (is-my-game username game) (is-scheduled game)))) (:livegames @gameroom-state)))

(defn scheduled-games []
  (filter is-scheduled (:livegames @gameroom-state)))
