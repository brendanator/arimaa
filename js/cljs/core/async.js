// Compiled by ClojureScript 0.0-2727 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t25150 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25150 = (function (f,fn_handler,meta25151){
this.f = f;
this.fn_handler = fn_handler;
this.meta25151 = meta25151;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25150.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25150.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t25150.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t25150.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25152){
var self__ = this;
var _25152__$1 = this;
return self__.meta25151;
});

cljs.core.async.t25150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25152,meta25151__$1){
var self__ = this;
var _25152__$1 = this;
return (new cljs.core.async.t25150(self__.f,self__.fn_handler,meta25151__$1));
});

cljs.core.async.t25150.cljs$lang$type = true;

cljs.core.async.t25150.cljs$lang$ctorStr = "cljs.core.async/t25150";

cljs.core.async.t25150.cljs$lang$ctorPrWriter = (function (this__4337__auto__,writer__4338__auto__,opt__4339__auto__){
return cljs.core._write(writer__4338__auto__,"cljs.core.async/t25150");
});

cljs.core.async.__GT_t25150 = (function __GT_t25150(f__$1,fn_handler__$1,meta25151){
return (new cljs.core.async.t25150(f__$1,fn_handler__$1,meta25151));
});

}

return (new cljs.core.async.t25150(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,20,cljs.core.constant$keyword$9,16,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,13,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
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
var G__25154 = buff;
if(G__25154){
var bit__4431__auto__ = null;
if(cljs.core.truth_((function (){var or__3750__auto__ = bit__4431__auto__;
if(cljs.core.truth_(or__3750__auto__)){
return or__3750__auto__;
} else {
return G__25154.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__25154.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__25154);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__25154);
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
var val_25171 = (function (){var G__25168 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25168) : cljs.core.deref.call(null,G__25168));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__25169_25172 = val_25171;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__25169_25172) : fn1.call(null,G__25169_25172));
} else {
cljs.core.async.impl.dispatch.run(((function (val_25171,ret){
return (function (){
var G__25170 = val_25171;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__25170) : fn1.call(null,G__25170));
});})(val_25171,ret))
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
var G__25181 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25181) : cljs.core.deref.call(null,G__25181));
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
var ret = (function (){var G__25182 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25182) : cljs.core.deref.call(null,G__25182));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__25183_25185 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__25183_25185) : fn1.call(null,G__25183_25185));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__25184 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__25184) : fn1.call(null,G__25184));
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
var n__4637__auto___25186 = n;
var x_25187 = (0);
while(true){
if((x_25187 < n__4637__auto___25186)){
(a[x_25187] = (0));

var G__25188 = (x_25187 + (1));
x_25187 = G__25188;
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

var G__25189 = (i + (1));
i = G__25189;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__25197 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25197) : cljs.core.atom.call(null,G__25197));
})();
if(typeof cljs.core.async.t25198 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25198 = (function (flag,alt_flag,meta25199){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25199 = meta25199;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25198.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25198.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25201 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25201) : cljs.core.deref.call(null,G__25201));
});})(flag))
;

cljs.core.async.t25198.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25202_25204 = self__.flag;
var G__25203_25205 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25202_25204,G__25203_25205) : cljs.core.reset_BANG_.call(null,G__25202_25204,G__25203_25205));

return true;
});})(flag))
;

cljs.core.async.t25198.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25200){
var self__ = this;
var _25200__$1 = this;
return self__.meta25199;
});})(flag))
;

cljs.core.async.t25198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25200,meta25199__$1){
var self__ = this;
var _25200__$1 = this;
return (new cljs.core.async.t25198(self__.flag,self__.alt_flag,meta25199__$1));
});})(flag))
;

cljs.core.async.t25198.cljs$lang$type = true;

cljs.core.async.t25198.cljs$lang$ctorStr = "cljs.core.async/t25198";

cljs.core.async.t25198.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4337__auto__,writer__4338__auto__,opt__4339__auto__){
return cljs.core._write(writer__4338__auto__,"cljs.core.async/t25198");
});})(flag))
;

cljs.core.async.__GT_t25198 = ((function (flag){
return (function __GT_t25198(flag__$1,alt_flag__$1,meta25199){
return (new cljs.core.async.t25198(flag__$1,alt_flag__$1,meta25199));
});})(flag))
;

}

return (new cljs.core.async.t25198(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,15,cljs.core.constant$keyword$9,146,cljs.core.constant$keyword$10,5,cljs.core.constant$keyword$11,141,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t25209 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25209 = (function (cb,flag,alt_handler,meta25210){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta25210 = meta25210;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25209.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25209.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t25209.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t25209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25211){
var self__ = this;
var _25211__$1 = this;
return self__.meta25210;
});

cljs.core.async.t25209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25211,meta25210__$1){
var self__ = this;
var _25211__$1 = this;
return (new cljs.core.async.t25209(self__.cb,self__.flag,self__.alt_handler,meta25210__$1));
});

cljs.core.async.t25209.cljs$lang$type = true;

cljs.core.async.t25209.cljs$lang$ctorStr = "cljs.core.async/t25209";

cljs.core.async.t25209.cljs$lang$ctorPrWriter = (function (this__4337__auto__,writer__4338__auto__,opt__4339__auto__){
return cljs.core._write(writer__4338__auto__,"cljs.core.async/t25209");
});

cljs.core.async.__GT_t25209 = (function __GT_t25209(cb__$1,flag__$1,alt_handler__$1,meta25210){
return (new cljs.core.async.t25209(cb__$1,flag__$1,alt_handler__$1,meta25210));
});

}

