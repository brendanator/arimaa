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
if(typeof cljs.core.async.t23929 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23929 = (function (f,fn_handler,meta23930){
this.f = f;
this.fn_handler = fn_handler;
this.meta23930 = meta23930;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23929.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23929.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t23929.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t23929.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23931){
var self__ = this;
var _23931__$1 = this;
return self__.meta23930;
});

cljs.core.async.t23929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23931,meta23930__$1){
var self__ = this;
var _23931__$1 = this;
return (new cljs.core.async.t23929(self__.f,self__.fn_handler,meta23930__$1));
});

cljs.core.async.t23929.cljs$lang$type = true;

cljs.core.async.t23929.cljs$lang$ctorStr = "cljs.core.async/t23929";

cljs.core.async.t23929.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23929");
});

cljs.core.async.__GT_t23929 = (function __GT_t23929(f__$1,fn_handler__$1,meta23930){
return (new cljs.core.async.t23929(f__$1,fn_handler__$1,meta23930));
});

}

return (new cljs.core.async.t23929(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,20,cljs.core.constant$keyword$9,16,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,13,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
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
var G__23933 = buff;
if(G__23933){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__23933.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__23933.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23933);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23933);
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
var val_23950 = (function (){var G__23947 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23947) : cljs.core.deref.call(null,G__23947));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__23948_23951 = val_23950;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23948_23951) : fn1.call(null,G__23948_23951));
} else {
cljs.core.async.impl.dispatch.run(((function (val_23950,ret){
return (function (){
var G__23949 = val_23950;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23949) : fn1.call(null,G__23949));
});})(val_23950,ret))
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
var G__23960 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23960) : cljs.core.deref.call(null,G__23960));
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
var ret = (function (){var G__23961 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23961) : cljs.core.deref.call(null,G__23961));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__23962_23964 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23962_23964) : fn1.call(null,G__23962_23964));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__23963 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23963) : fn1.call(null,G__23963));
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
var n__4517__auto___23965 = n;
var x_23966 = (0);
while(true){
if((x_23966 < n__4517__auto___23965)){
(a[x_23966] = (0));

var G__23967 = (x_23966 + (1));
x_23966 = G__23967;
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

var G__23968 = (i + (1));
i = G__23968;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__23976 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23976) : cljs.core.atom.call(null,G__23976));
})();
if(typeof cljs.core.async.t23977 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23977 = (function (flag,alt_flag,meta23978){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23978 = meta23978;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23977.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23977.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23980 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23980) : cljs.core.deref.call(null,G__23980));
});})(flag))
;

cljs.core.async.t23977.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23981_23983 = self__.flag;
var G__23982_23984 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23981_23983,G__23982_23984) : cljs.core.reset_BANG_.call(null,G__23981_23983,G__23982_23984));

return true;
});})(flag))
;

cljs.core.async.t23977.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23979){
var self__ = this;
var _23979__$1 = this;
return self__.meta23978;
});})(flag))
;

cljs.core.async.t23977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23979,meta23978__$1){
var self__ = this;
var _23979__$1 = this;
return (new cljs.core.async.t23977(self__.flag,self__.alt_flag,meta23978__$1));
});})(flag))
;

cljs.core.async.t23977.cljs$lang$type = true;

cljs.core.async.t23977.cljs$lang$ctorStr = "cljs.core.async/t23977";

cljs.core.async.t23977.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23977");
});})(flag))
;

cljs.core.async.__GT_t23977 = ((function (flag){
return (function __GT_t23977(flag__$1,alt_flag__$1,meta23978){
return (new cljs.core.async.t23977(flag__$1,alt_flag__$1,meta23978));
});})(flag))
;

}

return (new cljs.core.async.t23977(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,15,cljs.core.constant$keyword$9,146,cljs.core.constant$keyword$10,5,cljs.core.constant$keyword$11,141,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t23988 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23988 = (function (cb,flag,alt_handler,meta23989){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23989 = meta23989;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23988.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23988.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t23988.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t23988.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23990){
var self__ = this;
var _23990__$1 = this;
return self__.meta23989;
});

cljs.core.async.t23988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23990,meta23989__$1){
var self__ = this;
var _23990__$1 = this;
return (new cljs.core.async.t23988(self__.cb,self__.flag,self__.alt_handler,meta23989__$1));
});

cljs.core.async.t23988.cljs$lang$type = true;

cljs.core.async.t23988.cljs$lang$ctorStr = "cljs.core.async/t23988";

cljs.core.async.t23988.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23988");
});

cljs.core.async.__GT_t23988 = (function __GT_t23988(cb__$1,flag__$1,alt_handler__$1,meta23989){
return (new cljs.core.async.t23988(cb__$1,flag__$1,alt_handler__$1,meta23989));
});

}

