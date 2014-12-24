// Compiled by ClojureScript 0.0-2511
goog.provide('arimaa.login');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('arimaa.state');
goog.require('arimaa.requests');
arimaa.login.login = (function login(username_input,password,login_error){
var c__5853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto__){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto__){
return (function (state_16052){
var state_val_16053 = (state_16052[(1)]);
if((state_val_16053 === (5))){
var inst_16050 = (state_16052[(2)]);
var state_16052__$1 = state_16052;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16052__$1,inst_16050);
} else {
if((state_val_16053 === (4))){
var inst_16038 = (state_16052[(7)]);
var inst_16044 = (function (){var G__16054 = arimaa.state.username;
var G__16055 = username_input;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16054,G__16055) : cljs.core.reset_BANG_.call(null,G__16054,G__16055));
})();
var inst_16045 = cljs.core.constant$keyword$197.cljs$core$IFn$_invoke$arity$1(inst_16038);
var inst_16046 = (function (){var G__16056 = arimaa.state.session_id;
var G__16057 = inst_16045;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16056,G__16057) : cljs.core.reset_BANG_.call(null,G__16056,G__16057));
})();
var inst_16047 = cljs.core.constant$keyword$245.cljs$core$IFn$_invoke$arity$1(inst_16038);
var inst_16048 = (function (){var G__16058 = arimaa.state.gameroom_id;
var G__16059 = inst_16047;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16058,G__16059) : cljs.core.reset_BANG_.call(null,G__16058,G__16059));
})();
var state_16052__$1 = (function (){var statearr_16060 = state_16052;
(statearr_16060[(8)] = inst_16044);

(statearr_16060[(9)] = inst_16046);

return statearr_16060;
})();
var statearr_16061_16075 = state_16052__$1;
(statearr_16061_16075[(2)] = inst_16048);

(statearr_16061_16075[(1)] = (5));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16053 === (3))){
var inst_16038 = (state_16052[(7)]);
var inst_16041 = cljs.core.constant$keyword$193.cljs$core$IFn$_invoke$arity$1(inst_16038);
var inst_16042 = (function (){var G__16062 = login_error;
var G__16063 = inst_16041;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16062,G__16063) : cljs.core.reset_BANG_.call(null,G__16062,G__16063));
})();
var state_16052__$1 = state_16052;
var statearr_16064_16076 = state_16052__$1;
(statearr_16064_16076[(2)] = inst_16042);

(statearr_16064_16076[(1)] = (5));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16053 === (2))){
var inst_16038 = (state_16052[(7)]);
var inst_16038__$1 = (state_16052[(2)]);
var inst_16039 = cljs.core.constant$keyword$193.cljs$core$IFn$_invoke$arity$1(inst_16038__$1);
var state_16052__$1 = (function (){var statearr_16065 = state_16052;
(statearr_16065[(7)] = inst_16038__$1);

return statearr_16065;
})();
if(cljs.core.truth_(inst_16039)){
var statearr_16066_16077 = state_16052__$1;
(statearr_16066_16077[(1)] = (3));

} else {
var statearr_16067_16078 = state_16052__$1;
(statearr_16067_16078[(1)] = (4));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_16053 === (1))){
var inst_16036 = arimaa.requests.login(username_input,password);
var state_16052__$1 = state_16052;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16052__$1,(2),inst_16036);
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
var statearr_16071 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16071[(0)] = state_machine__5839__auto__);

(statearr_16071[(1)] = (1));

return statearr_16071;
});
var state_machine__5839__auto____1 = (function (state_16052){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_16052);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e16072){if((e16072 instanceof Object)){
var ex__5842__auto__ = e16072;
var statearr_16073_16079 = state_16052;
(statearr_16073_16079[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16052);

return cljs.core.constant$keyword$41;
} else {
throw e16072;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__16080 = state_16052;
state_16052 = G__16080;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_16052){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_16052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto__))
})();
var state__5855__auto__ = (function (){var statearr_16074 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_16074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto__);

return statearr_16074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto__))
);

return c__5853__auto__;
});
arimaa.login.username_input_view = (function username_input_view(username_input,login){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$206,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,"username"], null),"Username"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$219,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$138,"username",cljs.core.constant$keyword$220,(function (){var G__16086 = username_input;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16086) : cljs.core.deref.call(null,G__16086));
})(),cljs.core.constant$keyword$115,"text",cljs.core.constant$keyword$221,(function (p1__16081_SHARP_){
var G__16087 = username_input;
var G__16088 = p1__16081_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16087,G__16088) : cljs.core.reset_BANG_.call(null,G__16087,G__16088));
}),cljs.core.constant$keyword$222,(function (p1__16082_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16082_SHARP_.keyCode,(13))){
return (login.cljs$core$IFn$_invoke$arity$0 ? login.cljs$core$IFn$_invoke$arity$0() : login.call(null));
} else {
return null;
}
})], null)], null)], null);
});
arimaa.login.focused_username_input_view = cljs.core.with_meta(arimaa.login.username_input_view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$223,(function (p1__16089_SHARP_){
return reagent.core.dom_node(p1__16089_SHARP_).focus();
})], null));
arimaa.login.login_view = (function login_view(){
var username_input = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var password = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var login_error = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var login = ((function (username_input,password,login_error){
return (function (){
return arimaa.login.login((function (){var G__16100 = username_input;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16100) : cljs.core.deref.call(null,G__16100));
})(),(function (){var G__16101 = password;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16101) : cljs.core.deref.call(null,G__16101));
})(),(function (){var G__16102 = login_error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16102) : cljs.core.deref.call(null,G__16102));
})());
});})(username_input,password,login_error))
;
return ((function (username_input,password,login_error,login){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.login.focused_username_input_view,username_input,login], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$206,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,"password"], null),"Password"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$219,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$138,"password",cljs.core.constant$keyword$220,(function (){var G__16103 = password;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16103) : cljs.core.deref.call(null,G__16103));
})(),cljs.core.constant$keyword$115,"password",cljs.core.constant$keyword$221,((function (username_input,password,login_error,login){
return (function (p1__16090_SHARP_){
var G__16104 = password;
var G__16105 = p1__16090_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16104,G__16105) : cljs.core.reset_BANG_.call(null,G__16104,G__16105));
});})(username_input,password,login_error,login))
,cljs.core.constant$keyword$222,((function (username_input,password,login_error,login){
return (function (p1__16091_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16091_SHARP_.keyCode,(13))){
return login();
} else {
return null;
}
});})(username_input,password,login_error,login))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$206,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$225,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$226,login], null),"Login"], null)], null),(cljs.core.truth_((function (){var G__16106 = login_error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16106) : cljs.core.deref.call(null,G__16106));
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$248,(function (){var G__16107 = login_error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16107) : cljs.core.deref.call(null,G__16107));
})()], null):null)], null);
});
;})(username_input,password,login_error,login))
});
