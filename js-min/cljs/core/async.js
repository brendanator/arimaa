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
if(typeof cljs.core.async.t22333 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22333 = (function (f,fn_handler,meta22334){
this.f = f;
this.fn_handler = fn_handler;
this.meta22334 = meta22334;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22333.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22333.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t22333.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t22333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22335){
var self__ = this;
var _22335__$1 = this;
return self__.meta22334;
});

cljs.core.async.t22333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22335,meta22334__$1){
var self__ = this;
var _22335__$1 = this;
return (new cljs.core.async.t22333(self__.f,self__.fn_handler,meta22334__$1));
});

cljs.core.async.t22333.cljs$lang$type = true;

cljs.core.async.t22333.cljs$lang$ctorStr = "cljs.core.async/t22333";

cljs.core.async.t22333.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t22333");
});

cljs.core.async.__GT_t22333 = (function __GT_t22333(f__$1,fn_handler__$1,meta22334){
return (new cljs.core.async.t22333(f__$1,fn_handler__$1,meta22334));
});

}

return (new cljs.core.async.t22333(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,20,cljs.core.constant$keyword$9,16,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,13,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/resources/public/js-min/cljs/core/async.cljs"], null)));
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
var G__22337 = buff;
if(G__22337){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__22337.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__22337.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__22337);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__22337);
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
var val_22354 = (function (){var G__22351 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22351) : cljs.core.deref.call(null,G__22351));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__22352_22355 = val_22354;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22352_22355) : fn1.call(null,G__22352_22355));
} else {
cljs.core.async.impl.dispatch.run(((function (val_22354,ret){
return (function (){
var G__22353 = val_22354;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22353) : fn1.call(null,G__22353));
});})(val_22354,ret))
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
var G__22364 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22364) : cljs.core.deref.call(null,G__22364));
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
var ret = (function (){var G__22365 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22365) : cljs.core.deref.call(null,G__22365));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__22366_22368 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22366_22368) : fn1.call(null,G__22366_22368));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__22367 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22367) : fn1.call(null,G__22367));
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
var n__4517__auto___22369 = n;
var x_22370 = (0);
while(true){
if((x_22370 < n__4517__auto___22369)){
(a[x_22370] = (0));

var G__22371 = (x_22370 + (1));
x_22370 = G__22371;
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

var G__22372 = (i + (1));
i = G__22372;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__22380 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22380) : cljs.core.atom.call(null,G__22380));
})();
if(typeof cljs.core.async.t22381 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22381 = (function (flag,alt_flag,meta22382){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta22382 = meta22382;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22381.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22381.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22384 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22384) : cljs.core.deref.call(null,G__22384));
});})(flag))
;

cljs.core.async.t22381.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22385_22387 = self__.flag;
var G__22386_22388 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22385_22387,G__22386_22388) : cljs.core.reset_BANG_.call(null,G__22385_22387,G__22386_22388));

return true;
});})(flag))
;

cljs.core.async.t22381.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22383){
var self__ = this;
var _22383__$1 = this;
return self__.meta22382;
});})(flag))
;

cljs.core.async.t22381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22383,meta22382__$1){
var self__ = this;
var _22383__$1 = this;
return (new cljs.core.async.t22381(self__.flag,self__.alt_flag,meta22382__$1));
});})(flag))
;

cljs.core.async.t22381.cljs$lang$type = true;

cljs.core.async.t22381.cljs$lang$ctorStr = "cljs.core.async/t22381";

cljs.core.async.t22381.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t22381");
});})(flag))
;

cljs.core.async.__GT_t22381 = ((function (flag){
return (function __GT_t22381(flag__$1,alt_flag__$1,meta22382){
return (new cljs.core.async.t22381(flag__$1,alt_flag__$1,meta22382));
});})(flag))
;

}

return (new cljs.core.async.t22381(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,15,cljs.core.constant$keyword$9,146,cljs.core.constant$keyword$10,5,cljs.core.constant$keyword$11,141,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/resources/public/js-min/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t22392 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22392 = (function (cb,flag,alt_handler,meta22393){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta22393 = meta22393;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22392.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22392.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t22392.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t22392.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22394){
var self__ = this;
var _22394__$1 = this;
return self__.meta22393;
});

cljs.core.async.t22392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22394,meta22393__$1){
var self__ = this;
var _22394__$1 = this;
return (new cljs.core.async.t22392(self__.cb,self__.flag,self__.alt_handler,meta22393__$1));
});

cljs.core.async.t22392.cljs$lang$type = true;

cljs.core.async.t22392.cljs$lang$ctorStr = "cljs.core.async/t22392";

cljs.core.async.t22392.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t22392");
});

cljs.core.async.__GT_t22392 = (function __GT_t22392(cb__$1,flag__$1,alt_handler__$1,meta22393){
return (new cljs.core.async.t22392(cb__$1,flag__$1,alt_handler__$1,meta22393));
});

}