return (new cljs.core.async.t23988(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,11,cljs.core.constant$keyword$9,154,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,149,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.constant$keyword$92.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__23998 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__23998) : port.call(null,G__23998));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__23999 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__23999) : port.call(null,G__23999));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23991_SHARP_){
var G__24000 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23991_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24000) : fret.call(null,G__24000));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23992_SHARP_){
var G__24001 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23992_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24001) : fret.call(null,G__24001));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24002 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24002) : cljs.core.deref.call(null,G__24002));
})(),(function (){var or__3630__auto__ = wport;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24003 = (i + (1));
i = G__24003;
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
var alts_BANG___delegate = function (ports,p__24004){
var map__24006 = p__24004;
var map__24006__$1 = ((cljs.core.seq_QMARK_(map__24006))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24006):map__24006);
var opts = map__24006__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__24004 = null;
if (arguments.length > 1) {
  p__24004 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__24004);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24007){
var ports = cljs.core.first(arglist__24007);
var p__24004 = cljs.core.rest(arglist__24007);
return alts_BANG___delegate(ports,p__24004);
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
var c__5853__auto___24105 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___24105){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___24105){
return (function (state_24081){
var state_val_24082 = (state_24081[(1)]);
if((state_val_24082 === (7))){
var inst_24077 = (state_24081[(2)]);
var state_24081__$1 = state_24081;
var statearr_24083_24106 = state_24081__$1;
(statearr_24083_24106[(2)] = inst_24077);

(statearr_24083_24106[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24082 === (1))){
var state_24081__$1 = state_24081;
var statearr_24084_24107 = state_24081__$1;
(statearr_24084_24107[(2)] = null);

(statearr_24084_24107[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24082 === (4))){
var inst_24060 = (state_24081[(7)]);
var inst_24060__$1 = (state_24081[(2)]);
var inst_24061 = (inst_24060__$1 == null);
var state_24081__$1 = (function (){var statearr_24085 = state_24081;
(statearr_24085[(7)] = inst_24060__$1);

return statearr_24085;
})();
if(cljs.core.truth_(inst_24061)){
var statearr_24086_24108 = state_24081__$1;
(statearr_24086_24108[(1)] = (5));

} else {
var statearr_24087_24109 = state_24081__$1;
(statearr_24087_24109[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24082 === (13))){
var state_24081__$1 = state_24081;
var statearr_24088_24110 = state_24081__$1;
(statearr_24088_24110[(2)] = null);

(statearr_24088_24110[(1)] = (14));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24082 === (6))){
var inst_24060 = (state_24081[(7)]);
var state_24081__$1 = state_24081;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24081__$1,(11),to,inst_24060);
} else {
if((state_val_24082 === (3))){
var inst_24079 = (state_24081[(2)]);
var state_24081__$1 = state_24081;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24081__$1,inst_24079);
} else {
if((state_val_24082 === (12))){
var state_24081__$1 = state_24081;
var statearr_24089_24111 = state_24081__$1;
(statearr_24089_24111[(2)] = null);

(statearr_24089_24111[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24082 === (2))){
var state_24081__$1 = state_24081;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24081__$1,(4),from);
} else {
if((state_val_24082 === (11))){
var inst_24070 = (state_24081[(2)]);
var state_24081__$1 = state_24081;
if(cljs.core.truth_(inst_24070)){
var statearr_24090_24112 = state_24081__$1;
(statearr_24090_24112[(1)] = (12));

} else {
var statearr_24091_24113 = state_24081__$1;
(statearr_24091_24113[(1)] = (13));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24082 === (9))){
var state_24081__$1 = state_24081;
var statearr_24092_24114 = state_24081__$1;
(statearr_24092_24114[(2)] = null);

(statearr_24092_24114[(1)] = (10));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24082 === (5))){
var state_24081__$1 = state_24081;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24093_24115 = state_24081__$1;
(statearr_24093_24115[(1)] = (8));

} else {
var statearr_24094_24116 = state_24081__$1;
(statearr_24094_24116[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24082 === (14))){
var inst_24075 = (state_24081[(2)]);
var state_24081__$1 = state_24081;
var statearr_24095_24117 = state_24081__$1;
(statearr_24095_24117[(2)] = inst_24075);

(statearr_24095_24117[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24082 === (10))){
var inst_24067 = (state_24081[(2)]);
var state_24081__$1 = state_24081;
var statearr_24096_24118 = state_24081__$1;
(statearr_24096_24118[(2)] = inst_24067);

(statearr_24096_24118[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24082 === (8))){
var inst_24064 = cljs.core.async.close_BANG_(to);
var state_24081__$1 = state_24081;
var statearr_24097_24119 = state_24081__$1;
(statearr_24097_24119[(2)] = inst_24064);

(statearr_24097_24119[(1)] = (10));


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
});})(c__5853__auto___24105))
;
return ((function (switch__5838__auto__,c__5853__auto___24105){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_24101 = [null,null,null,null,null,null,null,null];
(statearr_24101[(0)] = state_machine__5839__auto__);

(statearr_24101[(1)] = (1));

return statearr_24101;
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
}catch (e24102){if((e24102 instanceof Object)){
var ex__5842__auto__ = e24102;
var statearr_24103_24120 = state_24081;
(statearr_24103_24120[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24081);

return cljs.core.constant$keyword$41;
} else {
throw e24102;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__24121 = state_24081;
state_24081 = G__24121;
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
;})(switch__5838__auto__,c__5853__auto___24105))
})();
var state__5855__auto__ = (function (){var statearr_24104 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_24104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___24105);

return statearr_24104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___24105))
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
return (function (p__24307){
var vec__24308 = p__24307;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24308,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24308,(1),null);
var job = vec__24308;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__5853__auto___24492 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___24492,res,vec__24308,v,p,job,jobs,results){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___24492,res,vec__24308,v,p,job,jobs,results){
return (function (state_24313){
var state_val_24314 = (state_24313[(1)]);
if((state_val_24314 === (2))){
var inst_24310 = (state_24313[(2)]);
var inst_24311 = cljs.core.async.close_BANG_(res);
var state_24313__$1 = (function (){var statearr_24315 = state_24313;
(statearr_24315[(7)] = inst_24310);

return statearr_24315;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24313__$1,inst_24311);
} else {
if((state_val_24314 === (1))){
var state_24313__$1 = state_24313;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24313__$1,(2),res,v);
} else {
return null;
}
}
});})(c__5853__auto___24492,res,vec__24308,v,p,job,jobs,results))
;
return ((function (switch__5838__auto__,c__5853__auto___24492,res,vec__24308,v,p,job,jobs,results){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_24319 = [null,null,null,null,null,null,null,null];
(statearr_24319[(0)] = state_machine__5839__auto__);

(statearr_24319[(1)] = (1));

return statearr_24319;
});
var state_machine__5839__auto____1 = (function (state_24313){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_24313);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e24320){if((e24320 instanceof Object)){
var ex__5842__auto__ = e24320;
var statearr_24321_24493 = state_24313;
(statearr_24321_24493[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24313);

return cljs.core.constant$keyword$41;
} else {
throw e24320;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__24494 = state_24313;
state_24313 = G__24494;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_24313){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_24313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___24492,res,vec__24308,v,p,job,jobs,results))
})();
var state__5855__auto__ = (function (){var statearr_24322 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_24322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___24492);

return statearr_24322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___24492,res,vec__24308,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24323){
var vec__24324 = p__24323;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24324,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24324,(1),null);
var job = vec__24324;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__24325_24495 = v;
var G__24326_24496 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__24325_24495,G__24326_24496) : xf.call(null,G__24325_24495,G__24326_24496));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4517__auto___24497 = n;
var __24498 = (0);
while(true){
if((__24498 < n__4517__auto___24497)){
var G__24327_24499 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24327_24499) {
case "async":
var c__5853__auto___24501 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24498,c__5853__auto___24501,G__24327_24499,n__4517__auto___24497,jobs,results,process,async){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (__24498,c__5853__auto___24501,G__24327_24499,n__4517__auto___24497,jobs,results,process,async){
return (function (state_24340){
var state_val_24341 = (state_24340[(1)]);
if((state_val_24341 === (7))){
var inst_24336 = (state_24340[(2)]);
var state_24340__$1 = state_24340;
var statearr_24342_24502 = state_24340__$1;
(statearr_24342_24502[(2)] = inst_24336);

(statearr_24342_24502[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24341 === (6))){
var state_24340__$1 = state_24340;
var statearr_24343_24503 = state_24340__$1;
(statearr_24343_24503[(2)] = null);

(statearr_24343_24503[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24341 === (5))){
var state_24340__$1 = state_24340;
var statearr_24344_24504 = state_24340__$1;
(statearr_24344_24504[(2)] = null);

(statearr_24344_24504[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24341 === (4))){
var inst_24330 = (state_24340[(2)]);
var inst_24331 = async(inst_24330);
var state_24340__$1 = state_24340;
if(cljs.core.truth_(inst_24331)){
var statearr_24345_24505 = state_24340__$1;
(statearr_24345_24505[(1)] = (5));

} else {
var statearr_24346_24506 = state_24340__$1;
(statearr_24346_24506[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24341 === (3))){
var inst_24338 = (state_24340[(2)]);
var state_24340__$1 = state_24340;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24340__$1,inst_24338);
} else {
if((state_val_24341 === (2))){
var state_24340__$1 = state_24340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24340__$1,(4),jobs);
} else {
if((state_val_24341 === (1))){
var state_24340__$1 = state_24340;
var statearr_24347_24507 = state_24340__$1;
(statearr_24347_24507[(2)] = null);

(statearr_24347_24507[(1)] = (2));


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
});})(__24498,c__5853__auto___24501,G__24327_24499,n__4517__auto___24497,jobs,results,process,async))
;
return ((function (__24498,switch__5838__auto__,c__5853__auto___24501,G__24327_24499,n__4517__auto___24497,jobs,results,process,async){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_24351 = [null,null,null,null,null,null,null];
(statearr_24351[(0)] = state_machine__5839__auto__);

(statearr_24351[(1)] = (1));

return statearr_24351;
});
var state_machine__5839__auto____1 = (function (state_24340){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_24340);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e24352){if((e24352 instanceof Object)){
var ex__5842__auto__ = e24352;
var statearr_24353_24508 = state_24340;
(statearr_24353_24508[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24340);

return cljs.core.constant$keyword$41;
} else {
throw e24352;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__24509 = state_24340;
state_24340 = G__24509;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_24340){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_24340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(__24498,switch__5838__auto__,c__5853__auto___24501,G__24327_24499,n__4517__auto___24497,jobs,results,process,async))
})();
var state__5855__auto__ = (function (){var statearr_24354 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_24354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___24501);

return statearr_24354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(__24498,c__5853__auto___24501,G__24327_24499,n__4517__auto___24497,jobs,results,process,async))
);


break;
case "compute":
var c__5853__auto___24510 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24498,c__5853__auto___24510,G__24327_24499,n__4517__auto___24497,jobs,results,process,async){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (__24498,c__5853__auto___24510,G__24327_24499,n__4517__auto___24497,jobs,results,process,async){
return (function (state_24367){
var state_val_24368 = (state_24367[(1)]);
if((state_val_24368 === (7))){
var inst_24363 = (state_24367[(2)]);
var state_24367__$1 = state_24367;
var statearr_24369_24511 = state_24367__$1;
(statearr_24369_24511[(2)] = inst_24363);

(statearr_24369_24511[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24368 === (6))){
var state_24367__$1 = state_24367;
var statearr_24370_24512 = state_24367__$1;
(statearr_24370_24512[(2)] = null);

(statearr_24370_24512[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24368 === (5))){
var state_24367__$1 = state_24367;
var statearr_24371_24513 = state_24367__$1;
(statearr_24371_24513[(2)] = null);

(statearr_24371_24513[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24368 === (4))){
var inst_24357 = (state_24367[(2)]);
var inst_24358 = process(inst_24357);
var state_24367__$1 = state_24367;
if(cljs.core.truth_(inst_24358)){
var statearr_24372_24514 = state_24367__$1;
(statearr_24372_24514[(1)] = (5));

} else {
var statearr_24373_24515 = state_24367__$1;
(statearr_24373_24515[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24368 === (3))){
var inst_24365 = (state_24367[(2)]);
var state_24367__$1 = state_24367;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24367__$1,inst_24365);
} else {
if((state_val_24368 === (2))){
var state_24367__$1 = state_24367;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24367__$1,(4),jobs);
} else {
if((state_val_24368 === (1))){
var state_24367__$1 = state_24367;
var statearr_24374_24516 = state_24367__$1;
(statearr_24374_24516[(2)] = null);

(statearr_24374_24516[(1)] = (2));


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
});})(__24498,c__5853__auto___24510,G__24327_24499,n__4517__auto___24497,jobs,results,process,async))
;
return ((function (__24498,switch__5838__auto__,c__5853__auto___24510,G__24327_24499,n__4517__auto___24497,jobs,results,process,async){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_24378 = [null,null,null,null,null,null,null];
(statearr_24378[(0)] = state_machine__5839__auto__);

(statearr_24378[(1)] = (1));

return statearr_24378;
});
var state_machine__5839__auto____1 = (function (state_24367){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_24367);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e24379){if((e24379 instanceof Object)){
var ex__5842__auto__ = e24379;
var statearr_24380_24517 = state_24367;
(statearr_24380_24517[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24367);

return cljs.core.constant$keyword$41;
} else {
throw e24379;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__24518 = state_24367;
state_24367 = G__24518;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_24367){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_24367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(__24498,switch__5838__auto__,c__5853__auto___24510,G__24327_24499,n__4517__auto___24497,jobs,results,process,async))
})();
var state__5855__auto__ = (function (){var statearr_24381 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_24381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___24510);

return statearr_24381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(__24498,c__5853__auto___24510,G__24327_24499,n__4517__auto___24497,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24519 = (__24498 + (1));
__24498 = G__24519;
continue;
} else {
}
break;
}

var c__5853__auto___24520 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___24520,jobs,results,process,async){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___24520,jobs,results,process,async){
return (function (state_24403){
var state_val_24404 = (state_24403[(1)]);
if((state_val_24404 === (9))){
var inst_24396 = (state_24403[(2)]);
var state_24403__$1 = (function (){var statearr_24405 = state_24403;
(statearr_24405[(7)] = inst_24396);

return statearr_24405;
})();
var statearr_24406_24521 = state_24403__$1;
(statearr_24406_24521[(2)] = null);

(statearr_24406_24521[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24404 === (8))){
var inst_24389 = (state_24403[(8)]);
var inst_24394 = (state_24403[(2)]);
var state_24403__$1 = (function (){var statearr_24407 = state_24403;
(statearr_24407[(9)] = inst_24394);

return statearr_24407;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24403__$1,(9),results,inst_24389);
} else {
if((state_val_24404 === (7))){
var inst_24399 = (state_24403[(2)]);
var state_24403__$1 = state_24403;
var statearr_24408_24522 = state_24403__$1;
(statearr_24408_24522[(2)] = inst_24399);

(statearr_24408_24522[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24404 === (6))){
var inst_24384 = (state_24403[(10)]);
var inst_24389 = (state_24403[(8)]);
var inst_24389__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_24390 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24391 = [inst_24384,inst_24389__$1];
var inst_24392 = (new cljs.core.PersistentVector(null,2,(5),inst_24390,inst_24391,null));
var state_24403__$1 = (function (){var statearr_24409 = state_24403;
(statearr_24409[(8)] = inst_24389__$1);

return statearr_24409;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24403__$1,(8),jobs,inst_24392);
} else {
if((state_val_24404 === (5))){
var inst_24387 = cljs.core.async.close_BANG_(jobs);
var state_24403__$1 = state_24403;
var statearr_24410_24523 = state_24403__$1;
(statearr_24410_24523[(2)] = inst_24387);

(statearr_24410_24523[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24404 === (4))){
var inst_24384 = (state_24403[(10)]);
var inst_24384__$1 = (state_24403[(2)]);
var inst_24385 = (inst_24384__$1 == null);
var state_24403__$1 = (function (){var statearr_24411 = state_24403;
(statearr_24411[(10)] = inst_24384__$1);

return statearr_24411;
})();
if(cljs.core.truth_(inst_24385)){
var statearr_24412_24524 = state_24403__$1;
(statearr_24412_24524[(1)] = (5));

} else {
var statearr_24413_24525 = state_24403__$1;
(statearr_24413_24525[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24404 === (3))){
var inst_24401 = (state_24403[(2)]);
var state_24403__$1 = state_24403;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24403__$1,inst_24401);
} else {
if((state_val_24404 === (2))){
var state_24403__$1 = state_24403;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24403__$1,(4),from);
} else {
if((state_val_24404 === (1))){
var state_24403__$1 = state_24403;
var statearr_24414_24526 = state_24403__$1;
(statearr_24414_24526[(2)] = null);

(statearr_24414_24526[(1)] = (2));


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
});})(c__5853__auto___24520,jobs,results,process,async))
;
return ((function (switch__5838__auto__,c__5853__auto___24520,jobs,results,process,async){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_24418 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24418[(0)] = state_machine__5839__auto__);

(statearr_24418[(1)] = (1));

return statearr_24418;
});
var state_machine__5839__auto____1 = (function (state_24403){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_24403);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e24419){if((e24419 instanceof Object)){
var ex__5842__auto__ = e24419;
var statearr_24420_24527 = state_24403;
(statearr_24420_24527[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24403);

return cljs.core.constant$keyword$41;
} else {
throw e24419;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__24528 = state_24403;
state_24403 = G__24528;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_24403){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_24403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___24520,jobs,results,process,async))
})();
var state__5855__auto__ = (function (){var statearr_24421 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_24421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___24520);

return statearr_24421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___24520,jobs,results,process,async))
);


var c__5853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto__,jobs,results,process,async){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto__,jobs,results,process,async){
return (function (state_24459){
var state_val_24460 = (state_24459[(1)]);
if((state_val_24460 === (7))){
var inst_24455 = (state_24459[(2)]);
var state_24459__$1 = state_24459;
var statearr_24461_24529 = state_24459__$1;
(statearr_24461_24529[(2)] = inst_24455);

(statearr_24461_24529[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24460 === (20))){
var state_24459__$1 = state_24459;
var statearr_24462_24530 = state_24459__$1;
(statearr_24462_24530[(2)] = null);

(statearr_24462_24530[(1)] = (21));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24460 === (1))){
var state_24459__$1 = state_24459;
var statearr_24463_24531 = state_24459__$1;
(statearr_24463_24531[(2)] = null);

(statearr_24463_24531[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24460 === (4))){
var inst_24424 = (state_24459[(7)]);
var inst_24424__$1 = (state_24459[(2)]);
var inst_24425 = (inst_24424__$1 == null);
var state_24459__$1 = (function (){var statearr_24464 = state_24459;
(statearr_24464[(7)] = inst_24424__$1);

return statearr_24464;
})();
if(cljs.core.truth_(inst_24425)){
var statearr_24465_24532 = state_24459__$1;
(statearr_24465_24532[(1)] = (5));

} else {
var statearr_24466_24533 = state_24459__$1;
(statearr_24466_24533[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24460 === (15))){
var inst_24437 = (state_24459[(8)]);
var state_24459__$1 = state_24459;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24459__$1,(18),to,inst_24437);
} else {
if((state_val_24460 === (21))){
var inst_24450 = (state_24459[(2)]);
var state_24459__$1 = state_24459;
var statearr_24467_24534 = state_24459__$1;
(statearr_24467_24534[(2)] = inst_24450);

(statearr_24467_24534[(1)] = (13));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24460 === (13))){
var inst_24452 = (state_24459[(2)]);
var state_24459__$1 = (function (){var statearr_24468 = state_24459;
(statearr_24468[(9)] = inst_24452);

return statearr_24468;
})();
var statearr_24469_24535 = state_24459__$1;
(statearr_24469_24535[(2)] = null);

(statearr_24469_24535[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24460 === (6))){
var inst_24424 = (state_24459[(7)]);
var state_24459__$1 = state_24459;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24459__$1,(11),inst_24424);
} else {
if((state_val_24460 === (17))){
var inst_24445 = (state_24459[(2)]);
var state_24459__$1 = state_24459;
if(cljs.core.truth_(inst_24445)){
var statearr_24470_24536 = state_24459__$1;
(statearr_24470_24536[(1)] = (19));

} else {
var statearr_24471_24537 = state_24459__$1;
(statearr_24471_24537[(1)] = (20));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24460 === (3))){
var inst_24457 = (state_24459[(2)]);
var state_24459__$1 = state_24459;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24459__$1,inst_24457);
} else {
if((state_val_24460 === (12))){
var inst_24434 = (state_24459[(10)]);
var state_24459__$1 = state_24459;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24459__$1,(14),inst_24434);
} else {
if((state_val_24460 === (2))){
var state_24459__$1 = state_24459;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24459__$1,(4),results);
} else {
if((state_val_24460 === (19))){
var state_24459__$1 = state_24459;
var statearr_24472_24538 = state_24459__$1;
(statearr_24472_24538[(2)] = null);

(statearr_24472_24538[(1)] = (12));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24460 === (11))){
var inst_24434 = (state_24459[(2)]);
var state_24459__$1 = (function (){var statearr_24473 = state_24459;
(statearr_24473[(10)] = inst_24434);

return statearr_24473;
})();
var statearr_24474_24539 = state_24459__$1;
(statearr_24474_24539[(2)] = null);

(statearr_24474_24539[(1)] = (12));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24460 === (9))){
var state_24459__$1 = state_24459;
var statearr_24475_24540 = state_24459__$1;
(statearr_24475_24540[(2)] = null);

(statearr_24475_24540[(1)] = (10));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24460 === (5))){
var state_24459__$1 = state_24459;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24476_24541 = state_24459__$1;
(statearr_24476_24541[(1)] = (8));

} else {
var statearr_24477_24542 = state_24459__$1;
(statearr_24477_24542[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24460 === (14))){
var inst_24439 = (state_24459[(11)]);
var inst_24437 = (state_24459[(8)]);
var inst_24437__$1 = (state_24459[(2)]);
var inst_24438 = (inst_24437__$1 == null);
var inst_24439__$1 = cljs.core.not(inst_24438);
var state_24459__$1 = (function (){var statearr_24478 = state_24459;
(statearr_24478[(11)] = inst_24439__$1);

(statearr_24478[(8)] = inst_24437__$1);

return statearr_24478;
})();
if(inst_24439__$1){
var statearr_24479_24543 = state_24459__$1;
(statearr_24479_24543[(1)] = (15));

} else {
var statearr_24480_24544 = state_24459__$1;
(statearr_24480_24544[(1)] = (16));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24460 === (16))){
var inst_24439 = (state_24459[(11)]);
var state_24459__$1 = state_24459;
var statearr_24481_24545 = state_24459__$1;
(statearr_24481_24545[(2)] = inst_24439);

(statearr_24481_24545[(1)] = (17));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24460 === (10))){
var inst_24431 = (state_24459[(2)]);
var state_24459__$1 = state_24459;
var statearr_24482_24546 = state_24459__$1;
(statearr_24482_24546[(2)] = inst_24431);

(statearr_24482_24546[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24460 === (18))){
var inst_24442 = (state_24459[(2)]);
var state_24459__$1 = state_24459;
var statearr_24483_24547 = state_24459__$1;
(statearr_24483_24547[(2)] = inst_24442);

(statearr_24483_24547[(1)] = (17));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24460 === (8))){
var inst_24428 = cljs.core.async.close_BANG_(to);
var state_24459__$1 = state_24459;
var statearr_24484_24548 = state_24459__$1;
(statearr_24484_24548[(2)] = inst_24428);

(statearr_24484_24548[(1)] = (10));


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
var statearr_24488 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24488[(0)] = state_machine__5839__auto__);

(statearr_24488[(1)] = (1));

return statearr_24488;
});
var state_machine__5839__auto____1 = (function (state_24459){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_24459);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e24489){if((e24489 instanceof Object)){
var ex__5842__auto__ = e24489;
var statearr_24490_24549 = state_24459;
(statearr_24490_24549[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24459);

return cljs.core.constant$keyword$41;
} else {
throw e24489;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__24550 = state_24459;
state_24459 = G__24550;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_24459){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_24459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto__,jobs,results,process,async))
})();
var state__5855__auto__ = (function (){var statearr_24491 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_24491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto__);

return statearr_24491;
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
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.constant$keyword$93);
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
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.constant$keyword$94);
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
var c__5853__auto___24673 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___24673,tc,fc){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___24673,tc,fc){
return (function (state_24647){
var state_val_24648 = (state_24647[(1)]);
if((state_val_24648 === (7))){
var inst_24643 = (state_24647[(2)]);
var state_24647__$1 = state_24647;
var statearr_24649_24674 = state_24647__$1;
(statearr_24649_24674[(2)] = inst_24643);

(statearr_24649_24674[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24648 === (1))){
var state_24647__$1 = state_24647;
var statearr_24650_24675 = state_24647__$1;
(statearr_24650_24675[(2)] = null);

(statearr_24650_24675[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24648 === (4))){
var inst_24624 = (state_24647[(7)]);
var inst_24624__$1 = (state_24647[(2)]);
var inst_24625 = (inst_24624__$1 == null);
var state_24647__$1 = (function (){var statearr_24651 = state_24647;
(statearr_24651[(7)] = inst_24624__$1);

return statearr_24651;
})();
if(cljs.core.truth_(inst_24625)){
var statearr_24652_24676 = state_24647__$1;
(statearr_24652_24676[(1)] = (5));

} else {
var statearr_24653_24677 = state_24647__$1;
(statearr_24653_24677[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24648 === (13))){
var state_24647__$1 = state_24647;
var statearr_24654_24678 = state_24647__$1;
(statearr_24654_24678[(2)] = null);

(statearr_24654_24678[(1)] = (14));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24648 === (6))){
var inst_24624 = (state_24647[(7)]);
var inst_24630 = (function (){var G__24655 = inst_24624;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__24655) : p.call(null,G__24655));
})();
var state_24647__$1 = state_24647;
if(cljs.core.truth_(inst_24630)){
var statearr_24656_24679 = state_24647__$1;
(statearr_24656_24679[(1)] = (9));

} else {
var statearr_24657_24680 = state_24647__$1;
(statearr_24657_24680[(1)] = (10));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24648 === (3))){
var inst_24645 = (state_24647[(2)]);
var state_24647__$1 = state_24647;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24647__$1,inst_24645);
} else {
if((state_val_24648 === (12))){
var state_24647__$1 = state_24647;
var statearr_24658_24681 = state_24647__$1;
(statearr_24658_24681[(2)] = null);

(statearr_24658_24681[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24648 === (2))){
var state_24647__$1 = state_24647;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24647__$1,(4),ch);
} else {
if((state_val_24648 === (11))){
var inst_24624 = (state_24647[(7)]);
var inst_24634 = (state_24647[(2)]);
var state_24647__$1 = state_24647;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24647__$1,(8),inst_24634,inst_24624);
} else {
if((state_val_24648 === (9))){
var state_24647__$1 = state_24647;
var statearr_24659_24682 = state_24647__$1;
(statearr_24659_24682[(2)] = tc);

(statearr_24659_24682[(1)] = (11));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24648 === (5))){
var inst_24627 = cljs.core.async.close_BANG_(tc);
var inst_24628 = cljs.core.async.close_BANG_(fc);
var state_24647__$1 = (function (){var statearr_24660 = state_24647;
(statearr_24660[(8)] = inst_24627);

return statearr_24660;
})();
var statearr_24661_24683 = state_24647__$1;
(statearr_24661_24683[(2)] = inst_24628);

(statearr_24661_24683[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24648 === (14))){
var inst_24641 = (state_24647[(2)]);
var state_24647__$1 = state_24647;
var statearr_24662_24684 = state_24647__$1;
(statearr_24662_24684[(2)] = inst_24641);

(statearr_24662_24684[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24648 === (10))){
var state_24647__$1 = state_24647;
var statearr_24663_24685 = state_24647__$1;
(statearr_24663_24685[(2)] = fc);

(statearr_24663_24685[(1)] = (11));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24648 === (8))){
var inst_24636 = (state_24647[(2)]);
var state_24647__$1 = state_24647;
if(cljs.core.truth_(inst_24636)){
var statearr_24664_24686 = state_24647__$1;
(statearr_24664_24686[(1)] = (12));

} else {
var statearr_24665_24687 = state_24647__$1;
(statearr_24665_24687[(1)] = (13));

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
});})(c__5853__auto___24673,tc,fc))
;
return ((function (switch__5838__auto__,c__5853__auto___24673,tc,fc){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_24669 = [null,null,null,null,null,null,null,null,null];
(statearr_24669[(0)] = state_machine__5839__auto__);

(statearr_24669[(1)] = (1));

return statearr_24669;
});
var state_machine__5839__auto____1 = (function (state_24647){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_24647);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e24670){if((e24670 instanceof Object)){
var ex__5842__auto__ = e24670;
var statearr_24671_24688 = state_24647;
(statearr_24671_24688[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24647);

return cljs.core.constant$keyword$41;
} else {
throw e24670;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__24689 = state_24647;
state_24647 = G__24689;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_24647){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_24647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___24673,tc,fc))
})();
var state__5855__auto__ = (function (){var statearr_24672 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_24672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___24673);

return statearr_24672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___24673,tc,fc))
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
return (function (state_24738){
var state_val_24739 = (state_24738[(1)]);
if((state_val_24739 === (7))){
var inst_24734 = (state_24738[(2)]);
var state_24738__$1 = state_24738;
var statearr_24740_24758 = state_24738__$1;
(statearr_24740_24758[(2)] = inst_24734);

(statearr_24740_24758[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24739 === (6))){
var inst_24724 = (state_24738[(7)]);
var inst_24727 = (state_24738[(8)]);
var inst_24731 = (function (){var G__24741 = inst_24724;
var G__24742 = inst_24727;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24741,G__24742) : f.call(null,G__24741,G__24742));
})();
var inst_24724__$1 = inst_24731;
var state_24738__$1 = (function (){var statearr_24743 = state_24738;
(statearr_24743[(7)] = inst_24724__$1);

return statearr_24743;
})();
var statearr_24744_24759 = state_24738__$1;
(statearr_24744_24759[(2)] = null);

(statearr_24744_24759[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24739 === (5))){
var inst_24724 = (state_24738[(7)]);
var state_24738__$1 = state_24738;
var statearr_24745_24760 = state_24738__$1;
(statearr_24745_24760[(2)] = inst_24724);

(statearr_24745_24760[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24739 === (4))){
var inst_24727 = (state_24738[(8)]);
var inst_24727__$1 = (state_24738[(2)]);
var inst_24728 = (inst_24727__$1 == null);
var state_24738__$1 = (function (){var statearr_24746 = state_24738;
(statearr_24746[(8)] = inst_24727__$1);

return statearr_24746;
})();
if(cljs.core.truth_(inst_24728)){
var statearr_24747_24761 = state_24738__$1;
(statearr_24747_24761[(1)] = (5));

} else {
var statearr_24748_24762 = state_24738__$1;
(statearr_24748_24762[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24739 === (3))){
var inst_24736 = (state_24738[(2)]);
var state_24738__$1 = state_24738;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24738__$1,inst_24736);
} else {
if((state_val_24739 === (2))){
var state_24738__$1 = state_24738;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24738__$1,(4),ch);
} else {
if((state_val_24739 === (1))){
var inst_24724 = init;
var state_24738__$1 = (function (){var statearr_24749 = state_24738;
(statearr_24749[(7)] = inst_24724);

return statearr_24749;
})();
var statearr_24750_24763 = state_24738__$1;
(statearr_24750_24763[(2)] = null);

(statearr_24750_24763[(1)] = (2));


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
var statearr_24754 = [null,null,null,null,null,null,null,null,null];
(statearr_24754[(0)] = state_machine__5839__auto__);

(statearr_24754[(1)] = (1));

return statearr_24754;
});
var state_machine__5839__auto____1 = (function (state_24738){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_24738);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e24755){if((e24755 instanceof Object)){
var ex__5842__auto__ = e24755;
var statearr_24756_24764 = state_24738;
(statearr_24756_24764[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24738);

return cljs.core.constant$keyword$41;
} else {
throw e24755;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__24765 = state_24738;
state_24738 = G__24765;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_24738){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_24738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto__))
})();
var state__5855__auto__ = (function (){var statearr_24757 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_24757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto__);

return statearr_24757;
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
return (function (state_24842){
var state_val_24843 = (state_24842[(1)]);
if((state_val_24843 === (7))){
var inst_24824 = (state_24842[(2)]);
var state_24842__$1 = state_24842;
var statearr_24844_24867 = state_24842__$1;
(statearr_24844_24867[(2)] = inst_24824);

(statearr_24844_24867[(1)] = (6));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24843 === (1))){
var inst_24818 = cljs.core.seq(coll);
var inst_24819 = inst_24818;
var state_24842__$1 = (function (){var statearr_24845 = state_24842;
(statearr_24845[(7)] = inst_24819);

return statearr_24845;
})();
var statearr_24846_24868 = state_24842__$1;
(statearr_24846_24868[(2)] = null);

(statearr_24846_24868[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24843 === (4))){
var inst_24819 = (state_24842[(7)]);
var inst_24822 = cljs.core.first(inst_24819);
var state_24842__$1 = state_24842;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24842__$1,(7),ch,inst_24822);
} else {
if((state_val_24843 === (13))){
var inst_24836 = (state_24842[(2)]);
var state_24842__$1 = state_24842;
var statearr_24847_24869 = state_24842__$1;
(statearr_24847_24869[(2)] = inst_24836);

(statearr_24847_24869[(1)] = (10));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24843 === (6))){
var inst_24827 = (state_24842[(2)]);
var state_24842__$1 = state_24842;
if(cljs.core.truth_(inst_24827)){
var statearr_24848_24870 = state_24842__$1;
(statearr_24848_24870[(1)] = (8));

} else {
var statearr_24849_24871 = state_24842__$1;
(statearr_24849_24871[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24843 === (3))){
var inst_24840 = (state_24842[(2)]);
var state_24842__$1 = state_24842;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24842__$1,inst_24840);
} else {
if((state_val_24843 === (12))){
var state_24842__$1 = state_24842;
var statearr_24850_24872 = state_24842__$1;
(statearr_24850_24872[(2)] = null);

(statearr_24850_24872[(1)] = (13));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24843 === (2))){
var inst_24819 = (state_24842[(7)]);
var state_24842__$1 = state_24842;
if(cljs.core.truth_(inst_24819)){
var statearr_24851_24873 = state_24842__$1;
(statearr_24851_24873[(1)] = (4));

} else {
var statearr_24852_24874 = state_24842__$1;
(statearr_24852_24874[(1)] = (5));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24843 === (11))){
var inst_24833 = cljs.core.async.close_BANG_(ch);
var state_24842__$1 = state_24842;
var statearr_24853_24875 = state_24842__$1;
(statearr_24853_24875[(2)] = inst_24833);

(statearr_24853_24875[(1)] = (13));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24843 === (9))){
var state_24842__$1 = state_24842;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24854_24876 = state_24842__$1;
(statearr_24854_24876[(1)] = (11));

} else {
var statearr_24855_24877 = state_24842__$1;
(statearr_24855_24877[(1)] = (12));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24843 === (5))){
var inst_24819 = (state_24842[(7)]);
var state_24842__$1 = state_24842;
var statearr_24856_24878 = state_24842__$1;
(statearr_24856_24878[(2)] = inst_24819);

(statearr_24856_24878[(1)] = (6));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24843 === (10))){
var inst_24838 = (state_24842[(2)]);
var state_24842__$1 = state_24842;
var statearr_24857_24879 = state_24842__$1;
(statearr_24857_24879[(2)] = inst_24838);

(statearr_24857_24879[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24843 === (8))){
var inst_24819 = (state_24842[(7)]);
var inst_24829 = cljs.core.next(inst_24819);
var inst_24819__$1 = inst_24829;
var state_24842__$1 = (function (){var statearr_24858 = state_24842;
(statearr_24858[(7)] = inst_24819__$1);

return statearr_24858;
})();
var statearr_24859_24880 = state_24842__$1;
(statearr_24859_24880[(2)] = null);

(statearr_24859_24880[(1)] = (2));


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
var statearr_24863 = [null,null,null,null,null,null,null,null];
(statearr_24863[(0)] = state_machine__5839__auto__);

(statearr_24863[(1)] = (1));

return statearr_24863;
});
var state_machine__5839__auto____1 = (function (state_24842){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_24842);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e24864){if((e24864 instanceof Object)){
var ex__5842__auto__ = e24864;
var statearr_24865_24881 = state_24842;
(statearr_24865_24881[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24842);

return cljs.core.constant$keyword$41;
} else {
throw e24864;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__24882 = state_24842;
state_24842 = G__24882;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_24842){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_24842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto__))
})();
var state__5855__auto__ = (function (){var statearr_24866 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_24866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto__);

return statearr_24866;
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

cljs.core.async.Mux = (function (){var obj24884 = {};
return obj24884;
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
return (function (){var or__3630__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__24888 = x__4274__auto__;
return goog.typeOf(G__24888);
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


cljs.core.async.Mult = (function (){var obj24890 = {};
return obj24890;
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
return (function (){var or__3630__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__24894 = x__4274__auto__;
return goog.typeOf(G__24894);
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
return (function (){var or__3630__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__24898 = x__4274__auto__;
return goog.typeOf(G__24898);
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
return (function (){var or__3630__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__24902 = x__4274__auto__;
return goog.typeOf(G__24902);
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
var cs = (function (){var G__25132 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25132) : cljs.core.atom.call(null,G__25132));
})();
var m = (function (){
if(typeof cljs.core.async.t25133 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25133 = (function (cs,ch,mult,meta25134){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25134 = meta25134;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25133.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t25133.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t25133.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t25133.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25136_25361 = self__.cs;
var G__25137_25362 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25136_25361,G__25137_25362) : cljs.core.reset_BANG_.call(null,G__25136_25361,G__25137_25362));

return null;
});})(cs))
;

cljs.core.async.t25133.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25133.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t25133.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25135){
var self__ = this;
var _25135__$1 = this;
return self__.meta25134;
});})(cs))
;

cljs.core.async.t25133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25135,meta25134__$1){
var self__ = this;
var _25135__$1 = this;
return (new cljs.core.async.t25133(self__.cs,self__.ch,self__.mult,meta25134__$1));
});})(cs))
;

cljs.core.async.t25133.cljs$lang$type = true;

cljs.core.async.t25133.cljs$lang$ctorStr = "cljs.core.async/t25133";

cljs.core.async.t25133.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25133");
});})(cs))
;

cljs.core.async.__GT_t25133 = ((function (cs){
return (function __GT_t25133(cs__$1,ch__$1,mult__$1,meta25134){
return (new cljs.core.async.t25133(cs__$1,ch__$1,mult__$1,meta25134));
});})(cs))
;

}

return (new cljs.core.async.t25133(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,397,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,390,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__25138 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25138) : cljs.core.atom.call(null,G__25138));
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
var c__5853__auto___25363 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___25363,cs,m,dchan,dctr,done){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___25363,cs,m,dchan,dctr,done){
return (function (state_25269){
var state_val_25270 = (state_25269[(1)]);
if((state_val_25270 === (7))){
var inst_25265 = (state_25269[(2)]);
var state_25269__$1 = state_25269;
var statearr_25271_25364 = state_25269__$1;
(statearr_25271_25364[(2)] = inst_25265);

(statearr_25271_25364[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (20))){
var inst_25170 = (state_25269[(7)]);
var inst_25180 = cljs.core.first(inst_25170);
var inst_25181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25180,(0),null);
var inst_25182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25180,(1),null);
var state_25269__$1 = (function (){var statearr_25272 = state_25269;
(statearr_25272[(8)] = inst_25181);

return statearr_25272;
})();
if(cljs.core.truth_(inst_25182)){
var statearr_25273_25365 = state_25269__$1;
(statearr_25273_25365[(1)] = (22));

} else {
var statearr_25274_25366 = state_25269__$1;
(statearr_25274_25366[(1)] = (23));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (27))){
var inst_25210 = (state_25269[(9)]);
var inst_25141 = (state_25269[(10)]);
var inst_25217 = (state_25269[(11)]);
var inst_25212 = (state_25269[(12)]);
var inst_25217__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25210,inst_25212);
var inst_25218 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25217__$1,inst_25141,done);
var state_25269__$1 = (function (){var statearr_25275 = state_25269;
(statearr_25275[(11)] = inst_25217__$1);

return statearr_25275;
})();
if(cljs.core.truth_(inst_25218)){
var statearr_25276_25367 = state_25269__$1;
(statearr_25276_25367[(1)] = (30));

} else {
var statearr_25277_25368 = state_25269__$1;
(statearr_25277_25368[(1)] = (31));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (1))){
var state_25269__$1 = state_25269;
var statearr_25278_25369 = state_25269__$1;
(statearr_25278_25369[(2)] = null);

(statearr_25278_25369[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (24))){
var inst_25170 = (state_25269[(7)]);
var inst_25187 = (state_25269[(2)]);
var inst_25188 = cljs.core.next(inst_25170);
var inst_25150 = inst_25188;
var inst_25151 = null;
var inst_25152 = (0);
var inst_25153 = (0);
var state_25269__$1 = (function (){var statearr_25279 = state_25269;
(statearr_25279[(13)] = inst_25153);

(statearr_25279[(14)] = inst_25152);

(statearr_25279[(15)] = inst_25150);

(statearr_25279[(16)] = inst_25151);

(statearr_25279[(17)] = inst_25187);

return statearr_25279;
})();
var statearr_25280_25370 = state_25269__$1;
(statearr_25280_25370[(2)] = null);

(statearr_25280_25370[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (39))){
var state_25269__$1 = state_25269;
var statearr_25284_25371 = state_25269__$1;
(statearr_25284_25371[(2)] = null);

(statearr_25284_25371[(1)] = (41));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (4))){
var inst_25141 = (state_25269[(10)]);
var inst_25141__$1 = (state_25269[(2)]);
var inst_25142 = (inst_25141__$1 == null);
var state_25269__$1 = (function (){var statearr_25285 = state_25269;
(statearr_25285[(10)] = inst_25141__$1);

return statearr_25285;
})();
if(cljs.core.truth_(inst_25142)){
var statearr_25286_25372 = state_25269__$1;
(statearr_25286_25372[(1)] = (5));

} else {
var statearr_25287_25373 = state_25269__$1;
(statearr_25287_25373[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (15))){
var inst_25153 = (state_25269[(13)]);
var inst_25152 = (state_25269[(14)]);
var inst_25150 = (state_25269[(15)]);
var inst_25151 = (state_25269[(16)]);
var inst_25166 = (state_25269[(2)]);
var inst_25167 = (inst_25153 + (1));
var tmp25281 = inst_25152;
var tmp25282 = inst_25150;
var tmp25283 = inst_25151;
var inst_25150__$1 = tmp25282;
var inst_25151__$1 = tmp25283;
var inst_25152__$1 = tmp25281;
var inst_25153__$1 = inst_25167;
var state_25269__$1 = (function (){var statearr_25288 = state_25269;
(statearr_25288[(13)] = inst_25153__$1);

(statearr_25288[(18)] = inst_25166);

(statearr_25288[(14)] = inst_25152__$1);

(statearr_25288[(15)] = inst_25150__$1);

(statearr_25288[(16)] = inst_25151__$1);

return statearr_25288;
})();
var statearr_25289_25374 = state_25269__$1;
(statearr_25289_25374[(2)] = null);

(statearr_25289_25374[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (21))){
var inst_25191 = (state_25269[(2)]);
var state_25269__$1 = state_25269;
var statearr_25293_25375 = state_25269__$1;
(statearr_25293_25375[(2)] = inst_25191);

(statearr_25293_25375[(1)] = (18));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (31))){
var inst_25217 = (state_25269[(11)]);
var inst_25221 = done(null);
var inst_25222 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25217);
var state_25269__$1 = (function (){var statearr_25294 = state_25269;
(statearr_25294[(19)] = inst_25221);

return statearr_25294;
})();
var statearr_25295_25376 = state_25269__$1;
(statearr_25295_25376[(2)] = inst_25222);

(statearr_25295_25376[(1)] = (32));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (32))){
var inst_25210 = (state_25269[(9)]);
var inst_25211 = (state_25269[(20)]);
var inst_25209 = (state_25269[(21)]);
var inst_25212 = (state_25269[(12)]);
var inst_25224 = (state_25269[(2)]);
var inst_25225 = (inst_25212 + (1));
var tmp25290 = inst_25210;
var tmp25291 = inst_25211;
var tmp25292 = inst_25209;
var inst_25209__$1 = tmp25292;
var inst_25210__$1 = tmp25290;
var inst_25211__$1 = tmp25291;
var inst_25212__$1 = inst_25225;
var state_25269__$1 = (function (){var statearr_25296 = state_25269;
(statearr_25296[(9)] = inst_25210__$1);

(statearr_25296[(20)] = inst_25211__$1);

(statearr_25296[(22)] = inst_25224);

(statearr_25296[(21)] = inst_25209__$1);

(statearr_25296[(12)] = inst_25212__$1);

return statearr_25296;
})();
var statearr_25297_25377 = state_25269__$1;
(statearr_25297_25377[(2)] = null);

(statearr_25297_25377[(1)] = (25));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (40))){
var inst_25237 = (state_25269[(23)]);
var inst_25241 = done(null);
var inst_25242 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25237);
var state_25269__$1 = (function (){var statearr_25298 = state_25269;
(statearr_25298[(24)] = inst_25241);

return statearr_25298;
})();
var statearr_25299_25378 = state_25269__$1;
(statearr_25299_25378[(2)] = inst_25242);

(statearr_25299_25378[(1)] = (41));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (33))){
var inst_25228 = (state_25269[(25)]);
var inst_25230 = cljs.core.chunked_seq_QMARK_(inst_25228);
var state_25269__$1 = state_25269;
if(inst_25230){
var statearr_25300_25379 = state_25269__$1;
(statearr_25300_25379[(1)] = (36));

} else {
var statearr_25301_25380 = state_25269__$1;
(statearr_25301_25380[(1)] = (37));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (13))){
var inst_25160 = (state_25269[(26)]);
var inst_25163 = cljs.core.async.close_BANG_(inst_25160);
var state_25269__$1 = state_25269;
var statearr_25302_25381 = state_25269__$1;
(statearr_25302_25381[(2)] = inst_25163);

(statearr_25302_25381[(1)] = (15));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (22))){
var inst_25181 = (state_25269[(8)]);
var inst_25184 = cljs.core.async.close_BANG_(inst_25181);
var state_25269__$1 = state_25269;
var statearr_25303_25382 = state_25269__$1;
(statearr_25303_25382[(2)] = inst_25184);

(statearr_25303_25382[(1)] = (24));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (36))){
var inst_25228 = (state_25269[(25)]);
var inst_25232 = cljs.core.chunk_first(inst_25228);
var inst_25233 = cljs.core.chunk_rest(inst_25228);
var inst_25234 = cljs.core.count(inst_25232);
var inst_25209 = inst_25233;
var inst_25210 = inst_25232;
var inst_25211 = inst_25234;
var inst_25212 = (0);
var state_25269__$1 = (function (){var statearr_25304 = state_25269;
(statearr_25304[(9)] = inst_25210);

(statearr_25304[(20)] = inst_25211);

(statearr_25304[(21)] = inst_25209);

(statearr_25304[(12)] = inst_25212);

return statearr_25304;
})();
var statearr_25305_25383 = state_25269__$1;
(statearr_25305_25383[(2)] = null);

(statearr_25305_25383[(1)] = (25));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (41))){
var inst_25228 = (state_25269[(25)]);
var inst_25244 = (state_25269[(2)]);
var inst_25245 = cljs.core.next(inst_25228);
var inst_25209 = inst_25245;
var inst_25210 = null;
var inst_25211 = (0);
var inst_25212 = (0);
var state_25269__$1 = (function (){var statearr_25306 = state_25269;
(statearr_25306[(9)] = inst_25210);

(statearr_25306[(27)] = inst_25244);

(statearr_25306[(20)] = inst_25211);

(statearr_25306[(21)] = inst_25209);

(statearr_25306[(12)] = inst_25212);

return statearr_25306;
})();
var statearr_25307_25384 = state_25269__$1;
(statearr_25307_25384[(2)] = null);

(statearr_25307_25384[(1)] = (25));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (43))){
var state_25269__$1 = state_25269;
var statearr_25308_25385 = state_25269__$1;
(statearr_25308_25385[(2)] = null);

(statearr_25308_25385[(1)] = (44));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (29))){
var inst_25253 = (state_25269[(2)]);
var state_25269__$1 = state_25269;
var statearr_25309_25386 = state_25269__$1;
(statearr_25309_25386[(2)] = inst_25253);

(statearr_25309_25386[(1)] = (26));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (44))){
var inst_25262 = (state_25269[(2)]);
var state_25269__$1 = (function (){var statearr_25310 = state_25269;
(statearr_25310[(28)] = inst_25262);

return statearr_25310;
})();
var statearr_25311_25387 = state_25269__$1;
(statearr_25311_25387[(2)] = null);

(statearr_25311_25387[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (6))){
var inst_25201 = (state_25269[(29)]);
var inst_25200 = (function (){var G__25312 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25312) : cljs.core.deref.call(null,G__25312));
})();
var inst_25201__$1 = cljs.core.keys(inst_25200);
var inst_25202 = cljs.core.count(inst_25201__$1);
var inst_25203 = (function (){var G__25313 = dctr;
var G__25314 = inst_25202;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25313,G__25314) : cljs.core.reset_BANG_.call(null,G__25313,G__25314));
})();
var inst_25208 = cljs.core.seq(inst_25201__$1);
var inst_25209 = inst_25208;
var inst_25210 = null;
var inst_25211 = (0);
var inst_25212 = (0);
var state_25269__$1 = (function (){var statearr_25315 = state_25269;
(statearr_25315[(9)] = inst_25210);

(statearr_25315[(30)] = inst_25203);

(statearr_25315[(29)] = inst_25201__$1);

(statearr_25315[(20)] = inst_25211);

(statearr_25315[(21)] = inst_25209);

(statearr_25315[(12)] = inst_25212);

return statearr_25315;
})();
var statearr_25316_25388 = state_25269__$1;
(statearr_25316_25388[(2)] = null);

