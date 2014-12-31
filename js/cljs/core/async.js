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
if(typeof cljs.core.async.t23739 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23739 = (function (f,fn_handler,meta23740){
this.f = f;
this.fn_handler = fn_handler;
this.meta23740 = meta23740;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23739.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23739.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t23739.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t23739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23741){
var self__ = this;
var _23741__$1 = this;
return self__.meta23740;
});

cljs.core.async.t23739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23741,meta23740__$1){
var self__ = this;
var _23741__$1 = this;
return (new cljs.core.async.t23739(self__.f,self__.fn_handler,meta23740__$1));
});

cljs.core.async.t23739.cljs$lang$type = true;

cljs.core.async.t23739.cljs$lang$ctorStr = "cljs.core.async/t23739";

cljs.core.async.t23739.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23739");
});

cljs.core.async.__GT_t23739 = (function __GT_t23739(f__$1,fn_handler__$1,meta23740){
return (new cljs.core.async.t23739(f__$1,fn_handler__$1,meta23740));
});

}

return (new cljs.core.async.t23739(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,20,cljs.core.constant$keyword$9,16,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,13,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
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
var G__23743 = buff;
if(G__23743){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__23743.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__23743.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23743);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23743);
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
var val_23760 = (function (){var G__23757 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23757) : cljs.core.deref.call(null,G__23757));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__23758_23761 = val_23760;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23758_23761) : fn1.call(null,G__23758_23761));
} else {
cljs.core.async.impl.dispatch.run(((function (val_23760,ret){
return (function (){
var G__23759 = val_23760;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23759) : fn1.call(null,G__23759));
});})(val_23760,ret))
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
var G__23770 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23770) : cljs.core.deref.call(null,G__23770));
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
var ret = (function (){var G__23771 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23771) : cljs.core.deref.call(null,G__23771));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__23772_23774 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23772_23774) : fn1.call(null,G__23772_23774));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__23773 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23773) : fn1.call(null,G__23773));
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
var n__4517__auto___23775 = n;
var x_23776 = (0);
while(true){
if((x_23776 < n__4517__auto___23775)){
(a[x_23776] = (0));

var G__23777 = (x_23776 + (1));
x_23776 = G__23777;
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

var G__23778 = (i + (1));
i = G__23778;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__23786 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23786) : cljs.core.atom.call(null,G__23786));
})();
if(typeof cljs.core.async.t23787 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23787 = (function (flag,alt_flag,meta23788){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23788 = meta23788;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23787.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23787.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23790 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23790) : cljs.core.deref.call(null,G__23790));
});})(flag))
;

cljs.core.async.t23787.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23791_23793 = self__.flag;
var G__23792_23794 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23791_23793,G__23792_23794) : cljs.core.reset_BANG_.call(null,G__23791_23793,G__23792_23794));

return true;
});})(flag))
;

cljs.core.async.t23787.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23789){
var self__ = this;
var _23789__$1 = this;
return self__.meta23788;
});})(flag))
;

cljs.core.async.t23787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23789,meta23788__$1){
var self__ = this;
var _23789__$1 = this;
return (new cljs.core.async.t23787(self__.flag,self__.alt_flag,meta23788__$1));
});})(flag))
;

cljs.core.async.t23787.cljs$lang$type = true;

cljs.core.async.t23787.cljs$lang$ctorStr = "cljs.core.async/t23787";

cljs.core.async.t23787.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23787");
});})(flag))
;

cljs.core.async.__GT_t23787 = ((function (flag){
return (function __GT_t23787(flag__$1,alt_flag__$1,meta23788){
return (new cljs.core.async.t23787(flag__$1,alt_flag__$1,meta23788));
});})(flag))
;

}

return (new cljs.core.async.t23787(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,15,cljs.core.constant$keyword$9,146,cljs.core.constant$keyword$10,5,cljs.core.constant$keyword$11,141,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t23798 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23798 = (function (cb,flag,alt_handler,meta23799){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23799 = meta23799;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23798.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23798.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t23798.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t23798.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23800){
var self__ = this;
var _23800__$1 = this;
return self__.meta23799;
});

cljs.core.async.t23798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23800,meta23799__$1){
var self__ = this;
var _23800__$1 = this;
return (new cljs.core.async.t23798(self__.cb,self__.flag,self__.alt_handler,meta23799__$1));
});

cljs.core.async.t23798.cljs$lang$type = true;

cljs.core.async.t23798.cljs$lang$ctorStr = "cljs.core.async/t23798";

cljs.core.async.t23798.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23798");
});

cljs.core.async.__GT_t23798 = (function __GT_t23798(cb__$1,flag__$1,alt_handler__$1,meta23799){
return (new cljs.core.async.t23798(cb__$1,flag__$1,alt_handler__$1,meta23799));
});

}

