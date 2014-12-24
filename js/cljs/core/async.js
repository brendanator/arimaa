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
if(typeof cljs.core.async.t23238 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23238 = (function (f,fn_handler,meta23239){
this.f = f;
this.fn_handler = fn_handler;
this.meta23239 = meta23239;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23238.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23238.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t23238.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t23238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23240){
var self__ = this;
var _23240__$1 = this;
return self__.meta23239;
});

cljs.core.async.t23238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23240,meta23239__$1){
var self__ = this;
var _23240__$1 = this;
return (new cljs.core.async.t23238(self__.f,self__.fn_handler,meta23239__$1));
});

cljs.core.async.t23238.cljs$lang$type = true;

cljs.core.async.t23238.cljs$lang$ctorStr = "cljs.core.async/t23238";

cljs.core.async.t23238.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23238");
});

cljs.core.async.__GT_t23238 = (function __GT_t23238(f__$1,fn_handler__$1,meta23239){
return (new cljs.core.async.t23238(f__$1,fn_handler__$1,meta23239));
});

}

return (new cljs.core.async.t23238(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,20,cljs.core.constant$keyword$9,16,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,13,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
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
var G__23242 = buff;
if(G__23242){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__23242.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__23242.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23242);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23242);
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
var val_23259 = (function (){var G__23256 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23256) : cljs.core.deref.call(null,G__23256));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__23257_23260 = val_23259;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23257_23260) : fn1.call(null,G__23257_23260));
} else {
cljs.core.async.impl.dispatch.run(((function (val_23259,ret){
return (function (){
var G__23258 = val_23259;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23258) : fn1.call(null,G__23258));
});})(val_23259,ret))
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
var G__23269 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23269) : cljs.core.deref.call(null,G__23269));
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
var ret = (function (){var G__23270 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23270) : cljs.core.deref.call(null,G__23270));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__23271_23273 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23271_23273) : fn1.call(null,G__23271_23273));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__23272 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23272) : fn1.call(null,G__23272));
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
var n__4517__auto___23274 = n;
var x_23275 = (0);
while(true){
if((x_23275 < n__4517__auto___23274)){
(a[x_23275] = (0));

var G__23276 = (x_23275 + (1));
x_23275 = G__23276;
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

var G__23277 = (i + (1));
i = G__23277;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__23285 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23285) : cljs.core.atom.call(null,G__23285));
})();
if(typeof cljs.core.async.t23286 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23286 = (function (flag,alt_flag,meta23287){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23287 = meta23287;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23286.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23286.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23289 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23289) : cljs.core.deref.call(null,G__23289));
});})(flag))
;

cljs.core.async.t23286.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23290_23292 = self__.flag;
var G__23291_23293 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23290_23292,G__23291_23293) : cljs.core.reset_BANG_.call(null,G__23290_23292,G__23291_23293));

return true;
});})(flag))
;

cljs.core.async.t23286.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23288){
var self__ = this;
var _23288__$1 = this;
return self__.meta23287;
});})(flag))
;

cljs.core.async.t23286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23288,meta23287__$1){
var self__ = this;
var _23288__$1 = this;
return (new cljs.core.async.t23286(self__.flag,self__.alt_flag,meta23287__$1));
});})(flag))
;

cljs.core.async.t23286.cljs$lang$type = true;

cljs.core.async.t23286.cljs$lang$ctorStr = "cljs.core.async/t23286";

cljs.core.async.t23286.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23286");
});})(flag))
;

cljs.core.async.__GT_t23286 = ((function (flag){
return (function __GT_t23286(flag__$1,alt_flag__$1,meta23287){
return (new cljs.core.async.t23286(flag__$1,alt_flag__$1,meta23287));
});})(flag))
;

}

return (new cljs.core.async.t23286(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,15,cljs.core.constant$keyword$9,146,cljs.core.constant$keyword$10,5,cljs.core.constant$keyword$11,141,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t23297 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23297 = (function (cb,flag,alt_handler,meta23298){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23298 = meta23298;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23297.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23297.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t23297.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t23297.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23299){
var self__ = this;
var _23299__$1 = this;
return self__.meta23298;
});

cljs.core.async.t23297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23299,meta23298__$1){
var self__ = this;
var _23299__$1 = this;
return (new cljs.core.async.t23297(self__.cb,self__.flag,self__.alt_handler,meta23298__$1));
});

cljs.core.async.t23297.cljs$lang$type = true;

cljs.core.async.t23297.cljs$lang$ctorStr = "cljs.core.async/t23297";

cljs.core.async.t23297.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23297");
});

cljs.core.async.__GT_t23297 = (function __GT_t23297(cb__$1,flag__$1,alt_handler__$1,meta23298){
return (new cljs.core.async.t23297(cb__$1,flag__$1,alt_handler__$1,meta23298));
});

}

