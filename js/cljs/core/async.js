// Compiled by ClojureScript 0.0-2727 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t24328 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24328 = (function (f,fn_handler,meta24329){
this.f = f;
this.fn_handler = fn_handler;
this.meta24329 = meta24329;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24328.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24328.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t24328.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t24328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24330){
var self__ = this;
var _24330__$1 = this;
return self__.meta24329;
});

cljs.core.async.t24328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24330,meta24329__$1){
var self__ = this;
var _24330__$1 = this;
return (new cljs.core.async.t24328(self__.f,self__.fn_handler,meta24329__$1));
});

cljs.core.async.t24328.cljs$lang$type = true;

cljs.core.async.t24328.cljs$lang$ctorStr = "cljs.core.async/t24328";

cljs.core.async.t24328.cljs$lang$ctorPrWriter = (function (this__4337__auto__,writer__4338__auto__,opt__4339__auto__){
return cljs.core._write(writer__4338__auto__,"cljs.core.async/t24328");
});

cljs.core.async.__GT_t24328 = (function __GT_t24328(f__$1,fn_handler__$1,meta24329){
return (new cljs.core.async.t24328(f__$1,fn_handler__$1,meta24329));
});

}

return (new cljs.core.async.t24328(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,20,cljs.core.constant$keyword$9,16,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,13,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__24332 = buff;
if(G__24332){
var bit__4431__auto__ = null;
if(cljs.core.truth_((function (){var or__3750__auto__ = bit__4431__auto__;
if(cljs.core.truth_(or__3750__auto__)){
return or__3750__auto__;
} else {
return G__24332.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__24332.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24332);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24332);
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
var chan__0 = (function (){
return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){
return chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)], 0)))].join('')));
}
} else {
}

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
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(ret)){
var val_24349 = (function (){var G__24346 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24346) : cljs.core.deref.call(null,G__24346));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__24347_24350 = val_24349;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24347_24350) : fn1.call(null,G__24347_24350));
} else {
cljs.core.async.impl.dispatch.run(((function (val_24349,ret){
return (function (){
var G__24348 = val_24349;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24348) : fn1.call(null,G__24348));
});})(val_24349,ret))
);
}
} else {
}

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
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
var G__24359 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24359) : cljs.core.deref.call(null,G__24359));
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = (function (){var G__24360 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24360) : cljs.core.deref.call(null,G__24360));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__24361_24363 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24361_24363) : fn1.call(null,G__24361_24363));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__24362 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24362) : fn1.call(null,G__24362));
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
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
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4637__auto___24364 = n;
var x_24365 = (0);
while(true){
if((x_24365 < n__4637__auto___24364)){
(a[x_24365] = (0));

var G__24366 = (x_24365 + (1));
x_24365 = G__24366;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__24367 = (i + (1));
i = G__24367;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__24375 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24375) : cljs.core.atom.call(null,G__24375));
})();
if(typeof cljs.core.async.t24376 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24376 = (function (flag,alt_flag,meta24377){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24377 = meta24377;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24376.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24376.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__24379 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24379) : cljs.core.deref.call(null,G__24379));
});})(flag))
;

cljs.core.async.t24376.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__24380_24382 = self__.flag;
var G__24381_24383 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24380_24382,G__24381_24383) : cljs.core.reset_BANG_.call(null,G__24380_24382,G__24381_24383));

return true;
});})(flag))
;

cljs.core.async.t24376.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24378){
var self__ = this;
var _24378__$1 = this;
return self__.meta24377;
});})(flag))
;

cljs.core.async.t24376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24378,meta24377__$1){
var self__ = this;
var _24378__$1 = this;
return (new cljs.core.async.t24376(self__.flag,self__.alt_flag,meta24377__$1));
});})(flag))
;

cljs.core.async.t24376.cljs$lang$type = true;

cljs.core.async.t24376.cljs$lang$ctorStr = "cljs.core.async/t24376";

cljs.core.async.t24376.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4337__auto__,writer__4338__auto__,opt__4339__auto__){
return cljs.core._write(writer__4338__auto__,"cljs.core.async/t24376");
});})(flag))
;

cljs.core.async.__GT_t24376 = ((function (flag){
return (function __GT_t24376(flag__$1,alt_flag__$1,meta24377){
return (new cljs.core.async.t24376(flag__$1,alt_flag__$1,meta24377));
});})(flag))
;

}

return (new cljs.core.async.t24376(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,15,cljs.core.constant$keyword$9,146,cljs.core.constant$keyword$10,5,cljs.core.constant$keyword$11,141,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t24387 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24387 = (function (cb,flag,alt_handler,meta24388){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24388 = meta24388;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24387.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24387.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t24387.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t24387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24389){
var self__ = this;
var _24389__$1 = this;
return self__.meta24388;
});

cljs.core.async.t24387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24389,meta24388__$1){
var self__ = this;
var _24389__$1 = this;
return (new cljs.core.async.t24387(self__.cb,self__.flag,self__.alt_handler,meta24388__$1));
});

cljs.core.async.t24387.cljs$lang$type = true;

cljs.core.async.t24387.cljs$lang$ctorStr = "cljs.core.async/t24387";

cljs.core.async.t24387.cljs$lang$ctorPrWriter = (function (this__4337__auto__,writer__4338__auto__,opt__4339__auto__){
return cljs.core._write(writer__4338__auto__,"cljs.core.async/t24387");
});

cljs.core.async.__GT_t24387 = (function __GT_t24387(cb__$1,flag__$1,alt_handler__$1,meta24388){
return (new cljs.core.async.t24387(cb__$1,flag__$1,alt_handler__$1,meta24388));
});

}

