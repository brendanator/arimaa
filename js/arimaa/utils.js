// Compiled by ClojureScript 0.0-2511
goog.provide('arimaa.utils');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.core');
arimaa.utils.initial_focus_wrapper = cljs.core.with_meta(cljs.core.identity,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$239,(function (p1__16633_SHARP_){
return reagent.core.dom_node(p1__16633_SHARP_).focus();
})], null));
arimaa.utils.scroll_bottom_wrapper = (function (){var scroll_bottom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return cljs.core.with_meta(cljs.core.identity,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$240,((function (scroll_bottom){
return (function (p1__16634_SHARP_){
var element = reagent.core.dom_node(p1__16634_SHARP_);
var G__16636 = scroll_bottom;
var G__16637 = (element.scrollTop === (element.scrollHeight - element.clientHeight));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16636,G__16637) : cljs.core.reset_BANG_.call(null,G__16636,G__16637));
});})(scroll_bottom))
,cljs.core.constant$keyword$241,((function (scroll_bottom){
return (function (p1__16635_SHARP_){
if(cljs.core.truth_((function (){var G__16638 = scroll_bottom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16638) : cljs.core.deref.call(null,G__16638));
})())){
var element = reagent.core.dom_node(p1__16635_SHARP_);
return element.scrollTop = element.scrollHeight;
} else {
return null;
}
});})(scroll_bottom))
], null));
})();
arimaa.utils.cols = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16639_SHARP_){
return cljs.core.char$(((96) + p1__16639_SHARP_));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(9)));
arimaa.utils.subscribe_atom_to_channel_BANG_ = (function subscribe_atom_to_channel_BANG_(atm,channel){
var c__5853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto__){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto__){
return (function (state_16682){
var state_val_16683 = (state_16682[(1)]);
if((state_val_16683 === (7))){
var inst_16678 = (state_16682[(2)]);
var state_16682__$1 = state_16682;
var statearr_16684_16700 = state_16682__$1;
(statearr_16684_16700[(2)] = inst_16678);

(statearr_16684_16700[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16683 === (6))){
var state_16682__$1 = state_16682;
var statearr_16685_16701 = state_16682__$1;
(statearr_16685_16701[(2)] = null);

(statearr_16685_16701[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16683 === (5))){
var state_16682__$1 = state_16682;
var statearr_16686_16702 = state_16682__$1;
(statearr_16686_16702[(2)] = null);

(statearr_16686_16702[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16683 === (4))){
var inst_16672 = (state_16682[(2)]);
var inst_16673 = (function (){var G__16687 = atm;
var G__16688 = inst_16672;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16687,G__16688) : cljs.core.reset_BANG_.call(null,G__16687,G__16688));
})();
var state_16682__$1 = (function (){var statearr_16689 = state_16682;
(statearr_16689[(7)] = inst_16673);

return statearr_16689;
})();
if(cljs.core.truth_(inst_16672)){
var statearr_16690_16703 = state_16682__$1;
(statearr_16690_16703[(1)] = (5));

} else {
var statearr_16691_16704 = state_16682__$1;
(statearr_16691_16704[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_16683 === (3))){
var inst_16680 = (state_16682[(2)]);
var state_16682__$1 = state_16682;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16682__$1,inst_16680);
} else {
if((state_val_16683 === (2))){
var state_16682__$1 = state_16682;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16682__$1,(4),channel);
} else {
if((state_val_16683 === (1))){
var state_16682__$1 = state_16682;
var statearr_16692_16705 = state_16682__$1;
(statearr_16692_16705[(2)] = null);

(statearr_16692_16705[(1)] = (2));


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
var statearr_16696 = [null,null,null,null,null,null,null,null];
(statearr_16696[(0)] = state_machine__5839__auto__);

(statearr_16696[(1)] = (1));

return statearr_16696;
});
var state_machine__5839__auto____1 = (function (state_16682){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_16682);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e16697){if((e16697 instanceof Object)){
var ex__5842__auto__ = e16697;
var statearr_16698_16706 = state_16682;
(statearr_16698_16706[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16682);

return cljs.core.constant$keyword$41;
} else {
throw e16697;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__16707 = state_16682;
state_16682 = G__16707;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_16682){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_16682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto__))
})();
var state__5855__auto__ = (function (){var statearr_16699 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_16699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto__);

return statearr_16699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto__))
);

return c__5853__auto__;
});
arimaa.utils.url_regex = /(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?/i;
arimaa.utils.markup_user_messages = (function markup_user_messages(value){
var urls = cljs.core.re_seq(arimaa.utils.url_regex,value);
var non_url_parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,arimaa.utils.url_regex);
var linked_urls = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (urls,non_url_parts){
return (function (url){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$243,url], null),url], null);
});})(urls,non_url_parts))
,urls);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,cljs.core.first(urls))){
return linked_urls;
} else {
return cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(non_url_parts,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(linked_urls,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null)));
}
});
