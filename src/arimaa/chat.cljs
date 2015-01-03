(ns arimaa.chat
  (:require
    [arimaa.requests :as requests]
    [arimaa.state :refer [username auth]]
    [arimaa.utils :refer [initial-focus-wrapper markup-user-messages scroll-bottom-wrapper subscribe-atom-to-channel!]]
    [reagent.core :as reagent :refer [atom]]
    [cljs.core.async :as async :refer [chan close! timeout]])
  (:require-macros
    [cljs.core.async.macros :refer [go]]))

(defn chat-message [chat]
  [:div
    [:span.chat-timestamp (:timestamp chat)]
    [:span {:style {:color (:color chat)}}
      [:span.chat-player (:player-name chat)]
      (into [:span.chat-message] (markup-user-messages (:message chat)))]])

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

(defn chat-log-channel []
  (let [c (chan)]
    (go (loop [chat [] latest-data nil]
          (<! (timeout 500))
          (let [{:keys [chats data]} (<! (requests/fetch-chat @username (auth) latest-data))]
            (if data
              (let [new-chat (concat chat chats)]
                (when (>! c new-chat)
                  (recur new-chat data)))
              (recur chat latest-data)))))
    c))

(defn chat-log [chat]
  [scroll-bottom-wrapper
    [:div#chat-log.chat-log
      (map chat-row @chat)]])

(defn chat-log-view []
  (let [chat (atom [])
        chat-chan (chat-log-channel)
        mounted-chat-log (with-meta chat-log
                           {:component-will-unmount #(close! chat-chan)})]
    (subscribe-atom-to-channel! chat chat-chan)
    [mounted-chat-log chat]))

(defn chat-input []
  (let [message (atom "")
        send-chat (fn []
                    (requests/send-chat @username (auth) @message)
                    (reset! message ""))]
    (fn []
      [:div.chat-input
        [:button {:on-click send-chat} "Send"]
        [:span
          [initial-focus-wrapper
            [:input {:type "text" :value @message
                     :on-change #(reset! message (-> % .-target .-value))
                     :on-key-up #(if (= (.-keyCode %) 13) (send-chat))}]]]])))

(defn chat-view []
  [:section.chat.pure-u-2-5
    [chat-log-view]
    [chat-input]])
