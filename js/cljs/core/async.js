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
if(typeof cljs.core.async.t23659 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23659 = (function (f,fn_handler,meta23660){
this.f = f;
this.fn_handler = fn_handler;
this.meta23660 = meta23660;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23659.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23659.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t23659.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t23659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23661){
var self__ = this;
var _23661__$1 = this;
return self__.meta23660;
});

cljs.core.async.t23659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23661,meta23660__$1){
var self__ = this;
var _23661__$1 = this;
return (new cljs.core.async.t23659(self__.f,self__.fn_handler,meta23660__$1));
});

cljs.core.async.t23659.cljs$lang$type = true;

cljs.core.async.t23659.cljs$lang$ctorStr = "cljs.core.async/t23659";

cljs.core.async.t23659.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23659");
});

cljs.core.async.__GT_t23659 = (function __GT_t23659(f__$1,fn_handler__$1,meta23660){
return (new cljs.core.async.t23659(f__$1,fn_handler__$1,meta23660));
});

}

return (new cljs.core.async.t23659(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,20,cljs.core.constant$keyword$9,16,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,13,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
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
var G__23663 = buff;
if(G__23663){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__23663.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__23663.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23663);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23663);
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
var val_23680 = (function (){var G__23677 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23677) : cljs.core.deref.call(null,G__23677));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__23678_23681 = val_23680;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23678_23681) : fn1.call(null,G__23678_23681));
} else {
cljs.core.async.impl.dispatch.run(((function (val_23680,ret){
return (function (){
var G__23679 = val_23680;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23679) : fn1.call(null,G__23679));
});})(val_23680,ret))
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
var G__23690 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23690) : cljs.core.deref.call(null,G__23690));
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
var ret = (function (){var G__23691 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23691) : cljs.core.deref.call(null,G__23691));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__23692_23694 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23692_23694) : fn1.call(null,G__23692_23694));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__23693 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23693) : fn1.call(null,G__23693));
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
var n__4517__auto___23695 = n;
var x_23696 = (0);
while(true){
if((x_23696 < n__4517__auto___23695)){
(a[x_23696] = (0));

var G__23697 = (x_23696 + (1));
x_23696 = G__23697;
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

var G__23698 = (i + (1));
i = G__23698;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__23706 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23706) : cljs.core.atom.call(null,G__23706));
})();
if(typeof cljs.core.async.t23707 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23707 = (function (flag,alt_flag,meta23708){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23708 = meta23708;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23707.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23707.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23710 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23710) : cljs.core.deref.call(null,G__23710));
});})(flag))
;

cljs.core.async.t23707.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23711_23713 = self__.flag;
var G__23712_23714 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23711_23713,G__23712_23714) : cljs.core.reset_BANG_.call(null,G__23711_23713,G__23712_23714));

return true;
});})(flag))
;

cljs.core.async.t23707.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23709){
var self__ = this;
var _23709__$1 = this;
return self__.meta23708;
});})(flag))
;

cljs.core.async.t23707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23709,meta23708__$1){
var self__ = this;
var _23709__$1 = this;
return (new cljs.core.async.t23707(self__.flag,self__.alt_flag,meta23708__$1));
});})(flag))
;

cljs.core.async.t23707.cljs$lang$type = true;

cljs.core.async.t23707.cljs$lang$ctorStr = "cljs.core.async/t23707";

cljs.core.async.t23707.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23707");
});})(flag))
;

cljs.core.async.__GT_t23707 = ((function (flag){
return (function __GT_t23707(flag__$1,alt_flag__$1,meta23708){
return (new cljs.core.async.t23707(flag__$1,alt_flag__$1,meta23708));
});})(flag))
;

}

return (new cljs.core.async.t23707(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,15,cljs.core.constant$keyword$9,146,cljs.core.constant$keyword$10,5,cljs.core.constant$keyword$11,141,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t23718 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23718 = (function (cb,flag,alt_handler,meta23719){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23719 = meta23719;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23718.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23718.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t23718.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t23718.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23720){
var self__ = this;
var _23720__$1 = this;
return self__.meta23719;
});

cljs.core.async.t23718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23720,meta23719__$1){
var self__ = this;
var _23720__$1 = this;
return (new cljs.core.async.t23718(self__.cb,self__.flag,self__.alt_handler,meta23719__$1));
});

cljs.core.async.t23718.cljs$lang$type = true;

cljs.core.async.t23718.cljs$lang$ctorStr = "cljs.core.async/t23718";

cljs.core.async.t23718.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23718");
});

cljs.core.async.__GT_t23718 = (function __GT_t23718(cb__$1,flag__$1,alt_handler__$1,meta23719){
return (new cljs.core.async.t23718(cb__$1,flag__$1,alt_handler__$1,meta23719));
});

}