(statearr_25316_25388[(1)] = (25));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (28))){
var inst_25228 = (state_25269[(25)]);
var inst_25209 = (state_25269[(21)]);
var inst_25228__$1 = cljs.core.seq(inst_25209);
var state_25269__$1 = (function (){var statearr_25317 = state_25269;
(statearr_25317[(25)] = inst_25228__$1);

return statearr_25317;
})();
if(inst_25228__$1){
var statearr_25318_25389 = state_25269__$1;
(statearr_25318_25389[(1)] = (33));

} else {
var statearr_25319_25390 = state_25269__$1;
(statearr_25319_25390[(1)] = (34));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (25))){
var inst_25211 = (state_25269[(20)]);
var inst_25212 = (state_25269[(12)]);
var inst_25214 = (inst_25212 < inst_25211);
var inst_25215 = inst_25214;
var state_25269__$1 = state_25269;
if(cljs.core.truth_(inst_25215)){
var statearr_25320_25391 = state_25269__$1;
(statearr_25320_25391[(1)] = (27));

} else {
var statearr_25321_25392 = state_25269__$1;
(statearr_25321_25392[(1)] = (28));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (34))){
var state_25269__$1 = state_25269;
var statearr_25322_25393 = state_25269__$1;
(statearr_25322_25393[(2)] = null);

(statearr_25322_25393[(1)] = (35));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (17))){
var state_25269__$1 = state_25269;
var statearr_25323_25394 = state_25269__$1;
(statearr_25323_25394[(2)] = null);

(statearr_25323_25394[(1)] = (18));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (3))){
var inst_25267 = (state_25269[(2)]);
var state_25269__$1 = state_25269;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25269__$1,inst_25267);
} else {
if((state_val_25270 === (12))){
var inst_25196 = (state_25269[(2)]);
var state_25269__$1 = state_25269;
var statearr_25324_25395 = state_25269__$1;
(statearr_25324_25395[(2)] = inst_25196);

(statearr_25324_25395[(1)] = (9));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (2))){
var state_25269__$1 = state_25269;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25269__$1,(4),ch);
} else {
if((state_val_25270 === (23))){
var state_25269__$1 = state_25269;
var statearr_25325_25396 = state_25269__$1;
(statearr_25325_25396[(2)] = null);

(statearr_25325_25396[(1)] = (24));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (35))){
var inst_25251 = (state_25269[(2)]);
var state_25269__$1 = state_25269;
var statearr_25326_25397 = state_25269__$1;
(statearr_25326_25397[(2)] = inst_25251);

(statearr_25326_25397[(1)] = (29));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (19))){
var inst_25170 = (state_25269[(7)]);
var inst_25174 = cljs.core.chunk_first(inst_25170);
var inst_25175 = cljs.core.chunk_rest(inst_25170);
var inst_25176 = cljs.core.count(inst_25174);
var inst_25150 = inst_25175;
var inst_25151 = inst_25174;
var inst_25152 = inst_25176;
var inst_25153 = (0);
var state_25269__$1 = (function (){var statearr_25327 = state_25269;
(statearr_25327[(13)] = inst_25153);

(statearr_25327[(14)] = inst_25152);

(statearr_25327[(15)] = inst_25150);

(statearr_25327[(16)] = inst_25151);

return statearr_25327;
})();
var statearr_25328_25398 = state_25269__$1;
(statearr_25328_25398[(2)] = null);

(statearr_25328_25398[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (11))){
var inst_25150 = (state_25269[(15)]);
var inst_25170 = (state_25269[(7)]);
var inst_25170__$1 = cljs.core.seq(inst_25150);
var state_25269__$1 = (function (){var statearr_25329 = state_25269;
(statearr_25329[(7)] = inst_25170__$1);

return statearr_25329;
})();
if(inst_25170__$1){
var statearr_25330_25399 = state_25269__$1;
(statearr_25330_25399[(1)] = (16));

} else {
var statearr_25331_25400 = state_25269__$1;
(statearr_25331_25400[(1)] = (17));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (9))){
var inst_25198 = (state_25269[(2)]);
var state_25269__$1 = state_25269;
var statearr_25332_25401 = state_25269__$1;
(statearr_25332_25401[(2)] = inst_25198);

(statearr_25332_25401[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (5))){
var inst_25148 = (function (){var G__25333 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25333) : cljs.core.deref.call(null,G__25333));
})();
var inst_25149 = cljs.core.seq(inst_25148);
var inst_25150 = inst_25149;
var inst_25151 = null;
var inst_25152 = (0);
var inst_25153 = (0);
var state_25269__$1 = (function (){var statearr_25334 = state_25269;
(statearr_25334[(13)] = inst_25153);

(statearr_25334[(14)] = inst_25152);

(statearr_25334[(15)] = inst_25150);

(statearr_25334[(16)] = inst_25151);

return statearr_25334;
})();
var statearr_25335_25402 = state_25269__$1;
(statearr_25335_25402[(2)] = null);

(statearr_25335_25402[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (14))){
var state_25269__$1 = state_25269;
var statearr_25336_25403 = state_25269__$1;
(statearr_25336_25403[(2)] = null);

(statearr_25336_25403[(1)] = (15));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (45))){
var inst_25259 = (state_25269[(2)]);
var state_25269__$1 = state_25269;
var statearr_25337_25404 = state_25269__$1;
(statearr_25337_25404[(2)] = inst_25259);

(statearr_25337_25404[(1)] = (44));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (26))){
var inst_25201 = (state_25269[(29)]);
var inst_25255 = (state_25269[(2)]);
var inst_25256 = cljs.core.seq(inst_25201);
var state_25269__$1 = (function (){var statearr_25338 = state_25269;
(statearr_25338[(31)] = inst_25255);

return statearr_25338;
})();
if(inst_25256){
var statearr_25339_25405 = state_25269__$1;
(statearr_25339_25405[(1)] = (42));

} else {
var statearr_25340_25406 = state_25269__$1;
(statearr_25340_25406[(1)] = (43));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (16))){
var inst_25170 = (state_25269[(7)]);
var inst_25172 = cljs.core.chunked_seq_QMARK_(inst_25170);
var state_25269__$1 = state_25269;
if(inst_25172){
var statearr_25341_25407 = state_25269__$1;
(statearr_25341_25407[(1)] = (19));

} else {
var statearr_25342_25408 = state_25269__$1;
(statearr_25342_25408[(1)] = (20));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (38))){
var inst_25248 = (state_25269[(2)]);
var state_25269__$1 = state_25269;
var statearr_25343_25409 = state_25269__$1;
(statearr_25343_25409[(2)] = inst_25248);

(statearr_25343_25409[(1)] = (35));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (30))){
var state_25269__$1 = state_25269;
var statearr_25344_25410 = state_25269__$1;
(statearr_25344_25410[(2)] = null);

(statearr_25344_25410[(1)] = (32));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (10))){
var inst_25153 = (state_25269[(13)]);
var inst_25151 = (state_25269[(16)]);
var inst_25159 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25151,inst_25153);
var inst_25160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25159,(0),null);
var inst_25161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25159,(1),null);
var state_25269__$1 = (function (){var statearr_25345 = state_25269;
(statearr_25345[(26)] = inst_25160);

return statearr_25345;
})();
if(cljs.core.truth_(inst_25161)){
var statearr_25346_25411 = state_25269__$1;
(statearr_25346_25411[(1)] = (13));

} else {
var statearr_25347_25412 = state_25269__$1;
(statearr_25347_25412[(1)] = (14));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (18))){
var inst_25194 = (state_25269[(2)]);
var state_25269__$1 = state_25269;
var statearr_25348_25413 = state_25269__$1;
(statearr_25348_25413[(2)] = inst_25194);

(statearr_25348_25413[(1)] = (12));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (42))){
var state_25269__$1 = state_25269;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25269__$1,(45),dchan);
} else {
if((state_val_25270 === (37))){
var inst_25228 = (state_25269[(25)]);
var inst_25237 = (state_25269[(23)]);
var inst_25141 = (state_25269[(10)]);
var inst_25237__$1 = cljs.core.first(inst_25228);
var inst_25238 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25237__$1,inst_25141,done);
var state_25269__$1 = (function (){var statearr_25349 = state_25269;
(statearr_25349[(23)] = inst_25237__$1);

return statearr_25349;
})();
if(cljs.core.truth_(inst_25238)){
var statearr_25350_25414 = state_25269__$1;
(statearr_25350_25414[(1)] = (39));

} else {
var statearr_25351_25415 = state_25269__$1;
(statearr_25351_25415[(1)] = (40));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25270 === (8))){
var inst_25153 = (state_25269[(13)]);
var inst_25152 = (state_25269[(14)]);
var inst_25155 = (inst_25153 < inst_25152);
var inst_25156 = inst_25155;
var state_25269__$1 = state_25269;
if(cljs.core.truth_(inst_25156)){
var statearr_25352_25416 = state_25269__$1;
(statearr_25352_25416[(1)] = (10));

} else {
var statearr_25353_25417 = state_25269__$1;
(statearr_25353_25417[(1)] = (11));

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
});})(c__5853__auto___25363,cs,m,dchan,dctr,done))
;
return ((function (switch__5838__auto__,c__5853__auto___25363,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_25357 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25357[(0)] = state_machine__5839__auto__);

(statearr_25357[(1)] = (1));

return statearr_25357;
});
var state_machine__5839__auto____1 = (function (state_25269){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_25269);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e25358){if((e25358 instanceof Object)){
var ex__5842__auto__ = e25358;
var statearr_25359_25418 = state_25269;
(statearr_25359_25418[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25269);

return cljs.core.constant$keyword$41;
} else {
throw e25358;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__25419 = state_25269;
state_25269 = G__25419;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_25269){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_25269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___25363,cs,m,dchan,dctr,done))
})();
var state__5855__auto__ = (function (){var statearr_25360 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_25360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___25363);

return statearr_25360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___25363,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj25424 = {};
return obj25424;
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
return (function (){var or__3630__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__25428 = x__4274__auto__;
return goog.typeOf(G__25428);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__25432 = x__4274__auto__;
return goog.typeOf(G__25432);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__25436 = x__4274__auto__;
return goog.typeOf(G__25436);
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
return (function (){var or__3630__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__25440 = x__4274__auto__;
return goog.typeOf(G__25440);
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
return (function (){var or__3630__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__25444 = x__4274__auto__;
return goog.typeOf(G__25444);
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__25445){
var map__25451 = p__25445;
var map__25451__$1 = ((cljs.core.seq_QMARK_(map__25451))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25451):map__25451);
var opts = map__25451__$1;
var statearr_25452_25456 = state;
(statearr_25452_25456[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__25451,map__25451__$1,opts){
return (function (val){
var statearr_25453_25457 = state;
(statearr_25453_25457[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__25451,map__25451__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_25454_25458 = state;
(statearr_25454_25458[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__25455 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25455) : cljs.core.deref.call(null,G__25455));
})());


return cljs.core.constant$keyword$41;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__25445 = null;
if (arguments.length > 3) {
  p__25445 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__25445);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__25459){
var state = cljs.core.first(arglist__25459);
arglist__25459 = cljs.core.next(arglist__25459);
var cont_block = cljs.core.first(arglist__25459);
arglist__25459 = cljs.core.next(arglist__25459);
var ports = cljs.core.first(arglist__25459);
var p__25445 = cljs.core.rest(arglist__25459);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__25445);
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
var cs = (function (){var G__25593 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25593) : cljs.core.atom.call(null,G__25593));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$95,null,cljs.core.constant$keyword$96,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$97);
var solo_mode = (function (){var G__25594 = cljs.core.constant$keyword$96;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25594) : cljs.core.atom.call(null,G__25594));
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
if(cljs.core.truth_((function (){var G__25595 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__25595) : attr.call(null,G__25595));
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
var chs = (function (){var G__25596 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25596) : cljs.core.deref.call(null,G__25596));
})();
var mode = (function (){var G__25597 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25597) : cljs.core.deref.call(null,G__25597));
})();
var solos = pick(cljs.core.constant$keyword$97,chs);
var pauses = pick(cljs.core.constant$keyword$95,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$98,solos,cljs.core.constant$keyword$99,pick(cljs.core.constant$keyword$96,chs),cljs.core.constant$keyword$100,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$95)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t25598 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25598 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25599){
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
this.meta25599 = meta25599;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25598.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t25598.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25598.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25598.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25601_25726 = self__.cs;
var G__25602_25727 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25601_25726,G__25602_25727) : cljs.core.reset_BANG_.call(null,G__25601_25726,G__25602_25727));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25598.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25598.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__25603 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__25603) : self__.solo_modes.call(null,G__25603));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__25604_25728 = self__.solo_mode;
var G__25605_25729 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25604_25728,G__25605_25729) : cljs.core.reset_BANG_.call(null,G__25604_25728,G__25605_25729));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25598.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25598.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25598.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25600){
var self__ = this;
var _25600__$1 = this;
return self__.meta25599;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25600,meta25599__$1){
var self__ = this;
var _25600__$1 = this;
return (new cljs.core.async.t25598(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25599__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25598.cljs$lang$type = true;

cljs.core.async.t25598.cljs$lang$ctorStr = "cljs.core.async/t25598";

cljs.core.async.t25598.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25598");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t25598 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25598(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25599){
return (new cljs.core.async.t25598(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25599));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t25598(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,25,cljs.core.constant$keyword$9,510,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,499,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
;
var c__5853__auto___25730 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___25730,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___25730,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25677){
var state_val_25678 = (state_25677[(1)]);
if((state_val_25678 === (7))){
var inst_25619 = (state_25677[(7)]);
var inst_25624 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25619);
var state_25677__$1 = state_25677;
var statearr_25679_25731 = state_25677__$1;
(statearr_25679_25731[(2)] = inst_25624);

(statearr_25679_25731[(1)] = (9));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25678 === (20))){
var inst_25634 = (state_25677[(8)]);
var state_25677__$1 = state_25677;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25677__$1,(23),out,inst_25634);
} else {
if((state_val_25678 === (1))){
var inst_25609 = (state_25677[(9)]);
var inst_25609__$1 = calc_state();
var inst_25610 = cljs.core.seq_QMARK_(inst_25609__$1);
var state_25677__$1 = (function (){var statearr_25680 = state_25677;
(statearr_25680[(9)] = inst_25609__$1);

return statearr_25680;
})();
if(inst_25610){
var statearr_25681_25732 = state_25677__$1;
(statearr_25681_25732[(1)] = (2));

} else {
var statearr_25682_25733 = state_25677__$1;
(statearr_25682_25733[(1)] = (3));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25678 === (24))){
var inst_25627 = (state_25677[(10)]);
var inst_25619 = inst_25627;
var state_25677__$1 = (function (){var statearr_25683 = state_25677;
(statearr_25683[(7)] = inst_25619);

return statearr_25683;
})();
var statearr_25684_25734 = state_25677__$1;
(statearr_25684_25734[(2)] = null);

(statearr_25684_25734[(1)] = (5));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25678 === (4))){
var inst_25609 = (state_25677[(9)]);
var inst_25615 = (state_25677[(2)]);
var inst_25616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25615,cljs.core.constant$keyword$100);
var inst_25617 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25615,cljs.core.constant$keyword$99);
var inst_25618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25615,cljs.core.constant$keyword$98);
var inst_25619 = inst_25609;
var state_25677__$1 = (function (){var statearr_25685 = state_25677;
(statearr_25685[(11)] = inst_25616);

(statearr_25685[(7)] = inst_25619);

(statearr_25685[(12)] = inst_25618);

(statearr_25685[(13)] = inst_25617);

return statearr_25685;
})();
var statearr_25686_25735 = state_25677__$1;
(statearr_25686_25735[(2)] = null);

