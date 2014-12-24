(ns arimaa.chat
  (:require
    [arimaa.requests :as requests]
    [arimaa.state :refer [username auth]]
    [reagent.core :as reagent :refer [atom]]
    [cljs.core.async :as async :refer [timeout]])
  (:require-macros
    [cljs.core.async.macros :refer [go]]))

(defn chat-message [chat]
  [:div 
    [:span.chat-timestamp (:timestamp chat)]
    [:span {:style {:color (:color chat)}}
      [:span.chat-player (:player-name chat)]
      [:span.chat-message (:message chat)]]])

(defn chat-event [chat icon text]
  [:div 
    [:span.chat-timestamp (:timestamp chat)]
    [icon]
    [:span.chat-event
      [:span.chat-player (:player-name chat)]
      (str " " text)]])

(defn chat-row [chat]
  [:div.chat-row
    (case (:chat-type chat)
      :msg [chat-message chat]
      :in [chat-event chat :span.fa.fa-arrow-right.chat-icon "is coming in"]
      :out [chat-event chat :span.fa.fa-arrow-left.chat-icon "went out"]
      :timeout [chat-event chat :span.fa.fa-arrow-down.chat-icon "timed out"])])

(defn update-chat-log [chatter latest-data]
  (go (loop [] (<! (timeout 500))
        (let [{:keys [chats data]} (<! (requests/fetch-chat @username (auth) @latest-data))]
          (swap! chatter concat chats)
          (if data (reset! latest-data data)))
        (recur))))

(defn chat-log []
  (let [chatter (atom [])
        latest-data (atom nil)]
    (update-chat-log chatter latest-data)
    (fn []
      [:div#chat-log.chat-log
        (map chat-row @chatter)])))

(def scroll-bottom-chat-log
  (let [scroll-bottom (atom true)]
    (with-meta
      chat-log
      {:component-will-update 
         (fn [this] 
           (let [element (reagent/dom-node this)] 
             (reset! scroll-bottom 
                     (== (.-scrollTop element) (- (.-scrollHeight element) (.-clientHeight element))))))
         
       :component-did-update 
         (fn [this] 
           (if @scroll-bottom 
             (let [element (reagent/dom-node this)] 
               (set! (.-scrollTop element) (.-scrollHeight element)))))})))

(defn chat-text-input [message send-chat]
        [:input {:type "text" :value @message
                 :on-change #(reset! message (-> % .-target .-value))
                 :on-key-up #(if (= (.-keyCode %) 13) (send-chat))}])

(def focused-chat-text-input
  (with-meta
    chat-text-input
    {:component-did-mount #(.focus (reagent/dom-node %))}))

(defn chat-input []
  (let [message (atom "")
        send-chat (fn []
                    (requests/send-chat @username (auth) @message)
                    (reset! message ""))]
    (fn []
      [:div.chat-input
        [:button {:on-click send-chat} "Send"]
        [:span [focused-chat-text-input message send-chat]]])))

(defn chat-view []
  [:section.chat.pure-u-2-5
    [scroll-bottom-chat-log]
    [chat-input]])
