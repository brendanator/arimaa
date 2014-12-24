// Compiled by ClojureScript 0.0-2511
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t22342 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22342 = (function (f,fn_handler,meta22343){
this.f = f;
this.fn_handler = fn_handler;
this.meta22343 = meta22343;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22342.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22342.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t22342.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t22342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22344){
var self__ = this;
var _22344__$1 = this;
return self__.meta22343;
});

cljs.core.async.t22342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22344,meta22343__$1){
var self__ = this;
var _22344__$1 = this;
return (new cljs.core.async.t22342(self__.f,self__.fn_handler,meta22343__$1));
});

cljs.core.async.t22342.cljs$lang$type = true;

cljs.core.async.t22342.cljs$lang$ctorStr = "cljs.core.async/t22342";

cljs.core.async.t22342.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t22342");
});

cljs.core.async.__GT_t22342 = (function __GT_t22342(f__$1,fn_handler__$1,meta22343){
return (new cljs.core.async.t22342(f__$1,fn_handler__$1,meta22343));
});

}

return (new cljs.core.async.t22342(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,20,cljs.core.constant$keyword$9,16,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,13,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
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
var G__22346 = buff;
if(G__22346){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__22346.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__22346.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__22346);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__22346);
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
var val_22363 = (function (){var G__22360 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22360) : cljs.core.deref.call(null,G__22360));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__22361_22364 = val_22363;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22361_22364) : fn1.call(null,G__22361_22364));
} else {
cljs.core.async.impl.dispatch.run(((function (val_22363,ret){
return (function (){
var G__22362 = val_22363;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22362) : fn1.call(null,G__22362));
});})(val_22363,ret))
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
var G__22373 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22373) : cljs.core.deref.call(null,G__22373));
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
var ret = (function (){var G__22374 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22374) : cljs.core.deref.call(null,G__22374));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__22375_22377 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22375_22377) : fn1.call(null,G__22375_22377));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__22376 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22376) : fn1.call(null,G__22376));
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
var n__4517__auto___22378 = n;
var x_22379 = (0);
while(true){
if((x_22379 < n__4517__auto___22378)){
(a[x_22379] = (0));

var G__22380 = (x_22379 + (1));
x_22379 = G__22380;
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

var G__22381 = (i + (1));
i = G__22381;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__22389 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22389) : cljs.core.atom.call(null,G__22389));
})();
if(typeof cljs.core.async.t22390 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22390 = (function (flag,alt_flag,meta22391){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta22391 = meta22391;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22390.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22390.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22393 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22393) : cljs.core.deref.call(null,G__22393));
});})(flag))
;

cljs.core.async.t22390.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22394_22396 = self__.flag;
var G__22395_22397 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22394_22396,G__22395_22397) : cljs.core.reset_BANG_.call(null,G__22394_22396,G__22395_22397));

return true;
});})(flag))
;

cljs.core.async.t22390.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22392){
var self__ = this;
var _22392__$1 = this;
return self__.meta22391;
});})(flag))
;

cljs.core.async.t22390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22392,meta22391__$1){
var self__ = this;
var _22392__$1 = this;
return (new cljs.core.async.t22390(self__.flag,self__.alt_flag,meta22391__$1));
});})(flag))
;

cljs.core.async.t22390.cljs$lang$type = true;

cljs.core.async.t22390.cljs$lang$ctorStr = "cljs.core.async/t22390";

cljs.core.async.t22390.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t22390");
});})(flag))
;

cljs.core.async.__GT_t22390 = ((function (flag){
return (function __GT_t22390(flag__$1,alt_flag__$1,meta22391){
return (new cljs.core.async.t22390(flag__$1,alt_flag__$1,meta22391));
});})(flag))
;

}

return (new cljs.core.async.t22390(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,15,cljs.core.constant$keyword$9,146,cljs.core.constant$keyword$10,5,cljs.core.constant$keyword$11,141,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t22401 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22401 = (function (cb,flag,alt_handler,meta22402){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta22402 = meta22402;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22401.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22401.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t22401.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t22401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22403){
var self__ = this;
var _22403__$1 = this;
return self__.meta22402;
});

cljs.core.async.t22401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22403,meta22402__$1){
var self__ = this;
var _22403__$1 = this;
return (new cljs.core.async.t22401(self__.cb,self__.flag,self__.alt_handler,meta22402__$1));
});

cljs.core.async.t22401.cljs$lang$type = true;

cljs.core.async.t22401.cljs$lang$ctorStr = "cljs.core.async/t22401";

cljs.core.async.t22401.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t22401");
});

cljs.core.async.__GT_t22401 = (function __GT_t22401(cb__$1,flag__$1,alt_handler__$1,meta22402){
return (new cljs.core.async.t22401(cb__$1,flag__$1,alt_handler__$1,meta22402));
});

}