return (new cljs.core.async.t23718(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,11,cljs.core.constant$keyword$9,154,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,149,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
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
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__23728 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__23728) : port.call(null,G__23728));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__23729 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__23729) : port.call(null,G__23729));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23721_SHARP_){
var G__23730 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23721_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__23730) : fret.call(null,G__23730));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23722_SHARP_){
var G__23731 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23722_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__23731) : fret.call(null,G__23731));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23732 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23732) : cljs.core.deref.call(null,G__23732));
})(),(function (){var or__3630__auto__ = wport;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23733 = (i + (1));
i = G__23733;
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
var alts_BANG___delegate = function (ports,p__23734){
var map__23736 = p__23734;
var map__23736__$1 = ((cljs.core.seq_QMARK_(map__23736))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23736):map__23736);
var opts = map__23736__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__23734 = null;
if (arguments.length > 1) {
  p__23734 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__23734);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23737){
var ports = cljs.core.first(arglist__23737);
var p__23734 = cljs.core.rest(arglist__23737);
return alts_BANG___delegate(ports,p__23734);
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
var c__5853__auto___23835 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___23835){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___23835){
return (function (state_23811){
var state_val_23812 = (state_23811[(1)]);
if((state_val_23812 === (7))){
var inst_23807 = (state_23811[(2)]);
var state_23811__$1 = state_23811;
var statearr_23813_23836 = state_23811__$1;
(statearr_23813_23836[(2)] = inst_23807);

(statearr_23813_23836[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23812 === (1))){
var state_23811__$1 = state_23811;
var statearr_23814_23837 = state_23811__$1;
(statearr_23814_23837[(2)] = null);

(statearr_23814_23837[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23812 === (4))){
var inst_23790 = (state_23811[(7)]);
var inst_23790__$1 = (state_23811[(2)]);
var inst_23791 = (inst_23790__$1 == null);
var state_23811__$1 = (function (){var statearr_23815 = state_23811;
(statearr_23815[(7)] = inst_23790__$1);

return statearr_23815;
})();
if(cljs.core.truth_(inst_23791)){
var statearr_23816_23838 = state_23811__$1;
(statearr_23816_23838[(1)] = (5));

} else {
var statearr_23817_23839 = state_23811__$1;
(statearr_23817_23839[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23812 === (13))){
var state_23811__$1 = state_23811;
var statearr_23818_23840 = state_23811__$1;
(statearr_23818_23840[(2)] = null);

(statearr_23818_23840[(1)] = (14));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23812 === (6))){
var inst_23790 = (state_23811[(7)]);
var state_23811__$1 = state_23811;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23811__$1,(11),to,inst_23790);
} else {
if((state_val_23812 === (3))){
var inst_23809 = (state_23811[(2)]);
var state_23811__$1 = state_23811;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23811__$1,inst_23809);
} else {
if((state_val_23812 === (12))){
var state_23811__$1 = state_23811;
var statearr_23819_23841 = state_23811__$1;
(statearr_23819_23841[(2)] = null);

(statearr_23819_23841[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23812 === (2))){
var state_23811__$1 = state_23811;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23811__$1,(4),from);
} else {
if((state_val_23812 === (11))){
var inst_23800 = (state_23811[(2)]);
var state_23811__$1 = state_23811;
if(cljs.core.truth_(inst_23800)){
var statearr_23820_23842 = state_23811__$1;
(statearr_23820_23842[(1)] = (12));

} else {
var statearr_23821_23843 = state_23811__$1;
(statearr_23821_23843[(1)] = (13));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23812 === (9))){
var state_23811__$1 = state_23811;
var statearr_23822_23844 = state_23811__$1;
(statearr_23822_23844[(2)] = null);

(statearr_23822_23844[(1)] = (10));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23812 === (5))){
var state_23811__$1 = state_23811;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23823_23845 = state_23811__$1;
(statearr_23823_23845[(1)] = (8));

} else {
var statearr_23824_23846 = state_23811__$1;
(statearr_23824_23846[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_23812 === (14))){
var inst_23805 = (state_23811[(2)]);
var state_23811__$1 = state_23811;
var statearr_23825_23847 = state_23811__$1;
(statearr_23825_23847[(2)] = inst_23805);

(statearr_23825_23847[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23812 === (10))){
var inst_23797 = (state_23811[(2)]);
var state_23811__$1 = state_23811;
var statearr_23826_23848 = state_23811__$1;
(statearr_23826_23848[(2)] = inst_23797);

(statearr_23826_23848[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_23812 === (8))){
var inst_23794 = cljs.core.async.close_BANG_(to);
var state_23811__$1 = state_23811;
var statearr_23827_23849 = state_23811__$1;
(statearr_23827_23849[(2)] = inst_23794);

(statearr_23827_23849[(1)] = (10));


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
});})(c__5853__auto___23835))
;
return ((function (switch__5838__auto__,c__5853__auto___23835){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_23831 = [null,null,null,null,null,null,null,null];
(statearr_23831[(0)] = state_machine__5839__auto__);

(statearr_23831[(1)] = (1));

return statearr_23831;
});
var state_machine__5839__auto____1 = (function (state_23811){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_23811);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e23832){if((e23832 instanceof Object)){
var ex__5842__auto__ = e23832;
var statearr_23833_23850 = state_23811;
(statearr_23833_23850[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23811);

return cljs.core.constant$keyword$41;
} else {
throw e23832;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__23851 = state_23811;
state_23811 = G__23851;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_23811){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_23811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___23835))
})();
var state__5855__auto__ = (function (){var statearr_23834 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_23834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___23835);

return statearr_23834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___23835))
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
return (function (p__24037){
var vec__24038 = p__24037;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24038,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24038,(1),null);
var job = vec__24038;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__5853__auto___24222 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___24222,res,vec__24038,v,p,job,jobs,results){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___24222,res,vec__24038,v,p,job,jobs,results){
return (function (state_24043){
var state_val_24044 = (state_24043[(1)]);
if((state_val_24044 === (2))){
var inst_24040 = (state_24043[(2)]);
var inst_24041 = cljs.core.async.close_BANG_(res);
var state_24043__$1 = (function (){var statearr_24045 = state_24043;
(statearr_24045[(7)] = inst_24040);

return statearr_24045;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24043__$1,inst_24041);
} else {
if((state_val_24044 === (1))){
var state_24043__$1 = state_24043;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24043__$1,(2),res,v);
} else {
return null;
}
}
});})(c__5853__auto___24222,res,vec__24038,v,p,job,jobs,results))
;
return ((function (switch__5838__auto__,c__5853__auto___24222,res,vec__24038,v,p,job,jobs,results){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_24049 = [null,null,null,null,null,null,null,null];
(statearr_24049[(0)] = state_machine__5839__auto__);

(statearr_24049[(1)] = (1));

return statearr_24049;
});
var state_machine__5839__auto____1 = (function (state_24043){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_24043);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e24050){if((e24050 instanceof Object)){
var ex__5842__auto__ = e24050;
var statearr_24051_24223 = state_24043;
(statearr_24051_24223[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24043);

return cljs.core.constant$keyword$41;
} else {
throw e24050;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__24224 = state_24043;
state_24043 = G__24224;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_24043){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_24043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___24222,res,vec__24038,v,p,job,jobs,results))
})();
var state__5855__auto__ = (function (){var statearr_24052 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_24052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___24222);

return statearr_24052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___24222,res,vec__24038,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24053){
var vec__24054 = p__24053;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24054,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24054,(1),null);
var job = vec__24054;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__24055_24225 = v;
var G__24056_24226 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__24055_24225,G__24056_24226) : xf.call(null,G__24055_24225,G__24056_24226));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4517__auto___24227 = n;
var __24228 = (0);
while(true){
if((__24228 < n__4517__auto___24227)){
var G__24057_24229 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24057_24229) {
case "async":
var c__5853__auto___24231 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24228,c__5853__auto___24231,G__24057_24229,n__4517__auto___24227,jobs,results,process,async){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (__24228,c__5853__auto___24231,G__24057_24229,n__4517__auto___24227,jobs,results,process,async){
return (function (state_24070){
var state_val_24071 = (state_24070[(1)]);
if((state_val_24071 === (7))){
var inst_24066 = (state_24070[(2)]);
var state_24070__$1 = state_24070;
var statearr_24072_24232 = state_24070__$1;
(statearr_24072_24232[(2)] = inst_24066);

(statearr_24072_24232[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24071 === (6))){
var state_24070__$1 = state_24070;
var statearr_24073_24233 = state_24070__$1;
(statearr_24073_24233[(2)] = null);

(statearr_24073_24233[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24071 === (5))){
var state_24070__$1 = state_24070;
var statearr_24074_24234 = state_24070__$1;
(statearr_24074_24234[(2)] = null);

(statearr_24074_24234[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24071 === (4))){
var inst_24060 = (state_24070[(2)]);
var inst_24061 = async(inst_24060);
var state_24070__$1 = state_24070;
if(cljs.core.truth_(inst_24061)){
var statearr_24075_24235 = state_24070__$1;
(statearr_24075_24235[(1)] = (5));

} else {
var statearr_24076_24236 = state_24070__$1;
(statearr_24076_24236[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24071 === (3))){
var inst_24068 = (state_24070[(2)]);
var state_24070__$1 = state_24070;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24070__$1,inst_24068);
} else {
if((state_val_24071 === (2))){
var state_24070__$1 = state_24070;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24070__$1,(4),jobs);
} else {
if((state_val_24071 === (1))){
var state_24070__$1 = state_24070;
var statearr_24077_24237 = state_24070__$1;
(statearr_24077_24237[(2)] = null);

(statearr_24077_24237[(1)] = (2));


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
});})(__24228,c__5853__auto___24231,G__24057_24229,n__4517__auto___24227,jobs,results,process,async))
;
return ((function (__24228,switch__5838__auto__,c__5853__auto___24231,G__24057_24229,n__4517__auto___24227,jobs,results,process,async){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_24081 = [null,null,null,null,null,null,null];
(statearr_24081[(0)] = state_machine__5839__auto__);

(statearr_24081[(1)] = (1));

return statearr_24081;
});
var state_machine__5839__auto____1 = (function (state_24070){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_24070);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e24082){if((e24082 instanceof Object)){
var ex__5842__auto__ = e24082;
var statearr_24083_24238 = state_24070;
(statearr_24083_24238[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24070);

return cljs.core.constant$keyword$41;
} else {
throw e24082;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__24239 = state_24070;
state_24070 = G__24239;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_24070){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_24070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(__24228,switch__5838__auto__,c__5853__auto___24231,G__24057_24229,n__4517__auto___24227,jobs,results,process,async))
})();
var state__5855__auto__ = (function (){var statearr_24084 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_24084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___24231);

return statearr_24084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(__24228,c__5853__auto___24231,G__24057_24229,n__4517__auto___24227,jobs,results,process,async))
);


break;
case "compute":
var c__5853__auto___24240 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24228,c__5853__auto___24240,G__24057_24229,n__4517__auto___24227,jobs,results,process,async){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (__24228,c__5853__auto___24240,G__24057_24229,n__4517__auto___24227,jobs,results,process,async){
return (function (state_24097){
var state_val_24098 = (state_24097[(1)]);
if((state_val_24098 === (7))){
var inst_24093 = (state_24097[(2)]);
var state_24097__$1 = state_24097;
var statearr_24099_24241 = state_24097__$1;
(statearr_24099_24241[(2)] = inst_24093);

(statearr_24099_24241[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24098 === (6))){
var state_24097__$1 = state_24097;
var statearr_24100_24242 = state_24097__$1;
(statearr_24100_24242[(2)] = null);

(statearr_24100_24242[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24098 === (5))){
var state_24097__$1 = state_24097;
var statearr_24101_24243 = state_24097__$1;
(statearr_24101_24243[(2)] = null);

(statearr_24101_24243[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24098 === (4))){
var inst_24087 = (state_24097[(2)]);
var inst_24088 = process(inst_24087);
var state_24097__$1 = state_24097;
if(cljs.core.truth_(inst_24088)){
var statearr_24102_24244 = state_24097__$1;
(statearr_24102_24244[(1)] = (5));

} else {
var statearr_24103_24245 = state_24097__$1;
(statearr_24103_24245[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24098 === (3))){
var inst_24095 = (state_24097[(2)]);
var state_24097__$1 = state_24097;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24097__$1,inst_24095);
} else {
if((state_val_24098 === (2))){
var state_24097__$1 = state_24097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24097__$1,(4),jobs);
} else {
if((state_val_24098 === (1))){
var state_24097__$1 = state_24097;
var statearr_24104_24246 = state_24097__$1;
(statearr_24104_24246[(2)] = null);

(statearr_24104_24246[(1)] = (2));


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
});})(__24228,c__5853__auto___24240,G__24057_24229,n__4517__auto___24227,jobs,results,process,async))
;
return ((function (__24228,switch__5838__auto__,c__5853__auto___24240,G__24057_24229,n__4517__auto___24227,jobs,results,process,async){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_24108 = [null,null,null,null,null,null,null];
(statearr_24108[(0)] = state_machine__5839__auto__);

(statearr_24108[(1)] = (1));

return statearr_24108;
});
var state_machine__5839__auto____1 = (function (state_24097){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_24097);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e24109){if((e24109 instanceof Object)){
var ex__5842__auto__ = e24109;
var statearr_24110_24247 = state_24097;
(statearr_24110_24247[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24097);

return cljs.core.constant$keyword$41;
} else {
throw e24109;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__24248 = state_24097;
state_24097 = G__24248;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_24097){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_24097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(__24228,switch__5838__auto__,c__5853__auto___24240,G__24057_24229,n__4517__auto___24227,jobs,results,process,async))
})();
var state__5855__auto__ = (function (){var statearr_24111 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_24111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___24240);

return statearr_24111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(__24228,c__5853__auto___24240,G__24057_24229,n__4517__auto___24227,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24249 = (__24228 + (1));
__24228 = G__24249;
continue;
} else {
}
break;
}

var c__5853__auto___24250 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___24250,jobs,results,process,async){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___24250,jobs,results,process,async){
return (function (state_24133){
var state_val_24134 = (state_24133[(1)]);
if((state_val_24134 === (9))){
var inst_24126 = (state_24133[(2)]);
var state_24133__$1 = (function (){var statearr_24135 = state_24133;
(statearr_24135[(7)] = inst_24126);

return statearr_24135;
})();
var statearr_24136_24251 = state_24133__$1;
(statearr_24136_24251[(2)] = null);

(statearr_24136_24251[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24134 === (8))){
var inst_24119 = (state_24133[(8)]);
var inst_24124 = (state_24133[(2)]);
var state_24133__$1 = (function (){var statearr_24137 = state_24133;
(statearr_24137[(9)] = inst_24124);

return statearr_24137;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24133__$1,(9),results,inst_24119);
} else {
if((state_val_24134 === (7))){
var inst_24129 = (state_24133[(2)]);
var state_24133__$1 = state_24133;
var statearr_24138_24252 = state_24133__$1;
(statearr_24138_24252[(2)] = inst_24129);

(statearr_24138_24252[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24134 === (6))){
var inst_24114 = (state_24133[(10)]);
var inst_24119 = (state_24133[(8)]);
var inst_24119__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_24120 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24121 = [inst_24114,inst_24119__$1];
var inst_24122 = (new cljs.core.PersistentVector(null,2,(5),inst_24120,inst_24121,null));
var state_24133__$1 = (function (){var statearr_24139 = state_24133;
(statearr_24139[(8)] = inst_24119__$1);

return statearr_24139;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24133__$1,(8),jobs,inst_24122);
} else {
if((state_val_24134 === (5))){
var inst_24117 = cljs.core.async.close_BANG_(jobs);
var state_24133__$1 = state_24133;
var statearr_24140_24253 = state_24133__$1;
(statearr_24140_24253[(2)] = inst_24117);

(statearr_24140_24253[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24134 === (4))){
var inst_24114 = (state_24133[(10)]);
var inst_24114__$1 = (state_24133[(2)]);
var inst_24115 = (inst_24114__$1 == null);
var state_24133__$1 = (function (){var statearr_24141 = state_24133;
(statearr_24141[(10)] = inst_24114__$1);

return statearr_24141;
})();
if(cljs.core.truth_(inst_24115)){
var statearr_24142_24254 = state_24133__$1;
(statearr_24142_24254[(1)] = (5));

} else {
var statearr_24143_24255 = state_24133__$1;
(statearr_24143_24255[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24134 === (3))){
var inst_24131 = (state_24133[(2)]);
var state_24133__$1 = state_24133;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24133__$1,inst_24131);
} else {
if((state_val_24134 === (2))){
var state_24133__$1 = state_24133;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24133__$1,(4),from);
} else {
if((state_val_24134 === (1))){
var state_24133__$1 = state_24133;
var statearr_24144_24256 = state_24133__$1;
(statearr_24144_24256[(2)] = null);

(statearr_24144_24256[(1)] = (2));


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
});})(c__5853__auto___24250,jobs,results,process,async))
;
return ((function (switch__5838__auto__,c__5853__auto___24250,jobs,results,process,async){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_24148 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24148[(0)] = state_machine__5839__auto__);

(statearr_24148[(1)] = (1));

return statearr_24148;
});
var state_machine__5839__auto____1 = (function (state_24133){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_24133);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e24149){if((e24149 instanceof Object)){
var ex__5842__auto__ = e24149;
var statearr_24150_24257 = state_24133;
(statearr_24150_24257[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24133);

return cljs.core.constant$keyword$41;
} else {
throw e24149;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__24258 = state_24133;
state_24133 = G__24258;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_24133){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_24133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___24250,jobs,results,process,async))
})();
var state__5855__auto__ = (function (){var statearr_24151 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_24151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___24250);

return statearr_24151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___24250,jobs,results,process,async))
);


var c__5853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto__,jobs,results,process,async){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto__,jobs,results,process,async){
return (function (state_24189){
var state_val_24190 = (state_24189[(1)]);
if((state_val_24190 === (7))){
var inst_24185 = (state_24189[(2)]);
var state_24189__$1 = state_24189;
var statearr_24191_24259 = state_24189__$1;
(statearr_24191_24259[(2)] = inst_24185);

(statearr_24191_24259[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24190 === (20))){
var state_24189__$1 = state_24189;
var statearr_24192_24260 = state_24189__$1;
(statearr_24192_24260[(2)] = null);

(statearr_24192_24260[(1)] = (21));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24190 === (1))){
var state_24189__$1 = state_24189;
var statearr_24193_24261 = state_24189__$1;
(statearr_24193_24261[(2)] = null);

(statearr_24193_24261[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24190 === (4))){
var inst_24154 = (state_24189[(7)]);
var inst_24154__$1 = (state_24189[(2)]);
var inst_24155 = (inst_24154__$1 == null);
var state_24189__$1 = (function (){var statearr_24194 = state_24189;
(statearr_24194[(7)] = inst_24154__$1);

return statearr_24194;
})();
if(cljs.core.truth_(inst_24155)){
var statearr_24195_24262 = state_24189__$1;
(statearr_24195_24262[(1)] = (5));

} else {
var statearr_24196_24263 = state_24189__$1;
(statearr_24196_24263[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24190 === (15))){
var inst_24167 = (state_24189[(8)]);
var state_24189__$1 = state_24189;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24189__$1,(18),to,inst_24167);
} else {
if((state_val_24190 === (21))){
var inst_24180 = (state_24189[(2)]);
var state_24189__$1 = state_24189;
var statearr_24197_24264 = state_24189__$1;
(statearr_24197_24264[(2)] = inst_24180);

(statearr_24197_24264[(1)] = (13));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24190 === (13))){
var inst_24182 = (state_24189[(2)]);
var state_24189__$1 = (function (){var statearr_24198 = state_24189;
(statearr_24198[(9)] = inst_24182);

return statearr_24198;
})();
var statearr_24199_24265 = state_24189__$1;
(statearr_24199_24265[(2)] = null);

(statearr_24199_24265[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24190 === (6))){
var inst_24154 = (state_24189[(7)]);
var state_24189__$1 = state_24189;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24189__$1,(11),inst_24154);
} else {
if((state_val_24190 === (17))){
var inst_24175 = (state_24189[(2)]);
var state_24189__$1 = state_24189;
if(cljs.core.truth_(inst_24175)){
var statearr_24200_24266 = state_24189__$1;
(statearr_24200_24266[(1)] = (19));

} else {
var statearr_24201_24267 = state_24189__$1;
(statearr_24201_24267[(1)] = (20));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24190 === (3))){
var inst_24187 = (state_24189[(2)]);
var state_24189__$1 = state_24189;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24189__$1,inst_24187);
} else {
if((state_val_24190 === (12))){
var inst_24164 = (state_24189[(10)]);
var state_24189__$1 = state_24189;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24189__$1,(14),inst_24164);
} else {
if((state_val_24190 === (2))){
var state_24189__$1 = state_24189;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24189__$1,(4),results);
} else {
if((state_val_24190 === (19))){
var state_24189__$1 = state_24189;
var statearr_24202_24268 = state_24189__$1;
(statearr_24202_24268[(2)] = null);

(statearr_24202_24268[(1)] = (12));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24190 === (11))){
var inst_24164 = (state_24189[(2)]);
var state_24189__$1 = (function (){var statearr_24203 = state_24189;
(statearr_24203[(10)] = inst_24164);

return statearr_24203;
})();
var statearr_24204_24269 = state_24189__$1;
(statearr_24204_24269[(2)] = null);

(statearr_24204_24269[(1)] = (12));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24190 === (9))){
var state_24189__$1 = state_24189;
var statearr_24205_24270 = state_24189__$1;
(statearr_24205_24270[(2)] = null);

(statearr_24205_24270[(1)] = (10));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24190 === (5))){
var state_24189__$1 = state_24189;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24206_24271 = state_24189__$1;
(statearr_24206_24271[(1)] = (8));

} else {
var statearr_24207_24272 = state_24189__$1;
(statearr_24207_24272[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24190 === (14))){
var inst_24167 = (state_24189[(8)]);
var inst_24169 = (state_24189[(11)]);
var inst_24167__$1 = (state_24189[(2)]);
var inst_24168 = (inst_24167__$1 == null);
var inst_24169__$1 = cljs.core.not(inst_24168);
var state_24189__$1 = (function (){var statearr_24208 = state_24189;
(statearr_24208[(8)] = inst_24167__$1);

(statearr_24208[(11)] = inst_24169__$1);

return statearr_24208;
})();
if(inst_24169__$1){
var statearr_24209_24273 = state_24189__$1;
(statearr_24209_24273[(1)] = (15));

} else {
var statearr_24210_24274 = state_24189__$1;
(statearr_24210_24274[(1)] = (16));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24190 === (16))){
var inst_24169 = (state_24189[(11)]);
var state_24189__$1 = state_24189;
var statearr_24211_24275 = state_24189__$1;
(statearr_24211_24275[(2)] = inst_24169);

(statearr_24211_24275[(1)] = (17));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24190 === (10))){
var inst_24161 = (state_24189[(2)]);
var state_24189__$1 = state_24189;
var statearr_24212_24276 = state_24189__$1;
(statearr_24212_24276[(2)] = inst_24161);

(statearr_24212_24276[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24190 === (18))){
var inst_24172 = (state_24189[(2)]);
var state_24189__$1 = state_24189;
var statearr_24213_24277 = state_24189__$1;
(statearr_24213_24277[(2)] = inst_24172);

(statearr_24213_24277[(1)] = (17));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24190 === (8))){
var inst_24158 = cljs.core.async.close_BANG_(to);
var state_24189__$1 = state_24189;
var statearr_24214_24278 = state_24189__$1;
(statearr_24214_24278[(2)] = inst_24158);

(statearr_24214_24278[(1)] = (10));


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
var statearr_24218 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24218[(0)] = state_machine__5839__auto__);

(statearr_24218[(1)] = (1));

return statearr_24218;
});
var state_machine__5839__auto____1 = (function (state_24189){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_24189);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e24219){if((e24219 instanceof Object)){
var ex__5842__auto__ = e24219;
var statearr_24220_24279 = state_24189;
(statearr_24220_24279[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24189);

return cljs.core.constant$keyword$41;
} else {
throw e24219;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__24280 = state_24189;
state_24189 = G__24280;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_24189){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_24189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto__,jobs,results,process,async))
})();
var state__5855__auto__ = (function (){var statearr_24221 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_24221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto__);

return statearr_24221;
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
var c__5853__auto___24403 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___24403,tc,fc){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___24403,tc,fc){
return (function (state_24377){
var state_val_24378 = (state_24377[(1)]);
if((state_val_24378 === (7))){
var inst_24373 = (state_24377[(2)]);
var state_24377__$1 = state_24377;
var statearr_24379_24404 = state_24377__$1;
(statearr_24379_24404[(2)] = inst_24373);

(statearr_24379_24404[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24378 === (1))){
var state_24377__$1 = state_24377;
var statearr_24380_24405 = state_24377__$1;
(statearr_24380_24405[(2)] = null);

(statearr_24380_24405[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24378 === (4))){
var inst_24354 = (state_24377[(7)]);
var inst_24354__$1 = (state_24377[(2)]);
var inst_24355 = (inst_24354__$1 == null);
var state_24377__$1 = (function (){var statearr_24381 = state_24377;
(statearr_24381[(7)] = inst_24354__$1);

return statearr_24381;
})();
if(cljs.core.truth_(inst_24355)){
var statearr_24382_24406 = state_24377__$1;
(statearr_24382_24406[(1)] = (5));

} else {
var statearr_24383_24407 = state_24377__$1;
(statearr_24383_24407[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24378 === (13))){
var state_24377__$1 = state_24377;
var statearr_24384_24408 = state_24377__$1;
(statearr_24384_24408[(2)] = null);

(statearr_24384_24408[(1)] = (14));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24378 === (6))){
var inst_24354 = (state_24377[(7)]);
var inst_24360 = (function (){var G__24385 = inst_24354;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__24385) : p.call(null,G__24385));
})();
var state_24377__$1 = state_24377;
if(cljs.core.truth_(inst_24360)){
var statearr_24386_24409 = state_24377__$1;
(statearr_24386_24409[(1)] = (9));

} else {
var statearr_24387_24410 = state_24377__$1;
(statearr_24387_24410[(1)] = (10));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24378 === (3))){
var inst_24375 = (state_24377[(2)]);
var state_24377__$1 = state_24377;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24377__$1,inst_24375);
} else {
if((state_val_24378 === (12))){
var state_24377__$1 = state_24377;
var statearr_24388_24411 = state_24377__$1;
(statearr_24388_24411[(2)] = null);

(statearr_24388_24411[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24378 === (2))){
var state_24377__$1 = state_24377;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24377__$1,(4),ch);
} else {
if((state_val_24378 === (11))){
var inst_24354 = (state_24377[(7)]);
var inst_24364 = (state_24377[(2)]);
var state_24377__$1 = state_24377;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24377__$1,(8),inst_24364,inst_24354);
} else {
if((state_val_24378 === (9))){
var state_24377__$1 = state_24377;
var statearr_24389_24412 = state_24377__$1;
(statearr_24389_24412[(2)] = tc);

(statearr_24389_24412[(1)] = (11));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24378 === (5))){
var inst_24357 = cljs.core.async.close_BANG_(tc);
var inst_24358 = cljs.core.async.close_BANG_(fc);
var state_24377__$1 = (function (){var statearr_24390 = state_24377;
(statearr_24390[(8)] = inst_24357);

return statearr_24390;
})();
var statearr_24391_24413 = state_24377__$1;
(statearr_24391_24413[(2)] = inst_24358);

(statearr_24391_24413[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24378 === (14))){
var inst_24371 = (state_24377[(2)]);
var state_24377__$1 = state_24377;
var statearr_24392_24414 = state_24377__$1;
(statearr_24392_24414[(2)] = inst_24371);

(statearr_24392_24414[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24378 === (10))){
var state_24377__$1 = state_24377;
var statearr_24393_24415 = state_24377__$1;
(statearr_24393_24415[(2)] = fc);

(statearr_24393_24415[(1)] = (11));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24378 === (8))){
var inst_24366 = (state_24377[(2)]);
var state_24377__$1 = state_24377;
if(cljs.core.truth_(inst_24366)){
var statearr_24394_24416 = state_24377__$1;
(statearr_24394_24416[(1)] = (12));

} else {
var statearr_24395_24417 = state_24377__$1;
(statearr_24395_24417[(1)] = (13));

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
});})(c__5853__auto___24403,tc,fc))
;
return ((function (switch__5838__auto__,c__5853__auto___24403,tc,fc){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_24399 = [null,null,null,null,null,null,null,null,null];
(statearr_24399[(0)] = state_machine__5839__auto__);

(statearr_24399[(1)] = (1));

return statearr_24399;
});
var state_machine__5839__auto____1 = (function (state_24377){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_24377);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e24400){if((e24400 instanceof Object)){
var ex__5842__auto__ = e24400;
var statearr_24401_24418 = state_24377;
(statearr_24401_24418[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24377);

return cljs.core.constant$keyword$41;
} else {
throw e24400;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__24419 = state_24377;
state_24377 = G__24419;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_24377){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_24377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___24403,tc,fc))
})();
var state__5855__auto__ = (function (){var statearr_24402 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_24402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___24403);

return statearr_24402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___24403,tc,fc))
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
return (function (state_24468){
var state_val_24469 = (state_24468[(1)]);
if((state_val_24469 === (7))){
var inst_24464 = (state_24468[(2)]);
var state_24468__$1 = state_24468;
var statearr_24470_24488 = state_24468__$1;
(statearr_24470_24488[(2)] = inst_24464);

(statearr_24470_24488[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24469 === (6))){
var inst_24457 = (state_24468[(7)]);
var inst_24454 = (state_24468[(8)]);
var inst_24461 = (function (){var G__24471 = inst_24454;
var G__24472 = inst_24457;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24471,G__24472) : f.call(null,G__24471,G__24472));
})();
var inst_24454__$1 = inst_24461;
var state_24468__$1 = (function (){var statearr_24473 = state_24468;
(statearr_24473[(8)] = inst_24454__$1);

return statearr_24473;
})();
var statearr_24474_24489 = state_24468__$1;
(statearr_24474_24489[(2)] = null);

(statearr_24474_24489[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24469 === (5))){
var inst_24454 = (state_24468[(8)]);
var state_24468__$1 = state_24468;
var statearr_24475_24490 = state_24468__$1;
(statearr_24475_24490[(2)] = inst_24454);

(statearr_24475_24490[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24469 === (4))){
var inst_24457 = (state_24468[(7)]);
var inst_24457__$1 = (state_24468[(2)]);
var inst_24458 = (inst_24457__$1 == null);
var state_24468__$1 = (function (){var statearr_24476 = state_24468;
(statearr_24476[(7)] = inst_24457__$1);

return statearr_24476;
})();
if(cljs.core.truth_(inst_24458)){
var statearr_24477_24491 = state_24468__$1;
(statearr_24477_24491[(1)] = (5));

} else {
var statearr_24478_24492 = state_24468__$1;
(statearr_24478_24492[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24469 === (3))){
var inst_24466 = (state_24468[(2)]);
var state_24468__$1 = state_24468;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24468__$1,inst_24466);
} else {
if((state_val_24469 === (2))){
var state_24468__$1 = state_24468;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24468__$1,(4),ch);
} else {
if((state_val_24469 === (1))){
var inst_24454 = init;
var state_24468__$1 = (function (){var statearr_24479 = state_24468;
(statearr_24479[(8)] = inst_24454);

return statearr_24479;
})();
var statearr_24480_24493 = state_24468__$1;
(statearr_24480_24493[(2)] = null);

(statearr_24480_24493[(1)] = (2));


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
var statearr_24484 = [null,null,null,null,null,null,null,null,null];
(statearr_24484[(0)] = state_machine__5839__auto__);

(statearr_24484[(1)] = (1));

return statearr_24484;
});
var state_machine__5839__auto____1 = (function (state_24468){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_24468);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e24485){if((e24485 instanceof Object)){
var ex__5842__auto__ = e24485;
var statearr_24486_24494 = state_24468;
(statearr_24486_24494[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24468);

return cljs.core.constant$keyword$41;
} else {
throw e24485;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__24495 = state_24468;
state_24468 = G__24495;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_24468){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_24468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto__))
})();
var state__5855__auto__ = (function (){var statearr_24487 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_24487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto__);

return statearr_24487;
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
return (function (state_24572){
var state_val_24573 = (state_24572[(1)]);
if((state_val_24573 === (7))){
var inst_24554 = (state_24572[(2)]);
var state_24572__$1 = state_24572;
var statearr_24574_24597 = state_24572__$1;
(statearr_24574_24597[(2)] = inst_24554);

(statearr_24574_24597[(1)] = (6));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24573 === (1))){
var inst_24548 = cljs.core.seq(coll);
var inst_24549 = inst_24548;
var state_24572__$1 = (function (){var statearr_24575 = state_24572;
(statearr_24575[(7)] = inst_24549);

return statearr_24575;
})();
var statearr_24576_24598 = state_24572__$1;
(statearr_24576_24598[(2)] = null);

(statearr_24576_24598[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24573 === (4))){
var inst_24549 = (state_24572[(7)]);
var inst_24552 = cljs.core.first(inst_24549);
var state_24572__$1 = state_24572;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24572__$1,(7),ch,inst_24552);
} else {
if((state_val_24573 === (13))){
var inst_24566 = (state_24572[(2)]);
var state_24572__$1 = state_24572;
var statearr_24577_24599 = state_24572__$1;
(statearr_24577_24599[(2)] = inst_24566);

(statearr_24577_24599[(1)] = (10));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24573 === (6))){
var inst_24557 = (state_24572[(2)]);
var state_24572__$1 = state_24572;
if(cljs.core.truth_(inst_24557)){
var statearr_24578_24600 = state_24572__$1;
(statearr_24578_24600[(1)] = (8));

} else {
var statearr_24579_24601 = state_24572__$1;
(statearr_24579_24601[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24573 === (3))){
var inst_24570 = (state_24572[(2)]);
var state_24572__$1 = state_24572;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24572__$1,inst_24570);
} else {
if((state_val_24573 === (12))){
var state_24572__$1 = state_24572;
var statearr_24580_24602 = state_24572__$1;
(statearr_24580_24602[(2)] = null);

(statearr_24580_24602[(1)] = (13));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24573 === (2))){
var inst_24549 = (state_24572[(7)]);
var state_24572__$1 = state_24572;
if(cljs.core.truth_(inst_24549)){
var statearr_24581_24603 = state_24572__$1;
(statearr_24581_24603[(1)] = (4));

} else {
var statearr_24582_24604 = state_24572__$1;
(statearr_24582_24604[(1)] = (5));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24573 === (11))){
var inst_24563 = cljs.core.async.close_BANG_(ch);
var state_24572__$1 = state_24572;
var statearr_24583_24605 = state_24572__$1;
(statearr_24583_24605[(2)] = inst_24563);

(statearr_24583_24605[(1)] = (13));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24573 === (9))){
var state_24572__$1 = state_24572;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24584_24606 = state_24572__$1;
(statearr_24584_24606[(1)] = (11));

} else {
var statearr_24585_24607 = state_24572__$1;
(statearr_24585_24607[(1)] = (12));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_24573 === (5))){
var inst_24549 = (state_24572[(7)]);
var state_24572__$1 = state_24572;
var statearr_24586_24608 = state_24572__$1;
(statearr_24586_24608[(2)] = inst_24549);

(statearr_24586_24608[(1)] = (6));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24573 === (10))){
var inst_24568 = (state_24572[(2)]);
var state_24572__$1 = state_24572;
var statearr_24587_24609 = state_24572__$1;
(statearr_24587_24609[(2)] = inst_24568);

(statearr_24587_24609[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_24573 === (8))){
var inst_24549 = (state_24572[(7)]);
var inst_24559 = cljs.core.next(inst_24549);
var inst_24549__$1 = inst_24559;
var state_24572__$1 = (function (){var statearr_24588 = state_24572;
(statearr_24588[(7)] = inst_24549__$1);

return statearr_24588;
})();
var statearr_24589_24610 = state_24572__$1;
(statearr_24589_24610[(2)] = null);

(statearr_24589_24610[(1)] = (2));


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
var statearr_24593 = [null,null,null,null,null,null,null,null];
(statearr_24593[(0)] = state_machine__5839__auto__);

(statearr_24593[(1)] = (1));

return statearr_24593;
});
var state_machine__5839__auto____1 = (function (state_24572){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_24572);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e24594){if((e24594 instanceof Object)){
var ex__5842__auto__ = e24594;
var statearr_24595_24611 = state_24572;
(statearr_24595_24611[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24572);

return cljs.core.constant$keyword$41;
} else {
throw e24594;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__24612 = state_24572;
state_24572 = G__24612;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_24572){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_24572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto__))
})();
var state__5855__auto__ = (function (){var statearr_24596 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_24596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto__);

return statearr_24596;
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

cljs.core.async.Mux = (function (){var obj24614 = {};
return obj24614;
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
return (function (){var or__3630__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__24618 = x__4274__auto__;
return goog.typeOf(G__24618);
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


cljs.core.async.Mult = (function (){var obj24620 = {};
return obj24620;
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
return (function (){var or__3630__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__24624 = x__4274__auto__;
return goog.typeOf(G__24624);
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
return (function (){var or__3630__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__24628 = x__4274__auto__;
return goog.typeOf(G__24628);
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
return (function (){var or__3630__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__24632 = x__4274__auto__;
return goog.typeOf(G__24632);
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
var cs = (function (){var G__24862 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24862) : cljs.core.atom.call(null,G__24862));
})();
var m = (function (){
if(typeof cljs.core.async.t24863 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24863 = (function (cs,ch,mult,meta24864){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24864 = meta24864;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24863.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t24863.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t24863.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t24863.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__24866_25091 = self__.cs;
var G__24867_25092 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24866_25091,G__24867_25092) : cljs.core.reset_BANG_.call(null,G__24866_25091,G__24867_25092));

return null;
});})(cs))
;

cljs.core.async.t24863.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24863.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t24863.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24865){
var self__ = this;
var _24865__$1 = this;
return self__.meta24864;
});})(cs))
;

cljs.core.async.t24863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24865,meta24864__$1){
var self__ = this;
var _24865__$1 = this;
return (new cljs.core.async.t24863(self__.cs,self__.ch,self__.mult,meta24864__$1));
});})(cs))
;

cljs.core.async.t24863.cljs$lang$type = true;

cljs.core.async.t24863.cljs$lang$ctorStr = "cljs.core.async/t24863";

cljs.core.async.t24863.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24863");
});})(cs))
;

cljs.core.async.__GT_t24863 = ((function (cs){
return (function __GT_t24863(cs__$1,ch__$1,mult__$1,meta24864){
return (new cljs.core.async.t24863(cs__$1,ch__$1,mult__$1,meta24864));
});})(cs))
;

}

return (new cljs.core.async.t24863(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,397,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,390,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__24868 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24868) : cljs.core.atom.call(null,G__24868));
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
var c__5853__auto___25093 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___25093,cs,m,dchan,dctr,done){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___25093,cs,m,dchan,dctr,done){
return (function (state_24999){
var state_val_25000 = (state_24999[(1)]);
if((state_val_25000 === (7))){
var inst_24995 = (state_24999[(2)]);
var state_24999__$1 = state_24999;
var statearr_25001_25094 = state_24999__$1;
(statearr_25001_25094[(2)] = inst_24995);

(statearr_25001_25094[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (20))){
var inst_24900 = (state_24999[(7)]);
var inst_24910 = cljs.core.first(inst_24900);
var inst_24911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24910,(0),null);
var inst_24912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24910,(1),null);
var state_24999__$1 = (function (){var statearr_25002 = state_24999;
(statearr_25002[(8)] = inst_24911);

return statearr_25002;
})();
if(cljs.core.truth_(inst_24912)){
var statearr_25003_25095 = state_24999__$1;
(statearr_25003_25095[(1)] = (22));

} else {
var statearr_25004_25096 = state_24999__$1;
(statearr_25004_25096[(1)] = (23));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (27))){
var inst_24940 = (state_24999[(9)]);
var inst_24947 = (state_24999[(10)]);
var inst_24871 = (state_24999[(11)]);
var inst_24942 = (state_24999[(12)]);
var inst_24947__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24940,inst_24942);
var inst_24948 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24947__$1,inst_24871,done);
var state_24999__$1 = (function (){var statearr_25005 = state_24999;
(statearr_25005[(10)] = inst_24947__$1);

return statearr_25005;
})();
if(cljs.core.truth_(inst_24948)){
var statearr_25006_25097 = state_24999__$1;
(statearr_25006_25097[(1)] = (30));

} else {
var statearr_25007_25098 = state_24999__$1;
(statearr_25007_25098[(1)] = (31));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (1))){
var state_24999__$1 = state_24999;
var statearr_25008_25099 = state_24999__$1;
(statearr_25008_25099[(2)] = null);

(statearr_25008_25099[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (24))){
var inst_24900 = (state_24999[(7)]);
var inst_24917 = (state_24999[(2)]);
var inst_24918 = cljs.core.next(inst_24900);
var inst_24880 = inst_24918;
var inst_24881 = null;
var inst_24882 = (0);
var inst_24883 = (0);
var state_24999__$1 = (function (){var statearr_25009 = state_24999;
(statearr_25009[(13)] = inst_24882);

(statearr_25009[(14)] = inst_24880);

(statearr_25009[(15)] = inst_24881);

(statearr_25009[(16)] = inst_24883);

(statearr_25009[(17)] = inst_24917);

return statearr_25009;
})();
var statearr_25010_25100 = state_24999__$1;
(statearr_25010_25100[(2)] = null);

(statearr_25010_25100[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (39))){
var state_24999__$1 = state_24999;
var statearr_25014_25101 = state_24999__$1;
(statearr_25014_25101[(2)] = null);

(statearr_25014_25101[(1)] = (41));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (4))){
var inst_24871 = (state_24999[(11)]);
var inst_24871__$1 = (state_24999[(2)]);
var inst_24872 = (inst_24871__$1 == null);
var state_24999__$1 = (function (){var statearr_25015 = state_24999;
(statearr_25015[(11)] = inst_24871__$1);

return statearr_25015;
})();
if(cljs.core.truth_(inst_24872)){
var statearr_25016_25102 = state_24999__$1;
(statearr_25016_25102[(1)] = (5));

} else {
var statearr_25017_25103 = state_24999__$1;
(statearr_25017_25103[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (15))){
var inst_24882 = (state_24999[(13)]);
var inst_24880 = (state_24999[(14)]);
var inst_24881 = (state_24999[(15)]);
var inst_24883 = (state_24999[(16)]);
var inst_24896 = (state_24999[(2)]);
var inst_24897 = (inst_24883 + (1));
var tmp25011 = inst_24882;
var tmp25012 = inst_24880;
var tmp25013 = inst_24881;
var inst_24880__$1 = tmp25012;
var inst_24881__$1 = tmp25013;
var inst_24882__$1 = tmp25011;
var inst_24883__$1 = inst_24897;
var state_24999__$1 = (function (){var statearr_25018 = state_24999;
(statearr_25018[(13)] = inst_24882__$1);

(statearr_25018[(18)] = inst_24896);

(statearr_25018[(14)] = inst_24880__$1);

(statearr_25018[(15)] = inst_24881__$1);

(statearr_25018[(16)] = inst_24883__$1);

return statearr_25018;
})();
var statearr_25019_25104 = state_24999__$1;
(statearr_25019_25104[(2)] = null);

(statearr_25019_25104[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (21))){
var inst_24921 = (state_24999[(2)]);
var state_24999__$1 = state_24999;
var statearr_25023_25105 = state_24999__$1;
(statearr_25023_25105[(2)] = inst_24921);

(statearr_25023_25105[(1)] = (18));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (31))){
var inst_24947 = (state_24999[(10)]);
var inst_24951 = done(null);
var inst_24952 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24947);
var state_24999__$1 = (function (){var statearr_25024 = state_24999;
(statearr_25024[(19)] = inst_24951);

return statearr_25024;
})();
var statearr_25025_25106 = state_24999__$1;
(statearr_25025_25106[(2)] = inst_24952);

(statearr_25025_25106[(1)] = (32));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (32))){
var inst_24939 = (state_24999[(20)]);
var inst_24940 = (state_24999[(9)]);
var inst_24941 = (state_24999[(21)]);
var inst_24942 = (state_24999[(12)]);
var inst_24954 = (state_24999[(2)]);
var inst_24955 = (inst_24942 + (1));
var tmp25020 = inst_24939;
var tmp25021 = inst_24940;
var tmp25022 = inst_24941;
var inst_24939__$1 = tmp25020;
var inst_24940__$1 = tmp25021;
var inst_24941__$1 = tmp25022;
var inst_24942__$1 = inst_24955;
var state_24999__$1 = (function (){var statearr_25026 = state_24999;
(statearr_25026[(20)] = inst_24939__$1);

(statearr_25026[(9)] = inst_24940__$1);

(statearr_25026[(21)] = inst_24941__$1);

(statearr_25026[(22)] = inst_24954);

(statearr_25026[(12)] = inst_24942__$1);

return statearr_25026;
})();
var statearr_25027_25107 = state_24999__$1;
(statearr_25027_25107[(2)] = null);

(statearr_25027_25107[(1)] = (25));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (40))){
var inst_24967 = (state_24999[(23)]);
var inst_24971 = done(null);
var inst_24972 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24967);
var state_24999__$1 = (function (){var statearr_25028 = state_24999;
(statearr_25028[(24)] = inst_24971);

return statearr_25028;
})();
var statearr_25029_25108 = state_24999__$1;
(statearr_25029_25108[(2)] = inst_24972);

(statearr_25029_25108[(1)] = (41));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (33))){
var inst_24958 = (state_24999[(25)]);
var inst_24960 = cljs.core.chunked_seq_QMARK_(inst_24958);
var state_24999__$1 = state_24999;
if(inst_24960){
var statearr_25030_25109 = state_24999__$1;
(statearr_25030_25109[(1)] = (36));

} else {
var statearr_25031_25110 = state_24999__$1;
(statearr_25031_25110[(1)] = (37));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (13))){
var inst_24890 = (state_24999[(26)]);
var inst_24893 = cljs.core.async.close_BANG_(inst_24890);
var state_24999__$1 = state_24999;
var statearr_25032_25111 = state_24999__$1;
(statearr_25032_25111[(2)] = inst_24893);

(statearr_25032_25111[(1)] = (15));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (22))){
var inst_24911 = (state_24999[(8)]);
var inst_24914 = cljs.core.async.close_BANG_(inst_24911);
var state_24999__$1 = state_24999;
var statearr_25033_25112 = state_24999__$1;
(statearr_25033_25112[(2)] = inst_24914);

(statearr_25033_25112[(1)] = (24));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (36))){
var inst_24958 = (state_24999[(25)]);
var inst_24962 = cljs.core.chunk_first(inst_24958);
var inst_24963 = cljs.core.chunk_rest(inst_24958);
var inst_24964 = cljs.core.count(inst_24962);
var inst_24939 = inst_24963;
var inst_24940 = inst_24962;
var inst_24941 = inst_24964;
var inst_24942 = (0);
var state_24999__$1 = (function (){var statearr_25034 = state_24999;
(statearr_25034[(20)] = inst_24939);

(statearr_25034[(9)] = inst_24940);

(statearr_25034[(21)] = inst_24941);

(statearr_25034[(12)] = inst_24942);

return statearr_25034;
})();
var statearr_25035_25113 = state_24999__$1;
(statearr_25035_25113[(2)] = null);

(statearr_25035_25113[(1)] = (25));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (41))){
var inst_24958 = (state_24999[(25)]);
var inst_24974 = (state_24999[(2)]);
var inst_24975 = cljs.core.next(inst_24958);
var inst_24939 = inst_24975;
var inst_24940 = null;
var inst_24941 = (0);
var inst_24942 = (0);
var state_24999__$1 = (function (){var statearr_25036 = state_24999;
(statearr_25036[(20)] = inst_24939);

(statearr_25036[(9)] = inst_24940);

(statearr_25036[(21)] = inst_24941);

(statearr_25036[(12)] = inst_24942);

(statearr_25036[(27)] = inst_24974);

return statearr_25036;
})();
var statearr_25037_25114 = state_24999__$1;
(statearr_25037_25114[(2)] = null);

(statearr_25037_25114[(1)] = (25));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (43))){
var state_24999__$1 = state_24999;
var statearr_25038_25115 = state_24999__$1;
(statearr_25038_25115[(2)] = null);

(statearr_25038_25115[(1)] = (44));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (29))){
var inst_24983 = (state_24999[(2)]);
var state_24999__$1 = state_24999;
var statearr_25039_25116 = state_24999__$1;
(statearr_25039_25116[(2)] = inst_24983);

(statearr_25039_25116[(1)] = (26));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (44))){
var inst_24992 = (state_24999[(2)]);
var state_24999__$1 = (function (){var statearr_25040 = state_24999;
(statearr_25040[(28)] = inst_24992);

return statearr_25040;
})();
var statearr_25041_25117 = state_24999__$1;
(statearr_25041_25117[(2)] = null);

(statearr_25041_25117[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (6))){
var inst_24931 = (state_24999[(29)]);
var inst_24930 = (function (){var G__25042 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25042) : cljs.core.deref.call(null,G__25042));
})();
var inst_24931__$1 = cljs.core.keys(inst_24930);
var inst_24932 = cljs.core.count(inst_24931__$1);
var inst_24933 = (function (){var G__25043 = dctr;
var G__25044 = inst_24932;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25043,G__25044) : cljs.core.reset_BANG_.call(null,G__25043,G__25044));
})();
var inst_24938 = cljs.core.seq(inst_24931__$1);
var inst_24939 = inst_24938;
var inst_24940 = null;
var inst_24941 = (0);
var inst_24942 = (0);
var state_24999__$1 = (function (){var statearr_25045 = state_24999;
(statearr_25045[(20)] = inst_24939);

(statearr_25045[(9)] = inst_24940);

(statearr_25045[(21)] = inst_24941);

(statearr_25045[(29)] = inst_24931__$1);

(statearr_25045[(30)] = inst_24933);

(statearr_25045[(12)] = inst_24942);

return statearr_25045;
})();
var statearr_25046_25118 = state_24999__$1;
(statearr_25046_25118[(2)] = null);

