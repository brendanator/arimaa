(ns arimaa.utils
  (:require
    [reagent.core :as reagent]))

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
