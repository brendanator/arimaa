(ns arimaa.utils
  (:require
    [reagent.core :as reagent :refer [atom]]
    [clojure.string :as string])
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

; https://gist.github.com/dperini/729294
(def url-regex #"(?i)^(?:(?:https?|ftp)://)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:/\S*)?$")

(defn markup-user-messages [value]
  (string/replace value url-regex #(str "<a href=\"" %1 "\">" %1 "</a>")))