// Compiled by ClojureScript 0.0-2511
goog.provide('reagent.impl.batching');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.impl.util');
goog.require('reagent.ratom');
goog.require('reagent.interop');
goog.require('reagent.debug');
reagent.impl.batching.fake_raf = (function fake_raf(f){
var G__16202 = f;
var G__16203 = (16);
return setTimeout(G__16202,G__16203);
});
reagent.impl.batching.next_tick = ((cljs.core.not(reagent.impl.util.is_client))?reagent.impl.batching.fake_raf:(function (){var w = window;
var or__3630__auto__ = (w["requestAnimationFrame"]);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (w["webkitRequestAnimationFrame"]);
if(cljs.core.truth_(or__3630__auto____$1)){
return or__3630__auto____$1;
} else {
var or__3630__auto____$2 = (w["mozRequestAnimationFrame"]);
if(cljs.core.truth_(or__3630__auto____$2)){
return or__3630__auto____$2;
} else {
var or__3630__auto____$3 = (w["msRequestAnimationFrame"]);
if(cljs.core.truth_(or__3630__auto____$3)){
return or__3630__auto____$3;
} else {
return reagent.impl.batching.fake_raf;
}
}
}
}
})());
reagent.impl.batching.compare_levels = (function compare_levels(c1,c2){
return ((c1["props"]["level"]) - (c2["props"]["level"]));
});
reagent.impl.batching.run_queue = (function run_queue(a){
a.sort(reagent.impl.batching.compare_levels);

var n__4517__auto__ = a.length;
var i = (0);
while(true){
if((i < n__4517__auto__)){
var c_16204 = (a[i]);
if(cljs.core.truth_((c_16204["cljsIsDirty"]))){
(c_16204["forceUpdate"])();
} else {
}

var G__16205 = (i + (1));
i = G__16205;
continue;
} else {
return null;
}
break;
}
});

/**
* @constructor
*/
reagent.impl.batching.RenderQueue = (function (queue,scheduled_QMARK_){
this.queue = queue;
this.scheduled_QMARK_ = scheduled_QMARK_;
})
reagent.impl.batching.RenderQueue.prototype.queue_render = (function (c){
var self__ = this;
var this$ = this;
self__.queue.push(c);

return this$.schedule();
});

reagent.impl.batching.RenderQueue.prototype.schedule = (function (){
var self__ = this;
var this$ = this;
if(cljs.core.truth_(self__.scheduled_QMARK_)){
return null;
} else {
self__.scheduled_QMARK_ = true;

var G__16206 = ((function (this$){
return (function (){
return this$.run_queue();
});})(this$))
;
return (reagent.impl.batching.next_tick.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.batching.next_tick.cljs$core$IFn$_invoke$arity$1(G__16206) : reagent.impl.batching.next_tick.call(null,G__16206));
}
});

reagent.impl.batching.RenderQueue.prototype.run_queue = (function (){
var self__ = this;
var _ = this;
var q = self__.queue;
self__.queue = [];

self__.scheduled_QMARK_ = false;

return reagent.impl.batching.run_queue(q);
});

reagent.impl.batching.RenderQueue.cljs$lang$type = true;

reagent.impl.batching.RenderQueue.cljs$lang$ctorStr = "reagent.impl.batching/RenderQueue";

reagent.impl.batching.RenderQueue.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"reagent.impl.batching/RenderQueue");
});

reagent.impl.batching.__GT_RenderQueue = (function __GT_RenderQueue(queue,scheduled_QMARK_){
return (new reagent.impl.batching.RenderQueue(queue,scheduled_QMARK_));
});

reagent.impl.batching.render_queue = (new reagent.impl.batching.RenderQueue([],false));
reagent.impl.batching.flush = (function flush(){
return reagent.impl.batching.render_queue.run_queue();
});
reagent.impl.batching.queue_render = (function queue_render(c){
(c["cljsIsDirty"] = true);

return reagent.impl.batching.render_queue.queue_render(c);
});
reagent.impl.batching.mark_rendered = (function mark_rendered(c){
return (c["cljsIsDirty"] = false);
});
reagent.impl.batching.is_reagent_component = (function is_reagent_component(c){
var G__16208 = c;
var G__16208__$1 = (((G__16208 == null))?null:(G__16208["props"]));
var G__16208__$2 = (((G__16208__$1 == null))?null:(G__16208__$1["argv"]));
return G__16208__$2;
});
reagent.impl.batching.run_reactively = (function run_reactively(c,run){
if(cljs.core.truth_(reagent.impl.batching.is_reagent_component(c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"is-reagent-component","is-reagent-component",-1856228005,null),new cljs.core.Symbol(null,"c","c",-122660552,null))], 0)))].join('')));
}

reagent.impl.batching.mark_rendered(c);

var rat = (c["cljsRatom"]);
if((rat == null)){
var res = reagent.ratom.capture_derefed(run,c);
var derefed = reagent.ratom.captured(c);
if(!((derefed == null))){
(c["cljsRatom"] = reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic(run,cljs.core.array_seq([cljs.core.constant$keyword$27,((function (res,derefed,rat){
return (function (){
return reagent.impl.batching.queue_render(c);
});})(res,derefed,rat))
,cljs.core.constant$keyword$24,derefed], 0)));
} else {
}

return res;
} else {
return reagent.ratom.run(rat);
}
});
reagent.impl.batching.dispose = (function dispose(c){
var G__16210_16211 = (c["cljsRatom"]);
var G__16210_16212__$1 = (((G__16210_16211 == null))?null:reagent.ratom.dispose_BANG_(G__16210_16211));

return reagent.impl.batching.mark_rendered(c);
});