return (new cljs.core.async.t23798(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,11,cljs.core.constant$keyword$9,154,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,149,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
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
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__23808 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__23808) : port.call(null,G__23808));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__23809 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__23809) : port.call(null,G__23809));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23801_SHARP_){
var G__23810 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23801_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__23810) : fret.call(null,G__23810));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23802_SHARP_){
var G__23811 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23802_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__23811) : fret.call(null,G__23811));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23812 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23812) : cljs.core.deref.call(null,G__23812));
})(),(function (){var or__3630__auto__ = wport;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23813 = (i + (1));
i = G__23813;
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
var alts_BANG___delegate = function (ports,p__23814){
var map__23816 = p__23814;
var map__23816__$1 = ((cljs.core.seq_QMARK_(map__23816))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23816):map__23816);
var opts = map__23816__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__23814 = null;
if (arguments.length > 1) {
  p__23814 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__23814);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23817){
var ports = cljs.core.first(arglist__23817);
var p__23814 = cljs.core.rest(arglist__23817);
return alts_BANG___delegate(ports,p__23814);
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
var c__11833__auto___23915 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11833__auto___23915){
return (function (){
var f__11834__auto__ = (function (){var switch__11753__auto__ = ((function (c__11833__auto___23915){
return (function (state_23891){
var state_val_23892 = (state_23891[(1)]);
if((state_val_23892 === (7))){
var inst_23887 = (state_23891[(2)]);
var state_23891__$1 = state_23891;
var statearr_23893_23916 = state_23891__$1;
(statearr_23893_23916[(2)] = inst_23887);

(statearr_23893_23916[(1)] = (3));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23892 === (1))){
var state_23891__$1 = state_23891;
var statearr_23894_23917 = state_23891__$1;
(statearr_23894_23917[(2)] = null);

(statearr_23894_23917[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23892 === (4))){
var inst_23870 = (state_23891[(7)]);
var inst_23870__$1 = (state_23891[(2)]);
var inst_23871 = (inst_23870__$1 == null);
var state_23891__$1 = (function (){var statearr_23895 = state_23891;
(statearr_23895[(7)] = inst_23870__$1);

return statearr_23895;
})();
if(cljs.core.truth_(inst_23871)){
var statearr_23896_23918 = state_23891__$1;
(statearr_23896_23918[(1)] = (5));

} else {
var statearr_23897_23919 = state_23891__$1;
(statearr_23897_23919[(1)] = (6));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_23892 === (13))){
var state_23891__$1 = state_23891;
var statearr_23898_23920 = state_23891__$1;
(statearr_23898_23920[(2)] = null);

(statearr_23898_23920[(1)] = (14));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23892 === (6))){
var inst_23870 = (state_23891[(7)]);
var state_23891__$1 = state_23891;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23891__$1,(11),to,inst_23870);
} else {
if((state_val_23892 === (3))){
var inst_23889 = (state_23891[(2)]);
var state_23891__$1 = state_23891;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23891__$1,inst_23889);
} else {
if((state_val_23892 === (12))){
var state_23891__$1 = state_23891;
var statearr_23899_23921 = state_23891__$1;
(statearr_23899_23921[(2)] = null);

(statearr_23899_23921[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23892 === (2))){
var state_23891__$1 = state_23891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23891__$1,(4),from);
} else {
if((state_val_23892 === (11))){
var inst_23880 = (state_23891[(2)]);
var state_23891__$1 = state_23891;
if(cljs.core.truth_(inst_23880)){
var statearr_23900_23922 = state_23891__$1;
(statearr_23900_23922[(1)] = (12));

} else {
var statearr_23901_23923 = state_23891__$1;
(statearr_23901_23923[(1)] = (13));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_23892 === (9))){
var state_23891__$1 = state_23891;
var statearr_23902_23924 = state_23891__$1;
(statearr_23902_23924[(2)] = null);

(statearr_23902_23924[(1)] = (10));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23892 === (5))){
var state_23891__$1 = state_23891;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23903_23925 = state_23891__$1;
(statearr_23903_23925[(1)] = (8));

} else {
var statearr_23904_23926 = state_23891__$1;
(statearr_23904_23926[(1)] = (9));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_23892 === (14))){
var inst_23885 = (state_23891[(2)]);
var state_23891__$1 = state_23891;
var statearr_23905_23927 = state_23891__$1;
(statearr_23905_23927[(2)] = inst_23885);

(statearr_23905_23927[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23892 === (10))){
var inst_23877 = (state_23891[(2)]);
var state_23891__$1 = state_23891;
var statearr_23906_23928 = state_23891__$1;
(statearr_23906_23928[(2)] = inst_23877);

(statearr_23906_23928[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_23892 === (8))){
var inst_23874 = cljs.core.async.close_BANG_(to);
var state_23891__$1 = state_23891;
var statearr_23907_23929 = state_23891__$1;
(statearr_23907_23929[(2)] = inst_23874);

(statearr_23907_23929[(1)] = (10));


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
});})(c__11833__auto___23915))
;
return ((function (switch__11753__auto__,c__11833__auto___23915){
return (function() {
var state_machine__11754__auto__ = null;
var state_machine__11754__auto____0 = (function (){
var statearr_23911 = [null,null,null,null,null,null,null,null];
(statearr_23911[(0)] = state_machine__11754__auto__);

(statearr_23911[(1)] = (1));

return statearr_23911;
});
var state_machine__11754__auto____1 = (function (state_23891){
while(true){
var ret_value__11755__auto__ = (function (){try{while(true){
var result__11756__auto__ = switch__11753__auto__(state_23891);
if(cljs.core.keyword_identical_QMARK_(result__11756__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11756__auto__;
}
break;
}
}catch (e23912){if((e23912 instanceof Object)){
var ex__11757__auto__ = e23912;
var statearr_23913_23930 = state_23891;
(statearr_23913_23930[(5)] = ex__11757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23891);

return cljs.core.constant$keyword$61;
} else {
throw e23912;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11755__auto__,cljs.core.constant$keyword$61)){
var G__23931 = state_23891;
state_23891 = G__23931;
continue;
} else {
return ret_value__11755__auto__;
}
break;
}
});
state_machine__11754__auto__ = function(state_23891){
switch(arguments.length){
case 0:
return state_machine__11754__auto____0.call(this);
case 1:
return state_machine__11754__auto____1.call(this,state_23891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11754__auto____0;
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11754__auto____1;
return state_machine__11754__auto__;
})()
;})(switch__11753__auto__,c__11833__auto___23915))
})();
var state__11835__auto__ = (function (){var statearr_23914 = (function (){return (f__11834__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11834__auto__.cljs$core$IFn$_invoke$arity$0() : f__11834__auto__.call(null));
})();
(statearr_23914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11833__auto___23915);

return statearr_23914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11835__auto__);
});})(c__11833__auto___23915))
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
return (function (p__24117){
var vec__24118 = p__24117;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24118,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24118,(1),null);
var job = vec__24118;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__11833__auto___24302 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11833__auto___24302,res,vec__24118,v,p,job,jobs,results){
return (function (){
var f__11834__auto__ = (function (){var switch__11753__auto__ = ((function (c__11833__auto___24302,res,vec__24118,v,p,job,jobs,results){
return (function (state_24123){
var state_val_24124 = (state_24123[(1)]);
if((state_val_24124 === (2))){
var inst_24120 = (state_24123[(2)]);
var inst_24121 = cljs.core.async.close_BANG_(res);
var state_24123__$1 = (function (){var statearr_24125 = state_24123;
(statearr_24125[(7)] = inst_24120);

return statearr_24125;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24123__$1,inst_24121);
} else {
if((state_val_24124 === (1))){
var state_24123__$1 = state_24123;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24123__$1,(2),res,v);
} else {
return null;
}
}
});})(c__11833__auto___24302,res,vec__24118,v,p,job,jobs,results))
;
return ((function (switch__11753__auto__,c__11833__auto___24302,res,vec__24118,v,p,job,jobs,results){
return (function() {
var state_machine__11754__auto__ = null;
var state_machine__11754__auto____0 = (function (){
var statearr_24129 = [null,null,null,null,null,null,null,null];
(statearr_24129[(0)] = state_machine__11754__auto__);

(statearr_24129[(1)] = (1));

return statearr_24129;
});
var state_machine__11754__auto____1 = (function (state_24123){
while(true){
var ret_value__11755__auto__ = (function (){try{while(true){
var result__11756__auto__ = switch__11753__auto__(state_24123);
if(cljs.core.keyword_identical_QMARK_(result__11756__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11756__auto__;
}
break;
}
}catch (e24130){if((e24130 instanceof Object)){
var ex__11757__auto__ = e24130;
var statearr_24131_24303 = state_24123;
(statearr_24131_24303[(5)] = ex__11757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24123);

return cljs.core.constant$keyword$61;
} else {
throw e24130;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11755__auto__,cljs.core.constant$keyword$61)){
var G__24304 = state_24123;
state_24123 = G__24304;
continue;
} else {
return ret_value__11755__auto__;
}
break;
}
});
state_machine__11754__auto__ = function(state_24123){
switch(arguments.length){
case 0:
return state_machine__11754__auto____0.call(this);
case 1:
return state_machine__11754__auto____1.call(this,state_24123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11754__auto____0;
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11754__auto____1;
return state_machine__11754__auto__;
})()
;})(switch__11753__auto__,c__11833__auto___24302,res,vec__24118,v,p,job,jobs,results))
})();
var state__11835__auto__ = (function (){var statearr_24132 = (function (){return (f__11834__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11834__auto__.cljs$core$IFn$_invoke$arity$0() : f__11834__auto__.call(null));
})();
(statearr_24132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11833__auto___24302);

return statearr_24132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11835__auto__);
});})(c__11833__auto___24302,res,vec__24118,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24133){
var vec__24134 = p__24133;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24134,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24134,(1),null);
var job = vec__24134;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__24135_24305 = v;
var G__24136_24306 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__24135_24305,G__24136_24306) : xf.call(null,G__24135_24305,G__24136_24306));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4517__auto___24307 = n;
var __24308 = (0);
while(true){
if((__24308 < n__4517__auto___24307)){
var G__24137_24309 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24137_24309) {
case "async":
var c__11833__auto___24311 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24308,c__11833__auto___24311,G__24137_24309,n__4517__auto___24307,jobs,results,process,async){
return (function (){
var f__11834__auto__ = (function (){var switch__11753__auto__ = ((function (__24308,c__11833__auto___24311,G__24137_24309,n__4517__auto___24307,jobs,results,process,async){
return (function (state_24150){
var state_val_24151 = (state_24150[(1)]);
if((state_val_24151 === (7))){
var inst_24146 = (state_24150[(2)]);
var state_24150__$1 = state_24150;
var statearr_24152_24312 = state_24150__$1;
(statearr_24152_24312[(2)] = inst_24146);

(statearr_24152_24312[(1)] = (3));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24151 === (6))){
var state_24150__$1 = state_24150;
var statearr_24153_24313 = state_24150__$1;
(statearr_24153_24313[(2)] = null);

(statearr_24153_24313[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24151 === (5))){
var state_24150__$1 = state_24150;
var statearr_24154_24314 = state_24150__$1;
(statearr_24154_24314[(2)] = null);

(statearr_24154_24314[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24151 === (4))){
var inst_24140 = (state_24150[(2)]);
var inst_24141 = async(inst_24140);
var state_24150__$1 = state_24150;
if(cljs.core.truth_(inst_24141)){
var statearr_24155_24315 = state_24150__$1;
(statearr_24155_24315[(1)] = (5));

} else {
var statearr_24156_24316 = state_24150__$1;
(statearr_24156_24316[(1)] = (6));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_24151 === (3))){
var inst_24148 = (state_24150[(2)]);
var state_24150__$1 = state_24150;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24150__$1,inst_24148);
} else {
if((state_val_24151 === (2))){
var state_24150__$1 = state_24150;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24150__$1,(4),jobs);
} else {
if((state_val_24151 === (1))){
var state_24150__$1 = state_24150;
var statearr_24157_24317 = state_24150__$1;
(statearr_24157_24317[(2)] = null);

(statearr_24157_24317[(1)] = (2));


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
});})(__24308,c__11833__auto___24311,G__24137_24309,n__4517__auto___24307,jobs,results,process,async))
;
return ((function (__24308,switch__11753__auto__,c__11833__auto___24311,G__24137_24309,n__4517__auto___24307,jobs,results,process,async){
return (function() {
var state_machine__11754__auto__ = null;
var state_machine__11754__auto____0 = (function (){
var statearr_24161 = [null,null,null,null,null,null,null];
(statearr_24161[(0)] = state_machine__11754__auto__);

(statearr_24161[(1)] = (1));

return statearr_24161;
});
var state_machine__11754__auto____1 = (function (state_24150){
while(true){
var ret_value__11755__auto__ = (function (){try{while(true){
var result__11756__auto__ = switch__11753__auto__(state_24150);
if(cljs.core.keyword_identical_QMARK_(result__11756__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11756__auto__;
}
break;
}
}catch (e24162){if((e24162 instanceof Object)){
var ex__11757__auto__ = e24162;
var statearr_24163_24318 = state_24150;
(statearr_24163_24318[(5)] = ex__11757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24150);

return cljs.core.constant$keyword$61;
} else {
throw e24162;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11755__auto__,cljs.core.constant$keyword$61)){
var G__24319 = state_24150;
state_24150 = G__24319;
continue;
} else {
return ret_value__11755__auto__;
}
break;
}
});
state_machine__11754__auto__ = function(state_24150){
switch(arguments.length){
case 0:
return state_machine__11754__auto____0.call(this);
case 1:
return state_machine__11754__auto____1.call(this,state_24150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11754__auto____0;
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11754__auto____1;
return state_machine__11754__auto__;
})()
;})(__24308,switch__11753__auto__,c__11833__auto___24311,G__24137_24309,n__4517__auto___24307,jobs,results,process,async))
})();
var state__11835__auto__ = (function (){var statearr_24164 = (function (){return (f__11834__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11834__auto__.cljs$core$IFn$_invoke$arity$0() : f__11834__auto__.call(null));
})();
(statearr_24164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11833__auto___24311);

return statearr_24164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11835__auto__);
});})(__24308,c__11833__auto___24311,G__24137_24309,n__4517__auto___24307,jobs,results,process,async))
);


break;
case "compute":
var c__11833__auto___24320 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24308,c__11833__auto___24320,G__24137_24309,n__4517__auto___24307,jobs,results,process,async){
return (function (){
var f__11834__auto__ = (function (){var switch__11753__auto__ = ((function (__24308,c__11833__auto___24320,G__24137_24309,n__4517__auto___24307,jobs,results,process,async){
return (function (state_24177){
var state_val_24178 = (state_24177[(1)]);
if((state_val_24178 === (7))){
var inst_24173 = (state_24177[(2)]);
var state_24177__$1 = state_24177;
var statearr_24179_24321 = state_24177__$1;
(statearr_24179_24321[(2)] = inst_24173);

(statearr_24179_24321[(1)] = (3));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24178 === (6))){
var state_24177__$1 = state_24177;
var statearr_24180_24322 = state_24177__$1;
(statearr_24180_24322[(2)] = null);

(statearr_24180_24322[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24178 === (5))){
var state_24177__$1 = state_24177;
var statearr_24181_24323 = state_24177__$1;
(statearr_24181_24323[(2)] = null);

(statearr_24181_24323[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24178 === (4))){
var inst_24167 = (state_24177[(2)]);
var inst_24168 = process(inst_24167);
var state_24177__$1 = state_24177;
if(cljs.core.truth_(inst_24168)){
var statearr_24182_24324 = state_24177__$1;
(statearr_24182_24324[(1)] = (5));

} else {
var statearr_24183_24325 = state_24177__$1;
(statearr_24183_24325[(1)] = (6));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_24178 === (3))){
var inst_24175 = (state_24177[(2)]);
var state_24177__$1 = state_24177;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24177__$1,inst_24175);
} else {
if((state_val_24178 === (2))){
var state_24177__$1 = state_24177;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24177__$1,(4),jobs);
} else {
if((state_val_24178 === (1))){
var state_24177__$1 = state_24177;
var statearr_24184_24326 = state_24177__$1;
(statearr_24184_24326[(2)] = null);

(statearr_24184_24326[(1)] = (2));


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
});})(__24308,c__11833__auto___24320,G__24137_24309,n__4517__auto___24307,jobs,results,process,async))
;
return ((function (__24308,switch__11753__auto__,c__11833__auto___24320,G__24137_24309,n__4517__auto___24307,jobs,results,process,async){
return (function() {
var state_machine__11754__auto__ = null;
var state_machine__11754__auto____0 = (function (){
var statearr_24188 = [null,null,null,null,null,null,null];
(statearr_24188[(0)] = state_machine__11754__auto__);

(statearr_24188[(1)] = (1));

return statearr_24188;
});
var state_machine__11754__auto____1 = (function (state_24177){
while(true){
var ret_value__11755__auto__ = (function (){try{while(true){
var result__11756__auto__ = switch__11753__auto__(state_24177);
if(cljs.core.keyword_identical_QMARK_(result__11756__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11756__auto__;
}
break;
}
}catch (e24189){if((e24189 instanceof Object)){
var ex__11757__auto__ = e24189;
var statearr_24190_24327 = state_24177;
(statearr_24190_24327[(5)] = ex__11757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24177);

return cljs.core.constant$keyword$61;
} else {
throw e24189;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11755__auto__,cljs.core.constant$keyword$61)){
var G__24328 = state_24177;
state_24177 = G__24328;
continue;
} else {
return ret_value__11755__auto__;
}
break;
}
});
state_machine__11754__auto__ = function(state_24177){
switch(arguments.length){
case 0:
return state_machine__11754__auto____0.call(this);
case 1:
return state_machine__11754__auto____1.call(this,state_24177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11754__auto____0;
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11754__auto____1;
return state_machine__11754__auto__;
})()
;})(__24308,switch__11753__auto__,c__11833__auto___24320,G__24137_24309,n__4517__auto___24307,jobs,results,process,async))
})();
var state__11835__auto__ = (function (){var statearr_24191 = (function (){return (f__11834__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11834__auto__.cljs$core$IFn$_invoke$arity$0() : f__11834__auto__.call(null));
})();
(statearr_24191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11833__auto___24320);

return statearr_24191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11835__auto__);
});})(__24308,c__11833__auto___24320,G__24137_24309,n__4517__auto___24307,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24329 = (__24308 + (1));
__24308 = G__24329;
continue;
} else {
}
break;
}

var c__11833__auto___24330 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11833__auto___24330,jobs,results,process,async){
return (function (){
var f__11834__auto__ = (function (){var switch__11753__auto__ = ((function (c__11833__auto___24330,jobs,results,process,async){
return (function (state_24213){
var state_val_24214 = (state_24213[(1)]);
if((state_val_24214 === (9))){
var inst_24206 = (state_24213[(2)]);
var state_24213__$1 = (function (){var statearr_24215 = state_24213;
(statearr_24215[(7)] = inst_24206);

return statearr_24215;
})();
var statearr_24216_24331 = state_24213__$1;
(statearr_24216_24331[(2)] = null);

(statearr_24216_24331[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24214 === (8))){
var inst_24199 = (state_24213[(8)]);
var inst_24204 = (state_24213[(2)]);
var state_24213__$1 = (function (){var statearr_24217 = state_24213;
(statearr_24217[(9)] = inst_24204);

return statearr_24217;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24213__$1,(9),results,inst_24199);
} else {
if((state_val_24214 === (7))){
var inst_24209 = (state_24213[(2)]);
var state_24213__$1 = state_24213;
var statearr_24218_24332 = state_24213__$1;
(statearr_24218_24332[(2)] = inst_24209);

(statearr_24218_24332[(1)] = (3));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24214 === (6))){
var inst_24194 = (state_24213[(10)]);
var inst_24199 = (state_24213[(8)]);
var inst_24199__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_24200 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24201 = [inst_24194,inst_24199__$1];
var inst_24202 = (new cljs.core.PersistentVector(null,2,(5),inst_24200,inst_24201,null));
var state_24213__$1 = (function (){var statearr_24219 = state_24213;
(statearr_24219[(8)] = inst_24199__$1);

return statearr_24219;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24213__$1,(8),jobs,inst_24202);
} else {
if((state_val_24214 === (5))){
var inst_24197 = cljs.core.async.close_BANG_(jobs);
var state_24213__$1 = state_24213;
var statearr_24220_24333 = state_24213__$1;
(statearr_24220_24333[(2)] = inst_24197);

(statearr_24220_24333[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24214 === (4))){
var inst_24194 = (state_24213[(10)]);
var inst_24194__$1 = (state_24213[(2)]);
var inst_24195 = (inst_24194__$1 == null);
var state_24213__$1 = (function (){var statearr_24221 = state_24213;
(statearr_24221[(10)] = inst_24194__$1);

return statearr_24221;
})();
if(cljs.core.truth_(inst_24195)){
var statearr_24222_24334 = state_24213__$1;
(statearr_24222_24334[(1)] = (5));

} else {
var statearr_24223_24335 = state_24213__$1;
(statearr_24223_24335[(1)] = (6));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_24214 === (3))){
var inst_24211 = (state_24213[(2)]);
var state_24213__$1 = state_24213;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24213__$1,inst_24211);
} else {
if((state_val_24214 === (2))){
var state_24213__$1 = state_24213;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24213__$1,(4),from);
} else {
if((state_val_24214 === (1))){
var state_24213__$1 = state_24213;
var statearr_24224_24336 = state_24213__$1;
(statearr_24224_24336[(2)] = null);

(statearr_24224_24336[(1)] = (2));


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
});})(c__11833__auto___24330,jobs,results,process,async))
;
return ((function (switch__11753__auto__,c__11833__auto___24330,jobs,results,process,async){
return (function() {
var state_machine__11754__auto__ = null;
var state_machine__11754__auto____0 = (function (){
var statearr_24228 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24228[(0)] = state_machine__11754__auto__);

(statearr_24228[(1)] = (1));

return statearr_24228;
});
var state_machine__11754__auto____1 = (function (state_24213){
while(true){
var ret_value__11755__auto__ = (function (){try{while(true){
var result__11756__auto__ = switch__11753__auto__(state_24213);
if(cljs.core.keyword_identical_QMARK_(result__11756__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11756__auto__;
}
break;
}
}catch (e24229){if((e24229 instanceof Object)){
var ex__11757__auto__ = e24229;
var statearr_24230_24337 = state_24213;
(statearr_24230_24337[(5)] = ex__11757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24213);

return cljs.core.constant$keyword$61;
} else {
throw e24229;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11755__auto__,cljs.core.constant$keyword$61)){
var G__24338 = state_24213;
state_24213 = G__24338;
continue;
} else {
return ret_value__11755__auto__;
}
break;
}
});
state_machine__11754__auto__ = function(state_24213){
switch(arguments.length){
case 0:
return state_machine__11754__auto____0.call(this);
case 1:
return state_machine__11754__auto____1.call(this,state_24213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11754__auto____0;
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11754__auto____1;
return state_machine__11754__auto__;
})()
;})(switch__11753__auto__,c__11833__auto___24330,jobs,results,process,async))
})();
var state__11835__auto__ = (function (){var statearr_24231 = (function (){return (f__11834__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11834__auto__.cljs$core$IFn$_invoke$arity$0() : f__11834__auto__.call(null));
})();
(statearr_24231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11833__auto___24330);

return statearr_24231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11835__auto__);
});})(c__11833__auto___24330,jobs,results,process,async))
);


var c__11833__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11833__auto__,jobs,results,process,async){
return (function (){
var f__11834__auto__ = (function (){var switch__11753__auto__ = ((function (c__11833__auto__,jobs,results,process,async){
return (function (state_24269){
var state_val_24270 = (state_24269[(1)]);
if((state_val_24270 === (7))){
var inst_24265 = (state_24269[(2)]);
var state_24269__$1 = state_24269;
var statearr_24271_24339 = state_24269__$1;
(statearr_24271_24339[(2)] = inst_24265);

(statearr_24271_24339[(1)] = (3));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24270 === (20))){
var state_24269__$1 = state_24269;
var statearr_24272_24340 = state_24269__$1;
(statearr_24272_24340[(2)] = null);

(statearr_24272_24340[(1)] = (21));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24270 === (1))){
var state_24269__$1 = state_24269;
var statearr_24273_24341 = state_24269__$1;
(statearr_24273_24341[(2)] = null);

(statearr_24273_24341[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24270 === (4))){
var inst_24234 = (state_24269[(7)]);
var inst_24234__$1 = (state_24269[(2)]);
var inst_24235 = (inst_24234__$1 == null);
var state_24269__$1 = (function (){var statearr_24274 = state_24269;
(statearr_24274[(7)] = inst_24234__$1);

return statearr_24274;
})();
if(cljs.core.truth_(inst_24235)){
var statearr_24275_24342 = state_24269__$1;
(statearr_24275_24342[(1)] = (5));

} else {
var statearr_24276_24343 = state_24269__$1;
(statearr_24276_24343[(1)] = (6));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_24270 === (15))){
var inst_24247 = (state_24269[(8)]);
var state_24269__$1 = state_24269;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24269__$1,(18),to,inst_24247);
} else {
if((state_val_24270 === (21))){
var inst_24260 = (state_24269[(2)]);
var state_24269__$1 = state_24269;
var statearr_24277_24344 = state_24269__$1;
(statearr_24277_24344[(2)] = inst_24260);

(statearr_24277_24344[(1)] = (13));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24270 === (13))){
var inst_24262 = (state_24269[(2)]);
var state_24269__$1 = (function (){var statearr_24278 = state_24269;
(statearr_24278[(9)] = inst_24262);

return statearr_24278;
})();
var statearr_24279_24345 = state_24269__$1;
(statearr_24279_24345[(2)] = null);

(statearr_24279_24345[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24270 === (6))){
var inst_24234 = (state_24269[(7)]);
var state_24269__$1 = state_24269;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24269__$1,(11),inst_24234);
} else {
if((state_val_24270 === (17))){
var inst_24255 = (state_24269[(2)]);
var state_24269__$1 = state_24269;
if(cljs.core.truth_(inst_24255)){
var statearr_24280_24346 = state_24269__$1;
(statearr_24280_24346[(1)] = (19));

} else {
var statearr_24281_24347 = state_24269__$1;
(statearr_24281_24347[(1)] = (20));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_24270 === (3))){
var inst_24267 = (state_24269[(2)]);
var state_24269__$1 = state_24269;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24269__$1,inst_24267);
} else {
if((state_val_24270 === (12))){
var inst_24244 = (state_24269[(10)]);
var state_24269__$1 = state_24269;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24269__$1,(14),inst_24244);
} else {
if((state_val_24270 === (2))){
var state_24269__$1 = state_24269;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24269__$1,(4),results);
} else {
if((state_val_24270 === (19))){
var state_24269__$1 = state_24269;
var statearr_24282_24348 = state_24269__$1;
(statearr_24282_24348[(2)] = null);

(statearr_24282_24348[(1)] = (12));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24270 === (11))){
var inst_24244 = (state_24269[(2)]);
var state_24269__$1 = (function (){var statearr_24283 = state_24269;
(statearr_24283[(10)] = inst_24244);

return statearr_24283;
})();
var statearr_24284_24349 = state_24269__$1;
(statearr_24284_24349[(2)] = null);

(statearr_24284_24349[(1)] = (12));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24270 === (9))){
var state_24269__$1 = state_24269;
var statearr_24285_24350 = state_24269__$1;
(statearr_24285_24350[(2)] = null);

(statearr_24285_24350[(1)] = (10));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24270 === (5))){
var state_24269__$1 = state_24269;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24286_24351 = state_24269__$1;
(statearr_24286_24351[(1)] = (8));

} else {
var statearr_24287_24352 = state_24269__$1;
(statearr_24287_24352[(1)] = (9));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_24270 === (14))){
var inst_24247 = (state_24269[(8)]);
var inst_24249 = (state_24269[(11)]);
var inst_24247__$1 = (state_24269[(2)]);
var inst_24248 = (inst_24247__$1 == null);
var inst_24249__$1 = cljs.core.not(inst_24248);
var state_24269__$1 = (function (){var statearr_24288 = state_24269;
(statearr_24288[(8)] = inst_24247__$1);

(statearr_24288[(11)] = inst_24249__$1);

return statearr_24288;
})();
if(inst_24249__$1){
var statearr_24289_24353 = state_24269__$1;
(statearr_24289_24353[(1)] = (15));

} else {
var statearr_24290_24354 = state_24269__$1;
(statearr_24290_24354[(1)] = (16));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_24270 === (16))){
var inst_24249 = (state_24269[(11)]);
var state_24269__$1 = state_24269;
var statearr_24291_24355 = state_24269__$1;
(statearr_24291_24355[(2)] = inst_24249);

(statearr_24291_24355[(1)] = (17));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24270 === (10))){
var inst_24241 = (state_24269[(2)]);
var state_24269__$1 = state_24269;
var statearr_24292_24356 = state_24269__$1;
(statearr_24292_24356[(2)] = inst_24241);

(statearr_24292_24356[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24270 === (18))){
var inst_24252 = (state_24269[(2)]);
var state_24269__$1 = state_24269;
var statearr_24293_24357 = state_24269__$1;
(statearr_24293_24357[(2)] = inst_24252);

(statearr_24293_24357[(1)] = (17));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24270 === (8))){
var inst_24238 = cljs.core.async.close_BANG_(to);
var state_24269__$1 = state_24269;
var statearr_24294_24358 = state_24269__$1;
(statearr_24294_24358[(2)] = inst_24238);

(statearr_24294_24358[(1)] = (10));


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
});})(c__11833__auto__,jobs,results,process,async))
;
return ((function (switch__11753__auto__,c__11833__auto__,jobs,results,process,async){
return (function() {
var state_machine__11754__auto__ = null;
var state_machine__11754__auto____0 = (function (){
var statearr_24298 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24298[(0)] = state_machine__11754__auto__);

(statearr_24298[(1)] = (1));

return statearr_24298;
});
var state_machine__11754__auto____1 = (function (state_24269){
while(true){
var ret_value__11755__auto__ = (function (){try{while(true){
var result__11756__auto__ = switch__11753__auto__(state_24269);
if(cljs.core.keyword_identical_QMARK_(result__11756__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11756__auto__;
}
break;
}
}catch (e24299){if((e24299 instanceof Object)){
var ex__11757__auto__ = e24299;
var statearr_24300_24359 = state_24269;
(statearr_24300_24359[(5)] = ex__11757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24269);

return cljs.core.constant$keyword$61;
} else {
throw e24299;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11755__auto__,cljs.core.constant$keyword$61)){
var G__24360 = state_24269;
state_24269 = G__24360;
continue;
} else {
return ret_value__11755__auto__;
}
break;
}
});
state_machine__11754__auto__ = function(state_24269){
switch(arguments.length){
case 0:
return state_machine__11754__auto____0.call(this);
case 1:
return state_machine__11754__auto____1.call(this,state_24269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11754__auto____0;
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11754__auto____1;
return state_machine__11754__auto__;
})()
;})(switch__11753__auto__,c__11833__auto__,jobs,results,process,async))
})();
var state__11835__auto__ = (function (){var statearr_24301 = (function (){return (f__11834__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11834__auto__.cljs$core$IFn$_invoke$arity$0() : f__11834__auto__.call(null));
})();
(statearr_24301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11833__auto__);

return statearr_24301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11835__auto__);
});})(c__11833__auto__,jobs,results,process,async))
);

return c__11833__auto__;
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
var c__11833__auto___24483 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11833__auto___24483,tc,fc){
return (function (){
var f__11834__auto__ = (function (){var switch__11753__auto__ = ((function (c__11833__auto___24483,tc,fc){
return (function (state_24457){
var state_val_24458 = (state_24457[(1)]);
if((state_val_24458 === (7))){
var inst_24453 = (state_24457[(2)]);
var state_24457__$1 = state_24457;
var statearr_24459_24484 = state_24457__$1;
(statearr_24459_24484[(2)] = inst_24453);

(statearr_24459_24484[(1)] = (3));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24458 === (1))){
var state_24457__$1 = state_24457;
var statearr_24460_24485 = state_24457__$1;
(statearr_24460_24485[(2)] = null);

(statearr_24460_24485[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24458 === (4))){
var inst_24434 = (state_24457[(7)]);
var inst_24434__$1 = (state_24457[(2)]);
var inst_24435 = (inst_24434__$1 == null);
var state_24457__$1 = (function (){var statearr_24461 = state_24457;
(statearr_24461[(7)] = inst_24434__$1);

return statearr_24461;
})();
if(cljs.core.truth_(inst_24435)){
var statearr_24462_24486 = state_24457__$1;
(statearr_24462_24486[(1)] = (5));

} else {
var statearr_24463_24487 = state_24457__$1;
(statearr_24463_24487[(1)] = (6));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_24458 === (13))){
var state_24457__$1 = state_24457;
var statearr_24464_24488 = state_24457__$1;
(statearr_24464_24488[(2)] = null);

(statearr_24464_24488[(1)] = (14));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24458 === (6))){
var inst_24434 = (state_24457[(7)]);
var inst_24440 = (function (){var G__24465 = inst_24434;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__24465) : p.call(null,G__24465));
})();
var state_24457__$1 = state_24457;
if(cljs.core.truth_(inst_24440)){
var statearr_24466_24489 = state_24457__$1;
(statearr_24466_24489[(1)] = (9));

} else {
var statearr_24467_24490 = state_24457__$1;
(statearr_24467_24490[(1)] = (10));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_24458 === (3))){
var inst_24455 = (state_24457[(2)]);
var state_24457__$1 = state_24457;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24457__$1,inst_24455);
} else {
if((state_val_24458 === (12))){
var state_24457__$1 = state_24457;
var statearr_24468_24491 = state_24457__$1;
(statearr_24468_24491[(2)] = null);

(statearr_24468_24491[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24458 === (2))){
var state_24457__$1 = state_24457;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24457__$1,(4),ch);
} else {
if((state_val_24458 === (11))){
var inst_24434 = (state_24457[(7)]);
var inst_24444 = (state_24457[(2)]);
var state_24457__$1 = state_24457;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24457__$1,(8),inst_24444,inst_24434);
} else {
if((state_val_24458 === (9))){
var state_24457__$1 = state_24457;
var statearr_24469_24492 = state_24457__$1;
(statearr_24469_24492[(2)] = tc);

(statearr_24469_24492[(1)] = (11));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24458 === (5))){
var inst_24437 = cljs.core.async.close_BANG_(tc);
var inst_24438 = cljs.core.async.close_BANG_(fc);
var state_24457__$1 = (function (){var statearr_24470 = state_24457;
(statearr_24470[(8)] = inst_24437);

return statearr_24470;
})();
var statearr_24471_24493 = state_24457__$1;
(statearr_24471_24493[(2)] = inst_24438);

(statearr_24471_24493[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24458 === (14))){
var inst_24451 = (state_24457[(2)]);
var state_24457__$1 = state_24457;
var statearr_24472_24494 = state_24457__$1;
(statearr_24472_24494[(2)] = inst_24451);

(statearr_24472_24494[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24458 === (10))){
var state_24457__$1 = state_24457;
var statearr_24473_24495 = state_24457__$1;
(statearr_24473_24495[(2)] = fc);

(statearr_24473_24495[(1)] = (11));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24458 === (8))){
var inst_24446 = (state_24457[(2)]);
var state_24457__$1 = state_24457;
if(cljs.core.truth_(inst_24446)){
var statearr_24474_24496 = state_24457__$1;
(statearr_24474_24496[(1)] = (12));

} else {
var statearr_24475_24497 = state_24457__$1;
(statearr_24475_24497[(1)] = (13));

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
});})(c__11833__auto___24483,tc,fc))
;
return ((function (switch__11753__auto__,c__11833__auto___24483,tc,fc){
return (function() {
var state_machine__11754__auto__ = null;
var state_machine__11754__auto____0 = (function (){
var statearr_24479 = [null,null,null,null,null,null,null,null,null];
(statearr_24479[(0)] = state_machine__11754__auto__);

(statearr_24479[(1)] = (1));

return statearr_24479;
});
var state_machine__11754__auto____1 = (function (state_24457){
while(true){
var ret_value__11755__auto__ = (function (){try{while(true){
var result__11756__auto__ = switch__11753__auto__(state_24457);
if(cljs.core.keyword_identical_QMARK_(result__11756__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11756__auto__;
}
break;
}
}catch (e24480){if((e24480 instanceof Object)){
var ex__11757__auto__ = e24480;
var statearr_24481_24498 = state_24457;
(statearr_24481_24498[(5)] = ex__11757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24457);

return cljs.core.constant$keyword$61;
} else {
throw e24480;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11755__auto__,cljs.core.constant$keyword$61)){
var G__24499 = state_24457;
state_24457 = G__24499;
continue;
} else {
return ret_value__11755__auto__;
}
break;
}
});
state_machine__11754__auto__ = function(state_24457){
switch(arguments.length){
case 0:
return state_machine__11754__auto____0.call(this);
case 1:
return state_machine__11754__auto____1.call(this,state_24457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11754__auto____0;
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11754__auto____1;
return state_machine__11754__auto__;
})()
;})(switch__11753__auto__,c__11833__auto___24483,tc,fc))
})();
var state__11835__auto__ = (function (){var statearr_24482 = (function (){return (f__11834__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11834__auto__.cljs$core$IFn$_invoke$arity$0() : f__11834__auto__.call(null));
})();
(statearr_24482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11833__auto___24483);

return statearr_24482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11835__auto__);
});})(c__11833__auto___24483,tc,fc))
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
var c__11833__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11833__auto__){
return (function (){
var f__11834__auto__ = (function (){var switch__11753__auto__ = ((function (c__11833__auto__){
return (function (state_24548){
var state_val_24549 = (state_24548[(1)]);
if((state_val_24549 === (7))){
var inst_24544 = (state_24548[(2)]);
var state_24548__$1 = state_24548;
var statearr_24550_24568 = state_24548__$1;
(statearr_24550_24568[(2)] = inst_24544);

(statearr_24550_24568[(1)] = (3));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24549 === (6))){
var inst_24537 = (state_24548[(7)]);
var inst_24534 = (state_24548[(8)]);
var inst_24541 = (function (){var G__24551 = inst_24534;
var G__24552 = inst_24537;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24551,G__24552) : f.call(null,G__24551,G__24552));
})();
var inst_24534__$1 = inst_24541;
var state_24548__$1 = (function (){var statearr_24553 = state_24548;
(statearr_24553[(8)] = inst_24534__$1);

return statearr_24553;
})();
var statearr_24554_24569 = state_24548__$1;
(statearr_24554_24569[(2)] = null);

(statearr_24554_24569[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24549 === (5))){
var inst_24534 = (state_24548[(8)]);
var state_24548__$1 = state_24548;
var statearr_24555_24570 = state_24548__$1;
(statearr_24555_24570[(2)] = inst_24534);

(statearr_24555_24570[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24549 === (4))){
var inst_24537 = (state_24548[(7)]);
var inst_24537__$1 = (state_24548[(2)]);
var inst_24538 = (inst_24537__$1 == null);
var state_24548__$1 = (function (){var statearr_24556 = state_24548;
(statearr_24556[(7)] = inst_24537__$1);

return statearr_24556;
})();
if(cljs.core.truth_(inst_24538)){
var statearr_24557_24571 = state_24548__$1;
(statearr_24557_24571[(1)] = (5));

} else {
var statearr_24558_24572 = state_24548__$1;
(statearr_24558_24572[(1)] = (6));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_24549 === (3))){
var inst_24546 = (state_24548[(2)]);
var state_24548__$1 = state_24548;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24548__$1,inst_24546);
} else {
if((state_val_24549 === (2))){
var state_24548__$1 = state_24548;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24548__$1,(4),ch);
} else {
if((state_val_24549 === (1))){
var inst_24534 = init;
var state_24548__$1 = (function (){var statearr_24559 = state_24548;
(statearr_24559[(8)] = inst_24534);

return statearr_24559;
})();
var statearr_24560_24573 = state_24548__$1;
(statearr_24560_24573[(2)] = null);

(statearr_24560_24573[(1)] = (2));


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
});})(c__11833__auto__))
;
return ((function (switch__11753__auto__,c__11833__auto__){
return (function() {
var state_machine__11754__auto__ = null;
var state_machine__11754__auto____0 = (function (){
var statearr_24564 = [null,null,null,null,null,null,null,null,null];
(statearr_24564[(0)] = state_machine__11754__auto__);

(statearr_24564[(1)] = (1));

return statearr_24564;
});
var state_machine__11754__auto____1 = (function (state_24548){
while(true){
var ret_value__11755__auto__ = (function (){try{while(true){
var result__11756__auto__ = switch__11753__auto__(state_24548);
if(cljs.core.keyword_identical_QMARK_(result__11756__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11756__auto__;
}
break;
}
}catch (e24565){if((e24565 instanceof Object)){
var ex__11757__auto__ = e24565;
var statearr_24566_24574 = state_24548;
(statearr_24566_24574[(5)] = ex__11757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24548);

return cljs.core.constant$keyword$61;
} else {
throw e24565;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11755__auto__,cljs.core.constant$keyword$61)){
var G__24575 = state_24548;
state_24548 = G__24575;
continue;
} else {
return ret_value__11755__auto__;
}
break;
}
});
state_machine__11754__auto__ = function(state_24548){
switch(arguments.length){
case 0:
return state_machine__11754__auto____0.call(this);
case 1:
return state_machine__11754__auto____1.call(this,state_24548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11754__auto____0;
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11754__auto____1;
return state_machine__11754__auto__;
})()
;})(switch__11753__auto__,c__11833__auto__))
})();
var state__11835__auto__ = (function (){var statearr_24567 = (function (){return (f__11834__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11834__auto__.cljs$core$IFn$_invoke$arity$0() : f__11834__auto__.call(null));
})();
(statearr_24567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11833__auto__);

return statearr_24567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11835__auto__);
});})(c__11833__auto__))
);

return c__11833__auto__;
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
var c__11833__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11833__auto__){
return (function (){
var f__11834__auto__ = (function (){var switch__11753__auto__ = ((function (c__11833__auto__){
return (function (state_24652){
var state_val_24653 = (state_24652[(1)]);
if((state_val_24653 === (7))){
var inst_24634 = (state_24652[(2)]);
var state_24652__$1 = state_24652;
var statearr_24654_24677 = state_24652__$1;
(statearr_24654_24677[(2)] = inst_24634);

(statearr_24654_24677[(1)] = (6));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24653 === (1))){
var inst_24628 = cljs.core.seq(coll);
var inst_24629 = inst_24628;
var state_24652__$1 = (function (){var statearr_24655 = state_24652;
(statearr_24655[(7)] = inst_24629);

return statearr_24655;
})();
var statearr_24656_24678 = state_24652__$1;
(statearr_24656_24678[(2)] = null);

(statearr_24656_24678[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24653 === (4))){
var inst_24629 = (state_24652[(7)]);
var inst_24632 = cljs.core.first(inst_24629);
var state_24652__$1 = state_24652;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24652__$1,(7),ch,inst_24632);
} else {
if((state_val_24653 === (13))){
var inst_24646 = (state_24652[(2)]);
var state_24652__$1 = state_24652;
var statearr_24657_24679 = state_24652__$1;
(statearr_24657_24679[(2)] = inst_24646);

(statearr_24657_24679[(1)] = (10));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24653 === (6))){
var inst_24637 = (state_24652[(2)]);
var state_24652__$1 = state_24652;
if(cljs.core.truth_(inst_24637)){
var statearr_24658_24680 = state_24652__$1;
(statearr_24658_24680[(1)] = (8));

} else {
var statearr_24659_24681 = state_24652__$1;
(statearr_24659_24681[(1)] = (9));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_24653 === (3))){
var inst_24650 = (state_24652[(2)]);
var state_24652__$1 = state_24652;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24652__$1,inst_24650);
} else {
if((state_val_24653 === (12))){
var state_24652__$1 = state_24652;
var statearr_24660_24682 = state_24652__$1;
(statearr_24660_24682[(2)] = null);

(statearr_24660_24682[(1)] = (13));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24653 === (2))){
var inst_24629 = (state_24652[(7)]);
var state_24652__$1 = state_24652;
if(cljs.core.truth_(inst_24629)){
var statearr_24661_24683 = state_24652__$1;
(statearr_24661_24683[(1)] = (4));

} else {
var statearr_24662_24684 = state_24652__$1;
(statearr_24662_24684[(1)] = (5));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_24653 === (11))){
var inst_24643 = cljs.core.async.close_BANG_(ch);
var state_24652__$1 = state_24652;
var statearr_24663_24685 = state_24652__$1;
(statearr_24663_24685[(2)] = inst_24643);

(statearr_24663_24685[(1)] = (13));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24653 === (9))){
var state_24652__$1 = state_24652;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24664_24686 = state_24652__$1;
(statearr_24664_24686[(1)] = (11));

} else {
var statearr_24665_24687 = state_24652__$1;
(statearr_24665_24687[(1)] = (12));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_24653 === (5))){
var inst_24629 = (state_24652[(7)]);
var state_24652__$1 = state_24652;
var statearr_24666_24688 = state_24652__$1;
(statearr_24666_24688[(2)] = inst_24629);

(statearr_24666_24688[(1)] = (6));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24653 === (10))){
var inst_24648 = (state_24652[(2)]);
var state_24652__$1 = state_24652;
var statearr_24667_24689 = state_24652__$1;
(statearr_24667_24689[(2)] = inst_24648);

(statearr_24667_24689[(1)] = (3));


return cljs.core.constant$keyword$61;
} else {
if((state_val_24653 === (8))){
var inst_24629 = (state_24652[(7)]);
var inst_24639 = cljs.core.next(inst_24629);
var inst_24629__$1 = inst_24639;
var state_24652__$1 = (function (){var statearr_24668 = state_24652;
(statearr_24668[(7)] = inst_24629__$1);

return statearr_24668;
})();
var statearr_24669_24690 = state_24652__$1;
(statearr_24669_24690[(2)] = null);

(statearr_24669_24690[(1)] = (2));


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
});})(c__11833__auto__))
;
return ((function (switch__11753__auto__,c__11833__auto__){
return (function() {
var state_machine__11754__auto__ = null;
var state_machine__11754__auto____0 = (function (){
var statearr_24673 = [null,null,null,null,null,null,null,null];
(statearr_24673[(0)] = state_machine__11754__auto__);

(statearr_24673[(1)] = (1));

return statearr_24673;
});
var state_machine__11754__auto____1 = (function (state_24652){
while(true){
var ret_value__11755__auto__ = (function (){try{while(true){
var result__11756__auto__ = switch__11753__auto__(state_24652);
if(cljs.core.keyword_identical_QMARK_(result__11756__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11756__auto__;
}
break;
}
}catch (e24674){if((e24674 instanceof Object)){
var ex__11757__auto__ = e24674;
var statearr_24675_24691 = state_24652;
(statearr_24675_24691[(5)] = ex__11757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24652);

return cljs.core.constant$keyword$61;
} else {
throw e24674;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11755__auto__,cljs.core.constant$keyword$61)){
var G__24692 = state_24652;
state_24652 = G__24692;
continue;
} else {
return ret_value__11755__auto__;
}
break;
}
});
state_machine__11754__auto__ = function(state_24652){
switch(arguments.length){
case 0:
return state_machine__11754__auto____0.call(this);
case 1:
return state_machine__11754__auto____1.call(this,state_24652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11754__auto____0;
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11754__auto____1;
return state_machine__11754__auto__;
})()
;})(switch__11753__auto__,c__11833__auto__))
})();
var state__11835__auto__ = (function (){var statearr_24676 = (function (){return (f__11834__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11834__auto__.cljs$core$IFn$_invoke$arity$0() : f__11834__auto__.call(null));
})();
(statearr_24676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11833__auto__);

return statearr_24676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11835__auto__);
});})(c__11833__auto__))
);

return c__11833__auto__;
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

cljs.core.async.Mux = (function (){var obj24694 = {};
return obj24694;
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
return (function (){var or__3630__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__24698 = x__4274__auto__;
return goog.typeOf(G__24698);
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


cljs.core.async.Mult = (function (){var obj24700 = {};
return obj24700;
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
return (function (){var or__3630__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__24704 = x__4274__auto__;
return goog.typeOf(G__24704);
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
return (function (){var or__3630__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__24708 = x__4274__auto__;
return goog.typeOf(G__24708);
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
return (function (){var or__3630__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__24712 = x__4274__auto__;
return goog.typeOf(G__24712);
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
var cs = (function (){var G__24942 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24942) : cljs.core.atom.call(null,G__24942));
})();
var m = (function (){
if(typeof cljs.core.async.t24943 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24943 = (function (cs,ch,mult,meta24944){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24944 = meta24944;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24943.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t24943.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t24943.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t24943.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__24946_25171 = self__.cs;
var G__24947_25172 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24946_25171,G__24947_25172) : cljs.core.reset_BANG_.call(null,G__24946_25171,G__24947_25172));

return null;
});})(cs))
;

cljs.core.async.t24943.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24943.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t24943.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24945){
var self__ = this;
var _24945__$1 = this;
return self__.meta24944;
});})(cs))
;

cljs.core.async.t24943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24945,meta24944__$1){
var self__ = this;
var _24945__$1 = this;
return (new cljs.core.async.t24943(self__.cs,self__.ch,self__.mult,meta24944__$1));
});})(cs))
;

cljs.core.async.t24943.cljs$lang$type = true;

cljs.core.async.t24943.cljs$lang$ctorStr = "cljs.core.async/t24943";

cljs.core.async.t24943.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24943");
});})(cs))
;

cljs.core.async.__GT_t24943 = ((function (cs){
return (function __GT_t24943(cs__$1,ch__$1,mult__$1,meta24944){
return (new cljs.core.async.t24943(cs__$1,ch__$1,mult__$1,meta24944));
});})(cs))
;

}

return (new cljs.core.async.t24943(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,397,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,390,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__24948 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24948) : cljs.core.atom.call(null,G__24948));
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
var c__11833__auto___25173 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11833__auto___25173,cs,m,dchan,dctr,done){
return (function (){
var f__11834__auto__ = (function (){var switch__11753__auto__ = ((function (c__11833__auto___25173,cs,m,dchan,dctr,done){
return (function (state_25079){
var state_val_25080 = (state_25079[(1)]);
if((state_val_25080 === (7))){
var inst_25075 = (state_25079[(2)]);
var state_25079__$1 = state_25079;
var statearr_25081_25174 = state_25079__$1;
(statearr_25081_25174[(2)] = inst_25075);

(statearr_25081_25174[(1)] = (3));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (20))){
var inst_24980 = (state_25079[(7)]);
var inst_24990 = cljs.core.first(inst_24980);
var inst_24991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24990,(0),null);
var inst_24992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24990,(1),null);
var state_25079__$1 = (function (){var statearr_25082 = state_25079;
(statearr_25082[(8)] = inst_24991);

return statearr_25082;
})();
if(cljs.core.truth_(inst_24992)){
var statearr_25083_25175 = state_25079__$1;
(statearr_25083_25175[(1)] = (22));

} else {
var statearr_25084_25176 = state_25079__$1;
(statearr_25084_25176[(1)] = (23));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (27))){
var inst_25022 = (state_25079[(9)]);
var inst_25020 = (state_25079[(10)]);
var inst_24951 = (state_25079[(11)]);
var inst_25027 = (state_25079[(12)]);
var inst_25027__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25020,inst_25022);
var inst_25028 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25027__$1,inst_24951,done);
var state_25079__$1 = (function (){var statearr_25085 = state_25079;
(statearr_25085[(12)] = inst_25027__$1);

return statearr_25085;
})();
if(cljs.core.truth_(inst_25028)){
var statearr_25086_25177 = state_25079__$1;
(statearr_25086_25177[(1)] = (30));

} else {
var statearr_25087_25178 = state_25079__$1;
(statearr_25087_25178[(1)] = (31));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (1))){
var state_25079__$1 = state_25079;
var statearr_25088_25179 = state_25079__$1;
(statearr_25088_25179[(2)] = null);

(statearr_25088_25179[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (24))){
var inst_24980 = (state_25079[(7)]);
var inst_24997 = (state_25079[(2)]);
var inst_24998 = cljs.core.next(inst_24980);
var inst_24960 = inst_24998;
var inst_24961 = null;
var inst_24962 = (0);
var inst_24963 = (0);
var state_25079__$1 = (function (){var statearr_25089 = state_25079;
(statearr_25089[(13)] = inst_24997);

(statearr_25089[(14)] = inst_24963);

(statearr_25089[(15)] = inst_24962);

(statearr_25089[(16)] = inst_24961);

(statearr_25089[(17)] = inst_24960);

return statearr_25089;
})();
var statearr_25090_25180 = state_25079__$1;
(statearr_25090_25180[(2)] = null);

(statearr_25090_25180[(1)] = (8));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (39))){
var state_25079__$1 = state_25079;
var statearr_25094_25181 = state_25079__$1;
(statearr_25094_25181[(2)] = null);

(statearr_25094_25181[(1)] = (41));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (4))){
var inst_24951 = (state_25079[(11)]);
var inst_24951__$1 = (state_25079[(2)]);
var inst_24952 = (inst_24951__$1 == null);
var state_25079__$1 = (function (){var statearr_25095 = state_25079;
(statearr_25095[(11)] = inst_24951__$1);

return statearr_25095;
})();
if(cljs.core.truth_(inst_24952)){
var statearr_25096_25182 = state_25079__$1;
(statearr_25096_25182[(1)] = (5));

} else {
var statearr_25097_25183 = state_25079__$1;
(statearr_25097_25183[(1)] = (6));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (15))){
var inst_24963 = (state_25079[(14)]);
var inst_24962 = (state_25079[(15)]);
var inst_24961 = (state_25079[(16)]);
var inst_24960 = (state_25079[(17)]);
var inst_24976 = (state_25079[(2)]);
var inst_24977 = (inst_24963 + (1));
var tmp25091 = inst_24962;
var tmp25092 = inst_24961;
var tmp25093 = inst_24960;
var inst_24960__$1 = tmp25093;
var inst_24961__$1 = tmp25092;
var inst_24962__$1 = tmp25091;
var inst_24963__$1 = inst_24977;
var state_25079__$1 = (function (){var statearr_25098 = state_25079;
(statearr_25098[(14)] = inst_24963__$1);

(statearr_25098[(18)] = inst_24976);

(statearr_25098[(15)] = inst_24962__$1);

(statearr_25098[(16)] = inst_24961__$1);

(statearr_25098[(17)] = inst_24960__$1);

return statearr_25098;
})();
var statearr_25099_25184 = state_25079__$1;
(statearr_25099_25184[(2)] = null);

(statearr_25099_25184[(1)] = (8));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (21))){
var inst_25001 = (state_25079[(2)]);
var state_25079__$1 = state_25079;
var statearr_25103_25185 = state_25079__$1;
(statearr_25103_25185[(2)] = inst_25001);

(statearr_25103_25185[(1)] = (18));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (31))){
var inst_25027 = (state_25079[(12)]);
var inst_25031 = done(null);
var inst_25032 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25027);
var state_25079__$1 = (function (){var statearr_25104 = state_25079;
(statearr_25104[(19)] = inst_25031);

return statearr_25104;
})();
var statearr_25105_25186 = state_25079__$1;
(statearr_25105_25186[(2)] = inst_25032);

(statearr_25105_25186[(1)] = (32));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (32))){
var inst_25022 = (state_25079[(9)]);
var inst_25019 = (state_25079[(20)]);
var inst_25020 = (state_25079[(10)]);
var inst_25021 = (state_25079[(21)]);
var inst_25034 = (state_25079[(2)]);
var inst_25035 = (inst_25022 + (1));
var tmp25100 = inst_25019;
var tmp25101 = inst_25020;
var tmp25102 = inst_25021;
var inst_25019__$1 = tmp25100;
var inst_25020__$1 = tmp25101;
var inst_25021__$1 = tmp25102;
var inst_25022__$1 = inst_25035;
var state_25079__$1 = (function (){var statearr_25106 = state_25079;
(statearr_25106[(9)] = inst_25022__$1);

(statearr_25106[(20)] = inst_25019__$1);

(statearr_25106[(10)] = inst_25020__$1);

(statearr_25106[(22)] = inst_25034);

(statearr_25106[(21)] = inst_25021__$1);

return statearr_25106;
})();
var statearr_25107_25187 = state_25079__$1;
(statearr_25107_25187[(2)] = null);

(statearr_25107_25187[(1)] = (25));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (40))){
var inst_25047 = (state_25079[(23)]);
var inst_25051 = done(null);
var inst_25052 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25047);
var state_25079__$1 = (function (){var statearr_25108 = state_25079;
(statearr_25108[(24)] = inst_25051);

return statearr_25108;
})();
var statearr_25109_25188 = state_25079__$1;
(statearr_25109_25188[(2)] = inst_25052);

(statearr_25109_25188[(1)] = (41));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (33))){
var inst_25038 = (state_25079[(25)]);
var inst_25040 = cljs.core.chunked_seq_QMARK_(inst_25038);
var state_25079__$1 = state_25079;
if(inst_25040){
var statearr_25110_25189 = state_25079__$1;
(statearr_25110_25189[(1)] = (36));

} else {
var statearr_25111_25190 = state_25079__$1;
(statearr_25111_25190[(1)] = (37));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (13))){
var inst_24970 = (state_25079[(26)]);
var inst_24973 = cljs.core.async.close_BANG_(inst_24970);
var state_25079__$1 = state_25079;
var statearr_25112_25191 = state_25079__$1;
(statearr_25112_25191[(2)] = inst_24973);

(statearr_25112_25191[(1)] = (15));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (22))){
var inst_24991 = (state_25079[(8)]);
var inst_24994 = cljs.core.async.close_BANG_(inst_24991);
var state_25079__$1 = state_25079;
var statearr_25113_25192 = state_25079__$1;
(statearr_25113_25192[(2)] = inst_24994);

(statearr_25113_25192[(1)] = (24));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (36))){
var inst_25038 = (state_25079[(25)]);
var inst_25042 = cljs.core.chunk_first(inst_25038);
var inst_25043 = cljs.core.chunk_rest(inst_25038);
var inst_25044 = cljs.core.count(inst_25042);
var inst_25019 = inst_25043;
var inst_25020 = inst_25042;
var inst_25021 = inst_25044;
var inst_25022 = (0);
var state_25079__$1 = (function (){var statearr_25114 = state_25079;
(statearr_25114[(9)] = inst_25022);

(statearr_25114[(20)] = inst_25019);

(statearr_25114[(10)] = inst_25020);

(statearr_25114[(21)] = inst_25021);

return statearr_25114;
})();
var statearr_25115_25193 = state_25079__$1;
(statearr_25115_25193[(2)] = null);

(statearr_25115_25193[(1)] = (25));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (41))){
var inst_25038 = (state_25079[(25)]);
var inst_25054 = (state_25079[(2)]);
var inst_25055 = cljs.core.next(inst_25038);
var inst_25019 = inst_25055;
var inst_25020 = null;
var inst_25021 = (0);
var inst_25022 = (0);
var state_25079__$1 = (function (){var statearr_25116 = state_25079;
(statearr_25116[(9)] = inst_25022);

(statearr_25116[(20)] = inst_25019);

(statearr_25116[(27)] = inst_25054);

(statearr_25116[(10)] = inst_25020);

(statearr_25116[(21)] = inst_25021);

return statearr_25116;
})();
var statearr_25117_25194 = state_25079__$1;
(statearr_25117_25194[(2)] = null);

(statearr_25117_25194[(1)] = (25));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (43))){
var state_25079__$1 = state_25079;
var statearr_25118_25195 = state_25079__$1;
(statearr_25118_25195[(2)] = null);

(statearr_25118_25195[(1)] = (44));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (29))){
var inst_25063 = (state_25079[(2)]);
var state_25079__$1 = state_25079;
var statearr_25119_25196 = state_25079__$1;
(statearr_25119_25196[(2)] = inst_25063);

(statearr_25119_25196[(1)] = (26));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (44))){
var inst_25072 = (state_25079[(2)]);
var state_25079__$1 = (function (){var statearr_25120 = state_25079;
(statearr_25120[(28)] = inst_25072);

return statearr_25120;
})();
var statearr_25121_25197 = state_25079__$1;
(statearr_25121_25197[(2)] = null);

(statearr_25121_25197[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (6))){
var inst_25011 = (state_25079[(29)]);
var inst_25010 = (function (){var G__25122 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25122) : cljs.core.deref.call(null,G__25122));
})();
var inst_25011__$1 = cljs.core.keys(inst_25010);
var inst_25012 = cljs.core.count(inst_25011__$1);
var inst_25013 = (function (){var G__25123 = dctr;
var G__25124 = inst_25012;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25123,G__25124) : cljs.core.reset_BANG_.call(null,G__25123,G__25124));
})();
var inst_25018 = cljs.core.seq(inst_25011__$1);
var inst_25019 = inst_25018;
var inst_25020 = null;
var inst_25021 = (0);
var inst_25022 = (0);
var state_25079__$1 = (function (){var statearr_25125 = state_25079;
(statearr_25125[(9)] = inst_25022);

(statearr_25125[(30)] = inst_25013);

(statearr_25125[(20)] = inst_25019);

(statearr_25125[(10)] = inst_25020);

(statearr_25125[(29)] = inst_25011__$1);

(statearr_25125[(21)] = inst_25021);

return statearr_25125;
})();
var statearr_25126_25198 = state_25079__$1;
(statearr_25126_25198[(2)] = null);

(statearr_25126_25198[(1)] = (25));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (28))){
var inst_25019 = (state_25079[(20)]);
var inst_25038 = (state_25079[(25)]);
var inst_25038__$1 = cljs.core.seq(inst_25019);
var state_25079__$1 = (function (){var statearr_25127 = state_25079;
(statearr_25127[(25)] = inst_25038__$1);

return statearr_25127;
})();
if(inst_25038__$1){
var statearr_25128_25199 = state_25079__$1;
(statearr_25128_25199[(1)] = (33));

} else {
var statearr_25129_25200 = state_25079__$1;
(statearr_25129_25200[(1)] = (34));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (25))){
var inst_25022 = (state_25079[(9)]);
var inst_25021 = (state_25079[(21)]);
var inst_25024 = (inst_25022 < inst_25021);
var inst_25025 = inst_25024;
var state_25079__$1 = state_25079;
if(cljs.core.truth_(inst_25025)){
var statearr_25130_25201 = state_25079__$1;
(statearr_25130_25201[(1)] = (27));

} else {
var statearr_25131_25202 = state_25079__$1;
(statearr_25131_25202[(1)] = (28));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (34))){
var state_25079__$1 = state_25079;
var statearr_25132_25203 = state_25079__$1;
(statearr_25132_25203[(2)] = null);

(statearr_25132_25203[(1)] = (35));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (17))){
var state_25079__$1 = state_25079;
var statearr_25133_25204 = state_25079__$1;
(statearr_25133_25204[(2)] = null);

(statearr_25133_25204[(1)] = (18));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (3))){
var inst_25077 = (state_25079[(2)]);
var state_25079__$1 = state_25079;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25079__$1,inst_25077);
} else {
if((state_val_25080 === (12))){
var inst_25006 = (state_25079[(2)]);
var state_25079__$1 = state_25079;
var statearr_25134_25205 = state_25079__$1;
(statearr_25134_25205[(2)] = inst_25006);

(statearr_25134_25205[(1)] = (9));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (2))){
var state_25079__$1 = state_25079;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25079__$1,(4),ch);
} else {
if((state_val_25080 === (23))){
var state_25079__$1 = state_25079;
var statearr_25135_25206 = state_25079__$1;
(statearr_25135_25206[(2)] = null);

(statearr_25135_25206[(1)] = (24));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (35))){
var inst_25061 = (state_25079[(2)]);
var state_25079__$1 = state_25079;
var statearr_25136_25207 = state_25079__$1;
(statearr_25136_25207[(2)] = inst_25061);

(statearr_25136_25207[(1)] = (29));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (19))){
var inst_24980 = (state_25079[(7)]);
var inst_24984 = cljs.core.chunk_first(inst_24980);
var inst_24985 = cljs.core.chunk_rest(inst_24980);
var inst_24986 = cljs.core.count(inst_24984);
var inst_24960 = inst_24985;
var inst_24961 = inst_24984;
var inst_24962 = inst_24986;
var inst_24963 = (0);
var state_25079__$1 = (function (){var statearr_25137 = state_25079;
(statearr_25137[(14)] = inst_24963);

(statearr_25137[(15)] = inst_24962);

(statearr_25137[(16)] = inst_24961);

(statearr_25137[(17)] = inst_24960);

return statearr_25137;
})();
var statearr_25138_25208 = state_25079__$1;
(statearr_25138_25208[(2)] = null);

(statearr_25138_25208[(1)] = (8));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (11))){
var inst_24980 = (state_25079[(7)]);
var inst_24960 = (state_25079[(17)]);
var inst_24980__$1 = cljs.core.seq(inst_24960);
var state_25079__$1 = (function (){var statearr_25139 = state_25079;
(statearr_25139[(7)] = inst_24980__$1);

return statearr_25139;
})();
if(inst_24980__$1){
var statearr_25140_25209 = state_25079__$1;
(statearr_25140_25209[(1)] = (16));

} else {
var statearr_25141_25210 = state_25079__$1;
(statearr_25141_25210[(1)] = (17));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (9))){
var inst_25008 = (state_25079[(2)]);
var state_25079__$1 = state_25079;
var statearr_25142_25211 = state_25079__$1;
(statearr_25142_25211[(2)] = inst_25008);

(statearr_25142_25211[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (5))){
var inst_24958 = (function (){var G__25143 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25143) : cljs.core.deref.call(null,G__25143));
})();
var inst_24959 = cljs.core.seq(inst_24958);
var inst_24960 = inst_24959;
var inst_24961 = null;
var inst_24962 = (0);
var inst_24963 = (0);
var state_25079__$1 = (function (){var statearr_25144 = state_25079;
(statearr_25144[(14)] = inst_24963);

(statearr_25144[(15)] = inst_24962);

(statearr_25144[(16)] = inst_24961);

(statearr_25144[(17)] = inst_24960);

return statearr_25144;
})();
var statearr_25145_25212 = state_25079__$1;
(statearr_25145_25212[(2)] = null);

(statearr_25145_25212[(1)] = (8));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (14))){
var state_25079__$1 = state_25079;
var statearr_25146_25213 = state_25079__$1;
(statearr_25146_25213[(2)] = null);

(statearr_25146_25213[(1)] = (15));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (45))){
var inst_25069 = (state_25079[(2)]);
var state_25079__$1 = state_25079;
var statearr_25147_25214 = state_25079__$1;
(statearr_25147_25214[(2)] = inst_25069);

(statearr_25147_25214[(1)] = (44));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (26))){
var inst_25011 = (state_25079[(29)]);
var inst_25065 = (state_25079[(2)]);
var inst_25066 = cljs.core.seq(inst_25011);
var state_25079__$1 = (function (){var statearr_25148 = state_25079;
(statearr_25148[(31)] = inst_25065);

return statearr_25148;
})();
if(inst_25066){
var statearr_25149_25215 = state_25079__$1;
(statearr_25149_25215[(1)] = (42));

} else {
var statearr_25150_25216 = state_25079__$1;
(statearr_25150_25216[(1)] = (43));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (16))){
var inst_24980 = (state_25079[(7)]);
var inst_24982 = cljs.core.chunked_seq_QMARK_(inst_24980);
var state_25079__$1 = state_25079;
if(inst_24982){
var statearr_25151_25217 = state_25079__$1;
(statearr_25151_25217[(1)] = (19));

} else {
var statearr_25152_25218 = state_25079__$1;
(statearr_25152_25218[(1)] = (20));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (38))){
var inst_25058 = (state_25079[(2)]);
var state_25079__$1 = state_25079;
var statearr_25153_25219 = state_25079__$1;
(statearr_25153_25219[(2)] = inst_25058);

(statearr_25153_25219[(1)] = (35));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (30))){
var state_25079__$1 = state_25079;
var statearr_25154_25220 = state_25079__$1;
(statearr_25154_25220[(2)] = null);

(statearr_25154_25220[(1)] = (32));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (10))){
var inst_24963 = (state_25079[(14)]);
var inst_24961 = (state_25079[(16)]);
var inst_24969 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24961,inst_24963);
var inst_24970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24969,(0),null);
var inst_24971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24969,(1),null);
var state_25079__$1 = (function (){var statearr_25155 = state_25079;
(statearr_25155[(26)] = inst_24970);

return statearr_25155;
})();
if(cljs.core.truth_(inst_24971)){
var statearr_25156_25221 = state_25079__$1;
(statearr_25156_25221[(1)] = (13));

} else {
var statearr_25157_25222 = state_25079__$1;
(statearr_25157_25222[(1)] = (14));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (18))){
var inst_25004 = (state_25079[(2)]);
var state_25079__$1 = state_25079;
var statearr_25158_25223 = state_25079__$1;
(statearr_25158_25223[(2)] = inst_25004);

(statearr_25158_25223[(1)] = (12));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (42))){
var state_25079__$1 = state_25079;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25079__$1,(45),dchan);
} else {
if((state_val_25080 === (37))){
var inst_25047 = (state_25079[(23)]);
var inst_24951 = (state_25079[(11)]);
var inst_25038 = (state_25079[(25)]);
var inst_25047__$1 = cljs.core.first(inst_25038);
var inst_25048 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25047__$1,inst_24951,done);
var state_25079__$1 = (function (){var statearr_25159 = state_25079;
(statearr_25159[(23)] = inst_25047__$1);

return statearr_25159;
})();
if(cljs.core.truth_(inst_25048)){
var statearr_25160_25224 = state_25079__$1;
(statearr_25160_25224[(1)] = (39));

} else {
var statearr_25161_25225 = state_25079__$1;
(statearr_25161_25225[(1)] = (40));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_25080 === (8))){
var inst_24963 = (state_25079[(14)]);
var inst_24962 = (state_25079[(15)]);
var inst_24965 = (inst_24963 < inst_24962);
var inst_24966 = inst_24965;
var state_25079__$1 = state_25079;
if(cljs.core.truth_(inst_24966)){
var statearr_25162_25226 = state_25079__$1;
(statearr_25162_25226[(1)] = (10));

} else {
var statearr_25163_25227 = state_25079__$1;
(statearr_25163_25227[(1)] = (11));

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
});})(c__11833__auto___25173,cs,m,dchan,dctr,done))
;
return ((function (switch__11753__auto__,c__11833__auto___25173,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11754__auto__ = null;
var state_machine__11754__auto____0 = (function (){
var statearr_25167 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25167[(0)] = state_machine__11754__auto__);

(statearr_25167[(1)] = (1));

return statearr_25167;
});
var state_machine__11754__auto____1 = (function (state_25079){
while(true){
var ret_value__11755__auto__ = (function (){try{while(true){
var result__11756__auto__ = switch__11753__auto__(state_25079);
if(cljs.core.keyword_identical_QMARK_(result__11756__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11756__auto__;
}
break;
}
}catch (e25168){if((e25168 instanceof Object)){
var ex__11757__auto__ = e25168;
var statearr_25169_25228 = state_25079;
(statearr_25169_25228[(5)] = ex__11757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25079);

return cljs.core.constant$keyword$61;
} else {
throw e25168;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11755__auto__,cljs.core.constant$keyword$61)){
var G__25229 = state_25079;
state_25079 = G__25229;
continue;
} else {
return ret_value__11755__auto__;
}
break;
}
});
state_machine__11754__auto__ = function(state_25079){
switch(arguments.length){
case 0:
return state_machine__11754__auto____0.call(this);
case 1:
return state_machine__11754__auto____1.call(this,state_25079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11754__auto____0;
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11754__auto____1;
return state_machine__11754__auto__;
})()
;})(switch__11753__auto__,c__11833__auto___25173,cs,m,dchan,dctr,done))
})();
var state__11835__auto__ = (function (){var statearr_25170 = (function (){return (f__11834__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11834__auto__.cljs$core$IFn$_invoke$arity$0() : f__11834__auto__.call(null));
})();
(statearr_25170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11833__auto___25173);

return statearr_25170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11835__auto__);
});})(c__11833__auto___25173,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj25234 = {};
return obj25234;
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
return (function (){var or__3630__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__25238 = x__4274__auto__;
return goog.typeOf(G__25238);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__25242 = x__4274__auto__;
return goog.typeOf(G__25242);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__25246 = x__4274__auto__;
return goog.typeOf(G__25246);
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
return (function (){var or__3630__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__25250 = x__4274__auto__;
return goog.typeOf(G__25250);
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
return (function (){var or__3630__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__25254 = x__4274__auto__;
return goog.typeOf(G__25254);
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__25255){
var map__25261 = p__25255;
var map__25261__$1 = ((cljs.core.seq_QMARK_(map__25261))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25261):map__25261);
var opts = map__25261__$1;
var statearr_25262_25266 = state;
(statearr_25262_25266[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__25261,map__25261__$1,opts){
return (function (val){
var statearr_25263_25267 = state;
(statearr_25263_25267[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__25261,map__25261__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_25264_25268 = state;
(statearr_25264_25268[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__25265 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25265) : cljs.core.deref.call(null,G__25265));
})());


return cljs.core.constant$keyword$61;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__25255 = null;
if (arguments.length > 3) {
  p__25255 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__25255);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__25269){
var state = cljs.core.first(arglist__25269);
arglist__25269 = cljs.core.next(arglist__25269);
var cont_block = cljs.core.first(arglist__25269);
arglist__25269 = cljs.core.next(arglist__25269);
var ports = cljs.core.first(arglist__25269);
var p__25255 = cljs.core.rest(arglist__25269);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__25255);
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
var cs = (function (){var G__25403 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25403) : cljs.core.atom.call(null,G__25403));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$70,null,cljs.core.constant$keyword$71,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$72);
var solo_mode = (function (){var G__25404 = cljs.core.constant$keyword$71;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25404) : cljs.core.atom.call(null,G__25404));
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
if(cljs.core.truth_((function (){var G__25405 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__25405) : attr.call(null,G__25405));
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
var chs = (function (){var G__25406 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25406) : cljs.core.deref.call(null,G__25406));
})();
var mode = (function (){var G__25407 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25407) : cljs.core.deref.call(null,G__25407));
})();
var solos = pick(cljs.core.constant$keyword$72,chs);
var pauses = pick(cljs.core.constant$keyword$70,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$73,solos,cljs.core.constant$keyword$74,pick(cljs.core.constant$keyword$71,chs),cljs.core.constant$keyword$75,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$70)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t25408 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25408 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25409){
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
this.meta25409 = meta25409;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25408.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t25408.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25408.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25408.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25411_25536 = self__.cs;
var G__25412_25537 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25411_25536,G__25412_25537) : cljs.core.reset_BANG_.call(null,G__25411_25536,G__25412_25537));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25408.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25408.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__25413 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__25413) : self__.solo_modes.call(null,G__25413));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__25414_25538 = self__.solo_mode;
var G__25415_25539 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25414_25538,G__25415_25539) : cljs.core.reset_BANG_.call(null,G__25414_25538,G__25415_25539));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25408.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25408.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25408.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25410){
var self__ = this;
var _25410__$1 = this;
return self__.meta25409;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25410,meta25409__$1){
var self__ = this;
var _25410__$1 = this;
return (new cljs.core.async.t25408(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25409__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25408.cljs$lang$type = true;

cljs.core.async.t25408.cljs$lang$ctorStr = "cljs.core.async/t25408";

cljs.core.async.t25408.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25408");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t25408 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25408(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25409){
return (new cljs.core.async.t25408(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25409));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t25408(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,25,cljs.core.constant$keyword$9,510,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,499,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
;
var c__11833__auto___25540 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11833__auto___25540,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11834__auto__ = (function (){var switch__11753__auto__ = ((function (c__11833__auto___25540,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25487){
var state_val_25488 = (state_25487[(1)]);
if((state_val_25488 === (7))){
var inst_25429 = (state_25487[(7)]);
var inst_25434 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25429);
var state_25487__$1 = state_25487;
var statearr_25489_25541 = state_25487__$1;
(statearr_25489_25541[(2)] = inst_25434);

(statearr_25489_25541[(1)] = (9));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25488 === (20))){
var inst_25444 = (state_25487[(8)]);
var state_25487__$1 = state_25487;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25487__$1,(23),out,inst_25444);
} else {
if((state_val_25488 === (1))){
var inst_25419 = (state_25487[(9)]);
var inst_25419__$1 = calc_state();
var inst_25420 = cljs.core.seq_QMARK_(inst_25419__$1);
var state_25487__$1 = (function (){var statearr_25490 = state_25487;
(statearr_25490[(9)] = inst_25419__$1);

return statearr_25490;
})();
if(inst_25420){
var statearr_25491_25542 = state_25487__$1;
(statearr_25491_25542[(1)] = (2));

} else {
var statearr_25492_25543 = state_25487__$1;
(statearr_25492_25543[(1)] = (3));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_25488 === (24))){
var inst_25437 = (state_25487[(10)]);
var inst_25429 = inst_25437;
var state_25487__$1 = (function (){var statearr_25493 = state_25487;
(statearr_25493[(7)] = inst_25429);

return statearr_25493;
})();
var statearr_25494_25544 = state_25487__$1;
(statearr_25494_25544[(2)] = null);

(statearr_25494_25544[(1)] = (5));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25488 === (4))){
var inst_25419 = (state_25487[(9)]);
var inst_25425 = (state_25487[(2)]);
var inst_25426 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25425,cljs.core.constant$keyword$75);
var inst_25427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25425,cljs.core.constant$keyword$74);
var inst_25428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25425,cljs.core.constant$keyword$73);
var inst_25429 = inst_25419;
var state_25487__$1 = (function (){var statearr_25495 = state_25487;
(statearr_25495[(11)] = inst_25428);

(statearr_25495[(12)] = inst_25427);

(statearr_25495[(7)] = inst_25429);

(statearr_25495[(13)] = inst_25426);

return statearr_25495;
})();
var statearr_25496_25545 = state_25487__$1;
(statearr_25496_25545[(2)] = null);

(statearr_25496_25545[(1)] = (5));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25488 === (15))){
var state_25487__$1 = state_25487;
var statearr_25497_25546 = state_25487__$1;
(statearr_25497_25546[(2)] = null);

(statearr_25497_25546[(1)] = (16));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25488 === (21))){
var inst_25437 = (state_25487[(10)]);
var inst_25429 = inst_25437;
var state_25487__$1 = (function (){var statearr_25498 = state_25487;
(statearr_25498[(7)] = inst_25429);

return statearr_25498;
})();
var statearr_25499_25547 = state_25487__$1;
(statearr_25499_25547[(2)] = null);

(statearr_25499_25547[(1)] = (5));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25488 === (13))){
var inst_25483 = (state_25487[(2)]);
var state_25487__$1 = state_25487;
var statearr_25500_25548 = state_25487__$1;
(statearr_25500_25548[(2)] = inst_25483);

(statearr_25500_25548[(1)] = (6));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25488 === (22))){
var inst_25481 = (state_25487[(2)]);
var state_25487__$1 = state_25487;
var statearr_25501_25549 = state_25487__$1;
(statearr_25501_25549[(2)] = inst_25481);

(statearr_25501_25549[(1)] = (13));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25488 === (6))){
var inst_25485 = (state_25487[(2)]);
var state_25487__$1 = state_25487;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25487__$1,inst_25485);
} else {
if((state_val_25488 === (25))){
var state_25487__$1 = state_25487;
var statearr_25502_25550 = state_25487__$1;
(statearr_25502_25550[(2)] = null);

(statearr_25502_25550[(1)] = (26));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25488 === (17))){
var inst_25460 = (state_25487[(14)]);
var state_25487__$1 = state_25487;
var statearr_25503_25551 = state_25487__$1;
(statearr_25503_25551[(2)] = inst_25460);

(statearr_25503_25551[(1)] = (19));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25488 === (3))){
var inst_25419 = (state_25487[(9)]);
var state_25487__$1 = state_25487;
var statearr_25504_25552 = state_25487__$1;
(statearr_25504_25552[(2)] = inst_25419);

(statearr_25504_25552[(1)] = (4));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25488 === (12))){
var inst_25460 = (state_25487[(14)]);
var inst_25445 = (state_25487[(15)]);
var inst_25440 = (state_25487[(16)]);
var inst_25460__$1 = (function (){var G__25505 = inst_25445;
return (inst_25440.cljs$core$IFn$_invoke$arity$1 ? inst_25440.cljs$core$IFn$_invoke$arity$1(G__25505) : inst_25440.call(null,G__25505));
})();
var state_25487__$1 = (function (){var statearr_25506 = state_25487;
(statearr_25506[(14)] = inst_25460__$1);

return statearr_25506;
})();
if(cljs.core.truth_(inst_25460__$1)){
var statearr_25507_25553 = state_25487__$1;
(statearr_25507_25553[(1)] = (17));

} else {
var statearr_25508_25554 = state_25487__$1;
(statearr_25508_25554[(1)] = (18));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_25488 === (2))){
var inst_25419 = (state_25487[(9)]);
var inst_25422 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25419);
var state_25487__$1 = state_25487;
var statearr_25509_25555 = state_25487__$1;
(statearr_25509_25555[(2)] = inst_25422);