return (new cljs.core.async.t22392(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,11,cljs.core.constant$keyword$9,154,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,149,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/resources/public/js-min/cljs/core/async.cljs"], null)));
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
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__22402 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__22402) : port.call(null,G__22402));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__22403 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__22403) : port.call(null,G__22403));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22395_SHARP_){
var G__22404 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22395_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22404) : fret.call(null,G__22404));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22396_SHARP_){
var G__22405 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22396_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22405) : fret.call(null,G__22405));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22406 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22406) : cljs.core.deref.call(null,G__22406));
})(),(function (){var or__3630__auto__ = wport;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22407 = (i + (1));
i = G__22407;
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
var alts_BANG___delegate = function (ports,p__22408){
var map__22410 = p__22408;
var map__22410__$1 = ((cljs.core.seq_QMARK_(map__22410))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22410):map__22410);
var opts = map__22410__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__22408 = null;
if (arguments.length > 1) {
  p__22408 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__22408);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__22411){
var ports = cljs.core.first(arglist__22411);
var p__22408 = cljs.core.rest(arglist__22411);
return alts_BANG___delegate(ports,p__22408);
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
var c__5853__auto___22509 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___22509){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___22509){
return (function (state_22485){
var state_val_22486 = (state_22485[(1)]);
if((state_val_22486 === (7))){
var inst_22481 = (state_22485[(2)]);
var state_22485__$1 = state_22485;
var statearr_22487_22510 = state_22485__$1;
(statearr_22487_22510[(2)] = inst_22481);

(statearr_22487_22510[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22486 === (1))){
var state_22485__$1 = state_22485;
var statearr_22488_22511 = state_22485__$1;
(statearr_22488_22511[(2)] = null);

(statearr_22488_22511[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22486 === (4))){
var inst_22464 = (state_22485[(7)]);
var inst_22464__$1 = (state_22485[(2)]);
var inst_22465 = (inst_22464__$1 == null);
var state_22485__$1 = (function (){var statearr_22489 = state_22485;
(statearr_22489[(7)] = inst_22464__$1);

return statearr_22489;
})();
if(cljs.core.truth_(inst_22465)){
var statearr_22490_22512 = state_22485__$1;
(statearr_22490_22512[(1)] = (5));

} else {
var statearr_22491_22513 = state_22485__$1;
(statearr_22491_22513[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_22486 === (13))){
var state_22485__$1 = state_22485;
var statearr_22492_22514 = state_22485__$1;
(statearr_22492_22514[(2)] = null);

(statearr_22492_22514[(1)] = (14));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22486 === (6))){
var inst_22464 = (state_22485[(7)]);
var state_22485__$1 = state_22485;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22485__$1,(11),to,inst_22464);
} else {
if((state_val_22486 === (3))){
var inst_22483 = (state_22485[(2)]);
var state_22485__$1 = state_22485;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22485__$1,inst_22483);
} else {
if((state_val_22486 === (12))){
var state_22485__$1 = state_22485;
var statearr_22493_22515 = state_22485__$1;
(statearr_22493_22515[(2)] = null);

(statearr_22493_22515[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22486 === (2))){
var state_22485__$1 = state_22485;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22485__$1,(4),from);
} else {
if((state_val_22486 === (11))){
var inst_22474 = (state_22485[(2)]);
var state_22485__$1 = state_22485;
if(cljs.core.truth_(inst_22474)){
var statearr_22494_22516 = state_22485__$1;
(statearr_22494_22516[(1)] = (12));

} else {
var statearr_22495_22517 = state_22485__$1;
(statearr_22495_22517[(1)] = (13));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_22486 === (9))){
var state_22485__$1 = state_22485;
var statearr_22496_22518 = state_22485__$1;
(statearr_22496_22518[(2)] = null);

(statearr_22496_22518[(1)] = (10));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22486 === (5))){
var state_22485__$1 = state_22485;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22497_22519 = state_22485__$1;
(statearr_22497_22519[(1)] = (8));

} else {
var statearr_22498_22520 = state_22485__$1;
(statearr_22498_22520[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_22486 === (14))){
var inst_22479 = (state_22485[(2)]);
var state_22485__$1 = state_22485;
var statearr_22499_22521 = state_22485__$1;
(statearr_22499_22521[(2)] = inst_22479);

(statearr_22499_22521[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22486 === (10))){
var inst_22471 = (state_22485[(2)]);
var state_22485__$1 = state_22485;
var statearr_22500_22522 = state_22485__$1;
(statearr_22500_22522[(2)] = inst_22471);

(statearr_22500_22522[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22486 === (8))){
var inst_22468 = cljs.core.async.close_BANG_(to);
var state_22485__$1 = state_22485;
var statearr_22501_22523 = state_22485__$1;
(statearr_22501_22523[(2)] = inst_22468);

(statearr_22501_22523[(1)] = (10));


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
});})(c__5853__auto___22509))
;
return ((function (switch__5838__auto__,c__5853__auto___22509){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_22505 = [null,null,null,null,null,null,null,null];
(statearr_22505[(0)] = state_machine__5839__auto__);

(statearr_22505[(1)] = (1));

return statearr_22505;
});
var state_machine__5839__auto____1 = (function (state_22485){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_22485);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e22506){if((e22506 instanceof Object)){
var ex__5842__auto__ = e22506;
var statearr_22507_22524 = state_22485;
(statearr_22507_22524[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22485);

return cljs.core.constant$keyword$41;
} else {
throw e22506;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__22525 = state_22485;
state_22485 = G__22525;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_22485){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_22485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___22509))
})();
var state__5855__auto__ = (function (){var statearr_22508 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_22508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___22509);

return statearr_22508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___22509))
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
return (function (p__22711){
var vec__22712 = p__22711;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22712,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22712,(1),null);
var job = vec__22712;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__5853__auto___22896 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___22896,res,vec__22712,v,p,job,jobs,results){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___22896,res,vec__22712,v,p,job,jobs,results){
return (function (state_22717){
var state_val_22718 = (state_22717[(1)]);
if((state_val_22718 === (2))){
var inst_22714 = (state_22717[(2)]);
var inst_22715 = cljs.core.async.close_BANG_(res);
var state_22717__$1 = (function (){var statearr_22719 = state_22717;
(statearr_22719[(7)] = inst_22714);

return statearr_22719;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22717__$1,inst_22715);
} else {
if((state_val_22718 === (1))){
var state_22717__$1 = state_22717;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22717__$1,(2),res,v);
} else {
return null;
}
}
});})(c__5853__auto___22896,res,vec__22712,v,p,job,jobs,results))
;
return ((function (switch__5838__auto__,c__5853__auto___22896,res,vec__22712,v,p,job,jobs,results){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_22723 = [null,null,null,null,null,null,null,null];
(statearr_22723[(0)] = state_machine__5839__auto__);

(statearr_22723[(1)] = (1));

return statearr_22723;
});
var state_machine__5839__auto____1 = (function (state_22717){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_22717);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e22724){if((e22724 instanceof Object)){
var ex__5842__auto__ = e22724;
var statearr_22725_22897 = state_22717;
(statearr_22725_22897[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22717);

return cljs.core.constant$keyword$41;
} else {
throw e22724;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__22898 = state_22717;
state_22717 = G__22898;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_22717){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_22717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___22896,res,vec__22712,v,p,job,jobs,results))
})();
var state__5855__auto__ = (function (){var statearr_22726 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_22726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___22896);

return statearr_22726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___22896,res,vec__22712,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22727){
var vec__22728 = p__22727;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22728,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22728,(1),null);
var job = vec__22728;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__22729_22899 = v;
var G__22730_22900 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__22729_22899,G__22730_22900) : xf.call(null,G__22729_22899,G__22730_22900));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4517__auto___22901 = n;
var __22902 = (0);
while(true){
if((__22902 < n__4517__auto___22901)){
var G__22731_22903 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22731_22903) {
case "async":
var c__5853__auto___22905 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__22902,c__5853__auto___22905,G__22731_22903,n__4517__auto___22901,jobs,results,process,async){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (__22902,c__5853__auto___22905,G__22731_22903,n__4517__auto___22901,jobs,results,process,async){
return (function (state_22744){
var state_val_22745 = (state_22744[(1)]);
if((state_val_22745 === (7))){
var inst_22740 = (state_22744[(2)]);
var state_22744__$1 = state_22744;
var statearr_22746_22906 = state_22744__$1;
(statearr_22746_22906[(2)] = inst_22740);

(statearr_22746_22906[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22745 === (6))){
var state_22744__$1 = state_22744;
var statearr_22747_22907 = state_22744__$1;
(statearr_22747_22907[(2)] = null);

(statearr_22747_22907[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22745 === (5))){
var state_22744__$1 = state_22744;
var statearr_22748_22908 = state_22744__$1;
(statearr_22748_22908[(2)] = null);

(statearr_22748_22908[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22745 === (4))){
var inst_22734 = (state_22744[(2)]);
var inst_22735 = async(inst_22734);
var state_22744__$1 = state_22744;
if(cljs.core.truth_(inst_22735)){
var statearr_22749_22909 = state_22744__$1;
(statearr_22749_22909[(1)] = (5));

} else {
var statearr_22750_22910 = state_22744__$1;
(statearr_22750_22910[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_22745 === (3))){
var inst_22742 = (state_22744[(2)]);
var state_22744__$1 = state_22744;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22744__$1,inst_22742);
} else {
if((state_val_22745 === (2))){
var state_22744__$1 = state_22744;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22744__$1,(4),jobs);
} else {
if((state_val_22745 === (1))){
var state_22744__$1 = state_22744;
var statearr_22751_22911 = state_22744__$1;
(statearr_22751_22911[(2)] = null);

(statearr_22751_22911[(1)] = (2));


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
});})(__22902,c__5853__auto___22905,G__22731_22903,n__4517__auto___22901,jobs,results,process,async))
;
return ((function (__22902,switch__5838__auto__,c__5853__auto___22905,G__22731_22903,n__4517__auto___22901,jobs,results,process,async){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_22755 = [null,null,null,null,null,null,null];
(statearr_22755[(0)] = state_machine__5839__auto__);

(statearr_22755[(1)] = (1));

return statearr_22755;
});
var state_machine__5839__auto____1 = (function (state_22744){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_22744);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e22756){if((e22756 instanceof Object)){
var ex__5842__auto__ = e22756;
var statearr_22757_22912 = state_22744;
(statearr_22757_22912[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22744);

return cljs.core.constant$keyword$41;
} else {
throw e22756;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__22913 = state_22744;
state_22744 = G__22913;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_22744){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_22744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(__22902,switch__5838__auto__,c__5853__auto___22905,G__22731_22903,n__4517__auto___22901,jobs,results,process,async))
})();
var state__5855__auto__ = (function (){var statearr_22758 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_22758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___22905);

return statearr_22758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(__22902,c__5853__auto___22905,G__22731_22903,n__4517__auto___22901,jobs,results,process,async))
);


break;
case "compute":
var c__5853__auto___22914 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__22902,c__5853__auto___22914,G__22731_22903,n__4517__auto___22901,jobs,results,process,async){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (__22902,c__5853__auto___22914,G__22731_22903,n__4517__auto___22901,jobs,results,process,async){
return (function (state_22771){
var state_val_22772 = (state_22771[(1)]);
if((state_val_22772 === (7))){
var inst_22767 = (state_22771[(2)]);
var state_22771__$1 = state_22771;
var statearr_22773_22915 = state_22771__$1;
(statearr_22773_22915[(2)] = inst_22767);

(statearr_22773_22915[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22772 === (6))){
var state_22771__$1 = state_22771;
var statearr_22774_22916 = state_22771__$1;
(statearr_22774_22916[(2)] = null);

(statearr_22774_22916[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22772 === (5))){
var state_22771__$1 = state_22771;
var statearr_22775_22917 = state_22771__$1;
(statearr_22775_22917[(2)] = null);

(statearr_22775_22917[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22772 === (4))){
var inst_22761 = (state_22771[(2)]);
var inst_22762 = process(inst_22761);
var state_22771__$1 = state_22771;
if(cljs.core.truth_(inst_22762)){
var statearr_22776_22918 = state_22771__$1;
(statearr_22776_22918[(1)] = (5));

} else {
var statearr_22777_22919 = state_22771__$1;
(statearr_22777_22919[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_22772 === (3))){
var inst_22769 = (state_22771[(2)]);
var state_22771__$1 = state_22771;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22771__$1,inst_22769);
} else {
if((state_val_22772 === (2))){
var state_22771__$1 = state_22771;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22771__$1,(4),jobs);
} else {
if((state_val_22772 === (1))){
var state_22771__$1 = state_22771;
var statearr_22778_22920 = state_22771__$1;
(statearr_22778_22920[(2)] = null);

(statearr_22778_22920[(1)] = (2));


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
});})(__22902,c__5853__auto___22914,G__22731_22903,n__4517__auto___22901,jobs,results,process,async))
;
return ((function (__22902,switch__5838__auto__,c__5853__auto___22914,G__22731_22903,n__4517__auto___22901,jobs,results,process,async){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_22782 = [null,null,null,null,null,null,null];
(statearr_22782[(0)] = state_machine__5839__auto__);

(statearr_22782[(1)] = (1));

return statearr_22782;
});
var state_machine__5839__auto____1 = (function (state_22771){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_22771);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e22783){if((e22783 instanceof Object)){
var ex__5842__auto__ = e22783;
var statearr_22784_22921 = state_22771;
(statearr_22784_22921[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22771);

return cljs.core.constant$keyword$41;
} else {
throw e22783;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__22922 = state_22771;
state_22771 = G__22922;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_22771){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_22771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(__22902,switch__5838__auto__,c__5853__auto___22914,G__22731_22903,n__4517__auto___22901,jobs,results,process,async))
})();
var state__5855__auto__ = (function (){var statearr_22785 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_22785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___22914);

return statearr_22785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(__22902,c__5853__auto___22914,G__22731_22903,n__4517__auto___22901,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22923 = (__22902 + (1));
__22902 = G__22923;
continue;
} else {
}
break;
}

var c__5853__auto___22924 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___22924,jobs,results,process,async){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___22924,jobs,results,process,async){
return (function (state_22807){
var state_val_22808 = (state_22807[(1)]);
if((state_val_22808 === (9))){
var inst_22800 = (state_22807[(2)]);
var state_22807__$1 = (function (){var statearr_22809 = state_22807;
(statearr_22809[(7)] = inst_22800);

return statearr_22809;
})();
var statearr_22810_22925 = state_22807__$1;
(statearr_22810_22925[(2)] = null);

(statearr_22810_22925[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22808 === (8))){
var inst_22793 = (state_22807[(8)]);
var inst_22798 = (state_22807[(2)]);
var state_22807__$1 = (function (){var statearr_22811 = state_22807;
(statearr_22811[(9)] = inst_22798);

return statearr_22811;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22807__$1,(9),results,inst_22793);
} else {
if((state_val_22808 === (7))){
var inst_22803 = (state_22807[(2)]);
var state_22807__$1 = state_22807;
var statearr_22812_22926 = state_22807__$1;
(statearr_22812_22926[(2)] = inst_22803);

(statearr_22812_22926[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22808 === (6))){
var inst_22793 = (state_22807[(8)]);
var inst_22788 = (state_22807[(10)]);
var inst_22793__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_22794 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22795 = [inst_22788,inst_22793__$1];
var inst_22796 = (new cljs.core.PersistentVector(null,2,(5),inst_22794,inst_22795,null));
var state_22807__$1 = (function (){var statearr_22813 = state_22807;
(statearr_22813[(8)] = inst_22793__$1);

return statearr_22813;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22807__$1,(8),jobs,inst_22796);
} else {
if((state_val_22808 === (5))){
var inst_22791 = cljs.core.async.close_BANG_(jobs);
var state_22807__$1 = state_22807;
var statearr_22814_22927 = state_22807__$1;
(statearr_22814_22927[(2)] = inst_22791);

(statearr_22814_22927[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22808 === (4))){
var inst_22788 = (state_22807[(10)]);
var inst_22788__$1 = (state_22807[(2)]);
var inst_22789 = (inst_22788__$1 == null);
var state_22807__$1 = (function (){var statearr_22815 = state_22807;
(statearr_22815[(10)] = inst_22788__$1);

return statearr_22815;
})();
if(cljs.core.truth_(inst_22789)){
var statearr_22816_22928 = state_22807__$1;
(statearr_22816_22928[(1)] = (5));

} else {
var statearr_22817_22929 = state_22807__$1;
(statearr_22817_22929[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_22808 === (3))){
var inst_22805 = (state_22807[(2)]);
var state_22807__$1 = state_22807;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22807__$1,inst_22805);
} else {
if((state_val_22808 === (2))){
var state_22807__$1 = state_22807;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22807__$1,(4),from);
} else {
if((state_val_22808 === (1))){
var state_22807__$1 = state_22807;
var statearr_22818_22930 = state_22807__$1;
(statearr_22818_22930[(2)] = null);

(statearr_22818_22930[(1)] = (2));


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
});})(c__5853__auto___22924,jobs,results,process,async))
;
return ((function (switch__5838__auto__,c__5853__auto___22924,jobs,results,process,async){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_22822 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22822[(0)] = state_machine__5839__auto__);

(statearr_22822[(1)] = (1));

return statearr_22822;
});
var state_machine__5839__auto____1 = (function (state_22807){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_22807);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e22823){if((e22823 instanceof Object)){
var ex__5842__auto__ = e22823;
var statearr_22824_22931 = state_22807;
(statearr_22824_22931[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22807);

return cljs.core.constant$keyword$41;
} else {
throw e22823;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__22932 = state_22807;
state_22807 = G__22932;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_22807){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_22807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___22924,jobs,results,process,async))
})();
var state__5855__auto__ = (function (){var statearr_22825 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_22825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___22924);

return statearr_22825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___22924,jobs,results,process,async))
);


var c__5853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto__,jobs,results,process,async){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto__,jobs,results,process,async){
return (function (state_22863){
var state_val_22864 = (state_22863[(1)]);
if((state_val_22864 === (7))){
var inst_22859 = (state_22863[(2)]);
var state_22863__$1 = state_22863;
var statearr_22865_22933 = state_22863__$1;
(statearr_22865_22933[(2)] = inst_22859);

(statearr_22865_22933[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22864 === (20))){
var state_22863__$1 = state_22863;
var statearr_22866_22934 = state_22863__$1;
(statearr_22866_22934[(2)] = null);

(statearr_22866_22934[(1)] = (21));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22864 === (1))){
var state_22863__$1 = state_22863;
var statearr_22867_22935 = state_22863__$1;
(statearr_22867_22935[(2)] = null);

(statearr_22867_22935[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22864 === (4))){
var inst_22828 = (state_22863[(7)]);
var inst_22828__$1 = (state_22863[(2)]);
var inst_22829 = (inst_22828__$1 == null);
var state_22863__$1 = (function (){var statearr_22868 = state_22863;
(statearr_22868[(7)] = inst_22828__$1);

return statearr_22868;
})();
if(cljs.core.truth_(inst_22829)){
var statearr_22869_22936 = state_22863__$1;
(statearr_22869_22936[(1)] = (5));

} else {
var statearr_22870_22937 = state_22863__$1;
(statearr_22870_22937[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_22864 === (15))){
var inst_22841 = (state_22863[(8)]);
var state_22863__$1 = state_22863;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22863__$1,(18),to,inst_22841);
} else {
if((state_val_22864 === (21))){
var inst_22854 = (state_22863[(2)]);
var state_22863__$1 = state_22863;
var statearr_22871_22938 = state_22863__$1;
(statearr_22871_22938[(2)] = inst_22854);

(statearr_22871_22938[(1)] = (13));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22864 === (13))){
var inst_22856 = (state_22863[(2)]);
var state_22863__$1 = (function (){var statearr_22872 = state_22863;
(statearr_22872[(9)] = inst_22856);

return statearr_22872;
})();
var statearr_22873_22939 = state_22863__$1;
(statearr_22873_22939[(2)] = null);

(statearr_22873_22939[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22864 === (6))){
var inst_22828 = (state_22863[(7)]);
var state_22863__$1 = state_22863;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22863__$1,(11),inst_22828);
} else {
if((state_val_22864 === (17))){
var inst_22849 = (state_22863[(2)]);
var state_22863__$1 = state_22863;
if(cljs.core.truth_(inst_22849)){
var statearr_22874_22940 = state_22863__$1;
(statearr_22874_22940[(1)] = (19));

} else {
var statearr_22875_22941 = state_22863__$1;
(statearr_22875_22941[(1)] = (20));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_22864 === (3))){
var inst_22861 = (state_22863[(2)]);
var state_22863__$1 = state_22863;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22863__$1,inst_22861);
} else {
if((state_val_22864 === (12))){
var inst_22838 = (state_22863[(10)]);
var state_22863__$1 = state_22863;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22863__$1,(14),inst_22838);
} else {
if((state_val_22864 === (2))){
var state_22863__$1 = state_22863;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22863__$1,(4),results);
} else {
if((state_val_22864 === (19))){
var state_22863__$1 = state_22863;
var statearr_22876_22942 = state_22863__$1;
(statearr_22876_22942[(2)] = null);

(statearr_22876_22942[(1)] = (12));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22864 === (11))){
var inst_22838 = (state_22863[(2)]);
var state_22863__$1 = (function (){var statearr_22877 = state_22863;
(statearr_22877[(10)] = inst_22838);

return statearr_22877;
})();
var statearr_22878_22943 = state_22863__$1;
(statearr_22878_22943[(2)] = null);

(statearr_22878_22943[(1)] = (12));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22864 === (9))){
var state_22863__$1 = state_22863;
var statearr_22879_22944 = state_22863__$1;
(statearr_22879_22944[(2)] = null);

(statearr_22879_22944[(1)] = (10));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22864 === (5))){
var state_22863__$1 = state_22863;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22880_22945 = state_22863__$1;
(statearr_22880_22945[(1)] = (8));

} else {
var statearr_22881_22946 = state_22863__$1;
(statearr_22881_22946[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_22864 === (14))){
var inst_22843 = (state_22863[(11)]);
var inst_22841 = (state_22863[(8)]);
var inst_22841__$1 = (state_22863[(2)]);
var inst_22842 = (inst_22841__$1 == null);
var inst_22843__$1 = cljs.core.not(inst_22842);
var state_22863__$1 = (function (){var statearr_22882 = state_22863;
(statearr_22882[(11)] = inst_22843__$1);

(statearr_22882[(8)] = inst_22841__$1);

return statearr_22882;
})();
if(inst_22843__$1){
var statearr_22883_22947 = state_22863__$1;
(statearr_22883_22947[(1)] = (15));

} else {
var statearr_22884_22948 = state_22863__$1;
(statearr_22884_22948[(1)] = (16));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_22864 === (16))){
var inst_22843 = (state_22863[(11)]);
var state_22863__$1 = state_22863;
var statearr_22885_22949 = state_22863__$1;
(statearr_22885_22949[(2)] = inst_22843);

(statearr_22885_22949[(1)] = (17));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22864 === (10))){
var inst_22835 = (state_22863[(2)]);
var state_22863__$1 = state_22863;
var statearr_22886_22950 = state_22863__$1;
(statearr_22886_22950[(2)] = inst_22835);

(statearr_22886_22950[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22864 === (18))){
var inst_22846 = (state_22863[(2)]);
var state_22863__$1 = state_22863;
var statearr_22887_22951 = state_22863__$1;
(statearr_22887_22951[(2)] = inst_22846);

(statearr_22887_22951[(1)] = (17));


return cljs.core.constant$keyword$41;
} else {
if((state_val_22864 === (8))){
var inst_22832 = cljs.core.async.close_BANG_(to);
var state_22863__$1 = state_22863;
var statearr_22888_22952 = state_22863__$1;
(statearr_22888_22952[(2)] = inst_22832);

(statearr_22888_22952[(1)] = (10));


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
var statearr_22892 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22892[(0)] = state_machine__5839__auto__);

(statearr_22892[(1)] = (1));

return statearr_22892;
});
var state_machine__5839__auto____1 = (function (state_22863){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_22863);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e22893){if((e22893 instanceof Object)){
var ex__5842__auto__ = e22893;
var statearr_22894_22953 = state_22863;
(statearr_22894_22953[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22863);

return cljs.core.constant$keyword$41;
} else {
throw e22893;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__22954 = state_22863;
state_22863 = G__22954;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_22863){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_22863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto__,jobs,results,process,async))
})();
var state__5855__auto__ = (function (){var statearr_22895 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_22895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto__);

return statearr_22895;
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
var c__5853__auto___23077 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___23077,tc,fc){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___23077,tc,fc){
return (function (state_23051){
var state_val_23052 = (state_23051[(1)]);
if((state_val_23052 === (7))){
var inst_23047 = (state_23051[(2)]);
var state_23051__$1 = state_23051;
var statearr_23053_23078 = state_23051__$1;
(statearr_23053_23078[(2)] = inst_23047);

(statearr_23053_23078[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23052 === (1))){
var state_23051__$1 = state_23051;
var statearr_23054_23079 = state_23051__$1;
(statearr_23054_23079[(2)] = null);

(statearr_23054_23079[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23052 === (4))){
var inst_23028 = (state_23051[(7)]);
var inst_23028__$1 = (state_23051[(2)]);
var inst_23029 = (inst_23028__$1 == null);
var state_23051__$1 = (function (){var statearr_23055 = state_23051;
(statearr_23055[(7)] = inst_23028__$1);

return statearr_23055;
})();
if(cljs.core.truth_(inst_23029)){
var statearr_23056_23080 = state_23051__$1;
(statearr_23056_23080[(1)] = (5));

} else {
var statearr_23057_23081 = state_23051__$1;
(statearr_23057_23081[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23052 === (13))){
var state_23051__$1 = state_23051;
var statearr_23058_23082 = state_23051__$1;
(statearr_23058_23082[(2)] = null);

(statearr_23058_23082[(1)] = (14));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23052 === (6))){
var inst_23028 = (state_23051[(7)]);
var inst_23034 = (function (){var G__23059 = inst_23028;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__23059) : p.call(null,G__23059));
})();
var state_23051__$1 = state_23051;
if(cljs.core.truth_(inst_23034)){
var statearr_23060_23083 = state_23051__$1;
(statearr_23060_23083[(1)] = (9));

} else {
var statearr_23061_23084 = state_23051__$1;
(statearr_23061_23084[(1)] = (10));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23052 === (3))){
var inst_23049 = (state_23051[(2)]);
var state_23051__$1 = state_23051;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23051__$1,inst_23049);
} else {
if((state_val_23052 === (12))){
var state_23051__$1 = state_23051;
var statearr_23062_23085 = state_23051__$1;
(statearr_23062_23085[(2)] = null);

(statearr_23062_23085[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23052 === (2))){
var state_23051__$1 = state_23051;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23051__$1,(4),ch);
} else {
if((state_val_23052 === (11))){
var inst_23028 = (state_23051[(7)]);
var inst_23038 = (state_23051[(2)]);
var state_23051__$1 = state_23051;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23051__$1,(8),inst_23038,inst_23028);
} else {
if((state_val_23052 === (9))){
var state_23051__$1 = state_23051;
var statearr_23063_23086 = state_23051__$1;
(statearr_23063_23086[(2)] = tc);

(statearr_23063_23086[(1)] = (11));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23052 === (5))){
var inst_23031 = cljs.core.async.close_BANG_(tc);
var inst_23032 = cljs.core.async.close_BANG_(fc);
var state_23051__$1 = (function (){var statearr_23064 = state_23051;
(statearr_23064[(8)] = inst_23031);

return statearr_23064;
})();
var statearr_23065_23087 = state_23051__$1;
(statearr_23065_23087[(2)] = inst_23032);

(statearr_23065_23087[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23052 === (14))){
var inst_23045 = (state_23051[(2)]);
var state_23051__$1 = state_23051;
var statearr_23066_23088 = state_23051__$1;
(statearr_23066_23088[(2)] = inst_23045);

(statearr_23066_23088[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23052 === (10))){
var state_23051__$1 = state_23051;
var statearr_23067_23089 = state_23051__$1;
(statearr_23067_23089[(2)] = fc);

(statearr_23067_23089[(1)] = (11));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23052 === (8))){
var inst_23040 = (state_23051[(2)]);
var state_23051__$1 = state_23051;
if(cljs.core.truth_(inst_23040)){
var statearr_23068_23090 = state_23051__$1;
(statearr_23068_23090[(1)] = (12));

} else {
var statearr_23069_23091 = state_23051__$1;
(statearr_23069_23091[(1)] = (13));

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
});})(c__5853__auto___23077,tc,fc))
;
return ((function (switch__5838__auto__,c__5853__auto___23077,tc,fc){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_23073 = [null,null,null,null,null,null,null,null,null];
(statearr_23073[(0)] = state_machine__5839__auto__);

(statearr_23073[(1)] = (1));

return statearr_23073;
});
var state_machine__5839__auto____1 = (function (state_23051){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_23051);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e23074){if((e23074 instanceof Object)){
var ex__5842__auto__ = e23074;
var statearr_23075_23092 = state_23051;
(statearr_23075_23092[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23051);

return cljs.core.constant$keyword$41;
} else {
throw e23074;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__23093 = state_23051;
state_23051 = G__23093;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_23051){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_23051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___23077,tc,fc))
})();
var state__5855__auto__ = (function (){var statearr_23076 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_23076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___23077);

return statearr_23076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___23077,tc,fc))
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
return (function (state_23142){
var state_val_23143 = (state_23142[(1)]);
if((state_val_23143 === (7))){
var inst_23138 = (state_23142[(2)]);
var state_23142__$1 = state_23142;
var statearr_23144_23162 = state_23142__$1;
(statearr_23144_23162[(2)] = inst_23138);

(statearr_23144_23162[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23143 === (6))){
var inst_23128 = (state_23142[(7)]);
var inst_23131 = (state_23142[(8)]);
var inst_23135 = (function (){var G__23145 = inst_23128;
var G__23146 = inst_23131;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23145,G__23146) : f.call(null,G__23145,G__23146));
})();
var inst_23128__$1 = inst_23135;
var state_23142__$1 = (function (){var statearr_23147 = state_23142;
(statearr_23147[(7)] = inst_23128__$1);

return statearr_23147;
})();
var statearr_23148_23163 = state_23142__$1;
(statearr_23148_23163[(2)] = null);

(statearr_23148_23163[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23143 === (5))){
var inst_23128 = (state_23142[(7)]);
var state_23142__$1 = state_23142;
var statearr_23149_23164 = state_23142__$1;
(statearr_23149_23164[(2)] = inst_23128);

(statearr_23149_23164[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23143 === (4))){
var inst_23131 = (state_23142[(8)]);
var inst_23131__$1 = (state_23142[(2)]);
var inst_23132 = (inst_23131__$1 == null);
var state_23142__$1 = (function (){var statearr_23150 = state_23142;
(statearr_23150[(8)] = inst_23131__$1);

return statearr_23150;
})();
if(cljs.core.truth_(inst_23132)){
var statearr_23151_23165 = state_23142__$1;
(statearr_23151_23165[(1)] = (5));

} else {
var statearr_23152_23166 = state_23142__$1;
(statearr_23152_23166[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23143 === (3))){
var inst_23140 = (state_23142[(2)]);
var state_23142__$1 = state_23142;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23142__$1,inst_23140);
} else {
if((state_val_23143 === (2))){
var state_23142__$1 = state_23142;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23142__$1,(4),ch);
} else {
if((state_val_23143 === (1))){
var inst_23128 = init;
var state_23142__$1 = (function (){var statearr_23153 = state_23142;
(statearr_23153[(7)] = inst_23128);

return statearr_23153;
})();
var statearr_23154_23167 = state_23142__$1;
(statearr_23154_23167[(2)] = null);

(statearr_23154_23167[(1)] = (2));


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
var statearr_23158 = [null,null,null,null,null,null,null,null,null];
(statearr_23158[(0)] = state_machine__5839__auto__);

(statearr_23158[(1)] = (1));

return statearr_23158;
});
var state_machine__5839__auto____1 = (function (state_23142){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_23142);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e23159){if((e23159 instanceof Object)){
var ex__5842__auto__ = e23159;
var statearr_23160_23168 = state_23142;
(statearr_23160_23168[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23142);

return cljs.core.constant$keyword$41;
} else {
throw e23159;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__23169 = state_23142;
state_23142 = G__23169;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_23142){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_23142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto__))
})();
var state__5855__auto__ = (function (){var statearr_23161 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_23161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto__);

return statearr_23161;
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
return (function (state_23246){
var state_val_23247 = (state_23246[(1)]);
if((state_val_23247 === (7))){
var inst_23228 = (state_23246[(2)]);
var state_23246__$1 = state_23246;
var statearr_23248_23271 = state_23246__$1;
(statearr_23248_23271[(2)] = inst_23228);

(statearr_23248_23271[(1)] = (6));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23247 === (1))){
var inst_23222 = cljs.core.seq(coll);
var inst_23223 = inst_23222;
var state_23246__$1 = (function (){var statearr_23249 = state_23246;
(statearr_23249[(7)] = inst_23223);

return statearr_23249;
})();
var statearr_23250_23272 = state_23246__$1;
(statearr_23250_23272[(2)] = null);

(statearr_23250_23272[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23247 === (4))){
var inst_23223 = (state_23246[(7)]);
var inst_23226 = cljs.core.first(inst_23223);
var state_23246__$1 = state_23246;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23246__$1,(7),ch,inst_23226);
} else {
if((state_val_23247 === (13))){
var inst_23240 = (state_23246[(2)]);
var state_23246__$1 = state_23246;
var statearr_23251_23273 = state_23246__$1;
(statearr_23251_23273[(2)] = inst_23240);

(statearr_23251_23273[(1)] = (10));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23247 === (6))){
var inst_23231 = (state_23246[(2)]);
var state_23246__$1 = state_23246;
if(cljs.core.truth_(inst_23231)){
var statearr_23252_23274 = state_23246__$1;
(statearr_23252_23274[(1)] = (8));

} else {
var statearr_23253_23275 = state_23246__$1;
(statearr_23253_23275[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23247 === (3))){
var inst_23244 = (state_23246[(2)]);
var state_23246__$1 = state_23246;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23246__$1,inst_23244);
} else {
if((state_val_23247 === (12))){
var state_23246__$1 = state_23246;
var statearr_23254_23276 = state_23246__$1;
(statearr_23254_23276[(2)] = null);

(statearr_23254_23276[(1)] = (13));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23247 === (2))){
var inst_23223 = (state_23246[(7)]);
var state_23246__$1 = state_23246;
if(cljs.core.truth_(inst_23223)){
var statearr_23255_23277 = state_23246__$1;
(statearr_23255_23277[(1)] = (4));

} else {
var statearr_23256_23278 = state_23246__$1;
(statearr_23256_23278[(1)] = (5));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23247 === (11))){
var inst_23237 = cljs.core.async.close_BANG_(ch);
var state_23246__$1 = state_23246;
var statearr_23257_23279 = state_23246__$1;
(statearr_23257_23279[(2)] = inst_23237);

(statearr_23257_23279[(1)] = (13));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23247 === (9))){
var state_23246__$1 = state_23246;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23258_23280 = state_23246__$1;
(statearr_23258_23280[(1)] = (11));

} else {
var statearr_23259_23281 = state_23246__$1;
(statearr_23259_23281[(1)] = (12));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23247 === (5))){
var inst_23223 = (state_23246[(7)]);
var state_23246__$1 = state_23246;
var statearr_23260_23282 = state_23246__$1;
(statearr_23260_23282[(2)] = inst_23223);

(statearr_23260_23282[(1)] = (6));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23247 === (10))){
var inst_23242 = (state_23246[(2)]);
var state_23246__$1 = state_23246;
var statearr_23261_23283 = state_23246__$1;
(statearr_23261_23283[(2)] = inst_23242);

(statearr_23261_23283[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23247 === (8))){
var inst_23223 = (state_23246[(7)]);
var inst_23233 = cljs.core.next(inst_23223);
var inst_23223__$1 = inst_23233;
var state_23246__$1 = (function (){var statearr_23262 = state_23246;
(statearr_23262[(7)] = inst_23223__$1);

return statearr_23262;
})();
var statearr_23263_23284 = state_23246__$1;
(statearr_23263_23284[(2)] = null);

(statearr_23263_23284[(1)] = (2));


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
var statearr_23267 = [null,null,null,null,null,null,null,null];
(statearr_23267[(0)] = state_machine__5839__auto__);

(statearr_23267[(1)] = (1));

return statearr_23267;
});
var state_machine__5839__auto____1 = (function (state_23246){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_23246);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e23268){if((e23268 instanceof Object)){
var ex__5842__auto__ = e23268;
var statearr_23269_23285 = state_23246;
(statearr_23269_23285[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23246);

return cljs.core.constant$keyword$41;
} else {
throw e23268;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__23286 = state_23246;
state_23246 = G__23286;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_23246){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_23246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto__))
})();
var state__5855__auto__ = (function (){var statearr_23270 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_23270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto__);

return statearr_23270;
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

cljs.core.async.Mux = (function (){var obj23288 = {};
return obj23288;
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
return (function (){var or__3630__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__23292 = x__4274__auto__;
return goog.typeOf(G__23292);
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


cljs.core.async.Mult = (function (){var obj23294 = {};
return obj23294;
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
return (function (){var or__3630__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__23298 = x__4274__auto__;
return goog.typeOf(G__23298);
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
return (function (){var or__3630__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__23302 = x__4274__auto__;
return goog.typeOf(G__23302);
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
return (function (){var or__3630__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__23306 = x__4274__auto__;
return goog.typeOf(G__23306);
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
var cs = (function (){var G__23536 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23536) : cljs.core.atom.call(null,G__23536));
})();
var m = (function (){
if(typeof cljs.core.async.t23537 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23537 = (function (cs,ch,mult,meta23538){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta23538 = meta23538;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23537.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t23537.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t23537.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t23537.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23540_23765 = self__.cs;
var G__23541_23766 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23540_23765,G__23541_23766) : cljs.core.reset_BANG_.call(null,G__23540_23765,G__23541_23766));

return null;
});})(cs))
;

cljs.core.async.t23537.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t23537.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t23537.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23539){
var self__ = this;
var _23539__$1 = this;
return self__.meta23538;
});})(cs))
;

cljs.core.async.t23537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23539,meta23538__$1){
var self__ = this;
var _23539__$1 = this;
return (new cljs.core.async.t23537(self__.cs,self__.ch,self__.mult,meta23538__$1));
});})(cs))
;

cljs.core.async.t23537.cljs$lang$type = true;

cljs.core.async.t23537.cljs$lang$ctorStr = "cljs.core.async/t23537";

cljs.core.async.t23537.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23537");
});})(cs))
;

cljs.core.async.__GT_t23537 = ((function (cs){
return (function __GT_t23537(cs__$1,ch__$1,mult__$1,meta23538){
return (new cljs.core.async.t23537(cs__$1,ch__$1,mult__$1,meta23538));
});})(cs))
;

}

return (new cljs.core.async.t23537(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,397,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,390,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/resources/public/js-min/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__23542 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23542) : cljs.core.atom.call(null,G__23542));
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
var c__5853__auto___23767 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___23767,cs,m,dchan,dctr,done){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___23767,cs,m,dchan,dctr,done){
return (function (state_23673){
var state_val_23674 = (state_23673[(1)]);
if((state_val_23674 === (7))){
var inst_23669 = (state_23673[(2)]);
var state_23673__$1 = state_23673;
var statearr_23675_23768 = state_23673__$1;
(statearr_23675_23768[(2)] = inst_23669);

(statearr_23675_23768[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (20))){
var inst_23574 = (state_23673[(7)]);
var inst_23584 = cljs.core.first(inst_23574);
var inst_23585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23584,(0),null);
var inst_23586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23584,(1),null);
var state_23673__$1 = (function (){var statearr_23676 = state_23673;
(statearr_23676[(8)] = inst_23585);

return statearr_23676;
})();
if(cljs.core.truth_(inst_23586)){
var statearr_23677_23769 = state_23673__$1;
(statearr_23677_23769[(1)] = (22));

} else {
var statearr_23678_23770 = state_23673__$1;
(statearr_23678_23770[(1)] = (23));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (27))){
var inst_23614 = (state_23673[(9)]);
var inst_23621 = (state_23673[(10)]);
var inst_23545 = (state_23673[(11)]);
var inst_23616 = (state_23673[(12)]);
var inst_23621__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23614,inst_23616);
var inst_23622 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23621__$1,inst_23545,done);
var state_23673__$1 = (function (){var statearr_23679 = state_23673;
(statearr_23679[(10)] = inst_23621__$1);

return statearr_23679;
})();
if(cljs.core.truth_(inst_23622)){
var statearr_23680_23771 = state_23673__$1;
(statearr_23680_23771[(1)] = (30));

} else {
var statearr_23681_23772 = state_23673__$1;
(statearr_23681_23772[(1)] = (31));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (1))){
var state_23673__$1 = state_23673;
var statearr_23682_23773 = state_23673__$1;
(statearr_23682_23773[(2)] = null);

(statearr_23682_23773[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (24))){
var inst_23574 = (state_23673[(7)]);
var inst_23591 = (state_23673[(2)]);
var inst_23592 = cljs.core.next(inst_23574);
var inst_23554 = inst_23592;
var inst_23555 = null;
var inst_23556 = (0);
var inst_23557 = (0);
var state_23673__$1 = (function (){var statearr_23683 = state_23673;
(statearr_23683[(13)] = inst_23556);

(statearr_23683[(14)] = inst_23555);

(statearr_23683[(15)] = inst_23554);

(statearr_23683[(16)] = inst_23591);

(statearr_23683[(17)] = inst_23557);

return statearr_23683;
})();
var statearr_23684_23774 = state_23673__$1;
(statearr_23684_23774[(2)] = null);

(statearr_23684_23774[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (39))){
var state_23673__$1 = state_23673;
var statearr_23688_23775 = state_23673__$1;
(statearr_23688_23775[(2)] = null);

(statearr_23688_23775[(1)] = (41));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (4))){
var inst_23545 = (state_23673[(11)]);
var inst_23545__$1 = (state_23673[(2)]);
var inst_23546 = (inst_23545__$1 == null);
var state_23673__$1 = (function (){var statearr_23689 = state_23673;
(statearr_23689[(11)] = inst_23545__$1);

return statearr_23689;
})();
if(cljs.core.truth_(inst_23546)){
var statearr_23690_23776 = state_23673__$1;
(statearr_23690_23776[(1)] = (5));

} else {
var statearr_23691_23777 = state_23673__$1;
(statearr_23691_23777[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (15))){
var inst_23556 = (state_23673[(13)]);
var inst_23555 = (state_23673[(14)]);
var inst_23554 = (state_23673[(15)]);
var inst_23557 = (state_23673[(17)]);
var inst_23570 = (state_23673[(2)]);
var inst_23571 = (inst_23557 + (1));
var tmp23685 = inst_23556;
var tmp23686 = inst_23555;
var tmp23687 = inst_23554;
var inst_23554__$1 = tmp23687;
var inst_23555__$1 = tmp23686;
var inst_23556__$1 = tmp23685;
var inst_23557__$1 = inst_23571;
var state_23673__$1 = (function (){var statearr_23692 = state_23673;
(statearr_23692[(13)] = inst_23556__$1);

(statearr_23692[(14)] = inst_23555__$1);

(statearr_23692[(18)] = inst_23570);

(statearr_23692[(15)] = inst_23554__$1);

(statearr_23692[(17)] = inst_23557__$1);

return statearr_23692;
})();
var statearr_23693_23778 = state_23673__$1;
(statearr_23693_23778[(2)] = null);

(statearr_23693_23778[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (21))){
var inst_23595 = (state_23673[(2)]);
var state_23673__$1 = state_23673;
var statearr_23697_23779 = state_23673__$1;
(statearr_23697_23779[(2)] = inst_23595);

(statearr_23697_23779[(1)] = (18));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (31))){
var inst_23621 = (state_23673[(10)]);
var inst_23625 = done(null);
var inst_23626 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23621);
var state_23673__$1 = (function (){var statearr_23698 = state_23673;
(statearr_23698[(19)] = inst_23625);

return statearr_23698;
})();
var statearr_23699_23780 = state_23673__$1;
(statearr_23699_23780[(2)] = inst_23626);

(statearr_23699_23780[(1)] = (32));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (32))){
var inst_23613 = (state_23673[(20)]);
var inst_23615 = (state_23673[(21)]);
var inst_23614 = (state_23673[(9)]);
var inst_23616 = (state_23673[(12)]);
var inst_23628 = (state_23673[(2)]);
var inst_23629 = (inst_23616 + (1));
var tmp23694 = inst_23613;
var tmp23695 = inst_23615;
var tmp23696 = inst_23614;
var inst_23613__$1 = tmp23694;
var inst_23614__$1 = tmp23696;
var inst_23615__$1 = tmp23695;
var inst_23616__$1 = inst_23629;
var state_23673__$1 = (function (){var statearr_23700 = state_23673;
(statearr_23700[(20)] = inst_23613__$1);

(statearr_23700[(21)] = inst_23615__$1);

(statearr_23700[(9)] = inst_23614__$1);

(statearr_23700[(22)] = inst_23628);

(statearr_23700[(12)] = inst_23616__$1);

return statearr_23700;
})();
var statearr_23701_23781 = state_23673__$1;
(statearr_23701_23781[(2)] = null);

(statearr_23701_23781[(1)] = (25));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (40))){
var inst_23641 = (state_23673[(23)]);
var inst_23645 = done(null);
var inst_23646 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23641);
var state_23673__$1 = (function (){var statearr_23702 = state_23673;
(statearr_23702[(24)] = inst_23645);

return statearr_23702;
})();
var statearr_23703_23782 = state_23673__$1;
(statearr_23703_23782[(2)] = inst_23646);

(statearr_23703_23782[(1)] = (41));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (33))){
var inst_23632 = (state_23673[(25)]);
var inst_23634 = cljs.core.chunked_seq_QMARK_(inst_23632);
var state_23673__$1 = state_23673;
if(inst_23634){
var statearr_23704_23783 = state_23673__$1;
(statearr_23704_23783[(1)] = (36));

} else {
var statearr_23705_23784 = state_23673__$1;
(statearr_23705_23784[(1)] = (37));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (13))){
var inst_23564 = (state_23673[(26)]);
var inst_23567 = cljs.core.async.close_BANG_(inst_23564);
var state_23673__$1 = state_23673;
var statearr_23706_23785 = state_23673__$1;
(statearr_23706_23785[(2)] = inst_23567);

(statearr_23706_23785[(1)] = (15));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (22))){
var inst_23585 = (state_23673[(8)]);
var inst_23588 = cljs.core.async.close_BANG_(inst_23585);
var state_23673__$1 = state_23673;
var statearr_23707_23786 = state_23673__$1;
(statearr_23707_23786[(2)] = inst_23588);

(statearr_23707_23786[(1)] = (24));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (36))){
var inst_23632 = (state_23673[(25)]);
var inst_23636 = cljs.core.chunk_first(inst_23632);
var inst_23637 = cljs.core.chunk_rest(inst_23632);
var inst_23638 = cljs.core.count(inst_23636);
var inst_23613 = inst_23637;
var inst_23614 = inst_23636;
var inst_23615 = inst_23638;
var inst_23616 = (0);
var state_23673__$1 = (function (){var statearr_23708 = state_23673;
(statearr_23708[(20)] = inst_23613);

(statearr_23708[(21)] = inst_23615);

(statearr_23708[(9)] = inst_23614);

(statearr_23708[(12)] = inst_23616);

return statearr_23708;
})();
var statearr_23709_23787 = state_23673__$1;
(statearr_23709_23787[(2)] = null);

(statearr_23709_23787[(1)] = (25));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (41))){
var inst_23632 = (state_23673[(25)]);
var inst_23648 = (state_23673[(2)]);
var inst_23649 = cljs.core.next(inst_23632);
var inst_23613 = inst_23649;
var inst_23614 = null;
var inst_23615 = (0);
var inst_23616 = (0);
var state_23673__$1 = (function (){var statearr_23710 = state_23673;
(statearr_23710[(20)] = inst_23613);

(statearr_23710[(21)] = inst_23615);

(statearr_23710[(9)] = inst_23614);

(statearr_23710[(12)] = inst_23616);

(statearr_23710[(27)] = inst_23648);

return statearr_23710;
})();
var statearr_23711_23788 = state_23673__$1;
(statearr_23711_23788[(2)] = null);

(statearr_23711_23788[(1)] = (25));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (43))){
var state_23673__$1 = state_23673;
var statearr_23712_23789 = state_23673__$1;
(statearr_23712_23789[(2)] = null);

(statearr_23712_23789[(1)] = (44));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (29))){
var inst_23657 = (state_23673[(2)]);
var state_23673__$1 = state_23673;
var statearr_23713_23790 = state_23673__$1;
(statearr_23713_23790[(2)] = inst_23657);

(statearr_23713_23790[(1)] = (26));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (44))){
var inst_23666 = (state_23673[(2)]);
var state_23673__$1 = (function (){var statearr_23714 = state_23673;
(statearr_23714[(28)] = inst_23666);

return statearr_23714;
})();
var statearr_23715_23791 = state_23673__$1;
(statearr_23715_23791[(2)] = null);

(statearr_23715_23791[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (6))){
var inst_23605 = (state_23673[(29)]);
var inst_23604 = (function (){var G__23716 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23716) : cljs.core.deref.call(null,G__23716));
})();
var inst_23605__$1 = cljs.core.keys(inst_23604);
var inst_23606 = cljs.core.count(inst_23605__$1);
var inst_23607 = (function (){var G__23717 = dctr;
var G__23718 = inst_23606;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23717,G__23718) : cljs.core.reset_BANG_.call(null,G__23717,G__23718));
})();
var inst_23612 = cljs.core.seq(inst_23605__$1);
var inst_23613 = inst_23612;
var inst_23614 = null;
var inst_23615 = (0);
var inst_23616 = (0);
var state_23673__$1 = (function (){var statearr_23719 = state_23673;
(statearr_23719[(20)] = inst_23613);

(statearr_23719[(21)] = inst_23615);

(statearr_23719[(9)] = inst_23614);

(statearr_23719[(29)] = inst_23605__$1);

(statearr_23719[(12)] = inst_23616);

(statearr_23719[(30)] = inst_23607);

return statearr_23719;
})();
var statearr_23720_23792 = state_23673__$1;
(statearr_23720_23792[(2)] = null);

(statearr_23720_23792[(1)] = (25));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (28))){
var inst_23613 = (state_23673[(20)]);
var inst_23632 = (state_23673[(25)]);
var inst_23632__$1 = cljs.core.seq(inst_23613);
var state_23673__$1 = (function (){var statearr_23721 = state_23673;
(statearr_23721[(25)] = inst_23632__$1);

return statearr_23721;
})();
if(inst_23632__$1){
var statearr_23722_23793 = state_23673__$1;
(statearr_23722_23793[(1)] = (33));

} else {
var statearr_23723_23794 = state_23673__$1;
(statearr_23723_23794[(1)] = (34));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (25))){
var inst_23615 = (state_23673[(21)]);
var inst_23616 = (state_23673[(12)]);
var inst_23618 = (inst_23616 < inst_23615);
var inst_23619 = inst_23618;
var state_23673__$1 = state_23673;
if(cljs.core.truth_(inst_23619)){
var statearr_23724_23795 = state_23673__$1;
(statearr_23724_23795[(1)] = (27));

} else {
var statearr_23725_23796 = state_23673__$1;
(statearr_23725_23796[(1)] = (28));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (34))){
var state_23673__$1 = state_23673;
var statearr_23726_23797 = state_23673__$1;
(statearr_23726_23797[(2)] = null);

(statearr_23726_23797[(1)] = (35));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (17))){
var state_23673__$1 = state_23673;
var statearr_23727_23798 = state_23673__$1;
(statearr_23727_23798[(2)] = null);

(statearr_23727_23798[(1)] = (18));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (3))){
var inst_23671 = (state_23673[(2)]);
var state_23673__$1 = state_23673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23673__$1,inst_23671);
} else {
if((state_val_23674 === (12))){
var inst_23600 = (state_23673[(2)]);
var state_23673__$1 = state_23673;
var statearr_23728_23799 = state_23673__$1;
(statearr_23728_23799[(2)] = inst_23600);

(statearr_23728_23799[(1)] = (9));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (2))){
var state_23673__$1 = state_23673;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23673__$1,(4),ch);
} else {
if((state_val_23674 === (23))){
var state_23673__$1 = state_23673;
var statearr_23729_23800 = state_23673__$1;
(statearr_23729_23800[(2)] = null);

(statearr_23729_23800[(1)] = (24));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (35))){
var inst_23655 = (state_23673[(2)]);
var state_23673__$1 = state_23673;
var statearr_23730_23801 = state_23673__$1;
(statearr_23730_23801[(2)] = inst_23655);

(statearr_23730_23801[(1)] = (29));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (19))){
var inst_23574 = (state_23673[(7)]);
var inst_23578 = cljs.core.chunk_first(inst_23574);
var inst_23579 = cljs.core.chunk_rest(inst_23574);
var inst_23580 = cljs.core.count(inst_23578);
var inst_23554 = inst_23579;
var inst_23555 = inst_23578;
var inst_23556 = inst_23580;
var inst_23557 = (0);
var state_23673__$1 = (function (){var statearr_23731 = state_23673;
(statearr_23731[(13)] = inst_23556);

(statearr_23731[(14)] = inst_23555);

(statearr_23731[(15)] = inst_23554);

(statearr_23731[(17)] = inst_23557);

return statearr_23731;
})();
var statearr_23732_23802 = state_23673__$1;
(statearr_23732_23802[(2)] = null);

(statearr_23732_23802[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (11))){
var inst_23574 = (state_23673[(7)]);
var inst_23554 = (state_23673[(15)]);
var inst_23574__$1 = cljs.core.seq(inst_23554);
var state_23673__$1 = (function (){var statearr_23733 = state_23673;
(statearr_23733[(7)] = inst_23574__$1);

return statearr_23733;
})();
if(inst_23574__$1){
var statearr_23734_23803 = state_23673__$1;
(statearr_23734_23803[(1)] = (16));

} else {
var statearr_23735_23804 = state_23673__$1;
(statearr_23735_23804[(1)] = (17));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (9))){
var inst_23602 = (state_23673[(2)]);
var state_23673__$1 = state_23673;
var statearr_23736_23805 = state_23673__$1;
(statearr_23736_23805[(2)] = inst_23602);

(statearr_23736_23805[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (5))){
var inst_23552 = (function (){var G__23737 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23737) : cljs.core.deref.call(null,G__23737));
})();
var inst_23553 = cljs.core.seq(inst_23552);
var inst_23554 = inst_23553;
var inst_23555 = null;
var inst_23556 = (0);
var inst_23557 = (0);
var state_23673__$1 = (function (){var statearr_23738 = state_23673;
(statearr_23738[(13)] = inst_23556);

(statearr_23738[(14)] = inst_23555);

(statearr_23738[(15)] = inst_23554);

(statearr_23738[(17)] = inst_23557);

return statearr_23738;
})();
var statearr_23739_23806 = state_23673__$1;
(statearr_23739_23806[(2)] = null);

(statearr_23739_23806[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (14))){
var state_23673__$1 = state_23673;
var statearr_23740_23807 = state_23673__$1;
(statearr_23740_23807[(2)] = null);

(statearr_23740_23807[(1)] = (15));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (45))){
var inst_23663 = (state_23673[(2)]);
var state_23673__$1 = state_23673;
var statearr_23741_23808 = state_23673__$1;
(statearr_23741_23808[(2)] = inst_23663);

(statearr_23741_23808[(1)] = (44));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (26))){
var inst_23605 = (state_23673[(29)]);
var inst_23659 = (state_23673[(2)]);
var inst_23660 = cljs.core.seq(inst_23605);
var state_23673__$1 = (function (){var statearr_23742 = state_23673;
(statearr_23742[(31)] = inst_23659);

return statearr_23742;
})();
if(inst_23660){
var statearr_23743_23809 = state_23673__$1;
(statearr_23743_23809[(1)] = (42));

} else {
var statearr_23744_23810 = state_23673__$1;
(statearr_23744_23810[(1)] = (43));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (16))){
var inst_23574 = (state_23673[(7)]);
var inst_23576 = cljs.core.chunked_seq_QMARK_(inst_23574);
var state_23673__$1 = state_23673;
if(inst_23576){
var statearr_23745_23811 = state_23673__$1;
(statearr_23745_23811[(1)] = (19));

} else {
var statearr_23746_23812 = state_23673__$1;
(statearr_23746_23812[(1)] = (20));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (38))){
var inst_23652 = (state_23673[(2)]);
var state_23673__$1 = state_23673;
var statearr_23747_23813 = state_23673__$1;
(statearr_23747_23813[(2)] = inst_23652);

(statearr_23747_23813[(1)] = (35));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (30))){
var state_23673__$1 = state_23673;
var statearr_23748_23814 = state_23673__$1;
(statearr_23748_23814[(2)] = null);

(statearr_23748_23814[(1)] = (32));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (10))){
var inst_23555 = (state_23673[(14)]);
var inst_23557 = (state_23673[(17)]);
var inst_23563 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23555,inst_23557);
var inst_23564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23563,(0),null);
var inst_23565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23563,(1),null);
var state_23673__$1 = (function (){var statearr_23749 = state_23673;
(statearr_23749[(26)] = inst_23564);

return statearr_23749;
})();
if(cljs.core.truth_(inst_23565)){
var statearr_23750_23815 = state_23673__$1;
(statearr_23750_23815[(1)] = (13));

} else {
var statearr_23751_23816 = state_23673__$1;
(statearr_23751_23816[(1)] = (14));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (18))){
var inst_23598 = (state_23673[(2)]);
var state_23673__$1 = state_23673;
var statearr_23752_23817 = state_23673__$1;
(statearr_23752_23817[(2)] = inst_23598);

(statearr_23752_23817[(1)] = (12));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (42))){
var state_23673__$1 = state_23673;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23673__$1,(45),dchan);
} else {
if((state_val_23674 === (37))){
var inst_23545 = (state_23673[(11)]);
var inst_23641 = (state_23673[(23)]);
var inst_23632 = (state_23673[(25)]);
var inst_23641__$1 = cljs.core.first(inst_23632);
var inst_23642 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23641__$1,inst_23545,done);
var state_23673__$1 = (function (){var statearr_23753 = state_23673;
(statearr_23753[(23)] = inst_23641__$1);

return statearr_23753;
})();
if(cljs.core.truth_(inst_23642)){
var statearr_23754_23818 = state_23673__$1;
(statearr_23754_23818[(1)] = (39));

} else {
var statearr_23755_23819 = state_23673__$1;
(statearr_23755_23819[(1)] = (40));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23674 === (8))){
var inst_23556 = (state_23673[(13)]);
var inst_23557 = (state_23673[(17)]);
var inst_23559 = (inst_23557 < inst_23556);
var inst_23560 = inst_23559;
var state_23673__$1 = state_23673;
if(cljs.core.truth_(inst_23560)){
var statearr_23756_23820 = state_23673__$1;
(statearr_23756_23820[(1)] = (10));

} else {
var statearr_23757_23821 = state_23673__$1;
(statearr_23757_23821[(1)] = (11));

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
});})(c__5853__auto___23767,cs,m,dchan,dctr,done))
;
return ((function (switch__5838__auto__,c__5853__auto___23767,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_23761 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23761[(0)] = state_machine__5839__auto__);

(statearr_23761[(1)] = (1));

return statearr_23761;
});
var state_machine__5839__auto____1 = (function (state_23673){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_23673);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e23762){if((e23762 instanceof Object)){
var ex__5842__auto__ = e23762;
var statearr_23763_23822 = state_23673;
(statearr_23763_23822[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23673);

return cljs.core.constant$keyword$41;
} else {
throw e23762;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__23823 = state_23673;
state_23673 = G__23823;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_23673){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_23673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___23767,cs,m,dchan,dctr,done))
})();
var state__5855__auto__ = (function (){var statearr_23764 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_23764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___23767);

return statearr_23764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___23767,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj23828 = {};
return obj23828;
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
return (function (){var or__3630__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__23832 = x__4274__auto__;
return goog.typeOf(G__23832);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__23836 = x__4274__auto__;
return goog.typeOf(G__23836);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__23840 = x__4274__auto__;
return goog.typeOf(G__23840);
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
return (function (){var or__3630__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__23844 = x__4274__auto__;
return goog.typeOf(G__23844);
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
return (function (){var or__3630__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__23848 = x__4274__auto__;
return goog.typeOf(G__23848);
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__23849){
var map__23855 = p__23849;
var map__23855__$1 = ((cljs.core.seq_QMARK_(map__23855))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23855):map__23855);
var opts = map__23855__$1;
var statearr_23856_23860 = state;
(statearr_23856_23860[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__23855,map__23855__$1,opts){
return (function (val){
var statearr_23857_23861 = state;
(statearr_23857_23861[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__23855,map__23855__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_23858_23862 = state;
(statearr_23858_23862[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__23859 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23859) : cljs.core.deref.call(null,G__23859));
})());


return cljs.core.constant$keyword$41;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__23849 = null;
if (arguments.length > 3) {
  p__23849 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__23849);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__23863){
var state = cljs.core.first(arglist__23863);
arglist__23863 = cljs.core.next(arglist__23863);
var cont_block = cljs.core.first(arglist__23863);
arglist__23863 = cljs.core.next(arglist__23863);
var ports = cljs.core.first(arglist__23863);
var p__23849 = cljs.core.rest(arglist__23863);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__23849);
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
var cs = (function (){var G__23997 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23997) : cljs.core.atom.call(null,G__23997));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$50,null,cljs.core.constant$keyword$51,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$52);
var solo_mode = (function (){var G__23998 = cljs.core.constant$keyword$51;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23998) : cljs.core.atom.call(null,G__23998));
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
if(cljs.core.truth_((function (){var G__23999 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__23999) : attr.call(null,G__23999));
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
var chs = (function (){var G__24000 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24000) : cljs.core.deref.call(null,G__24000));
})();
var mode = (function (){var G__24001 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24001) : cljs.core.deref.call(null,G__24001));
})();
var solos = pick(cljs.core.constant$keyword$52,chs);
var pauses = pick(cljs.core.constant$keyword$50,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$53,solos,cljs.core.constant$keyword$54,pick(cljs.core.constant$keyword$51,chs),cljs.core.constant$keyword$55,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$50)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t24002 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24002 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24003){
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
this.meta24003 = meta24003;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24002.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t24002.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24002.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24002.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__24005_24130 = self__.cs;
var G__24006_24131 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24005_24130,G__24006_24131) : cljs.core.reset_BANG_.call(null,G__24005_24130,G__24006_24131));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24002.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24002.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__24007 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__24007) : self__.solo_modes.call(null,G__24007));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__24008_24132 = self__.solo_mode;
var G__24009_24133 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24008_24132,G__24009_24133) : cljs.core.reset_BANG_.call(null,G__24008_24132,G__24009_24133));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24002.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24002.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24002.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24004){
var self__ = this;
var _24004__$1 = this;
return self__.meta24003;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24004,meta24003__$1){
var self__ = this;
var _24004__$1 = this;
return (new cljs.core.async.t24002(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24003__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24002.cljs$lang$type = true;

cljs.core.async.t24002.cljs$lang$ctorStr = "cljs.core.async/t24002";

cljs.core.async.t24002.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24002");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t24002 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24002(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24003){
return (new cljs.core.async.t24002(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24003));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t24002(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,25,cljs.core.constant$keyword$9,510,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,499,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/resources/public/js-min/cljs/core/async.cljs"], null)));
})()
;
var c__5853__auto___24134 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___24134,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___24134,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24081){
var state_val_24082 = (state_24081[(1)]);
if((state_val_24082 === (7))){
var inst_24023 = (state_24081[(7)]);
var inst_24028 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24023);
var state_24081__$1 = state_24081;
var statearr_24083_24135 = state_24081__$1;
(statearr_24083_24135[(2)] = inst_24028);

(statearr_24083_24135[(1)] = (9));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24082 === (20))){
var inst_24038 = (state_24081[(8)]);
var state_24081__$1 = state_24081;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24081__$1,(23),out,inst_24038);
} else {
if((state_val_24082 === (1))){
var inst_24013 = (state_24081[(9)]);
var inst_24013__$1 = calc_state();
var inst_24014 = cljs.core.seq_QMARK_(inst_24013__$1);
var state_24081__$1 = (function (){var statearr_24084 = state_24081;
(statearr_24084[(9)] = inst_24013__$1);

return statearr_24084;
})();
if(inst_24014){
var statearr_24085_24136 = state_24081__$1;
(statearr_24085_24136[(1)] = (2));

} else {
var statearr_24086_24137 = state_24081__$1;
(statearr_24086_24137[(1)] = (3));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24082 === (24))){
var inst_24031 = (state_24081[(10)]);
var inst_24023 = inst_24031;
var state_24081__$1 = (function (){var statearr_24087 = state_24081;
(statearr_24087[(7)] = inst_24023);

return statearr_24087;
})();
var statearr_24088_24138 = state_24081__$1;
(statearr_24088_24138[(2)] = null);

(statearr_24088_24138[(1)] = (5));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24082 === (4))){
var inst_24013 = (state_24081[(9)]);
var inst_24019 = (state_24081[(2)]);
var inst_24020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24019,cljs.core.constant$keyword$55);
var inst_24021 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24019,cljs.core.constant$keyword$54);
var inst_24022 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24019,cljs.core.constant$keyword$53);
var inst_24023 = inst_24013;
var state_24081__$1 = (function (){var statearr_24089 = state_24081;
(statearr_24089[(7)] = inst_24023);

(statearr_24089[(11)] = inst_24021);

(statearr_24089[(12)] = inst_24022);

(statearr_24089[(13)] = inst_24020);

return statearr_24089;
})();
var statearr_24090_24139 = state_24081__$1;
(statearr_24090_24139[(2)] = null);