return (new cljs.core.async.t23297(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,11,cljs.core.constant$keyword$9,154,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,149,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.constant$keyword$64.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__23307 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__23307) : port.call(null,G__23307));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__23308 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__23308) : port.call(null,G__23308));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23300_SHARP_){
var G__23309 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23300_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__23309) : fret.call(null,G__23309));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23301_SHARP_){
var G__23310 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23301_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__23310) : fret.call(null,G__23310));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23311 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23311) : cljs.core.deref.call(null,G__23311));
})(),(function (){var or__3630__auto__ = wport;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23312 = (i + (1));
i = G__23312;
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
var alts_BANG___delegate = function (ports,p__23313){
var map__23315 = p__23313;
var map__23315__$1 = ((cljs.core.seq_QMARK_(map__23315))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23315):map__23315);
var opts = map__23315__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__23313 = null;
if (arguments.length > 1) {
  p__23313 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__23313);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23316){
var ports = cljs.core.first(arglist__23316);
var p__23313 = cljs.core.rest(arglist__23316);
return alts_BANG___delegate(ports,p__23313);
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
var c__11819__auto___23414 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11819__auto___23414){
return (function (){
var f__11820__auto__ = (function (){var switch__11739__auto__ = ((function (c__11819__auto___23414){
return (function (state_23390){
var state_val_23391 = (state_23390[(1)]);
if((state_val_23391 === (7))){
var inst_23386 = (state_23390[(2)]);
var state_23390__$1 = state_23390;
var statearr_23392_23415 = state_23390__$1;
(statearr_23392_23415[(2)] = inst_23386);

(statearr_23392_23415[(1)] = (3));


return cljs.core.constant$keyword$58;
} else {
if((state_val_23391 === (1))){
var state_23390__$1 = state_23390;
var statearr_23393_23416 = state_23390__$1;
(statearr_23393_23416[(2)] = null);

(statearr_23393_23416[(1)] = (2));


return cljs.core.constant$keyword$58;
} else {
if((state_val_23391 === (4))){
var inst_23369 = (state_23390[(7)]);
var inst_23369__$1 = (state_23390[(2)]);
var inst_23370 = (inst_23369__$1 == null);
var state_23390__$1 = (function (){var statearr_23394 = state_23390;
(statearr_23394[(7)] = inst_23369__$1);

return statearr_23394;
})();
if(cljs.core.truth_(inst_23370)){
var statearr_23395_23417 = state_23390__$1;
(statearr_23395_23417[(1)] = (5));

} else {
var statearr_23396_23418 = state_23390__$1;
(statearr_23396_23418[(1)] = (6));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_23391 === (13))){
var state_23390__$1 = state_23390;
var statearr_23397_23419 = state_23390__$1;
(statearr_23397_23419[(2)] = null);

(statearr_23397_23419[(1)] = (14));


return cljs.core.constant$keyword$58;
} else {
if((state_val_23391 === (6))){
var inst_23369 = (state_23390[(7)]);
var state_23390__$1 = state_23390;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23390__$1,(11),to,inst_23369);
} else {
if((state_val_23391 === (3))){
var inst_23388 = (state_23390[(2)]);
var state_23390__$1 = state_23390;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23390__$1,inst_23388);
} else {
if((state_val_23391 === (12))){
var state_23390__$1 = state_23390;
var statearr_23398_23420 = state_23390__$1;
(statearr_23398_23420[(2)] = null);

(statearr_23398_23420[(1)] = (2));


return cljs.core.constant$keyword$58;
} else {
if((state_val_23391 === (2))){
var state_23390__$1 = state_23390;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23390__$1,(4),from);
} else {
if((state_val_23391 === (11))){
var inst_23379 = (state_23390[(2)]);
var state_23390__$1 = state_23390;
if(cljs.core.truth_(inst_23379)){
var statearr_23399_23421 = state_23390__$1;
(statearr_23399_23421[(1)] = (12));

} else {
var statearr_23400_23422 = state_23390__$1;
(statearr_23400_23422[(1)] = (13));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_23391 === (9))){
var state_23390__$1 = state_23390;
var statearr_23401_23423 = state_23390__$1;
(statearr_23401_23423[(2)] = null);

(statearr_23401_23423[(1)] = (10));


return cljs.core.constant$keyword$58;
} else {
if((state_val_23391 === (5))){
var state_23390__$1 = state_23390;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23402_23424 = state_23390__$1;
(statearr_23402_23424[(1)] = (8));

} else {
var statearr_23403_23425 = state_23390__$1;
(statearr_23403_23425[(1)] = (9));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_23391 === (14))){
var inst_23384 = (state_23390[(2)]);
var state_23390__$1 = state_23390;
var statearr_23404_23426 = state_23390__$1;
(statearr_23404_23426[(2)] = inst_23384);

(statearr_23404_23426[(1)] = (7));


return cljs.core.constant$keyword$58;
} else {
if((state_val_23391 === (10))){
var inst_23376 = (state_23390[(2)]);
var state_23390__$1 = state_23390;
var statearr_23405_23427 = state_23390__$1;
(statearr_23405_23427[(2)] = inst_23376);

(statearr_23405_23427[(1)] = (7));


return cljs.core.constant$keyword$58;
} else {
if((state_val_23391 === (8))){
var inst_23373 = cljs.core.async.close_BANG_(to);
var state_23390__$1 = state_23390;
var statearr_23406_23428 = state_23390__$1;
(statearr_23406_23428[(2)] = inst_23373);

(statearr_23406_23428[(1)] = (10));


return cljs.core.constant$keyword$58;
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
});})(c__11819__auto___23414))
;
return ((function (switch__11739__auto__,c__11819__auto___23414){
return (function() {
var state_machine__11740__auto__ = null;
var state_machine__11740__auto____0 = (function (){
var statearr_23410 = [null,null,null,null,null,null,null,null];
(statearr_23410[(0)] = state_machine__11740__auto__);

(statearr_23410[(1)] = (1));

return statearr_23410;
});
var state_machine__11740__auto____1 = (function (state_23390){
while(true){
var ret_value__11741__auto__ = (function (){try{while(true){
var result__11742__auto__ = switch__11739__auto__(state_23390);
if(cljs.core.keyword_identical_QMARK_(result__11742__auto__,cljs.core.constant$keyword$58)){
continue;
} else {
return result__11742__auto__;
}
break;
}
}catch (e23411){if((e23411 instanceof Object)){
var ex__11743__auto__ = e23411;
var statearr_23412_23429 = state_23390;
(statearr_23412_23429[(5)] = ex__11743__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23390);

return cljs.core.constant$keyword$58;
} else {
throw e23411;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11741__auto__,cljs.core.constant$keyword$58)){
var G__23430 = state_23390;
state_23390 = G__23430;
continue;
} else {
return ret_value__11741__auto__;
}
break;
}
});
state_machine__11740__auto__ = function(state_23390){
switch(arguments.length){
case 0:
return state_machine__11740__auto____0.call(this);
case 1:
return state_machine__11740__auto____1.call(this,state_23390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11740__auto____0;
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11740__auto____1;
return state_machine__11740__auto__;
})()
;})(switch__11739__auto__,c__11819__auto___23414))
})();
var state__11821__auto__ = (function (){var statearr_23413 = (function (){return (f__11820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11820__auto__.cljs$core$IFn$_invoke$arity$0() : f__11820__auto__.call(null));
})();
(statearr_23413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11819__auto___23414);

return statearr_23413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11821__auto__);
});})(c__11819__auto___23414))
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
return (function (p__23616){
var vec__23617 = p__23616;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23617,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23617,(1),null);
var job = vec__23617;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__11819__auto___23801 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11819__auto___23801,res,vec__23617,v,p,job,jobs,results){
return (function (){
var f__11820__auto__ = (function (){var switch__11739__auto__ = ((function (c__11819__auto___23801,res,vec__23617,v,p,job,jobs,results){
return (function (state_23622){
var state_val_23623 = (state_23622[(1)]);
if((state_val_23623 === (2))){
var inst_23619 = (state_23622[(2)]);
var inst_23620 = cljs.core.async.close_BANG_(res);
var state_23622__$1 = (function (){var statearr_23624 = state_23622;
(statearr_23624[(7)] = inst_23619);

return statearr_23624;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23622__$1,inst_23620);
} else {
if((state_val_23623 === (1))){
var state_23622__$1 = state_23622;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23622__$1,(2),res,v);
} else {
return null;
}
}
});})(c__11819__auto___23801,res,vec__23617,v,p,job,jobs,results))
;
return ((function (switch__11739__auto__,c__11819__auto___23801,res,vec__23617,v,p,job,jobs,results){
return (function() {
var state_machine__11740__auto__ = null;
var state_machine__11740__auto____0 = (function (){
var statearr_23628 = [null,null,null,null,null,null,null,null];
(statearr_23628[(0)] = state_machine__11740__auto__);

(statearr_23628[(1)] = (1));

return statearr_23628;
});
var state_machine__11740__auto____1 = (function (state_23622){
while(true){
var ret_value__11741__auto__ = (function (){try{while(true){
var result__11742__auto__ = switch__11739__auto__(state_23622);
if(cljs.core.keyword_identical_QMARK_(result__11742__auto__,cljs.core.constant$keyword$58)){
continue;
} else {
return result__11742__auto__;
}
break;
}
}catch (e23629){if((e23629 instanceof Object)){
var ex__11743__auto__ = e23629;
var statearr_23630_23802 = state_23622;
(statearr_23630_23802[(5)] = ex__11743__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23622);

return cljs.core.constant$keyword$58;
} else {
throw e23629;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11741__auto__,cljs.core.constant$keyword$58)){
var G__23803 = state_23622;
state_23622 = G__23803;
continue;
} else {
return ret_value__11741__auto__;
}
break;
}
});
state_machine__11740__auto__ = function(state_23622){
switch(arguments.length){
case 0:
return state_machine__11740__auto____0.call(this);
case 1:
return state_machine__11740__auto____1.call(this,state_23622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11740__auto____0;
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11740__auto____1;
return state_machine__11740__auto__;
})()
;})(switch__11739__auto__,c__11819__auto___23801,res,vec__23617,v,p,job,jobs,results))
})();
var state__11821__auto__ = (function (){var statearr_23631 = (function (){return (f__11820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11820__auto__.cljs$core$IFn$_invoke$arity$0() : f__11820__auto__.call(null));
})();
(statearr_23631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11819__auto___23801);

return statearr_23631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11821__auto__);
});})(c__11819__auto___23801,res,vec__23617,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23632){
var vec__23633 = p__23632;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23633,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23633,(1),null);
var job = vec__23633;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__23634_23804 = v;
var G__23635_23805 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__23634_23804,G__23635_23805) : xf.call(null,G__23634_23804,G__23635_23805));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4517__auto___23806 = n;
var __23807 = (0);
while(true){
if((__23807 < n__4517__auto___23806)){
var G__23636_23808 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23636_23808) {
case "async":
var c__11819__auto___23810 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__23807,c__11819__auto___23810,G__23636_23808,n__4517__auto___23806,jobs,results,process,async){
return (function (){
var f__11820__auto__ = (function (){var switch__11739__auto__ = ((function (__23807,c__11819__auto___23810,G__23636_23808,n__4517__auto___23806,jobs,results,process,async){
return (function (state_23649){
var state_val_23650 = (state_23649[(1)]);
if((state_val_23650 === (7))){
var inst_23645 = (state_23649[(2)]);
var state_23649__$1 = state_23649;
var statearr_23651_23811 = state_23649__$1;
(statearr_23651_23811[(2)] = inst_23645);

(statearr_23651_23811[(1)] = (3));


return cljs.core.constant$keyword$58;
} else {
if((state_val_23650 === (6))){
var state_23649__$1 = state_23649;
var statearr_23652_23812 = state_23649__$1;
(statearr_23652_23812[(2)] = null);

(statearr_23652_23812[(1)] = (7));


return cljs.core.constant$keyword$58;
} else {
if((state_val_23650 === (5))){
var state_23649__$1 = state_23649;
var statearr_23653_23813 = state_23649__$1;
(statearr_23653_23813[(2)] = null);

(statearr_23653_23813[(1)] = (2));


return cljs.core.constant$keyword$58;
} else {
if((state_val_23650 === (4))){
var inst_23639 = (state_23649[(2)]);
var inst_23640 = async(inst_23639);
var state_23649__$1 = state_23649;
if(cljs.core.truth_(inst_23640)){
var statearr_23654_23814 = state_23649__$1;
(statearr_23654_23814[(1)] = (5));

} else {
var statearr_23655_23815 = state_23649__$1;
(statearr_23655_23815[(1)] = (6));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_23650 === (3))){
var inst_23647 = (state_23649[(2)]);
var state_23649__$1 = state_23649;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23649__$1,inst_23647);
} else {
if((state_val_23650 === (2))){
var state_23649__$1 = state_23649;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23649__$1,(4),jobs);
} else {
if((state_val_23650 === (1))){
var state_23649__$1 = state_23649;
var statearr_23656_23816 = state_23649__$1;
(statearr_23656_23816[(2)] = null);

(statearr_23656_23816[(1)] = (2));


return cljs.core.constant$keyword$58;
} else {
return null;
}
}
}
}
}
}
}
});})(__23807,c__11819__auto___23810,G__23636_23808,n__4517__auto___23806,jobs,results,process,async))
;
return ((function (__23807,switch__11739__auto__,c__11819__auto___23810,G__23636_23808,n__4517__auto___23806,jobs,results,process,async){
return (function() {
var state_machine__11740__auto__ = null;
var state_machine__11740__auto____0 = (function (){
var statearr_23660 = [null,null,null,null,null,null,null];
(statearr_23660[(0)] = state_machine__11740__auto__);

(statearr_23660[(1)] = (1));

return statearr_23660;
});
var state_machine__11740__auto____1 = (function (state_23649){
while(true){
var ret_value__11741__auto__ = (function (){try{while(true){
var result__11742__auto__ = switch__11739__auto__(state_23649);
if(cljs.core.keyword_identical_QMARK_(result__11742__auto__,cljs.core.constant$keyword$58)){
continue;
} else {
return result__11742__auto__;
}
break;
}
}catch (e23661){if((e23661 instanceof Object)){
var ex__11743__auto__ = e23661;
var statearr_23662_23817 = state_23649;
(statearr_23662_23817[(5)] = ex__11743__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23649);

return cljs.core.constant$keyword$58;
} else {
throw e23661;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11741__auto__,cljs.core.constant$keyword$58)){
var G__23818 = state_23649;
state_23649 = G__23818;
continue;
} else {
return ret_value__11741__auto__;
}
break;
}
});
state_machine__11740__auto__ = function(state_23649){
switch(arguments.length){
case 0:
return state_machine__11740__auto____0.call(this);
case 1:
return state_machine__11740__auto____1.call(this,state_23649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11740__auto____0;
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11740__auto____1;
return state_machine__11740__auto__;
})()
;})(__23807,switch__11739__auto__,c__11819__auto___23810,G__23636_23808,n__4517__auto___23806,jobs,results,process,async))
})();
var state__11821__auto__ = (function (){var statearr_23663 = (function (){return (f__11820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11820__auto__.cljs$core$IFn$_invoke$arity$0() : f__11820__auto__.call(null));
})();
(statearr_23663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11819__auto___23810);

return statearr_23663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11821__auto__);
});})(__23807,c__11819__auto___23810,G__23636_23808,n__4517__auto___23806,jobs,results,process,async))
);


break;
case "compute":
var c__11819__auto___23819 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__23807,c__11819__auto___23819,G__23636_23808,n__4517__auto___23806,jobs,results,process,async){
return (function (){
var f__11820__auto__ = (function (){var switch__11739__auto__ = ((function (__23807,c__11819__auto___23819,G__23636_23808,n__4517__auto___23806,jobs,results,process,async){
return (function (state_23676){
var state_val_23677 = (state_23676[(1)]);
if((state_val_23677 === (7))){
var inst_23672 = (state_23676[(2)]);
var state_23676__$1 = state_23676;
var statearr_23678_23820 = state_23676__$1;
(statearr_23678_23820[(2)] = inst_23672);

(statearr_23678_23820[(1)] = (3));


return cljs.core.constant$keyword$58;
} else {
if((state_val_23677 === (6))){
var state_23676__$1 = state_23676;
var statearr_23679_23821 = state_23676__$1;
(statearr_23679_23821[(2)] = null);

(statearr_23679_23821[(1)] = (7));


return cljs.core.constant$keyword$58;
} else {
if((state_val_23677 === (5))){
var state_23676__$1 = state_23676;
var statearr_23680_23822 = state_23676__$1;
(statearr_23680_23822[(2)] = null);

(statearr_23680_23822[(1)] = (2));


return cljs.core.constant$keyword$58;
} else {
if((state_val_23677 === (4))){
var inst_23666 = (state_23676[(2)]);
var inst_23667 = process(inst_23666);
var state_23676__$1 = state_23676;
if(cljs.core.truth_(inst_23667)){
var statearr_23681_23823 = state_23676__$1;
(statearr_23681_23823[(1)] = (5));

} else {
var statearr_23682_23824 = state_23676__$1;
(statearr_23682_23824[(1)] = (6));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_23677 === (3))){
var inst_23674 = (state_23676[(2)]);
var state_23676__$1 = state_23676;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23676__$1,inst_23674);
} else {
if((state_val_23677 === (2))){
var state_23676__$1 = state_23676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23676__$1,(4),jobs);
} else {
if((state_val_23677 === (1))){
var state_23676__$1 = state_23676;
var statearr_23683_23825 = state_23676__$1;
(statearr_23683_23825[(2)] = null);

(statearr_23683_23825[(1)] = (2));


return cljs.core.constant$keyword$58;
} else {
return null;
}
}
}
}
}
}
}
});})(__23807,c__11819__auto___23819,G__23636_23808,n__4517__auto___23806,jobs,results,process,async))
;
return ((function (__23807,switch__11739__auto__,c__11819__auto___23819,G__23636_23808,n__4517__auto___23806,jobs,results,process,async){
return (function() {
var state_machine__11740__auto__ = null;
var state_machine__11740__auto____0 = (function (){
var statearr_23687 = [null,null,null,null,null,null,null];
(statearr_23687[(0)] = state_machine__11740__auto__);

(statearr_23687[(1)] = (1));

return statearr_23687;
});
var state_machine__11740__auto____1 = (function (state_23676){
while(true){
var ret_value__11741__auto__ = (function (){try{while(true){
var result__11742__auto__ = switch__11739__auto__(state_23676);
if(cljs.core.keyword_identical_QMARK_(result__11742__auto__,cljs.core.constant$keyword$58)){
continue;
} else {
return result__11742__auto__;
}
break;
}
}catch (e23688){if((e23688 instanceof Object)){
var ex__11743__auto__ = e23688;
var statearr_23689_23826 = state_23676;
(statearr_23689_23826[(5)] = ex__11743__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23676);

return cljs.core.constant$keyword$58;
} else {
throw e23688;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11741__auto__,cljs.core.constant$keyword$58)){
var G__23827 = state_23676;
state_23676 = G__23827;
continue;
} else {
return ret_value__11741__auto__;
}
break;
}
});
state_machine__11740__auto__ = function(state_23676){
switch(arguments.length){
case 0:
return state_machine__11740__auto____0.call(this);
case 1:
return state_machine__11740__auto____1.call(this,state_23676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11740__auto____0;
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11740__auto____1;
return state_machine__11740__auto__;
})()
;})(__23807,switch__11739__auto__,c__11819__auto___23819,G__23636_23808,n__4517__auto___23806,jobs,results,process,async))
})();
var state__11821__auto__ = (function (){var statearr_23690 = (function (){return (f__11820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11820__auto__.cljs$core$IFn$_invoke$arity$0() : f__11820__auto__.call(null));
})();
(statearr_23690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11819__auto___23819);

return statearr_23690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11821__auto__);
});})(__23807,c__11819__auto___23819,G__23636_23808,n__4517__auto___23806,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23828 = (__23807 + (1));
__23807 = G__23828;
continue;
} else {
}
break;
}

var c__11819__auto___23829 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11819__auto___23829,jobs,results,process,async){
return (function (){
var f__11820__auto__ = (function (){var switch__11739__auto__ = ((function (c__11819__auto___23829,jobs,results,process,async){
return (function (state_23712){
var state_val_23713 = (state_23712[(1)]);
if((state_val_23713 === (9))){
var inst_23705 = (state_23712[(2)]);
var state_23712__$1 = (function (){var statearr_23714 = state_23712;
(statearr_23714[(7)] = inst_23705);

return statearr_23714;
})();
var statearr_23715_23830 = state_23712__$1;
(statearr_23715_23830[(2)] = null);

(statearr_23715_23830[(1)] = (2));


return cljs.core.constant$keyword$58;
} else {
if((state_val_23713 === (8))){
var inst_23698 = (state_23712[(8)]);
var inst_23703 = (state_23712[(2)]);
var state_23712__$1 = (function (){var statearr_23716 = state_23712;
(statearr_23716[(9)] = inst_23703);

return statearr_23716;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23712__$1,(9),results,inst_23698);
} else {
if((state_val_23713 === (7))){
var inst_23708 = (state_23712[(2)]);
var state_23712__$1 = state_23712;
var statearr_23717_23831 = state_23712__$1;
(statearr_23717_23831[(2)] = inst_23708);

(statearr_23717_23831[(1)] = (3));


return cljs.core.constant$keyword$58;
} else {
if((state_val_23713 === (6))){
var inst_23698 = (state_23712[(8)]);
var inst_23693 = (state_23712[(10)]);
var inst_23698__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_23699 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23700 = [inst_23693,inst_23698__$1];
var inst_23701 = (new cljs.core.PersistentVector(null,2,(5),inst_23699,inst_23700,null));
var state_23712__$1 = (function (){var statearr_23718 = state_23712;
(statearr_23718[(8)] = inst_23698__$1);

return statearr_23718;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23712__$1,(8),jobs,inst_23701);
} else {
if((state_val_23713 === (5))){
var inst_23696 = cljs.core.async.close_BANG_(jobs);
var state_23712__$1 = state_23712;
var statearr_23719_23832 = state_23712__$1;
(statearr_23719_23832[(2)] = inst_23696);

(statearr_23719_23832[(1)] = (7));


return cljs.core.constant$keyword$58;
} else {
if((state_val_23713 === (4))){
var inst_23693 = (state_23712[(10)]);
var inst_23693__$1 = (state_23712[(2)]);
var inst_23694 = (inst_23693__$1 == null);
var state_23712__$1 = (function (){var statearr_23720 = state_23712;
(statearr_23720[(10)] = inst_23693__$1);

return statearr_23720;
})();
if(cljs.core.truth_(inst_23694)){
var statearr_23721_23833 = state_23712__$1;
(statearr_23721_23833[(1)] = (5));

} else {
var statearr_23722_23834 = state_23712__$1;
(statearr_23722_23834[(1)] = (6));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_23713 === (3))){
var inst_23710 = (state_23712[(2)]);
var state_23712__$1 = state_23712;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23712__$1,inst_23710);
} else {
if((state_val_23713 === (2))){
var state_23712__$1 = state_23712;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23712__$1,(4),from);
} else {
if((state_val_23713 === (1))){
var state_23712__$1 = state_23712;
var statearr_23723_23835 = state_23712__$1;
(statearr_23723_23835[(2)] = null);

(statearr_23723_23835[(1)] = (2));


return cljs.core.constant$keyword$58;
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
});})(c__11819__auto___23829,jobs,results,process,async))
;
return ((function (switch__11739__auto__,c__11819__auto___23829,jobs,results,process,async){
return (function() {
var state_machine__11740__auto__ = null;
var state_machine__11740__auto____0 = (function (){
var statearr_23727 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23727[(0)] = state_machine__11740__auto__);

(statearr_23727[(1)] = (1));

return statearr_23727;
});
var state_machine__11740__auto____1 = (function (state_23712){
while(true){
var ret_value__11741__auto__ = (function (){try{while(true){
var result__11742__auto__ = switch__11739__auto__(state_23712);
if(cljs.core.keyword_identical_QMARK_(result__11742__auto__,cljs.core.constant$keyword$58)){
continue;
} else {
return result__11742__auto__;
}
break;
}
}catch (e23728){if((e23728 instanceof Object)){
var ex__11743__auto__ = e23728;
var statearr_23729_23836 = state_23712;
(statearr_23729_23836[(5)] = ex__11743__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23712);

return cljs.core.constant$keyword$58;
} else {
throw e23728;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11741__auto__,cljs.core.constant$keyword$58)){
var G__23837 = state_23712;
state_23712 = G__23837;
continue;
} else {
return ret_value__11741__auto__;
}
break;
}
});
state_machine__11740__auto__ = function(state_23712){
switch(arguments.length){
case 0:
return state_machine__11740__auto____0.call(this);
case 1:
return state_machine__11740__auto____1.call(this,state_23712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11740__auto____0;
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11740__auto____1;
return state_machine__11740__auto__;
})()
;})(switch__11739__auto__,c__11819__auto___23829,jobs,results,process,async))
})();
var state__11821__auto__ = (function (){var statearr_23730 = (function (){return (f__11820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11820__auto__.cljs$core$IFn$_invoke$arity$0() : f__11820__auto__.call(null));
})();
(statearr_23730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11819__auto___23829);

return statearr_23730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11821__auto__);
});})(c__11819__auto___23829,jobs,results,process,async))
);


var c__11819__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11819__auto__,jobs,results,process,async){
return (function (){
var f__11820__auto__ = (function (){var switch__11739__auto__ = ((function (c__11819__auto__,jobs,results,process,async){
return (function (state_23768){
var state_val_23769 = (state_23768[(1)]);
if((state_val_23769 === (7))){
var inst_23764 = (state_23768[(2)]);
var state_23768__$1 = state_23768;
var statearr_23770_23838 = state_23768__$1;
(statearr_23770_23838[(2)] = inst_23764);

(statearr_23770_23838[(1)] = (3));


return cljs.core.constant$keyword$58;
} else {
if((state_val_23769 === (20))){
var state_23768__$1 = state_23768;
var statearr_23771_23839 = state_23768__$1;
(statearr_23771_23839[(2)] = null);

(statearr_23771_23839[(1)] = (21));


return cljs.core.constant$keyword$58;
} else {
if((state_val_23769 === (1))){
var state_23768__$1 = state_23768;
var statearr_23772_23840 = state_23768__$1;
(statearr_23772_23840[(2)] = null);

(statearr_23772_23840[(1)] = (2));


return cljs.core.constant$keyword$58;
} else {
if((state_val_23769 === (4))){
var inst_23733 = (state_23768[(7)]);
var inst_23733__$1 = (state_23768[(2)]);
var inst_23734 = (inst_23733__$1 == null);
var state_23768__$1 = (function (){var statearr_23773 = state_23768;
(statearr_23773[(7)] = inst_23733__$1);

return statearr_23773;
})();
if(cljs.core.truth_(inst_23734)){
var statearr_23774_23841 = state_23768__$1;
(statearr_23774_23841[(1)] = (5));

} else {
var statearr_23775_23842 = state_23768__$1;
(statearr_23775_23842[(1)] = (6));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_23769 === (15))){
var inst_23746 = (state_23768[(8)]);
var state_23768__$1 = state_23768;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23768__$1,(18),to,inst_23746);
} else {
if((state_val_23769 === (21))){
var inst_23759 = (state_23768[(2)]);
var state_23768__$1 = state_23768;
var statearr_23776_23843 = state_23768__$1;
(statearr_23776_23843[(2)] = inst_23759);

(statearr_23776_23843[(1)] = (13));


return cljs.core.constant$keyword$58;
} else {
if((state_val_23769 === (13))){
var inst_23761 = (state_23768[(2)]);
var state_23768__$1 = (function (){var statearr_23777 = state_23768;
(statearr_23777[(9)] = inst_23761);

return statearr_23777;
})();
var statearr_23778_23844 = state_23768__$1;
(statearr_23778_23844[(2)] = null);

(statearr_23778_23844[(1)] = (2));


return cljs.core.constant$keyword$58;
} else {
if((state_val_23769 === (6))){
var inst_23733 = (state_23768[(7)]);
var state_23768__$1 = state_23768;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23768__$1,(11),inst_23733);
} else {
if((state_val_23769 === (17))){
var inst_23754 = (state_23768[(2)]);
var state_23768__$1 = state_23768;
if(cljs.core.truth_(inst_23754)){
var statearr_23779_23845 = state_23768__$1;
(statearr_23779_23845[(1)] = (19));

} else {
var statearr_23780_23846 = state_23768__$1;
(statearr_23780_23846[(1)] = (20));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_23769 === (3))){
var inst_23766 = (state_23768[(2)]);
var state_23768__$1 = state_23768;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23768__$1,inst_23766);
} else {
if((state_val_23769 === (12))){
var inst_23743 = (state_23768[(10)]);
var state_23768__$1 = state_23768;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23768__$1,(14),inst_23743);
} else {
if((state_val_23769 === (2))){
var state_23768__$1 = state_23768;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23768__$1,(4),results);
} else {
if((state_val_23769 === (19))){
var state_23768__$1 = state_23768;
var statearr_23781_23847 = state_23768__$1;
(statearr_23781_23847[(2)] = null);

(statearr_23781_23847[(1)] = (12));


return cljs.core.constant$keyword$58;
} else {
if((state_val_23769 === (11))){
var inst_23743 = (state_23768[(2)]);
var state_23768__$1 = (function (){var statearr_23782 = state_23768;
(statearr_23782[(10)] = inst_23743);

return statearr_23782;
})();
var statearr_23783_23848 = state_23768__$1;
(statearr_23783_23848[(2)] = null);

(statearr_23783_23848[(1)] = (12));


return cljs.core.constant$keyword$58;
} else {
if((state_val_23769 === (9))){
var state_23768__$1 = state_23768;
var statearr_23784_23849 = state_23768__$1;
(statearr_23784_23849[(2)] = null);

(statearr_23784_23849[(1)] = (10));


return cljs.core.constant$keyword$58;
} else {
if((state_val_23769 === (5))){
var state_23768__$1 = state_23768;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23785_23850 = state_23768__$1;
(statearr_23785_23850[(1)] = (8));

} else {
var statearr_23786_23851 = state_23768__$1;
(statearr_23786_23851[(1)] = (9));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_23769 === (14))){
var inst_23748 = (state_23768[(11)]);
var inst_23746 = (state_23768[(8)]);
var inst_23746__$1 = (state_23768[(2)]);
var inst_23747 = (inst_23746__$1 == null);
var inst_23748__$1 = cljs.core.not(inst_23747);
var state_23768__$1 = (function (){var statearr_23787 = state_23768;
(statearr_23787[(11)] = inst_23748__$1);

(statearr_23787[(8)] = inst_23746__$1);

return statearr_23787;
})();
if(inst_23748__$1){
var statearr_23788_23852 = state_23768__$1;
(statearr_23788_23852[(1)] = (15));

} else {
var statearr_23789_23853 = state_23768__$1;
(statearr_23789_23853[(1)] = (16));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_23769 === (16))){
var inst_23748 = (state_23768[(11)]);
var state_23768__$1 = state_23768;
var statearr_23790_23854 = state_23768__$1;
(statearr_23790_23854[(2)] = inst_23748);

(statearr_23790_23854[(1)] = (17));


return cljs.core.constant$keyword$58;
} else {
if((state_val_23769 === (10))){
var inst_23740 = (state_23768[(2)]);
var state_23768__$1 = state_23768;
var statearr_23791_23855 = state_23768__$1;
(statearr_23791_23855[(2)] = inst_23740);

(statearr_23791_23855[(1)] = (7));


return cljs.core.constant$keyword$58;
} else {
if((state_val_23769 === (18))){
var inst_23751 = (state_23768[(2)]);
var state_23768__$1 = state_23768;
var statearr_23792_23856 = state_23768__$1;
(statearr_23792_23856[(2)] = inst_23751);

(statearr_23792_23856[(1)] = (17));


return cljs.core.constant$keyword$58;
} else {
if((state_val_23769 === (8))){
var inst_23737 = cljs.core.async.close_BANG_(to);
var state_23768__$1 = state_23768;
var statearr_23793_23857 = state_23768__$1;
(statearr_23793_23857[(2)] = inst_23737);

(statearr_23793_23857[(1)] = (10));


return cljs.core.constant$keyword$58;
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
});})(c__11819__auto__,jobs,results,process,async))
;
return ((function (switch__11739__auto__,c__11819__auto__,jobs,results,process,async){
return (function() {
var state_machine__11740__auto__ = null;
var state_machine__11740__auto____0 = (function (){
var statearr_23797 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23797[(0)] = state_machine__11740__auto__);

(statearr_23797[(1)] = (1));

return statearr_23797;
});
var state_machine__11740__auto____1 = (function (state_23768){
while(true){
var ret_value__11741__auto__ = (function (){try{while(true){
var result__11742__auto__ = switch__11739__auto__(state_23768);
if(cljs.core.keyword_identical_QMARK_(result__11742__auto__,cljs.core.constant$keyword$58)){
continue;
} else {
return result__11742__auto__;
}
break;
}
}catch (e23798){if((e23798 instanceof Object)){
var ex__11743__auto__ = e23798;
var statearr_23799_23858 = state_23768;
(statearr_23799_23858[(5)] = ex__11743__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23768);

return cljs.core.constant$keyword$58;
} else {
throw e23798;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11741__auto__,cljs.core.constant$keyword$58)){
var G__23859 = state_23768;
state_23768 = G__23859;
continue;
} else {
return ret_value__11741__auto__;
}
break;
}
});
state_machine__11740__auto__ = function(state_23768){
switch(arguments.length){
case 0:
return state_machine__11740__auto____0.call(this);
case 1:
return state_machine__11740__auto____1.call(this,state_23768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11740__auto____0;
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11740__auto____1;
return state_machine__11740__auto__;
})()
;})(switch__11739__auto__,c__11819__auto__,jobs,results,process,async))
})();
var state__11821__auto__ = (function (){var statearr_23800 = (function (){return (f__11820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11820__auto__.cljs$core$IFn$_invoke$arity$0() : f__11820__auto__.call(null));
})();
(statearr_23800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11819__auto__);

return statearr_23800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11821__auto__);
});})(c__11819__auto__,jobs,results,process,async))
);

return c__11819__auto__;
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
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.constant$keyword$65);
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
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.constant$keyword$66);
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
var c__11819__auto___23982 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11819__auto___23982,tc,fc){
return (function (){
var f__11820__auto__ = (function (){var switch__11739__auto__ = ((function (c__11819__auto___23982,tc,fc){
return (function (state_23956){
var state_val_23957 = (state_23956[(1)]);
if((state_val_23957 === (7))){
var inst_23952 = (state_23956[(2)]);
var state_23956__$1 = state_23956;
var statearr_23958_23983 = state_23956__$1;
(statearr_23958_23983[(2)] = inst_23952);

(statearr_23958_23983[(1)] = (3));


return cljs.core.constant$keyword$58;
} else {
if((state_val_23957 === (1))){
var state_23956__$1 = state_23956;
var statearr_23959_23984 = state_23956__$1;
(statearr_23959_23984[(2)] = null);

(statearr_23959_23984[(1)] = (2));


return cljs.core.constant$keyword$58;
} else {
if((state_val_23957 === (4))){
var inst_23933 = (state_23956[(7)]);
var inst_23933__$1 = (state_23956[(2)]);
var inst_23934 = (inst_23933__$1 == null);
var state_23956__$1 = (function (){var statearr_23960 = state_23956;
(statearr_23960[(7)] = inst_23933__$1);

return statearr_23960;
})();
if(cljs.core.truth_(inst_23934)){
var statearr_23961_23985 = state_23956__$1;
(statearr_23961_23985[(1)] = (5));

} else {
var statearr_23962_23986 = state_23956__$1;
(statearr_23962_23986[(1)] = (6));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_23957 === (13))){
var state_23956__$1 = state_23956;
var statearr_23963_23987 = state_23956__$1;
(statearr_23963_23987[(2)] = null);

(statearr_23963_23987[(1)] = (14));


return cljs.core.constant$keyword$58;
} else {
if((state_val_23957 === (6))){
var inst_23933 = (state_23956[(7)]);
var inst_23939 = (function (){var G__23964 = inst_23933;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__23964) : p.call(null,G__23964));
})();
var state_23956__$1 = state_23956;
if(cljs.core.truth_(inst_23939)){
var statearr_23965_23988 = state_23956__$1;
(statearr_23965_23988[(1)] = (9));

} else {
var statearr_23966_23989 = state_23956__$1;
(statearr_23966_23989[(1)] = (10));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_23957 === (3))){
var inst_23954 = (state_23956[(2)]);
var state_23956__$1 = state_23956;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23956__$1,inst_23954);
} else {
if((state_val_23957 === (12))){
var state_23956__$1 = state_23956;
var statearr_23967_23990 = state_23956__$1;
(statearr_23967_23990[(2)] = null);

(statearr_23967_23990[(1)] = (2));


return cljs.core.constant$keyword$58;
} else {
if((state_val_23957 === (2))){
var state_23956__$1 = state_23956;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23956__$1,(4),ch);
} else {
if((state_val_23957 === (11))){
var inst_23933 = (state_23956[(7)]);
var inst_23943 = (state_23956[(2)]);
var state_23956__$1 = state_23956;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23956__$1,(8),inst_23943,inst_23933);
} else {
if((state_val_23957 === (9))){
var state_23956__$1 = state_23956;
var statearr_23968_23991 = state_23956__$1;
(statearr_23968_23991[(2)] = tc);

(statearr_23968_23991[(1)] = (11));


return cljs.core.constant$keyword$58;
} else {
if((state_val_23957 === (5))){
var inst_23936 = cljs.core.async.close_BANG_(tc);
var inst_23937 = cljs.core.async.close_BANG_(fc);
var state_23956__$1 = (function (){var statearr_23969 = state_23956;
(statearr_23969[(8)] = inst_23936);

return statearr_23969;
})();
var statearr_23970_23992 = state_23956__$1;
(statearr_23970_23992[(2)] = inst_23937);

(statearr_23970_23992[(1)] = (7));


return cljs.core.constant$keyword$58;
} else {
if((state_val_23957 === (14))){
var inst_23950 = (state_23956[(2)]);
var state_23956__$1 = state_23956;
var statearr_23971_23993 = state_23956__$1;
(statearr_23971_23993[(2)] = inst_23950);

(statearr_23971_23993[(1)] = (7));


return cljs.core.constant$keyword$58;
} else {
if((state_val_23957 === (10))){
var state_23956__$1 = state_23956;
var statearr_23972_23994 = state_23956__$1;
(statearr_23972_23994[(2)] = fc);

(statearr_23972_23994[(1)] = (11));


return cljs.core.constant$keyword$58;
} else {
if((state_val_23957 === (8))){
var inst_23945 = (state_23956[(2)]);
var state_23956__$1 = state_23956;
if(cljs.core.truth_(inst_23945)){
var statearr_23973_23995 = state_23956__$1;
(statearr_23973_23995[(1)] = (12));

} else {
var statearr_23974_23996 = state_23956__$1;
(statearr_23974_23996[(1)] = (13));

}

return cljs.core.constant$keyword$58;
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
});})(c__11819__auto___23982,tc,fc))
;
return ((function (switch__11739__auto__,c__11819__auto___23982,tc,fc){
return (function() {
var state_machine__11740__auto__ = null;
var state_machine__11740__auto____0 = (function (){
var statearr_23978 = [null,null,null,null,null,null,null,null,null];
(statearr_23978[(0)] = state_machine__11740__auto__);

(statearr_23978[(1)] = (1));

return statearr_23978;
});
var state_machine__11740__auto____1 = (function (state_23956){
while(true){
var ret_value__11741__auto__ = (function (){try{while(true){
var result__11742__auto__ = switch__11739__auto__(state_23956);
if(cljs.core.keyword_identical_QMARK_(result__11742__auto__,cljs.core.constant$keyword$58)){
continue;
} else {
return result__11742__auto__;
}
break;
}
}catch (e23979){if((e23979 instanceof Object)){
var ex__11743__auto__ = e23979;
var statearr_23980_23997 = state_23956;
(statearr_23980_23997[(5)] = ex__11743__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23956);

return cljs.core.constant$keyword$58;
} else {
throw e23979;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11741__auto__,cljs.core.constant$keyword$58)){
var G__23998 = state_23956;
state_23956 = G__23998;
continue;
} else {
return ret_value__11741__auto__;
}
break;
}
});
state_machine__11740__auto__ = function(state_23956){
switch(arguments.length){
case 0:
return state_machine__11740__auto____0.call(this);
case 1:
return state_machine__11740__auto____1.call(this,state_23956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11740__auto____0;
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11740__auto____1;
return state_machine__11740__auto__;
})()
;})(switch__11739__auto__,c__11819__auto___23982,tc,fc))
})();
var state__11821__auto__ = (function (){var statearr_23981 = (function (){return (f__11820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11820__auto__.cljs$core$IFn$_invoke$arity$0() : f__11820__auto__.call(null));
})();
(statearr_23981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11819__auto___23982);

return statearr_23981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11821__auto__);
});})(c__11819__auto___23982,tc,fc))
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
var c__11819__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11819__auto__){
return (function (){
var f__11820__auto__ = (function (){var switch__11739__auto__ = ((function (c__11819__auto__){
return (function (state_24047){
var state_val_24048 = (state_24047[(1)]);
if((state_val_24048 === (7))){
var inst_24043 = (state_24047[(2)]);
var state_24047__$1 = state_24047;
var statearr_24049_24067 = state_24047__$1;
(statearr_24049_24067[(2)] = inst_24043);

(statearr_24049_24067[(1)] = (3));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24048 === (6))){
var inst_24036 = (state_24047[(7)]);
var inst_24033 = (state_24047[(8)]);
var inst_24040 = (function (){var G__24050 = inst_24033;
var G__24051 = inst_24036;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24050,G__24051) : f.call(null,G__24050,G__24051));
})();
var inst_24033__$1 = inst_24040;
var state_24047__$1 = (function (){var statearr_24052 = state_24047;
(statearr_24052[(8)] = inst_24033__$1);

return statearr_24052;
})();
var statearr_24053_24068 = state_24047__$1;
(statearr_24053_24068[(2)] = null);

(statearr_24053_24068[(1)] = (2));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24048 === (5))){
var inst_24033 = (state_24047[(8)]);
var state_24047__$1 = state_24047;
var statearr_24054_24069 = state_24047__$1;
(statearr_24054_24069[(2)] = inst_24033);

(statearr_24054_24069[(1)] = (7));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24048 === (4))){
var inst_24036 = (state_24047[(7)]);
var inst_24036__$1 = (state_24047[(2)]);
var inst_24037 = (inst_24036__$1 == null);
var state_24047__$1 = (function (){var statearr_24055 = state_24047;
(statearr_24055[(7)] = inst_24036__$1);

return statearr_24055;
})();
if(cljs.core.truth_(inst_24037)){
var statearr_24056_24070 = state_24047__$1;
(statearr_24056_24070[(1)] = (5));

} else {
var statearr_24057_24071 = state_24047__$1;
(statearr_24057_24071[(1)] = (6));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_24048 === (3))){
var inst_24045 = (state_24047[(2)]);
var state_24047__$1 = state_24047;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24047__$1,inst_24045);
} else {
if((state_val_24048 === (2))){
var state_24047__$1 = state_24047;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24047__$1,(4),ch);
} else {
if((state_val_24048 === (1))){
var inst_24033 = init;
var state_24047__$1 = (function (){var statearr_24058 = state_24047;
(statearr_24058[(8)] = inst_24033);

return statearr_24058;
})();
var statearr_24059_24072 = state_24047__$1;
(statearr_24059_24072[(2)] = null);

(statearr_24059_24072[(1)] = (2));


return cljs.core.constant$keyword$58;
} else {
return null;
}
}
}
}
}
}
}
});})(c__11819__auto__))
;
return ((function (switch__11739__auto__,c__11819__auto__){
return (function() {
var state_machine__11740__auto__ = null;
var state_machine__11740__auto____0 = (function (){
var statearr_24063 = [null,null,null,null,null,null,null,null,null];
(statearr_24063[(0)] = state_machine__11740__auto__);

(statearr_24063[(1)] = (1));

return statearr_24063;
});
var state_machine__11740__auto____1 = (function (state_24047){
while(true){
var ret_value__11741__auto__ = (function (){try{while(true){
var result__11742__auto__ = switch__11739__auto__(state_24047);
if(cljs.core.keyword_identical_QMARK_(result__11742__auto__,cljs.core.constant$keyword$58)){
continue;
} else {
return result__11742__auto__;
}
break;
}
}catch (e24064){if((e24064 instanceof Object)){
var ex__11743__auto__ = e24064;
var statearr_24065_24073 = state_24047;
(statearr_24065_24073[(5)] = ex__11743__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24047);

return cljs.core.constant$keyword$58;
} else {
throw e24064;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11741__auto__,cljs.core.constant$keyword$58)){
var G__24074 = state_24047;
state_24047 = G__24074;
continue;
} else {
return ret_value__11741__auto__;
}
break;
}
});
state_machine__11740__auto__ = function(state_24047){
switch(arguments.length){
case 0:
return state_machine__11740__auto____0.call(this);
case 1:
return state_machine__11740__auto____1.call(this,state_24047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11740__auto____0;
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11740__auto____1;
return state_machine__11740__auto__;
})()
;})(switch__11739__auto__,c__11819__auto__))
})();
var state__11821__auto__ = (function (){var statearr_24066 = (function (){return (f__11820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11820__auto__.cljs$core$IFn$_invoke$arity$0() : f__11820__auto__.call(null));
})();
(statearr_24066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11819__auto__);

return statearr_24066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11821__auto__);
});})(c__11819__auto__))
);

return c__11819__auto__;
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
var c__11819__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11819__auto__){
return (function (){
var f__11820__auto__ = (function (){var switch__11739__auto__ = ((function (c__11819__auto__){
return (function (state_24151){
var state_val_24152 = (state_24151[(1)]);
if((state_val_24152 === (7))){
var inst_24133 = (state_24151[(2)]);
var state_24151__$1 = state_24151;
var statearr_24153_24176 = state_24151__$1;
(statearr_24153_24176[(2)] = inst_24133);

(statearr_24153_24176[(1)] = (6));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24152 === (1))){
var inst_24127 = cljs.core.seq(coll);
var inst_24128 = inst_24127;
var state_24151__$1 = (function (){var statearr_24154 = state_24151;
(statearr_24154[(7)] = inst_24128);

return statearr_24154;
})();
var statearr_24155_24177 = state_24151__$1;
(statearr_24155_24177[(2)] = null);

(statearr_24155_24177[(1)] = (2));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24152 === (4))){
var inst_24128 = (state_24151[(7)]);
var inst_24131 = cljs.core.first(inst_24128);
var state_24151__$1 = state_24151;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24151__$1,(7),ch,inst_24131);
} else {
if((state_val_24152 === (13))){
var inst_24145 = (state_24151[(2)]);
var state_24151__$1 = state_24151;
var statearr_24156_24178 = state_24151__$1;
(statearr_24156_24178[(2)] = inst_24145);

(statearr_24156_24178[(1)] = (10));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24152 === (6))){
var inst_24136 = (state_24151[(2)]);
var state_24151__$1 = state_24151;
if(cljs.core.truth_(inst_24136)){
var statearr_24157_24179 = state_24151__$1;
(statearr_24157_24179[(1)] = (8));

} else {
var statearr_24158_24180 = state_24151__$1;
(statearr_24158_24180[(1)] = (9));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_24152 === (3))){
var inst_24149 = (state_24151[(2)]);
var state_24151__$1 = state_24151;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24151__$1,inst_24149);
} else {
if((state_val_24152 === (12))){
var state_24151__$1 = state_24151;
var statearr_24159_24181 = state_24151__$1;
(statearr_24159_24181[(2)] = null);

(statearr_24159_24181[(1)] = (13));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24152 === (2))){
var inst_24128 = (state_24151[(7)]);
var state_24151__$1 = state_24151;
if(cljs.core.truth_(inst_24128)){
var statearr_24160_24182 = state_24151__$1;
(statearr_24160_24182[(1)] = (4));

} else {
var statearr_24161_24183 = state_24151__$1;
(statearr_24161_24183[(1)] = (5));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_24152 === (11))){
var inst_24142 = cljs.core.async.close_BANG_(ch);
var state_24151__$1 = state_24151;
var statearr_24162_24184 = state_24151__$1;
(statearr_24162_24184[(2)] = inst_24142);

(statearr_24162_24184[(1)] = (13));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24152 === (9))){
var state_24151__$1 = state_24151;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24163_24185 = state_24151__$1;
(statearr_24163_24185[(1)] = (11));

} else {
var statearr_24164_24186 = state_24151__$1;
(statearr_24164_24186[(1)] = (12));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_24152 === (5))){
var inst_24128 = (state_24151[(7)]);
var state_24151__$1 = state_24151;
var statearr_24165_24187 = state_24151__$1;
(statearr_24165_24187[(2)] = inst_24128);

(statearr_24165_24187[(1)] = (6));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24152 === (10))){
var inst_24147 = (state_24151[(2)]);
var state_24151__$1 = state_24151;
var statearr_24166_24188 = state_24151__$1;
(statearr_24166_24188[(2)] = inst_24147);

(statearr_24166_24188[(1)] = (3));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24152 === (8))){
var inst_24128 = (state_24151[(7)]);
var inst_24138 = cljs.core.next(inst_24128);
var inst_24128__$1 = inst_24138;
var state_24151__$1 = (function (){var statearr_24167 = state_24151;
(statearr_24167[(7)] = inst_24128__$1);

return statearr_24167;
})();
var statearr_24168_24189 = state_24151__$1;
(statearr_24168_24189[(2)] = null);

(statearr_24168_24189[(1)] = (2));


return cljs.core.constant$keyword$58;
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
});})(c__11819__auto__))
;
return ((function (switch__11739__auto__,c__11819__auto__){
return (function() {
var state_machine__11740__auto__ = null;
var state_machine__11740__auto____0 = (function (){
var statearr_24172 = [null,null,null,null,null,null,null,null];
(statearr_24172[(0)] = state_machine__11740__auto__);

(statearr_24172[(1)] = (1));

return statearr_24172;
});
var state_machine__11740__auto____1 = (function (state_24151){
while(true){
var ret_value__11741__auto__ = (function (){try{while(true){
var result__11742__auto__ = switch__11739__auto__(state_24151);
if(cljs.core.keyword_identical_QMARK_(result__11742__auto__,cljs.core.constant$keyword$58)){
continue;
} else {
return result__11742__auto__;
}
break;
}
}catch (e24173){if((e24173 instanceof Object)){
var ex__11743__auto__ = e24173;
var statearr_24174_24190 = state_24151;
(statearr_24174_24190[(5)] = ex__11743__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24151);

return cljs.core.constant$keyword$58;
} else {
throw e24173;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11741__auto__,cljs.core.constant$keyword$58)){
var G__24191 = state_24151;
state_24151 = G__24191;
continue;
} else {
return ret_value__11741__auto__;
}
break;
}
});
state_machine__11740__auto__ = function(state_24151){
switch(arguments.length){
case 0:
return state_machine__11740__auto____0.call(this);
case 1:
return state_machine__11740__auto____1.call(this,state_24151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11740__auto____0;
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11740__auto____1;
return state_machine__11740__auto__;
})()
;})(switch__11739__auto__,c__11819__auto__))
})();
var state__11821__auto__ = (function (){var statearr_24175 = (function (){return (f__11820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11820__auto__.cljs$core$IFn$_invoke$arity$0() : f__11820__auto__.call(null));
})();
(statearr_24175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11819__auto__);

return statearr_24175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11821__auto__);
});})(c__11819__auto__))
);

return c__11819__auto__;
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

cljs.core.async.Mux = (function (){var obj24193 = {};
return obj24193;
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
return (function (){var or__3630__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__24197 = x__4274__auto__;
return goog.typeOf(G__24197);
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


cljs.core.async.Mult = (function (){var obj24199 = {};
return obj24199;
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
return (function (){var or__3630__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__24203 = x__4274__auto__;
return goog.typeOf(G__24203);
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
return (function (){var or__3630__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__24207 = x__4274__auto__;
return goog.typeOf(G__24207);
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
return (function (){var or__3630__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__24211 = x__4274__auto__;
return goog.typeOf(G__24211);
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
var cs = (function (){var G__24441 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24441) : cljs.core.atom.call(null,G__24441));
})();
var m = (function (){
if(typeof cljs.core.async.t24442 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24442 = (function (cs,ch,mult,meta24443){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24443 = meta24443;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24442.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t24442.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t24442.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t24442.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__24445_24670 = self__.cs;
var G__24446_24671 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24445_24670,G__24446_24671) : cljs.core.reset_BANG_.call(null,G__24445_24670,G__24446_24671));

return null;
});})(cs))
;

cljs.core.async.t24442.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24442.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t24442.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24444){
var self__ = this;
var _24444__$1 = this;
return self__.meta24443;
});})(cs))
;

cljs.core.async.t24442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24444,meta24443__$1){
var self__ = this;
var _24444__$1 = this;
return (new cljs.core.async.t24442(self__.cs,self__.ch,self__.mult,meta24443__$1));
});})(cs))
;

cljs.core.async.t24442.cljs$lang$type = true;

cljs.core.async.t24442.cljs$lang$ctorStr = "cljs.core.async/t24442";

cljs.core.async.t24442.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24442");
});})(cs))
;

cljs.core.async.__GT_t24442 = ((function (cs){
return (function __GT_t24442(cs__$1,ch__$1,mult__$1,meta24443){
return (new cljs.core.async.t24442(cs__$1,ch__$1,mult__$1,meta24443));
});})(cs))
;

}

return (new cljs.core.async.t24442(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,397,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,390,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__24447 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24447) : cljs.core.atom.call(null,G__24447));
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
var c__11819__auto___24672 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11819__auto___24672,cs,m,dchan,dctr,done){
return (function (){
var f__11820__auto__ = (function (){var switch__11739__auto__ = ((function (c__11819__auto___24672,cs,m,dchan,dctr,done){
return (function (state_24578){
var state_val_24579 = (state_24578[(1)]);
if((state_val_24579 === (7))){
var inst_24574 = (state_24578[(2)]);
var state_24578__$1 = state_24578;
var statearr_24580_24673 = state_24578__$1;
(statearr_24580_24673[(2)] = inst_24574);

(statearr_24580_24673[(1)] = (3));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (20))){
var inst_24479 = (state_24578[(7)]);
var inst_24489 = cljs.core.first(inst_24479);
var inst_24490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24489,(0),null);
var inst_24491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24489,(1),null);
var state_24578__$1 = (function (){var statearr_24581 = state_24578;
(statearr_24581[(8)] = inst_24490);

return statearr_24581;
})();
if(cljs.core.truth_(inst_24491)){
var statearr_24582_24674 = state_24578__$1;
(statearr_24582_24674[(1)] = (22));

} else {
var statearr_24583_24675 = state_24578__$1;
(statearr_24583_24675[(1)] = (23));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (27))){
var inst_24521 = (state_24578[(9)]);
var inst_24519 = (state_24578[(10)]);
var inst_24450 = (state_24578[(11)]);
var inst_24526 = (state_24578[(12)]);
var inst_24526__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24519,inst_24521);
var inst_24527 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24526__$1,inst_24450,done);
var state_24578__$1 = (function (){var statearr_24584 = state_24578;
(statearr_24584[(12)] = inst_24526__$1);

return statearr_24584;
})();
if(cljs.core.truth_(inst_24527)){
var statearr_24585_24676 = state_24578__$1;
(statearr_24585_24676[(1)] = (30));

} else {
var statearr_24586_24677 = state_24578__$1;
(statearr_24586_24677[(1)] = (31));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (1))){
var state_24578__$1 = state_24578;
var statearr_24587_24678 = state_24578__$1;
(statearr_24587_24678[(2)] = null);

(statearr_24587_24678[(1)] = (2));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (24))){
var inst_24479 = (state_24578[(7)]);
var inst_24496 = (state_24578[(2)]);
var inst_24497 = cljs.core.next(inst_24479);
var inst_24459 = inst_24497;
var inst_24460 = null;
var inst_24461 = (0);
var inst_24462 = (0);
var state_24578__$1 = (function (){var statearr_24588 = state_24578;
(statearr_24588[(13)] = inst_24462);

(statearr_24588[(14)] = inst_24496);

(statearr_24588[(15)] = inst_24459);

(statearr_24588[(16)] = inst_24461);

(statearr_24588[(17)] = inst_24460);

return statearr_24588;
})();
var statearr_24589_24679 = state_24578__$1;
(statearr_24589_24679[(2)] = null);

(statearr_24589_24679[(1)] = (8));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (39))){
var state_24578__$1 = state_24578;
var statearr_24593_24680 = state_24578__$1;
(statearr_24593_24680[(2)] = null);

(statearr_24593_24680[(1)] = (41));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (4))){
var inst_24450 = (state_24578[(11)]);
var inst_24450__$1 = (state_24578[(2)]);
var inst_24451 = (inst_24450__$1 == null);
var state_24578__$1 = (function (){var statearr_24594 = state_24578;
(statearr_24594[(11)] = inst_24450__$1);

return statearr_24594;
})();
if(cljs.core.truth_(inst_24451)){
var statearr_24595_24681 = state_24578__$1;
(statearr_24595_24681[(1)] = (5));

} else {
var statearr_24596_24682 = state_24578__$1;
(statearr_24596_24682[(1)] = (6));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (15))){
var inst_24462 = (state_24578[(13)]);
var inst_24459 = (state_24578[(15)]);
var inst_24461 = (state_24578[(16)]);
var inst_24460 = (state_24578[(17)]);
var inst_24475 = (state_24578[(2)]);
var inst_24476 = (inst_24462 + (1));
var tmp24590 = inst_24459;
var tmp24591 = inst_24461;
var tmp24592 = inst_24460;
var inst_24459__$1 = tmp24590;
var inst_24460__$1 = tmp24592;
var inst_24461__$1 = tmp24591;
var inst_24462__$1 = inst_24476;
var state_24578__$1 = (function (){var statearr_24597 = state_24578;
(statearr_24597[(13)] = inst_24462__$1);

(statearr_24597[(18)] = inst_24475);

(statearr_24597[(15)] = inst_24459__$1);

(statearr_24597[(16)] = inst_24461__$1);

(statearr_24597[(17)] = inst_24460__$1);

return statearr_24597;
})();
var statearr_24598_24683 = state_24578__$1;
(statearr_24598_24683[(2)] = null);

(statearr_24598_24683[(1)] = (8));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (21))){
var inst_24500 = (state_24578[(2)]);
var state_24578__$1 = state_24578;
var statearr_24602_24684 = state_24578__$1;
(statearr_24602_24684[(2)] = inst_24500);

(statearr_24602_24684[(1)] = (18));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (31))){
var inst_24526 = (state_24578[(12)]);
var inst_24530 = done(null);
var inst_24531 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24526);
var state_24578__$1 = (function (){var statearr_24603 = state_24578;
(statearr_24603[(19)] = inst_24530);

return statearr_24603;
})();
var statearr_24604_24685 = state_24578__$1;
(statearr_24604_24685[(2)] = inst_24531);

(statearr_24604_24685[(1)] = (32));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (32))){
var inst_24520 = (state_24578[(20)]);
var inst_24518 = (state_24578[(21)]);
var inst_24521 = (state_24578[(9)]);
var inst_24519 = (state_24578[(10)]);
var inst_24533 = (state_24578[(2)]);
var inst_24534 = (inst_24521 + (1));
var tmp24599 = inst_24520;
var tmp24600 = inst_24518;
var tmp24601 = inst_24519;
var inst_24518__$1 = tmp24600;
var inst_24519__$1 = tmp24601;
var inst_24520__$1 = tmp24599;
var inst_24521__$1 = inst_24534;
var state_24578__$1 = (function (){var statearr_24605 = state_24578;
(statearr_24605[(20)] = inst_24520__$1);

(statearr_24605[(21)] = inst_24518__$1);

(statearr_24605[(9)] = inst_24521__$1);

(statearr_24605[(10)] = inst_24519__$1);

(statearr_24605[(22)] = inst_24533);

return statearr_24605;
})();
var statearr_24606_24686 = state_24578__$1;
(statearr_24606_24686[(2)] = null);

(statearr_24606_24686[(1)] = (25));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (40))){
var inst_24546 = (state_24578[(23)]);
var inst_24550 = done(null);
var inst_24551 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24546);
var state_24578__$1 = (function (){var statearr_24607 = state_24578;
(statearr_24607[(24)] = inst_24550);

return statearr_24607;
})();
var statearr_24608_24687 = state_24578__$1;
(statearr_24608_24687[(2)] = inst_24551);

(statearr_24608_24687[(1)] = (41));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (33))){
var inst_24537 = (state_24578[(25)]);
var inst_24539 = cljs.core.chunked_seq_QMARK_(inst_24537);
var state_24578__$1 = state_24578;
if(inst_24539){
var statearr_24609_24688 = state_24578__$1;
(statearr_24609_24688[(1)] = (36));

} else {
var statearr_24610_24689 = state_24578__$1;
(statearr_24610_24689[(1)] = (37));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (13))){
var inst_24469 = (state_24578[(26)]);
var inst_24472 = cljs.core.async.close_BANG_(inst_24469);
var state_24578__$1 = state_24578;
var statearr_24611_24690 = state_24578__$1;
(statearr_24611_24690[(2)] = inst_24472);

(statearr_24611_24690[(1)] = (15));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (22))){
var inst_24490 = (state_24578[(8)]);
var inst_24493 = cljs.core.async.close_BANG_(inst_24490);
var state_24578__$1 = state_24578;
var statearr_24612_24691 = state_24578__$1;
(statearr_24612_24691[(2)] = inst_24493);

(statearr_24612_24691[(1)] = (24));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (36))){
var inst_24537 = (state_24578[(25)]);
var inst_24541 = cljs.core.chunk_first(inst_24537);
var inst_24542 = cljs.core.chunk_rest(inst_24537);
var inst_24543 = cljs.core.count(inst_24541);
var inst_24518 = inst_24542;
var inst_24519 = inst_24541;
var inst_24520 = inst_24543;
var inst_24521 = (0);
var state_24578__$1 = (function (){var statearr_24613 = state_24578;
(statearr_24613[(20)] = inst_24520);

(statearr_24613[(21)] = inst_24518);

(statearr_24613[(9)] = inst_24521);

(statearr_24613[(10)] = inst_24519);

return statearr_24613;
})();
var statearr_24614_24692 = state_24578__$1;
(statearr_24614_24692[(2)] = null);

(statearr_24614_24692[(1)] = (25));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (41))){
var inst_24537 = (state_24578[(25)]);
var inst_24553 = (state_24578[(2)]);
var inst_24554 = cljs.core.next(inst_24537);
var inst_24518 = inst_24554;
var inst_24519 = null;
var inst_24520 = (0);
var inst_24521 = (0);
var state_24578__$1 = (function (){var statearr_24615 = state_24578;
(statearr_24615[(20)] = inst_24520);

(statearr_24615[(27)] = inst_24553);

(statearr_24615[(21)] = inst_24518);

(statearr_24615[(9)] = inst_24521);

(statearr_24615[(10)] = inst_24519);

return statearr_24615;
})();
var statearr_24616_24693 = state_24578__$1;
(statearr_24616_24693[(2)] = null);

(statearr_24616_24693[(1)] = (25));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (43))){
var state_24578__$1 = state_24578;
var statearr_24617_24694 = state_24578__$1;
(statearr_24617_24694[(2)] = null);

(statearr_24617_24694[(1)] = (44));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (29))){
var inst_24562 = (state_24578[(2)]);
var state_24578__$1 = state_24578;
var statearr_24618_24695 = state_24578__$1;
(statearr_24618_24695[(2)] = inst_24562);

(statearr_24618_24695[(1)] = (26));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (44))){
var inst_24571 = (state_24578[(2)]);
var state_24578__$1 = (function (){var statearr_24619 = state_24578;
(statearr_24619[(28)] = inst_24571);

return statearr_24619;
})();
var statearr_24620_24696 = state_24578__$1;
(statearr_24620_24696[(2)] = null);

(statearr_24620_24696[(1)] = (2));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (6))){
var inst_24510 = (state_24578[(29)]);
var inst_24509 = (function (){var G__24621 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24621) : cljs.core.deref.call(null,G__24621));
})();
var inst_24510__$1 = cljs.core.keys(inst_24509);
var inst_24511 = cljs.core.count(inst_24510__$1);
var inst_24512 = (function (){var G__24622 = dctr;
var G__24623 = inst_24511;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24622,G__24623) : cljs.core.reset_BANG_.call(null,G__24622,G__24623));
})();
var inst_24517 = cljs.core.seq(inst_24510__$1);
var inst_24518 = inst_24517;
var inst_24519 = null;
var inst_24520 = (0);
var inst_24521 = (0);
var state_24578__$1 = (function (){var statearr_24624 = state_24578;
(statearr_24624[(30)] = inst_24512);

(statearr_24624[(20)] = inst_24520);

(statearr_24624[(21)] = inst_24518);

(statearr_24624[(9)] = inst_24521);

(statearr_24624[(10)] = inst_24519);

(statearr_24624[(29)] = inst_24510__$1);

return statearr_24624;
})();
var statearr_24625_24697 = state_24578__$1;
(statearr_24625_24697[(2)] = null);

(statearr_24625_24697[(1)] = (25));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (28))){
var inst_24537 = (state_24578[(25)]);
var inst_24518 = (state_24578[(21)]);
var inst_24537__$1 = cljs.core.seq(inst_24518);
var state_24578__$1 = (function (){var statearr_24626 = state_24578;
(statearr_24626[(25)] = inst_24537__$1);

return statearr_24626;
})();
if(inst_24537__$1){
var statearr_24627_24698 = state_24578__$1;
(statearr_24627_24698[(1)] = (33));

} else {
var statearr_24628_24699 = state_24578__$1;
(statearr_24628_24699[(1)] = (34));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (25))){
var inst_24520 = (state_24578[(20)]);
var inst_24521 = (state_24578[(9)]);
var inst_24523 = (inst_24521 < inst_24520);
var inst_24524 = inst_24523;
var state_24578__$1 = state_24578;
if(cljs.core.truth_(inst_24524)){
var statearr_24629_24700 = state_24578__$1;
(statearr_24629_24700[(1)] = (27));

} else {
var statearr_24630_24701 = state_24578__$1;
(statearr_24630_24701[(1)] = (28));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (34))){
var state_24578__$1 = state_24578;
var statearr_24631_24702 = state_24578__$1;
(statearr_24631_24702[(2)] = null);

(statearr_24631_24702[(1)] = (35));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (17))){
var state_24578__$1 = state_24578;
var statearr_24632_24703 = state_24578__$1;
(statearr_24632_24703[(2)] = null);

(statearr_24632_24703[(1)] = (18));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (3))){
var inst_24576 = (state_24578[(2)]);
var state_24578__$1 = state_24578;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24578__$1,inst_24576);
} else {
if((state_val_24579 === (12))){
var inst_24505 = (state_24578[(2)]);
var state_24578__$1 = state_24578;
var statearr_24633_24704 = state_24578__$1;
(statearr_24633_24704[(2)] = inst_24505);

(statearr_24633_24704[(1)] = (9));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (2))){
var state_24578__$1 = state_24578;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24578__$1,(4),ch);
} else {
if((state_val_24579 === (23))){
var state_24578__$1 = state_24578;
var statearr_24634_24705 = state_24578__$1;
(statearr_24634_24705[(2)] = null);

(statearr_24634_24705[(1)] = (24));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (35))){
var inst_24560 = (state_24578[(2)]);
var state_24578__$1 = state_24578;
var statearr_24635_24706 = state_24578__$1;
(statearr_24635_24706[(2)] = inst_24560);

(statearr_24635_24706[(1)] = (29));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (19))){
var inst_24479 = (state_24578[(7)]);
var inst_24483 = cljs.core.chunk_first(inst_24479);
var inst_24484 = cljs.core.chunk_rest(inst_24479);
var inst_24485 = cljs.core.count(inst_24483);
var inst_24459 = inst_24484;
var inst_24460 = inst_24483;
var inst_24461 = inst_24485;
var inst_24462 = (0);
var state_24578__$1 = (function (){var statearr_24636 = state_24578;
(statearr_24636[(13)] = inst_24462);

(statearr_24636[(15)] = inst_24459);

(statearr_24636[(16)] = inst_24461);

(statearr_24636[(17)] = inst_24460);

return statearr_24636;
})();
var statearr_24637_24707 = state_24578__$1;
(statearr_24637_24707[(2)] = null);

(statearr_24637_24707[(1)] = (8));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (11))){
var inst_24459 = (state_24578[(15)]);
var inst_24479 = (state_24578[(7)]);
var inst_24479__$1 = cljs.core.seq(inst_24459);
var state_24578__$1 = (function (){var statearr_24638 = state_24578;
(statearr_24638[(7)] = inst_24479__$1);

return statearr_24638;
})();
if(inst_24479__$1){
var statearr_24639_24708 = state_24578__$1;
(statearr_24639_24708[(1)] = (16));

} else {
var statearr_24640_24709 = state_24578__$1;
(statearr_24640_24709[(1)] = (17));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (9))){
var inst_24507 = (state_24578[(2)]);
var state_24578__$1 = state_24578;
var statearr_24641_24710 = state_24578__$1;
(statearr_24641_24710[(2)] = inst_24507);

(statearr_24641_24710[(1)] = (7));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (5))){
var inst_24457 = (function (){var G__24642 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24642) : cljs.core.deref.call(null,G__24642));
})();
var inst_24458 = cljs.core.seq(inst_24457);
var inst_24459 = inst_24458;
var inst_24460 = null;
var inst_24461 = (0);
var inst_24462 = (0);
var state_24578__$1 = (function (){var statearr_24643 = state_24578;
(statearr_24643[(13)] = inst_24462);

(statearr_24643[(15)] = inst_24459);

(statearr_24643[(16)] = inst_24461);

(statearr_24643[(17)] = inst_24460);

return statearr_24643;
})();
var statearr_24644_24711 = state_24578__$1;
(statearr_24644_24711[(2)] = null);