return (new cljs.core.async.t22401(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,11,cljs.core.constant$keyword$9,154,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,149,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.constant$keyword$47.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__22411 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__22411) : port.call(null,G__22411));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__22412 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__22412) : port.call(null,G__22412));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22404_SHARP_){
var G__22413 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22404_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22413) : fret.call(null,G__22413));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22405_SHARP_){
var G__22414 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22405_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22414) : fret.call(null,G__22414));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22415 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22415) : cljs.core.deref.call(null,G__22415));
})(),(function (){var or__3630__auto__ = wport;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22416 = (i + (1));
i = G__22416;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3630__auto__ = ret;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$7)){
var temp__4126__auto__ = (function (){var and__3618__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__3618__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__3618__auto__;
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
var alts_BANG___delegate = function (ports,p__22417){
var map__22419 = p__22417;
var map__22419__$1 = ((cljs.core.seq_QMARK_(map__22419))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22419):map__22419);
var opts = map__22419__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__22417 = null;
if (arguments.length > 1) {
  p__22417 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__22417);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__22420){
var ports = cljs.core.first(arglist__22420);
var p__22417 = cljs.core.rest(arglist__22420);
return alts_BANG___delegate(ports,p__22417);
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
var c__5853__auto___22518 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___22518){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___22518){
return (function (state_22494){
var state_val_22495 = (state_22494[(1)]);
if((state_val_22495 === (7))){
var inst_22490 = (state_22494[(2)]);
var state_22494__$1 = state_22494;
var statearr_22496_22519 = state_22494__$1;
(statearr_22496_22519[(2)] = inst_22490);

(statearr_22496_22519[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22495 === (1))){
var state_22494__$1 = state_22494;
var statearr_22497_22520 = state_22494__$1;
(statearr_22497_22520[(2)] = null);

(statearr_22497_22520[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22495 === (4))){
var inst_22473 = (state_22494[(7)]);
var inst_22473__$1 = (state_22494[(2)]);
var inst_22474 = (inst_22473__$1 == null);
var state_22494__$1 = (function (){var statearr_22498 = state_22494;
(statearr_22498[(7)] = inst_22473__$1);

return statearr_22498;
})();
if(cljs.core.truth_(inst_22474)){
var statearr_22499_22521 = state_22494__$1;
(statearr_22499_22521[(1)] = (5));

} else {
var statearr_22500_22522 = state_22494__$1;
(statearr_22500_22522[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_22495 === (13))){
var state_22494__$1 = state_22494;
var statearr_22501_22523 = state_22494__$1;
(statearr_22501_22523[(2)] = null);

(statearr_22501_22523[(1)] = (14));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22495 === (6))){
var inst_22473 = (state_22494[(7)]);
var state_22494__$1 = state_22494;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22494__$1,(11),to,inst_22473);
} else {
if((state_val_22495 === (3))){
var inst_22492 = (state_22494[(2)]);
var state_22494__$1 = state_22494;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22494__$1,inst_22492);
} else {
if((state_val_22495 === (12))){
var state_22494__$1 = state_22494;
var statearr_22502_22524 = state_22494__$1;
(statearr_22502_22524[(2)] = null);

(statearr_22502_22524[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22495 === (2))){
var state_22494__$1 = state_22494;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22494__$1,(4),from);
} else {
if((state_val_22495 === (11))){
var inst_22483 = (state_22494[(2)]);
var state_22494__$1 = state_22494;
if(cljs.core.truth_(inst_22483)){
var statearr_22503_22525 = state_22494__$1;
(statearr_22503_22525[(1)] = (12));

} else {
var statearr_22504_22526 = state_22494__$1;
(statearr_22504_22526[(1)] = (13));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_22495 === (9))){
var state_22494__$1 = state_22494;
var statearr_22505_22527 = state_22494__$1;
(statearr_22505_22527[(2)] = null);

(statearr_22505_22527[(1)] = (10));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22495 === (5))){
var state_22494__$1 = state_22494;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22506_22528 = state_22494__$1;
(statearr_22506_22528[(1)] = (8));

} else {
var statearr_22507_22529 = state_22494__$1;
(statearr_22507_22529[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_22495 === (14))){
var inst_22488 = (state_22494[(2)]);
var state_22494__$1 = state_22494;
var statearr_22508_22530 = state_22494__$1;
(statearr_22508_22530[(2)] = inst_22488);

(statearr_22508_22530[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22495 === (10))){
var inst_22480 = (state_22494[(2)]);
var state_22494__$1 = state_22494;
var statearr_22509_22531 = state_22494__$1;
(statearr_22509_22531[(2)] = inst_22480);

(statearr_22509_22531[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22495 === (8))){
var inst_22477 = cljs.core.async.close_BANG_(to);
var state_22494__$1 = state_22494;
var statearr_22510_22532 = state_22494__$1;
(statearr_22510_22532[(2)] = inst_22477);

(statearr_22510_22532[(1)] = (10));


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
}
}
}
}
}
}
}
});})(c__5853__auto___22518))
;
return ((function (switch__5838__auto__,c__5853__auto___22518){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_22514 = [null,null,null,null,null,null,null,null];
(statearr_22514[(0)] = state_machine__5839__auto__);

(statearr_22514[(1)] = (1));

return statearr_22514;
});
var state_machine__5839__auto____1 = (function (state_22494){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_22494);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e22515){if((e22515 instanceof Object)){
var ex__5842__auto__ = e22515;
var statearr_22516_22533 = state_22494;
(statearr_22516_22533[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22494);

return cljs.core.constant$keyword$41;
} else {
throw e22515;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__22534 = state_22494;
state_22494 = G__22534;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_22494){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_22494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___22518))
})();
var state__5855__auto__ = (function (){var statearr_22517 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_22517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___22518);

return statearr_22517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___22518))
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
return (function (p__22720){
var vec__22721 = p__22720;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22721,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22721,(1),null);
var job = vec__22721;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__5853__auto___22905 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___22905,res,vec__22721,v,p,job,jobs,results){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___22905,res,vec__22721,v,p,job,jobs,results){
return (function (state_22726){
var state_val_22727 = (state_22726[(1)]);
if((state_val_22727 === (2))){
var inst_22723 = (state_22726[(2)]);
var inst_22724 = cljs.core.async.close_BANG_(res);
var state_22726__$1 = (function (){var statearr_22728 = state_22726;
(statearr_22728[(7)] = inst_22723);

return statearr_22728;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22726__$1,inst_22724);
} else {
if((state_val_22727 === (1))){
var state_22726__$1 = state_22726;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22726__$1,(2),res,v);
} else {
return null;
}
}
});})(c__5853__auto___22905,res,vec__22721,v,p,job,jobs,results))
;
return ((function (switch__5838__auto__,c__5853__auto___22905,res,vec__22721,v,p,job,jobs,results){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_22732 = [null,null,null,null,null,null,null,null];
(statearr_22732[(0)] = state_machine__5839__auto__);

(statearr_22732[(1)] = (1));

return statearr_22732;
});
var state_machine__5839__auto____1 = (function (state_22726){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_22726);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e22733){if((e22733 instanceof Object)){
var ex__5842__auto__ = e22733;
var statearr_22734_22906 = state_22726;
(statearr_22734_22906[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22726);

return cljs.core.constant$keyword$41;
} else {
throw e22733;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__22907 = state_22726;
state_22726 = G__22907;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_22726){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_22726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___22905,res,vec__22721,v,p,job,jobs,results))
})();
var state__5855__auto__ = (function (){var statearr_22735 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_22735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___22905);

return statearr_22735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___22905,res,vec__22721,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22736){
var vec__22737 = p__22736;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22737,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22737,(1),null);
var job = vec__22737;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__22738_22908 = v;
var G__22739_22909 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__22738_22908,G__22739_22909) : xf.call(null,G__22738_22908,G__22739_22909));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4517__auto___22910 = n;
var __22911 = (0);
while(true){
if((__22911 < n__4517__auto___22910)){
var G__22740_22912 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22740_22912) {
case "async":
var c__5853__auto___22914 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__22911,c__5853__auto___22914,G__22740_22912,n__4517__auto___22910,jobs,results,process,async){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (__22911,c__5853__auto___22914,G__22740_22912,n__4517__auto___22910,jobs,results,process,async){
return (function (state_22753){
var state_val_22754 = (state_22753[(1)]);
if((state_val_22754 === (7))){
var inst_22749 = (state_22753[(2)]);
var state_22753__$1 = state_22753;
var statearr_22755_22915 = state_22753__$1;
(statearr_22755_22915[(2)] = inst_22749);

(statearr_22755_22915[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22754 === (6))){
var state_22753__$1 = state_22753;
var statearr_22756_22916 = state_22753__$1;
(statearr_22756_22916[(2)] = null);

(statearr_22756_22916[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22754 === (5))){
var state_22753__$1 = state_22753;
var statearr_22757_22917 = state_22753__$1;
(statearr_22757_22917[(2)] = null);

(statearr_22757_22917[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22754 === (4))){
var inst_22743 = (state_22753[(2)]);
var inst_22744 = async(inst_22743);
var state_22753__$1 = state_22753;
if(cljs.core.truth_(inst_22744)){
var statearr_22758_22918 = state_22753__$1;
(statearr_22758_22918[(1)] = (5));

} else {
var statearr_22759_22919 = state_22753__$1;
(statearr_22759_22919[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_22754 === (3))){
var inst_22751 = (state_22753[(2)]);
var state_22753__$1 = state_22753;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22753__$1,inst_22751);
} else {
if((state_val_22754 === (2))){
var state_22753__$1 = state_22753;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22753__$1,(4),jobs);
} else {
if((state_val_22754 === (1))){
var state_22753__$1 = state_22753;
var statearr_22760_22920 = state_22753__$1;
(statearr_22760_22920[(2)] = null);

(statearr_22760_22920[(1)] = (2));


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
});})(__22911,c__5853__auto___22914,G__22740_22912,n__4517__auto___22910,jobs,results,process,async))
;
return ((function (__22911,switch__5838__auto__,c__5853__auto___22914,G__22740_22912,n__4517__auto___22910,jobs,results,process,async){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_22764 = [null,null,null,null,null,null,null];
(statearr_22764[(0)] = state_machine__5839__auto__);

(statearr_22764[(1)] = (1));

return statearr_22764;
});
var state_machine__5839__auto____1 = (function (state_22753){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_22753);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e22765){if((e22765 instanceof Object)){
var ex__5842__auto__ = e22765;
var statearr_22766_22921 = state_22753;
(statearr_22766_22921[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22753);

return cljs.core.constant$keyword$41;
} else {
throw e22765;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__22922 = state_22753;
state_22753 = G__22922;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_22753){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_22753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(__22911,switch__5838__auto__,c__5853__auto___22914,G__22740_22912,n__4517__auto___22910,jobs,results,process,async))
})();
var state__5855__auto__ = (function (){var statearr_22767 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_22767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___22914);

return statearr_22767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(__22911,c__5853__auto___22914,G__22740_22912,n__4517__auto___22910,jobs,results,process,async))
);


break;
case "compute":
var c__5853__auto___22923 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__22911,c__5853__auto___22923,G__22740_22912,n__4517__auto___22910,jobs,results,process,async){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (__22911,c__5853__auto___22923,G__22740_22912,n__4517__auto___22910,jobs,results,process,async){
return (function (state_22780){
var state_val_22781 = (state_22780[(1)]);
if((state_val_22781 === (7))){
var inst_22776 = (state_22780[(2)]);
var state_22780__$1 = state_22780;
var statearr_22782_22924 = state_22780__$1;
(statearr_22782_22924[(2)] = inst_22776);

(statearr_22782_22924[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22781 === (6))){
var state_22780__$1 = state_22780;
var statearr_22783_22925 = state_22780__$1;
(statearr_22783_22925[(2)] = null);

(statearr_22783_22925[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22781 === (5))){
var state_22780__$1 = state_22780;
var statearr_22784_22926 = state_22780__$1;
(statearr_22784_22926[(2)] = null);

(statearr_22784_22926[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22781 === (4))){
var inst_22770 = (state_22780[(2)]);
var inst_22771 = process(inst_22770);
var state_22780__$1 = state_22780;
if(cljs.core.truth_(inst_22771)){
var statearr_22785_22927 = state_22780__$1;
(statearr_22785_22927[(1)] = (5));

} else {
var statearr_22786_22928 = state_22780__$1;
(statearr_22786_22928[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_22781 === (3))){
var inst_22778 = (state_22780[(2)]);
var state_22780__$1 = state_22780;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22780__$1,inst_22778);
} else {
if((state_val_22781 === (2))){
var state_22780__$1 = state_22780;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22780__$1,(4),jobs);
} else {
if((state_val_22781 === (1))){
var state_22780__$1 = state_22780;
var statearr_22787_22929 = state_22780__$1;
(statearr_22787_22929[(2)] = null);

(statearr_22787_22929[(1)] = (2));


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
});})(__22911,c__5853__auto___22923,G__22740_22912,n__4517__auto___22910,jobs,results,process,async))
;
return ((function (__22911,switch__5838__auto__,c__5853__auto___22923,G__22740_22912,n__4517__auto___22910,jobs,results,process,async){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_22791 = [null,null,null,null,null,null,null];
(statearr_22791[(0)] = state_machine__5839__auto__);

(statearr_22791[(1)] = (1));

return statearr_22791;
});
var state_machine__5839__auto____1 = (function (state_22780){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_22780);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e22792){if((e22792 instanceof Object)){
var ex__5842__auto__ = e22792;
var statearr_22793_22930 = state_22780;
(statearr_22793_22930[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22780);

return cljs.core.constant$keyword$41;
} else {
throw e22792;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__22931 = state_22780;
state_22780 = G__22931;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_22780){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_22780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(__22911,switch__5838__auto__,c__5853__auto___22923,G__22740_22912,n__4517__auto___22910,jobs,results,process,async))
})();
var state__5855__auto__ = (function (){var statearr_22794 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_22794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___22923);

return statearr_22794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(__22911,c__5853__auto___22923,G__22740_22912,n__4517__auto___22910,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22932 = (__22911 + (1));
__22911 = G__22932;
continue;
} else {
}
break;
}

var c__5853__auto___22933 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___22933,jobs,results,process,async){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___22933,jobs,results,process,async){
return (function (state_22816){
var state_val_22817 = (state_22816[(1)]);
if((state_val_22817 === (9))){
var inst_22809 = (state_22816[(2)]);
var state_22816__$1 = (function (){var statearr_22818 = state_22816;
(statearr_22818[(7)] = inst_22809);

return statearr_22818;
})();
var statearr_22819_22934 = state_22816__$1;
(statearr_22819_22934[(2)] = null);

(statearr_22819_22934[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22817 === (8))){
var inst_22802 = (state_22816[(8)]);
var inst_22807 = (state_22816[(2)]);
var state_22816__$1 = (function (){var statearr_22820 = state_22816;
(statearr_22820[(9)] = inst_22807);

return statearr_22820;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22816__$1,(9),results,inst_22802);
} else {
if((state_val_22817 === (7))){
var inst_22812 = (state_22816[(2)]);
var state_22816__$1 = state_22816;
var statearr_22821_22935 = state_22816__$1;
(statearr_22821_22935[(2)] = inst_22812);

(statearr_22821_22935[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22817 === (6))){
var inst_22802 = (state_22816[(8)]);
var inst_22797 = (state_22816[(10)]);
var inst_22802__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_22803 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22804 = [inst_22797,inst_22802__$1];
var inst_22805 = (new cljs.core.PersistentVector(null,2,(5),inst_22803,inst_22804,null));
var state_22816__$1 = (function (){var statearr_22822 = state_22816;
(statearr_22822[(8)] = inst_22802__$1);

return statearr_22822;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22816__$1,(8),jobs,inst_22805);
} else {
if((state_val_22817 === (5))){
var inst_22800 = cljs.core.async.close_BANG_(jobs);
var state_22816__$1 = state_22816;
var statearr_22823_22936 = state_22816__$1;
(statearr_22823_22936[(2)] = inst_22800);

(statearr_22823_22936[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22817 === (4))){
var inst_22797 = (state_22816[(10)]);
var inst_22797__$1 = (state_22816[(2)]);
var inst_22798 = (inst_22797__$1 == null);
var state_22816__$1 = (function (){var statearr_22824 = state_22816;
(statearr_22824[(10)] = inst_22797__$1);

return statearr_22824;
})();
if(cljs.core.truth_(inst_22798)){
var statearr_22825_22937 = state_22816__$1;
(statearr_22825_22937[(1)] = (5));

} else {
var statearr_22826_22938 = state_22816__$1;
(statearr_22826_22938[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_22817 === (3))){
var inst_22814 = (state_22816[(2)]);
var state_22816__$1 = state_22816;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22816__$1,inst_22814);
} else {
if((state_val_22817 === (2))){
var state_22816__$1 = state_22816;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22816__$1,(4),from);
} else {
if((state_val_22817 === (1))){
var state_22816__$1 = state_22816;
var statearr_22827_22939 = state_22816__$1;
(statearr_22827_22939[(2)] = null);

(statearr_22827_22939[(1)] = (2));


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
}
}
});})(c__5853__auto___22933,jobs,results,process,async))
;
return ((function (switch__5838__auto__,c__5853__auto___22933,jobs,results,process,async){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_22831 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22831[(0)] = state_machine__5839__auto__);

(statearr_22831[(1)] = (1));

return statearr_22831;
});
var state_machine__5839__auto____1 = (function (state_22816){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_22816);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e22832){if((e22832 instanceof Object)){
var ex__5842__auto__ = e22832;
var statearr_22833_22940 = state_22816;
(statearr_22833_22940[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22816);

return cljs.core.constant$keyword$41;
} else {
throw e22832;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__22941 = state_22816;
state_22816 = G__22941;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_22816){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_22816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___22933,jobs,results,process,async))
})();
var state__5855__auto__ = (function (){var statearr_22834 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_22834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___22933);

return statearr_22834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___22933,jobs,results,process,async))
);


var c__5853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto__,jobs,results,process,async){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto__,jobs,results,process,async){
return (function (state_22872){
var state_val_22873 = (state_22872[(1)]);
if((state_val_22873 === (7))){
var inst_22868 = (state_22872[(2)]);
var state_22872__$1 = state_22872;
var statearr_22874_22942 = state_22872__$1;
(statearr_22874_22942[(2)] = inst_22868);

(statearr_22874_22942[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22873 === (20))){
var state_22872__$1 = state_22872;
var statearr_22875_22943 = state_22872__$1;
(statearr_22875_22943[(2)] = null);

(statearr_22875_22943[(1)] = (21));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22873 === (1))){
var state_22872__$1 = state_22872;
var statearr_22876_22944 = state_22872__$1;
(statearr_22876_22944[(2)] = null);

(statearr_22876_22944[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22873 === (4))){
var inst_22837 = (state_22872[(7)]);
var inst_22837__$1 = (state_22872[(2)]);
var inst_22838 = (inst_22837__$1 == null);
var state_22872__$1 = (function (){var statearr_22877 = state_22872;
(statearr_22877[(7)] = inst_22837__$1);

return statearr_22877;
})();
if(cljs.core.truth_(inst_22838)){
var statearr_22878_22945 = state_22872__$1;
(statearr_22878_22945[(1)] = (5));

} else {
var statearr_22879_22946 = state_22872__$1;
(statearr_22879_22946[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_22873 === (15))){
var inst_22850 = (state_22872[(8)]);
var state_22872__$1 = state_22872;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22872__$1,(18),to,inst_22850);
} else {
if((state_val_22873 === (21))){
var inst_22863 = (state_22872[(2)]);
var state_22872__$1 = state_22872;
var statearr_22880_22947 = state_22872__$1;
(statearr_22880_22947[(2)] = inst_22863);

(statearr_22880_22947[(1)] = (13));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22873 === (13))){
var inst_22865 = (state_22872[(2)]);
var state_22872__$1 = (function (){var statearr_22881 = state_22872;
(statearr_22881[(9)] = inst_22865);

return statearr_22881;
})();
var statearr_22882_22948 = state_22872__$1;
(statearr_22882_22948[(2)] = null);

(statearr_22882_22948[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22873 === (6))){
var inst_22837 = (state_22872[(7)]);
var state_22872__$1 = state_22872;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22872__$1,(11),inst_22837);
} else {
if((state_val_22873 === (17))){
var inst_22858 = (state_22872[(2)]);
var state_22872__$1 = state_22872;
if(cljs.core.truth_(inst_22858)){
var statearr_22883_22949 = state_22872__$1;
(statearr_22883_22949[(1)] = (19));

} else {
var statearr_22884_22950 = state_22872__$1;
(statearr_22884_22950[(1)] = (20));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_22873 === (3))){
var inst_22870 = (state_22872[(2)]);
var state_22872__$1 = state_22872;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22872__$1,inst_22870);
} else {
if((state_val_22873 === (12))){
var inst_22847 = (state_22872[(10)]);
var state_22872__$1 = state_22872;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22872__$1,(14),inst_22847);
} else {
if((state_val_22873 === (2))){
var state_22872__$1 = state_22872;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22872__$1,(4),results);
} else {
if((state_val_22873 === (19))){
var state_22872__$1 = state_22872;
var statearr_22885_22951 = state_22872__$1;
(statearr_22885_22951[(2)] = null);

(statearr_22885_22951[(1)] = (12));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22873 === (11))){
var inst_22847 = (state_22872[(2)]);
var state_22872__$1 = (function (){var statearr_22886 = state_22872;
(statearr_22886[(10)] = inst_22847);

return statearr_22886;
})();
var statearr_22887_22952 = state_22872__$1;
(statearr_22887_22952[(2)] = null);

(statearr_22887_22952[(1)] = (12));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22873 === (9))){
var state_22872__$1 = state_22872;
var statearr_22888_22953 = state_22872__$1;
(statearr_22888_22953[(2)] = null);

(statearr_22888_22953[(1)] = (10));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22873 === (5))){
var state_22872__$1 = state_22872;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22889_22954 = state_22872__$1;
(statearr_22889_22954[(1)] = (8));

} else {
var statearr_22890_22955 = state_22872__$1;
(statearr_22890_22955[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_22873 === (14))){
var inst_22850 = (state_22872[(8)]);
var inst_22852 = (state_22872[(11)]);
var inst_22850__$1 = (state_22872[(2)]);
var inst_22851 = (inst_22850__$1 == null);
var inst_22852__$1 = cljs.core.not(inst_22851);
var state_22872__$1 = (function (){var statearr_22891 = state_22872;
(statearr_22891[(8)] = inst_22850__$1);

(statearr_22891[(11)] = inst_22852__$1);

return statearr_22891;
})();
if(inst_22852__$1){
var statearr_22892_22956 = state_22872__$1;
(statearr_22892_22956[(1)] = (15));

} else {
var statearr_22893_22957 = state_22872__$1;
(statearr_22893_22957[(1)] = (16));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_22873 === (16))){
var inst_22852 = (state_22872[(11)]);
var state_22872__$1 = state_22872;
var statearr_22894_22958 = state_22872__$1;
(statearr_22894_22958[(2)] = inst_22852);

(statearr_22894_22958[(1)] = (17));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22873 === (10))){
var inst_22844 = (state_22872[(2)]);
var state_22872__$1 = state_22872;
var statearr_22895_22959 = state_22872__$1;
(statearr_22895_22959[(2)] = inst_22844);

(statearr_22895_22959[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22873 === (18))){
var inst_22855 = (state_22872[(2)]);
var state_22872__$1 = state_22872;
var statearr_22896_22960 = state_22872__$1;
(statearr_22896_22960[(2)] = inst_22855);

(statearr_22896_22960[(1)] = (17));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22873 === (8))){
var inst_22841 = cljs.core.async.close_BANG_(to);
var state_22872__$1 = state_22872;
var statearr_22897_22961 = state_22872__$1;
(statearr_22897_22961[(2)] = inst_22841);

(statearr_22897_22961[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5853__auto__,jobs,results,process,async))
;
return ((function (switch__5838__auto__,c__5853__auto__,jobs,results,process,async){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_22901 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22901[(0)] = state_machine__5839__auto__);

(statearr_22901[(1)] = (1));

return statearr_22901;
});
var state_machine__5839__auto____1 = (function (state_22872){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_22872);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e22902){if((e22902 instanceof Object)){
var ex__5842__auto__ = e22902;
var statearr_22903_22962 = state_22872;
(statearr_22903_22962[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22872);

return cljs.core.constant$keyword$41;
} else {
throw e22902;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__22963 = state_22872;
state_22872 = G__22963;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_22872){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_22872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto__,jobs,results,process,async))
})();
var state__5855__auto__ = (function (){var statearr_22904 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_22904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto__);

return statearr_22904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto__,jobs,results,process,async))
);

return c__5853__auto__;
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
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.constant$keyword$48);
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
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.constant$keyword$49);
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
var c__5853__auto___23086 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___23086,tc,fc){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___23086,tc,fc){
return (function (state_23060){
var state_val_23061 = (state_23060[(1)]);
if((state_val_23061 === (7))){
var inst_23056 = (state_23060[(2)]);
var state_23060__$1 = state_23060;
var statearr_23062_23087 = state_23060__$1;
(statearr_23062_23087[(2)] = inst_23056);

(statearr_23062_23087[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23061 === (1))){
var state_23060__$1 = state_23060;
var statearr_23063_23088 = state_23060__$1;
(statearr_23063_23088[(2)] = null);

(statearr_23063_23088[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23061 === (4))){
var inst_23037 = (state_23060[(7)]);
var inst_23037__$1 = (state_23060[(2)]);
var inst_23038 = (inst_23037__$1 == null);
var state_23060__$1 = (function (){var statearr_23064 = state_23060;
(statearr_23064[(7)] = inst_23037__$1);

return statearr_23064;
})();
if(cljs.core.truth_(inst_23038)){
var statearr_23065_23089 = state_23060__$1;
(statearr_23065_23089[(1)] = (5));

} else {
var statearr_23066_23090 = state_23060__$1;
(statearr_23066_23090[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23061 === (13))){
var state_23060__$1 = state_23060;
var statearr_23067_23091 = state_23060__$1;
(statearr_23067_23091[(2)] = null);

(statearr_23067_23091[(1)] = (14));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23061 === (6))){
var inst_23037 = (state_23060[(7)]);
var inst_23043 = (function (){var G__23068 = inst_23037;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__23068) : p.call(null,G__23068));
})();
var state_23060__$1 = state_23060;
if(cljs.core.truth_(inst_23043)){
var statearr_23069_23092 = state_23060__$1;
(statearr_23069_23092[(1)] = (9));

} else {
var statearr_23070_23093 = state_23060__$1;
(statearr_23070_23093[(1)] = (10));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23061 === (3))){
var inst_23058 = (state_23060[(2)]);
var state_23060__$1 = state_23060;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23060__$1,inst_23058);
} else {
if((state_val_23061 === (12))){
var state_23060__$1 = state_23060;
var statearr_23071_23094 = state_23060__$1;
(statearr_23071_23094[(2)] = null);

(statearr_23071_23094[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23061 === (2))){
var state_23060__$1 = state_23060;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23060__$1,(4),ch);
} else {
if((state_val_23061 === (11))){
var inst_23037 = (state_23060[(7)]);
var inst_23047 = (state_23060[(2)]);
var state_23060__$1 = state_23060;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23060__$1,(8),inst_23047,inst_23037);
} else {
if((state_val_23061 === (9))){
var state_23060__$1 = state_23060;
var statearr_23072_23095 = state_23060__$1;
(statearr_23072_23095[(2)] = tc);

(statearr_23072_23095[(1)] = (11));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23061 === (5))){
var inst_23040 = cljs.core.async.close_BANG_(tc);
var inst_23041 = cljs.core.async.close_BANG_(fc);
var state_23060__$1 = (function (){var statearr_23073 = state_23060;
(statearr_23073[(8)] = inst_23040);

return statearr_23073;
})();
var statearr_23074_23096 = state_23060__$1;
(statearr_23074_23096[(2)] = inst_23041);

(statearr_23074_23096[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23061 === (14))){
var inst_23054 = (state_23060[(2)]);
var state_23060__$1 = state_23060;
var statearr_23075_23097 = state_23060__$1;
(statearr_23075_23097[(2)] = inst_23054);

(statearr_23075_23097[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23061 === (10))){
var state_23060__$1 = state_23060;
var statearr_23076_23098 = state_23060__$1;
(statearr_23076_23098[(2)] = fc);

(statearr_23076_23098[(1)] = (11));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23061 === (8))){
var inst_23049 = (state_23060[(2)]);
var state_23060__$1 = state_23060;
if(cljs.core.truth_(inst_23049)){
var statearr_23077_23099 = state_23060__$1;
(statearr_23077_23099[(1)] = (12));

} else {
var statearr_23078_23100 = state_23060__$1;
(statearr_23078_23100[(1)] = (13));

}

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
}
}
}
}
}
}
}
});})(c__5853__auto___23086,tc,fc))
;
return ((function (switch__5838__auto__,c__5853__auto___23086,tc,fc){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_23082 = [null,null,null,null,null,null,null,null,null];
(statearr_23082[(0)] = state_machine__5839__auto__);

(statearr_23082[(1)] = (1));

return statearr_23082;
});
var state_machine__5839__auto____1 = (function (state_23060){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_23060);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e23083){if((e23083 instanceof Object)){
var ex__5842__auto__ = e23083;
var statearr_23084_23101 = state_23060;
(statearr_23084_23101[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23060);

return cljs.core.constant$keyword$41;
} else {
throw e23083;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__23102 = state_23060;
state_23060 = G__23102;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_23060){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_23060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___23086,tc,fc))
})();
var state__5855__auto__ = (function (){var statearr_23085 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_23085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___23086);

return statearr_23085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___23086,tc,fc))
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
var c__5853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto__){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto__){
return (function (state_23151){
var state_val_23152 = (state_23151[(1)]);
if((state_val_23152 === (7))){
var inst_23147 = (state_23151[(2)]);
var state_23151__$1 = state_23151;
var statearr_23153_23171 = state_23151__$1;
(statearr_23153_23171[(2)] = inst_23147);

(statearr_23153_23171[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23152 === (6))){
var inst_23137 = (state_23151[(7)]);
var inst_23140 = (state_23151[(8)]);
var inst_23144 = (function (){var G__23154 = inst_23137;
var G__23155 = inst_23140;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23154,G__23155) : f.call(null,G__23154,G__23155));
})();
var inst_23137__$1 = inst_23144;
var state_23151__$1 = (function (){var statearr_23156 = state_23151;
(statearr_23156[(7)] = inst_23137__$1);

return statearr_23156;
})();
var statearr_23157_23172 = state_23151__$1;
(statearr_23157_23172[(2)] = null);

(statearr_23157_23172[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23152 === (5))){
var inst_23137 = (state_23151[(7)]);
var state_23151__$1 = state_23151;
var statearr_23158_23173 = state_23151__$1;
(statearr_23158_23173[(2)] = inst_23137);

(statearr_23158_23173[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23152 === (4))){
var inst_23140 = (state_23151[(8)]);
var inst_23140__$1 = (state_23151[(2)]);
var inst_23141 = (inst_23140__$1 == null);
var state_23151__$1 = (function (){var statearr_23159 = state_23151;
(statearr_23159[(8)] = inst_23140__$1);

return statearr_23159;
})();
if(cljs.core.truth_(inst_23141)){
var statearr_23160_23174 = state_23151__$1;
(statearr_23160_23174[(1)] = (5));

} else {
var statearr_23161_23175 = state_23151__$1;
(statearr_23161_23175[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23152 === (3))){
var inst_23149 = (state_23151[(2)]);
var state_23151__$1 = state_23151;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23151__$1,inst_23149);
} else {
if((state_val_23152 === (2))){
var state_23151__$1 = state_23151;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23151__$1,(4),ch);
} else {
if((state_val_23152 === (1))){
var inst_23137 = init;
var state_23151__$1 = (function (){var statearr_23162 = state_23151;
(statearr_23162[(7)] = inst_23137);

return statearr_23162;
})();
var statearr_23163_23176 = state_23151__$1;
(statearr_23163_23176[(2)] = null);

(statearr_23163_23176[(1)] = (2));


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
var statearr_23167 = [null,null,null,null,null,null,null,null,null];
(statearr_23167[(0)] = state_machine__5839__auto__);

(statearr_23167[(1)] = (1));

return statearr_23167;
});
var state_machine__5839__auto____1 = (function (state_23151){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_23151);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e23168){if((e23168 instanceof Object)){
var ex__5842__auto__ = e23168;
var statearr_23169_23177 = state_23151;
(statearr_23169_23177[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23151);

return cljs.core.constant$keyword$41;
} else {
throw e23168;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__23178 = state_23151;
state_23151 = G__23178;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_23151){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_23151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto__))
})();
var state__5855__auto__ = (function (){var statearr_23170 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_23170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto__);

return statearr_23170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto__))
);

return c__5853__auto__;
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
var c__5853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto__){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto__){
return (function (state_23255){
var state_val_23256 = (state_23255[(1)]);
if((state_val_23256 === (7))){
var inst_23237 = (state_23255[(2)]);
var state_23255__$1 = state_23255;
var statearr_23257_23280 = state_23255__$1;
(statearr_23257_23280[(2)] = inst_23237);

(statearr_23257_23280[(1)] = (6));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23256 === (1))){
var inst_23231 = cljs.core.seq(coll);
var inst_23232 = inst_23231;
var state_23255__$1 = (function (){var statearr_23258 = state_23255;
(statearr_23258[(7)] = inst_23232);

return statearr_23258;
})();
var statearr_23259_23281 = state_23255__$1;
(statearr_23259_23281[(2)] = null);

(statearr_23259_23281[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23256 === (4))){
var inst_23232 = (state_23255[(7)]);
var inst_23235 = cljs.core.first(inst_23232);
var state_23255__$1 = state_23255;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23255__$1,(7),ch,inst_23235);
} else {
if((state_val_23256 === (13))){
var inst_23249 = (state_23255[(2)]);
var state_23255__$1 = state_23255;
var statearr_23260_23282 = state_23255__$1;
(statearr_23260_23282[(2)] = inst_23249);

(statearr_23260_23282[(1)] = (10));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23256 === (6))){
var inst_23240 = (state_23255[(2)]);
var state_23255__$1 = state_23255;
if(cljs.core.truth_(inst_23240)){
var statearr_23261_23283 = state_23255__$1;
(statearr_23261_23283[(1)] = (8));

} else {
var statearr_23262_23284 = state_23255__$1;
(statearr_23262_23284[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23256 === (3))){
var inst_23253 = (state_23255[(2)]);
var state_23255__$1 = state_23255;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23255__$1,inst_23253);
} else {
if((state_val_23256 === (12))){
var state_23255__$1 = state_23255;
var statearr_23263_23285 = state_23255__$1;
(statearr_23263_23285[(2)] = null);

(statearr_23263_23285[(1)] = (13));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23256 === (2))){
var inst_23232 = (state_23255[(7)]);
var state_23255__$1 = state_23255;
if(cljs.core.truth_(inst_23232)){
var statearr_23264_23286 = state_23255__$1;
(statearr_23264_23286[(1)] = (4));

} else {
var statearr_23265_23287 = state_23255__$1;
(statearr_23265_23287[(1)] = (5));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23256 === (11))){
var inst_23246 = cljs.core.async.close_BANG_(ch);
var state_23255__$1 = state_23255;
var statearr_23266_23288 = state_23255__$1;
(statearr_23266_23288[(2)] = inst_23246);

(statearr_23266_23288[(1)] = (13));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23256 === (9))){
var state_23255__$1 = state_23255;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23267_23289 = state_23255__$1;
(statearr_23267_23289[(1)] = (11));

} else {
var statearr_23268_23290 = state_23255__$1;
(statearr_23268_23290[(1)] = (12));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23256 === (5))){
var inst_23232 = (state_23255[(7)]);
var state_23255__$1 = state_23255;
var statearr_23269_23291 = state_23255__$1;
(statearr_23269_23291[(2)] = inst_23232);

(statearr_23269_23291[(1)] = (6));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23256 === (10))){
var inst_23251 = (state_23255[(2)]);
var state_23255__$1 = state_23255;
var statearr_23270_23292 = state_23255__$1;
(statearr_23270_23292[(2)] = inst_23251);

(statearr_23270_23292[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23256 === (8))){
var inst_23232 = (state_23255[(7)]);
var inst_23242 = cljs.core.next(inst_23232);
var inst_23232__$1 = inst_23242;
var state_23255__$1 = (function (){var statearr_23271 = state_23255;
(statearr_23271[(7)] = inst_23232__$1);

return statearr_23271;
})();
var statearr_23272_23293 = state_23255__$1;
(statearr_23272_23293[(2)] = null);

(statearr_23272_23293[(1)] = (2));


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
var statearr_23276 = [null,null,null,null,null,null,null,null];
(statearr_23276[(0)] = state_machine__5839__auto__);

(statearr_23276[(1)] = (1));

return statearr_23276;
});
var state_machine__5839__auto____1 = (function (state_23255){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_23255);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e23277){if((e23277 instanceof Object)){
var ex__5842__auto__ = e23277;
var statearr_23278_23294 = state_23255;
(statearr_23278_23294[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23255);

return cljs.core.constant$keyword$41;
} else {
throw e23277;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__23295 = state_23255;
state_23255 = G__23295;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_23255){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_23255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto__))
})();
var state__5855__auto__ = (function (){var statearr_23279 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_23279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto__);

return statearr_23279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto__))
);

