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
if(typeof cljs.core.async.t22571 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22571 = (function (f,fn_handler,meta22572){
this.f = f;
this.fn_handler = fn_handler;
this.meta22572 = meta22572;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22571.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22571.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t22571.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t22571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22573){
var self__ = this;
var _22573__$1 = this;
return self__.meta22572;
});

cljs.core.async.t22571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22573,meta22572__$1){
var self__ = this;
var _22573__$1 = this;
return (new cljs.core.async.t22571(self__.f,self__.fn_handler,meta22572__$1));
});

cljs.core.async.t22571.cljs$lang$type = true;

cljs.core.async.t22571.cljs$lang$ctorStr = "cljs.core.async/t22571";

cljs.core.async.t22571.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t22571");
});

cljs.core.async.__GT_t22571 = (function __GT_t22571(f__$1,fn_handler__$1,meta22572){
return (new cljs.core.async.t22571(f__$1,fn_handler__$1,meta22572));
});

}

return (new cljs.core.async.t22571(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,20,cljs.core.constant$keyword$9,16,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,13,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
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
var G__22575 = buff;
if(G__22575){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__22575.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__22575.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__22575);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__22575);
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
var val_22592 = (function (){var G__22589 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22589) : cljs.core.deref.call(null,G__22589));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__22590_22593 = val_22592;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22590_22593) : fn1.call(null,G__22590_22593));
} else {
cljs.core.async.impl.dispatch.run(((function (val_22592,ret){
return (function (){
var G__22591 = val_22592;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22591) : fn1.call(null,G__22591));
});})(val_22592,ret))
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
var G__22602 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22602) : cljs.core.deref.call(null,G__22602));
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
var ret = (function (){var G__22603 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22603) : cljs.core.deref.call(null,G__22603));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__22604_22606 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22604_22606) : fn1.call(null,G__22604_22606));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__22605 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22605) : fn1.call(null,G__22605));
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
var n__4517__auto___22607 = n;
var x_22608 = (0);
while(true){
if((x_22608 < n__4517__auto___22607)){
(a[x_22608] = (0));

var G__22609 = (x_22608 + (1));
x_22608 = G__22609;
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

var G__22610 = (i + (1));
i = G__22610;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__22618 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22618) : cljs.core.atom.call(null,G__22618));
})();
if(typeof cljs.core.async.t22619 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22619 = (function (flag,alt_flag,meta22620){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta22620 = meta22620;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22619.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22619.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22622 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22622) : cljs.core.deref.call(null,G__22622));
});})(flag))
;

cljs.core.async.t22619.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22623_22625 = self__.flag;
var G__22624_22626 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22623_22625,G__22624_22626) : cljs.core.reset_BANG_.call(null,G__22623_22625,G__22624_22626));

return true;
});})(flag))
;

cljs.core.async.t22619.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22621){
var self__ = this;
var _22621__$1 = this;
return self__.meta22620;
});})(flag))
;

cljs.core.async.t22619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22621,meta22620__$1){
var self__ = this;
var _22621__$1 = this;
return (new cljs.core.async.t22619(self__.flag,self__.alt_flag,meta22620__$1));
});})(flag))
;

cljs.core.async.t22619.cljs$lang$type = true;

cljs.core.async.t22619.cljs$lang$ctorStr = "cljs.core.async/t22619";

cljs.core.async.t22619.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t22619");
});})(flag))
;

cljs.core.async.__GT_t22619 = ((function (flag){
return (function __GT_t22619(flag__$1,alt_flag__$1,meta22620){
return (new cljs.core.async.t22619(flag__$1,alt_flag__$1,meta22620));
});})(flag))
;

}

return (new cljs.core.async.t22619(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,15,cljs.core.constant$keyword$9,146,cljs.core.constant$keyword$10,5,cljs.core.constant$keyword$11,141,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t22630 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22630 = (function (cb,flag,alt_handler,meta22631){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta22631 = meta22631;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22630.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22630.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t22630.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t22630.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22632){
var self__ = this;
var _22632__$1 = this;
return self__.meta22631;
});

cljs.core.async.t22630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22632,meta22631__$1){
var self__ = this;
var _22632__$1 = this;
return (new cljs.core.async.t22630(self__.cb,self__.flag,self__.alt_handler,meta22631__$1));
});

cljs.core.async.t22630.cljs$lang$type = true;

cljs.core.async.t22630.cljs$lang$ctorStr = "cljs.core.async/t22630";

cljs.core.async.t22630.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t22630");
});

cljs.core.async.__GT_t22630 = (function __GT_t22630(cb__$1,flag__$1,alt_handler__$1,meta22631){
return (new cljs.core.async.t22630(cb__$1,flag__$1,alt_handler__$1,meta22631));
});

}

