## Arimaa

[![Build Status](https://travis-ci.org/brendanator/arimaa.svg?branch=master)](https://travis-ci.org/brendanator/arimaa)

An alternative gameroom client for http://arimaa.com

### Development setup
1. Install [leiningen](https://github.com/technomancy/leiningen)
2. Run `lein cljsbuild auto dev` in the root directory
3. Install [browersync](http://www.browsersync.io/)
4. Run `browser-sync start --server --files="**"` in the `site` directory
5. Make fun changes!