return (new cljs.core.async.t25209(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,11,cljs.core.constant$keyword$9,154,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,149,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.constant$keyword$183.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__25219 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__25219) : port.call(null,G__25219));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__25220 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__25220) : port.call(null,G__25220));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25212_SHARP_){
var G__25221 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25212_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__25221) : fret.call(null,G__25221));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25213_SHARP_){
var G__25222 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25213_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__25222) : fret.call(null,G__25222));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__25223 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25223) : cljs.core.deref.call(null,G__25223));
})(),(function (){var or__3750__auto__ = wport;
if(cljs.core.truth_(or__3750__auto__)){
return or__3750__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25224 = (i + (1));
i = G__25224;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3750__auto__ = ret;
if(cljs.core.truth_(or__3750__auto__)){
return or__3750__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$7)){
var temp__4126__auto__ = (function (){var and__3738__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__3738__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__3738__auto__;
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
var alts_BANG___delegate = function (ports,p__25225){
var map__25227 = p__25225;
var map__25227__$1 = ((cljs.core.seq_QMARK_(map__25227))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25227):map__25227);
var opts = map__25227__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__25225 = null;
if (arguments.length > 1) {
var G__25228__i = 0, G__25228__a = new Array(arguments.length -  1);
while (G__25228__i < G__25228__a.length) {G__25228__a[G__25228__i] = arguments[G__25228__i + 1]; ++G__25228__i;}
  p__25225 = new cljs.core.IndexedSeq(G__25228__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__25225);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__25229){
var ports = cljs.core.first(arglist__25229);
var p__25225 = cljs.core.rest(arglist__25229);
return alts_BANG___delegate(ports,p__25225);
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
var c__12182__auto___25327 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12182__auto___25327){
return (function (){
var f__12183__auto__ = (function (){var switch__12167__auto__ = ((function (c__12182__auto___25327){
return (function (state_25303){
var state_val_25304 = (state_25303[(1)]);
if((state_val_25304 === (7))){
var inst_25299 = (state_25303[(2)]);
var state_25303__$1 = state_25303;
var statearr_25305_25328 = state_25303__$1;
(statearr_25305_25328[(2)] = inst_25299);

(statearr_25305_25328[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25304 === (1))){
var state_25303__$1 = state_25303;
var statearr_25306_25329 = state_25303__$1;
(statearr_25306_25329[(2)] = null);

(statearr_25306_25329[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25304 === (4))){
var inst_25282 = (state_25303[(7)]);
var inst_25282__$1 = (state_25303[(2)]);
var inst_25283 = (inst_25282__$1 == null);
var state_25303__$1 = (function (){var statearr_25307 = state_25303;
(statearr_25307[(7)] = inst_25282__$1);

return statearr_25307;
})();
if(cljs.core.truth_(inst_25283)){
var statearr_25308_25330 = state_25303__$1;
(statearr_25308_25330[(1)] = (5));

} else {
var statearr_25309_25331 = state_25303__$1;
(statearr_25309_25331[(1)] = (6));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_25304 === (13))){
var state_25303__$1 = state_25303;
var statearr_25310_25332 = state_25303__$1;
(statearr_25310_25332[(2)] = null);

(statearr_25310_25332[(1)] = (14));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25304 === (6))){
var inst_25282 = (state_25303[(7)]);
var state_25303__$1 = state_25303;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25303__$1,(11),to,inst_25282);
} else {
if((state_val_25304 === (3))){
var inst_25301 = (state_25303[(2)]);
var state_25303__$1 = state_25303;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25303__$1,inst_25301);
} else {
if((state_val_25304 === (12))){
var state_25303__$1 = state_25303;
var statearr_25311_25333 = state_25303__$1;
(statearr_25311_25333[(2)] = null);

(statearr_25311_25333[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25304 === (2))){
var state_25303__$1 = state_25303;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25303__$1,(4),from);
} else {
if((state_val_25304 === (11))){
var inst_25292 = (state_25303[(2)]);
var state_25303__$1 = state_25303;
if(cljs.core.truth_(inst_25292)){
var statearr_25312_25334 = state_25303__$1;
(statearr_25312_25334[(1)] = (12));

} else {
var statearr_25313_25335 = state_25303__$1;
(statearr_25313_25335[(1)] = (13));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_25304 === (9))){
var state_25303__$1 = state_25303;
var statearr_25314_25336 = state_25303__$1;
(statearr_25314_25336[(2)] = null);

(statearr_25314_25336[(1)] = (10));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25304 === (5))){
var state_25303__$1 = state_25303;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25315_25337 = state_25303__$1;
(statearr_25315_25337[(1)] = (8));

} else {
var statearr_25316_25338 = state_25303__$1;
(statearr_25316_25338[(1)] = (9));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_25304 === (14))){
var inst_25297 = (state_25303[(2)]);
var state_25303__$1 = state_25303;
var statearr_25317_25339 = state_25303__$1;
(statearr_25317_25339[(2)] = inst_25297);

(statearr_25317_25339[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25304 === (10))){
var inst_25289 = (state_25303[(2)]);
var state_25303__$1 = state_25303;
var statearr_25318_25340 = state_25303__$1;
(statearr_25318_25340[(2)] = inst_25289);

(statearr_25318_25340[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25304 === (8))){
var inst_25286 = cljs.core.async.close_BANG_(to);
var state_25303__$1 = state_25303;
var statearr_25319_25341 = state_25303__$1;
(statearr_25319_25341[(2)] = inst_25286);

(statearr_25319_25341[(1)] = (10));


return cljs.core.constant$keyword$127;
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
});})(c__12182__auto___25327))
;
return ((function (switch__12167__auto__,c__12182__auto___25327){
return (function() {
var state_machine__12168__auto__ = null;
var state_machine__12168__auto____0 = (function (){
var statearr_25323 = [null,null,null,null,null,null,null,null];
(statearr_25323[(0)] = state_machine__12168__auto__);

(statearr_25323[(1)] = (1));

return statearr_25323;
});
var state_machine__12168__auto____1 = (function (state_25303){
while(true){
var ret_value__12169__auto__ = (function (){try{while(true){
var result__12170__auto__ = switch__12167__auto__(state_25303);
if(cljs.core.keyword_identical_QMARK_(result__12170__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12170__auto__;
}
break;
}
}catch (e25324){if((e25324 instanceof Object)){
var ex__12171__auto__ = e25324;
var statearr_25325_25342 = state_25303;
(statearr_25325_25342[(5)] = ex__12171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25303);

return cljs.core.constant$keyword$127;
} else {
throw e25324;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12169__auto__,cljs.core.constant$keyword$127)){
var G__25343 = state_25303;
state_25303 = G__25343;
continue;
} else {
return ret_value__12169__auto__;
}
break;
}
});
state_machine__12168__auto__ = function(state_25303){
switch(arguments.length){
case 0:
return state_machine__12168__auto____0.call(this);
case 1:
return state_machine__12168__auto____1.call(this,state_25303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12168__auto____0;
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12168__auto____1;
return state_machine__12168__auto__;
})()
;})(switch__12167__auto__,c__12182__auto___25327))
})();
var state__12184__auto__ = (function (){var statearr_25326 = (function (){return (f__12183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12183__auto__.cljs$core$IFn$_invoke$arity$0() : f__12183__auto__.call(null));
})();
(statearr_25326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12182__auto___25327);

return statearr_25326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12184__auto__);
});})(c__12182__auto___25327))
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
return (function (p__25529){
var vec__25530 = p__25529;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25530,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25530,(1),null);
var job = vec__25530;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__12182__auto___25714 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12182__auto___25714,res,vec__25530,v,p,job,jobs,results){
return (function (){
var f__12183__auto__ = (function (){var switch__12167__auto__ = ((function (c__12182__auto___25714,res,vec__25530,v,p,job,jobs,results){
return (function (state_25535){
var state_val_25536 = (state_25535[(1)]);
if((state_val_25536 === (2))){
var inst_25532 = (state_25535[(2)]);
var inst_25533 = cljs.core.async.close_BANG_(res);
var state_25535__$1 = (function (){var statearr_25537 = state_25535;
(statearr_25537[(7)] = inst_25532);

return statearr_25537;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25535__$1,inst_25533);
} else {
if((state_val_25536 === (1))){
var state_25535__$1 = state_25535;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25535__$1,(2),res,v);
} else {
return null;
}
}
});})(c__12182__auto___25714,res,vec__25530,v,p,job,jobs,results))
;
return ((function (switch__12167__auto__,c__12182__auto___25714,res,vec__25530,v,p,job,jobs,results){
return (function() {
var state_machine__12168__auto__ = null;
var state_machine__12168__auto____0 = (function (){
var statearr_25541 = [null,null,null,null,null,null,null,null];
(statearr_25541[(0)] = state_machine__12168__auto__);

(statearr_25541[(1)] = (1));

return statearr_25541;
});
var state_machine__12168__auto____1 = (function (state_25535){
while(true){
var ret_value__12169__auto__ = (function (){try{while(true){
var result__12170__auto__ = switch__12167__auto__(state_25535);
if(cljs.core.keyword_identical_QMARK_(result__12170__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12170__auto__;
}
break;
}
}catch (e25542){if((e25542 instanceof Object)){
var ex__12171__auto__ = e25542;
var statearr_25543_25715 = state_25535;
(statearr_25543_25715[(5)] = ex__12171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25535);

return cljs.core.constant$keyword$127;
} else {
throw e25542;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12169__auto__,cljs.core.constant$keyword$127)){
var G__25716 = state_25535;
state_25535 = G__25716;
continue;
} else {
return ret_value__12169__auto__;
}
break;
}
});
state_machine__12168__auto__ = function(state_25535){
switch(arguments.length){
case 0:
return state_machine__12168__auto____0.call(this);
case 1:
return state_machine__12168__auto____1.call(this,state_25535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12168__auto____0;
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12168__auto____1;
return state_machine__12168__auto__;
})()
;})(switch__12167__auto__,c__12182__auto___25714,res,vec__25530,v,p,job,jobs,results))
})();
var state__12184__auto__ = (function (){var statearr_25544 = (function (){return (f__12183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12183__auto__.cljs$core$IFn$_invoke$arity$0() : f__12183__auto__.call(null));
})();
(statearr_25544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12182__auto___25714);

return statearr_25544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12184__auto__);
});})(c__12182__auto___25714,res,vec__25530,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25545){
var vec__25546 = p__25545;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25546,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25546,(1),null);
var job = vec__25546;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__25547_25717 = v;
var G__25548_25718 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__25547_25717,G__25548_25718) : xf.call(null,G__25547_25717,G__25548_25718));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4637__auto___25719 = n;
var __25720 = (0);
while(true){
if((__25720 < n__4637__auto___25719)){
var G__25549_25721 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25549_25721) {
case "async":
var c__12182__auto___25723 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__25720,c__12182__auto___25723,G__25549_25721,n__4637__auto___25719,jobs,results,process,async){
return (function (){
var f__12183__auto__ = (function (){var switch__12167__auto__ = ((function (__25720,c__12182__auto___25723,G__25549_25721,n__4637__auto___25719,jobs,results,process,async){
return (function (state_25562){
var state_val_25563 = (state_25562[(1)]);
if((state_val_25563 === (7))){
var inst_25558 = (state_25562[(2)]);
var state_25562__$1 = state_25562;
var statearr_25564_25724 = state_25562__$1;
(statearr_25564_25724[(2)] = inst_25558);

(statearr_25564_25724[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25563 === (6))){
var state_25562__$1 = state_25562;
var statearr_25565_25725 = state_25562__$1;
(statearr_25565_25725[(2)] = null);

(statearr_25565_25725[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25563 === (5))){
var state_25562__$1 = state_25562;
var statearr_25566_25726 = state_25562__$1;
(statearr_25566_25726[(2)] = null);

(statearr_25566_25726[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25563 === (4))){
var inst_25552 = (state_25562[(2)]);
var inst_25553 = async(inst_25552);
var state_25562__$1 = state_25562;
if(cljs.core.truth_(inst_25553)){
var statearr_25567_25727 = state_25562__$1;
(statearr_25567_25727[(1)] = (5));

} else {
var statearr_25568_25728 = state_25562__$1;
(statearr_25568_25728[(1)] = (6));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_25563 === (3))){
var inst_25560 = (state_25562[(2)]);
var state_25562__$1 = state_25562;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25562__$1,inst_25560);
} else {
if((state_val_25563 === (2))){
var state_25562__$1 = state_25562;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25562__$1,(4),jobs);
} else {
if((state_val_25563 === (1))){
var state_25562__$1 = state_25562;
var statearr_25569_25729 = state_25562__$1;
(statearr_25569_25729[(2)] = null);

(statearr_25569_25729[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
return null;
}
}
}
}
}
}
}
});})(__25720,c__12182__auto___25723,G__25549_25721,n__4637__auto___25719,jobs,results,process,async))
;
return ((function (__25720,switch__12167__auto__,c__12182__auto___25723,G__25549_25721,n__4637__auto___25719,jobs,results,process,async){
return (function() {
var state_machine__12168__auto__ = null;
var state_machine__12168__auto____0 = (function (){
var statearr_25573 = [null,null,null,null,null,null,null];
(statearr_25573[(0)] = state_machine__12168__auto__);

(statearr_25573[(1)] = (1));

return statearr_25573;
});
var state_machine__12168__auto____1 = (function (state_25562){
while(true){
var ret_value__12169__auto__ = (function (){try{while(true){
var result__12170__auto__ = switch__12167__auto__(state_25562);
if(cljs.core.keyword_identical_QMARK_(result__12170__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12170__auto__;
}
break;
}
}catch (e25574){if((e25574 instanceof Object)){
var ex__12171__auto__ = e25574;
var statearr_25575_25730 = state_25562;
(statearr_25575_25730[(5)] = ex__12171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25562);

return cljs.core.constant$keyword$127;
} else {
throw e25574;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12169__auto__,cljs.core.constant$keyword$127)){
var G__25731 = state_25562;
state_25562 = G__25731;
continue;
} else {
return ret_value__12169__auto__;
}
break;
}
});
state_machine__12168__auto__ = function(state_25562){
switch(arguments.length){
case 0:
return state_machine__12168__auto____0.call(this);
case 1:
return state_machine__12168__auto____1.call(this,state_25562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12168__auto____0;
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12168__auto____1;
return state_machine__12168__auto__;
})()
;})(__25720,switch__12167__auto__,c__12182__auto___25723,G__25549_25721,n__4637__auto___25719,jobs,results,process,async))
})();
var state__12184__auto__ = (function (){var statearr_25576 = (function (){return (f__12183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12183__auto__.cljs$core$IFn$_invoke$arity$0() : f__12183__auto__.call(null));
})();
(statearr_25576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12182__auto___25723);

return statearr_25576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12184__auto__);
});})(__25720,c__12182__auto___25723,G__25549_25721,n__4637__auto___25719,jobs,results,process,async))
);


break;
case "compute":
var c__12182__auto___25732 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__25720,c__12182__auto___25732,G__25549_25721,n__4637__auto___25719,jobs,results,process,async){
return (function (){
var f__12183__auto__ = (function (){var switch__12167__auto__ = ((function (__25720,c__12182__auto___25732,G__25549_25721,n__4637__auto___25719,jobs,results,process,async){
return (function (state_25589){
var state_val_25590 = (state_25589[(1)]);
if((state_val_25590 === (7))){
var inst_25585 = (state_25589[(2)]);
var state_25589__$1 = state_25589;
var statearr_25591_25733 = state_25589__$1;
(statearr_25591_25733[(2)] = inst_25585);

(statearr_25591_25733[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25590 === (6))){
var state_25589__$1 = state_25589;
var statearr_25592_25734 = state_25589__$1;
(statearr_25592_25734[(2)] = null);

(statearr_25592_25734[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25590 === (5))){
var state_25589__$1 = state_25589;
var statearr_25593_25735 = state_25589__$1;
(statearr_25593_25735[(2)] = null);

(statearr_25593_25735[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25590 === (4))){
var inst_25579 = (state_25589[(2)]);
var inst_25580 = process(inst_25579);
var state_25589__$1 = state_25589;
if(cljs.core.truth_(inst_25580)){
var statearr_25594_25736 = state_25589__$1;
(statearr_25594_25736[(1)] = (5));

} else {
var statearr_25595_25737 = state_25589__$1;
(statearr_25595_25737[(1)] = (6));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_25590 === (3))){
var inst_25587 = (state_25589[(2)]);
var state_25589__$1 = state_25589;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25589__$1,inst_25587);
} else {
if((state_val_25590 === (2))){
var state_25589__$1 = state_25589;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25589__$1,(4),jobs);
} else {
if((state_val_25590 === (1))){
var state_25589__$1 = state_25589;
var statearr_25596_25738 = state_25589__$1;
(statearr_25596_25738[(2)] = null);

(statearr_25596_25738[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
return null;
}
}
}
}
}
}
}
});})(__25720,c__12182__auto___25732,G__25549_25721,n__4637__auto___25719,jobs,results,process,async))
;
return ((function (__25720,switch__12167__auto__,c__12182__auto___25732,G__25549_25721,n__4637__auto___25719,jobs,results,process,async){
return (function() {
var state_machine__12168__auto__ = null;
var state_machine__12168__auto____0 = (function (){
var statearr_25600 = [null,null,null,null,null,null,null];
(statearr_25600[(0)] = state_machine__12168__auto__);

(statearr_25600[(1)] = (1));

return statearr_25600;
});
var state_machine__12168__auto____1 = (function (state_25589){
while(true){
var ret_value__12169__auto__ = (function (){try{while(true){
var result__12170__auto__ = switch__12167__auto__(state_25589);
if(cljs.core.keyword_identical_QMARK_(result__12170__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12170__auto__;
}
break;
}
}catch (e25601){if((e25601 instanceof Object)){
var ex__12171__auto__ = e25601;
var statearr_25602_25739 = state_25589;
(statearr_25602_25739[(5)] = ex__12171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25589);

return cljs.core.constant$keyword$127;
} else {
throw e25601;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12169__auto__,cljs.core.constant$keyword$127)){
var G__25740 = state_25589;
state_25589 = G__25740;
continue;
} else {
return ret_value__12169__auto__;
}
break;
}
});
state_machine__12168__auto__ = function(state_25589){
switch(arguments.length){
case 0:
return state_machine__12168__auto____0.call(this);
case 1:
return state_machine__12168__auto____1.call(this,state_25589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12168__auto____0;
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12168__auto____1;
return state_machine__12168__auto__;
})()
;})(__25720,switch__12167__auto__,c__12182__auto___25732,G__25549_25721,n__4637__auto___25719,jobs,results,process,async))
})();
var state__12184__auto__ = (function (){var statearr_25603 = (function (){return (f__12183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12183__auto__.cljs$core$IFn$_invoke$arity$0() : f__12183__auto__.call(null));
})();
(statearr_25603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12182__auto___25732);

return statearr_25603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12184__auto__);
});})(__25720,c__12182__auto___25732,G__25549_25721,n__4637__auto___25719,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25741 = (__25720 + (1));
__25720 = G__25741;
continue;
} else {
}
break;
}

var c__12182__auto___25742 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12182__auto___25742,jobs,results,process,async){
return (function (){
var f__12183__auto__ = (function (){var switch__12167__auto__ = ((function (c__12182__auto___25742,jobs,results,process,async){
return (function (state_25625){
var state_val_25626 = (state_25625[(1)]);
if((state_val_25626 === (9))){
var inst_25618 = (state_25625[(2)]);
var state_25625__$1 = (function (){var statearr_25627 = state_25625;
(statearr_25627[(7)] = inst_25618);

return statearr_25627;
})();
var statearr_25628_25743 = state_25625__$1;
(statearr_25628_25743[(2)] = null);

(statearr_25628_25743[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25626 === (8))){
var inst_25611 = (state_25625[(8)]);
var inst_25616 = (state_25625[(2)]);
var state_25625__$1 = (function (){var statearr_25629 = state_25625;
(statearr_25629[(9)] = inst_25616);

return statearr_25629;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25625__$1,(9),results,inst_25611);
} else {
if((state_val_25626 === (7))){
var inst_25621 = (state_25625[(2)]);
var state_25625__$1 = state_25625;
var statearr_25630_25744 = state_25625__$1;
(statearr_25630_25744[(2)] = inst_25621);

(statearr_25630_25744[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25626 === (6))){
var inst_25606 = (state_25625[(10)]);
var inst_25611 = (state_25625[(8)]);
var inst_25611__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_25612 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25613 = [inst_25606,inst_25611__$1];
var inst_25614 = (new cljs.core.PersistentVector(null,2,(5),inst_25612,inst_25613,null));
var state_25625__$1 = (function (){var statearr_25631 = state_25625;
(statearr_25631[(8)] = inst_25611__$1);

return statearr_25631;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25625__$1,(8),jobs,inst_25614);
} else {
if((state_val_25626 === (5))){
var inst_25609 = cljs.core.async.close_BANG_(jobs);
var state_25625__$1 = state_25625;
var statearr_25632_25745 = state_25625__$1;
(statearr_25632_25745[(2)] = inst_25609);

(statearr_25632_25745[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25626 === (4))){
var inst_25606 = (state_25625[(10)]);
var inst_25606__$1 = (state_25625[(2)]);
var inst_25607 = (inst_25606__$1 == null);
var state_25625__$1 = (function (){var statearr_25633 = state_25625;
(statearr_25633[(10)] = inst_25606__$1);

return statearr_25633;
})();
if(cljs.core.truth_(inst_25607)){
var statearr_25634_25746 = state_25625__$1;
(statearr_25634_25746[(1)] = (5));

} else {
var statearr_25635_25747 = state_25625__$1;
(statearr_25635_25747[(1)] = (6));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_25626 === (3))){
var inst_25623 = (state_25625[(2)]);
var state_25625__$1 = state_25625;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25625__$1,inst_25623);
} else {
if((state_val_25626 === (2))){
var state_25625__$1 = state_25625;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25625__$1,(4),from);
} else {
if((state_val_25626 === (1))){
var state_25625__$1 = state_25625;
var statearr_25636_25748 = state_25625__$1;
(statearr_25636_25748[(2)] = null);

(statearr_25636_25748[(1)] = (2));


return cljs.core.constant$keyword$127;
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
});})(c__12182__auto___25742,jobs,results,process,async))
;
return ((function (switch__12167__auto__,c__12182__auto___25742,jobs,results,process,async){
return (function() {
var state_machine__12168__auto__ = null;
var state_machine__12168__auto____0 = (function (){
var statearr_25640 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25640[(0)] = state_machine__12168__auto__);

(statearr_25640[(1)] = (1));

return statearr_25640;
});
var state_machine__12168__auto____1 = (function (state_25625){
while(true){
var ret_value__12169__auto__ = (function (){try{while(true){
var result__12170__auto__ = switch__12167__auto__(state_25625);
if(cljs.core.keyword_identical_QMARK_(result__12170__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12170__auto__;
}
break;
}
}catch (e25641){if((e25641 instanceof Object)){
var ex__12171__auto__ = e25641;
var statearr_25642_25749 = state_25625;
(statearr_25642_25749[(5)] = ex__12171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25625);

return cljs.core.constant$keyword$127;
} else {
throw e25641;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12169__auto__,cljs.core.constant$keyword$127)){
var G__25750 = state_25625;
state_25625 = G__25750;
continue;
} else {
return ret_value__12169__auto__;
}
break;
}
});
state_machine__12168__auto__ = function(state_25625){
switch(arguments.length){
case 0:
return state_machine__12168__auto____0.call(this);
case 1:
return state_machine__12168__auto____1.call(this,state_25625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12168__auto____0;
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12168__auto____1;
return state_machine__12168__auto__;
})()
;})(switch__12167__auto__,c__12182__auto___25742,jobs,results,process,async))
})();
var state__12184__auto__ = (function (){var statearr_25643 = (function (){return (f__12183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12183__auto__.cljs$core$IFn$_invoke$arity$0() : f__12183__auto__.call(null));
})();
(statearr_25643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12182__auto___25742);

return statearr_25643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12184__auto__);
});})(c__12182__auto___25742,jobs,results,process,async))
);


var c__12182__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12182__auto__,jobs,results,process,async){
return (function (){
var f__12183__auto__ = (function (){var switch__12167__auto__ = ((function (c__12182__auto__,jobs,results,process,async){
return (function (state_25681){
var state_val_25682 = (state_25681[(1)]);
if((state_val_25682 === (7))){
var inst_25677 = (state_25681[(2)]);
var state_25681__$1 = state_25681;
var statearr_25683_25751 = state_25681__$1;
(statearr_25683_25751[(2)] = inst_25677);

(statearr_25683_25751[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25682 === (20))){
var state_25681__$1 = state_25681;
var statearr_25684_25752 = state_25681__$1;
(statearr_25684_25752[(2)] = null);

(statearr_25684_25752[(1)] = (21));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25682 === (1))){
var state_25681__$1 = state_25681;
var statearr_25685_25753 = state_25681__$1;
(statearr_25685_25753[(2)] = null);

(statearr_25685_25753[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25682 === (4))){
var inst_25646 = (state_25681[(7)]);
var inst_25646__$1 = (state_25681[(2)]);
var inst_25647 = (inst_25646__$1 == null);
var state_25681__$1 = (function (){var statearr_25686 = state_25681;
(statearr_25686[(7)] = inst_25646__$1);

return statearr_25686;
})();
if(cljs.core.truth_(inst_25647)){
var statearr_25687_25754 = state_25681__$1;
(statearr_25687_25754[(1)] = (5));

} else {
var statearr_25688_25755 = state_25681__$1;
(statearr_25688_25755[(1)] = (6));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_25682 === (15))){
var inst_25659 = (state_25681[(8)]);
var state_25681__$1 = state_25681;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25681__$1,(18),to,inst_25659);
} else {
if((state_val_25682 === (21))){
var inst_25672 = (state_25681[(2)]);
var state_25681__$1 = state_25681;
var statearr_25689_25756 = state_25681__$1;
(statearr_25689_25756[(2)] = inst_25672);

(statearr_25689_25756[(1)] = (13));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25682 === (13))){
var inst_25674 = (state_25681[(2)]);
var state_25681__$1 = (function (){var statearr_25690 = state_25681;
(statearr_25690[(9)] = inst_25674);

return statearr_25690;
})();
var statearr_25691_25757 = state_25681__$1;
(statearr_25691_25757[(2)] = null);

(statearr_25691_25757[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25682 === (6))){
var inst_25646 = (state_25681[(7)]);
var state_25681__$1 = state_25681;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25681__$1,(11),inst_25646);
} else {
if((state_val_25682 === (17))){
var inst_25667 = (state_25681[(2)]);
var state_25681__$1 = state_25681;
if(cljs.core.truth_(inst_25667)){
var statearr_25692_25758 = state_25681__$1;
(statearr_25692_25758[(1)] = (19));

} else {
var statearr_25693_25759 = state_25681__$1;
(statearr_25693_25759[(1)] = (20));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_25682 === (3))){
var inst_25679 = (state_25681[(2)]);
var state_25681__$1 = state_25681;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25681__$1,inst_25679);
} else {
if((state_val_25682 === (12))){
var inst_25656 = (state_25681[(10)]);
var state_25681__$1 = state_25681;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25681__$1,(14),inst_25656);
} else {
if((state_val_25682 === (2))){
var state_25681__$1 = state_25681;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25681__$1,(4),results);
} else {
if((state_val_25682 === (19))){
var state_25681__$1 = state_25681;
var statearr_25694_25760 = state_25681__$1;
(statearr_25694_25760[(2)] = null);

(statearr_25694_25760[(1)] = (12));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25682 === (11))){
var inst_25656 = (state_25681[(2)]);
var state_25681__$1 = (function (){var statearr_25695 = state_25681;
(statearr_25695[(10)] = inst_25656);

return statearr_25695;
})();
var statearr_25696_25761 = state_25681__$1;
(statearr_25696_25761[(2)] = null);

(statearr_25696_25761[(1)] = (12));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25682 === (9))){
var state_25681__$1 = state_25681;
var statearr_25697_25762 = state_25681__$1;
(statearr_25697_25762[(2)] = null);

(statearr_25697_25762[(1)] = (10));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25682 === (5))){
var state_25681__$1 = state_25681;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25698_25763 = state_25681__$1;
(statearr_25698_25763[(1)] = (8));

} else {
var statearr_25699_25764 = state_25681__$1;
(statearr_25699_25764[(1)] = (9));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_25682 === (14))){
var inst_25661 = (state_25681[(11)]);
var inst_25659 = (state_25681[(8)]);
var inst_25659__$1 = (state_25681[(2)]);
var inst_25660 = (inst_25659__$1 == null);
var inst_25661__$1 = cljs.core.not(inst_25660);
var state_25681__$1 = (function (){var statearr_25700 = state_25681;
(statearr_25700[(11)] = inst_25661__$1);

(statearr_25700[(8)] = inst_25659__$1);

return statearr_25700;
})();
if(inst_25661__$1){
var statearr_25701_25765 = state_25681__$1;
(statearr_25701_25765[(1)] = (15));

} else {
var statearr_25702_25766 = state_25681__$1;
(statearr_25702_25766[(1)] = (16));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_25682 === (16))){
var inst_25661 = (state_25681[(11)]);
var state_25681__$1 = state_25681;
var statearr_25703_25767 = state_25681__$1;
(statearr_25703_25767[(2)] = inst_25661);

(statearr_25703_25767[(1)] = (17));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25682 === (10))){
var inst_25653 = (state_25681[(2)]);
var state_25681__$1 = state_25681;
var statearr_25704_25768 = state_25681__$1;
(statearr_25704_25768[(2)] = inst_25653);

(statearr_25704_25768[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25682 === (18))){
var inst_25664 = (state_25681[(2)]);
var state_25681__$1 = state_25681;
var statearr_25705_25769 = state_25681__$1;
(statearr_25705_25769[(2)] = inst_25664);

(statearr_25705_25769[(1)] = (17));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25682 === (8))){
var inst_25650 = cljs.core.async.close_BANG_(to);
var state_25681__$1 = state_25681;
var statearr_25706_25770 = state_25681__$1;
(statearr_25706_25770[(2)] = inst_25650);

(statearr_25706_25770[(1)] = (10));


return cljs.core.constant$keyword$127;
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
});})(c__12182__auto__,jobs,results,process,async))
;
return ((function (switch__12167__auto__,c__12182__auto__,jobs,results,process,async){
return (function() {
var state_machine__12168__auto__ = null;
var state_machine__12168__auto____0 = (function (){
var statearr_25710 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25710[(0)] = state_machine__12168__auto__);

(statearr_25710[(1)] = (1));

return statearr_25710;
});
var state_machine__12168__auto____1 = (function (state_25681){
while(true){
var ret_value__12169__auto__ = (function (){try{while(true){
var result__12170__auto__ = switch__12167__auto__(state_25681);
if(cljs.core.keyword_identical_QMARK_(result__12170__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12170__auto__;
}
break;
}
}catch (e25711){if((e25711 instanceof Object)){
var ex__12171__auto__ = e25711;
var statearr_25712_25771 = state_25681;
(statearr_25712_25771[(5)] = ex__12171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25681);

return cljs.core.constant$keyword$127;
} else {
throw e25711;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12169__auto__,cljs.core.constant$keyword$127)){
var G__25772 = state_25681;
state_25681 = G__25772;
continue;
} else {
return ret_value__12169__auto__;
}
break;
}
});
state_machine__12168__auto__ = function(state_25681){
switch(arguments.length){
case 0:
return state_machine__12168__auto____0.call(this);
case 1:
return state_machine__12168__auto____1.call(this,state_25681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12168__auto____0;
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12168__auto____1;
return state_machine__12168__auto__;
})()
;})(switch__12167__auto__,c__12182__auto__,jobs,results,process,async))
})();
var state__12184__auto__ = (function (){var statearr_25713 = (function (){return (f__12183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12183__auto__.cljs$core$IFn$_invoke$arity$0() : f__12183__auto__.call(null));
})();
(statearr_25713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12182__auto__);

return statearr_25713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12184__auto__);
});})(c__12182__auto__,jobs,results,process,async))
);

return c__12182__auto__;
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
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.constant$keyword$184);
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
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.constant$keyword$185);
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
var c__12182__auto___25895 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12182__auto___25895,tc,fc){
return (function (){
var f__12183__auto__ = (function (){var switch__12167__auto__ = ((function (c__12182__auto___25895,tc,fc){
return (function (state_25869){
var state_val_25870 = (state_25869[(1)]);
if((state_val_25870 === (7))){
var inst_25865 = (state_25869[(2)]);
var state_25869__$1 = state_25869;
var statearr_25871_25896 = state_25869__$1;
(statearr_25871_25896[(2)] = inst_25865);

(statearr_25871_25896[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25870 === (1))){
var state_25869__$1 = state_25869;
var statearr_25872_25897 = state_25869__$1;
(statearr_25872_25897[(2)] = null);

(statearr_25872_25897[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25870 === (4))){
var inst_25846 = (state_25869[(7)]);
var inst_25846__$1 = (state_25869[(2)]);
var inst_25847 = (inst_25846__$1 == null);
var state_25869__$1 = (function (){var statearr_25873 = state_25869;
(statearr_25873[(7)] = inst_25846__$1);

return statearr_25873;
})();
if(cljs.core.truth_(inst_25847)){
var statearr_25874_25898 = state_25869__$1;
(statearr_25874_25898[(1)] = (5));

} else {
var statearr_25875_25899 = state_25869__$1;
(statearr_25875_25899[(1)] = (6));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_25870 === (13))){
var state_25869__$1 = state_25869;
var statearr_25876_25900 = state_25869__$1;
(statearr_25876_25900[(2)] = null);

(statearr_25876_25900[(1)] = (14));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25870 === (6))){
var inst_25846 = (state_25869[(7)]);
var inst_25852 = (function (){var G__25877 = inst_25846;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__25877) : p.call(null,G__25877));
})();
var state_25869__$1 = state_25869;
if(cljs.core.truth_(inst_25852)){
var statearr_25878_25901 = state_25869__$1;
(statearr_25878_25901[(1)] = (9));

} else {
var statearr_25879_25902 = state_25869__$1;
(statearr_25879_25902[(1)] = (10));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_25870 === (3))){
var inst_25867 = (state_25869[(2)]);
var state_25869__$1 = state_25869;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25869__$1,inst_25867);
} else {
if((state_val_25870 === (12))){
var state_25869__$1 = state_25869;
var statearr_25880_25903 = state_25869__$1;
(statearr_25880_25903[(2)] = null);

(statearr_25880_25903[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25870 === (2))){
var state_25869__$1 = state_25869;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25869__$1,(4),ch);
} else {
if((state_val_25870 === (11))){
var inst_25846 = (state_25869[(7)]);
var inst_25856 = (state_25869[(2)]);
var state_25869__$1 = state_25869;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25869__$1,(8),inst_25856,inst_25846);
} else {
if((state_val_25870 === (9))){
var state_25869__$1 = state_25869;
var statearr_25881_25904 = state_25869__$1;
(statearr_25881_25904[(2)] = tc);

(statearr_25881_25904[(1)] = (11));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25870 === (5))){
var inst_25849 = cljs.core.async.close_BANG_(tc);
var inst_25850 = cljs.core.async.close_BANG_(fc);
var state_25869__$1 = (function (){var statearr_25882 = state_25869;
(statearr_25882[(8)] = inst_25849);

return statearr_25882;
})();
var statearr_25883_25905 = state_25869__$1;
(statearr_25883_25905[(2)] = inst_25850);

(statearr_25883_25905[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25870 === (14))){
var inst_25863 = (state_25869[(2)]);
var state_25869__$1 = state_25869;
var statearr_25884_25906 = state_25869__$1;
(statearr_25884_25906[(2)] = inst_25863);

(statearr_25884_25906[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25870 === (10))){
var state_25869__$1 = state_25869;
var statearr_25885_25907 = state_25869__$1;
(statearr_25885_25907[(2)] = fc);

(statearr_25885_25907[(1)] = (11));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25870 === (8))){
var inst_25858 = (state_25869[(2)]);
var state_25869__$1 = state_25869;
if(cljs.core.truth_(inst_25858)){
var statearr_25886_25908 = state_25869__$1;
(statearr_25886_25908[(1)] = (12));

} else {
var statearr_25887_25909 = state_25869__$1;
(statearr_25887_25909[(1)] = (13));

}

return cljs.core.constant$keyword$127;
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
});})(c__12182__auto___25895,tc,fc))
;
return ((function (switch__12167__auto__,c__12182__auto___25895,tc,fc){
return (function() {
var state_machine__12168__auto__ = null;
var state_machine__12168__auto____0 = (function (){
var statearr_25891 = [null,null,null,null,null,null,null,null,null];
(statearr_25891[(0)] = state_machine__12168__auto__);

(statearr_25891[(1)] = (1));

return statearr_25891;
});
var state_machine__12168__auto____1 = (function (state_25869){
while(true){
var ret_value__12169__auto__ = (function (){try{while(true){
var result__12170__auto__ = switch__12167__auto__(state_25869);
if(cljs.core.keyword_identical_QMARK_(result__12170__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12170__auto__;
}
break;
}
}catch (e25892){if((e25892 instanceof Object)){
var ex__12171__auto__ = e25892;
var statearr_25893_25910 = state_25869;
(statearr_25893_25910[(5)] = ex__12171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25869);

return cljs.core.constant$keyword$127;
} else {
throw e25892;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12169__auto__,cljs.core.constant$keyword$127)){
var G__25911 = state_25869;
state_25869 = G__25911;
continue;
} else {
return ret_value__12169__auto__;
}
break;
}
});
state_machine__12168__auto__ = function(state_25869){
switch(arguments.length){
case 0:
return state_machine__12168__auto____0.call(this);
case 1:
return state_machine__12168__auto____1.call(this,state_25869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12168__auto____0;
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12168__auto____1;
return state_machine__12168__auto__;
})()
;})(switch__12167__auto__,c__12182__auto___25895,tc,fc))
})();
var state__12184__auto__ = (function (){var statearr_25894 = (function (){return (f__12183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12183__auto__.cljs$core$IFn$_invoke$arity$0() : f__12183__auto__.call(null));
})();
(statearr_25894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12182__auto___25895);

return statearr_25894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12184__auto__);
});})(c__12182__auto___25895,tc,fc))
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
var c__12182__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12182__auto__){
return (function (){
var f__12183__auto__ = (function (){var switch__12167__auto__ = ((function (c__12182__auto__){
return (function (state_25960){
var state_val_25961 = (state_25960[(1)]);
if((state_val_25961 === (7))){
var inst_25956 = (state_25960[(2)]);
var state_25960__$1 = state_25960;
var statearr_25962_25980 = state_25960__$1;
(statearr_25962_25980[(2)] = inst_25956);

(statearr_25962_25980[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25961 === (6))){
var inst_25946 = (state_25960[(7)]);
var inst_25949 = (state_25960[(8)]);
var inst_25953 = (function (){var G__25963 = inst_25946;
var G__25964 = inst_25949;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25963,G__25964) : f.call(null,G__25963,G__25964));
})();
var inst_25946__$1 = inst_25953;
var state_25960__$1 = (function (){var statearr_25965 = state_25960;
(statearr_25965[(7)] = inst_25946__$1);

return statearr_25965;
})();
var statearr_25966_25981 = state_25960__$1;
(statearr_25966_25981[(2)] = null);

(statearr_25966_25981[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25961 === (5))){
var inst_25946 = (state_25960[(7)]);
var state_25960__$1 = state_25960;
var statearr_25967_25982 = state_25960__$1;
(statearr_25967_25982[(2)] = inst_25946);

(statearr_25967_25982[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25961 === (4))){
var inst_25949 = (state_25960[(8)]);
var inst_25949__$1 = (state_25960[(2)]);
var inst_25950 = (inst_25949__$1 == null);
var state_25960__$1 = (function (){var statearr_25968 = state_25960;
(statearr_25968[(8)] = inst_25949__$1);

return statearr_25968;
})();
if(cljs.core.truth_(inst_25950)){
var statearr_25969_25983 = state_25960__$1;
(statearr_25969_25983[(1)] = (5));

} else {
var statearr_25970_25984 = state_25960__$1;
(statearr_25970_25984[(1)] = (6));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_25961 === (3))){
var inst_25958 = (state_25960[(2)]);
var state_25960__$1 = state_25960;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25960__$1,inst_25958);
} else {
if((state_val_25961 === (2))){
var state_25960__$1 = state_25960;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25960__$1,(4),ch);
} else {
if((state_val_25961 === (1))){
var inst_25946 = init;
var state_25960__$1 = (function (){var statearr_25971 = state_25960;
(statearr_25971[(7)] = inst_25946);

return statearr_25971;
})();
var statearr_25972_25985 = state_25960__$1;
(statearr_25972_25985[(2)] = null);

(statearr_25972_25985[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
return null;
}
}
}
}
}
}
}
});})(c__12182__auto__))
;
return ((function (switch__12167__auto__,c__12182__auto__){
return (function() {
var state_machine__12168__auto__ = null;
var state_machine__12168__auto____0 = (function (){
var statearr_25976 = [null,null,null,null,null,null,null,null,null];
(statearr_25976[(0)] = state_machine__12168__auto__);

(statearr_25976[(1)] = (1));

return statearr_25976;
});
var state_machine__12168__auto____1 = (function (state_25960){
while(true){
var ret_value__12169__auto__ = (function (){try{while(true){
var result__12170__auto__ = switch__12167__auto__(state_25960);
if(cljs.core.keyword_identical_QMARK_(result__12170__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12170__auto__;
}
break;
}
}catch (e25977){if((e25977 instanceof Object)){
var ex__12171__auto__ = e25977;
var statearr_25978_25986 = state_25960;
(statearr_25978_25986[(5)] = ex__12171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25960);

return cljs.core.constant$keyword$127;
} else {
throw e25977;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12169__auto__,cljs.core.constant$keyword$127)){
var G__25987 = state_25960;
state_25960 = G__25987;
continue;
} else {
return ret_value__12169__auto__;
}
break;
}
});
state_machine__12168__auto__ = function(state_25960){
switch(arguments.length){
case 0:
return state_machine__12168__auto____0.call(this);
case 1:
return state_machine__12168__auto____1.call(this,state_25960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12168__auto____0;
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12168__auto____1;
return state_machine__12168__auto__;
})()
;})(switch__12167__auto__,c__12182__auto__))
})();
var state__12184__auto__ = (function (){var statearr_25979 = (function (){return (f__12183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12183__auto__.cljs$core$IFn$_invoke$arity$0() : f__12183__auto__.call(null));
})();
(statearr_25979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12182__auto__);

return statearr_25979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12184__auto__);
});})(c__12182__auto__))
);

return c__12182__auto__;
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
var c__12182__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12182__auto__){
return (function (){
var f__12183__auto__ = (function (){var switch__12167__auto__ = ((function (c__12182__auto__){
return (function (state_26064){
var state_val_26065 = (state_26064[(1)]);
if((state_val_26065 === (7))){
var inst_26046 = (state_26064[(2)]);
var state_26064__$1 = state_26064;
var statearr_26066_26089 = state_26064__$1;
(statearr_26066_26089[(2)] = inst_26046);

(statearr_26066_26089[(1)] = (6));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26065 === (1))){
var inst_26040 = cljs.core.seq(coll);
var inst_26041 = inst_26040;
var state_26064__$1 = (function (){var statearr_26067 = state_26064;
(statearr_26067[(7)] = inst_26041);

return statearr_26067;
})();
var statearr_26068_26090 = state_26064__$1;
(statearr_26068_26090[(2)] = null);

(statearr_26068_26090[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26065 === (4))){
var inst_26041 = (state_26064[(7)]);
var inst_26044 = cljs.core.first(inst_26041);
var state_26064__$1 = state_26064;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26064__$1,(7),ch,inst_26044);
} else {
if((state_val_26065 === (13))){
var inst_26058 = (state_26064[(2)]);
var state_26064__$1 = state_26064;
var statearr_26069_26091 = state_26064__$1;
(statearr_26069_26091[(2)] = inst_26058);

(statearr_26069_26091[(1)] = (10));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26065 === (6))){
var inst_26049 = (state_26064[(2)]);
var state_26064__$1 = state_26064;
if(cljs.core.truth_(inst_26049)){
var statearr_26070_26092 = state_26064__$1;
(statearr_26070_26092[(1)] = (8));

} else {
var statearr_26071_26093 = state_26064__$1;
(statearr_26071_26093[(1)] = (9));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_26065 === (3))){
var inst_26062 = (state_26064[(2)]);
var state_26064__$1 = state_26064;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26064__$1,inst_26062);
} else {
if((state_val_26065 === (12))){
var state_26064__$1 = state_26064;
var statearr_26072_26094 = state_26064__$1;
(statearr_26072_26094[(2)] = null);

(statearr_26072_26094[(1)] = (13));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26065 === (2))){
var inst_26041 = (state_26064[(7)]);
var state_26064__$1 = state_26064;
if(cljs.core.truth_(inst_26041)){
var statearr_26073_26095 = state_26064__$1;
(statearr_26073_26095[(1)] = (4));

} else {
var statearr_26074_26096 = state_26064__$1;
(statearr_26074_26096[(1)] = (5));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_26065 === (11))){
var inst_26055 = cljs.core.async.close_BANG_(ch);
var state_26064__$1 = state_26064;
var statearr_26075_26097 = state_26064__$1;
(statearr_26075_26097[(2)] = inst_26055);

(statearr_26075_26097[(1)] = (13));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26065 === (9))){
var state_26064__$1 = state_26064;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26076_26098 = state_26064__$1;
(statearr_26076_26098[(1)] = (11));

} else {
var statearr_26077_26099 = state_26064__$1;
(statearr_26077_26099[(1)] = (12));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_26065 === (5))){
var inst_26041 = (state_26064[(7)]);
var state_26064__$1 = state_26064;
var statearr_26078_26100 = state_26064__$1;
(statearr_26078_26100[(2)] = inst_26041);

(statearr_26078_26100[(1)] = (6));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26065 === (10))){
var inst_26060 = (state_26064[(2)]);
var state_26064__$1 = state_26064;
var statearr_26079_26101 = state_26064__$1;
(statearr_26079_26101[(2)] = inst_26060);

(statearr_26079_26101[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26065 === (8))){
var inst_26041 = (state_26064[(7)]);
var inst_26051 = cljs.core.next(inst_26041);
var inst_26041__$1 = inst_26051;
var state_26064__$1 = (function (){var statearr_26080 = state_26064;
(statearr_26080[(7)] = inst_26041__$1);

return statearr_26080;
})();
var statearr_26081_26102 = state_26064__$1;
(statearr_26081_26102[(2)] = null);

(statearr_26081_26102[(1)] = (2));


return cljs.core.constant$keyword$127;
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
});})(c__12182__auto__))
;
return ((function (switch__12167__auto__,c__12182__auto__){
return (function() {
var state_machine__12168__auto__ = null;
var state_machine__12168__auto____0 = (function (){
var statearr_26085 = [null,null,null,null,null,null,null,null];
(statearr_26085[(0)] = state_machine__12168__auto__);

(statearr_26085[(1)] = (1));

return statearr_26085;
});
var state_machine__12168__auto____1 = (function (state_26064){
while(true){
var ret_value__12169__auto__ = (function (){try{while(true){
var result__12170__auto__ = switch__12167__auto__(state_26064);
if(cljs.core.keyword_identical_QMARK_(result__12170__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12170__auto__;
}
break;
}
}catch (e26086){if((e26086 instanceof Object)){
var ex__12171__auto__ = e26086;
var statearr_26087_26103 = state_26064;
(statearr_26087_26103[(5)] = ex__12171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26064);

return cljs.core.constant$keyword$127;
} else {
throw e26086;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12169__auto__,cljs.core.constant$keyword$127)){
var G__26104 = state_26064;
state_26064 = G__26104;
continue;
} else {
return ret_value__12169__auto__;
}
break;
}
});
state_machine__12168__auto__ = function(state_26064){
switch(arguments.length){
case 0:
return state_machine__12168__auto____0.call(this);
case 1:
return state_machine__12168__auto____1.call(this,state_26064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12168__auto____0;
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12168__auto____1;
return state_machine__12168__auto__;
})()
;})(switch__12167__auto__,c__12182__auto__))
})();
var state__12184__auto__ = (function (){var statearr_26088 = (function (){return (f__12183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12183__auto__.cljs$core$IFn$_invoke$arity$0() : f__12183__auto__.call(null));
})();
(statearr_26088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12182__auto__);

return statearr_26088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12184__auto__);
});})(c__12182__auto__))
);

return c__12182__auto__;
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

cljs.core.async.Mux = (function (){var obj26106 = {};
return obj26106;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3738__auto__ = _;
if(and__3738__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3738__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4394__auto__ = (((_ == null))?null:_);
return (function (){var or__3750__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__26110 = x__4394__auto__;
return goog.typeOf(G__26110);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj26112 = {};
return obj26112;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3738__auto__ = m;
if(and__3738__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3738__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4394__auto__ = (((m == null))?null:m);
return (function (){var or__3750__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__26116 = x__4394__auto__;
return goog.typeOf(G__26116);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3738__auto__ = m;
if(and__3738__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3738__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4394__auto__ = (((m == null))?null:m);
return (function (){var or__3750__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__26120 = x__4394__auto__;
return goog.typeOf(G__26120);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3738__auto__ = m;
if(and__3738__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3738__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4394__auto__ = (((m == null))?null:m);
return (function (){var or__3750__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__26124 = x__4394__auto__;
return goog.typeOf(G__26124);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
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
var cs = (function (){var G__26354 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26354) : cljs.core.atom.call(null,G__26354));
})();
var m = (function (){
if(typeof cljs.core.async.t26355 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26355 = (function (cs,ch,mult,meta26356){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta26356 = meta26356;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26355.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t26355.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t26355.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t26355.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__26358_26583 = self__.cs;
var G__26359_26584 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26358_26583,G__26359_26584) : cljs.core.reset_BANG_.call(null,G__26358_26583,G__26359_26584));

return null;
});})(cs))
;

cljs.core.async.t26355.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26355.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t26355.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26357){
var self__ = this;
var _26357__$1 = this;
return self__.meta26356;
});})(cs))
;

cljs.core.async.t26355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26357,meta26356__$1){
var self__ = this;
var _26357__$1 = this;
return (new cljs.core.async.t26355(self__.cs,self__.ch,self__.mult,meta26356__$1));
});})(cs))
;

cljs.core.async.t26355.cljs$lang$type = true;

cljs.core.async.t26355.cljs$lang$ctorStr = "cljs.core.async/t26355";

cljs.core.async.t26355.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4337__auto__,writer__4338__auto__,opt__4339__auto__){
return cljs.core._write(writer__4338__auto__,"cljs.core.async/t26355");
});})(cs))
;

cljs.core.async.__GT_t26355 = ((function (cs){
return (function __GT_t26355(cs__$1,ch__$1,mult__$1,meta26356){
return (new cljs.core.async.t26355(cs__$1,ch__$1,mult__$1,meta26356));
});})(cs))
;

}

return (new cljs.core.async.t26355(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,397,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,390,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__26360 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26360) : cljs.core.atom.call(null,G__26360));
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
var c__12182__auto___26585 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12182__auto___26585,cs,m,dchan,dctr,done){
return (function (){
var f__12183__auto__ = (function (){var switch__12167__auto__ = ((function (c__12182__auto___26585,cs,m,dchan,dctr,done){
return (function (state_26491){
var state_val_26492 = (state_26491[(1)]);
if((state_val_26492 === (7))){
var inst_26487 = (state_26491[(2)]);
var state_26491__$1 = state_26491;
var statearr_26493_26586 = state_26491__$1;
(statearr_26493_26586[(2)] = inst_26487);

(statearr_26493_26586[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (20))){
var inst_26392 = (state_26491[(7)]);
var inst_26402 = cljs.core.first(inst_26392);
var inst_26403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26402,(0),null);
var inst_26404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26402,(1),null);
var state_26491__$1 = (function (){var statearr_26494 = state_26491;
(statearr_26494[(8)] = inst_26403);

return statearr_26494;
})();
if(cljs.core.truth_(inst_26404)){
var statearr_26495_26587 = state_26491__$1;
(statearr_26495_26587[(1)] = (22));

} else {
var statearr_26496_26588 = state_26491__$1;
(statearr_26496_26588[(1)] = (23));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (27))){
var inst_26432 = (state_26491[(9)]);
var inst_26434 = (state_26491[(10)]);
var inst_26363 = (state_26491[(11)]);
var inst_26439 = (state_26491[(12)]);
var inst_26439__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26432,inst_26434);
var inst_26440 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_26439__$1,inst_26363,done);
var state_26491__$1 = (function (){var statearr_26497 = state_26491;
(statearr_26497[(12)] = inst_26439__$1);

return statearr_26497;
})();
if(cljs.core.truth_(inst_26440)){
var statearr_26498_26589 = state_26491__$1;
(statearr_26498_26589[(1)] = (30));

} else {
var statearr_26499_26590 = state_26491__$1;
(statearr_26499_26590[(1)] = (31));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (1))){
var state_26491__$1 = state_26491;
var statearr_26500_26591 = state_26491__$1;
(statearr_26500_26591[(2)] = null);

(statearr_26500_26591[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (24))){
var inst_26392 = (state_26491[(7)]);
var inst_26409 = (state_26491[(2)]);
var inst_26410 = cljs.core.next(inst_26392);
var inst_26372 = inst_26410;
var inst_26373 = null;
var inst_26374 = (0);
var inst_26375 = (0);
var state_26491__$1 = (function (){var statearr_26501 = state_26491;
(statearr_26501[(13)] = inst_26373);

(statearr_26501[(14)] = inst_26374);

(statearr_26501[(15)] = inst_26409);

(statearr_26501[(16)] = inst_26372);

(statearr_26501[(17)] = inst_26375);

return statearr_26501;
})();
var statearr_26502_26592 = state_26491__$1;
(statearr_26502_26592[(2)] = null);

(statearr_26502_26592[(1)] = (8));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (39))){
var state_26491__$1 = state_26491;
var statearr_26506_26593 = state_26491__$1;
(statearr_26506_26593[(2)] = null);

(statearr_26506_26593[(1)] = (41));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (4))){
var inst_26363 = (state_26491[(11)]);
var inst_26363__$1 = (state_26491[(2)]);
var inst_26364 = (inst_26363__$1 == null);
var state_26491__$1 = (function (){var statearr_26507 = state_26491;
(statearr_26507[(11)] = inst_26363__$1);

return statearr_26507;
})();
if(cljs.core.truth_(inst_26364)){
var statearr_26508_26594 = state_26491__$1;
(statearr_26508_26594[(1)] = (5));

} else {
var statearr_26509_26595 = state_26491__$1;
(statearr_26509_26595[(1)] = (6));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (15))){
var inst_26373 = (state_26491[(13)]);
var inst_26374 = (state_26491[(14)]);
var inst_26372 = (state_26491[(16)]);
var inst_26375 = (state_26491[(17)]);
var inst_26388 = (state_26491[(2)]);
var inst_26389 = (inst_26375 + (1));
var tmp26503 = inst_26373;
var tmp26504 = inst_26374;
var tmp26505 = inst_26372;
var inst_26372__$1 = tmp26505;
var inst_26373__$1 = tmp26503;
var inst_26374__$1 = tmp26504;
var inst_26375__$1 = inst_26389;
var state_26491__$1 = (function (){var statearr_26510 = state_26491;
(statearr_26510[(13)] = inst_26373__$1);

(statearr_26510[(14)] = inst_26374__$1);

(statearr_26510[(18)] = inst_26388);

(statearr_26510[(16)] = inst_26372__$1);

(statearr_26510[(17)] = inst_26375__$1);

return statearr_26510;
})();
var statearr_26511_26596 = state_26491__$1;
(statearr_26511_26596[(2)] = null);

(statearr_26511_26596[(1)] = (8));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (21))){
var inst_26413 = (state_26491[(2)]);
var state_26491__$1 = state_26491;
var statearr_26515_26597 = state_26491__$1;
(statearr_26515_26597[(2)] = inst_26413);

(statearr_26515_26597[(1)] = (18));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (31))){
var inst_26439 = (state_26491[(12)]);
var inst_26443 = done(null);
var inst_26444 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_26439);
var state_26491__$1 = (function (){var statearr_26516 = state_26491;
(statearr_26516[(19)] = inst_26443);

return statearr_26516;
})();
var statearr_26517_26598 = state_26491__$1;
(statearr_26517_26598[(2)] = inst_26444);

(statearr_26517_26598[(1)] = (32));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (32))){
var inst_26433 = (state_26491[(20)]);
var inst_26432 = (state_26491[(9)]);
var inst_26434 = (state_26491[(10)]);
var inst_26431 = (state_26491[(21)]);
var inst_26446 = (state_26491[(2)]);
var inst_26447 = (inst_26434 + (1));
var tmp26512 = inst_26433;
var tmp26513 = inst_26432;
var tmp26514 = inst_26431;
var inst_26431__$1 = tmp26514;
var inst_26432__$1 = tmp26513;
var inst_26433__$1 = tmp26512;
var inst_26434__$1 = inst_26447;
var state_26491__$1 = (function (){var statearr_26518 = state_26491;
(statearr_26518[(20)] = inst_26433__$1);

(statearr_26518[(9)] = inst_26432__$1);

(statearr_26518[(10)] = inst_26434__$1);

(statearr_26518[(21)] = inst_26431__$1);

(statearr_26518[(22)] = inst_26446);

return statearr_26518;
})();
var statearr_26519_26599 = state_26491__$1;
(statearr_26519_26599[(2)] = null);

(statearr_26519_26599[(1)] = (25));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (40))){
var inst_26459 = (state_26491[(23)]);
var inst_26463 = done(null);
var inst_26464 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_26459);
var state_26491__$1 = (function (){var statearr_26520 = state_26491;
(statearr_26520[(24)] = inst_26463);

return statearr_26520;
})();
var statearr_26521_26600 = state_26491__$1;
(statearr_26521_26600[(2)] = inst_26464);

(statearr_26521_26600[(1)] = (41));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (33))){
var inst_26450 = (state_26491[(25)]);
var inst_26452 = cljs.core.chunked_seq_QMARK_(inst_26450);
var state_26491__$1 = state_26491;
if(inst_26452){
var statearr_26522_26601 = state_26491__$1;
(statearr_26522_26601[(1)] = (36));

} else {
var statearr_26523_26602 = state_26491__$1;
(statearr_26523_26602[(1)] = (37));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (13))){
var inst_26382 = (state_26491[(26)]);
var inst_26385 = cljs.core.async.close_BANG_(inst_26382);
var state_26491__$1 = state_26491;
var statearr_26524_26603 = state_26491__$1;
(statearr_26524_26603[(2)] = inst_26385);

(statearr_26524_26603[(1)] = (15));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (22))){
var inst_26403 = (state_26491[(8)]);
var inst_26406 = cljs.core.async.close_BANG_(inst_26403);
var state_26491__$1 = state_26491;
var statearr_26525_26604 = state_26491__$1;
(statearr_26525_26604[(2)] = inst_26406);

(statearr_26525_26604[(1)] = (24));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (36))){
var inst_26450 = (state_26491[(25)]);
var inst_26454 = cljs.core.chunk_first(inst_26450);
var inst_26455 = cljs.core.chunk_rest(inst_26450);
var inst_26456 = cljs.core.count(inst_26454);
var inst_26431 = inst_26455;
var inst_26432 = inst_26454;
var inst_26433 = inst_26456;
var inst_26434 = (0);
var state_26491__$1 = (function (){var statearr_26526 = state_26491;
(statearr_26526[(20)] = inst_26433);

(statearr_26526[(9)] = inst_26432);

(statearr_26526[(10)] = inst_26434);

(statearr_26526[(21)] = inst_26431);

return statearr_26526;
})();
var statearr_26527_26605 = state_26491__$1;
(statearr_26527_26605[(2)] = null);

(statearr_26527_26605[(1)] = (25));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (41))){
var inst_26450 = (state_26491[(25)]);
var inst_26466 = (state_26491[(2)]);
var inst_26467 = cljs.core.next(inst_26450);
var inst_26431 = inst_26467;
var inst_26432 = null;
var inst_26433 = (0);
var inst_26434 = (0);
var state_26491__$1 = (function (){var statearr_26528 = state_26491;
(statearr_26528[(27)] = inst_26466);

(statearr_26528[(20)] = inst_26433);

(statearr_26528[(9)] = inst_26432);

(statearr_26528[(10)] = inst_26434);

(statearr_26528[(21)] = inst_26431);

return statearr_26528;
})();
var statearr_26529_26606 = state_26491__$1;
(statearr_26529_26606[(2)] = null);

(statearr_26529_26606[(1)] = (25));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (43))){
var state_26491__$1 = state_26491;
var statearr_26530_26607 = state_26491__$1;
(statearr_26530_26607[(2)] = null);

(statearr_26530_26607[(1)] = (44));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (29))){
var inst_26475 = (state_26491[(2)]);
var state_26491__$1 = state_26491;
var statearr_26531_26608 = state_26491__$1;
(statearr_26531_26608[(2)] = inst_26475);

(statearr_26531_26608[(1)] = (26));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (44))){
var inst_26484 = (state_26491[(2)]);
var state_26491__$1 = (function (){var statearr_26532 = state_26491;
(statearr_26532[(28)] = inst_26484);

return statearr_26532;
})();
var statearr_26533_26609 = state_26491__$1;
(statearr_26533_26609[(2)] = null);

(statearr_26533_26609[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (6))){
var inst_26423 = (state_26491[(29)]);
var inst_26422 = (function (){var G__26534 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26534) : cljs.core.deref.call(null,G__26534));
})();
var inst_26423__$1 = cljs.core.keys(inst_26422);
var inst_26424 = cljs.core.count(inst_26423__$1);
var inst_26425 = (function (){var G__26535 = dctr;
var G__26536 = inst_26424;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26535,G__26536) : cljs.core.reset_BANG_.call(null,G__26535,G__26536));
})();
var inst_26430 = cljs.core.seq(inst_26423__$1);
var inst_26431 = inst_26430;
var inst_26432 = null;
var inst_26433 = (0);
var inst_26434 = (0);
var state_26491__$1 = (function (){var statearr_26537 = state_26491;
(statearr_26537[(29)] = inst_26423__$1);

(statearr_26537[(20)] = inst_26433);

(statearr_26537[(9)] = inst_26432);

(statearr_26537[(10)] = inst_26434);

(statearr_26537[(30)] = inst_26425);

(statearr_26537[(21)] = inst_26431);

return statearr_26537;
})();
var statearr_26538_26610 = state_26491__$1;
(statearr_26538_26610[(2)] = null);

(statearr_26538_26610[(1)] = (25));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (28))){
var inst_26450 = (state_26491[(25)]);
var inst_26431 = (state_26491[(21)]);
var inst_26450__$1 = cljs.core.seq(inst_26431);
var state_26491__$1 = (function (){var statearr_26539 = state_26491;
(statearr_26539[(25)] = inst_26450__$1);

return statearr_26539;
})();
if(inst_26450__$1){
var statearr_26540_26611 = state_26491__$1;
(statearr_26540_26611[(1)] = (33));

} else {
var statearr_26541_26612 = state_26491__$1;
(statearr_26541_26612[(1)] = (34));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (25))){
var inst_26433 = (state_26491[(20)]);
var inst_26434 = (state_26491[(10)]);
var inst_26436 = (inst_26434 < inst_26433);
var inst_26437 = inst_26436;
var state_26491__$1 = state_26491;
if(cljs.core.truth_(inst_26437)){
var statearr_26542_26613 = state_26491__$1;
(statearr_26542_26613[(1)] = (27));

} else {
var statearr_26543_26614 = state_26491__$1;
(statearr_26543_26614[(1)] = (28));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (34))){
var state_26491__$1 = state_26491;
var statearr_26544_26615 = state_26491__$1;
(statearr_26544_26615[(2)] = null);

(statearr_26544_26615[(1)] = (35));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (17))){
var state_26491__$1 = state_26491;
var statearr_26545_26616 = state_26491__$1;
(statearr_26545_26616[(2)] = null);

(statearr_26545_26616[(1)] = (18));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (3))){
var inst_26489 = (state_26491[(2)]);
var state_26491__$1 = state_26491;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26491__$1,inst_26489);
} else {
if((state_val_26492 === (12))){
var inst_26418 = (state_26491[(2)]);
var state_26491__$1 = state_26491;
var statearr_26546_26617 = state_26491__$1;
(statearr_26546_26617[(2)] = inst_26418);

(statearr_26546_26617[(1)] = (9));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (2))){
var state_26491__$1 = state_26491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26491__$1,(4),ch);
} else {
if((state_val_26492 === (23))){
var state_26491__$1 = state_26491;
var statearr_26547_26618 = state_26491__$1;
(statearr_26547_26618[(2)] = null);

(statearr_26547_26618[(1)] = (24));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (35))){
var inst_26473 = (state_26491[(2)]);
var state_26491__$1 = state_26491;
var statearr_26548_26619 = state_26491__$1;
(statearr_26548_26619[(2)] = inst_26473);

(statearr_26548_26619[(1)] = (29));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (19))){
var inst_26392 = (state_26491[(7)]);
var inst_26396 = cljs.core.chunk_first(inst_26392);
var inst_26397 = cljs.core.chunk_rest(inst_26392);
var inst_26398 = cljs.core.count(inst_26396);
var inst_26372 = inst_26397;
var inst_26373 = inst_26396;
var inst_26374 = inst_26398;
var inst_26375 = (0);
var state_26491__$1 = (function (){var statearr_26549 = state_26491;
(statearr_26549[(13)] = inst_26373);

(statearr_26549[(14)] = inst_26374);

(statearr_26549[(16)] = inst_26372);

(statearr_26549[(17)] = inst_26375);

return statearr_26549;
})();
var statearr_26550_26620 = state_26491__$1;
(statearr_26550_26620[(2)] = null);

(statearr_26550_26620[(1)] = (8));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (11))){
var inst_26372 = (state_26491[(16)]);
var inst_26392 = (state_26491[(7)]);
var inst_26392__$1 = cljs.core.seq(inst_26372);
var state_26491__$1 = (function (){var statearr_26551 = state_26491;
(statearr_26551[(7)] = inst_26392__$1);

return statearr_26551;
})();
if(inst_26392__$1){
var statearr_26552_26621 = state_26491__$1;
(statearr_26552_26621[(1)] = (16));

} else {
var statearr_26553_26622 = state_26491__$1;
(statearr_26553_26622[(1)] = (17));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (9))){
var inst_26420 = (state_26491[(2)]);
var state_26491__$1 = state_26491;
var statearr_26554_26623 = state_26491__$1;
(statearr_26554_26623[(2)] = inst_26420);

(statearr_26554_26623[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (5))){
var inst_26370 = (function (){var G__26555 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26555) : cljs.core.deref.call(null,G__26555));
})();
var inst_26371 = cljs.core.seq(inst_26370);
var inst_26372 = inst_26371;
var inst_26373 = null;
var inst_26374 = (0);
var inst_26375 = (0);
var state_26491__$1 = (function (){var statearr_26556 = state_26491;
(statearr_26556[(13)] = inst_26373);

(statearr_26556[(14)] = inst_26374);

(statearr_26556[(16)] = inst_26372);

(statearr_26556[(17)] = inst_26375);

return statearr_26556;
})();
var statearr_26557_26624 = state_26491__$1;
(statearr_26557_26624[(2)] = null);

(statearr_26557_26624[(1)] = (8));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (14))){
var state_26491__$1 = state_26491;
var statearr_26558_26625 = state_26491__$1;
(statearr_26558_26625[(2)] = null);

(statearr_26558_26625[(1)] = (15));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (45))){
var inst_26481 = (state_26491[(2)]);
var state_26491__$1 = state_26491;
var statearr_26559_26626 = state_26491__$1;
(statearr_26559_26626[(2)] = inst_26481);

(statearr_26559_26626[(1)] = (44));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (26))){
var inst_26423 = (state_26491[(29)]);
var inst_26477 = (state_26491[(2)]);
var inst_26478 = cljs.core.seq(inst_26423);
var state_26491__$1 = (function (){var statearr_26560 = state_26491;
(statearr_26560[(31)] = inst_26477);

return statearr_26560;
})();
if(inst_26478){
var statearr_26561_26627 = state_26491__$1;
(statearr_26561_26627[(1)] = (42));

} else {
var statearr_26562_26628 = state_26491__$1;
(statearr_26562_26628[(1)] = (43));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (16))){
var inst_26392 = (state_26491[(7)]);
var inst_26394 = cljs.core.chunked_seq_QMARK_(inst_26392);
var state_26491__$1 = state_26491;
if(inst_26394){
var statearr_26563_26629 = state_26491__$1;
(statearr_26563_26629[(1)] = (19));

} else {
var statearr_26564_26630 = state_26491__$1;
(statearr_26564_26630[(1)] = (20));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (38))){
var inst_26470 = (state_26491[(2)]);
var state_26491__$1 = state_26491;
var statearr_26565_26631 = state_26491__$1;
(statearr_26565_26631[(2)] = inst_26470);

(statearr_26565_26631[(1)] = (35));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (30))){
var state_26491__$1 = state_26491;
var statearr_26566_26632 = state_26491__$1;
(statearr_26566_26632[(2)] = null);

(statearr_26566_26632[(1)] = (32));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (10))){
var inst_26373 = (state_26491[(13)]);
var inst_26375 = (state_26491[(17)]);
var inst_26381 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26373,inst_26375);
var inst_26382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26381,(0),null);
var inst_26383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26381,(1),null);
var state_26491__$1 = (function (){var statearr_26567 = state_26491;
(statearr_26567[(26)] = inst_26382);

return statearr_26567;
})();
if(cljs.core.truth_(inst_26383)){
var statearr_26568_26633 = state_26491__$1;
(statearr_26568_26633[(1)] = (13));

} else {
var statearr_26569_26634 = state_26491__$1;
(statearr_26569_26634[(1)] = (14));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (18))){
var inst_26416 = (state_26491[(2)]);
var state_26491__$1 = state_26491;
var statearr_26570_26635 = state_26491__$1;
(statearr_26570_26635[(2)] = inst_26416);

(statearr_26570_26635[(1)] = (12));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (42))){
var state_26491__$1 = state_26491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26491__$1,(45),dchan);
} else {
if((state_val_26492 === (37))){
var inst_26450 = (state_26491[(25)]);
var inst_26459 = (state_26491[(23)]);
var inst_26363 = (state_26491[(11)]);
var inst_26459__$1 = cljs.core.first(inst_26450);
var inst_26460 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_26459__$1,inst_26363,done);
var state_26491__$1 = (function (){var statearr_26571 = state_26491;
(statearr_26571[(23)] = inst_26459__$1);

return statearr_26571;
})();
if(cljs.core.truth_(inst_26460)){
var statearr_26572_26636 = state_26491__$1;
(statearr_26572_26636[(1)] = (39));

} else {
var statearr_26573_26637 = state_26491__$1;
(statearr_26573_26637[(1)] = (40));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_26492 === (8))){
var inst_26374 = (state_26491[(14)]);
var inst_26375 = (state_26491[(17)]);
var inst_26377 = (inst_26375 < inst_26374);
var inst_26378 = inst_26377;
var state_26491__$1 = state_26491;
if(cljs.core.truth_(inst_26378)){
var statearr_26574_26638 = state_26491__$1;
(statearr_26574_26638[(1)] = (10));

} else {
var statearr_26575_26639 = state_26491__$1;
(statearr_26575_26639[(1)] = (11));

}

return cljs.core.constant$keyword$127;
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
});})(c__12182__auto___26585,cs,m,dchan,dctr,done))
;
return ((function (switch__12167__auto__,c__12182__auto___26585,cs,m,dchan,dctr,done){
return (function() {
var state_machine__12168__auto__ = null;
var state_machine__12168__auto____0 = (function (){
var statearr_26579 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26579[(0)] = state_machine__12168__auto__);

(statearr_26579[(1)] = (1));

return statearr_26579;
});
var state_machine__12168__auto____1 = (function (state_26491){
while(true){
var ret_value__12169__auto__ = (function (){try{while(true){
var result__12170__auto__ = switch__12167__auto__(state_26491);
if(cljs.core.keyword_identical_QMARK_(result__12170__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12170__auto__;
}
break;
}
}catch (e26580){if((e26580 instanceof Object)){
var ex__12171__auto__ = e26580;
var statearr_26581_26640 = state_26491;
(statearr_26581_26640[(5)] = ex__12171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26491);

return cljs.core.constant$keyword$127;
} else {
throw e26580;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12169__auto__,cljs.core.constant$keyword$127)){
var G__26641 = state_26491;
state_26491 = G__26641;
continue;
} else {
return ret_value__12169__auto__;
}
break;
}
});
state_machine__12168__auto__ = function(state_26491){
switch(arguments.length){
case 0:
return state_machine__12168__auto____0.call(this);
case 1:
return state_machine__12168__auto____1.call(this,state_26491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12168__auto____0;
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12168__auto____1;
return state_machine__12168__auto__;
})()
;})(switch__12167__auto__,c__12182__auto___26585,cs,m,dchan,dctr,done))
})();
var state__12184__auto__ = (function (){var statearr_26582 = (function (){return (f__12183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12183__auto__.cljs$core$IFn$_invoke$arity$0() : f__12183__auto__.call(null));
})();
(statearr_26582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12182__auto___26585);

return statearr_26582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12184__auto__);
});})(c__12182__auto___26585,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj26646 = {};
return obj26646;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3738__auto__ = m;
if(and__3738__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3738__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4394__auto__ = (((m == null))?null:m);
return (function (){var or__3750__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__26650 = x__4394__auto__;
return goog.typeOf(G__26650);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3738__auto__ = m;
if(and__3738__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3738__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4394__auto__ = (((m == null))?null:m);
return (function (){var or__3750__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__26654 = x__4394__auto__;
return goog.typeOf(G__26654);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3738__auto__ = m;
if(and__3738__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3738__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4394__auto__ = (((m == null))?null:m);
return (function (){var or__3750__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__26658 = x__4394__auto__;
return goog.typeOf(G__26658);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3738__auto__ = m;
if(and__3738__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3738__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4394__auto__ = (((m == null))?null:m);
return (function (){var or__3750__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__26662 = x__4394__auto__;
return goog.typeOf(G__26662);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3738__auto__ = m;
if(and__3738__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3738__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4394__auto__ = (((m == null))?null:m);
return (function (){var or__3750__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__26666 = x__4394__auto__;
return goog.typeOf(G__26666);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__26667){
var map__26673 = p__26667;
var map__26673__$1 = ((cljs.core.seq_QMARK_(map__26673))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26673):map__26673);
var opts = map__26673__$1;
var statearr_26674_26678 = state;
(statearr_26674_26678[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__26673,map__26673__$1,opts){
return (function (val){
var statearr_26675_26679 = state;
(statearr_26675_26679[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__26673,map__26673__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_26676_26680 = state;
(statearr_26676_26680[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__26677 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26677) : cljs.core.deref.call(null,G__26677));
})());


return cljs.core.constant$keyword$127;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__26667 = null;
if (arguments.length > 3) {
var G__26681__i = 0, G__26681__a = new Array(arguments.length -  3);
while (G__26681__i < G__26681__a.length) {G__26681__a[G__26681__i] = arguments[G__26681__i + 3]; ++G__26681__i;}
  p__26667 = new cljs.core.IndexedSeq(G__26681__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__26667);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__26682){
var state = cljs.core.first(arglist__26682);
arglist__26682 = cljs.core.next(arglist__26682);
var cont_block = cljs.core.first(arglist__26682);
arglist__26682 = cljs.core.next(arglist__26682);
var ports = cljs.core.first(arglist__26682);
var p__26667 = cljs.core.rest(arglist__26682);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__26667);
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
var cs = (function (){var G__26816 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26816) : cljs.core.atom.call(null,G__26816));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$186,null,cljs.core.constant$keyword$187,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$188);
var solo_mode = (function (){var G__26817 = cljs.core.constant$keyword$187;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26817) : cljs.core.atom.call(null,G__26817));
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
if(cljs.core.truth_((function (){var G__26818 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__26818) : attr.call(null,G__26818));
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
var chs = (function (){var G__26819 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26819) : cljs.core.deref.call(null,G__26819));
})();
var mode = (function (){var G__26820 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26820) : cljs.core.deref.call(null,G__26820));
})();
var solos = pick(cljs.core.constant$keyword$188,chs);
var pauses = pick(cljs.core.constant$keyword$186,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$189,solos,cljs.core.constant$keyword$190,pick(cljs.core.constant$keyword$187,chs),cljs.core.constant$keyword$191,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$186)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t26821 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26821 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26822){
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
this.meta26822 = meta26822;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26821.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t26821.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26821.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26821.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__26824_26949 = self__.cs;
var G__26825_26950 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26824_26949,G__26825_26950) : cljs.core.reset_BANG_.call(null,G__26824_26949,G__26825_26950));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26821.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26821.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__26826 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__26826) : self__.solo_modes.call(null,G__26826));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__26827_26951 = self__.solo_mode;
var G__26828_26952 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26827_26951,G__26828_26952) : cljs.core.reset_BANG_.call(null,G__26827_26951,G__26828_26952));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26821.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26821.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26821.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26823){
var self__ = this;
var _26823__$1 = this;
return self__.meta26822;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26823,meta26822__$1){
var self__ = this;
var _26823__$1 = this;
return (new cljs.core.async.t26821(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26822__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26821.cljs$lang$type = true;

cljs.core.async.t26821.cljs$lang$ctorStr = "cljs.core.async/t26821";

cljs.core.async.t26821.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4337__auto__,writer__4338__auto__,opt__4339__auto__){
return cljs.core._write(writer__4338__auto__,"cljs.core.async/t26821");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t26821 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t26821(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26822){
return (new cljs.core.async.t26821(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26822));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t26821(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,25,cljs.core.constant$keyword$9,510,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,499,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
;
var c__12182__auto___26953 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12182__auto___26953,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__12183__auto__ = (function (){var switch__12167__auto__ = ((function (c__12182__auto___26953,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26900){
var state_val_26901 = (state_26900[(1)]);
if((state_val_26901 === (7))){
var inst_26842 = (state_26900[(7)]);
var inst_26847 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_26842);
var state_26900__$1 = state_26900;
var statearr_26902_26954 = state_26900__$1;
(statearr_26902_26954[(2)] = inst_26847);

(statearr_26902_26954[(1)] = (9));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26901 === (20))){
var inst_26857 = (state_26900[(8)]);
var state_26900__$1 = state_26900;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26900__$1,(23),out,inst_26857);
} else {
if((state_val_26901 === (1))){
var inst_26832 = (state_26900[(9)]);
var inst_26832__$1 = calc_state();
var inst_26833 = cljs.core.seq_QMARK_(inst_26832__$1);
var state_26900__$1 = (function (){var statearr_26903 = state_26900;
(statearr_26903[(9)] = inst_26832__$1);

return statearr_26903;
})();
if(inst_26833){
var statearr_26904_26955 = state_26900__$1;
(statearr_26904_26955[(1)] = (2));

} else {
var statearr_26905_26956 = state_26900__$1;
(statearr_26905_26956[(1)] = (3));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_26901 === (24))){
var inst_26850 = (state_26900[(10)]);
var inst_26842 = inst_26850;
var state_26900__$1 = (function (){var statearr_26906 = state_26900;
(statearr_26906[(7)] = inst_26842);

return statearr_26906;
})();
var statearr_26907_26957 = state_26900__$1;
(statearr_26907_26957[(2)] = null);

(statearr_26907_26957[(1)] = (5));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26901 === (4))){
var inst_26832 = (state_26900[(9)]);
var inst_26838 = (state_26900[(2)]);
var inst_26839 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26838,cljs.core.constant$keyword$191);
var inst_26840 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26838,cljs.core.constant$keyword$190);
var inst_26841 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26838,cljs.core.constant$keyword$189);
var inst_26842 = inst_26832;
var state_26900__$1 = (function (){var statearr_26908 = state_26900;
(statearr_26908[(7)] = inst_26842);

(statearr_26908[(11)] = inst_26841);

(statearr_26908[(12)] = inst_26839);

(statearr_26908[(13)] = inst_26840);

return statearr_26908;
})();
var statearr_26909_26958 = state_26900__$1;
(statearr_26909_26958[(2)] = null);

(statearr_26909_26958[(1)] = (5));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26901 === (15))){
var state_26900__$1 = state_26900;
var statearr_26910_26959 = state_26900__$1;
(statearr_26910_26959[(2)] = null);

(statearr_26910_26959[(1)] = (16));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26901 === (21))){
var inst_26850 = (state_26900[(10)]);
var inst_26842 = inst_26850;
var state_26900__$1 = (function (){var statearr_26911 = state_26900;
(statearr_26911[(7)] = inst_26842);

return statearr_26911;
})();
var statearr_26912_26960 = state_26900__$1;
(statearr_26912_26960[(2)] = null);

(statearr_26912_26960[(1)] = (5));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26901 === (13))){
var inst_26896 = (state_26900[(2)]);
var state_26900__$1 = state_26900;
var statearr_26913_26961 = state_26900__$1;
(statearr_26913_26961[(2)] = inst_26896);

(statearr_26913_26961[(1)] = (6));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26901 === (22))){
var inst_26894 = (state_26900[(2)]);
var state_26900__$1 = state_26900;
var statearr_26914_26962 = state_26900__$1;
(statearr_26914_26962[(2)] = inst_26894);

(statearr_26914_26962[(1)] = (13));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26901 === (6))){
var inst_26898 = (state_26900[(2)]);
var state_26900__$1 = state_26900;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26900__$1,inst_26898);
} else {
if((state_val_26901 === (25))){
var state_26900__$1 = state_26900;
var statearr_26915_26963 = state_26900__$1;
(statearr_26915_26963[(2)] = null);

(statearr_26915_26963[(1)] = (26));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26901 === (17))){
var inst_26873 = (state_26900[(14)]);
var state_26900__$1 = state_26900;
var statearr_26916_26964 = state_26900__$1;
(statearr_26916_26964[(2)] = inst_26873);

(statearr_26916_26964[(1)] = (19));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26901 === (3))){
var inst_26832 = (state_26900[(9)]);
var state_26900__$1 = state_26900;
var statearr_26917_26965 = state_26900__$1;
(statearr_26917_26965[(2)] = inst_26832);

(statearr_26917_26965[(1)] = (4));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26901 === (12))){
var inst_26853 = (state_26900[(15)]);
var inst_26873 = (state_26900[(14)]);
var inst_26858 = (state_26900[(16)]);
var inst_26873__$1 = (function (){var G__26918 = inst_26858;
return (inst_26853.cljs$core$IFn$_invoke$arity$1 ? inst_26853.cljs$core$IFn$_invoke$arity$1(G__26918) : inst_26853.call(null,G__26918));
})();
var state_26900__$1 = (function (){var statearr_26919 = state_26900;
(statearr_26919[(14)] = inst_26873__$1);

return statearr_26919;
})();
if(cljs.core.truth_(inst_26873__$1)){
var statearr_26920_26966 = state_26900__$1;
(statearr_26920_26966[(1)] = (17));

} else {
var statearr_26921_26967 = state_26900__$1;
(statearr_26921_26967[(1)] = (18));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_26901 === (2))){
var inst_26832 = (state_26900[(9)]);
var inst_26835 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_26832);
var state_26900__$1 = state_26900;
var statearr_26922_26968 = state_26900__$1;
(statearr_26922_26968[(2)] = inst_26835);

(statearr_26922_26968[(1)] = (4));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26901 === (23))){
var inst_26885 = (state_26900[(2)]);
var state_26900__$1 = state_26900;
if(cljs.core.truth_(inst_26885)){
var statearr_26923_26969 = state_26900__$1;
(statearr_26923_26969[(1)] = (24));

} else {
var statearr_26924_26970 = state_26900__$1;
(statearr_26924_26970[(1)] = (25));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_26901 === (19))){
var inst_26882 = (state_26900[(2)]);
var state_26900__$1 = state_26900;
if(cljs.core.truth_(inst_26882)){
var statearr_26925_26971 = state_26900__$1;
(statearr_26925_26971[(1)] = (20));

} else {
var statearr_26926_26972 = state_26900__$1;
(statearr_26926_26972[(1)] = (21));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_26901 === (11))){
var inst_26857 = (state_26900[(8)]);
var inst_26863 = (inst_26857 == null);
var state_26900__$1 = state_26900;
if(cljs.core.truth_(inst_26863)){
var statearr_26927_26973 = state_26900__$1;
(statearr_26927_26973[(1)] = (14));

} else {
var statearr_26928_26974 = state_26900__$1;
(statearr_26928_26974[(1)] = (15));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_26901 === (9))){
var inst_26850 = (state_26900[(10)]);
var inst_26850__$1 = (state_26900[(2)]);
var inst_26851 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26850__$1,cljs.core.constant$keyword$191);
var inst_26852 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26850__$1,cljs.core.constant$keyword$190);
var inst_26853 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26850__$1,cljs.core.constant$keyword$189);
var state_26900__$1 = (function (){var statearr_26929 = state_26900;
(statearr_26929[(15)] = inst_26853);

(statearr_26929[(10)] = inst_26850__$1);

(statearr_26929[(17)] = inst_26852);

return statearr_26929;
})();
return cljs.core.async.ioc_alts_BANG_(state_26900__$1,(10),inst_26851);
} else {
if((state_val_26901 === (5))){
var inst_26842 = (state_26900[(7)]);
var inst_26845 = cljs.core.seq_QMARK_(inst_26842);
var state_26900__$1 = state_26900;
if(inst_26845){
var statearr_26930_26975 = state_26900__$1;
(statearr_26930_26975[(1)] = (7));

} else {
var statearr_26931_26976 = state_26900__$1;
(statearr_26931_26976[(1)] = (8));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_26901 === (14))){
var inst_26858 = (state_26900[(16)]);
var inst_26865 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_26858);
var state_26900__$1 = state_26900;
var statearr_26932_26977 = state_26900__$1;
(statearr_26932_26977[(2)] = inst_26865);

(statearr_26932_26977[(1)] = (16));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26901 === (26))){
var inst_26890 = (state_26900[(2)]);
var state_26900__$1 = state_26900;
var statearr_26933_26978 = state_26900__$1;
(statearr_26933_26978[(2)] = inst_26890);

(statearr_26933_26978[(1)] = (22));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26901 === (16))){
var inst_26868 = (state_26900[(2)]);
var inst_26869 = calc_state();
var inst_26842 = inst_26869;
var state_26900__$1 = (function (){var statearr_26934 = state_26900;
(statearr_26934[(18)] = inst_26868);

(statearr_26934[(7)] = inst_26842);

return statearr_26934;
})();
var statearr_26935_26979 = state_26900__$1;
(statearr_26935_26979[(2)] = null);

(statearr_26935_26979[(1)] = (5));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26901 === (10))){
var inst_26858 = (state_26900[(16)]);
var inst_26857 = (state_26900[(8)]);
var inst_26856 = (state_26900[(2)]);
var inst_26857__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26856,(0),null);
var inst_26858__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26856,(1),null);
var inst_26859 = (inst_26857__$1 == null);
var inst_26860 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26858__$1,change);
var inst_26861 = (inst_26859) || (inst_26860);
var state_26900__$1 = (function (){var statearr_26936 = state_26900;
(statearr_26936[(16)] = inst_26858__$1);

(statearr_26936[(8)] = inst_26857__$1);

return statearr_26936;
})();
if(cljs.core.truth_(inst_26861)){
var statearr_26937_26980 = state_26900__$1;
(statearr_26937_26980[(1)] = (11));

} else {
var statearr_26938_26981 = state_26900__$1;
(statearr_26938_26981[(1)] = (12));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_26901 === (18))){
var inst_26853 = (state_26900[(15)]);
var inst_26858 = (state_26900[(16)]);
var inst_26852 = (state_26900[(17)]);
var inst_26877 = cljs.core.empty_QMARK_(inst_26853);
var inst_26878 = (function (){var G__26939 = inst_26858;
return (inst_26852.cljs$core$IFn$_invoke$arity$1 ? inst_26852.cljs$core$IFn$_invoke$arity$1(G__26939) : inst_26852.call(null,G__26939));
})();
var inst_26879 = cljs.core.not(inst_26878);
var inst_26880 = (inst_26877) && (inst_26879);
var state_26900__$1 = state_26900;
var statearr_26940_26982 = state_26900__$1;
(statearr_26940_26982[(2)] = inst_26880);

(statearr_26940_26982[(1)] = (19));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26901 === (8))){
var inst_26842 = (state_26900[(7)]);
var state_26900__$1 = state_26900;
var statearr_26941_26983 = state_26900__$1;
(statearr_26941_26983[(2)] = inst_26842);

(statearr_26941_26983[(1)] = (9));


return cljs.core.constant$keyword$127;
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
});})(c__12182__auto___26953,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__12167__auto__,c__12182__auto___26953,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__12168__auto__ = null;
var state_machine__12168__auto____0 = (function (){
var statearr_26945 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26945[(0)] = state_machine__12168__auto__);

(statearr_26945[(1)] = (1));

return statearr_26945;
});
var state_machine__12168__auto____1 = (function (state_26900){
while(true){
var ret_value__12169__auto__ = (function (){try{while(true){
var result__12170__auto__ = switch__12167__auto__(state_26900);
if(cljs.core.keyword_identical_QMARK_(result__12170__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12170__auto__;
}
break;
}
}catch (e26946){if((e26946 instanceof Object)){
var ex__12171__auto__ = e26946;
var statearr_26947_26984 = state_26900;
(statearr_26947_26984[(5)] = ex__12171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26900);

return cljs.core.constant$keyword$127;
} else {
throw e26946;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12169__auto__,cljs.core.constant$keyword$127)){
var G__26985 = state_26900;
state_26900 = G__26985;
continue;
} else {
return ret_value__12169__auto__;
}
break;
}
});
state_machine__12168__auto__ = function(state_26900){
switch(arguments.length){
case 0:
return state_machine__12168__auto____0.call(this);
case 1:
return state_machine__12168__auto____1.call(this,state_26900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12168__auto____0;
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12168__auto____1;
return state_machine__12168__auto__;
})()
;})(switch__12167__auto__,c__12182__auto___26953,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__12184__auto__ = (function (){var statearr_26948 = (function (){return (f__12183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12183__auto__.cljs$core$IFn$_invoke$arity$0() : f__12183__auto__.call(null));
})();
(statearr_26948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12182__auto___26953);

return statearr_26948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12184__auto__);
});})(c__12182__auto___26953,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj26987 = {};
return obj26987;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3738__auto__ = p;
if(and__3738__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3738__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4394__auto__ = (((p == null))?null:p);
return (function (){var or__3750__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__26991 = x__4394__auto__;
return goog.typeOf(G__26991);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3738__auto__ = p;
if(and__3738__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3738__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4394__auto__ = (((p == null))?null:p);
return (function (){var or__3750__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__26995 = x__4394__auto__;
return goog.typeOf(G__26995);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
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
if((function (){var and__3738__auto__ = p;
if(and__3738__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3738__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4394__auto__ = (((p == null))?null:p);
return (function (){var or__3750__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__27001 = x__4394__auto__;
return goog.typeOf(G__27001);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3738__auto__ = p;
if(and__3738__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3738__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4394__auto__ = (((p == null))?null:p);
return (function (){var or__3750__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__27003 = x__4394__auto__;
return goog.typeOf(G__27003);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
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
var mults = (function (){var G__27142 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27142) : cljs.core.atom.call(null,G__27142));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__3750__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__27144 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27144) : cljs.core.deref.call(null,G__27144));
})(),topic);
if(cljs.core.truth_(or__3750__auto__)){
return or__3750__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3750__auto__,mults){
return (function (p1__27004_SHARP_){
if(cljs.core.truth_((function (){var G__27145 = topic;
return (p1__27004_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27004_SHARP_.cljs$core$IFn$_invoke$arity$1(G__27145) : p1__27004_SHARP_.call(null,G__27145));
})())){
return p1__27004_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__27004_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__27146 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__27146) : buf_fn.call(null,G__27146));
})())));
}
});})(or__3750__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t27147 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27147 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta27148){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta27148 = meta27148;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27147.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t27147.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__27150 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__27150) : self__.ensure_mult.call(null,G__27150));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t27147.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__27151 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27151) : cljs.core.deref.call(null,G__27151));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t27147.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__27152 = self__.mults;
var G__27153 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__27152,G__27153) : cljs.core.reset_BANG_.call(null,G__27152,G__27153));
});})(mults,ensure_mult))
;

