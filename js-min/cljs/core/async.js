// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t22065 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22065 = (function (f,fn_handler,meta22066){
this.f = f;
this.fn_handler = fn_handler;
this.meta22066 = meta22066;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22065.cljs$lang$type = true;
cljs.core.async.t22065.cljs$lang$ctorStr = "cljs.core.async/t22065";
cljs.core.async.t22065.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t22065");
});
cljs.core.async.t22065.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22065.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t22065.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t22065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22067){var self__ = this;
var _22067__$1 = this;return self__.meta22066;
});
cljs.core.async.t22065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22067,meta22066__$1){var self__ = this;
var _22067__$1 = this;return (new cljs.core.async.t22065(self__.f,self__.fn_handler,meta22066__$1));
});
cljs.core.async.__GT_t22065 = (function __GT_t22065(f__$1,fn_handler__$1,meta22066){return (new cljs.core.async.t22065(f__$1,fn_handler__$1,meta22066));
});
}
return (new cljs.core.async.t22065(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__22069 = buff;if(G__22069)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__22069.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__22069.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__22069);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__22069);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){return chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)], 0))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout(msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(ret))
{var val_22086 = (function (){var G__22083 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22083) : cljs.core.deref.call(null,G__22083));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__22084_22087 = val_22086;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22084_22087) : fn1.call(null,G__22084_22087));
} else
{cljs.core.async.impl.dispatch.run(((function (val_22086,ret){
return (function (){var G__22085 = val_22086;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22085) : fn1.call(null,G__22085));
});})(val_22086,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;var G__22096 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22096) : cljs.core.deref.call(null,G__22096));
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = (function (){var G__22097 = retb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22097) : cljs.core.deref.call(null,G__22097));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__22098_22100 = ret;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22098_22100) : fn1.call(null,G__22098_22100));
} else
{cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){var G__22099 = ret;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22099) : fn1.call(null,G__22099));
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4510__auto___22101 = n;var x_22102 = (0);while(true){
if((x_22102 < n__4510__auto___22101))
{(a[x_22102] = (0));
{
var G__22103 = (x_22102 + (1));
x_22102 = G__22103;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n))
{return a;
} else
{var j = cljs.core.rand_int(i);(a[i] = (a[j]));
(a[j] = i);
{
var G__22104 = (i + (1));
i = G__22104;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = (function (){var G__22112 = true;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22112) : cljs.core.atom.call(null,G__22112));
})();if(typeof cljs.core.async.t22113 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22113 = (function (flag,alt_flag,meta22114){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta22114 = meta22114;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22113.cljs$lang$type = true;
cljs.core.async.t22113.cljs$lang$ctorStr = "cljs.core.async/t22113";
cljs.core.async.t22113.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t22113");
});})(flag))
;
cljs.core.async.t22113.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22113.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__22116 = self__.flag;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22116) : cljs.core.deref.call(null,G__22116));
});})(flag))
;
cljs.core.async.t22113.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__22117_22119 = self__.flag;var G__22118_22120 = null;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22117_22119,G__22118_22120) : cljs.core.reset_BANG_.call(null,G__22117_22119,G__22118_22120));
return true;
});})(flag))
;
cljs.core.async.t22113.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22115){var self__ = this;
var _22115__$1 = this;return self__.meta22114;
});})(flag))
;
cljs.core.async.t22113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22115,meta22114__$1){var self__ = this;
var _22115__$1 = this;return (new cljs.core.async.t22113(self__.flag,self__.alt_flag,meta22114__$1));
});})(flag))
;
cljs.core.async.__GT_t22113 = ((function (flag){
return (function __GT_t22113(flag__$1,alt_flag__$1,meta22114){return (new cljs.core.async.t22113(flag__$1,alt_flag__$1,meta22114));
});})(flag))
;
}
return (new cljs.core.async.t22113(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t22124 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22124 = (function (cb,flag,alt_handler,meta22125){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta22125 = meta22125;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22124.cljs$lang$type = true;
cljs.core.async.t22124.cljs$lang$ctorStr = "cljs.core.async/t22124";
cljs.core.async.t22124.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t22124");
});
cljs.core.async.t22124.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22124.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t22124.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t22124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22126){var self__ = this;
var _22126__$1 = this;return self__.meta22125;
});
cljs.core.async.t22124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22126,meta22125__$1){var self__ = this;
var _22126__$1 = this;return (new cljs.core.async.t22124(self__.cb,self__.flag,self__.alt_handler,meta22125__$1));
});
cljs.core.async.__GT_t22124 = (function __GT_t22124(cb__$1,flag__$1,alt_handler__$1,meta22125){return (new cljs.core.async.t22124(cb__$1,flag__$1,alt_handler__$1,meta22125));
});
}
return (new cljs.core.async.t22124(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$55.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__22134 = (0);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__22134) : port.call(null,G__22134));
})():null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__22135 = (1);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__22135) : port.call(null,G__22135));
})();return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22127_SHARP_){var G__22136 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22127_SHARP_,wport], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22136) : fret.call(null,G__22136));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22128_SHARP_){var G__22137 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22128_SHARP_,port], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22137) : fret.call(null,G__22137));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22138 = vbox;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22138) : cljs.core.deref.call(null,G__22138));
})(),(function (){var or__3640__auto__ = wport;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__22139 = (i + (1));
i = G__22139;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3640__auto__ = ret;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$7))
{var temp__4126__auto__ = (function (){var and__3628__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3628__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3628__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$7.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$7], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__22140){var map__22142 = p__22140;var map__22142__$1 = ((cljs.core.seq_QMARK_(map__22142))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22142):map__22142);var opts = map__22142__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__22140 = null;if (arguments.length > 1) {
  p__22140 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__22140);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__22143){
var ports = cljs.core.first(arglist__22143);
var p__22140 = cljs.core.rest(arglist__22143);
return alts_BANG___delegate(ports,p__22140);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5823__auto___22241 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5823__auto___22241){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___22241){
return (function (state_22217){var state_val_22218 = (state_22217[(1)]);if((state_val_22218 === (7)))
{var inst_22213 = (state_22217[(2)]);var state_22217__$1 = state_22217;var statearr_22219_22242 = state_22217__$1;(statearr_22219_22242[(2)] = inst_22213);
(statearr_22219_22242[(1)] = (3));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22218 === (1)))
{var state_22217__$1 = state_22217;var statearr_22220_22243 = state_22217__$1;(statearr_22220_22243[(2)] = null);
(statearr_22220_22243[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22218 === (4)))
{var inst_22196 = (state_22217[(7)]);var inst_22196__$1 = (state_22217[(2)]);var inst_22197 = (inst_22196__$1 == null);var state_22217__$1 = (function (){var statearr_22221 = state_22217;(statearr_22221[(7)] = inst_22196__$1);
return statearr_22221;
})();if(cljs.core.truth_(inst_22197))
{var statearr_22222_22244 = state_22217__$1;(statearr_22222_22244[(1)] = (5));
} else
{var statearr_22223_22245 = state_22217__$1;(statearr_22223_22245[(1)] = (6));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_22218 === (13)))
{var state_22217__$1 = state_22217;var statearr_22224_22246 = state_22217__$1;(statearr_22224_22246[(2)] = null);
(statearr_22224_22246[(1)] = (14));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22218 === (6)))
{var inst_22196 = (state_22217[(7)]);var state_22217__$1 = state_22217;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22217__$1,(11),to,inst_22196);
} else
{if((state_val_22218 === (3)))
{var inst_22215 = (state_22217[(2)]);var state_22217__$1 = state_22217;return cljs.core.async.impl.ioc_helpers.return_chan(state_22217__$1,inst_22215);
} else
{if((state_val_22218 === (12)))
{var state_22217__$1 = state_22217;var statearr_22225_22247 = state_22217__$1;(statearr_22225_22247[(2)] = null);
(statearr_22225_22247[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22218 === (2)))
{var state_22217__$1 = state_22217;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22217__$1,(4),from);
} else
{if((state_val_22218 === (11)))
{var inst_22206 = (state_22217[(2)]);var state_22217__$1 = state_22217;if(cljs.core.truth_(inst_22206))
{var statearr_22226_22248 = state_22217__$1;(statearr_22226_22248[(1)] = (12));
} else
{var statearr_22227_22249 = state_22217__$1;(statearr_22227_22249[(1)] = (13));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_22218 === (9)))
{var state_22217__$1 = state_22217;var statearr_22228_22250 = state_22217__$1;(statearr_22228_22250[(2)] = null);
(statearr_22228_22250[(1)] = (10));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22218 === (5)))
{var state_22217__$1 = state_22217;if(cljs.core.truth_(close_QMARK_))
{var statearr_22229_22251 = state_22217__$1;(statearr_22229_22251[(1)] = (8));
} else
{var statearr_22230_22252 = state_22217__$1;(statearr_22230_22252[(1)] = (9));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_22218 === (14)))
{var inst_22211 = (state_22217[(2)]);var state_22217__$1 = state_22217;var statearr_22231_22253 = state_22217__$1;(statearr_22231_22253[(2)] = inst_22211);
(statearr_22231_22253[(1)] = (7));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22218 === (10)))
{var inst_22203 = (state_22217[(2)]);var state_22217__$1 = state_22217;var statearr_22232_22254 = state_22217__$1;(statearr_22232_22254[(2)] = inst_22203);
(statearr_22232_22254[(1)] = (7));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22218 === (8)))
{var inst_22200 = cljs.core.async.close_BANG_(to);var state_22217__$1 = state_22217;var statearr_22233_22255 = state_22217__$1;(statearr_22233_22255[(2)] = inst_22200);
(statearr_22233_22255[(1)] = (10));
return cljs.core.constant$keyword$49;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5823__auto___22241))
;return ((function (switch__5808__auto__,c__5823__auto___22241){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_22237 = [null,null,null,null,null,null,null,null];(statearr_22237[(0)] = state_machine__5809__auto__);
(statearr_22237[(1)] = (1));
return statearr_22237;
});
var state_machine__5809__auto____1 = (function (state_22217){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__(state_22217);if(cljs.core.keyword_identical_QMARK_(result__5811__auto__,cljs.core.constant$keyword$49))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e22238){if((e22238 instanceof Object))
{var ex__5812__auto__ = e22238;var statearr_22239_22256 = state_22217;(statearr_22239_22256[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22217);
return cljs.core.constant$keyword$49;
} else
{throw e22238;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5810__auto__,cljs.core.constant$keyword$49))
{{
var G__22257 = state_22217;
state_22217 = G__22257;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_22217){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_22217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___22241))
})();var state__5825__auto__ = (function (){var statearr_22240 = (function (){return (f__5824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5824__auto__.cljs$core$IFn$_invoke$arity$0() : f__5824__auto__.call(null));
})();(statearr_22240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___22241);
return statearr_22240;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5825__auto__);
});})(c__5823__auto___22241))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))], 0))))));
}
var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);var process = ((function (jobs,results){
return (function (p__22443){var vec__22444 = p__22443;var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22444,(0),null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22444,(1),null);var job = vec__22444;if((job == null))
{cljs.core.async.close_BANG_(results);
return null;
} else
{var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);var c__5823__auto___22628 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5823__auto___22628,res,vec__22444,v,p,job,jobs,results){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___22628,res,vec__22444,v,p,job,jobs,results){
return (function (state_22449){var state_val_22450 = (state_22449[(1)]);if((state_val_22450 === (2)))
{var inst_22446 = (state_22449[(2)]);var inst_22447 = cljs.core.async.close_BANG_(res);var state_22449__$1 = (function (){var statearr_22451 = state_22449;(statearr_22451[(7)] = inst_22446);
return statearr_22451;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_22449__$1,inst_22447);
} else
{if((state_val_22450 === (1)))
{var state_22449__$1 = state_22449;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22449__$1,(2),res,v);
} else
{return null;
}
}
});})(c__5823__auto___22628,res,vec__22444,v,p,job,jobs,results))
;return ((function (switch__5808__auto__,c__5823__auto___22628,res,vec__22444,v,p,job,jobs,results){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_22455 = [null,null,null,null,null,null,null,null];(statearr_22455[(0)] = state_machine__5809__auto__);
(statearr_22455[(1)] = (1));
return statearr_22455;
});
var state_machine__5809__auto____1 = (function (state_22449){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__(state_22449);if(cljs.core.keyword_identical_QMARK_(result__5811__auto__,cljs.core.constant$keyword$49))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e22456){if((e22456 instanceof Object))
{var ex__5812__auto__ = e22456;var statearr_22457_22629 = state_22449;(statearr_22457_22629[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22449);
return cljs.core.constant$keyword$49;
} else
{throw e22456;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5810__auto__,cljs.core.constant$keyword$49))
{{
var G__22630 = state_22449;
state_22449 = G__22630;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_22449){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_22449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___22628,res,vec__22444,v,p,job,jobs,results))
})();var state__5825__auto__ = (function (){var statearr_22458 = (function (){return (f__5824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5824__auto__.cljs$core$IFn$_invoke$arity$0() : f__5824__auto__.call(null));
})();(statearr_22458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___22628);
return statearr_22458;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5825__auto__);
});})(c__5823__auto___22628,res,vec__22444,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__22459){var vec__22460 = p__22459;var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22460,(0),null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22460,(1),null);var job = vec__22460;if((job == null))
{cljs.core.async.close_BANG_(results);
return null;
} else
{var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var G__22461_22631 = v;var G__22462_22632 = res;(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__22461_22631,G__22462_22632) : xf.call(null,G__22461_22631,G__22462_22632));
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);
return true;
}
});})(jobs,results,process))
;var n__4510__auto___22633 = n;var __22634 = (0);while(true){
if((__22634 < n__4510__auto___22633))
{var G__22463_22635 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__22463_22635) {
case "async":
var c__5823__auto___22637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (__22634,c__5823__auto___22637,G__22463_22635,n__4510__auto___22633,jobs,results,process,async){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (__22634,c__5823__auto___22637,G__22463_22635,n__4510__auto___22633,jobs,results,process,async){
return (function (state_22476){var state_val_22477 = (state_22476[(1)]);if((state_val_22477 === (7)))
{var inst_22472 = (state_22476[(2)]);var state_22476__$1 = state_22476;var statearr_22478_22638 = state_22476__$1;(statearr_22478_22638[(2)] = inst_22472);
(statearr_22478_22638[(1)] = (3));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22477 === (6)))
{var state_22476__$1 = state_22476;var statearr_22479_22639 = state_22476__$1;(statearr_22479_22639[(2)] = null);
(statearr_22479_22639[(1)] = (7));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22477 === (5)))
{var state_22476__$1 = state_22476;var statearr_22480_22640 = state_22476__$1;(statearr_22480_22640[(2)] = null);
(statearr_22480_22640[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22477 === (4)))
{var inst_22466 = (state_22476[(2)]);var inst_22467 = async(inst_22466);var state_22476__$1 = state_22476;if(cljs.core.truth_(inst_22467))
{var statearr_22481_22641 = state_22476__$1;(statearr_22481_22641[(1)] = (5));
} else
{var statearr_22482_22642 = state_22476__$1;(statearr_22482_22642[(1)] = (6));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_22477 === (3)))
{var inst_22474 = (state_22476[(2)]);var state_22476__$1 = state_22476;return cljs.core.async.impl.ioc_helpers.return_chan(state_22476__$1,inst_22474);
} else
{if((state_val_22477 === (2)))
{var state_22476__$1 = state_22476;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22476__$1,(4),jobs);
} else
{if((state_val_22477 === (1)))
{var state_22476__$1 = state_22476;var statearr_22483_22643 = state_22476__$1;(statearr_22483_22643[(2)] = null);
(statearr_22483_22643[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{return null;
}
}
}
}
}
}
}
});})(__22634,c__5823__auto___22637,G__22463_22635,n__4510__auto___22633,jobs,results,process,async))
;return ((function (__22634,switch__5808__auto__,c__5823__auto___22637,G__22463_22635,n__4510__auto___22633,jobs,results,process,async){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_22487 = [null,null,null,null,null,null,null];(statearr_22487[(0)] = state_machine__5809__auto__);
(statearr_22487[(1)] = (1));
return statearr_22487;
});
var state_machine__5809__auto____1 = (function (state_22476){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__(state_22476);if(cljs.core.keyword_identical_QMARK_(result__5811__auto__,cljs.core.constant$keyword$49))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e22488){if((e22488 instanceof Object))
{var ex__5812__auto__ = e22488;var statearr_22489_22644 = state_22476;(statearr_22489_22644[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22476);
return cljs.core.constant$keyword$49;
} else
{throw e22488;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5810__auto__,cljs.core.constant$keyword$49))
{{
var G__22645 = state_22476;
state_22476 = G__22645;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_22476){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_22476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(__22634,switch__5808__auto__,c__5823__auto___22637,G__22463_22635,n__4510__auto___22633,jobs,results,process,async))
})();var state__5825__auto__ = (function (){var statearr_22490 = (function (){return (f__5824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5824__auto__.cljs$core$IFn$_invoke$arity$0() : f__5824__auto__.call(null));
})();(statearr_22490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___22637);
return statearr_22490;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5825__auto__);
});})(__22634,c__5823__auto___22637,G__22463_22635,n__4510__auto___22633,jobs,results,process,async))
);