return (new cljs.core.async.t24387(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,11,cljs.core.constant$keyword$9,154,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,149,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.constant$keyword$71.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__24397 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__24397) : port.call(null,G__24397));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__24398 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__24398) : port.call(null,G__24398));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24390_SHARP_){
var G__24399 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24390_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24399) : fret.call(null,G__24399));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24391_SHARP_){
var G__24400 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24391_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24400) : fret.call(null,G__24400));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24401 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24401) : cljs.core.deref.call(null,G__24401));
})(),(function (){var or__3750__auto__ = wport;
if(cljs.core.truth_(or__3750__auto__)){
return or__3750__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24402 = (i + (1));
i = G__24402;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3750__auto__ = ret;
if(cljs.core.truth_(or__3750__auto__)){
return or__3750__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$7)){
var temp__4126__auto__ = (function (){var and__3738__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__3738__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__3738__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$7.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$7], null));
} else {
return null;
}
} else {
return null;
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
var alts_BANG___delegate = function (ports,p__24403){
var map__24405 = p__24403;
var map__24405__$1 = ((cljs.core.seq_QMARK_(map__24405))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24405):map__24405);
var opts = map__24405__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__24403 = null;
if (arguments.length > 1) {
var G__24406__i = 0, G__24406__a = new Array(arguments.length -  1);
while (G__24406__i < G__24406__a.length) {G__24406__a[G__24406__i] = arguments[G__24406__i + 1]; ++G__24406__i;}
  p__24403 = new cljs.core.IndexedSeq(G__24406__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__24403);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24407){
var ports = cljs.core.first(arglist__24407);
var p__24403 = cljs.core.rest(arglist__24407);
return alts_BANG___delegate(ports,p__24403);
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
var pipe__2 = (function (from,to){
return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__11733__auto___24505 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11733__auto___24505){
return (function (){
var f__11734__auto__ = (function (){var switch__11653__auto__ = ((function (c__11733__auto___24505){
return (function (state_24481){
var state_val_24482 = (state_24481[(1)]);
if((state_val_24482 === (7))){
var inst_24477 = (state_24481[(2)]);
var state_24481__$1 = state_24481;
var statearr_24483_24506 = state_24481__$1;
(statearr_24483_24506[(2)] = inst_24477);

(statearr_24483_24506[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24482 === (1))){
var state_24481__$1 = state_24481;
var statearr_24484_24507 = state_24481__$1;
(statearr_24484_24507[(2)] = null);

(statearr_24484_24507[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24482 === (4))){
var inst_24460 = (state_24481[(7)]);
var inst_24460__$1 = (state_24481[(2)]);
var inst_24461 = (inst_24460__$1 == null);
var state_24481__$1 = (function (){var statearr_24485 = state_24481;
(statearr_24485[(7)] = inst_24460__$1);

return statearr_24485;
})();
if(cljs.core.truth_(inst_24461)){
var statearr_24486_24508 = state_24481__$1;
(statearr_24486_24508[(1)] = (5));

} else {
var statearr_24487_24509 = state_24481__$1;
(statearr_24487_24509[(1)] = (6));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_24482 === (13))){
var state_24481__$1 = state_24481;
var statearr_24488_24510 = state_24481__$1;
(statearr_24488_24510[(2)] = null);

(statearr_24488_24510[(1)] = (14));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24482 === (6))){
var inst_24460 = (state_24481[(7)]);
var state_24481__$1 = state_24481;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24481__$1,(11),to,inst_24460);
} else {
if((state_val_24482 === (3))){
var inst_24479 = (state_24481[(2)]);
var state_24481__$1 = state_24481;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24481__$1,inst_24479);
} else {
if((state_val_24482 === (12))){
var state_24481__$1 = state_24481;
var statearr_24489_24511 = state_24481__$1;
(statearr_24489_24511[(2)] = null);

(statearr_24489_24511[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24482 === (2))){
var state_24481__$1 = state_24481;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24481__$1,(4),from);
} else {
if((state_val_24482 === (11))){
var inst_24470 = (state_24481[(2)]);
var state_24481__$1 = state_24481;
if(cljs.core.truth_(inst_24470)){
var statearr_24490_24512 = state_24481__$1;
(statearr_24490_24512[(1)] = (12));

} else {
var statearr_24491_24513 = state_24481__$1;
(statearr_24491_24513[(1)] = (13));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_24482 === (9))){
var state_24481__$1 = state_24481;
var statearr_24492_24514 = state_24481__$1;
(statearr_24492_24514[(2)] = null);

(statearr_24492_24514[(1)] = (10));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24482 === (5))){
var state_24481__$1 = state_24481;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24493_24515 = state_24481__$1;
(statearr_24493_24515[(1)] = (8));

} else {
var statearr_24494_24516 = state_24481__$1;
(statearr_24494_24516[(1)] = (9));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_24482 === (14))){
var inst_24475 = (state_24481[(2)]);
var state_24481__$1 = state_24481;
var statearr_24495_24517 = state_24481__$1;
(statearr_24495_24517[(2)] = inst_24475);

(statearr_24495_24517[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24482 === (10))){
var inst_24467 = (state_24481[(2)]);
var state_24481__$1 = state_24481;
var statearr_24496_24518 = state_24481__$1;
(statearr_24496_24518[(2)] = inst_24467);

(statearr_24496_24518[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24482 === (8))){
var inst_24464 = cljs.core.async.close_BANG_(to);
var state_24481__$1 = state_24481;
var statearr_24497_24519 = state_24481__$1;
(statearr_24497_24519[(2)] = inst_24464);

(statearr_24497_24519[(1)] = (10));


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
}
}
}
}
}
}
}
});})(c__11733__auto___24505))
;
return ((function (switch__11653__auto__,c__11733__auto___24505){
return (function() {
var state_machine__11654__auto__ = null;
var state_machine__11654__auto____0 = (function (){
var statearr_24501 = [null,null,null,null,null,null,null,null];
(statearr_24501[(0)] = state_machine__11654__auto__);

(statearr_24501[(1)] = (1));

return statearr_24501;
});
var state_machine__11654__auto____1 = (function (state_24481){
while(true){
var ret_value__11655__auto__ = (function (){try{while(true){
var result__11656__auto__ = switch__11653__auto__(state_24481);
if(cljs.core.keyword_identical_QMARK_(result__11656__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11656__auto__;
}
break;
}
}catch (e24502){if((e24502 instanceof Object)){
var ex__11657__auto__ = e24502;
var statearr_24503_24520 = state_24481;
(statearr_24503_24520[(5)] = ex__11657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24481);

return cljs.core.constant$keyword$65;
} else {
throw e24502;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11655__auto__,cljs.core.constant$keyword$65)){
var G__24521 = state_24481;
state_24481 = G__24521;
continue;
} else {
return ret_value__11655__auto__;
}
break;
}
});
state_machine__11654__auto__ = function(state_24481){
switch(arguments.length){
case 0:
return state_machine__11654__auto____0.call(this);
case 1:
return state_machine__11654__auto____1.call(this,state_24481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11654__auto____0;
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11654__auto____1;
return state_machine__11654__auto__;
})()
;})(switch__11653__auto__,c__11733__auto___24505))
})();
var state__11735__auto__ = (function (){var statearr_24504 = (function (){return (f__11734__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11734__auto__.cljs$core$IFn$_invoke$arity$0() : f__11734__auto__.call(null));
})();
(statearr_24504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11733__auto___24505);

return statearr_24504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11735__auto__);
});})(c__11733__auto___24505))
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
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))], 0)))].join('')));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__24707){
var vec__24708 = p__24707;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24708,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24708,(1),null);
var job = vec__24708;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__11733__auto___24892 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11733__auto___24892,res,vec__24708,v,p,job,jobs,results){
return (function (){
var f__11734__auto__ = (function (){var switch__11653__auto__ = ((function (c__11733__auto___24892,res,vec__24708,v,p,job,jobs,results){
return (function (state_24713){
var state_val_24714 = (state_24713[(1)]);
if((state_val_24714 === (2))){
var inst_24710 = (state_24713[(2)]);
var inst_24711 = cljs.core.async.close_BANG_(res);
var state_24713__$1 = (function (){var statearr_24715 = state_24713;
(statearr_24715[(7)] = inst_24710);

return statearr_24715;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24713__$1,inst_24711);
} else {
if((state_val_24714 === (1))){
var state_24713__$1 = state_24713;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24713__$1,(2),res,v);
} else {
return null;
}
}
});})(c__11733__auto___24892,res,vec__24708,v,p,job,jobs,results))
;
return ((function (switch__11653__auto__,c__11733__auto___24892,res,vec__24708,v,p,job,jobs,results){
return (function() {
var state_machine__11654__auto__ = null;
var state_machine__11654__auto____0 = (function (){
var statearr_24719 = [null,null,null,null,null,null,null,null];
(statearr_24719[(0)] = state_machine__11654__auto__);

(statearr_24719[(1)] = (1));

return statearr_24719;
});
var state_machine__11654__auto____1 = (function (state_24713){
while(true){
var ret_value__11655__auto__ = (function (){try{while(true){
var result__11656__auto__ = switch__11653__auto__(state_24713);
if(cljs.core.keyword_identical_QMARK_(result__11656__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11656__auto__;
}
break;
}
}catch (e24720){if((e24720 instanceof Object)){
var ex__11657__auto__ = e24720;
var statearr_24721_24893 = state_24713;
(statearr_24721_24893[(5)] = ex__11657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24713);

return cljs.core.constant$keyword$65;
} else {
throw e24720;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11655__auto__,cljs.core.constant$keyword$65)){
var G__24894 = state_24713;
state_24713 = G__24894;
continue;
} else {
return ret_value__11655__auto__;
}
break;
}
});
state_machine__11654__auto__ = function(state_24713){
switch(arguments.length){
case 0:
return state_machine__11654__auto____0.call(this);
case 1:
return state_machine__11654__auto____1.call(this,state_24713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11654__auto____0;
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11654__auto____1;
return state_machine__11654__auto__;
})()
;})(switch__11653__auto__,c__11733__auto___24892,res,vec__24708,v,p,job,jobs,results))
})();
var state__11735__auto__ = (function (){var statearr_24722 = (function (){return (f__11734__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11734__auto__.cljs$core$IFn$_invoke$arity$0() : f__11734__auto__.call(null));
})();
(statearr_24722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11733__auto___24892);

return statearr_24722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11735__auto__);
});})(c__11733__auto___24892,res,vec__24708,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24723){
var vec__24724 = p__24723;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24724,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24724,(1),null);
var job = vec__24724;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__24725_24895 = v;
var G__24726_24896 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__24725_24895,G__24726_24896) : xf.call(null,G__24725_24895,G__24726_24896));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4637__auto___24897 = n;
var __24898 = (0);
while(true){
if((__24898 < n__4637__auto___24897)){
var G__24727_24899 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24727_24899) {
case "async":
var c__11733__auto___24901 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24898,c__11733__auto___24901,G__24727_24899,n__4637__auto___24897,jobs,results,process,async){
return (function (){
var f__11734__auto__ = (function (){var switch__11653__auto__ = ((function (__24898,c__11733__auto___24901,G__24727_24899,n__4637__auto___24897,jobs,results,process,async){
return (function (state_24740){
var state_val_24741 = (state_24740[(1)]);
if((state_val_24741 === (7))){
var inst_24736 = (state_24740[(2)]);
var state_24740__$1 = state_24740;
var statearr_24742_24902 = state_24740__$1;
(statearr_24742_24902[(2)] = inst_24736);

(statearr_24742_24902[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24741 === (6))){
var state_24740__$1 = state_24740;
var statearr_24743_24903 = state_24740__$1;
(statearr_24743_24903[(2)] = null);

(statearr_24743_24903[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24741 === (5))){
var state_24740__$1 = state_24740;
var statearr_24744_24904 = state_24740__$1;
(statearr_24744_24904[(2)] = null);

(statearr_24744_24904[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24741 === (4))){
var inst_24730 = (state_24740[(2)]);
var inst_24731 = async(inst_24730);
var state_24740__$1 = state_24740;
if(cljs.core.truth_(inst_24731)){
var statearr_24745_24905 = state_24740__$1;
(statearr_24745_24905[(1)] = (5));

} else {
var statearr_24746_24906 = state_24740__$1;
(statearr_24746_24906[(1)] = (6));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_24741 === (3))){
var inst_24738 = (state_24740[(2)]);
var state_24740__$1 = state_24740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24740__$1,inst_24738);
} else {
if((state_val_24741 === (2))){
var state_24740__$1 = state_24740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24740__$1,(4),jobs);
} else {
if((state_val_24741 === (1))){
var state_24740__$1 = state_24740;
var statearr_24747_24907 = state_24740__$1;
(statearr_24747_24907[(2)] = null);

(statearr_24747_24907[(1)] = (2));


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
});})(__24898,c__11733__auto___24901,G__24727_24899,n__4637__auto___24897,jobs,results,process,async))
;
return ((function (__24898,switch__11653__auto__,c__11733__auto___24901,G__24727_24899,n__4637__auto___24897,jobs,results,process,async){
return (function() {
var state_machine__11654__auto__ = null;
var state_machine__11654__auto____0 = (function (){
var statearr_24751 = [null,null,null,null,null,null,null];
(statearr_24751[(0)] = state_machine__11654__auto__);

(statearr_24751[(1)] = (1));

return statearr_24751;
});
var state_machine__11654__auto____1 = (function (state_24740){
while(true){
var ret_value__11655__auto__ = (function (){try{while(true){
var result__11656__auto__ = switch__11653__auto__(state_24740);
if(cljs.core.keyword_identical_QMARK_(result__11656__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11656__auto__;
}
break;
}
}catch (e24752){if((e24752 instanceof Object)){
var ex__11657__auto__ = e24752;
var statearr_24753_24908 = state_24740;
(statearr_24753_24908[(5)] = ex__11657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24740);

return cljs.core.constant$keyword$65;
} else {
throw e24752;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11655__auto__,cljs.core.constant$keyword$65)){
var G__24909 = state_24740;
state_24740 = G__24909;
continue;
} else {
return ret_value__11655__auto__;
}
break;
}
});
state_machine__11654__auto__ = function(state_24740){
switch(arguments.length){
case 0:
return state_machine__11654__auto____0.call(this);
case 1:
return state_machine__11654__auto____1.call(this,state_24740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11654__auto____0;
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11654__auto____1;
return state_machine__11654__auto__;
})()
;})(__24898,switch__11653__auto__,c__11733__auto___24901,G__24727_24899,n__4637__auto___24897,jobs,results,process,async))
})();
var state__11735__auto__ = (function (){var statearr_24754 = (function (){return (f__11734__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11734__auto__.cljs$core$IFn$_invoke$arity$0() : f__11734__auto__.call(null));
})();
(statearr_24754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11733__auto___24901);

return statearr_24754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11735__auto__);
});})(__24898,c__11733__auto___24901,G__24727_24899,n__4637__auto___24897,jobs,results,process,async))
);


break;
case "compute":
var c__11733__auto___24910 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24898,c__11733__auto___24910,G__24727_24899,n__4637__auto___24897,jobs,results,process,async){
return (function (){
var f__11734__auto__ = (function (){var switch__11653__auto__ = ((function (__24898,c__11733__auto___24910,G__24727_24899,n__4637__auto___24897,jobs,results,process,async){
return (function (state_24767){
var state_val_24768 = (state_24767[(1)]);
if((state_val_24768 === (7))){
var inst_24763 = (state_24767[(2)]);
var state_24767__$1 = state_24767;
var statearr_24769_24911 = state_24767__$1;
(statearr_24769_24911[(2)] = inst_24763);

(statearr_24769_24911[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24768 === (6))){
var state_24767__$1 = state_24767;
var statearr_24770_24912 = state_24767__$1;
(statearr_24770_24912[(2)] = null);

(statearr_24770_24912[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24768 === (5))){
var state_24767__$1 = state_24767;
var statearr_24771_24913 = state_24767__$1;
(statearr_24771_24913[(2)] = null);

(statearr_24771_24913[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24768 === (4))){
var inst_24757 = (state_24767[(2)]);
var inst_24758 = process(inst_24757);
var state_24767__$1 = state_24767;
if(cljs.core.truth_(inst_24758)){
var statearr_24772_24914 = state_24767__$1;
(statearr_24772_24914[(1)] = (5));

} else {
var statearr_24773_24915 = state_24767__$1;
(statearr_24773_24915[(1)] = (6));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_24768 === (3))){
var inst_24765 = (state_24767[(2)]);
var state_24767__$1 = state_24767;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24767__$1,inst_24765);
} else {
if((state_val_24768 === (2))){
var state_24767__$1 = state_24767;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24767__$1,(4),jobs);
} else {
if((state_val_24768 === (1))){
var state_24767__$1 = state_24767;
var statearr_24774_24916 = state_24767__$1;
(statearr_24774_24916[(2)] = null);

(statearr_24774_24916[(1)] = (2));


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
});})(__24898,c__11733__auto___24910,G__24727_24899,n__4637__auto___24897,jobs,results,process,async))
;
return ((function (__24898,switch__11653__auto__,c__11733__auto___24910,G__24727_24899,n__4637__auto___24897,jobs,results,process,async){
return (function() {
var state_machine__11654__auto__ = null;
var state_machine__11654__auto____0 = (function (){
var statearr_24778 = [null,null,null,null,null,null,null];
(statearr_24778[(0)] = state_machine__11654__auto__);

(statearr_24778[(1)] = (1));

return statearr_24778;
});
var state_machine__11654__auto____1 = (function (state_24767){
while(true){
var ret_value__11655__auto__ = (function (){try{while(true){
var result__11656__auto__ = switch__11653__auto__(state_24767);
if(cljs.core.keyword_identical_QMARK_(result__11656__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11656__auto__;
}
break;
}
}catch (e24779){if((e24779 instanceof Object)){
var ex__11657__auto__ = e24779;
var statearr_24780_24917 = state_24767;
(statearr_24780_24917[(5)] = ex__11657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24767);

return cljs.core.constant$keyword$65;
} else {
throw e24779;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11655__auto__,cljs.core.constant$keyword$65)){
var G__24918 = state_24767;
state_24767 = G__24918;
continue;
} else {
return ret_value__11655__auto__;
}
break;
}
});
state_machine__11654__auto__ = function(state_24767){
switch(arguments.length){
case 0:
return state_machine__11654__auto____0.call(this);
case 1:
return state_machine__11654__auto____1.call(this,state_24767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11654__auto____0;
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11654__auto____1;
return state_machine__11654__auto__;
})()
;})(__24898,switch__11653__auto__,c__11733__auto___24910,G__24727_24899,n__4637__auto___24897,jobs,results,process,async))
})();
var state__11735__auto__ = (function (){var statearr_24781 = (function (){return (f__11734__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11734__auto__.cljs$core$IFn$_invoke$arity$0() : f__11734__auto__.call(null));
})();
(statearr_24781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11733__auto___24910);

return statearr_24781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11735__auto__);
});})(__24898,c__11733__auto___24910,G__24727_24899,n__4637__auto___24897,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24919 = (__24898 + (1));
__24898 = G__24919;
continue;
} else {
}
break;
}

var c__11733__auto___24920 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11733__auto___24920,jobs,results,process,async){
return (function (){
var f__11734__auto__ = (function (){var switch__11653__auto__ = ((function (c__11733__auto___24920,jobs,results,process,async){
return (function (state_24803){
var state_val_24804 = (state_24803[(1)]);
if((state_val_24804 === (9))){
var inst_24796 = (state_24803[(2)]);
var state_24803__$1 = (function (){var statearr_24805 = state_24803;
(statearr_24805[(7)] = inst_24796);

return statearr_24805;
})();
var statearr_24806_24921 = state_24803__$1;
(statearr_24806_24921[(2)] = null);

(statearr_24806_24921[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24804 === (8))){
var inst_24789 = (state_24803[(8)]);
var inst_24794 = (state_24803[(2)]);
var state_24803__$1 = (function (){var statearr_24807 = state_24803;
(statearr_24807[(9)] = inst_24794);

return statearr_24807;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24803__$1,(9),results,inst_24789);
} else {
if((state_val_24804 === (7))){
var inst_24799 = (state_24803[(2)]);
var state_24803__$1 = state_24803;
var statearr_24808_24922 = state_24803__$1;
(statearr_24808_24922[(2)] = inst_24799);

(statearr_24808_24922[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24804 === (6))){
var inst_24789 = (state_24803[(8)]);
var inst_24784 = (state_24803[(10)]);
var inst_24789__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_24790 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24791 = [inst_24784,inst_24789__$1];
var inst_24792 = (new cljs.core.PersistentVector(null,2,(5),inst_24790,inst_24791,null));
var state_24803__$1 = (function (){var statearr_24809 = state_24803;
(statearr_24809[(8)] = inst_24789__$1);

return statearr_24809;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24803__$1,(8),jobs,inst_24792);
} else {
if((state_val_24804 === (5))){
var inst_24787 = cljs.core.async.close_BANG_(jobs);
var state_24803__$1 = state_24803;
var statearr_24810_24923 = state_24803__$1;
(statearr_24810_24923[(2)] = inst_24787);

(statearr_24810_24923[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24804 === (4))){
var inst_24784 = (state_24803[(10)]);
var inst_24784__$1 = (state_24803[(2)]);
var inst_24785 = (inst_24784__$1 == null);
var state_24803__$1 = (function (){var statearr_24811 = state_24803;
(statearr_24811[(10)] = inst_24784__$1);

return statearr_24811;
})();
if(cljs.core.truth_(inst_24785)){
var statearr_24812_24924 = state_24803__$1;
(statearr_24812_24924[(1)] = (5));

} else {
var statearr_24813_24925 = state_24803__$1;
(statearr_24813_24925[(1)] = (6));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_24804 === (3))){
var inst_24801 = (state_24803[(2)]);
var state_24803__$1 = state_24803;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24803__$1,inst_24801);
} else {
if((state_val_24804 === (2))){
var state_24803__$1 = state_24803;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24803__$1,(4),from);
} else {
if((state_val_24804 === (1))){
var state_24803__$1 = state_24803;
var statearr_24814_24926 = state_24803__$1;
(statearr_24814_24926[(2)] = null);

(statearr_24814_24926[(1)] = (2));


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
}
}
});})(c__11733__auto___24920,jobs,results,process,async))
;
return ((function (switch__11653__auto__,c__11733__auto___24920,jobs,results,process,async){
return (function() {
var state_machine__11654__auto__ = null;
var state_machine__11654__auto____0 = (function (){
var statearr_24818 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24818[(0)] = state_machine__11654__auto__);

(statearr_24818[(1)] = (1));

return statearr_24818;
});
var state_machine__11654__auto____1 = (function (state_24803){
while(true){
var ret_value__11655__auto__ = (function (){try{while(true){
var result__11656__auto__ = switch__11653__auto__(state_24803);
if(cljs.core.keyword_identical_QMARK_(result__11656__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11656__auto__;
}
break;
}
}catch (e24819){if((e24819 instanceof Object)){
var ex__11657__auto__ = e24819;
var statearr_24820_24927 = state_24803;
(statearr_24820_24927[(5)] = ex__11657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24803);

return cljs.core.constant$keyword$65;
} else {
throw e24819;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11655__auto__,cljs.core.constant$keyword$65)){
var G__24928 = state_24803;
state_24803 = G__24928;
continue;
} else {
return ret_value__11655__auto__;
}
break;
}
});
state_machine__11654__auto__ = function(state_24803){
switch(arguments.length){
case 0:
return state_machine__11654__auto____0.call(this);
case 1:
return state_machine__11654__auto____1.call(this,state_24803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11654__auto____0;
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11654__auto____1;
return state_machine__11654__auto__;
})()
;})(switch__11653__auto__,c__11733__auto___24920,jobs,results,process,async))
})();
var state__11735__auto__ = (function (){var statearr_24821 = (function (){return (f__11734__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11734__auto__.cljs$core$IFn$_invoke$arity$0() : f__11734__auto__.call(null));
})();
(statearr_24821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11733__auto___24920);

return statearr_24821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11735__auto__);
});})(c__11733__auto___24920,jobs,results,process,async))
);


var c__11733__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11733__auto__,jobs,results,process,async){
return (function (){
var f__11734__auto__ = (function (){var switch__11653__auto__ = ((function (c__11733__auto__,jobs,results,process,async){
return (function (state_24859){
var state_val_24860 = (state_24859[(1)]);
if((state_val_24860 === (7))){
var inst_24855 = (state_24859[(2)]);
var state_24859__$1 = state_24859;
var statearr_24861_24929 = state_24859__$1;
(statearr_24861_24929[(2)] = inst_24855);

(statearr_24861_24929[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24860 === (20))){
var state_24859__$1 = state_24859;
var statearr_24862_24930 = state_24859__$1;
(statearr_24862_24930[(2)] = null);

(statearr_24862_24930[(1)] = (21));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24860 === (1))){
var state_24859__$1 = state_24859;
var statearr_24863_24931 = state_24859__$1;
(statearr_24863_24931[(2)] = null);

(statearr_24863_24931[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24860 === (4))){
var inst_24824 = (state_24859[(7)]);
var inst_24824__$1 = (state_24859[(2)]);
var inst_24825 = (inst_24824__$1 == null);
var state_24859__$1 = (function (){var statearr_24864 = state_24859;
(statearr_24864[(7)] = inst_24824__$1);

return statearr_24864;
})();
if(cljs.core.truth_(inst_24825)){
var statearr_24865_24932 = state_24859__$1;
(statearr_24865_24932[(1)] = (5));

} else {
var statearr_24866_24933 = state_24859__$1;
(statearr_24866_24933[(1)] = (6));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_24860 === (15))){
var inst_24837 = (state_24859[(8)]);
var state_24859__$1 = state_24859;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24859__$1,(18),to,inst_24837);
} else {
if((state_val_24860 === (21))){
var inst_24850 = (state_24859[(2)]);
var state_24859__$1 = state_24859;
var statearr_24867_24934 = state_24859__$1;
(statearr_24867_24934[(2)] = inst_24850);

(statearr_24867_24934[(1)] = (13));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24860 === (13))){
var inst_24852 = (state_24859[(2)]);
var state_24859__$1 = (function (){var statearr_24868 = state_24859;
(statearr_24868[(9)] = inst_24852);

return statearr_24868;
})();
var statearr_24869_24935 = state_24859__$1;
(statearr_24869_24935[(2)] = null);

(statearr_24869_24935[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24860 === (6))){
var inst_24824 = (state_24859[(7)]);
var state_24859__$1 = state_24859;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24859__$1,(11),inst_24824);
} else {
if((state_val_24860 === (17))){
var inst_24845 = (state_24859[(2)]);
var state_24859__$1 = state_24859;
if(cljs.core.truth_(inst_24845)){
var statearr_24870_24936 = state_24859__$1;
(statearr_24870_24936[(1)] = (19));

} else {
var statearr_24871_24937 = state_24859__$1;
(statearr_24871_24937[(1)] = (20));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_24860 === (3))){
var inst_24857 = (state_24859[(2)]);
var state_24859__$1 = state_24859;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24859__$1,inst_24857);
} else {
if((state_val_24860 === (12))){
var inst_24834 = (state_24859[(10)]);
var state_24859__$1 = state_24859;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24859__$1,(14),inst_24834);
} else {
if((state_val_24860 === (2))){
var state_24859__$1 = state_24859;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24859__$1,(4),results);
} else {
if((state_val_24860 === (19))){
var state_24859__$1 = state_24859;
var statearr_24872_24938 = state_24859__$1;
(statearr_24872_24938[(2)] = null);

(statearr_24872_24938[(1)] = (12));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24860 === (11))){
var inst_24834 = (state_24859[(2)]);
var state_24859__$1 = (function (){var statearr_24873 = state_24859;
(statearr_24873[(10)] = inst_24834);

return statearr_24873;
})();
var statearr_24874_24939 = state_24859__$1;
(statearr_24874_24939[(2)] = null);

(statearr_24874_24939[(1)] = (12));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24860 === (9))){
var state_24859__$1 = state_24859;
var statearr_24875_24940 = state_24859__$1;
(statearr_24875_24940[(2)] = null);

(statearr_24875_24940[(1)] = (10));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24860 === (5))){
var state_24859__$1 = state_24859;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24876_24941 = state_24859__$1;
(statearr_24876_24941[(1)] = (8));

} else {
var statearr_24877_24942 = state_24859__$1;
(statearr_24877_24942[(1)] = (9));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_24860 === (14))){
var inst_24839 = (state_24859[(11)]);
var inst_24837 = (state_24859[(8)]);
var inst_24837__$1 = (state_24859[(2)]);
var inst_24838 = (inst_24837__$1 == null);
var inst_24839__$1 = cljs.core.not(inst_24838);
var state_24859__$1 = (function (){var statearr_24878 = state_24859;
(statearr_24878[(11)] = inst_24839__$1);

(statearr_24878[(8)] = inst_24837__$1);

return statearr_24878;
})();
if(inst_24839__$1){
var statearr_24879_24943 = state_24859__$1;
(statearr_24879_24943[(1)] = (15));

} else {
var statearr_24880_24944 = state_24859__$1;
(statearr_24880_24944[(1)] = (16));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_24860 === (16))){
var inst_24839 = (state_24859[(11)]);
var state_24859__$1 = state_24859;
var statearr_24881_24945 = state_24859__$1;
(statearr_24881_24945[(2)] = inst_24839);

(statearr_24881_24945[(1)] = (17));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24860 === (10))){
var inst_24831 = (state_24859[(2)]);
var state_24859__$1 = state_24859;
var statearr_24882_24946 = state_24859__$1;
(statearr_24882_24946[(2)] = inst_24831);

(statearr_24882_24946[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24860 === (18))){
var inst_24842 = (state_24859[(2)]);
var state_24859__$1 = state_24859;
var statearr_24883_24947 = state_24859__$1;
(statearr_24883_24947[(2)] = inst_24842);

(statearr_24883_24947[(1)] = (17));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24860 === (8))){
var inst_24828 = cljs.core.async.close_BANG_(to);
var state_24859__$1 = state_24859;
var statearr_24884_24948 = state_24859__$1;
(statearr_24884_24948[(2)] = inst_24828);

(statearr_24884_24948[(1)] = (10));


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
});})(c__11733__auto__,jobs,results,process,async))
;
return ((function (switch__11653__auto__,c__11733__auto__,jobs,results,process,async){
return (function() {
var state_machine__11654__auto__ = null;
var state_machine__11654__auto____0 = (function (){
var statearr_24888 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24888[(0)] = state_machine__11654__auto__);

(statearr_24888[(1)] = (1));

return statearr_24888;
});
var state_machine__11654__auto____1 = (function (state_24859){
while(true){
var ret_value__11655__auto__ = (function (){try{while(true){
var result__11656__auto__ = switch__11653__auto__(state_24859);
if(cljs.core.keyword_identical_QMARK_(result__11656__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11656__auto__;
}
break;
}
}catch (e24889){if((e24889 instanceof Object)){
var ex__11657__auto__ = e24889;
var statearr_24890_24949 = state_24859;
(statearr_24890_24949[(5)] = ex__11657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24859);

return cljs.core.constant$keyword$65;
} else {
throw e24889;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11655__auto__,cljs.core.constant$keyword$65)){
var G__24950 = state_24859;
state_24859 = G__24950;
continue;
} else {
return ret_value__11655__auto__;
}
break;
}
});
state_machine__11654__auto__ = function(state_24859){
switch(arguments.length){
case 0:
return state_machine__11654__auto____0.call(this);
case 1:
return state_machine__11654__auto____1.call(this,state_24859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11654__auto____0;
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11654__auto____1;
return state_machine__11654__auto__;
})()
;})(switch__11653__auto__,c__11733__auto__,jobs,results,process,async))
})();
var state__11735__auto__ = (function (){var statearr_24891 = (function (){return (f__11734__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11734__auto__.cljs$core$IFn$_invoke$arity$0() : f__11734__auto__.call(null));
})();
(statearr_24891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11733__auto__);

return statearr_24891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11735__auto__);
});})(c__11733__auto__,jobs,results,process,async))
);

return c__11733__auto__;
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
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.constant$keyword$72);
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
var pipeline__4 = (function (n,to,xf,from){
return pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.constant$keyword$73);
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
var split__2 = (function (p,ch){
return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__11733__auto___25073 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11733__auto___25073,tc,fc){
return (function (){
var f__11734__auto__ = (function (){var switch__11653__auto__ = ((function (c__11733__auto___25073,tc,fc){
return (function (state_25047){
var state_val_25048 = (state_25047[(1)]);
if((state_val_25048 === (7))){
var inst_25043 = (state_25047[(2)]);
var state_25047__$1 = state_25047;
var statearr_25049_25074 = state_25047__$1;
(statearr_25049_25074[(2)] = inst_25043);

(statearr_25049_25074[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25048 === (1))){
var state_25047__$1 = state_25047;
var statearr_25050_25075 = state_25047__$1;
(statearr_25050_25075[(2)] = null);

(statearr_25050_25075[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25048 === (4))){
var inst_25024 = (state_25047[(7)]);
var inst_25024__$1 = (state_25047[(2)]);
var inst_25025 = (inst_25024__$1 == null);
var state_25047__$1 = (function (){var statearr_25051 = state_25047;
(statearr_25051[(7)] = inst_25024__$1);

return statearr_25051;
})();
if(cljs.core.truth_(inst_25025)){
var statearr_25052_25076 = state_25047__$1;
(statearr_25052_25076[(1)] = (5));

} else {
var statearr_25053_25077 = state_25047__$1;
(statearr_25053_25077[(1)] = (6));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_25048 === (13))){
var state_25047__$1 = state_25047;
var statearr_25054_25078 = state_25047__$1;
(statearr_25054_25078[(2)] = null);

(statearr_25054_25078[(1)] = (14));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25048 === (6))){
var inst_25024 = (state_25047[(7)]);
var inst_25030 = (function (){var G__25055 = inst_25024;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__25055) : p.call(null,G__25055));
})();
var state_25047__$1 = state_25047;
if(cljs.core.truth_(inst_25030)){
var statearr_25056_25079 = state_25047__$1;
(statearr_25056_25079[(1)] = (9));

} else {
var statearr_25057_25080 = state_25047__$1;
(statearr_25057_25080[(1)] = (10));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_25048 === (3))){
var inst_25045 = (state_25047[(2)]);
var state_25047__$1 = state_25047;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25047__$1,inst_25045);
} else {
if((state_val_25048 === (12))){
var state_25047__$1 = state_25047;
var statearr_25058_25081 = state_25047__$1;
(statearr_25058_25081[(2)] = null);

(statearr_25058_25081[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25048 === (2))){
var state_25047__$1 = state_25047;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25047__$1,(4),ch);
} else {
if((state_val_25048 === (11))){
var inst_25024 = (state_25047[(7)]);
var inst_25034 = (state_25047[(2)]);
var state_25047__$1 = state_25047;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25047__$1,(8),inst_25034,inst_25024);
} else {
if((state_val_25048 === (9))){
var state_25047__$1 = state_25047;
var statearr_25059_25082 = state_25047__$1;
(statearr_25059_25082[(2)] = tc);

(statearr_25059_25082[(1)] = (11));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25048 === (5))){
var inst_25027 = cljs.core.async.close_BANG_(tc);
var inst_25028 = cljs.core.async.close_BANG_(fc);
var state_25047__$1 = (function (){var statearr_25060 = state_25047;
(statearr_25060[(8)] = inst_25027);

return statearr_25060;
})();
var statearr_25061_25083 = state_25047__$1;
(statearr_25061_25083[(2)] = inst_25028);

(statearr_25061_25083[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25048 === (14))){
var inst_25041 = (state_25047[(2)]);
var state_25047__$1 = state_25047;
var statearr_25062_25084 = state_25047__$1;
(statearr_25062_25084[(2)] = inst_25041);

(statearr_25062_25084[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25048 === (10))){
var state_25047__$1 = state_25047;
var statearr_25063_25085 = state_25047__$1;
(statearr_25063_25085[(2)] = fc);

(statearr_25063_25085[(1)] = (11));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25048 === (8))){
var inst_25036 = (state_25047[(2)]);
var state_25047__$1 = state_25047;
if(cljs.core.truth_(inst_25036)){
var statearr_25064_25086 = state_25047__$1;
(statearr_25064_25086[(1)] = (12));

} else {
var statearr_25065_25087 = state_25047__$1;
(statearr_25065_25087[(1)] = (13));

}

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
}
}
}
}
}
}
}
});})(c__11733__auto___25073,tc,fc))
;
return ((function (switch__11653__auto__,c__11733__auto___25073,tc,fc){
return (function() {
var state_machine__11654__auto__ = null;
var state_machine__11654__auto____0 = (function (){
var statearr_25069 = [null,null,null,null,null,null,null,null,null];
(statearr_25069[(0)] = state_machine__11654__auto__);

(statearr_25069[(1)] = (1));

return statearr_25069;
});
var state_machine__11654__auto____1 = (function (state_25047){
while(true){
var ret_value__11655__auto__ = (function (){try{while(true){
var result__11656__auto__ = switch__11653__auto__(state_25047);
if(cljs.core.keyword_identical_QMARK_(result__11656__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11656__auto__;
}
break;
}
}catch (e25070){if((e25070 instanceof Object)){
var ex__11657__auto__ = e25070;
var statearr_25071_25088 = state_25047;
(statearr_25071_25088[(5)] = ex__11657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25047);

return cljs.core.constant$keyword$65;
} else {
throw e25070;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11655__auto__,cljs.core.constant$keyword$65)){
var G__25089 = state_25047;
state_25047 = G__25089;
continue;
} else {
return ret_value__11655__auto__;
}
break;
}
});
state_machine__11654__auto__ = function(state_25047){
switch(arguments.length){
case 0:
return state_machine__11654__auto____0.call(this);
case 1:
return state_machine__11654__auto____1.call(this,state_25047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11654__auto____0;
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11654__auto____1;
return state_machine__11654__auto__;
})()
;})(switch__11653__auto__,c__11733__auto___25073,tc,fc))
})();
var state__11735__auto__ = (function (){var statearr_25072 = (function (){return (f__11734__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11734__auto__.cljs$core$IFn$_invoke$arity$0() : f__11734__auto__.call(null));
})();
(statearr_25072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11733__auto___25073);

return statearr_25072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11735__auto__);
});})(c__11733__auto___25073,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__11733__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11733__auto__){
return (function (){
var f__11734__auto__ = (function (){var switch__11653__auto__ = ((function (c__11733__auto__){
return (function (state_25138){
var state_val_25139 = (state_25138[(1)]);
if((state_val_25139 === (7))){
var inst_25134 = (state_25138[(2)]);
var state_25138__$1 = state_25138;
var statearr_25140_25158 = state_25138__$1;
(statearr_25140_25158[(2)] = inst_25134);

(statearr_25140_25158[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25139 === (6))){
var inst_25127 = (state_25138[(7)]);
var inst_25124 = (state_25138[(8)]);
var inst_25131 = (function (){var G__25141 = inst_25124;
var G__25142 = inst_25127;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25141,G__25142) : f.call(null,G__25141,G__25142));
})();
var inst_25124__$1 = inst_25131;
var state_25138__$1 = (function (){var statearr_25143 = state_25138;
(statearr_25143[(8)] = inst_25124__$1);

return statearr_25143;
})();
var statearr_25144_25159 = state_25138__$1;
(statearr_25144_25159[(2)] = null);

(statearr_25144_25159[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25139 === (5))){
var inst_25124 = (state_25138[(8)]);
var state_25138__$1 = state_25138;
var statearr_25145_25160 = state_25138__$1;
(statearr_25145_25160[(2)] = inst_25124);

(statearr_25145_25160[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25139 === (4))){
var inst_25127 = (state_25138[(7)]);
var inst_25127__$1 = (state_25138[(2)]);
var inst_25128 = (inst_25127__$1 == null);
var state_25138__$1 = (function (){var statearr_25146 = state_25138;
(statearr_25146[(7)] = inst_25127__$1);

return statearr_25146;
})();
if(cljs.core.truth_(inst_25128)){
var statearr_25147_25161 = state_25138__$1;
(statearr_25147_25161[(1)] = (5));

} else {
var statearr_25148_25162 = state_25138__$1;
(statearr_25148_25162[(1)] = (6));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_25139 === (3))){
var inst_25136 = (state_25138[(2)]);
var state_25138__$1 = state_25138;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25138__$1,inst_25136);
} else {
if((state_val_25139 === (2))){
var state_25138__$1 = state_25138;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25138__$1,(4),ch);
} else {
if((state_val_25139 === (1))){
var inst_25124 = init;
var state_25138__$1 = (function (){var statearr_25149 = state_25138;
(statearr_25149[(8)] = inst_25124);

return statearr_25149;
})();
var statearr_25150_25163 = state_25138__$1;
(statearr_25150_25163[(2)] = null);

(statearr_25150_25163[(1)] = (2));


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
var statearr_25154 = [null,null,null,null,null,null,null,null,null];
(statearr_25154[(0)] = state_machine__11654__auto__);

(statearr_25154[(1)] = (1));

return statearr_25154;
});
var state_machine__11654__auto____1 = (function (state_25138){
while(true){
var ret_value__11655__auto__ = (function (){try{while(true){
var result__11656__auto__ = switch__11653__auto__(state_25138);
if(cljs.core.keyword_identical_QMARK_(result__11656__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11656__auto__;
}
break;
}
}catch (e25155){if((e25155 instanceof Object)){
var ex__11657__auto__ = e25155;
var statearr_25156_25164 = state_25138;
(statearr_25156_25164[(5)] = ex__11657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25138);

return cljs.core.constant$keyword$65;
} else {
throw e25155;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11655__auto__,cljs.core.constant$keyword$65)){
var G__25165 = state_25138;
state_25138 = G__25165;
continue;
} else {
return ret_value__11655__auto__;
}
break;
}
});
state_machine__11654__auto__ = function(state_25138){
switch(arguments.length){
case 0:
return state_machine__11654__auto____0.call(this);
case 1:
return state_machine__11654__auto____1.call(this,state_25138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11654__auto____0;
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11654__auto____1;
return state_machine__11654__auto__;
})()
;})(switch__11653__auto__,c__11733__auto__))
})();
var state__11735__auto__ = (function (){var statearr_25157 = (function (){return (f__11734__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11734__auto__.cljs$core$IFn$_invoke$arity$0() : f__11734__auto__.call(null));
})();
(statearr_25157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11733__auto__);

return statearr_25157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11735__auto__);
});})(c__11733__auto__))
);

return c__11733__auto__;
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
var onto_chan__2 = (function (ch,coll){
return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__11733__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11733__auto__){
return (function (){
var f__11734__auto__ = (function (){var switch__11653__auto__ = ((function (c__11733__auto__){
return (function (state_25242){
var state_val_25243 = (state_25242[(1)]);
if((state_val_25243 === (7))){
var inst_25224 = (state_25242[(2)]);
var state_25242__$1 = state_25242;
var statearr_25244_25267 = state_25242__$1;
(statearr_25244_25267[(2)] = inst_25224);

(statearr_25244_25267[(1)] = (6));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25243 === (1))){
var inst_25218 = cljs.core.seq(coll);
var inst_25219 = inst_25218;
var state_25242__$1 = (function (){var statearr_25245 = state_25242;
(statearr_25245[(7)] = inst_25219);

return statearr_25245;
})();
var statearr_25246_25268 = state_25242__$1;
(statearr_25246_25268[(2)] = null);

(statearr_25246_25268[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25243 === (4))){
var inst_25219 = (state_25242[(7)]);
var inst_25222 = cljs.core.first(inst_25219);
var state_25242__$1 = state_25242;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25242__$1,(7),ch,inst_25222);
} else {
if((state_val_25243 === (13))){
var inst_25236 = (state_25242[(2)]);
var state_25242__$1 = state_25242;
var statearr_25247_25269 = state_25242__$1;
(statearr_25247_25269[(2)] = inst_25236);

(statearr_25247_25269[(1)] = (10));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25243 === (6))){
var inst_25227 = (state_25242[(2)]);
var state_25242__$1 = state_25242;
if(cljs.core.truth_(inst_25227)){
var statearr_25248_25270 = state_25242__$1;
(statearr_25248_25270[(1)] = (8));

} else {
var statearr_25249_25271 = state_25242__$1;
(statearr_25249_25271[(1)] = (9));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_25243 === (3))){
var inst_25240 = (state_25242[(2)]);
var state_25242__$1 = state_25242;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25242__$1,inst_25240);
} else {
if((state_val_25243 === (12))){
var state_25242__$1 = state_25242;
var statearr_25250_25272 = state_25242__$1;
(statearr_25250_25272[(2)] = null);

(statearr_25250_25272[(1)] = (13));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25243 === (2))){
var inst_25219 = (state_25242[(7)]);
var state_25242__$1 = state_25242;
if(cljs.core.truth_(inst_25219)){
var statearr_25251_25273 = state_25242__$1;
(statearr_25251_25273[(1)] = (4));

} else {
var statearr_25252_25274 = state_25242__$1;
(statearr_25252_25274[(1)] = (5));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_25243 === (11))){
var inst_25233 = cljs.core.async.close_BANG_(ch);
var state_25242__$1 = state_25242;
var statearr_25253_25275 = state_25242__$1;
(statearr_25253_25275[(2)] = inst_25233);

(statearr_25253_25275[(1)] = (13));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25243 === (9))){
var state_25242__$1 = state_25242;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25254_25276 = state_25242__$1;
(statearr_25254_25276[(1)] = (11));

} else {
var statearr_25255_25277 = state_25242__$1;
(statearr_25255_25277[(1)] = (12));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_25243 === (5))){
var inst_25219 = (state_25242[(7)]);
var state_25242__$1 = state_25242;
var statearr_25256_25278 = state_25242__$1;
(statearr_25256_25278[(2)] = inst_25219);

(statearr_25256_25278[(1)] = (6));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25243 === (10))){
var inst_25238 = (state_25242[(2)]);
var state_25242__$1 = state_25242;
var statearr_25257_25279 = state_25242__$1;
(statearr_25257_25279[(2)] = inst_25238);

(statearr_25257_25279[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25243 === (8))){
var inst_25219 = (state_25242[(7)]);
var inst_25229 = cljs.core.next(inst_25219);
var inst_25219__$1 = inst_25229;
var state_25242__$1 = (function (){var statearr_25258 = state_25242;
(statearr_25258[(7)] = inst_25219__$1);

return statearr_25258;
})();
var statearr_25259_25280 = state_25242__$1;
(statearr_25259_25280[(2)] = null);

(statearr_25259_25280[(1)] = (2));


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
var statearr_25263 = [null,null,null,null,null,null,null,null];
(statearr_25263[(0)] = state_machine__11654__auto__);

(statearr_25263[(1)] = (1));

return statearr_25263;
});
var state_machine__11654__auto____1 = (function (state_25242){
while(true){
var ret_value__11655__auto__ = (function (){try{while(true){
var result__11656__auto__ = switch__11653__auto__(state_25242);
if(cljs.core.keyword_identical_QMARK_(result__11656__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11656__auto__;
}
break;
}
}catch (e25264){if((e25264 instanceof Object)){
var ex__11657__auto__ = e25264;
var statearr_25265_25281 = state_25242;
(statearr_25265_25281[(5)] = ex__11657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25242);

return cljs.core.constant$keyword$65;
} else {
throw e25264;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11655__auto__,cljs.core.constant$keyword$65)){
var G__25282 = state_25242;
state_25242 = G__25282;
continue;
} else {
return ret_value__11655__auto__;
}
break;
}
});
state_machine__11654__auto__ = function(state_25242){
switch(arguments.length){
case 0:
return state_machine__11654__auto____0.call(this);
case 1:
return state_machine__11654__auto____1.call(this,state_25242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11654__auto____0;
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11654__auto____1;
return state_machine__11654__auto__;
})()
;})(switch__11653__auto__,c__11733__auto__))
})();
var state__11735__auto__ = (function (){var statearr_25266 = (function (){return (f__11734__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11734__auto__.cljs$core$IFn$_invoke$arity$0() : f__11734__auto__.call(null));
})();
(statearr_25266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11733__auto__);

return statearr_25266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11735__auto__);
});})(c__11733__auto__))
);

return c__11733__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj25284 = {};
return obj25284;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3738__auto__ = _;
if(and__3738__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3738__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4394__auto__ = (((_ == null))?null:_);
return (function (){var or__3750__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__25288 = x__4394__auto__;
return goog.typeOf(G__25288);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj25290 = {};
return obj25290;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3738__auto__ = m;
if(and__3738__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3738__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4394__auto__ = (((m == null))?null:m);
return (function (){var or__3750__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__25294 = x__4394__auto__;
return goog.typeOf(G__25294);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3738__auto__ = m;
if(and__3738__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3738__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4394__auto__ = (((m == null))?null:m);
return (function (){var or__3750__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__25298 = x__4394__auto__;
return goog.typeOf(G__25298);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3738__auto__ = m;
if(and__3738__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3738__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4394__auto__ = (((m == null))?null:m);
return (function (){var or__3750__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__25302 = x__4394__auto__;
return goog.typeOf(G__25302);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
cljs.core.async.mult = (function mult(ch){
var cs = (function (){var G__25532 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25532) : cljs.core.atom.call(null,G__25532));
})();
var m = (function (){
if(typeof cljs.core.async.t25533 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25533 = (function (cs,ch,mult,meta25534){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25534 = meta25534;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25533.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t25533.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t25533.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t25533.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25536_25761 = self__.cs;
var G__25537_25762 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25536_25761,G__25537_25762) : cljs.core.reset_BANG_.call(null,G__25536_25761,G__25537_25762));

return null;
});})(cs))
;

cljs.core.async.t25533.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25533.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t25533.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25535){
var self__ = this;
var _25535__$1 = this;
return self__.meta25534;
});})(cs))
;

cljs.core.async.t25533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25535,meta25534__$1){
var self__ = this;
var _25535__$1 = this;
return (new cljs.core.async.t25533(self__.cs,self__.ch,self__.mult,meta25534__$1));
});})(cs))
;

cljs.core.async.t25533.cljs$lang$type = true;

cljs.core.async.t25533.cljs$lang$ctorStr = "cljs.core.async/t25533";

cljs.core.async.t25533.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4337__auto__,writer__4338__auto__,opt__4339__auto__){
return cljs.core._write(writer__4338__auto__,"cljs.core.async/t25533");
});})(cs))
;

cljs.core.async.__GT_t25533 = ((function (cs){
return (function __GT_t25533(cs__$1,ch__$1,mult__$1,meta25534){
return (new cljs.core.async.t25533(cs__$1,ch__$1,mult__$1,meta25534));
});})(cs))
;

}

return (new cljs.core.async.t25533(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,397,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,390,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__25538 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25538) : cljs.core.atom.call(null,G__25538));
})();
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__11733__auto___25763 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11733__auto___25763,cs,m,dchan,dctr,done){
return (function (){
var f__11734__auto__ = (function (){var switch__11653__auto__ = ((function (c__11733__auto___25763,cs,m,dchan,dctr,done){
return (function (state_25669){
var state_val_25670 = (state_25669[(1)]);
if((state_val_25670 === (7))){
var inst_25665 = (state_25669[(2)]);
var state_25669__$1 = state_25669;
var statearr_25671_25764 = state_25669__$1;
(statearr_25671_25764[(2)] = inst_25665);

(statearr_25671_25764[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (20))){
var inst_25570 = (state_25669[(7)]);
var inst_25580 = cljs.core.first(inst_25570);
var inst_25581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25580,(0),null);
var inst_25582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25580,(1),null);
var state_25669__$1 = (function (){var statearr_25672 = state_25669;
(statearr_25672[(8)] = inst_25581);

return statearr_25672;
})();
if(cljs.core.truth_(inst_25582)){
var statearr_25673_25765 = state_25669__$1;
(statearr_25673_25765[(1)] = (22));

} else {
var statearr_25674_25766 = state_25669__$1;
(statearr_25674_25766[(1)] = (23));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (27))){
var inst_25612 = (state_25669[(9)]);
var inst_25541 = (state_25669[(10)]);
var inst_25610 = (state_25669[(11)]);
var inst_25617 = (state_25669[(12)]);
var inst_25617__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25610,inst_25612);
var inst_25618 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25617__$1,inst_25541,done);
var state_25669__$1 = (function (){var statearr_25675 = state_25669;
(statearr_25675[(12)] = inst_25617__$1);

return statearr_25675;
})();
if(cljs.core.truth_(inst_25618)){
var statearr_25676_25767 = state_25669__$1;
(statearr_25676_25767[(1)] = (30));

} else {
var statearr_25677_25768 = state_25669__$1;
(statearr_25677_25768[(1)] = (31));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (1))){
var state_25669__$1 = state_25669;
var statearr_25678_25769 = state_25669__$1;
(statearr_25678_25769[(2)] = null);

(statearr_25678_25769[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (24))){
var inst_25570 = (state_25669[(7)]);
var inst_25587 = (state_25669[(2)]);
var inst_25588 = cljs.core.next(inst_25570);
var inst_25550 = inst_25588;
var inst_25551 = null;
var inst_25552 = (0);
var inst_25553 = (0);
var state_25669__$1 = (function (){var statearr_25679 = state_25669;
(statearr_25679[(13)] = inst_25550);

(statearr_25679[(14)] = inst_25587);

(statearr_25679[(15)] = inst_25551);

(statearr_25679[(16)] = inst_25553);

(statearr_25679[(17)] = inst_25552);

return statearr_25679;
})();
var statearr_25680_25770 = state_25669__$1;
(statearr_25680_25770[(2)] = null);

(statearr_25680_25770[(1)] = (8));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (39))){
var state_25669__$1 = state_25669;
var statearr_25684_25771 = state_25669__$1;
(statearr_25684_25771[(2)] = null);

(statearr_25684_25771[(1)] = (41));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (4))){
var inst_25541 = (state_25669[(10)]);
var inst_25541__$1 = (state_25669[(2)]);
var inst_25542 = (inst_25541__$1 == null);
var state_25669__$1 = (function (){var statearr_25685 = state_25669;
(statearr_25685[(10)] = inst_25541__$1);

return statearr_25685;
})();
if(cljs.core.truth_(inst_25542)){
var statearr_25686_25772 = state_25669__$1;
(statearr_25686_25772[(1)] = (5));

} else {
var statearr_25687_25773 = state_25669__$1;
(statearr_25687_25773[(1)] = (6));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (15))){
var inst_25550 = (state_25669[(13)]);
var inst_25551 = (state_25669[(15)]);
var inst_25553 = (state_25669[(16)]);
var inst_25552 = (state_25669[(17)]);
var inst_25566 = (state_25669[(2)]);
var inst_25567 = (inst_25553 + (1));
var tmp25681 = inst_25550;
var tmp25682 = inst_25551;
var tmp25683 = inst_25552;
var inst_25550__$1 = tmp25681;
var inst_25551__$1 = tmp25682;
var inst_25552__$1 = tmp25683;
var inst_25553__$1 = inst_25567;
var state_25669__$1 = (function (){var statearr_25688 = state_25669;
(statearr_25688[(13)] = inst_25550__$1);

(statearr_25688[(15)] = inst_25551__$1);

(statearr_25688[(16)] = inst_25553__$1);

(statearr_25688[(18)] = inst_25566);

(statearr_25688[(17)] = inst_25552__$1);

return statearr_25688;
})();
var statearr_25689_25774 = state_25669__$1;
(statearr_25689_25774[(2)] = null);

(statearr_25689_25774[(1)] = (8));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (21))){
var inst_25591 = (state_25669[(2)]);
var state_25669__$1 = state_25669;
var statearr_25693_25775 = state_25669__$1;
(statearr_25693_25775[(2)] = inst_25591);

(statearr_25693_25775[(1)] = (18));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (31))){
var inst_25617 = (state_25669[(12)]);
var inst_25621 = done(null);
var inst_25622 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25617);
var state_25669__$1 = (function (){var statearr_25694 = state_25669;
(statearr_25694[(19)] = inst_25621);

return statearr_25694;
})();
var statearr_25695_25776 = state_25669__$1;
(statearr_25695_25776[(2)] = inst_25622);

(statearr_25695_25776[(1)] = (32));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (32))){
var inst_25609 = (state_25669[(20)]);
var inst_25612 = (state_25669[(9)]);
var inst_25611 = (state_25669[(21)]);
var inst_25610 = (state_25669[(11)]);
var inst_25624 = (state_25669[(2)]);
var inst_25625 = (inst_25612 + (1));
var tmp25690 = inst_25609;
var tmp25691 = inst_25611;
var tmp25692 = inst_25610;
var inst_25609__$1 = tmp25690;
var inst_25610__$1 = tmp25692;
var inst_25611__$1 = tmp25691;
var inst_25612__$1 = inst_25625;
var state_25669__$1 = (function (){var statearr_25696 = state_25669;
(statearr_25696[(20)] = inst_25609__$1);

(statearr_25696[(9)] = inst_25612__$1);

(statearr_25696[(22)] = inst_25624);

(statearr_25696[(21)] = inst_25611__$1);

(statearr_25696[(11)] = inst_25610__$1);

return statearr_25696;
})();
var statearr_25697_25777 = state_25669__$1;
(statearr_25697_25777[(2)] = null);

(statearr_25697_25777[(1)] = (25));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (40))){
var inst_25637 = (state_25669[(23)]);
var inst_25641 = done(null);
var inst_25642 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25637);
var state_25669__$1 = (function (){var statearr_25698 = state_25669;
(statearr_25698[(24)] = inst_25641);

return statearr_25698;
})();
var statearr_25699_25778 = state_25669__$1;
(statearr_25699_25778[(2)] = inst_25642);

(statearr_25699_25778[(1)] = (41));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (33))){
var inst_25628 = (state_25669[(25)]);
var inst_25630 = cljs.core.chunked_seq_QMARK_(inst_25628);
var state_25669__$1 = state_25669;
if(inst_25630){
var statearr_25700_25779 = state_25669__$1;
(statearr_25700_25779[(1)] = (36));

} else {
var statearr_25701_25780 = state_25669__$1;
(statearr_25701_25780[(1)] = (37));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (13))){
var inst_25560 = (state_25669[(26)]);
var inst_25563 = cljs.core.async.close_BANG_(inst_25560);
var state_25669__$1 = state_25669;
var statearr_25702_25781 = state_25669__$1;
(statearr_25702_25781[(2)] = inst_25563);

(statearr_25702_25781[(1)] = (15));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (22))){
var inst_25581 = (state_25669[(8)]);
var inst_25584 = cljs.core.async.close_BANG_(inst_25581);
var state_25669__$1 = state_25669;
var statearr_25703_25782 = state_25669__$1;
(statearr_25703_25782[(2)] = inst_25584);

(statearr_25703_25782[(1)] = (24));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (36))){
var inst_25628 = (state_25669[(25)]);
var inst_25632 = cljs.core.chunk_first(inst_25628);
var inst_25633 = cljs.core.chunk_rest(inst_25628);
var inst_25634 = cljs.core.count(inst_25632);
var inst_25609 = inst_25633;
var inst_25610 = inst_25632;
var inst_25611 = inst_25634;
var inst_25612 = (0);
var state_25669__$1 = (function (){var statearr_25704 = state_25669;
(statearr_25704[(20)] = inst_25609);

(statearr_25704[(9)] = inst_25612);

(statearr_25704[(21)] = inst_25611);

(statearr_25704[(11)] = inst_25610);

return statearr_25704;
})();
var statearr_25705_25783 = state_25669__$1;
(statearr_25705_25783[(2)] = null);

(statearr_25705_25783[(1)] = (25));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (41))){
var inst_25628 = (state_25669[(25)]);
var inst_25644 = (state_25669[(2)]);
var inst_25645 = cljs.core.next(inst_25628);
var inst_25609 = inst_25645;
var inst_25610 = null;
var inst_25611 = (0);
var inst_25612 = (0);
var state_25669__$1 = (function (){var statearr_25706 = state_25669;
(statearr_25706[(20)] = inst_25609);

(statearr_25706[(9)] = inst_25612);

(statearr_25706[(27)] = inst_25644);

(statearr_25706[(21)] = inst_25611);

(statearr_25706[(11)] = inst_25610);

return statearr_25706;
})();
var statearr_25707_25784 = state_25669__$1;
(statearr_25707_25784[(2)] = null);

(statearr_25707_25784[(1)] = (25));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (43))){
var state_25669__$1 = state_25669;
var statearr_25708_25785 = state_25669__$1;
(statearr_25708_25785[(2)] = null);

(statearr_25708_25785[(1)] = (44));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (29))){
var inst_25653 = (state_25669[(2)]);
var state_25669__$1 = state_25669;
var statearr_25709_25786 = state_25669__$1;
(statearr_25709_25786[(2)] = inst_25653);

(statearr_25709_25786[(1)] = (26));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (44))){
var inst_25662 = (state_25669[(2)]);
var state_25669__$1 = (function (){var statearr_25710 = state_25669;
(statearr_25710[(28)] = inst_25662);

return statearr_25710;
})();
var statearr_25711_25787 = state_25669__$1;
(statearr_25711_25787[(2)] = null);

(statearr_25711_25787[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (6))){
var inst_25601 = (state_25669[(29)]);
var inst_25600 = (function (){var G__25712 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25712) : cljs.core.deref.call(null,G__25712));
})();
var inst_25601__$1 = cljs.core.keys(inst_25600);
var inst_25602 = cljs.core.count(inst_25601__$1);
var inst_25603 = (function (){var G__25713 = dctr;
var G__25714 = inst_25602;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25713,G__25714) : cljs.core.reset_BANG_.call(null,G__25713,G__25714));
})();
var inst_25608 = cljs.core.seq(inst_25601__$1);
var inst_25609 = inst_25608;
var inst_25610 = null;
var inst_25611 = (0);
var inst_25612 = (0);
var state_25669__$1 = (function (){var statearr_25715 = state_25669;
(statearr_25715[(30)] = inst_25603);

(statearr_25715[(20)] = inst_25609);

(statearr_25715[(9)] = inst_25612);

(statearr_25715[(29)] = inst_25601__$1);

(statearr_25715[(21)] = inst_25611);

(statearr_25715[(11)] = inst_25610);

return statearr_25715;
})();
var statearr_25716_25788 = state_25669__$1;
(statearr_25716_25788[(2)] = null);

(statearr_25716_25788[(1)] = (25));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (28))){
var inst_25609 = (state_25669[(20)]);
var inst_25628 = (state_25669[(25)]);
var inst_25628__$1 = cljs.core.seq(inst_25609);
var state_25669__$1 = (function (){var statearr_25717 = state_25669;
(statearr_25717[(25)] = inst_25628__$1);

return statearr_25717;
})();
if(inst_25628__$1){
var statearr_25718_25789 = state_25669__$1;
(statearr_25718_25789[(1)] = (33));

} else {
var statearr_25719_25790 = state_25669__$1;
(statearr_25719_25790[(1)] = (34));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (25))){
var inst_25612 = (state_25669[(9)]);
var inst_25611 = (state_25669[(21)]);
var inst_25614 = (inst_25612 < inst_25611);
var inst_25615 = inst_25614;
var state_25669__$1 = state_25669;
if(cljs.core.truth_(inst_25615)){
var statearr_25720_25791 = state_25669__$1;
(statearr_25720_25791[(1)] = (27));

} else {
var statearr_25721_25792 = state_25669__$1;
(statearr_25721_25792[(1)] = (28));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (34))){
var state_25669__$1 = state_25669;
var statearr_25722_25793 = state_25669__$1;
(statearr_25722_25793[(2)] = null);

(statearr_25722_25793[(1)] = (35));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (17))){
var state_25669__$1 = state_25669;
var statearr_25723_25794 = state_25669__$1;
(statearr_25723_25794[(2)] = null);

(statearr_25723_25794[(1)] = (18));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (3))){
var inst_25667 = (state_25669[(2)]);
var state_25669__$1 = state_25669;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25669__$1,inst_25667);
} else {
if((state_val_25670 === (12))){
var inst_25596 = (state_25669[(2)]);
var state_25669__$1 = state_25669;
var statearr_25724_25795 = state_25669__$1;
(statearr_25724_25795[(2)] = inst_25596);

(statearr_25724_25795[(1)] = (9));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (2))){
var state_25669__$1 = state_25669;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25669__$1,(4),ch);
} else {
if((state_val_25670 === (23))){
var state_25669__$1 = state_25669;
var statearr_25725_25796 = state_25669__$1;
(statearr_25725_25796[(2)] = null);

(statearr_25725_25796[(1)] = (24));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (35))){
var inst_25651 = (state_25669[(2)]);
var state_25669__$1 = state_25669;
var statearr_25726_25797 = state_25669__$1;
(statearr_25726_25797[(2)] = inst_25651);

(statearr_25726_25797[(1)] = (29));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (19))){
var inst_25570 = (state_25669[(7)]);
var inst_25574 = cljs.core.chunk_first(inst_25570);
var inst_25575 = cljs.core.chunk_rest(inst_25570);
var inst_25576 = cljs.core.count(inst_25574);
var inst_25550 = inst_25575;
var inst_25551 = inst_25574;
var inst_25552 = inst_25576;
var inst_25553 = (0);
var state_25669__$1 = (function (){var statearr_25727 = state_25669;
(statearr_25727[(13)] = inst_25550);

(statearr_25727[(15)] = inst_25551);

(statearr_25727[(16)] = inst_25553);

(statearr_25727[(17)] = inst_25552);

return statearr_25727;
})();
var statearr_25728_25798 = state_25669__$1;
(statearr_25728_25798[(2)] = null);

(statearr_25728_25798[(1)] = (8));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (11))){
var inst_25550 = (state_25669[(13)]);
var inst_25570 = (state_25669[(7)]);
var inst_25570__$1 = cljs.core.seq(inst_25550);
var state_25669__$1 = (function (){var statearr_25729 = state_25669;
(statearr_25729[(7)] = inst_25570__$1);

return statearr_25729;
})();
if(inst_25570__$1){
var statearr_25730_25799 = state_25669__$1;
(statearr_25730_25799[(1)] = (16));

} else {
var statearr_25731_25800 = state_25669__$1;
(statearr_25731_25800[(1)] = (17));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (9))){
var inst_25598 = (state_25669[(2)]);
var state_25669__$1 = state_25669;
var statearr_25732_25801 = state_25669__$1;
(statearr_25732_25801[(2)] = inst_25598);

(statearr_25732_25801[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (5))){
var inst_25548 = (function (){var G__25733 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25733) : cljs.core.deref.call(null,G__25733));
})();
var inst_25549 = cljs.core.seq(inst_25548);
var inst_25550 = inst_25549;
var inst_25551 = null;
var inst_25552 = (0);
var inst_25553 = (0);
var state_25669__$1 = (function (){var statearr_25734 = state_25669;
(statearr_25734[(13)] = inst_25550);

(statearr_25734[(15)] = inst_25551);

(statearr_25734[(16)] = inst_25553);

(statearr_25734[(17)] = inst_25552);

return statearr_25734;
})();
var statearr_25735_25802 = state_25669__$1;
(statearr_25735_25802[(2)] = null);

(statearr_25735_25802[(1)] = (8));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (14))){
var state_25669__$1 = state_25669;
var statearr_25736_25803 = state_25669__$1;
(statearr_25736_25803[(2)] = null);

(statearr_25736_25803[(1)] = (15));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (45))){
var inst_25659 = (state_25669[(2)]);
var state_25669__$1 = state_25669;
var statearr_25737_25804 = state_25669__$1;
(statearr_25737_25804[(2)] = inst_25659);

(statearr_25737_25804[(1)] = (44));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (26))){
var inst_25601 = (state_25669[(29)]);
var inst_25655 = (state_25669[(2)]);
var inst_25656 = cljs.core.seq(inst_25601);
var state_25669__$1 = (function (){var statearr_25738 = state_25669;
(statearr_25738[(31)] = inst_25655);

return statearr_25738;
})();
if(inst_25656){
var statearr_25739_25805 = state_25669__$1;
(statearr_25739_25805[(1)] = (42));

} else {
var statearr_25740_25806 = state_25669__$1;
(statearr_25740_25806[(1)] = (43));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (16))){
var inst_25570 = (state_25669[(7)]);
var inst_25572 = cljs.core.chunked_seq_QMARK_(inst_25570);
var state_25669__$1 = state_25669;
if(inst_25572){
var statearr_25741_25807 = state_25669__$1;
(statearr_25741_25807[(1)] = (19));

} else {
var statearr_25742_25808 = state_25669__$1;
(statearr_25742_25808[(1)] = (20));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (38))){
var inst_25648 = (state_25669[(2)]);
var state_25669__$1 = state_25669;
var statearr_25743_25809 = state_25669__$1;
(statearr_25743_25809[(2)] = inst_25648);

(statearr_25743_25809[(1)] = (35));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (30))){
var state_25669__$1 = state_25669;
var statearr_25744_25810 = state_25669__$1;
(statearr_25744_25810[(2)] = null);

(statearr_25744_25810[(1)] = (32));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (10))){
var inst_25551 = (state_25669[(15)]);
var inst_25553 = (state_25669[(16)]);
var inst_25559 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25551,inst_25553);
var inst_25560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25559,(0),null);
var inst_25561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25559,(1),null);
var state_25669__$1 = (function (){var statearr_25745 = state_25669;
(statearr_25745[(26)] = inst_25560);

return statearr_25745;
})();
if(cljs.core.truth_(inst_25561)){
var statearr_25746_25811 = state_25669__$1;
(statearr_25746_25811[(1)] = (13));

} else {
var statearr_25747_25812 = state_25669__$1;
(statearr_25747_25812[(1)] = (14));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (18))){
var inst_25594 = (state_25669[(2)]);
var state_25669__$1 = state_25669;
var statearr_25748_25813 = state_25669__$1;
(statearr_25748_25813[(2)] = inst_25594);

(statearr_25748_25813[(1)] = (12));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (42))){
var state_25669__$1 = state_25669;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25669__$1,(45),dchan);
} else {
if((state_val_25670 === (37))){
var inst_25628 = (state_25669[(25)]);
var inst_25541 = (state_25669[(10)]);
var inst_25637 = (state_25669[(23)]);
var inst_25637__$1 = cljs.core.first(inst_25628);
var inst_25638 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25637__$1,inst_25541,done);
var state_25669__$1 = (function (){var statearr_25749 = state_25669;
(statearr_25749[(23)] = inst_25637__$1);

return statearr_25749;
})();
if(cljs.core.truth_(inst_25638)){
var statearr_25750_25814 = state_25669__$1;
(statearr_25750_25814[(1)] = (39));

} else {
var statearr_25751_25815 = state_25669__$1;
(statearr_25751_25815[(1)] = (40));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_25670 === (8))){
var inst_25553 = (state_25669[(16)]);
var inst_25552 = (state_25669[(17)]);
var inst_25555 = (inst_25553 < inst_25552);
var inst_25556 = inst_25555;
var state_25669__$1 = state_25669;
if(cljs.core.truth_(inst_25556)){
var statearr_25752_25816 = state_25669__$1;
(statearr_25752_25816[(1)] = (10));

} else {
var statearr_25753_25817 = state_25669__$1;
(statearr_25753_25817[(1)] = (11));

}

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
});})(c__11733__auto___25763,cs,m,dchan,dctr,done))
;
return ((function (switch__11653__auto__,c__11733__auto___25763,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11654__auto__ = null;
var state_machine__11654__auto____0 = (function (){
var statearr_25757 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25757[(0)] = state_machine__11654__auto__);

(statearr_25757[(1)] = (1));

return statearr_25757;
});
var state_machine__11654__auto____1 = (function (state_25669){
while(true){
var ret_value__11655__auto__ = (function (){try{while(true){
var result__11656__auto__ = switch__11653__auto__(state_25669);
if(cljs.core.keyword_identical_QMARK_(result__11656__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11656__auto__;
}
break;
}
}catch (e25758){if((e25758 instanceof Object)){
var ex__11657__auto__ = e25758;
var statearr_25759_25818 = state_25669;
(statearr_25759_25818[(5)] = ex__11657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25669);

return cljs.core.constant$keyword$65;
} else {
throw e25758;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11655__auto__,cljs.core.constant$keyword$65)){
var G__25819 = state_25669;
state_25669 = G__25819;
continue;
} else {
return ret_value__11655__auto__;
}
break;
}
});
state_machine__11654__auto__ = function(state_25669){
switch(arguments.length){
case 0:
return state_machine__11654__auto____0.call(this);
case 1:
return state_machine__11654__auto____1.call(this,state_25669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11654__auto____0;
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11654__auto____1;
return state_machine__11654__auto__;
})()
;})(switch__11653__auto__,c__11733__auto___25763,cs,m,dchan,dctr,done))
})();
var state__11735__auto__ = (function (){var statearr_25760 = (function (){return (f__11734__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11734__auto__.cljs$core$IFn$_invoke$arity$0() : f__11734__auto__.call(null));
})();
(statearr_25760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11733__auto___25763);

return statearr_25760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11735__auto__);
});})(c__11733__auto___25763,cs,m,dchan,dctr,done))
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
var tap__2 = (function (mult,ch){
return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

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
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

cljs.core.async.Mix = (function (){var obj25824 = {};
return obj25824;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3738__auto__ = m;
if(and__3738__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3738__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4394__auto__ = (((m == null))?null:m);
return (function (){var or__3750__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__25828 = x__4394__auto__;
return goog.typeOf(G__25828);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3738__auto__ = m;
if(and__3738__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3738__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4394__auto__ = (((m == null))?null:m);
return (function (){var or__3750__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__25832 = x__4394__auto__;
return goog.typeOf(G__25832);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3738__auto__ = m;
if(and__3738__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3738__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4394__auto__ = (((m == null))?null:m);
return (function (){var or__3750__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__25836 = x__4394__auto__;
return goog.typeOf(G__25836);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3738__auto__ = m;
if(and__3738__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3738__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4394__auto__ = (((m == null))?null:m);
return (function (){var or__3750__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__25840 = x__4394__auto__;
return goog.typeOf(G__25840);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3738__auto__ = m;
if(and__3738__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3738__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4394__auto__ = (((m == null))?null:m);
return (function (){var or__3750__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__25844 = x__4394__auto__;
return goog.typeOf(G__25844);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__25845){
var map__25851 = p__25845;
var map__25851__$1 = ((cljs.core.seq_QMARK_(map__25851))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25851):map__25851);
var opts = map__25851__$1;
var statearr_25852_25856 = state;
(statearr_25852_25856[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__25851,map__25851__$1,opts){
return (function (val){
var statearr_25853_25857 = state;
(statearr_25853_25857[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__25851,map__25851__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_25854_25858 = state;
(statearr_25854_25858[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__25855 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25855) : cljs.core.deref.call(null,G__25855));
})());


return cljs.core.constant$keyword$65;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__25845 = null;
if (arguments.length > 3) {
var G__25859__i = 0, G__25859__a = new Array(arguments.length -  3);
while (G__25859__i < G__25859__a.length) {G__25859__a[G__25859__i] = arguments[G__25859__i + 3]; ++G__25859__i;}
  p__25845 = new cljs.core.IndexedSeq(G__25859__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__25845);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__25860){
var state = cljs.core.first(arglist__25860);
arglist__25860 = cljs.core.next(arglist__25860);
var cont_block = cljs.core.first(arglist__25860);
arglist__25860 = cljs.core.next(arglist__25860);
var ports = cljs.core.first(arglist__25860);
var p__25845 = cljs.core.rest(arglist__25860);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__25845);
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
cljs.core.async.mix = (function mix(out){
var cs = (function (){var G__25994 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25994) : cljs.core.atom.call(null,G__25994));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$74,null,cljs.core.constant$keyword$75,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$76);
var solo_mode = (function (){var G__25995 = cljs.core.constant$keyword$75;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25995) : cljs.core.atom.call(null,G__25995));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((function (){var G__25996 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__25996) : attr.call(null,G__25996));
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (function (){var G__25997 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25997) : cljs.core.deref.call(null,G__25997));
})();
var mode = (function (){var G__25998 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25998) : cljs.core.deref.call(null,G__25998));
})();
var solos = pick(cljs.core.constant$keyword$76,chs);
var pauses = pick(cljs.core.constant$keyword$74,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$77,solos,cljs.core.constant$keyword$78,pick(cljs.core.constant$keyword$75,chs),cljs.core.constant$keyword$79,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$74)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t25999 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25999 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26000){
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
this.meta26000 = meta26000;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25999.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t25999.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25999.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25999.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__26002_26127 = self__.cs;
var G__26003_26128 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26002_26127,G__26003_26128) : cljs.core.reset_BANG_.call(null,G__26002_26127,G__26003_26128));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25999.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25999.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__26004 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__26004) : self__.solo_modes.call(null,G__26004));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__26005_26129 = self__.solo_mode;
var G__26006_26130 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26005_26129,G__26006_26130) : cljs.core.reset_BANG_.call(null,G__26005_26129,G__26006_26130));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25999.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25999.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25999.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26001){
var self__ = this;
var _26001__$1 = this;
return self__.meta26000;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26001,meta26000__$1){
var self__ = this;
var _26001__$1 = this;
return (new cljs.core.async.t25999(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26000__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25999.cljs$lang$type = true;

cljs.core.async.t25999.cljs$lang$ctorStr = "cljs.core.async/t25999";

cljs.core.async.t25999.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4337__auto__,writer__4338__auto__,opt__4339__auto__){
return cljs.core._write(writer__4338__auto__,"cljs.core.async/t25999");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t25999 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25999(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26000){
return (new cljs.core.async.t25999(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26000));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t25999(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,25,cljs.core.constant$keyword$9,510,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,499,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
;
var c__11733__auto___26131 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11733__auto___26131,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11734__auto__ = (function (){var switch__11653__auto__ = ((function (c__11733__auto___26131,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26078){
var state_val_26079 = (state_26078[(1)]);
if((state_val_26079 === (7))){
var inst_26020 = (state_26078[(7)]);
var inst_26025 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_26020);
var state_26078__$1 = state_26078;
var statearr_26080_26132 = state_26078__$1;
(statearr_26080_26132[(2)] = inst_26025);

(statearr_26080_26132[(1)] = (9));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26079 === (20))){
var inst_26035 = (state_26078[(8)]);
var state_26078__$1 = state_26078;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26078__$1,(23),out,inst_26035);
} else {
if((state_val_26079 === (1))){
var inst_26010 = (state_26078[(9)]);
var inst_26010__$1 = calc_state();
var inst_26011 = cljs.core.seq_QMARK_(inst_26010__$1);
var state_26078__$1 = (function (){var statearr_26081 = state_26078;
(statearr_26081[(9)] = inst_26010__$1);

return statearr_26081;
})();
if(inst_26011){
var statearr_26082_26133 = state_26078__$1;
(statearr_26082_26133[(1)] = (2));

} else {
var statearr_26083_26134 = state_26078__$1;
(statearr_26083_26134[(1)] = (3));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_26079 === (24))){
var inst_26028 = (state_26078[(10)]);
var inst_26020 = inst_26028;
var state_26078__$1 = (function (){var statearr_26084 = state_26078;
(statearr_26084[(7)] = inst_26020);

return statearr_26084;
})();
var statearr_26085_26135 = state_26078__$1;
(statearr_26085_26135[(2)] = null);

(statearr_26085_26135[(1)] = (5));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26079 === (4))){
var inst_26010 = (state_26078[(9)]);
var inst_26016 = (state_26078[(2)]);
var inst_26017 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26016,cljs.core.constant$keyword$79);
var inst_26018 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26016,cljs.core.constant$keyword$78);
var inst_26019 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26016,cljs.core.constant$keyword$77);
var inst_26020 = inst_26010;
var state_26078__$1 = (function (){var statearr_26086 = state_26078;
(statearr_26086[(11)] = inst_26017);

(statearr_26086[(12)] = inst_26018);

(statearr_26086[(7)] = inst_26020);

(statearr_26086[(13)] = inst_26019);

return statearr_26086;
})();
var statearr_26087_26136 = state_26078__$1;
(statearr_26087_26136[(2)] = null);

(statearr_26087_26136[(1)] = (5));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26079 === (15))){
var state_26078__$1 = state_26078;
var statearr_26088_26137 = state_26078__$1;
(statearr_26088_26137[(2)] = null);

(statearr_26088_26137[(1)] = (16));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26079 === (21))){
var inst_26028 = (state_26078[(10)]);
var inst_26020 = inst_26028;
var state_26078__$1 = (function (){var statearr_26089 = state_26078;
(statearr_26089[(7)] = inst_26020);

return statearr_26089;
})();
var statearr_26090_26138 = state_26078__$1;
(statearr_26090_26138[(2)] = null);

(statearr_26090_26138[(1)] = (5));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26079 === (13))){
var inst_26074 = (state_26078[(2)]);
var state_26078__$1 = state_26078;
var statearr_26091_26139 = state_26078__$1;
(statearr_26091_26139[(2)] = inst_26074);

(statearr_26091_26139[(1)] = (6));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26079 === (22))){
var inst_26072 = (state_26078[(2)]);
var state_26078__$1 = state_26078;
var statearr_26092_26140 = state_26078__$1;
(statearr_26092_26140[(2)] = inst_26072);

(statearr_26092_26140[(1)] = (13));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26079 === (6))){
var inst_26076 = (state_26078[(2)]);
var state_26078__$1 = state_26078;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26078__$1,inst_26076);
} else {
if((state_val_26079 === (25))){
var state_26078__$1 = state_26078;
var statearr_26093_26141 = state_26078__$1;
(statearr_26093_26141[(2)] = null);

(statearr_26093_26141[(1)] = (26));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26079 === (17))){
var inst_26051 = (state_26078[(14)]);
var state_26078__$1 = state_26078;
var statearr_26094_26142 = state_26078__$1;
(statearr_26094_26142[(2)] = inst_26051);

(statearr_26094_26142[(1)] = (19));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26079 === (3))){
var inst_26010 = (state_26078[(9)]);
var state_26078__$1 = state_26078;
var statearr_26095_26143 = state_26078__$1;
(statearr_26095_26143[(2)] = inst_26010);

(statearr_26095_26143[(1)] = (4));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26079 === (12))){
var inst_26051 = (state_26078[(14)]);
var inst_26031 = (state_26078[(15)]);
var inst_26036 = (state_26078[(16)]);
var inst_26051__$1 = (function (){var G__26096 = inst_26036;
return (inst_26031.cljs$core$IFn$_invoke$arity$1 ? inst_26031.cljs$core$IFn$_invoke$arity$1(G__26096) : inst_26031.call(null,G__26096));
})();
var state_26078__$1 = (function (){var statearr_26097 = state_26078;
(statearr_26097[(14)] = inst_26051__$1);

return statearr_26097;
})();
if(cljs.core.truth_(inst_26051__$1)){
var statearr_26098_26144 = state_26078__$1;
(statearr_26098_26144[(1)] = (17));

} else {
var statearr_26099_26145 = state_26078__$1;
(statearr_26099_26145[(1)] = (18));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_26079 === (2))){
var inst_26010 = (state_26078[(9)]);
var inst_26013 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_26010);
var state_26078__$1 = state_26078;
var statearr_26100_26146 = state_26078__$1;
(statearr_26100_26146[(2)] = inst_26013);

(statearr_26100_26146[(1)] = (4));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26079 === (23))){
var inst_26063 = (state_26078[(2)]);
var state_26078__$1 = state_26078;
if(cljs.core.truth_(inst_26063)){
var statearr_26101_26147 = state_26078__$1;
(statearr_26101_26147[(1)] = (24));

} else {
var statearr_26102_26148 = state_26078__$1;
(statearr_26102_26148[(1)] = (25));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_26079 === (19))){
var inst_26060 = (state_26078[(2)]);
var state_26078__$1 = state_26078;
if(cljs.core.truth_(inst_26060)){
var statearr_26103_26149 = state_26078__$1;
(statearr_26103_26149[(1)] = (20));

} else {
var statearr_26104_26150 = state_26078__$1;
(statearr_26104_26150[(1)] = (21));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_26079 === (11))){
var inst_26035 = (state_26078[(8)]);
var inst_26041 = (inst_26035 == null);
var state_26078__$1 = state_26078;
if(cljs.core.truth_(inst_26041)){
var statearr_26105_26151 = state_26078__$1;
(statearr_26105_26151[(1)] = (14));

} else {
var statearr_26106_26152 = state_26078__$1;
(statearr_26106_26152[(1)] = (15));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_26079 === (9))){
var inst_26028 = (state_26078[(10)]);
var inst_26028__$1 = (state_26078[(2)]);
var inst_26029 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26028__$1,cljs.core.constant$keyword$79);
var inst_26030 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26028__$1,cljs.core.constant$keyword$78);
var inst_26031 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26028__$1,cljs.core.constant$keyword$77);
var state_26078__$1 = (function (){var statearr_26107 = state_26078;
(statearr_26107[(15)] = inst_26031);

(statearr_26107[(17)] = inst_26030);

(statearr_26107[(10)] = inst_26028__$1);

return statearr_26107;
})();
return cljs.core.async.ioc_alts_BANG_(state_26078__$1,(10),inst_26029);
} else {
if((state_val_26079 === (5))){
var inst_26020 = (state_26078[(7)]);
var inst_26023 = cljs.core.seq_QMARK_(inst_26020);
var state_26078__$1 = state_26078;
if(inst_26023){
var statearr_26108_26153 = state_26078__$1;
(statearr_26108_26153[(1)] = (7));

} else {
var statearr_26109_26154 = state_26078__$1;
(statearr_26109_26154[(1)] = (8));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_26079 === (14))){
var inst_26036 = (state_26078[(16)]);
var inst_26043 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_26036);
var state_26078__$1 = state_26078;
var statearr_26110_26155 = state_26078__$1;
(statearr_26110_26155[(2)] = inst_26043);

(statearr_26110_26155[(1)] = (16));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26079 === (26))){
var inst_26068 = (state_26078[(2)]);
var state_26078__$1 = state_26078;
var statearr_26111_26156 = state_26078__$1;
(statearr_26111_26156[(2)] = inst_26068);

(statearr_26111_26156[(1)] = (22));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26079 === (16))){
var inst_26046 = (state_26078[(2)]);
var inst_26047 = calc_state();
var inst_26020 = inst_26047;
var state_26078__$1 = (function (){var statearr_26112 = state_26078;
(statearr_26112[(7)] = inst_26020);

(statearr_26112[(18)] = inst_26046);

return statearr_26112;
})();
var statearr_26113_26157 = state_26078__$1;
(statearr_26113_26157[(2)] = null);

(statearr_26113_26157[(1)] = (5));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26079 === (10))){
var inst_26036 = (state_26078[(16)]);
var inst_26035 = (state_26078[(8)]);
var inst_26034 = (state_26078[(2)]);
var inst_26035__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26034,(0),null);
var inst_26036__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26034,(1),null);
var inst_26037 = (inst_26035__$1 == null);
var inst_26038 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26036__$1,change);
var inst_26039 = (inst_26037) || (inst_26038);
var state_26078__$1 = (function (){var statearr_26114 = state_26078;
(statearr_26114[(16)] = inst_26036__$1);

(statearr_26114[(8)] = inst_26035__$1);

return statearr_26114;
})();
if(cljs.core.truth_(inst_26039)){
var statearr_26115_26158 = state_26078__$1;
(statearr_26115_26158[(1)] = (11));

} else {
var statearr_26116_26159 = state_26078__$1;
(statearr_26116_26159[(1)] = (12));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_26079 === (18))){
var inst_26031 = (state_26078[(15)]);
var inst_26030 = (state_26078[(17)]);
var inst_26036 = (state_26078[(16)]);
var inst_26055 = cljs.core.empty_QMARK_(inst_26031);
var inst_26056 = (function (){var G__26117 = inst_26036;
return (inst_26030.cljs$core$IFn$_invoke$arity$1 ? inst_26030.cljs$core$IFn$_invoke$arity$1(G__26117) : inst_26030.call(null,G__26117));
})();
var inst_26057 = cljs.core.not(inst_26056);
var inst_26058 = (inst_26055) && (inst_26057);
var state_26078__$1 = state_26078;
var statearr_26118_26160 = state_26078__$1;
(statearr_26118_26160[(2)] = inst_26058);

(statearr_26118_26160[(1)] = (19));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26079 === (8))){
var inst_26020 = (state_26078[(7)]);
var state_26078__$1 = state_26078;
var statearr_26119_26161 = state_26078__$1;
(statearr_26119_26161[(2)] = inst_26020);

(statearr_26119_26161[(1)] = (9));


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
});})(c__11733__auto___26131,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__11653__auto__,c__11733__auto___26131,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11654__auto__ = null;
var state_machine__11654__auto____0 = (function (){
var statearr_26123 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26123[(0)] = state_machine__11654__auto__);

(statearr_26123[(1)] = (1));

return statearr_26123;
});
var state_machine__11654__auto____1 = (function (state_26078){
while(true){
var ret_value__11655__auto__ = (function (){try{while(true){
var result__11656__auto__ = switch__11653__auto__(state_26078);
if(cljs.core.keyword_identical_QMARK_(result__11656__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11656__auto__;
}
break;
}
}catch (e26124){if((e26124 instanceof Object)){
var ex__11657__auto__ = e26124;
var statearr_26125_26162 = state_26078;
(statearr_26125_26162[(5)] = ex__11657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26078);

return cljs.core.constant$keyword$65;
} else {
throw e26124;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11655__auto__,cljs.core.constant$keyword$65)){
var G__26163 = state_26078;
state_26078 = G__26163;
continue;
} else {
return ret_value__11655__auto__;
}
break;
}
});
state_machine__11654__auto__ = function(state_26078){
switch(arguments.length){
case 0:
return state_machine__11654__auto____0.call(this);
case 1:
return state_machine__11654__auto____1.call(this,state_26078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11654__auto____0;
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11654__auto____1;
return state_machine__11654__auto__;
})()
;})(switch__11653__auto__,c__11733__auto___26131,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11735__auto__ = (function (){var statearr_26126 = (function (){return (f__11734__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11734__auto__.cljs$core$IFn$_invoke$arity$0() : f__11734__auto__.call(null));
})();
(statearr_26126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11733__auto___26131);

return statearr_26126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11735__auto__);
});})(c__11733__auto___26131,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

cljs.core.async.Pub = (function (){var obj26165 = {};
return obj26165;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3738__auto__ = p;
if(and__3738__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3738__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4394__auto__ = (((p == null))?null:p);
return (function (){var or__3750__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__26169 = x__4394__auto__;
return goog.typeOf(G__26169);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3738__auto__ = p;
if(and__3738__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3738__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4394__auto__ = (((p == null))?null:p);
return (function (){var or__3750__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__26173 = x__4394__auto__;
return goog.typeOf(G__26173);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3738__auto__ = p;
if(and__3738__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3738__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4394__auto__ = (((p == null))?null:p);
return (function (){var or__3750__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__26179 = x__4394__auto__;
return goog.typeOf(G__26179);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3738__auto__ = p;
if(and__3738__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3738__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4394__auto__ = (((p == null))?null:p);
return (function (){var or__3750__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__26181 = x__4394__auto__;
return goog.typeOf(G__26181);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
var pub__2 = (function (ch,topic_fn){
return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__26320 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26320) : cljs.core.atom.call(null,G__26320));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__3750__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__26322 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26322) : cljs.core.deref.call(null,G__26322));
})(),topic);
if(cljs.core.truth_(or__3750__auto__)){
return or__3750__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3750__auto__,mults){
return (function (p1__26182_SHARP_){
if(cljs.core.truth_((function (){var G__26323 = topic;
return (p1__26182_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__26182_SHARP_.cljs$core$IFn$_invoke$arity$1(G__26323) : p1__26182_SHARP_.call(null,G__26323));
})())){
return p1__26182_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26182_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__26324 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__26324) : buf_fn.call(null,G__26324));
})())));
}
});})(or__3750__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t26325 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26325 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26326){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26326 = meta26326;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26325.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t26325.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__26328 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__26328) : self__.ensure_mult.call(null,G__26328));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t26325.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__26329 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26329) : cljs.core.deref.call(null,G__26329));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t26325.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__26330 = self__.mults;
var G__26331 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26330,G__26331) : cljs.core.reset_BANG_.call(null,G__26330,G__26331));
});})(mults,ensure_mult))
;