(statearr_25686_25735[(1)] = (5));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25678 === (15))){
var state_25677__$1 = state_25677;
var statearr_25687_25736 = state_25677__$1;
(statearr_25687_25736[(2)] = null);

(statearr_25687_25736[(1)] = (16));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25678 === (21))){
var inst_25627 = (state_25677[(10)]);
var inst_25619 = inst_25627;
var state_25677__$1 = (function (){var statearr_25688 = state_25677;
(statearr_25688[(7)] = inst_25619);

return statearr_25688;
})();
var statearr_25689_25737 = state_25677__$1;
(statearr_25689_25737[(2)] = null);

(statearr_25689_25737[(1)] = (5));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25678 === (13))){
var inst_25673 = (state_25677[(2)]);
var state_25677__$1 = state_25677;
var statearr_25690_25738 = state_25677__$1;
(statearr_25690_25738[(2)] = inst_25673);

(statearr_25690_25738[(1)] = (6));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25678 === (22))){
var inst_25671 = (state_25677[(2)]);
var state_25677__$1 = state_25677;
var statearr_25691_25739 = state_25677__$1;
(statearr_25691_25739[(2)] = inst_25671);

(statearr_25691_25739[(1)] = (13));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25678 === (6))){
var inst_25675 = (state_25677[(2)]);
var state_25677__$1 = state_25677;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25677__$1,inst_25675);
} else {
if((state_val_25678 === (25))){
var state_25677__$1 = state_25677;
var statearr_25692_25740 = state_25677__$1;
(statearr_25692_25740[(2)] = null);

(statearr_25692_25740[(1)] = (26));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25678 === (17))){
var inst_25650 = (state_25677[(14)]);
var state_25677__$1 = state_25677;
var statearr_25693_25741 = state_25677__$1;
(statearr_25693_25741[(2)] = inst_25650);

(statearr_25693_25741[(1)] = (19));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25678 === (3))){
var inst_25609 = (state_25677[(9)]);
var state_25677__$1 = state_25677;
var statearr_25694_25742 = state_25677__$1;
(statearr_25694_25742[(2)] = inst_25609);

(statearr_25694_25742[(1)] = (4));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25678 === (12))){
var inst_25650 = (state_25677[(14)]);
var inst_25630 = (state_25677[(15)]);
var inst_25635 = (state_25677[(16)]);
var inst_25650__$1 = (function (){var G__25695 = inst_25635;
return (inst_25630.cljs$core$IFn$_invoke$arity$1 ? inst_25630.cljs$core$IFn$_invoke$arity$1(G__25695) : inst_25630.call(null,G__25695));
})();
var state_25677__$1 = (function (){var statearr_25696 = state_25677;
(statearr_25696[(14)] = inst_25650__$1);

return statearr_25696;
})();
if(cljs.core.truth_(inst_25650__$1)){
var statearr_25697_25743 = state_25677__$1;
(statearr_25697_25743[(1)] = (17));

} else {
var statearr_25698_25744 = state_25677__$1;
(statearr_25698_25744[(1)] = (18));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25678 === (2))){
var inst_25609 = (state_25677[(9)]);
var inst_25612 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25609);
var state_25677__$1 = state_25677;
var statearr_25699_25745 = state_25677__$1;
(statearr_25699_25745[(2)] = inst_25612);