return (new cljs.core.async.t22630(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,11,cljs.core.constant$keyword$9,154,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,149,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.constant$keyword$50.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__22640 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__22640) : port.call(null,G__22640));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__22641 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__22641) : port.call(null,G__22641));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22633_SHARP_){
var G__22642 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22633_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22642) : fret.call(null,G__22642));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22634_SHARP_){
var G__22643 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22634_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22643) : fret.call(null,G__22643));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22644 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22644) : cljs.core.deref.call(null,G__22644));
})(),(function (){var or__3630__auto__ = wport;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22645 = (i + (1));
i = G__22645;
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
var alts_BANG___delegate = function (ports,p__22646){
var map__22648 = p__22646;
var map__22648__$1 = ((cljs.core.seq_QMARK_(map__22648))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22648):map__22648);
var opts = map__22648__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__22646 = null;
if (arguments.length > 1) {
  p__22646 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__22646);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__22649){
var ports = cljs.core.first(arglist__22649);
var p__22646 = cljs.core.rest(arglist__22649);
return alts_BANG___delegate(ports,p__22646);
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
var c__11276__auto___22747 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11276__auto___22747){
return (function (){
var f__11277__auto__ = (function (){var switch__11261__auto__ = ((function (c__11276__auto___22747){
return (function (state_22723){
var state_val_22724 = (state_22723[(1)]);
if((state_val_22724 === (7))){
var inst_22719 = (state_22723[(2)]);
var state_22723__$1 = state_22723;
var statearr_22725_22748 = state_22723__$1;
(statearr_22725_22748[(2)] = inst_22719);

(statearr_22725_22748[(1)] = (3));


return cljs.core.constant$keyword$44;
} else {
if((state_val_22724 === (1))){
var state_22723__$1 = state_22723;
var statearr_22726_22749 = state_22723__$1;
(statearr_22726_22749[(2)] = null);

(statearr_22726_22749[(1)] = (2));


return cljs.core.constant$keyword$44;
} else {
if((state_val_22724 === (4))){
var inst_22702 = (state_22723[(7)]);
var inst_22702__$1 = (state_22723[(2)]);
var inst_22703 = (inst_22702__$1 == null);
var state_22723__$1 = (function (){var statearr_22727 = state_22723;
(statearr_22727[(7)] = inst_22702__$1);

return statearr_22727;
})();
if(cljs.core.truth_(inst_22703)){
var statearr_22728_22750 = state_22723__$1;
(statearr_22728_22750[(1)] = (5));

} else {
var statearr_22729_22751 = state_22723__$1;
(statearr_22729_22751[(1)] = (6));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_22724 === (13))){
var state_22723__$1 = state_22723;
var statearr_22730_22752 = state_22723__$1;
(statearr_22730_22752[(2)] = null);

(statearr_22730_22752[(1)] = (14));


return cljs.core.constant$keyword$44;
} else {
if((state_val_22724 === (6))){
var inst_22702 = (state_22723[(7)]);
var state_22723__$1 = state_22723;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22723__$1,(11),to,inst_22702);
} else {
if((state_val_22724 === (3))){
var inst_22721 = (state_22723[(2)]);
var state_22723__$1 = state_22723;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22723__$1,inst_22721);
} else {
if((state_val_22724 === (12))){
var state_22723__$1 = state_22723;
var statearr_22731_22753 = state_22723__$1;
(statearr_22731_22753[(2)] = null);

(statearr_22731_22753[(1)] = (2));


return cljs.core.constant$keyword$44;
} else {
if((state_val_22724 === (2))){
var state_22723__$1 = state_22723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22723__$1,(4),from);
} else {
if((state_val_22724 === (11))){
var inst_22712 = (state_22723[(2)]);
var state_22723__$1 = state_22723;
if(cljs.core.truth_(inst_22712)){
var statearr_22732_22754 = state_22723__$1;
(statearr_22732_22754[(1)] = (12));

} else {
var statearr_22733_22755 = state_22723__$1;
(statearr_22733_22755[(1)] = (13));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_22724 === (9))){
var state_22723__$1 = state_22723;
var statearr_22734_22756 = state_22723__$1;
(statearr_22734_22756[(2)] = null);

(statearr_22734_22756[(1)] = (10));


return cljs.core.constant$keyword$44;
} else {
if((state_val_22724 === (5))){
var state_22723__$1 = state_22723;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22735_22757 = state_22723__$1;
(statearr_22735_22757[(1)] = (8));

} else {
var statearr_22736_22758 = state_22723__$1;
(statearr_22736_22758[(1)] = (9));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_22724 === (14))){
var inst_22717 = (state_22723[(2)]);
var state_22723__$1 = state_22723;
var statearr_22737_22759 = state_22723__$1;
(statearr_22737_22759[(2)] = inst_22717);

(statearr_22737_22759[(1)] = (7));


return cljs.core.constant$keyword$44;
} else {
if((state_val_22724 === (10))){
var inst_22709 = (state_22723[(2)]);
var state_22723__$1 = state_22723;
var statearr_22738_22760 = state_22723__$1;
(statearr_22738_22760[(2)] = inst_22709);

(statearr_22738_22760[(1)] = (7));


return cljs.core.constant$keyword$44;
} else {
if((state_val_22724 === (8))){
var inst_22706 = cljs.core.async.close_BANG_(to);
var state_22723__$1 = state_22723;
var statearr_22739_22761 = state_22723__$1;
(statearr_22739_22761[(2)] = inst_22706);

(statearr_22739_22761[(1)] = (10));


return cljs.core.constant$keyword$44;
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
});})(c__11276__auto___22747))
;
return ((function (switch__11261__auto__,c__11276__auto___22747){
return (function() {
var state_machine__11262__auto__ = null;
var state_machine__11262__auto____0 = (function (){
var statearr_22743 = [null,null,null,null,null,null,null,null];
(statearr_22743[(0)] = state_machine__11262__auto__);

(statearr_22743[(1)] = (1));

return statearr_22743;
});
var state_machine__11262__auto____1 = (function (state_22723){
while(true){
var ret_value__11263__auto__ = (function (){try{while(true){
var result__11264__auto__ = switch__11261__auto__(state_22723);
if(cljs.core.keyword_identical_QMARK_(result__11264__auto__,cljs.core.constant$keyword$44)){
continue;
} else {
return result__11264__auto__;
}
break;
}
}catch (e22744){if((e22744 instanceof Object)){
var ex__11265__auto__ = e22744;
var statearr_22745_22762 = state_22723;
(statearr_22745_22762[(5)] = ex__11265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22723);

return cljs.core.constant$keyword$44;
} else {
throw e22744;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11263__auto__,cljs.core.constant$keyword$44)){
var G__22763 = state_22723;
state_22723 = G__22763;
continue;
} else {
return ret_value__11263__auto__;
}
break;
}
});
state_machine__11262__auto__ = function(state_22723){
switch(arguments.length){
case 0:
return state_machine__11262__auto____0.call(this);
case 1:
return state_machine__11262__auto____1.call(this,state_22723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11262__auto____0;
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11262__auto____1;
return state_machine__11262__auto__;
})()
;})(switch__11261__auto__,c__11276__auto___22747))
})();
var state__11278__auto__ = (function (){var statearr_22746 = (function (){return (f__11277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11277__auto__.cljs$core$IFn$_invoke$arity$0() : f__11277__auto__.call(null));
})();
(statearr_22746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11276__auto___22747);

return statearr_22746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11278__auto__);
});})(c__11276__auto___22747))
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
return (function (p__22949){
var vec__22950 = p__22949;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22950,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22950,(1),null);
var job = vec__22950;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__11276__auto___23134 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11276__auto___23134,res,vec__22950,v,p,job,jobs,results){
return (function (){
var f__11277__auto__ = (function (){var switch__11261__auto__ = ((function (c__11276__auto___23134,res,vec__22950,v,p,job,jobs,results){
return (function (state_22955){
var state_val_22956 = (state_22955[(1)]);
if((state_val_22956 === (2))){
var inst_22952 = (state_22955[(2)]);
var inst_22953 = cljs.core.async.close_BANG_(res);
var state_22955__$1 = (function (){var statearr_22957 = state_22955;
(statearr_22957[(7)] = inst_22952);

return statearr_22957;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22955__$1,inst_22953);
} else {
if((state_val_22956 === (1))){
var state_22955__$1 = state_22955;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22955__$1,(2),res,v);
} else {
return null;
}
}
});})(c__11276__auto___23134,res,vec__22950,v,p,job,jobs,results))
;
return ((function (switch__11261__auto__,c__11276__auto___23134,res,vec__22950,v,p,job,jobs,results){
return (function() {
var state_machine__11262__auto__ = null;
var state_machine__11262__auto____0 = (function (){
var statearr_22961 = [null,null,null,null,null,null,null,null];
(statearr_22961[(0)] = state_machine__11262__auto__);

(statearr_22961[(1)] = (1));

return statearr_22961;
});
var state_machine__11262__auto____1 = (function (state_22955){
while(true){
var ret_value__11263__auto__ = (function (){try{while(true){
var result__11264__auto__ = switch__11261__auto__(state_22955);
if(cljs.core.keyword_identical_QMARK_(result__11264__auto__,cljs.core.constant$keyword$44)){
continue;
} else {
return result__11264__auto__;
}
break;
}
}catch (e22962){if((e22962 instanceof Object)){
var ex__11265__auto__ = e22962;
var statearr_22963_23135 = state_22955;
(statearr_22963_23135[(5)] = ex__11265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22955);

return cljs.core.constant$keyword$44;
} else {
throw e22962;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11263__auto__,cljs.core.constant$keyword$44)){
var G__23136 = state_22955;
state_22955 = G__23136;
continue;
} else {
return ret_value__11263__auto__;
}
break;
}
});
state_machine__11262__auto__ = function(state_22955){
switch(arguments.length){
case 0:
return state_machine__11262__auto____0.call(this);
case 1:
return state_machine__11262__auto____1.call(this,state_22955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11262__auto____0;
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11262__auto____1;
return state_machine__11262__auto__;
})()
;})(switch__11261__auto__,c__11276__auto___23134,res,vec__22950,v,p,job,jobs,results))
})();
var state__11278__auto__ = (function (){var statearr_22964 = (function (){return (f__11277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11277__auto__.cljs$core$IFn$_invoke$arity$0() : f__11277__auto__.call(null));
})();
(statearr_22964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11276__auto___23134);

return statearr_22964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11278__auto__);
});})(c__11276__auto___23134,res,vec__22950,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22965){
var vec__22966 = p__22965;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22966,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22966,(1),null);
var job = vec__22966;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__22967_23137 = v;
var G__22968_23138 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__22967_23137,G__22968_23138) : xf.call(null,G__22967_23137,G__22968_23138));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4517__auto___23139 = n;
var __23140 = (0);
while(true){
if((__23140 < n__4517__auto___23139)){
var G__22969_23141 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22969_23141) {
case "async":
var c__11276__auto___23143 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__23140,c__11276__auto___23143,G__22969_23141,n__4517__auto___23139,jobs,results,process,async){
return (function (){
var f__11277__auto__ = (function (){var switch__11261__auto__ = ((function (__23140,c__11276__auto___23143,G__22969_23141,n__4517__auto___23139,jobs,results,process,async){
return (function (state_22982){
var state_val_22983 = (state_22982[(1)]);
if((state_val_22983 === (7))){
var inst_22978 = (state_22982[(2)]);
var state_22982__$1 = state_22982;
var statearr_22984_23144 = state_22982__$1;
(statearr_22984_23144[(2)] = inst_22978);

(statearr_22984_23144[(1)] = (3));


return cljs.core.constant$keyword$44;
} else {
if((state_val_22983 === (6))){
var state_22982__$1 = state_22982;
var statearr_22985_23145 = state_22982__$1;
(statearr_22985_23145[(2)] = null);

(statearr_22985_23145[(1)] = (7));


return cljs.core.constant$keyword$44;
} else {
if((state_val_22983 === (5))){
var state_22982__$1 = state_22982;
var statearr_22986_23146 = state_22982__$1;
(statearr_22986_23146[(2)] = null);

(statearr_22986_23146[(1)] = (2));


return cljs.core.constant$keyword$44;
} else {
if((state_val_22983 === (4))){
var inst_22972 = (state_22982[(2)]);
var inst_22973 = async(inst_22972);
var state_22982__$1 = state_22982;
if(cljs.core.truth_(inst_22973)){
var statearr_22987_23147 = state_22982__$1;
(statearr_22987_23147[(1)] = (5));

} else {
var statearr_22988_23148 = state_22982__$1;
(statearr_22988_23148[(1)] = (6));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_22983 === (3))){
var inst_22980 = (state_22982[(2)]);
var state_22982__$1 = state_22982;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22982__$1,inst_22980);
} else {
if((state_val_22983 === (2))){
var state_22982__$1 = state_22982;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22982__$1,(4),jobs);
} else {
if((state_val_22983 === (1))){
var state_22982__$1 = state_22982;
var statearr_22989_23149 = state_22982__$1;
(statearr_22989_23149[(2)] = null);

(statearr_22989_23149[(1)] = (2));


return cljs.core.constant$keyword$44;
} else {
return null;
}
}
}
}
}
}
}
});})(__23140,c__11276__auto___23143,G__22969_23141,n__4517__auto___23139,jobs,results,process,async))
;
return ((function (__23140,switch__11261__auto__,c__11276__auto___23143,G__22969_23141,n__4517__auto___23139,jobs,results,process,async){
return (function() {
var state_machine__11262__auto__ = null;
var state_machine__11262__auto____0 = (function (){
var statearr_22993 = [null,null,null,null,null,null,null];
(statearr_22993[(0)] = state_machine__11262__auto__);

(statearr_22993[(1)] = (1));

return statearr_22993;
});
var state_machine__11262__auto____1 = (function (state_22982){
while(true){
var ret_value__11263__auto__ = (function (){try{while(true){
var result__11264__auto__ = switch__11261__auto__(state_22982);
if(cljs.core.keyword_identical_QMARK_(result__11264__auto__,cljs.core.constant$keyword$44)){
continue;
} else {
return result__11264__auto__;
}
break;
}
}catch (e22994){if((e22994 instanceof Object)){
var ex__11265__auto__ = e22994;
var statearr_22995_23150 = state_22982;
(statearr_22995_23150[(5)] = ex__11265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22982);

return cljs.core.constant$keyword$44;
} else {
throw e22994;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11263__auto__,cljs.core.constant$keyword$44)){
var G__23151 = state_22982;
state_22982 = G__23151;
continue;
} else {
return ret_value__11263__auto__;
}
break;
}
});
state_machine__11262__auto__ = function(state_22982){
switch(arguments.length){
case 0:
return state_machine__11262__auto____0.call(this);
case 1:
return state_machine__11262__auto____1.call(this,state_22982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11262__auto____0;
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11262__auto____1;
return state_machine__11262__auto__;
})()
;})(__23140,switch__11261__auto__,c__11276__auto___23143,G__22969_23141,n__4517__auto___23139,jobs,results,process,async))
})();
var state__11278__auto__ = (function (){var statearr_22996 = (function (){return (f__11277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11277__auto__.cljs$core$IFn$_invoke$arity$0() : f__11277__auto__.call(null));
})();
(statearr_22996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11276__auto___23143);

return statearr_22996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11278__auto__);
});})(__23140,c__11276__auto___23143,G__22969_23141,n__4517__auto___23139,jobs,results,process,async))
);


break;
case "compute":
var c__11276__auto___23152 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__23140,c__11276__auto___23152,G__22969_23141,n__4517__auto___23139,jobs,results,process,async){
return (function (){
var f__11277__auto__ = (function (){var switch__11261__auto__ = ((function (__23140,c__11276__auto___23152,G__22969_23141,n__4517__auto___23139,jobs,results,process,async){
return (function (state_23009){
var state_val_23010 = (state_23009[(1)]);
if((state_val_23010 === (7))){
var inst_23005 = (state_23009[(2)]);
var state_23009__$1 = state_23009;
var statearr_23011_23153 = state_23009__$1;
(statearr_23011_23153[(2)] = inst_23005);

(statearr_23011_23153[(1)] = (3));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23010 === (6))){
var state_23009__$1 = state_23009;
var statearr_23012_23154 = state_23009__$1;
(statearr_23012_23154[(2)] = null);

(statearr_23012_23154[(1)] = (7));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23010 === (5))){
var state_23009__$1 = state_23009;
var statearr_23013_23155 = state_23009__$1;
(statearr_23013_23155[(2)] = null);

(statearr_23013_23155[(1)] = (2));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23010 === (4))){
var inst_22999 = (state_23009[(2)]);
var inst_23000 = process(inst_22999);
var state_23009__$1 = state_23009;
if(cljs.core.truth_(inst_23000)){
var statearr_23014_23156 = state_23009__$1;
(statearr_23014_23156[(1)] = (5));

} else {
var statearr_23015_23157 = state_23009__$1;
(statearr_23015_23157[(1)] = (6));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_23010 === (3))){
var inst_23007 = (state_23009[(2)]);
var state_23009__$1 = state_23009;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23009__$1,inst_23007);
} else {
if((state_val_23010 === (2))){
var state_23009__$1 = state_23009;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23009__$1,(4),jobs);
} else {
if((state_val_23010 === (1))){
var state_23009__$1 = state_23009;
var statearr_23016_23158 = state_23009__$1;
(statearr_23016_23158[(2)] = null);

(statearr_23016_23158[(1)] = (2));


return cljs.core.constant$keyword$44;
} else {
return null;
}
}
}
}
}
}
}
});})(__23140,c__11276__auto___23152,G__22969_23141,n__4517__auto___23139,jobs,results,process,async))
;
return ((function (__23140,switch__11261__auto__,c__11276__auto___23152,G__22969_23141,n__4517__auto___23139,jobs,results,process,async){
return (function() {
var state_machine__11262__auto__ = null;
var state_machine__11262__auto____0 = (function (){
var statearr_23020 = [null,null,null,null,null,null,null];
(statearr_23020[(0)] = state_machine__11262__auto__);

(statearr_23020[(1)] = (1));

return statearr_23020;
});
var state_machine__11262__auto____1 = (function (state_23009){
while(true){
var ret_value__11263__auto__ = (function (){try{while(true){
var result__11264__auto__ = switch__11261__auto__(state_23009);
if(cljs.core.keyword_identical_QMARK_(result__11264__auto__,cljs.core.constant$keyword$44)){
continue;
} else {
return result__11264__auto__;
}
break;
}
}catch (e23021){if((e23021 instanceof Object)){
var ex__11265__auto__ = e23021;
var statearr_23022_23159 = state_23009;
(statearr_23022_23159[(5)] = ex__11265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23009);

return cljs.core.constant$keyword$44;
} else {
throw e23021;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11263__auto__,cljs.core.constant$keyword$44)){
var G__23160 = state_23009;
state_23009 = G__23160;
continue;
} else {
return ret_value__11263__auto__;
}
break;
}
});
state_machine__11262__auto__ = function(state_23009){
switch(arguments.length){
case 0:
return state_machine__11262__auto____0.call(this);
case 1:
return state_machine__11262__auto____1.call(this,state_23009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11262__auto____0;
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11262__auto____1;
return state_machine__11262__auto__;
})()
;})(__23140,switch__11261__auto__,c__11276__auto___23152,G__22969_23141,n__4517__auto___23139,jobs,results,process,async))
})();
var state__11278__auto__ = (function (){var statearr_23023 = (function (){return (f__11277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11277__auto__.cljs$core$IFn$_invoke$arity$0() : f__11277__auto__.call(null));
})();
(statearr_23023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11276__auto___23152);

return statearr_23023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11278__auto__);
});})(__23140,c__11276__auto___23152,G__22969_23141,n__4517__auto___23139,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23161 = (__23140 + (1));
__23140 = G__23161;
continue;
} else {
}
break;
}

var c__11276__auto___23162 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11276__auto___23162,jobs,results,process,async){
return (function (){
var f__11277__auto__ = (function (){var switch__11261__auto__ = ((function (c__11276__auto___23162,jobs,results,process,async){
return (function (state_23045){
var state_val_23046 = (state_23045[(1)]);
if((state_val_23046 === (9))){
var inst_23038 = (state_23045[(2)]);
var state_23045__$1 = (function (){var statearr_23047 = state_23045;
(statearr_23047[(7)] = inst_23038);

return statearr_23047;
})();
var statearr_23048_23163 = state_23045__$1;
(statearr_23048_23163[(2)] = null);

(statearr_23048_23163[(1)] = (2));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23046 === (8))){
var inst_23031 = (state_23045[(8)]);
var inst_23036 = (state_23045[(2)]);
var state_23045__$1 = (function (){var statearr_23049 = state_23045;
(statearr_23049[(9)] = inst_23036);

return statearr_23049;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23045__$1,(9),results,inst_23031);
} else {
if((state_val_23046 === (7))){
var inst_23041 = (state_23045[(2)]);
var state_23045__$1 = state_23045;
var statearr_23050_23164 = state_23045__$1;
(statearr_23050_23164[(2)] = inst_23041);

(statearr_23050_23164[(1)] = (3));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23046 === (6))){
var inst_23026 = (state_23045[(10)]);
var inst_23031 = (state_23045[(8)]);
var inst_23031__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_23032 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23033 = [inst_23026,inst_23031__$1];
var inst_23034 = (new cljs.core.PersistentVector(null,2,(5),inst_23032,inst_23033,null));
var state_23045__$1 = (function (){var statearr_23051 = state_23045;
(statearr_23051[(8)] = inst_23031__$1);

return statearr_23051;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23045__$1,(8),jobs,inst_23034);
} else {
if((state_val_23046 === (5))){
var inst_23029 = cljs.core.async.close_BANG_(jobs);
var state_23045__$1 = state_23045;
var statearr_23052_23165 = state_23045__$1;
(statearr_23052_23165[(2)] = inst_23029);

(statearr_23052_23165[(1)] = (7));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23046 === (4))){
var inst_23026 = (state_23045[(10)]);
var inst_23026__$1 = (state_23045[(2)]);
var inst_23027 = (inst_23026__$1 == null);
var state_23045__$1 = (function (){var statearr_23053 = state_23045;
(statearr_23053[(10)] = inst_23026__$1);

return statearr_23053;
})();
if(cljs.core.truth_(inst_23027)){
var statearr_23054_23166 = state_23045__$1;
(statearr_23054_23166[(1)] = (5));

} else {
var statearr_23055_23167 = state_23045__$1;
(statearr_23055_23167[(1)] = (6));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_23046 === (3))){
var inst_23043 = (state_23045[(2)]);
var state_23045__$1 = state_23045;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23045__$1,inst_23043);
} else {
if((state_val_23046 === (2))){
var state_23045__$1 = state_23045;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23045__$1,(4),from);
} else {
if((state_val_23046 === (1))){
var state_23045__$1 = state_23045;
var statearr_23056_23168 = state_23045__$1;
(statearr_23056_23168[(2)] = null);

(statearr_23056_23168[(1)] = (2));


return cljs.core.constant$keyword$44;
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
});})(c__11276__auto___23162,jobs,results,process,async))
;
return ((function (switch__11261__auto__,c__11276__auto___23162,jobs,results,process,async){
return (function() {
var state_machine__11262__auto__ = null;
var state_machine__11262__auto____0 = (function (){
var statearr_23060 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23060[(0)] = state_machine__11262__auto__);

(statearr_23060[(1)] = (1));

return statearr_23060;
});
var state_machine__11262__auto____1 = (function (state_23045){
while(true){
var ret_value__11263__auto__ = (function (){try{while(true){
var result__11264__auto__ = switch__11261__auto__(state_23045);
if(cljs.core.keyword_identical_QMARK_(result__11264__auto__,cljs.core.constant$keyword$44)){
continue;
} else {
return result__11264__auto__;
}
break;
}
}catch (e23061){if((e23061 instanceof Object)){
var ex__11265__auto__ = e23061;
var statearr_23062_23169 = state_23045;
(statearr_23062_23169[(5)] = ex__11265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23045);

return cljs.core.constant$keyword$44;
} else {
throw e23061;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11263__auto__,cljs.core.constant$keyword$44)){
var G__23170 = state_23045;
state_23045 = G__23170;
continue;
} else {
return ret_value__11263__auto__;
}
break;
}
});
state_machine__11262__auto__ = function(state_23045){
switch(arguments.length){
case 0:
return state_machine__11262__auto____0.call(this);
case 1:
return state_machine__11262__auto____1.call(this,state_23045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11262__auto____0;
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11262__auto____1;
return state_machine__11262__auto__;
})()
;})(switch__11261__auto__,c__11276__auto___23162,jobs,results,process,async))
})();
var state__11278__auto__ = (function (){var statearr_23063 = (function (){return (f__11277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11277__auto__.cljs$core$IFn$_invoke$arity$0() : f__11277__auto__.call(null));
})();
(statearr_23063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11276__auto___23162);

return statearr_23063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11278__auto__);
});})(c__11276__auto___23162,jobs,results,process,async))
);


var c__11276__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11276__auto__,jobs,results,process,async){
return (function (){
var f__11277__auto__ = (function (){var switch__11261__auto__ = ((function (c__11276__auto__,jobs,results,process,async){
return (function (state_23101){
var state_val_23102 = (state_23101[(1)]);
if((state_val_23102 === (7))){
var inst_23097 = (state_23101[(2)]);
var state_23101__$1 = state_23101;
var statearr_23103_23171 = state_23101__$1;
(statearr_23103_23171[(2)] = inst_23097);

(statearr_23103_23171[(1)] = (3));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23102 === (20))){
var state_23101__$1 = state_23101;
var statearr_23104_23172 = state_23101__$1;
(statearr_23104_23172[(2)] = null);

(statearr_23104_23172[(1)] = (21));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23102 === (1))){
var state_23101__$1 = state_23101;
var statearr_23105_23173 = state_23101__$1;
(statearr_23105_23173[(2)] = null);

(statearr_23105_23173[(1)] = (2));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23102 === (4))){
var inst_23066 = (state_23101[(7)]);
var inst_23066__$1 = (state_23101[(2)]);
var inst_23067 = (inst_23066__$1 == null);
var state_23101__$1 = (function (){var statearr_23106 = state_23101;
(statearr_23106[(7)] = inst_23066__$1);

return statearr_23106;
})();
if(cljs.core.truth_(inst_23067)){
var statearr_23107_23174 = state_23101__$1;
(statearr_23107_23174[(1)] = (5));

} else {
var statearr_23108_23175 = state_23101__$1;
(statearr_23108_23175[(1)] = (6));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_23102 === (15))){
var inst_23079 = (state_23101[(8)]);
var state_23101__$1 = state_23101;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23101__$1,(18),to,inst_23079);
} else {
if((state_val_23102 === (21))){
var inst_23092 = (state_23101[(2)]);
var state_23101__$1 = state_23101;
var statearr_23109_23176 = state_23101__$1;
(statearr_23109_23176[(2)] = inst_23092);

(statearr_23109_23176[(1)] = (13));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23102 === (13))){
var inst_23094 = (state_23101[(2)]);
var state_23101__$1 = (function (){var statearr_23110 = state_23101;
(statearr_23110[(9)] = inst_23094);

return statearr_23110;
})();
var statearr_23111_23177 = state_23101__$1;
(statearr_23111_23177[(2)] = null);

(statearr_23111_23177[(1)] = (2));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23102 === (6))){
var inst_23066 = (state_23101[(7)]);
var state_23101__$1 = state_23101;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23101__$1,(11),inst_23066);
} else {
if((state_val_23102 === (17))){
var inst_23087 = (state_23101[(2)]);
var state_23101__$1 = state_23101;
if(cljs.core.truth_(inst_23087)){
var statearr_23112_23178 = state_23101__$1;
(statearr_23112_23178[(1)] = (19));

} else {
var statearr_23113_23179 = state_23101__$1;
(statearr_23113_23179[(1)] = (20));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_23102 === (3))){
var inst_23099 = (state_23101[(2)]);
var state_23101__$1 = state_23101;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23101__$1,inst_23099);
} else {
if((state_val_23102 === (12))){
var inst_23076 = (state_23101[(10)]);
var state_23101__$1 = state_23101;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23101__$1,(14),inst_23076);
} else {
if((state_val_23102 === (2))){
var state_23101__$1 = state_23101;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23101__$1,(4),results);
} else {
if((state_val_23102 === (19))){
var state_23101__$1 = state_23101;
var statearr_23114_23180 = state_23101__$1;
(statearr_23114_23180[(2)] = null);

(statearr_23114_23180[(1)] = (12));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23102 === (11))){
var inst_23076 = (state_23101[(2)]);
var state_23101__$1 = (function (){var statearr_23115 = state_23101;
(statearr_23115[(10)] = inst_23076);

return statearr_23115;
})();
var statearr_23116_23181 = state_23101__$1;
(statearr_23116_23181[(2)] = null);

(statearr_23116_23181[(1)] = (12));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23102 === (9))){
var state_23101__$1 = state_23101;
var statearr_23117_23182 = state_23101__$1;
(statearr_23117_23182[(2)] = null);

(statearr_23117_23182[(1)] = (10));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23102 === (5))){
var state_23101__$1 = state_23101;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23118_23183 = state_23101__$1;
(statearr_23118_23183[(1)] = (8));

} else {
var statearr_23119_23184 = state_23101__$1;
(statearr_23119_23184[(1)] = (9));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_23102 === (14))){
var inst_23081 = (state_23101[(11)]);
var inst_23079 = (state_23101[(8)]);
var inst_23079__$1 = (state_23101[(2)]);
var inst_23080 = (inst_23079__$1 == null);
var inst_23081__$1 = cljs.core.not(inst_23080);
var state_23101__$1 = (function (){var statearr_23120 = state_23101;
(statearr_23120[(11)] = inst_23081__$1);

(statearr_23120[(8)] = inst_23079__$1);

return statearr_23120;
})();
if(inst_23081__$1){
var statearr_23121_23185 = state_23101__$1;
(statearr_23121_23185[(1)] = (15));

} else {
var statearr_23122_23186 = state_23101__$1;
(statearr_23122_23186[(1)] = (16));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_23102 === (16))){
var inst_23081 = (state_23101[(11)]);
var state_23101__$1 = state_23101;
var statearr_23123_23187 = state_23101__$1;
(statearr_23123_23187[(2)] = inst_23081);

(statearr_23123_23187[(1)] = (17));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23102 === (10))){
var inst_23073 = (state_23101[(2)]);
var state_23101__$1 = state_23101;
var statearr_23124_23188 = state_23101__$1;
(statearr_23124_23188[(2)] = inst_23073);

(statearr_23124_23188[(1)] = (7));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23102 === (18))){
var inst_23084 = (state_23101[(2)]);
var state_23101__$1 = state_23101;
var statearr_23125_23189 = state_23101__$1;
(statearr_23125_23189[(2)] = inst_23084);

(statearr_23125_23189[(1)] = (17));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23102 === (8))){
var inst_23070 = cljs.core.async.close_BANG_(to);
var state_23101__$1 = state_23101;
var statearr_23126_23190 = state_23101__$1;
(statearr_23126_23190[(2)] = inst_23070);

(statearr_23126_23190[(1)] = (10));


return cljs.core.constant$keyword$44;
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
});})(c__11276__auto__,jobs,results,process,async))
;
return ((function (switch__11261__auto__,c__11276__auto__,jobs,results,process,async){
return (function() {
var state_machine__11262__auto__ = null;
var state_machine__11262__auto____0 = (function (){
var statearr_23130 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23130[(0)] = state_machine__11262__auto__);

(statearr_23130[(1)] = (1));

return statearr_23130;
});
var state_machine__11262__auto____1 = (function (state_23101){
while(true){
var ret_value__11263__auto__ = (function (){try{while(true){
var result__11264__auto__ = switch__11261__auto__(state_23101);
if(cljs.core.keyword_identical_QMARK_(result__11264__auto__,cljs.core.constant$keyword$44)){
continue;
} else {
return result__11264__auto__;
}
break;
}
}catch (e23131){if((e23131 instanceof Object)){
var ex__11265__auto__ = e23131;
var statearr_23132_23191 = state_23101;
(statearr_23132_23191[(5)] = ex__11265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23101);

return cljs.core.constant$keyword$44;
} else {
throw e23131;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11263__auto__,cljs.core.constant$keyword$44)){
var G__23192 = state_23101;
state_23101 = G__23192;
continue;
} else {
return ret_value__11263__auto__;
}
break;
}
});
state_machine__11262__auto__ = function(state_23101){
switch(arguments.length){
case 0:
return state_machine__11262__auto____0.call(this);
case 1:
return state_machine__11262__auto____1.call(this,state_23101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11262__auto____0;
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11262__auto____1;
return state_machine__11262__auto__;
})()
;})(switch__11261__auto__,c__11276__auto__,jobs,results,process,async))
})();
var state__11278__auto__ = (function (){var statearr_23133 = (function (){return (f__11277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11277__auto__.cljs$core$IFn$_invoke$arity$0() : f__11277__auto__.call(null));
})();
(statearr_23133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11276__auto__);

return statearr_23133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11278__auto__);
});})(c__11276__auto__,jobs,results,process,async))
);

return c__11276__auto__;
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
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.constant$keyword$51);
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
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.constant$keyword$52);
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
var c__11276__auto___23315 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11276__auto___23315,tc,fc){
return (function (){
var f__11277__auto__ = (function (){var switch__11261__auto__ = ((function (c__11276__auto___23315,tc,fc){
return (function (state_23289){
var state_val_23290 = (state_23289[(1)]);
if((state_val_23290 === (7))){
var inst_23285 = (state_23289[(2)]);
var state_23289__$1 = state_23289;
var statearr_23291_23316 = state_23289__$1;
(statearr_23291_23316[(2)] = inst_23285);

(statearr_23291_23316[(1)] = (3));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23290 === (1))){
var state_23289__$1 = state_23289;
var statearr_23292_23317 = state_23289__$1;
(statearr_23292_23317[(2)] = null);

(statearr_23292_23317[(1)] = (2));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23290 === (4))){
var inst_23266 = (state_23289[(7)]);
var inst_23266__$1 = (state_23289[(2)]);
var inst_23267 = (inst_23266__$1 == null);
var state_23289__$1 = (function (){var statearr_23293 = state_23289;
(statearr_23293[(7)] = inst_23266__$1);

return statearr_23293;
})();
if(cljs.core.truth_(inst_23267)){
var statearr_23294_23318 = state_23289__$1;
(statearr_23294_23318[(1)] = (5));

} else {
var statearr_23295_23319 = state_23289__$1;
(statearr_23295_23319[(1)] = (6));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_23290 === (13))){
var state_23289__$1 = state_23289;
var statearr_23296_23320 = state_23289__$1;
(statearr_23296_23320[(2)] = null);

(statearr_23296_23320[(1)] = (14));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23290 === (6))){
var inst_23266 = (state_23289[(7)]);
var inst_23272 = (function (){var G__23297 = inst_23266;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__23297) : p.call(null,G__23297));
})();
var state_23289__$1 = state_23289;
if(cljs.core.truth_(inst_23272)){
var statearr_23298_23321 = state_23289__$1;
(statearr_23298_23321[(1)] = (9));

} else {
var statearr_23299_23322 = state_23289__$1;
(statearr_23299_23322[(1)] = (10));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_23290 === (3))){
var inst_23287 = (state_23289[(2)]);
var state_23289__$1 = state_23289;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23289__$1,inst_23287);
} else {
if((state_val_23290 === (12))){
var state_23289__$1 = state_23289;
var statearr_23300_23323 = state_23289__$1;
(statearr_23300_23323[(2)] = null);

(statearr_23300_23323[(1)] = (2));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23290 === (2))){
var state_23289__$1 = state_23289;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23289__$1,(4),ch);
} else {
if((state_val_23290 === (11))){
var inst_23266 = (state_23289[(7)]);
var inst_23276 = (state_23289[(2)]);
var state_23289__$1 = state_23289;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23289__$1,(8),inst_23276,inst_23266);
} else {
if((state_val_23290 === (9))){
var state_23289__$1 = state_23289;
var statearr_23301_23324 = state_23289__$1;
(statearr_23301_23324[(2)] = tc);

(statearr_23301_23324[(1)] = (11));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23290 === (5))){
var inst_23269 = cljs.core.async.close_BANG_(tc);
var inst_23270 = cljs.core.async.close_BANG_(fc);
var state_23289__$1 = (function (){var statearr_23302 = state_23289;
(statearr_23302[(8)] = inst_23269);

return statearr_23302;
})();
var statearr_23303_23325 = state_23289__$1;
(statearr_23303_23325[(2)] = inst_23270);

(statearr_23303_23325[(1)] = (7));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23290 === (14))){
var inst_23283 = (state_23289[(2)]);
var state_23289__$1 = state_23289;
var statearr_23304_23326 = state_23289__$1;
(statearr_23304_23326[(2)] = inst_23283);

(statearr_23304_23326[(1)] = (7));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23290 === (10))){
var state_23289__$1 = state_23289;
var statearr_23305_23327 = state_23289__$1;
(statearr_23305_23327[(2)] = fc);

(statearr_23305_23327[(1)] = (11));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23290 === (8))){
var inst_23278 = (state_23289[(2)]);
var state_23289__$1 = state_23289;
if(cljs.core.truth_(inst_23278)){
var statearr_23306_23328 = state_23289__$1;
(statearr_23306_23328[(1)] = (12));

} else {
var statearr_23307_23329 = state_23289__$1;
(statearr_23307_23329[(1)] = (13));

}

return cljs.core.constant$keyword$44;
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
});})(c__11276__auto___23315,tc,fc))
;
return ((function (switch__11261__auto__,c__11276__auto___23315,tc,fc){
return (function() {
var state_machine__11262__auto__ = null;
var state_machine__11262__auto____0 = (function (){
var statearr_23311 = [null,null,null,null,null,null,null,null,null];
(statearr_23311[(0)] = state_machine__11262__auto__);

(statearr_23311[(1)] = (1));

return statearr_23311;
});
var state_machine__11262__auto____1 = (function (state_23289){
while(true){
var ret_value__11263__auto__ = (function (){try{while(true){
var result__11264__auto__ = switch__11261__auto__(state_23289);
if(cljs.core.keyword_identical_QMARK_(result__11264__auto__,cljs.core.constant$keyword$44)){
continue;
} else {
return result__11264__auto__;
}
break;
}
}catch (e23312){if((e23312 instanceof Object)){
var ex__11265__auto__ = e23312;
var statearr_23313_23330 = state_23289;
(statearr_23313_23330[(5)] = ex__11265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23289);

return cljs.core.constant$keyword$44;
} else {
throw e23312;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11263__auto__,cljs.core.constant$keyword$44)){
var G__23331 = state_23289;
state_23289 = G__23331;
continue;
} else {
return ret_value__11263__auto__;
}
break;
}
});
state_machine__11262__auto__ = function(state_23289){
switch(arguments.length){
case 0:
return state_machine__11262__auto____0.call(this);
case 1:
return state_machine__11262__auto____1.call(this,state_23289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11262__auto____0;
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11262__auto____1;
return state_machine__11262__auto__;
})()
;})(switch__11261__auto__,c__11276__auto___23315,tc,fc))
})();
var state__11278__auto__ = (function (){var statearr_23314 = (function (){return (f__11277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11277__auto__.cljs$core$IFn$_invoke$arity$0() : f__11277__auto__.call(null));
})();
(statearr_23314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11276__auto___23315);

return statearr_23314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11278__auto__);
});})(c__11276__auto___23315,tc,fc))
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
var c__11276__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11276__auto__){
return (function (){
var f__11277__auto__ = (function (){var switch__11261__auto__ = ((function (c__11276__auto__){
return (function (state_23380){
var state_val_23381 = (state_23380[(1)]);
if((state_val_23381 === (7))){
var inst_23376 = (state_23380[(2)]);
var state_23380__$1 = state_23380;
var statearr_23382_23400 = state_23380__$1;
(statearr_23382_23400[(2)] = inst_23376);

(statearr_23382_23400[(1)] = (3));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23381 === (6))){
var inst_23369 = (state_23380[(7)]);
var inst_23366 = (state_23380[(8)]);
var inst_23373 = (function (){var G__23383 = inst_23366;
var G__23384 = inst_23369;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23383,G__23384) : f.call(null,G__23383,G__23384));
})();
var inst_23366__$1 = inst_23373;
var state_23380__$1 = (function (){var statearr_23385 = state_23380;
(statearr_23385[(8)] = inst_23366__$1);

return statearr_23385;
})();
var statearr_23386_23401 = state_23380__$1;
(statearr_23386_23401[(2)] = null);

(statearr_23386_23401[(1)] = (2));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23381 === (5))){
var inst_23366 = (state_23380[(8)]);
var state_23380__$1 = state_23380;
var statearr_23387_23402 = state_23380__$1;
(statearr_23387_23402[(2)] = inst_23366);

(statearr_23387_23402[(1)] = (7));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23381 === (4))){
var inst_23369 = (state_23380[(7)]);
var inst_23369__$1 = (state_23380[(2)]);
var inst_23370 = (inst_23369__$1 == null);
var state_23380__$1 = (function (){var statearr_23388 = state_23380;
(statearr_23388[(7)] = inst_23369__$1);

return statearr_23388;
})();
if(cljs.core.truth_(inst_23370)){
var statearr_23389_23403 = state_23380__$1;
(statearr_23389_23403[(1)] = (5));

} else {
var statearr_23390_23404 = state_23380__$1;
(statearr_23390_23404[(1)] = (6));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_23381 === (3))){
var inst_23378 = (state_23380[(2)]);
var state_23380__$1 = state_23380;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23380__$1,inst_23378);
} else {
if((state_val_23381 === (2))){
var state_23380__$1 = state_23380;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23380__$1,(4),ch);
} else {
if((state_val_23381 === (1))){
var inst_23366 = init;
var state_23380__$1 = (function (){var statearr_23391 = state_23380;
(statearr_23391[(8)] = inst_23366);

return statearr_23391;
})();
var statearr_23392_23405 = state_23380__$1;
(statearr_23392_23405[(2)] = null);

(statearr_23392_23405[(1)] = (2));


return cljs.core.constant$keyword$44;
} else {
return null;
}
}
}
}
}
}
}
});})(c__11276__auto__))
;
return ((function (switch__11261__auto__,c__11276__auto__){
return (function() {
var state_machine__11262__auto__ = null;
var state_machine__11262__auto____0 = (function (){
var statearr_23396 = [null,null,null,null,null,null,null,null,null];
(statearr_23396[(0)] = state_machine__11262__auto__);

(statearr_23396[(1)] = (1));

return statearr_23396;
});
var state_machine__11262__auto____1 = (function (state_23380){
while(true){
var ret_value__11263__auto__ = (function (){try{while(true){
var result__11264__auto__ = switch__11261__auto__(state_23380);
if(cljs.core.keyword_identical_QMARK_(result__11264__auto__,cljs.core.constant$keyword$44)){
continue;
} else {
return result__11264__auto__;
}
break;
}
}catch (e23397){if((e23397 instanceof Object)){
var ex__11265__auto__ = e23397;
var statearr_23398_23406 = state_23380;
(statearr_23398_23406[(5)] = ex__11265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23380);

return cljs.core.constant$keyword$44;
} else {
throw e23397;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11263__auto__,cljs.core.constant$keyword$44)){
var G__23407 = state_23380;
state_23380 = G__23407;
continue;
} else {
return ret_value__11263__auto__;
}
break;
}
});
state_machine__11262__auto__ = function(state_23380){
switch(arguments.length){
case 0:
return state_machine__11262__auto____0.call(this);
case 1:
return state_machine__11262__auto____1.call(this,state_23380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11262__auto____0;
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11262__auto____1;
return state_machine__11262__auto__;
})()
;})(switch__11261__auto__,c__11276__auto__))
})();
var state__11278__auto__ = (function (){var statearr_23399 = (function (){return (f__11277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11277__auto__.cljs$core$IFn$_invoke$arity$0() : f__11277__auto__.call(null));
})();
(statearr_23399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11276__auto__);

return statearr_23399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11278__auto__);
});})(c__11276__auto__))
);

