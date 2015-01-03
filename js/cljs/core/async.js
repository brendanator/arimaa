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
if(typeof cljs.core.async.t23043 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23043 = (function (f,fn_handler,meta23044){
this.f = f;
this.fn_handler = fn_handler;
this.meta23044 = meta23044;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23043.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23043.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t23043.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t23043.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23045){
var self__ = this;
var _23045__$1 = this;
return self__.meta23044;
});

cljs.core.async.t23043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23045,meta23044__$1){
var self__ = this;
var _23045__$1 = this;
return (new cljs.core.async.t23043(self__.f,self__.fn_handler,meta23044__$1));
});

cljs.core.async.t23043.cljs$lang$type = true;

cljs.core.async.t23043.cljs$lang$ctorStr = "cljs.core.async/t23043";

cljs.core.async.t23043.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23043");
});

cljs.core.async.__GT_t23043 = (function __GT_t23043(f__$1,fn_handler__$1,meta23044){
return (new cljs.core.async.t23043(f__$1,fn_handler__$1,meta23044));
});

}

return (new cljs.core.async.t23043(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,20,cljs.core.constant$keyword$9,16,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,13,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
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
var G__23047 = buff;
if(G__23047){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__23047.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__23047.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23047);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23047);
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
var val_23064 = (function (){var G__23061 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23061) : cljs.core.deref.call(null,G__23061));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__23062_23065 = val_23064;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23062_23065) : fn1.call(null,G__23062_23065));
} else {
cljs.core.async.impl.dispatch.run(((function (val_23064,ret){
return (function (){
var G__23063 = val_23064;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23063) : fn1.call(null,G__23063));
});})(val_23064,ret))
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
var G__23074 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23074) : cljs.core.deref.call(null,G__23074));
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
var ret = (function (){var G__23075 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23075) : cljs.core.deref.call(null,G__23075));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__23076_23078 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23076_23078) : fn1.call(null,G__23076_23078));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__23077 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23077) : fn1.call(null,G__23077));
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
var n__4517__auto___23079 = n;
var x_23080 = (0);
while(true){
if((x_23080 < n__4517__auto___23079)){
(a[x_23080] = (0));

var G__23081 = (x_23080 + (1));
x_23080 = G__23081;
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

var G__23082 = (i + (1));
i = G__23082;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__23090 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23090) : cljs.core.atom.call(null,G__23090));
})();
if(typeof cljs.core.async.t23091 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23091 = (function (flag,alt_flag,meta23092){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23092 = meta23092;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23091.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23091.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23094 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23094) : cljs.core.deref.call(null,G__23094));
});})(flag))
;

cljs.core.async.t23091.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23095_23097 = self__.flag;
var G__23096_23098 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23095_23097,G__23096_23098) : cljs.core.reset_BANG_.call(null,G__23095_23097,G__23096_23098));

return true;
});})(flag))
;

cljs.core.async.t23091.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23093){
var self__ = this;
var _23093__$1 = this;
return self__.meta23092;
});})(flag))
;

cljs.core.async.t23091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23093,meta23092__$1){
var self__ = this;
var _23093__$1 = this;
return (new cljs.core.async.t23091(self__.flag,self__.alt_flag,meta23092__$1));
});})(flag))
;

cljs.core.async.t23091.cljs$lang$type = true;

cljs.core.async.t23091.cljs$lang$ctorStr = "cljs.core.async/t23091";

cljs.core.async.t23091.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23091");
});})(flag))
;

cljs.core.async.__GT_t23091 = ((function (flag){
return (function __GT_t23091(flag__$1,alt_flag__$1,meta23092){
return (new cljs.core.async.t23091(flag__$1,alt_flag__$1,meta23092));
});})(flag))
;

}

return (new cljs.core.async.t23091(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,15,cljs.core.constant$keyword$9,146,cljs.core.constant$keyword$10,5,cljs.core.constant$keyword$11,141,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t23102 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23102 = (function (cb,flag,alt_handler,meta23103){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23103 = meta23103;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23102.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23102.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t23102.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t23102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23104){
var self__ = this;
var _23104__$1 = this;
return self__.meta23103;
});

cljs.core.async.t23102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23104,meta23103__$1){
var self__ = this;
var _23104__$1 = this;
return (new cljs.core.async.t23102(self__.cb,self__.flag,self__.alt_handler,meta23103__$1));
});

cljs.core.async.t23102.cljs$lang$type = true;

cljs.core.async.t23102.cljs$lang$ctorStr = "cljs.core.async/t23102";

cljs.core.async.t23102.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23102");
});

cljs.core.async.__GT_t23102 = (function __GT_t23102(cb__$1,flag__$1,alt_handler__$1,meta23103){
return (new cljs.core.async.t23102(cb__$1,flag__$1,alt_handler__$1,meta23103));
});

}

