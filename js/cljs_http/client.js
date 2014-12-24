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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__25921_SHARP_,p2__25920_SHARP_){
var vec__25923 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__25920_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25923,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25923,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25921_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
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
var uri = (function (){var G__25925 = url;
return goog.Uri.parse(G__25925);
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
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25926_SHARP_){
return cljs_http.client.encode_val(k,p1__25926_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__25927){
var vec__25929 = p__25927;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25929,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25929,(1),null);
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
return (function (p1__25930_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__25930_SHARP_)].join('');
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
var G__25933 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$84),cljs.core.constant$keyword$75,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,"content-type"], null),"application/edn");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25933) : client.call(null,G__25933));
} else {
var G__25934 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25934) : client.call(null,G__25934));
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__25935_SHARP_){
return cljs_http.client.decode_body(p1__25935_SHARP_,cljs.reader.read_string,"application/edn",cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__25937 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25937) : client.call(null,G__25937));
})()], null));
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__25938){
var vec__25942 = p__25938;
var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25942,(0),null);
return ((function (vec__25942,accept){
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
var G__25943 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,"accept"], null),accept__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25943) : client.call(null,G__25943));
} else {
var G__25944 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25944) : client.call(null,G__25944));
}
});
;})(vec__25942,accept))
};
var wrap_accept = function (client,var_args){
var p__25938 = null;
if (arguments.length > 1) {
  p__25938 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return wrap_accept__delegate.call(this,client,p__25938);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__25945){
var client = cljs.core.first(arglist__25945);
var p__25938 = cljs.core.rest(arglist__25945);
return wrap_accept__delegate(client,p__25938);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__25946){
var vec__25950 = p__25946;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25950,(0),null);
return ((function (vec__25950,content_type){
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
var G__25951 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,"content-type"], null),content_type__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25951) : client.call(null,G__25951));
} else {
var G__25952 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25952) : client.call(null,G__25952));
}
});
;})(vec__25950,content_type))
};
var wrap_content_type = function (client,var_args){
var p__25946 = null;
if (arguments.length > 1) {
  p__25946 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return wrap_content_type__delegate.call(this,client,p__25946);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__25953){
var client = cljs.core.first(arglist__25953);
var p__25946 = cljs.core.rest(arglist__25953);
return wrap_content_type__delegate(client,p__25946);
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
var map__25957 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$93.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__25957__$1 = ((cljs.core.seq_QMARK_(map__25957))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25957):map__25957);
var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25957__$1,cljs.core.constant$keyword$88);
var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25957__$1,cljs.core.constant$keyword$87);
var G__25958 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$92),cljs.core.constant$keyword$75,cljs_http.util.transit_encode(params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,"content-type"], null),"application/transit+json");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25958) : client.call(null,G__25958));
} else {
var G__25959 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25959) : client.call(null,G__25959));
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){
return (function (request){
var map__25964 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$93.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__25964__$1 = ((cljs.core.seq_QMARK_(map__25964))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25964):map__25964);
var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25964__$1,cljs.core.constant$keyword$90);
var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25964__$1,cljs.core.constant$keyword$89);
var transit_decode = ((function (map__25964,map__25964__$1,decoding_opts,decoding){
return (function (p1__25960_SHARP_){
return cljs_http.util.transit_decode(p1__25960_SHARP_,decoding,decoding_opts);
});})(map__25964,map__25964__$1,decoding_opts,decoding))
;
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(((function (map__25964,map__25964__$1,decoding_opts,decoding,transit_decode){
return (function (p1__25961_SHARP_){
return cljs_http.client.decode_body(p1__25961_SHARP_,transit_decode,"application/transit+json",cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(request));
});})(map__25964,map__25964__$1,decoding_opts,decoding,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__25965 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25965) : client.call(null,G__25965));
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
var G__25968 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$94),cljs.core.constant$keyword$75,cljs_http.util.json_encode(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,"content-type"], null),"application/json");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25968) : client.call(null,G__25968));
} else {
var G__25969 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25969) : client.call(null,G__25969));
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__25970_SHARP_){
return cljs_http.client.decode_body(p1__25970_SHARP_,cljs_http.util.json_decode,"application/json",cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__25972 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25972) : client.call(null,G__25972));
})()], null));
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){
return (function (p__25977){
var map__25978 = p__25977;
var map__25978__$1 = ((cljs.core.seq_QMARK_(map__25978))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25978):map__25978);
var req = map__25978__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25978__$1,cljs.core.constant$keyword$63);
if(cljs.core.truth_(query_params)){
var G__25979 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$63),cljs.core.constant$keyword$71,cljs_http.client.generate_query_string(query_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25979) : client.call(null,G__25979));
} else {
var G__25980 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25980) : client.call(null,G__25980));
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){
return (function (p__25985){
var map__25986 = p__25985;
var map__25986__$1 = ((cljs.core.seq_QMARK_(map__25986))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25986):map__25986);
var request = map__25986__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25986__$1,cljs.core.constant$keyword$77);
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25986__$1,cljs.core.constant$keyword$95);
if(cljs.core.truth_((function (){var and__3618__auto__ = form_params;
if(cljs.core.truth_(and__3618__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$96,null,cljs.core.constant$keyword$97,null,cljs.core.constant$keyword$98,null,cljs.core.constant$keyword$99,null], null), null).call(null,request_method);
} else {
return and__3618__auto__;
}
})())){
var G__25987 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$95),cljs.core.constant$keyword$75,cljs_http.client.generate_query_string(form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,"content-type"], null),"application/x-www-form-urlencoded");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25987) : client.call(null,G__25987));
} else {
var G__25988 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25988) : client.call(null,G__25988));
}
});
});
cljs_http.client.generate_form_data = (function generate_form_data(params){
var form_data = (new FormData());
var seq__25995_26001 = cljs.core.seq(params);
var chunk__25996_26002 = null;
var count__25997_26003 = (0);
var i__25998_26004 = (0);
while(true){
if((i__25998_26004 < count__25997_26003)){
var vec__25999_26005 = chunk__25996_26002.cljs$core$IIndexed$_nth$arity$2(null,i__25998_26004);
var k_26006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25999_26005,(0),null);
var v_26007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25999_26005,(1),null);
form_data.append(cljs.core.name(k_26006),v_26007);

var G__26008 = seq__25995_26001;
var G__26009 = chunk__25996_26002;
var G__26010 = count__25997_26003;
var G__26011 = (i__25998_26004 + (1));
seq__25995_26001 = G__26008;
chunk__25996_26002 = G__26009;
count__25997_26003 = G__26010;
i__25998_26004 = G__26011;
continue;
} else {
var temp__4126__auto___26012 = cljs.core.seq(seq__25995_26001);
if(temp__4126__auto___26012){
var seq__25995_26013__$1 = temp__4126__auto___26012;
if(cljs.core.chunked_seq_QMARK_(seq__25995_26013__$1)){
var c__4417__auto___26014 = cljs.core.chunk_first(seq__25995_26013__$1);
var G__26015 = cljs.core.chunk_rest(seq__25995_26013__$1);
var G__26016 = c__4417__auto___26014;
var G__26017 = cljs.core.count(c__4417__auto___26014);
var G__26018 = (0);
seq__25995_26001 = G__26015;
chunk__25996_26002 = G__26016;
count__25997_26003 = G__26017;
i__25998_26004 = G__26018;
continue;
} else {
var vec__26000_26019 = cljs.core.first(seq__25995_26013__$1);
var k_26020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26000_26019,(0),null);
var v_26021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26000_26019,(1),null);
form_data.append(cljs.core.name(k_26020),v_26021);

var G__26022 = cljs.core.next(seq__25995_26013__$1);
var G__26023 = null;
var G__26024 = (0);
var G__26025 = (0);
seq__25995_26001 = G__26022;
chunk__25996_26002 = G__26023;
count__25997_26003 = G__26024;
i__25998_26004 = G__26025;
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
return (function (p__26030){
var map__26031 = p__26030;
var map__26031__$1 = ((cljs.core.seq_QMARK_(map__26031))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26031):map__26031);
var request = map__26031__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26031__$1,cljs.core.constant$keyword$77);
var multipart_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26031__$1,cljs.core.constant$keyword$100);
if(cljs.core.truth_((function (){var and__3618__auto__ = multipart_params;
if(cljs.core.truth_(and__3618__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$96,null,cljs.core.constant$keyword$97,null,cljs.core.constant$keyword$98,null,cljs.core.constant$keyword$99,null], null), null).call(null,request_method);
} else {
return and__3618__auto__;
}
})())){
var G__26032 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$100),cljs.core.constant$keyword$75,cljs_http.client.generate_form_data(multipart_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,"content-type"], null),"multipart/form-data");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26032) : client.call(null,G__26032));
} else {
var G__26033 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26033) : client.call(null,G__26033));
}
});
});
cljs_http.client.wrap_method = (function wrap_method(client){
return (function (req){
var temp__4124__auto__ = cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4124__auto__)){
var m = temp__4124__auto__;
var G__26036 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$101),cljs.core.constant$keyword$77,m);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26036) : client.call(null,G__26036));
} else {
var G__26037 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26037) : client.call(null,G__26037));
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){
return (function (p1__26038_SHARP_){
var G__26040 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26038_SHARP_,cljs.core.constant$keyword$67,server_name);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26040) : client.call(null,G__26040));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){
return (function (p__26046){
var map__26047 = p__26046;
var map__26047__$1 = ((cljs.core.seq_QMARK_(map__26047))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26047):map__26047);
var req = map__26047__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26047__$1,cljs.core.constant$keyword$63);
var temp__4124__auto__ = cljs_http.client.parse_url(cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4124__auto__)){
var spec = temp__4124__auto__;
var G__26048 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),cljs.core.constant$keyword$102),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$63], null),((function (spec,temp__4124__auto__,map__26047,map__26047__$1,req,query_params){
return (function (p1__26041_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__26041_SHARP_,query_params], 0));
});})(spec,temp__4124__auto__,map__26047,map__26047__$1,req,query_params))
);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26048) : client.call(null,G__26048));
} else {
var G__26049 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26049) : client.call(null,G__26049));
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__26050){
var vec__26054 = p__26050;
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26054,(0),null);
return ((function (vec__26054,credentials){
return (function (req){
var credentials__$1 = (function (){var or__3630__auto__ = cljs.core.constant$keyword$103.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_(credentials__$1))){
var G__26055 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$103),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26055) : client.call(null,G__26055));
} else {
var G__26056 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26056) : client.call(null,G__26056));
}
});
;})(vec__26054,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__26050 = null;
if (arguments.length > 1) {
  p__26050 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return wrap_basic_auth__delegate.call(this,client,p__26050);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__26057){
var client = cljs.core.first(arglist__26057);
var p__26050 = cljs.core.rest(arglist__26057);
return wrap_basic_auth__delegate(client,p__26050);
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
var G__26060 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$104),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join(''));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26060) : client.call(null,G__26060));
} else {
var G__26061 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26061) : client.call(null,G__26061));
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
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((function (){var G__26064 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26064) : client.call(null,G__26064));
})(),custom_channel);
} else {
var G__26065 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26065) : client.call(null,G__26065));
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
var delete$__delegate = function (url,p__26066){
var vec__26069 = p__26066;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26069,(0),null);
var G__26070 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$101,cljs.core.constant$keyword$97,cljs.core.constant$keyword$102,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26070) : cljs_http.client.request.call(null,G__26070));
};
var delete$ = function (url,var_args){
var p__26066 = null;
if (arguments.length > 1) {
  p__26066 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return delete$__delegate.call(this,url,p__26066);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__26071){
var url = cljs.core.first(arglist__26071);
var p__26066 = cljs.core.rest(arglist__26071);
return delete$__delegate(url,p__26066);
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
var get__delegate = function (url,p__26072){
var vec__26075 = p__26072;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26075,(0),null);
var G__26076 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$101,cljs.core.constant$keyword$78,cljs.core.constant$keyword$102,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26076) : cljs_http.client.request.call(null,G__26076));
};
var get = function (url,var_args){
var p__26072 = null;
if (arguments.length > 1) {
  p__26072 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return get__delegate.call(this,url,p__26072);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__26077){
var url = cljs.core.first(arglist__26077);
var p__26072 = cljs.core.rest(arglist__26077);
return get__delegate(url,p__26072);
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
var head__delegate = function (url,p__26078){
var vec__26081 = p__26078;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26081,(0),null);
var G__26082 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$101,cljs.core.constant$keyword$83,cljs.core.constant$keyword$102,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26082) : cljs_http.client.request.call(null,G__26082));
};
var head = function (url,var_args){
var p__26078 = null;
if (arguments.length > 1) {
  p__26078 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return head__delegate.call(this,url,p__26078);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__26083){
var url = cljs.core.first(arglist__26083);
var p__26078 = cljs.core.rest(arglist__26083);
return head__delegate(url,p__26078);
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
var move__delegate = function (url,p__26084){
var vec__26087 = p__26084;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26087,(0),null);
var G__26088 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$101,cljs.core.constant$keyword$106,cljs.core.constant$keyword$102,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26088) : cljs_http.client.request.call(null,G__26088));
};
var move = function (url,var_args){
var p__26084 = null;
if (arguments.length > 1) {
  p__26084 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return move__delegate.call(this,url,p__26084);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__26089){
var url = cljs.core.first(arglist__26089);
var p__26084 = cljs.core.rest(arglist__26089);
return move__delegate(url,p__26084);
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
var options__delegate = function (url,p__26090){
var vec__26093 = p__26090;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26093,(0),null);
var G__26094 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$101,cljs.core.constant$keyword$107,cljs.core.constant$keyword$102,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26094) : cljs_http.client.request.call(null,G__26094));
};
var options = function (url,var_args){
var p__26090 = null;
if (arguments.length > 1) {
  p__26090 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return options__delegate.call(this,url,p__26090);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__26095){
var url = cljs.core.first(arglist__26095);
var p__26090 = cljs.core.rest(arglist__26095);
return options__delegate(url,p__26090);
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
var patch__delegate = function (url,p__26096){
var vec__26099 = p__26096;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26099,(0),null);
var G__26100 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$101,cljs.core.constant$keyword$96,cljs.core.constant$keyword$102,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26100) : cljs_http.client.request.call(null,G__26100));
};
var patch = function (url,var_args){
var p__26096 = null;
if (arguments.length > 1) {
  p__26096 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return patch__delegate.call(this,url,p__26096);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__26101){
var url = cljs.core.first(arglist__26101);
var p__26096 = cljs.core.rest(arglist__26101);
return patch__delegate(url,p__26096);
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
var post__delegate = function (url,p__26102){
var vec__26105 = p__26102;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26105,(0),null);
var G__26106 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$101,cljs.core.constant$keyword$98,cljs.core.constant$keyword$102,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26106) : cljs_http.client.request.call(null,G__26106));
};
var post = function (url,var_args){
var p__26102 = null;
if (arguments.length > 1) {
  p__26102 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return post__delegate.call(this,url,p__26102);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__26107){
var url = cljs.core.first(arglist__26107);
var p__26102 = cljs.core.rest(arglist__26107);
return post__delegate(url,p__26102);
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
var put__delegate = function (url,p__26108){
var vec__26111 = p__26108;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26111,(0),null);
var G__26112 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$101,cljs.core.constant$keyword$99,cljs.core.constant$keyword$102,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26112) : cljs_http.client.request.call(null,G__26112));
};
var put = function (url,var_args){
var p__26108 = null;
if (arguments.length > 1) {
  p__26108 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return put__delegate.call(this,url,p__26108);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__26113){
var url = cljs.core.first(arglist__26113);
var p__26108 = cljs.core.rest(arglist__26113);
return put__delegate(url,p__26108);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;
