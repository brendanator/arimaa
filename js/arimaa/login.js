// Compiled by ClojureScript 0.0-2657 {}
goog.provide('arimaa.login');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('arimaa.utils');
goog.require('arimaa.state');
goog.require('arimaa.requests');
arimaa.login.login = (function login(username_input,password,login_error){
var c__11621__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11621__auto__){
return (function (){
var f__11622__auto__ = (function (){var switch__11541__auto__ = ((function (c__11621__auto__){
return (function (state_16905){
var state_val_16906 = (state_16905[(1)]);
if((state_val_16906 === (5))){
var inst_16903 = (state_16905[(2)]);
var state_16905__$1 = state_16905;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16905__$1,inst_16903);
} else {
if((state_val_16906 === (4))){
var inst_16891 = (state_16905[(7)]);
var inst_16897 = (function (){var G__16907 = arimaa.state.username;
var G__16908 = username_input;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16907,G__16908) : cljs.core.reset_BANG_.call(null,G__16907,G__16908));
})();
var inst_16898 = cljs.core.constant$keyword$205.cljs$core$IFn$_invoke$arity$1(inst_16891);
var inst_16899 = (function (){var G__16909 = arimaa.state.session_id;
var G__16910 = inst_16898;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16909,G__16910) : cljs.core.reset_BANG_.call(null,G__16909,G__16910));
})();
var inst_16900 = cljs.core.constant$keyword$208.cljs$core$IFn$_invoke$arity$1(inst_16891);
var inst_16901 = (function (){var G__16911 = arimaa.state.gameroom_id;
var G__16912 = inst_16900;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16911,G__16912) : cljs.core.reset_BANG_.call(null,G__16911,G__16912));
})();
var state_16905__$1 = (function (){var statearr_16913 = state_16905;
(statearr_16913[(8)] = inst_16897);

(statearr_16913[(9)] = inst_16899);

return statearr_16913;
})();
var statearr_16914_16928 = state_16905__$1;
(statearr_16914_16928[(2)] = inst_16901);

(statearr_16914_16928[(1)] = (5));


return cljs.core.constant$keyword$65;
} else {
if((state_val_16906 === (3))){
var inst_16891 = (state_16905[(7)]);
var inst_16894 = cljs.core.constant$keyword$201.cljs$core$IFn$_invoke$arity$1(inst_16891);
var inst_16895 = (function (){var G__16915 = login_error;
var G__16916 = inst_16894;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16915,G__16916) : cljs.core.reset_BANG_.call(null,G__16915,G__16916));
})();
var state_16905__$1 = state_16905;
var statearr_16917_16929 = state_16905__$1;
(statearr_16917_16929[(2)] = inst_16895);

(statearr_16917_16929[(1)] = (5));


return cljs.core.constant$keyword$65;
} else {
if((state_val_16906 === (2))){
var inst_16891 = (state_16905[(7)]);
var inst_16891__$1 = (state_16905[(2)]);
var inst_16892 = cljs.core.constant$keyword$201.cljs$core$IFn$_invoke$arity$1(inst_16891__$1);
var state_16905__$1 = (function (){var statearr_16918 = state_16905;
(statearr_16918[(7)] = inst_16891__$1);

return statearr_16918;
})();
if(cljs.core.truth_(inst_16892)){
var statearr_16919_16930 = state_16905__$1;
(statearr_16919_16930[(1)] = (3));

} else {
var statearr_16920_16931 = state_16905__$1;
(statearr_16920_16931[(1)] = (4));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_16906 === (1))){
var inst_16889 = arimaa.requests.login(username_input,password);
var state_16905__$1 = state_16905;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16905__$1,(2),inst_16889);
} else {
return null;
}
}
}
}
}
});})(c__11621__auto__))
;
return ((function (switch__11541__auto__,c__11621__auto__){
return (function() {
var state_machine__11542__auto__ = null;
var state_machine__11542__auto____0 = (function (){
var statearr_16924 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16924[(0)] = state_machine__11542__auto__);

(statearr_16924[(1)] = (1));

return statearr_16924;
});
var state_machine__11542__auto____1 = (function (state_16905){
while(true){
var ret_value__11543__auto__ = (function (){try{while(true){
var result__11544__auto__ = switch__11541__auto__(state_16905);
if(cljs.core.keyword_identical_QMARK_(result__11544__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11544__auto__;
}
break;
}
}catch (e16925){if((e16925 instanceof Object)){
var ex__11545__auto__ = e16925;
var statearr_16926_16932 = state_16905;
(statearr_16926_16932[(5)] = ex__11545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16905);

return cljs.core.constant$keyword$65;
} else {
throw e16925;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11543__auto__,cljs.core.constant$keyword$65)){
var G__16933 = state_16905;
state_16905 = G__16933;
continue;
} else {
return ret_value__11543__auto__;
}
break;
}
});
state_machine__11542__auto__ = function(state_16905){
switch(arguments.length){
case 0:
return state_machine__11542__auto____0.call(this);
case 1:
return state_machine__11542__auto____1.call(this,state_16905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11542__auto____0;
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11542__auto____1;
return state_machine__11542__auto__;
})()
;})(switch__11541__auto__,c__11621__auto__))
})();
var state__11623__auto__ = (function (){var statearr_16927 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_16927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto__);

return statearr_16927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(c__11621__auto__))
);

return c__11621__auto__;
});
arimaa.login.login_view = (function login_view(){
var username_input = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var password = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var login_error = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var login = ((function (username_input,password,login_error){
return (function (){
return arimaa.login.login((function (){var G__16949 = username_input;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16949) : cljs.core.deref.call(null,G__16949));
})(),(function (){var G__16950 = password;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16950) : cljs.core.deref.call(null,G__16950));
})(),(function (){var G__16951 = login_error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16951) : cljs.core.deref.call(null,G__16951));
})());
});})(username_input,password,login_error))
;
return ((function (username_input,password,login_error,login){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$292,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$293,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$235,"username"], null),"Username"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.utils.initial_focus_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$260,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$146,"username",cljs.core.constant$keyword$261,(function (){var G__16952 = username_input;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16952) : cljs.core.deref.call(null,G__16952));
})(),cljs.core.constant$keyword$123,"text",cljs.core.constant$keyword$262,((function (username_input,password,login_error,login){
return (function (p1__16934_SHARP_){
var G__16953 = username_input;
var G__16954 = p1__16934_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16953,G__16954) : cljs.core.reset_BANG_.call(null,G__16953,G__16954));
});})(username_input,password,login_error,login))
,cljs.core.constant$keyword$263,((function (username_input,password,login_error,login){
return (function (p1__16935_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16935_SHARP_.keyCode,(13))){
return login();
} else {
return null;
}
});})(username_input,password,login_error,login))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$293,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$235,"password"], null),"Password"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$260,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$146,"password",cljs.core.constant$keyword$261,(function (){var G__16955 = password;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16955) : cljs.core.deref.call(null,G__16955));
})(),cljs.core.constant$keyword$123,"password",cljs.core.constant$keyword$262,((function (username_input,password,login_error,login){
return (function (p1__16936_SHARP_){
var G__16956 = password;
var G__16957 = p1__16936_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16956,G__16957) : cljs.core.reset_BANG_.call(null,G__16956,G__16957));
});})(username_input,password,login_error,login))
,cljs.core.constant$keyword$263,((function (username_input,password,login_error,login){
return (function (p1__16937_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16937_SHARP_.keyCode,(13))){
return login();
} else {
return null;
}
});})(username_input,password,login_error,login))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$258,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$259,login], null),"Login"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$244,"http://arimaa.com/arimaa/gameroom/"], null),"Register"], null),(cljs.core.truth_((function (){var G__16958 = login_error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16958) : cljs.core.deref.call(null,G__16958));
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$294,(function (){var G__16959 = login_error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16959) : cljs.core.deref.call(null,G__16959));
})()], null):null)], null);
});
;})(username_input,password,login_error,login))
});