(statearr_24090_24139[(1)] = (5));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24082 === (15))){
var state_24081__$1 = state_24081;
var statearr_24091_24140 = state_24081__$1;
(statearr_24091_24140[(2)] = null);

(statearr_24091_24140[(1)] = (16));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24082 === (21))){
var inst_24031 = (state_24081[(10)]);
var inst_24023 = inst_24031;
var state_24081__$1 = (function (){var statearr_24092 = state_24081;
(statearr_24092[(7)] = inst_24023);

return statearr_24092;
})();
var statearr_24093_24141 = state_24081__$1;
(statearr_24093_24141[(2)] = null);

(statearr_24093_24141[(1)] = (5));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24082 === (13))){
var inst_24077 = (state_24081[(2)]);
var state_24081__$1 = state_24081;
var statearr_24094_24142 = state_24081__$1;
(statearr_24094_24142[(2)] = inst_24077);

(statearr_24094_24142[(1)] = (6));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24082 === (22))){
var inst_24075 = (state_24081[(2)]);
var state_24081__$1 = state_24081;
var statearr_24095_24143 = state_24081__$1;
(statearr_24095_24143[(2)] = inst_24075);

(statearr_24095_24143[(1)] = (13));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24082 === (6))){
var inst_24079 = (state_24081[(2)]);
var state_24081__$1 = state_24081;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24081__$1,inst_24079);
} else {
if((state_val_24082 === (25))){
var state_24081__$1 = state_24081;
var statearr_24096_24144 = state_24081__$1;
(statearr_24096_24144[(2)] = null);

(statearr_24096_24144[(1)] = (26));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24082 === (17))){
var inst_24054 = (state_24081[(14)]);
var state_24081__$1 = state_24081;
var statearr_24097_24145 = state_24081__$1;
(statearr_24097_24145[(2)] = inst_24054);

(statearr_24097_24145[(1)] = (19));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24082 === (3))){
var inst_24013 = (state_24081[(9)]);
var state_24081__$1 = state_24081;
var statearr_24098_24146 = state_24081__$1;
(statearr_24098_24146[(2)] = inst_24013);

(statearr_24098_24146[(1)] = (4));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24082 === (12))){
var inst_24034 = (state_24081[(15)]);
var inst_24039 = (state_24081[(16)]);
var inst_24054 = (state_24081[(14)]);
var inst_24054__$1 = (function (){var G__24099 = inst_24039;
return (inst_24034.cljs$core$IFn$_invoke$arity$1 ? inst_24034.cljs$core$IFn$_invoke$arity$1(G__24099) : inst_24034.call(null,G__24099));
})();
var state_24081__$1 = (function (){var statearr_24100 = state_24081;
(statearr_24100[(14)] = inst_24054__$1);

return statearr_24100;
})();
if(cljs.core.truth_(inst_24054__$1)){
var statearr_24101_24147 = state_24081__$1;
(statearr_24101_24147[(1)] = (17));

} else {
var statearr_24102_24148 = state_24081__$1;
(statearr_24102_24148[(1)] = (18));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24082 === (2))){
var inst_24013 = (state_24081[(9)]);
var inst_24016 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24013);
var state_24081__$1 = state_24081;
var statearr_24103_24149 = state_24081__$1;
(statearr_24103_24149[(2)] = inst_24016);

