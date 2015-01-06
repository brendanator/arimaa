// Compiled by ClojureScript 0.0-2657 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t23553 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23553 = (function (f,fn_handler,meta23554){
this.f = f;
this.fn_handler = fn_handler;
this.meta23554 = meta23554;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23553.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23553.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t23553.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t23553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23555){
var self__ = this;
var _23555__$1 = this;
return self__.meta23554;
});

cljs.core.async.t23553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23555,meta23554__$1){
var self__ = this;
var _23555__$1 = this;
return (new cljs.core.async.t23553(self__.f,self__.fn_handler,meta23554__$1));
});

cljs.core.async.t23553.cljs$lang$type = true;

cljs.core.async.t23553.cljs$lang$ctorStr = "cljs.core.async/t23553";

cljs.core.async.t23553.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core.async/t23553");
});

cljs.core.async.__GT_t23553 = (function __GT_t23553(f__$1,fn_handler__$1,meta23554){
return (new cljs.core.async.t23553(f__$1,fn_handler__$1,meta23554));
});

}

return (new cljs.core.async.t23553(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,20,cljs.core.constant$keyword$9,16,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,13,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
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
var G__23557 = buff;
if(G__23557){
var bit__4412__auto__ = null;
if(cljs.core.truth_((function (){var or__3731__auto__ = bit__4412__auto__;
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
return G__23557.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__23557.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23557);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23557);
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
var val_23574 = (function (){var G__23571 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23571) : cljs.core.deref.call(null,G__23571));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__23572_23575 = val_23574;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23572_23575) : fn1.call(null,G__23572_23575));
} else {
cljs.core.async.impl.dispatch.run(((function (val_23574,ret){
return (function (){
var G__23573 = val_23574;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23573) : fn1.call(null,G__23573));
});})(val_23574,ret))
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
var G__23584 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23584) : cljs.core.deref.call(null,G__23584));
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
var ret = (function (){var G__23585 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23585) : cljs.core.deref.call(null,G__23585));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__23586_23588 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23586_23588) : fn1.call(null,G__23586_23588));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__23587 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23587) : fn1.call(null,G__23587));
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
var n__4618__auto___23589 = n;
var x_23590 = (0);
while(true){
if((x_23590 < n__4618__auto___23589)){
(a[x_23590] = (0));

var G__23591 = (x_23590 + (1));
x_23590 = G__23591;
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

var G__23592 = (i + (1));
i = G__23592;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__23600 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23600) : cljs.core.atom.call(null,G__23600));
})();
if(typeof cljs.core.async.t23601 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23601 = (function (flag,alt_flag,meta23602){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23602 = meta23602;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23601.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23601.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23604 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23604) : cljs.core.deref.call(null,G__23604));
});})(flag))
;

cljs.core.async.t23601.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23605_23607 = self__.flag;
var G__23606_23608 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23605_23607,G__23606_23608) : cljs.core.reset_BANG_.call(null,G__23605_23607,G__23606_23608));

return true;
});})(flag))
;

cljs.core.async.t23601.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23603){
var self__ = this;
var _23603__$1 = this;
return self__.meta23602;
});})(flag))
;

cljs.core.async.t23601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23603,meta23602__$1){
var self__ = this;
var _23603__$1 = this;
return (new cljs.core.async.t23601(self__.flag,self__.alt_flag,meta23602__$1));
});})(flag))
;

cljs.core.async.t23601.cljs$lang$type = true;

cljs.core.async.t23601.cljs$lang$ctorStr = "cljs.core.async/t23601";

cljs.core.async.t23601.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core.async/t23601");
});})(flag))
;

cljs.core.async.__GT_t23601 = ((function (flag){
return (function __GT_t23601(flag__$1,alt_flag__$1,meta23602){
return (new cljs.core.async.t23601(flag__$1,alt_flag__$1,meta23602));
});})(flag))
;

}

return (new cljs.core.async.t23601(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,15,cljs.core.constant$keyword$9,146,cljs.core.constant$keyword$10,5,cljs.core.constant$keyword$11,141,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t23612 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23612 = (function (cb,flag,alt_handler,meta23613){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23613 = meta23613;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23612.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23612.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t23612.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t23612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23614){
var self__ = this;
var _23614__$1 = this;
return self__.meta23613;
});

cljs.core.async.t23612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23614,meta23613__$1){
var self__ = this;
var _23614__$1 = this;
return (new cljs.core.async.t23612(self__.cb,self__.flag,self__.alt_handler,meta23613__$1));
});

cljs.core.async.t23612.cljs$lang$type = true;

cljs.core.async.t23612.cljs$lang$ctorStr = "cljs.core.async/t23612";

cljs.core.async.t23612.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core.async/t23612");
});

cljs.core.async.__GT_t23612 = (function __GT_t23612(cb__$1,flag__$1,alt_handler__$1,meta23613){
return (new cljs.core.async.t23612(cb__$1,flag__$1,alt_handler__$1,meta23613));
});

}