(statearr_24644_24711[(1)] = (8));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (14))){
var state_24578__$1 = state_24578;
var statearr_24645_24712 = state_24578__$1;
(statearr_24645_24712[(2)] = null);

(statearr_24645_24712[(1)] = (15));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (45))){
var inst_24568 = (state_24578[(2)]);
var state_24578__$1 = state_24578;
var statearr_24646_24713 = state_24578__$1;
(statearr_24646_24713[(2)] = inst_24568);

(statearr_24646_24713[(1)] = (44));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (26))){
var inst_24510 = (state_24578[(29)]);
var inst_24564 = (state_24578[(2)]);
var inst_24565 = cljs.core.seq(inst_24510);
var state_24578__$1 = (function (){var statearr_24647 = state_24578;
(statearr_24647[(31)] = inst_24564);

return statearr_24647;
})();
if(inst_24565){
var statearr_24648_24714 = state_24578__$1;
(statearr_24648_24714[(1)] = (42));

} else {
var statearr_24649_24715 = state_24578__$1;
(statearr_24649_24715[(1)] = (43));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (16))){
var inst_24479 = (state_24578[(7)]);
var inst_24481 = cljs.core.chunked_seq_QMARK_(inst_24479);
var state_24578__$1 = state_24578;
if(inst_24481){
var statearr_24650_24716 = state_24578__$1;
(statearr_24650_24716[(1)] = (19));

} else {
var statearr_24651_24717 = state_24578__$1;
(statearr_24651_24717[(1)] = (20));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (38))){
var inst_24557 = (state_24578[(2)]);
var state_24578__$1 = state_24578;
var statearr_24652_24718 = state_24578__$1;
(statearr_24652_24718[(2)] = inst_24557);

(statearr_24652_24718[(1)] = (35));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (30))){
var state_24578__$1 = state_24578;
var statearr_24653_24719 = state_24578__$1;
(statearr_24653_24719[(2)] = null);

(statearr_24653_24719[(1)] = (32));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (10))){
var inst_24462 = (state_24578[(13)]);
var inst_24460 = (state_24578[(17)]);
var inst_24468 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24460,inst_24462);
var inst_24469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24468,(0),null);
var inst_24470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24468,(1),null);
var state_24578__$1 = (function (){var statearr_24654 = state_24578;
(statearr_24654[(26)] = inst_24469);

return statearr_24654;
})();
if(cljs.core.truth_(inst_24470)){
var statearr_24655_24720 = state_24578__$1;
(statearr_24655_24720[(1)] = (13));

} else {
var statearr_24656_24721 = state_24578__$1;
(statearr_24656_24721[(1)] = (14));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (18))){
var inst_24503 = (state_24578[(2)]);
var state_24578__$1 = state_24578;
var statearr_24657_24722 = state_24578__$1;
(statearr_24657_24722[(2)] = inst_24503);

(statearr_24657_24722[(1)] = (12));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (42))){
var state_24578__$1 = state_24578;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24578__$1,(45),dchan);
} else {
if((state_val_24579 === (37))){
var inst_24537 = (state_24578[(25)]);
var inst_24546 = (state_24578[(23)]);
var inst_24450 = (state_24578[(11)]);
var inst_24546__$1 = cljs.core.first(inst_24537);
var inst_24547 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24546__$1,inst_24450,done);
var state_24578__$1 = (function (){var statearr_24658 = state_24578;
(statearr_24658[(23)] = inst_24546__$1);

return statearr_24658;
})();
if(cljs.core.truth_(inst_24547)){
var statearr_24659_24723 = state_24578__$1;
(statearr_24659_24723[(1)] = (39));

} else {
var statearr_24660_24724 = state_24578__$1;
(statearr_24660_24724[(1)] = (40));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_24579 === (8))){
var inst_24462 = (state_24578[(13)]);
var inst_24461 = (state_24578[(16)]);
var inst_24464 = (inst_24462 < inst_24461);
var inst_24465 = inst_24464;
var state_24578__$1 = state_24578;
if(cljs.core.truth_(inst_24465)){
var statearr_24661_24725 = state_24578__$1;
(statearr_24661_24725[(1)] = (10));

} else {
var statearr_24662_24726 = state_24578__$1;
(statearr_24662_24726[(1)] = (11));

}

return cljs.core.constant$keyword$58;
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
});})(c__11819__auto___24672,cs,m,dchan,dctr,done))
;
return ((function (switch__11739__auto__,c__11819__auto___24672,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11740__auto__ = null;
var state_machine__11740__auto____0 = (function (){
var statearr_24666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24666[(0)] = state_machine__11740__auto__);

(statearr_24666[(1)] = (1));

return statearr_24666;
});
var state_machine__11740__auto____1 = (function (state_24578){
while(true){
var ret_value__11741__auto__ = (function (){try{while(true){
var result__11742__auto__ = switch__11739__auto__(state_24578);
if(cljs.core.keyword_identical_QMARK_(result__11742__auto__,cljs.core.constant$keyword$58)){
continue;
} else {
return result__11742__auto__;
}
break;
}
}catch (e24667){if((e24667 instanceof Object)){
var ex__11743__auto__ = e24667;
var statearr_24668_24727 = state_24578;
(statearr_24668_24727[(5)] = ex__11743__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24578);

return cljs.core.constant$keyword$58;
} else {
throw e24667;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11741__auto__,cljs.core.constant$keyword$58)){
var G__24728 = state_24578;
state_24578 = G__24728;
continue;
} else {
return ret_value__11741__auto__;
}
break;
}
});
state_machine__11740__auto__ = function(state_24578){
switch(arguments.length){
case 0:
return state_machine__11740__auto____0.call(this);
case 1:
return state_machine__11740__auto____1.call(this,state_24578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11740__auto____0;
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11740__auto____1;
return state_machine__11740__auto__;
})()
;})(switch__11739__auto__,c__11819__auto___24672,cs,m,dchan,dctr,done))
})();
var state__11821__auto__ = (function (){var statearr_24669 = (function (){return (f__11820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11820__auto__.cljs$core$IFn$_invoke$arity$0() : f__11820__auto__.call(null));
})();
(statearr_24669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11819__auto___24672);

return statearr_24669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11821__auto__);
});})(c__11819__auto___24672,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj24733 = {};
return obj24733;
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
return (function (){var or__3630__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__24737 = x__4274__auto__;
return goog.typeOf(G__24737);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__24741 = x__4274__auto__;
return goog.typeOf(G__24741);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__24745 = x__4274__auto__;
return goog.typeOf(G__24745);
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
return (function (){var or__3630__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__24749 = x__4274__auto__;
return goog.typeOf(G__24749);
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
return (function (){var or__3630__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__24753 = x__4274__auto__;
return goog.typeOf(G__24753);
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__24754){
var map__24760 = p__24754;
var map__24760__$1 = ((cljs.core.seq_QMARK_(map__24760))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24760):map__24760);
var opts = map__24760__$1;
var statearr_24761_24765 = state;
(statearr_24761_24765[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__24760,map__24760__$1,opts){
return (function (val){
var statearr_24762_24766 = state;
(statearr_24762_24766[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__24760,map__24760__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_24763_24767 = state;
(statearr_24763_24767[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__24764 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24764) : cljs.core.deref.call(null,G__24764));
})());


return cljs.core.constant$keyword$58;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__24754 = null;
if (arguments.length > 3) {
  p__24754 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__24754);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__24768){
var state = cljs.core.first(arglist__24768);
arglist__24768 = cljs.core.next(arglist__24768);
var cont_block = cljs.core.first(arglist__24768);
arglist__24768 = cljs.core.next(arglist__24768);
var ports = cljs.core.first(arglist__24768);
var p__24754 = cljs.core.rest(arglist__24768);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__24754);
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
var cs = (function (){var G__24902 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24902) : cljs.core.atom.call(null,G__24902));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$67,null,cljs.core.constant$keyword$68,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$69);
var solo_mode = (function (){var G__24903 = cljs.core.constant$keyword$68;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24903) : cljs.core.atom.call(null,G__24903));
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
if(cljs.core.truth_((function (){var G__24904 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__24904) : attr.call(null,G__24904));
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
var chs = (function (){var G__24905 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24905) : cljs.core.deref.call(null,G__24905));
})();
var mode = (function (){var G__24906 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24906) : cljs.core.deref.call(null,G__24906));
})();
var solos = pick(cljs.core.constant$keyword$69,chs);
var pauses = pick(cljs.core.constant$keyword$67,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$70,solos,cljs.core.constant$keyword$71,pick(cljs.core.constant$keyword$68,chs),cljs.core.constant$keyword$72,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$67)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t24907 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24907 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24908){
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
this.meta24908 = meta24908;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24907.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t24907.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24907.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24907.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__24910_25035 = self__.cs;
var G__24911_25036 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24910_25035,G__24911_25036) : cljs.core.reset_BANG_.call(null,G__24910_25035,G__24911_25036));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24907.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24907.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__24912 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__24912) : self__.solo_modes.call(null,G__24912));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__24913_25037 = self__.solo_mode;
var G__24914_25038 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24913_25037,G__24914_25038) : cljs.core.reset_BANG_.call(null,G__24913_25037,G__24914_25038));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24907.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24907.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24907.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24909){
var self__ = this;
var _24909__$1 = this;
return self__.meta24908;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24909,meta24908__$1){
var self__ = this;
var _24909__$1 = this;
return (new cljs.core.async.t24907(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24908__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24907.cljs$lang$type = true;

cljs.core.async.t24907.cljs$lang$ctorStr = "cljs.core.async/t24907";

cljs.core.async.t24907.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24907");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t24907 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24907(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24908){
return (new cljs.core.async.t24907(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24908));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t24907(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,25,cljs.core.constant$keyword$9,510,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,499,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
;
var c__11819__auto___25039 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11819__auto___25039,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11820__auto__ = (function (){var switch__11739__auto__ = ((function (c__11819__auto___25039,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24986){
var state_val_24987 = (state_24986[(1)]);
if((state_val_24987 === (7))){
var inst_24928 = (state_24986[(7)]);
var inst_24933 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24928);
var state_24986__$1 = state_24986;
var statearr_24988_25040 = state_24986__$1;
(statearr_24988_25040[(2)] = inst_24933);

(statearr_24988_25040[(1)] = (9));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24987 === (20))){
var inst_24943 = (state_24986[(8)]);
var state_24986__$1 = state_24986;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24986__$1,(23),out,inst_24943);
} else {
if((state_val_24987 === (1))){
var inst_24918 = (state_24986[(9)]);
var inst_24918__$1 = calc_state();
var inst_24919 = cljs.core.seq_QMARK_(inst_24918__$1);
var state_24986__$1 = (function (){var statearr_24989 = state_24986;
(statearr_24989[(9)] = inst_24918__$1);

return statearr_24989;
})();
if(inst_24919){
var statearr_24990_25041 = state_24986__$1;
(statearr_24990_25041[(1)] = (2));

} else {
var statearr_24991_25042 = state_24986__$1;
(statearr_24991_25042[(1)] = (3));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_24987 === (24))){
var inst_24936 = (state_24986[(10)]);
var inst_24928 = inst_24936;
var state_24986__$1 = (function (){var statearr_24992 = state_24986;
(statearr_24992[(7)] = inst_24928);

return statearr_24992;
})();
var statearr_24993_25043 = state_24986__$1;
(statearr_24993_25043[(2)] = null);

(statearr_24993_25043[(1)] = (5));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24987 === (4))){
var inst_24918 = (state_24986[(9)]);
var inst_24924 = (state_24986[(2)]);
var inst_24925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24924,cljs.core.constant$keyword$72);
var inst_24926 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24924,cljs.core.constant$keyword$71);
var inst_24927 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24924,cljs.core.constant$keyword$70);
var inst_24928 = inst_24918;
var state_24986__$1 = (function (){var statearr_24994 = state_24986;
(statearr_24994[(11)] = inst_24926);

(statearr_24994[(7)] = inst_24928);

(statearr_24994[(12)] = inst_24927);

(statearr_24994[(13)] = inst_24925);

return statearr_24994;
})();
var statearr_24995_25044 = state_24986__$1;
(statearr_24995_25044[(2)] = null);

(statearr_24995_25044[(1)] = (5));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24987 === (15))){
var state_24986__$1 = state_24986;
var statearr_24996_25045 = state_24986__$1;
(statearr_24996_25045[(2)] = null);

(statearr_24996_25045[(1)] = (16));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24987 === (21))){
var inst_24936 = (state_24986[(10)]);
var inst_24928 = inst_24936;
var state_24986__$1 = (function (){var statearr_24997 = state_24986;
(statearr_24997[(7)] = inst_24928);

return statearr_24997;
})();
var statearr_24998_25046 = state_24986__$1;
(statearr_24998_25046[(2)] = null);

(statearr_24998_25046[(1)] = (5));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24987 === (13))){
var inst_24982 = (state_24986[(2)]);
var state_24986__$1 = state_24986;
var statearr_24999_25047 = state_24986__$1;
(statearr_24999_25047[(2)] = inst_24982);

(statearr_24999_25047[(1)] = (6));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24987 === (22))){
var inst_24980 = (state_24986[(2)]);
var state_24986__$1 = state_24986;
var statearr_25000_25048 = state_24986__$1;
(statearr_25000_25048[(2)] = inst_24980);

(statearr_25000_25048[(1)] = (13));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24987 === (6))){
var inst_24984 = (state_24986[(2)]);
var state_24986__$1 = state_24986;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24986__$1,inst_24984);
} else {
if((state_val_24987 === (25))){
var state_24986__$1 = state_24986;
var statearr_25001_25049 = state_24986__$1;
(statearr_25001_25049[(2)] = null);

(statearr_25001_25049[(1)] = (26));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24987 === (17))){
var inst_24959 = (state_24986[(14)]);
var state_24986__$1 = state_24986;
var statearr_25002_25050 = state_24986__$1;
(statearr_25002_25050[(2)] = inst_24959);

(statearr_25002_25050[(1)] = (19));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24987 === (3))){
var inst_24918 = (state_24986[(9)]);
var state_24986__$1 = state_24986;
var statearr_25003_25051 = state_24986__$1;
(statearr_25003_25051[(2)] = inst_24918);

(statearr_25003_25051[(1)] = (4));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24987 === (12))){
var inst_24939 = (state_24986[(15)]);
var inst_24944 = (state_24986[(16)]);
var inst_24959 = (state_24986[(14)]);
var inst_24959__$1 = (function (){var G__25004 = inst_24944;
return (inst_24939.cljs$core$IFn$_invoke$arity$1 ? inst_24939.cljs$core$IFn$_invoke$arity$1(G__25004) : inst_24939.call(null,G__25004));
})();
var state_24986__$1 = (function (){var statearr_25005 = state_24986;
(statearr_25005[(14)] = inst_24959__$1);

return statearr_25005;
})();
if(cljs.core.truth_(inst_24959__$1)){
var statearr_25006_25052 = state_24986__$1;
(statearr_25006_25052[(1)] = (17));

} else {
var statearr_25007_25053 = state_24986__$1;
(statearr_25007_25053[(1)] = (18));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_24987 === (2))){
var inst_24918 = (state_24986[(9)]);
var inst_24921 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24918);
var state_24986__$1 = state_24986;
var statearr_25008_25054 = state_24986__$1;
(statearr_25008_25054[(2)] = inst_24921);

