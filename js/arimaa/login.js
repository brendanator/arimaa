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
return (function (state_16763){
var state_val_16764 = (state_16763[(1)]);
if((state_val_16764 === (5))){
var inst_16761 = (state_16763[(2)]);
var state_16763__$1 = state_16763;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16763__$1,inst_16761);
} else {
if((state_val_16764 === (4))){
var inst_16749 = (state_16763[(7)]);
var inst_16755 = (function (){var G__16765 = arimaa.state.username;
var G__16766 = username_input;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16765,G__16766) : cljs.core.reset_BANG_.call(null,G__16765,G__16766));
})();
var inst_16756 = cljs.core.constant$keyword$222.cljs$core$IFn$_invoke$arity$1(inst_16749);
var inst_16757 = (function (){var G__16767 = arimaa.state.session_id;
var G__16768 = inst_16756;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16767,G__16768) : cljs.core.reset_BANG_.call(null,G__16767,G__16768));
})();
var inst_16758 = cljs.core.constant$keyword$225.cljs$core$IFn$_invoke$arity$1(inst_16749);
var inst_16759 = (function (){var G__16769 = arimaa.state.gameroom_id;
var G__16770 = inst_16758;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16769,G__16770) : cljs.core.reset_BANG_.call(null,G__16769,G__16770));
})();
var state_16763__$1 = (function (){var statearr_16771 = state_16763;
(statearr_16771[(8)] = inst_16757);

(statearr_16771[(9)] = inst_16755);

return statearr_16771;
})();
var statearr_16772_16786 = state_16763__$1;
(statearr_16772_16786[(2)] = inst_16759);

(statearr_16772_16786[(1)] = (5));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16764 === (3))){
var inst_16749 = (state_16763[(7)]);
var inst_16752 = cljs.core.constant$keyword$218.cljs$core$IFn$_invoke$arity$1(inst_16749);
var inst_16753 = (function (){var G__16773 = login_error;
var G__16774 = inst_16752;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16773,G__16774) : cljs.core.reset_BANG_.call(null,G__16773,G__16774));
})();
var state_16763__$1 = state_16763;
var statearr_16775_16787 = state_16763__$1;
(statearr_16775_16787[(2)] = inst_16753);

(statearr_16775_16787[(1)] = (5));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16764 === (2))){
var inst_16749 = (state_16763[(7)]);
var inst_16749__$1 = (state_16763[(2)]);
var inst_16750 = cljs.core.constant$keyword$218.cljs$core$IFn$_invoke$arity$1(inst_16749__$1);
var state_16763__$1 = (function (){var statearr_16776 = state_16763;
(statearr_16776[(7)] = inst_16749__$1);

return statearr_16776;
})();
if(cljs.core.truth_(inst_16750)){
var statearr_16777_16788 = state_16763__$1;
(statearr_16777_16788[(1)] = (3));

} else {
var statearr_16778_16789 = state_16763__$1;
(statearr_16778_16789[(1)] = (4));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_16764 === (1))){
var inst_16747 = arimaa.requests.login(username_input,password);
var state_16763__$1 = state_16763;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16763__$1,(2),inst_16747);
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
var statearr_16782 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16782[(0)] = state_machine__5839__auto__);

(statearr_16782[(1)] = (1));

return statearr_16782;
});
var state_machine__5839__auto____1 = (function (state_16763){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_16763);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e16783){if((e16783 instanceof Object)){
var ex__5842__auto__ = e16783;
var statearr_16784_16790 = state_16763;
(statearr_16784_16790[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16763);

return cljs.core.constant$keyword$41;
} else {
throw e16783;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__16791 = state_16763;
state_16763 = G__16791;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_16763){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_16763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto__))
})();
var state__5855__auto__ = (function (){var statearr_16785 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_16785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto__);

return statearr_16785;
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
return arimaa.login.login((function (){var G__16807 = username_input;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16807) : cljs.core.deref.call(null,G__16807));
})(),(function (){var G__16808 = password;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16808) : cljs.core.deref.call(null,G__16808));
})(),(function (){var G__16809 = login_error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16809) : cljs.core.deref.call(null,G__16809));
})());
});})(username_input,password,login_error))
;
return ((function (username_input,password,login_error,login){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$291,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$244,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$292,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,"username"], null),"Username"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.utils.initial_focus_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$259,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$163,"username",cljs.core.constant$keyword$260,(function (){var G__16810 = username_input;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16810) : cljs.core.deref.call(null,G__16810));
})(),cljs.core.constant$keyword$140,"text",cljs.core.constant$keyword$261,((function (username_input,password,login_error,login){
return (function (p1__16792_SHARP_){
var G__16811 = username_input;
var G__16812 = p1__16792_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16811,G__16812) : cljs.core.reset_BANG_.call(null,G__16811,G__16812));
});})(username_input,password,login_error,login))
,cljs.core.constant$keyword$262,((function (username_input,password,login_error,login){
return (function (p1__16793_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16793_SHARP_.keyCode,(13))){
return login();
} else {
return null;
}
});})(username_input,password,login_error,login))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$244,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$292,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,"password"], null),"Password"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$259,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$163,"password",cljs.core.constant$keyword$260,(function (){var G__16813 = password;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16813) : cljs.core.deref.call(null,G__16813));
})(),cljs.core.constant$keyword$140,"password",cljs.core.constant$keyword$261,((function (username_input,password,login_error,login){
return (function (p1__16794_SHARP_){
var G__16814 = password;
var G__16815 = p1__16794_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16814,G__16815) : cljs.core.reset_BANG_.call(null,G__16814,G__16815));
});})(username_input,password,login_error,login))
,cljs.core.constant$keyword$262,((function (username_input,password,login_error,login){
return (function (p1__16795_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16795_SHARP_.keyCode,(13))){
return login();
} else {
return null;
}
});})(username_input,password,login_error,login))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$244,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$257,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$258,login], null),"Login"], null)], null),(cljs.core.truth_((function (){var G__16816 = login_error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16816) : cljs.core.deref.call(null,G__16816));
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$293,(function (){var G__16817 = login_error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16817) : cljs.core.deref.call(null,G__16817));
})()], null):null)], null);
});
;})(username_input,password,login_error,login))
});
