// Compiled by ClojureScript 0.0-2511
goog.provide('cljs_http.util');
goog.require('cljs.core');
goog.require('no.en.core');
goog.require('goog.userAgent');
goog.require('cognitect.transit');
goog.require('clojure.string');
goog.require('goog.Uri');
/**
* Returns the value of the HTTP basic authentication header for
* `credentials`.
*/
cljs_http.util.basic_auth = (function basic_auth(credentials){
if(cljs.core.truth_(credentials)){
var vec__22917 = ((cljs.core.map_QMARK_(credentials))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(credentials,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$59,cljs.core.constant$keyword$51], null)):credentials);
var username = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22917,(0),null);
var password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22917,(1),null);
return [cljs.core.str("Basic "),cljs.core.str(no.en.core.base64_encode([cljs.core.str(username),cljs.core.str(":"),cljs.core.str(password)].join('')))].join('');
} else {
return null;
}
});
/**
* Build the url from the request map.
*/
cljs_http.util.build_url = (function build_url(p__22918){
var map__22921 = p__22918;
var map__22921__$1 = ((cljs.core.seq_QMARK_(map__22921))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22921):map__22921);
var query_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22921__$1,cljs.core.constant$keyword$57);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22921__$1,cljs.core.constant$keyword$55);
var server_port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22921__$1,cljs.core.constant$keyword$54);
var server_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22921__$1,cljs.core.constant$keyword$53);
var scheme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22921__$1,cljs.core.constant$keyword$50);
return [cljs.core.str((function (){var G__22922 = (new goog.Uri());
G__22922.setScheme(cljs.core.name((function (){var or__3630__auto__ = scheme;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return cljs.core.constant$keyword$44;
}
})()));

G__22922.setDomain(server_name);

G__22922.setPort(server_port);

G__22922.setPath(uri);

G__22922.setQuery(query_string,true);

return G__22922;
})())].join('');
});
/**
* Returns dash separeted string `s` in camel case.
*/
cljs_http.util.camelize = (function camelize(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str(s)].join(''),/-/)));
});
/**
* Build the headers from the map.
*/
cljs_http.util.build_headers = (function build_headers(m){
return cljs.core.clj__GT_js(cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(m)),cljs.core.vals(m)));
});
/**
* Returns the user agent.
*/
cljs_http.util.user_agent = (function user_agent(){
return goog.userAgent.getUserAgentString();
});
/**
* Returns true if the user agent is an Android client.
*/
cljs_http.util.android_QMARK_ = (function android_QMARK_(){
return cljs.core.re_matches(/.*android.*/i,cljs_http.util.user_agent());
});
/**
* Transit decode an object from `s`.
*/
cljs_http.util.transit_decode = (function transit_decode(s,type,opts){
var rdr = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(type,opts);
return cognitect.transit.read(rdr,s);
});
/**
* Transit encode `x` into a String.
*/
cljs_http.util.transit_encode = (function transit_encode(x,type,opts){
var wrtr = cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(type,opts);
return cognitect.transit.write(wrtr,x);
});
/**
* JSON decode an object from `s`.
*/
cljs_http.util.json_decode = (function json_decode(s){
var temp__4124__auto__ = ((cljs.core.not(clojure.string.blank_QMARK_(s)))?(function (){var G__22924 = s;
return JSON.parse(G__22924);
})():null);
if(cljs.core.truth_(temp__4124__auto__)){
var v = temp__4124__auto__;
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.array_seq([cljs.core.constant$keyword$16,true], 0));
} else {
return null;
}
});
/**
* JSON encode `x` into a String.
*/
cljs_http.util.json_encode = (function json_encode(x){
var G__22926 = cljs.core.clj__GT_js(x);
return JSON.stringify(G__22926);
});
cljs_http.util.parse_headers = (function parse_headers(headers){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__22928_SHARP_,p2__22927_SHARP_){
var vec__22930 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__22927_SHARP_,/:\s+/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22930,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22930,(1),null);
if(cljs.core.truth_((function (){var or__3630__auto__ = clojure.string.blank_QMARK_(k);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return clojure.string.blank_QMARK_(v);
}
})())){
return p1__22928_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22928_SHARP_,clojure.string.lower_case(k),v);
}
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2((function (){var or__3630__auto__ = headers;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return "";
}
})(),/(\n)|(\r)|(\r\n)|(\n\r)/));
});