return (new cljs.core.async.t23102(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,11,cljs.core.constant$keyword$9,154,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,149,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
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
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__23112 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__23112) : port.call(null,G__23112));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__23113 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__23113) : port.call(null,G__23113));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23105_SHARP_){
var G__23114 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23105_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__23114) : fret.call(null,G__23114));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23106_SHARP_){
var G__23115 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23106_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__23115) : fret.call(null,G__23115));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23116 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23116) : cljs.core.deref.call(null,G__23116));
})(),(function (){var or__3630__auto__ = wport;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23117 = (i + (1));
i = G__23117;
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
var alts_BANG___delegate = function (ports,p__23118){
var map__23120 = p__23118;
var map__23120__$1 = ((cljs.core.seq_QMARK_(map__23120))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23120):map__23120);
var opts = map__23120__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__23118 = null;
if (arguments.length > 1) {
  p__23118 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__23118);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23121){
var ports = cljs.core.first(arglist__23121);
var p__23118 = cljs.core.rest(arglist__23121);
return alts_BANG___delegate(ports,p__23118);
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
var c__5853__auto___23219 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___23219){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___23219){
return (function (state_23195){
var state_val_23196 = (state_23195[(1)]);
if((state_val_23196 === (7))){
var inst_23191 = (state_23195[(2)]);
var state_23195__$1 = state_23195;
var statearr_23197_23220 = state_23195__$1;
(statearr_23197_23220[(2)] = inst_23191);

(statearr_23197_23220[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23196 === (1))){
var state_23195__$1 = state_23195;
var statearr_23198_23221 = state_23195__$1;
(statearr_23198_23221[(2)] = null);

(statearr_23198_23221[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23196 === (4))){
var inst_23174 = (state_23195[(7)]);
var inst_23174__$1 = (state_23195[(2)]);
var inst_23175 = (inst_23174__$1 == null);
var state_23195__$1 = (function (){var statearr_23199 = state_23195;
(statearr_23199[(7)] = inst_23174__$1);

return statearr_23199;
})();
if(cljs.core.truth_(inst_23175)){
var statearr_23200_23222 = state_23195__$1;
(statearr_23200_23222[(1)] = (5));

} else {
var statearr_23201_23223 = state_23195__$1;
(statearr_23201_23223[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23196 === (13))){
var state_23195__$1 = state_23195;
var statearr_23202_23224 = state_23195__$1;
(statearr_23202_23224[(2)] = null);

(statearr_23202_23224[(1)] = (14));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23196 === (6))){
var inst_23174 = (state_23195[(7)]);
var state_23195__$1 = state_23195;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23195__$1,(11),to,inst_23174);
} else {
if((state_val_23196 === (3))){
var inst_23193 = (state_23195[(2)]);
var state_23195__$1 = state_23195;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23195__$1,inst_23193);
} else {
if((state_val_23196 === (12))){
var state_23195__$1 = state_23195;
var statearr_23203_23225 = state_23195__$1;
(statearr_23203_23225[(2)] = null);

(statearr_23203_23225[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23196 === (2))){
var state_23195__$1 = state_23195;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23195__$1,(4),from);
} else {
if((state_val_23196 === (11))){
var inst_23184 = (state_23195[(2)]);
var state_23195__$1 = state_23195;
if(cljs.core.truth_(inst_23184)){
var statearr_23204_23226 = state_23195__$1;
(statearr_23204_23226[(1)] = (12));

} else {
var statearr_23205_23227 = state_23195__$1;
(statearr_23205_23227[(1)] = (13));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23196 === (9))){
var state_23195__$1 = state_23195;
var statearr_23206_23228 = state_23195__$1;
(statearr_23206_23228[(2)] = null);

(statearr_23206_23228[(1)] = (10));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23196 === (5))){
var state_23195__$1 = state_23195;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23207_23229 = state_23195__$1;
(statearr_23207_23229[(1)] = (8));

} else {
var statearr_23208_23230 = state_23195__$1;
(statearr_23208_23230[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23196 === (14))){
var inst_23189 = (state_23195[(2)]);
var state_23195__$1 = state_23195;
var statearr_23209_23231 = state_23195__$1;
(statearr_23209_23231[(2)] = inst_23189);

(statearr_23209_23231[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23196 === (10))){
var inst_23181 = (state_23195[(2)]);
var state_23195__$1 = state_23195;
var statearr_23210_23232 = state_23195__$1;
(statearr_23210_23232[(2)] = inst_23181);

(statearr_23210_23232[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23196 === (8))){
var inst_23178 = cljs.core.async.close_BANG_(to);
var state_23195__$1 = state_23195;
var statearr_23211_23233 = state_23195__$1;
(statearr_23211_23233[(2)] = inst_23178);

(statearr_23211_23233[(1)] = (10));


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
});})(c__5853__auto___23219))
;
return ((function (switch__5838__auto__,c__5853__auto___23219){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_23215 = [null,null,null,null,null,null,null,null];
(statearr_23215[(0)] = state_machine__5839__auto__);

(statearr_23215[(1)] = (1));

return statearr_23215;
});
var state_machine__5839__auto____1 = (function (state_23195){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_23195);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e23216){if((e23216 instanceof Object)){
var ex__5842__auto__ = e23216;
var statearr_23217_23234 = state_23195;
(statearr_23217_23234[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23195);

return cljs.core.constant$keyword$41;
} else {
throw e23216;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__23235 = state_23195;
state_23195 = G__23235;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_23195){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_23195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___23219))
})();
var state__5855__auto__ = (function (){var statearr_23218 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_23218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___23219);

return statearr_23218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___23219))
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
return (function (p__23421){
var vec__23422 = p__23421;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23422,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23422,(1),null);
var job = vec__23422;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__5853__auto___23606 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___23606,res,vec__23422,v,p,job,jobs,results){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___23606,res,vec__23422,v,p,job,jobs,results){
return (function (state_23427){
var state_val_23428 = (state_23427[(1)]);
if((state_val_23428 === (2))){
var inst_23424 = (state_23427[(2)]);
var inst_23425 = cljs.core.async.close_BANG_(res);
var state_23427__$1 = (function (){var statearr_23429 = state_23427;
(statearr_23429[(7)] = inst_23424);

return statearr_23429;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23427__$1,inst_23425);
} else {
if((state_val_23428 === (1))){
var state_23427__$1 = state_23427;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23427__$1,(2),res,v);
} else {
return null;
}
}
});})(c__5853__auto___23606,res,vec__23422,v,p,job,jobs,results))
;
return ((function (switch__5838__auto__,c__5853__auto___23606,res,vec__23422,v,p,job,jobs,results){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_23433 = [null,null,null,null,null,null,null,null];
(statearr_23433[(0)] = state_machine__5839__auto__);

(statearr_23433[(1)] = (1));

return statearr_23433;
});
var state_machine__5839__auto____1 = (function (state_23427){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_23427);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e23434){if((e23434 instanceof Object)){
var ex__5842__auto__ = e23434;
var statearr_23435_23607 = state_23427;
(statearr_23435_23607[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23427);

return cljs.core.constant$keyword$41;
} else {
throw e23434;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__23608 = state_23427;
state_23427 = G__23608;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_23427){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_23427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___23606,res,vec__23422,v,p,job,jobs,results))
})();
var state__5855__auto__ = (function (){var statearr_23436 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_23436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___23606);

return statearr_23436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___23606,res,vec__23422,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23437){
var vec__23438 = p__23437;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23438,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23438,(1),null);
var job = vec__23438;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__23439_23609 = v;
var G__23440_23610 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__23439_23609,G__23440_23610) : xf.call(null,G__23439_23609,G__23440_23610));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4517__auto___23611 = n;
var __23612 = (0);
while(true){
if((__23612 < n__4517__auto___23611)){
var G__23441_23613 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23441_23613) {
case "async":
var c__5853__auto___23615 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__23612,c__5853__auto___23615,G__23441_23613,n__4517__auto___23611,jobs,results,process,async){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (__23612,c__5853__auto___23615,G__23441_23613,n__4517__auto___23611,jobs,results,process,async){
return (function (state_23454){
var state_val_23455 = (state_23454[(1)]);
if((state_val_23455 === (7))){
var inst_23450 = (state_23454[(2)]);
var state_23454__$1 = state_23454;
var statearr_23456_23616 = state_23454__$1;
(statearr_23456_23616[(2)] = inst_23450);

(statearr_23456_23616[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23455 === (6))){
var state_23454__$1 = state_23454;
var statearr_23457_23617 = state_23454__$1;
(statearr_23457_23617[(2)] = null);

(statearr_23457_23617[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23455 === (5))){
var state_23454__$1 = state_23454;
var statearr_23458_23618 = state_23454__$1;
(statearr_23458_23618[(2)] = null);

(statearr_23458_23618[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23455 === (4))){
var inst_23444 = (state_23454[(2)]);
var inst_23445 = async(inst_23444);
var state_23454__$1 = state_23454;
if(cljs.core.truth_(inst_23445)){
var statearr_23459_23619 = state_23454__$1;
(statearr_23459_23619[(1)] = (5));

} else {
var statearr_23460_23620 = state_23454__$1;
(statearr_23460_23620[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23455 === (3))){
var inst_23452 = (state_23454[(2)]);
var state_23454__$1 = state_23454;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23454__$1,inst_23452);
} else {
if((state_val_23455 === (2))){
var state_23454__$1 = state_23454;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23454__$1,(4),jobs);
} else {
if((state_val_23455 === (1))){
var state_23454__$1 = state_23454;
var statearr_23461_23621 = state_23454__$1;
(statearr_23461_23621[(2)] = null);

(statearr_23461_23621[(1)] = (2));


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
});})(__23612,c__5853__auto___23615,G__23441_23613,n__4517__auto___23611,jobs,results,process,async))
;
return ((function (__23612,switch__5838__auto__,c__5853__auto___23615,G__23441_23613,n__4517__auto___23611,jobs,results,process,async){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_23465 = [null,null,null,null,null,null,null];
(statearr_23465[(0)] = state_machine__5839__auto__);

(statearr_23465[(1)] = (1));

return statearr_23465;
});
var state_machine__5839__auto____1 = (function (state_23454){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_23454);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e23466){if((e23466 instanceof Object)){
var ex__5842__auto__ = e23466;
var statearr_23467_23622 = state_23454;
(statearr_23467_23622[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23454);

return cljs.core.constant$keyword$41;
} else {
throw e23466;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__23623 = state_23454;
state_23454 = G__23623;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_23454){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_23454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(__23612,switch__5838__auto__,c__5853__auto___23615,G__23441_23613,n__4517__auto___23611,jobs,results,process,async))
})();
var state__5855__auto__ = (function (){var statearr_23468 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_23468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___23615);

return statearr_23468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(__23612,c__5853__auto___23615,G__23441_23613,n__4517__auto___23611,jobs,results,process,async))
);


break;
case "compute":
var c__5853__auto___23624 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__23612,c__5853__auto___23624,G__23441_23613,n__4517__auto___23611,jobs,results,process,async){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (__23612,c__5853__auto___23624,G__23441_23613,n__4517__auto___23611,jobs,results,process,async){
return (function (state_23481){
var state_val_23482 = (state_23481[(1)]);
if((state_val_23482 === (7))){
var inst_23477 = (state_23481[(2)]);
var state_23481__$1 = state_23481;
var statearr_23483_23625 = state_23481__$1;
(statearr_23483_23625[(2)] = inst_23477);

(statearr_23483_23625[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23482 === (6))){
var state_23481__$1 = state_23481;
var statearr_23484_23626 = state_23481__$1;
(statearr_23484_23626[(2)] = null);

(statearr_23484_23626[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23482 === (5))){
var state_23481__$1 = state_23481;
var statearr_23485_23627 = state_23481__$1;
(statearr_23485_23627[(2)] = null);

(statearr_23485_23627[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23482 === (4))){
var inst_23471 = (state_23481[(2)]);
var inst_23472 = process(inst_23471);
var state_23481__$1 = state_23481;
if(cljs.core.truth_(inst_23472)){
var statearr_23486_23628 = state_23481__$1;
(statearr_23486_23628[(1)] = (5));

} else {
var statearr_23487_23629 = state_23481__$1;
(statearr_23487_23629[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23482 === (3))){
var inst_23479 = (state_23481[(2)]);
var state_23481__$1 = state_23481;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23481__$1,inst_23479);
} else {
if((state_val_23482 === (2))){
var state_23481__$1 = state_23481;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23481__$1,(4),jobs);
} else {
if((state_val_23482 === (1))){
var state_23481__$1 = state_23481;
var statearr_23488_23630 = state_23481__$1;
(statearr_23488_23630[(2)] = null);

(statearr_23488_23630[(1)] = (2));


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
});})(__23612,c__5853__auto___23624,G__23441_23613,n__4517__auto___23611,jobs,results,process,async))
;
return ((function (__23612,switch__5838__auto__,c__5853__auto___23624,G__23441_23613,n__4517__auto___23611,jobs,results,process,async){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_23492 = [null,null,null,null,null,null,null];
(statearr_23492[(0)] = state_machine__5839__auto__);

(statearr_23492[(1)] = (1));

return statearr_23492;
});
var state_machine__5839__auto____1 = (function (state_23481){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_23481);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e23493){if((e23493 instanceof Object)){
var ex__5842__auto__ = e23493;
var statearr_23494_23631 = state_23481;
(statearr_23494_23631[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23481);

return cljs.core.constant$keyword$41;
} else {
throw e23493;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__23632 = state_23481;
state_23481 = G__23632;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_23481){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_23481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(__23612,switch__5838__auto__,c__5853__auto___23624,G__23441_23613,n__4517__auto___23611,jobs,results,process,async))
})();
var state__5855__auto__ = (function (){var statearr_23495 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_23495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___23624);

return statearr_23495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(__23612,c__5853__auto___23624,G__23441_23613,n__4517__auto___23611,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23633 = (__23612 + (1));
__23612 = G__23633;
continue;
} else {
}
break;
}

var c__5853__auto___23634 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___23634,jobs,results,process,async){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___23634,jobs,results,process,async){
return (function (state_23517){
var state_val_23518 = (state_23517[(1)]);
if((state_val_23518 === (9))){
var inst_23510 = (state_23517[(2)]);
var state_23517__$1 = (function (){var statearr_23519 = state_23517;
(statearr_23519[(7)] = inst_23510);

return statearr_23519;
})();
var statearr_23520_23635 = state_23517__$1;
(statearr_23520_23635[(2)] = null);

(statearr_23520_23635[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23518 === (8))){
var inst_23503 = (state_23517[(8)]);
var inst_23508 = (state_23517[(2)]);
var state_23517__$1 = (function (){var statearr_23521 = state_23517;
(statearr_23521[(9)] = inst_23508);

return statearr_23521;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23517__$1,(9),results,inst_23503);
} else {
if((state_val_23518 === (7))){
var inst_23513 = (state_23517[(2)]);
var state_23517__$1 = state_23517;
var statearr_23522_23636 = state_23517__$1;
(statearr_23522_23636[(2)] = inst_23513);

(statearr_23522_23636[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23518 === (6))){
var inst_23503 = (state_23517[(8)]);
var inst_23498 = (state_23517[(10)]);
var inst_23503__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_23504 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23505 = [inst_23498,inst_23503__$1];
var inst_23506 = (new cljs.core.PersistentVector(null,2,(5),inst_23504,inst_23505,null));
var state_23517__$1 = (function (){var statearr_23523 = state_23517;
(statearr_23523[(8)] = inst_23503__$1);

return statearr_23523;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23517__$1,(8),jobs,inst_23506);
} else {
if((state_val_23518 === (5))){
var inst_23501 = cljs.core.async.close_BANG_(jobs);
var state_23517__$1 = state_23517;
var statearr_23524_23637 = state_23517__$1;
(statearr_23524_23637[(2)] = inst_23501);

(statearr_23524_23637[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23518 === (4))){
var inst_23498 = (state_23517[(10)]);
var inst_23498__$1 = (state_23517[(2)]);
var inst_23499 = (inst_23498__$1 == null);
var state_23517__$1 = (function (){var statearr_23525 = state_23517;
(statearr_23525[(10)] = inst_23498__$1);

return statearr_23525;
})();
if(cljs.core.truth_(inst_23499)){
var statearr_23526_23638 = state_23517__$1;
(statearr_23526_23638[(1)] = (5));

} else {
var statearr_23527_23639 = state_23517__$1;
(statearr_23527_23639[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23518 === (3))){
var inst_23515 = (state_23517[(2)]);
var state_23517__$1 = state_23517;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23517__$1,inst_23515);
} else {
if((state_val_23518 === (2))){
var state_23517__$1 = state_23517;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23517__$1,(4),from);
} else {
if((state_val_23518 === (1))){
var state_23517__$1 = state_23517;
var statearr_23528_23640 = state_23517__$1;
(statearr_23528_23640[(2)] = null);

(statearr_23528_23640[(1)] = (2));


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
});})(c__5853__auto___23634,jobs,results,process,async))
;
return ((function (switch__5838__auto__,c__5853__auto___23634,jobs,results,process,async){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_23532 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23532[(0)] = state_machine__5839__auto__);

(statearr_23532[(1)] = (1));

return statearr_23532;
});
var state_machine__5839__auto____1 = (function (state_23517){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_23517);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e23533){if((e23533 instanceof Object)){
var ex__5842__auto__ = e23533;
var statearr_23534_23641 = state_23517;
(statearr_23534_23641[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23517);

return cljs.core.constant$keyword$41;
} else {
throw e23533;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__23642 = state_23517;
state_23517 = G__23642;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_23517){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_23517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___23634,jobs,results,process,async))
})();
var state__5855__auto__ = (function (){var statearr_23535 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_23535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___23634);

return statearr_23535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___23634,jobs,results,process,async))
);


var c__5853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto__,jobs,results,process,async){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto__,jobs,results,process,async){
return (function (state_23573){
var state_val_23574 = (state_23573[(1)]);
if((state_val_23574 === (7))){
var inst_23569 = (state_23573[(2)]);
var state_23573__$1 = state_23573;
var statearr_23575_23643 = state_23573__$1;
(statearr_23575_23643[(2)] = inst_23569);

(statearr_23575_23643[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23574 === (20))){
var state_23573__$1 = state_23573;
var statearr_23576_23644 = state_23573__$1;
(statearr_23576_23644[(2)] = null);

(statearr_23576_23644[(1)] = (21));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23574 === (1))){
var state_23573__$1 = state_23573;
var statearr_23577_23645 = state_23573__$1;
(statearr_23577_23645[(2)] = null);

(statearr_23577_23645[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23574 === (4))){
var inst_23538 = (state_23573[(7)]);
var inst_23538__$1 = (state_23573[(2)]);
var inst_23539 = (inst_23538__$1 == null);
var state_23573__$1 = (function (){var statearr_23578 = state_23573;
(statearr_23578[(7)] = inst_23538__$1);

return statearr_23578;
})();
if(cljs.core.truth_(inst_23539)){
var statearr_23579_23646 = state_23573__$1;
(statearr_23579_23646[(1)] = (5));

} else {
var statearr_23580_23647 = state_23573__$1;
(statearr_23580_23647[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23574 === (15))){
var inst_23551 = (state_23573[(8)]);
var state_23573__$1 = state_23573;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23573__$1,(18),to,inst_23551);
} else {
if((state_val_23574 === (21))){
var inst_23564 = (state_23573[(2)]);
var state_23573__$1 = state_23573;
var statearr_23581_23648 = state_23573__$1;
(statearr_23581_23648[(2)] = inst_23564);

(statearr_23581_23648[(1)] = (13));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23574 === (13))){
var inst_23566 = (state_23573[(2)]);
var state_23573__$1 = (function (){var statearr_23582 = state_23573;
(statearr_23582[(9)] = inst_23566);

return statearr_23582;
})();
var statearr_23583_23649 = state_23573__$1;
(statearr_23583_23649[(2)] = null);

(statearr_23583_23649[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23574 === (6))){
var inst_23538 = (state_23573[(7)]);
var state_23573__$1 = state_23573;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23573__$1,(11),inst_23538);
} else {
if((state_val_23574 === (17))){
var inst_23559 = (state_23573[(2)]);
var state_23573__$1 = state_23573;
if(cljs.core.truth_(inst_23559)){
var statearr_23584_23650 = state_23573__$1;
(statearr_23584_23650[(1)] = (19));

} else {
var statearr_23585_23651 = state_23573__$1;
(statearr_23585_23651[(1)] = (20));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23574 === (3))){
var inst_23571 = (state_23573[(2)]);
var state_23573__$1 = state_23573;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23573__$1,inst_23571);
} else {
if((state_val_23574 === (12))){
var inst_23548 = (state_23573[(10)]);
var state_23573__$1 = state_23573;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23573__$1,(14),inst_23548);
} else {
if((state_val_23574 === (2))){
var state_23573__$1 = state_23573;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23573__$1,(4),results);
} else {
if((state_val_23574 === (19))){
var state_23573__$1 = state_23573;
var statearr_23586_23652 = state_23573__$1;
(statearr_23586_23652[(2)] = null);

(statearr_23586_23652[(1)] = (12));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23574 === (11))){
var inst_23548 = (state_23573[(2)]);
var state_23573__$1 = (function (){var statearr_23587 = state_23573;
(statearr_23587[(10)] = inst_23548);

return statearr_23587;
})();
var statearr_23588_23653 = state_23573__$1;
(statearr_23588_23653[(2)] = null);

(statearr_23588_23653[(1)] = (12));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23574 === (9))){
var state_23573__$1 = state_23573;
var statearr_23589_23654 = state_23573__$1;
(statearr_23589_23654[(2)] = null);

(statearr_23589_23654[(1)] = (10));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23574 === (5))){
var state_23573__$1 = state_23573;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23590_23655 = state_23573__$1;
(statearr_23590_23655[(1)] = (8));

} else {
var statearr_23591_23656 = state_23573__$1;
(statearr_23591_23656[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23574 === (14))){
var inst_23553 = (state_23573[(11)]);
var inst_23551 = (state_23573[(8)]);
var inst_23551__$1 = (state_23573[(2)]);
var inst_23552 = (inst_23551__$1 == null);
var inst_23553__$1 = cljs.core.not(inst_23552);
var state_23573__$1 = (function (){var statearr_23592 = state_23573;
(statearr_23592[(11)] = inst_23553__$1);

(statearr_23592[(8)] = inst_23551__$1);

return statearr_23592;
})();
if(inst_23553__$1){
var statearr_23593_23657 = state_23573__$1;
(statearr_23593_23657[(1)] = (15));

} else {
var statearr_23594_23658 = state_23573__$1;
(statearr_23594_23658[(1)] = (16));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23574 === (16))){
var inst_23553 = (state_23573[(11)]);
var state_23573__$1 = state_23573;
var statearr_23595_23659 = state_23573__$1;
(statearr_23595_23659[(2)] = inst_23553);

(statearr_23595_23659[(1)] = (17));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23574 === (10))){
var inst_23545 = (state_23573[(2)]);
var state_23573__$1 = state_23573;
var statearr_23596_23660 = state_23573__$1;
(statearr_23596_23660[(2)] = inst_23545);

(statearr_23596_23660[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23574 === (18))){
var inst_23556 = (state_23573[(2)]);
var state_23573__$1 = state_23573;
var statearr_23597_23661 = state_23573__$1;
(statearr_23597_23661[(2)] = inst_23556);

(statearr_23597_23661[(1)] = (17));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23574 === (8))){
var inst_23542 = cljs.core.async.close_BANG_(to);
var state_23573__$1 = state_23573;
var statearr_23598_23662 = state_23573__$1;
(statearr_23598_23662[(2)] = inst_23542);

(statearr_23598_23662[(1)] = (10));


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
var statearr_23602 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23602[(0)] = state_machine__5839__auto__);

(statearr_23602[(1)] = (1));

return statearr_23602;
});
var state_machine__5839__auto____1 = (function (state_23573){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_23573);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e23603){if((e23603 instanceof Object)){
var ex__5842__auto__ = e23603;
var statearr_23604_23663 = state_23573;
(statearr_23604_23663[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23573);

return cljs.core.constant$keyword$41;
} else {
throw e23603;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__23664 = state_23573;
state_23573 = G__23664;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_23573){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_23573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto__,jobs,results,process,async))
})();
var state__5855__auto__ = (function (){var statearr_23605 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_23605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto__);

return statearr_23605;
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
var c__5853__auto___23787 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___23787,tc,fc){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___23787,tc,fc){
return (function (state_23761){
var state_val_23762 = (state_23761[(1)]);
if((state_val_23762 === (7))){
var inst_23757 = (state_23761[(2)]);
var state_23761__$1 = state_23761;
var statearr_23763_23788 = state_23761__$1;
(statearr_23763_23788[(2)] = inst_23757);

(statearr_23763_23788[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23762 === (1))){
var state_23761__$1 = state_23761;
var statearr_23764_23789 = state_23761__$1;
(statearr_23764_23789[(2)] = null);

(statearr_23764_23789[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23762 === (4))){
var inst_23738 = (state_23761[(7)]);
var inst_23738__$1 = (state_23761[(2)]);
var inst_23739 = (inst_23738__$1 == null);
var state_23761__$1 = (function (){var statearr_23765 = state_23761;
(statearr_23765[(7)] = inst_23738__$1);

return statearr_23765;
})();
if(cljs.core.truth_(inst_23739)){
var statearr_23766_23790 = state_23761__$1;
(statearr_23766_23790[(1)] = (5));

} else {
var statearr_23767_23791 = state_23761__$1;
(statearr_23767_23791[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23762 === (13))){
var state_23761__$1 = state_23761;
var statearr_23768_23792 = state_23761__$1;
(statearr_23768_23792[(2)] = null);

(statearr_23768_23792[(1)] = (14));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23762 === (6))){
var inst_23738 = (state_23761[(7)]);
var inst_23744 = (function (){var G__23769 = inst_23738;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__23769) : p.call(null,G__23769));
})();
var state_23761__$1 = state_23761;
if(cljs.core.truth_(inst_23744)){
var statearr_23770_23793 = state_23761__$1;
(statearr_23770_23793[(1)] = (9));

} else {
var statearr_23771_23794 = state_23761__$1;
(statearr_23771_23794[(1)] = (10));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23762 === (3))){
var inst_23759 = (state_23761[(2)]);
var state_23761__$1 = state_23761;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23761__$1,inst_23759);
} else {
if((state_val_23762 === (12))){
var state_23761__$1 = state_23761;
var statearr_23772_23795 = state_23761__$1;
(statearr_23772_23795[(2)] = null);

(statearr_23772_23795[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23762 === (2))){
var state_23761__$1 = state_23761;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23761__$1,(4),ch);
} else {
if((state_val_23762 === (11))){
var inst_23738 = (state_23761[(7)]);
var inst_23748 = (state_23761[(2)]);
var state_23761__$1 = state_23761;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23761__$1,(8),inst_23748,inst_23738);
} else {
if((state_val_23762 === (9))){
var state_23761__$1 = state_23761;
var statearr_23773_23796 = state_23761__$1;
(statearr_23773_23796[(2)] = tc);

(statearr_23773_23796[(1)] = (11));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23762 === (5))){
var inst_23741 = cljs.core.async.close_BANG_(tc);
var inst_23742 = cljs.core.async.close_BANG_(fc);
var state_23761__$1 = (function (){var statearr_23774 = state_23761;
(statearr_23774[(8)] = inst_23741);

return statearr_23774;
})();
var statearr_23775_23797 = state_23761__$1;
(statearr_23775_23797[(2)] = inst_23742);

(statearr_23775_23797[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23762 === (14))){
var inst_23755 = (state_23761[(2)]);
var state_23761__$1 = state_23761;
var statearr_23776_23798 = state_23761__$1;
(statearr_23776_23798[(2)] = inst_23755);

(statearr_23776_23798[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23762 === (10))){
var state_23761__$1 = state_23761;
var statearr_23777_23799 = state_23761__$1;
(statearr_23777_23799[(2)] = fc);

(statearr_23777_23799[(1)] = (11));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23762 === (8))){
var inst_23750 = (state_23761[(2)]);
var state_23761__$1 = state_23761;
if(cljs.core.truth_(inst_23750)){
var statearr_23778_23800 = state_23761__$1;
(statearr_23778_23800[(1)] = (12));

} else {
var statearr_23779_23801 = state_23761__$1;
(statearr_23779_23801[(1)] = (13));

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
});})(c__5853__auto___23787,tc,fc))
;
return ((function (switch__5838__auto__,c__5853__auto___23787,tc,fc){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_23783 = [null,null,null,null,null,null,null,null,null];
(statearr_23783[(0)] = state_machine__5839__auto__);

(statearr_23783[(1)] = (1));

return statearr_23783;
});
var state_machine__5839__auto____1 = (function (state_23761){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_23761);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e23784){if((e23784 instanceof Object)){
var ex__5842__auto__ = e23784;
var statearr_23785_23802 = state_23761;
(statearr_23785_23802[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23761);

return cljs.core.constant$keyword$41;
} else {
throw e23784;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__23803 = state_23761;
state_23761 = G__23803;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_23761){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_23761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___23787,tc,fc))
})();
var state__5855__auto__ = (function (){var statearr_23786 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_23786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___23787);

return statearr_23786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___23787,tc,fc))
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
return (function (state_23852){
var state_val_23853 = (state_23852[(1)]);
if((state_val_23853 === (7))){
var inst_23848 = (state_23852[(2)]);
var state_23852__$1 = state_23852;
var statearr_23854_23872 = state_23852__$1;
(statearr_23854_23872[(2)] = inst_23848);

(statearr_23854_23872[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23853 === (6))){
var inst_23841 = (state_23852[(7)]);
var inst_23838 = (state_23852[(8)]);
var inst_23845 = (function (){var G__23855 = inst_23838;
var G__23856 = inst_23841;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23855,G__23856) : f.call(null,G__23855,G__23856));
})();
var inst_23838__$1 = inst_23845;
var state_23852__$1 = (function (){var statearr_23857 = state_23852;
(statearr_23857[(8)] = inst_23838__$1);

return statearr_23857;
})();
var statearr_23858_23873 = state_23852__$1;
(statearr_23858_23873[(2)] = null);

(statearr_23858_23873[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23853 === (5))){
var inst_23838 = (state_23852[(8)]);
var state_23852__$1 = state_23852;
var statearr_23859_23874 = state_23852__$1;
(statearr_23859_23874[(2)] = inst_23838);

(statearr_23859_23874[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23853 === (4))){
var inst_23841 = (state_23852[(7)]);
var inst_23841__$1 = (state_23852[(2)]);
var inst_23842 = (inst_23841__$1 == null);
var state_23852__$1 = (function (){var statearr_23860 = state_23852;
(statearr_23860[(7)] = inst_23841__$1);

return statearr_23860;
})();
if(cljs.core.truth_(inst_23842)){
var statearr_23861_23875 = state_23852__$1;
(statearr_23861_23875[(1)] = (5));

} else {
var statearr_23862_23876 = state_23852__$1;
(statearr_23862_23876[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23853 === (3))){
var inst_23850 = (state_23852[(2)]);
var state_23852__$1 = state_23852;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23852__$1,inst_23850);
} else {
if((state_val_23853 === (2))){
var state_23852__$1 = state_23852;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23852__$1,(4),ch);
} else {
if((state_val_23853 === (1))){
var inst_23838 = init;
var state_23852__$1 = (function (){var statearr_23863 = state_23852;
(statearr_23863[(8)] = inst_23838);

return statearr_23863;
})();
var statearr_23864_23877 = state_23852__$1;
(statearr_23864_23877[(2)] = null);

(statearr_23864_23877[(1)] = (2));


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
var statearr_23868 = [null,null,null,null,null,null,null,null,null];
(statearr_23868[(0)] = state_machine__5839__auto__);

(statearr_23868[(1)] = (1));

return statearr_23868;
});
var state_machine__5839__auto____1 = (function (state_23852){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_23852);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e23869){if((e23869 instanceof Object)){
var ex__5842__auto__ = e23869;
var statearr_23870_23878 = state_23852;
(statearr_23870_23878[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23852);

return cljs.core.constant$keyword$41;
} else {
throw e23869;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__23879 = state_23852;
state_23852 = G__23879;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_23852){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_23852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto__))
})();
var state__5855__auto__ = (function (){var statearr_23871 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_23871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto__);

return statearr_23871;
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
return (function (state_23956){
var state_val_23957 = (state_23956[(1)]);
if((state_val_23957 === (7))){
var inst_23938 = (state_23956[(2)]);
var state_23956__$1 = state_23956;
var statearr_23958_23981 = state_23956__$1;
(statearr_23958_23981[(2)] = inst_23938);

(statearr_23958_23981[(1)] = (6));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23957 === (1))){
var inst_23932 = cljs.core.seq(coll);
var inst_23933 = inst_23932;
var state_23956__$1 = (function (){var statearr_23959 = state_23956;
(statearr_23959[(7)] = inst_23933);

return statearr_23959;
})();
var statearr_23960_23982 = state_23956__$1;
(statearr_23960_23982[(2)] = null);

(statearr_23960_23982[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23957 === (4))){
var inst_23933 = (state_23956[(7)]);
var inst_23936 = cljs.core.first(inst_23933);
var state_23956__$1 = state_23956;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23956__$1,(7),ch,inst_23936);
} else {
if((state_val_23957 === (13))){
var inst_23950 = (state_23956[(2)]);
var state_23956__$1 = state_23956;
var statearr_23961_23983 = state_23956__$1;
(statearr_23961_23983[(2)] = inst_23950);

(statearr_23961_23983[(1)] = (10));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23957 === (6))){
var inst_23941 = (state_23956[(2)]);
var state_23956__$1 = state_23956;
if(cljs.core.truth_(inst_23941)){
var statearr_23962_23984 = state_23956__$1;
(statearr_23962_23984[(1)] = (8));

} else {
var statearr_23963_23985 = state_23956__$1;
(statearr_23963_23985[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23957 === (3))){
var inst_23954 = (state_23956[(2)]);
var state_23956__$1 = state_23956;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23956__$1,inst_23954);
} else {
if((state_val_23957 === (12))){
var state_23956__$1 = state_23956;
var statearr_23964_23986 = state_23956__$1;
(statearr_23964_23986[(2)] = null);

(statearr_23964_23986[(1)] = (13));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23957 === (2))){
var inst_23933 = (state_23956[(7)]);
var state_23956__$1 = state_23956;
if(cljs.core.truth_(inst_23933)){
var statearr_23965_23987 = state_23956__$1;
(statearr_23965_23987[(1)] = (4));

} else {
var statearr_23966_23988 = state_23956__$1;
(statearr_23966_23988[(1)] = (5));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23957 === (11))){
var inst_23947 = cljs.core.async.close_BANG_(ch);
var state_23956__$1 = state_23956;
var statearr_23967_23989 = state_23956__$1;
(statearr_23967_23989[(2)] = inst_23947);

(statearr_23967_23989[(1)] = (13));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23957 === (9))){
var state_23956__$1 = state_23956;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23968_23990 = state_23956__$1;
(statearr_23968_23990[(1)] = (11));

} else {
var statearr_23969_23991 = state_23956__$1;
(statearr_23969_23991[(1)] = (12));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23957 === (5))){
var inst_23933 = (state_23956[(7)]);
var state_23956__$1 = state_23956;
var statearr_23970_23992 = state_23956__$1;
(statearr_23970_23992[(2)] = inst_23933);

(statearr_23970_23992[(1)] = (6));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23957 === (10))){
var inst_23952 = (state_23956[(2)]);
var state_23956__$1 = state_23956;
var statearr_23971_23993 = state_23956__$1;
(statearr_23971_23993[(2)] = inst_23952);

(statearr_23971_23993[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23957 === (8))){
var inst_23933 = (state_23956[(7)]);
var inst_23943 = cljs.core.next(inst_23933);
var inst_23933__$1 = inst_23943;
var state_23956__$1 = (function (){var statearr_23972 = state_23956;
(statearr_23972[(7)] = inst_23933__$1);

return statearr_23972;
})();
var statearr_23973_23994 = state_23956__$1;
(statearr_23973_23994[(2)] = null);

(statearr_23973_23994[(1)] = (2));


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
var statearr_23977 = [null,null,null,null,null,null,null,null];
(statearr_23977[(0)] = state_machine__5839__auto__);

(statearr_23977[(1)] = (1));

return statearr_23977;
});
var state_machine__5839__auto____1 = (function (state_23956){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_23956);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e23978){if((e23978 instanceof Object)){
var ex__5842__auto__ = e23978;
var statearr_23979_23995 = state_23956;
(statearr_23979_23995[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23956);

return cljs.core.constant$keyword$41;
} else {
throw e23978;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__23996 = state_23956;
state_23956 = G__23996;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_23956){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_23956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto__))
})();
var state__5855__auto__ = (function (){var statearr_23980 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_23980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto__);

return statearr_23980;
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

cljs.core.async.Mux = (function (){var obj23998 = {};
return obj23998;
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
return (function (){var or__3630__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__24002 = x__4274__auto__;
return goog.typeOf(G__24002);
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


cljs.core.async.Mult = (function (){var obj24004 = {};
return obj24004;
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
return (function (){var or__3630__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__24008 = x__4274__auto__;
return goog.typeOf(G__24008);
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
return (function (){var or__3630__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__24012 = x__4274__auto__;
return goog.typeOf(G__24012);
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
return (function (){var or__3630__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__24016 = x__4274__auto__;
return goog.typeOf(G__24016);
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
var cs = (function (){var G__24246 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24246) : cljs.core.atom.call(null,G__24246));
})();
var m = (function (){
if(typeof cljs.core.async.t24247 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24247 = (function (cs,ch,mult,meta24248){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24248 = meta24248;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24247.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t24247.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t24247.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t24247.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__24250_24475 = self__.cs;
var G__24251_24476 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24250_24475,G__24251_24476) : cljs.core.reset_BANG_.call(null,G__24250_24475,G__24251_24476));

return null;
});})(cs))
;

cljs.core.async.t24247.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24247.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t24247.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24249){
var self__ = this;
var _24249__$1 = this;
return self__.meta24248;
});})(cs))
;

cljs.core.async.t24247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24249,meta24248__$1){
var self__ = this;
var _24249__$1 = this;
return (new cljs.core.async.t24247(self__.cs,self__.ch,self__.mult,meta24248__$1));
});})(cs))
;

cljs.core.async.t24247.cljs$lang$type = true;

cljs.core.async.t24247.cljs$lang$ctorStr = "cljs.core.async/t24247";

cljs.core.async.t24247.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24247");
});})(cs))
;

cljs.core.async.__GT_t24247 = ((function (cs){
return (function __GT_t24247(cs__$1,ch__$1,mult__$1,meta24248){
return (new cljs.core.async.t24247(cs__$1,ch__$1,mult__$1,meta24248));
});})(cs))
;

}

return (new cljs.core.async.t24247(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,397,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,390,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__24252 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24252) : cljs.core.atom.call(null,G__24252));
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
var c__5853__auto___24477 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___24477,cs,m,dchan,dctr,done){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___24477,cs,m,dchan,dctr,done){
return (function (state_24383){
var state_val_24384 = (state_24383[(1)]);
if((state_val_24384 === (7))){
var inst_24379 = (state_24383[(2)]);
var state_24383__$1 = state_24383;
var statearr_24385_24478 = state_24383__$1;
(statearr_24385_24478[(2)] = inst_24379);

(statearr_24385_24478[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (20))){
var inst_24284 = (state_24383[(7)]);
var inst_24294 = cljs.core.first(inst_24284);
var inst_24295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24294,(0),null);
var inst_24296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24294,(1),null);
var state_24383__$1 = (function (){var statearr_24386 = state_24383;
(statearr_24386[(8)] = inst_24295);

return statearr_24386;
})();
if(cljs.core.truth_(inst_24296)){
var statearr_24387_24479 = state_24383__$1;
(statearr_24387_24479[(1)] = (22));

} else {
var statearr_24388_24480 = state_24383__$1;
(statearr_24388_24480[(1)] = (23));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (27))){
var inst_24324 = (state_24383[(9)]);
var inst_24331 = (state_24383[(10)]);
var inst_24255 = (state_24383[(11)]);
var inst_24326 = (state_24383[(12)]);
var inst_24331__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24324,inst_24326);
var inst_24332 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24331__$1,inst_24255,done);
var state_24383__$1 = (function (){var statearr_24389 = state_24383;
(statearr_24389[(10)] = inst_24331__$1);

return statearr_24389;
})();
if(cljs.core.truth_(inst_24332)){
var statearr_24390_24481 = state_24383__$1;
(statearr_24390_24481[(1)] = (30));

} else {
var statearr_24391_24482 = state_24383__$1;
(statearr_24391_24482[(1)] = (31));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (1))){
var state_24383__$1 = state_24383;
var statearr_24392_24483 = state_24383__$1;
(statearr_24392_24483[(2)] = null);

(statearr_24392_24483[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (24))){
var inst_24284 = (state_24383[(7)]);
var inst_24301 = (state_24383[(2)]);
var inst_24302 = cljs.core.next(inst_24284);
var inst_24264 = inst_24302;
var inst_24265 = null;
var inst_24266 = (0);
var inst_24267 = (0);
var state_24383__$1 = (function (){var statearr_24393 = state_24383;
(statearr_24393[(13)] = inst_24301);

(statearr_24393[(14)] = inst_24264);

(statearr_24393[(15)] = inst_24266);

(statearr_24393[(16)] = inst_24267);

(statearr_24393[(17)] = inst_24265);

return statearr_24393;
})();
var statearr_24394_24484 = state_24383__$1;
(statearr_24394_24484[(2)] = null);

(statearr_24394_24484[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (39))){
var state_24383__$1 = state_24383;
var statearr_24398_24485 = state_24383__$1;
(statearr_24398_24485[(2)] = null);

(statearr_24398_24485[(1)] = (41));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (4))){
var inst_24255 = (state_24383[(11)]);
var inst_24255__$1 = (state_24383[(2)]);
var inst_24256 = (inst_24255__$1 == null);
var state_24383__$1 = (function (){var statearr_24399 = state_24383;
(statearr_24399[(11)] = inst_24255__$1);

return statearr_24399;
})();
if(cljs.core.truth_(inst_24256)){
var statearr_24400_24486 = state_24383__$1;
(statearr_24400_24486[(1)] = (5));

} else {
var statearr_24401_24487 = state_24383__$1;
(statearr_24401_24487[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (15))){
var inst_24264 = (state_24383[(14)]);
var inst_24266 = (state_24383[(15)]);
var inst_24267 = (state_24383[(16)]);
var inst_24265 = (state_24383[(17)]);
var inst_24280 = (state_24383[(2)]);
var inst_24281 = (inst_24267 + (1));
var tmp24395 = inst_24264;
var tmp24396 = inst_24266;
var tmp24397 = inst_24265;
var inst_24264__$1 = tmp24395;
var inst_24265__$1 = tmp24397;
var inst_24266__$1 = tmp24396;
var inst_24267__$1 = inst_24281;
var state_24383__$1 = (function (){var statearr_24402 = state_24383;
(statearr_24402[(14)] = inst_24264__$1);

(statearr_24402[(15)] = inst_24266__$1);

(statearr_24402[(16)] = inst_24267__$1);

(statearr_24402[(18)] = inst_24280);

(statearr_24402[(17)] = inst_24265__$1);

return statearr_24402;
})();
var statearr_24403_24488 = state_24383__$1;
(statearr_24403_24488[(2)] = null);

(statearr_24403_24488[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (21))){
var inst_24305 = (state_24383[(2)]);
var state_24383__$1 = state_24383;
var statearr_24407_24489 = state_24383__$1;
(statearr_24407_24489[(2)] = inst_24305);

(statearr_24407_24489[(1)] = (18));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (31))){
var inst_24331 = (state_24383[(10)]);
var inst_24335 = done(null);
var inst_24336 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24331);
var state_24383__$1 = (function (){var statearr_24408 = state_24383;
(statearr_24408[(19)] = inst_24335);

return statearr_24408;
})();
var statearr_24409_24490 = state_24383__$1;
(statearr_24409_24490[(2)] = inst_24336);

(statearr_24409_24490[(1)] = (32));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (32))){
var inst_24324 = (state_24383[(9)]);
var inst_24325 = (state_24383[(20)]);
var inst_24326 = (state_24383[(12)]);
var inst_24323 = (state_24383[(21)]);
var inst_24338 = (state_24383[(2)]);
var inst_24339 = (inst_24326 + (1));
var tmp24404 = inst_24324;
var tmp24405 = inst_24325;
var tmp24406 = inst_24323;
var inst_24323__$1 = tmp24406;
var inst_24324__$1 = tmp24404;
var inst_24325__$1 = tmp24405;
var inst_24326__$1 = inst_24339;
var state_24383__$1 = (function (){var statearr_24410 = state_24383;
(statearr_24410[(9)] = inst_24324__$1);

(statearr_24410[(20)] = inst_24325__$1);

(statearr_24410[(12)] = inst_24326__$1);

(statearr_24410[(21)] = inst_24323__$1);

(statearr_24410[(22)] = inst_24338);

return statearr_24410;
})();
var statearr_24411_24491 = state_24383__$1;
(statearr_24411_24491[(2)] = null);

(statearr_24411_24491[(1)] = (25));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (40))){
var inst_24351 = (state_24383[(23)]);
var inst_24355 = done(null);
var inst_24356 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24351);
var state_24383__$1 = (function (){var statearr_24412 = state_24383;
(statearr_24412[(24)] = inst_24355);

return statearr_24412;
})();
var statearr_24413_24492 = state_24383__$1;
(statearr_24413_24492[(2)] = inst_24356);

(statearr_24413_24492[(1)] = (41));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (33))){
var inst_24342 = (state_24383[(25)]);
var inst_24344 = cljs.core.chunked_seq_QMARK_(inst_24342);
var state_24383__$1 = state_24383;
if(inst_24344){
var statearr_24414_24493 = state_24383__$1;
(statearr_24414_24493[(1)] = (36));

} else {
var statearr_24415_24494 = state_24383__$1;
(statearr_24415_24494[(1)] = (37));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (13))){
var inst_24274 = (state_24383[(26)]);
var inst_24277 = cljs.core.async.close_BANG_(inst_24274);
var state_24383__$1 = state_24383;
var statearr_24416_24495 = state_24383__$1;
(statearr_24416_24495[(2)] = inst_24277);

(statearr_24416_24495[(1)] = (15));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (22))){
var inst_24295 = (state_24383[(8)]);
var inst_24298 = cljs.core.async.close_BANG_(inst_24295);
var state_24383__$1 = state_24383;
var statearr_24417_24496 = state_24383__$1;
(statearr_24417_24496[(2)] = inst_24298);

(statearr_24417_24496[(1)] = (24));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (36))){
var inst_24342 = (state_24383[(25)]);
var inst_24346 = cljs.core.chunk_first(inst_24342);
var inst_24347 = cljs.core.chunk_rest(inst_24342);
var inst_24348 = cljs.core.count(inst_24346);
var inst_24323 = inst_24347;
var inst_24324 = inst_24346;
var inst_24325 = inst_24348;
var inst_24326 = (0);
var state_24383__$1 = (function (){var statearr_24418 = state_24383;
(statearr_24418[(9)] = inst_24324);

(statearr_24418[(20)] = inst_24325);

(statearr_24418[(12)] = inst_24326);

(statearr_24418[(21)] = inst_24323);

return statearr_24418;
})();
var statearr_24419_24497 = state_24383__$1;
(statearr_24419_24497[(2)] = null);

(statearr_24419_24497[(1)] = (25));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (41))){
var inst_24342 = (state_24383[(25)]);
var inst_24358 = (state_24383[(2)]);
var inst_24359 = cljs.core.next(inst_24342);
var inst_24323 = inst_24359;
var inst_24324 = null;
var inst_24325 = (0);
var inst_24326 = (0);
var state_24383__$1 = (function (){var statearr_24420 = state_24383;
(statearr_24420[(9)] = inst_24324);

(statearr_24420[(20)] = inst_24325);

(statearr_24420[(12)] = inst_24326);

(statearr_24420[(27)] = inst_24358);

(statearr_24420[(21)] = inst_24323);

return statearr_24420;
})();
var statearr_24421_24498 = state_24383__$1;
(statearr_24421_24498[(2)] = null);

(statearr_24421_24498[(1)] = (25));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (43))){
var state_24383__$1 = state_24383;
var statearr_24422_24499 = state_24383__$1;
(statearr_24422_24499[(2)] = null);

(statearr_24422_24499[(1)] = (44));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (29))){
var inst_24367 = (state_24383[(2)]);
var state_24383__$1 = state_24383;
var statearr_24423_24500 = state_24383__$1;
(statearr_24423_24500[(2)] = inst_24367);

(statearr_24423_24500[(1)] = (26));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (44))){
var inst_24376 = (state_24383[(2)]);
var state_24383__$1 = (function (){var statearr_24424 = state_24383;
(statearr_24424[(28)] = inst_24376);

return statearr_24424;
})();
var statearr_24425_24501 = state_24383__$1;
(statearr_24425_24501[(2)] = null);

(statearr_24425_24501[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (6))){
var inst_24315 = (state_24383[(29)]);
var inst_24314 = (function (){var G__24426 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24426) : cljs.core.deref.call(null,G__24426));
})();
var inst_24315__$1 = cljs.core.keys(inst_24314);
var inst_24316 = cljs.core.count(inst_24315__$1);
var inst_24317 = (function (){var G__24427 = dctr;
var G__24428 = inst_24316;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24427,G__24428) : cljs.core.reset_BANG_.call(null,G__24427,G__24428));
})();
var inst_24322 = cljs.core.seq(inst_24315__$1);
var inst_24323 = inst_24322;
var inst_24324 = null;
var inst_24325 = (0);
var inst_24326 = (0);
var state_24383__$1 = (function (){var statearr_24429 = state_24383;
(statearr_24429[(9)] = inst_24324);

(statearr_24429[(20)] = inst_24325);

(statearr_24429[(12)] = inst_24326);

(statearr_24429[(30)] = inst_24317);

(statearr_24429[(21)] = inst_24323);

(statearr_24429[(29)] = inst_24315__$1);

return statearr_24429;
})();
var statearr_24430_24502 = state_24383__$1;
(statearr_24430_24502[(2)] = null);