cljs.core.async.t26325.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t26325.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26325.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t26325.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26327){
var self__ = this;
var _26327__$1 = this;
return self__.meta26326;
});})(mults,ensure_mult))
;

cljs.core.async.t26325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26327,meta26326__$1){
var self__ = this;
var _26327__$1 = this;
return (new cljs.core.async.t26325(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26326__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t26325.cljs$lang$type = true;

cljs.core.async.t26325.cljs$lang$ctorStr = "cljs.core.async/t26325";

cljs.core.async.t26325.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4337__auto__,writer__4338__auto__,opt__4339__auto__){
return cljs.core._write(writer__4338__auto__,"cljs.core.async/t26325");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t26325 = ((function (mults,ensure_mult){
return (function __GT_t26325(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26326){
return (new cljs.core.async.t26325(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26326));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t26325(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,65,cljs.core.constant$keyword$9,603,cljs.core.constant$keyword$10,14,cljs.core.constant$keyword$11,591,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
;
var c__11733__auto___26454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11733__auto___26454,mults,ensure_mult,p){
return (function (){
var f__11734__auto__ = (function (){var switch__11653__auto__ = ((function (c__11733__auto___26454,mults,ensure_mult,p){
return (function (state_26403){
var state_val_26404 = (state_26403[(1)]);
if((state_val_26404 === (7))){
var inst_26399 = (state_26403[(2)]);
var state_26403__$1 = state_26403;
var statearr_26405_26455 = state_26403__$1;
(statearr_26405_26455[(2)] = inst_26399);

(statearr_26405_26455[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26404 === (20))){
var state_26403__$1 = state_26403;
var statearr_26406_26456 = state_26403__$1;
(statearr_26406_26456[(2)] = null);

(statearr_26406_26456[(1)] = (21));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26404 === (1))){
var state_26403__$1 = state_26403;
var statearr_26407_26457 = state_26403__$1;
(statearr_26407_26457[(2)] = null);

(statearr_26407_26457[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26404 === (24))){
var inst_26382 = (state_26403[(7)]);
var inst_26391 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_26382);
var state_26403__$1 = state_26403;
var statearr_26408_26458 = state_26403__$1;
(statearr_26408_26458[(2)] = inst_26391);

(statearr_26408_26458[(1)] = (25));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26404 === (4))){
var inst_26334 = (state_26403[(8)]);
var inst_26334__$1 = (state_26403[(2)]);
var inst_26335 = (inst_26334__$1 == null);
var state_26403__$1 = (function (){var statearr_26409 = state_26403;
(statearr_26409[(8)] = inst_26334__$1);

return statearr_26409;
})();
if(cljs.core.truth_(inst_26335)){
var statearr_26410_26459 = state_26403__$1;
(statearr_26410_26459[(1)] = (5));

} else {
var statearr_26411_26460 = state_26403__$1;
(statearr_26411_26460[(1)] = (6));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_26404 === (15))){
var inst_26376 = (state_26403[(2)]);
var state_26403__$1 = state_26403;
var statearr_26412_26461 = state_26403__$1;
(statearr_26412_26461[(2)] = inst_26376);

(statearr_26412_26461[(1)] = (12));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26404 === (21))){
var inst_26396 = (state_26403[(2)]);
var state_26403__$1 = (function (){var statearr_26413 = state_26403;
(statearr_26413[(9)] = inst_26396);

return statearr_26413;
})();
var statearr_26414_26462 = state_26403__$1;
(statearr_26414_26462[(2)] = null);

(statearr_26414_26462[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26404 === (13))){
var inst_26358 = (state_26403[(10)]);
var inst_26360 = cljs.core.chunked_seq_QMARK_(inst_26358);
var state_26403__$1 = state_26403;
if(inst_26360){
var statearr_26415_26463 = state_26403__$1;
(statearr_26415_26463[(1)] = (16));

} else {
var statearr_26416_26464 = state_26403__$1;
(statearr_26416_26464[(1)] = (17));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_26404 === (22))){
var inst_26388 = (state_26403[(2)]);
var state_26403__$1 = state_26403;
if(cljs.core.truth_(inst_26388)){
var statearr_26417_26465 = state_26403__$1;
(statearr_26417_26465[(1)] = (23));

} else {
var statearr_26418_26466 = state_26403__$1;
(statearr_26418_26466[(1)] = (24));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_26404 === (6))){
var inst_26334 = (state_26403[(8)]);
var inst_26384 = (state_26403[(11)]);
var inst_26382 = (state_26403[(7)]);
var inst_26382__$1 = (function (){var G__26419 = inst_26334;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__26419) : topic_fn.call(null,G__26419));
})();
var inst_26383 = (function (){var G__26420 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26420) : cljs.core.deref.call(null,G__26420));
})();
var inst_26384__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26383,inst_26382__$1);
var state_26403__$1 = (function (){var statearr_26421 = state_26403;
(statearr_26421[(11)] = inst_26384__$1);

(statearr_26421[(7)] = inst_26382__$1);

return statearr_26421;
})();
if(cljs.core.truth_(inst_26384__$1)){
var statearr_26422_26467 = state_26403__$1;
(statearr_26422_26467[(1)] = (19));

} else {
var statearr_26423_26468 = state_26403__$1;
(statearr_26423_26468[(1)] = (20));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_26404 === (25))){
var inst_26393 = (state_26403[(2)]);
var state_26403__$1 = state_26403;
var statearr_26424_26469 = state_26403__$1;
(statearr_26424_26469[(2)] = inst_26393);

(statearr_26424_26469[(1)] = (21));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26404 === (17))){
var inst_26358 = (state_26403[(10)]);
var inst_26367 = cljs.core.first(inst_26358);
var inst_26368 = cljs.core.async.muxch_STAR_(inst_26367);
var inst_26369 = cljs.core.async.close_BANG_(inst_26368);
var inst_26370 = cljs.core.next(inst_26358);
var inst_26344 = inst_26370;
var inst_26345 = null;
var inst_26346 = (0);
var inst_26347 = (0);
var state_26403__$1 = (function (){var statearr_26425 = state_26403;
(statearr_26425[(12)] = inst_26346);

(statearr_26425[(13)] = inst_26344);

(statearr_26425[(14)] = inst_26345);

(statearr_26425[(15)] = inst_26347);

(statearr_26425[(16)] = inst_26369);

return statearr_26425;
})();
var statearr_26426_26470 = state_26403__$1;
(statearr_26426_26470[(2)] = null);

(statearr_26426_26470[(1)] = (8));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26404 === (3))){
var inst_26401 = (state_26403[(2)]);
var state_26403__$1 = state_26403;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26403__$1,inst_26401);
} else {
if((state_val_26404 === (12))){
var inst_26378 = (state_26403[(2)]);
var state_26403__$1 = state_26403;
var statearr_26427_26471 = state_26403__$1;
(statearr_26427_26471[(2)] = inst_26378);

(statearr_26427_26471[(1)] = (9));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26404 === (2))){
var state_26403__$1 = state_26403;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26403__$1,(4),ch);
} else {
if((state_val_26404 === (23))){
var state_26403__$1 = state_26403;
var statearr_26428_26472 = state_26403__$1;
(statearr_26428_26472[(2)] = null);

(statearr_26428_26472[(1)] = (25));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26404 === (19))){
var inst_26334 = (state_26403[(8)]);
var inst_26384 = (state_26403[(11)]);
var inst_26386 = cljs.core.async.muxch_STAR_(inst_26384);
var state_26403__$1 = state_26403;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26403__$1,(22),inst_26386,inst_26334);
} else {
if((state_val_26404 === (11))){
var inst_26358 = (state_26403[(10)]);
var inst_26344 = (state_26403[(13)]);
var inst_26358__$1 = cljs.core.seq(inst_26344);
var state_26403__$1 = (function (){var statearr_26429 = state_26403;
(statearr_26429[(10)] = inst_26358__$1);

return statearr_26429;
})();
if(inst_26358__$1){
var statearr_26430_26473 = state_26403__$1;
(statearr_26430_26473[(1)] = (13));

} else {
var statearr_26431_26474 = state_26403__$1;
(statearr_26431_26474[(1)] = (14));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_26404 === (9))){
var inst_26380 = (state_26403[(2)]);
var state_26403__$1 = state_26403;
var statearr_26432_26475 = state_26403__$1;
(statearr_26432_26475[(2)] = inst_26380);

(statearr_26432_26475[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26404 === (5))){
var inst_26341 = (function (){var G__26433 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26433) : cljs.core.deref.call(null,G__26433));
})();
var inst_26342 = cljs.core.vals(inst_26341);
var inst_26343 = cljs.core.seq(inst_26342);
var inst_26344 = inst_26343;
var inst_26345 = null;
var inst_26346 = (0);
var inst_26347 = (0);
var state_26403__$1 = (function (){var statearr_26434 = state_26403;
(statearr_26434[(12)] = inst_26346);

(statearr_26434[(13)] = inst_26344);

(statearr_26434[(14)] = inst_26345);

(statearr_26434[(15)] = inst_26347);

return statearr_26434;
})();
var statearr_26435_26476 = state_26403__$1;
(statearr_26435_26476[(2)] = null);

(statearr_26435_26476[(1)] = (8));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26404 === (14))){
var state_26403__$1 = state_26403;
var statearr_26439_26477 = state_26403__$1;
(statearr_26439_26477[(2)] = null);

(statearr_26439_26477[(1)] = (15));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26404 === (16))){
var inst_26358 = (state_26403[(10)]);
var inst_26362 = cljs.core.chunk_first(inst_26358);
var inst_26363 = cljs.core.chunk_rest(inst_26358);
var inst_26364 = cljs.core.count(inst_26362);
var inst_26344 = inst_26363;
var inst_26345 = inst_26362;
var inst_26346 = inst_26364;
var inst_26347 = (0);
var state_26403__$1 = (function (){var statearr_26440 = state_26403;
(statearr_26440[(12)] = inst_26346);

(statearr_26440[(13)] = inst_26344);

(statearr_26440[(14)] = inst_26345);

(statearr_26440[(15)] = inst_26347);

return statearr_26440;
})();
var statearr_26441_26478 = state_26403__$1;
(statearr_26441_26478[(2)] = null);

(statearr_26441_26478[(1)] = (8));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26404 === (10))){
var inst_26346 = (state_26403[(12)]);
var inst_26344 = (state_26403[(13)]);
var inst_26345 = (state_26403[(14)]);
var inst_26347 = (state_26403[(15)]);
var inst_26352 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26345,inst_26347);
var inst_26353 = cljs.core.async.muxch_STAR_(inst_26352);
var inst_26354 = cljs.core.async.close_BANG_(inst_26353);
var inst_26355 = (inst_26347 + (1));
var tmp26436 = inst_26346;
var tmp26437 = inst_26344;
var tmp26438 = inst_26345;
var inst_26344__$1 = tmp26437;
var inst_26345__$1 = tmp26438;
var inst_26346__$1 = tmp26436;
var inst_26347__$1 = inst_26355;
var state_26403__$1 = (function (){var statearr_26442 = state_26403;
(statearr_26442[(12)] = inst_26346__$1);

(statearr_26442[(13)] = inst_26344__$1);

(statearr_26442[(17)] = inst_26354);

(statearr_26442[(14)] = inst_26345__$1);

(statearr_26442[(15)] = inst_26347__$1);

return statearr_26442;
})();
var statearr_26443_26479 = state_26403__$1;
(statearr_26443_26479[(2)] = null);

(statearr_26443_26479[(1)] = (8));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26404 === (18))){
var inst_26373 = (state_26403[(2)]);
var state_26403__$1 = state_26403;
var statearr_26444_26480 = state_26403__$1;
(statearr_26444_26480[(2)] = inst_26373);

(statearr_26444_26480[(1)] = (15));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26404 === (8))){
var inst_26346 = (state_26403[(12)]);
var inst_26347 = (state_26403[(15)]);
var inst_26349 = (inst_26347 < inst_26346);
var inst_26350 = inst_26349;
var state_26403__$1 = state_26403;
if(cljs.core.truth_(inst_26350)){
var statearr_26445_26481 = state_26403__$1;
(statearr_26445_26481[(1)] = (10));

} else {
var statearr_26446_26482 = state_26403__$1;
(statearr_26446_26482[(1)] = (11));

}

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
});})(c__11733__auto___26454,mults,ensure_mult,p))
;
return ((function (switch__11653__auto__,c__11733__auto___26454,mults,ensure_mult,p){
return (function() {
var state_machine__11654__auto__ = null;
var state_machine__11654__auto____0 = (function (){
var statearr_26450 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26450[(0)] = state_machine__11654__auto__);

(statearr_26450[(1)] = (1));

return statearr_26450;
});
var state_machine__11654__auto____1 = (function (state_26403){
while(true){
var ret_value__11655__auto__ = (function (){try{while(true){
var result__11656__auto__ = switch__11653__auto__(state_26403);
if(cljs.core.keyword_identical_QMARK_(result__11656__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11656__auto__;
}
break;
}
}catch (e26451){if((e26451 instanceof Object)){
var ex__11657__auto__ = e26451;
var statearr_26452_26483 = state_26403;
(statearr_26452_26483[(5)] = ex__11657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26403);

return cljs.core.constant$keyword$65;
} else {
throw e26451;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11655__auto__,cljs.core.constant$keyword$65)){
var G__26484 = state_26403;
state_26403 = G__26484;
continue;
} else {
return ret_value__11655__auto__;
}
break;
}
});
state_machine__11654__auto__ = function(state_26403){
switch(arguments.length){
case 0:
return state_machine__11654__auto____0.call(this);
case 1:
return state_machine__11654__auto____1.call(this,state_26403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11654__auto____0;
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11654__auto____1;
return state_machine__11654__auto__;
})()
;})(switch__11653__auto__,c__11733__auto___26454,mults,ensure_mult,p))
})();
var state__11735__auto__ = (function (){var statearr_26453 = (function (){return (f__11734__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11734__auto__.cljs$core$IFn$_invoke$arity$0() : f__11734__auto__.call(null));
})();
(statearr_26453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11733__auto___26454);

return statearr_26453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11735__auto__);
});})(c__11733__auto___26454,mults,ensure_mult,p))
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
var sub__3 = (function (p,topic,ch){
return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
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
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var map__2 = (function (f,chs){
return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__26565 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26565) : cljs.core.atom.call(null,G__26565));
})();
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__11733__auto___26638 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11733__auto___26638,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11734__auto__ = (function (){var switch__11653__auto__ = ((function (c__11733__auto___26638,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26604){
var state_val_26605 = (state_26604[(1)]);
if((state_val_26605 === (7))){
var state_26604__$1 = state_26604;
var statearr_26606_26639 = state_26604__$1;
(statearr_26606_26639[(2)] = null);

(statearr_26606_26639[(1)] = (8));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26605 === (1))){
var state_26604__$1 = state_26604;
var statearr_26607_26640 = state_26604__$1;
(statearr_26607_26640[(2)] = null);

(statearr_26607_26640[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26605 === (4))){
var inst_26568 = (state_26604[(7)]);
var inst_26570 = (inst_26568 < cnt);
var state_26604__$1 = state_26604;
if(cljs.core.truth_(inst_26570)){
var statearr_26608_26641 = state_26604__$1;
(statearr_26608_26641[(1)] = (6));

} else {
var statearr_26609_26642 = state_26604__$1;
(statearr_26609_26642[(1)] = (7));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_26605 === (15))){
var inst_26600 = (state_26604[(2)]);
var state_26604__$1 = state_26604;
var statearr_26610_26643 = state_26604__$1;
(statearr_26610_26643[(2)] = inst_26600);

(statearr_26610_26643[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26605 === (13))){
var inst_26593 = cljs.core.async.close_BANG_(out);
var state_26604__$1 = state_26604;
var statearr_26611_26644 = state_26604__$1;
(statearr_26611_26644[(2)] = inst_26593);

(statearr_26611_26644[(1)] = (15));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26605 === (6))){
var state_26604__$1 = state_26604;
var statearr_26612_26645 = state_26604__$1;
(statearr_26612_26645[(2)] = null);

(statearr_26612_26645[(1)] = (11));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26605 === (3))){
var inst_26602 = (state_26604[(2)]);
var state_26604__$1 = state_26604;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26604__$1,inst_26602);
} else {
if((state_val_26605 === (12))){
var inst_26590 = (state_26604[(8)]);
var inst_26590__$1 = (state_26604[(2)]);
var inst_26591 = cljs.core.some(cljs.core.nil_QMARK_,inst_26590__$1);
var state_26604__$1 = (function (){var statearr_26613 = state_26604;
(statearr_26613[(8)] = inst_26590__$1);

return statearr_26613;
})();
if(cljs.core.truth_(inst_26591)){
var statearr_26614_26646 = state_26604__$1;
(statearr_26614_26646[(1)] = (13));

} else {
var statearr_26615_26647 = state_26604__$1;
(statearr_26615_26647[(1)] = (14));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_26605 === (2))){
var inst_26567 = (function (){var G__26616 = dctr;
var G__26617 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26616,G__26617) : cljs.core.reset_BANG_.call(null,G__26616,G__26617));
})();
var inst_26568 = (0);
var state_26604__$1 = (function (){var statearr_26618 = state_26604;
(statearr_26618[(9)] = inst_26567);

(statearr_26618[(7)] = inst_26568);

return statearr_26618;
})();
var statearr_26619_26648 = state_26604__$1;
(statearr_26619_26648[(2)] = null);

(statearr_26619_26648[(1)] = (4));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26605 === (11))){
var inst_26568 = (state_26604[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_26604,(10),Object,null,(9));
var inst_26577 = (function (){var G__26620 = inst_26568;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__26620) : chs__$1.call(null,G__26620));
})();
var inst_26578 = (function (){var G__26621 = inst_26568;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__26621) : done.call(null,G__26621));
})();
var inst_26579 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_26577,inst_26578);
var state_26604__$1 = state_26604;
var statearr_26622_26649 = state_26604__$1;
(statearr_26622_26649[(2)] = inst_26579);


