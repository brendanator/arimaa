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
if(typeof cljs.core.async.t23236 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23236 = (function (f,fn_handler,meta23237){
this.f = f;
this.fn_handler = fn_handler;
this.meta23237 = meta23237;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23236.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23236.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t23236.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t23236.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23238){
var self__ = this;
var _23238__$1 = this;
return self__.meta23237;
});

cljs.core.async.t23236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23238,meta23237__$1){
var self__ = this;
var _23238__$1 = this;
return (new cljs.core.async.t23236(self__.f,self__.fn_handler,meta23237__$1));
});

cljs.core.async.t23236.cljs$lang$type = true;

cljs.core.async.t23236.cljs$lang$ctorStr = "cljs.core.async/t23236";

cljs.core.async.t23236.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23236");
});

cljs.core.async.__GT_t23236 = (function __GT_t23236(f__$1,fn_handler__$1,meta23237){
return (new cljs.core.async.t23236(f__$1,fn_handler__$1,meta23237));
});

}

return (new cljs.core.async.t23236(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,20,cljs.core.constant$keyword$9,16,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,13,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
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
var G__23240 = buff;
if(G__23240){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__23240.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__23240.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23240);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23240);
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
var val_23257 = (function (){var G__23254 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23254) : cljs.core.deref.call(null,G__23254));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__23255_23258 = val_23257;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23255_23258) : fn1.call(null,G__23255_23258));
} else {
cljs.core.async.impl.dispatch.run(((function (val_23257,ret){
return (function (){
var G__23256 = val_23257;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23256) : fn1.call(null,G__23256));
});})(val_23257,ret))
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
var G__23267 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23267) : cljs.core.deref.call(null,G__23267));
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
var ret = (function (){var G__23268 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23268) : cljs.core.deref.call(null,G__23268));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__23269_23271 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23269_23271) : fn1.call(null,G__23269_23271));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__23270 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23270) : fn1.call(null,G__23270));
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
var n__4517__auto___23272 = n;
var x_23273 = (0);
while(true){
if((x_23273 < n__4517__auto___23272)){
(a[x_23273] = (0));

var G__23274 = (x_23273 + (1));
x_23273 = G__23274;
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

var G__23275 = (i + (1));
i = G__23275;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__23283 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23283) : cljs.core.atom.call(null,G__23283));
})();
if(typeof cljs.core.async.t23284 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23284 = (function (flag,alt_flag,meta23285){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23285 = meta23285;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23284.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23284.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23287 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23287) : cljs.core.deref.call(null,G__23287));
});})(flag))
;

cljs.core.async.t23284.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23288_23290 = self__.flag;
var G__23289_23291 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23288_23290,G__23289_23291) : cljs.core.reset_BANG_.call(null,G__23288_23290,G__23289_23291));

return true;
});})(flag))
;

cljs.core.async.t23284.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23286){
var self__ = this;
var _23286__$1 = this;
return self__.meta23285;
});})(flag))
;

cljs.core.async.t23284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23286,meta23285__$1){
var self__ = this;
var _23286__$1 = this;
return (new cljs.core.async.t23284(self__.flag,self__.alt_flag,meta23285__$1));
});})(flag))
;

cljs.core.async.t23284.cljs$lang$type = true;

cljs.core.async.t23284.cljs$lang$ctorStr = "cljs.core.async/t23284";

cljs.core.async.t23284.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23284");
});})(flag))
;

cljs.core.async.__GT_t23284 = ((function (flag){
return (function __GT_t23284(flag__$1,alt_flag__$1,meta23285){
return (new cljs.core.async.t23284(flag__$1,alt_flag__$1,meta23285));
});})(flag))
;

}

return (new cljs.core.async.t23284(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,15,cljs.core.constant$keyword$9,146,cljs.core.constant$keyword$10,5,cljs.core.constant$keyword$11,141,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t23295 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23295 = (function (cb,flag,alt_handler,meta23296){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23296 = meta23296;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23295.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23295.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t23295.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t23295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23297){
var self__ = this;
var _23297__$1 = this;
return self__.meta23296;
});

cljs.core.async.t23295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23297,meta23296__$1){
var self__ = this;
var _23297__$1 = this;
return (new cljs.core.async.t23295(self__.cb,self__.flag,self__.alt_handler,meta23296__$1));
});

cljs.core.async.t23295.cljs$lang$type = true;

cljs.core.async.t23295.cljs$lang$ctorStr = "cljs.core.async/t23295";

cljs.core.async.t23295.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23295");
});

cljs.core.async.__GT_t23295 = (function __GT_t23295(cb__$1,flag__$1,alt_handler__$1,meta23296){
return (new cljs.core.async.t23295(cb__$1,flag__$1,alt_handler__$1,meta23296));
});

}