(statearr_25699_25745[(1)] = (4));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25678 === (23))){
var inst_25662 = (state_25677[(2)]);
var state_25677__$1 = state_25677;
if(cljs.core.truth_(inst_25662)){
var statearr_25700_25746 = state_25677__$1;
(statearr_25700_25746[(1)] = (24));

} else {
var statearr_25701_25747 = state_25677__$1;
(statearr_25701_25747[(1)] = (25));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25678 === (19))){
var inst_25659 = (state_25677[(2)]);
var state_25677__$1 = state_25677;
if(cljs.core.truth_(inst_25659)){
var statearr_25702_25748 = state_25677__$1;
(statearr_25702_25748[(1)] = (20));

} else {
var statearr_25703_25749 = state_25677__$1;
(statearr_25703_25749[(1)] = (21));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25678 === (11))){
var inst_25634 = (state_25677[(8)]);
var inst_25640 = (inst_25634 == null);
var state_25677__$1 = state_25677;
if(cljs.core.truth_(inst_25640)){
var statearr_25704_25750 = state_25677__$1;
(statearr_25704_25750[(1)] = (14));

} else {
var statearr_25705_25751 = state_25677__$1;
(statearr_25705_25751[(1)] = (15));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25678 === (9))){
var inst_25627 = (state_25677[(10)]);
var inst_25627__$1 = (state_25677[(2)]);
var inst_25628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25627__$1,cljs.core.constant$keyword$100);
var inst_25629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25627__$1,cljs.core.constant$keyword$99);
var inst_25630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25627__$1,cljs.core.constant$keyword$98);
var state_25677__$1 = (function (){var statearr_25706 = state_25677;
(statearr_25706[(17)] = inst_25629);

(statearr_25706[(10)] = inst_25627__$1);

(statearr_25706[(15)] = inst_25630);

return statearr_25706;
})();
return cljs.core.async.ioc_alts_BANG_(state_25677__$1,(10),inst_25628);
} else {
if((state_val_25678 === (5))){
var inst_25619 = (state_25677[(7)]);
var inst_25622 = cljs.core.seq_QMARK_(inst_25619);
var state_25677__$1 = state_25677;
if(inst_25622){
var statearr_25707_25752 = state_25677__$1;
(statearr_25707_25752[(1)] = (7));

} else {
var statearr_25708_25753 = state_25677__$1;
(statearr_25708_25753[(1)] = (8));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25678 === (14))){
var inst_25635 = (state_25677[(16)]);
var inst_25642 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25635);
var state_25677__$1 = state_25677;
var statearr_25709_25754 = state_25677__$1;
(statearr_25709_25754[(2)] = inst_25642);

(statearr_25709_25754[(1)] = (16));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25678 === (26))){
var inst_25667 = (state_25677[(2)]);
var state_25677__$1 = state_25677;
var statearr_25710_25755 = state_25677__$1;
(statearr_25710_25755[(2)] = inst_25667);

(statearr_25710_25755[(1)] = (22));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25678 === (16))){
var inst_25645 = (state_25677[(2)]);
var inst_25646 = calc_state();
var inst_25619 = inst_25646;
var state_25677__$1 = (function (){var statearr_25711 = state_25677;
(statearr_25711[(7)] = inst_25619);

(statearr_25711[(18)] = inst_25645);

return statearr_25711;
})();
var statearr_25712_25756 = state_25677__$1;
(statearr_25712_25756[(2)] = null);

(statearr_25712_25756[(1)] = (5));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25678 === (10))){
var inst_25634 = (state_25677[(8)]);
var inst_25635 = (state_25677[(16)]);
var inst_25633 = (state_25677[(2)]);
var inst_25634__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25633,(0),null);
var inst_25635__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25633,(1),null);
var inst_25636 = (inst_25634__$1 == null);
var inst_25637 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25635__$1,change);
var inst_25638 = (inst_25636) || (inst_25637);
var state_25677__$1 = (function (){var statearr_25713 = state_25677;
(statearr_25713[(8)] = inst_25634__$1);

(statearr_25713[(16)] = inst_25635__$1);

return statearr_25713;
})();
if(cljs.core.truth_(inst_25638)){
var statearr_25714_25757 = state_25677__$1;
(statearr_25714_25757[(1)] = (11));

} else {
var statearr_25715_25758 = state_25677__$1;
(statearr_25715_25758[(1)] = (12));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25678 === (18))){
var inst_25629 = (state_25677[(17)]);
var inst_25630 = (state_25677[(15)]);
var inst_25635 = (state_25677[(16)]);
var inst_25654 = cljs.core.empty_QMARK_(inst_25630);
var inst_25655 = (function (){var G__25716 = inst_25635;
return (inst_25629.cljs$core$IFn$_invoke$arity$1 ? inst_25629.cljs$core$IFn$_invoke$arity$1(G__25716) : inst_25629.call(null,G__25716));
})();
var inst_25656 = cljs.core.not(inst_25655);
var inst_25657 = (inst_25654) && (inst_25656);
var state_25677__$1 = state_25677;
var statearr_25717_25759 = state_25677__$1;
(statearr_25717_25759[(2)] = inst_25657);

(statearr_25717_25759[(1)] = (19));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25678 === (8))){
var inst_25619 = (state_25677[(7)]);
var state_25677__$1 = state_25677;
var statearr_25718_25760 = state_25677__$1;
(statearr_25718_25760[(2)] = inst_25619);

(statearr_25718_25760[(1)] = (9));


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
});})(c__5853__auto___25730,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__5838__auto__,c__5853__auto___25730,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_25722 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25722[(0)] = state_machine__5839__auto__);

(statearr_25722[(1)] = (1));

return statearr_25722;
});
var state_machine__5839__auto____1 = (function (state_25677){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_25677);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e25723){if((e25723 instanceof Object)){
var ex__5842__auto__ = e25723;
var statearr_25724_25761 = state_25677;
(statearr_25724_25761[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25677);

return cljs.core.constant$keyword$41;
} else {
throw e25723;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__25762 = state_25677;
state_25677 = G__25762;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_25677){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_25677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___25730,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__5855__auto__ = (function (){var statearr_25725 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_25725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___25730);

return statearr_25725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___25730,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj25764 = {};
return obj25764;
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
return (function (){var or__3630__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__25768 = x__4274__auto__;
return goog.typeOf(G__25768);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__25772 = x__4274__auto__;
return goog.typeOf(G__25772);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__25778 = x__4274__auto__;
return goog.typeOf(G__25778);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__25780 = x__4274__auto__;
return goog.typeOf(G__25780);
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
var mults = (function (){var G__25919 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25919) : cljs.core.atom.call(null,G__25919));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__3630__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__25921 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25921) : cljs.core.deref.call(null,G__25921));
})(),topic);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3630__auto__,mults){
return (function (p1__25781_SHARP_){
if(cljs.core.truth_((function (){var G__25922 = topic;
return (p1__25781_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25781_SHARP_.cljs$core$IFn$_invoke$arity$1(G__25922) : p1__25781_SHARP_.call(null,G__25922));
})())){
return p1__25781_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25781_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__25923 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__25923) : buf_fn.call(null,G__25923));
})())));
}
});})(or__3630__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t25924 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25924 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25925){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25925 = meta25925;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25924.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t25924.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__25927 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__25927) : self__.ensure_mult.call(null,G__25927));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t25924.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__25928 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25928) : cljs.core.deref.call(null,G__25928));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t25924.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25929 = self__.mults;
var G__25930 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25929,G__25930) : cljs.core.reset_BANG_.call(null,G__25929,G__25930));
});})(mults,ensure_mult))
;

cljs.core.async.t25924.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t25924.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25924.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t25924.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25926){
var self__ = this;
var _25926__$1 = this;
return self__.meta25925;
});})(mults,ensure_mult))
;

cljs.core.async.t25924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25926,meta25925__$1){
var self__ = this;
var _25926__$1 = this;
return (new cljs.core.async.t25924(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25925__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t25924.cljs$lang$type = true;

cljs.core.async.t25924.cljs$lang$ctorStr = "cljs.core.async/t25924";

cljs.core.async.t25924.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25924");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t25924 = ((function (mults,ensure_mult){
return (function __GT_t25924(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25925){
return (new cljs.core.async.t25924(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25925));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t25924(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,65,cljs.core.constant$keyword$9,603,cljs.core.constant$keyword$10,14,cljs.core.constant$keyword$11,591,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
;
var c__5853__auto___26053 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___26053,mults,ensure_mult,p){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___26053,mults,ensure_mult,p){
return (function (state_26002){
var state_val_26003 = (state_26002[(1)]);
if((state_val_26003 === (7))){
var inst_25998 = (state_26002[(2)]);
var state_26002__$1 = state_26002;
var statearr_26004_26054 = state_26002__$1;
(statearr_26004_26054[(2)] = inst_25998);

(statearr_26004_26054[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26003 === (20))){
var state_26002__$1 = state_26002;
var statearr_26005_26055 = state_26002__$1;
(statearr_26005_26055[(2)] = null);

(statearr_26005_26055[(1)] = (21));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26003 === (1))){
var state_26002__$1 = state_26002;
var statearr_26006_26056 = state_26002__$1;
(statearr_26006_26056[(2)] = null);

(statearr_26006_26056[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26003 === (24))){
var inst_25981 = (state_26002[(7)]);
var inst_25990 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25981);
var state_26002__$1 = state_26002;
var statearr_26007_26057 = state_26002__$1;
(statearr_26007_26057[(2)] = inst_25990);

(statearr_26007_26057[(1)] = (25));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26003 === (4))){
var inst_25933 = (state_26002[(8)]);
var inst_25933__$1 = (state_26002[(2)]);
var inst_25934 = (inst_25933__$1 == null);
var state_26002__$1 = (function (){var statearr_26008 = state_26002;
(statearr_26008[(8)] = inst_25933__$1);

return statearr_26008;
})();
if(cljs.core.truth_(inst_25934)){
var statearr_26009_26058 = state_26002__$1;
(statearr_26009_26058[(1)] = (5));

} else {
var statearr_26010_26059 = state_26002__$1;
(statearr_26010_26059[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26003 === (15))){
var inst_25975 = (state_26002[(2)]);
var state_26002__$1 = state_26002;
var statearr_26011_26060 = state_26002__$1;
(statearr_26011_26060[(2)] = inst_25975);

(statearr_26011_26060[(1)] = (12));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26003 === (21))){
var inst_25995 = (state_26002[(2)]);
var state_26002__$1 = (function (){var statearr_26012 = state_26002;
(statearr_26012[(9)] = inst_25995);

return statearr_26012;
})();
var statearr_26013_26061 = state_26002__$1;
(statearr_26013_26061[(2)] = null);

(statearr_26013_26061[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26003 === (13))){
var inst_25957 = (state_26002[(10)]);
var inst_25959 = cljs.core.chunked_seq_QMARK_(inst_25957);
var state_26002__$1 = state_26002;
if(inst_25959){
var statearr_26014_26062 = state_26002__$1;
(statearr_26014_26062[(1)] = (16));

} else {
var statearr_26015_26063 = state_26002__$1;
(statearr_26015_26063[(1)] = (17));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26003 === (22))){
var inst_25987 = (state_26002[(2)]);
var state_26002__$1 = state_26002;
if(cljs.core.truth_(inst_25987)){
var statearr_26016_26064 = state_26002__$1;
(statearr_26016_26064[(1)] = (23));

} else {
var statearr_26017_26065 = state_26002__$1;
(statearr_26017_26065[(1)] = (24));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26003 === (6))){
var inst_25983 = (state_26002[(11)]);
var inst_25933 = (state_26002[(8)]);
var inst_25981 = (state_26002[(7)]);
var inst_25981__$1 = (function (){var G__26018 = inst_25933;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__26018) : topic_fn.call(null,G__26018));
})();
var inst_25982 = (function (){var G__26019 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26019) : cljs.core.deref.call(null,G__26019));
})();
var inst_25983__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25982,inst_25981__$1);
var state_26002__$1 = (function (){var statearr_26020 = state_26002;
(statearr_26020[(11)] = inst_25983__$1);

(statearr_26020[(7)] = inst_25981__$1);

return statearr_26020;
})();
if(cljs.core.truth_(inst_25983__$1)){
var statearr_26021_26066 = state_26002__$1;
(statearr_26021_26066[(1)] = (19));

} else {
var statearr_26022_26067 = state_26002__$1;
(statearr_26022_26067[(1)] = (20));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26003 === (25))){
var inst_25992 = (state_26002[(2)]);
var state_26002__$1 = state_26002;
var statearr_26023_26068 = state_26002__$1;
(statearr_26023_26068[(2)] = inst_25992);

(statearr_26023_26068[(1)] = (21));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26003 === (17))){
var inst_25957 = (state_26002[(10)]);
var inst_25966 = cljs.core.first(inst_25957);
var inst_25967 = cljs.core.async.muxch_STAR_(inst_25966);
var inst_25968 = cljs.core.async.close_BANG_(inst_25967);
var inst_25969 = cljs.core.next(inst_25957);
var inst_25943 = inst_25969;
var inst_25944 = null;
var inst_25945 = (0);
var inst_25946 = (0);
var state_26002__$1 = (function (){var statearr_26024 = state_26002;
(statearr_26024[(12)] = inst_25946);

(statearr_26024[(13)] = inst_25968);

(statearr_26024[(14)] = inst_25943);

(statearr_26024[(15)] = inst_25944);

(statearr_26024[(16)] = inst_25945);

return statearr_26024;
})();
var statearr_26025_26069 = state_26002__$1;
(statearr_26025_26069[(2)] = null);

(statearr_26025_26069[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26003 === (3))){
var inst_26000 = (state_26002[(2)]);
var state_26002__$1 = state_26002;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26002__$1,inst_26000);
} else {
if((state_val_26003 === (12))){
var inst_25977 = (state_26002[(2)]);
var state_26002__$1 = state_26002;
var statearr_26026_26070 = state_26002__$1;
(statearr_26026_26070[(2)] = inst_25977);

(statearr_26026_26070[(1)] = (9));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26003 === (2))){
var state_26002__$1 = state_26002;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26002__$1,(4),ch);
} else {
if((state_val_26003 === (23))){
var state_26002__$1 = state_26002;
var statearr_26027_26071 = state_26002__$1;
(statearr_26027_26071[(2)] = null);

(statearr_26027_26071[(1)] = (25));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26003 === (19))){
var inst_25983 = (state_26002[(11)]);
var inst_25933 = (state_26002[(8)]);
var inst_25985 = cljs.core.async.muxch_STAR_(inst_25983);
var state_26002__$1 = state_26002;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26002__$1,(22),inst_25985,inst_25933);
} else {
if((state_val_26003 === (11))){
var inst_25943 = (state_26002[(14)]);
var inst_25957 = (state_26002[(10)]);
var inst_25957__$1 = cljs.core.seq(inst_25943);
var state_26002__$1 = (function (){var statearr_26028 = state_26002;
(statearr_26028[(10)] = inst_25957__$1);

return statearr_26028;
})();
if(inst_25957__$1){
var statearr_26029_26072 = state_26002__$1;
(statearr_26029_26072[(1)] = (13));

} else {
var statearr_26030_26073 = state_26002__$1;
(statearr_26030_26073[(1)] = (14));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26003 === (9))){
var inst_25979 = (state_26002[(2)]);
var state_26002__$1 = state_26002;
var statearr_26031_26074 = state_26002__$1;
(statearr_26031_26074[(2)] = inst_25979);

(statearr_26031_26074[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26003 === (5))){
var inst_25940 = (function (){var G__26032 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26032) : cljs.core.deref.call(null,G__26032));
})();
var inst_25941 = cljs.core.vals(inst_25940);
var inst_25942 = cljs.core.seq(inst_25941);
var inst_25943 = inst_25942;
var inst_25944 = null;
var inst_25945 = (0);
var inst_25946 = (0);
var state_26002__$1 = (function (){var statearr_26033 = state_26002;
(statearr_26033[(12)] = inst_25946);

(statearr_26033[(14)] = inst_25943);

(statearr_26033[(15)] = inst_25944);

(statearr_26033[(16)] = inst_25945);

return statearr_26033;
})();
var statearr_26034_26075 = state_26002__$1;
(statearr_26034_26075[(2)] = null);

(statearr_26034_26075[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26003 === (14))){
var state_26002__$1 = state_26002;
var statearr_26038_26076 = state_26002__$1;
(statearr_26038_26076[(2)] = null);

(statearr_26038_26076[(1)] = (15));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26003 === (16))){
var inst_25957 = (state_26002[(10)]);
var inst_25961 = cljs.core.chunk_first(inst_25957);
var inst_25962 = cljs.core.chunk_rest(inst_25957);
var inst_25963 = cljs.core.count(inst_25961);
var inst_25943 = inst_25962;
var inst_25944 = inst_25961;
var inst_25945 = inst_25963;
var inst_25946 = (0);
var state_26002__$1 = (function (){var statearr_26039 = state_26002;
(statearr_26039[(12)] = inst_25946);

(statearr_26039[(14)] = inst_25943);

(statearr_26039[(15)] = inst_25944);

(statearr_26039[(16)] = inst_25945);

return statearr_26039;
})();
var statearr_26040_26077 = state_26002__$1;
(statearr_26040_26077[(2)] = null);

(statearr_26040_26077[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26003 === (10))){
var inst_25946 = (state_26002[(12)]);
var inst_25943 = (state_26002[(14)]);
var inst_25944 = (state_26002[(15)]);
var inst_25945 = (state_26002[(16)]);
var inst_25951 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25944,inst_25946);
var inst_25952 = cljs.core.async.muxch_STAR_(inst_25951);
var inst_25953 = cljs.core.async.close_BANG_(inst_25952);
var inst_25954 = (inst_25946 + (1));
var tmp26035 = inst_25943;
var tmp26036 = inst_25944;
var tmp26037 = inst_25945;
var inst_25943__$1 = tmp26035;
var inst_25944__$1 = tmp26036;
var inst_25945__$1 = tmp26037;
var inst_25946__$1 = inst_25954;
var state_26002__$1 = (function (){var statearr_26041 = state_26002;
(statearr_26041[(12)] = inst_25946__$1);

(statearr_26041[(14)] = inst_25943__$1);

(statearr_26041[(15)] = inst_25944__$1);

(statearr_26041[(16)] = inst_25945__$1);

(statearr_26041[(17)] = inst_25953);

return statearr_26041;
})();
var statearr_26042_26078 = state_26002__$1;
(statearr_26042_26078[(2)] = null);

(statearr_26042_26078[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26003 === (18))){
var inst_25972 = (state_26002[(2)]);
var state_26002__$1 = state_26002;
var statearr_26043_26079 = state_26002__$1;
(statearr_26043_26079[(2)] = inst_25972);

(statearr_26043_26079[(1)] = (15));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26003 === (8))){
var inst_25946 = (state_26002[(12)]);
var inst_25945 = (state_26002[(16)]);
var inst_25948 = (inst_25946 < inst_25945);
var inst_25949 = inst_25948;
var state_26002__$1 = state_26002;
if(cljs.core.truth_(inst_25949)){
var statearr_26044_26080 = state_26002__$1;
(statearr_26044_26080[(1)] = (10));

} else {
var statearr_26045_26081 = state_26002__$1;
(statearr_26045_26081[(1)] = (11));

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
});})(c__5853__auto___26053,mults,ensure_mult,p))
;
return ((function (switch__5838__auto__,c__5853__auto___26053,mults,ensure_mult,p){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_26049 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26049[(0)] = state_machine__5839__auto__);

(statearr_26049[(1)] = (1));

return statearr_26049;
});
var state_machine__5839__auto____1 = (function (state_26002){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_26002);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e26050){if((e26050 instanceof Object)){
var ex__5842__auto__ = e26050;
var statearr_26051_26082 = state_26002;
(statearr_26051_26082[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26002);

return cljs.core.constant$keyword$41;
} else {
throw e26050;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__26083 = state_26002;
state_26002 = G__26083;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_26002){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_26002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___26053,mults,ensure_mult,p))
})();
var state__5855__auto__ = (function (){var statearr_26052 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_26052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___26053);

return statearr_26052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___26053,mults,ensure_mult,p))
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
var dctr = (function (){var G__26164 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26164) : cljs.core.atom.call(null,G__26164));
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
var c__5853__auto___26237 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___26237,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___26237,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26203){
var state_val_26204 = (state_26203[(1)]);
if((state_val_26204 === (7))){
var state_26203__$1 = state_26203;
var statearr_26205_26238 = state_26203__$1;
(statearr_26205_26238[(2)] = null);

(statearr_26205_26238[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26204 === (1))){
var state_26203__$1 = state_26203;
var statearr_26206_26239 = state_26203__$1;
(statearr_26206_26239[(2)] = null);

(statearr_26206_26239[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26204 === (4))){
var inst_26167 = (state_26203[(7)]);
var inst_26169 = (inst_26167 < cnt);
var state_26203__$1 = state_26203;
if(cljs.core.truth_(inst_26169)){
var statearr_26207_26240 = state_26203__$1;
(statearr_26207_26240[(1)] = (6));

} else {
var statearr_26208_26241 = state_26203__$1;
(statearr_26208_26241[(1)] = (7));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26204 === (15))){
var inst_26199 = (state_26203[(2)]);
var state_26203__$1 = state_26203;
var statearr_26209_26242 = state_26203__$1;
(statearr_26209_26242[(2)] = inst_26199);

(statearr_26209_26242[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26204 === (13))){
var inst_26192 = cljs.core.async.close_BANG_(out);
var state_26203__$1 = state_26203;
var statearr_26210_26243 = state_26203__$1;
(statearr_26210_26243[(2)] = inst_26192);

(statearr_26210_26243[(1)] = (15));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26204 === (6))){
var state_26203__$1 = state_26203;
var statearr_26211_26244 = state_26203__$1;
(statearr_26211_26244[(2)] = null);

(statearr_26211_26244[(1)] = (11));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26204 === (3))){
var inst_26201 = (state_26203[(2)]);
var state_26203__$1 = state_26203;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26203__$1,inst_26201);
} else {
if((state_val_26204 === (12))){
var inst_26189 = (state_26203[(8)]);
var inst_26189__$1 = (state_26203[(2)]);
var inst_26190 = cljs.core.some(cljs.core.nil_QMARK_,inst_26189__$1);
var state_26203__$1 = (function (){var statearr_26212 = state_26203;
(statearr_26212[(8)] = inst_26189__$1);

return statearr_26212;
})();
if(cljs.core.truth_(inst_26190)){
var statearr_26213_26245 = state_26203__$1;
(statearr_26213_26245[(1)] = (13));

} else {
var statearr_26214_26246 = state_26203__$1;
(statearr_26214_26246[(1)] = (14));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26204 === (2))){
var inst_26166 = (function (){var G__26215 = dctr;
var G__26216 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26215,G__26216) : cljs.core.reset_BANG_.call(null,G__26215,G__26216));
})();
var inst_26167 = (0);
var state_26203__$1 = (function (){var statearr_26217 = state_26203;
(statearr_26217[(9)] = inst_26166);

(statearr_26217[(7)] = inst_26167);

return statearr_26217;
})();
var statearr_26218_26247 = state_26203__$1;
(statearr_26218_26247[(2)] = null);

(statearr_26218_26247[(1)] = (4));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26204 === (11))){
var inst_26167 = (state_26203[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_26203,(10),Object,null,(9));
var inst_26176 = (function (){var G__26219 = inst_26167;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__26219) : chs__$1.call(null,G__26219));
})();
var inst_26177 = (function (){var G__26220 = inst_26167;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__26220) : done.call(null,G__26220));
})();
var inst_26178 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_26176,inst_26177);
var state_26203__$1 = state_26203;
var statearr_26221_26248 = state_26203__$1;
(statearr_26221_26248[(2)] = inst_26178);


