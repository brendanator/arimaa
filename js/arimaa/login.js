// Compiled by ClojureScript 0.0-2511
goog.provide('arimaa.login');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('arimaa.utils');
goog.require('arimaa.state');
goog.require('arimaa.requests');
arimaa.login.login = (function login(username_input,password,login_error){
var c__11833__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11833__auto__){
return (function (){
var f__11834__auto__ = (function (){var switch__11753__auto__ = ((function (c__11833__auto__){
return (function (state_15822){
var state_val_15823 = (state_15822[(1)]);
if((state_val_15823 === (5))){
var inst_15820 = (state_15822[(2)]);
var state_15822__$1 = state_15822;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15822__$1,inst_15820);
} else {
if((state_val_15823 === (4))){
var inst_15808 = (state_15822[(7)]);
var inst_15814 = (function (){var G__15824 = arimaa.state.username;
var G__15825 = username_input;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15824,G__15825) : cljs.core.reset_BANG_.call(null,G__15824,G__15825));
})();
var inst_15815 = cljs.core.constant$keyword$200.cljs$core$IFn$_invoke$arity$1(inst_15808);
var inst_15816 = (function (){var G__15826 = arimaa.state.session_id;
var G__15827 = inst_15815;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15826,G__15827) : cljs.core.reset_BANG_.call(null,G__15826,G__15827));
})();
var inst_15817 = cljs.core.constant$keyword$203.cljs$core$IFn$_invoke$arity$1(inst_15808);
var inst_15818 = (function (){var G__15828 = arimaa.state.gameroom_id;
var G__15829 = inst_15817;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15828,G__15829) : cljs.core.reset_BANG_.call(null,G__15828,G__15829));
})();
var state_15822__$1 = (function (){var statearr_15830 = state_15822;
(statearr_15830[(8)] = inst_15816);

(statearr_15830[(9)] = inst_15814);

return statearr_15830;
})();
var statearr_15831_15845 = state_15822__$1;
(statearr_15831_15845[(2)] = inst_15818);

(statearr_15831_15845[(1)] = (5));


return cljs.core.constant$keyword$61;
} else {
if((state_val_15823 === (3))){
var inst_15808 = (state_15822[(7)]);
var inst_15811 = cljs.core.constant$keyword$196.cljs$core$IFn$_invoke$arity$1(inst_15808);
var inst_15812 = (function (){var G__15832 = login_error;
var G__15833 = inst_15811;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15832,G__15833) : cljs.core.reset_BANG_.call(null,G__15832,G__15833));
})();
var state_15822__$1 = state_15822;
var statearr_15834_15846 = state_15822__$1;
(statearr_15834_15846[(2)] = inst_15812);

(statearr_15834_15846[(1)] = (5));


return cljs.core.constant$keyword$61;
} else {
if((state_val_15823 === (2))){
var inst_15808 = (state_15822[(7)]);
var inst_15808__$1 = (state_15822[(2)]);
var inst_15809 = cljs.core.constant$keyword$196.cljs$core$IFn$_invoke$arity$1(inst_15808__$1);
var state_15822__$1 = (function (){var statearr_15835 = state_15822;
(statearr_15835[(7)] = inst_15808__$1);

return statearr_15835;
})();
if(cljs.core.truth_(inst_15809)){
var statearr_15836_15847 = state_15822__$1;
(statearr_15836_15847[(1)] = (3));

} else {
var statearr_15837_15848 = state_15822__$1;
(statearr_15837_15848[(1)] = (4));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_15823 === (1))){
var inst_15806 = arimaa.requests.login(username_input,password);
var state_15822__$1 = state_15822;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15822__$1,(2),inst_15806);
} else {
return null;
}
}
}
}
}
});})(c__11833__auto__))
;
return ((function (switch__11753__auto__,c__11833__auto__){
return (function() {
var state_machine__11754__auto__ = null;
var state_machine__11754__auto____0 = (function (){
var statearr_15841 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15841[(0)] = state_machine__11754__auto__);

(statearr_15841[(1)] = (1));

return statearr_15841;
});
var state_machine__11754__auto____1 = (function (state_15822){
while(true){
var ret_value__11755__auto__ = (function (){try{while(true){
var result__11756__auto__ = switch__11753__auto__(state_15822);
if(cljs.core.keyword_identical_QMARK_(result__11756__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11756__auto__;
}
break;
}
}catch (e15842){if((e15842 instanceof Object)){
var ex__11757__auto__ = e15842;
var statearr_15843_15849 = state_15822;
(statearr_15843_15849[(5)] = ex__11757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15822);

return cljs.core.constant$keyword$61;
} else {
throw e15842;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11755__auto__,cljs.core.constant$keyword$61)){
var G__15850 = state_15822;
state_15822 = G__15850;
continue;
} else {
return ret_value__11755__auto__;
}
break;
}
});
state_machine__11754__auto__ = function(state_15822){
switch(arguments.length){
case 0:
return state_machine__11754__auto____0.call(this);
case 1:
return state_machine__11754__auto____1.call(this,state_15822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11754__auto____0;
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11754__auto____1;
return state_machine__11754__auto__;
})()
;})(switch__11753__auto__,c__11833__auto__))
})();
var state__11835__auto__ = (function (){var statearr_15844 = (function (){return (f__11834__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11834__auto__.cljs$core$IFn$_invoke$arity$0() : f__11834__auto__.call(null));
})();
(statearr_15844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11833__auto__);

return statearr_15844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11835__auto__);
});})(c__11833__auto__))
);