return (new cljs.core.async.t23295(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,11,cljs.core.constant$keyword$9,154,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,149,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__23305 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__23305) : port.call(null,G__23305));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__23306 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__23306) : port.call(null,G__23306));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23298_SHARP_){
var G__23307 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23298_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__23307) : fret.call(null,G__23307));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23299_SHARP_){
var G__23308 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23299_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__23308) : fret.call(null,G__23308));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23309 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23309) : cljs.core.deref.call(null,G__23309));
})(),(function (){var or__3630__auto__ = wport;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23310 = (i + (1));
i = G__23310;
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
var alts_BANG___delegate = function (ports,p__23311){
var map__23313 = p__23311;
var map__23313__$1 = ((cljs.core.seq_QMARK_(map__23313))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23313):map__23313);
var opts = map__23313__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__23311 = null;
if (arguments.length > 1) {
  p__23311 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__23311);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23314){
var ports = cljs.core.first(arglist__23314);
var p__23311 = cljs.core.rest(arglist__23314);
return alts_BANG___delegate(ports,p__23311);
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
var c__11826__auto___23412 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11826__auto___23412){
return (function (){
var f__11827__auto__ = (function (){var switch__11746__auto__ = ((function (c__11826__auto___23412){
return (function (state_23388){
var state_val_23389 = (state_23388[(1)]);
if((state_val_23389 === (7))){
var inst_23384 = (state_23388[(2)]);
var state_23388__$1 = state_23388;
var statearr_23390_23413 = state_23388__$1;
(statearr_23390_23413[(2)] = inst_23384);

(statearr_23390_23413[(1)] = (3));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23389 === (1))){
var state_23388__$1 = state_23388;
var statearr_23391_23414 = state_23388__$1;
(statearr_23391_23414[(2)] = null);

(statearr_23391_23414[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23389 === (4))){
var inst_23367 = (state_23388[(7)]);
var inst_23367__$1 = (state_23388[(2)]);
var inst_23368 = (inst_23367__$1 == null);
var state_23388__$1 = (function (){var statearr_23392 = state_23388;
(statearr_23392[(7)] = inst_23367__$1);

return statearr_23392;
})();
if(cljs.core.truth_(inst_23368)){
var statearr_23393_23415 = state_23388__$1;
(statearr_23393_23415[(1)] = (5));

} else {
var statearr_23394_23416 = state_23388__$1;
(statearr_23394_23416[(1)] = (6));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_23389 === (13))){
var state_23388__$1 = state_23388;
var statearr_23395_23417 = state_23388__$1;
(statearr_23395_23417[(2)] = null);

(statearr_23395_23417[(1)] = (14));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23389 === (6))){
var inst_23367 = (state_23388[(7)]);
var state_23388__$1 = state_23388;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23388__$1,(11),to,inst_23367);
} else {
if((state_val_23389 === (3))){
var inst_23386 = (state_23388[(2)]);
var state_23388__$1 = state_23388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23388__$1,inst_23386);
} else {
if((state_val_23389 === (12))){
var state_23388__$1 = state_23388;
var statearr_23396_23418 = state_23388__$1;
(statearr_23396_23418[(2)] = null);

(statearr_23396_23418[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23389 === (2))){
var state_23388__$1 = state_23388;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23388__$1,(4),from);
} else {
if((state_val_23389 === (11))){
var inst_23377 = (state_23388[(2)]);
var state_23388__$1 = state_23388;
if(cljs.core.truth_(inst_23377)){
var statearr_23397_23419 = state_23388__$1;
(statearr_23397_23419[(1)] = (12));

} else {
var statearr_23398_23420 = state_23388__$1;
(statearr_23398_23420[(1)] = (13));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_23389 === (9))){
var state_23388__$1 = state_23388;
var statearr_23399_23421 = state_23388__$1;
(statearr_23399_23421[(2)] = null);

(statearr_23399_23421[(1)] = (10));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23389 === (5))){
var state_23388__$1 = state_23388;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23400_23422 = state_23388__$1;
(statearr_23400_23422[(1)] = (8));

} else {
var statearr_23401_23423 = state_23388__$1;
(statearr_23401_23423[(1)] = (9));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_23389 === (14))){
var inst_23382 = (state_23388[(2)]);
var state_23388__$1 = state_23388;
var statearr_23402_23424 = state_23388__$1;
(statearr_23402_23424[(2)] = inst_23382);

(statearr_23402_23424[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23389 === (10))){
var inst_23374 = (state_23388[(2)]);
var state_23388__$1 = state_23388;
var statearr_23403_23425 = state_23388__$1;
(statearr_23403_23425[(2)] = inst_23374);

(statearr_23403_23425[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23389 === (8))){
var inst_23371 = cljs.core.async.close_BANG_(to);
var state_23388__$1 = state_23388;
var statearr_23404_23426 = state_23388__$1;
(statearr_23404_23426[(2)] = inst_23371);

(statearr_23404_23426[(1)] = (10));


return cljs.core.constant$keyword$61;
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
});})(c__11826__auto___23412))
;
return ((function (switch__11746__auto__,c__11826__auto___23412){
return (function() {
var state_machine__11747__auto__ = null;
var state_machine__11747__auto____0 = (function (){
var statearr_23408 = [null,null,null,null,null,null,null,null];
(statearr_23408[(0)] = state_machine__11747__auto__);

(statearr_23408[(1)] = (1));

return statearr_23408;
});
var state_machine__11747__auto____1 = (function (state_23388){
while(true){
var ret_value__11748__auto__ = (function (){try{while(true){
var result__11749__auto__ = switch__11746__auto__(state_23388);
if(cljs.core.keyword_identical_QMARK_(result__11749__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11749__auto__;
}
break;
}
}catch (e23409){if((e23409 instanceof Object)){
var ex__11750__auto__ = e23409;
var statearr_23410_23427 = state_23388;
(statearr_23410_23427[(5)] = ex__11750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23388);

return cljs.core.constant$keyword$61;
} else {
throw e23409;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11748__auto__,cljs.core.constant$keyword$61)){
var G__23428 = state_23388;
state_23388 = G__23428;
continue;
} else {
return ret_value__11748__auto__;
}
break;
}
});
state_machine__11747__auto__ = function(state_23388){
switch(arguments.length){
case 0:
return state_machine__11747__auto____0.call(this);
case 1:
return state_machine__11747__auto____1.call(this,state_23388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11747__auto____0;
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11747__auto____1;
return state_machine__11747__auto__;
})()
;})(switch__11746__auto__,c__11826__auto___23412))
})();
var state__11828__auto__ = (function (){var statearr_23411 = (function (){return (f__11827__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11827__auto__.cljs$core$IFn$_invoke$arity$0() : f__11827__auto__.call(null));
})();
(statearr_23411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11826__auto___23412);

return statearr_23411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11828__auto__);
});})(c__11826__auto___23412))
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
return (function (p__23614){
var vec__23615 = p__23614;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23615,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23615,(1),null);
var job = vec__23615;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__11826__auto___23799 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11826__auto___23799,res,vec__23615,v,p,job,jobs,results){
return (function (){
var f__11827__auto__ = (function (){var switch__11746__auto__ = ((function (c__11826__auto___23799,res,vec__23615,v,p,job,jobs,results){
return (function (state_23620){
var state_val_23621 = (state_23620[(1)]);
if((state_val_23621 === (2))){
var inst_23617 = (state_23620[(2)]);
var inst_23618 = cljs.core.async.close_BANG_(res);
var state_23620__$1 = (function (){var statearr_23622 = state_23620;
(statearr_23622[(7)] = inst_23617);

return statearr_23622;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23620__$1,inst_23618);
} else {
if((state_val_23621 === (1))){
var state_23620__$1 = state_23620;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23620__$1,(2),res,v);
} else {
return null;
}
}
});})(c__11826__auto___23799,res,vec__23615,v,p,job,jobs,results))
;
return ((function (switch__11746__auto__,c__11826__auto___23799,res,vec__23615,v,p,job,jobs,results){
return (function() {
var state_machine__11747__auto__ = null;
var state_machine__11747__auto____0 = (function (){
var statearr_23626 = [null,null,null,null,null,null,null,null];
(statearr_23626[(0)] = state_machine__11747__auto__);

(statearr_23626[(1)] = (1));

return statearr_23626;
});
var state_machine__11747__auto____1 = (function (state_23620){
while(true){
var ret_value__11748__auto__ = (function (){try{while(true){
var result__11749__auto__ = switch__11746__auto__(state_23620);
if(cljs.core.keyword_identical_QMARK_(result__11749__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11749__auto__;
}
break;
}
}catch (e23627){if((e23627 instanceof Object)){
var ex__11750__auto__ = e23627;
var statearr_23628_23800 = state_23620;
(statearr_23628_23800[(5)] = ex__11750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23620);

return cljs.core.constant$keyword$61;
} else {
throw e23627;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11748__auto__,cljs.core.constant$keyword$61)){
var G__23801 = state_23620;
state_23620 = G__23801;
continue;
} else {
return ret_value__11748__auto__;
}
break;
}
});
state_machine__11747__auto__ = function(state_23620){
switch(arguments.length){
case 0:
return state_machine__11747__auto____0.call(this);
case 1:
return state_machine__11747__auto____1.call(this,state_23620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11747__auto____0;
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11747__auto____1;
return state_machine__11747__auto__;
})()
;})(switch__11746__auto__,c__11826__auto___23799,res,vec__23615,v,p,job,jobs,results))
})();
var state__11828__auto__ = (function (){var statearr_23629 = (function (){return (f__11827__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11827__auto__.cljs$core$IFn$_invoke$arity$0() : f__11827__auto__.call(null));
})();
(statearr_23629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11826__auto___23799);

return statearr_23629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11828__auto__);
});})(c__11826__auto___23799,res,vec__23615,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23630){
var vec__23631 = p__23630;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23631,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23631,(1),null);
var job = vec__23631;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__23632_23802 = v;
var G__23633_23803 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__23632_23802,G__23633_23803) : xf.call(null,G__23632_23802,G__23633_23803));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4517__auto___23804 = n;
var __23805 = (0);
while(true){
if((__23805 < n__4517__auto___23804)){
var G__23634_23806 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23634_23806) {
case "async":
var c__11826__auto___23808 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__23805,c__11826__auto___23808,G__23634_23806,n__4517__auto___23804,jobs,results,process,async){
return (function (){
var f__11827__auto__ = (function (){var switch__11746__auto__ = ((function (__23805,c__11826__auto___23808,G__23634_23806,n__4517__auto___23804,jobs,results,process,async){
return (function (state_23647){
var state_val_23648 = (state_23647[(1)]);
if((state_val_23648 === (7))){
var inst_23643 = (state_23647[(2)]);
var state_23647__$1 = state_23647;
var statearr_23649_23809 = state_23647__$1;
(statearr_23649_23809[(2)] = inst_23643);

(statearr_23649_23809[(1)] = (3));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23648 === (6))){
var state_23647__$1 = state_23647;
var statearr_23650_23810 = state_23647__$1;
(statearr_23650_23810[(2)] = null);

(statearr_23650_23810[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23648 === (5))){
var state_23647__$1 = state_23647;
var statearr_23651_23811 = state_23647__$1;
(statearr_23651_23811[(2)] = null);

(statearr_23651_23811[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23648 === (4))){
var inst_23637 = (state_23647[(2)]);
var inst_23638 = async(inst_23637);
var state_23647__$1 = state_23647;
if(cljs.core.truth_(inst_23638)){
var statearr_23652_23812 = state_23647__$1;
(statearr_23652_23812[(1)] = (5));

} else {
var statearr_23653_23813 = state_23647__$1;
(statearr_23653_23813[(1)] = (6));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_23648 === (3))){
var inst_23645 = (state_23647[(2)]);
var state_23647__$1 = state_23647;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23647__$1,inst_23645);
} else {
if((state_val_23648 === (2))){
var state_23647__$1 = state_23647;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23647__$1,(4),jobs);
} else {
if((state_val_23648 === (1))){
var state_23647__$1 = state_23647;
var statearr_23654_23814 = state_23647__$1;
(statearr_23654_23814[(2)] = null);

(statearr_23654_23814[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
return null;
}
}
}
}
}
}
}
});})(__23805,c__11826__auto___23808,G__23634_23806,n__4517__auto___23804,jobs,results,process,async))
;
return ((function (__23805,switch__11746__auto__,c__11826__auto___23808,G__23634_23806,n__4517__auto___23804,jobs,results,process,async){
return (function() {
var state_machine__11747__auto__ = null;
var state_machine__11747__auto____0 = (function (){
var statearr_23658 = [null,null,null,null,null,null,null];
(statearr_23658[(0)] = state_machine__11747__auto__);

(statearr_23658[(1)] = (1));

return statearr_23658;
});
var state_machine__11747__auto____1 = (function (state_23647){
while(true){
var ret_value__11748__auto__ = (function (){try{while(true){
var result__11749__auto__ = switch__11746__auto__(state_23647);
if(cljs.core.keyword_identical_QMARK_(result__11749__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11749__auto__;
}
break;
}
}catch (e23659){if((e23659 instanceof Object)){
var ex__11750__auto__ = e23659;
var statearr_23660_23815 = state_23647;
(statearr_23660_23815[(5)] = ex__11750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23647);

return cljs.core.constant$keyword$61;
} else {
throw e23659;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11748__auto__,cljs.core.constant$keyword$61)){
var G__23816 = state_23647;
state_23647 = G__23816;
continue;
} else {
return ret_value__11748__auto__;
}
break;
}
});
state_machine__11747__auto__ = function(state_23647){
switch(arguments.length){
case 0:
return state_machine__11747__auto____0.call(this);
case 1:
return state_machine__11747__auto____1.call(this,state_23647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11747__auto____0;
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11747__auto____1;
return state_machine__11747__auto__;
})()
;})(__23805,switch__11746__auto__,c__11826__auto___23808,G__23634_23806,n__4517__auto___23804,jobs,results,process,async))
})();
var state__11828__auto__ = (function (){var statearr_23661 = (function (){return (f__11827__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11827__auto__.cljs$core$IFn$_invoke$arity$0() : f__11827__auto__.call(null));
})();
(statearr_23661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11826__auto___23808);

return statearr_23661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11828__auto__);
});})(__23805,c__11826__auto___23808,G__23634_23806,n__4517__auto___23804,jobs,results,process,async))
);


break;
case "compute":
var c__11826__auto___23817 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__23805,c__11826__auto___23817,G__23634_23806,n__4517__auto___23804,jobs,results,process,async){
return (function (){
var f__11827__auto__ = (function (){var switch__11746__auto__ = ((function (__23805,c__11826__auto___23817,G__23634_23806,n__4517__auto___23804,jobs,results,process,async){
return (function (state_23674){
var state_val_23675 = (state_23674[(1)]);
if((state_val_23675 === (7))){
var inst_23670 = (state_23674[(2)]);
var state_23674__$1 = state_23674;
var statearr_23676_23818 = state_23674__$1;
(statearr_23676_23818[(2)] = inst_23670);

(statearr_23676_23818[(1)] = (3));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23675 === (6))){
var state_23674__$1 = state_23674;
var statearr_23677_23819 = state_23674__$1;
(statearr_23677_23819[(2)] = null);

(statearr_23677_23819[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23675 === (5))){
var state_23674__$1 = state_23674;
var statearr_23678_23820 = state_23674__$1;
(statearr_23678_23820[(2)] = null);

(statearr_23678_23820[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23675 === (4))){
var inst_23664 = (state_23674[(2)]);
var inst_23665 = process(inst_23664);
var state_23674__$1 = state_23674;
if(cljs.core.truth_(inst_23665)){
var statearr_23679_23821 = state_23674__$1;
(statearr_23679_23821[(1)] = (5));

} else {
var statearr_23680_23822 = state_23674__$1;
(statearr_23680_23822[(1)] = (6));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_23675 === (3))){
var inst_23672 = (state_23674[(2)]);
var state_23674__$1 = state_23674;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23674__$1,inst_23672);
} else {
if((state_val_23675 === (2))){
var state_23674__$1 = state_23674;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23674__$1,(4),jobs);
} else {
if((state_val_23675 === (1))){
var state_23674__$1 = state_23674;
var statearr_23681_23823 = state_23674__$1;
(statearr_23681_23823[(2)] = null);

(statearr_23681_23823[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
return null;
}
}
}
}
}
}
}
});})(__23805,c__11826__auto___23817,G__23634_23806,n__4517__auto___23804,jobs,results,process,async))
;
return ((function (__23805,switch__11746__auto__,c__11826__auto___23817,G__23634_23806,n__4517__auto___23804,jobs,results,process,async){
return (function() {
var state_machine__11747__auto__ = null;
var state_machine__11747__auto____0 = (function (){
var statearr_23685 = [null,null,null,null,null,null,null];
(statearr_23685[(0)] = state_machine__11747__auto__);

(statearr_23685[(1)] = (1));

return statearr_23685;
});
var state_machine__11747__auto____1 = (function (state_23674){
while(true){
var ret_value__11748__auto__ = (function (){try{while(true){
var result__11749__auto__ = switch__11746__auto__(state_23674);
if(cljs.core.keyword_identical_QMARK_(result__11749__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11749__auto__;
}
break;
}
}catch (e23686){if((e23686 instanceof Object)){
var ex__11750__auto__ = e23686;
var statearr_23687_23824 = state_23674;
(statearr_23687_23824[(5)] = ex__11750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23674);

return cljs.core.constant$keyword$61;
} else {
throw e23686;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11748__auto__,cljs.core.constant$keyword$61)){
var G__23825 = state_23674;
state_23674 = G__23825;
continue;
} else {
return ret_value__11748__auto__;
}
break;
}
});
state_machine__11747__auto__ = function(state_23674){
switch(arguments.length){
case 0:
return state_machine__11747__auto____0.call(this);
case 1:
return state_machine__11747__auto____1.call(this,state_23674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11747__auto____0;
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11747__auto____1;
return state_machine__11747__auto__;
})()
;})(__23805,switch__11746__auto__,c__11826__auto___23817,G__23634_23806,n__4517__auto___23804,jobs,results,process,async))
})();
var state__11828__auto__ = (function (){var statearr_23688 = (function (){return (f__11827__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11827__auto__.cljs$core$IFn$_invoke$arity$0() : f__11827__auto__.call(null));
})();
(statearr_23688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11826__auto___23817);

return statearr_23688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11828__auto__);
});})(__23805,c__11826__auto___23817,G__23634_23806,n__4517__auto___23804,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23826 = (__23805 + (1));
__23805 = G__23826;
continue;
} else {
}
break;
}

var c__11826__auto___23827 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11826__auto___23827,jobs,results,process,async){
return (function (){
var f__11827__auto__ = (function (){var switch__11746__auto__ = ((function (c__11826__auto___23827,jobs,results,process,async){
return (function (state_23710){
var state_val_23711 = (state_23710[(1)]);
if((state_val_23711 === (9))){
var inst_23703 = (state_23710[(2)]);
var state_23710__$1 = (function (){var statearr_23712 = state_23710;
(statearr_23712[(7)] = inst_23703);

return statearr_23712;
})();
var statearr_23713_23828 = state_23710__$1;
(statearr_23713_23828[(2)] = null);

(statearr_23713_23828[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23711 === (8))){
var inst_23696 = (state_23710[(8)]);
var inst_23701 = (state_23710[(2)]);
var state_23710__$1 = (function (){var statearr_23714 = state_23710;
(statearr_23714[(9)] = inst_23701);

return statearr_23714;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23710__$1,(9),results,inst_23696);
} else {
if((state_val_23711 === (7))){
var inst_23706 = (state_23710[(2)]);
var state_23710__$1 = state_23710;
var statearr_23715_23829 = state_23710__$1;
(statearr_23715_23829[(2)] = inst_23706);

(statearr_23715_23829[(1)] = (3));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23711 === (6))){
var inst_23691 = (state_23710[(10)]);
var inst_23696 = (state_23710[(8)]);
var inst_23696__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_23697 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23698 = [inst_23691,inst_23696__$1];
var inst_23699 = (new cljs.core.PersistentVector(null,2,(5),inst_23697,inst_23698,null));
var state_23710__$1 = (function (){var statearr_23716 = state_23710;
(statearr_23716[(8)] = inst_23696__$1);

return statearr_23716;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23710__$1,(8),jobs,inst_23699);
} else {
if((state_val_23711 === (5))){
var inst_23694 = cljs.core.async.close_BANG_(jobs);
var state_23710__$1 = state_23710;
var statearr_23717_23830 = state_23710__$1;
(statearr_23717_23830[(2)] = inst_23694);

(statearr_23717_23830[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23711 === (4))){
var inst_23691 = (state_23710[(10)]);
var inst_23691__$1 = (state_23710[(2)]);
var inst_23692 = (inst_23691__$1 == null);
var state_23710__$1 = (function (){var statearr_23718 = state_23710;
(statearr_23718[(10)] = inst_23691__$1);

return statearr_23718;
})();
if(cljs.core.truth_(inst_23692)){
var statearr_23719_23831 = state_23710__$1;
(statearr_23719_23831[(1)] = (5));

} else {
var statearr_23720_23832 = state_23710__$1;
(statearr_23720_23832[(1)] = (6));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_23711 === (3))){
var inst_23708 = (state_23710[(2)]);
var state_23710__$1 = state_23710;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23710__$1,inst_23708);
} else {
if((state_val_23711 === (2))){
var state_23710__$1 = state_23710;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23710__$1,(4),from);
} else {
if((state_val_23711 === (1))){
var state_23710__$1 = state_23710;
var statearr_23721_23833 = state_23710__$1;
(statearr_23721_23833[(2)] = null);

(statearr_23721_23833[(1)] = (2));


return cljs.core.constant$keyword$61;
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
});})(c__11826__auto___23827,jobs,results,process,async))
;
return ((function (switch__11746__auto__,c__11826__auto___23827,jobs,results,process,async){
return (function() {
var state_machine__11747__auto__ = null;
var state_machine__11747__auto____0 = (function (){
var statearr_23725 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23725[(0)] = state_machine__11747__auto__);

(statearr_23725[(1)] = (1));

return statearr_23725;
});
var state_machine__11747__auto____1 = (function (state_23710){
while(true){
var ret_value__11748__auto__ = (function (){try{while(true){
var result__11749__auto__ = switch__11746__auto__(state_23710);
if(cljs.core.keyword_identical_QMARK_(result__11749__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11749__auto__;
}
break;
}
}catch (e23726){if((e23726 instanceof Object)){
var ex__11750__auto__ = e23726;
var statearr_23727_23834 = state_23710;
(statearr_23727_23834[(5)] = ex__11750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23710);

return cljs.core.constant$keyword$61;
} else {
throw e23726;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11748__auto__,cljs.core.constant$keyword$61)){
var G__23835 = state_23710;
state_23710 = G__23835;
continue;
} else {
return ret_value__11748__auto__;
}
break;
}
});
state_machine__11747__auto__ = function(state_23710){
switch(arguments.length){
case 0:
return state_machine__11747__auto____0.call(this);
case 1:
return state_machine__11747__auto____1.call(this,state_23710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11747__auto____0;
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11747__auto____1;
return state_machine__11747__auto__;
})()
;})(switch__11746__auto__,c__11826__auto___23827,jobs,results,process,async))
})();
var state__11828__auto__ = (function (){var statearr_23728 = (function (){return (f__11827__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11827__auto__.cljs$core$IFn$_invoke$arity$0() : f__11827__auto__.call(null));
})();
(statearr_23728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11826__auto___23827);

return statearr_23728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11828__auto__);
});})(c__11826__auto___23827,jobs,results,process,async))
);


var c__11826__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11826__auto__,jobs,results,process,async){
return (function (){
var f__11827__auto__ = (function (){var switch__11746__auto__ = ((function (c__11826__auto__,jobs,results,process,async){
return (function (state_23766){
var state_val_23767 = (state_23766[(1)]);
if((state_val_23767 === (7))){
var inst_23762 = (state_23766[(2)]);
var state_23766__$1 = state_23766;
var statearr_23768_23836 = state_23766__$1;
(statearr_23768_23836[(2)] = inst_23762);

(statearr_23768_23836[(1)] = (3));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23767 === (20))){
var state_23766__$1 = state_23766;
var statearr_23769_23837 = state_23766__$1;
(statearr_23769_23837[(2)] = null);

(statearr_23769_23837[(1)] = (21));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23767 === (1))){
var state_23766__$1 = state_23766;
var statearr_23770_23838 = state_23766__$1;
(statearr_23770_23838[(2)] = null);

(statearr_23770_23838[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23767 === (4))){
var inst_23731 = (state_23766[(7)]);
var inst_23731__$1 = (state_23766[(2)]);
var inst_23732 = (inst_23731__$1 == null);
var state_23766__$1 = (function (){var statearr_23771 = state_23766;
(statearr_23771[(7)] = inst_23731__$1);

return statearr_23771;
})();
if(cljs.core.truth_(inst_23732)){
var statearr_23772_23839 = state_23766__$1;
(statearr_23772_23839[(1)] = (5));

} else {
var statearr_23773_23840 = state_23766__$1;
(statearr_23773_23840[(1)] = (6));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_23767 === (15))){
var inst_23744 = (state_23766[(8)]);
var state_23766__$1 = state_23766;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23766__$1,(18),to,inst_23744);
} else {
if((state_val_23767 === (21))){
var inst_23757 = (state_23766[(2)]);
var state_23766__$1 = state_23766;
var statearr_23774_23841 = state_23766__$1;
(statearr_23774_23841[(2)] = inst_23757);

(statearr_23774_23841[(1)] = (13));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23767 === (13))){
var inst_23759 = (state_23766[(2)]);
var state_23766__$1 = (function (){var statearr_23775 = state_23766;
(statearr_23775[(9)] = inst_23759);

return statearr_23775;
})();
var statearr_23776_23842 = state_23766__$1;
(statearr_23776_23842[(2)] = null);

(statearr_23776_23842[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23767 === (6))){
var inst_23731 = (state_23766[(7)]);
var state_23766__$1 = state_23766;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23766__$1,(11),inst_23731);
} else {
if((state_val_23767 === (17))){
var inst_23752 = (state_23766[(2)]);
var state_23766__$1 = state_23766;
if(cljs.core.truth_(inst_23752)){
var statearr_23777_23843 = state_23766__$1;
(statearr_23777_23843[(1)] = (19));

} else {
var statearr_23778_23844 = state_23766__$1;
(statearr_23778_23844[(1)] = (20));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_23767 === (3))){
var inst_23764 = (state_23766[(2)]);
var state_23766__$1 = state_23766;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23766__$1,inst_23764);
} else {
if((state_val_23767 === (12))){
var inst_23741 = (state_23766[(10)]);
var state_23766__$1 = state_23766;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23766__$1,(14),inst_23741);
} else {
if((state_val_23767 === (2))){
var state_23766__$1 = state_23766;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23766__$1,(4),results);
} else {
if((state_val_23767 === (19))){
var state_23766__$1 = state_23766;
var statearr_23779_23845 = state_23766__$1;
(statearr_23779_23845[(2)] = null);

(statearr_23779_23845[(1)] = (12));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23767 === (11))){
var inst_23741 = (state_23766[(2)]);
var state_23766__$1 = (function (){var statearr_23780 = state_23766;
(statearr_23780[(10)] = inst_23741);

return statearr_23780;
})();
var statearr_23781_23846 = state_23766__$1;
(statearr_23781_23846[(2)] = null);

(statearr_23781_23846[(1)] = (12));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23767 === (9))){
var state_23766__$1 = state_23766;
var statearr_23782_23847 = state_23766__$1;
(statearr_23782_23847[(2)] = null);

(statearr_23782_23847[(1)] = (10));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23767 === (5))){
var state_23766__$1 = state_23766;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23783_23848 = state_23766__$1;
(statearr_23783_23848[(1)] = (8));

} else {
var statearr_23784_23849 = state_23766__$1;
(statearr_23784_23849[(1)] = (9));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_23767 === (14))){
var inst_23744 = (state_23766[(8)]);
var inst_23746 = (state_23766[(11)]);
var inst_23744__$1 = (state_23766[(2)]);
var inst_23745 = (inst_23744__$1 == null);
var inst_23746__$1 = cljs.core.not(inst_23745);
var state_23766__$1 = (function (){var statearr_23785 = state_23766;
(statearr_23785[(8)] = inst_23744__$1);

(statearr_23785[(11)] = inst_23746__$1);

return statearr_23785;
})();
if(inst_23746__$1){
var statearr_23786_23850 = state_23766__$1;
(statearr_23786_23850[(1)] = (15));

} else {
var statearr_23787_23851 = state_23766__$1;
(statearr_23787_23851[(1)] = (16));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_23767 === (16))){
var inst_23746 = (state_23766[(11)]);
var state_23766__$1 = state_23766;
var statearr_23788_23852 = state_23766__$1;
(statearr_23788_23852[(2)] = inst_23746);

(statearr_23788_23852[(1)] = (17));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23767 === (10))){
var inst_23738 = (state_23766[(2)]);
var state_23766__$1 = state_23766;
var statearr_23789_23853 = state_23766__$1;
(statearr_23789_23853[(2)] = inst_23738);

(statearr_23789_23853[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23767 === (18))){
var inst_23749 = (state_23766[(2)]);
var state_23766__$1 = state_23766;
var statearr_23790_23854 = state_23766__$1;
(statearr_23790_23854[(2)] = inst_23749);

(statearr_23790_23854[(1)] = (17));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23767 === (8))){
var inst_23735 = cljs.core.async.close_BANG_(to);
var state_23766__$1 = state_23766;
var statearr_23791_23855 = state_23766__$1;
(statearr_23791_23855[(2)] = inst_23735);

(statearr_23791_23855[(1)] = (10));


return cljs.core.constant$keyword$61;
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
});})(c__11826__auto__,jobs,results,process,async))
;
return ((function (switch__11746__auto__,c__11826__auto__,jobs,results,process,async){
return (function() {
var state_machine__11747__auto__ = null;
var state_machine__11747__auto____0 = (function (){
var statearr_23795 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23795[(0)] = state_machine__11747__auto__);

(statearr_23795[(1)] = (1));

return statearr_23795;
});
var state_machine__11747__auto____1 = (function (state_23766){
while(true){
var ret_value__11748__auto__ = (function (){try{while(true){
var result__11749__auto__ = switch__11746__auto__(state_23766);
if(cljs.core.keyword_identical_QMARK_(result__11749__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11749__auto__;
}
break;
}
}catch (e23796){if((e23796 instanceof Object)){
var ex__11750__auto__ = e23796;
var statearr_23797_23856 = state_23766;
(statearr_23797_23856[(5)] = ex__11750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23766);

return cljs.core.constant$keyword$61;
} else {
throw e23796;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11748__auto__,cljs.core.constant$keyword$61)){
var G__23857 = state_23766;
state_23766 = G__23857;
continue;
} else {
return ret_value__11748__auto__;
}
break;
}
});
state_machine__11747__auto__ = function(state_23766){
switch(arguments.length){
case 0:
return state_machine__11747__auto____0.call(this);
case 1:
return state_machine__11747__auto____1.call(this,state_23766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11747__auto____0;
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11747__auto____1;
return state_machine__11747__auto__;
})()
;})(switch__11746__auto__,c__11826__auto__,jobs,results,process,async))
})();
var state__11828__auto__ = (function (){var statearr_23798 = (function (){return (f__11827__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11827__auto__.cljs$core$IFn$_invoke$arity$0() : f__11827__auto__.call(null));
})();
(statearr_23798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11826__auto__);

return statearr_23798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11828__auto__);
});})(c__11826__auto__,jobs,results,process,async))
);

return c__11826__auto__;
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
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.constant$keyword$68);
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
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.constant$keyword$69);
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
var c__11826__auto___23980 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11826__auto___23980,tc,fc){
return (function (){
var f__11827__auto__ = (function (){var switch__11746__auto__ = ((function (c__11826__auto___23980,tc,fc){
return (function (state_23954){
var state_val_23955 = (state_23954[(1)]);
if((state_val_23955 === (7))){
var inst_23950 = (state_23954[(2)]);
var state_23954__$1 = state_23954;
var statearr_23956_23981 = state_23954__$1;
(statearr_23956_23981[(2)] = inst_23950);

(statearr_23956_23981[(1)] = (3));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23955 === (1))){
var state_23954__$1 = state_23954;
var statearr_23957_23982 = state_23954__$1;
(statearr_23957_23982[(2)] = null);

(statearr_23957_23982[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23955 === (4))){
var inst_23931 = (state_23954[(7)]);
var inst_23931__$1 = (state_23954[(2)]);
var inst_23932 = (inst_23931__$1 == null);
var state_23954__$1 = (function (){var statearr_23958 = state_23954;
(statearr_23958[(7)] = inst_23931__$1);

return statearr_23958;
})();
if(cljs.core.truth_(inst_23932)){
var statearr_23959_23983 = state_23954__$1;
(statearr_23959_23983[(1)] = (5));

} else {
var statearr_23960_23984 = state_23954__$1;
(statearr_23960_23984[(1)] = (6));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_23955 === (13))){
var state_23954__$1 = state_23954;
var statearr_23961_23985 = state_23954__$1;
(statearr_23961_23985[(2)] = null);

(statearr_23961_23985[(1)] = (14));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23955 === (6))){
var inst_23931 = (state_23954[(7)]);
var inst_23937 = (function (){var G__23962 = inst_23931;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__23962) : p.call(null,G__23962));
})();
var state_23954__$1 = state_23954;
if(cljs.core.truth_(inst_23937)){
var statearr_23963_23986 = state_23954__$1;
(statearr_23963_23986[(1)] = (9));

} else {
var statearr_23964_23987 = state_23954__$1;
(statearr_23964_23987[(1)] = (10));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_23955 === (3))){
var inst_23952 = (state_23954[(2)]);
var state_23954__$1 = state_23954;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23954__$1,inst_23952);
} else {
if((state_val_23955 === (12))){
var state_23954__$1 = state_23954;
var statearr_23965_23988 = state_23954__$1;
(statearr_23965_23988[(2)] = null);

(statearr_23965_23988[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23955 === (2))){
var state_23954__$1 = state_23954;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23954__$1,(4),ch);
} else {
if((state_val_23955 === (11))){
var inst_23931 = (state_23954[(7)]);
var inst_23941 = (state_23954[(2)]);
var state_23954__$1 = state_23954;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23954__$1,(8),inst_23941,inst_23931);
} else {
if((state_val_23955 === (9))){
var state_23954__$1 = state_23954;
var statearr_23966_23989 = state_23954__$1;
(statearr_23966_23989[(2)] = tc);

(statearr_23966_23989[(1)] = (11));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23955 === (5))){
var inst_23934 = cljs.core.async.close_BANG_(tc);
var inst_23935 = cljs.core.async.close_BANG_(fc);
var state_23954__$1 = (function (){var statearr_23967 = state_23954;
(statearr_23967[(8)] = inst_23934);

return statearr_23967;
})();
var statearr_23968_23990 = state_23954__$1;
(statearr_23968_23990[(2)] = inst_23935);

(statearr_23968_23990[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23955 === (14))){
var inst_23948 = (state_23954[(2)]);
var state_23954__$1 = state_23954;
var statearr_23969_23991 = state_23954__$1;
(statearr_23969_23991[(2)] = inst_23948);

(statearr_23969_23991[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23955 === (10))){
var state_23954__$1 = state_23954;
var statearr_23970_23992 = state_23954__$1;
(statearr_23970_23992[(2)] = fc);

(statearr_23970_23992[(1)] = (11));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23955 === (8))){
var inst_23943 = (state_23954[(2)]);
var state_23954__$1 = state_23954;
if(cljs.core.truth_(inst_23943)){
var statearr_23971_23993 = state_23954__$1;
(statearr_23971_23993[(1)] = (12));

} else {
var statearr_23972_23994 = state_23954__$1;
(statearr_23972_23994[(1)] = (13));

}

return cljs.core.constant$keyword$61;
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
});})(c__11826__auto___23980,tc,fc))
;
return ((function (switch__11746__auto__,c__11826__auto___23980,tc,fc){
return (function() {
var state_machine__11747__auto__ = null;
var state_machine__11747__auto____0 = (function (){
var statearr_23976 = [null,null,null,null,null,null,null,null,null];
(statearr_23976[(0)] = state_machine__11747__auto__);

(statearr_23976[(1)] = (1));

return statearr_23976;
});
var state_machine__11747__auto____1 = (function (state_23954){
while(true){
var ret_value__11748__auto__ = (function (){try{while(true){
var result__11749__auto__ = switch__11746__auto__(state_23954);
if(cljs.core.keyword_identical_QMARK_(result__11749__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11749__auto__;
}
break;
}
}catch (e23977){if((e23977 instanceof Object)){
var ex__11750__auto__ = e23977;
var statearr_23978_23995 = state_23954;
(statearr_23978_23995[(5)] = ex__11750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23954);

return cljs.core.constant$keyword$61;
} else {
throw e23977;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11748__auto__,cljs.core.constant$keyword$61)){
var G__23996 = state_23954;
state_23954 = G__23996;
continue;
} else {
return ret_value__11748__auto__;
}
break;
}
});
state_machine__11747__auto__ = function(state_23954){
switch(arguments.length){
case 0:
return state_machine__11747__auto____0.call(this);
case 1:
return state_machine__11747__auto____1.call(this,state_23954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11747__auto____0;
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11747__auto____1;
return state_machine__11747__auto__;
})()
;})(switch__11746__auto__,c__11826__auto___23980,tc,fc))
})();
var state__11828__auto__ = (function (){var statearr_23979 = (function (){return (f__11827__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11827__auto__.cljs$core$IFn$_invoke$arity$0() : f__11827__auto__.call(null));
})();
(statearr_23979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11826__auto___23980);

return statearr_23979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11828__auto__);
});})(c__11826__auto___23980,tc,fc))
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
var c__11826__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11826__auto__){
return (function (){
var f__11827__auto__ = (function (){var switch__11746__auto__ = ((function (c__11826__auto__){
return (function (state_24045){
var state_val_24046 = (state_24045[(1)]);
if((state_val_24046 === (7))){
var inst_24041 = (state_24045[(2)]);
var state_24045__$1 = state_24045;
var statearr_24047_24065 = state_24045__$1;
(statearr_24047_24065[(2)] = inst_24041);

(statearr_24047_24065[(1)] = (3));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24046 === (6))){
var inst_24031 = (state_24045[(7)]);
var inst_24034 = (state_24045[(8)]);
var inst_24038 = (function (){var G__24048 = inst_24031;
var G__24049 = inst_24034;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24048,G__24049) : f.call(null,G__24048,G__24049));
})();
var inst_24031__$1 = inst_24038;
var state_24045__$1 = (function (){var statearr_24050 = state_24045;
(statearr_24050[(7)] = inst_24031__$1);

return statearr_24050;
})();
var statearr_24051_24066 = state_24045__$1;
(statearr_24051_24066[(2)] = null);

(statearr_24051_24066[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24046 === (5))){
var inst_24031 = (state_24045[(7)]);
var state_24045__$1 = state_24045;
var statearr_24052_24067 = state_24045__$1;
(statearr_24052_24067[(2)] = inst_24031);

(statearr_24052_24067[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24046 === (4))){
var inst_24034 = (state_24045[(8)]);
var inst_24034__$1 = (state_24045[(2)]);
var inst_24035 = (inst_24034__$1 == null);
var state_24045__$1 = (function (){var statearr_24053 = state_24045;
(statearr_24053[(8)] = inst_24034__$1);

return statearr_24053;
})();
if(cljs.core.truth_(inst_24035)){
var statearr_24054_24068 = state_24045__$1;
(statearr_24054_24068[(1)] = (5));

} else {
var statearr_24055_24069 = state_24045__$1;
(statearr_24055_24069[(1)] = (6));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_24046 === (3))){
var inst_24043 = (state_24045[(2)]);
var state_24045__$1 = state_24045;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24045__$1,inst_24043);
} else {
if((state_val_24046 === (2))){
var state_24045__$1 = state_24045;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24045__$1,(4),ch);
} else {
if((state_val_24046 === (1))){
var inst_24031 = init;
var state_24045__$1 = (function (){var statearr_24056 = state_24045;
(statearr_24056[(7)] = inst_24031);

return statearr_24056;
})();
var statearr_24057_24070 = state_24045__$1;
(statearr_24057_24070[(2)] = null);

(statearr_24057_24070[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
return null;
}
}
}
}
}
}
}
});})(c__11826__auto__))
;
return ((function (switch__11746__auto__,c__11826__auto__){
return (function() {
var state_machine__11747__auto__ = null;
var state_machine__11747__auto____0 = (function (){
var statearr_24061 = [null,null,null,null,null,null,null,null,null];
(statearr_24061[(0)] = state_machine__11747__auto__);

(statearr_24061[(1)] = (1));

return statearr_24061;
});
var state_machine__11747__auto____1 = (function (state_24045){
while(true){
var ret_value__11748__auto__ = (function (){try{while(true){
var result__11749__auto__ = switch__11746__auto__(state_24045);
if(cljs.core.keyword_identical_QMARK_(result__11749__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11749__auto__;
}
break;
}
}catch (e24062){if((e24062 instanceof Object)){
var ex__11750__auto__ = e24062;
var statearr_24063_24071 = state_24045;
(statearr_24063_24071[(5)] = ex__11750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24045);

return cljs.core.constant$keyword$61;
} else {
throw e24062;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11748__auto__,cljs.core.constant$keyword$61)){
var G__24072 = state_24045;
state_24045 = G__24072;
continue;
} else {
return ret_value__11748__auto__;
}
break;
}
});
state_machine__11747__auto__ = function(state_24045){
switch(arguments.length){
case 0:
return state_machine__11747__auto____0.call(this);
case 1:
return state_machine__11747__auto____1.call(this,state_24045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11747__auto____0;
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11747__auto____1;
return state_machine__11747__auto__;
})()
;})(switch__11746__auto__,c__11826__auto__))
})();
var state__11828__auto__ = (function (){var statearr_24064 = (function (){return (f__11827__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11827__auto__.cljs$core$IFn$_invoke$arity$0() : f__11827__auto__.call(null));
})();
(statearr_24064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11826__auto__);

return statearr_24064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11828__auto__);
});})(c__11826__auto__))
);

return c__11826__auto__;
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
var c__11826__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11826__auto__){
return (function (){
var f__11827__auto__ = (function (){var switch__11746__auto__ = ((function (c__11826__auto__){
return (function (state_24149){
var state_val_24150 = (state_24149[(1)]);
if((state_val_24150 === (7))){
var inst_24131 = (state_24149[(2)]);
var state_24149__$1 = state_24149;
var statearr_24151_24174 = state_24149__$1;
(statearr_24151_24174[(2)] = inst_24131);

(statearr_24151_24174[(1)] = (6));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24150 === (1))){
var inst_24125 = cljs.core.seq(coll);
var inst_24126 = inst_24125;
var state_24149__$1 = (function (){var statearr_24152 = state_24149;
(statearr_24152[(7)] = inst_24126);

return statearr_24152;
})();
var statearr_24153_24175 = state_24149__$1;
(statearr_24153_24175[(2)] = null);

(statearr_24153_24175[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24150 === (4))){
var inst_24126 = (state_24149[(7)]);
var inst_24129 = cljs.core.first(inst_24126);
var state_24149__$1 = state_24149;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24149__$1,(7),ch,inst_24129);
} else {
if((state_val_24150 === (13))){
var inst_24143 = (state_24149[(2)]);
var state_24149__$1 = state_24149;
var statearr_24154_24176 = state_24149__$1;
(statearr_24154_24176[(2)] = inst_24143);

(statearr_24154_24176[(1)] = (10));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24150 === (6))){
var inst_24134 = (state_24149[(2)]);
var state_24149__$1 = state_24149;
if(cljs.core.truth_(inst_24134)){
var statearr_24155_24177 = state_24149__$1;
(statearr_24155_24177[(1)] = (8));

} else {
var statearr_24156_24178 = state_24149__$1;
(statearr_24156_24178[(1)] = (9));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_24150 === (3))){
var inst_24147 = (state_24149[(2)]);
var state_24149__$1 = state_24149;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24149__$1,inst_24147);
} else {
if((state_val_24150 === (12))){
var state_24149__$1 = state_24149;
var statearr_24157_24179 = state_24149__$1;
(statearr_24157_24179[(2)] = null);

(statearr_24157_24179[(1)] = (13));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24150 === (2))){
var inst_24126 = (state_24149[(7)]);
var state_24149__$1 = state_24149;
if(cljs.core.truth_(inst_24126)){
var statearr_24158_24180 = state_24149__$1;
(statearr_24158_24180[(1)] = (4));

} else {
var statearr_24159_24181 = state_24149__$1;
(statearr_24159_24181[(1)] = (5));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_24150 === (11))){
var inst_24140 = cljs.core.async.close_BANG_(ch);
var state_24149__$1 = state_24149;
var statearr_24160_24182 = state_24149__$1;
(statearr_24160_24182[(2)] = inst_24140);

(statearr_24160_24182[(1)] = (13));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24150 === (9))){
var state_24149__$1 = state_24149;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24161_24183 = state_24149__$1;
(statearr_24161_24183[(1)] = (11));

} else {
var statearr_24162_24184 = state_24149__$1;
(statearr_24162_24184[(1)] = (12));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_24150 === (5))){
var inst_24126 = (state_24149[(7)]);
var state_24149__$1 = state_24149;
var statearr_24163_24185 = state_24149__$1;
(statearr_24163_24185[(2)] = inst_24126);

(statearr_24163_24185[(1)] = (6));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24150 === (10))){
var inst_24145 = (state_24149[(2)]);
var state_24149__$1 = state_24149;
var statearr_24164_24186 = state_24149__$1;
(statearr_24164_24186[(2)] = inst_24145);

(statearr_24164_24186[(1)] = (3));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24150 === (8))){
var inst_24126 = (state_24149[(7)]);
var inst_24136 = cljs.core.next(inst_24126);
var inst_24126__$1 = inst_24136;
var state_24149__$1 = (function (){var statearr_24165 = state_24149;
(statearr_24165[(7)] = inst_24126__$1);

return statearr_24165;
})();
var statearr_24166_24187 = state_24149__$1;
(statearr_24166_24187[(2)] = null);

(statearr_24166_24187[(1)] = (2));


return cljs.core.constant$keyword$61;
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
});})(c__11826__auto__))
;
return ((function (switch__11746__auto__,c__11826__auto__){
return (function() {
var state_machine__11747__auto__ = null;
var state_machine__11747__auto____0 = (function (){
var statearr_24170 = [null,null,null,null,null,null,null,null];
(statearr_24170[(0)] = state_machine__11747__auto__);

(statearr_24170[(1)] = (1));

return statearr_24170;
});
var state_machine__11747__auto____1 = (function (state_24149){
while(true){
var ret_value__11748__auto__ = (function (){try{while(true){
var result__11749__auto__ = switch__11746__auto__(state_24149);
if(cljs.core.keyword_identical_QMARK_(result__11749__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11749__auto__;
}
break;
}
}catch (e24171){if((e24171 instanceof Object)){
var ex__11750__auto__ = e24171;
var statearr_24172_24188 = state_24149;
(statearr_24172_24188[(5)] = ex__11750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24149);

return cljs.core.constant$keyword$61;
} else {
throw e24171;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11748__auto__,cljs.core.constant$keyword$61)){
var G__24189 = state_24149;
state_24149 = G__24189;
continue;
} else {
return ret_value__11748__auto__;
}
break;
}
});
state_machine__11747__auto__ = function(state_24149){
switch(arguments.length){
case 0:
return state_machine__11747__auto____0.call(this);
case 1:
return state_machine__11747__auto____1.call(this,state_24149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11747__auto____0;
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11747__auto____1;
return state_machine__11747__auto__;
})()
;})(switch__11746__auto__,c__11826__auto__))
})();
var state__11828__auto__ = (function (){var statearr_24173 = (function (){return (f__11827__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11827__auto__.cljs$core$IFn$_invoke$arity$0() : f__11827__auto__.call(null));
})();
(statearr_24173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11826__auto__);

return statearr_24173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11828__auto__);
});})(c__11826__auto__))
);

return c__11826__auto__;
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

cljs.core.async.Mux = (function (){var obj24191 = {};
return obj24191;
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
return (function (){var or__3630__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__24195 = x__4274__auto__;
return goog.typeOf(G__24195);
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


cljs.core.async.Mult = (function (){var obj24197 = {};
return obj24197;
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
return (function (){var or__3630__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__24201 = x__4274__auto__;
return goog.typeOf(G__24201);
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
return (function (){var or__3630__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__24205 = x__4274__auto__;
return goog.typeOf(G__24205);
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
return (function (){var or__3630__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__24209 = x__4274__auto__;
return goog.typeOf(G__24209);
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
var cs = (function (){var G__24439 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24439) : cljs.core.atom.call(null,G__24439));
})();
var m = (function (){
if(typeof cljs.core.async.t24440 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24440 = (function (cs,ch,mult,meta24441){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24441 = meta24441;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24440.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t24440.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t24440.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t24440.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__24443_24668 = self__.cs;
var G__24444_24669 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24443_24668,G__24444_24669) : cljs.core.reset_BANG_.call(null,G__24443_24668,G__24444_24669));

return null;
});})(cs))
;

cljs.core.async.t24440.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24440.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t24440.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24442){
var self__ = this;
var _24442__$1 = this;
return self__.meta24441;
});})(cs))
;

cljs.core.async.t24440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24442,meta24441__$1){
var self__ = this;
var _24442__$1 = this;
return (new cljs.core.async.t24440(self__.cs,self__.ch,self__.mult,meta24441__$1));
});})(cs))
;

cljs.core.async.t24440.cljs$lang$type = true;

cljs.core.async.t24440.cljs$lang$ctorStr = "cljs.core.async/t24440";

cljs.core.async.t24440.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24440");
});})(cs))
;

cljs.core.async.__GT_t24440 = ((function (cs){
return (function __GT_t24440(cs__$1,ch__$1,mult__$1,meta24441){
return (new cljs.core.async.t24440(cs__$1,ch__$1,mult__$1,meta24441));
});})(cs))
;

}

return (new cljs.core.async.t24440(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,397,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,390,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__24445 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24445) : cljs.core.atom.call(null,G__24445));
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
var c__11826__auto___24670 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11826__auto___24670,cs,m,dchan,dctr,done){
return (function (){
var f__11827__auto__ = (function (){var switch__11746__auto__ = ((function (c__11826__auto___24670,cs,m,dchan,dctr,done){
return (function (state_24576){
var state_val_24577 = (state_24576[(1)]);
if((state_val_24577 === (7))){
var inst_24572 = (state_24576[(2)]);
var state_24576__$1 = state_24576;
var statearr_24578_24671 = state_24576__$1;
(statearr_24578_24671[(2)] = inst_24572);

(statearr_24578_24671[(1)] = (3));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (20))){
var inst_24477 = (state_24576[(7)]);
var inst_24487 = cljs.core.first(inst_24477);
var inst_24488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24487,(0),null);
var inst_24489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24487,(1),null);
var state_24576__$1 = (function (){var statearr_24579 = state_24576;
(statearr_24579[(8)] = inst_24488);

return statearr_24579;
})();
if(cljs.core.truth_(inst_24489)){
var statearr_24580_24672 = state_24576__$1;
(statearr_24580_24672[(1)] = (22));

} else {
var statearr_24581_24673 = state_24576__$1;
(statearr_24581_24673[(1)] = (23));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (27))){
var inst_24517 = (state_24576[(9)]);
var inst_24524 = (state_24576[(10)]);
var inst_24519 = (state_24576[(11)]);
var inst_24448 = (state_24576[(12)]);
var inst_24524__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24517,inst_24519);
var inst_24525 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24524__$1,inst_24448,done);
var state_24576__$1 = (function (){var statearr_24582 = state_24576;
(statearr_24582[(10)] = inst_24524__$1);

return statearr_24582;
})();
if(cljs.core.truth_(inst_24525)){
var statearr_24583_24674 = state_24576__$1;
(statearr_24583_24674[(1)] = (30));

} else {
var statearr_24584_24675 = state_24576__$1;
(statearr_24584_24675[(1)] = (31));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (1))){
var state_24576__$1 = state_24576;
var statearr_24585_24676 = state_24576__$1;
(statearr_24585_24676[(2)] = null);

(statearr_24585_24676[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (24))){
var inst_24477 = (state_24576[(7)]);
var inst_24494 = (state_24576[(2)]);
var inst_24495 = cljs.core.next(inst_24477);
var inst_24457 = inst_24495;
var inst_24458 = null;
var inst_24459 = (0);
var inst_24460 = (0);
var state_24576__$1 = (function (){var statearr_24586 = state_24576;
(statearr_24586[(13)] = inst_24457);

(statearr_24586[(14)] = inst_24494);

(statearr_24586[(15)] = inst_24459);

(statearr_24586[(16)] = inst_24458);

(statearr_24586[(17)] = inst_24460);

return statearr_24586;
})();
var statearr_24587_24677 = state_24576__$1;
(statearr_24587_24677[(2)] = null);

(statearr_24587_24677[(1)] = (8));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (39))){
var state_24576__$1 = state_24576;
var statearr_24591_24678 = state_24576__$1;
(statearr_24591_24678[(2)] = null);

(statearr_24591_24678[(1)] = (41));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (4))){
var inst_24448 = (state_24576[(12)]);
var inst_24448__$1 = (state_24576[(2)]);
var inst_24449 = (inst_24448__$1 == null);
var state_24576__$1 = (function (){var statearr_24592 = state_24576;
(statearr_24592[(12)] = inst_24448__$1);

return statearr_24592;
})();
if(cljs.core.truth_(inst_24449)){
var statearr_24593_24679 = state_24576__$1;
(statearr_24593_24679[(1)] = (5));

} else {
var statearr_24594_24680 = state_24576__$1;
(statearr_24594_24680[(1)] = (6));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (15))){
var inst_24457 = (state_24576[(13)]);
var inst_24459 = (state_24576[(15)]);
var inst_24458 = (state_24576[(16)]);
var inst_24460 = (state_24576[(17)]);
var inst_24473 = (state_24576[(2)]);
var inst_24474 = (inst_24460 + (1));
var tmp24588 = inst_24457;
var tmp24589 = inst_24459;
var tmp24590 = inst_24458;
var inst_24457__$1 = tmp24588;
var inst_24458__$1 = tmp24590;
var inst_24459__$1 = tmp24589;
var inst_24460__$1 = inst_24474;
var state_24576__$1 = (function (){var statearr_24595 = state_24576;
(statearr_24595[(13)] = inst_24457__$1);

(statearr_24595[(15)] = inst_24459__$1);

(statearr_24595[(16)] = inst_24458__$1);

(statearr_24595[(18)] = inst_24473);

(statearr_24595[(17)] = inst_24460__$1);

return statearr_24595;
})();
var statearr_24596_24681 = state_24576__$1;
(statearr_24596_24681[(2)] = null);

(statearr_24596_24681[(1)] = (8));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (21))){
var inst_24498 = (state_24576[(2)]);
var state_24576__$1 = state_24576;
var statearr_24600_24682 = state_24576__$1;
(statearr_24600_24682[(2)] = inst_24498);

(statearr_24600_24682[(1)] = (18));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (31))){
var inst_24524 = (state_24576[(10)]);
var inst_24528 = done(null);
var inst_24529 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24524);
var state_24576__$1 = (function (){var statearr_24601 = state_24576;
(statearr_24601[(19)] = inst_24528);

return statearr_24601;
})();
var statearr_24602_24683 = state_24576__$1;
(statearr_24602_24683[(2)] = inst_24529);

(statearr_24602_24683[(1)] = (32));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (32))){
var inst_24516 = (state_24576[(20)]);
var inst_24517 = (state_24576[(9)]);
var inst_24518 = (state_24576[(21)]);
var inst_24519 = (state_24576[(11)]);
var inst_24531 = (state_24576[(2)]);
var inst_24532 = (inst_24519 + (1));
var tmp24597 = inst_24516;
var tmp24598 = inst_24517;
var tmp24599 = inst_24518;
var inst_24516__$1 = tmp24597;
var inst_24517__$1 = tmp24598;
var inst_24518__$1 = tmp24599;
var inst_24519__$1 = inst_24532;
var state_24576__$1 = (function (){var statearr_24603 = state_24576;
(statearr_24603[(20)] = inst_24516__$1);

(statearr_24603[(9)] = inst_24517__$1);

(statearr_24603[(21)] = inst_24518__$1);

(statearr_24603[(22)] = inst_24531);

(statearr_24603[(11)] = inst_24519__$1);

return statearr_24603;
})();
var statearr_24604_24684 = state_24576__$1;
(statearr_24604_24684[(2)] = null);

(statearr_24604_24684[(1)] = (25));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (40))){
var inst_24544 = (state_24576[(23)]);
var inst_24548 = done(null);
var inst_24549 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24544);
var state_24576__$1 = (function (){var statearr_24605 = state_24576;
(statearr_24605[(24)] = inst_24548);

return statearr_24605;
})();
var statearr_24606_24685 = state_24576__$1;
(statearr_24606_24685[(2)] = inst_24549);

(statearr_24606_24685[(1)] = (41));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (33))){
var inst_24535 = (state_24576[(25)]);
var inst_24537 = cljs.core.chunked_seq_QMARK_(inst_24535);
var state_24576__$1 = state_24576;
if(inst_24537){
var statearr_24607_24686 = state_24576__$1;
(statearr_24607_24686[(1)] = (36));

} else {
var statearr_24608_24687 = state_24576__$1;
(statearr_24608_24687[(1)] = (37));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (13))){
var inst_24467 = (state_24576[(26)]);
var inst_24470 = cljs.core.async.close_BANG_(inst_24467);
var state_24576__$1 = state_24576;
var statearr_24609_24688 = state_24576__$1;
(statearr_24609_24688[(2)] = inst_24470);

(statearr_24609_24688[(1)] = (15));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (22))){
var inst_24488 = (state_24576[(8)]);
var inst_24491 = cljs.core.async.close_BANG_(inst_24488);
var state_24576__$1 = state_24576;
var statearr_24610_24689 = state_24576__$1;
(statearr_24610_24689[(2)] = inst_24491);

(statearr_24610_24689[(1)] = (24));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (36))){
var inst_24535 = (state_24576[(25)]);
var inst_24539 = cljs.core.chunk_first(inst_24535);
var inst_24540 = cljs.core.chunk_rest(inst_24535);
var inst_24541 = cljs.core.count(inst_24539);
var inst_24516 = inst_24540;
var inst_24517 = inst_24539;
var inst_24518 = inst_24541;
var inst_24519 = (0);
var state_24576__$1 = (function (){var statearr_24611 = state_24576;
(statearr_24611[(20)] = inst_24516);

(statearr_24611[(9)] = inst_24517);

(statearr_24611[(21)] = inst_24518);

(statearr_24611[(11)] = inst_24519);

return statearr_24611;
})();
var statearr_24612_24690 = state_24576__$1;
(statearr_24612_24690[(2)] = null);

(statearr_24612_24690[(1)] = (25));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (41))){
var inst_24535 = (state_24576[(25)]);
var inst_24551 = (state_24576[(2)]);
var inst_24552 = cljs.core.next(inst_24535);
var inst_24516 = inst_24552;
var inst_24517 = null;
var inst_24518 = (0);
var inst_24519 = (0);
var state_24576__$1 = (function (){var statearr_24613 = state_24576;
(statearr_24613[(20)] = inst_24516);

(statearr_24613[(27)] = inst_24551);

(statearr_24613[(9)] = inst_24517);

(statearr_24613[(21)] = inst_24518);

(statearr_24613[(11)] = inst_24519);

return statearr_24613;
})();
var statearr_24614_24691 = state_24576__$1;
(statearr_24614_24691[(2)] = null);

(statearr_24614_24691[(1)] = (25));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (43))){
var state_24576__$1 = state_24576;
var statearr_24615_24692 = state_24576__$1;
(statearr_24615_24692[(2)] = null);

(statearr_24615_24692[(1)] = (44));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (29))){
var inst_24560 = (state_24576[(2)]);
var state_24576__$1 = state_24576;
var statearr_24616_24693 = state_24576__$1;
(statearr_24616_24693[(2)] = inst_24560);

(statearr_24616_24693[(1)] = (26));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (44))){
var inst_24569 = (state_24576[(2)]);
var state_24576__$1 = (function (){var statearr_24617 = state_24576;
(statearr_24617[(28)] = inst_24569);

return statearr_24617;
})();
var statearr_24618_24694 = state_24576__$1;
(statearr_24618_24694[(2)] = null);

(statearr_24618_24694[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (6))){
var inst_24508 = (state_24576[(29)]);
var inst_24507 = (function (){var G__24619 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24619) : cljs.core.deref.call(null,G__24619));
})();
var inst_24508__$1 = cljs.core.keys(inst_24507);
var inst_24509 = cljs.core.count(inst_24508__$1);
var inst_24510 = (function (){var G__24620 = dctr;
var G__24621 = inst_24509;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24620,G__24621) : cljs.core.reset_BANG_.call(null,G__24620,G__24621));
})();
var inst_24515 = cljs.core.seq(inst_24508__$1);
var inst_24516 = inst_24515;
var inst_24517 = null;
var inst_24518 = (0);
var inst_24519 = (0);
var state_24576__$1 = (function (){var statearr_24622 = state_24576;
(statearr_24622[(20)] = inst_24516);

(statearr_24622[(9)] = inst_24517);

(statearr_24622[(21)] = inst_24518);

(statearr_24622[(11)] = inst_24519);

(statearr_24622[(30)] = inst_24510);

(statearr_24622[(29)] = inst_24508__$1);

return statearr_24622;
})();
var statearr_24623_24695 = state_24576__$1;
(statearr_24623_24695[(2)] = null);