cljs.core.async.t27147.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t27147.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27147.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t27147.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27149){
var self__ = this;
var _27149__$1 = this;
return self__.meta27148;
});})(mults,ensure_mult))
;

cljs.core.async.t27147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27149,meta27148__$1){
var self__ = this;
var _27149__$1 = this;
return (new cljs.core.async.t27147(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta27148__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t27147.cljs$lang$type = true;

cljs.core.async.t27147.cljs$lang$ctorStr = "cljs.core.async/t27147";

cljs.core.async.t27147.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4337__auto__,writer__4338__auto__,opt__4339__auto__){
return cljs.core._write(writer__4338__auto__,"cljs.core.async/t27147");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t27147 = ((function (mults,ensure_mult){
return (function __GT_t27147(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27148){
return (new cljs.core.async.t27147(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27148));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t27147(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,65,cljs.core.constant$keyword$9,603,cljs.core.constant$keyword$10,14,cljs.core.constant$keyword$11,591,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
;
var c__12182__auto___27276 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12182__auto___27276,mults,ensure_mult,p){
return (function (){
var f__12183__auto__ = (function (){var switch__12167__auto__ = ((function (c__12182__auto___27276,mults,ensure_mult,p){
return (function (state_27225){
var state_val_27226 = (state_27225[(1)]);
if((state_val_27226 === (7))){
var inst_27221 = (state_27225[(2)]);
var state_27225__$1 = state_27225;
var statearr_27227_27277 = state_27225__$1;
(statearr_27227_27277[(2)] = inst_27221);

(statearr_27227_27277[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27226 === (20))){
var state_27225__$1 = state_27225;
var statearr_27228_27278 = state_27225__$1;
(statearr_27228_27278[(2)] = null);

(statearr_27228_27278[(1)] = (21));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27226 === (1))){
var state_27225__$1 = state_27225;
var statearr_27229_27279 = state_27225__$1;
(statearr_27229_27279[(2)] = null);

(statearr_27229_27279[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27226 === (24))){
var inst_27204 = (state_27225[(7)]);
var inst_27213 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_27204);
var state_27225__$1 = state_27225;
var statearr_27230_27280 = state_27225__$1;
(statearr_27230_27280[(2)] = inst_27213);

(statearr_27230_27280[(1)] = (25));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27226 === (4))){
var inst_27156 = (state_27225[(8)]);
var inst_27156__$1 = (state_27225[(2)]);
var inst_27157 = (inst_27156__$1 == null);
var state_27225__$1 = (function (){var statearr_27231 = state_27225;
(statearr_27231[(8)] = inst_27156__$1);

return statearr_27231;
})();
if(cljs.core.truth_(inst_27157)){
var statearr_27232_27281 = state_27225__$1;
(statearr_27232_27281[(1)] = (5));

} else {
var statearr_27233_27282 = state_27225__$1;
(statearr_27233_27282[(1)] = (6));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_27226 === (15))){
var inst_27198 = (state_27225[(2)]);
var state_27225__$1 = state_27225;
var statearr_27234_27283 = state_27225__$1;
(statearr_27234_27283[(2)] = inst_27198);

(statearr_27234_27283[(1)] = (12));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27226 === (21))){
var inst_27218 = (state_27225[(2)]);
var state_27225__$1 = (function (){var statearr_27235 = state_27225;
(statearr_27235[(9)] = inst_27218);

return statearr_27235;
})();
var statearr_27236_27284 = state_27225__$1;
(statearr_27236_27284[(2)] = null);

(statearr_27236_27284[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27226 === (13))){
var inst_27180 = (state_27225[(10)]);
var inst_27182 = cljs.core.chunked_seq_QMARK_(inst_27180);
var state_27225__$1 = state_27225;
if(inst_27182){
var statearr_27237_27285 = state_27225__$1;
(statearr_27237_27285[(1)] = (16));

} else {
var statearr_27238_27286 = state_27225__$1;
(statearr_27238_27286[(1)] = (17));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_27226 === (22))){
var inst_27210 = (state_27225[(2)]);
var state_27225__$1 = state_27225;
if(cljs.core.truth_(inst_27210)){
var statearr_27239_27287 = state_27225__$1;
(statearr_27239_27287[(1)] = (23));

} else {
var statearr_27240_27288 = state_27225__$1;
(statearr_27240_27288[(1)] = (24));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_27226 === (6))){
var inst_27204 = (state_27225[(7)]);
var inst_27206 = (state_27225[(11)]);
var inst_27156 = (state_27225[(8)]);
var inst_27204__$1 = (function (){var G__27241 = inst_27156;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__27241) : topic_fn.call(null,G__27241));
})();
var inst_27205 = (function (){var G__27242 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27242) : cljs.core.deref.call(null,G__27242));
})();
var inst_27206__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27205,inst_27204__$1);
var state_27225__$1 = (function (){var statearr_27243 = state_27225;
(statearr_27243[(7)] = inst_27204__$1);

(statearr_27243[(11)] = inst_27206__$1);

return statearr_27243;
})();
if(cljs.core.truth_(inst_27206__$1)){
var statearr_27244_27289 = state_27225__$1;
(statearr_27244_27289[(1)] = (19));

} else {
var statearr_27245_27290 = state_27225__$1;
(statearr_27245_27290[(1)] = (20));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_27226 === (25))){
var inst_27215 = (state_27225[(2)]);
var state_27225__$1 = state_27225;
var statearr_27246_27291 = state_27225__$1;
(statearr_27246_27291[(2)] = inst_27215);

(statearr_27246_27291[(1)] = (21));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27226 === (17))){
var inst_27180 = (state_27225[(10)]);
var inst_27189 = cljs.core.first(inst_27180);
var inst_27190 = cljs.core.async.muxch_STAR_(inst_27189);
var inst_27191 = cljs.core.async.close_BANG_(inst_27190);
var inst_27192 = cljs.core.next(inst_27180);
var inst_27166 = inst_27192;
var inst_27167 = null;
var inst_27168 = (0);
var inst_27169 = (0);
var state_27225__$1 = (function (){var statearr_27247 = state_27225;
(statearr_27247[(12)] = inst_27167);

(statearr_27247[(13)] = inst_27191);

(statearr_27247[(14)] = inst_27168);

(statearr_27247[(15)] = inst_27169);

(statearr_27247[(16)] = inst_27166);

return statearr_27247;
})();
var statearr_27248_27292 = state_27225__$1;
(statearr_27248_27292[(2)] = null);

(statearr_27248_27292[(1)] = (8));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27226 === (3))){
var inst_27223 = (state_27225[(2)]);
var state_27225__$1 = state_27225;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27225__$1,inst_27223);
} else {
if((state_val_27226 === (12))){
var inst_27200 = (state_27225[(2)]);
var state_27225__$1 = state_27225;
var statearr_27249_27293 = state_27225__$1;
(statearr_27249_27293[(2)] = inst_27200);

(statearr_27249_27293[(1)] = (9));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27226 === (2))){
var state_27225__$1 = state_27225;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27225__$1,(4),ch);
} else {
if((state_val_27226 === (23))){
var state_27225__$1 = state_27225;
var statearr_27250_27294 = state_27225__$1;
(statearr_27250_27294[(2)] = null);

(statearr_27250_27294[(1)] = (25));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27226 === (19))){
var inst_27206 = (state_27225[(11)]);
var inst_27156 = (state_27225[(8)]);
var inst_27208 = cljs.core.async.muxch_STAR_(inst_27206);
var state_27225__$1 = state_27225;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27225__$1,(22),inst_27208,inst_27156);
} else {
if((state_val_27226 === (11))){
var inst_27180 = (state_27225[(10)]);
var inst_27166 = (state_27225[(16)]);
var inst_27180__$1 = cljs.core.seq(inst_27166);
var state_27225__$1 = (function (){var statearr_27251 = state_27225;
(statearr_27251[(10)] = inst_27180__$1);

return statearr_27251;
})();
if(inst_27180__$1){
var statearr_27252_27295 = state_27225__$1;
(statearr_27252_27295[(1)] = (13));

} else {
var statearr_27253_27296 = state_27225__$1;
(statearr_27253_27296[(1)] = (14));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_27226 === (9))){
var inst_27202 = (state_27225[(2)]);
var state_27225__$1 = state_27225;
var statearr_27254_27297 = state_27225__$1;
(statearr_27254_27297[(2)] = inst_27202);

(statearr_27254_27297[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27226 === (5))){
var inst_27163 = (function (){var G__27255 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27255) : cljs.core.deref.call(null,G__27255));
})();
var inst_27164 = cljs.core.vals(inst_27163);
var inst_27165 = cljs.core.seq(inst_27164);
var inst_27166 = inst_27165;
var inst_27167 = null;
var inst_27168 = (0);
var inst_27169 = (0);
var state_27225__$1 = (function (){var statearr_27256 = state_27225;
(statearr_27256[(12)] = inst_27167);

(statearr_27256[(14)] = inst_27168);

(statearr_27256[(15)] = inst_27169);

(statearr_27256[(16)] = inst_27166);

return statearr_27256;
})();
var statearr_27257_27298 = state_27225__$1;
(statearr_27257_27298[(2)] = null);

(statearr_27257_27298[(1)] = (8));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27226 === (14))){
var state_27225__$1 = state_27225;
var statearr_27261_27299 = state_27225__$1;
(statearr_27261_27299[(2)] = null);

(statearr_27261_27299[(1)] = (15));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27226 === (16))){
var inst_27180 = (state_27225[(10)]);
var inst_27184 = cljs.core.chunk_first(inst_27180);
var inst_27185 = cljs.core.chunk_rest(inst_27180);
var inst_27186 = cljs.core.count(inst_27184);
var inst_27166 = inst_27185;
var inst_27167 = inst_27184;
var inst_27168 = inst_27186;
var inst_27169 = (0);
var state_27225__$1 = (function (){var statearr_27262 = state_27225;
(statearr_27262[(12)] = inst_27167);

(statearr_27262[(14)] = inst_27168);

(statearr_27262[(15)] = inst_27169);

(statearr_27262[(16)] = inst_27166);

return statearr_27262;
})();
var statearr_27263_27300 = state_27225__$1;
(statearr_27263_27300[(2)] = null);

(statearr_27263_27300[(1)] = (8));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27226 === (10))){
var inst_27167 = (state_27225[(12)]);
var inst_27168 = (state_27225[(14)]);
var inst_27169 = (state_27225[(15)]);
var inst_27166 = (state_27225[(16)]);
var inst_27174 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_27167,inst_27169);
var inst_27175 = cljs.core.async.muxch_STAR_(inst_27174);
var inst_27176 = cljs.core.async.close_BANG_(inst_27175);
var inst_27177 = (inst_27169 + (1));
var tmp27258 = inst_27167;
var tmp27259 = inst_27168;
var tmp27260 = inst_27166;
var inst_27166__$1 = tmp27260;
var inst_27167__$1 = tmp27258;
var inst_27168__$1 = tmp27259;
var inst_27169__$1 = inst_27177;
var state_27225__$1 = (function (){var statearr_27264 = state_27225;
(statearr_27264[(12)] = inst_27167__$1);

(statearr_27264[(14)] = inst_27168__$1);

(statearr_27264[(15)] = inst_27169__$1);

(statearr_27264[(16)] = inst_27166__$1);

(statearr_27264[(17)] = inst_27176);

return statearr_27264;
})();
var statearr_27265_27301 = state_27225__$1;
(statearr_27265_27301[(2)] = null);

(statearr_27265_27301[(1)] = (8));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27226 === (18))){
var inst_27195 = (state_27225[(2)]);
var state_27225__$1 = state_27225;
var statearr_27266_27302 = state_27225__$1;
(statearr_27266_27302[(2)] = inst_27195);

(statearr_27266_27302[(1)] = (15));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27226 === (8))){
var inst_27168 = (state_27225[(14)]);
var inst_27169 = (state_27225[(15)]);
var inst_27171 = (inst_27169 < inst_27168);
var inst_27172 = inst_27171;
var state_27225__$1 = state_27225;
if(cljs.core.truth_(inst_27172)){
var statearr_27267_27303 = state_27225__$1;
(statearr_27267_27303[(1)] = (10));

} else {
var statearr_27268_27304 = state_27225__$1;
(statearr_27268_27304[(1)] = (11));

}

return cljs.core.constant$keyword$127;
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
});})(c__12182__auto___27276,mults,ensure_mult,p))
;
return ((function (switch__12167__auto__,c__12182__auto___27276,mults,ensure_mult,p){
return (function() {
var state_machine__12168__auto__ = null;
var state_machine__12168__auto____0 = (function (){
var statearr_27272 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27272[(0)] = state_machine__12168__auto__);

(statearr_27272[(1)] = (1));

return statearr_27272;
});
var state_machine__12168__auto____1 = (function (state_27225){
while(true){
var ret_value__12169__auto__ = (function (){try{while(true){
var result__12170__auto__ = switch__12167__auto__(state_27225);
if(cljs.core.keyword_identical_QMARK_(result__12170__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12170__auto__;
}
break;
}
}catch (e27273){if((e27273 instanceof Object)){
var ex__12171__auto__ = e27273;
var statearr_27274_27305 = state_27225;
(statearr_27274_27305[(5)] = ex__12171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27225);

return cljs.core.constant$keyword$127;
} else {
throw e27273;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12169__auto__,cljs.core.constant$keyword$127)){
var G__27306 = state_27225;
state_27225 = G__27306;
continue;
} else {
return ret_value__12169__auto__;
}
break;
}
});
state_machine__12168__auto__ = function(state_27225){
switch(arguments.length){
case 0:
return state_machine__12168__auto____0.call(this);
case 1:
return state_machine__12168__auto____1.call(this,state_27225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12168__auto____0;
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12168__auto____1;
return state_machine__12168__auto__;
})()
;})(switch__12167__auto__,c__12182__auto___27276,mults,ensure_mult,p))
})();
var state__12184__auto__ = (function (){var statearr_27275 = (function (){return (f__12183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12183__auto__.cljs$core$IFn$_invoke$arity$0() : f__12183__auto__.call(null));
})();
(statearr_27275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12182__auto___27276);

return statearr_27275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12184__auto__);
});})(c__12182__auto___27276,mults,ensure_mult,p))
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
var dctr = (function (){var G__27387 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27387) : cljs.core.atom.call(null,G__27387));
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
var c__12182__auto___27460 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12182__auto___27460,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__12183__auto__ = (function (){var switch__12167__auto__ = ((function (c__12182__auto___27460,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27426){
var state_val_27427 = (state_27426[(1)]);
if((state_val_27427 === (7))){
var state_27426__$1 = state_27426;
var statearr_27428_27461 = state_27426__$1;
(statearr_27428_27461[(2)] = null);

(statearr_27428_27461[(1)] = (8));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27427 === (1))){
var state_27426__$1 = state_27426;
var statearr_27429_27462 = state_27426__$1;
(statearr_27429_27462[(2)] = null);

(statearr_27429_27462[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27427 === (4))){
var inst_27390 = (state_27426[(7)]);
var inst_27392 = (inst_27390 < cnt);
var state_27426__$1 = state_27426;
if(cljs.core.truth_(inst_27392)){
var statearr_27430_27463 = state_27426__$1;
(statearr_27430_27463[(1)] = (6));

} else {
var statearr_27431_27464 = state_27426__$1;
(statearr_27431_27464[(1)] = (7));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_27427 === (15))){
var inst_27422 = (state_27426[(2)]);
var state_27426__$1 = state_27426;
var statearr_27432_27465 = state_27426__$1;
(statearr_27432_27465[(2)] = inst_27422);

(statearr_27432_27465[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27427 === (13))){
var inst_27415 = cljs.core.async.close_BANG_(out);
var state_27426__$1 = state_27426;
var statearr_27433_27466 = state_27426__$1;
(statearr_27433_27466[(2)] = inst_27415);

(statearr_27433_27466[(1)] = (15));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27427 === (6))){
var state_27426__$1 = state_27426;
var statearr_27434_27467 = state_27426__$1;
(statearr_27434_27467[(2)] = null);

(statearr_27434_27467[(1)] = (11));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27427 === (3))){
var inst_27424 = (state_27426[(2)]);
var state_27426__$1 = state_27426;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27426__$1,inst_27424);
} else {
if((state_val_27427 === (12))){
var inst_27412 = (state_27426[(8)]);
var inst_27412__$1 = (state_27426[(2)]);
var inst_27413 = cljs.core.some(cljs.core.nil_QMARK_,inst_27412__$1);
var state_27426__$1 = (function (){var statearr_27435 = state_27426;
(statearr_27435[(8)] = inst_27412__$1);

return statearr_27435;
})();
if(cljs.core.truth_(inst_27413)){
var statearr_27436_27468 = state_27426__$1;
(statearr_27436_27468[(1)] = (13));

} else {
var statearr_27437_27469 = state_27426__$1;
(statearr_27437_27469[(1)] = (14));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_27427 === (2))){
var inst_27389 = (function (){var G__27438 = dctr;
var G__27439 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__27438,G__27439) : cljs.core.reset_BANG_.call(null,G__27438,G__27439));
})();
var inst_27390 = (0);
var state_27426__$1 = (function (){var statearr_27440 = state_27426;
(statearr_27440[(7)] = inst_27390);

(statearr_27440[(9)] = inst_27389);

return statearr_27440;
})();
var statearr_27441_27470 = state_27426__$1;
(statearr_27441_27470[(2)] = null);

(statearr_27441_27470[(1)] = (4));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27427 === (11))){
var inst_27390 = (state_27426[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_27426,(10),Object,null,(9));
var inst_27399 = (function (){var G__27442 = inst_27390;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__27442) : chs__$1.call(null,G__27442));
})();
var inst_27400 = (function (){var G__27443 = inst_27390;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__27443) : done.call(null,G__27443));
})();
var inst_27401 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_27399,inst_27400);
var state_27426__$1 = state_27426;
var statearr_27444_27471 = state_27426__$1;
(statearr_27444_27471[(2)] = inst_27401);


