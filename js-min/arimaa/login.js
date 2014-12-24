// Compiled by ClojureScript 0.0-2511
goog.provide('arimaa.login');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('arimaa.state');
goog.require('arimaa.requests');
arimaa.login.login = (function login(username_input,password,login_error){
var c__11819__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11819__auto__){
return (function (){
var f__11820__auto__ = (function (){var switch__11739__auto__ = ((function (c__11819__auto__){
return (function (state_15776){
var state_val_15777 = (state_15776[(1)]);
if((state_val_15777 === (5))){
var inst_15774 = (state_15776[(2)]);
var state_15776__$1 = state_15776;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15776__$1,inst_15774);
} else {
if((state_val_15777 === (4))){
var inst_15762 = (state_15776[(7)]);
var inst_15768 = (function (){var G__15778 = arimaa.state.username;
var G__15779 = username_input;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15778,G__15779) : cljs.core.reset_BANG_.call(null,G__15778,G__15779));
})();
var inst_15769 = cljs.core.constant$keyword$197.cljs$core$IFn$_invoke$arity$1(inst_15762);
var inst_15770 = (function (){var G__15780 = arimaa.state.session_id;
var G__15781 = inst_15769;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15780,G__15781) : cljs.core.reset_BANG_.call(null,G__15780,G__15781));
})();
var inst_15771 = cljs.core.constant$keyword$206.cljs$core$IFn$_invoke$arity$1(inst_15762);
var inst_15772 = (function (){var G__15782 = arimaa.state.gameroom_id;
var G__15783 = inst_15771;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15782,G__15783) : cljs.core.reset_BANG_.call(null,G__15782,G__15783));
})();
var state_15776__$1 = (function (){var statearr_15784 = state_15776;
(statearr_15784[(8)] = inst_15768);

(statearr_15784[(9)] = inst_15770);

return statearr_15784;
})();
var statearr_15785_15799 = state_15776__$1;
(statearr_15785_15799[(2)] = inst_15772);

(statearr_15785_15799[(1)] = (5));


return cljs.core.constant$keyword$58;
} else {
if((state_val_15777 === (3))){
var inst_15762 = (state_15776[(7)]);
var inst_15765 = cljs.core.constant$keyword$193.cljs$core$IFn$_invoke$arity$1(inst_15762);
var inst_15766 = (function (){var G__15786 = login_error;
var G__15787 = inst_15765;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15786,G__15787) : cljs.core.reset_BANG_.call(null,G__15786,G__15787));
})();
var state_15776__$1 = state_15776;
var statearr_15788_15800 = state_15776__$1;
(statearr_15788_15800[(2)] = inst_15766);

(statearr_15788_15800[(1)] = (5));


return cljs.core.constant$keyword$58;
} else {
if((state_val_15777 === (2))){
var inst_15762 = (state_15776[(7)]);
var inst_15762__$1 = (state_15776[(2)]);
var inst_15763 = cljs.core.constant$keyword$193.cljs$core$IFn$_invoke$arity$1(inst_15762__$1);
var state_15776__$1 = (function (){var statearr_15789 = state_15776;
(statearr_15789[(7)] = inst_15762__$1);

return statearr_15789;
})();
if(cljs.core.truth_(inst_15763)){
var statearr_15790_15801 = state_15776__$1;
(statearr_15790_15801[(1)] = (3));

} else {
var statearr_15791_15802 = state_15776__$1;
(statearr_15791_15802[(1)] = (4));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_15777 === (1))){
var inst_15760 = arimaa.requests.login(username_input,password);
var state_15776__$1 = state_15776;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15776__$1,(2),inst_15760);
} else {
return null;
}
}
}
}
}
});})(c__11819__auto__))
;
return ((function (switch__11739__auto__,c__11819__auto__){
return (function() {
var state_machine__11740__auto__ = null;
var state_machine__11740__auto____0 = (function (){
var statearr_15795 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15795[(0)] = state_machine__11740__auto__);

(statearr_15795[(1)] = (1));

return statearr_15795;
});
var state_machine__11740__auto____1 = (function (state_15776){
while(true){
var ret_value__11741__auto__ = (function (){try{while(true){
var result__11742__auto__ = switch__11739__auto__(state_15776);
if(cljs.core.keyword_identical_QMARK_(result__11742__auto__,cljs.core.constant$keyword$58)){
continue;
} else {
return result__11742__auto__;
}
break;
}
}catch (e15796){if((e15796 instanceof Object)){
var ex__11743__auto__ = e15796;
var statearr_15797_15803 = state_15776;
(statearr_15797_15803[(5)] = ex__11743__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15776);

return cljs.core.constant$keyword$58;
} else {
throw e15796;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11741__auto__,cljs.core.constant$keyword$58)){
var G__15804 = state_15776;
state_15776 = G__15804;
continue;
} else {
return ret_value__11741__auto__;
}
break;
}
});
state_machine__11740__auto__ = function(state_15776){
switch(arguments.length){
case 0:
return state_machine__11740__auto____0.call(this);
case 1:
return state_machine__11740__auto____1.call(this,state_15776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11740__auto____0;
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11740__auto____1;
return state_machine__11740__auto__;
})()
;})(switch__11739__auto__,c__11819__auto__))
})();
var state__11821__auto__ = (function (){var statearr_15798 = (function (){return (f__11820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11820__auto__.cljs$core$IFn$_invoke$arity$0() : f__11820__auto__.call(null));
})();
(statearr_15798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11819__auto__);

return statearr_15798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11821__auto__);
});})(c__11819__auto__))
);