break;
case "compute":
var c__5823__auto___22646 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (__22634,c__5823__auto___22646,G__22463_22635,n__4510__auto___22633,jobs,results,process,async){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (__22634,c__5823__auto___22646,G__22463_22635,n__4510__auto___22633,jobs,results,process,async){
return (function (state_22503){var state_val_22504 = (state_22503[(1)]);if((state_val_22504 === (7)))
{var inst_22499 = (state_22503[(2)]);var state_22503__$1 = state_22503;var statearr_22505_22647 = state_22503__$1;(statearr_22505_22647[(2)] = inst_22499);
(statearr_22505_22647[(1)] = (3));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22504 === (6)))
{var state_22503__$1 = state_22503;var statearr_22506_22648 = state_22503__$1;(statearr_22506_22648[(2)] = null);
(statearr_22506_22648[(1)] = (7));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22504 === (5)))
{var state_22503__$1 = state_22503;var statearr_22507_22649 = state_22503__$1;(statearr_22507_22649[(2)] = null);
(statearr_22507_22649[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22504 === (4)))
{var inst_22493 = (state_22503[(2)]);var inst_22494 = process(inst_22493);var state_22503__$1 = state_22503;if(cljs.core.truth_(inst_22494))
{var statearr_22508_22650 = state_22503__$1;(statearr_22508_22650[(1)] = (5));
} else
{var statearr_22509_22651 = state_22503__$1;(statearr_22509_22651[(1)] = (6));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_22504 === (3)))
{var inst_22501 = (state_22503[(2)]);var state_22503__$1 = state_22503;return cljs.core.async.impl.ioc_helpers.return_chan(state_22503__$1,inst_22501);
} else
{if((state_val_22504 === (2)))
{var state_22503__$1 = state_22503;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22503__$1,(4),jobs);
} else
{if((state_val_22504 === (1)))
{var state_22503__$1 = state_22503;var statearr_22510_22652 = state_22503__$1;(statearr_22510_22652[(2)] = null);
(statearr_22510_22652[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{return null;
}
}
}
}
}
}
}
});})(__22634,c__5823__auto___22646,G__22463_22635,n__4510__auto___22633,jobs,results,process,async))
;return ((function (__22634,switch__5808__auto__,c__5823__auto___22646,G__22463_22635,n__4510__auto___22633,jobs,results,process,async){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_22514 = [null,null,null,null,null,null,null];(statearr_22514[(0)] = state_machine__5809__auto__);
(statearr_22514[(1)] = (1));
return statearr_22514;
});
var state_machine__5809__auto____1 = (function (state_22503){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__(state_22503);if(cljs.core.keyword_identical_QMARK_(result__5811__auto__,cljs.core.constant$keyword$49))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e22515){if((e22515 instanceof Object))
{var ex__5812__auto__ = e22515;var statearr_22516_22653 = state_22503;(statearr_22516_22653[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22503);
return cljs.core.constant$keyword$49;
} else
{throw e22515;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5810__auto__,cljs.core.constant$keyword$49))
{{
var G__22654 = state_22503;
state_22503 = G__22654;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_22503){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_22503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(__22634,switch__5808__auto__,c__5823__auto___22646,G__22463_22635,n__4510__auto___22633,jobs,results,process,async))
})();var state__5825__auto__ = (function (){var statearr_22517 = (function (){return (f__5824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5824__auto__.cljs$core$IFn$_invoke$arity$0() : f__5824__auto__.call(null));
})();(statearr_22517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___22646);
return statearr_22517;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5825__auto__);
});})(__22634,c__5823__auto___22646,G__22463_22635,n__4510__auto___22633,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__22655 = (__22634 + (1));
__22634 = G__22655;
continue;
}
} else
{}
break;
}
var c__5823__auto___22656 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5823__auto___22656,jobs,results,process,async){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___22656,jobs,results,process,async){
return (function (state_22539){var state_val_22540 = (state_22539[(1)]);if((state_val_22540 === (9)))
{var inst_22532 = (state_22539[(2)]);var state_22539__$1 = (function (){var statearr_22541 = state_22539;(statearr_22541[(7)] = inst_22532);
return statearr_22541;
})();var statearr_22542_22657 = state_22539__$1;(statearr_22542_22657[(2)] = null);
(statearr_22542_22657[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22540 === (8)))
{var inst_22525 = (state_22539[(8)]);var inst_22530 = (state_22539[(2)]);var state_22539__$1 = (function (){var statearr_22543 = state_22539;(statearr_22543[(9)] = inst_22530);
return statearr_22543;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22539__$1,(9),results,inst_22525);
} else
{if((state_val_22540 === (7)))
{var inst_22535 = (state_22539[(2)]);var state_22539__$1 = state_22539;var statearr_22544_22658 = state_22539__$1;(statearr_22544_22658[(2)] = inst_22535);
(statearr_22544_22658[(1)] = (3));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22540 === (6)))
{var inst_22520 = (state_22539[(10)]);var inst_22525 = (state_22539[(8)]);var inst_22525__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var inst_22526 = cljs.core.PersistentVector.EMPTY_NODE;var inst_22527 = [inst_22520,inst_22525__$1];var inst_22528 = (new cljs.core.PersistentVector(null,2,(5),inst_22526,inst_22527,null));var state_22539__$1 = (function (){var statearr_22545 = state_22539;(statearr_22545[(8)] = inst_22525__$1);
return statearr_22545;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22539__$1,(8),jobs,inst_22528);
} else
{if((state_val_22540 === (5)))
{var inst_22523 = cljs.core.async.close_BANG_(jobs);var state_22539__$1 = state_22539;var statearr_22546_22659 = state_22539__$1;(statearr_22546_22659[(2)] = inst_22523);
(statearr_22546_22659[(1)] = (7));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22540 === (4)))
{var inst_22520 = (state_22539[(10)]);var inst_22520__$1 = (state_22539[(2)]);var inst_22521 = (inst_22520__$1 == null);var state_22539__$1 = (function (){var statearr_22547 = state_22539;(statearr_22547[(10)] = inst_22520__$1);
return statearr_22547;
})();if(cljs.core.truth_(inst_22521))
{var statearr_22548_22660 = state_22539__$1;(statearr_22548_22660[(1)] = (5));
} else
{var statearr_22549_22661 = state_22539__$1;(statearr_22549_22661[(1)] = (6));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_22540 === (3)))
{var inst_22537 = (state_22539[(2)]);var state_22539__$1 = state_22539;return cljs.core.async.impl.ioc_helpers.return_chan(state_22539__$1,inst_22537);
} else
{if((state_val_22540 === (2)))
{var state_22539__$1 = state_22539;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22539__$1,(4),from);
} else
{if((state_val_22540 === (1)))
{var state_22539__$1 = state_22539;var statearr_22550_22662 = state_22539__$1;(statearr_22550_22662[(2)] = null);
(statearr_22550_22662[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__5823__auto___22656,jobs,results,process,async))
;return ((function (switch__5808__auto__,c__5823__auto___22656,jobs,results,process,async){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_22554 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_22554[(0)] = state_machine__5809__auto__);
(statearr_22554[(1)] = (1));
return statearr_22554;
});
var state_machine__5809__auto____1 = (function (state_22539){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__(state_22539);if(cljs.core.keyword_identical_QMARK_(result__5811__auto__,cljs.core.constant$keyword$49))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e22555){if((e22555 instanceof Object))
{var ex__5812__auto__ = e22555;var statearr_22556_22663 = state_22539;(statearr_22556_22663[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22539);
return cljs.core.constant$keyword$49;
} else
{throw e22555;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5810__auto__,cljs.core.constant$keyword$49))
{{
var G__22664 = state_22539;
state_22539 = G__22664;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_22539){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_22539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___22656,jobs,results,process,async))
})();var state__5825__auto__ = (function (){var statearr_22557 = (function (){return (f__5824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5824__auto__.cljs$core$IFn$_invoke$arity$0() : f__5824__auto__.call(null));
})();(statearr_22557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___22656);
return statearr_22557;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5825__auto__);
});})(c__5823__auto___22656,jobs,results,process,async))
);
var c__5823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5823__auto__,jobs,results,process,async){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto__,jobs,results,process,async){
return (function (state_22595){var state_val_22596 = (state_22595[(1)]);if((state_val_22596 === (7)))
{var inst_22591 = (state_22595[(2)]);var state_22595__$1 = state_22595;var statearr_22597_22665 = state_22595__$1;(statearr_22597_22665[(2)] = inst_22591);
(statearr_22597_22665[(1)] = (3));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22596 === (20)))
{var state_22595__$1 = state_22595;var statearr_22598_22666 = state_22595__$1;(statearr_22598_22666[(2)] = null);
(statearr_22598_22666[(1)] = (21));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22596 === (1)))
{var state_22595__$1 = state_22595;var statearr_22599_22667 = state_22595__$1;(statearr_22599_22667[(2)] = null);
(statearr_22599_22667[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22596 === (4)))
{var inst_22560 = (state_22595[(7)]);var inst_22560__$1 = (state_22595[(2)]);var inst_22561 = (inst_22560__$1 == null);var state_22595__$1 = (function (){var statearr_22600 = state_22595;(statearr_22600[(7)] = inst_22560__$1);
return statearr_22600;
})();if(cljs.core.truth_(inst_22561))
{var statearr_22601_22668 = state_22595__$1;(statearr_22601_22668[(1)] = (5));
} else
{var statearr_22602_22669 = state_22595__$1;(statearr_22602_22669[(1)] = (6));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_22596 === (15)))
{var inst_22573 = (state_22595[(8)]);var state_22595__$1 = state_22595;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22595__$1,(18),to,inst_22573);
} else
{if((state_val_22596 === (21)))
{var inst_22586 = (state_22595[(2)]);var state_22595__$1 = state_22595;var statearr_22603_22670 = state_22595__$1;(statearr_22603_22670[(2)] = inst_22586);
(statearr_22603_22670[(1)] = (13));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22596 === (13)))
{var inst_22588 = (state_22595[(2)]);var state_22595__$1 = (function (){var statearr_22604 = state_22595;(statearr_22604[(9)] = inst_22588);
return statearr_22604;
})();var statearr_22605_22671 = state_22595__$1;(statearr_22605_22671[(2)] = null);
(statearr_22605_22671[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22596 === (6)))
{var inst_22560 = (state_22595[(7)]);var state_22595__$1 = state_22595;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22595__$1,(11),inst_22560);
} else
{if((state_val_22596 === (17)))
{var inst_22581 = (state_22595[(2)]);var state_22595__$1 = state_22595;if(cljs.core.truth_(inst_22581))
{var statearr_22606_22672 = state_22595__$1;(statearr_22606_22672[(1)] = (19));
} else
{var statearr_22607_22673 = state_22595__$1;(statearr_22607_22673[(1)] = (20));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_22596 === (3)))
{var inst_22593 = (state_22595[(2)]);var state_22595__$1 = state_22595;return cljs.core.async.impl.ioc_helpers.return_chan(state_22595__$1,inst_22593);
} else
{if((state_val_22596 === (12)))
{var inst_22570 = (state_22595[(10)]);var state_22595__$1 = state_22595;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22595__$1,(14),inst_22570);
} else
{if((state_val_22596 === (2)))
{var state_22595__$1 = state_22595;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22595__$1,(4),results);
} else
{if((state_val_22596 === (19)))
{var state_22595__$1 = state_22595;var statearr_22608_22674 = state_22595__$1;(statearr_22608_22674[(2)] = null);
(statearr_22608_22674[(1)] = (12));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22596 === (11)))
{var inst_22570 = (state_22595[(2)]);var state_22595__$1 = (function (){var statearr_22609 = state_22595;(statearr_22609[(10)] = inst_22570);
return statearr_22609;
})();var statearr_22610_22675 = state_22595__$1;(statearr_22610_22675[(2)] = null);
(statearr_22610_22675[(1)] = (12));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22596 === (9)))
{var state_22595__$1 = state_22595;var statearr_22611_22676 = state_22595__$1;(statearr_22611_22676[(2)] = null);
(statearr_22611_22676[(1)] = (10));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22596 === (5)))
{var state_22595__$1 = state_22595;if(cljs.core.truth_(close_QMARK_))
{var statearr_22612_22677 = state_22595__$1;(statearr_22612_22677[(1)] = (8));
} else
{var statearr_22613_22678 = state_22595__$1;(statearr_22613_22678[(1)] = (9));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_22596 === (14)))
{var inst_22575 = (state_22595[(11)]);var inst_22573 = (state_22595[(8)]);var inst_22573__$1 = (state_22595[(2)]);var inst_22574 = (inst_22573__$1 == null);var inst_22575__$1 = cljs.core.not(inst_22574);var state_22595__$1 = (function (){var statearr_22614 = state_22595;(statearr_22614[(11)] = inst_22575__$1);
(statearr_22614[(8)] = inst_22573__$1);
return statearr_22614;
})();if(inst_22575__$1)
{var statearr_22615_22679 = state_22595__$1;(statearr_22615_22679[(1)] = (15));
} else
{var statearr_22616_22680 = state_22595__$1;(statearr_22616_22680[(1)] = (16));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_22596 === (16)))
{var inst_22575 = (state_22595[(11)]);var state_22595__$1 = state_22595;var statearr_22617_22681 = state_22595__$1;(statearr_22617_22681[(2)] = inst_22575);
(statearr_22617_22681[(1)] = (17));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22596 === (10)))
{var inst_22567 = (state_22595[(2)]);var state_22595__$1 = state_22595;var statearr_22618_22682 = state_22595__$1;(statearr_22618_22682[(2)] = inst_22567);
(statearr_22618_22682[(1)] = (7));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22596 === (18)))
{var inst_22578 = (state_22595[(2)]);var state_22595__$1 = state_22595;var statearr_22619_22683 = state_22595__$1;(statearr_22619_22683[(2)] = inst_22578);
(statearr_22619_22683[(1)] = (17));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22596 === (8)))
{var inst_22564 = cljs.core.async.close_BANG_(to);var state_22595__$1 = state_22595;var statearr_22620_22684 = state_22595__$1;(statearr_22620_22684[(2)] = inst_22564);
(statearr_22620_22684[(1)] = (10));
return cljs.core.constant$keyword$49;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5823__auto__,jobs,results,process,async))
;return ((function (switch__5808__auto__,c__5823__auto__,jobs,results,process,async){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_22624 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22624[(0)] = state_machine__5809__auto__);
(statearr_22624[(1)] = (1));
return statearr_22624;
});
var state_machine__5809__auto____1 = (function (state_22595){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__(state_22595);if(cljs.core.keyword_identical_QMARK_(result__5811__auto__,cljs.core.constant$keyword$49))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e22625){if((e22625 instanceof Object))
{var ex__5812__auto__ = e22625;var statearr_22626_22685 = state_22595;(statearr_22626_22685[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22595);
return cljs.core.constant$keyword$49;
} else
{throw e22625;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5810__auto__,cljs.core.constant$keyword$49))
{{
var G__22686 = state_22595;
state_22595 = G__22686;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_22595){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_22595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto__,jobs,results,process,async))
})();var state__5825__auto__ = (function (){var statearr_22627 = (function (){return (f__5824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5824__auto__.cljs$core$IFn$_invoke$arity$0() : f__5824__auto__.call(null));
})();(statearr_22627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto__);
return statearr_22627;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5825__auto__);
});})(c__5823__auto__,jobs,results,process,async))
);
return c__5823__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.constant$keyword$56);
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.constant$keyword$57);
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5823__auto___22809 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5823__auto___22809,tc,fc){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___22809,tc,fc){
return (function (state_22783){var state_val_22784 = (state_22783[(1)]);if((state_val_22784 === (7)))
{var inst_22779 = (state_22783[(2)]);var state_22783__$1 = state_22783;var statearr_22785_22810 = state_22783__$1;(statearr_22785_22810[(2)] = inst_22779);
(statearr_22785_22810[(1)] = (3));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22784 === (1)))
{var state_22783__$1 = state_22783;var statearr_22786_22811 = state_22783__$1;(statearr_22786_22811[(2)] = null);
(statearr_22786_22811[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22784 === (4)))
{var inst_22760 = (state_22783[(7)]);var inst_22760__$1 = (state_22783[(2)]);var inst_22761 = (inst_22760__$1 == null);var state_22783__$1 = (function (){var statearr_22787 = state_22783;(statearr_22787[(7)] = inst_22760__$1);
return statearr_22787;
})();if(cljs.core.truth_(inst_22761))
{var statearr_22788_22812 = state_22783__$1;(statearr_22788_22812[(1)] = (5));
} else
{var statearr_22789_22813 = state_22783__$1;(statearr_22789_22813[(1)] = (6));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_22784 === (13)))
{var state_22783__$1 = state_22783;var statearr_22790_22814 = state_22783__$1;(statearr_22790_22814[(2)] = null);
(statearr_22790_22814[(1)] = (14));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22784 === (6)))
{var inst_22760 = (state_22783[(7)]);var inst_22766 = (function (){var G__22791 = inst_22760;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__22791) : p.call(null,G__22791));
})();var state_22783__$1 = state_22783;if(cljs.core.truth_(inst_22766))
{var statearr_22792_22815 = state_22783__$1;(statearr_22792_22815[(1)] = (9));
} else
{var statearr_22793_22816 = state_22783__$1;(statearr_22793_22816[(1)] = (10));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_22784 === (3)))
{var inst_22781 = (state_22783[(2)]);var state_22783__$1 = state_22783;return cljs.core.async.impl.ioc_helpers.return_chan(state_22783__$1,inst_22781);
} else
{if((state_val_22784 === (12)))
{var state_22783__$1 = state_22783;var statearr_22794_22817 = state_22783__$1;(statearr_22794_22817[(2)] = null);
(statearr_22794_22817[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22784 === (2)))
{var state_22783__$1 = state_22783;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22783__$1,(4),ch);
} else
{if((state_val_22784 === (11)))
{var inst_22760 = (state_22783[(7)]);var inst_22770 = (state_22783[(2)]);var state_22783__$1 = state_22783;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22783__$1,(8),inst_22770,inst_22760);
} else
{if((state_val_22784 === (9)))
{var state_22783__$1 = state_22783;var statearr_22795_22818 = state_22783__$1;(statearr_22795_22818[(2)] = tc);
(statearr_22795_22818[(1)] = (11));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22784 === (5)))
{var inst_22763 = cljs.core.async.close_BANG_(tc);var inst_22764 = cljs.core.async.close_BANG_(fc);var state_22783__$1 = (function (){var statearr_22796 = state_22783;(statearr_22796[(8)] = inst_22763);
return statearr_22796;
})();var statearr_22797_22819 = state_22783__$1;(statearr_22797_22819[(2)] = inst_22764);
(statearr_22797_22819[(1)] = (7));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22784 === (14)))
{var inst_22777 = (state_22783[(2)]);var state_22783__$1 = state_22783;var statearr_22798_22820 = state_22783__$1;(statearr_22798_22820[(2)] = inst_22777);
(statearr_22798_22820[(1)] = (7));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22784 === (10)))
{var state_22783__$1 = state_22783;var statearr_22799_22821 = state_22783__$1;(statearr_22799_22821[(2)] = fc);
(statearr_22799_22821[(1)] = (11));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22784 === (8)))
{var inst_22772 = (state_22783[(2)]);var state_22783__$1 = state_22783;if(cljs.core.truth_(inst_22772))
{var statearr_22800_22822 = state_22783__$1;(statearr_22800_22822[(1)] = (12));
} else
{var statearr_22801_22823 = state_22783__$1;(statearr_22801_22823[(1)] = (13));
}
return cljs.core.constant$keyword$49;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5823__auto___22809,tc,fc))
;return ((function (switch__5808__auto__,c__5823__auto___22809,tc,fc){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_22805 = [null,null,null,null,null,null,null,null,null];(statearr_22805[(0)] = state_machine__5809__auto__);
(statearr_22805[(1)] = (1));
return statearr_22805;
});
var state_machine__5809__auto____1 = (function (state_22783){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__(state_22783);if(cljs.core.keyword_identical_QMARK_(result__5811__auto__,cljs.core.constant$keyword$49))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e22806){if((e22806 instanceof Object))
{var ex__5812__auto__ = e22806;var statearr_22807_22824 = state_22783;(statearr_22807_22824[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22783);
return cljs.core.constant$keyword$49;
} else
{throw e22806;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5810__auto__,cljs.core.constant$keyword$49))
{{
var G__22825 = state_22783;
state_22783 = G__22825;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_22783){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_22783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___22809,tc,fc))
})();var state__5825__auto__ = (function (){var statearr_22808 = (function (){return (f__5824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5824__auto__.cljs$core$IFn$_invoke$arity$0() : f__5824__auto__.call(null));
})();(statearr_22808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___22809);
return statearr_22808;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5825__auto__);
});})(c__5823__auto___22809,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5823__auto__){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto__){
return (function (state_22874){var state_val_22875 = (state_22874[(1)]);if((state_val_22875 === (7)))
{var inst_22870 = (state_22874[(2)]);var state_22874__$1 = state_22874;var statearr_22876_22894 = state_22874__$1;(statearr_22876_22894[(2)] = inst_22870);
(statearr_22876_22894[(1)] = (3));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22875 === (6)))
{var inst_22860 = (state_22874[(7)]);var inst_22863 = (state_22874[(8)]);var inst_22867 = (function (){var G__22877 = inst_22860;var G__22878 = inst_22863;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22877,G__22878) : f.call(null,G__22877,G__22878));
})();var inst_22860__$1 = inst_22867;var state_22874__$1 = (function (){var statearr_22879 = state_22874;(statearr_22879[(7)] = inst_22860__$1);
return statearr_22879;
})();var statearr_22880_22895 = state_22874__$1;(statearr_22880_22895[(2)] = null);
(statearr_22880_22895[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22875 === (5)))
{var inst_22860 = (state_22874[(7)]);var state_22874__$1 = state_22874;var statearr_22881_22896 = state_22874__$1;(statearr_22881_22896[(2)] = inst_22860);
(statearr_22881_22896[(1)] = (7));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22875 === (4)))
{var inst_22863 = (state_22874[(8)]);var inst_22863__$1 = (state_22874[(2)]);var inst_22864 = (inst_22863__$1 == null);var state_22874__$1 = (function (){var statearr_22882 = state_22874;(statearr_22882[(8)] = inst_22863__$1);
return statearr_22882;
})();if(cljs.core.truth_(inst_22864))
{var statearr_22883_22897 = state_22874__$1;(statearr_22883_22897[(1)] = (5));
} else
{var statearr_22884_22898 = state_22874__$1;(statearr_22884_22898[(1)] = (6));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_22875 === (3)))
{var inst_22872 = (state_22874[(2)]);var state_22874__$1 = state_22874;return cljs.core.async.impl.ioc_helpers.return_chan(state_22874__$1,inst_22872);
} else
{if((state_val_22875 === (2)))
{var state_22874__$1 = state_22874;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22874__$1,(4),ch);
} else
{if((state_val_22875 === (1)))
{var inst_22860 = init;var state_22874__$1 = (function (){var statearr_22885 = state_22874;(statearr_22885[(7)] = inst_22860);
return statearr_22885;
})();var statearr_22886_22899 = state_22874__$1;(statearr_22886_22899[(2)] = null);
(statearr_22886_22899[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{return null;
}
}
}
}
}
}
}
});})(c__5823__auto__))
;return ((function (switch__5808__auto__,c__5823__auto__){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_22890 = [null,null,null,null,null,null,null,null,null];(statearr_22890[(0)] = state_machine__5809__auto__);
(statearr_22890[(1)] = (1));
return statearr_22890;
});
var state_machine__5809__auto____1 = (function (state_22874){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__(state_22874);if(cljs.core.keyword_identical_QMARK_(result__5811__auto__,cljs.core.constant$keyword$49))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e22891){if((e22891 instanceof Object))
{var ex__5812__auto__ = e22891;var statearr_22892_22900 = state_22874;(statearr_22892_22900[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22874);
return cljs.core.constant$keyword$49;
} else
{throw e22891;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5810__auto__,cljs.core.constant$keyword$49))
{{
var G__22901 = state_22874;
state_22874 = G__22901;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_22874){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_22874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto__))
})();var state__5825__auto__ = (function (){var statearr_22893 = (function (){return (f__5824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5824__auto__.cljs$core$IFn$_invoke$arity$0() : f__5824__auto__.call(null));
})();(statearr_22893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto__);
return statearr_22893;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5825__auto__);
});})(c__5823__auto__))
);
return c__5823__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5823__auto__){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto__){
return (function (state_22978){var state_val_22979 = (state_22978[(1)]);if((state_val_22979 === (7)))
{var inst_22960 = (state_22978[(2)]);var state_22978__$1 = state_22978;var statearr_22980_23003 = state_22978__$1;(statearr_22980_23003[(2)] = inst_22960);
(statearr_22980_23003[(1)] = (6));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22979 === (1)))
{var inst_22954 = cljs.core.seq(coll);var inst_22955 = inst_22954;var state_22978__$1 = (function (){var statearr_22981 = state_22978;(statearr_22981[(7)] = inst_22955);
return statearr_22981;
})();var statearr_22982_23004 = state_22978__$1;(statearr_22982_23004[(2)] = null);
(statearr_22982_23004[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22979 === (4)))
{var inst_22955 = (state_22978[(7)]);var inst_22958 = cljs.core.first(inst_22955);var state_22978__$1 = state_22978;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22978__$1,(7),ch,inst_22958);
} else
{if((state_val_22979 === (13)))
{var inst_22972 = (state_22978[(2)]);var state_22978__$1 = state_22978;var statearr_22983_23005 = state_22978__$1;(statearr_22983_23005[(2)] = inst_22972);
(statearr_22983_23005[(1)] = (10));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22979 === (6)))
{var inst_22963 = (state_22978[(2)]);var state_22978__$1 = state_22978;if(cljs.core.truth_(inst_22963))
{var statearr_22984_23006 = state_22978__$1;(statearr_22984_23006[(1)] = (8));
} else
{var statearr_22985_23007 = state_22978__$1;(statearr_22985_23007[(1)] = (9));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_22979 === (3)))
{var inst_22976 = (state_22978[(2)]);var state_22978__$1 = state_22978;return cljs.core.async.impl.ioc_helpers.return_chan(state_22978__$1,inst_22976);
} else
{if((state_val_22979 === (12)))
{var state_22978__$1 = state_22978;var statearr_22986_23008 = state_22978__$1;(statearr_22986_23008[(2)] = null);
(statearr_22986_23008[(1)] = (13));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22979 === (2)))
{var inst_22955 = (state_22978[(7)]);var state_22978__$1 = state_22978;if(cljs.core.truth_(inst_22955))
{var statearr_22987_23009 = state_22978__$1;(statearr_22987_23009[(1)] = (4));
} else
{var statearr_22988_23010 = state_22978__$1;(statearr_22988_23010[(1)] = (5));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_22979 === (11)))
{var inst_22969 = cljs.core.async.close_BANG_(ch);var state_22978__$1 = state_22978;var statearr_22989_23011 = state_22978__$1;(statearr_22989_23011[(2)] = inst_22969);
(statearr_22989_23011[(1)] = (13));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22979 === (9)))
{var state_22978__$1 = state_22978;if(cljs.core.truth_(close_QMARK_))
{var statearr_22990_23012 = state_22978__$1;(statearr_22990_23012[(1)] = (11));
} else
{var statearr_22991_23013 = state_22978__$1;(statearr_22991_23013[(1)] = (12));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_22979 === (5)))
{var inst_22955 = (state_22978[(7)]);var state_22978__$1 = state_22978;var statearr_22992_23014 = state_22978__$1;(statearr_22992_23014[(2)] = inst_22955);
(statearr_22992_23014[(1)] = (6));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22979 === (10)))
{var inst_22974 = (state_22978[(2)]);var state_22978__$1 = state_22978;var statearr_22993_23015 = state_22978__$1;(statearr_22993_23015[(2)] = inst_22974);
(statearr_22993_23015[(1)] = (3));
return cljs.core.constant$keyword$49;
} else
{if((state_val_22979 === (8)))
{var inst_22955 = (state_22978[(7)]);var inst_22965 = cljs.core.next(inst_22955);var inst_22955__$1 = inst_22965;var state_22978__$1 = (function (){var statearr_22994 = state_22978;(statearr_22994[(7)] = inst_22955__$1);
return statearr_22994;
})();var statearr_22995_23016 = state_22978__$1;(statearr_22995_23016[(2)] = null);
(statearr_22995_23016[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5823__auto__))
;return ((function (switch__5808__auto__,c__5823__auto__){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_22999 = [null,null,null,null,null,null,null,null];(statearr_22999[(0)] = state_machine__5809__auto__);
(statearr_22999[(1)] = (1));
return statearr_22999;
});
var state_machine__5809__auto____1 = (function (state_22978){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__(state_22978);if(cljs.core.keyword_identical_QMARK_(result__5811__auto__,cljs.core.constant$keyword$49))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e23000){if((e23000 instanceof Object))
{var ex__5812__auto__ = e23000;var statearr_23001_23017 = state_22978;(statearr_23001_23017[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22978);
return cljs.core.constant$keyword$49;
} else
{throw e23000;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5810__auto__,cljs.core.constant$keyword$49))
{{
var G__23018 = state_22978;
state_22978 = G__23018;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_22978){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_22978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto__))
})();var state__5825__auto__ = (function (){var statearr_23002 = (function (){return (f__5824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5824__auto__.cljs$core$IFn$_invoke$arity$0() : f__5824__auto__.call(null));
})();(statearr_23002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto__);
return statearr_23002;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5825__auto__);
});})(c__5823__auto__))
);
return c__5823__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj23020 = {};return obj23020;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3628__auto__ = _;if(and__3628__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4277__auto__ = (((_ == null))?null:_);return (function (){var or__3640__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__23024 = x__4277__auto__;return goog.typeOf(G__23024);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj23026 = {};return obj23026;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__23030 = x__4277__auto__;return goog.typeOf(G__23030);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__23034 = x__4277__auto__;return goog.typeOf(G__23034);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__23038 = x__4277__auto__;return goog.typeOf(G__23038);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = (function (){var G__23268 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23268) : cljs.core.atom.call(null,G__23268));
})();var m = (function (){if(typeof cljs.core.async.t23269 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23269 = (function (cs,ch,mult,meta23270){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta23270 = meta23270;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23269.cljs$lang$type = true;
cljs.core.async.t23269.cljs$lang$ctorStr = "cljs.core.async/t23269";
cljs.core.async.t23269.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23269");
});})(cs))
;
cljs.core.async.t23269.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t23269.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t23269.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t23269.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;var G__23272_23497 = self__.cs;var G__23273_23498 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23272_23497,G__23273_23498) : cljs.core.reset_BANG_.call(null,G__23272_23497,G__23273_23498));
return null;
});})(cs))
;
cljs.core.async.t23269.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23269.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t23269.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23271){var self__ = this;
var _23271__$1 = this;return self__.meta23270;
});})(cs))
;
cljs.core.async.t23269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23271,meta23270__$1){var self__ = this;
var _23271__$1 = this;return (new cljs.core.async.t23269(self__.cs,self__.ch,self__.mult,meta23270__$1));
});})(cs))
;
cljs.core.async.__GT_t23269 = ((function (cs){
return (function __GT_t23269(cs__$1,ch__$1,mult__$1,meta23270){return (new cljs.core.async.t23269(cs__$1,ch__$1,mult__$1,meta23270));
});})(cs))
;
}
return (new cljs.core.async.t23269(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__23274 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23274) : cljs.core.atom.call(null,G__23274));
})();var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5823__auto___23499 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5823__auto___23499,cs,m,dchan,dctr,done){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___23499,cs,m,dchan,dctr,done){
return (function (state_23405){var state_val_23406 = (state_23405[(1)]);if((state_val_23406 === (7)))
{var inst_23401 = (state_23405[(2)]);var state_23405__$1 = state_23405;var statearr_23407_23500 = state_23405__$1;(statearr_23407_23500[(2)] = inst_23401);
(statearr_23407_23500[(1)] = (3));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (20)))
{var inst_23306 = (state_23405[(7)]);var inst_23316 = cljs.core.first(inst_23306);var inst_23317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23316,(0),null);var inst_23318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23316,(1),null);var state_23405__$1 = (function (){var statearr_23408 = state_23405;(statearr_23408[(8)] = inst_23317);
return statearr_23408;
})();if(cljs.core.truth_(inst_23318))
{var statearr_23409_23501 = state_23405__$1;(statearr_23409_23501[(1)] = (22));
} else
{var statearr_23410_23502 = state_23405__$1;(statearr_23410_23502[(1)] = (23));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (27)))
{var inst_23348 = (state_23405[(9)]);var inst_23277 = (state_23405[(10)]);var inst_23353 = (state_23405[(11)]);var inst_23346 = (state_23405[(12)]);var inst_23353__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23346,inst_23348);var inst_23354 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23353__$1,inst_23277,done);var state_23405__$1 = (function (){var statearr_23411 = state_23405;(statearr_23411[(11)] = inst_23353__$1);
return statearr_23411;
})();if(cljs.core.truth_(inst_23354))
{var statearr_23412_23503 = state_23405__$1;(statearr_23412_23503[(1)] = (30));
} else
{var statearr_23413_23504 = state_23405__$1;(statearr_23413_23504[(1)] = (31));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (1)))
{var state_23405__$1 = state_23405;var statearr_23414_23505 = state_23405__$1;(statearr_23414_23505[(2)] = null);
(statearr_23414_23505[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (24)))
{var inst_23306 = (state_23405[(7)]);var inst_23323 = (state_23405[(2)]);var inst_23324 = cljs.core.next(inst_23306);var inst_23286 = inst_23324;var inst_23287 = null;var inst_23288 = (0);var inst_23289 = (0);var state_23405__$1 = (function (){var statearr_23415 = state_23405;(statearr_23415[(13)] = inst_23323);
(statearr_23415[(14)] = inst_23289);
(statearr_23415[(15)] = inst_23288);
(statearr_23415[(16)] = inst_23287);
(statearr_23415[(17)] = inst_23286);
return statearr_23415;
})();var statearr_23416_23506 = state_23405__$1;(statearr_23416_23506[(2)] = null);
(statearr_23416_23506[(1)] = (8));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (39)))
{var state_23405__$1 = state_23405;var statearr_23420_23507 = state_23405__$1;(statearr_23420_23507[(2)] = null);
(statearr_23420_23507[(1)] = (41));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (4)))
{var inst_23277 = (state_23405[(10)]);var inst_23277__$1 = (state_23405[(2)]);var inst_23278 = (inst_23277__$1 == null);var state_23405__$1 = (function (){var statearr_23421 = state_23405;(statearr_23421[(10)] = inst_23277__$1);
return statearr_23421;
})();if(cljs.core.truth_(inst_23278))
{var statearr_23422_23508 = state_23405__$1;(statearr_23422_23508[(1)] = (5));
} else
{var statearr_23423_23509 = state_23405__$1;(statearr_23423_23509[(1)] = (6));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (15)))
{var inst_23289 = (state_23405[(14)]);var inst_23288 = (state_23405[(15)]);var inst_23287 = (state_23405[(16)]);var inst_23286 = (state_23405[(17)]);var inst_23302 = (state_23405[(2)]);var inst_23303 = (inst_23289 + (1));var tmp23417 = inst_23288;var tmp23418 = inst_23287;var tmp23419 = inst_23286;var inst_23286__$1 = tmp23419;var inst_23287__$1 = tmp23418;var inst_23288__$1 = tmp23417;var inst_23289__$1 = inst_23303;var state_23405__$1 = (function (){var statearr_23424 = state_23405;(statearr_23424[(18)] = inst_23302);
(statearr_23424[(14)] = inst_23289__$1);
(statearr_23424[(15)] = inst_23288__$1);
(statearr_23424[(16)] = inst_23287__$1);
(statearr_23424[(17)] = inst_23286__$1);
return statearr_23424;
})();var statearr_23425_23510 = state_23405__$1;(statearr_23425_23510[(2)] = null);
(statearr_23425_23510[(1)] = (8));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (21)))
{var inst_23327 = (state_23405[(2)]);var state_23405__$1 = state_23405;var statearr_23429_23511 = state_23405__$1;(statearr_23429_23511[(2)] = inst_23327);
(statearr_23429_23511[(1)] = (18));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (31)))
{var inst_23353 = (state_23405[(11)]);var inst_23357 = done(null);var inst_23358 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23353);var state_23405__$1 = (function (){var statearr_23430 = state_23405;(statearr_23430[(19)] = inst_23357);
return statearr_23430;
})();var statearr_23431_23512 = state_23405__$1;(statearr_23431_23512[(2)] = inst_23358);
(statearr_23431_23512[(1)] = (32));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (32)))
{var inst_23348 = (state_23405[(9)]);var inst_23345 = (state_23405[(20)]);var inst_23347 = (state_23405[(21)]);var inst_23346 = (state_23405[(12)]);var inst_23360 = (state_23405[(2)]);var inst_23361 = (inst_23348 + (1));var tmp23426 = inst_23345;var tmp23427 = inst_23347;var tmp23428 = inst_23346;var inst_23345__$1 = tmp23426;var inst_23346__$1 = tmp23428;var inst_23347__$1 = tmp23427;var inst_23348__$1 = inst_23361;var state_23405__$1 = (function (){var statearr_23432 = state_23405;(statearr_23432[(9)] = inst_23348__$1);
(statearr_23432[(20)] = inst_23345__$1);
(statearr_23432[(21)] = inst_23347__$1);
(statearr_23432[(22)] = inst_23360);
(statearr_23432[(12)] = inst_23346__$1);
return statearr_23432;
})();var statearr_23433_23513 = state_23405__$1;(statearr_23433_23513[(2)] = null);
(statearr_23433_23513[(1)] = (25));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (40)))
{var inst_23373 = (state_23405[(23)]);var inst_23377 = done(null);var inst_23378 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23373);var state_23405__$1 = (function (){var statearr_23434 = state_23405;(statearr_23434[(24)] = inst_23377);
return statearr_23434;
})();var statearr_23435_23514 = state_23405__$1;(statearr_23435_23514[(2)] = inst_23378);
(statearr_23435_23514[(1)] = (41));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (33)))
{var inst_23364 = (state_23405[(25)]);var inst_23366 = cljs.core.chunked_seq_QMARK_(inst_23364);var state_23405__$1 = state_23405;if(inst_23366)
{var statearr_23436_23515 = state_23405__$1;(statearr_23436_23515[(1)] = (36));
} else
{var statearr_23437_23516 = state_23405__$1;(statearr_23437_23516[(1)] = (37));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (13)))
{var inst_23296 = (state_23405[(26)]);var inst_23299 = cljs.core.async.close_BANG_(inst_23296);var state_23405__$1 = state_23405;var statearr_23438_23517 = state_23405__$1;(statearr_23438_23517[(2)] = inst_23299);
(statearr_23438_23517[(1)] = (15));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (22)))
{var inst_23317 = (state_23405[(8)]);var inst_23320 = cljs.core.async.close_BANG_(inst_23317);var state_23405__$1 = state_23405;var statearr_23439_23518 = state_23405__$1;(statearr_23439_23518[(2)] = inst_23320);
(statearr_23439_23518[(1)] = (24));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (36)))
{var inst_23364 = (state_23405[(25)]);var inst_23368 = cljs.core.chunk_first(inst_23364);var inst_23369 = cljs.core.chunk_rest(inst_23364);var inst_23370 = cljs.core.count(inst_23368);var inst_23345 = inst_23369;var inst_23346 = inst_23368;var inst_23347 = inst_23370;var inst_23348 = (0);var state_23405__$1 = (function (){var statearr_23440 = state_23405;(statearr_23440[(9)] = inst_23348);
(statearr_23440[(20)] = inst_23345);
(statearr_23440[(21)] = inst_23347);
(statearr_23440[(12)] = inst_23346);
return statearr_23440;
})();var statearr_23441_23519 = state_23405__$1;(statearr_23441_23519[(2)] = null);
(statearr_23441_23519[(1)] = (25));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (41)))
{var inst_23364 = (state_23405[(25)]);var inst_23380 = (state_23405[(2)]);var inst_23381 = cljs.core.next(inst_23364);var inst_23345 = inst_23381;var inst_23346 = null;var inst_23347 = (0);var inst_23348 = (0);var state_23405__$1 = (function (){var statearr_23442 = state_23405;(statearr_23442[(9)] = inst_23348);
(statearr_23442[(20)] = inst_23345);
(statearr_23442[(27)] = inst_23380);
(statearr_23442[(21)] = inst_23347);
(statearr_23442[(12)] = inst_23346);
return statearr_23442;
})();var statearr_23443_23520 = state_23405__$1;(statearr_23443_23520[(2)] = null);
(statearr_23443_23520[(1)] = (25));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (43)))
{var state_23405__$1 = state_23405;var statearr_23444_23521 = state_23405__$1;(statearr_23444_23521[(2)] = null);
(statearr_23444_23521[(1)] = (44));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (29)))
{var inst_23389 = (state_23405[(2)]);var state_23405__$1 = state_23405;var statearr_23445_23522 = state_23405__$1;(statearr_23445_23522[(2)] = inst_23389);
(statearr_23445_23522[(1)] = (26));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (44)))
{var inst_23398 = (state_23405[(2)]);var state_23405__$1 = (function (){var statearr_23446 = state_23405;(statearr_23446[(28)] = inst_23398);
return statearr_23446;
})();var statearr_23447_23523 = state_23405__$1;(statearr_23447_23523[(2)] = null);
(statearr_23447_23523[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (6)))
{var inst_23337 = (state_23405[(29)]);var inst_23336 = (function (){var G__23448 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23448) : cljs.core.deref.call(null,G__23448));
})();var inst_23337__$1 = cljs.core.keys(inst_23336);var inst_23338 = cljs.core.count(inst_23337__$1);var inst_23339 = (function (){var G__23449 = dctr;var G__23450 = inst_23338;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23449,G__23450) : cljs.core.reset_BANG_.call(null,G__23449,G__23450));
})();var inst_23344 = cljs.core.seq(inst_23337__$1);var inst_23345 = inst_23344;var inst_23346 = null;var inst_23347 = (0);var inst_23348 = (0);var state_23405__$1 = (function (){var statearr_23451 = state_23405;(statearr_23451[(30)] = inst_23339);
(statearr_23451[(9)] = inst_23348);
(statearr_23451[(29)] = inst_23337__$1);
(statearr_23451[(20)] = inst_23345);
(statearr_23451[(21)] = inst_23347);
(statearr_23451[(12)] = inst_23346);
return statearr_23451;
})();var statearr_23452_23524 = state_23405__$1;(statearr_23452_23524[(2)] = null);
(statearr_23452_23524[(1)] = (25));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (28)))
{var inst_23364 = (state_23405[(25)]);var inst_23345 = (state_23405[(20)]);var inst_23364__$1 = cljs.core.seq(inst_23345);var state_23405__$1 = (function (){var statearr_23453 = state_23405;(statearr_23453[(25)] = inst_23364__$1);
return statearr_23453;
})();if(inst_23364__$1)
{var statearr_23454_23525 = state_23405__$1;(statearr_23454_23525[(1)] = (33));
} else
{var statearr_23455_23526 = state_23405__$1;(statearr_23455_23526[(1)] = (34));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (25)))
{var inst_23348 = (state_23405[(9)]);var inst_23347 = (state_23405[(21)]);var inst_23350 = (inst_23348 < inst_23347);var inst_23351 = inst_23350;var state_23405__$1 = state_23405;if(cljs.core.truth_(inst_23351))
{var statearr_23456_23527 = state_23405__$1;(statearr_23456_23527[(1)] = (27));
} else
{var statearr_23457_23528 = state_23405__$1;(statearr_23457_23528[(1)] = (28));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (34)))
{var state_23405__$1 = state_23405;var statearr_23458_23529 = state_23405__$1;(statearr_23458_23529[(2)] = null);
(statearr_23458_23529[(1)] = (35));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (17)))
{var state_23405__$1 = state_23405;var statearr_23459_23530 = state_23405__$1;(statearr_23459_23530[(2)] = null);
(statearr_23459_23530[(1)] = (18));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (3)))
{var inst_23403 = (state_23405[(2)]);var state_23405__$1 = state_23405;return cljs.core.async.impl.ioc_helpers.return_chan(state_23405__$1,inst_23403);
} else
{if((state_val_23406 === (12)))
{var inst_23332 = (state_23405[(2)]);var state_23405__$1 = state_23405;var statearr_23460_23531 = state_23405__$1;(statearr_23460_23531[(2)] = inst_23332);
(statearr_23460_23531[(1)] = (9));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (2)))
{var state_23405__$1 = state_23405;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23405__$1,(4),ch);
} else
{if((state_val_23406 === (23)))
{var state_23405__$1 = state_23405;var statearr_23461_23532 = state_23405__$1;(statearr_23461_23532[(2)] = null);
(statearr_23461_23532[(1)] = (24));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (35)))
{var inst_23387 = (state_23405[(2)]);var state_23405__$1 = state_23405;var statearr_23462_23533 = state_23405__$1;(statearr_23462_23533[(2)] = inst_23387);
(statearr_23462_23533[(1)] = (29));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (19)))
{var inst_23306 = (state_23405[(7)]);var inst_23310 = cljs.core.chunk_first(inst_23306);var inst_23311 = cljs.core.chunk_rest(inst_23306);var inst_23312 = cljs.core.count(inst_23310);var inst_23286 = inst_23311;var inst_23287 = inst_23310;var inst_23288 = inst_23312;var inst_23289 = (0);var state_23405__$1 = (function (){var statearr_23463 = state_23405;(statearr_23463[(14)] = inst_23289);
(statearr_23463[(15)] = inst_23288);
(statearr_23463[(16)] = inst_23287);
(statearr_23463[(17)] = inst_23286);
return statearr_23463;
})();var statearr_23464_23534 = state_23405__$1;(statearr_23464_23534[(2)] = null);
(statearr_23464_23534[(1)] = (8));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (11)))
{var inst_23306 = (state_23405[(7)]);var inst_23286 = (state_23405[(17)]);var inst_23306__$1 = cljs.core.seq(inst_23286);var state_23405__$1 = (function (){var statearr_23465 = state_23405;(statearr_23465[(7)] = inst_23306__$1);
return statearr_23465;
})();if(inst_23306__$1)
{var statearr_23466_23535 = state_23405__$1;(statearr_23466_23535[(1)] = (16));
} else
{var statearr_23467_23536 = state_23405__$1;(statearr_23467_23536[(1)] = (17));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (9)))
{var inst_23334 = (state_23405[(2)]);var state_23405__$1 = state_23405;var statearr_23468_23537 = state_23405__$1;(statearr_23468_23537[(2)] = inst_23334);
(statearr_23468_23537[(1)] = (7));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (5)))
{var inst_23284 = (function (){var G__23469 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23469) : cljs.core.deref.call(null,G__23469));
})();var inst_23285 = cljs.core.seq(inst_23284);var inst_23286 = inst_23285;var inst_23287 = null;var inst_23288 = (0);var inst_23289 = (0);var state_23405__$1 = (function (){var statearr_23470 = state_23405;(statearr_23470[(14)] = inst_23289);
(statearr_23470[(15)] = inst_23288);
(statearr_23470[(16)] = inst_23287);
(statearr_23470[(17)] = inst_23286);
return statearr_23470;
})();var statearr_23471_23538 = state_23405__$1;(statearr_23471_23538[(2)] = null);
(statearr_23471_23538[(1)] = (8));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (14)))
{var state_23405__$1 = state_23405;var statearr_23472_23539 = state_23405__$1;(statearr_23472_23539[(2)] = null);
(statearr_23472_23539[(1)] = (15));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (45)))
{var inst_23395 = (state_23405[(2)]);var state_23405__$1 = state_23405;var statearr_23473_23540 = state_23405__$1;(statearr_23473_23540[(2)] = inst_23395);
(statearr_23473_23540[(1)] = (44));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (26)))
{var inst_23337 = (state_23405[(29)]);var inst_23391 = (state_23405[(2)]);var inst_23392 = cljs.core.seq(inst_23337);var state_23405__$1 = (function (){var statearr_23474 = state_23405;(statearr_23474[(31)] = inst_23391);
return statearr_23474;
})();if(inst_23392)
{var statearr_23475_23541 = state_23405__$1;(statearr_23475_23541[(1)] = (42));
} else
{var statearr_23476_23542 = state_23405__$1;(statearr_23476_23542[(1)] = (43));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (16)))
{var inst_23306 = (state_23405[(7)]);var inst_23308 = cljs.core.chunked_seq_QMARK_(inst_23306);var state_23405__$1 = state_23405;if(inst_23308)
{var statearr_23477_23543 = state_23405__$1;(statearr_23477_23543[(1)] = (19));
} else
{var statearr_23478_23544 = state_23405__$1;(statearr_23478_23544[(1)] = (20));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (38)))
{var inst_23384 = (state_23405[(2)]);var state_23405__$1 = state_23405;var statearr_23479_23545 = state_23405__$1;(statearr_23479_23545[(2)] = inst_23384);
(statearr_23479_23545[(1)] = (35));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (30)))
{var state_23405__$1 = state_23405;var statearr_23480_23546 = state_23405__$1;(statearr_23480_23546[(2)] = null);
(statearr_23480_23546[(1)] = (32));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (10)))
{var inst_23289 = (state_23405[(14)]);var inst_23287 = (state_23405[(16)]);var inst_23295 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23287,inst_23289);var inst_23296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23295,(0),null);var inst_23297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23295,(1),null);var state_23405__$1 = (function (){var statearr_23481 = state_23405;(statearr_23481[(26)] = inst_23296);
return statearr_23481;
})();if(cljs.core.truth_(inst_23297))
{var statearr_23482_23547 = state_23405__$1;(statearr_23482_23547[(1)] = (13));
} else
{var statearr_23483_23548 = state_23405__$1;(statearr_23483_23548[(1)] = (14));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (18)))
{var inst_23330 = (state_23405[(2)]);var state_23405__$1 = state_23405;var statearr_23484_23549 = state_23405__$1;(statearr_23484_23549[(2)] = inst_23330);
(statearr_23484_23549[(1)] = (12));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (42)))
{var state_23405__$1 = state_23405;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23405__$1,(45),dchan);
} else
{if((state_val_23406 === (37)))
{var inst_23364 = (state_23405[(25)]);var inst_23277 = (state_23405[(10)]);var inst_23373 = (state_23405[(23)]);var inst_23373__$1 = cljs.core.first(inst_23364);var inst_23374 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23373__$1,inst_23277,done);var state_23405__$1 = (function (){var statearr_23485 = state_23405;(statearr_23485[(23)] = inst_23373__$1);
return statearr_23485;
})();if(cljs.core.truth_(inst_23374))
{var statearr_23486_23550 = state_23405__$1;(statearr_23486_23550[(1)] = (39));
} else
{var statearr_23487_23551 = state_23405__$1;(statearr_23487_23551[(1)] = (40));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_23406 === (8)))
{var inst_23289 = (state_23405[(14)]);var inst_23288 = (state_23405[(15)]);var inst_23291 = (inst_23289 < inst_23288);var inst_23292 = inst_23291;var state_23405__$1 = state_23405;if(cljs.core.truth_(inst_23292))
{var statearr_23488_23552 = state_23405__$1;(statearr_23488_23552[(1)] = (10));
} else
{var statearr_23489_23553 = state_23405__$1;(statearr_23489_23553[(1)] = (11));
}
return cljs.core.constant$keyword$49;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5823__auto___23499,cs,m,dchan,dctr,done))
;return ((function (switch__5808__auto__,c__5823__auto___23499,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_23493 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23493[(0)] = state_machine__5809__auto__);
(statearr_23493[(1)] = (1));
return statearr_23493;
});
var state_machine__5809__auto____1 = (function (state_23405){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__(state_23405);if(cljs.core.keyword_identical_QMARK_(result__5811__auto__,cljs.core.constant$keyword$49))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e23494){if((e23494 instanceof Object))
{var ex__5812__auto__ = e23494;var statearr_23495_23554 = state_23405;(statearr_23495_23554[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23405);
return cljs.core.constant$keyword$49;
} else
{throw e23494;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5810__auto__,cljs.core.constant$keyword$49))
{{
var G__23555 = state_23405;
state_23405 = G__23555;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_23405){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_23405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___23499,cs,m,dchan,dctr,done))
})();var state__5825__auto__ = (function (){var statearr_23496 = (function (){return (f__5824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5824__auto__.cljs$core$IFn$_invoke$arity$0() : f__5824__auto__.call(null));
})();(statearr_23496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___23499);
return statearr_23496;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5825__auto__);
});})(c__5823__auto___23499,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_(mult);
});
cljs.core.async.Mix = (function (){var obj23560 = {};return obj23560;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__23564 = x__4277__auto__;return goog.typeOf(G__23564);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__23568 = x__4277__auto__;return goog.typeOf(G__23568);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__23572 = x__4277__auto__;return goog.typeOf(G__23572);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__23576 = x__4277__auto__;return goog.typeOf(G__23576);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__23580 = x__4277__auto__;return goog.typeOf(G__23580);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__23581){var map__23587 = p__23581;var map__23587__$1 = ((cljs.core.seq_QMARK_(map__23587))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23587):map__23587);var opts = map__23587__$1;var statearr_23588_23592 = state;(statearr_23588_23592[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__23587,map__23587__$1,opts){
return (function (val){var statearr_23589_23593 = state;(statearr_23589_23593[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__23587,map__23587__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_23590_23594 = state;(statearr_23590_23594[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__23591 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23591) : cljs.core.deref.call(null,G__23591));
})());
return cljs.core.constant$keyword$49;
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__23581 = null;if (arguments.length > 3) {
  p__23581 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__23581);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__23595){
var state = cljs.core.first(arglist__23595);
arglist__23595 = cljs.core.next(arglist__23595);
var cont_block = cljs.core.first(arglist__23595);
arglist__23595 = cljs.core.next(arglist__23595);
var ports = cljs.core.first(arglist__23595);
var p__23581 = cljs.core.rest(arglist__23595);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__23581);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = (function (){var G__23729 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23729) : cljs.core.atom.call(null,G__23729));
})();var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$58,null,cljs.core.constant$keyword$59,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$60);var solo_mode = (function (){var G__23730 = cljs.core.constant$keyword$59;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23730) : cljs.core.atom.call(null,G__23730));
})();var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((function (){var G__23731 = v;return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__23731) : attr.call(null,G__23731));
})()))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = (function (){var G__23732 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23732) : cljs.core.deref.call(null,G__23732));
})();var mode = (function (){var G__23733 = solo_mode;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23733) : cljs.core.deref.call(null,G__23733));
})();var solos = pick(cljs.core.constant$keyword$60,chs);var pauses = pick(cljs.core.constant$keyword$58,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,solos,cljs.core.constant$keyword$62,pick(cljs.core.constant$keyword$59,chs),cljs.core.constant$keyword$63,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$58)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t23734 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23734 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23735){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23735 = meta23735;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23734.cljs$lang$type = true;
cljs.core.async.t23734.cljs$lang$ctorStr = "cljs.core.async/t23734";
cljs.core.async.t23734.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23734");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23734.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t23734.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23734.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23734.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;var G__23737_23862 = self__.cs;var G__23738_23863 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23737_23862,G__23738_23863) : cljs.core.reset_BANG_.call(null,G__23737_23862,G__23738_23863));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23734.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23734.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__23739 = mode;return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__23739) : self__.solo_modes.call(null,G__23739));
})()))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
var G__23740_23864 = self__.solo_mode;var G__23741_23865 = mode;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23740_23864,G__23741_23865) : cljs.core.reset_BANG_.call(null,G__23740_23864,G__23741_23865));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23734.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23734.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23734.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23736){var self__ = this;
var _23736__$1 = this;return self__.meta23735;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23736,meta23735__$1){var self__ = this;
var _23736__$1 = this;return (new cljs.core.async.t23734(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23735__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t23734 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t23734(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23735){return (new cljs.core.async.t23734(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23735));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t23734(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5823__auto___23866 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5823__auto___23866,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___23866,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23813){var state_val_23814 = (state_23813[(1)]);if((state_val_23814 === (7)))
{var inst_23755 = (state_23813[(7)]);var inst_23760 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23755);var state_23813__$1 = state_23813;var statearr_23815_23867 = state_23813__$1;(statearr_23815_23867[(2)] = inst_23760);
(statearr_23815_23867[(1)] = (9));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23814 === (20)))
{var inst_23770 = (state_23813[(8)]);var state_23813__$1 = state_23813;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23813__$1,(23),out,inst_23770);
} else
{if((state_val_23814 === (1)))
{var inst_23745 = (state_23813[(9)]);var inst_23745__$1 = calc_state();var inst_23746 = cljs.core.seq_QMARK_(inst_23745__$1);var state_23813__$1 = (function (){var statearr_23816 = state_23813;(statearr_23816[(9)] = inst_23745__$1);
return statearr_23816;
})();if(inst_23746)
{var statearr_23817_23868 = state_23813__$1;(statearr_23817_23868[(1)] = (2));
} else
{var statearr_23818_23869 = state_23813__$1;(statearr_23818_23869[(1)] = (3));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_23814 === (24)))
{var inst_23763 = (state_23813[(10)]);var inst_23755 = inst_23763;var state_23813__$1 = (function (){var statearr_23819 = state_23813;(statearr_23819[(7)] = inst_23755);
return statearr_23819;
})();var statearr_23820_23870 = state_23813__$1;(statearr_23820_23870[(2)] = null);
(statearr_23820_23870[(1)] = (5));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23814 === (4)))
{var inst_23745 = (state_23813[(9)]);var inst_23751 = (state_23813[(2)]);var inst_23752 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23751,cljs.core.constant$keyword$63);var inst_23753 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23751,cljs.core.constant$keyword$62);var inst_23754 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23751,cljs.core.constant$keyword$61);var inst_23755 = inst_23745;var state_23813__$1 = (function (){var statearr_23821 = state_23813;(statearr_23821[(7)] = inst_23755);
(statearr_23821[(11)] = inst_23754);
(statearr_23821[(12)] = inst_23753);
(statearr_23821[(13)] = inst_23752);
return statearr_23821;
})();var statearr_23822_23871 = state_23813__$1;(statearr_23822_23871[(2)] = null);
(statearr_23822_23871[(1)] = (5));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23814 === (15)))
{var state_23813__$1 = state_23813;var statearr_23823_23872 = state_23813__$1;(statearr_23823_23872[(2)] = null);
(statearr_23823_23872[(1)] = (16));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23814 === (21)))
{var inst_23763 = (state_23813[(10)]);var inst_23755 = inst_23763;var state_23813__$1 = (function (){var statearr_23824 = state_23813;(statearr_23824[(7)] = inst_23755);
return statearr_23824;
})();var statearr_23825_23873 = state_23813__$1;(statearr_23825_23873[(2)] = null);
(statearr_23825_23873[(1)] = (5));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23814 === (13)))
{var inst_23809 = (state_23813[(2)]);var state_23813__$1 = state_23813;var statearr_23826_23874 = state_23813__$1;(statearr_23826_23874[(2)] = inst_23809);
(statearr_23826_23874[(1)] = (6));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23814 === (22)))
{var inst_23807 = (state_23813[(2)]);var state_23813__$1 = state_23813;var statearr_23827_23875 = state_23813__$1;(statearr_23827_23875[(2)] = inst_23807);
(statearr_23827_23875[(1)] = (13));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23814 === (6)))
{var inst_23811 = (state_23813[(2)]);var state_23813__$1 = state_23813;return cljs.core.async.impl.ioc_helpers.return_chan(state_23813__$1,inst_23811);
} else
{if((state_val_23814 === (25)))
{var state_23813__$1 = state_23813;var statearr_23828_23876 = state_23813__$1;(statearr_23828_23876[(2)] = null);
(statearr_23828_23876[(1)] = (26));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23814 === (17)))
{var inst_23786 = (state_23813[(14)]);var state_23813__$1 = state_23813;var statearr_23829_23877 = state_23813__$1;(statearr_23829_23877[(2)] = inst_23786);
(statearr_23829_23877[(1)] = (19));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23814 === (3)))
{var inst_23745 = (state_23813[(9)]);var state_23813__$1 = state_23813;var statearr_23830_23878 = state_23813__$1;(statearr_23830_23878[(2)] = inst_23745);
(statearr_23830_23878[(1)] = (4));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23814 === (12)))
{var inst_23766 = (state_23813[(15)]);var inst_23786 = (state_23813[(14)]);var inst_23771 = (state_23813[(16)]);var inst_23786__$1 = (function (){var G__23831 = inst_23771;return (inst_23766.cljs$core$IFn$_invoke$arity$1 ? inst_23766.cljs$core$IFn$_invoke$arity$1(G__23831) : inst_23766.call(null,G__23831));
})();var state_23813__$1 = (function (){var statearr_23832 = state_23813;(statearr_23832[(14)] = inst_23786__$1);
return statearr_23832;
})();if(cljs.core.truth_(inst_23786__$1))
{var statearr_23833_23879 = state_23813__$1;(statearr_23833_23879[(1)] = (17));
} else
{var statearr_23834_23880 = state_23813__$1;(statearr_23834_23880[(1)] = (18));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_23814 === (2)))
{var inst_23745 = (state_23813[(9)]);var inst_23748 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23745);var state_23813__$1 = state_23813;var statearr_23835_23881 = state_23813__$1;(statearr_23835_23881[(2)] = inst_23748);
(statearr_23835_23881[(1)] = (4));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23814 === (23)))
{var inst_23798 = (state_23813[(2)]);var state_23813__$1 = state_23813;if(cljs.core.truth_(inst_23798))
{var statearr_23836_23882 = state_23813__$1;(statearr_23836_23882[(1)] = (24));
} else
{var statearr_23837_23883 = state_23813__$1;(statearr_23837_23883[(1)] = (25));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_23814 === (19)))
{var inst_23795 = (state_23813[(2)]);var state_23813__$1 = state_23813;if(cljs.core.truth_(inst_23795))
{var statearr_23838_23884 = state_23813__$1;(statearr_23838_23884[(1)] = (20));
} else
{var statearr_23839_23885 = state_23813__$1;(statearr_23839_23885[(1)] = (21));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_23814 === (11)))
{var inst_23770 = (state_23813[(8)]);var inst_23776 = (inst_23770 == null);var state_23813__$1 = state_23813;if(cljs.core.truth_(inst_23776))
{var statearr_23840_23886 = state_23813__$1;(statearr_23840_23886[(1)] = (14));
} else
{var statearr_23841_23887 = state_23813__$1;(statearr_23841_23887[(1)] = (15));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_23814 === (9)))
{var inst_23763 = (state_23813[(10)]);var inst_23763__$1 = (state_23813[(2)]);var inst_23764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23763__$1,cljs.core.constant$keyword$63);var inst_23765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23763__$1,cljs.core.constant$keyword$62);var inst_23766 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23763__$1,cljs.core.constant$keyword$61);var state_23813__$1 = (function (){var statearr_23842 = state_23813;(statearr_23842[(15)] = inst_23766);
(statearr_23842[(10)] = inst_23763__$1);
(statearr_23842[(17)] = inst_23765);
return statearr_23842;
})();return cljs.core.async.ioc_alts_BANG_(state_23813__$1,(10),inst_23764);
} else
{if((state_val_23814 === (5)))
{var inst_23755 = (state_23813[(7)]);var inst_23758 = cljs.core.seq_QMARK_(inst_23755);var state_23813__$1 = state_23813;if(inst_23758)
{var statearr_23843_23888 = state_23813__$1;(statearr_23843_23888[(1)] = (7));
} else
{var statearr_23844_23889 = state_23813__$1;(statearr_23844_23889[(1)] = (8));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_23814 === (14)))
{var inst_23771 = (state_23813[(16)]);var inst_23778 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_23771);var state_23813__$1 = state_23813;var statearr_23845_23890 = state_23813__$1;(statearr_23845_23890[(2)] = inst_23778);
(statearr_23845_23890[(1)] = (16));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23814 === (26)))
{var inst_23803 = (state_23813[(2)]);var state_23813__$1 = state_23813;var statearr_23846_23891 = state_23813__$1;(statearr_23846_23891[(2)] = inst_23803);
(statearr_23846_23891[(1)] = (22));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23814 === (16)))
{var inst_23781 = (state_23813[(2)]);var inst_23782 = calc_state();var inst_23755 = inst_23782;var state_23813__$1 = (function (){var statearr_23847 = state_23813;(statearr_23847[(7)] = inst_23755);
(statearr_23847[(18)] = inst_23781);
return statearr_23847;
})();var statearr_23848_23892 = state_23813__$1;(statearr_23848_23892[(2)] = null);
(statearr_23848_23892[(1)] = (5));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23814 === (10)))
{var inst_23771 = (state_23813[(16)]);var inst_23770 = (state_23813[(8)]);var inst_23769 = (state_23813[(2)]);var inst_23770__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23769,(0),null);var inst_23771__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23769,(1),null);var inst_23772 = (inst_23770__$1 == null);var inst_23773 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23771__$1,change);var inst_23774 = (inst_23772) || (inst_23773);var state_23813__$1 = (function (){var statearr_23849 = state_23813;(statearr_23849[(16)] = inst_23771__$1);
(statearr_23849[(8)] = inst_23770__$1);
return statearr_23849;
})();if(cljs.core.truth_(inst_23774))
{var statearr_23850_23893 = state_23813__$1;(statearr_23850_23893[(1)] = (11));
} else
{var statearr_23851_23894 = state_23813__$1;(statearr_23851_23894[(1)] = (12));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_23814 === (18)))
{var inst_23766 = (state_23813[(15)]);var inst_23771 = (state_23813[(16)]);var inst_23765 = (state_23813[(17)]);var inst_23790 = cljs.core.empty_QMARK_(inst_23766);var inst_23791 = (function (){var G__23852 = inst_23771;return (inst_23765.cljs$core$IFn$_invoke$arity$1 ? inst_23765.cljs$core$IFn$_invoke$arity$1(G__23852) : inst_23765.call(null,G__23852));
})();var inst_23792 = cljs.core.not(inst_23791);var inst_23793 = (inst_23790) && (inst_23792);var state_23813__$1 = state_23813;var statearr_23853_23895 = state_23813__$1;(statearr_23853_23895[(2)] = inst_23793);
(statearr_23853_23895[(1)] = (19));
return cljs.core.constant$keyword$49;
} else
{if((state_val_23814 === (8)))
{var inst_23755 = (state_23813[(7)]);var state_23813__$1 = state_23813;var statearr_23854_23896 = state_23813__$1;(statearr_23854_23896[(2)] = inst_23755);
(statearr_23854_23896[(1)] = (9));
return cljs.core.constant$keyword$49;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5823__auto___23866,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5808__auto__,c__5823__auto___23866,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_23858 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23858[(0)] = state_machine__5809__auto__);
(statearr_23858[(1)] = (1));
return statearr_23858;
});
var state_machine__5809__auto____1 = (function (state_23813){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__(state_23813);if(cljs.core.keyword_identical_QMARK_(result__5811__auto__,cljs.core.constant$keyword$49))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e23859){if((e23859 instanceof Object))
{var ex__5812__auto__ = e23859;var statearr_23860_23897 = state_23813;(statearr_23860_23897[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23813);
return cljs.core.constant$keyword$49;
} else
{throw e23859;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5810__auto__,cljs.core.constant$keyword$49))
{{
var G__23898 = state_23813;
state_23813 = G__23898;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_23813){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_23813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___23866,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5825__auto__ = (function (){var statearr_23861 = (function (){return (f__5824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5824__auto__.cljs$core$IFn$_invoke$arity$0() : f__5824__auto__.call(null));
})();(statearr_23861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___23866);
return statearr_23861;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5825__auto__);
});})(c__5823__auto___23866,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_(mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_(mix,mode);
});
cljs.core.async.Pub = (function (){var obj23900 = {};return obj23900;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__23904 = x__4277__auto__;return goog.typeOf(G__23904);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__23908 = x__4277__auto__;return goog.typeOf(G__23908);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__23914 = x__4277__auto__;return goog.typeOf(G__23914);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__23916 = x__4277__auto__;return goog.typeOf(G__23916);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = (function (){var G__24055 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24055) : cljs.core.atom.call(null,G__24055));
})();var ensure_mult = ((function (mults){
return (function (topic){var or__3640__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__24057 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24057) : cljs.core.deref.call(null,G__24057));
})(),topic);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3640__auto__,mults){
return (function (p1__23917_SHARP_){if(cljs.core.truth_((function (){var G__24058 = topic;return (p1__23917_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23917_SHARP_.cljs$core$IFn$_invoke$arity$1(G__24058) : p1__23917_SHARP_.call(null,G__24058));
})()))
{return p1__23917_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23917_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__24059 = topic;return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__24059) : buf_fn.call(null,G__24059));
})())));
}
});})(or__3640__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t24060 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24060 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24061){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24061 = meta24061;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24060.cljs$lang$type = true;
cljs.core.async.t24060.cljs$lang$ctorStr = "cljs.core.async/t24060";
cljs.core.async.t24060.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24060");
});})(mults,ensure_mult))
;
cljs.core.async.t24060.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t24060.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (function (){var G__24063 = topic;return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__24063) : self__.ensure_mult.call(null,G__24063));
})();return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t24060.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__24064 = self__.mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24064) : cljs.core.deref.call(null,G__24064));
})(),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t24060.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;var G__24065 = self__.mults;var G__24066 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24065,G__24066) : cljs.core.reset_BANG_.call(null,G__24065,G__24066));
});})(mults,ensure_mult))
;
cljs.core.async.t24060.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t24060.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24060.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t24060.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24062){var self__ = this;
var _24062__$1 = this;return self__.meta24061;
});})(mults,ensure_mult))
;
cljs.core.async.t24060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24062,meta24061__$1){var self__ = this;
var _24062__$1 = this;return (new cljs.core.async.t24060(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24061__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t24060 = ((function (mults,ensure_mult){
return (function __GT_t24060(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24061){return (new cljs.core.async.t24060(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24061));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t24060(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5823__auto___24189 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5823__auto___24189,mults,ensure_mult,p){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___24189,mults,ensure_mult,p){
return (function (state_24138){var state_val_24139 = (state_24138[(1)]);if((state_val_24139 === (7)))
{var inst_24134 = (state_24138[(2)]);var state_24138__$1 = state_24138;var statearr_24140_24190 = state_24138__$1;(statearr_24140_24190[(2)] = inst_24134);
(statearr_24140_24190[(1)] = (3));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24139 === (20)))
{var state_24138__$1 = state_24138;var statearr_24141_24191 = state_24138__$1;(statearr_24141_24191[(2)] = null);
(statearr_24141_24191[(1)] = (21));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24139 === (1)))
{var state_24138__$1 = state_24138;var statearr_24142_24192 = state_24138__$1;(statearr_24142_24192[(2)] = null);
(statearr_24142_24192[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24139 === (24)))
{var inst_24117 = (state_24138[(7)]);var inst_24126 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_24117);var state_24138__$1 = state_24138;var statearr_24143_24193 = state_24138__$1;(statearr_24143_24193[(2)] = inst_24126);
(statearr_24143_24193[(1)] = (25));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24139 === (4)))
{var inst_24069 = (state_24138[(8)]);var inst_24069__$1 = (state_24138[(2)]);var inst_24070 = (inst_24069__$1 == null);var state_24138__$1 = (function (){var statearr_24144 = state_24138;(statearr_24144[(8)] = inst_24069__$1);
return statearr_24144;
})();if(cljs.core.truth_(inst_24070))
{var statearr_24145_24194 = state_24138__$1;(statearr_24145_24194[(1)] = (5));
} else
{var statearr_24146_24195 = state_24138__$1;(statearr_24146_24195[(1)] = (6));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_24139 === (15)))
{var inst_24111 = (state_24138[(2)]);var state_24138__$1 = state_24138;var statearr_24147_24196 = state_24138__$1;(statearr_24147_24196[(2)] = inst_24111);
(statearr_24147_24196[(1)] = (12));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24139 === (21)))
{var inst_24131 = (state_24138[(2)]);var state_24138__$1 = (function (){var statearr_24148 = state_24138;(statearr_24148[(9)] = inst_24131);
return statearr_24148;
})();var statearr_24149_24197 = state_24138__$1;(statearr_24149_24197[(2)] = null);
(statearr_24149_24197[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24139 === (13)))
{var inst_24093 = (state_24138[(10)]);var inst_24095 = cljs.core.chunked_seq_QMARK_(inst_24093);var state_24138__$1 = state_24138;if(inst_24095)
{var statearr_24150_24198 = state_24138__$1;(statearr_24150_24198[(1)] = (16));
} else
{var statearr_24151_24199 = state_24138__$1;(statearr_24151_24199[(1)] = (17));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_24139 === (22)))
{var inst_24123 = (state_24138[(2)]);var state_24138__$1 = state_24138;if(cljs.core.truth_(inst_24123))
{var statearr_24152_24200 = state_24138__$1;(statearr_24152_24200[(1)] = (23));
} else
{var statearr_24153_24201 = state_24138__$1;(statearr_24153_24201[(1)] = (24));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_24139 === (6)))
{var inst_24069 = (state_24138[(8)]);var inst_24117 = (state_24138[(7)]);var inst_24119 = (state_24138[(11)]);var inst_24117__$1 = (function (){var G__24154 = inst_24069;return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__24154) : topic_fn.call(null,G__24154));
})();var inst_24118 = (function (){var G__24155 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24155) : cljs.core.deref.call(null,G__24155));
})();var inst_24119__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24118,inst_24117__$1);var state_24138__$1 = (function (){var statearr_24156 = state_24138;(statearr_24156[(7)] = inst_24117__$1);
(statearr_24156[(11)] = inst_24119__$1);
return statearr_24156;
})();if(cljs.core.truth_(inst_24119__$1))
{var statearr_24157_24202 = state_24138__$1;(statearr_24157_24202[(1)] = (19));
} else
{var statearr_24158_24203 = state_24138__$1;(statearr_24158_24203[(1)] = (20));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_24139 === (25)))
{var inst_24128 = (state_24138[(2)]);var state_24138__$1 = state_24138;var statearr_24159_24204 = state_24138__$1;(statearr_24159_24204[(2)] = inst_24128);
(statearr_24159_24204[(1)] = (21));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24139 === (17)))
{var inst_24093 = (state_24138[(10)]);var inst_24102 = cljs.core.first(inst_24093);var inst_24103 = cljs.core.async.muxch_STAR_(inst_24102);var inst_24104 = cljs.core.async.close_BANG_(inst_24103);var inst_24105 = cljs.core.next(inst_24093);var inst_24079 = inst_24105;var inst_24080 = null;var inst_24081 = (0);var inst_24082 = (0);var state_24138__$1 = (function (){var statearr_24160 = state_24138;(statearr_24160[(12)] = inst_24079);
(statearr_24160[(13)] = inst_24081);
(statearr_24160[(14)] = inst_24080);
(statearr_24160[(15)] = inst_24082);
(statearr_24160[(16)] = inst_24104);
return statearr_24160;
})();var statearr_24161_24205 = state_24138__$1;(statearr_24161_24205[(2)] = null);
(statearr_24161_24205[(1)] = (8));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24139 === (3)))
{var inst_24136 = (state_24138[(2)]);var state_24138__$1 = state_24138;return cljs.core.async.impl.ioc_helpers.return_chan(state_24138__$1,inst_24136);
} else
{if((state_val_24139 === (12)))
{var inst_24113 = (state_24138[(2)]);var state_24138__$1 = state_24138;var statearr_24162_24206 = state_24138__$1;(statearr_24162_24206[(2)] = inst_24113);
(statearr_24162_24206[(1)] = (9));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24139 === (2)))
{var state_24138__$1 = state_24138;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24138__$1,(4),ch);
} else
{if((state_val_24139 === (23)))
{var state_24138__$1 = state_24138;var statearr_24163_24207 = state_24138__$1;(statearr_24163_24207[(2)] = null);
(statearr_24163_24207[(1)] = (25));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24139 === (19)))
{var inst_24069 = (state_24138[(8)]);var inst_24119 = (state_24138[(11)]);var inst_24121 = cljs.core.async.muxch_STAR_(inst_24119);var state_24138__$1 = state_24138;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24138__$1,(22),inst_24121,inst_24069);
} else
{if((state_val_24139 === (11)))
{var inst_24093 = (state_24138[(10)]);var inst_24079 = (state_24138[(12)]);var inst_24093__$1 = cljs.core.seq(inst_24079);var state_24138__$1 = (function (){var statearr_24164 = state_24138;(statearr_24164[(10)] = inst_24093__$1);
return statearr_24164;
})();if(inst_24093__$1)
{var statearr_24165_24208 = state_24138__$1;(statearr_24165_24208[(1)] = (13));
} else
{var statearr_24166_24209 = state_24138__$1;(statearr_24166_24209[(1)] = (14));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_24139 === (9)))
{var inst_24115 = (state_24138[(2)]);var state_24138__$1 = state_24138;var statearr_24167_24210 = state_24138__$1;(statearr_24167_24210[(2)] = inst_24115);
(statearr_24167_24210[(1)] = (7));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24139 === (5)))
{var inst_24076 = (function (){var G__24168 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24168) : cljs.core.deref.call(null,G__24168));
})();var inst_24077 = cljs.core.vals(inst_24076);var inst_24078 = cljs.core.seq(inst_24077);var inst_24079 = inst_24078;var inst_24080 = null;var inst_24081 = (0);var inst_24082 = (0);var state_24138__$1 = (function (){var statearr_24169 = state_24138;(statearr_24169[(12)] = inst_24079);
(statearr_24169[(13)] = inst_24081);
(statearr_24169[(14)] = inst_24080);
(statearr_24169[(15)] = inst_24082);
return statearr_24169;
})();var statearr_24170_24211 = state_24138__$1;(statearr_24170_24211[(2)] = null);
(statearr_24170_24211[(1)] = (8));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24139 === (14)))
{var state_24138__$1 = state_24138;var statearr_24174_24212 = state_24138__$1;(statearr_24174_24212[(2)] = null);
(statearr_24174_24212[(1)] = (15));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24139 === (16)))
{var inst_24093 = (state_24138[(10)]);var inst_24097 = cljs.core.chunk_first(inst_24093);var inst_24098 = cljs.core.chunk_rest(inst_24093);var inst_24099 = cljs.core.count(inst_24097);var inst_24079 = inst_24098;var inst_24080 = inst_24097;var inst_24081 = inst_24099;var inst_24082 = (0);var state_24138__$1 = (function (){var statearr_24175 = state_24138;(statearr_24175[(12)] = inst_24079);
(statearr_24175[(13)] = inst_24081);
(statearr_24175[(14)] = inst_24080);
(statearr_24175[(15)] = inst_24082);
return statearr_24175;
})();var statearr_24176_24213 = state_24138__$1;(statearr_24176_24213[(2)] = null);
(statearr_24176_24213[(1)] = (8));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24139 === (10)))
{var inst_24079 = (state_24138[(12)]);var inst_24081 = (state_24138[(13)]);var inst_24080 = (state_24138[(14)]);var inst_24082 = (state_24138[(15)]);var inst_24087 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24080,inst_24082);var inst_24088 = cljs.core.async.muxch_STAR_(inst_24087);var inst_24089 = cljs.core.async.close_BANG_(inst_24088);var inst_24090 = (inst_24082 + (1));var tmp24171 = inst_24079;var tmp24172 = inst_24081;var tmp24173 = inst_24080;var inst_24079__$1 = tmp24171;var inst_24080__$1 = tmp24173;var inst_24081__$1 = tmp24172;var inst_24082__$1 = inst_24090;var state_24138__$1 = (function (){var statearr_24177 = state_24138;(statearr_24177[(17)] = inst_24089);
(statearr_24177[(12)] = inst_24079__$1);
(statearr_24177[(13)] = inst_24081__$1);
(statearr_24177[(14)] = inst_24080__$1);
(statearr_24177[(15)] = inst_24082__$1);
return statearr_24177;
})();var statearr_24178_24214 = state_24138__$1;(statearr_24178_24214[(2)] = null);
(statearr_24178_24214[(1)] = (8));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24139 === (18)))
{var inst_24108 = (state_24138[(2)]);var state_24138__$1 = state_24138;var statearr_24179_24215 = state_24138__$1;(statearr_24179_24215[(2)] = inst_24108);
(statearr_24179_24215[(1)] = (15));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24139 === (8)))
{var inst_24081 = (state_24138[(13)]);var inst_24082 = (state_24138[(15)]);var inst_24084 = (inst_24082 < inst_24081);var inst_24085 = inst_24084;var state_24138__$1 = state_24138;if(cljs.core.truth_(inst_24085))
{var statearr_24180_24216 = state_24138__$1;(statearr_24180_24216[(1)] = (10));
} else
{var statearr_24181_24217 = state_24138__$1;(statearr_24181_24217[(1)] = (11));
}
return cljs.core.constant$keyword$49;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5823__auto___24189,mults,ensure_mult,p))
;return ((function (switch__5808__auto__,c__5823__auto___24189,mults,ensure_mult,p){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_24185 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24185[(0)] = state_machine__5809__auto__);
(statearr_24185[(1)] = (1));
return statearr_24185;
});
var state_machine__5809__auto____1 = (function (state_24138){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__(state_24138);if(cljs.core.keyword_identical_QMARK_(result__5811__auto__,cljs.core.constant$keyword$49))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e24186){if((e24186 instanceof Object))
{var ex__5812__auto__ = e24186;var statearr_24187_24218 = state_24138;(statearr_24187_24218[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24138);
return cljs.core.constant$keyword$49;
} else
{throw e24186;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5810__auto__,cljs.core.constant$keyword$49))
{{
var G__24219 = state_24138;
state_24138 = G__24219;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_24138){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_24138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___24189,mults,ensure_mult,p))
})();var state__5825__auto__ = (function (){var statearr_24188 = (function (){return (f__5824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5824__auto__.cljs$core$IFn$_invoke$arity$0() : f__5824__auto__.call(null));
})();(statearr_24188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___24189);
return statearr_24188;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5825__auto__);
});})(c__5823__auto___24189,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__24300 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24300) : cljs.core.atom.call(null,G__24300));
})();var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5823__auto___24373 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5823__auto___24373,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___24373,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24339){var state_val_24340 = (state_24339[(1)]);if((state_val_24340 === (7)))
{var state_24339__$1 = state_24339;var statearr_24341_24374 = state_24339__$1;(statearr_24341_24374[(2)] = null);
(statearr_24341_24374[(1)] = (8));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24340 === (1)))
{var state_24339__$1 = state_24339;var statearr_24342_24375 = state_24339__$1;(statearr_24342_24375[(2)] = null);
(statearr_24342_24375[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24340 === (4)))
{var inst_24303 = (state_24339[(7)]);var inst_24305 = (inst_24303 < cnt);var state_24339__$1 = state_24339;if(cljs.core.truth_(inst_24305))
{var statearr_24343_24376 = state_24339__$1;(statearr_24343_24376[(1)] = (6));
} else
{var statearr_24344_24377 = state_24339__$1;(statearr_24344_24377[(1)] = (7));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_24340 === (15)))
{var inst_24335 = (state_24339[(2)]);var state_24339__$1 = state_24339;var statearr_24345_24378 = state_24339__$1;(statearr_24345_24378[(2)] = inst_24335);
(statearr_24345_24378[(1)] = (3));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24340 === (13)))
{var inst_24328 = cljs.core.async.close_BANG_(out);var state_24339__$1 = state_24339;var statearr_24346_24379 = state_24339__$1;(statearr_24346_24379[(2)] = inst_24328);
(statearr_24346_24379[(1)] = (15));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24340 === (6)))
{var state_24339__$1 = state_24339;var statearr_24347_24380 = state_24339__$1;(statearr_24347_24380[(2)] = null);
(statearr_24347_24380[(1)] = (11));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24340 === (3)))
{var inst_24337 = (state_24339[(2)]);var state_24339__$1 = state_24339;return cljs.core.async.impl.ioc_helpers.return_chan(state_24339__$1,inst_24337);
} else
{if((state_val_24340 === (12)))
{var inst_24325 = (state_24339[(8)]);var inst_24325__$1 = (state_24339[(2)]);var inst_24326 = cljs.core.some(cljs.core.nil_QMARK_,inst_24325__$1);var state_24339__$1 = (function (){var statearr_24348 = state_24339;(statearr_24348[(8)] = inst_24325__$1);
return statearr_24348;
})();if(cljs.core.truth_(inst_24326))
{var statearr_24349_24381 = state_24339__$1;(statearr_24349_24381[(1)] = (13));
} else
{var statearr_24350_24382 = state_24339__$1;(statearr_24350_24382[(1)] = (14));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_24340 === (2)))
{var inst_24302 = (function (){var G__24351 = dctr;var G__24352 = cnt;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24351,G__24352) : cljs.core.reset_BANG_.call(null,G__24351,G__24352));
})();var inst_24303 = (0);var state_24339__$1 = (function (){var statearr_24353 = state_24339;(statearr_24353[(7)] = inst_24303);
(statearr_24353[(9)] = inst_24302);
return statearr_24353;
})();var statearr_24354_24383 = state_24339__$1;(statearr_24354_24383[(2)] = null);
(statearr_24354_24383[(1)] = (4));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24340 === (11)))
{var inst_24303 = (state_24339[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24339,(10),Object,null,(9));var inst_24312 = (function (){var G__24355 = inst_24303;return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__24355) : chs__$1.call(null,G__24355));
})();var inst_24313 = (function (){var G__24356 = inst_24303;return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__24356) : done.call(null,G__24356));
})();var inst_24314 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_24312,inst_24313);var state_24339__$1 = state_24339;var statearr_24357_24384 = state_24339__$1;(statearr_24357_24384[(2)] = inst_24314);
cljs.core.async.impl.ioc_helpers.process_exception(state_24339__$1);
return cljs.core.constant$keyword$49;
} else
{if((state_val_24340 === (9)))
{var inst_24303 = (state_24339[(7)]);var inst_24316 = (state_24339[(2)]);var inst_24317 = (inst_24303 + (1));var inst_24303__$1 = inst_24317;var state_24339__$1 = (function (){var statearr_24358 = state_24339;(statearr_24358[(7)] = inst_24303__$1);
(statearr_24358[(10)] = inst_24316);
return statearr_24358;
})();var statearr_24359_24385 = state_24339__$1;(statearr_24359_24385[(2)] = null);
(statearr_24359_24385[(1)] = (4));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24340 === (5)))
{var inst_24323 = (state_24339[(2)]);var state_24339__$1 = (function (){var statearr_24360 = state_24339;(statearr_24360[(11)] = inst_24323);
return statearr_24360;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24339__$1,(12),dchan);
} else
{if((state_val_24340 === (14)))
{var inst_24325 = (state_24339[(8)]);var inst_24330 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_24325);var state_24339__$1 = state_24339;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24339__$1,(16),out,inst_24330);
} else
{if((state_val_24340 === (16)))
{var inst_24332 = (state_24339[(2)]);var state_24339__$1 = (function (){var statearr_24361 = state_24339;(statearr_24361[(12)] = inst_24332);
return statearr_24361;
})();var statearr_24362_24386 = state_24339__$1;(statearr_24362_24386[(2)] = null);
(statearr_24362_24386[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24340 === (10)))
{var inst_24307 = (state_24339[(2)]);var inst_24308 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_24339__$1 = (function (){var statearr_24363 = state_24339;(statearr_24363[(13)] = inst_24307);
return statearr_24363;
})();var statearr_24364_24387 = state_24339__$1;(statearr_24364_24387[(2)] = inst_24308);
cljs.core.async.impl.ioc_helpers.process_exception(state_24339__$1);
return cljs.core.constant$keyword$49;
} else
{if((state_val_24340 === (8)))
{var inst_24321 = (state_24339[(2)]);var state_24339__$1 = state_24339;var statearr_24365_24388 = state_24339__$1;(statearr_24365_24388[(2)] = inst_24321);
(statearr_24365_24388[(1)] = (5));
return cljs.core.constant$keyword$49;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5823__auto___24373,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5808__auto__,c__5823__auto___24373,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_24369 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24369[(0)] = state_machine__5809__auto__);
(statearr_24369[(1)] = (1));
return statearr_24369;
});
var state_machine__5809__auto____1 = (function (state_24339){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__(state_24339);if(cljs.core.keyword_identical_QMARK_(result__5811__auto__,cljs.core.constant$keyword$49))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e24370){if((e24370 instanceof Object))
{var ex__5812__auto__ = e24370;var statearr_24371_24389 = state_24339;(statearr_24371_24389[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24339);
return cljs.core.constant$keyword$49;
} else
{throw e24370;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5810__auto__,cljs.core.constant$keyword$49))
{{
var G__24390 = state_24339;
state_24339 = G__24390;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_24339){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_24339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___24373,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5825__auto__ = (function (){var statearr_24372 = (function (){return (f__5824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5824__auto__.cljs$core$IFn$_invoke$arity$0() : f__5824__auto__.call(null));
})();(statearr_24372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___24373);
return statearr_24372;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5825__auto__);
});})(c__5823__auto___24373,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5823__auto___24500 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5823__auto___24500,out){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___24500,out){
return (function (state_24476){var state_val_24477 = (state_24476[(1)]);if((state_val_24477 === (7)))
{var inst_24456 = (state_24476[(7)]);var inst_24455 = (state_24476[(8)]);var inst_24455__$1 = (state_24476[(2)]);var inst_24456__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24455__$1,(0),null);var inst_24457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24455__$1,(1),null);var inst_24458 = (inst_24456__$1 == null);var state_24476__$1 = (function (){var statearr_24478 = state_24476;(statearr_24478[(9)] = inst_24457);
(statearr_24478[(7)] = inst_24456__$1);
(statearr_24478[(8)] = inst_24455__$1);
return statearr_24478;
})();if(cljs.core.truth_(inst_24458))
{var statearr_24479_24501 = state_24476__$1;(statearr_24479_24501[(1)] = (8));
} else
{var statearr_24480_24502 = state_24476__$1;(statearr_24480_24502[(1)] = (9));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_24477 === (1)))
{var inst_24447 = cljs.core.vec(chs);var inst_24448 = inst_24447;var state_24476__$1 = (function (){var statearr_24481 = state_24476;(statearr_24481[(10)] = inst_24448);
return statearr_24481;
})();var statearr_24482_24503 = state_24476__$1;(statearr_24482_24503[(2)] = null);
(statearr_24482_24503[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24477 === (4)))
{var inst_24448 = (state_24476[(10)]);var state_24476__$1 = state_24476;return cljs.core.async.ioc_alts_BANG_(state_24476__$1,(7),inst_24448);
} else
{if((state_val_24477 === (6)))
{var inst_24472 = (state_24476[(2)]);var state_24476__$1 = state_24476;var statearr_24483_24504 = state_24476__$1;(statearr_24483_24504[(2)] = inst_24472);
(statearr_24483_24504[(1)] = (3));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24477 === (3)))
{var inst_24474 = (state_24476[(2)]);var state_24476__$1 = state_24476;return cljs.core.async.impl.ioc_helpers.return_chan(state_24476__$1,inst_24474);
} else
{if((state_val_24477 === (2)))
{var inst_24448 = (state_24476[(10)]);var inst_24450 = cljs.core.count(inst_24448);var inst_24451 = (inst_24450 > (0));var state_24476__$1 = state_24476;if(cljs.core.truth_(inst_24451))
{var statearr_24485_24505 = state_24476__$1;(statearr_24485_24505[(1)] = (4));
} else
{var statearr_24486_24506 = state_24476__$1;(statearr_24486_24506[(1)] = (5));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_24477 === (11)))
{var inst_24448 = (state_24476[(10)]);var inst_24465 = (state_24476[(2)]);var tmp24484 = inst_24448;var inst_24448__$1 = tmp24484;var state_24476__$1 = (function (){var statearr_24487 = state_24476;(statearr_24487[(11)] = inst_24465);
(statearr_24487[(10)] = inst_24448__$1);
return statearr_24487;
})();var statearr_24488_24507 = state_24476__$1;(statearr_24488_24507[(2)] = null);
(statearr_24488_24507[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24477 === (9)))
{var inst_24456 = (state_24476[(7)]);var state_24476__$1 = state_24476;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24476__$1,(11),out,inst_24456);
} else
{if((state_val_24477 === (5)))
{var inst_24470 = cljs.core.async.close_BANG_(out);var state_24476__$1 = state_24476;var statearr_24489_24508 = state_24476__$1;(statearr_24489_24508[(2)] = inst_24470);
(statearr_24489_24508[(1)] = (6));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24477 === (10)))
{var inst_24468 = (state_24476[(2)]);var state_24476__$1 = state_24476;var statearr_24490_24509 = state_24476__$1;(statearr_24490_24509[(2)] = inst_24468);
(statearr_24490_24509[(1)] = (6));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24477 === (8)))
{var inst_24457 = (state_24476[(9)]);var inst_24456 = (state_24476[(7)]);var inst_24455 = (state_24476[(8)]);var inst_24448 = (state_24476[(10)]);var inst_24460 = (function (){var c = inst_24457;var v = inst_24456;var vec__24453 = inst_24455;var cs = inst_24448;return ((function (c,v,vec__24453,cs,inst_24457,inst_24456,inst_24455,inst_24448,state_val_24477,c__5823__auto___24500,out){
return (function (p1__24391_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__24391_SHARP_);
});
;})(c,v,vec__24453,cs,inst_24457,inst_24456,inst_24455,inst_24448,state_val_24477,c__5823__auto___24500,out))
})();var inst_24461 = cljs.core.filterv(inst_24460,inst_24448);var inst_24448__$1 = inst_24461;var state_24476__$1 = (function (){var statearr_24491 = state_24476;(statearr_24491[(10)] = inst_24448__$1);
return statearr_24491;
})();var statearr_24492_24510 = state_24476__$1;(statearr_24492_24510[(2)] = null);
(statearr_24492_24510[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5823__auto___24500,out))
;return ((function (switch__5808__auto__,c__5823__auto___24500,out){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_24496 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24496[(0)] = state_machine__5809__auto__);
(statearr_24496[(1)] = (1));
return statearr_24496;
});
var state_machine__5809__auto____1 = (function (state_24476){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__(state_24476);if(cljs.core.keyword_identical_QMARK_(result__5811__auto__,cljs.core.constant$keyword$49))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e24497){if((e24497 instanceof Object))
{var ex__5812__auto__ = e24497;var statearr_24498_24511 = state_24476;(statearr_24498_24511[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24476);
return cljs.core.constant$keyword$49;
} else
{throw e24497;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5810__auto__,cljs.core.constant$keyword$49))
{{
var G__24512 = state_24476;
state_24476 = G__24512;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_24476){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_24476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___24500,out))
})();var state__5825__auto__ = (function (){var statearr_24499 = (function (){return (f__5824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5824__auto__.cljs$core$IFn$_invoke$arity$0() : f__5824__auto__.call(null));
})();(statearr_24499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___24500);
return statearr_24499;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5825__auto__);
});})(c__5823__auto___24500,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5823__auto___24608 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5823__auto___24608,out){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___24608,out){
return (function (state_24585){var state_val_24586 = (state_24585[(1)]);if((state_val_24586 === (7)))
{var inst_24567 = (state_24585[(7)]);var inst_24567__$1 = (state_24585[(2)]);var inst_24568 = (inst_24567__$1 == null);var inst_24569 = cljs.core.not(inst_24568);var state_24585__$1 = (function (){var statearr_24587 = state_24585;(statearr_24587[(7)] = inst_24567__$1);
return statearr_24587;
})();if(inst_24569)
{var statearr_24588_24609 = state_24585__$1;(statearr_24588_24609[(1)] = (8));
} else
{var statearr_24589_24610 = state_24585__$1;(statearr_24589_24610[(1)] = (9));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_24586 === (1)))
{var inst_24562 = (0);var state_24585__$1 = (function (){var statearr_24590 = state_24585;(statearr_24590[(8)] = inst_24562);
return statearr_24590;
})();var statearr_24591_24611 = state_24585__$1;(statearr_24591_24611[(2)] = null);
(statearr_24591_24611[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24586 === (4)))
{var state_24585__$1 = state_24585;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24585__$1,(7),ch);
} else
{if((state_val_24586 === (6)))
{var inst_24580 = (state_24585[(2)]);var state_24585__$1 = state_24585;var statearr_24592_24612 = state_24585__$1;(statearr_24592_24612[(2)] = inst_24580);
(statearr_24592_24612[(1)] = (3));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24586 === (3)))
{var inst_24582 = (state_24585[(2)]);var inst_24583 = cljs.core.async.close_BANG_(out);var state_24585__$1 = (function (){var statearr_24593 = state_24585;(statearr_24593[(9)] = inst_24582);
return statearr_24593;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_24585__$1,inst_24583);
} else
{if((state_val_24586 === (2)))
{var inst_24562 = (state_24585[(8)]);var inst_24564 = (inst_24562 < n);var state_24585__$1 = state_24585;if(cljs.core.truth_(inst_24564))
{var statearr_24594_24613 = state_24585__$1;(statearr_24594_24613[(1)] = (4));
} else
{var statearr_24595_24614 = state_24585__$1;(statearr_24595_24614[(1)] = (5));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_24586 === (11)))
{var inst_24562 = (state_24585[(8)]);var inst_24572 = (state_24585[(2)]);var inst_24573 = (inst_24562 + (1));var inst_24562__$1 = inst_24573;var state_24585__$1 = (function (){var statearr_24596 = state_24585;(statearr_24596[(8)] = inst_24562__$1);
(statearr_24596[(10)] = inst_24572);
return statearr_24596;
})();var statearr_24597_24615 = state_24585__$1;(statearr_24597_24615[(2)] = null);
(statearr_24597_24615[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24586 === (9)))
{var state_24585__$1 = state_24585;var statearr_24598_24616 = state_24585__$1;(statearr_24598_24616[(2)] = null);
(statearr_24598_24616[(1)] = (10));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24586 === (5)))
{var state_24585__$1 = state_24585;var statearr_24599_24617 = state_24585__$1;(statearr_24599_24617[(2)] = null);
(statearr_24599_24617[(1)] = (6));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24586 === (10)))
{var inst_24577 = (state_24585[(2)]);var state_24585__$1 = state_24585;var statearr_24600_24618 = state_24585__$1;(statearr_24600_24618[(2)] = inst_24577);
(statearr_24600_24618[(1)] = (6));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24586 === (8)))
{var inst_24567 = (state_24585[(7)]);var state_24585__$1 = state_24585;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24585__$1,(11),out,inst_24567);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5823__auto___24608,out))
;return ((function (switch__5808__auto__,c__5823__auto___24608,out){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_24604 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24604[(0)] = state_machine__5809__auto__);
(statearr_24604[(1)] = (1));
return statearr_24604;
});
var state_machine__5809__auto____1 = (function (state_24585){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__(state_24585);if(cljs.core.keyword_identical_QMARK_(result__5811__auto__,cljs.core.constant$keyword$49))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e24605){if((e24605 instanceof Object))
{var ex__5812__auto__ = e24605;var statearr_24606_24619 = state_24585;(statearr_24606_24619[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24585);
return cljs.core.constant$keyword$49;
} else
{throw e24605;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5810__auto__,cljs.core.constant$keyword$49))
{{
var G__24620 = state_24585;
state_24585 = G__24620;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_24585){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_24585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___24608,out))
})();var state__5825__auto__ = (function (){var statearr_24607 = (function (){return (f__5824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5824__auto__.cljs$core$IFn$_invoke$arity$0() : f__5824__auto__.call(null));
})();(statearr_24607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___24608);
return statearr_24607;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5825__auto__);
});})(c__5823__auto___24608,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t24633 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24633 = (function (ch,f,map_LT_,meta24634){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24634 = meta24634;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24633.cljs$lang$type = true;
cljs.core.async.t24633.cljs$lang$ctorStr = "cljs.core.async/t24633";
cljs.core.async.t24633.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24633");
});
cljs.core.async.t24633.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24633.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});
cljs.core.async.t24633.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24633.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t24636 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24636 = (function (fn1,_,meta24634,ch,f,map_LT_,meta24637){
this.fn1 = fn1;
this._ = _;
this.meta24634 = meta24634;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24637 = meta24637;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24636.cljs$lang$type = true;
cljs.core.async.t24636.cljs$lang$ctorStr = "cljs.core.async/t24636";
cljs.core.async.t24636.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24636");
});})(___$1))
;
cljs.core.async.t24636.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24636.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t24636.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__24621_SHARP_){var G__24639 = (((p1__24621_SHARP_ == null))?null:(function (){var G__24640 = p1__24621_SHARP_;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24640) : self__.f.call(null,G__24640));
})());return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__24639) : f1.call(null,G__24639));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t24636.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24638){var self__ = this;
var _24638__$1 = this;return self__.meta24637;
});})(___$1))
;
cljs.core.async.t24636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24638,meta24637__$1){var self__ = this;
var _24638__$1 = this;return (new cljs.core.async.t24636(self__.fn1,self__._,self__.meta24634,self__.ch,self__.f,self__.map_LT_,meta24637__$1));
});})(___$1))
;
cljs.core.async.__GT_t24636 = ((function (___$1){
return (function __GT_t24636(fn1__$1,___$2,meta24634__$1,ch__$2,f__$2,map_LT___$2,meta24637){return (new cljs.core.async.t24636(fn1__$1,___$2,meta24634__$1,ch__$2,f__$2,map_LT___$2,meta24637));
});})(___$1))
;
}
return (new cljs.core.async.t24636(fn1,___$1,self__.meta24634,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3628__auto__ = ret;if(cljs.core.truth_(and__3628__auto__))
{return !(((function (){var G__24641 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24641) : cljs.core.deref.call(null,G__24641));
})() == null));
} else
{return and__3628__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((function (){var G__24642 = (function (){var G__24643 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24643) : cljs.core.deref.call(null,G__24643));
})();return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24642) : self__.f.call(null,G__24642));
})());
} else
{return ret;
}
});
cljs.core.async.t24633.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24633.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24633.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t24633.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24635){var self__ = this;
var _24635__$1 = this;return self__.meta24634;
});
cljs.core.async.t24633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24635,meta24634__$1){var self__ = this;
var _24635__$1 = this;return (new cljs.core.async.t24633(self__.ch,self__.f,self__.map_LT_,meta24634__$1));
});
cljs.core.async.__GT_t24633 = (function __GT_t24633(ch__$1,f__$1,map_LT___$1,meta24634){return (new cljs.core.async.t24633(ch__$1,f__$1,map_LT___$1,meta24634));
});
}
return (new cljs.core.async.t24633(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t24648 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24648 = (function (ch,f,map_GT_,meta24649){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta24649 = meta24649;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24648.cljs$lang$type = true;
cljs.core.async.t24648.cljs$lang$ctorStr = "cljs.core.async/t24648";
cljs.core.async.t24648.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24648");
});
cljs.core.async.t24648.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24648.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__24651 = val;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24651) : self__.f.call(null,G__24651));
})(),fn1);
});
cljs.core.async.t24648.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24648.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t24648.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24648.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24650){var self__ = this;
var _24650__$1 = this;return self__.meta24649;
});
cljs.core.async.t24648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24650,meta24649__$1){var self__ = this;
var _24650__$1 = this;return (new cljs.core.async.t24648(self__.ch,self__.f,self__.map_GT_,meta24649__$1));
});
cljs.core.async.__GT_t24648 = (function __GT_t24648(ch__$1,f__$1,map_GT___$1,meta24649){return (new cljs.core.async.t24648(ch__$1,f__$1,map_GT___$1,meta24649));
});
}
return (new cljs.core.async.t24648(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t24656 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24656 = (function (ch,p,filter_GT_,meta24657){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta24657 = meta24657;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24656.cljs$lang$type = true;
cljs.core.async.t24656.cljs$lang$ctorStr = "cljs.core.async/t24656";
cljs.core.async.t24656.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24656");
});
cljs.core.async.t24656.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24656.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__24659 = val;return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__24659) : self__.p.call(null,G__24659));
})()))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});
cljs.core.async.t24656.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24656.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t24656.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24656.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24656.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t24656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24658){var self__ = this;
var _24658__$1 = this;return self__.meta24657;
});
cljs.core.async.t24656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24658,meta24657__$1){var self__ = this;
var _24658__$1 = this;return (new cljs.core.async.t24656(self__.ch,self__.p,self__.filter_GT_,meta24657__$1));
});
cljs.core.async.__GT_t24656 = (function __GT_t24656(ch__$1,p__$1,filter_GT___$1,meta24657){return (new cljs.core.async.t24656(ch__$1,p__$1,filter_GT___$1,meta24657));
});
}
return (new cljs.core.async.t24656(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5823__auto___24747 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5823__auto___24747,out){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___24747,out){
return (function (state_24725){var state_val_24726 = (state_24725[(1)]);if((state_val_24726 === (7)))
{var inst_24721 = (state_24725[(2)]);var state_24725__$1 = state_24725;var statearr_24727_24748 = state_24725__$1;(statearr_24727_24748[(2)] = inst_24721);
(statearr_24727_24748[(1)] = (3));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24726 === (1)))
{var state_24725__$1 = state_24725;var statearr_24728_24749 = state_24725__$1;(statearr_24728_24749[(2)] = null);
(statearr_24728_24749[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24726 === (4)))
{var inst_24707 = (state_24725[(7)]);var inst_24707__$1 = (state_24725[(2)]);var inst_24708 = (inst_24707__$1 == null);var state_24725__$1 = (function (){var statearr_24729 = state_24725;(statearr_24729[(7)] = inst_24707__$1);
return statearr_24729;
})();if(cljs.core.truth_(inst_24708))
{var statearr_24730_24750 = state_24725__$1;(statearr_24730_24750[(1)] = (5));
} else
{var statearr_24731_24751 = state_24725__$1;(statearr_24731_24751[(1)] = (6));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_24726 === (6)))
{var inst_24707 = (state_24725[(7)]);var inst_24712 = (function (){var G__24732 = inst_24707;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__24732) : p.call(null,G__24732));
})();var state_24725__$1 = state_24725;if(cljs.core.truth_(inst_24712))
{var statearr_24733_24752 = state_24725__$1;(statearr_24733_24752[(1)] = (8));
} else
{var statearr_24734_24753 = state_24725__$1;(statearr_24734_24753[(1)] = (9));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_24726 === (3)))
{var inst_24723 = (state_24725[(2)]);var state_24725__$1 = state_24725;return cljs.core.async.impl.ioc_helpers.return_chan(state_24725__$1,inst_24723);
} else
{if((state_val_24726 === (2)))
{var state_24725__$1 = state_24725;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24725__$1,(4),ch);
} else
{if((state_val_24726 === (11)))
{var inst_24715 = (state_24725[(2)]);var state_24725__$1 = state_24725;var statearr_24735_24754 = state_24725__$1;(statearr_24735_24754[(2)] = inst_24715);
(statearr_24735_24754[(1)] = (10));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24726 === (9)))
{var state_24725__$1 = state_24725;var statearr_24736_24755 = state_24725__$1;(statearr_24736_24755[(2)] = null);
(statearr_24736_24755[(1)] = (10));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24726 === (5)))
{var inst_24710 = cljs.core.async.close_BANG_(out);var state_24725__$1 = state_24725;var statearr_24737_24756 = state_24725__$1;(statearr_24737_24756[(2)] = inst_24710);
(statearr_24737_24756[(1)] = (7));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24726 === (10)))
{var inst_24718 = (state_24725[(2)]);var state_24725__$1 = (function (){var statearr_24738 = state_24725;(statearr_24738[(8)] = inst_24718);
return statearr_24738;
})();var statearr_24739_24757 = state_24725__$1;(statearr_24739_24757[(2)] = null);
(statearr_24739_24757[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24726 === (8)))
{var inst_24707 = (state_24725[(7)]);var state_24725__$1 = state_24725;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24725__$1,(11),out,inst_24707);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5823__auto___24747,out))
;return ((function (switch__5808__auto__,c__5823__auto___24747,out){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_24743 = [null,null,null,null,null,null,null,null,null];(statearr_24743[(0)] = state_machine__5809__auto__);
(statearr_24743[(1)] = (1));
return statearr_24743;
});
var state_machine__5809__auto____1 = (function (state_24725){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__(state_24725);if(cljs.core.keyword_identical_QMARK_(result__5811__auto__,cljs.core.constant$keyword$49))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e24744){if((e24744 instanceof Object))
{var ex__5812__auto__ = e24744;var statearr_24745_24758 = state_24725;(statearr_24745_24758[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24725);
return cljs.core.constant$keyword$49;
} else
{throw e24744;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5810__auto__,cljs.core.constant$keyword$49))
{{
var G__24759 = state_24725;
state_24725 = G__24759;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_24725){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_24725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___24747,out))
})();var state__5825__auto__ = (function (){var statearr_24746 = (function (){return (f__5824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5824__auto__.cljs$core$IFn$_invoke$arity$0() : f__5824__auto__.call(null));
})();(statearr_24746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___24747);
return statearr_24746;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5825__auto__);
});})(c__5823__auto___24747,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5823__auto__){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto__){
return (function (state_24929){var state_val_24930 = (state_24929[(1)]);if((state_val_24930 === (7)))
{var inst_24925 = (state_24929[(2)]);var state_24929__$1 = state_24929;var statearr_24931_24973 = state_24929__$1;(statearr_24931_24973[(2)] = inst_24925);
(statearr_24931_24973[(1)] = (3));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24930 === (20)))
{var inst_24895 = (state_24929[(7)]);var inst_24906 = (state_24929[(2)]);var inst_24907 = cljs.core.next(inst_24895);var inst_24881 = inst_24907;var inst_24882 = null;var inst_24883 = (0);var inst_24884 = (0);var state_24929__$1 = (function (){var statearr_24932 = state_24929;(statearr_24932[(8)] = inst_24882);
(statearr_24932[(9)] = inst_24906);
(statearr_24932[(10)] = inst_24884);
(statearr_24932[(11)] = inst_24881);
(statearr_24932[(12)] = inst_24883);
return statearr_24932;
})();var statearr_24933_24974 = state_24929__$1;(statearr_24933_24974[(2)] = null);
(statearr_24933_24974[(1)] = (8));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24930 === (1)))
{var state_24929__$1 = state_24929;var statearr_24934_24975 = state_24929__$1;(statearr_24934_24975[(2)] = null);
(statearr_24934_24975[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24930 === (4)))
{var inst_24870 = (state_24929[(13)]);var inst_24870__$1 = (state_24929[(2)]);var inst_24871 = (inst_24870__$1 == null);var state_24929__$1 = (function (){var statearr_24935 = state_24929;(statearr_24935[(13)] = inst_24870__$1);
return statearr_24935;
})();if(cljs.core.truth_(inst_24871))
{var statearr_24936_24976 = state_24929__$1;(statearr_24936_24976[(1)] = (5));
} else
{var statearr_24937_24977 = state_24929__$1;(statearr_24937_24977[(1)] = (6));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_24930 === (15)))
{var state_24929__$1 = state_24929;var statearr_24941_24978 = state_24929__$1;(statearr_24941_24978[(2)] = null);
(statearr_24941_24978[(1)] = (16));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24930 === (21)))
{var state_24929__$1 = state_24929;var statearr_24942_24979 = state_24929__$1;(statearr_24942_24979[(2)] = null);
(statearr_24942_24979[(1)] = (23));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24930 === (13)))
{var inst_24882 = (state_24929[(8)]);var inst_24884 = (state_24929[(10)]);var inst_24881 = (state_24929[(11)]);var inst_24883 = (state_24929[(12)]);var inst_24891 = (state_24929[(2)]);var inst_24892 = (inst_24884 + (1));var tmp24938 = inst_24882;var tmp24939 = inst_24881;var tmp24940 = inst_24883;var inst_24881__$1 = tmp24939;var inst_24882__$1 = tmp24938;var inst_24883__$1 = tmp24940;var inst_24884__$1 = inst_24892;var state_24929__$1 = (function (){var statearr_24943 = state_24929;(statearr_24943[(8)] = inst_24882__$1);
(statearr_24943[(14)] = inst_24891);
(statearr_24943[(10)] = inst_24884__$1);
(statearr_24943[(11)] = inst_24881__$1);
(statearr_24943[(12)] = inst_24883__$1);
return statearr_24943;
})();var statearr_24944_24980 = state_24929__$1;(statearr_24944_24980[(2)] = null);
(statearr_24944_24980[(1)] = (8));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24930 === (22)))
{var state_24929__$1 = state_24929;var statearr_24945_24981 = state_24929__$1;(statearr_24945_24981[(2)] = null);
(statearr_24945_24981[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24930 === (6)))
{var inst_24870 = (state_24929[(13)]);var inst_24879 = (function (){var G__24946 = inst_24870;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24946) : f.call(null,G__24946));
})();var inst_24880 = cljs.core.seq(inst_24879);var inst_24881 = inst_24880;var inst_24882 = null;var inst_24883 = (0);var inst_24884 = (0);var state_24929__$1 = (function (){var statearr_24947 = state_24929;(statearr_24947[(8)] = inst_24882);
(statearr_24947[(10)] = inst_24884);
(statearr_24947[(11)] = inst_24881);
(statearr_24947[(12)] = inst_24883);
return statearr_24947;
})();var statearr_24948_24982 = state_24929__$1;(statearr_24948_24982[(2)] = null);
(statearr_24948_24982[(1)] = (8));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24930 === (17)))
{var inst_24895 = (state_24929[(7)]);var inst_24899 = cljs.core.chunk_first(inst_24895);var inst_24900 = cljs.core.chunk_rest(inst_24895);var inst_24901 = cljs.core.count(inst_24899);var inst_24881 = inst_24900;var inst_24882 = inst_24899;var inst_24883 = inst_24901;var inst_24884 = (0);var state_24929__$1 = (function (){var statearr_24949 = state_24929;(statearr_24949[(8)] = inst_24882);
(statearr_24949[(10)] = inst_24884);
(statearr_24949[(11)] = inst_24881);
(statearr_24949[(12)] = inst_24883);
return statearr_24949;
})();var statearr_24950_24983 = state_24929__$1;(statearr_24950_24983[(2)] = null);
(statearr_24950_24983[(1)] = (8));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24930 === (3)))
{var inst_24927 = (state_24929[(2)]);var state_24929__$1 = state_24929;return cljs.core.async.impl.ioc_helpers.return_chan(state_24929__$1,inst_24927);
} else
{if((state_val_24930 === (12)))
{var inst_24915 = (state_24929[(2)]);var state_24929__$1 = state_24929;var statearr_24951_24984 = state_24929__$1;(statearr_24951_24984[(2)] = inst_24915);
(statearr_24951_24984[(1)] = (9));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24930 === (2)))
{var state_24929__$1 = state_24929;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24929__$1,(4),in$);
} else
{if((state_val_24930 === (23)))
{var inst_24923 = (state_24929[(2)]);var state_24929__$1 = state_24929;var statearr_24952_24985 = state_24929__$1;(statearr_24952_24985[(2)] = inst_24923);
(statearr_24952_24985[(1)] = (7));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24930 === (19)))
{var inst_24910 = (state_24929[(2)]);var state_24929__$1 = state_24929;var statearr_24953_24986 = state_24929__$1;(statearr_24953_24986[(2)] = inst_24910);
(statearr_24953_24986[(1)] = (16));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24930 === (11)))
{var inst_24895 = (state_24929[(7)]);var inst_24881 = (state_24929[(11)]);var inst_24895__$1 = cljs.core.seq(inst_24881);var state_24929__$1 = (function (){var statearr_24954 = state_24929;(statearr_24954[(7)] = inst_24895__$1);
return statearr_24954;
})();if(inst_24895__$1)
{var statearr_24955_24987 = state_24929__$1;(statearr_24955_24987[(1)] = (14));
} else
{var statearr_24956_24988 = state_24929__$1;(statearr_24956_24988[(1)] = (15));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_24930 === (9)))
{var inst_24917 = (state_24929[(2)]);var inst_24918 = cljs.core.async.impl.protocols.closed_QMARK_(out);var state_24929__$1 = (function (){var statearr_24957 = state_24929;(statearr_24957[(15)] = inst_24917);
return statearr_24957;
})();if(cljs.core.truth_(inst_24918))
{var statearr_24958_24989 = state_24929__$1;(statearr_24958_24989[(1)] = (21));
} else
{var statearr_24959_24990 = state_24929__$1;(statearr_24959_24990[(1)] = (22));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_24930 === (5)))
{var inst_24873 = cljs.core.async.close_BANG_(out);var state_24929__$1 = state_24929;var statearr_24960_24991 = state_24929__$1;(statearr_24960_24991[(2)] = inst_24873);
(statearr_24960_24991[(1)] = (7));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24930 === (14)))
{var inst_24895 = (state_24929[(7)]);var inst_24897 = cljs.core.chunked_seq_QMARK_(inst_24895);var state_24929__$1 = state_24929;if(inst_24897)
{var statearr_24961_24992 = state_24929__$1;(statearr_24961_24992[(1)] = (17));
} else
{var statearr_24962_24993 = state_24929__$1;(statearr_24962_24993[(1)] = (18));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_24930 === (16)))
{var inst_24913 = (state_24929[(2)]);var state_24929__$1 = state_24929;var statearr_24963_24994 = state_24929__$1;(statearr_24963_24994[(2)] = inst_24913);
(statearr_24963_24994[(1)] = (12));
return cljs.core.constant$keyword$49;
} else
{if((state_val_24930 === (10)))
{var inst_24882 = (state_24929[(8)]);var inst_24884 = (state_24929[(10)]);var inst_24889 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24882,inst_24884);var state_24929__$1 = state_24929;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24929__$1,(13),out,inst_24889);
} else
{if((state_val_24930 === (18)))
{var inst_24895 = (state_24929[(7)]);var inst_24904 = cljs.core.first(inst_24895);var state_24929__$1 = state_24929;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24929__$1,(20),out,inst_24904);
} else
{if((state_val_24930 === (8)))
{var inst_24884 = (state_24929[(10)]);var inst_24883 = (state_24929[(12)]);var inst_24886 = (inst_24884 < inst_24883);var inst_24887 = inst_24886;var state_24929__$1 = state_24929;if(cljs.core.truth_(inst_24887))
{var statearr_24964_24995 = state_24929__$1;(statearr_24964_24995[(1)] = (10));
} else
{var statearr_24965_24996 = state_24929__$1;(statearr_24965_24996[(1)] = (11));
}
return cljs.core.constant$keyword$49;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5823__auto__))
;return ((function (switch__5808__auto__,c__5823__auto__){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_24969 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24969[(0)] = state_machine__5809__auto__);
(statearr_24969[(1)] = (1));
return statearr_24969;
});
var state_machine__5809__auto____1 = (function (state_24929){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__(state_24929);if(cljs.core.keyword_identical_QMARK_(result__5811__auto__,cljs.core.constant$keyword$49))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e24970){if((e24970 instanceof Object))
{var ex__5812__auto__ = e24970;var statearr_24971_24997 = state_24929;(statearr_24971_24997[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24929);
return cljs.core.constant$keyword$49;
} else
{throw e24970;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5810__auto__,cljs.core.constant$keyword$49))
{{
var G__24998 = state_24929;
state_24929 = G__24998;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_24929){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_24929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto__))
})();var state__5825__auto__ = (function (){var statearr_24972 = (function (){return (f__5824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5824__auto__.cljs$core$IFn$_invoke$arity$0() : f__5824__auto__.call(null));
})();(statearr_24972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto__);
return statearr_24972;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5825__auto__);
});})(c__5823__auto__))
);
return c__5823__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5823__auto___25103 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5823__auto___25103,out){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___25103,out){
return (function (state_25078){var state_val_25079 = (state_25078[(1)]);if((state_val_25079 === (7)))
{var inst_25073 = (state_25078[(2)]);var state_25078__$1 = state_25078;var statearr_25080_25104 = state_25078__$1;(statearr_25080_25104[(2)] = inst_25073);
(statearr_25080_25104[(1)] = (3));
return cljs.core.constant$keyword$49;
} else
{if((state_val_25079 === (1)))
{var inst_25055 = null;var state_25078__$1 = (function (){var statearr_25081 = state_25078;(statearr_25081[(7)] = inst_25055);
return statearr_25081;
})();var statearr_25082_25105 = state_25078__$1;(statearr_25082_25105[(2)] = null);
(statearr_25082_25105[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{if((state_val_25079 === (4)))
{var inst_25058 = (state_25078[(8)]);var inst_25058__$1 = (state_25078[(2)]);var inst_25059 = (inst_25058__$1 == null);var inst_25060 = cljs.core.not(inst_25059);var state_25078__$1 = (function (){var statearr_25083 = state_25078;(statearr_25083[(8)] = inst_25058__$1);
return statearr_25083;
})();if(inst_25060)
{var statearr_25084_25106 = state_25078__$1;(statearr_25084_25106[(1)] = (5));
} else
{var statearr_25085_25107 = state_25078__$1;(statearr_25085_25107[(1)] = (6));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_25079 === (6)))
{var state_25078__$1 = state_25078;var statearr_25086_25108 = state_25078__$1;(statearr_25086_25108[(2)] = null);
(statearr_25086_25108[(1)] = (7));
return cljs.core.constant$keyword$49;
} else
{if((state_val_25079 === (3)))
{var inst_25075 = (state_25078[(2)]);var inst_25076 = cljs.core.async.close_BANG_(out);var state_25078__$1 = (function (){var statearr_25087 = state_25078;(statearr_25087[(9)] = inst_25075);
return statearr_25087;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_25078__$1,inst_25076);
} else
{if((state_val_25079 === (2)))
{var state_25078__$1 = state_25078;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25078__$1,(4),ch);
} else
{if((state_val_25079 === (11)))
{var inst_25058 = (state_25078[(8)]);var inst_25067 = (state_25078[(2)]);var inst_25055 = inst_25058;var state_25078__$1 = (function (){var statearr_25088 = state_25078;(statearr_25088[(7)] = inst_25055);
(statearr_25088[(10)] = inst_25067);
return statearr_25088;
})();var statearr_25089_25109 = state_25078__$1;(statearr_25089_25109[(2)] = null);
(statearr_25089_25109[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{if((state_val_25079 === (9)))
{var inst_25058 = (state_25078[(8)]);var state_25078__$1 = state_25078;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25078__$1,(11),out,inst_25058);
} else
{if((state_val_25079 === (5)))
{var inst_25055 = (state_25078[(7)]);var inst_25058 = (state_25078[(8)]);var inst_25062 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25058,inst_25055);var state_25078__$1 = state_25078;if(inst_25062)
{var statearr_25091_25110 = state_25078__$1;(statearr_25091_25110[(1)] = (8));
} else
{var statearr_25092_25111 = state_25078__$1;(statearr_25092_25111[(1)] = (9));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_25079 === (10)))
{var inst_25070 = (state_25078[(2)]);var state_25078__$1 = state_25078;var statearr_25093_25112 = state_25078__$1;(statearr_25093_25112[(2)] = inst_25070);
(statearr_25093_25112[(1)] = (7));
return cljs.core.constant$keyword$49;
} else
{if((state_val_25079 === (8)))
{var inst_25055 = (state_25078[(7)]);var tmp25090 = inst_25055;var inst_25055__$1 = tmp25090;var state_25078__$1 = (function (){var statearr_25094 = state_25078;(statearr_25094[(7)] = inst_25055__$1);
return statearr_25094;
})();var statearr_25095_25113 = state_25078__$1;(statearr_25095_25113[(2)] = null);
(statearr_25095_25113[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5823__auto___25103,out))
;return ((function (switch__5808__auto__,c__5823__auto___25103,out){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_25099 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25099[(0)] = state_machine__5809__auto__);
(statearr_25099[(1)] = (1));
return statearr_25099;
});
var state_machine__5809__auto____1 = (function (state_25078){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__(state_25078);if(cljs.core.keyword_identical_QMARK_(result__5811__auto__,cljs.core.constant$keyword$49))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e25100){if((e25100 instanceof Object))
{var ex__5812__auto__ = e25100;var statearr_25101_25114 = state_25078;(statearr_25101_25114[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25078);
return cljs.core.constant$keyword$49;
} else
{throw e25100;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5810__auto__,cljs.core.constant$keyword$49))
{{
var G__25115 = state_25078;
state_25078 = G__25115;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_25078){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_25078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___25103,out))
})();var state__5825__auto__ = (function (){var statearr_25102 = (function (){return (f__5824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5824__auto__.cljs$core$IFn$_invoke$arity$0() : f__5824__auto__.call(null));
})();(statearr_25102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___25103);
return statearr_25102;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5825__auto__);
});})(c__5823__auto___25103,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5823__auto___25253 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5823__auto___25253,out){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___25253,out){
return (function (state_25223){var state_val_25224 = (state_25223[(1)]);if((state_val_25224 === (7)))
{var inst_25219 = (state_25223[(2)]);var state_25223__$1 = state_25223;var statearr_25225_25254 = state_25223__$1;(statearr_25225_25254[(2)] = inst_25219);
(statearr_25225_25254[(1)] = (3));
return cljs.core.constant$keyword$49;
} else
{if((state_val_25224 === (1)))
{var inst_25186 = (new Array(n));var inst_25187 = inst_25186;var inst_25188 = (0);var state_25223__$1 = (function (){var statearr_25226 = state_25223;(statearr_25226[(7)] = inst_25188);
(statearr_25226[(8)] = inst_25187);
return statearr_25226;
})();var statearr_25227_25255 = state_25223__$1;(statearr_25227_25255[(2)] = null);
(statearr_25227_25255[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{if((state_val_25224 === (4)))
{var inst_25191 = (state_25223[(9)]);var inst_25191__$1 = (state_25223[(2)]);var inst_25192 = (inst_25191__$1 == null);var inst_25193 = cljs.core.not(inst_25192);var state_25223__$1 = (function (){var statearr_25228 = state_25223;(statearr_25228[(9)] = inst_25191__$1);
return statearr_25228;
})();if(inst_25193)
{var statearr_25229_25256 = state_25223__$1;(statearr_25229_25256[(1)] = (5));
} else
{var statearr_25230_25257 = state_25223__$1;(statearr_25230_25257[(1)] = (6));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_25224 === (15)))
{var inst_25213 = (state_25223[(2)]);var state_25223__$1 = state_25223;var statearr_25231_25258 = state_25223__$1;(statearr_25231_25258[(2)] = inst_25213);
(statearr_25231_25258[(1)] = (14));
return cljs.core.constant$keyword$49;
} else
{if((state_val_25224 === (13)))
{var state_25223__$1 = state_25223;var statearr_25232_25259 = state_25223__$1;(statearr_25232_25259[(2)] = null);
(statearr_25232_25259[(1)] = (14));
return cljs.core.constant$keyword$49;
} else
{if((state_val_25224 === (6)))
{var inst_25188 = (state_25223[(7)]);var inst_25209 = (inst_25188 > (0));var state_25223__$1 = state_25223;if(cljs.core.truth_(inst_25209))
{var statearr_25233_25260 = state_25223__$1;(statearr_25233_25260[(1)] = (12));
} else
{var statearr_25234_25261 = state_25223__$1;(statearr_25234_25261[(1)] = (13));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_25224 === (3)))
{var inst_25221 = (state_25223[(2)]);var state_25223__$1 = state_25223;return cljs.core.async.impl.ioc_helpers.return_chan(state_25223__$1,inst_25221);
} else
{if((state_val_25224 === (12)))
{var inst_25187 = (state_25223[(8)]);var inst_25211 = cljs.core.vec(inst_25187);var state_25223__$1 = state_25223;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25223__$1,(15),out,inst_25211);
} else
{if((state_val_25224 === (2)))
{var state_25223__$1 = state_25223;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25223__$1,(4),ch);
} else
{if((state_val_25224 === (11)))
{var inst_25203 = (state_25223[(2)]);var inst_25204 = (new Array(n));var inst_25187 = inst_25204;var inst_25188 = (0);var state_25223__$1 = (function (){var statearr_25235 = state_25223;(statearr_25235[(10)] = inst_25203);
(statearr_25235[(7)] = inst_25188);
(statearr_25235[(8)] = inst_25187);
return statearr_25235;
})();var statearr_25236_25262 = state_25223__$1;(statearr_25236_25262[(2)] = null);
(statearr_25236_25262[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{if((state_val_25224 === (9)))
{var inst_25187 = (state_25223[(8)]);var inst_25201 = cljs.core.vec(inst_25187);var state_25223__$1 = state_25223;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25223__$1,(11),out,inst_25201);
} else
{if((state_val_25224 === (5)))
{var inst_25196 = (state_25223[(11)]);var inst_25188 = (state_25223[(7)]);var inst_25191 = (state_25223[(9)]);var inst_25187 = (state_25223[(8)]);var inst_25195 = (inst_25187[inst_25188] = inst_25191);var inst_25196__$1 = (inst_25188 + (1));var inst_25197 = (inst_25196__$1 < n);var state_25223__$1 = (function (){var statearr_25237 = state_25223;(statearr_25237[(11)] = inst_25196__$1);
(statearr_25237[(12)] = inst_25195);
return statearr_25237;
})();if(cljs.core.truth_(inst_25197))
{var statearr_25238_25263 = state_25223__$1;(statearr_25238_25263[(1)] = (8));
} else
{var statearr_25239_25264 = state_25223__$1;(statearr_25239_25264[(1)] = (9));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_25224 === (14)))
{var inst_25216 = (state_25223[(2)]);var inst_25217 = cljs.core.async.close_BANG_(out);var state_25223__$1 = (function (){var statearr_25241 = state_25223;(statearr_25241[(13)] = inst_25216);
return statearr_25241;
})();var statearr_25242_25265 = state_25223__$1;(statearr_25242_25265[(2)] = inst_25217);
(statearr_25242_25265[(1)] = (7));
return cljs.core.constant$keyword$49;
} else
{if((state_val_25224 === (10)))
{var inst_25207 = (state_25223[(2)]);var state_25223__$1 = state_25223;var statearr_25243_25266 = state_25223__$1;(statearr_25243_25266[(2)] = inst_25207);
(statearr_25243_25266[(1)] = (7));
return cljs.core.constant$keyword$49;
} else
{if((state_val_25224 === (8)))
{var inst_25196 = (state_25223[(11)]);var inst_25187 = (state_25223[(8)]);var tmp25240 = inst_25187;var inst_25187__$1 = tmp25240;var inst_25188 = inst_25196;var state_25223__$1 = (function (){var statearr_25244 = state_25223;(statearr_25244[(7)] = inst_25188);
(statearr_25244[(8)] = inst_25187__$1);
return statearr_25244;
})();var statearr_25245_25267 = state_25223__$1;(statearr_25245_25267[(2)] = null);
(statearr_25245_25267[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5823__auto___25253,out))
;return ((function (switch__5808__auto__,c__5823__auto___25253,out){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_25249 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25249[(0)] = state_machine__5809__auto__);
(statearr_25249[(1)] = (1));
return statearr_25249;
});
var state_machine__5809__auto____1 = (function (state_25223){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__(state_25223);if(cljs.core.keyword_identical_QMARK_(result__5811__auto__,cljs.core.constant$keyword$49))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e25250){if((e25250 instanceof Object))
{var ex__5812__auto__ = e25250;var statearr_25251_25268 = state_25223;(statearr_25251_25268[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25223);
return cljs.core.constant$keyword$49;
} else
{throw e25250;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5810__auto__,cljs.core.constant$keyword$49))
{{
var G__25269 = state_25223;
state_25223 = G__25269;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_25223){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_25223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___25253,out))
})();var state__5825__auto__ = (function (){var statearr_25252 = (function (){return (f__5824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5824__auto__.cljs$core$IFn$_invoke$arity$0() : f__5824__auto__.call(null));
})();(statearr_25252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___25253);
return statearr_25252;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5825__auto__);
});})(c__5823__auto___25253,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5823__auto___25417 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5823__auto___25417,out){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___25417,out){
return (function (state_25386){var state_val_25387 = (state_25386[(1)]);if((state_val_25387 === (7)))
{var inst_25382 = (state_25386[(2)]);var state_25386__$1 = state_25386;var statearr_25388_25418 = state_25386__$1;(statearr_25388_25418[(2)] = inst_25382);
(statearr_25388_25418[(1)] = (3));
return cljs.core.constant$keyword$49;
} else
{if((state_val_25387 === (1)))
{var inst_25345 = [];var inst_25346 = inst_25345;var inst_25347 = cljs.core.constant$keyword$64;var state_25386__$1 = (function (){var statearr_25389 = state_25386;(statearr_25389[(7)] = inst_25347);
(statearr_25389[(8)] = inst_25346);
return statearr_25389;
})();var statearr_25390_25419 = state_25386__$1;(statearr_25390_25419[(2)] = null);
(statearr_25390_25419[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{if((state_val_25387 === (4)))
{var inst_25350 = (state_25386[(9)]);var inst_25350__$1 = (state_25386[(2)]);var inst_25351 = (inst_25350__$1 == null);var inst_25352 = cljs.core.not(inst_25351);var state_25386__$1 = (function (){var statearr_25391 = state_25386;(statearr_25391[(9)] = inst_25350__$1);
return statearr_25391;
})();if(inst_25352)
{var statearr_25392_25420 = state_25386__$1;(statearr_25392_25420[(1)] = (5));
} else
{var statearr_25393_25421 = state_25386__$1;(statearr_25393_25421[(1)] = (6));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_25387 === (15)))
{var inst_25376 = (state_25386[(2)]);var state_25386__$1 = state_25386;var statearr_25394_25422 = state_25386__$1;(statearr_25394_25422[(2)] = inst_25376);
(statearr_25394_25422[(1)] = (14));
return cljs.core.constant$keyword$49;
} else
{if((state_val_25387 === (13)))
{var state_25386__$1 = state_25386;var statearr_25395_25423 = state_25386__$1;(statearr_25395_25423[(2)] = null);
(statearr_25395_25423[(1)] = (14));
return cljs.core.constant$keyword$49;
} else
{if((state_val_25387 === (6)))
{var inst_25346 = (state_25386[(8)]);var inst_25371 = inst_25346.length;var inst_25372 = (inst_25371 > (0));var state_25386__$1 = state_25386;if(cljs.core.truth_(inst_25372))
{var statearr_25396_25424 = state_25386__$1;(statearr_25396_25424[(1)] = (12));
} else
{var statearr_25397_25425 = state_25386__$1;(statearr_25397_25425[(1)] = (13));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_25387 === (3)))
{var inst_25384 = (state_25386[(2)]);var state_25386__$1 = state_25386;return cljs.core.async.impl.ioc_helpers.return_chan(state_25386__$1,inst_25384);
} else
{if((state_val_25387 === (12)))
{var inst_25346 = (state_25386[(8)]);var inst_25374 = cljs.core.vec(inst_25346);var state_25386__$1 = state_25386;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25386__$1,(15),out,inst_25374);
} else
{if((state_val_25387 === (2)))
{var state_25386__$1 = state_25386;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25386__$1,(4),ch);
} else
{if((state_val_25387 === (11)))
{var inst_25350 = (state_25386[(9)]);var inst_25354 = (state_25386[(10)]);var inst_25364 = (state_25386[(2)]);var inst_25365 = [];var inst_25366 = inst_25365.push(inst_25350);var inst_25346 = inst_25365;var inst_25347 = inst_25354;var state_25386__$1 = (function (){var statearr_25398 = state_25386;(statearr_25398[(11)] = inst_25364);
(statearr_25398[(12)] = inst_25366);
(statearr_25398[(7)] = inst_25347);
(statearr_25398[(8)] = inst_25346);
return statearr_25398;
})();var statearr_25399_25426 = state_25386__$1;(statearr_25399_25426[(2)] = null);
(statearr_25399_25426[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{if((state_val_25387 === (9)))
{var inst_25346 = (state_25386[(8)]);var inst_25362 = cljs.core.vec(inst_25346);var state_25386__$1 = state_25386;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25386__$1,(11),out,inst_25362);
} else
{if((state_val_25387 === (5)))
{var inst_25347 = (state_25386[(7)]);var inst_25350 = (state_25386[(9)]);var inst_25354 = (state_25386[(10)]);var inst_25354__$1 = (function (){var G__25400 = inst_25350;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25400) : f.call(null,G__25400));
})();var inst_25355 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25354__$1,inst_25347);var inst_25356 = cljs.core.keyword_identical_QMARK_(inst_25347,cljs.core.constant$keyword$64);var inst_25357 = (inst_25355) || (inst_25356);var state_25386__$1 = (function (){var statearr_25401 = state_25386;(statearr_25401[(10)] = inst_25354__$1);
return statearr_25401;
})();if(cljs.core.truth_(inst_25357))
{var statearr_25402_25427 = state_25386__$1;(statearr_25402_25427[(1)] = (8));
} else
{var statearr_25403_25428 = state_25386__$1;(statearr_25403_25428[(1)] = (9));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_25387 === (14)))
{var inst_25379 = (state_25386[(2)]);var inst_25380 = cljs.core.async.close_BANG_(out);var state_25386__$1 = (function (){var statearr_25405 = state_25386;(statearr_25405[(13)] = inst_25379);
return statearr_25405;
})();var statearr_25406_25429 = state_25386__$1;(statearr_25406_25429[(2)] = inst_25380);
(statearr_25406_25429[(1)] = (7));
return cljs.core.constant$keyword$49;
} else
{if((state_val_25387 === (10)))
{var inst_25369 = (state_25386[(2)]);var state_25386__$1 = state_25386;var statearr_25407_25430 = state_25386__$1;(statearr_25407_25430[(2)] = inst_25369);
(statearr_25407_25430[(1)] = (7));
return cljs.core.constant$keyword$49;
} else
{if((state_val_25387 === (8)))
{var inst_25350 = (state_25386[(9)]);var inst_25354 = (state_25386[(10)]);var inst_25346 = (state_25386[(8)]);var inst_25359 = inst_25346.push(inst_25350);var tmp25404 = inst_25346;var inst_25346__$1 = tmp25404;var inst_25347 = inst_25354;var state_25386__$1 = (function (){var statearr_25408 = state_25386;(statearr_25408[(7)] = inst_25347);
(statearr_25408[(14)] = inst_25359);
(statearr_25408[(8)] = inst_25346__$1);
return statearr_25408;
})();var statearr_25409_25431 = state_25386__$1;(statearr_25409_25431[(2)] = null);
(statearr_25409_25431[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5823__auto___25417,out))
;return ((function (switch__5808__auto__,c__5823__auto___25417,out){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_25413 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25413[(0)] = state_machine__5809__auto__);
(statearr_25413[(1)] = (1));
return statearr_25413;
});
var state_machine__5809__auto____1 = (function (state_25386){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__(state_25386);if(cljs.core.keyword_identical_QMARK_(result__5811__auto__,cljs.core.constant$keyword$49))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e25414){if((e25414 instanceof Object))
{var ex__5812__auto__ = e25414;var statearr_25415_25432 = state_25386;(statearr_25415_25432[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25386);
return cljs.core.constant$keyword$49;
} else
{throw e25414;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5810__auto__,cljs.core.constant$keyword$49))
{{
var G__25433 = state_25386;
state_25386 = G__25433;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_25386){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_25386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___25417,out))
})();var state__5825__auto__ = (function (){var statearr_25416 = (function (){return (f__5824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5824__auto__.cljs$core$IFn$_invoke$arity$0() : f__5824__auto__.call(null));
})();(statearr_25416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___25417);
return statearr_25416;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5825__auto__);
});})(c__5823__auto___25417,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