cljs.core.async.impl.ioc_helpers.process_exception(state_26203__$1);

return cljs.core.constant$keyword$41;
} else {
if((state_val_26204 === (9))){
var inst_26167 = (state_26203[(7)]);
var inst_26180 = (state_26203[(2)]);
var inst_26181 = (inst_26167 + (1));
var inst_26167__$1 = inst_26181;
var state_26203__$1 = (function (){var statearr_26222 = state_26203;
(statearr_26222[(10)] = inst_26180);

(statearr_26222[(7)] = inst_26167__$1);

return statearr_26222;
})();
var statearr_26223_26249 = state_26203__$1;
(statearr_26223_26249[(2)] = null);

(statearr_26223_26249[(1)] = (4));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26204 === (5))){
var inst_26187 = (state_26203[(2)]);
var state_26203__$1 = (function (){var statearr_26224 = state_26203;
(statearr_26224[(11)] = inst_26187);

return statearr_26224;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26203__$1,(12),dchan);
} else {
if((state_val_26204 === (14))){
var inst_26189 = (state_26203[(8)]);
var inst_26194 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_26189);
var state_26203__$1 = state_26203;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26203__$1,(16),out,inst_26194);
} else {
if((state_val_26204 === (16))){
var inst_26196 = (state_26203[(2)]);
var state_26203__$1 = (function (){var statearr_26225 = state_26203;
(statearr_26225[(12)] = inst_26196);

return statearr_26225;
})();
var statearr_26226_26250 = state_26203__$1;
(statearr_26226_26250[(2)] = null);

(statearr_26226_26250[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26204 === (10))){
var inst_26171 = (state_26203[(2)]);
var inst_26172 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_26203__$1 = (function (){var statearr_26227 = state_26203;
(statearr_26227[(13)] = inst_26171);

return statearr_26227;
})();
var statearr_26228_26251 = state_26203__$1;
(statearr_26228_26251[(2)] = inst_26172);


cljs.core.async.impl.ioc_helpers.process_exception(state_26203__$1);

return cljs.core.constant$keyword$41;
} else {
if((state_val_26204 === (8))){
var inst_26185 = (state_26203[(2)]);
var state_26203__$1 = state_26203;
var statearr_26229_26252 = state_26203__$1;
(statearr_26229_26252[(2)] = inst_26185);

(statearr_26229_26252[(1)] = (5));


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
});})(c__5853__auto___26237,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__5838__auto__,c__5853__auto___26237,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_26233 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26233[(0)] = state_machine__5839__auto__);

(statearr_26233[(1)] = (1));

return statearr_26233;
});
var state_machine__5839__auto____1 = (function (state_26203){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_26203);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e26234){if((e26234 instanceof Object)){
var ex__5842__auto__ = e26234;
var statearr_26235_26253 = state_26203;
(statearr_26235_26253[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26203);

return cljs.core.constant$keyword$41;
} else {
throw e26234;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__26254 = state_26203;
state_26203 = G__26254;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_26203){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_26203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___26237,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__5855__auto__ = (function (){var statearr_26236 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_26236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___26237);

return statearr_26236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___26237,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__5853__auto___26364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___26364,out){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___26364,out){
return (function (state_26340){
var state_val_26341 = (state_26340[(1)]);
if((state_val_26341 === (7))){
var inst_26319 = (state_26340[(7)]);
var inst_26320 = (state_26340[(8)]);
var inst_26319__$1 = (state_26340[(2)]);
var inst_26320__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26319__$1,(0),null);
var inst_26321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26319__$1,(1),null);
var inst_26322 = (inst_26320__$1 == null);
var state_26340__$1 = (function (){var statearr_26342 = state_26340;
(statearr_26342[(7)] = inst_26319__$1);

(statearr_26342[(8)] = inst_26320__$1);

(statearr_26342[(9)] = inst_26321);

return statearr_26342;
})();
if(cljs.core.truth_(inst_26322)){
var statearr_26343_26365 = state_26340__$1;
(statearr_26343_26365[(1)] = (8));

} else {
var statearr_26344_26366 = state_26340__$1;
(statearr_26344_26366[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26341 === (1))){
var inst_26311 = cljs.core.vec(chs);
var inst_26312 = inst_26311;
var state_26340__$1 = (function (){var statearr_26345 = state_26340;
(statearr_26345[(10)] = inst_26312);

return statearr_26345;
})();
var statearr_26346_26367 = state_26340__$1;
(statearr_26346_26367[(2)] = null);

(statearr_26346_26367[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26341 === (4))){
var inst_26312 = (state_26340[(10)]);
var state_26340__$1 = state_26340;
return cljs.core.async.ioc_alts_BANG_(state_26340__$1,(7),inst_26312);
} else {
if((state_val_26341 === (6))){
var inst_26336 = (state_26340[(2)]);
var state_26340__$1 = state_26340;
var statearr_26347_26368 = state_26340__$1;
(statearr_26347_26368[(2)] = inst_26336);

(statearr_26347_26368[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26341 === (3))){
var inst_26338 = (state_26340[(2)]);
var state_26340__$1 = state_26340;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26340__$1,inst_26338);
} else {
if((state_val_26341 === (2))){
var inst_26312 = (state_26340[(10)]);
var inst_26314 = cljs.core.count(inst_26312);
var inst_26315 = (inst_26314 > (0));
var state_26340__$1 = state_26340;
if(cljs.core.truth_(inst_26315)){
var statearr_26349_26369 = state_26340__$1;
(statearr_26349_26369[(1)] = (4));

} else {
var statearr_26350_26370 = state_26340__$1;
(statearr_26350_26370[(1)] = (5));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26341 === (11))){
var inst_26312 = (state_26340[(10)]);
var inst_26329 = (state_26340[(2)]);
var tmp26348 = inst_26312;
var inst_26312__$1 = tmp26348;
var state_26340__$1 = (function (){var statearr_26351 = state_26340;
(statearr_26351[(10)] = inst_26312__$1);

(statearr_26351[(11)] = inst_26329);

return statearr_26351;
})();
var statearr_26352_26371 = state_26340__$1;
(statearr_26352_26371[(2)] = null);

(statearr_26352_26371[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26341 === (9))){
var inst_26320 = (state_26340[(8)]);
var state_26340__$1 = state_26340;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26340__$1,(11),out,inst_26320);
} else {
if((state_val_26341 === (5))){
var inst_26334 = cljs.core.async.close_BANG_(out);
var state_26340__$1 = state_26340;
var statearr_26353_26372 = state_26340__$1;
(statearr_26353_26372[(2)] = inst_26334);

(statearr_26353_26372[(1)] = (6));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26341 === (10))){
var inst_26332 = (state_26340[(2)]);
var state_26340__$1 = state_26340;
var statearr_26354_26373 = state_26340__$1;
(statearr_26354_26373[(2)] = inst_26332);

(statearr_26354_26373[(1)] = (6));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26341 === (8))){
var inst_26319 = (state_26340[(7)]);
var inst_26312 = (state_26340[(10)]);
var inst_26320 = (state_26340[(8)]);
var inst_26321 = (state_26340[(9)]);
var inst_26324 = (function (){var c = inst_26321;
var v = inst_26320;
var vec__26317 = inst_26319;
var cs = inst_26312;
return ((function (c,v,vec__26317,cs,inst_26319,inst_26312,inst_26320,inst_26321,state_val_26341,c__5853__auto___26364,out){
return (function (p1__26255_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26255_SHARP_);
});
;})(c,v,vec__26317,cs,inst_26319,inst_26312,inst_26320,inst_26321,state_val_26341,c__5853__auto___26364,out))
})();
var inst_26325 = cljs.core.filterv(inst_26324,inst_26312);
var inst_26312__$1 = inst_26325;
var state_26340__$1 = (function (){var statearr_26355 = state_26340;
(statearr_26355[(10)] = inst_26312__$1);

return statearr_26355;
})();
var statearr_26356_26374 = state_26340__$1;
(statearr_26356_26374[(2)] = null);

(statearr_26356_26374[(1)] = (2));


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
});})(c__5853__auto___26364,out))
;
return ((function (switch__5838__auto__,c__5853__auto___26364,out){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_26360 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26360[(0)] = state_machine__5839__auto__);

(statearr_26360[(1)] = (1));

return statearr_26360;
});
var state_machine__5839__auto____1 = (function (state_26340){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_26340);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e26361){if((e26361 instanceof Object)){
var ex__5842__auto__ = e26361;
var statearr_26362_26375 = state_26340;
(statearr_26362_26375[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26340);

return cljs.core.constant$keyword$41;
} else {
throw e26361;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__26376 = state_26340;
state_26340 = G__26376;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_26340){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_26340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___26364,out))
})();
var state__5855__auto__ = (function (){var statearr_26363 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_26363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___26364);

return statearr_26363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___26364,out))
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
var c__5853__auto___26472 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___26472,out){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___26472,out){
return (function (state_26449){
var state_val_26450 = (state_26449[(1)]);
if((state_val_26450 === (7))){
var inst_26431 = (state_26449[(7)]);
var inst_26431__$1 = (state_26449[(2)]);
var inst_26432 = (inst_26431__$1 == null);
var inst_26433 = cljs.core.not(inst_26432);
var state_26449__$1 = (function (){var statearr_26451 = state_26449;
(statearr_26451[(7)] = inst_26431__$1);

return statearr_26451;
})();
if(inst_26433){
var statearr_26452_26473 = state_26449__$1;
(statearr_26452_26473[(1)] = (8));

} else {
var statearr_26453_26474 = state_26449__$1;
(statearr_26453_26474[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26450 === (1))){
var inst_26426 = (0);
var state_26449__$1 = (function (){var statearr_26454 = state_26449;
(statearr_26454[(8)] = inst_26426);

return statearr_26454;
})();
var statearr_26455_26475 = state_26449__$1;
(statearr_26455_26475[(2)] = null);

(statearr_26455_26475[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26450 === (4))){
var state_26449__$1 = state_26449;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26449__$1,(7),ch);
} else {
if((state_val_26450 === (6))){
var inst_26444 = (state_26449[(2)]);
var state_26449__$1 = state_26449;
var statearr_26456_26476 = state_26449__$1;
(statearr_26456_26476[(2)] = inst_26444);

(statearr_26456_26476[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26450 === (3))){
var inst_26446 = (state_26449[(2)]);
var inst_26447 = cljs.core.async.close_BANG_(out);
var state_26449__$1 = (function (){var statearr_26457 = state_26449;
(statearr_26457[(9)] = inst_26446);

return statearr_26457;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26449__$1,inst_26447);
} else {
if((state_val_26450 === (2))){
var inst_26426 = (state_26449[(8)]);
var inst_26428 = (inst_26426 < n);
var state_26449__$1 = state_26449;
if(cljs.core.truth_(inst_26428)){
var statearr_26458_26477 = state_26449__$1;
(statearr_26458_26477[(1)] = (4));

} else {
var statearr_26459_26478 = state_26449__$1;
(statearr_26459_26478[(1)] = (5));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26450 === (11))){
var inst_26426 = (state_26449[(8)]);
var inst_26436 = (state_26449[(2)]);
var inst_26437 = (inst_26426 + (1));
var inst_26426__$1 = inst_26437;
var state_26449__$1 = (function (){var statearr_26460 = state_26449;
(statearr_26460[(8)] = inst_26426__$1);

(statearr_26460[(10)] = inst_26436);

return statearr_26460;
})();
var statearr_26461_26479 = state_26449__$1;
(statearr_26461_26479[(2)] = null);

(statearr_26461_26479[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26450 === (9))){
var state_26449__$1 = state_26449;
var statearr_26462_26480 = state_26449__$1;
(statearr_26462_26480[(2)] = null);

(statearr_26462_26480[(1)] = (10));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26450 === (5))){
var state_26449__$1 = state_26449;
var statearr_26463_26481 = state_26449__$1;
(statearr_26463_26481[(2)] = null);

(statearr_26463_26481[(1)] = (6));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26450 === (10))){
var inst_26441 = (state_26449[(2)]);
var state_26449__$1 = state_26449;
var statearr_26464_26482 = state_26449__$1;
(statearr_26464_26482[(2)] = inst_26441);

(statearr_26464_26482[(1)] = (6));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26450 === (8))){
var inst_26431 = (state_26449[(7)]);
var state_26449__$1 = state_26449;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26449__$1,(11),out,inst_26431);
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
});})(c__5853__auto___26472,out))
;
return ((function (switch__5838__auto__,c__5853__auto___26472,out){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_26468 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26468[(0)] = state_machine__5839__auto__);

(statearr_26468[(1)] = (1));

return statearr_26468;
});
var state_machine__5839__auto____1 = (function (state_26449){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_26449);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e26469){if((e26469 instanceof Object)){
var ex__5842__auto__ = e26469;
var statearr_26470_26483 = state_26449;
(statearr_26470_26483[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26449);

return cljs.core.constant$keyword$41;
} else {
throw e26469;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__26484 = state_26449;
state_26449 = G__26484;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_26449){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_26449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___26472,out))
})();
var state__5855__auto__ = (function (){var statearr_26471 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_26471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___26472);

return statearr_26471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___26472,out))
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
if(typeof cljs.core.async.t26497 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26497 = (function (ch,f,map_LT_,meta26498){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26498 = meta26498;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26497.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26497.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t26497.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26497.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t26500 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26500 = (function (fn1,_,meta26498,map_LT_,f,ch,meta26501){
this.fn1 = fn1;
this._ = _;
this.meta26498 = meta26498;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26501 = meta26501;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26500.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26500.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t26500.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26485_SHARP_){
var G__26503 = (((p1__26485_SHARP_ == null))?null:(function (){var G__26504 = p1__26485_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26504) : self__.f.call(null,G__26504));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__26503) : f1.call(null,G__26503));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t26500.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26502){
var self__ = this;
var _26502__$1 = this;
return self__.meta26501;
});})(___$1))
;

