// Compiled by ClojureScript 0.0-2657 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.EventType');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = (function (){var G__24451 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24451) : cljs.core.atom.call(null,G__24451));
})();
/**
* Attempt to close the given channel and abort the pending HTTP request
* with which it is associated.
*/
cljs_http.core.abort_BANG_ = (function abort_BANG_(channel){
var temp__4126__auto__ = (function (){var G__24453 = cljs_http.core.pending_requests;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24453) : cljs.core.deref.call(null,G__24453));
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
cljs_http.core.request = (function request(p__24454){
var map__24481 = p__24454;
var map__24481__$1 = ((cljs.core.seq_QMARK_(map__24481))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24481):map__24481);
var request__$1 = map__24481__$1;
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24481__$1,cljs.core.constant$keyword$193);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24481__$1,cljs.core.constant$keyword$194);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24481__$1,cljs.core.constant$keyword$195);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24481__$1,cljs.core.constant$keyword$196);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24481__$1,cljs.core.constant$keyword$197);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request__$1);
var method = cljs.core.name((function (){var or__3731__auto__ = request_method;
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
return cljs.core.constant$keyword$198;
}
})());
var timeout = (function (){var or__3731__auto__ = cljs.core.constant$keyword$199.cljs$core$IFn$_invoke$arity$1(request__$1);
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
return (0);
}
})();
var headers__$1 = cljs_http.util.build_headers(headers);
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var xhr = (function (){var G__24482 = (new goog.net.XhrIo());
G__24482.setTimeoutInterval(timeout);

G__24482.setWithCredentials(send_credentials);

return G__24482;
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__24481,map__24481__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$200,target.getStatus(),cljs.core.constant$keyword$201,target.isSuccess(),cljs.core.constant$keyword$195,target.getResponseText(),cljs.core.constant$keyword$196,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.constant$keyword$202,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null)], null);
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
});})(channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__24481,map__24481__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method))
);

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__12070__auto___24507 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12070__auto___24507,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__24481,map__24481__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (){
var f__12071__auto__ = (function (){var switch__12055__auto__ = ((function (c__12070__auto___24507,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__24481,map__24481__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (state_24493){
var state_val_24494 = (state_24493[(1)]);
if((state_val_24494 === (5))){
var inst_24491 = (state_24493[(2)]);
var state_24493__$1 = state_24493;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24493__$1,inst_24491);
} else {
if((state_val_24494 === (4))){
var state_24493__$1 = state_24493;
var statearr_24495_24508 = state_24493__$1;
(statearr_24495_24508[(2)] = null);

(statearr_24495_24508[(1)] = (5));


return cljs.core.constant$keyword$127;
} else {
if((state_val_24494 === (3))){
var inst_24488 = xhr.abort();
var state_24493__$1 = state_24493;
var statearr_24496_24509 = state_24493__$1;
(statearr_24496_24509[(2)] = inst_24488);

(statearr_24496_24509[(1)] = (5));


return cljs.core.constant$keyword$127;
} else {
if((state_val_24494 === (2))){
var inst_24484 = (state_24493[(2)]);
var inst_24485 = xhr.isComplete();
var inst_24486 = cljs.core.not(inst_24485);
var state_24493__$1 = (function (){var statearr_24497 = state_24493;
(statearr_24497[(7)] = inst_24484);

return statearr_24497;
})();
if(inst_24486){
var statearr_24498_24510 = state_24493__$1;
(statearr_24498_24510[(1)] = (3));

} else {
var statearr_24499_24511 = state_24493__$1;
(statearr_24499_24511[(1)] = (4));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_24494 === (1))){
var state_24493__$1 = state_24493;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24493__$1,(2),cancel);
} else {
return null;
}
}
}
}
}
});})(c__12070__auto___24507,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__24481,map__24481__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method))
;
return ((function (switch__12055__auto__,c__12070__auto___24507,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__24481,map__24481__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function() {
var state_machine__12056__auto__ = null;
var state_machine__12056__auto____0 = (function (){
var statearr_24503 = [null,null,null,null,null,null,null,null];
(statearr_24503[(0)] = state_machine__12056__auto__);

(statearr_24503[(1)] = (1));

return statearr_24503;
});
var state_machine__12056__auto____1 = (function (state_24493){
while(true){
var ret_value__12057__auto__ = (function (){try{while(true){
var result__12058__auto__ = switch__12055__auto__(state_24493);
if(cljs.core.keyword_identical_QMARK_(result__12058__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12058__auto__;
}
break;
}
}catch (e24504){if((e24504 instanceof Object)){
var ex__12059__auto__ = e24504;
var statearr_24505_24512 = state_24493;
(statearr_24505_24512[(5)] = ex__12059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24493);

return cljs.core.constant$keyword$127;
} else {
throw e24504;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12057__auto__,cljs.core.constant$keyword$127)){
var G__24513 = state_24493;
state_24493 = G__24513;
continue;
} else {
return ret_value__12057__auto__;
}
break;
}
});
state_machine__12056__auto__ = function(state_24493){
switch(arguments.length){
case 0:
return state_machine__12056__auto____0.call(this);
case 1:
return state_machine__12056__auto____1.call(this,state_24493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12056__auto____0;
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12056__auto____1;
return state_machine__12056__auto__;
})()
;})(switch__12055__auto__,c__12070__auto___24507,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__24481,map__24481__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method))
})();
var state__12072__auto__ = (function (){var statearr_24506 = (function (){return (f__12071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12071__auto__.cljs$core$IFn$_invoke$arity$0() : f__12071__auto__.call(null));
})();
(statearr_24506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12070__auto___24507);

return statearr_24506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12072__auto__);
});})(c__12070__auto___24507,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__24481,map__24481__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method))
);

} else {
}

return channel;
});