(statearr_25509_25555[(1)] = (4));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25488 === (23))){
var inst_25472 = (state_25487[(2)]);
var state_25487__$1 = state_25487;
if(cljs.core.truth_(inst_25472)){
var statearr_25510_25556 = state_25487__$1;
(statearr_25510_25556[(1)] = (24));

} else {
var statearr_25511_25557 = state_25487__$1;
(statearr_25511_25557[(1)] = (25));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_25488 === (19))){
var inst_25469 = (state_25487[(2)]);
var state_25487__$1 = state_25487;
if(cljs.core.truth_(inst_25469)){
var statearr_25512_25558 = state_25487__$1;
(statearr_25512_25558[(1)] = (20));

} else {
var statearr_25513_25559 = state_25487__$1;
(statearr_25513_25559[(1)] = (21));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_25488 === (11))){
var inst_25444 = (state_25487[(8)]);
var inst_25450 = (inst_25444 == null);
var state_25487__$1 = state_25487;
if(cljs.core.truth_(inst_25450)){
var statearr_25514_25560 = state_25487__$1;
(statearr_25514_25560[(1)] = (14));

} else {
var statearr_25515_25561 = state_25487__$1;
(statearr_25515_25561[(1)] = (15));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_25488 === (9))){
var inst_25437 = (state_25487[(10)]);
var inst_25437__$1 = (state_25487[(2)]);
var inst_25438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25437__$1,cljs.core.constant$keyword$75);
var inst_25439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25437__$1,cljs.core.constant$keyword$74);
var inst_25440 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25437__$1,cljs.core.constant$keyword$73);
var state_25487__$1 = (function (){var statearr_25516 = state_25487;
(statearr_25516[(10)] = inst_25437__$1);

(statearr_25516[(16)] = inst_25440);

(statearr_25516[(17)] = inst_25439);

return statearr_25516;
})();
return cljs.core.async.ioc_alts_BANG_(state_25487__$1,(10),inst_25438);
} else {
if((state_val_25488 === (5))){
var inst_25429 = (state_25487[(7)]);
var inst_25432 = cljs.core.seq_QMARK_(inst_25429);
var state_25487__$1 = state_25487;
if(inst_25432){
var statearr_25517_25562 = state_25487__$1;
(statearr_25517_25562[(1)] = (7));

} else {
var statearr_25518_25563 = state_25487__$1;
(statearr_25518_25563[(1)] = (8));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_25488 === (14))){
var inst_25445 = (state_25487[(15)]);
var inst_25452 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25445);
var state_25487__$1 = state_25487;
var statearr_25519_25564 = state_25487__$1;
(statearr_25519_25564[(2)] = inst_25452);

(statearr_25519_25564[(1)] = (16));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25488 === (26))){
var inst_25477 = (state_25487[(2)]);
var state_25487__$1 = state_25487;
var statearr_25520_25565 = state_25487__$1;
(statearr_25520_25565[(2)] = inst_25477);

(statearr_25520_25565[(1)] = (22));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25488 === (16))){
var inst_25455 = (state_25487[(2)]);
var inst_25456 = calc_state();
var inst_25429 = inst_25456;
var state_25487__$1 = (function (){var statearr_25521 = state_25487;
(statearr_25521[(18)] = inst_25455);

(statearr_25521[(7)] = inst_25429);

return statearr_25521;
})();
var statearr_25522_25566 = state_25487__$1;
(statearr_25522_25566[(2)] = null);

(statearr_25522_25566[(1)] = (5));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25488 === (10))){
var inst_25445 = (state_25487[(15)]);
var inst_25444 = (state_25487[(8)]);
var inst_25443 = (state_25487[(2)]);
var inst_25444__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25443,(0),null);
var inst_25445__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25443,(1),null);
var inst_25446 = (inst_25444__$1 == null);
var inst_25447 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25445__$1,change);
var inst_25448 = (inst_25446) || (inst_25447);
var state_25487__$1 = (function (){var statearr_25523 = state_25487;
(statearr_25523[(15)] = inst_25445__$1);

(statearr_25523[(8)] = inst_25444__$1);

return statearr_25523;
})();
if(cljs.core.truth_(inst_25448)){
var statearr_25524_25567 = state_25487__$1;
(statearr_25524_25567[(1)] = (11));

} else {
var statearr_25525_25568 = state_25487__$1;
(statearr_25525_25568[(1)] = (12));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_25488 === (18))){
var inst_25445 = (state_25487[(15)]);
var inst_25440 = (state_25487[(16)]);
var inst_25439 = (state_25487[(17)]);
var inst_25464 = cljs.core.empty_QMARK_(inst_25440);
var inst_25465 = (function (){var G__25526 = inst_25445;
return (inst_25439.cljs$core$IFn$_invoke$arity$1 ? inst_25439.cljs$core$IFn$_invoke$arity$1(G__25526) : inst_25439.call(null,G__25526));
})();
var inst_25466 = cljs.core.not(inst_25465);
var inst_25467 = (inst_25464) && (inst_25466);
var state_25487__$1 = state_25487;
var statearr_25527_25569 = state_25487__$1;
(statearr_25527_25569[(2)] = inst_25467);

(statearr_25527_25569[(1)] = (19));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25488 === (8))){
var inst_25429 = (state_25487[(7)]);
var state_25487__$1 = state_25487;
var statearr_25528_25570 = state_25487__$1;
(statearr_25528_25570[(2)] = inst_25429);

(statearr_25528_25570[(1)] = (9));


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
});})(c__11833__auto___25540,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__11753__auto__,c__11833__auto___25540,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11754__auto__ = null;
var state_machine__11754__auto____0 = (function (){
var statearr_25532 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25532[(0)] = state_machine__11754__auto__);

(statearr_25532[(1)] = (1));

return statearr_25532;
});
var state_machine__11754__auto____1 = (function (state_25487){
while(true){
var ret_value__11755__auto__ = (function (){try{while(true){
var result__11756__auto__ = switch__11753__auto__(state_25487);
if(cljs.core.keyword_identical_QMARK_(result__11756__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11756__auto__;
}
break;
}
}catch (e25533){if((e25533 instanceof Object)){
var ex__11757__auto__ = e25533;
var statearr_25534_25571 = state_25487;
(statearr_25534_25571[(5)] = ex__11757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25487);

return cljs.core.constant$keyword$61;
} else {
throw e25533;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11755__auto__,cljs.core.constant$keyword$61)){
var G__25572 = state_25487;
state_25487 = G__25572;
continue;
} else {
return ret_value__11755__auto__;
}
break;
}
});
state_machine__11754__auto__ = function(state_25487){
switch(arguments.length){
case 0:
return state_machine__11754__auto____0.call(this);
case 1:
return state_machine__11754__auto____1.call(this,state_25487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11754__auto____0;
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11754__auto____1;
return state_machine__11754__auto__;
})()
;})(switch__11753__auto__,c__11833__auto___25540,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11835__auto__ = (function (){var statearr_25535 = (function (){return (f__11834__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11834__auto__.cljs$core$IFn$_invoke$arity$0() : f__11834__auto__.call(null));
})();
(statearr_25535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11833__auto___25540);

return statearr_25535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11835__auto__);
});})(c__11833__auto___25540,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj25574 = {};
return obj25574;
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
return (function (){var or__3630__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__25578 = x__4274__auto__;
return goog.typeOf(G__25578);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__25582 = x__4274__auto__;
return goog.typeOf(G__25582);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__25588 = x__4274__auto__;
return goog.typeOf(G__25588);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__25590 = x__4274__auto__;
return goog.typeOf(G__25590);
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
var mults = (function (){var G__25729 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25729) : cljs.core.atom.call(null,G__25729));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__3630__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__25731 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25731) : cljs.core.deref.call(null,G__25731));
})(),topic);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3630__auto__,mults){
return (function (p1__25591_SHARP_){
if(cljs.core.truth_((function (){var G__25732 = topic;
return (p1__25591_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25591_SHARP_.cljs$core$IFn$_invoke$arity$1(G__25732) : p1__25591_SHARP_.call(null,G__25732));
})())){
return p1__25591_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25591_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__25733 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__25733) : buf_fn.call(null,G__25733));
})())));
}
});})(or__3630__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t25734 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25734 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25735){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25735 = meta25735;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25734.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t25734.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__25737 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__25737) : self__.ensure_mult.call(null,G__25737));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t25734.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__25738 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25738) : cljs.core.deref.call(null,G__25738));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t25734.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25739 = self__.mults;
var G__25740 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25739,G__25740) : cljs.core.reset_BANG_.call(null,G__25739,G__25740));
});})(mults,ensure_mult))
;

