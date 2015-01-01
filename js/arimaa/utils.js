// Compiled by ClojureScript 0.0-2511
goog.provide('arimaa.utils');
goog.require('cljs.core');
goog.require('reagent.core');
arimaa.utils.initial_focus_wrapper = cljs.core.with_meta(cljs.core.identity,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$38,(function (p1__11312_SHARP_){
return reagent.core.dom_node(p1__11312_SHARP_).focus();
})], null));
arimaa.utils.scroll_bottom_wrapper = (function (){var scroll_bottom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return cljs.core.with_meta(cljs.core.identity,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$39,((function (scroll_bottom){
return (function (p1__11313_SHARP_){
var element = reagent.core.dom_node(p1__11313_SHARP_);
var G__11315 = scroll_bottom;
var G__11316 = (element.scrollTop === (element.scrollHeight - element.clientHeight));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11315,G__11316) : cljs.core.reset_BANG_.call(null,G__11315,G__11316));
});})(scroll_bottom))
,cljs.core.constant$keyword$40,((function (scroll_bottom){
return (function (p1__11314_SHARP_){
if(cljs.core.truth_((function (){var G__11317 = scroll_bottom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11317) : cljs.core.deref.call(null,G__11317));
})())){
var element = reagent.core.dom_node(p1__11314_SHARP_);
return element.scrollTop = element.scrollHeight;
} else {
return null;
}
});})(scroll_bottom))
], null));
})();
arimaa.utils.cols = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__11318_SHARP_){
return cljs.core.char$(((96) + p1__11318_SHARP_));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(9)));
arimaa.utils.subscribe_atom_to_channel_BANG_ = (function subscribe_atom_to_channel_BANG_(atm,channel){
var c__5853__auto__ = (function (){var G__11373 = (1);
return (cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(G__11373) : cljs.core.async.chan.call(null,G__11373));
})();
var G__11374_11399 = ((function (c__5853__auto__){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto__){
return (function (state_11371){
var state_val_11372 = (state_11371[(1)]);
if((state_val_11372 === (7))){
var inst_11367 = (state_11371[(2)]);
var state_11371__$1 = state_11371;
var statearr_11375_11400 = state_11371__$1;
(statearr_11375_11400[(2)] = inst_11367);

(statearr_11375_11400[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_11372 === (6))){
var state_11371__$1 = state_11371;
var statearr_11376_11401 = state_11371__$1;
(statearr_11376_11401[(2)] = null);

(statearr_11376_11401[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_11372 === (5))){
var state_11371__$1 = state_11371;
var statearr_11377_11402 = state_11371__$1;
(statearr_11377_11402[(2)] = null);

(statearr_11377_11402[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_11372 === (4))){
var inst_11361 = (state_11371[(2)]);
var inst_11362 = (function (){var G__11378 = atm;
var G__11379 = inst_11361;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11378,G__11379) : cljs.core.reset_BANG_.call(null,G__11378,G__11379));
})();
var state_11371__$1 = (function (){var statearr_11380 = state_11371;
(statearr_11380[(7)] = inst_11362);

return statearr_11380;
})();
if(cljs.core.truth_(inst_11361)){
var statearr_11381_11403 = state_11371__$1;
(statearr_11381_11403[(1)] = (5));

} else {
var statearr_11382_11404 = state_11371__$1;
(statearr_11382_11404[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_11372 === (3))){
var inst_11369 = (state_11371[(2)]);
var state_11371__$1 = state_11371;
var G__11383 = state_11371__$1;
var G__11384 = inst_11369;
return (cljs.core.async.impl.ioc_helpers.return_chan.cljs$core$IFn$_invoke$arity$2 ? cljs.core.async.impl.ioc_helpers.return_chan.cljs$core$IFn$_invoke$arity$2(G__11383,G__11384) : cljs.core.async.impl.ioc_helpers.return_chan.call(null,G__11383,G__11384));
} else {
if((state_val_11372 === (2))){
var state_11371__$1 = state_11371;
var G__11385 = state_11371__$1;
var G__11386 = (4);
var G__11387 = channel;
return (cljs.core.async.impl.ioc_helpers.take_BANG_.cljs$core$IFn$_invoke$arity$3 ? cljs.core.async.impl.ioc_helpers.take_BANG_.cljs$core$IFn$_invoke$arity$3(G__11385,G__11386,G__11387) : cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,G__11385,G__11386,G__11387));
} else {
if((state_val_11372 === (1))){
var state_11371__$1 = state_11371;
var statearr_11388_11405 = state_11371__$1;
(statearr_11388_11405[(2)] = null);

(statearr_11388_11405[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
return null;
}
}
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
var statearr_11393 = [null,null,null,null,null,null,null,null];
(statearr_11393[(0)] = state_machine__5839__auto__);

(statearr_11393[(1)] = (1));

return statearr_11393;
});
var state_machine__5839__auto____1 = (function (state_11371){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_11371);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e11394){if((e11394 instanceof Object)){
var ex__5842__auto__ = e11394;
var statearr_11395_11406 = state_11371;
(statearr_11395_11406[(5)] = ex__5842__auto__);


var G__11396_11407 = state_11371;
(cljs.core.async.impl.ioc_helpers.process_exception.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.ioc_helpers.process_exception.cljs$core$IFn$_invoke$arity$1(G__11396_11407) : cljs.core.async.impl.ioc_helpers.process_exception.call(null,G__11396_11407));

return cljs.core.constant$keyword$41;
} else {
throw e11394;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__11408 = state_11371;
state_11371 = G__11408;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_11371){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_11371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto__))
})();
var state__5855__auto__ = (function (){var statearr_11397 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_11397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto__);

return statearr_11397;
})();
var G__11398 = state__5855__auto__;
return (cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.cljs$core$IFn$_invoke$arity$1(G__11398) : cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,G__11398));
});})(c__5853__auto__))
;
(cljs.core.async.impl.dispatch.run.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.dispatch.run.cljs$core$IFn$_invoke$arity$1(G__11374_11399) : cljs.core.async.impl.dispatch.run.call(null,G__11374_11399));

return c__5853__auto__;
});
