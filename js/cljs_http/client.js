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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__22709_SHARP_,p2__22708_SHARP_){
var vec__22711 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__22708_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22711,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22711,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22709_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
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
var uri = (function (){var G__22713 = url;
return goog.Uri.parse(G__22713);
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
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22714_SHARP_){
return cljs_http.client.encode_val(k,p1__22714_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__22715){
var vec__22717 = p__22715;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22717,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22717,(1),null);
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
return (function (p1__22718_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__22718_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var and__3719__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$91,request_method);
if(and__3719__auto__){
return cljs.core.re_find(cljs.core.re_pattern([cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special(content_type))].join('')),[cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$84.cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__3719__auto__;
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
var G__22721 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$92),cljs.core.constant$keyword$83,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,"content-type"], null),"application/edn");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22721) : client.call(null,G__22721));
} else {
var G__22722 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22722) : client.call(null,G__22722));
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__22723_SHARP_){
return cljs_http.client.decode_body(p1__22723_SHARP_,cljs.reader.read_string,"application/edn",cljs.core.constant$keyword$85.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22725 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22725) : client.call(null,G__22725));
})()], null));
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__22726){
var vec__22730 = p__22726;
var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22730,(0),null);
return ((function (vec__22730,accept){
return (function (request){
var temp__4124__auto__ = (function (){var or__3731__auto__ = cljs.core.constant$keyword$93.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var accept__$1 = temp__4124__auto__;
var G__22731 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,"accept"], null),accept__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22731) : client.call(null,G__22731));
} else {
var G__22732 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22732) : client.call(null,G__22732));
}
});
;})(vec__22730,accept))
};
var wrap_accept = function (client,var_args){
var p__22726 = null;
if (arguments.length > 1) {
  p__22726 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return wrap_accept__delegate.call(this,client,p__22726);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__22733){
var client = cljs.core.first(arglist__22733);
var p__22726 = cljs.core.rest(arglist__22733);
return wrap_accept__delegate(client,p__22726);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__22734){
var vec__22738 = p__22734;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22738,(0),null);
return ((function (vec__22738,content_type){
return (function (request){
var temp__4124__auto__ = (function (){var or__3731__auto__ = cljs.core.constant$keyword$94.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var content_type__$1 = temp__4124__auto__;
var G__22739 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,"content-type"], null),content_type__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22739) : client.call(null,G__22739));
} else {
var G__22740 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22740) : client.call(null,G__22740));
}
});
;})(vec__22738,content_type))
};
var wrap_content_type = function (client,var_args){
var p__22734 = null;
if (arguments.length > 1) {
  p__22734 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return wrap_content_type__delegate.call(this,client,p__22734);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__22741){
var client = cljs.core.first(arglist__22741);
var p__22734 = cljs.core.rest(arglist__22741);
return wrap_content_type__delegate(client,p__22734);
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
var map__22745 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__22745__$1 = ((cljs.core.seq_QMARK_(map__22745))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22745):map__22745);
var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22745__$1,cljs.core.constant$keyword$96);
var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22745__$1,cljs.core.constant$keyword$95);
var G__22746 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$100),cljs.core.constant$keyword$83,cljs_http.util.transit_encode(params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,"content-type"], null),"application/transit+json");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22746) : client.call(null,G__22746));
} else {
var G__22747 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22747) : client.call(null,G__22747));
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){
return (function (request){
var map__22752 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__22752__$1 = ((cljs.core.seq_QMARK_(map__22752))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22752):map__22752);
var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22752__$1,cljs.core.constant$keyword$98);
var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22752__$1,cljs.core.constant$keyword$97);
var transit_decode = ((function (map__22752,map__22752__$1,decoding_opts,decoding){
return (function (p1__22748_SHARP_){
return cljs_http.util.transit_decode(p1__22748_SHARP_,decoding,decoding_opts);
});})(map__22752,map__22752__$1,decoding_opts,decoding))
;
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(((function (map__22752,map__22752__$1,decoding_opts,decoding,transit_decode){
return (function (p1__22749_SHARP_){
return cljs_http.client.decode_body(p1__22749_SHARP_,transit_decode,"application/transit+json",cljs.core.constant$keyword$85.cljs$core$IFn$_invoke$arity$1(request));
});})(map__22752,map__22752__$1,decoding_opts,decoding,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22753 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22753) : client.call(null,G__22753));
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
var G__22756 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$102),cljs.core.constant$keyword$83,cljs_http.util.json_encode(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,"content-type"], null),"application/json");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22756) : client.call(null,G__22756));
} else {
var G__22757 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22757) : client.call(null,G__22757));
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__22758_SHARP_){
return cljs_http.client.decode_body(p1__22758_SHARP_,cljs_http.util.json_decode,"application/json",cljs.core.constant$keyword$85.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22760 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22760) : client.call(null,G__22760));
})()], null));
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){
return (function (p__22765){
var map__22766 = p__22765;
var map__22766__$1 = ((cljs.core.seq_QMARK_(map__22766))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22766):map__22766);
var req = map__22766__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22766__$1,cljs.core.constant$keyword$53);
if(cljs.core.truth_(query_params)){
var G__22767 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$53),cljs.core.constant$keyword$61,cljs_http.client.generate_query_string(query_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22767) : client.call(null,G__22767));
} else {
var G__22768 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22768) : client.call(null,G__22768));
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){
return (function (p__22773){
var map__22774 = p__22773;
var map__22774__$1 = ((cljs.core.seq_QMARK_(map__22774))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22774):map__22774);
var request = map__22774__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22774__$1,cljs.core.constant$keyword$85);
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22774__$1,cljs.core.constant$keyword$103);
if(cljs.core.truth_((function (){var and__3719__auto__ = form_params;
if(cljs.core.truth_(and__3719__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$104,null,cljs.core.constant$keyword$105,null,cljs.core.constant$keyword$106,null,cljs.core.constant$keyword$107,null], null), null).call(null,request_method);
} else {
return and__3719__auto__;
}
})())){
var G__22775 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$103),cljs.core.constant$keyword$83,cljs_http.client.generate_query_string(form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,"content-type"], null),"application/x-www-form-urlencoded");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22775) : client.call(null,G__22775));
} else {
var G__22776 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22776) : client.call(null,G__22776));
}
});
});
cljs_http.client.generate_form_data = (function generate_form_data(params){
var form_data = (new FormData());
var seq__22783_22789 = cljs.core.seq(params);
var chunk__22784_22790 = null;
var count__22785_22791 = (0);
var i__22786_22792 = (0);
while(true){
if((i__22786_22792 < count__22785_22791)){
var vec__22787_22793 = chunk__22784_22790.cljs$core$IIndexed$_nth$arity$2(null,i__22786_22792);
var k_22794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22787_22793,(0),null);
var v_22795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22787_22793,(1),null);
form_data.append(cljs.core.name(k_22794),v_22795);

var G__22796 = seq__22783_22789;
var G__22797 = chunk__22784_22790;
var G__22798 = count__22785_22791;
var G__22799 = (i__22786_22792 + (1));
seq__22783_22789 = G__22796;
chunk__22784_22790 = G__22797;
count__22785_22791 = G__22798;
i__22786_22792 = G__22799;
continue;
} else {
var temp__4126__auto___22800 = cljs.core.seq(seq__22783_22789);
if(temp__4126__auto___22800){
var seq__22783_22801__$1 = temp__4126__auto___22800;
if(cljs.core.chunked_seq_QMARK_(seq__22783_22801__$1)){
var c__4518__auto___22802 = cljs.core.chunk_first(seq__22783_22801__$1);
var G__22803 = cljs.core.chunk_rest(seq__22783_22801__$1);
var G__22804 = c__4518__auto___22802;
var G__22805 = cljs.core.count(c__4518__auto___22802);
var G__22806 = (0);
seq__22783_22789 = G__22803;
chunk__22784_22790 = G__22804;
count__22785_22791 = G__22805;
i__22786_22792 = G__22806;
continue;
} else {
var vec__22788_22807 = cljs.core.first(seq__22783_22801__$1);
var k_22808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22788_22807,(0),null);
var v_22809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22788_22807,(1),null);
form_data.append(cljs.core.name(k_22808),v_22809);

var G__22810 = cljs.core.next(seq__22783_22801__$1);
var G__22811 = null;
var G__22812 = (0);
var G__22813 = (0);
seq__22783_22789 = G__22810;
chunk__22784_22790 = G__22811;
count__22785_22791 = G__22812;
i__22786_22792 = G__22813;
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
return (function (p__22818){
var map__22819 = p__22818;
var map__22819__$1 = ((cljs.core.seq_QMARK_(map__22819))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22819):map__22819);
var request = map__22819__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22819__$1,cljs.core.constant$keyword$85);
var multipart_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22819__$1,cljs.core.constant$keyword$108);
if(cljs.core.truth_((function (){var and__3719__auto__ = multipart_params;
if(cljs.core.truth_(and__3719__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$104,null,cljs.core.constant$keyword$105,null,cljs.core.constant$keyword$106,null,cljs.core.constant$keyword$107,null], null), null).call(null,request_method);
} else {
return and__3719__auto__;
}
})())){
var G__22820 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$108),cljs.core.constant$keyword$83,cljs_http.client.generate_form_data(multipart_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,"content-type"], null),"multipart/form-data");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22820) : client.call(null,G__22820));
} else {
var G__22821 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22821) : client.call(null,G__22821));
}
});
});
cljs_http.client.wrap_method = (function wrap_method(client){
return (function (req){
var temp__4124__auto__ = cljs.core.constant$keyword$109.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4124__auto__)){
var m = temp__4124__auto__;
var G__22824 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$109),cljs.core.constant$keyword$85,m);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22824) : client.call(null,G__22824));
} else {
var G__22825 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22825) : client.call(null,G__22825));
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){
return (function (p1__22826_SHARP_){
var G__22828 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22826_SHARP_,cljs.core.constant$keyword$57,server_name);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22828) : client.call(null,G__22828));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){
return (function (p__22834){
var map__22835 = p__22834;
var map__22835__$1 = ((cljs.core.seq_QMARK_(map__22835))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22835):map__22835);
var req = map__22835__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22835__$1,cljs.core.constant$keyword$53);
var temp__4124__auto__ = cljs_http.client.parse_url(cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4124__auto__)){
var spec = temp__4124__auto__;
var G__22836 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),cljs.core.constant$keyword$110),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$53], null),((function (spec,temp__4124__auto__,map__22835,map__22835__$1,req,query_params){
return (function (p1__22829_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__22829_SHARP_,query_params], 0));
});})(spec,temp__4124__auto__,map__22835,map__22835__$1,req,query_params))
);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22836) : client.call(null,G__22836));
} else {
var G__22837 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22837) : client.call(null,G__22837));
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__22838){
var vec__22842 = p__22838;
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22842,(0),null);
return ((function (vec__22842,credentials){
return (function (req){
var credentials__$1 = (function (){var or__3731__auto__ = cljs.core.constant$keyword$111.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_(credentials__$1))){
var G__22843 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$111),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22843) : client.call(null,G__22843));
} else {
var G__22844 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22844) : client.call(null,G__22844));
}
});
;})(vec__22842,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__22838 = null;
if (arguments.length > 1) {
  p__22838 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return wrap_basic_auth__delegate.call(this,client,p__22838);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__22845){
var client = cljs.core.first(arglist__22845);
var p__22838 = cljs.core.rest(arglist__22845);
return wrap_basic_auth__delegate(client,p__22838);
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
var G__22848 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$112),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join(''));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22848) : client.call(null,G__22848));
} else {
var G__22849 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22849) : client.call(null,G__22849));
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
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((function (){var G__22852 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22852) : client.call(null,G__22852));
})(),custom_channel);
} else {
var G__22853 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22853) : client.call(null,G__22853));
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
var delete$__delegate = function (url,p__22854){
var vec__22857 = p__22854;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22857,(0),null);
var G__22858 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$109,cljs.core.constant$keyword$105,cljs.core.constant$keyword$110,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22858) : cljs_http.client.request.call(null,G__22858));
};
var delete$ = function (url,var_args){
var p__22854 = null;
if (arguments.length > 1) {
  p__22854 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return delete$__delegate.call(this,url,p__22854);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__22859){
var url = cljs.core.first(arglist__22859);
var p__22854 = cljs.core.rest(arglist__22859);
return delete$__delegate(url,p__22854);
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
var get__delegate = function (url,p__22860){
var vec__22863 = p__22860;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22863,(0),null);
var G__22864 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$109,cljs.core.constant$keyword$86,cljs.core.constant$keyword$110,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22864) : cljs_http.client.request.call(null,G__22864));
};
var get = function (url,var_args){
var p__22860 = null;
if (arguments.length > 1) {
  p__22860 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return get__delegate.call(this,url,p__22860);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__22865){
var url = cljs.core.first(arglist__22865);
var p__22860 = cljs.core.rest(arglist__22865);
return get__delegate(url,p__22860);
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
var head__delegate = function (url,p__22866){
var vec__22869 = p__22866;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22869,(0),null);
var G__22870 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$109,cljs.core.constant$keyword$91,cljs.core.constant$keyword$110,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22870) : cljs_http.client.request.call(null,G__22870));
};
var head = function (url,var_args){
var p__22866 = null;
if (arguments.length > 1) {
  p__22866 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return head__delegate.call(this,url,p__22866);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__22871){
var url = cljs.core.first(arglist__22871);
var p__22866 = cljs.core.rest(arglist__22871);
return head__delegate(url,p__22866);
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
var move__delegate = function (url,p__22872){
var vec__22875 = p__22872;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22875,(0),null);
var G__22876 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$109,cljs.core.constant$keyword$114,cljs.core.constant$keyword$110,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22876) : cljs_http.client.request.call(null,G__22876));
};
var move = function (url,var_args){
var p__22872 = null;
if (arguments.length > 1) {
  p__22872 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return move__delegate.call(this,url,p__22872);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__22877){
var url = cljs.core.first(arglist__22877);
var p__22872 = cljs.core.rest(arglist__22877);
return move__delegate(url,p__22872);
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
var options__delegate = function (url,p__22878){
var vec__22881 = p__22878;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22881,(0),null);
var G__22882 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$109,cljs.core.constant$keyword$115,cljs.core.constant$keyword$110,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22882) : cljs_http.client.request.call(null,G__22882));
};
var options = function (url,var_args){
var p__22878 = null;
if (arguments.length > 1) {
  p__22878 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return options__delegate.call(this,url,p__22878);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__22883){
var url = cljs.core.first(arglist__22883);
var p__22878 = cljs.core.rest(arglist__22883);
return options__delegate(url,p__22878);
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
var patch__delegate = function (url,p__22884){
var vec__22887 = p__22884;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22887,(0),null);
var G__22888 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$109,cljs.core.constant$keyword$104,cljs.core.constant$keyword$110,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22888) : cljs_http.client.request.call(null,G__22888));
};
var patch = function (url,var_args){
var p__22884 = null;
if (arguments.length > 1) {
  p__22884 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return patch__delegate.call(this,url,p__22884);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__22889){
var url = cljs.core.first(arglist__22889);
var p__22884 = cljs.core.rest(arglist__22889);
return patch__delegate(url,p__22884);
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
var post__delegate = function (url,p__22890){
var vec__22893 = p__22890;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22893,(0),null);
var G__22894 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$109,cljs.core.constant$keyword$106,cljs.core.constant$keyword$110,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22894) : cljs_http.client.request.call(null,G__22894));
};
var post = function (url,var_args){
var p__22890 = null;
if (arguments.length > 1) {
  p__22890 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return post__delegate.call(this,url,p__22890);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__22895){
var url = cljs.core.first(arglist__22895);
var p__22890 = cljs.core.rest(arglist__22895);
return post__delegate(url,p__22890);
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
var put__delegate = function (url,p__22896){
var vec__22899 = p__22896;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22899,(0),null);
var G__22900 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$109,cljs.core.constant$keyword$107,cljs.core.constant$keyword$110,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22900) : cljs_http.client.request.call(null,G__22900));
};
var put = function (url,var_args){
var p__22896 = null;
if (arguments.length > 1) {
  p__22896 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return put__delegate.call(this,url,p__22896);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__22901){
var url = cljs.core.first(arglist__22901);
var p__22896 = cljs.core.rest(arglist__22901);
return put__delegate(url,p__22896);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;