(statearr_24103_24149[(1)] = (4));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24082 === (23))){
var inst_24066 = (state_24081[(2)]);
var state_24081__$1 = state_24081;
if(cljs.core.truth_(inst_24066)){
var statearr_24104_24150 = state_24081__$1;
(statearr_24104_24150[(1)] = (24));

} else {
var statearr_24105_24151 = state_24081__$1;
(statearr_24105_24151[(1)] = (25));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24082 === (19))){
var inst_24063 = (state_24081[(2)]);
var state_24081__$1 = state_24081;
if(cljs.core.truth_(inst_24063)){
var statearr_24106_24152 = state_24081__$1;
(statearr_24106_24152[(1)] = (20));

} else {
var statearr_24107_24153 = state_24081__$1;
(statearr_24107_24153[(1)] = (21));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24082 === (11))){
var inst_24038 = (state_24081[(8)]);
var inst_24044 = (inst_24038 == null);
var state_24081__$1 = state_24081;
if(cljs.core.truth_(inst_24044)){
var statearr_24108_24154 = state_24081__$1;
(statearr_24108_24154[(1)] = (14));

} else {
var statearr_24109_24155 = state_24081__$1;
(statearr_24109_24155[(1)] = (15));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24082 === (9))){
var inst_24031 = (state_24081[(10)]);
var inst_24031__$1 = (state_24081[(2)]);
var inst_24032 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24031__$1,cljs.core.constant$keyword$55);
var inst_24033 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24031__$1,cljs.core.constant$keyword$54);
var inst_24034 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24031__$1,cljs.core.constant$keyword$53);
var state_24081__$1 = (function (){var statearr_24110 = state_24081;
(statearr_24110[(10)] = inst_24031__$1);

(statearr_24110[(15)] = inst_24034);

(statearr_24110[(17)] = inst_24033);

return statearr_24110;
})();
return cljs.core.async.ioc_alts_BANG_(state_24081__$1,(10),inst_24032);
} else {
if((state_val_24082 === (5))){
var inst_24023 = (state_24081[(7)]);
var inst_24026 = cljs.core.seq_QMARK_(inst_24023);
var state_24081__$1 = state_24081;
if(inst_24026){
var statearr_24111_24156 = state_24081__$1;
(statearr_24111_24156[(1)] = (7));

} else {
var statearr_24112_24157 = state_24081__$1;
(statearr_24112_24157[(1)] = (8));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24082 === (14))){
var inst_24039 = (state_24081[(16)]);
var inst_24046 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_24039);
var state_24081__$1 = state_24081;
var statearr_24113_24158 = state_24081__$1;
(statearr_24113_24158[(2)] = inst_24046);

(statearr_24113_24158[(1)] = (16));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24082 === (26))){
var inst_24071 = (state_24081[(2)]);
var state_24081__$1 = state_24081;
var statearr_24114_24159 = state_24081__$1;
(statearr_24114_24159[(2)] = inst_24071);

(statearr_24114_24159[(1)] = (22));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24082 === (16))){
var inst_24049 = (state_24081[(2)]);
var inst_24050 = calc_state();
var inst_24023 = inst_24050;
var state_24081__$1 = (function (){var statearr_24115 = state_24081;
(statearr_24115[(7)] = inst_24023);

(statearr_24115[(18)] = inst_24049);

return statearr_24115;
})();
var statearr_24116_24160 = state_24081__$1;
(statearr_24116_24160[(2)] = null);

(statearr_24116_24160[(1)] = (5));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24082 === (10))){
var inst_24039 = (state_24081[(16)]);
var inst_24038 = (state_24081[(8)]);
var inst_24037 = (state_24081[(2)]);
var inst_24038__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24037,(0),null);
var inst_24039__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24037,(1),null);
var inst_24040 = (inst_24038__$1 == null);
var inst_24041 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24039__$1,change);
var inst_24042 = (inst_24040) || (inst_24041);
var state_24081__$1 = (function (){var statearr_24117 = state_24081;
(statearr_24117[(16)] = inst_24039__$1);

(statearr_24117[(8)] = inst_24038__$1);

return statearr_24117;
})();
if(cljs.core.truth_(inst_24042)){
var statearr_24118_24161 = state_24081__$1;
(statearr_24118_24161[(1)] = (11));

} else {
var statearr_24119_24162 = state_24081__$1;
(statearr_24119_24162[(1)] = (12));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24082 === (18))){
var inst_24034 = (state_24081[(15)]);
var inst_24033 = (state_24081[(17)]);
var inst_24039 = (state_24081[(16)]);
var inst_24058 = cljs.core.empty_QMARK_(inst_24034);
var inst_24059 = (function (){var G__24120 = inst_24039;
return (inst_24033.cljs$core$IFn$_invoke$arity$1 ? inst_24033.cljs$core$IFn$_invoke$arity$1(G__24120) : inst_24033.call(null,G__24120));
})();
var inst_24060 = cljs.core.not(inst_24059);
var inst_24061 = (inst_24058) && (inst_24060);
var state_24081__$1 = state_24081;
var statearr_24121_24163 = state_24081__$1;
(statearr_24121_24163[(2)] = inst_24061);

(statearr_24121_24163[(1)] = (19));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24082 === (8))){
var inst_24023 = (state_24081[(7)]);
var state_24081__$1 = state_24081;
var statearr_24122_24164 = state_24081__$1;
(statearr_24122_24164[(2)] = inst_24023);

(statearr_24122_24164[(1)] = (9));


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
});})(c__5853__auto___24134,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__5838__auto__,c__5853__auto___24134,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_24126 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24126[(0)] = state_machine__5839__auto__);

