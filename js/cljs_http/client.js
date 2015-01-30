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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__23464_SHARP_,p2__23463_SHARP_){
var vec__23466 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__23463_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23466,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23466,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23464_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
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
var uri = (function (){var G__23468 = url;
return goog.Uri.parse(G__23468);
})();
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$54,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),cljs.core.constant$keyword$57,uri.getDomain(),cljs.core.constant$keyword$58,cljs_http.client.if_pos(uri.getPort()),cljs.core.constant$keyword$59,uri.getPath(),cljs.core.constant$keyword$61,((cljs.core.not(query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),cljs.core.constant$keyword$53,((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params([cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode(cljs.core.name(k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode([cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23469_SHARP_){
return cljs_http.client.encode_val(k,p1__23469_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__23470){
var vec__23472 = p__23470;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23472,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23472,(1),null);
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
return (function (p1__23473_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__23473_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var and__3738__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$91,request_method);
if(and__3738__auto__){
return cljs.core.re_find(cljs.core.re_pattern([cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special(content_type))].join('')),[cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$84.cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__3738__auto__;
}
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$83], null),decode_fn);
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
var temp__4124__auto__ = cljs.core.constant$keyword$92.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
var G__23476 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$92),cljs.core.constant$keyword$83,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,"content-type"], null),"application/edn");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23476) : client.call(null,G__23476));
} else {
var G__23477 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23477) : client.call(null,G__23477));
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__23478_SHARP_){
return cljs_http.client.decode_body(p1__23478_SHARP_,cljs.reader.read_string,"application/edn",cljs.core.constant$keyword$85.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23480 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23480) : client.call(null,G__23480));
})()], null));
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__23481){
var vec__23485 = p__23481;
var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23485,(0),null);
return ((function (vec__23485,accept){
return (function (request){
var temp__4124__auto__ = (function (){var or__3750__auto__ = cljs.core.constant$keyword$93.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3750__auto__)){
return or__3750__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var accept__$1 = temp__4124__auto__;
var G__23486 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,"accept"], null),accept__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23486) : client.call(null,G__23486));
} else {
var G__23487 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23487) : client.call(null,G__23487));
}
});
;})(vec__23485,accept))
};
var wrap_accept = function (client,var_args){
var p__23481 = null;
if (arguments.length > 1) {
var G__23488__i = 0, G__23488__a = new Array(arguments.length -  1);
while (G__23488__i < G__23488__a.length) {G__23488__a[G__23488__i] = arguments[G__23488__i + 1]; ++G__23488__i;}
  p__23481 = new cljs.core.IndexedSeq(G__23488__a,0);
} 
return wrap_accept__delegate.call(this,client,p__23481);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__23489){
var client = cljs.core.first(arglist__23489);
var p__23481 = cljs.core.rest(arglist__23489);
return wrap_accept__delegate(client,p__23481);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__23490){
var vec__23494 = p__23490;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23494,(0),null);
return ((function (vec__23494,content_type){
return (function (request){
var temp__4124__auto__ = (function (){var or__3750__auto__ = cljs.core.constant$keyword$94.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3750__auto__)){
return or__3750__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var content_type__$1 = temp__4124__auto__;
var G__23495 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,"content-type"], null),content_type__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23495) : client.call(null,G__23495));
} else {
var G__23496 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23496) : client.call(null,G__23496));
}
});
;})(vec__23494,content_type))
};
var wrap_content_type = function (client,var_args){
var p__23490 = null;
if (arguments.length > 1) {
var G__23497__i = 0, G__23497__a = new Array(arguments.length -  1);
while (G__23497__i < G__23497__a.length) {G__23497__a[G__23497__i] = arguments[G__23497__i + 1]; ++G__23497__i;}
  p__23490 = new cljs.core.IndexedSeq(G__23497__a,0);
} 
return wrap_content_type__delegate.call(this,client,p__23490);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__23498){
var client = cljs.core.first(arglist__23498);
var p__23490 = cljs.core.rest(arglist__23498);
return wrap_content_type__delegate(client,p__23490);
});
wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = wrap_content_type__delegate;
return wrap_content_type;
})()
;
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$95,cljs.core.constant$keyword$99,cljs.core.constant$keyword$96,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$97,cljs.core.constant$keyword$99,cljs.core.constant$keyword$98,cljs.core.PersistentArrayMap.EMPTY], null);
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
var temp__4124__auto__ = cljs.core.constant$keyword$100.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
var map__23502 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__23502__$1 = ((cljs.core.seq_QMARK_(map__23502))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23502):map__23502);
var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23502__$1,cljs.core.constant$keyword$96);
var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23502__$1,cljs.core.constant$keyword$95);
var G__23503 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$100),cljs.core.constant$keyword$83,cljs_http.util.transit_encode(params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,"content-type"], null),"application/transit+json");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23503) : client.call(null,G__23503));
} else {
var G__23504 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23504) : client.call(null,G__23504));
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){
return (function (request){
var map__23509 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__23509__$1 = ((cljs.core.seq_QMARK_(map__23509))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23509):map__23509);
var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23509__$1,cljs.core.constant$keyword$98);
var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23509__$1,cljs.core.constant$keyword$97);
var transit_decode = ((function (map__23509,map__23509__$1,decoding_opts,decoding){
return (function (p1__23505_SHARP_){
return cljs_http.util.transit_decode(p1__23505_SHARP_,decoding,decoding_opts);
});})(map__23509,map__23509__$1,decoding_opts,decoding))
;
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(((function (map__23509,map__23509__$1,decoding_opts,decoding,transit_decode){
return (function (p1__23506_SHARP_){
return cljs_http.client.decode_body(p1__23506_SHARP_,transit_decode,"application/transit+json",cljs.core.constant$keyword$85.cljs$core$IFn$_invoke$arity$1(request));
});})(map__23509,map__23509__$1,decoding_opts,decoding,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23510 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23510) : client.call(null,G__23510));
})()], null));
});
});
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){
return (function (request){
var temp__4124__auto__ = cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
var G__23513 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$102),cljs.core.constant$keyword$83,cljs_http.util.json_encode(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,"content-type"], null),"application/json");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23513) : client.call(null,G__23513));
} else {
var G__23514 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23514) : client.call(null,G__23514));
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__23515_SHARP_){
return cljs_http.client.decode_body(p1__23515_SHARP_,cljs_http.util.json_decode,"application/json",cljs.core.constant$keyword$85.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23517 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23517) : client.call(null,G__23517));
})()], null));
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){
return (function (p__23522){
var map__23523 = p__23522;
var map__23523__$1 = ((cljs.core.seq_QMARK_(map__23523))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23523):map__23523);
var req = map__23523__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23523__$1,cljs.core.constant$keyword$53);
if(cljs.core.truth_(query_params)){
var G__23524 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$53),cljs.core.constant$keyword$61,cljs_http.client.generate_query_string(query_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23524) : client.call(null,G__23524));
} else {
var G__23525 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23525) : client.call(null,G__23525));
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){
return (function (p__23530){
var map__23531 = p__23530;
var map__23531__$1 = ((cljs.core.seq_QMARK_(map__23531))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23531):map__23531);
var request = map__23531__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23531__$1,cljs.core.constant$keyword$85);
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23531__$1,cljs.core.constant$keyword$103);
if(cljs.core.truth_((function (){var and__3738__auto__ = form_params;
if(cljs.core.truth_(and__3738__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$104,null,cljs.core.constant$keyword$105,null,cljs.core.constant$keyword$106,null,cljs.core.constant$keyword$107,null], null), null).call(null,request_method);
} else {
return and__3738__auto__;
}
})())){
var G__23532 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$103),cljs.core.constant$keyword$83,cljs_http.client.generate_query_string(form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,"content-type"], null),"application/x-www-form-urlencoded");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23532) : client.call(null,G__23532));
} else {
var G__23533 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23533) : client.call(null,G__23533));
}
});
});
cljs_http.client.generate_form_data = (function generate_form_data(params){
var form_data = (new FormData());
var seq__23540_23546 = cljs.core.seq(params);
var chunk__23541_23547 = null;
var count__23542_23548 = (0);
var i__23543_23549 = (0);
while(true){
if((i__23543_23549 < count__23542_23548)){
var vec__23544_23550 = chunk__23541_23547.cljs$core$IIndexed$_nth$arity$2(null,i__23543_23549);
var k_23551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23544_23550,(0),null);
var v_23552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23544_23550,(1),null);
form_data.append(cljs.core.name(k_23551),v_23552);

var G__23553 = seq__23540_23546;
var G__23554 = chunk__23541_23547;
var G__23555 = count__23542_23548;
var G__23556 = (i__23543_23549 + (1));
seq__23540_23546 = G__23553;
chunk__23541_23547 = G__23554;
count__23542_23548 = G__23555;
i__23543_23549 = G__23556;
continue;
} else {
var temp__4126__auto___23557 = cljs.core.seq(seq__23540_23546);
if(temp__4126__auto___23557){
var seq__23540_23558__$1 = temp__4126__auto___23557;
if(cljs.core.chunked_seq_QMARK_(seq__23540_23558__$1)){
var c__4537__auto___23559 = cljs.core.chunk_first(seq__23540_23558__$1);
var G__23560 = cljs.core.chunk_rest(seq__23540_23558__$1);
var G__23561 = c__4537__auto___23559;
var G__23562 = cljs.core.count(c__4537__auto___23559);
var G__23563 = (0);
seq__23540_23546 = G__23560;
chunk__23541_23547 = G__23561;
count__23542_23548 = G__23562;
i__23543_23549 = G__23563;
continue;
} else {
var vec__23545_23564 = cljs.core.first(seq__23540_23558__$1);
var k_23565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23545_23564,(0),null);
var v_23566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23545_23564,(1),null);
form_data.append(cljs.core.name(k_23565),v_23566);

var G__23567 = cljs.core.next(seq__23540_23558__$1);
var G__23568 = null;
var G__23569 = (0);
var G__23570 = (0);
seq__23540_23546 = G__23567;
chunk__23541_23547 = G__23568;
count__23542_23548 = G__23569;
i__23543_23549 = G__23570;
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
return (function (p__23575){
var map__23576 = p__23575;
var map__23576__$1 = ((cljs.core.seq_QMARK_(map__23576))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23576):map__23576);
var request = map__23576__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23576__$1,cljs.core.constant$keyword$85);
var multipart_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23576__$1,cljs.core.constant$keyword$108);
if(cljs.core.truth_((function (){var and__3738__auto__ = multipart_params;
if(cljs.core.truth_(and__3738__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$104,null,cljs.core.constant$keyword$105,null,cljs.core.constant$keyword$106,null,cljs.core.constant$keyword$107,null], null), null).call(null,request_method);
} else {
return and__3738__auto__;
}
})())){
var G__23577 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$108),cljs.core.constant$keyword$83,cljs_http.client.generate_form_data(multipart_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,"content-type"], null),"multipart/form-data");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23577) : client.call(null,G__23577));
} else {
var G__23578 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23578) : client.call(null,G__23578));
}
});
});
cljs_http.client.wrap_method = (function wrap_method(client){
return (function (req){
var temp__4124__auto__ = cljs.core.constant$keyword$109.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4124__auto__)){
var m = temp__4124__auto__;
var G__23581 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$109),cljs.core.constant$keyword$85,m);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23581) : client.call(null,G__23581));
} else {
var G__23582 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23582) : client.call(null,G__23582));
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){
return (function (p1__23583_SHARP_){
var G__23585 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23583_SHARP_,cljs.core.constant$keyword$57,server_name);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23585) : client.call(null,G__23585));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){
return (function (p__23591){
var map__23592 = p__23591;
var map__23592__$1 = ((cljs.core.seq_QMARK_(map__23592))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23592):map__23592);
var req = map__23592__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23592__$1,cljs.core.constant$keyword$53);
var temp__4124__auto__ = cljs_http.client.parse_url(cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4124__auto__)){
var spec = temp__4124__auto__;
var G__23593 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),cljs.core.constant$keyword$110),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$53], null),((function (spec,temp__4124__auto__,map__23592,map__23592__$1,req,query_params){
return (function (p1__23586_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__23586_SHARP_,query_params], 0));
});})(spec,temp__4124__auto__,map__23592,map__23592__$1,req,query_params))
);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23593) : client.call(null,G__23593));
} else {
var G__23594 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23594) : client.call(null,G__23594));
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__23595){
var vec__23599 = p__23595;
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23599,(0),null);
return ((function (vec__23599,credentials){
return (function (req){
var credentials__$1 = (function (){var or__3750__auto__ = cljs.core.constant$keyword$111.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__3750__auto__)){
return or__3750__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_(credentials__$1))){
var G__23600 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$111),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23600) : client.call(null,G__23600));
} else {
var G__23601 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23601) : client.call(null,G__23601));
}
});
;})(vec__23599,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__23595 = null;
if (arguments.length > 1) {
var G__23602__i = 0, G__23602__a = new Array(arguments.length -  1);
while (G__23602__i < G__23602__a.length) {G__23602__a[G__23602__i] = arguments[G__23602__i + 1]; ++G__23602__i;}
  p__23595 = new cljs.core.IndexedSeq(G__23602__a,0);
} 
return wrap_basic_auth__delegate.call(this,client,p__23595);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__23603){
var client = cljs.core.first(arglist__23603);
var p__23595 = cljs.core.rest(arglist__23603);
return wrap_basic_auth__delegate(client,p__23595);
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
var temp__4124__auto__ = cljs.core.constant$keyword$112.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4124__auto__)){
var oauth_token = temp__4124__auto__;
var G__23606 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$112),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join(''));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23606) : client.call(null,G__23606));
} else {
var G__23607 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23607) : client.call(null,G__23607));
}
});
});
/**
* Pipe the response-channel into the request-map's
* custom channel (e.g. to enable transducers)
*/
cljs_http.client.wrap_channel_from_request_map = (function wrap_channel_from_request_map(client){
return (function (request){
var temp__4124__auto__ = cljs.core.constant$keyword$113.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var custom_channel = temp__4124__auto__;
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((function (){var G__23610 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23610) : client.call(null,G__23610));
})(),custom_channel);
} else {
var G__23611 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23611) : client.call(null,G__23611));
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
var delete$__delegate = function (url,p__23612){
var vec__23615 = p__23612;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23615,(0),null);
var G__23616 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$109,cljs.core.constant$keyword$105,cljs.core.constant$keyword$110,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23616) : cljs_http.client.request.call(null,G__23616));
};
var delete$ = function (url,var_args){
var p__23612 = null;
if (arguments.length > 1) {
var G__23617__i = 0, G__23617__a = new Array(arguments.length -  1);
while (G__23617__i < G__23617__a.length) {G__23617__a[G__23617__i] = arguments[G__23617__i + 1]; ++G__23617__i;}
  p__23612 = new cljs.core.IndexedSeq(G__23617__a,0);
} 
return delete$__delegate.call(this,url,p__23612);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__23618){
var url = cljs.core.first(arglist__23618);
var p__23612 = cljs.core.rest(arglist__23618);
return delete$__delegate(url,p__23612);
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
var get__delegate = function (url,p__23619){
var vec__23622 = p__23619;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23622,(0),null);
var G__23623 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$109,cljs.core.constant$keyword$86,cljs.core.constant$keyword$110,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23623) : cljs_http.client.request.call(null,G__23623));
};
var get = function (url,var_args){
var p__23619 = null;
if (arguments.length > 1) {
var G__23624__i = 0, G__23624__a = new Array(arguments.length -  1);
while (G__23624__i < G__23624__a.length) {G__23624__a[G__23624__i] = arguments[G__23624__i + 1]; ++G__23624__i;}
  p__23619 = new cljs.core.IndexedSeq(G__23624__a,0);
} 
return get__delegate.call(this,url,p__23619);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__23625){
var url = cljs.core.first(arglist__23625);
var p__23619 = cljs.core.rest(arglist__23625);
return get__delegate(url,p__23619);
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
var head__delegate = function (url,p__23626){
var vec__23629 = p__23626;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23629,(0),null);
var G__23630 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$109,cljs.core.constant$keyword$91,cljs.core.constant$keyword$110,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23630) : cljs_http.client.request.call(null,G__23630));
};
var head = function (url,var_args){
var p__23626 = null;
if (arguments.length > 1) {
var G__23631__i = 0, G__23631__a = new Array(arguments.length -  1);
while (G__23631__i < G__23631__a.length) {G__23631__a[G__23631__i] = arguments[G__23631__i + 1]; ++G__23631__i;}
  p__23626 = new cljs.core.IndexedSeq(G__23631__a,0);
} 
return head__delegate.call(this,url,p__23626);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__23632){
var url = cljs.core.first(arglist__23632);
var p__23626 = cljs.core.rest(arglist__23632);
return head__delegate(url,p__23626);
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
var move__delegate = function (url,p__23633){
var vec__23636 = p__23633;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23636,(0),null);
var G__23637 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$109,cljs.core.constant$keyword$114,cljs.core.constant$keyword$110,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23637) : cljs_http.client.request.call(null,G__23637));
};
var move = function (url,var_args){
var p__23633 = null;
if (arguments.length > 1) {
var G__23638__i = 0, G__23638__a = new Array(arguments.length -  1);
while (G__23638__i < G__23638__a.length) {G__23638__a[G__23638__i] = arguments[G__23638__i + 1]; ++G__23638__i;}
  p__23633 = new cljs.core.IndexedSeq(G__23638__a,0);
} 
return move__delegate.call(this,url,p__23633);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__23639){
var url = cljs.core.first(arglist__23639);
var p__23633 = cljs.core.rest(arglist__23639);
return move__delegate(url,p__23633);
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
var options__delegate = function (url,p__23640){
var vec__23643 = p__23640;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23643,(0),null);
var G__23644 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$109,cljs.core.constant$keyword$115,cljs.core.constant$keyword$110,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23644) : cljs_http.client.request.call(null,G__23644));
};
var options = function (url,var_args){
var p__23640 = null;
if (arguments.length > 1) {
var G__23645__i = 0, G__23645__a = new Array(arguments.length -  1);
while (G__23645__i < G__23645__a.length) {G__23645__a[G__23645__i] = arguments[G__23645__i + 1]; ++G__23645__i;}
  p__23640 = new cljs.core.IndexedSeq(G__23645__a,0);
} 
return options__delegate.call(this,url,p__23640);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__23646){
var url = cljs.core.first(arglist__23646);
var p__23640 = cljs.core.rest(arglist__23646);
return options__delegate(url,p__23640);
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
var patch__delegate = function (url,p__23647){
var vec__23650 = p__23647;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23650,(0),null);
var G__23651 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$109,cljs.core.constant$keyword$104,cljs.core.constant$keyword$110,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23651) : cljs_http.client.request.call(null,G__23651));
};
var patch = function (url,var_args){
var p__23647 = null;
if (arguments.length > 1) {
var G__23652__i = 0, G__23652__a = new Array(arguments.length -  1);
while (G__23652__i < G__23652__a.length) {G__23652__a[G__23652__i] = arguments[G__23652__i + 1]; ++G__23652__i;}
  p__23647 = new cljs.core.IndexedSeq(G__23652__a,0);
} 
return patch__delegate.call(this,url,p__23647);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__23653){
var url = cljs.core.first(arglist__23653);
var p__23647 = cljs.core.rest(arglist__23653);
return patch__delegate(url,p__23647);
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
var post__delegate = function (url,p__23654){
var vec__23657 = p__23654;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23657,(0),null);
var G__23658 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$109,cljs.core.constant$keyword$106,cljs.core.constant$keyword$110,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23658) : cljs_http.client.request.call(null,G__23658));
};
var post = function (url,var_args){
var p__23654 = null;
if (arguments.length > 1) {
var G__23659__i = 0, G__23659__a = new Array(arguments.length -  1);
while (G__23659__i < G__23659__a.length) {G__23659__a[G__23659__i] = arguments[G__23659__i + 1]; ++G__23659__i;}
  p__23654 = new cljs.core.IndexedSeq(G__23659__a,0);
} 
return post__delegate.call(this,url,p__23654);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__23660){
var url = cljs.core.first(arglist__23660);
var p__23654 = cljs.core.rest(arglist__23660);
return post__delegate(url,p__23654);
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
var put__delegate = function (url,p__23661){
var vec__23664 = p__23661;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23664,(0),null);
var G__23665 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$109,cljs.core.constant$keyword$107,cljs.core.constant$keyword$110,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23665) : cljs_http.client.request.call(null,G__23665));
};
var put = function (url,var_args){
var p__23661 = null;
if (arguments.length > 1) {
var G__23666__i = 0, G__23666__a = new Array(arguments.length -  1);
while (G__23666__i < G__23666__a.length) {G__23666__a[G__23666__i] = arguments[G__23666__i + 1]; ++G__23666__i;}
  p__23661 = new cljs.core.IndexedSeq(G__23666__a,0);
} 
return put__delegate.call(this,url,p__23661);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__23667){
var url = cljs.core.first(arglist__23667);
var p__23661 = cljs.core.rest(arglist__23667);
return put__delegate(url,p__23661);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;