(statearr_25046_25118[(1)] = (25));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (28))){
var inst_24939 = (state_24999[(20)]);
var inst_24958 = (state_24999[(25)]);
var inst_24958__$1 = cljs.core.seq(inst_24939);
var state_24999__$1 = (function (){var statearr_25047 = state_24999;
(statearr_25047[(25)] = inst_24958__$1);

return statearr_25047;
})();
if(inst_24958__$1){
var statearr_25048_25119 = state_24999__$1;
(statearr_25048_25119[(1)] = (33));

} else {
var statearr_25049_25120 = state_24999__$1;
(statearr_25049_25120[(1)] = (34));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (25))){
var inst_24941 = (state_24999[(21)]);
var inst_24942 = (state_24999[(12)]);
var inst_24944 = (inst_24942 < inst_24941);
var inst_24945 = inst_24944;
var state_24999__$1 = state_24999;
if(cljs.core.truth_(inst_24945)){
var statearr_25050_25121 = state_24999__$1;
(statearr_25050_25121[(1)] = (27));

} else {
var statearr_25051_25122 = state_24999__$1;
(statearr_25051_25122[(1)] = (28));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (34))){
var state_24999__$1 = state_24999;
var statearr_25052_25123 = state_24999__$1;
(statearr_25052_25123[(2)] = null);

(statearr_25052_25123[(1)] = (35));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (17))){
var state_24999__$1 = state_24999;
var statearr_25053_25124 = state_24999__$1;
(statearr_25053_25124[(2)] = null);

(statearr_25053_25124[(1)] = (18));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (3))){
var inst_24997 = (state_24999[(2)]);
var state_24999__$1 = state_24999;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24999__$1,inst_24997);
} else {
if((state_val_25000 === (12))){
var inst_24926 = (state_24999[(2)]);
var state_24999__$1 = state_24999;
var statearr_25054_25125 = state_24999__$1;
(statearr_25054_25125[(2)] = inst_24926);

(statearr_25054_25125[(1)] = (9));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (2))){
var state_24999__$1 = state_24999;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24999__$1,(4),ch);
} else {
if((state_val_25000 === (23))){
var state_24999__$1 = state_24999;
var statearr_25055_25126 = state_24999__$1;
(statearr_25055_25126[(2)] = null);

(statearr_25055_25126[(1)] = (24));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (35))){
var inst_24981 = (state_24999[(2)]);
var state_24999__$1 = state_24999;
var statearr_25056_25127 = state_24999__$1;
(statearr_25056_25127[(2)] = inst_24981);

(statearr_25056_25127[(1)] = (29));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (19))){
var inst_24900 = (state_24999[(7)]);
var inst_24904 = cljs.core.chunk_first(inst_24900);
var inst_24905 = cljs.core.chunk_rest(inst_24900);
var inst_24906 = cljs.core.count(inst_24904);
var inst_24880 = inst_24905;
var inst_24881 = inst_24904;
var inst_24882 = inst_24906;
var inst_24883 = (0);
var state_24999__$1 = (function (){var statearr_25057 = state_24999;
(statearr_25057[(13)] = inst_24882);

(statearr_25057[(14)] = inst_24880);

(statearr_25057[(15)] = inst_24881);

(statearr_25057[(16)] = inst_24883);

return statearr_25057;
})();
var statearr_25058_25128 = state_24999__$1;
(statearr_25058_25128[(2)] = null);

(statearr_25058_25128[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (11))){
var inst_24880 = (state_24999[(14)]);
var inst_24900 = (state_24999[(7)]);
var inst_24900__$1 = cljs.core.seq(inst_24880);
var state_24999__$1 = (function (){var statearr_25059 = state_24999;
(statearr_25059[(7)] = inst_24900__$1);

return statearr_25059;
})();
if(inst_24900__$1){
var statearr_25060_25129 = state_24999__$1;
(statearr_25060_25129[(1)] = (16));

} else {
var statearr_25061_25130 = state_24999__$1;
(statearr_25061_25130[(1)] = (17));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (9))){
var inst_24928 = (state_24999[(2)]);
var state_24999__$1 = state_24999;
var statearr_25062_25131 = state_24999__$1;
(statearr_25062_25131[(2)] = inst_24928);

(statearr_25062_25131[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (5))){
var inst_24878 = (function (){var G__25063 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25063) : cljs.core.deref.call(null,G__25063));
})();
var inst_24879 = cljs.core.seq(inst_24878);
var inst_24880 = inst_24879;
var inst_24881 = null;
var inst_24882 = (0);
var inst_24883 = (0);
var state_24999__$1 = (function (){var statearr_25064 = state_24999;
(statearr_25064[(13)] = inst_24882);

(statearr_25064[(14)] = inst_24880);

(statearr_25064[(15)] = inst_24881);

(statearr_25064[(16)] = inst_24883);

return statearr_25064;
})();
var statearr_25065_25132 = state_24999__$1;
(statearr_25065_25132[(2)] = null);

(statearr_25065_25132[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (14))){
var state_24999__$1 = state_24999;
var statearr_25066_25133 = state_24999__$1;
(statearr_25066_25133[(2)] = null);

(statearr_25066_25133[(1)] = (15));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (45))){
var inst_24989 = (state_24999[(2)]);
var state_24999__$1 = state_24999;
var statearr_25067_25134 = state_24999__$1;
(statearr_25067_25134[(2)] = inst_24989);

(statearr_25067_25134[(1)] = (44));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (26))){
var inst_24931 = (state_24999[(29)]);
var inst_24985 = (state_24999[(2)]);
var inst_24986 = cljs.core.seq(inst_24931);
var state_24999__$1 = (function (){var statearr_25068 = state_24999;
(statearr_25068[(31)] = inst_24985);

return statearr_25068;
})();
if(inst_24986){
var statearr_25069_25135 = state_24999__$1;
(statearr_25069_25135[(1)] = (42));

} else {
var statearr_25070_25136 = state_24999__$1;
(statearr_25070_25136[(1)] = (43));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (16))){
var inst_24900 = (state_24999[(7)]);
var inst_24902 = cljs.core.chunked_seq_QMARK_(inst_24900);
var state_24999__$1 = state_24999;
if(inst_24902){
var statearr_25071_25137 = state_24999__$1;
(statearr_25071_25137[(1)] = (19));

} else {
var statearr_25072_25138 = state_24999__$1;
(statearr_25072_25138[(1)] = (20));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (38))){
var inst_24978 = (state_24999[(2)]);
var state_24999__$1 = state_24999;
var statearr_25073_25139 = state_24999__$1;
(statearr_25073_25139[(2)] = inst_24978);

(statearr_25073_25139[(1)] = (35));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (30))){
var state_24999__$1 = state_24999;
var statearr_25074_25140 = state_24999__$1;
(statearr_25074_25140[(2)] = null);

(statearr_25074_25140[(1)] = (32));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (10))){
var inst_24881 = (state_24999[(15)]);
var inst_24883 = (state_24999[(16)]);
var inst_24889 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24881,inst_24883);
var inst_24890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24889,(0),null);
var inst_24891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24889,(1),null);
var state_24999__$1 = (function (){var statearr_25075 = state_24999;
(statearr_25075[(26)] = inst_24890);

return statearr_25075;
})();
if(cljs.core.truth_(inst_24891)){
var statearr_25076_25141 = state_24999__$1;
(statearr_25076_25141[(1)] = (13));

} else {
var statearr_25077_25142 = state_24999__$1;
(statearr_25077_25142[(1)] = (14));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (18))){
var inst_24924 = (state_24999[(2)]);
var state_24999__$1 = state_24999;
var statearr_25078_25143 = state_24999__$1;
(statearr_25078_25143[(2)] = inst_24924);

(statearr_25078_25143[(1)] = (12));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (42))){
var state_24999__$1 = state_24999;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24999__$1,(45),dchan);
} else {
if((state_val_25000 === (37))){
var inst_24967 = (state_24999[(23)]);
var inst_24958 = (state_24999[(25)]);
var inst_24871 = (state_24999[(11)]);
var inst_24967__$1 = cljs.core.first(inst_24958);
var inst_24968 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24967__$1,inst_24871,done);
var state_24999__$1 = (function (){var statearr_25079 = state_24999;
(statearr_25079[(23)] = inst_24967__$1);

return statearr_25079;
})();
if(cljs.core.truth_(inst_24968)){
var statearr_25080_25144 = state_24999__$1;
(statearr_25080_25144[(1)] = (39));

} else {
var statearr_25081_25145 = state_24999__$1;
(statearr_25081_25145[(1)] = (40));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25000 === (8))){
var inst_24882 = (state_24999[(13)]);
var inst_24883 = (state_24999[(16)]);
var inst_24885 = (inst_24883 < inst_24882);
var inst_24886 = inst_24885;
var state_24999__$1 = state_24999;
if(cljs.core.truth_(inst_24886)){
var statearr_25082_25146 = state_24999__$1;
(statearr_25082_25146[(1)] = (10));

} else {
var statearr_25083_25147 = state_24999__$1;
(statearr_25083_25147[(1)] = (11));

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
});})(c__5853__auto___25093,cs,m,dchan,dctr,done))
;
return ((function (switch__5838__auto__,c__5853__auto___25093,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_25087 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25087[(0)] = state_machine__5839__auto__);

(statearr_25087[(1)] = (1));

return statearr_25087;
});
var state_machine__5839__auto____1 = (function (state_24999){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_24999);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e25088){if((e25088 instanceof Object)){
var ex__5842__auto__ = e25088;
var statearr_25089_25148 = state_24999;
(statearr_25089_25148[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24999);

return cljs.core.constant$keyword$41;
} else {
throw e25088;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__25149 = state_24999;
state_24999 = G__25149;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_24999){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_24999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___25093,cs,m,dchan,dctr,done))
})();
var state__5855__auto__ = (function (){var statearr_25090 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_25090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___25093);

return statearr_25090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___25093,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj25154 = {};
return obj25154;
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
return (function (){var or__3630__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__25158 = x__4274__auto__;
return goog.typeOf(G__25158);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__25162 = x__4274__auto__;
return goog.typeOf(G__25162);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__25166 = x__4274__auto__;
return goog.typeOf(G__25166);
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
return (function (){var or__3630__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__25170 = x__4274__auto__;
return goog.typeOf(G__25170);
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
return (function (){var or__3630__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__25174 = x__4274__auto__;
return goog.typeOf(G__25174);
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__25175){
var map__25181 = p__25175;
var map__25181__$1 = ((cljs.core.seq_QMARK_(map__25181))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25181):map__25181);
var opts = map__25181__$1;
var statearr_25182_25186 = state;
(statearr_25182_25186[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__25181,map__25181__$1,opts){
return (function (val){
var statearr_25183_25187 = state;
(statearr_25183_25187[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__25181,map__25181__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_25184_25188 = state;
(statearr_25184_25188[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__25185 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25185) : cljs.core.deref.call(null,G__25185));
})());


return cljs.core.constant$keyword$41;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__25175 = null;
if (arguments.length > 3) {
  p__25175 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__25175);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__25189){
var state = cljs.core.first(arglist__25189);
arglist__25189 = cljs.core.next(arglist__25189);
var cont_block = cljs.core.first(arglist__25189);
arglist__25189 = cljs.core.next(arglist__25189);
var ports = cljs.core.first(arglist__25189);
var p__25175 = cljs.core.rest(arglist__25189);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__25175);
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
var cs = (function (){var G__25323 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25323) : cljs.core.atom.call(null,G__25323));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$70,null,cljs.core.constant$keyword$71,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$72);
var solo_mode = (function (){var G__25324 = cljs.core.constant$keyword$71;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25324) : cljs.core.atom.call(null,G__25324));
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
if(cljs.core.truth_((function (){var G__25325 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__25325) : attr.call(null,G__25325));
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
var chs = (function (){var G__25326 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25326) : cljs.core.deref.call(null,G__25326));
})();
var mode = (function (){var G__25327 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25327) : cljs.core.deref.call(null,G__25327));
})();
var solos = pick(cljs.core.constant$keyword$72,chs);
var pauses = pick(cljs.core.constant$keyword$70,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$73,solos,cljs.core.constant$keyword$74,pick(cljs.core.constant$keyword$71,chs),cljs.core.constant$keyword$75,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$70)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t25328 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25328 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25329){
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
this.meta25329 = meta25329;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25328.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t25328.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25328.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25328.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25331_25456 = self__.cs;
var G__25332_25457 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25331_25456,G__25332_25457) : cljs.core.reset_BANG_.call(null,G__25331_25456,G__25332_25457));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25328.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25328.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__25333 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__25333) : self__.solo_modes.call(null,G__25333));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__25334_25458 = self__.solo_mode;
var G__25335_25459 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25334_25458,G__25335_25459) : cljs.core.reset_BANG_.call(null,G__25334_25458,G__25335_25459));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25328.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25328.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25328.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25330){
var self__ = this;
var _25330__$1 = this;
return self__.meta25329;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25330,meta25329__$1){
var self__ = this;
var _25330__$1 = this;
return (new cljs.core.async.t25328(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25329__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25328.cljs$lang$type = true;

cljs.core.async.t25328.cljs$lang$ctorStr = "cljs.core.async/t25328";

cljs.core.async.t25328.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25328");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t25328 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25328(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25329){
return (new cljs.core.async.t25328(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25329));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t25328(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,25,cljs.core.constant$keyword$9,510,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,499,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
;
var c__5853__auto___25460 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___25460,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___25460,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25407){
var state_val_25408 = (state_25407[(1)]);
if((state_val_25408 === (7))){
var inst_25349 = (state_25407[(7)]);
var inst_25354 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25349);
var state_25407__$1 = state_25407;
var statearr_25409_25461 = state_25407__$1;
(statearr_25409_25461[(2)] = inst_25354);

(statearr_25409_25461[(1)] = (9));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25408 === (20))){
var inst_25364 = (state_25407[(8)]);
var state_25407__$1 = state_25407;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25407__$1,(23),out,inst_25364);
} else {
if((state_val_25408 === (1))){
var inst_25339 = (state_25407[(9)]);
var inst_25339__$1 = calc_state();
var inst_25340 = cljs.core.seq_QMARK_(inst_25339__$1);
var state_25407__$1 = (function (){var statearr_25410 = state_25407;
(statearr_25410[(9)] = inst_25339__$1);

return statearr_25410;
})();
if(inst_25340){
var statearr_25411_25462 = state_25407__$1;
(statearr_25411_25462[(1)] = (2));

} else {
var statearr_25412_25463 = state_25407__$1;
(statearr_25412_25463[(1)] = (3));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25408 === (24))){
var inst_25357 = (state_25407[(10)]);
var inst_25349 = inst_25357;
var state_25407__$1 = (function (){var statearr_25413 = state_25407;
(statearr_25413[(7)] = inst_25349);

return statearr_25413;
})();
var statearr_25414_25464 = state_25407__$1;
(statearr_25414_25464[(2)] = null);

(statearr_25414_25464[(1)] = (5));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25408 === (4))){
var inst_25339 = (state_25407[(9)]);
var inst_25345 = (state_25407[(2)]);
var inst_25346 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25345,cljs.core.constant$keyword$75);
var inst_25347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25345,cljs.core.constant$keyword$74);
var inst_25348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25345,cljs.core.constant$keyword$73);
var inst_25349 = inst_25339;
var state_25407__$1 = (function (){var statearr_25415 = state_25407;
(statearr_25415[(11)] = inst_25348);

(statearr_25415[(7)] = inst_25349);

(statearr_25415[(12)] = inst_25347);

(statearr_25415[(13)] = inst_25346);

return statearr_25415;
})();
var statearr_25416_25465 = state_25407__$1;
(statearr_25416_25465[(2)] = null);