return c__5853__auto__;
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

cljs.core.async.Mux = (function (){var obj23297 = {};
return obj23297;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3618__auto__ = _;
if(and__3618__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3618__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4274__auto__ = (((_ == null))?null:_);
return (function (){var or__3630__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__23301 = x__4274__auto__;
return goog.typeOf(G__23301);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj23303 = {};
return obj23303;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3618__auto__ = m;
if(and__3618__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3618__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4274__auto__ = (((m == null))?null:m);
return (function (){var or__3630__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__23307 = x__4274__auto__;
return goog.typeOf(G__23307);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3618__auto__ = m;
if(and__3618__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3618__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4274__auto__ = (((m == null))?null:m);
return (function (){var or__3630__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__23311 = x__4274__auto__;
return goog.typeOf(G__23311);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3618__auto__ = m;
if(and__3618__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3618__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4274__auto__ = (((m == null))?null:m);
return (function (){var or__3630__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__23315 = x__4274__auto__;
return goog.typeOf(G__23315);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
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
var cs = (function (){var G__23545 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23545) : cljs.core.atom.call(null,G__23545));
})();
var m = (function (){
if(typeof cljs.core.async.t23546 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23546 = (function (cs,ch,mult,meta23547){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta23547 = meta23547;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23546.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t23546.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t23546.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t23546.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23549_23774 = self__.cs;
var G__23550_23775 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23549_23774,G__23550_23775) : cljs.core.reset_BANG_.call(null,G__23549_23774,G__23550_23775));

return null;
});})(cs))
;

cljs.core.async.t23546.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t23546.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t23546.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23548){
var self__ = this;
var _23548__$1 = this;
return self__.meta23547;
});})(cs))
;

cljs.core.async.t23546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23548,meta23547__$1){
var self__ = this;
var _23548__$1 = this;
return (new cljs.core.async.t23546(self__.cs,self__.ch,self__.mult,meta23547__$1));
});})(cs))
;

cljs.core.async.t23546.cljs$lang$type = true;

cljs.core.async.t23546.cljs$lang$ctorStr = "cljs.core.async/t23546";

cljs.core.async.t23546.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23546");
});})(cs))
;

cljs.core.async.__GT_t23546 = ((function (cs){
return (function __GT_t23546(cs__$1,ch__$1,mult__$1,meta23547){
return (new cljs.core.async.t23546(cs__$1,ch__$1,mult__$1,meta23547));
});})(cs))
;

}

return (new cljs.core.async.t23546(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,397,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,390,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__23551 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23551) : cljs.core.atom.call(null,G__23551));
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
var c__5853__auto___23776 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___23776,cs,m,dchan,dctr,done){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___23776,cs,m,dchan,dctr,done){
return (function (state_23682){
var state_val_23683 = (state_23682[(1)]);
if((state_val_23683 === (7))){
var inst_23678 = (state_23682[(2)]);
var state_23682__$1 = state_23682;
var statearr_23684_23777 = state_23682__$1;
(statearr_23684_23777[(2)] = inst_23678);

(statearr_23684_23777[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (20))){
var inst_23583 = (state_23682[(7)]);
var inst_23593 = cljs.core.first(inst_23583);
var inst_23594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23593,(0),null);
var inst_23595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23593,(1),null);
var state_23682__$1 = (function (){var statearr_23685 = state_23682;
(statearr_23685[(8)] = inst_23594);

return statearr_23685;
})();
if(cljs.core.truth_(inst_23595)){
var statearr_23686_23778 = state_23682__$1;
(statearr_23686_23778[(1)] = (22));

} else {
var statearr_23687_23779 = state_23682__$1;
(statearr_23687_23779[(1)] = (23));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (27))){
var inst_23630 = (state_23682[(9)]);
var inst_23625 = (state_23682[(10)]);
var inst_23623 = (state_23682[(11)]);
var inst_23554 = (state_23682[(12)]);
var inst_23630__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23623,inst_23625);
var inst_23631 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23630__$1,inst_23554,done);
var state_23682__$1 = (function (){var statearr_23688 = state_23682;
(statearr_23688[(9)] = inst_23630__$1);

return statearr_23688;
})();
if(cljs.core.truth_(inst_23631)){
var statearr_23689_23780 = state_23682__$1;
(statearr_23689_23780[(1)] = (30));

} else {
var statearr_23690_23781 = state_23682__$1;
(statearr_23690_23781[(1)] = (31));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (1))){
var state_23682__$1 = state_23682;
var statearr_23691_23782 = state_23682__$1;
(statearr_23691_23782[(2)] = null);

(statearr_23691_23782[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (24))){
var inst_23583 = (state_23682[(7)]);
var inst_23600 = (state_23682[(2)]);
var inst_23601 = cljs.core.next(inst_23583);
var inst_23563 = inst_23601;
var inst_23564 = null;
var inst_23565 = (0);
var inst_23566 = (0);
var state_23682__$1 = (function (){var statearr_23692 = state_23682;
(statearr_23692[(13)] = inst_23566);

(statearr_23692[(14)] = inst_23563);

(statearr_23692[(15)] = inst_23600);

(statearr_23692[(16)] = inst_23564);

(statearr_23692[(17)] = inst_23565);

return statearr_23692;
})();
var statearr_23693_23783 = state_23682__$1;
(statearr_23693_23783[(2)] = null);

(statearr_23693_23783[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (39))){
var state_23682__$1 = state_23682;
var statearr_23697_23784 = state_23682__$1;
(statearr_23697_23784[(2)] = null);

(statearr_23697_23784[(1)] = (41));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (4))){
var inst_23554 = (state_23682[(12)]);
var inst_23554__$1 = (state_23682[(2)]);
var inst_23555 = (inst_23554__$1 == null);
var state_23682__$1 = (function (){var statearr_23698 = state_23682;
(statearr_23698[(12)] = inst_23554__$1);

return statearr_23698;
})();
if(cljs.core.truth_(inst_23555)){
var statearr_23699_23785 = state_23682__$1;
(statearr_23699_23785[(1)] = (5));

} else {
var statearr_23700_23786 = state_23682__$1;
(statearr_23700_23786[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (15))){
var inst_23566 = (state_23682[(13)]);
var inst_23563 = (state_23682[(14)]);
var inst_23564 = (state_23682[(16)]);
var inst_23565 = (state_23682[(17)]);
var inst_23579 = (state_23682[(2)]);
var inst_23580 = (inst_23566 + (1));
var tmp23694 = inst_23563;
var tmp23695 = inst_23564;
var tmp23696 = inst_23565;
var inst_23563__$1 = tmp23694;
var inst_23564__$1 = tmp23695;
var inst_23565__$1 = tmp23696;
var inst_23566__$1 = inst_23580;
var state_23682__$1 = (function (){var statearr_23701 = state_23682;
(statearr_23701[(13)] = inst_23566__$1);

(statearr_23701[(14)] = inst_23563__$1);

(statearr_23701[(18)] = inst_23579);

(statearr_23701[(16)] = inst_23564__$1);

(statearr_23701[(17)] = inst_23565__$1);

return statearr_23701;
})();
var statearr_23702_23787 = state_23682__$1;
(statearr_23702_23787[(2)] = null);

(statearr_23702_23787[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (21))){
var inst_23604 = (state_23682[(2)]);
var state_23682__$1 = state_23682;
var statearr_23706_23788 = state_23682__$1;
(statearr_23706_23788[(2)] = inst_23604);

(statearr_23706_23788[(1)] = (18));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (31))){
var inst_23630 = (state_23682[(9)]);
var inst_23634 = done(null);
var inst_23635 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23630);
var state_23682__$1 = (function (){var statearr_23707 = state_23682;
(statearr_23707[(19)] = inst_23634);

return statearr_23707;
})();
var statearr_23708_23789 = state_23682__$1;
(statearr_23708_23789[(2)] = inst_23635);

(statearr_23708_23789[(1)] = (32));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (32))){
var inst_23625 = (state_23682[(10)]);
var inst_23623 = (state_23682[(11)]);
var inst_23622 = (state_23682[(20)]);
var inst_23624 = (state_23682[(21)]);
var inst_23637 = (state_23682[(2)]);
var inst_23638 = (inst_23625 + (1));
var tmp23703 = inst_23623;
var tmp23704 = inst_23622;
var tmp23705 = inst_23624;
var inst_23622__$1 = tmp23704;
var inst_23623__$1 = tmp23703;
var inst_23624__$1 = tmp23705;
var inst_23625__$1 = inst_23638;
var state_23682__$1 = (function (){var statearr_23709 = state_23682;
(statearr_23709[(22)] = inst_23637);

(statearr_23709[(10)] = inst_23625__$1);

(statearr_23709[(11)] = inst_23623__$1);

(statearr_23709[(20)] = inst_23622__$1);

(statearr_23709[(21)] = inst_23624__$1);

return statearr_23709;
})();
var statearr_23710_23790 = state_23682__$1;
(statearr_23710_23790[(2)] = null);

(statearr_23710_23790[(1)] = (25));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (40))){
var inst_23650 = (state_23682[(23)]);
var inst_23654 = done(null);
var inst_23655 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23650);
var state_23682__$1 = (function (){var statearr_23711 = state_23682;
(statearr_23711[(24)] = inst_23654);

return statearr_23711;
})();
var statearr_23712_23791 = state_23682__$1;
(statearr_23712_23791[(2)] = inst_23655);

(statearr_23712_23791[(1)] = (41));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (33))){
var inst_23641 = (state_23682[(25)]);
var inst_23643 = cljs.core.chunked_seq_QMARK_(inst_23641);
var state_23682__$1 = state_23682;
if(inst_23643){
var statearr_23713_23792 = state_23682__$1;
(statearr_23713_23792[(1)] = (36));

} else {
var statearr_23714_23793 = state_23682__$1;
(statearr_23714_23793[(1)] = (37));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (13))){
var inst_23573 = (state_23682[(26)]);
var inst_23576 = cljs.core.async.close_BANG_(inst_23573);
var state_23682__$1 = state_23682;
var statearr_23715_23794 = state_23682__$1;
(statearr_23715_23794[(2)] = inst_23576);

(statearr_23715_23794[(1)] = (15));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (22))){
var inst_23594 = (state_23682[(8)]);
var inst_23597 = cljs.core.async.close_BANG_(inst_23594);
var state_23682__$1 = state_23682;
var statearr_23716_23795 = state_23682__$1;
(statearr_23716_23795[(2)] = inst_23597);

(statearr_23716_23795[(1)] = (24));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (36))){
var inst_23641 = (state_23682[(25)]);
var inst_23645 = cljs.core.chunk_first(inst_23641);
var inst_23646 = cljs.core.chunk_rest(inst_23641);
var inst_23647 = cljs.core.count(inst_23645);
var inst_23622 = inst_23646;
var inst_23623 = inst_23645;
var inst_23624 = inst_23647;
var inst_23625 = (0);
var state_23682__$1 = (function (){var statearr_23717 = state_23682;
(statearr_23717[(10)] = inst_23625);

(statearr_23717[(11)] = inst_23623);

(statearr_23717[(20)] = inst_23622);

(statearr_23717[(21)] = inst_23624);

return statearr_23717;
})();
var statearr_23718_23796 = state_23682__$1;
(statearr_23718_23796[(2)] = null);

(statearr_23718_23796[(1)] = (25));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (41))){
var inst_23641 = (state_23682[(25)]);
var inst_23657 = (state_23682[(2)]);
var inst_23658 = cljs.core.next(inst_23641);
var inst_23622 = inst_23658;
var inst_23623 = null;
var inst_23624 = (0);
var inst_23625 = (0);
var state_23682__$1 = (function (){var statearr_23719 = state_23682;
(statearr_23719[(10)] = inst_23625);

(statearr_23719[(11)] = inst_23623);

(statearr_23719[(20)] = inst_23622);

(statearr_23719[(27)] = inst_23657);

(statearr_23719[(21)] = inst_23624);

return statearr_23719;
})();
var statearr_23720_23797 = state_23682__$1;
(statearr_23720_23797[(2)] = null);

(statearr_23720_23797[(1)] = (25));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (43))){
var state_23682__$1 = state_23682;
var statearr_23721_23798 = state_23682__$1;
(statearr_23721_23798[(2)] = null);

(statearr_23721_23798[(1)] = (44));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (29))){
var inst_23666 = (state_23682[(2)]);
var state_23682__$1 = state_23682;
var statearr_23722_23799 = state_23682__$1;
(statearr_23722_23799[(2)] = inst_23666);

(statearr_23722_23799[(1)] = (26));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (44))){
var inst_23675 = (state_23682[(2)]);
var state_23682__$1 = (function (){var statearr_23723 = state_23682;
(statearr_23723[(28)] = inst_23675);

return statearr_23723;
})();
var statearr_23724_23800 = state_23682__$1;
(statearr_23724_23800[(2)] = null);

(statearr_23724_23800[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (6))){
var inst_23614 = (state_23682[(29)]);
var inst_23613 = (function (){var G__23725 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23725) : cljs.core.deref.call(null,G__23725));
})();
var inst_23614__$1 = cljs.core.keys(inst_23613);
var inst_23615 = cljs.core.count(inst_23614__$1);
var inst_23616 = (function (){var G__23726 = dctr;
var G__23727 = inst_23615;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23726,G__23727) : cljs.core.reset_BANG_.call(null,G__23726,G__23727));
})();
var inst_23621 = cljs.core.seq(inst_23614__$1);
var inst_23622 = inst_23621;
var inst_23623 = null;
var inst_23624 = (0);
var inst_23625 = (0);
var state_23682__$1 = (function (){var statearr_23728 = state_23682;
(statearr_23728[(10)] = inst_23625);

(statearr_23728[(29)] = inst_23614__$1);

(statearr_23728[(11)] = inst_23623);

(statearr_23728[(20)] = inst_23622);

(statearr_23728[(30)] = inst_23616);

(statearr_23728[(21)] = inst_23624);

return statearr_23728;
})();
var statearr_23729_23801 = state_23682__$1;
(statearr_23729_23801[(2)] = null);