cljs.core.async.impl.ioc_helpers.process_exception(state_26604__$1);

return cljs.core.constant$keyword$65;
} else {
if((state_val_26605 === (9))){
var inst_26568 = (state_26604[(7)]);
var inst_26581 = (state_26604[(2)]);
var inst_26582 = (inst_26568 + (1));
var inst_26568__$1 = inst_26582;
var state_26604__$1 = (function (){var statearr_26623 = state_26604;
(statearr_26623[(10)] = inst_26581);

(statearr_26623[(7)] = inst_26568__$1);

return statearr_26623;
})();
var statearr_26624_26650 = state_26604__$1;
(statearr_26624_26650[(2)] = null);

(statearr_26624_26650[(1)] = (4));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26605 === (5))){
var inst_26588 = (state_26604[(2)]);
var state_26604__$1 = (function (){var statearr_26625 = state_26604;
(statearr_26625[(11)] = inst_26588);

return statearr_26625;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26604__$1,(12),dchan);
} else {
if((state_val_26605 === (14))){
var inst_26590 = (state_26604[(8)]);
var inst_26595 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_26590);
var state_26604__$1 = state_26604;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26604__$1,(16),out,inst_26595);
} else {
if((state_val_26605 === (16))){
var inst_26597 = (state_26604[(2)]);
var state_26604__$1 = (function (){var statearr_26626 = state_26604;
(statearr_26626[(12)] = inst_26597);

return statearr_26626;
})();
var statearr_26627_26651 = state_26604__$1;
(statearr_26627_26651[(2)] = null);

(statearr_26627_26651[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26605 === (10))){
var inst_26572 = (state_26604[(2)]);
var inst_26573 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_26604__$1 = (function (){var statearr_26628 = state_26604;
(statearr_26628[(13)] = inst_26572);

return statearr_26628;
})();
var statearr_26629_26652 = state_26604__$1;
(statearr_26629_26652[(2)] = inst_26573);


cljs.core.async.impl.ioc_helpers.process_exception(state_26604__$1);

return cljs.core.constant$keyword$65;
} else {
if((state_val_26605 === (8))){
var inst_26586 = (state_26604[(2)]);
var state_26604__$1 = state_26604;
var statearr_26630_26653 = state_26604__$1;
(statearr_26630_26653[(2)] = inst_26586);

(statearr_26630_26653[(1)] = (5));


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
}
}
}
}
}
}
}
}
}
});})(c__11733__auto___26638,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__11653__auto__,c__11733__auto___26638,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11654__auto__ = null;
var state_machine__11654__auto____0 = (function (){
var statearr_26634 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26634[(0)] = state_machine__11654__auto__);

(statearr_26634[(1)] = (1));

return statearr_26634;
});
var state_machine__11654__auto____1 = (function (state_26604){
while(true){
var ret_value__11655__auto__ = (function (){try{while(true){
var result__11656__auto__ = switch__11653__auto__(state_26604);
if(cljs.core.keyword_identical_QMARK_(result__11656__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11656__auto__;
}
break;
}
}catch (e26635){if((e26635 instanceof Object)){
var ex__11657__auto__ = e26635;
var statearr_26636_26654 = state_26604;
(statearr_26636_26654[(5)] = ex__11657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26604);

return cljs.core.constant$keyword$65;
} else {
throw e26635;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11655__auto__,cljs.core.constant$keyword$65)){
var G__26655 = state_26604;
state_26604 = G__26655;
continue;
} else {
return ret_value__11655__auto__;
}
break;
}
});
state_machine__11654__auto__ = function(state_26604){
switch(arguments.length){
case 0:
return state_machine__11654__auto____0.call(this);
case 1:
return state_machine__11654__auto____1.call(this,state_26604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11654__auto____0;
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11654__auto____1;
return state_machine__11654__auto__;
})()
;})(switch__11653__auto__,c__11733__auto___26638,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11735__auto__ = (function (){var statearr_26637 = (function (){return (f__11734__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11734__auto__.cljs$core$IFn$_invoke$arity$0() : f__11734__auto__.call(null));
})();
(statearr_26637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11733__auto___26638);

return statearr_26637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11735__auto__);
});})(c__11733__auto___26638,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__1 = (function (chs){
return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11733__auto___26765 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11733__auto___26765,out){
return (function (){
var f__11734__auto__ = (function (){var switch__11653__auto__ = ((function (c__11733__auto___26765,out){
return (function (state_26741){
var state_val_26742 = (state_26741[(1)]);
if((state_val_26742 === (7))){
var inst_26721 = (state_26741[(7)]);
var inst_26720 = (state_26741[(8)]);
var inst_26720__$1 = (state_26741[(2)]);
var inst_26721__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26720__$1,(0),null);
var inst_26722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26720__$1,(1),null);
var inst_26723 = (inst_26721__$1 == null);
var state_26741__$1 = (function (){var statearr_26743 = state_26741;
(statearr_26743[(9)] = inst_26722);

(statearr_26743[(7)] = inst_26721__$1);

(statearr_26743[(8)] = inst_26720__$1);

return statearr_26743;
})();
if(cljs.core.truth_(inst_26723)){
var statearr_26744_26766 = state_26741__$1;
(statearr_26744_26766[(1)] = (8));

} else {
var statearr_26745_26767 = state_26741__$1;
(statearr_26745_26767[(1)] = (9));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_26742 === (1))){
var inst_26712 = cljs.core.vec(chs);
var inst_26713 = inst_26712;
var state_26741__$1 = (function (){var statearr_26746 = state_26741;
(statearr_26746[(10)] = inst_26713);

return statearr_26746;
})();
var statearr_26747_26768 = state_26741__$1;
(statearr_26747_26768[(2)] = null);

(statearr_26747_26768[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26742 === (4))){
var inst_26713 = (state_26741[(10)]);
var state_26741__$1 = state_26741;
return cljs.core.async.ioc_alts_BANG_(state_26741__$1,(7),inst_26713);
} else {
if((state_val_26742 === (6))){
var inst_26737 = (state_26741[(2)]);
var state_26741__$1 = state_26741;
var statearr_26748_26769 = state_26741__$1;
(statearr_26748_26769[(2)] = inst_26737);

(statearr_26748_26769[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26742 === (3))){
var inst_26739 = (state_26741[(2)]);
var state_26741__$1 = state_26741;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26741__$1,inst_26739);
} else {
if((state_val_26742 === (2))){
var inst_26713 = (state_26741[(10)]);
var inst_26715 = cljs.core.count(inst_26713);
var inst_26716 = (inst_26715 > (0));
var state_26741__$1 = state_26741;
if(cljs.core.truth_(inst_26716)){
var statearr_26750_26770 = state_26741__$1;
(statearr_26750_26770[(1)] = (4));

} else {
var statearr_26751_26771 = state_26741__$1;
(statearr_26751_26771[(1)] = (5));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_26742 === (11))){
var inst_26713 = (state_26741[(10)]);
var inst_26730 = (state_26741[(2)]);
var tmp26749 = inst_26713;
var inst_26713__$1 = tmp26749;
var state_26741__$1 = (function (){var statearr_26752 = state_26741;
(statearr_26752[(10)] = inst_26713__$1);

(statearr_26752[(11)] = inst_26730);

return statearr_26752;
})();
var statearr_26753_26772 = state_26741__$1;
(statearr_26753_26772[(2)] = null);

(statearr_26753_26772[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26742 === (9))){
var inst_26721 = (state_26741[(7)]);
var state_26741__$1 = state_26741;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26741__$1,(11),out,inst_26721);
} else {
if((state_val_26742 === (5))){
var inst_26735 = cljs.core.async.close_BANG_(out);
var state_26741__$1 = state_26741;
var statearr_26754_26773 = state_26741__$1;
(statearr_26754_26773[(2)] = inst_26735);

(statearr_26754_26773[(1)] = (6));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26742 === (10))){
var inst_26733 = (state_26741[(2)]);
var state_26741__$1 = state_26741;
var statearr_26755_26774 = state_26741__$1;
(statearr_26755_26774[(2)] = inst_26733);

(statearr_26755_26774[(1)] = (6));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26742 === (8))){
var inst_26722 = (state_26741[(9)]);
var inst_26713 = (state_26741[(10)]);
var inst_26721 = (state_26741[(7)]);
var inst_26720 = (state_26741[(8)]);
var inst_26725 = (function (){var c = inst_26722;
var v = inst_26721;
var vec__26718 = inst_26720;
var cs = inst_26713;
return ((function (c,v,vec__26718,cs,inst_26722,inst_26713,inst_26721,inst_26720,state_val_26742,c__11733__auto___26765,out){
return (function (p1__26656_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26656_SHARP_);
});
;})(c,v,vec__26718,cs,inst_26722,inst_26713,inst_26721,inst_26720,state_val_26742,c__11733__auto___26765,out))
})();
var inst_26726 = cljs.core.filterv(inst_26725,inst_26713);
var inst_26713__$1 = inst_26726;
var state_26741__$1 = (function (){var statearr_26756 = state_26741;
(statearr_26756[(10)] = inst_26713__$1);

return statearr_26756;
})();
var statearr_26757_26775 = state_26741__$1;
(statearr_26757_26775[(2)] = null);

(statearr_26757_26775[(1)] = (2));


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
}
}
}
}
});})(c__11733__auto___26765,out))
;
return ((function (switch__11653__auto__,c__11733__auto___26765,out){
return (function() {
var state_machine__11654__auto__ = null;
var state_machine__11654__auto____0 = (function (){
var statearr_26761 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26761[(0)] = state_machine__11654__auto__);

(statearr_26761[(1)] = (1));

return statearr_26761;
});
var state_machine__11654__auto____1 = (function (state_26741){
while(true){
var ret_value__11655__auto__ = (function (){try{while(true){
var result__11656__auto__ = switch__11653__auto__(state_26741);
if(cljs.core.keyword_identical_QMARK_(result__11656__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11656__auto__;
}
break;
}
}catch (e26762){if((e26762 instanceof Object)){
var ex__11657__auto__ = e26762;
var statearr_26763_26776 = state_26741;
(statearr_26763_26776[(5)] = ex__11657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26741);

return cljs.core.constant$keyword$65;
} else {
throw e26762;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11655__auto__,cljs.core.constant$keyword$65)){
var G__26777 = state_26741;
state_26741 = G__26777;
continue;
} else {
return ret_value__11655__auto__;
}
break;
}
});
state_machine__11654__auto__ = function(state_26741){
switch(arguments.length){
case 0:
return state_machine__11654__auto____0.call(this);
case 1:
return state_machine__11654__auto____1.call(this,state_26741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11654__auto____0;
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11654__auto____1;
return state_machine__11654__auto__;
})()
;})(switch__11653__auto__,c__11733__auto___26765,out))
})();
var state__11735__auto__ = (function (){var statearr_26764 = (function (){return (f__11734__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11734__auto__.cljs$core$IFn$_invoke$arity$0() : f__11734__auto__.call(null));
})();
(statearr_26764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11733__auto___26765);

return statearr_26764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11735__auto__);
});})(c__11733__auto___26765,out))
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
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11733__auto___26873 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11733__auto___26873,out){
return (function (){
var f__11734__auto__ = (function (){var switch__11653__auto__ = ((function (c__11733__auto___26873,out){
return (function (state_26850){
var state_val_26851 = (state_26850[(1)]);
if((state_val_26851 === (7))){
var inst_26832 = (state_26850[(7)]);
var inst_26832__$1 = (state_26850[(2)]);
var inst_26833 = (inst_26832__$1 == null);
var inst_26834 = cljs.core.not(inst_26833);
var state_26850__$1 = (function (){var statearr_26852 = state_26850;
(statearr_26852[(7)] = inst_26832__$1);

return statearr_26852;
})();
if(inst_26834){
var statearr_26853_26874 = state_26850__$1;
(statearr_26853_26874[(1)] = (8));

} else {
var statearr_26854_26875 = state_26850__$1;
(statearr_26854_26875[(1)] = (9));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_26851 === (1))){
var inst_26827 = (0);
var state_26850__$1 = (function (){var statearr_26855 = state_26850;
(statearr_26855[(8)] = inst_26827);

return statearr_26855;
})();
var statearr_26856_26876 = state_26850__$1;
(statearr_26856_26876[(2)] = null);

(statearr_26856_26876[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26851 === (4))){
var state_26850__$1 = state_26850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26850__$1,(7),ch);
} else {
if((state_val_26851 === (6))){
var inst_26845 = (state_26850[(2)]);
var state_26850__$1 = state_26850;
var statearr_26857_26877 = state_26850__$1;
(statearr_26857_26877[(2)] = inst_26845);

(statearr_26857_26877[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26851 === (3))){
var inst_26847 = (state_26850[(2)]);
var inst_26848 = cljs.core.async.close_BANG_(out);
var state_26850__$1 = (function (){var statearr_26858 = state_26850;
(statearr_26858[(9)] = inst_26847);

return statearr_26858;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26850__$1,inst_26848);
} else {
if((state_val_26851 === (2))){
var inst_26827 = (state_26850[(8)]);
var inst_26829 = (inst_26827 < n);
var state_26850__$1 = state_26850;
if(cljs.core.truth_(inst_26829)){
var statearr_26859_26878 = state_26850__$1;
(statearr_26859_26878[(1)] = (4));

} else {
var statearr_26860_26879 = state_26850__$1;
(statearr_26860_26879[(1)] = (5));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_26851 === (11))){
var inst_26827 = (state_26850[(8)]);
var inst_26837 = (state_26850[(2)]);
var inst_26838 = (inst_26827 + (1));
var inst_26827__$1 = inst_26838;
var state_26850__$1 = (function (){var statearr_26861 = state_26850;
(statearr_26861[(8)] = inst_26827__$1);

(statearr_26861[(10)] = inst_26837);

return statearr_26861;
})();
var statearr_26862_26880 = state_26850__$1;
(statearr_26862_26880[(2)] = null);

(statearr_26862_26880[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26851 === (9))){
var state_26850__$1 = state_26850;
var statearr_26863_26881 = state_26850__$1;
(statearr_26863_26881[(2)] = null);

(statearr_26863_26881[(1)] = (10));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26851 === (5))){
var state_26850__$1 = state_26850;
var statearr_26864_26882 = state_26850__$1;
(statearr_26864_26882[(2)] = null);

(statearr_26864_26882[(1)] = (6));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26851 === (10))){
var inst_26842 = (state_26850[(2)]);
var state_26850__$1 = state_26850;
var statearr_26865_26883 = state_26850__$1;
(statearr_26865_26883[(2)] = inst_26842);

(statearr_26865_26883[(1)] = (6));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26851 === (8))){
var inst_26832 = (state_26850[(7)]);
var state_26850__$1 = state_26850;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26850__$1,(11),out,inst_26832);
} else {
return null;
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
});})(c__11733__auto___26873,out))
;
return ((function (switch__11653__auto__,c__11733__auto___26873,out){
return (function() {
var state_machine__11654__auto__ = null;
var state_machine__11654__auto____0 = (function (){
var statearr_26869 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26869[(0)] = state_machine__11654__auto__);

(statearr_26869[(1)] = (1));

return statearr_26869;
});
var state_machine__11654__auto____1 = (function (state_26850){
while(true){
var ret_value__11655__auto__ = (function (){try{while(true){
var result__11656__auto__ = switch__11653__auto__(state_26850);
if(cljs.core.keyword_identical_QMARK_(result__11656__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11656__auto__;
}
break;
}
}catch (e26870){if((e26870 instanceof Object)){
var ex__11657__auto__ = e26870;
var statearr_26871_26884 = state_26850;
(statearr_26871_26884[(5)] = ex__11657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26850);

return cljs.core.constant$keyword$65;
} else {
throw e26870;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11655__auto__,cljs.core.constant$keyword$65)){
var G__26885 = state_26850;
state_26850 = G__26885;
continue;
} else {
return ret_value__11655__auto__;
}
break;
}
});
state_machine__11654__auto__ = function(state_26850){
switch(arguments.length){
case 0:
return state_machine__11654__auto____0.call(this);
case 1:
return state_machine__11654__auto____1.call(this,state_26850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11654__auto____0;
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11654__auto____1;
return state_machine__11654__auto__;
})()
;})(switch__11653__auto__,c__11733__auto___26873,out))
})();
var state__11735__auto__ = (function (){var statearr_26872 = (function (){return (f__11734__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11734__auto__.cljs$core$IFn$_invoke$arity$0() : f__11734__auto__.call(null));
})();
(statearr_26872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11733__auto___26873);

return statearr_26872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11735__auto__);
});})(c__11733__auto___26873,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t26898 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26898 = (function (ch,f,map_LT_,meta26899){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26899 = meta26899;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26898.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26898.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t26898.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26898.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t26901 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26901 = (function (fn1,_,meta26899,map_LT_,f,ch,meta26902){
this.fn1 = fn1;
this._ = _;
this.meta26899 = meta26899;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26902 = meta26902;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26901.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26901.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t26901.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26886_SHARP_){
var G__26904 = (((p1__26886_SHARP_ == null))?null:(function (){var G__26905 = p1__26886_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26905) : self__.f.call(null,G__26905));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__26904) : f1.call(null,G__26904));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t26901.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26903){
var self__ = this;
var _26903__$1 = this;
return self__.meta26902;
});})(___$1))
;

cljs.core.async.t26901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26903,meta26902__$1){
var self__ = this;
var _26903__$1 = this;
return (new cljs.core.async.t26901(self__.fn1,self__._,self__.meta26899,self__.map_LT_,self__.f,self__.ch,meta26902__$1));
});})(___$1))
;

cljs.core.async.t26901.cljs$lang$type = true;

cljs.core.async.t26901.cljs$lang$ctorStr = "cljs.core.async/t26901";

cljs.core.async.t26901.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4337__auto__,writer__4338__auto__,opt__4339__auto__){
return cljs.core._write(writer__4338__auto__,"cljs.core.async/t26901");
});})(___$1))
;

