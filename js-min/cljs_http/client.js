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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__21947_SHARP_,p2__21946_SHARP_){
var vec__21949 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__21946_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21949,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21949,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__21947_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
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
var uri = (function (){var G__21951 = url;
return goog.Uri.parse(G__21951);
})();
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$29,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),cljs.core.constant$keyword$32,uri.getDomain(),cljs.core.constant$keyword$33,cljs_http.client.if_pos(uri.getPort()),cljs.core.constant$keyword$34,uri.getPath(),cljs.core.constant$keyword$36,((cljs.core.not(query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),cljs.core.constant$keyword$28,((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params([cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode(cljs.core.name(k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode([cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21952_SHARP_){
return cljs_http.client.encode_val(k,p1__21952_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__21953){
var vec__21955 = p__21953;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21955,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21955,(1),null);
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
return (function (p1__21956_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__21956_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var and__3618__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$65,request_method);
if(and__3618__auto__){
return cljs.core.re_find(cljs.core.re_pattern([cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special(content_type))].join('')),[cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$58.cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__3618__auto__;
}
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$57], null),decode_fn);
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
var temp__4124__auto__ = cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
var G__21959 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$66),cljs.core.constant$keyword$57,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$58,"content-type"], null),"application/edn");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21959) : client.call(null,G__21959));
} else {
var G__21960 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21960) : client.call(null,G__21960));
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__21961_SHARP_){
return cljs_http.client.decode_body(p1__21961_SHARP_,cljs.reader.read_string,"application/edn",cljs.core.constant$keyword$59.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__21963 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21963) : client.call(null,G__21963));
})()], null));
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__21964){
var vec__21968 = p__21964;
var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21968,(0),null);
return ((function (vec__21968,accept){
return (function (request){
var temp__4124__auto__ = (function (){var or__3630__auto__ = cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var accept__$1 = temp__4124__auto__;
var G__21969 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$58,"accept"], null),accept__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21969) : client.call(null,G__21969));
} else {
var G__21970 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21970) : client.call(null,G__21970));
}
});
;})(vec__21968,accept))
};
var wrap_accept = function (client,var_args){
var p__21964 = null;
if (arguments.length > 1) {
  p__21964 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return wrap_accept__delegate.call(this,client,p__21964);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__21971){
var client = cljs.core.first(arglist__21971);
var p__21964 = cljs.core.rest(arglist__21971);
return wrap_accept__delegate(client,p__21964);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__21972){
var vec__21976 = p__21972;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21976,(0),null);
return ((function (vec__21976,content_type){
return (function (request){
var temp__4124__auto__ = (function (){var or__3630__auto__ = cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var content_type__$1 = temp__4124__auto__;
var G__21977 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$58,"content-type"], null),content_type__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21977) : client.call(null,G__21977));
} else {
var G__21978 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21978) : client.call(null,G__21978));
}
});
;})(vec__21976,content_type))
};
var wrap_content_type = function (client,var_args){
var p__21972 = null;
if (arguments.length > 1) {
  p__21972 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return wrap_content_type__delegate.call(this,client,p__21972);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__21979){
var client = cljs.core.first(arglist__21979);
var p__21972 = cljs.core.rest(arglist__21979);
return wrap_content_type__delegate(client,p__21972);
});
wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = wrap_content_type__delegate;
return wrap_content_type;
})()
;
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$69,cljs.core.constant$keyword$73,cljs.core.constant$keyword$70,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$71,cljs.core.constant$keyword$73,cljs.core.constant$keyword$72,cljs.core.PersistentArrayMap.EMPTY], null);
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
var temp__4124__auto__ = cljs.core.constant$keyword$74.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
var map__21983 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$75.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__21983__$1 = ((cljs.core.seq_QMARK_(map__21983))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21983):map__21983);
var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21983__$1,cljs.core.constant$keyword$70);
var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21983__$1,cljs.core.constant$keyword$69);
var G__21984 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$74),cljs.core.constant$keyword$57,cljs_http.util.transit_encode(params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$58,"content-type"], null),"application/transit+json");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21984) : client.call(null,G__21984));
} else {
var G__21985 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21985) : client.call(null,G__21985));
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){
return (function (request){
var map__21990 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$75.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__21990__$1 = ((cljs.core.seq_QMARK_(map__21990))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21990):map__21990);
var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21990__$1,cljs.core.constant$keyword$72);
var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21990__$1,cljs.core.constant$keyword$71);
var transit_decode = ((function (map__21990,map__21990__$1,decoding_opts,decoding){
return (function (p1__21986_SHARP_){
return cljs_http.util.transit_decode(p1__21986_SHARP_,decoding,decoding_opts);
});})(map__21990,map__21990__$1,decoding_opts,decoding))
;
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(((function (map__21990,map__21990__$1,decoding_opts,decoding,transit_decode){
return (function (p1__21987_SHARP_){
return cljs_http.client.decode_body(p1__21987_SHARP_,transit_decode,"application/transit+json",cljs.core.constant$keyword$59.cljs$core$IFn$_invoke$arity$1(request));
});})(map__21990,map__21990__$1,decoding_opts,decoding,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__21991 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21991) : client.call(null,G__21991));
})()], null));
});
});
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){
return (function (request){
var temp__4124__auto__ = cljs.core.constant$keyword$76.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
var G__21994 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$76),cljs.core.constant$keyword$57,cljs_http.util.json_encode(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$58,"content-type"], null),"application/json");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21994) : client.call(null,G__21994));
} else {
var G__21995 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21995) : client.call(null,G__21995));
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__21996_SHARP_){
return cljs_http.client.decode_body(p1__21996_SHARP_,cljs_http.util.json_decode,"application/json",cljs.core.constant$keyword$59.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__21998 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21998) : client.call(null,G__21998));
})()], null));
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){
return (function (p__22003){
var map__22004 = p__22003;
var map__22004__$1 = ((cljs.core.seq_QMARK_(map__22004))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22004):map__22004);
var req = map__22004__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22004__$1,cljs.core.constant$keyword$28);
if(cljs.core.truth_(query_params)){
var G__22005 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$28),cljs.core.constant$keyword$36,cljs_http.client.generate_query_string(query_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22005) : client.call(null,G__22005));
} else {
var G__22006 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22006) : client.call(null,G__22006));
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){
return (function (p__22011){
var map__22012 = p__22011;
var map__22012__$1 = ((cljs.core.seq_QMARK_(map__22012))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22012):map__22012);
var request = map__22012__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22012__$1,cljs.core.constant$keyword$59);
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22012__$1,cljs.core.constant$keyword$77);
if(cljs.core.truth_((function (){var and__3618__auto__ = form_params;
if(cljs.core.truth_(and__3618__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$78,null,cljs.core.constant$keyword$79,null,cljs.core.constant$keyword$80,null,cljs.core.constant$keyword$81,null], null), null).call(null,request_method);
} else {
return and__3618__auto__;
}
})())){
var G__22013 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$77),cljs.core.constant$keyword$57,cljs_http.client.generate_query_string(form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$58,"content-type"], null),"application/x-www-form-urlencoded");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22013) : client.call(null,G__22013));
} else {
var G__22014 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22014) : client.call(null,G__22014));
}
});
});
cljs_http.client.generate_form_data = (function generate_form_data(params){
var form_data = (new FormData());
var seq__22021_22027 = cljs.core.seq(params);
var chunk__22022_22028 = null;
var count__22023_22029 = (0);
var i__22024_22030 = (0);
while(true){
if((i__22024_22030 < count__22023_22029)){
var vec__22025_22031 = chunk__22022_22028.cljs$core$IIndexed$_nth$arity$2(null,i__22024_22030);
var k_22032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22025_22031,(0),null);
var v_22033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22025_22031,(1),null);
form_data.append(cljs.core.name(k_22032),v_22033);

var G__22034 = seq__22021_22027;
var G__22035 = chunk__22022_22028;
var G__22036 = count__22023_22029;
var G__22037 = (i__22024_22030 + (1));
seq__22021_22027 = G__22034;
chunk__22022_22028 = G__22035;
count__22023_22029 = G__22036;
i__22024_22030 = G__22037;
continue;
} else {
var temp__4126__auto___22038 = cljs.core.seq(seq__22021_22027);
if(temp__4126__auto___22038){
var seq__22021_22039__$1 = temp__4126__auto___22038;
if(cljs.core.chunked_seq_QMARK_(seq__22021_22039__$1)){
var c__4417__auto___22040 = cljs.core.chunk_first(seq__22021_22039__$1);
var G__22041 = cljs.core.chunk_rest(seq__22021_22039__$1);
var G__22042 = c__4417__auto___22040;
var G__22043 = cljs.core.count(c__4417__auto___22040);
var G__22044 = (0);
seq__22021_22027 = G__22041;
chunk__22022_22028 = G__22042;
count__22023_22029 = G__22043;
i__22024_22030 = G__22044;
continue;
} else {
var vec__22026_22045 = cljs.core.first(seq__22021_22039__$1);
var k_22046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22026_22045,(0),null);
var v_22047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22026_22045,(1),null);
form_data.append(cljs.core.name(k_22046),v_22047);

var G__22048 = cljs.core.next(seq__22021_22039__$1);
var G__22049 = null;
var G__22050 = (0);
var G__22051 = (0);
seq__22021_22027 = G__22048;
chunk__22022_22028 = G__22049;
count__22023_22029 = G__22050;
i__22024_22030 = G__22051;
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
return (function (p__22056){
var map__22057 = p__22056;
var map__22057__$1 = ((cljs.core.seq_QMARK_(map__22057))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22057):map__22057);
var request = map__22057__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22057__$1,cljs.core.constant$keyword$59);
var multipart_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22057__$1,cljs.core.constant$keyword$82);
if(cljs.core.truth_((function (){var and__3618__auto__ = multipart_params;
if(cljs.core.truth_(and__3618__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$78,null,cljs.core.constant$keyword$79,null,cljs.core.constant$keyword$80,null,cljs.core.constant$keyword$81,null], null), null).call(null,request_method);
} else {
return and__3618__auto__;
}
})())){
var G__22058 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$82),cljs.core.constant$keyword$57,cljs_http.client.generate_form_data(multipart_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$58,"content-type"], null),"multipart/form-data");
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22058) : client.call(null,G__22058));
} else {
var G__22059 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22059) : client.call(null,G__22059));
}
});
});
cljs_http.client.wrap_method = (function wrap_method(client){
return (function (req){
var temp__4124__auto__ = cljs.core.constant$keyword$83.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4124__auto__)){
var m = temp__4124__auto__;
var G__22062 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$83),cljs.core.constant$keyword$59,m);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22062) : client.call(null,G__22062));
} else {
var G__22063 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22063) : client.call(null,G__22063));
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){
return (function (p1__22064_SHARP_){
var G__22066 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22064_SHARP_,cljs.core.constant$keyword$32,server_name);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22066) : client.call(null,G__22066));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){
return (function (p__22072){
var map__22073 = p__22072;
var map__22073__$1 = ((cljs.core.seq_QMARK_(map__22073))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22073):map__22073);
var req = map__22073__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22073__$1,cljs.core.constant$keyword$28);
var temp__4124__auto__ = cljs_http.client.parse_url(cljs.core.constant$keyword$84.cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4124__auto__)){
var spec = temp__4124__auto__;
var G__22074 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),cljs.core.constant$keyword$84),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$28], null),((function (spec,temp__4124__auto__,map__22073,map__22073__$1,req,query_params){
return (function (p1__22067_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__22067_SHARP_,query_params], 0));
});})(spec,temp__4124__auto__,map__22073,map__22073__$1,req,query_params))
);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22074) : client.call(null,G__22074));
} else {
var G__22075 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22075) : client.call(null,G__22075));
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__22076){
var vec__22080 = p__22076;
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22080,(0),null);
return ((function (vec__22080,credentials){
return (function (req){
var credentials__$1 = (function (){var or__3630__auto__ = cljs.core.constant$keyword$85.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_(credentials__$1))){
var G__22081 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$85),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$58,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22081) : client.call(null,G__22081));
} else {
var G__22082 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22082) : client.call(null,G__22082));
}
});
;})(vec__22080,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__22076 = null;
if (arguments.length > 1) {
  p__22076 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return wrap_basic_auth__delegate.call(this,client,p__22076);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__22083){
var client = cljs.core.first(arglist__22083);
var p__22076 = cljs.core.rest(arglist__22083);
return wrap_basic_auth__delegate(client,p__22076);
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
var temp__4124__auto__ = cljs.core.constant$keyword$86.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4124__auto__)){
var oauth_token = temp__4124__auto__;
var G__22086 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$86),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$58,"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join(''));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22086) : client.call(null,G__22086));
} else {
var G__22087 = req;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22087) : client.call(null,G__22087));
}
});
});
/**
* Pipe the response-channel into the request-map's
* custom channel (e.g. to enable transducers)
*/
cljs_http.client.wrap_channel_from_request_map = (function wrap_channel_from_request_map(client){
return (function (request){
var temp__4124__auto__ = cljs.core.constant$keyword$87.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var custom_channel = temp__4124__auto__;
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((function (){var G__22090 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22090) : client.call(null,G__22090));
})(),custom_channel);
} else {
var G__22091 = request;
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22091) : client.call(null,G__22091));
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
var delete$__delegate = function (url,p__22092){
var vec__22095 = p__22092;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22095,(0),null);
var G__22096 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$83,cljs.core.constant$keyword$79,cljs.core.constant$keyword$84,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22096) : cljs_http.client.request.call(null,G__22096));
};
var delete$ = function (url,var_args){
var p__22092 = null;
if (arguments.length > 1) {
  p__22092 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return delete$__delegate.call(this,url,p__22092);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__22097){
var url = cljs.core.first(arglist__22097);
var p__22092 = cljs.core.rest(arglist__22097);
return delete$__delegate(url,p__22092);
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
var get__delegate = function (url,p__22098){
var vec__22101 = p__22098;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22101,(0),null);
var G__22102 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$83,cljs.core.constant$keyword$60,cljs.core.constant$keyword$84,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22102) : cljs_http.client.request.call(null,G__22102));
};
var get = function (url,var_args){
var p__22098 = null;
if (arguments.length > 1) {
  p__22098 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return get__delegate.call(this,url,p__22098);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__22103){
var url = cljs.core.first(arglist__22103);
var p__22098 = cljs.core.rest(arglist__22103);
return get__delegate(url,p__22098);
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
var head__delegate = function (url,p__22104){
var vec__22107 = p__22104;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22107,(0),null);
var G__22108 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$83,cljs.core.constant$keyword$65,cljs.core.constant$keyword$84,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22108) : cljs_http.client.request.call(null,G__22108));
};
var head = function (url,var_args){
var p__22104 = null;
if (arguments.length > 1) {
  p__22104 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return head__delegate.call(this,url,p__22104);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__22109){
var url = cljs.core.first(arglist__22109);
var p__22104 = cljs.core.rest(arglist__22109);
return head__delegate(url,p__22104);
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
var move__delegate = function (url,p__22110){
var vec__22113 = p__22110;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22113,(0),null);
var G__22114 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$83,cljs.core.constant$keyword$88,cljs.core.constant$keyword$84,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22114) : cljs_http.client.request.call(null,G__22114));
};
var move = function (url,var_args){
var p__22110 = null;
if (arguments.length > 1) {
  p__22110 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return move__delegate.call(this,url,p__22110);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__22115){
var url = cljs.core.first(arglist__22115);
var p__22110 = cljs.core.rest(arglist__22115);
return move__delegate(url,p__22110);
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
var options__delegate = function (url,p__22116){
var vec__22119 = p__22116;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22119,(0),null);
var G__22120 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$83,cljs.core.constant$keyword$89,cljs.core.constant$keyword$84,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22120) : cljs_http.client.request.call(null,G__22120));
};
var options = function (url,var_args){
var p__22116 = null;
if (arguments.length > 1) {
  p__22116 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return options__delegate.call(this,url,p__22116);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__22121){
var url = cljs.core.first(arglist__22121);
var p__22116 = cljs.core.rest(arglist__22121);
return options__delegate(url,p__22116);
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
var patch__delegate = function (url,p__22122){
var vec__22125 = p__22122;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22125,(0),null);
var G__22126 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$83,cljs.core.constant$keyword$78,cljs.core.constant$keyword$84,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22126) : cljs_http.client.request.call(null,G__22126));
};
var patch = function (url,var_args){
var p__22122 = null;
if (arguments.length > 1) {
  p__22122 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return patch__delegate.call(this,url,p__22122);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__22127){
var url = cljs.core.first(arglist__22127);
var p__22122 = cljs.core.rest(arglist__22127);
return patch__delegate(url,p__22122);
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
var post__delegate = function (url,p__22128){
var vec__22131 = p__22128;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22131,(0),null);
var G__22132 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$83,cljs.core.constant$keyword$80,cljs.core.constant$keyword$84,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22132) : cljs_http.client.request.call(null,G__22132));
};
var post = function (url,var_args){
var p__22128 = null;
if (arguments.length > 1) {
  p__22128 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return post__delegate.call(this,url,p__22128);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__22133){
var url = cljs.core.first(arglist__22133);
var p__22128 = cljs.core.rest(arglist__22133);
return post__delegate(url,p__22128);
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
var put__delegate = function (url,p__22134){
var vec__22137 = p__22134;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22137,(0),null);
var G__22138 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$83,cljs.core.constant$keyword$81,cljs.core.constant$keyword$84,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22138) : cljs_http.client.request.call(null,G__22138));
};
var put = function (url,var_args){
var p__22134 = null;
if (arguments.length > 1) {
  p__22134 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return put__delegate.call(this,url,p__22134);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__22139){
var url = cljs.core.first(arglist__22139);
var p__22134 = cljs.core.rest(arglist__22139);
return put__delegate(url,p__22134);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;
