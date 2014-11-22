// Compiled by ClojureScript 0.0-2371
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('goog.Uri');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('cljs_http.core');
cljs_http.client.if_pos = (function if_pos(v){if(cljs.core.truth_((function (){var and__3628__auto__ = v;if(cljs.core.truth_(and__3628__auto__))
{return (v > (0));
} else
{return and__3628__auto__;
}
})()))
{return v;
} else
{return null;
}
});
/**
* Parse `s` as query params and return a hash map.
*/
cljs_http.client.parse_query_params = (function parse_query_params(s){if(cljs.core.not(clojure.string.blank_QMARK_(s)))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__21330_SHARP_,p2__21329_SHARP_){var vec__21332 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__21329_SHARP_,/=/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21332,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21332,(1),null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__21330_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/&/));
} else
{return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){if(cljs.core.not(clojure.string.blank_QMARK_(url)))
{var uri = (function (){var G__21334 = url;return goog.Uri.parse(G__21334);
})();var query_data = uri.getQueryData();return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$38,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),cljs.core.constant$keyword$41,uri.getDomain(),cljs.core.constant$keyword$42,cljs_http.client.if_pos(uri.getPort()),cljs.core.constant$keyword$43,uri.getPath(),cljs.core.constant$keyword$45,((cljs.core.not(query_data.isEmpty()))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)):null),cljs.core.constant$keyword$37,((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data))):null)], null);
} else
{return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode(cljs.core.name(k)))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21335_SHARP_){return cljs_http.client.encode_val(k,p1__21335_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__21336){var vec__21338 = p__21336;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21338,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21338,(1),null);if(cljs.core.coll_QMARK_(v))
{return cljs_http.client.encode_vals(k,v);
} else
{return cljs_http.client.encode_val(k,v);
}
});
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (esc_chars){
return (function (p1__21339_SHARP_){return ("\\"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21339_SHARP_));
});})(esc_chars))
,esc_chars));
})();
/**
* Escape special characters -- for content-type.
*/
cljs_http.client.escape_special = (function escape_special(string){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs_http.client.regex_char_esc_smap,string));
});
/**
* Decocde the :body of `response` with `decode-fn` if the content type matches.
*/
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type,request_method){if(cljs.core.truth_((function (){var and__3628__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$74,request_method);if(and__3628__auto__)
{return cljs.core.re_find(cljs.core.re_pattern(("(?i)"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special(content_type)))),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(response),"content-type",""))));
} else
{return and__3628__auto__;
}
})()))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$66], null),decode_fn);
} else
{return response;
}
});
/**
* Encode :edn-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_edn_params = (function wrap_edn_params(client){return (function (request){var temp__4124__auto__ = cljs.core.constant$keyword$75.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;var G__21342 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$75),cljs.core.constant$keyword$66,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$67,"content-type"], null),"application/edn");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21342) : client.call(null,G__21342));
} else
{var G__21343 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21343) : client.call(null,G__21343));
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__21344_SHARP_){return cljs_http.client.decode_body(p1__21344_SHARP_,cljs.reader.read_string,"application/edn",cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__21346 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21346) : client.call(null,G__21346));
})()], null));
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__21347){var vec__21351 = p__21347;var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21351,(0),null);return ((function (vec__21351,accept){
return (function (request){var temp__4124__auto__ = (function (){var or__3640__auto__ = cljs.core.constant$keyword$76.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var accept__$1 = temp__4124__auto__;var G__21352 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$67,"accept"], null),accept__$1);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21352) : client.call(null,G__21352));
} else
{var G__21353 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21353) : client.call(null,G__21353));
}
});
;})(vec__21351,accept))
};
var wrap_accept = function (client,var_args){
var p__21347 = null;if (arguments.length > 1) {
  p__21347 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__21347);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__21354){
var client = cljs.core.first(arglist__21354);
var p__21347 = cljs.core.rest(arglist__21354);
return wrap_accept__delegate(client,p__21347);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__21355){var vec__21359 = p__21355;var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21359,(0),null);return ((function (vec__21359,content_type){
return (function (request){var temp__4124__auto__ = (function (){var or__3640__auto__ = cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var content_type__$1 = temp__4124__auto__;var G__21360 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$67,"content-type"], null),content_type__$1);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21360) : client.call(null,G__21360));
} else
{var G__21361 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21361) : client.call(null,G__21361));
}
});
;})(vec__21359,content_type))
};
var wrap_content_type = function (client,var_args){
var p__21355 = null;if (arguments.length > 1) {
  p__21355 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__21355);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__21362){
var client = cljs.core.first(arglist__21362);
var p__21355 = cljs.core.rest(arglist__21362);
return wrap_content_type__delegate(client,p__21355);
});
wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = wrap_content_type__delegate;
return wrap_content_type;
})()
;
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$78,cljs.core.constant$keyword$82,cljs.core.constant$keyword$79,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$80,cljs.core.constant$keyword$82,cljs.core.constant$keyword$81,cljs.core.PersistentArrayMap.EMPTY], null);
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
cljs_http.client.wrap_transit_params = (function wrap_transit_params(client){return (function (request){var temp__4124__auto__ = cljs.core.constant$keyword$83.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;var map__21366 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$84.cljs$core$IFn$_invoke$arity$1(request)], 0));var map__21366__$1 = ((cljs.core.seq_QMARK_(map__21366))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21366):map__21366);var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21366__$1,cljs.core.constant$keyword$79);var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21366__$1,cljs.core.constant$keyword$78);var G__21367 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$83),cljs.core.constant$keyword$66,cljs_http.util.transit_encode(params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$67,"content-type"], null),"application/transit+json");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21367) : client.call(null,G__21367));
} else
{var G__21368 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21368) : client.call(null,G__21368));
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){return (function (request){var map__21373 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$84.cljs$core$IFn$_invoke$arity$1(request)], 0));var map__21373__$1 = ((cljs.core.seq_QMARK_(map__21373))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21373):map__21373);var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21373__$1,cljs.core.constant$keyword$81);var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21373__$1,cljs.core.constant$keyword$80);var transit_decode = ((function (map__21373,map__21373__$1,decoding_opts,decoding){
return (function (p1__21369_SHARP_){return cljs_http.util.transit_decode(p1__21369_SHARP_,decoding,decoding_opts);
});})(map__21373,map__21373__$1,decoding_opts,decoding))
;return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(((function (map__21373,map__21373__$1,decoding_opts,decoding,transit_decode){
return (function (p1__21370_SHARP_){return cljs_http.client.decode_body(p1__21370_SHARP_,transit_decode,"application/transit+json",cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(request));
});})(map__21373,map__21373__$1,decoding_opts,decoding,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__21374 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21374) : client.call(null,G__21374));
})()], null));
});
});
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){return (function (request){var temp__4124__auto__ = cljs.core.constant$keyword$85.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;var G__21377 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$85),cljs.core.constant$keyword$66,cljs_http.util.json_encode(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$67,"content-type"], null),"application/json");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21377) : client.call(null,G__21377));
} else
{var G__21378 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21378) : client.call(null,G__21378));
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__21379_SHARP_){return cljs_http.client.decode_body(p1__21379_SHARP_,cljs_http.util.json_decode,"application/json",cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__21381 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21381) : client.call(null,G__21381));
})()], null));
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__21386){var map__21387 = p__21386;var map__21387__$1 = ((cljs.core.seq_QMARK_(map__21387))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21387):map__21387);var req = map__21387__$1;var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21387__$1,cljs.core.constant$keyword$37);if(cljs.core.truth_(query_params))
{var G__21388 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$37),cljs.core.constant$keyword$45,cljs_http.client.generate_query_string(query_params));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21388) : client.call(null,G__21388));
} else
{var G__21389 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21389) : client.call(null,G__21389));
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){return (function (p__21394){var map__21395 = p__21394;var map__21395__$1 = ((cljs.core.seq_QMARK_(map__21395))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21395):map__21395);var request = map__21395__$1;var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21395__$1,cljs.core.constant$keyword$68);var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21395__$1,cljs.core.constant$keyword$86);if(cljs.core.truth_((function (){var and__3628__auto__ = form_params;if(cljs.core.truth_(and__3628__auto__))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$87,null,cljs.core.constant$keyword$88,null,cljs.core.constant$keyword$89,null,cljs.core.constant$keyword$90,null], null), null).call(null,request_method);
} else
{return and__3628__auto__;
}
})()))
{var G__21396 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$86),cljs.core.constant$keyword$66,cljs_http.client.generate_query_string(form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$67,"content-type"], null),"application/x-www-form-urlencoded");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21396) : client.call(null,G__21396));
} else
{var G__21397 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21397) : client.call(null,G__21397));
}
});
});
cljs_http.client.wrap_method = (function wrap_method(client){return (function (req){var temp__4124__auto__ = cljs.core.constant$keyword$91.cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var m = temp__4124__auto__;var G__21400 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$91),cljs.core.constant$keyword$68,m);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21400) : client.call(null,G__21400));
} else
{var G__21401 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21401) : client.call(null,G__21401));
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__21402_SHARP_){var G__21404 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__21402_SHARP_,cljs.core.constant$keyword$41,server_name);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21404) : client.call(null,G__21404));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__21410){var map__21411 = p__21410;var map__21411__$1 = ((cljs.core.seq_QMARK_(map__21411))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21411):map__21411);var req = map__21411__$1;var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21411__$1,cljs.core.constant$keyword$37);var temp__4124__auto__ = cljs_http.client.parse_url(cljs.core.constant$keyword$92.cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4124__auto__))
{var spec = temp__4124__auto__;var G__21412 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),cljs.core.constant$keyword$92),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$37], null),((function (spec,temp__4124__auto__,map__21411,map__21411__$1,req,query_params){
return (function (p1__21405_SHARP_){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__21405_SHARP_,query_params], 0));
});})(spec,temp__4124__auto__,map__21411,map__21411__$1,req,query_params))
);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21412) : client.call(null,G__21412));
} else
{var G__21413 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21413) : client.call(null,G__21413));
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__21414){var vec__21418 = p__21414;var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21418,(0),null);return ((function (vec__21418,credentials){
return (function (req){var credentials__$1 = (function (){var or__3640__auto__ = cljs.core.constant$keyword$93.cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_(credentials__$1)))
{var G__21419 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$93),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$67,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21419) : client.call(null,G__21419));
} else
{var G__21420 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21420) : client.call(null,G__21420));
}
});
;})(vec__21418,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__21414 = null;if (arguments.length > 1) {
  p__21414 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__21414);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__21421){
var client = cljs.core.first(arglist__21421);
var p__21414 = cljs.core.rest(arglist__21421);
return wrap_basic_auth__delegate(client,p__21414);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){return (function (req){var temp__4124__auto__ = cljs.core.constant$keyword$94.cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var oauth_token = temp__4124__auto__;var G__21424 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$94),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$67,"authorization"], null),("Bearer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21424) : client.call(null,G__21424));
} else
{var G__21425 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21425) : client.call(null,G__21425));
}
});
});
/**
* Pipe the response-channel into the request-map's
* custom channel (e.g. to enable transducers)
*/
cljs_http.client.wrap_channel_from_request_map = (function wrap_channel_from_request_map(client){return (function (request){var temp__4124__auto__ = cljs.core.constant$keyword$95.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var custom_channel = temp__4124__auto__;return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((function (){var G__21428 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21428) : client.call(null,G__21428));
})(),custom_channel);
} else
{var G__21429 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__21429) : client.call(null,G__21429));
}
});
});
/**
* Returns a batteries-included HTTP request function coresponding to the given
* core client. See client/client.
*/
cljs_http.client.wrap_request = (function wrap_request(request){return cljs_http.client.wrap_channel_from_request_map(cljs_http.client.wrap_url(cljs_http.client.wrap_method(cljs_http.client.wrap_oauth(cljs_http.client.wrap_basic_auth(cljs_http.client.wrap_query_params(cljs_http.client.wrap_json_response(cljs_http.client.wrap_json_params(cljs_http.client.wrap_transit_response(cljs_http.client.wrap_transit_params(cljs_http.client.wrap_edn_response(cljs_http.client.wrap_edn_params(cljs_http.client.wrap_content_type(cljs_http.client.wrap_form_params(cljs_http.client.wrap_accept(request)))))))))))))));
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
var delete$__delegate = function (url,p__21430){var vec__21433 = p__21430;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21433,(0),null);var G__21434 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$91,cljs.core.constant$keyword$88,cljs.core.constant$keyword$92,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__21434) : cljs_http.client.request.call(null,G__21434));
};
var delete$ = function (url,var_args){
var p__21430 = null;if (arguments.length > 1) {
  p__21430 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__21430);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__21435){
var url = cljs.core.first(arglist__21435);
var p__21430 = cljs.core.rest(arglist__21435);
return delete$__delegate(url,p__21430);
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
var get__delegate = function (url,p__21436){var vec__21439 = p__21436;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21439,(0),null);var G__21440 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$91,cljs.core.constant$keyword$69,cljs.core.constant$keyword$92,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__21440) : cljs_http.client.request.call(null,G__21440));
};
var get = function (url,var_args){
var p__21436 = null;if (arguments.length > 1) {
  p__21436 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__21436);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__21441){
var url = cljs.core.first(arglist__21441);
var p__21436 = cljs.core.rest(arglist__21441);
return get__delegate(url,p__21436);
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
var head__delegate = function (url,p__21442){var vec__21445 = p__21442;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21445,(0),null);var G__21446 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$91,cljs.core.constant$keyword$74,cljs.core.constant$keyword$92,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__21446) : cljs_http.client.request.call(null,G__21446));
};
var head = function (url,var_args){
var p__21442 = null;if (arguments.length > 1) {
  p__21442 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__21442);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__21447){
var url = cljs.core.first(arglist__21447);
var p__21442 = cljs.core.rest(arglist__21447);
return head__delegate(url,p__21442);
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
var move__delegate = function (url,p__21448){var vec__21451 = p__21448;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21451,(0),null);var G__21452 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$91,cljs.core.constant$keyword$96,cljs.core.constant$keyword$92,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__21452) : cljs_http.client.request.call(null,G__21452));
};
var move = function (url,var_args){
var p__21448 = null;if (arguments.length > 1) {
  p__21448 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__21448);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__21453){
var url = cljs.core.first(arglist__21453);
var p__21448 = cljs.core.rest(arglist__21453);
return move__delegate(url,p__21448);
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
var options__delegate = function (url,p__21454){var vec__21457 = p__21454;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21457,(0),null);var G__21458 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$91,cljs.core.constant$keyword$97,cljs.core.constant$keyword$92,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__21458) : cljs_http.client.request.call(null,G__21458));
};
var options = function (url,var_args){
var p__21454 = null;if (arguments.length > 1) {
  p__21454 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__21454);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__21459){
var url = cljs.core.first(arglist__21459);
var p__21454 = cljs.core.rest(arglist__21459);
return options__delegate(url,p__21454);
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
var patch__delegate = function (url,p__21460){var vec__21463 = p__21460;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21463,(0),null);var G__21464 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$91,cljs.core.constant$keyword$87,cljs.core.constant$keyword$92,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__21464) : cljs_http.client.request.call(null,G__21464));
};
var patch = function (url,var_args){
var p__21460 = null;if (arguments.length > 1) {
  p__21460 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__21460);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__21465){
var url = cljs.core.first(arglist__21465);
var p__21460 = cljs.core.rest(arglist__21465);
return patch__delegate(url,p__21460);
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
var post__delegate = function (url,p__21466){var vec__21469 = p__21466;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21469,(0),null);var G__21470 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$91,cljs.core.constant$keyword$89,cljs.core.constant$keyword$92,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__21470) : cljs_http.client.request.call(null,G__21470));
};
var post = function (url,var_args){
var p__21466 = null;if (arguments.length > 1) {
  p__21466 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__21466);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__21471){
var url = cljs.core.first(arglist__21471);
var p__21466 = cljs.core.rest(arglist__21471);
return post__delegate(url,p__21466);
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
var put__delegate = function (url,p__21472){var vec__21475 = p__21472;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21475,(0),null);var G__21476 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$91,cljs.core.constant$keyword$90,cljs.core.constant$keyword$92,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__21476) : cljs_http.client.request.call(null,G__21476));
};
var put = function (url,var_args){
var p__21472 = null;if (arguments.length > 1) {
  p__21472 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__21472);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__21477){
var url = cljs.core.first(arglist__21477);
var p__21472 = cljs.core.rest(arglist__21477);
return put__delegate(url,p__21472);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;
