(defproject arimaa "0.1.0-SNAPSHOT"
  :description "Arimaa website"
  :url "http://arimaa.club"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2511"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [com.andrewmcveigh/cljs-time "0.2.4"]
                 [reagent "0.4.3"]
                 [cljs-http "0.1.23"]]

  :plugins [[lein-cljsbuild "1.0.3"]]

  :cljsbuild 
    {:builds 
      {:dev {:source-paths ["src-cljs"]
             :compiler {:output-to "resources/public/js/cljs.js"
                        :output-dir "resources/public/js"
                        :optimizations :none
                        :pretty-print true
                        :source-map "resources/public/js/cljs.js.map"}}
       :prod {:source-paths ["src-cljs"]
              :compiler {:output-to "resources/public/js-min/cljs-min.js"
                         :output-dir "resources/public/js-min"
                         :optimizations :advanced
                         :pretty-print false}}}})
