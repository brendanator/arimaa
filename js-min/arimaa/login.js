// Compiled by ClojureScript 0.0-2511
goog.provide('arimaa.login');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('arimaa.state');
goog.require('arimaa.requests');
arimaa.login.login = (function login(username_input,password,login_error){
var c__11389__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11389__auto__){
return (function (){
var f__11390__auto__ = (function (){var switch__11309__auto__ = ((function (c__11389__auto__){
return (function (state_16144){
var state_val_16145 = (state_16144[(1)]);
if((state_val_16145 === (5))){
var inst_16142 = (state_16144[(2)]);
var state_16144__$1 = state_16144;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16144__$1,inst_16142);
} else {
if((state_val_16145 === (4))){
var inst_16130 = (state_16144[(7)]);
var inst_16136 = (function (){var G__16146 = arimaa.state.username;
var G__16147 = username_input;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16146,G__16147) : cljs.core.reset_BANG_.call(null,G__16146,G__16147));
})();
var inst_16137 = cljs.core.constant$keyword$179.cljs$core$IFn$_invoke$arity$1(inst_16130);
var inst_16138 = (function (){var G__16148 = arimaa.state.session_id;
var G__16149 = inst_16137;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16148,G__16149) : cljs.core.reset_BANG_.call(null,G__16148,G__16149));
})();
var inst_16139 = cljs.core.constant$keyword$245.cljs$core$IFn$_invoke$arity$1(inst_16130);
var inst_16140 = (function (){var G__16150 = arimaa.state.gameroom_id;
var G__16151 = inst_16139;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16150,G__16151) : cljs.core.reset_BANG_.call(null,G__16150,G__16151));
})();
var state_16144__$1 = (function (){var statearr_16152 = state_16144;
(statearr_16152[(8)] = inst_16138);

(statearr_16152[(9)] = inst_16136);

return statearr_16152;
})();
var statearr_16153_16167 = state_16144__$1;
(statearr_16153_16167[(2)] = inst_16140);

(statearr_16153_16167[(1)] = (5));


return cljs.core.constant$keyword$40;
} else {
if((state_val_16145 === (3))){
var inst_16130 = (state_16144[(7)]);
var inst_16133 = cljs.core.constant$keyword$175.cljs$core$IFn$_invoke$arity$1(inst_16130);
var inst_16134 = (function (){var G__16154 = login_error;
var G__16155 = inst_16133;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16154,G__16155) : cljs.core.reset_BANG_.call(null,G__16154,G__16155));
})();
var state_16144__$1 = state_16144;
var statearr_16156_16168 = state_16144__$1;
(statearr_16156_16168[(2)] = inst_16134);

(statearr_16156_16168[(1)] = (5));


return cljs.core.constant$keyword$40;
} else {
if((state_val_16145 === (2))){
var inst_16130 = (state_16144[(7)]);
var inst_16130__$1 = (state_16144[(2)]);
var inst_16131 = cljs.core.constant$keyword$175.cljs$core$IFn$_invoke$arity$1(inst_16130__$1);
var state_16144__$1 = (function (){var statearr_16157 = state_16144;
(statearr_16157[(7)] = inst_16130__$1);

return statearr_16157;
})();
if(cljs.core.truth_(inst_16131)){
var statearr_16158_16169 = state_16144__$1;
(statearr_16158_16169[(1)] = (3));

} else {
var statearr_16159_16170 = state_16144__$1;
(statearr_16159_16170[(1)] = (4));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_16145 === (1))){
var inst_16128 = arimaa.requests.login(username_input,password);
var state_16144__$1 = state_16144;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16144__$1,(2),inst_16128);
} else {
return null;
}
}
}
}
}
});})(c__11389__auto__))
;
return ((function (switch__11309__auto__,c__11389__auto__){
return (function() {
var state_machine__11310__auto__ = null;
var state_machine__11310__auto____0 = (function (){
var statearr_16163 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16163[(0)] = state_machine__11310__auto__);

(statearr_16163[(1)] = (1));

return statearr_16163;
});
var state_machine__11310__auto____1 = (function (state_16144){
while(true){
var ret_value__11311__auto__ = (function (){try{while(true){
var result__11312__auto__ = switch__11309__auto__(state_16144);
if(cljs.core.keyword_identical_QMARK_(result__11312__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11312__auto__;
}
break;
}
}catch (e16164){if((e16164 instanceof Object)){
var ex__11313__auto__ = e16164;
var statearr_16165_16171 = state_16144;
(statearr_16165_16171[(5)] = ex__11313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16144);

return cljs.core.constant$keyword$40;
} else {
throw e16164;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11311__auto__,cljs.core.constant$keyword$40)){
var G__16172 = state_16144;
state_16144 = G__16172;
continue;
} else {
return ret_value__11311__auto__;
}
break;
}
});
state_machine__11310__auto__ = function(state_16144){
switch(arguments.length){
case 0:
return state_machine__11310__auto____0.call(this);
case 1:
return state_machine__11310__auto____1.call(this,state_16144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11310__auto____0;
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11310__auto____1;
return state_machine__11310__auto__;
})()
;})(switch__11309__auto__,c__11389__auto__))
})();
var state__11391__auto__ = (function (){var statearr_16166 = (function (){return (f__11390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11390__auto__.cljs$core$IFn$_invoke$arity$0() : f__11390__auto__.call(null));
})();
(statearr_16166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11389__auto__);

return statearr_16166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11391__auto__);
});})(c__11389__auto__))
);