(statearr_25008_25054[(1)] = (4));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24987 === (23))){
var inst_24971 = (state_24986[(2)]);
var state_24986__$1 = state_24986;
if(cljs.core.truth_(inst_24971)){
var statearr_25009_25055 = state_24986__$1;
(statearr_25009_25055[(1)] = (24));

} else {
var statearr_25010_25056 = state_24986__$1;
(statearr_25010_25056[(1)] = (25));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_24987 === (19))){
var inst_24968 = (state_24986[(2)]);
var state_24986__$1 = state_24986;
if(cljs.core.truth_(inst_24968)){
var statearr_25011_25057 = state_24986__$1;
(statearr_25011_25057[(1)] = (20));

} else {
var statearr_25012_25058 = state_24986__$1;
(statearr_25012_25058[(1)] = (21));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_24987 === (11))){
var inst_24943 = (state_24986[(8)]);
var inst_24949 = (inst_24943 == null);
var state_24986__$1 = state_24986;
if(cljs.core.truth_(inst_24949)){
var statearr_25013_25059 = state_24986__$1;
(statearr_25013_25059[(1)] = (14));

} else {
var statearr_25014_25060 = state_24986__$1;
(statearr_25014_25060[(1)] = (15));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_24987 === (9))){
var inst_24936 = (state_24986[(10)]);
var inst_24936__$1 = (state_24986[(2)]);
var inst_24937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24936__$1,cljs.core.constant$keyword$72);
var inst_24938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24936__$1,cljs.core.constant$keyword$71);
var inst_24939 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24936__$1,cljs.core.constant$keyword$70);
var state_24986__$1 = (function (){var statearr_25015 = state_24986;
(statearr_25015[(10)] = inst_24936__$1);

(statearr_25015[(15)] = inst_24939);

(statearr_25015[(17)] = inst_24938);

return statearr_25015;
})();
return cljs.core.async.ioc_alts_BANG_(state_24986__$1,(10),inst_24937);
} else {
if((state_val_24987 === (5))){
var inst_24928 = (state_24986[(7)]);
var inst_24931 = cljs.core.seq_QMARK_(inst_24928);
var state_24986__$1 = state_24986;
if(inst_24931){
var statearr_25016_25061 = state_24986__$1;
(statearr_25016_25061[(1)] = (7));

} else {
var statearr_25017_25062 = state_24986__$1;
(statearr_25017_25062[(1)] = (8));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_24987 === (14))){
var inst_24944 = (state_24986[(16)]);
var inst_24951 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_24944);
var state_24986__$1 = state_24986;
var statearr_25018_25063 = state_24986__$1;
(statearr_25018_25063[(2)] = inst_24951);

(statearr_25018_25063[(1)] = (16));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24987 === (26))){
var inst_24976 = (state_24986[(2)]);
var state_24986__$1 = state_24986;
var statearr_25019_25064 = state_24986__$1;
(statearr_25019_25064[(2)] = inst_24976);

(statearr_25019_25064[(1)] = (22));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24987 === (16))){
var inst_24954 = (state_24986[(2)]);
var inst_24955 = calc_state();
var inst_24928 = inst_24955;
var state_24986__$1 = (function (){var statearr_25020 = state_24986;
(statearr_25020[(7)] = inst_24928);

(statearr_25020[(18)] = inst_24954);

return statearr_25020;
})();
var statearr_25021_25065 = state_24986__$1;
(statearr_25021_25065[(2)] = null);

(statearr_25021_25065[(1)] = (5));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24987 === (10))){
var inst_24943 = (state_24986[(8)]);
var inst_24944 = (state_24986[(16)]);
var inst_24942 = (state_24986[(2)]);
var inst_24943__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24942,(0),null);
var inst_24944__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24942,(1),null);
var inst_24945 = (inst_24943__$1 == null);
var inst_24946 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24944__$1,change);
var inst_24947 = (inst_24945) || (inst_24946);
var state_24986__$1 = (function (){var statearr_25022 = state_24986;
(statearr_25022[(8)] = inst_24943__$1);

(statearr_25022[(16)] = inst_24944__$1);

return statearr_25022;
})();
if(cljs.core.truth_(inst_24947)){
var statearr_25023_25066 = state_24986__$1;
(statearr_25023_25066[(1)] = (11));

} else {
var statearr_25024_25067 = state_24986__$1;
(statearr_25024_25067[(1)] = (12));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_24987 === (18))){
var inst_24939 = (state_24986[(15)]);
var inst_24944 = (state_24986[(16)]);
var inst_24938 = (state_24986[(17)]);
var inst_24963 = cljs.core.empty_QMARK_(inst_24939);
var inst_24964 = (function (){var G__25025 = inst_24944;
return (inst_24938.cljs$core$IFn$_invoke$arity$1 ? inst_24938.cljs$core$IFn$_invoke$arity$1(G__25025) : inst_24938.call(null,G__25025));
})();
var inst_24965 = cljs.core.not(inst_24964);
var inst_24966 = (inst_24963) && (inst_24965);
var state_24986__$1 = state_24986;
var statearr_25026_25068 = state_24986__$1;
(statearr_25026_25068[(2)] = inst_24966);

(statearr_25026_25068[(1)] = (19));


return cljs.core.constant$keyword$58;
} else {
if((state_val_24987 === (8))){
var inst_24928 = (state_24986[(7)]);
var state_24986__$1 = state_24986;
var statearr_25027_25069 = state_24986__$1;
(statearr_25027_25069[(2)] = inst_24928);

(statearr_25027_25069[(1)] = (9));


return cljs.core.constant$keyword$58;
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
});})(c__11819__auto___25039,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__11739__auto__,c__11819__auto___25039,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11740__auto__ = null;
var state_machine__11740__auto____0 = (function (){
var statearr_25031 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25031[(0)] = state_machine__11740__auto__);

(statearr_25031[(1)] = (1));

return statearr_25031;
});
var state_machine__11740__auto____1 = (function (state_24986){
while(true){
var ret_value__11741__auto__ = (function (){try{while(true){
var result__11742__auto__ = switch__11739__auto__(state_24986);
if(cljs.core.keyword_identical_QMARK_(result__11742__auto__,cljs.core.constant$keyword$58)){
continue;
} else {
return result__11742__auto__;
}
break;
}
}catch (e25032){if((e25032 instanceof Object)){
var ex__11743__auto__ = e25032;
var statearr_25033_25070 = state_24986;
(statearr_25033_25070[(5)] = ex__11743__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24986);

return cljs.core.constant$keyword$58;
} else {
throw e25032;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11741__auto__,cljs.core.constant$keyword$58)){
var G__25071 = state_24986;
state_24986 = G__25071;
continue;
} else {
return ret_value__11741__auto__;
}
break;
}
});
state_machine__11740__auto__ = function(state_24986){
switch(arguments.length){
case 0:
return state_machine__11740__auto____0.call(this);
case 1:
return state_machine__11740__auto____1.call(this,state_24986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11740__auto____0;
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11740__auto____1;
return state_machine__11740__auto__;
})()
;})(switch__11739__auto__,c__11819__auto___25039,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11821__auto__ = (function (){var statearr_25034 = (function (){return (f__11820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11820__auto__.cljs$core$IFn$_invoke$arity$0() : f__11820__auto__.call(null));
})();
(statearr_25034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11819__auto___25039);

return statearr_25034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11821__auto__);
});})(c__11819__auto___25039,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj25073 = {};
return obj25073;
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
return (function (){var or__3630__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__25077 = x__4274__auto__;
return goog.typeOf(G__25077);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__25081 = x__4274__auto__;
return goog.typeOf(G__25081);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__25087 = x__4274__auto__;
return goog.typeOf(G__25087);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__25089 = x__4274__auto__;
return goog.typeOf(G__25089);
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
var mults = (function (){var G__25228 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25228) : cljs.core.atom.call(null,G__25228));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__3630__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__25230 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25230) : cljs.core.deref.call(null,G__25230));
})(),topic);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3630__auto__,mults){
return (function (p1__25090_SHARP_){
if(cljs.core.truth_((function (){var G__25231 = topic;
return (p1__25090_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25090_SHARP_.cljs$core$IFn$_invoke$arity$1(G__25231) : p1__25090_SHARP_.call(null,G__25231));
})())){
return p1__25090_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25090_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__25232 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__25232) : buf_fn.call(null,G__25232));
})())));
}
});})(or__3630__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t25233 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25233 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25234){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25234 = meta25234;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25233.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t25233.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__25236 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__25236) : self__.ensure_mult.call(null,G__25236));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t25233.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__25237 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25237) : cljs.core.deref.call(null,G__25237));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t25233.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25238 = self__.mults;
var G__25239 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25238,G__25239) : cljs.core.reset_BANG_.call(null,G__25238,G__25239));
});})(mults,ensure_mult))
;

