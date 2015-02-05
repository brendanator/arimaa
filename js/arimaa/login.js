// Compiled by ClojureScript 0.0-2727 {}
goog.provide('arimaa.login');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('arimaa.utils');
goog.require('arimaa.state');
goog.require('arimaa.requests');
arimaa.login.login = (function login(username_input,password,login_error){
var c__12182__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12182__auto__){
return (function (){
var f__12183__auto__ = (function (){var switch__12167__auto__ = ((function (c__12182__auto__){
return (function (state_16322){
var state_val_16323 = (state_16322[(1)]);
if((state_val_16323 === (5))){
var inst_16320 = (state_16322[(2)]);
var state_16322__$1 = state_16322;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16322__$1,inst_16320);
} else {
if((state_val_16323 === (4))){
var inst_16308 = (state_16322[(7)]);
var inst_16314 = (function (){var G__16324 = arimaa.state.username;
var G__16325 = username_input;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16324,G__16325) : cljs.core.reset_BANG_.call(null,G__16324,G__16325));
})();
var inst_16315 = cljs.core.constant$keyword$232.cljs$core$IFn$_invoke$arity$1(inst_16308);
var inst_16316 = (function (){var G__16326 = arimaa.state.session_id;
var G__16327 = inst_16315;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16326,G__16327) : cljs.core.reset_BANG_.call(null,G__16326,G__16327));
})();
var inst_16317 = cljs.core.constant$keyword$235.cljs$core$IFn$_invoke$arity$1(inst_16308);
var inst_16318 = (function (){var G__16328 = arimaa.state.gameroom_id;
var G__16329 = inst_16317;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16328,G__16329) : cljs.core.reset_BANG_.call(null,G__16328,G__16329));
})();
var state_16322__$1 = (function (){var statearr_16330 = state_16322;
(statearr_16330[(8)] = inst_16314);

(statearr_16330[(9)] = inst_16316);

return statearr_16330;
})();
var statearr_16331_16345 = state_16322__$1;
(statearr_16331_16345[(2)] = inst_16318);

(statearr_16331_16345[(1)] = (5));


return cljs.core.constant$keyword$127;
} else {
if((state_val_16323 === (3))){
var inst_16308 = (state_16322[(7)]);
var inst_16311 = cljs.core.constant$keyword$228.cljs$core$IFn$_invoke$arity$1(inst_16308);
var inst_16312 = (function (){var G__16332 = login_error;
var G__16333 = inst_16311;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16332,G__16333) : cljs.core.reset_BANG_.call(null,G__16332,G__16333));
})();
var state_16322__$1 = state_16322;
var statearr_16334_16346 = state_16322__$1;
(statearr_16334_16346[(2)] = inst_16312);

(statearr_16334_16346[(1)] = (5));


return cljs.core.constant$keyword$127;
} else {
if((state_val_16323 === (2))){
var inst_16308 = (state_16322[(7)]);
var inst_16308__$1 = (state_16322[(2)]);
var inst_16309 = cljs.core.constant$keyword$228.cljs$core$IFn$_invoke$arity$1(inst_16308__$1);
var state_16322__$1 = (function (){var statearr_16335 = state_16322;
(statearr_16335[(7)] = inst_16308__$1);

return statearr_16335;
})();
if(cljs.core.truth_(inst_16309)){
var statearr_16336_16347 = state_16322__$1;
(statearr_16336_16347[(1)] = (3));

} else {
var statearr_16337_16348 = state_16322__$1;
(statearr_16337_16348[(1)] = (4));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_16323 === (1))){
var inst_16306 = arimaa.requests.login(username_input,password);
var state_16322__$1 = state_16322;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16322__$1,(2),inst_16306);
} else {
return null;
}
}
}
}
}
});})(c__12182__auto__))
;
return ((function (switch__12167__auto__,c__12182__auto__){
return (function() {
var state_machine__12168__auto__ = null;
var state_machine__12168__auto____0 = (function (){
var statearr_16341 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16341[(0)] = state_machine__12168__auto__);

(statearr_16341[(1)] = (1));

return statearr_16341;
});
var state_machine__12168__auto____1 = (function (state_16322){
while(true){
var ret_value__12169__auto__ = (function (){try{while(true){
var result__12170__auto__ = switch__12167__auto__(state_16322);
if(cljs.core.keyword_identical_QMARK_(result__12170__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12170__auto__;
}
break;
}
}catch (e16342){if((e16342 instanceof Object)){
var ex__12171__auto__ = e16342;
var statearr_16343_16349 = state_16322;
(statearr_16343_16349[(5)] = ex__12171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16322);

return cljs.core.constant$keyword$127;
} else {
throw e16342;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12169__auto__,cljs.core.constant$keyword$127)){
var G__16350 = state_16322;
state_16322 = G__16350;
continue;
} else {
return ret_value__12169__auto__;
}
break;
}
});
state_machine__12168__auto__ = function(state_16322){
switch(arguments.length){
case 0:
return state_machine__12168__auto____0.call(this);
case 1:
return state_machine__12168__auto____1.call(this,state_16322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12168__auto____0;
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12168__auto____1;
return state_machine__12168__auto__;
})()
;})(switch__12167__auto__,c__12182__auto__))
})();
var state__12184__auto__ = (function (){var statearr_16344 = (function (){return (f__12183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12183__auto__.cljs$core$IFn$_invoke$arity$0() : f__12183__auto__.call(null));
})();
(statearr_16344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12182__auto__);

return statearr_16344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12184__auto__);
});})(c__12182__auto__))
);

