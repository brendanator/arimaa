// Compiled by ClojureScript 0.0-2657 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.EventType');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = (function (){var G__23486 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23486) : cljs.core.atom.call(null,G__23486));
})();
/**
* Attempt to close the given channel and abort the pending HTTP request
* with which it is associated.
*/
cljs_http.core.abort_BANG_ = (function abort_BANG_(channel){
var temp__4126__auto__ = (function (){var G__23488 = cljs_http.core.pending_requests;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23488) : cljs.core.deref.call(null,G__23488));
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
cljs_http.core.request = (function request(p__23489){
var map__23516 = p__23489;
var map__23516__$1 = ((cljs.core.seq_QMARK_(map__23516))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23516):map__23516);
var request__$1 = map__23516__$1;
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23516__$1,cljs.core.constant$keyword$81);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23516__$1,cljs.core.constant$keyword$82);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23516__$1,cljs.core.constant$keyword$83);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23516__$1,cljs.core.constant$keyword$84);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23516__$1,cljs.core.constant$keyword$85);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request__$1);
var method = cljs.core.name((function (){var or__3731__auto__ = request_method;
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
return cljs.core.constant$keyword$86;
}
})());
var timeout = (function (){var or__3731__auto__ = cljs.core.constant$keyword$87.cljs$core$IFn$_invoke$arity$1(request__$1);
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
return (0);
}
})();
var headers__$1 = cljs_http.util.build_headers(headers);
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var xhr = (function (){var G__23517 = (new goog.net.XhrIo());
G__23517.setTimeoutInterval(timeout);

G__23517.setWithCredentials(send_credentials);

return G__23517;
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__23516,map__23516__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method){
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
});})(channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__23516,map__23516__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method))
);

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__11621__auto___23542 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11621__auto___23542,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__23516,map__23516__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (){
var f__11622__auto__ = (function (){var switch__11541__auto__ = ((function (c__11621__auto___23542,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__23516,map__23516__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (state_23528){
var state_val_23529 = (state_23528[(1)]);
if((state_val_23529 === (5))){
var inst_23526 = (state_23528[(2)]);
var state_23528__$1 = state_23528;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23528__$1,inst_23526);
} else {
if((state_val_23529 === (4))){
var state_23528__$1 = state_23528;
var statearr_23530_23543 = state_23528__$1;
(statearr_23530_23543[(2)] = null);

(statearr_23530_23543[(1)] = (5));


return cljs.core.constant$keyword$65;
} else {
if((state_val_23529 === (3))){
var inst_23523 = xhr.abort();
var state_23528__$1 = state_23528;
var statearr_23531_23544 = state_23528__$1;
(statearr_23531_23544[(2)] = inst_23523);

(statearr_23531_23544[(1)] = (5));


return cljs.core.constant$keyword$65;
} else {
if((state_val_23529 === (2))){
var inst_23519 = (state_23528[(2)]);
var inst_23520 = xhr.isComplete();
var inst_23521 = cljs.core.not(inst_23520);
var state_23528__$1 = (function (){var statearr_23532 = state_23528;
(statearr_23532[(7)] = inst_23519);

return statearr_23532;
})();
if(inst_23521){
var statearr_23533_23545 = state_23528__$1;
(statearr_23533_23545[(1)] = (3));

} else {
var statearr_23534_23546 = state_23528__$1;
(statearr_23534_23546[(1)] = (4));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_23529 === (1))){
var state_23528__$1 = state_23528;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23528__$1,(2),cancel);
} else {
return null;
}
}
}
}
}
});})(c__11621__auto___23542,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__23516,map__23516__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method))
;
return ((function (switch__11541__auto__,c__11621__auto___23542,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__23516,map__23516__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function() {
var state_machine__11542__auto__ = null;
var state_machine__11542__auto____0 = (function (){
var statearr_23538 = [null,null,null,null,null,null,null,null];
(statearr_23538[(0)] = state_machine__11542__auto__);

(statearr_23538[(1)] = (1));

return statearr_23538;
});
var state_machine__11542__auto____1 = (function (state_23528){
while(true){
var ret_value__11543__auto__ = (function (){try{while(true){
var result__11544__auto__ = switch__11541__auto__(state_23528);
if(cljs.core.keyword_identical_QMARK_(result__11544__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11544__auto__;
}
break;
}
}catch (e23539){if((e23539 instanceof Object)){
var ex__11545__auto__ = e23539;
var statearr_23540_23547 = state_23528;
(statearr_23540_23547[(5)] = ex__11545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23528);

return cljs.core.constant$keyword$65;
} else {
throw e23539;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11543__auto__,cljs.core.constant$keyword$65)){
var G__23548 = state_23528;
state_23528 = G__23548;
continue;
} else {
return ret_value__11543__auto__;
}
break;
}
});
state_machine__11542__auto__ = function(state_23528){
switch(arguments.length){
case 0:
return state_machine__11542__auto____0.call(this);
case 1:
return state_machine__11542__auto____1.call(this,state_23528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11542__auto____0;
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11542__auto____1;
return state_machine__11542__auto__;
})()
;})(switch__11541__auto__,c__11621__auto___23542,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__23516,map__23516__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method))
})();
var state__11623__auto__ = (function (){var statearr_23541 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_23541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto___23542);

return statearr_23541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(c__11621__auto___23542,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__23516,map__23516__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method))
);

} else {
}

return channel;
});