cljs.core.async.t25734.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t25734.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25734.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t25734.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25736){
var self__ = this;
var _25736__$1 = this;
return self__.meta25735;
});})(mults,ensure_mult))
;

cljs.core.async.t25734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25736,meta25735__$1){
var self__ = this;
var _25736__$1 = this;
return (new cljs.core.async.t25734(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25735__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t25734.cljs$lang$type = true;

cljs.core.async.t25734.cljs$lang$ctorStr = "cljs.core.async/t25734";

cljs.core.async.t25734.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25734");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t25734 = ((function (mults,ensure_mult){
return (function __GT_t25734(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25735){
return (new cljs.core.async.t25734(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25735));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t25734(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,65,cljs.core.constant$keyword$9,603,cljs.core.constant$keyword$10,14,cljs.core.constant$keyword$11,591,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
;
var c__11833__auto___25863 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11833__auto___25863,mults,ensure_mult,p){
return (function (){
var f__11834__auto__ = (function (){var switch__11753__auto__ = ((function (c__11833__auto___25863,mults,ensure_mult,p){
return (function (state_25812){
var state_val_25813 = (state_25812[(1)]);
if((state_val_25813 === (7))){
var inst_25808 = (state_25812[(2)]);
var state_25812__$1 = state_25812;
var statearr_25814_25864 = state_25812__$1;
(statearr_25814_25864[(2)] = inst_25808);

(statearr_25814_25864[(1)] = (3));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25813 === (20))){
var state_25812__$1 = state_25812;
var statearr_25815_25865 = state_25812__$1;
(statearr_25815_25865[(2)] = null);

(statearr_25815_25865[(1)] = (21));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25813 === (1))){
var state_25812__$1 = state_25812;
var statearr_25816_25866 = state_25812__$1;
(statearr_25816_25866[(2)] = null);

(statearr_25816_25866[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25813 === (24))){
var inst_25791 = (state_25812[(7)]);
var inst_25800 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25791);
var state_25812__$1 = state_25812;
var statearr_25817_25867 = state_25812__$1;
(statearr_25817_25867[(2)] = inst_25800);

(statearr_25817_25867[(1)] = (25));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25813 === (4))){
var inst_25743 = (state_25812[(8)]);
var inst_25743__$1 = (state_25812[(2)]);
var inst_25744 = (inst_25743__$1 == null);
var state_25812__$1 = (function (){var statearr_25818 = state_25812;
(statearr_25818[(8)] = inst_25743__$1);

return statearr_25818;
})();
if(cljs.core.truth_(inst_25744)){
var statearr_25819_25868 = state_25812__$1;
(statearr_25819_25868[(1)] = (5));

} else {
var statearr_25820_25869 = state_25812__$1;
(statearr_25820_25869[(1)] = (6));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_25813 === (15))){
var inst_25785 = (state_25812[(2)]);
var state_25812__$1 = state_25812;
var statearr_25821_25870 = state_25812__$1;
(statearr_25821_25870[(2)] = inst_25785);

(statearr_25821_25870[(1)] = (12));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25813 === (21))){
var inst_25805 = (state_25812[(2)]);
var state_25812__$1 = (function (){var statearr_25822 = state_25812;
(statearr_25822[(9)] = inst_25805);

return statearr_25822;
})();
var statearr_25823_25871 = state_25812__$1;
(statearr_25823_25871[(2)] = null);

(statearr_25823_25871[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25813 === (13))){
var inst_25767 = (state_25812[(10)]);
var inst_25769 = cljs.core.chunked_seq_QMARK_(inst_25767);
var state_25812__$1 = state_25812;
if(inst_25769){
var statearr_25824_25872 = state_25812__$1;
(statearr_25824_25872[(1)] = (16));

} else {
var statearr_25825_25873 = state_25812__$1;
(statearr_25825_25873[(1)] = (17));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_25813 === (22))){
var inst_25797 = (state_25812[(2)]);
var state_25812__$1 = state_25812;
if(cljs.core.truth_(inst_25797)){
var statearr_25826_25874 = state_25812__$1;
(statearr_25826_25874[(1)] = (23));

} else {
var statearr_25827_25875 = state_25812__$1;
(statearr_25827_25875[(1)] = (24));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_25813 === (6))){
var inst_25743 = (state_25812[(8)]);
var inst_25793 = (state_25812[(11)]);
var inst_25791 = (state_25812[(7)]);
var inst_25791__$1 = (function (){var G__25828 = inst_25743;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__25828) : topic_fn.call(null,G__25828));
})();
var inst_25792 = (function (){var G__25829 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25829) : cljs.core.deref.call(null,G__25829));
})();
var inst_25793__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25792,inst_25791__$1);
var state_25812__$1 = (function (){var statearr_25830 = state_25812;
(statearr_25830[(11)] = inst_25793__$1);

(statearr_25830[(7)] = inst_25791__$1);

return statearr_25830;
})();
if(cljs.core.truth_(inst_25793__$1)){
var statearr_25831_25876 = state_25812__$1;
(statearr_25831_25876[(1)] = (19));

} else {
var statearr_25832_25877 = state_25812__$1;
(statearr_25832_25877[(1)] = (20));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_25813 === (25))){
var inst_25802 = (state_25812[(2)]);
var state_25812__$1 = state_25812;
var statearr_25833_25878 = state_25812__$1;
(statearr_25833_25878[(2)] = inst_25802);

(statearr_25833_25878[(1)] = (21));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25813 === (17))){
var inst_25767 = (state_25812[(10)]);
var inst_25776 = cljs.core.first(inst_25767);
var inst_25777 = cljs.core.async.muxch_STAR_(inst_25776);
var inst_25778 = cljs.core.async.close_BANG_(inst_25777);
var inst_25779 = cljs.core.next(inst_25767);
var inst_25753 = inst_25779;
var inst_25754 = null;
var inst_25755 = (0);
var inst_25756 = (0);
var state_25812__$1 = (function (){var statearr_25834 = state_25812;
(statearr_25834[(12)] = inst_25756);

(statearr_25834[(13)] = inst_25755);

(statearr_25834[(14)] = inst_25753);

(statearr_25834[(15)] = inst_25754);

(statearr_25834[(16)] = inst_25778);

return statearr_25834;
})();
var statearr_25835_25879 = state_25812__$1;
(statearr_25835_25879[(2)] = null);

(statearr_25835_25879[(1)] = (8));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25813 === (3))){
var inst_25810 = (state_25812[(2)]);
var state_25812__$1 = state_25812;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25812__$1,inst_25810);
} else {
if((state_val_25813 === (12))){
var inst_25787 = (state_25812[(2)]);
var state_25812__$1 = state_25812;
var statearr_25836_25880 = state_25812__$1;
(statearr_25836_25880[(2)] = inst_25787);

(statearr_25836_25880[(1)] = (9));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25813 === (2))){
var state_25812__$1 = state_25812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25812__$1,(4),ch);
} else {
if((state_val_25813 === (23))){
var state_25812__$1 = state_25812;
var statearr_25837_25881 = state_25812__$1;
(statearr_25837_25881[(2)] = null);

(statearr_25837_25881[(1)] = (25));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25813 === (19))){
var inst_25743 = (state_25812[(8)]);
var inst_25793 = (state_25812[(11)]);
var inst_25795 = cljs.core.async.muxch_STAR_(inst_25793);
var state_25812__$1 = state_25812;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25812__$1,(22),inst_25795,inst_25743);
} else {
if((state_val_25813 === (11))){
var inst_25753 = (state_25812[(14)]);
var inst_25767 = (state_25812[(10)]);
var inst_25767__$1 = cljs.core.seq(inst_25753);
var state_25812__$1 = (function (){var statearr_25838 = state_25812;
(statearr_25838[(10)] = inst_25767__$1);

return statearr_25838;
})();
if(inst_25767__$1){
var statearr_25839_25882 = state_25812__$1;
(statearr_25839_25882[(1)] = (13));

} else {
var statearr_25840_25883 = state_25812__$1;
(statearr_25840_25883[(1)] = (14));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_25813 === (9))){
var inst_25789 = (state_25812[(2)]);
var state_25812__$1 = state_25812;
var statearr_25841_25884 = state_25812__$1;
(statearr_25841_25884[(2)] = inst_25789);

(statearr_25841_25884[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25813 === (5))){
var inst_25750 = (function (){var G__25842 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25842) : cljs.core.deref.call(null,G__25842));
})();
var inst_25751 = cljs.core.vals(inst_25750);
var inst_25752 = cljs.core.seq(inst_25751);
var inst_25753 = inst_25752;
var inst_25754 = null;
var inst_25755 = (0);
var inst_25756 = (0);
var state_25812__$1 = (function (){var statearr_25843 = state_25812;
(statearr_25843[(12)] = inst_25756);

(statearr_25843[(13)] = inst_25755);

(statearr_25843[(14)] = inst_25753);

(statearr_25843[(15)] = inst_25754);

return statearr_25843;
})();
var statearr_25844_25885 = state_25812__$1;
(statearr_25844_25885[(2)] = null);

(statearr_25844_25885[(1)] = (8));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25813 === (14))){
var state_25812__$1 = state_25812;
var statearr_25848_25886 = state_25812__$1;
(statearr_25848_25886[(2)] = null);

(statearr_25848_25886[(1)] = (15));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25813 === (16))){
var inst_25767 = (state_25812[(10)]);
var inst_25771 = cljs.core.chunk_first(inst_25767);
var inst_25772 = cljs.core.chunk_rest(inst_25767);
var inst_25773 = cljs.core.count(inst_25771);
var inst_25753 = inst_25772;
var inst_25754 = inst_25771;
var inst_25755 = inst_25773;
var inst_25756 = (0);
var state_25812__$1 = (function (){var statearr_25849 = state_25812;
(statearr_25849[(12)] = inst_25756);

(statearr_25849[(13)] = inst_25755);

(statearr_25849[(14)] = inst_25753);

(statearr_25849[(15)] = inst_25754);

return statearr_25849;
})();
var statearr_25850_25887 = state_25812__$1;
(statearr_25850_25887[(2)] = null);

(statearr_25850_25887[(1)] = (8));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25813 === (10))){
var inst_25756 = (state_25812[(12)]);
var inst_25755 = (state_25812[(13)]);
var inst_25753 = (state_25812[(14)]);
var inst_25754 = (state_25812[(15)]);
var inst_25761 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25754,inst_25756);
var inst_25762 = cljs.core.async.muxch_STAR_(inst_25761);
var inst_25763 = cljs.core.async.close_BANG_(inst_25762);
var inst_25764 = (inst_25756 + (1));
var tmp25845 = inst_25755;
var tmp25846 = inst_25753;
var tmp25847 = inst_25754;
var inst_25753__$1 = tmp25846;
var inst_25754__$1 = tmp25847;
var inst_25755__$1 = tmp25845;
var inst_25756__$1 = inst_25764;
var state_25812__$1 = (function (){var statearr_25851 = state_25812;
(statearr_25851[(12)] = inst_25756__$1);

(statearr_25851[(13)] = inst_25755__$1);

(statearr_25851[(14)] = inst_25753__$1);

(statearr_25851[(15)] = inst_25754__$1);

(statearr_25851[(17)] = inst_25763);

return statearr_25851;
})();
var statearr_25852_25888 = state_25812__$1;
(statearr_25852_25888[(2)] = null);

