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
      {:dev {:source-paths ["src"]
             :compiler {:output-to "site/js/cljs.js"
                        :output-dir "site/js"
                        :optimizations :none
                        :pretty-print true
                        :source-map "site/js/cljs.js.map"}}
       :prod {:source-paths ["src"]
              :compiler {:output-to "production/js/cljs.js"
                         :output-dir "production/js"
                         :optimizations :advanced
                         :pretty-print false}}}})
