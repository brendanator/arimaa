(ns arimaa.game)

(def animals [:rabbit :cat :dog :horse :camel :elephant])
(def colour [:gold :silver])
(def direction [:north :east :south :west])

; col is from a - h row is from 1 - 8
(defrecord Square [col row])
(defrecord Piece [animal colour square])

(defprotocol ASteps
  (step-count [this] "how many steps does this represent")
  (steps [this] "return the seq of steps"))

(defrecord Step [start-piece end-piece]
  ASteps
  (step-count [this] 1)
  (steps [this] (seq this)))

(defrecord ForceStep [step1 step2]
  ASteps
  (step-count [this] 2)
  (steps [this] [step1 step2]))

; a board is a collection of Pieces

(defn adjacent-squares [square]
  (let [col (:col square) row (:row square)]
    (filter identity
      #{(when (not= \h col) (Square. (inc col) row))
        (when (not= \a col) (Square. (dec col) row))
        (when (not= 8 row) (Square. col (inc row)))
        (when (not= 1 row) (Square. col (dec row)))})))

(defn pieces-at [board squares]
  (filter (fn [piece] (squares (:square piece))) board))

(def stronger-animals 
  {:rabbit #{:cat :dog :horse :camel :elephant} 
   :cat #{:dog :horse :camel :elephant} 
   :dog #{:horse :camel :elephant} 
   :horse #{:camel :elephant} 
   :camel #{:elephant} 
   :elephant #{}})

(def weaker-animals 
  {:elephant #{:camel :horse :dog :cat :rabbit}
   :camel #{:horse :dog :cat :rabbit}
   :horse #{:dog :cat :rabbit}
   :dog #{:cat :rabbit}
   :cat #{:rabbit}
   :rabbit #{}})

(defn friendly-pieces [piece pieces]
  (filter #(= (:colour piece) (:colour %)) pieces))

(defn enemy-pieces [piece pieces]
  (filter #(not= (:colour piece) (:colour %)) pieces))

(defn stronger-enemy-pieces [piece pieces]
  (filter 
    (stronger-animals (:animal piece)) 
    (enemy-pieces piece pieces)))

(defn weaker-enemy-pieces [piece pieces]
  (filter 
    (weaker-animals (:animal piece)) 
    (enemy-pieces piece pieces)))

(defn is-frozen [piece adjacent-pieces]
  (let [colour (:colour piece) 
        stronger-anmls (stronger-animals piece)]
    (and
      (empty? (friendly-pieces piece adjacent-pieces))
      (not (empty? (stronger-enemy-pieces piece adjacent-pieces))))))

(defn find-empty [squares board]
  (filter (set (map :square board)) squares))

(defn make-step [piece square]
  (Step. piece (assoc piece :square square)))

(defn piece-steps [piece board]
  (let [adjacent-sqs (adjacent-squares piece)
        adjacent-pieces (pieces-at board adjacent-squares)]
    (when (not (is-frozen piece adjacent-pieces))
      (map #(make-step piece %) (find-empty adjacent-sqs board)))))

(comment defn piece-force-steps [piece board]
  (let [adjacent-sqs (adjacent-squares piece)
        adjacent-pieces (pieces-at board adjacent-squares)]
    (when (not (is-frozen piece adjacent-pieces))
      (let [weak-enemies (weaker-enemy-pieces piece adjacent-pieces)]
        ; pushes
        (->> weak-enemies
          (map adjacent-squares)
          #((find-empty % board))
          (map make-step enemy new-square)
          (map ForceStep. (make-step piece (:square enemy)) enemy-step))
        ; pulls
        (->> weak-enemies
           )
        ; my steps
        (map #(make-step piece %) (find-empty adjacent-sqs board))
        ; enemy steps
        (map #(make-step enemy (:square piece) enemies))
          
        ))))