return c__11276__auto__;
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
var c__11276__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11276__auto__){
return (function (){
var f__11277__auto__ = (function (){var switch__11261__auto__ = ((function (c__11276__auto__){
return (function (state_23484){
var state_val_23485 = (state_23484[(1)]);
if((state_val_23485 === (7))){
var inst_23466 = (state_23484[(2)]);
var state_23484__$1 = state_23484;
var statearr_23486_23509 = state_23484__$1;
(statearr_23486_23509[(2)] = inst_23466);

(statearr_23486_23509[(1)] = (6));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23485 === (1))){
var inst_23460 = cljs.core.seq(coll);
var inst_23461 = inst_23460;
var state_23484__$1 = (function (){var statearr_23487 = state_23484;
(statearr_23487[(7)] = inst_23461);

return statearr_23487;
})();
var statearr_23488_23510 = state_23484__$1;
(statearr_23488_23510[(2)] = null);

(statearr_23488_23510[(1)] = (2));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23485 === (4))){
var inst_23461 = (state_23484[(7)]);
var inst_23464 = cljs.core.first(inst_23461);
var state_23484__$1 = state_23484;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23484__$1,(7),ch,inst_23464);
} else {
if((state_val_23485 === (13))){
var inst_23478 = (state_23484[(2)]);
var state_23484__$1 = state_23484;
var statearr_23489_23511 = state_23484__$1;
(statearr_23489_23511[(2)] = inst_23478);

(statearr_23489_23511[(1)] = (10));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23485 === (6))){
var inst_23469 = (state_23484[(2)]);
var state_23484__$1 = state_23484;
if(cljs.core.truth_(inst_23469)){
var statearr_23490_23512 = state_23484__$1;
(statearr_23490_23512[(1)] = (8));

} else {
var statearr_23491_23513 = state_23484__$1;
(statearr_23491_23513[(1)] = (9));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_23485 === (3))){
var inst_23482 = (state_23484[(2)]);
var state_23484__$1 = state_23484;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23484__$1,inst_23482);
} else {
if((state_val_23485 === (12))){
var state_23484__$1 = state_23484;
var statearr_23492_23514 = state_23484__$1;
(statearr_23492_23514[(2)] = null);

(statearr_23492_23514[(1)] = (13));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23485 === (2))){
var inst_23461 = (state_23484[(7)]);
var state_23484__$1 = state_23484;
if(cljs.core.truth_(inst_23461)){
var statearr_23493_23515 = state_23484__$1;
(statearr_23493_23515[(1)] = (4));

} else {
var statearr_23494_23516 = state_23484__$1;
(statearr_23494_23516[(1)] = (5));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_23485 === (11))){
var inst_23475 = cljs.core.async.close_BANG_(ch);
var state_23484__$1 = state_23484;
var statearr_23495_23517 = state_23484__$1;
(statearr_23495_23517[(2)] = inst_23475);

(statearr_23495_23517[(1)] = (13));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23485 === (9))){
var state_23484__$1 = state_23484;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23496_23518 = state_23484__$1;
(statearr_23496_23518[(1)] = (11));

} else {
var statearr_23497_23519 = state_23484__$1;
(statearr_23497_23519[(1)] = (12));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_23485 === (5))){
var inst_23461 = (state_23484[(7)]);
var state_23484__$1 = state_23484;
var statearr_23498_23520 = state_23484__$1;
(statearr_23498_23520[(2)] = inst_23461);

(statearr_23498_23520[(1)] = (6));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23485 === (10))){
var inst_23480 = (state_23484[(2)]);
var state_23484__$1 = state_23484;
var statearr_23499_23521 = state_23484__$1;
(statearr_23499_23521[(2)] = inst_23480);

(statearr_23499_23521[(1)] = (3));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23485 === (8))){
var inst_23461 = (state_23484[(7)]);
var inst_23471 = cljs.core.next(inst_23461);
var inst_23461__$1 = inst_23471;
var state_23484__$1 = (function (){var statearr_23500 = state_23484;
(statearr_23500[(7)] = inst_23461__$1);

return statearr_23500;
})();
var statearr_23501_23522 = state_23484__$1;
(statearr_23501_23522[(2)] = null);

(statearr_23501_23522[(1)] = (2));


return cljs.core.constant$keyword$44;
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
});})(c__11276__auto__))
;
return ((function (switch__11261__auto__,c__11276__auto__){
return (function() {
var state_machine__11262__auto__ = null;
var state_machine__11262__auto____0 = (function (){
var statearr_23505 = [null,null,null,null,null,null,null,null];
(statearr_23505[(0)] = state_machine__11262__auto__);

(statearr_23505[(1)] = (1));

return statearr_23505;
});
var state_machine__11262__auto____1 = (function (state_23484){
while(true){
var ret_value__11263__auto__ = (function (){try{while(true){
var result__11264__auto__ = switch__11261__auto__(state_23484);
if(cljs.core.keyword_identical_QMARK_(result__11264__auto__,cljs.core.constant$keyword$44)){
continue;
} else {
return result__11264__auto__;
}
break;
}
}catch (e23506){if((e23506 instanceof Object)){
var ex__11265__auto__ = e23506;
var statearr_23507_23523 = state_23484;
(statearr_23507_23523[(5)] = ex__11265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23484);

return cljs.core.constant$keyword$44;
} else {
throw e23506;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11263__auto__,cljs.core.constant$keyword$44)){
var G__23524 = state_23484;
state_23484 = G__23524;
continue;
} else {
return ret_value__11263__auto__;
}
break;
}
});
state_machine__11262__auto__ = function(state_23484){
switch(arguments.length){
case 0:
return state_machine__11262__auto____0.call(this);
case 1:
return state_machine__11262__auto____1.call(this,state_23484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11262__auto____0;
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11262__auto____1;
return state_machine__11262__auto__;
})()
;})(switch__11261__auto__,c__11276__auto__))
})();
var state__11278__auto__ = (function (){var statearr_23508 = (function (){return (f__11277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11277__auto__.cljs$core$IFn$_invoke$arity$0() : f__11277__auto__.call(null));
})();
(statearr_23508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11276__auto__);

return statearr_23508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11278__auto__);
});})(c__11276__auto__))
);

return c__11276__auto__;
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

cljs.core.async.Mux = (function (){var obj23526 = {};
return obj23526;
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
return (function (){var or__3630__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__23530 = x__4274__auto__;
return goog.typeOf(G__23530);
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


cljs.core.async.Mult = (function (){var obj23532 = {};
return obj23532;
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
return (function (){var or__3630__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__23536 = x__4274__auto__;
return goog.typeOf(G__23536);
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
return (function (){var or__3630__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__23540 = x__4274__auto__;
return goog.typeOf(G__23540);
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
return (function (){var or__3630__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__23544 = x__4274__auto__;
return goog.typeOf(G__23544);
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
var cs = (function (){var G__23774 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23774) : cljs.core.atom.call(null,G__23774));
})();
var m = (function (){
if(typeof cljs.core.async.t23775 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23775 = (function (cs,ch,mult,meta23776){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta23776 = meta23776;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23775.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t23775.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t23775.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t23775.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23778_24003 = self__.cs;
var G__23779_24004 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23778_24003,G__23779_24004) : cljs.core.reset_BANG_.call(null,G__23778_24003,G__23779_24004));

return null;
});})(cs))
;

cljs.core.async.t23775.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t23775.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t23775.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23777){
var self__ = this;
var _23777__$1 = this;
return self__.meta23776;
});})(cs))
;

cljs.core.async.t23775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23777,meta23776__$1){
var self__ = this;
var _23777__$1 = this;
return (new cljs.core.async.t23775(self__.cs,self__.ch,self__.mult,meta23776__$1));
});})(cs))
;

cljs.core.async.t23775.cljs$lang$type = true;

cljs.core.async.t23775.cljs$lang$ctorStr = "cljs.core.async/t23775";

cljs.core.async.t23775.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23775");
});})(cs))
;

cljs.core.async.__GT_t23775 = ((function (cs){
return (function __GT_t23775(cs__$1,ch__$1,mult__$1,meta23776){
return (new cljs.core.async.t23775(cs__$1,ch__$1,mult__$1,meta23776));
});})(cs))
;

}

return (new cljs.core.async.t23775(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,397,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,390,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__23780 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23780) : cljs.core.atom.call(null,G__23780));
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
var c__11276__auto___24005 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11276__auto___24005,cs,m,dchan,dctr,done){
return (function (){
var f__11277__auto__ = (function (){var switch__11261__auto__ = ((function (c__11276__auto___24005,cs,m,dchan,dctr,done){
return (function (state_23911){
var state_val_23912 = (state_23911[(1)]);
if((state_val_23912 === (7))){
var inst_23907 = (state_23911[(2)]);
var state_23911__$1 = state_23911;
var statearr_23913_24006 = state_23911__$1;
(statearr_23913_24006[(2)] = inst_23907);

(statearr_23913_24006[(1)] = (3));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (20))){
var inst_23812 = (state_23911[(7)]);
var inst_23822 = cljs.core.first(inst_23812);
var inst_23823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23822,(0),null);
var inst_23824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23822,(1),null);
var state_23911__$1 = (function (){var statearr_23914 = state_23911;
(statearr_23914[(8)] = inst_23823);

return statearr_23914;
})();
if(cljs.core.truth_(inst_23824)){
var statearr_23915_24007 = state_23911__$1;
(statearr_23915_24007[(1)] = (22));

} else {
var statearr_23916_24008 = state_23911__$1;
(statearr_23916_24008[(1)] = (23));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (27))){
var inst_23783 = (state_23911[(9)]);
var inst_23852 = (state_23911[(10)]);
var inst_23854 = (state_23911[(11)]);
var inst_23859 = (state_23911[(12)]);
var inst_23859__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23852,inst_23854);
var inst_23860 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23859__$1,inst_23783,done);
var state_23911__$1 = (function (){var statearr_23917 = state_23911;
(statearr_23917[(12)] = inst_23859__$1);

return statearr_23917;
})();
if(cljs.core.truth_(inst_23860)){
var statearr_23918_24009 = state_23911__$1;
(statearr_23918_24009[(1)] = (30));

} else {
var statearr_23919_24010 = state_23911__$1;
(statearr_23919_24010[(1)] = (31));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (1))){
var state_23911__$1 = state_23911;
var statearr_23920_24011 = state_23911__$1;
(statearr_23920_24011[(2)] = null);

(statearr_23920_24011[(1)] = (2));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (24))){
var inst_23812 = (state_23911[(7)]);
var inst_23829 = (state_23911[(2)]);
var inst_23830 = cljs.core.next(inst_23812);
var inst_23792 = inst_23830;
var inst_23793 = null;
var inst_23794 = (0);
var inst_23795 = (0);
var state_23911__$1 = (function (){var statearr_23921 = state_23911;
(statearr_23921[(13)] = inst_23795);

(statearr_23921[(14)] = inst_23829);

(statearr_23921[(15)] = inst_23794);

(statearr_23921[(16)] = inst_23793);

(statearr_23921[(17)] = inst_23792);

return statearr_23921;
})();
var statearr_23922_24012 = state_23911__$1;
(statearr_23922_24012[(2)] = null);

(statearr_23922_24012[(1)] = (8));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (39))){
var state_23911__$1 = state_23911;
var statearr_23926_24013 = state_23911__$1;
(statearr_23926_24013[(2)] = null);

(statearr_23926_24013[(1)] = (41));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (4))){
var inst_23783 = (state_23911[(9)]);
var inst_23783__$1 = (state_23911[(2)]);
var inst_23784 = (inst_23783__$1 == null);
var state_23911__$1 = (function (){var statearr_23927 = state_23911;
(statearr_23927[(9)] = inst_23783__$1);

return statearr_23927;
})();
if(cljs.core.truth_(inst_23784)){
var statearr_23928_24014 = state_23911__$1;
(statearr_23928_24014[(1)] = (5));

} else {
var statearr_23929_24015 = state_23911__$1;
(statearr_23929_24015[(1)] = (6));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (15))){
var inst_23795 = (state_23911[(13)]);
var inst_23794 = (state_23911[(15)]);
var inst_23793 = (state_23911[(16)]);
var inst_23792 = (state_23911[(17)]);
var inst_23808 = (state_23911[(2)]);
var inst_23809 = (inst_23795 + (1));
var tmp23923 = inst_23794;
var tmp23924 = inst_23793;
var tmp23925 = inst_23792;
var inst_23792__$1 = tmp23925;
var inst_23793__$1 = tmp23924;
var inst_23794__$1 = tmp23923;
var inst_23795__$1 = inst_23809;
var state_23911__$1 = (function (){var statearr_23930 = state_23911;
(statearr_23930[(13)] = inst_23795__$1);

(statearr_23930[(18)] = inst_23808);

(statearr_23930[(15)] = inst_23794__$1);

(statearr_23930[(16)] = inst_23793__$1);

(statearr_23930[(17)] = inst_23792__$1);

return statearr_23930;
})();
var statearr_23931_24016 = state_23911__$1;
(statearr_23931_24016[(2)] = null);

(statearr_23931_24016[(1)] = (8));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (21))){
var inst_23833 = (state_23911[(2)]);
var state_23911__$1 = state_23911;
var statearr_23935_24017 = state_23911__$1;
(statearr_23935_24017[(2)] = inst_23833);

(statearr_23935_24017[(1)] = (18));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (31))){
var inst_23859 = (state_23911[(12)]);
var inst_23863 = done(null);
var inst_23864 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23859);
var state_23911__$1 = (function (){var statearr_23936 = state_23911;
(statearr_23936[(19)] = inst_23863);

return statearr_23936;
})();
var statearr_23937_24018 = state_23911__$1;
(statearr_23937_24018[(2)] = inst_23864);

(statearr_23937_24018[(1)] = (32));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (32))){
var inst_23851 = (state_23911[(20)]);
var inst_23852 = (state_23911[(10)]);
var inst_23854 = (state_23911[(11)]);
var inst_23853 = (state_23911[(21)]);
var inst_23866 = (state_23911[(2)]);
var inst_23867 = (inst_23854 + (1));
var tmp23932 = inst_23851;
var tmp23933 = inst_23852;
var tmp23934 = inst_23853;
var inst_23851__$1 = tmp23932;
var inst_23852__$1 = tmp23933;
var inst_23853__$1 = tmp23934;
var inst_23854__$1 = inst_23867;
var state_23911__$1 = (function (){var statearr_23938 = state_23911;
(statearr_23938[(20)] = inst_23851__$1);

(statearr_23938[(10)] = inst_23852__$1);

(statearr_23938[(11)] = inst_23854__$1);

(statearr_23938[(22)] = inst_23866);

(statearr_23938[(21)] = inst_23853__$1);

return statearr_23938;
})();
var statearr_23939_24019 = state_23911__$1;
(statearr_23939_24019[(2)] = null);

(statearr_23939_24019[(1)] = (25));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (40))){
var inst_23879 = (state_23911[(23)]);
var inst_23883 = done(null);
var inst_23884 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23879);
var state_23911__$1 = (function (){var statearr_23940 = state_23911;
(statearr_23940[(24)] = inst_23883);

return statearr_23940;
})();
var statearr_23941_24020 = state_23911__$1;
(statearr_23941_24020[(2)] = inst_23884);

