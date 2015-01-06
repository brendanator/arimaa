// Compiled by ClojureScript 0.0-2657 {}
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
if(cljs.core.truth_((function (){var and__3719__auto__ = v;
if(cljs.core.truth_(and__3719__auto__)){
return (v > (0));
} else {
return and__3719__auto__;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__23674_SHARP_,p2__23673_SHARP_){
var vec__23676 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__23673_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23676,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23676,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23674_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
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
var uri = (function (){var G__23678 = url;
return goog.Uri.parse(G__23678);
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
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23679_SHARP_){
return cljs_http.client.encode_val(k,p1__23679_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__23680){
var vec__23682 = p__23680;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23682,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23682,(1),null);
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
return (function (p1__23683_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__23683_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var and__3719__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$203,request_method);
if(and__3719__auto__){
return cljs.core.re_find(cljs.core.re_pattern([cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special(content_type))].join('')),[cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$196.cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__3719__auto__;
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
var G__23686 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$204),cljs.core.constant$keyword$195,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$196,"content-type"], null),"application/edn");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23686) : client.call(null,G__23686));
} else {
var G__23687 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23687) : client.call(null,G__23687));
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__23688_SHARP_){
return cljs_http.client.decode_body(p1__23688_SHARP_,cljs.reader.read_string,"application/edn",cljs.core.constant$keyword$197.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23690 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23690) : client.call(null,G__23690));
})()], null));
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__23691){
var vec__23695 = p__23691;
var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23695,(0),null);
return ((function (vec__23695,accept){
return (function (request){
var temp__4124__auto__ = (function (){var or__3731__auto__ = cljs.core.constant$keyword$205.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var accept__$1 = temp__4124__auto__;
var G__23696 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$196,"accept"], null),accept__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23696) : client.call(null,G__23696));
} else {
var G__23697 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23697) : client.call(null,G__23697));
}
});
;})(vec__23695,accept))
};
var wrap_accept = function (client,var_args){
var p__23691 = null;
if (arguments.length > 1) {
  p__23691 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return wrap_accept__delegate.call(this,client,p__23691);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__23698){
var client = cljs.core.first(arglist__23698);
var p__23691 = cljs.core.rest(arglist__23698);
return wrap_accept__delegate(client,p__23691);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__23699){
var vec__23703 = p__23699;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23703,(0),null);
return ((function (vec__23703,content_type){
return (function (request){
var temp__4124__auto__ = (function (){var or__3731__auto__ = cljs.core.constant$keyword$206.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var content_type__$1 = temp__4124__auto__;
var G__23704 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$196,"content-type"], null),content_type__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23704) : client.call(null,G__23704));
} else {
var G__23705 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23705) : client.call(null,G__23705));
}
});
;})(vec__23703,content_type))
};
var wrap_content_type = function (client,var_args){
var p__23699 = null;
if (arguments.length > 1) {
  p__23699 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return wrap_content_type__delegate.call(this,client,p__23699);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__23706){
var client = cljs.core.first(arglist__23706);
var p__23699 = cljs.core.rest(arglist__23706);
return wrap_content_type__delegate(client,p__23699);
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
var map__23710 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$213.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__23710__$1 = ((cljs.core.seq_QMARK_(map__23710))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23710):map__23710);
var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23710__$1,cljs.core.constant$keyword$208);
var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23710__$1,cljs.core.constant$keyword$207);
var G__23711 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$212),cljs.core.constant$keyword$195,cljs_http.util.transit_encode(params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$196,"content-type"], null),"application/transit+json");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23711) : client.call(null,G__23711));
} else {
var G__23712 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23712) : client.call(null,G__23712));
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){
return (function (request){
var map__23717 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$213.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__23717__$1 = ((cljs.core.seq_QMARK_(map__23717))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23717):map__23717);
var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23717__$1,cljs.core.constant$keyword$210);
var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23717__$1,cljs.core.constant$keyword$209);
var transit_decode = ((function (map__23717,map__23717__$1,decoding_opts,decoding){
return (function (p1__23713_SHARP_){
return cljs_http.util.transit_decode(p1__23713_SHARP_,decoding,decoding_opts);
});})(map__23717,map__23717__$1,decoding_opts,decoding))
;
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(((function (map__23717,map__23717__$1,decoding_opts,decoding,transit_decode){
return (function (p1__23714_SHARP_){
return cljs_http.client.decode_body(p1__23714_SHARP_,transit_decode,"application/transit+json",cljs.core.constant$keyword$197.cljs$core$IFn$_invoke$arity$1(request));
});})(map__23717,map__23717__$1,decoding_opts,decoding,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23718 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23718) : client.call(null,G__23718));
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
var G__23721 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$214),cljs.core.constant$keyword$195,cljs_http.util.json_encode(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$196,"content-type"], null),"application/json");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23721) : client.call(null,G__23721));
} else {
var G__23722 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23722) : client.call(null,G__23722));
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__23723_SHARP_){
return cljs_http.client.decode_body(p1__23723_SHARP_,cljs_http.util.json_decode,"application/json",cljs.core.constant$keyword$197.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23725 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23725) : client.call(null,G__23725));
})()], null));
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){
return (function (p__23730){
var map__23731 = p__23730;
var map__23731__$1 = ((cljs.core.seq_QMARK_(map__23731))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23731):map__23731);
var req = map__23731__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23731__$1,cljs.core.constant$keyword$166);
if(cljs.core.truth_(query_params)){
var G__23732 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$166),cljs.core.constant$keyword$174,cljs_http.client.generate_query_string(query_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23732) : client.call(null,G__23732));
} else {
var G__23733 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23733) : client.call(null,G__23733));
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){
return (function (p__23738){
var map__23739 = p__23738;
var map__23739__$1 = ((cljs.core.seq_QMARK_(map__23739))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23739):map__23739);
var request = map__23739__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23739__$1,cljs.core.constant$keyword$197);
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23739__$1,cljs.core.constant$keyword$215);
if(cljs.core.truth_((function (){var and__3719__auto__ = form_params;
if(cljs.core.truth_(and__3719__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$216,null,cljs.core.constant$keyword$217,null,cljs.core.constant$keyword$218,null,cljs.core.constant$keyword$219,null], null), null).call(null,request_method);
} else {
return and__3719__auto__;
}
})())){
var G__23740 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$215),cljs.core.constant$keyword$195,cljs_http.client.generate_query_string(form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$196,"content-type"], null),"application/x-www-form-urlencoded");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23740) : client.call(null,G__23740));
} else {
var G__23741 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23741) : client.call(null,G__23741));
}
});
});
cljs_http.client.generate_form_data = (function generate_form_data(params){
var form_data = (new FormData());
var seq__23748_23754 = cljs.core.seq(params);
var chunk__23749_23755 = null;
var count__23750_23756 = (0);
var i__23751_23757 = (0);
while(true){
if((i__23751_23757 < count__23750_23756)){
var vec__23752_23758 = chunk__23749_23755.cljs$core$IIndexed$_nth$arity$2(null,i__23751_23757);
var k_23759 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23752_23758,(0),null);
var v_23760 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23752_23758,(1),null);
form_data.append(cljs.core.name(k_23759),v_23760);

var G__23761 = seq__23748_23754;
var G__23762 = chunk__23749_23755;
var G__23763 = count__23750_23756;
var G__23764 = (i__23751_23757 + (1));
seq__23748_23754 = G__23761;
chunk__23749_23755 = G__23762;
count__23750_23756 = G__23763;
i__23751_23757 = G__23764;
continue;
} else {
var temp__4126__auto___23765 = cljs.core.seq(seq__23748_23754);
if(temp__4126__auto___23765){
var seq__23748_23766__$1 = temp__4126__auto___23765;
if(cljs.core.chunked_seq_QMARK_(seq__23748_23766__$1)){
var c__4518__auto___23767 = cljs.core.chunk_first(seq__23748_23766__$1);
var G__23768 = cljs.core.chunk_rest(seq__23748_23766__$1);
var G__23769 = c__4518__auto___23767;
var G__23770 = cljs.core.count(c__4518__auto___23767);
var G__23771 = (0);
seq__23748_23754 = G__23768;
chunk__23749_23755 = G__23769;
count__23750_23756 = G__23770;
i__23751_23757 = G__23771;
continue;
} else {
var vec__23753_23772 = cljs.core.first(seq__23748_23766__$1);
var k_23773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23753_23772,(0),null);
var v_23774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23753_23772,(1),null);
form_data.append(cljs.core.name(k_23773),v_23774);

var G__23775 = cljs.core.next(seq__23748_23766__$1);
var G__23776 = null;
var G__23777 = (0);
var G__23778 = (0);
seq__23748_23754 = G__23775;
chunk__23749_23755 = G__23776;
count__23750_23756 = G__23777;
i__23751_23757 = G__23778;
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
return (function (p__23783){
var map__23784 = p__23783;
var map__23784__$1 = ((cljs.core.seq_QMARK_(map__23784))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23784):map__23784);
var request = map__23784__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23784__$1,cljs.core.constant$keyword$197);
var multipart_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23784__$1,cljs.core.constant$keyword$220);
if(cljs.core.truth_((function (){var and__3719__auto__ = multipart_params;
if(cljs.core.truth_(and__3719__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$216,null,cljs.core.constant$keyword$217,null,cljs.core.constant$keyword$218,null,cljs.core.constant$keyword$219,null], null), null).call(null,request_method);
} else {
return and__3719__auto__;
}
})())){
var G__23785 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$220),cljs.core.constant$keyword$195,cljs_http.client.generate_form_data(multipart_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$196,"content-type"], null),"multipart/form-data");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23785) : client.call(null,G__23785));
} else {
var G__23786 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23786) : client.call(null,G__23786));
}
});
});
cljs_http.client.wrap_method = (function wrap_method(client){
return (function (req){
var temp__4124__auto__ = cljs.core.constant$keyword$221.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4124__auto__)){
var m = temp__4124__auto__;
var G__23789 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$221),cljs.core.constant$keyword$197,m);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23789) : client.call(null,G__23789));
} else {
var G__23790 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23790) : client.call(null,G__23790));
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){
return (function (p1__23791_SHARP_){
var G__23793 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23791_SHARP_,cljs.core.constant$keyword$170,server_name);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23793) : client.call(null,G__23793));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){
return (function (p__23799){
var map__23800 = p__23799;
var map__23800__$1 = ((cljs.core.seq_QMARK_(map__23800))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23800):map__23800);
var req = map__23800__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23800__$1,cljs.core.constant$keyword$166);
var temp__4124__auto__ = cljs_http.client.parse_url(cljs.core.constant$keyword$222.cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4124__auto__)){
var spec = temp__4124__auto__;
var G__23801 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),cljs.core.constant$keyword$222),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$166], null),((function (spec,temp__4124__auto__,map__23800,map__23800__$1,req,query_params){
return (function (p1__23794_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__23794_SHARP_,query_params], 0));
});})(spec,temp__4124__auto__,map__23800,map__23800__$1,req,query_params))
);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23801) : client.call(null,G__23801));
} else {
var G__23802 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23802) : client.call(null,G__23802));
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__23803){
var vec__23807 = p__23803;
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23807,(0),null);
return ((function (vec__23807,credentials){
return (function (req){
var credentials__$1 = (function (){var or__3731__auto__ = cljs.core.constant$keyword$223.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_(credentials__$1))){
var G__23808 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$223),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$196,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23808) : client.call(null,G__23808));
} else {
var G__23809 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23809) : client.call(null,G__23809));
}
});
;})(vec__23807,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__23803 = null;
if (arguments.length > 1) {
  p__23803 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return wrap_basic_auth__delegate.call(this,client,p__23803);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__23810){
var client = cljs.core.first(arglist__23810);
var p__23803 = cljs.core.rest(arglist__23810);
return wrap_basic_auth__delegate(client,p__23803);
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
var G__23813 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$224),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$196,"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join(''));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23813) : client.call(null,G__23813));
} else {
var G__23814 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23814) : client.call(null,G__23814));
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
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((function (){var G__23817 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23817) : client.call(null,G__23817));
})(),custom_channel);
} else {
var G__23818 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23818) : client.call(null,G__23818));
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
var delete$__delegate = function (url,p__23819){
var vec__23822 = p__23819;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23822,(0),null);
var G__23823 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$221,cljs.core.constant$keyword$217,cljs.core.constant$keyword$222,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23823) : cljs_http.client.request.call(null,G__23823));
};
var delete$ = function (url,var_args){
var p__23819 = null;
if (arguments.length > 1) {
  p__23819 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return delete$__delegate.call(this,url,p__23819);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__23824){
var url = cljs.core.first(arglist__23824);
var p__23819 = cljs.core.rest(arglist__23824);
return delete$__delegate(url,p__23819);
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
var get__delegate = function (url,p__23825){
var vec__23828 = p__23825;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23828,(0),null);
var G__23829 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$221,cljs.core.constant$keyword$198,cljs.core.constant$keyword$222,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23829) : cljs_http.client.request.call(null,G__23829));
};
var get = function (url,var_args){
var p__23825 = null;
if (arguments.length > 1) {
  p__23825 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return get__delegate.call(this,url,p__23825);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__23830){
var url = cljs.core.first(arglist__23830);
var p__23825 = cljs.core.rest(arglist__23830);
return get__delegate(url,p__23825);
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
var head__delegate = function (url,p__23831){
var vec__23834 = p__23831;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23834,(0),null);
var G__23835 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$221,cljs.core.constant$keyword$203,cljs.core.constant$keyword$222,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23835) : cljs_http.client.request.call(null,G__23835));
};
var head = function (url,var_args){
var p__23831 = null;
if (arguments.length > 1) {
  p__23831 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return head__delegate.call(this,url,p__23831);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__23836){
var url = cljs.core.first(arglist__23836);
var p__23831 = cljs.core.rest(arglist__23836);
return head__delegate(url,p__23831);
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
var move__delegate = function (url,p__23837){
var vec__23840 = p__23837;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23840,(0),null);
var G__23841 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$221,cljs.core.constant$keyword$226,cljs.core.constant$keyword$222,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23841) : cljs_http.client.request.call(null,G__23841));
};
var move = function (url,var_args){
var p__23837 = null;
if (arguments.length > 1) {
  p__23837 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return move__delegate.call(this,url,p__23837);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__23842){
var url = cljs.core.first(arglist__23842);
var p__23837 = cljs.core.rest(arglist__23842);
return move__delegate(url,p__23837);
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
var options__delegate = function (url,p__23843){
var vec__23846 = p__23843;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23846,(0),null);
var G__23847 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$221,cljs.core.constant$keyword$227,cljs.core.constant$keyword$222,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23847) : cljs_http.client.request.call(null,G__23847));
};
var options = function (url,var_args){
var p__23843 = null;
if (arguments.length > 1) {
  p__23843 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return options__delegate.call(this,url,p__23843);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__23848){
var url = cljs.core.first(arglist__23848);
var p__23843 = cljs.core.rest(arglist__23848);
return options__delegate(url,p__23843);
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
var patch__delegate = function (url,p__23849){
var vec__23852 = p__23849;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23852,(0),null);
var G__23853 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$221,cljs.core.constant$keyword$216,cljs.core.constant$keyword$222,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23853) : cljs_http.client.request.call(null,G__23853));
};
var patch = function (url,var_args){
var p__23849 = null;
if (arguments.length > 1) {
  p__23849 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return patch__delegate.call(this,url,p__23849);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__23854){
var url = cljs.core.first(arglist__23854);
var p__23849 = cljs.core.rest(arglist__23854);
return patch__delegate(url,p__23849);
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
var post__delegate = function (url,p__23855){
var vec__23858 = p__23855;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23858,(0),null);
var G__23859 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$221,cljs.core.constant$keyword$218,cljs.core.constant$keyword$222,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23859) : cljs_http.client.request.call(null,G__23859));
};
var post = function (url,var_args){
var p__23855 = null;
if (arguments.length > 1) {
  p__23855 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return post__delegate.call(this,url,p__23855);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__23860){
var url = cljs.core.first(arglist__23860);
var p__23855 = cljs.core.rest(arglist__23860);
return post__delegate(url,p__23855);
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
var put__delegate = function (url,p__23861){
var vec__23864 = p__23861;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23864,(0),null);
var G__23865 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$221,cljs.core.constant$keyword$219,cljs.core.constant$keyword$222,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23865) : cljs_http.client.request.call(null,G__23865));
};
var put = function (url,var_args){
var p__23861 = null;
if (arguments.length > 1) {
  p__23861 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return put__delegate.call(this,url,p__23861);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__23866){
var url = cljs.core.first(arglist__23866);
var p__23861 = cljs.core.rest(arglist__23866);
return put__delegate(url,p__23861);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;
