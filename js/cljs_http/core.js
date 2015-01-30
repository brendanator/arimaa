// Compiled by ClojureScript 0.0-2727 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.EventType');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = (function (){var G__24260 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24260) : cljs.core.atom.call(null,G__24260));
})();
/**
* Attempt to close the given channel and abort the pending HTTP request
* with which it is associated.
*/
cljs_http.core.abort_BANG_ = (function abort_BANG_(channel){
var temp__4126__auto__ = (function (){var G__24262 = cljs_http.core.pending_requests;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24262) : cljs.core.deref.call(null,G__24262));
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
cljs_http.core.aborted_QMARK_ = (function aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
* Execute the HTTP request corresponding to the given Ring request
* map and return a core.async channel.
*/
cljs_http.core.request = (function request(p__24263){
var map__24290 = p__24263;
var map__24290__$1 = ((cljs.core.seq_QMARK_(map__24290))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24290):map__24290);
var request__$1 = map__24290__$1;
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24290__$1,cljs.core.constant$keyword$81);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24290__$1,cljs.core.constant$keyword$82);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24290__$1,cljs.core.constant$keyword$83);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24290__$1,cljs.core.constant$keyword$84);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24290__$1,cljs.core.constant$keyword$85);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request__$1);
var method = cljs.core.name((function (){var or__3750__auto__ = request_method;
if(cljs.core.truth_(or__3750__auto__)){
return or__3750__auto__;
} else {
return cljs.core.constant$keyword$86;
}
})());
var timeout = (function (){var or__3750__auto__ = cljs.core.constant$keyword$87.cljs$core$IFn$_invoke$arity$1(request__$1);
if(cljs.core.truth_(or__3750__auto__)){
return or__3750__auto__;
} else {
return (0);
}
})();
var headers__$1 = cljs_http.util.build_headers(headers);
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var xhr = (function (){var G__24291 = (new goog.net.XhrIo());
G__24291.setTimeoutInterval(timeout);

G__24291.setWithCredentials(send_credentials);

return G__24291;
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__24290,map__24290__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$88,target.getStatus(),cljs.core.constant$keyword$89,target.isSuccess(),cljs.core.constant$keyword$83,target.getResponseText(),cljs.core.constant$keyword$84,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.constant$keyword$90,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null)], null);
if(!(cljs_http.core.aborted_QMARK_(xhr))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__24290,map__24290__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method))
);

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__11733__auto___24316 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11733__auto___24316,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__24290,map__24290__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (){
var f__11734__auto__ = (function (){var switch__11653__auto__ = ((function (c__11733__auto___24316,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__24290,map__24290__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (state_24302){
var state_val_24303 = (state_24302[(1)]);
if((state_val_24303 === (5))){
var inst_24300 = (state_24302[(2)]);
var state_24302__$1 = state_24302;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24302__$1,inst_24300);
} else {
if((state_val_24303 === (4))){
var state_24302__$1 = state_24302;
var statearr_24304_24317 = state_24302__$1;
(statearr_24304_24317[(2)] = null);

(statearr_24304_24317[(1)] = (5));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24303 === (3))){
var inst_24297 = xhr.abort();
var state_24302__$1 = state_24302;
var statearr_24305_24318 = state_24302__$1;
(statearr_24305_24318[(2)] = inst_24297);

(statearr_24305_24318[(1)] = (5));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24303 === (2))){
var inst_24293 = (state_24302[(2)]);
var inst_24294 = xhr.isComplete();
var inst_24295 = cljs.core.not(inst_24294);
var state_24302__$1 = (function (){var statearr_24306 = state_24302;
(statearr_24306[(7)] = inst_24293);

return statearr_24306;
})();
if(inst_24295){
var statearr_24307_24319 = state_24302__$1;
(statearr_24307_24319[(1)] = (3));

} else {
var statearr_24308_24320 = state_24302__$1;
(statearr_24308_24320[(1)] = (4));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_24303 === (1))){
var state_24302__$1 = state_24302;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24302__$1,(2),cancel);
} else {
return null;
}
}
}
}
}
});})(c__11733__auto___24316,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__24290,map__24290__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method))
;
return ((function (switch__11653__auto__,c__11733__auto___24316,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__24290,map__24290__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function() {
var state_machine__11654__auto__ = null;
var state_machine__11654__auto____0 = (function (){
var statearr_24312 = [null,null,null,null,null,null,null,null];
(statearr_24312[(0)] = state_machine__11654__auto__);

(statearr_24312[(1)] = (1));

return statearr_24312;
});
var state_machine__11654__auto____1 = (function (state_24302){
while(true){
var ret_value__11655__auto__ = (function (){try{while(true){
var result__11656__auto__ = switch__11653__auto__(state_24302);
if(cljs.core.keyword_identical_QMARK_(result__11656__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11656__auto__;
}
break;
}
}catch (e24313){if((e24313 instanceof Object)){
var ex__11657__auto__ = e24313;
var statearr_24314_24321 = state_24302;
(statearr_24314_24321[(5)] = ex__11657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24302);

return cljs.core.constant$keyword$65;
} else {
throw e24313;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11655__auto__,cljs.core.constant$keyword$65)){
var G__24322 = state_24302;
state_24302 = G__24322;
continue;
} else {
return ret_value__11655__auto__;
}
break;
}
});
state_machine__11654__auto__ = function(state_24302){
switch(arguments.length){
case 0:
return state_machine__11654__auto____0.call(this);
case 1:
return state_machine__11654__auto____1.call(this,state_24302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11654__auto____0;
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11654__auto____1;
return state_machine__11654__auto__;
})()
;})(switch__11653__auto__,c__11733__auto___24316,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__24290,map__24290__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method))
})();
var state__11735__auto__ = (function (){var statearr_24315 = (function (){return (f__11734__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11734__auto__.cljs$core$IFn$_invoke$arity$0() : f__11734__auto__.call(null));
})();
(statearr_24315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11733__auto___24316);

return statearr_24315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11735__auto__);
});})(c__11733__auto___24316,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__24290,map__24290__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method))
);

} else {
}

return channel;
});