cljs.core.async.t25233.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t25233.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25233.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t25233.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25235){
var self__ = this;
var _25235__$1 = this;
return self__.meta25234;
});})(mults,ensure_mult))
;

cljs.core.async.t25233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25235,meta25234__$1){
var self__ = this;
var _25235__$1 = this;
return (new cljs.core.async.t25233(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25234__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t25233.cljs$lang$type = true;

cljs.core.async.t25233.cljs$lang$ctorStr = "cljs.core.async/t25233";

cljs.core.async.t25233.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25233");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t25233 = ((function (mults,ensure_mult){
return (function __GT_t25233(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25234){
return (new cljs.core.async.t25233(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25234));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t25233(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,65,cljs.core.constant$keyword$9,603,cljs.core.constant$keyword$10,14,cljs.core.constant$keyword$11,591,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
;
var c__11819__auto___25362 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11819__auto___25362,mults,ensure_mult,p){
return (function (){
var f__11820__auto__ = (function (){var switch__11739__auto__ = ((function (c__11819__auto___25362,mults,ensure_mult,p){
return (function (state_25311){
var state_val_25312 = (state_25311[(1)]);
if((state_val_25312 === (7))){
var inst_25307 = (state_25311[(2)]);
var state_25311__$1 = state_25311;
var statearr_25313_25363 = state_25311__$1;
(statearr_25313_25363[(2)] = inst_25307);

(statearr_25313_25363[(1)] = (3));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25312 === (20))){
var state_25311__$1 = state_25311;
var statearr_25314_25364 = state_25311__$1;
(statearr_25314_25364[(2)] = null);

(statearr_25314_25364[(1)] = (21));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25312 === (1))){
var state_25311__$1 = state_25311;
var statearr_25315_25365 = state_25311__$1;
(statearr_25315_25365[(2)] = null);

(statearr_25315_25365[(1)] = (2));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25312 === (24))){
var inst_25290 = (state_25311[(7)]);
var inst_25299 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25290);
var state_25311__$1 = state_25311;
var statearr_25316_25366 = state_25311__$1;
(statearr_25316_25366[(2)] = inst_25299);

(statearr_25316_25366[(1)] = (25));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25312 === (4))){
var inst_25242 = (state_25311[(8)]);
var inst_25242__$1 = (state_25311[(2)]);
var inst_25243 = (inst_25242__$1 == null);
var state_25311__$1 = (function (){var statearr_25317 = state_25311;
(statearr_25317[(8)] = inst_25242__$1);

return statearr_25317;
})();
if(cljs.core.truth_(inst_25243)){
var statearr_25318_25367 = state_25311__$1;
(statearr_25318_25367[(1)] = (5));

} else {
var statearr_25319_25368 = state_25311__$1;
(statearr_25319_25368[(1)] = (6));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_25312 === (15))){
var inst_25284 = (state_25311[(2)]);
var state_25311__$1 = state_25311;
var statearr_25320_25369 = state_25311__$1;
(statearr_25320_25369[(2)] = inst_25284);

(statearr_25320_25369[(1)] = (12));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25312 === (21))){
var inst_25304 = (state_25311[(2)]);
var state_25311__$1 = (function (){var statearr_25321 = state_25311;
(statearr_25321[(9)] = inst_25304);

return statearr_25321;
})();
var statearr_25322_25370 = state_25311__$1;
(statearr_25322_25370[(2)] = null);

(statearr_25322_25370[(1)] = (2));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25312 === (13))){
var inst_25266 = (state_25311[(10)]);
var inst_25268 = cljs.core.chunked_seq_QMARK_(inst_25266);
var state_25311__$1 = state_25311;
if(inst_25268){
var statearr_25323_25371 = state_25311__$1;
(statearr_25323_25371[(1)] = (16));

} else {
var statearr_25324_25372 = state_25311__$1;
(statearr_25324_25372[(1)] = (17));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_25312 === (22))){
var inst_25296 = (state_25311[(2)]);
var state_25311__$1 = state_25311;
if(cljs.core.truth_(inst_25296)){
var statearr_25325_25373 = state_25311__$1;
(statearr_25325_25373[(1)] = (23));

} else {
var statearr_25326_25374 = state_25311__$1;
(statearr_25326_25374[(1)] = (24));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_25312 === (6))){
var inst_25242 = (state_25311[(8)]);
var inst_25292 = (state_25311[(11)]);
var inst_25290 = (state_25311[(7)]);
var inst_25290__$1 = (function (){var G__25327 = inst_25242;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__25327) : topic_fn.call(null,G__25327));
})();
var inst_25291 = (function (){var G__25328 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25328) : cljs.core.deref.call(null,G__25328));
})();
var inst_25292__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25291,inst_25290__$1);
var state_25311__$1 = (function (){var statearr_25329 = state_25311;
(statearr_25329[(11)] = inst_25292__$1);

(statearr_25329[(7)] = inst_25290__$1);

return statearr_25329;
})();
if(cljs.core.truth_(inst_25292__$1)){
var statearr_25330_25375 = state_25311__$1;
(statearr_25330_25375[(1)] = (19));

} else {
var statearr_25331_25376 = state_25311__$1;
(statearr_25331_25376[(1)] = (20));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_25312 === (25))){
var inst_25301 = (state_25311[(2)]);
var state_25311__$1 = state_25311;
var statearr_25332_25377 = state_25311__$1;
(statearr_25332_25377[(2)] = inst_25301);

(statearr_25332_25377[(1)] = (21));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25312 === (17))){
var inst_25266 = (state_25311[(10)]);
var inst_25275 = cljs.core.first(inst_25266);
var inst_25276 = cljs.core.async.muxch_STAR_(inst_25275);
var inst_25277 = cljs.core.async.close_BANG_(inst_25276);
var inst_25278 = cljs.core.next(inst_25266);
var inst_25252 = inst_25278;
var inst_25253 = null;
var inst_25254 = (0);
var inst_25255 = (0);
var state_25311__$1 = (function (){var statearr_25333 = state_25311;
(statearr_25333[(12)] = inst_25255);

(statearr_25333[(13)] = inst_25254);

(statearr_25333[(14)] = inst_25252);

(statearr_25333[(15)] = inst_25277);

(statearr_25333[(16)] = inst_25253);

return statearr_25333;
})();
var statearr_25334_25378 = state_25311__$1;
(statearr_25334_25378[(2)] = null);

(statearr_25334_25378[(1)] = (8));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25312 === (3))){
var inst_25309 = (state_25311[(2)]);
var state_25311__$1 = state_25311;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25311__$1,inst_25309);
} else {
if((state_val_25312 === (12))){
var inst_25286 = (state_25311[(2)]);
var state_25311__$1 = state_25311;
var statearr_25335_25379 = state_25311__$1;
(statearr_25335_25379[(2)] = inst_25286);

(statearr_25335_25379[(1)] = (9));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25312 === (2))){
var state_25311__$1 = state_25311;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25311__$1,(4),ch);
} else {
if((state_val_25312 === (23))){
var state_25311__$1 = state_25311;
var statearr_25336_25380 = state_25311__$1;
(statearr_25336_25380[(2)] = null);

(statearr_25336_25380[(1)] = (25));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25312 === (19))){
var inst_25242 = (state_25311[(8)]);
var inst_25292 = (state_25311[(11)]);
var inst_25294 = cljs.core.async.muxch_STAR_(inst_25292);
var state_25311__$1 = state_25311;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25311__$1,(22),inst_25294,inst_25242);
} else {
if((state_val_25312 === (11))){
var inst_25252 = (state_25311[(14)]);
var inst_25266 = (state_25311[(10)]);
var inst_25266__$1 = cljs.core.seq(inst_25252);
var state_25311__$1 = (function (){var statearr_25337 = state_25311;
(statearr_25337[(10)] = inst_25266__$1);

return statearr_25337;
})();
if(inst_25266__$1){
var statearr_25338_25381 = state_25311__$1;
(statearr_25338_25381[(1)] = (13));

} else {
var statearr_25339_25382 = state_25311__$1;
(statearr_25339_25382[(1)] = (14));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_25312 === (9))){
var inst_25288 = (state_25311[(2)]);
var state_25311__$1 = state_25311;
var statearr_25340_25383 = state_25311__$1;
(statearr_25340_25383[(2)] = inst_25288);

(statearr_25340_25383[(1)] = (7));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25312 === (5))){
var inst_25249 = (function (){var G__25341 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25341) : cljs.core.deref.call(null,G__25341));
})();
var inst_25250 = cljs.core.vals(inst_25249);
var inst_25251 = cljs.core.seq(inst_25250);
var inst_25252 = inst_25251;
var inst_25253 = null;
var inst_25254 = (0);
var inst_25255 = (0);
var state_25311__$1 = (function (){var statearr_25342 = state_25311;
(statearr_25342[(12)] = inst_25255);

(statearr_25342[(13)] = inst_25254);

(statearr_25342[(14)] = inst_25252);

(statearr_25342[(16)] = inst_25253);

return statearr_25342;
})();
var statearr_25343_25384 = state_25311__$1;
(statearr_25343_25384[(2)] = null);

(statearr_25343_25384[(1)] = (8));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25312 === (14))){
var state_25311__$1 = state_25311;
var statearr_25347_25385 = state_25311__$1;
(statearr_25347_25385[(2)] = null);

(statearr_25347_25385[(1)] = (15));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25312 === (16))){
var inst_25266 = (state_25311[(10)]);
var inst_25270 = cljs.core.chunk_first(inst_25266);
var inst_25271 = cljs.core.chunk_rest(inst_25266);
var inst_25272 = cljs.core.count(inst_25270);
var inst_25252 = inst_25271;
var inst_25253 = inst_25270;
var inst_25254 = inst_25272;
var inst_25255 = (0);
var state_25311__$1 = (function (){var statearr_25348 = state_25311;
(statearr_25348[(12)] = inst_25255);

(statearr_25348[(13)] = inst_25254);

(statearr_25348[(14)] = inst_25252);

(statearr_25348[(16)] = inst_25253);

return statearr_25348;
})();
var statearr_25349_25386 = state_25311__$1;
(statearr_25349_25386[(2)] = null);

(statearr_25349_25386[(1)] = (8));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25312 === (10))){
var inst_25255 = (state_25311[(12)]);
var inst_25254 = (state_25311[(13)]);
var inst_25252 = (state_25311[(14)]);
var inst_25253 = (state_25311[(16)]);
var inst_25260 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25253,inst_25255);
var inst_25261 = cljs.core.async.muxch_STAR_(inst_25260);
var inst_25262 = cljs.core.async.close_BANG_(inst_25261);
var inst_25263 = (inst_25255 + (1));
var tmp25344 = inst_25254;
var tmp25345 = inst_25252;
var tmp25346 = inst_25253;
var inst_25252__$1 = tmp25345;
var inst_25253__$1 = tmp25346;
var inst_25254__$1 = tmp25344;
var inst_25255__$1 = inst_25263;
var state_25311__$1 = (function (){var statearr_25350 = state_25311;
(statearr_25350[(12)] = inst_25255__$1);

(statearr_25350[(17)] = inst_25262);

(statearr_25350[(13)] = inst_25254__$1);

(statearr_25350[(14)] = inst_25252__$1);

(statearr_25350[(16)] = inst_25253__$1);

return statearr_25350;
})();
var statearr_25351_25387 = state_25311__$1;
(statearr_25351_25387[(2)] = null);

