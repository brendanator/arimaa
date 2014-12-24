// Compiled by ClojureScript 0.0-2511
goog.provide('arimaa.login');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('arimaa.utils');
goog.require('arimaa.state');
goog.require('arimaa.requests');
arimaa.login.login = (function login(username_input,password,login_error){
var c__11826__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11826__auto__){
return (function (){
var f__11827__auto__ = (function (){var switch__11746__auto__ = ((function (c__11826__auto__){
return (function (state_15783){
var state_val_15784 = (state_15783[(1)]);
if((state_val_15784 === (5))){
var inst_15781 = (state_15783[(2)]);
var state_15783__$1 = state_15783;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15783__$1,inst_15781);
} else {
if((state_val_15784 === (4))){
var inst_15769 = (state_15783[(7)]);
var inst_15775 = (function (){var G__15785 = arimaa.state.username;
var G__15786 = username_input;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15785,G__15786) : cljs.core.reset_BANG_.call(null,G__15785,G__15786));
})();
var inst_15776 = cljs.core.constant$keyword$200.cljs$core$IFn$_invoke$arity$1(inst_15769);
var inst_15777 = (function (){var G__15787 = arimaa.state.session_id;
var G__15788 = inst_15776;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15787,G__15788) : cljs.core.reset_BANG_.call(null,G__15787,G__15788));
})();
var inst_15778 = cljs.core.constant$keyword$209.cljs$core$IFn$_invoke$arity$1(inst_15769);
var inst_15779 = (function (){var G__15789 = arimaa.state.gameroom_id;
var G__15790 = inst_15778;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15789,G__15790) : cljs.core.reset_BANG_.call(null,G__15789,G__15790));
})();
var state_15783__$1 = (function (){var statearr_15791 = state_15783;
(statearr_15791[(8)] = inst_15777);

(statearr_15791[(9)] = inst_15775);

return statearr_15791;
})();
var statearr_15792_15806 = state_15783__$1;
(statearr_15792_15806[(2)] = inst_15779);

(statearr_15792_15806[(1)] = (5));


return cljs.core.constant$keyword$61;
} else {
if((state_val_15784 === (3))){
var inst_15769 = (state_15783[(7)]);
var inst_15772 = cljs.core.constant$keyword$196.cljs$core$IFn$_invoke$arity$1(inst_15769);
var inst_15773 = (function (){var G__15793 = login_error;
var G__15794 = inst_15772;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15793,G__15794) : cljs.core.reset_BANG_.call(null,G__15793,G__15794));
})();
var state_15783__$1 = state_15783;
var statearr_15795_15807 = state_15783__$1;
(statearr_15795_15807[(2)] = inst_15773);

(statearr_15795_15807[(1)] = (5));


return cljs.core.constant$keyword$61;
} else {
if((state_val_15784 === (2))){
var inst_15769 = (state_15783[(7)]);
var inst_15769__$1 = (state_15783[(2)]);
var inst_15770 = cljs.core.constant$keyword$196.cljs$core$IFn$_invoke$arity$1(inst_15769__$1);
var state_15783__$1 = (function (){var statearr_15796 = state_15783;
(statearr_15796[(7)] = inst_15769__$1);

return statearr_15796;
})();
if(cljs.core.truth_(inst_15770)){
var statearr_15797_15808 = state_15783__$1;
(statearr_15797_15808[(1)] = (3));

} else {
var statearr_15798_15809 = state_15783__$1;
(statearr_15798_15809[(1)] = (4));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_15784 === (1))){
var inst_15767 = arimaa.requests.login(username_input,password);
var state_15783__$1 = state_15783;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15783__$1,(2),inst_15767);
} else {
return null;
}
}
}
}
}
});})(c__11826__auto__))
;
return ((function (switch__11746__auto__,c__11826__auto__){
return (function() {
var state_machine__11747__auto__ = null;
var state_machine__11747__auto____0 = (function (){
var statearr_15802 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15802[(0)] = state_machine__11747__auto__);

(statearr_15802[(1)] = (1));

return statearr_15802;
});
var state_machine__11747__auto____1 = (function (state_15783){
while(true){
var ret_value__11748__auto__ = (function (){try{while(true){
var result__11749__auto__ = switch__11746__auto__(state_15783);
if(cljs.core.keyword_identical_QMARK_(result__11749__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11749__auto__;
}
break;
}
}catch (e15803){if((e15803 instanceof Object)){
var ex__11750__auto__ = e15803;
var statearr_15804_15810 = state_15783;
(statearr_15804_15810[(5)] = ex__11750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15783);

return cljs.core.constant$keyword$61;
} else {
throw e15803;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11748__auto__,cljs.core.constant$keyword$61)){
var G__15811 = state_15783;
state_15783 = G__15811;
continue;
} else {
return ret_value__11748__auto__;
}
break;
}
});
state_machine__11747__auto__ = function(state_15783){
switch(arguments.length){
case 0:
return state_machine__11747__auto____0.call(this);
case 1:
return state_machine__11747__auto____1.call(this,state_15783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11747__auto____0;
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11747__auto____1;
return state_machine__11747__auto__;
})()
;})(switch__11746__auto__,c__11826__auto__))
})();
var state__11828__auto__ = (function (){var statearr_15805 = (function (){return (f__11827__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11827__auto__.cljs$core$IFn$_invoke$arity$0() : f__11827__auto__.call(null));
})();
(statearr_15805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11826__auto__);

return statearr_15805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11828__auto__);
});})(c__11826__auto__))
);