return c__11389__auto__;
});
arimaa.login.username_input_view = (function username_input_view(username_input,login){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$206,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$201,"username"], null),"Username"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$219,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$120,"username",cljs.core.constant$keyword$220,(function (){var G__16178 = username_input;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16178) : cljs.core.deref.call(null,G__16178));
})(),cljs.core.constant$keyword$97,"text",cljs.core.constant$keyword$221,(function (p1__16173_SHARP_){
var G__16179 = username_input;
var G__16180 = p1__16173_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16179,G__16180) : cljs.core.reset_BANG_.call(null,G__16179,G__16180));
}),cljs.core.constant$keyword$222,(function (p1__16174_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16174_SHARP_.keyCode,(13))){
return (login.cljs$core$IFn$_invoke$arity$0 ? login.cljs$core$IFn$_invoke$arity$0() : login.call(null));
} else {
return null;
}
})], null)], null)], null);
});
arimaa.login.focused_username_input_view = cljs.core.with_meta(arimaa.login.username_input_view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$223,(function (p1__16181_SHARP_){
return reagent.core.dom_node(p1__16181_SHARP_).focus();
})], null));
arimaa.login.login_view = (function login_view(){
var username_input = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var password = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var login_error = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var login = ((function (username_input,password,login_error){
return (function (){
return arimaa.login.login((function (){var G__16192 = username_input;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16192) : cljs.core.deref.call(null,G__16192));
})(),(function (){var G__16193 = password;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16193) : cljs.core.deref.call(null,G__16193));
})(),(function (){var G__16194 = login_error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16194) : cljs.core.deref.call(null,G__16194));
})());
});})(username_input,password,login_error))
;
return ((function (username_input,password,login_error,login){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.login.focused_username_input_view,username_input,login], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$206,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$201,"password"], null),"Password"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$219,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$120,"password",cljs.core.constant$keyword$220,(function (){var G__16195 = password;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16195) : cljs.core.deref.call(null,G__16195));
})(),cljs.core.constant$keyword$97,"password",cljs.core.constant$keyword$221,((function (username_input,password,login_error,login){
return (function (p1__16182_SHARP_){
var G__16196 = password;
var G__16197 = p1__16182_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16196,G__16197) : cljs.core.reset_BANG_.call(null,G__16196,G__16197));
});})(username_input,password,login_error,login))
,cljs.core.constant$keyword$222,((function (username_input,password,login_error,login){
return (function (p1__16183_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16183_SHARP_.keyCode,(13))){
return login();
} else {
return null;
}
});})(username_input,password,login_error,login))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$206,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$225,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$226,login], null),"Login"], null)], null),(cljs.core.truth_((function (){var G__16198 = login_error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16198) : cljs.core.deref.call(null,G__16198));
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$248,(function (){var G__16199 = login_error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16199) : cljs.core.deref.call(null,G__16199));
})()], null):null)], null);
});
;})(username_input,password,login_error,login))
});