(statearr_25416_25465[(1)] = (5));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25408 === (15))){
var state_25407__$1 = state_25407;
var statearr_25417_25466 = state_25407__$1;
(statearr_25417_25466[(2)] = null);

(statearr_25417_25466[(1)] = (16));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25408 === (21))){
var inst_25357 = (state_25407[(10)]);
var inst_25349 = inst_25357;
var state_25407__$1 = (function (){var statearr_25418 = state_25407;
(statearr_25418[(7)] = inst_25349);

return statearr_25418;
})();
var statearr_25419_25467 = state_25407__$1;
(statearr_25419_25467[(2)] = null);

(statearr_25419_25467[(1)] = (5));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25408 === (13))){
var inst_25403 = (state_25407[(2)]);
var state_25407__$1 = state_25407;
var statearr_25420_25468 = state_25407__$1;
(statearr_25420_25468[(2)] = inst_25403);

(statearr_25420_25468[(1)] = (6));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25408 === (22))){
var inst_25401 = (state_25407[(2)]);
var state_25407__$1 = state_25407;
var statearr_25421_25469 = state_25407__$1;
(statearr_25421_25469[(2)] = inst_25401);

(statearr_25421_25469[(1)] = (13));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25408 === (6))){
var inst_25405 = (state_25407[(2)]);
var state_25407__$1 = state_25407;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25407__$1,inst_25405);
} else {
if((state_val_25408 === (25))){
var state_25407__$1 = state_25407;
var statearr_25422_25470 = state_25407__$1;
(statearr_25422_25470[(2)] = null);

(statearr_25422_25470[(1)] = (26));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25408 === (17))){
var inst_25380 = (state_25407[(14)]);
var state_25407__$1 = state_25407;
var statearr_25423_25471 = state_25407__$1;
(statearr_25423_25471[(2)] = inst_25380);

(statearr_25423_25471[(1)] = (19));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25408 === (3))){
var inst_25339 = (state_25407[(9)]);
var state_25407__$1 = state_25407;
var statearr_25424_25472 = state_25407__$1;
(statearr_25424_25472[(2)] = inst_25339);

(statearr_25424_25472[(1)] = (4));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25408 === (12))){
var inst_25380 = (state_25407[(14)]);
var inst_25360 = (state_25407[(15)]);
var inst_25365 = (state_25407[(16)]);
var inst_25380__$1 = (function (){var G__25425 = inst_25365;
return (inst_25360.cljs$core$IFn$_invoke$arity$1 ? inst_25360.cljs$core$IFn$_invoke$arity$1(G__25425) : inst_25360.call(null,G__25425));
})();
var state_25407__$1 = (function (){var statearr_25426 = state_25407;
(statearr_25426[(14)] = inst_25380__$1);

return statearr_25426;
})();
if(cljs.core.truth_(inst_25380__$1)){
var statearr_25427_25473 = state_25407__$1;
(statearr_25427_25473[(1)] = (17));

} else {
var statearr_25428_25474 = state_25407__$1;
(statearr_25428_25474[(1)] = (18));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25408 === (2))){
var inst_25339 = (state_25407[(9)]);
var inst_25342 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25339);
var state_25407__$1 = state_25407;
var statearr_25429_25475 = state_25407__$1;
(statearr_25429_25475[(2)] = inst_25342);

