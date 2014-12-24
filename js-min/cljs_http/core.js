// Compiled by ClojureScript 0.0-2511
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.EventType');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = (function (){var G__22719 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22719) : cljs.core.atom.call(null,G__22719));
})();
/**
* Attempt to close the given channel and abort the pending HTTP request
* with which it is associated.
*/
cljs_http.core.abort_BANG_ = (function abort_BANG_(channel){
var temp__4126__auto__ = (function (){var G__22721 = cljs_http.core.pending_requests;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22721) : cljs.core.deref.call(null,G__22721));
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
cljs_http.core.request = (function request(p__22723){
var map__22726 = p__22723;
var map__22726__$1 = ((cljs.core.seq_QMARK_(map__22726))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22726):map__22726);
var request__$1 = map__22726__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22726__$1,cljs.core.constant$keyword$56);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22726__$1,cljs.core.constant$keyword$57);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22726__$1,cljs.core.constant$keyword$58);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22726__$1,cljs.core.constant$keyword$59);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request__$1);
var method = cljs.core.name((function (){var or__3630__auto__ = request_method;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return cljs.core.constant$keyword$60;
}
})());
var timeout = (function (){var or__3630__auto__ = cljs.core.constant$keyword$61.cljs$core$IFn$_invoke$arity$1(request__$1);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return (0);
}
})();
var headers__$1 = cljs_http.util.build_headers(headers);
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var xhr = (function (){var G__22727 = (new goog.net.XhrIo());
G__22727.setTimeoutInterval(timeout);

G__22727.setWithCredentials(send_credentials);

return G__22727;
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__22726,map__22726__$1,request__$1,with_credentials_QMARK_,body,headers,request_method){
return (function (p1__22722_SHARP_){
var target = p1__22722_SHARP_.target;
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$62,target.getStatus(),cljs.core.constant$keyword$63,target.isSuccess(),cljs.core.constant$keyword$57,target.getResponseText(),cljs.core.constant$keyword$58,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.constant$keyword$64,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null)], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

return cljs.core.async.close_BANG_(channel);
});})(channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__22726,map__22726__$1,request__$1,with_credentials_QMARK_,body,headers,request_method))
);

xhr.send(request_url,method,body,headers__$1);

return channel;
});