(statearr_23941_24020[(1)] = (41));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (33))){
var inst_23870 = (state_23911[(25)]);
var inst_23872 = cljs.core.chunked_seq_QMARK_(inst_23870);
var state_23911__$1 = state_23911;
if(inst_23872){
var statearr_23942_24021 = state_23911__$1;
(statearr_23942_24021[(1)] = (36));

} else {
var statearr_23943_24022 = state_23911__$1;
(statearr_23943_24022[(1)] = (37));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (13))){
var inst_23802 = (state_23911[(26)]);
var inst_23805 = cljs.core.async.close_BANG_(inst_23802);
var state_23911__$1 = state_23911;
var statearr_23944_24023 = state_23911__$1;
(statearr_23944_24023[(2)] = inst_23805);

(statearr_23944_24023[(1)] = (15));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (22))){
var inst_23823 = (state_23911[(8)]);
var inst_23826 = cljs.core.async.close_BANG_(inst_23823);
var state_23911__$1 = state_23911;
var statearr_23945_24024 = state_23911__$1;
(statearr_23945_24024[(2)] = inst_23826);

(statearr_23945_24024[(1)] = (24));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (36))){
var inst_23870 = (state_23911[(25)]);
var inst_23874 = cljs.core.chunk_first(inst_23870);
var inst_23875 = cljs.core.chunk_rest(inst_23870);
var inst_23876 = cljs.core.count(inst_23874);
var inst_23851 = inst_23875;
var inst_23852 = inst_23874;
var inst_23853 = inst_23876;
var inst_23854 = (0);
var state_23911__$1 = (function (){var statearr_23946 = state_23911;
(statearr_23946[(20)] = inst_23851);

(statearr_23946[(10)] = inst_23852);

(statearr_23946[(11)] = inst_23854);

(statearr_23946[(21)] = inst_23853);

return statearr_23946;
})();
var statearr_23947_24025 = state_23911__$1;
(statearr_23947_24025[(2)] = null);

(statearr_23947_24025[(1)] = (25));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (41))){
var inst_23870 = (state_23911[(25)]);
var inst_23886 = (state_23911[(2)]);
var inst_23887 = cljs.core.next(inst_23870);
var inst_23851 = inst_23887;
var inst_23852 = null;
var inst_23853 = (0);
var inst_23854 = (0);
var state_23911__$1 = (function (){var statearr_23948 = state_23911;
(statearr_23948[(20)] = inst_23851);

(statearr_23948[(27)] = inst_23886);

(statearr_23948[(10)] = inst_23852);

(statearr_23948[(11)] = inst_23854);

(statearr_23948[(21)] = inst_23853);

return statearr_23948;
})();
var statearr_23949_24026 = state_23911__$1;
(statearr_23949_24026[(2)] = null);

(statearr_23949_24026[(1)] = (25));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (43))){
var state_23911__$1 = state_23911;
var statearr_23950_24027 = state_23911__$1;
(statearr_23950_24027[(2)] = null);

(statearr_23950_24027[(1)] = (44));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (29))){
var inst_23895 = (state_23911[(2)]);
var state_23911__$1 = state_23911;
var statearr_23951_24028 = state_23911__$1;
(statearr_23951_24028[(2)] = inst_23895);

(statearr_23951_24028[(1)] = (26));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (44))){
var inst_23904 = (state_23911[(2)]);
var state_23911__$1 = (function (){var statearr_23952 = state_23911;
(statearr_23952[(28)] = inst_23904);

return statearr_23952;
})();
var statearr_23953_24029 = state_23911__$1;
(statearr_23953_24029[(2)] = null);

(statearr_23953_24029[(1)] = (2));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (6))){
var inst_23843 = (state_23911[(29)]);
var inst_23842 = (function (){var G__23954 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23954) : cljs.core.deref.call(null,G__23954));
})();
var inst_23843__$1 = cljs.core.keys(inst_23842);
var inst_23844 = cljs.core.count(inst_23843__$1);
var inst_23845 = (function (){var G__23955 = dctr;
var G__23956 = inst_23844;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23955,G__23956) : cljs.core.reset_BANG_.call(null,G__23955,G__23956));
})();
var inst_23850 = cljs.core.seq(inst_23843__$1);
var inst_23851 = inst_23850;
var inst_23852 = null;
var inst_23853 = (0);
var inst_23854 = (0);
var state_23911__$1 = (function (){var statearr_23957 = state_23911;
(statearr_23957[(20)] = inst_23851);

(statearr_23957[(30)] = inst_23845);

(statearr_23957[(10)] = inst_23852);

(statearr_23957[(29)] = inst_23843__$1);

(statearr_23957[(11)] = inst_23854);

(statearr_23957[(21)] = inst_23853);

return statearr_23957;
})();
var statearr_23958_24030 = state_23911__$1;
(statearr_23958_24030[(2)] = null);

(statearr_23958_24030[(1)] = (25));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (28))){
var inst_23851 = (state_23911[(20)]);
var inst_23870 = (state_23911[(25)]);
var inst_23870__$1 = cljs.core.seq(inst_23851);
var state_23911__$1 = (function (){var statearr_23959 = state_23911;
(statearr_23959[(25)] = inst_23870__$1);

return statearr_23959;
})();
if(inst_23870__$1){
var statearr_23960_24031 = state_23911__$1;
(statearr_23960_24031[(1)] = (33));

} else {
var statearr_23961_24032 = state_23911__$1;
(statearr_23961_24032[(1)] = (34));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (25))){
var inst_23854 = (state_23911[(11)]);
var inst_23853 = (state_23911[(21)]);
var inst_23856 = (inst_23854 < inst_23853);
var inst_23857 = inst_23856;
var state_23911__$1 = state_23911;
if(cljs.core.truth_(inst_23857)){
var statearr_23962_24033 = state_23911__$1;
(statearr_23962_24033[(1)] = (27));

} else {
var statearr_23963_24034 = state_23911__$1;
(statearr_23963_24034[(1)] = (28));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (34))){
var state_23911__$1 = state_23911;
var statearr_23964_24035 = state_23911__$1;
(statearr_23964_24035[(2)] = null);

(statearr_23964_24035[(1)] = (35));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (17))){
var state_23911__$1 = state_23911;
var statearr_23965_24036 = state_23911__$1;
(statearr_23965_24036[(2)] = null);

(statearr_23965_24036[(1)] = (18));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (3))){
var inst_23909 = (state_23911[(2)]);
var state_23911__$1 = state_23911;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23911__$1,inst_23909);
} else {
if((state_val_23912 === (12))){
var inst_23838 = (state_23911[(2)]);
var state_23911__$1 = state_23911;
var statearr_23966_24037 = state_23911__$1;
(statearr_23966_24037[(2)] = inst_23838);

(statearr_23966_24037[(1)] = (9));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (2))){
var state_23911__$1 = state_23911;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23911__$1,(4),ch);
} else {
if((state_val_23912 === (23))){
var state_23911__$1 = state_23911;
var statearr_23967_24038 = state_23911__$1;
(statearr_23967_24038[(2)] = null);

(statearr_23967_24038[(1)] = (24));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (35))){
var inst_23893 = (state_23911[(2)]);
var state_23911__$1 = state_23911;
var statearr_23968_24039 = state_23911__$1;
(statearr_23968_24039[(2)] = inst_23893);

(statearr_23968_24039[(1)] = (29));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (19))){
var inst_23812 = (state_23911[(7)]);
var inst_23816 = cljs.core.chunk_first(inst_23812);
var inst_23817 = cljs.core.chunk_rest(inst_23812);
var inst_23818 = cljs.core.count(inst_23816);
var inst_23792 = inst_23817;
var inst_23793 = inst_23816;
var inst_23794 = inst_23818;
var inst_23795 = (0);
var state_23911__$1 = (function (){var statearr_23969 = state_23911;
(statearr_23969[(13)] = inst_23795);

(statearr_23969[(15)] = inst_23794);

(statearr_23969[(16)] = inst_23793);

(statearr_23969[(17)] = inst_23792);

return statearr_23969;
})();
var statearr_23970_24040 = state_23911__$1;
(statearr_23970_24040[(2)] = null);

(statearr_23970_24040[(1)] = (8));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (11))){
var inst_23812 = (state_23911[(7)]);
var inst_23792 = (state_23911[(17)]);
var inst_23812__$1 = cljs.core.seq(inst_23792);
var state_23911__$1 = (function (){var statearr_23971 = state_23911;
(statearr_23971[(7)] = inst_23812__$1);

return statearr_23971;
})();
if(inst_23812__$1){
var statearr_23972_24041 = state_23911__$1;
(statearr_23972_24041[(1)] = (16));

} else {
var statearr_23973_24042 = state_23911__$1;
(statearr_23973_24042[(1)] = (17));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (9))){
var inst_23840 = (state_23911[(2)]);
var state_23911__$1 = state_23911;
var statearr_23974_24043 = state_23911__$1;
(statearr_23974_24043[(2)] = inst_23840);

(statearr_23974_24043[(1)] = (7));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (5))){
var inst_23790 = (function (){var G__23975 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23975) : cljs.core.deref.call(null,G__23975));
})();
var inst_23791 = cljs.core.seq(inst_23790);
var inst_23792 = inst_23791;
var inst_23793 = null;
var inst_23794 = (0);
var inst_23795 = (0);
var state_23911__$1 = (function (){var statearr_23976 = state_23911;
(statearr_23976[(13)] = inst_23795);

(statearr_23976[(15)] = inst_23794);

(statearr_23976[(16)] = inst_23793);

(statearr_23976[(17)] = inst_23792);

return statearr_23976;
})();
var statearr_23977_24044 = state_23911__$1;
(statearr_23977_24044[(2)] = null);

(statearr_23977_24044[(1)] = (8));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (14))){
var state_23911__$1 = state_23911;
var statearr_23978_24045 = state_23911__$1;
(statearr_23978_24045[(2)] = null);

(statearr_23978_24045[(1)] = (15));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (45))){
var inst_23901 = (state_23911[(2)]);
var state_23911__$1 = state_23911;
var statearr_23979_24046 = state_23911__$1;
(statearr_23979_24046[(2)] = inst_23901);

(statearr_23979_24046[(1)] = (44));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (26))){
var inst_23843 = (state_23911[(29)]);
var inst_23897 = (state_23911[(2)]);
var inst_23898 = cljs.core.seq(inst_23843);
var state_23911__$1 = (function (){var statearr_23980 = state_23911;
(statearr_23980[(31)] = inst_23897);

return statearr_23980;
})();
if(inst_23898){
var statearr_23981_24047 = state_23911__$1;
(statearr_23981_24047[(1)] = (42));

} else {
var statearr_23982_24048 = state_23911__$1;
(statearr_23982_24048[(1)] = (43));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (16))){
var inst_23812 = (state_23911[(7)]);
var inst_23814 = cljs.core.chunked_seq_QMARK_(inst_23812);
var state_23911__$1 = state_23911;
if(inst_23814){
var statearr_23983_24049 = state_23911__$1;
(statearr_23983_24049[(1)] = (19));

} else {
var statearr_23984_24050 = state_23911__$1;
(statearr_23984_24050[(1)] = (20));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (38))){
var inst_23890 = (state_23911[(2)]);
var state_23911__$1 = state_23911;
var statearr_23985_24051 = state_23911__$1;
(statearr_23985_24051[(2)] = inst_23890);

(statearr_23985_24051[(1)] = (35));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (30))){
var state_23911__$1 = state_23911;
var statearr_23986_24052 = state_23911__$1;
(statearr_23986_24052[(2)] = null);

(statearr_23986_24052[(1)] = (32));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (10))){
var inst_23795 = (state_23911[(13)]);
var inst_23793 = (state_23911[(16)]);
var inst_23801 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23793,inst_23795);
var inst_23802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23801,(0),null);
var inst_23803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23801,(1),null);
var state_23911__$1 = (function (){var statearr_23987 = state_23911;
(statearr_23987[(26)] = inst_23802);

return statearr_23987;
})();
if(cljs.core.truth_(inst_23803)){
var statearr_23988_24053 = state_23911__$1;
(statearr_23988_24053[(1)] = (13));

} else {
var statearr_23989_24054 = state_23911__$1;
(statearr_23989_24054[(1)] = (14));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (18))){
var inst_23836 = (state_23911[(2)]);
var state_23911__$1 = state_23911;
var statearr_23990_24055 = state_23911__$1;
(statearr_23990_24055[(2)] = inst_23836);

(statearr_23990_24055[(1)] = (12));


return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (42))){
var state_23911__$1 = state_23911;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23911__$1,(45),dchan);
} else {
if((state_val_23912 === (37))){
var inst_23783 = (state_23911[(9)]);
var inst_23879 = (state_23911[(23)]);
var inst_23870 = (state_23911[(25)]);
var inst_23879__$1 = cljs.core.first(inst_23870);
var inst_23880 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23879__$1,inst_23783,done);
var state_23911__$1 = (function (){var statearr_23991 = state_23911;
(statearr_23991[(23)] = inst_23879__$1);

return statearr_23991;
})();
if(cljs.core.truth_(inst_23880)){
var statearr_23992_24056 = state_23911__$1;
(statearr_23992_24056[(1)] = (39));

} else {
var statearr_23993_24057 = state_23911__$1;
(statearr_23993_24057[(1)] = (40));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_23912 === (8))){
var inst_23795 = (state_23911[(13)]);
var inst_23794 = (state_23911[(15)]);
var inst_23797 = (inst_23795 < inst_23794);
var inst_23798 = inst_23797;
var state_23911__$1 = state_23911;
if(cljs.core.truth_(inst_23798)){
var statearr_23994_24058 = state_23911__$1;
(statearr_23994_24058[(1)] = (10));

} else {
var statearr_23995_24059 = state_23911__$1;
(statearr_23995_24059[(1)] = (11));

}

return cljs.core.constant$keyword$44;
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
});})(c__11276__auto___24005,cs,m,dchan,dctr,done))
;
return ((function (switch__11261__auto__,c__11276__auto___24005,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11262__auto__ = null;
var state_machine__11262__auto____0 = (function (){
var statearr_23999 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23999[(0)] = state_machine__11262__auto__);

(statearr_23999[(1)] = (1));

return statearr_23999;
});
var state_machine__11262__auto____1 = (function (state_23911){
while(true){
var ret_value__11263__auto__ = (function (){try{while(true){
var result__11264__auto__ = switch__11261__auto__(state_23911);
if(cljs.core.keyword_identical_QMARK_(result__11264__auto__,cljs.core.constant$keyword$44)){
continue;
} else {
return result__11264__auto__;
}
break;
}
}catch (e24000){if((e24000 instanceof Object)){
var ex__11265__auto__ = e24000;
var statearr_24001_24060 = state_23911;
(statearr_24001_24060[(5)] = ex__11265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23911);

return cljs.core.constant$keyword$44;
} else {
throw e24000;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11263__auto__,cljs.core.constant$keyword$44)){
var G__24061 = state_23911;
state_23911 = G__24061;
continue;
} else {
return ret_value__11263__auto__;
}
break;
}
});
state_machine__11262__auto__ = function(state_23911){
switch(arguments.length){
case 0:
return state_machine__11262__auto____0.call(this);
case 1:
return state_machine__11262__auto____1.call(this,state_23911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11262__auto____0;
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11262__auto____1;
return state_machine__11262__auto__;
})()
;})(switch__11261__auto__,c__11276__auto___24005,cs,m,dchan,dctr,done))
})();
var state__11278__auto__ = (function (){var statearr_24002 = (function (){return (f__11277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11277__auto__.cljs$core$IFn$_invoke$arity$0() : f__11277__auto__.call(null));
})();
(statearr_24002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11276__auto___24005);

return statearr_24002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11278__auto__);
});})(c__11276__auto___24005,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj24066 = {};
return obj24066;
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
return (function (){var or__3630__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__24070 = x__4274__auto__;
return goog.typeOf(G__24070);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__24074 = x__4274__auto__;
return goog.typeOf(G__24074);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__24078 = x__4274__auto__;
return goog.typeOf(G__24078);
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
return (function (){var or__3630__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__24082 = x__4274__auto__;
return goog.typeOf(G__24082);
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
return (function (){var or__3630__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__24086 = x__4274__auto__;
return goog.typeOf(G__24086);
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__24087){
var map__24093 = p__24087;
var map__24093__$1 = ((cljs.core.seq_QMARK_(map__24093))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24093):map__24093);
var opts = map__24093__$1;
var statearr_24094_24098 = state;
(statearr_24094_24098[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__24093,map__24093__$1,opts){
return (function (val){
var statearr_24095_24099 = state;
(statearr_24095_24099[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__24093,map__24093__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_24096_24100 = state;
(statearr_24096_24100[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__24097 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24097) : cljs.core.deref.call(null,G__24097));
})());


return cljs.core.constant$keyword$44;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__24087 = null;
if (arguments.length > 3) {
  p__24087 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__24087);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__24101){
var state = cljs.core.first(arglist__24101);
arglist__24101 = cljs.core.next(arglist__24101);
var cont_block = cljs.core.first(arglist__24101);
arglist__24101 = cljs.core.next(arglist__24101);
var ports = cljs.core.first(arglist__24101);
var p__24087 = cljs.core.rest(arglist__24101);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__24087);
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
var cs = (function (){var G__24235 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24235) : cljs.core.atom.call(null,G__24235));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$53,null,cljs.core.constant$keyword$54,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$55);
var solo_mode = (function (){var G__24236 = cljs.core.constant$keyword$54;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24236) : cljs.core.atom.call(null,G__24236));
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
if(cljs.core.truth_((function (){var G__24237 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__24237) : attr.call(null,G__24237));
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
var chs = (function (){var G__24238 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24238) : cljs.core.deref.call(null,G__24238));
})();
var mode = (function (){var G__24239 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24239) : cljs.core.deref.call(null,G__24239));
})();
var solos = pick(cljs.core.constant$keyword$55,chs);
var pauses = pick(cljs.core.constant$keyword$53,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$56,solos,cljs.core.constant$keyword$57,pick(cljs.core.constant$keyword$54,chs),cljs.core.constant$keyword$58,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$53)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t24240 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24240 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24241){
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
this.meta24241 = meta24241;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24240.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t24240.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24240.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24240.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__24243_24368 = self__.cs;
var G__24244_24369 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24243_24368,G__24244_24369) : cljs.core.reset_BANG_.call(null,G__24243_24368,G__24244_24369));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24240.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24240.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__24245 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__24245) : self__.solo_modes.call(null,G__24245));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__24246_24370 = self__.solo_mode;
var G__24247_24371 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24246_24370,G__24247_24371) : cljs.core.reset_BANG_.call(null,G__24246_24370,G__24247_24371));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24240.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24240.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24240.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24242){
var self__ = this;
var _24242__$1 = this;
return self__.meta24241;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24242,meta24241__$1){
var self__ = this;
var _24242__$1 = this;
return (new cljs.core.async.t24240(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24241__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24240.cljs$lang$type = true;

cljs.core.async.t24240.cljs$lang$ctorStr = "cljs.core.async/t24240";

cljs.core.async.t24240.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24240");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t24240 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24240(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24241){
return (new cljs.core.async.t24240(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24241));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t24240(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,25,cljs.core.constant$keyword$9,510,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,499,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
;
var c__11276__auto___24372 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11276__auto___24372,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11277__auto__ = (function (){var switch__11261__auto__ = ((function (c__11276__auto___24372,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24319){
var state_val_24320 = (state_24319[(1)]);
if((state_val_24320 === (7))){
var inst_24261 = (state_24319[(7)]);
var inst_24266 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24261);
var state_24319__$1 = state_24319;
var statearr_24321_24373 = state_24319__$1;
(statearr_24321_24373[(2)] = inst_24266);

(statearr_24321_24373[(1)] = (9));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24320 === (20))){
var inst_24276 = (state_24319[(8)]);
var state_24319__$1 = state_24319;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24319__$1,(23),out,inst_24276);
} else {
if((state_val_24320 === (1))){
var inst_24251 = (state_24319[(9)]);
var inst_24251__$1 = calc_state();
var inst_24252 = cljs.core.seq_QMARK_(inst_24251__$1);
var state_24319__$1 = (function (){var statearr_24322 = state_24319;
(statearr_24322[(9)] = inst_24251__$1);

return statearr_24322;
})();
if(inst_24252){
var statearr_24323_24374 = state_24319__$1;
(statearr_24323_24374[(1)] = (2));

} else {
var statearr_24324_24375 = state_24319__$1;
(statearr_24324_24375[(1)] = (3));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_24320 === (24))){
var inst_24269 = (state_24319[(10)]);
var inst_24261 = inst_24269;
var state_24319__$1 = (function (){var statearr_24325 = state_24319;
(statearr_24325[(7)] = inst_24261);

return statearr_24325;
})();
var statearr_24326_24376 = state_24319__$1;
(statearr_24326_24376[(2)] = null);

(statearr_24326_24376[(1)] = (5));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24320 === (4))){
var inst_24251 = (state_24319[(9)]);
var inst_24257 = (state_24319[(2)]);
var inst_24258 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24257,cljs.core.constant$keyword$58);
var inst_24259 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24257,cljs.core.constant$keyword$57);
var inst_24260 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24257,cljs.core.constant$keyword$56);
var inst_24261 = inst_24251;
var state_24319__$1 = (function (){var statearr_24327 = state_24319;
(statearr_24327[(11)] = inst_24259);

(statearr_24327[(7)] = inst_24261);

(statearr_24327[(12)] = inst_24260);

(statearr_24327[(13)] = inst_24258);

return statearr_24327;
})();
var statearr_24328_24377 = state_24319__$1;
(statearr_24328_24377[(2)] = null);

(statearr_24328_24377[(1)] = (5));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24320 === (15))){
var state_24319__$1 = state_24319;
var statearr_24329_24378 = state_24319__$1;
(statearr_24329_24378[(2)] = null);

(statearr_24329_24378[(1)] = (16));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24320 === (21))){
var inst_24269 = (state_24319[(10)]);
var inst_24261 = inst_24269;
var state_24319__$1 = (function (){var statearr_24330 = state_24319;
(statearr_24330[(7)] = inst_24261);

return statearr_24330;
})();
var statearr_24331_24379 = state_24319__$1;
(statearr_24331_24379[(2)] = null);

(statearr_24331_24379[(1)] = (5));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24320 === (13))){
var inst_24315 = (state_24319[(2)]);
var state_24319__$1 = state_24319;
var statearr_24332_24380 = state_24319__$1;
(statearr_24332_24380[(2)] = inst_24315);

(statearr_24332_24380[(1)] = (6));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24320 === (22))){
var inst_24313 = (state_24319[(2)]);
var state_24319__$1 = state_24319;
var statearr_24333_24381 = state_24319__$1;
(statearr_24333_24381[(2)] = inst_24313);

(statearr_24333_24381[(1)] = (13));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24320 === (6))){
var inst_24317 = (state_24319[(2)]);
var state_24319__$1 = state_24319;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24319__$1,inst_24317);
} else {
if((state_val_24320 === (25))){
var state_24319__$1 = state_24319;
var statearr_24334_24382 = state_24319__$1;
(statearr_24334_24382[(2)] = null);

(statearr_24334_24382[(1)] = (26));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24320 === (17))){
var inst_24292 = (state_24319[(14)]);
var state_24319__$1 = state_24319;
var statearr_24335_24383 = state_24319__$1;
(statearr_24335_24383[(2)] = inst_24292);

(statearr_24335_24383[(1)] = (19));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24320 === (3))){
var inst_24251 = (state_24319[(9)]);
var state_24319__$1 = state_24319;
var statearr_24336_24384 = state_24319__$1;
(statearr_24336_24384[(2)] = inst_24251);

(statearr_24336_24384[(1)] = (4));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24320 === (12))){
var inst_24272 = (state_24319[(15)]);
var inst_24277 = (state_24319[(16)]);
var inst_24292 = (state_24319[(14)]);
var inst_24292__$1 = (function (){var G__24337 = inst_24277;
return (inst_24272.cljs$core$IFn$_invoke$arity$1 ? inst_24272.cljs$core$IFn$_invoke$arity$1(G__24337) : inst_24272.call(null,G__24337));
})();
var state_24319__$1 = (function (){var statearr_24338 = state_24319;
(statearr_24338[(14)] = inst_24292__$1);

return statearr_24338;
})();
if(cljs.core.truth_(inst_24292__$1)){
var statearr_24339_24385 = state_24319__$1;
(statearr_24339_24385[(1)] = (17));

} else {
var statearr_24340_24386 = state_24319__$1;
(statearr_24340_24386[(1)] = (18));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_24320 === (2))){
var inst_24251 = (state_24319[(9)]);
var inst_24254 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24251);
var state_24319__$1 = state_24319;
var statearr_24341_24387 = state_24319__$1;
(statearr_24341_24387[(2)] = inst_24254);