(statearr_24623_24695[(1)] = (25));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (28))){
var inst_24516 = (state_24576[(20)]);
var inst_24535 = (state_24576[(25)]);
var inst_24535__$1 = cljs.core.seq(inst_24516);
var state_24576__$1 = (function (){var statearr_24624 = state_24576;
(statearr_24624[(25)] = inst_24535__$1);

return statearr_24624;
})();
if(inst_24535__$1){
var statearr_24625_24696 = state_24576__$1;
(statearr_24625_24696[(1)] = (33));

} else {
var statearr_24626_24697 = state_24576__$1;
(statearr_24626_24697[(1)] = (34));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (25))){
var inst_24518 = (state_24576[(21)]);
var inst_24519 = (state_24576[(11)]);
var inst_24521 = (inst_24519 < inst_24518);
var inst_24522 = inst_24521;
var state_24576__$1 = state_24576;
if(cljs.core.truth_(inst_24522)){
var statearr_24627_24698 = state_24576__$1;
(statearr_24627_24698[(1)] = (27));

} else {
var statearr_24628_24699 = state_24576__$1;
(statearr_24628_24699[(1)] = (28));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (34))){
var state_24576__$1 = state_24576;
var statearr_24629_24700 = state_24576__$1;
(statearr_24629_24700[(2)] = null);

(statearr_24629_24700[(1)] = (35));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (17))){
var state_24576__$1 = state_24576;
var statearr_24630_24701 = state_24576__$1;
(statearr_24630_24701[(2)] = null);

(statearr_24630_24701[(1)] = (18));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (3))){
var inst_24574 = (state_24576[(2)]);
var state_24576__$1 = state_24576;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24576__$1,inst_24574);
} else {
if((state_val_24577 === (12))){
var inst_24503 = (state_24576[(2)]);
var state_24576__$1 = state_24576;
var statearr_24631_24702 = state_24576__$1;
(statearr_24631_24702[(2)] = inst_24503);

(statearr_24631_24702[(1)] = (9));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (2))){
var state_24576__$1 = state_24576;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24576__$1,(4),ch);
} else {
if((state_val_24577 === (23))){
var state_24576__$1 = state_24576;
var statearr_24632_24703 = state_24576__$1;
(statearr_24632_24703[(2)] = null);

(statearr_24632_24703[(1)] = (24));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (35))){
var inst_24558 = (state_24576[(2)]);
var state_24576__$1 = state_24576;
var statearr_24633_24704 = state_24576__$1;
(statearr_24633_24704[(2)] = inst_24558);

(statearr_24633_24704[(1)] = (29));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (19))){
var inst_24477 = (state_24576[(7)]);
var inst_24481 = cljs.core.chunk_first(inst_24477);
var inst_24482 = cljs.core.chunk_rest(inst_24477);
var inst_24483 = cljs.core.count(inst_24481);
var inst_24457 = inst_24482;
var inst_24458 = inst_24481;
var inst_24459 = inst_24483;
var inst_24460 = (0);
var state_24576__$1 = (function (){var statearr_24634 = state_24576;
(statearr_24634[(13)] = inst_24457);

(statearr_24634[(15)] = inst_24459);

(statearr_24634[(16)] = inst_24458);

(statearr_24634[(17)] = inst_24460);

return statearr_24634;
})();
var statearr_24635_24705 = state_24576__$1;
(statearr_24635_24705[(2)] = null);

(statearr_24635_24705[(1)] = (8));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (11))){
var inst_24457 = (state_24576[(13)]);
var inst_24477 = (state_24576[(7)]);
var inst_24477__$1 = cljs.core.seq(inst_24457);
var state_24576__$1 = (function (){var statearr_24636 = state_24576;
(statearr_24636[(7)] = inst_24477__$1);

return statearr_24636;
})();
if(inst_24477__$1){
var statearr_24637_24706 = state_24576__$1;
(statearr_24637_24706[(1)] = (16));

} else {
var statearr_24638_24707 = state_24576__$1;
(statearr_24638_24707[(1)] = (17));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (9))){
var inst_24505 = (state_24576[(2)]);
var state_24576__$1 = state_24576;
var statearr_24639_24708 = state_24576__$1;
(statearr_24639_24708[(2)] = inst_24505);

(statearr_24639_24708[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (5))){
var inst_24455 = (function (){var G__24640 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24640) : cljs.core.deref.call(null,G__24640));
})();
var inst_24456 = cljs.core.seq(inst_24455);
var inst_24457 = inst_24456;
var inst_24458 = null;
var inst_24459 = (0);
var inst_24460 = (0);
var state_24576__$1 = (function (){var statearr_24641 = state_24576;
(statearr_24641[(13)] = inst_24457);

(statearr_24641[(15)] = inst_24459);

(statearr_24641[(16)] = inst_24458);

(statearr_24641[(17)] = inst_24460);

return statearr_24641;
})();
var statearr_24642_24709 = state_24576__$1;
(statearr_24642_24709[(2)] = null);

