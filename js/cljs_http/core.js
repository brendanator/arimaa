// Compiled by ClojureScript 0.0-2727 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.EventType');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = (function (){var G__25082 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25082) : cljs.core.atom.call(null,G__25082));
})();
/**
* Attempt to close the given channel and abort the pending HTTP request
* with which it is associated.
*/
cljs_http.core.abort_BANG_ = (function abort_BANG_(channel){
var temp__4126__auto__ = (function (){var G__25084 = cljs_http.core.pending_requests;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25084) : cljs.core.deref.call(null,G__25084));
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
cljs_http.core.request = (function request(p__25085){
var map__25112 = p__25085;
var map__25112__$1 = ((cljs.core.seq_QMARK_(map__25112))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25112):map__25112);
var request__$1 = map__25112__$1;
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25112__$1,cljs.core.constant$keyword$193);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25112__$1,cljs.core.constant$keyword$194);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25112__$1,cljs.core.constant$keyword$195);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25112__$1,cljs.core.constant$keyword$196);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25112__$1,cljs.core.constant$keyword$197);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request__$1);
var method = cljs.core.name((function (){var or__3750__auto__ = request_method;
if(cljs.core.truth_(or__3750__auto__)){
return or__3750__auto__;
} else {
return cljs.core.constant$keyword$198;
}
})());
var timeout = (function (){var or__3750__auto__ = cljs.core.constant$keyword$199.cljs$core$IFn$_invoke$arity$1(request__$1);
if(cljs.core.truth_(or__3750__auto__)){
return or__3750__auto__;
} else {
return (0);
}
})();
var headers__$1 = cljs_http.util.build_headers(headers);
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var xhr = (function (){var G__25113 = (new goog.net.XhrIo());
G__25113.setTimeoutInterval(timeout);

G__25113.setWithCredentials(send_credentials);

return G__25113;
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__25112,map__25112__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method){
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
});})(channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__25112,map__25112__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method))
);

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__12182__auto___25138 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12182__auto___25138,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__25112,map__25112__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (){
var f__12183__auto__ = (function (){var switch__12167__auto__ = ((function (c__12182__auto___25138,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__25112,map__25112__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (state_25124){
var state_val_25125 = (state_25124[(1)]);
if((state_val_25125 === (5))){
var inst_25122 = (state_25124[(2)]);
var state_25124__$1 = state_25124;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25124__$1,inst_25122);
} else {
if((state_val_25125 === (4))){
var state_25124__$1 = state_25124;
var statearr_25126_25139 = state_25124__$1;
(statearr_25126_25139[(2)] = null);

(statearr_25126_25139[(1)] = (5));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25125 === (3))){
var inst_25119 = xhr.abort();
var state_25124__$1 = state_25124;
var statearr_25127_25140 = state_25124__$1;
(statearr_25127_25140[(2)] = inst_25119);

(statearr_25127_25140[(1)] = (5));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25125 === (2))){
var inst_25115 = (state_25124[(2)]);
var inst_25116 = xhr.isComplete();
var inst_25117 = cljs.core.not(inst_25116);
var state_25124__$1 = (function (){var statearr_25128 = state_25124;
(statearr_25128[(7)] = inst_25115);

return statearr_25128;
})();
if(inst_25117){
var statearr_25129_25141 = state_25124__$1;
(statearr_25129_25141[(1)] = (3));

} else {
var statearr_25130_25142 = state_25124__$1;
(statearr_25130_25142[(1)] = (4));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_25125 === (1))){
var state_25124__$1 = state_25124;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25124__$1,(2),cancel);
} else {
return null;
}
}
}
}
}
});})(c__12182__auto___25138,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__25112,map__25112__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method))
;
return ((function (switch__12167__auto__,c__12182__auto___25138,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__25112,map__25112__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function() {
var state_machine__12168__auto__ = null;
var state_machine__12168__auto____0 = (function (){
var statearr_25134 = [null,null,null,null,null,null,null,null];
(statearr_25134[(0)] = state_machine__12168__auto__);

(statearr_25134[(1)] = (1));

return statearr_25134;
});
var state_machine__12168__auto____1 = (function (state_25124){
while(true){
var ret_value__12169__auto__ = (function (){try{while(true){
var result__12170__auto__ = switch__12167__auto__(state_25124);
if(cljs.core.keyword_identical_QMARK_(result__12170__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12170__auto__;
}
break;
}
}catch (e25135){if((e25135 instanceof Object)){
var ex__12171__auto__ = e25135;
var statearr_25136_25143 = state_25124;
(statearr_25136_25143[(5)] = ex__12171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25124);

return cljs.core.constant$keyword$127;
} else {
throw e25135;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12169__auto__,cljs.core.constant$keyword$127)){
var G__25144 = state_25124;
state_25124 = G__25144;
continue;
} else {
return ret_value__12169__auto__;
}
break;
}
});
state_machine__12168__auto__ = function(state_25124){
switch(arguments.length){
case 0:
return state_machine__12168__auto____0.call(this);
case 1:
return state_machine__12168__auto____1.call(this,state_25124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12168__auto____0;
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12168__auto____1;
return state_machine__12168__auto__;
})()
;})(switch__12167__auto__,c__12182__auto___25138,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__25112,map__25112__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method))
})();
var state__12184__auto__ = (function (){var statearr_25137 = (function (){return (f__12183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12183__auto__.cljs$core$IFn$_invoke$arity$0() : f__12183__auto__.call(null));
})();
(statearr_25137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12182__auto___25138);

return statearr_25137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12184__auto__);
});})(c__12182__auto___25138,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__25112,map__25112__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method))
);

} else {
}

return channel;
});