(statearr_23729_23801[(1)] = (25));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (28))){
var inst_23622 = (state_23682[(20)]);
var inst_23641 = (state_23682[(25)]);
var inst_23641__$1 = cljs.core.seq(inst_23622);
var state_23682__$1 = (function (){var statearr_23730 = state_23682;
(statearr_23730[(25)] = inst_23641__$1);

return statearr_23730;
})();
if(inst_23641__$1){
var statearr_23731_23802 = state_23682__$1;
(statearr_23731_23802[(1)] = (33));

} else {
var statearr_23732_23803 = state_23682__$1;
(statearr_23732_23803[(1)] = (34));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (25))){
var inst_23625 = (state_23682[(10)]);
var inst_23624 = (state_23682[(21)]);
var inst_23627 = (inst_23625 < inst_23624);
var inst_23628 = inst_23627;
var state_23682__$1 = state_23682;
if(cljs.core.truth_(inst_23628)){
var statearr_23733_23804 = state_23682__$1;
(statearr_23733_23804[(1)] = (27));

} else {
var statearr_23734_23805 = state_23682__$1;
(statearr_23734_23805[(1)] = (28));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (34))){
var state_23682__$1 = state_23682;
var statearr_23735_23806 = state_23682__$1;
(statearr_23735_23806[(2)] = null);

(statearr_23735_23806[(1)] = (35));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (17))){
var state_23682__$1 = state_23682;
var statearr_23736_23807 = state_23682__$1;
(statearr_23736_23807[(2)] = null);

(statearr_23736_23807[(1)] = (18));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (3))){
var inst_23680 = (state_23682[(2)]);
var state_23682__$1 = state_23682;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23682__$1,inst_23680);
} else {
if((state_val_23683 === (12))){
var inst_23609 = (state_23682[(2)]);
var state_23682__$1 = state_23682;
var statearr_23737_23808 = state_23682__$1;
(statearr_23737_23808[(2)] = inst_23609);

(statearr_23737_23808[(1)] = (9));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (2))){
var state_23682__$1 = state_23682;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23682__$1,(4),ch);
} else {
if((state_val_23683 === (23))){
var state_23682__$1 = state_23682;
var statearr_23738_23809 = state_23682__$1;
(statearr_23738_23809[(2)] = null);

(statearr_23738_23809[(1)] = (24));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (35))){
var inst_23664 = (state_23682[(2)]);
var state_23682__$1 = state_23682;
var statearr_23739_23810 = state_23682__$1;
(statearr_23739_23810[(2)] = inst_23664);

(statearr_23739_23810[(1)] = (29));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (19))){
var inst_23583 = (state_23682[(7)]);
var inst_23587 = cljs.core.chunk_first(inst_23583);
var inst_23588 = cljs.core.chunk_rest(inst_23583);
var inst_23589 = cljs.core.count(inst_23587);
var inst_23563 = inst_23588;
var inst_23564 = inst_23587;
var inst_23565 = inst_23589;
var inst_23566 = (0);
var state_23682__$1 = (function (){var statearr_23740 = state_23682;
(statearr_23740[(13)] = inst_23566);

(statearr_23740[(14)] = inst_23563);

(statearr_23740[(16)] = inst_23564);

(statearr_23740[(17)] = inst_23565);

return statearr_23740;
})();
var statearr_23741_23811 = state_23682__$1;
(statearr_23741_23811[(2)] = null);

(statearr_23741_23811[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (11))){
var inst_23563 = (state_23682[(14)]);
var inst_23583 = (state_23682[(7)]);
var inst_23583__$1 = cljs.core.seq(inst_23563);
var state_23682__$1 = (function (){var statearr_23742 = state_23682;
(statearr_23742[(7)] = inst_23583__$1);

return statearr_23742;
})();
if(inst_23583__$1){
var statearr_23743_23812 = state_23682__$1;
(statearr_23743_23812[(1)] = (16));

} else {
var statearr_23744_23813 = state_23682__$1;
(statearr_23744_23813[(1)] = (17));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (9))){
var inst_23611 = (state_23682[(2)]);
var state_23682__$1 = state_23682;
var statearr_23745_23814 = state_23682__$1;
(statearr_23745_23814[(2)] = inst_23611);

(statearr_23745_23814[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (5))){
var inst_23561 = (function (){var G__23746 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23746) : cljs.core.deref.call(null,G__23746));
})();
var inst_23562 = cljs.core.seq(inst_23561);
var inst_23563 = inst_23562;
var inst_23564 = null;
var inst_23565 = (0);
var inst_23566 = (0);
var state_23682__$1 = (function (){var statearr_23747 = state_23682;
(statearr_23747[(13)] = inst_23566);

(statearr_23747[(14)] = inst_23563);

(statearr_23747[(16)] = inst_23564);

(statearr_23747[(17)] = inst_23565);

return statearr_23747;
})();
var statearr_23748_23815 = state_23682__$1;
(statearr_23748_23815[(2)] = null);

(statearr_23748_23815[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (14))){
var state_23682__$1 = state_23682;
var statearr_23749_23816 = state_23682__$1;
(statearr_23749_23816[(2)] = null);

(statearr_23749_23816[(1)] = (15));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (45))){
var inst_23672 = (state_23682[(2)]);
var state_23682__$1 = state_23682;
var statearr_23750_23817 = state_23682__$1;
(statearr_23750_23817[(2)] = inst_23672);

(statearr_23750_23817[(1)] = (44));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (26))){
var inst_23614 = (state_23682[(29)]);
var inst_23668 = (state_23682[(2)]);
var inst_23669 = cljs.core.seq(inst_23614);
var state_23682__$1 = (function (){var statearr_23751 = state_23682;
(statearr_23751[(31)] = inst_23668);

return statearr_23751;
})();
if(inst_23669){
var statearr_23752_23818 = state_23682__$1;
(statearr_23752_23818[(1)] = (42));

} else {
var statearr_23753_23819 = state_23682__$1;
(statearr_23753_23819[(1)] = (43));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (16))){
var inst_23583 = (state_23682[(7)]);
var inst_23585 = cljs.core.chunked_seq_QMARK_(inst_23583);
var state_23682__$1 = state_23682;
if(inst_23585){
var statearr_23754_23820 = state_23682__$1;
(statearr_23754_23820[(1)] = (19));

} else {
var statearr_23755_23821 = state_23682__$1;
(statearr_23755_23821[(1)] = (20));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (38))){
var inst_23661 = (state_23682[(2)]);
var state_23682__$1 = state_23682;
var statearr_23756_23822 = state_23682__$1;
(statearr_23756_23822[(2)] = inst_23661);

(statearr_23756_23822[(1)] = (35));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (30))){
var state_23682__$1 = state_23682;
var statearr_23757_23823 = state_23682__$1;
(statearr_23757_23823[(2)] = null);

(statearr_23757_23823[(1)] = (32));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (10))){
var inst_23566 = (state_23682[(13)]);
var inst_23564 = (state_23682[(16)]);
var inst_23572 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23564,inst_23566);
var inst_23573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23572,(0),null);
var inst_23574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23572,(1),null);
var state_23682__$1 = (function (){var statearr_23758 = state_23682;
(statearr_23758[(26)] = inst_23573);

return statearr_23758;
})();
if(cljs.core.truth_(inst_23574)){
var statearr_23759_23824 = state_23682__$1;
(statearr_23759_23824[(1)] = (13));

} else {
var statearr_23760_23825 = state_23682__$1;
(statearr_23760_23825[(1)] = (14));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (18))){
var inst_23607 = (state_23682[(2)]);
var state_23682__$1 = state_23682;
var statearr_23761_23826 = state_23682__$1;
(statearr_23761_23826[(2)] = inst_23607);

(statearr_23761_23826[(1)] = (12));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (42))){
var state_23682__$1 = state_23682;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23682__$1,(45),dchan);
} else {
if((state_val_23683 === (37))){
var inst_23650 = (state_23682[(23)]);
var inst_23641 = (state_23682[(25)]);
var inst_23554 = (state_23682[(12)]);
var inst_23650__$1 = cljs.core.first(inst_23641);
var inst_23651 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23650__$1,inst_23554,done);
var state_23682__$1 = (function (){var statearr_23762 = state_23682;
(statearr_23762[(23)] = inst_23650__$1);

return statearr_23762;
})();
if(cljs.core.truth_(inst_23651)){
var statearr_23763_23827 = state_23682__$1;
(statearr_23763_23827[(1)] = (39));

} else {
var statearr_23764_23828 = state_23682__$1;
(statearr_23764_23828[(1)] = (40));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23683 === (8))){
var inst_23566 = (state_23682[(13)]);
var inst_23565 = (state_23682[(17)]);
var inst_23568 = (inst_23566 < inst_23565);
var inst_23569 = inst_23568;
var state_23682__$1 = state_23682;
if(cljs.core.truth_(inst_23569)){
var statearr_23765_23829 = state_23682__$1;
(statearr_23765_23829[(1)] = (10));

} else {
var statearr_23766_23830 = state_23682__$1;
(statearr_23766_23830[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5853__auto___23776,cs,m,dchan,dctr,done))
;
return ((function (switch__5838__auto__,c__5853__auto___23776,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_23770 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23770[(0)] = state_machine__5839__auto__);

(statearr_23770[(1)] = (1));

return statearr_23770;
});
var state_machine__5839__auto____1 = (function (state_23682){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_23682);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e23771){if((e23771 instanceof Object)){
var ex__5842__auto__ = e23771;
var statearr_23772_23831 = state_23682;
(statearr_23772_23831[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23682);

return cljs.core.constant$keyword$41;
} else {
throw e23771;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__23832 = state_23682;
state_23682 = G__23832;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_23682){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_23682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___23776,cs,m,dchan,dctr,done))
})();
var state__5855__auto__ = (function (){var statearr_23773 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_23773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___23776);

return statearr_23773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___23776,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj23837 = {};
return obj23837;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3618__auto__ = m;
if(and__3618__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3618__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4274__auto__ = (((m == null))?null:m);
return (function (){var or__3630__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__23841 = x__4274__auto__;
return goog.typeOf(G__23841);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3618__auto__ = m;
if(and__3618__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3618__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4274__auto__ = (((m == null))?null:m);
return (function (){var or__3630__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__23845 = x__4274__auto__;
return goog.typeOf(G__23845);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3618__auto__ = m;
if(and__3618__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3618__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4274__auto__ = (((m == null))?null:m);
return (function (){var or__3630__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__23849 = x__4274__auto__;
return goog.typeOf(G__23849);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3618__auto__ = m;
if(and__3618__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3618__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4274__auto__ = (((m == null))?null:m);
return (function (){var or__3630__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__23853 = x__4274__auto__;
return goog.typeOf(G__23853);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3618__auto__ = m;
if(and__3618__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3618__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4274__auto__ = (((m == null))?null:m);
return (function (){var or__3630__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__23857 = x__4274__auto__;
return goog.typeOf(G__23857);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__23858){
var map__23864 = p__23858;
var map__23864__$1 = ((cljs.core.seq_QMARK_(map__23864))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23864):map__23864);
var opts = map__23864__$1;
var statearr_23865_23869 = state;
(statearr_23865_23869[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__23864,map__23864__$1,opts){
return (function (val){
var statearr_23866_23870 = state;
(statearr_23866_23870[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__23864,map__23864__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_23867_23871 = state;
(statearr_23867_23871[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__23868 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23868) : cljs.core.deref.call(null,G__23868));
})());


return cljs.core.constant$keyword$41;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__23858 = null;
if (arguments.length > 3) {
  p__23858 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__23858);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__23872){
var state = cljs.core.first(arglist__23872);
arglist__23872 = cljs.core.next(arglist__23872);
var cont_block = cljs.core.first(arglist__23872);
arglist__23872 = cljs.core.next(arglist__23872);
var ports = cljs.core.first(arglist__23872);
var p__23858 = cljs.core.rest(arglist__23872);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__23858);
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
var cs = (function (){var G__24006 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24006) : cljs.core.atom.call(null,G__24006));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$50,null,cljs.core.constant$keyword$51,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$52);
var solo_mode = (function (){var G__24007 = cljs.core.constant$keyword$51;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24007) : cljs.core.atom.call(null,G__24007));
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
if(cljs.core.truth_((function (){var G__24008 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__24008) : attr.call(null,G__24008));
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
var chs = (function (){var G__24009 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24009) : cljs.core.deref.call(null,G__24009));
})();
var mode = (function (){var G__24010 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24010) : cljs.core.deref.call(null,G__24010));
})();
var solos = pick(cljs.core.constant$keyword$52,chs);
var pauses = pick(cljs.core.constant$keyword$50,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$53,solos,cljs.core.constant$keyword$54,pick(cljs.core.constant$keyword$51,chs),cljs.core.constant$keyword$55,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$50)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t24011 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24011 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24012){
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
this.meta24012 = meta24012;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24011.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t24011.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24011.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24011.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__24014_24139 = self__.cs;
var G__24015_24140 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24014_24139,G__24015_24140) : cljs.core.reset_BANG_.call(null,G__24014_24139,G__24015_24140));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24011.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24011.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__24016 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__24016) : self__.solo_modes.call(null,G__24016));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__24017_24141 = self__.solo_mode;
var G__24018_24142 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24017_24141,G__24018_24142) : cljs.core.reset_BANG_.call(null,G__24017_24141,G__24018_24142));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24011.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24011.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24011.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24013){
var self__ = this;
var _24013__$1 = this;
return self__.meta24012;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24013,meta24012__$1){
var self__ = this;
var _24013__$1 = this;
return (new cljs.core.async.t24011(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24012__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24011.cljs$lang$type = true;

cljs.core.async.t24011.cljs$lang$ctorStr = "cljs.core.async/t24011";

cljs.core.async.t24011.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24011");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t24011 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24011(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24012){
return (new cljs.core.async.t24011(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24012));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t24011(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,25,cljs.core.constant$keyword$9,510,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,499,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
;
var c__5853__auto___24143 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___24143,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___24143,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24090){
var state_val_24091 = (state_24090[(1)]);
if((state_val_24091 === (7))){
var inst_24032 = (state_24090[(7)]);
var inst_24037 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24032);
var state_24090__$1 = state_24090;
var statearr_24092_24144 = state_24090__$1;
(statearr_24092_24144[(2)] = inst_24037);

(statearr_24092_24144[(1)] = (9));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24091 === (20))){
var inst_24047 = (state_24090[(8)]);
var state_24090__$1 = state_24090;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24090__$1,(23),out,inst_24047);
} else {
if((state_val_24091 === (1))){
var inst_24022 = (state_24090[(9)]);
var inst_24022__$1 = calc_state();
var inst_24023 = cljs.core.seq_QMARK_(inst_24022__$1);
var state_24090__$1 = (function (){var statearr_24093 = state_24090;
(statearr_24093[(9)] = inst_24022__$1);

return statearr_24093;
})();
if(inst_24023){
var statearr_24094_24145 = state_24090__$1;
(statearr_24094_24145[(1)] = (2));

} else {
var statearr_24095_24146 = state_24090__$1;
(statearr_24095_24146[(1)] = (3));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24091 === (24))){
var inst_24040 = (state_24090[(10)]);
var inst_24032 = inst_24040;
var state_24090__$1 = (function (){var statearr_24096 = state_24090;
(statearr_24096[(7)] = inst_24032);

return statearr_24096;
})();
var statearr_24097_24147 = state_24090__$1;
(statearr_24097_24147[(2)] = null);

(statearr_24097_24147[(1)] = (5));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24091 === (4))){
var inst_24022 = (state_24090[(9)]);
var inst_24028 = (state_24090[(2)]);
var inst_24029 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24028,cljs.core.constant$keyword$55);
var inst_24030 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24028,cljs.core.constant$keyword$54);
var inst_24031 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24028,cljs.core.constant$keyword$53);
var inst_24032 = inst_24022;
var state_24090__$1 = (function (){var statearr_24098 = state_24090;
(statearr_24098[(11)] = inst_24029);

(statearr_24098[(12)] = inst_24031);

(statearr_24098[(13)] = inst_24030);

(statearr_24098[(7)] = inst_24032);

return statearr_24098;
})();
var statearr_24099_24148 = state_24090__$1;
(statearr_24099_24148[(2)] = null);

(statearr_24099_24148[(1)] = (5));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24091 === (15))){
var state_24090__$1 = state_24090;
var statearr_24100_24149 = state_24090__$1;
(statearr_24100_24149[(2)] = null);

(statearr_24100_24149[(1)] = (16));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24091 === (21))){
var inst_24040 = (state_24090[(10)]);
var inst_24032 = inst_24040;
var state_24090__$1 = (function (){var statearr_24101 = state_24090;
(statearr_24101[(7)] = inst_24032);

return statearr_24101;
})();
var statearr_24102_24150 = state_24090__$1;
(statearr_24102_24150[(2)] = null);

(statearr_24102_24150[(1)] = (5));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24091 === (13))){
var inst_24086 = (state_24090[(2)]);
var state_24090__$1 = state_24090;
var statearr_24103_24151 = state_24090__$1;
(statearr_24103_24151[(2)] = inst_24086);

(statearr_24103_24151[(1)] = (6));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24091 === (22))){
var inst_24084 = (state_24090[(2)]);
var state_24090__$1 = state_24090;
var statearr_24104_24152 = state_24090__$1;
(statearr_24104_24152[(2)] = inst_24084);

(statearr_24104_24152[(1)] = (13));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24091 === (6))){
var inst_24088 = (state_24090[(2)]);
var state_24090__$1 = state_24090;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24090__$1,inst_24088);
} else {
if((state_val_24091 === (25))){
var state_24090__$1 = state_24090;
var statearr_24105_24153 = state_24090__$1;
(statearr_24105_24153[(2)] = null);

(statearr_24105_24153[(1)] = (26));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24091 === (17))){
var inst_24063 = (state_24090[(14)]);
var state_24090__$1 = state_24090;
var statearr_24106_24154 = state_24090__$1;
(statearr_24106_24154[(2)] = inst_24063);

(statearr_24106_24154[(1)] = (19));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24091 === (3))){
var inst_24022 = (state_24090[(9)]);
var state_24090__$1 = state_24090;
var statearr_24107_24155 = state_24090__$1;
(statearr_24107_24155[(2)] = inst_24022);

(statearr_24107_24155[(1)] = (4));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24091 === (12))){
var inst_24048 = (state_24090[(15)]);
var inst_24043 = (state_24090[(16)]);
var inst_24063 = (state_24090[(14)]);
var inst_24063__$1 = (function (){var G__24108 = inst_24048;
return (inst_24043.cljs$core$IFn$_invoke$arity$1 ? inst_24043.cljs$core$IFn$_invoke$arity$1(G__24108) : inst_24043.call(null,G__24108));
})();
var state_24090__$1 = (function (){var statearr_24109 = state_24090;
(statearr_24109[(14)] = inst_24063__$1);

return statearr_24109;
})();
if(cljs.core.truth_(inst_24063__$1)){
var statearr_24110_24156 = state_24090__$1;
(statearr_24110_24156[(1)] = (17));

} else {
var statearr_24111_24157 = state_24090__$1;
(statearr_24111_24157[(1)] = (18));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24091 === (2))){
var inst_24022 = (state_24090[(9)]);
var inst_24025 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24022);
var state_24090__$1 = state_24090;
var statearr_24112_24158 = state_24090__$1;
(statearr_24112_24158[(2)] = inst_24025);