(statearr_24642_24709[(1)] = (8));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (14))){
var state_24576__$1 = state_24576;
var statearr_24643_24710 = state_24576__$1;
(statearr_24643_24710[(2)] = null);

(statearr_24643_24710[(1)] = (15));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (45))){
var inst_24566 = (state_24576[(2)]);
var state_24576__$1 = state_24576;
var statearr_24644_24711 = state_24576__$1;
(statearr_24644_24711[(2)] = inst_24566);

(statearr_24644_24711[(1)] = (44));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (26))){
var inst_24508 = (state_24576[(29)]);
var inst_24562 = (state_24576[(2)]);
var inst_24563 = cljs.core.seq(inst_24508);
var state_24576__$1 = (function (){var statearr_24645 = state_24576;
(statearr_24645[(31)] = inst_24562);

return statearr_24645;
})();
if(inst_24563){
var statearr_24646_24712 = state_24576__$1;
(statearr_24646_24712[(1)] = (42));

} else {
var statearr_24647_24713 = state_24576__$1;
(statearr_24647_24713[(1)] = (43));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (16))){
var inst_24477 = (state_24576[(7)]);
var inst_24479 = cljs.core.chunked_seq_QMARK_(inst_24477);
var state_24576__$1 = state_24576;
if(inst_24479){
var statearr_24648_24714 = state_24576__$1;
(statearr_24648_24714[(1)] = (19));

} else {
var statearr_24649_24715 = state_24576__$1;
(statearr_24649_24715[(1)] = (20));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (38))){
var inst_24555 = (state_24576[(2)]);
var state_24576__$1 = state_24576;
var statearr_24650_24716 = state_24576__$1;
(statearr_24650_24716[(2)] = inst_24555);

(statearr_24650_24716[(1)] = (35));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (30))){
var state_24576__$1 = state_24576;
var statearr_24651_24717 = state_24576__$1;
(statearr_24651_24717[(2)] = null);

(statearr_24651_24717[(1)] = (32));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (10))){
var inst_24458 = (state_24576[(16)]);
var inst_24460 = (state_24576[(17)]);
var inst_24466 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24458,inst_24460);
var inst_24467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24466,(0),null);
var inst_24468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24466,(1),null);
var state_24576__$1 = (function (){var statearr_24652 = state_24576;
(statearr_24652[(26)] = inst_24467);

return statearr_24652;
})();
if(cljs.core.truth_(inst_24468)){
var statearr_24653_24718 = state_24576__$1;
(statearr_24653_24718[(1)] = (13));

} else {
var statearr_24654_24719 = state_24576__$1;
(statearr_24654_24719[(1)] = (14));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (18))){
var inst_24501 = (state_24576[(2)]);
var state_24576__$1 = state_24576;
var statearr_24655_24720 = state_24576__$1;
(statearr_24655_24720[(2)] = inst_24501);

(statearr_24655_24720[(1)] = (12));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (42))){
var state_24576__$1 = state_24576;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24576__$1,(45),dchan);
} else {
if((state_val_24577 === (37))){
var inst_24535 = (state_24576[(25)]);
var inst_24544 = (state_24576[(23)]);
var inst_24448 = (state_24576[(12)]);
var inst_24544__$1 = cljs.core.first(inst_24535);
var inst_24545 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24544__$1,inst_24448,done);
var state_24576__$1 = (function (){var statearr_24656 = state_24576;
(statearr_24656[(23)] = inst_24544__$1);

return statearr_24656;
})();
if(cljs.core.truth_(inst_24545)){
var statearr_24657_24721 = state_24576__$1;
(statearr_24657_24721[(1)] = (39));

} else {
var statearr_24658_24722 = state_24576__$1;
(statearr_24658_24722[(1)] = (40));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_24577 === (8))){
var inst_24459 = (state_24576[(15)]);
var inst_24460 = (state_24576[(17)]);
var inst_24462 = (inst_24460 < inst_24459);
var inst_24463 = inst_24462;
var state_24576__$1 = state_24576;
if(cljs.core.truth_(inst_24463)){
var statearr_24659_24723 = state_24576__$1;
(statearr_24659_24723[(1)] = (10));

} else {
var statearr_24660_24724 = state_24576__$1;
(statearr_24660_24724[(1)] = (11));

}

return cljs.core.constant$keyword$61;
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
});})(c__11826__auto___24670,cs,m,dchan,dctr,done))
;
return ((function (switch__11746__auto__,c__11826__auto___24670,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11747__auto__ = null;
var state_machine__11747__auto____0 = (function (){
var statearr_24664 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24664[(0)] = state_machine__11747__auto__);

(statearr_24664[(1)] = (1));

return statearr_24664;
});
var state_machine__11747__auto____1 = (function (state_24576){
while(true){
var ret_value__11748__auto__ = (function (){try{while(true){
var result__11749__auto__ = switch__11746__auto__(state_24576);
if(cljs.core.keyword_identical_QMARK_(result__11749__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11749__auto__;
}
break;
}
}catch (e24665){if((e24665 instanceof Object)){
var ex__11750__auto__ = e24665;
var statearr_24666_24725 = state_24576;
(statearr_24666_24725[(5)] = ex__11750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24576);

return cljs.core.constant$keyword$61;
} else {
throw e24665;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11748__auto__,cljs.core.constant$keyword$61)){
var G__24726 = state_24576;
state_24576 = G__24726;
continue;
} else {
return ret_value__11748__auto__;
}
break;
}
});
state_machine__11747__auto__ = function(state_24576){
switch(arguments.length){
case 0:
return state_machine__11747__auto____0.call(this);
case 1:
return state_machine__11747__auto____1.call(this,state_24576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11747__auto____0;
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11747__auto____1;
return state_machine__11747__auto__;
})()
;})(switch__11746__auto__,c__11826__auto___24670,cs,m,dchan,dctr,done))
})();
var state__11828__auto__ = (function (){var statearr_24667 = (function (){return (f__11827__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11827__auto__.cljs$core$IFn$_invoke$arity$0() : f__11827__auto__.call(null));
})();
(statearr_24667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11826__auto___24670);

return statearr_24667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11828__auto__);
});})(c__11826__auto___24670,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj24731 = {};
return obj24731;
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
return (function (){var or__3630__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__24735 = x__4274__auto__;
return goog.typeOf(G__24735);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__24739 = x__4274__auto__;
return goog.typeOf(G__24739);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__24743 = x__4274__auto__;
return goog.typeOf(G__24743);
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
return (function (){var or__3630__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__24747 = x__4274__auto__;
return goog.typeOf(G__24747);
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
return (function (){var or__3630__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__24751 = x__4274__auto__;
return goog.typeOf(G__24751);
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__24752){
var map__24758 = p__24752;
var map__24758__$1 = ((cljs.core.seq_QMARK_(map__24758))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24758):map__24758);
var opts = map__24758__$1;
var statearr_24759_24763 = state;
(statearr_24759_24763[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__24758,map__24758__$1,opts){
return (function (val){
var statearr_24760_24764 = state;
(statearr_24760_24764[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__24758,map__24758__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_24761_24765 = state;
(statearr_24761_24765[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__24762 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24762) : cljs.core.deref.call(null,G__24762));
})());


return cljs.core.constant$keyword$61;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__24752 = null;
if (arguments.length > 3) {
  p__24752 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__24752);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__24766){
var state = cljs.core.first(arglist__24766);
arglist__24766 = cljs.core.next(arglist__24766);
var cont_block = cljs.core.first(arglist__24766);
arglist__24766 = cljs.core.next(arglist__24766);
var ports = cljs.core.first(arglist__24766);
var p__24752 = cljs.core.rest(arglist__24766);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__24752);
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
var cs = (function (){var G__24900 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24900) : cljs.core.atom.call(null,G__24900));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$70,null,cljs.core.constant$keyword$71,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$72);
var solo_mode = (function (){var G__24901 = cljs.core.constant$keyword$71;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24901) : cljs.core.atom.call(null,G__24901));
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
if(cljs.core.truth_((function (){var G__24902 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__24902) : attr.call(null,G__24902));
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
var chs = (function (){var G__24903 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24903) : cljs.core.deref.call(null,G__24903));
})();
var mode = (function (){var G__24904 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24904) : cljs.core.deref.call(null,G__24904));
})();
var solos = pick(cljs.core.constant$keyword$72,chs);
var pauses = pick(cljs.core.constant$keyword$70,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$73,solos,cljs.core.constant$keyword$74,pick(cljs.core.constant$keyword$71,chs),cljs.core.constant$keyword$75,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$70)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t24905 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24905 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24906){
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
this.meta24906 = meta24906;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24905.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t24905.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24905.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24905.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__24908_25033 = self__.cs;
var G__24909_25034 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24908_25033,G__24909_25034) : cljs.core.reset_BANG_.call(null,G__24908_25033,G__24909_25034));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24905.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24905.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__24910 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__24910) : self__.solo_modes.call(null,G__24910));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__24911_25035 = self__.solo_mode;
var G__24912_25036 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24911_25035,G__24912_25036) : cljs.core.reset_BANG_.call(null,G__24911_25035,G__24912_25036));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24905.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24905.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24905.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24907){
var self__ = this;
var _24907__$1 = this;
return self__.meta24906;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24907,meta24906__$1){
var self__ = this;
var _24907__$1 = this;
return (new cljs.core.async.t24905(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24906__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24905.cljs$lang$type = true;

cljs.core.async.t24905.cljs$lang$ctorStr = "cljs.core.async/t24905";

cljs.core.async.t24905.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24905");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t24905 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24905(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24906){
return (new cljs.core.async.t24905(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24906));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t24905(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,25,cljs.core.constant$keyword$9,510,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,499,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
;
var c__11826__auto___25037 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11826__auto___25037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11827__auto__ = (function (){var switch__11746__auto__ = ((function (c__11826__auto___25037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24984){
var state_val_24985 = (state_24984[(1)]);
if((state_val_24985 === (7))){
var inst_24926 = (state_24984[(7)]);
var inst_24931 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24926);
var state_24984__$1 = state_24984;
var statearr_24986_25038 = state_24984__$1;
(statearr_24986_25038[(2)] = inst_24931);

(statearr_24986_25038[(1)] = (9));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24985 === (20))){
var inst_24941 = (state_24984[(8)]);
var state_24984__$1 = state_24984;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24984__$1,(23),out,inst_24941);
} else {
if((state_val_24985 === (1))){
var inst_24916 = (state_24984[(9)]);
var inst_24916__$1 = calc_state();
var inst_24917 = cljs.core.seq_QMARK_(inst_24916__$1);
var state_24984__$1 = (function (){var statearr_24987 = state_24984;
(statearr_24987[(9)] = inst_24916__$1);

return statearr_24987;
})();
if(inst_24917){
var statearr_24988_25039 = state_24984__$1;
(statearr_24988_25039[(1)] = (2));

} else {
var statearr_24989_25040 = state_24984__$1;
(statearr_24989_25040[(1)] = (3));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_24985 === (24))){
var inst_24934 = (state_24984[(10)]);
var inst_24926 = inst_24934;
var state_24984__$1 = (function (){var statearr_24990 = state_24984;
(statearr_24990[(7)] = inst_24926);

return statearr_24990;
})();
var statearr_24991_25041 = state_24984__$1;
(statearr_24991_25041[(2)] = null);

(statearr_24991_25041[(1)] = (5));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24985 === (4))){
var inst_24916 = (state_24984[(9)]);
var inst_24922 = (state_24984[(2)]);
var inst_24923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24922,cljs.core.constant$keyword$75);
var inst_24924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24922,cljs.core.constant$keyword$74);
var inst_24925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24922,cljs.core.constant$keyword$73);
var inst_24926 = inst_24916;
var state_24984__$1 = (function (){var statearr_24992 = state_24984;
(statearr_24992[(11)] = inst_24923);

(statearr_24992[(7)] = inst_24926);

(statearr_24992[(12)] = inst_24924);

(statearr_24992[(13)] = inst_24925);

return statearr_24992;
})();
var statearr_24993_25042 = state_24984__$1;
(statearr_24993_25042[(2)] = null);

(statearr_24993_25042[(1)] = (5));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24985 === (15))){
var state_24984__$1 = state_24984;
var statearr_24994_25043 = state_24984__$1;
(statearr_24994_25043[(2)] = null);

(statearr_24994_25043[(1)] = (16));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24985 === (21))){
var inst_24934 = (state_24984[(10)]);
var inst_24926 = inst_24934;
var state_24984__$1 = (function (){var statearr_24995 = state_24984;
(statearr_24995[(7)] = inst_24926);

return statearr_24995;
})();
var statearr_24996_25044 = state_24984__$1;
(statearr_24996_25044[(2)] = null);

(statearr_24996_25044[(1)] = (5));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24985 === (13))){
var inst_24980 = (state_24984[(2)]);
var state_24984__$1 = state_24984;
var statearr_24997_25045 = state_24984__$1;
(statearr_24997_25045[(2)] = inst_24980);

(statearr_24997_25045[(1)] = (6));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24985 === (22))){
var inst_24978 = (state_24984[(2)]);
var state_24984__$1 = state_24984;
var statearr_24998_25046 = state_24984__$1;
(statearr_24998_25046[(2)] = inst_24978);

(statearr_24998_25046[(1)] = (13));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24985 === (6))){
var inst_24982 = (state_24984[(2)]);
var state_24984__$1 = state_24984;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24984__$1,inst_24982);
} else {
if((state_val_24985 === (25))){
var state_24984__$1 = state_24984;
var statearr_24999_25047 = state_24984__$1;
(statearr_24999_25047[(2)] = null);

(statearr_24999_25047[(1)] = (26));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24985 === (17))){
var inst_24957 = (state_24984[(14)]);
var state_24984__$1 = state_24984;
var statearr_25000_25048 = state_24984__$1;
(statearr_25000_25048[(2)] = inst_24957);

(statearr_25000_25048[(1)] = (19));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24985 === (3))){
var inst_24916 = (state_24984[(9)]);
var state_24984__$1 = state_24984;
var statearr_25001_25049 = state_24984__$1;
(statearr_25001_25049[(2)] = inst_24916);

(statearr_25001_25049[(1)] = (4));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24985 === (12))){
var inst_24957 = (state_24984[(14)]);
var inst_24937 = (state_24984[(15)]);
var inst_24942 = (state_24984[(16)]);
var inst_24957__$1 = (function (){var G__25002 = inst_24942;
return (inst_24937.cljs$core$IFn$_invoke$arity$1 ? inst_24937.cljs$core$IFn$_invoke$arity$1(G__25002) : inst_24937.call(null,G__25002));
})();
var state_24984__$1 = (function (){var statearr_25003 = state_24984;
(statearr_25003[(14)] = inst_24957__$1);

return statearr_25003;
})();
if(cljs.core.truth_(inst_24957__$1)){
var statearr_25004_25050 = state_24984__$1;
(statearr_25004_25050[(1)] = (17));

} else {
var statearr_25005_25051 = state_24984__$1;
(statearr_25005_25051[(1)] = (18));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_24985 === (2))){
var inst_24916 = (state_24984[(9)]);
var inst_24919 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24916);
var state_24984__$1 = state_24984;
var statearr_25006_25052 = state_24984__$1;
(statearr_25006_25052[(2)] = inst_24919);

