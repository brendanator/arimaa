(defproject arimaa "0.1.0-SNAPSHOT"
  :description "Arimaa website"
  :url "http://github.com/brendanator/arimaa"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2371"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [compojure "1.2.1"]
                 [ring/ring-json "0.3.1"]
                 [reagent "0.4.3"]
                 [clj-http "1.0.1"]
                 [cljs-http "0.1.20"]]
  :plugins [[lein-cljsbuild "1.0.3"]]

  :cljsbuild {
    :builds {
             :dev {
                   :source-paths ["src-cljs"]
                   :compiler {:output-to "resources/public/js/cljs.js"
                              :output-dir "resources/public/js"
                              :optimizations :none
                              :pretty-print true
                              :source-map "resources/public/js/cljs.js.map"}}
             :prod {
                    :source-paths ["src-cljs"]
                    :compiler {:output-to "resources/public/js-min/cljs-min.js"
                               :output-dir "resources/public/js-min"
                               :optimizations :advanced
                               :pretty-print false}}}})