cljs.core.async.__GT_t26901 = ((function (___$1){
return (function __GT_t26901(fn1__$1,___$2,meta26899__$1,map_LT___$1,f__$1,ch__$1,meta26902){
return (new cljs.core.async.t26901(fn1__$1,___$2,meta26899__$1,map_LT___$1,f__$1,ch__$1,meta26902));
});})(___$1))
;

}

return (new cljs.core.async.t26901(fn1,___$1,self__.meta26899,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,737,cljs.core.constant$keyword$10,10,cljs.core.constant$keyword$11,731,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3738__auto__ = ret;
if(cljs.core.truth_(and__3738__auto__)){
return !(((function (){var G__26906 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26906) : cljs.core.deref.call(null,G__26906));
})() == null));
} else {
return and__3738__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__26907 = (function (){var G__26908 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26908) : cljs.core.deref.call(null,G__26908));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26907) : self__.f.call(null,G__26907));
})());
} else {
return ret;
}
});

cljs.core.async.t26898.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26898.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t26898.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t26898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26900){
var self__ = this;
var _26900__$1 = this;
return self__.meta26899;
});

cljs.core.async.t26898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26900,meta26899__$1){
var self__ = this;
var _26900__$1 = this;
return (new cljs.core.async.t26898(self__.ch,self__.f,self__.map_LT_,meta26899__$1));
});

