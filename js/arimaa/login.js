// Compiled by ClojureScript 0.0-2511
goog.provide('arimaa.login');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('arimaa.utils');
goog.require('arimaa.state');
goog.require('arimaa.requests');
arimaa.login.login = (function login(username_input,password,login_error){
var c__11276__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11276__auto__){
return (function (){
var f__11277__auto__ = (function (){var switch__11261__auto__ = ((function (c__11276__auto__){
return (function (state_16291){
var state_val_16292 = (state_16291[(1)]);
if((state_val_16292 === (5))){
var inst_16289 = (state_16291[(2)]);
var state_16291__$1 = state_16291;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16291__$1,inst_16289);
} else {
if((state_val_16292 === (4))){
var inst_16277 = (state_16291[(7)]);
var inst_16283 = (function (){var G__16293 = arimaa.state.username;
var G__16294 = username_input;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16293,G__16294) : cljs.core.reset_BANG_.call(null,G__16293,G__16294));
})();
var inst_16284 = cljs.core.constant$keyword$200.cljs$core$IFn$_invoke$arity$1(inst_16277);
var inst_16285 = (function (){var G__16295 = arimaa.state.session_id;
var G__16296 = inst_16284;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16295,G__16296) : cljs.core.reset_BANG_.call(null,G__16295,G__16296));
})();
var inst_16286 = cljs.core.constant$keyword$228.cljs$core$IFn$_invoke$arity$1(inst_16277);
var inst_16287 = (function (){var G__16297 = arimaa.state.gameroom_id;
var G__16298 = inst_16286;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16297,G__16298) : cljs.core.reset_BANG_.call(null,G__16297,G__16298));
})();
var state_16291__$1 = (function (){var statearr_16299 = state_16291;
(statearr_16299[(8)] = inst_16283);

(statearr_16299[(9)] = inst_16285);

return statearr_16299;
})();
var statearr_16300_16314 = state_16291__$1;
(statearr_16300_16314[(2)] = inst_16287);

(statearr_16300_16314[(1)] = (5));


return cljs.core.constant$keyword$44;
} else {
if((state_val_16292 === (3))){
var inst_16277 = (state_16291[(7)]);
var inst_16280 = cljs.core.constant$keyword$196.cljs$core$IFn$_invoke$arity$1(inst_16277);
var inst_16281 = (function (){var G__16301 = login_error;
var G__16302 = inst_16280;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16301,G__16302) : cljs.core.reset_BANG_.call(null,G__16301,G__16302));
})();
var state_16291__$1 = state_16291;
var statearr_16303_16315 = state_16291__$1;
(statearr_16303_16315[(2)] = inst_16281);

(statearr_16303_16315[(1)] = (5));


return cljs.core.constant$keyword$44;
} else {
if((state_val_16292 === (2))){
var inst_16277 = (state_16291[(7)]);
var inst_16277__$1 = (state_16291[(2)]);
var inst_16278 = cljs.core.constant$keyword$196.cljs$core$IFn$_invoke$arity$1(inst_16277__$1);
var state_16291__$1 = (function (){var statearr_16304 = state_16291;
(statearr_16304[(7)] = inst_16277__$1);

return statearr_16304;
})();
if(cljs.core.truth_(inst_16278)){
var statearr_16305_16316 = state_16291__$1;
(statearr_16305_16316[(1)] = (3));

} else {
var statearr_16306_16317 = state_16291__$1;
(statearr_16306_16317[(1)] = (4));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_16292 === (1))){
var inst_16275 = arimaa.requests.login(username_input,password);
var state_16291__$1 = state_16291;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16291__$1,(2),inst_16275);
} else {
return null;
}
}
}
}
}
});})(c__11276__auto__))
;
return ((function (switch__11261__auto__,c__11276__auto__){
return (function() {
var state_machine__11262__auto__ = null;
var state_machine__11262__auto____0 = (function (){
var statearr_16310 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16310[(0)] = state_machine__11262__auto__);

(statearr_16310[(1)] = (1));

return statearr_16310;
});
var state_machine__11262__auto____1 = (function (state_16291){
while(true){
var ret_value__11263__auto__ = (function (){try{while(true){
var result__11264__auto__ = switch__11261__auto__(state_16291);
if(cljs.core.keyword_identical_QMARK_(result__11264__auto__,cljs.core.constant$keyword$44)){
continue;
} else {
return result__11264__auto__;
}
break;
}
}catch (e16311){if((e16311 instanceof Object)){
var ex__11265__auto__ = e16311;
var statearr_16312_16318 = state_16291;
(statearr_16312_16318[(5)] = ex__11265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16291);

return cljs.core.constant$keyword$44;
} else {
throw e16311;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11263__auto__,cljs.core.constant$keyword$44)){
var G__16319 = state_16291;
state_16291 = G__16319;
continue;
} else {
return ret_value__11263__auto__;
}
break;
}
});
state_machine__11262__auto__ = function(state_16291){
switch(arguments.length){
case 0:
return state_machine__11262__auto____0.call(this);
case 1:
return state_machine__11262__auto____1.call(this,state_16291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11262__auto____0;
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11262__auto____1;
return state_machine__11262__auto__;
})()
;})(switch__11261__auto__,c__11276__auto__))
})();
var state__11278__auto__ = (function (){var statearr_16313 = (function (){return (f__11277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11277__auto__.cljs$core$IFn$_invoke$arity$0() : f__11277__auto__.call(null));
})();
(statearr_16313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11276__auto__);

return statearr_16313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11278__auto__);
});})(c__11276__auto__))
);