(statearr_24430_24502[(1)] = (25));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (28))){
var inst_24323 = (state_24383[(21)]);
var inst_24342 = (state_24383[(25)]);
var inst_24342__$1 = cljs.core.seq(inst_24323);
var state_24383__$1 = (function (){var statearr_24431 = state_24383;
(statearr_24431[(25)] = inst_24342__$1);

return statearr_24431;
})();
if(inst_24342__$1){
var statearr_24432_24503 = state_24383__$1;
(statearr_24432_24503[(1)] = (33));

} else {
var statearr_24433_24504 = state_24383__$1;
(statearr_24433_24504[(1)] = (34));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (25))){
var inst_24325 = (state_24383[(20)]);
var inst_24326 = (state_24383[(12)]);
var inst_24328 = (inst_24326 < inst_24325);
var inst_24329 = inst_24328;
var state_24383__$1 = state_24383;
if(cljs.core.truth_(inst_24329)){
var statearr_24434_24505 = state_24383__$1;
(statearr_24434_24505[(1)] = (27));

} else {
var statearr_24435_24506 = state_24383__$1;
(statearr_24435_24506[(1)] = (28));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (34))){
var state_24383__$1 = state_24383;
var statearr_24436_24507 = state_24383__$1;
(statearr_24436_24507[(2)] = null);

(statearr_24436_24507[(1)] = (35));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (17))){
var state_24383__$1 = state_24383;
var statearr_24437_24508 = state_24383__$1;
(statearr_24437_24508[(2)] = null);

(statearr_24437_24508[(1)] = (18));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (3))){
var inst_24381 = (state_24383[(2)]);
var state_24383__$1 = state_24383;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24383__$1,inst_24381);
} else {
if((state_val_24384 === (12))){
var inst_24310 = (state_24383[(2)]);
var state_24383__$1 = state_24383;
var statearr_24438_24509 = state_24383__$1;
(statearr_24438_24509[(2)] = inst_24310);

(statearr_24438_24509[(1)] = (9));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (2))){
var state_24383__$1 = state_24383;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24383__$1,(4),ch);
} else {
if((state_val_24384 === (23))){
var state_24383__$1 = state_24383;
var statearr_24439_24510 = state_24383__$1;
(statearr_24439_24510[(2)] = null);

(statearr_24439_24510[(1)] = (24));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (35))){
var inst_24365 = (state_24383[(2)]);
var state_24383__$1 = state_24383;
var statearr_24440_24511 = state_24383__$1;
(statearr_24440_24511[(2)] = inst_24365);

(statearr_24440_24511[(1)] = (29));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (19))){
var inst_24284 = (state_24383[(7)]);
var inst_24288 = cljs.core.chunk_first(inst_24284);
var inst_24289 = cljs.core.chunk_rest(inst_24284);
var inst_24290 = cljs.core.count(inst_24288);
var inst_24264 = inst_24289;
var inst_24265 = inst_24288;
var inst_24266 = inst_24290;
var inst_24267 = (0);
var state_24383__$1 = (function (){var statearr_24441 = state_24383;
(statearr_24441[(14)] = inst_24264);

(statearr_24441[(15)] = inst_24266);

(statearr_24441[(16)] = inst_24267);

(statearr_24441[(17)] = inst_24265);

return statearr_24441;
})();
var statearr_24442_24512 = state_24383__$1;
(statearr_24442_24512[(2)] = null);

(statearr_24442_24512[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (11))){
var inst_24264 = (state_24383[(14)]);
var inst_24284 = (state_24383[(7)]);
var inst_24284__$1 = cljs.core.seq(inst_24264);
var state_24383__$1 = (function (){var statearr_24443 = state_24383;
(statearr_24443[(7)] = inst_24284__$1);

return statearr_24443;
})();
if(inst_24284__$1){
var statearr_24444_24513 = state_24383__$1;
(statearr_24444_24513[(1)] = (16));

} else {
var statearr_24445_24514 = state_24383__$1;
(statearr_24445_24514[(1)] = (17));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (9))){
var inst_24312 = (state_24383[(2)]);
var state_24383__$1 = state_24383;
var statearr_24446_24515 = state_24383__$1;
(statearr_24446_24515[(2)] = inst_24312);

(statearr_24446_24515[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (5))){
var inst_24262 = (function (){var G__24447 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24447) : cljs.core.deref.call(null,G__24447));
})();
var inst_24263 = cljs.core.seq(inst_24262);
var inst_24264 = inst_24263;
var inst_24265 = null;
var inst_24266 = (0);
var inst_24267 = (0);
var state_24383__$1 = (function (){var statearr_24448 = state_24383;
(statearr_24448[(14)] = inst_24264);

(statearr_24448[(15)] = inst_24266);

(statearr_24448[(16)] = inst_24267);

(statearr_24448[(17)] = inst_24265);

return statearr_24448;
})();
var statearr_24449_24516 = state_24383__$1;
(statearr_24449_24516[(2)] = null);

(statearr_24449_24516[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (14))){
var state_24383__$1 = state_24383;
var statearr_24450_24517 = state_24383__$1;
(statearr_24450_24517[(2)] = null);

(statearr_24450_24517[(1)] = (15));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (45))){
var inst_24373 = (state_24383[(2)]);
var state_24383__$1 = state_24383;
var statearr_24451_24518 = state_24383__$1;
(statearr_24451_24518[(2)] = inst_24373);

(statearr_24451_24518[(1)] = (44));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (26))){
var inst_24315 = (state_24383[(29)]);
var inst_24369 = (state_24383[(2)]);
var inst_24370 = cljs.core.seq(inst_24315);
var state_24383__$1 = (function (){var statearr_24452 = state_24383;
(statearr_24452[(31)] = inst_24369);

return statearr_24452;
})();
if(inst_24370){
var statearr_24453_24519 = state_24383__$1;
(statearr_24453_24519[(1)] = (42));

} else {
var statearr_24454_24520 = state_24383__$1;
(statearr_24454_24520[(1)] = (43));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (16))){
var inst_24284 = (state_24383[(7)]);
var inst_24286 = cljs.core.chunked_seq_QMARK_(inst_24284);
var state_24383__$1 = state_24383;
if(inst_24286){
var statearr_24455_24521 = state_24383__$1;
(statearr_24455_24521[(1)] = (19));

} else {
var statearr_24456_24522 = state_24383__$1;
(statearr_24456_24522[(1)] = (20));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (38))){
var inst_24362 = (state_24383[(2)]);
var state_24383__$1 = state_24383;
var statearr_24457_24523 = state_24383__$1;
(statearr_24457_24523[(2)] = inst_24362);

(statearr_24457_24523[(1)] = (35));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (30))){
var state_24383__$1 = state_24383;
var statearr_24458_24524 = state_24383__$1;
(statearr_24458_24524[(2)] = null);

(statearr_24458_24524[(1)] = (32));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (10))){
var inst_24267 = (state_24383[(16)]);
var inst_24265 = (state_24383[(17)]);
var inst_24273 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24265,inst_24267);
var inst_24274 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24273,(0),null);
var inst_24275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24273,(1),null);
var state_24383__$1 = (function (){var statearr_24459 = state_24383;
(statearr_24459[(26)] = inst_24274);

return statearr_24459;
})();
if(cljs.core.truth_(inst_24275)){
var statearr_24460_24525 = state_24383__$1;
(statearr_24460_24525[(1)] = (13));

} else {
var statearr_24461_24526 = state_24383__$1;
(statearr_24461_24526[(1)] = (14));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (18))){
var inst_24308 = (state_24383[(2)]);
var state_24383__$1 = state_24383;
var statearr_24462_24527 = state_24383__$1;
(statearr_24462_24527[(2)] = inst_24308);

(statearr_24462_24527[(1)] = (12));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (42))){
var state_24383__$1 = state_24383;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24383__$1,(45),dchan);
} else {
if((state_val_24384 === (37))){
var inst_24255 = (state_24383[(11)]);
var inst_24351 = (state_24383[(23)]);
var inst_24342 = (state_24383[(25)]);
var inst_24351__$1 = cljs.core.first(inst_24342);
var inst_24352 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24351__$1,inst_24255,done);
var state_24383__$1 = (function (){var statearr_24463 = state_24383;
(statearr_24463[(23)] = inst_24351__$1);

return statearr_24463;
})();
if(cljs.core.truth_(inst_24352)){
var statearr_24464_24528 = state_24383__$1;
(statearr_24464_24528[(1)] = (39));

} else {
var statearr_24465_24529 = state_24383__$1;
(statearr_24465_24529[(1)] = (40));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24384 === (8))){
var inst_24266 = (state_24383[(15)]);
var inst_24267 = (state_24383[(16)]);
var inst_24269 = (inst_24267 < inst_24266);
var inst_24270 = inst_24269;
var state_24383__$1 = state_24383;
if(cljs.core.truth_(inst_24270)){
var statearr_24466_24530 = state_24383__$1;
(statearr_24466_24530[(1)] = (10));

} else {
var statearr_24467_24531 = state_24383__$1;
(statearr_24467_24531[(1)] = (11));

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
});})(c__5853__auto___24477,cs,m,dchan,dctr,done))
;
return ((function (switch__5838__auto__,c__5853__auto___24477,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_24471 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24471[(0)] = state_machine__5839__auto__);

(statearr_24471[(1)] = (1));

return statearr_24471;
});
var state_machine__5839__auto____1 = (function (state_24383){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_24383);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e24472){if((e24472 instanceof Object)){
var ex__5842__auto__ = e24472;
var statearr_24473_24532 = state_24383;
(statearr_24473_24532[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24383);

return cljs.core.constant$keyword$41;
} else {
throw e24472;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__24533 = state_24383;
state_24383 = G__24533;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_24383){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_24383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___24477,cs,m,dchan,dctr,done))
})();
var state__5855__auto__ = (function (){var statearr_24474 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_24474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___24477);

return statearr_24474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___24477,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj24538 = {};
return obj24538;
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
return (function (){var or__3630__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__24542 = x__4274__auto__;
return goog.typeOf(G__24542);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__24546 = x__4274__auto__;
return goog.typeOf(G__24546);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__24550 = x__4274__auto__;
return goog.typeOf(G__24550);
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
return (function (){var or__3630__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__24554 = x__4274__auto__;
return goog.typeOf(G__24554);
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
return (function (){var or__3630__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__24558 = x__4274__auto__;
return goog.typeOf(G__24558);
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__24559){
var map__24565 = p__24559;
var map__24565__$1 = ((cljs.core.seq_QMARK_(map__24565))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24565):map__24565);
var opts = map__24565__$1;
var statearr_24566_24570 = state;
(statearr_24566_24570[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__24565,map__24565__$1,opts){
return (function (val){
var statearr_24567_24571 = state;
(statearr_24567_24571[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__24565,map__24565__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_24568_24572 = state;
(statearr_24568_24572[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__24569 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24569) : cljs.core.deref.call(null,G__24569));
})());


return cljs.core.constant$keyword$41;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__24559 = null;
if (arguments.length > 3) {
  p__24559 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__24559);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__24573){
var state = cljs.core.first(arglist__24573);
arglist__24573 = cljs.core.next(arglist__24573);
var cont_block = cljs.core.first(arglist__24573);
arglist__24573 = cljs.core.next(arglist__24573);
var ports = cljs.core.first(arglist__24573);
var p__24559 = cljs.core.rest(arglist__24573);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__24559);
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
var cs = (function (){var G__24707 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24707) : cljs.core.atom.call(null,G__24707));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$50,null,cljs.core.constant$keyword$51,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$52);
var solo_mode = (function (){var G__24708 = cljs.core.constant$keyword$51;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24708) : cljs.core.atom.call(null,G__24708));
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
if(cljs.core.truth_((function (){var G__24709 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__24709) : attr.call(null,G__24709));
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
var chs = (function (){var G__24710 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24710) : cljs.core.deref.call(null,G__24710));
})();
var mode = (function (){var G__24711 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24711) : cljs.core.deref.call(null,G__24711));
})();
var solos = pick(cljs.core.constant$keyword$52,chs);
var pauses = pick(cljs.core.constant$keyword$50,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$53,solos,cljs.core.constant$keyword$54,pick(cljs.core.constant$keyword$51,chs),cljs.core.constant$keyword$55,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$50)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t24712 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24712 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24713){
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
this.meta24713 = meta24713;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24712.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t24712.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24712.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24712.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__24715_24840 = self__.cs;
var G__24716_24841 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24715_24840,G__24716_24841) : cljs.core.reset_BANG_.call(null,G__24715_24840,G__24716_24841));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24712.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24712.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__24717 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__24717) : self__.solo_modes.call(null,G__24717));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__24718_24842 = self__.solo_mode;
var G__24719_24843 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24718_24842,G__24719_24843) : cljs.core.reset_BANG_.call(null,G__24718_24842,G__24719_24843));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24712.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24712.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24712.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24714){
var self__ = this;
var _24714__$1 = this;
return self__.meta24713;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24714,meta24713__$1){
var self__ = this;
var _24714__$1 = this;
return (new cljs.core.async.t24712(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24713__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24712.cljs$lang$type = true;

cljs.core.async.t24712.cljs$lang$ctorStr = "cljs.core.async/t24712";

cljs.core.async.t24712.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24712");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t24712 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24712(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24713){
return (new cljs.core.async.t24712(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24713));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t24712(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,25,cljs.core.constant$keyword$9,510,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,499,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
;
var c__5853__auto___24844 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___24844,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___24844,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24791){
var state_val_24792 = (state_24791[(1)]);
if((state_val_24792 === (7))){
var inst_24733 = (state_24791[(7)]);
var inst_24738 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24733);
var state_24791__$1 = state_24791;
var statearr_24793_24845 = state_24791__$1;
(statearr_24793_24845[(2)] = inst_24738);

(statearr_24793_24845[(1)] = (9));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24792 === (20))){
var inst_24748 = (state_24791[(8)]);
var state_24791__$1 = state_24791;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24791__$1,(23),out,inst_24748);
} else {
if((state_val_24792 === (1))){
var inst_24723 = (state_24791[(9)]);
var inst_24723__$1 = calc_state();
var inst_24724 = cljs.core.seq_QMARK_(inst_24723__$1);
var state_24791__$1 = (function (){var statearr_24794 = state_24791;
(statearr_24794[(9)] = inst_24723__$1);

return statearr_24794;
})();
if(inst_24724){
var statearr_24795_24846 = state_24791__$1;
(statearr_24795_24846[(1)] = (2));

} else {
var statearr_24796_24847 = state_24791__$1;
(statearr_24796_24847[(1)] = (3));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24792 === (24))){
var inst_24741 = (state_24791[(10)]);
var inst_24733 = inst_24741;
var state_24791__$1 = (function (){var statearr_24797 = state_24791;
(statearr_24797[(7)] = inst_24733);

return statearr_24797;
})();
var statearr_24798_24848 = state_24791__$1;
(statearr_24798_24848[(2)] = null);

(statearr_24798_24848[(1)] = (5));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24792 === (4))){
var inst_24723 = (state_24791[(9)]);
var inst_24729 = (state_24791[(2)]);
var inst_24730 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24729,cljs.core.constant$keyword$55);
var inst_24731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24729,cljs.core.constant$keyword$54);
var inst_24732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24729,cljs.core.constant$keyword$53);
var inst_24733 = inst_24723;
var state_24791__$1 = (function (){var statearr_24799 = state_24791;
(statearr_24799[(11)] = inst_24731);

(statearr_24799[(7)] = inst_24733);

(statearr_24799[(12)] = inst_24732);

(statearr_24799[(13)] = inst_24730);

return statearr_24799;
})();
var statearr_24800_24849 = state_24791__$1;
(statearr_24800_24849[(2)] = null);