(statearr_25429_25475[(1)] = (4));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25408 === (23))){
var inst_25392 = (state_25407[(2)]);
var state_25407__$1 = state_25407;
if(cljs.core.truth_(inst_25392)){
var statearr_25430_25476 = state_25407__$1;
(statearr_25430_25476[(1)] = (24));

} else {
var statearr_25431_25477 = state_25407__$1;
(statearr_25431_25477[(1)] = (25));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25408 === (19))){
var inst_25389 = (state_25407[(2)]);
var state_25407__$1 = state_25407;
if(cljs.core.truth_(inst_25389)){
var statearr_25432_25478 = state_25407__$1;
(statearr_25432_25478[(1)] = (20));

} else {
var statearr_25433_25479 = state_25407__$1;
(statearr_25433_25479[(1)] = (21));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25408 === (11))){
var inst_25364 = (state_25407[(8)]);
var inst_25370 = (inst_25364 == null);
var state_25407__$1 = state_25407;
if(cljs.core.truth_(inst_25370)){
var statearr_25434_25480 = state_25407__$1;
(statearr_25434_25480[(1)] = (14));

} else {
var statearr_25435_25481 = state_25407__$1;
(statearr_25435_25481[(1)] = (15));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25408 === (9))){
var inst_25357 = (state_25407[(10)]);
var inst_25357__$1 = (state_25407[(2)]);
var inst_25358 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25357__$1,cljs.core.constant$keyword$75);
var inst_25359 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25357__$1,cljs.core.constant$keyword$74);
var inst_25360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25357__$1,cljs.core.constant$keyword$73);
var state_25407__$1 = (function (){var statearr_25436 = state_25407;
(statearr_25436[(10)] = inst_25357__$1);

(statearr_25436[(15)] = inst_25360);

(statearr_25436[(17)] = inst_25359);

return statearr_25436;
})();
return cljs.core.async.ioc_alts_BANG_(state_25407__$1,(10),inst_25358);
} else {
if((state_val_25408 === (5))){
var inst_25349 = (state_25407[(7)]);
var inst_25352 = cljs.core.seq_QMARK_(inst_25349);
var state_25407__$1 = state_25407;
if(inst_25352){
var statearr_25437_25482 = state_25407__$1;
(statearr_25437_25482[(1)] = (7));

} else {
var statearr_25438_25483 = state_25407__$1;
(statearr_25438_25483[(1)] = (8));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25408 === (14))){
var inst_25365 = (state_25407[(16)]);
var inst_25372 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25365);
var state_25407__$1 = state_25407;
var statearr_25439_25484 = state_25407__$1;
(statearr_25439_25484[(2)] = inst_25372);

(statearr_25439_25484[(1)] = (16));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25408 === (26))){
var inst_25397 = (state_25407[(2)]);
var state_25407__$1 = state_25407;
var statearr_25440_25485 = state_25407__$1;
(statearr_25440_25485[(2)] = inst_25397);

(statearr_25440_25485[(1)] = (22));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25408 === (16))){
var inst_25375 = (state_25407[(2)]);
var inst_25376 = calc_state();
var inst_25349 = inst_25376;
var state_25407__$1 = (function (){var statearr_25441 = state_25407;
(statearr_25441[(18)] = inst_25375);

(statearr_25441[(7)] = inst_25349);

return statearr_25441;
})();
var statearr_25442_25486 = state_25407__$1;
(statearr_25442_25486[(2)] = null);

(statearr_25442_25486[(1)] = (5));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25408 === (10))){
var inst_25364 = (state_25407[(8)]);
var inst_25365 = (state_25407[(16)]);
var inst_25363 = (state_25407[(2)]);
var inst_25364__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25363,(0),null);
var inst_25365__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25363,(1),null);
var inst_25366 = (inst_25364__$1 == null);
var inst_25367 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25365__$1,change);
var inst_25368 = (inst_25366) || (inst_25367);
var state_25407__$1 = (function (){var statearr_25443 = state_25407;
(statearr_25443[(8)] = inst_25364__$1);

(statearr_25443[(16)] = inst_25365__$1);

return statearr_25443;
})();
if(cljs.core.truth_(inst_25368)){
var statearr_25444_25487 = state_25407__$1;
(statearr_25444_25487[(1)] = (11));

} else {
var statearr_25445_25488 = state_25407__$1;
(statearr_25445_25488[(1)] = (12));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25408 === (18))){
var inst_25360 = (state_25407[(15)]);
var inst_25365 = (state_25407[(16)]);
var inst_25359 = (state_25407[(17)]);
var inst_25384 = cljs.core.empty_QMARK_(inst_25360);
var inst_25385 = (function (){var G__25446 = inst_25365;
return (inst_25359.cljs$core$IFn$_invoke$arity$1 ? inst_25359.cljs$core$IFn$_invoke$arity$1(G__25446) : inst_25359.call(null,G__25446));
})();
var inst_25386 = cljs.core.not(inst_25385);
var inst_25387 = (inst_25384) && (inst_25386);
var state_25407__$1 = state_25407;
var statearr_25447_25489 = state_25407__$1;
(statearr_25447_25489[(2)] = inst_25387);

(statearr_25447_25489[(1)] = (19));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25408 === (8))){
var inst_25349 = (state_25407[(7)]);
var state_25407__$1 = state_25407;
var statearr_25448_25490 = state_25407__$1;
(statearr_25448_25490[(2)] = inst_25349);

(statearr_25448_25490[(1)] = (9));


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
});})(c__5853__auto___25460,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__5838__auto__,c__5853__auto___25460,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_25452 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25452[(0)] = state_machine__5839__auto__);

(statearr_25452[(1)] = (1));

return statearr_25452;
});
var state_machine__5839__auto____1 = (function (state_25407){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_25407);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e25453){if((e25453 instanceof Object)){
var ex__5842__auto__ = e25453;
var statearr_25454_25491 = state_25407;
(statearr_25454_25491[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25407);

return cljs.core.constant$keyword$41;
} else {
throw e25453;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__25492 = state_25407;
state_25407 = G__25492;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_25407){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_25407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___25460,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__5855__auto__ = (function (){var statearr_25455 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_25455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___25460);

return statearr_25455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___25460,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj25494 = {};
return obj25494;
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
return (function (){var or__3630__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__25498 = x__4274__auto__;
return goog.typeOf(G__25498);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__25502 = x__4274__auto__;
return goog.typeOf(G__25502);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__25508 = x__4274__auto__;
return goog.typeOf(G__25508);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__25510 = x__4274__auto__;
return goog.typeOf(G__25510);
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
var mults = (function (){var G__25649 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25649) : cljs.core.atom.call(null,G__25649));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__3630__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__25651 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25651) : cljs.core.deref.call(null,G__25651));
})(),topic);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3630__auto__,mults){
return (function (p1__25511_SHARP_){
if(cljs.core.truth_((function (){var G__25652 = topic;
return (p1__25511_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25511_SHARP_.cljs$core$IFn$_invoke$arity$1(G__25652) : p1__25511_SHARP_.call(null,G__25652));
})())){
return p1__25511_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25511_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__25653 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__25653) : buf_fn.call(null,G__25653));
})())));
}
});})(or__3630__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t25654 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25654 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25655){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25655 = meta25655;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25654.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t25654.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__25657 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__25657) : self__.ensure_mult.call(null,G__25657));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t25654.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__25658 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25658) : cljs.core.deref.call(null,G__25658));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t25654.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25659 = self__.mults;
var G__25660 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25659,G__25660) : cljs.core.reset_BANG_.call(null,G__25659,G__25660));
});})(mults,ensure_mult))
;

cljs.core.async.t25654.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t25654.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25654.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t25654.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25656){
var self__ = this;
var _25656__$1 = this;
return self__.meta25655;
});})(mults,ensure_mult))
;

cljs.core.async.t25654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25656,meta25655__$1){
var self__ = this;
var _25656__$1 = this;
return (new cljs.core.async.t25654(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25655__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t25654.cljs$lang$type = true;

cljs.core.async.t25654.cljs$lang$ctorStr = "cljs.core.async/t25654";

cljs.core.async.t25654.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25654");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t25654 = ((function (mults,ensure_mult){
return (function __GT_t25654(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25655){
return (new cljs.core.async.t25654(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25655));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t25654(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,65,cljs.core.constant$keyword$9,603,cljs.core.constant$keyword$10,14,cljs.core.constant$keyword$11,591,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
;
var c__5853__auto___25783 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___25783,mults,ensure_mult,p){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___25783,mults,ensure_mult,p){
return (function (state_25732){
var state_val_25733 = (state_25732[(1)]);
if((state_val_25733 === (7))){
var inst_25728 = (state_25732[(2)]);
var state_25732__$1 = state_25732;
var statearr_25734_25784 = state_25732__$1;
(statearr_25734_25784[(2)] = inst_25728);

(statearr_25734_25784[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25733 === (20))){
var state_25732__$1 = state_25732;
var statearr_25735_25785 = state_25732__$1;
(statearr_25735_25785[(2)] = null);

(statearr_25735_25785[(1)] = (21));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25733 === (1))){
var state_25732__$1 = state_25732;
var statearr_25736_25786 = state_25732__$1;
(statearr_25736_25786[(2)] = null);

(statearr_25736_25786[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25733 === (24))){
var inst_25711 = (state_25732[(7)]);
var inst_25720 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25711);
var state_25732__$1 = state_25732;
var statearr_25737_25787 = state_25732__$1;
(statearr_25737_25787[(2)] = inst_25720);

(statearr_25737_25787[(1)] = (25));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25733 === (4))){
var inst_25663 = (state_25732[(8)]);
var inst_25663__$1 = (state_25732[(2)]);
var inst_25664 = (inst_25663__$1 == null);
var state_25732__$1 = (function (){var statearr_25738 = state_25732;
(statearr_25738[(8)] = inst_25663__$1);

return statearr_25738;
})();
if(cljs.core.truth_(inst_25664)){
var statearr_25739_25788 = state_25732__$1;
(statearr_25739_25788[(1)] = (5));

} else {
var statearr_25740_25789 = state_25732__$1;
(statearr_25740_25789[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25733 === (15))){
var inst_25705 = (state_25732[(2)]);
var state_25732__$1 = state_25732;
var statearr_25741_25790 = state_25732__$1;
(statearr_25741_25790[(2)] = inst_25705);

(statearr_25741_25790[(1)] = (12));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25733 === (21))){
var inst_25725 = (state_25732[(2)]);
var state_25732__$1 = (function (){var statearr_25742 = state_25732;
(statearr_25742[(9)] = inst_25725);

return statearr_25742;
})();
var statearr_25743_25791 = state_25732__$1;
(statearr_25743_25791[(2)] = null);

(statearr_25743_25791[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25733 === (13))){
var inst_25687 = (state_25732[(10)]);
var inst_25689 = cljs.core.chunked_seq_QMARK_(inst_25687);
var state_25732__$1 = state_25732;
if(inst_25689){
var statearr_25744_25792 = state_25732__$1;
(statearr_25744_25792[(1)] = (16));

} else {
var statearr_25745_25793 = state_25732__$1;
(statearr_25745_25793[(1)] = (17));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25733 === (22))){
var inst_25717 = (state_25732[(2)]);
var state_25732__$1 = state_25732;
if(cljs.core.truth_(inst_25717)){
var statearr_25746_25794 = state_25732__$1;
(statearr_25746_25794[(1)] = (23));

} else {
var statearr_25747_25795 = state_25732__$1;
(statearr_25747_25795[(1)] = (24));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25733 === (6))){
var inst_25711 = (state_25732[(7)]);
var inst_25663 = (state_25732[(8)]);
var inst_25713 = (state_25732[(11)]);
var inst_25711__$1 = (function (){var G__25748 = inst_25663;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__25748) : topic_fn.call(null,G__25748));
})();
var inst_25712 = (function (){var G__25749 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25749) : cljs.core.deref.call(null,G__25749));
})();
var inst_25713__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25712,inst_25711__$1);
var state_25732__$1 = (function (){var statearr_25750 = state_25732;
(statearr_25750[(7)] = inst_25711__$1);

(statearr_25750[(11)] = inst_25713__$1);

return statearr_25750;
})();
if(cljs.core.truth_(inst_25713__$1)){
var statearr_25751_25796 = state_25732__$1;
(statearr_25751_25796[(1)] = (19));

} else {
var statearr_25752_25797 = state_25732__$1;
(statearr_25752_25797[(1)] = (20));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25733 === (25))){
var inst_25722 = (state_25732[(2)]);
var state_25732__$1 = state_25732;
var statearr_25753_25798 = state_25732__$1;
(statearr_25753_25798[(2)] = inst_25722);

(statearr_25753_25798[(1)] = (21));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25733 === (17))){
var inst_25687 = (state_25732[(10)]);
var inst_25696 = cljs.core.first(inst_25687);
var inst_25697 = cljs.core.async.muxch_STAR_(inst_25696);
var inst_25698 = cljs.core.async.close_BANG_(inst_25697);
var inst_25699 = cljs.core.next(inst_25687);
var inst_25673 = inst_25699;
var inst_25674 = null;
var inst_25675 = (0);
var inst_25676 = (0);
var state_25732__$1 = (function (){var statearr_25754 = state_25732;
(statearr_25754[(12)] = inst_25675);

(statearr_25754[(13)] = inst_25673);

(statearr_25754[(14)] = inst_25674);

(statearr_25754[(15)] = inst_25698);

(statearr_25754[(16)] = inst_25676);

return statearr_25754;
})();
var statearr_25755_25799 = state_25732__$1;
(statearr_25755_25799[(2)] = null);

(statearr_25755_25799[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25733 === (3))){
var inst_25730 = (state_25732[(2)]);
var state_25732__$1 = state_25732;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25732__$1,inst_25730);
} else {
if((state_val_25733 === (12))){
var inst_25707 = (state_25732[(2)]);
var state_25732__$1 = state_25732;
var statearr_25756_25800 = state_25732__$1;
(statearr_25756_25800[(2)] = inst_25707);

(statearr_25756_25800[(1)] = (9));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25733 === (2))){
var state_25732__$1 = state_25732;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25732__$1,(4),ch);
} else {
if((state_val_25733 === (23))){
var state_25732__$1 = state_25732;
var statearr_25757_25801 = state_25732__$1;
(statearr_25757_25801[(2)] = null);

(statearr_25757_25801[(1)] = (25));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25733 === (19))){
var inst_25663 = (state_25732[(8)]);
var inst_25713 = (state_25732[(11)]);
var inst_25715 = cljs.core.async.muxch_STAR_(inst_25713);
var state_25732__$1 = state_25732;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25732__$1,(22),inst_25715,inst_25663);
} else {
if((state_val_25733 === (11))){
var inst_25673 = (state_25732[(13)]);
var inst_25687 = (state_25732[(10)]);
var inst_25687__$1 = cljs.core.seq(inst_25673);
var state_25732__$1 = (function (){var statearr_25758 = state_25732;
(statearr_25758[(10)] = inst_25687__$1);

return statearr_25758;
})();
if(inst_25687__$1){
var statearr_25759_25802 = state_25732__$1;
(statearr_25759_25802[(1)] = (13));

} else {
var statearr_25760_25803 = state_25732__$1;
(statearr_25760_25803[(1)] = (14));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25733 === (9))){
var inst_25709 = (state_25732[(2)]);
var state_25732__$1 = state_25732;
var statearr_25761_25804 = state_25732__$1;
(statearr_25761_25804[(2)] = inst_25709);

(statearr_25761_25804[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25733 === (5))){
var inst_25670 = (function (){var G__25762 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25762) : cljs.core.deref.call(null,G__25762));
})();
var inst_25671 = cljs.core.vals(inst_25670);
var inst_25672 = cljs.core.seq(inst_25671);
var inst_25673 = inst_25672;
var inst_25674 = null;
var inst_25675 = (0);
var inst_25676 = (0);
var state_25732__$1 = (function (){var statearr_25763 = state_25732;
(statearr_25763[(12)] = inst_25675);

(statearr_25763[(13)] = inst_25673);

(statearr_25763[(14)] = inst_25674);

(statearr_25763[(16)] = inst_25676);

return statearr_25763;
})();
var statearr_25764_25805 = state_25732__$1;
(statearr_25764_25805[(2)] = null);

(statearr_25764_25805[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25733 === (14))){
var state_25732__$1 = state_25732;
var statearr_25768_25806 = state_25732__$1;
(statearr_25768_25806[(2)] = null);

(statearr_25768_25806[(1)] = (15));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25733 === (16))){
var inst_25687 = (state_25732[(10)]);
var inst_25691 = cljs.core.chunk_first(inst_25687);
var inst_25692 = cljs.core.chunk_rest(inst_25687);
var inst_25693 = cljs.core.count(inst_25691);
var inst_25673 = inst_25692;
var inst_25674 = inst_25691;
var inst_25675 = inst_25693;
var inst_25676 = (0);
var state_25732__$1 = (function (){var statearr_25769 = state_25732;
(statearr_25769[(12)] = inst_25675);

(statearr_25769[(13)] = inst_25673);

(statearr_25769[(14)] = inst_25674);

(statearr_25769[(16)] = inst_25676);

return statearr_25769;
})();
var statearr_25770_25807 = state_25732__$1;
(statearr_25770_25807[(2)] = null);

(statearr_25770_25807[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25733 === (10))){
var inst_25675 = (state_25732[(12)]);
var inst_25673 = (state_25732[(13)]);
var inst_25674 = (state_25732[(14)]);
var inst_25676 = (state_25732[(16)]);
var inst_25681 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25674,inst_25676);
var inst_25682 = cljs.core.async.muxch_STAR_(inst_25681);
var inst_25683 = cljs.core.async.close_BANG_(inst_25682);
var inst_25684 = (inst_25676 + (1));
var tmp25765 = inst_25675;
var tmp25766 = inst_25673;
var tmp25767 = inst_25674;
var inst_25673__$1 = tmp25766;
var inst_25674__$1 = tmp25767;
var inst_25675__$1 = tmp25765;
var inst_25676__$1 = inst_25684;
var state_25732__$1 = (function (){var statearr_25771 = state_25732;
(statearr_25771[(12)] = inst_25675__$1);

(statearr_25771[(13)] = inst_25673__$1);

(statearr_25771[(14)] = inst_25674__$1);

(statearr_25771[(16)] = inst_25676__$1);

(statearr_25771[(17)] = inst_25683);

return statearr_25771;
})();
var statearr_25772_25808 = state_25732__$1;
(statearr_25772_25808[(2)] = null);

(statearr_25772_25808[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25733 === (18))){
var inst_25702 = (state_25732[(2)]);
var state_25732__$1 = state_25732;
var statearr_25773_25809 = state_25732__$1;
(statearr_25773_25809[(2)] = inst_25702);

(statearr_25773_25809[(1)] = (15));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25733 === (8))){
var inst_25675 = (state_25732[(12)]);
var inst_25676 = (state_25732[(16)]);
var inst_25678 = (inst_25676 < inst_25675);
var inst_25679 = inst_25678;
var state_25732__$1 = state_25732;
if(cljs.core.truth_(inst_25679)){
var statearr_25774_25810 = state_25732__$1;
(statearr_25774_25810[(1)] = (10));

} else {
var statearr_25775_25811 = state_25732__$1;
(statearr_25775_25811[(1)] = (11));

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
});})(c__5853__auto___25783,mults,ensure_mult,p))
;
return ((function (switch__5838__auto__,c__5853__auto___25783,mults,ensure_mult,p){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_25779 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25779[(0)] = state_machine__5839__auto__);

(statearr_25779[(1)] = (1));

return statearr_25779;
});
var state_machine__5839__auto____1 = (function (state_25732){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_25732);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e25780){if((e25780 instanceof Object)){
var ex__5842__auto__ = e25780;
var statearr_25781_25812 = state_25732;
(statearr_25781_25812[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25732);

return cljs.core.constant$keyword$41;
} else {
throw e25780;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__25813 = state_25732;
state_25732 = G__25813;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_25732){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_25732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___25783,mults,ensure_mult,p))
})();
var state__5855__auto__ = (function (){var statearr_25782 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_25782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___25783);

return statearr_25782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___25783,mults,ensure_mult,p))
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
var dctr = (function (){var G__25894 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25894) : cljs.core.atom.call(null,G__25894));
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
var c__5853__auto___25967 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___25967,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___25967,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25933){
var state_val_25934 = (state_25933[(1)]);
if((state_val_25934 === (7))){
var state_25933__$1 = state_25933;
var statearr_25935_25968 = state_25933__$1;
(statearr_25935_25968[(2)] = null);

(statearr_25935_25968[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25934 === (1))){
var state_25933__$1 = state_25933;
var statearr_25936_25969 = state_25933__$1;
(statearr_25936_25969[(2)] = null);

(statearr_25936_25969[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25934 === (4))){
var inst_25897 = (state_25933[(7)]);
var inst_25899 = (inst_25897 < cnt);
var state_25933__$1 = state_25933;
if(cljs.core.truth_(inst_25899)){
var statearr_25937_25970 = state_25933__$1;
(statearr_25937_25970[(1)] = (6));

} else {
var statearr_25938_25971 = state_25933__$1;
(statearr_25938_25971[(1)] = (7));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25934 === (15))){
var inst_25929 = (state_25933[(2)]);
var state_25933__$1 = state_25933;
var statearr_25939_25972 = state_25933__$1;
(statearr_25939_25972[(2)] = inst_25929);

(statearr_25939_25972[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25934 === (13))){
var inst_25922 = cljs.core.async.close_BANG_(out);
var state_25933__$1 = state_25933;
var statearr_25940_25973 = state_25933__$1;
(statearr_25940_25973[(2)] = inst_25922);

(statearr_25940_25973[(1)] = (15));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25934 === (6))){
var state_25933__$1 = state_25933;
var statearr_25941_25974 = state_25933__$1;
(statearr_25941_25974[(2)] = null);

(statearr_25941_25974[(1)] = (11));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25934 === (3))){
var inst_25931 = (state_25933[(2)]);
var state_25933__$1 = state_25933;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25933__$1,inst_25931);
} else {
if((state_val_25934 === (12))){
var inst_25919 = (state_25933[(8)]);
var inst_25919__$1 = (state_25933[(2)]);
var inst_25920 = cljs.core.some(cljs.core.nil_QMARK_,inst_25919__$1);
var state_25933__$1 = (function (){var statearr_25942 = state_25933;
(statearr_25942[(8)] = inst_25919__$1);

return statearr_25942;
})();
if(cljs.core.truth_(inst_25920)){
var statearr_25943_25975 = state_25933__$1;
(statearr_25943_25975[(1)] = (13));

} else {
var statearr_25944_25976 = state_25933__$1;
(statearr_25944_25976[(1)] = (14));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_25934 === (2))){
var inst_25896 = (function (){var G__25945 = dctr;
var G__25946 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25945,G__25946) : cljs.core.reset_BANG_.call(null,G__25945,G__25946));
})();
var inst_25897 = (0);
var state_25933__$1 = (function (){var statearr_25947 = state_25933;
(statearr_25947[(7)] = inst_25897);

(statearr_25947[(9)] = inst_25896);

return statearr_25947;
})();
var statearr_25948_25977 = state_25933__$1;
(statearr_25948_25977[(2)] = null);

(statearr_25948_25977[(1)] = (4));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25934 === (11))){
var inst_25897 = (state_25933[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25933,(10),Object,null,(9));
var inst_25906 = (function (){var G__25949 = inst_25897;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__25949) : chs__$1.call(null,G__25949));
})();
var inst_25907 = (function (){var G__25950 = inst_25897;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__25950) : done.call(null,G__25950));
})();
var inst_25908 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_25906,inst_25907);
var state_25933__$1 = state_25933;
var statearr_25951_25978 = state_25933__$1;
(statearr_25951_25978[(2)] = inst_25908);


