// Compiled by ClojureScript 0.0-2657 {}
goog.provide('arimaa.login');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('arimaa.utils');
goog.require('arimaa.state');
goog.require('arimaa.requests');
arimaa.login.login = (function login(username_input,password,login_error){
var c__12070__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12070__auto__){
return (function (){
var f__12071__auto__ = (function (){var switch__12055__auto__ = ((function (c__12070__auto__){
return (function (state_16188){
var state_val_16189 = (state_16188[(1)]);
if((state_val_16189 === (5))){
var inst_16186 = (state_16188[(2)]);
var state_16188__$1 = state_16188;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16188__$1,inst_16186);
} else {
if((state_val_16189 === (4))){
var inst_16174 = (state_16188[(7)]);
var inst_16180 = (function (){var G__16190 = arimaa.state.username;
var G__16191 = username_input;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16190,G__16191) : cljs.core.reset_BANG_.call(null,G__16190,G__16191));
})();
var inst_16181 = cljs.core.constant$keyword$232.cljs$core$IFn$_invoke$arity$1(inst_16174);
var inst_16182 = (function (){var G__16192 = arimaa.state.session_id;
var G__16193 = inst_16181;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16192,G__16193) : cljs.core.reset_BANG_.call(null,G__16192,G__16193));
})();
var inst_16183 = cljs.core.constant$keyword$235.cljs$core$IFn$_invoke$arity$1(inst_16174);
var inst_16184 = (function (){var G__16194 = arimaa.state.gameroom_id;
var G__16195 = inst_16183;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16194,G__16195) : cljs.core.reset_BANG_.call(null,G__16194,G__16195));
})();
var state_16188__$1 = (function (){var statearr_16196 = state_16188;
(statearr_16196[(8)] = inst_16182);

(statearr_16196[(9)] = inst_16180);

return statearr_16196;
})();
var statearr_16197_16211 = state_16188__$1;
(statearr_16197_16211[(2)] = inst_16184);

(statearr_16197_16211[(1)] = (5));


return cljs.core.constant$keyword$127;
} else {
if((state_val_16189 === (3))){
var inst_16174 = (state_16188[(7)]);
var inst_16177 = cljs.core.constant$keyword$228.cljs$core$IFn$_invoke$arity$1(inst_16174);
var inst_16178 = (function (){var G__16198 = login_error;
var G__16199 = inst_16177;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16198,G__16199) : cljs.core.reset_BANG_.call(null,G__16198,G__16199));
})();
var state_16188__$1 = state_16188;
var statearr_16200_16212 = state_16188__$1;
(statearr_16200_16212[(2)] = inst_16178);

(statearr_16200_16212[(1)] = (5));


return cljs.core.constant$keyword$127;
} else {
if((state_val_16189 === (2))){
var inst_16174 = (state_16188[(7)]);
var inst_16174__$1 = (state_16188[(2)]);
var inst_16175 = cljs.core.constant$keyword$228.cljs$core$IFn$_invoke$arity$1(inst_16174__$1);
var state_16188__$1 = (function (){var statearr_16201 = state_16188;
(statearr_16201[(7)] = inst_16174__$1);

return statearr_16201;
})();
if(cljs.core.truth_(inst_16175)){
var statearr_16202_16213 = state_16188__$1;
(statearr_16202_16213[(1)] = (3));

} else {
var statearr_16203_16214 = state_16188__$1;
(statearr_16203_16214[(1)] = (4));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_16189 === (1))){
var inst_16172 = arimaa.requests.login(username_input,password);
var state_16188__$1 = state_16188;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16188__$1,(2),inst_16172);
} else {
return null;
}
}
}
}
}
});})(c__12070__auto__))
;
return ((function (switch__12055__auto__,c__12070__auto__){
return (function() {
var state_machine__12056__auto__ = null;
var state_machine__12056__auto____0 = (function (){
var statearr_16207 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16207[(0)] = state_machine__12056__auto__);

(statearr_16207[(1)] = (1));

return statearr_16207;
});
var state_machine__12056__auto____1 = (function (state_16188){
while(true){
var ret_value__12057__auto__ = (function (){try{while(true){
var result__12058__auto__ = switch__12055__auto__(state_16188);
if(cljs.core.keyword_identical_QMARK_(result__12058__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12058__auto__;
}
break;
}
}catch (e16208){if((e16208 instanceof Object)){
var ex__12059__auto__ = e16208;
var statearr_16209_16215 = state_16188;
(statearr_16209_16215[(5)] = ex__12059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16188);

return cljs.core.constant$keyword$127;
} else {
throw e16208;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12057__auto__,cljs.core.constant$keyword$127)){
var G__16216 = state_16188;
state_16188 = G__16216;
continue;
} else {
return ret_value__12057__auto__;
}
break;
}
});
state_machine__12056__auto__ = function(state_16188){
switch(arguments.length){
case 0:
return state_machine__12056__auto____0.call(this);
case 1:
return state_machine__12056__auto____1.call(this,state_16188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12056__auto____0;
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12056__auto____1;
return state_machine__12056__auto__;
})()
;})(switch__12055__auto__,c__12070__auto__))
})();
var state__12072__auto__ = (function (){var statearr_16210 = (function (){return (f__12071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12071__auto__.cljs$core$IFn$_invoke$arity$0() : f__12071__auto__.call(null));
})();
(statearr_16210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12070__auto__);

return statearr_16210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12072__auto__);
});})(c__12070__auto__))
);