cljs.core.async.t26500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26502,meta26501__$1){
var self__ = this;
var _26502__$1 = this;
return (new cljs.core.async.t26500(self__.fn1,self__._,self__.meta26498,self__.map_LT_,self__.f,self__.ch,meta26501__$1));
});})(___$1))
;

cljs.core.async.t26500.cljs$lang$type = true;

cljs.core.async.t26500.cljs$lang$ctorStr = "cljs.core.async/t26500";

cljs.core.async.t26500.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26500");
});})(___$1))
;

cljs.core.async.__GT_t26500 = ((function (___$1){
return (function __GT_t26500(fn1__$1,___$2,meta26498__$1,map_LT___$1,f__$1,ch__$1,meta26501){
return (new cljs.core.async.t26500(fn1__$1,___$2,meta26498__$1,map_LT___$1,f__$1,ch__$1,meta26501));
});})(___$1))
;

}

return (new cljs.core.async.t26500(fn1,___$1,self__.meta26498,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,737,cljs.core.constant$keyword$10,10,cljs.core.constant$keyword$11,731,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3618__auto__ = ret;
if(cljs.core.truth_(and__3618__auto__)){
return !(((function (){var G__26505 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26505) : cljs.core.deref.call(null,G__26505));
})() == null));
} else {
return and__3618__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__26506 = (function (){var G__26507 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26507) : cljs.core.deref.call(null,G__26507));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26506) : self__.f.call(null,G__26506));
})());
} else {
return ret;
}
});

cljs.core.async.t26497.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26497.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t26497.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t26497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26499){
var self__ = this;
var _26499__$1 = this;
return self__.meta26498;
});

cljs.core.async.t26497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26499,meta26498__$1){
var self__ = this;
var _26499__$1 = this;
return (new cljs.core.async.t26497(self__.ch,self__.f,self__.map_LT_,meta26498__$1));
});

cljs.core.async.t26497.cljs$lang$type = true;

cljs.core.async.t26497.cljs$lang$ctorStr = "cljs.core.async/t26497";

cljs.core.async.t26497.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26497");
});

cljs.core.async.__GT_t26497 = (function __GT_t26497(ch__$1,f__$1,map_LT___$1,meta26498){
return (new cljs.core.async.t26497(ch__$1,f__$1,map_LT___$1,meta26498));
});

}

return (new cljs.core.async.t26497(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,743,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,722,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t26512 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26512 = (function (ch,f,map_GT_,meta26513){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta26513 = meta26513;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26512.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26512.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__26515 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26515) : self__.f.call(null,G__26515));
})(),fn1);
});

cljs.core.async.t26512.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26512.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t26512.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26512.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t26512.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26514){
var self__ = this;
var _26514__$1 = this;
return self__.meta26513;
});

cljs.core.async.t26512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26514,meta26513__$1){
var self__ = this;
var _26514__$1 = this;
return (new cljs.core.async.t26512(self__.ch,self__.f,self__.map_GT_,meta26513__$1));
});

cljs.core.async.t26512.cljs$lang$type = true;

cljs.core.async.t26512.cljs$lang$ctorStr = "cljs.core.async/t26512";

cljs.core.async.t26512.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26512");
});

cljs.core.async.__GT_t26512 = (function __GT_t26512(ch__$1,f__$1,map_GT___$1,meta26513){
return (new cljs.core.async.t26512(ch__$1,f__$1,map_GT___$1,meta26513));
});

}

return (new cljs.core.async.t26512(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,34,cljs.core.constant$keyword$9,757,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,748,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t26520 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26520 = (function (ch,p,filter_GT_,meta26521){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta26521 = meta26521;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26520.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26520.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__26523 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__26523) : self__.p.call(null,G__26523));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t26520.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26520.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t26520.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26520.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t26520.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t26520.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26522){
var self__ = this;
var _26522__$1 = this;
return self__.meta26521;
});

cljs.core.async.t26520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26522,meta26521__$1){
var self__ = this;
var _26522__$1 = this;
return (new cljs.core.async.t26520(self__.ch,self__.p,self__.filter_GT_,meta26521__$1));
});

cljs.core.async.t26520.cljs$lang$type = true;

cljs.core.async.t26520.cljs$lang$ctorStr = "cljs.core.async/t26520";

cljs.core.async.t26520.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26520");
});

cljs.core.async.__GT_t26520 = (function __GT_t26520(ch__$1,p__$1,filter_GT___$1,meta26521){
return (new cljs.core.async.t26520(ch__$1,p__$1,filter_GT___$1,meta26521));
});

}