cljs.core.async.impl.ioc_helpers.process_exception(state_25933__$1);

return cljs.core.constant$keyword$41;
} else {
if((state_val_25934 === (9))){
var inst_25897 = (state_25933[(7)]);
var inst_25910 = (state_25933[(2)]);
var inst_25911 = (inst_25897 + (1));
var inst_25897__$1 = inst_25911;
var state_25933__$1 = (function (){var statearr_25952 = state_25933;
(statearr_25952[(7)] = inst_25897__$1);

(statearr_25952[(10)] = inst_25910);

return statearr_25952;
})();
var statearr_25953_25979 = state_25933__$1;
(statearr_25953_25979[(2)] = null);

(statearr_25953_25979[(1)] = (4));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25934 === (5))){
var inst_25917 = (state_25933[(2)]);
var state_25933__$1 = (function (){var statearr_25954 = state_25933;
(statearr_25954[(11)] = inst_25917);

return statearr_25954;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25933__$1,(12),dchan);
} else {
if((state_val_25934 === (14))){
var inst_25919 = (state_25933[(8)]);
var inst_25924 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_25919);
var state_25933__$1 = state_25933;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25933__$1,(16),out,inst_25924);
} else {
if((state_val_25934 === (16))){
var inst_25926 = (state_25933[(2)]);
var state_25933__$1 = (function (){var statearr_25955 = state_25933;
(statearr_25955[(12)] = inst_25926);

return statearr_25955;
})();
var statearr_25956_25980 = state_25933__$1;
(statearr_25956_25980[(2)] = null);

(statearr_25956_25980[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_25934 === (10))){
var inst_25901 = (state_25933[(2)]);
var inst_25902 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_25933__$1 = (function (){var statearr_25957 = state_25933;
(statearr_25957[(13)] = inst_25901);

return statearr_25957;
})();
var statearr_25958_25981 = state_25933__$1;
(statearr_25958_25981[(2)] = inst_25902);


cljs.core.async.impl.ioc_helpers.process_exception(state_25933__$1);

return cljs.core.constant$keyword$41;
} else {
if((state_val_25934 === (8))){
var inst_25915 = (state_25933[(2)]);
var state_25933__$1 = state_25933;
var statearr_25959_25982 = state_25933__$1;
(statearr_25959_25982[(2)] = inst_25915);

(statearr_25959_25982[(1)] = (5));


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
});})(c__5853__auto___25967,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__5838__auto__,c__5853__auto___25967,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_25963 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25963[(0)] = state_machine__5839__auto__);

(statearr_25963[(1)] = (1));

return statearr_25963;
});
var state_machine__5839__auto____1 = (function (state_25933){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_25933);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e25964){if((e25964 instanceof Object)){
var ex__5842__auto__ = e25964;
var statearr_25965_25983 = state_25933;
(statearr_25965_25983[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25933);

return cljs.core.constant$keyword$41;
} else {
throw e25964;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__25984 = state_25933;
state_25933 = G__25984;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_25933){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_25933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___25967,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__5855__auto__ = (function (){var statearr_25966 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_25966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___25967);

return statearr_25966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___25967,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__5853__auto___26094 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___26094,out){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___26094,out){
return (function (state_26070){
var state_val_26071 = (state_26070[(1)]);
if((state_val_26071 === (7))){
var inst_26049 = (state_26070[(7)]);
var inst_26050 = (state_26070[(8)]);
var inst_26049__$1 = (state_26070[(2)]);
var inst_26050__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26049__$1,(0),null);
var inst_26051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26049__$1,(1),null);
var inst_26052 = (inst_26050__$1 == null);
var state_26070__$1 = (function (){var statearr_26072 = state_26070;
(statearr_26072[(7)] = inst_26049__$1);

(statearr_26072[(9)] = inst_26051);

(statearr_26072[(8)] = inst_26050__$1);

return statearr_26072;
})();
if(cljs.core.truth_(inst_26052)){
var statearr_26073_26095 = state_26070__$1;
(statearr_26073_26095[(1)] = (8));

} else {
var statearr_26074_26096 = state_26070__$1;
(statearr_26074_26096[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26071 === (1))){
var inst_26041 = cljs.core.vec(chs);
var inst_26042 = inst_26041;
var state_26070__$1 = (function (){var statearr_26075 = state_26070;
(statearr_26075[(10)] = inst_26042);

return statearr_26075;
})();
var statearr_26076_26097 = state_26070__$1;
(statearr_26076_26097[(2)] = null);

(statearr_26076_26097[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26071 === (4))){
var inst_26042 = (state_26070[(10)]);
var state_26070__$1 = state_26070;
return cljs.core.async.ioc_alts_BANG_(state_26070__$1,(7),inst_26042);
} else {
if((state_val_26071 === (6))){
var inst_26066 = (state_26070[(2)]);
var state_26070__$1 = state_26070;
var statearr_26077_26098 = state_26070__$1;
(statearr_26077_26098[(2)] = inst_26066);

(statearr_26077_26098[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26071 === (3))){
var inst_26068 = (state_26070[(2)]);
var state_26070__$1 = state_26070;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26070__$1,inst_26068);
} else {
if((state_val_26071 === (2))){
var inst_26042 = (state_26070[(10)]);
var inst_26044 = cljs.core.count(inst_26042);
var inst_26045 = (inst_26044 > (0));
var state_26070__$1 = state_26070;
if(cljs.core.truth_(inst_26045)){
var statearr_26079_26099 = state_26070__$1;
(statearr_26079_26099[(1)] = (4));

} else {
var statearr_26080_26100 = state_26070__$1;
(statearr_26080_26100[(1)] = (5));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26071 === (11))){
var inst_26042 = (state_26070[(10)]);
var inst_26059 = (state_26070[(2)]);
var tmp26078 = inst_26042;
var inst_26042__$1 = tmp26078;
var state_26070__$1 = (function (){var statearr_26081 = state_26070;
(statearr_26081[(10)] = inst_26042__$1);

(statearr_26081[(11)] = inst_26059);

return statearr_26081;
})();
var statearr_26082_26101 = state_26070__$1;
(statearr_26082_26101[(2)] = null);

(statearr_26082_26101[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26071 === (9))){
var inst_26050 = (state_26070[(8)]);
var state_26070__$1 = state_26070;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26070__$1,(11),out,inst_26050);
} else {
if((state_val_26071 === (5))){
var inst_26064 = cljs.core.async.close_BANG_(out);
var state_26070__$1 = state_26070;
var statearr_26083_26102 = state_26070__$1;
(statearr_26083_26102[(2)] = inst_26064);

(statearr_26083_26102[(1)] = (6));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26071 === (10))){
var inst_26062 = (state_26070[(2)]);
var state_26070__$1 = state_26070;
var statearr_26084_26103 = state_26070__$1;
(statearr_26084_26103[(2)] = inst_26062);

(statearr_26084_26103[(1)] = (6));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26071 === (8))){
var inst_26049 = (state_26070[(7)]);
var inst_26051 = (state_26070[(9)]);
var inst_26050 = (state_26070[(8)]);
var inst_26042 = (state_26070[(10)]);
var inst_26054 = (function (){var c = inst_26051;
var v = inst_26050;
var vec__26047 = inst_26049;
var cs = inst_26042;
return ((function (c,v,vec__26047,cs,inst_26049,inst_26051,inst_26050,inst_26042,state_val_26071,c__5853__auto___26094,out){
return (function (p1__25985_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__25985_SHARP_);
});
;})(c,v,vec__26047,cs,inst_26049,inst_26051,inst_26050,inst_26042,state_val_26071,c__5853__auto___26094,out))
})();
var inst_26055 = cljs.core.filterv(inst_26054,inst_26042);
var inst_26042__$1 = inst_26055;
var state_26070__$1 = (function (){var statearr_26085 = state_26070;
(statearr_26085[(10)] = inst_26042__$1);

return statearr_26085;
})();
var statearr_26086_26104 = state_26070__$1;
(statearr_26086_26104[(2)] = null);

(statearr_26086_26104[(1)] = (2));


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
});})(c__5853__auto___26094,out))
;
return ((function (switch__5838__auto__,c__5853__auto___26094,out){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_26090 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26090[(0)] = state_machine__5839__auto__);

(statearr_26090[(1)] = (1));

return statearr_26090;
});
var state_machine__5839__auto____1 = (function (state_26070){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_26070);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e26091){if((e26091 instanceof Object)){
var ex__5842__auto__ = e26091;
var statearr_26092_26105 = state_26070;
(statearr_26092_26105[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26070);

return cljs.core.constant$keyword$41;
} else {
throw e26091;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__26106 = state_26070;
state_26070 = G__26106;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_26070){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_26070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___26094,out))
})();
var state__5855__auto__ = (function (){var statearr_26093 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_26093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___26094);

return statearr_26093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___26094,out))
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
var c__5853__auto___26202 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___26202,out){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___26202,out){
return (function (state_26179){
var state_val_26180 = (state_26179[(1)]);
if((state_val_26180 === (7))){
var inst_26161 = (state_26179[(7)]);
var inst_26161__$1 = (state_26179[(2)]);
var inst_26162 = (inst_26161__$1 == null);
var inst_26163 = cljs.core.not(inst_26162);
var state_26179__$1 = (function (){var statearr_26181 = state_26179;
(statearr_26181[(7)] = inst_26161__$1);

return statearr_26181;
})();
if(inst_26163){
var statearr_26182_26203 = state_26179__$1;
(statearr_26182_26203[(1)] = (8));

} else {
var statearr_26183_26204 = state_26179__$1;
(statearr_26183_26204[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26180 === (1))){
var inst_26156 = (0);
var state_26179__$1 = (function (){var statearr_26184 = state_26179;
(statearr_26184[(8)] = inst_26156);

return statearr_26184;
})();
var statearr_26185_26205 = state_26179__$1;
(statearr_26185_26205[(2)] = null);

(statearr_26185_26205[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26180 === (4))){
var state_26179__$1 = state_26179;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26179__$1,(7),ch);
} else {
if((state_val_26180 === (6))){
var inst_26174 = (state_26179[(2)]);
var state_26179__$1 = state_26179;
var statearr_26186_26206 = state_26179__$1;
(statearr_26186_26206[(2)] = inst_26174);

(statearr_26186_26206[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26180 === (3))){
var inst_26176 = (state_26179[(2)]);
var inst_26177 = cljs.core.async.close_BANG_(out);
var state_26179__$1 = (function (){var statearr_26187 = state_26179;
(statearr_26187[(9)] = inst_26176);

return statearr_26187;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26179__$1,inst_26177);
} else {
if((state_val_26180 === (2))){
var inst_26156 = (state_26179[(8)]);
var inst_26158 = (inst_26156 < n);
var state_26179__$1 = state_26179;
if(cljs.core.truth_(inst_26158)){
var statearr_26188_26207 = state_26179__$1;
(statearr_26188_26207[(1)] = (4));

} else {
var statearr_26189_26208 = state_26179__$1;
(statearr_26189_26208[(1)] = (5));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26180 === (11))){
var inst_26156 = (state_26179[(8)]);
var inst_26166 = (state_26179[(2)]);
var inst_26167 = (inst_26156 + (1));
var inst_26156__$1 = inst_26167;
var state_26179__$1 = (function (){var statearr_26190 = state_26179;
(statearr_26190[(10)] = inst_26166);

(statearr_26190[(8)] = inst_26156__$1);

return statearr_26190;
})();
var statearr_26191_26209 = state_26179__$1;
(statearr_26191_26209[(2)] = null);

(statearr_26191_26209[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26180 === (9))){
var state_26179__$1 = state_26179;
var statearr_26192_26210 = state_26179__$1;
(statearr_26192_26210[(2)] = null);

(statearr_26192_26210[(1)] = (10));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26180 === (5))){
var state_26179__$1 = state_26179;
var statearr_26193_26211 = state_26179__$1;
(statearr_26193_26211[(2)] = null);

(statearr_26193_26211[(1)] = (6));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26180 === (10))){
var inst_26171 = (state_26179[(2)]);
var state_26179__$1 = state_26179;
var statearr_26194_26212 = state_26179__$1;
(statearr_26194_26212[(2)] = inst_26171);

(statearr_26194_26212[(1)] = (6));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26180 === (8))){
var inst_26161 = (state_26179[(7)]);
var state_26179__$1 = state_26179;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26179__$1,(11),out,inst_26161);
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
});})(c__5853__auto___26202,out))
;
return ((function (switch__5838__auto__,c__5853__auto___26202,out){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_26198 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26198[(0)] = state_machine__5839__auto__);

(statearr_26198[(1)] = (1));

return statearr_26198;
});
var state_machine__5839__auto____1 = (function (state_26179){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_26179);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e26199){if((e26199 instanceof Object)){
var ex__5842__auto__ = e26199;
var statearr_26200_26213 = state_26179;
(statearr_26200_26213[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26179);

return cljs.core.constant$keyword$41;
} else {
throw e26199;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__26214 = state_26179;
state_26179 = G__26214;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_26179){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_26179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___26202,out))
})();
var state__5855__auto__ = (function (){var statearr_26201 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_26201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___26202);

return statearr_26201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___26202,out))
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
if(typeof cljs.core.async.t26227 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26227 = (function (ch,f,map_LT_,meta26228){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26228 = meta26228;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26227.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26227.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t26227.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26227.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t26230 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26230 = (function (fn1,_,meta26228,map_LT_,f,ch,meta26231){
this.fn1 = fn1;
this._ = _;
this.meta26228 = meta26228;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26231 = meta26231;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26230.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26230.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t26230.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26215_SHARP_){
var G__26233 = (((p1__26215_SHARP_ == null))?null:(function (){var G__26234 = p1__26215_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26234) : self__.f.call(null,G__26234));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__26233) : f1.call(null,G__26233));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t26230.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26232){
var self__ = this;
var _26232__$1 = this;
return self__.meta26231;
});})(___$1))
;