(statearr_24800_24849[(1)] = (5));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24792 === (15))){
var state_24791__$1 = state_24791;
var statearr_24801_24850 = state_24791__$1;
(statearr_24801_24850[(2)] = null);

(statearr_24801_24850[(1)] = (16));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24792 === (21))){
var inst_24741 = (state_24791[(10)]);
var inst_24733 = inst_24741;
var state_24791__$1 = (function (){var statearr_24802 = state_24791;
(statearr_24802[(7)] = inst_24733);

return statearr_24802;
})();
var statearr_24803_24851 = state_24791__$1;
(statearr_24803_24851[(2)] = null);

(statearr_24803_24851[(1)] = (5));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24792 === (13))){
var inst_24787 = (state_24791[(2)]);
var state_24791__$1 = state_24791;
var statearr_24804_24852 = state_24791__$1;
(statearr_24804_24852[(2)] = inst_24787);

(statearr_24804_24852[(1)] = (6));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24792 === (22))){
var inst_24785 = (state_24791[(2)]);
var state_24791__$1 = state_24791;
var statearr_24805_24853 = state_24791__$1;
(statearr_24805_24853[(2)] = inst_24785);

(statearr_24805_24853[(1)] = (13));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24792 === (6))){
var inst_24789 = (state_24791[(2)]);
var state_24791__$1 = state_24791;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24791__$1,inst_24789);
} else {
if((state_val_24792 === (25))){
var state_24791__$1 = state_24791;
var statearr_24806_24854 = state_24791__$1;
(statearr_24806_24854[(2)] = null);

(statearr_24806_24854[(1)] = (26));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24792 === (17))){
var inst_24764 = (state_24791[(14)]);
var state_24791__$1 = state_24791;
var statearr_24807_24855 = state_24791__$1;
(statearr_24807_24855[(2)] = inst_24764);

(statearr_24807_24855[(1)] = (19));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24792 === (3))){
var inst_24723 = (state_24791[(9)]);
var state_24791__$1 = state_24791;
var statearr_24808_24856 = state_24791__$1;
(statearr_24808_24856[(2)] = inst_24723);

(statearr_24808_24856[(1)] = (4));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24792 === (12))){
var inst_24764 = (state_24791[(14)]);
var inst_24744 = (state_24791[(15)]);
var inst_24749 = (state_24791[(16)]);
var inst_24764__$1 = (function (){var G__24809 = inst_24749;
return (inst_24744.cljs$core$IFn$_invoke$arity$1 ? inst_24744.cljs$core$IFn$_invoke$arity$1(G__24809) : inst_24744.call(null,G__24809));
})();
var state_24791__$1 = (function (){var statearr_24810 = state_24791;
(statearr_24810[(14)] = inst_24764__$1);

return statearr_24810;
})();
if(cljs.core.truth_(inst_24764__$1)){
var statearr_24811_24857 = state_24791__$1;
(statearr_24811_24857[(1)] = (17));

} else {
var statearr_24812_24858 = state_24791__$1;
(statearr_24812_24858[(1)] = (18));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24792 === (2))){
var inst_24723 = (state_24791[(9)]);
var inst_24726 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24723);
var state_24791__$1 = state_24791;
var statearr_24813_24859 = state_24791__$1;
(statearr_24813_24859[(2)] = inst_24726);

