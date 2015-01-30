// Compiled by ClojureScript 0.0-2727 {}
goog.provide('arimaa.utils');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs_time.coerce');
goog.require('reagent.core');
arimaa.utils.initial_focus_wrapper = cljs.core.with_meta(cljs.core.identity,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$217,(function (p1__16558_SHARP_){
return reagent.core.dom_node(p1__16558_SHARP_).focus();
})], null));
arimaa.utils.scroll_bottom_wrapper = (function (){var scroll_bottom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return cljs.core.with_meta(cljs.core.identity,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$218,((function (scroll_bottom){
return (function (p1__16559_SHARP_){
var element = reagent.core.dom_node(p1__16559_SHARP_);
var G__16561 = scroll_bottom;
var G__16562 = (element.scrollTop === (element.scrollHeight - element.clientHeight));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16561,G__16562) : cljs.core.reset_BANG_.call(null,G__16561,G__16562));
});})(scroll_bottom))
,cljs.core.constant$keyword$219,((function (scroll_bottom){
return (function (p1__16560_SHARP_){
if(cljs.core.truth_((function (){var G__16563 = scroll_bottom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16563) : cljs.core.deref.call(null,G__16563));
})())){
var element = reagent.core.dom_node(p1__16560_SHARP_);
return element.scrollTop = element.scrollHeight;
} else {
return null;
}
});})(scroll_bottom))
], null));
})();
arimaa.utils.cols = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16564_SHARP_){
return cljs.core.char$(((96) + p1__16564_SHARP_));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(9)));
arimaa.utils.subscribe_atom_to_channel_BANG_ = (function subscribe_atom_to_channel_BANG_(atm,channel){
var c__11733__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11733__auto__){
return (function (){
var f__11734__auto__ = (function (){var switch__11653__auto__ = ((function (c__11733__auto__){
return (function (state_16607){
var state_val_16608 = (state_16607[(1)]);
if((state_val_16608 === (7))){
var inst_16603 = (state_16607[(2)]);
var state_16607__$1 = state_16607;
var statearr_16609_16625 = state_16607__$1;
(statearr_16609_16625[(2)] = inst_16603);

(statearr_16609_16625[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_16608 === (6))){
var state_16607__$1 = state_16607;
var statearr_16610_16626 = state_16607__$1;
(statearr_16610_16626[(2)] = null);

(statearr_16610_16626[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_16608 === (5))){
var state_16607__$1 = state_16607;
var statearr_16611_16627 = state_16607__$1;
(statearr_16611_16627[(2)] = null);

(statearr_16611_16627[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_16608 === (4))){
var inst_16597 = (state_16607[(2)]);
var inst_16598 = (function (){var G__16612 = atm;
var G__16613 = inst_16597;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16612,G__16613) : cljs.core.reset_BANG_.call(null,G__16612,G__16613));
})();
var state_16607__$1 = (function (){var statearr_16614 = state_16607;
(statearr_16614[(7)] = inst_16598);

return statearr_16614;
})();
if(cljs.core.truth_(inst_16597)){
var statearr_16615_16628 = state_16607__$1;
(statearr_16615_16628[(1)] = (5));

} else {
var statearr_16616_16629 = state_16607__$1;
(statearr_16616_16629[(1)] = (6));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_16608 === (3))){
var inst_16605 = (state_16607[(2)]);
var state_16607__$1 = state_16607;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16607__$1,inst_16605);
} else {
if((state_val_16608 === (2))){
var state_16607__$1 = state_16607;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16607__$1,(4),channel);
} else {
if((state_val_16608 === (1))){
var state_16607__$1 = state_16607;
var statearr_16617_16630 = state_16607__$1;
(statearr_16617_16630[(2)] = null);

(statearr_16617_16630[(1)] = (2));


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
});})(c__11733__auto__))
;
return ((function (switch__11653__auto__,c__11733__auto__){
return (function() {
var state_machine__11654__auto__ = null;
var state_machine__11654__auto____0 = (function (){
var statearr_16621 = [null,null,null,null,null,null,null,null];
(statearr_16621[(0)] = state_machine__11654__auto__);

(statearr_16621[(1)] = (1));

return statearr_16621;
});
var state_machine__11654__auto____1 = (function (state_16607){
while(true){
var ret_value__11655__auto__ = (function (){try{while(true){
var result__11656__auto__ = switch__11653__auto__(state_16607);
if(cljs.core.keyword_identical_QMARK_(result__11656__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11656__auto__;
}
break;
}
}catch (e16622){if((e16622 instanceof Object)){
var ex__11657__auto__ = e16622;
var statearr_16623_16631 = state_16607;
(statearr_16623_16631[(5)] = ex__11657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16607);

return cljs.core.constant$keyword$65;
} else {
throw e16622;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11655__auto__,cljs.core.constant$keyword$65)){
var G__16632 = state_16607;
state_16607 = G__16632;
continue;
} else {
return ret_value__11655__auto__;
}
break;
}
});
state_machine__11654__auto__ = function(state_16607){
switch(arguments.length){
case 0:
return state_machine__11654__auto____0.call(this);
case 1:
return state_machine__11654__auto____1.call(this,state_16607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11654__auto____0;
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11654__auto____1;
return state_machine__11654__auto__;
})()
;})(switch__11653__auto__,c__11733__auto__))
})();
var state__11735__auto__ = (function (){var statearr_16624 = (function (){return (f__11734__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11734__auto__.cljs$core$IFn$_invoke$arity$0() : f__11734__auto__.call(null));
})();
(statearr_16624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11733__auto__);

return statearr_16624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11735__auto__);
});})(c__11733__auto__))
);

return c__11733__auto__;
});
arimaa.utils.url_regex = /(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?/i;
arimaa.utils.markup_user_messages = (function markup_user_messages(value){
var urls = cljs.core.re_seq(arimaa.utils.url_regex,value);
var non_url_parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,arimaa.utils.url_regex);
var linked_urls = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (urls,non_url_parts){
return (function (url){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$220,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$221,url], null),url], null);
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