(statearr_24112_24158[(1)] = (4));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24091 === (23))){
var inst_24075 = (state_24090[(2)]);
var state_24090__$1 = state_24090;
if(cljs.core.truth_(inst_24075)){
var statearr_24113_24159 = state_24090__$1;
(statearr_24113_24159[(1)] = (24));

} else {
var statearr_24114_24160 = state_24090__$1;
(statearr_24114_24160[(1)] = (25));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24091 === (19))){
var inst_24072 = (state_24090[(2)]);
var state_24090__$1 = state_24090;
if(cljs.core.truth_(inst_24072)){
var statearr_24115_24161 = state_24090__$1;
(statearr_24115_24161[(1)] = (20));

} else {
var statearr_24116_24162 = state_24090__$1;
(statearr_24116_24162[(1)] = (21));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24091 === (11))){
var inst_24047 = (state_24090[(8)]);
var inst_24053 = (inst_24047 == null);
var state_24090__$1 = state_24090;
if(cljs.core.truth_(inst_24053)){
var statearr_24117_24163 = state_24090__$1;
(statearr_24117_24163[(1)] = (14));

} else {
var statearr_24118_24164 = state_24090__$1;
(statearr_24118_24164[(1)] = (15));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24091 === (9))){
var inst_24040 = (state_24090[(10)]);
var inst_24040__$1 = (state_24090[(2)]);
var inst_24041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24040__$1,cljs.core.constant$keyword$55);
var inst_24042 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24040__$1,cljs.core.constant$keyword$54);
var inst_24043 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24040__$1,cljs.core.constant$keyword$53);
var state_24090__$1 = (function (){var statearr_24119 = state_24090;
(statearr_24119[(10)] = inst_24040__$1);

(statearr_24119[(16)] = inst_24043);

(statearr_24119[(17)] = inst_24042);

return statearr_24119;
})();
return cljs.core.async.ioc_alts_BANG_(state_24090__$1,(10),inst_24041);
} else {
if((state_val_24091 === (5))){
var inst_24032 = (state_24090[(7)]);
var inst_24035 = cljs.core.seq_QMARK_(inst_24032);
var state_24090__$1 = state_24090;
if(inst_24035){
var statearr_24120_24165 = state_24090__$1;
(statearr_24120_24165[(1)] = (7));

} else {
var statearr_24121_24166 = state_24090__$1;
(statearr_24121_24166[(1)] = (8));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24091 === (14))){
var inst_24048 = (state_24090[(15)]);
var inst_24055 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_24048);
var state_24090__$1 = state_24090;
var statearr_24122_24167 = state_24090__$1;
(statearr_24122_24167[(2)] = inst_24055);

(statearr_24122_24167[(1)] = (16));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24091 === (26))){
var inst_24080 = (state_24090[(2)]);
var state_24090__$1 = state_24090;
var statearr_24123_24168 = state_24090__$1;
(statearr_24123_24168[(2)] = inst_24080);

(statearr_24123_24168[(1)] = (22));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24091 === (16))){
var inst_24058 = (state_24090[(2)]);
var inst_24059 = calc_state();
var inst_24032 = inst_24059;
var state_24090__$1 = (function (){var statearr_24124 = state_24090;
(statearr_24124[(18)] = inst_24058);

(statearr_24124[(7)] = inst_24032);

return statearr_24124;
})();
var statearr_24125_24169 = state_24090__$1;
(statearr_24125_24169[(2)] = null);

(statearr_24125_24169[(1)] = (5));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24091 === (10))){
var inst_24048 = (state_24090[(15)]);
var inst_24047 = (state_24090[(8)]);
var inst_24046 = (state_24090[(2)]);
var inst_24047__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24046,(0),null);
var inst_24048__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24046,(1),null);
var inst_24049 = (inst_24047__$1 == null);
var inst_24050 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24048__$1,change);
var inst_24051 = (inst_24049) || (inst_24050);
var state_24090__$1 = (function (){var statearr_24126 = state_24090;
(statearr_24126[(15)] = inst_24048__$1);

(statearr_24126[(8)] = inst_24047__$1);

return statearr_24126;
})();
if(cljs.core.truth_(inst_24051)){
var statearr_24127_24170 = state_24090__$1;
(statearr_24127_24170[(1)] = (11));

} else {
var statearr_24128_24171 = state_24090__$1;
(statearr_24128_24171[(1)] = (12));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24091 === (18))){
var inst_24048 = (state_24090[(15)]);
var inst_24043 = (state_24090[(16)]);
var inst_24042 = (state_24090[(17)]);
var inst_24067 = cljs.core.empty_QMARK_(inst_24043);
var inst_24068 = (function (){var G__24129 = inst_24048;
return (inst_24042.cljs$core$IFn$_invoke$arity$1 ? inst_24042.cljs$core$IFn$_invoke$arity$1(G__24129) : inst_24042.call(null,G__24129));
})();
var inst_24069 = cljs.core.not(inst_24068);
var inst_24070 = (inst_24067) && (inst_24069);
var state_24090__$1 = state_24090;
var statearr_24130_24172 = state_24090__$1;
(statearr_24130_24172[(2)] = inst_24070);

(statearr_24130_24172[(1)] = (19));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24091 === (8))){
var inst_24032 = (state_24090[(7)]);
var state_24090__$1 = state_24090;
var statearr_24131_24173 = state_24090__$1;
(statearr_24131_24173[(2)] = inst_24032);

(statearr_24131_24173[(1)] = (9));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5853__auto___24143,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__5838__auto__,c__5853__auto___24143,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_24135 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24135[(0)] = state_machine__5839__auto__);

(statearr_24135[(1)] = (1));

return statearr_24135;
});
var state_machine__5839__auto____1 = (function (state_24090){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_24090);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e24136){if((e24136 instanceof Object)){
var ex__5842__auto__ = e24136;
var statearr_24137_24174 = state_24090;
(statearr_24137_24174[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24090);

return cljs.core.constant$keyword$41;
} else {
throw e24136;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__24175 = state_24090;
state_24090 = G__24175;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_24090){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_24090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___24143,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__5855__auto__ = (function (){var statearr_24138 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_24138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___24143);

return statearr_24138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___24143,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj24177 = {};
return obj24177;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3618__auto__ = p;
if(and__3618__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3618__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4274__auto__ = (((p == null))?null:p);
return (function (){var or__3630__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__24181 = x__4274__auto__;
return goog.typeOf(G__24181);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3618__auto__ = p;
if(and__3618__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3618__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4274__auto__ = (((p == null))?null:p);
return (function (){var or__3630__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__24185 = x__4274__auto__;
return goog.typeOf(G__24185);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
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
if((function (){var and__3618__auto__ = p;
if(and__3618__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3618__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4274__auto__ = (((p == null))?null:p);
return (function (){var or__3630__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__24191 = x__4274__auto__;
return goog.typeOf(G__24191);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3618__auto__ = p;
if(and__3618__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3618__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4274__auto__ = (((p == null))?null:p);
return (function (){var or__3630__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__24193 = x__4274__auto__;
return goog.typeOf(G__24193);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
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
var mults = (function (){var G__24332 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24332) : cljs.core.atom.call(null,G__24332));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__3630__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__24334 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24334) : cljs.core.deref.call(null,G__24334));
})(),topic);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3630__auto__,mults){
return (function (p1__24194_SHARP_){
if(cljs.core.truth_((function (){var G__24335 = topic;
return (p1__24194_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24194_SHARP_.cljs$core$IFn$_invoke$arity$1(G__24335) : p1__24194_SHARP_.call(null,G__24335));
})())){
return p1__24194_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24194_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__24336 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__24336) : buf_fn.call(null,G__24336));
})())));
}
});})(or__3630__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t24337 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24337 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24338){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24338 = meta24338;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24337.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t24337.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__24340 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__24340) : self__.ensure_mult.call(null,G__24340));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t24337.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__24341 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24341) : cljs.core.deref.call(null,G__24341));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t24337.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__24342 = self__.mults;
var G__24343 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24342,G__24343) : cljs.core.reset_BANG_.call(null,G__24342,G__24343));
});})(mults,ensure_mult))
;

cljs.core.async.t24337.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t24337.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24337.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t24337.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24339){
var self__ = this;
var _24339__$1 = this;
return self__.meta24338;
});})(mults,ensure_mult))
;

cljs.core.async.t24337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24339,meta24338__$1){
var self__ = this;
var _24339__$1 = this;
return (new cljs.core.async.t24337(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24338__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t24337.cljs$lang$type = true;

cljs.core.async.t24337.cljs$lang$ctorStr = "cljs.core.async/t24337";

cljs.core.async.t24337.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24337");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t24337 = ((function (mults,ensure_mult){
return (function __GT_t24337(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24338){
return (new cljs.core.async.t24337(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24338));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t24337(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,65,cljs.core.constant$keyword$9,603,cljs.core.constant$keyword$10,14,cljs.core.constant$keyword$11,591,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
;
var c__5853__auto___24466 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___24466,mults,ensure_mult,p){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___24466,mults,ensure_mult,p){
return (function (state_24415){
var state_val_24416 = (state_24415[(1)]);
if((state_val_24416 === (7))){
var inst_24411 = (state_24415[(2)]);
var state_24415__$1 = state_24415;
var statearr_24417_24467 = state_24415__$1;
(statearr_24417_24467[(2)] = inst_24411);

(statearr_24417_24467[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24416 === (20))){
var state_24415__$1 = state_24415;
var statearr_24418_24468 = state_24415__$1;
(statearr_24418_24468[(2)] = null);

(statearr_24418_24468[(1)] = (21));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24416 === (1))){
var state_24415__$1 = state_24415;
var statearr_24419_24469 = state_24415__$1;
(statearr_24419_24469[(2)] = null);

(statearr_24419_24469[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24416 === (24))){
var inst_24394 = (state_24415[(7)]);
var inst_24403 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_24394);
var state_24415__$1 = state_24415;
var statearr_24420_24470 = state_24415__$1;
(statearr_24420_24470[(2)] = inst_24403);

(statearr_24420_24470[(1)] = (25));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24416 === (4))){
var inst_24346 = (state_24415[(8)]);
var inst_24346__$1 = (state_24415[(2)]);
var inst_24347 = (inst_24346__$1 == null);
var state_24415__$1 = (function (){var statearr_24421 = state_24415;
(statearr_24421[(8)] = inst_24346__$1);

return statearr_24421;
})();
if(cljs.core.truth_(inst_24347)){
var statearr_24422_24471 = state_24415__$1;
(statearr_24422_24471[(1)] = (5));

} else {
var statearr_24423_24472 = state_24415__$1;
(statearr_24423_24472[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24416 === (15))){
var inst_24388 = (state_24415[(2)]);
var state_24415__$1 = state_24415;
var statearr_24424_24473 = state_24415__$1;
(statearr_24424_24473[(2)] = inst_24388);

(statearr_24424_24473[(1)] = (12));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24416 === (21))){
var inst_24408 = (state_24415[(2)]);
var state_24415__$1 = (function (){var statearr_24425 = state_24415;
(statearr_24425[(9)] = inst_24408);

return statearr_24425;
})();
var statearr_24426_24474 = state_24415__$1;
(statearr_24426_24474[(2)] = null);

(statearr_24426_24474[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24416 === (13))){
var inst_24370 = (state_24415[(10)]);
var inst_24372 = cljs.core.chunked_seq_QMARK_(inst_24370);
var state_24415__$1 = state_24415;
if(inst_24372){
var statearr_24427_24475 = state_24415__$1;
(statearr_24427_24475[(1)] = (16));

} else {
var statearr_24428_24476 = state_24415__$1;
(statearr_24428_24476[(1)] = (17));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24416 === (22))){
var inst_24400 = (state_24415[(2)]);
var state_24415__$1 = state_24415;
if(cljs.core.truth_(inst_24400)){
var statearr_24429_24477 = state_24415__$1;
(statearr_24429_24477[(1)] = (23));

} else {
var statearr_24430_24478 = state_24415__$1;
(statearr_24430_24478[(1)] = (24));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24416 === (6))){
var inst_24396 = (state_24415[(11)]);
var inst_24394 = (state_24415[(7)]);
var inst_24346 = (state_24415[(8)]);
var inst_24394__$1 = (function (){var G__24431 = inst_24346;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__24431) : topic_fn.call(null,G__24431));
})();
var inst_24395 = (function (){var G__24432 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24432) : cljs.core.deref.call(null,G__24432));
})();
var inst_24396__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24395,inst_24394__$1);
var state_24415__$1 = (function (){var statearr_24433 = state_24415;
(statearr_24433[(11)] = inst_24396__$1);

(statearr_24433[(7)] = inst_24394__$1);

return statearr_24433;
})();
if(cljs.core.truth_(inst_24396__$1)){
var statearr_24434_24479 = state_24415__$1;
(statearr_24434_24479[(1)] = (19));

} else {
var statearr_24435_24480 = state_24415__$1;
(statearr_24435_24480[(1)] = (20));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24416 === (25))){
var inst_24405 = (state_24415[(2)]);
var state_24415__$1 = state_24415;
var statearr_24436_24481 = state_24415__$1;
(statearr_24436_24481[(2)] = inst_24405);

(statearr_24436_24481[(1)] = (21));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24416 === (17))){
var inst_24370 = (state_24415[(10)]);
var inst_24379 = cljs.core.first(inst_24370);
var inst_24380 = cljs.core.async.muxch_STAR_(inst_24379);
var inst_24381 = cljs.core.async.close_BANG_(inst_24380);
var inst_24382 = cljs.core.next(inst_24370);
var inst_24356 = inst_24382;
var inst_24357 = null;
var inst_24358 = (0);
var inst_24359 = (0);
var state_24415__$1 = (function (){var statearr_24437 = state_24415;
(statearr_24437[(12)] = inst_24356);

(statearr_24437[(13)] = inst_24357);

(statearr_24437[(14)] = inst_24358);

(statearr_24437[(15)] = inst_24381);

(statearr_24437[(16)] = inst_24359);

return statearr_24437;
})();
var statearr_24438_24482 = state_24415__$1;
(statearr_24438_24482[(2)] = null);

(statearr_24438_24482[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24416 === (3))){
var inst_24413 = (state_24415[(2)]);
var state_24415__$1 = state_24415;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24415__$1,inst_24413);
} else {
if((state_val_24416 === (12))){
var inst_24390 = (state_24415[(2)]);
var state_24415__$1 = state_24415;
var statearr_24439_24483 = state_24415__$1;
(statearr_24439_24483[(2)] = inst_24390);

(statearr_24439_24483[(1)] = (9));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24416 === (2))){
var state_24415__$1 = state_24415;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24415__$1,(4),ch);
} else {
if((state_val_24416 === (23))){
var state_24415__$1 = state_24415;
var statearr_24440_24484 = state_24415__$1;
(statearr_24440_24484[(2)] = null);

(statearr_24440_24484[(1)] = (25));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24416 === (19))){
var inst_24396 = (state_24415[(11)]);
var inst_24346 = (state_24415[(8)]);
var inst_24398 = cljs.core.async.muxch_STAR_(inst_24396);
var state_24415__$1 = state_24415;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24415__$1,(22),inst_24398,inst_24346);
} else {
if((state_val_24416 === (11))){
var inst_24370 = (state_24415[(10)]);
var inst_24356 = (state_24415[(12)]);
var inst_24370__$1 = cljs.core.seq(inst_24356);
var state_24415__$1 = (function (){var statearr_24441 = state_24415;
(statearr_24441[(10)] = inst_24370__$1);

return statearr_24441;
})();
if(inst_24370__$1){
var statearr_24442_24485 = state_24415__$1;
(statearr_24442_24485[(1)] = (13));

} else {
var statearr_24443_24486 = state_24415__$1;
(statearr_24443_24486[(1)] = (14));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24416 === (9))){
var inst_24392 = (state_24415[(2)]);
var state_24415__$1 = state_24415;
var statearr_24444_24487 = state_24415__$1;
(statearr_24444_24487[(2)] = inst_24392);

(statearr_24444_24487[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24416 === (5))){
var inst_24353 = (function (){var G__24445 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24445) : cljs.core.deref.call(null,G__24445));
})();
var inst_24354 = cljs.core.vals(inst_24353);
var inst_24355 = cljs.core.seq(inst_24354);
var inst_24356 = inst_24355;
var inst_24357 = null;
var inst_24358 = (0);
var inst_24359 = (0);
var state_24415__$1 = (function (){var statearr_24446 = state_24415;
(statearr_24446[(12)] = inst_24356);

(statearr_24446[(13)] = inst_24357);

(statearr_24446[(14)] = inst_24358);

(statearr_24446[(16)] = inst_24359);

return statearr_24446;
})();
var statearr_24447_24488 = state_24415__$1;
(statearr_24447_24488[(2)] = null);

(statearr_24447_24488[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24416 === (14))){
var state_24415__$1 = state_24415;
var statearr_24451_24489 = state_24415__$1;
(statearr_24451_24489[(2)] = null);

(statearr_24451_24489[(1)] = (15));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24416 === (16))){
var inst_24370 = (state_24415[(10)]);
var inst_24374 = cljs.core.chunk_first(inst_24370);
var inst_24375 = cljs.core.chunk_rest(inst_24370);
var inst_24376 = cljs.core.count(inst_24374);
var inst_24356 = inst_24375;
var inst_24357 = inst_24374;
var inst_24358 = inst_24376;
var inst_24359 = (0);
var state_24415__$1 = (function (){var statearr_24452 = state_24415;
(statearr_24452[(12)] = inst_24356);

(statearr_24452[(13)] = inst_24357);

(statearr_24452[(14)] = inst_24358);

(statearr_24452[(16)] = inst_24359);

return statearr_24452;
})();
var statearr_24453_24490 = state_24415__$1;
(statearr_24453_24490[(2)] = null);

(statearr_24453_24490[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24416 === (10))){
var inst_24356 = (state_24415[(12)]);
var inst_24357 = (state_24415[(13)]);
var inst_24358 = (state_24415[(14)]);
var inst_24359 = (state_24415[(16)]);
var inst_24364 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24357,inst_24359);
var inst_24365 = cljs.core.async.muxch_STAR_(inst_24364);
var inst_24366 = cljs.core.async.close_BANG_(inst_24365);
var inst_24367 = (inst_24359 + (1));
var tmp24448 = inst_24356;
var tmp24449 = inst_24357;
var tmp24450 = inst_24358;
var inst_24356__$1 = tmp24448;
var inst_24357__$1 = tmp24449;
var inst_24358__$1 = tmp24450;
var inst_24359__$1 = inst_24367;
var state_24415__$1 = (function (){var statearr_24454 = state_24415;
(statearr_24454[(12)] = inst_24356__$1);

(statearr_24454[(13)] = inst_24357__$1);

(statearr_24454[(17)] = inst_24366);

(statearr_24454[(14)] = inst_24358__$1);

(statearr_24454[(16)] = inst_24359__$1);

return statearr_24454;
})();
var statearr_24455_24491 = state_24415__$1;
(statearr_24455_24491[(2)] = null);

(statearr_24455_24491[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24416 === (18))){
var inst_24385 = (state_24415[(2)]);
var state_24415__$1 = state_24415;
var statearr_24456_24492 = state_24415__$1;
(statearr_24456_24492[(2)] = inst_24385);

(statearr_24456_24492[(1)] = (15));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24416 === (8))){
var inst_24358 = (state_24415[(14)]);
var inst_24359 = (state_24415[(16)]);
var inst_24361 = (inst_24359 < inst_24358);
var inst_24362 = inst_24361;
var state_24415__$1 = state_24415;
if(cljs.core.truth_(inst_24362)){
var statearr_24457_24493 = state_24415__$1;
(statearr_24457_24493[(1)] = (10));

} else {
var statearr_24458_24494 = state_24415__$1;
(statearr_24458_24494[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5853__auto___24466,mults,ensure_mult,p))
;
return ((function (switch__5838__auto__,c__5853__auto___24466,mults,ensure_mult,p){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_24462 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24462[(0)] = state_machine__5839__auto__);

(statearr_24462[(1)] = (1));

return statearr_24462;
});
var state_machine__5839__auto____1 = (function (state_24415){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_24415);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e24463){if((e24463 instanceof Object)){
var ex__5842__auto__ = e24463;
var statearr_24464_24495 = state_24415;
(statearr_24464_24495[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24415);

return cljs.core.constant$keyword$41;
} else {
throw e24463;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__24496 = state_24415;
state_24415 = G__24496;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_24415){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_24415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___24466,mults,ensure_mult,p))
})();
var state__5855__auto__ = (function (){var statearr_24465 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_24465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___24466);

return statearr_24465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___24466,mults,ensure_mult,p))
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
var dctr = (function (){var G__24577 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24577) : cljs.core.atom.call(null,G__24577));
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
var c__5853__auto___24650 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___24650,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___24650,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24616){
var state_val_24617 = (state_24616[(1)]);
if((state_val_24617 === (7))){
var state_24616__$1 = state_24616;
var statearr_24618_24651 = state_24616__$1;
(statearr_24618_24651[(2)] = null);

(statearr_24618_24651[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24617 === (1))){
var state_24616__$1 = state_24616;
var statearr_24619_24652 = state_24616__$1;
(statearr_24619_24652[(2)] = null);

(statearr_24619_24652[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24617 === (4))){
var inst_24580 = (state_24616[(7)]);
var inst_24582 = (inst_24580 < cnt);
var state_24616__$1 = state_24616;
if(cljs.core.truth_(inst_24582)){
var statearr_24620_24653 = state_24616__$1;
(statearr_24620_24653[(1)] = (6));

} else {
var statearr_24621_24654 = state_24616__$1;
(statearr_24621_24654[(1)] = (7));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24617 === (15))){
var inst_24612 = (state_24616[(2)]);
var state_24616__$1 = state_24616;
var statearr_24622_24655 = state_24616__$1;
(statearr_24622_24655[(2)] = inst_24612);

(statearr_24622_24655[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24617 === (13))){
var inst_24605 = cljs.core.async.close_BANG_(out);
var state_24616__$1 = state_24616;
var statearr_24623_24656 = state_24616__$1;
(statearr_24623_24656[(2)] = inst_24605);

(statearr_24623_24656[(1)] = (15));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24617 === (6))){
var state_24616__$1 = state_24616;
var statearr_24624_24657 = state_24616__$1;
(statearr_24624_24657[(2)] = null);

(statearr_24624_24657[(1)] = (11));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24617 === (3))){
var inst_24614 = (state_24616[(2)]);
var state_24616__$1 = state_24616;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24616__$1,inst_24614);
} else {
if((state_val_24617 === (12))){
var inst_24602 = (state_24616[(8)]);
var inst_24602__$1 = (state_24616[(2)]);
var inst_24603 = cljs.core.some(cljs.core.nil_QMARK_,inst_24602__$1);
var state_24616__$1 = (function (){var statearr_24625 = state_24616;
(statearr_24625[(8)] = inst_24602__$1);

return statearr_24625;
})();
if(cljs.core.truth_(inst_24603)){
var statearr_24626_24658 = state_24616__$1;
(statearr_24626_24658[(1)] = (13));

} else {
var statearr_24627_24659 = state_24616__$1;
(statearr_24627_24659[(1)] = (14));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24617 === (2))){
var inst_24579 = (function (){var G__24628 = dctr;
var G__24629 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24628,G__24629) : cljs.core.reset_BANG_.call(null,G__24628,G__24629));
})();
var inst_24580 = (0);
var state_24616__$1 = (function (){var statearr_24630 = state_24616;
(statearr_24630[(9)] = inst_24579);

(statearr_24630[(7)] = inst_24580);

return statearr_24630;
})();
var statearr_24631_24660 = state_24616__$1;
(statearr_24631_24660[(2)] = null);

(statearr_24631_24660[(1)] = (4));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24617 === (11))){
var inst_24580 = (state_24616[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24616,(10),Object,null,(9));
var inst_24589 = (function (){var G__24632 = inst_24580;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__24632) : chs__$1.call(null,G__24632));
})();
var inst_24590 = (function (){var G__24633 = inst_24580;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__24633) : done.call(null,G__24633));
})();
var inst_24591 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_24589,inst_24590);
var state_24616__$1 = state_24616;
var statearr_24634_24661 = state_24616__$1;
(statearr_24634_24661[(2)] = inst_24591);