(statearr_25006_25052[(1)] = (4));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24985 === (23))){
var inst_24969 = (state_24984[(2)]);
var state_24984__$1 = state_24984;
if(cljs.core.truth_(inst_24969)){
var statearr_25007_25053 = state_24984__$1;
(statearr_25007_25053[(1)] = (24));

} else {
var statearr_25008_25054 = state_24984__$1;
(statearr_25008_25054[(1)] = (25));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_24985 === (19))){
var inst_24966 = (state_24984[(2)]);
var state_24984__$1 = state_24984;
if(cljs.core.truth_(inst_24966)){
var statearr_25009_25055 = state_24984__$1;
(statearr_25009_25055[(1)] = (20));

} else {
var statearr_25010_25056 = state_24984__$1;
(statearr_25010_25056[(1)] = (21));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_24985 === (11))){
var inst_24941 = (state_24984[(8)]);
var inst_24947 = (inst_24941 == null);
var state_24984__$1 = state_24984;
if(cljs.core.truth_(inst_24947)){
var statearr_25011_25057 = state_24984__$1;
(statearr_25011_25057[(1)] = (14));

} else {
var statearr_25012_25058 = state_24984__$1;
(statearr_25012_25058[(1)] = (15));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_24985 === (9))){
var inst_24934 = (state_24984[(10)]);
var inst_24934__$1 = (state_24984[(2)]);
var inst_24935 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24934__$1,cljs.core.constant$keyword$75);
var inst_24936 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24934__$1,cljs.core.constant$keyword$74);
var inst_24937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24934__$1,cljs.core.constant$keyword$73);
var state_24984__$1 = (function (){var statearr_25013 = state_24984;
(statearr_25013[(17)] = inst_24936);

(statearr_25013[(10)] = inst_24934__$1);

(statearr_25013[(15)] = inst_24937);

return statearr_25013;
})();
return cljs.core.async.ioc_alts_BANG_(state_24984__$1,(10),inst_24935);
} else {
if((state_val_24985 === (5))){
var inst_24926 = (state_24984[(7)]);
var inst_24929 = cljs.core.seq_QMARK_(inst_24926);
var state_24984__$1 = state_24984;
if(inst_24929){
var statearr_25014_25059 = state_24984__$1;
(statearr_25014_25059[(1)] = (7));

} else {
var statearr_25015_25060 = state_24984__$1;
(statearr_25015_25060[(1)] = (8));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_24985 === (14))){
var inst_24942 = (state_24984[(16)]);
var inst_24949 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_24942);
var state_24984__$1 = state_24984;
var statearr_25016_25061 = state_24984__$1;
(statearr_25016_25061[(2)] = inst_24949);

(statearr_25016_25061[(1)] = (16));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24985 === (26))){
var inst_24974 = (state_24984[(2)]);
var state_24984__$1 = state_24984;
var statearr_25017_25062 = state_24984__$1;
(statearr_25017_25062[(2)] = inst_24974);

(statearr_25017_25062[(1)] = (22));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24985 === (16))){
var inst_24952 = (state_24984[(2)]);
var inst_24953 = calc_state();
var inst_24926 = inst_24953;
var state_24984__$1 = (function (){var statearr_25018 = state_24984;
(statearr_25018[(7)] = inst_24926);

(statearr_25018[(18)] = inst_24952);

return statearr_25018;
})();
var statearr_25019_25063 = state_24984__$1;
(statearr_25019_25063[(2)] = null);

(statearr_25019_25063[(1)] = (5));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24985 === (10))){
var inst_24941 = (state_24984[(8)]);
var inst_24942 = (state_24984[(16)]);
var inst_24940 = (state_24984[(2)]);
var inst_24941__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24940,(0),null);
var inst_24942__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24940,(1),null);
var inst_24943 = (inst_24941__$1 == null);
var inst_24944 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24942__$1,change);
var inst_24945 = (inst_24943) || (inst_24944);
var state_24984__$1 = (function (){var statearr_25020 = state_24984;
(statearr_25020[(8)] = inst_24941__$1);

(statearr_25020[(16)] = inst_24942__$1);

return statearr_25020;
})();
if(cljs.core.truth_(inst_24945)){
var statearr_25021_25064 = state_24984__$1;
(statearr_25021_25064[(1)] = (11));

} else {
var statearr_25022_25065 = state_24984__$1;
(statearr_25022_25065[(1)] = (12));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_24985 === (18))){
var inst_24936 = (state_24984[(17)]);
var inst_24937 = (state_24984[(15)]);
var inst_24942 = (state_24984[(16)]);
var inst_24961 = cljs.core.empty_QMARK_(inst_24937);
var inst_24962 = (function (){var G__25023 = inst_24942;
return (inst_24936.cljs$core$IFn$_invoke$arity$1 ? inst_24936.cljs$core$IFn$_invoke$arity$1(G__25023) : inst_24936.call(null,G__25023));
})();
var inst_24963 = cljs.core.not(inst_24962);
var inst_24964 = (inst_24961) && (inst_24963);
var state_24984__$1 = state_24984;
var statearr_25024_25066 = state_24984__$1;
(statearr_25024_25066[(2)] = inst_24964);

(statearr_25024_25066[(1)] = (19));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24985 === (8))){
var inst_24926 = (state_24984[(7)]);
var state_24984__$1 = state_24984;
var statearr_25025_25067 = state_24984__$1;
(statearr_25025_25067[(2)] = inst_24926);

(statearr_25025_25067[(1)] = (9));


return cljs.core.constant$keyword$61;
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
});})(c__11826__auto___25037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__11746__auto__,c__11826__auto___25037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11747__auto__ = null;
var state_machine__11747__auto____0 = (function (){
var statearr_25029 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25029[(0)] = state_machine__11747__auto__);

(statearr_25029[(1)] = (1));

return statearr_25029;
});
var state_machine__11747__auto____1 = (function (state_24984){
while(true){
var ret_value__11748__auto__ = (function (){try{while(true){
var result__11749__auto__ = switch__11746__auto__(state_24984);
if(cljs.core.keyword_identical_QMARK_(result__11749__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11749__auto__;
}
break;
}
}catch (e25030){if((e25030 instanceof Object)){
var ex__11750__auto__ = e25030;
var statearr_25031_25068 = state_24984;
(statearr_25031_25068[(5)] = ex__11750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24984);

return cljs.core.constant$keyword$61;
} else {
throw e25030;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11748__auto__,cljs.core.constant$keyword$61)){
var G__25069 = state_24984;
state_24984 = G__25069;
continue;
} else {
return ret_value__11748__auto__;
}
break;
}
});
state_machine__11747__auto__ = function(state_24984){
switch(arguments.length){
case 0:
return state_machine__11747__auto____0.call(this);
case 1:
return state_machine__11747__auto____1.call(this,state_24984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11747__auto____0;
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11747__auto____1;
return state_machine__11747__auto__;
})()
;})(switch__11746__auto__,c__11826__auto___25037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11828__auto__ = (function (){var statearr_25032 = (function (){return (f__11827__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11827__auto__.cljs$core$IFn$_invoke$arity$0() : f__11827__auto__.call(null));
})();
(statearr_25032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11826__auto___25037);

return statearr_25032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11828__auto__);
});})(c__11826__auto___25037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj25071 = {};
return obj25071;
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
return (function (){var or__3630__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__25075 = x__4274__auto__;
return goog.typeOf(G__25075);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__25079 = x__4274__auto__;
return goog.typeOf(G__25079);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__25085 = x__4274__auto__;
return goog.typeOf(G__25085);
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
var mults = (function (){var G__25226 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25226) : cljs.core.atom.call(null,G__25226));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__3630__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__25228 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25228) : cljs.core.deref.call(null,G__25228));
})(),topic);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3630__auto__,mults){
return (function (p1__25088_SHARP_){
if(cljs.core.truth_((function (){var G__25229 = topic;
return (p1__25088_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25088_SHARP_.cljs$core$IFn$_invoke$arity$1(G__25229) : p1__25088_SHARP_.call(null,G__25229));
})())){
return p1__25088_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25088_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__25230 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__25230) : buf_fn.call(null,G__25230));
})())));
}
});})(or__3630__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t25231 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25231 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25232){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25232 = meta25232;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25231.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t25231.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__25234 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__25234) : self__.ensure_mult.call(null,G__25234));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t25231.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__25235 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25235) : cljs.core.deref.call(null,G__25235));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t25231.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25236 = self__.mults;
var G__25237 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25236,G__25237) : cljs.core.reset_BANG_.call(null,G__25236,G__25237));
});})(mults,ensure_mult))
;

cljs.core.async.t25231.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t25231.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25231.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t25231.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25233){
var self__ = this;
var _25233__$1 = this;
return self__.meta25232;
});})(mults,ensure_mult))
;

cljs.core.async.t25231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25233,meta25232__$1){
var self__ = this;
var _25233__$1 = this;
return (new cljs.core.async.t25231(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25232__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t25231.cljs$lang$type = true;

cljs.core.async.t25231.cljs$lang$ctorStr = "cljs.core.async/t25231";

cljs.core.async.t25231.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25231");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t25231 = ((function (mults,ensure_mult){
return (function __GT_t25231(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25232){
return (new cljs.core.async.t25231(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25232));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t25231(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,65,cljs.core.constant$keyword$9,603,cljs.core.constant$keyword$10,14,cljs.core.constant$keyword$11,591,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
;
var c__11826__auto___25360 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11826__auto___25360,mults,ensure_mult,p){
return (function (){
var f__11827__auto__ = (function (){var switch__11746__auto__ = ((function (c__11826__auto___25360,mults,ensure_mult,p){
return (function (state_25309){
var state_val_25310 = (state_25309[(1)]);
if((state_val_25310 === (7))){
var inst_25305 = (state_25309[(2)]);
var state_25309__$1 = state_25309;
var statearr_25311_25361 = state_25309__$1;
(statearr_25311_25361[(2)] = inst_25305);

(statearr_25311_25361[(1)] = (3));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25310 === (20))){
var state_25309__$1 = state_25309;
var statearr_25312_25362 = state_25309__$1;
(statearr_25312_25362[(2)] = null);

(statearr_25312_25362[(1)] = (21));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25310 === (1))){
var state_25309__$1 = state_25309;
var statearr_25313_25363 = state_25309__$1;
(statearr_25313_25363[(2)] = null);

(statearr_25313_25363[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25310 === (24))){
var inst_25288 = (state_25309[(7)]);
var inst_25297 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25288);
var state_25309__$1 = state_25309;
var statearr_25314_25364 = state_25309__$1;
(statearr_25314_25364[(2)] = inst_25297);

(statearr_25314_25364[(1)] = (25));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25310 === (4))){
var inst_25240 = (state_25309[(8)]);
var inst_25240__$1 = (state_25309[(2)]);
var inst_25241 = (inst_25240__$1 == null);
var state_25309__$1 = (function (){var statearr_25315 = state_25309;
(statearr_25315[(8)] = inst_25240__$1);

return statearr_25315;
})();
if(cljs.core.truth_(inst_25241)){
var statearr_25316_25365 = state_25309__$1;
(statearr_25316_25365[(1)] = (5));

} else {
var statearr_25317_25366 = state_25309__$1;
(statearr_25317_25366[(1)] = (6));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_25310 === (15))){
var inst_25282 = (state_25309[(2)]);
var state_25309__$1 = state_25309;
var statearr_25318_25367 = state_25309__$1;
(statearr_25318_25367[(2)] = inst_25282);

(statearr_25318_25367[(1)] = (12));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25310 === (21))){
var inst_25302 = (state_25309[(2)]);
var state_25309__$1 = (function (){var statearr_25319 = state_25309;
(statearr_25319[(9)] = inst_25302);

return statearr_25319;
})();
var statearr_25320_25368 = state_25309__$1;
(statearr_25320_25368[(2)] = null);

(statearr_25320_25368[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25310 === (13))){
var inst_25264 = (state_25309[(10)]);
var inst_25266 = cljs.core.chunked_seq_QMARK_(inst_25264);
var state_25309__$1 = state_25309;
if(inst_25266){
var statearr_25321_25369 = state_25309__$1;
(statearr_25321_25369[(1)] = (16));

} else {
var statearr_25322_25370 = state_25309__$1;
(statearr_25322_25370[(1)] = (17));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_25310 === (22))){
var inst_25294 = (state_25309[(2)]);
var state_25309__$1 = state_25309;
if(cljs.core.truth_(inst_25294)){
var statearr_25323_25371 = state_25309__$1;
(statearr_25323_25371[(1)] = (23));

} else {
var statearr_25324_25372 = state_25309__$1;
(statearr_25324_25372[(1)] = (24));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_25310 === (6))){
var inst_25290 = (state_25309[(11)]);
var inst_25288 = (state_25309[(7)]);
var inst_25240 = (state_25309[(8)]);
var inst_25288__$1 = (function (){var G__25325 = inst_25240;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__25325) : topic_fn.call(null,G__25325));
})();
var inst_25289 = (function (){var G__25326 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25326) : cljs.core.deref.call(null,G__25326));
})();
var inst_25290__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25289,inst_25288__$1);
var state_25309__$1 = (function (){var statearr_25327 = state_25309;
(statearr_25327[(11)] = inst_25290__$1);

(statearr_25327[(7)] = inst_25288__$1);

return statearr_25327;
})();
if(cljs.core.truth_(inst_25290__$1)){
var statearr_25328_25373 = state_25309__$1;
(statearr_25328_25373[(1)] = (19));

} else {
var statearr_25329_25374 = state_25309__$1;
(statearr_25329_25374[(1)] = (20));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_25310 === (25))){
var inst_25299 = (state_25309[(2)]);
var state_25309__$1 = state_25309;
var statearr_25330_25375 = state_25309__$1;
(statearr_25330_25375[(2)] = inst_25299);

(statearr_25330_25375[(1)] = (21));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25310 === (17))){
var inst_25264 = (state_25309[(10)]);
var inst_25273 = cljs.core.first(inst_25264);
var inst_25274 = cljs.core.async.muxch_STAR_(inst_25273);
var inst_25275 = cljs.core.async.close_BANG_(inst_25274);
var inst_25276 = cljs.core.next(inst_25264);
var inst_25250 = inst_25276;
var inst_25251 = null;
var inst_25252 = (0);
var inst_25253 = (0);
var state_25309__$1 = (function (){var statearr_25331 = state_25309;
(statearr_25331[(12)] = inst_25250);

(statearr_25331[(13)] = inst_25252);

(statearr_25331[(14)] = inst_25251);

(statearr_25331[(15)] = inst_25275);

(statearr_25331[(16)] = inst_25253);

return statearr_25331;
})();
var statearr_25332_25376 = state_25309__$1;
(statearr_25332_25376[(2)] = null);

(statearr_25332_25376[(1)] = (8));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25310 === (3))){
var inst_25307 = (state_25309[(2)]);
var state_25309__$1 = state_25309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25309__$1,inst_25307);
} else {
if((state_val_25310 === (12))){
var inst_25284 = (state_25309[(2)]);
var state_25309__$1 = state_25309;
var statearr_25333_25377 = state_25309__$1;
(statearr_25333_25377[(2)] = inst_25284);

(statearr_25333_25377[(1)] = (9));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25310 === (2))){
var state_25309__$1 = state_25309;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25309__$1,(4),ch);
} else {
if((state_val_25310 === (23))){
var state_25309__$1 = state_25309;
var statearr_25334_25378 = state_25309__$1;
(statearr_25334_25378[(2)] = null);

(statearr_25334_25378[(1)] = (25));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25310 === (19))){
var inst_25290 = (state_25309[(11)]);
var inst_25240 = (state_25309[(8)]);
var inst_25292 = cljs.core.async.muxch_STAR_(inst_25290);
var state_25309__$1 = state_25309;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25309__$1,(22),inst_25292,inst_25240);
} else {
if((state_val_25310 === (11))){
var inst_25264 = (state_25309[(10)]);
var inst_25250 = (state_25309[(12)]);
var inst_25264__$1 = cljs.core.seq(inst_25250);
var state_25309__$1 = (function (){var statearr_25335 = state_25309;
(statearr_25335[(10)] = inst_25264__$1);

return statearr_25335;
})();
if(inst_25264__$1){
var statearr_25336_25379 = state_25309__$1;
(statearr_25336_25379[(1)] = (13));

} else {
var statearr_25337_25380 = state_25309__$1;
(statearr_25337_25380[(1)] = (14));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_25310 === (9))){
var inst_25286 = (state_25309[(2)]);
var state_25309__$1 = state_25309;
var statearr_25338_25381 = state_25309__$1;
(statearr_25338_25381[(2)] = inst_25286);

(statearr_25338_25381[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25310 === (5))){
var inst_25247 = (function (){var G__25339 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25339) : cljs.core.deref.call(null,G__25339));
})();
var inst_25248 = cljs.core.vals(inst_25247);
var inst_25249 = cljs.core.seq(inst_25248);
var inst_25250 = inst_25249;
var inst_25251 = null;
var inst_25252 = (0);
var inst_25253 = (0);
var state_25309__$1 = (function (){var statearr_25340 = state_25309;
(statearr_25340[(12)] = inst_25250);

(statearr_25340[(13)] = inst_25252);

(statearr_25340[(14)] = inst_25251);

(statearr_25340[(16)] = inst_25253);

return statearr_25340;
})();
var statearr_25341_25382 = state_25309__$1;
(statearr_25341_25382[(2)] = null);

(statearr_25341_25382[(1)] = (8));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25310 === (14))){
var state_25309__$1 = state_25309;
var statearr_25345_25383 = state_25309__$1;
(statearr_25345_25383[(2)] = null);

(statearr_25345_25383[(1)] = (15));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25310 === (16))){
var inst_25264 = (state_25309[(10)]);
var inst_25268 = cljs.core.chunk_first(inst_25264);
var inst_25269 = cljs.core.chunk_rest(inst_25264);
var inst_25270 = cljs.core.count(inst_25268);
var inst_25250 = inst_25269;
var inst_25251 = inst_25268;
var inst_25252 = inst_25270;
var inst_25253 = (0);
var state_25309__$1 = (function (){var statearr_25346 = state_25309;
(statearr_25346[(12)] = inst_25250);

(statearr_25346[(13)] = inst_25252);

(statearr_25346[(14)] = inst_25251);

(statearr_25346[(16)] = inst_25253);

return statearr_25346;
})();
var statearr_25347_25384 = state_25309__$1;
(statearr_25347_25384[(2)] = null);

(statearr_25347_25384[(1)] = (8));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25310 === (10))){
var inst_25250 = (state_25309[(12)]);
var inst_25252 = (state_25309[(13)]);
var inst_25251 = (state_25309[(14)]);
var inst_25253 = (state_25309[(16)]);
var inst_25258 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25251,inst_25253);
var inst_25259 = cljs.core.async.muxch_STAR_(inst_25258);
var inst_25260 = cljs.core.async.close_BANG_(inst_25259);
var inst_25261 = (inst_25253 + (1));
var tmp25342 = inst_25250;
var tmp25343 = inst_25252;
var tmp25344 = inst_25251;
var inst_25250__$1 = tmp25342;
var inst_25251__$1 = tmp25344;
var inst_25252__$1 = tmp25343;
var inst_25253__$1 = inst_25261;
var state_25309__$1 = (function (){var statearr_25348 = state_25309;
(statearr_25348[(12)] = inst_25250__$1);

(statearr_25348[(17)] = inst_25260);

(statearr_25348[(13)] = inst_25252__$1);

(statearr_25348[(14)] = inst_25251__$1);

(statearr_25348[(16)] = inst_25253__$1);

return statearr_25348;
})();
var statearr_25349_25385 = state_25309__$1;
(statearr_25349_25385[(2)] = null);