(statearr_25852_25888[(1)] = (8));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25813 === (18))){
var inst_25782 = (state_25812[(2)]);
var state_25812__$1 = state_25812;
var statearr_25853_25889 = state_25812__$1;
(statearr_25853_25889[(2)] = inst_25782);

(statearr_25853_25889[(1)] = (15));


return cljs.core.constant$keyword$61;
} else {
if((state_val_25813 === (8))){
var inst_25756 = (state_25812[(12)]);
var inst_25755 = (state_25812[(13)]);
var inst_25758 = (inst_25756 < inst_25755);
var inst_25759 = inst_25758;
var state_25812__$1 = state_25812;
if(cljs.core.truth_(inst_25759)){
var statearr_25854_25890 = state_25812__$1;
(statearr_25854_25890[(1)] = (10));

} else {
var statearr_25855_25891 = state_25812__$1;
(statearr_25855_25891[(1)] = (11));

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
});})(c__11833__auto___25863,mults,ensure_mult,p))
;
return ((function (switch__11753__auto__,c__11833__auto___25863,mults,ensure_mult,p){
return (function() {
var state_machine__11754__auto__ = null;
var state_machine__11754__auto____0 = (function (){
var statearr_25859 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25859[(0)] = state_machine__11754__auto__);

(statearr_25859[(1)] = (1));

return statearr_25859;
});
var state_machine__11754__auto____1 = (function (state_25812){
while(true){
var ret_value__11755__auto__ = (function (){try{while(true){
var result__11756__auto__ = switch__11753__auto__(state_25812);
if(cljs.core.keyword_identical_QMARK_(result__11756__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11756__auto__;
}
break;
}
}catch (e25860){if((e25860 instanceof Object)){
var ex__11757__auto__ = e25860;
var statearr_25861_25892 = state_25812;
(statearr_25861_25892[(5)] = ex__11757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25812);

return cljs.core.constant$keyword$61;
} else {
throw e25860;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11755__auto__,cljs.core.constant$keyword$61)){
var G__25893 = state_25812;
state_25812 = G__25893;
continue;
} else {
return ret_value__11755__auto__;
}
break;
}
});
state_machine__11754__auto__ = function(state_25812){
switch(arguments.length){
case 0:
return state_machine__11754__auto____0.call(this);
case 1:
return state_machine__11754__auto____1.call(this,state_25812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11754__auto____0;
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11754__auto____1;
return state_machine__11754__auto__;
})()
;})(switch__11753__auto__,c__11833__auto___25863,mults,ensure_mult,p))
})();
var state__11835__auto__ = (function (){var statearr_25862 = (function (){return (f__11834__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11834__auto__.cljs$core$IFn$_invoke$arity$0() : f__11834__auto__.call(null));
})();
(statearr_25862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11833__auto___25863);

return statearr_25862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11835__auto__);
});})(c__11833__auto___25863,mults,ensure_mult,p))
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
var dctr = (function (){var G__25974 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25974) : cljs.core.atom.call(null,G__25974));
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
var c__11833__auto___26047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11833__auto___26047,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11834__auto__ = (function (){var switch__11753__auto__ = ((function (c__11833__auto___26047,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26013){
var state_val_26014 = (state_26013[(1)]);
if((state_val_26014 === (7))){
var state_26013__$1 = state_26013;
var statearr_26015_26048 = state_26013__$1;
(statearr_26015_26048[(2)] = null);

(statearr_26015_26048[(1)] = (8));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26014 === (1))){
var state_26013__$1 = state_26013;
var statearr_26016_26049 = state_26013__$1;
(statearr_26016_26049[(2)] = null);

(statearr_26016_26049[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26014 === (4))){
var inst_25977 = (state_26013[(7)]);
var inst_25979 = (inst_25977 < cnt);
var state_26013__$1 = state_26013;
if(cljs.core.truth_(inst_25979)){
var statearr_26017_26050 = state_26013__$1;
(statearr_26017_26050[(1)] = (6));

} else {
var statearr_26018_26051 = state_26013__$1;
(statearr_26018_26051[(1)] = (7));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_26014 === (15))){
var inst_26009 = (state_26013[(2)]);
var state_26013__$1 = state_26013;
var statearr_26019_26052 = state_26013__$1;
(statearr_26019_26052[(2)] = inst_26009);

(statearr_26019_26052[(1)] = (3));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26014 === (13))){
var inst_26002 = cljs.core.async.close_BANG_(out);
var state_26013__$1 = state_26013;
var statearr_26020_26053 = state_26013__$1;
(statearr_26020_26053[(2)] = inst_26002);

(statearr_26020_26053[(1)] = (15));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26014 === (6))){
var state_26013__$1 = state_26013;
var statearr_26021_26054 = state_26013__$1;
(statearr_26021_26054[(2)] = null);

(statearr_26021_26054[(1)] = (11));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26014 === (3))){
var inst_26011 = (state_26013[(2)]);
var state_26013__$1 = state_26013;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26013__$1,inst_26011);
} else {
if((state_val_26014 === (12))){
var inst_25999 = (state_26013[(8)]);
var inst_25999__$1 = (state_26013[(2)]);
var inst_26000 = cljs.core.some(cljs.core.nil_QMARK_,inst_25999__$1);
var state_26013__$1 = (function (){var statearr_26022 = state_26013;
(statearr_26022[(8)] = inst_25999__$1);

return statearr_26022;
})();
if(cljs.core.truth_(inst_26000)){
var statearr_26023_26055 = state_26013__$1;
(statearr_26023_26055[(1)] = (13));

} else {
var statearr_26024_26056 = state_26013__$1;
(statearr_26024_26056[(1)] = (14));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_26014 === (2))){
var inst_25976 = (function (){var G__26025 = dctr;
var G__26026 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26025,G__26026) : cljs.core.reset_BANG_.call(null,G__26025,G__26026));
})();
var inst_25977 = (0);
var state_26013__$1 = (function (){var statearr_26027 = state_26013;
(statearr_26027[(9)] = inst_25976);

(statearr_26027[(7)] = inst_25977);

return statearr_26027;
})();
var statearr_26028_26057 = state_26013__$1;
(statearr_26028_26057[(2)] = null);

(statearr_26028_26057[(1)] = (4));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26014 === (11))){
var inst_25977 = (state_26013[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_26013,(10),Object,null,(9));
var inst_25986 = (function (){var G__26029 = inst_25977;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__26029) : chs__$1.call(null,G__26029));
})();
var inst_25987 = (function (){var G__26030 = inst_25977;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__26030) : done.call(null,G__26030));
})();
var inst_25988 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_25986,inst_25987);
var state_26013__$1 = state_26013;
var statearr_26031_26058 = state_26013__$1;
(statearr_26031_26058[(2)] = inst_25988);


