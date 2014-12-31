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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__22955_SHARP_,p2__22954_SHARP_){
var vec__22957 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__22954_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22957,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22957,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22955_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
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
var uri = (function (){var G__22959 = url;
return goog.Uri.parse(G__22959);
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
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22960_SHARP_){
return cljs_http.client.encode_val(k,p1__22960_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__22961){
var vec__22963 = p__22961;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22963,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22963,(1),null);
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
return (function (p1__22964_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__22964_SHARP_)].join('');
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
var G__22967 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$87),cljs.core.constant$keyword$78,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,"content-type"], null),"application/edn");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22967) : client.call(null,G__22967));
} else {
var G__22968 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22968) : client.call(null,G__22968));
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__22969_SHARP_){
return cljs_http.client.decode_body(p1__22969_SHARP_,cljs.reader.read_string,"application/edn",cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22971 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22971) : client.call(null,G__22971));
})()], null));
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__22972){
var vec__22976 = p__22972;
var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22976,(0),null);
return ((function (vec__22976,accept){
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
var G__22977 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,"accept"], null),accept__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22977) : client.call(null,G__22977));
} else {
var G__22978 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22978) : client.call(null,G__22978));
}
});
;})(vec__22976,accept))
};
var wrap_accept = function (client,var_args){
var p__22972 = null;
if (arguments.length > 1) {
  p__22972 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return wrap_accept__delegate.call(this,client,p__22972);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__22979){
var client = cljs.core.first(arglist__22979);
var p__22972 = cljs.core.rest(arglist__22979);
return wrap_accept__delegate(client,p__22972);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__22980){
var vec__22984 = p__22980;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22984,(0),null);
return ((function (vec__22984,content_type){
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
var G__22985 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,"content-type"], null),content_type__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22985) : client.call(null,G__22985));
} else {
var G__22986 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22986) : client.call(null,G__22986));
}
});
;})(vec__22984,content_type))
};
var wrap_content_type = function (client,var_args){
var p__22980 = null;
if (arguments.length > 1) {
  p__22980 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return wrap_content_type__delegate.call(this,client,p__22980);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__22987){
var client = cljs.core.first(arglist__22987);
var p__22980 = cljs.core.rest(arglist__22987);
return wrap_content_type__delegate(client,p__22980);
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
var map__22991 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$96.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__22991__$1 = ((cljs.core.seq_QMARK_(map__22991))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22991):map__22991);
var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22991__$1,cljs.core.constant$keyword$91);
var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22991__$1,cljs.core.constant$keyword$90);
var G__22992 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$95),cljs.core.constant$keyword$78,cljs_http.util.transit_encode(params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,"content-type"], null),"application/transit+json");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22992) : client.call(null,G__22992));
} else {
var G__22993 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22993) : client.call(null,G__22993));
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){
return (function (request){
var map__22998 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$96.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__22998__$1 = ((cljs.core.seq_QMARK_(map__22998))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22998):map__22998);
var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22998__$1,cljs.core.constant$keyword$93);
var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22998__$1,cljs.core.constant$keyword$92);
var transit_decode = ((function (map__22998,map__22998__$1,decoding_opts,decoding){
return (function (p1__22994_SHARP_){
return cljs_http.util.transit_decode(p1__22994_SHARP_,decoding,decoding_opts);
});})(map__22998,map__22998__$1,decoding_opts,decoding))
;
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(((function (map__22998,map__22998__$1,decoding_opts,decoding,transit_decode){
return (function (p1__22995_SHARP_){
return cljs_http.client.decode_body(p1__22995_SHARP_,transit_decode,"application/transit+json",cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(request));
});})(map__22998,map__22998__$1,decoding_opts,decoding,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22999 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22999) : client.call(null,G__22999));
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
var G__23002 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$97),cljs.core.constant$keyword$78,cljs_http.util.json_encode(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,"content-type"], null),"application/json");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23002) : client.call(null,G__23002));
} else {
var G__23003 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23003) : client.call(null,G__23003));
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__23004_SHARP_){
return cljs_http.client.decode_body(p1__23004_SHARP_,cljs_http.util.json_decode,"application/json",cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23006 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23006) : client.call(null,G__23006));
})()], null));
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){
return (function (p__23011){
var map__23012 = p__23011;
var map__23012__$1 = ((cljs.core.seq_QMARK_(map__23012))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23012):map__23012);
var req = map__23012__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23012__$1,cljs.core.constant$keyword$49);
if(cljs.core.truth_(query_params)){
var G__23013 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$49),cljs.core.constant$keyword$57,cljs_http.client.generate_query_string(query_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23013) : client.call(null,G__23013));
} else {
var G__23014 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23014) : client.call(null,G__23014));
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){
return (function (p__23019){
var map__23020 = p__23019;
var map__23020__$1 = ((cljs.core.seq_QMARK_(map__23020))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23020):map__23020);
var request = map__23020__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23020__$1,cljs.core.constant$keyword$80);
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23020__$1,cljs.core.constant$keyword$98);
if(cljs.core.truth_((function (){var and__3618__auto__ = form_params;
if(cljs.core.truth_(and__3618__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$99,null,cljs.core.constant$keyword$100,null,cljs.core.constant$keyword$101,null,cljs.core.constant$keyword$102,null], null), null).call(null,request_method);
} else {
return and__3618__auto__;
}
})())){
var G__23021 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$98),cljs.core.constant$keyword$78,cljs_http.client.generate_query_string(form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,"content-type"], null),"application/x-www-form-urlencoded");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23021) : client.call(null,G__23021));
} else {
var G__23022 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23022) : client.call(null,G__23022));
}
});
});
cljs_http.client.generate_form_data = (function generate_form_data(params){
var form_data = (new FormData());
var seq__23029_23035 = cljs.core.seq(params);
var chunk__23030_23036 = null;
var count__23031_23037 = (0);
var i__23032_23038 = (0);
while(true){
if((i__23032_23038 < count__23031_23037)){
var vec__23033_23039 = chunk__23030_23036.cljs$core$IIndexed$_nth$arity$2(null,i__23032_23038);
var k_23040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23033_23039,(0),null);
var v_23041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23033_23039,(1),null);
form_data.append(cljs.core.name(k_23040),v_23041);

var G__23042 = seq__23029_23035;
var G__23043 = chunk__23030_23036;
var G__23044 = count__23031_23037;
var G__23045 = (i__23032_23038 + (1));
seq__23029_23035 = G__23042;
chunk__23030_23036 = G__23043;
count__23031_23037 = G__23044;
i__23032_23038 = G__23045;
continue;
} else {
var temp__4126__auto___23046 = cljs.core.seq(seq__23029_23035);
if(temp__4126__auto___23046){
var seq__23029_23047__$1 = temp__4126__auto___23046;
if(cljs.core.chunked_seq_QMARK_(seq__23029_23047__$1)){
var c__4417__auto___23048 = cljs.core.chunk_first(seq__23029_23047__$1);
var G__23049 = cljs.core.chunk_rest(seq__23029_23047__$1);
var G__23050 = c__4417__auto___23048;
var G__23051 = cljs.core.count(c__4417__auto___23048);
var G__23052 = (0);
seq__23029_23035 = G__23049;
chunk__23030_23036 = G__23050;
count__23031_23037 = G__23051;
i__23032_23038 = G__23052;
continue;
} else {
var vec__23034_23053 = cljs.core.first(seq__23029_23047__$1);
var k_23054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23034_23053,(0),null);
var v_23055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23034_23053,(1),null);
form_data.append(cljs.core.name(k_23054),v_23055);

var G__23056 = cljs.core.next(seq__23029_23047__$1);
var G__23057 = null;
var G__23058 = (0);
var G__23059 = (0);
seq__23029_23035 = G__23056;
chunk__23030_23036 = G__23057;
count__23031_23037 = G__23058;
i__23032_23038 = G__23059;
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
return (function (p__23064){
var map__23065 = p__23064;
var map__23065__$1 = ((cljs.core.seq_QMARK_(map__23065))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23065):map__23065);
var request = map__23065__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23065__$1,cljs.core.constant$keyword$80);
var multipart_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23065__$1,cljs.core.constant$keyword$103);
if(cljs.core.truth_((function (){var and__3618__auto__ = multipart_params;
if(cljs.core.truth_(and__3618__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$99,null,cljs.core.constant$keyword$100,null,cljs.core.constant$keyword$101,null,cljs.core.constant$keyword$102,null], null), null).call(null,request_method);
} else {
return and__3618__auto__;
}
})())){
var G__23066 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$103),cljs.core.constant$keyword$78,cljs_http.client.generate_form_data(multipart_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,"content-type"], null),"multipart/form-data");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23066) : client.call(null,G__23066));
} else {
var G__23067 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23067) : client.call(null,G__23067));
}
});
});
cljs_http.client.wrap_method = (function wrap_method(client){
return (function (req){
var temp__4124__auto__ = cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4124__auto__)){
var m = temp__4124__auto__;
var G__23070 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$104),cljs.core.constant$keyword$80,m);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23070) : client.call(null,G__23070));
} else {
var G__23071 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23071) : client.call(null,G__23071));
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){
return (function (p1__23072_SHARP_){
var G__23074 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23072_SHARP_,cljs.core.constant$keyword$53,server_name);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23074) : client.call(null,G__23074));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){
return (function (p__23080){
var map__23081 = p__23080;
var map__23081__$1 = ((cljs.core.seq_QMARK_(map__23081))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23081):map__23081);
var req = map__23081__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23081__$1,cljs.core.constant$keyword$49);
var temp__4124__auto__ = cljs_http.client.parse_url(cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4124__auto__)){
var spec = temp__4124__auto__;
var G__23082 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),cljs.core.constant$keyword$105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$49], null),((function (spec,temp__4124__auto__,map__23081,map__23081__$1,req,query_params){
return (function (p1__23075_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__23075_SHARP_,query_params], 0));
});})(spec,temp__4124__auto__,map__23081,map__23081__$1,req,query_params))
);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23082) : client.call(null,G__23082));
} else {
var G__23083 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23083) : client.call(null,G__23083));
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__23084){
var vec__23088 = p__23084;
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23088,(0),null);
return ((function (vec__23088,credentials){
return (function (req){
var credentials__$1 = (function (){var or__3630__auto__ = cljs.core.constant$keyword$106.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_(credentials__$1))){
var G__23089 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23089) : client.call(null,G__23089));
} else {
var G__23090 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23090) : client.call(null,G__23090));
}
});
;})(vec__23088,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__23084 = null;
if (arguments.length > 1) {
  p__23084 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return wrap_basic_auth__delegate.call(this,client,p__23084);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__23091){
var client = cljs.core.first(arglist__23091);
var p__23084 = cljs.core.rest(arglist__23091);
return wrap_basic_auth__delegate(client,p__23084);
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
var G__23094 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$107),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join(''));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23094) : client.call(null,G__23094));
} else {
var G__23095 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23095) : client.call(null,G__23095));
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
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((function (){var G__23098 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23098) : client.call(null,G__23098));
})(),custom_channel);
} else {
var G__23099 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23099) : client.call(null,G__23099));
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
var delete$__delegate = function (url,p__23100){
var vec__23103 = p__23100;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23103,(0),null);
var G__23104 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$104,cljs.core.constant$keyword$100,cljs.core.constant$keyword$105,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23104) : cljs_http.client.request.call(null,G__23104));
};
var delete$ = function (url,var_args){
var p__23100 = null;
if (arguments.length > 1) {
  p__23100 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return delete$__delegate.call(this,url,p__23100);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__23105){
var url = cljs.core.first(arglist__23105);
var p__23100 = cljs.core.rest(arglist__23105);
return delete$__delegate(url,p__23100);
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
var get__delegate = function (url,p__23106){
var vec__23109 = p__23106;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23109,(0),null);
var G__23110 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$104,cljs.core.constant$keyword$81,cljs.core.constant$keyword$105,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23110) : cljs_http.client.request.call(null,G__23110));
};
var get = function (url,var_args){
var p__23106 = null;
if (arguments.length > 1) {
  p__23106 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return get__delegate.call(this,url,p__23106);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__23111){
var url = cljs.core.first(arglist__23111);
var p__23106 = cljs.core.rest(arglist__23111);
return get__delegate(url,p__23106);
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
var head__delegate = function (url,p__23112){
var vec__23115 = p__23112;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23115,(0),null);
var G__23116 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$104,cljs.core.constant$keyword$86,cljs.core.constant$keyword$105,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23116) : cljs_http.client.request.call(null,G__23116));
};
var head = function (url,var_args){
var p__23112 = null;
if (arguments.length > 1) {
  p__23112 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return head__delegate.call(this,url,p__23112);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__23117){
var url = cljs.core.first(arglist__23117);
var p__23112 = cljs.core.rest(arglist__23117);
return head__delegate(url,p__23112);
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
var move__delegate = function (url,p__23118){
var vec__23121 = p__23118;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23121,(0),null);
var G__23122 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$104,cljs.core.constant$keyword$109,cljs.core.constant$keyword$105,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23122) : cljs_http.client.request.call(null,G__23122));
};
var move = function (url,var_args){
var p__23118 = null;
if (arguments.length > 1) {
  p__23118 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return move__delegate.call(this,url,p__23118);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__23123){
var url = cljs.core.first(arglist__23123);
var p__23118 = cljs.core.rest(arglist__23123);
return move__delegate(url,p__23118);
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
var options__delegate = function (url,p__23124){
var vec__23127 = p__23124;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23127,(0),null);
var G__23128 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$104,cljs.core.constant$keyword$110,cljs.core.constant$keyword$105,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23128) : cljs_http.client.request.call(null,G__23128));
};
var options = function (url,var_args){
var p__23124 = null;
if (arguments.length > 1) {
  p__23124 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return options__delegate.call(this,url,p__23124);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__23129){
var url = cljs.core.first(arglist__23129);
var p__23124 = cljs.core.rest(arglist__23129);
return options__delegate(url,p__23124);
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
var patch__delegate = function (url,p__23130){
var vec__23133 = p__23130;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23133,(0),null);
var G__23134 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$104,cljs.core.constant$keyword$99,cljs.core.constant$keyword$105,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23134) : cljs_http.client.request.call(null,G__23134));
};
var patch = function (url,var_args){
var p__23130 = null;
if (arguments.length > 1) {
  p__23130 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return patch__delegate.call(this,url,p__23130);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__23135){
var url = cljs.core.first(arglist__23135);
var p__23130 = cljs.core.rest(arglist__23135);
return patch__delegate(url,p__23130);
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
var post__delegate = function (url,p__23136){
var vec__23139 = p__23136;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23139,(0),null);
var G__23140 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$104,cljs.core.constant$keyword$101,cljs.core.constant$keyword$105,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23140) : cljs_http.client.request.call(null,G__23140));
};
var post = function (url,var_args){
var p__23136 = null;
if (arguments.length > 1) {
  p__23136 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return post__delegate.call(this,url,p__23136);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__23141){
var url = cljs.core.first(arglist__23141);
var p__23136 = cljs.core.rest(arglist__23141);
return post__delegate(url,p__23136);
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
var put__delegate = function (url,p__23142){
var vec__23145 = p__23142;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23145,(0),null);
var G__23146 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$104,cljs.core.constant$keyword$102,cljs.core.constant$keyword$105,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23146) : cljs_http.client.request.call(null,G__23146));
};
var put = function (url,var_args){
var p__23142 = null;
if (arguments.length > 1) {
  p__23142 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return put__delegate.call(this,url,p__23142);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__23147){
var url = cljs.core.first(arglist__23147);
var p__23142 = cljs.core.rest(arglist__23147);
return put__delegate(url,p__23142);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;