(statearr_24813_24859[(1)] = (4));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24792 === (23))){
var inst_24776 = (state_24791[(2)]);
var state_24791__$1 = state_24791;
if(cljs.core.truth_(inst_24776)){
var statearr_24814_24860 = state_24791__$1;
(statearr_24814_24860[(1)] = (24));

} else {
var statearr_24815_24861 = state_24791__$1;
(statearr_24815_24861[(1)] = (25));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24792 === (19))){
var inst_24773 = (state_24791[(2)]);
var state_24791__$1 = state_24791;
if(cljs.core.truth_(inst_24773)){
var statearr_24816_24862 = state_24791__$1;
(statearr_24816_24862[(1)] = (20));

} else {
var statearr_24817_24863 = state_24791__$1;
(statearr_24817_24863[(1)] = (21));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24792 === (11))){
var inst_24748 = (state_24791[(8)]);
var inst_24754 = (inst_24748 == null);
var state_24791__$1 = state_24791;
if(cljs.core.truth_(inst_24754)){
var statearr_24818_24864 = state_24791__$1;
(statearr_24818_24864[(1)] = (14));

} else {
var statearr_24819_24865 = state_24791__$1;
(statearr_24819_24865[(1)] = (15));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24792 === (9))){
var inst_24741 = (state_24791[(10)]);
var inst_24741__$1 = (state_24791[(2)]);
var inst_24742 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24741__$1,cljs.core.constant$keyword$55);
var inst_24743 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24741__$1,cljs.core.constant$keyword$54);
var inst_24744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24741__$1,cljs.core.constant$keyword$53);
var state_24791__$1 = (function (){var statearr_24820 = state_24791;
(statearr_24820[(10)] = inst_24741__$1);

(statearr_24820[(17)] = inst_24743);

(statearr_24820[(15)] = inst_24744);

return statearr_24820;
})();
return cljs.core.async.ioc_alts_BANG_(state_24791__$1,(10),inst_24742);
} else {
if((state_val_24792 === (5))){
var inst_24733 = (state_24791[(7)]);
var inst_24736 = cljs.core.seq_QMARK_(inst_24733);
var state_24791__$1 = state_24791;
if(inst_24736){
var statearr_24821_24866 = state_24791__$1;
(statearr_24821_24866[(1)] = (7));

} else {
var statearr_24822_24867 = state_24791__$1;
(statearr_24822_24867[(1)] = (8));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24792 === (14))){
var inst_24749 = (state_24791[(16)]);
var inst_24756 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_24749);
var state_24791__$1 = state_24791;
var statearr_24823_24868 = state_24791__$1;
(statearr_24823_24868[(2)] = inst_24756);

(statearr_24823_24868[(1)] = (16));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24792 === (26))){
var inst_24781 = (state_24791[(2)]);
var state_24791__$1 = state_24791;
var statearr_24824_24869 = state_24791__$1;
(statearr_24824_24869[(2)] = inst_24781);

(statearr_24824_24869[(1)] = (22));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24792 === (16))){
var inst_24759 = (state_24791[(2)]);
var inst_24760 = calc_state();
var inst_24733 = inst_24760;
var state_24791__$1 = (function (){var statearr_24825 = state_24791;
(statearr_24825[(18)] = inst_24759);

(statearr_24825[(7)] = inst_24733);

return statearr_24825;
})();
var statearr_24826_24870 = state_24791__$1;
(statearr_24826_24870[(2)] = null);

(statearr_24826_24870[(1)] = (5));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24792 === (10))){
var inst_24748 = (state_24791[(8)]);
var inst_24749 = (state_24791[(16)]);
var inst_24747 = (state_24791[(2)]);
var inst_24748__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24747,(0),null);
var inst_24749__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24747,(1),null);
var inst_24750 = (inst_24748__$1 == null);
var inst_24751 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24749__$1,change);
var inst_24752 = (inst_24750) || (inst_24751);
var state_24791__$1 = (function (){var statearr_24827 = state_24791;
(statearr_24827[(8)] = inst_24748__$1);

(statearr_24827[(16)] = inst_24749__$1);

return statearr_24827;
})();
if(cljs.core.truth_(inst_24752)){
var statearr_24828_24871 = state_24791__$1;
(statearr_24828_24871[(1)] = (11));

} else {
var statearr_24829_24872 = state_24791__$1;
(statearr_24829_24872[(1)] = (12));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24792 === (18))){
var inst_24743 = (state_24791[(17)]);
var inst_24744 = (state_24791[(15)]);
var inst_24749 = (state_24791[(16)]);
var inst_24768 = cljs.core.empty_QMARK_(inst_24744);
var inst_24769 = (function (){var G__24830 = inst_24749;
return (inst_24743.cljs$core$IFn$_invoke$arity$1 ? inst_24743.cljs$core$IFn$_invoke$arity$1(G__24830) : inst_24743.call(null,G__24830));
})();
var inst_24770 = cljs.core.not(inst_24769);
var inst_24771 = (inst_24768) && (inst_24770);
var state_24791__$1 = state_24791;
var statearr_24831_24873 = state_24791__$1;
(statearr_24831_24873[(2)] = inst_24771);

(statearr_24831_24873[(1)] = (19));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24792 === (8))){
var inst_24733 = (state_24791[(7)]);
var state_24791__$1 = state_24791;
var statearr_24832_24874 = state_24791__$1;
(statearr_24832_24874[(2)] = inst_24733);

(statearr_24832_24874[(1)] = (9));


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
});})(c__5853__auto___24844,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__5838__auto__,c__5853__auto___24844,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_24836 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24836[(0)] = state_machine__5839__auto__);

(statearr_24836[(1)] = (1));

return statearr_24836;
});
var state_machine__5839__auto____1 = (function (state_24791){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_24791);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e24837){if((e24837 instanceof Object)){
var ex__5842__auto__ = e24837;
var statearr_24838_24875 = state_24791;
(statearr_24838_24875[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24791);

return cljs.core.constant$keyword$41;
} else {
throw e24837;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__24876 = state_24791;
state_24791 = G__24876;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_24791){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_24791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___24844,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__5855__auto__ = (function (){var statearr_24839 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_24839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___24844);

return statearr_24839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___24844,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj24878 = {};
return obj24878;
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
return (function (){var or__3630__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__24882 = x__4274__auto__;
return goog.typeOf(G__24882);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__24886 = x__4274__auto__;
return goog.typeOf(G__24886);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__24892 = x__4274__auto__;
return goog.typeOf(G__24892);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__24894 = x__4274__auto__;
return goog.typeOf(G__24894);
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
var mults = (function (){var G__25033 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25033) : cljs.core.atom.call(null,G__25033));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__3630__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__25035 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25035) : cljs.core.deref.call(null,G__25035));
})(),topic);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3630__auto__,mults){
return (function (p1__24895_SHARP_){
if(cljs.core.truth_((function (){var G__25036 = topic;
return (p1__24895_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24895_SHARP_.cljs$core$IFn$_invoke$arity$1(G__25036) : p1__24895_SHARP_.call(null,G__25036));
})())){
return p1__24895_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24895_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__25037 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__25037) : buf_fn.call(null,G__25037));
})())));
}
});})(or__3630__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t25038 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25038 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25039){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25039 = meta25039;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25038.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t25038.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__25041 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__25041) : self__.ensure_mult.call(null,G__25041));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t25038.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__25042 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25042) : cljs.core.deref.call(null,G__25042));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t25038.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25043 = self__.mults;
var G__25044 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25043,G__25044) : cljs.core.reset_BANG_.call(null,G__25043,G__25044));
});})(mults,ensure_mult))
;

cljs.core.async.t25038.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t25038.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25038.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t25038.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25040){
var self__ = this;
var _25040__$1 = this;
return self__.meta25039;
});})(mults,ensure_mult))
;

cljs.core.async.t25038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25040,meta25039__$1){
var self__ = this;
var _25040__$1 = this;
return (new cljs.core.async.t25038(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25039__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t25038.cljs$lang$type = true;

cljs.core.async.t25038.cljs$lang$ctorStr = "cljs.core.async/t25038";

cljs.core.async.t25038.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25038");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t25038 = ((function (mults,ensure_mult){
return (function __GT_t25038(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25039){
return (new cljs.core.async.t25038(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25039));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t25038(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,65,cljs.core.constant$keyword$9,603,cljs.core.constant$keyword$10,14,cljs.core.constant$keyword$11,591,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
;
var c__5853__auto___25167 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___25167,mults,ensure_mult,p){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___25167,mults,ensure_mult,p){
return (function (state_25116){
var state_val_25117 = (state_25116[(1)]);
if((state_val_25117 === (7))){
var inst_25112 = (state_25116[(2)]);
var state_25116__$1 = state_25116;
var statearr_25118_25168 = state_25116__$1;
(statearr_25118_25168[(2)] = inst_25112);

(statearr_25118_25168[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25117 === (20))){
var state_25116__$1 = state_25116;
var statearr_25119_25169 = state_25116__$1;
(statearr_25119_25169[(2)] = null);

(statearr_25119_25169[(1)] = (21));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25117 === (1))){
var state_25116__$1 = state_25116;
var statearr_25120_25170 = state_25116__$1;
(statearr_25120_25170[(2)] = null);

(statearr_25120_25170[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25117 === (24))){
var inst_25095 = (state_25116[(7)]);
var inst_25104 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25095);
var state_25116__$1 = state_25116;
var statearr_25121_25171 = state_25116__$1;
(statearr_25121_25171[(2)] = inst_25104);

(statearr_25121_25171[(1)] = (25));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25117 === (4))){
var inst_25047 = (state_25116[(8)]);
var inst_25047__$1 = (state_25116[(2)]);
var inst_25048 = (inst_25047__$1 == null);
var state_25116__$1 = (function (){var statearr_25122 = state_25116;
(statearr_25122[(8)] = inst_25047__$1);

return statearr_25122;
})();
if(cljs.core.truth_(inst_25048)){
var statearr_25123_25172 = state_25116__$1;
(statearr_25123_25172[(1)] = (5));

} else {
var statearr_25124_25173 = state_25116__$1;
(statearr_25124_25173[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25117 === (15))){
var inst_25089 = (state_25116[(2)]);
var state_25116__$1 = state_25116;
var statearr_25125_25174 = state_25116__$1;
(statearr_25125_25174[(2)] = inst_25089);

(statearr_25125_25174[(1)] = (12));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25117 === (21))){
var inst_25109 = (state_25116[(2)]);
var state_25116__$1 = (function (){var statearr_25126 = state_25116;
(statearr_25126[(9)] = inst_25109);

return statearr_25126;
})();
var statearr_25127_25175 = state_25116__$1;
(statearr_25127_25175[(2)] = null);

(statearr_25127_25175[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25117 === (13))){
var inst_25071 = (state_25116[(10)]);
var inst_25073 = cljs.core.chunked_seq_QMARK_(inst_25071);
var state_25116__$1 = state_25116;
if(inst_25073){
var statearr_25128_25176 = state_25116__$1;
(statearr_25128_25176[(1)] = (16));

} else {
var statearr_25129_25177 = state_25116__$1;
(statearr_25129_25177[(1)] = (17));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25117 === (22))){
var inst_25101 = (state_25116[(2)]);
var state_25116__$1 = state_25116;
if(cljs.core.truth_(inst_25101)){
var statearr_25130_25178 = state_25116__$1;
(statearr_25130_25178[(1)] = (23));

} else {
var statearr_25131_25179 = state_25116__$1;
(statearr_25131_25179[(1)] = (24));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25117 === (6))){
var inst_25047 = (state_25116[(8)]);
var inst_25097 = (state_25116[(11)]);
var inst_25095 = (state_25116[(7)]);
var inst_25095__$1 = (function (){var G__25132 = inst_25047;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__25132) : topic_fn.call(null,G__25132));
})();
var inst_25096 = (function (){var G__25133 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25133) : cljs.core.deref.call(null,G__25133));
})();
var inst_25097__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25096,inst_25095__$1);
var state_25116__$1 = (function (){var statearr_25134 = state_25116;
(statearr_25134[(11)] = inst_25097__$1);

(statearr_25134[(7)] = inst_25095__$1);

return statearr_25134;
})();
if(cljs.core.truth_(inst_25097__$1)){
var statearr_25135_25180 = state_25116__$1;
(statearr_25135_25180[(1)] = (19));

} else {
var statearr_25136_25181 = state_25116__$1;
(statearr_25136_25181[(1)] = (20));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25117 === (25))){
var inst_25106 = (state_25116[(2)]);
var state_25116__$1 = state_25116;
var statearr_25137_25182 = state_25116__$1;
(statearr_25137_25182[(2)] = inst_25106);

(statearr_25137_25182[(1)] = (21));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25117 === (17))){
var inst_25071 = (state_25116[(10)]);
var inst_25080 = cljs.core.first(inst_25071);
var inst_25081 = cljs.core.async.muxch_STAR_(inst_25080);
var inst_25082 = cljs.core.async.close_BANG_(inst_25081);
var inst_25083 = cljs.core.next(inst_25071);
var inst_25057 = inst_25083;
var inst_25058 = null;
var inst_25059 = (0);
var inst_25060 = (0);
var state_25116__$1 = (function (){var statearr_25138 = state_25116;
(statearr_25138[(12)] = inst_25059);

(statearr_25138[(13)] = inst_25060);

(statearr_25138[(14)] = inst_25082);

(statearr_25138[(15)] = inst_25057);

(statearr_25138[(16)] = inst_25058);

return statearr_25138;
})();
var statearr_25139_25183 = state_25116__$1;
(statearr_25139_25183[(2)] = null);

(statearr_25139_25183[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25117 === (3))){
var inst_25114 = (state_25116[(2)]);
var state_25116__$1 = state_25116;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25116__$1,inst_25114);
} else {
if((state_val_25117 === (12))){
var inst_25091 = (state_25116[(2)]);
var state_25116__$1 = state_25116;
var statearr_25140_25184 = state_25116__$1;
(statearr_25140_25184[(2)] = inst_25091);

(statearr_25140_25184[(1)] = (9));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25117 === (2))){
var state_25116__$1 = state_25116;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25116__$1,(4),ch);
} else {
if((state_val_25117 === (23))){
var state_25116__$1 = state_25116;
var statearr_25141_25185 = state_25116__$1;
(statearr_25141_25185[(2)] = null);

(statearr_25141_25185[(1)] = (25));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25117 === (19))){
var inst_25047 = (state_25116[(8)]);
var inst_25097 = (state_25116[(11)]);
var inst_25099 = cljs.core.async.muxch_STAR_(inst_25097);
var state_25116__$1 = state_25116;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25116__$1,(22),inst_25099,inst_25047);
} else {
if((state_val_25117 === (11))){
var inst_25071 = (state_25116[(10)]);
var inst_25057 = (state_25116[(15)]);
var inst_25071__$1 = cljs.core.seq(inst_25057);
var state_25116__$1 = (function (){var statearr_25142 = state_25116;
(statearr_25142[(10)] = inst_25071__$1);

return statearr_25142;
})();
if(inst_25071__$1){
var statearr_25143_25186 = state_25116__$1;
(statearr_25143_25186[(1)] = (13));

} else {
var statearr_25144_25187 = state_25116__$1;
(statearr_25144_25187[(1)] = (14));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25117 === (9))){
var inst_25093 = (state_25116[(2)]);
var state_25116__$1 = state_25116;
var statearr_25145_25188 = state_25116__$1;
(statearr_25145_25188[(2)] = inst_25093);

(statearr_25145_25188[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25117 === (5))){
var inst_25054 = (function (){var G__25146 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25146) : cljs.core.deref.call(null,G__25146));
})();
var inst_25055 = cljs.core.vals(inst_25054);
var inst_25056 = cljs.core.seq(inst_25055);
var inst_25057 = inst_25056;
var inst_25058 = null;
var inst_25059 = (0);
var inst_25060 = (0);
var state_25116__$1 = (function (){var statearr_25147 = state_25116;
(statearr_25147[(12)] = inst_25059);

(statearr_25147[(13)] = inst_25060);

(statearr_25147[(15)] = inst_25057);

(statearr_25147[(16)] = inst_25058);

return statearr_25147;
})();
var statearr_25148_25189 = state_25116__$1;
(statearr_25148_25189[(2)] = null);

(statearr_25148_25189[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25117 === (14))){
var state_25116__$1 = state_25116;
var statearr_25152_25190 = state_25116__$1;
(statearr_25152_25190[(2)] = null);

(statearr_25152_25190[(1)] = (15));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25117 === (16))){
var inst_25071 = (state_25116[(10)]);
var inst_25075 = cljs.core.chunk_first(inst_25071);
var inst_25076 = cljs.core.chunk_rest(inst_25071);
var inst_25077 = cljs.core.count(inst_25075);
var inst_25057 = inst_25076;
var inst_25058 = inst_25075;
var inst_25059 = inst_25077;
var inst_25060 = (0);
var state_25116__$1 = (function (){var statearr_25153 = state_25116;
(statearr_25153[(12)] = inst_25059);

(statearr_25153[(13)] = inst_25060);

(statearr_25153[(15)] = inst_25057);

(statearr_25153[(16)] = inst_25058);

return statearr_25153;
})();
var statearr_25154_25191 = state_25116__$1;
(statearr_25154_25191[(2)] = null);

(statearr_25154_25191[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25117 === (10))){
var inst_25059 = (state_25116[(12)]);
var inst_25060 = (state_25116[(13)]);
var inst_25057 = (state_25116[(15)]);
var inst_25058 = (state_25116[(16)]);
var inst_25065 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25058,inst_25060);
var inst_25066 = cljs.core.async.muxch_STAR_(inst_25065);
var inst_25067 = cljs.core.async.close_BANG_(inst_25066);
var inst_25068 = (inst_25060 + (1));
var tmp25149 = inst_25059;
var tmp25150 = inst_25057;
var tmp25151 = inst_25058;
var inst_25057__$1 = tmp25150;
var inst_25058__$1 = tmp25151;
var inst_25059__$1 = tmp25149;
var inst_25060__$1 = inst_25068;
var state_25116__$1 = (function (){var statearr_25155 = state_25116;
(statearr_25155[(12)] = inst_25059__$1);

(statearr_25155[(13)] = inst_25060__$1);

(statearr_25155[(17)] = inst_25067);

(statearr_25155[(15)] = inst_25057__$1);

(statearr_25155[(16)] = inst_25058__$1);

return statearr_25155;
})();
var statearr_25156_25192 = state_25116__$1;
(statearr_25156_25192[(2)] = null);

(statearr_25156_25192[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25117 === (18))){
var inst_25086 = (state_25116[(2)]);
var state_25116__$1 = state_25116;
var statearr_25157_25193 = state_25116__$1;
(statearr_25157_25193[(2)] = inst_25086);

(statearr_25157_25193[(1)] = (15));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25117 === (8))){
var inst_25059 = (state_25116[(12)]);
var inst_25060 = (state_25116[(13)]);
var inst_25062 = (inst_25060 < inst_25059);
var inst_25063 = inst_25062;
var state_25116__$1 = state_25116;
if(cljs.core.truth_(inst_25063)){
var statearr_25158_25194 = state_25116__$1;
(statearr_25158_25194[(1)] = (10));

} else {
var statearr_25159_25195 = state_25116__$1;
(statearr_25159_25195[(1)] = (11));

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
});})(c__5853__auto___25167,mults,ensure_mult,p))
;
return ((function (switch__5838__auto__,c__5853__auto___25167,mults,ensure_mult,p){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_25163 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25163[(0)] = state_machine__5839__auto__);

(statearr_25163[(1)] = (1));

return statearr_25163;
});
var state_machine__5839__auto____1 = (function (state_25116){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_25116);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e25164){if((e25164 instanceof Object)){
var ex__5842__auto__ = e25164;
var statearr_25165_25196 = state_25116;
(statearr_25165_25196[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25116);

return cljs.core.constant$keyword$41;
} else {
throw e25164;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__25197 = state_25116;
state_25116 = G__25197;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_25116){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_25116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___25167,mults,ensure_mult,p))
})();
var state__5855__auto__ = (function (){var statearr_25166 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_25166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___25167);

return statearr_25166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___25167,mults,ensure_mult,p))
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
var dctr = (function (){var G__25278 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25278) : cljs.core.atom.call(null,G__25278));
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
var c__5853__auto___25351 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___25351,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___25351,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25317){
var state_val_25318 = (state_25317[(1)]);
if((state_val_25318 === (7))){
var state_25317__$1 = state_25317;
var statearr_25319_25352 = state_25317__$1;
(statearr_25319_25352[(2)] = null);

(statearr_25319_25352[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25318 === (1))){
var state_25317__$1 = state_25317;
var statearr_25320_25353 = state_25317__$1;
(statearr_25320_25353[(2)] = null);

(statearr_25320_25353[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25318 === (4))){
var inst_25281 = (state_25317[(7)]);
var inst_25283 = (inst_25281 < cnt);
var state_25317__$1 = state_25317;
if(cljs.core.truth_(inst_25283)){
var statearr_25321_25354 = state_25317__$1;
(statearr_25321_25354[(1)] = (6));

} else {
var statearr_25322_25355 = state_25317__$1;
(statearr_25322_25355[(1)] = (7));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25318 === (15))){
var inst_25313 = (state_25317[(2)]);
var state_25317__$1 = state_25317;
var statearr_25323_25356 = state_25317__$1;
(statearr_25323_25356[(2)] = inst_25313);

(statearr_25323_25356[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25318 === (13))){
var inst_25306 = cljs.core.async.close_BANG_(out);
var state_25317__$1 = state_25317;
var statearr_25324_25357 = state_25317__$1;
(statearr_25324_25357[(2)] = inst_25306);

(statearr_25324_25357[(1)] = (15));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25318 === (6))){
var state_25317__$1 = state_25317;
var statearr_25325_25358 = state_25317__$1;
(statearr_25325_25358[(2)] = null);

(statearr_25325_25358[(1)] = (11));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25318 === (3))){
var inst_25315 = (state_25317[(2)]);
var state_25317__$1 = state_25317;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25317__$1,inst_25315);
} else {
if((state_val_25318 === (12))){
var inst_25303 = (state_25317[(8)]);
var inst_25303__$1 = (state_25317[(2)]);
var inst_25304 = cljs.core.some(cljs.core.nil_QMARK_,inst_25303__$1);
var state_25317__$1 = (function (){var statearr_25326 = state_25317;
(statearr_25326[(8)] = inst_25303__$1);

return statearr_25326;
})();
if(cljs.core.truth_(inst_25304)){
var statearr_25327_25359 = state_25317__$1;
(statearr_25327_25359[(1)] = (13));

} else {
var statearr_25328_25360 = state_25317__$1;
(statearr_25328_25360[(1)] = (14));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25318 === (2))){
var inst_25280 = (function (){var G__25329 = dctr;
var G__25330 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25329,G__25330) : cljs.core.reset_BANG_.call(null,G__25329,G__25330));
})();
var inst_25281 = (0);
var state_25317__$1 = (function (){var statearr_25331 = state_25317;
(statearr_25331[(9)] = inst_25280);

(statearr_25331[(7)] = inst_25281);

return statearr_25331;
})();
var statearr_25332_25361 = state_25317__$1;
(statearr_25332_25361[(2)] = null);

(statearr_25332_25361[(1)] = (4));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25318 === (11))){
var inst_25281 = (state_25317[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25317,(10),Object,null,(9));
var inst_25290 = (function (){var G__25333 = inst_25281;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__25333) : chs__$1.call(null,G__25333));
})();
var inst_25291 = (function (){var G__25334 = inst_25281;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__25334) : done.call(null,G__25334));
})();
var inst_25292 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_25290,inst_25291);
var state_25317__$1 = state_25317;
var statearr_25335_25362 = state_25317__$1;
(statearr_25335_25362[(2)] = inst_25292);