(statearr_24341_24387[(1)] = (4));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24320 === (23))){
var inst_24304 = (state_24319[(2)]);
var state_24319__$1 = state_24319;
if(cljs.core.truth_(inst_24304)){
var statearr_24342_24388 = state_24319__$1;
(statearr_24342_24388[(1)] = (24));

} else {
var statearr_24343_24389 = state_24319__$1;
(statearr_24343_24389[(1)] = (25));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_24320 === (19))){
var inst_24301 = (state_24319[(2)]);
var state_24319__$1 = state_24319;
if(cljs.core.truth_(inst_24301)){
var statearr_24344_24390 = state_24319__$1;
(statearr_24344_24390[(1)] = (20));

} else {
var statearr_24345_24391 = state_24319__$1;
(statearr_24345_24391[(1)] = (21));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_24320 === (11))){
var inst_24276 = (state_24319[(8)]);
var inst_24282 = (inst_24276 == null);
var state_24319__$1 = state_24319;
if(cljs.core.truth_(inst_24282)){
var statearr_24346_24392 = state_24319__$1;
(statearr_24346_24392[(1)] = (14));

} else {
var statearr_24347_24393 = state_24319__$1;
(statearr_24347_24393[(1)] = (15));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_24320 === (9))){
var inst_24269 = (state_24319[(10)]);
var inst_24269__$1 = (state_24319[(2)]);
var inst_24270 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24269__$1,cljs.core.constant$keyword$58);
var inst_24271 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24269__$1,cljs.core.constant$keyword$57);
var inst_24272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24269__$1,cljs.core.constant$keyword$56);
var state_24319__$1 = (function (){var statearr_24348 = state_24319;
(statearr_24348[(10)] = inst_24269__$1);

(statearr_24348[(15)] = inst_24272);

(statearr_24348[(17)] = inst_24271);

return statearr_24348;
})();
return cljs.core.async.ioc_alts_BANG_(state_24319__$1,(10),inst_24270);
} else {
if((state_val_24320 === (5))){
var inst_24261 = (state_24319[(7)]);
var inst_24264 = cljs.core.seq_QMARK_(inst_24261);
var state_24319__$1 = state_24319;
if(inst_24264){
var statearr_24349_24394 = state_24319__$1;
(statearr_24349_24394[(1)] = (7));

} else {
var statearr_24350_24395 = state_24319__$1;
(statearr_24350_24395[(1)] = (8));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_24320 === (14))){
var inst_24277 = (state_24319[(16)]);
var inst_24284 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_24277);
var state_24319__$1 = state_24319;
var statearr_24351_24396 = state_24319__$1;
(statearr_24351_24396[(2)] = inst_24284);

(statearr_24351_24396[(1)] = (16));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24320 === (26))){
var inst_24309 = (state_24319[(2)]);
var state_24319__$1 = state_24319;
var statearr_24352_24397 = state_24319__$1;
(statearr_24352_24397[(2)] = inst_24309);

(statearr_24352_24397[(1)] = (22));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24320 === (16))){
var inst_24287 = (state_24319[(2)]);
var inst_24288 = calc_state();
var inst_24261 = inst_24288;
var state_24319__$1 = (function (){var statearr_24353 = state_24319;
(statearr_24353[(7)] = inst_24261);

(statearr_24353[(18)] = inst_24287);

return statearr_24353;
})();
var statearr_24354_24398 = state_24319__$1;
(statearr_24354_24398[(2)] = null);

(statearr_24354_24398[(1)] = (5));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24320 === (10))){
var inst_24276 = (state_24319[(8)]);
var inst_24277 = (state_24319[(16)]);
var inst_24275 = (state_24319[(2)]);
var inst_24276__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24275,(0),null);
var inst_24277__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24275,(1),null);
var inst_24278 = (inst_24276__$1 == null);
var inst_24279 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24277__$1,change);
var inst_24280 = (inst_24278) || (inst_24279);
var state_24319__$1 = (function (){var statearr_24355 = state_24319;
(statearr_24355[(8)] = inst_24276__$1);

(statearr_24355[(16)] = inst_24277__$1);

return statearr_24355;
})();
if(cljs.core.truth_(inst_24280)){
var statearr_24356_24399 = state_24319__$1;
(statearr_24356_24399[(1)] = (11));

} else {
var statearr_24357_24400 = state_24319__$1;
(statearr_24357_24400[(1)] = (12));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_24320 === (18))){
var inst_24272 = (state_24319[(15)]);
var inst_24277 = (state_24319[(16)]);
var inst_24271 = (state_24319[(17)]);
var inst_24296 = cljs.core.empty_QMARK_(inst_24272);
var inst_24297 = (function (){var G__24358 = inst_24277;
return (inst_24271.cljs$core$IFn$_invoke$arity$1 ? inst_24271.cljs$core$IFn$_invoke$arity$1(G__24358) : inst_24271.call(null,G__24358));
})();
var inst_24298 = cljs.core.not(inst_24297);
var inst_24299 = (inst_24296) && (inst_24298);
var state_24319__$1 = state_24319;
var statearr_24359_24401 = state_24319__$1;
(statearr_24359_24401[(2)] = inst_24299);

(statearr_24359_24401[(1)] = (19));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24320 === (8))){
var inst_24261 = (state_24319[(7)]);
var state_24319__$1 = state_24319;
var statearr_24360_24402 = state_24319__$1;
(statearr_24360_24402[(2)] = inst_24261);

(statearr_24360_24402[(1)] = (9));


return cljs.core.constant$keyword$44;
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
});})(c__11276__auto___24372,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__11261__auto__,c__11276__auto___24372,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11262__auto__ = null;
var state_machine__11262__auto____0 = (function (){
var statearr_24364 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24364[(0)] = state_machine__11262__auto__);

(statearr_24364[(1)] = (1));

return statearr_24364;
});
var state_machine__11262__auto____1 = (function (state_24319){
while(true){
var ret_value__11263__auto__ = (function (){try{while(true){
var result__11264__auto__ = switch__11261__auto__(state_24319);
if(cljs.core.keyword_identical_QMARK_(result__11264__auto__,cljs.core.constant$keyword$44)){
continue;
} else {
return result__11264__auto__;
}
break;
}
}catch (e24365){if((e24365 instanceof Object)){
var ex__11265__auto__ = e24365;
var statearr_24366_24403 = state_24319;
(statearr_24366_24403[(5)] = ex__11265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24319);

return cljs.core.constant$keyword$44;
} else {
throw e24365;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11263__auto__,cljs.core.constant$keyword$44)){
var G__24404 = state_24319;
state_24319 = G__24404;
continue;
} else {
return ret_value__11263__auto__;
}
break;
}
});
state_machine__11262__auto__ = function(state_24319){
switch(arguments.length){
case 0:
return state_machine__11262__auto____0.call(this);
case 1:
return state_machine__11262__auto____1.call(this,state_24319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11262__auto____0;
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11262__auto____1;
return state_machine__11262__auto__;
})()
;})(switch__11261__auto__,c__11276__auto___24372,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11278__auto__ = (function (){var statearr_24367 = (function (){return (f__11277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11277__auto__.cljs$core$IFn$_invoke$arity$0() : f__11277__auto__.call(null));
})();
(statearr_24367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11276__auto___24372);

return statearr_24367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11278__auto__);
});})(c__11276__auto___24372,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj24406 = {};
return obj24406;
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
return (function (){var or__3630__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__24410 = x__4274__auto__;
return goog.typeOf(G__24410);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__24414 = x__4274__auto__;
return goog.typeOf(G__24414);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__24420 = x__4274__auto__;
return goog.typeOf(G__24420);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__24422 = x__4274__auto__;
return goog.typeOf(G__24422);
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
var mults = (function (){var G__24561 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24561) : cljs.core.atom.call(null,G__24561));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__3630__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__24563 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24563) : cljs.core.deref.call(null,G__24563));
})(),topic);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3630__auto__,mults){
return (function (p1__24423_SHARP_){
if(cljs.core.truth_((function (){var G__24564 = topic;
return (p1__24423_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24423_SHARP_.cljs$core$IFn$_invoke$arity$1(G__24564) : p1__24423_SHARP_.call(null,G__24564));
})())){
return p1__24423_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24423_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__24565 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__24565) : buf_fn.call(null,G__24565));
})())));
}
});})(or__3630__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t24566 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24566 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24567){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24567 = meta24567;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24566.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t24566.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__24569 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__24569) : self__.ensure_mult.call(null,G__24569));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t24566.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__24570 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24570) : cljs.core.deref.call(null,G__24570));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t24566.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__24571 = self__.mults;
var G__24572 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24571,G__24572) : cljs.core.reset_BANG_.call(null,G__24571,G__24572));
});})(mults,ensure_mult))
;

cljs.core.async.t24566.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t24566.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24566.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t24566.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24568){
var self__ = this;
var _24568__$1 = this;
return self__.meta24567;
});})(mults,ensure_mult))
;

cljs.core.async.t24566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24568,meta24567__$1){
var self__ = this;
var _24568__$1 = this;
return (new cljs.core.async.t24566(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24567__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t24566.cljs$lang$type = true;

cljs.core.async.t24566.cljs$lang$ctorStr = "cljs.core.async/t24566";

cljs.core.async.t24566.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24566");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t24566 = ((function (mults,ensure_mult){
return (function __GT_t24566(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24567){
return (new cljs.core.async.t24566(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24567));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t24566(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,65,cljs.core.constant$keyword$9,603,cljs.core.constant$keyword$10,14,cljs.core.constant$keyword$11,591,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
;
var c__11276__auto___24695 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11276__auto___24695,mults,ensure_mult,p){
return (function (){
var f__11277__auto__ = (function (){var switch__11261__auto__ = ((function (c__11276__auto___24695,mults,ensure_mult,p){
return (function (state_24644){
var state_val_24645 = (state_24644[(1)]);
if((state_val_24645 === (7))){
var inst_24640 = (state_24644[(2)]);
var state_24644__$1 = state_24644;
var statearr_24646_24696 = state_24644__$1;
(statearr_24646_24696[(2)] = inst_24640);

(statearr_24646_24696[(1)] = (3));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24645 === (20))){
var state_24644__$1 = state_24644;
var statearr_24647_24697 = state_24644__$1;
(statearr_24647_24697[(2)] = null);

(statearr_24647_24697[(1)] = (21));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24645 === (1))){
var state_24644__$1 = state_24644;
var statearr_24648_24698 = state_24644__$1;
(statearr_24648_24698[(2)] = null);

(statearr_24648_24698[(1)] = (2));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24645 === (24))){
var inst_24623 = (state_24644[(7)]);
var inst_24632 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_24623);
var state_24644__$1 = state_24644;
var statearr_24649_24699 = state_24644__$1;
(statearr_24649_24699[(2)] = inst_24632);

(statearr_24649_24699[(1)] = (25));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24645 === (4))){
var inst_24575 = (state_24644[(8)]);
var inst_24575__$1 = (state_24644[(2)]);
var inst_24576 = (inst_24575__$1 == null);
var state_24644__$1 = (function (){var statearr_24650 = state_24644;
(statearr_24650[(8)] = inst_24575__$1);

return statearr_24650;
})();
if(cljs.core.truth_(inst_24576)){
var statearr_24651_24700 = state_24644__$1;
(statearr_24651_24700[(1)] = (5));

} else {
var statearr_24652_24701 = state_24644__$1;
(statearr_24652_24701[(1)] = (6));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_24645 === (15))){
var inst_24617 = (state_24644[(2)]);
var state_24644__$1 = state_24644;
var statearr_24653_24702 = state_24644__$1;
(statearr_24653_24702[(2)] = inst_24617);

(statearr_24653_24702[(1)] = (12));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24645 === (21))){
var inst_24637 = (state_24644[(2)]);
var state_24644__$1 = (function (){var statearr_24654 = state_24644;
(statearr_24654[(9)] = inst_24637);

return statearr_24654;
})();
var statearr_24655_24703 = state_24644__$1;
(statearr_24655_24703[(2)] = null);

(statearr_24655_24703[(1)] = (2));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24645 === (13))){
var inst_24599 = (state_24644[(10)]);
var inst_24601 = cljs.core.chunked_seq_QMARK_(inst_24599);
var state_24644__$1 = state_24644;
if(inst_24601){
var statearr_24656_24704 = state_24644__$1;
(statearr_24656_24704[(1)] = (16));

} else {
var statearr_24657_24705 = state_24644__$1;
(statearr_24657_24705[(1)] = (17));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_24645 === (22))){
var inst_24629 = (state_24644[(2)]);
var state_24644__$1 = state_24644;
if(cljs.core.truth_(inst_24629)){
var statearr_24658_24706 = state_24644__$1;
(statearr_24658_24706[(1)] = (23));

} else {
var statearr_24659_24707 = state_24644__$1;
(statearr_24659_24707[(1)] = (24));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_24645 === (6))){
var inst_24623 = (state_24644[(7)]);
var inst_24575 = (state_24644[(8)]);
var inst_24625 = (state_24644[(11)]);
var inst_24623__$1 = (function (){var G__24660 = inst_24575;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__24660) : topic_fn.call(null,G__24660));
})();
var inst_24624 = (function (){var G__24661 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24661) : cljs.core.deref.call(null,G__24661));
})();
var inst_24625__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24624,inst_24623__$1);
var state_24644__$1 = (function (){var statearr_24662 = state_24644;
(statearr_24662[(7)] = inst_24623__$1);

(statearr_24662[(11)] = inst_24625__$1);

return statearr_24662;
})();
if(cljs.core.truth_(inst_24625__$1)){
var statearr_24663_24708 = state_24644__$1;
(statearr_24663_24708[(1)] = (19));

} else {
var statearr_24664_24709 = state_24644__$1;
(statearr_24664_24709[(1)] = (20));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_24645 === (25))){
var inst_24634 = (state_24644[(2)]);
var state_24644__$1 = state_24644;
var statearr_24665_24710 = state_24644__$1;
(statearr_24665_24710[(2)] = inst_24634);

(statearr_24665_24710[(1)] = (21));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24645 === (17))){
var inst_24599 = (state_24644[(10)]);
var inst_24608 = cljs.core.first(inst_24599);
var inst_24609 = cljs.core.async.muxch_STAR_(inst_24608);
var inst_24610 = cljs.core.async.close_BANG_(inst_24609);
var inst_24611 = cljs.core.next(inst_24599);
var inst_24585 = inst_24611;
var inst_24586 = null;
var inst_24587 = (0);
var inst_24588 = (0);
var state_24644__$1 = (function (){var statearr_24666 = state_24644;
(statearr_24666[(12)] = inst_24586);

(statearr_24666[(13)] = inst_24588);

(statearr_24666[(14)] = inst_24585);

(statearr_24666[(15)] = inst_24587);

(statearr_24666[(16)] = inst_24610);

return statearr_24666;
})();
var statearr_24667_24711 = state_24644__$1;
(statearr_24667_24711[(2)] = null);

(statearr_24667_24711[(1)] = (8));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24645 === (3))){
var inst_24642 = (state_24644[(2)]);
var state_24644__$1 = state_24644;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24644__$1,inst_24642);
} else {
if((state_val_24645 === (12))){
var inst_24619 = (state_24644[(2)]);
var state_24644__$1 = state_24644;
var statearr_24668_24712 = state_24644__$1;
(statearr_24668_24712[(2)] = inst_24619);

(statearr_24668_24712[(1)] = (9));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24645 === (2))){
var state_24644__$1 = state_24644;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24644__$1,(4),ch);
} else {
if((state_val_24645 === (23))){
var state_24644__$1 = state_24644;
var statearr_24669_24713 = state_24644__$1;
(statearr_24669_24713[(2)] = null);

(statearr_24669_24713[(1)] = (25));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24645 === (19))){
var inst_24575 = (state_24644[(8)]);
var inst_24625 = (state_24644[(11)]);
var inst_24627 = cljs.core.async.muxch_STAR_(inst_24625);
var state_24644__$1 = state_24644;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24644__$1,(22),inst_24627,inst_24575);
} else {
if((state_val_24645 === (11))){
var inst_24599 = (state_24644[(10)]);
var inst_24585 = (state_24644[(14)]);
var inst_24599__$1 = cljs.core.seq(inst_24585);
var state_24644__$1 = (function (){var statearr_24670 = state_24644;
(statearr_24670[(10)] = inst_24599__$1);

return statearr_24670;
})();
if(inst_24599__$1){
var statearr_24671_24714 = state_24644__$1;
(statearr_24671_24714[(1)] = (13));

} else {
var statearr_24672_24715 = state_24644__$1;
(statearr_24672_24715[(1)] = (14));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_24645 === (9))){
var inst_24621 = (state_24644[(2)]);
var state_24644__$1 = state_24644;
var statearr_24673_24716 = state_24644__$1;
(statearr_24673_24716[(2)] = inst_24621);

(statearr_24673_24716[(1)] = (7));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24645 === (5))){
var inst_24582 = (function (){var G__24674 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24674) : cljs.core.deref.call(null,G__24674));
})();
var inst_24583 = cljs.core.vals(inst_24582);
var inst_24584 = cljs.core.seq(inst_24583);
var inst_24585 = inst_24584;
var inst_24586 = null;
var inst_24587 = (0);
var inst_24588 = (0);
var state_24644__$1 = (function (){var statearr_24675 = state_24644;
(statearr_24675[(12)] = inst_24586);

(statearr_24675[(13)] = inst_24588);

(statearr_24675[(14)] = inst_24585);

(statearr_24675[(15)] = inst_24587);

return statearr_24675;
})();
var statearr_24676_24717 = state_24644__$1;
(statearr_24676_24717[(2)] = null);

(statearr_24676_24717[(1)] = (8));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24645 === (14))){
var state_24644__$1 = state_24644;
var statearr_24680_24718 = state_24644__$1;
(statearr_24680_24718[(2)] = null);

(statearr_24680_24718[(1)] = (15));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24645 === (16))){
var inst_24599 = (state_24644[(10)]);
var inst_24603 = cljs.core.chunk_first(inst_24599);
var inst_24604 = cljs.core.chunk_rest(inst_24599);
var inst_24605 = cljs.core.count(inst_24603);
var inst_24585 = inst_24604;
var inst_24586 = inst_24603;
var inst_24587 = inst_24605;
var inst_24588 = (0);
var state_24644__$1 = (function (){var statearr_24681 = state_24644;
(statearr_24681[(12)] = inst_24586);

(statearr_24681[(13)] = inst_24588);

(statearr_24681[(14)] = inst_24585);

(statearr_24681[(15)] = inst_24587);

return statearr_24681;
})();
var statearr_24682_24719 = state_24644__$1;
(statearr_24682_24719[(2)] = null);

(statearr_24682_24719[(1)] = (8));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24645 === (10))){
var inst_24586 = (state_24644[(12)]);
var inst_24588 = (state_24644[(13)]);
var inst_24585 = (state_24644[(14)]);
var inst_24587 = (state_24644[(15)]);
var inst_24593 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24586,inst_24588);
var inst_24594 = cljs.core.async.muxch_STAR_(inst_24593);
var inst_24595 = cljs.core.async.close_BANG_(inst_24594);
var inst_24596 = (inst_24588 + (1));
var tmp24677 = inst_24586;
var tmp24678 = inst_24585;
var tmp24679 = inst_24587;
var inst_24585__$1 = tmp24678;
var inst_24586__$1 = tmp24677;
var inst_24587__$1 = tmp24679;
var inst_24588__$1 = inst_24596;
var state_24644__$1 = (function (){var statearr_24683 = state_24644;
(statearr_24683[(12)] = inst_24586__$1);

(statearr_24683[(13)] = inst_24588__$1);

(statearr_24683[(14)] = inst_24585__$1);

(statearr_24683[(15)] = inst_24587__$1);

(statearr_24683[(17)] = inst_24595);

return statearr_24683;
})();
var statearr_24684_24720 = state_24644__$1;
(statearr_24684_24720[(2)] = null);