(statearr_25349_25385[(1)] = (8));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25310 === (18))){
var inst_25279 = (state_25309[(2)]);
var state_25309__$1 = state_25309;
var statearr_25350_25386 = state_25309__$1;
(statearr_25350_25386[(2)] = inst_25279);

(statearr_25350_25386[(1)] = (15));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25310 === (8))){
var inst_25252 = (state_25309[(13)]);
var inst_25253 = (state_25309[(16)]);
var inst_25255 = (inst_25253 < inst_25252);
var inst_25256 = inst_25255;
var state_25309__$1 = state_25309;
if(cljs.core.truth_(inst_25256)){
var statearr_25351_25387 = state_25309__$1;
(statearr_25351_25387[(1)] = (10));

} else {
var statearr_25352_25388 = state_25309__$1;
(statearr_25352_25388[(1)] = (11));

}

return cljs.core.constant$keyword$61;
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
});})(c__11826__auto___25360,mults,ensure_mult,p))
;
return ((function (switch__11746__auto__,c__11826__auto___25360,mults,ensure_mult,p){
return (function() {
var state_machine__11747__auto__ = null;
var state_machine__11747__auto____0 = (function (){
var statearr_25356 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25356[(0)] = state_machine__11747__auto__);

(statearr_25356[(1)] = (1));

return statearr_25356;
});
var state_machine__11747__auto____1 = (function (state_25309){
while(true){
var ret_value__11748__auto__ = (function (){try{while(true){
var result__11749__auto__ = switch__11746__auto__(state_25309);
if(cljs.core.keyword_identical_QMARK_(result__11749__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11749__auto__;
}
break;
}
}catch (e25357){if((e25357 instanceof Object)){
var ex__11750__auto__ = e25357;
var statearr_25358_25389 = state_25309;
(statearr_25358_25389[(5)] = ex__11750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25309);

return cljs.core.constant$keyword$61;
} else {
throw e25357;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11748__auto__,cljs.core.constant$keyword$61)){
var G__25390 = state_25309;
state_25309 = G__25390;
continue;
} else {
return ret_value__11748__auto__;
}
break;
}
});
state_machine__11747__auto__ = function(state_25309){
switch(arguments.length){
case 0:
return state_machine__11747__auto____0.call(this);
case 1:
return state_machine__11747__auto____1.call(this,state_25309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11747__auto____0;
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11747__auto____1;
return state_machine__11747__auto__;
})()
;})(switch__11746__auto__,c__11826__auto___25360,mults,ensure_mult,p))
})();
var state__11828__auto__ = (function (){var statearr_25359 = (function (){return (f__11827__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11827__auto__.cljs$core$IFn$_invoke$arity$0() : f__11827__auto__.call(null));
})();
(statearr_25359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11826__auto___25360);

return statearr_25359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11828__auto__);
});})(c__11826__auto___25360,mults,ensure_mult,p))
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
var dctr = (function (){var G__25471 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25471) : cljs.core.atom.call(null,G__25471));
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
var c__11826__auto___25544 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11826__auto___25544,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11827__auto__ = (function (){var switch__11746__auto__ = ((function (c__11826__auto___25544,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25510){
var state_val_25511 = (state_25510[(1)]);
if((state_val_25511 === (7))){
var state_25510__$1 = state_25510;
var statearr_25512_25545 = state_25510__$1;
(statearr_25512_25545[(2)] = null);

(statearr_25512_25545[(1)] = (8));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25511 === (1))){
var state_25510__$1 = state_25510;
var statearr_25513_25546 = state_25510__$1;
(statearr_25513_25546[(2)] = null);

(statearr_25513_25546[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25511 === (4))){
var inst_25474 = (state_25510[(7)]);
var inst_25476 = (inst_25474 < cnt);
var state_25510__$1 = state_25510;
if(cljs.core.truth_(inst_25476)){
var statearr_25514_25547 = state_25510__$1;
(statearr_25514_25547[(1)] = (6));

} else {
var statearr_25515_25548 = state_25510__$1;
(statearr_25515_25548[(1)] = (7));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_25511 === (15))){
var inst_25506 = (state_25510[(2)]);
var state_25510__$1 = state_25510;
var statearr_25516_25549 = state_25510__$1;
(statearr_25516_25549[(2)] = inst_25506);

(statearr_25516_25549[(1)] = (3));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25511 === (13))){
var inst_25499 = cljs.core.async.close_BANG_(out);
var state_25510__$1 = state_25510;
var statearr_25517_25550 = state_25510__$1;
(statearr_25517_25550[(2)] = inst_25499);

(statearr_25517_25550[(1)] = (15));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25511 === (6))){
var state_25510__$1 = state_25510;
var statearr_25518_25551 = state_25510__$1;
(statearr_25518_25551[(2)] = null);

(statearr_25518_25551[(1)] = (11));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25511 === (3))){
var inst_25508 = (state_25510[(2)]);
var state_25510__$1 = state_25510;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25510__$1,inst_25508);
} else {
if((state_val_25511 === (12))){
var inst_25496 = (state_25510[(8)]);
var inst_25496__$1 = (state_25510[(2)]);
var inst_25497 = cljs.core.some(cljs.core.nil_QMARK_,inst_25496__$1);
var state_25510__$1 = (function (){var statearr_25519 = state_25510;
(statearr_25519[(8)] = inst_25496__$1);

return statearr_25519;
})();
if(cljs.core.truth_(inst_25497)){
var statearr_25520_25552 = state_25510__$1;
(statearr_25520_25552[(1)] = (13));

} else {
var statearr_25521_25553 = state_25510__$1;
(statearr_25521_25553[(1)] = (14));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_25511 === (2))){
var inst_25473 = (function (){var G__25522 = dctr;
var G__25523 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25522,G__25523) : cljs.core.reset_BANG_.call(null,G__25522,G__25523));
})();
var inst_25474 = (0);
var state_25510__$1 = (function (){var statearr_25524 = state_25510;
(statearr_25524[(7)] = inst_25474);

(statearr_25524[(9)] = inst_25473);

return statearr_25524;
})();
var statearr_25525_25554 = state_25510__$1;
(statearr_25525_25554[(2)] = null);

(statearr_25525_25554[(1)] = (4));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25511 === (11))){
var inst_25474 = (state_25510[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25510,(10),Object,null,(9));
var inst_25483 = (function (){var G__25526 = inst_25474;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__25526) : chs__$1.call(null,G__25526));
})();
var inst_25484 = (function (){var G__25527 = inst_25474;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__25527) : done.call(null,G__25527));
})();
var inst_25485 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_25483,inst_25484);
var state_25510__$1 = state_25510;
var statearr_25528_25555 = state_25510__$1;
(statearr_25528_25555[(2)] = inst_25485);


cljs.core.async.impl.ioc_helpers.process_exception(state_25510__$1);

return cljs.core.constant$keyword$61;
} else {
if((state_val_25511 === (9))){
var inst_25474 = (state_25510[(7)]);
var inst_25487 = (state_25510[(2)]);
var inst_25488 = (inst_25474 + (1));
var inst_25474__$1 = inst_25488;
var state_25510__$1 = (function (){var statearr_25529 = state_25510;
(statearr_25529[(7)] = inst_25474__$1);

(statearr_25529[(10)] = inst_25487);

return statearr_25529;
})();
var statearr_25530_25556 = state_25510__$1;
(statearr_25530_25556[(2)] = null);

(statearr_25530_25556[(1)] = (4));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25511 === (5))){
var inst_25494 = (state_25510[(2)]);
var state_25510__$1 = (function (){var statearr_25531 = state_25510;
(statearr_25531[(11)] = inst_25494);

return statearr_25531;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25510__$1,(12),dchan);
} else {
if((state_val_25511 === (14))){
var inst_25496 = (state_25510[(8)]);
var inst_25501 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_25496);
var state_25510__$1 = state_25510;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25510__$1,(16),out,inst_25501);
} else {
if((state_val_25511 === (16))){
var inst_25503 = (state_25510[(2)]);
var state_25510__$1 = (function (){var statearr_25532 = state_25510;
(statearr_25532[(12)] = inst_25503);

return statearr_25532;
})();
var statearr_25533_25557 = state_25510__$1;
(statearr_25533_25557[(2)] = null);

(statearr_25533_25557[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25511 === (10))){
var inst_25478 = (state_25510[(2)]);
var inst_25479 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_25510__$1 = (function (){var statearr_25534 = state_25510;
(statearr_25534[(13)] = inst_25478);

return statearr_25534;
})();
var statearr_25535_25558 = state_25510__$1;
(statearr_25535_25558[(2)] = inst_25479);


cljs.core.async.impl.ioc_helpers.process_exception(state_25510__$1);

return cljs.core.constant$keyword$61;
} else {
if((state_val_25511 === (8))){
var inst_25492 = (state_25510[(2)]);
var state_25510__$1 = state_25510;
var statearr_25536_25559 = state_25510__$1;
(statearr_25536_25559[(2)] = inst_25492);

(statearr_25536_25559[(1)] = (5));


return cljs.core.constant$keyword$61;
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
});})(c__11826__auto___25544,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__11746__auto__,c__11826__auto___25544,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11747__auto__ = null;
var state_machine__11747__auto____0 = (function (){
var statearr_25540 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25540[(0)] = state_machine__11747__auto__);

(statearr_25540[(1)] = (1));

return statearr_25540;
});
var state_machine__11747__auto____1 = (function (state_25510){
while(true){
var ret_value__11748__auto__ = (function (){try{while(true){
var result__11749__auto__ = switch__11746__auto__(state_25510);
if(cljs.core.keyword_identical_QMARK_(result__11749__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11749__auto__;
}
break;
}
}catch (e25541){if((e25541 instanceof Object)){
var ex__11750__auto__ = e25541;
var statearr_25542_25560 = state_25510;
(statearr_25542_25560[(5)] = ex__11750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25510);

return cljs.core.constant$keyword$61;
} else {
throw e25541;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11748__auto__,cljs.core.constant$keyword$61)){
var G__25561 = state_25510;
state_25510 = G__25561;
continue;
} else {
return ret_value__11748__auto__;
}
break;
}
});
state_machine__11747__auto__ = function(state_25510){
switch(arguments.length){
case 0:
return state_machine__11747__auto____0.call(this);
case 1:
return state_machine__11747__auto____1.call(this,state_25510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11747__auto____0;
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11747__auto____1;
return state_machine__11747__auto__;
})()
;})(switch__11746__auto__,c__11826__auto___25544,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11828__auto__ = (function (){var statearr_25543 = (function (){return (f__11827__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11827__auto__.cljs$core$IFn$_invoke$arity$0() : f__11827__auto__.call(null));
})();
(statearr_25543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11826__auto___25544);

return statearr_25543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11828__auto__);
});})(c__11826__auto___25544,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__11826__auto___25671 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11826__auto___25671,out){
return (function (){
var f__11827__auto__ = (function (){var switch__11746__auto__ = ((function (c__11826__auto___25671,out){
return (function (state_25647){
var state_val_25648 = (state_25647[(1)]);
if((state_val_25648 === (7))){
var inst_25626 = (state_25647[(7)]);
var inst_25627 = (state_25647[(8)]);
var inst_25626__$1 = (state_25647[(2)]);
var inst_25627__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25626__$1,(0),null);
var inst_25628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25626__$1,(1),null);
var inst_25629 = (inst_25627__$1 == null);
var state_25647__$1 = (function (){var statearr_25649 = state_25647;
(statearr_25649[(9)] = inst_25628);

(statearr_25649[(7)] = inst_25626__$1);

(statearr_25649[(8)] = inst_25627__$1);

return statearr_25649;
})();
if(cljs.core.truth_(inst_25629)){
var statearr_25650_25672 = state_25647__$1;
(statearr_25650_25672[(1)] = (8));

} else {
var statearr_25651_25673 = state_25647__$1;
(statearr_25651_25673[(1)] = (9));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_25648 === (1))){
var inst_25618 = cljs.core.vec(chs);
var inst_25619 = inst_25618;
var state_25647__$1 = (function (){var statearr_25652 = state_25647;
(statearr_25652[(10)] = inst_25619);

return statearr_25652;
})();
var statearr_25653_25674 = state_25647__$1;
(statearr_25653_25674[(2)] = null);

(statearr_25653_25674[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25648 === (4))){
var inst_25619 = (state_25647[(10)]);
var state_25647__$1 = state_25647;
return cljs.core.async.ioc_alts_BANG_(state_25647__$1,(7),inst_25619);
} else {
if((state_val_25648 === (6))){
var inst_25643 = (state_25647[(2)]);
var state_25647__$1 = state_25647;
var statearr_25654_25675 = state_25647__$1;
(statearr_25654_25675[(2)] = inst_25643);

(statearr_25654_25675[(1)] = (3));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25648 === (3))){
var inst_25645 = (state_25647[(2)]);
var state_25647__$1 = state_25647;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25647__$1,inst_25645);
} else {
if((state_val_25648 === (2))){
var inst_25619 = (state_25647[(10)]);
var inst_25621 = cljs.core.count(inst_25619);
var inst_25622 = (inst_25621 > (0));
var state_25647__$1 = state_25647;
if(cljs.core.truth_(inst_25622)){
var statearr_25656_25676 = state_25647__$1;
(statearr_25656_25676[(1)] = (4));

} else {
var statearr_25657_25677 = state_25647__$1;
(statearr_25657_25677[(1)] = (5));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_25648 === (11))){
var inst_25619 = (state_25647[(10)]);
var inst_25636 = (state_25647[(2)]);
var tmp25655 = inst_25619;
var inst_25619__$1 = tmp25655;
var state_25647__$1 = (function (){var statearr_25658 = state_25647;
(statearr_25658[(10)] = inst_25619__$1);

(statearr_25658[(11)] = inst_25636);

return statearr_25658;
})();
var statearr_25659_25678 = state_25647__$1;
(statearr_25659_25678[(2)] = null);

(statearr_25659_25678[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25648 === (9))){
var inst_25627 = (state_25647[(8)]);
var state_25647__$1 = state_25647;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25647__$1,(11),out,inst_25627);
} else {
if((state_val_25648 === (5))){
var inst_25641 = cljs.core.async.close_BANG_(out);
var state_25647__$1 = state_25647;
var statearr_25660_25679 = state_25647__$1;
(statearr_25660_25679[(2)] = inst_25641);

(statearr_25660_25679[(1)] = (6));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25648 === (10))){
var inst_25639 = (state_25647[(2)]);
var state_25647__$1 = state_25647;
var statearr_25661_25680 = state_25647__$1;
(statearr_25661_25680[(2)] = inst_25639);

(statearr_25661_25680[(1)] = (6));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25648 === (8))){
var inst_25628 = (state_25647[(9)]);
var inst_25626 = (state_25647[(7)]);
var inst_25619 = (state_25647[(10)]);
var inst_25627 = (state_25647[(8)]);
var inst_25631 = (function (){var c = inst_25628;
var v = inst_25627;
var vec__25624 = inst_25626;
var cs = inst_25619;
return ((function (c,v,vec__25624,cs,inst_25628,inst_25626,inst_25619,inst_25627,state_val_25648,c__11826__auto___25671,out){
return (function (p1__25562_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__25562_SHARP_);
});
;})(c,v,vec__25624,cs,inst_25628,inst_25626,inst_25619,inst_25627,state_val_25648,c__11826__auto___25671,out))
})();
var inst_25632 = cljs.core.filterv(inst_25631,inst_25619);
var inst_25619__$1 = inst_25632;
var state_25647__$1 = (function (){var statearr_25662 = state_25647;
(statearr_25662[(10)] = inst_25619__$1);

return statearr_25662;
})();
var statearr_25663_25681 = state_25647__$1;
(statearr_25663_25681[(2)] = null);

(statearr_25663_25681[(1)] = (2));


return cljs.core.constant$keyword$61;
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
});})(c__11826__auto___25671,out))
;
return ((function (switch__11746__auto__,c__11826__auto___25671,out){
return (function() {
var state_machine__11747__auto__ = null;
var state_machine__11747__auto____0 = (function (){
var statearr_25667 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25667[(0)] = state_machine__11747__auto__);

(statearr_25667[(1)] = (1));

return statearr_25667;
});
var state_machine__11747__auto____1 = (function (state_25647){
while(true){
var ret_value__11748__auto__ = (function (){try{while(true){
var result__11749__auto__ = switch__11746__auto__(state_25647);
if(cljs.core.keyword_identical_QMARK_(result__11749__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11749__auto__;
}
break;
}
}catch (e25668){if((e25668 instanceof Object)){
var ex__11750__auto__ = e25668;
var statearr_25669_25682 = state_25647;
(statearr_25669_25682[(5)] = ex__11750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25647);

return cljs.core.constant$keyword$61;
} else {
throw e25668;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11748__auto__,cljs.core.constant$keyword$61)){
var G__25683 = state_25647;
state_25647 = G__25683;
continue;
} else {
return ret_value__11748__auto__;
}
break;
}
});
state_machine__11747__auto__ = function(state_25647){
switch(arguments.length){
case 0:
return state_machine__11747__auto____0.call(this);
case 1:
return state_machine__11747__auto____1.call(this,state_25647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11747__auto____0;
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11747__auto____1;
return state_machine__11747__auto__;
})()
;})(switch__11746__auto__,c__11826__auto___25671,out))
})();
var state__11828__auto__ = (function (){var statearr_25670 = (function (){return (f__11827__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11827__auto__.cljs$core$IFn$_invoke$arity$0() : f__11827__auto__.call(null));
})();
(statearr_25670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11826__auto___25671);

return statearr_25670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11828__auto__);
});})(c__11826__auto___25671,out))
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
var c__11826__auto___25779 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11826__auto___25779,out){
return (function (){
var f__11827__auto__ = (function (){var switch__11746__auto__ = ((function (c__11826__auto___25779,out){
return (function (state_25756){
var state_val_25757 = (state_25756[(1)]);
if((state_val_25757 === (7))){
var inst_25738 = (state_25756[(7)]);
var inst_25738__$1 = (state_25756[(2)]);
var inst_25739 = (inst_25738__$1 == null);
var inst_25740 = cljs.core.not(inst_25739);
var state_25756__$1 = (function (){var statearr_25758 = state_25756;
(statearr_25758[(7)] = inst_25738__$1);

return statearr_25758;
})();
if(inst_25740){
var statearr_25759_25780 = state_25756__$1;
(statearr_25759_25780[(1)] = (8));

} else {
var statearr_25760_25781 = state_25756__$1;
(statearr_25760_25781[(1)] = (9));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_25757 === (1))){
var inst_25733 = (0);
var state_25756__$1 = (function (){var statearr_25761 = state_25756;
(statearr_25761[(8)] = inst_25733);

return statearr_25761;
})();
var statearr_25762_25782 = state_25756__$1;
(statearr_25762_25782[(2)] = null);

(statearr_25762_25782[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25757 === (4))){
var state_25756__$1 = state_25756;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25756__$1,(7),ch);
} else {
if((state_val_25757 === (6))){
var inst_25751 = (state_25756[(2)]);
var state_25756__$1 = state_25756;
var statearr_25763_25783 = state_25756__$1;
(statearr_25763_25783[(2)] = inst_25751);

(statearr_25763_25783[(1)] = (3));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25757 === (3))){
var inst_25753 = (state_25756[(2)]);
var inst_25754 = cljs.core.async.close_BANG_(out);
var state_25756__$1 = (function (){var statearr_25764 = state_25756;
(statearr_25764[(9)] = inst_25753);

return statearr_25764;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25756__$1,inst_25754);
} else {
if((state_val_25757 === (2))){
var inst_25733 = (state_25756[(8)]);
var inst_25735 = (inst_25733 < n);
var state_25756__$1 = state_25756;
if(cljs.core.truth_(inst_25735)){
var statearr_25765_25784 = state_25756__$1;
(statearr_25765_25784[(1)] = (4));

} else {
var statearr_25766_25785 = state_25756__$1;
(statearr_25766_25785[(1)] = (5));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_25757 === (11))){
var inst_25733 = (state_25756[(8)]);
var inst_25743 = (state_25756[(2)]);
var inst_25744 = (inst_25733 + (1));
var inst_25733__$1 = inst_25744;
var state_25756__$1 = (function (){var statearr_25767 = state_25756;
(statearr_25767[(10)] = inst_25743);

(statearr_25767[(8)] = inst_25733__$1);

return statearr_25767;
})();
var statearr_25768_25786 = state_25756__$1;
(statearr_25768_25786[(2)] = null);

(statearr_25768_25786[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25757 === (9))){
var state_25756__$1 = state_25756;
var statearr_25769_25787 = state_25756__$1;
(statearr_25769_25787[(2)] = null);

(statearr_25769_25787[(1)] = (10));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25757 === (5))){
var state_25756__$1 = state_25756;
var statearr_25770_25788 = state_25756__$1;
(statearr_25770_25788[(2)] = null);

(statearr_25770_25788[(1)] = (6));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25757 === (10))){
var inst_25748 = (state_25756[(2)]);
var state_25756__$1 = state_25756;
var statearr_25771_25789 = state_25756__$1;
(statearr_25771_25789[(2)] = inst_25748);

(statearr_25771_25789[(1)] = (6));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25757 === (8))){
var inst_25738 = (state_25756[(7)]);
var state_25756__$1 = state_25756;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25756__$1,(11),out,inst_25738);
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
});})(c__11826__auto___25779,out))
;
return ((function (switch__11746__auto__,c__11826__auto___25779,out){
return (function() {
var state_machine__11747__auto__ = null;
var state_machine__11747__auto____0 = (function (){
var statearr_25775 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25775[(0)] = state_machine__11747__auto__);

(statearr_25775[(1)] = (1));

return statearr_25775;
});
var state_machine__11747__auto____1 = (function (state_25756){
while(true){
var ret_value__11748__auto__ = (function (){try{while(true){
var result__11749__auto__ = switch__11746__auto__(state_25756);
if(cljs.core.keyword_identical_QMARK_(result__11749__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11749__auto__;
}
break;
}
}catch (e25776){if((e25776 instanceof Object)){
var ex__11750__auto__ = e25776;
var statearr_25777_25790 = state_25756;
(statearr_25777_25790[(5)] = ex__11750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25756);

return cljs.core.constant$keyword$61;
} else {
throw e25776;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11748__auto__,cljs.core.constant$keyword$61)){
var G__25791 = state_25756;
state_25756 = G__25791;
continue;
} else {
return ret_value__11748__auto__;
}
break;
}
});
state_machine__11747__auto__ = function(state_25756){
switch(arguments.length){
case 0:
return state_machine__11747__auto____0.call(this);
case 1:
return state_machine__11747__auto____1.call(this,state_25756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11747__auto____0;
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11747__auto____1;
return state_machine__11747__auto__;
})()
;})(switch__11746__auto__,c__11826__auto___25779,out))
})();
var state__11828__auto__ = (function (){var statearr_25778 = (function (){return (f__11827__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11827__auto__.cljs$core$IFn$_invoke$arity$0() : f__11827__auto__.call(null));
})();
(statearr_25778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11826__auto___25779);

return statearr_25778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11828__auto__);
});})(c__11826__auto___25779,out))
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
if(typeof cljs.core.async.t25804 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25804 = (function (ch,f,map_LT_,meta25805){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25805 = meta25805;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25804.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25804.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t25804.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25804.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t25807 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25807 = (function (fn1,_,meta25805,map_LT_,f,ch,meta25808){
this.fn1 = fn1;
this._ = _;
this.meta25805 = meta25805;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25808 = meta25808;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25807.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25807.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t25807.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25792_SHARP_){
var G__25810 = (((p1__25792_SHARP_ == null))?null:(function (){var G__25811 = p1__25792_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__25811) : self__.f.call(null,G__25811));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__25810) : f1.call(null,G__25810));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t25807.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25809){
var self__ = this;
var _25809__$1 = this;
return self__.meta25808;
});})(___$1))
;

cljs.core.async.t25807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25809,meta25808__$1){
var self__ = this;
var _25809__$1 = this;
return (new cljs.core.async.t25807(self__.fn1,self__._,self__.meta25805,self__.map_LT_,self__.f,self__.ch,meta25808__$1));
});})(___$1))
;