cljs.core.async.impl.ioc_helpers.process_exception(state_25317__$1);

return cljs.core.constant$keyword$41;
} else {
if((state_val_25318 === (9))){
var inst_25281 = (state_25317[(7)]);
var inst_25294 = (state_25317[(2)]);
var inst_25295 = (inst_25281 + (1));
var inst_25281__$1 = inst_25295;
var state_25317__$1 = (function (){var statearr_25336 = state_25317;
(statearr_25336[(10)] = inst_25294);

(statearr_25336[(7)] = inst_25281__$1);

return statearr_25336;
})();
var statearr_25337_25363 = state_25317__$1;
(statearr_25337_25363[(2)] = null);

(statearr_25337_25363[(1)] = (4));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25318 === (5))){
var inst_25301 = (state_25317[(2)]);
var state_25317__$1 = (function (){var statearr_25338 = state_25317;
(statearr_25338[(11)] = inst_25301);

return statearr_25338;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25317__$1,(12),dchan);
} else {
if((state_val_25318 === (14))){
var inst_25303 = (state_25317[(8)]);
var inst_25308 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_25303);
var state_25317__$1 = state_25317;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25317__$1,(16),out,inst_25308);
} else {
if((state_val_25318 === (16))){
var inst_25310 = (state_25317[(2)]);
var state_25317__$1 = (function (){var statearr_25339 = state_25317;
(statearr_25339[(12)] = inst_25310);

return statearr_25339;
})();
var statearr_25340_25364 = state_25317__$1;
(statearr_25340_25364[(2)] = null);

(statearr_25340_25364[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25318 === (10))){
var inst_25285 = (state_25317[(2)]);
var inst_25286 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_25317__$1 = (function (){var statearr_25341 = state_25317;
(statearr_25341[(13)] = inst_25285);

return statearr_25341;
})();
var statearr_25342_25365 = state_25317__$1;
(statearr_25342_25365[(2)] = inst_25286);


cljs.core.async.impl.ioc_helpers.process_exception(state_25317__$1);

return cljs.core.constant$keyword$41;
} else {
if((state_val_25318 === (8))){
var inst_25299 = (state_25317[(2)]);
var state_25317__$1 = state_25317;
var statearr_25343_25366 = state_25317__$1;
(statearr_25343_25366[(2)] = inst_25299);

(statearr_25343_25366[(1)] = (5));


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
});})(c__5853__auto___25351,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__5838__auto__,c__5853__auto___25351,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_25347 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25347[(0)] = state_machine__5839__auto__);

(statearr_25347[(1)] = (1));

return statearr_25347;
});
var state_machine__5839__auto____1 = (function (state_25317){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_25317);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e25348){if((e25348 instanceof Object)){
var ex__5842__auto__ = e25348;
var statearr_25349_25367 = state_25317;
(statearr_25349_25367[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25317);

return cljs.core.constant$keyword$41;
} else {
throw e25348;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__25368 = state_25317;
state_25317 = G__25368;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_25317){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_25317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___25351,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__5855__auto__ = (function (){var statearr_25350 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_25350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___25351);

return statearr_25350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___25351,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__5853__auto___25478 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___25478,out){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___25478,out){
return (function (state_25454){
var state_val_25455 = (state_25454[(1)]);
if((state_val_25455 === (7))){
var inst_25433 = (state_25454[(7)]);
var inst_25434 = (state_25454[(8)]);
var inst_25433__$1 = (state_25454[(2)]);
var inst_25434__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25433__$1,(0),null);
var inst_25435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25433__$1,(1),null);
var inst_25436 = (inst_25434__$1 == null);
var state_25454__$1 = (function (){var statearr_25456 = state_25454;
(statearr_25456[(7)] = inst_25433__$1);

(statearr_25456[(8)] = inst_25434__$1);

(statearr_25456[(9)] = inst_25435);

return statearr_25456;
})();
if(cljs.core.truth_(inst_25436)){
var statearr_25457_25479 = state_25454__$1;
(statearr_25457_25479[(1)] = (8));

} else {
var statearr_25458_25480 = state_25454__$1;
(statearr_25458_25480[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25455 === (1))){
var inst_25425 = cljs.core.vec(chs);
var inst_25426 = inst_25425;
var state_25454__$1 = (function (){var statearr_25459 = state_25454;
(statearr_25459[(10)] = inst_25426);

return statearr_25459;
})();
var statearr_25460_25481 = state_25454__$1;
(statearr_25460_25481[(2)] = null);

(statearr_25460_25481[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25455 === (4))){
var inst_25426 = (state_25454[(10)]);
var state_25454__$1 = state_25454;
return cljs.core.async.ioc_alts_BANG_(state_25454__$1,(7),inst_25426);
} else {
if((state_val_25455 === (6))){
var inst_25450 = (state_25454[(2)]);
var state_25454__$1 = state_25454;
var statearr_25461_25482 = state_25454__$1;
(statearr_25461_25482[(2)] = inst_25450);

(statearr_25461_25482[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25455 === (3))){
var inst_25452 = (state_25454[(2)]);
var state_25454__$1 = state_25454;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25454__$1,inst_25452);
} else {
if((state_val_25455 === (2))){
var inst_25426 = (state_25454[(10)]);
var inst_25428 = cljs.core.count(inst_25426);
var inst_25429 = (inst_25428 > (0));
var state_25454__$1 = state_25454;
if(cljs.core.truth_(inst_25429)){
var statearr_25463_25483 = state_25454__$1;
(statearr_25463_25483[(1)] = (4));

} else {
var statearr_25464_25484 = state_25454__$1;
(statearr_25464_25484[(1)] = (5));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25455 === (11))){
var inst_25426 = (state_25454[(10)]);
var inst_25443 = (state_25454[(2)]);
var tmp25462 = inst_25426;
var inst_25426__$1 = tmp25462;
var state_25454__$1 = (function (){var statearr_25465 = state_25454;
(statearr_25465[(11)] = inst_25443);

(statearr_25465[(10)] = inst_25426__$1);

return statearr_25465;
})();
var statearr_25466_25485 = state_25454__$1;
(statearr_25466_25485[(2)] = null);

(statearr_25466_25485[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25455 === (9))){
var inst_25434 = (state_25454[(8)]);
var state_25454__$1 = state_25454;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25454__$1,(11),out,inst_25434);
} else {
if((state_val_25455 === (5))){
var inst_25448 = cljs.core.async.close_BANG_(out);
var state_25454__$1 = state_25454;
var statearr_25467_25486 = state_25454__$1;
(statearr_25467_25486[(2)] = inst_25448);

(statearr_25467_25486[(1)] = (6));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25455 === (10))){
var inst_25446 = (state_25454[(2)]);
var state_25454__$1 = state_25454;
var statearr_25468_25487 = state_25454__$1;
(statearr_25468_25487[(2)] = inst_25446);

(statearr_25468_25487[(1)] = (6));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25455 === (8))){
var inst_25433 = (state_25454[(7)]);
var inst_25434 = (state_25454[(8)]);
var inst_25435 = (state_25454[(9)]);
var inst_25426 = (state_25454[(10)]);
var inst_25438 = (function (){var c = inst_25435;
var v = inst_25434;
var vec__25431 = inst_25433;
var cs = inst_25426;
return ((function (c,v,vec__25431,cs,inst_25433,inst_25434,inst_25435,inst_25426,state_val_25455,c__5853__auto___25478,out){
return (function (p1__25369_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__25369_SHARP_);
});
;})(c,v,vec__25431,cs,inst_25433,inst_25434,inst_25435,inst_25426,state_val_25455,c__5853__auto___25478,out))
})();
var inst_25439 = cljs.core.filterv(inst_25438,inst_25426);
var inst_25426__$1 = inst_25439;
var state_25454__$1 = (function (){var statearr_25469 = state_25454;
(statearr_25469[(10)] = inst_25426__$1);

return statearr_25469;
})();
var statearr_25470_25488 = state_25454__$1;
(statearr_25470_25488[(2)] = null);

(statearr_25470_25488[(1)] = (2));


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
});})(c__5853__auto___25478,out))
;
return ((function (switch__5838__auto__,c__5853__auto___25478,out){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_25474 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25474[(0)] = state_machine__5839__auto__);

(statearr_25474[(1)] = (1));

return statearr_25474;
});
var state_machine__5839__auto____1 = (function (state_25454){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_25454);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e25475){if((e25475 instanceof Object)){
var ex__5842__auto__ = e25475;
var statearr_25476_25489 = state_25454;
(statearr_25476_25489[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25454);

return cljs.core.constant$keyword$41;
} else {
throw e25475;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__25490 = state_25454;
state_25454 = G__25490;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_25454){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_25454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___25478,out))
})();
var state__5855__auto__ = (function (){var statearr_25477 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_25477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___25478);

return statearr_25477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___25478,out))
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
var c__5853__auto___25586 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___25586,out){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___25586,out){
return (function (state_25563){
var state_val_25564 = (state_25563[(1)]);
if((state_val_25564 === (7))){
var inst_25545 = (state_25563[(7)]);
var inst_25545__$1 = (state_25563[(2)]);
var inst_25546 = (inst_25545__$1 == null);
var inst_25547 = cljs.core.not(inst_25546);
var state_25563__$1 = (function (){var statearr_25565 = state_25563;
(statearr_25565[(7)] = inst_25545__$1);

return statearr_25565;
})();
if(inst_25547){
var statearr_25566_25587 = state_25563__$1;
(statearr_25566_25587[(1)] = (8));

} else {
var statearr_25567_25588 = state_25563__$1;
(statearr_25567_25588[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25564 === (1))){
var inst_25540 = (0);
var state_25563__$1 = (function (){var statearr_25568 = state_25563;
(statearr_25568[(8)] = inst_25540);

return statearr_25568;
})();
var statearr_25569_25589 = state_25563__$1;
(statearr_25569_25589[(2)] = null);

(statearr_25569_25589[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25564 === (4))){
var state_25563__$1 = state_25563;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25563__$1,(7),ch);
} else {
if((state_val_25564 === (6))){
var inst_25558 = (state_25563[(2)]);
var state_25563__$1 = state_25563;
var statearr_25570_25590 = state_25563__$1;
(statearr_25570_25590[(2)] = inst_25558);

(statearr_25570_25590[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25564 === (3))){
var inst_25560 = (state_25563[(2)]);
var inst_25561 = cljs.core.async.close_BANG_(out);
var state_25563__$1 = (function (){var statearr_25571 = state_25563;
(statearr_25571[(9)] = inst_25560);

return statearr_25571;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25563__$1,inst_25561);
} else {
if((state_val_25564 === (2))){
var inst_25540 = (state_25563[(8)]);
var inst_25542 = (inst_25540 < n);
var state_25563__$1 = state_25563;
if(cljs.core.truth_(inst_25542)){
var statearr_25572_25591 = state_25563__$1;
(statearr_25572_25591[(1)] = (4));

} else {
var statearr_25573_25592 = state_25563__$1;
(statearr_25573_25592[(1)] = (5));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25564 === (11))){
var inst_25540 = (state_25563[(8)]);
var inst_25550 = (state_25563[(2)]);
var inst_25551 = (inst_25540 + (1));
var inst_25540__$1 = inst_25551;
var state_25563__$1 = (function (){var statearr_25574 = state_25563;
(statearr_25574[(10)] = inst_25550);

(statearr_25574[(8)] = inst_25540__$1);

return statearr_25574;
})();
var statearr_25575_25593 = state_25563__$1;
(statearr_25575_25593[(2)] = null);

(statearr_25575_25593[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25564 === (9))){
var state_25563__$1 = state_25563;
var statearr_25576_25594 = state_25563__$1;
(statearr_25576_25594[(2)] = null);

(statearr_25576_25594[(1)] = (10));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25564 === (5))){
var state_25563__$1 = state_25563;
var statearr_25577_25595 = state_25563__$1;
(statearr_25577_25595[(2)] = null);

(statearr_25577_25595[(1)] = (6));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25564 === (10))){
var inst_25555 = (state_25563[(2)]);
var state_25563__$1 = state_25563;
var statearr_25578_25596 = state_25563__$1;
(statearr_25578_25596[(2)] = inst_25555);

(statearr_25578_25596[(1)] = (6));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25564 === (8))){
var inst_25545 = (state_25563[(7)]);
var state_25563__$1 = state_25563;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25563__$1,(11),out,inst_25545);
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
});})(c__5853__auto___25586,out))
;
return ((function (switch__5838__auto__,c__5853__auto___25586,out){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_25582 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25582[(0)] = state_machine__5839__auto__);

(statearr_25582[(1)] = (1));

return statearr_25582;
});
var state_machine__5839__auto____1 = (function (state_25563){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_25563);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e25583){if((e25583 instanceof Object)){
var ex__5842__auto__ = e25583;
var statearr_25584_25597 = state_25563;
(statearr_25584_25597[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25563);

return cljs.core.constant$keyword$41;
} else {
throw e25583;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__25598 = state_25563;
state_25563 = G__25598;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_25563){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_25563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___25586,out))
})();
var state__5855__auto__ = (function (){var statearr_25585 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_25585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___25586);

return statearr_25585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___25586,out))
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
if(typeof cljs.core.async.t25611 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25611 = (function (ch,f,map_LT_,meta25612){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25612 = meta25612;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25611.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25611.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t25611.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25611.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t25614 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25614 = (function (fn1,_,meta25612,map_LT_,f,ch,meta25615){
this.fn1 = fn1;
this._ = _;
this.meta25612 = meta25612;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25615 = meta25615;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25614.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25614.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t25614.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25599_SHARP_){
var G__25617 = (((p1__25599_SHARP_ == null))?null:(function (){var G__25618 = p1__25599_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__25618) : self__.f.call(null,G__25618));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__25617) : f1.call(null,G__25617));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t25614.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25616){
var self__ = this;
var _25616__$1 = this;
return self__.meta25615;
});})(___$1))
;