(statearr_24126[(1)] = (1));

return statearr_24126;
});
var state_machine__5839__auto____1 = (function (state_24081){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_24081);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e24127){if((e24127 instanceof Object)){
var ex__5842__auto__ = e24127;
var statearr_24128_24165 = state_24081;
(statearr_24128_24165[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24081);

return cljs.core.constant$keyword$41;
} else {
throw e24127;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__24166 = state_24081;
state_24081 = G__24166;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_24081){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_24081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___24134,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__5855__auto__ = (function (){var statearr_24129 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_24129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___24134);

return statearr_24129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___24134,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj24168 = {};
return obj24168;
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
return (function (){var or__3630__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__24172 = x__4274__auto__;
return goog.typeOf(G__24172);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__24176 = x__4274__auto__;
return goog.typeOf(G__24176);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__24182 = x__4274__auto__;
return goog.typeOf(G__24182);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__24184 = x__4274__auto__;
return goog.typeOf(G__24184);
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
var mults = (function (){var G__24323 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24323) : cljs.core.atom.call(null,G__24323));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__3630__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__24325 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24325) : cljs.core.deref.call(null,G__24325));
})(),topic);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3630__auto__,mults){
return (function (p1__24185_SHARP_){
if(cljs.core.truth_((function (){var G__24326 = topic;
return (p1__24185_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24185_SHARP_.cljs$core$IFn$_invoke$arity$1(G__24326) : p1__24185_SHARP_.call(null,G__24326));
})())){
return p1__24185_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24185_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__24327 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__24327) : buf_fn.call(null,G__24327));
})())));
}
});})(or__3630__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t24328 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24328 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24329){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24329 = meta24329;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24328.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t24328.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__24331 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__24331) : self__.ensure_mult.call(null,G__24331));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t24328.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__24332 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24332) : cljs.core.deref.call(null,G__24332));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t24328.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__24333 = self__.mults;
var G__24334 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24333,G__24334) : cljs.core.reset_BANG_.call(null,G__24333,G__24334));
});})(mults,ensure_mult))
;

cljs.core.async.t24328.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t24328.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24328.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t24328.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24330){
var self__ = this;
var _24330__$1 = this;
return self__.meta24329;
});})(mults,ensure_mult))
;

cljs.core.async.t24328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24330,meta24329__$1){
var self__ = this;
var _24330__$1 = this;
return (new cljs.core.async.t24328(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24329__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t24328.cljs$lang$type = true;

cljs.core.async.t24328.cljs$lang$ctorStr = "cljs.core.async/t24328";

cljs.core.async.t24328.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24328");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t24328 = ((function (mults,ensure_mult){
return (function __GT_t24328(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24329){
return (new cljs.core.async.t24328(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24329));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t24328(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,65,cljs.core.constant$keyword$9,603,cljs.core.constant$keyword$10,14,cljs.core.constant$keyword$11,591,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/resources/public/js-min/cljs/core/async.cljs"], null)));
})()
;
var c__5853__auto___24457 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___24457,mults,ensure_mult,p){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___24457,mults,ensure_mult,p){
return (function (state_24406){
var state_val_24407 = (state_24406[(1)]);
if((state_val_24407 === (7))){
var inst_24402 = (state_24406[(2)]);
var state_24406__$1 = state_24406;
var statearr_24408_24458 = state_24406__$1;
(statearr_24408_24458[(2)] = inst_24402);

(statearr_24408_24458[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24407 === (20))){
var state_24406__$1 = state_24406;
var statearr_24409_24459 = state_24406__$1;
(statearr_24409_24459[(2)] = null);

(statearr_24409_24459[(1)] = (21));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24407 === (1))){
var state_24406__$1 = state_24406;
var statearr_24410_24460 = state_24406__$1;
(statearr_24410_24460[(2)] = null);

(statearr_24410_24460[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24407 === (24))){
var inst_24385 = (state_24406[(7)]);
var inst_24394 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_24385);
var state_24406__$1 = state_24406;
var statearr_24411_24461 = state_24406__$1;
(statearr_24411_24461[(2)] = inst_24394);

(statearr_24411_24461[(1)] = (25));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24407 === (4))){
var inst_24337 = (state_24406[(8)]);
var inst_24337__$1 = (state_24406[(2)]);
var inst_24338 = (inst_24337__$1 == null);
var state_24406__$1 = (function (){var statearr_24412 = state_24406;
(statearr_24412[(8)] = inst_24337__$1);

return statearr_24412;
})();
if(cljs.core.truth_(inst_24338)){
var statearr_24413_24462 = state_24406__$1;
(statearr_24413_24462[(1)] = (5));

} else {
var statearr_24414_24463 = state_24406__$1;
(statearr_24414_24463[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24407 === (15))){
var inst_24379 = (state_24406[(2)]);
var state_24406__$1 = state_24406;
var statearr_24415_24464 = state_24406__$1;
(statearr_24415_24464[(2)] = inst_24379);

(statearr_24415_24464[(1)] = (12));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24407 === (21))){
var inst_24399 = (state_24406[(2)]);
var state_24406__$1 = (function (){var statearr_24416 = state_24406;
(statearr_24416[(9)] = inst_24399);

return statearr_24416;
})();
var statearr_24417_24465 = state_24406__$1;
(statearr_24417_24465[(2)] = null);

(statearr_24417_24465[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24407 === (13))){
var inst_24361 = (state_24406[(10)]);
var inst_24363 = cljs.core.chunked_seq_QMARK_(inst_24361);
var state_24406__$1 = state_24406;
if(inst_24363){
var statearr_24418_24466 = state_24406__$1;
(statearr_24418_24466[(1)] = (16));

} else {
var statearr_24419_24467 = state_24406__$1;
(statearr_24419_24467[(1)] = (17));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24407 === (22))){
var inst_24391 = (state_24406[(2)]);
var state_24406__$1 = state_24406;
if(cljs.core.truth_(inst_24391)){
var statearr_24420_24468 = state_24406__$1;
(statearr_24420_24468[(1)] = (23));

} else {
var statearr_24421_24469 = state_24406__$1;
(statearr_24421_24469[(1)] = (24));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24407 === (6))){
var inst_24337 = (state_24406[(8)]);
var inst_24385 = (state_24406[(7)]);
var inst_24387 = (state_24406[(11)]);
var inst_24385__$1 = (function (){var G__24422 = inst_24337;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__24422) : topic_fn.call(null,G__24422));
})();
var inst_24386 = (function (){var G__24423 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24423) : cljs.core.deref.call(null,G__24423));
})();
var inst_24387__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24386,inst_24385__$1);
var state_24406__$1 = (function (){var statearr_24424 = state_24406;
(statearr_24424[(7)] = inst_24385__$1);

(statearr_24424[(11)] = inst_24387__$1);

return statearr_24424;
})();
if(cljs.core.truth_(inst_24387__$1)){
var statearr_24425_24470 = state_24406__$1;
(statearr_24425_24470[(1)] = (19));

} else {
var statearr_24426_24471 = state_24406__$1;
(statearr_24426_24471[(1)] = (20));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24407 === (25))){
var inst_24396 = (state_24406[(2)]);
var state_24406__$1 = state_24406;
var statearr_24427_24472 = state_24406__$1;
(statearr_24427_24472[(2)] = inst_24396);

(statearr_24427_24472[(1)] = (21));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24407 === (17))){
var inst_24361 = (state_24406[(10)]);
var inst_24370 = cljs.core.first(inst_24361);
var inst_24371 = cljs.core.async.muxch_STAR_(inst_24370);
var inst_24372 = cljs.core.async.close_BANG_(inst_24371);
var inst_24373 = cljs.core.next(inst_24361);
var inst_24347 = inst_24373;
var inst_24348 = null;
var inst_24349 = (0);
var inst_24350 = (0);
var state_24406__$1 = (function (){var statearr_24428 = state_24406;
(statearr_24428[(12)] = inst_24372);

(statearr_24428[(13)] = inst_24347);

(statearr_24428[(14)] = inst_24349);

(statearr_24428[(15)] = inst_24350);

(statearr_24428[(16)] = inst_24348);

return statearr_24428;
})();
var statearr_24429_24473 = state_24406__$1;
(statearr_24429_24473[(2)] = null);

(statearr_24429_24473[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24407 === (3))){
var inst_24404 = (state_24406[(2)]);
var state_24406__$1 = state_24406;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24406__$1,inst_24404);
} else {
if((state_val_24407 === (12))){
var inst_24381 = (state_24406[(2)]);
var state_24406__$1 = state_24406;
var statearr_24430_24474 = state_24406__$1;
(statearr_24430_24474[(2)] = inst_24381);

(statearr_24430_24474[(1)] = (9));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24407 === (2))){
var state_24406__$1 = state_24406;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24406__$1,(4),ch);
} else {
if((state_val_24407 === (23))){
var state_24406__$1 = state_24406;
var statearr_24431_24475 = state_24406__$1;
(statearr_24431_24475[(2)] = null);

(statearr_24431_24475[(1)] = (25));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24407 === (19))){
var inst_24337 = (state_24406[(8)]);
var inst_24387 = (state_24406[(11)]);
var inst_24389 = cljs.core.async.muxch_STAR_(inst_24387);
var state_24406__$1 = state_24406;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24406__$1,(22),inst_24389,inst_24337);
} else {
if((state_val_24407 === (11))){
var inst_24347 = (state_24406[(13)]);
var inst_24361 = (state_24406[(10)]);
var inst_24361__$1 = cljs.core.seq(inst_24347);
var state_24406__$1 = (function (){var statearr_24432 = state_24406;
(statearr_24432[(10)] = inst_24361__$1);

return statearr_24432;
})();
if(inst_24361__$1){
var statearr_24433_24476 = state_24406__$1;
(statearr_24433_24476[(1)] = (13));

} else {
var statearr_24434_24477 = state_24406__$1;
(statearr_24434_24477[(1)] = (14));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24407 === (9))){
var inst_24383 = (state_24406[(2)]);
var state_24406__$1 = state_24406;
var statearr_24435_24478 = state_24406__$1;
(statearr_24435_24478[(2)] = inst_24383);

(statearr_24435_24478[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24407 === (5))){
var inst_24344 = (function (){var G__24436 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24436) : cljs.core.deref.call(null,G__24436));
})();
var inst_24345 = cljs.core.vals(inst_24344);
var inst_24346 = cljs.core.seq(inst_24345);
var inst_24347 = inst_24346;
var inst_24348 = null;
var inst_24349 = (0);
var inst_24350 = (0);
var state_24406__$1 = (function (){var statearr_24437 = state_24406;
(statearr_24437[(13)] = inst_24347);

(statearr_24437[(14)] = inst_24349);

(statearr_24437[(15)] = inst_24350);

(statearr_24437[(16)] = inst_24348);

return statearr_24437;
})();
var statearr_24438_24479 = state_24406__$1;
(statearr_24438_24479[(2)] = null);

(statearr_24438_24479[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24407 === (14))){
var state_24406__$1 = state_24406;
var statearr_24442_24480 = state_24406__$1;
(statearr_24442_24480[(2)] = null);

(statearr_24442_24480[(1)] = (15));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24407 === (16))){
var inst_24361 = (state_24406[(10)]);
var inst_24365 = cljs.core.chunk_first(inst_24361);
var inst_24366 = cljs.core.chunk_rest(inst_24361);
var inst_24367 = cljs.core.count(inst_24365);
var inst_24347 = inst_24366;
var inst_24348 = inst_24365;
var inst_24349 = inst_24367;
var inst_24350 = (0);
var state_24406__$1 = (function (){var statearr_24443 = state_24406;
(statearr_24443[(13)] = inst_24347);

(statearr_24443[(14)] = inst_24349);

(statearr_24443[(15)] = inst_24350);

(statearr_24443[(16)] = inst_24348);

return statearr_24443;
})();
var statearr_24444_24481 = state_24406__$1;
(statearr_24444_24481[(2)] = null);

(statearr_24444_24481[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24407 === (10))){
var inst_24347 = (state_24406[(13)]);
var inst_24349 = (state_24406[(14)]);
var inst_24350 = (state_24406[(15)]);
var inst_24348 = (state_24406[(16)]);
var inst_24355 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24348,inst_24350);
var inst_24356 = cljs.core.async.muxch_STAR_(inst_24355);
var inst_24357 = cljs.core.async.close_BANG_(inst_24356);
var inst_24358 = (inst_24350 + (1));
var tmp24439 = inst_24347;
var tmp24440 = inst_24349;
var tmp24441 = inst_24348;
var inst_24347__$1 = tmp24439;
var inst_24348__$1 = tmp24441;
var inst_24349__$1 = tmp24440;
var inst_24350__$1 = inst_24358;
var state_24406__$1 = (function (){var statearr_24445 = state_24406;
(statearr_24445[(13)] = inst_24347__$1);

(statearr_24445[(14)] = inst_24349__$1);

(statearr_24445[(17)] = inst_24357);

(statearr_24445[(15)] = inst_24350__$1);

(statearr_24445[(16)] = inst_24348__$1);

return statearr_24445;
})();
var statearr_24446_24482 = state_24406__$1;
(statearr_24446_24482[(2)] = null);

(statearr_24446_24482[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24407 === (18))){
var inst_24376 = (state_24406[(2)]);
var state_24406__$1 = state_24406;
var statearr_24447_24483 = state_24406__$1;
(statearr_24447_24483[(2)] = inst_24376);

(statearr_24447_24483[(1)] = (15));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24407 === (8))){
var inst_24349 = (state_24406[(14)]);
var inst_24350 = (state_24406[(15)]);
var inst_24352 = (inst_24350 < inst_24349);
var inst_24353 = inst_24352;
var state_24406__$1 = state_24406;
if(cljs.core.truth_(inst_24353)){
var statearr_24448_24484 = state_24406__$1;
(statearr_24448_24484[(1)] = (10));

} else {
var statearr_24449_24485 = state_24406__$1;
(statearr_24449_24485[(1)] = (11));

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
});})(c__5853__auto___24457,mults,ensure_mult,p))
;
return ((function (switch__5838__auto__,c__5853__auto___24457,mults,ensure_mult,p){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_24453 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24453[(0)] = state_machine__5839__auto__);

(statearr_24453[(1)] = (1));

return statearr_24453;
});
var state_machine__5839__auto____1 = (function (state_24406){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_24406);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e24454){if((e24454 instanceof Object)){
var ex__5842__auto__ = e24454;
var statearr_24455_24486 = state_24406;
(statearr_24455_24486[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24406);

return cljs.core.constant$keyword$41;
} else {
throw e24454;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__24487 = state_24406;
state_24406 = G__24487;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_24406){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_24406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___24457,mults,ensure_mult,p))
})();
var state__5855__auto__ = (function (){var statearr_24456 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_24456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___24457);

return statearr_24456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___24457,mults,ensure_mult,p))
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
var dctr = (function (){var G__24568 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24568) : cljs.core.atom.call(null,G__24568));
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
var c__5853__auto___24641 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___24641,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___24641,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24607){
var state_val_24608 = (state_24607[(1)]);
if((state_val_24608 === (7))){
var state_24607__$1 = state_24607;
var statearr_24609_24642 = state_24607__$1;
(statearr_24609_24642[(2)] = null);

(statearr_24609_24642[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24608 === (1))){
var state_24607__$1 = state_24607;
var statearr_24610_24643 = state_24607__$1;
(statearr_24610_24643[(2)] = null);

(statearr_24610_24643[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24608 === (4))){
var inst_24571 = (state_24607[(7)]);
var inst_24573 = (inst_24571 < cnt);
var state_24607__$1 = state_24607;
if(cljs.core.truth_(inst_24573)){
var statearr_24611_24644 = state_24607__$1;
(statearr_24611_24644[(1)] = (6));

} else {
var statearr_24612_24645 = state_24607__$1;
(statearr_24612_24645[(1)] = (7));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24608 === (15))){
var inst_24603 = (state_24607[(2)]);
var state_24607__$1 = state_24607;
var statearr_24613_24646 = state_24607__$1;
(statearr_24613_24646[(2)] = inst_24603);

(statearr_24613_24646[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24608 === (13))){
var inst_24596 = cljs.core.async.close_BANG_(out);
var state_24607__$1 = state_24607;
var statearr_24614_24647 = state_24607__$1;
(statearr_24614_24647[(2)] = inst_24596);

(statearr_24614_24647[(1)] = (15));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24608 === (6))){
var state_24607__$1 = state_24607;
var statearr_24615_24648 = state_24607__$1;
(statearr_24615_24648[(2)] = null);

(statearr_24615_24648[(1)] = (11));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24608 === (3))){
var inst_24605 = (state_24607[(2)]);
var state_24607__$1 = state_24607;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24607__$1,inst_24605);
} else {
if((state_val_24608 === (12))){
var inst_24593 = (state_24607[(8)]);
var inst_24593__$1 = (state_24607[(2)]);
var inst_24594 = cljs.core.some(cljs.core.nil_QMARK_,inst_24593__$1);
var state_24607__$1 = (function (){var statearr_24616 = state_24607;
(statearr_24616[(8)] = inst_24593__$1);

return statearr_24616;
})();
if(cljs.core.truth_(inst_24594)){
var statearr_24617_24649 = state_24607__$1;
(statearr_24617_24649[(1)] = (13));

} else {
var statearr_24618_24650 = state_24607__$1;
(statearr_24618_24650[(1)] = (14));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24608 === (2))){
var inst_24570 = (function (){var G__24619 = dctr;
var G__24620 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24619,G__24620) : cljs.core.reset_BANG_.call(null,G__24619,G__24620));
})();
var inst_24571 = (0);
var state_24607__$1 = (function (){var statearr_24621 = state_24607;
(statearr_24621[(7)] = inst_24571);

(statearr_24621[(9)] = inst_24570);

return statearr_24621;
})();
var statearr_24622_24651 = state_24607__$1;
(statearr_24622_24651[(2)] = null);

(statearr_24622_24651[(1)] = (4));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24608 === (11))){
var inst_24571 = (state_24607[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24607,(10),Object,null,(9));
var inst_24580 = (function (){var G__24623 = inst_24571;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__24623) : chs__$1.call(null,G__24623));
})();
var inst_24581 = (function (){var G__24624 = inst_24571;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__24624) : done.call(null,G__24624));
})();
var inst_24582 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_24580,inst_24581);
var state_24607__$1 = state_24607;
var statearr_24625_24652 = state_24607__$1;
(statearr_24625_24652[(2)] = inst_24582);


