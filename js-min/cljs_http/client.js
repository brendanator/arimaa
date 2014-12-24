// Compiled by ClojureScript 0.0-2511
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function if_pos(v){
if(cljs.core.truth_((function (){var and__3618__auto__ = v;
if(cljs.core.truth_(and__3618__auto__)){
return (v > (0));
} else {
return and__3618__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
* Parse `s` as query params and return a hash map.
*/
cljs_http.client.parse_query_params = (function parse_query_params(s){
if(cljs.core.not(clojure.string.blank_QMARK_(s))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__25912_SHARP_,p2__25911_SHARP_){
var vec__25914 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__25911_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25914,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25914,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25912_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){
if(cljs.core.not(clojure.string.blank_QMARK_(url))){
var uri = (function (){var G__25916 = url;
return goog.Uri.parse(G__25916);
})();
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$64,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),cljs.core.constant$keyword$67,uri.getDomain(),cljs.core.constant$keyword$68,cljs_http.client.if_pos(uri.getPort()),cljs.core.constant$keyword$69,uri.getPath(),cljs.core.constant$keyword$71,((cljs.core.not(query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),cljs.core.constant$keyword$63,((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params([cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode(cljs.core.name(k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode([cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25917_SHARP_){
return cljs_http.client.encode_val(k,p1__25917_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__25918){
var vec__25920 = p__25918;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25920,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25920,(1),null);
if(cljs.core.coll_QMARK_(v)){
return cljs_http.client.encode_vals(k,v);
} else {
return cljs_http.client.encode_val(k,v);
}
});
cljs_http.client.generate_query_string = (function generate_query_string(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (esc_chars){
return (function (p1__25921_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__25921_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
* Escape special characters -- for content-type.
*/
cljs_http.client.escape_special = (function escape_special(string){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs_http.client.regex_char_esc_smap,string));
});
/**
* Decocde the :body of `response` with `decode-fn` if the content type matches.
*/
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__3618__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$83,request_method);
if(and__3618__auto__){
return cljs.core.re_find(cljs.core.re_pattern([cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special(content_type))].join('')),[cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$76.cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__3618__auto__;
}
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$75], null),decode_fn);
} else {
return response;
}
});
/**
* Encode :edn-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_edn_params = (function wrap_edn_params(client){
return (function (request){
var temp__4124__auto__ = cljs.core.constant$keyword$84.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
var G__25924 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$84),cljs.core.constant$keyword$75,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,"content-type"], null),"application/edn");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25924) : client.call(null,G__25924));
} else {
var G__25925 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25925) : client.call(null,G__25925));
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__25926_SHARP_){
return cljs_http.client.decode_body(p1__25926_SHARP_,cljs.reader.read_string,"application/edn",cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__25928 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25928) : client.call(null,G__25928));
})()], null));
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__25929){
var vec__25933 = p__25929;
var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25933,(0),null);
return ((function (vec__25933,accept){
return (function (request){
var temp__4124__auto__ = (function (){var or__3630__auto__ = cljs.core.constant$keyword$85.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var accept__$1 = temp__4124__auto__;
var G__25934 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,"accept"], null),accept__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25934) : client.call(null,G__25934));
} else {
var G__25935 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25935) : client.call(null,G__25935));
}
});
;})(vec__25933,accept))
};
var wrap_accept = function (client,var_args){
var p__25929 = null;
if (arguments.length > 1) {
  p__25929 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return wrap_accept__delegate.call(this,client,p__25929);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__25936){
var client = cljs.core.first(arglist__25936);
var p__25929 = cljs.core.rest(arglist__25936);
return wrap_accept__delegate(client,p__25929);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__25937){
var vec__25941 = p__25937;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25941,(0),null);
return ((function (vec__25941,content_type){
return (function (request){
var temp__4124__auto__ = (function (){var or__3630__auto__ = cljs.core.constant$keyword$86.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var content_type__$1 = temp__4124__auto__;
var G__25942 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,"content-type"], null),content_type__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25942) : client.call(null,G__25942));
} else {
var G__25943 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25943) : client.call(null,G__25943));
}
});
;})(vec__25941,content_type))
};
var wrap_content_type = function (client,var_args){
var p__25937 = null;
if (arguments.length > 1) {
  p__25937 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return wrap_content_type__delegate.call(this,client,p__25937);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__25944){
var client = cljs.core.first(arglist__25944);
var p__25937 = cljs.core.rest(arglist__25944);
return wrap_content_type__delegate(client,p__25937);
});
wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = wrap_content_type__delegate;
return wrap_content_type;
})()
;
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$87,cljs.core.constant$keyword$91,cljs.core.constant$keyword$88,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$89,cljs.core.constant$keyword$91,cljs.core.constant$keyword$90,cljs.core.PersistentArrayMap.EMPTY], null);
/**
* Encode :transit-params in the `request` :body and set the appropriate
* Content Type header.
* 
* A :transit-opts map can be optionally provided with the following keys:
* 
* :encoding                #{:json, :json-verbose}
* :decoding                #{:json, :json-verbose}
* :encoding/decoding-opts  appropriate map of options to be passed to
* transit writer/reader, respectively.
*/
cljs_http.client.wrap_transit_params = (function wrap_transit_params(client){
return (function (request){
var temp__4124__auto__ = cljs.core.constant$keyword$92.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
var map__25948 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$93.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__25948__$1 = ((cljs.core.seq_QMARK_(map__25948))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25948):map__25948);
var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25948__$1,cljs.core.constant$keyword$88);
var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25948__$1,cljs.core.constant$keyword$87);
var G__25949 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$92),cljs.core.constant$keyword$75,cljs_http.util.transit_encode(params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,"content-type"], null),"application/transit+json");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25949) : client.call(null,G__25949));
} else {
var G__25950 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25950) : client.call(null,G__25950));
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){
return (function (request){
var map__25955 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$93.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__25955__$1 = ((cljs.core.seq_QMARK_(map__25955))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25955):map__25955);
var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25955__$1,cljs.core.constant$keyword$90);
var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25955__$1,cljs.core.constant$keyword$89);
var transit_decode = ((function (map__25955,map__25955__$1,decoding_opts,decoding){
return (function (p1__25951_SHARP_){
return cljs_http.util.transit_decode(p1__25951_SHARP_,decoding,decoding_opts);
});})(map__25955,map__25955__$1,decoding_opts,decoding))
;
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(((function (map__25955,map__25955__$1,decoding_opts,decoding,transit_decode){
return (function (p1__25952_SHARP_){
return cljs_http.client.decode_body(p1__25952_SHARP_,transit_decode,"application/transit+json",cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(request));
});})(map__25955,map__25955__$1,decoding_opts,decoding,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__25956 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25956) : client.call(null,G__25956));
})()], null));
});
});
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){
return (function (request){
var temp__4124__auto__ = cljs.core.constant$keyword$94.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
var G__25959 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$94),cljs.core.constant$keyword$75,cljs_http.util.json_encode(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,"content-type"], null),"application/json");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25959) : client.call(null,G__25959));
} else {
var G__25960 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25960) : client.call(null,G__25960));
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__25961_SHARP_){
return cljs_http.client.decode_body(p1__25961_SHARP_,cljs_http.util.json_decode,"application/json",cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__25963 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25963) : client.call(null,G__25963));
})()], null));
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){
return (function (p__25968){
var map__25969 = p__25968;
var map__25969__$1 = ((cljs.core.seq_QMARK_(map__25969))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25969):map__25969);
var req = map__25969__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25969__$1,cljs.core.constant$keyword$63);
if(cljs.core.truth_(query_params)){
var G__25970 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$63),cljs.core.constant$keyword$71,cljs_http.client.generate_query_string(query_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25970) : client.call(null,G__25970));
} else {
var G__25971 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25971) : client.call(null,G__25971));
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){
return (function (p__25976){
var map__25977 = p__25976;
var map__25977__$1 = ((cljs.core.seq_QMARK_(map__25977))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25977):map__25977);
var request = map__25977__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25977__$1,cljs.core.constant$keyword$77);
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25977__$1,cljs.core.constant$keyword$95);
if(cljs.core.truth_((function (){var and__3618__auto__ = form_params;
if(cljs.core.truth_(and__3618__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$96,null,cljs.core.constant$keyword$97,null,cljs.core.constant$keyword$98,null,cljs.core.constant$keyword$99,null], null), null).call(null,request_method);
} else {
return and__3618__auto__;
}
})())){
var G__25978 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$95),cljs.core.constant$keyword$75,cljs_http.client.generate_query_string(form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,"content-type"], null),"application/x-www-form-urlencoded");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25978) : client.call(null,G__25978));
} else {
var G__25979 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25979) : client.call(null,G__25979));
}
});
});
cljs_http.client.generate_form_data = (function generate_form_data(params){
var form_data = (new FormData());
var seq__25986_25992 = cljs.core.seq(params);
var chunk__25987_25993 = null;
var count__25988_25994 = (0);
var i__25989_25995 = (0);
while(true){
if((i__25989_25995 < count__25988_25994)){
var vec__25990_25996 = chunk__25987_25993.cljs$core$IIndexed$_nth$arity$2(null,i__25989_25995);
var k_25997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25990_25996,(0),null);
var v_25998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25990_25996,(1),null);
form_data.append(cljs.core.name(k_25997),v_25998);

var G__25999 = seq__25986_25992;
var G__26000 = chunk__25987_25993;
var G__26001 = count__25988_25994;
var G__26002 = (i__25989_25995 + (1));
seq__25986_25992 = G__25999;
chunk__25987_25993 = G__26000;
count__25988_25994 = G__26001;
i__25989_25995 = G__26002;
continue;
} else {
var temp__4126__auto___26003 = cljs.core.seq(seq__25986_25992);
if(temp__4126__auto___26003){
var seq__25986_26004__$1 = temp__4126__auto___26003;
if(cljs.core.chunked_seq_QMARK_(seq__25986_26004__$1)){
var c__4417__auto___26005 = cljs.core.chunk_first(seq__25986_26004__$1);
var G__26006 = cljs.core.chunk_rest(seq__25986_26004__$1);
var G__26007 = c__4417__auto___26005;
var G__26008 = cljs.core.count(c__4417__auto___26005);
var G__26009 = (0);
seq__25986_25992 = G__26006;
chunk__25987_25993 = G__26007;
count__25988_25994 = G__26008;
i__25989_25995 = G__26009;
continue;
} else {
var vec__25991_26010 = cljs.core.first(seq__25986_26004__$1);
var k_26011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25991_26010,(0),null);
var v_26012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25991_26010,(1),null);
form_data.append(cljs.core.name(k_26011),v_26012);

var G__26013 = cljs.core.next(seq__25986_26004__$1);
var G__26014 = null;
var G__26015 = (0);
var G__26016 = (0);
seq__25986_25992 = G__26013;
chunk__25987_25993 = G__26014;
count__25988_25994 = G__26015;
i__25989_25995 = G__26016;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function wrap_multipart_params(client){
return (function (p__26021){
var map__26022 = p__26021;
var map__26022__$1 = ((cljs.core.seq_QMARK_(map__26022))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26022):map__26022);
var request = map__26022__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26022__$1,cljs.core.constant$keyword$77);
var multipart_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26022__$1,cljs.core.constant$keyword$100);
if(cljs.core.truth_((function (){var and__3618__auto__ = multipart_params;
if(cljs.core.truth_(and__3618__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$96,null,cljs.core.constant$keyword$97,null,cljs.core.constant$keyword$98,null,cljs.core.constant$keyword$99,null], null), null).call(null,request_method);
} else {
return and__3618__auto__;
}
})())){
var G__26023 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$100),cljs.core.constant$keyword$75,cljs_http.client.generate_form_data(multipart_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,"content-type"], null),"multipart/form-data");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26023) : client.call(null,G__26023));
} else {
var G__26024 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26024) : client.call(null,G__26024));
}
});
});
cljs_http.client.wrap_method = (function wrap_method(client){
return (function (req){
var temp__4124__auto__ = cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4124__auto__)){
var m = temp__4124__auto__;
var G__26027 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$101),cljs.core.constant$keyword$77,m);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26027) : client.call(null,G__26027));
} else {
var G__26028 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26028) : client.call(null,G__26028));
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){
return (function (p1__26029_SHARP_){
var G__26031 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26029_SHARP_,cljs.core.constant$keyword$67,server_name);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26031) : client.call(null,G__26031));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){
return (function (p__26037){
var map__26038 = p__26037;
var map__26038__$1 = ((cljs.core.seq_QMARK_(map__26038))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26038):map__26038);
var req = map__26038__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26038__$1,cljs.core.constant$keyword$63);
var temp__4124__auto__ = cljs_http.client.parse_url(cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4124__auto__)){
var spec = temp__4124__auto__;
var G__26039 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),cljs.core.constant$keyword$102),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$63], null),((function (spec,temp__4124__auto__,map__26038,map__26038__$1,req,query_params){
return (function (p1__26032_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__26032_SHARP_,query_params], 0));
});})(spec,temp__4124__auto__,map__26038,map__26038__$1,req,query_params))
);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26039) : client.call(null,G__26039));
} else {
var G__26040 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26040) : client.call(null,G__26040));
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__26041){
var vec__26045 = p__26041;
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26045,(0),null);
return ((function (vec__26045,credentials){
return (function (req){
var credentials__$1 = (function (){var or__3630__auto__ = cljs.core.constant$keyword$103.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_(credentials__$1))){
var G__26046 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$103),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26046) : client.call(null,G__26046));
} else {
var G__26047 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26047) : client.call(null,G__26047));
}
});
;})(vec__26045,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__26041 = null;
if (arguments.length > 1) {
  p__26041 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return wrap_basic_auth__delegate.call(this,client,p__26041);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__26048){
var client = cljs.core.first(arglist__26048);
var p__26041 = cljs.core.rest(arglist__26048);
return wrap_basic_auth__delegate(client,p__26041);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){
return (function (req){
var temp__4124__auto__ = cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4124__auto__)){
var oauth_token = temp__4124__auto__;
var G__26051 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$104),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join(''));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26051) : client.call(null,G__26051));
} else {
var G__26052 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26052) : client.call(null,G__26052));
}
});
});
/**
* Pipe the response-channel into the request-map's
* custom channel (e.g. to enable transducers)
*/
cljs_http.client.wrap_channel_from_request_map = (function wrap_channel_from_request_map(client){
return (function (request){
var temp__4124__auto__ = cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var custom_channel = temp__4124__auto__;
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((function (){var G__26055 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26055) : client.call(null,G__26055));
})(),custom_channel);
} else {
var G__26056 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26056) : client.call(null,G__26056));
}
});
});
/**
* Returns a batteries-included HTTP request function coresponding to the given
* core client. See client/client.
*/
cljs_http.client.wrap_request = (function wrap_request(request){
return cljs_http.client.wrap_channel_from_request_map(cljs_http.client.wrap_url(cljs_http.client.wrap_method(cljs_http.client.wrap_oauth(cljs_http.client.wrap_basic_auth(cljs_http.client.wrap_query_params(cljs_http.client.wrap_json_response(cljs_http.client.wrap_json_params(cljs_http.client.wrap_transit_response(cljs_http.client.wrap_transit_params(cljs_http.client.wrap_edn_response(cljs_http.client.wrap_edn_params(cljs_http.client.wrap_content_type(cljs_http.client.wrap_multipart_params(cljs_http.client.wrap_form_params(cljs_http.client.wrap_accept(request))))))))))))))));
});
/**
* Executes the HTTP request corresponding to the given map and returns the
* response map for corresponding to the resulting HTTP response.
* 
* In addition to the standard Ring request keys, the following keys are also
* recognized:
* * :url
* * :method
* * :query-params
*/
cljs_http.client.request = cljs_http.client.wrap_request(cljs_http.core.request);
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.delete$ = (function() { 
var delete$__delegate = function (url,p__26057){
var vec__26060 = p__26057;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26060,(0),null);
var G__26061 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$101,cljs.core.constant$keyword$97,cljs.core.constant$keyword$102,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26061) : cljs_http.client.request.call(null,G__26061));
};
var delete$ = function (url,var_args){
var p__26057 = null;
if (arguments.length > 1) {
  p__26057 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return delete$__delegate.call(this,url,p__26057);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__26062){
var url = cljs.core.first(arglist__26062);
var p__26057 = cljs.core.rest(arglist__26062);
return delete$__delegate(url,p__26057);
});
delete$.cljs$core$IFn$_invoke$arity$variadic = delete$__delegate;
return delete$;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.get = (function() { 
var get__delegate = function (url,p__26063){
var vec__26066 = p__26063;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26066,(0),null);
var G__26067 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$101,cljs.core.constant$keyword$78,cljs.core.constant$keyword$102,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26067) : cljs_http.client.request.call(null,G__26067));
};
var get = function (url,var_args){
var p__26063 = null;
if (arguments.length > 1) {
  p__26063 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return get__delegate.call(this,url,p__26063);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__26068){
var url = cljs.core.first(arglist__26068);
var p__26063 = cljs.core.rest(arglist__26068);
return get__delegate(url,p__26063);
});
get.cljs$core$IFn$_invoke$arity$variadic = get__delegate;
return get;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.head = (function() { 
var head__delegate = function (url,p__26069){
var vec__26072 = p__26069;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26072,(0),null);
var G__26073 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$101,cljs.core.constant$keyword$83,cljs.core.constant$keyword$102,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26073) : cljs_http.client.request.call(null,G__26073));
};
var head = function (url,var_args){
var p__26069 = null;
if (arguments.length > 1) {
  p__26069 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return head__delegate.call(this,url,p__26069);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__26074){
var url = cljs.core.first(arglist__26074);
var p__26069 = cljs.core.rest(arglist__26074);
return head__delegate(url,p__26069);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.move = (function() { 
var move__delegate = function (url,p__26075){
var vec__26078 = p__26075;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26078,(0),null);
var G__26079 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$101,cljs.core.constant$keyword$106,cljs.core.constant$keyword$102,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26079) : cljs_http.client.request.call(null,G__26079));
};
var move = function (url,var_args){
var p__26075 = null;
if (arguments.length > 1) {
  p__26075 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return move__delegate.call(this,url,p__26075);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__26080){
var url = cljs.core.first(arglist__26080);
var p__26075 = cljs.core.rest(arglist__26080);
return move__delegate(url,p__26075);
});
move.cljs$core$IFn$_invoke$arity$variadic = move__delegate;
return move;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.options = (function() { 
var options__delegate = function (url,p__26081){
var vec__26084 = p__26081;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26084,(0),null);
var G__26085 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$101,cljs.core.constant$keyword$107,cljs.core.constant$keyword$102,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26085) : cljs_http.client.request.call(null,G__26085));
};
var options = function (url,var_args){
var p__26081 = null;
if (arguments.length > 1) {
  p__26081 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return options__delegate.call(this,url,p__26081);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__26086){
var url = cljs.core.first(arglist__26086);
var p__26081 = cljs.core.rest(arglist__26086);
return options__delegate(url,p__26081);
});
options.cljs$core$IFn$_invoke$arity$variadic = options__delegate;
return options;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.patch = (function() { 
var patch__delegate = function (url,p__26087){
var vec__26090 = p__26087;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26090,(0),null);
var G__26091 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$101,cljs.core.constant$keyword$96,cljs.core.constant$keyword$102,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26091) : cljs_http.client.request.call(null,G__26091));
};
var patch = function (url,var_args){
var p__26087 = null;
if (arguments.length > 1) {
  p__26087 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return patch__delegate.call(this,url,p__26087);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__26092){
var url = cljs.core.first(arglist__26092);
var p__26087 = cljs.core.rest(arglist__26092);
return patch__delegate(url,p__26087);
});
patch.cljs$core$IFn$_invoke$arity$variadic = patch__delegate;
return patch;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.post = (function() { 
var post__delegate = function (url,p__26093){
var vec__26096 = p__26093;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26096,(0),null);
var G__26097 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$101,cljs.core.constant$keyword$98,cljs.core.constant$keyword$102,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26097) : cljs_http.client.request.call(null,G__26097));
};
var post = function (url,var_args){
var p__26093 = null;
if (arguments.length > 1) {
  p__26093 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return post__delegate.call(this,url,p__26093);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__26098){
var url = cljs.core.first(arglist__26098);
var p__26093 = cljs.core.rest(arglist__26098);
return post__delegate(url,p__26093);
});
post.cljs$core$IFn$_invoke$arity$variadic = post__delegate;
return post;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.put = (function() { 
var put__delegate = function (url,p__26099){
var vec__26102 = p__26099;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26102,(0),null);
var G__26103 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$101,cljs.core.constant$keyword$99,cljs.core.constant$keyword$102,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26103) : cljs_http.client.request.call(null,G__26103));
};
var put = function (url,var_args){
var p__26099 = null;
if (arguments.length > 1) {
  p__26099 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return put__delegate.call(this,url,p__26099);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__26104){
var url = cljs.core.first(arglist__26104);
var p__26099 = cljs.core.rest(arglist__26104);
return put__delegate(url,p__26099);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;