cljs.core.async.t26230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26232,meta26231__$1){
var self__ = this;
var _26232__$1 = this;
return (new cljs.core.async.t26230(self__.fn1,self__._,self__.meta26228,self__.map_LT_,self__.f,self__.ch,meta26231__$1));
});})(___$1))
;

cljs.core.async.t26230.cljs$lang$type = true;

cljs.core.async.t26230.cljs$lang$ctorStr = "cljs.core.async/t26230";

cljs.core.async.t26230.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26230");
});})(___$1))
;

cljs.core.async.__GT_t26230 = ((function (___$1){
return (function __GT_t26230(fn1__$1,___$2,meta26228__$1,map_LT___$1,f__$1,ch__$1,meta26231){
return (new cljs.core.async.t26230(fn1__$1,___$2,meta26228__$1,map_LT___$1,f__$1,ch__$1,meta26231));
});})(___$1))
;

}

return (new cljs.core.async.t26230(fn1,___$1,self__.meta26228,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,737,cljs.core.constant$keyword$10,10,cljs.core.constant$keyword$11,731,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3618__auto__ = ret;
if(cljs.core.truth_(and__3618__auto__)){
return !(((function (){var G__26235 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26235) : cljs.core.deref.call(null,G__26235));
})() == null));
} else {
return and__3618__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__26236 = (function (){var G__26237 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26237) : cljs.core.deref.call(null,G__26237));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26236) : self__.f.call(null,G__26236));
})());
} else {
return ret;
}
});

cljs.core.async.t26227.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26227.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t26227.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t26227.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26229){
var self__ = this;
var _26229__$1 = this;
return self__.meta26228;
});

cljs.core.async.t26227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26229,meta26228__$1){
var self__ = this;
var _26229__$1 = this;
return (new cljs.core.async.t26227(self__.ch,self__.f,self__.map_LT_,meta26228__$1));
});

cljs.core.async.t26227.cljs$lang$type = true;

cljs.core.async.t26227.cljs$lang$ctorStr = "cljs.core.async/t26227";

cljs.core.async.t26227.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26227");
});

cljs.core.async.__GT_t26227 = (function __GT_t26227(ch__$1,f__$1,map_LT___$1,meta26228){
return (new cljs.core.async.t26227(ch__$1,f__$1,map_LT___$1,meta26228));
});

}

return (new cljs.core.async.t26227(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,743,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,722,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t26242 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26242 = (function (ch,f,map_GT_,meta26243){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta26243 = meta26243;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26242.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26242.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__26245 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26245) : self__.f.call(null,G__26245));
})(),fn1);
});

cljs.core.async.t26242.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26242.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t26242.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26242.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t26242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26244){
var self__ = this;
var _26244__$1 = this;
return self__.meta26243;
});

cljs.core.async.t26242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26244,meta26243__$1){
var self__ = this;
var _26244__$1 = this;
return (new cljs.core.async.t26242(self__.ch,self__.f,self__.map_GT_,meta26243__$1));
});

cljs.core.async.t26242.cljs$lang$type = true;

cljs.core.async.t26242.cljs$lang$ctorStr = "cljs.core.async/t26242";

cljs.core.async.t26242.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26242");
});

cljs.core.async.__GT_t26242 = (function __GT_t26242(ch__$1,f__$1,map_GT___$1,meta26243){
return (new cljs.core.async.t26242(ch__$1,f__$1,map_GT___$1,meta26243));
});

}

return (new cljs.core.async.t26242(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,34,cljs.core.constant$keyword$9,757,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,748,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t26250 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26250 = (function (ch,p,filter_GT_,meta26251){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta26251 = meta26251;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26250.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26250.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__26253 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__26253) : self__.p.call(null,G__26253));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t26250.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26250.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t26250.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26250.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t26250.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t26250.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26252){
var self__ = this;
var _26252__$1 = this;
return self__.meta26251;
});

cljs.core.async.t26250.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26252,meta26251__$1){
var self__ = this;
var _26252__$1 = this;
return (new cljs.core.async.t26250(self__.ch,self__.p,self__.filter_GT_,meta26251__$1));
});

cljs.core.async.t26250.cljs$lang$type = true;

cljs.core.async.t26250.cljs$lang$ctorStr = "cljs.core.async/t26250";

cljs.core.async.t26250.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26250");
});

cljs.core.async.__GT_t26250 = (function __GT_t26250(ch__$1,p__$1,filter_GT___$1,meta26251){
return (new cljs.core.async.t26250(ch__$1,p__$1,filter_GT___$1,meta26251));
});

}