cljs.core.async.impl.ioc_helpers.process_exception(state_27426__$1);

return cljs.core.constant$keyword$127;
} else {
if((state_val_27427 === (9))){
var inst_27390 = (state_27426[(7)]);
var inst_27403 = (state_27426[(2)]);
var inst_27404 = (inst_27390 + (1));
var inst_27390__$1 = inst_27404;
var state_27426__$1 = (function (){var statearr_27445 = state_27426;
(statearr_27445[(10)] = inst_27403);

(statearr_27445[(7)] = inst_27390__$1);

return statearr_27445;
})();
var statearr_27446_27472 = state_27426__$1;
(statearr_27446_27472[(2)] = null);

(statearr_27446_27472[(1)] = (4));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27427 === (5))){
var inst_27410 = (state_27426[(2)]);
var state_27426__$1 = (function (){var statearr_27447 = state_27426;
(statearr_27447[(11)] = inst_27410);

return statearr_27447;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27426__$1,(12),dchan);
} else {
if((state_val_27427 === (14))){
var inst_27412 = (state_27426[(8)]);
var inst_27417 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_27412);
var state_27426__$1 = state_27426;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27426__$1,(16),out,inst_27417);
} else {
if((state_val_27427 === (16))){
var inst_27419 = (state_27426[(2)]);
var state_27426__$1 = (function (){var statearr_27448 = state_27426;
(statearr_27448[(12)] = inst_27419);

return statearr_27448;
})();
var statearr_27449_27473 = state_27426__$1;
(statearr_27449_27473[(2)] = null);

(statearr_27449_27473[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27427 === (10))){
var inst_27394 = (state_27426[(2)]);
var inst_27395 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_27426__$1 = (function (){var statearr_27450 = state_27426;
(statearr_27450[(13)] = inst_27394);

return statearr_27450;
})();
var statearr_27451_27474 = state_27426__$1;
(statearr_27451_27474[(2)] = inst_27395);


cljs.core.async.impl.ioc_helpers.process_exception(state_27426__$1);

return cljs.core.constant$keyword$127;
} else {
if((state_val_27427 === (8))){
var inst_27408 = (state_27426[(2)]);
var state_27426__$1 = state_27426;
var statearr_27452_27475 = state_27426__$1;
(statearr_27452_27475[(2)] = inst_27408);

(statearr_27452_27475[(1)] = (5));


return cljs.core.constant$keyword$127;
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
});})(c__12182__auto___27460,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__12167__auto__,c__12182__auto___27460,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__12168__auto__ = null;
var state_machine__12168__auto____0 = (function (){
var statearr_27456 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27456[(0)] = state_machine__12168__auto__);

(statearr_27456[(1)] = (1));

return statearr_27456;
});
var state_machine__12168__auto____1 = (function (state_27426){
while(true){
var ret_value__12169__auto__ = (function (){try{while(true){
var result__12170__auto__ = switch__12167__auto__(state_27426);
if(cljs.core.keyword_identical_QMARK_(result__12170__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12170__auto__;
}
break;
}
}catch (e27457){if((e27457 instanceof Object)){
var ex__12171__auto__ = e27457;
var statearr_27458_27476 = state_27426;
(statearr_27458_27476[(5)] = ex__12171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27426);

return cljs.core.constant$keyword$127;
} else {
throw e27457;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12169__auto__,cljs.core.constant$keyword$127)){
var G__27477 = state_27426;
state_27426 = G__27477;
continue;
} else {
return ret_value__12169__auto__;
}
break;
}
});
state_machine__12168__auto__ = function(state_27426){
switch(arguments.length){
case 0:
return state_machine__12168__auto____0.call(this);
case 1:
return state_machine__12168__auto____1.call(this,state_27426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12168__auto____0;
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12168__auto____1;
return state_machine__12168__auto__;
})()
;})(switch__12167__auto__,c__12182__auto___27460,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__12184__auto__ = (function (){var statearr_27459 = (function (){return (f__12183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12183__auto__.cljs$core$IFn$_invoke$arity$0() : f__12183__auto__.call(null));
})();
(statearr_27459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12182__auto___27460);

return statearr_27459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12184__auto__);
});})(c__12182__auto___27460,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__12182__auto___27587 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12182__auto___27587,out){
return (function (){
var f__12183__auto__ = (function (){var switch__12167__auto__ = ((function (c__12182__auto___27587,out){
return (function (state_27563){
var state_val_27564 = (state_27563[(1)]);
if((state_val_27564 === (7))){
var inst_27542 = (state_27563[(7)]);
var inst_27543 = (state_27563[(8)]);
var inst_27542__$1 = (state_27563[(2)]);
var inst_27543__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27542__$1,(0),null);
var inst_27544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27542__$1,(1),null);
var inst_27545 = (inst_27543__$1 == null);
var state_27563__$1 = (function (){var statearr_27565 = state_27563;
(statearr_27565[(7)] = inst_27542__$1);

(statearr_27565[(9)] = inst_27544);

(statearr_27565[(8)] = inst_27543__$1);

return statearr_27565;
})();
if(cljs.core.truth_(inst_27545)){
var statearr_27566_27588 = state_27563__$1;
(statearr_27566_27588[(1)] = (8));

} else {
var statearr_27567_27589 = state_27563__$1;
(statearr_27567_27589[(1)] = (9));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_27564 === (1))){
var inst_27534 = cljs.core.vec(chs);
var inst_27535 = inst_27534;
var state_27563__$1 = (function (){var statearr_27568 = state_27563;
(statearr_27568[(10)] = inst_27535);

return statearr_27568;
})();
var statearr_27569_27590 = state_27563__$1;
(statearr_27569_27590[(2)] = null);

(statearr_27569_27590[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27564 === (4))){
var inst_27535 = (state_27563[(10)]);
var state_27563__$1 = state_27563;
return cljs.core.async.ioc_alts_BANG_(state_27563__$1,(7),inst_27535);
} else {
if((state_val_27564 === (6))){
var inst_27559 = (state_27563[(2)]);
var state_27563__$1 = state_27563;
var statearr_27570_27591 = state_27563__$1;
(statearr_27570_27591[(2)] = inst_27559);

(statearr_27570_27591[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27564 === (3))){
var inst_27561 = (state_27563[(2)]);
var state_27563__$1 = state_27563;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27563__$1,inst_27561);
} else {
if((state_val_27564 === (2))){
var inst_27535 = (state_27563[(10)]);
var inst_27537 = cljs.core.count(inst_27535);
var inst_27538 = (inst_27537 > (0));
var state_27563__$1 = state_27563;
if(cljs.core.truth_(inst_27538)){
var statearr_27572_27592 = state_27563__$1;
(statearr_27572_27592[(1)] = (4));

} else {
var statearr_27573_27593 = state_27563__$1;
(statearr_27573_27593[(1)] = (5));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_27564 === (11))){
var inst_27535 = (state_27563[(10)]);
var inst_27552 = (state_27563[(2)]);
var tmp27571 = inst_27535;
var inst_27535__$1 = tmp27571;
var state_27563__$1 = (function (){var statearr_27574 = state_27563;
(statearr_27574[(11)] = inst_27552);

(statearr_27574[(10)] = inst_27535__$1);

return statearr_27574;
})();
var statearr_27575_27594 = state_27563__$1;
(statearr_27575_27594[(2)] = null);

(statearr_27575_27594[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27564 === (9))){
var inst_27543 = (state_27563[(8)]);
var state_27563__$1 = state_27563;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27563__$1,(11),out,inst_27543);
} else {
if((state_val_27564 === (5))){
var inst_27557 = cljs.core.async.close_BANG_(out);
var state_27563__$1 = state_27563;
var statearr_27576_27595 = state_27563__$1;
(statearr_27576_27595[(2)] = inst_27557);

(statearr_27576_27595[(1)] = (6));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27564 === (10))){
var inst_27555 = (state_27563[(2)]);
var state_27563__$1 = state_27563;
var statearr_27577_27596 = state_27563__$1;
(statearr_27577_27596[(2)] = inst_27555);

(statearr_27577_27596[(1)] = (6));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27564 === (8))){
var inst_27542 = (state_27563[(7)]);
var inst_27544 = (state_27563[(9)]);
var inst_27543 = (state_27563[(8)]);
var inst_27535 = (state_27563[(10)]);
var inst_27547 = (function (){var c = inst_27544;
var v = inst_27543;
var vec__27540 = inst_27542;
var cs = inst_27535;
return ((function (c,v,vec__27540,cs,inst_27542,inst_27544,inst_27543,inst_27535,state_val_27564,c__12182__auto___27587,out){
return (function (p1__27478_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__27478_SHARP_);
});
;})(c,v,vec__27540,cs,inst_27542,inst_27544,inst_27543,inst_27535,state_val_27564,c__12182__auto___27587,out))
})();
var inst_27548 = cljs.core.filterv(inst_27547,inst_27535);
var inst_27535__$1 = inst_27548;
var state_27563__$1 = (function (){var statearr_27578 = state_27563;
(statearr_27578[(10)] = inst_27535__$1);

return statearr_27578;
})();
var statearr_27579_27597 = state_27563__$1;
(statearr_27579_27597[(2)] = null);

(statearr_27579_27597[(1)] = (2));


return cljs.core.constant$keyword$127;
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
});})(c__12182__auto___27587,out))
;
return ((function (switch__12167__auto__,c__12182__auto___27587,out){
return (function() {
var state_machine__12168__auto__ = null;
var state_machine__12168__auto____0 = (function (){
var statearr_27583 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27583[(0)] = state_machine__12168__auto__);

(statearr_27583[(1)] = (1));

return statearr_27583;
});
var state_machine__12168__auto____1 = (function (state_27563){
while(true){
var ret_value__12169__auto__ = (function (){try{while(true){
var result__12170__auto__ = switch__12167__auto__(state_27563);
if(cljs.core.keyword_identical_QMARK_(result__12170__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12170__auto__;
}
break;
}
}catch (e27584){if((e27584 instanceof Object)){
var ex__12171__auto__ = e27584;
var statearr_27585_27598 = state_27563;
(statearr_27585_27598[(5)] = ex__12171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27563);

return cljs.core.constant$keyword$127;
} else {
throw e27584;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12169__auto__,cljs.core.constant$keyword$127)){
var G__27599 = state_27563;
state_27563 = G__27599;
continue;
} else {
return ret_value__12169__auto__;
}
break;
}
});
state_machine__12168__auto__ = function(state_27563){
switch(arguments.length){
case 0:
return state_machine__12168__auto____0.call(this);
case 1:
return state_machine__12168__auto____1.call(this,state_27563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12168__auto____0;
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12168__auto____1;
return state_machine__12168__auto__;
})()
;})(switch__12167__auto__,c__12182__auto___27587,out))
})();
var state__12184__auto__ = (function (){var statearr_27586 = (function (){return (f__12183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12183__auto__.cljs$core$IFn$_invoke$arity$0() : f__12183__auto__.call(null));
})();
(statearr_27586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12182__auto___27587);

return statearr_27586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12184__auto__);
});})(c__12182__auto___27587,out))
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
var c__12182__auto___27695 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12182__auto___27695,out){
return (function (){
var f__12183__auto__ = (function (){var switch__12167__auto__ = ((function (c__12182__auto___27695,out){
return (function (state_27672){
var state_val_27673 = (state_27672[(1)]);
if((state_val_27673 === (7))){
var inst_27654 = (state_27672[(7)]);
var inst_27654__$1 = (state_27672[(2)]);
var inst_27655 = (inst_27654__$1 == null);
var inst_27656 = cljs.core.not(inst_27655);
var state_27672__$1 = (function (){var statearr_27674 = state_27672;
(statearr_27674[(7)] = inst_27654__$1);

return statearr_27674;
})();
if(inst_27656){
var statearr_27675_27696 = state_27672__$1;
(statearr_27675_27696[(1)] = (8));

} else {
var statearr_27676_27697 = state_27672__$1;
(statearr_27676_27697[(1)] = (9));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_27673 === (1))){
var inst_27649 = (0);
var state_27672__$1 = (function (){var statearr_27677 = state_27672;
(statearr_27677[(8)] = inst_27649);

return statearr_27677;
})();
var statearr_27678_27698 = state_27672__$1;
(statearr_27678_27698[(2)] = null);

(statearr_27678_27698[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27673 === (4))){
var state_27672__$1 = state_27672;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27672__$1,(7),ch);
} else {
if((state_val_27673 === (6))){
var inst_27667 = (state_27672[(2)]);
var state_27672__$1 = state_27672;
var statearr_27679_27699 = state_27672__$1;
(statearr_27679_27699[(2)] = inst_27667);

(statearr_27679_27699[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27673 === (3))){
var inst_27669 = (state_27672[(2)]);
var inst_27670 = cljs.core.async.close_BANG_(out);
var state_27672__$1 = (function (){var statearr_27680 = state_27672;
(statearr_27680[(9)] = inst_27669);

return statearr_27680;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27672__$1,inst_27670);
} else {
if((state_val_27673 === (2))){
var inst_27649 = (state_27672[(8)]);
var inst_27651 = (inst_27649 < n);
var state_27672__$1 = state_27672;
if(cljs.core.truth_(inst_27651)){
var statearr_27681_27700 = state_27672__$1;
(statearr_27681_27700[(1)] = (4));

} else {
var statearr_27682_27701 = state_27672__$1;
(statearr_27682_27701[(1)] = (5));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_27673 === (11))){
var inst_27649 = (state_27672[(8)]);
var inst_27659 = (state_27672[(2)]);
var inst_27660 = (inst_27649 + (1));
var inst_27649__$1 = inst_27660;
var state_27672__$1 = (function (){var statearr_27683 = state_27672;
(statearr_27683[(8)] = inst_27649__$1);

(statearr_27683[(10)] = inst_27659);

return statearr_27683;
})();
var statearr_27684_27702 = state_27672__$1;
(statearr_27684_27702[(2)] = null);

(statearr_27684_27702[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27673 === (9))){
var state_27672__$1 = state_27672;
var statearr_27685_27703 = state_27672__$1;
(statearr_27685_27703[(2)] = null);

(statearr_27685_27703[(1)] = (10));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27673 === (5))){
var state_27672__$1 = state_27672;
var statearr_27686_27704 = state_27672__$1;
(statearr_27686_27704[(2)] = null);

(statearr_27686_27704[(1)] = (6));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27673 === (10))){
var inst_27664 = (state_27672[(2)]);
var state_27672__$1 = state_27672;
var statearr_27687_27705 = state_27672__$1;
(statearr_27687_27705[(2)] = inst_27664);

(statearr_27687_27705[(1)] = (6));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27673 === (8))){
var inst_27654 = (state_27672[(7)]);
var state_27672__$1 = state_27672;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27672__$1,(11),out,inst_27654);
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
});})(c__12182__auto___27695,out))
;
return ((function (switch__12167__auto__,c__12182__auto___27695,out){
return (function() {
var state_machine__12168__auto__ = null;
var state_machine__12168__auto____0 = (function (){
var statearr_27691 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27691[(0)] = state_machine__12168__auto__);

(statearr_27691[(1)] = (1));

return statearr_27691;
});
var state_machine__12168__auto____1 = (function (state_27672){
while(true){
var ret_value__12169__auto__ = (function (){try{while(true){
var result__12170__auto__ = switch__12167__auto__(state_27672);
if(cljs.core.keyword_identical_QMARK_(result__12170__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12170__auto__;
}
break;
}
}catch (e27692){if((e27692 instanceof Object)){
var ex__12171__auto__ = e27692;
var statearr_27693_27706 = state_27672;
(statearr_27693_27706[(5)] = ex__12171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27672);

return cljs.core.constant$keyword$127;
} else {
throw e27692;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12169__auto__,cljs.core.constant$keyword$127)){
var G__27707 = state_27672;
state_27672 = G__27707;
continue;
} else {
return ret_value__12169__auto__;
}
break;
}
});
state_machine__12168__auto__ = function(state_27672){
switch(arguments.length){
case 0:
return state_machine__12168__auto____0.call(this);
case 1:
return state_machine__12168__auto____1.call(this,state_27672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12168__auto____0;
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12168__auto____1;
return state_machine__12168__auto__;
})()
;})(switch__12167__auto__,c__12182__auto___27695,out))
})();
var state__12184__auto__ = (function (){var statearr_27694 = (function (){return (f__12183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12183__auto__.cljs$core$IFn$_invoke$arity$0() : f__12183__auto__.call(null));
})();
(statearr_27694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12182__auto___27695);

return statearr_27694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12184__auto__);
});})(c__12182__auto___27695,out))
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
if(typeof cljs.core.async.t27720 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27720 = (function (ch,f,map_LT_,meta27721){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27721 = meta27721;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27720.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27720.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t27720.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27720.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t27723 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27723 = (function (fn1,_,meta27721,map_LT_,f,ch,meta27724){
this.fn1 = fn1;
this._ = _;
this.meta27721 = meta27721;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27724 = meta27724;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27723.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27723.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t27723.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27708_SHARP_){
var G__27726 = (((p1__27708_SHARP_ == null))?null:(function (){var G__27727 = p1__27708_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__27727) : self__.f.call(null,G__27727));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__27726) : f1.call(null,G__27726));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t27723.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27725){
var self__ = this;
var _27725__$1 = this;
return self__.meta27724;
});})(___$1))
;

cljs.core.async.t27723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27725,meta27724__$1){
var self__ = this;
var _27725__$1 = this;
return (new cljs.core.async.t27723(self__.fn1,self__._,self__.meta27721,self__.map_LT_,self__.f,self__.ch,meta27724__$1));
});})(___$1))
;

cljs.core.async.t27723.cljs$lang$type = true;

cljs.core.async.t27723.cljs$lang$ctorStr = "cljs.core.async/t27723";

cljs.core.async.t27723.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4337__auto__,writer__4338__auto__,opt__4339__auto__){
return cljs.core._write(writer__4338__auto__,"cljs.core.async/t27723");
});})(___$1))
;