(statearr_25351_25387[(1)] = (8));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25312 === (18))){
var inst_25281 = (state_25311[(2)]);
var state_25311__$1 = state_25311;
var statearr_25352_25388 = state_25311__$1;
(statearr_25352_25388[(2)] = inst_25281);

(statearr_25352_25388[(1)] = (15));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25312 === (8))){
var inst_25255 = (state_25311[(12)]);
var inst_25254 = (state_25311[(13)]);
var inst_25257 = (inst_25255 < inst_25254);
var inst_25258 = inst_25257;
var state_25311__$1 = state_25311;
if(cljs.core.truth_(inst_25258)){
var statearr_25353_25389 = state_25311__$1;
(statearr_25353_25389[(1)] = (10));

} else {
var statearr_25354_25390 = state_25311__$1;
(statearr_25354_25390[(1)] = (11));

}

return cljs.core.constant$keyword$58;
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
});})(c__11819__auto___25362,mults,ensure_mult,p))
;
return ((function (switch__11739__auto__,c__11819__auto___25362,mults,ensure_mult,p){
return (function() {
var state_machine__11740__auto__ = null;
var state_machine__11740__auto____0 = (function (){
var statearr_25358 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25358[(0)] = state_machine__11740__auto__);

(statearr_25358[(1)] = (1));

return statearr_25358;
});
var state_machine__11740__auto____1 = (function (state_25311){
while(true){
var ret_value__11741__auto__ = (function (){try{while(true){
var result__11742__auto__ = switch__11739__auto__(state_25311);
if(cljs.core.keyword_identical_QMARK_(result__11742__auto__,cljs.core.constant$keyword$58)){
continue;
} else {
return result__11742__auto__;
}
break;
}
}catch (e25359){if((e25359 instanceof Object)){
var ex__11743__auto__ = e25359;
var statearr_25360_25391 = state_25311;
(statearr_25360_25391[(5)] = ex__11743__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25311);

return cljs.core.constant$keyword$58;
} else {
throw e25359;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11741__auto__,cljs.core.constant$keyword$58)){
var G__25392 = state_25311;
state_25311 = G__25392;
continue;
} else {
return ret_value__11741__auto__;
}
break;
}
});
state_machine__11740__auto__ = function(state_25311){
switch(arguments.length){
case 0:
return state_machine__11740__auto____0.call(this);
case 1:
return state_machine__11740__auto____1.call(this,state_25311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11740__auto____0;
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11740__auto____1;
return state_machine__11740__auto__;
})()
;})(switch__11739__auto__,c__11819__auto___25362,mults,ensure_mult,p))
})();
var state__11821__auto__ = (function (){var statearr_25361 = (function (){return (f__11820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11820__auto__.cljs$core$IFn$_invoke$arity$0() : f__11820__auto__.call(null));
})();
(statearr_25361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11819__auto___25362);

return statearr_25361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11821__auto__);
});})(c__11819__auto___25362,mults,ensure_mult,p))
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
var dctr = (function (){var G__25473 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25473) : cljs.core.atom.call(null,G__25473));
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
var c__11819__auto___25546 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11819__auto___25546,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11820__auto__ = (function (){var switch__11739__auto__ = ((function (c__11819__auto___25546,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25512){
var state_val_25513 = (state_25512[(1)]);
if((state_val_25513 === (7))){
var state_25512__$1 = state_25512;
var statearr_25514_25547 = state_25512__$1;
(statearr_25514_25547[(2)] = null);

(statearr_25514_25547[(1)] = (8));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25513 === (1))){
var state_25512__$1 = state_25512;
var statearr_25515_25548 = state_25512__$1;
(statearr_25515_25548[(2)] = null);

(statearr_25515_25548[(1)] = (2));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25513 === (4))){
var inst_25476 = (state_25512[(7)]);
var inst_25478 = (inst_25476 < cnt);
var state_25512__$1 = state_25512;
if(cljs.core.truth_(inst_25478)){
var statearr_25516_25549 = state_25512__$1;
(statearr_25516_25549[(1)] = (6));

} else {
var statearr_25517_25550 = state_25512__$1;
(statearr_25517_25550[(1)] = (7));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_25513 === (15))){
var inst_25508 = (state_25512[(2)]);
var state_25512__$1 = state_25512;
var statearr_25518_25551 = state_25512__$1;
(statearr_25518_25551[(2)] = inst_25508);

(statearr_25518_25551[(1)] = (3));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25513 === (13))){
var inst_25501 = cljs.core.async.close_BANG_(out);
var state_25512__$1 = state_25512;
var statearr_25519_25552 = state_25512__$1;
(statearr_25519_25552[(2)] = inst_25501);

(statearr_25519_25552[(1)] = (15));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25513 === (6))){
var state_25512__$1 = state_25512;
var statearr_25520_25553 = state_25512__$1;
(statearr_25520_25553[(2)] = null);

(statearr_25520_25553[(1)] = (11));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25513 === (3))){
var inst_25510 = (state_25512[(2)]);
var state_25512__$1 = state_25512;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25512__$1,inst_25510);
} else {
if((state_val_25513 === (12))){
var inst_25498 = (state_25512[(8)]);
var inst_25498__$1 = (state_25512[(2)]);
var inst_25499 = cljs.core.some(cljs.core.nil_QMARK_,inst_25498__$1);
var state_25512__$1 = (function (){var statearr_25521 = state_25512;
(statearr_25521[(8)] = inst_25498__$1);

return statearr_25521;
})();
if(cljs.core.truth_(inst_25499)){
var statearr_25522_25554 = state_25512__$1;
(statearr_25522_25554[(1)] = (13));

} else {
var statearr_25523_25555 = state_25512__$1;
(statearr_25523_25555[(1)] = (14));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_25513 === (2))){
var inst_25475 = (function (){var G__25524 = dctr;
var G__25525 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25524,G__25525) : cljs.core.reset_BANG_.call(null,G__25524,G__25525));
})();
var inst_25476 = (0);
var state_25512__$1 = (function (){var statearr_25526 = state_25512;
(statearr_25526[(9)] = inst_25475);

(statearr_25526[(7)] = inst_25476);

return statearr_25526;
})();
var statearr_25527_25556 = state_25512__$1;
(statearr_25527_25556[(2)] = null);

(statearr_25527_25556[(1)] = (4));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25513 === (11))){
var inst_25476 = (state_25512[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25512,(10),Object,null,(9));
var inst_25485 = (function (){var G__25528 = inst_25476;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__25528) : chs__$1.call(null,G__25528));
})();
var inst_25486 = (function (){var G__25529 = inst_25476;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__25529) : done.call(null,G__25529));
})();
var inst_25487 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_25485,inst_25486);
var state_25512__$1 = state_25512;
var statearr_25530_25557 = state_25512__$1;
(statearr_25530_25557[(2)] = inst_25487);


cljs.core.async.impl.ioc_helpers.process_exception(state_25512__$1);

return cljs.core.constant$keyword$58;
} else {
if((state_val_25513 === (9))){
var inst_25476 = (state_25512[(7)]);
var inst_25489 = (state_25512[(2)]);
var inst_25490 = (inst_25476 + (1));
var inst_25476__$1 = inst_25490;
var state_25512__$1 = (function (){var statearr_25531 = state_25512;
(statearr_25531[(10)] = inst_25489);

(statearr_25531[(7)] = inst_25476__$1);

return statearr_25531;
})();
var statearr_25532_25558 = state_25512__$1;
(statearr_25532_25558[(2)] = null);

(statearr_25532_25558[(1)] = (4));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25513 === (5))){
var inst_25496 = (state_25512[(2)]);
var state_25512__$1 = (function (){var statearr_25533 = state_25512;
(statearr_25533[(11)] = inst_25496);

return statearr_25533;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25512__$1,(12),dchan);
} else {
if((state_val_25513 === (14))){
var inst_25498 = (state_25512[(8)]);
var inst_25503 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_25498);
var state_25512__$1 = state_25512;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25512__$1,(16),out,inst_25503);
} else {
if((state_val_25513 === (16))){
var inst_25505 = (state_25512[(2)]);
var state_25512__$1 = (function (){var statearr_25534 = state_25512;
(statearr_25534[(12)] = inst_25505);

return statearr_25534;
})();
var statearr_25535_25559 = state_25512__$1;
(statearr_25535_25559[(2)] = null);

(statearr_25535_25559[(1)] = (2));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25513 === (10))){
var inst_25480 = (state_25512[(2)]);
var inst_25481 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_25512__$1 = (function (){var statearr_25536 = state_25512;
(statearr_25536[(13)] = inst_25480);

return statearr_25536;
})();
var statearr_25537_25560 = state_25512__$1;
(statearr_25537_25560[(2)] = inst_25481);


cljs.core.async.impl.ioc_helpers.process_exception(state_25512__$1);

return cljs.core.constant$keyword$58;
} else {
if((state_val_25513 === (8))){
var inst_25494 = (state_25512[(2)]);
var state_25512__$1 = state_25512;
var statearr_25538_25561 = state_25512__$1;
(statearr_25538_25561[(2)] = inst_25494);

(statearr_25538_25561[(1)] = (5));


return cljs.core.constant$keyword$58;
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
});})(c__11819__auto___25546,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__11739__auto__,c__11819__auto___25546,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11740__auto__ = null;
var state_machine__11740__auto____0 = (function (){
var statearr_25542 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25542[(0)] = state_machine__11740__auto__);

(statearr_25542[(1)] = (1));

return statearr_25542;
});
var state_machine__11740__auto____1 = (function (state_25512){
while(true){
var ret_value__11741__auto__ = (function (){try{while(true){
var result__11742__auto__ = switch__11739__auto__(state_25512);
if(cljs.core.keyword_identical_QMARK_(result__11742__auto__,cljs.core.constant$keyword$58)){
continue;
} else {
return result__11742__auto__;
}
break;
}
}catch (e25543){if((e25543 instanceof Object)){
var ex__11743__auto__ = e25543;
var statearr_25544_25562 = state_25512;
(statearr_25544_25562[(5)] = ex__11743__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25512);

return cljs.core.constant$keyword$58;
} else {
throw e25543;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11741__auto__,cljs.core.constant$keyword$58)){
var G__25563 = state_25512;
state_25512 = G__25563;
continue;
} else {
return ret_value__11741__auto__;
}
break;
}
});
state_machine__11740__auto__ = function(state_25512){
switch(arguments.length){
case 0:
return state_machine__11740__auto____0.call(this);
case 1:
return state_machine__11740__auto____1.call(this,state_25512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11740__auto____0;
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11740__auto____1;
return state_machine__11740__auto__;
})()
;})(switch__11739__auto__,c__11819__auto___25546,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11821__auto__ = (function (){var statearr_25545 = (function (){return (f__11820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11820__auto__.cljs$core$IFn$_invoke$arity$0() : f__11820__auto__.call(null));
})();
(statearr_25545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11819__auto___25546);

return statearr_25545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11821__auto__);
});})(c__11819__auto___25546,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__11819__auto___25673 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11819__auto___25673,out){
return (function (){
var f__11820__auto__ = (function (){var switch__11739__auto__ = ((function (c__11819__auto___25673,out){
return (function (state_25649){
var state_val_25650 = (state_25649[(1)]);
if((state_val_25650 === (7))){
var inst_25628 = (state_25649[(7)]);
var inst_25629 = (state_25649[(8)]);
var inst_25628__$1 = (state_25649[(2)]);
var inst_25629__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25628__$1,(0),null);
var inst_25630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25628__$1,(1),null);
var inst_25631 = (inst_25629__$1 == null);
var state_25649__$1 = (function (){var statearr_25651 = state_25649;
(statearr_25651[(7)] = inst_25628__$1);

(statearr_25651[(8)] = inst_25629__$1);

(statearr_25651[(9)] = inst_25630);

return statearr_25651;
})();
if(cljs.core.truth_(inst_25631)){
var statearr_25652_25674 = state_25649__$1;
(statearr_25652_25674[(1)] = (8));

} else {
var statearr_25653_25675 = state_25649__$1;
(statearr_25653_25675[(1)] = (9));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_25650 === (1))){
var inst_25620 = cljs.core.vec(chs);
var inst_25621 = inst_25620;
var state_25649__$1 = (function (){var statearr_25654 = state_25649;
(statearr_25654[(10)] = inst_25621);

return statearr_25654;
})();
var statearr_25655_25676 = state_25649__$1;
(statearr_25655_25676[(2)] = null);

(statearr_25655_25676[(1)] = (2));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25650 === (4))){
var inst_25621 = (state_25649[(10)]);
var state_25649__$1 = state_25649;
return cljs.core.async.ioc_alts_BANG_(state_25649__$1,(7),inst_25621);
} else {
if((state_val_25650 === (6))){
var inst_25645 = (state_25649[(2)]);
var state_25649__$1 = state_25649;
var statearr_25656_25677 = state_25649__$1;
(statearr_25656_25677[(2)] = inst_25645);

(statearr_25656_25677[(1)] = (3));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25650 === (3))){
var inst_25647 = (state_25649[(2)]);
var state_25649__$1 = state_25649;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25649__$1,inst_25647);
} else {
if((state_val_25650 === (2))){
var inst_25621 = (state_25649[(10)]);
var inst_25623 = cljs.core.count(inst_25621);
var inst_25624 = (inst_25623 > (0));
var state_25649__$1 = state_25649;
if(cljs.core.truth_(inst_25624)){
var statearr_25658_25678 = state_25649__$1;
(statearr_25658_25678[(1)] = (4));

} else {
var statearr_25659_25679 = state_25649__$1;
(statearr_25659_25679[(1)] = (5));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_25650 === (11))){
var inst_25621 = (state_25649[(10)]);
var inst_25638 = (state_25649[(2)]);
var tmp25657 = inst_25621;
var inst_25621__$1 = tmp25657;
var state_25649__$1 = (function (){var statearr_25660 = state_25649;
(statearr_25660[(10)] = inst_25621__$1);

(statearr_25660[(11)] = inst_25638);

return statearr_25660;
})();
var statearr_25661_25680 = state_25649__$1;
(statearr_25661_25680[(2)] = null);

(statearr_25661_25680[(1)] = (2));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25650 === (9))){
var inst_25629 = (state_25649[(8)]);
var state_25649__$1 = state_25649;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25649__$1,(11),out,inst_25629);
} else {
if((state_val_25650 === (5))){
var inst_25643 = cljs.core.async.close_BANG_(out);
var state_25649__$1 = state_25649;
var statearr_25662_25681 = state_25649__$1;
(statearr_25662_25681[(2)] = inst_25643);

(statearr_25662_25681[(1)] = (6));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25650 === (10))){
var inst_25641 = (state_25649[(2)]);
var state_25649__$1 = state_25649;
var statearr_25663_25682 = state_25649__$1;
(statearr_25663_25682[(2)] = inst_25641);

(statearr_25663_25682[(1)] = (6));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25650 === (8))){
var inst_25628 = (state_25649[(7)]);
var inst_25629 = (state_25649[(8)]);
var inst_25630 = (state_25649[(9)]);
var inst_25621 = (state_25649[(10)]);
var inst_25633 = (function (){var c = inst_25630;
var v = inst_25629;
var vec__25626 = inst_25628;
var cs = inst_25621;
return ((function (c,v,vec__25626,cs,inst_25628,inst_25629,inst_25630,inst_25621,state_val_25650,c__11819__auto___25673,out){
return (function (p1__25564_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__25564_SHARP_);
});
;})(c,v,vec__25626,cs,inst_25628,inst_25629,inst_25630,inst_25621,state_val_25650,c__11819__auto___25673,out))
})();
var inst_25634 = cljs.core.filterv(inst_25633,inst_25621);
var inst_25621__$1 = inst_25634;
var state_25649__$1 = (function (){var statearr_25664 = state_25649;
(statearr_25664[(10)] = inst_25621__$1);

return statearr_25664;
})();
var statearr_25665_25683 = state_25649__$1;
(statearr_25665_25683[(2)] = null);

(statearr_25665_25683[(1)] = (2));


return cljs.core.constant$keyword$58;
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
});})(c__11819__auto___25673,out))
;
return ((function (switch__11739__auto__,c__11819__auto___25673,out){
return (function() {
var state_machine__11740__auto__ = null;
var state_machine__11740__auto____0 = (function (){
var statearr_25669 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25669[(0)] = state_machine__11740__auto__);

(statearr_25669[(1)] = (1));

return statearr_25669;
});
var state_machine__11740__auto____1 = (function (state_25649){
while(true){
var ret_value__11741__auto__ = (function (){try{while(true){
var result__11742__auto__ = switch__11739__auto__(state_25649);
if(cljs.core.keyword_identical_QMARK_(result__11742__auto__,cljs.core.constant$keyword$58)){
continue;
} else {
return result__11742__auto__;
}
break;
}
}catch (e25670){if((e25670 instanceof Object)){
var ex__11743__auto__ = e25670;
var statearr_25671_25684 = state_25649;
(statearr_25671_25684[(5)] = ex__11743__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25649);

return cljs.core.constant$keyword$58;
} else {
throw e25670;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11741__auto__,cljs.core.constant$keyword$58)){
var G__25685 = state_25649;
state_25649 = G__25685;
continue;
} else {
return ret_value__11741__auto__;
}
break;
}
});
state_machine__11740__auto__ = function(state_25649){
switch(arguments.length){
case 0:
return state_machine__11740__auto____0.call(this);
case 1:
return state_machine__11740__auto____1.call(this,state_25649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11740__auto____0;
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11740__auto____1;
return state_machine__11740__auto__;
})()
;})(switch__11739__auto__,c__11819__auto___25673,out))
})();
var state__11821__auto__ = (function (){var statearr_25672 = (function (){return (f__11820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11820__auto__.cljs$core$IFn$_invoke$arity$0() : f__11820__auto__.call(null));
})();
(statearr_25672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11819__auto___25673);

return statearr_25672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11821__auto__);
});})(c__11819__auto___25673,out))
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
var c__11819__auto___25781 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11819__auto___25781,out){
return (function (){
var f__11820__auto__ = (function (){var switch__11739__auto__ = ((function (c__11819__auto___25781,out){
return (function (state_25758){
var state_val_25759 = (state_25758[(1)]);
if((state_val_25759 === (7))){
var inst_25740 = (state_25758[(7)]);
var inst_25740__$1 = (state_25758[(2)]);
var inst_25741 = (inst_25740__$1 == null);
var inst_25742 = cljs.core.not(inst_25741);
var state_25758__$1 = (function (){var statearr_25760 = state_25758;
(statearr_25760[(7)] = inst_25740__$1);

return statearr_25760;
})();
if(inst_25742){
var statearr_25761_25782 = state_25758__$1;
(statearr_25761_25782[(1)] = (8));

} else {
var statearr_25762_25783 = state_25758__$1;
(statearr_25762_25783[(1)] = (9));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_25759 === (1))){
var inst_25735 = (0);
var state_25758__$1 = (function (){var statearr_25763 = state_25758;
(statearr_25763[(8)] = inst_25735);

return statearr_25763;
})();
var statearr_25764_25784 = state_25758__$1;
(statearr_25764_25784[(2)] = null);

(statearr_25764_25784[(1)] = (2));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25759 === (4))){
var state_25758__$1 = state_25758;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25758__$1,(7),ch);
} else {
if((state_val_25759 === (6))){
var inst_25753 = (state_25758[(2)]);
var state_25758__$1 = state_25758;
var statearr_25765_25785 = state_25758__$1;
(statearr_25765_25785[(2)] = inst_25753);

(statearr_25765_25785[(1)] = (3));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25759 === (3))){
var inst_25755 = (state_25758[(2)]);
var inst_25756 = cljs.core.async.close_BANG_(out);
var state_25758__$1 = (function (){var statearr_25766 = state_25758;
(statearr_25766[(9)] = inst_25755);

return statearr_25766;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25758__$1,inst_25756);
} else {
if((state_val_25759 === (2))){
var inst_25735 = (state_25758[(8)]);
var inst_25737 = (inst_25735 < n);
var state_25758__$1 = state_25758;
if(cljs.core.truth_(inst_25737)){
var statearr_25767_25786 = state_25758__$1;
(statearr_25767_25786[(1)] = (4));

} else {
var statearr_25768_25787 = state_25758__$1;
(statearr_25768_25787[(1)] = (5));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_25759 === (11))){
var inst_25735 = (state_25758[(8)]);
var inst_25745 = (state_25758[(2)]);
var inst_25746 = (inst_25735 + (1));
var inst_25735__$1 = inst_25746;
var state_25758__$1 = (function (){var statearr_25769 = state_25758;
(statearr_25769[(8)] = inst_25735__$1);

(statearr_25769[(10)] = inst_25745);

return statearr_25769;
})();
var statearr_25770_25788 = state_25758__$1;
(statearr_25770_25788[(2)] = null);

(statearr_25770_25788[(1)] = (2));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25759 === (9))){
var state_25758__$1 = state_25758;
var statearr_25771_25789 = state_25758__$1;
(statearr_25771_25789[(2)] = null);

(statearr_25771_25789[(1)] = (10));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25759 === (5))){
var state_25758__$1 = state_25758;
var statearr_25772_25790 = state_25758__$1;
(statearr_25772_25790[(2)] = null);

(statearr_25772_25790[(1)] = (6));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25759 === (10))){
var inst_25750 = (state_25758[(2)]);
var state_25758__$1 = state_25758;
var statearr_25773_25791 = state_25758__$1;
(statearr_25773_25791[(2)] = inst_25750);

(statearr_25773_25791[(1)] = (6));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25759 === (8))){
var inst_25740 = (state_25758[(7)]);
var state_25758__$1 = state_25758;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25758__$1,(11),out,inst_25740);
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
});})(c__11819__auto___25781,out))
;
return ((function (switch__11739__auto__,c__11819__auto___25781,out){
return (function() {
var state_machine__11740__auto__ = null;
var state_machine__11740__auto____0 = (function (){
var statearr_25777 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25777[(0)] = state_machine__11740__auto__);

(statearr_25777[(1)] = (1));

return statearr_25777;
});
var state_machine__11740__auto____1 = (function (state_25758){
while(true){
var ret_value__11741__auto__ = (function (){try{while(true){
var result__11742__auto__ = switch__11739__auto__(state_25758);
if(cljs.core.keyword_identical_QMARK_(result__11742__auto__,cljs.core.constant$keyword$58)){
continue;
} else {
return result__11742__auto__;
}
break;
}
}catch (e25778){if((e25778 instanceof Object)){
var ex__11743__auto__ = e25778;
var statearr_25779_25792 = state_25758;
(statearr_25779_25792[(5)] = ex__11743__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25758);

return cljs.core.constant$keyword$58;
} else {
throw e25778;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11741__auto__,cljs.core.constant$keyword$58)){
var G__25793 = state_25758;
state_25758 = G__25793;
continue;
} else {
return ret_value__11741__auto__;
}
break;
}
});
state_machine__11740__auto__ = function(state_25758){
switch(arguments.length){
case 0:
return state_machine__11740__auto____0.call(this);
case 1:
return state_machine__11740__auto____1.call(this,state_25758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11740__auto____0;
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11740__auto____1;
return state_machine__11740__auto__;
})()
;})(switch__11739__auto__,c__11819__auto___25781,out))
})();
var state__11821__auto__ = (function (){var statearr_25780 = (function (){return (f__11820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11820__auto__.cljs$core$IFn$_invoke$arity$0() : f__11820__auto__.call(null));
})();
(statearr_25780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11819__auto___25781);

return statearr_25780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11821__auto__);
});})(c__11819__auto___25781,out))
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
if(typeof cljs.core.async.t25806 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25806 = (function (ch,f,map_LT_,meta25807){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25807 = meta25807;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25806.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25806.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t25806.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25806.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t25809 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25809 = (function (fn1,_,meta25807,map_LT_,f,ch,meta25810){
this.fn1 = fn1;
this._ = _;
this.meta25807 = meta25807;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25810 = meta25810;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25809.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25809.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t25809.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25794_SHARP_){
var G__25812 = (((p1__25794_SHARP_ == null))?null:(function (){var G__25813 = p1__25794_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__25813) : self__.f.call(null,G__25813));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__25812) : f1.call(null,G__25812));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t25809.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25811){
var self__ = this;
var _25811__$1 = this;
return self__.meta25810;
});})(___$1))
;

cljs.core.async.t25809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25811,meta25810__$1){
var self__ = this;
var _25811__$1 = this;
return (new cljs.core.async.t25809(self__.fn1,self__._,self__.meta25807,self__.map_LT_,self__.f,self__.ch,meta25810__$1));
});})(___$1))
;

cljs.core.async.t25809.cljs$lang$type = true;

cljs.core.async.t25809.cljs$lang$ctorStr = "cljs.core.async/t25809";

cljs.core.async.t25809.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25809");
});})(___$1))
;

cljs.core.async.__GT_t25809 = ((function (___$1){
return (function __GT_t25809(fn1__$1,___$2,meta25807__$1,map_LT___$1,f__$1,ch__$1,meta25810){
return (new cljs.core.async.t25809(fn1__$1,___$2,meta25807__$1,map_LT___$1,f__$1,ch__$1,meta25810));
});})(___$1))
;

}