cljs.core.async.t26898.cljs$lang$type = true;

cljs.core.async.t26898.cljs$lang$ctorStr = "cljs.core.async/t26898";

cljs.core.async.t26898.cljs$lang$ctorPrWriter = (function (this__4337__auto__,writer__4338__auto__,opt__4339__auto__){
return cljs.core._write(writer__4338__auto__,"cljs.core.async/t26898");
});

cljs.core.async.__GT_t26898 = (function __GT_t26898(ch__$1,f__$1,map_LT___$1,meta26899){
return (new cljs.core.async.t26898(ch__$1,f__$1,map_LT___$1,meta26899));
});

}

return (new cljs.core.async.t26898(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,743,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,722,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t26913 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26913 = (function (ch,f,map_GT_,meta26914){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta26914 = meta26914;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26913.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26913.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__26916 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26916) : self__.f.call(null,G__26916));
})(),fn1);
});

cljs.core.async.t26913.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26913.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t26913.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26913.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t26913.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26915){
var self__ = this;
var _26915__$1 = this;
return self__.meta26914;
});

cljs.core.async.t26913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26915,meta26914__$1){
var self__ = this;
var _26915__$1 = this;
return (new cljs.core.async.t26913(self__.ch,self__.f,self__.map_GT_,meta26914__$1));
});