cljs.core.async.__GT_t27723 = ((function (___$1){
return (function __GT_t27723(fn1__$1,___$2,meta27721__$1,map_LT___$1,f__$1,ch__$1,meta27724){
return (new cljs.core.async.t27723(fn1__$1,___$2,meta27721__$1,map_LT___$1,f__$1,ch__$1,meta27724));
});})(___$1))
;

}

return (new cljs.core.async.t27723(fn1,___$1,self__.meta27721,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,737,cljs.core.constant$keyword$10,10,cljs.core.constant$keyword$11,731,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3738__auto__ = ret;
if(cljs.core.truth_(and__3738__auto__)){
return !(((function (){var G__27728 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27728) : cljs.core.deref.call(null,G__27728));
})() == null));
} else {
return and__3738__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__27729 = (function (){var G__27730 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27730) : cljs.core.deref.call(null,G__27730));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__27729) : self__.f.call(null,G__27729));
})());
} else {
return ret;
}
});

cljs.core.async.t27720.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27720.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t27720.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t27720.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27722){
var self__ = this;
var _27722__$1 = this;
return self__.meta27721;
});

cljs.core.async.t27720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27722,meta27721__$1){
var self__ = this;
var _27722__$1 = this;
return (new cljs.core.async.t27720(self__.ch,self__.f,self__.map_LT_,meta27721__$1));
});