cljs.core.async.t25614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25616,meta25615__$1){
var self__ = this;
var _25616__$1 = this;
return (new cljs.core.async.t25614(self__.fn1,self__._,self__.meta25612,self__.map_LT_,self__.f,self__.ch,meta25615__$1));
});})(___$1))
;

cljs.core.async.t25614.cljs$lang$type = true;

cljs.core.async.t25614.cljs$lang$ctorStr = "cljs.core.async/t25614";

cljs.core.async.t25614.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25614");
});})(___$1))
;

cljs.core.async.__GT_t25614 = ((function (___$1){
return (function __GT_t25614(fn1__$1,___$2,meta25612__$1,map_LT___$1,f__$1,ch__$1,meta25615){
return (new cljs.core.async.t25614(fn1__$1,___$2,meta25612__$1,map_LT___$1,f__$1,ch__$1,meta25615));
});})(___$1))
;

}

return (new cljs.core.async.t25614(fn1,___$1,self__.meta25612,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,737,cljs.core.constant$keyword$10,10,cljs.core.constant$keyword$11,731,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3618__auto__ = ret;
if(cljs.core.truth_(and__3618__auto__)){
return !(((function (){var G__25619 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25619) : cljs.core.deref.call(null,G__25619));
})() == null));
} else {
return and__3618__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__25620 = (function (){var G__25621 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25621) : cljs.core.deref.call(null,G__25621));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__25620) : self__.f.call(null,G__25620));
})());
} else {
return ret;
}
});

cljs.core.async.t25611.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25611.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t25611.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t25611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25613){
var self__ = this;
var _25613__$1 = this;
return self__.meta25612;
});

cljs.core.async.t25611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25613,meta25612__$1){
var self__ = this;
var _25613__$1 = this;
return (new cljs.core.async.t25611(self__.ch,self__.f,self__.map_LT_,meta25612__$1));
});

cljs.core.async.t25611.cljs$lang$type = true;

cljs.core.async.t25611.cljs$lang$ctorStr = "cljs.core.async/t25611";

cljs.core.async.t25611.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25611");
});

cljs.core.async.__GT_t25611 = (function __GT_t25611(ch__$1,f__$1,map_LT___$1,meta25612){
return (new cljs.core.async.t25611(ch__$1,f__$1,map_LT___$1,meta25612));
});

}

return (new cljs.core.async.t25611(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,743,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,722,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t25626 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25626 = (function (ch,f,map_GT_,meta25627){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25627 = meta25627;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25626.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25626.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__25629 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__25629) : self__.f.call(null,G__25629));
})(),fn1);
});

cljs.core.async.t25626.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25626.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t25626.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25626.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t25626.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25628){
var self__ = this;
var _25628__$1 = this;
return self__.meta25627;
});

cljs.core.async.t25626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25628,meta25627__$1){
var self__ = this;
var _25628__$1 = this;
return (new cljs.core.async.t25626(self__.ch,self__.f,self__.map_GT_,meta25627__$1));
});

cljs.core.async.t25626.cljs$lang$type = true;

cljs.core.async.t25626.cljs$lang$ctorStr = "cljs.core.async/t25626";

cljs.core.async.t25626.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25626");
});

cljs.core.async.__GT_t25626 = (function __GT_t25626(ch__$1,f__$1,map_GT___$1,meta25627){
return (new cljs.core.async.t25626(ch__$1,f__$1,map_GT___$1,meta25627));
});

}

return (new cljs.core.async.t25626(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,34,cljs.core.constant$keyword$9,757,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,748,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t25634 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25634 = (function (ch,p,filter_GT_,meta25635){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25635 = meta25635;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25634.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25634.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__25637 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__25637) : self__.p.call(null,G__25637));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t25634.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25634.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t25634.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25634.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t25634.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t25634.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25636){
var self__ = this;
var _25636__$1 = this;
return self__.meta25635;
});

cljs.core.async.t25634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25636,meta25635__$1){
var self__ = this;
var _25636__$1 = this;
return (new cljs.core.async.t25634(self__.ch,self__.p,self__.filter_GT_,meta25635__$1));
});

cljs.core.async.t25634.cljs$lang$type = true;

cljs.core.async.t25634.cljs$lang$ctorStr = "cljs.core.async/t25634";

cljs.core.async.t25634.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25634");
});

cljs.core.async.__GT_t25634 = (function __GT_t25634(ch__$1,p__$1,filter_GT___$1,meta25635){
return (new cljs.core.async.t25634(ch__$1,p__$1,filter_GT___$1,meta25635));
});

}