cljs.core.async.t25807.cljs$lang$type = true;

cljs.core.async.t25807.cljs$lang$ctorStr = "cljs.core.async/t25807";

cljs.core.async.t25807.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25807");
});})(___$1))
;

cljs.core.async.__GT_t25807 = ((function (___$1){
return (function __GT_t25807(fn1__$1,___$2,meta25805__$1,map_LT___$1,f__$1,ch__$1,meta25808){
return (new cljs.core.async.t25807(fn1__$1,___$2,meta25805__$1,map_LT___$1,f__$1,ch__$1,meta25808));
});})(___$1))
;

}

return (new cljs.core.async.t25807(fn1,___$1,self__.meta25805,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,737,cljs.core.constant$keyword$10,10,cljs.core.constant$keyword$11,731,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3618__auto__ = ret;
if(cljs.core.truth_(and__3618__auto__)){
return !(((function (){var G__25812 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25812) : cljs.core.deref.call(null,G__25812));
})() == null));
} else {
return and__3618__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__25813 = (function (){var G__25814 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25814) : cljs.core.deref.call(null,G__25814));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__25813) : self__.f.call(null,G__25813));
})());
} else {
return ret;
}
});

cljs.core.async.t25804.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25804.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t25804.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t25804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25806){
var self__ = this;
var _25806__$1 = this;
return self__.meta25805;
});

cljs.core.async.t25804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25806,meta25805__$1){
var self__ = this;
var _25806__$1 = this;
return (new cljs.core.async.t25804(self__.ch,self__.f,self__.map_LT_,meta25805__$1));
});

cljs.core.async.t25804.cljs$lang$type = true;

cljs.core.async.t25804.cljs$lang$ctorStr = "cljs.core.async/t25804";

cljs.core.async.t25804.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25804");
});

cljs.core.async.__GT_t25804 = (function __GT_t25804(ch__$1,f__$1,map_LT___$1,meta25805){
return (new cljs.core.async.t25804(ch__$1,f__$1,map_LT___$1,meta25805));
});

}

return (new cljs.core.async.t25804(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,743,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,722,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t25819 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25819 = (function (ch,f,map_GT_,meta25820){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25820 = meta25820;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25819.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25819.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__25822 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__25822) : self__.f.call(null,G__25822));
})(),fn1);
});

cljs.core.async.t25819.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25819.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t25819.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25819.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t25819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25821){
var self__ = this;
var _25821__$1 = this;
return self__.meta25820;
});

cljs.core.async.t25819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25821,meta25820__$1){
var self__ = this;
var _25821__$1 = this;
return (new cljs.core.async.t25819(self__.ch,self__.f,self__.map_GT_,meta25820__$1));
});

cljs.core.async.t25819.cljs$lang$type = true;

cljs.core.async.t25819.cljs$lang$ctorStr = "cljs.core.async/t25819";

cljs.core.async.t25819.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25819");
});

cljs.core.async.__GT_t25819 = (function __GT_t25819(ch__$1,f__$1,map_GT___$1,meta25820){
return (new cljs.core.async.t25819(ch__$1,f__$1,map_GT___$1,meta25820));
});

}

return (new cljs.core.async.t25819(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,34,cljs.core.constant$keyword$9,757,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,748,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t25827 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25827 = (function (ch,p,filter_GT_,meta25828){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25828 = meta25828;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25827.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25827.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__25830 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__25830) : self__.p.call(null,G__25830));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t25827.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25827.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t25827.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25827.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t25827.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t25827.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25829){
var self__ = this;
var _25829__$1 = this;
return self__.meta25828;
});

cljs.core.async.t25827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25829,meta25828__$1){
var self__ = this;
var _25829__$1 = this;
return (new cljs.core.async.t25827(self__.ch,self__.p,self__.filter_GT_,meta25828__$1));
});

cljs.core.async.t25827.cljs$lang$type = true;

cljs.core.async.t25827.cljs$lang$ctorStr = "cljs.core.async/t25827";

cljs.core.async.t25827.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25827");
});

cljs.core.async.__GT_t25827 = (function __GT_t25827(ch__$1,p__$1,filter_GT___$1,meta25828){
return (new cljs.core.async.t25827(ch__$1,p__$1,filter_GT___$1,meta25828));
});

}

return (new cljs.core.async.t25827(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,774,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,762,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
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
var c__11826__auto___25918 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11826__auto___25918,out){
return (function (){
var f__11827__auto__ = (function (){var switch__11746__auto__ = ((function (c__11826__auto___25918,out){
return (function (state_25896){
var state_val_25897 = (state_25896[(1)]);
if((state_val_25897 === (7))){
var inst_25892 = (state_25896[(2)]);
var state_25896__$1 = state_25896;
var statearr_25898_25919 = state_25896__$1;
(statearr_25898_25919[(2)] = inst_25892);

(statearr_25898_25919[(1)] = (3));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25897 === (1))){
var state_25896__$1 = state_25896;
var statearr_25899_25920 = state_25896__$1;
(statearr_25899_25920[(2)] = null);

(statearr_25899_25920[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25897 === (4))){
var inst_25878 = (state_25896[(7)]);
var inst_25878__$1 = (state_25896[(2)]);
var inst_25879 = (inst_25878__$1 == null);
var state_25896__$1 = (function (){var statearr_25900 = state_25896;
(statearr_25900[(7)] = inst_25878__$1);

return statearr_25900;
})();
if(cljs.core.truth_(inst_25879)){
var statearr_25901_25921 = state_25896__$1;
(statearr_25901_25921[(1)] = (5));

} else {
var statearr_25902_25922 = state_25896__$1;
(statearr_25902_25922[(1)] = (6));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_25897 === (6))){
var inst_25878 = (state_25896[(7)]);
var inst_25883 = (function (){var G__25903 = inst_25878;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__25903) : p.call(null,G__25903));
})();
var state_25896__$1 = state_25896;
if(cljs.core.truth_(inst_25883)){
var statearr_25904_25923 = state_25896__$1;
(statearr_25904_25923[(1)] = (8));

} else {
var statearr_25905_25924 = state_25896__$1;
(statearr_25905_25924[(1)] = (9));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_25897 === (3))){
var inst_25894 = (state_25896[(2)]);
var state_25896__$1 = state_25896;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25896__$1,inst_25894);
} else {
if((state_val_25897 === (2))){
var state_25896__$1 = state_25896;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25896__$1,(4),ch);
} else {
if((state_val_25897 === (11))){
var inst_25886 = (state_25896[(2)]);
var state_25896__$1 = state_25896;
var statearr_25906_25925 = state_25896__$1;
(statearr_25906_25925[(2)] = inst_25886);

(statearr_25906_25925[(1)] = (10));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25897 === (9))){
var state_25896__$1 = state_25896;
var statearr_25907_25926 = state_25896__$1;
(statearr_25907_25926[(2)] = null);

(statearr_25907_25926[(1)] = (10));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25897 === (5))){
var inst_25881 = cljs.core.async.close_BANG_(out);
var state_25896__$1 = state_25896;
var statearr_25908_25927 = state_25896__$1;
(statearr_25908_25927[(2)] = inst_25881);

(statearr_25908_25927[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25897 === (10))){
var inst_25889 = (state_25896[(2)]);
var state_25896__$1 = (function (){var statearr_25909 = state_25896;
(statearr_25909[(8)] = inst_25889);

return statearr_25909;
})();
var statearr_25910_25928 = state_25896__$1;
(statearr_25910_25928[(2)] = null);

(statearr_25910_25928[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25897 === (8))){
var inst_25878 = (state_25896[(7)]);
var state_25896__$1 = state_25896;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25896__$1,(11),out,inst_25878);
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
});})(c__11826__auto___25918,out))
;
return ((function (switch__11746__auto__,c__11826__auto___25918,out){
return (function() {
var state_machine__11747__auto__ = null;
var state_machine__11747__auto____0 = (function (){
var statearr_25914 = [null,null,null,null,null,null,null,null,null];
(statearr_25914[(0)] = state_machine__11747__auto__);

(statearr_25914[(1)] = (1));

return statearr_25914;
});
var state_machine__11747__auto____1 = (function (state_25896){
while(true){
var ret_value__11748__auto__ = (function (){try{while(true){
var result__11749__auto__ = switch__11746__auto__(state_25896);
if(cljs.core.keyword_identical_QMARK_(result__11749__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11749__auto__;
}
break;
}
}catch (e25915){if((e25915 instanceof Object)){
var ex__11750__auto__ = e25915;
var statearr_25916_25929 = state_25896;
(statearr_25916_25929[(5)] = ex__11750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25896);

return cljs.core.constant$keyword$61;
} else {
throw e25915;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11748__auto__,cljs.core.constant$keyword$61)){
var G__25930 = state_25896;
state_25896 = G__25930;
continue;
} else {
return ret_value__11748__auto__;
}
break;
}
});
state_machine__11747__auto__ = function(state_25896){
switch(arguments.length){
case 0:
return state_machine__11747__auto____0.call(this);
case 1:
return state_machine__11747__auto____1.call(this,state_25896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11747__auto____0;
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11747__auto____1;
return state_machine__11747__auto__;
})()
;})(switch__11746__auto__,c__11826__auto___25918,out))
})();
var state__11828__auto__ = (function (){var statearr_25917 = (function (){return (f__11827__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11827__auto__.cljs$core$IFn$_invoke$arity$0() : f__11827__auto__.call(null));
})();
(statearr_25917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11826__auto___25918);

return statearr_25917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11828__auto__);
});})(c__11826__auto___25918,out))
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
var c__11826__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11826__auto__){
return (function (){
var f__11827__auto__ = (function (){var switch__11746__auto__ = ((function (c__11826__auto__){
return (function (state_26100){
var state_val_26101 = (state_26100[(1)]);
if((state_val_26101 === (7))){
var inst_26096 = (state_26100[(2)]);
var state_26100__$1 = state_26100;
var statearr_26102_26144 = state_26100__$1;
(statearr_26102_26144[(2)] = inst_26096);

(statearr_26102_26144[(1)] = (3));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26101 === (20))){
var inst_26066 = (state_26100[(7)]);
var inst_26077 = (state_26100[(2)]);
var inst_26078 = cljs.core.next(inst_26066);
var inst_26052 = inst_26078;
var inst_26053 = null;
var inst_26054 = (0);
var inst_26055 = (0);
var state_26100__$1 = (function (){var statearr_26103 = state_26100;
(statearr_26103[(8)] = inst_26054);

(statearr_26103[(9)] = inst_26053);

(statearr_26103[(10)] = inst_26077);

(statearr_26103[(11)] = inst_26052);

(statearr_26103[(12)] = inst_26055);

return statearr_26103;
})();
var statearr_26104_26145 = state_26100__$1;
(statearr_26104_26145[(2)] = null);

(statearr_26104_26145[(1)] = (8));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26101 === (1))){
var state_26100__$1 = state_26100;
var statearr_26105_26146 = state_26100__$1;
(statearr_26105_26146[(2)] = null);

(statearr_26105_26146[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26101 === (4))){
var inst_26041 = (state_26100[(13)]);
var inst_26041__$1 = (state_26100[(2)]);
var inst_26042 = (inst_26041__$1 == null);
var state_26100__$1 = (function (){var statearr_26106 = state_26100;
(statearr_26106[(13)] = inst_26041__$1);

return statearr_26106;
})();
if(cljs.core.truth_(inst_26042)){
var statearr_26107_26147 = state_26100__$1;
(statearr_26107_26147[(1)] = (5));

} else {
var statearr_26108_26148 = state_26100__$1;
(statearr_26108_26148[(1)] = (6));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_26101 === (15))){
var state_26100__$1 = state_26100;
var statearr_26112_26149 = state_26100__$1;
(statearr_26112_26149[(2)] = null);

(statearr_26112_26149[(1)] = (16));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26101 === (21))){
var state_26100__$1 = state_26100;
var statearr_26113_26150 = state_26100__$1;
(statearr_26113_26150[(2)] = null);

(statearr_26113_26150[(1)] = (23));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26101 === (13))){
var inst_26054 = (state_26100[(8)]);
var inst_26053 = (state_26100[(9)]);
var inst_26052 = (state_26100[(11)]);
var inst_26055 = (state_26100[(12)]);
var inst_26062 = (state_26100[(2)]);
var inst_26063 = (inst_26055 + (1));
var tmp26109 = inst_26054;
var tmp26110 = inst_26053;
var tmp26111 = inst_26052;
var inst_26052__$1 = tmp26111;
var inst_26053__$1 = tmp26110;
var inst_26054__$1 = tmp26109;
var inst_26055__$1 = inst_26063;
var state_26100__$1 = (function (){var statearr_26114 = state_26100;
(statearr_26114[(8)] = inst_26054__$1);

(statearr_26114[(9)] = inst_26053__$1);

(statearr_26114[(14)] = inst_26062);

(statearr_26114[(11)] = inst_26052__$1);

(statearr_26114[(12)] = inst_26055__$1);

return statearr_26114;
})();
var statearr_26115_26151 = state_26100__$1;
(statearr_26115_26151[(2)] = null);

(statearr_26115_26151[(1)] = (8));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26101 === (22))){
var state_26100__$1 = state_26100;
var statearr_26116_26152 = state_26100__$1;
(statearr_26116_26152[(2)] = null);

(statearr_26116_26152[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26101 === (6))){
var inst_26041 = (state_26100[(13)]);
var inst_26050 = (function (){var G__26117 = inst_26041;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26117) : f.call(null,G__26117));
})();
var inst_26051 = cljs.core.seq(inst_26050);
var inst_26052 = inst_26051;
var inst_26053 = null;
var inst_26054 = (0);
var inst_26055 = (0);
var state_26100__$1 = (function (){var statearr_26118 = state_26100;
(statearr_26118[(8)] = inst_26054);

(statearr_26118[(9)] = inst_26053);

(statearr_26118[(11)] = inst_26052);

(statearr_26118[(12)] = inst_26055);

return statearr_26118;
})();
var statearr_26119_26153 = state_26100__$1;
(statearr_26119_26153[(2)] = null);

(statearr_26119_26153[(1)] = (8));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26101 === (17))){
var inst_26066 = (state_26100[(7)]);
var inst_26070 = cljs.core.chunk_first(inst_26066);
var inst_26071 = cljs.core.chunk_rest(inst_26066);
var inst_26072 = cljs.core.count(inst_26070);
var inst_26052 = inst_26071;
var inst_26053 = inst_26070;
var inst_26054 = inst_26072;
var inst_26055 = (0);
var state_26100__$1 = (function (){var statearr_26120 = state_26100;
(statearr_26120[(8)] = inst_26054);

(statearr_26120[(9)] = inst_26053);

(statearr_26120[(11)] = inst_26052);

(statearr_26120[(12)] = inst_26055);

return statearr_26120;
})();
var statearr_26121_26154 = state_26100__$1;
(statearr_26121_26154[(2)] = null);

(statearr_26121_26154[(1)] = (8));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26101 === (3))){
var inst_26098 = (state_26100[(2)]);
var state_26100__$1 = state_26100;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26100__$1,inst_26098);
} else {
if((state_val_26101 === (12))){
var inst_26086 = (state_26100[(2)]);
var state_26100__$1 = state_26100;
var statearr_26122_26155 = state_26100__$1;
(statearr_26122_26155[(2)] = inst_26086);

(statearr_26122_26155[(1)] = (9));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26101 === (2))){
var state_26100__$1 = state_26100;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26100__$1,(4),in$);
} else {
if((state_val_26101 === (23))){
var inst_26094 = (state_26100[(2)]);
var state_26100__$1 = state_26100;
var statearr_26123_26156 = state_26100__$1;
(statearr_26123_26156[(2)] = inst_26094);

(statearr_26123_26156[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26101 === (19))){
var inst_26081 = (state_26100[(2)]);
var state_26100__$1 = state_26100;
var statearr_26124_26157 = state_26100__$1;
(statearr_26124_26157[(2)] = inst_26081);

(statearr_26124_26157[(1)] = (16));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26101 === (11))){
var inst_26066 = (state_26100[(7)]);
var inst_26052 = (state_26100[(11)]);
var inst_26066__$1 = cljs.core.seq(inst_26052);
var state_26100__$1 = (function (){var statearr_26125 = state_26100;
(statearr_26125[(7)] = inst_26066__$1);

return statearr_26125;
})();
if(inst_26066__$1){
var statearr_26126_26158 = state_26100__$1;
(statearr_26126_26158[(1)] = (14));

} else {
var statearr_26127_26159 = state_26100__$1;
(statearr_26127_26159[(1)] = (15));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_26101 === (9))){
var inst_26088 = (state_26100[(2)]);
var inst_26089 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_26100__$1 = (function (){var statearr_26128 = state_26100;
(statearr_26128[(15)] = inst_26088);

return statearr_26128;
})();
if(cljs.core.truth_(inst_26089)){
var statearr_26129_26160 = state_26100__$1;
(statearr_26129_26160[(1)] = (21));

} else {
var statearr_26130_26161 = state_26100__$1;
(statearr_26130_26161[(1)] = (22));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_26101 === (5))){
var inst_26044 = cljs.core.async.close_BANG_(out);
var state_26100__$1 = state_26100;
var statearr_26131_26162 = state_26100__$1;
(statearr_26131_26162[(2)] = inst_26044);

(statearr_26131_26162[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26101 === (14))){
var inst_26066 = (state_26100[(7)]);
var inst_26068 = cljs.core.chunked_seq_QMARK_(inst_26066);
var state_26100__$1 = state_26100;
if(inst_26068){
var statearr_26132_26163 = state_26100__$1;
(statearr_26132_26163[(1)] = (17));

} else {
var statearr_26133_26164 = state_26100__$1;
(statearr_26133_26164[(1)] = (18));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_26101 === (16))){
var inst_26084 = (state_26100[(2)]);
var state_26100__$1 = state_26100;
var statearr_26134_26165 = state_26100__$1;
(statearr_26134_26165[(2)] = inst_26084);

(statearr_26134_26165[(1)] = (12));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26101 === (10))){
var inst_26053 = (state_26100[(9)]);
var inst_26055 = (state_26100[(12)]);
var inst_26060 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26053,inst_26055);
var state_26100__$1 = state_26100;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26100__$1,(13),out,inst_26060);
} else {
if((state_val_26101 === (18))){
var inst_26066 = (state_26100[(7)]);
var inst_26075 = cljs.core.first(inst_26066);
var state_26100__$1 = state_26100;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26100__$1,(20),out,inst_26075);
} else {
if((state_val_26101 === (8))){
var inst_26054 = (state_26100[(8)]);
var inst_26055 = (state_26100[(12)]);
var inst_26057 = (inst_26055 < inst_26054);
var inst_26058 = inst_26057;
var state_26100__$1 = state_26100;
if(cljs.core.truth_(inst_26058)){
var statearr_26135_26166 = state_26100__$1;
(statearr_26135_26166[(1)] = (10));

} else {
var statearr_26136_26167 = state_26100__$1;
(statearr_26136_26167[(1)] = (11));

}

return cljs.core.constant$keyword$61;
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
});})(c__11826__auto__))
;
return ((function (switch__11746__auto__,c__11826__auto__){
return (function() {
var state_machine__11747__auto__ = null;
var state_machine__11747__auto____0 = (function (){
var statearr_26140 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26140[(0)] = state_machine__11747__auto__);

(statearr_26140[(1)] = (1));

return statearr_26140;
});
var state_machine__11747__auto____1 = (function (state_26100){
while(true){
var ret_value__11748__auto__ = (function (){try{while(true){
var result__11749__auto__ = switch__11746__auto__(state_26100);
if(cljs.core.keyword_identical_QMARK_(result__11749__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11749__auto__;
}
break;
}
}catch (e26141){if((e26141 instanceof Object)){
var ex__11750__auto__ = e26141;
var statearr_26142_26168 = state_26100;
(statearr_26142_26168[(5)] = ex__11750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26100);

return cljs.core.constant$keyword$61;
} else {
throw e26141;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11748__auto__,cljs.core.constant$keyword$61)){
var G__26169 = state_26100;
state_26100 = G__26169;
continue;
} else {
return ret_value__11748__auto__;
}
break;
}
});
state_machine__11747__auto__ = function(state_26100){
switch(arguments.length){
case 0:
return state_machine__11747__auto____0.call(this);
case 1:
return state_machine__11747__auto____1.call(this,state_26100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11747__auto____0;
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11747__auto____1;
return state_machine__11747__auto__;
})()
;})(switch__11746__auto__,c__11826__auto__))
})();
var state__11828__auto__ = (function (){var statearr_26143 = (function (){return (f__11827__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11827__auto__.cljs$core$IFn$_invoke$arity$0() : f__11827__auto__.call(null));
})();
(statearr_26143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11826__auto__);

return statearr_26143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11828__auto__);
});})(c__11826__auto__))
);