return (new cljs.core.async.t26520(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,774,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,762,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
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
var c__5853__auto___26611 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___26611,out){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___26611,out){
return (function (state_26589){
var state_val_26590 = (state_26589[(1)]);
if((state_val_26590 === (7))){
var inst_26585 = (state_26589[(2)]);
var state_26589__$1 = state_26589;
var statearr_26591_26612 = state_26589__$1;
(statearr_26591_26612[(2)] = inst_26585);

(statearr_26591_26612[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26590 === (1))){
var state_26589__$1 = state_26589;
var statearr_26592_26613 = state_26589__$1;
(statearr_26592_26613[(2)] = null);

(statearr_26592_26613[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26590 === (4))){
var inst_26571 = (state_26589[(7)]);
var inst_26571__$1 = (state_26589[(2)]);
var inst_26572 = (inst_26571__$1 == null);
var state_26589__$1 = (function (){var statearr_26593 = state_26589;
(statearr_26593[(7)] = inst_26571__$1);

return statearr_26593;
})();
if(cljs.core.truth_(inst_26572)){
var statearr_26594_26614 = state_26589__$1;
(statearr_26594_26614[(1)] = (5));

} else {
var statearr_26595_26615 = state_26589__$1;
(statearr_26595_26615[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26590 === (6))){
var inst_26571 = (state_26589[(7)]);
var inst_26576 = (function (){var G__26596 = inst_26571;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__26596) : p.call(null,G__26596));
})();
var state_26589__$1 = state_26589;
if(cljs.core.truth_(inst_26576)){
var statearr_26597_26616 = state_26589__$1;
(statearr_26597_26616[(1)] = (8));

} else {
var statearr_26598_26617 = state_26589__$1;
(statearr_26598_26617[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26590 === (3))){
var inst_26587 = (state_26589[(2)]);
var state_26589__$1 = state_26589;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26589__$1,inst_26587);
} else {
if((state_val_26590 === (2))){
var state_26589__$1 = state_26589;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26589__$1,(4),ch);
} else {
if((state_val_26590 === (11))){
var inst_26579 = (state_26589[(2)]);
var state_26589__$1 = state_26589;
var statearr_26599_26618 = state_26589__$1;
(statearr_26599_26618[(2)] = inst_26579);

(statearr_26599_26618[(1)] = (10));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26590 === (9))){
var state_26589__$1 = state_26589;
var statearr_26600_26619 = state_26589__$1;
(statearr_26600_26619[(2)] = null);

(statearr_26600_26619[(1)] = (10));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26590 === (5))){
var inst_26574 = cljs.core.async.close_BANG_(out);
var state_26589__$1 = state_26589;
var statearr_26601_26620 = state_26589__$1;
(statearr_26601_26620[(2)] = inst_26574);

(statearr_26601_26620[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26590 === (10))){
var inst_26582 = (state_26589[(2)]);
var state_26589__$1 = (function (){var statearr_26602 = state_26589;
(statearr_26602[(8)] = inst_26582);

return statearr_26602;
})();
var statearr_26603_26621 = state_26589__$1;
(statearr_26603_26621[(2)] = null);

(statearr_26603_26621[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26590 === (8))){
var inst_26571 = (state_26589[(7)]);
var state_26589__$1 = state_26589;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26589__$1,(11),out,inst_26571);
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
});})(c__5853__auto___26611,out))
;
return ((function (switch__5838__auto__,c__5853__auto___26611,out){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_26607 = [null,null,null,null,null,null,null,null,null];
(statearr_26607[(0)] = state_machine__5839__auto__);

(statearr_26607[(1)] = (1));

return statearr_26607;
});
var state_machine__5839__auto____1 = (function (state_26589){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_26589);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e26608){if((e26608 instanceof Object)){
var ex__5842__auto__ = e26608;
var statearr_26609_26622 = state_26589;
(statearr_26609_26622[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26589);

return cljs.core.constant$keyword$41;
} else {
throw e26608;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__26623 = state_26589;
state_26589 = G__26623;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_26589){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_26589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___26611,out))
})();
var state__5855__auto__ = (function (){var statearr_26610 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_26610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___26611);

return statearr_26610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___26611,out))
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
return (function (state_26793){
var state_val_26794 = (state_26793[(1)]);
if((state_val_26794 === (7))){
var inst_26789 = (state_26793[(2)]);
var state_26793__$1 = state_26793;
var statearr_26795_26837 = state_26793__$1;
(statearr_26795_26837[(2)] = inst_26789);

(statearr_26795_26837[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26794 === (20))){
var inst_26759 = (state_26793[(7)]);
var inst_26770 = (state_26793[(2)]);
var inst_26771 = cljs.core.next(inst_26759);
var inst_26745 = inst_26771;
var inst_26746 = null;
var inst_26747 = (0);
var inst_26748 = (0);
var state_26793__$1 = (function (){var statearr_26796 = state_26793;
(statearr_26796[(8)] = inst_26745);

(statearr_26796[(9)] = inst_26770);

(statearr_26796[(10)] = inst_26748);

(statearr_26796[(11)] = inst_26747);

(statearr_26796[(12)] = inst_26746);

return statearr_26796;
})();
var statearr_26797_26838 = state_26793__$1;
(statearr_26797_26838[(2)] = null);

(statearr_26797_26838[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26794 === (1))){
var state_26793__$1 = state_26793;
var statearr_26798_26839 = state_26793__$1;
(statearr_26798_26839[(2)] = null);

(statearr_26798_26839[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26794 === (4))){
var inst_26734 = (state_26793[(13)]);
var inst_26734__$1 = (state_26793[(2)]);
var inst_26735 = (inst_26734__$1 == null);
var state_26793__$1 = (function (){var statearr_26799 = state_26793;
(statearr_26799[(13)] = inst_26734__$1);

return statearr_26799;
})();
if(cljs.core.truth_(inst_26735)){
var statearr_26800_26840 = state_26793__$1;
(statearr_26800_26840[(1)] = (5));

} else {
var statearr_26801_26841 = state_26793__$1;
(statearr_26801_26841[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26794 === (15))){
var state_26793__$1 = state_26793;
var statearr_26805_26842 = state_26793__$1;
(statearr_26805_26842[(2)] = null);

(statearr_26805_26842[(1)] = (16));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26794 === (21))){
var state_26793__$1 = state_26793;
var statearr_26806_26843 = state_26793__$1;
(statearr_26806_26843[(2)] = null);

(statearr_26806_26843[(1)] = (23));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26794 === (13))){
var inst_26745 = (state_26793[(8)]);
var inst_26748 = (state_26793[(10)]);
var inst_26747 = (state_26793[(11)]);
var inst_26746 = (state_26793[(12)]);
var inst_26755 = (state_26793[(2)]);
var inst_26756 = (inst_26748 + (1));
var tmp26802 = inst_26745;
var tmp26803 = inst_26747;
var tmp26804 = inst_26746;
var inst_26745__$1 = tmp26802;
var inst_26746__$1 = tmp26804;
var inst_26747__$1 = tmp26803;
var inst_26748__$1 = inst_26756;
var state_26793__$1 = (function (){var statearr_26807 = state_26793;
(statearr_26807[(8)] = inst_26745__$1);

(statearr_26807[(14)] = inst_26755);

(statearr_26807[(10)] = inst_26748__$1);

(statearr_26807[(11)] = inst_26747__$1);

(statearr_26807[(12)] = inst_26746__$1);

return statearr_26807;
})();
var statearr_26808_26844 = state_26793__$1;
(statearr_26808_26844[(2)] = null);

(statearr_26808_26844[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26794 === (22))){
var state_26793__$1 = state_26793;
var statearr_26809_26845 = state_26793__$1;
(statearr_26809_26845[(2)] = null);

(statearr_26809_26845[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26794 === (6))){
var inst_26734 = (state_26793[(13)]);
var inst_26743 = (function (){var G__26810 = inst_26734;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26810) : f.call(null,G__26810));
})();
var inst_26744 = cljs.core.seq(inst_26743);
var inst_26745 = inst_26744;
var inst_26746 = null;
var inst_26747 = (0);
var inst_26748 = (0);
var state_26793__$1 = (function (){var statearr_26811 = state_26793;
(statearr_26811[(8)] = inst_26745);

(statearr_26811[(10)] = inst_26748);

(statearr_26811[(11)] = inst_26747);

(statearr_26811[(12)] = inst_26746);

return statearr_26811;
})();
var statearr_26812_26846 = state_26793__$1;
(statearr_26812_26846[(2)] = null);

(statearr_26812_26846[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26794 === (17))){
var inst_26759 = (state_26793[(7)]);
var inst_26763 = cljs.core.chunk_first(inst_26759);
var inst_26764 = cljs.core.chunk_rest(inst_26759);
var inst_26765 = cljs.core.count(inst_26763);
var inst_26745 = inst_26764;
var inst_26746 = inst_26763;
var inst_26747 = inst_26765;
var inst_26748 = (0);
var state_26793__$1 = (function (){var statearr_26813 = state_26793;
(statearr_26813[(8)] = inst_26745);

(statearr_26813[(10)] = inst_26748);

(statearr_26813[(11)] = inst_26747);

(statearr_26813[(12)] = inst_26746);

return statearr_26813;
})();
var statearr_26814_26847 = state_26793__$1;
(statearr_26814_26847[(2)] = null);

(statearr_26814_26847[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26794 === (3))){
var inst_26791 = (state_26793[(2)]);
var state_26793__$1 = state_26793;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26793__$1,inst_26791);
} else {
if((state_val_26794 === (12))){
var inst_26779 = (state_26793[(2)]);
var state_26793__$1 = state_26793;
var statearr_26815_26848 = state_26793__$1;
(statearr_26815_26848[(2)] = inst_26779);

(statearr_26815_26848[(1)] = (9));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26794 === (2))){
var state_26793__$1 = state_26793;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26793__$1,(4),in$);
} else {
if((state_val_26794 === (23))){
var inst_26787 = (state_26793[(2)]);
var state_26793__$1 = state_26793;
var statearr_26816_26849 = state_26793__$1;
(statearr_26816_26849[(2)] = inst_26787);

(statearr_26816_26849[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26794 === (19))){
var inst_26774 = (state_26793[(2)]);
var state_26793__$1 = state_26793;
var statearr_26817_26850 = state_26793__$1;
(statearr_26817_26850[(2)] = inst_26774);

(statearr_26817_26850[(1)] = (16));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26794 === (11))){
var inst_26745 = (state_26793[(8)]);
var inst_26759 = (state_26793[(7)]);
var inst_26759__$1 = cljs.core.seq(inst_26745);
var state_26793__$1 = (function (){var statearr_26818 = state_26793;
(statearr_26818[(7)] = inst_26759__$1);

return statearr_26818;
})();
if(inst_26759__$1){
var statearr_26819_26851 = state_26793__$1;
(statearr_26819_26851[(1)] = (14));

} else {
var statearr_26820_26852 = state_26793__$1;
(statearr_26820_26852[(1)] = (15));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26794 === (9))){
var inst_26781 = (state_26793[(2)]);
var inst_26782 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_26793__$1 = (function (){var statearr_26821 = state_26793;
(statearr_26821[(15)] = inst_26781);

return statearr_26821;
})();
if(cljs.core.truth_(inst_26782)){
var statearr_26822_26853 = state_26793__$1;
(statearr_26822_26853[(1)] = (21));

} else {
var statearr_26823_26854 = state_26793__$1;
(statearr_26823_26854[(1)] = (22));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26794 === (5))){
var inst_26737 = cljs.core.async.close_BANG_(out);
var state_26793__$1 = state_26793;
var statearr_26824_26855 = state_26793__$1;
(statearr_26824_26855[(2)] = inst_26737);

(statearr_26824_26855[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26794 === (14))){
var inst_26759 = (state_26793[(7)]);
var inst_26761 = cljs.core.chunked_seq_QMARK_(inst_26759);
var state_26793__$1 = state_26793;
if(inst_26761){
var statearr_26825_26856 = state_26793__$1;
(statearr_26825_26856[(1)] = (17));

} else {
var statearr_26826_26857 = state_26793__$1;
(statearr_26826_26857[(1)] = (18));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26794 === (16))){
var inst_26777 = (state_26793[(2)]);
var state_26793__$1 = state_26793;
var statearr_26827_26858 = state_26793__$1;
(statearr_26827_26858[(2)] = inst_26777);

(statearr_26827_26858[(1)] = (12));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26794 === (10))){
var inst_26748 = (state_26793[(10)]);
var inst_26746 = (state_26793[(12)]);
var inst_26753 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26746,inst_26748);
var state_26793__$1 = state_26793;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26793__$1,(13),out,inst_26753);
} else {
if((state_val_26794 === (18))){
var inst_26759 = (state_26793[(7)]);
var inst_26768 = cljs.core.first(inst_26759);
var state_26793__$1 = state_26793;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26793__$1,(20),out,inst_26768);
} else {
if((state_val_26794 === (8))){
var inst_26748 = (state_26793[(10)]);
var inst_26747 = (state_26793[(11)]);
var inst_26750 = (inst_26748 < inst_26747);
var inst_26751 = inst_26750;
var state_26793__$1 = state_26793;
if(cljs.core.truth_(inst_26751)){
var statearr_26828_26859 = state_26793__$1;
(statearr_26828_26859[(1)] = (10));

} else {
var statearr_26829_26860 = state_26793__$1;
(statearr_26829_26860[(1)] = (11));

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
var statearr_26833 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26833[(0)] = state_machine__5839__auto__);

(statearr_26833[(1)] = (1));

return statearr_26833;
});
var state_machine__5839__auto____1 = (function (state_26793){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_26793);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e26834){if((e26834 instanceof Object)){
var ex__5842__auto__ = e26834;
var statearr_26835_26861 = state_26793;
(statearr_26835_26861[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26793);

return cljs.core.constant$keyword$41;
} else {
throw e26834;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__26862 = state_26793;
state_26793 = G__26862;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_26793){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_26793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto__))
})();
var state__5855__auto__ = (function (){var statearr_26836 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_26836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto__);

return statearr_26836;
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
var c__5853__auto___26967 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___26967,out){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___26967,out){
return (function (state_26942){
var state_val_26943 = (state_26942[(1)]);
if((state_val_26943 === (7))){
var inst_26937 = (state_26942[(2)]);
var state_26942__$1 = state_26942;
var statearr_26944_26968 = state_26942__$1;
(statearr_26944_26968[(2)] = inst_26937);

(statearr_26944_26968[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26943 === (1))){
var inst_26919 = null;
var state_26942__$1 = (function (){var statearr_26945 = state_26942;
(statearr_26945[(7)] = inst_26919);

return statearr_26945;
})();
var statearr_26946_26969 = state_26942__$1;
(statearr_26946_26969[(2)] = null);

(statearr_26946_26969[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26943 === (4))){
var inst_26922 = (state_26942[(8)]);
var inst_26922__$1 = (state_26942[(2)]);
var inst_26923 = (inst_26922__$1 == null);
var inst_26924 = cljs.core.not(inst_26923);
var state_26942__$1 = (function (){var statearr_26947 = state_26942;
(statearr_26947[(8)] = inst_26922__$1);

return statearr_26947;
})();
if(inst_26924){
var statearr_26948_26970 = state_26942__$1;
(statearr_26948_26970[(1)] = (5));

} else {
var statearr_26949_26971 = state_26942__$1;
(statearr_26949_26971[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26943 === (6))){
var state_26942__$1 = state_26942;
var statearr_26950_26972 = state_26942__$1;
(statearr_26950_26972[(2)] = null);

(statearr_26950_26972[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26943 === (3))){
var inst_26939 = (state_26942[(2)]);
var inst_26940 = cljs.core.async.close_BANG_(out);
var state_26942__$1 = (function (){var statearr_26951 = state_26942;
(statearr_26951[(9)] = inst_26939);

return statearr_26951;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26942__$1,inst_26940);
} else {
if((state_val_26943 === (2))){
var state_26942__$1 = state_26942;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26942__$1,(4),ch);
} else {
if((state_val_26943 === (11))){
var inst_26922 = (state_26942[(8)]);
var inst_26931 = (state_26942[(2)]);
var inst_26919 = inst_26922;
var state_26942__$1 = (function (){var statearr_26952 = state_26942;
(statearr_26952[(10)] = inst_26931);

(statearr_26952[(7)] = inst_26919);

return statearr_26952;
})();
var statearr_26953_26973 = state_26942__$1;
(statearr_26953_26973[(2)] = null);

(statearr_26953_26973[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26943 === (9))){
var inst_26922 = (state_26942[(8)]);
var state_26942__$1 = state_26942;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26942__$1,(11),out,inst_26922);
} else {
if((state_val_26943 === (5))){
var inst_26919 = (state_26942[(7)]);
var inst_26922 = (state_26942[(8)]);
var inst_26926 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26922,inst_26919);
var state_26942__$1 = state_26942;
if(inst_26926){
var statearr_26955_26974 = state_26942__$1;
(statearr_26955_26974[(1)] = (8));

} else {
var statearr_26956_26975 = state_26942__$1;
(statearr_26956_26975[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26943 === (10))){
var inst_26934 = (state_26942[(2)]);
var state_26942__$1 = state_26942;
var statearr_26957_26976 = state_26942__$1;
(statearr_26957_26976[(2)] = inst_26934);

(statearr_26957_26976[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26943 === (8))){
var inst_26919 = (state_26942[(7)]);
var tmp26954 = inst_26919;
var inst_26919__$1 = tmp26954;
var state_26942__$1 = (function (){var statearr_26958 = state_26942;
(statearr_26958[(7)] = inst_26919__$1);

return statearr_26958;
})();
var statearr_26959_26977 = state_26942__$1;
(statearr_26959_26977[(2)] = null);

(statearr_26959_26977[(1)] = (2));


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
});})(c__5853__auto___26967,out))
;
return ((function (switch__5838__auto__,c__5853__auto___26967,out){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_26963 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26963[(0)] = state_machine__5839__auto__);

(statearr_26963[(1)] = (1));

return statearr_26963;
});
var state_machine__5839__auto____1 = (function (state_26942){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_26942);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e26964){if((e26964 instanceof Object)){
var ex__5842__auto__ = e26964;
var statearr_26965_26978 = state_26942;
(statearr_26965_26978[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26942);

return cljs.core.constant$keyword$41;
} else {
throw e26964;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__26979 = state_26942;
state_26942 = G__26979;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_26942){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_26942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___26967,out))
})();
var state__5855__auto__ = (function (){var statearr_26966 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_26966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___26967);

return statearr_26966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___26967,out))
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
var c__5853__auto___27117 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___27117,out){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___27117,out){
return (function (state_27087){
var state_val_27088 = (state_27087[(1)]);
if((state_val_27088 === (7))){
var inst_27083 = (state_27087[(2)]);
var state_27087__$1 = state_27087;
var statearr_27089_27118 = state_27087__$1;
(statearr_27089_27118[(2)] = inst_27083);

(statearr_27089_27118[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_27088 === (1))){
var inst_27050 = (new Array(n));
var inst_27051 = inst_27050;
var inst_27052 = (0);
var state_27087__$1 = (function (){var statearr_27090 = state_27087;
(statearr_27090[(7)] = inst_27052);

(statearr_27090[(8)] = inst_27051);

return statearr_27090;
})();
var statearr_27091_27119 = state_27087__$1;
(statearr_27091_27119[(2)] = null);

(statearr_27091_27119[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_27088 === (4))){
var inst_27055 = (state_27087[(9)]);
var inst_27055__$1 = (state_27087[(2)]);
var inst_27056 = (inst_27055__$1 == null);
var inst_27057 = cljs.core.not(inst_27056);
var state_27087__$1 = (function (){var statearr_27092 = state_27087;
(statearr_27092[(9)] = inst_27055__$1);

return statearr_27092;
})();
if(inst_27057){
var statearr_27093_27120 = state_27087__$1;
(statearr_27093_27120[(1)] = (5));

} else {
var statearr_27094_27121 = state_27087__$1;
(statearr_27094_27121[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_27088 === (15))){
var inst_27077 = (state_27087[(2)]);
var state_27087__$1 = state_27087;
var statearr_27095_27122 = state_27087__$1;
(statearr_27095_27122[(2)] = inst_27077);

(statearr_27095_27122[(1)] = (14));


return cljs.core.constant$keyword$41;
} else {
if((state_val_27088 === (13))){
var state_27087__$1 = state_27087;
var statearr_27096_27123 = state_27087__$1;
(statearr_27096_27123[(2)] = null);

(statearr_27096_27123[(1)] = (14));


return cljs.core.constant$keyword$41;
} else {
if((state_val_27088 === (6))){
var inst_27052 = (state_27087[(7)]);
var inst_27073 = (inst_27052 > (0));
var state_27087__$1 = state_27087;
if(cljs.core.truth_(inst_27073)){
var statearr_27097_27124 = state_27087__$1;
(statearr_27097_27124[(1)] = (12));

} else {
var statearr_27098_27125 = state_27087__$1;
(statearr_27098_27125[(1)] = (13));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_27088 === (3))){
var inst_27085 = (state_27087[(2)]);
var state_27087__$1 = state_27087;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27087__$1,inst_27085);
} else {
if((state_val_27088 === (12))){
var inst_27051 = (state_27087[(8)]);
var inst_27075 = cljs.core.vec(inst_27051);
var state_27087__$1 = state_27087;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27087__$1,(15),out,inst_27075);
} else {
if((state_val_27088 === (2))){
var state_27087__$1 = state_27087;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27087__$1,(4),ch);
} else {
if((state_val_27088 === (11))){
var inst_27067 = (state_27087[(2)]);
var inst_27068 = (new Array(n));
var inst_27051 = inst_27068;
var inst_27052 = (0);
var state_27087__$1 = (function (){var statearr_27099 = state_27087;
(statearr_27099[(7)] = inst_27052);

(statearr_27099[(8)] = inst_27051);

(statearr_27099[(10)] = inst_27067);

return statearr_27099;
})();
var statearr_27100_27126 = state_27087__$1;
(statearr_27100_27126[(2)] = null);

(statearr_27100_27126[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_27088 === (9))){
var inst_27051 = (state_27087[(8)]);
var inst_27065 = cljs.core.vec(inst_27051);
var state_27087__$1 = state_27087;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27087__$1,(11),out,inst_27065);
} else {
if((state_val_27088 === (5))){
var inst_27052 = (state_27087[(7)]);
var inst_27055 = (state_27087[(9)]);
var inst_27060 = (state_27087[(11)]);
var inst_27051 = (state_27087[(8)]);
var inst_27059 = (inst_27051[inst_27052] = inst_27055);
var inst_27060__$1 = (inst_27052 + (1));
var inst_27061 = (inst_27060__$1 < n);
var state_27087__$1 = (function (){var statearr_27101 = state_27087;
(statearr_27101[(11)] = inst_27060__$1);

(statearr_27101[(12)] = inst_27059);

return statearr_27101;
})();
if(cljs.core.truth_(inst_27061)){
var statearr_27102_27127 = state_27087__$1;
(statearr_27102_27127[(1)] = (8));

} else {
var statearr_27103_27128 = state_27087__$1;
(statearr_27103_27128[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_27088 === (14))){
var inst_27080 = (state_27087[(2)]);
var inst_27081 = cljs.core.async.close_BANG_(out);
var state_27087__$1 = (function (){var statearr_27105 = state_27087;
(statearr_27105[(13)] = inst_27080);

return statearr_27105;
})();
var statearr_27106_27129 = state_27087__$1;
(statearr_27106_27129[(2)] = inst_27081);

(statearr_27106_27129[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_27088 === (10))){
var inst_27071 = (state_27087[(2)]);
var state_27087__$1 = state_27087;
var statearr_27107_27130 = state_27087__$1;
(statearr_27107_27130[(2)] = inst_27071);

(statearr_27107_27130[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_27088 === (8))){
var inst_27060 = (state_27087[(11)]);
var inst_27051 = (state_27087[(8)]);
var tmp27104 = inst_27051;
var inst_27051__$1 = tmp27104;
var inst_27052 = inst_27060;
var state_27087__$1 = (function (){var statearr_27108 = state_27087;
(statearr_27108[(7)] = inst_27052);

(statearr_27108[(8)] = inst_27051__$1);

return statearr_27108;
})();
var statearr_27109_27131 = state_27087__$1;
(statearr_27109_27131[(2)] = null);

(statearr_27109_27131[(1)] = (2));


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
});})(c__5853__auto___27117,out))
;
return ((function (switch__5838__auto__,c__5853__auto___27117,out){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_27113 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27113[(0)] = state_machine__5839__auto__);

(statearr_27113[(1)] = (1));

return statearr_27113;
});
var state_machine__5839__auto____1 = (function (state_27087){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_27087);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e27114){if((e27114 instanceof Object)){
var ex__5842__auto__ = e27114;
var statearr_27115_27132 = state_27087;
(statearr_27115_27132[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27087);

return cljs.core.constant$keyword$41;
} else {
throw e27114;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__27133 = state_27087;
state_27087 = G__27133;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_27087){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_27087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___27117,out))
})();
var state__5855__auto__ = (function (){var statearr_27116 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_27116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___27117);

return statearr_27116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___27117,out))
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
var c__5853__auto___27281 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___27281,out){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___27281,out){
return (function (state_27250){
var state_val_27251 = (state_27250[(1)]);
if((state_val_27251 === (7))){
var inst_27246 = (state_27250[(2)]);
var state_27250__$1 = state_27250;
var statearr_27252_27282 = state_27250__$1;
(statearr_27252_27282[(2)] = inst_27246);

(statearr_27252_27282[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_27251 === (1))){
var inst_27209 = [];
var inst_27210 = inst_27209;
var inst_27211 = cljs.core.constant$keyword$101;
var state_27250__$1 = (function (){var statearr_27253 = state_27250;
(statearr_27253[(7)] = inst_27211);

(statearr_27253[(8)] = inst_27210);

return statearr_27253;
})();
var statearr_27254_27283 = state_27250__$1;
(statearr_27254_27283[(2)] = null);

(statearr_27254_27283[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_27251 === (4))){
var inst_27214 = (state_27250[(9)]);
var inst_27214__$1 = (state_27250[(2)]);
var inst_27215 = (inst_27214__$1 == null);
var inst_27216 = cljs.core.not(inst_27215);
var state_27250__$1 = (function (){var statearr_27255 = state_27250;
(statearr_27255[(9)] = inst_27214__$1);

return statearr_27255;
})();
if(inst_27216){
var statearr_27256_27284 = state_27250__$1;
(statearr_27256_27284[(1)] = (5));

} else {
var statearr_27257_27285 = state_27250__$1;
(statearr_27257_27285[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_27251 === (15))){
var inst_27240 = (state_27250[(2)]);
var state_27250__$1 = state_27250;
var statearr_27258_27286 = state_27250__$1;
(statearr_27258_27286[(2)] = inst_27240);

(statearr_27258_27286[(1)] = (14));


return cljs.core.constant$keyword$41;
} else {
if((state_val_27251 === (13))){
var state_27250__$1 = state_27250;
var statearr_27259_27287 = state_27250__$1;
(statearr_27259_27287[(2)] = null);

(statearr_27259_27287[(1)] = (14));


return cljs.core.constant$keyword$41;
} else {
if((state_val_27251 === (6))){
var inst_27210 = (state_27250[(8)]);
var inst_27235 = inst_27210.length;
var inst_27236 = (inst_27235 > (0));
var state_27250__$1 = state_27250;
if(cljs.core.truth_(inst_27236)){
var statearr_27260_27288 = state_27250__$1;
(statearr_27260_27288[(1)] = (12));

} else {
var statearr_27261_27289 = state_27250__$1;
(statearr_27261_27289[(1)] = (13));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_27251 === (3))){
var inst_27248 = (state_27250[(2)]);
var state_27250__$1 = state_27250;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27250__$1,inst_27248);
} else {
if((state_val_27251 === (12))){
var inst_27210 = (state_27250[(8)]);
var inst_27238 = cljs.core.vec(inst_27210);
var state_27250__$1 = state_27250;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27250__$1,(15),out,inst_27238);
} else {
if((state_val_27251 === (2))){
var state_27250__$1 = state_27250;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27250__$1,(4),ch);
} else {
if((state_val_27251 === (11))){
var inst_27218 = (state_27250[(10)]);
var inst_27214 = (state_27250[(9)]);
var inst_27228 = (state_27250[(2)]);
var inst_27229 = [];
var inst_27230 = inst_27229.push(inst_27214);
var inst_27210 = inst_27229;
var inst_27211 = inst_27218;
var state_27250__$1 = (function (){var statearr_27262 = state_27250;
(statearr_27262[(11)] = inst_27230);

(statearr_27262[(12)] = inst_27228);

(statearr_27262[(7)] = inst_27211);

(statearr_27262[(8)] = inst_27210);

return statearr_27262;
})();
var statearr_27263_27290 = state_27250__$1;
(statearr_27263_27290[(2)] = null);

(statearr_27263_27290[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_27251 === (9))){
var inst_27210 = (state_27250[(8)]);
var inst_27226 = cljs.core.vec(inst_27210);
var state_27250__$1 = state_27250;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27250__$1,(11),out,inst_27226);
} else {
if((state_val_27251 === (5))){
var inst_27218 = (state_27250[(10)]);
var inst_27214 = (state_27250[(9)]);
var inst_27211 = (state_27250[(7)]);
var inst_27218__$1 = (function (){var G__27264 = inst_27214;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27264) : f.call(null,G__27264));
})();
var inst_27219 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27218__$1,inst_27211);
var inst_27220 = cljs.core.keyword_identical_QMARK_(inst_27211,cljs.core.constant$keyword$101);
var inst_27221 = (inst_27219) || (inst_27220);
var state_27250__$1 = (function (){var statearr_27265 = state_27250;
(statearr_27265[(10)] = inst_27218__$1);

return statearr_27265;
})();
if(cljs.core.truth_(inst_27221)){
var statearr_27266_27291 = state_27250__$1;
(statearr_27266_27291[(1)] = (8));

} else {
var statearr_27267_27292 = state_27250__$1;
(statearr_27267_27292[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_27251 === (14))){
var inst_27243 = (state_27250[(2)]);
var inst_27244 = cljs.core.async.close_BANG_(out);
var state_27250__$1 = (function (){var statearr_27269 = state_27250;
(statearr_27269[(13)] = inst_27243);

return statearr_27269;
})();
var statearr_27270_27293 = state_27250__$1;
(statearr_27270_27293[(2)] = inst_27244);

(statearr_27270_27293[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_27251 === (10))){
var inst_27233 = (state_27250[(2)]);
var state_27250__$1 = state_27250;
var statearr_27271_27294 = state_27250__$1;
(statearr_27271_27294[(2)] = inst_27233);

(statearr_27271_27294[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_27251 === (8))){
var inst_27218 = (state_27250[(10)]);
var inst_27214 = (state_27250[(9)]);
var inst_27210 = (state_27250[(8)]);
var inst_27223 = inst_27210.push(inst_27214);
var tmp27268 = inst_27210;
var inst_27210__$1 = tmp27268;
var inst_27211 = inst_27218;
var state_27250__$1 = (function (){var statearr_27272 = state_27250;
(statearr_27272[(14)] = inst_27223);

(statearr_27272[(7)] = inst_27211);

(statearr_27272[(8)] = inst_27210__$1);

return statearr_27272;
})();
var statearr_27273_27295 = state_27250__$1;
(statearr_27273_27295[(2)] = null);

(statearr_27273_27295[(1)] = (2));


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
});})(c__5853__auto___27281,out))
;
return ((function (switch__5838__auto__,c__5853__auto___27281,out){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_27277 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27277[(0)] = state_machine__5839__auto__);

(statearr_27277[(1)] = (1));

return statearr_27277;
});
var state_machine__5839__auto____1 = (function (state_27250){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_27250);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e27278){if((e27278 instanceof Object)){
var ex__5842__auto__ = e27278;
var statearr_27279_27296 = state_27250;
(statearr_27279_27296[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27250);

return cljs.core.constant$keyword$41;
} else {
throw e27278;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__27297 = state_27250;
state_27250 = G__27297;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_27250){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_27250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___27281,out))
})();
var state__5855__auto__ = (function (){var statearr_27280 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_27280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___27281);

return statearr_27280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___27281,out))
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