return (new cljs.core.async.t25809(fn1,___$1,self__.meta25807,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,737,cljs.core.constant$keyword$10,10,cljs.core.constant$keyword$11,731,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3618__auto__ = ret;
if(cljs.core.truth_(and__3618__auto__)){
return !(((function (){var G__25814 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25814) : cljs.core.deref.call(null,G__25814));
})() == null));
} else {
return and__3618__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__25815 = (function (){var G__25816 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25816) : cljs.core.deref.call(null,G__25816));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__25815) : self__.f.call(null,G__25815));
})());
} else {
return ret;
}
});

cljs.core.async.t25806.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25806.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t25806.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t25806.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25808){
var self__ = this;
var _25808__$1 = this;
return self__.meta25807;
});

cljs.core.async.t25806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25808,meta25807__$1){
var self__ = this;
var _25808__$1 = this;
return (new cljs.core.async.t25806(self__.ch,self__.f,self__.map_LT_,meta25807__$1));
});

cljs.core.async.t25806.cljs$lang$type = true;

cljs.core.async.t25806.cljs$lang$ctorStr = "cljs.core.async/t25806";

cljs.core.async.t25806.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25806");
});

cljs.core.async.__GT_t25806 = (function __GT_t25806(ch__$1,f__$1,map_LT___$1,meta25807){
return (new cljs.core.async.t25806(ch__$1,f__$1,map_LT___$1,meta25807));
});

}

return (new cljs.core.async.t25806(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,743,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,722,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t25821 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25821 = (function (ch,f,map_GT_,meta25822){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25822 = meta25822;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25821.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25821.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__25824 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__25824) : self__.f.call(null,G__25824));
})(),fn1);
});

cljs.core.async.t25821.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25821.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t25821.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25821.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t25821.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25823){
var self__ = this;
var _25823__$1 = this;
return self__.meta25822;
});

cljs.core.async.t25821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25823,meta25822__$1){
var self__ = this;
var _25823__$1 = this;
return (new cljs.core.async.t25821(self__.ch,self__.f,self__.map_GT_,meta25822__$1));
});

cljs.core.async.t25821.cljs$lang$type = true;

cljs.core.async.t25821.cljs$lang$ctorStr = "cljs.core.async/t25821";

cljs.core.async.t25821.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25821");
});

cljs.core.async.__GT_t25821 = (function __GT_t25821(ch__$1,f__$1,map_GT___$1,meta25822){
return (new cljs.core.async.t25821(ch__$1,f__$1,map_GT___$1,meta25822));
});

}

return (new cljs.core.async.t25821(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,34,cljs.core.constant$keyword$9,757,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,748,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t25829 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25829 = (function (ch,p,filter_GT_,meta25830){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25830 = meta25830;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25829.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25829.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__25832 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__25832) : self__.p.call(null,G__25832));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t25829.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25829.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t25829.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25829.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t25829.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t25829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25831){
var self__ = this;
var _25831__$1 = this;
return self__.meta25830;
});

cljs.core.async.t25829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25831,meta25830__$1){
var self__ = this;
var _25831__$1 = this;
return (new cljs.core.async.t25829(self__.ch,self__.p,self__.filter_GT_,meta25830__$1));
});

cljs.core.async.t25829.cljs$lang$type = true;

cljs.core.async.t25829.cljs$lang$ctorStr = "cljs.core.async/t25829";

cljs.core.async.t25829.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25829");
});

cljs.core.async.__GT_t25829 = (function __GT_t25829(ch__$1,p__$1,filter_GT___$1,meta25830){
return (new cljs.core.async.t25829(ch__$1,p__$1,filter_GT___$1,meta25830));
});

}

