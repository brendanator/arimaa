// Compiled by ClojureScript 0.0-2657 {}
goog.provide('arimaa.utils');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.core');
arimaa.utils.initial_focus_wrapper = cljs.core.with_meta(cljs.core.identity,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$240,(function (p1__16046_SHARP_){
return reagent.core.dom_node(p1__16046_SHARP_).focus();
})], null));
arimaa.utils.scroll_bottom_wrapper = (function (){var scroll_bottom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return cljs.core.with_meta(cljs.core.identity,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$241,((function (scroll_bottom){
return (function (p1__16047_SHARP_){
var element = reagent.core.dom_node(p1__16047_SHARP_);
var G__16049 = scroll_bottom;
var G__16050 = (element.scrollTop === (element.scrollHeight - element.clientHeight));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16049,G__16050) : cljs.core.reset_BANG_.call(null,G__16049,G__16050));
});})(scroll_bottom))
,cljs.core.constant$keyword$242,((function (scroll_bottom){
return (function (p1__16048_SHARP_){
if(cljs.core.truth_((function (){var G__16051 = scroll_bottom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16051) : cljs.core.deref.call(null,G__16051));
})())){
var element = reagent.core.dom_node(p1__16048_SHARP_);
return element.scrollTop = element.scrollHeight;
} else {
return null;
}
});})(scroll_bottom))
], null));
})();
arimaa.utils.cols = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16052_SHARP_){
return cljs.core.char$(((96) + p1__16052_SHARP_));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(9)));
arimaa.utils.subscribe_atom_to_channel_BANG_ = (function subscribe_atom_to_channel_BANG_(atm,channel){
var c__11621__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11621__auto__){
return (function (){
var f__11622__auto__ = (function (){var switch__11541__auto__ = ((function (c__11621__auto__){
return (function (state_16095){
var state_val_16096 = (state_16095[(1)]);
if((state_val_16096 === (7))){
var inst_16091 = (state_16095[(2)]);
var state_16095__$1 = state_16095;
var statearr_16097_16113 = state_16095__$1;
(statearr_16097_16113[(2)] = inst_16091);

(statearr_16097_16113[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_16096 === (6))){
var state_16095__$1 = state_16095;
var statearr_16098_16114 = state_16095__$1;
(statearr_16098_16114[(2)] = null);

(statearr_16098_16114[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_16096 === (5))){
var state_16095__$1 = state_16095;
var statearr_16099_16115 = state_16095__$1;
(statearr_16099_16115[(2)] = null);

(statearr_16099_16115[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_16096 === (4))){
var inst_16085 = (state_16095[(2)]);
var inst_16086 = (function (){var G__16100 = atm;
var G__16101 = inst_16085;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16100,G__16101) : cljs.core.reset_BANG_.call(null,G__16100,G__16101));
})();
var state_16095__$1 = (function (){var statearr_16102 = state_16095;
(statearr_16102[(7)] = inst_16086);

return statearr_16102;
})();
if(cljs.core.truth_(inst_16085)){
var statearr_16103_16116 = state_16095__$1;
(statearr_16103_16116[(1)] = (5));

} else {
var statearr_16104_16117 = state_16095__$1;
(statearr_16104_16117[(1)] = (6));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_16096 === (3))){
var inst_16093 = (state_16095[(2)]);
var state_16095__$1 = state_16095;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16095__$1,inst_16093);
} else {
if((state_val_16096 === (2))){
var state_16095__$1 = state_16095;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16095__$1,(4),channel);
} else {
if((state_val_16096 === (1))){
var state_16095__$1 = state_16095;
var statearr_16105_16118 = state_16095__$1;
(statearr_16105_16118[(2)] = null);

(statearr_16105_16118[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
return null;
}
}
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
var statearr_16109 = [null,null,null,null,null,null,null,null];
(statearr_16109[(0)] = state_machine__11542__auto__);

(statearr_16109[(1)] = (1));

return statearr_16109;
});
var state_machine__11542__auto____1 = (function (state_16095){
while(true){
var ret_value__11543__auto__ = (function (){try{while(true){
var result__11544__auto__ = switch__11541__auto__(state_16095);
if(cljs.core.keyword_identical_QMARK_(result__11544__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11544__auto__;
}
break;
}
}catch (e16110){if((e16110 instanceof Object)){
var ex__11545__auto__ = e16110;
var statearr_16111_16119 = state_16095;
(statearr_16111_16119[(5)] = ex__11545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16095);

return cljs.core.constant$keyword$65;
} else {
throw e16110;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11543__auto__,cljs.core.constant$keyword$65)){
var G__16120 = state_16095;
state_16095 = G__16120;
continue;
} else {
return ret_value__11543__auto__;
}
break;
}
});
state_machine__11542__auto__ = function(state_16095){
switch(arguments.length){
case 0:
return state_machine__11542__auto____0.call(this);
case 1:
return state_machine__11542__auto____1.call(this,state_16095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11542__auto____0;
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11542__auto____1;
return state_machine__11542__auto__;
})()
;})(switch__11541__auto__,c__11621__auto__))
})();
var state__11623__auto__ = (function (){var statearr_16112 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_16112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto__);

return statearr_16112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(c__11621__auto__))
);

return c__11621__auto__;
});
arimaa.utils.url_regex = /(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?/i;
arimaa.utils.markup_user_messages = (function markup_user_messages(value){
var urls = cljs.core.re_seq(arimaa.utils.url_regex,value);
var non_url_parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,arimaa.utils.url_regex);
var linked_urls = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (urls,non_url_parts){
return (function (url){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$244,url], null),url], null);
});})(urls,non_url_parts))
,urls);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,cljs.core.first(urls))){
return linked_urls;
} else {
return cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(non_url_parts,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(linked_urls,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null)));
}
});