cljs.core.async.t26913.cljs$lang$type = true;

cljs.core.async.t26913.cljs$lang$ctorStr = "cljs.core.async/t26913";

cljs.core.async.t26913.cljs$lang$ctorPrWriter = (function (this__4337__auto__,writer__4338__auto__,opt__4339__auto__){
return cljs.core._write(writer__4338__auto__,"cljs.core.async/t26913");
});

cljs.core.async.__GT_t26913 = (function __GT_t26913(ch__$1,f__$1,map_GT___$1,meta26914){
return (new cljs.core.async.t26913(ch__$1,f__$1,map_GT___$1,meta26914));
});

}

return (new cljs.core.async.t26913(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,34,cljs.core.constant$keyword$9,757,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,748,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t26921 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26921 = (function (ch,p,filter_GT_,meta26922){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta26922 = meta26922;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26921.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26921.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__26924 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__26924) : self__.p.call(null,G__26924));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t26921.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26921.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t26921.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26921.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t26921.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t26921.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26923){
var self__ = this;
var _26923__$1 = this;
return self__.meta26922;
});

cljs.core.async.t26921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26923,meta26922__$1){
var self__ = this;
var _26923__$1 = this;
return (new cljs.core.async.t26921(self__.ch,self__.p,self__.filter_GT_,meta26922__$1));
});

cljs.core.async.t26921.cljs$lang$type = true;

cljs.core.async.t26921.cljs$lang$ctorStr = "cljs.core.async/t26921";

cljs.core.async.t26921.cljs$lang$ctorPrWriter = (function (this__4337__auto__,writer__4338__auto__,opt__4339__auto__){
return cljs.core._write(writer__4338__auto__,"cljs.core.async/t26921");
});

cljs.core.async.__GT_t26921 = (function __GT_t26921(ch__$1,p__$1,filter_GT___$1,meta26922){
return (new cljs.core.async.t26921(ch__$1,p__$1,filter_GT___$1,meta26922));
});

}