return c__11276__auto__;
});
arimaa.login.login_view = (function login_view(){
var username_input = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var password = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var login_error = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var login = ((function (username_input,password,login_error){
return (function (){
return arimaa.login.login((function (){var G__16335 = username_input;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16335) : cljs.core.deref.call(null,G__16335));
})(),(function (){var G__16336 = password;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16336) : cljs.core.deref.call(null,G__16336));
})(),(function (){var G__16337 = login_error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16337) : cljs.core.deref.call(null,G__16337));
})());
});})(username_input,password,login_error))
;
return ((function (username_input,password,login_error,login){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$229,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$212,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,"username"], null),"Username"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.utils.initial_focus_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$141,"username",cljs.core.constant$keyword$232,(function (){var G__16338 = username_input;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16338) : cljs.core.deref.call(null,G__16338));
})(),cljs.core.constant$keyword$118,"text",cljs.core.constant$keyword$233,((function (username_input,password,login_error,login){
return (function (p1__16320_SHARP_){
var G__16339 = username_input;
var G__16340 = p1__16320_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16339,G__16340) : cljs.core.reset_BANG_.call(null,G__16339,G__16340));
});})(username_input,password,login_error,login))
,cljs.core.constant$keyword$234,((function (username_input,password,login_error,login){
return (function (p1__16321_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16321_SHARP_.keyCode,(13))){
return login();
} else {
return null;
}
});})(username_input,password,login_error,login))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$212,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,"password"], null),"Password"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$141,"password",cljs.core.constant$keyword$232,(function (){var G__16341 = password;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16341) : cljs.core.deref.call(null,G__16341));
})(),cljs.core.constant$keyword$118,"password",cljs.core.constant$keyword$233,((function (username_input,password,login_error,login){
return (function (p1__16322_SHARP_){
var G__16342 = password;
var G__16343 = p1__16322_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16342,G__16343) : cljs.core.reset_BANG_.call(null,G__16342,G__16343));
});})(username_input,password,login_error,login))
,cljs.core.constant$keyword$234,((function (username_input,password,login_error,login){
return (function (p1__16323_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16323_SHARP_.keyCode,(13))){
return login();
} else {
return null;
}
});})(username_input,password,login_error,login))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$212,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$235,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$236,login], null),"Login"], null)], null),(cljs.core.truth_((function (){var G__16344 = login_error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16344) : cljs.core.deref.call(null,G__16344));
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$237,(function (){var G__16345 = login_error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16345) : cljs.core.deref.call(null,G__16345));
})()], null):null)], null);
});
;})(username_input,password,login_error,login))
});
