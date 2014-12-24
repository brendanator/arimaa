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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__22452_SHARP_,p2__22451_SHARP_){
var vec__22454 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__22451_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22454,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22454,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22452_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
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
var uri = (function (){var G__22456 = url;
return goog.Uri.parse(G__22456);
})();
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$50,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),cljs.core.constant$keyword$53,uri.getDomain(),cljs.core.constant$keyword$54,cljs_http.client.if_pos(uri.getPort()),cljs.core.constant$keyword$55,uri.getPath(),cljs.core.constant$keyword$57,((cljs.core.not(query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),cljs.core.constant$keyword$49,((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params([cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode(cljs.core.name(k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode([cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22457_SHARP_){
return cljs_http.client.encode_val(k,p1__22457_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__22458){
var vec__22460 = p__22458;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22460,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22460,(1),null);
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
return (function (p1__22461_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__22461_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var and__3618__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$86,request_method);
if(and__3618__auto__){
return cljs.core.re_find(cljs.core.re_pattern([cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special(content_type))].join('')),[cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__3618__auto__;
}
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$78], null),decode_fn);
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
var temp__4124__auto__ = cljs.core.constant$keyword$87.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
var G__22464 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$87),cljs.core.constant$keyword$78,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,"content-type"], null),"application/edn");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22464) : client.call(null,G__22464));
} else {
var G__22465 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22465) : client.call(null,G__22465));
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__22466_SHARP_){
return cljs_http.client.decode_body(p1__22466_SHARP_,cljs.reader.read_string,"application/edn",cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22468 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22468) : client.call(null,G__22468));
})()], null));
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__22469){
var vec__22473 = p__22469;
var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22473,(0),null);
return ((function (vec__22473,accept){
return (function (request){
var temp__4124__auto__ = (function (){var or__3630__auto__ = cljs.core.constant$keyword$88.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var accept__$1 = temp__4124__auto__;
var G__22474 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,"accept"], null),accept__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22474) : client.call(null,G__22474));
} else {
var G__22475 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22475) : client.call(null,G__22475));
}
});
;})(vec__22473,accept))
};
var wrap_accept = function (client,var_args){
var p__22469 = null;
if (arguments.length > 1) {
  p__22469 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return wrap_accept__delegate.call(this,client,p__22469);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__22476){
var client = cljs.core.first(arglist__22476);
var p__22469 = cljs.core.rest(arglist__22476);
return wrap_accept__delegate(client,p__22469);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__22477){
var vec__22481 = p__22477;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22481,(0),null);
return ((function (vec__22481,content_type){
return (function (request){
var temp__4124__auto__ = (function (){var or__3630__auto__ = cljs.core.constant$keyword$89.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var content_type__$1 = temp__4124__auto__;
var G__22482 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,"content-type"], null),content_type__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22482) : client.call(null,G__22482));
} else {
var G__22483 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22483) : client.call(null,G__22483));
}
});
;})(vec__22481,content_type))
};
var wrap_content_type = function (client,var_args){
var p__22477 = null;
if (arguments.length > 1) {
  p__22477 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return wrap_content_type__delegate.call(this,client,p__22477);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__22484){
var client = cljs.core.first(arglist__22484);
var p__22477 = cljs.core.rest(arglist__22484);
return wrap_content_type__delegate(client,p__22477);
});
wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = wrap_content_type__delegate;
return wrap_content_type;
})()
;
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$90,cljs.core.constant$keyword$94,cljs.core.constant$keyword$91,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$92,cljs.core.constant$keyword$94,cljs.core.constant$keyword$93,cljs.core.PersistentArrayMap.EMPTY], null);
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
var temp__4124__auto__ = cljs.core.constant$keyword$95.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
var map__22488 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$96.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__22488__$1 = ((cljs.core.seq_QMARK_(map__22488))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22488):map__22488);
var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22488__$1,cljs.core.constant$keyword$91);
var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22488__$1,cljs.core.constant$keyword$90);
var G__22489 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$95),cljs.core.constant$keyword$78,cljs_http.util.transit_encode(params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,"content-type"], null),"application/transit+json");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22489) : client.call(null,G__22489));
} else {
var G__22490 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22490) : client.call(null,G__22490));
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){
return (function (request){
var map__22495 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$96.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__22495__$1 = ((cljs.core.seq_QMARK_(map__22495))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22495):map__22495);
var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22495__$1,cljs.core.constant$keyword$93);
var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22495__$1,cljs.core.constant$keyword$92);
var transit_decode = ((function (map__22495,map__22495__$1,decoding_opts,decoding){
return (function (p1__22491_SHARP_){
return cljs_http.util.transit_decode(p1__22491_SHARP_,decoding,decoding_opts);
});})(map__22495,map__22495__$1,decoding_opts,decoding))
;
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(((function (map__22495,map__22495__$1,decoding_opts,decoding,transit_decode){
return (function (p1__22492_SHARP_){
return cljs_http.client.decode_body(p1__22492_SHARP_,transit_decode,"application/transit+json",cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(request));
});})(map__22495,map__22495__$1,decoding_opts,decoding,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22496 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22496) : client.call(null,G__22496));
})()], null));
});
});
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){
return (function (request){
var temp__4124__auto__ = cljs.core.constant$keyword$97.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
var G__22499 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$97),cljs.core.constant$keyword$78,cljs_http.util.json_encode(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,"content-type"], null),"application/json");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22499) : client.call(null,G__22499));
} else {
var G__22500 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22500) : client.call(null,G__22500));
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__22501_SHARP_){
return cljs_http.client.decode_body(p1__22501_SHARP_,cljs_http.util.json_decode,"application/json",cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22503 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22503) : client.call(null,G__22503));
})()], null));
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){
return (function (p__22508){
var map__22509 = p__22508;
var map__22509__$1 = ((cljs.core.seq_QMARK_(map__22509))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22509):map__22509);
var req = map__22509__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22509__$1,cljs.core.constant$keyword$49);
if(cljs.core.truth_(query_params)){
var G__22510 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$49),cljs.core.constant$keyword$57,cljs_http.client.generate_query_string(query_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22510) : client.call(null,G__22510));
} else {
var G__22511 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22511) : client.call(null,G__22511));
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){
return (function (p__22516){
var map__22517 = p__22516;
var map__22517__$1 = ((cljs.core.seq_QMARK_(map__22517))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22517):map__22517);
var request = map__22517__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22517__$1,cljs.core.constant$keyword$80);
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22517__$1,cljs.core.constant$keyword$98);
if(cljs.core.truth_((function (){var and__3618__auto__ = form_params;
if(cljs.core.truth_(and__3618__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$99,null,cljs.core.constant$keyword$100,null,cljs.core.constant$keyword$101,null,cljs.core.constant$keyword$102,null], null), null).call(null,request_method);
} else {
return and__3618__auto__;
}
})())){
var G__22518 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$98),cljs.core.constant$keyword$78,cljs_http.client.generate_query_string(form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,"content-type"], null),"application/x-www-form-urlencoded");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22518) : client.call(null,G__22518));
} else {
var G__22519 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22519) : client.call(null,G__22519));
}
});
});
cljs_http.client.generate_form_data = (function generate_form_data(params){
var form_data = (new FormData());
var seq__22526_22532 = cljs.core.seq(params);
var chunk__22527_22533 = null;
var count__22528_22534 = (0);
var i__22529_22535 = (0);
while(true){
if((i__22529_22535 < count__22528_22534)){
var vec__22530_22536 = chunk__22527_22533.cljs$core$IIndexed$_nth$arity$2(null,i__22529_22535);
var k_22537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22530_22536,(0),null);
var v_22538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22530_22536,(1),null);
form_data.append(cljs.core.name(k_22537),v_22538);

var G__22539 = seq__22526_22532;
var G__22540 = chunk__22527_22533;
var G__22541 = count__22528_22534;
var G__22542 = (i__22529_22535 + (1));
seq__22526_22532 = G__22539;
chunk__22527_22533 = G__22540;
count__22528_22534 = G__22541;
i__22529_22535 = G__22542;
continue;
} else {
var temp__4126__auto___22543 = cljs.core.seq(seq__22526_22532);
if(temp__4126__auto___22543){
var seq__22526_22544__$1 = temp__4126__auto___22543;
if(cljs.core.chunked_seq_QMARK_(seq__22526_22544__$1)){
var c__4417__auto___22545 = cljs.core.chunk_first(seq__22526_22544__$1);
var G__22546 = cljs.core.chunk_rest(seq__22526_22544__$1);
var G__22547 = c__4417__auto___22545;
var G__22548 = cljs.core.count(c__4417__auto___22545);
var G__22549 = (0);
seq__22526_22532 = G__22546;
chunk__22527_22533 = G__22547;
count__22528_22534 = G__22548;
i__22529_22535 = G__22549;
continue;
} else {
var vec__22531_22550 = cljs.core.first(seq__22526_22544__$1);
var k_22551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22531_22550,(0),null);
var v_22552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22531_22550,(1),null);
form_data.append(cljs.core.name(k_22551),v_22552);

var G__22553 = cljs.core.next(seq__22526_22544__$1);
var G__22554 = null;
var G__22555 = (0);
var G__22556 = (0);
seq__22526_22532 = G__22553;
chunk__22527_22533 = G__22554;
count__22528_22534 = G__22555;
i__22529_22535 = G__22556;
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
return (function (p__22561){
var map__22562 = p__22561;
var map__22562__$1 = ((cljs.core.seq_QMARK_(map__22562))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22562):map__22562);
var request = map__22562__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22562__$1,cljs.core.constant$keyword$80);
var multipart_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22562__$1,cljs.core.constant$keyword$103);
if(cljs.core.truth_((function (){var and__3618__auto__ = multipart_params;
if(cljs.core.truth_(and__3618__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$99,null,cljs.core.constant$keyword$100,null,cljs.core.constant$keyword$101,null,cljs.core.constant$keyword$102,null], null), null).call(null,request_method);
} else {
return and__3618__auto__;
}
})())){
var G__22563 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$103),cljs.core.constant$keyword$78,cljs_http.client.generate_form_data(multipart_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,"content-type"], null),"multipart/form-data");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22563) : client.call(null,G__22563));
} else {
var G__22564 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22564) : client.call(null,G__22564));
}
});
});
cljs_http.client.wrap_method = (function wrap_method(client){
return (function (req){
var temp__4124__auto__ = cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4124__auto__)){
var m = temp__4124__auto__;
var G__22567 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$104),cljs.core.constant$keyword$80,m);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22567) : client.call(null,G__22567));
} else {
var G__22568 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22568) : client.call(null,G__22568));
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){
return (function (p1__22569_SHARP_){
var G__22571 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22569_SHARP_,cljs.core.constant$keyword$53,server_name);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22571) : client.call(null,G__22571));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){
return (function (p__22577){
var map__22578 = p__22577;
var map__22578__$1 = ((cljs.core.seq_QMARK_(map__22578))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22578):map__22578);
var req = map__22578__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22578__$1,cljs.core.constant$keyword$49);
var temp__4124__auto__ = cljs_http.client.parse_url(cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4124__auto__)){
var spec = temp__4124__auto__;
var G__22579 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),cljs.core.constant$keyword$105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$49], null),((function (spec,temp__4124__auto__,map__22578,map__22578__$1,req,query_params){
return (function (p1__22572_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__22572_SHARP_,query_params], 0));
});})(spec,temp__4124__auto__,map__22578,map__22578__$1,req,query_params))
);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22579) : client.call(null,G__22579));
} else {
var G__22580 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22580) : client.call(null,G__22580));
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__22581){
var vec__22585 = p__22581;
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22585,(0),null);
return ((function (vec__22585,credentials){
return (function (req){
var credentials__$1 = (function (){var or__3630__auto__ = cljs.core.constant$keyword$106.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_(credentials__$1))){
var G__22586 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22586) : client.call(null,G__22586));
} else {
var G__22587 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22587) : client.call(null,G__22587));
}
});
;})(vec__22585,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__22581 = null;
if (arguments.length > 1) {
  p__22581 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return wrap_basic_auth__delegate.call(this,client,p__22581);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__22588){
var client = cljs.core.first(arglist__22588);
var p__22581 = cljs.core.rest(arglist__22588);
return wrap_basic_auth__delegate(client,p__22581);
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
var temp__4124__auto__ = cljs.core.constant$keyword$107.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4124__auto__)){
var oauth_token = temp__4124__auto__;
var G__22591 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$107),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join(''));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22591) : client.call(null,G__22591));
} else {
var G__22592 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22592) : client.call(null,G__22592));
}
});
});
/**
* Pipe the response-channel into the request-map's
* custom channel (e.g. to enable transducers)
*/
cljs_http.client.wrap_channel_from_request_map = (function wrap_channel_from_request_map(client){
return (function (request){
var temp__4124__auto__ = cljs.core.constant$keyword$108.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var custom_channel = temp__4124__auto__;
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((function (){var G__22595 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22595) : client.call(null,G__22595));
})(),custom_channel);
} else {
var G__22596 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22596) : client.call(null,G__22596));
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
var delete$__delegate = function (url,p__22597){
var vec__22600 = p__22597;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22600,(0),null);
var G__22601 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$104,cljs.core.constant$keyword$100,cljs.core.constant$keyword$105,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22601) : cljs_http.client.request.call(null,G__22601));
};
var delete$ = function (url,var_args){
var p__22597 = null;
if (arguments.length > 1) {
  p__22597 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return delete$__delegate.call(this,url,p__22597);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__22602){
var url = cljs.core.first(arglist__22602);
var p__22597 = cljs.core.rest(arglist__22602);
return delete$__delegate(url,p__22597);
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
var get__delegate = function (url,p__22603){
var vec__22606 = p__22603;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22606,(0),null);
var G__22607 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$104,cljs.core.constant$keyword$81,cljs.core.constant$keyword$105,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22607) : cljs_http.client.request.call(null,G__22607));
};
var get = function (url,var_args){
var p__22603 = null;
if (arguments.length > 1) {
  p__22603 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return get__delegate.call(this,url,p__22603);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__22608){
var url = cljs.core.first(arglist__22608);
var p__22603 = cljs.core.rest(arglist__22608);
return get__delegate(url,p__22603);
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
var head__delegate = function (url,p__22609){
var vec__22612 = p__22609;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22612,(0),null);
var G__22613 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$104,cljs.core.constant$keyword$86,cljs.core.constant$keyword$105,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22613) : cljs_http.client.request.call(null,G__22613));
};
var head = function (url,var_args){
var p__22609 = null;
if (arguments.length > 1) {
  p__22609 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return head__delegate.call(this,url,p__22609);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__22614){
var url = cljs.core.first(arglist__22614);
var p__22609 = cljs.core.rest(arglist__22614);
return head__delegate(url,p__22609);
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
var move__delegate = function (url,p__22615){
var vec__22618 = p__22615;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22618,(0),null);
var G__22619 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$104,cljs.core.constant$keyword$109,cljs.core.constant$keyword$105,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22619) : cljs_http.client.request.call(null,G__22619));
};
var move = function (url,var_args){
var p__22615 = null;
if (arguments.length > 1) {
  p__22615 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return move__delegate.call(this,url,p__22615);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__22620){
var url = cljs.core.first(arglist__22620);
var p__22615 = cljs.core.rest(arglist__22620);
return move__delegate(url,p__22615);
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
var options__delegate = function (url,p__22621){
var vec__22624 = p__22621;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22624,(0),null);
var G__22625 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$104,cljs.core.constant$keyword$110,cljs.core.constant$keyword$105,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22625) : cljs_http.client.request.call(null,G__22625));
};
var options = function (url,var_args){
var p__22621 = null;
if (arguments.length > 1) {
  p__22621 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return options__delegate.call(this,url,p__22621);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__22626){
var url = cljs.core.first(arglist__22626);
var p__22621 = cljs.core.rest(arglist__22626);
return options__delegate(url,p__22621);
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
var patch__delegate = function (url,p__22627){
var vec__22630 = p__22627;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22630,(0),null);
var G__22631 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$104,cljs.core.constant$keyword$99,cljs.core.constant$keyword$105,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22631) : cljs_http.client.request.call(null,G__22631));
};
var patch = function (url,var_args){
var p__22627 = null;
if (arguments.length > 1) {
  p__22627 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return patch__delegate.call(this,url,p__22627);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__22632){
var url = cljs.core.first(arglist__22632);
var p__22627 = cljs.core.rest(arglist__22632);
return patch__delegate(url,p__22627);
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
var post__delegate = function (url,p__22633){
var vec__22636 = p__22633;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22636,(0),null);
var G__22637 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$104,cljs.core.constant$keyword$101,cljs.core.constant$keyword$105,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22637) : cljs_http.client.request.call(null,G__22637));
};
var post = function (url,var_args){
var p__22633 = null;
if (arguments.length > 1) {
  p__22633 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return post__delegate.call(this,url,p__22633);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__22638){
var url = cljs.core.first(arglist__22638);
var p__22633 = cljs.core.rest(arglist__22638);
return post__delegate(url,p__22633);
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
var put__delegate = function (url,p__22639){
var vec__22642 = p__22639;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22642,(0),null);
var G__22643 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$104,cljs.core.constant$keyword$102,cljs.core.constant$keyword$105,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22643) : cljs_http.client.request.call(null,G__22643));
};
var put = function (url,var_args){
var p__22639 = null;
if (arguments.length > 1) {
  p__22639 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return put__delegate.call(this,url,p__22639);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__22644){
var url = cljs.core.first(arglist__22644);
var p__22639 = cljs.core.rest(arglist__22644);
return put__delegate(url,p__22639);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;