cljs.core.async.t27720.cljs$lang$type = true;

cljs.core.async.t27720.cljs$lang$ctorStr = "cljs.core.async/t27720";

cljs.core.async.t27720.cljs$lang$ctorPrWriter = (function (this__4337__auto__,writer__4338__auto__,opt__4339__auto__){
return cljs.core._write(writer__4338__auto__,"cljs.core.async/t27720");
});

cljs.core.async.__GT_t27720 = (function __GT_t27720(ch__$1,f__$1,map_LT___$1,meta27721){
return (new cljs.core.async.t27720(ch__$1,f__$1,map_LT___$1,meta27721));
});

}

return (new cljs.core.async.t27720(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,743,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,722,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t27735 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27735 = (function (ch,f,map_GT_,meta27736){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27736 = meta27736;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27735.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27735.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__27738 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__27738) : self__.f.call(null,G__27738));
})(),fn1);
});

cljs.core.async.t27735.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27735.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t27735.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27735.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t27735.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27737){
var self__ = this;
var _27737__$1 = this;
return self__.meta27736;
});

cljs.core.async.t27735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27737,meta27736__$1){
var self__ = this;
var _27737__$1 = this;
return (new cljs.core.async.t27735(self__.ch,self__.f,self__.map_GT_,meta27736__$1));
});

