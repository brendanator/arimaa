// Compiled by ClojureScript 0.0-2727 {}
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
if(cljs.core.truth_((function (){var and__3738__auto__ = v;
if(cljs.core.truth_(and__3738__auto__)){
return (v > (0));
} else {
return and__3738__auto__;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__24286_SHARP_,p2__24285_SHARP_){
var vec__24288 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__24285_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24288,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24288,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24286_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
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
var uri = (function (){var G__24290 = url;
return goog.Uri.parse(G__24290);
})();
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$167,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),cljs.core.constant$keyword$170,uri.getDomain(),cljs.core.constant$keyword$171,cljs_http.client.if_pos(uri.getPort()),cljs.core.constant$keyword$172,uri.getPath(),cljs.core.constant$keyword$174,((cljs.core.not(query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),cljs.core.constant$keyword$166,((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params([cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode(cljs.core.name(k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode([cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24291_SHARP_){
return cljs_http.client.encode_val(k,p1__24291_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__24292){
var vec__24294 = p__24292;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24294,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24294,(1),null);
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
return (function (p1__24295_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__24295_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var and__3738__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$203,request_method);
if(and__3738__auto__){
return cljs.core.re_find(cljs.core.re_pattern([cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special(content_type))].join('')),[cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$196.cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__3738__auto__;
}
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$195], null),decode_fn);
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
var temp__4124__auto__ = cljs.core.constant$keyword$204.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
var G__24298 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$204),cljs.core.constant$keyword$195,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$196,"content-type"], null),"application/edn");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__24298) : client.call(null,G__24298));
} else {
var G__24299 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__24299) : client.call(null,G__24299));
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__24300_SHARP_){
return cljs_http.client.decode_body(p1__24300_SHARP_,cljs.reader.read_string,"application/edn",cljs.core.constant$keyword$197.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24302 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__24302) : client.call(null,G__24302));
})()], null));
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__24303){
var vec__24307 = p__24303;
var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24307,(0),null);
return ((function (vec__24307,accept){
return (function (request){
var temp__4124__auto__ = (function (){var or__3750__auto__ = cljs.core.constant$keyword$205.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3750__auto__)){
return or__3750__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var accept__$1 = temp__4124__auto__;
var G__24308 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$196,"accept"], null),accept__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__24308) : client.call(null,G__24308));
} else {
var G__24309 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__24309) : client.call(null,G__24309));
}
});
;})(vec__24307,accept))
};
var wrap_accept = function (client,var_args){
var p__24303 = null;
if (arguments.length > 1) {
var G__24310__i = 0, G__24310__a = new Array(arguments.length -  1);
while (G__24310__i < G__24310__a.length) {G__24310__a[G__24310__i] = arguments[G__24310__i + 1]; ++G__24310__i;}
  p__24303 = new cljs.core.IndexedSeq(G__24310__a,0);
} 
return wrap_accept__delegate.call(this,client,p__24303);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__24311){
var client = cljs.core.first(arglist__24311);
var p__24303 = cljs.core.rest(arglist__24311);
return wrap_accept__delegate(client,p__24303);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__24312){
var vec__24316 = p__24312;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24316,(0),null);
return ((function (vec__24316,content_type){
return (function (request){
var temp__4124__auto__ = (function (){var or__3750__auto__ = cljs.core.constant$keyword$206.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3750__auto__)){
return or__3750__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var content_type__$1 = temp__4124__auto__;
var G__24317 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$196,"content-type"], null),content_type__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__24317) : client.call(null,G__24317));
} else {
var G__24318 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__24318) : client.call(null,G__24318));
}
});
;})(vec__24316,content_type))
};
var wrap_content_type = function (client,var_args){
var p__24312 = null;
if (arguments.length > 1) {
var G__24319__i = 0, G__24319__a = new Array(arguments.length -  1);
while (G__24319__i < G__24319__a.length) {G__24319__a[G__24319__i] = arguments[G__24319__i + 1]; ++G__24319__i;}
  p__24312 = new cljs.core.IndexedSeq(G__24319__a,0);
} 
return wrap_content_type__delegate.call(this,client,p__24312);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__24320){
var client = cljs.core.first(arglist__24320);
var p__24312 = cljs.core.rest(arglist__24320);
return wrap_content_type__delegate(client,p__24312);
});
wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = wrap_content_type__delegate;
return wrap_content_type;
})()
;
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$207,cljs.core.constant$keyword$211,cljs.core.constant$keyword$208,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$209,cljs.core.constant$keyword$211,cljs.core.constant$keyword$210,cljs.core.PersistentArrayMap.EMPTY], null);
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
var temp__4124__auto__ = cljs.core.constant$keyword$212.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
var map__24324 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$213.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__24324__$1 = ((cljs.core.seq_QMARK_(map__24324))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24324):map__24324);
var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24324__$1,cljs.core.constant$keyword$208);
var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24324__$1,cljs.core.constant$keyword$207);
var G__24325 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$212),cljs.core.constant$keyword$195,cljs_http.util.transit_encode(params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$196,"content-type"], null),"application/transit+json");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__24325) : client.call(null,G__24325));
} else {
var G__24326 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__24326) : client.call(null,G__24326));
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){
return (function (request){
var map__24331 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$213.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__24331__$1 = ((cljs.core.seq_QMARK_(map__24331))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24331):map__24331);
var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24331__$1,cljs.core.constant$keyword$210);
var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24331__$1,cljs.core.constant$keyword$209);
var transit_decode = ((function (map__24331,map__24331__$1,decoding_opts,decoding){
return (function (p1__24327_SHARP_){
return cljs_http.util.transit_decode(p1__24327_SHARP_,decoding,decoding_opts);
});})(map__24331,map__24331__$1,decoding_opts,decoding))
;
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(((function (map__24331,map__24331__$1,decoding_opts,decoding,transit_decode){
return (function (p1__24328_SHARP_){
return cljs_http.client.decode_body(p1__24328_SHARP_,transit_decode,"application/transit+json",cljs.core.constant$keyword$197.cljs$core$IFn$_invoke$arity$1(request));
});})(map__24331,map__24331__$1,decoding_opts,decoding,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24332 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__24332) : client.call(null,G__24332));
})()], null));
});
});
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){
return (function (request){
var temp__4124__auto__ = cljs.core.constant$keyword$214.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
var G__24335 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$214),cljs.core.constant$keyword$195,cljs_http.util.json_encode(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$196,"content-type"], null),"application/json");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__24335) : client.call(null,G__24335));
} else {
var G__24336 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__24336) : client.call(null,G__24336));
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__24337_SHARP_){
return cljs_http.client.decode_body(p1__24337_SHARP_,cljs_http.util.json_decode,"application/json",cljs.core.constant$keyword$197.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24339 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__24339) : client.call(null,G__24339));
})()], null));
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){
return (function (p__24344){
var map__24345 = p__24344;
var map__24345__$1 = ((cljs.core.seq_QMARK_(map__24345))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24345):map__24345);
var req = map__24345__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24345__$1,cljs.core.constant$keyword$166);
if(cljs.core.truth_(query_params)){
var G__24346 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$166),cljs.core.constant$keyword$174,cljs_http.client.generate_query_string(query_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__24346) : client.call(null,G__24346));
} else {
var G__24347 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__24347) : client.call(null,G__24347));
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){
return (function (p__24352){
var map__24353 = p__24352;
var map__24353__$1 = ((cljs.core.seq_QMARK_(map__24353))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24353):map__24353);
var request = map__24353__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24353__$1,cljs.core.constant$keyword$197);
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24353__$1,cljs.core.constant$keyword$215);
if(cljs.core.truth_((function (){var and__3738__auto__ = form_params;
if(cljs.core.truth_(and__3738__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$216,null,cljs.core.constant$keyword$217,null,cljs.core.constant$keyword$218,null,cljs.core.constant$keyword$219,null], null), null).call(null,request_method);
} else {
return and__3738__auto__;
}
})())){
var G__24354 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$215),cljs.core.constant$keyword$195,cljs_http.client.generate_query_string(form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$196,"content-type"], null),"application/x-www-form-urlencoded");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__24354) : client.call(null,G__24354));
} else {
var G__24355 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__24355) : client.call(null,G__24355));
}
});
});
cljs_http.client.generate_form_data = (function generate_form_data(params){
var form_data = (new FormData());
var seq__24362_24368 = cljs.core.seq(params);
var chunk__24363_24369 = null;
var count__24364_24370 = (0);
var i__24365_24371 = (0);
while(true){
if((i__24365_24371 < count__24364_24370)){
var vec__24366_24372 = chunk__24363_24369.cljs$core$IIndexed$_nth$arity$2(null,i__24365_24371);
var k_24373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24366_24372,(0),null);
var v_24374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24366_24372,(1),null);
form_data.append(cljs.core.name(k_24373),v_24374);

var G__24375 = seq__24362_24368;
var G__24376 = chunk__24363_24369;
var G__24377 = count__24364_24370;
var G__24378 = (i__24365_24371 + (1));
seq__24362_24368 = G__24375;
chunk__24363_24369 = G__24376;
count__24364_24370 = G__24377;
i__24365_24371 = G__24378;
continue;
} else {
var temp__4126__auto___24379 = cljs.core.seq(seq__24362_24368);
if(temp__4126__auto___24379){
var seq__24362_24380__$1 = temp__4126__auto___24379;
if(cljs.core.chunked_seq_QMARK_(seq__24362_24380__$1)){
var c__4537__auto___24381 = cljs.core.chunk_first(seq__24362_24380__$1);
var G__24382 = cljs.core.chunk_rest(seq__24362_24380__$1);
var G__24383 = c__4537__auto___24381;
var G__24384 = cljs.core.count(c__4537__auto___24381);
var G__24385 = (0);
seq__24362_24368 = G__24382;
chunk__24363_24369 = G__24383;
count__24364_24370 = G__24384;
i__24365_24371 = G__24385;
continue;
} else {
var vec__24367_24386 = cljs.core.first(seq__24362_24380__$1);
var k_24387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24367_24386,(0),null);
var v_24388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24367_24386,(1),null);
form_data.append(cljs.core.name(k_24387),v_24388);

var G__24389 = cljs.core.next(seq__24362_24380__$1);
var G__24390 = null;
var G__24391 = (0);
var G__24392 = (0);
seq__24362_24368 = G__24389;
chunk__24363_24369 = G__24390;
count__24364_24370 = G__24391;
i__24365_24371 = G__24392;
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
return (function (p__24397){
var map__24398 = p__24397;
var map__24398__$1 = ((cljs.core.seq_QMARK_(map__24398))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24398):map__24398);
var request = map__24398__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24398__$1,cljs.core.constant$keyword$197);
var multipart_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24398__$1,cljs.core.constant$keyword$220);
if(cljs.core.truth_((function (){var and__3738__auto__ = multipart_params;
if(cljs.core.truth_(and__3738__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$216,null,cljs.core.constant$keyword$217,null,cljs.core.constant$keyword$218,null,cljs.core.constant$keyword$219,null], null), null).call(null,request_method);
} else {
return and__3738__auto__;
}
})())){
var G__24399 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$220),cljs.core.constant$keyword$195,cljs_http.client.generate_form_data(multipart_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$196,"content-type"], null),"multipart/form-data");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__24399) : client.call(null,G__24399));
} else {
var G__24400 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__24400) : client.call(null,G__24400));
}
});
});
cljs_http.client.wrap_method = (function wrap_method(client){
return (function (req){
var temp__4124__auto__ = cljs.core.constant$keyword$221.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4124__auto__)){
var m = temp__4124__auto__;
var G__24403 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$221),cljs.core.constant$keyword$197,m);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__24403) : client.call(null,G__24403));
} else {
var G__24404 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__24404) : client.call(null,G__24404));
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){
return (function (p1__24405_SHARP_){
var G__24407 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24405_SHARP_,cljs.core.constant$keyword$170,server_name);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__24407) : client.call(null,G__24407));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){
return (function (p__24413){
var map__24414 = p__24413;
var map__24414__$1 = ((cljs.core.seq_QMARK_(map__24414))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24414):map__24414);
var req = map__24414__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24414__$1,cljs.core.constant$keyword$166);
var temp__4124__auto__ = cljs_http.client.parse_url(cljs.core.constant$keyword$222.cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4124__auto__)){
var spec = temp__4124__auto__;
var G__24415 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),cljs.core.constant$keyword$222),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$166], null),((function (spec,temp__4124__auto__,map__24414,map__24414__$1,req,query_params){
return (function (p1__24408_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__24408_SHARP_,query_params], 0));
});})(spec,temp__4124__auto__,map__24414,map__24414__$1,req,query_params))
);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__24415) : client.call(null,G__24415));
} else {
var G__24416 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__24416) : client.call(null,G__24416));
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__24417){
var vec__24421 = p__24417;
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24421,(0),null);
return ((function (vec__24421,credentials){
return (function (req){
var credentials__$1 = (function (){var or__3750__auto__ = cljs.core.constant$keyword$223.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__3750__auto__)){
return or__3750__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_(credentials__$1))){
var G__24422 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$223),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$196,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__24422) : client.call(null,G__24422));
} else {
var G__24423 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__24423) : client.call(null,G__24423));
}
});
;})(vec__24421,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__24417 = null;
if (arguments.length > 1) {
var G__24424__i = 0, G__24424__a = new Array(arguments.length -  1);
while (G__24424__i < G__24424__a.length) {G__24424__a[G__24424__i] = arguments[G__24424__i + 1]; ++G__24424__i;}
  p__24417 = new cljs.core.IndexedSeq(G__24424__a,0);
} 
return wrap_basic_auth__delegate.call(this,client,p__24417);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__24425){
var client = cljs.core.first(arglist__24425);
var p__24417 = cljs.core.rest(arglist__24425);
return wrap_basic_auth__delegate(client,p__24417);
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
var temp__4124__auto__ = cljs.core.constant$keyword$224.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4124__auto__)){
var oauth_token = temp__4124__auto__;
var G__24428 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$224),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$196,"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join(''));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__24428) : client.call(null,G__24428));
} else {
var G__24429 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__24429) : client.call(null,G__24429));
}
});
});
/**
* Pipe the response-channel into the request-map's
* custom channel (e.g. to enable transducers)
*/
cljs_http.client.wrap_channel_from_request_map = (function wrap_channel_from_request_map(client){
return (function (request){
var temp__4124__auto__ = cljs.core.constant$keyword$225.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var custom_channel = temp__4124__auto__;
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((function (){var G__24432 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__24432) : client.call(null,G__24432));
})(),custom_channel);
} else {
var G__24433 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__24433) : client.call(null,G__24433));
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
var delete$__delegate = function (url,p__24434){
var vec__24437 = p__24434;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24437,(0),null);
var G__24438 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$221,cljs.core.constant$keyword$217,cljs.core.constant$keyword$222,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__24438) : cljs_http.client.request.call(null,G__24438));
};
var delete$ = function (url,var_args){
var p__24434 = null;
if (arguments.length > 1) {
var G__24439__i = 0, G__24439__a = new Array(arguments.length -  1);
while (G__24439__i < G__24439__a.length) {G__24439__a[G__24439__i] = arguments[G__24439__i + 1]; ++G__24439__i;}
  p__24434 = new cljs.core.IndexedSeq(G__24439__a,0);
} 
return delete$__delegate.call(this,url,p__24434);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__24440){
var url = cljs.core.first(arglist__24440);
var p__24434 = cljs.core.rest(arglist__24440);
return delete$__delegate(url,p__24434);
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
var get__delegate = function (url,p__24441){
var vec__24444 = p__24441;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24444,(0),null);
var G__24445 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$221,cljs.core.constant$keyword$198,cljs.core.constant$keyword$222,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__24445) : cljs_http.client.request.call(null,G__24445));
};
var get = function (url,var_args){
var p__24441 = null;
if (arguments.length > 1) {
var G__24446__i = 0, G__24446__a = new Array(arguments.length -  1);
while (G__24446__i < G__24446__a.length) {G__24446__a[G__24446__i] = arguments[G__24446__i + 1]; ++G__24446__i;}
  p__24441 = new cljs.core.IndexedSeq(G__24446__a,0);
} 
return get__delegate.call(this,url,p__24441);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__24447){
var url = cljs.core.first(arglist__24447);
var p__24441 = cljs.core.rest(arglist__24447);
return get__delegate(url,p__24441);
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
var head__delegate = function (url,p__24448){
var vec__24451 = p__24448;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24451,(0),null);
var G__24452 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$221,cljs.core.constant$keyword$203,cljs.core.constant$keyword$222,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__24452) : cljs_http.client.request.call(null,G__24452));
};
var head = function (url,var_args){
var p__24448 = null;
if (arguments.length > 1) {
var G__24453__i = 0, G__24453__a = new Array(arguments.length -  1);
while (G__24453__i < G__24453__a.length) {G__24453__a[G__24453__i] = arguments[G__24453__i + 1]; ++G__24453__i;}
  p__24448 = new cljs.core.IndexedSeq(G__24453__a,0);
} 
return head__delegate.call(this,url,p__24448);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__24454){
var url = cljs.core.first(arglist__24454);
var p__24448 = cljs.core.rest(arglist__24454);
return head__delegate(url,p__24448);
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
var move__delegate = function (url,p__24455){
var vec__24458 = p__24455;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24458,(0),null);
var G__24459 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$221,cljs.core.constant$keyword$226,cljs.core.constant$keyword$222,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__24459) : cljs_http.client.request.call(null,G__24459));
};
var move = function (url,var_args){
var p__24455 = null;
if (arguments.length > 1) {
var G__24460__i = 0, G__24460__a = new Array(arguments.length -  1);
while (G__24460__i < G__24460__a.length) {G__24460__a[G__24460__i] = arguments[G__24460__i + 1]; ++G__24460__i;}
  p__24455 = new cljs.core.IndexedSeq(G__24460__a,0);
} 
return move__delegate.call(this,url,p__24455);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__24461){
var url = cljs.core.first(arglist__24461);
var p__24455 = cljs.core.rest(arglist__24461);
return move__delegate(url,p__24455);
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
var options__delegate = function (url,p__24462){
var vec__24465 = p__24462;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24465,(0),null);
var G__24466 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$221,cljs.core.constant$keyword$227,cljs.core.constant$keyword$222,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__24466) : cljs_http.client.request.call(null,G__24466));
};
var options = function (url,var_args){
var p__24462 = null;
if (arguments.length > 1) {
var G__24467__i = 0, G__24467__a = new Array(arguments.length -  1);
while (G__24467__i < G__24467__a.length) {G__24467__a[G__24467__i] = arguments[G__24467__i + 1]; ++G__24467__i;}
  p__24462 = new cljs.core.IndexedSeq(G__24467__a,0);
} 
return options__delegate.call(this,url,p__24462);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__24468){
var url = cljs.core.first(arglist__24468);
var p__24462 = cljs.core.rest(arglist__24468);
return options__delegate(url,p__24462);
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
var patch__delegate = function (url,p__24469){
var vec__24472 = p__24469;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24472,(0),null);
var G__24473 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$221,cljs.core.constant$keyword$216,cljs.core.constant$keyword$222,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__24473) : cljs_http.client.request.call(null,G__24473));
};
var patch = function (url,var_args){
var p__24469 = null;
if (arguments.length > 1) {
var G__24474__i = 0, G__24474__a = new Array(arguments.length -  1);
while (G__24474__i < G__24474__a.length) {G__24474__a[G__24474__i] = arguments[G__24474__i + 1]; ++G__24474__i;}
  p__24469 = new cljs.core.IndexedSeq(G__24474__a,0);
} 
return patch__delegate.call(this,url,p__24469);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__24475){
var url = cljs.core.first(arglist__24475);
var p__24469 = cljs.core.rest(arglist__24475);
return patch__delegate(url,p__24469);
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
var post__delegate = function (url,p__24476){
var vec__24479 = p__24476;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24479,(0),null);
var G__24480 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$221,cljs.core.constant$keyword$218,cljs.core.constant$keyword$222,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__24480) : cljs_http.client.request.call(null,G__24480));
};
var post = function (url,var_args){
var p__24476 = null;
if (arguments.length > 1) {
var G__24481__i = 0, G__24481__a = new Array(arguments.length -  1);
while (G__24481__i < G__24481__a.length) {G__24481__a[G__24481__i] = arguments[G__24481__i + 1]; ++G__24481__i;}
  p__24476 = new cljs.core.IndexedSeq(G__24481__a,0);
} 
return post__delegate.call(this,url,p__24476);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__24482){
var url = cljs.core.first(arglist__24482);
var p__24476 = cljs.core.rest(arglist__24482);
return post__delegate(url,p__24476);
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
var put__delegate = function (url,p__24483){
var vec__24486 = p__24483;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24486,(0),null);
var G__24487 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$221,cljs.core.constant$keyword$219,cljs.core.constant$keyword$222,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__24487) : cljs_http.client.request.call(null,G__24487));
};
var put = function (url,var_args){
var p__24483 = null;
if (arguments.length > 1) {
var G__24488__i = 0, G__24488__a = new Array(arguments.length -  1);
while (G__24488__i < G__24488__a.length) {G__24488__a[G__24488__i] = arguments[G__24488__i + 1]; ++G__24488__i;}
  p__24483 = new cljs.core.IndexedSeq(G__24488__a,0);
} 
return put__delegate.call(this,url,p__24483);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__24489){
var url = cljs.core.first(arglist__24489);
var p__24483 = cljs.core.rest(arglist__24489);
return put__delegate(url,p__24483);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;
