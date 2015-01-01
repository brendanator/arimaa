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
return (function (state_15911){
var state_val_15912 = (state_15911[(1)]);
if((state_val_15912 === (5))){
var inst_15909 = (state_15911[(2)]);
var state_15911__$1 = state_15911;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15911__$1,inst_15909);
} else {
if((state_val_15912 === (4))){
var inst_15897 = (state_15911[(7)]);
var inst_15903 = (function (){var G__15913 = arimaa.state.username;
var G__15914 = username_input;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15913,G__15914) : cljs.core.reset_BANG_.call(null,G__15913,G__15914));
})();
var inst_15904 = cljs.core.constant$keyword$200.cljs$core$IFn$_invoke$arity$1(inst_15897);
var inst_15905 = (function (){var G__15915 = arimaa.state.session_id;
var G__15916 = inst_15904;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15915,G__15916) : cljs.core.reset_BANG_.call(null,G__15915,G__15916));
})();
var inst_15906 = cljs.core.constant$keyword$203.cljs$core$IFn$_invoke$arity$1(inst_15897);
var inst_15907 = (function (){var G__15917 = arimaa.state.gameroom_id;
var G__15918 = inst_15906;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15917,G__15918) : cljs.core.reset_BANG_.call(null,G__15917,G__15918));
})();
var state_15911__$1 = (function (){var statearr_15919 = state_15911;
(statearr_15919[(8)] = inst_15905);

(statearr_15919[(9)] = inst_15903);

return statearr_15919;
})();
var statearr_15920_15934 = state_15911__$1;
(statearr_15920_15934[(2)] = inst_15907);

(statearr_15920_15934[(1)] = (5));


return cljs.core.constant$keyword$41;
} else {
if((state_val_15912 === (3))){
var inst_15897 = (state_15911[(7)]);
var inst_15900 = cljs.core.constant$keyword$196.cljs$core$IFn$_invoke$arity$1(inst_15897);
var inst_15901 = (function (){var G__15921 = login_error;
var G__15922 = inst_15900;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15921,G__15922) : cljs.core.reset_BANG_.call(null,G__15921,G__15922));
})();
var state_15911__$1 = state_15911;
var statearr_15923_15935 = state_15911__$1;
(statearr_15923_15935[(2)] = inst_15901);

(statearr_15923_15935[(1)] = (5));


return cljs.core.constant$keyword$41;
} else {
if((state_val_15912 === (2))){
var inst_15897 = (state_15911[(7)]);
var inst_15897__$1 = (state_15911[(2)]);
var inst_15898 = cljs.core.constant$keyword$196.cljs$core$IFn$_invoke$arity$1(inst_15897__$1);
var state_15911__$1 = (function (){var statearr_15924 = state_15911;
(statearr_15924[(7)] = inst_15897__$1);

return statearr_15924;
})();
if(cljs.core.truth_(inst_15898)){
var statearr_15925_15936 = state_15911__$1;
(statearr_15925_15936[(1)] = (3));

} else {
var statearr_15926_15937 = state_15911__$1;
(statearr_15926_15937[(1)] = (4));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_15912 === (1))){
var inst_15895 = arimaa.requests.login(username_input,password);
var state_15911__$1 = state_15911;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15911__$1,(2),inst_15895);
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
var statearr_15930 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15930[(0)] = state_machine__5839__auto__);

(statearr_15930[(1)] = (1));

return statearr_15930;
});
var state_machine__5839__auto____1 = (function (state_15911){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_15911);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e15931){if((e15931 instanceof Object)){
var ex__5842__auto__ = e15931;
var statearr_15932_15938 = state_15911;
(statearr_15932_15938[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15911);

return cljs.core.constant$keyword$41;
} else {
throw e15931;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__15939 = state_15911;
state_15911 = G__15939;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_15911){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_15911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto__))
})();
var state__5855__auto__ = (function (){var statearr_15933 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_15933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto__);

return statearr_15933;
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
return arimaa.login.login((function (){var G__15955 = username_input;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15955) : cljs.core.deref.call(null,G__15955));
})(),(function (){var G__15956 = password;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15956) : cljs.core.deref.call(null,G__15956));
})(),(function (){var G__15957 = login_error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15957) : cljs.core.deref.call(null,G__15957));
})());
});})(username_input,password,login_error))
;
return ((function (username_input,password,login_error,login){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$232,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$234,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,"username"], null),"Username"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.utils.initial_focus_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$235,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$141,"username",cljs.core.constant$keyword$236,(function (){var G__15958 = username_input;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15958) : cljs.core.deref.call(null,G__15958));
})(),cljs.core.constant$keyword$118,"text",cljs.core.constant$keyword$237,((function (username_input,password,login_error,login){
return (function (p1__15940_SHARP_){
var G__15959 = username_input;
var G__15960 = p1__15940_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15959,G__15960) : cljs.core.reset_BANG_.call(null,G__15959,G__15960));
});})(username_input,password,login_error,login))
,cljs.core.constant$keyword$238,((function (username_input,password,login_error,login){
return (function (p1__15941_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__15941_SHARP_.keyCode,(13))){
return login();
} else {
return null;
}
});})(username_input,password,login_error,login))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$234,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,"password"], null),"Password"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$235,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$141,"password",cljs.core.constant$keyword$236,(function (){var G__15961 = password;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15961) : cljs.core.deref.call(null,G__15961));
})(),cljs.core.constant$keyword$118,"password",cljs.core.constant$keyword$237,((function (username_input,password,login_error,login){
return (function (p1__15942_SHARP_){
var G__15962 = password;
var G__15963 = p1__15942_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15962,G__15963) : cljs.core.reset_BANG_.call(null,G__15962,G__15963));
});})(username_input,password,login_error,login))
,cljs.core.constant$keyword$238,((function (username_input,password,login_error,login){
return (function (p1__15943_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__15943_SHARP_.keyCode,(13))){
return login();
} else {
return null;
}
});})(username_input,password,login_error,login))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$239,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$240,login], null),"Login"], null)], null),(cljs.core.truth_((function (){var G__15964 = login_error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15964) : cljs.core.deref.call(null,G__15964));
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$241,(function (){var G__15965 = login_error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15965) : cljs.core.deref.call(null,G__15965));
})()], null):null)], null);
});
;})(username_input,password,login_error,login))
});
