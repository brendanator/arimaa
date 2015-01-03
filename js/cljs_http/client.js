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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__23145_SHARP_,p2__23144_SHARP_){
var vec__23147 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__23144_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23147,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23147,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23145_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
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
var uri = (function (){var G__23149 = url;
return goog.Uri.parse(G__23149);
})();
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$76,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),cljs.core.constant$keyword$79,uri.getDomain(),cljs.core.constant$keyword$80,cljs_http.client.if_pos(uri.getPort()),cljs.core.constant$keyword$81,uri.getPath(),cljs.core.constant$keyword$83,((cljs.core.not(query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),cljs.core.constant$keyword$75,((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params([cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode(cljs.core.name(k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode([cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23150_SHARP_){
return cljs_http.client.encode_val(k,p1__23150_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__23151){
var vec__23153 = p__23151;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23153,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23153,(1),null);
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
return (function (p1__23154_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__23154_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var and__3618__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$111,request_method);
if(and__3618__auto__){
return cljs.core.re_find(cljs.core.re_pattern([cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special(content_type))].join('')),[cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__3618__auto__;
}
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$103], null),decode_fn);
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
var temp__4124__auto__ = cljs.core.constant$keyword$112.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
var G__23157 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$112),cljs.core.constant$keyword$103,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$104,"content-type"], null),"application/edn");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23157) : client.call(null,G__23157));
} else {
var G__23158 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23158) : client.call(null,G__23158));
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__23159_SHARP_){
return cljs_http.client.decode_body(p1__23159_SHARP_,cljs.reader.read_string,"application/edn",cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23161 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23161) : client.call(null,G__23161));
})()], null));
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__23162){
var vec__23166 = p__23162;
var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23166,(0),null);
return ((function (vec__23166,accept){
return (function (request){
var temp__4124__auto__ = (function (){var or__3630__auto__ = cljs.core.constant$keyword$113.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var accept__$1 = temp__4124__auto__;
var G__23167 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$104,"accept"], null),accept__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23167) : client.call(null,G__23167));
} else {
var G__23168 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23168) : client.call(null,G__23168));
}
});
;})(vec__23166,accept))
};
var wrap_accept = function (client,var_args){
var p__23162 = null;
if (arguments.length > 1) {
  p__23162 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return wrap_accept__delegate.call(this,client,p__23162);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__23169){
var client = cljs.core.first(arglist__23169);
var p__23162 = cljs.core.rest(arglist__23169);
return wrap_accept__delegate(client,p__23162);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__23170){
var vec__23174 = p__23170;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23174,(0),null);
return ((function (vec__23174,content_type){
return (function (request){
var temp__4124__auto__ = (function (){var or__3630__auto__ = cljs.core.constant$keyword$114.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var content_type__$1 = temp__4124__auto__;
var G__23175 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$104,"content-type"], null),content_type__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23175) : client.call(null,G__23175));
} else {
var G__23176 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23176) : client.call(null,G__23176));
}
});
;})(vec__23174,content_type))
};
var wrap_content_type = function (client,var_args){
var p__23170 = null;
if (arguments.length > 1) {
  p__23170 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return wrap_content_type__delegate.call(this,client,p__23170);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__23177){
var client = cljs.core.first(arglist__23177);
var p__23170 = cljs.core.rest(arglist__23177);
return wrap_content_type__delegate(client,p__23170);
});
wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = wrap_content_type__delegate;
return wrap_content_type;
})()
;
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$115,cljs.core.constant$keyword$119,cljs.core.constant$keyword$116,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$117,cljs.core.constant$keyword$119,cljs.core.constant$keyword$118,cljs.core.PersistentArrayMap.EMPTY], null);
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
var temp__4124__auto__ = cljs.core.constant$keyword$120.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
var map__23181 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$121.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__23181__$1 = ((cljs.core.seq_QMARK_(map__23181))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23181):map__23181);
var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23181__$1,cljs.core.constant$keyword$116);
var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23181__$1,cljs.core.constant$keyword$115);
var G__23182 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$120),cljs.core.constant$keyword$103,cljs_http.util.transit_encode(params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$104,"content-type"], null),"application/transit+json");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23182) : client.call(null,G__23182));
} else {
var G__23183 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23183) : client.call(null,G__23183));
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){
return (function (request){
var map__23188 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$121.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__23188__$1 = ((cljs.core.seq_QMARK_(map__23188))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23188):map__23188);
var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23188__$1,cljs.core.constant$keyword$118);
var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23188__$1,cljs.core.constant$keyword$117);
var transit_decode = ((function (map__23188,map__23188__$1,decoding_opts,decoding){
return (function (p1__23184_SHARP_){
return cljs_http.util.transit_decode(p1__23184_SHARP_,decoding,decoding_opts);
});})(map__23188,map__23188__$1,decoding_opts,decoding))
;
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(((function (map__23188,map__23188__$1,decoding_opts,decoding,transit_decode){
return (function (p1__23185_SHARP_){
return cljs_http.client.decode_body(p1__23185_SHARP_,transit_decode,"application/transit+json",cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(request));
});})(map__23188,map__23188__$1,decoding_opts,decoding,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23189 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23189) : client.call(null,G__23189));
})()], null));
});
});
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){
return (function (request){
var temp__4124__auto__ = cljs.core.constant$keyword$122.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
var G__23192 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$122),cljs.core.constant$keyword$103,cljs_http.util.json_encode(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$104,"content-type"], null),"application/json");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23192) : client.call(null,G__23192));
} else {
var G__23193 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23193) : client.call(null,G__23193));
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__23194_SHARP_){
return cljs_http.client.decode_body(p1__23194_SHARP_,cljs_http.util.json_decode,"application/json",cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23196 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23196) : client.call(null,G__23196));
})()], null));
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){
return (function (p__23201){
var map__23202 = p__23201;
var map__23202__$1 = ((cljs.core.seq_QMARK_(map__23202))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23202):map__23202);
var req = map__23202__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23202__$1,cljs.core.constant$keyword$75);
if(cljs.core.truth_(query_params)){
var G__23203 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$75),cljs.core.constant$keyword$83,cljs_http.client.generate_query_string(query_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23203) : client.call(null,G__23203));
} else {
var G__23204 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23204) : client.call(null,G__23204));
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){
return (function (p__23209){
var map__23210 = p__23209;
var map__23210__$1 = ((cljs.core.seq_QMARK_(map__23210))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23210):map__23210);
var request = map__23210__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23210__$1,cljs.core.constant$keyword$105);
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23210__$1,cljs.core.constant$keyword$123);
if(cljs.core.truth_((function (){var and__3618__auto__ = form_params;
if(cljs.core.truth_(and__3618__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$124,null,cljs.core.constant$keyword$125,null,cljs.core.constant$keyword$126,null,cljs.core.constant$keyword$127,null], null), null).call(null,request_method);
} else {
return and__3618__auto__;
}
})())){
var G__23211 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$123),cljs.core.constant$keyword$103,cljs_http.client.generate_query_string(form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$104,"content-type"], null),"application/x-www-form-urlencoded");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23211) : client.call(null,G__23211));
} else {
var G__23212 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23212) : client.call(null,G__23212));
}
});
});
cljs_http.client.generate_form_data = (function generate_form_data(params){
var form_data = (new FormData());
var seq__23219_23225 = cljs.core.seq(params);
var chunk__23220_23226 = null;
var count__23221_23227 = (0);
var i__23222_23228 = (0);
while(true){
if((i__23222_23228 < count__23221_23227)){
var vec__23223_23229 = chunk__23220_23226.cljs$core$IIndexed$_nth$arity$2(null,i__23222_23228);
var k_23230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23223_23229,(0),null);
var v_23231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23223_23229,(1),null);
form_data.append(cljs.core.name(k_23230),v_23231);

var G__23232 = seq__23219_23225;
var G__23233 = chunk__23220_23226;
var G__23234 = count__23221_23227;
var G__23235 = (i__23222_23228 + (1));
seq__23219_23225 = G__23232;
chunk__23220_23226 = G__23233;
count__23221_23227 = G__23234;
i__23222_23228 = G__23235;
continue;
} else {
var temp__4126__auto___23236 = cljs.core.seq(seq__23219_23225);
if(temp__4126__auto___23236){
var seq__23219_23237__$1 = temp__4126__auto___23236;
if(cljs.core.chunked_seq_QMARK_(seq__23219_23237__$1)){
var c__4417__auto___23238 = cljs.core.chunk_first(seq__23219_23237__$1);
var G__23239 = cljs.core.chunk_rest(seq__23219_23237__$1);
var G__23240 = c__4417__auto___23238;
var G__23241 = cljs.core.count(c__4417__auto___23238);
var G__23242 = (0);
seq__23219_23225 = G__23239;
chunk__23220_23226 = G__23240;
count__23221_23227 = G__23241;
i__23222_23228 = G__23242;
continue;
} else {
var vec__23224_23243 = cljs.core.first(seq__23219_23237__$1);
var k_23244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23224_23243,(0),null);
var v_23245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23224_23243,(1),null);
form_data.append(cljs.core.name(k_23244),v_23245);

var G__23246 = cljs.core.next(seq__23219_23237__$1);
var G__23247 = null;
var G__23248 = (0);
var G__23249 = (0);
seq__23219_23225 = G__23246;
chunk__23220_23226 = G__23247;
count__23221_23227 = G__23248;
i__23222_23228 = G__23249;
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
return (function (p__23254){
var map__23255 = p__23254;
var map__23255__$1 = ((cljs.core.seq_QMARK_(map__23255))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23255):map__23255);
var request = map__23255__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23255__$1,cljs.core.constant$keyword$105);
var multipart_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23255__$1,cljs.core.constant$keyword$128);
if(cljs.core.truth_((function (){var and__3618__auto__ = multipart_params;
if(cljs.core.truth_(and__3618__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$124,null,cljs.core.constant$keyword$125,null,cljs.core.constant$keyword$126,null,cljs.core.constant$keyword$127,null], null), null).call(null,request_method);
} else {
return and__3618__auto__;
}
})())){
var G__23256 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$128),cljs.core.constant$keyword$103,cljs_http.client.generate_form_data(multipart_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$104,"content-type"], null),"multipart/form-data");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23256) : client.call(null,G__23256));
} else {
var G__23257 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23257) : client.call(null,G__23257));
}
});
});
cljs_http.client.wrap_method = (function wrap_method(client){
return (function (req){
var temp__4124__auto__ = cljs.core.constant$keyword$129.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4124__auto__)){
var m = temp__4124__auto__;
var G__23260 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$129),cljs.core.constant$keyword$105,m);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23260) : client.call(null,G__23260));
} else {
var G__23261 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23261) : client.call(null,G__23261));
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){
return (function (p1__23262_SHARP_){
var G__23264 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23262_SHARP_,cljs.core.constant$keyword$79,server_name);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23264) : client.call(null,G__23264));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){
return (function (p__23270){
var map__23271 = p__23270;
var map__23271__$1 = ((cljs.core.seq_QMARK_(map__23271))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23271):map__23271);
var req = map__23271__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23271__$1,cljs.core.constant$keyword$75);
var temp__4124__auto__ = cljs_http.client.parse_url(cljs.core.constant$keyword$130.cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4124__auto__)){
var spec = temp__4124__auto__;
var G__23272 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),cljs.core.constant$keyword$130),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$75], null),((function (spec,temp__4124__auto__,map__23271,map__23271__$1,req,query_params){
return (function (p1__23265_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__23265_SHARP_,query_params], 0));
});})(spec,temp__4124__auto__,map__23271,map__23271__$1,req,query_params))
);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23272) : client.call(null,G__23272));
} else {
var G__23273 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23273) : client.call(null,G__23273));
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__23274){
var vec__23278 = p__23274;
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23278,(0),null);
return ((function (vec__23278,credentials){
return (function (req){
var credentials__$1 = (function (){var or__3630__auto__ = cljs.core.constant$keyword$131.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_(credentials__$1))){
var G__23279 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$131),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$104,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23279) : client.call(null,G__23279));
} else {
var G__23280 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23280) : client.call(null,G__23280));
}
});
;})(vec__23278,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__23274 = null;
if (arguments.length > 1) {
  p__23274 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return wrap_basic_auth__delegate.call(this,client,p__23274);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__23281){
var client = cljs.core.first(arglist__23281);
var p__23274 = cljs.core.rest(arglist__23281);
return wrap_basic_auth__delegate(client,p__23274);
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
var temp__4124__auto__ = cljs.core.constant$keyword$132.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4124__auto__)){
var oauth_token = temp__4124__auto__;
var G__23284 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$132),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$104,"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join(''));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23284) : client.call(null,G__23284));
} else {
var G__23285 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23285) : client.call(null,G__23285));
}
});
});
/**
* Pipe the response-channel into the request-map's
* custom channel (e.g. to enable transducers)
*/
cljs_http.client.wrap_channel_from_request_map = (function wrap_channel_from_request_map(client){
return (function (request){
var temp__4124__auto__ = cljs.core.constant$keyword$133.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var custom_channel = temp__4124__auto__;
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((function (){var G__23288 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23288) : client.call(null,G__23288));
})(),custom_channel);
} else {
var G__23289 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23289) : client.call(null,G__23289));
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
var delete$__delegate = function (url,p__23290){
var vec__23293 = p__23290;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23293,(0),null);
var G__23294 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$129,cljs.core.constant$keyword$125,cljs.core.constant$keyword$130,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23294) : cljs_http.client.request.call(null,G__23294));
};
var delete$ = function (url,var_args){
var p__23290 = null;
if (arguments.length > 1) {
  p__23290 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return delete$__delegate.call(this,url,p__23290);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__23295){
var url = cljs.core.first(arglist__23295);
var p__23290 = cljs.core.rest(arglist__23295);
return delete$__delegate(url,p__23290);
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
var get__delegate = function (url,p__23296){
var vec__23299 = p__23296;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23299,(0),null);
var G__23300 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$129,cljs.core.constant$keyword$106,cljs.core.constant$keyword$130,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23300) : cljs_http.client.request.call(null,G__23300));
};
var get = function (url,var_args){
var p__23296 = null;
if (arguments.length > 1) {
  p__23296 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return get__delegate.call(this,url,p__23296);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__23301){
var url = cljs.core.first(arglist__23301);
var p__23296 = cljs.core.rest(arglist__23301);
return get__delegate(url,p__23296);
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
var head__delegate = function (url,p__23302){
var vec__23305 = p__23302;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23305,(0),null);
var G__23306 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$129,cljs.core.constant$keyword$111,cljs.core.constant$keyword$130,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23306) : cljs_http.client.request.call(null,G__23306));
};
var head = function (url,var_args){
var p__23302 = null;
if (arguments.length > 1) {
  p__23302 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return head__delegate.call(this,url,p__23302);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__23307){
var url = cljs.core.first(arglist__23307);
var p__23302 = cljs.core.rest(arglist__23307);
return head__delegate(url,p__23302);
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
var move__delegate = function (url,p__23308){
var vec__23311 = p__23308;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23311,(0),null);
var G__23312 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$129,cljs.core.constant$keyword$134,cljs.core.constant$keyword$130,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23312) : cljs_http.client.request.call(null,G__23312));
};
var move = function (url,var_args){
var p__23308 = null;
if (arguments.length > 1) {
  p__23308 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return move__delegate.call(this,url,p__23308);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__23313){
var url = cljs.core.first(arglist__23313);
var p__23308 = cljs.core.rest(arglist__23313);
return move__delegate(url,p__23308);
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
var options__delegate = function (url,p__23314){
var vec__23317 = p__23314;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23317,(0),null);
var G__23318 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$129,cljs.core.constant$keyword$135,cljs.core.constant$keyword$130,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23318) : cljs_http.client.request.call(null,G__23318));
};
var options = function (url,var_args){
var p__23314 = null;
if (arguments.length > 1) {
  p__23314 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return options__delegate.call(this,url,p__23314);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__23319){
var url = cljs.core.first(arglist__23319);
var p__23314 = cljs.core.rest(arglist__23319);
return options__delegate(url,p__23314);
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
var patch__delegate = function (url,p__23320){
var vec__23323 = p__23320;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23323,(0),null);
var G__23324 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$129,cljs.core.constant$keyword$124,cljs.core.constant$keyword$130,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23324) : cljs_http.client.request.call(null,G__23324));
};
var patch = function (url,var_args){
var p__23320 = null;
if (arguments.length > 1) {
  p__23320 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return patch__delegate.call(this,url,p__23320);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__23325){
var url = cljs.core.first(arglist__23325);
var p__23320 = cljs.core.rest(arglist__23325);
return patch__delegate(url,p__23320);
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
var post__delegate = function (url,p__23326){
var vec__23329 = p__23326;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23329,(0),null);
var G__23330 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$129,cljs.core.constant$keyword$126,cljs.core.constant$keyword$130,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23330) : cljs_http.client.request.call(null,G__23330));
};
var post = function (url,var_args){
var p__23326 = null;
if (arguments.length > 1) {
  p__23326 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return post__delegate.call(this,url,p__23326);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__23331){
var url = cljs.core.first(arglist__23331);
var p__23326 = cljs.core.rest(arglist__23331);
return post__delegate(url,p__23326);
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
var put__delegate = function (url,p__23332){
var vec__23335 = p__23332;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23335,(0),null);
var G__23336 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$129,cljs.core.constant$keyword$127,cljs.core.constant$keyword$130,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23336) : cljs_http.client.request.call(null,G__23336));
};
var put = function (url,var_args){
var p__23332 = null;
if (arguments.length > 1) {
  p__23332 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return put__delegate.call(this,url,p__23332);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__23337){
var url = cljs.core.first(arglist__23337);
var p__23332 = cljs.core.rest(arglist__23337);
return put__delegate(url,p__23332);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;
