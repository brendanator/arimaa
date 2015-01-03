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
return (function (state_16048){
var state_val_16049 = (state_16048[(1)]);
if((state_val_16049 === (5))){
var inst_16046 = (state_16048[(2)]);
var state_16048__$1 = state_16048;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16048__$1,inst_16046);
} else {
if((state_val_16049 === (4))){
var inst_16034 = (state_16048[(7)]);
var inst_16040 = (function (){var G__16050 = arimaa.state.username;
var G__16051 = username_input;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16050,G__16051) : cljs.core.reset_BANG_.call(null,G__16050,G__16051));
})();
var inst_16041 = cljs.core.constant$keyword$225.cljs$core$IFn$_invoke$arity$1(inst_16034);
var inst_16042 = (function (){var G__16052 = arimaa.state.session_id;
var G__16053 = inst_16041;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16052,G__16053) : cljs.core.reset_BANG_.call(null,G__16052,G__16053));
})();
var inst_16043 = cljs.core.constant$keyword$228.cljs$core$IFn$_invoke$arity$1(inst_16034);
var inst_16044 = (function (){var G__16054 = arimaa.state.gameroom_id;
var G__16055 = inst_16043;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16054,G__16055) : cljs.core.reset_BANG_.call(null,G__16054,G__16055));
})();
var state_16048__$1 = (function (){var statearr_16056 = state_16048;
(statearr_16056[(8)] = inst_16042);

(statearr_16056[(9)] = inst_16040);

return statearr_16056;
})();
var statearr_16057_16071 = state_16048__$1;
(statearr_16057_16071[(2)] = inst_16044);

(statearr_16057_16071[(1)] = (5));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16049 === (3))){
var inst_16034 = (state_16048[(7)]);
var inst_16037 = cljs.core.constant$keyword$221.cljs$core$IFn$_invoke$arity$1(inst_16034);
var inst_16038 = (function (){var G__16058 = login_error;
var G__16059 = inst_16037;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16058,G__16059) : cljs.core.reset_BANG_.call(null,G__16058,G__16059));
})();
var state_16048__$1 = state_16048;
var statearr_16060_16072 = state_16048__$1;
(statearr_16060_16072[(2)] = inst_16038);

(statearr_16060_16072[(1)] = (5));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16049 === (2))){
var inst_16034 = (state_16048[(7)]);
var inst_16034__$1 = (state_16048[(2)]);
var inst_16035 = cljs.core.constant$keyword$221.cljs$core$IFn$_invoke$arity$1(inst_16034__$1);
var state_16048__$1 = (function (){var statearr_16061 = state_16048;
(statearr_16061[(7)] = inst_16034__$1);

return statearr_16061;
})();
if(cljs.core.truth_(inst_16035)){
var statearr_16062_16073 = state_16048__$1;
(statearr_16062_16073[(1)] = (3));

} else {
var statearr_16063_16074 = state_16048__$1;
(statearr_16063_16074[(1)] = (4));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_16049 === (1))){
var inst_16032 = arimaa.requests.login(username_input,password);
var state_16048__$1 = state_16048;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16048__$1,(2),inst_16032);
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
var statearr_16067 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16067[(0)] = state_machine__5839__auto__);

(statearr_16067[(1)] = (1));

return statearr_16067;
});
var state_machine__5839__auto____1 = (function (state_16048){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_16048);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e16068){if((e16068 instanceof Object)){
var ex__5842__auto__ = e16068;
var statearr_16069_16075 = state_16048;
(statearr_16069_16075[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16048);

return cljs.core.constant$keyword$41;
} else {
throw e16068;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__16076 = state_16048;
state_16048 = G__16076;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_16048){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_16048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto__))
})();
var state__5855__auto__ = (function (){var statearr_16070 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_16070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto__);

return statearr_16070;
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
return arimaa.login.login((function (){var G__16092 = username_input;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16092) : cljs.core.deref.call(null,G__16092));
})(),(function (){var G__16093 = password;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16093) : cljs.core.deref.call(null,G__16093));
})(),(function (){var G__16094 = login_error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16094) : cljs.core.deref.call(null,G__16094));
})());
});})(username_input,password,login_error))
;
return ((function (username_input,password,login_error,login){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$244,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,"username"], null),"Username"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.utils.initial_focus_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$166,"username",cljs.core.constant$keyword$246,(function (){var G__16095 = username_input;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16095) : cljs.core.deref.call(null,G__16095));
})(),cljs.core.constant$keyword$143,"text",cljs.core.constant$keyword$247,((function (username_input,password,login_error,login){
return (function (p1__16077_SHARP_){
var G__16096 = username_input;
var G__16097 = p1__16077_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16096,G__16097) : cljs.core.reset_BANG_.call(null,G__16096,G__16097));
});})(username_input,password,login_error,login))
,cljs.core.constant$keyword$248,((function (username_input,password,login_error,login){
return (function (p1__16078_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16078_SHARP_.keyCode,(13))){
return login();
} else {
return null;
}
});})(username_input,password,login_error,login))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$244,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,"password"], null),"Password"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$166,"password",cljs.core.constant$keyword$246,(function (){var G__16098 = password;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16098) : cljs.core.deref.call(null,G__16098));
})(),cljs.core.constant$keyword$143,"password",cljs.core.constant$keyword$247,((function (username_input,password,login_error,login){
return (function (p1__16079_SHARP_){
var G__16099 = password;
var G__16100 = p1__16079_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16099,G__16100) : cljs.core.reset_BANG_.call(null,G__16099,G__16100));
});})(username_input,password,login_error,login))
,cljs.core.constant$keyword$248,((function (username_input,password,login_error,login){
return (function (p1__16080_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16080_SHARP_.keyCode,(13))){
return login();
} else {
return null;
}
});})(username_input,password,login_error,login))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$249,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$250,login], null),"Login"], null)], null),(cljs.core.truth_((function (){var G__16101 = login_error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16101) : cljs.core.deref.call(null,G__16101));
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$251,(function (){var G__16102 = login_error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16102) : cljs.core.deref.call(null,G__16102));
})()], null):null)], null);
});
;})(username_input,password,login_error,login))
});