cljs.core.async.impl.ioc_helpers.process_exception(state_24607__$1);

return cljs.core.constant$keyword$41;
} else {
if((state_val_24608 === (9))){
var inst_24571 = (state_24607[(7)]);
var inst_24584 = (state_24607[(2)]);
var inst_24585 = (inst_24571 + (1));
var inst_24571__$1 = inst_24585;
var state_24607__$1 = (function (){var statearr_24626 = state_24607;
(statearr_24626[(7)] = inst_24571__$1);

(statearr_24626[(10)] = inst_24584);

return statearr_24626;
})();
var statearr_24627_24653 = state_24607__$1;
(statearr_24627_24653[(2)] = null);

(statearr_24627_24653[(1)] = (4));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24608 === (5))){
var inst_24591 = (state_24607[(2)]);
var state_24607__$1 = (function (){var statearr_24628 = state_24607;
(statearr_24628[(11)] = inst_24591);

return statearr_24628;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24607__$1,(12),dchan);
} else {
if((state_val_24608 === (14))){
var inst_24593 = (state_24607[(8)]);
var inst_24598 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_24593);
var state_24607__$1 = state_24607;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24607__$1,(16),out,inst_24598);
} else {
if((state_val_24608 === (16))){
var inst_24600 = (state_24607[(2)]);
var state_24607__$1 = (function (){var statearr_24629 = state_24607;
(statearr_24629[(12)] = inst_24600);

return statearr_24629;
})();
var statearr_24630_24654 = state_24607__$1;
(statearr_24630_24654[(2)] = null);

(statearr_24630_24654[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24608 === (10))){
var inst_24575 = (state_24607[(2)]);
var inst_24576 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_24607__$1 = (function (){var statearr_24631 = state_24607;
(statearr_24631[(13)] = inst_24575);

return statearr_24631;
})();
var statearr_24632_24655 = state_24607__$1;
(statearr_24632_24655[(2)] = inst_24576);


cljs.core.async.impl.ioc_helpers.process_exception(state_24607__$1);

return cljs.core.constant$keyword$41;
} else {
if((state_val_24608 === (8))){
var inst_24589 = (state_24607[(2)]);
var state_24607__$1 = state_24607;
var statearr_24633_24656 = state_24607__$1;
(statearr_24633_24656[(2)] = inst_24589);

(statearr_24633_24656[(1)] = (5));


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
});})(c__5853__auto___24641,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__5838__auto__,c__5853__auto___24641,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_24637 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24637[(0)] = state_machine__5839__auto__);

(statearr_24637[(1)] = (1));

return statearr_24637;
});
var state_machine__5839__auto____1 = (function (state_24607){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_24607);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e24638){if((e24638 instanceof Object)){
var ex__5842__auto__ = e24638;
var statearr_24639_24657 = state_24607;
(statearr_24639_24657[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24607);

return cljs.core.constant$keyword$41;
} else {
throw e24638;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__24658 = state_24607;
state_24607 = G__24658;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_24607){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_24607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___24641,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__5855__auto__ = (function (){var statearr_24640 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_24640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___24641);

return statearr_24640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___24641,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__5853__auto___24768 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___24768,out){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___24768,out){
return (function (state_24744){
var state_val_24745 = (state_24744[(1)]);
if((state_val_24745 === (7))){
var inst_24724 = (state_24744[(7)]);
var inst_24723 = (state_24744[(8)]);
var inst_24723__$1 = (state_24744[(2)]);
var inst_24724__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24723__$1,(0),null);
var inst_24725 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24723__$1,(1),null);
var inst_24726 = (inst_24724__$1 == null);
var state_24744__$1 = (function (){var statearr_24746 = state_24744;
(statearr_24746[(7)] = inst_24724__$1);

(statearr_24746[(8)] = inst_24723__$1);

(statearr_24746[(9)] = inst_24725);

return statearr_24746;
})();
if(cljs.core.truth_(inst_24726)){
var statearr_24747_24769 = state_24744__$1;
(statearr_24747_24769[(1)] = (8));

} else {
var statearr_24748_24770 = state_24744__$1;
(statearr_24748_24770[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24745 === (1))){
var inst_24715 = cljs.core.vec(chs);
var inst_24716 = inst_24715;
var state_24744__$1 = (function (){var statearr_24749 = state_24744;
(statearr_24749[(10)] = inst_24716);

return statearr_24749;
})();
var statearr_24750_24771 = state_24744__$1;
(statearr_24750_24771[(2)] = null);

(statearr_24750_24771[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24745 === (4))){
var inst_24716 = (state_24744[(10)]);
var state_24744__$1 = state_24744;
return cljs.core.async.ioc_alts_BANG_(state_24744__$1,(7),inst_24716);
} else {
if((state_val_24745 === (6))){
var inst_24740 = (state_24744[(2)]);
var state_24744__$1 = state_24744;
var statearr_24751_24772 = state_24744__$1;
(statearr_24751_24772[(2)] = inst_24740);

(statearr_24751_24772[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24745 === (3))){
var inst_24742 = (state_24744[(2)]);
var state_24744__$1 = state_24744;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24744__$1,inst_24742);
} else {
if((state_val_24745 === (2))){
var inst_24716 = (state_24744[(10)]);
var inst_24718 = cljs.core.count(inst_24716);
var inst_24719 = (inst_24718 > (0));
var state_24744__$1 = state_24744;
if(cljs.core.truth_(inst_24719)){
var statearr_24753_24773 = state_24744__$1;
(statearr_24753_24773[(1)] = (4));

} else {
var statearr_24754_24774 = state_24744__$1;
(statearr_24754_24774[(1)] = (5));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24745 === (11))){
var inst_24716 = (state_24744[(10)]);
var inst_24733 = (state_24744[(2)]);
var tmp24752 = inst_24716;
var inst_24716__$1 = tmp24752;
var state_24744__$1 = (function (){var statearr_24755 = state_24744;
(statearr_24755[(10)] = inst_24716__$1);

(statearr_24755[(11)] = inst_24733);

return statearr_24755;
})();
var statearr_24756_24775 = state_24744__$1;
(statearr_24756_24775[(2)] = null);

(statearr_24756_24775[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24745 === (9))){
var inst_24724 = (state_24744[(7)]);
var state_24744__$1 = state_24744;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24744__$1,(11),out,inst_24724);
} else {
if((state_val_24745 === (5))){
var inst_24738 = cljs.core.async.close_BANG_(out);
var state_24744__$1 = state_24744;
var statearr_24757_24776 = state_24744__$1;
(statearr_24757_24776[(2)] = inst_24738);

(statearr_24757_24776[(1)] = (6));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24745 === (10))){
var inst_24736 = (state_24744[(2)]);
var state_24744__$1 = state_24744;
var statearr_24758_24777 = state_24744__$1;
(statearr_24758_24777[(2)] = inst_24736);

(statearr_24758_24777[(1)] = (6));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24745 === (8))){
var inst_24724 = (state_24744[(7)]);
var inst_24716 = (state_24744[(10)]);
var inst_24723 = (state_24744[(8)]);
var inst_24725 = (state_24744[(9)]);
var inst_24728 = (function (){var c = inst_24725;
var v = inst_24724;
var vec__24721 = inst_24723;
var cs = inst_24716;
return ((function (c,v,vec__24721,cs,inst_24724,inst_24716,inst_24723,inst_24725,state_val_24745,c__5853__auto___24768,out){
return (function (p1__24659_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__24659_SHARP_);
});
;})(c,v,vec__24721,cs,inst_24724,inst_24716,inst_24723,inst_24725,state_val_24745,c__5853__auto___24768,out))
})();
var inst_24729 = cljs.core.filterv(inst_24728,inst_24716);
var inst_24716__$1 = inst_24729;
var state_24744__$1 = (function (){var statearr_24759 = state_24744;
(statearr_24759[(10)] = inst_24716__$1);

return statearr_24759;
})();
var statearr_24760_24778 = state_24744__$1;
(statearr_24760_24778[(2)] = null);

(statearr_24760_24778[(1)] = (2));


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
});})(c__5853__auto___24768,out))
;
return ((function (switch__5838__auto__,c__5853__auto___24768,out){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_24764 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24764[(0)] = state_machine__5839__auto__);

(statearr_24764[(1)] = (1));

return statearr_24764;
});
var state_machine__5839__auto____1 = (function (state_24744){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_24744);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e24765){if((e24765 instanceof Object)){
var ex__5842__auto__ = e24765;
var statearr_24766_24779 = state_24744;
(statearr_24766_24779[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24744);

return cljs.core.constant$keyword$41;
} else {
throw e24765;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__24780 = state_24744;
state_24744 = G__24780;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_24744){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_24744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___24768,out))
})();
var state__5855__auto__ = (function (){var statearr_24767 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_24767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___24768);

return statearr_24767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___24768,out))
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
var c__5853__auto___24876 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___24876,out){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___24876,out){
return (function (state_24853){
var state_val_24854 = (state_24853[(1)]);
if((state_val_24854 === (7))){
var inst_24835 = (state_24853[(7)]);
var inst_24835__$1 = (state_24853[(2)]);
var inst_24836 = (inst_24835__$1 == null);
var inst_24837 = cljs.core.not(inst_24836);
var state_24853__$1 = (function (){var statearr_24855 = state_24853;
(statearr_24855[(7)] = inst_24835__$1);

return statearr_24855;
})();
if(inst_24837){
var statearr_24856_24877 = state_24853__$1;
(statearr_24856_24877[(1)] = (8));

} else {
var statearr_24857_24878 = state_24853__$1;
(statearr_24857_24878[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24854 === (1))){
var inst_24830 = (0);
var state_24853__$1 = (function (){var statearr_24858 = state_24853;
(statearr_24858[(8)] = inst_24830);

return statearr_24858;
})();
var statearr_24859_24879 = state_24853__$1;
(statearr_24859_24879[(2)] = null);

(statearr_24859_24879[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24854 === (4))){
var state_24853__$1 = state_24853;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24853__$1,(7),ch);
} else {
if((state_val_24854 === (6))){
var inst_24848 = (state_24853[(2)]);
var state_24853__$1 = state_24853;
var statearr_24860_24880 = state_24853__$1;
(statearr_24860_24880[(2)] = inst_24848);

(statearr_24860_24880[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24854 === (3))){
var inst_24850 = (state_24853[(2)]);
var inst_24851 = cljs.core.async.close_BANG_(out);
var state_24853__$1 = (function (){var statearr_24861 = state_24853;
(statearr_24861[(9)] = inst_24850);

return statearr_24861;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24853__$1,inst_24851);
} else {
if((state_val_24854 === (2))){
var inst_24830 = (state_24853[(8)]);
var inst_24832 = (inst_24830 < n);
var state_24853__$1 = state_24853;
if(cljs.core.truth_(inst_24832)){
var statearr_24862_24881 = state_24853__$1;
(statearr_24862_24881[(1)] = (4));

} else {
var statearr_24863_24882 = state_24853__$1;
(statearr_24863_24882[(1)] = (5));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24854 === (11))){
var inst_24830 = (state_24853[(8)]);
var inst_24840 = (state_24853[(2)]);
var inst_24841 = (inst_24830 + (1));
var inst_24830__$1 = inst_24841;
var state_24853__$1 = (function (){var statearr_24864 = state_24853;
(statearr_24864[(10)] = inst_24840);

(statearr_24864[(8)] = inst_24830__$1);

return statearr_24864;
})();
var statearr_24865_24883 = state_24853__$1;
(statearr_24865_24883[(2)] = null);

(statearr_24865_24883[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24854 === (9))){
var state_24853__$1 = state_24853;
var statearr_24866_24884 = state_24853__$1;
(statearr_24866_24884[(2)] = null);

(statearr_24866_24884[(1)] = (10));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24854 === (5))){
var state_24853__$1 = state_24853;
var statearr_24867_24885 = state_24853__$1;
(statearr_24867_24885[(2)] = null);

(statearr_24867_24885[(1)] = (6));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24854 === (10))){
var inst_24845 = (state_24853[(2)]);
var state_24853__$1 = state_24853;
var statearr_24868_24886 = state_24853__$1;
(statearr_24868_24886[(2)] = inst_24845);

(statearr_24868_24886[(1)] = (6));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24854 === (8))){
var inst_24835 = (state_24853[(7)]);
var state_24853__$1 = state_24853;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24853__$1,(11),out,inst_24835);
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
});})(c__5853__auto___24876,out))
;
return ((function (switch__5838__auto__,c__5853__auto___24876,out){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_24872 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24872[(0)] = state_machine__5839__auto__);

(statearr_24872[(1)] = (1));

return statearr_24872;
});
var state_machine__5839__auto____1 = (function (state_24853){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_24853);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e24873){if((e24873 instanceof Object)){
var ex__5842__auto__ = e24873;
var statearr_24874_24887 = state_24853;
(statearr_24874_24887[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24853);

return cljs.core.constant$keyword$41;
} else {
throw e24873;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__24888 = state_24853;
state_24853 = G__24888;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_24853){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_24853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___24876,out))
})();
var state__5855__auto__ = (function (){var statearr_24875 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_24875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___24876);

return statearr_24875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___24876,out))
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
if(typeof cljs.core.async.t24901 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24901 = (function (ch,f,map_LT_,meta24902){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24902 = meta24902;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24901.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t24901.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t24901.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t24901.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t24904 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24904 = (function (fn1,_,meta24902,map_LT_,f,ch,meta24905){
this.fn1 = fn1;
this._ = _;
this.meta24902 = meta24902;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24905 = meta24905;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24904.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24904.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t24904.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24889_SHARP_){
var G__24907 = (((p1__24889_SHARP_ == null))?null:(function (){var G__24908 = p1__24889_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24908) : self__.f.call(null,G__24908));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__24907) : f1.call(null,G__24907));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t24904.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24906){
var self__ = this;
var _24906__$1 = this;
return self__.meta24905;
});})(___$1))
;