cljs.core.async.impl.ioc_helpers.process_exception(state_26013__$1);

return cljs.core.constant$keyword$61;
} else {
if((state_val_26014 === (9))){
var inst_25977 = (state_26013[(7)]);
var inst_25990 = (state_26013[(2)]);
var inst_25991 = (inst_25977 + (1));
var inst_25977__$1 = inst_25991;
var state_26013__$1 = (function (){var statearr_26032 = state_26013;
(statearr_26032[(10)] = inst_25990);

(statearr_26032[(7)] = inst_25977__$1);

return statearr_26032;
})();
var statearr_26033_26059 = state_26013__$1;
(statearr_26033_26059[(2)] = null);

(statearr_26033_26059[(1)] = (4));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26014 === (5))){
var inst_25997 = (state_26013[(2)]);
var state_26013__$1 = (function (){var statearr_26034 = state_26013;
(statearr_26034[(11)] = inst_25997);

return statearr_26034;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26013__$1,(12),dchan);
} else {
if((state_val_26014 === (14))){
var inst_25999 = (state_26013[(8)]);
var inst_26004 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_25999);
var state_26013__$1 = state_26013;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26013__$1,(16),out,inst_26004);
} else {
if((state_val_26014 === (16))){
var inst_26006 = (state_26013[(2)]);
var state_26013__$1 = (function (){var statearr_26035 = state_26013;
(statearr_26035[(12)] = inst_26006);

return statearr_26035;
})();
var statearr_26036_26060 = state_26013__$1;
(statearr_26036_26060[(2)] = null);

(statearr_26036_26060[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26014 === (10))){
var inst_25981 = (state_26013[(2)]);
var inst_25982 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_26013__$1 = (function (){var statearr_26037 = state_26013;
(statearr_26037[(13)] = inst_25981);

return statearr_26037;
})();
var statearr_26038_26061 = state_26013__$1;
(statearr_26038_26061[(2)] = inst_25982);


cljs.core.async.impl.ioc_helpers.process_exception(state_26013__$1);

return cljs.core.constant$keyword$61;
} else {
if((state_val_26014 === (8))){
var inst_25995 = (state_26013[(2)]);
var state_26013__$1 = state_26013;
var statearr_26039_26062 = state_26013__$1;
(statearr_26039_26062[(2)] = inst_25995);

(statearr_26039_26062[(1)] = (5));


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
});})(c__11833__auto___26047,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__11753__auto__,c__11833__auto___26047,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11754__auto__ = null;
var state_machine__11754__auto____0 = (function (){
var statearr_26043 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26043[(0)] = state_machine__11754__auto__);

(statearr_26043[(1)] = (1));

return statearr_26043;
});
var state_machine__11754__auto____1 = (function (state_26013){
while(true){
var ret_value__11755__auto__ = (function (){try{while(true){
var result__11756__auto__ = switch__11753__auto__(state_26013);
if(cljs.core.keyword_identical_QMARK_(result__11756__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11756__auto__;
}
break;
}
}catch (e26044){if((e26044 instanceof Object)){
var ex__11757__auto__ = e26044;
var statearr_26045_26063 = state_26013;
(statearr_26045_26063[(5)] = ex__11757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26013);

return cljs.core.constant$keyword$61;
} else {
throw e26044;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11755__auto__,cljs.core.constant$keyword$61)){
var G__26064 = state_26013;
state_26013 = G__26064;
continue;
} else {
return ret_value__11755__auto__;
}
break;
}
});
state_machine__11754__auto__ = function(state_26013){
switch(arguments.length){
case 0:
return state_machine__11754__auto____0.call(this);
case 1:
return state_machine__11754__auto____1.call(this,state_26013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11754__auto____0;
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11754__auto____1;
return state_machine__11754__auto__;
})()
;})(switch__11753__auto__,c__11833__auto___26047,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11835__auto__ = (function (){var statearr_26046 = (function (){return (f__11834__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11834__auto__.cljs$core$IFn$_invoke$arity$0() : f__11834__auto__.call(null));
})();
(statearr_26046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11833__auto___26047);

return statearr_26046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11835__auto__);
});})(c__11833__auto___26047,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__11833__auto___26174 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11833__auto___26174,out){
return (function (){
var f__11834__auto__ = (function (){var switch__11753__auto__ = ((function (c__11833__auto___26174,out){
return (function (state_26150){
var state_val_26151 = (state_26150[(1)]);
if((state_val_26151 === (7))){
var inst_26129 = (state_26150[(7)]);
var inst_26130 = (state_26150[(8)]);
var inst_26129__$1 = (state_26150[(2)]);
var inst_26130__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26129__$1,(0),null);
var inst_26131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26129__$1,(1),null);
var inst_26132 = (inst_26130__$1 == null);
var state_26150__$1 = (function (){var statearr_26152 = state_26150;
(statearr_26152[(7)] = inst_26129__$1);

(statearr_26152[(9)] = inst_26131);

(statearr_26152[(8)] = inst_26130__$1);

return statearr_26152;
})();
if(cljs.core.truth_(inst_26132)){
var statearr_26153_26175 = state_26150__$1;
(statearr_26153_26175[(1)] = (8));

} else {
var statearr_26154_26176 = state_26150__$1;
(statearr_26154_26176[(1)] = (9));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_26151 === (1))){
var inst_26121 = cljs.core.vec(chs);
var inst_26122 = inst_26121;
var state_26150__$1 = (function (){var statearr_26155 = state_26150;
(statearr_26155[(10)] = inst_26122);

return statearr_26155;
})();
var statearr_26156_26177 = state_26150__$1;
(statearr_26156_26177[(2)] = null);

(statearr_26156_26177[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26151 === (4))){
var inst_26122 = (state_26150[(10)]);
var state_26150__$1 = state_26150;
return cljs.core.async.ioc_alts_BANG_(state_26150__$1,(7),inst_26122);
} else {
if((state_val_26151 === (6))){
var inst_26146 = (state_26150[(2)]);
var state_26150__$1 = state_26150;
var statearr_26157_26178 = state_26150__$1;
(statearr_26157_26178[(2)] = inst_26146);

(statearr_26157_26178[(1)] = (3));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26151 === (3))){
var inst_26148 = (state_26150[(2)]);
var state_26150__$1 = state_26150;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26150__$1,inst_26148);
} else {
if((state_val_26151 === (2))){
var inst_26122 = (state_26150[(10)]);
var inst_26124 = cljs.core.count(inst_26122);
var inst_26125 = (inst_26124 > (0));
var state_26150__$1 = state_26150;
if(cljs.core.truth_(inst_26125)){
var statearr_26159_26179 = state_26150__$1;
(statearr_26159_26179[(1)] = (4));

} else {
var statearr_26160_26180 = state_26150__$1;
(statearr_26160_26180[(1)] = (5));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_26151 === (11))){
var inst_26122 = (state_26150[(10)]);
var inst_26139 = (state_26150[(2)]);
var tmp26158 = inst_26122;
var inst_26122__$1 = tmp26158;
var state_26150__$1 = (function (){var statearr_26161 = state_26150;
(statearr_26161[(10)] = inst_26122__$1);

(statearr_26161[(11)] = inst_26139);

return statearr_26161;
})();
var statearr_26162_26181 = state_26150__$1;
(statearr_26162_26181[(2)] = null);

(statearr_26162_26181[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26151 === (9))){
var inst_26130 = (state_26150[(8)]);
var state_26150__$1 = state_26150;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26150__$1,(11),out,inst_26130);
} else {
if((state_val_26151 === (5))){
var inst_26144 = cljs.core.async.close_BANG_(out);
var state_26150__$1 = state_26150;
var statearr_26163_26182 = state_26150__$1;
(statearr_26163_26182[(2)] = inst_26144);

(statearr_26163_26182[(1)] = (6));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26151 === (10))){
var inst_26142 = (state_26150[(2)]);
var state_26150__$1 = state_26150;
var statearr_26164_26183 = state_26150__$1;
(statearr_26164_26183[(2)] = inst_26142);

(statearr_26164_26183[(1)] = (6));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26151 === (8))){
var inst_26122 = (state_26150[(10)]);
var inst_26129 = (state_26150[(7)]);
var inst_26131 = (state_26150[(9)]);
var inst_26130 = (state_26150[(8)]);
var inst_26134 = (function (){var c = inst_26131;
var v = inst_26130;
var vec__26127 = inst_26129;
var cs = inst_26122;
return ((function (c,v,vec__26127,cs,inst_26122,inst_26129,inst_26131,inst_26130,state_val_26151,c__11833__auto___26174,out){
return (function (p1__26065_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26065_SHARP_);
});
;})(c,v,vec__26127,cs,inst_26122,inst_26129,inst_26131,inst_26130,state_val_26151,c__11833__auto___26174,out))
})();
var inst_26135 = cljs.core.filterv(inst_26134,inst_26122);
var inst_26122__$1 = inst_26135;
var state_26150__$1 = (function (){var statearr_26165 = state_26150;
(statearr_26165[(10)] = inst_26122__$1);

return statearr_26165;
})();
var statearr_26166_26184 = state_26150__$1;
(statearr_26166_26184[(2)] = null);

(statearr_26166_26184[(1)] = (2));


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
});})(c__11833__auto___26174,out))
;
return ((function (switch__11753__auto__,c__11833__auto___26174,out){
return (function() {
var state_machine__11754__auto__ = null;
var state_machine__11754__auto____0 = (function (){
var statearr_26170 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26170[(0)] = state_machine__11754__auto__);

(statearr_26170[(1)] = (1));

return statearr_26170;
});
var state_machine__11754__auto____1 = (function (state_26150){
while(true){
var ret_value__11755__auto__ = (function (){try{while(true){
var result__11756__auto__ = switch__11753__auto__(state_26150);
if(cljs.core.keyword_identical_QMARK_(result__11756__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11756__auto__;
}
break;
}
}catch (e26171){if((e26171 instanceof Object)){
var ex__11757__auto__ = e26171;
var statearr_26172_26185 = state_26150;
(statearr_26172_26185[(5)] = ex__11757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26150);

return cljs.core.constant$keyword$61;
} else {
throw e26171;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11755__auto__,cljs.core.constant$keyword$61)){
var G__26186 = state_26150;
state_26150 = G__26186;
continue;
} else {
return ret_value__11755__auto__;
}
break;
}
});
state_machine__11754__auto__ = function(state_26150){
switch(arguments.length){
case 0:
return state_machine__11754__auto____0.call(this);
case 1:
return state_machine__11754__auto____1.call(this,state_26150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11754__auto____0;
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11754__auto____1;
return state_machine__11754__auto__;
})()
;})(switch__11753__auto__,c__11833__auto___26174,out))
})();
var state__11835__auto__ = (function (){var statearr_26173 = (function (){return (f__11834__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11834__auto__.cljs$core$IFn$_invoke$arity$0() : f__11834__auto__.call(null));
})();
(statearr_26173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11833__auto___26174);

return statearr_26173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11835__auto__);
});})(c__11833__auto___26174,out))
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
var c__11833__auto___26282 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11833__auto___26282,out){
return (function (){
var f__11834__auto__ = (function (){var switch__11753__auto__ = ((function (c__11833__auto___26282,out){
return (function (state_26259){
var state_val_26260 = (state_26259[(1)]);
if((state_val_26260 === (7))){
var inst_26241 = (state_26259[(7)]);
var inst_26241__$1 = (state_26259[(2)]);
var inst_26242 = (inst_26241__$1 == null);
var inst_26243 = cljs.core.not(inst_26242);
var state_26259__$1 = (function (){var statearr_26261 = state_26259;
(statearr_26261[(7)] = inst_26241__$1);

return statearr_26261;
})();
if(inst_26243){
var statearr_26262_26283 = state_26259__$1;
(statearr_26262_26283[(1)] = (8));

} else {
var statearr_26263_26284 = state_26259__$1;
(statearr_26263_26284[(1)] = (9));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_26260 === (1))){
var inst_26236 = (0);
var state_26259__$1 = (function (){var statearr_26264 = state_26259;
(statearr_26264[(8)] = inst_26236);

return statearr_26264;
})();
var statearr_26265_26285 = state_26259__$1;
(statearr_26265_26285[(2)] = null);

(statearr_26265_26285[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26260 === (4))){
var state_26259__$1 = state_26259;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26259__$1,(7),ch);
} else {
if((state_val_26260 === (6))){
var inst_26254 = (state_26259[(2)]);
var state_26259__$1 = state_26259;
var statearr_26266_26286 = state_26259__$1;
(statearr_26266_26286[(2)] = inst_26254);

(statearr_26266_26286[(1)] = (3));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26260 === (3))){
var inst_26256 = (state_26259[(2)]);
var inst_26257 = cljs.core.async.close_BANG_(out);
var state_26259__$1 = (function (){var statearr_26267 = state_26259;
(statearr_26267[(9)] = inst_26256);

return statearr_26267;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26259__$1,inst_26257);
} else {
if((state_val_26260 === (2))){
var inst_26236 = (state_26259[(8)]);
var inst_26238 = (inst_26236 < n);
var state_26259__$1 = state_26259;
if(cljs.core.truth_(inst_26238)){
var statearr_26268_26287 = state_26259__$1;
(statearr_26268_26287[(1)] = (4));

} else {
var statearr_26269_26288 = state_26259__$1;
(statearr_26269_26288[(1)] = (5));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_26260 === (11))){
var inst_26236 = (state_26259[(8)]);
var inst_26246 = (state_26259[(2)]);
var inst_26247 = (inst_26236 + (1));
var inst_26236__$1 = inst_26247;
var state_26259__$1 = (function (){var statearr_26270 = state_26259;
(statearr_26270[(8)] = inst_26236__$1);

(statearr_26270[(10)] = inst_26246);

return statearr_26270;
})();
var statearr_26271_26289 = state_26259__$1;
(statearr_26271_26289[(2)] = null);

(statearr_26271_26289[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26260 === (9))){
var state_26259__$1 = state_26259;
var statearr_26272_26290 = state_26259__$1;
(statearr_26272_26290[(2)] = null);

(statearr_26272_26290[(1)] = (10));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26260 === (5))){
var state_26259__$1 = state_26259;
var statearr_26273_26291 = state_26259__$1;
(statearr_26273_26291[(2)] = null);

(statearr_26273_26291[(1)] = (6));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26260 === (10))){
var inst_26251 = (state_26259[(2)]);
var state_26259__$1 = state_26259;
var statearr_26274_26292 = state_26259__$1;
(statearr_26274_26292[(2)] = inst_26251);

(statearr_26274_26292[(1)] = (6));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26260 === (8))){
var inst_26241 = (state_26259[(7)]);
var state_26259__$1 = state_26259;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26259__$1,(11),out,inst_26241);
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
});})(c__11833__auto___26282,out))
;
return ((function (switch__11753__auto__,c__11833__auto___26282,out){
return (function() {
var state_machine__11754__auto__ = null;
var state_machine__11754__auto____0 = (function (){
var statearr_26278 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26278[(0)] = state_machine__11754__auto__);

(statearr_26278[(1)] = (1));

return statearr_26278;
});
var state_machine__11754__auto____1 = (function (state_26259){
while(true){
var ret_value__11755__auto__ = (function (){try{while(true){
var result__11756__auto__ = switch__11753__auto__(state_26259);
if(cljs.core.keyword_identical_QMARK_(result__11756__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11756__auto__;
}
break;
}
}catch (e26279){if((e26279 instanceof Object)){
var ex__11757__auto__ = e26279;
var statearr_26280_26293 = state_26259;
(statearr_26280_26293[(5)] = ex__11757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26259);

return cljs.core.constant$keyword$61;
} else {
throw e26279;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11755__auto__,cljs.core.constant$keyword$61)){
var G__26294 = state_26259;
state_26259 = G__26294;
continue;
} else {
return ret_value__11755__auto__;
}
break;
}
});
state_machine__11754__auto__ = function(state_26259){
switch(arguments.length){
case 0:
return state_machine__11754__auto____0.call(this);
case 1:
return state_machine__11754__auto____1.call(this,state_26259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11754__auto____0;
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11754__auto____1;
return state_machine__11754__auto__;
})()
;})(switch__11753__auto__,c__11833__auto___26282,out))
})();
var state__11835__auto__ = (function (){var statearr_26281 = (function (){return (f__11834__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11834__auto__.cljs$core$IFn$_invoke$arity$0() : f__11834__auto__.call(null));
})();
(statearr_26281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11833__auto___26282);

return statearr_26281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11835__auto__);
});})(c__11833__auto___26282,out))
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
if(typeof cljs.core.async.t26307 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26307 = (function (ch,f,map_LT_,meta26308){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26308 = meta26308;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26307.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26307.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t26307.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26307.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t26310 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26310 = (function (fn1,_,meta26308,map_LT_,f,ch,meta26311){
this.fn1 = fn1;
this._ = _;
this.meta26308 = meta26308;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26311 = meta26311;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26310.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26310.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t26310.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26295_SHARP_){
var G__26313 = (((p1__26295_SHARP_ == null))?null:(function (){var G__26314 = p1__26295_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26314) : self__.f.call(null,G__26314));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__26313) : f1.call(null,G__26313));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t26310.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26312){
var self__ = this;
var _26312__$1 = this;
return self__.meta26311;
});})(___$1))
;

cljs.core.async.t26310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26312,meta26311__$1){
var self__ = this;
var _26312__$1 = this;
return (new cljs.core.async.t26310(self__.fn1,self__._,self__.meta26308,self__.map_LT_,self__.f,self__.ch,meta26311__$1));
});})(___$1))
;

