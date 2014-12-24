// Compiled by ClojureScript 0.0-2511
goog.provide('arimaa.login');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('arimaa.utils');
goog.require('arimaa.state');
goog.require('arimaa.requests');
arimaa.login.login = (function login(username_input,password,login_error){
var c__5853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto__){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto__){
return (function (state_16062){
var state_val_16063 = (state_16062[(1)]);
if((state_val_16063 === (5))){
var inst_16060 = (state_16062[(2)]);
var state_16062__$1 = state_16062;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16062__$1,inst_16060);
} else {
if((state_val_16063 === (4))){
var inst_16048 = (state_16062[(7)]);
var inst_16054 = (function (){var G__16064 = arimaa.state.username;
var G__16065 = username_input;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16064,G__16065) : cljs.core.reset_BANG_.call(null,G__16064,G__16065));
})();
var inst_16055 = cljs.core.constant$keyword$197.cljs$core$IFn$_invoke$arity$1(inst_16048);
var inst_16056 = (function (){var G__16066 = arimaa.state.session_id;
var G__16067 = inst_16055;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16066,G__16067) : cljs.core.reset_BANG_.call(null,G__16066,G__16067));
})();
var inst_16057 = cljs.core.constant$keyword$245.cljs$core$IFn$_invoke$arity$1(inst_16048);
var inst_16058 = (function (){var G__16068 = arimaa.state.gameroom_id;
var G__16069 = inst_16057;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16068,G__16069) : cljs.core.reset_BANG_.call(null,G__16068,G__16069));
})();
var state_16062__$1 = (function (){var statearr_16070 = state_16062;
(statearr_16070[(8)] = inst_16054);

(statearr_16070[(9)] = inst_16056);

return statearr_16070;
})();
var statearr_16071_16085 = state_16062__$1;
(statearr_16071_16085[(2)] = inst_16058);

(statearr_16071_16085[(1)] = (5));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16063 === (3))){
var inst_16048 = (state_16062[(7)]);
var inst_16051 = cljs.core.constant$keyword$193.cljs$core$IFn$_invoke$arity$1(inst_16048);
var inst_16052 = (function (){var G__16072 = login_error;
var G__16073 = inst_16051;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16072,G__16073) : cljs.core.reset_BANG_.call(null,G__16072,G__16073));
})();
var state_16062__$1 = state_16062;
var statearr_16074_16086 = state_16062__$1;
(statearr_16074_16086[(2)] = inst_16052);

(statearr_16074_16086[(1)] = (5));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16063 === (2))){
var inst_16048 = (state_16062[(7)]);
var inst_16048__$1 = (state_16062[(2)]);
var inst_16049 = cljs.core.constant$keyword$193.cljs$core$IFn$_invoke$arity$1(inst_16048__$1);
var state_16062__$1 = (function (){var statearr_16075 = state_16062;
(statearr_16075[(7)] = inst_16048__$1);

return statearr_16075;
})();
if(cljs.core.truth_(inst_16049)){
var statearr_16076_16087 = state_16062__$1;
(statearr_16076_16087[(1)] = (3));

} else {
var statearr_16077_16088 = state_16062__$1;
(statearr_16077_16088[(1)] = (4));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_16063 === (1))){
var inst_16046 = arimaa.requests.login(username_input,password);
var state_16062__$1 = state_16062;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16062__$1,(2),inst_16046);
} else {
return null;
}
}
}
}
}
});})(c__5853__auto__))
;
return ((function (switch__5838__auto__,c__5853__auto__){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_16081 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16081[(0)] = state_machine__5839__auto__);

(statearr_16081[(1)] = (1));

return statearr_16081;
});
var state_machine__5839__auto____1 = (function (state_16062){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_16062);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e16082){if((e16082 instanceof Object)){
var ex__5842__auto__ = e16082;
var statearr_16083_16089 = state_16062;
(statearr_16083_16089[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16062);

return cljs.core.constant$keyword$41;
} else {
throw e16082;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__16090 = state_16062;
state_16062 = G__16090;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_16062){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_16062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto__))
})();
var state__5855__auto__ = (function (){var statearr_16084 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_16084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto__);

return statearr_16084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto__))
);

return c__5853__auto__;
});
arimaa.login.login_view = (function login_view(){
var username_input = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var password = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var login_error = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var login = ((function (username_input,password,login_error){
return (function (){
return arimaa.login.login((function (){var G__16106 = username_input;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16106) : cljs.core.deref.call(null,G__16106));
})(),(function (){var G__16107 = password;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16107) : cljs.core.deref.call(null,G__16107));
})(),(function (){var G__16108 = login_error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16108) : cljs.core.deref.call(null,G__16108));
})());
});})(username_input,password,login_error))
;
return ((function (username_input,password,login_error,login){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$209,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,"username"], null),"Username"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.utils.initial_focus_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$223,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$138,"username",cljs.core.constant$keyword$224,(function (){var G__16109 = username_input;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16109) : cljs.core.deref.call(null,G__16109));
})(),cljs.core.constant$keyword$115,"text",cljs.core.constant$keyword$225,((function (username_input,password,login_error,login){
return (function (p1__16091_SHARP_){
var G__16110 = username_input;
var G__16111 = p1__16091_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16110,G__16111) : cljs.core.reset_BANG_.call(null,G__16110,G__16111));
});})(username_input,password,login_error,login))
,cljs.core.constant$keyword$226,((function (username_input,password,login_error,login){
return (function (p1__16092_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16092_SHARP_.keyCode,(13))){
return login();
} else {
return null;
}
});})(username_input,password,login_error,login))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$209,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,"password"], null),"Password"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$223,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$138,"password",cljs.core.constant$keyword$224,(function (){var G__16112 = password;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16112) : cljs.core.deref.call(null,G__16112));
})(),cljs.core.constant$keyword$115,"password",cljs.core.constant$keyword$225,((function (username_input,password,login_error,login){
return (function (p1__16093_SHARP_){
var G__16113 = password;
var G__16114 = p1__16093_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16113,G__16114) : cljs.core.reset_BANG_.call(null,G__16113,G__16114));
});})(username_input,password,login_error,login))
,cljs.core.constant$keyword$226,((function (username_input,password,login_error,login){
return (function (p1__16094_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16094_SHARP_.keyCode,(13))){
return login();
} else {
return null;
}
});})(username_input,password,login_error,login))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$209,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$221,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$222,login], null),"Login"], null)], null),(cljs.core.truth_((function (){var G__16115 = login_error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16115) : cljs.core.deref.call(null,G__16115));
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$248,(function (){var G__16116 = login_error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16116) : cljs.core.deref.call(null,G__16116));
})()], null):null)], null);
});
;})(username_input,password,login_error,login))
});