cljs.core.async.impl.ioc_helpers.process_exception(state_24616__$1);

return cljs.core.constant$keyword$41;
} else {
if((state_val_24617 === (9))){
var inst_24580 = (state_24616[(7)]);
var inst_24593 = (state_24616[(2)]);
var inst_24594 = (inst_24580 + (1));
var inst_24580__$1 = inst_24594;
var state_24616__$1 = (function (){var statearr_24635 = state_24616;
(statearr_24635[(10)] = inst_24593);

(statearr_24635[(7)] = inst_24580__$1);

return statearr_24635;
})();
var statearr_24636_24662 = state_24616__$1;
(statearr_24636_24662[(2)] = null);

(statearr_24636_24662[(1)] = (4));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24617 === (5))){
var inst_24600 = (state_24616[(2)]);
var state_24616__$1 = (function (){var statearr_24637 = state_24616;
(statearr_24637[(11)] = inst_24600);

return statearr_24637;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24616__$1,(12),dchan);
} else {
if((state_val_24617 === (14))){
var inst_24602 = (state_24616[(8)]);
var inst_24607 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_24602);
var state_24616__$1 = state_24616;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24616__$1,(16),out,inst_24607);
} else {
if((state_val_24617 === (16))){
var inst_24609 = (state_24616[(2)]);
var state_24616__$1 = (function (){var statearr_24638 = state_24616;
(statearr_24638[(12)] = inst_24609);

return statearr_24638;
})();
var statearr_24639_24663 = state_24616__$1;
(statearr_24639_24663[(2)] = null);

(statearr_24639_24663[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24617 === (10))){
var inst_24584 = (state_24616[(2)]);
var inst_24585 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_24616__$1 = (function (){var statearr_24640 = state_24616;
(statearr_24640[(13)] = inst_24584);

return statearr_24640;
})();
var statearr_24641_24664 = state_24616__$1;
(statearr_24641_24664[(2)] = inst_24585);


cljs.core.async.impl.ioc_helpers.process_exception(state_24616__$1);

return cljs.core.constant$keyword$41;
} else {
if((state_val_24617 === (8))){
var inst_24598 = (state_24616[(2)]);
var state_24616__$1 = state_24616;
var statearr_24642_24665 = state_24616__$1;
(statearr_24642_24665[(2)] = inst_24598);

(statearr_24642_24665[(1)] = (5));


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
}
}
}
}
}
}
}
}
}
});})(c__5853__auto___24650,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__5838__auto__,c__5853__auto___24650,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_24646 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24646[(0)] = state_machine__5839__auto__);

(statearr_24646[(1)] = (1));

return statearr_24646;
});
var state_machine__5839__auto____1 = (function (state_24616){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_24616);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e24647){if((e24647 instanceof Object)){
var ex__5842__auto__ = e24647;
var statearr_24648_24666 = state_24616;
(statearr_24648_24666[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24616);

return cljs.core.constant$keyword$41;
} else {
throw e24647;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__24667 = state_24616;
state_24616 = G__24667;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_24616){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_24616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___24650,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__5855__auto__ = (function (){var statearr_24649 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_24649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___24650);

return statearr_24649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___24650,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__5853__auto___24777 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___24777,out){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___24777,out){
return (function (state_24753){
var state_val_24754 = (state_24753[(1)]);
if((state_val_24754 === (7))){
var inst_24733 = (state_24753[(7)]);
var inst_24732 = (state_24753[(8)]);
var inst_24732__$1 = (state_24753[(2)]);
var inst_24733__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24732__$1,(0),null);
var inst_24734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24732__$1,(1),null);
var inst_24735 = (inst_24733__$1 == null);
var state_24753__$1 = (function (){var statearr_24755 = state_24753;
(statearr_24755[(7)] = inst_24733__$1);

(statearr_24755[(8)] = inst_24732__$1);

(statearr_24755[(9)] = inst_24734);

return statearr_24755;
})();
if(cljs.core.truth_(inst_24735)){
var statearr_24756_24778 = state_24753__$1;
(statearr_24756_24778[(1)] = (8));

} else {
var statearr_24757_24779 = state_24753__$1;
(statearr_24757_24779[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24754 === (1))){
var inst_24724 = cljs.core.vec(chs);
var inst_24725 = inst_24724;
var state_24753__$1 = (function (){var statearr_24758 = state_24753;
(statearr_24758[(10)] = inst_24725);

return statearr_24758;
})();
var statearr_24759_24780 = state_24753__$1;
(statearr_24759_24780[(2)] = null);

(statearr_24759_24780[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24754 === (4))){
var inst_24725 = (state_24753[(10)]);
var state_24753__$1 = state_24753;
return cljs.core.async.ioc_alts_BANG_(state_24753__$1,(7),inst_24725);
} else {
if((state_val_24754 === (6))){
var inst_24749 = (state_24753[(2)]);
var state_24753__$1 = state_24753;
var statearr_24760_24781 = state_24753__$1;
(statearr_24760_24781[(2)] = inst_24749);

(statearr_24760_24781[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24754 === (3))){
var inst_24751 = (state_24753[(2)]);
var state_24753__$1 = state_24753;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24753__$1,inst_24751);
} else {
if((state_val_24754 === (2))){
var inst_24725 = (state_24753[(10)]);
var inst_24727 = cljs.core.count(inst_24725);
var inst_24728 = (inst_24727 > (0));
var state_24753__$1 = state_24753;
if(cljs.core.truth_(inst_24728)){
var statearr_24762_24782 = state_24753__$1;
(statearr_24762_24782[(1)] = (4));

} else {
var statearr_24763_24783 = state_24753__$1;
(statearr_24763_24783[(1)] = (5));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24754 === (11))){
var inst_24725 = (state_24753[(10)]);
var inst_24742 = (state_24753[(2)]);
var tmp24761 = inst_24725;
var inst_24725__$1 = tmp24761;
var state_24753__$1 = (function (){var statearr_24764 = state_24753;
(statearr_24764[(11)] = inst_24742);

(statearr_24764[(10)] = inst_24725__$1);

return statearr_24764;
})();
var statearr_24765_24784 = state_24753__$1;
(statearr_24765_24784[(2)] = null);

(statearr_24765_24784[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24754 === (9))){
var inst_24733 = (state_24753[(7)]);
var state_24753__$1 = state_24753;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24753__$1,(11),out,inst_24733);
} else {
if((state_val_24754 === (5))){
var inst_24747 = cljs.core.async.close_BANG_(out);
var state_24753__$1 = state_24753;
var statearr_24766_24785 = state_24753__$1;
(statearr_24766_24785[(2)] = inst_24747);

(statearr_24766_24785[(1)] = (6));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24754 === (10))){
var inst_24745 = (state_24753[(2)]);
var state_24753__$1 = state_24753;
var statearr_24767_24786 = state_24753__$1;
(statearr_24767_24786[(2)] = inst_24745);

(statearr_24767_24786[(1)] = (6));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24754 === (8))){
var inst_24733 = (state_24753[(7)]);
var inst_24732 = (state_24753[(8)]);
var inst_24734 = (state_24753[(9)]);
var inst_24725 = (state_24753[(10)]);
var inst_24737 = (function (){var c = inst_24734;
var v = inst_24733;
var vec__24730 = inst_24732;
var cs = inst_24725;
return ((function (c,v,vec__24730,cs,inst_24733,inst_24732,inst_24734,inst_24725,state_val_24754,c__5853__auto___24777,out){
return (function (p1__24668_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__24668_SHARP_);
});
;})(c,v,vec__24730,cs,inst_24733,inst_24732,inst_24734,inst_24725,state_val_24754,c__5853__auto___24777,out))
})();
var inst_24738 = cljs.core.filterv(inst_24737,inst_24725);
var inst_24725__$1 = inst_24738;
var state_24753__$1 = (function (){var statearr_24768 = state_24753;
(statearr_24768[(10)] = inst_24725__$1);

return statearr_24768;
})();
var statearr_24769_24787 = state_24753__$1;
(statearr_24769_24787[(2)] = null);

(statearr_24769_24787[(1)] = (2));


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
}
}
}
}
});})(c__5853__auto___24777,out))
;
return ((function (switch__5838__auto__,c__5853__auto___24777,out){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_24773 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24773[(0)] = state_machine__5839__auto__);

(statearr_24773[(1)] = (1));

return statearr_24773;
});
var state_machine__5839__auto____1 = (function (state_24753){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_24753);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e24774){if((e24774 instanceof Object)){
var ex__5842__auto__ = e24774;
var statearr_24775_24788 = state_24753;
(statearr_24775_24788[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24753);

return cljs.core.constant$keyword$41;
} else {
throw e24774;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__24789 = state_24753;
state_24753 = G__24789;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_24753){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_24753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___24777,out))
})();
var state__5855__auto__ = (function (){var statearr_24776 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_24776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___24777);

return statearr_24776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___24777,out))
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
var c__5853__auto___24885 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___24885,out){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___24885,out){
return (function (state_24862){
var state_val_24863 = (state_24862[(1)]);
if((state_val_24863 === (7))){
var inst_24844 = (state_24862[(7)]);
var inst_24844__$1 = (state_24862[(2)]);
var inst_24845 = (inst_24844__$1 == null);
var inst_24846 = cljs.core.not(inst_24845);
var state_24862__$1 = (function (){var statearr_24864 = state_24862;
(statearr_24864[(7)] = inst_24844__$1);

return statearr_24864;
})();
if(inst_24846){
var statearr_24865_24886 = state_24862__$1;
(statearr_24865_24886[(1)] = (8));

} else {
var statearr_24866_24887 = state_24862__$1;
(statearr_24866_24887[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24863 === (1))){
var inst_24839 = (0);
var state_24862__$1 = (function (){var statearr_24867 = state_24862;
(statearr_24867[(8)] = inst_24839);

return statearr_24867;
})();
var statearr_24868_24888 = state_24862__$1;
(statearr_24868_24888[(2)] = null);

(statearr_24868_24888[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24863 === (4))){
var state_24862__$1 = state_24862;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24862__$1,(7),ch);
} else {
if((state_val_24863 === (6))){
var inst_24857 = (state_24862[(2)]);
var state_24862__$1 = state_24862;
var statearr_24869_24889 = state_24862__$1;
(statearr_24869_24889[(2)] = inst_24857);

(statearr_24869_24889[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24863 === (3))){
var inst_24859 = (state_24862[(2)]);
var inst_24860 = cljs.core.async.close_BANG_(out);
var state_24862__$1 = (function (){var statearr_24870 = state_24862;
(statearr_24870[(9)] = inst_24859);

return statearr_24870;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24862__$1,inst_24860);
} else {
if((state_val_24863 === (2))){
var inst_24839 = (state_24862[(8)]);
var inst_24841 = (inst_24839 < n);
var state_24862__$1 = state_24862;
if(cljs.core.truth_(inst_24841)){
var statearr_24871_24890 = state_24862__$1;
(statearr_24871_24890[(1)] = (4));

} else {
var statearr_24872_24891 = state_24862__$1;
(statearr_24872_24891[(1)] = (5));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24863 === (11))){
var inst_24839 = (state_24862[(8)]);
var inst_24849 = (state_24862[(2)]);
var inst_24850 = (inst_24839 + (1));
var inst_24839__$1 = inst_24850;
var state_24862__$1 = (function (){var statearr_24873 = state_24862;
(statearr_24873[(8)] = inst_24839__$1);

(statearr_24873[(10)] = inst_24849);

return statearr_24873;
})();
var statearr_24874_24892 = state_24862__$1;
(statearr_24874_24892[(2)] = null);

(statearr_24874_24892[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24863 === (9))){
var state_24862__$1 = state_24862;
var statearr_24875_24893 = state_24862__$1;
(statearr_24875_24893[(2)] = null);

(statearr_24875_24893[(1)] = (10));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24863 === (5))){
var state_24862__$1 = state_24862;
var statearr_24876_24894 = state_24862__$1;
(statearr_24876_24894[(2)] = null);

(statearr_24876_24894[(1)] = (6));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24863 === (10))){
var inst_24854 = (state_24862[(2)]);
var state_24862__$1 = state_24862;
var statearr_24877_24895 = state_24862__$1;
(statearr_24877_24895[(2)] = inst_24854);

(statearr_24877_24895[(1)] = (6));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24863 === (8))){
var inst_24844 = (state_24862[(7)]);
var state_24862__$1 = state_24862;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24862__$1,(11),out,inst_24844);
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
});})(c__5853__auto___24885,out))
;
return ((function (switch__5838__auto__,c__5853__auto___24885,out){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_24881 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24881[(0)] = state_machine__5839__auto__);

(statearr_24881[(1)] = (1));

return statearr_24881;
});
var state_machine__5839__auto____1 = (function (state_24862){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_24862);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e24882){if((e24882 instanceof Object)){
var ex__5842__auto__ = e24882;
var statearr_24883_24896 = state_24862;
(statearr_24883_24896[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24862);

return cljs.core.constant$keyword$41;
} else {
throw e24882;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__24897 = state_24862;
state_24862 = G__24897;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_24862){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_24862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___24885,out))
})();
var state__5855__auto__ = (function (){var statearr_24884 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_24884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___24885);

return statearr_24884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___24885,out))
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
if(typeof cljs.core.async.t24910 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24910 = (function (ch,f,map_LT_,meta24911){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24911 = meta24911;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24910.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t24910.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t24910.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t24910.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t24913 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24913 = (function (fn1,_,meta24911,map_LT_,f,ch,meta24914){
this.fn1 = fn1;
this._ = _;
this.meta24911 = meta24911;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24914 = meta24914;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24913.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24913.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t24913.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24898_SHARP_){
var G__24916 = (((p1__24898_SHARP_ == null))?null:(function (){var G__24917 = p1__24898_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24917) : self__.f.call(null,G__24917));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__24916) : f1.call(null,G__24916));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t24913.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24915){
var self__ = this;
var _24915__$1 = this;
return self__.meta24914;
});})(___$1))
;