cljs.core.async.t26310.cljs$lang$type = true;

cljs.core.async.t26310.cljs$lang$ctorStr = "cljs.core.async/t26310";

cljs.core.async.t26310.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26310");
});})(___$1))
;

cljs.core.async.__GT_t26310 = ((function (___$1){
return (function __GT_t26310(fn1__$1,___$2,meta26308__$1,map_LT___$1,f__$1,ch__$1,meta26311){
return (new cljs.core.async.t26310(fn1__$1,___$2,meta26308__$1,map_LT___$1,f__$1,ch__$1,meta26311));
});})(___$1))
;

}

return (new cljs.core.async.t26310(fn1,___$1,self__.meta26308,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,737,cljs.core.constant$keyword$10,10,cljs.core.constant$keyword$11,731,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3618__auto__ = ret;
if(cljs.core.truth_(and__3618__auto__)){
return !(((function (){var G__26315 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26315) : cljs.core.deref.call(null,G__26315));
})() == null));
} else {
return and__3618__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__26316 = (function (){var G__26317 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26317) : cljs.core.deref.call(null,G__26317));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26316) : self__.f.call(null,G__26316));
})());
} else {
return ret;
}
});

cljs.core.async.t26307.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26307.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t26307.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t26307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26309){
var self__ = this;
var _26309__$1 = this;
return self__.meta26308;
});

cljs.core.async.t26307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26309,meta26308__$1){
var self__ = this;
var _26309__$1 = this;
return (new cljs.core.async.t26307(self__.ch,self__.f,self__.map_LT_,meta26308__$1));
});

cljs.core.async.t26307.cljs$lang$type = true;

cljs.core.async.t26307.cljs$lang$ctorStr = "cljs.core.async/t26307";

cljs.core.async.t26307.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26307");
});

cljs.core.async.__GT_t26307 = (function __GT_t26307(ch__$1,f__$1,map_LT___$1,meta26308){
return (new cljs.core.async.t26307(ch__$1,f__$1,map_LT___$1,meta26308));
});

}

return (new cljs.core.async.t26307(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,743,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,722,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t26322 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26322 = (function (ch,f,map_GT_,meta26323){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta26323 = meta26323;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26322.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26322.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__26325 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26325) : self__.f.call(null,G__26325));
})(),fn1);
});

cljs.core.async.t26322.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26322.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t26322.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26322.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t26322.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26324){
var self__ = this;
var _26324__$1 = this;
return self__.meta26323;
});

cljs.core.async.t26322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26324,meta26323__$1){
var self__ = this;
var _26324__$1 = this;
return (new cljs.core.async.t26322(self__.ch,self__.f,self__.map_GT_,meta26323__$1));
});

cljs.core.async.t26322.cljs$lang$type = true;

cljs.core.async.t26322.cljs$lang$ctorStr = "cljs.core.async/t26322";

cljs.core.async.t26322.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26322");
});

cljs.core.async.__GT_t26322 = (function __GT_t26322(ch__$1,f__$1,map_GT___$1,meta26323){
return (new cljs.core.async.t26322(ch__$1,f__$1,map_GT___$1,meta26323));
});

}

return (new cljs.core.async.t26322(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,34,cljs.core.constant$keyword$9,757,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,748,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t26330 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26330 = (function (ch,p,filter_GT_,meta26331){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta26331 = meta26331;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26330.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26330.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__26333 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__26333) : self__.p.call(null,G__26333));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t26330.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26330.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t26330.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26330.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t26330.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t26330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26332){
var self__ = this;
var _26332__$1 = this;
return self__.meta26331;
});

cljs.core.async.t26330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26332,meta26331__$1){
var self__ = this;
var _26332__$1 = this;
return (new cljs.core.async.t26330(self__.ch,self__.p,self__.filter_GT_,meta26331__$1));
});

cljs.core.async.t26330.cljs$lang$type = true;

cljs.core.async.t26330.cljs$lang$ctorStr = "cljs.core.async/t26330";

cljs.core.async.t26330.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t26330");
});

cljs.core.async.__GT_t26330 = (function __GT_t26330(ch__$1,p__$1,filter_GT___$1,meta26331){
return (new cljs.core.async.t26330(ch__$1,p__$1,filter_GT___$1,meta26331));
});

}

return (new cljs.core.async.t26330(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,774,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,762,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
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
var c__11833__auto___26421 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11833__auto___26421,out){
return (function (){
var f__11834__auto__ = (function (){var switch__11753__auto__ = ((function (c__11833__auto___26421,out){
return (function (state_26399){
var state_val_26400 = (state_26399[(1)]);
if((state_val_26400 === (7))){
var inst_26395 = (state_26399[(2)]);
var state_26399__$1 = state_26399;
var statearr_26401_26422 = state_26399__$1;
(statearr_26401_26422[(2)] = inst_26395);

(statearr_26401_26422[(1)] = (3));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26400 === (1))){
var state_26399__$1 = state_26399;
var statearr_26402_26423 = state_26399__$1;
(statearr_26402_26423[(2)] = null);

(statearr_26402_26423[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26400 === (4))){
var inst_26381 = (state_26399[(7)]);
var inst_26381__$1 = (state_26399[(2)]);
var inst_26382 = (inst_26381__$1 == null);
var state_26399__$1 = (function (){var statearr_26403 = state_26399;
(statearr_26403[(7)] = inst_26381__$1);

return statearr_26403;
})();
if(cljs.core.truth_(inst_26382)){
var statearr_26404_26424 = state_26399__$1;
(statearr_26404_26424[(1)] = (5));

} else {
var statearr_26405_26425 = state_26399__$1;
(statearr_26405_26425[(1)] = (6));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_26400 === (6))){
var inst_26381 = (state_26399[(7)]);
var inst_26386 = (function (){var G__26406 = inst_26381;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__26406) : p.call(null,G__26406));
})();
var state_26399__$1 = state_26399;
if(cljs.core.truth_(inst_26386)){
var statearr_26407_26426 = state_26399__$1;
(statearr_26407_26426[(1)] = (8));

} else {
var statearr_26408_26427 = state_26399__$1;
(statearr_26408_26427[(1)] = (9));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_26400 === (3))){
var inst_26397 = (state_26399[(2)]);
var state_26399__$1 = state_26399;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26399__$1,inst_26397);
} else {
if((state_val_26400 === (2))){
var state_26399__$1 = state_26399;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26399__$1,(4),ch);
} else {
if((state_val_26400 === (11))){
var inst_26389 = (state_26399[(2)]);
var state_26399__$1 = state_26399;
var statearr_26409_26428 = state_26399__$1;
(statearr_26409_26428[(2)] = inst_26389);

(statearr_26409_26428[(1)] = (10));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26400 === (9))){
var state_26399__$1 = state_26399;
var statearr_26410_26429 = state_26399__$1;
(statearr_26410_26429[(2)] = null);

(statearr_26410_26429[(1)] = (10));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26400 === (5))){
var inst_26384 = cljs.core.async.close_BANG_(out);
var state_26399__$1 = state_26399;
var statearr_26411_26430 = state_26399__$1;
(statearr_26411_26430[(2)] = inst_26384);

(statearr_26411_26430[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26400 === (10))){
var inst_26392 = (state_26399[(2)]);
var state_26399__$1 = (function (){var statearr_26412 = state_26399;
(statearr_26412[(8)] = inst_26392);

return statearr_26412;
})();
var statearr_26413_26431 = state_26399__$1;
(statearr_26413_26431[(2)] = null);

(statearr_26413_26431[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26400 === (8))){
var inst_26381 = (state_26399[(7)]);
var state_26399__$1 = state_26399;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26399__$1,(11),out,inst_26381);
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
});})(c__11833__auto___26421,out))
;
return ((function (switch__11753__auto__,c__11833__auto___26421,out){
return (function() {
var state_machine__11754__auto__ = null;
var state_machine__11754__auto____0 = (function (){
var statearr_26417 = [null,null,null,null,null,null,null,null,null];
(statearr_26417[(0)] = state_machine__11754__auto__);

(statearr_26417[(1)] = (1));

return statearr_26417;
});
var state_machine__11754__auto____1 = (function (state_26399){
while(true){
var ret_value__11755__auto__ = (function (){try{while(true){
var result__11756__auto__ = switch__11753__auto__(state_26399);
if(cljs.core.keyword_identical_QMARK_(result__11756__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11756__auto__;
}
break;
}
}catch (e26418){if((e26418 instanceof Object)){
var ex__11757__auto__ = e26418;
var statearr_26419_26432 = state_26399;
(statearr_26419_26432[(5)] = ex__11757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26399);

return cljs.core.constant$keyword$61;
} else {
throw e26418;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11755__auto__,cljs.core.constant$keyword$61)){
var G__26433 = state_26399;
state_26399 = G__26433;
continue;
} else {
return ret_value__11755__auto__;
}
break;
}
});
state_machine__11754__auto__ = function(state_26399){
switch(arguments.length){
case 0:
return state_machine__11754__auto____0.call(this);
case 1:
return state_machine__11754__auto____1.call(this,state_26399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11754__auto____0;
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11754__auto____1;
return state_machine__11754__auto__;
})()
;})(switch__11753__auto__,c__11833__auto___26421,out))
})();
var state__11835__auto__ = (function (){var statearr_26420 = (function (){return (f__11834__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11834__auto__.cljs$core$IFn$_invoke$arity$0() : f__11834__auto__.call(null));
})();
(statearr_26420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11833__auto___26421);

return statearr_26420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11835__auto__);
});})(c__11833__auto___26421,out))
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
var c__11833__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11833__auto__){
return (function (){
var f__11834__auto__ = (function (){var switch__11753__auto__ = ((function (c__11833__auto__){
return (function (state_26603){
var state_val_26604 = (state_26603[(1)]);
if((state_val_26604 === (7))){
var inst_26599 = (state_26603[(2)]);
var state_26603__$1 = state_26603;
var statearr_26605_26647 = state_26603__$1;
(statearr_26605_26647[(2)] = inst_26599);

(statearr_26605_26647[(1)] = (3));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26604 === (20))){
var inst_26569 = (state_26603[(7)]);
var inst_26580 = (state_26603[(2)]);
var inst_26581 = cljs.core.next(inst_26569);
var inst_26555 = inst_26581;
var inst_26556 = null;
var inst_26557 = (0);
var inst_26558 = (0);
var state_26603__$1 = (function (){var statearr_26606 = state_26603;
(statearr_26606[(8)] = inst_26580);

(statearr_26606[(9)] = inst_26556);

(statearr_26606[(10)] = inst_26558);

(statearr_26606[(11)] = inst_26555);

(statearr_26606[(12)] = inst_26557);

return statearr_26606;
})();
var statearr_26607_26648 = state_26603__$1;
(statearr_26607_26648[(2)] = null);

(statearr_26607_26648[(1)] = (8));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26604 === (1))){
var state_26603__$1 = state_26603;
var statearr_26608_26649 = state_26603__$1;
(statearr_26608_26649[(2)] = null);

(statearr_26608_26649[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26604 === (4))){
var inst_26544 = (state_26603[(13)]);
var inst_26544__$1 = (state_26603[(2)]);
var inst_26545 = (inst_26544__$1 == null);
var state_26603__$1 = (function (){var statearr_26609 = state_26603;
(statearr_26609[(13)] = inst_26544__$1);

return statearr_26609;
})();
if(cljs.core.truth_(inst_26545)){
var statearr_26610_26650 = state_26603__$1;
(statearr_26610_26650[(1)] = (5));

} else {
var statearr_26611_26651 = state_26603__$1;
(statearr_26611_26651[(1)] = (6));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_26604 === (15))){
var state_26603__$1 = state_26603;
var statearr_26615_26652 = state_26603__$1;
(statearr_26615_26652[(2)] = null);

(statearr_26615_26652[(1)] = (16));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26604 === (21))){
var state_26603__$1 = state_26603;
var statearr_26616_26653 = state_26603__$1;
(statearr_26616_26653[(2)] = null);

(statearr_26616_26653[(1)] = (23));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26604 === (13))){
var inst_26556 = (state_26603[(9)]);
var inst_26558 = (state_26603[(10)]);
var inst_26555 = (state_26603[(11)]);
var inst_26557 = (state_26603[(12)]);
var inst_26565 = (state_26603[(2)]);
var inst_26566 = (inst_26558 + (1));
var tmp26612 = inst_26556;
var tmp26613 = inst_26555;
var tmp26614 = inst_26557;
var inst_26555__$1 = tmp26613;
var inst_26556__$1 = tmp26612;
var inst_26557__$1 = tmp26614;
var inst_26558__$1 = inst_26566;
var state_26603__$1 = (function (){var statearr_26617 = state_26603;
(statearr_26617[(9)] = inst_26556__$1);

(statearr_26617[(14)] = inst_26565);

(statearr_26617[(10)] = inst_26558__$1);

(statearr_26617[(11)] = inst_26555__$1);

(statearr_26617[(12)] = inst_26557__$1);

return statearr_26617;
})();
var statearr_26618_26654 = state_26603__$1;
(statearr_26618_26654[(2)] = null);

(statearr_26618_26654[(1)] = (8));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26604 === (22))){
var state_26603__$1 = state_26603;
var statearr_26619_26655 = state_26603__$1;
(statearr_26619_26655[(2)] = null);

(statearr_26619_26655[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26604 === (6))){
var inst_26544 = (state_26603[(13)]);
var inst_26553 = (function (){var G__26620 = inst_26544;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26620) : f.call(null,G__26620));
})();
var inst_26554 = cljs.core.seq(inst_26553);
var inst_26555 = inst_26554;
var inst_26556 = null;
var inst_26557 = (0);
var inst_26558 = (0);
var state_26603__$1 = (function (){var statearr_26621 = state_26603;
(statearr_26621[(9)] = inst_26556);

(statearr_26621[(10)] = inst_26558);

(statearr_26621[(11)] = inst_26555);

(statearr_26621[(12)] = inst_26557);

return statearr_26621;
})();
var statearr_26622_26656 = state_26603__$1;
(statearr_26622_26656[(2)] = null);

(statearr_26622_26656[(1)] = (8));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26604 === (17))){
var inst_26569 = (state_26603[(7)]);
var inst_26573 = cljs.core.chunk_first(inst_26569);
var inst_26574 = cljs.core.chunk_rest(inst_26569);
var inst_26575 = cljs.core.count(inst_26573);
var inst_26555 = inst_26574;
var inst_26556 = inst_26573;
var inst_26557 = inst_26575;
var inst_26558 = (0);
var state_26603__$1 = (function (){var statearr_26623 = state_26603;
(statearr_26623[(9)] = inst_26556);

(statearr_26623[(10)] = inst_26558);

(statearr_26623[(11)] = inst_26555);

(statearr_26623[(12)] = inst_26557);

return statearr_26623;
})();
var statearr_26624_26657 = state_26603__$1;
(statearr_26624_26657[(2)] = null);

(statearr_26624_26657[(1)] = (8));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26604 === (3))){
var inst_26601 = (state_26603[(2)]);
var state_26603__$1 = state_26603;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26603__$1,inst_26601);
} else {
if((state_val_26604 === (12))){
var inst_26589 = (state_26603[(2)]);
var state_26603__$1 = state_26603;
var statearr_26625_26658 = state_26603__$1;
(statearr_26625_26658[(2)] = inst_26589);

(statearr_26625_26658[(1)] = (9));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26604 === (2))){
var state_26603__$1 = state_26603;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26603__$1,(4),in$);
} else {
if((state_val_26604 === (23))){
var inst_26597 = (state_26603[(2)]);
var state_26603__$1 = state_26603;
var statearr_26626_26659 = state_26603__$1;
(statearr_26626_26659[(2)] = inst_26597);

(statearr_26626_26659[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26604 === (19))){
var inst_26584 = (state_26603[(2)]);
var state_26603__$1 = state_26603;
var statearr_26627_26660 = state_26603__$1;
(statearr_26627_26660[(2)] = inst_26584);

(statearr_26627_26660[(1)] = (16));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26604 === (11))){
var inst_26569 = (state_26603[(7)]);
var inst_26555 = (state_26603[(11)]);
var inst_26569__$1 = cljs.core.seq(inst_26555);
var state_26603__$1 = (function (){var statearr_26628 = state_26603;
(statearr_26628[(7)] = inst_26569__$1);

return statearr_26628;
})();
if(inst_26569__$1){
var statearr_26629_26661 = state_26603__$1;
(statearr_26629_26661[(1)] = (14));

} else {
var statearr_26630_26662 = state_26603__$1;
(statearr_26630_26662[(1)] = (15));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_26604 === (9))){
var inst_26591 = (state_26603[(2)]);
var inst_26592 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_26603__$1 = (function (){var statearr_26631 = state_26603;
(statearr_26631[(15)] = inst_26591);

return statearr_26631;
})();
if(cljs.core.truth_(inst_26592)){
var statearr_26632_26663 = state_26603__$1;
(statearr_26632_26663[(1)] = (21));

} else {
var statearr_26633_26664 = state_26603__$1;
(statearr_26633_26664[(1)] = (22));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_26604 === (5))){
var inst_26547 = cljs.core.async.close_BANG_(out);
var state_26603__$1 = state_26603;
var statearr_26634_26665 = state_26603__$1;
(statearr_26634_26665[(2)] = inst_26547);

(statearr_26634_26665[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26604 === (14))){
var inst_26569 = (state_26603[(7)]);
var inst_26571 = cljs.core.chunked_seq_QMARK_(inst_26569);
var state_26603__$1 = state_26603;
if(inst_26571){
var statearr_26635_26666 = state_26603__$1;
(statearr_26635_26666[(1)] = (17));

} else {
var statearr_26636_26667 = state_26603__$1;
(statearr_26636_26667[(1)] = (18));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_26604 === (16))){
var inst_26587 = (state_26603[(2)]);
var state_26603__$1 = state_26603;
var statearr_26637_26668 = state_26603__$1;
(statearr_26637_26668[(2)] = inst_26587);

(statearr_26637_26668[(1)] = (12));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26604 === (10))){
var inst_26556 = (state_26603[(9)]);
var inst_26558 = (state_26603[(10)]);
var inst_26563 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26556,inst_26558);
var state_26603__$1 = state_26603;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26603__$1,(13),out,inst_26563);
} else {
if((state_val_26604 === (18))){
var inst_26569 = (state_26603[(7)]);
var inst_26578 = cljs.core.first(inst_26569);
var state_26603__$1 = state_26603;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26603__$1,(20),out,inst_26578);
} else {
if((state_val_26604 === (8))){
var inst_26558 = (state_26603[(10)]);
var inst_26557 = (state_26603[(12)]);
var inst_26560 = (inst_26558 < inst_26557);
var inst_26561 = inst_26560;
var state_26603__$1 = state_26603;
if(cljs.core.truth_(inst_26561)){
var statearr_26638_26669 = state_26603__$1;
(statearr_26638_26669[(1)] = (10));

} else {
var statearr_26639_26670 = state_26603__$1;
(statearr_26639_26670[(1)] = (11));

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
});})(c__11833__auto__))
;
return ((function (switch__11753__auto__,c__11833__auto__){
return (function() {
var state_machine__11754__auto__ = null;
var state_machine__11754__auto____0 = (function (){
var statearr_26643 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26643[(0)] = state_machine__11754__auto__);

(statearr_26643[(1)] = (1));

return statearr_26643;
});
var state_machine__11754__auto____1 = (function (state_26603){
while(true){
var ret_value__11755__auto__ = (function (){try{while(true){
var result__11756__auto__ = switch__11753__auto__(state_26603);
if(cljs.core.keyword_identical_QMARK_(result__11756__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11756__auto__;
}
break;
}
}catch (e26644){if((e26644 instanceof Object)){
var ex__11757__auto__ = e26644;
var statearr_26645_26671 = state_26603;
(statearr_26645_26671[(5)] = ex__11757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26603);

return cljs.core.constant$keyword$61;
} else {
throw e26644;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11755__auto__,cljs.core.constant$keyword$61)){
var G__26672 = state_26603;
state_26603 = G__26672;
continue;
} else {
return ret_value__11755__auto__;
}
break;
}
});
state_machine__11754__auto__ = function(state_26603){
switch(arguments.length){
case 0:
return state_machine__11754__auto____0.call(this);
case 1:
return state_machine__11754__auto____1.call(this,state_26603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11754__auto____0;
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11754__auto____1;
return state_machine__11754__auto__;
})()
;})(switch__11753__auto__,c__11833__auto__))
})();
var state__11835__auto__ = (function (){var statearr_26646 = (function (){return (f__11834__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11834__auto__.cljs$core$IFn$_invoke$arity$0() : f__11834__auto__.call(null));
})();
(statearr_26646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11833__auto__);

return statearr_26646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11835__auto__);
});})(c__11833__auto__))
);