return c__11819__auto__;
});
arimaa.login.username_input_view = (function username_input_view(username_input,login){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$207,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$208,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,"username"], null),"Username"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$209,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$138,"username",cljs.core.constant$keyword$210,(function (){var G__15810 = username_input;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15810) : cljs.core.deref.call(null,G__15810));
})(),cljs.core.constant$keyword$115,"text",cljs.core.constant$keyword$211,(function (p1__15805_SHARP_){
var G__15811 = username_input;
var G__15812 = p1__15805_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15811,G__15812) : cljs.core.reset_BANG_.call(null,G__15811,G__15812));
}),cljs.core.constant$keyword$212,(function (p1__15806_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__15806_SHARP_.keyCode,(13))){
return (login.cljs$core$IFn$_invoke$arity$0 ? login.cljs$core$IFn$_invoke$arity$0() : login.call(null));
} else {
return null;
}
})], null)], null)], null);
});
arimaa.login.focused_username_input_view = cljs.core.with_meta(arimaa.login.username_input_view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$213,(function (p1__15813_SHARP_){
return reagent.core.dom_node(p1__15813_SHARP_).focus();
})], null));
arimaa.login.login_view = (function login_view(){
var username_input = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var password = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var login_error = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var login = ((function (username_input,password,login_error){
return (function (){
return arimaa.login.login((function (){var G__15824 = username_input;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15824) : cljs.core.deref.call(null,G__15824));
})(),(function (){var G__15825 = password;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15825) : cljs.core.deref.call(null,G__15825));
})(),(function (){var G__15826 = login_error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15826) : cljs.core.deref.call(null,G__15826));
})());
});})(username_input,password,login_error))
;
return ((function (username_input,password,login_error,login){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$214,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.login.focused_username_input_view,username_input,login], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$207,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$208,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,"password"], null),"Password"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$209,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$138,"password",cljs.core.constant$keyword$210,(function (){var G__15827 = password;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15827) : cljs.core.deref.call(null,G__15827));
})(),cljs.core.constant$keyword$115,"password",cljs.core.constant$keyword$211,((function (username_input,password,login_error,login){
return (function (p1__15814_SHARP_){
var G__15828 = password;
var G__15829 = p1__15814_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15828,G__15829) : cljs.core.reset_BANG_.call(null,G__15828,G__15829));
});})(username_input,password,login_error,login))
,cljs.core.constant$keyword$212,((function (username_input,password,login_error,login){
return (function (p1__15815_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__15815_SHARP_.keyCode,(13))){
return login();
} else {
return null;
}
});})(username_input,password,login_error,login))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$207,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$215,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$216,login], null),"Login"], null)], null),(cljs.core.truth_((function (){var G__15830 = login_error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15830) : cljs.core.deref.call(null,G__15830));
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$217,(function (){var G__15831 = login_error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15831) : cljs.core.deref.call(null,G__15831));
})()], null):null)], null);
});
;})(username_input,password,login_error,login))
});