return c__11833__auto__;
});
arimaa.login.login_view = (function login_view(){
var username_input = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var password = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var login_error = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var login = ((function (username_input,password,login_error){
return (function (){
return arimaa.login.login((function (){var G__15866 = username_input;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15866) : cljs.core.deref.call(null,G__15866));
})(),(function (){var G__15867 = password;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15867) : cljs.core.deref.call(null,G__15867));
})(),(function (){var G__15868 = login_error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15868) : cljs.core.deref.call(null,G__15868));
})());
});})(username_input,password,login_error))
;
return ((function (username_input,password,login_error,login){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$232,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,"username"], null),"Username"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.utils.initial_focus_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$141,"username",cljs.core.constant$keyword$234,(function (){var G__15869 = username_input;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15869) : cljs.core.deref.call(null,G__15869));
})(),cljs.core.constant$keyword$118,"text",cljs.core.constant$keyword$235,((function (username_input,password,login_error,login){
return (function (p1__15851_SHARP_){
var G__15870 = username_input;
var G__15871 = p1__15851_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15870,G__15871) : cljs.core.reset_BANG_.call(null,G__15870,G__15871));
});})(username_input,password,login_error,login))
,cljs.core.constant$keyword$236,((function (username_input,password,login_error,login){
return (function (p1__15852_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__15852_SHARP_.keyCode,(13))){
return login();
} else {
return null;
}
});})(username_input,password,login_error,login))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$232,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,"password"], null),"Password"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$141,"password",cljs.core.constant$keyword$234,(function (){var G__15872 = password;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15872) : cljs.core.deref.call(null,G__15872));
})(),cljs.core.constant$keyword$118,"password",cljs.core.constant$keyword$235,((function (username_input,password,login_error,login){
return (function (p1__15853_SHARP_){
var G__15873 = password;
var G__15874 = p1__15853_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15873,G__15874) : cljs.core.reset_BANG_.call(null,G__15873,G__15874));
});})(username_input,password,login_error,login))
,cljs.core.constant$keyword$236,((function (username_input,password,login_error,login){
return (function (p1__15854_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__15854_SHARP_.keyCode,(13))){
return login();
} else {
return null;
}
});})(username_input,password,login_error,login))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$237,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$238,login], null),"Login"], null)], null),(cljs.core.truth_((function (){var G__15875 = login_error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15875) : cljs.core.deref.call(null,G__15875));
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$239,(function (){var G__15876 = login_error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15876) : cljs.core.deref.call(null,G__15876));
})()], null):null)], null);
});
;})(username_input,password,login_error,login))
});
