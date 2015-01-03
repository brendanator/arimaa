// Compiled by ClojureScript 0.0-2511
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.EventType');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = (function (){var G__27394 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27394) : cljs.core.atom.call(null,G__27394));
})();
/**
* Attempt to close the given channel and abort the pending HTTP request
* with which it is associated.
*/
cljs_http.core.abort_BANG_ = (function abort_BANG_(channel){
var temp__4126__auto__ = (function (){var G__27396 = cljs_http.core.pending_requests;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27396) : cljs.core.deref.call(null,G__27396));
})().call(null,channel);
if(cljs.core.truth_(temp__4126__auto__)){
var xhr = temp__4126__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

return xhr.abort();
} else {
return null;
}
});
/**
* Execute the HTTP request corresponding to the given Ring request
* map and return a core.async channel.
*/
cljs_http.core.request = (function request(p__27398){
var map__27401 = p__27398;
var map__27401__$1 = ((cljs.core.seq_QMARK_(map__27401))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27401):map__27401);
var request__$1 = map__27401__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27401__$1,cljs.core.constant$keyword$99);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27401__$1,cljs.core.constant$keyword$100);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27401__$1,cljs.core.constant$keyword$101);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27401__$1,cljs.core.constant$keyword$102);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request__$1);
var method = cljs.core.name((function (){var or__3630__auto__ = request_method;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return cljs.core.constant$keyword$103;
}
})());
var timeout = (function (){var or__3630__auto__ = cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(request__$1);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return (0);
}
})();
var headers__$1 = cljs_http.util.build_headers(headers);
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var xhr = (function (){var G__27402 = (new goog.net.XhrIo());
G__27402.setTimeoutInterval(timeout);

G__27402.setWithCredentials(send_credentials);

return G__27402;
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__27401,map__27401__$1,request__$1,with_credentials_QMARK_,body,headers,request_method){
return (function (p1__27397_SHARP_){
var target = p1__27397_SHARP_.target;
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$105,target.getStatus(),cljs.core.constant$keyword$106,target.isSuccess(),cljs.core.constant$keyword$100,target.getResponseText(),cljs.core.constant$keyword$101,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.constant$keyword$107,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null)], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

return cljs.core.async.close_BANG_(channel);
});})(channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__27401,map__27401__$1,request__$1,with_credentials_QMARK_,body,headers,request_method))
);

xhr.send(request_url,method,body,headers__$1);

return channel;
});