(statearr_24684_24720[(1)] = (8));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24645 === (18))){
var inst_24614 = (state_24644[(2)]);
var state_24644__$1 = state_24644;
var statearr_24685_24721 = state_24644__$1;
(statearr_24685_24721[(2)] = inst_24614);

(statearr_24685_24721[(1)] = (15));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24645 === (8))){
var inst_24588 = (state_24644[(13)]);
var inst_24587 = (state_24644[(15)]);
var inst_24590 = (inst_24588 < inst_24587);
var inst_24591 = inst_24590;
var state_24644__$1 = state_24644;
if(cljs.core.truth_(inst_24591)){
var statearr_24686_24722 = state_24644__$1;
(statearr_24686_24722[(1)] = (10));

} else {
var statearr_24687_24723 = state_24644__$1;
(statearr_24687_24723[(1)] = (11));

}

return cljs.core.constant$keyword$44;
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
});})(c__11276__auto___24695,mults,ensure_mult,p))
;
return ((function (switch__11261__auto__,c__11276__auto___24695,mults,ensure_mult,p){
return (function() {
var state_machine__11262__auto__ = null;
var state_machine__11262__auto____0 = (function (){
var statearr_24691 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24691[(0)] = state_machine__11262__auto__);

(statearr_24691[(1)] = (1));

return statearr_24691;
});
var state_machine__11262__auto____1 = (function (state_24644){
while(true){
var ret_value__11263__auto__ = (function (){try{while(true){
var result__11264__auto__ = switch__11261__auto__(state_24644);
if(cljs.core.keyword_identical_QMARK_(result__11264__auto__,cljs.core.constant$keyword$44)){
continue;
} else {
return result__11264__auto__;
}
break;
}
}catch (e24692){if((e24692 instanceof Object)){
var ex__11265__auto__ = e24692;
var statearr_24693_24724 = state_24644;
(statearr_24693_24724[(5)] = ex__11265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24644);

return cljs.core.constant$keyword$44;
} else {
throw e24692;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11263__auto__,cljs.core.constant$keyword$44)){
var G__24725 = state_24644;
state_24644 = G__24725;
continue;
} else {
return ret_value__11263__auto__;
}
break;
}
});
state_machine__11262__auto__ = function(state_24644){
switch(arguments.length){
case 0:
return state_machine__11262__auto____0.call(this);
case 1:
return state_machine__11262__auto____1.call(this,state_24644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11262__auto____0;
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11262__auto____1;
return state_machine__11262__auto__;
})()
;})(switch__11261__auto__,c__11276__auto___24695,mults,ensure_mult,p))
})();
var state__11278__auto__ = (function (){var statearr_24694 = (function (){return (f__11277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11277__auto__.cljs$core$IFn$_invoke$arity$0() : f__11277__auto__.call(null));
})();
(statearr_24694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11276__auto___24695);

return statearr_24694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11278__auto__);
});})(c__11276__auto___24695,mults,ensure_mult,p))
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
var dctr = (function (){var G__24806 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24806) : cljs.core.atom.call(null,G__24806));
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
var c__11276__auto___24879 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11276__auto___24879,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11277__auto__ = (function (){var switch__11261__auto__ = ((function (c__11276__auto___24879,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24845){
var state_val_24846 = (state_24845[(1)]);
if((state_val_24846 === (7))){
var state_24845__$1 = state_24845;
var statearr_24847_24880 = state_24845__$1;
(statearr_24847_24880[(2)] = null);

(statearr_24847_24880[(1)] = (8));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24846 === (1))){
var state_24845__$1 = state_24845;
var statearr_24848_24881 = state_24845__$1;
(statearr_24848_24881[(2)] = null);

(statearr_24848_24881[(1)] = (2));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24846 === (4))){
var inst_24809 = (state_24845[(7)]);
var inst_24811 = (inst_24809 < cnt);
var state_24845__$1 = state_24845;
if(cljs.core.truth_(inst_24811)){
var statearr_24849_24882 = state_24845__$1;
(statearr_24849_24882[(1)] = (6));

} else {
var statearr_24850_24883 = state_24845__$1;
(statearr_24850_24883[(1)] = (7));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_24846 === (15))){
var inst_24841 = (state_24845[(2)]);
var state_24845__$1 = state_24845;
var statearr_24851_24884 = state_24845__$1;
(statearr_24851_24884[(2)] = inst_24841);

(statearr_24851_24884[(1)] = (3));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24846 === (13))){
var inst_24834 = cljs.core.async.close_BANG_(out);
var state_24845__$1 = state_24845;
var statearr_24852_24885 = state_24845__$1;
(statearr_24852_24885[(2)] = inst_24834);

(statearr_24852_24885[(1)] = (15));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24846 === (6))){
var state_24845__$1 = state_24845;
var statearr_24853_24886 = state_24845__$1;
(statearr_24853_24886[(2)] = null);

(statearr_24853_24886[(1)] = (11));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24846 === (3))){
var inst_24843 = (state_24845[(2)]);
var state_24845__$1 = state_24845;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24845__$1,inst_24843);
} else {
if((state_val_24846 === (12))){
var inst_24831 = (state_24845[(8)]);
var inst_24831__$1 = (state_24845[(2)]);
var inst_24832 = cljs.core.some(cljs.core.nil_QMARK_,inst_24831__$1);
var state_24845__$1 = (function (){var statearr_24854 = state_24845;
(statearr_24854[(8)] = inst_24831__$1);

return statearr_24854;
})();
if(cljs.core.truth_(inst_24832)){
var statearr_24855_24887 = state_24845__$1;
(statearr_24855_24887[(1)] = (13));

} else {
var statearr_24856_24888 = state_24845__$1;
(statearr_24856_24888[(1)] = (14));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_24846 === (2))){
var inst_24808 = (function (){var G__24857 = dctr;
var G__24858 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24857,G__24858) : cljs.core.reset_BANG_.call(null,G__24857,G__24858));
})();
var inst_24809 = (0);
var state_24845__$1 = (function (){var statearr_24859 = state_24845;
(statearr_24859[(9)] = inst_24808);

(statearr_24859[(7)] = inst_24809);

return statearr_24859;
})();
var statearr_24860_24889 = state_24845__$1;
(statearr_24860_24889[(2)] = null);

(statearr_24860_24889[(1)] = (4));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24846 === (11))){
var inst_24809 = (state_24845[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24845,(10),Object,null,(9));
var inst_24818 = (function (){var G__24861 = inst_24809;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__24861) : chs__$1.call(null,G__24861));
})();
var inst_24819 = (function (){var G__24862 = inst_24809;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__24862) : done.call(null,G__24862));
})();
var inst_24820 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_24818,inst_24819);
var state_24845__$1 = state_24845;
var statearr_24863_24890 = state_24845__$1;
(statearr_24863_24890[(2)] = inst_24820);


cljs.core.async.impl.ioc_helpers.process_exception(state_24845__$1);

return cljs.core.constant$keyword$44;
} else {
if((state_val_24846 === (9))){
var inst_24809 = (state_24845[(7)]);
var inst_24822 = (state_24845[(2)]);
var inst_24823 = (inst_24809 + (1));
var inst_24809__$1 = inst_24823;
var state_24845__$1 = (function (){var statearr_24864 = state_24845;
(statearr_24864[(10)] = inst_24822);

(statearr_24864[(7)] = inst_24809__$1);

return statearr_24864;
})();
var statearr_24865_24891 = state_24845__$1;
(statearr_24865_24891[(2)] = null);

(statearr_24865_24891[(1)] = (4));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24846 === (5))){
var inst_24829 = (state_24845[(2)]);
var state_24845__$1 = (function (){var statearr_24866 = state_24845;
(statearr_24866[(11)] = inst_24829);

return statearr_24866;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24845__$1,(12),dchan);
} else {
if((state_val_24846 === (14))){
var inst_24831 = (state_24845[(8)]);
var inst_24836 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_24831);
var state_24845__$1 = state_24845;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24845__$1,(16),out,inst_24836);
} else {
if((state_val_24846 === (16))){
var inst_24838 = (state_24845[(2)]);
var state_24845__$1 = (function (){var statearr_24867 = state_24845;
(statearr_24867[(12)] = inst_24838);

return statearr_24867;
})();
var statearr_24868_24892 = state_24845__$1;
(statearr_24868_24892[(2)] = null);

(statearr_24868_24892[(1)] = (2));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24846 === (10))){
var inst_24813 = (state_24845[(2)]);
var inst_24814 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_24845__$1 = (function (){var statearr_24869 = state_24845;
(statearr_24869[(13)] = inst_24813);

return statearr_24869;
})();
var statearr_24870_24893 = state_24845__$1;
(statearr_24870_24893[(2)] = inst_24814);


cljs.core.async.impl.ioc_helpers.process_exception(state_24845__$1);

return cljs.core.constant$keyword$44;
} else {
if((state_val_24846 === (8))){
var inst_24827 = (state_24845[(2)]);
var state_24845__$1 = state_24845;
var statearr_24871_24894 = state_24845__$1;
(statearr_24871_24894[(2)] = inst_24827);

(statearr_24871_24894[(1)] = (5));


return cljs.core.constant$keyword$44;
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
});})(c__11276__auto___24879,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__11261__auto__,c__11276__auto___24879,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11262__auto__ = null;
var state_machine__11262__auto____0 = (function (){
var statearr_24875 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24875[(0)] = state_machine__11262__auto__);

(statearr_24875[(1)] = (1));

return statearr_24875;
});
var state_machine__11262__auto____1 = (function (state_24845){
while(true){
var ret_value__11263__auto__ = (function (){try{while(true){
var result__11264__auto__ = switch__11261__auto__(state_24845);
if(cljs.core.keyword_identical_QMARK_(result__11264__auto__,cljs.core.constant$keyword$44)){
continue;
} else {
return result__11264__auto__;
}
break;
}
}catch (e24876){if((e24876 instanceof Object)){
var ex__11265__auto__ = e24876;
var statearr_24877_24895 = state_24845;
(statearr_24877_24895[(5)] = ex__11265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24845);

return cljs.core.constant$keyword$44;
} else {
throw e24876;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11263__auto__,cljs.core.constant$keyword$44)){
var G__24896 = state_24845;
state_24845 = G__24896;
continue;
} else {
return ret_value__11263__auto__;
}
break;
}
});
state_machine__11262__auto__ = function(state_24845){
switch(arguments.length){
case 0:
return state_machine__11262__auto____0.call(this);
case 1:
return state_machine__11262__auto____1.call(this,state_24845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11262__auto____0;
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11262__auto____1;
return state_machine__11262__auto__;
})()
;})(switch__11261__auto__,c__11276__auto___24879,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11278__auto__ = (function (){var statearr_24878 = (function (){return (f__11277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11277__auto__.cljs$core$IFn$_invoke$arity$0() : f__11277__auto__.call(null));
})();
(statearr_24878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11276__auto___24879);

return statearr_24878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11278__auto__);
});})(c__11276__auto___24879,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__11276__auto___25006 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11276__auto___25006,out){
return (function (){
var f__11277__auto__ = (function (){var switch__11261__auto__ = ((function (c__11276__auto___25006,out){
return (function (state_24982){
var state_val_24983 = (state_24982[(1)]);
if((state_val_24983 === (7))){
var inst_24962 = (state_24982[(7)]);
var inst_24961 = (state_24982[(8)]);
var inst_24961__$1 = (state_24982[(2)]);
var inst_24962__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24961__$1,(0),null);
var inst_24963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24961__$1,(1),null);
var inst_24964 = (inst_24962__$1 == null);
var state_24982__$1 = (function (){var statearr_24984 = state_24982;
(statearr_24984[(9)] = inst_24963);

(statearr_24984[(7)] = inst_24962__$1);

(statearr_24984[(8)] = inst_24961__$1);

return statearr_24984;
})();
if(cljs.core.truth_(inst_24964)){
var statearr_24985_25007 = state_24982__$1;
(statearr_24985_25007[(1)] = (8));

} else {
var statearr_24986_25008 = state_24982__$1;
(statearr_24986_25008[(1)] = (9));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_24983 === (1))){
var inst_24953 = cljs.core.vec(chs);
var inst_24954 = inst_24953;
var state_24982__$1 = (function (){var statearr_24987 = state_24982;
(statearr_24987[(10)] = inst_24954);

return statearr_24987;
})();
var statearr_24988_25009 = state_24982__$1;
(statearr_24988_25009[(2)] = null);

(statearr_24988_25009[(1)] = (2));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24983 === (4))){
var inst_24954 = (state_24982[(10)]);
var state_24982__$1 = state_24982;
return cljs.core.async.ioc_alts_BANG_(state_24982__$1,(7),inst_24954);
} else {
if((state_val_24983 === (6))){
var inst_24978 = (state_24982[(2)]);
var state_24982__$1 = state_24982;
var statearr_24989_25010 = state_24982__$1;
(statearr_24989_25010[(2)] = inst_24978);

(statearr_24989_25010[(1)] = (3));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24983 === (3))){
var inst_24980 = (state_24982[(2)]);
var state_24982__$1 = state_24982;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24982__$1,inst_24980);
} else {
if((state_val_24983 === (2))){
var inst_24954 = (state_24982[(10)]);
var inst_24956 = cljs.core.count(inst_24954);
var inst_24957 = (inst_24956 > (0));
var state_24982__$1 = state_24982;
if(cljs.core.truth_(inst_24957)){
var statearr_24991_25011 = state_24982__$1;
(statearr_24991_25011[(1)] = (4));

} else {
var statearr_24992_25012 = state_24982__$1;
(statearr_24992_25012[(1)] = (5));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_24983 === (11))){
var inst_24954 = (state_24982[(10)]);
var inst_24971 = (state_24982[(2)]);
var tmp24990 = inst_24954;
var inst_24954__$1 = tmp24990;
var state_24982__$1 = (function (){var statearr_24993 = state_24982;
(statearr_24993[(10)] = inst_24954__$1);

(statearr_24993[(11)] = inst_24971);

return statearr_24993;
})();
var statearr_24994_25013 = state_24982__$1;
(statearr_24994_25013[(2)] = null);

(statearr_24994_25013[(1)] = (2));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24983 === (9))){
var inst_24962 = (state_24982[(7)]);
var state_24982__$1 = state_24982;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24982__$1,(11),out,inst_24962);
} else {
if((state_val_24983 === (5))){
var inst_24976 = cljs.core.async.close_BANG_(out);
var state_24982__$1 = state_24982;
var statearr_24995_25014 = state_24982__$1;
(statearr_24995_25014[(2)] = inst_24976);

(statearr_24995_25014[(1)] = (6));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24983 === (10))){
var inst_24974 = (state_24982[(2)]);
var state_24982__$1 = state_24982;
var statearr_24996_25015 = state_24982__$1;
(statearr_24996_25015[(2)] = inst_24974);

(statearr_24996_25015[(1)] = (6));


return cljs.core.constant$keyword$44;
} else {
if((state_val_24983 === (8))){
var inst_24963 = (state_24982[(9)]);
var inst_24962 = (state_24982[(7)]);
var inst_24961 = (state_24982[(8)]);
var inst_24954 = (state_24982[(10)]);
var inst_24966 = (function (){var c = inst_24963;
var v = inst_24962;
var vec__24959 = inst_24961;
var cs = inst_24954;
return ((function (c,v,vec__24959,cs,inst_24963,inst_24962,inst_24961,inst_24954,state_val_24983,c__11276__auto___25006,out){
return (function (p1__24897_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__24897_SHARP_);
});
;})(c,v,vec__24959,cs,inst_24963,inst_24962,inst_24961,inst_24954,state_val_24983,c__11276__auto___25006,out))
})();
var inst_24967 = cljs.core.filterv(inst_24966,inst_24954);
var inst_24954__$1 = inst_24967;
var state_24982__$1 = (function (){var statearr_24997 = state_24982;
(statearr_24997[(10)] = inst_24954__$1);

return statearr_24997;
})();
var statearr_24998_25016 = state_24982__$1;
(statearr_24998_25016[(2)] = null);

(statearr_24998_25016[(1)] = (2));


return cljs.core.constant$keyword$44;
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
});})(c__11276__auto___25006,out))
;
return ((function (switch__11261__auto__,c__11276__auto___25006,out){
return (function() {
var state_machine__11262__auto__ = null;
var state_machine__11262__auto____0 = (function (){
var statearr_25002 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25002[(0)] = state_machine__11262__auto__);

(statearr_25002[(1)] = (1));

return statearr_25002;
});
var state_machine__11262__auto____1 = (function (state_24982){
while(true){
var ret_value__11263__auto__ = (function (){try{while(true){
var result__11264__auto__ = switch__11261__auto__(state_24982);
if(cljs.core.keyword_identical_QMARK_(result__11264__auto__,cljs.core.constant$keyword$44)){
continue;
} else {
return result__11264__auto__;
}
break;
}
}catch (e25003){if((e25003 instanceof Object)){
var ex__11265__auto__ = e25003;
var statearr_25004_25017 = state_24982;
(statearr_25004_25017[(5)] = ex__11265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24982);

return cljs.core.constant$keyword$44;
} else {
throw e25003;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11263__auto__,cljs.core.constant$keyword$44)){
var G__25018 = state_24982;
state_24982 = G__25018;
continue;
} else {
return ret_value__11263__auto__;
}
break;
}
});
state_machine__11262__auto__ = function(state_24982){
switch(arguments.length){
case 0:
return state_machine__11262__auto____0.call(this);
case 1:
return state_machine__11262__auto____1.call(this,state_24982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11262__auto____0;
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11262__auto____1;
return state_machine__11262__auto__;
})()
;})(switch__11261__auto__,c__11276__auto___25006,out))
})();
var state__11278__auto__ = (function (){var statearr_25005 = (function (){return (f__11277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11277__auto__.cljs$core$IFn$_invoke$arity$0() : f__11277__auto__.call(null));
})();
(statearr_25005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11276__auto___25006);

return statearr_25005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11278__auto__);
});})(c__11276__auto___25006,out))
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
var c__11276__auto___25114 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11276__auto___25114,out){
return (function (){
var f__11277__auto__ = (function (){var switch__11261__auto__ = ((function (c__11276__auto___25114,out){
return (function (state_25091){
var state_val_25092 = (state_25091[(1)]);
if((state_val_25092 === (7))){
var inst_25073 = (state_25091[(7)]);
var inst_25073__$1 = (state_25091[(2)]);
var inst_25074 = (inst_25073__$1 == null);
var inst_25075 = cljs.core.not(inst_25074);
var state_25091__$1 = (function (){var statearr_25093 = state_25091;
(statearr_25093[(7)] = inst_25073__$1);

return statearr_25093;
})();
if(inst_25075){
var statearr_25094_25115 = state_25091__$1;
(statearr_25094_25115[(1)] = (8));

} else {
var statearr_25095_25116 = state_25091__$1;
(statearr_25095_25116[(1)] = (9));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_25092 === (1))){
var inst_25068 = (0);
var state_25091__$1 = (function (){var statearr_25096 = state_25091;
(statearr_25096[(8)] = inst_25068);

return statearr_25096;
})();
var statearr_25097_25117 = state_25091__$1;
(statearr_25097_25117[(2)] = null);

(statearr_25097_25117[(1)] = (2));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25092 === (4))){
var state_25091__$1 = state_25091;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25091__$1,(7),ch);
} else {
if((state_val_25092 === (6))){
var inst_25086 = (state_25091[(2)]);
var state_25091__$1 = state_25091;
var statearr_25098_25118 = state_25091__$1;
(statearr_25098_25118[(2)] = inst_25086);

(statearr_25098_25118[(1)] = (3));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25092 === (3))){
var inst_25088 = (state_25091[(2)]);
var inst_25089 = cljs.core.async.close_BANG_(out);
var state_25091__$1 = (function (){var statearr_25099 = state_25091;
(statearr_25099[(9)] = inst_25088);

return statearr_25099;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25091__$1,inst_25089);
} else {
if((state_val_25092 === (2))){
var inst_25068 = (state_25091[(8)]);
var inst_25070 = (inst_25068 < n);
var state_25091__$1 = state_25091;
if(cljs.core.truth_(inst_25070)){
var statearr_25100_25119 = state_25091__$1;
(statearr_25100_25119[(1)] = (4));

} else {
var statearr_25101_25120 = state_25091__$1;
(statearr_25101_25120[(1)] = (5));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_25092 === (11))){
var inst_25068 = (state_25091[(8)]);
var inst_25078 = (state_25091[(2)]);
var inst_25079 = (inst_25068 + (1));
var inst_25068__$1 = inst_25079;
var state_25091__$1 = (function (){var statearr_25102 = state_25091;
(statearr_25102[(8)] = inst_25068__$1);

(statearr_25102[(10)] = inst_25078);

return statearr_25102;
})();
var statearr_25103_25121 = state_25091__$1;
(statearr_25103_25121[(2)] = null);

(statearr_25103_25121[(1)] = (2));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25092 === (9))){
var state_25091__$1 = state_25091;
var statearr_25104_25122 = state_25091__$1;
(statearr_25104_25122[(2)] = null);

(statearr_25104_25122[(1)] = (10));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25092 === (5))){
var state_25091__$1 = state_25091;
var statearr_25105_25123 = state_25091__$1;
(statearr_25105_25123[(2)] = null);

(statearr_25105_25123[(1)] = (6));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25092 === (10))){
var inst_25083 = (state_25091[(2)]);
var state_25091__$1 = state_25091;
var statearr_25106_25124 = state_25091__$1;
(statearr_25106_25124[(2)] = inst_25083);

(statearr_25106_25124[(1)] = (6));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25092 === (8))){
var inst_25073 = (state_25091[(7)]);
var state_25091__$1 = state_25091;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25091__$1,(11),out,inst_25073);
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
});})(c__11276__auto___25114,out))
;
return ((function (switch__11261__auto__,c__11276__auto___25114,out){
return (function() {
var state_machine__11262__auto__ = null;
var state_machine__11262__auto____0 = (function (){
var statearr_25110 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25110[(0)] = state_machine__11262__auto__);

(statearr_25110[(1)] = (1));

return statearr_25110;
});
var state_machine__11262__auto____1 = (function (state_25091){
while(true){
var ret_value__11263__auto__ = (function (){try{while(true){
var result__11264__auto__ = switch__11261__auto__(state_25091);
if(cljs.core.keyword_identical_QMARK_(result__11264__auto__,cljs.core.constant$keyword$44)){
continue;
} else {
return result__11264__auto__;
}
break;
}
}catch (e25111){if((e25111 instanceof Object)){
var ex__11265__auto__ = e25111;
var statearr_25112_25125 = state_25091;
(statearr_25112_25125[(5)] = ex__11265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25091);

return cljs.core.constant$keyword$44;
} else {
throw e25111;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11263__auto__,cljs.core.constant$keyword$44)){
var G__25126 = state_25091;
state_25091 = G__25126;
continue;
} else {
return ret_value__11263__auto__;
}
break;
}
});
state_machine__11262__auto__ = function(state_25091){
switch(arguments.length){
case 0:
return state_machine__11262__auto____0.call(this);
case 1:
return state_machine__11262__auto____1.call(this,state_25091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11262__auto____0;
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11262__auto____1;
return state_machine__11262__auto__;
})()
;})(switch__11261__auto__,c__11276__auto___25114,out))
})();
var state__11278__auto__ = (function (){var statearr_25113 = (function (){return (f__11277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11277__auto__.cljs$core$IFn$_invoke$arity$0() : f__11277__auto__.call(null));
})();
(statearr_25113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11276__auto___25114);

return statearr_25113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11278__auto__);
});})(c__11276__auto___25114,out))
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
if(typeof cljs.core.async.t25139 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25139 = (function (ch,f,map_LT_,meta25140){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25140 = meta25140;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25139.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25139.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t25139.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25139.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t25142 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25142 = (function (fn1,_,meta25140,map_LT_,f,ch,meta25143){
this.fn1 = fn1;
this._ = _;
this.meta25140 = meta25140;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25143 = meta25143;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25142.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25142.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t25142.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25127_SHARP_){
var G__25145 = (((p1__25127_SHARP_ == null))?null:(function (){var G__25146 = p1__25127_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__25146) : self__.f.call(null,G__25146));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__25145) : f1.call(null,G__25145));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t25142.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25144){
var self__ = this;
var _25144__$1 = this;
return self__.meta25143;
});})(___$1))
;