return (new cljs.core.async.t25829(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,774,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,762,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
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
var c__11819__auto___25920 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11819__auto___25920,out){
return (function (){
var f__11820__auto__ = (function (){var switch__11739__auto__ = ((function (c__11819__auto___25920,out){
return (function (state_25898){
var state_val_25899 = (state_25898[(1)]);
if((state_val_25899 === (7))){
var inst_25894 = (state_25898[(2)]);
var state_25898__$1 = state_25898;
var statearr_25900_25921 = state_25898__$1;
(statearr_25900_25921[(2)] = inst_25894);

(statearr_25900_25921[(1)] = (3));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25899 === (1))){
var state_25898__$1 = state_25898;
var statearr_25901_25922 = state_25898__$1;
(statearr_25901_25922[(2)] = null);

(statearr_25901_25922[(1)] = (2));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25899 === (4))){
var inst_25880 = (state_25898[(7)]);
var inst_25880__$1 = (state_25898[(2)]);
var inst_25881 = (inst_25880__$1 == null);
var state_25898__$1 = (function (){var statearr_25902 = state_25898;
(statearr_25902[(7)] = inst_25880__$1);

return statearr_25902;
})();
if(cljs.core.truth_(inst_25881)){
var statearr_25903_25923 = state_25898__$1;
(statearr_25903_25923[(1)] = (5));

} else {
var statearr_25904_25924 = state_25898__$1;
(statearr_25904_25924[(1)] = (6));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_25899 === (6))){
var inst_25880 = (state_25898[(7)]);
var inst_25885 = (function (){var G__25905 = inst_25880;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__25905) : p.call(null,G__25905));
})();
var state_25898__$1 = state_25898;
if(cljs.core.truth_(inst_25885)){
var statearr_25906_25925 = state_25898__$1;
(statearr_25906_25925[(1)] = (8));

} else {
var statearr_25907_25926 = state_25898__$1;
(statearr_25907_25926[(1)] = (9));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_25899 === (3))){
var inst_25896 = (state_25898[(2)]);
var state_25898__$1 = state_25898;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25898__$1,inst_25896);
} else {
if((state_val_25899 === (2))){
var state_25898__$1 = state_25898;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25898__$1,(4),ch);
} else {
if((state_val_25899 === (11))){
var inst_25888 = (state_25898[(2)]);
var state_25898__$1 = state_25898;
var statearr_25908_25927 = state_25898__$1;
(statearr_25908_25927[(2)] = inst_25888);

(statearr_25908_25927[(1)] = (10));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25899 === (9))){
var state_25898__$1 = state_25898;
var statearr_25909_25928 = state_25898__$1;
(statearr_25909_25928[(2)] = null);

(statearr_25909_25928[(1)] = (10));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25899 === (5))){
var inst_25883 = cljs.core.async.close_BANG_(out);
var state_25898__$1 = state_25898;
var statearr_25910_25929 = state_25898__$1;
(statearr_25910_25929[(2)] = inst_25883);

(statearr_25910_25929[(1)] = (7));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25899 === (10))){
var inst_25891 = (state_25898[(2)]);
var state_25898__$1 = (function (){var statearr_25911 = state_25898;
(statearr_25911[(8)] = inst_25891);

return statearr_25911;
})();
var statearr_25912_25930 = state_25898__$1;
(statearr_25912_25930[(2)] = null);

(statearr_25912_25930[(1)] = (2));


return cljs.core.constant$keyword$58;
} else {
if((state_val_25899 === (8))){
var inst_25880 = (state_25898[(7)]);
var state_25898__$1 = state_25898;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25898__$1,(11),out,inst_25880);
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
});})(c__11819__auto___25920,out))
;
return ((function (switch__11739__auto__,c__11819__auto___25920,out){
return (function() {
var state_machine__11740__auto__ = null;
var state_machine__11740__auto____0 = (function (){
var statearr_25916 = [null,null,null,null,null,null,null,null,null];
(statearr_25916[(0)] = state_machine__11740__auto__);

(statearr_25916[(1)] = (1));

return statearr_25916;
});
var state_machine__11740__auto____1 = (function (state_25898){
while(true){
var ret_value__11741__auto__ = (function (){try{while(true){
var result__11742__auto__ = switch__11739__auto__(state_25898);
if(cljs.core.keyword_identical_QMARK_(result__11742__auto__,cljs.core.constant$keyword$58)){
continue;
} else {
return result__11742__auto__;
}
break;
}
}catch (e25917){if((e25917 instanceof Object)){
var ex__11743__auto__ = e25917;
var statearr_25918_25931 = state_25898;
(statearr_25918_25931[(5)] = ex__11743__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25898);

return cljs.core.constant$keyword$58;
} else {
throw e25917;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11741__auto__,cljs.core.constant$keyword$58)){
var G__25932 = state_25898;
state_25898 = G__25932;
continue;
} else {
return ret_value__11741__auto__;
}
break;
}
});
state_machine__11740__auto__ = function(state_25898){
switch(arguments.length){
case 0:
return state_machine__11740__auto____0.call(this);
case 1:
return state_machine__11740__auto____1.call(this,state_25898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11740__auto____0;
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11740__auto____1;
return state_machine__11740__auto__;
})()
;})(switch__11739__auto__,c__11819__auto___25920,out))
})();
var state__11821__auto__ = (function (){var statearr_25919 = (function (){return (f__11820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11820__auto__.cljs$core$IFn$_invoke$arity$0() : f__11820__auto__.call(null));
})();
(statearr_25919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11819__auto___25920);

return statearr_25919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11821__auto__);
});})(c__11819__auto___25920,out))
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
var c__11819__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11819__auto__){
return (function (){
var f__11820__auto__ = (function (){var switch__11739__auto__ = ((function (c__11819__auto__){
return (function (state_26102){
var state_val_26103 = (state_26102[(1)]);
if((state_val_26103 === (7))){
var inst_26098 = (state_26102[(2)]);
var state_26102__$1 = state_26102;
var statearr_26104_26146 = state_26102__$1;
(statearr_26104_26146[(2)] = inst_26098);

(statearr_26104_26146[(1)] = (3));


return cljs.core.constant$keyword$58;
} else {
if((state_val_26103 === (20))){
var inst_26068 = (state_26102[(7)]);
var inst_26079 = (state_26102[(2)]);
var inst_26080 = cljs.core.next(inst_26068);
var inst_26054 = inst_26080;
var inst_26055 = null;
var inst_26056 = (0);
var inst_26057 = (0);
var state_26102__$1 = (function (){var statearr_26105 = state_26102;
(statearr_26105[(8)] = inst_26054);

(statearr_26105[(9)] = inst_26056);

(statearr_26105[(10)] = inst_26057);

(statearr_26105[(11)] = inst_26079);

(statearr_26105[(12)] = inst_26055);

return statearr_26105;
})();
var statearr_26106_26147 = state_26102__$1;
(statearr_26106_26147[(2)] = null);

(statearr_26106_26147[(1)] = (8));


return cljs.core.constant$keyword$58;
} else {
if((state_val_26103 === (1))){
var state_26102__$1 = state_26102;
var statearr_26107_26148 = state_26102__$1;
(statearr_26107_26148[(2)] = null);

(statearr_26107_26148[(1)] = (2));


return cljs.core.constant$keyword$58;
} else {
if((state_val_26103 === (4))){
var inst_26043 = (state_26102[(13)]);
var inst_26043__$1 = (state_26102[(2)]);
var inst_26044 = (inst_26043__$1 == null);
var state_26102__$1 = (function (){var statearr_26108 = state_26102;
(statearr_26108[(13)] = inst_26043__$1);

return statearr_26108;
})();
if(cljs.core.truth_(inst_26044)){
var statearr_26109_26149 = state_26102__$1;
(statearr_26109_26149[(1)] = (5));

} else {
var statearr_26110_26150 = state_26102__$1;
(statearr_26110_26150[(1)] = (6));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_26103 === (15))){
var state_26102__$1 = state_26102;
var statearr_26114_26151 = state_26102__$1;
(statearr_26114_26151[(2)] = null);

(statearr_26114_26151[(1)] = (16));


return cljs.core.constant$keyword$58;
} else {
if((state_val_26103 === (21))){
var state_26102__$1 = state_26102;
var statearr_26115_26152 = state_26102__$1;
(statearr_26115_26152[(2)] = null);

(statearr_26115_26152[(1)] = (23));


return cljs.core.constant$keyword$58;
} else {
if((state_val_26103 === (13))){
var inst_26054 = (state_26102[(8)]);
var inst_26056 = (state_26102[(9)]);
var inst_26057 = (state_26102[(10)]);
var inst_26055 = (state_26102[(12)]);
var inst_26064 = (state_26102[(2)]);
var inst_26065 = (inst_26057 + (1));
var tmp26111 = inst_26054;
var tmp26112 = inst_26056;
var tmp26113 = inst_26055;
var inst_26054__$1 = tmp26111;
var inst_26055__$1 = tmp26113;
var inst_26056__$1 = tmp26112;
var inst_26057__$1 = inst_26065;
var state_26102__$1 = (function (){var statearr_26116 = state_26102;
(statearr_26116[(8)] = inst_26054__$1);

(statearr_26116[(9)] = inst_26056__$1);

(statearr_26116[(10)] = inst_26057__$1);

(statearr_26116[(12)] = inst_26055__$1);

(statearr_26116[(14)] = inst_26064);

return statearr_26116;
})();
var statearr_26117_26153 = state_26102__$1;
(statearr_26117_26153[(2)] = null);

(statearr_26117_26153[(1)] = (8));


return cljs.core.constant$keyword$58;
} else {
if((state_val_26103 === (22))){
var state_26102__$1 = state_26102;
var statearr_26118_26154 = state_26102__$1;
(statearr_26118_26154[(2)] = null);

(statearr_26118_26154[(1)] = (2));


return cljs.core.constant$keyword$58;
} else {
if((state_val_26103 === (6))){
var inst_26043 = (state_26102[(13)]);
var inst_26052 = (function (){var G__26119 = inst_26043;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26119) : f.call(null,G__26119));
})();
var inst_26053 = cljs.core.seq(inst_26052);
var inst_26054 = inst_26053;
var inst_26055 = null;
var inst_26056 = (0);
var inst_26057 = (0);
var state_26102__$1 = (function (){var statearr_26120 = state_26102;
(statearr_26120[(8)] = inst_26054);

(statearr_26120[(9)] = inst_26056);

(statearr_26120[(10)] = inst_26057);

(statearr_26120[(12)] = inst_26055);

return statearr_26120;
})();
var statearr_26121_26155 = state_26102__$1;
(statearr_26121_26155[(2)] = null);

(statearr_26121_26155[(1)] = (8));


return cljs.core.constant$keyword$58;
} else {
if((state_val_26103 === (17))){
var inst_26068 = (state_26102[(7)]);
var inst_26072 = cljs.core.chunk_first(inst_26068);
var inst_26073 = cljs.core.chunk_rest(inst_26068);
var inst_26074 = cljs.core.count(inst_26072);
var inst_26054 = inst_26073;
var inst_26055 = inst_26072;
var inst_26056 = inst_26074;
var inst_26057 = (0);
var state_26102__$1 = (function (){var statearr_26122 = state_26102;
(statearr_26122[(8)] = inst_26054);

(statearr_26122[(9)] = inst_26056);

(statearr_26122[(10)] = inst_26057);

(statearr_26122[(12)] = inst_26055);

return statearr_26122;
})();
var statearr_26123_26156 = state_26102__$1;
(statearr_26123_26156[(2)] = null);

(statearr_26123_26156[(1)] = (8));


return cljs.core.constant$keyword$58;
} else {
if((state_val_26103 === (3))){
var inst_26100 = (state_26102[(2)]);
var state_26102__$1 = state_26102;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26102__$1,inst_26100);
} else {
if((state_val_26103 === (12))){
var inst_26088 = (state_26102[(2)]);
var state_26102__$1 = state_26102;
var statearr_26124_26157 = state_26102__$1;
(statearr_26124_26157[(2)] = inst_26088);

(statearr_26124_26157[(1)] = (9));


return cljs.core.constant$keyword$58;
} else {
if((state_val_26103 === (2))){
var state_26102__$1 = state_26102;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26102__$1,(4),in$);
} else {
if((state_val_26103 === (23))){
var inst_26096 = (state_26102[(2)]);
var state_26102__$1 = state_26102;
var statearr_26125_26158 = state_26102__$1;
(statearr_26125_26158[(2)] = inst_26096);

(statearr_26125_26158[(1)] = (7));


return cljs.core.constant$keyword$58;
} else {
if((state_val_26103 === (19))){
var inst_26083 = (state_26102[(2)]);
var state_26102__$1 = state_26102;
var statearr_26126_26159 = state_26102__$1;
(statearr_26126_26159[(2)] = inst_26083);

(statearr_26126_26159[(1)] = (16));


return cljs.core.constant$keyword$58;
} else {
if((state_val_26103 === (11))){
var inst_26054 = (state_26102[(8)]);
var inst_26068 = (state_26102[(7)]);
var inst_26068__$1 = cljs.core.seq(inst_26054);
var state_26102__$1 = (function (){var statearr_26127 = state_26102;
(statearr_26127[(7)] = inst_26068__$1);

return statearr_26127;
})();
if(inst_26068__$1){
var statearr_26128_26160 = state_26102__$1;
(statearr_26128_26160[(1)] = (14));

} else {
var statearr_26129_26161 = state_26102__$1;
(statearr_26129_26161[(1)] = (15));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_26103 === (9))){
var inst_26090 = (state_26102[(2)]);
var inst_26091 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_26102__$1 = (function (){var statearr_26130 = state_26102;
(statearr_26130[(15)] = inst_26090);

return statearr_26130;
})();
if(cljs.core.truth_(inst_26091)){
var statearr_26131_26162 = state_26102__$1;
(statearr_26131_26162[(1)] = (21));

} else {
var statearr_26132_26163 = state_26102__$1;
(statearr_26132_26163[(1)] = (22));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_26103 === (5))){
var inst_26046 = cljs.core.async.close_BANG_(out);
var state_26102__$1 = state_26102;
var statearr_26133_26164 = state_26102__$1;
(statearr_26133_26164[(2)] = inst_26046);

(statearr_26133_26164[(1)] = (7));


return cljs.core.constant$keyword$58;
} else {
if((state_val_26103 === (14))){
var inst_26068 = (state_26102[(7)]);
var inst_26070 = cljs.core.chunked_seq_QMARK_(inst_26068);
var state_26102__$1 = state_26102;
if(inst_26070){
var statearr_26134_26165 = state_26102__$1;
(statearr_26134_26165[(1)] = (17));

} else {
var statearr_26135_26166 = state_26102__$1;
(statearr_26135_26166[(1)] = (18));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_26103 === (16))){
var inst_26086 = (state_26102[(2)]);
var state_26102__$1 = state_26102;
var statearr_26136_26167 = state_26102__$1;
(statearr_26136_26167[(2)] = inst_26086);

(statearr_26136_26167[(1)] = (12));


return cljs.core.constant$keyword$58;
} else {
if((state_val_26103 === (10))){
var inst_26057 = (state_26102[(10)]);
var inst_26055 = (state_26102[(12)]);
var inst_26062 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26055,inst_26057);
var state_26102__$1 = state_26102;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26102__$1,(13),out,inst_26062);
} else {
if((state_val_26103 === (18))){
var inst_26068 = (state_26102[(7)]);
var inst_26077 = cljs.core.first(inst_26068);
var state_26102__$1 = state_26102;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26102__$1,(20),out,inst_26077);
} else {
if((state_val_26103 === (8))){
var inst_26056 = (state_26102[(9)]);
var inst_26057 = (state_26102[(10)]);
var inst_26059 = (inst_26057 < inst_26056);
var inst_26060 = inst_26059;
var state_26102__$1 = state_26102;
if(cljs.core.truth_(inst_26060)){
var statearr_26137_26168 = state_26102__$1;
(statearr_26137_26168[(1)] = (10));

} else {
var statearr_26138_26169 = state_26102__$1;
(statearr_26138_26169[(1)] = (11));

}

return cljs.core.constant$keyword$58;
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
});})(c__11819__auto__))
;
return ((function (switch__11739__auto__,c__11819__auto__){
return (function() {
var state_machine__11740__auto__ = null;
var state_machine__11740__auto____0 = (function (){
var statearr_26142 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26142[(0)] = state_machine__11740__auto__);

(statearr_26142[(1)] = (1));

return statearr_26142;
});
var state_machine__11740__auto____1 = (function (state_26102){
while(true){
var ret_value__11741__auto__ = (function (){try{while(true){
var result__11742__auto__ = switch__11739__auto__(state_26102);
if(cljs.core.keyword_identical_QMARK_(result__11742__auto__,cljs.core.constant$keyword$58)){
continue;
} else {
return result__11742__auto__;
}
break;
}
}catch (e26143){if((e26143 instanceof Object)){
var ex__11743__auto__ = e26143;
var statearr_26144_26170 = state_26102;
(statearr_26144_26170[(5)] = ex__11743__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26102);

return cljs.core.constant$keyword$58;
} else {
throw e26143;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11741__auto__,cljs.core.constant$keyword$58)){
var G__26171 = state_26102;
state_26102 = G__26171;
continue;
} else {
return ret_value__11741__auto__;
}
break;
}
});
state_machine__11740__auto__ = function(state_26102){
switch(arguments.length){
case 0:
return state_machine__11740__auto____0.call(this);
case 1:
return state_machine__11740__auto____1.call(this,state_26102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11740__auto____0;
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11740__auto____1;
return state_machine__11740__auto__;
})()
;})(switch__11739__auto__,c__11819__auto__))
})();
var state__11821__auto__ = (function (){var statearr_26145 = (function (){return (f__11820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11820__auto__.cljs$core$IFn$_invoke$arity$0() : f__11820__auto__.call(null));
})();
(statearr_26145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11819__auto__);

return statearr_26145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11821__auto__);
});})(c__11819__auto__))
);

return c__11819__auto__;
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
var c__11819__auto___26276 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11819__auto___26276,out){
return (function (){
var f__11820__auto__ = (function (){var switch__11739__auto__ = ((function (c__11819__auto___26276,out){
return (function (state_26251){
var state_val_26252 = (state_26251[(1)]);
if((state_val_26252 === (7))){
var inst_26246 = (state_26251[(2)]);
var state_26251__$1 = state_26251;
var statearr_26253_26277 = state_26251__$1;
(statearr_26253_26277[(2)] = inst_26246);

(statearr_26253_26277[(1)] = (3));


return cljs.core.constant$keyword$58;
} else {
if((state_val_26252 === (1))){
var inst_26228 = null;
var state_26251__$1 = (function (){var statearr_26254 = state_26251;
(statearr_26254[(7)] = inst_26228);

return statearr_26254;
})();
var statearr_26255_26278 = state_26251__$1;
(statearr_26255_26278[(2)] = null);

(statearr_26255_26278[(1)] = (2));


return cljs.core.constant$keyword$58;
} else {
if((state_val_26252 === (4))){
var inst_26231 = (state_26251[(8)]);
var inst_26231__$1 = (state_26251[(2)]);
var inst_26232 = (inst_26231__$1 == null);
var inst_26233 = cljs.core.not(inst_26232);
var state_26251__$1 = (function (){var statearr_26256 = state_26251;
(statearr_26256[(8)] = inst_26231__$1);

return statearr_26256;
})();
if(inst_26233){
var statearr_26257_26279 = state_26251__$1;
(statearr_26257_26279[(1)] = (5));

} else {
var statearr_26258_26280 = state_26251__$1;
(statearr_26258_26280[(1)] = (6));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_26252 === (6))){
var state_26251__$1 = state_26251;
var statearr_26259_26281 = state_26251__$1;
(statearr_26259_26281[(2)] = null);

(statearr_26259_26281[(1)] = (7));


return cljs.core.constant$keyword$58;
} else {
if((state_val_26252 === (3))){
var inst_26248 = (state_26251[(2)]);
var inst_26249 = cljs.core.async.close_BANG_(out);
var state_26251__$1 = (function (){var statearr_26260 = state_26251;
(statearr_26260[(9)] = inst_26248);

return statearr_26260;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26251__$1,inst_26249);
} else {
if((state_val_26252 === (2))){
var state_26251__$1 = state_26251;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26251__$1,(4),ch);
} else {
if((state_val_26252 === (11))){
var inst_26231 = (state_26251[(8)]);
var inst_26240 = (state_26251[(2)]);
var inst_26228 = inst_26231;
var state_26251__$1 = (function (){var statearr_26261 = state_26251;
(statearr_26261[(7)] = inst_26228);

(statearr_26261[(10)] = inst_26240);

return statearr_26261;
})();
var statearr_26262_26282 = state_26251__$1;
(statearr_26262_26282[(2)] = null);

(statearr_26262_26282[(1)] = (2));


return cljs.core.constant$keyword$58;
} else {
if((state_val_26252 === (9))){
var inst_26231 = (state_26251[(8)]);
var state_26251__$1 = state_26251;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26251__$1,(11),out,inst_26231);
} else {
if((state_val_26252 === (5))){
var inst_26228 = (state_26251[(7)]);
var inst_26231 = (state_26251[(8)]);
var inst_26235 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26231,inst_26228);
var state_26251__$1 = state_26251;
if(inst_26235){
var statearr_26264_26283 = state_26251__$1;
(statearr_26264_26283[(1)] = (8));

} else {
var statearr_26265_26284 = state_26251__$1;
(statearr_26265_26284[(1)] = (9));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_26252 === (10))){
var inst_26243 = (state_26251[(2)]);
var state_26251__$1 = state_26251;
var statearr_26266_26285 = state_26251__$1;
(statearr_26266_26285[(2)] = inst_26243);

(statearr_26266_26285[(1)] = (7));


return cljs.core.constant$keyword$58;
} else {
if((state_val_26252 === (8))){
var inst_26228 = (state_26251[(7)]);
var tmp26263 = inst_26228;
var inst_26228__$1 = tmp26263;
var state_26251__$1 = (function (){var statearr_26267 = state_26251;
(statearr_26267[(7)] = inst_26228__$1);

return statearr_26267;
})();
var statearr_26268_26286 = state_26251__$1;
(statearr_26268_26286[(2)] = null);

(statearr_26268_26286[(1)] = (2));


return cljs.core.constant$keyword$58;
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
});})(c__11819__auto___26276,out))
;
return ((function (switch__11739__auto__,c__11819__auto___26276,out){
return (function() {
var state_machine__11740__auto__ = null;
var state_machine__11740__auto____0 = (function (){
var statearr_26272 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26272[(0)] = state_machine__11740__auto__);

(statearr_26272[(1)] = (1));

return statearr_26272;
});
var state_machine__11740__auto____1 = (function (state_26251){
while(true){
var ret_value__11741__auto__ = (function (){try{while(true){
var result__11742__auto__ = switch__11739__auto__(state_26251);
if(cljs.core.keyword_identical_QMARK_(result__11742__auto__,cljs.core.constant$keyword$58)){
continue;
} else {
return result__11742__auto__;
}
break;
}
}catch (e26273){if((e26273 instanceof Object)){
var ex__11743__auto__ = e26273;
var statearr_26274_26287 = state_26251;
(statearr_26274_26287[(5)] = ex__11743__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26251);

return cljs.core.constant$keyword$58;
} else {
throw e26273;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11741__auto__,cljs.core.constant$keyword$58)){
var G__26288 = state_26251;
state_26251 = G__26288;
continue;
} else {
return ret_value__11741__auto__;
}
break;
}
});
state_machine__11740__auto__ = function(state_26251){
switch(arguments.length){
case 0:
return state_machine__11740__auto____0.call(this);
case 1:
return state_machine__11740__auto____1.call(this,state_26251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11740__auto____0;
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11740__auto____1;
return state_machine__11740__auto__;
})()
;})(switch__11739__auto__,c__11819__auto___26276,out))
})();
var state__11821__auto__ = (function (){var statearr_26275 = (function (){return (f__11820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11820__auto__.cljs$core$IFn$_invoke$arity$0() : f__11820__auto__.call(null));
})();
(statearr_26275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11819__auto___26276);

return statearr_26275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11821__auto__);
});})(c__11819__auto___26276,out))
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
var c__11819__auto___26426 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11819__auto___26426,out){
return (function (){
var f__11820__auto__ = (function (){var switch__11739__auto__ = ((function (c__11819__auto___26426,out){
return (function (state_26396){
var state_val_26397 = (state_26396[(1)]);
if((state_val_26397 === (7))){
var inst_26392 = (state_26396[(2)]);
var state_26396__$1 = state_26396;
var statearr_26398_26427 = state_26396__$1;
(statearr_26398_26427[(2)] = inst_26392);

(statearr_26398_26427[(1)] = (3));


return cljs.core.constant$keyword$58;
} else {
if((state_val_26397 === (1))){
var inst_26359 = (new Array(n));
var inst_26360 = inst_26359;
var inst_26361 = (0);
var state_26396__$1 = (function (){var statearr_26399 = state_26396;
(statearr_26399[(7)] = inst_26360);

(statearr_26399[(8)] = inst_26361);

return statearr_26399;
})();
var statearr_26400_26428 = state_26396__$1;
(statearr_26400_26428[(2)] = null);

(statearr_26400_26428[(1)] = (2));


return cljs.core.constant$keyword$58;
} else {
if((state_val_26397 === (4))){
var inst_26364 = (state_26396[(9)]);
var inst_26364__$1 = (state_26396[(2)]);
var inst_26365 = (inst_26364__$1 == null);
var inst_26366 = cljs.core.not(inst_26365);
var state_26396__$1 = (function (){var statearr_26401 = state_26396;
(statearr_26401[(9)] = inst_26364__$1);

return statearr_26401;
})();
if(inst_26366){
var statearr_26402_26429 = state_26396__$1;
(statearr_26402_26429[(1)] = (5));

} else {
var statearr_26403_26430 = state_26396__$1;
(statearr_26403_26430[(1)] = (6));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_26397 === (15))){
var inst_26386 = (state_26396[(2)]);
var state_26396__$1 = state_26396;
var statearr_26404_26431 = state_26396__$1;
(statearr_26404_26431[(2)] = inst_26386);

(statearr_26404_26431[(1)] = (14));


return cljs.core.constant$keyword$58;
} else {
if((state_val_26397 === (13))){
var state_26396__$1 = state_26396;
var statearr_26405_26432 = state_26396__$1;
(statearr_26405_26432[(2)] = null);

(statearr_26405_26432[(1)] = (14));


return cljs.core.constant$keyword$58;
} else {
if((state_val_26397 === (6))){
var inst_26361 = (state_26396[(8)]);
var inst_26382 = (inst_26361 > (0));
var state_26396__$1 = state_26396;
if(cljs.core.truth_(inst_26382)){
var statearr_26406_26433 = state_26396__$1;
(statearr_26406_26433[(1)] = (12));

} else {
var statearr_26407_26434 = state_26396__$1;
(statearr_26407_26434[(1)] = (13));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_26397 === (3))){
var inst_26394 = (state_26396[(2)]);
var state_26396__$1 = state_26396;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26396__$1,inst_26394);
} else {
if((state_val_26397 === (12))){
var inst_26360 = (state_26396[(7)]);
var inst_26384 = cljs.core.vec(inst_26360);
var state_26396__$1 = state_26396;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26396__$1,(15),out,inst_26384);
} else {
if((state_val_26397 === (2))){
var state_26396__$1 = state_26396;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26396__$1,(4),ch);
} else {
if((state_val_26397 === (11))){
var inst_26376 = (state_26396[(2)]);
var inst_26377 = (new Array(n));
var inst_26360 = inst_26377;
var inst_26361 = (0);
var state_26396__$1 = (function (){var statearr_26408 = state_26396;
(statearr_26408[(7)] = inst_26360);

(statearr_26408[(8)] = inst_26361);

(statearr_26408[(10)] = inst_26376);

return statearr_26408;
})();
var statearr_26409_26435 = state_26396__$1;
(statearr_26409_26435[(2)] = null);

(statearr_26409_26435[(1)] = (2));


return cljs.core.constant$keyword$58;
} else {
if((state_val_26397 === (9))){
var inst_26360 = (state_26396[(7)]);
var inst_26374 = cljs.core.vec(inst_26360);
var state_26396__$1 = state_26396;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26396__$1,(11),out,inst_26374);
} else {
if((state_val_26397 === (5))){
var inst_26364 = (state_26396[(9)]);
var inst_26360 = (state_26396[(7)]);
var inst_26369 = (state_26396[(11)]);
var inst_26361 = (state_26396[(8)]);
var inst_26368 = (inst_26360[inst_26361] = inst_26364);
var inst_26369__$1 = (inst_26361 + (1));
var inst_26370 = (inst_26369__$1 < n);
var state_26396__$1 = (function (){var statearr_26410 = state_26396;
(statearr_26410[(12)] = inst_26368);

(statearr_26410[(11)] = inst_26369__$1);

return statearr_26410;
})();
if(cljs.core.truth_(inst_26370)){
var statearr_26411_26436 = state_26396__$1;
(statearr_26411_26436[(1)] = (8));

} else {
var statearr_26412_26437 = state_26396__$1;
(statearr_26412_26437[(1)] = (9));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_26397 === (14))){
var inst_26389 = (state_26396[(2)]);
var inst_26390 = cljs.core.async.close_BANG_(out);
var state_26396__$1 = (function (){var statearr_26414 = state_26396;
(statearr_26414[(13)] = inst_26389);

return statearr_26414;
})();
var statearr_26415_26438 = state_26396__$1;
(statearr_26415_26438[(2)] = inst_26390);

(statearr_26415_26438[(1)] = (7));


return cljs.core.constant$keyword$58;
} else {
if((state_val_26397 === (10))){
var inst_26380 = (state_26396[(2)]);
var state_26396__$1 = state_26396;
var statearr_26416_26439 = state_26396__$1;
(statearr_26416_26439[(2)] = inst_26380);

(statearr_26416_26439[(1)] = (7));


return cljs.core.constant$keyword$58;
} else {
if((state_val_26397 === (8))){
var inst_26360 = (state_26396[(7)]);
var inst_26369 = (state_26396[(11)]);
var tmp26413 = inst_26360;
var inst_26360__$1 = tmp26413;
var inst_26361 = inst_26369;
var state_26396__$1 = (function (){var statearr_26417 = state_26396;
(statearr_26417[(7)] = inst_26360__$1);

(statearr_26417[(8)] = inst_26361);

return statearr_26417;
})();
var statearr_26418_26440 = state_26396__$1;
(statearr_26418_26440[(2)] = null);

(statearr_26418_26440[(1)] = (2));


return cljs.core.constant$keyword$58;
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
});})(c__11819__auto___26426,out))
;
return ((function (switch__11739__auto__,c__11819__auto___26426,out){
return (function() {
var state_machine__11740__auto__ = null;
var state_machine__11740__auto____0 = (function (){
var statearr_26422 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26422[(0)] = state_machine__11740__auto__);

(statearr_26422[(1)] = (1));

return statearr_26422;
});
var state_machine__11740__auto____1 = (function (state_26396){
while(true){
var ret_value__11741__auto__ = (function (){try{while(true){
var result__11742__auto__ = switch__11739__auto__(state_26396);
if(cljs.core.keyword_identical_QMARK_(result__11742__auto__,cljs.core.constant$keyword$58)){
continue;
} else {
return result__11742__auto__;
}
break;
}
}catch (e26423){if((e26423 instanceof Object)){
var ex__11743__auto__ = e26423;
var statearr_26424_26441 = state_26396;
(statearr_26424_26441[(5)] = ex__11743__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26396);

return cljs.core.constant$keyword$58;
} else {
throw e26423;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11741__auto__,cljs.core.constant$keyword$58)){
var G__26442 = state_26396;
state_26396 = G__26442;
continue;
} else {
return ret_value__11741__auto__;
}
break;
}
});
state_machine__11740__auto__ = function(state_26396){
switch(arguments.length){
case 0:
return state_machine__11740__auto____0.call(this);
case 1:
return state_machine__11740__auto____1.call(this,state_26396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11740__auto____0;
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11740__auto____1;
return state_machine__11740__auto__;
})()
;})(switch__11739__auto__,c__11819__auto___26426,out))
})();
var state__11821__auto__ = (function (){var statearr_26425 = (function (){return (f__11820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11820__auto__.cljs$core$IFn$_invoke$arity$0() : f__11820__auto__.call(null));
})();
(statearr_26425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11819__auto___26426);

return statearr_26425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11821__auto__);
});})(c__11819__auto___26426,out))
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
var c__11819__auto___26590 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11819__auto___26590,out){
return (function (){
var f__11820__auto__ = (function (){var switch__11739__auto__ = ((function (c__11819__auto___26590,out){
return (function (state_26559){
var state_val_26560 = (state_26559[(1)]);
if((state_val_26560 === (7))){
var inst_26555 = (state_26559[(2)]);
var state_26559__$1 = state_26559;
var statearr_26561_26591 = state_26559__$1;
(statearr_26561_26591[(2)] = inst_26555);

(statearr_26561_26591[(1)] = (3));


return cljs.core.constant$keyword$58;
} else {
if((state_val_26560 === (1))){
var inst_26518 = [];
var inst_26519 = inst_26518;
var inst_26520 = cljs.core.constant$keyword$73;
var state_26559__$1 = (function (){var statearr_26562 = state_26559;
(statearr_26562[(7)] = inst_26519);

(statearr_26562[(8)] = inst_26520);

return statearr_26562;
})();
var statearr_26563_26592 = state_26559__$1;
(statearr_26563_26592[(2)] = null);

(statearr_26563_26592[(1)] = (2));


return cljs.core.constant$keyword$58;
} else {
if((state_val_26560 === (4))){
var inst_26523 = (state_26559[(9)]);
var inst_26523__$1 = (state_26559[(2)]);
var inst_26524 = (inst_26523__$1 == null);
var inst_26525 = cljs.core.not(inst_26524);
var state_26559__$1 = (function (){var statearr_26564 = state_26559;
(statearr_26564[(9)] = inst_26523__$1);

return statearr_26564;
})();
if(inst_26525){
var statearr_26565_26593 = state_26559__$1;
(statearr_26565_26593[(1)] = (5));

} else {
var statearr_26566_26594 = state_26559__$1;
(statearr_26566_26594[(1)] = (6));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_26560 === (15))){
var inst_26549 = (state_26559[(2)]);
var state_26559__$1 = state_26559;
var statearr_26567_26595 = state_26559__$1;
(statearr_26567_26595[(2)] = inst_26549);

(statearr_26567_26595[(1)] = (14));


return cljs.core.constant$keyword$58;
} else {
if((state_val_26560 === (13))){
var state_26559__$1 = state_26559;
var statearr_26568_26596 = state_26559__$1;
(statearr_26568_26596[(2)] = null);

(statearr_26568_26596[(1)] = (14));


return cljs.core.constant$keyword$58;
} else {
if((state_val_26560 === (6))){
var inst_26519 = (state_26559[(7)]);
var inst_26544 = inst_26519.length;
var inst_26545 = (inst_26544 > (0));
var state_26559__$1 = state_26559;
if(cljs.core.truth_(inst_26545)){
var statearr_26569_26597 = state_26559__$1;
(statearr_26569_26597[(1)] = (12));

} else {
var statearr_26570_26598 = state_26559__$1;
(statearr_26570_26598[(1)] = (13));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_26560 === (3))){
var inst_26557 = (state_26559[(2)]);
var state_26559__$1 = state_26559;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26559__$1,inst_26557);
} else {
if((state_val_26560 === (12))){
var inst_26519 = (state_26559[(7)]);
var inst_26547 = cljs.core.vec(inst_26519);
var state_26559__$1 = state_26559;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26559__$1,(15),out,inst_26547);
} else {
if((state_val_26560 === (2))){
var state_26559__$1 = state_26559;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26559__$1,(4),ch);
} else {
if((state_val_26560 === (11))){
var inst_26527 = (state_26559[(10)]);
var inst_26523 = (state_26559[(9)]);
var inst_26537 = (state_26559[(2)]);
var inst_26538 = [];
var inst_26539 = inst_26538.push(inst_26523);
var inst_26519 = inst_26538;
var inst_26520 = inst_26527;
var state_26559__$1 = (function (){var statearr_26571 = state_26559;
(statearr_26571[(7)] = inst_26519);

(statearr_26571[(11)] = inst_26537);

(statearr_26571[(12)] = inst_26539);

(statearr_26571[(8)] = inst_26520);

return statearr_26571;
})();
var statearr_26572_26599 = state_26559__$1;
(statearr_26572_26599[(2)] = null);

(statearr_26572_26599[(1)] = (2));


return cljs.core.constant$keyword$58;
} else {
if((state_val_26560 === (9))){
var inst_26519 = (state_26559[(7)]);
var inst_26535 = cljs.core.vec(inst_26519);
var state_26559__$1 = state_26559;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26559__$1,(11),out,inst_26535);
} else {
if((state_val_26560 === (5))){
var inst_26527 = (state_26559[(10)]);
var inst_26520 = (state_26559[(8)]);
var inst_26523 = (state_26559[(9)]);
var inst_26527__$1 = (function (){var G__26573 = inst_26523;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26573) : f.call(null,G__26573));
})();
var inst_26528 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26527__$1,inst_26520);
var inst_26529 = cljs.core.keyword_identical_QMARK_(inst_26520,cljs.core.constant$keyword$73);
var inst_26530 = (inst_26528) || (inst_26529);
var state_26559__$1 = (function (){var statearr_26574 = state_26559;
(statearr_26574[(10)] = inst_26527__$1);

return statearr_26574;
})();
if(cljs.core.truth_(inst_26530)){
var statearr_26575_26600 = state_26559__$1;
(statearr_26575_26600[(1)] = (8));

} else {
var statearr_26576_26601 = state_26559__$1;
(statearr_26576_26601[(1)] = (9));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_26560 === (14))){
var inst_26552 = (state_26559[(2)]);
var inst_26553 = cljs.core.async.close_BANG_(out);
var state_26559__$1 = (function (){var statearr_26578 = state_26559;
(statearr_26578[(13)] = inst_26552);

return statearr_26578;
})();
var statearr_26579_26602 = state_26559__$1;
(statearr_26579_26602[(2)] = inst_26553);

(statearr_26579_26602[(1)] = (7));


return cljs.core.constant$keyword$58;
} else {
if((state_val_26560 === (10))){
var inst_26542 = (state_26559[(2)]);
var state_26559__$1 = state_26559;
var statearr_26580_26603 = state_26559__$1;
(statearr_26580_26603[(2)] = inst_26542);

(statearr_26580_26603[(1)] = (7));


return cljs.core.constant$keyword$58;
} else {
if((state_val_26560 === (8))){
var inst_26519 = (state_26559[(7)]);
var inst_26527 = (state_26559[(10)]);
var inst_26523 = (state_26559[(9)]);
var inst_26532 = inst_26519.push(inst_26523);
var tmp26577 = inst_26519;
var inst_26519__$1 = tmp26577;
var inst_26520 = inst_26527;
var state_26559__$1 = (function (){var statearr_26581 = state_26559;
(statearr_26581[(7)] = inst_26519__$1);

(statearr_26581[(14)] = inst_26532);

(statearr_26581[(8)] = inst_26520);

return statearr_26581;
})();
var statearr_26582_26604 = state_26559__$1;
(statearr_26582_26604[(2)] = null);

(statearr_26582_26604[(1)] = (2));


return cljs.core.constant$keyword$58;
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
});})(c__11819__auto___26590,out))
;
return ((function (switch__11739__auto__,c__11819__auto___26590,out){
return (function() {
var state_machine__11740__auto__ = null;
var state_machine__11740__auto____0 = (function (){
var statearr_26586 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26586[(0)] = state_machine__11740__auto__);

(statearr_26586[(1)] = (1));

return statearr_26586;
});
var state_machine__11740__auto____1 = (function (state_26559){
while(true){
var ret_value__11741__auto__ = (function (){try{while(true){
var result__11742__auto__ = switch__11739__auto__(state_26559);
if(cljs.core.keyword_identical_QMARK_(result__11742__auto__,cljs.core.constant$keyword$58)){
continue;
} else {
return result__11742__auto__;
}
break;
}
}catch (e26587){if((e26587 instanceof Object)){
var ex__11743__auto__ = e26587;
var statearr_26588_26605 = state_26559;
(statearr_26588_26605[(5)] = ex__11743__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26559);

return cljs.core.constant$keyword$58;
} else {
throw e26587;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11741__auto__,cljs.core.constant$keyword$58)){
var G__26606 = state_26559;
state_26559 = G__26606;
continue;
} else {
return ret_value__11741__auto__;
}
break;
}
});
state_machine__11740__auto__ = function(state_26559){
switch(arguments.length){
case 0:
return state_machine__11740__auto____0.call(this);
case 1:
return state_machine__11740__auto____1.call(this,state_26559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11740__auto____0;
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11740__auto____1;
return state_machine__11740__auto__;
})()
;})(switch__11739__auto__,c__11819__auto___26590,out))
})();
var state__11821__auto__ = (function (){var statearr_26589 = (function (){return (f__11820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11820__auto__.cljs$core$IFn$_invoke$arity$0() : f__11820__auto__.call(null));
})();
(statearr_26589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11819__auto___26590);

return statearr_26589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11821__auto__);
});})(c__11819__auto___26590,out))
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