return (new cljs.core.async.t26250(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,774,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,762,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
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
var c__5853__auto___26341 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___26341,out){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___26341,out){
return (function (state_26319){
var state_val_26320 = (state_26319[(1)]);
if((state_val_26320 === (7))){
var inst_26315 = (state_26319[(2)]);
var state_26319__$1 = state_26319;
var statearr_26321_26342 = state_26319__$1;
(statearr_26321_26342[(2)] = inst_26315);

(statearr_26321_26342[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26320 === (1))){
var state_26319__$1 = state_26319;
var statearr_26322_26343 = state_26319__$1;
(statearr_26322_26343[(2)] = null);

(statearr_26322_26343[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26320 === (4))){
var inst_26301 = (state_26319[(7)]);
var inst_26301__$1 = (state_26319[(2)]);
var inst_26302 = (inst_26301__$1 == null);
var state_26319__$1 = (function (){var statearr_26323 = state_26319;
(statearr_26323[(7)] = inst_26301__$1);

return statearr_26323;
})();
if(cljs.core.truth_(inst_26302)){
var statearr_26324_26344 = state_26319__$1;
(statearr_26324_26344[(1)] = (5));

} else {
var statearr_26325_26345 = state_26319__$1;
(statearr_26325_26345[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26320 === (6))){
var inst_26301 = (state_26319[(7)]);
var inst_26306 = (function (){var G__26326 = inst_26301;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__26326) : p.call(null,G__26326));
})();
var state_26319__$1 = state_26319;
if(cljs.core.truth_(inst_26306)){
var statearr_26327_26346 = state_26319__$1;
(statearr_26327_26346[(1)] = (8));

} else {
var statearr_26328_26347 = state_26319__$1;
(statearr_26328_26347[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26320 === (3))){
var inst_26317 = (state_26319[(2)]);
var state_26319__$1 = state_26319;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26319__$1,inst_26317);
} else {
if((state_val_26320 === (2))){
var state_26319__$1 = state_26319;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26319__$1,(4),ch);
} else {
if((state_val_26320 === (11))){
var inst_26309 = (state_26319[(2)]);
var state_26319__$1 = state_26319;
var statearr_26329_26348 = state_26319__$1;
(statearr_26329_26348[(2)] = inst_26309);

(statearr_26329_26348[(1)] = (10));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26320 === (9))){
var state_26319__$1 = state_26319;
var statearr_26330_26349 = state_26319__$1;
(statearr_26330_26349[(2)] = null);

(statearr_26330_26349[(1)] = (10));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26320 === (5))){
var inst_26304 = cljs.core.async.close_BANG_(out);
var state_26319__$1 = state_26319;
var statearr_26331_26350 = state_26319__$1;
(statearr_26331_26350[(2)] = inst_26304);

(statearr_26331_26350[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26320 === (10))){
var inst_26312 = (state_26319[(2)]);
var state_26319__$1 = (function (){var statearr_26332 = state_26319;
(statearr_26332[(8)] = inst_26312);

return statearr_26332;
})();
var statearr_26333_26351 = state_26319__$1;
(statearr_26333_26351[(2)] = null);

(statearr_26333_26351[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26320 === (8))){
var inst_26301 = (state_26319[(7)]);
var state_26319__$1 = state_26319;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26319__$1,(11),out,inst_26301);
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
});})(c__5853__auto___26341,out))
;
return ((function (switch__5838__auto__,c__5853__auto___26341,out){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_26337 = [null,null,null,null,null,null,null,null,null];
(statearr_26337[(0)] = state_machine__5839__auto__);

(statearr_26337[(1)] = (1));

return statearr_26337;
});
var state_machine__5839__auto____1 = (function (state_26319){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_26319);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e26338){if((e26338 instanceof Object)){
var ex__5842__auto__ = e26338;
var statearr_26339_26352 = state_26319;
(statearr_26339_26352[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26319);

return cljs.core.constant$keyword$41;
} else {
throw e26338;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__26353 = state_26319;
state_26319 = G__26353;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_26319){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_26319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___26341,out))
})();
var state__5855__auto__ = (function (){var statearr_26340 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_26340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___26341);

return statearr_26340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___26341,out))
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
return (function (state_26523){
var state_val_26524 = (state_26523[(1)]);
if((state_val_26524 === (7))){
var inst_26519 = (state_26523[(2)]);
var state_26523__$1 = state_26523;
var statearr_26525_26567 = state_26523__$1;
(statearr_26525_26567[(2)] = inst_26519);

(statearr_26525_26567[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26524 === (20))){
var inst_26489 = (state_26523[(7)]);
var inst_26500 = (state_26523[(2)]);
var inst_26501 = cljs.core.next(inst_26489);
var inst_26475 = inst_26501;
var inst_26476 = null;
var inst_26477 = (0);
var inst_26478 = (0);
var state_26523__$1 = (function (){var statearr_26526 = state_26523;
(statearr_26526[(8)] = inst_26477);

(statearr_26526[(9)] = inst_26478);

(statearr_26526[(10)] = inst_26500);

(statearr_26526[(11)] = inst_26475);

(statearr_26526[(12)] = inst_26476);

return statearr_26526;
})();
var statearr_26527_26568 = state_26523__$1;
(statearr_26527_26568[(2)] = null);

(statearr_26527_26568[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26524 === (1))){
var state_26523__$1 = state_26523;
var statearr_26528_26569 = state_26523__$1;
(statearr_26528_26569[(2)] = null);

(statearr_26528_26569[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26524 === (4))){
var inst_26464 = (state_26523[(13)]);
var inst_26464__$1 = (state_26523[(2)]);
var inst_26465 = (inst_26464__$1 == null);
var state_26523__$1 = (function (){var statearr_26529 = state_26523;
(statearr_26529[(13)] = inst_26464__$1);

return statearr_26529;
})();
if(cljs.core.truth_(inst_26465)){
var statearr_26530_26570 = state_26523__$1;
(statearr_26530_26570[(1)] = (5));

} else {
var statearr_26531_26571 = state_26523__$1;
(statearr_26531_26571[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26524 === (15))){
var state_26523__$1 = state_26523;
var statearr_26535_26572 = state_26523__$1;
(statearr_26535_26572[(2)] = null);

(statearr_26535_26572[(1)] = (16));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26524 === (21))){
var state_26523__$1 = state_26523;
var statearr_26536_26573 = state_26523__$1;
(statearr_26536_26573[(2)] = null);

(statearr_26536_26573[(1)] = (23));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26524 === (13))){
var inst_26477 = (state_26523[(8)]);
var inst_26478 = (state_26523[(9)]);
var inst_26475 = (state_26523[(11)]);
var inst_26476 = (state_26523[(12)]);
var inst_26485 = (state_26523[(2)]);
var inst_26486 = (inst_26478 + (1));
var tmp26532 = inst_26477;
var tmp26533 = inst_26475;
var tmp26534 = inst_26476;
var inst_26475__$1 = tmp26533;
var inst_26476__$1 = tmp26534;
var inst_26477__$1 = tmp26532;
var inst_26478__$1 = inst_26486;
var state_26523__$1 = (function (){var statearr_26537 = state_26523;
(statearr_26537[(8)] = inst_26477__$1);

(statearr_26537[(9)] = inst_26478__$1);

(statearr_26537[(14)] = inst_26485);

(statearr_26537[(11)] = inst_26475__$1);

(statearr_26537[(12)] = inst_26476__$1);

return statearr_26537;
})();
var statearr_26538_26574 = state_26523__$1;
(statearr_26538_26574[(2)] = null);

(statearr_26538_26574[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26524 === (22))){
var state_26523__$1 = state_26523;
var statearr_26539_26575 = state_26523__$1;
(statearr_26539_26575[(2)] = null);

(statearr_26539_26575[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26524 === (6))){
var inst_26464 = (state_26523[(13)]);
var inst_26473 = (function (){var G__26540 = inst_26464;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26540) : f.call(null,G__26540));
})();
var inst_26474 = cljs.core.seq(inst_26473);
var inst_26475 = inst_26474;
var inst_26476 = null;
var inst_26477 = (0);
var inst_26478 = (0);
var state_26523__$1 = (function (){var statearr_26541 = state_26523;
(statearr_26541[(8)] = inst_26477);

(statearr_26541[(9)] = inst_26478);

(statearr_26541[(11)] = inst_26475);

(statearr_26541[(12)] = inst_26476);

return statearr_26541;
})();
var statearr_26542_26576 = state_26523__$1;
(statearr_26542_26576[(2)] = null);

(statearr_26542_26576[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26524 === (17))){
var inst_26489 = (state_26523[(7)]);
var inst_26493 = cljs.core.chunk_first(inst_26489);
var inst_26494 = cljs.core.chunk_rest(inst_26489);
var inst_26495 = cljs.core.count(inst_26493);
var inst_26475 = inst_26494;
var inst_26476 = inst_26493;
var inst_26477 = inst_26495;
var inst_26478 = (0);
var state_26523__$1 = (function (){var statearr_26543 = state_26523;
(statearr_26543[(8)] = inst_26477);

(statearr_26543[(9)] = inst_26478);

(statearr_26543[(11)] = inst_26475);

(statearr_26543[(12)] = inst_26476);

return statearr_26543;
})();
var statearr_26544_26577 = state_26523__$1;
(statearr_26544_26577[(2)] = null);

(statearr_26544_26577[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26524 === (3))){
var inst_26521 = (state_26523[(2)]);
var state_26523__$1 = state_26523;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26523__$1,inst_26521);
} else {
if((state_val_26524 === (12))){
var inst_26509 = (state_26523[(2)]);
var state_26523__$1 = state_26523;
var statearr_26545_26578 = state_26523__$1;
(statearr_26545_26578[(2)] = inst_26509);

(statearr_26545_26578[(1)] = (9));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26524 === (2))){
var state_26523__$1 = state_26523;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26523__$1,(4),in$);
} else {
if((state_val_26524 === (23))){
var inst_26517 = (state_26523[(2)]);
var state_26523__$1 = state_26523;
var statearr_26546_26579 = state_26523__$1;
(statearr_26546_26579[(2)] = inst_26517);

(statearr_26546_26579[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26524 === (19))){
var inst_26504 = (state_26523[(2)]);
var state_26523__$1 = state_26523;
var statearr_26547_26580 = state_26523__$1;
(statearr_26547_26580[(2)] = inst_26504);

(statearr_26547_26580[(1)] = (16));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26524 === (11))){
var inst_26475 = (state_26523[(11)]);
var inst_26489 = (state_26523[(7)]);
var inst_26489__$1 = cljs.core.seq(inst_26475);
var state_26523__$1 = (function (){var statearr_26548 = state_26523;
(statearr_26548[(7)] = inst_26489__$1);

return statearr_26548;
})();
if(inst_26489__$1){
var statearr_26549_26581 = state_26523__$1;
(statearr_26549_26581[(1)] = (14));

} else {
var statearr_26550_26582 = state_26523__$1;
(statearr_26550_26582[(1)] = (15));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26524 === (9))){
var inst_26511 = (state_26523[(2)]);
var inst_26512 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_26523__$1 = (function (){var statearr_26551 = state_26523;
(statearr_26551[(15)] = inst_26511);

return statearr_26551;
})();
if(cljs.core.truth_(inst_26512)){
var statearr_26552_26583 = state_26523__$1;
(statearr_26552_26583[(1)] = (21));

} else {
var statearr_26553_26584 = state_26523__$1;
(statearr_26553_26584[(1)] = (22));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26524 === (5))){
var inst_26467 = cljs.core.async.close_BANG_(out);
var state_26523__$1 = state_26523;
var statearr_26554_26585 = state_26523__$1;
(statearr_26554_26585[(2)] = inst_26467);

(statearr_26554_26585[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26524 === (14))){
var inst_26489 = (state_26523[(7)]);
var inst_26491 = cljs.core.chunked_seq_QMARK_(inst_26489);
var state_26523__$1 = state_26523;
if(inst_26491){
var statearr_26555_26586 = state_26523__$1;
(statearr_26555_26586[(1)] = (17));

} else {
var statearr_26556_26587 = state_26523__$1;
(statearr_26556_26587[(1)] = (18));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26524 === (16))){
var inst_26507 = (state_26523[(2)]);
var state_26523__$1 = state_26523;
var statearr_26557_26588 = state_26523__$1;
(statearr_26557_26588[(2)] = inst_26507);

(statearr_26557_26588[(1)] = (12));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26524 === (10))){
var inst_26478 = (state_26523[(9)]);
var inst_26476 = (state_26523[(12)]);
var inst_26483 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26476,inst_26478);
var state_26523__$1 = state_26523;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26523__$1,(13),out,inst_26483);
} else {
if((state_val_26524 === (18))){
var inst_26489 = (state_26523[(7)]);
var inst_26498 = cljs.core.first(inst_26489);
var state_26523__$1 = state_26523;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26523__$1,(20),out,inst_26498);
} else {
if((state_val_26524 === (8))){
var inst_26477 = (state_26523[(8)]);
var inst_26478 = (state_26523[(9)]);
var inst_26480 = (inst_26478 < inst_26477);
var inst_26481 = inst_26480;
var state_26523__$1 = state_26523;
if(cljs.core.truth_(inst_26481)){
var statearr_26558_26589 = state_26523__$1;
(statearr_26558_26589[(1)] = (10));

} else {
var statearr_26559_26590 = state_26523__$1;
(statearr_26559_26590[(1)] = (11));

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
var statearr_26563 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26563[(0)] = state_machine__5839__auto__);

(statearr_26563[(1)] = (1));

return statearr_26563;
});
var state_machine__5839__auto____1 = (function (state_26523){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_26523);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e26564){if((e26564 instanceof Object)){
var ex__5842__auto__ = e26564;
var statearr_26565_26591 = state_26523;
(statearr_26565_26591[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26523);

return cljs.core.constant$keyword$41;
} else {
throw e26564;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__26592 = state_26523;
state_26523 = G__26592;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_26523){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_26523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto__))
})();
var state__5855__auto__ = (function (){var statearr_26566 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_26566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto__);

return statearr_26566;
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
var c__5853__auto___26697 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___26697,out){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___26697,out){
return (function (state_26672){
var state_val_26673 = (state_26672[(1)]);
if((state_val_26673 === (7))){
var inst_26667 = (state_26672[(2)]);
var state_26672__$1 = state_26672;
var statearr_26674_26698 = state_26672__$1;
(statearr_26674_26698[(2)] = inst_26667);

(statearr_26674_26698[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26673 === (1))){
var inst_26649 = null;
var state_26672__$1 = (function (){var statearr_26675 = state_26672;
(statearr_26675[(7)] = inst_26649);

return statearr_26675;
})();
var statearr_26676_26699 = state_26672__$1;
(statearr_26676_26699[(2)] = null);

(statearr_26676_26699[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26673 === (4))){
var inst_26652 = (state_26672[(8)]);
var inst_26652__$1 = (state_26672[(2)]);
var inst_26653 = (inst_26652__$1 == null);
var inst_26654 = cljs.core.not(inst_26653);
var state_26672__$1 = (function (){var statearr_26677 = state_26672;
(statearr_26677[(8)] = inst_26652__$1);

return statearr_26677;
})();
if(inst_26654){
var statearr_26678_26700 = state_26672__$1;
(statearr_26678_26700[(1)] = (5));

} else {
var statearr_26679_26701 = state_26672__$1;
(statearr_26679_26701[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26673 === (6))){
var state_26672__$1 = state_26672;
var statearr_26680_26702 = state_26672__$1;
(statearr_26680_26702[(2)] = null);

(statearr_26680_26702[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26673 === (3))){
var inst_26669 = (state_26672[(2)]);
var inst_26670 = cljs.core.async.close_BANG_(out);
var state_26672__$1 = (function (){var statearr_26681 = state_26672;
(statearr_26681[(9)] = inst_26669);

return statearr_26681;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26672__$1,inst_26670);
} else {
if((state_val_26673 === (2))){
var state_26672__$1 = state_26672;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26672__$1,(4),ch);
} else {
if((state_val_26673 === (11))){
var inst_26652 = (state_26672[(8)]);
var inst_26661 = (state_26672[(2)]);
var inst_26649 = inst_26652;
var state_26672__$1 = (function (){var statearr_26682 = state_26672;
(statearr_26682[(10)] = inst_26661);

(statearr_26682[(7)] = inst_26649);

return statearr_26682;
})();
var statearr_26683_26703 = state_26672__$1;
(statearr_26683_26703[(2)] = null);

(statearr_26683_26703[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26673 === (9))){
var inst_26652 = (state_26672[(8)]);
var state_26672__$1 = state_26672;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26672__$1,(11),out,inst_26652);
} else {
if((state_val_26673 === (5))){
var inst_26652 = (state_26672[(8)]);
var inst_26649 = (state_26672[(7)]);
var inst_26656 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26652,inst_26649);
var state_26672__$1 = state_26672;
if(inst_26656){
var statearr_26685_26704 = state_26672__$1;
(statearr_26685_26704[(1)] = (8));

} else {
var statearr_26686_26705 = state_26672__$1;
(statearr_26686_26705[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26673 === (10))){
var inst_26664 = (state_26672[(2)]);
var state_26672__$1 = state_26672;
var statearr_26687_26706 = state_26672__$1;
(statearr_26687_26706[(2)] = inst_26664);

(statearr_26687_26706[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26673 === (8))){
var inst_26649 = (state_26672[(7)]);
var tmp26684 = inst_26649;
var inst_26649__$1 = tmp26684;
var state_26672__$1 = (function (){var statearr_26688 = state_26672;
(statearr_26688[(7)] = inst_26649__$1);

return statearr_26688;
})();
var statearr_26689_26707 = state_26672__$1;
(statearr_26689_26707[(2)] = null);

(statearr_26689_26707[(1)] = (2));


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
});})(c__5853__auto___26697,out))
;
return ((function (switch__5838__auto__,c__5853__auto___26697,out){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_26693 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26693[(0)] = state_machine__5839__auto__);

(statearr_26693[(1)] = (1));

return statearr_26693;
});
var state_machine__5839__auto____1 = (function (state_26672){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_26672);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e26694){if((e26694 instanceof Object)){
var ex__5842__auto__ = e26694;
var statearr_26695_26708 = state_26672;
(statearr_26695_26708[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26672);

return cljs.core.constant$keyword$41;
} else {
throw e26694;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__26709 = state_26672;
state_26672 = G__26709;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_26672){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_26672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___26697,out))
})();
var state__5855__auto__ = (function (){var statearr_26696 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_26696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___26697);

return statearr_26696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___26697,out))
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
var c__5853__auto___26847 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___26847,out){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___26847,out){
return (function (state_26817){
var state_val_26818 = (state_26817[(1)]);
if((state_val_26818 === (7))){
var inst_26813 = (state_26817[(2)]);
var state_26817__$1 = state_26817;
var statearr_26819_26848 = state_26817__$1;
(statearr_26819_26848[(2)] = inst_26813);

(statearr_26819_26848[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26818 === (1))){
var inst_26780 = (new Array(n));
var inst_26781 = inst_26780;
var inst_26782 = (0);
var state_26817__$1 = (function (){var statearr_26820 = state_26817;
(statearr_26820[(7)] = inst_26782);

(statearr_26820[(8)] = inst_26781);

return statearr_26820;
})();
var statearr_26821_26849 = state_26817__$1;
(statearr_26821_26849[(2)] = null);

(statearr_26821_26849[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26818 === (4))){
var inst_26785 = (state_26817[(9)]);
var inst_26785__$1 = (state_26817[(2)]);
var inst_26786 = (inst_26785__$1 == null);
var inst_26787 = cljs.core.not(inst_26786);
var state_26817__$1 = (function (){var statearr_26822 = state_26817;
(statearr_26822[(9)] = inst_26785__$1);

return statearr_26822;
})();
if(inst_26787){
var statearr_26823_26850 = state_26817__$1;
(statearr_26823_26850[(1)] = (5));

} else {
var statearr_26824_26851 = state_26817__$1;
(statearr_26824_26851[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26818 === (15))){
var inst_26807 = (state_26817[(2)]);
var state_26817__$1 = state_26817;
var statearr_26825_26852 = state_26817__$1;
(statearr_26825_26852[(2)] = inst_26807);

(statearr_26825_26852[(1)] = (14));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26818 === (13))){
var state_26817__$1 = state_26817;
var statearr_26826_26853 = state_26817__$1;
(statearr_26826_26853[(2)] = null);

(statearr_26826_26853[(1)] = (14));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26818 === (6))){
var inst_26782 = (state_26817[(7)]);
var inst_26803 = (inst_26782 > (0));
var state_26817__$1 = state_26817;
if(cljs.core.truth_(inst_26803)){
var statearr_26827_26854 = state_26817__$1;
(statearr_26827_26854[(1)] = (12));

} else {
var statearr_26828_26855 = state_26817__$1;
(statearr_26828_26855[(1)] = (13));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26818 === (3))){
var inst_26815 = (state_26817[(2)]);
var state_26817__$1 = state_26817;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26817__$1,inst_26815);
} else {
if((state_val_26818 === (12))){
var inst_26781 = (state_26817[(8)]);
var inst_26805 = cljs.core.vec(inst_26781);
var state_26817__$1 = state_26817;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26817__$1,(15),out,inst_26805);
} else {
if((state_val_26818 === (2))){
var state_26817__$1 = state_26817;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26817__$1,(4),ch);
} else {
if((state_val_26818 === (11))){
var inst_26797 = (state_26817[(2)]);
var inst_26798 = (new Array(n));
var inst_26781 = inst_26798;
var inst_26782 = (0);
var state_26817__$1 = (function (){var statearr_26829 = state_26817;
(statearr_26829[(10)] = inst_26797);

(statearr_26829[(7)] = inst_26782);

(statearr_26829[(8)] = inst_26781);

return statearr_26829;
})();
var statearr_26830_26856 = state_26817__$1;
(statearr_26830_26856[(2)] = null);

(statearr_26830_26856[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26818 === (9))){
var inst_26781 = (state_26817[(8)]);
var inst_26795 = cljs.core.vec(inst_26781);
var state_26817__$1 = state_26817;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26817__$1,(11),out,inst_26795);
} else {
if((state_val_26818 === (5))){
var inst_26782 = (state_26817[(7)]);
var inst_26781 = (state_26817[(8)]);
var inst_26790 = (state_26817[(11)]);
var inst_26785 = (state_26817[(9)]);
var inst_26789 = (inst_26781[inst_26782] = inst_26785);
var inst_26790__$1 = (inst_26782 + (1));
var inst_26791 = (inst_26790__$1 < n);
var state_26817__$1 = (function (){var statearr_26831 = state_26817;
(statearr_26831[(12)] = inst_26789);

(statearr_26831[(11)] = inst_26790__$1);

return statearr_26831;
})();
if(cljs.core.truth_(inst_26791)){
var statearr_26832_26857 = state_26817__$1;
(statearr_26832_26857[(1)] = (8));

} else {
var statearr_26833_26858 = state_26817__$1;
(statearr_26833_26858[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26818 === (14))){
var inst_26810 = (state_26817[(2)]);
var inst_26811 = cljs.core.async.close_BANG_(out);
var state_26817__$1 = (function (){var statearr_26835 = state_26817;
(statearr_26835[(13)] = inst_26810);

return statearr_26835;
})();
var statearr_26836_26859 = state_26817__$1;
(statearr_26836_26859[(2)] = inst_26811);

(statearr_26836_26859[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26818 === (10))){
var inst_26801 = (state_26817[(2)]);
var state_26817__$1 = state_26817;
var statearr_26837_26860 = state_26817__$1;
(statearr_26837_26860[(2)] = inst_26801);

(statearr_26837_26860[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26818 === (8))){
var inst_26781 = (state_26817[(8)]);
var inst_26790 = (state_26817[(11)]);
var tmp26834 = inst_26781;
var inst_26781__$1 = tmp26834;
var inst_26782 = inst_26790;
var state_26817__$1 = (function (){var statearr_26838 = state_26817;
(statearr_26838[(7)] = inst_26782);

(statearr_26838[(8)] = inst_26781__$1);

return statearr_26838;
})();
var statearr_26839_26861 = state_26817__$1;
(statearr_26839_26861[(2)] = null);

(statearr_26839_26861[(1)] = (2));


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
});})(c__5853__auto___26847,out))
;
return ((function (switch__5838__auto__,c__5853__auto___26847,out){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_26843 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26843[(0)] = state_machine__5839__auto__);

(statearr_26843[(1)] = (1));

return statearr_26843;
});
var state_machine__5839__auto____1 = (function (state_26817){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_26817);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e26844){if((e26844 instanceof Object)){
var ex__5842__auto__ = e26844;
var statearr_26845_26862 = state_26817;
(statearr_26845_26862[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26817);

return cljs.core.constant$keyword$41;
} else {
throw e26844;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__26863 = state_26817;
state_26817 = G__26863;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_26817){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_26817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___26847,out))
})();
var state__5855__auto__ = (function (){var statearr_26846 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_26846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___26847);

return statearr_26846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___26847,out))
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
var c__5853__auto___27011 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___27011,out){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___27011,out){
return (function (state_26980){
var state_val_26981 = (state_26980[(1)]);
if((state_val_26981 === (7))){
var inst_26976 = (state_26980[(2)]);
var state_26980__$1 = state_26980;
var statearr_26982_27012 = state_26980__$1;
(statearr_26982_27012[(2)] = inst_26976);

(statearr_26982_27012[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26981 === (1))){
var inst_26939 = [];
var inst_26940 = inst_26939;
var inst_26941 = cljs.core.constant$keyword$76;
var state_26980__$1 = (function (){var statearr_26983 = state_26980;
(statearr_26983[(7)] = inst_26940);

(statearr_26983[(8)] = inst_26941);

return statearr_26983;
})();
var statearr_26984_27013 = state_26980__$1;
(statearr_26984_27013[(2)] = null);

(statearr_26984_27013[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26981 === (4))){
var inst_26944 = (state_26980[(9)]);
var inst_26944__$1 = (state_26980[(2)]);
var inst_26945 = (inst_26944__$1 == null);
var inst_26946 = cljs.core.not(inst_26945);
var state_26980__$1 = (function (){var statearr_26985 = state_26980;
(statearr_26985[(9)] = inst_26944__$1);

return statearr_26985;
})();
if(inst_26946){
var statearr_26986_27014 = state_26980__$1;
(statearr_26986_27014[(1)] = (5));

} else {
var statearr_26987_27015 = state_26980__$1;
(statearr_26987_27015[(1)] = (6));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26981 === (15))){
var inst_26970 = (state_26980[(2)]);
var state_26980__$1 = state_26980;
var statearr_26988_27016 = state_26980__$1;
(statearr_26988_27016[(2)] = inst_26970);

(statearr_26988_27016[(1)] = (14));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26981 === (13))){
var state_26980__$1 = state_26980;
var statearr_26989_27017 = state_26980__$1;
(statearr_26989_27017[(2)] = null);

(statearr_26989_27017[(1)] = (14));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26981 === (6))){
var inst_26940 = (state_26980[(7)]);
var inst_26965 = inst_26940.length;
var inst_26966 = (inst_26965 > (0));
var state_26980__$1 = state_26980;
if(cljs.core.truth_(inst_26966)){
var statearr_26990_27018 = state_26980__$1;
(statearr_26990_27018[(1)] = (12));

} else {
var statearr_26991_27019 = state_26980__$1;
(statearr_26991_27019[(1)] = (13));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26981 === (3))){
var inst_26978 = (state_26980[(2)]);
var state_26980__$1 = state_26980;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26980__$1,inst_26978);
} else {
if((state_val_26981 === (12))){
var inst_26940 = (state_26980[(7)]);
var inst_26968 = cljs.core.vec(inst_26940);
var state_26980__$1 = state_26980;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26980__$1,(15),out,inst_26968);
} else {
if((state_val_26981 === (2))){
var state_26980__$1 = state_26980;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26980__$1,(4),ch);
} else {
if((state_val_26981 === (11))){
var inst_26948 = (state_26980[(10)]);
var inst_26944 = (state_26980[(9)]);
var inst_26958 = (state_26980[(2)]);
var inst_26959 = [];
var inst_26960 = inst_26959.push(inst_26944);
var inst_26940 = inst_26959;
var inst_26941 = inst_26948;
var state_26980__$1 = (function (){var statearr_26992 = state_26980;
(statearr_26992[(7)] = inst_26940);

(statearr_26992[(11)] = inst_26958);

(statearr_26992[(8)] = inst_26941);

(statearr_26992[(12)] = inst_26960);

return statearr_26992;
})();
var statearr_26993_27020 = state_26980__$1;
(statearr_26993_27020[(2)] = null);

(statearr_26993_27020[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26981 === (9))){
var inst_26940 = (state_26980[(7)]);
var inst_26956 = cljs.core.vec(inst_26940);
var state_26980__$1 = state_26980;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26980__$1,(11),out,inst_26956);
} else {
if((state_val_26981 === (5))){
var inst_26941 = (state_26980[(8)]);
var inst_26948 = (state_26980[(10)]);
var inst_26944 = (state_26980[(9)]);
var inst_26948__$1 = (function (){var G__26994 = inst_26944;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26994) : f.call(null,G__26994));
})();
var inst_26949 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26948__$1,inst_26941);
var inst_26950 = cljs.core.keyword_identical_QMARK_(inst_26941,cljs.core.constant$keyword$76);
var inst_26951 = (inst_26949) || (inst_26950);
var state_26980__$1 = (function (){var statearr_26995 = state_26980;
(statearr_26995[(10)] = inst_26948__$1);

return statearr_26995;
})();
if(cljs.core.truth_(inst_26951)){
var statearr_26996_27021 = state_26980__$1;
(statearr_26996_27021[(1)] = (8));

} else {
var statearr_26997_27022 = state_26980__$1;
(statearr_26997_27022[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_26981 === (14))){
var inst_26973 = (state_26980[(2)]);
var inst_26974 = cljs.core.async.close_BANG_(out);
var state_26980__$1 = (function (){var statearr_26999 = state_26980;
(statearr_26999[(13)] = inst_26973);

return statearr_26999;
})();
var statearr_27000_27023 = state_26980__$1;
(statearr_27000_27023[(2)] = inst_26974);

(statearr_27000_27023[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26981 === (10))){
var inst_26963 = (state_26980[(2)]);
var state_26980__$1 = state_26980;
var statearr_27001_27024 = state_26980__$1;
(statearr_27001_27024[(2)] = inst_26963);

(statearr_27001_27024[(1)] = (7));


return cljs.core.constant$keyword$41;
} else {
if((state_val_26981 === (8))){
var inst_26940 = (state_26980[(7)]);
var inst_26948 = (state_26980[(10)]);
var inst_26944 = (state_26980[(9)]);
var inst_26953 = inst_26940.push(inst_26944);
var tmp26998 = inst_26940;
var inst_26940__$1 = tmp26998;
var inst_26941 = inst_26948;
var state_26980__$1 = (function (){var statearr_27002 = state_26980;
(statearr_27002[(7)] = inst_26940__$1);

(statearr_27002[(8)] = inst_26941);

(statearr_27002[(14)] = inst_26953);

return statearr_27002;
})();
var statearr_27003_27025 = state_26980__$1;
(statearr_27003_27025[(2)] = null);

(statearr_27003_27025[(1)] = (2));


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
});})(c__5853__auto___27011,out))
;
return ((function (switch__5838__auto__,c__5853__auto___27011,out){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_27007 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27007[(0)] = state_machine__5839__auto__);

(statearr_27007[(1)] = (1));

return statearr_27007;
});
var state_machine__5839__auto____1 = (function (state_26980){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_26980);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e27008){if((e27008 instanceof Object)){
var ex__5842__auto__ = e27008;
var statearr_27009_27026 = state_26980;
(statearr_27009_27026[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26980);

return cljs.core.constant$keyword$41;
} else {
throw e27008;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__27027 = state_26980;
state_26980 = G__27027;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_26980){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_26980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___27011,out))
})();
var state__5855__auto__ = (function (){var statearr_27010 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_27010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___27011);

return statearr_27010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___27011,out))
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
