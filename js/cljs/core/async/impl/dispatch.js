// Compiled by ClojureScript 0.0-2511
goog.provide('cljs.core.async.impl.dispatch');
goog.require('cljs.core');
goog.require('goog.async.nextTick');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.dispatch.tasks = cljs.core.async.impl.buffers.ring_buffer((32));
cljs.core.async.impl.dispatch.running_QMARK_ = false;
cljs.core.async.impl.dispatch.queued_QMARK_ = false;
cljs.core.async.impl.dispatch.TASK_BATCH_SIZE = (1024);
cljs.core.async.impl.dispatch.process_messages = (function process_messages(){
cljs.core.async.impl.dispatch.running_QMARK_ = true;

cljs.core.async.impl.dispatch.queued_QMARK_ = false;

var count_27440 = (0);
while(true){
var m_27441 = cljs.core.async.impl.dispatch.tasks.pop();
if((m_27441 == null)){
} else {
(m_27441.cljs$core$IFn$_invoke$arity$0 ? m_27441.cljs$core$IFn$_invoke$arity$0() : m_27441.call(null));

if((count_27440 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE)){
var G__27442 = (count_27440 + (1));
count_27440 = G__27442;
continue;
} else {
}
}
break;
}

cljs.core.async.impl.dispatch.running_QMARK_ = false;

if((cljs.core.async.impl.dispatch.tasks.length > (0))){
return (cljs.core.async.impl.dispatch.queue_dispatcher.cljs$core$IFn$_invoke$arity$0 ? cljs.core.async.impl.dispatch.queue_dispatcher.cljs$core$IFn$_invoke$arity$0() : cljs.core.async.impl.dispatch.queue_dispatcher.call(null));
} else {
return null;
}
});
cljs.core.async.impl.dispatch.queue_dispatcher = (function queue_dispatcher(){
if(cljs.core.truth_((function (){var and__3618__auto__ = cljs.core.async.impl.dispatch.queued_QMARK_;
if(cljs.core.truth_(and__3618__auto__)){
return cljs.core.async.impl.dispatch.running_QMARK_;
} else {
return and__3618__auto__;
}
})())){
return null;
} else {
cljs.core.async.impl.dispatch.queued_QMARK_ = true;

var G__27444 = cljs.core.async.impl.dispatch.process_messages;
return goog.async.nextTick(G__27444);
}
});
cljs.core.async.impl.dispatch.run = (function run(f){
cljs.core.async.impl.dispatch.tasks.unbounded_unshift(f);

return cljs.core.async.impl.dispatch.queue_dispatcher();
});
cljs.core.async.impl.dispatch.queue_delay = (function queue_delay(f,delay){
var G__27447 = f;
var G__27448 = delay;
return setTimeout(G__27447,G__27448);
});