return c__11826__auto__;
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
var c__11826__auto___26274 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11826__auto___26274,out){
return (function (){
var f__11827__auto__ = (function (){var switch__11746__auto__ = ((function (c__11826__auto___26274,out){
return (function (state_26249){
var state_val_26250 = (state_26249[(1)]);
if((state_val_26250 === (7))){
var inst_26244 = (state_26249[(2)]);
var state_26249__$1 = state_26249;
var statearr_26251_26275 = state_26249__$1;
(statearr_26251_26275[(2)] = inst_26244);

(statearr_26251_26275[(1)] = (3));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26250 === (1))){
var inst_26226 = null;
var state_26249__$1 = (function (){var statearr_26252 = state_26249;
(statearr_26252[(7)] = inst_26226);

return statearr_26252;
})();
var statearr_26253_26276 = state_26249__$1;
(statearr_26253_26276[(2)] = null);

(statearr_26253_26276[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26250 === (4))){
var inst_26229 = (state_26249[(8)]);
var inst_26229__$1 = (state_26249[(2)]);
var inst_26230 = (inst_26229__$1 == null);
var inst_26231 = cljs.core.not(inst_26230);
var state_26249__$1 = (function (){var statearr_26254 = state_26249;
(statearr_26254[(8)] = inst_26229__$1);

return statearr_26254;
})();
if(inst_26231){
var statearr_26255_26277 = state_26249__$1;
(statearr_26255_26277[(1)] = (5));

} else {
var statearr_26256_26278 = state_26249__$1;
(statearr_26256_26278[(1)] = (6));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_26250 === (6))){
var state_26249__$1 = state_26249;
var statearr_26257_26279 = state_26249__$1;
(statearr_26257_26279[(2)] = null);

(statearr_26257_26279[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26250 === (3))){
var inst_26246 = (state_26249[(2)]);
var inst_26247 = cljs.core.async.close_BANG_(out);
var state_26249__$1 = (function (){var statearr_26258 = state_26249;
(statearr_26258[(9)] = inst_26246);

return statearr_26258;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26249__$1,inst_26247);
} else {
if((state_val_26250 === (2))){
var state_26249__$1 = state_26249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26249__$1,(4),ch);
} else {
if((state_val_26250 === (11))){
var inst_26229 = (state_26249[(8)]);
var inst_26238 = (state_26249[(2)]);
var inst_26226 = inst_26229;
var state_26249__$1 = (function (){var statearr_26259 = state_26249;
(statearr_26259[(10)] = inst_26238);

(statearr_26259[(7)] = inst_26226);

return statearr_26259;
})();
var statearr_26260_26280 = state_26249__$1;
(statearr_26260_26280[(2)] = null);

(statearr_26260_26280[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26250 === (9))){
var inst_26229 = (state_26249[(8)]);
var state_26249__$1 = state_26249;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26249__$1,(11),out,inst_26229);
} else {
if((state_val_26250 === (5))){
var inst_26229 = (state_26249[(8)]);
var inst_26226 = (state_26249[(7)]);
var inst_26233 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26229,inst_26226);
var state_26249__$1 = state_26249;
if(inst_26233){
var statearr_26262_26281 = state_26249__$1;
(statearr_26262_26281[(1)] = (8));

} else {
var statearr_26263_26282 = state_26249__$1;
(statearr_26263_26282[(1)] = (9));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_26250 === (10))){
var inst_26241 = (state_26249[(2)]);
var state_26249__$1 = state_26249;
var statearr_26264_26283 = state_26249__$1;
(statearr_26264_26283[(2)] = inst_26241);

(statearr_26264_26283[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26250 === (8))){
var inst_26226 = (state_26249[(7)]);
var tmp26261 = inst_26226;
var inst_26226__$1 = tmp26261;
var state_26249__$1 = (function (){var statearr_26265 = state_26249;
(statearr_26265[(7)] = inst_26226__$1);

return statearr_26265;
})();
var statearr_26266_26284 = state_26249__$1;
(statearr_26266_26284[(2)] = null);

(statearr_26266_26284[(1)] = (2));


return cljs.core.constant$keyword$61;
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
});})(c__11826__auto___26274,out))
;
return ((function (switch__11746__auto__,c__11826__auto___26274,out){
return (function() {
var state_machine__11747__auto__ = null;
var state_machine__11747__auto____0 = (function (){
var statearr_26270 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26270[(0)] = state_machine__11747__auto__);

(statearr_26270[(1)] = (1));

return statearr_26270;
});
var state_machine__11747__auto____1 = (function (state_26249){
while(true){
var ret_value__11748__auto__ = (function (){try{while(true){
var result__11749__auto__ = switch__11746__auto__(state_26249);
if(cljs.core.keyword_identical_QMARK_(result__11749__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11749__auto__;
}
break;
}
}catch (e26271){if((e26271 instanceof Object)){
var ex__11750__auto__ = e26271;
var statearr_26272_26285 = state_26249;
(statearr_26272_26285[(5)] = ex__11750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26249);

return cljs.core.constant$keyword$61;
} else {
throw e26271;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11748__auto__,cljs.core.constant$keyword$61)){
var G__26286 = state_26249;
state_26249 = G__26286;
continue;
} else {
return ret_value__11748__auto__;
}
break;
}
});
state_machine__11747__auto__ = function(state_26249){
switch(arguments.length){
case 0:
return state_machine__11747__auto____0.call(this);
case 1:
return state_machine__11747__auto____1.call(this,state_26249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11747__auto____0;
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11747__auto____1;
return state_machine__11747__auto__;
})()
;})(switch__11746__auto__,c__11826__auto___26274,out))
})();
var state__11828__auto__ = (function (){var statearr_26273 = (function (){return (f__11827__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11827__auto__.cljs$core$IFn$_invoke$arity$0() : f__11827__auto__.call(null));
})();
(statearr_26273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11826__auto___26274);

return statearr_26273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11828__auto__);
});})(c__11826__auto___26274,out))
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
var c__11826__auto___26424 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11826__auto___26424,out){
return (function (){
var f__11827__auto__ = (function (){var switch__11746__auto__ = ((function (c__11826__auto___26424,out){
return (function (state_26394){
var state_val_26395 = (state_26394[(1)]);
if((state_val_26395 === (7))){
var inst_26390 = (state_26394[(2)]);
var state_26394__$1 = state_26394;
var statearr_26396_26425 = state_26394__$1;
(statearr_26396_26425[(2)] = inst_26390);

(statearr_26396_26425[(1)] = (3));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26395 === (1))){
var inst_26357 = (new Array(n));
var inst_26358 = inst_26357;
var inst_26359 = (0);
var state_26394__$1 = (function (){var statearr_26397 = state_26394;
(statearr_26397[(7)] = inst_26358);

(statearr_26397[(8)] = inst_26359);

return statearr_26397;
})();
var statearr_26398_26426 = state_26394__$1;
(statearr_26398_26426[(2)] = null);

(statearr_26398_26426[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26395 === (4))){
var inst_26362 = (state_26394[(9)]);
var inst_26362__$1 = (state_26394[(2)]);
var inst_26363 = (inst_26362__$1 == null);
var inst_26364 = cljs.core.not(inst_26363);
var state_26394__$1 = (function (){var statearr_26399 = state_26394;
(statearr_26399[(9)] = inst_26362__$1);

return statearr_26399;
})();
if(inst_26364){
var statearr_26400_26427 = state_26394__$1;
(statearr_26400_26427[(1)] = (5));

} else {
var statearr_26401_26428 = state_26394__$1;
(statearr_26401_26428[(1)] = (6));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_26395 === (15))){
var inst_26384 = (state_26394[(2)]);
var state_26394__$1 = state_26394;
var statearr_26402_26429 = state_26394__$1;
(statearr_26402_26429[(2)] = inst_26384);

(statearr_26402_26429[(1)] = (14));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26395 === (13))){
var state_26394__$1 = state_26394;
var statearr_26403_26430 = state_26394__$1;
(statearr_26403_26430[(2)] = null);

(statearr_26403_26430[(1)] = (14));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26395 === (6))){
var inst_26359 = (state_26394[(8)]);
var inst_26380 = (inst_26359 > (0));
var state_26394__$1 = state_26394;
if(cljs.core.truth_(inst_26380)){
var statearr_26404_26431 = state_26394__$1;
(statearr_26404_26431[(1)] = (12));

} else {
var statearr_26405_26432 = state_26394__$1;
(statearr_26405_26432[(1)] = (13));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_26395 === (3))){
var inst_26392 = (state_26394[(2)]);
var state_26394__$1 = state_26394;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26394__$1,inst_26392);
} else {
if((state_val_26395 === (12))){
var inst_26358 = (state_26394[(7)]);
var inst_26382 = cljs.core.vec(inst_26358);
var state_26394__$1 = state_26394;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26394__$1,(15),out,inst_26382);
} else {
if((state_val_26395 === (2))){
var state_26394__$1 = state_26394;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26394__$1,(4),ch);
} else {
if((state_val_26395 === (11))){
var inst_26374 = (state_26394[(2)]);
var inst_26375 = (new Array(n));
var inst_26358 = inst_26375;
var inst_26359 = (0);
var state_26394__$1 = (function (){var statearr_26406 = state_26394;
(statearr_26406[(7)] = inst_26358);

(statearr_26406[(10)] = inst_26374);

(statearr_26406[(8)] = inst_26359);

return statearr_26406;
})();
var statearr_26407_26433 = state_26394__$1;
(statearr_26407_26433[(2)] = null);

(statearr_26407_26433[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26395 === (9))){
var inst_26358 = (state_26394[(7)]);
var inst_26372 = cljs.core.vec(inst_26358);
var state_26394__$1 = state_26394;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26394__$1,(11),out,inst_26372);
} else {
if((state_val_26395 === (5))){
var inst_26367 = (state_26394[(11)]);
var inst_26358 = (state_26394[(7)]);
var inst_26362 = (state_26394[(9)]);
var inst_26359 = (state_26394[(8)]);
var inst_26366 = (inst_26358[inst_26359] = inst_26362);
var inst_26367__$1 = (inst_26359 + (1));
var inst_26368 = (inst_26367__$1 < n);
var state_26394__$1 = (function (){var statearr_26408 = state_26394;
(statearr_26408[(11)] = inst_26367__$1);

(statearr_26408[(12)] = inst_26366);

return statearr_26408;
})();
if(cljs.core.truth_(inst_26368)){
var statearr_26409_26434 = state_26394__$1;
(statearr_26409_26434[(1)] = (8));

} else {
var statearr_26410_26435 = state_26394__$1;
(statearr_26410_26435[(1)] = (9));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_26395 === (14))){
var inst_26387 = (state_26394[(2)]);
var inst_26388 = cljs.core.async.close_BANG_(out);
var state_26394__$1 = (function (){var statearr_26412 = state_26394;
(statearr_26412[(13)] = inst_26387);

return statearr_26412;
})();
var statearr_26413_26436 = state_26394__$1;
(statearr_26413_26436[(2)] = inst_26388);

(statearr_26413_26436[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26395 === (10))){
var inst_26378 = (state_26394[(2)]);
var state_26394__$1 = state_26394;
var statearr_26414_26437 = state_26394__$1;
(statearr_26414_26437[(2)] = inst_26378);

(statearr_26414_26437[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26395 === (8))){
var inst_26367 = (state_26394[(11)]);
var inst_26358 = (state_26394[(7)]);
var tmp26411 = inst_26358;
var inst_26358__$1 = tmp26411;
var inst_26359 = inst_26367;
var state_26394__$1 = (function (){var statearr_26415 = state_26394;
(statearr_26415[(7)] = inst_26358__$1);

(statearr_26415[(8)] = inst_26359);

return statearr_26415;
})();
var statearr_26416_26438 = state_26394__$1;
(statearr_26416_26438[(2)] = null);

(statearr_26416_26438[(1)] = (2));


return cljs.core.constant$keyword$61;
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
});})(c__11826__auto___26424,out))
;
return ((function (switch__11746__auto__,c__11826__auto___26424,out){
return (function() {
var state_machine__11747__auto__ = null;
var state_machine__11747__auto____0 = (function (){
var statearr_26420 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26420[(0)] = state_machine__11747__auto__);

(statearr_26420[(1)] = (1));

return statearr_26420;
});
var state_machine__11747__auto____1 = (function (state_26394){
while(true){
var ret_value__11748__auto__ = (function (){try{while(true){
var result__11749__auto__ = switch__11746__auto__(state_26394);
if(cljs.core.keyword_identical_QMARK_(result__11749__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11749__auto__;
}
break;
}
}catch (e26421){if((e26421 instanceof Object)){
var ex__11750__auto__ = e26421;
var statearr_26422_26439 = state_26394;
(statearr_26422_26439[(5)] = ex__11750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26394);

return cljs.core.constant$keyword$61;
} else {
throw e26421;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11748__auto__,cljs.core.constant$keyword$61)){
var G__26440 = state_26394;
state_26394 = G__26440;
continue;
} else {
return ret_value__11748__auto__;
}
break;
}
});
state_machine__11747__auto__ = function(state_26394){
switch(arguments.length){
case 0:
return state_machine__11747__auto____0.call(this);
case 1:
return state_machine__11747__auto____1.call(this,state_26394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11747__auto____0;
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11747__auto____1;
return state_machine__11747__auto__;
})()
;})(switch__11746__auto__,c__11826__auto___26424,out))
})();
var state__11828__auto__ = (function (){var statearr_26423 = (function (){return (f__11827__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11827__auto__.cljs$core$IFn$_invoke$arity$0() : f__11827__auto__.call(null));
})();
(statearr_26423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11826__auto___26424);

return statearr_26423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11828__auto__);
});})(c__11826__auto___26424,out))
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
var c__11826__auto___26588 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11826__auto___26588,out){
return (function (){
var f__11827__auto__ = (function (){var switch__11746__auto__ = ((function (c__11826__auto___26588,out){
return (function (state_26557){
var state_val_26558 = (state_26557[(1)]);
if((state_val_26558 === (7))){
var inst_26553 = (state_26557[(2)]);
var state_26557__$1 = state_26557;
var statearr_26559_26589 = state_26557__$1;
(statearr_26559_26589[(2)] = inst_26553);

(statearr_26559_26589[(1)] = (3));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26558 === (1))){
var inst_26516 = [];
var inst_26517 = inst_26516;
var inst_26518 = cljs.core.constant$keyword$76;
var state_26557__$1 = (function (){var statearr_26560 = state_26557;
(statearr_26560[(7)] = inst_26517);

(statearr_26560[(8)] = inst_26518);

return statearr_26560;
})();
var statearr_26561_26590 = state_26557__$1;
(statearr_26561_26590[(2)] = null);

(statearr_26561_26590[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26558 === (4))){
var inst_26521 = (state_26557[(9)]);
var inst_26521__$1 = (state_26557[(2)]);
var inst_26522 = (inst_26521__$1 == null);
var inst_26523 = cljs.core.not(inst_26522);
var state_26557__$1 = (function (){var statearr_26562 = state_26557;
(statearr_26562[(9)] = inst_26521__$1);

return statearr_26562;
})();
if(inst_26523){
var statearr_26563_26591 = state_26557__$1;
(statearr_26563_26591[(1)] = (5));

} else {
var statearr_26564_26592 = state_26557__$1;
(statearr_26564_26592[(1)] = (6));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_26558 === (15))){
var inst_26547 = (state_26557[(2)]);
var state_26557__$1 = state_26557;
var statearr_26565_26593 = state_26557__$1;
(statearr_26565_26593[(2)] = inst_26547);

(statearr_26565_26593[(1)] = (14));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26558 === (13))){
var state_26557__$1 = state_26557;
var statearr_26566_26594 = state_26557__$1;
(statearr_26566_26594[(2)] = null);

(statearr_26566_26594[(1)] = (14));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26558 === (6))){
var inst_26517 = (state_26557[(7)]);
var inst_26542 = inst_26517.length;
var inst_26543 = (inst_26542 > (0));
var state_26557__$1 = state_26557;
if(cljs.core.truth_(inst_26543)){
var statearr_26567_26595 = state_26557__$1;
(statearr_26567_26595[(1)] = (12));

} else {
var statearr_26568_26596 = state_26557__$1;
(statearr_26568_26596[(1)] = (13));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_26558 === (3))){
var inst_26555 = (state_26557[(2)]);
var state_26557__$1 = state_26557;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26557__$1,inst_26555);
} else {
if((state_val_26558 === (12))){
var inst_26517 = (state_26557[(7)]);
var inst_26545 = cljs.core.vec(inst_26517);
var state_26557__$1 = state_26557;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26557__$1,(15),out,inst_26545);
} else {
if((state_val_26558 === (2))){
var state_26557__$1 = state_26557;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26557__$1,(4),ch);
} else {
if((state_val_26558 === (11))){
var inst_26525 = (state_26557[(10)]);
var inst_26521 = (state_26557[(9)]);
var inst_26535 = (state_26557[(2)]);
var inst_26536 = [];
var inst_26537 = inst_26536.push(inst_26521);
var inst_26517 = inst_26536;
var inst_26518 = inst_26525;
var state_26557__$1 = (function (){var statearr_26569 = state_26557;
(statearr_26569[(11)] = inst_26537);

(statearr_26569[(7)] = inst_26517);

(statearr_26569[(12)] = inst_26535);

(statearr_26569[(8)] = inst_26518);

return statearr_26569;
})();
var statearr_26570_26597 = state_26557__$1;
(statearr_26570_26597[(2)] = null);

(statearr_26570_26597[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26558 === (9))){
var inst_26517 = (state_26557[(7)]);
var inst_26533 = cljs.core.vec(inst_26517);
var state_26557__$1 = state_26557;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26557__$1,(11),out,inst_26533);
} else {
if((state_val_26558 === (5))){
var inst_26525 = (state_26557[(10)]);
var inst_26521 = (state_26557[(9)]);
var inst_26518 = (state_26557[(8)]);
var inst_26525__$1 = (function (){var G__26571 = inst_26521;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26571) : f.call(null,G__26571));
})();
var inst_26526 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26525__$1,inst_26518);
var inst_26527 = cljs.core.keyword_identical_QMARK_(inst_26518,cljs.core.constant$keyword$76);
var inst_26528 = (inst_26526) || (inst_26527);
var state_26557__$1 = (function (){var statearr_26572 = state_26557;
(statearr_26572[(10)] = inst_26525__$1);

return statearr_26572;
})();
if(cljs.core.truth_(inst_26528)){
var statearr_26573_26598 = state_26557__$1;
(statearr_26573_26598[(1)] = (8));

} else {
var statearr_26574_26599 = state_26557__$1;
(statearr_26574_26599[(1)] = (9));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_26558 === (14))){
var inst_26550 = (state_26557[(2)]);
var inst_26551 = cljs.core.async.close_BANG_(out);
var state_26557__$1 = (function (){var statearr_26576 = state_26557;
(statearr_26576[(13)] = inst_26550);

return statearr_26576;
})();
var statearr_26577_26600 = state_26557__$1;
(statearr_26577_26600[(2)] = inst_26551);

(statearr_26577_26600[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26558 === (10))){
var inst_26540 = (state_26557[(2)]);
var state_26557__$1 = state_26557;
var statearr_26578_26601 = state_26557__$1;
(statearr_26578_26601[(2)] = inst_26540);

(statearr_26578_26601[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26558 === (8))){
var inst_26525 = (state_26557[(10)]);
var inst_26517 = (state_26557[(7)]);
var inst_26521 = (state_26557[(9)]);
var inst_26530 = inst_26517.push(inst_26521);
var tmp26575 = inst_26517;
var inst_26517__$1 = tmp26575;
var inst_26518 = inst_26525;
var state_26557__$1 = (function (){var statearr_26579 = state_26557;
(statearr_26579[(7)] = inst_26517__$1);

(statearr_26579[(14)] = inst_26530);

(statearr_26579[(8)] = inst_26518);

return statearr_26579;
})();
var statearr_26580_26602 = state_26557__$1;
(statearr_26580_26602[(2)] = null);

(statearr_26580_26602[(1)] = (2));


return cljs.core.constant$keyword$61;
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
});})(c__11826__auto___26588,out))
;
return ((function (switch__11746__auto__,c__11826__auto___26588,out){
return (function() {
var state_machine__11747__auto__ = null;
var state_machine__11747__auto____0 = (function (){
var statearr_26584 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26584[(0)] = state_machine__11747__auto__);

(statearr_26584[(1)] = (1));

return statearr_26584;
});
var state_machine__11747__auto____1 = (function (state_26557){
while(true){
var ret_value__11748__auto__ = (function (){try{while(true){
var result__11749__auto__ = switch__11746__auto__(state_26557);
if(cljs.core.keyword_identical_QMARK_(result__11749__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11749__auto__;
}
break;
}
}catch (e26585){if((e26585 instanceof Object)){
var ex__11750__auto__ = e26585;
var statearr_26586_26603 = state_26557;
(statearr_26586_26603[(5)] = ex__11750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26557);

return cljs.core.constant$keyword$61;
} else {
throw e26585;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11748__auto__,cljs.core.constant$keyword$61)){
var G__26604 = state_26557;
state_26557 = G__26604;
continue;
} else {
return ret_value__11748__auto__;
}
break;
}
});
state_machine__11747__auto__ = function(state_26557){
switch(arguments.length){
case 0:
return state_machine__11747__auto____0.call(this);
case 1:
return state_machine__11747__auto____1.call(this,state_26557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11747__auto____0;
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11747__auto____1;
return state_machine__11747__auto__;
})()
;})(switch__11746__auto__,c__11826__auto___26588,out))
})();
var state__11828__auto__ = (function (){var statearr_26587 = (function (){return (f__11827__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11827__auto__.cljs$core$IFn$_invoke$arity$0() : f__11827__auto__.call(null));
})();
(statearr_26587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11826__auto___26588);

return statearr_26587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11828__auto__);
});})(c__11826__auto___26588,out))
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