cljs.core.async.t24913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24915,meta24914__$1){
var self__ = this;
var _24915__$1 = this;
return (new cljs.core.async.t24913(self__.fn1,self__._,self__.meta24911,self__.map_LT_,self__.f,self__.ch,meta24914__$1));
});})(___$1))
;

cljs.core.async.t24913.cljs$lang$type = true;

cljs.core.async.t24913.cljs$lang$ctorStr = "cljs.core.async/t24913";

cljs.core.async.t24913.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24913");
});})(___$1))
;

cljs.core.async.__GT_t24913 = ((function (___$1){
return (function __GT_t24913(fn1__$1,___$2,meta24911__$1,map_LT___$1,f__$1,ch__$1,meta24914){
return (new cljs.core.async.t24913(fn1__$1,___$2,meta24911__$1,map_LT___$1,f__$1,ch__$1,meta24914));
});})(___$1))
;

}

return (new cljs.core.async.t24913(fn1,___$1,self__.meta24911,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,737,cljs.core.constant$keyword$10,10,cljs.core.constant$keyword$11,731,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3618__auto__ = ret;
if(cljs.core.truth_(and__3618__auto__)){
return !(((function (){var G__24918 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24918) : cljs.core.deref.call(null,G__24918));
})() == null));
} else {
return and__3618__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__24919 = (function (){var G__24920 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24920) : cljs.core.deref.call(null,G__24920));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24919) : self__.f.call(null,G__24919));
})());
} else {
return ret;
}
});

cljs.core.async.t24910.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t24910.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t24910.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t24910.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24912){
var self__ = this;
var _24912__$1 = this;
return self__.meta24911;
});

cljs.core.async.t24910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24912,meta24911__$1){
var self__ = this;
var _24912__$1 = this;
return (new cljs.core.async.t24910(self__.ch,self__.f,self__.map_LT_,meta24911__$1));
});

cljs.core.async.t24910.cljs$lang$type = true;

cljs.core.async.t24910.cljs$lang$ctorStr = "cljs.core.async/t24910";

cljs.core.async.t24910.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24910");
});

cljs.core.async.__GT_t24910 = (function __GT_t24910(ch__$1,f__$1,map_LT___$1,meta24911){
return (new cljs.core.async.t24910(ch__$1,f__$1,map_LT___$1,meta24911));
});

}

return (new cljs.core.async.t24910(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,743,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,722,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t24925 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24925 = (function (ch,f,map_GT_,meta24926){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta24926 = meta24926;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24925.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t24925.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__24928 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24928) : self__.f.call(null,G__24928));
})(),fn1);
});

cljs.core.async.t24925.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t24925.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t24925.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t24925.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t24925.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24927){
var self__ = this;
var _24927__$1 = this;
return self__.meta24926;
});

cljs.core.async.t24925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24927,meta24926__$1){
var self__ = this;
var _24927__$1 = this;
return (new cljs.core.async.t24925(self__.ch,self__.f,self__.map_GT_,meta24926__$1));
});

cljs.core.async.t24925.cljs$lang$type = true;

cljs.core.async.t24925.cljs$lang$ctorStr = "cljs.core.async/t24925";

cljs.core.async.t24925.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24925");
});

cljs.core.async.__GT_t24925 = (function __GT_t24925(ch__$1,f__$1,map_GT___$1,meta24926){
return (new cljs.core.async.t24925(ch__$1,f__$1,map_GT___$1,meta24926));
});

}

return (new cljs.core.async.t24925(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,34,cljs.core.constant$keyword$9,757,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,748,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t24933 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24933 = (function (ch,p,filter_GT_,meta24934){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta24934 = meta24934;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24933.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t24933.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__24936 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__24936) : self__.p.call(null,G__24936));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t24933.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t24933.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t24933.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t24933.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t24933.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t24933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24935){
var self__ = this;
var _24935__$1 = this;
return self__.meta24934;
});

cljs.core.async.t24933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24935,meta24934__$1){
var self__ = this;
var _24935__$1 = this;
return (new cljs.core.async.t24933(self__.ch,self__.p,self__.filter_GT_,meta24934__$1));
});

cljs.core.async.t24933.cljs$lang$type = true;

cljs.core.async.t24933.cljs$lang$ctorStr = "cljs.core.async/t24933";

cljs.core.async.t24933.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24933");
});

cljs.core.async.__GT_t24933 = (function __GT_t24933(ch__$1,p__$1,filter_GT___$1,meta24934){
return (new cljs.core.async.t24933(ch__$1,p__$1,filter_GT___$1,meta24934));
});

}

