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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__26150_SHARP_,p2__26149_SHARP_){
var vec__26152 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__26149_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26152,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26152,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26150_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
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
var uri = (function (){var G__26154 = url;
return goog.Uri.parse(G__26154);
})();
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$67,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),cljs.core.constant$keyword$70,uri.getDomain(),cljs.core.constant$keyword$71,cljs_http.client.if_pos(uri.getPort()),cljs.core.constant$keyword$72,uri.getPath(),cljs.core.constant$keyword$74,((cljs.core.not(query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),cljs.core.constant$keyword$66,((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params([cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode(cljs.core.name(k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode([cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26155_SHARP_){
return cljs_http.client.encode_val(k,p1__26155_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__26156){
var vec__26158 = p__26156;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26158,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26158,(1),null);
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
return (function (p1__26159_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__26159_SHARP_)].join('');
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
var G__26162 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$87),cljs.core.constant$keyword$78,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,"content-type"], null),"application/edn");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26162) : client.call(null,G__26162));
} else {
var G__26163 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26163) : client.call(null,G__26163));
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__26164_SHARP_){
return cljs_http.client.decode_body(p1__26164_SHARP_,cljs.reader.read_string,"application/edn",cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__26166 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26166) : client.call(null,G__26166));
})()], null));
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__26167){
var vec__26171 = p__26167;
var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26171,(0),null);
return ((function (vec__26171,accept){
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
var G__26172 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,"accept"], null),accept__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26172) : client.call(null,G__26172));
} else {
var G__26173 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26173) : client.call(null,G__26173));
}
});
;})(vec__26171,accept))
};
var wrap_accept = function (client,var_args){
var p__26167 = null;
if (arguments.length > 1) {
  p__26167 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return wrap_accept__delegate.call(this,client,p__26167);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__26174){
var client = cljs.core.first(arglist__26174);
var p__26167 = cljs.core.rest(arglist__26174);
return wrap_accept__delegate(client,p__26167);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__26175){
var vec__26179 = p__26175;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26179,(0),null);
return ((function (vec__26179,content_type){
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
var G__26180 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,"content-type"], null),content_type__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26180) : client.call(null,G__26180));
} else {
var G__26181 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26181) : client.call(null,G__26181));
}
});
;})(vec__26179,content_type))
};
var wrap_content_type = function (client,var_args){
var p__26175 = null;
if (arguments.length > 1) {
  p__26175 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return wrap_content_type__delegate.call(this,client,p__26175);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__26182){
var client = cljs.core.first(arglist__26182);
var p__26175 = cljs.core.rest(arglist__26182);
return wrap_content_type__delegate(client,p__26175);
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
var map__26186 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$96.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__26186__$1 = ((cljs.core.seq_QMARK_(map__26186))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26186):map__26186);
var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26186__$1,cljs.core.constant$keyword$91);
var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26186__$1,cljs.core.constant$keyword$90);
var G__26187 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$95),cljs.core.constant$keyword$78,cljs_http.util.transit_encode(params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,"content-type"], null),"application/transit+json");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26187) : client.call(null,G__26187));
} else {
var G__26188 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26188) : client.call(null,G__26188));
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){
return (function (request){
var map__26193 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$96.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__26193__$1 = ((cljs.core.seq_QMARK_(map__26193))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26193):map__26193);
var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26193__$1,cljs.core.constant$keyword$93);
var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26193__$1,cljs.core.constant$keyword$92);
var transit_decode = ((function (map__26193,map__26193__$1,decoding_opts,decoding){
return (function (p1__26189_SHARP_){
return cljs_http.util.transit_decode(p1__26189_SHARP_,decoding,decoding_opts);
});})(map__26193,map__26193__$1,decoding_opts,decoding))
;
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(((function (map__26193,map__26193__$1,decoding_opts,decoding,transit_decode){
return (function (p1__26190_SHARP_){
return cljs_http.client.decode_body(p1__26190_SHARP_,transit_decode,"application/transit+json",cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(request));
});})(map__26193,map__26193__$1,decoding_opts,decoding,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__26194 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26194) : client.call(null,G__26194));
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
var G__26197 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$97),cljs.core.constant$keyword$78,cljs_http.util.json_encode(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,"content-type"], null),"application/json");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26197) : client.call(null,G__26197));
} else {
var G__26198 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26198) : client.call(null,G__26198));
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__26199_SHARP_){
return cljs_http.client.decode_body(p1__26199_SHARP_,cljs_http.util.json_decode,"application/json",cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__26201 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26201) : client.call(null,G__26201));
})()], null));
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){
return (function (p__26206){
var map__26207 = p__26206;
var map__26207__$1 = ((cljs.core.seq_QMARK_(map__26207))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26207):map__26207);
var req = map__26207__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26207__$1,cljs.core.constant$keyword$66);
if(cljs.core.truth_(query_params)){
var G__26208 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$66),cljs.core.constant$keyword$74,cljs_http.client.generate_query_string(query_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26208) : client.call(null,G__26208));
} else {
var G__26209 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26209) : client.call(null,G__26209));
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){
return (function (p__26214){
var map__26215 = p__26214;
var map__26215__$1 = ((cljs.core.seq_QMARK_(map__26215))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26215):map__26215);
var request = map__26215__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26215__$1,cljs.core.constant$keyword$80);
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26215__$1,cljs.core.constant$keyword$98);
if(cljs.core.truth_((function (){var and__3618__auto__ = form_params;
if(cljs.core.truth_(and__3618__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$99,null,cljs.core.constant$keyword$100,null,cljs.core.constant$keyword$101,null,cljs.core.constant$keyword$102,null], null), null).call(null,request_method);
} else {
return and__3618__auto__;
}
})())){
var G__26216 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$98),cljs.core.constant$keyword$78,cljs_http.client.generate_query_string(form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,"content-type"], null),"application/x-www-form-urlencoded");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26216) : client.call(null,G__26216));
} else {
var G__26217 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26217) : client.call(null,G__26217));
}
});
});
cljs_http.client.generate_form_data = (function generate_form_data(params){
var form_data = (new FormData());
var seq__26224_26230 = cljs.core.seq(params);
var chunk__26225_26231 = null;
var count__26226_26232 = (0);
var i__26227_26233 = (0);
while(true){
if((i__26227_26233 < count__26226_26232)){
var vec__26228_26234 = chunk__26225_26231.cljs$core$IIndexed$_nth$arity$2(null,i__26227_26233);
var k_26235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26228_26234,(0),null);
var v_26236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26228_26234,(1),null);
form_data.append(cljs.core.name(k_26235),v_26236);

var G__26237 = seq__26224_26230;
var G__26238 = chunk__26225_26231;
var G__26239 = count__26226_26232;
var G__26240 = (i__26227_26233 + (1));
seq__26224_26230 = G__26237;
chunk__26225_26231 = G__26238;
count__26226_26232 = G__26239;
i__26227_26233 = G__26240;
continue;
} else {
var temp__4126__auto___26241 = cljs.core.seq(seq__26224_26230);
if(temp__4126__auto___26241){
var seq__26224_26242__$1 = temp__4126__auto___26241;
if(cljs.core.chunked_seq_QMARK_(seq__26224_26242__$1)){
var c__4417__auto___26243 = cljs.core.chunk_first(seq__26224_26242__$1);
var G__26244 = cljs.core.chunk_rest(seq__26224_26242__$1);
var G__26245 = c__4417__auto___26243;
var G__26246 = cljs.core.count(c__4417__auto___26243);
var G__26247 = (0);
seq__26224_26230 = G__26244;
chunk__26225_26231 = G__26245;
count__26226_26232 = G__26246;
i__26227_26233 = G__26247;
continue;
} else {
var vec__26229_26248 = cljs.core.first(seq__26224_26242__$1);
var k_26249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26229_26248,(0),null);
var v_26250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26229_26248,(1),null);
form_data.append(cljs.core.name(k_26249),v_26250);

var G__26251 = cljs.core.next(seq__26224_26242__$1);
var G__26252 = null;
var G__26253 = (0);
var G__26254 = (0);
seq__26224_26230 = G__26251;
chunk__26225_26231 = G__26252;
count__26226_26232 = G__26253;
i__26227_26233 = G__26254;
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
return (function (p__26259){
var map__26260 = p__26259;
var map__26260__$1 = ((cljs.core.seq_QMARK_(map__26260))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26260):map__26260);
var request = map__26260__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26260__$1,cljs.core.constant$keyword$80);
var multipart_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26260__$1,cljs.core.constant$keyword$103);
if(cljs.core.truth_((function (){var and__3618__auto__ = multipart_params;
if(cljs.core.truth_(and__3618__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$99,null,cljs.core.constant$keyword$100,null,cljs.core.constant$keyword$101,null,cljs.core.constant$keyword$102,null], null), null).call(null,request_method);
} else {
return and__3618__auto__;
}
})())){
var G__26261 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$103),cljs.core.constant$keyword$78,cljs_http.client.generate_form_data(multipart_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,"content-type"], null),"multipart/form-data");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26261) : client.call(null,G__26261));
} else {
var G__26262 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26262) : client.call(null,G__26262));
}
});
});
cljs_http.client.wrap_method = (function wrap_method(client){
return (function (req){
var temp__4124__auto__ = cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4124__auto__)){
var m = temp__4124__auto__;
var G__26265 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$104),cljs.core.constant$keyword$80,m);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26265) : client.call(null,G__26265));
} else {
var G__26266 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26266) : client.call(null,G__26266));
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){
return (function (p1__26267_SHARP_){
var G__26269 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26267_SHARP_,cljs.core.constant$keyword$70,server_name);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26269) : client.call(null,G__26269));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){
return (function (p__26275){
var map__26276 = p__26275;
var map__26276__$1 = ((cljs.core.seq_QMARK_(map__26276))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26276):map__26276);
var req = map__26276__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26276__$1,cljs.core.constant$keyword$66);
var temp__4124__auto__ = cljs_http.client.parse_url(cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4124__auto__)){
var spec = temp__4124__auto__;
var G__26277 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),cljs.core.constant$keyword$105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$66], null),((function (spec,temp__4124__auto__,map__26276,map__26276__$1,req,query_params){
return (function (p1__26270_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__26270_SHARP_,query_params], 0));
});})(spec,temp__4124__auto__,map__26276,map__26276__$1,req,query_params))
);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26277) : client.call(null,G__26277));
} else {
var G__26278 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26278) : client.call(null,G__26278));
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__26279){
var vec__26283 = p__26279;
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26283,(0),null);
return ((function (vec__26283,credentials){
return (function (req){
var credentials__$1 = (function (){var or__3630__auto__ = cljs.core.constant$keyword$106.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_(credentials__$1))){
var G__26284 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26284) : client.call(null,G__26284));
} else {
var G__26285 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26285) : client.call(null,G__26285));
}
});
;})(vec__26283,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__26279 = null;
if (arguments.length > 1) {
  p__26279 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return wrap_basic_auth__delegate.call(this,client,p__26279);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__26286){
var client = cljs.core.first(arglist__26286);
var p__26279 = cljs.core.rest(arglist__26286);
return wrap_basic_auth__delegate(client,p__26279);
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
var G__26289 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$107),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join(''));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26289) : client.call(null,G__26289));
} else {
var G__26290 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26290) : client.call(null,G__26290));
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
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((function (){var G__26293 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26293) : client.call(null,G__26293));
})(),custom_channel);
} else {
var G__26294 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26294) : client.call(null,G__26294));
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
var delete$__delegate = function (url,p__26295){
var vec__26298 = p__26295;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26298,(0),null);
var G__26299 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$104,cljs.core.constant$keyword$100,cljs.core.constant$keyword$105,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26299) : cljs_http.client.request.call(null,G__26299));
};
var delete$ = function (url,var_args){
var p__26295 = null;
if (arguments.length > 1) {
  p__26295 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return delete$__delegate.call(this,url,p__26295);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__26300){
var url = cljs.core.first(arglist__26300);
var p__26295 = cljs.core.rest(arglist__26300);
return delete$__delegate(url,p__26295);
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
var get__delegate = function (url,p__26301){
var vec__26304 = p__26301;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26304,(0),null);
var G__26305 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$104,cljs.core.constant$keyword$81,cljs.core.constant$keyword$105,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26305) : cljs_http.client.request.call(null,G__26305));
};
var get = function (url,var_args){
var p__26301 = null;
if (arguments.length > 1) {
  p__26301 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return get__delegate.call(this,url,p__26301);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__26306){
var url = cljs.core.first(arglist__26306);
var p__26301 = cljs.core.rest(arglist__26306);
return get__delegate(url,p__26301);
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
var head__delegate = function (url,p__26307){
var vec__26310 = p__26307;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26310,(0),null);
var G__26311 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$104,cljs.core.constant$keyword$86,cljs.core.constant$keyword$105,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26311) : cljs_http.client.request.call(null,G__26311));
};
var head = function (url,var_args){
var p__26307 = null;
if (arguments.length > 1) {
  p__26307 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return head__delegate.call(this,url,p__26307);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__26312){
var url = cljs.core.first(arglist__26312);
var p__26307 = cljs.core.rest(arglist__26312);
return head__delegate(url,p__26307);
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
var move__delegate = function (url,p__26313){
var vec__26316 = p__26313;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26316,(0),null);
var G__26317 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$104,cljs.core.constant$keyword$109,cljs.core.constant$keyword$105,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26317) : cljs_http.client.request.call(null,G__26317));
};
var move = function (url,var_args){
var p__26313 = null;
if (arguments.length > 1) {
  p__26313 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return move__delegate.call(this,url,p__26313);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__26318){
var url = cljs.core.first(arglist__26318);
var p__26313 = cljs.core.rest(arglist__26318);
return move__delegate(url,p__26313);
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
var options__delegate = function (url,p__26319){
var vec__26322 = p__26319;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26322,(0),null);
var G__26323 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$104,cljs.core.constant$keyword$110,cljs.core.constant$keyword$105,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26323) : cljs_http.client.request.call(null,G__26323));
};
var options = function (url,var_args){
var p__26319 = null;
if (arguments.length > 1) {
  p__26319 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return options__delegate.call(this,url,p__26319);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__26324){
var url = cljs.core.first(arglist__26324);
var p__26319 = cljs.core.rest(arglist__26324);
return options__delegate(url,p__26319);
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
var patch__delegate = function (url,p__26325){
var vec__26328 = p__26325;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26328,(0),null);
var G__26329 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$104,cljs.core.constant$keyword$99,cljs.core.constant$keyword$105,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26329) : cljs_http.client.request.call(null,G__26329));
};
var patch = function (url,var_args){
var p__26325 = null;
if (arguments.length > 1) {
  p__26325 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return patch__delegate.call(this,url,p__26325);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__26330){
var url = cljs.core.first(arglist__26330);
var p__26325 = cljs.core.rest(arglist__26330);
return patch__delegate(url,p__26325);
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
var post__delegate = function (url,p__26331){
var vec__26334 = p__26331;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26334,(0),null);
var G__26335 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$104,cljs.core.constant$keyword$101,cljs.core.constant$keyword$105,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26335) : cljs_http.client.request.call(null,G__26335));
};
var post = function (url,var_args){
var p__26331 = null;
if (arguments.length > 1) {
  p__26331 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return post__delegate.call(this,url,p__26331);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__26336){
var url = cljs.core.first(arglist__26336);
var p__26331 = cljs.core.rest(arglist__26336);
return post__delegate(url,p__26331);
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
var put__delegate = function (url,p__26337){
var vec__26340 = p__26337;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26340,(0),null);
var G__26341 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$104,cljs.core.constant$keyword$102,cljs.core.constant$keyword$105,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26341) : cljs_http.client.request.call(null,G__26341));
};
var put = function (url,var_args){
var p__26337 = null;
if (arguments.length > 1) {
  p__26337 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return put__delegate.call(this,url,p__26337);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__26342){
var url = cljs.core.first(arglist__26342);
var p__26337 = cljs.core.rest(arglist__26342);
return put__delegate(url,p__26337);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;
