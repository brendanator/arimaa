// Compiled by ClojureScript 0.0-2657 {}
goog.provide('arimaa.utils');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs_time.coerce');
goog.require('reagent.core');
arimaa.utils.initial_focus_wrapper = cljs.core.with_meta(cljs.core.identity,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$124,(function (p1__16743_SHARP_){
return reagent.core.dom_node(p1__16743_SHARP_).focus();
})], null));
arimaa.utils.scroll_bottom_wrapper = (function (){var scroll_bottom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return cljs.core.with_meta(cljs.core.identity,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$125,((function (scroll_bottom){
return (function (p1__16744_SHARP_){
var element = reagent.core.dom_node(p1__16744_SHARP_);
var G__16746 = scroll_bottom;
var G__16747 = (element.scrollTop === (element.scrollHeight - element.clientHeight));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16746,G__16747) : cljs.core.reset_BANG_.call(null,G__16746,G__16747));
});})(scroll_bottom))
,cljs.core.constant$keyword$126,((function (scroll_bottom){
return (function (p1__16745_SHARP_){
if(cljs.core.truth_((function (){var G__16748 = scroll_bottom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16748) : cljs.core.deref.call(null,G__16748));
})())){
var element = reagent.core.dom_node(p1__16745_SHARP_);
return element.scrollTop = element.scrollHeight;
} else {
return null;
}
});})(scroll_bottom))
], null));
})();
arimaa.utils.cols = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16749_SHARP_){
return cljs.core.char$(((96) + p1__16749_SHARP_));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(9)));
arimaa.utils.subscribe_atom_to_channel_BANG_ = (function subscribe_atom_to_channel_BANG_(atm,channel){
var c__12070__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12070__auto__){
return (function (){
var f__12071__auto__ = (function (){var switch__12055__auto__ = ((function (c__12070__auto__){
return (function (state_16792){
var state_val_16793 = (state_16792[(1)]);
if((state_val_16793 === (7))){
var inst_16788 = (state_16792[(2)]);
var state_16792__$1 = state_16792;
var statearr_16794_16810 = state_16792__$1;
(statearr_16794_16810[(2)] = inst_16788);

(statearr_16794_16810[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_16793 === (6))){
var state_16792__$1 = state_16792;
var statearr_16795_16811 = state_16792__$1;
(statearr_16795_16811[(2)] = null);

(statearr_16795_16811[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_16793 === (5))){
var state_16792__$1 = state_16792;
var statearr_16796_16812 = state_16792__$1;
(statearr_16796_16812[(2)] = null);

(statearr_16796_16812[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_16793 === (4))){
var inst_16782 = (state_16792[(2)]);
var inst_16783 = (function (){var G__16797 = atm;
var G__16798 = inst_16782;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16797,G__16798) : cljs.core.reset_BANG_.call(null,G__16797,G__16798));
})();
var state_16792__$1 = (function (){var statearr_16799 = state_16792;
(statearr_16799[(7)] = inst_16783);

return statearr_16799;
})();
if(cljs.core.truth_(inst_16782)){
var statearr_16800_16813 = state_16792__$1;
(statearr_16800_16813[(1)] = (5));

} else {
var statearr_16801_16814 = state_16792__$1;
(statearr_16801_16814[(1)] = (6));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_16793 === (3))){
var inst_16790 = (state_16792[(2)]);
var state_16792__$1 = state_16792;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16792__$1,inst_16790);
} else {
if((state_val_16793 === (2))){
var state_16792__$1 = state_16792;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16792__$1,(4),channel);
} else {
if((state_val_16793 === (1))){
var state_16792__$1 = state_16792;
var statearr_16802_16815 = state_16792__$1;
(statearr_16802_16815[(2)] = null);

(statearr_16802_16815[(1)] = (2));


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
});})(c__12070__auto__))
;
return ((function (switch__12055__auto__,c__12070__auto__){
return (function() {
var state_machine__12056__auto__ = null;
var state_machine__12056__auto____0 = (function (){
var statearr_16806 = [null,null,null,null,null,null,null,null];
(statearr_16806[(0)] = state_machine__12056__auto__);

(statearr_16806[(1)] = (1));

return statearr_16806;
});
var state_machine__12056__auto____1 = (function (state_16792){
while(true){
var ret_value__12057__auto__ = (function (){try{while(true){
var result__12058__auto__ = switch__12055__auto__(state_16792);
if(cljs.core.keyword_identical_QMARK_(result__12058__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12058__auto__;
}
break;
}
}catch (e16807){if((e16807 instanceof Object)){
var ex__12059__auto__ = e16807;
var statearr_16808_16816 = state_16792;
(statearr_16808_16816[(5)] = ex__12059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16792);

return cljs.core.constant$keyword$127;
} else {
throw e16807;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12057__auto__,cljs.core.constant$keyword$127)){
var G__16817 = state_16792;
state_16792 = G__16817;
continue;
} else {
return ret_value__12057__auto__;
}
break;
}
});
state_machine__12056__auto__ = function(state_16792){
switch(arguments.length){
case 0:
return state_machine__12056__auto____0.call(this);
case 1:
return state_machine__12056__auto____1.call(this,state_16792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12056__auto____0;
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12056__auto____1;
return state_machine__12056__auto__;
})()
;})(switch__12055__auto__,c__12070__auto__))
})();
var state__12072__auto__ = (function (){var statearr_16809 = (function (){return (f__12071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12071__auto__.cljs$core$IFn$_invoke$arity$0() : f__12071__auto__.call(null));
})();
(statearr_16809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12070__auto__);

return statearr_16809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12072__auto__);
});})(c__12070__auto__))
);

return c__12070__auto__;
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
