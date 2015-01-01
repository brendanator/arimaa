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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__22875_SHARP_,p2__22874_SHARP_){
var vec__22877 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__22874_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22877,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22877,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22875_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
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
var uri = (function (){var G__22879 = url;
return goog.Uri.parse(G__22879);
})();
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$51,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),cljs.core.constant$keyword$54,uri.getDomain(),cljs.core.constant$keyword$55,cljs_http.client.if_pos(uri.getPort()),cljs.core.constant$keyword$56,uri.getPath(),cljs.core.constant$keyword$58,((cljs.core.not(query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),cljs.core.constant$keyword$50,((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params([cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode(cljs.core.name(k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode([cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22880_SHARP_){
return cljs_http.client.encode_val(k,p1__22880_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__22881){
var vec__22883 = p__22881;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22883,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22883,(1),null);
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
return (function (p1__22884_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__22884_SHARP_)].join('');
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
var G__22887 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$87),cljs.core.constant$keyword$78,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,"content-type"], null),"application/edn");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22887) : client.call(null,G__22887));
} else {
var G__22888 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22888) : client.call(null,G__22888));
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__22889_SHARP_){
return cljs_http.client.decode_body(p1__22889_SHARP_,cljs.reader.read_string,"application/edn",cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22891 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22891) : client.call(null,G__22891));
})()], null));
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__22892){
var vec__22896 = p__22892;
var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22896,(0),null);
return ((function (vec__22896,accept){
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
var G__22897 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,"accept"], null),accept__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22897) : client.call(null,G__22897));
} else {
var G__22898 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22898) : client.call(null,G__22898));
}
});
;})(vec__22896,accept))
};
var wrap_accept = function (client,var_args){
var p__22892 = null;
if (arguments.length > 1) {
  p__22892 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return wrap_accept__delegate.call(this,client,p__22892);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__22899){
var client = cljs.core.first(arglist__22899);
var p__22892 = cljs.core.rest(arglist__22899);
return wrap_accept__delegate(client,p__22892);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__22900){
var vec__22904 = p__22900;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22904,(0),null);
return ((function (vec__22904,content_type){
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
var G__22905 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,"content-type"], null),content_type__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22905) : client.call(null,G__22905));
} else {
var G__22906 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22906) : client.call(null,G__22906));
}
});
;})(vec__22904,content_type))
};
var wrap_content_type = function (client,var_args){
var p__22900 = null;
if (arguments.length > 1) {
  p__22900 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return wrap_content_type__delegate.call(this,client,p__22900);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__22907){
var client = cljs.core.first(arglist__22907);
var p__22900 = cljs.core.rest(arglist__22907);
return wrap_content_type__delegate(client,p__22900);
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
var map__22911 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$96.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__22911__$1 = ((cljs.core.seq_QMARK_(map__22911))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22911):map__22911);
var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22911__$1,cljs.core.constant$keyword$91);
var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22911__$1,cljs.core.constant$keyword$90);
var G__22912 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$95),cljs.core.constant$keyword$78,cljs_http.util.transit_encode(params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,"content-type"], null),"application/transit+json");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22912) : client.call(null,G__22912));
} else {
var G__22913 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22913) : client.call(null,G__22913));
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){
return (function (request){
var map__22918 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$96.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__22918__$1 = ((cljs.core.seq_QMARK_(map__22918))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22918):map__22918);
var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22918__$1,cljs.core.constant$keyword$93);
var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22918__$1,cljs.core.constant$keyword$92);
var transit_decode = ((function (map__22918,map__22918__$1,decoding_opts,decoding){
return (function (p1__22914_SHARP_){
return cljs_http.util.transit_decode(p1__22914_SHARP_,decoding,decoding_opts);
});})(map__22918,map__22918__$1,decoding_opts,decoding))
;
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(((function (map__22918,map__22918__$1,decoding_opts,decoding,transit_decode){
return (function (p1__22915_SHARP_){
return cljs_http.client.decode_body(p1__22915_SHARP_,transit_decode,"application/transit+json",cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(request));
});})(map__22918,map__22918__$1,decoding_opts,decoding,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22919 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22919) : client.call(null,G__22919));
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
var G__22922 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$97),cljs.core.constant$keyword$78,cljs_http.util.json_encode(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,"content-type"], null),"application/json");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22922) : client.call(null,G__22922));
} else {
var G__22923 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22923) : client.call(null,G__22923));
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__22924_SHARP_){
return cljs_http.client.decode_body(p1__22924_SHARP_,cljs_http.util.json_decode,"application/json",cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22926 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22926) : client.call(null,G__22926));
})()], null));
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){
return (function (p__22931){
var map__22932 = p__22931;
var map__22932__$1 = ((cljs.core.seq_QMARK_(map__22932))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22932):map__22932);
var req = map__22932__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22932__$1,cljs.core.constant$keyword$50);
if(cljs.core.truth_(query_params)){
var G__22933 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$50),cljs.core.constant$keyword$58,cljs_http.client.generate_query_string(query_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22933) : client.call(null,G__22933));
} else {
var G__22934 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22934) : client.call(null,G__22934));
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){
return (function (p__22939){
var map__22940 = p__22939;
var map__22940__$1 = ((cljs.core.seq_QMARK_(map__22940))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22940):map__22940);
var request = map__22940__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22940__$1,cljs.core.constant$keyword$80);
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22940__$1,cljs.core.constant$keyword$98);
if(cljs.core.truth_((function (){var and__3618__auto__ = form_params;
if(cljs.core.truth_(and__3618__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$99,null,cljs.core.constant$keyword$100,null,cljs.core.constant$keyword$101,null,cljs.core.constant$keyword$102,null], null), null).call(null,request_method);
} else {
return and__3618__auto__;
}
})())){
var G__22941 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$98),cljs.core.constant$keyword$78,cljs_http.client.generate_query_string(form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,"content-type"], null),"application/x-www-form-urlencoded");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22941) : client.call(null,G__22941));
} else {
var G__22942 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22942) : client.call(null,G__22942));
}
});
});
cljs_http.client.generate_form_data = (function generate_form_data(params){
var form_data = (new FormData());
var seq__22949_22955 = cljs.core.seq(params);
var chunk__22950_22956 = null;
var count__22951_22957 = (0);
var i__22952_22958 = (0);
while(true){
if((i__22952_22958 < count__22951_22957)){
var vec__22953_22959 = chunk__22950_22956.cljs$core$IIndexed$_nth$arity$2(null,i__22952_22958);
var k_22960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22953_22959,(0),null);
var v_22961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22953_22959,(1),null);
form_data.append(cljs.core.name(k_22960),v_22961);

var G__22962 = seq__22949_22955;
var G__22963 = chunk__22950_22956;
var G__22964 = count__22951_22957;
var G__22965 = (i__22952_22958 + (1));
seq__22949_22955 = G__22962;
chunk__22950_22956 = G__22963;
count__22951_22957 = G__22964;
i__22952_22958 = G__22965;
continue;
} else {
var temp__4126__auto___22966 = cljs.core.seq(seq__22949_22955);
if(temp__4126__auto___22966){
var seq__22949_22967__$1 = temp__4126__auto___22966;
if(cljs.core.chunked_seq_QMARK_(seq__22949_22967__$1)){
var c__4417__auto___22968 = cljs.core.chunk_first(seq__22949_22967__$1);
var G__22969 = cljs.core.chunk_rest(seq__22949_22967__$1);
var G__22970 = c__4417__auto___22968;
var G__22971 = cljs.core.count(c__4417__auto___22968);
var G__22972 = (0);
seq__22949_22955 = G__22969;
chunk__22950_22956 = G__22970;
count__22951_22957 = G__22971;
i__22952_22958 = G__22972;
continue;
} else {
var vec__22954_22973 = cljs.core.first(seq__22949_22967__$1);
var k_22974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22954_22973,(0),null);
var v_22975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22954_22973,(1),null);
form_data.append(cljs.core.name(k_22974),v_22975);

var G__22976 = cljs.core.next(seq__22949_22967__$1);
var G__22977 = null;
var G__22978 = (0);
var G__22979 = (0);
seq__22949_22955 = G__22976;
chunk__22950_22956 = G__22977;
count__22951_22957 = G__22978;
i__22952_22958 = G__22979;
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
return (function (p__22984){
var map__22985 = p__22984;
var map__22985__$1 = ((cljs.core.seq_QMARK_(map__22985))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22985):map__22985);
var request = map__22985__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22985__$1,cljs.core.constant$keyword$80);
var multipart_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22985__$1,cljs.core.constant$keyword$103);
if(cljs.core.truth_((function (){var and__3618__auto__ = multipart_params;
if(cljs.core.truth_(and__3618__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$99,null,cljs.core.constant$keyword$100,null,cljs.core.constant$keyword$101,null,cljs.core.constant$keyword$102,null], null), null).call(null,request_method);
} else {
return and__3618__auto__;
}
})())){
var G__22986 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$103),cljs.core.constant$keyword$78,cljs_http.client.generate_form_data(multipart_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,"content-type"], null),"multipart/form-data");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22986) : client.call(null,G__22986));
} else {
var G__22987 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22987) : client.call(null,G__22987));
}
});
});
cljs_http.client.wrap_method = (function wrap_method(client){
return (function (req){
var temp__4124__auto__ = cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4124__auto__)){
var m = temp__4124__auto__;
var G__22990 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$104),cljs.core.constant$keyword$80,m);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22990) : client.call(null,G__22990));
} else {
var G__22991 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22991) : client.call(null,G__22991));
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){
return (function (p1__22992_SHARP_){
var G__22994 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22992_SHARP_,cljs.core.constant$keyword$54,server_name);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22994) : client.call(null,G__22994));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){
return (function (p__23000){
var map__23001 = p__23000;
var map__23001__$1 = ((cljs.core.seq_QMARK_(map__23001))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23001):map__23001);
var req = map__23001__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23001__$1,cljs.core.constant$keyword$50);
var temp__4124__auto__ = cljs_http.client.parse_url(cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4124__auto__)){
var spec = temp__4124__auto__;
var G__23002 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),cljs.core.constant$keyword$105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$50], null),((function (spec,temp__4124__auto__,map__23001,map__23001__$1,req,query_params){
return (function (p1__22995_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__22995_SHARP_,query_params], 0));
});})(spec,temp__4124__auto__,map__23001,map__23001__$1,req,query_params))
);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23002) : client.call(null,G__23002));
} else {
var G__23003 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23003) : client.call(null,G__23003));
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__23004){
var vec__23008 = p__23004;
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23008,(0),null);
return ((function (vec__23008,credentials){
return (function (req){
var credentials__$1 = (function (){var or__3630__auto__ = cljs.core.constant$keyword$106.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_(credentials__$1))){
var G__23009 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23009) : client.call(null,G__23009));
} else {
var G__23010 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23010) : client.call(null,G__23010));
}
});
;})(vec__23008,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__23004 = null;
if (arguments.length > 1) {
  p__23004 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return wrap_basic_auth__delegate.call(this,client,p__23004);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__23011){
var client = cljs.core.first(arglist__23011);
var p__23004 = cljs.core.rest(arglist__23011);
return wrap_basic_auth__delegate(client,p__23004);
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
var G__23014 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$107),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join(''));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23014) : client.call(null,G__23014));
} else {
var G__23015 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23015) : client.call(null,G__23015));
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
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((function (){var G__23018 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23018) : client.call(null,G__23018));
})(),custom_channel);
} else {
var G__23019 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23019) : client.call(null,G__23019));
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
var delete$__delegate = function (url,p__23020){
var vec__23023 = p__23020;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23023,(0),null);
var G__23024 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$104,cljs.core.constant$keyword$100,cljs.core.constant$keyword$105,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23024) : cljs_http.client.request.call(null,G__23024));
};
var delete$ = function (url,var_args){
var p__23020 = null;
if (arguments.length > 1) {
  p__23020 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return delete$__delegate.call(this,url,p__23020);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__23025){
var url = cljs.core.first(arglist__23025);
var p__23020 = cljs.core.rest(arglist__23025);
return delete$__delegate(url,p__23020);
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
var get__delegate = function (url,p__23026){
var vec__23029 = p__23026;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23029,(0),null);
var G__23030 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$104,cljs.core.constant$keyword$81,cljs.core.constant$keyword$105,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23030) : cljs_http.client.request.call(null,G__23030));
};
var get = function (url,var_args){
var p__23026 = null;
if (arguments.length > 1) {
  p__23026 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return get__delegate.call(this,url,p__23026);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__23031){
var url = cljs.core.first(arglist__23031);
var p__23026 = cljs.core.rest(arglist__23031);
return get__delegate(url,p__23026);
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
var head__delegate = function (url,p__23032){
var vec__23035 = p__23032;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23035,(0),null);
var G__23036 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$104,cljs.core.constant$keyword$86,cljs.core.constant$keyword$105,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23036) : cljs_http.client.request.call(null,G__23036));
};
var head = function (url,var_args){
var p__23032 = null;
if (arguments.length > 1) {
  p__23032 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return head__delegate.call(this,url,p__23032);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__23037){
var url = cljs.core.first(arglist__23037);
var p__23032 = cljs.core.rest(arglist__23037);
return head__delegate(url,p__23032);
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
var move__delegate = function (url,p__23038){
var vec__23041 = p__23038;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23041,(0),null);
var G__23042 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$104,cljs.core.constant$keyword$109,cljs.core.constant$keyword$105,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23042) : cljs_http.client.request.call(null,G__23042));
};
var move = function (url,var_args){
var p__23038 = null;
if (arguments.length > 1) {
  p__23038 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return move__delegate.call(this,url,p__23038);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__23043){
var url = cljs.core.first(arglist__23043);
var p__23038 = cljs.core.rest(arglist__23043);
return move__delegate(url,p__23038);
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
var options__delegate = function (url,p__23044){
var vec__23047 = p__23044;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23047,(0),null);
var G__23048 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$104,cljs.core.constant$keyword$110,cljs.core.constant$keyword$105,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23048) : cljs_http.client.request.call(null,G__23048));
};
var options = function (url,var_args){
var p__23044 = null;
if (arguments.length > 1) {
  p__23044 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return options__delegate.call(this,url,p__23044);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__23049){
var url = cljs.core.first(arglist__23049);
var p__23044 = cljs.core.rest(arglist__23049);
return options__delegate(url,p__23044);
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
var patch__delegate = function (url,p__23050){
var vec__23053 = p__23050;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23053,(0),null);
var G__23054 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$104,cljs.core.constant$keyword$99,cljs.core.constant$keyword$105,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23054) : cljs_http.client.request.call(null,G__23054));
};
var patch = function (url,var_args){
var p__23050 = null;
if (arguments.length > 1) {
  p__23050 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return patch__delegate.call(this,url,p__23050);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__23055){
var url = cljs.core.first(arglist__23055);
var p__23050 = cljs.core.rest(arglist__23055);
return patch__delegate(url,p__23050);
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
var post__delegate = function (url,p__23056){
var vec__23059 = p__23056;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23059,(0),null);
var G__23060 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$104,cljs.core.constant$keyword$101,cljs.core.constant$keyword$105,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23060) : cljs_http.client.request.call(null,G__23060));
};
var post = function (url,var_args){
var p__23056 = null;
if (arguments.length > 1) {
  p__23056 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return post__delegate.call(this,url,p__23056);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__23061){
var url = cljs.core.first(arglist__23061);
var p__23056 = cljs.core.rest(arglist__23061);
return post__delegate(url,p__23056);
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
var put__delegate = function (url,p__23062){
var vec__23065 = p__23062;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23065,(0),null);
var G__23066 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$104,cljs.core.constant$keyword$102,cljs.core.constant$keyword$105,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23066) : cljs_http.client.request.call(null,G__23066));
};
var put = function (url,var_args){
var p__23062 = null;
if (arguments.length > 1) {
  p__23062 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return put__delegate.call(this,url,p__23062);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__23067){
var url = cljs.core.first(arglist__23067);
var p__23062 = cljs.core.rest(arglist__23067);
return put__delegate(url,p__23062);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;