cljs.core.async.t27735.cljs$lang$type = true;

cljs.core.async.t27735.cljs$lang$ctorStr = "cljs.core.async/t27735";

cljs.core.async.t27735.cljs$lang$ctorPrWriter = (function (this__4337__auto__,writer__4338__auto__,opt__4339__auto__){
return cljs.core._write(writer__4338__auto__,"cljs.core.async/t27735");
});

cljs.core.async.__GT_t27735 = (function __GT_t27735(ch__$1,f__$1,map_GT___$1,meta27736){
return (new cljs.core.async.t27735(ch__$1,f__$1,map_GT___$1,meta27736));
});

}

return (new cljs.core.async.t27735(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,34,cljs.core.constant$keyword$9,757,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,748,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t27743 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27743 = (function (ch,p,filter_GT_,meta27744){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27744 = meta27744;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27743.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27743.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__27746 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__27746) : self__.p.call(null,G__27746));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t27743.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27743.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t27743.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27743.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t27743.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t27743.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27745){
var self__ = this;
var _27745__$1 = this;
return self__.meta27744;
});

cljs.core.async.t27743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27745,meta27744__$1){
var self__ = this;
var _27745__$1 = this;
return (new cljs.core.async.t27743(self__.ch,self__.p,self__.filter_GT_,meta27744__$1));
});

cljs.core.async.t27743.cljs$lang$type = true;

cljs.core.async.t27743.cljs$lang$ctorStr = "cljs.core.async/t27743";

cljs.core.async.t27743.cljs$lang$ctorPrWriter = (function (this__4337__auto__,writer__4338__auto__,opt__4339__auto__){
return cljs.core._write(writer__4338__auto__,"cljs.core.async/t27743");
});

cljs.core.async.__GT_t27743 = (function __GT_t27743(ch__$1,p__$1,filter_GT___$1,meta27744){
return (new cljs.core.async.t27743(ch__$1,p__$1,filter_GT___$1,meta27744));
});

}