return c__12070__auto__;
});
arimaa.login.login_view = (function login_view(){
var username_input = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var password = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var login_error = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var login = ((function (username_input,password,login_error){
return (function (){
return arimaa.login.login((function (){var G__16231 = username_input;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16231) : cljs.core.deref.call(null,G__16231));
})(),(function (){var G__16232 = password;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16232) : cljs.core.deref.call(null,G__16232));
})(),login_error);
});})(username_input,password,login_error))
;
return ((function (username_input,password,login_error,login){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$251,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,"username"], null),"Username"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.utils.initial_focus_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$252,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$68,"username",cljs.core.constant$keyword$253,(function (){var G__16233 = username_input;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16233) : cljs.core.deref.call(null,G__16233));
})(),cljs.core.constant$keyword$45,"text",cljs.core.constant$keyword$254,((function (username_input,password,login_error,login){
return (function (p1__16217_SHARP_){
var G__16234 = username_input;
var G__16235 = p1__16217_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16234,G__16235) : cljs.core.reset_BANG_.call(null,G__16234,G__16235));
});})(username_input,password,login_error,login))
,cljs.core.constant$keyword$255,((function (username_input,password,login_error,login){
return (function (p1__16218_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16218_SHARP_.keyCode,(13))){
return login();
} else {
return null;
}
});})(username_input,password,login_error,login))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$251,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,"password"], null),"Password"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$252,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$68,"password",cljs.core.constant$keyword$253,(function (){var G__16236 = password;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16236) : cljs.core.deref.call(null,G__16236));
})(),cljs.core.constant$keyword$45,"password",cljs.core.constant$keyword$254,((function (username_input,password,login_error,login){
return (function (p1__16219_SHARP_){
var G__16237 = password;
var G__16238 = p1__16219_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16237,G__16238) : cljs.core.reset_BANG_.call(null,G__16237,G__16238));
});})(username_input,password,login_error,login))
,cljs.core.constant$keyword$255,((function (username_input,password,login_error,login){
return (function (p1__16220_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16220_SHARP_.keyCode,(13))){
return login();
} else {
return null;
}
});})(username_input,password,login_error,login))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$256,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$257,login], null),"Login"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$129,"http://arimaa.com/arimaa/gameroom/"], null),"Register"], null),(cljs.core.truth_((function (){var G__16239 = login_error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16239) : cljs.core.deref.call(null,G__16239));
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$258,(function (){var G__16240 = login_error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16240) : cljs.core.deref.call(null,G__16240));
})()], null):null)], null);
});
;})(username_input,password,login_error,login))
});
