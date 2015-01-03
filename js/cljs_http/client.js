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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__26622_SHARP_,p2__26621_SHARP_){
var vec__26624 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__26621_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26624,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26624,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26622_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
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
var uri = (function (){var G__26626 = url;
return goog.Uri.parse(G__26626);
})();
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$89,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),cljs.core.constant$keyword$92,uri.getDomain(),cljs.core.constant$keyword$93,cljs_http.client.if_pos(uri.getPort()),cljs.core.constant$keyword$94,uri.getPath(),cljs.core.constant$keyword$96,((cljs.core.not(query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),cljs.core.constant$keyword$88,((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params([cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode(cljs.core.name(k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode([cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26627_SHARP_){
return cljs_http.client.encode_val(k,p1__26627_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__26628){
var vec__26630 = p__26628;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26630,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26630,(1),null);
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
return (function (p1__26631_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__26631_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var and__3618__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$108,request_method);
if(and__3618__auto__){
return cljs.core.re_find(cljs.core.re_pattern([cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special(content_type))].join('')),[cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__3618__auto__;
}
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100], null),decode_fn);
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
var temp__4124__auto__ = cljs.core.constant$keyword$109.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
var G__26634 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$109),cljs.core.constant$keyword$100,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$101,"content-type"], null),"application/edn");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26634) : client.call(null,G__26634));
} else {
var G__26635 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26635) : client.call(null,G__26635));
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__26636_SHARP_){
return cljs_http.client.decode_body(p1__26636_SHARP_,cljs.reader.read_string,"application/edn",cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__26638 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26638) : client.call(null,G__26638));
})()], null));
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__26639){
var vec__26643 = p__26639;
var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26643,(0),null);
return ((function (vec__26643,accept){
return (function (request){
var temp__4124__auto__ = (function (){var or__3630__auto__ = cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var accept__$1 = temp__4124__auto__;
var G__26644 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$101,"accept"], null),accept__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26644) : client.call(null,G__26644));
} else {
var G__26645 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26645) : client.call(null,G__26645));
}
});
;})(vec__26643,accept))
};
var wrap_accept = function (client,var_args){
var p__26639 = null;
if (arguments.length > 1) {
  p__26639 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return wrap_accept__delegate.call(this,client,p__26639);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__26646){
var client = cljs.core.first(arglist__26646);
var p__26639 = cljs.core.rest(arglist__26646);
return wrap_accept__delegate(client,p__26639);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__26647){
var vec__26651 = p__26647;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26651,(0),null);
return ((function (vec__26651,content_type){
return (function (request){
var temp__4124__auto__ = (function (){var or__3630__auto__ = cljs.core.constant$keyword$111.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var content_type__$1 = temp__4124__auto__;
var G__26652 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$101,"content-type"], null),content_type__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26652) : client.call(null,G__26652));
} else {
var G__26653 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26653) : client.call(null,G__26653));
}
});
;})(vec__26651,content_type))
};
var wrap_content_type = function (client,var_args){
var p__26647 = null;
if (arguments.length > 1) {
  p__26647 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return wrap_content_type__delegate.call(this,client,p__26647);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__26654){
var client = cljs.core.first(arglist__26654);
var p__26647 = cljs.core.rest(arglist__26654);
return wrap_content_type__delegate(client,p__26647);
});
wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = wrap_content_type__delegate;
return wrap_content_type;
})()
;
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$112,cljs.core.constant$keyword$116,cljs.core.constant$keyword$113,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$114,cljs.core.constant$keyword$116,cljs.core.constant$keyword$115,cljs.core.PersistentArrayMap.EMPTY], null);
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
var temp__4124__auto__ = cljs.core.constant$keyword$117.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
var map__26658 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$118.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__26658__$1 = ((cljs.core.seq_QMARK_(map__26658))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26658):map__26658);
var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26658__$1,cljs.core.constant$keyword$113);
var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26658__$1,cljs.core.constant$keyword$112);
var G__26659 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$117),cljs.core.constant$keyword$100,cljs_http.util.transit_encode(params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$101,"content-type"], null),"application/transit+json");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26659) : client.call(null,G__26659));
} else {
var G__26660 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26660) : client.call(null,G__26660));
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){
return (function (request){
var map__26665 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$118.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__26665__$1 = ((cljs.core.seq_QMARK_(map__26665))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26665):map__26665);
var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26665__$1,cljs.core.constant$keyword$115);
var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26665__$1,cljs.core.constant$keyword$114);
var transit_decode = ((function (map__26665,map__26665__$1,decoding_opts,decoding){
return (function (p1__26661_SHARP_){
return cljs_http.util.transit_decode(p1__26661_SHARP_,decoding,decoding_opts);
});})(map__26665,map__26665__$1,decoding_opts,decoding))
;
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(((function (map__26665,map__26665__$1,decoding_opts,decoding,transit_decode){
return (function (p1__26662_SHARP_){
return cljs_http.client.decode_body(p1__26662_SHARP_,transit_decode,"application/transit+json",cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(request));
});})(map__26665,map__26665__$1,decoding_opts,decoding,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__26666 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26666) : client.call(null,G__26666));
})()], null));
});
});
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){
return (function (request){
var temp__4124__auto__ = cljs.core.constant$keyword$119.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
var G__26669 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$119),cljs.core.constant$keyword$100,cljs_http.util.json_encode(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$101,"content-type"], null),"application/json");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26669) : client.call(null,G__26669));
} else {
var G__26670 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26670) : client.call(null,G__26670));
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__26671_SHARP_){
return cljs_http.client.decode_body(p1__26671_SHARP_,cljs_http.util.json_decode,"application/json",cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__26673 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26673) : client.call(null,G__26673));
})()], null));
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){
return (function (p__26678){
var map__26679 = p__26678;
var map__26679__$1 = ((cljs.core.seq_QMARK_(map__26679))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26679):map__26679);
var req = map__26679__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26679__$1,cljs.core.constant$keyword$88);
if(cljs.core.truth_(query_params)){
var G__26680 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$88),cljs.core.constant$keyword$96,cljs_http.client.generate_query_string(query_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26680) : client.call(null,G__26680));
} else {
var G__26681 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26681) : client.call(null,G__26681));
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){
return (function (p__26686){
var map__26687 = p__26686;
var map__26687__$1 = ((cljs.core.seq_QMARK_(map__26687))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26687):map__26687);
var request = map__26687__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26687__$1,cljs.core.constant$keyword$102);
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26687__$1,cljs.core.constant$keyword$120);
if(cljs.core.truth_((function (){var and__3618__auto__ = form_params;
if(cljs.core.truth_(and__3618__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$121,null,cljs.core.constant$keyword$122,null,cljs.core.constant$keyword$123,null,cljs.core.constant$keyword$124,null], null), null).call(null,request_method);
} else {
return and__3618__auto__;
}
})())){
var G__26688 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$120),cljs.core.constant$keyword$100,cljs_http.client.generate_query_string(form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$101,"content-type"], null),"application/x-www-form-urlencoded");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26688) : client.call(null,G__26688));
} else {
var G__26689 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26689) : client.call(null,G__26689));
}
});
});
cljs_http.client.generate_form_data = (function generate_form_data(params){
var form_data = (new FormData());
var seq__26696_26702 = cljs.core.seq(params);
var chunk__26697_26703 = null;
var count__26698_26704 = (0);
var i__26699_26705 = (0);
while(true){
if((i__26699_26705 < count__26698_26704)){
var vec__26700_26706 = chunk__26697_26703.cljs$core$IIndexed$_nth$arity$2(null,i__26699_26705);
var k_26707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26700_26706,(0),null);
var v_26708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26700_26706,(1),null);
form_data.append(cljs.core.name(k_26707),v_26708);

var G__26709 = seq__26696_26702;
var G__26710 = chunk__26697_26703;
var G__26711 = count__26698_26704;
var G__26712 = (i__26699_26705 + (1));
seq__26696_26702 = G__26709;
chunk__26697_26703 = G__26710;
count__26698_26704 = G__26711;
i__26699_26705 = G__26712;
continue;
} else {
var temp__4126__auto___26713 = cljs.core.seq(seq__26696_26702);
if(temp__4126__auto___26713){
var seq__26696_26714__$1 = temp__4126__auto___26713;
if(cljs.core.chunked_seq_QMARK_(seq__26696_26714__$1)){
var c__4417__auto___26715 = cljs.core.chunk_first(seq__26696_26714__$1);
var G__26716 = cljs.core.chunk_rest(seq__26696_26714__$1);
var G__26717 = c__4417__auto___26715;
var G__26718 = cljs.core.count(c__4417__auto___26715);
var G__26719 = (0);
seq__26696_26702 = G__26716;
chunk__26697_26703 = G__26717;
count__26698_26704 = G__26718;
i__26699_26705 = G__26719;
continue;
} else {
var vec__26701_26720 = cljs.core.first(seq__26696_26714__$1);
var k_26721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26701_26720,(0),null);
var v_26722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26701_26720,(1),null);
form_data.append(cljs.core.name(k_26721),v_26722);

var G__26723 = cljs.core.next(seq__26696_26714__$1);
var G__26724 = null;
var G__26725 = (0);
var G__26726 = (0);
seq__26696_26702 = G__26723;
chunk__26697_26703 = G__26724;
count__26698_26704 = G__26725;
i__26699_26705 = G__26726;
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
return (function (p__26731){
var map__26732 = p__26731;
var map__26732__$1 = ((cljs.core.seq_QMARK_(map__26732))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26732):map__26732);
var request = map__26732__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26732__$1,cljs.core.constant$keyword$102);
var multipart_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26732__$1,cljs.core.constant$keyword$125);
if(cljs.core.truth_((function (){var and__3618__auto__ = multipart_params;
if(cljs.core.truth_(and__3618__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$121,null,cljs.core.constant$keyword$122,null,cljs.core.constant$keyword$123,null,cljs.core.constant$keyword$124,null], null), null).call(null,request_method);
} else {
return and__3618__auto__;
}
})())){
var G__26733 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$125),cljs.core.constant$keyword$100,cljs_http.client.generate_form_data(multipart_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$101,"content-type"], null),"multipart/form-data");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26733) : client.call(null,G__26733));
} else {
var G__26734 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26734) : client.call(null,G__26734));
}
});
});
cljs_http.client.wrap_method = (function wrap_method(client){
return (function (req){
var temp__4124__auto__ = cljs.core.constant$keyword$126.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4124__auto__)){
var m = temp__4124__auto__;
var G__26737 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$126),cljs.core.constant$keyword$102,m);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26737) : client.call(null,G__26737));
} else {
var G__26738 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26738) : client.call(null,G__26738));
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){
return (function (p1__26739_SHARP_){
var G__26741 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26739_SHARP_,cljs.core.constant$keyword$92,server_name);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26741) : client.call(null,G__26741));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){
return (function (p__26747){
var map__26748 = p__26747;
var map__26748__$1 = ((cljs.core.seq_QMARK_(map__26748))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26748):map__26748);
var req = map__26748__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26748__$1,cljs.core.constant$keyword$88);
var temp__4124__auto__ = cljs_http.client.parse_url(cljs.core.constant$keyword$127.cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4124__auto__)){
var spec = temp__4124__auto__;
var G__26749 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),cljs.core.constant$keyword$127),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$88], null),((function (spec,temp__4124__auto__,map__26748,map__26748__$1,req,query_params){
return (function (p1__26742_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__26742_SHARP_,query_params], 0));
});})(spec,temp__4124__auto__,map__26748,map__26748__$1,req,query_params))
);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26749) : client.call(null,G__26749));
} else {
var G__26750 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26750) : client.call(null,G__26750));
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__26751){
var vec__26755 = p__26751;
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26755,(0),null);
return ((function (vec__26755,credentials){
return (function (req){
var credentials__$1 = (function (){var or__3630__auto__ = cljs.core.constant$keyword$128.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_(credentials__$1))){
var G__26756 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$101,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26756) : client.call(null,G__26756));
} else {
var G__26757 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26757) : client.call(null,G__26757));
}
});
;})(vec__26755,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__26751 = null;
if (arguments.length > 1) {
  p__26751 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return wrap_basic_auth__delegate.call(this,client,p__26751);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__26758){
var client = cljs.core.first(arglist__26758);
var p__26751 = cljs.core.rest(arglist__26758);
return wrap_basic_auth__delegate(client,p__26751);
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
var temp__4124__auto__ = cljs.core.constant$keyword$129.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4124__auto__)){
var oauth_token = temp__4124__auto__;
var G__26761 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$129),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$101,"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join(''));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26761) : client.call(null,G__26761));
} else {
var G__26762 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26762) : client.call(null,G__26762));
}
});
});
/**
* Pipe the response-channel into the request-map's
* custom channel (e.g. to enable transducers)
*/
cljs_http.client.wrap_channel_from_request_map = (function wrap_channel_from_request_map(client){
return (function (request){
var temp__4124__auto__ = cljs.core.constant$keyword$130.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var custom_channel = temp__4124__auto__;
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((function (){var G__26765 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26765) : client.call(null,G__26765));
})(),custom_channel);
} else {
var G__26766 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26766) : client.call(null,G__26766));
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
var delete$__delegate = function (url,p__26767){
var vec__26770 = p__26767;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26770,(0),null);
var G__26771 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$126,cljs.core.constant$keyword$122,cljs.core.constant$keyword$127,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26771) : cljs_http.client.request.call(null,G__26771));
};
var delete$ = function (url,var_args){
var p__26767 = null;
if (arguments.length > 1) {
  p__26767 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return delete$__delegate.call(this,url,p__26767);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__26772){
var url = cljs.core.first(arglist__26772);
var p__26767 = cljs.core.rest(arglist__26772);
return delete$__delegate(url,p__26767);
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
var get__delegate = function (url,p__26773){
var vec__26776 = p__26773;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26776,(0),null);
var G__26777 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$126,cljs.core.constant$keyword$103,cljs.core.constant$keyword$127,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26777) : cljs_http.client.request.call(null,G__26777));
};
var get = function (url,var_args){
var p__26773 = null;
if (arguments.length > 1) {
  p__26773 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return get__delegate.call(this,url,p__26773);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__26778){
var url = cljs.core.first(arglist__26778);
var p__26773 = cljs.core.rest(arglist__26778);
return get__delegate(url,p__26773);
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
var head__delegate = function (url,p__26779){
var vec__26782 = p__26779;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26782,(0),null);
var G__26783 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$126,cljs.core.constant$keyword$108,cljs.core.constant$keyword$127,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26783) : cljs_http.client.request.call(null,G__26783));
};
var head = function (url,var_args){
var p__26779 = null;
if (arguments.length > 1) {
  p__26779 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return head__delegate.call(this,url,p__26779);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__26784){
var url = cljs.core.first(arglist__26784);
var p__26779 = cljs.core.rest(arglist__26784);
return head__delegate(url,p__26779);
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
var move__delegate = function (url,p__26785){
var vec__26788 = p__26785;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26788,(0),null);
var G__26789 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$126,cljs.core.constant$keyword$131,cljs.core.constant$keyword$127,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26789) : cljs_http.client.request.call(null,G__26789));
};
var move = function (url,var_args){
var p__26785 = null;
if (arguments.length > 1) {
  p__26785 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return move__delegate.call(this,url,p__26785);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__26790){
var url = cljs.core.first(arglist__26790);
var p__26785 = cljs.core.rest(arglist__26790);
return move__delegate(url,p__26785);
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
var options__delegate = function (url,p__26791){
var vec__26794 = p__26791;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26794,(0),null);
var G__26795 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$126,cljs.core.constant$keyword$132,cljs.core.constant$keyword$127,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26795) : cljs_http.client.request.call(null,G__26795));
};
var options = function (url,var_args){
var p__26791 = null;
if (arguments.length > 1) {
  p__26791 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return options__delegate.call(this,url,p__26791);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__26796){
var url = cljs.core.first(arglist__26796);
var p__26791 = cljs.core.rest(arglist__26796);
return options__delegate(url,p__26791);
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
var patch__delegate = function (url,p__26797){
var vec__26800 = p__26797;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26800,(0),null);
var G__26801 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$126,cljs.core.constant$keyword$121,cljs.core.constant$keyword$127,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26801) : cljs_http.client.request.call(null,G__26801));
};
var patch = function (url,var_args){
var p__26797 = null;
if (arguments.length > 1) {
  p__26797 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return patch__delegate.call(this,url,p__26797);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__26802){
var url = cljs.core.first(arglist__26802);
var p__26797 = cljs.core.rest(arglist__26802);
return patch__delegate(url,p__26797);
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
var post__delegate = function (url,p__26803){
var vec__26806 = p__26803;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26806,(0),null);
var G__26807 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$126,cljs.core.constant$keyword$123,cljs.core.constant$keyword$127,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26807) : cljs_http.client.request.call(null,G__26807));
};
var post = function (url,var_args){
var p__26803 = null;
if (arguments.length > 1) {
  p__26803 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return post__delegate.call(this,url,p__26803);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__26808){
var url = cljs.core.first(arglist__26808);
var p__26803 = cljs.core.rest(arglist__26808);
return post__delegate(url,p__26803);
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
var put__delegate = function (url,p__26809){
var vec__26812 = p__26809;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26812,(0),null);
var G__26813 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$126,cljs.core.constant$keyword$124,cljs.core.constant$keyword$127,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26813) : cljs_http.client.request.call(null,G__26813));
};
var put = function (url,var_args){
var p__26809 = null;
if (arguments.length > 1) {
  p__26809 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return put__delegate.call(this,url,p__26809);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__26814){
var url = cljs.core.first(arglist__26814);
var p__26809 = cljs.core.rest(arglist__26814);
return put__delegate(url,p__26809);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;