return (new cljs.core.async.t27743(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,774,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,762,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
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
var c__12182__auto___27834 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12182__auto___27834,out){
return (function (){
var f__12183__auto__ = (function (){var switch__12167__auto__ = ((function (c__12182__auto___27834,out){
return (function (state_27812){
var state_val_27813 = (state_27812[(1)]);
if((state_val_27813 === (7))){
var inst_27808 = (state_27812[(2)]);
var state_27812__$1 = state_27812;
var statearr_27814_27835 = state_27812__$1;
(statearr_27814_27835[(2)] = inst_27808);

(statearr_27814_27835[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27813 === (1))){
var state_27812__$1 = state_27812;
var statearr_27815_27836 = state_27812__$1;
(statearr_27815_27836[(2)] = null);

(statearr_27815_27836[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27813 === (4))){
var inst_27794 = (state_27812[(7)]);
var inst_27794__$1 = (state_27812[(2)]);
var inst_27795 = (inst_27794__$1 == null);
var state_27812__$1 = (function (){var statearr_27816 = state_27812;
(statearr_27816[(7)] = inst_27794__$1);

return statearr_27816;
})();
if(cljs.core.truth_(inst_27795)){
var statearr_27817_27837 = state_27812__$1;
(statearr_27817_27837[(1)] = (5));

} else {
var statearr_27818_27838 = state_27812__$1;
(statearr_27818_27838[(1)] = (6));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_27813 === (6))){
var inst_27794 = (state_27812[(7)]);
var inst_27799 = (function (){var G__27819 = inst_27794;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__27819) : p.call(null,G__27819));
})();
var state_27812__$1 = state_27812;
if(cljs.core.truth_(inst_27799)){
var statearr_27820_27839 = state_27812__$1;
(statearr_27820_27839[(1)] = (8));

} else {
var statearr_27821_27840 = state_27812__$1;
(statearr_27821_27840[(1)] = (9));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_27813 === (3))){
var inst_27810 = (state_27812[(2)]);
var state_27812__$1 = state_27812;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27812__$1,inst_27810);
} else {
if((state_val_27813 === (2))){
var state_27812__$1 = state_27812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27812__$1,(4),ch);
} else {
if((state_val_27813 === (11))){
var inst_27802 = (state_27812[(2)]);
var state_27812__$1 = state_27812;
var statearr_27822_27841 = state_27812__$1;
(statearr_27822_27841[(2)] = inst_27802);

(statearr_27822_27841[(1)] = (10));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27813 === (9))){
var state_27812__$1 = state_27812;
var statearr_27823_27842 = state_27812__$1;
(statearr_27823_27842[(2)] = null);

(statearr_27823_27842[(1)] = (10));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27813 === (5))){
var inst_27797 = cljs.core.async.close_BANG_(out);
var state_27812__$1 = state_27812;
var statearr_27824_27843 = state_27812__$1;
(statearr_27824_27843[(2)] = inst_27797);

(statearr_27824_27843[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27813 === (10))){
var inst_27805 = (state_27812[(2)]);
var state_27812__$1 = (function (){var statearr_27825 = state_27812;
(statearr_27825[(8)] = inst_27805);

return statearr_27825;
})();
var statearr_27826_27844 = state_27812__$1;
(statearr_27826_27844[(2)] = null);

(statearr_27826_27844[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27813 === (8))){
var inst_27794 = (state_27812[(7)]);
var state_27812__$1 = state_27812;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27812__$1,(11),out,inst_27794);
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
});})(c__12182__auto___27834,out))
;
return ((function (switch__12167__auto__,c__12182__auto___27834,out){
return (function() {
var state_machine__12168__auto__ = null;
var state_machine__12168__auto____0 = (function (){
var statearr_27830 = [null,null,null,null,null,null,null,null,null];
(statearr_27830[(0)] = state_machine__12168__auto__);

(statearr_27830[(1)] = (1));

return statearr_27830;
});
var state_machine__12168__auto____1 = (function (state_27812){
while(true){
var ret_value__12169__auto__ = (function (){try{while(true){
var result__12170__auto__ = switch__12167__auto__(state_27812);
if(cljs.core.keyword_identical_QMARK_(result__12170__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12170__auto__;
}
break;
}
}catch (e27831){if((e27831 instanceof Object)){
var ex__12171__auto__ = e27831;
var statearr_27832_27845 = state_27812;
(statearr_27832_27845[(5)] = ex__12171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27812);

return cljs.core.constant$keyword$127;
} else {
throw e27831;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12169__auto__,cljs.core.constant$keyword$127)){
var G__27846 = state_27812;
state_27812 = G__27846;
continue;
} else {
return ret_value__12169__auto__;
}
break;
}
});
state_machine__12168__auto__ = function(state_27812){
switch(arguments.length){
case 0:
return state_machine__12168__auto____0.call(this);
case 1:
return state_machine__12168__auto____1.call(this,state_27812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12168__auto____0;
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12168__auto____1;
return state_machine__12168__auto__;
})()
;})(switch__12167__auto__,c__12182__auto___27834,out))
})();
var state__12184__auto__ = (function (){var statearr_27833 = (function (){return (f__12183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12183__auto__.cljs$core$IFn$_invoke$arity$0() : f__12183__auto__.call(null));
})();
(statearr_27833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12182__auto___27834);

return statearr_27833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12184__auto__);
});})(c__12182__auto___27834,out))
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
var c__12182__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12182__auto__){
return (function (){
var f__12183__auto__ = (function (){var switch__12167__auto__ = ((function (c__12182__auto__){
return (function (state_28016){
var state_val_28017 = (state_28016[(1)]);
if((state_val_28017 === (7))){
var inst_28012 = (state_28016[(2)]);
var state_28016__$1 = state_28016;
var statearr_28018_28060 = state_28016__$1;
(statearr_28018_28060[(2)] = inst_28012);

(statearr_28018_28060[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_28017 === (20))){
var inst_27982 = (state_28016[(7)]);
var inst_27993 = (state_28016[(2)]);
var inst_27994 = cljs.core.next(inst_27982);
var inst_27968 = inst_27994;
var inst_27969 = null;
var inst_27970 = (0);
var inst_27971 = (0);
var state_28016__$1 = (function (){var statearr_28019 = state_28016;
(statearr_28019[(8)] = inst_27969);

(statearr_28019[(9)] = inst_27993);

(statearr_28019[(10)] = inst_27970);

(statearr_28019[(11)] = inst_27971);

(statearr_28019[(12)] = inst_27968);

return statearr_28019;
})();
var statearr_28020_28061 = state_28016__$1;
(statearr_28020_28061[(2)] = null);

(statearr_28020_28061[(1)] = (8));


return cljs.core.constant$keyword$127;
} else {
if((state_val_28017 === (1))){
var state_28016__$1 = state_28016;
var statearr_28021_28062 = state_28016__$1;
(statearr_28021_28062[(2)] = null);

(statearr_28021_28062[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_28017 === (4))){
var inst_27957 = (state_28016[(13)]);
var inst_27957__$1 = (state_28016[(2)]);
var inst_27958 = (inst_27957__$1 == null);
var state_28016__$1 = (function (){var statearr_28022 = state_28016;
(statearr_28022[(13)] = inst_27957__$1);

return statearr_28022;
})();
if(cljs.core.truth_(inst_27958)){
var statearr_28023_28063 = state_28016__$1;
(statearr_28023_28063[(1)] = (5));

} else {
var statearr_28024_28064 = state_28016__$1;
(statearr_28024_28064[(1)] = (6));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_28017 === (15))){
var state_28016__$1 = state_28016;
var statearr_28028_28065 = state_28016__$1;
(statearr_28028_28065[(2)] = null);

(statearr_28028_28065[(1)] = (16));


return cljs.core.constant$keyword$127;
} else {
if((state_val_28017 === (21))){
var state_28016__$1 = state_28016;
var statearr_28029_28066 = state_28016__$1;
(statearr_28029_28066[(2)] = null);

(statearr_28029_28066[(1)] = (23));


return cljs.core.constant$keyword$127;
} else {
if((state_val_28017 === (13))){
var inst_27969 = (state_28016[(8)]);
var inst_27970 = (state_28016[(10)]);
var inst_27971 = (state_28016[(11)]);
var inst_27968 = (state_28016[(12)]);
var inst_27978 = (state_28016[(2)]);
var inst_27979 = (inst_27971 + (1));
var tmp28025 = inst_27969;
var tmp28026 = inst_27970;
var tmp28027 = inst_27968;
var inst_27968__$1 = tmp28027;
var inst_27969__$1 = tmp28025;
var inst_27970__$1 = tmp28026;
var inst_27971__$1 = inst_27979;
var state_28016__$1 = (function (){var statearr_28030 = state_28016;
(statearr_28030[(8)] = inst_27969__$1);

(statearr_28030[(10)] = inst_27970__$1);

(statearr_28030[(14)] = inst_27978);

(statearr_28030[(11)] = inst_27971__$1);

(statearr_28030[(12)] = inst_27968__$1);

return statearr_28030;
})();
var statearr_28031_28067 = state_28016__$1;
(statearr_28031_28067[(2)] = null);

(statearr_28031_28067[(1)] = (8));


return cljs.core.constant$keyword$127;
} else {
if((state_val_28017 === (22))){
var state_28016__$1 = state_28016;
var statearr_28032_28068 = state_28016__$1;
(statearr_28032_28068[(2)] = null);

(statearr_28032_28068[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_28017 === (6))){
var inst_27957 = (state_28016[(13)]);
var inst_27966 = (function (){var G__28033 = inst_27957;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28033) : f.call(null,G__28033));
})();
var inst_27967 = cljs.core.seq(inst_27966);
var inst_27968 = inst_27967;
var inst_27969 = null;
var inst_27970 = (0);
var inst_27971 = (0);
var state_28016__$1 = (function (){var statearr_28034 = state_28016;
(statearr_28034[(8)] = inst_27969);

(statearr_28034[(10)] = inst_27970);

(statearr_28034[(11)] = inst_27971);

(statearr_28034[(12)] = inst_27968);

return statearr_28034;
})();
var statearr_28035_28069 = state_28016__$1;
(statearr_28035_28069[(2)] = null);

(statearr_28035_28069[(1)] = (8));


return cljs.core.constant$keyword$127;
} else {
if((state_val_28017 === (17))){
var inst_27982 = (state_28016[(7)]);
var inst_27986 = cljs.core.chunk_first(inst_27982);
var inst_27987 = cljs.core.chunk_rest(inst_27982);
var inst_27988 = cljs.core.count(inst_27986);
var inst_27968 = inst_27987;
var inst_27969 = inst_27986;
var inst_27970 = inst_27988;
var inst_27971 = (0);
var state_28016__$1 = (function (){var statearr_28036 = state_28016;
(statearr_28036[(8)] = inst_27969);

(statearr_28036[(10)] = inst_27970);

(statearr_28036[(11)] = inst_27971);

(statearr_28036[(12)] = inst_27968);

return statearr_28036;
})();
var statearr_28037_28070 = state_28016__$1;
(statearr_28037_28070[(2)] = null);

(statearr_28037_28070[(1)] = (8));


return cljs.core.constant$keyword$127;
} else {
if((state_val_28017 === (3))){
var inst_28014 = (state_28016[(2)]);
var state_28016__$1 = state_28016;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28016__$1,inst_28014);
} else {
if((state_val_28017 === (12))){
var inst_28002 = (state_28016[(2)]);
var state_28016__$1 = state_28016;
var statearr_28038_28071 = state_28016__$1;
(statearr_28038_28071[(2)] = inst_28002);

(statearr_28038_28071[(1)] = (9));


return cljs.core.constant$keyword$127;
} else {
if((state_val_28017 === (2))){
var state_28016__$1 = state_28016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28016__$1,(4),in$);
} else {
if((state_val_28017 === (23))){
var inst_28010 = (state_28016[(2)]);
var state_28016__$1 = state_28016;
var statearr_28039_28072 = state_28016__$1;
(statearr_28039_28072[(2)] = inst_28010);

(statearr_28039_28072[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_28017 === (19))){
var inst_27997 = (state_28016[(2)]);
var state_28016__$1 = state_28016;
var statearr_28040_28073 = state_28016__$1;
(statearr_28040_28073[(2)] = inst_27997);

(statearr_28040_28073[(1)] = (16));


return cljs.core.constant$keyword$127;
} else {
if((state_val_28017 === (11))){
var inst_27982 = (state_28016[(7)]);
var inst_27968 = (state_28016[(12)]);
var inst_27982__$1 = cljs.core.seq(inst_27968);
var state_28016__$1 = (function (){var statearr_28041 = state_28016;
(statearr_28041[(7)] = inst_27982__$1);

return statearr_28041;
})();
if(inst_27982__$1){
var statearr_28042_28074 = state_28016__$1;
(statearr_28042_28074[(1)] = (14));

} else {
var statearr_28043_28075 = state_28016__$1;
(statearr_28043_28075[(1)] = (15));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_28017 === (9))){
var inst_28004 = (state_28016[(2)]);
var inst_28005 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_28016__$1 = (function (){var statearr_28044 = state_28016;
(statearr_28044[(15)] = inst_28004);

return statearr_28044;
})();
if(cljs.core.truth_(inst_28005)){
var statearr_28045_28076 = state_28016__$1;
(statearr_28045_28076[(1)] = (21));

} else {
var statearr_28046_28077 = state_28016__$1;
(statearr_28046_28077[(1)] = (22));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_28017 === (5))){
var inst_27960 = cljs.core.async.close_BANG_(out);
var state_28016__$1 = state_28016;
var statearr_28047_28078 = state_28016__$1;
(statearr_28047_28078[(2)] = inst_27960);

(statearr_28047_28078[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_28017 === (14))){
var inst_27982 = (state_28016[(7)]);
var inst_27984 = cljs.core.chunked_seq_QMARK_(inst_27982);
var state_28016__$1 = state_28016;
if(inst_27984){
var statearr_28048_28079 = state_28016__$1;
(statearr_28048_28079[(1)] = (17));

} else {
var statearr_28049_28080 = state_28016__$1;
(statearr_28049_28080[(1)] = (18));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_28017 === (16))){
var inst_28000 = (state_28016[(2)]);
var state_28016__$1 = state_28016;
var statearr_28050_28081 = state_28016__$1;
(statearr_28050_28081[(2)] = inst_28000);

(statearr_28050_28081[(1)] = (12));


return cljs.core.constant$keyword$127;
} else {
if((state_val_28017 === (10))){
var inst_27969 = (state_28016[(8)]);
var inst_27971 = (state_28016[(11)]);
var inst_27976 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_27969,inst_27971);
var state_28016__$1 = state_28016;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28016__$1,(13),out,inst_27976);
} else {
if((state_val_28017 === (18))){
var inst_27982 = (state_28016[(7)]);
var inst_27991 = cljs.core.first(inst_27982);
var state_28016__$1 = state_28016;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28016__$1,(20),out,inst_27991);
} else {
if((state_val_28017 === (8))){
var inst_27970 = (state_28016[(10)]);
var inst_27971 = (state_28016[(11)]);
var inst_27973 = (inst_27971 < inst_27970);
var inst_27974 = inst_27973;
var state_28016__$1 = state_28016;
if(cljs.core.truth_(inst_27974)){
var statearr_28051_28082 = state_28016__$1;
(statearr_28051_28082[(1)] = (10));

} else {
var statearr_28052_28083 = state_28016__$1;
(statearr_28052_28083[(1)] = (11));

}

return cljs.core.constant$keyword$127;
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
});})(c__12182__auto__))
;
return ((function (switch__12167__auto__,c__12182__auto__){
return (function() {
var state_machine__12168__auto__ = null;
var state_machine__12168__auto____0 = (function (){
var statearr_28056 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28056[(0)] = state_machine__12168__auto__);

(statearr_28056[(1)] = (1));

return statearr_28056;
});
var state_machine__12168__auto____1 = (function (state_28016){
while(true){
var ret_value__12169__auto__ = (function (){try{while(true){
var result__12170__auto__ = switch__12167__auto__(state_28016);
if(cljs.core.keyword_identical_QMARK_(result__12170__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12170__auto__;
}
break;
}
}catch (e28057){if((e28057 instanceof Object)){
var ex__12171__auto__ = e28057;
var statearr_28058_28084 = state_28016;
(statearr_28058_28084[(5)] = ex__12171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28016);

return cljs.core.constant$keyword$127;
} else {
throw e28057;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12169__auto__,cljs.core.constant$keyword$127)){
var G__28085 = state_28016;
state_28016 = G__28085;
continue;
} else {
return ret_value__12169__auto__;
}
break;
}
});
state_machine__12168__auto__ = function(state_28016){
switch(arguments.length){
case 0:
return state_machine__12168__auto____0.call(this);
case 1:
return state_machine__12168__auto____1.call(this,state_28016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12168__auto____0;
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12168__auto____1;
return state_machine__12168__auto__;
})()
;})(switch__12167__auto__,c__12182__auto__))
})();
var state__12184__auto__ = (function (){var statearr_28059 = (function (){return (f__12183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12183__auto__.cljs$core$IFn$_invoke$arity$0() : f__12183__auto__.call(null));
})();
(statearr_28059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12182__auto__);

return statearr_28059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12184__auto__);
});})(c__12182__auto__))
);

return c__12182__auto__;
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
var c__12182__auto___28190 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12182__auto___28190,out){
return (function (){
var f__12183__auto__ = (function (){var switch__12167__auto__ = ((function (c__12182__auto___28190,out){
return (function (state_28165){
var state_val_28166 = (state_28165[(1)]);
if((state_val_28166 === (7))){
var inst_28160 = (state_28165[(2)]);
var state_28165__$1 = state_28165;
var statearr_28167_28191 = state_28165__$1;
(statearr_28167_28191[(2)] = inst_28160);

(statearr_28167_28191[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_28166 === (1))){
var inst_28142 = null;
var state_28165__$1 = (function (){var statearr_28168 = state_28165;
(statearr_28168[(7)] = inst_28142);

return statearr_28168;
})();
var statearr_28169_28192 = state_28165__$1;
(statearr_28169_28192[(2)] = null);

(statearr_28169_28192[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_28166 === (4))){
var inst_28145 = (state_28165[(8)]);
var inst_28145__$1 = (state_28165[(2)]);
var inst_28146 = (inst_28145__$1 == null);
var inst_28147 = cljs.core.not(inst_28146);
var state_28165__$1 = (function (){var statearr_28170 = state_28165;
(statearr_28170[(8)] = inst_28145__$1);

return statearr_28170;
})();
if(inst_28147){
var statearr_28171_28193 = state_28165__$1;
(statearr_28171_28193[(1)] = (5));

} else {
var statearr_28172_28194 = state_28165__$1;
(statearr_28172_28194[(1)] = (6));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_28166 === (6))){
var state_28165__$1 = state_28165;
var statearr_28173_28195 = state_28165__$1;
(statearr_28173_28195[(2)] = null);

(statearr_28173_28195[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_28166 === (3))){
var inst_28162 = (state_28165[(2)]);
var inst_28163 = cljs.core.async.close_BANG_(out);
var state_28165__$1 = (function (){var statearr_28174 = state_28165;
(statearr_28174[(9)] = inst_28162);

return statearr_28174;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28165__$1,inst_28163);
} else {
if((state_val_28166 === (2))){
var state_28165__$1 = state_28165;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28165__$1,(4),ch);
} else {
if((state_val_28166 === (11))){
var inst_28145 = (state_28165[(8)]);
var inst_28154 = (state_28165[(2)]);
var inst_28142 = inst_28145;
var state_28165__$1 = (function (){var statearr_28175 = state_28165;
(statearr_28175[(10)] = inst_28154);

(statearr_28175[(7)] = inst_28142);

return statearr_28175;
})();
var statearr_28176_28196 = state_28165__$1;
(statearr_28176_28196[(2)] = null);

(statearr_28176_28196[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_28166 === (9))){
var inst_28145 = (state_28165[(8)]);
var state_28165__$1 = state_28165;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28165__$1,(11),out,inst_28145);
} else {
if((state_val_28166 === (5))){
var inst_28142 = (state_28165[(7)]);
var inst_28145 = (state_28165[(8)]);
var inst_28149 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28145,inst_28142);
var state_28165__$1 = state_28165;
if(inst_28149){
var statearr_28178_28197 = state_28165__$1;
(statearr_28178_28197[(1)] = (8));

} else {
var statearr_28179_28198 = state_28165__$1;
(statearr_28179_28198[(1)] = (9));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_28166 === (10))){
var inst_28157 = (state_28165[(2)]);
var state_28165__$1 = state_28165;
var statearr_28180_28199 = state_28165__$1;
(statearr_28180_28199[(2)] = inst_28157);

(statearr_28180_28199[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_28166 === (8))){
var inst_28142 = (state_28165[(7)]);
var tmp28177 = inst_28142;
var inst_28142__$1 = tmp28177;
var state_28165__$1 = (function (){var statearr_28181 = state_28165;
(statearr_28181[(7)] = inst_28142__$1);

return statearr_28181;
})();
var statearr_28182_28200 = state_28165__$1;
(statearr_28182_28200[(2)] = null);

(statearr_28182_28200[(1)] = (2));


return cljs.core.constant$keyword$127;
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
});})(c__12182__auto___28190,out))
;
return ((function (switch__12167__auto__,c__12182__auto___28190,out){
return (function() {
var state_machine__12168__auto__ = null;
var state_machine__12168__auto____0 = (function (){
var statearr_28186 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28186[(0)] = state_machine__12168__auto__);

(statearr_28186[(1)] = (1));

return statearr_28186;
});
var state_machine__12168__auto____1 = (function (state_28165){
while(true){
var ret_value__12169__auto__ = (function (){try{while(true){
var result__12170__auto__ = switch__12167__auto__(state_28165);
if(cljs.core.keyword_identical_QMARK_(result__12170__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12170__auto__;
}
break;
}
}catch (e28187){if((e28187 instanceof Object)){
var ex__12171__auto__ = e28187;
var statearr_28188_28201 = state_28165;
(statearr_28188_28201[(5)] = ex__12171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28165);

return cljs.core.constant$keyword$127;
} else {
throw e28187;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12169__auto__,cljs.core.constant$keyword$127)){
var G__28202 = state_28165;
state_28165 = G__28202;
continue;
} else {
return ret_value__12169__auto__;
}
break;
}
});
state_machine__12168__auto__ = function(state_28165){
switch(arguments.length){
case 0:
return state_machine__12168__auto____0.call(this);
case 1:
return state_machine__12168__auto____1.call(this,state_28165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12168__auto____0;
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12168__auto____1;
return state_machine__12168__auto__;
})()
;})(switch__12167__auto__,c__12182__auto___28190,out))
})();
var state__12184__auto__ = (function (){var statearr_28189 = (function (){return (f__12183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12183__auto__.cljs$core$IFn$_invoke$arity$0() : f__12183__auto__.call(null));
})();
(statearr_28189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12182__auto___28190);

return statearr_28189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12184__auto__);
});})(c__12182__auto___28190,out))
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
var c__12182__auto___28340 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12182__auto___28340,out){
return (function (){
var f__12183__auto__ = (function (){var switch__12167__auto__ = ((function (c__12182__auto___28340,out){
return (function (state_28310){
var state_val_28311 = (state_28310[(1)]);
if((state_val_28311 === (7))){
var inst_28306 = (state_28310[(2)]);
var state_28310__$1 = state_28310;
var statearr_28312_28341 = state_28310__$1;
(statearr_28312_28341[(2)] = inst_28306);

(statearr_28312_28341[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_28311 === (1))){
var inst_28273 = (new Array(n));
var inst_28274 = inst_28273;
var inst_28275 = (0);
var state_28310__$1 = (function (){var statearr_28313 = state_28310;
(statearr_28313[(7)] = inst_28275);

(statearr_28313[(8)] = inst_28274);

return statearr_28313;
})();
var statearr_28314_28342 = state_28310__$1;
(statearr_28314_28342[(2)] = null);

(statearr_28314_28342[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_28311 === (4))){
var inst_28278 = (state_28310[(9)]);
var inst_28278__$1 = (state_28310[(2)]);
var inst_28279 = (inst_28278__$1 == null);
var inst_28280 = cljs.core.not(inst_28279);
var state_28310__$1 = (function (){var statearr_28315 = state_28310;
(statearr_28315[(9)] = inst_28278__$1);

return statearr_28315;
})();
if(inst_28280){
var statearr_28316_28343 = state_28310__$1;
(statearr_28316_28343[(1)] = (5));

} else {
var statearr_28317_28344 = state_28310__$1;
(statearr_28317_28344[(1)] = (6));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_28311 === (15))){
var inst_28300 = (state_28310[(2)]);
var state_28310__$1 = state_28310;
var statearr_28318_28345 = state_28310__$1;
(statearr_28318_28345[(2)] = inst_28300);

(statearr_28318_28345[(1)] = (14));


return cljs.core.constant$keyword$127;
} else {
if((state_val_28311 === (13))){
var state_28310__$1 = state_28310;
var statearr_28319_28346 = state_28310__$1;
(statearr_28319_28346[(2)] = null);

(statearr_28319_28346[(1)] = (14));


return cljs.core.constant$keyword$127;
} else {
if((state_val_28311 === (6))){
var inst_28275 = (state_28310[(7)]);
var inst_28296 = (inst_28275 > (0));
var state_28310__$1 = state_28310;
if(cljs.core.truth_(inst_28296)){
var statearr_28320_28347 = state_28310__$1;
(statearr_28320_28347[(1)] = (12));

} else {
var statearr_28321_28348 = state_28310__$1;
(statearr_28321_28348[(1)] = (13));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_28311 === (3))){
var inst_28308 = (state_28310[(2)]);
var state_28310__$1 = state_28310;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28310__$1,inst_28308);
} else {
if((state_val_28311 === (12))){
var inst_28274 = (state_28310[(8)]);
var inst_28298 = cljs.core.vec(inst_28274);
var state_28310__$1 = state_28310;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28310__$1,(15),out,inst_28298);
} else {
if((state_val_28311 === (2))){
var state_28310__$1 = state_28310;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28310__$1,(4),ch);
} else {
if((state_val_28311 === (11))){
var inst_28290 = (state_28310[(2)]);
var inst_28291 = (new Array(n));
var inst_28274 = inst_28291;
var inst_28275 = (0);
var state_28310__$1 = (function (){var statearr_28322 = state_28310;
(statearr_28322[(7)] = inst_28275);

(statearr_28322[(8)] = inst_28274);

(statearr_28322[(10)] = inst_28290);

return statearr_28322;
})();
var statearr_28323_28349 = state_28310__$1;
(statearr_28323_28349[(2)] = null);

(statearr_28323_28349[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_28311 === (9))){
var inst_28274 = (state_28310[(8)]);
var inst_28288 = cljs.core.vec(inst_28274);
var state_28310__$1 = state_28310;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28310__$1,(11),out,inst_28288);
} else {
if((state_val_28311 === (5))){
var inst_28275 = (state_28310[(7)]);
var inst_28283 = (state_28310[(11)]);
var inst_28278 = (state_28310[(9)]);
var inst_28274 = (state_28310[(8)]);
var inst_28282 = (inst_28274[inst_28275] = inst_28278);
var inst_28283__$1 = (inst_28275 + (1));
var inst_28284 = (inst_28283__$1 < n);
var state_28310__$1 = (function (){var statearr_28324 = state_28310;
(statearr_28324[(11)] = inst_28283__$1);

(statearr_28324[(12)] = inst_28282);

return statearr_28324;
})();
if(cljs.core.truth_(inst_28284)){
var statearr_28325_28350 = state_28310__$1;
(statearr_28325_28350[(1)] = (8));

} else {
var statearr_28326_28351 = state_28310__$1;
(statearr_28326_28351[(1)] = (9));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_28311 === (14))){
var inst_28303 = (state_28310[(2)]);
var inst_28304 = cljs.core.async.close_BANG_(out);
var state_28310__$1 = (function (){var statearr_28328 = state_28310;
(statearr_28328[(13)] = inst_28303);

return statearr_28328;
})();
var statearr_28329_28352 = state_28310__$1;
(statearr_28329_28352[(2)] = inst_28304);

(statearr_28329_28352[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_28311 === (10))){
var inst_28294 = (state_28310[(2)]);
var state_28310__$1 = state_28310;
var statearr_28330_28353 = state_28310__$1;
(statearr_28330_28353[(2)] = inst_28294);

(statearr_28330_28353[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_28311 === (8))){
var inst_28283 = (state_28310[(11)]);
var inst_28274 = (state_28310[(8)]);
var tmp28327 = inst_28274;
var inst_28274__$1 = tmp28327;
var inst_28275 = inst_28283;
var state_28310__$1 = (function (){var statearr_28331 = state_28310;
(statearr_28331[(7)] = inst_28275);

(statearr_28331[(8)] = inst_28274__$1);

return statearr_28331;
})();
var statearr_28332_28354 = state_28310__$1;
(statearr_28332_28354[(2)] = null);

(statearr_28332_28354[(1)] = (2));


return cljs.core.constant$keyword$127;
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
});})(c__12182__auto___28340,out))
;
return ((function (switch__12167__auto__,c__12182__auto___28340,out){
return (function() {
var state_machine__12168__auto__ = null;
var state_machine__12168__auto____0 = (function (){
var statearr_28336 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28336[(0)] = state_machine__12168__auto__);

(statearr_28336[(1)] = (1));

return statearr_28336;
});
var state_machine__12168__auto____1 = (function (state_28310){
while(true){
var ret_value__12169__auto__ = (function (){try{while(true){
var result__12170__auto__ = switch__12167__auto__(state_28310);
if(cljs.core.keyword_identical_QMARK_(result__12170__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12170__auto__;
}
break;
}
}catch (e28337){if((e28337 instanceof Object)){
var ex__12171__auto__ = e28337;
var statearr_28338_28355 = state_28310;
(statearr_28338_28355[(5)] = ex__12171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28310);

return cljs.core.constant$keyword$127;
} else {
throw e28337;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12169__auto__,cljs.core.constant$keyword$127)){
var G__28356 = state_28310;
state_28310 = G__28356;
continue;
} else {
return ret_value__12169__auto__;
}
break;
}
});
state_machine__12168__auto__ = function(state_28310){
switch(arguments.length){
case 0:
return state_machine__12168__auto____0.call(this);
case 1:
return state_machine__12168__auto____1.call(this,state_28310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12168__auto____0;
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12168__auto____1;
return state_machine__12168__auto__;
})()
;})(switch__12167__auto__,c__12182__auto___28340,out))
})();
var state__12184__auto__ = (function (){var statearr_28339 = (function (){return (f__12183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12183__auto__.cljs$core$IFn$_invoke$arity$0() : f__12183__auto__.call(null));
})();
(statearr_28339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12182__auto___28340);

return statearr_28339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12184__auto__);
});})(c__12182__auto___28340,out))
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
var c__12182__auto___28504 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12182__auto___28504,out){
return (function (){
var f__12183__auto__ = (function (){var switch__12167__auto__ = ((function (c__12182__auto___28504,out){
return (function (state_28473){
var state_val_28474 = (state_28473[(1)]);
if((state_val_28474 === (7))){
var inst_28469 = (state_28473[(2)]);
var state_28473__$1 = state_28473;
var statearr_28475_28505 = state_28473__$1;
(statearr_28475_28505[(2)] = inst_28469);

(statearr_28475_28505[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_28474 === (1))){
var inst_28432 = [];
var inst_28433 = inst_28432;
var inst_28434 = cljs.core.constant$keyword$192;
var state_28473__$1 = (function (){var statearr_28476 = state_28473;
(statearr_28476[(7)] = inst_28433);

(statearr_28476[(8)] = inst_28434);

return statearr_28476;
})();
var statearr_28477_28506 = state_28473__$1;
(statearr_28477_28506[(2)] = null);

(statearr_28477_28506[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_28474 === (4))){
var inst_28437 = (state_28473[(9)]);
var inst_28437__$1 = (state_28473[(2)]);
var inst_28438 = (inst_28437__$1 == null);
var inst_28439 = cljs.core.not(inst_28438);
var state_28473__$1 = (function (){var statearr_28478 = state_28473;
(statearr_28478[(9)] = inst_28437__$1);

return statearr_28478;
})();
if(inst_28439){
var statearr_28479_28507 = state_28473__$1;
(statearr_28479_28507[(1)] = (5));

} else {
var statearr_28480_28508 = state_28473__$1;
(statearr_28480_28508[(1)] = (6));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_28474 === (15))){
var inst_28463 = (state_28473[(2)]);
var state_28473__$1 = state_28473;
var statearr_28481_28509 = state_28473__$1;
(statearr_28481_28509[(2)] = inst_28463);

(statearr_28481_28509[(1)] = (14));


return cljs.core.constant$keyword$127;
} else {
if((state_val_28474 === (13))){
var state_28473__$1 = state_28473;
var statearr_28482_28510 = state_28473__$1;
(statearr_28482_28510[(2)] = null);

(statearr_28482_28510[(1)] = (14));


return cljs.core.constant$keyword$127;
} else {
if((state_val_28474 === (6))){
var inst_28433 = (state_28473[(7)]);
var inst_28458 = inst_28433.length;
var inst_28459 = (inst_28458 > (0));
var state_28473__$1 = state_28473;
if(cljs.core.truth_(inst_28459)){
var statearr_28483_28511 = state_28473__$1;
(statearr_28483_28511[(1)] = (12));

} else {
var statearr_28484_28512 = state_28473__$1;
(statearr_28484_28512[(1)] = (13));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_28474 === (3))){
var inst_28471 = (state_28473[(2)]);
var state_28473__$1 = state_28473;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28473__$1,inst_28471);
} else {
if((state_val_28474 === (12))){
var inst_28433 = (state_28473[(7)]);
var inst_28461 = cljs.core.vec(inst_28433);
var state_28473__$1 = state_28473;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28473__$1,(15),out,inst_28461);
} else {
if((state_val_28474 === (2))){
var state_28473__$1 = state_28473;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28473__$1,(4),ch);
} else {
if((state_val_28474 === (11))){
var inst_28441 = (state_28473[(10)]);
var inst_28437 = (state_28473[(9)]);
var inst_28451 = (state_28473[(2)]);
var inst_28452 = [];
var inst_28453 = inst_28452.push(inst_28437);
var inst_28433 = inst_28452;
var inst_28434 = inst_28441;
var state_28473__$1 = (function (){var statearr_28485 = state_28473;
(statearr_28485[(7)] = inst_28433);

(statearr_28485[(8)] = inst_28434);

(statearr_28485[(11)] = inst_28451);

(statearr_28485[(12)] = inst_28453);

return statearr_28485;
})();
var statearr_28486_28513 = state_28473__$1;
(statearr_28486_28513[(2)] = null);

(statearr_28486_28513[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_28474 === (9))){
var inst_28433 = (state_28473[(7)]);
var inst_28449 = cljs.core.vec(inst_28433);
var state_28473__$1 = state_28473;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28473__$1,(11),out,inst_28449);
} else {
if((state_val_28474 === (5))){
var inst_28434 = (state_28473[(8)]);
var inst_28441 = (state_28473[(10)]);
var inst_28437 = (state_28473[(9)]);
var inst_28441__$1 = (function (){var G__28487 = inst_28437;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28487) : f.call(null,G__28487));
})();
var inst_28442 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28441__$1,inst_28434);
var inst_28443 = cljs.core.keyword_identical_QMARK_(inst_28434,cljs.core.constant$keyword$192);
var inst_28444 = (inst_28442) || (inst_28443);
var state_28473__$1 = (function (){var statearr_28488 = state_28473;
(statearr_28488[(10)] = inst_28441__$1);

return statearr_28488;
})();
if(cljs.core.truth_(inst_28444)){
var statearr_28489_28514 = state_28473__$1;
(statearr_28489_28514[(1)] = (8));

} else {
var statearr_28490_28515 = state_28473__$1;
(statearr_28490_28515[(1)] = (9));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_28474 === (14))){
var inst_28466 = (state_28473[(2)]);
var inst_28467 = cljs.core.async.close_BANG_(out);
var state_28473__$1 = (function (){var statearr_28492 = state_28473;
(statearr_28492[(13)] = inst_28466);

return statearr_28492;
})();
var statearr_28493_28516 = state_28473__$1;
(statearr_28493_28516[(2)] = inst_28467);

(statearr_28493_28516[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_28474 === (10))){
var inst_28456 = (state_28473[(2)]);
var state_28473__$1 = state_28473;
var statearr_28494_28517 = state_28473__$1;
(statearr_28494_28517[(2)] = inst_28456);

(statearr_28494_28517[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_28474 === (8))){
var inst_28433 = (state_28473[(7)]);
var inst_28441 = (state_28473[(10)]);
var inst_28437 = (state_28473[(9)]);
var inst_28446 = inst_28433.push(inst_28437);
var tmp28491 = inst_28433;
var inst_28433__$1 = tmp28491;
var inst_28434 = inst_28441;
var state_28473__$1 = (function (){var statearr_28495 = state_28473;
(statearr_28495[(7)] = inst_28433__$1);

(statearr_28495[(8)] = inst_28434);

(statearr_28495[(14)] = inst_28446);

return statearr_28495;
})();
var statearr_28496_28518 = state_28473__$1;
(statearr_28496_28518[(2)] = null);

(statearr_28496_28518[(1)] = (2));


return cljs.core.constant$keyword$127;
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
});})(c__12182__auto___28504,out))
;
return ((function (switch__12167__auto__,c__12182__auto___28504,out){
return (function() {
var state_machine__12168__auto__ = null;
var state_machine__12168__auto____0 = (function (){
var statearr_28500 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28500[(0)] = state_machine__12168__auto__);

(statearr_28500[(1)] = (1));

return statearr_28500;
});
var state_machine__12168__auto____1 = (function (state_28473){
while(true){
var ret_value__12169__auto__ = (function (){try{while(true){
var result__12170__auto__ = switch__12167__auto__(state_28473);
if(cljs.core.keyword_identical_QMARK_(result__12170__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12170__auto__;
}
break;
}
}catch (e28501){if((e28501 instanceof Object)){
var ex__12171__auto__ = e28501;
var statearr_28502_28519 = state_28473;
(statearr_28502_28519[(5)] = ex__12171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28473);

return cljs.core.constant$keyword$127;
} else {
throw e28501;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12169__auto__,cljs.core.constant$keyword$127)){
var G__28520 = state_28473;
state_28473 = G__28520;
continue;
} else {
return ret_value__12169__auto__;
}
break;
}
});
state_machine__12168__auto__ = function(state_28473){
switch(arguments.length){
case 0:
return state_machine__12168__auto____0.call(this);
case 1:
return state_machine__12168__auto____1.call(this,state_28473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12168__auto____0;
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12168__auto____1;
return state_machine__12168__auto__;
})()
;})(switch__12167__auto__,c__12182__auto___28504,out))
})();
var state__12184__auto__ = (function (){var statearr_28503 = (function (){return (f__12183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12183__auto__.cljs$core$IFn$_invoke$arity$0() : f__12183__auto__.call(null));
})();
(statearr_28503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12182__auto___28504);

return statearr_28503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12184__auto__);
});})(c__12182__auto___28504,out))
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
