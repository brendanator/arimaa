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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__22454_SHARP_,p2__22453_SHARP_){
var vec__22456 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__22453_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22456,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22456,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22454_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
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
var uri = (function (){var G__22458 = url;
return goog.Uri.parse(G__22458);
})();
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$47,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),cljs.core.constant$keyword$50,uri.getDomain(),cljs.core.constant$keyword$51,cljs_http.client.if_pos(uri.getPort()),cljs.core.constant$keyword$52,uri.getPath(),cljs.core.constant$keyword$54,((cljs.core.not(query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),cljs.core.constant$keyword$46,((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params([cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode(cljs.core.name(k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode([cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22459_SHARP_){
return cljs_http.client.encode_val(k,p1__22459_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__22460){
var vec__22462 = p__22460;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22462,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22462,(1),null);
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
return (function (p1__22463_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__22463_SHARP_)].join('');
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
var G__22466 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$84),cljs.core.constant$keyword$75,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,"content-type"], null),"application/edn");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22466) : client.call(null,G__22466));
} else {
var G__22467 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22467) : client.call(null,G__22467));
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__22468_SHARP_){
return cljs_http.client.decode_body(p1__22468_SHARP_,cljs.reader.read_string,"application/edn",cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22470 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22470) : client.call(null,G__22470));
})()], null));
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__22471){
var vec__22475 = p__22471;
var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22475,(0),null);
return ((function (vec__22475,accept){
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
var G__22476 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,"accept"], null),accept__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22476) : client.call(null,G__22476));
} else {
var G__22477 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22477) : client.call(null,G__22477));
}
});
;})(vec__22475,accept))
};
var wrap_accept = function (client,var_args){
var p__22471 = null;
if (arguments.length > 1) {
  p__22471 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return wrap_accept__delegate.call(this,client,p__22471);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__22478){
var client = cljs.core.first(arglist__22478);
var p__22471 = cljs.core.rest(arglist__22478);
return wrap_accept__delegate(client,p__22471);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__22479){
var vec__22483 = p__22479;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22483,(0),null);
return ((function (vec__22483,content_type){
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
var G__22484 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,"content-type"], null),content_type__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22484) : client.call(null,G__22484));
} else {
var G__22485 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22485) : client.call(null,G__22485));
}
});
;})(vec__22483,content_type))
};
var wrap_content_type = function (client,var_args){
var p__22479 = null;
if (arguments.length > 1) {
  p__22479 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return wrap_content_type__delegate.call(this,client,p__22479);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__22486){
var client = cljs.core.first(arglist__22486);
var p__22479 = cljs.core.rest(arglist__22486);
return wrap_content_type__delegate(client,p__22479);
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
var map__22490 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$93.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__22490__$1 = ((cljs.core.seq_QMARK_(map__22490))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22490):map__22490);
var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22490__$1,cljs.core.constant$keyword$88);
var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22490__$1,cljs.core.constant$keyword$87);
var G__22491 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$92),cljs.core.constant$keyword$75,cljs_http.util.transit_encode(params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,"content-type"], null),"application/transit+json");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22491) : client.call(null,G__22491));
} else {
var G__22492 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22492) : client.call(null,G__22492));
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){
return (function (request){
var map__22497 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$93.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__22497__$1 = ((cljs.core.seq_QMARK_(map__22497))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22497):map__22497);
var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22497__$1,cljs.core.constant$keyword$90);
var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22497__$1,cljs.core.constant$keyword$89);
var transit_decode = ((function (map__22497,map__22497__$1,decoding_opts,decoding){
return (function (p1__22493_SHARP_){
return cljs_http.util.transit_decode(p1__22493_SHARP_,decoding,decoding_opts);
});})(map__22497,map__22497__$1,decoding_opts,decoding))
;
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(((function (map__22497,map__22497__$1,decoding_opts,decoding,transit_decode){
return (function (p1__22494_SHARP_){
return cljs_http.client.decode_body(p1__22494_SHARP_,transit_decode,"application/transit+json",cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(request));
});})(map__22497,map__22497__$1,decoding_opts,decoding,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22498 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22498) : client.call(null,G__22498));
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
var G__22501 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$94),cljs.core.constant$keyword$75,cljs_http.util.json_encode(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,"content-type"], null),"application/json");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22501) : client.call(null,G__22501));
} else {
var G__22502 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22502) : client.call(null,G__22502));
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__22503_SHARP_){
return cljs_http.client.decode_body(p1__22503_SHARP_,cljs_http.util.json_decode,"application/json",cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22505 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22505) : client.call(null,G__22505));
})()], null));
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){
return (function (p__22510){
var map__22511 = p__22510;
var map__22511__$1 = ((cljs.core.seq_QMARK_(map__22511))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22511):map__22511);
var req = map__22511__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22511__$1,cljs.core.constant$keyword$46);
if(cljs.core.truth_(query_params)){
var G__22512 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$46),cljs.core.constant$keyword$54,cljs_http.client.generate_query_string(query_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22512) : client.call(null,G__22512));
} else {
var G__22513 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22513) : client.call(null,G__22513));
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){
return (function (p__22518){
var map__22519 = p__22518;
var map__22519__$1 = ((cljs.core.seq_QMARK_(map__22519))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22519):map__22519);
var request = map__22519__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22519__$1,cljs.core.constant$keyword$77);
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22519__$1,cljs.core.constant$keyword$95);
if(cljs.core.truth_((function (){var and__3618__auto__ = form_params;
if(cljs.core.truth_(and__3618__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$96,null,cljs.core.constant$keyword$97,null,cljs.core.constant$keyword$98,null,cljs.core.constant$keyword$99,null], null), null).call(null,request_method);
} else {
return and__3618__auto__;
}
})())){
var G__22520 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$95),cljs.core.constant$keyword$75,cljs_http.client.generate_query_string(form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,"content-type"], null),"application/x-www-form-urlencoded");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22520) : client.call(null,G__22520));
} else {
var G__22521 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22521) : client.call(null,G__22521));
}
});
});
cljs_http.client.generate_form_data = (function generate_form_data(params){
var form_data = (new FormData());
var seq__22528_22534 = cljs.core.seq(params);
var chunk__22529_22535 = null;
var count__22530_22536 = (0);
var i__22531_22537 = (0);
while(true){
if((i__22531_22537 < count__22530_22536)){
var vec__22532_22538 = chunk__22529_22535.cljs$core$IIndexed$_nth$arity$2(null,i__22531_22537);
var k_22539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22532_22538,(0),null);
var v_22540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22532_22538,(1),null);
form_data.append(cljs.core.name(k_22539),v_22540);

var G__22541 = seq__22528_22534;
var G__22542 = chunk__22529_22535;
var G__22543 = count__22530_22536;
var G__22544 = (i__22531_22537 + (1));
seq__22528_22534 = G__22541;
chunk__22529_22535 = G__22542;
count__22530_22536 = G__22543;
i__22531_22537 = G__22544;
continue;
} else {
var temp__4126__auto___22545 = cljs.core.seq(seq__22528_22534);
if(temp__4126__auto___22545){
var seq__22528_22546__$1 = temp__4126__auto___22545;
if(cljs.core.chunked_seq_QMARK_(seq__22528_22546__$1)){
var c__4417__auto___22547 = cljs.core.chunk_first(seq__22528_22546__$1);
var G__22548 = cljs.core.chunk_rest(seq__22528_22546__$1);
var G__22549 = c__4417__auto___22547;
var G__22550 = cljs.core.count(c__4417__auto___22547);
var G__22551 = (0);
seq__22528_22534 = G__22548;
chunk__22529_22535 = G__22549;
count__22530_22536 = G__22550;
i__22531_22537 = G__22551;
continue;
} else {
var vec__22533_22552 = cljs.core.first(seq__22528_22546__$1);
var k_22553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22533_22552,(0),null);
var v_22554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22533_22552,(1),null);
form_data.append(cljs.core.name(k_22553),v_22554);

var G__22555 = cljs.core.next(seq__22528_22546__$1);
var G__22556 = null;
var G__22557 = (0);
var G__22558 = (0);
seq__22528_22534 = G__22555;
chunk__22529_22535 = G__22556;
count__22530_22536 = G__22557;
i__22531_22537 = G__22558;
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
return (function (p__22563){
var map__22564 = p__22563;
var map__22564__$1 = ((cljs.core.seq_QMARK_(map__22564))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22564):map__22564);
var request = map__22564__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22564__$1,cljs.core.constant$keyword$77);
var multipart_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22564__$1,cljs.core.constant$keyword$100);
if(cljs.core.truth_((function (){var and__3618__auto__ = multipart_params;
if(cljs.core.truth_(and__3618__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$96,null,cljs.core.constant$keyword$97,null,cljs.core.constant$keyword$98,null,cljs.core.constant$keyword$99,null], null), null).call(null,request_method);
} else {
return and__3618__auto__;
}
})())){
var G__22565 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$100),cljs.core.constant$keyword$75,cljs_http.client.generate_form_data(multipart_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,"content-type"], null),"multipart/form-data");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22565) : client.call(null,G__22565));
} else {
var G__22566 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22566) : client.call(null,G__22566));
}
});
});
cljs_http.client.wrap_method = (function wrap_method(client){
return (function (req){
var temp__4124__auto__ = cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4124__auto__)){
var m = temp__4124__auto__;
var G__22569 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$101),cljs.core.constant$keyword$77,m);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22569) : client.call(null,G__22569));
} else {
var G__22570 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22570) : client.call(null,G__22570));
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){
return (function (p1__22571_SHARP_){
var G__22573 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22571_SHARP_,cljs.core.constant$keyword$50,server_name);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22573) : client.call(null,G__22573));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){
return (function (p__22579){
var map__22580 = p__22579;
var map__22580__$1 = ((cljs.core.seq_QMARK_(map__22580))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22580):map__22580);
var req = map__22580__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22580__$1,cljs.core.constant$keyword$46);
var temp__4124__auto__ = cljs_http.client.parse_url(cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4124__auto__)){
var spec = temp__4124__auto__;
var G__22581 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),cljs.core.constant$keyword$102),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$46], null),((function (spec,temp__4124__auto__,map__22580,map__22580__$1,req,query_params){
return (function (p1__22574_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__22574_SHARP_,query_params], 0));
});})(spec,temp__4124__auto__,map__22580,map__22580__$1,req,query_params))
);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22581) : client.call(null,G__22581));
} else {
var G__22582 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22582) : client.call(null,G__22582));
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__22583){
var vec__22587 = p__22583;
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22587,(0),null);
return ((function (vec__22587,credentials){
return (function (req){
var credentials__$1 = (function (){var or__3630__auto__ = cljs.core.constant$keyword$103.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_(credentials__$1))){
var G__22588 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$103),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22588) : client.call(null,G__22588));
} else {
var G__22589 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22589) : client.call(null,G__22589));
}
});
;})(vec__22587,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__22583 = null;
if (arguments.length > 1) {
  p__22583 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return wrap_basic_auth__delegate.call(this,client,p__22583);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__22590){
var client = cljs.core.first(arglist__22590);
var p__22583 = cljs.core.rest(arglist__22590);
return wrap_basic_auth__delegate(client,p__22583);
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
var G__22593 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$104),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join(''));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22593) : client.call(null,G__22593));
} else {
var G__22594 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22594) : client.call(null,G__22594));
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
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((function (){var G__22597 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22597) : client.call(null,G__22597));
})(),custom_channel);
} else {
var G__22598 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22598) : client.call(null,G__22598));
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
var delete$__delegate = function (url,p__22599){
var vec__22602 = p__22599;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22602,(0),null);
var G__22603 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$101,cljs.core.constant$keyword$97,cljs.core.constant$keyword$102,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22603) : cljs_http.client.request.call(null,G__22603));
};
var delete$ = function (url,var_args){
var p__22599 = null;
if (arguments.length > 1) {
  p__22599 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return delete$__delegate.call(this,url,p__22599);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__22604){
var url = cljs.core.first(arglist__22604);
var p__22599 = cljs.core.rest(arglist__22604);
return delete$__delegate(url,p__22599);
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
var get__delegate = function (url,p__22605){
var vec__22608 = p__22605;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22608,(0),null);
var G__22609 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$101,cljs.core.constant$keyword$78,cljs.core.constant$keyword$102,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22609) : cljs_http.client.request.call(null,G__22609));
};
var get = function (url,var_args){
var p__22605 = null;
if (arguments.length > 1) {
  p__22605 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return get__delegate.call(this,url,p__22605);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__22610){
var url = cljs.core.first(arglist__22610);
var p__22605 = cljs.core.rest(arglist__22610);
return get__delegate(url,p__22605);
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
var head__delegate = function (url,p__22611){
var vec__22614 = p__22611;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22614,(0),null);
var G__22615 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$101,cljs.core.constant$keyword$83,cljs.core.constant$keyword$102,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22615) : cljs_http.client.request.call(null,G__22615));
};
var head = function (url,var_args){
var p__22611 = null;
if (arguments.length > 1) {
  p__22611 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return head__delegate.call(this,url,p__22611);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__22616){
var url = cljs.core.first(arglist__22616);
var p__22611 = cljs.core.rest(arglist__22616);
return head__delegate(url,p__22611);
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
var move__delegate = function (url,p__22617){
var vec__22620 = p__22617;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22620,(0),null);
var G__22621 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$101,cljs.core.constant$keyword$106,cljs.core.constant$keyword$102,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22621) : cljs_http.client.request.call(null,G__22621));
};
var move = function (url,var_args){
var p__22617 = null;
if (arguments.length > 1) {
  p__22617 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return move__delegate.call(this,url,p__22617);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__22622){
var url = cljs.core.first(arglist__22622);
var p__22617 = cljs.core.rest(arglist__22622);
return move__delegate(url,p__22617);
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
var options__delegate = function (url,p__22623){
var vec__22626 = p__22623;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22626,(0),null);
var G__22627 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$101,cljs.core.constant$keyword$107,cljs.core.constant$keyword$102,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22627) : cljs_http.client.request.call(null,G__22627));
};
var options = function (url,var_args){
var p__22623 = null;
if (arguments.length > 1) {
  p__22623 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return options__delegate.call(this,url,p__22623);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__22628){
var url = cljs.core.first(arglist__22628);
var p__22623 = cljs.core.rest(arglist__22628);
return options__delegate(url,p__22623);
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
var patch__delegate = function (url,p__22629){
var vec__22632 = p__22629;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22632,(0),null);
var G__22633 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$101,cljs.core.constant$keyword$96,cljs.core.constant$keyword$102,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22633) : cljs_http.client.request.call(null,G__22633));
};
var patch = function (url,var_args){
var p__22629 = null;
if (arguments.length > 1) {
  p__22629 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return patch__delegate.call(this,url,p__22629);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__22634){
var url = cljs.core.first(arglist__22634);
var p__22629 = cljs.core.rest(arglist__22634);
return patch__delegate(url,p__22629);
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
var post__delegate = function (url,p__22635){
var vec__22638 = p__22635;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22638,(0),null);
var G__22639 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$101,cljs.core.constant$keyword$98,cljs.core.constant$keyword$102,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22639) : cljs_http.client.request.call(null,G__22639));
};
var post = function (url,var_args){
var p__22635 = null;
if (arguments.length > 1) {
  p__22635 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return post__delegate.call(this,url,p__22635);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__22640){
var url = cljs.core.first(arglist__22640);
var p__22635 = cljs.core.rest(arglist__22640);
return post__delegate(url,p__22635);
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
var put__delegate = function (url,p__22641){
var vec__22644 = p__22641;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22644,(0),null);
var G__22645 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$101,cljs.core.constant$keyword$99,cljs.core.constant$keyword$102,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22645) : cljs_http.client.request.call(null,G__22645));
};
var put = function (url,var_args){
var p__22641 = null;
if (arguments.length > 1) {
  p__22641 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return put__delegate.call(this,url,p__22641);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__22646){
var url = cljs.core.first(arglist__22646);
var p__22641 = cljs.core.rest(arglist__22646);
return put__delegate(url,p__22641);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;