return (new cljs.core.async.t25634(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,774,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,762,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
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
var c__5853__auto___25725 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___25725,out){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___25725,out){
return (function (state_25703){
var state_val_25704 = (state_25703[(1)]);
if((state_val_25704 === (7))){
var inst_25699 = (state_25703[(2)]);
var state_25703__$1 = state_25703;
var statearr_25705_25726 = state_25703__$1;
(statearr_25705_25726[(2)] = inst_25699);

(statearr_25705_25726[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25704 === (1))){
var state_25703__$1 = state_25703;
var statearr_25706_25727 = state_25703__$1;
(statearr_25706_25727[(2)] = null);

(statearr_25706_25727[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25704 === (4))){
var inst_25685 = (state_25703[(7)]);
var inst_25685__$1 = (state_25703[(2)]);
var inst_25686 = (inst_25685__$1 == null);
var state_25703__$1 = (function (){var statearr_25707 = state_25703;
(statearr_25707[(7)] = inst_25685__$1);

return statearr_25707;
})();
if(cljs.core.truth_(inst_25686)){
var statearr_25708_25728 = state_25703__$1;
(statearr_25708_25728[(1)] = (5));

} else {
var statearr_25709_25729 = state_25703__$1;
(statearr_25709_25729[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25704 === (6))){
var inst_25685 = (state_25703[(7)]);
var inst_25690 = (function (){var G__25710 = inst_25685;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__25710) : p.call(null,G__25710));
})();
var state_25703__$1 = state_25703;
if(cljs.core.truth_(inst_25690)){
var statearr_25711_25730 = state_25703__$1;
(statearr_25711_25730[(1)] = (8));

} else {
var statearr_25712_25731 = state_25703__$1;
(statearr_25712_25731[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25704 === (3))){
var inst_25701 = (state_25703[(2)]);
var state_25703__$1 = state_25703;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25703__$1,inst_25701);
} else {
if((state_val_25704 === (2))){
var state_25703__$1 = state_25703;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25703__$1,(4),ch);
} else {
if((state_val_25704 === (11))){
var inst_25693 = (state_25703[(2)]);
var state_25703__$1 = state_25703;
var statearr_25713_25732 = state_25703__$1;
(statearr_25713_25732[(2)] = inst_25693);

(statearr_25713_25732[(1)] = (10));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25704 === (9))){
var state_25703__$1 = state_25703;
var statearr_25714_25733 = state_25703__$1;
(statearr_25714_25733[(2)] = null);

(statearr_25714_25733[(1)] = (10));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25704 === (5))){
var inst_25688 = cljs.core.async.close_BANG_(out);
var state_25703__$1 = state_25703;
var statearr_25715_25734 = state_25703__$1;
(statearr_25715_25734[(2)] = inst_25688);

(statearr_25715_25734[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25704 === (10))){
var inst_25696 = (state_25703[(2)]);
var state_25703__$1 = (function (){var statearr_25716 = state_25703;
(statearr_25716[(8)] = inst_25696);

return statearr_25716;
})();
var statearr_25717_25735 = state_25703__$1;
(statearr_25717_25735[(2)] = null);

(statearr_25717_25735[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25704 === (8))){
var inst_25685 = (state_25703[(7)]);
var state_25703__$1 = state_25703;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25703__$1,(11),out,inst_25685);
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
});})(c__5853__auto___25725,out))
;
return ((function (switch__5838__auto__,c__5853__auto___25725,out){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_25721 = [null,null,null,null,null,null,null,null,null];
(statearr_25721[(0)] = state_machine__5839__auto__);

(statearr_25721[(1)] = (1));

return statearr_25721;
});
var state_machine__5839__auto____1 = (function (state_25703){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_25703);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e25722){if((e25722 instanceof Object)){
var ex__5842__auto__ = e25722;
var statearr_25723_25736 = state_25703;
(statearr_25723_25736[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25703);

return cljs.core.constant$keyword$41;
} else {
throw e25722;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__25737 = state_25703;
state_25703 = G__25737;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_25703){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_25703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___25725,out))
})();
var state__5855__auto__ = (function (){var statearr_25724 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_25724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___25725);

return statearr_25724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___25725,out))
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
return (function (state_25907){
var state_val_25908 = (state_25907[(1)]);
if((state_val_25908 === (7))){
var inst_25903 = (state_25907[(2)]);
var state_25907__$1 = state_25907;
var statearr_25909_25951 = state_25907__$1;
(statearr_25909_25951[(2)] = inst_25903);

(statearr_25909_25951[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25908 === (20))){
var inst_25873 = (state_25907[(7)]);
var inst_25884 = (state_25907[(2)]);
var inst_25885 = cljs.core.next(inst_25873);
var inst_25859 = inst_25885;
var inst_25860 = null;
var inst_25861 = (0);
var inst_25862 = (0);
var state_25907__$1 = (function (){var statearr_25910 = state_25907;
(statearr_25910[(8)] = inst_25859);

(statearr_25910[(9)] = inst_25860);

(statearr_25910[(10)] = inst_25884);

(statearr_25910[(11)] = inst_25861);

(statearr_25910[(12)] = inst_25862);

return statearr_25910;
})();
var statearr_25911_25952 = state_25907__$1;
(statearr_25911_25952[(2)] = null);

(statearr_25911_25952[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25908 === (1))){
var state_25907__$1 = state_25907;
var statearr_25912_25953 = state_25907__$1;
(statearr_25912_25953[(2)] = null);

(statearr_25912_25953[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25908 === (4))){
var inst_25848 = (state_25907[(13)]);
var inst_25848__$1 = (state_25907[(2)]);
var inst_25849 = (inst_25848__$1 == null);
var state_25907__$1 = (function (){var statearr_25913 = state_25907;
(statearr_25913[(13)] = inst_25848__$1);

return statearr_25913;
})();
if(cljs.core.truth_(inst_25849)){
var statearr_25914_25954 = state_25907__$1;
(statearr_25914_25954[(1)] = (5));

} else {
var statearr_25915_25955 = state_25907__$1;
(statearr_25915_25955[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25908 === (15))){
var state_25907__$1 = state_25907;
var statearr_25919_25956 = state_25907__$1;
(statearr_25919_25956[(2)] = null);

(statearr_25919_25956[(1)] = (16));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25908 === (21))){
var state_25907__$1 = state_25907;
var statearr_25920_25957 = state_25907__$1;
(statearr_25920_25957[(2)] = null);

(statearr_25920_25957[(1)] = (23));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25908 === (13))){
var inst_25859 = (state_25907[(8)]);
var inst_25860 = (state_25907[(9)]);
var inst_25861 = (state_25907[(11)]);
var inst_25862 = (state_25907[(12)]);
var inst_25869 = (state_25907[(2)]);
var inst_25870 = (inst_25862 + (1));
var tmp25916 = inst_25859;
var tmp25917 = inst_25860;
var tmp25918 = inst_25861;
var inst_25859__$1 = tmp25916;
var inst_25860__$1 = tmp25917;
var inst_25861__$1 = tmp25918;
var inst_25862__$1 = inst_25870;
var state_25907__$1 = (function (){var statearr_25921 = state_25907;
(statearr_25921[(8)] = inst_25859__$1);

(statearr_25921[(14)] = inst_25869);

(statearr_25921[(9)] = inst_25860__$1);

(statearr_25921[(11)] = inst_25861__$1);

(statearr_25921[(12)] = inst_25862__$1);

return statearr_25921;
})();
var statearr_25922_25958 = state_25907__$1;
(statearr_25922_25958[(2)] = null);

(statearr_25922_25958[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25908 === (22))){
var state_25907__$1 = state_25907;
var statearr_25923_25959 = state_25907__$1;
(statearr_25923_25959[(2)] = null);

(statearr_25923_25959[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25908 === (6))){
var inst_25848 = (state_25907[(13)]);
var inst_25857 = (function (){var G__25924 = inst_25848;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25924) : f.call(null,G__25924));
})();
var inst_25858 = cljs.core.seq(inst_25857);
var inst_25859 = inst_25858;
var inst_25860 = null;
var inst_25861 = (0);
var inst_25862 = (0);
var state_25907__$1 = (function (){var statearr_25925 = state_25907;
(statearr_25925[(8)] = inst_25859);

(statearr_25925[(9)] = inst_25860);

(statearr_25925[(11)] = inst_25861);

(statearr_25925[(12)] = inst_25862);

return statearr_25925;
})();
var statearr_25926_25960 = state_25907__$1;
(statearr_25926_25960[(2)] = null);

(statearr_25926_25960[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25908 === (17))){
var inst_25873 = (state_25907[(7)]);
var inst_25877 = cljs.core.chunk_first(inst_25873);
var inst_25878 = cljs.core.chunk_rest(inst_25873);
var inst_25879 = cljs.core.count(inst_25877);
var inst_25859 = inst_25878;
var inst_25860 = inst_25877;
var inst_25861 = inst_25879;
var inst_25862 = (0);
var state_25907__$1 = (function (){var statearr_25927 = state_25907;
(statearr_25927[(8)] = inst_25859);

(statearr_25927[(9)] = inst_25860);

(statearr_25927[(11)] = inst_25861);

(statearr_25927[(12)] = inst_25862);

return statearr_25927;
})();
var statearr_25928_25961 = state_25907__$1;
(statearr_25928_25961[(2)] = null);

(statearr_25928_25961[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25908 === (3))){
var inst_25905 = (state_25907[(2)]);
var state_25907__$1 = state_25907;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25907__$1,inst_25905);
} else {
if((state_val_25908 === (12))){
var inst_25893 = (state_25907[(2)]);
var state_25907__$1 = state_25907;
var statearr_25929_25962 = state_25907__$1;
(statearr_25929_25962[(2)] = inst_25893);

(statearr_25929_25962[(1)] = (9));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25908 === (2))){
var state_25907__$1 = state_25907;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25907__$1,(4),in$);
} else {
if((state_val_25908 === (23))){
var inst_25901 = (state_25907[(2)]);
var state_25907__$1 = state_25907;
var statearr_25930_25963 = state_25907__$1;
(statearr_25930_25963[(2)] = inst_25901);

(statearr_25930_25963[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25908 === (19))){
var inst_25888 = (state_25907[(2)]);
var state_25907__$1 = state_25907;
var statearr_25931_25964 = state_25907__$1;
(statearr_25931_25964[(2)] = inst_25888);

(statearr_25931_25964[(1)] = (16));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25908 === (11))){
var inst_25859 = (state_25907[(8)]);
var inst_25873 = (state_25907[(7)]);
var inst_25873__$1 = cljs.core.seq(inst_25859);
var state_25907__$1 = (function (){var statearr_25932 = state_25907;
(statearr_25932[(7)] = inst_25873__$1);

return statearr_25932;
})();
if(inst_25873__$1){
var statearr_25933_25965 = state_25907__$1;
(statearr_25933_25965[(1)] = (14));

} else {
var statearr_25934_25966 = state_25907__$1;
(statearr_25934_25966[(1)] = (15));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25908 === (9))){
var inst_25895 = (state_25907[(2)]);
var inst_25896 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_25907__$1 = (function (){var statearr_25935 = state_25907;
(statearr_25935[(15)] = inst_25895);

return statearr_25935;
})();
if(cljs.core.truth_(inst_25896)){
var statearr_25936_25967 = state_25907__$1;
(statearr_25936_25967[(1)] = (21));

} else {
var statearr_25937_25968 = state_25907__$1;
(statearr_25937_25968[(1)] = (22));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25908 === (5))){
var inst_25851 = cljs.core.async.close_BANG_(out);
var state_25907__$1 = state_25907;
var statearr_25938_25969 = state_25907__$1;
(statearr_25938_25969[(2)] = inst_25851);

(statearr_25938_25969[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25908 === (14))){
var inst_25873 = (state_25907[(7)]);
var inst_25875 = cljs.core.chunked_seq_QMARK_(inst_25873);
var state_25907__$1 = state_25907;
if(inst_25875){
var statearr_25939_25970 = state_25907__$1;
(statearr_25939_25970[(1)] = (17));

} else {
var statearr_25940_25971 = state_25907__$1;
(statearr_25940_25971[(1)] = (18));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25908 === (16))){
var inst_25891 = (state_25907[(2)]);
var state_25907__$1 = state_25907;
var statearr_25941_25972 = state_25907__$1;
(statearr_25941_25972[(2)] = inst_25891);

(statearr_25941_25972[(1)] = (12));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25908 === (10))){
var inst_25860 = (state_25907[(9)]);
var inst_25862 = (state_25907[(12)]);
var inst_25867 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25860,inst_25862);
var state_25907__$1 = state_25907;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25907__$1,(13),out,inst_25867);
} else {
if((state_val_25908 === (18))){
var inst_25873 = (state_25907[(7)]);
var inst_25882 = cljs.core.first(inst_25873);
var state_25907__$1 = state_25907;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25907__$1,(20),out,inst_25882);
} else {
if((state_val_25908 === (8))){
var inst_25861 = (state_25907[(11)]);
var inst_25862 = (state_25907[(12)]);
var inst_25864 = (inst_25862 < inst_25861);
var inst_25865 = inst_25864;
var state_25907__$1 = state_25907;
if(cljs.core.truth_(inst_25865)){
var statearr_25942_25973 = state_25907__$1;
(statearr_25942_25973[(1)] = (10));

} else {
var statearr_25943_25974 = state_25907__$1;
(statearr_25943_25974[(1)] = (11));

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
var statearr_25947 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25947[(0)] = state_machine__5839__auto__);

(statearr_25947[(1)] = (1));

return statearr_25947;
});
var state_machine__5839__auto____1 = (function (state_25907){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_25907);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e25948){if((e25948 instanceof Object)){
var ex__5842__auto__ = e25948;
var statearr_25949_25975 = state_25907;
(statearr_25949_25975[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25907);

return cljs.core.constant$keyword$41;
} else {
throw e25948;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__25976 = state_25907;
state_25907 = G__25976;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_25907){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_25907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto__))
})();
var state__5855__auto__ = (function (){var statearr_25950 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_25950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto__);

return statearr_25950;
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
var c__5853__auto___26081 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___26081,out){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___26081,out){
return (function (state_26056){
var state_val_26057 = (state_26056[(1)]);
if((state_val_26057 === (7))){
var inst_26051 = (state_26056[(2)]);
var state_26056__$1 = state_26056;
var statearr_26058_26082 = state_26056__$1;
(statearr_26058_26082[(2)] = inst_26051);

(statearr_26058_26082[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26057 === (1))){
var inst_26033 = null;
var state_26056__$1 = (function (){var statearr_26059 = state_26056;
(statearr_26059[(7)] = inst_26033);

return statearr_26059;
})();
var statearr_26060_26083 = state_26056__$1;
(statearr_26060_26083[(2)] = null);

(statearr_26060_26083[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26057 === (4))){
var inst_26036 = (state_26056[(8)]);
var inst_26036__$1 = (state_26056[(2)]);
var inst_26037 = (inst_26036__$1 == null);
var inst_26038 = cljs.core.not(inst_26037);
var state_26056__$1 = (function (){var statearr_26061 = state_26056;
(statearr_26061[(8)] = inst_26036__$1);

return statearr_26061;
})();
if(inst_26038){
var statearr_26062_26084 = state_26056__$1;
(statearr_26062_26084[(1)] = (5));

} else {
var statearr_26063_26085 = state_26056__$1;
(statearr_26063_26085[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26057 === (6))){
var state_26056__$1 = state_26056;
var statearr_26064_26086 = state_26056__$1;
(statearr_26064_26086[(2)] = null);

(statearr_26064_26086[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26057 === (3))){
var inst_26053 = (state_26056[(2)]);
var inst_26054 = cljs.core.async.close_BANG_(out);
var state_26056__$1 = (function (){var statearr_26065 = state_26056;
(statearr_26065[(9)] = inst_26053);

return statearr_26065;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26056__$1,inst_26054);
} else {
if((state_val_26057 === (2))){
var state_26056__$1 = state_26056;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26056__$1,(4),ch);
} else {
if((state_val_26057 === (11))){
var inst_26036 = (state_26056[(8)]);
var inst_26045 = (state_26056[(2)]);
var inst_26033 = inst_26036;
var state_26056__$1 = (function (){var statearr_26066 = state_26056;
(statearr_26066[(10)] = inst_26045);

(statearr_26066[(7)] = inst_26033);

return statearr_26066;
})();
var statearr_26067_26087 = state_26056__$1;
(statearr_26067_26087[(2)] = null);

(statearr_26067_26087[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26057 === (9))){
var inst_26036 = (state_26056[(8)]);
var state_26056__$1 = state_26056;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26056__$1,(11),out,inst_26036);
} else {
if((state_val_26057 === (5))){
var inst_26036 = (state_26056[(8)]);
var inst_26033 = (state_26056[(7)]);
var inst_26040 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26036,inst_26033);
var state_26056__$1 = state_26056;
if(inst_26040){
var statearr_26069_26088 = state_26056__$1;
(statearr_26069_26088[(1)] = (8));

} else {
var statearr_26070_26089 = state_26056__$1;
(statearr_26070_26089[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26057 === (10))){
var inst_26048 = (state_26056[(2)]);
var state_26056__$1 = state_26056;
var statearr_26071_26090 = state_26056__$1;
(statearr_26071_26090[(2)] = inst_26048);

(statearr_26071_26090[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26057 === (8))){
var inst_26033 = (state_26056[(7)]);
var tmp26068 = inst_26033;
var inst_26033__$1 = tmp26068;
var state_26056__$1 = (function (){var statearr_26072 = state_26056;
(statearr_26072[(7)] = inst_26033__$1);

return statearr_26072;
})();
var statearr_26073_26091 = state_26056__$1;
(statearr_26073_26091[(2)] = null);

(statearr_26073_26091[(1)] = (2));


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
});})(c__5853__auto___26081,out))
;
return ((function (switch__5838__auto__,c__5853__auto___26081,out){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_26077 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26077[(0)] = state_machine__5839__auto__);

(statearr_26077[(1)] = (1));

return statearr_26077;
});
var state_machine__5839__auto____1 = (function (state_26056){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_26056);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e26078){if((e26078 instanceof Object)){
var ex__5842__auto__ = e26078;
var statearr_26079_26092 = state_26056;
(statearr_26079_26092[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26056);

return cljs.core.constant$keyword$41;
} else {
throw e26078;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__26093 = state_26056;
state_26056 = G__26093;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_26056){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_26056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___26081,out))
})();
var state__5855__auto__ = (function (){var statearr_26080 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_26080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___26081);

return statearr_26080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___26081,out))
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
var c__5853__auto___26231 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___26231,out){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___26231,out){
return (function (state_26201){
var state_val_26202 = (state_26201[(1)]);
if((state_val_26202 === (7))){
var inst_26197 = (state_26201[(2)]);
var state_26201__$1 = state_26201;
var statearr_26203_26232 = state_26201__$1;
(statearr_26203_26232[(2)] = inst_26197);

(statearr_26203_26232[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26202 === (1))){
var inst_26164 = (new Array(n));
var inst_26165 = inst_26164;
var inst_26166 = (0);
var state_26201__$1 = (function (){var statearr_26204 = state_26201;
(statearr_26204[(7)] = inst_26166);

(statearr_26204[(8)] = inst_26165);

return statearr_26204;
})();
var statearr_26205_26233 = state_26201__$1;
(statearr_26205_26233[(2)] = null);

(statearr_26205_26233[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26202 === (4))){
var inst_26169 = (state_26201[(9)]);
var inst_26169__$1 = (state_26201[(2)]);
var inst_26170 = (inst_26169__$1 == null);
var inst_26171 = cljs.core.not(inst_26170);
var state_26201__$1 = (function (){var statearr_26206 = state_26201;
(statearr_26206[(9)] = inst_26169__$1);

return statearr_26206;
})();
if(inst_26171){
var statearr_26207_26234 = state_26201__$1;
(statearr_26207_26234[(1)] = (5));

} else {
var statearr_26208_26235 = state_26201__$1;
(statearr_26208_26235[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26202 === (15))){
var inst_26191 = (state_26201[(2)]);
var state_26201__$1 = state_26201;
var statearr_26209_26236 = state_26201__$1;
(statearr_26209_26236[(2)] = inst_26191);

(statearr_26209_26236[(1)] = (14));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26202 === (13))){
var state_26201__$1 = state_26201;
var statearr_26210_26237 = state_26201__$1;
(statearr_26210_26237[(2)] = null);

(statearr_26210_26237[(1)] = (14));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26202 === (6))){
var inst_26166 = (state_26201[(7)]);
var inst_26187 = (inst_26166 > (0));
var state_26201__$1 = state_26201;
if(cljs.core.truth_(inst_26187)){
var statearr_26211_26238 = state_26201__$1;
(statearr_26211_26238[(1)] = (12));

} else {
var statearr_26212_26239 = state_26201__$1;
(statearr_26212_26239[(1)] = (13));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26202 === (3))){
var inst_26199 = (state_26201[(2)]);
var state_26201__$1 = state_26201;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26201__$1,inst_26199);
} else {
if((state_val_26202 === (12))){
var inst_26165 = (state_26201[(8)]);
var inst_26189 = cljs.core.vec(inst_26165);
var state_26201__$1 = state_26201;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26201__$1,(15),out,inst_26189);
} else {
if((state_val_26202 === (2))){
var state_26201__$1 = state_26201;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26201__$1,(4),ch);
} else {
if((state_val_26202 === (11))){
var inst_26181 = (state_26201[(2)]);
var inst_26182 = (new Array(n));
var inst_26165 = inst_26182;
var inst_26166 = (0);
var state_26201__$1 = (function (){var statearr_26213 = state_26201;
(statearr_26213[(7)] = inst_26166);

(statearr_26213[(8)] = inst_26165);

(statearr_26213[(10)] = inst_26181);

return statearr_26213;
})();
var statearr_26214_26240 = state_26201__$1;
(statearr_26214_26240[(2)] = null);

(statearr_26214_26240[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26202 === (9))){
var inst_26165 = (state_26201[(8)]);
var inst_26179 = cljs.core.vec(inst_26165);
var state_26201__$1 = state_26201;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26201__$1,(11),out,inst_26179);
} else {
if((state_val_26202 === (5))){
var inst_26166 = (state_26201[(7)]);
var inst_26174 = (state_26201[(11)]);
var inst_26169 = (state_26201[(9)]);
var inst_26165 = (state_26201[(8)]);
var inst_26173 = (inst_26165[inst_26166] = inst_26169);
var inst_26174__$1 = (inst_26166 + (1));
var inst_26175 = (inst_26174__$1 < n);
var state_26201__$1 = (function (){var statearr_26215 = state_26201;
(statearr_26215[(11)] = inst_26174__$1);

(statearr_26215[(12)] = inst_26173);

return statearr_26215;
})();
if(cljs.core.truth_(inst_26175)){
var statearr_26216_26241 = state_26201__$1;
(statearr_26216_26241[(1)] = (8));

} else {
var statearr_26217_26242 = state_26201__$1;
(statearr_26217_26242[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26202 === (14))){
var inst_26194 = (state_26201[(2)]);
var inst_26195 = cljs.core.async.close_BANG_(out);
var state_26201__$1 = (function (){var statearr_26219 = state_26201;
(statearr_26219[(13)] = inst_26194);

return statearr_26219;
})();
var statearr_26220_26243 = state_26201__$1;
(statearr_26220_26243[(2)] = inst_26195);

(statearr_26220_26243[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26202 === (10))){
var inst_26185 = (state_26201[(2)]);
var state_26201__$1 = state_26201;
var statearr_26221_26244 = state_26201__$1;
(statearr_26221_26244[(2)] = inst_26185);

(statearr_26221_26244[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26202 === (8))){
var inst_26174 = (state_26201[(11)]);
var inst_26165 = (state_26201[(8)]);
var tmp26218 = inst_26165;
var inst_26165__$1 = tmp26218;
var inst_26166 = inst_26174;
var state_26201__$1 = (function (){var statearr_26222 = state_26201;
(statearr_26222[(7)] = inst_26166);

(statearr_26222[(8)] = inst_26165__$1);

return statearr_26222;
})();
var statearr_26223_26245 = state_26201__$1;
(statearr_26223_26245[(2)] = null);

(statearr_26223_26245[(1)] = (2));


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
});})(c__5853__auto___26231,out))
;
return ((function (switch__5838__auto__,c__5853__auto___26231,out){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_26227 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26227[(0)] = state_machine__5839__auto__);

(statearr_26227[(1)] = (1));

return statearr_26227;
});
var state_machine__5839__auto____1 = (function (state_26201){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_26201);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e26228){if((e26228 instanceof Object)){
var ex__5842__auto__ = e26228;
var statearr_26229_26246 = state_26201;
(statearr_26229_26246[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26201);

return cljs.core.constant$keyword$41;
} else {
throw e26228;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__26247 = state_26201;
state_26201 = G__26247;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_26201){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_26201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___26231,out))
})();
var state__5855__auto__ = (function (){var statearr_26230 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_26230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___26231);

return statearr_26230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___26231,out))
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
var c__5853__auto___26395 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___26395,out){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___26395,out){
return (function (state_26364){
var state_val_26365 = (state_26364[(1)]);
if((state_val_26365 === (7))){
var inst_26360 = (state_26364[(2)]);
var state_26364__$1 = state_26364;
var statearr_26366_26396 = state_26364__$1;
(statearr_26366_26396[(2)] = inst_26360);

(statearr_26366_26396[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26365 === (1))){
var inst_26323 = [];
var inst_26324 = inst_26323;
var inst_26325 = cljs.core.constant$keyword$56;
var state_26364__$1 = (function (){var statearr_26367 = state_26364;
(statearr_26367[(7)] = inst_26324);

(statearr_26367[(8)] = inst_26325);

return statearr_26367;
})();
var statearr_26368_26397 = state_26364__$1;
(statearr_26368_26397[(2)] = null);

(statearr_26368_26397[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26365 === (4))){
var inst_26328 = (state_26364[(9)]);
var inst_26328__$1 = (state_26364[(2)]);
var inst_26329 = (inst_26328__$1 == null);
var inst_26330 = cljs.core.not(inst_26329);
var state_26364__$1 = (function (){var statearr_26369 = state_26364;
(statearr_26369[(9)] = inst_26328__$1);

return statearr_26369;
})();
if(inst_26330){
var statearr_26370_26398 = state_26364__$1;
(statearr_26370_26398[(1)] = (5));

} else {
var statearr_26371_26399 = state_26364__$1;
(statearr_26371_26399[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26365 === (15))){
var inst_26354 = (state_26364[(2)]);
var state_26364__$1 = state_26364;
var statearr_26372_26400 = state_26364__$1;
(statearr_26372_26400[(2)] = inst_26354);

(statearr_26372_26400[(1)] = (14));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26365 === (13))){
var state_26364__$1 = state_26364;
var statearr_26373_26401 = state_26364__$1;
(statearr_26373_26401[(2)] = null);

(statearr_26373_26401[(1)] = (14));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26365 === (6))){
var inst_26324 = (state_26364[(7)]);
var inst_26349 = inst_26324.length;
var inst_26350 = (inst_26349 > (0));
var state_26364__$1 = state_26364;
if(cljs.core.truth_(inst_26350)){
var statearr_26374_26402 = state_26364__$1;
(statearr_26374_26402[(1)] = (12));

} else {
var statearr_26375_26403 = state_26364__$1;
(statearr_26375_26403[(1)] = (13));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26365 === (3))){
var inst_26362 = (state_26364[(2)]);
var state_26364__$1 = state_26364;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26364__$1,inst_26362);
} else {
if((state_val_26365 === (12))){
var inst_26324 = (state_26364[(7)]);
var inst_26352 = cljs.core.vec(inst_26324);
var state_26364__$1 = state_26364;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26364__$1,(15),out,inst_26352);
} else {
if((state_val_26365 === (2))){
var state_26364__$1 = state_26364;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26364__$1,(4),ch);
} else {
if((state_val_26365 === (11))){
var inst_26328 = (state_26364[(9)]);
var inst_26332 = (state_26364[(10)]);
var inst_26342 = (state_26364[(2)]);
var inst_26343 = [];
var inst_26344 = inst_26343.push(inst_26328);
var inst_26324 = inst_26343;
var inst_26325 = inst_26332;
var state_26364__$1 = (function (){var statearr_26376 = state_26364;
(statearr_26376[(11)] = inst_26342);

(statearr_26376[(12)] = inst_26344);

(statearr_26376[(7)] = inst_26324);

(statearr_26376[(8)] = inst_26325);

return statearr_26376;
})();
var statearr_26377_26404 = state_26364__$1;
(statearr_26377_26404[(2)] = null);

(statearr_26377_26404[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26365 === (9))){
var inst_26324 = (state_26364[(7)]);
var inst_26340 = cljs.core.vec(inst_26324);
var state_26364__$1 = state_26364;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26364__$1,(11),out,inst_26340);
} else {
if((state_val_26365 === (5))){
var inst_26328 = (state_26364[(9)]);
var inst_26325 = (state_26364[(8)]);
var inst_26332 = (state_26364[(10)]);
var inst_26332__$1 = (function (){var G__26378 = inst_26328;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26378) : f.call(null,G__26378));
})();
var inst_26333 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26332__$1,inst_26325);
var inst_26334 = cljs.core.keyword_identical_QMARK_(inst_26325,cljs.core.constant$keyword$56);
var inst_26335 = (inst_26333) || (inst_26334);
var state_26364__$1 = (function (){var statearr_26379 = state_26364;
(statearr_26379[(10)] = inst_26332__$1);

return statearr_26379;
})();
if(cljs.core.truth_(inst_26335)){
var statearr_26380_26405 = state_26364__$1;
(statearr_26380_26405[(1)] = (8));

} else {
var statearr_26381_26406 = state_26364__$1;
(statearr_26381_26406[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26365 === (14))){
var inst_26357 = (state_26364[(2)]);
var inst_26358 = cljs.core.async.close_BANG_(out);
var state_26364__$1 = (function (){var statearr_26383 = state_26364;
(statearr_26383[(13)] = inst_26357);

return statearr_26383;
})();
var statearr_26384_26407 = state_26364__$1;
(statearr_26384_26407[(2)] = inst_26358);

(statearr_26384_26407[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26365 === (10))){
var inst_26347 = (state_26364[(2)]);
var state_26364__$1 = state_26364;
var statearr_26385_26408 = state_26364__$1;
(statearr_26385_26408[(2)] = inst_26347);

(statearr_26385_26408[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26365 === (8))){
var inst_26328 = (state_26364[(9)]);
var inst_26324 = (state_26364[(7)]);
var inst_26332 = (state_26364[(10)]);
var inst_26337 = inst_26324.push(inst_26328);
var tmp26382 = inst_26324;
var inst_26324__$1 = tmp26382;
var inst_26325 = inst_26332;
var state_26364__$1 = (function (){var statearr_26386 = state_26364;
(statearr_26386[(7)] = inst_26324__$1);

(statearr_26386[(8)] = inst_26325);

(statearr_26386[(14)] = inst_26337);

return statearr_26386;
})();
var statearr_26387_26409 = state_26364__$1;
(statearr_26387_26409[(2)] = null);

(statearr_26387_26409[(1)] = (2));


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
});})(c__5853__auto___26395,out))
;
return ((function (switch__5838__auto__,c__5853__auto___26395,out){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_26391 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26391[(0)] = state_machine__5839__auto__);

(statearr_26391[(1)] = (1));

return statearr_26391;
});
var state_machine__5839__auto____1 = (function (state_26364){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_26364);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e26392){if((e26392 instanceof Object)){
var ex__5842__auto__ = e26392;
var statearr_26393_26410 = state_26364;
(statearr_26393_26410[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26364);

return cljs.core.constant$keyword$41;
} else {
throw e26392;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__26411 = state_26364;
state_26364 = G__26411;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_26364){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_26364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___26395,out))
})();
var state__5855__auto__ = (function (){var statearr_26394 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_26394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___26395);

return statearr_26394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___26395,out))
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