return c__11833__auto__;
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
var c__11833__auto___26777 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11833__auto___26777,out){
return (function (){
var f__11834__auto__ = (function (){var switch__11753__auto__ = ((function (c__11833__auto___26777,out){
return (function (state_26752){
var state_val_26753 = (state_26752[(1)]);
if((state_val_26753 === (7))){
var inst_26747 = (state_26752[(2)]);
var state_26752__$1 = state_26752;
var statearr_26754_26778 = state_26752__$1;
(statearr_26754_26778[(2)] = inst_26747);

(statearr_26754_26778[(1)] = (3));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26753 === (1))){
var inst_26729 = null;
var state_26752__$1 = (function (){var statearr_26755 = state_26752;
(statearr_26755[(7)] = inst_26729);

return statearr_26755;
})();
var statearr_26756_26779 = state_26752__$1;
(statearr_26756_26779[(2)] = null);

(statearr_26756_26779[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26753 === (4))){
var inst_26732 = (state_26752[(8)]);
var inst_26732__$1 = (state_26752[(2)]);
var inst_26733 = (inst_26732__$1 == null);
var inst_26734 = cljs.core.not(inst_26733);
var state_26752__$1 = (function (){var statearr_26757 = state_26752;
(statearr_26757[(8)] = inst_26732__$1);

return statearr_26757;
})();
if(inst_26734){
var statearr_26758_26780 = state_26752__$1;
(statearr_26758_26780[(1)] = (5));

} else {
var statearr_26759_26781 = state_26752__$1;
(statearr_26759_26781[(1)] = (6));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_26753 === (6))){
var state_26752__$1 = state_26752;
var statearr_26760_26782 = state_26752__$1;
(statearr_26760_26782[(2)] = null);

(statearr_26760_26782[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26753 === (3))){
var inst_26749 = (state_26752[(2)]);
var inst_26750 = cljs.core.async.close_BANG_(out);
var state_26752__$1 = (function (){var statearr_26761 = state_26752;
(statearr_26761[(9)] = inst_26749);

return statearr_26761;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26752__$1,inst_26750);
} else {
if((state_val_26753 === (2))){
var state_26752__$1 = state_26752;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26752__$1,(4),ch);
} else {
if((state_val_26753 === (11))){
var inst_26732 = (state_26752[(8)]);
var inst_26741 = (state_26752[(2)]);
var inst_26729 = inst_26732;
var state_26752__$1 = (function (){var statearr_26762 = state_26752;
(statearr_26762[(10)] = inst_26741);

(statearr_26762[(7)] = inst_26729);

return statearr_26762;
})();
var statearr_26763_26783 = state_26752__$1;
(statearr_26763_26783[(2)] = null);

(statearr_26763_26783[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26753 === (9))){
var inst_26732 = (state_26752[(8)]);
var state_26752__$1 = state_26752;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26752__$1,(11),out,inst_26732);
} else {
if((state_val_26753 === (5))){
var inst_26729 = (state_26752[(7)]);
var inst_26732 = (state_26752[(8)]);
var inst_26736 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26732,inst_26729);
var state_26752__$1 = state_26752;
if(inst_26736){
var statearr_26765_26784 = state_26752__$1;
(statearr_26765_26784[(1)] = (8));

} else {
var statearr_26766_26785 = state_26752__$1;
(statearr_26766_26785[(1)] = (9));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_26753 === (10))){
var inst_26744 = (state_26752[(2)]);
var state_26752__$1 = state_26752;
var statearr_26767_26786 = state_26752__$1;
(statearr_26767_26786[(2)] = inst_26744);

(statearr_26767_26786[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26753 === (8))){
var inst_26729 = (state_26752[(7)]);
var tmp26764 = inst_26729;
var inst_26729__$1 = tmp26764;
var state_26752__$1 = (function (){var statearr_26768 = state_26752;
(statearr_26768[(7)] = inst_26729__$1);

return statearr_26768;
})();
var statearr_26769_26787 = state_26752__$1;
(statearr_26769_26787[(2)] = null);

(statearr_26769_26787[(1)] = (2));


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
});})(c__11833__auto___26777,out))
;
return ((function (switch__11753__auto__,c__11833__auto___26777,out){
return (function() {
var state_machine__11754__auto__ = null;
var state_machine__11754__auto____0 = (function (){
var statearr_26773 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26773[(0)] = state_machine__11754__auto__);

(statearr_26773[(1)] = (1));

return statearr_26773;
});
var state_machine__11754__auto____1 = (function (state_26752){
while(true){
var ret_value__11755__auto__ = (function (){try{while(true){
var result__11756__auto__ = switch__11753__auto__(state_26752);
if(cljs.core.keyword_identical_QMARK_(result__11756__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11756__auto__;
}
break;
}
}catch (e26774){if((e26774 instanceof Object)){
var ex__11757__auto__ = e26774;
var statearr_26775_26788 = state_26752;
(statearr_26775_26788[(5)] = ex__11757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26752);

return cljs.core.constant$keyword$61;
} else {
throw e26774;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11755__auto__,cljs.core.constant$keyword$61)){
var G__26789 = state_26752;
state_26752 = G__26789;
continue;
} else {
return ret_value__11755__auto__;
}
break;
}
});
state_machine__11754__auto__ = function(state_26752){
switch(arguments.length){
case 0:
return state_machine__11754__auto____0.call(this);
case 1:
return state_machine__11754__auto____1.call(this,state_26752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11754__auto____0;
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11754__auto____1;
return state_machine__11754__auto__;
})()
;})(switch__11753__auto__,c__11833__auto___26777,out))
})();
var state__11835__auto__ = (function (){var statearr_26776 = (function (){return (f__11834__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11834__auto__.cljs$core$IFn$_invoke$arity$0() : f__11834__auto__.call(null));
})();
(statearr_26776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11833__auto___26777);

return statearr_26776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11835__auto__);
});})(c__11833__auto___26777,out))
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
var c__11833__auto___26927 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11833__auto___26927,out){
return (function (){
var f__11834__auto__ = (function (){var switch__11753__auto__ = ((function (c__11833__auto___26927,out){
return (function (state_26897){
var state_val_26898 = (state_26897[(1)]);
if((state_val_26898 === (7))){
var inst_26893 = (state_26897[(2)]);
var state_26897__$1 = state_26897;
var statearr_26899_26928 = state_26897__$1;
(statearr_26899_26928[(2)] = inst_26893);

(statearr_26899_26928[(1)] = (3));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26898 === (1))){
var inst_26860 = (new Array(n));
var inst_26861 = inst_26860;
var inst_26862 = (0);
var state_26897__$1 = (function (){var statearr_26900 = state_26897;
(statearr_26900[(7)] = inst_26861);

(statearr_26900[(8)] = inst_26862);

return statearr_26900;
})();
var statearr_26901_26929 = state_26897__$1;
(statearr_26901_26929[(2)] = null);

(statearr_26901_26929[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26898 === (4))){
var inst_26865 = (state_26897[(9)]);
var inst_26865__$1 = (state_26897[(2)]);
var inst_26866 = (inst_26865__$1 == null);
var inst_26867 = cljs.core.not(inst_26866);
var state_26897__$1 = (function (){var statearr_26902 = state_26897;
(statearr_26902[(9)] = inst_26865__$1);

return statearr_26902;
})();
if(inst_26867){
var statearr_26903_26930 = state_26897__$1;
(statearr_26903_26930[(1)] = (5));

} else {
var statearr_26904_26931 = state_26897__$1;
(statearr_26904_26931[(1)] = (6));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_26898 === (15))){
var inst_26887 = (state_26897[(2)]);
var state_26897__$1 = state_26897;
var statearr_26905_26932 = state_26897__$1;
(statearr_26905_26932[(2)] = inst_26887);

(statearr_26905_26932[(1)] = (14));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26898 === (13))){
var state_26897__$1 = state_26897;
var statearr_26906_26933 = state_26897__$1;
(statearr_26906_26933[(2)] = null);

(statearr_26906_26933[(1)] = (14));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26898 === (6))){
var inst_26862 = (state_26897[(8)]);
var inst_26883 = (inst_26862 > (0));
var state_26897__$1 = state_26897;
if(cljs.core.truth_(inst_26883)){
var statearr_26907_26934 = state_26897__$1;
(statearr_26907_26934[(1)] = (12));

} else {
var statearr_26908_26935 = state_26897__$1;
(statearr_26908_26935[(1)] = (13));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_26898 === (3))){
var inst_26895 = (state_26897[(2)]);
var state_26897__$1 = state_26897;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26897__$1,inst_26895);
} else {
if((state_val_26898 === (12))){
var inst_26861 = (state_26897[(7)]);
var inst_26885 = cljs.core.vec(inst_26861);
var state_26897__$1 = state_26897;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26897__$1,(15),out,inst_26885);
} else {
if((state_val_26898 === (2))){
var state_26897__$1 = state_26897;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26897__$1,(4),ch);
} else {
if((state_val_26898 === (11))){
var inst_26877 = (state_26897[(2)]);
var inst_26878 = (new Array(n));
var inst_26861 = inst_26878;
var inst_26862 = (0);
var state_26897__$1 = (function (){var statearr_26909 = state_26897;
(statearr_26909[(7)] = inst_26861);

(statearr_26909[(8)] = inst_26862);

(statearr_26909[(10)] = inst_26877);

return statearr_26909;
})();
var statearr_26910_26936 = state_26897__$1;
(statearr_26910_26936[(2)] = null);

(statearr_26910_26936[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26898 === (9))){
var inst_26861 = (state_26897[(7)]);
var inst_26875 = cljs.core.vec(inst_26861);
var state_26897__$1 = state_26897;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26897__$1,(11),out,inst_26875);
} else {
if((state_val_26898 === (5))){
var inst_26861 = (state_26897[(7)]);
var inst_26862 = (state_26897[(8)]);
var inst_26865 = (state_26897[(9)]);
var inst_26870 = (state_26897[(11)]);
var inst_26869 = (inst_26861[inst_26862] = inst_26865);
var inst_26870__$1 = (inst_26862 + (1));
var inst_26871 = (inst_26870__$1 < n);
var state_26897__$1 = (function (){var statearr_26911 = state_26897;
(statearr_26911[(12)] = inst_26869);

(statearr_26911[(11)] = inst_26870__$1);

return statearr_26911;
})();
if(cljs.core.truth_(inst_26871)){
var statearr_26912_26937 = state_26897__$1;
(statearr_26912_26937[(1)] = (8));

} else {
var statearr_26913_26938 = state_26897__$1;
(statearr_26913_26938[(1)] = (9));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_26898 === (14))){
var inst_26890 = (state_26897[(2)]);
var inst_26891 = cljs.core.async.close_BANG_(out);
var state_26897__$1 = (function (){var statearr_26915 = state_26897;
(statearr_26915[(13)] = inst_26890);

return statearr_26915;
})();
var statearr_26916_26939 = state_26897__$1;
(statearr_26916_26939[(2)] = inst_26891);

(statearr_26916_26939[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26898 === (10))){
var inst_26881 = (state_26897[(2)]);
var state_26897__$1 = state_26897;
var statearr_26917_26940 = state_26897__$1;
(statearr_26917_26940[(2)] = inst_26881);

(statearr_26917_26940[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_26898 === (8))){
var inst_26861 = (state_26897[(7)]);
var inst_26870 = (state_26897[(11)]);
var tmp26914 = inst_26861;
var inst_26861__$1 = tmp26914;
var inst_26862 = inst_26870;
var state_26897__$1 = (function (){var statearr_26918 = state_26897;
(statearr_26918[(7)] = inst_26861__$1);

(statearr_26918[(8)] = inst_26862);

return statearr_26918;
})();
var statearr_26919_26941 = state_26897__$1;
(statearr_26919_26941[(2)] = null);

(statearr_26919_26941[(1)] = (2));


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
});})(c__11833__auto___26927,out))
;
return ((function (switch__11753__auto__,c__11833__auto___26927,out){
return (function() {
var state_machine__11754__auto__ = null;
var state_machine__11754__auto____0 = (function (){
var statearr_26923 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26923[(0)] = state_machine__11754__auto__);

(statearr_26923[(1)] = (1));

return statearr_26923;
});
var state_machine__11754__auto____1 = (function (state_26897){
while(true){
var ret_value__11755__auto__ = (function (){try{while(true){
var result__11756__auto__ = switch__11753__auto__(state_26897);
if(cljs.core.keyword_identical_QMARK_(result__11756__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11756__auto__;
}
break;
}
}catch (e26924){if((e26924 instanceof Object)){
var ex__11757__auto__ = e26924;
var statearr_26925_26942 = state_26897;
(statearr_26925_26942[(5)] = ex__11757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26897);

return cljs.core.constant$keyword$61;
} else {
throw e26924;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11755__auto__,cljs.core.constant$keyword$61)){
var G__26943 = state_26897;
state_26897 = G__26943;
continue;
} else {
return ret_value__11755__auto__;
}
break;
}
});
state_machine__11754__auto__ = function(state_26897){
switch(arguments.length){
case 0:
return state_machine__11754__auto____0.call(this);
case 1:
return state_machine__11754__auto____1.call(this,state_26897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11754__auto____0;
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11754__auto____1;
return state_machine__11754__auto__;
})()
;})(switch__11753__auto__,c__11833__auto___26927,out))
})();
var state__11835__auto__ = (function (){var statearr_26926 = (function (){return (f__11834__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11834__auto__.cljs$core$IFn$_invoke$arity$0() : f__11834__auto__.call(null));
})();
(statearr_26926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11833__auto___26927);

return statearr_26926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11835__auto__);
});})(c__11833__auto___26927,out))
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
var c__11833__auto___27091 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11833__auto___27091,out){
return (function (){
var f__11834__auto__ = (function (){var switch__11753__auto__ = ((function (c__11833__auto___27091,out){
return (function (state_27060){
var state_val_27061 = (state_27060[(1)]);
if((state_val_27061 === (7))){
var inst_27056 = (state_27060[(2)]);
var state_27060__$1 = state_27060;
var statearr_27062_27092 = state_27060__$1;
(statearr_27062_27092[(2)] = inst_27056);

(statearr_27062_27092[(1)] = (3));


return cljs.core.constant$keyword$61;
} else {
if((state_val_27061 === (1))){
var inst_27019 = [];
var inst_27020 = inst_27019;
var inst_27021 = cljs.core.constant$keyword$76;
var state_27060__$1 = (function (){var statearr_27063 = state_27060;
(statearr_27063[(7)] = inst_27021);

(statearr_27063[(8)] = inst_27020);

return statearr_27063;
})();
var statearr_27064_27093 = state_27060__$1;
(statearr_27064_27093[(2)] = null);

(statearr_27064_27093[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_27061 === (4))){
var inst_27024 = (state_27060[(9)]);
var inst_27024__$1 = (state_27060[(2)]);
var inst_27025 = (inst_27024__$1 == null);
var inst_27026 = cljs.core.not(inst_27025);
var state_27060__$1 = (function (){var statearr_27065 = state_27060;
(statearr_27065[(9)] = inst_27024__$1);

return statearr_27065;
})();
if(inst_27026){
var statearr_27066_27094 = state_27060__$1;
(statearr_27066_27094[(1)] = (5));

} else {
var statearr_27067_27095 = state_27060__$1;
(statearr_27067_27095[(1)] = (6));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_27061 === (15))){
var inst_27050 = (state_27060[(2)]);
var state_27060__$1 = state_27060;
var statearr_27068_27096 = state_27060__$1;
(statearr_27068_27096[(2)] = inst_27050);

(statearr_27068_27096[(1)] = (14));


return cljs.core.constant$keyword$61;
} else {
if((state_val_27061 === (13))){
var state_27060__$1 = state_27060;
var statearr_27069_27097 = state_27060__$1;
(statearr_27069_27097[(2)] = null);

(statearr_27069_27097[(1)] = (14));


return cljs.core.constant$keyword$61;
} else {
if((state_val_27061 === (6))){
var inst_27020 = (state_27060[(8)]);
var inst_27045 = inst_27020.length;
var inst_27046 = (inst_27045 > (0));
var state_27060__$1 = state_27060;
if(cljs.core.truth_(inst_27046)){
var statearr_27070_27098 = state_27060__$1;
(statearr_27070_27098[(1)] = (12));

} else {
var statearr_27071_27099 = state_27060__$1;
(statearr_27071_27099[(1)] = (13));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_27061 === (3))){
var inst_27058 = (state_27060[(2)]);
var state_27060__$1 = state_27060;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27060__$1,inst_27058);
} else {
if((state_val_27061 === (12))){
var inst_27020 = (state_27060[(8)]);
var inst_27048 = cljs.core.vec(inst_27020);
var state_27060__$1 = state_27060;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27060__$1,(15),out,inst_27048);
} else {
if((state_val_27061 === (2))){
var state_27060__$1 = state_27060;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27060__$1,(4),ch);
} else {
if((state_val_27061 === (11))){
var inst_27028 = (state_27060[(10)]);
var inst_27024 = (state_27060[(9)]);
var inst_27038 = (state_27060[(2)]);
var inst_27039 = [];
var inst_27040 = inst_27039.push(inst_27024);
var inst_27020 = inst_27039;
var inst_27021 = inst_27028;
var state_27060__$1 = (function (){var statearr_27072 = state_27060;
(statearr_27072[(7)] = inst_27021);

(statearr_27072[(11)] = inst_27038);

(statearr_27072[(12)] = inst_27040);

(statearr_27072[(8)] = inst_27020);

return statearr_27072;
})();
var statearr_27073_27100 = state_27060__$1;
(statearr_27073_27100[(2)] = null);

(statearr_27073_27100[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_27061 === (9))){
var inst_27020 = (state_27060[(8)]);
var inst_27036 = cljs.core.vec(inst_27020);
var state_27060__$1 = state_27060;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27060__$1,(11),out,inst_27036);
} else {
if((state_val_27061 === (5))){
var inst_27028 = (state_27060[(10)]);
var inst_27021 = (state_27060[(7)]);
var inst_27024 = (state_27060[(9)]);
var inst_27028__$1 = (function (){var G__27074 = inst_27024;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27074) : f.call(null,G__27074));
})();
var inst_27029 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27028__$1,inst_27021);
var inst_27030 = cljs.core.keyword_identical_QMARK_(inst_27021,cljs.core.constant$keyword$76);
var inst_27031 = (inst_27029) || (inst_27030);
var state_27060__$1 = (function (){var statearr_27075 = state_27060;
(statearr_27075[(10)] = inst_27028__$1);

return statearr_27075;
})();
if(cljs.core.truth_(inst_27031)){
var statearr_27076_27101 = state_27060__$1;
(statearr_27076_27101[(1)] = (8));

} else {
var statearr_27077_27102 = state_27060__$1;
(statearr_27077_27102[(1)] = (9));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_27061 === (14))){
var inst_27053 = (state_27060[(2)]);
var inst_27054 = cljs.core.async.close_BANG_(out);
var state_27060__$1 = (function (){var statearr_27079 = state_27060;
(statearr_27079[(13)] = inst_27053);

return statearr_27079;
})();
var statearr_27080_27103 = state_27060__$1;
(statearr_27080_27103[(2)] = inst_27054);

(statearr_27080_27103[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_27061 === (10))){
var inst_27043 = (state_27060[(2)]);
var state_27060__$1 = state_27060;
var statearr_27081_27104 = state_27060__$1;
(statearr_27081_27104[(2)] = inst_27043);

(statearr_27081_27104[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_27061 === (8))){
var inst_27028 = (state_27060[(10)]);
var inst_27024 = (state_27060[(9)]);
var inst_27020 = (state_27060[(8)]);
var inst_27033 = inst_27020.push(inst_27024);
var tmp27078 = inst_27020;
var inst_27020__$1 = tmp27078;
var inst_27021 = inst_27028;
var state_27060__$1 = (function (){var statearr_27082 = state_27060;
(statearr_27082[(7)] = inst_27021);

(statearr_27082[(14)] = inst_27033);

(statearr_27082[(8)] = inst_27020__$1);

return statearr_27082;
})();
var statearr_27083_27105 = state_27060__$1;
(statearr_27083_27105[(2)] = null);

(statearr_27083_27105[(1)] = (2));


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
});})(c__11833__auto___27091,out))
;
return ((function (switch__11753__auto__,c__11833__auto___27091,out){
return (function() {
var state_machine__11754__auto__ = null;
var state_machine__11754__auto____0 = (function (){
var statearr_27087 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27087[(0)] = state_machine__11754__auto__);

(statearr_27087[(1)] = (1));

return statearr_27087;
});
var state_machine__11754__auto____1 = (function (state_27060){
while(true){
var ret_value__11755__auto__ = (function (){try{while(true){
var result__11756__auto__ = switch__11753__auto__(state_27060);
if(cljs.core.keyword_identical_QMARK_(result__11756__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11756__auto__;
}
break;
}
}catch (e27088){if((e27088 instanceof Object)){
var ex__11757__auto__ = e27088;
var statearr_27089_27106 = state_27060;
(statearr_27089_27106[(5)] = ex__11757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27060);

return cljs.core.constant$keyword$61;
} else {
throw e27088;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11755__auto__,cljs.core.constant$keyword$61)){
var G__27107 = state_27060;
state_27060 = G__27107;
continue;
} else {
return ret_value__11755__auto__;
}
break;
}
});
state_machine__11754__auto__ = function(state_27060){
switch(arguments.length){
case 0:
return state_machine__11754__auto____0.call(this);
case 1:
return state_machine__11754__auto____1.call(this,state_27060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11754__auto____0;
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11754__auto____1;
return state_machine__11754__auto__;
})()
;})(switch__11753__auto__,c__11833__auto___27091,out))
})();
var state__11835__auto__ = (function (){var statearr_27090 = (function (){return (f__11834__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11834__auto__.cljs$core$IFn$_invoke$arity$0() : f__11834__auto__.call(null));
})();
(statearr_27090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11833__auto___27091);

return statearr_27090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11835__auto__);
});})(c__11833__auto___27091,out))
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
