// Compiled by ClojureScript 0.0-2727 {}
goog.provide('arimaa.utils');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs_time.coerce');
goog.require('reagent.core');
arimaa.utils.initial_focus_wrapper = cljs.core.with_meta(cljs.core.identity,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$124,(function (p1__12227_SHARP_){
return reagent.core.dom_node(p1__12227_SHARP_).focus();
})], null));
arimaa.utils.scroll_bottom_wrapper = (function (){var scroll_bottom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return cljs.core.with_meta(cljs.core.identity,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,((function (scroll_bottom){
return (function (p1__12228_SHARP_){
var element = reagent.core.dom_node(p1__12228_SHARP_);
var G__12230 = scroll_bottom;
var G__12231 = (element.scrollTop === (element.scrollHeight - element.clientHeight));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12230,G__12231) : cljs.core.reset_BANG_.call(null,G__12230,G__12231));
});})(scroll_bottom))
,cljs.core.constant$keyword$126,((function (scroll_bottom){
return (function (p1__12229_SHARP_){
if(cljs.core.truth_((function (){var G__12232 = scroll_bottom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12232) : cljs.core.deref.call(null,G__12232));
})())){
var element = reagent.core.dom_node(p1__12229_SHARP_);
return element.scrollTop = element.scrollHeight;
} else {
return null;
}
});})(scroll_bottom))
], null));
})();
arimaa.utils.cols = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12233_SHARP_){
return cljs.core.char$(((96) + p1__12233_SHARP_));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(9)));
arimaa.utils.subscribe_atom_to_channel_BANG_ = (function subscribe_atom_to_channel_BANG_(atm,channel){
var c__12182__auto__ = (function (){var G__12288 = (1);
return (cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(G__12288) : cljs.core.async.chan.call(null,G__12288));
})();
var G__12289_12314 = ((function (c__12182__auto__){
return (function (){
var f__12183__auto__ = (function (){var switch__12167__auto__ = ((function (c__12182__auto__){
return (function (state_12286){
var state_val_12287 = (state_12286[(1)]);
if((state_val_12287 === (7))){
var inst_12282 = (state_12286[(2)]);
var state_12286__$1 = state_12286;
var statearr_12290_12315 = state_12286__$1;
(statearr_12290_12315[(2)] = inst_12282);

(statearr_12290_12315[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_12287 === (6))){
var state_12286__$1 = state_12286;
var statearr_12291_12316 = state_12286__$1;
(statearr_12291_12316[(2)] = null);

(statearr_12291_12316[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_12287 === (5))){
var state_12286__$1 = state_12286;
var statearr_12292_12317 = state_12286__$1;
(statearr_12292_12317[(2)] = null);

(statearr_12292_12317[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_12287 === (4))){
var inst_12276 = (state_12286[(2)]);
var inst_12277 = (function (){var G__12293 = atm;
var G__12294 = inst_12276;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12293,G__12294) : cljs.core.reset_BANG_.call(null,G__12293,G__12294));
})();
var state_12286__$1 = (function (){var statearr_12295 = state_12286;
(statearr_12295[(7)] = inst_12277);

return statearr_12295;
})();
if(cljs.core.truth_(inst_12276)){
var statearr_12296_12318 = state_12286__$1;
(statearr_12296_12318[(1)] = (5));

} else {
var statearr_12297_12319 = state_12286__$1;
(statearr_12297_12319[(1)] = (6));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_12287 === (3))){
var inst_12284 = (state_12286[(2)]);
var state_12286__$1 = state_12286;
var G__12298 = state_12286__$1;
var G__12299 = inst_12284;
return (cljs.core.async.impl.ioc_helpers.return_chan.cljs$core$IFn$_invoke$arity$2 ? cljs.core.async.impl.ioc_helpers.return_chan.cljs$core$IFn$_invoke$arity$2(G__12298,G__12299) : cljs.core.async.impl.ioc_helpers.return_chan.call(null,G__12298,G__12299));
} else {
if((state_val_12287 === (2))){
var state_12286__$1 = state_12286;
var G__12300 = state_12286__$1;
var G__12301 = (4);
var G__12302 = channel;
return (cljs.core.async.impl.ioc_helpers.take_BANG_.cljs$core$IFn$_invoke$arity$3 ? cljs.core.async.impl.ioc_helpers.take_BANG_.cljs$core$IFn$_invoke$arity$3(G__12300,G__12301,G__12302) : cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,G__12300,G__12301,G__12302));
} else {
if((state_val_12287 === (1))){
var state_12286__$1 = state_12286;
var statearr_12303_12320 = state_12286__$1;
(statearr_12303_12320[(2)] = null);

(statearr_12303_12320[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
return null;
}
}
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
var statearr_12308 = [null,null,null,null,null,null,null,null];
(statearr_12308[(0)] = state_machine__12168__auto__);

(statearr_12308[(1)] = (1));

return statearr_12308;
});
var state_machine__12168__auto____1 = (function (state_12286){
while(true){
var ret_value__12169__auto__ = (function (){try{while(true){
var result__12170__auto__ = switch__12167__auto__(state_12286);
if(cljs.core.keyword_identical_QMARK_(result__12170__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12170__auto__;
}
break;
}
}catch (e12309){if((e12309 instanceof Object)){
var ex__12171__auto__ = e12309;
var statearr_12310_12321 = state_12286;
(statearr_12310_12321[(5)] = ex__12171__auto__);


var G__12311_12322 = state_12286;
(cljs.core.async.impl.ioc_helpers.process_exception.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.ioc_helpers.process_exception.cljs$core$IFn$_invoke$arity$1(G__12311_12322) : cljs.core.async.impl.ioc_helpers.process_exception.call(null,G__12311_12322));

return cljs.core.constant$keyword$127;
} else {
throw e12309;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12169__auto__,cljs.core.constant$keyword$127)){
var G__12323 = state_12286;
state_12286 = G__12323;
continue;
} else {
return ret_value__12169__auto__;
}
break;
}
});
state_machine__12168__auto__ = function(state_12286){
switch(arguments.length){
case 0:
return state_machine__12168__auto____0.call(this);
case 1:
return state_machine__12168__auto____1.call(this,state_12286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12168__auto____0;
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12168__auto____1;
return state_machine__12168__auto__;
})()
;})(switch__12167__auto__,c__12182__auto__))
})();
var state__12184__auto__ = (function (){var statearr_12312 = (function (){return (f__12183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12183__auto__.cljs$core$IFn$_invoke$arity$0() : f__12183__auto__.call(null));
})();
(statearr_12312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12182__auto__);

return statearr_12312;
})();
var G__12313 = state__12184__auto__;
return (cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.cljs$core$IFn$_invoke$arity$1(G__12313) : cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,G__12313));
});})(c__12182__auto__))
;
(cljs.core.async.impl.dispatch.run.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.dispatch.run.cljs$core$IFn$_invoke$arity$1(G__12289_12314) : cljs.core.async.impl.dispatch.run.call(null,G__12289_12314));

return c__12182__auto__;
});
arimaa.utils.url_regex = /(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?/i;
arimaa.utils.markup_user_messages = (function markup_user_messages(value){
var urls = cljs.core.re_seq(arimaa.utils.url_regex,value);
var non_url_parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,arimaa.utils.url_regex);
var linked_urls = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (urls,non_url_parts){
return (function (url){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$129,url], null),url], null);
});})(urls,non_url_parts))
,urls);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,cljs.core.first(urls))){
return linked_urls;
} else {
return cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(non_url_parts,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(linked_urls,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null)));
}
});
arimaa.utils.parse_timestamp = (function parse_timestamp(value){
return cljs_time.coerce.from_long(((1000) * value));
});