cljs.core.async.t24904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24906,meta24905__$1){
var self__ = this;
var _24906__$1 = this;
return (new cljs.core.async.t24904(self__.fn1,self__._,self__.meta24902,self__.map_LT_,self__.f,self__.ch,meta24905__$1));
});})(___$1))
;

cljs.core.async.t24904.cljs$lang$type = true;

cljs.core.async.t24904.cljs$lang$ctorStr = "cljs.core.async/t24904";

cljs.core.async.t24904.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24904");
});})(___$1))
;

cljs.core.async.__GT_t24904 = ((function (___$1){
return (function __GT_t24904(fn1__$1,___$2,meta24902__$1,map_LT___$1,f__$1,ch__$1,meta24905){
return (new cljs.core.async.t24904(fn1__$1,___$2,meta24902__$1,map_LT___$1,f__$1,ch__$1,meta24905));
});})(___$1))
;

}

return (new cljs.core.async.t24904(fn1,___$1,self__.meta24902,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,737,cljs.core.constant$keyword$10,10,cljs.core.constant$keyword$11,731,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/resources/public/js-min/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3618__auto__ = ret;
if(cljs.core.truth_(and__3618__auto__)){
return !(((function (){var G__24909 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24909) : cljs.core.deref.call(null,G__24909));
})() == null));
} else {
return and__3618__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__24910 = (function (){var G__24911 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24911) : cljs.core.deref.call(null,G__24911));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24910) : self__.f.call(null,G__24910));
})());
} else {
return ret;
}
});

cljs.core.async.t24901.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t24901.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t24901.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t24901.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24903){
var self__ = this;
var _24903__$1 = this;
return self__.meta24902;
});

cljs.core.async.t24901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24903,meta24902__$1){
var self__ = this;
var _24903__$1 = this;
return (new cljs.core.async.t24901(self__.ch,self__.f,self__.map_LT_,meta24902__$1));
});

cljs.core.async.t24901.cljs$lang$type = true;

cljs.core.async.t24901.cljs$lang$ctorStr = "cljs.core.async/t24901";

cljs.core.async.t24901.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24901");
});

cljs.core.async.__GT_t24901 = (function __GT_t24901(ch__$1,f__$1,map_LT___$1,meta24902){
return (new cljs.core.async.t24901(ch__$1,f__$1,map_LT___$1,meta24902));
});

}

return (new cljs.core.async.t24901(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,743,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,722,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/resources/public/js-min/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t24916 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24916 = (function (ch,f,map_GT_,meta24917){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta24917 = meta24917;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24916.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t24916.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__24919 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24919) : self__.f.call(null,G__24919));
})(),fn1);
});

cljs.core.async.t24916.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t24916.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t24916.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t24916.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t24916.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24918){
var self__ = this;
var _24918__$1 = this;
return self__.meta24917;
});

cljs.core.async.t24916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24918,meta24917__$1){
var self__ = this;
var _24918__$1 = this;
return (new cljs.core.async.t24916(self__.ch,self__.f,self__.map_GT_,meta24917__$1));
});

cljs.core.async.t24916.cljs$lang$type = true;

cljs.core.async.t24916.cljs$lang$ctorStr = "cljs.core.async/t24916";

cljs.core.async.t24916.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24916");
});

cljs.core.async.__GT_t24916 = (function __GT_t24916(ch__$1,f__$1,map_GT___$1,meta24917){
return (new cljs.core.async.t24916(ch__$1,f__$1,map_GT___$1,meta24917));
});

}

return (new cljs.core.async.t24916(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,34,cljs.core.constant$keyword$9,757,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,748,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/resources/public/js-min/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t24924 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24924 = (function (ch,p,filter_GT_,meta24925){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta24925 = meta24925;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24924.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t24924.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__24927 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__24927) : self__.p.call(null,G__24927));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t24924.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t24924.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t24924.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t24924.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t24924.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t24924.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24926){
var self__ = this;
var _24926__$1 = this;
return self__.meta24925;
});

cljs.core.async.t24924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24926,meta24925__$1){
var self__ = this;
var _24926__$1 = this;
return (new cljs.core.async.t24924(self__.ch,self__.p,self__.filter_GT_,meta24925__$1));
});

cljs.core.async.t24924.cljs$lang$type = true;

cljs.core.async.t24924.cljs$lang$ctorStr = "cljs.core.async/t24924";

cljs.core.async.t24924.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24924");
});

cljs.core.async.__GT_t24924 = (function __GT_t24924(ch__$1,p__$1,filter_GT___$1,meta24925){
return (new cljs.core.async.t24924(ch__$1,p__$1,filter_GT___$1,meta24925));
});

}