return c__11826__auto__;
});
arimaa.login.login_view = (function login_view(){
var username_input = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var password = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var login_error = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var login = ((function (username_input,password,login_error){
return (function (){
return arimaa.login.login((function (){var G__15827 = username_input;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15827) : cljs.core.deref.call(null,G__15827));
})(),(function (){var G__15828 = password;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15828) : cljs.core.deref.call(null,G__15828));
})(),(function (){var G__15829 = login_error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15829) : cljs.core.deref.call(null,G__15829));
})());
});})(username_input,password,login_error))
;
return ((function (username_input,password,login_error,login){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$210,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$211,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$212,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,"username"], null),"Username"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.utils.initial_focus_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$213,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$141,"username",cljs.core.constant$keyword$214,(function (){var G__15830 = username_input;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15830) : cljs.core.deref.call(null,G__15830));
})(),cljs.core.constant$keyword$118,"text",cljs.core.constant$keyword$215,((function (username_input,password,login_error,login){
return (function (p1__15812_SHARP_){
var G__15831 = username_input;
var G__15832 = p1__15812_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15831,G__15832) : cljs.core.reset_BANG_.call(null,G__15831,G__15832));
});})(username_input,password,login_error,login))
,cljs.core.constant$keyword$216,((function (username_input,password,login_error,login){
return (function (p1__15813_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__15813_SHARP_.keyCode,(13))){
return login();
} else {
return null;
}
});})(username_input,password,login_error,login))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$211,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$212,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,"password"], null),"Password"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$213,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$141,"password",cljs.core.constant$keyword$214,(function (){var G__15833 = password;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15833) : cljs.core.deref.call(null,G__15833));
})(),cljs.core.constant$keyword$118,"password",cljs.core.constant$keyword$215,((function (username_input,password,login_error,login){
return (function (p1__15814_SHARP_){
var G__15834 = password;
var G__15835 = p1__15814_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15834,G__15835) : cljs.core.reset_BANG_.call(null,G__15834,G__15835));
});})(username_input,password,login_error,login))
,cljs.core.constant$keyword$216,((function (username_input,password,login_error,login){
return (function (p1__15815_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__15815_SHARP_.keyCode,(13))){
return login();
} else {
return null;
}
});})(username_input,password,login_error,login))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$211,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$217,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$218,login], null),"Login"], null)], null),(cljs.core.truth_((function (){var G__15836 = login_error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15836) : cljs.core.deref.call(null,G__15836));
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$219,(function (){var G__15837 = login_error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15837) : cljs.core.deref.call(null,G__15837));
})()], null):null)], null);
});
;})(username_input,password,login_error,login))
});