return (new cljs.core.async.t24933(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,774,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,762,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
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
var c__5853__auto___25024 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___25024,out){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___25024,out){
return (function (state_25002){
var state_val_25003 = (state_25002[(1)]);
if((state_val_25003 === (7))){
var inst_24998 = (state_25002[(2)]);
var state_25002__$1 = state_25002;
var statearr_25004_25025 = state_25002__$1;
(statearr_25004_25025[(2)] = inst_24998);

(statearr_25004_25025[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25003 === (1))){
var state_25002__$1 = state_25002;
var statearr_25005_25026 = state_25002__$1;
(statearr_25005_25026[(2)] = null);

(statearr_25005_25026[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25003 === (4))){
var inst_24984 = (state_25002[(7)]);
var inst_24984__$1 = (state_25002[(2)]);
var inst_24985 = (inst_24984__$1 == null);
var state_25002__$1 = (function (){var statearr_25006 = state_25002;
(statearr_25006[(7)] = inst_24984__$1);

return statearr_25006;
})();
if(cljs.core.truth_(inst_24985)){
var statearr_25007_25027 = state_25002__$1;
(statearr_25007_25027[(1)] = (5));

} else {
var statearr_25008_25028 = state_25002__$1;
(statearr_25008_25028[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25003 === (6))){
var inst_24984 = (state_25002[(7)]);
var inst_24989 = (function (){var G__25009 = inst_24984;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__25009) : p.call(null,G__25009));
})();
var state_25002__$1 = state_25002;
if(cljs.core.truth_(inst_24989)){
var statearr_25010_25029 = state_25002__$1;
(statearr_25010_25029[(1)] = (8));

} else {
var statearr_25011_25030 = state_25002__$1;
(statearr_25011_25030[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25003 === (3))){
var inst_25000 = (state_25002[(2)]);
var state_25002__$1 = state_25002;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25002__$1,inst_25000);
} else {
if((state_val_25003 === (2))){
var state_25002__$1 = state_25002;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25002__$1,(4),ch);
} else {
if((state_val_25003 === (11))){
var inst_24992 = (state_25002[(2)]);
var state_25002__$1 = state_25002;
var statearr_25012_25031 = state_25002__$1;
(statearr_25012_25031[(2)] = inst_24992);

(statearr_25012_25031[(1)] = (10));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25003 === (9))){
var state_25002__$1 = state_25002;
var statearr_25013_25032 = state_25002__$1;
(statearr_25013_25032[(2)] = null);

(statearr_25013_25032[(1)] = (10));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25003 === (5))){
var inst_24987 = cljs.core.async.close_BANG_(out);
var state_25002__$1 = state_25002;
var statearr_25014_25033 = state_25002__$1;
(statearr_25014_25033[(2)] = inst_24987);

(statearr_25014_25033[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25003 === (10))){
var inst_24995 = (state_25002[(2)]);
var state_25002__$1 = (function (){var statearr_25015 = state_25002;
(statearr_25015[(8)] = inst_24995);

return statearr_25015;
})();
var statearr_25016_25034 = state_25002__$1;
(statearr_25016_25034[(2)] = null);

(statearr_25016_25034[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25003 === (8))){
var inst_24984 = (state_25002[(7)]);
var state_25002__$1 = state_25002;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25002__$1,(11),out,inst_24984);
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
});})(c__5853__auto___25024,out))
;
return ((function (switch__5838__auto__,c__5853__auto___25024,out){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_25020 = [null,null,null,null,null,null,null,null,null];
(statearr_25020[(0)] = state_machine__5839__auto__);

(statearr_25020[(1)] = (1));

return statearr_25020;
});
var state_machine__5839__auto____1 = (function (state_25002){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_25002);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e25021){if((e25021 instanceof Object)){
var ex__5842__auto__ = e25021;
var statearr_25022_25035 = state_25002;
(statearr_25022_25035[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25002);

return cljs.core.constant$keyword$41;
} else {
throw e25021;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__25036 = state_25002;
state_25002 = G__25036;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_25002){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_25002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___25024,out))
})();
var state__5855__auto__ = (function (){var statearr_25023 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_25023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___25024);

return statearr_25023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___25024,out))
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
var c__5853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto__){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto__){
return (function (state_25206){
var state_val_25207 = (state_25206[(1)]);
if((state_val_25207 === (7))){
var inst_25202 = (state_25206[(2)]);
var state_25206__$1 = state_25206;
var statearr_25208_25250 = state_25206__$1;
(statearr_25208_25250[(2)] = inst_25202);

(statearr_25208_25250[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25207 === (20))){
var inst_25172 = (state_25206[(7)]);
var inst_25183 = (state_25206[(2)]);
var inst_25184 = cljs.core.next(inst_25172);
var inst_25158 = inst_25184;
var inst_25159 = null;
var inst_25160 = (0);
var inst_25161 = (0);
var state_25206__$1 = (function (){var statearr_25209 = state_25206;
(statearr_25209[(8)] = inst_25159);

(statearr_25209[(9)] = inst_25160);

(statearr_25209[(10)] = inst_25158);

(statearr_25209[(11)] = inst_25183);

(statearr_25209[(12)] = inst_25161);

return statearr_25209;
})();
var statearr_25210_25251 = state_25206__$1;
(statearr_25210_25251[(2)] = null);

(statearr_25210_25251[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25207 === (1))){
var state_25206__$1 = state_25206;
var statearr_25211_25252 = state_25206__$1;
(statearr_25211_25252[(2)] = null);

(statearr_25211_25252[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25207 === (4))){
var inst_25147 = (state_25206[(13)]);
var inst_25147__$1 = (state_25206[(2)]);
var inst_25148 = (inst_25147__$1 == null);
var state_25206__$1 = (function (){var statearr_25212 = state_25206;
(statearr_25212[(13)] = inst_25147__$1);

return statearr_25212;
})();
if(cljs.core.truth_(inst_25148)){
var statearr_25213_25253 = state_25206__$1;
(statearr_25213_25253[(1)] = (5));

} else {
var statearr_25214_25254 = state_25206__$1;
(statearr_25214_25254[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25207 === (15))){
var state_25206__$1 = state_25206;
var statearr_25218_25255 = state_25206__$1;
(statearr_25218_25255[(2)] = null);

(statearr_25218_25255[(1)] = (16));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25207 === (21))){
var state_25206__$1 = state_25206;
var statearr_25219_25256 = state_25206__$1;
(statearr_25219_25256[(2)] = null);

(statearr_25219_25256[(1)] = (23));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25207 === (13))){
var inst_25159 = (state_25206[(8)]);
var inst_25160 = (state_25206[(9)]);
var inst_25158 = (state_25206[(10)]);
var inst_25161 = (state_25206[(12)]);
var inst_25168 = (state_25206[(2)]);
var inst_25169 = (inst_25161 + (1));
var tmp25215 = inst_25159;
var tmp25216 = inst_25160;
var tmp25217 = inst_25158;
var inst_25158__$1 = tmp25217;
var inst_25159__$1 = tmp25215;
var inst_25160__$1 = tmp25216;
var inst_25161__$1 = inst_25169;
var state_25206__$1 = (function (){var statearr_25220 = state_25206;
(statearr_25220[(8)] = inst_25159__$1);

(statearr_25220[(9)] = inst_25160__$1);

(statearr_25220[(14)] = inst_25168);

(statearr_25220[(10)] = inst_25158__$1);

(statearr_25220[(12)] = inst_25161__$1);

return statearr_25220;
})();
var statearr_25221_25257 = state_25206__$1;
(statearr_25221_25257[(2)] = null);

(statearr_25221_25257[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25207 === (22))){
var state_25206__$1 = state_25206;
var statearr_25222_25258 = state_25206__$1;
(statearr_25222_25258[(2)] = null);

(statearr_25222_25258[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25207 === (6))){
var inst_25147 = (state_25206[(13)]);
var inst_25156 = (function (){var G__25223 = inst_25147;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25223) : f.call(null,G__25223));
})();
var inst_25157 = cljs.core.seq(inst_25156);
var inst_25158 = inst_25157;
var inst_25159 = null;
var inst_25160 = (0);
var inst_25161 = (0);
var state_25206__$1 = (function (){var statearr_25224 = state_25206;
(statearr_25224[(8)] = inst_25159);

(statearr_25224[(9)] = inst_25160);

(statearr_25224[(10)] = inst_25158);

(statearr_25224[(12)] = inst_25161);

return statearr_25224;
})();
var statearr_25225_25259 = state_25206__$1;
(statearr_25225_25259[(2)] = null);

(statearr_25225_25259[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25207 === (17))){
var inst_25172 = (state_25206[(7)]);
var inst_25176 = cljs.core.chunk_first(inst_25172);
var inst_25177 = cljs.core.chunk_rest(inst_25172);
var inst_25178 = cljs.core.count(inst_25176);
var inst_25158 = inst_25177;
var inst_25159 = inst_25176;
var inst_25160 = inst_25178;
var inst_25161 = (0);
var state_25206__$1 = (function (){var statearr_25226 = state_25206;
(statearr_25226[(8)] = inst_25159);

(statearr_25226[(9)] = inst_25160);

(statearr_25226[(10)] = inst_25158);

(statearr_25226[(12)] = inst_25161);

return statearr_25226;
})();
var statearr_25227_25260 = state_25206__$1;
(statearr_25227_25260[(2)] = null);

(statearr_25227_25260[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25207 === (3))){
var inst_25204 = (state_25206[(2)]);
var state_25206__$1 = state_25206;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25206__$1,inst_25204);
} else {
if((state_val_25207 === (12))){
var inst_25192 = (state_25206[(2)]);
var state_25206__$1 = state_25206;
var statearr_25228_25261 = state_25206__$1;
(statearr_25228_25261[(2)] = inst_25192);

(statearr_25228_25261[(1)] = (9));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25207 === (2))){
var state_25206__$1 = state_25206;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25206__$1,(4),in$);
} else {
if((state_val_25207 === (23))){
var inst_25200 = (state_25206[(2)]);
var state_25206__$1 = state_25206;
var statearr_25229_25262 = state_25206__$1;
(statearr_25229_25262[(2)] = inst_25200);

(statearr_25229_25262[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25207 === (19))){
var inst_25187 = (state_25206[(2)]);
var state_25206__$1 = state_25206;
var statearr_25230_25263 = state_25206__$1;
(statearr_25230_25263[(2)] = inst_25187);

(statearr_25230_25263[(1)] = (16));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25207 === (11))){
var inst_25158 = (state_25206[(10)]);
var inst_25172 = (state_25206[(7)]);
var inst_25172__$1 = cljs.core.seq(inst_25158);
var state_25206__$1 = (function (){var statearr_25231 = state_25206;
(statearr_25231[(7)] = inst_25172__$1);

return statearr_25231;
})();
if(inst_25172__$1){
var statearr_25232_25264 = state_25206__$1;
(statearr_25232_25264[(1)] = (14));

} else {
var statearr_25233_25265 = state_25206__$1;
(statearr_25233_25265[(1)] = (15));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25207 === (9))){
var inst_25194 = (state_25206[(2)]);
var inst_25195 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_25206__$1 = (function (){var statearr_25234 = state_25206;
(statearr_25234[(15)] = inst_25194);

return statearr_25234;
})();
if(cljs.core.truth_(inst_25195)){
var statearr_25235_25266 = state_25206__$1;
(statearr_25235_25266[(1)] = (21));

} else {
var statearr_25236_25267 = state_25206__$1;
(statearr_25236_25267[(1)] = (22));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25207 === (5))){
var inst_25150 = cljs.core.async.close_BANG_(out);
var state_25206__$1 = state_25206;
var statearr_25237_25268 = state_25206__$1;
(statearr_25237_25268[(2)] = inst_25150);

(statearr_25237_25268[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25207 === (14))){
var inst_25172 = (state_25206[(7)]);
var inst_25174 = cljs.core.chunked_seq_QMARK_(inst_25172);
var state_25206__$1 = state_25206;
if(inst_25174){
var statearr_25238_25269 = state_25206__$1;
(statearr_25238_25269[(1)] = (17));

} else {
var statearr_25239_25270 = state_25206__$1;
(statearr_25239_25270[(1)] = (18));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25207 === (16))){
var inst_25190 = (state_25206[(2)]);
var state_25206__$1 = state_25206;
var statearr_25240_25271 = state_25206__$1;
(statearr_25240_25271[(2)] = inst_25190);

(statearr_25240_25271[(1)] = (12));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25207 === (10))){
var inst_25159 = (state_25206[(8)]);
var inst_25161 = (state_25206[(12)]);
var inst_25166 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25159,inst_25161);
var state_25206__$1 = state_25206;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25206__$1,(13),out,inst_25166);
} else {
if((state_val_25207 === (18))){
var inst_25172 = (state_25206[(7)]);
var inst_25181 = cljs.core.first(inst_25172);
var state_25206__$1 = state_25206;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25206__$1,(20),out,inst_25181);
} else {
if((state_val_25207 === (8))){
var inst_25160 = (state_25206[(9)]);
var inst_25161 = (state_25206[(12)]);
var inst_25163 = (inst_25161 < inst_25160);
var inst_25164 = inst_25163;
var state_25206__$1 = state_25206;
if(cljs.core.truth_(inst_25164)){
var statearr_25241_25272 = state_25206__$1;
(statearr_25241_25272[(1)] = (10));

} else {
var statearr_25242_25273 = state_25206__$1;
(statearr_25242_25273[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
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
var statearr_25246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25246[(0)] = state_machine__5839__auto__);

(statearr_25246[(1)] = (1));

return statearr_25246;
});
var state_machine__5839__auto____1 = (function (state_25206){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_25206);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e25247){if((e25247 instanceof Object)){
var ex__5842__auto__ = e25247;
var statearr_25248_25274 = state_25206;
(statearr_25248_25274[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25206);

return cljs.core.constant$keyword$41;
} else {
throw e25247;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__25275 = state_25206;
state_25206 = G__25275;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_25206){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_25206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto__))
})();
var state__5855__auto__ = (function (){var statearr_25249 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_25249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto__);

return statearr_25249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto__))
);

return c__5853__auto__;
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
var c__5853__auto___25380 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___25380,out){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___25380,out){
return (function (state_25355){
var state_val_25356 = (state_25355[(1)]);
if((state_val_25356 === (7))){
var inst_25350 = (state_25355[(2)]);
var state_25355__$1 = state_25355;
var statearr_25357_25381 = state_25355__$1;
(statearr_25357_25381[(2)] = inst_25350);

(statearr_25357_25381[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25356 === (1))){
var inst_25332 = null;
var state_25355__$1 = (function (){var statearr_25358 = state_25355;
(statearr_25358[(7)] = inst_25332);

return statearr_25358;
})();
var statearr_25359_25382 = state_25355__$1;
(statearr_25359_25382[(2)] = null);

(statearr_25359_25382[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25356 === (4))){
var inst_25335 = (state_25355[(8)]);
var inst_25335__$1 = (state_25355[(2)]);
var inst_25336 = (inst_25335__$1 == null);
var inst_25337 = cljs.core.not(inst_25336);
var state_25355__$1 = (function (){var statearr_25360 = state_25355;
(statearr_25360[(8)] = inst_25335__$1);

return statearr_25360;
})();
if(inst_25337){
var statearr_25361_25383 = state_25355__$1;
(statearr_25361_25383[(1)] = (5));

} else {
var statearr_25362_25384 = state_25355__$1;
(statearr_25362_25384[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25356 === (6))){
var state_25355__$1 = state_25355;
var statearr_25363_25385 = state_25355__$1;
(statearr_25363_25385[(2)] = null);

(statearr_25363_25385[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25356 === (3))){
var inst_25352 = (state_25355[(2)]);
var inst_25353 = cljs.core.async.close_BANG_(out);
var state_25355__$1 = (function (){var statearr_25364 = state_25355;
(statearr_25364[(9)] = inst_25352);

return statearr_25364;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25355__$1,inst_25353);
} else {
if((state_val_25356 === (2))){
var state_25355__$1 = state_25355;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25355__$1,(4),ch);
} else {
if((state_val_25356 === (11))){
var inst_25335 = (state_25355[(8)]);
var inst_25344 = (state_25355[(2)]);
var inst_25332 = inst_25335;
var state_25355__$1 = (function (){var statearr_25365 = state_25355;
(statearr_25365[(7)] = inst_25332);

(statearr_25365[(10)] = inst_25344);

return statearr_25365;
})();
var statearr_25366_25386 = state_25355__$1;
(statearr_25366_25386[(2)] = null);

(statearr_25366_25386[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25356 === (9))){
var inst_25335 = (state_25355[(8)]);
var state_25355__$1 = state_25355;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25355__$1,(11),out,inst_25335);
} else {
if((state_val_25356 === (5))){
var inst_25332 = (state_25355[(7)]);
var inst_25335 = (state_25355[(8)]);
var inst_25339 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25335,inst_25332);
var state_25355__$1 = state_25355;
if(inst_25339){
var statearr_25368_25387 = state_25355__$1;
(statearr_25368_25387[(1)] = (8));

} else {
var statearr_25369_25388 = state_25355__$1;
(statearr_25369_25388[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25356 === (10))){
var inst_25347 = (state_25355[(2)]);
var state_25355__$1 = state_25355;
var statearr_25370_25389 = state_25355__$1;
(statearr_25370_25389[(2)] = inst_25347);

(statearr_25370_25389[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25356 === (8))){
var inst_25332 = (state_25355[(7)]);
var tmp25367 = inst_25332;
var inst_25332__$1 = tmp25367;
var state_25355__$1 = (function (){var statearr_25371 = state_25355;
(statearr_25371[(7)] = inst_25332__$1);

return statearr_25371;
})();
var statearr_25372_25390 = state_25355__$1;
(statearr_25372_25390[(2)] = null);

(statearr_25372_25390[(1)] = (2));


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
}
}
}
}
});})(c__5853__auto___25380,out))
;
return ((function (switch__5838__auto__,c__5853__auto___25380,out){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_25376 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25376[(0)] = state_machine__5839__auto__);

(statearr_25376[(1)] = (1));

return statearr_25376;
});
var state_machine__5839__auto____1 = (function (state_25355){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_25355);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e25377){if((e25377 instanceof Object)){
var ex__5842__auto__ = e25377;
var statearr_25378_25391 = state_25355;
(statearr_25378_25391[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25355);

return cljs.core.constant$keyword$41;
} else {
throw e25377;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__25392 = state_25355;
state_25355 = G__25392;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_25355){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_25355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___25380,out))
})();
var state__5855__auto__ = (function (){var statearr_25379 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_25379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___25380);

return statearr_25379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___25380,out))
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
var c__5853__auto___25530 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___25530,out){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___25530,out){
return (function (state_25500){
var state_val_25501 = (state_25500[(1)]);
if((state_val_25501 === (7))){
var inst_25496 = (state_25500[(2)]);
var state_25500__$1 = state_25500;
var statearr_25502_25531 = state_25500__$1;
(statearr_25502_25531[(2)] = inst_25496);

(statearr_25502_25531[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25501 === (1))){
var inst_25463 = (new Array(n));
var inst_25464 = inst_25463;
var inst_25465 = (0);
var state_25500__$1 = (function (){var statearr_25503 = state_25500;
(statearr_25503[(7)] = inst_25465);

(statearr_25503[(8)] = inst_25464);

return statearr_25503;
})();
var statearr_25504_25532 = state_25500__$1;
(statearr_25504_25532[(2)] = null);

(statearr_25504_25532[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25501 === (4))){
var inst_25468 = (state_25500[(9)]);
var inst_25468__$1 = (state_25500[(2)]);
var inst_25469 = (inst_25468__$1 == null);
var inst_25470 = cljs.core.not(inst_25469);
var state_25500__$1 = (function (){var statearr_25505 = state_25500;
(statearr_25505[(9)] = inst_25468__$1);

return statearr_25505;
})();
if(inst_25470){
var statearr_25506_25533 = state_25500__$1;
(statearr_25506_25533[(1)] = (5));

} else {
var statearr_25507_25534 = state_25500__$1;
(statearr_25507_25534[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25501 === (15))){
var inst_25490 = (state_25500[(2)]);
var state_25500__$1 = state_25500;
var statearr_25508_25535 = state_25500__$1;
(statearr_25508_25535[(2)] = inst_25490);

(statearr_25508_25535[(1)] = (14));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25501 === (13))){
var state_25500__$1 = state_25500;
var statearr_25509_25536 = state_25500__$1;
(statearr_25509_25536[(2)] = null);

(statearr_25509_25536[(1)] = (14));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25501 === (6))){
var inst_25465 = (state_25500[(7)]);
var inst_25486 = (inst_25465 > (0));
var state_25500__$1 = state_25500;
if(cljs.core.truth_(inst_25486)){
var statearr_25510_25537 = state_25500__$1;
(statearr_25510_25537[(1)] = (12));

} else {
var statearr_25511_25538 = state_25500__$1;
(statearr_25511_25538[(1)] = (13));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25501 === (3))){
var inst_25498 = (state_25500[(2)]);
var state_25500__$1 = state_25500;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25500__$1,inst_25498);
} else {
if((state_val_25501 === (12))){
var inst_25464 = (state_25500[(8)]);
var inst_25488 = cljs.core.vec(inst_25464);
var state_25500__$1 = state_25500;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25500__$1,(15),out,inst_25488);
} else {
if((state_val_25501 === (2))){
var state_25500__$1 = state_25500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25500__$1,(4),ch);
} else {
if((state_val_25501 === (11))){
var inst_25480 = (state_25500[(2)]);
var inst_25481 = (new Array(n));
var inst_25464 = inst_25481;
var inst_25465 = (0);
var state_25500__$1 = (function (){var statearr_25512 = state_25500;
(statearr_25512[(10)] = inst_25480);

(statearr_25512[(7)] = inst_25465);

(statearr_25512[(8)] = inst_25464);

return statearr_25512;
})();
var statearr_25513_25539 = state_25500__$1;
(statearr_25513_25539[(2)] = null);

(statearr_25513_25539[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25501 === (9))){
var inst_25464 = (state_25500[(8)]);
var inst_25478 = cljs.core.vec(inst_25464);
var state_25500__$1 = state_25500;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25500__$1,(11),out,inst_25478);
} else {
if((state_val_25501 === (5))){
var inst_25465 = (state_25500[(7)]);
var inst_25468 = (state_25500[(9)]);
var inst_25473 = (state_25500[(11)]);
var inst_25464 = (state_25500[(8)]);
var inst_25472 = (inst_25464[inst_25465] = inst_25468);
var inst_25473__$1 = (inst_25465 + (1));
var inst_25474 = (inst_25473__$1 < n);
var state_25500__$1 = (function (){var statearr_25514 = state_25500;
(statearr_25514[(11)] = inst_25473__$1);

(statearr_25514[(12)] = inst_25472);

return statearr_25514;
})();
if(cljs.core.truth_(inst_25474)){
var statearr_25515_25540 = state_25500__$1;
(statearr_25515_25540[(1)] = (8));

} else {
var statearr_25516_25541 = state_25500__$1;
(statearr_25516_25541[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25501 === (14))){
var inst_25493 = (state_25500[(2)]);
var inst_25494 = cljs.core.async.close_BANG_(out);
var state_25500__$1 = (function (){var statearr_25518 = state_25500;
(statearr_25518[(13)] = inst_25493);

return statearr_25518;
})();
var statearr_25519_25542 = state_25500__$1;
(statearr_25519_25542[(2)] = inst_25494);

(statearr_25519_25542[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25501 === (10))){
var inst_25484 = (state_25500[(2)]);
var state_25500__$1 = state_25500;
var statearr_25520_25543 = state_25500__$1;
(statearr_25520_25543[(2)] = inst_25484);

(statearr_25520_25543[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25501 === (8))){
var inst_25473 = (state_25500[(11)]);
var inst_25464 = (state_25500[(8)]);
var tmp25517 = inst_25464;
var inst_25464__$1 = tmp25517;
var inst_25465 = inst_25473;
var state_25500__$1 = (function (){var statearr_25521 = state_25500;
(statearr_25521[(7)] = inst_25465);

(statearr_25521[(8)] = inst_25464__$1);

return statearr_25521;
})();
var statearr_25522_25544 = state_25500__$1;
(statearr_25522_25544[(2)] = null);

(statearr_25522_25544[(1)] = (2));


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
}
}
}
}
}
}
}
}
});})(c__5853__auto___25530,out))
;
return ((function (switch__5838__auto__,c__5853__auto___25530,out){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_25526 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25526[(0)] = state_machine__5839__auto__);

(statearr_25526[(1)] = (1));

return statearr_25526;
});
var state_machine__5839__auto____1 = (function (state_25500){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_25500);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e25527){if((e25527 instanceof Object)){
var ex__5842__auto__ = e25527;
var statearr_25528_25545 = state_25500;
(statearr_25528_25545[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25500);

return cljs.core.constant$keyword$41;
} else {
throw e25527;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__25546 = state_25500;
state_25500 = G__25546;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_25500){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_25500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___25530,out))
})();
var state__5855__auto__ = (function (){var statearr_25529 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_25529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___25530);

return statearr_25529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___25530,out))
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
var c__5853__auto___25694 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___25694,out){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___25694,out){
return (function (state_25663){
var state_val_25664 = (state_25663[(1)]);
if((state_val_25664 === (7))){
var inst_25659 = (state_25663[(2)]);
var state_25663__$1 = state_25663;
var statearr_25665_25695 = state_25663__$1;
(statearr_25665_25695[(2)] = inst_25659);

(statearr_25665_25695[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25664 === (1))){
var inst_25622 = [];
var inst_25623 = inst_25622;
var inst_25624 = cljs.core.constant$keyword$56;
var state_25663__$1 = (function (){var statearr_25666 = state_25663;
(statearr_25666[(7)] = inst_25624);

(statearr_25666[(8)] = inst_25623);

return statearr_25666;
})();
var statearr_25667_25696 = state_25663__$1;
(statearr_25667_25696[(2)] = null);

(statearr_25667_25696[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25664 === (4))){
var inst_25627 = (state_25663[(9)]);
var inst_25627__$1 = (state_25663[(2)]);
var inst_25628 = (inst_25627__$1 == null);
var inst_25629 = cljs.core.not(inst_25628);
var state_25663__$1 = (function (){var statearr_25668 = state_25663;
(statearr_25668[(9)] = inst_25627__$1);

return statearr_25668;
})();
if(inst_25629){
var statearr_25669_25697 = state_25663__$1;
(statearr_25669_25697[(1)] = (5));

} else {
var statearr_25670_25698 = state_25663__$1;
(statearr_25670_25698[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25664 === (15))){
var inst_25653 = (state_25663[(2)]);
var state_25663__$1 = state_25663;
var statearr_25671_25699 = state_25663__$1;
(statearr_25671_25699[(2)] = inst_25653);

(statearr_25671_25699[(1)] = (14));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25664 === (13))){
var state_25663__$1 = state_25663;
var statearr_25672_25700 = state_25663__$1;
(statearr_25672_25700[(2)] = null);

(statearr_25672_25700[(1)] = (14));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25664 === (6))){
var inst_25623 = (state_25663[(8)]);
var inst_25648 = inst_25623.length;
var inst_25649 = (inst_25648 > (0));
var state_25663__$1 = state_25663;
if(cljs.core.truth_(inst_25649)){
var statearr_25673_25701 = state_25663__$1;
(statearr_25673_25701[(1)] = (12));

} else {
var statearr_25674_25702 = state_25663__$1;
(statearr_25674_25702[(1)] = (13));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25664 === (3))){
var inst_25661 = (state_25663[(2)]);
var state_25663__$1 = state_25663;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25663__$1,inst_25661);
} else {
if((state_val_25664 === (12))){
var inst_25623 = (state_25663[(8)]);
var inst_25651 = cljs.core.vec(inst_25623);
var state_25663__$1 = state_25663;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25663__$1,(15),out,inst_25651);
} else {
if((state_val_25664 === (2))){
var state_25663__$1 = state_25663;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25663__$1,(4),ch);
} else {
if((state_val_25664 === (11))){
var inst_25631 = (state_25663[(10)]);
var inst_25627 = (state_25663[(9)]);
var inst_25641 = (state_25663[(2)]);
var inst_25642 = [];
var inst_25643 = inst_25642.push(inst_25627);
var inst_25623 = inst_25642;
var inst_25624 = inst_25631;
var state_25663__$1 = (function (){var statearr_25675 = state_25663;
(statearr_25675[(7)] = inst_25624);

(statearr_25675[(11)] = inst_25643);

(statearr_25675[(8)] = inst_25623);

(statearr_25675[(12)] = inst_25641);

return statearr_25675;
})();
var statearr_25676_25703 = state_25663__$1;
(statearr_25676_25703[(2)] = null);

(statearr_25676_25703[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25664 === (9))){
var inst_25623 = (state_25663[(8)]);
var inst_25639 = cljs.core.vec(inst_25623);
var state_25663__$1 = state_25663;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25663__$1,(11),out,inst_25639);
} else {
if((state_val_25664 === (5))){
var inst_25631 = (state_25663[(10)]);
var inst_25624 = (state_25663[(7)]);
var inst_25627 = (state_25663[(9)]);
var inst_25631__$1 = (function (){var G__25677 = inst_25627;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25677) : f.call(null,G__25677));
})();
var inst_25632 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25631__$1,inst_25624);
var inst_25633 = cljs.core.keyword_identical_QMARK_(inst_25624,cljs.core.constant$keyword$56);
var inst_25634 = (inst_25632) || (inst_25633);
var state_25663__$1 = (function (){var statearr_25678 = state_25663;
(statearr_25678[(10)] = inst_25631__$1);

return statearr_25678;
})();
if(cljs.core.truth_(inst_25634)){
var statearr_25679_25704 = state_25663__$1;
(statearr_25679_25704[(1)] = (8));

} else {
var statearr_25680_25705 = state_25663__$1;
(statearr_25680_25705[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25664 === (14))){
var inst_25656 = (state_25663[(2)]);
var inst_25657 = cljs.core.async.close_BANG_(out);
var state_25663__$1 = (function (){var statearr_25682 = state_25663;
(statearr_25682[(13)] = inst_25656);

return statearr_25682;
})();
var statearr_25683_25706 = state_25663__$1;
(statearr_25683_25706[(2)] = inst_25657);

(statearr_25683_25706[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25664 === (10))){
var inst_25646 = (state_25663[(2)]);
var state_25663__$1 = state_25663;
var statearr_25684_25707 = state_25663__$1;
(statearr_25684_25707[(2)] = inst_25646);

(statearr_25684_25707[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25664 === (8))){
var inst_25631 = (state_25663[(10)]);
var inst_25627 = (state_25663[(9)]);
var inst_25623 = (state_25663[(8)]);
var inst_25636 = inst_25623.push(inst_25627);
var tmp25681 = inst_25623;
var inst_25623__$1 = tmp25681;
var inst_25624 = inst_25631;
var state_25663__$1 = (function (){var statearr_25685 = state_25663;
(statearr_25685[(7)] = inst_25624);

(statearr_25685[(8)] = inst_25623__$1);

(statearr_25685[(14)] = inst_25636);

return statearr_25685;
})();
var statearr_25686_25708 = state_25663__$1;
(statearr_25686_25708[(2)] = null);

(statearr_25686_25708[(1)] = (2));


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
}
}
}
}
}
}
}
}
});})(c__5853__auto___25694,out))
;
return ((function (switch__5838__auto__,c__5853__auto___25694,out){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_25690 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25690[(0)] = state_machine__5839__auto__);

(statearr_25690[(1)] = (1));

return statearr_25690;
});
var state_machine__5839__auto____1 = (function (state_25663){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_25663);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e25691){if((e25691 instanceof Object)){
var ex__5842__auto__ = e25691;
var statearr_25692_25709 = state_25663;
(statearr_25692_25709[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25663);

return cljs.core.constant$keyword$41;
} else {
throw e25691;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__25710 = state_25663;
state_25663 = G__25710;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_25663){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_25663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___25694,out))
})();
var state__5855__auto__ = (function (){var statearr_25693 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_25693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___25694);

return statearr_25693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___25694,out))
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