return c__12182__auto__;
});
arimaa.login.login_view = (function login_view(){
var username_input = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var password = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var login_error = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var login = ((function (username_input,password,login_error){
return (function (){
return arimaa.login.login((function (){var G__16365 = username_input;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16365) : cljs.core.deref.call(null,G__16365));
})(),(function (){var G__16366 = password;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16366) : cljs.core.deref.call(null,G__16366));
})(),login_error);
});})(username_input,password,login_error))
;
return ((function (username_input,password,login_error,login){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$251,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,"username"], null),"Username"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.utils.initial_focus_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$252,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$68,"username",cljs.core.constant$keyword$253,(function (){var G__16367 = username_input;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16367) : cljs.core.deref.call(null,G__16367));
})(),cljs.core.constant$keyword$45,"text",cljs.core.constant$keyword$254,((function (username_input,password,login_error,login){
return (function (p1__16351_SHARP_){
var G__16368 = username_input;
var G__16369 = p1__16351_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16368,G__16369) : cljs.core.reset_BANG_.call(null,G__16368,G__16369));
});})(username_input,password,login_error,login))
,cljs.core.constant$keyword$255,((function (username_input,password,login_error,login){
return (function (p1__16352_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16352_SHARP_.keyCode,(13))){
return login();
} else {
return null;
}
});})(username_input,password,login_error,login))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$251,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,"password"], null),"Password"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$252,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$68,"password",cljs.core.constant$keyword$253,(function (){var G__16370 = password;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16370) : cljs.core.deref.call(null,G__16370));
})(),cljs.core.constant$keyword$45,"password",cljs.core.constant$keyword$254,((function (username_input,password,login_error,login){
return (function (p1__16353_SHARP_){
var G__16371 = password;
var G__16372 = p1__16353_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16371,G__16372) : cljs.core.reset_BANG_.call(null,G__16371,G__16372));
});})(username_input,password,login_error,login))
,cljs.core.constant$keyword$255,((function (username_input,password,login_error,login){
return (function (p1__16354_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16354_SHARP_.keyCode,(13))){
return login();
} else {
return null;
}
});})(username_input,password,login_error,login))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$256,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$257,login], null),"Login"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$129,"http://arimaa.com/arimaa/gameroom/"], null),"Register"], null),(cljs.core.truth_((function (){var G__16373 = login_error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16373) : cljs.core.deref.call(null,G__16373));
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$258,(function (){var G__16374 = login_error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16374) : cljs.core.deref.call(null,G__16374));
})()], null):null)], null);
});
;})(username_input,password,login_error,login))
});