cljs.core.async.t25142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25144,meta25143__$1){
var self__ = this;
var _25144__$1 = this;
return (new cljs.core.async.t25142(self__.fn1,self__._,self__.meta25140,self__.map_LT_,self__.f,self__.ch,meta25143__$1));
});})(___$1))
;

cljs.core.async.t25142.cljs$lang$type = true;

cljs.core.async.t25142.cljs$lang$ctorStr = "cljs.core.async/t25142";

cljs.core.async.t25142.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25142");
});})(___$1))
;

cljs.core.async.__GT_t25142 = ((function (___$1){
return (function __GT_t25142(fn1__$1,___$2,meta25140__$1,map_LT___$1,f__$1,ch__$1,meta25143){
return (new cljs.core.async.t25142(fn1__$1,___$2,meta25140__$1,map_LT___$1,f__$1,ch__$1,meta25143));
});})(___$1))
;

}

return (new cljs.core.async.t25142(fn1,___$1,self__.meta25140,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,737,cljs.core.constant$keyword$10,10,cljs.core.constant$keyword$11,731,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3618__auto__ = ret;
if(cljs.core.truth_(and__3618__auto__)){
return !(((function (){var G__25147 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25147) : cljs.core.deref.call(null,G__25147));
})() == null));
} else {
return and__3618__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__25148 = (function (){var G__25149 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25149) : cljs.core.deref.call(null,G__25149));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__25148) : self__.f.call(null,G__25148));
})());
} else {
return ret;
}
});

cljs.core.async.t25139.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25139.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t25139.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t25139.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25141){
var self__ = this;
var _25141__$1 = this;
return self__.meta25140;
});

cljs.core.async.t25139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25141,meta25140__$1){
var self__ = this;
var _25141__$1 = this;
return (new cljs.core.async.t25139(self__.ch,self__.f,self__.map_LT_,meta25140__$1));
});

cljs.core.async.t25139.cljs$lang$type = true;

cljs.core.async.t25139.cljs$lang$ctorStr = "cljs.core.async/t25139";

cljs.core.async.t25139.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25139");
});

cljs.core.async.__GT_t25139 = (function __GT_t25139(ch__$1,f__$1,map_LT___$1,meta25140){
return (new cljs.core.async.t25139(ch__$1,f__$1,map_LT___$1,meta25140));
});

}

return (new cljs.core.async.t25139(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,743,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,722,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t25154 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25154 = (function (ch,f,map_GT_,meta25155){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25155 = meta25155;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25154.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25154.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__25157 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__25157) : self__.f.call(null,G__25157));
})(),fn1);
});

cljs.core.async.t25154.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25154.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t25154.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25154.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t25154.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25156){
var self__ = this;
var _25156__$1 = this;
return self__.meta25155;
});

cljs.core.async.t25154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25156,meta25155__$1){
var self__ = this;
var _25156__$1 = this;
return (new cljs.core.async.t25154(self__.ch,self__.f,self__.map_GT_,meta25155__$1));
});

cljs.core.async.t25154.cljs$lang$type = true;

cljs.core.async.t25154.cljs$lang$ctorStr = "cljs.core.async/t25154";

cljs.core.async.t25154.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25154");
});

cljs.core.async.__GT_t25154 = (function __GT_t25154(ch__$1,f__$1,map_GT___$1,meta25155){
return (new cljs.core.async.t25154(ch__$1,f__$1,map_GT___$1,meta25155));
});

}

return (new cljs.core.async.t25154(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,34,cljs.core.constant$keyword$9,757,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,748,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t25162 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25162 = (function (ch,p,filter_GT_,meta25163){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25163 = meta25163;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25162.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25162.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__25165 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__25165) : self__.p.call(null,G__25165));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t25162.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25162.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t25162.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25162.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t25162.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t25162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25164){
var self__ = this;
var _25164__$1 = this;
return self__.meta25163;
});

cljs.core.async.t25162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25164,meta25163__$1){
var self__ = this;
var _25164__$1 = this;
return (new cljs.core.async.t25162(self__.ch,self__.p,self__.filter_GT_,meta25163__$1));
});

cljs.core.async.t25162.cljs$lang$type = true;

cljs.core.async.t25162.cljs$lang$ctorStr = "cljs.core.async/t25162";

cljs.core.async.t25162.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25162");
});

cljs.core.async.__GT_t25162 = (function __GT_t25162(ch__$1,p__$1,filter_GT___$1,meta25163){
return (new cljs.core.async.t25162(ch__$1,p__$1,filter_GT___$1,meta25163));
});

}

return (new cljs.core.async.t25162(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,774,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,762,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
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
var c__11276__auto___25253 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11276__auto___25253,out){
return (function (){
var f__11277__auto__ = (function (){var switch__11261__auto__ = ((function (c__11276__auto___25253,out){
return (function (state_25231){
var state_val_25232 = (state_25231[(1)]);
if((state_val_25232 === (7))){
var inst_25227 = (state_25231[(2)]);
var state_25231__$1 = state_25231;
var statearr_25233_25254 = state_25231__$1;
(statearr_25233_25254[(2)] = inst_25227);

(statearr_25233_25254[(1)] = (3));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25232 === (1))){
var state_25231__$1 = state_25231;
var statearr_25234_25255 = state_25231__$1;
(statearr_25234_25255[(2)] = null);

(statearr_25234_25255[(1)] = (2));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25232 === (4))){
var inst_25213 = (state_25231[(7)]);
var inst_25213__$1 = (state_25231[(2)]);
var inst_25214 = (inst_25213__$1 == null);
var state_25231__$1 = (function (){var statearr_25235 = state_25231;
(statearr_25235[(7)] = inst_25213__$1);

return statearr_25235;
})();
if(cljs.core.truth_(inst_25214)){
var statearr_25236_25256 = state_25231__$1;
(statearr_25236_25256[(1)] = (5));

} else {
var statearr_25237_25257 = state_25231__$1;
(statearr_25237_25257[(1)] = (6));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_25232 === (6))){
var inst_25213 = (state_25231[(7)]);
var inst_25218 = (function (){var G__25238 = inst_25213;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__25238) : p.call(null,G__25238));
})();
var state_25231__$1 = state_25231;
if(cljs.core.truth_(inst_25218)){
var statearr_25239_25258 = state_25231__$1;
(statearr_25239_25258[(1)] = (8));

} else {
var statearr_25240_25259 = state_25231__$1;
(statearr_25240_25259[(1)] = (9));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_25232 === (3))){
var inst_25229 = (state_25231[(2)]);
var state_25231__$1 = state_25231;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25231__$1,inst_25229);
} else {
if((state_val_25232 === (2))){
var state_25231__$1 = state_25231;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25231__$1,(4),ch);
} else {
if((state_val_25232 === (11))){
var inst_25221 = (state_25231[(2)]);
var state_25231__$1 = state_25231;
var statearr_25241_25260 = state_25231__$1;
(statearr_25241_25260[(2)] = inst_25221);

(statearr_25241_25260[(1)] = (10));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25232 === (9))){
var state_25231__$1 = state_25231;
var statearr_25242_25261 = state_25231__$1;
(statearr_25242_25261[(2)] = null);

(statearr_25242_25261[(1)] = (10));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25232 === (5))){
var inst_25216 = cljs.core.async.close_BANG_(out);
var state_25231__$1 = state_25231;
var statearr_25243_25262 = state_25231__$1;
(statearr_25243_25262[(2)] = inst_25216);

(statearr_25243_25262[(1)] = (7));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25232 === (10))){
var inst_25224 = (state_25231[(2)]);
var state_25231__$1 = (function (){var statearr_25244 = state_25231;
(statearr_25244[(8)] = inst_25224);

return statearr_25244;
})();
var statearr_25245_25263 = state_25231__$1;
(statearr_25245_25263[(2)] = null);

(statearr_25245_25263[(1)] = (2));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25232 === (8))){
var inst_25213 = (state_25231[(7)]);
var state_25231__$1 = state_25231;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25231__$1,(11),out,inst_25213);
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
});})(c__11276__auto___25253,out))
;
return ((function (switch__11261__auto__,c__11276__auto___25253,out){
return (function() {
var state_machine__11262__auto__ = null;
var state_machine__11262__auto____0 = (function (){
var statearr_25249 = [null,null,null,null,null,null,null,null,null];
(statearr_25249[(0)] = state_machine__11262__auto__);

(statearr_25249[(1)] = (1));

return statearr_25249;
});
var state_machine__11262__auto____1 = (function (state_25231){
while(true){
var ret_value__11263__auto__ = (function (){try{while(true){
var result__11264__auto__ = switch__11261__auto__(state_25231);
if(cljs.core.keyword_identical_QMARK_(result__11264__auto__,cljs.core.constant$keyword$44)){
continue;
} else {
return result__11264__auto__;
}
break;
}
}catch (e25250){if((e25250 instanceof Object)){
var ex__11265__auto__ = e25250;
var statearr_25251_25264 = state_25231;
(statearr_25251_25264[(5)] = ex__11265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25231);

return cljs.core.constant$keyword$44;
} else {
throw e25250;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11263__auto__,cljs.core.constant$keyword$44)){
var G__25265 = state_25231;
state_25231 = G__25265;
continue;
} else {
return ret_value__11263__auto__;
}
break;
}
});
state_machine__11262__auto__ = function(state_25231){
switch(arguments.length){
case 0:
return state_machine__11262__auto____0.call(this);
case 1:
return state_machine__11262__auto____1.call(this,state_25231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11262__auto____0;
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11262__auto____1;
return state_machine__11262__auto__;
})()
;})(switch__11261__auto__,c__11276__auto___25253,out))
})();
var state__11278__auto__ = (function (){var statearr_25252 = (function (){return (f__11277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11277__auto__.cljs$core$IFn$_invoke$arity$0() : f__11277__auto__.call(null));
})();
(statearr_25252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11276__auto___25253);

return statearr_25252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11278__auto__);
});})(c__11276__auto___25253,out))
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
var c__11276__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11276__auto__){
return (function (){
var f__11277__auto__ = (function (){var switch__11261__auto__ = ((function (c__11276__auto__){
return (function (state_25435){
var state_val_25436 = (state_25435[(1)]);
if((state_val_25436 === (7))){
var inst_25431 = (state_25435[(2)]);
var state_25435__$1 = state_25435;
var statearr_25437_25479 = state_25435__$1;
(statearr_25437_25479[(2)] = inst_25431);

(statearr_25437_25479[(1)] = (3));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25436 === (20))){
var inst_25401 = (state_25435[(7)]);
var inst_25412 = (state_25435[(2)]);
var inst_25413 = cljs.core.next(inst_25401);
var inst_25387 = inst_25413;
var inst_25388 = null;
var inst_25389 = (0);
var inst_25390 = (0);
var state_25435__$1 = (function (){var statearr_25438 = state_25435;
(statearr_25438[(8)] = inst_25390);

(statearr_25438[(9)] = inst_25412);

(statearr_25438[(10)] = inst_25388);

(statearr_25438[(11)] = inst_25389);

(statearr_25438[(12)] = inst_25387);

return statearr_25438;
})();
var statearr_25439_25480 = state_25435__$1;
(statearr_25439_25480[(2)] = null);

(statearr_25439_25480[(1)] = (8));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25436 === (1))){
var state_25435__$1 = state_25435;
var statearr_25440_25481 = state_25435__$1;
(statearr_25440_25481[(2)] = null);

(statearr_25440_25481[(1)] = (2));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25436 === (4))){
var inst_25376 = (state_25435[(13)]);
var inst_25376__$1 = (state_25435[(2)]);
var inst_25377 = (inst_25376__$1 == null);
var state_25435__$1 = (function (){var statearr_25441 = state_25435;
(statearr_25441[(13)] = inst_25376__$1);

return statearr_25441;
})();
if(cljs.core.truth_(inst_25377)){
var statearr_25442_25482 = state_25435__$1;
(statearr_25442_25482[(1)] = (5));

} else {
var statearr_25443_25483 = state_25435__$1;
(statearr_25443_25483[(1)] = (6));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_25436 === (15))){
var state_25435__$1 = state_25435;
var statearr_25447_25484 = state_25435__$1;
(statearr_25447_25484[(2)] = null);

(statearr_25447_25484[(1)] = (16));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25436 === (21))){
var state_25435__$1 = state_25435;
var statearr_25448_25485 = state_25435__$1;
(statearr_25448_25485[(2)] = null);

(statearr_25448_25485[(1)] = (23));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25436 === (13))){
var inst_25390 = (state_25435[(8)]);
var inst_25388 = (state_25435[(10)]);
var inst_25389 = (state_25435[(11)]);
var inst_25387 = (state_25435[(12)]);
var inst_25397 = (state_25435[(2)]);
var inst_25398 = (inst_25390 + (1));
var tmp25444 = inst_25388;
var tmp25445 = inst_25389;
var tmp25446 = inst_25387;
var inst_25387__$1 = tmp25446;
var inst_25388__$1 = tmp25444;
var inst_25389__$1 = tmp25445;
var inst_25390__$1 = inst_25398;
var state_25435__$1 = (function (){var statearr_25449 = state_25435;
(statearr_25449[(8)] = inst_25390__$1);

(statearr_25449[(10)] = inst_25388__$1);

(statearr_25449[(14)] = inst_25397);

(statearr_25449[(11)] = inst_25389__$1);

(statearr_25449[(12)] = inst_25387__$1);

return statearr_25449;
})();
var statearr_25450_25486 = state_25435__$1;
(statearr_25450_25486[(2)] = null);

(statearr_25450_25486[(1)] = (8));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25436 === (22))){
var state_25435__$1 = state_25435;
var statearr_25451_25487 = state_25435__$1;
(statearr_25451_25487[(2)] = null);

(statearr_25451_25487[(1)] = (2));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25436 === (6))){
var inst_25376 = (state_25435[(13)]);
var inst_25385 = (function (){var G__25452 = inst_25376;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25452) : f.call(null,G__25452));
})();
var inst_25386 = cljs.core.seq(inst_25385);
var inst_25387 = inst_25386;
var inst_25388 = null;
var inst_25389 = (0);
var inst_25390 = (0);
var state_25435__$1 = (function (){var statearr_25453 = state_25435;
(statearr_25453[(8)] = inst_25390);

(statearr_25453[(10)] = inst_25388);

(statearr_25453[(11)] = inst_25389);

(statearr_25453[(12)] = inst_25387);

return statearr_25453;
})();
var statearr_25454_25488 = state_25435__$1;
(statearr_25454_25488[(2)] = null);

(statearr_25454_25488[(1)] = (8));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25436 === (17))){
var inst_25401 = (state_25435[(7)]);
var inst_25405 = cljs.core.chunk_first(inst_25401);
var inst_25406 = cljs.core.chunk_rest(inst_25401);
var inst_25407 = cljs.core.count(inst_25405);
var inst_25387 = inst_25406;
var inst_25388 = inst_25405;
var inst_25389 = inst_25407;
var inst_25390 = (0);
var state_25435__$1 = (function (){var statearr_25455 = state_25435;
(statearr_25455[(8)] = inst_25390);

(statearr_25455[(10)] = inst_25388);

(statearr_25455[(11)] = inst_25389);

(statearr_25455[(12)] = inst_25387);

return statearr_25455;
})();
var statearr_25456_25489 = state_25435__$1;
(statearr_25456_25489[(2)] = null);

(statearr_25456_25489[(1)] = (8));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25436 === (3))){
var inst_25433 = (state_25435[(2)]);
var state_25435__$1 = state_25435;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25435__$1,inst_25433);
} else {
if((state_val_25436 === (12))){
var inst_25421 = (state_25435[(2)]);
var state_25435__$1 = state_25435;
var statearr_25457_25490 = state_25435__$1;
(statearr_25457_25490[(2)] = inst_25421);

(statearr_25457_25490[(1)] = (9));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25436 === (2))){
var state_25435__$1 = state_25435;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25435__$1,(4),in$);
} else {
if((state_val_25436 === (23))){
var inst_25429 = (state_25435[(2)]);
var state_25435__$1 = state_25435;
var statearr_25458_25491 = state_25435__$1;
(statearr_25458_25491[(2)] = inst_25429);

(statearr_25458_25491[(1)] = (7));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25436 === (19))){
var inst_25416 = (state_25435[(2)]);
var state_25435__$1 = state_25435;
var statearr_25459_25492 = state_25435__$1;
(statearr_25459_25492[(2)] = inst_25416);

(statearr_25459_25492[(1)] = (16));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25436 === (11))){
var inst_25387 = (state_25435[(12)]);
var inst_25401 = (state_25435[(7)]);
var inst_25401__$1 = cljs.core.seq(inst_25387);
var state_25435__$1 = (function (){var statearr_25460 = state_25435;
(statearr_25460[(7)] = inst_25401__$1);

return statearr_25460;
})();
if(inst_25401__$1){
var statearr_25461_25493 = state_25435__$1;
(statearr_25461_25493[(1)] = (14));

} else {
var statearr_25462_25494 = state_25435__$1;
(statearr_25462_25494[(1)] = (15));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_25436 === (9))){
var inst_25423 = (state_25435[(2)]);
var inst_25424 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_25435__$1 = (function (){var statearr_25463 = state_25435;
(statearr_25463[(15)] = inst_25423);

return statearr_25463;
})();
if(cljs.core.truth_(inst_25424)){
var statearr_25464_25495 = state_25435__$1;
(statearr_25464_25495[(1)] = (21));

} else {
var statearr_25465_25496 = state_25435__$1;
(statearr_25465_25496[(1)] = (22));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_25436 === (5))){
var inst_25379 = cljs.core.async.close_BANG_(out);
var state_25435__$1 = state_25435;
var statearr_25466_25497 = state_25435__$1;
(statearr_25466_25497[(2)] = inst_25379);

(statearr_25466_25497[(1)] = (7));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25436 === (14))){
var inst_25401 = (state_25435[(7)]);
var inst_25403 = cljs.core.chunked_seq_QMARK_(inst_25401);
var state_25435__$1 = state_25435;
if(inst_25403){
var statearr_25467_25498 = state_25435__$1;
(statearr_25467_25498[(1)] = (17));

} else {
var statearr_25468_25499 = state_25435__$1;
(statearr_25468_25499[(1)] = (18));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_25436 === (16))){
var inst_25419 = (state_25435[(2)]);
var state_25435__$1 = state_25435;
var statearr_25469_25500 = state_25435__$1;
(statearr_25469_25500[(2)] = inst_25419);

(statearr_25469_25500[(1)] = (12));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25436 === (10))){
var inst_25390 = (state_25435[(8)]);
var inst_25388 = (state_25435[(10)]);
var inst_25395 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25388,inst_25390);
var state_25435__$1 = state_25435;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25435__$1,(13),out,inst_25395);
} else {
if((state_val_25436 === (18))){
var inst_25401 = (state_25435[(7)]);
var inst_25410 = cljs.core.first(inst_25401);
var state_25435__$1 = state_25435;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25435__$1,(20),out,inst_25410);
} else {
if((state_val_25436 === (8))){
var inst_25390 = (state_25435[(8)]);
var inst_25389 = (state_25435[(11)]);
var inst_25392 = (inst_25390 < inst_25389);
var inst_25393 = inst_25392;
var state_25435__$1 = state_25435;
if(cljs.core.truth_(inst_25393)){
var statearr_25470_25501 = state_25435__$1;
(statearr_25470_25501[(1)] = (10));

} else {
var statearr_25471_25502 = state_25435__$1;
(statearr_25471_25502[(1)] = (11));

}

return cljs.core.constant$keyword$44;
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
});})(c__11276__auto__))
;
return ((function (switch__11261__auto__,c__11276__auto__){
return (function() {
var state_machine__11262__auto__ = null;
var state_machine__11262__auto____0 = (function (){
var statearr_25475 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25475[(0)] = state_machine__11262__auto__);

(statearr_25475[(1)] = (1));

return statearr_25475;
});
var state_machine__11262__auto____1 = (function (state_25435){
while(true){
var ret_value__11263__auto__ = (function (){try{while(true){
var result__11264__auto__ = switch__11261__auto__(state_25435);
if(cljs.core.keyword_identical_QMARK_(result__11264__auto__,cljs.core.constant$keyword$44)){
continue;
} else {
return result__11264__auto__;
}
break;
}
}catch (e25476){if((e25476 instanceof Object)){
var ex__11265__auto__ = e25476;
var statearr_25477_25503 = state_25435;
(statearr_25477_25503[(5)] = ex__11265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25435);

return cljs.core.constant$keyword$44;
} else {
throw e25476;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11263__auto__,cljs.core.constant$keyword$44)){
var G__25504 = state_25435;
state_25435 = G__25504;
continue;
} else {
return ret_value__11263__auto__;
}
break;
}
});
state_machine__11262__auto__ = function(state_25435){
switch(arguments.length){
case 0:
return state_machine__11262__auto____0.call(this);
case 1:
return state_machine__11262__auto____1.call(this,state_25435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11262__auto____0;
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11262__auto____1;
return state_machine__11262__auto__;
})()
;})(switch__11261__auto__,c__11276__auto__))
})();
var state__11278__auto__ = (function (){var statearr_25478 = (function (){return (f__11277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11277__auto__.cljs$core$IFn$_invoke$arity$0() : f__11277__auto__.call(null));
})();
(statearr_25478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11276__auto__);

return statearr_25478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11278__auto__);
});})(c__11276__auto__))
);