return (new cljs.core.async.t24924(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,774,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,762,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/resources/public/js-min/cljs/core/async.cljs"], null)));
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
var c__5853__auto___25015 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___25015,out){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___25015,out){
return (function (state_24993){
var state_val_24994 = (state_24993[(1)]);
if((state_val_24994 === (7))){
var inst_24989 = (state_24993[(2)]);
var state_24993__$1 = state_24993;
var statearr_24995_25016 = state_24993__$1;
(statearr_24995_25016[(2)] = inst_24989);

(statearr_24995_25016[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24994 === (1))){
var state_24993__$1 = state_24993;
var statearr_24996_25017 = state_24993__$1;
(statearr_24996_25017[(2)] = null);

(statearr_24996_25017[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24994 === (4))){
var inst_24975 = (state_24993[(7)]);
var inst_24975__$1 = (state_24993[(2)]);
var inst_24976 = (inst_24975__$1 == null);
var state_24993__$1 = (function (){var statearr_24997 = state_24993;
(statearr_24997[(7)] = inst_24975__$1);

return statearr_24997;
})();
if(cljs.core.truth_(inst_24976)){
var statearr_24998_25018 = state_24993__$1;
(statearr_24998_25018[(1)] = (5));

} else {
var statearr_24999_25019 = state_24993__$1;
(statearr_24999_25019[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24994 === (6))){
var inst_24975 = (state_24993[(7)]);
var inst_24980 = (function (){var G__25000 = inst_24975;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__25000) : p.call(null,G__25000));
})();
var state_24993__$1 = state_24993;
if(cljs.core.truth_(inst_24980)){
var statearr_25001_25020 = state_24993__$1;
(statearr_25001_25020[(1)] = (8));

} else {
var statearr_25002_25021 = state_24993__$1;
(statearr_25002_25021[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24994 === (3))){
var inst_24991 = (state_24993[(2)]);
var state_24993__$1 = state_24993;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24993__$1,inst_24991);
} else {
if((state_val_24994 === (2))){
var state_24993__$1 = state_24993;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24993__$1,(4),ch);
} else {
if((state_val_24994 === (11))){
var inst_24983 = (state_24993[(2)]);
var state_24993__$1 = state_24993;
var statearr_25003_25022 = state_24993__$1;
(statearr_25003_25022[(2)] = inst_24983);

(statearr_25003_25022[(1)] = (10));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24994 === (9))){
var state_24993__$1 = state_24993;
var statearr_25004_25023 = state_24993__$1;
(statearr_25004_25023[(2)] = null);

(statearr_25004_25023[(1)] = (10));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24994 === (5))){
var inst_24978 = cljs.core.async.close_BANG_(out);
var state_24993__$1 = state_24993;
var statearr_25005_25024 = state_24993__$1;
(statearr_25005_25024[(2)] = inst_24978);

(statearr_25005_25024[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24994 === (10))){
var inst_24986 = (state_24993[(2)]);
var state_24993__$1 = (function (){var statearr_25006 = state_24993;
(statearr_25006[(8)] = inst_24986);

return statearr_25006;
})();
var statearr_25007_25025 = state_24993__$1;
(statearr_25007_25025[(2)] = null);

(statearr_25007_25025[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24994 === (8))){
var inst_24975 = (state_24993[(7)]);
var state_24993__$1 = state_24993;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24993__$1,(11),out,inst_24975);
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
});})(c__5853__auto___25015,out))
;
return ((function (switch__5838__auto__,c__5853__auto___25015,out){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_25011 = [null,null,null,null,null,null,null,null,null];
(statearr_25011[(0)] = state_machine__5839__auto__);

(statearr_25011[(1)] = (1));

return statearr_25011;
});
var state_machine__5839__auto____1 = (function (state_24993){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_24993);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e25012){if((e25012 instanceof Object)){
var ex__5842__auto__ = e25012;
var statearr_25013_25026 = state_24993;
(statearr_25013_25026[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24993);

return cljs.core.constant$keyword$41;
} else {
throw e25012;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__25027 = state_24993;
state_24993 = G__25027;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_24993){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_24993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___25015,out))
})();
var state__5855__auto__ = (function (){var statearr_25014 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_25014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___25015);

return statearr_25014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___25015,out))
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
return (function (state_25197){
var state_val_25198 = (state_25197[(1)]);
if((state_val_25198 === (7))){
var inst_25193 = (state_25197[(2)]);
var state_25197__$1 = state_25197;
var statearr_25199_25241 = state_25197__$1;
(statearr_25199_25241[(2)] = inst_25193);

(statearr_25199_25241[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25198 === (20))){
var inst_25163 = (state_25197[(7)]);
var inst_25174 = (state_25197[(2)]);
var inst_25175 = cljs.core.next(inst_25163);
var inst_25149 = inst_25175;
var inst_25150 = null;
var inst_25151 = (0);
var inst_25152 = (0);
var state_25197__$1 = (function (){var statearr_25200 = state_25197;
(statearr_25200[(8)] = inst_25152);

(statearr_25200[(9)] = inst_25149);

(statearr_25200[(10)] = inst_25150);

(statearr_25200[(11)] = inst_25174);

(statearr_25200[(12)] = inst_25151);

return statearr_25200;
})();
var statearr_25201_25242 = state_25197__$1;
(statearr_25201_25242[(2)] = null);

(statearr_25201_25242[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25198 === (1))){
var state_25197__$1 = state_25197;
var statearr_25202_25243 = state_25197__$1;
(statearr_25202_25243[(2)] = null);

(statearr_25202_25243[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25198 === (4))){
var inst_25138 = (state_25197[(13)]);
var inst_25138__$1 = (state_25197[(2)]);
var inst_25139 = (inst_25138__$1 == null);
var state_25197__$1 = (function (){var statearr_25203 = state_25197;
(statearr_25203[(13)] = inst_25138__$1);

return statearr_25203;
})();
if(cljs.core.truth_(inst_25139)){
var statearr_25204_25244 = state_25197__$1;
(statearr_25204_25244[(1)] = (5));

} else {
var statearr_25205_25245 = state_25197__$1;
(statearr_25205_25245[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25198 === (15))){
var state_25197__$1 = state_25197;
var statearr_25209_25246 = state_25197__$1;
(statearr_25209_25246[(2)] = null);

(statearr_25209_25246[(1)] = (16));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25198 === (21))){
var state_25197__$1 = state_25197;
var statearr_25210_25247 = state_25197__$1;
(statearr_25210_25247[(2)] = null);

(statearr_25210_25247[(1)] = (23));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25198 === (13))){
var inst_25152 = (state_25197[(8)]);
var inst_25149 = (state_25197[(9)]);
var inst_25150 = (state_25197[(10)]);
var inst_25151 = (state_25197[(12)]);
var inst_25159 = (state_25197[(2)]);
var inst_25160 = (inst_25152 + (1));
var tmp25206 = inst_25149;
var tmp25207 = inst_25150;
var tmp25208 = inst_25151;
var inst_25149__$1 = tmp25206;
var inst_25150__$1 = tmp25207;
var inst_25151__$1 = tmp25208;
var inst_25152__$1 = inst_25160;
var state_25197__$1 = (function (){var statearr_25211 = state_25197;
(statearr_25211[(14)] = inst_25159);

(statearr_25211[(8)] = inst_25152__$1);

(statearr_25211[(9)] = inst_25149__$1);

(statearr_25211[(10)] = inst_25150__$1);

(statearr_25211[(12)] = inst_25151__$1);

return statearr_25211;
})();
var statearr_25212_25248 = state_25197__$1;
(statearr_25212_25248[(2)] = null);

(statearr_25212_25248[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25198 === (22))){
var state_25197__$1 = state_25197;
var statearr_25213_25249 = state_25197__$1;
(statearr_25213_25249[(2)] = null);

(statearr_25213_25249[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25198 === (6))){
var inst_25138 = (state_25197[(13)]);
var inst_25147 = (function (){var G__25214 = inst_25138;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25214) : f.call(null,G__25214));
})();
var inst_25148 = cljs.core.seq(inst_25147);
var inst_25149 = inst_25148;
var inst_25150 = null;
var inst_25151 = (0);
var inst_25152 = (0);
var state_25197__$1 = (function (){var statearr_25215 = state_25197;
(statearr_25215[(8)] = inst_25152);

(statearr_25215[(9)] = inst_25149);

(statearr_25215[(10)] = inst_25150);

(statearr_25215[(12)] = inst_25151);

return statearr_25215;
})();
var statearr_25216_25250 = state_25197__$1;
(statearr_25216_25250[(2)] = null);

(statearr_25216_25250[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25198 === (17))){
var inst_25163 = (state_25197[(7)]);
var inst_25167 = cljs.core.chunk_first(inst_25163);
var inst_25168 = cljs.core.chunk_rest(inst_25163);
var inst_25169 = cljs.core.count(inst_25167);
var inst_25149 = inst_25168;
var inst_25150 = inst_25167;
var inst_25151 = inst_25169;
var inst_25152 = (0);
var state_25197__$1 = (function (){var statearr_25217 = state_25197;
(statearr_25217[(8)] = inst_25152);

(statearr_25217[(9)] = inst_25149);

(statearr_25217[(10)] = inst_25150);

(statearr_25217[(12)] = inst_25151);

return statearr_25217;
})();
var statearr_25218_25251 = state_25197__$1;
(statearr_25218_25251[(2)] = null);

(statearr_25218_25251[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25198 === (3))){
var inst_25195 = (state_25197[(2)]);
var state_25197__$1 = state_25197;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25197__$1,inst_25195);
} else {
if((state_val_25198 === (12))){
var inst_25183 = (state_25197[(2)]);
var state_25197__$1 = state_25197;
var statearr_25219_25252 = state_25197__$1;
(statearr_25219_25252[(2)] = inst_25183);

(statearr_25219_25252[(1)] = (9));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25198 === (2))){
var state_25197__$1 = state_25197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25197__$1,(4),in$);
} else {
if((state_val_25198 === (23))){
var inst_25191 = (state_25197[(2)]);
var state_25197__$1 = state_25197;
var statearr_25220_25253 = state_25197__$1;
(statearr_25220_25253[(2)] = inst_25191);

(statearr_25220_25253[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25198 === (19))){
var inst_25178 = (state_25197[(2)]);
var state_25197__$1 = state_25197;
var statearr_25221_25254 = state_25197__$1;
(statearr_25221_25254[(2)] = inst_25178);

(statearr_25221_25254[(1)] = (16));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25198 === (11))){
var inst_25149 = (state_25197[(9)]);
var inst_25163 = (state_25197[(7)]);
var inst_25163__$1 = cljs.core.seq(inst_25149);
var state_25197__$1 = (function (){var statearr_25222 = state_25197;
(statearr_25222[(7)] = inst_25163__$1);

return statearr_25222;
})();
if(inst_25163__$1){
var statearr_25223_25255 = state_25197__$1;
(statearr_25223_25255[(1)] = (14));

} else {
var statearr_25224_25256 = state_25197__$1;
(statearr_25224_25256[(1)] = (15));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25198 === (9))){
var inst_25185 = (state_25197[(2)]);
var inst_25186 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_25197__$1 = (function (){var statearr_25225 = state_25197;
(statearr_25225[(15)] = inst_25185);

return statearr_25225;
})();
if(cljs.core.truth_(inst_25186)){
var statearr_25226_25257 = state_25197__$1;
(statearr_25226_25257[(1)] = (21));

} else {
var statearr_25227_25258 = state_25197__$1;
(statearr_25227_25258[(1)] = (22));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25198 === (5))){
var inst_25141 = cljs.core.async.close_BANG_(out);
var state_25197__$1 = state_25197;
var statearr_25228_25259 = state_25197__$1;
(statearr_25228_25259[(2)] = inst_25141);

(statearr_25228_25259[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25198 === (14))){
var inst_25163 = (state_25197[(7)]);
var inst_25165 = cljs.core.chunked_seq_QMARK_(inst_25163);
var state_25197__$1 = state_25197;
if(inst_25165){
var statearr_25229_25260 = state_25197__$1;
(statearr_25229_25260[(1)] = (17));

} else {
var statearr_25230_25261 = state_25197__$1;
(statearr_25230_25261[(1)] = (18));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25198 === (16))){
var inst_25181 = (state_25197[(2)]);
var state_25197__$1 = state_25197;
var statearr_25231_25262 = state_25197__$1;
(statearr_25231_25262[(2)] = inst_25181);

(statearr_25231_25262[(1)] = (12));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25198 === (10))){
var inst_25152 = (state_25197[(8)]);
var inst_25150 = (state_25197[(10)]);
var inst_25157 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25150,inst_25152);
var state_25197__$1 = state_25197;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25197__$1,(13),out,inst_25157);
} else {
if((state_val_25198 === (18))){
var inst_25163 = (state_25197[(7)]);
var inst_25172 = cljs.core.first(inst_25163);
var state_25197__$1 = state_25197;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25197__$1,(20),out,inst_25172);
} else {
if((state_val_25198 === (8))){
var inst_25152 = (state_25197[(8)]);
var inst_25151 = (state_25197[(12)]);
var inst_25154 = (inst_25152 < inst_25151);
var inst_25155 = inst_25154;
var state_25197__$1 = state_25197;
if(cljs.core.truth_(inst_25155)){
var statearr_25232_25263 = state_25197__$1;
(statearr_25232_25263[(1)] = (10));

} else {
var statearr_25233_25264 = state_25197__$1;
(statearr_25233_25264[(1)] = (11));

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
var statearr_25237 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25237[(0)] = state_machine__5839__auto__);

(statearr_25237[(1)] = (1));

return statearr_25237;
});
var state_machine__5839__auto____1 = (function (state_25197){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_25197);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e25238){if((e25238 instanceof Object)){
var ex__5842__auto__ = e25238;
var statearr_25239_25265 = state_25197;
(statearr_25239_25265[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25197);

return cljs.core.constant$keyword$41;
} else {
throw e25238;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__25266 = state_25197;
state_25197 = G__25266;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_25197){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_25197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto__))
})();
var state__5855__auto__ = (function (){var statearr_25240 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_25240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto__);

return statearr_25240;
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
var c__5853__auto___25371 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___25371,out){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___25371,out){
return (function (state_25346){
var state_val_25347 = (state_25346[(1)]);
if((state_val_25347 === (7))){
var inst_25341 = (state_25346[(2)]);
var state_25346__$1 = state_25346;
var statearr_25348_25372 = state_25346__$1;
(statearr_25348_25372[(2)] = inst_25341);

(statearr_25348_25372[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25347 === (1))){
var inst_25323 = null;
var state_25346__$1 = (function (){var statearr_25349 = state_25346;
(statearr_25349[(7)] = inst_25323);

return statearr_25349;
})();
var statearr_25350_25373 = state_25346__$1;
(statearr_25350_25373[(2)] = null);

(statearr_25350_25373[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25347 === (4))){
var inst_25326 = (state_25346[(8)]);
var inst_25326__$1 = (state_25346[(2)]);
var inst_25327 = (inst_25326__$1 == null);
var inst_25328 = cljs.core.not(inst_25327);
var state_25346__$1 = (function (){var statearr_25351 = state_25346;
(statearr_25351[(8)] = inst_25326__$1);

return statearr_25351;
})();
if(inst_25328){
var statearr_25352_25374 = state_25346__$1;
(statearr_25352_25374[(1)] = (5));

} else {
var statearr_25353_25375 = state_25346__$1;
(statearr_25353_25375[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25347 === (6))){
var state_25346__$1 = state_25346;
var statearr_25354_25376 = state_25346__$1;
(statearr_25354_25376[(2)] = null);

(statearr_25354_25376[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25347 === (3))){
var inst_25343 = (state_25346[(2)]);
var inst_25344 = cljs.core.async.close_BANG_(out);
var state_25346__$1 = (function (){var statearr_25355 = state_25346;
(statearr_25355[(9)] = inst_25343);

return statearr_25355;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25346__$1,inst_25344);
} else {
if((state_val_25347 === (2))){
var state_25346__$1 = state_25346;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25346__$1,(4),ch);
} else {
if((state_val_25347 === (11))){
var inst_25326 = (state_25346[(8)]);
var inst_25335 = (state_25346[(2)]);
var inst_25323 = inst_25326;
var state_25346__$1 = (function (){var statearr_25356 = state_25346;
(statearr_25356[(10)] = inst_25335);

(statearr_25356[(7)] = inst_25323);

return statearr_25356;
})();
var statearr_25357_25377 = state_25346__$1;
(statearr_25357_25377[(2)] = null);

(statearr_25357_25377[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25347 === (9))){
var inst_25326 = (state_25346[(8)]);
var state_25346__$1 = state_25346;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25346__$1,(11),out,inst_25326);
} else {
if((state_val_25347 === (5))){
var inst_25326 = (state_25346[(8)]);
var inst_25323 = (state_25346[(7)]);
var inst_25330 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25326,inst_25323);
var state_25346__$1 = state_25346;
if(inst_25330){
var statearr_25359_25378 = state_25346__$1;
(statearr_25359_25378[(1)] = (8));

} else {
var statearr_25360_25379 = state_25346__$1;
(statearr_25360_25379[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25347 === (10))){
var inst_25338 = (state_25346[(2)]);
var state_25346__$1 = state_25346;
var statearr_25361_25380 = state_25346__$1;
(statearr_25361_25380[(2)] = inst_25338);

(statearr_25361_25380[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25347 === (8))){
var inst_25323 = (state_25346[(7)]);
var tmp25358 = inst_25323;
var inst_25323__$1 = tmp25358;
var state_25346__$1 = (function (){var statearr_25362 = state_25346;
(statearr_25362[(7)] = inst_25323__$1);

return statearr_25362;
})();
var statearr_25363_25381 = state_25346__$1;
(statearr_25363_25381[(2)] = null);

(statearr_25363_25381[(1)] = (2));


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
});})(c__5853__auto___25371,out))
;
return ((function (switch__5838__auto__,c__5853__auto___25371,out){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_25367 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25367[(0)] = state_machine__5839__auto__);

(statearr_25367[(1)] = (1));

return statearr_25367;
});
var state_machine__5839__auto____1 = (function (state_25346){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_25346);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e25368){if((e25368 instanceof Object)){
var ex__5842__auto__ = e25368;
var statearr_25369_25382 = state_25346;
(statearr_25369_25382[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25346);

return cljs.core.constant$keyword$41;
} else {
throw e25368;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__25383 = state_25346;
state_25346 = G__25383;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_25346){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_25346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___25371,out))
})();
var state__5855__auto__ = (function (){var statearr_25370 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_25370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___25371);

return statearr_25370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___25371,out))
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
var c__5853__auto___25521 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___25521,out){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___25521,out){
return (function (state_25491){
var state_val_25492 = (state_25491[(1)]);
if((state_val_25492 === (7))){
var inst_25487 = (state_25491[(2)]);
var state_25491__$1 = state_25491;
var statearr_25493_25522 = state_25491__$1;
(statearr_25493_25522[(2)] = inst_25487);

(statearr_25493_25522[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25492 === (1))){
var inst_25454 = (new Array(n));
var inst_25455 = inst_25454;
var inst_25456 = (0);
var state_25491__$1 = (function (){var statearr_25494 = state_25491;
(statearr_25494[(7)] = inst_25456);

(statearr_25494[(8)] = inst_25455);

return statearr_25494;
})();
var statearr_25495_25523 = state_25491__$1;
(statearr_25495_25523[(2)] = null);

(statearr_25495_25523[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25492 === (4))){
var inst_25459 = (state_25491[(9)]);
var inst_25459__$1 = (state_25491[(2)]);
var inst_25460 = (inst_25459__$1 == null);
var inst_25461 = cljs.core.not(inst_25460);
var state_25491__$1 = (function (){var statearr_25496 = state_25491;
(statearr_25496[(9)] = inst_25459__$1);

return statearr_25496;
})();
if(inst_25461){
var statearr_25497_25524 = state_25491__$1;
(statearr_25497_25524[(1)] = (5));

} else {
var statearr_25498_25525 = state_25491__$1;
(statearr_25498_25525[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25492 === (15))){
var inst_25481 = (state_25491[(2)]);
var state_25491__$1 = state_25491;
var statearr_25499_25526 = state_25491__$1;
(statearr_25499_25526[(2)] = inst_25481);

(statearr_25499_25526[(1)] = (14));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25492 === (13))){
var state_25491__$1 = state_25491;
var statearr_25500_25527 = state_25491__$1;
(statearr_25500_25527[(2)] = null);

(statearr_25500_25527[(1)] = (14));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25492 === (6))){
var inst_25456 = (state_25491[(7)]);
var inst_25477 = (inst_25456 > (0));
var state_25491__$1 = state_25491;
if(cljs.core.truth_(inst_25477)){
var statearr_25501_25528 = state_25491__$1;
(statearr_25501_25528[(1)] = (12));

} else {
var statearr_25502_25529 = state_25491__$1;
(statearr_25502_25529[(1)] = (13));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25492 === (3))){
var inst_25489 = (state_25491[(2)]);
var state_25491__$1 = state_25491;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25491__$1,inst_25489);
} else {
if((state_val_25492 === (12))){
var inst_25455 = (state_25491[(8)]);
var inst_25479 = cljs.core.vec(inst_25455);
var state_25491__$1 = state_25491;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25491__$1,(15),out,inst_25479);
} else {
if((state_val_25492 === (2))){
var state_25491__$1 = state_25491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25491__$1,(4),ch);
} else {
if((state_val_25492 === (11))){
var inst_25471 = (state_25491[(2)]);
var inst_25472 = (new Array(n));
var inst_25455 = inst_25472;
var inst_25456 = (0);
var state_25491__$1 = (function (){var statearr_25503 = state_25491;
(statearr_25503[(10)] = inst_25471);

(statearr_25503[(7)] = inst_25456);

(statearr_25503[(8)] = inst_25455);

return statearr_25503;
})();
var statearr_25504_25530 = state_25491__$1;
(statearr_25504_25530[(2)] = null);

(statearr_25504_25530[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25492 === (9))){
var inst_25455 = (state_25491[(8)]);
var inst_25469 = cljs.core.vec(inst_25455);
var state_25491__$1 = state_25491;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25491__$1,(11),out,inst_25469);
} else {
if((state_val_25492 === (5))){
var inst_25459 = (state_25491[(9)]);
var inst_25456 = (state_25491[(7)]);
var inst_25455 = (state_25491[(8)]);
var inst_25464 = (state_25491[(11)]);
var inst_25463 = (inst_25455[inst_25456] = inst_25459);
var inst_25464__$1 = (inst_25456 + (1));
var inst_25465 = (inst_25464__$1 < n);
var state_25491__$1 = (function (){var statearr_25505 = state_25491;
(statearr_25505[(12)] = inst_25463);

(statearr_25505[(11)] = inst_25464__$1);

return statearr_25505;
})();
if(cljs.core.truth_(inst_25465)){
var statearr_25506_25531 = state_25491__$1;
(statearr_25506_25531[(1)] = (8));

} else {
var statearr_25507_25532 = state_25491__$1;
(statearr_25507_25532[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25492 === (14))){
var inst_25484 = (state_25491[(2)]);
var inst_25485 = cljs.core.async.close_BANG_(out);
var state_25491__$1 = (function (){var statearr_25509 = state_25491;
(statearr_25509[(13)] = inst_25484);

return statearr_25509;
})();
var statearr_25510_25533 = state_25491__$1;
(statearr_25510_25533[(2)] = inst_25485);

(statearr_25510_25533[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25492 === (10))){
var inst_25475 = (state_25491[(2)]);
var state_25491__$1 = state_25491;
var statearr_25511_25534 = state_25491__$1;
(statearr_25511_25534[(2)] = inst_25475);

(statearr_25511_25534[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25492 === (8))){
var inst_25455 = (state_25491[(8)]);
var inst_25464 = (state_25491[(11)]);
var tmp25508 = inst_25455;
var inst_25455__$1 = tmp25508;
var inst_25456 = inst_25464;
var state_25491__$1 = (function (){var statearr_25512 = state_25491;
(statearr_25512[(7)] = inst_25456);

(statearr_25512[(8)] = inst_25455__$1);

return statearr_25512;
})();
var statearr_25513_25535 = state_25491__$1;
(statearr_25513_25535[(2)] = null);

(statearr_25513_25535[(1)] = (2));


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
});})(c__5853__auto___25521,out))
;
return ((function (switch__5838__auto__,c__5853__auto___25521,out){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_25517 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25517[(0)] = state_machine__5839__auto__);

(statearr_25517[(1)] = (1));

return statearr_25517;
});
var state_machine__5839__auto____1 = (function (state_25491){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_25491);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e25518){if((e25518 instanceof Object)){
var ex__5842__auto__ = e25518;
var statearr_25519_25536 = state_25491;
(statearr_25519_25536[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25491);

return cljs.core.constant$keyword$41;
} else {
throw e25518;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__25537 = state_25491;
state_25491 = G__25537;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_25491){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_25491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___25521,out))
})();
var state__5855__auto__ = (function (){var statearr_25520 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_25520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___25521);

return statearr_25520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___25521,out))
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
var c__5853__auto___25685 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___25685,out){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___25685,out){
return (function (state_25654){
var state_val_25655 = (state_25654[(1)]);
if((state_val_25655 === (7))){
var inst_25650 = (state_25654[(2)]);
var state_25654__$1 = state_25654;
var statearr_25656_25686 = state_25654__$1;
(statearr_25656_25686[(2)] = inst_25650);

(statearr_25656_25686[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25655 === (1))){
var inst_25613 = [];
var inst_25614 = inst_25613;
var inst_25615 = cljs.core.constant$keyword$56;
var state_25654__$1 = (function (){var statearr_25657 = state_25654;
(statearr_25657[(7)] = inst_25615);

(statearr_25657[(8)] = inst_25614);

return statearr_25657;
})();
var statearr_25658_25687 = state_25654__$1;
(statearr_25658_25687[(2)] = null);

(statearr_25658_25687[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25655 === (4))){
var inst_25618 = (state_25654[(9)]);
var inst_25618__$1 = (state_25654[(2)]);
var inst_25619 = (inst_25618__$1 == null);
var inst_25620 = cljs.core.not(inst_25619);
var state_25654__$1 = (function (){var statearr_25659 = state_25654;
(statearr_25659[(9)] = inst_25618__$1);

return statearr_25659;
})();
if(inst_25620){
var statearr_25660_25688 = state_25654__$1;
(statearr_25660_25688[(1)] = (5));

} else {
var statearr_25661_25689 = state_25654__$1;
(statearr_25661_25689[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25655 === (15))){
var inst_25644 = (state_25654[(2)]);
var state_25654__$1 = state_25654;
var statearr_25662_25690 = state_25654__$1;
(statearr_25662_25690[(2)] = inst_25644);

(statearr_25662_25690[(1)] = (14));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25655 === (13))){
var state_25654__$1 = state_25654;
var statearr_25663_25691 = state_25654__$1;
(statearr_25663_25691[(2)] = null);

(statearr_25663_25691[(1)] = (14));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25655 === (6))){
var inst_25614 = (state_25654[(8)]);
var inst_25639 = inst_25614.length;
var inst_25640 = (inst_25639 > (0));
var state_25654__$1 = state_25654;
if(cljs.core.truth_(inst_25640)){
var statearr_25664_25692 = state_25654__$1;
(statearr_25664_25692[(1)] = (12));

} else {
var statearr_25665_25693 = state_25654__$1;
(statearr_25665_25693[(1)] = (13));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25655 === (3))){
var inst_25652 = (state_25654[(2)]);
var state_25654__$1 = state_25654;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25654__$1,inst_25652);
} else {
if((state_val_25655 === (12))){
var inst_25614 = (state_25654[(8)]);
var inst_25642 = cljs.core.vec(inst_25614);
var state_25654__$1 = state_25654;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25654__$1,(15),out,inst_25642);
} else {
if((state_val_25655 === (2))){
var state_25654__$1 = state_25654;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25654__$1,(4),ch);
} else {
if((state_val_25655 === (11))){
var inst_25622 = (state_25654[(10)]);
var inst_25618 = (state_25654[(9)]);
var inst_25632 = (state_25654[(2)]);
var inst_25633 = [];
var inst_25634 = inst_25633.push(inst_25618);
var inst_25614 = inst_25633;
var inst_25615 = inst_25622;
var state_25654__$1 = (function (){var statearr_25666 = state_25654;
(statearr_25666[(11)] = inst_25634);

(statearr_25666[(12)] = inst_25632);

(statearr_25666[(7)] = inst_25615);

(statearr_25666[(8)] = inst_25614);

return statearr_25666;
})();
var statearr_25667_25694 = state_25654__$1;
(statearr_25667_25694[(2)] = null);

(statearr_25667_25694[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25655 === (9))){
var inst_25614 = (state_25654[(8)]);
var inst_25630 = cljs.core.vec(inst_25614);
var state_25654__$1 = state_25654;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25654__$1,(11),out,inst_25630);
} else {
if((state_val_25655 === (5))){
var inst_25622 = (state_25654[(10)]);
var inst_25615 = (state_25654[(7)]);
var inst_25618 = (state_25654[(9)]);
var inst_25622__$1 = (function (){var G__25668 = inst_25618;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25668) : f.call(null,G__25668));
})();
var inst_25623 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25622__$1,inst_25615);
var inst_25624 = cljs.core.keyword_identical_QMARK_(inst_25615,cljs.core.constant$keyword$56);
var inst_25625 = (inst_25623) || (inst_25624);
var state_25654__$1 = (function (){var statearr_25669 = state_25654;
(statearr_25669[(10)] = inst_25622__$1);

return statearr_25669;
})();
if(cljs.core.truth_(inst_25625)){
var statearr_25670_25695 = state_25654__$1;
(statearr_25670_25695[(1)] = (8));

} else {
var statearr_25671_25696 = state_25654__$1;
(statearr_25671_25696[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25655 === (14))){
var inst_25647 = (state_25654[(2)]);
var inst_25648 = cljs.core.async.close_BANG_(out);
var state_25654__$1 = (function (){var statearr_25673 = state_25654;
(statearr_25673[(13)] = inst_25647);

return statearr_25673;
})();
var statearr_25674_25697 = state_25654__$1;
(statearr_25674_25697[(2)] = inst_25648);

(statearr_25674_25697[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25655 === (10))){
var inst_25637 = (state_25654[(2)]);
var state_25654__$1 = state_25654;
var statearr_25675_25698 = state_25654__$1;
(statearr_25675_25698[(2)] = inst_25637);

(statearr_25675_25698[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25655 === (8))){
var inst_25622 = (state_25654[(10)]);
var inst_25618 = (state_25654[(9)]);
var inst_25614 = (state_25654[(8)]);
var inst_25627 = inst_25614.push(inst_25618);
var tmp25672 = inst_25614;
var inst_25614__$1 = tmp25672;
var inst_25615 = inst_25622;
var state_25654__$1 = (function (){var statearr_25676 = state_25654;
(statearr_25676[(7)] = inst_25615);

(statearr_25676[(14)] = inst_25627);

(statearr_25676[(8)] = inst_25614__$1);

return statearr_25676;
})();
var statearr_25677_25699 = state_25654__$1;
(statearr_25677_25699[(2)] = null);

(statearr_25677_25699[(1)] = (2));


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
});})(c__5853__auto___25685,out))
;
return ((function (switch__5838__auto__,c__5853__auto___25685,out){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_25681 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25681[(0)] = state_machine__5839__auto__);

(statearr_25681[(1)] = (1));

return statearr_25681;
});
var state_machine__5839__auto____1 = (function (state_25654){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_25654);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e25682){if((e25682 instanceof Object)){
var ex__5842__auto__ = e25682;
var statearr_25683_25700 = state_25654;
(statearr_25683_25700[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25654);

return cljs.core.constant$keyword$41;
} else {
throw e25682;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__25701 = state_25654;
state_25654 = G__25701;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_25654){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_25654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___25685,out))
})();
var state__5855__auto__ = (function (){var statearr_25684 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_25684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___25685);

return statearr_25684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___25685,out))
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
