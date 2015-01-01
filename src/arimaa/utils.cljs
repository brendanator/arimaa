(ns arimaa.utils
  (:require
    [reagent.core :as reagent :refer [atom]])
  (:require-macros
    [cljs.core.async.macros :refer [go]]))

(def initial-focus-wrapper
  (with-meta identity
    {:component-did-mount #(.focus (reagent/dom-node %))}))

(def scroll-bottom-wrapper
  (let [scroll-bottom (atom true)]
    (with-meta identity
      {:component-will-update
         #(let [element (reagent/dom-node %)]
           (reset! scroll-bottom
                   (== (.-scrollTop element) (- (.-scrollHeight element) (.-clientHeight element)))))

       :component-did-update
         #(if @scroll-bottom
           (let [element (reagent/dom-node %)]
             (set! (.-scrollTop element) (.-scrollHeight element))))})))

(def cols (map #(char (+ 96 %)) (range 1 9)))

(defn subscribe-atom-to-channel! [atm channel]
  (go (loop []
      (let [new-value (<! channel)]
        (reset! atm new-value)
        (when new-value
          (recur))))))