return c__11276__auto__;
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
var c__11276__auto___25609 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11276__auto___25609,out){
return (function (){
var f__11277__auto__ = (function (){var switch__11261__auto__ = ((function (c__11276__auto___25609,out){
return (function (state_25584){
var state_val_25585 = (state_25584[(1)]);
if((state_val_25585 === (7))){
var inst_25579 = (state_25584[(2)]);
var state_25584__$1 = state_25584;
var statearr_25586_25610 = state_25584__$1;
(statearr_25586_25610[(2)] = inst_25579);

(statearr_25586_25610[(1)] = (3));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25585 === (1))){
var inst_25561 = null;
var state_25584__$1 = (function (){var statearr_25587 = state_25584;
(statearr_25587[(7)] = inst_25561);

return statearr_25587;
})();
var statearr_25588_25611 = state_25584__$1;
(statearr_25588_25611[(2)] = null);

(statearr_25588_25611[(1)] = (2));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25585 === (4))){
var inst_25564 = (state_25584[(8)]);
var inst_25564__$1 = (state_25584[(2)]);
var inst_25565 = (inst_25564__$1 == null);
var inst_25566 = cljs.core.not(inst_25565);
var state_25584__$1 = (function (){var statearr_25589 = state_25584;
(statearr_25589[(8)] = inst_25564__$1);

return statearr_25589;
})();
if(inst_25566){
var statearr_25590_25612 = state_25584__$1;
(statearr_25590_25612[(1)] = (5));

} else {
var statearr_25591_25613 = state_25584__$1;
(statearr_25591_25613[(1)] = (6));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_25585 === (6))){
var state_25584__$1 = state_25584;
var statearr_25592_25614 = state_25584__$1;
(statearr_25592_25614[(2)] = null);

(statearr_25592_25614[(1)] = (7));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25585 === (3))){
var inst_25581 = (state_25584[(2)]);
var inst_25582 = cljs.core.async.close_BANG_(out);
var state_25584__$1 = (function (){var statearr_25593 = state_25584;
(statearr_25593[(9)] = inst_25581);

return statearr_25593;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25584__$1,inst_25582);
} else {
if((state_val_25585 === (2))){
var state_25584__$1 = state_25584;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25584__$1,(4),ch);
} else {
if((state_val_25585 === (11))){
var inst_25564 = (state_25584[(8)]);
var inst_25573 = (state_25584[(2)]);
var inst_25561 = inst_25564;
var state_25584__$1 = (function (){var statearr_25594 = state_25584;
(statearr_25594[(10)] = inst_25573);

(statearr_25594[(7)] = inst_25561);

return statearr_25594;
})();
var statearr_25595_25615 = state_25584__$1;
(statearr_25595_25615[(2)] = null);

(statearr_25595_25615[(1)] = (2));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25585 === (9))){
var inst_25564 = (state_25584[(8)]);
var state_25584__$1 = state_25584;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25584__$1,(11),out,inst_25564);
} else {
if((state_val_25585 === (5))){
var inst_25564 = (state_25584[(8)]);
var inst_25561 = (state_25584[(7)]);
var inst_25568 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25564,inst_25561);
var state_25584__$1 = state_25584;
if(inst_25568){
var statearr_25597_25616 = state_25584__$1;
(statearr_25597_25616[(1)] = (8));

} else {
var statearr_25598_25617 = state_25584__$1;
(statearr_25598_25617[(1)] = (9));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_25585 === (10))){
var inst_25576 = (state_25584[(2)]);
var state_25584__$1 = state_25584;
var statearr_25599_25618 = state_25584__$1;
(statearr_25599_25618[(2)] = inst_25576);

(statearr_25599_25618[(1)] = (7));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25585 === (8))){
var inst_25561 = (state_25584[(7)]);
var tmp25596 = inst_25561;
var inst_25561__$1 = tmp25596;
var state_25584__$1 = (function (){var statearr_25600 = state_25584;
(statearr_25600[(7)] = inst_25561__$1);

return statearr_25600;
})();
var statearr_25601_25619 = state_25584__$1;
(statearr_25601_25619[(2)] = null);

(statearr_25601_25619[(1)] = (2));


return cljs.core.constant$keyword$44;
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
});})(c__11276__auto___25609,out))
;
return ((function (switch__11261__auto__,c__11276__auto___25609,out){
return (function() {
var state_machine__11262__auto__ = null;
var state_machine__11262__auto____0 = (function (){
var statearr_25605 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25605[(0)] = state_machine__11262__auto__);

(statearr_25605[(1)] = (1));

return statearr_25605;
});
var state_machine__11262__auto____1 = (function (state_25584){
while(true){
var ret_value__11263__auto__ = (function (){try{while(true){
var result__11264__auto__ = switch__11261__auto__(state_25584);
if(cljs.core.keyword_identical_QMARK_(result__11264__auto__,cljs.core.constant$keyword$44)){
continue;
} else {
return result__11264__auto__;
}
break;
}
}catch (e25606){if((e25606 instanceof Object)){
var ex__11265__auto__ = e25606;
var statearr_25607_25620 = state_25584;
(statearr_25607_25620[(5)] = ex__11265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25584);

return cljs.core.constant$keyword$44;
} else {
throw e25606;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11263__auto__,cljs.core.constant$keyword$44)){
var G__25621 = state_25584;
state_25584 = G__25621;
continue;
} else {
return ret_value__11263__auto__;
}
break;
}
});
state_machine__11262__auto__ = function(state_25584){
switch(arguments.length){
case 0:
return state_machine__11262__auto____0.call(this);
case 1:
return state_machine__11262__auto____1.call(this,state_25584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11262__auto____0;
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11262__auto____1;
return state_machine__11262__auto__;
})()
;})(switch__11261__auto__,c__11276__auto___25609,out))
})();
var state__11278__auto__ = (function (){var statearr_25608 = (function (){return (f__11277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11277__auto__.cljs$core$IFn$_invoke$arity$0() : f__11277__auto__.call(null));
})();
(statearr_25608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11276__auto___25609);

return statearr_25608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11278__auto__);
});})(c__11276__auto___25609,out))
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
var c__11276__auto___25759 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11276__auto___25759,out){
return (function (){
var f__11277__auto__ = (function (){var switch__11261__auto__ = ((function (c__11276__auto___25759,out){
return (function (state_25729){
var state_val_25730 = (state_25729[(1)]);
if((state_val_25730 === (7))){
var inst_25725 = (state_25729[(2)]);
var state_25729__$1 = state_25729;
var statearr_25731_25760 = state_25729__$1;
(statearr_25731_25760[(2)] = inst_25725);

(statearr_25731_25760[(1)] = (3));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25730 === (1))){
var inst_25692 = (new Array(n));
var inst_25693 = inst_25692;
var inst_25694 = (0);
var state_25729__$1 = (function (){var statearr_25732 = state_25729;
(statearr_25732[(7)] = inst_25693);

(statearr_25732[(8)] = inst_25694);

return statearr_25732;
})();
var statearr_25733_25761 = state_25729__$1;
(statearr_25733_25761[(2)] = null);

(statearr_25733_25761[(1)] = (2));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25730 === (4))){
var inst_25697 = (state_25729[(9)]);
var inst_25697__$1 = (state_25729[(2)]);
var inst_25698 = (inst_25697__$1 == null);
var inst_25699 = cljs.core.not(inst_25698);
var state_25729__$1 = (function (){var statearr_25734 = state_25729;
(statearr_25734[(9)] = inst_25697__$1);

return statearr_25734;
})();
if(inst_25699){
var statearr_25735_25762 = state_25729__$1;
(statearr_25735_25762[(1)] = (5));

} else {
var statearr_25736_25763 = state_25729__$1;
(statearr_25736_25763[(1)] = (6));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_25730 === (15))){
var inst_25719 = (state_25729[(2)]);
var state_25729__$1 = state_25729;
var statearr_25737_25764 = state_25729__$1;
(statearr_25737_25764[(2)] = inst_25719);

(statearr_25737_25764[(1)] = (14));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25730 === (13))){
var state_25729__$1 = state_25729;
var statearr_25738_25765 = state_25729__$1;
(statearr_25738_25765[(2)] = null);

(statearr_25738_25765[(1)] = (14));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25730 === (6))){
var inst_25694 = (state_25729[(8)]);
var inst_25715 = (inst_25694 > (0));
var state_25729__$1 = state_25729;
if(cljs.core.truth_(inst_25715)){
var statearr_25739_25766 = state_25729__$1;
(statearr_25739_25766[(1)] = (12));

} else {
var statearr_25740_25767 = state_25729__$1;
(statearr_25740_25767[(1)] = (13));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_25730 === (3))){
var inst_25727 = (state_25729[(2)]);
var state_25729__$1 = state_25729;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25729__$1,inst_25727);
} else {
if((state_val_25730 === (12))){
var inst_25693 = (state_25729[(7)]);
var inst_25717 = cljs.core.vec(inst_25693);
var state_25729__$1 = state_25729;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25729__$1,(15),out,inst_25717);
} else {
if((state_val_25730 === (2))){
var state_25729__$1 = state_25729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25729__$1,(4),ch);
} else {
if((state_val_25730 === (11))){
var inst_25709 = (state_25729[(2)]);
var inst_25710 = (new Array(n));
var inst_25693 = inst_25710;
var inst_25694 = (0);
var state_25729__$1 = (function (){var statearr_25741 = state_25729;
(statearr_25741[(7)] = inst_25693);

(statearr_25741[(10)] = inst_25709);

(statearr_25741[(8)] = inst_25694);

return statearr_25741;
})();
var statearr_25742_25768 = state_25729__$1;
(statearr_25742_25768[(2)] = null);

(statearr_25742_25768[(1)] = (2));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25730 === (9))){
var inst_25693 = (state_25729[(7)]);
var inst_25707 = cljs.core.vec(inst_25693);
var state_25729__$1 = state_25729;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25729__$1,(11),out,inst_25707);
} else {
if((state_val_25730 === (5))){
var inst_25693 = (state_25729[(7)]);
var inst_25697 = (state_25729[(9)]);
var inst_25694 = (state_25729[(8)]);
var inst_25702 = (state_25729[(11)]);
var inst_25701 = (inst_25693[inst_25694] = inst_25697);
var inst_25702__$1 = (inst_25694 + (1));
var inst_25703 = (inst_25702__$1 < n);
var state_25729__$1 = (function (){var statearr_25743 = state_25729;
(statearr_25743[(12)] = inst_25701);

(statearr_25743[(11)] = inst_25702__$1);

return statearr_25743;
})();
if(cljs.core.truth_(inst_25703)){
var statearr_25744_25769 = state_25729__$1;
(statearr_25744_25769[(1)] = (8));

} else {
var statearr_25745_25770 = state_25729__$1;
(statearr_25745_25770[(1)] = (9));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_25730 === (14))){
var inst_25722 = (state_25729[(2)]);
var inst_25723 = cljs.core.async.close_BANG_(out);
var state_25729__$1 = (function (){var statearr_25747 = state_25729;
(statearr_25747[(13)] = inst_25722);

return statearr_25747;
})();
var statearr_25748_25771 = state_25729__$1;
(statearr_25748_25771[(2)] = inst_25723);

(statearr_25748_25771[(1)] = (7));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25730 === (10))){
var inst_25713 = (state_25729[(2)]);
var state_25729__$1 = state_25729;
var statearr_25749_25772 = state_25729__$1;
(statearr_25749_25772[(2)] = inst_25713);

(statearr_25749_25772[(1)] = (7));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25730 === (8))){
var inst_25693 = (state_25729[(7)]);
var inst_25702 = (state_25729[(11)]);
var tmp25746 = inst_25693;
var inst_25693__$1 = tmp25746;
var inst_25694 = inst_25702;
var state_25729__$1 = (function (){var statearr_25750 = state_25729;
(statearr_25750[(7)] = inst_25693__$1);

(statearr_25750[(8)] = inst_25694);

return statearr_25750;
})();
var statearr_25751_25773 = state_25729__$1;
(statearr_25751_25773[(2)] = null);

(statearr_25751_25773[(1)] = (2));


return cljs.core.constant$keyword$44;
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
});})(c__11276__auto___25759,out))
;
return ((function (switch__11261__auto__,c__11276__auto___25759,out){
return (function() {
var state_machine__11262__auto__ = null;
var state_machine__11262__auto____0 = (function (){
var statearr_25755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25755[(0)] = state_machine__11262__auto__);

(statearr_25755[(1)] = (1));

return statearr_25755;
});
var state_machine__11262__auto____1 = (function (state_25729){
while(true){
var ret_value__11263__auto__ = (function (){try{while(true){
var result__11264__auto__ = switch__11261__auto__(state_25729);
if(cljs.core.keyword_identical_QMARK_(result__11264__auto__,cljs.core.constant$keyword$44)){
continue;
} else {
return result__11264__auto__;
}
break;
}
}catch (e25756){if((e25756 instanceof Object)){
var ex__11265__auto__ = e25756;
var statearr_25757_25774 = state_25729;
(statearr_25757_25774[(5)] = ex__11265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25729);

return cljs.core.constant$keyword$44;
} else {
throw e25756;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11263__auto__,cljs.core.constant$keyword$44)){
var G__25775 = state_25729;
state_25729 = G__25775;
continue;
} else {
return ret_value__11263__auto__;
}
break;
}
});
state_machine__11262__auto__ = function(state_25729){
switch(arguments.length){
case 0:
return state_machine__11262__auto____0.call(this);
case 1:
return state_machine__11262__auto____1.call(this,state_25729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11262__auto____0;
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11262__auto____1;
return state_machine__11262__auto__;
})()
;})(switch__11261__auto__,c__11276__auto___25759,out))
})();
var state__11278__auto__ = (function (){var statearr_25758 = (function (){return (f__11277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11277__auto__.cljs$core$IFn$_invoke$arity$0() : f__11277__auto__.call(null));
})();
(statearr_25758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11276__auto___25759);

return statearr_25758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11278__auto__);
});})(c__11276__auto___25759,out))
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
var c__11276__auto___25923 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11276__auto___25923,out){
return (function (){
var f__11277__auto__ = (function (){var switch__11261__auto__ = ((function (c__11276__auto___25923,out){
return (function (state_25892){
var state_val_25893 = (state_25892[(1)]);
if((state_val_25893 === (7))){
var inst_25888 = (state_25892[(2)]);
var state_25892__$1 = state_25892;
var statearr_25894_25924 = state_25892__$1;
(statearr_25894_25924[(2)] = inst_25888);

(statearr_25894_25924[(1)] = (3));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25893 === (1))){
var inst_25851 = [];
var inst_25852 = inst_25851;
var inst_25853 = cljs.core.constant$keyword$59;
var state_25892__$1 = (function (){var statearr_25895 = state_25892;
(statearr_25895[(7)] = inst_25853);

(statearr_25895[(8)] = inst_25852);

return statearr_25895;
})();
var statearr_25896_25925 = state_25892__$1;
(statearr_25896_25925[(2)] = null);

(statearr_25896_25925[(1)] = (2));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25893 === (4))){
var inst_25856 = (state_25892[(9)]);
var inst_25856__$1 = (state_25892[(2)]);
var inst_25857 = (inst_25856__$1 == null);
var inst_25858 = cljs.core.not(inst_25857);
var state_25892__$1 = (function (){var statearr_25897 = state_25892;
(statearr_25897[(9)] = inst_25856__$1);

return statearr_25897;
})();
if(inst_25858){
var statearr_25898_25926 = state_25892__$1;
(statearr_25898_25926[(1)] = (5));

} else {
var statearr_25899_25927 = state_25892__$1;
(statearr_25899_25927[(1)] = (6));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_25893 === (15))){
var inst_25882 = (state_25892[(2)]);
var state_25892__$1 = state_25892;
var statearr_25900_25928 = state_25892__$1;
(statearr_25900_25928[(2)] = inst_25882);

(statearr_25900_25928[(1)] = (14));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25893 === (13))){
var state_25892__$1 = state_25892;
var statearr_25901_25929 = state_25892__$1;
(statearr_25901_25929[(2)] = null);

(statearr_25901_25929[(1)] = (14));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25893 === (6))){
var inst_25852 = (state_25892[(8)]);
var inst_25877 = inst_25852.length;
var inst_25878 = (inst_25877 > (0));
var state_25892__$1 = state_25892;
if(cljs.core.truth_(inst_25878)){
var statearr_25902_25930 = state_25892__$1;
(statearr_25902_25930[(1)] = (12));

} else {
var statearr_25903_25931 = state_25892__$1;
(statearr_25903_25931[(1)] = (13));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_25893 === (3))){
var inst_25890 = (state_25892[(2)]);
var state_25892__$1 = state_25892;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25892__$1,inst_25890);
} else {
if((state_val_25893 === (12))){
var inst_25852 = (state_25892[(8)]);
var inst_25880 = cljs.core.vec(inst_25852);
var state_25892__$1 = state_25892;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25892__$1,(15),out,inst_25880);
} else {
if((state_val_25893 === (2))){
var state_25892__$1 = state_25892;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25892__$1,(4),ch);
} else {
if((state_val_25893 === (11))){
var inst_25860 = (state_25892[(10)]);
var inst_25856 = (state_25892[(9)]);
var inst_25870 = (state_25892[(2)]);
var inst_25871 = [];
var inst_25872 = inst_25871.push(inst_25856);
var inst_25852 = inst_25871;
var inst_25853 = inst_25860;
var state_25892__$1 = (function (){var statearr_25904 = state_25892;
(statearr_25904[(11)] = inst_25872);

(statearr_25904[(7)] = inst_25853);

(statearr_25904[(8)] = inst_25852);

(statearr_25904[(12)] = inst_25870);

return statearr_25904;
})();
var statearr_25905_25932 = state_25892__$1;
(statearr_25905_25932[(2)] = null);

(statearr_25905_25932[(1)] = (2));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25893 === (9))){
var inst_25852 = (state_25892[(8)]);
var inst_25868 = cljs.core.vec(inst_25852);
var state_25892__$1 = state_25892;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25892__$1,(11),out,inst_25868);
} else {
if((state_val_25893 === (5))){
var inst_25853 = (state_25892[(7)]);
var inst_25860 = (state_25892[(10)]);
var inst_25856 = (state_25892[(9)]);
var inst_25860__$1 = (function (){var G__25906 = inst_25856;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25906) : f.call(null,G__25906));
})();
var inst_25861 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25860__$1,inst_25853);
var inst_25862 = cljs.core.keyword_identical_QMARK_(inst_25853,cljs.core.constant$keyword$59);
var inst_25863 = (inst_25861) || (inst_25862);
var state_25892__$1 = (function (){var statearr_25907 = state_25892;
(statearr_25907[(10)] = inst_25860__$1);

return statearr_25907;
})();
if(cljs.core.truth_(inst_25863)){
var statearr_25908_25933 = state_25892__$1;
(statearr_25908_25933[(1)] = (8));

} else {
var statearr_25909_25934 = state_25892__$1;
(statearr_25909_25934[(1)] = (9));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_25893 === (14))){
var inst_25885 = (state_25892[(2)]);
var inst_25886 = cljs.core.async.close_BANG_(out);
var state_25892__$1 = (function (){var statearr_25911 = state_25892;
(statearr_25911[(13)] = inst_25885);

return statearr_25911;
})();
var statearr_25912_25935 = state_25892__$1;
(statearr_25912_25935[(2)] = inst_25886);

(statearr_25912_25935[(1)] = (7));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25893 === (10))){
var inst_25875 = (state_25892[(2)]);
var state_25892__$1 = state_25892;
var statearr_25913_25936 = state_25892__$1;
(statearr_25913_25936[(2)] = inst_25875);

(statearr_25913_25936[(1)] = (7));


return cljs.core.constant$keyword$44;
} else {
if((state_val_25893 === (8))){
var inst_25860 = (state_25892[(10)]);
var inst_25852 = (state_25892[(8)]);
var inst_25856 = (state_25892[(9)]);
var inst_25865 = inst_25852.push(inst_25856);
var tmp25910 = inst_25852;
var inst_25852__$1 = tmp25910;
var inst_25853 = inst_25860;
var state_25892__$1 = (function (){var statearr_25914 = state_25892;
(statearr_25914[(7)] = inst_25853);

(statearr_25914[(14)] = inst_25865);

(statearr_25914[(8)] = inst_25852__$1);

return statearr_25914;
})();
var statearr_25915_25937 = state_25892__$1;
(statearr_25915_25937[(2)] = null);

(statearr_25915_25937[(1)] = (2));


return cljs.core.constant$keyword$44;
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
});})(c__11276__auto___25923,out))
;
return ((function (switch__11261__auto__,c__11276__auto___25923,out){
return (function() {
var state_machine__11262__auto__ = null;
var state_machine__11262__auto____0 = (function (){
var statearr_25919 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25919[(0)] = state_machine__11262__auto__);

(statearr_25919[(1)] = (1));

return statearr_25919;
});
var state_machine__11262__auto____1 = (function (state_25892){
while(true){
var ret_value__11263__auto__ = (function (){try{while(true){
var result__11264__auto__ = switch__11261__auto__(state_25892);
if(cljs.core.keyword_identical_QMARK_(result__11264__auto__,cljs.core.constant$keyword$44)){
continue;
} else {
return result__11264__auto__;
}
break;
}
}catch (e25920){if((e25920 instanceof Object)){
var ex__11265__auto__ = e25920;
var statearr_25921_25938 = state_25892;
(statearr_25921_25938[(5)] = ex__11265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25892);

return cljs.core.constant$keyword$44;
} else {
throw e25920;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11263__auto__,cljs.core.constant$keyword$44)){
var G__25939 = state_25892;
state_25892 = G__25939;
continue;
} else {
return ret_value__11263__auto__;
}
break;
}
});
state_machine__11262__auto__ = function(state_25892){
switch(arguments.length){
case 0:
return state_machine__11262__auto____0.call(this);
case 1:
return state_machine__11262__auto____1.call(this,state_25892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11262__auto____0;
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11262__auto____1;
return state_machine__11262__auto__;
})()
;})(switch__11261__auto__,c__11276__auto___25923,out))
})();
var state__11278__auto__ = (function (){var statearr_25922 = (function (){return (f__11277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11277__auto__.cljs$core$IFn$_invoke$arity$0() : f__11277__auto__.call(null));
})();
(statearr_25922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11276__auto___25923);

return statearr_25922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11278__auto__);
});})(c__11276__auto___25923,out))
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
