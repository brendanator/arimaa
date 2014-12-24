(ns arimaa.state
  (:require
    [reagent.core :as reagent :refer [atom]]))

(def session-id (atom nil))
(def gameroom-id (atom nil))
(def gameroom-state (atom nil))

(def username (atom nil))

(defn logged-in []
  (not (nil? @username)))

(defn auth []
  (:auth (:me @gameroom-state)))