return (new cljs.core.async.t23612(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,11,cljs.core.constant$keyword$9,154,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,149,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
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
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__23622 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__23622) : port.call(null,G__23622));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__23623 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__23623) : port.call(null,G__23623));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23615_SHARP_){
var G__23624 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23615_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__23624) : fret.call(null,G__23624));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23616_SHARP_){
var G__23625 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23616_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__23625) : fret.call(null,G__23625));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23626 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23626) : cljs.core.deref.call(null,G__23626));
})(),(function (){var or__3731__auto__ = wport;
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23627 = (i + (1));
i = G__23627;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3731__auto__ = ret;
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$7)){
var temp__4126__auto__ = (function (){var and__3719__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__3719__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__3719__auto__;
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
var alts_BANG___delegate = function (ports,p__23628){
var map__23630 = p__23628;
var map__23630__$1 = ((cljs.core.seq_QMARK_(map__23630))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23630):map__23630);
var opts = map__23630__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__23628 = null;
if (arguments.length > 1) {
  p__23628 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__23628);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23631){
var ports = cljs.core.first(arglist__23631);
var p__23628 = cljs.core.rest(arglist__23631);
return alts_BANG___delegate(ports,p__23628);
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
var c__11621__auto___23729 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11621__auto___23729){
return (function (){
var f__11622__auto__ = (function (){var switch__11541__auto__ = ((function (c__11621__auto___23729){
return (function (state_23705){
var state_val_23706 = (state_23705[(1)]);
if((state_val_23706 === (7))){
var inst_23701 = (state_23705[(2)]);
var state_23705__$1 = state_23705;
var statearr_23707_23730 = state_23705__$1;
(statearr_23707_23730[(2)] = inst_23701);

(statearr_23707_23730[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_23706 === (1))){
var state_23705__$1 = state_23705;
var statearr_23708_23731 = state_23705__$1;
(statearr_23708_23731[(2)] = null);

(statearr_23708_23731[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_23706 === (4))){
var inst_23684 = (state_23705[(7)]);
var inst_23684__$1 = (state_23705[(2)]);
var inst_23685 = (inst_23684__$1 == null);
var state_23705__$1 = (function (){var statearr_23709 = state_23705;
(statearr_23709[(7)] = inst_23684__$1);

return statearr_23709;
})();
if(cljs.core.truth_(inst_23685)){
var statearr_23710_23732 = state_23705__$1;
(statearr_23710_23732[(1)] = (5));

} else {
var statearr_23711_23733 = state_23705__$1;
(statearr_23711_23733[(1)] = (6));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_23706 === (13))){
var state_23705__$1 = state_23705;
var statearr_23712_23734 = state_23705__$1;
(statearr_23712_23734[(2)] = null);

(statearr_23712_23734[(1)] = (14));


return cljs.core.constant$keyword$65;
} else {
if((state_val_23706 === (6))){
var inst_23684 = (state_23705[(7)]);
var state_23705__$1 = state_23705;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23705__$1,(11),to,inst_23684);
} else {
if((state_val_23706 === (3))){
var inst_23703 = (state_23705[(2)]);
var state_23705__$1 = state_23705;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23705__$1,inst_23703);
} else {
if((state_val_23706 === (12))){
var state_23705__$1 = state_23705;
var statearr_23713_23735 = state_23705__$1;
(statearr_23713_23735[(2)] = null);

(statearr_23713_23735[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_23706 === (2))){
var state_23705__$1 = state_23705;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23705__$1,(4),from);
} else {
if((state_val_23706 === (11))){
var inst_23694 = (state_23705[(2)]);
var state_23705__$1 = state_23705;
if(cljs.core.truth_(inst_23694)){
var statearr_23714_23736 = state_23705__$1;
(statearr_23714_23736[(1)] = (12));

} else {
var statearr_23715_23737 = state_23705__$1;
(statearr_23715_23737[(1)] = (13));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_23706 === (9))){
var state_23705__$1 = state_23705;
var statearr_23716_23738 = state_23705__$1;
(statearr_23716_23738[(2)] = null);

(statearr_23716_23738[(1)] = (10));


return cljs.core.constant$keyword$65;
} else {
if((state_val_23706 === (5))){
var state_23705__$1 = state_23705;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23717_23739 = state_23705__$1;
(statearr_23717_23739[(1)] = (8));

} else {
var statearr_23718_23740 = state_23705__$1;
(statearr_23718_23740[(1)] = (9));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_23706 === (14))){
var inst_23699 = (state_23705[(2)]);
var state_23705__$1 = state_23705;
var statearr_23719_23741 = state_23705__$1;
(statearr_23719_23741[(2)] = inst_23699);

(statearr_23719_23741[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_23706 === (10))){
var inst_23691 = (state_23705[(2)]);
var state_23705__$1 = state_23705;
var statearr_23720_23742 = state_23705__$1;
(statearr_23720_23742[(2)] = inst_23691);

(statearr_23720_23742[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_23706 === (8))){
var inst_23688 = cljs.core.async.close_BANG_(to);
var state_23705__$1 = state_23705;
var statearr_23721_23743 = state_23705__$1;
(statearr_23721_23743[(2)] = inst_23688);

(statearr_23721_23743[(1)] = (10));


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
});})(c__11621__auto___23729))
;
return ((function (switch__11541__auto__,c__11621__auto___23729){
return (function() {
var state_machine__11542__auto__ = null;
var state_machine__11542__auto____0 = (function (){
var statearr_23725 = [null,null,null,null,null,null,null,null];
(statearr_23725[(0)] = state_machine__11542__auto__);

(statearr_23725[(1)] = (1));

return statearr_23725;
});
var state_machine__11542__auto____1 = (function (state_23705){
while(true){
var ret_value__11543__auto__ = (function (){try{while(true){
var result__11544__auto__ = switch__11541__auto__(state_23705);
if(cljs.core.keyword_identical_QMARK_(result__11544__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11544__auto__;
}
break;
}
}catch (e23726){if((e23726 instanceof Object)){
var ex__11545__auto__ = e23726;
var statearr_23727_23744 = state_23705;
(statearr_23727_23744[(5)] = ex__11545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23705);

return cljs.core.constant$keyword$65;
} else {
throw e23726;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11543__auto__,cljs.core.constant$keyword$65)){
var G__23745 = state_23705;
state_23705 = G__23745;
continue;
} else {
return ret_value__11543__auto__;
}
break;
}
});
state_machine__11542__auto__ = function(state_23705){
switch(arguments.length){
case 0:
return state_machine__11542__auto____0.call(this);
case 1:
return state_machine__11542__auto____1.call(this,state_23705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11542__auto____0;
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11542__auto____1;
return state_machine__11542__auto__;
})()
;})(switch__11541__auto__,c__11621__auto___23729))
})();
var state__11623__auto__ = (function (){var statearr_23728 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_23728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto___23729);

return statearr_23728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(c__11621__auto___23729))
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
return (function (p__23931){
var vec__23932 = p__23931;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23932,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23932,(1),null);
var job = vec__23932;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__11621__auto___24116 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11621__auto___24116,res,vec__23932,v,p,job,jobs,results){
return (function (){
var f__11622__auto__ = (function (){var switch__11541__auto__ = ((function (c__11621__auto___24116,res,vec__23932,v,p,job,jobs,results){
return (function (state_23937){
var state_val_23938 = (state_23937[(1)]);
if((state_val_23938 === (2))){
var inst_23934 = (state_23937[(2)]);
var inst_23935 = cljs.core.async.close_BANG_(res);
var state_23937__$1 = (function (){var statearr_23939 = state_23937;
(statearr_23939[(7)] = inst_23934);

return statearr_23939;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23937__$1,inst_23935);
} else {
if((state_val_23938 === (1))){
var state_23937__$1 = state_23937;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23937__$1,(2),res,v);
} else {
return null;
}
}
});})(c__11621__auto___24116,res,vec__23932,v,p,job,jobs,results))
;
return ((function (switch__11541__auto__,c__11621__auto___24116,res,vec__23932,v,p,job,jobs,results){
return (function() {
var state_machine__11542__auto__ = null;
var state_machine__11542__auto____0 = (function (){
var statearr_23943 = [null,null,null,null,null,null,null,null];
(statearr_23943[(0)] = state_machine__11542__auto__);

(statearr_23943[(1)] = (1));

return statearr_23943;
});
var state_machine__11542__auto____1 = (function (state_23937){
while(true){
var ret_value__11543__auto__ = (function (){try{while(true){
var result__11544__auto__ = switch__11541__auto__(state_23937);
if(cljs.core.keyword_identical_QMARK_(result__11544__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11544__auto__;
}
break;
}
}catch (e23944){if((e23944 instanceof Object)){
var ex__11545__auto__ = e23944;
var statearr_23945_24117 = state_23937;
(statearr_23945_24117[(5)] = ex__11545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23937);

return cljs.core.constant$keyword$65;
} else {
throw e23944;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11543__auto__,cljs.core.constant$keyword$65)){
var G__24118 = state_23937;
state_23937 = G__24118;
continue;
} else {
return ret_value__11543__auto__;
}
break;
}
});
state_machine__11542__auto__ = function(state_23937){
switch(arguments.length){
case 0:
return state_machine__11542__auto____0.call(this);
case 1:
return state_machine__11542__auto____1.call(this,state_23937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11542__auto____0;
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11542__auto____1;
return state_machine__11542__auto__;
})()
;})(switch__11541__auto__,c__11621__auto___24116,res,vec__23932,v,p,job,jobs,results))
})();
var state__11623__auto__ = (function (){var statearr_23946 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_23946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto___24116);

return statearr_23946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(c__11621__auto___24116,res,vec__23932,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23947){
var vec__23948 = p__23947;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23948,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23948,(1),null);
var job = vec__23948;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__23949_24119 = v;
var G__23950_24120 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__23949_24119,G__23950_24120) : xf.call(null,G__23949_24119,G__23950_24120));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4618__auto___24121 = n;
var __24122 = (0);
while(true){
if((__24122 < n__4618__auto___24121)){
var G__23951_24123 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23951_24123) {
case "async":
var c__11621__auto___24125 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24122,c__11621__auto___24125,G__23951_24123,n__4618__auto___24121,jobs,results,process,async){
return (function (){
var f__11622__auto__ = (function (){var switch__11541__auto__ = ((function (__24122,c__11621__auto___24125,G__23951_24123,n__4618__auto___24121,jobs,results,process,async){
return (function (state_23964){
var state_val_23965 = (state_23964[(1)]);
if((state_val_23965 === (7))){
var inst_23960 = (state_23964[(2)]);
var state_23964__$1 = state_23964;
var statearr_23966_24126 = state_23964__$1;
(statearr_23966_24126[(2)] = inst_23960);

(statearr_23966_24126[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_23965 === (6))){
var state_23964__$1 = state_23964;
var statearr_23967_24127 = state_23964__$1;
(statearr_23967_24127[(2)] = null);

(statearr_23967_24127[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_23965 === (5))){
var state_23964__$1 = state_23964;
var statearr_23968_24128 = state_23964__$1;
(statearr_23968_24128[(2)] = null);

(statearr_23968_24128[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_23965 === (4))){
var inst_23954 = (state_23964[(2)]);
var inst_23955 = async(inst_23954);
var state_23964__$1 = state_23964;
if(cljs.core.truth_(inst_23955)){
var statearr_23969_24129 = state_23964__$1;
(statearr_23969_24129[(1)] = (5));

} else {
var statearr_23970_24130 = state_23964__$1;
(statearr_23970_24130[(1)] = (6));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_23965 === (3))){
var inst_23962 = (state_23964[(2)]);
var state_23964__$1 = state_23964;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23964__$1,inst_23962);
} else {
if((state_val_23965 === (2))){
var state_23964__$1 = state_23964;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23964__$1,(4),jobs);
} else {
if((state_val_23965 === (1))){
var state_23964__$1 = state_23964;
var statearr_23971_24131 = state_23964__$1;
(statearr_23971_24131[(2)] = null);

(statearr_23971_24131[(1)] = (2));


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
});})(__24122,c__11621__auto___24125,G__23951_24123,n__4618__auto___24121,jobs,results,process,async))
;
return ((function (__24122,switch__11541__auto__,c__11621__auto___24125,G__23951_24123,n__4618__auto___24121,jobs,results,process,async){
return (function() {
var state_machine__11542__auto__ = null;
var state_machine__11542__auto____0 = (function (){
var statearr_23975 = [null,null,null,null,null,null,null];
(statearr_23975[(0)] = state_machine__11542__auto__);

(statearr_23975[(1)] = (1));

return statearr_23975;
});
var state_machine__11542__auto____1 = (function (state_23964){
while(true){
var ret_value__11543__auto__ = (function (){try{while(true){
var result__11544__auto__ = switch__11541__auto__(state_23964);
if(cljs.core.keyword_identical_QMARK_(result__11544__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11544__auto__;
}
break;
}
}catch (e23976){if((e23976 instanceof Object)){
var ex__11545__auto__ = e23976;
var statearr_23977_24132 = state_23964;
(statearr_23977_24132[(5)] = ex__11545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23964);

return cljs.core.constant$keyword$65;
} else {
throw e23976;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11543__auto__,cljs.core.constant$keyword$65)){
var G__24133 = state_23964;
state_23964 = G__24133;
continue;
} else {
return ret_value__11543__auto__;
}
break;
}
});
state_machine__11542__auto__ = function(state_23964){
switch(arguments.length){
case 0:
return state_machine__11542__auto____0.call(this);
case 1:
return state_machine__11542__auto____1.call(this,state_23964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11542__auto____0;
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11542__auto____1;
return state_machine__11542__auto__;
})()
;})(__24122,switch__11541__auto__,c__11621__auto___24125,G__23951_24123,n__4618__auto___24121,jobs,results,process,async))
})();
var state__11623__auto__ = (function (){var statearr_23978 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_23978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto___24125);

return statearr_23978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(__24122,c__11621__auto___24125,G__23951_24123,n__4618__auto___24121,jobs,results,process,async))
);


break;
case "compute":
var c__11621__auto___24134 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24122,c__11621__auto___24134,G__23951_24123,n__4618__auto___24121,jobs,results,process,async){
return (function (){
var f__11622__auto__ = (function (){var switch__11541__auto__ = ((function (__24122,c__11621__auto___24134,G__23951_24123,n__4618__auto___24121,jobs,results,process,async){
return (function (state_23991){
var state_val_23992 = (state_23991[(1)]);
if((state_val_23992 === (7))){
var inst_23987 = (state_23991[(2)]);
var state_23991__$1 = state_23991;
var statearr_23993_24135 = state_23991__$1;
(statearr_23993_24135[(2)] = inst_23987);

(statearr_23993_24135[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_23992 === (6))){
var state_23991__$1 = state_23991;
var statearr_23994_24136 = state_23991__$1;
(statearr_23994_24136[(2)] = null);

(statearr_23994_24136[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_23992 === (5))){
var state_23991__$1 = state_23991;
var statearr_23995_24137 = state_23991__$1;
(statearr_23995_24137[(2)] = null);

(statearr_23995_24137[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_23992 === (4))){
var inst_23981 = (state_23991[(2)]);
var inst_23982 = process(inst_23981);
var state_23991__$1 = state_23991;
if(cljs.core.truth_(inst_23982)){
var statearr_23996_24138 = state_23991__$1;
(statearr_23996_24138[(1)] = (5));

} else {
var statearr_23997_24139 = state_23991__$1;
(statearr_23997_24139[(1)] = (6));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_23992 === (3))){
var inst_23989 = (state_23991[(2)]);
var state_23991__$1 = state_23991;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23991__$1,inst_23989);
} else {
if((state_val_23992 === (2))){
var state_23991__$1 = state_23991;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23991__$1,(4),jobs);
} else {
if((state_val_23992 === (1))){
var state_23991__$1 = state_23991;
var statearr_23998_24140 = state_23991__$1;
(statearr_23998_24140[(2)] = null);

(statearr_23998_24140[(1)] = (2));


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
});})(__24122,c__11621__auto___24134,G__23951_24123,n__4618__auto___24121,jobs,results,process,async))
;
return ((function (__24122,switch__11541__auto__,c__11621__auto___24134,G__23951_24123,n__4618__auto___24121,jobs,results,process,async){
return (function() {
var state_machine__11542__auto__ = null;
var state_machine__11542__auto____0 = (function (){
var statearr_24002 = [null,null,null,null,null,null,null];
(statearr_24002[(0)] = state_machine__11542__auto__);

(statearr_24002[(1)] = (1));

return statearr_24002;
});
var state_machine__11542__auto____1 = (function (state_23991){
while(true){
var ret_value__11543__auto__ = (function (){try{while(true){
var result__11544__auto__ = switch__11541__auto__(state_23991);
if(cljs.core.keyword_identical_QMARK_(result__11544__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11544__auto__;
}
break;
}
}catch (e24003){if((e24003 instanceof Object)){
var ex__11545__auto__ = e24003;
var statearr_24004_24141 = state_23991;
(statearr_24004_24141[(5)] = ex__11545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23991);

return cljs.core.constant$keyword$65;
} else {
throw e24003;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11543__auto__,cljs.core.constant$keyword$65)){
var G__24142 = state_23991;
state_23991 = G__24142;
continue;
} else {
return ret_value__11543__auto__;
}
break;
}
});
state_machine__11542__auto__ = function(state_23991){
switch(arguments.length){
case 0:
return state_machine__11542__auto____0.call(this);
case 1:
return state_machine__11542__auto____1.call(this,state_23991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11542__auto____0;
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11542__auto____1;
return state_machine__11542__auto__;
})()
;})(__24122,switch__11541__auto__,c__11621__auto___24134,G__23951_24123,n__4618__auto___24121,jobs,results,process,async))
})();
var state__11623__auto__ = (function (){var statearr_24005 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_24005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto___24134);

return statearr_24005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(__24122,c__11621__auto___24134,G__23951_24123,n__4618__auto___24121,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24143 = (__24122 + (1));
__24122 = G__24143;
continue;
} else {
}
break;
}

var c__11621__auto___24144 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11621__auto___24144,jobs,results,process,async){
return (function (){
var f__11622__auto__ = (function (){var switch__11541__auto__ = ((function (c__11621__auto___24144,jobs,results,process,async){
return (function (state_24027){
var state_val_24028 = (state_24027[(1)]);
if((state_val_24028 === (9))){
var inst_24020 = (state_24027[(2)]);
var state_24027__$1 = (function (){var statearr_24029 = state_24027;
(statearr_24029[(7)] = inst_24020);

return statearr_24029;
})();
var statearr_24030_24145 = state_24027__$1;
(statearr_24030_24145[(2)] = null);

(statearr_24030_24145[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24028 === (8))){
var inst_24013 = (state_24027[(8)]);
var inst_24018 = (state_24027[(2)]);
var state_24027__$1 = (function (){var statearr_24031 = state_24027;
(statearr_24031[(9)] = inst_24018);

return statearr_24031;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24027__$1,(9),results,inst_24013);
} else {
if((state_val_24028 === (7))){
var inst_24023 = (state_24027[(2)]);
var state_24027__$1 = state_24027;
var statearr_24032_24146 = state_24027__$1;
(statearr_24032_24146[(2)] = inst_24023);

(statearr_24032_24146[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24028 === (6))){
var inst_24008 = (state_24027[(10)]);
var inst_24013 = (state_24027[(8)]);
var inst_24013__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_24014 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24015 = [inst_24008,inst_24013__$1];
var inst_24016 = (new cljs.core.PersistentVector(null,2,(5),inst_24014,inst_24015,null));
var state_24027__$1 = (function (){var statearr_24033 = state_24027;
(statearr_24033[(8)] = inst_24013__$1);

return statearr_24033;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24027__$1,(8),jobs,inst_24016);
} else {
if((state_val_24028 === (5))){
var inst_24011 = cljs.core.async.close_BANG_(jobs);
var state_24027__$1 = state_24027;
var statearr_24034_24147 = state_24027__$1;
(statearr_24034_24147[(2)] = inst_24011);

(statearr_24034_24147[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24028 === (4))){
var inst_24008 = (state_24027[(10)]);
var inst_24008__$1 = (state_24027[(2)]);
var inst_24009 = (inst_24008__$1 == null);
var state_24027__$1 = (function (){var statearr_24035 = state_24027;
(statearr_24035[(10)] = inst_24008__$1);

return statearr_24035;
})();
if(cljs.core.truth_(inst_24009)){
var statearr_24036_24148 = state_24027__$1;
(statearr_24036_24148[(1)] = (5));

} else {
var statearr_24037_24149 = state_24027__$1;
(statearr_24037_24149[(1)] = (6));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_24028 === (3))){
var inst_24025 = (state_24027[(2)]);
var state_24027__$1 = state_24027;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24027__$1,inst_24025);
} else {
if((state_val_24028 === (2))){
var state_24027__$1 = state_24027;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24027__$1,(4),from);
} else {
if((state_val_24028 === (1))){
var state_24027__$1 = state_24027;
var statearr_24038_24150 = state_24027__$1;
(statearr_24038_24150[(2)] = null);

(statearr_24038_24150[(1)] = (2));


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
});})(c__11621__auto___24144,jobs,results,process,async))
;
return ((function (switch__11541__auto__,c__11621__auto___24144,jobs,results,process,async){
return (function() {
var state_machine__11542__auto__ = null;
var state_machine__11542__auto____0 = (function (){
var statearr_24042 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24042[(0)] = state_machine__11542__auto__);

(statearr_24042[(1)] = (1));

return statearr_24042;
});
var state_machine__11542__auto____1 = (function (state_24027){
while(true){
var ret_value__11543__auto__ = (function (){try{while(true){
var result__11544__auto__ = switch__11541__auto__(state_24027);
if(cljs.core.keyword_identical_QMARK_(result__11544__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11544__auto__;
}
break;
}
}catch (e24043){if((e24043 instanceof Object)){
var ex__11545__auto__ = e24043;
var statearr_24044_24151 = state_24027;
(statearr_24044_24151[(5)] = ex__11545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24027);

return cljs.core.constant$keyword$65;
} else {
throw e24043;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11543__auto__,cljs.core.constant$keyword$65)){
var G__24152 = state_24027;
state_24027 = G__24152;
continue;
} else {
return ret_value__11543__auto__;
}
break;
}
});
state_machine__11542__auto__ = function(state_24027){
switch(arguments.length){
case 0:
return state_machine__11542__auto____0.call(this);
case 1:
return state_machine__11542__auto____1.call(this,state_24027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11542__auto____0;
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11542__auto____1;
return state_machine__11542__auto__;
})()
;})(switch__11541__auto__,c__11621__auto___24144,jobs,results,process,async))
})();
var state__11623__auto__ = (function (){var statearr_24045 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_24045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto___24144);

return statearr_24045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(c__11621__auto___24144,jobs,results,process,async))
);


var c__11621__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11621__auto__,jobs,results,process,async){
return (function (){
var f__11622__auto__ = (function (){var switch__11541__auto__ = ((function (c__11621__auto__,jobs,results,process,async){
return (function (state_24083){
var state_val_24084 = (state_24083[(1)]);
if((state_val_24084 === (7))){
var inst_24079 = (state_24083[(2)]);
var state_24083__$1 = state_24083;
var statearr_24085_24153 = state_24083__$1;
(statearr_24085_24153[(2)] = inst_24079);

(statearr_24085_24153[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24084 === (20))){
var state_24083__$1 = state_24083;
var statearr_24086_24154 = state_24083__$1;
(statearr_24086_24154[(2)] = null);

(statearr_24086_24154[(1)] = (21));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24084 === (1))){
var state_24083__$1 = state_24083;
var statearr_24087_24155 = state_24083__$1;
(statearr_24087_24155[(2)] = null);

(statearr_24087_24155[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24084 === (4))){
var inst_24048 = (state_24083[(7)]);
var inst_24048__$1 = (state_24083[(2)]);
var inst_24049 = (inst_24048__$1 == null);
var state_24083__$1 = (function (){var statearr_24088 = state_24083;
(statearr_24088[(7)] = inst_24048__$1);

return statearr_24088;
})();
if(cljs.core.truth_(inst_24049)){
var statearr_24089_24156 = state_24083__$1;
(statearr_24089_24156[(1)] = (5));

} else {
var statearr_24090_24157 = state_24083__$1;
(statearr_24090_24157[(1)] = (6));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_24084 === (15))){
var inst_24061 = (state_24083[(8)]);
var state_24083__$1 = state_24083;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24083__$1,(18),to,inst_24061);
} else {
if((state_val_24084 === (21))){
var inst_24074 = (state_24083[(2)]);
var state_24083__$1 = state_24083;
var statearr_24091_24158 = state_24083__$1;
(statearr_24091_24158[(2)] = inst_24074);

(statearr_24091_24158[(1)] = (13));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24084 === (13))){
var inst_24076 = (state_24083[(2)]);
var state_24083__$1 = (function (){var statearr_24092 = state_24083;
(statearr_24092[(9)] = inst_24076);

return statearr_24092;
})();
var statearr_24093_24159 = state_24083__$1;
(statearr_24093_24159[(2)] = null);

(statearr_24093_24159[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24084 === (6))){
var inst_24048 = (state_24083[(7)]);
var state_24083__$1 = state_24083;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24083__$1,(11),inst_24048);
} else {
if((state_val_24084 === (17))){
var inst_24069 = (state_24083[(2)]);
var state_24083__$1 = state_24083;
if(cljs.core.truth_(inst_24069)){
var statearr_24094_24160 = state_24083__$1;
(statearr_24094_24160[(1)] = (19));

} else {
var statearr_24095_24161 = state_24083__$1;
(statearr_24095_24161[(1)] = (20));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_24084 === (3))){
var inst_24081 = (state_24083[(2)]);
var state_24083__$1 = state_24083;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24083__$1,inst_24081);
} else {
if((state_val_24084 === (12))){
var inst_24058 = (state_24083[(10)]);
var state_24083__$1 = state_24083;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24083__$1,(14),inst_24058);
} else {
if((state_val_24084 === (2))){
var state_24083__$1 = state_24083;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24083__$1,(4),results);
} else {
if((state_val_24084 === (19))){
var state_24083__$1 = state_24083;
var statearr_24096_24162 = state_24083__$1;
(statearr_24096_24162[(2)] = null);

(statearr_24096_24162[(1)] = (12));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24084 === (11))){
var inst_24058 = (state_24083[(2)]);
var state_24083__$1 = (function (){var statearr_24097 = state_24083;
(statearr_24097[(10)] = inst_24058);

return statearr_24097;
})();
var statearr_24098_24163 = state_24083__$1;
(statearr_24098_24163[(2)] = null);

(statearr_24098_24163[(1)] = (12));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24084 === (9))){
var state_24083__$1 = state_24083;
var statearr_24099_24164 = state_24083__$1;
(statearr_24099_24164[(2)] = null);

(statearr_24099_24164[(1)] = (10));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24084 === (5))){
var state_24083__$1 = state_24083;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24100_24165 = state_24083__$1;
(statearr_24100_24165[(1)] = (8));

} else {
var statearr_24101_24166 = state_24083__$1;
(statearr_24101_24166[(1)] = (9));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_24084 === (14))){
var inst_24061 = (state_24083[(8)]);
var inst_24063 = (state_24083[(11)]);
var inst_24061__$1 = (state_24083[(2)]);
var inst_24062 = (inst_24061__$1 == null);
var inst_24063__$1 = cljs.core.not(inst_24062);
var state_24083__$1 = (function (){var statearr_24102 = state_24083;
(statearr_24102[(8)] = inst_24061__$1);

(statearr_24102[(11)] = inst_24063__$1);

return statearr_24102;
})();
if(inst_24063__$1){
var statearr_24103_24167 = state_24083__$1;
(statearr_24103_24167[(1)] = (15));

} else {
var statearr_24104_24168 = state_24083__$1;
(statearr_24104_24168[(1)] = (16));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_24084 === (16))){
var inst_24063 = (state_24083[(11)]);
var state_24083__$1 = state_24083;
var statearr_24105_24169 = state_24083__$1;
(statearr_24105_24169[(2)] = inst_24063);

(statearr_24105_24169[(1)] = (17));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24084 === (10))){
var inst_24055 = (state_24083[(2)]);
var state_24083__$1 = state_24083;
var statearr_24106_24170 = state_24083__$1;
(statearr_24106_24170[(2)] = inst_24055);

(statearr_24106_24170[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24084 === (18))){
var inst_24066 = (state_24083[(2)]);
var state_24083__$1 = state_24083;
var statearr_24107_24171 = state_24083__$1;
(statearr_24107_24171[(2)] = inst_24066);

(statearr_24107_24171[(1)] = (17));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24084 === (8))){
var inst_24052 = cljs.core.async.close_BANG_(to);
var state_24083__$1 = state_24083;
var statearr_24108_24172 = state_24083__$1;
(statearr_24108_24172[(2)] = inst_24052);

(statearr_24108_24172[(1)] = (10));


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
});})(c__11621__auto__,jobs,results,process,async))
;
return ((function (switch__11541__auto__,c__11621__auto__,jobs,results,process,async){
return (function() {
var state_machine__11542__auto__ = null;
var state_machine__11542__auto____0 = (function (){
var statearr_24112 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24112[(0)] = state_machine__11542__auto__);

(statearr_24112[(1)] = (1));

return statearr_24112;
});
var state_machine__11542__auto____1 = (function (state_24083){
while(true){
var ret_value__11543__auto__ = (function (){try{while(true){
var result__11544__auto__ = switch__11541__auto__(state_24083);
if(cljs.core.keyword_identical_QMARK_(result__11544__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11544__auto__;
}
break;
}
}catch (e24113){if((e24113 instanceof Object)){
var ex__11545__auto__ = e24113;
var statearr_24114_24173 = state_24083;
(statearr_24114_24173[(5)] = ex__11545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24083);

return cljs.core.constant$keyword$65;
} else {
throw e24113;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11543__auto__,cljs.core.constant$keyword$65)){
var G__24174 = state_24083;
state_24083 = G__24174;
continue;
} else {
return ret_value__11543__auto__;
}
break;
}
});
state_machine__11542__auto__ = function(state_24083){
switch(arguments.length){
case 0:
return state_machine__11542__auto____0.call(this);
case 1:
return state_machine__11542__auto____1.call(this,state_24083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11542__auto____0;
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11542__auto____1;
return state_machine__11542__auto__;
})()
;})(switch__11541__auto__,c__11621__auto__,jobs,results,process,async))
})();
var state__11623__auto__ = (function (){var statearr_24115 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_24115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto__);

return statearr_24115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(c__11621__auto__,jobs,results,process,async))
);

return c__11621__auto__;
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
var c__11621__auto___24297 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11621__auto___24297,tc,fc){
return (function (){
var f__11622__auto__ = (function (){var switch__11541__auto__ = ((function (c__11621__auto___24297,tc,fc){
return (function (state_24271){
var state_val_24272 = (state_24271[(1)]);
if((state_val_24272 === (7))){
var inst_24267 = (state_24271[(2)]);
var state_24271__$1 = state_24271;
var statearr_24273_24298 = state_24271__$1;
(statearr_24273_24298[(2)] = inst_24267);

(statearr_24273_24298[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24272 === (1))){
var state_24271__$1 = state_24271;
var statearr_24274_24299 = state_24271__$1;
(statearr_24274_24299[(2)] = null);

(statearr_24274_24299[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24272 === (4))){
var inst_24248 = (state_24271[(7)]);
var inst_24248__$1 = (state_24271[(2)]);
var inst_24249 = (inst_24248__$1 == null);
var state_24271__$1 = (function (){var statearr_24275 = state_24271;
(statearr_24275[(7)] = inst_24248__$1);

return statearr_24275;
})();
if(cljs.core.truth_(inst_24249)){
var statearr_24276_24300 = state_24271__$1;
(statearr_24276_24300[(1)] = (5));

} else {
var statearr_24277_24301 = state_24271__$1;
(statearr_24277_24301[(1)] = (6));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_24272 === (13))){
var state_24271__$1 = state_24271;
var statearr_24278_24302 = state_24271__$1;
(statearr_24278_24302[(2)] = null);

(statearr_24278_24302[(1)] = (14));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24272 === (6))){
var inst_24248 = (state_24271[(7)]);
var inst_24254 = (function (){var G__24279 = inst_24248;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__24279) : p.call(null,G__24279));
})();
var state_24271__$1 = state_24271;
if(cljs.core.truth_(inst_24254)){
var statearr_24280_24303 = state_24271__$1;
(statearr_24280_24303[(1)] = (9));

} else {
var statearr_24281_24304 = state_24271__$1;
(statearr_24281_24304[(1)] = (10));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_24272 === (3))){
var inst_24269 = (state_24271[(2)]);
var state_24271__$1 = state_24271;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24271__$1,inst_24269);
} else {
if((state_val_24272 === (12))){
var state_24271__$1 = state_24271;
var statearr_24282_24305 = state_24271__$1;
(statearr_24282_24305[(2)] = null);

(statearr_24282_24305[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24272 === (2))){
var state_24271__$1 = state_24271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24271__$1,(4),ch);
} else {
if((state_val_24272 === (11))){
var inst_24248 = (state_24271[(7)]);
var inst_24258 = (state_24271[(2)]);
var state_24271__$1 = state_24271;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24271__$1,(8),inst_24258,inst_24248);
} else {
if((state_val_24272 === (9))){
var state_24271__$1 = state_24271;
var statearr_24283_24306 = state_24271__$1;
(statearr_24283_24306[(2)] = tc);

(statearr_24283_24306[(1)] = (11));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24272 === (5))){
var inst_24251 = cljs.core.async.close_BANG_(tc);
var inst_24252 = cljs.core.async.close_BANG_(fc);
var state_24271__$1 = (function (){var statearr_24284 = state_24271;
(statearr_24284[(8)] = inst_24251);

return statearr_24284;
})();
var statearr_24285_24307 = state_24271__$1;
(statearr_24285_24307[(2)] = inst_24252);

(statearr_24285_24307[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24272 === (14))){
var inst_24265 = (state_24271[(2)]);
var state_24271__$1 = state_24271;
var statearr_24286_24308 = state_24271__$1;
(statearr_24286_24308[(2)] = inst_24265);

(statearr_24286_24308[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24272 === (10))){
var state_24271__$1 = state_24271;
var statearr_24287_24309 = state_24271__$1;
(statearr_24287_24309[(2)] = fc);

(statearr_24287_24309[(1)] = (11));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24272 === (8))){
var inst_24260 = (state_24271[(2)]);
var state_24271__$1 = state_24271;
if(cljs.core.truth_(inst_24260)){
var statearr_24288_24310 = state_24271__$1;
(statearr_24288_24310[(1)] = (12));

} else {
var statearr_24289_24311 = state_24271__$1;
(statearr_24289_24311[(1)] = (13));

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
});})(c__11621__auto___24297,tc,fc))
;
return ((function (switch__11541__auto__,c__11621__auto___24297,tc,fc){
return (function() {
var state_machine__11542__auto__ = null;
var state_machine__11542__auto____0 = (function (){
var statearr_24293 = [null,null,null,null,null,null,null,null,null];
(statearr_24293[(0)] = state_machine__11542__auto__);

(statearr_24293[(1)] = (1));

return statearr_24293;
});
var state_machine__11542__auto____1 = (function (state_24271){
while(true){
var ret_value__11543__auto__ = (function (){try{while(true){
var result__11544__auto__ = switch__11541__auto__(state_24271);
if(cljs.core.keyword_identical_QMARK_(result__11544__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11544__auto__;
}
break;
}
}catch (e24294){if((e24294 instanceof Object)){
var ex__11545__auto__ = e24294;
var statearr_24295_24312 = state_24271;
(statearr_24295_24312[(5)] = ex__11545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24271);

return cljs.core.constant$keyword$65;
} else {
throw e24294;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11543__auto__,cljs.core.constant$keyword$65)){
var G__24313 = state_24271;
state_24271 = G__24313;
continue;
} else {
return ret_value__11543__auto__;
}
break;
}
});
state_machine__11542__auto__ = function(state_24271){
switch(arguments.length){
case 0:
return state_machine__11542__auto____0.call(this);
case 1:
return state_machine__11542__auto____1.call(this,state_24271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11542__auto____0;
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11542__auto____1;
return state_machine__11542__auto__;
})()
;})(switch__11541__auto__,c__11621__auto___24297,tc,fc))
})();
var state__11623__auto__ = (function (){var statearr_24296 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_24296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto___24297);

return statearr_24296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(c__11621__auto___24297,tc,fc))
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
var c__11621__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11621__auto__){
return (function (){
var f__11622__auto__ = (function (){var switch__11541__auto__ = ((function (c__11621__auto__){
return (function (state_24362){
var state_val_24363 = (state_24362[(1)]);
if((state_val_24363 === (7))){
var inst_24358 = (state_24362[(2)]);
var state_24362__$1 = state_24362;
var statearr_24364_24382 = state_24362__$1;
(statearr_24364_24382[(2)] = inst_24358);

(statearr_24364_24382[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24363 === (6))){
var inst_24351 = (state_24362[(7)]);
var inst_24348 = (state_24362[(8)]);
var inst_24355 = (function (){var G__24365 = inst_24348;
var G__24366 = inst_24351;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24365,G__24366) : f.call(null,G__24365,G__24366));
})();
var inst_24348__$1 = inst_24355;
var state_24362__$1 = (function (){var statearr_24367 = state_24362;
(statearr_24367[(8)] = inst_24348__$1);

return statearr_24367;
})();
var statearr_24368_24383 = state_24362__$1;
(statearr_24368_24383[(2)] = null);

(statearr_24368_24383[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24363 === (5))){
var inst_24348 = (state_24362[(8)]);
var state_24362__$1 = state_24362;
var statearr_24369_24384 = state_24362__$1;
(statearr_24369_24384[(2)] = inst_24348);

(statearr_24369_24384[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24363 === (4))){
var inst_24351 = (state_24362[(7)]);
var inst_24351__$1 = (state_24362[(2)]);
var inst_24352 = (inst_24351__$1 == null);
var state_24362__$1 = (function (){var statearr_24370 = state_24362;
(statearr_24370[(7)] = inst_24351__$1);

return statearr_24370;
})();
if(cljs.core.truth_(inst_24352)){
var statearr_24371_24385 = state_24362__$1;
(statearr_24371_24385[(1)] = (5));

} else {
var statearr_24372_24386 = state_24362__$1;
(statearr_24372_24386[(1)] = (6));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_24363 === (3))){
var inst_24360 = (state_24362[(2)]);
var state_24362__$1 = state_24362;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24362__$1,inst_24360);
} else {
if((state_val_24363 === (2))){
var state_24362__$1 = state_24362;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24362__$1,(4),ch);
} else {
if((state_val_24363 === (1))){
var inst_24348 = init;
var state_24362__$1 = (function (){var statearr_24373 = state_24362;
(statearr_24373[(8)] = inst_24348);

return statearr_24373;
})();
var statearr_24374_24387 = state_24362__$1;
(statearr_24374_24387[(2)] = null);

(statearr_24374_24387[(1)] = (2));


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
});})(c__11621__auto__))
;
return ((function (switch__11541__auto__,c__11621__auto__){
return (function() {
var state_machine__11542__auto__ = null;
var state_machine__11542__auto____0 = (function (){
var statearr_24378 = [null,null,null,null,null,null,null,null,null];
(statearr_24378[(0)] = state_machine__11542__auto__);

(statearr_24378[(1)] = (1));

return statearr_24378;
});
var state_machine__11542__auto____1 = (function (state_24362){
while(true){
var ret_value__11543__auto__ = (function (){try{while(true){
var result__11544__auto__ = switch__11541__auto__(state_24362);
if(cljs.core.keyword_identical_QMARK_(result__11544__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11544__auto__;
}
break;
}
}catch (e24379){if((e24379 instanceof Object)){
var ex__11545__auto__ = e24379;
var statearr_24380_24388 = state_24362;
(statearr_24380_24388[(5)] = ex__11545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24362);

return cljs.core.constant$keyword$65;
} else {
throw e24379;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11543__auto__,cljs.core.constant$keyword$65)){
var G__24389 = state_24362;
state_24362 = G__24389;
continue;
} else {
return ret_value__11543__auto__;
}
break;
}
});
state_machine__11542__auto__ = function(state_24362){
switch(arguments.length){
case 0:
return state_machine__11542__auto____0.call(this);
case 1:
return state_machine__11542__auto____1.call(this,state_24362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11542__auto____0;
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11542__auto____1;
return state_machine__11542__auto__;
})()
;})(switch__11541__auto__,c__11621__auto__))
})();
var state__11623__auto__ = (function (){var statearr_24381 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_24381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto__);

return statearr_24381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(c__11621__auto__))
);

return c__11621__auto__;
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
var c__11621__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11621__auto__){
return (function (){
var f__11622__auto__ = (function (){var switch__11541__auto__ = ((function (c__11621__auto__){
return (function (state_24466){
var state_val_24467 = (state_24466[(1)]);
if((state_val_24467 === (7))){
var inst_24448 = (state_24466[(2)]);
var state_24466__$1 = state_24466;
var statearr_24468_24491 = state_24466__$1;
(statearr_24468_24491[(2)] = inst_24448);

(statearr_24468_24491[(1)] = (6));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24467 === (1))){
var inst_24442 = cljs.core.seq(coll);
var inst_24443 = inst_24442;
var state_24466__$1 = (function (){var statearr_24469 = state_24466;
(statearr_24469[(7)] = inst_24443);

return statearr_24469;
})();
var statearr_24470_24492 = state_24466__$1;
(statearr_24470_24492[(2)] = null);

(statearr_24470_24492[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24467 === (4))){
var inst_24443 = (state_24466[(7)]);
var inst_24446 = cljs.core.first(inst_24443);
var state_24466__$1 = state_24466;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24466__$1,(7),ch,inst_24446);
} else {
if((state_val_24467 === (13))){
var inst_24460 = (state_24466[(2)]);
var state_24466__$1 = state_24466;
var statearr_24471_24493 = state_24466__$1;
(statearr_24471_24493[(2)] = inst_24460);

(statearr_24471_24493[(1)] = (10));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24467 === (6))){
var inst_24451 = (state_24466[(2)]);
var state_24466__$1 = state_24466;
if(cljs.core.truth_(inst_24451)){
var statearr_24472_24494 = state_24466__$1;
(statearr_24472_24494[(1)] = (8));

} else {
var statearr_24473_24495 = state_24466__$1;
(statearr_24473_24495[(1)] = (9));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_24467 === (3))){
var inst_24464 = (state_24466[(2)]);
var state_24466__$1 = state_24466;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24466__$1,inst_24464);
} else {
if((state_val_24467 === (12))){
var state_24466__$1 = state_24466;
var statearr_24474_24496 = state_24466__$1;
(statearr_24474_24496[(2)] = null);

(statearr_24474_24496[(1)] = (13));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24467 === (2))){
var inst_24443 = (state_24466[(7)]);
var state_24466__$1 = state_24466;
if(cljs.core.truth_(inst_24443)){
var statearr_24475_24497 = state_24466__$1;
(statearr_24475_24497[(1)] = (4));

} else {
var statearr_24476_24498 = state_24466__$1;
(statearr_24476_24498[(1)] = (5));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_24467 === (11))){
var inst_24457 = cljs.core.async.close_BANG_(ch);
var state_24466__$1 = state_24466;
var statearr_24477_24499 = state_24466__$1;
(statearr_24477_24499[(2)] = inst_24457);

(statearr_24477_24499[(1)] = (13));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24467 === (9))){
var state_24466__$1 = state_24466;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24478_24500 = state_24466__$1;
(statearr_24478_24500[(1)] = (11));

} else {
var statearr_24479_24501 = state_24466__$1;
(statearr_24479_24501[(1)] = (12));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_24467 === (5))){
var inst_24443 = (state_24466[(7)]);
var state_24466__$1 = state_24466;
var statearr_24480_24502 = state_24466__$1;
(statearr_24480_24502[(2)] = inst_24443);

(statearr_24480_24502[(1)] = (6));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24467 === (10))){
var inst_24462 = (state_24466[(2)]);
var state_24466__$1 = state_24466;
var statearr_24481_24503 = state_24466__$1;
(statearr_24481_24503[(2)] = inst_24462);

(statearr_24481_24503[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24467 === (8))){
var inst_24443 = (state_24466[(7)]);
var inst_24453 = cljs.core.next(inst_24443);
var inst_24443__$1 = inst_24453;
var state_24466__$1 = (function (){var statearr_24482 = state_24466;
(statearr_24482[(7)] = inst_24443__$1);

return statearr_24482;
})();
var statearr_24483_24504 = state_24466__$1;
(statearr_24483_24504[(2)] = null);

(statearr_24483_24504[(1)] = (2));


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
});})(c__11621__auto__))
;
return ((function (switch__11541__auto__,c__11621__auto__){
return (function() {
var state_machine__11542__auto__ = null;
var state_machine__11542__auto____0 = (function (){
var statearr_24487 = [null,null,null,null,null,null,null,null];
(statearr_24487[(0)] = state_machine__11542__auto__);

(statearr_24487[(1)] = (1));

return statearr_24487;
});
var state_machine__11542__auto____1 = (function (state_24466){
while(true){
var ret_value__11543__auto__ = (function (){try{while(true){
var result__11544__auto__ = switch__11541__auto__(state_24466);
if(cljs.core.keyword_identical_QMARK_(result__11544__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11544__auto__;
}
break;
}
}catch (e24488){if((e24488 instanceof Object)){
var ex__11545__auto__ = e24488;
var statearr_24489_24505 = state_24466;
(statearr_24489_24505[(5)] = ex__11545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24466);

return cljs.core.constant$keyword$65;
} else {
throw e24488;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11543__auto__,cljs.core.constant$keyword$65)){
var G__24506 = state_24466;
state_24466 = G__24506;
continue;
} else {
return ret_value__11543__auto__;
}
break;
}
});
state_machine__11542__auto__ = function(state_24466){
switch(arguments.length){
case 0:
return state_machine__11542__auto____0.call(this);
case 1:
return state_machine__11542__auto____1.call(this,state_24466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11542__auto____0;
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11542__auto____1;
return state_machine__11542__auto__;
})()
;})(switch__11541__auto__,c__11621__auto__))
})();
var state__11623__auto__ = (function (){var statearr_24490 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_24490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto__);

return statearr_24490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(c__11621__auto__))
);

return c__11621__auto__;
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

cljs.core.async.Mux = (function (){var obj24508 = {};
return obj24508;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3719__auto__ = _;
if(and__3719__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3719__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4375__auto__ = (((_ == null))?null:_);
return (function (){var or__3731__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__24512 = x__4375__auto__;
return goog.typeOf(G__24512);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj24514 = {};
return obj24514;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3719__auto__ = m;
if(and__3719__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3719__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4375__auto__ = (((m == null))?null:m);
return (function (){var or__3731__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__24518 = x__4375__auto__;
return goog.typeOf(G__24518);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3719__auto__ = m;
if(and__3719__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3719__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4375__auto__ = (((m == null))?null:m);
return (function (){var or__3731__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__24522 = x__4375__auto__;
return goog.typeOf(G__24522);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3719__auto__ = m;
if(and__3719__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3719__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4375__auto__ = (((m == null))?null:m);
return (function (){var or__3731__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__24526 = x__4375__auto__;
return goog.typeOf(G__24526);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
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
var cs = (function (){var G__24756 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24756) : cljs.core.atom.call(null,G__24756));
})();
var m = (function (){
if(typeof cljs.core.async.t24757 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24757 = (function (cs,ch,mult,meta24758){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24758 = meta24758;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24757.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t24757.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t24757.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t24757.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__24760_24985 = self__.cs;
var G__24761_24986 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24760_24985,G__24761_24986) : cljs.core.reset_BANG_.call(null,G__24760_24985,G__24761_24986));

return null;
});})(cs))
;

cljs.core.async.t24757.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24757.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t24757.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24759){
var self__ = this;
var _24759__$1 = this;
return self__.meta24758;
});})(cs))
;

cljs.core.async.t24757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24759,meta24758__$1){
var self__ = this;
var _24759__$1 = this;
return (new cljs.core.async.t24757(self__.cs,self__.ch,self__.mult,meta24758__$1));
});})(cs))
;

cljs.core.async.t24757.cljs$lang$type = true;

cljs.core.async.t24757.cljs$lang$ctorStr = "cljs.core.async/t24757";

cljs.core.async.t24757.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core.async/t24757");
});})(cs))
;

cljs.core.async.__GT_t24757 = ((function (cs){
return (function __GT_t24757(cs__$1,ch__$1,mult__$1,meta24758){
return (new cljs.core.async.t24757(cs__$1,ch__$1,mult__$1,meta24758));
});})(cs))
;

}

return (new cljs.core.async.t24757(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,397,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,390,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__24762 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24762) : cljs.core.atom.call(null,G__24762));
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
var c__11621__auto___24987 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11621__auto___24987,cs,m,dchan,dctr,done){
return (function (){
var f__11622__auto__ = (function (){var switch__11541__auto__ = ((function (c__11621__auto___24987,cs,m,dchan,dctr,done){
return (function (state_24893){
var state_val_24894 = (state_24893[(1)]);
if((state_val_24894 === (7))){
var inst_24889 = (state_24893[(2)]);
var state_24893__$1 = state_24893;
var statearr_24895_24988 = state_24893__$1;
(statearr_24895_24988[(2)] = inst_24889);

(statearr_24895_24988[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (20))){
var inst_24794 = (state_24893[(7)]);
var inst_24804 = cljs.core.first(inst_24794);
var inst_24805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24804,(0),null);
var inst_24806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24804,(1),null);
var state_24893__$1 = (function (){var statearr_24896 = state_24893;
(statearr_24896[(8)] = inst_24805);

return statearr_24896;
})();
if(cljs.core.truth_(inst_24806)){
var statearr_24897_24989 = state_24893__$1;
(statearr_24897_24989[(1)] = (22));

} else {
var statearr_24898_24990 = state_24893__$1;
(statearr_24898_24990[(1)] = (23));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (27))){
var inst_24765 = (state_24893[(9)]);
var inst_24836 = (state_24893[(10)]);
var inst_24834 = (state_24893[(11)]);
var inst_24841 = (state_24893[(12)]);
var inst_24841__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24834,inst_24836);
var inst_24842 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24841__$1,inst_24765,done);
var state_24893__$1 = (function (){var statearr_24899 = state_24893;
(statearr_24899[(12)] = inst_24841__$1);

return statearr_24899;
})();
if(cljs.core.truth_(inst_24842)){
var statearr_24900_24991 = state_24893__$1;
(statearr_24900_24991[(1)] = (30));

} else {
var statearr_24901_24992 = state_24893__$1;
(statearr_24901_24992[(1)] = (31));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (1))){
var state_24893__$1 = state_24893;
var statearr_24902_24993 = state_24893__$1;
(statearr_24902_24993[(2)] = null);

(statearr_24902_24993[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (24))){
var inst_24794 = (state_24893[(7)]);
var inst_24811 = (state_24893[(2)]);
var inst_24812 = cljs.core.next(inst_24794);
var inst_24774 = inst_24812;
var inst_24775 = null;
var inst_24776 = (0);
var inst_24777 = (0);
var state_24893__$1 = (function (){var statearr_24903 = state_24893;
(statearr_24903[(13)] = inst_24777);

(statearr_24903[(14)] = inst_24775);

(statearr_24903[(15)] = inst_24774);

(statearr_24903[(16)] = inst_24776);

(statearr_24903[(17)] = inst_24811);

return statearr_24903;
})();
var statearr_24904_24994 = state_24893__$1;
(statearr_24904_24994[(2)] = null);

(statearr_24904_24994[(1)] = (8));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (39))){
var state_24893__$1 = state_24893;
var statearr_24908_24995 = state_24893__$1;
(statearr_24908_24995[(2)] = null);

(statearr_24908_24995[(1)] = (41));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (4))){
var inst_24765 = (state_24893[(9)]);
var inst_24765__$1 = (state_24893[(2)]);
var inst_24766 = (inst_24765__$1 == null);
var state_24893__$1 = (function (){var statearr_24909 = state_24893;
(statearr_24909[(9)] = inst_24765__$1);

return statearr_24909;
})();
if(cljs.core.truth_(inst_24766)){
var statearr_24910_24996 = state_24893__$1;
(statearr_24910_24996[(1)] = (5));

} else {
var statearr_24911_24997 = state_24893__$1;
(statearr_24911_24997[(1)] = (6));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (15))){
var inst_24777 = (state_24893[(13)]);
var inst_24775 = (state_24893[(14)]);
var inst_24774 = (state_24893[(15)]);
var inst_24776 = (state_24893[(16)]);
var inst_24790 = (state_24893[(2)]);
var inst_24791 = (inst_24777 + (1));
var tmp24905 = inst_24775;
var tmp24906 = inst_24774;
var tmp24907 = inst_24776;
var inst_24774__$1 = tmp24906;
var inst_24775__$1 = tmp24905;
var inst_24776__$1 = tmp24907;
var inst_24777__$1 = inst_24791;
var state_24893__$1 = (function (){var statearr_24912 = state_24893;
(statearr_24912[(13)] = inst_24777__$1);

(statearr_24912[(14)] = inst_24775__$1);

(statearr_24912[(18)] = inst_24790);

(statearr_24912[(15)] = inst_24774__$1);

(statearr_24912[(16)] = inst_24776__$1);

return statearr_24912;
})();
var statearr_24913_24998 = state_24893__$1;
(statearr_24913_24998[(2)] = null);

(statearr_24913_24998[(1)] = (8));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (21))){
var inst_24815 = (state_24893[(2)]);
var state_24893__$1 = state_24893;
var statearr_24917_24999 = state_24893__$1;
(statearr_24917_24999[(2)] = inst_24815);

(statearr_24917_24999[(1)] = (18));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (31))){
var inst_24841 = (state_24893[(12)]);
var inst_24845 = done(null);
var inst_24846 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24841);
var state_24893__$1 = (function (){var statearr_24918 = state_24893;
(statearr_24918[(19)] = inst_24845);

return statearr_24918;
})();
var statearr_24919_25000 = state_24893__$1;
(statearr_24919_25000[(2)] = inst_24846);

(statearr_24919_25000[(1)] = (32));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (32))){
var inst_24835 = (state_24893[(20)]);
var inst_24833 = (state_24893[(21)]);
var inst_24836 = (state_24893[(10)]);
var inst_24834 = (state_24893[(11)]);
var inst_24848 = (state_24893[(2)]);
var inst_24849 = (inst_24836 + (1));
var tmp24914 = inst_24835;
var tmp24915 = inst_24833;
var tmp24916 = inst_24834;
var inst_24833__$1 = tmp24915;
var inst_24834__$1 = tmp24916;
var inst_24835__$1 = tmp24914;
var inst_24836__$1 = inst_24849;
var state_24893__$1 = (function (){var statearr_24920 = state_24893;
(statearr_24920[(20)] = inst_24835__$1);

(statearr_24920[(21)] = inst_24833__$1);

(statearr_24920[(10)] = inst_24836__$1);

(statearr_24920[(11)] = inst_24834__$1);

(statearr_24920[(22)] = inst_24848);

return statearr_24920;
})();
var statearr_24921_25001 = state_24893__$1;
(statearr_24921_25001[(2)] = null);

(statearr_24921_25001[(1)] = (25));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (40))){
var inst_24861 = (state_24893[(23)]);
var inst_24865 = done(null);
var inst_24866 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24861);
var state_24893__$1 = (function (){var statearr_24922 = state_24893;
(statearr_24922[(24)] = inst_24865);

return statearr_24922;
})();
var statearr_24923_25002 = state_24893__$1;
(statearr_24923_25002[(2)] = inst_24866);

(statearr_24923_25002[(1)] = (41));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (33))){
var inst_24852 = (state_24893[(25)]);
var inst_24854 = cljs.core.chunked_seq_QMARK_(inst_24852);
var state_24893__$1 = state_24893;
if(inst_24854){
var statearr_24924_25003 = state_24893__$1;
(statearr_24924_25003[(1)] = (36));

} else {
var statearr_24925_25004 = state_24893__$1;
(statearr_24925_25004[(1)] = (37));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (13))){
var inst_24784 = (state_24893[(26)]);
var inst_24787 = cljs.core.async.close_BANG_(inst_24784);
var state_24893__$1 = state_24893;
var statearr_24926_25005 = state_24893__$1;
(statearr_24926_25005[(2)] = inst_24787);

(statearr_24926_25005[(1)] = (15));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (22))){
var inst_24805 = (state_24893[(8)]);
var inst_24808 = cljs.core.async.close_BANG_(inst_24805);
var state_24893__$1 = state_24893;
var statearr_24927_25006 = state_24893__$1;
(statearr_24927_25006[(2)] = inst_24808);

(statearr_24927_25006[(1)] = (24));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (36))){
var inst_24852 = (state_24893[(25)]);
var inst_24856 = cljs.core.chunk_first(inst_24852);
var inst_24857 = cljs.core.chunk_rest(inst_24852);
var inst_24858 = cljs.core.count(inst_24856);
var inst_24833 = inst_24857;
var inst_24834 = inst_24856;
var inst_24835 = inst_24858;
var inst_24836 = (0);
var state_24893__$1 = (function (){var statearr_24928 = state_24893;
(statearr_24928[(20)] = inst_24835);

(statearr_24928[(21)] = inst_24833);

(statearr_24928[(10)] = inst_24836);

(statearr_24928[(11)] = inst_24834);

return statearr_24928;
})();
var statearr_24929_25007 = state_24893__$1;
(statearr_24929_25007[(2)] = null);

(statearr_24929_25007[(1)] = (25));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (41))){
var inst_24852 = (state_24893[(25)]);
var inst_24868 = (state_24893[(2)]);
var inst_24869 = cljs.core.next(inst_24852);
var inst_24833 = inst_24869;
var inst_24834 = null;
var inst_24835 = (0);
var inst_24836 = (0);
var state_24893__$1 = (function (){var statearr_24930 = state_24893;
(statearr_24930[(20)] = inst_24835);

(statearr_24930[(21)] = inst_24833);

(statearr_24930[(10)] = inst_24836);

(statearr_24930[(11)] = inst_24834);

(statearr_24930[(27)] = inst_24868);

return statearr_24930;
})();
var statearr_24931_25008 = state_24893__$1;
(statearr_24931_25008[(2)] = null);

(statearr_24931_25008[(1)] = (25));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (43))){
var state_24893__$1 = state_24893;
var statearr_24932_25009 = state_24893__$1;
(statearr_24932_25009[(2)] = null);

(statearr_24932_25009[(1)] = (44));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (29))){
var inst_24877 = (state_24893[(2)]);
var state_24893__$1 = state_24893;
var statearr_24933_25010 = state_24893__$1;
(statearr_24933_25010[(2)] = inst_24877);

(statearr_24933_25010[(1)] = (26));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (44))){
var inst_24886 = (state_24893[(2)]);
var state_24893__$1 = (function (){var statearr_24934 = state_24893;
(statearr_24934[(28)] = inst_24886);

return statearr_24934;
})();
var statearr_24935_25011 = state_24893__$1;
(statearr_24935_25011[(2)] = null);

(statearr_24935_25011[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (6))){
var inst_24825 = (state_24893[(29)]);
var inst_24824 = (function (){var G__24936 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24936) : cljs.core.deref.call(null,G__24936));
})();
var inst_24825__$1 = cljs.core.keys(inst_24824);
var inst_24826 = cljs.core.count(inst_24825__$1);
var inst_24827 = (function (){var G__24937 = dctr;
var G__24938 = inst_24826;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24937,G__24938) : cljs.core.reset_BANG_.call(null,G__24937,G__24938));
})();
var inst_24832 = cljs.core.seq(inst_24825__$1);
var inst_24833 = inst_24832;
var inst_24834 = null;
var inst_24835 = (0);
var inst_24836 = (0);
var state_24893__$1 = (function (){var statearr_24939 = state_24893;
(statearr_24939[(30)] = inst_24827);

(statearr_24939[(29)] = inst_24825__$1);

(statearr_24939[(20)] = inst_24835);

(statearr_24939[(21)] = inst_24833);

(statearr_24939[(10)] = inst_24836);

(statearr_24939[(11)] = inst_24834);

return statearr_24939;
})();
var statearr_24940_25012 = state_24893__$1;
(statearr_24940_25012[(2)] = null);

(statearr_24940_25012[(1)] = (25));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (28))){
var inst_24833 = (state_24893[(21)]);
var inst_24852 = (state_24893[(25)]);
var inst_24852__$1 = cljs.core.seq(inst_24833);
var state_24893__$1 = (function (){var statearr_24941 = state_24893;
(statearr_24941[(25)] = inst_24852__$1);

return statearr_24941;
})();
if(inst_24852__$1){
var statearr_24942_25013 = state_24893__$1;
(statearr_24942_25013[(1)] = (33));

} else {
var statearr_24943_25014 = state_24893__$1;
(statearr_24943_25014[(1)] = (34));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (25))){
var inst_24835 = (state_24893[(20)]);
var inst_24836 = (state_24893[(10)]);
var inst_24838 = (inst_24836 < inst_24835);
var inst_24839 = inst_24838;
var state_24893__$1 = state_24893;
if(cljs.core.truth_(inst_24839)){
var statearr_24944_25015 = state_24893__$1;
(statearr_24944_25015[(1)] = (27));

} else {
var statearr_24945_25016 = state_24893__$1;
(statearr_24945_25016[(1)] = (28));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (34))){
var state_24893__$1 = state_24893;
var statearr_24946_25017 = state_24893__$1;
(statearr_24946_25017[(2)] = null);

(statearr_24946_25017[(1)] = (35));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (17))){
var state_24893__$1 = state_24893;
var statearr_24947_25018 = state_24893__$1;
(statearr_24947_25018[(2)] = null);

(statearr_24947_25018[(1)] = (18));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (3))){
var inst_24891 = (state_24893[(2)]);
var state_24893__$1 = state_24893;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24893__$1,inst_24891);
} else {
if((state_val_24894 === (12))){
var inst_24820 = (state_24893[(2)]);
var state_24893__$1 = state_24893;
var statearr_24948_25019 = state_24893__$1;
(statearr_24948_25019[(2)] = inst_24820);

(statearr_24948_25019[(1)] = (9));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (2))){
var state_24893__$1 = state_24893;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24893__$1,(4),ch);
} else {
if((state_val_24894 === (23))){
var state_24893__$1 = state_24893;
var statearr_24949_25020 = state_24893__$1;
(statearr_24949_25020[(2)] = null);

(statearr_24949_25020[(1)] = (24));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (35))){
var inst_24875 = (state_24893[(2)]);
var state_24893__$1 = state_24893;
var statearr_24950_25021 = state_24893__$1;
(statearr_24950_25021[(2)] = inst_24875);

(statearr_24950_25021[(1)] = (29));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (19))){
var inst_24794 = (state_24893[(7)]);
var inst_24798 = cljs.core.chunk_first(inst_24794);
var inst_24799 = cljs.core.chunk_rest(inst_24794);
var inst_24800 = cljs.core.count(inst_24798);
var inst_24774 = inst_24799;
var inst_24775 = inst_24798;
var inst_24776 = inst_24800;
var inst_24777 = (0);
var state_24893__$1 = (function (){var statearr_24951 = state_24893;
(statearr_24951[(13)] = inst_24777);

(statearr_24951[(14)] = inst_24775);

(statearr_24951[(15)] = inst_24774);

(statearr_24951[(16)] = inst_24776);

return statearr_24951;
})();
var statearr_24952_25022 = state_24893__$1;
(statearr_24952_25022[(2)] = null);

(statearr_24952_25022[(1)] = (8));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (11))){
var inst_24774 = (state_24893[(15)]);
var inst_24794 = (state_24893[(7)]);
var inst_24794__$1 = cljs.core.seq(inst_24774);
var state_24893__$1 = (function (){var statearr_24953 = state_24893;
(statearr_24953[(7)] = inst_24794__$1);

return statearr_24953;
})();
if(inst_24794__$1){
var statearr_24954_25023 = state_24893__$1;
(statearr_24954_25023[(1)] = (16));

} else {
var statearr_24955_25024 = state_24893__$1;
(statearr_24955_25024[(1)] = (17));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (9))){
var inst_24822 = (state_24893[(2)]);
var state_24893__$1 = state_24893;
var statearr_24956_25025 = state_24893__$1;
(statearr_24956_25025[(2)] = inst_24822);

(statearr_24956_25025[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (5))){
var inst_24772 = (function (){var G__24957 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24957) : cljs.core.deref.call(null,G__24957));
})();
var inst_24773 = cljs.core.seq(inst_24772);
var inst_24774 = inst_24773;
var inst_24775 = null;
var inst_24776 = (0);
var inst_24777 = (0);
var state_24893__$1 = (function (){var statearr_24958 = state_24893;
(statearr_24958[(13)] = inst_24777);

(statearr_24958[(14)] = inst_24775);

(statearr_24958[(15)] = inst_24774);

(statearr_24958[(16)] = inst_24776);

return statearr_24958;
})();
var statearr_24959_25026 = state_24893__$1;
(statearr_24959_25026[(2)] = null);

(statearr_24959_25026[(1)] = (8));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (14))){
var state_24893__$1 = state_24893;
var statearr_24960_25027 = state_24893__$1;
(statearr_24960_25027[(2)] = null);

(statearr_24960_25027[(1)] = (15));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (45))){
var inst_24883 = (state_24893[(2)]);
var state_24893__$1 = state_24893;
var statearr_24961_25028 = state_24893__$1;
(statearr_24961_25028[(2)] = inst_24883);

(statearr_24961_25028[(1)] = (44));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (26))){
var inst_24825 = (state_24893[(29)]);
var inst_24879 = (state_24893[(2)]);
var inst_24880 = cljs.core.seq(inst_24825);
var state_24893__$1 = (function (){var statearr_24962 = state_24893;
(statearr_24962[(31)] = inst_24879);

return statearr_24962;
})();
if(inst_24880){
var statearr_24963_25029 = state_24893__$1;
(statearr_24963_25029[(1)] = (42));

} else {
var statearr_24964_25030 = state_24893__$1;
(statearr_24964_25030[(1)] = (43));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (16))){
var inst_24794 = (state_24893[(7)]);
var inst_24796 = cljs.core.chunked_seq_QMARK_(inst_24794);
var state_24893__$1 = state_24893;
if(inst_24796){
var statearr_24965_25031 = state_24893__$1;
(statearr_24965_25031[(1)] = (19));

} else {
var statearr_24966_25032 = state_24893__$1;
(statearr_24966_25032[(1)] = (20));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (38))){
var inst_24872 = (state_24893[(2)]);
var state_24893__$1 = state_24893;
var statearr_24967_25033 = state_24893__$1;
(statearr_24967_25033[(2)] = inst_24872);

(statearr_24967_25033[(1)] = (35));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (30))){
var state_24893__$1 = state_24893;
var statearr_24968_25034 = state_24893__$1;
(statearr_24968_25034[(2)] = null);

(statearr_24968_25034[(1)] = (32));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (10))){
var inst_24777 = (state_24893[(13)]);
var inst_24775 = (state_24893[(14)]);
var inst_24783 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24775,inst_24777);
var inst_24784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24783,(0),null);
var inst_24785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24783,(1),null);
var state_24893__$1 = (function (){var statearr_24969 = state_24893;
(statearr_24969[(26)] = inst_24784);

return statearr_24969;
})();
if(cljs.core.truth_(inst_24785)){
var statearr_24970_25035 = state_24893__$1;
(statearr_24970_25035[(1)] = (13));

} else {
var statearr_24971_25036 = state_24893__$1;
(statearr_24971_25036[(1)] = (14));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (18))){
var inst_24818 = (state_24893[(2)]);
var state_24893__$1 = state_24893;
var statearr_24972_25037 = state_24893__$1;
(statearr_24972_25037[(2)] = inst_24818);

(statearr_24972_25037[(1)] = (12));


return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (42))){
var state_24893__$1 = state_24893;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24893__$1,(45),dchan);
} else {
if((state_val_24894 === (37))){
var inst_24765 = (state_24893[(9)]);
var inst_24861 = (state_24893[(23)]);
var inst_24852 = (state_24893[(25)]);
var inst_24861__$1 = cljs.core.first(inst_24852);
var inst_24862 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24861__$1,inst_24765,done);
var state_24893__$1 = (function (){var statearr_24973 = state_24893;
(statearr_24973[(23)] = inst_24861__$1);

return statearr_24973;
})();
if(cljs.core.truth_(inst_24862)){
var statearr_24974_25038 = state_24893__$1;
(statearr_24974_25038[(1)] = (39));

} else {
var statearr_24975_25039 = state_24893__$1;
(statearr_24975_25039[(1)] = (40));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_24894 === (8))){
var inst_24777 = (state_24893[(13)]);
var inst_24776 = (state_24893[(16)]);
var inst_24779 = (inst_24777 < inst_24776);
var inst_24780 = inst_24779;
var state_24893__$1 = state_24893;
if(cljs.core.truth_(inst_24780)){
var statearr_24976_25040 = state_24893__$1;
(statearr_24976_25040[(1)] = (10));

} else {
var statearr_24977_25041 = state_24893__$1;
(statearr_24977_25041[(1)] = (11));

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
});})(c__11621__auto___24987,cs,m,dchan,dctr,done))
;
return ((function (switch__11541__auto__,c__11621__auto___24987,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11542__auto__ = null;
var state_machine__11542__auto____0 = (function (){
var statearr_24981 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24981[(0)] = state_machine__11542__auto__);

(statearr_24981[(1)] = (1));

return statearr_24981;
});
var state_machine__11542__auto____1 = (function (state_24893){
while(true){
var ret_value__11543__auto__ = (function (){try{while(true){
var result__11544__auto__ = switch__11541__auto__(state_24893);
if(cljs.core.keyword_identical_QMARK_(result__11544__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11544__auto__;
}
break;
}
}catch (e24982){if((e24982 instanceof Object)){
var ex__11545__auto__ = e24982;
var statearr_24983_25042 = state_24893;
(statearr_24983_25042[(5)] = ex__11545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24893);

return cljs.core.constant$keyword$65;
} else {
throw e24982;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11543__auto__,cljs.core.constant$keyword$65)){
var G__25043 = state_24893;
state_24893 = G__25043;
continue;
} else {
return ret_value__11543__auto__;
}
break;
}
});
state_machine__11542__auto__ = function(state_24893){
switch(arguments.length){
case 0:
return state_machine__11542__auto____0.call(this);
case 1:
return state_machine__11542__auto____1.call(this,state_24893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11542__auto____0;
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11542__auto____1;
return state_machine__11542__auto__;
})()
;})(switch__11541__auto__,c__11621__auto___24987,cs,m,dchan,dctr,done))
})();
var state__11623__auto__ = (function (){var statearr_24984 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_24984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto___24987);

return statearr_24984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(c__11621__auto___24987,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj25048 = {};
return obj25048;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3719__auto__ = m;
if(and__3719__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3719__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4375__auto__ = (((m == null))?null:m);
return (function (){var or__3731__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__25052 = x__4375__auto__;
return goog.typeOf(G__25052);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3719__auto__ = m;
if(and__3719__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3719__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4375__auto__ = (((m == null))?null:m);
return (function (){var or__3731__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__25056 = x__4375__auto__;
return goog.typeOf(G__25056);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3719__auto__ = m;
if(and__3719__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3719__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4375__auto__ = (((m == null))?null:m);
return (function (){var or__3731__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__25060 = x__4375__auto__;
return goog.typeOf(G__25060);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3719__auto__ = m;
if(and__3719__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3719__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4375__auto__ = (((m == null))?null:m);
return (function (){var or__3731__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__25064 = x__4375__auto__;
return goog.typeOf(G__25064);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3719__auto__ = m;
if(and__3719__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3719__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4375__auto__ = (((m == null))?null:m);
return (function (){var or__3731__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__25068 = x__4375__auto__;
return goog.typeOf(G__25068);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__25069){
var map__25075 = p__25069;
var map__25075__$1 = ((cljs.core.seq_QMARK_(map__25075))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25075):map__25075);
var opts = map__25075__$1;
var statearr_25076_25080 = state;
(statearr_25076_25080[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__25075,map__25075__$1,opts){
return (function (val){
var statearr_25077_25081 = state;
(statearr_25077_25081[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__25075,map__25075__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_25078_25082 = state;
(statearr_25078_25082[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__25079 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25079) : cljs.core.deref.call(null,G__25079));
})());


return cljs.core.constant$keyword$65;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__25069 = null;
if (arguments.length > 3) {
  p__25069 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__25069);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__25083){
var state = cljs.core.first(arglist__25083);
arglist__25083 = cljs.core.next(arglist__25083);
var cont_block = cljs.core.first(arglist__25083);
arglist__25083 = cljs.core.next(arglist__25083);
var ports = cljs.core.first(arglist__25083);
var p__25069 = cljs.core.rest(arglist__25083);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__25069);
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
var cs = (function (){var G__25217 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25217) : cljs.core.atom.call(null,G__25217));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$74,null,cljs.core.constant$keyword$75,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$76);
var solo_mode = (function (){var G__25218 = cljs.core.constant$keyword$75;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25218) : cljs.core.atom.call(null,G__25218));
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
if(cljs.core.truth_((function (){var G__25219 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__25219) : attr.call(null,G__25219));
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
var chs = (function (){var G__25220 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25220) : cljs.core.deref.call(null,G__25220));
})();
var mode = (function (){var G__25221 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25221) : cljs.core.deref.call(null,G__25221));
})();
var solos = pick(cljs.core.constant$keyword$76,chs);
var pauses = pick(cljs.core.constant$keyword$74,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$77,solos,cljs.core.constant$keyword$78,pick(cljs.core.constant$keyword$75,chs),cljs.core.constant$keyword$79,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$74)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t25222 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25222 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25223){
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
this.meta25223 = meta25223;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25222.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t25222.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25222.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25222.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25225_25350 = self__.cs;
var G__25226_25351 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25225_25350,G__25226_25351) : cljs.core.reset_BANG_.call(null,G__25225_25350,G__25226_25351));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25222.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25222.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__25227 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__25227) : self__.solo_modes.call(null,G__25227));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__25228_25352 = self__.solo_mode;
var G__25229_25353 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25228_25352,G__25229_25353) : cljs.core.reset_BANG_.call(null,G__25228_25352,G__25229_25353));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25222.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25222.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25222.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25224){
var self__ = this;
var _25224__$1 = this;
return self__.meta25223;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25224,meta25223__$1){
var self__ = this;
var _25224__$1 = this;
return (new cljs.core.async.t25222(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25223__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25222.cljs$lang$type = true;

cljs.core.async.t25222.cljs$lang$ctorStr = "cljs.core.async/t25222";

cljs.core.async.t25222.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core.async/t25222");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t25222 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25222(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25223){
return (new cljs.core.async.t25222(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25223));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t25222(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,25,cljs.core.constant$keyword$9,510,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,499,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
;
var c__11621__auto___25354 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11621__auto___25354,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11622__auto__ = (function (){var switch__11541__auto__ = ((function (c__11621__auto___25354,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25301){
var state_val_25302 = (state_25301[(1)]);
if((state_val_25302 === (7))){
var inst_25243 = (state_25301[(7)]);
var inst_25248 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25243);
var state_25301__$1 = state_25301;
var statearr_25303_25355 = state_25301__$1;
(statearr_25303_25355[(2)] = inst_25248);

(statearr_25303_25355[(1)] = (9));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25302 === (20))){
var inst_25258 = (state_25301[(8)]);
var state_25301__$1 = state_25301;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25301__$1,(23),out,inst_25258);
} else {
if((state_val_25302 === (1))){
var inst_25233 = (state_25301[(9)]);
var inst_25233__$1 = calc_state();
var inst_25234 = cljs.core.seq_QMARK_(inst_25233__$1);
var state_25301__$1 = (function (){var statearr_25304 = state_25301;
(statearr_25304[(9)] = inst_25233__$1);

return statearr_25304;
})();
if(inst_25234){
var statearr_25305_25356 = state_25301__$1;
(statearr_25305_25356[(1)] = (2));

} else {
var statearr_25306_25357 = state_25301__$1;
(statearr_25306_25357[(1)] = (3));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_25302 === (24))){
var inst_25251 = (state_25301[(10)]);
var inst_25243 = inst_25251;
var state_25301__$1 = (function (){var statearr_25307 = state_25301;
(statearr_25307[(7)] = inst_25243);

return statearr_25307;
})();
var statearr_25308_25358 = state_25301__$1;
(statearr_25308_25358[(2)] = null);

(statearr_25308_25358[(1)] = (5));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25302 === (4))){
var inst_25233 = (state_25301[(9)]);
var inst_25239 = (state_25301[(2)]);
var inst_25240 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25239,cljs.core.constant$keyword$79);
var inst_25241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25239,cljs.core.constant$keyword$78);
var inst_25242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25239,cljs.core.constant$keyword$77);
var inst_25243 = inst_25233;
var state_25301__$1 = (function (){var statearr_25309 = state_25301;
(statearr_25309[(11)] = inst_25242);

(statearr_25309[(7)] = inst_25243);

(statearr_25309[(12)] = inst_25241);

(statearr_25309[(13)] = inst_25240);

return statearr_25309;
})();
var statearr_25310_25359 = state_25301__$1;
(statearr_25310_25359[(2)] = null);

(statearr_25310_25359[(1)] = (5));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25302 === (15))){
var state_25301__$1 = state_25301;
var statearr_25311_25360 = state_25301__$1;
(statearr_25311_25360[(2)] = null);

(statearr_25311_25360[(1)] = (16));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25302 === (21))){
var inst_25251 = (state_25301[(10)]);
var inst_25243 = inst_25251;
var state_25301__$1 = (function (){var statearr_25312 = state_25301;
(statearr_25312[(7)] = inst_25243);

return statearr_25312;
})();
var statearr_25313_25361 = state_25301__$1;
(statearr_25313_25361[(2)] = null);

(statearr_25313_25361[(1)] = (5));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25302 === (13))){
var inst_25297 = (state_25301[(2)]);
var state_25301__$1 = state_25301;
var statearr_25314_25362 = state_25301__$1;
(statearr_25314_25362[(2)] = inst_25297);

(statearr_25314_25362[(1)] = (6));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25302 === (22))){
var inst_25295 = (state_25301[(2)]);
var state_25301__$1 = state_25301;
var statearr_25315_25363 = state_25301__$1;
(statearr_25315_25363[(2)] = inst_25295);

(statearr_25315_25363[(1)] = (13));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25302 === (6))){
var inst_25299 = (state_25301[(2)]);
var state_25301__$1 = state_25301;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25301__$1,inst_25299);
} else {
if((state_val_25302 === (25))){
var state_25301__$1 = state_25301;
var statearr_25316_25364 = state_25301__$1;
(statearr_25316_25364[(2)] = null);

(statearr_25316_25364[(1)] = (26));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25302 === (17))){
var inst_25274 = (state_25301[(14)]);
var state_25301__$1 = state_25301;
var statearr_25317_25365 = state_25301__$1;
(statearr_25317_25365[(2)] = inst_25274);

(statearr_25317_25365[(1)] = (19));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25302 === (3))){
var inst_25233 = (state_25301[(9)]);
var state_25301__$1 = state_25301;
var statearr_25318_25366 = state_25301__$1;
(statearr_25318_25366[(2)] = inst_25233);

(statearr_25318_25366[(1)] = (4));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25302 === (12))){
var inst_25259 = (state_25301[(15)]);
var inst_25254 = (state_25301[(16)]);
var inst_25274 = (state_25301[(14)]);
var inst_25274__$1 = (function (){var G__25319 = inst_25259;
return (inst_25254.cljs$core$IFn$_invoke$arity$1 ? inst_25254.cljs$core$IFn$_invoke$arity$1(G__25319) : inst_25254.call(null,G__25319));
})();
var state_25301__$1 = (function (){var statearr_25320 = state_25301;
(statearr_25320[(14)] = inst_25274__$1);

return statearr_25320;
})();
if(cljs.core.truth_(inst_25274__$1)){
var statearr_25321_25367 = state_25301__$1;
(statearr_25321_25367[(1)] = (17));

} else {
var statearr_25322_25368 = state_25301__$1;
(statearr_25322_25368[(1)] = (18));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_25302 === (2))){
var inst_25233 = (state_25301[(9)]);
var inst_25236 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25233);
var state_25301__$1 = state_25301;
var statearr_25323_25369 = state_25301__$1;
(statearr_25323_25369[(2)] = inst_25236);

(statearr_25323_25369[(1)] = (4));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25302 === (23))){
var inst_25286 = (state_25301[(2)]);
var state_25301__$1 = state_25301;
if(cljs.core.truth_(inst_25286)){
var statearr_25324_25370 = state_25301__$1;
(statearr_25324_25370[(1)] = (24));

} else {
var statearr_25325_25371 = state_25301__$1;
(statearr_25325_25371[(1)] = (25));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_25302 === (19))){
var inst_25283 = (state_25301[(2)]);
var state_25301__$1 = state_25301;
if(cljs.core.truth_(inst_25283)){
var statearr_25326_25372 = state_25301__$1;
(statearr_25326_25372[(1)] = (20));

} else {
var statearr_25327_25373 = state_25301__$1;
(statearr_25327_25373[(1)] = (21));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_25302 === (11))){
var inst_25258 = (state_25301[(8)]);
var inst_25264 = (inst_25258 == null);
var state_25301__$1 = state_25301;
if(cljs.core.truth_(inst_25264)){
var statearr_25328_25374 = state_25301__$1;
(statearr_25328_25374[(1)] = (14));

} else {
var statearr_25329_25375 = state_25301__$1;
(statearr_25329_25375[(1)] = (15));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_25302 === (9))){
var inst_25251 = (state_25301[(10)]);
var inst_25251__$1 = (state_25301[(2)]);
var inst_25252 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25251__$1,cljs.core.constant$keyword$79);
var inst_25253 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25251__$1,cljs.core.constant$keyword$78);
var inst_25254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25251__$1,cljs.core.constant$keyword$77);
var state_25301__$1 = (function (){var statearr_25330 = state_25301;
(statearr_25330[(16)] = inst_25254);

(statearr_25330[(10)] = inst_25251__$1);

(statearr_25330[(17)] = inst_25253);

return statearr_25330;
})();
return cljs.core.async.ioc_alts_BANG_(state_25301__$1,(10),inst_25252);
} else {
if((state_val_25302 === (5))){
var inst_25243 = (state_25301[(7)]);
var inst_25246 = cljs.core.seq_QMARK_(inst_25243);
var state_25301__$1 = state_25301;
if(inst_25246){
var statearr_25331_25376 = state_25301__$1;
(statearr_25331_25376[(1)] = (7));

} else {
var statearr_25332_25377 = state_25301__$1;
(statearr_25332_25377[(1)] = (8));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_25302 === (14))){
var inst_25259 = (state_25301[(15)]);
var inst_25266 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25259);
var state_25301__$1 = state_25301;
var statearr_25333_25378 = state_25301__$1;
(statearr_25333_25378[(2)] = inst_25266);

(statearr_25333_25378[(1)] = (16));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25302 === (26))){
var inst_25291 = (state_25301[(2)]);
var state_25301__$1 = state_25301;
var statearr_25334_25379 = state_25301__$1;
(statearr_25334_25379[(2)] = inst_25291);

(statearr_25334_25379[(1)] = (22));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25302 === (16))){
var inst_25269 = (state_25301[(2)]);
var inst_25270 = calc_state();
var inst_25243 = inst_25270;
var state_25301__$1 = (function (){var statearr_25335 = state_25301;
(statearr_25335[(7)] = inst_25243);

(statearr_25335[(18)] = inst_25269);

return statearr_25335;
})();
var statearr_25336_25380 = state_25301__$1;
(statearr_25336_25380[(2)] = null);

(statearr_25336_25380[(1)] = (5));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25302 === (10))){
var inst_25259 = (state_25301[(15)]);
var inst_25258 = (state_25301[(8)]);
var inst_25257 = (state_25301[(2)]);
var inst_25258__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25257,(0),null);
var inst_25259__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25257,(1),null);
var inst_25260 = (inst_25258__$1 == null);
var inst_25261 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25259__$1,change);
var inst_25262 = (inst_25260) || (inst_25261);
var state_25301__$1 = (function (){var statearr_25337 = state_25301;
(statearr_25337[(15)] = inst_25259__$1);

(statearr_25337[(8)] = inst_25258__$1);

return statearr_25337;
})();
if(cljs.core.truth_(inst_25262)){
var statearr_25338_25381 = state_25301__$1;
(statearr_25338_25381[(1)] = (11));

} else {
var statearr_25339_25382 = state_25301__$1;
(statearr_25339_25382[(1)] = (12));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_25302 === (18))){
var inst_25259 = (state_25301[(15)]);
var inst_25254 = (state_25301[(16)]);
var inst_25253 = (state_25301[(17)]);
var inst_25278 = cljs.core.empty_QMARK_(inst_25254);
var inst_25279 = (function (){var G__25340 = inst_25259;
return (inst_25253.cljs$core$IFn$_invoke$arity$1 ? inst_25253.cljs$core$IFn$_invoke$arity$1(G__25340) : inst_25253.call(null,G__25340));
})();
var inst_25280 = cljs.core.not(inst_25279);
var inst_25281 = (inst_25278) && (inst_25280);
var state_25301__$1 = state_25301;
var statearr_25341_25383 = state_25301__$1;
(statearr_25341_25383[(2)] = inst_25281);

(statearr_25341_25383[(1)] = (19));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25302 === (8))){
var inst_25243 = (state_25301[(7)]);
var state_25301__$1 = state_25301;
var statearr_25342_25384 = state_25301__$1;
(statearr_25342_25384[(2)] = inst_25243);

(statearr_25342_25384[(1)] = (9));


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
});})(c__11621__auto___25354,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__11541__auto__,c__11621__auto___25354,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11542__auto__ = null;
var state_machine__11542__auto____0 = (function (){
var statearr_25346 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25346[(0)] = state_machine__11542__auto__);

(statearr_25346[(1)] = (1));

return statearr_25346;
});
var state_machine__11542__auto____1 = (function (state_25301){
while(true){
var ret_value__11543__auto__ = (function (){try{while(true){
var result__11544__auto__ = switch__11541__auto__(state_25301);
if(cljs.core.keyword_identical_QMARK_(result__11544__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11544__auto__;
}
break;
}
}catch (e25347){if((e25347 instanceof Object)){
var ex__11545__auto__ = e25347;
var statearr_25348_25385 = state_25301;
(statearr_25348_25385[(5)] = ex__11545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25301);

return cljs.core.constant$keyword$65;
} else {
throw e25347;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11543__auto__,cljs.core.constant$keyword$65)){
var G__25386 = state_25301;
state_25301 = G__25386;
continue;
} else {
return ret_value__11543__auto__;
}
break;
}
});
state_machine__11542__auto__ = function(state_25301){
switch(arguments.length){
case 0:
return state_machine__11542__auto____0.call(this);
case 1:
return state_machine__11542__auto____1.call(this,state_25301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11542__auto____0;
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11542__auto____1;
return state_machine__11542__auto__;
})()
;})(switch__11541__auto__,c__11621__auto___25354,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11623__auto__ = (function (){var statearr_25349 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_25349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto___25354);

return statearr_25349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(c__11621__auto___25354,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj25388 = {};
return obj25388;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3719__auto__ = p;
if(and__3719__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3719__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4375__auto__ = (((p == null))?null:p);
return (function (){var or__3731__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__25392 = x__4375__auto__;
return goog.typeOf(G__25392);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3719__auto__ = p;
if(and__3719__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3719__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4375__auto__ = (((p == null))?null:p);
return (function (){var or__3731__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__25396 = x__4375__auto__;
return goog.typeOf(G__25396);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
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
if((function (){var and__3719__auto__ = p;
if(and__3719__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3719__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4375__auto__ = (((p == null))?null:p);
return (function (){var or__3731__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__25402 = x__4375__auto__;
return goog.typeOf(G__25402);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3719__auto__ = p;
if(and__3719__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3719__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4375__auto__ = (((p == null))?null:p);
return (function (){var or__3731__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__25404 = x__4375__auto__;
return goog.typeOf(G__25404);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
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
var mults = (function (){var G__25543 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25543) : cljs.core.atom.call(null,G__25543));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__3731__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__25545 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25545) : cljs.core.deref.call(null,G__25545));
})(),topic);
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3731__auto__,mults){
return (function (p1__25405_SHARP_){
if(cljs.core.truth_((function (){var G__25546 = topic;
return (p1__25405_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25405_SHARP_.cljs$core$IFn$_invoke$arity$1(G__25546) : p1__25405_SHARP_.call(null,G__25546));
})())){
return p1__25405_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25405_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__25547 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__25547) : buf_fn.call(null,G__25547));
})())));
}
});})(or__3731__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t25548 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25548 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25549){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25549 = meta25549;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25548.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t25548.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__25551 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__25551) : self__.ensure_mult.call(null,G__25551));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t25548.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__25552 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25552) : cljs.core.deref.call(null,G__25552));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t25548.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25553 = self__.mults;
var G__25554 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25553,G__25554) : cljs.core.reset_BANG_.call(null,G__25553,G__25554));
});})(mults,ensure_mult))
;

cljs.core.async.t25548.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t25548.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25548.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t25548.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25550){
var self__ = this;
var _25550__$1 = this;
return self__.meta25549;
});})(mults,ensure_mult))
;

cljs.core.async.t25548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25550,meta25549__$1){
var self__ = this;
var _25550__$1 = this;
return (new cljs.core.async.t25548(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25549__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t25548.cljs$lang$type = true;

cljs.core.async.t25548.cljs$lang$ctorStr = "cljs.core.async/t25548";

cljs.core.async.t25548.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core.async/t25548");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t25548 = ((function (mults,ensure_mult){
return (function __GT_t25548(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25549){
return (new cljs.core.async.t25548(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25549));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t25548(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,65,cljs.core.constant$keyword$9,603,cljs.core.constant$keyword$10,14,cljs.core.constant$keyword$11,591,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
;
var c__11621__auto___25677 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11621__auto___25677,mults,ensure_mult,p){
return (function (){
var f__11622__auto__ = (function (){var switch__11541__auto__ = ((function (c__11621__auto___25677,mults,ensure_mult,p){
return (function (state_25626){
var state_val_25627 = (state_25626[(1)]);
if((state_val_25627 === (7))){
var inst_25622 = (state_25626[(2)]);
var state_25626__$1 = state_25626;
var statearr_25628_25678 = state_25626__$1;
(statearr_25628_25678[(2)] = inst_25622);

(statearr_25628_25678[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25627 === (20))){
var state_25626__$1 = state_25626;
var statearr_25629_25679 = state_25626__$1;
(statearr_25629_25679[(2)] = null);

(statearr_25629_25679[(1)] = (21));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25627 === (1))){
var state_25626__$1 = state_25626;
var statearr_25630_25680 = state_25626__$1;
(statearr_25630_25680[(2)] = null);

(statearr_25630_25680[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25627 === (24))){
var inst_25605 = (state_25626[(7)]);
var inst_25614 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25605);
var state_25626__$1 = state_25626;
var statearr_25631_25681 = state_25626__$1;
(statearr_25631_25681[(2)] = inst_25614);

(statearr_25631_25681[(1)] = (25));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25627 === (4))){
var inst_25557 = (state_25626[(8)]);
var inst_25557__$1 = (state_25626[(2)]);
var inst_25558 = (inst_25557__$1 == null);
var state_25626__$1 = (function (){var statearr_25632 = state_25626;
(statearr_25632[(8)] = inst_25557__$1);

return statearr_25632;
})();
if(cljs.core.truth_(inst_25558)){
var statearr_25633_25682 = state_25626__$1;
(statearr_25633_25682[(1)] = (5));

} else {
var statearr_25634_25683 = state_25626__$1;
(statearr_25634_25683[(1)] = (6));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_25627 === (15))){
var inst_25599 = (state_25626[(2)]);
var state_25626__$1 = state_25626;
var statearr_25635_25684 = state_25626__$1;
(statearr_25635_25684[(2)] = inst_25599);

(statearr_25635_25684[(1)] = (12));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25627 === (21))){
var inst_25619 = (state_25626[(2)]);
var state_25626__$1 = (function (){var statearr_25636 = state_25626;
(statearr_25636[(9)] = inst_25619);

return statearr_25636;
})();
var statearr_25637_25685 = state_25626__$1;
(statearr_25637_25685[(2)] = null);

(statearr_25637_25685[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25627 === (13))){
var inst_25581 = (state_25626[(10)]);
var inst_25583 = cljs.core.chunked_seq_QMARK_(inst_25581);
var state_25626__$1 = state_25626;
if(inst_25583){
var statearr_25638_25686 = state_25626__$1;
(statearr_25638_25686[(1)] = (16));

} else {
var statearr_25639_25687 = state_25626__$1;
(statearr_25639_25687[(1)] = (17));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_25627 === (22))){
var inst_25611 = (state_25626[(2)]);
var state_25626__$1 = state_25626;
if(cljs.core.truth_(inst_25611)){
var statearr_25640_25688 = state_25626__$1;
(statearr_25640_25688[(1)] = (23));

} else {
var statearr_25641_25689 = state_25626__$1;
(statearr_25641_25689[(1)] = (24));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_25627 === (6))){
var inst_25557 = (state_25626[(8)]);
var inst_25607 = (state_25626[(11)]);
var inst_25605 = (state_25626[(7)]);
var inst_25605__$1 = (function (){var G__25642 = inst_25557;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__25642) : topic_fn.call(null,G__25642));
})();
var inst_25606 = (function (){var G__25643 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25643) : cljs.core.deref.call(null,G__25643));
})();
var inst_25607__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25606,inst_25605__$1);
var state_25626__$1 = (function (){var statearr_25644 = state_25626;
(statearr_25644[(11)] = inst_25607__$1);

(statearr_25644[(7)] = inst_25605__$1);

return statearr_25644;
})();
if(cljs.core.truth_(inst_25607__$1)){
var statearr_25645_25690 = state_25626__$1;
(statearr_25645_25690[(1)] = (19));

} else {
var statearr_25646_25691 = state_25626__$1;
(statearr_25646_25691[(1)] = (20));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_25627 === (25))){
var inst_25616 = (state_25626[(2)]);
var state_25626__$1 = state_25626;
var statearr_25647_25692 = state_25626__$1;
(statearr_25647_25692[(2)] = inst_25616);

(statearr_25647_25692[(1)] = (21));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25627 === (17))){
var inst_25581 = (state_25626[(10)]);
var inst_25590 = cljs.core.first(inst_25581);
var inst_25591 = cljs.core.async.muxch_STAR_(inst_25590);
var inst_25592 = cljs.core.async.close_BANG_(inst_25591);
var inst_25593 = cljs.core.next(inst_25581);
var inst_25567 = inst_25593;
var inst_25568 = null;
var inst_25569 = (0);
var inst_25570 = (0);
var state_25626__$1 = (function (){var statearr_25648 = state_25626;
(statearr_25648[(12)] = inst_25569);

(statearr_25648[(13)] = inst_25567);

(statearr_25648[(14)] = inst_25592);

(statearr_25648[(15)] = inst_25568);

(statearr_25648[(16)] = inst_25570);

return statearr_25648;
})();
var statearr_25649_25693 = state_25626__$1;
(statearr_25649_25693[(2)] = null);

(statearr_25649_25693[(1)] = (8));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25627 === (3))){
var inst_25624 = (state_25626[(2)]);
var state_25626__$1 = state_25626;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25626__$1,inst_25624);
} else {
if((state_val_25627 === (12))){
var inst_25601 = (state_25626[(2)]);
var state_25626__$1 = state_25626;
var statearr_25650_25694 = state_25626__$1;
(statearr_25650_25694[(2)] = inst_25601);

(statearr_25650_25694[(1)] = (9));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25627 === (2))){
var state_25626__$1 = state_25626;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25626__$1,(4),ch);
} else {
if((state_val_25627 === (23))){
var state_25626__$1 = state_25626;
var statearr_25651_25695 = state_25626__$1;
(statearr_25651_25695[(2)] = null);

(statearr_25651_25695[(1)] = (25));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25627 === (19))){
var inst_25557 = (state_25626[(8)]);
var inst_25607 = (state_25626[(11)]);
var inst_25609 = cljs.core.async.muxch_STAR_(inst_25607);
var state_25626__$1 = state_25626;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25626__$1,(22),inst_25609,inst_25557);
} else {
if((state_val_25627 === (11))){
var inst_25581 = (state_25626[(10)]);
var inst_25567 = (state_25626[(13)]);
var inst_25581__$1 = cljs.core.seq(inst_25567);
var state_25626__$1 = (function (){var statearr_25652 = state_25626;
(statearr_25652[(10)] = inst_25581__$1);

return statearr_25652;
})();
if(inst_25581__$1){
var statearr_25653_25696 = state_25626__$1;
(statearr_25653_25696[(1)] = (13));

} else {
var statearr_25654_25697 = state_25626__$1;
(statearr_25654_25697[(1)] = (14));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_25627 === (9))){
var inst_25603 = (state_25626[(2)]);
var state_25626__$1 = state_25626;
var statearr_25655_25698 = state_25626__$1;
(statearr_25655_25698[(2)] = inst_25603);

(statearr_25655_25698[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25627 === (5))){
var inst_25564 = (function (){var G__25656 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25656) : cljs.core.deref.call(null,G__25656));
})();
var inst_25565 = cljs.core.vals(inst_25564);
var inst_25566 = cljs.core.seq(inst_25565);
var inst_25567 = inst_25566;
var inst_25568 = null;
var inst_25569 = (0);
var inst_25570 = (0);
var state_25626__$1 = (function (){var statearr_25657 = state_25626;
(statearr_25657[(12)] = inst_25569);

(statearr_25657[(13)] = inst_25567);

(statearr_25657[(15)] = inst_25568);

(statearr_25657[(16)] = inst_25570);

return statearr_25657;
})();
var statearr_25658_25699 = state_25626__$1;
(statearr_25658_25699[(2)] = null);

(statearr_25658_25699[(1)] = (8));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25627 === (14))){
var state_25626__$1 = state_25626;
var statearr_25662_25700 = state_25626__$1;
(statearr_25662_25700[(2)] = null);

(statearr_25662_25700[(1)] = (15));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25627 === (16))){
var inst_25581 = (state_25626[(10)]);
var inst_25585 = cljs.core.chunk_first(inst_25581);
var inst_25586 = cljs.core.chunk_rest(inst_25581);
var inst_25587 = cljs.core.count(inst_25585);
var inst_25567 = inst_25586;
var inst_25568 = inst_25585;
var inst_25569 = inst_25587;
var inst_25570 = (0);
var state_25626__$1 = (function (){var statearr_25663 = state_25626;
(statearr_25663[(12)] = inst_25569);

(statearr_25663[(13)] = inst_25567);

(statearr_25663[(15)] = inst_25568);

(statearr_25663[(16)] = inst_25570);

return statearr_25663;
})();
var statearr_25664_25701 = state_25626__$1;
(statearr_25664_25701[(2)] = null);

(statearr_25664_25701[(1)] = (8));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25627 === (10))){
var inst_25569 = (state_25626[(12)]);
var inst_25567 = (state_25626[(13)]);
var inst_25568 = (state_25626[(15)]);
var inst_25570 = (state_25626[(16)]);
var inst_25575 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25568,inst_25570);
var inst_25576 = cljs.core.async.muxch_STAR_(inst_25575);
var inst_25577 = cljs.core.async.close_BANG_(inst_25576);
var inst_25578 = (inst_25570 + (1));
var tmp25659 = inst_25569;
var tmp25660 = inst_25567;
var tmp25661 = inst_25568;
var inst_25567__$1 = tmp25660;
var inst_25568__$1 = tmp25661;
var inst_25569__$1 = tmp25659;
var inst_25570__$1 = inst_25578;
var state_25626__$1 = (function (){var statearr_25665 = state_25626;
(statearr_25665[(12)] = inst_25569__$1);

(statearr_25665[(17)] = inst_25577);

(statearr_25665[(13)] = inst_25567__$1);

(statearr_25665[(15)] = inst_25568__$1);

(statearr_25665[(16)] = inst_25570__$1);

return statearr_25665;
})();
var statearr_25666_25702 = state_25626__$1;
(statearr_25666_25702[(2)] = null);

(statearr_25666_25702[(1)] = (8));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25627 === (18))){
var inst_25596 = (state_25626[(2)]);
var state_25626__$1 = state_25626;
var statearr_25667_25703 = state_25626__$1;
(statearr_25667_25703[(2)] = inst_25596);

(statearr_25667_25703[(1)] = (15));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25627 === (8))){
var inst_25569 = (state_25626[(12)]);
var inst_25570 = (state_25626[(16)]);
var inst_25572 = (inst_25570 < inst_25569);
var inst_25573 = inst_25572;
var state_25626__$1 = state_25626;
if(cljs.core.truth_(inst_25573)){
var statearr_25668_25704 = state_25626__$1;
(statearr_25668_25704[(1)] = (10));

} else {
var statearr_25669_25705 = state_25626__$1;
(statearr_25669_25705[(1)] = (11));

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
});})(c__11621__auto___25677,mults,ensure_mult,p))
;
return ((function (switch__11541__auto__,c__11621__auto___25677,mults,ensure_mult,p){
return (function() {
var state_machine__11542__auto__ = null;
var state_machine__11542__auto____0 = (function (){
var statearr_25673 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25673[(0)] = state_machine__11542__auto__);

(statearr_25673[(1)] = (1));

return statearr_25673;
});
var state_machine__11542__auto____1 = (function (state_25626){
while(true){
var ret_value__11543__auto__ = (function (){try{while(true){
var result__11544__auto__ = switch__11541__auto__(state_25626);
if(cljs.core.keyword_identical_QMARK_(result__11544__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11544__auto__;
}
break;
}
}catch (e25674){if((e25674 instanceof Object)){
var ex__11545__auto__ = e25674;
var statearr_25675_25706 = state_25626;
(statearr_25675_25706[(5)] = ex__11545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25626);

return cljs.core.constant$keyword$65;
} else {
throw e25674;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11543__auto__,cljs.core.constant$keyword$65)){
var G__25707 = state_25626;
state_25626 = G__25707;
continue;
} else {
return ret_value__11543__auto__;
}
break;
}
});
state_machine__11542__auto__ = function(state_25626){
switch(arguments.length){
case 0:
return state_machine__11542__auto____0.call(this);
case 1:
return state_machine__11542__auto____1.call(this,state_25626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11542__auto____0;
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11542__auto____1;
return state_machine__11542__auto__;
})()
;})(switch__11541__auto__,c__11621__auto___25677,mults,ensure_mult,p))
})();
var state__11623__auto__ = (function (){var statearr_25676 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_25676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto___25677);

return statearr_25676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(c__11621__auto___25677,mults,ensure_mult,p))
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
var dctr = (function (){var G__25788 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25788) : cljs.core.atom.call(null,G__25788));
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
var c__11621__auto___25861 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11621__auto___25861,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11622__auto__ = (function (){var switch__11541__auto__ = ((function (c__11621__auto___25861,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25827){
var state_val_25828 = (state_25827[(1)]);
if((state_val_25828 === (7))){
var state_25827__$1 = state_25827;
var statearr_25829_25862 = state_25827__$1;
(statearr_25829_25862[(2)] = null);

(statearr_25829_25862[(1)] = (8));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25828 === (1))){
var state_25827__$1 = state_25827;
var statearr_25830_25863 = state_25827__$1;
(statearr_25830_25863[(2)] = null);

(statearr_25830_25863[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25828 === (4))){
var inst_25791 = (state_25827[(7)]);
var inst_25793 = (inst_25791 < cnt);
var state_25827__$1 = state_25827;
if(cljs.core.truth_(inst_25793)){
var statearr_25831_25864 = state_25827__$1;
(statearr_25831_25864[(1)] = (6));

} else {
var statearr_25832_25865 = state_25827__$1;
(statearr_25832_25865[(1)] = (7));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_25828 === (15))){
var inst_25823 = (state_25827[(2)]);
var state_25827__$1 = state_25827;
var statearr_25833_25866 = state_25827__$1;
(statearr_25833_25866[(2)] = inst_25823);

(statearr_25833_25866[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25828 === (13))){
var inst_25816 = cljs.core.async.close_BANG_(out);
var state_25827__$1 = state_25827;
var statearr_25834_25867 = state_25827__$1;
(statearr_25834_25867[(2)] = inst_25816);

(statearr_25834_25867[(1)] = (15));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25828 === (6))){
var state_25827__$1 = state_25827;
var statearr_25835_25868 = state_25827__$1;
(statearr_25835_25868[(2)] = null);

(statearr_25835_25868[(1)] = (11));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25828 === (3))){
var inst_25825 = (state_25827[(2)]);
var state_25827__$1 = state_25827;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25827__$1,inst_25825);
} else {
if((state_val_25828 === (12))){
var inst_25813 = (state_25827[(8)]);
var inst_25813__$1 = (state_25827[(2)]);
var inst_25814 = cljs.core.some(cljs.core.nil_QMARK_,inst_25813__$1);
var state_25827__$1 = (function (){var statearr_25836 = state_25827;
(statearr_25836[(8)] = inst_25813__$1);

return statearr_25836;
})();
if(cljs.core.truth_(inst_25814)){
var statearr_25837_25869 = state_25827__$1;
(statearr_25837_25869[(1)] = (13));

} else {
var statearr_25838_25870 = state_25827__$1;
(statearr_25838_25870[(1)] = (14));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_25828 === (2))){
var inst_25790 = (function (){var G__25839 = dctr;
var G__25840 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25839,G__25840) : cljs.core.reset_BANG_.call(null,G__25839,G__25840));
})();
var inst_25791 = (0);
var state_25827__$1 = (function (){var statearr_25841 = state_25827;
(statearr_25841[(9)] = inst_25790);

(statearr_25841[(7)] = inst_25791);

return statearr_25841;
})();
var statearr_25842_25871 = state_25827__$1;
(statearr_25842_25871[(2)] = null);

(statearr_25842_25871[(1)] = (4));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25828 === (11))){
var inst_25791 = (state_25827[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25827,(10),Object,null,(9));
var inst_25800 = (function (){var G__25843 = inst_25791;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__25843) : chs__$1.call(null,G__25843));
})();
var inst_25801 = (function (){var G__25844 = inst_25791;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__25844) : done.call(null,G__25844));
})();
var inst_25802 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_25800,inst_25801);
var state_25827__$1 = state_25827;
var statearr_25845_25872 = state_25827__$1;
(statearr_25845_25872[(2)] = inst_25802);


cljs.core.async.impl.ioc_helpers.process_exception(state_25827__$1);

return cljs.core.constant$keyword$65;
} else {
if((state_val_25828 === (9))){
var inst_25791 = (state_25827[(7)]);
var inst_25804 = (state_25827[(2)]);
var inst_25805 = (inst_25791 + (1));
var inst_25791__$1 = inst_25805;
var state_25827__$1 = (function (){var statearr_25846 = state_25827;
(statearr_25846[(10)] = inst_25804);

(statearr_25846[(7)] = inst_25791__$1);

return statearr_25846;
})();
var statearr_25847_25873 = state_25827__$1;
(statearr_25847_25873[(2)] = null);

(statearr_25847_25873[(1)] = (4));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25828 === (5))){
var inst_25811 = (state_25827[(2)]);
var state_25827__$1 = (function (){var statearr_25848 = state_25827;
(statearr_25848[(11)] = inst_25811);

return statearr_25848;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25827__$1,(12),dchan);
} else {
if((state_val_25828 === (14))){
var inst_25813 = (state_25827[(8)]);
var inst_25818 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_25813);
var state_25827__$1 = state_25827;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25827__$1,(16),out,inst_25818);
} else {
if((state_val_25828 === (16))){
var inst_25820 = (state_25827[(2)]);
var state_25827__$1 = (function (){var statearr_25849 = state_25827;
(statearr_25849[(12)] = inst_25820);

return statearr_25849;
})();
var statearr_25850_25874 = state_25827__$1;
(statearr_25850_25874[(2)] = null);

(statearr_25850_25874[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25828 === (10))){
var inst_25795 = (state_25827[(2)]);
var inst_25796 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_25827__$1 = (function (){var statearr_25851 = state_25827;
(statearr_25851[(13)] = inst_25795);

return statearr_25851;
})();
var statearr_25852_25875 = state_25827__$1;
(statearr_25852_25875[(2)] = inst_25796);


cljs.core.async.impl.ioc_helpers.process_exception(state_25827__$1);

return cljs.core.constant$keyword$65;
} else {
if((state_val_25828 === (8))){
var inst_25809 = (state_25827[(2)]);
var state_25827__$1 = state_25827;
var statearr_25853_25876 = state_25827__$1;
(statearr_25853_25876[(2)] = inst_25809);

(statearr_25853_25876[(1)] = (5));


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
});})(c__11621__auto___25861,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__11541__auto__,c__11621__auto___25861,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11542__auto__ = null;
var state_machine__11542__auto____0 = (function (){
var statearr_25857 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25857[(0)] = state_machine__11542__auto__);

(statearr_25857[(1)] = (1));

return statearr_25857;
});
var state_machine__11542__auto____1 = (function (state_25827){
while(true){
var ret_value__11543__auto__ = (function (){try{while(true){
var result__11544__auto__ = switch__11541__auto__(state_25827);
if(cljs.core.keyword_identical_QMARK_(result__11544__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11544__auto__;
}
break;
}
}catch (e25858){if((e25858 instanceof Object)){
var ex__11545__auto__ = e25858;
var statearr_25859_25877 = state_25827;
(statearr_25859_25877[(5)] = ex__11545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25827);

return cljs.core.constant$keyword$65;
} else {
throw e25858;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11543__auto__,cljs.core.constant$keyword$65)){
var G__25878 = state_25827;
state_25827 = G__25878;
continue;
} else {
return ret_value__11543__auto__;
}
break;
}
});
state_machine__11542__auto__ = function(state_25827){
switch(arguments.length){
case 0:
return state_machine__11542__auto____0.call(this);
case 1:
return state_machine__11542__auto____1.call(this,state_25827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11542__auto____0;
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11542__auto____1;
return state_machine__11542__auto__;
})()
;})(switch__11541__auto__,c__11621__auto___25861,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11623__auto__ = (function (){var statearr_25860 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_25860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto___25861);

return statearr_25860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(c__11621__auto___25861,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__11621__auto___25988 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11621__auto___25988,out){
return (function (){
var f__11622__auto__ = (function (){var switch__11541__auto__ = ((function (c__11621__auto___25988,out){
return (function (state_25964){
var state_val_25965 = (state_25964[(1)]);
if((state_val_25965 === (7))){
var inst_25943 = (state_25964[(7)]);
var inst_25944 = (state_25964[(8)]);
var inst_25943__$1 = (state_25964[(2)]);
var inst_25944__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25943__$1,(0),null);
var inst_25945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25943__$1,(1),null);
var inst_25946 = (inst_25944__$1 == null);
var state_25964__$1 = (function (){var statearr_25966 = state_25964;
(statearr_25966[(7)] = inst_25943__$1);

(statearr_25966[(8)] = inst_25944__$1);

(statearr_25966[(9)] = inst_25945);

return statearr_25966;
})();
if(cljs.core.truth_(inst_25946)){
var statearr_25967_25989 = state_25964__$1;
(statearr_25967_25989[(1)] = (8));

} else {
var statearr_25968_25990 = state_25964__$1;
(statearr_25968_25990[(1)] = (9));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_25965 === (1))){
var inst_25935 = cljs.core.vec(chs);
var inst_25936 = inst_25935;
var state_25964__$1 = (function (){var statearr_25969 = state_25964;
(statearr_25969[(10)] = inst_25936);

return statearr_25969;
})();
var statearr_25970_25991 = state_25964__$1;
(statearr_25970_25991[(2)] = null);

(statearr_25970_25991[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25965 === (4))){
var inst_25936 = (state_25964[(10)]);
var state_25964__$1 = state_25964;
return cljs.core.async.ioc_alts_BANG_(state_25964__$1,(7),inst_25936);
} else {
if((state_val_25965 === (6))){
var inst_25960 = (state_25964[(2)]);
var state_25964__$1 = state_25964;
var statearr_25971_25992 = state_25964__$1;
(statearr_25971_25992[(2)] = inst_25960);

(statearr_25971_25992[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25965 === (3))){
var inst_25962 = (state_25964[(2)]);
var state_25964__$1 = state_25964;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25964__$1,inst_25962);
} else {
if((state_val_25965 === (2))){
var inst_25936 = (state_25964[(10)]);
var inst_25938 = cljs.core.count(inst_25936);
var inst_25939 = (inst_25938 > (0));
var state_25964__$1 = state_25964;
if(cljs.core.truth_(inst_25939)){
var statearr_25973_25993 = state_25964__$1;
(statearr_25973_25993[(1)] = (4));

} else {
var statearr_25974_25994 = state_25964__$1;
(statearr_25974_25994[(1)] = (5));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_25965 === (11))){
var inst_25936 = (state_25964[(10)]);
var inst_25953 = (state_25964[(2)]);
var tmp25972 = inst_25936;
var inst_25936__$1 = tmp25972;
var state_25964__$1 = (function (){var statearr_25975 = state_25964;
(statearr_25975[(10)] = inst_25936__$1);

(statearr_25975[(11)] = inst_25953);

return statearr_25975;
})();
var statearr_25976_25995 = state_25964__$1;
(statearr_25976_25995[(2)] = null);

(statearr_25976_25995[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25965 === (9))){
var inst_25944 = (state_25964[(8)]);
var state_25964__$1 = state_25964;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25964__$1,(11),out,inst_25944);
} else {
if((state_val_25965 === (5))){
var inst_25958 = cljs.core.async.close_BANG_(out);
var state_25964__$1 = state_25964;
var statearr_25977_25996 = state_25964__$1;
(statearr_25977_25996[(2)] = inst_25958);

(statearr_25977_25996[(1)] = (6));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25965 === (10))){
var inst_25956 = (state_25964[(2)]);
var state_25964__$1 = state_25964;
var statearr_25978_25997 = state_25964__$1;
(statearr_25978_25997[(2)] = inst_25956);

(statearr_25978_25997[(1)] = (6));


return cljs.core.constant$keyword$65;
} else {
if((state_val_25965 === (8))){
var inst_25936 = (state_25964[(10)]);
var inst_25943 = (state_25964[(7)]);
var inst_25944 = (state_25964[(8)]);
var inst_25945 = (state_25964[(9)]);
var inst_25948 = (function (){var c = inst_25945;
var v = inst_25944;
var vec__25941 = inst_25943;
var cs = inst_25936;
return ((function (c,v,vec__25941,cs,inst_25936,inst_25943,inst_25944,inst_25945,state_val_25965,c__11621__auto___25988,out){
return (function (p1__25879_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__25879_SHARP_);
});
;})(c,v,vec__25941,cs,inst_25936,inst_25943,inst_25944,inst_25945,state_val_25965,c__11621__auto___25988,out))
})();
var inst_25949 = cljs.core.filterv(inst_25948,inst_25936);
var inst_25936__$1 = inst_25949;
var state_25964__$1 = (function (){var statearr_25979 = state_25964;
(statearr_25979[(10)] = inst_25936__$1);

return statearr_25979;
})();
var statearr_25980_25998 = state_25964__$1;
(statearr_25980_25998[(2)] = null);

(statearr_25980_25998[(1)] = (2));


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
});})(c__11621__auto___25988,out))
;
return ((function (switch__11541__auto__,c__11621__auto___25988,out){
return (function() {
var state_machine__11542__auto__ = null;
var state_machine__11542__auto____0 = (function (){
var statearr_25984 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25984[(0)] = state_machine__11542__auto__);

(statearr_25984[(1)] = (1));

return statearr_25984;
});
var state_machine__11542__auto____1 = (function (state_25964){
while(true){
var ret_value__11543__auto__ = (function (){try{while(true){
var result__11544__auto__ = switch__11541__auto__(state_25964);
if(cljs.core.keyword_identical_QMARK_(result__11544__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11544__auto__;
}
break;
}
}catch (e25985){if((e25985 instanceof Object)){
var ex__11545__auto__ = e25985;
var statearr_25986_25999 = state_25964;
(statearr_25986_25999[(5)] = ex__11545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25964);

return cljs.core.constant$keyword$65;
} else {
throw e25985;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11543__auto__,cljs.core.constant$keyword$65)){
var G__26000 = state_25964;
state_25964 = G__26000;
continue;
} else {
return ret_value__11543__auto__;
}
break;
}
});
state_machine__11542__auto__ = function(state_25964){
switch(arguments.length){
case 0:
return state_machine__11542__auto____0.call(this);
case 1:
return state_machine__11542__auto____1.call(this,state_25964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11542__auto____0;
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11542__auto____1;
return state_machine__11542__auto__;
})()
;})(switch__11541__auto__,c__11621__auto___25988,out))
})();
var state__11623__auto__ = (function (){var statearr_25987 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_25987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto___25988);

return statearr_25987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(c__11621__auto___25988,out))
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
var c__11621__auto___26096 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11621__auto___26096,out){
return (function (){
var f__11622__auto__ = (function (){var switch__11541__auto__ = ((function (c__11621__auto___26096,out){
return (function (state_26073){
var state_val_26074 = (state_26073[(1)]);
if((state_val_26074 === (7))){
var inst_26055 = (state_26073[(7)]);
var inst_26055__$1 = (state_26073[(2)]);
var inst_26056 = (inst_26055__$1 == null);
var inst_26057 = cljs.core.not(inst_26056);
var state_26073__$1 = (function (){var statearr_26075 = state_26073;
(statearr_26075[(7)] = inst_26055__$1);

return statearr_26075;
})();
if(inst_26057){
var statearr_26076_26097 = state_26073__$1;
(statearr_26076_26097[(1)] = (8));

} else {
var statearr_26077_26098 = state_26073__$1;
(statearr_26077_26098[(1)] = (9));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_26074 === (1))){
var inst_26050 = (0);
var state_26073__$1 = (function (){var statearr_26078 = state_26073;
(statearr_26078[(8)] = inst_26050);

return statearr_26078;
})();
var statearr_26079_26099 = state_26073__$1;
(statearr_26079_26099[(2)] = null);

(statearr_26079_26099[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26074 === (4))){
var state_26073__$1 = state_26073;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26073__$1,(7),ch);
} else {
if((state_val_26074 === (6))){
var inst_26068 = (state_26073[(2)]);
var state_26073__$1 = state_26073;
var statearr_26080_26100 = state_26073__$1;
(statearr_26080_26100[(2)] = inst_26068);

(statearr_26080_26100[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26074 === (3))){
var inst_26070 = (state_26073[(2)]);
var inst_26071 = cljs.core.async.close_BANG_(out);
var state_26073__$1 = (function (){var statearr_26081 = state_26073;
(statearr_26081[(9)] = inst_26070);

return statearr_26081;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26073__$1,inst_26071);
} else {
if((state_val_26074 === (2))){
var inst_26050 = (state_26073[(8)]);
var inst_26052 = (inst_26050 < n);
var state_26073__$1 = state_26073;
if(cljs.core.truth_(inst_26052)){
var statearr_26082_26101 = state_26073__$1;
(statearr_26082_26101[(1)] = (4));

} else {
var statearr_26083_26102 = state_26073__$1;
(statearr_26083_26102[(1)] = (5));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_26074 === (11))){
var inst_26050 = (state_26073[(8)]);
var inst_26060 = (state_26073[(2)]);
var inst_26061 = (inst_26050 + (1));
var inst_26050__$1 = inst_26061;
var state_26073__$1 = (function (){var statearr_26084 = state_26073;
(statearr_26084[(10)] = inst_26060);

(statearr_26084[(8)] = inst_26050__$1);

return statearr_26084;
})();
var statearr_26085_26103 = state_26073__$1;
(statearr_26085_26103[(2)] = null);

(statearr_26085_26103[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26074 === (9))){
var state_26073__$1 = state_26073;
var statearr_26086_26104 = state_26073__$1;
(statearr_26086_26104[(2)] = null);

(statearr_26086_26104[(1)] = (10));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26074 === (5))){
var state_26073__$1 = state_26073;
var statearr_26087_26105 = state_26073__$1;
(statearr_26087_26105[(2)] = null);

(statearr_26087_26105[(1)] = (6));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26074 === (10))){
var inst_26065 = (state_26073[(2)]);
var state_26073__$1 = state_26073;
var statearr_26088_26106 = state_26073__$1;
(statearr_26088_26106[(2)] = inst_26065);

(statearr_26088_26106[(1)] = (6));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26074 === (8))){
var inst_26055 = (state_26073[(7)]);
var state_26073__$1 = state_26073;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26073__$1,(11),out,inst_26055);
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
});})(c__11621__auto___26096,out))
;
return ((function (switch__11541__auto__,c__11621__auto___26096,out){
return (function() {
var state_machine__11542__auto__ = null;
var state_machine__11542__auto____0 = (function (){
var statearr_26092 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26092[(0)] = state_machine__11542__auto__);

(statearr_26092[(1)] = (1));

return statearr_26092;
});
var state_machine__11542__auto____1 = (function (state_26073){
while(true){
var ret_value__11543__auto__ = (function (){try{while(true){
var result__11544__auto__ = switch__11541__auto__(state_26073);
if(cljs.core.keyword_identical_QMARK_(result__11544__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11544__auto__;
}
break;
}
}catch (e26093){if((e26093 instanceof Object)){
var ex__11545__auto__ = e26093;
var statearr_26094_26107 = state_26073;
(statearr_26094_26107[(5)] = ex__11545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26073);

return cljs.core.constant$keyword$65;
} else {
throw e26093;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11543__auto__,cljs.core.constant$keyword$65)){
var G__26108 = state_26073;
state_26073 = G__26108;
continue;
} else {
return ret_value__11543__auto__;
}
break;
}
});
state_machine__11542__auto__ = function(state_26073){
switch(arguments.length){
case 0:
return state_machine__11542__auto____0.call(this);
case 1:
return state_machine__11542__auto____1.call(this,state_26073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11542__auto____0;
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11542__auto____1;
return state_machine__11542__auto__;
})()
;})(switch__11541__auto__,c__11621__auto___26096,out))
})();
var state__11623__auto__ = (function (){var statearr_26095 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_26095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto___26096);

return statearr_26095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(c__11621__auto___26096,out))
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
if(typeof cljs.core.async.t26121 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26121 = (function (ch,f,map_LT_,meta26122){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26122 = meta26122;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26121.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26121.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t26121.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26121.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t26124 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26124 = (function (fn1,_,meta26122,map_LT_,f,ch,meta26125){
this.fn1 = fn1;
this._ = _;
this.meta26122 = meta26122;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26125 = meta26125;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26124.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26124.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t26124.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26109_SHARP_){
var G__26127 = (((p1__26109_SHARP_ == null))?null:(function (){var G__26128 = p1__26109_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26128) : self__.f.call(null,G__26128));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__26127) : f1.call(null,G__26127));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t26124.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26126){
var self__ = this;
var _26126__$1 = this;
return self__.meta26125;
});})(___$1))
;

cljs.core.async.t26124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26126,meta26125__$1){
var self__ = this;
var _26126__$1 = this;
return (new cljs.core.async.t26124(self__.fn1,self__._,self__.meta26122,self__.map_LT_,self__.f,self__.ch,meta26125__$1));
});})(___$1))
;

cljs.core.async.t26124.cljs$lang$type = true;

cljs.core.async.t26124.cljs$lang$ctorStr = "cljs.core.async/t26124";

cljs.core.async.t26124.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core.async/t26124");
});})(___$1))
;

cljs.core.async.__GT_t26124 = ((function (___$1){
return (function __GT_t26124(fn1__$1,___$2,meta26122__$1,map_LT___$1,f__$1,ch__$1,meta26125){
return (new cljs.core.async.t26124(fn1__$1,___$2,meta26122__$1,map_LT___$1,f__$1,ch__$1,meta26125));
});})(___$1))
;

}

return (new cljs.core.async.t26124(fn1,___$1,self__.meta26122,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,737,cljs.core.constant$keyword$10,10,cljs.core.constant$keyword$11,731,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3719__auto__ = ret;
if(cljs.core.truth_(and__3719__auto__)){
return !(((function (){var G__26129 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26129) : cljs.core.deref.call(null,G__26129));
})() == null));
} else {
return and__3719__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__26130 = (function (){var G__26131 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26131) : cljs.core.deref.call(null,G__26131));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26130) : self__.f.call(null,G__26130));
})());
} else {
return ret;
}
});

cljs.core.async.t26121.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26121.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t26121.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t26121.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26123){
var self__ = this;
var _26123__$1 = this;
return self__.meta26122;
});

cljs.core.async.t26121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26123,meta26122__$1){
var self__ = this;
var _26123__$1 = this;
return (new cljs.core.async.t26121(self__.ch,self__.f,self__.map_LT_,meta26122__$1));
});

cljs.core.async.t26121.cljs$lang$type = true;

cljs.core.async.t26121.cljs$lang$ctorStr = "cljs.core.async/t26121";

cljs.core.async.t26121.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core.async/t26121");
});

cljs.core.async.__GT_t26121 = (function __GT_t26121(ch__$1,f__$1,map_LT___$1,meta26122){
return (new cljs.core.async.t26121(ch__$1,f__$1,map_LT___$1,meta26122));
});

}

return (new cljs.core.async.t26121(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,743,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,722,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t26136 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26136 = (function (ch,f,map_GT_,meta26137){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta26137 = meta26137;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26136.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26136.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__26139 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26139) : self__.f.call(null,G__26139));
})(),fn1);
});

cljs.core.async.t26136.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26136.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t26136.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26136.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t26136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26138){
var self__ = this;
var _26138__$1 = this;
return self__.meta26137;
});

cljs.core.async.t26136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26138,meta26137__$1){
var self__ = this;
var _26138__$1 = this;
return (new cljs.core.async.t26136(self__.ch,self__.f,self__.map_GT_,meta26137__$1));
});

cljs.core.async.t26136.cljs$lang$type = true;

cljs.core.async.t26136.cljs$lang$ctorStr = "cljs.core.async/t26136";

cljs.core.async.t26136.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core.async/t26136");
});

cljs.core.async.__GT_t26136 = (function __GT_t26136(ch__$1,f__$1,map_GT___$1,meta26137){
return (new cljs.core.async.t26136(ch__$1,f__$1,map_GT___$1,meta26137));
});

}

return (new cljs.core.async.t26136(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,34,cljs.core.constant$keyword$9,757,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,748,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t26144 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26144 = (function (ch,p,filter_GT_,meta26145){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta26145 = meta26145;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26144.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26144.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__26147 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__26147) : self__.p.call(null,G__26147));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t26144.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26144.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t26144.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26144.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t26144.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t26144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26146){
var self__ = this;
var _26146__$1 = this;
return self__.meta26145;
});

cljs.core.async.t26144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26146,meta26145__$1){
var self__ = this;
var _26146__$1 = this;
return (new cljs.core.async.t26144(self__.ch,self__.p,self__.filter_GT_,meta26145__$1));
});

cljs.core.async.t26144.cljs$lang$type = true;

cljs.core.async.t26144.cljs$lang$ctorStr = "cljs.core.async/t26144";

cljs.core.async.t26144.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core.async/t26144");
});

cljs.core.async.__GT_t26144 = (function __GT_t26144(ch__$1,p__$1,filter_GT___$1,meta26145){
return (new cljs.core.async.t26144(ch__$1,p__$1,filter_GT___$1,meta26145));
});

}

return (new cljs.core.async.t26144(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,774,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,762,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
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
var c__11621__auto___26235 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11621__auto___26235,out){
return (function (){
var f__11622__auto__ = (function (){var switch__11541__auto__ = ((function (c__11621__auto___26235,out){
return (function (state_26213){
var state_val_26214 = (state_26213[(1)]);
if((state_val_26214 === (7))){
var inst_26209 = (state_26213[(2)]);
var state_26213__$1 = state_26213;
var statearr_26215_26236 = state_26213__$1;
(statearr_26215_26236[(2)] = inst_26209);

(statearr_26215_26236[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26214 === (1))){
var state_26213__$1 = state_26213;
var statearr_26216_26237 = state_26213__$1;
(statearr_26216_26237[(2)] = null);

(statearr_26216_26237[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26214 === (4))){
var inst_26195 = (state_26213[(7)]);
var inst_26195__$1 = (state_26213[(2)]);
var inst_26196 = (inst_26195__$1 == null);
var state_26213__$1 = (function (){var statearr_26217 = state_26213;
(statearr_26217[(7)] = inst_26195__$1);

return statearr_26217;
})();
if(cljs.core.truth_(inst_26196)){
var statearr_26218_26238 = state_26213__$1;
(statearr_26218_26238[(1)] = (5));

} else {
var statearr_26219_26239 = state_26213__$1;
(statearr_26219_26239[(1)] = (6));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_26214 === (6))){
var inst_26195 = (state_26213[(7)]);
var inst_26200 = (function (){var G__26220 = inst_26195;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__26220) : p.call(null,G__26220));
})();
var state_26213__$1 = state_26213;
if(cljs.core.truth_(inst_26200)){
var statearr_26221_26240 = state_26213__$1;
(statearr_26221_26240[(1)] = (8));

} else {
var statearr_26222_26241 = state_26213__$1;
(statearr_26222_26241[(1)] = (9));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_26214 === (3))){
var inst_26211 = (state_26213[(2)]);
var state_26213__$1 = state_26213;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26213__$1,inst_26211);
} else {
if((state_val_26214 === (2))){
var state_26213__$1 = state_26213;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26213__$1,(4),ch);
} else {
if((state_val_26214 === (11))){
var inst_26203 = (state_26213[(2)]);
var state_26213__$1 = state_26213;
var statearr_26223_26242 = state_26213__$1;
(statearr_26223_26242[(2)] = inst_26203);

(statearr_26223_26242[(1)] = (10));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26214 === (9))){
var state_26213__$1 = state_26213;
var statearr_26224_26243 = state_26213__$1;
(statearr_26224_26243[(2)] = null);

(statearr_26224_26243[(1)] = (10));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26214 === (5))){
var inst_26198 = cljs.core.async.close_BANG_(out);
var state_26213__$1 = state_26213;
var statearr_26225_26244 = state_26213__$1;
(statearr_26225_26244[(2)] = inst_26198);

(statearr_26225_26244[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26214 === (10))){
var inst_26206 = (state_26213[(2)]);
var state_26213__$1 = (function (){var statearr_26226 = state_26213;
(statearr_26226[(8)] = inst_26206);

return statearr_26226;
})();
var statearr_26227_26245 = state_26213__$1;
(statearr_26227_26245[(2)] = null);

(statearr_26227_26245[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26214 === (8))){
var inst_26195 = (state_26213[(7)]);
var state_26213__$1 = state_26213;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26213__$1,(11),out,inst_26195);
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
});})(c__11621__auto___26235,out))
;
return ((function (switch__11541__auto__,c__11621__auto___26235,out){
return (function() {
var state_machine__11542__auto__ = null;
var state_machine__11542__auto____0 = (function (){
var statearr_26231 = [null,null,null,null,null,null,null,null,null];
(statearr_26231[(0)] = state_machine__11542__auto__);

(statearr_26231[(1)] = (1));

return statearr_26231;
});
var state_machine__11542__auto____1 = (function (state_26213){
while(true){
var ret_value__11543__auto__ = (function (){try{while(true){
var result__11544__auto__ = switch__11541__auto__(state_26213);
if(cljs.core.keyword_identical_QMARK_(result__11544__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11544__auto__;
}
break;
}
}catch (e26232){if((e26232 instanceof Object)){
var ex__11545__auto__ = e26232;
var statearr_26233_26246 = state_26213;
(statearr_26233_26246[(5)] = ex__11545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26213);

return cljs.core.constant$keyword$65;
} else {
throw e26232;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11543__auto__,cljs.core.constant$keyword$65)){
var G__26247 = state_26213;
state_26213 = G__26247;
continue;
} else {
return ret_value__11543__auto__;
}
break;
}
});
state_machine__11542__auto__ = function(state_26213){
switch(arguments.length){
case 0:
return state_machine__11542__auto____0.call(this);
case 1:
return state_machine__11542__auto____1.call(this,state_26213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11542__auto____0;
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11542__auto____1;
return state_machine__11542__auto__;
})()
;})(switch__11541__auto__,c__11621__auto___26235,out))
})();
var state__11623__auto__ = (function (){var statearr_26234 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_26234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto___26235);

return statearr_26234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(c__11621__auto___26235,out))
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
var c__11621__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11621__auto__){
return (function (){
var f__11622__auto__ = (function (){var switch__11541__auto__ = ((function (c__11621__auto__){
return (function (state_26417){
var state_val_26418 = (state_26417[(1)]);
if((state_val_26418 === (7))){
var inst_26413 = (state_26417[(2)]);
var state_26417__$1 = state_26417;
var statearr_26419_26461 = state_26417__$1;
(statearr_26419_26461[(2)] = inst_26413);

(statearr_26419_26461[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26418 === (20))){
var inst_26383 = (state_26417[(7)]);
var inst_26394 = (state_26417[(2)]);
var inst_26395 = cljs.core.next(inst_26383);
var inst_26369 = inst_26395;
var inst_26370 = null;
var inst_26371 = (0);
var inst_26372 = (0);
var state_26417__$1 = (function (){var statearr_26420 = state_26417;
(statearr_26420[(8)] = inst_26394);

(statearr_26420[(9)] = inst_26370);

(statearr_26420[(10)] = inst_26371);

(statearr_26420[(11)] = inst_26372);

(statearr_26420[(12)] = inst_26369);

return statearr_26420;
})();
var statearr_26421_26462 = state_26417__$1;
(statearr_26421_26462[(2)] = null);

(statearr_26421_26462[(1)] = (8));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26418 === (1))){
var state_26417__$1 = state_26417;
var statearr_26422_26463 = state_26417__$1;
(statearr_26422_26463[(2)] = null);

(statearr_26422_26463[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26418 === (4))){
var inst_26358 = (state_26417[(13)]);
var inst_26358__$1 = (state_26417[(2)]);
var inst_26359 = (inst_26358__$1 == null);
var state_26417__$1 = (function (){var statearr_26423 = state_26417;
(statearr_26423[(13)] = inst_26358__$1);

return statearr_26423;
})();
if(cljs.core.truth_(inst_26359)){
var statearr_26424_26464 = state_26417__$1;
(statearr_26424_26464[(1)] = (5));

} else {
var statearr_26425_26465 = state_26417__$1;
(statearr_26425_26465[(1)] = (6));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_26418 === (15))){
var state_26417__$1 = state_26417;
var statearr_26429_26466 = state_26417__$1;
(statearr_26429_26466[(2)] = null);

(statearr_26429_26466[(1)] = (16));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26418 === (21))){
var state_26417__$1 = state_26417;
var statearr_26430_26467 = state_26417__$1;
(statearr_26430_26467[(2)] = null);

(statearr_26430_26467[(1)] = (23));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26418 === (13))){
var inst_26370 = (state_26417[(9)]);
var inst_26371 = (state_26417[(10)]);
var inst_26372 = (state_26417[(11)]);
var inst_26369 = (state_26417[(12)]);
var inst_26379 = (state_26417[(2)]);
var inst_26380 = (inst_26372 + (1));
var tmp26426 = inst_26370;
var tmp26427 = inst_26371;
var tmp26428 = inst_26369;
var inst_26369__$1 = tmp26428;
var inst_26370__$1 = tmp26426;
var inst_26371__$1 = tmp26427;
var inst_26372__$1 = inst_26380;
var state_26417__$1 = (function (){var statearr_26431 = state_26417;
(statearr_26431[(14)] = inst_26379);

(statearr_26431[(9)] = inst_26370__$1);

(statearr_26431[(10)] = inst_26371__$1);

(statearr_26431[(11)] = inst_26372__$1);

(statearr_26431[(12)] = inst_26369__$1);

return statearr_26431;
})();
var statearr_26432_26468 = state_26417__$1;
(statearr_26432_26468[(2)] = null);

(statearr_26432_26468[(1)] = (8));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26418 === (22))){
var state_26417__$1 = state_26417;
var statearr_26433_26469 = state_26417__$1;
(statearr_26433_26469[(2)] = null);

(statearr_26433_26469[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26418 === (6))){
var inst_26358 = (state_26417[(13)]);
var inst_26367 = (function (){var G__26434 = inst_26358;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26434) : f.call(null,G__26434));
})();
var inst_26368 = cljs.core.seq(inst_26367);
var inst_26369 = inst_26368;
var inst_26370 = null;
var inst_26371 = (0);
var inst_26372 = (0);
var state_26417__$1 = (function (){var statearr_26435 = state_26417;
(statearr_26435[(9)] = inst_26370);

(statearr_26435[(10)] = inst_26371);

(statearr_26435[(11)] = inst_26372);

(statearr_26435[(12)] = inst_26369);

return statearr_26435;
})();
var statearr_26436_26470 = state_26417__$1;
(statearr_26436_26470[(2)] = null);

(statearr_26436_26470[(1)] = (8));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26418 === (17))){
var inst_26383 = (state_26417[(7)]);
var inst_26387 = cljs.core.chunk_first(inst_26383);
var inst_26388 = cljs.core.chunk_rest(inst_26383);
var inst_26389 = cljs.core.count(inst_26387);
var inst_26369 = inst_26388;
var inst_26370 = inst_26387;
var inst_26371 = inst_26389;
var inst_26372 = (0);
var state_26417__$1 = (function (){var statearr_26437 = state_26417;
(statearr_26437[(9)] = inst_26370);

(statearr_26437[(10)] = inst_26371);

(statearr_26437[(11)] = inst_26372);

(statearr_26437[(12)] = inst_26369);

return statearr_26437;
})();
var statearr_26438_26471 = state_26417__$1;
(statearr_26438_26471[(2)] = null);

(statearr_26438_26471[(1)] = (8));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26418 === (3))){
var inst_26415 = (state_26417[(2)]);
var state_26417__$1 = state_26417;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26417__$1,inst_26415);
} else {
if((state_val_26418 === (12))){
var inst_26403 = (state_26417[(2)]);
var state_26417__$1 = state_26417;
var statearr_26439_26472 = state_26417__$1;
(statearr_26439_26472[(2)] = inst_26403);

(statearr_26439_26472[(1)] = (9));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26418 === (2))){
var state_26417__$1 = state_26417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26417__$1,(4),in$);
} else {
if((state_val_26418 === (23))){
var inst_26411 = (state_26417[(2)]);
var state_26417__$1 = state_26417;
var statearr_26440_26473 = state_26417__$1;
(statearr_26440_26473[(2)] = inst_26411);

(statearr_26440_26473[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26418 === (19))){
var inst_26398 = (state_26417[(2)]);
var state_26417__$1 = state_26417;
var statearr_26441_26474 = state_26417__$1;
(statearr_26441_26474[(2)] = inst_26398);

(statearr_26441_26474[(1)] = (16));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26418 === (11))){
var inst_26369 = (state_26417[(12)]);
var inst_26383 = (state_26417[(7)]);
var inst_26383__$1 = cljs.core.seq(inst_26369);
var state_26417__$1 = (function (){var statearr_26442 = state_26417;
(statearr_26442[(7)] = inst_26383__$1);

return statearr_26442;
})();
if(inst_26383__$1){
var statearr_26443_26475 = state_26417__$1;
(statearr_26443_26475[(1)] = (14));

} else {
var statearr_26444_26476 = state_26417__$1;
(statearr_26444_26476[(1)] = (15));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_26418 === (9))){
var inst_26405 = (state_26417[(2)]);
var inst_26406 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_26417__$1 = (function (){var statearr_26445 = state_26417;
(statearr_26445[(15)] = inst_26405);

return statearr_26445;
})();
if(cljs.core.truth_(inst_26406)){
var statearr_26446_26477 = state_26417__$1;
(statearr_26446_26477[(1)] = (21));

} else {
var statearr_26447_26478 = state_26417__$1;
(statearr_26447_26478[(1)] = (22));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_26418 === (5))){
var inst_26361 = cljs.core.async.close_BANG_(out);
var state_26417__$1 = state_26417;
var statearr_26448_26479 = state_26417__$1;
(statearr_26448_26479[(2)] = inst_26361);

(statearr_26448_26479[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26418 === (14))){
var inst_26383 = (state_26417[(7)]);
var inst_26385 = cljs.core.chunked_seq_QMARK_(inst_26383);
var state_26417__$1 = state_26417;
if(inst_26385){
var statearr_26449_26480 = state_26417__$1;
(statearr_26449_26480[(1)] = (17));

} else {
var statearr_26450_26481 = state_26417__$1;
(statearr_26450_26481[(1)] = (18));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_26418 === (16))){
var inst_26401 = (state_26417[(2)]);
var state_26417__$1 = state_26417;
var statearr_26451_26482 = state_26417__$1;
(statearr_26451_26482[(2)] = inst_26401);

(statearr_26451_26482[(1)] = (12));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26418 === (10))){
var inst_26370 = (state_26417[(9)]);
var inst_26372 = (state_26417[(11)]);
var inst_26377 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26370,inst_26372);
var state_26417__$1 = state_26417;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26417__$1,(13),out,inst_26377);
} else {
if((state_val_26418 === (18))){
var inst_26383 = (state_26417[(7)]);
var inst_26392 = cljs.core.first(inst_26383);
var state_26417__$1 = state_26417;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26417__$1,(20),out,inst_26392);
} else {
if((state_val_26418 === (8))){
var inst_26371 = (state_26417[(10)]);
var inst_26372 = (state_26417[(11)]);
var inst_26374 = (inst_26372 < inst_26371);
var inst_26375 = inst_26374;
var state_26417__$1 = state_26417;
if(cljs.core.truth_(inst_26375)){
var statearr_26452_26483 = state_26417__$1;
(statearr_26452_26483[(1)] = (10));

} else {
var statearr_26453_26484 = state_26417__$1;
(statearr_26453_26484[(1)] = (11));

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
});})(c__11621__auto__))
;
return ((function (switch__11541__auto__,c__11621__auto__){
return (function() {
var state_machine__11542__auto__ = null;
var state_machine__11542__auto____0 = (function (){
var statearr_26457 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26457[(0)] = state_machine__11542__auto__);

(statearr_26457[(1)] = (1));

return statearr_26457;
});
var state_machine__11542__auto____1 = (function (state_26417){
while(true){
var ret_value__11543__auto__ = (function (){try{while(true){
var result__11544__auto__ = switch__11541__auto__(state_26417);
if(cljs.core.keyword_identical_QMARK_(result__11544__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11544__auto__;
}
break;
}
}catch (e26458){if((e26458 instanceof Object)){
var ex__11545__auto__ = e26458;
var statearr_26459_26485 = state_26417;
(statearr_26459_26485[(5)] = ex__11545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26417);

return cljs.core.constant$keyword$65;
} else {
throw e26458;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11543__auto__,cljs.core.constant$keyword$65)){
var G__26486 = state_26417;
state_26417 = G__26486;
continue;
} else {
return ret_value__11543__auto__;
}
break;
}
});
state_machine__11542__auto__ = function(state_26417){
switch(arguments.length){
case 0:
return state_machine__11542__auto____0.call(this);
case 1:
return state_machine__11542__auto____1.call(this,state_26417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11542__auto____0;
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11542__auto____1;
return state_machine__11542__auto__;
})()
;})(switch__11541__auto__,c__11621__auto__))
})();
var state__11623__auto__ = (function (){var statearr_26460 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_26460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto__);

return statearr_26460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(c__11621__auto__))
);

return c__11621__auto__;
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
var c__11621__auto___26591 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11621__auto___26591,out){
return (function (){
var f__11622__auto__ = (function (){var switch__11541__auto__ = ((function (c__11621__auto___26591,out){
return (function (state_26566){
var state_val_26567 = (state_26566[(1)]);
if((state_val_26567 === (7))){
var inst_26561 = (state_26566[(2)]);
var state_26566__$1 = state_26566;
var statearr_26568_26592 = state_26566__$1;
(statearr_26568_26592[(2)] = inst_26561);

(statearr_26568_26592[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26567 === (1))){
var inst_26543 = null;
var state_26566__$1 = (function (){var statearr_26569 = state_26566;
(statearr_26569[(7)] = inst_26543);

return statearr_26569;
})();
var statearr_26570_26593 = state_26566__$1;
(statearr_26570_26593[(2)] = null);

(statearr_26570_26593[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26567 === (4))){
var inst_26546 = (state_26566[(8)]);
var inst_26546__$1 = (state_26566[(2)]);
var inst_26547 = (inst_26546__$1 == null);
var inst_26548 = cljs.core.not(inst_26547);
var state_26566__$1 = (function (){var statearr_26571 = state_26566;
(statearr_26571[(8)] = inst_26546__$1);

return statearr_26571;
})();
if(inst_26548){
var statearr_26572_26594 = state_26566__$1;
(statearr_26572_26594[(1)] = (5));

} else {
var statearr_26573_26595 = state_26566__$1;
(statearr_26573_26595[(1)] = (6));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_26567 === (6))){
var state_26566__$1 = state_26566;
var statearr_26574_26596 = state_26566__$1;
(statearr_26574_26596[(2)] = null);

(statearr_26574_26596[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26567 === (3))){
var inst_26563 = (state_26566[(2)]);
var inst_26564 = cljs.core.async.close_BANG_(out);
var state_26566__$1 = (function (){var statearr_26575 = state_26566;
(statearr_26575[(9)] = inst_26563);

return statearr_26575;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26566__$1,inst_26564);
} else {
if((state_val_26567 === (2))){
var state_26566__$1 = state_26566;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26566__$1,(4),ch);
} else {
if((state_val_26567 === (11))){
var inst_26546 = (state_26566[(8)]);
var inst_26555 = (state_26566[(2)]);
var inst_26543 = inst_26546;
var state_26566__$1 = (function (){var statearr_26576 = state_26566;
(statearr_26576[(7)] = inst_26543);

(statearr_26576[(10)] = inst_26555);

return statearr_26576;
})();
var statearr_26577_26597 = state_26566__$1;
(statearr_26577_26597[(2)] = null);

(statearr_26577_26597[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26567 === (9))){
var inst_26546 = (state_26566[(8)]);
var state_26566__$1 = state_26566;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26566__$1,(11),out,inst_26546);
} else {
if((state_val_26567 === (5))){
var inst_26543 = (state_26566[(7)]);
var inst_26546 = (state_26566[(8)]);
var inst_26550 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26546,inst_26543);
var state_26566__$1 = state_26566;
if(inst_26550){
var statearr_26579_26598 = state_26566__$1;
(statearr_26579_26598[(1)] = (8));

} else {
var statearr_26580_26599 = state_26566__$1;
(statearr_26580_26599[(1)] = (9));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_26567 === (10))){
var inst_26558 = (state_26566[(2)]);
var state_26566__$1 = state_26566;
var statearr_26581_26600 = state_26566__$1;
(statearr_26581_26600[(2)] = inst_26558);

(statearr_26581_26600[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26567 === (8))){
var inst_26543 = (state_26566[(7)]);
var tmp26578 = inst_26543;
var inst_26543__$1 = tmp26578;
var state_26566__$1 = (function (){var statearr_26582 = state_26566;
(statearr_26582[(7)] = inst_26543__$1);

return statearr_26582;
})();
var statearr_26583_26601 = state_26566__$1;
(statearr_26583_26601[(2)] = null);

(statearr_26583_26601[(1)] = (2));


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
});})(c__11621__auto___26591,out))
;
return ((function (switch__11541__auto__,c__11621__auto___26591,out){
return (function() {
var state_machine__11542__auto__ = null;
var state_machine__11542__auto____0 = (function (){
var statearr_26587 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26587[(0)] = state_machine__11542__auto__);

(statearr_26587[(1)] = (1));

return statearr_26587;
});
var state_machine__11542__auto____1 = (function (state_26566){
while(true){
var ret_value__11543__auto__ = (function (){try{while(true){
var result__11544__auto__ = switch__11541__auto__(state_26566);
if(cljs.core.keyword_identical_QMARK_(result__11544__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11544__auto__;
}
break;
}
}catch (e26588){if((e26588 instanceof Object)){
var ex__11545__auto__ = e26588;
var statearr_26589_26602 = state_26566;
(statearr_26589_26602[(5)] = ex__11545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26566);

return cljs.core.constant$keyword$65;
} else {
throw e26588;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11543__auto__,cljs.core.constant$keyword$65)){
var G__26603 = state_26566;
state_26566 = G__26603;
continue;
} else {
return ret_value__11543__auto__;
}
break;
}
});
state_machine__11542__auto__ = function(state_26566){
switch(arguments.length){
case 0:
return state_machine__11542__auto____0.call(this);
case 1:
return state_machine__11542__auto____1.call(this,state_26566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11542__auto____0;
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11542__auto____1;
return state_machine__11542__auto__;
})()
;})(switch__11541__auto__,c__11621__auto___26591,out))
})();
var state__11623__auto__ = (function (){var statearr_26590 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_26590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto___26591);

return statearr_26590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(c__11621__auto___26591,out))
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
var c__11621__auto___26741 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11621__auto___26741,out){
return (function (){
var f__11622__auto__ = (function (){var switch__11541__auto__ = ((function (c__11621__auto___26741,out){
return (function (state_26711){
var state_val_26712 = (state_26711[(1)]);
if((state_val_26712 === (7))){
var inst_26707 = (state_26711[(2)]);
var state_26711__$1 = state_26711;
var statearr_26713_26742 = state_26711__$1;
(statearr_26713_26742[(2)] = inst_26707);

(statearr_26713_26742[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26712 === (1))){
var inst_26674 = (new Array(n));
var inst_26675 = inst_26674;
var inst_26676 = (0);
var state_26711__$1 = (function (){var statearr_26714 = state_26711;
(statearr_26714[(7)] = inst_26675);

(statearr_26714[(8)] = inst_26676);

return statearr_26714;
})();
var statearr_26715_26743 = state_26711__$1;
(statearr_26715_26743[(2)] = null);

(statearr_26715_26743[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26712 === (4))){
var inst_26679 = (state_26711[(9)]);
var inst_26679__$1 = (state_26711[(2)]);
var inst_26680 = (inst_26679__$1 == null);
var inst_26681 = cljs.core.not(inst_26680);
var state_26711__$1 = (function (){var statearr_26716 = state_26711;
(statearr_26716[(9)] = inst_26679__$1);

return statearr_26716;
})();
if(inst_26681){
var statearr_26717_26744 = state_26711__$1;
(statearr_26717_26744[(1)] = (5));

} else {
var statearr_26718_26745 = state_26711__$1;
(statearr_26718_26745[(1)] = (6));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_26712 === (15))){
var inst_26701 = (state_26711[(2)]);
var state_26711__$1 = state_26711;
var statearr_26719_26746 = state_26711__$1;
(statearr_26719_26746[(2)] = inst_26701);

(statearr_26719_26746[(1)] = (14));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26712 === (13))){
var state_26711__$1 = state_26711;
var statearr_26720_26747 = state_26711__$1;
(statearr_26720_26747[(2)] = null);

(statearr_26720_26747[(1)] = (14));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26712 === (6))){
var inst_26676 = (state_26711[(8)]);
var inst_26697 = (inst_26676 > (0));
var state_26711__$1 = state_26711;
if(cljs.core.truth_(inst_26697)){
var statearr_26721_26748 = state_26711__$1;
(statearr_26721_26748[(1)] = (12));

} else {
var statearr_26722_26749 = state_26711__$1;
(statearr_26722_26749[(1)] = (13));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_26712 === (3))){
var inst_26709 = (state_26711[(2)]);
var state_26711__$1 = state_26711;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26711__$1,inst_26709);
} else {
if((state_val_26712 === (12))){
var inst_26675 = (state_26711[(7)]);
var inst_26699 = cljs.core.vec(inst_26675);
var state_26711__$1 = state_26711;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26711__$1,(15),out,inst_26699);
} else {
if((state_val_26712 === (2))){
var state_26711__$1 = state_26711;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26711__$1,(4),ch);
} else {
if((state_val_26712 === (11))){
var inst_26691 = (state_26711[(2)]);
var inst_26692 = (new Array(n));
var inst_26675 = inst_26692;
var inst_26676 = (0);
var state_26711__$1 = (function (){var statearr_26723 = state_26711;
(statearr_26723[(10)] = inst_26691);

(statearr_26723[(7)] = inst_26675);

(statearr_26723[(8)] = inst_26676);

return statearr_26723;
})();
var statearr_26724_26750 = state_26711__$1;
(statearr_26724_26750[(2)] = null);

(statearr_26724_26750[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26712 === (9))){
var inst_26675 = (state_26711[(7)]);
var inst_26689 = cljs.core.vec(inst_26675);
var state_26711__$1 = state_26711;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26711__$1,(11),out,inst_26689);
} else {
if((state_val_26712 === (5))){
var inst_26684 = (state_26711[(11)]);
var inst_26675 = (state_26711[(7)]);
var inst_26676 = (state_26711[(8)]);
var inst_26679 = (state_26711[(9)]);
var inst_26683 = (inst_26675[inst_26676] = inst_26679);
var inst_26684__$1 = (inst_26676 + (1));
var inst_26685 = (inst_26684__$1 < n);
var state_26711__$1 = (function (){var statearr_26725 = state_26711;
(statearr_26725[(11)] = inst_26684__$1);

(statearr_26725[(12)] = inst_26683);

return statearr_26725;
})();
if(cljs.core.truth_(inst_26685)){
var statearr_26726_26751 = state_26711__$1;
(statearr_26726_26751[(1)] = (8));

} else {
var statearr_26727_26752 = state_26711__$1;
(statearr_26727_26752[(1)] = (9));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_26712 === (14))){
var inst_26704 = (state_26711[(2)]);
var inst_26705 = cljs.core.async.close_BANG_(out);
var state_26711__$1 = (function (){var statearr_26729 = state_26711;
(statearr_26729[(13)] = inst_26704);

return statearr_26729;
})();
var statearr_26730_26753 = state_26711__$1;
(statearr_26730_26753[(2)] = inst_26705);

(statearr_26730_26753[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26712 === (10))){
var inst_26695 = (state_26711[(2)]);
var state_26711__$1 = state_26711;
var statearr_26731_26754 = state_26711__$1;
(statearr_26731_26754[(2)] = inst_26695);

(statearr_26731_26754[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26712 === (8))){
var inst_26684 = (state_26711[(11)]);
var inst_26675 = (state_26711[(7)]);
var tmp26728 = inst_26675;
var inst_26675__$1 = tmp26728;
var inst_26676 = inst_26684;
var state_26711__$1 = (function (){var statearr_26732 = state_26711;
(statearr_26732[(7)] = inst_26675__$1);

(statearr_26732[(8)] = inst_26676);

return statearr_26732;
})();
var statearr_26733_26755 = state_26711__$1;
(statearr_26733_26755[(2)] = null);

(statearr_26733_26755[(1)] = (2));


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
});})(c__11621__auto___26741,out))
;
return ((function (switch__11541__auto__,c__11621__auto___26741,out){
return (function() {
var state_machine__11542__auto__ = null;
var state_machine__11542__auto____0 = (function (){
var statearr_26737 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26737[(0)] = state_machine__11542__auto__);

(statearr_26737[(1)] = (1));

return statearr_26737;
});
var state_machine__11542__auto____1 = (function (state_26711){
while(true){
var ret_value__11543__auto__ = (function (){try{while(true){
var result__11544__auto__ = switch__11541__auto__(state_26711);
if(cljs.core.keyword_identical_QMARK_(result__11544__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11544__auto__;
}
break;
}
}catch (e26738){if((e26738 instanceof Object)){
var ex__11545__auto__ = e26738;
var statearr_26739_26756 = state_26711;
(statearr_26739_26756[(5)] = ex__11545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26711);

return cljs.core.constant$keyword$65;
} else {
throw e26738;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11543__auto__,cljs.core.constant$keyword$65)){
var G__26757 = state_26711;
state_26711 = G__26757;
continue;
} else {
return ret_value__11543__auto__;
}
break;
}
});
state_machine__11542__auto__ = function(state_26711){
switch(arguments.length){
case 0:
return state_machine__11542__auto____0.call(this);
case 1:
return state_machine__11542__auto____1.call(this,state_26711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11542__auto____0;
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11542__auto____1;
return state_machine__11542__auto__;
})()
;})(switch__11541__auto__,c__11621__auto___26741,out))
})();
var state__11623__auto__ = (function (){var statearr_26740 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_26740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto___26741);

return statearr_26740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(c__11621__auto___26741,out))
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
var c__11621__auto___26905 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11621__auto___26905,out){
return (function (){
var f__11622__auto__ = (function (){var switch__11541__auto__ = ((function (c__11621__auto___26905,out){
return (function (state_26874){
var state_val_26875 = (state_26874[(1)]);
if((state_val_26875 === (7))){
var inst_26870 = (state_26874[(2)]);
var state_26874__$1 = state_26874;
var statearr_26876_26906 = state_26874__$1;
(statearr_26876_26906[(2)] = inst_26870);

(statearr_26876_26906[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26875 === (1))){
var inst_26833 = [];
var inst_26834 = inst_26833;
var inst_26835 = cljs.core.constant$keyword$80;
var state_26874__$1 = (function (){var statearr_26877 = state_26874;
(statearr_26877[(7)] = inst_26834);

(statearr_26877[(8)] = inst_26835);

return statearr_26877;
})();
var statearr_26878_26907 = state_26874__$1;
(statearr_26878_26907[(2)] = null);

(statearr_26878_26907[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26875 === (4))){
var inst_26838 = (state_26874[(9)]);
var inst_26838__$1 = (state_26874[(2)]);
var inst_26839 = (inst_26838__$1 == null);
var inst_26840 = cljs.core.not(inst_26839);
var state_26874__$1 = (function (){var statearr_26879 = state_26874;
(statearr_26879[(9)] = inst_26838__$1);

return statearr_26879;
})();
if(inst_26840){
var statearr_26880_26908 = state_26874__$1;
(statearr_26880_26908[(1)] = (5));

} else {
var statearr_26881_26909 = state_26874__$1;
(statearr_26881_26909[(1)] = (6));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_26875 === (15))){
var inst_26864 = (state_26874[(2)]);
var state_26874__$1 = state_26874;
var statearr_26882_26910 = state_26874__$1;
(statearr_26882_26910[(2)] = inst_26864);

(statearr_26882_26910[(1)] = (14));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26875 === (13))){
var state_26874__$1 = state_26874;
var statearr_26883_26911 = state_26874__$1;
(statearr_26883_26911[(2)] = null);

(statearr_26883_26911[(1)] = (14));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26875 === (6))){
var inst_26834 = (state_26874[(7)]);
var inst_26859 = inst_26834.length;
var inst_26860 = (inst_26859 > (0));
var state_26874__$1 = state_26874;
if(cljs.core.truth_(inst_26860)){
var statearr_26884_26912 = state_26874__$1;
(statearr_26884_26912[(1)] = (12));

} else {
var statearr_26885_26913 = state_26874__$1;
(statearr_26885_26913[(1)] = (13));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_26875 === (3))){
var inst_26872 = (state_26874[(2)]);
var state_26874__$1 = state_26874;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26874__$1,inst_26872);
} else {
if((state_val_26875 === (12))){
var inst_26834 = (state_26874[(7)]);
var inst_26862 = cljs.core.vec(inst_26834);
var state_26874__$1 = state_26874;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26874__$1,(15),out,inst_26862);
} else {
if((state_val_26875 === (2))){
var state_26874__$1 = state_26874;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26874__$1,(4),ch);
} else {
if((state_val_26875 === (11))){
var inst_26842 = (state_26874[(10)]);
var inst_26838 = (state_26874[(9)]);
var inst_26852 = (state_26874[(2)]);
var inst_26853 = [];
var inst_26854 = inst_26853.push(inst_26838);
var inst_26834 = inst_26853;
var inst_26835 = inst_26842;
var state_26874__$1 = (function (){var statearr_26886 = state_26874;
(statearr_26886[(7)] = inst_26834);

(statearr_26886[(11)] = inst_26854);

(statearr_26886[(12)] = inst_26852);

(statearr_26886[(8)] = inst_26835);

return statearr_26886;
})();
var statearr_26887_26914 = state_26874__$1;
(statearr_26887_26914[(2)] = null);

(statearr_26887_26914[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26875 === (9))){
var inst_26834 = (state_26874[(7)]);
var inst_26850 = cljs.core.vec(inst_26834);
var state_26874__$1 = state_26874;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26874__$1,(11),out,inst_26850);
} else {
if((state_val_26875 === (5))){
var inst_26842 = (state_26874[(10)]);
var inst_26838 = (state_26874[(9)]);
var inst_26835 = (state_26874[(8)]);
var inst_26842__$1 = (function (){var G__26888 = inst_26838;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26888) : f.call(null,G__26888));
})();
var inst_26843 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26842__$1,inst_26835);
var inst_26844 = cljs.core.keyword_identical_QMARK_(inst_26835,cljs.core.constant$keyword$80);
var inst_26845 = (inst_26843) || (inst_26844);
var state_26874__$1 = (function (){var statearr_26889 = state_26874;
(statearr_26889[(10)] = inst_26842__$1);

return statearr_26889;
})();
if(cljs.core.truth_(inst_26845)){
var statearr_26890_26915 = state_26874__$1;
(statearr_26890_26915[(1)] = (8));

} else {
var statearr_26891_26916 = state_26874__$1;
(statearr_26891_26916[(1)] = (9));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_26875 === (14))){
var inst_26867 = (state_26874[(2)]);
var inst_26868 = cljs.core.async.close_BANG_(out);
var state_26874__$1 = (function (){var statearr_26893 = state_26874;
(statearr_26893[(13)] = inst_26867);

return statearr_26893;
})();
var statearr_26894_26917 = state_26874__$1;
(statearr_26894_26917[(2)] = inst_26868);

(statearr_26894_26917[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26875 === (10))){
var inst_26857 = (state_26874[(2)]);
var state_26874__$1 = state_26874;
var statearr_26895_26918 = state_26874__$1;
(statearr_26895_26918[(2)] = inst_26857);

(statearr_26895_26918[(1)] = (7));


return cljs.core.constant$keyword$65;
} else {
if((state_val_26875 === (8))){
var inst_26842 = (state_26874[(10)]);
var inst_26834 = (state_26874[(7)]);
var inst_26838 = (state_26874[(9)]);
var inst_26847 = inst_26834.push(inst_26838);
var tmp26892 = inst_26834;
var inst_26834__$1 = tmp26892;
var inst_26835 = inst_26842;
var state_26874__$1 = (function (){var statearr_26896 = state_26874;
(statearr_26896[(7)] = inst_26834__$1);

(statearr_26896[(14)] = inst_26847);

(statearr_26896[(8)] = inst_26835);

return statearr_26896;
})();
var statearr_26897_26919 = state_26874__$1;
(statearr_26897_26919[(2)] = null);

(statearr_26897_26919[(1)] = (2));


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
});})(c__11621__auto___26905,out))
;
return ((function (switch__11541__auto__,c__11621__auto___26905,out){
return (function() {
var state_machine__11542__auto__ = null;
var state_machine__11542__auto____0 = (function (){
var statearr_26901 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26901[(0)] = state_machine__11542__auto__);

(statearr_26901[(1)] = (1));

return statearr_26901;
});
var state_machine__11542__auto____1 = (function (state_26874){
while(true){
var ret_value__11543__auto__ = (function (){try{while(true){
var result__11544__auto__ = switch__11541__auto__(state_26874);
if(cljs.core.keyword_identical_QMARK_(result__11544__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11544__auto__;
}
break;
}
}catch (e26902){if((e26902 instanceof Object)){
var ex__11545__auto__ = e26902;
var statearr_26903_26920 = state_26874;
(statearr_26903_26920[(5)] = ex__11545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26874);

return cljs.core.constant$keyword$65;
} else {
throw e26902;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11543__auto__,cljs.core.constant$keyword$65)){
var G__26921 = state_26874;
state_26874 = G__26921;
continue;
} else {
return ret_value__11543__auto__;
}
break;
}
});
state_machine__11542__auto__ = function(state_26874){
switch(arguments.length){
case 0:
return state_machine__11542__auto____0.call(this);
case 1:
return state_machine__11542__auto____1.call(this,state_26874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11542__auto____0;
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11542__auto____1;
return state_machine__11542__auto__;
})()
;})(switch__11541__auto__,c__11621__auto___26905,out))
})();
var state__11623__auto__ = (function (){var statearr_26904 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_26904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto___26905);

return statearr_26904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(c__11621__auto___26905,out))
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