return (new cljs.core.async.t26921(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,774,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,762,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11733__auto___27012 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11733__auto___27012,out){
return (function (){
var f__11734__auto__ = (function (){var switch__11653__auto__ = ((function (c__11733__auto___27012,out){
return (function (state_26990){
var state_val_26991 = (state_26990[(1)]);
if((state_val_26991 === (7))){
var inst_26986 = (state_26990[(2)]);
var state_26990__$1 = state_26990;
var statearr_26992_27013 = state_26990__$1;
(statearr_26992_27013[(2)] = inst_26986);

(statearr_26992_27013[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26991 === (1))){
var state_26990__$1 = state_26990;
var statearr_26993_27014 = state_26990__$1;
(statearr_26993_27014[(2)] = null);

(statearr_26993_27014[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26991 === (4))){
var inst_26972 = (state_26990[(7)]);
var inst_26972__$1 = (state_26990[(2)]);
var inst_26973 = (inst_26972__$1 == null);
var state_26990__$1 = (function (){var statearr_26994 = state_26990;
(statearr_26994[(7)] = inst_26972__$1);

return statearr_26994;
})();
if(cljs.core.truth_(inst_26973)){
var statearr_26995_27015 = state_26990__$1;
(statearr_26995_27015[(1)] = (5));

} else {
var statearr_26996_27016 = state_26990__$1;
(statearr_26996_27016[(1)] = (6));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_26991 === (6))){
var inst_26972 = (state_26990[(7)]);
var inst_26977 = (function (){var G__26997 = inst_26972;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__26997) : p.call(null,G__26997));
})();
var state_26990__$1 = state_26990;
if(cljs.core.truth_(inst_26977)){
var statearr_26998_27017 = state_26990__$1;
(statearr_26998_27017[(1)] = (8));

} else {
var statearr_26999_27018 = state_26990__$1;
(statearr_26999_27018[(1)] = (9));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_26991 === (3))){
var inst_26988 = (state_26990[(2)]);
var state_26990__$1 = state_26990;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26990__$1,inst_26988);
} else {
if((state_val_26991 === (2))){
var state_26990__$1 = state_26990;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26990__$1,(4),ch);
} else {
if((state_val_26991 === (11))){
var inst_26980 = (state_26990[(2)]);
var state_26990__$1 = state_26990;
var statearr_27000_27019 = state_26990__$1;
(statearr_27000_27019[(2)] = inst_26980);

(statearr_27000_27019[(1)] = (10));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26991 === (9))){
var state_26990__$1 = state_26990;
var statearr_27001_27020 = state_26990__$1;
(statearr_27001_27020[(2)] = null);

(statearr_27001_27020[(1)] = (10));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26991 === (5))){
var inst_26975 = cljs.core.async.close_BANG_(out);
var state_26990__$1 = state_26990;
var statearr_27002_27021 = state_26990__$1;
(statearr_27002_27021[(2)] = inst_26975);

(statearr_27002_27021[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26991 === (10))){
var inst_26983 = (state_26990[(2)]);
var state_26990__$1 = (function (){var statearr_27003 = state_26990;
(statearr_27003[(8)] = inst_26983);

return statearr_27003;
})();
var statearr_27004_27022 = state_26990__$1;
(statearr_27004_27022[(2)] = null);

(statearr_27004_27022[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26991 === (8))){
var inst_26972 = (state_26990[(7)]);
var state_26990__$1 = state_26990;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26990__$1,(11),out,inst_26972);
} else {
return null;
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
});})(c__11733__auto___27012,out))
;
return ((function (switch__11653__auto__,c__11733__auto___27012,out){
return (function() {
var state_machine__11654__auto__ = null;
var state_machine__11654__auto____0 = (function (){
var statearr_27008 = [null,null,null,null,null,null,null,null,null];
(statearr_27008[(0)] = state_machine__11654__auto__);

(statearr_27008[(1)] = (1));

return statearr_27008;
});
var state_machine__11654__auto____1 = (function (state_26990){
while(true){
var ret_value__11655__auto__ = (function (){try{while(true){
var result__11656__auto__ = switch__11653__auto__(state_26990);
if(cljs.core.keyword_identical_QMARK_(result__11656__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11656__auto__;
}
break;
}
}catch (e27009){if((e27009 instanceof Object)){
var ex__11657__auto__ = e27009;
var statearr_27010_27023 = state_26990;
(statearr_27010_27023[(5)] = ex__11657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26990);

return cljs.core.constant$keyword$65;
} else {
throw e27009;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11655__auto__,cljs.core.constant$keyword$65)){
var G__27024 = state_26990;
state_26990 = G__27024;
continue;
} else {
return ret_value__11655__auto__;
}
break;
}
});
state_machine__11654__auto__ = function(state_26990){
switch(arguments.length){
case 0:
return state_machine__11654__auto____0.call(this);
case 1:
return state_machine__11654__auto____1.call(this,state_26990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11654__auto____0;
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11654__auto____1;
return state_machine__11654__auto__;
})()
;})(switch__11653__auto__,c__11733__auto___27012,out))
})();
var state__11735__auto__ = (function (){var statearr_27011 = (function (){return (f__11734__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11734__auto__.cljs$core$IFn$_invoke$arity$0() : f__11734__auto__.call(null));
})();
(statearr_27011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11733__auto___27012);

return statearr_27011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11735__auto__);
});})(c__11733__auto___27012,out))
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
var remove_LT___2 = (function (p,ch){
return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__11733__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11733__auto__){
return (function (){
var f__11734__auto__ = (function (){var switch__11653__auto__ = ((function (c__11733__auto__){
return (function (state_27194){
var state_val_27195 = (state_27194[(1)]);
if((state_val_27195 === (7))){
var inst_27190 = (state_27194[(2)]);
var state_27194__$1 = state_27194;
var statearr_27196_27238 = state_27194__$1;
(statearr_27196_27238[(2)] = inst_27190);

(statearr_27196_27238[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_27195 === (20))){
var inst_27160 = (state_27194[(7)]);
var inst_27171 = (state_27194[(2)]);
var inst_27172 = cljs.core.next(inst_27160);
var inst_27146 = inst_27172;
var inst_27147 = null;
var inst_27148 = (0);
var inst_27149 = (0);
var state_27194__$1 = (function (){var statearr_27197 = state_27194;
(statearr_27197[(8)] = inst_27148);

(statearr_27197[(9)] = inst_27146);

(statearr_27197[(10)] = inst_27149);

(statearr_27197[(11)] = inst_27171);

(statearr_27197[(12)] = inst_27147);

return statearr_27197;
})();
var statearr_27198_27239 = state_27194__$1;
(statearr_27198_27239[(2)] = null);

(statearr_27198_27239[(1)] = (8));


return cljs.core.constant$keyword$65;
} else {
if((state_val_27195 === (1))){
var state_27194__$1 = state_27194;
var statearr_27199_27240 = state_27194__$1;
(statearr_27199_27240[(2)] = null);

(statearr_27199_27240[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_27195 === (4))){
var inst_27135 = (state_27194[(13)]);
var inst_27135__$1 = (state_27194[(2)]);
var inst_27136 = (inst_27135__$1 == null);
var state_27194__$1 = (function (){var statearr_27200 = state_27194;
(statearr_27200[(13)] = inst_27135__$1);

return statearr_27200;
})();
if(cljs.core.truth_(inst_27136)){
var statearr_27201_27241 = state_27194__$1;
(statearr_27201_27241[(1)] = (5));

} else {
var statearr_27202_27242 = state_27194__$1;
(statearr_27202_27242[(1)] = (6));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_27195 === (15))){
var state_27194__$1 = state_27194;
var statearr_27206_27243 = state_27194__$1;
(statearr_27206_27243[(2)] = null);

(statearr_27206_27243[(1)] = (16));


return cljs.core.constant$keyword$65;
} else {
if((state_val_27195 === (21))){
var state_27194__$1 = state_27194;
var statearr_27207_27244 = state_27194__$1;
(statearr_27207_27244[(2)] = null);

(statearr_27207_27244[(1)] = (23));


return cljs.core.constant$keyword$65;
} else {
if((state_val_27195 === (13))){
var inst_27148 = (state_27194[(8)]);
var inst_27146 = (state_27194[(9)]);
var inst_27149 = (state_27194[(10)]);
var inst_27147 = (state_27194[(12)]);
var inst_27156 = (state_27194[(2)]);
var inst_27157 = (inst_27149 + (1));
var tmp27203 = inst_27148;
var tmp27204 = inst_27146;
var tmp27205 = inst_27147;
var inst_27146__$1 = tmp27204;
var inst_27147__$1 = tmp27205;
var inst_27148__$1 = tmp27203;
var inst_27149__$1 = inst_27157;
var state_27194__$1 = (function (){var statearr_27208 = state_27194;
(statearr_27208[(8)] = inst_27148__$1);

(statearr_27208[(9)] = inst_27146__$1);

(statearr_27208[(10)] = inst_27149__$1);

(statearr_27208[(12)] = inst_27147__$1);

(statearr_27208[(14)] = inst_27156);

return statearr_27208;
})();
var statearr_27209_27245 = state_27194__$1;
(statearr_27209_27245[(2)] = null);

(statearr_27209_27245[(1)] = (8));


return cljs.core.constant$keyword$65;
} else {
if((state_val_27195 === (22))){
var state_27194__$1 = state_27194;
var statearr_27210_27246 = state_27194__$1;
(statearr_27210_27246[(2)] = null);

(statearr_27210_27246[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_27195 === (6))){
var inst_27135 = (state_27194[(13)]);
var inst_27144 = (function (){var G__27211 = inst_27135;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27211) : f.call(null,G__27211));
})();
var inst_27145 = cljs.core.seq(inst_27144);
var inst_27146 = inst_27145;
var inst_27147 = null;
var inst_27148 = (0);
var inst_27149 = (0);
var state_27194__$1 = (function (){var statearr_27212 = state_27194;
(statearr_27212[(8)] = inst_27148);

(statearr_27212[(9)] = inst_27146);

(statearr_27212[(10)] = inst_27149);

(statearr_27212[(12)] = inst_27147);

return statearr_27212;
})();
var statearr_27213_27247 = state_27194__$1;
(statearr_27213_27247[(2)] = null);

(statearr_27213_27247[(1)] = (8));


return cljs.core.constant$keyword$65;
} else {
if((state_val_27195 === (17))){
var inst_27160 = (state_27194[(7)]);
var inst_27164 = cljs.core.chunk_first(inst_27160);
var inst_27165 = cljs.core.chunk_rest(inst_27160);
var inst_27166 = cljs.core.count(inst_27164);
var inst_27146 = inst_27165;
var inst_27147 = inst_27164;
var inst_27148 = inst_27166;
var inst_27149 = (0);
var state_27194__$1 = (function (){var statearr_27214 = state_27194;
(statearr_27214[(8)] = inst_27148);

(statearr_27214[(9)] = inst_27146);

(statearr_27214[(10)] = inst_27149);

(statearr_27214[(12)] = inst_27147);

return statearr_27214;
})();
var statearr_27215_27248 = state_27194__$1;
(statearr_27215_27248[(2)] = null);

(statearr_27215_27248[(1)] = (8));


return cljs.core.constant$keyword$65;
} else {
if((state_val_27195 === (3))){
var inst_27192 = (state_27194[(2)]);
var state_27194__$1 = state_27194;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27194__$1,inst_27192);
} else {
if((state_val_27195 === (12))){
var inst_27180 = (state_27194[(2)]);
var state_27194__$1 = state_27194;
var statearr_27216_27249 = state_27194__$1;
(statearr_27216_27249[(2)] = inst_27180);

(statearr_27216_27249[(1)] = (9));


return cljs.core.constant$keyword$65;
} else {
if((state_val_27195 === (2))){
var state_27194__$1 = state_27194;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27194__$1,(4),in$);
} else {
if((state_val_27195 === (23))){
var inst_27188 = (state_27194[(2)]);
var state_27194__$1 = state_27194;
var statearr_27217_27250 = state_27194__$1;
(statearr_27217_27250[(2)] = inst_27188);

(statearr_27217_27250[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_27195 === (19))){
var inst_27175 = (state_27194[(2)]);
var state_27194__$1 = state_27194;
var statearr_27218_27251 = state_27194__$1;
(statearr_27218_27251[(2)] = inst_27175);

(statearr_27218_27251[(1)] = (16));


return cljs.core.constant$keyword$65;
} else {
if((state_val_27195 === (11))){
var inst_27160 = (state_27194[(7)]);
var inst_27146 = (state_27194[(9)]);
var inst_27160__$1 = cljs.core.seq(inst_27146);
var state_27194__$1 = (function (){var statearr_27219 = state_27194;
(statearr_27219[(7)] = inst_27160__$1);

return statearr_27219;
})();
if(inst_27160__$1){
var statearr_27220_27252 = state_27194__$1;
(statearr_27220_27252[(1)] = (14));

} else {
var statearr_27221_27253 = state_27194__$1;
(statearr_27221_27253[(1)] = (15));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_27195 === (9))){
var inst_27182 = (state_27194[(2)]);
var inst_27183 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_27194__$1 = (function (){var statearr_27222 = state_27194;
(statearr_27222[(15)] = inst_27182);

return statearr_27222;
})();
if(cljs.core.truth_(inst_27183)){
var statearr_27223_27254 = state_27194__$1;
(statearr_27223_27254[(1)] = (21));

} else {
var statearr_27224_27255 = state_27194__$1;
(statearr_27224_27255[(1)] = (22));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_27195 === (5))){
var inst_27138 = cljs.core.async.close_BANG_(out);
var state_27194__$1 = state_27194;
var statearr_27225_27256 = state_27194__$1;
(statearr_27225_27256[(2)] = inst_27138);

(statearr_27225_27256[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_27195 === (14))){
var inst_27160 = (state_27194[(7)]);
var inst_27162 = cljs.core.chunked_seq_QMARK_(inst_27160);
var state_27194__$1 = state_27194;
if(inst_27162){
var statearr_27226_27257 = state_27194__$1;
(statearr_27226_27257[(1)] = (17));

} else {
var statearr_27227_27258 = state_27194__$1;
(statearr_27227_27258[(1)] = (18));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_27195 === (16))){
var inst_27178 = (state_27194[(2)]);
var state_27194__$1 = state_27194;
var statearr_27228_27259 = state_27194__$1;
(statearr_27228_27259[(2)] = inst_27178);

(statearr_27228_27259[(1)] = (12));


return cljs.core.constant$keyword$65;
} else {
if((state_val_27195 === (10))){
var inst_27149 = (state_27194[(10)]);
var inst_27147 = (state_27194[(12)]);
var inst_27154 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_27147,inst_27149);
var state_27194__$1 = state_27194;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27194__$1,(13),out,inst_27154);
} else {
if((state_val_27195 === (18))){
var inst_27160 = (state_27194[(7)]);
var inst_27169 = cljs.core.first(inst_27160);
var state_27194__$1 = state_27194;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27194__$1,(20),out,inst_27169);
} else {
if((state_val_27195 === (8))){
var inst_27148 = (state_27194[(8)]);
var inst_27149 = (state_27194[(10)]);
var inst_27151 = (inst_27149 < inst_27148);
var inst_27152 = inst_27151;
var state_27194__$1 = state_27194;
if(cljs.core.truth_(inst_27152)){
var statearr_27229_27260 = state_27194__$1;
(statearr_27229_27260[(1)] = (10));

} else {
var statearr_27230_27261 = state_27194__$1;
(statearr_27230_27261[(1)] = (11));

}

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
});})(c__11733__auto__))
;
return ((function (switch__11653__auto__,c__11733__auto__){
return (function() {
var state_machine__11654__auto__ = null;
var state_machine__11654__auto____0 = (function (){
var statearr_27234 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27234[(0)] = state_machine__11654__auto__);

(statearr_27234[(1)] = (1));

return statearr_27234;
});
var state_machine__11654__auto____1 = (function (state_27194){
while(true){
var ret_value__11655__auto__ = (function (){try{while(true){
var result__11656__auto__ = switch__11653__auto__(state_27194);
if(cljs.core.keyword_identical_QMARK_(result__11656__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11656__auto__;
}
break;
}
}catch (e27235){if((e27235 instanceof Object)){
var ex__11657__auto__ = e27235;
var statearr_27236_27262 = state_27194;
(statearr_27236_27262[(5)] = ex__11657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27194);

return cljs.core.constant$keyword$65;
} else {
throw e27235;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11655__auto__,cljs.core.constant$keyword$65)){
var G__27263 = state_27194;
state_27194 = G__27263;
continue;
} else {
return ret_value__11655__auto__;
}
break;
}
});
state_machine__11654__auto__ = function(state_27194){
switch(arguments.length){
case 0:
return state_machine__11654__auto____0.call(this);
case 1:
return state_machine__11654__auto____1.call(this,state_27194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11654__auto____0;
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11654__auto____1;
return state_machine__11654__auto__;
})()
;})(switch__11653__auto__,c__11733__auto__))
})();
var state__11735__auto__ = (function (){var statearr_27237 = (function (){return (f__11734__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11734__auto__.cljs$core$IFn$_invoke$arity$0() : f__11734__auto__.call(null));
})();
(statearr_27237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11733__auto__);

return statearr_27237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11735__auto__);
});})(c__11733__auto__))
);

return c__11733__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

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
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

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
var unique__1 = (function (ch){
return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11733__auto___27368 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11733__auto___27368,out){
return (function (){
var f__11734__auto__ = (function (){var switch__11653__auto__ = ((function (c__11733__auto___27368,out){
return (function (state_27343){
var state_val_27344 = (state_27343[(1)]);
if((state_val_27344 === (7))){
var inst_27338 = (state_27343[(2)]);
var state_27343__$1 = state_27343;
var statearr_27345_27369 = state_27343__$1;
(statearr_27345_27369[(2)] = inst_27338);

(statearr_27345_27369[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_27344 === (1))){
var inst_27320 = null;
var state_27343__$1 = (function (){var statearr_27346 = state_27343;
(statearr_27346[(7)] = inst_27320);

return statearr_27346;
})();
var statearr_27347_27370 = state_27343__$1;
(statearr_27347_27370[(2)] = null);

(statearr_27347_27370[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_27344 === (4))){
var inst_27323 = (state_27343[(8)]);
var inst_27323__$1 = (state_27343[(2)]);
var inst_27324 = (inst_27323__$1 == null);
var inst_27325 = cljs.core.not(inst_27324);
var state_27343__$1 = (function (){var statearr_27348 = state_27343;
(statearr_27348[(8)] = inst_27323__$1);

return statearr_27348;
})();
if(inst_27325){
var statearr_27349_27371 = state_27343__$1;
(statearr_27349_27371[(1)] = (5));

} else {
var statearr_27350_27372 = state_27343__$1;
(statearr_27350_27372[(1)] = (6));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_27344 === (6))){
var state_27343__$1 = state_27343;
var statearr_27351_27373 = state_27343__$1;
(statearr_27351_27373[(2)] = null);

(statearr_27351_27373[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_27344 === (3))){
var inst_27340 = (state_27343[(2)]);
var inst_27341 = cljs.core.async.close_BANG_(out);
var state_27343__$1 = (function (){var statearr_27352 = state_27343;
(statearr_27352[(9)] = inst_27340);

return statearr_27352;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27343__$1,inst_27341);
} else {
if((state_val_27344 === (2))){
var state_27343__$1 = state_27343;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27343__$1,(4),ch);
} else {
if((state_val_27344 === (11))){
var inst_27323 = (state_27343[(8)]);
var inst_27332 = (state_27343[(2)]);
var inst_27320 = inst_27323;
var state_27343__$1 = (function (){var statearr_27353 = state_27343;
(statearr_27353[(7)] = inst_27320);

(statearr_27353[(10)] = inst_27332);

return statearr_27353;
})();
var statearr_27354_27374 = state_27343__$1;
(statearr_27354_27374[(2)] = null);

(statearr_27354_27374[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_27344 === (9))){
var inst_27323 = (state_27343[(8)]);
var state_27343__$1 = state_27343;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27343__$1,(11),out,inst_27323);
} else {
if((state_val_27344 === (5))){
var inst_27320 = (state_27343[(7)]);
var inst_27323 = (state_27343[(8)]);
var inst_27327 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27323,inst_27320);
var state_27343__$1 = state_27343;
if(inst_27327){
var statearr_27356_27375 = state_27343__$1;
(statearr_27356_27375[(1)] = (8));

} else {
var statearr_27357_27376 = state_27343__$1;
(statearr_27357_27376[(1)] = (9));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_27344 === (10))){
var inst_27335 = (state_27343[(2)]);
var state_27343__$1 = state_27343;
var statearr_27358_27377 = state_27343__$1;
(statearr_27358_27377[(2)] = inst_27335);

(statearr_27358_27377[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_27344 === (8))){
var inst_27320 = (state_27343[(7)]);
var tmp27355 = inst_27320;
var inst_27320__$1 = tmp27355;
var state_27343__$1 = (function (){var statearr_27359 = state_27343;
(statearr_27359[(7)] = inst_27320__$1);

return statearr_27359;
})();
var statearr_27360_27378 = state_27343__$1;
(statearr_27360_27378[(2)] = null);

(statearr_27360_27378[(1)] = (2));


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
}
}
}
}
});})(c__11733__auto___27368,out))
;
return ((function (switch__11653__auto__,c__11733__auto___27368,out){
return (function() {
var state_machine__11654__auto__ = null;
var state_machine__11654__auto____0 = (function (){
var statearr_27364 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27364[(0)] = state_machine__11654__auto__);

(statearr_27364[(1)] = (1));

return statearr_27364;
});
var state_machine__11654__auto____1 = (function (state_27343){
while(true){
var ret_value__11655__auto__ = (function (){try{while(true){
var result__11656__auto__ = switch__11653__auto__(state_27343);
if(cljs.core.keyword_identical_QMARK_(result__11656__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11656__auto__;
}
break;
}
}catch (e27365){if((e27365 instanceof Object)){
var ex__11657__auto__ = e27365;
var statearr_27366_27379 = state_27343;
(statearr_27366_27379[(5)] = ex__11657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27343);

return cljs.core.constant$keyword$65;
} else {
throw e27365;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11655__auto__,cljs.core.constant$keyword$65)){
var G__27380 = state_27343;
state_27343 = G__27380;
continue;
} else {
return ret_value__11655__auto__;
}
break;
}
});
state_machine__11654__auto__ = function(state_27343){
switch(arguments.length){
case 0:
return state_machine__11654__auto____0.call(this);
case 1:
return state_machine__11654__auto____1.call(this,state_27343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11654__auto____0;
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11654__auto____1;
return state_machine__11654__auto__;
})()
;})(switch__11653__auto__,c__11733__auto___27368,out))
})();
var state__11735__auto__ = (function (){var statearr_27367 = (function (){return (f__11734__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11734__auto__.cljs$core$IFn$_invoke$arity$0() : f__11734__auto__.call(null));
})();
(statearr_27367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11733__auto___27368);

return statearr_27367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11735__auto__);
});})(c__11733__auto___27368,out))
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
var partition__2 = (function (n,ch){
return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11733__auto___27518 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11733__auto___27518,out){
return (function (){
var f__11734__auto__ = (function (){var switch__11653__auto__ = ((function (c__11733__auto___27518,out){
return (function (state_27488){
var state_val_27489 = (state_27488[(1)]);
if((state_val_27489 === (7))){
var inst_27484 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
var statearr_27490_27519 = state_27488__$1;
(statearr_27490_27519[(2)] = inst_27484);

(statearr_27490_27519[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_27489 === (1))){
var inst_27451 = (new Array(n));
var inst_27452 = inst_27451;
var inst_27453 = (0);
var state_27488__$1 = (function (){var statearr_27491 = state_27488;
(statearr_27491[(7)] = inst_27452);

(statearr_27491[(8)] = inst_27453);

return statearr_27491;
})();
var statearr_27492_27520 = state_27488__$1;
(statearr_27492_27520[(2)] = null);

(statearr_27492_27520[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_27489 === (4))){
var inst_27456 = (state_27488[(9)]);
var inst_27456__$1 = (state_27488[(2)]);
var inst_27457 = (inst_27456__$1 == null);
var inst_27458 = cljs.core.not(inst_27457);
var state_27488__$1 = (function (){var statearr_27493 = state_27488;
(statearr_27493[(9)] = inst_27456__$1);

return statearr_27493;
})();
if(inst_27458){
var statearr_27494_27521 = state_27488__$1;
(statearr_27494_27521[(1)] = (5));

} else {
var statearr_27495_27522 = state_27488__$1;
(statearr_27495_27522[(1)] = (6));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_27489 === (15))){
var inst_27478 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
var statearr_27496_27523 = state_27488__$1;
(statearr_27496_27523[(2)] = inst_27478);

(statearr_27496_27523[(1)] = (14));


return cljs.core.constant$keyword$65;
} else {
if((state_val_27489 === (13))){
var state_27488__$1 = state_27488;
var statearr_27497_27524 = state_27488__$1;
(statearr_27497_27524[(2)] = null);

(statearr_27497_27524[(1)] = (14));


return cljs.core.constant$keyword$65;
} else {
if((state_val_27489 === (6))){
var inst_27453 = (state_27488[(8)]);
var inst_27474 = (inst_27453 > (0));
var state_27488__$1 = state_27488;
if(cljs.core.truth_(inst_27474)){
var statearr_27498_27525 = state_27488__$1;
(statearr_27498_27525[(1)] = (12));

} else {
var statearr_27499_27526 = state_27488__$1;
(statearr_27499_27526[(1)] = (13));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_27489 === (3))){
var inst_27486 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27488__$1,inst_27486);
} else {
if((state_val_27489 === (12))){
var inst_27452 = (state_27488[(7)]);
var inst_27476 = cljs.core.vec(inst_27452);
var state_27488__$1 = state_27488;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27488__$1,(15),out,inst_27476);
} else {
if((state_val_27489 === (2))){
var state_27488__$1 = state_27488;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27488__$1,(4),ch);
} else {
if((state_val_27489 === (11))){
var inst_27468 = (state_27488[(2)]);
var inst_27469 = (new Array(n));
var inst_27452 = inst_27469;
var inst_27453 = (0);
var state_27488__$1 = (function (){var statearr_27500 = state_27488;
(statearr_27500[(10)] = inst_27468);

(statearr_27500[(7)] = inst_27452);

(statearr_27500[(8)] = inst_27453);

return statearr_27500;
})();
var statearr_27501_27527 = state_27488__$1;
(statearr_27501_27527[(2)] = null);

(statearr_27501_27527[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_27489 === (9))){
var inst_27452 = (state_27488[(7)]);
var inst_27466 = cljs.core.vec(inst_27452);
var state_27488__$1 = state_27488;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27488__$1,(11),out,inst_27466);
} else {
if((state_val_27489 === (5))){
var inst_27456 = (state_27488[(9)]);
var inst_27452 = (state_27488[(7)]);
var inst_27453 = (state_27488[(8)]);
var inst_27461 = (state_27488[(11)]);
var inst_27460 = (inst_27452[inst_27453] = inst_27456);
var inst_27461__$1 = (inst_27453 + (1));
var inst_27462 = (inst_27461__$1 < n);
var state_27488__$1 = (function (){var statearr_27502 = state_27488;
(statearr_27502[(12)] = inst_27460);

(statearr_27502[(11)] = inst_27461__$1);

return statearr_27502;
})();
if(cljs.core.truth_(inst_27462)){
var statearr_27503_27528 = state_27488__$1;
(statearr_27503_27528[(1)] = (8));

} else {
var statearr_27504_27529 = state_27488__$1;
(statearr_27504_27529[(1)] = (9));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_27489 === (14))){
var inst_27481 = (state_27488[(2)]);
var inst_27482 = cljs.core.async.close_BANG_(out);
var state_27488__$1 = (function (){var statearr_27506 = state_27488;
(statearr_27506[(13)] = inst_27481);

return statearr_27506;
})();
var statearr_27507_27530 = state_27488__$1;
(statearr_27507_27530[(2)] = inst_27482);

(statearr_27507_27530[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_27489 === (10))){
var inst_27472 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
var statearr_27508_27531 = state_27488__$1;
(statearr_27508_27531[(2)] = inst_27472);

(statearr_27508_27531[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_27489 === (8))){
var inst_27452 = (state_27488[(7)]);
var inst_27461 = (state_27488[(11)]);
var tmp27505 = inst_27452;
var inst_27452__$1 = tmp27505;
var inst_27453 = inst_27461;
var state_27488__$1 = (function (){var statearr_27509 = state_27488;
(statearr_27509[(7)] = inst_27452__$1);

(statearr_27509[(8)] = inst_27453);

return statearr_27509;
})();
var statearr_27510_27532 = state_27488__$1;
(statearr_27510_27532[(2)] = null);

(statearr_27510_27532[(1)] = (2));


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
}
}
}
}
}
}
}
}
});})(c__11733__auto___27518,out))
;
return ((function (switch__11653__auto__,c__11733__auto___27518,out){
return (function() {
var state_machine__11654__auto__ = null;
var state_machine__11654__auto____0 = (function (){
var statearr_27514 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27514[(0)] = state_machine__11654__auto__);

(statearr_27514[(1)] = (1));

return statearr_27514;
});
var state_machine__11654__auto____1 = (function (state_27488){
while(true){
var ret_value__11655__auto__ = (function (){try{while(true){
var result__11656__auto__ = switch__11653__auto__(state_27488);
if(cljs.core.keyword_identical_QMARK_(result__11656__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11656__auto__;
}
break;
}
}catch (e27515){if((e27515 instanceof Object)){
var ex__11657__auto__ = e27515;
var statearr_27516_27533 = state_27488;
(statearr_27516_27533[(5)] = ex__11657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27488);

return cljs.core.constant$keyword$65;
} else {
throw e27515;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11655__auto__,cljs.core.constant$keyword$65)){
var G__27534 = state_27488;
state_27488 = G__27534;
continue;
} else {
return ret_value__11655__auto__;
}
break;
}
});
state_machine__11654__auto__ = function(state_27488){
switch(arguments.length){
case 0:
return state_machine__11654__auto____0.call(this);
case 1:
return state_machine__11654__auto____1.call(this,state_27488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11654__auto____0;
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11654__auto____1;
return state_machine__11654__auto__;
})()
;})(switch__11653__auto__,c__11733__auto___27518,out))
})();
var state__11735__auto__ = (function (){var statearr_27517 = (function (){return (f__11734__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11734__auto__.cljs$core$IFn$_invoke$arity$0() : f__11734__auto__.call(null));
})();
(statearr_27517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11733__auto___27518);

return statearr_27517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11735__auto__);
});})(c__11733__auto___27518,out))
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
var partition_by__2 = (function (f,ch){
return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11733__auto___27682 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11733__auto___27682,out){
return (function (){
var f__11734__auto__ = (function (){var switch__11653__auto__ = ((function (c__11733__auto___27682,out){
return (function (state_27651){
var state_val_27652 = (state_27651[(1)]);
if((state_val_27652 === (7))){
var inst_27647 = (state_27651[(2)]);
var state_27651__$1 = state_27651;
var statearr_27653_27683 = state_27651__$1;
(statearr_27653_27683[(2)] = inst_27647);

(statearr_27653_27683[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_27652 === (1))){
var inst_27610 = [];
var inst_27611 = inst_27610;
var inst_27612 = cljs.core.constant$keyword$80;
var state_27651__$1 = (function (){var statearr_27654 = state_27651;
(statearr_27654[(7)] = inst_27612);

(statearr_27654[(8)] = inst_27611);

return statearr_27654;
})();
var statearr_27655_27684 = state_27651__$1;
(statearr_27655_27684[(2)] = null);

(statearr_27655_27684[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_27652 === (4))){
var inst_27615 = (state_27651[(9)]);
var inst_27615__$1 = (state_27651[(2)]);
var inst_27616 = (inst_27615__$1 == null);
var inst_27617 = cljs.core.not(inst_27616);
var state_27651__$1 = (function (){var statearr_27656 = state_27651;
(statearr_27656[(9)] = inst_27615__$1);

return statearr_27656;
})();
if(inst_27617){
var statearr_27657_27685 = state_27651__$1;
(statearr_27657_27685[(1)] = (5));

} else {
var statearr_27658_27686 = state_27651__$1;
(statearr_27658_27686[(1)] = (6));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_27652 === (15))){
var inst_27641 = (state_27651[(2)]);
var state_27651__$1 = state_27651;
var statearr_27659_27687 = state_27651__$1;
(statearr_27659_27687[(2)] = inst_27641);

(statearr_27659_27687[(1)] = (14));


return cljs.core.constant$keyword$65;
} else {
if((state_val_27652 === (13))){
var state_27651__$1 = state_27651;
var statearr_27660_27688 = state_27651__$1;
(statearr_27660_27688[(2)] = null);

(statearr_27660_27688[(1)] = (14));


return cljs.core.constant$keyword$65;
} else {
if((state_val_27652 === (6))){
var inst_27611 = (state_27651[(8)]);
var inst_27636 = inst_27611.length;
var inst_27637 = (inst_27636 > (0));
var state_27651__$1 = state_27651;
if(cljs.core.truth_(inst_27637)){
var statearr_27661_27689 = state_27651__$1;
(statearr_27661_27689[(1)] = (12));

} else {
var statearr_27662_27690 = state_27651__$1;
(statearr_27662_27690[(1)] = (13));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_27652 === (3))){
var inst_27649 = (state_27651[(2)]);
var state_27651__$1 = state_27651;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27651__$1,inst_27649);
} else {
if((state_val_27652 === (12))){
var inst_27611 = (state_27651[(8)]);
var inst_27639 = cljs.core.vec(inst_27611);
var state_27651__$1 = state_27651;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27651__$1,(15),out,inst_27639);
} else {
if((state_val_27652 === (2))){
var state_27651__$1 = state_27651;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27651__$1,(4),ch);
} else {
if((state_val_27652 === (11))){
var inst_27619 = (state_27651[(10)]);
var inst_27615 = (state_27651[(9)]);
var inst_27629 = (state_27651[(2)]);
var inst_27630 = [];
var inst_27631 = inst_27630.push(inst_27615);
var inst_27611 = inst_27630;
var inst_27612 = inst_27619;
var state_27651__$1 = (function (){var statearr_27663 = state_27651;
(statearr_27663[(7)] = inst_27612);

(statearr_27663[(11)] = inst_27631);

(statearr_27663[(8)] = inst_27611);

(statearr_27663[(12)] = inst_27629);

return statearr_27663;
})();
var statearr_27664_27691 = state_27651__$1;
(statearr_27664_27691[(2)] = null);

(statearr_27664_27691[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_27652 === (9))){
var inst_27611 = (state_27651[(8)]);
var inst_27627 = cljs.core.vec(inst_27611);
var state_27651__$1 = state_27651;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27651__$1,(11),out,inst_27627);
} else {
if((state_val_27652 === (5))){
var inst_27612 = (state_27651[(7)]);
var inst_27619 = (state_27651[(10)]);
var inst_27615 = (state_27651[(9)]);
var inst_27619__$1 = (function (){var G__27665 = inst_27615;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27665) : f.call(null,G__27665));
})();
var inst_27620 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27619__$1,inst_27612);
var inst_27621 = cljs.core.keyword_identical_QMARK_(inst_27612,cljs.core.constant$keyword$80);
var inst_27622 = (inst_27620) || (inst_27621);
var state_27651__$1 = (function (){var statearr_27666 = state_27651;
(statearr_27666[(10)] = inst_27619__$1);

return statearr_27666;
})();
if(cljs.core.truth_(inst_27622)){
var statearr_27667_27692 = state_27651__$1;
(statearr_27667_27692[(1)] = (8));

} else {
var statearr_27668_27693 = state_27651__$1;
(statearr_27668_27693[(1)] = (9));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_27652 === (14))){
var inst_27644 = (state_27651[(2)]);
var inst_27645 = cljs.core.async.close_BANG_(out);
var state_27651__$1 = (function (){var statearr_27670 = state_27651;
(statearr_27670[(13)] = inst_27644);

return statearr_27670;
})();
var statearr_27671_27694 = state_27651__$1;
(statearr_27671_27694[(2)] = inst_27645);

(statearr_27671_27694[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_27652 === (10))){
var inst_27634 = (state_27651[(2)]);
var state_27651__$1 = state_27651;
var statearr_27672_27695 = state_27651__$1;
(statearr_27672_27695[(2)] = inst_27634);

(statearr_27672_27695[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_27652 === (8))){
var inst_27619 = (state_27651[(10)]);
var inst_27615 = (state_27651[(9)]);
var inst_27611 = (state_27651[(8)]);
var inst_27624 = inst_27611.push(inst_27615);
var tmp27669 = inst_27611;
var inst_27611__$1 = tmp27669;
var inst_27612 = inst_27619;
var state_27651__$1 = (function (){var statearr_27673 = state_27651;
(statearr_27673[(14)] = inst_27624);

(statearr_27673[(7)] = inst_27612);

(statearr_27673[(8)] = inst_27611__$1);

return statearr_27673;
})();
var statearr_27674_27696 = state_27651__$1;
(statearr_27674_27696[(2)] = null);

(statearr_27674_27696[(1)] = (2));


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
}
}
}
}
}
}
}
}
});})(c__11733__auto___27682,out))
;
return ((function (switch__11653__auto__,c__11733__auto___27682,out){
return (function() {
var state_machine__11654__auto__ = null;
var state_machine__11654__auto____0 = (function (){
var statearr_27678 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27678[(0)] = state_machine__11654__auto__);

(statearr_27678[(1)] = (1));

return statearr_27678;
});
var state_machine__11654__auto____1 = (function (state_27651){
while(true){
var ret_value__11655__auto__ = (function (){try{while(true){
var result__11656__auto__ = switch__11653__auto__(state_27651);
if(cljs.core.keyword_identical_QMARK_(result__11656__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11656__auto__;
}
break;
}
}catch (e27679){if((e27679 instanceof Object)){
var ex__11657__auto__ = e27679;
var statearr_27680_27697 = state_27651;
(statearr_27680_27697[(5)] = ex__11657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27651);

return cljs.core.constant$keyword$65;
} else {
throw e27679;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11655__auto__,cljs.core.constant$keyword$65)){
var G__27698 = state_27651;
state_27651 = G__27698;
continue;
} else {
return ret_value__11655__auto__;
}
break;
}
});
state_machine__11654__auto__ = function(state_27651){
switch(arguments.length){
case 0:
return state_machine__11654__auto____0.call(this);
case 1:
return state_machine__11654__auto____1.call(this,state_27651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11654__auto____0;
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11654__auto____1;
return state_machine__11654__auto__;
})()
;})(switch__11653__auto__,c__11733__auto___27682,out))
})();
var state__11735__auto__ = (function (){var statearr_27681 = (function (){return (f__11734__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11734__auto__.cljs$core$IFn$_invoke$arity$0() : f__11734__auto__.call(null));
})();
(statearr_27681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11733__auto___27682);

return statearr_27681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11735__auto__);
});})(c__11733__auto___27682,out))
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
