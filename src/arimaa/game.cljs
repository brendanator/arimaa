(ns arimaa.game)

(def animals [:rabbit :cat :dog :horse :camel :elephant])
(def colour [:gold :silver])
(def direction [:north :east :south :west])

(defprotocol AShow
  (show [this]))

; col is from a - h row is from 1 - 8
(defrecord Square [col row]
  AShow
  (show [this] (str col row)))

(defrecord Piece [animal colour]
  AShow
  (show [this]
    (let [animal-char (case animal
                        :rabbit "r"
                        :cat "c"
                        :dog "d"
                        :horse "h"
                        :camel "m"
                        :elephant "e")]
      (if (= :gold colour)
        (.toUpperCase animal-char)
        animal-char))))

(defrecord PiecePosition [piece square]
  AShow
  (show [this] (str (show piece) (show square))))

(defprotocol ASteps
  (step-count [this] "how many steps does this represent")
  (steps [this] "return the seq of steps"))

(defprotocol AUpdatePosition
  (update-position [this position]))

(defrecord PlaceStartingPiece [piece-position]
  AUpdatePosition
  (update-position [this position] (cons piece-position position))

  AShow
  (show [this] (show piece-position)))

(defrecord Step [piece-position direction]
  ASteps
  (step-count [this] 1)
  (steps [this] (seq this))

  AUpdatePosition
  (update-position [this position]
    (let [col (:col (:square piece-position))
          row (:row (:square piece-position))
          new-square (case direction
                       :north (Square. col (inc row))
                       :south (Square. col (dec row))
                       :east (Square. (-> col .charCodeAt inc char) row)
                       :west (Square. (-> col .charCodeAt dec char) row))
          new-piece-position (PiecePosition. (:piece piece-position) new-square)]
      (->> position
           (remove #{piece-position})
           (cons new-piece-position))))

  AShow
  (show [this]
    (let [direction-char (case direction
                           :north "n"
                           :south "s"
                           :east "e"
                           :west "w")]
      (str (show piece-position) direction-char))))

(defrecord Capture [piece-position]
  ASteps
  (step-count [this] 0)
  (steps [this] (list))

  AUpdatePosition
  (update-position [this position]
    (->> position
         (remove #{piece-position})))

  AShow
  (show [this] (str (show piece-position) "x")))

(defrecord ForceStep [step1 step2]
  ASteps
  (step-count [this] 2)
  (steps [this] [step1 step2])

  AUpdatePosition
  (update-position [this position]
    (->> position
         (update-position step1)
         (update-position step2)))

  AShow
  (show [this] (str (show step1) " " (show step2))))

(defrecord Turn [number colour]
  AShow
  (show [this] (str number (if (= colour :gold) "g" "s"))))

(defrecord Move [turn steps]
  AShow
  (show [this] (str (show turn) " " (apply str (interpose " " (map show steps))))))

; a board is a collection of PiecePositions

(defn adjacent-squares [square]
  (let [col (:col square) row (:row square)]
    (filter identity
      #{(when (not= \h col) (Square. (inc col) row))
        (when (not= \a col) (Square. (dec col) row))
        (when (not= 8 row) (Square. col (inc row)))
        (when (not= 1 row) (Square. col (dec row)))})))

(defn pieces-at [board squares]
  (filter (fn [piece-position] (squares (:square piece-position))) board))

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

(defn friendly-pieces [piece-position piece-positions]
  (filter #(= (:colour (:piece piece-position)) (:colour (:piece %))) piece-positions))

(defn enemy-pieces [piece-position piece-positions]
  (filter #(not= (:colour (:piece piece-position)) (:colour (:piece %))) piece-positions))

(defn stronger-enemy-pieces [piece-position piece-positions]
  (filter
    (stronger-animals (:animal (:piece piece-position)))
    (enemy-pieces piece-position piece-positions)))

(defn weaker-enemy-pieces [piece-position piece-positions]
  (filter
    (weaker-animals (:animal (:piece piece-position)))
    (enemy-pieces piece-position piece-positions)))

(defn is-frozen [piece adjacent-pieces]
  (let [colour (:colour (:piece piece))
        stronger-anmls (stronger-animals piece)]
    (and
      (empty? (friendly-pieces piece adjacent-pieces))
      (not (empty? (stronger-enemy-pieces piece adjacent-pieces))))))

(defn find-empty [squares board]
  (filter (set (map :square board)) squares))

;(defn make-step [piece square]
;  (Step. piece (assoc piece :square square)))
;
;(defn piece-steps [piece board]
;  (let [adjacent-sqs (adjacent-squares piece)
;        adjacent-pieces (pieces-at board adjacent-squares)]
;    (when (not (is-frozen piece adjacent-pieces))
;      (map #(make-step piece %) (find-empty adjacent-sqs board)))))
;
;(comment defn piece-force-steps [piece board]
;  (let [adjacent-sqs (adjacent-squares piece)
;        adjacent-pieces (pieces-at board adjacent-squares)]
;    (when (not (is-frozen piece adjacent-pieces))
;      (let [weak-enemies (weaker-enemy-pieces piece adjacent-pieces)]
;        ; pushes
;        (->> weak-enemies
;          (map adjacent-squares)
;          #((find-empty % board))
;          (map make-step enemy new-square)
;          (map ForceStep. (make-step piece (:square enemy)) enemy-step))
;        ; pulls
;        (->> weak-enemies
;           )
;        ; my steps
;        (map #(make-step piece %) (find-empty adjacent-sqs board))
;        ; enemy steps
;        (map #(make-step enemy (:square piece) enemies))
;
;        ))))

(defn position-after-move [position move]
  (reduce
    #(update-position % %)
    position
    (:steps move)))
