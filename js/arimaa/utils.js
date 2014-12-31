// Compiled by ClojureScript 0.0-2511
goog.provide('arimaa.utils');
goog.require('cljs.core');
goog.require('reagent.core');
arimaa.utils.initial_focus_wrapper = cljs.core.with_meta(cljs.core.identity,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$38,(function (p1__10047_SHARP_){
return reagent.core.dom_node(p1__10047_SHARP_).focus();
})], null));
arimaa.utils.scroll_bottom_wrapper = (function (){var scroll_bottom = (function (){var G__10050 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10050) : cljs.core.atom.call(null,G__10050));
})();
return cljs.core.with_meta(cljs.core.identity,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$39,((function (scroll_bottom){
return (function (p1__10048_SHARP_){
var element = reagent.core.dom_node(p1__10048_SHARP_);
var G__10051 = scroll_bottom;
var G__10052 = (element.scrollTop === (element.scrollHeight - element.clientHeight));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10051,G__10052) : cljs.core.reset_BANG_.call(null,G__10051,G__10052));
});})(scroll_bottom))
,cljs.core.constant$keyword$40,((function (scroll_bottom){
return (function (p1__10049_SHARP_){
if(cljs.core.truth_((function (){var G__10053 = scroll_bottom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10053) : cljs.core.deref.call(null,G__10053));
})())){
var element = reagent.core.dom_node(p1__10049_SHARP_);
return element.scrollTop = element.scrollHeight;
} else {
return null;
}
});})(scroll_bottom))
], null));
})();
arimaa.utils.cols = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10054_SHARP_){
return cljs.core.char$(((96) + p1__10054_SHARP_));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(9)));
