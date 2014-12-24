(ns arimaa.login
  (:require
    [arimaa.requests :as requests]
    [arimaa.state :refer [username session-id gameroom-id]]
    [reagent.core :as reagent :refer [atom]])
  (:require-macros
    [cljs.core.async.macros :refer [go]]))

(defn login [username-input password login-error]
  (go (let [response (<! (requests/login username-input password))]
        (if (:error response)
          (reset! login-error (:error response))
          (do
            (reset! username username-input)
            (reset! session-id (:sid response))
            (reset! gameroom-id (:grid response)))))))

(defn username-input-view [username-input login]
  [:div
    [:label {:for "username"} "Username"]
    [:input {:name "username" :value @username-input :type "text"
             :on-change #(reset! username-input (-> % .-target .-value))
             :on-key-up #(if (= (.-keyCode %) 13) (login))}]])

(def focused-username-input-view
  (with-meta
    username-input-view
    {:component-did-mount #(.focus (reagent/dom-node %))}))

(defn login-view []
  (let [username-input (atom "")
        password (atom "")
        login-error (atom nil)
        login #(login @username-input @password @login-error)]
    (fn []
      [:section.login-form
        [focused-username-input-view username-input login]
        [:div
          [:label {:for "password"} "Password"]
          [:input {:name "password" :value @password :type "password"
                   :on-change #(reset! password (-> % .-target .-value))
                   :on-key-up #(if (= (.-keyCode %) 13) (login))}]]
        [:div
          [:button {:on-click login} "Login"]]
        (if @login-error
          [:div.login-error @login-error])])))
