## Arimaa

[![Build Status](https://travis-ci.org/brendanator/arimaa.svg?branch=master)](https://travis-ci.org/brendanator/arimaa)   [![Dependency Status](https://www.versioneye.com//user/projects/5471db1d9dcf6dbd4e001005/badge.svg?style=flat)](https://www.versioneye.com//user/projects/5471db1d9dcf6dbd4e001005)

An alternative gameroom client for http://arimaa.com, available at http://arimaa.club

### Development setup
1. Install [leiningen](https://github.com/technomancy/leiningen)
2. Install [browersync](http://www.browsersync.io/)
3. Run `lein cljsbuild auto dev` in the root directory
4. Run `browser-sync start --server --files="**"` in the `site` directory
5. Make fun changes!
