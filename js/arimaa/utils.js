// Compiled by ClojureScript 0.0-2511
goog.provide('arimaa.utils');
goog.require('cljs.core');
goog.require('reagent.core');
arimaa.utils.initial_focus_wrapper = cljs.core.with_meta(cljs.core.identity,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$206,(function (p1__16000_SHARP_){
return reagent.core.dom_node(p1__16000_SHARP_).focus();
})], null));
arimaa.utils.scroll_bottom_wrapper = (function (){var scroll_bottom = (function (){var G__16003 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16003) : cljs.core.atom.call(null,G__16003));
})();
return cljs.core.with_meta(cljs.core.identity,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$207,((function (scroll_bottom){
return (function (p1__16001_SHARP_){
var element = reagent.core.dom_node(p1__16001_SHARP_);
var G__16004 = scroll_bottom;
var G__16005 = (element.scrollTop === (element.scrollHeight - element.clientHeight));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16004,G__16005) : cljs.core.reset_BANG_.call(null,G__16004,G__16005));
});})(scroll_bottom))
,cljs.core.constant$keyword$208,((function (scroll_bottom){
return (function (p1__16002_SHARP_){
if(cljs.core.truth_((function (){var G__16006 = scroll_bottom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16006) : cljs.core.deref.call(null,G__16006));
})())){
var element = reagent.core.dom_node(p1__16002_SHARP_);
return element.scrollTop = element.scrollHeight;
} else {
return null;
}
});})(scroll_bottom))
], null));
})();
