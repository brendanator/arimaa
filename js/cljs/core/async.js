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
if(typeof cljs.core.async.t24518 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24518 = (function (f,fn_handler,meta24519){
this.f = f;
this.fn_handler = fn_handler;
this.meta24519 = meta24519;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24518.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24518.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t24518.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t24518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24520){
var self__ = this;
var _24520__$1 = this;
return self__.meta24519;
});

cljs.core.async.t24518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24520,meta24519__$1){
var self__ = this;
var _24520__$1 = this;
return (new cljs.core.async.t24518(self__.f,self__.fn_handler,meta24519__$1));
});

cljs.core.async.t24518.cljs$lang$type = true;

cljs.core.async.t24518.cljs$lang$ctorStr = "cljs.core.async/t24518";

cljs.core.async.t24518.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core.async/t24518");
});

cljs.core.async.__GT_t24518 = (function __GT_t24518(f__$1,fn_handler__$1,meta24519){
return (new cljs.core.async.t24518(f__$1,fn_handler__$1,meta24519));
});

}

return (new cljs.core.async.t24518(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,20,cljs.core.constant$keyword$9,16,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,13,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
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
var G__24522 = buff;
if(G__24522){
var bit__4412__auto__ = null;
if(cljs.core.truth_((function (){var or__3731__auto__ = bit__4412__auto__;
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
return G__24522.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__24522.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24522);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24522);
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
var val_24539 = (function (){var G__24536 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24536) : cljs.core.deref.call(null,G__24536));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__24537_24540 = val_24539;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24537_24540) : fn1.call(null,G__24537_24540));
} else {
cljs.core.async.impl.dispatch.run(((function (val_24539,ret){
return (function (){
var G__24538 = val_24539;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24538) : fn1.call(null,G__24538));
});})(val_24539,ret))
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
var G__24549 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24549) : cljs.core.deref.call(null,G__24549));
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
var ret = (function (){var G__24550 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24550) : cljs.core.deref.call(null,G__24550));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__24551_24553 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24551_24553) : fn1.call(null,G__24551_24553));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__24552 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24552) : fn1.call(null,G__24552));
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
var n__4618__auto___24554 = n;
var x_24555 = (0);
while(true){
if((x_24555 < n__4618__auto___24554)){
(a[x_24555] = (0));

var G__24556 = (x_24555 + (1));
x_24555 = G__24556;
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

var G__24557 = (i + (1));
i = G__24557;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__24565 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24565) : cljs.core.atom.call(null,G__24565));
})();
if(typeof cljs.core.async.t24566 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24566 = (function (flag,alt_flag,meta24567){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24567 = meta24567;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24566.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24566.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__24569 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24569) : cljs.core.deref.call(null,G__24569));
});})(flag))
;

cljs.core.async.t24566.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__24570_24572 = self__.flag;
var G__24571_24573 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24570_24572,G__24571_24573) : cljs.core.reset_BANG_.call(null,G__24570_24572,G__24571_24573));

return true;
});})(flag))
;

cljs.core.async.t24566.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24568){
var self__ = this;
var _24568__$1 = this;
return self__.meta24567;
});})(flag))
;

cljs.core.async.t24566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24568,meta24567__$1){
var self__ = this;
var _24568__$1 = this;
return (new cljs.core.async.t24566(self__.flag,self__.alt_flag,meta24567__$1));
});})(flag))
;

cljs.core.async.t24566.cljs$lang$type = true;

cljs.core.async.t24566.cljs$lang$ctorStr = "cljs.core.async/t24566";

cljs.core.async.t24566.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core.async/t24566");
});})(flag))
;

cljs.core.async.__GT_t24566 = ((function (flag){
return (function __GT_t24566(flag__$1,alt_flag__$1,meta24567){
return (new cljs.core.async.t24566(flag__$1,alt_flag__$1,meta24567));
});})(flag))
;

}

return (new cljs.core.async.t24566(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,15,cljs.core.constant$keyword$9,146,cljs.core.constant$keyword$10,5,cljs.core.constant$keyword$11,141,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t24577 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24577 = (function (cb,flag,alt_handler,meta24578){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24578 = meta24578;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24577.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24577.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t24577.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t24577.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24579){
var self__ = this;
var _24579__$1 = this;
return self__.meta24578;
});

cljs.core.async.t24577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24579,meta24578__$1){
var self__ = this;
var _24579__$1 = this;
return (new cljs.core.async.t24577(self__.cb,self__.flag,self__.alt_handler,meta24578__$1));
});

cljs.core.async.t24577.cljs$lang$type = true;

cljs.core.async.t24577.cljs$lang$ctorStr = "cljs.core.async/t24577";

cljs.core.async.t24577.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core.async/t24577");
});

cljs.core.async.__GT_t24577 = (function __GT_t24577(cb__$1,flag__$1,alt_handler__$1,meta24578){
return (new cljs.core.async.t24577(cb__$1,flag__$1,alt_handler__$1,meta24578));
});

}

return (new cljs.core.async.t24577(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,11,cljs.core.constant$keyword$9,154,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,149,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
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
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__24587 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__24587) : port.call(null,G__24587));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__24588 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__24588) : port.call(null,G__24588));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24580_SHARP_){
var G__24589 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24580_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24589) : fret.call(null,G__24589));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24581_SHARP_){
var G__24590 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24581_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24590) : fret.call(null,G__24590));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24591 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24591) : cljs.core.deref.call(null,G__24591));
})(),(function (){var or__3731__auto__ = wport;
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24592 = (i + (1));
i = G__24592;
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
var alts_BANG___delegate = function (ports,p__24593){
var map__24595 = p__24593;
var map__24595__$1 = ((cljs.core.seq_QMARK_(map__24595))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24595):map__24595);
var opts = map__24595__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__24593 = null;
if (arguments.length > 1) {
  p__24593 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__24593);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24596){
var ports = cljs.core.first(arglist__24596);
var p__24593 = cljs.core.rest(arglist__24596);
return alts_BANG___delegate(ports,p__24593);
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
var c__12070__auto___24694 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12070__auto___24694){
return (function (){
var f__12071__auto__ = (function (){var switch__12055__auto__ = ((function (c__12070__auto___24694){
return (function (state_24670){
var state_val_24671 = (state_24670[(1)]);
if((state_val_24671 === (7))){
var inst_24666 = (state_24670[(2)]);
var state_24670__$1 = state_24670;
var statearr_24672_24695 = state_24670__$1;
(statearr_24672_24695[(2)] = inst_24666);

(statearr_24672_24695[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_24671 === (1))){
var state_24670__$1 = state_24670;
var statearr_24673_24696 = state_24670__$1;
(statearr_24673_24696[(2)] = null);

(statearr_24673_24696[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_24671 === (4))){
var inst_24649 = (state_24670[(7)]);
var inst_24649__$1 = (state_24670[(2)]);
var inst_24650 = (inst_24649__$1 == null);
var state_24670__$1 = (function (){var statearr_24674 = state_24670;
(statearr_24674[(7)] = inst_24649__$1);

return statearr_24674;
})();
if(cljs.core.truth_(inst_24650)){
var statearr_24675_24697 = state_24670__$1;
(statearr_24675_24697[(1)] = (5));

} else {
var statearr_24676_24698 = state_24670__$1;
(statearr_24676_24698[(1)] = (6));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_24671 === (13))){
var state_24670__$1 = state_24670;
var statearr_24677_24699 = state_24670__$1;
(statearr_24677_24699[(2)] = null);

(statearr_24677_24699[(1)] = (14));


return cljs.core.constant$keyword$127;
} else {
if((state_val_24671 === (6))){
var inst_24649 = (state_24670[(7)]);
var state_24670__$1 = state_24670;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24670__$1,(11),to,inst_24649);
} else {
if((state_val_24671 === (3))){
var inst_24668 = (state_24670[(2)]);
var state_24670__$1 = state_24670;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24670__$1,inst_24668);
} else {
if((state_val_24671 === (12))){
var state_24670__$1 = state_24670;
var statearr_24678_24700 = state_24670__$1;
(statearr_24678_24700[(2)] = null);

(statearr_24678_24700[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_24671 === (2))){
var state_24670__$1 = state_24670;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24670__$1,(4),from);
} else {
if((state_val_24671 === (11))){
var inst_24659 = (state_24670[(2)]);
var state_24670__$1 = state_24670;
if(cljs.core.truth_(inst_24659)){
var statearr_24679_24701 = state_24670__$1;
(statearr_24679_24701[(1)] = (12));

} else {
var statearr_24680_24702 = state_24670__$1;
(statearr_24680_24702[(1)] = (13));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_24671 === (9))){
var state_24670__$1 = state_24670;
var statearr_24681_24703 = state_24670__$1;
(statearr_24681_24703[(2)] = null);

(statearr_24681_24703[(1)] = (10));


return cljs.core.constant$keyword$127;
} else {
if((state_val_24671 === (5))){
var state_24670__$1 = state_24670;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24682_24704 = state_24670__$1;
(statearr_24682_24704[(1)] = (8));

} else {
var statearr_24683_24705 = state_24670__$1;
(statearr_24683_24705[(1)] = (9));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_24671 === (14))){
var inst_24664 = (state_24670[(2)]);
var state_24670__$1 = state_24670;
var statearr_24684_24706 = state_24670__$1;
(statearr_24684_24706[(2)] = inst_24664);

(statearr_24684_24706[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_24671 === (10))){
var inst_24656 = (state_24670[(2)]);
var state_24670__$1 = state_24670;
var statearr_24685_24707 = state_24670__$1;
(statearr_24685_24707[(2)] = inst_24656);

(statearr_24685_24707[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_24671 === (8))){
var inst_24653 = cljs.core.async.close_BANG_(to);
var state_24670__$1 = state_24670;
var statearr_24686_24708 = state_24670__$1;
(statearr_24686_24708[(2)] = inst_24653);

(statearr_24686_24708[(1)] = (10));


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
});})(c__12070__auto___24694))
;
return ((function (switch__12055__auto__,c__12070__auto___24694){
return (function() {
var state_machine__12056__auto__ = null;
var state_machine__12056__auto____0 = (function (){
var statearr_24690 = [null,null,null,null,null,null,null,null];
(statearr_24690[(0)] = state_machine__12056__auto__);

(statearr_24690[(1)] = (1));

return statearr_24690;
});
var state_machine__12056__auto____1 = (function (state_24670){
while(true){
var ret_value__12057__auto__ = (function (){try{while(true){
var result__12058__auto__ = switch__12055__auto__(state_24670);
if(cljs.core.keyword_identical_QMARK_(result__12058__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12058__auto__;
}
break;
}
}catch (e24691){if((e24691 instanceof Object)){
var ex__12059__auto__ = e24691;
var statearr_24692_24709 = state_24670;
(statearr_24692_24709[(5)] = ex__12059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24670);

return cljs.core.constant$keyword$127;
} else {
throw e24691;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12057__auto__,cljs.core.constant$keyword$127)){
var G__24710 = state_24670;
state_24670 = G__24710;
continue;
} else {
return ret_value__12057__auto__;
}
break;
}
});
state_machine__12056__auto__ = function(state_24670){
switch(arguments.length){
case 0:
return state_machine__12056__auto____0.call(this);
case 1:
return state_machine__12056__auto____1.call(this,state_24670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12056__auto____0;
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12056__auto____1;
return state_machine__12056__auto__;
})()
;})(switch__12055__auto__,c__12070__auto___24694))
})();
var state__12072__auto__ = (function (){var statearr_24693 = (function (){return (f__12071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12071__auto__.cljs$core$IFn$_invoke$arity$0() : f__12071__auto__.call(null));
})();
(statearr_24693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12070__auto___24694);

return statearr_24693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12072__auto__);
});})(c__12070__auto___24694))
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
return (function (p__24896){
var vec__24897 = p__24896;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24897,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24897,(1),null);
var job = vec__24897;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__12070__auto___25081 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12070__auto___25081,res,vec__24897,v,p,job,jobs,results){
return (function (){
var f__12071__auto__ = (function (){var switch__12055__auto__ = ((function (c__12070__auto___25081,res,vec__24897,v,p,job,jobs,results){
return (function (state_24902){
var state_val_24903 = (state_24902[(1)]);
if((state_val_24903 === (2))){
var inst_24899 = (state_24902[(2)]);
var inst_24900 = cljs.core.async.close_BANG_(res);
var state_24902__$1 = (function (){var statearr_24904 = state_24902;
(statearr_24904[(7)] = inst_24899);

return statearr_24904;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24902__$1,inst_24900);
} else {
if((state_val_24903 === (1))){
var state_24902__$1 = state_24902;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24902__$1,(2),res,v);
} else {
return null;
}
}
});})(c__12070__auto___25081,res,vec__24897,v,p,job,jobs,results))
;
return ((function (switch__12055__auto__,c__12070__auto___25081,res,vec__24897,v,p,job,jobs,results){
return (function() {
var state_machine__12056__auto__ = null;
var state_machine__12056__auto____0 = (function (){
var statearr_24908 = [null,null,null,null,null,null,null,null];
(statearr_24908[(0)] = state_machine__12056__auto__);

(statearr_24908[(1)] = (1));

return statearr_24908;
});
var state_machine__12056__auto____1 = (function (state_24902){
while(true){
var ret_value__12057__auto__ = (function (){try{while(true){
var result__12058__auto__ = switch__12055__auto__(state_24902);
if(cljs.core.keyword_identical_QMARK_(result__12058__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12058__auto__;
}
break;
}
}catch (e24909){if((e24909 instanceof Object)){
var ex__12059__auto__ = e24909;
var statearr_24910_25082 = state_24902;
(statearr_24910_25082[(5)] = ex__12059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24902);

return cljs.core.constant$keyword$127;
} else {
throw e24909;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12057__auto__,cljs.core.constant$keyword$127)){
var G__25083 = state_24902;
state_24902 = G__25083;
continue;
} else {
return ret_value__12057__auto__;
}
break;
}
});
state_machine__12056__auto__ = function(state_24902){
switch(arguments.length){
case 0:
return state_machine__12056__auto____0.call(this);
case 1:
return state_machine__12056__auto____1.call(this,state_24902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12056__auto____0;
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12056__auto____1;
return state_machine__12056__auto__;
})()
;})(switch__12055__auto__,c__12070__auto___25081,res,vec__24897,v,p,job,jobs,results))
})();
var state__12072__auto__ = (function (){var statearr_24911 = (function (){return (f__12071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12071__auto__.cljs$core$IFn$_invoke$arity$0() : f__12071__auto__.call(null));
})();
(statearr_24911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12070__auto___25081);

return statearr_24911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12072__auto__);
});})(c__12070__auto___25081,res,vec__24897,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24912){
var vec__24913 = p__24912;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24913,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24913,(1),null);
var job = vec__24913;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__24914_25084 = v;
var G__24915_25085 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__24914_25084,G__24915_25085) : xf.call(null,G__24914_25084,G__24915_25085));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4618__auto___25086 = n;
var __25087 = (0);
while(true){
if((__25087 < n__4618__auto___25086)){
var G__24916_25088 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24916_25088) {
case "async":
var c__12070__auto___25090 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__25087,c__12070__auto___25090,G__24916_25088,n__4618__auto___25086,jobs,results,process,async){
return (function (){
var f__12071__auto__ = (function (){var switch__12055__auto__ = ((function (__25087,c__12070__auto___25090,G__24916_25088,n__4618__auto___25086,jobs,results,process,async){
return (function (state_24929){
var state_val_24930 = (state_24929[(1)]);
if((state_val_24930 === (7))){
var inst_24925 = (state_24929[(2)]);
var state_24929__$1 = state_24929;
var statearr_24931_25091 = state_24929__$1;
(statearr_24931_25091[(2)] = inst_24925);

(statearr_24931_25091[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_24930 === (6))){
var state_24929__$1 = state_24929;
var statearr_24932_25092 = state_24929__$1;
(statearr_24932_25092[(2)] = null);

(statearr_24932_25092[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_24930 === (5))){
var state_24929__$1 = state_24929;
var statearr_24933_25093 = state_24929__$1;
(statearr_24933_25093[(2)] = null);

(statearr_24933_25093[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_24930 === (4))){
var inst_24919 = (state_24929[(2)]);
var inst_24920 = async(inst_24919);
var state_24929__$1 = state_24929;
if(cljs.core.truth_(inst_24920)){
var statearr_24934_25094 = state_24929__$1;
(statearr_24934_25094[(1)] = (5));

} else {
var statearr_24935_25095 = state_24929__$1;
(statearr_24935_25095[(1)] = (6));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_24930 === (3))){
var inst_24927 = (state_24929[(2)]);
var state_24929__$1 = state_24929;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24929__$1,inst_24927);
} else {
if((state_val_24930 === (2))){
var state_24929__$1 = state_24929;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24929__$1,(4),jobs);
} else {
if((state_val_24930 === (1))){
var state_24929__$1 = state_24929;
var statearr_24936_25096 = state_24929__$1;
(statearr_24936_25096[(2)] = null);

(statearr_24936_25096[(1)] = (2));


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
});})(__25087,c__12070__auto___25090,G__24916_25088,n__4618__auto___25086,jobs,results,process,async))
;
return ((function (__25087,switch__12055__auto__,c__12070__auto___25090,G__24916_25088,n__4618__auto___25086,jobs,results,process,async){
return (function() {
var state_machine__12056__auto__ = null;
var state_machine__12056__auto____0 = (function (){
var statearr_24940 = [null,null,null,null,null,null,null];
(statearr_24940[(0)] = state_machine__12056__auto__);

(statearr_24940[(1)] = (1));

return statearr_24940;
});
var state_machine__12056__auto____1 = (function (state_24929){
while(true){
var ret_value__12057__auto__ = (function (){try{while(true){
var result__12058__auto__ = switch__12055__auto__(state_24929);
if(cljs.core.keyword_identical_QMARK_(result__12058__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12058__auto__;
}
break;
}
}catch (e24941){if((e24941 instanceof Object)){
var ex__12059__auto__ = e24941;
var statearr_24942_25097 = state_24929;
(statearr_24942_25097[(5)] = ex__12059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24929);

return cljs.core.constant$keyword$127;
} else {
throw e24941;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12057__auto__,cljs.core.constant$keyword$127)){
var G__25098 = state_24929;
state_24929 = G__25098;
continue;
} else {
return ret_value__12057__auto__;
}
break;
}
});
state_machine__12056__auto__ = function(state_24929){
switch(arguments.length){
case 0:
return state_machine__12056__auto____0.call(this);
case 1:
return state_machine__12056__auto____1.call(this,state_24929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12056__auto____0;
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12056__auto____1;
return state_machine__12056__auto__;
})()
;})(__25087,switch__12055__auto__,c__12070__auto___25090,G__24916_25088,n__4618__auto___25086,jobs,results,process,async))
})();
var state__12072__auto__ = (function (){var statearr_24943 = (function (){return (f__12071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12071__auto__.cljs$core$IFn$_invoke$arity$0() : f__12071__auto__.call(null));
})();
(statearr_24943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12070__auto___25090);

return statearr_24943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12072__auto__);
});})(__25087,c__12070__auto___25090,G__24916_25088,n__4618__auto___25086,jobs,results,process,async))
);


break;
case "compute":
var c__12070__auto___25099 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__25087,c__12070__auto___25099,G__24916_25088,n__4618__auto___25086,jobs,results,process,async){
return (function (){
var f__12071__auto__ = (function (){var switch__12055__auto__ = ((function (__25087,c__12070__auto___25099,G__24916_25088,n__4618__auto___25086,jobs,results,process,async){
return (function (state_24956){
var state_val_24957 = (state_24956[(1)]);
if((state_val_24957 === (7))){
var inst_24952 = (state_24956[(2)]);
var state_24956__$1 = state_24956;
var statearr_24958_25100 = state_24956__$1;
(statearr_24958_25100[(2)] = inst_24952);

(statearr_24958_25100[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_24957 === (6))){
var state_24956__$1 = state_24956;
var statearr_24959_25101 = state_24956__$1;
(statearr_24959_25101[(2)] = null);

(statearr_24959_25101[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_24957 === (5))){
var state_24956__$1 = state_24956;
var statearr_24960_25102 = state_24956__$1;
(statearr_24960_25102[(2)] = null);

(statearr_24960_25102[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_24957 === (4))){
var inst_24946 = (state_24956[(2)]);
var inst_24947 = process(inst_24946);
var state_24956__$1 = state_24956;
if(cljs.core.truth_(inst_24947)){
var statearr_24961_25103 = state_24956__$1;
(statearr_24961_25103[(1)] = (5));

} else {
var statearr_24962_25104 = state_24956__$1;
(statearr_24962_25104[(1)] = (6));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_24957 === (3))){
var inst_24954 = (state_24956[(2)]);
var state_24956__$1 = state_24956;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24956__$1,inst_24954);
} else {
if((state_val_24957 === (2))){
var state_24956__$1 = state_24956;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24956__$1,(4),jobs);
} else {
if((state_val_24957 === (1))){
var state_24956__$1 = state_24956;
var statearr_24963_25105 = state_24956__$1;
(statearr_24963_25105[(2)] = null);

(statearr_24963_25105[(1)] = (2));


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
});})(__25087,c__12070__auto___25099,G__24916_25088,n__4618__auto___25086,jobs,results,process,async))
;
return ((function (__25087,switch__12055__auto__,c__12070__auto___25099,G__24916_25088,n__4618__auto___25086,jobs,results,process,async){
return (function() {
var state_machine__12056__auto__ = null;
var state_machine__12056__auto____0 = (function (){
var statearr_24967 = [null,null,null,null,null,null,null];
(statearr_24967[(0)] = state_machine__12056__auto__);

(statearr_24967[(1)] = (1));

return statearr_24967;
});
var state_machine__12056__auto____1 = (function (state_24956){
while(true){
var ret_value__12057__auto__ = (function (){try{while(true){
var result__12058__auto__ = switch__12055__auto__(state_24956);
if(cljs.core.keyword_identical_QMARK_(result__12058__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12058__auto__;
}
break;
}
}catch (e24968){if((e24968 instanceof Object)){
var ex__12059__auto__ = e24968;
var statearr_24969_25106 = state_24956;
(statearr_24969_25106[(5)] = ex__12059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24956);

return cljs.core.constant$keyword$127;
} else {
throw e24968;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12057__auto__,cljs.core.constant$keyword$127)){
var G__25107 = state_24956;
state_24956 = G__25107;
continue;
} else {
return ret_value__12057__auto__;
}
break;
}
});
state_machine__12056__auto__ = function(state_24956){
switch(arguments.length){
case 0:
return state_machine__12056__auto____0.call(this);
case 1:
return state_machine__12056__auto____1.call(this,state_24956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12056__auto____0;
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12056__auto____1;
return state_machine__12056__auto__;
})()
;})(__25087,switch__12055__auto__,c__12070__auto___25099,G__24916_25088,n__4618__auto___25086,jobs,results,process,async))
})();
var state__12072__auto__ = (function (){var statearr_24970 = (function (){return (f__12071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12071__auto__.cljs$core$IFn$_invoke$arity$0() : f__12071__auto__.call(null));
})();
(statearr_24970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12070__auto___25099);

return statearr_24970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12072__auto__);
});})(__25087,c__12070__auto___25099,G__24916_25088,n__4618__auto___25086,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25108 = (__25087 + (1));
__25087 = G__25108;
continue;
} else {
}
break;
}

var c__12070__auto___25109 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12070__auto___25109,jobs,results,process,async){
return (function (){
var f__12071__auto__ = (function (){var switch__12055__auto__ = ((function (c__12070__auto___25109,jobs,results,process,async){
return (function (state_24992){
var state_val_24993 = (state_24992[(1)]);
if((state_val_24993 === (9))){
var inst_24985 = (state_24992[(2)]);
var state_24992__$1 = (function (){var statearr_24994 = state_24992;
(statearr_24994[(7)] = inst_24985);

return statearr_24994;
})();
var statearr_24995_25110 = state_24992__$1;
(statearr_24995_25110[(2)] = null);

(statearr_24995_25110[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_24993 === (8))){
var inst_24978 = (state_24992[(8)]);
var inst_24983 = (state_24992[(2)]);
var state_24992__$1 = (function (){var statearr_24996 = state_24992;
(statearr_24996[(9)] = inst_24983);

return statearr_24996;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24992__$1,(9),results,inst_24978);
} else {
if((state_val_24993 === (7))){
var inst_24988 = (state_24992[(2)]);
var state_24992__$1 = state_24992;
var statearr_24997_25111 = state_24992__$1;
(statearr_24997_25111[(2)] = inst_24988);

(statearr_24997_25111[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_24993 === (6))){
var inst_24973 = (state_24992[(10)]);
var inst_24978 = (state_24992[(8)]);
var inst_24978__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_24979 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24980 = [inst_24973,inst_24978__$1];
var inst_24981 = (new cljs.core.PersistentVector(null,2,(5),inst_24979,inst_24980,null));
var state_24992__$1 = (function (){var statearr_24998 = state_24992;
(statearr_24998[(8)] = inst_24978__$1);

return statearr_24998;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24992__$1,(8),jobs,inst_24981);
} else {
if((state_val_24993 === (5))){
var inst_24976 = cljs.core.async.close_BANG_(jobs);
var state_24992__$1 = state_24992;
var statearr_24999_25112 = state_24992__$1;
(statearr_24999_25112[(2)] = inst_24976);

(statearr_24999_25112[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_24993 === (4))){
var inst_24973 = (state_24992[(10)]);
var inst_24973__$1 = (state_24992[(2)]);
var inst_24974 = (inst_24973__$1 == null);
var state_24992__$1 = (function (){var statearr_25000 = state_24992;
(statearr_25000[(10)] = inst_24973__$1);

return statearr_25000;
})();
if(cljs.core.truth_(inst_24974)){
var statearr_25001_25113 = state_24992__$1;
(statearr_25001_25113[(1)] = (5));

} else {
var statearr_25002_25114 = state_24992__$1;
(statearr_25002_25114[(1)] = (6));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_24993 === (3))){
var inst_24990 = (state_24992[(2)]);
var state_24992__$1 = state_24992;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24992__$1,inst_24990);
} else {
if((state_val_24993 === (2))){
var state_24992__$1 = state_24992;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24992__$1,(4),from);
} else {
if((state_val_24993 === (1))){
var state_24992__$1 = state_24992;
var statearr_25003_25115 = state_24992__$1;
(statearr_25003_25115[(2)] = null);

(statearr_25003_25115[(1)] = (2));


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
});})(c__12070__auto___25109,jobs,results,process,async))
;
return ((function (switch__12055__auto__,c__12070__auto___25109,jobs,results,process,async){
return (function() {
var state_machine__12056__auto__ = null;
var state_machine__12056__auto____0 = (function (){
var statearr_25007 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25007[(0)] = state_machine__12056__auto__);

(statearr_25007[(1)] = (1));

return statearr_25007;
});
var state_machine__12056__auto____1 = (function (state_24992){
while(true){
var ret_value__12057__auto__ = (function (){try{while(true){
var result__12058__auto__ = switch__12055__auto__(state_24992);
if(cljs.core.keyword_identical_QMARK_(result__12058__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12058__auto__;
}
break;
}
}catch (e25008){if((e25008 instanceof Object)){
var ex__12059__auto__ = e25008;
var statearr_25009_25116 = state_24992;
(statearr_25009_25116[(5)] = ex__12059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24992);

return cljs.core.constant$keyword$127;
} else {
throw e25008;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12057__auto__,cljs.core.constant$keyword$127)){
var G__25117 = state_24992;
state_24992 = G__25117;
continue;
} else {
return ret_value__12057__auto__;
}
break;
}
});
state_machine__12056__auto__ = function(state_24992){
switch(arguments.length){
case 0:
return state_machine__12056__auto____0.call(this);
case 1:
return state_machine__12056__auto____1.call(this,state_24992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12056__auto____0;
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12056__auto____1;
return state_machine__12056__auto__;
})()
;})(switch__12055__auto__,c__12070__auto___25109,jobs,results,process,async))
})();
var state__12072__auto__ = (function (){var statearr_25010 = (function (){return (f__12071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12071__auto__.cljs$core$IFn$_invoke$arity$0() : f__12071__auto__.call(null));
})();
(statearr_25010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12070__auto___25109);

return statearr_25010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12072__auto__);
});})(c__12070__auto___25109,jobs,results,process,async))
);


var c__12070__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12070__auto__,jobs,results,process,async){
return (function (){
var f__12071__auto__ = (function (){var switch__12055__auto__ = ((function (c__12070__auto__,jobs,results,process,async){
return (function (state_25048){
var state_val_25049 = (state_25048[(1)]);
if((state_val_25049 === (7))){
var inst_25044 = (state_25048[(2)]);
var state_25048__$1 = state_25048;
var statearr_25050_25118 = state_25048__$1;
(statearr_25050_25118[(2)] = inst_25044);

(statearr_25050_25118[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25049 === (20))){
var state_25048__$1 = state_25048;
var statearr_25051_25119 = state_25048__$1;
(statearr_25051_25119[(2)] = null);

(statearr_25051_25119[(1)] = (21));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25049 === (1))){
var state_25048__$1 = state_25048;
var statearr_25052_25120 = state_25048__$1;
(statearr_25052_25120[(2)] = null);

(statearr_25052_25120[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25049 === (4))){
var inst_25013 = (state_25048[(7)]);
var inst_25013__$1 = (state_25048[(2)]);
var inst_25014 = (inst_25013__$1 == null);
var state_25048__$1 = (function (){var statearr_25053 = state_25048;
(statearr_25053[(7)] = inst_25013__$1);

return statearr_25053;
})();
if(cljs.core.truth_(inst_25014)){
var statearr_25054_25121 = state_25048__$1;
(statearr_25054_25121[(1)] = (5));

} else {
var statearr_25055_25122 = state_25048__$1;
(statearr_25055_25122[(1)] = (6));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_25049 === (15))){
var inst_25026 = (state_25048[(8)]);
var state_25048__$1 = state_25048;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25048__$1,(18),to,inst_25026);
} else {
if((state_val_25049 === (21))){
var inst_25039 = (state_25048[(2)]);
var state_25048__$1 = state_25048;
var statearr_25056_25123 = state_25048__$1;
(statearr_25056_25123[(2)] = inst_25039);

(statearr_25056_25123[(1)] = (13));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25049 === (13))){
var inst_25041 = (state_25048[(2)]);
var state_25048__$1 = (function (){var statearr_25057 = state_25048;
(statearr_25057[(9)] = inst_25041);

return statearr_25057;
})();
var statearr_25058_25124 = state_25048__$1;
(statearr_25058_25124[(2)] = null);

(statearr_25058_25124[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25049 === (6))){
var inst_25013 = (state_25048[(7)]);
var state_25048__$1 = state_25048;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25048__$1,(11),inst_25013);
} else {
if((state_val_25049 === (17))){
var inst_25034 = (state_25048[(2)]);
var state_25048__$1 = state_25048;
if(cljs.core.truth_(inst_25034)){
var statearr_25059_25125 = state_25048__$1;
(statearr_25059_25125[(1)] = (19));

} else {
var statearr_25060_25126 = state_25048__$1;
(statearr_25060_25126[(1)] = (20));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_25049 === (3))){
var inst_25046 = (state_25048[(2)]);
var state_25048__$1 = state_25048;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25048__$1,inst_25046);
} else {
if((state_val_25049 === (12))){
var inst_25023 = (state_25048[(10)]);
var state_25048__$1 = state_25048;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25048__$1,(14),inst_25023);
} else {
if((state_val_25049 === (2))){
var state_25048__$1 = state_25048;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25048__$1,(4),results);
} else {
if((state_val_25049 === (19))){
var state_25048__$1 = state_25048;
var statearr_25061_25127 = state_25048__$1;
(statearr_25061_25127[(2)] = null);

(statearr_25061_25127[(1)] = (12));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25049 === (11))){
var inst_25023 = (state_25048[(2)]);
var state_25048__$1 = (function (){var statearr_25062 = state_25048;
(statearr_25062[(10)] = inst_25023);

return statearr_25062;
})();
var statearr_25063_25128 = state_25048__$1;
(statearr_25063_25128[(2)] = null);

(statearr_25063_25128[(1)] = (12));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25049 === (9))){
var state_25048__$1 = state_25048;
var statearr_25064_25129 = state_25048__$1;
(statearr_25064_25129[(2)] = null);

(statearr_25064_25129[(1)] = (10));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25049 === (5))){
var state_25048__$1 = state_25048;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25065_25130 = state_25048__$1;
(statearr_25065_25130[(1)] = (8));

} else {
var statearr_25066_25131 = state_25048__$1;
(statearr_25066_25131[(1)] = (9));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_25049 === (14))){
var inst_25028 = (state_25048[(11)]);
var inst_25026 = (state_25048[(8)]);
var inst_25026__$1 = (state_25048[(2)]);
var inst_25027 = (inst_25026__$1 == null);
var inst_25028__$1 = cljs.core.not(inst_25027);
var state_25048__$1 = (function (){var statearr_25067 = state_25048;
(statearr_25067[(11)] = inst_25028__$1);

(statearr_25067[(8)] = inst_25026__$1);

return statearr_25067;
})();
if(inst_25028__$1){
var statearr_25068_25132 = state_25048__$1;
(statearr_25068_25132[(1)] = (15));

} else {
var statearr_25069_25133 = state_25048__$1;
(statearr_25069_25133[(1)] = (16));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_25049 === (16))){
var inst_25028 = (state_25048[(11)]);
var state_25048__$1 = state_25048;
var statearr_25070_25134 = state_25048__$1;
(statearr_25070_25134[(2)] = inst_25028);

(statearr_25070_25134[(1)] = (17));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25049 === (10))){
var inst_25020 = (state_25048[(2)]);
var state_25048__$1 = state_25048;
var statearr_25071_25135 = state_25048__$1;
(statearr_25071_25135[(2)] = inst_25020);

(statearr_25071_25135[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25049 === (18))){
var inst_25031 = (state_25048[(2)]);
var state_25048__$1 = state_25048;
var statearr_25072_25136 = state_25048__$1;
(statearr_25072_25136[(2)] = inst_25031);

(statearr_25072_25136[(1)] = (17));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25049 === (8))){
var inst_25017 = cljs.core.async.close_BANG_(to);
var state_25048__$1 = state_25048;
var statearr_25073_25137 = state_25048__$1;
(statearr_25073_25137[(2)] = inst_25017);

(statearr_25073_25137[(1)] = (10));


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
});})(c__12070__auto__,jobs,results,process,async))
;
return ((function (switch__12055__auto__,c__12070__auto__,jobs,results,process,async){
return (function() {
var state_machine__12056__auto__ = null;
var state_machine__12056__auto____0 = (function (){
var statearr_25077 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25077[(0)] = state_machine__12056__auto__);

(statearr_25077[(1)] = (1));

return statearr_25077;
});
var state_machine__12056__auto____1 = (function (state_25048){
while(true){
var ret_value__12057__auto__ = (function (){try{while(true){
var result__12058__auto__ = switch__12055__auto__(state_25048);
if(cljs.core.keyword_identical_QMARK_(result__12058__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12058__auto__;
}
break;
}
}catch (e25078){if((e25078 instanceof Object)){
var ex__12059__auto__ = e25078;
var statearr_25079_25138 = state_25048;
(statearr_25079_25138[(5)] = ex__12059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25048);

return cljs.core.constant$keyword$127;
} else {
throw e25078;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12057__auto__,cljs.core.constant$keyword$127)){
var G__25139 = state_25048;
state_25048 = G__25139;
continue;
} else {
return ret_value__12057__auto__;
}
break;
}
});
state_machine__12056__auto__ = function(state_25048){
switch(arguments.length){
case 0:
return state_machine__12056__auto____0.call(this);
case 1:
return state_machine__12056__auto____1.call(this,state_25048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12056__auto____0;
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12056__auto____1;
return state_machine__12056__auto__;
})()
;})(switch__12055__auto__,c__12070__auto__,jobs,results,process,async))
})();
var state__12072__auto__ = (function (){var statearr_25080 = (function (){return (f__12071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12071__auto__.cljs$core$IFn$_invoke$arity$0() : f__12071__auto__.call(null));
})();
(statearr_25080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12070__auto__);

return statearr_25080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12072__auto__);
});})(c__12070__auto__,jobs,results,process,async))
);

return c__12070__auto__;
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
var c__12070__auto___25262 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12070__auto___25262,tc,fc){
return (function (){
var f__12071__auto__ = (function (){var switch__12055__auto__ = ((function (c__12070__auto___25262,tc,fc){
return (function (state_25236){
var state_val_25237 = (state_25236[(1)]);
if((state_val_25237 === (7))){
var inst_25232 = (state_25236[(2)]);
var state_25236__$1 = state_25236;
var statearr_25238_25263 = state_25236__$1;
(statearr_25238_25263[(2)] = inst_25232);

(statearr_25238_25263[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25237 === (1))){
var state_25236__$1 = state_25236;
var statearr_25239_25264 = state_25236__$1;
(statearr_25239_25264[(2)] = null);

(statearr_25239_25264[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25237 === (4))){
var inst_25213 = (state_25236[(7)]);
var inst_25213__$1 = (state_25236[(2)]);
var inst_25214 = (inst_25213__$1 == null);
var state_25236__$1 = (function (){var statearr_25240 = state_25236;
(statearr_25240[(7)] = inst_25213__$1);

return statearr_25240;
})();
if(cljs.core.truth_(inst_25214)){
var statearr_25241_25265 = state_25236__$1;
(statearr_25241_25265[(1)] = (5));

} else {
var statearr_25242_25266 = state_25236__$1;
(statearr_25242_25266[(1)] = (6));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_25237 === (13))){
var state_25236__$1 = state_25236;
var statearr_25243_25267 = state_25236__$1;
(statearr_25243_25267[(2)] = null);

(statearr_25243_25267[(1)] = (14));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25237 === (6))){
var inst_25213 = (state_25236[(7)]);
var inst_25219 = (function (){var G__25244 = inst_25213;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__25244) : p.call(null,G__25244));
})();
var state_25236__$1 = state_25236;
if(cljs.core.truth_(inst_25219)){
var statearr_25245_25268 = state_25236__$1;
(statearr_25245_25268[(1)] = (9));

} else {
var statearr_25246_25269 = state_25236__$1;
(statearr_25246_25269[(1)] = (10));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_25237 === (3))){
var inst_25234 = (state_25236[(2)]);
var state_25236__$1 = state_25236;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25236__$1,inst_25234);
} else {
if((state_val_25237 === (12))){
var state_25236__$1 = state_25236;
var statearr_25247_25270 = state_25236__$1;
(statearr_25247_25270[(2)] = null);

(statearr_25247_25270[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25237 === (2))){
var state_25236__$1 = state_25236;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25236__$1,(4),ch);
} else {
if((state_val_25237 === (11))){
var inst_25213 = (state_25236[(7)]);
var inst_25223 = (state_25236[(2)]);
var state_25236__$1 = state_25236;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25236__$1,(8),inst_25223,inst_25213);
} else {
if((state_val_25237 === (9))){
var state_25236__$1 = state_25236;
var statearr_25248_25271 = state_25236__$1;
(statearr_25248_25271[(2)] = tc);

(statearr_25248_25271[(1)] = (11));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25237 === (5))){
var inst_25216 = cljs.core.async.close_BANG_(tc);
var inst_25217 = cljs.core.async.close_BANG_(fc);
var state_25236__$1 = (function (){var statearr_25249 = state_25236;
(statearr_25249[(8)] = inst_25216);

return statearr_25249;
})();
var statearr_25250_25272 = state_25236__$1;
(statearr_25250_25272[(2)] = inst_25217);

(statearr_25250_25272[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25237 === (14))){
var inst_25230 = (state_25236[(2)]);
var state_25236__$1 = state_25236;
var statearr_25251_25273 = state_25236__$1;
(statearr_25251_25273[(2)] = inst_25230);

(statearr_25251_25273[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25237 === (10))){
var state_25236__$1 = state_25236;
var statearr_25252_25274 = state_25236__$1;
(statearr_25252_25274[(2)] = fc);

(statearr_25252_25274[(1)] = (11));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25237 === (8))){
var inst_25225 = (state_25236[(2)]);
var state_25236__$1 = state_25236;
if(cljs.core.truth_(inst_25225)){
var statearr_25253_25275 = state_25236__$1;
(statearr_25253_25275[(1)] = (12));

} else {
var statearr_25254_25276 = state_25236__$1;
(statearr_25254_25276[(1)] = (13));

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
});})(c__12070__auto___25262,tc,fc))
;
return ((function (switch__12055__auto__,c__12070__auto___25262,tc,fc){
return (function() {
var state_machine__12056__auto__ = null;
var state_machine__12056__auto____0 = (function (){
var statearr_25258 = [null,null,null,null,null,null,null,null,null];
(statearr_25258[(0)] = state_machine__12056__auto__);

(statearr_25258[(1)] = (1));

return statearr_25258;
});
var state_machine__12056__auto____1 = (function (state_25236){
while(true){
var ret_value__12057__auto__ = (function (){try{while(true){
var result__12058__auto__ = switch__12055__auto__(state_25236);
if(cljs.core.keyword_identical_QMARK_(result__12058__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12058__auto__;
}
break;
}
}catch (e25259){if((e25259 instanceof Object)){
var ex__12059__auto__ = e25259;
var statearr_25260_25277 = state_25236;
(statearr_25260_25277[(5)] = ex__12059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25236);

return cljs.core.constant$keyword$127;
} else {
throw e25259;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12057__auto__,cljs.core.constant$keyword$127)){
var G__25278 = state_25236;
state_25236 = G__25278;
continue;
} else {
return ret_value__12057__auto__;
}
break;
}
});
state_machine__12056__auto__ = function(state_25236){
switch(arguments.length){
case 0:
return state_machine__12056__auto____0.call(this);
case 1:
return state_machine__12056__auto____1.call(this,state_25236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12056__auto____0;
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12056__auto____1;
return state_machine__12056__auto__;
})()
;})(switch__12055__auto__,c__12070__auto___25262,tc,fc))
})();
var state__12072__auto__ = (function (){var statearr_25261 = (function (){return (f__12071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12071__auto__.cljs$core$IFn$_invoke$arity$0() : f__12071__auto__.call(null));
})();
(statearr_25261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12070__auto___25262);

return statearr_25261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12072__auto__);
});})(c__12070__auto___25262,tc,fc))
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
var c__12070__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12070__auto__){
return (function (){
var f__12071__auto__ = (function (){var switch__12055__auto__ = ((function (c__12070__auto__){
return (function (state_25327){
var state_val_25328 = (state_25327[(1)]);
if((state_val_25328 === (7))){
var inst_25323 = (state_25327[(2)]);
var state_25327__$1 = state_25327;
var statearr_25329_25347 = state_25327__$1;
(statearr_25329_25347[(2)] = inst_25323);

(statearr_25329_25347[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25328 === (6))){
var inst_25316 = (state_25327[(7)]);
var inst_25313 = (state_25327[(8)]);
var inst_25320 = (function (){var G__25330 = inst_25313;
var G__25331 = inst_25316;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25330,G__25331) : f.call(null,G__25330,G__25331));
})();
var inst_25313__$1 = inst_25320;
var state_25327__$1 = (function (){var statearr_25332 = state_25327;
(statearr_25332[(8)] = inst_25313__$1);

return statearr_25332;
})();
var statearr_25333_25348 = state_25327__$1;
(statearr_25333_25348[(2)] = null);

(statearr_25333_25348[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25328 === (5))){
var inst_25313 = (state_25327[(8)]);
var state_25327__$1 = state_25327;
var statearr_25334_25349 = state_25327__$1;
(statearr_25334_25349[(2)] = inst_25313);

(statearr_25334_25349[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25328 === (4))){
var inst_25316 = (state_25327[(7)]);
var inst_25316__$1 = (state_25327[(2)]);
var inst_25317 = (inst_25316__$1 == null);
var state_25327__$1 = (function (){var statearr_25335 = state_25327;
(statearr_25335[(7)] = inst_25316__$1);

return statearr_25335;
})();
if(cljs.core.truth_(inst_25317)){
var statearr_25336_25350 = state_25327__$1;
(statearr_25336_25350[(1)] = (5));

} else {
var statearr_25337_25351 = state_25327__$1;
(statearr_25337_25351[(1)] = (6));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_25328 === (3))){
var inst_25325 = (state_25327[(2)]);
var state_25327__$1 = state_25327;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25327__$1,inst_25325);
} else {
if((state_val_25328 === (2))){
var state_25327__$1 = state_25327;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25327__$1,(4),ch);
} else {
if((state_val_25328 === (1))){
var inst_25313 = init;
var state_25327__$1 = (function (){var statearr_25338 = state_25327;
(statearr_25338[(8)] = inst_25313);

return statearr_25338;
})();
var statearr_25339_25352 = state_25327__$1;
(statearr_25339_25352[(2)] = null);

(statearr_25339_25352[(1)] = (2));


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
});})(c__12070__auto__))
;
return ((function (switch__12055__auto__,c__12070__auto__){
return (function() {
var state_machine__12056__auto__ = null;
var state_machine__12056__auto____0 = (function (){
var statearr_25343 = [null,null,null,null,null,null,null,null,null];
(statearr_25343[(0)] = state_machine__12056__auto__);

(statearr_25343[(1)] = (1));

return statearr_25343;
});
var state_machine__12056__auto____1 = (function (state_25327){
while(true){
var ret_value__12057__auto__ = (function (){try{while(true){
var result__12058__auto__ = switch__12055__auto__(state_25327);
if(cljs.core.keyword_identical_QMARK_(result__12058__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12058__auto__;
}
break;
}
}catch (e25344){if((e25344 instanceof Object)){
var ex__12059__auto__ = e25344;
var statearr_25345_25353 = state_25327;
(statearr_25345_25353[(5)] = ex__12059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25327);

return cljs.core.constant$keyword$127;
} else {
throw e25344;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12057__auto__,cljs.core.constant$keyword$127)){
var G__25354 = state_25327;
state_25327 = G__25354;
continue;
} else {
return ret_value__12057__auto__;
}
break;
}
});
state_machine__12056__auto__ = function(state_25327){
switch(arguments.length){
case 0:
return state_machine__12056__auto____0.call(this);
case 1:
return state_machine__12056__auto____1.call(this,state_25327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12056__auto____0;
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12056__auto____1;
return state_machine__12056__auto__;
})()
;})(switch__12055__auto__,c__12070__auto__))
})();
var state__12072__auto__ = (function (){var statearr_25346 = (function (){return (f__12071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12071__auto__.cljs$core$IFn$_invoke$arity$0() : f__12071__auto__.call(null));
})();
(statearr_25346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12070__auto__);

return statearr_25346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12072__auto__);
});})(c__12070__auto__))
);

return c__12070__auto__;
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
var c__12070__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12070__auto__){
return (function (){
var f__12071__auto__ = (function (){var switch__12055__auto__ = ((function (c__12070__auto__){
return (function (state_25431){
var state_val_25432 = (state_25431[(1)]);
if((state_val_25432 === (7))){
var inst_25413 = (state_25431[(2)]);
var state_25431__$1 = state_25431;
var statearr_25433_25456 = state_25431__$1;
(statearr_25433_25456[(2)] = inst_25413);

(statearr_25433_25456[(1)] = (6));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25432 === (1))){
var inst_25407 = cljs.core.seq(coll);
var inst_25408 = inst_25407;
var state_25431__$1 = (function (){var statearr_25434 = state_25431;
(statearr_25434[(7)] = inst_25408);

return statearr_25434;
})();
var statearr_25435_25457 = state_25431__$1;
(statearr_25435_25457[(2)] = null);

(statearr_25435_25457[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25432 === (4))){
var inst_25408 = (state_25431[(7)]);
var inst_25411 = cljs.core.first(inst_25408);
var state_25431__$1 = state_25431;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25431__$1,(7),ch,inst_25411);
} else {
if((state_val_25432 === (13))){
var inst_25425 = (state_25431[(2)]);
var state_25431__$1 = state_25431;
var statearr_25436_25458 = state_25431__$1;
(statearr_25436_25458[(2)] = inst_25425);

(statearr_25436_25458[(1)] = (10));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25432 === (6))){
var inst_25416 = (state_25431[(2)]);
var state_25431__$1 = state_25431;
if(cljs.core.truth_(inst_25416)){
var statearr_25437_25459 = state_25431__$1;
(statearr_25437_25459[(1)] = (8));

} else {
var statearr_25438_25460 = state_25431__$1;
(statearr_25438_25460[(1)] = (9));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_25432 === (3))){
var inst_25429 = (state_25431[(2)]);
var state_25431__$1 = state_25431;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25431__$1,inst_25429);
} else {
if((state_val_25432 === (12))){
var state_25431__$1 = state_25431;
var statearr_25439_25461 = state_25431__$1;
(statearr_25439_25461[(2)] = null);

(statearr_25439_25461[(1)] = (13));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25432 === (2))){
var inst_25408 = (state_25431[(7)]);
var state_25431__$1 = state_25431;
if(cljs.core.truth_(inst_25408)){
var statearr_25440_25462 = state_25431__$1;
(statearr_25440_25462[(1)] = (4));

} else {
var statearr_25441_25463 = state_25431__$1;
(statearr_25441_25463[(1)] = (5));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_25432 === (11))){
var inst_25422 = cljs.core.async.close_BANG_(ch);
var state_25431__$1 = state_25431;
var statearr_25442_25464 = state_25431__$1;
(statearr_25442_25464[(2)] = inst_25422);

(statearr_25442_25464[(1)] = (13));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25432 === (9))){
var state_25431__$1 = state_25431;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25443_25465 = state_25431__$1;
(statearr_25443_25465[(1)] = (11));

} else {
var statearr_25444_25466 = state_25431__$1;
(statearr_25444_25466[(1)] = (12));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_25432 === (5))){
var inst_25408 = (state_25431[(7)]);
var state_25431__$1 = state_25431;
var statearr_25445_25467 = state_25431__$1;
(statearr_25445_25467[(2)] = inst_25408);

(statearr_25445_25467[(1)] = (6));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25432 === (10))){
var inst_25427 = (state_25431[(2)]);
var state_25431__$1 = state_25431;
var statearr_25446_25468 = state_25431__$1;
(statearr_25446_25468[(2)] = inst_25427);

(statearr_25446_25468[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25432 === (8))){
var inst_25408 = (state_25431[(7)]);
var inst_25418 = cljs.core.next(inst_25408);
var inst_25408__$1 = inst_25418;
var state_25431__$1 = (function (){var statearr_25447 = state_25431;
(statearr_25447[(7)] = inst_25408__$1);

return statearr_25447;
})();
var statearr_25448_25469 = state_25431__$1;
(statearr_25448_25469[(2)] = null);

(statearr_25448_25469[(1)] = (2));


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
});})(c__12070__auto__))
;
return ((function (switch__12055__auto__,c__12070__auto__){
return (function() {
var state_machine__12056__auto__ = null;
var state_machine__12056__auto____0 = (function (){
var statearr_25452 = [null,null,null,null,null,null,null,null];
(statearr_25452[(0)] = state_machine__12056__auto__);

(statearr_25452[(1)] = (1));

return statearr_25452;
});
var state_machine__12056__auto____1 = (function (state_25431){
while(true){
var ret_value__12057__auto__ = (function (){try{while(true){
var result__12058__auto__ = switch__12055__auto__(state_25431);
if(cljs.core.keyword_identical_QMARK_(result__12058__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12058__auto__;
}
break;
}
}catch (e25453){if((e25453 instanceof Object)){
var ex__12059__auto__ = e25453;
var statearr_25454_25470 = state_25431;
(statearr_25454_25470[(5)] = ex__12059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25431);

return cljs.core.constant$keyword$127;
} else {
throw e25453;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12057__auto__,cljs.core.constant$keyword$127)){
var G__25471 = state_25431;
state_25431 = G__25471;
continue;
} else {
return ret_value__12057__auto__;
}
break;
}
});
state_machine__12056__auto__ = function(state_25431){
switch(arguments.length){
case 0:
return state_machine__12056__auto____0.call(this);
case 1:
return state_machine__12056__auto____1.call(this,state_25431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12056__auto____0;
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12056__auto____1;
return state_machine__12056__auto__;
})()
;})(switch__12055__auto__,c__12070__auto__))
})();
var state__12072__auto__ = (function (){var statearr_25455 = (function (){return (f__12071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12071__auto__.cljs$core$IFn$_invoke$arity$0() : f__12071__auto__.call(null));
})();
(statearr_25455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12070__auto__);

return statearr_25455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12072__auto__);
});})(c__12070__auto__))
);

return c__12070__auto__;
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

cljs.core.async.Mux = (function (){var obj25473 = {};
return obj25473;
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
return (function (){var or__3731__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__25477 = x__4375__auto__;
return goog.typeOf(G__25477);
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


cljs.core.async.Mult = (function (){var obj25479 = {};
return obj25479;
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
return (function (){var or__3731__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__25483 = x__4375__auto__;
return goog.typeOf(G__25483);
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
return (function (){var or__3731__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__25487 = x__4375__auto__;
return goog.typeOf(G__25487);
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
return (function (){var or__3731__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__25491 = x__4375__auto__;
return goog.typeOf(G__25491);
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
var cs = (function (){var G__25721 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25721) : cljs.core.atom.call(null,G__25721));
})();
var m = (function (){
if(typeof cljs.core.async.t25722 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25722 = (function (cs,ch,mult,meta25723){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25723 = meta25723;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25722.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t25722.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t25722.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t25722.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25725_25950 = self__.cs;
var G__25726_25951 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25725_25950,G__25726_25951) : cljs.core.reset_BANG_.call(null,G__25725_25950,G__25726_25951));

return null;
});})(cs))
;

cljs.core.async.t25722.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25722.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t25722.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25724){
var self__ = this;
var _25724__$1 = this;
return self__.meta25723;
});})(cs))
;

cljs.core.async.t25722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25724,meta25723__$1){
var self__ = this;
var _25724__$1 = this;
return (new cljs.core.async.t25722(self__.cs,self__.ch,self__.mult,meta25723__$1));
});})(cs))
;

cljs.core.async.t25722.cljs$lang$type = true;

cljs.core.async.t25722.cljs$lang$ctorStr = "cljs.core.async/t25722";

cljs.core.async.t25722.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core.async/t25722");
});})(cs))
;

cljs.core.async.__GT_t25722 = ((function (cs){
return (function __GT_t25722(cs__$1,ch__$1,mult__$1,meta25723){
return (new cljs.core.async.t25722(cs__$1,ch__$1,mult__$1,meta25723));
});})(cs))
;

}

return (new cljs.core.async.t25722(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,397,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,390,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__25727 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25727) : cljs.core.atom.call(null,G__25727));
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
var c__12070__auto___25952 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12070__auto___25952,cs,m,dchan,dctr,done){
return (function (){
var f__12071__auto__ = (function (){var switch__12055__auto__ = ((function (c__12070__auto___25952,cs,m,dchan,dctr,done){
return (function (state_25858){
var state_val_25859 = (state_25858[(1)]);
if((state_val_25859 === (7))){
var inst_25854 = (state_25858[(2)]);
var state_25858__$1 = state_25858;
var statearr_25860_25953 = state_25858__$1;
(statearr_25860_25953[(2)] = inst_25854);

(statearr_25860_25953[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (20))){
var inst_25759 = (state_25858[(7)]);
var inst_25769 = cljs.core.first(inst_25759);
var inst_25770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25769,(0),null);
var inst_25771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25769,(1),null);
var state_25858__$1 = (function (){var statearr_25861 = state_25858;
(statearr_25861[(8)] = inst_25770);

return statearr_25861;
})();
if(cljs.core.truth_(inst_25771)){
var statearr_25862_25954 = state_25858__$1;
(statearr_25862_25954[(1)] = (22));

} else {
var statearr_25863_25955 = state_25858__$1;
(statearr_25863_25955[(1)] = (23));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (27))){
var inst_25801 = (state_25858[(9)]);
var inst_25806 = (state_25858[(10)]);
var inst_25799 = (state_25858[(11)]);
var inst_25730 = (state_25858[(12)]);
var inst_25806__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25799,inst_25801);
var inst_25807 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25806__$1,inst_25730,done);
var state_25858__$1 = (function (){var statearr_25864 = state_25858;
(statearr_25864[(10)] = inst_25806__$1);

return statearr_25864;
})();
if(cljs.core.truth_(inst_25807)){
var statearr_25865_25956 = state_25858__$1;
(statearr_25865_25956[(1)] = (30));

} else {
var statearr_25866_25957 = state_25858__$1;
(statearr_25866_25957[(1)] = (31));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (1))){
var state_25858__$1 = state_25858;
var statearr_25867_25958 = state_25858__$1;
(statearr_25867_25958[(2)] = null);

(statearr_25867_25958[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (24))){
var inst_25759 = (state_25858[(7)]);
var inst_25776 = (state_25858[(2)]);
var inst_25777 = cljs.core.next(inst_25759);
var inst_25739 = inst_25777;
var inst_25740 = null;
var inst_25741 = (0);
var inst_25742 = (0);
var state_25858__$1 = (function (){var statearr_25868 = state_25858;
(statearr_25868[(13)] = inst_25740);

(statearr_25868[(14)] = inst_25741);

(statearr_25868[(15)] = inst_25739);

(statearr_25868[(16)] = inst_25742);

(statearr_25868[(17)] = inst_25776);

return statearr_25868;
})();
var statearr_25869_25959 = state_25858__$1;
(statearr_25869_25959[(2)] = null);

(statearr_25869_25959[(1)] = (8));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (39))){
var state_25858__$1 = state_25858;
var statearr_25873_25960 = state_25858__$1;
(statearr_25873_25960[(2)] = null);

(statearr_25873_25960[(1)] = (41));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (4))){
var inst_25730 = (state_25858[(12)]);
var inst_25730__$1 = (state_25858[(2)]);
var inst_25731 = (inst_25730__$1 == null);
var state_25858__$1 = (function (){var statearr_25874 = state_25858;
(statearr_25874[(12)] = inst_25730__$1);

return statearr_25874;
})();
if(cljs.core.truth_(inst_25731)){
var statearr_25875_25961 = state_25858__$1;
(statearr_25875_25961[(1)] = (5));

} else {
var statearr_25876_25962 = state_25858__$1;
(statearr_25876_25962[(1)] = (6));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (15))){
var inst_25740 = (state_25858[(13)]);
var inst_25741 = (state_25858[(14)]);
var inst_25739 = (state_25858[(15)]);
var inst_25742 = (state_25858[(16)]);
var inst_25755 = (state_25858[(2)]);
var inst_25756 = (inst_25742 + (1));
var tmp25870 = inst_25740;
var tmp25871 = inst_25741;
var tmp25872 = inst_25739;
var inst_25739__$1 = tmp25872;
var inst_25740__$1 = tmp25870;
var inst_25741__$1 = tmp25871;
var inst_25742__$1 = inst_25756;
var state_25858__$1 = (function (){var statearr_25877 = state_25858;
(statearr_25877[(13)] = inst_25740__$1);

(statearr_25877[(18)] = inst_25755);

(statearr_25877[(14)] = inst_25741__$1);

(statearr_25877[(15)] = inst_25739__$1);

(statearr_25877[(16)] = inst_25742__$1);

return statearr_25877;
})();
var statearr_25878_25963 = state_25858__$1;
(statearr_25878_25963[(2)] = null);

(statearr_25878_25963[(1)] = (8));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (21))){
var inst_25780 = (state_25858[(2)]);
var state_25858__$1 = state_25858;
var statearr_25882_25964 = state_25858__$1;
(statearr_25882_25964[(2)] = inst_25780);

(statearr_25882_25964[(1)] = (18));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (31))){
var inst_25806 = (state_25858[(10)]);
var inst_25810 = done(null);
var inst_25811 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25806);
var state_25858__$1 = (function (){var statearr_25883 = state_25858;
(statearr_25883[(19)] = inst_25810);

return statearr_25883;
})();
var statearr_25884_25965 = state_25858__$1;
(statearr_25884_25965[(2)] = inst_25811);

(statearr_25884_25965[(1)] = (32));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (32))){
var inst_25801 = (state_25858[(9)]);
var inst_25800 = (state_25858[(20)]);
var inst_25798 = (state_25858[(21)]);
var inst_25799 = (state_25858[(11)]);
var inst_25813 = (state_25858[(2)]);
var inst_25814 = (inst_25801 + (1));
var tmp25879 = inst_25800;
var tmp25880 = inst_25798;
var tmp25881 = inst_25799;
var inst_25798__$1 = tmp25880;
var inst_25799__$1 = tmp25881;
var inst_25800__$1 = tmp25879;
var inst_25801__$1 = inst_25814;
var state_25858__$1 = (function (){var statearr_25885 = state_25858;
(statearr_25885[(9)] = inst_25801__$1);

(statearr_25885[(20)] = inst_25800__$1);

(statearr_25885[(21)] = inst_25798__$1);

(statearr_25885[(22)] = inst_25813);

(statearr_25885[(11)] = inst_25799__$1);

return statearr_25885;
})();
var statearr_25886_25966 = state_25858__$1;
(statearr_25886_25966[(2)] = null);

(statearr_25886_25966[(1)] = (25));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (40))){
var inst_25826 = (state_25858[(23)]);
var inst_25830 = done(null);
var inst_25831 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25826);
var state_25858__$1 = (function (){var statearr_25887 = state_25858;
(statearr_25887[(24)] = inst_25830);

return statearr_25887;
})();
var statearr_25888_25967 = state_25858__$1;
(statearr_25888_25967[(2)] = inst_25831);

(statearr_25888_25967[(1)] = (41));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (33))){
var inst_25817 = (state_25858[(25)]);
var inst_25819 = cljs.core.chunked_seq_QMARK_(inst_25817);
var state_25858__$1 = state_25858;
if(inst_25819){
var statearr_25889_25968 = state_25858__$1;
(statearr_25889_25968[(1)] = (36));

} else {
var statearr_25890_25969 = state_25858__$1;
(statearr_25890_25969[(1)] = (37));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (13))){
var inst_25749 = (state_25858[(26)]);
var inst_25752 = cljs.core.async.close_BANG_(inst_25749);
var state_25858__$1 = state_25858;
var statearr_25891_25970 = state_25858__$1;
(statearr_25891_25970[(2)] = inst_25752);

(statearr_25891_25970[(1)] = (15));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (22))){
var inst_25770 = (state_25858[(8)]);
var inst_25773 = cljs.core.async.close_BANG_(inst_25770);
var state_25858__$1 = state_25858;
var statearr_25892_25971 = state_25858__$1;
(statearr_25892_25971[(2)] = inst_25773);

(statearr_25892_25971[(1)] = (24));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (36))){
var inst_25817 = (state_25858[(25)]);
var inst_25821 = cljs.core.chunk_first(inst_25817);
var inst_25822 = cljs.core.chunk_rest(inst_25817);
var inst_25823 = cljs.core.count(inst_25821);
var inst_25798 = inst_25822;
var inst_25799 = inst_25821;
var inst_25800 = inst_25823;
var inst_25801 = (0);
var state_25858__$1 = (function (){var statearr_25893 = state_25858;
(statearr_25893[(9)] = inst_25801);

(statearr_25893[(20)] = inst_25800);

(statearr_25893[(21)] = inst_25798);

(statearr_25893[(11)] = inst_25799);

return statearr_25893;
})();
var statearr_25894_25972 = state_25858__$1;
(statearr_25894_25972[(2)] = null);

(statearr_25894_25972[(1)] = (25));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (41))){
var inst_25817 = (state_25858[(25)]);
var inst_25833 = (state_25858[(2)]);
var inst_25834 = cljs.core.next(inst_25817);
var inst_25798 = inst_25834;
var inst_25799 = null;
var inst_25800 = (0);
var inst_25801 = (0);
var state_25858__$1 = (function (){var statearr_25895 = state_25858;
(statearr_25895[(9)] = inst_25801);

(statearr_25895[(20)] = inst_25800);

(statearr_25895[(27)] = inst_25833);

(statearr_25895[(21)] = inst_25798);

(statearr_25895[(11)] = inst_25799);

return statearr_25895;
})();
var statearr_25896_25973 = state_25858__$1;
(statearr_25896_25973[(2)] = null);

(statearr_25896_25973[(1)] = (25));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (43))){
var state_25858__$1 = state_25858;
var statearr_25897_25974 = state_25858__$1;
(statearr_25897_25974[(2)] = null);

(statearr_25897_25974[(1)] = (44));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (29))){
var inst_25842 = (state_25858[(2)]);
var state_25858__$1 = state_25858;
var statearr_25898_25975 = state_25858__$1;
(statearr_25898_25975[(2)] = inst_25842);

(statearr_25898_25975[(1)] = (26));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (44))){
var inst_25851 = (state_25858[(2)]);
var state_25858__$1 = (function (){var statearr_25899 = state_25858;
(statearr_25899[(28)] = inst_25851);

return statearr_25899;
})();
var statearr_25900_25976 = state_25858__$1;
(statearr_25900_25976[(2)] = null);

(statearr_25900_25976[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (6))){
var inst_25790 = (state_25858[(29)]);
var inst_25789 = (function (){var G__25901 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25901) : cljs.core.deref.call(null,G__25901));
})();
var inst_25790__$1 = cljs.core.keys(inst_25789);
var inst_25791 = cljs.core.count(inst_25790__$1);
var inst_25792 = (function (){var G__25902 = dctr;
var G__25903 = inst_25791;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25902,G__25903) : cljs.core.reset_BANG_.call(null,G__25902,G__25903));
})();
var inst_25797 = cljs.core.seq(inst_25790__$1);
var inst_25798 = inst_25797;
var inst_25799 = null;
var inst_25800 = (0);
var inst_25801 = (0);
var state_25858__$1 = (function (){var statearr_25904 = state_25858;
(statearr_25904[(9)] = inst_25801);

(statearr_25904[(20)] = inst_25800);

(statearr_25904[(21)] = inst_25798);

(statearr_25904[(30)] = inst_25792);

(statearr_25904[(29)] = inst_25790__$1);

(statearr_25904[(11)] = inst_25799);

return statearr_25904;
})();
var statearr_25905_25977 = state_25858__$1;
(statearr_25905_25977[(2)] = null);

(statearr_25905_25977[(1)] = (25));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (28))){
var inst_25798 = (state_25858[(21)]);
var inst_25817 = (state_25858[(25)]);
var inst_25817__$1 = cljs.core.seq(inst_25798);
var state_25858__$1 = (function (){var statearr_25906 = state_25858;
(statearr_25906[(25)] = inst_25817__$1);

return statearr_25906;
})();
if(inst_25817__$1){
var statearr_25907_25978 = state_25858__$1;
(statearr_25907_25978[(1)] = (33));

} else {
var statearr_25908_25979 = state_25858__$1;
(statearr_25908_25979[(1)] = (34));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (25))){
var inst_25801 = (state_25858[(9)]);
var inst_25800 = (state_25858[(20)]);
var inst_25803 = (inst_25801 < inst_25800);
var inst_25804 = inst_25803;
var state_25858__$1 = state_25858;
if(cljs.core.truth_(inst_25804)){
var statearr_25909_25980 = state_25858__$1;
(statearr_25909_25980[(1)] = (27));

} else {
var statearr_25910_25981 = state_25858__$1;
(statearr_25910_25981[(1)] = (28));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (34))){
var state_25858__$1 = state_25858;
var statearr_25911_25982 = state_25858__$1;
(statearr_25911_25982[(2)] = null);

(statearr_25911_25982[(1)] = (35));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (17))){
var state_25858__$1 = state_25858;
var statearr_25912_25983 = state_25858__$1;
(statearr_25912_25983[(2)] = null);

(statearr_25912_25983[(1)] = (18));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (3))){
var inst_25856 = (state_25858[(2)]);
var state_25858__$1 = state_25858;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25858__$1,inst_25856);
} else {
if((state_val_25859 === (12))){
var inst_25785 = (state_25858[(2)]);
var state_25858__$1 = state_25858;
var statearr_25913_25984 = state_25858__$1;
(statearr_25913_25984[(2)] = inst_25785);

(statearr_25913_25984[(1)] = (9));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (2))){
var state_25858__$1 = state_25858;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25858__$1,(4),ch);
} else {
if((state_val_25859 === (23))){
var state_25858__$1 = state_25858;
var statearr_25914_25985 = state_25858__$1;
(statearr_25914_25985[(2)] = null);

(statearr_25914_25985[(1)] = (24));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (35))){
var inst_25840 = (state_25858[(2)]);
var state_25858__$1 = state_25858;
var statearr_25915_25986 = state_25858__$1;
(statearr_25915_25986[(2)] = inst_25840);

(statearr_25915_25986[(1)] = (29));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (19))){
var inst_25759 = (state_25858[(7)]);
var inst_25763 = cljs.core.chunk_first(inst_25759);
var inst_25764 = cljs.core.chunk_rest(inst_25759);
var inst_25765 = cljs.core.count(inst_25763);
var inst_25739 = inst_25764;
var inst_25740 = inst_25763;
var inst_25741 = inst_25765;
var inst_25742 = (0);
var state_25858__$1 = (function (){var statearr_25916 = state_25858;
(statearr_25916[(13)] = inst_25740);

(statearr_25916[(14)] = inst_25741);

(statearr_25916[(15)] = inst_25739);

(statearr_25916[(16)] = inst_25742);

return statearr_25916;
})();
var statearr_25917_25987 = state_25858__$1;
(statearr_25917_25987[(2)] = null);

(statearr_25917_25987[(1)] = (8));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (11))){
var inst_25759 = (state_25858[(7)]);
var inst_25739 = (state_25858[(15)]);
var inst_25759__$1 = cljs.core.seq(inst_25739);
var state_25858__$1 = (function (){var statearr_25918 = state_25858;
(statearr_25918[(7)] = inst_25759__$1);

return statearr_25918;
})();
if(inst_25759__$1){
var statearr_25919_25988 = state_25858__$1;
(statearr_25919_25988[(1)] = (16));

} else {
var statearr_25920_25989 = state_25858__$1;
(statearr_25920_25989[(1)] = (17));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (9))){
var inst_25787 = (state_25858[(2)]);
var state_25858__$1 = state_25858;
var statearr_25921_25990 = state_25858__$1;
(statearr_25921_25990[(2)] = inst_25787);

(statearr_25921_25990[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (5))){
var inst_25737 = (function (){var G__25922 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25922) : cljs.core.deref.call(null,G__25922));
})();
var inst_25738 = cljs.core.seq(inst_25737);
var inst_25739 = inst_25738;
var inst_25740 = null;
var inst_25741 = (0);
var inst_25742 = (0);
var state_25858__$1 = (function (){var statearr_25923 = state_25858;
(statearr_25923[(13)] = inst_25740);

(statearr_25923[(14)] = inst_25741);

(statearr_25923[(15)] = inst_25739);

(statearr_25923[(16)] = inst_25742);

return statearr_25923;
})();
var statearr_25924_25991 = state_25858__$1;
(statearr_25924_25991[(2)] = null);

(statearr_25924_25991[(1)] = (8));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (14))){
var state_25858__$1 = state_25858;
var statearr_25925_25992 = state_25858__$1;
(statearr_25925_25992[(2)] = null);

(statearr_25925_25992[(1)] = (15));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (45))){
var inst_25848 = (state_25858[(2)]);
var state_25858__$1 = state_25858;
var statearr_25926_25993 = state_25858__$1;
(statearr_25926_25993[(2)] = inst_25848);

(statearr_25926_25993[(1)] = (44));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (26))){
var inst_25790 = (state_25858[(29)]);
var inst_25844 = (state_25858[(2)]);
var inst_25845 = cljs.core.seq(inst_25790);
var state_25858__$1 = (function (){var statearr_25927 = state_25858;
(statearr_25927[(31)] = inst_25844);

return statearr_25927;
})();
if(inst_25845){
var statearr_25928_25994 = state_25858__$1;
(statearr_25928_25994[(1)] = (42));

} else {
var statearr_25929_25995 = state_25858__$1;
(statearr_25929_25995[(1)] = (43));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (16))){
var inst_25759 = (state_25858[(7)]);
var inst_25761 = cljs.core.chunked_seq_QMARK_(inst_25759);
var state_25858__$1 = state_25858;
if(inst_25761){
var statearr_25930_25996 = state_25858__$1;
(statearr_25930_25996[(1)] = (19));

} else {
var statearr_25931_25997 = state_25858__$1;
(statearr_25931_25997[(1)] = (20));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (38))){
var inst_25837 = (state_25858[(2)]);
var state_25858__$1 = state_25858;
var statearr_25932_25998 = state_25858__$1;
(statearr_25932_25998[(2)] = inst_25837);

(statearr_25932_25998[(1)] = (35));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (30))){
var state_25858__$1 = state_25858;
var statearr_25933_25999 = state_25858__$1;
(statearr_25933_25999[(2)] = null);

(statearr_25933_25999[(1)] = (32));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (10))){
var inst_25740 = (state_25858[(13)]);
var inst_25742 = (state_25858[(16)]);
var inst_25748 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25740,inst_25742);
var inst_25749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25748,(0),null);
var inst_25750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25748,(1),null);
var state_25858__$1 = (function (){var statearr_25934 = state_25858;
(statearr_25934[(26)] = inst_25749);

return statearr_25934;
})();
if(cljs.core.truth_(inst_25750)){
var statearr_25935_26000 = state_25858__$1;
(statearr_25935_26000[(1)] = (13));

} else {
var statearr_25936_26001 = state_25858__$1;
(statearr_25936_26001[(1)] = (14));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (18))){
var inst_25783 = (state_25858[(2)]);
var state_25858__$1 = state_25858;
var statearr_25937_26002 = state_25858__$1;
(statearr_25937_26002[(2)] = inst_25783);

(statearr_25937_26002[(1)] = (12));


return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (42))){
var state_25858__$1 = state_25858;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25858__$1,(45),dchan);
} else {
if((state_val_25859 === (37))){
var inst_25826 = (state_25858[(23)]);
var inst_25730 = (state_25858[(12)]);
var inst_25817 = (state_25858[(25)]);
var inst_25826__$1 = cljs.core.first(inst_25817);
var inst_25827 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25826__$1,inst_25730,done);
var state_25858__$1 = (function (){var statearr_25938 = state_25858;
(statearr_25938[(23)] = inst_25826__$1);

return statearr_25938;
})();
if(cljs.core.truth_(inst_25827)){
var statearr_25939_26003 = state_25858__$1;
(statearr_25939_26003[(1)] = (39));

} else {
var statearr_25940_26004 = state_25858__$1;
(statearr_25940_26004[(1)] = (40));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_25859 === (8))){
var inst_25741 = (state_25858[(14)]);
var inst_25742 = (state_25858[(16)]);
var inst_25744 = (inst_25742 < inst_25741);
var inst_25745 = inst_25744;
var state_25858__$1 = state_25858;
if(cljs.core.truth_(inst_25745)){
var statearr_25941_26005 = state_25858__$1;
(statearr_25941_26005[(1)] = (10));

} else {
var statearr_25942_26006 = state_25858__$1;
(statearr_25942_26006[(1)] = (11));

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
});})(c__12070__auto___25952,cs,m,dchan,dctr,done))
;
return ((function (switch__12055__auto__,c__12070__auto___25952,cs,m,dchan,dctr,done){
return (function() {
var state_machine__12056__auto__ = null;
var state_machine__12056__auto____0 = (function (){
var statearr_25946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25946[(0)] = state_machine__12056__auto__);

(statearr_25946[(1)] = (1));

return statearr_25946;
});
var state_machine__12056__auto____1 = (function (state_25858){
while(true){
var ret_value__12057__auto__ = (function (){try{while(true){
var result__12058__auto__ = switch__12055__auto__(state_25858);
if(cljs.core.keyword_identical_QMARK_(result__12058__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12058__auto__;
}
break;
}
}catch (e25947){if((e25947 instanceof Object)){
var ex__12059__auto__ = e25947;
var statearr_25948_26007 = state_25858;
(statearr_25948_26007[(5)] = ex__12059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25858);

return cljs.core.constant$keyword$127;
} else {
throw e25947;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12057__auto__,cljs.core.constant$keyword$127)){
var G__26008 = state_25858;
state_25858 = G__26008;
continue;
} else {
return ret_value__12057__auto__;
}
break;
}
});
state_machine__12056__auto__ = function(state_25858){
switch(arguments.length){
case 0:
return state_machine__12056__auto____0.call(this);
case 1:
return state_machine__12056__auto____1.call(this,state_25858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12056__auto____0;
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12056__auto____1;
return state_machine__12056__auto__;
})()
;})(switch__12055__auto__,c__12070__auto___25952,cs,m,dchan,dctr,done))
})();
var state__12072__auto__ = (function (){var statearr_25949 = (function (){return (f__12071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12071__auto__.cljs$core$IFn$_invoke$arity$0() : f__12071__auto__.call(null));
})();
(statearr_25949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12070__auto___25952);

return statearr_25949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12072__auto__);
});})(c__12070__auto___25952,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj26013 = {};
return obj26013;
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
return (function (){var or__3731__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__26017 = x__4375__auto__;
return goog.typeOf(G__26017);
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
return (function (){var or__3731__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__26021 = x__4375__auto__;
return goog.typeOf(G__26021);
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
return (function (){var or__3731__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__26025 = x__4375__auto__;
return goog.typeOf(G__26025);
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
return (function (){var or__3731__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__26029 = x__4375__auto__;
return goog.typeOf(G__26029);
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
return (function (){var or__3731__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__26033 = x__4375__auto__;
return goog.typeOf(G__26033);
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__26034){
var map__26040 = p__26034;
var map__26040__$1 = ((cljs.core.seq_QMARK_(map__26040))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26040):map__26040);
var opts = map__26040__$1;
var statearr_26041_26045 = state;
(statearr_26041_26045[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__26040,map__26040__$1,opts){
return (function (val){
var statearr_26042_26046 = state;
(statearr_26042_26046[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__26040,map__26040__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_26043_26047 = state;
(statearr_26043_26047[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__26044 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26044) : cljs.core.deref.call(null,G__26044));
})());


return cljs.core.constant$keyword$127;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__26034 = null;
if (arguments.length > 3) {
  p__26034 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__26034);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__26048){
var state = cljs.core.first(arglist__26048);
arglist__26048 = cljs.core.next(arglist__26048);
var cont_block = cljs.core.first(arglist__26048);
arglist__26048 = cljs.core.next(arglist__26048);
var ports = cljs.core.first(arglist__26048);
var p__26034 = cljs.core.rest(arglist__26048);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__26034);
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
var cs = (function (){var G__26182 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26182) : cljs.core.atom.call(null,G__26182));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$186,null,cljs.core.constant$keyword$187,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$188);
var solo_mode = (function (){var G__26183 = cljs.core.constant$keyword$187;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26183) : cljs.core.atom.call(null,G__26183));
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
if(cljs.core.truth_((function (){var G__26184 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__26184) : attr.call(null,G__26184));
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
var chs = (function (){var G__26185 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26185) : cljs.core.deref.call(null,G__26185));
})();
var mode = (function (){var G__26186 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26186) : cljs.core.deref.call(null,G__26186));
})();
var solos = pick(cljs.core.constant$keyword$188,chs);
var pauses = pick(cljs.core.constant$keyword$186,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$189,solos,cljs.core.constant$keyword$190,pick(cljs.core.constant$keyword$187,chs),cljs.core.constant$keyword$191,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$186)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t26187 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26187 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26188){
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
this.meta26188 = meta26188;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26187.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t26187.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26187.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26187.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__26190_26315 = self__.cs;
var G__26191_26316 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26190_26315,G__26191_26316) : cljs.core.reset_BANG_.call(null,G__26190_26315,G__26191_26316));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26187.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26187.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__26192 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__26192) : self__.solo_modes.call(null,G__26192));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__26193_26317 = self__.solo_mode;
var G__26194_26318 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26193_26317,G__26194_26318) : cljs.core.reset_BANG_.call(null,G__26193_26317,G__26194_26318));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26187.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26187.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26187.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26189){
var self__ = this;
var _26189__$1 = this;
return self__.meta26188;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26189,meta26188__$1){
var self__ = this;
var _26189__$1 = this;
return (new cljs.core.async.t26187(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26188__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26187.cljs$lang$type = true;

cljs.core.async.t26187.cljs$lang$ctorStr = "cljs.core.async/t26187";

cljs.core.async.t26187.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core.async/t26187");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t26187 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t26187(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26188){
return (new cljs.core.async.t26187(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26188));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t26187(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,25,cljs.core.constant$keyword$9,510,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,499,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
;
var c__12070__auto___26319 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12070__auto___26319,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__12071__auto__ = (function (){var switch__12055__auto__ = ((function (c__12070__auto___26319,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26266){
var state_val_26267 = (state_26266[(1)]);
if((state_val_26267 === (7))){
var inst_26208 = (state_26266[(7)]);
var inst_26213 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_26208);
var state_26266__$1 = state_26266;
var statearr_26268_26320 = state_26266__$1;
(statearr_26268_26320[(2)] = inst_26213);

(statearr_26268_26320[(1)] = (9));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26267 === (20))){
var inst_26223 = (state_26266[(8)]);
var state_26266__$1 = state_26266;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26266__$1,(23),out,inst_26223);
} else {
if((state_val_26267 === (1))){
var inst_26198 = (state_26266[(9)]);
var inst_26198__$1 = calc_state();
var inst_26199 = cljs.core.seq_QMARK_(inst_26198__$1);
var state_26266__$1 = (function (){var statearr_26269 = state_26266;
(statearr_26269[(9)] = inst_26198__$1);

return statearr_26269;
})();
if(inst_26199){
var statearr_26270_26321 = state_26266__$1;
(statearr_26270_26321[(1)] = (2));

} else {
var statearr_26271_26322 = state_26266__$1;
(statearr_26271_26322[(1)] = (3));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_26267 === (24))){
var inst_26216 = (state_26266[(10)]);
var inst_26208 = inst_26216;
var state_26266__$1 = (function (){var statearr_26272 = state_26266;
(statearr_26272[(7)] = inst_26208);

return statearr_26272;
})();
var statearr_26273_26323 = state_26266__$1;
(statearr_26273_26323[(2)] = null);

(statearr_26273_26323[(1)] = (5));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26267 === (4))){
var inst_26198 = (state_26266[(9)]);
var inst_26204 = (state_26266[(2)]);
var inst_26205 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26204,cljs.core.constant$keyword$191);
var inst_26206 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26204,cljs.core.constant$keyword$190);
var inst_26207 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26204,cljs.core.constant$keyword$189);
var inst_26208 = inst_26198;
var state_26266__$1 = (function (){var statearr_26274 = state_26266;
(statearr_26274[(11)] = inst_26207);

(statearr_26274[(12)] = inst_26205);

(statearr_26274[(7)] = inst_26208);

(statearr_26274[(13)] = inst_26206);

return statearr_26274;
})();
var statearr_26275_26324 = state_26266__$1;
(statearr_26275_26324[(2)] = null);

(statearr_26275_26324[(1)] = (5));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26267 === (15))){
var state_26266__$1 = state_26266;
var statearr_26276_26325 = state_26266__$1;
(statearr_26276_26325[(2)] = null);

(statearr_26276_26325[(1)] = (16));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26267 === (21))){
var inst_26216 = (state_26266[(10)]);
var inst_26208 = inst_26216;
var state_26266__$1 = (function (){var statearr_26277 = state_26266;
(statearr_26277[(7)] = inst_26208);

return statearr_26277;
})();
var statearr_26278_26326 = state_26266__$1;
(statearr_26278_26326[(2)] = null);

(statearr_26278_26326[(1)] = (5));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26267 === (13))){
var inst_26262 = (state_26266[(2)]);
var state_26266__$1 = state_26266;
var statearr_26279_26327 = state_26266__$1;
(statearr_26279_26327[(2)] = inst_26262);

(statearr_26279_26327[(1)] = (6));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26267 === (22))){
var inst_26260 = (state_26266[(2)]);
var state_26266__$1 = state_26266;
var statearr_26280_26328 = state_26266__$1;
(statearr_26280_26328[(2)] = inst_26260);

(statearr_26280_26328[(1)] = (13));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26267 === (6))){
var inst_26264 = (state_26266[(2)]);
var state_26266__$1 = state_26266;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26266__$1,inst_26264);
} else {
if((state_val_26267 === (25))){
var state_26266__$1 = state_26266;
var statearr_26281_26329 = state_26266__$1;
(statearr_26281_26329[(2)] = null);

(statearr_26281_26329[(1)] = (26));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26267 === (17))){
var inst_26239 = (state_26266[(14)]);
var state_26266__$1 = state_26266;
var statearr_26282_26330 = state_26266__$1;
(statearr_26282_26330[(2)] = inst_26239);

(statearr_26282_26330[(1)] = (19));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26267 === (3))){
var inst_26198 = (state_26266[(9)]);
var state_26266__$1 = state_26266;
var statearr_26283_26331 = state_26266__$1;
(statearr_26283_26331[(2)] = inst_26198);

(statearr_26283_26331[(1)] = (4));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26267 === (12))){
var inst_26219 = (state_26266[(15)]);
var inst_26239 = (state_26266[(14)]);
var inst_26224 = (state_26266[(16)]);
var inst_26239__$1 = (function (){var G__26284 = inst_26224;
return (inst_26219.cljs$core$IFn$_invoke$arity$1 ? inst_26219.cljs$core$IFn$_invoke$arity$1(G__26284) : inst_26219.call(null,G__26284));
})();
var state_26266__$1 = (function (){var statearr_26285 = state_26266;
(statearr_26285[(14)] = inst_26239__$1);

return statearr_26285;
})();
if(cljs.core.truth_(inst_26239__$1)){
var statearr_26286_26332 = state_26266__$1;
(statearr_26286_26332[(1)] = (17));

} else {
var statearr_26287_26333 = state_26266__$1;
(statearr_26287_26333[(1)] = (18));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_26267 === (2))){
var inst_26198 = (state_26266[(9)]);
var inst_26201 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_26198);
var state_26266__$1 = state_26266;
var statearr_26288_26334 = state_26266__$1;
(statearr_26288_26334[(2)] = inst_26201);

(statearr_26288_26334[(1)] = (4));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26267 === (23))){
var inst_26251 = (state_26266[(2)]);
var state_26266__$1 = state_26266;
if(cljs.core.truth_(inst_26251)){
var statearr_26289_26335 = state_26266__$1;
(statearr_26289_26335[(1)] = (24));

} else {
var statearr_26290_26336 = state_26266__$1;
(statearr_26290_26336[(1)] = (25));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_26267 === (19))){
var inst_26248 = (state_26266[(2)]);
var state_26266__$1 = state_26266;
if(cljs.core.truth_(inst_26248)){
var statearr_26291_26337 = state_26266__$1;
(statearr_26291_26337[(1)] = (20));

} else {
var statearr_26292_26338 = state_26266__$1;
(statearr_26292_26338[(1)] = (21));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_26267 === (11))){
var inst_26223 = (state_26266[(8)]);
var inst_26229 = (inst_26223 == null);
var state_26266__$1 = state_26266;
if(cljs.core.truth_(inst_26229)){
var statearr_26293_26339 = state_26266__$1;
(statearr_26293_26339[(1)] = (14));

} else {
var statearr_26294_26340 = state_26266__$1;
(statearr_26294_26340[(1)] = (15));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_26267 === (9))){
var inst_26216 = (state_26266[(10)]);
var inst_26216__$1 = (state_26266[(2)]);
var inst_26217 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26216__$1,cljs.core.constant$keyword$191);
var inst_26218 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26216__$1,cljs.core.constant$keyword$190);
var inst_26219 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26216__$1,cljs.core.constant$keyword$189);
var state_26266__$1 = (function (){var statearr_26295 = state_26266;
(statearr_26295[(17)] = inst_26218);

(statearr_26295[(10)] = inst_26216__$1);

(statearr_26295[(15)] = inst_26219);

return statearr_26295;
})();
return cljs.core.async.ioc_alts_BANG_(state_26266__$1,(10),inst_26217);
} else {
if((state_val_26267 === (5))){
var inst_26208 = (state_26266[(7)]);
var inst_26211 = cljs.core.seq_QMARK_(inst_26208);
var state_26266__$1 = state_26266;
if(inst_26211){
var statearr_26296_26341 = state_26266__$1;
(statearr_26296_26341[(1)] = (7));

} else {
var statearr_26297_26342 = state_26266__$1;
(statearr_26297_26342[(1)] = (8));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_26267 === (14))){
var inst_26224 = (state_26266[(16)]);
var inst_26231 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_26224);
var state_26266__$1 = state_26266;
var statearr_26298_26343 = state_26266__$1;
(statearr_26298_26343[(2)] = inst_26231);

(statearr_26298_26343[(1)] = (16));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26267 === (26))){
var inst_26256 = (state_26266[(2)]);
var state_26266__$1 = state_26266;
var statearr_26299_26344 = state_26266__$1;
(statearr_26299_26344[(2)] = inst_26256);

(statearr_26299_26344[(1)] = (22));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26267 === (16))){
var inst_26234 = (state_26266[(2)]);
var inst_26235 = calc_state();
var inst_26208 = inst_26235;
var state_26266__$1 = (function (){var statearr_26300 = state_26266;
(statearr_26300[(18)] = inst_26234);

(statearr_26300[(7)] = inst_26208);

return statearr_26300;
})();
var statearr_26301_26345 = state_26266__$1;
(statearr_26301_26345[(2)] = null);

(statearr_26301_26345[(1)] = (5));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26267 === (10))){
var inst_26223 = (state_26266[(8)]);
var inst_26224 = (state_26266[(16)]);
var inst_26222 = (state_26266[(2)]);
var inst_26223__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26222,(0),null);
var inst_26224__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26222,(1),null);
var inst_26225 = (inst_26223__$1 == null);
var inst_26226 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26224__$1,change);
var inst_26227 = (inst_26225) || (inst_26226);
var state_26266__$1 = (function (){var statearr_26302 = state_26266;
(statearr_26302[(8)] = inst_26223__$1);

(statearr_26302[(16)] = inst_26224__$1);

return statearr_26302;
})();
if(cljs.core.truth_(inst_26227)){
var statearr_26303_26346 = state_26266__$1;
(statearr_26303_26346[(1)] = (11));

} else {
var statearr_26304_26347 = state_26266__$1;
(statearr_26304_26347[(1)] = (12));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_26267 === (18))){
var inst_26218 = (state_26266[(17)]);
var inst_26219 = (state_26266[(15)]);
var inst_26224 = (state_26266[(16)]);
var inst_26243 = cljs.core.empty_QMARK_(inst_26219);
var inst_26244 = (function (){var G__26305 = inst_26224;
return (inst_26218.cljs$core$IFn$_invoke$arity$1 ? inst_26218.cljs$core$IFn$_invoke$arity$1(G__26305) : inst_26218.call(null,G__26305));
})();
var inst_26245 = cljs.core.not(inst_26244);
var inst_26246 = (inst_26243) && (inst_26245);
var state_26266__$1 = state_26266;
var statearr_26306_26348 = state_26266__$1;
(statearr_26306_26348[(2)] = inst_26246);

(statearr_26306_26348[(1)] = (19));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26267 === (8))){
var inst_26208 = (state_26266[(7)]);
var state_26266__$1 = state_26266;
var statearr_26307_26349 = state_26266__$1;
(statearr_26307_26349[(2)] = inst_26208);

(statearr_26307_26349[(1)] = (9));


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
});})(c__12070__auto___26319,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__12055__auto__,c__12070__auto___26319,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__12056__auto__ = null;
var state_machine__12056__auto____0 = (function (){
var statearr_26311 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26311[(0)] = state_machine__12056__auto__);

(statearr_26311[(1)] = (1));

return statearr_26311;
});
var state_machine__12056__auto____1 = (function (state_26266){
while(true){
var ret_value__12057__auto__ = (function (){try{while(true){
var result__12058__auto__ = switch__12055__auto__(state_26266);
if(cljs.core.keyword_identical_QMARK_(result__12058__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12058__auto__;
}
break;
}
}catch (e26312){if((e26312 instanceof Object)){
var ex__12059__auto__ = e26312;
var statearr_26313_26350 = state_26266;
(statearr_26313_26350[(5)] = ex__12059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26266);

return cljs.core.constant$keyword$127;
} else {
throw e26312;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12057__auto__,cljs.core.constant$keyword$127)){
var G__26351 = state_26266;
state_26266 = G__26351;
continue;
} else {
return ret_value__12057__auto__;
}
break;
}
});
state_machine__12056__auto__ = function(state_26266){
switch(arguments.length){
case 0:
return state_machine__12056__auto____0.call(this);
case 1:
return state_machine__12056__auto____1.call(this,state_26266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12056__auto____0;
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12056__auto____1;
return state_machine__12056__auto__;
})()
;})(switch__12055__auto__,c__12070__auto___26319,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__12072__auto__ = (function (){var statearr_26314 = (function (){return (f__12071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12071__auto__.cljs$core$IFn$_invoke$arity$0() : f__12071__auto__.call(null));
})();
(statearr_26314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12070__auto___26319);

return statearr_26314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12072__auto__);
});})(c__12070__auto___26319,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj26353 = {};
return obj26353;
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
return (function (){var or__3731__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__26357 = x__4375__auto__;
return goog.typeOf(G__26357);
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
return (function (){var or__3731__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__26361 = x__4375__auto__;
return goog.typeOf(G__26361);
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
return (function (){var or__3731__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__26367 = x__4375__auto__;
return goog.typeOf(G__26367);
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
return (function (){var or__3731__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__26369 = x__4375__auto__;
return goog.typeOf(G__26369);
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
var mults = (function (){var G__26508 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26508) : cljs.core.atom.call(null,G__26508));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__3731__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__26510 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26510) : cljs.core.deref.call(null,G__26510));
})(),topic);
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3731__auto__,mults){
return (function (p1__26370_SHARP_){
if(cljs.core.truth_((function (){var G__26511 = topic;
return (p1__26370_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__26370_SHARP_.cljs$core$IFn$_invoke$arity$1(G__26511) : p1__26370_SHARP_.call(null,G__26511));
})())){
return p1__26370_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26370_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__26512 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__26512) : buf_fn.call(null,G__26512));
})())));
}
});})(or__3731__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t26513 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26513 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26514){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26514 = meta26514;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26513.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t26513.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__26516 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__26516) : self__.ensure_mult.call(null,G__26516));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t26513.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__26517 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26517) : cljs.core.deref.call(null,G__26517));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t26513.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__26518 = self__.mults;
var G__26519 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26518,G__26519) : cljs.core.reset_BANG_.call(null,G__26518,G__26519));
});})(mults,ensure_mult))
;

cljs.core.async.t26513.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t26513.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26513.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t26513.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26515){
var self__ = this;
var _26515__$1 = this;
return self__.meta26514;
});})(mults,ensure_mult))
;

cljs.core.async.t26513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26515,meta26514__$1){
var self__ = this;
var _26515__$1 = this;
return (new cljs.core.async.t26513(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26514__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t26513.cljs$lang$type = true;

cljs.core.async.t26513.cljs$lang$ctorStr = "cljs.core.async/t26513";

cljs.core.async.t26513.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core.async/t26513");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t26513 = ((function (mults,ensure_mult){
return (function __GT_t26513(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26514){
return (new cljs.core.async.t26513(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26514));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t26513(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,65,cljs.core.constant$keyword$9,603,cljs.core.constant$keyword$10,14,cljs.core.constant$keyword$11,591,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
;
var c__12070__auto___26642 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12070__auto___26642,mults,ensure_mult,p){
return (function (){
var f__12071__auto__ = (function (){var switch__12055__auto__ = ((function (c__12070__auto___26642,mults,ensure_mult,p){
return (function (state_26591){
var state_val_26592 = (state_26591[(1)]);
if((state_val_26592 === (7))){
var inst_26587 = (state_26591[(2)]);
var state_26591__$1 = state_26591;
var statearr_26593_26643 = state_26591__$1;
(statearr_26593_26643[(2)] = inst_26587);

(statearr_26593_26643[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26592 === (20))){
var state_26591__$1 = state_26591;
var statearr_26594_26644 = state_26591__$1;
(statearr_26594_26644[(2)] = null);

(statearr_26594_26644[(1)] = (21));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26592 === (1))){
var state_26591__$1 = state_26591;
var statearr_26595_26645 = state_26591__$1;
(statearr_26595_26645[(2)] = null);

(statearr_26595_26645[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26592 === (24))){
var inst_26570 = (state_26591[(7)]);
var inst_26579 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_26570);
var state_26591__$1 = state_26591;
var statearr_26596_26646 = state_26591__$1;
(statearr_26596_26646[(2)] = inst_26579);

(statearr_26596_26646[(1)] = (25));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26592 === (4))){
var inst_26522 = (state_26591[(8)]);
var inst_26522__$1 = (state_26591[(2)]);
var inst_26523 = (inst_26522__$1 == null);
var state_26591__$1 = (function (){var statearr_26597 = state_26591;
(statearr_26597[(8)] = inst_26522__$1);

return statearr_26597;
})();
if(cljs.core.truth_(inst_26523)){
var statearr_26598_26647 = state_26591__$1;
(statearr_26598_26647[(1)] = (5));

} else {
var statearr_26599_26648 = state_26591__$1;
(statearr_26599_26648[(1)] = (6));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_26592 === (15))){
var inst_26564 = (state_26591[(2)]);
var state_26591__$1 = state_26591;
var statearr_26600_26649 = state_26591__$1;
(statearr_26600_26649[(2)] = inst_26564);

(statearr_26600_26649[(1)] = (12));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26592 === (21))){
var inst_26584 = (state_26591[(2)]);
var state_26591__$1 = (function (){var statearr_26601 = state_26591;
(statearr_26601[(9)] = inst_26584);

return statearr_26601;
})();
var statearr_26602_26650 = state_26591__$1;
(statearr_26602_26650[(2)] = null);

(statearr_26602_26650[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26592 === (13))){
var inst_26546 = (state_26591[(10)]);
var inst_26548 = cljs.core.chunked_seq_QMARK_(inst_26546);
var state_26591__$1 = state_26591;
if(inst_26548){
var statearr_26603_26651 = state_26591__$1;
(statearr_26603_26651[(1)] = (16));

} else {
var statearr_26604_26652 = state_26591__$1;
(statearr_26604_26652[(1)] = (17));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_26592 === (22))){
var inst_26576 = (state_26591[(2)]);
var state_26591__$1 = state_26591;
if(cljs.core.truth_(inst_26576)){
var statearr_26605_26653 = state_26591__$1;
(statearr_26605_26653[(1)] = (23));

} else {
var statearr_26606_26654 = state_26591__$1;
(statearr_26606_26654[(1)] = (24));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_26592 === (6))){
var inst_26522 = (state_26591[(8)]);
var inst_26570 = (state_26591[(7)]);
var inst_26572 = (state_26591[(11)]);
var inst_26570__$1 = (function (){var G__26607 = inst_26522;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__26607) : topic_fn.call(null,G__26607));
})();
var inst_26571 = (function (){var G__26608 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26608) : cljs.core.deref.call(null,G__26608));
})();
var inst_26572__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26571,inst_26570__$1);
var state_26591__$1 = (function (){var statearr_26609 = state_26591;
(statearr_26609[(7)] = inst_26570__$1);

(statearr_26609[(11)] = inst_26572__$1);

return statearr_26609;
})();
if(cljs.core.truth_(inst_26572__$1)){
var statearr_26610_26655 = state_26591__$1;
(statearr_26610_26655[(1)] = (19));

} else {
var statearr_26611_26656 = state_26591__$1;
(statearr_26611_26656[(1)] = (20));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_26592 === (25))){
var inst_26581 = (state_26591[(2)]);
var state_26591__$1 = state_26591;
var statearr_26612_26657 = state_26591__$1;
(statearr_26612_26657[(2)] = inst_26581);

(statearr_26612_26657[(1)] = (21));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26592 === (17))){
var inst_26546 = (state_26591[(10)]);
var inst_26555 = cljs.core.first(inst_26546);
var inst_26556 = cljs.core.async.muxch_STAR_(inst_26555);
var inst_26557 = cljs.core.async.close_BANG_(inst_26556);
var inst_26558 = cljs.core.next(inst_26546);
var inst_26532 = inst_26558;
var inst_26533 = null;
var inst_26534 = (0);
var inst_26535 = (0);
var state_26591__$1 = (function (){var statearr_26613 = state_26591;
(statearr_26613[(12)] = inst_26533);

(statearr_26613[(13)] = inst_26534);

(statearr_26613[(14)] = inst_26535);

(statearr_26613[(15)] = inst_26557);

(statearr_26613[(16)] = inst_26532);

return statearr_26613;
})();
var statearr_26614_26658 = state_26591__$1;
(statearr_26614_26658[(2)] = null);

(statearr_26614_26658[(1)] = (8));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26592 === (3))){
var inst_26589 = (state_26591[(2)]);
var state_26591__$1 = state_26591;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26591__$1,inst_26589);
} else {
if((state_val_26592 === (12))){
var inst_26566 = (state_26591[(2)]);
var state_26591__$1 = state_26591;
var statearr_26615_26659 = state_26591__$1;
(statearr_26615_26659[(2)] = inst_26566);

(statearr_26615_26659[(1)] = (9));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26592 === (2))){
var state_26591__$1 = state_26591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26591__$1,(4),ch);
} else {
if((state_val_26592 === (23))){
var state_26591__$1 = state_26591;
var statearr_26616_26660 = state_26591__$1;
(statearr_26616_26660[(2)] = null);

(statearr_26616_26660[(1)] = (25));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26592 === (19))){
var inst_26522 = (state_26591[(8)]);
var inst_26572 = (state_26591[(11)]);
var inst_26574 = cljs.core.async.muxch_STAR_(inst_26572);
var state_26591__$1 = state_26591;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26591__$1,(22),inst_26574,inst_26522);
} else {
if((state_val_26592 === (11))){
var inst_26532 = (state_26591[(16)]);
var inst_26546 = (state_26591[(10)]);
var inst_26546__$1 = cljs.core.seq(inst_26532);
var state_26591__$1 = (function (){var statearr_26617 = state_26591;
(statearr_26617[(10)] = inst_26546__$1);

return statearr_26617;
})();
if(inst_26546__$1){
var statearr_26618_26661 = state_26591__$1;
(statearr_26618_26661[(1)] = (13));

} else {
var statearr_26619_26662 = state_26591__$1;
(statearr_26619_26662[(1)] = (14));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_26592 === (9))){
var inst_26568 = (state_26591[(2)]);
var state_26591__$1 = state_26591;
var statearr_26620_26663 = state_26591__$1;
(statearr_26620_26663[(2)] = inst_26568);

(statearr_26620_26663[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26592 === (5))){
var inst_26529 = (function (){var G__26621 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26621) : cljs.core.deref.call(null,G__26621));
})();
var inst_26530 = cljs.core.vals(inst_26529);
var inst_26531 = cljs.core.seq(inst_26530);
var inst_26532 = inst_26531;
var inst_26533 = null;
var inst_26534 = (0);
var inst_26535 = (0);
var state_26591__$1 = (function (){var statearr_26622 = state_26591;
(statearr_26622[(12)] = inst_26533);

(statearr_26622[(13)] = inst_26534);

(statearr_26622[(14)] = inst_26535);

(statearr_26622[(16)] = inst_26532);

return statearr_26622;
})();
var statearr_26623_26664 = state_26591__$1;
(statearr_26623_26664[(2)] = null);

(statearr_26623_26664[(1)] = (8));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26592 === (14))){
var state_26591__$1 = state_26591;
var statearr_26627_26665 = state_26591__$1;
(statearr_26627_26665[(2)] = null);

(statearr_26627_26665[(1)] = (15));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26592 === (16))){
var inst_26546 = (state_26591[(10)]);
var inst_26550 = cljs.core.chunk_first(inst_26546);
var inst_26551 = cljs.core.chunk_rest(inst_26546);
var inst_26552 = cljs.core.count(inst_26550);
var inst_26532 = inst_26551;
var inst_26533 = inst_26550;
var inst_26534 = inst_26552;
var inst_26535 = (0);
var state_26591__$1 = (function (){var statearr_26628 = state_26591;
(statearr_26628[(12)] = inst_26533);

(statearr_26628[(13)] = inst_26534);

(statearr_26628[(14)] = inst_26535);

(statearr_26628[(16)] = inst_26532);

return statearr_26628;
})();
var statearr_26629_26666 = state_26591__$1;
(statearr_26629_26666[(2)] = null);

(statearr_26629_26666[(1)] = (8));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26592 === (10))){
var inst_26533 = (state_26591[(12)]);
var inst_26534 = (state_26591[(13)]);
var inst_26535 = (state_26591[(14)]);
var inst_26532 = (state_26591[(16)]);
var inst_26540 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26533,inst_26535);
var inst_26541 = cljs.core.async.muxch_STAR_(inst_26540);
var inst_26542 = cljs.core.async.close_BANG_(inst_26541);
var inst_26543 = (inst_26535 + (1));
var tmp26624 = inst_26533;
var tmp26625 = inst_26534;
var tmp26626 = inst_26532;
var inst_26532__$1 = tmp26626;
var inst_26533__$1 = tmp26624;
var inst_26534__$1 = tmp26625;
var inst_26535__$1 = inst_26543;
var state_26591__$1 = (function (){var statearr_26630 = state_26591;
(statearr_26630[(17)] = inst_26542);

(statearr_26630[(12)] = inst_26533__$1);

(statearr_26630[(13)] = inst_26534__$1);

(statearr_26630[(14)] = inst_26535__$1);

(statearr_26630[(16)] = inst_26532__$1);

return statearr_26630;
})();
var statearr_26631_26667 = state_26591__$1;
(statearr_26631_26667[(2)] = null);

(statearr_26631_26667[(1)] = (8));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26592 === (18))){
var inst_26561 = (state_26591[(2)]);
var state_26591__$1 = state_26591;
var statearr_26632_26668 = state_26591__$1;
(statearr_26632_26668[(2)] = inst_26561);

(statearr_26632_26668[(1)] = (15));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26592 === (8))){
var inst_26534 = (state_26591[(13)]);
var inst_26535 = (state_26591[(14)]);
var inst_26537 = (inst_26535 < inst_26534);
var inst_26538 = inst_26537;
var state_26591__$1 = state_26591;
if(cljs.core.truth_(inst_26538)){
var statearr_26633_26669 = state_26591__$1;
(statearr_26633_26669[(1)] = (10));

} else {
var statearr_26634_26670 = state_26591__$1;
(statearr_26634_26670[(1)] = (11));

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
});})(c__12070__auto___26642,mults,ensure_mult,p))
;
return ((function (switch__12055__auto__,c__12070__auto___26642,mults,ensure_mult,p){
return (function() {
var state_machine__12056__auto__ = null;
var state_machine__12056__auto____0 = (function (){
var statearr_26638 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26638[(0)] = state_machine__12056__auto__);

(statearr_26638[(1)] = (1));

return statearr_26638;
});
var state_machine__12056__auto____1 = (function (state_26591){
while(true){
var ret_value__12057__auto__ = (function (){try{while(true){
var result__12058__auto__ = switch__12055__auto__(state_26591);
if(cljs.core.keyword_identical_QMARK_(result__12058__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12058__auto__;
}
break;
}
}catch (e26639){if((e26639 instanceof Object)){
var ex__12059__auto__ = e26639;
var statearr_26640_26671 = state_26591;
(statearr_26640_26671[(5)] = ex__12059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26591);

return cljs.core.constant$keyword$127;
} else {
throw e26639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12057__auto__,cljs.core.constant$keyword$127)){
var G__26672 = state_26591;
state_26591 = G__26672;
continue;
} else {
return ret_value__12057__auto__;
}
break;
}
});
state_machine__12056__auto__ = function(state_26591){
switch(arguments.length){
case 0:
return state_machine__12056__auto____0.call(this);
case 1:
return state_machine__12056__auto____1.call(this,state_26591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12056__auto____0;
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12056__auto____1;
return state_machine__12056__auto__;
})()
;})(switch__12055__auto__,c__12070__auto___26642,mults,ensure_mult,p))
})();
var state__12072__auto__ = (function (){var statearr_26641 = (function (){return (f__12071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12071__auto__.cljs$core$IFn$_invoke$arity$0() : f__12071__auto__.call(null));
})();
(statearr_26641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12070__auto___26642);

return statearr_26641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12072__auto__);
});})(c__12070__auto___26642,mults,ensure_mult,p))
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
var dctr = (function (){var G__26753 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26753) : cljs.core.atom.call(null,G__26753));
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
var c__12070__auto___26826 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12070__auto___26826,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__12071__auto__ = (function (){var switch__12055__auto__ = ((function (c__12070__auto___26826,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26792){
var state_val_26793 = (state_26792[(1)]);
if((state_val_26793 === (7))){
var state_26792__$1 = state_26792;
var statearr_26794_26827 = state_26792__$1;
(statearr_26794_26827[(2)] = null);

(statearr_26794_26827[(1)] = (8));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26793 === (1))){
var state_26792__$1 = state_26792;
var statearr_26795_26828 = state_26792__$1;
(statearr_26795_26828[(2)] = null);

(statearr_26795_26828[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26793 === (4))){
var inst_26756 = (state_26792[(7)]);
var inst_26758 = (inst_26756 < cnt);
var state_26792__$1 = state_26792;
if(cljs.core.truth_(inst_26758)){
var statearr_26796_26829 = state_26792__$1;
(statearr_26796_26829[(1)] = (6));

} else {
var statearr_26797_26830 = state_26792__$1;
(statearr_26797_26830[(1)] = (7));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_26793 === (15))){
var inst_26788 = (state_26792[(2)]);
var state_26792__$1 = state_26792;
var statearr_26798_26831 = state_26792__$1;
(statearr_26798_26831[(2)] = inst_26788);

(statearr_26798_26831[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26793 === (13))){
var inst_26781 = cljs.core.async.close_BANG_(out);
var state_26792__$1 = state_26792;
var statearr_26799_26832 = state_26792__$1;
(statearr_26799_26832[(2)] = inst_26781);

(statearr_26799_26832[(1)] = (15));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26793 === (6))){
var state_26792__$1 = state_26792;
var statearr_26800_26833 = state_26792__$1;
(statearr_26800_26833[(2)] = null);

(statearr_26800_26833[(1)] = (11));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26793 === (3))){
var inst_26790 = (state_26792[(2)]);
var state_26792__$1 = state_26792;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26792__$1,inst_26790);
} else {
if((state_val_26793 === (12))){
var inst_26778 = (state_26792[(8)]);
var inst_26778__$1 = (state_26792[(2)]);
var inst_26779 = cljs.core.some(cljs.core.nil_QMARK_,inst_26778__$1);
var state_26792__$1 = (function (){var statearr_26801 = state_26792;
(statearr_26801[(8)] = inst_26778__$1);

return statearr_26801;
})();
if(cljs.core.truth_(inst_26779)){
var statearr_26802_26834 = state_26792__$1;
(statearr_26802_26834[(1)] = (13));

} else {
var statearr_26803_26835 = state_26792__$1;
(statearr_26803_26835[(1)] = (14));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_26793 === (2))){
var inst_26755 = (function (){var G__26804 = dctr;
var G__26805 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26804,G__26805) : cljs.core.reset_BANG_.call(null,G__26804,G__26805));
})();
var inst_26756 = (0);
var state_26792__$1 = (function (){var statearr_26806 = state_26792;
(statearr_26806[(9)] = inst_26755);

(statearr_26806[(7)] = inst_26756);

return statearr_26806;
})();
var statearr_26807_26836 = state_26792__$1;
(statearr_26807_26836[(2)] = null);

(statearr_26807_26836[(1)] = (4));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26793 === (11))){
var inst_26756 = (state_26792[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_26792,(10),Object,null,(9));
var inst_26765 = (function (){var G__26808 = inst_26756;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__26808) : chs__$1.call(null,G__26808));
})();
var inst_26766 = (function (){var G__26809 = inst_26756;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__26809) : done.call(null,G__26809));
})();
var inst_26767 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_26765,inst_26766);
var state_26792__$1 = state_26792;
var statearr_26810_26837 = state_26792__$1;
(statearr_26810_26837[(2)] = inst_26767);


cljs.core.async.impl.ioc_helpers.process_exception(state_26792__$1);

return cljs.core.constant$keyword$127;
} else {
if((state_val_26793 === (9))){
var inst_26756 = (state_26792[(7)]);
var inst_26769 = (state_26792[(2)]);
var inst_26770 = (inst_26756 + (1));
var inst_26756__$1 = inst_26770;
var state_26792__$1 = (function (){var statearr_26811 = state_26792;
(statearr_26811[(10)] = inst_26769);

(statearr_26811[(7)] = inst_26756__$1);

return statearr_26811;
})();
var statearr_26812_26838 = state_26792__$1;
(statearr_26812_26838[(2)] = null);

(statearr_26812_26838[(1)] = (4));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26793 === (5))){
var inst_26776 = (state_26792[(2)]);
var state_26792__$1 = (function (){var statearr_26813 = state_26792;
(statearr_26813[(11)] = inst_26776);

return statearr_26813;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26792__$1,(12),dchan);
} else {
if((state_val_26793 === (14))){
var inst_26778 = (state_26792[(8)]);
var inst_26783 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_26778);
var state_26792__$1 = state_26792;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26792__$1,(16),out,inst_26783);
} else {
if((state_val_26793 === (16))){
var inst_26785 = (state_26792[(2)]);
var state_26792__$1 = (function (){var statearr_26814 = state_26792;
(statearr_26814[(12)] = inst_26785);

return statearr_26814;
})();
var statearr_26815_26839 = state_26792__$1;
(statearr_26815_26839[(2)] = null);

(statearr_26815_26839[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26793 === (10))){
var inst_26760 = (state_26792[(2)]);
var inst_26761 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_26792__$1 = (function (){var statearr_26816 = state_26792;
(statearr_26816[(13)] = inst_26760);

return statearr_26816;
})();
var statearr_26817_26840 = state_26792__$1;
(statearr_26817_26840[(2)] = inst_26761);


cljs.core.async.impl.ioc_helpers.process_exception(state_26792__$1);

return cljs.core.constant$keyword$127;
} else {
if((state_val_26793 === (8))){
var inst_26774 = (state_26792[(2)]);
var state_26792__$1 = state_26792;
var statearr_26818_26841 = state_26792__$1;
(statearr_26818_26841[(2)] = inst_26774);

(statearr_26818_26841[(1)] = (5));


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
});})(c__12070__auto___26826,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__12055__auto__,c__12070__auto___26826,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__12056__auto__ = null;
var state_machine__12056__auto____0 = (function (){
var statearr_26822 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26822[(0)] = state_machine__12056__auto__);

(statearr_26822[(1)] = (1));

return statearr_26822;
});
var state_machine__12056__auto____1 = (function (state_26792){
while(true){
var ret_value__12057__auto__ = (function (){try{while(true){
var result__12058__auto__ = switch__12055__auto__(state_26792);
if(cljs.core.keyword_identical_QMARK_(result__12058__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12058__auto__;
}
break;
}
}catch (e26823){if((e26823 instanceof Object)){
var ex__12059__auto__ = e26823;
var statearr_26824_26842 = state_26792;
(statearr_26824_26842[(5)] = ex__12059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26792);

return cljs.core.constant$keyword$127;
} else {
throw e26823;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12057__auto__,cljs.core.constant$keyword$127)){
var G__26843 = state_26792;
state_26792 = G__26843;
continue;
} else {
return ret_value__12057__auto__;
}
break;
}
});
state_machine__12056__auto__ = function(state_26792){
switch(arguments.length){
case 0:
return state_machine__12056__auto____0.call(this);
case 1:
return state_machine__12056__auto____1.call(this,state_26792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12056__auto____0;
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12056__auto____1;
return state_machine__12056__auto__;
})()
;})(switch__12055__auto__,c__12070__auto___26826,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__12072__auto__ = (function (){var statearr_26825 = (function (){return (f__12071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12071__auto__.cljs$core$IFn$_invoke$arity$0() : f__12071__auto__.call(null));
})();
(statearr_26825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12070__auto___26826);

return statearr_26825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12072__auto__);
});})(c__12070__auto___26826,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__12070__auto___26953 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12070__auto___26953,out){
return (function (){
var f__12071__auto__ = (function (){var switch__12055__auto__ = ((function (c__12070__auto___26953,out){
return (function (state_26929){
var state_val_26930 = (state_26929[(1)]);
if((state_val_26930 === (7))){
var inst_26908 = (state_26929[(7)]);
var inst_26909 = (state_26929[(8)]);
var inst_26908__$1 = (state_26929[(2)]);
var inst_26909__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26908__$1,(0),null);
var inst_26910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26908__$1,(1),null);
var inst_26911 = (inst_26909__$1 == null);
var state_26929__$1 = (function (){var statearr_26931 = state_26929;
(statearr_26931[(9)] = inst_26910);

(statearr_26931[(7)] = inst_26908__$1);

(statearr_26931[(8)] = inst_26909__$1);

return statearr_26931;
})();
if(cljs.core.truth_(inst_26911)){
var statearr_26932_26954 = state_26929__$1;
(statearr_26932_26954[(1)] = (8));

} else {
var statearr_26933_26955 = state_26929__$1;
(statearr_26933_26955[(1)] = (9));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_26930 === (1))){
var inst_26900 = cljs.core.vec(chs);
var inst_26901 = inst_26900;
var state_26929__$1 = (function (){var statearr_26934 = state_26929;
(statearr_26934[(10)] = inst_26901);

return statearr_26934;
})();
var statearr_26935_26956 = state_26929__$1;
(statearr_26935_26956[(2)] = null);

(statearr_26935_26956[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26930 === (4))){
var inst_26901 = (state_26929[(10)]);
var state_26929__$1 = state_26929;
return cljs.core.async.ioc_alts_BANG_(state_26929__$1,(7),inst_26901);
} else {
if((state_val_26930 === (6))){
var inst_26925 = (state_26929[(2)]);
var state_26929__$1 = state_26929;
var statearr_26936_26957 = state_26929__$1;
(statearr_26936_26957[(2)] = inst_26925);

(statearr_26936_26957[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26930 === (3))){
var inst_26927 = (state_26929[(2)]);
var state_26929__$1 = state_26929;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26929__$1,inst_26927);
} else {
if((state_val_26930 === (2))){
var inst_26901 = (state_26929[(10)]);
var inst_26903 = cljs.core.count(inst_26901);
var inst_26904 = (inst_26903 > (0));
var state_26929__$1 = state_26929;
if(cljs.core.truth_(inst_26904)){
var statearr_26938_26958 = state_26929__$1;
(statearr_26938_26958[(1)] = (4));

} else {
var statearr_26939_26959 = state_26929__$1;
(statearr_26939_26959[(1)] = (5));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_26930 === (11))){
var inst_26901 = (state_26929[(10)]);
var inst_26918 = (state_26929[(2)]);
var tmp26937 = inst_26901;
var inst_26901__$1 = tmp26937;
var state_26929__$1 = (function (){var statearr_26940 = state_26929;
(statearr_26940[(10)] = inst_26901__$1);

(statearr_26940[(11)] = inst_26918);

return statearr_26940;
})();
var statearr_26941_26960 = state_26929__$1;
(statearr_26941_26960[(2)] = null);

(statearr_26941_26960[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26930 === (9))){
var inst_26909 = (state_26929[(8)]);
var state_26929__$1 = state_26929;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26929__$1,(11),out,inst_26909);
} else {
if((state_val_26930 === (5))){
var inst_26923 = cljs.core.async.close_BANG_(out);
var state_26929__$1 = state_26929;
var statearr_26942_26961 = state_26929__$1;
(statearr_26942_26961[(2)] = inst_26923);

(statearr_26942_26961[(1)] = (6));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26930 === (10))){
var inst_26921 = (state_26929[(2)]);
var state_26929__$1 = state_26929;
var statearr_26943_26962 = state_26929__$1;
(statearr_26943_26962[(2)] = inst_26921);

(statearr_26943_26962[(1)] = (6));


return cljs.core.constant$keyword$127;
} else {
if((state_val_26930 === (8))){
var inst_26910 = (state_26929[(9)]);
var inst_26908 = (state_26929[(7)]);
var inst_26901 = (state_26929[(10)]);
var inst_26909 = (state_26929[(8)]);
var inst_26913 = (function (){var c = inst_26910;
var v = inst_26909;
var vec__26906 = inst_26908;
var cs = inst_26901;
return ((function (c,v,vec__26906,cs,inst_26910,inst_26908,inst_26901,inst_26909,state_val_26930,c__12070__auto___26953,out){
return (function (p1__26844_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26844_SHARP_);
});
;})(c,v,vec__26906,cs,inst_26910,inst_26908,inst_26901,inst_26909,state_val_26930,c__12070__auto___26953,out))
})();
var inst_26914 = cljs.core.filterv(inst_26913,inst_26901);
var inst_26901__$1 = inst_26914;
var state_26929__$1 = (function (){var statearr_26944 = state_26929;
(statearr_26944[(10)] = inst_26901__$1);

return statearr_26944;
})();
var statearr_26945_26963 = state_26929__$1;
(statearr_26945_26963[(2)] = null);

(statearr_26945_26963[(1)] = (2));


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
});})(c__12070__auto___26953,out))
;
return ((function (switch__12055__auto__,c__12070__auto___26953,out){
return (function() {
var state_machine__12056__auto__ = null;
var state_machine__12056__auto____0 = (function (){
var statearr_26949 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26949[(0)] = state_machine__12056__auto__);

(statearr_26949[(1)] = (1));

return statearr_26949;
});
var state_machine__12056__auto____1 = (function (state_26929){
while(true){
var ret_value__12057__auto__ = (function (){try{while(true){
var result__12058__auto__ = switch__12055__auto__(state_26929);
if(cljs.core.keyword_identical_QMARK_(result__12058__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12058__auto__;
}
break;
}
}catch (e26950){if((e26950 instanceof Object)){
var ex__12059__auto__ = e26950;
var statearr_26951_26964 = state_26929;
(statearr_26951_26964[(5)] = ex__12059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26929);

return cljs.core.constant$keyword$127;
} else {
throw e26950;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12057__auto__,cljs.core.constant$keyword$127)){
var G__26965 = state_26929;
state_26929 = G__26965;
continue;
} else {
return ret_value__12057__auto__;
}
break;
}
});
state_machine__12056__auto__ = function(state_26929){
switch(arguments.length){
case 0:
return state_machine__12056__auto____0.call(this);
case 1:
return state_machine__12056__auto____1.call(this,state_26929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12056__auto____0;
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12056__auto____1;
return state_machine__12056__auto__;
})()
;})(switch__12055__auto__,c__12070__auto___26953,out))
})();
var state__12072__auto__ = (function (){var statearr_26952 = (function (){return (f__12071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12071__auto__.cljs$core$IFn$_invoke$arity$0() : f__12071__auto__.call(null));
})();
(statearr_26952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12070__auto___26953);

return statearr_26952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12072__auto__);
});})(c__12070__auto___26953,out))
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
var c__12070__auto___27061 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12070__auto___27061,out){
return (function (){
var f__12071__auto__ = (function (){var switch__12055__auto__ = ((function (c__12070__auto___27061,out){
return (function (state_27038){
var state_val_27039 = (state_27038[(1)]);
if((state_val_27039 === (7))){
var inst_27020 = (state_27038[(7)]);
var inst_27020__$1 = (state_27038[(2)]);
var inst_27021 = (inst_27020__$1 == null);
var inst_27022 = cljs.core.not(inst_27021);
var state_27038__$1 = (function (){var statearr_27040 = state_27038;
(statearr_27040[(7)] = inst_27020__$1);

return statearr_27040;
})();
if(inst_27022){
var statearr_27041_27062 = state_27038__$1;
(statearr_27041_27062[(1)] = (8));

} else {
var statearr_27042_27063 = state_27038__$1;
(statearr_27042_27063[(1)] = (9));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_27039 === (1))){
var inst_27015 = (0);
var state_27038__$1 = (function (){var statearr_27043 = state_27038;
(statearr_27043[(8)] = inst_27015);

return statearr_27043;
})();
var statearr_27044_27064 = state_27038__$1;
(statearr_27044_27064[(2)] = null);

(statearr_27044_27064[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27039 === (4))){
var state_27038__$1 = state_27038;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27038__$1,(7),ch);
} else {
if((state_val_27039 === (6))){
var inst_27033 = (state_27038[(2)]);
var state_27038__$1 = state_27038;
var statearr_27045_27065 = state_27038__$1;
(statearr_27045_27065[(2)] = inst_27033);

(statearr_27045_27065[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27039 === (3))){
var inst_27035 = (state_27038[(2)]);
var inst_27036 = cljs.core.async.close_BANG_(out);
var state_27038__$1 = (function (){var statearr_27046 = state_27038;
(statearr_27046[(9)] = inst_27035);

return statearr_27046;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27038__$1,inst_27036);
} else {
if((state_val_27039 === (2))){
var inst_27015 = (state_27038[(8)]);
var inst_27017 = (inst_27015 < n);
var state_27038__$1 = state_27038;
if(cljs.core.truth_(inst_27017)){
var statearr_27047_27066 = state_27038__$1;
(statearr_27047_27066[(1)] = (4));

} else {
var statearr_27048_27067 = state_27038__$1;
(statearr_27048_27067[(1)] = (5));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_27039 === (11))){
var inst_27015 = (state_27038[(8)]);
var inst_27025 = (state_27038[(2)]);
var inst_27026 = (inst_27015 + (1));
var inst_27015__$1 = inst_27026;
var state_27038__$1 = (function (){var statearr_27049 = state_27038;
(statearr_27049[(8)] = inst_27015__$1);

(statearr_27049[(10)] = inst_27025);

return statearr_27049;
})();
var statearr_27050_27068 = state_27038__$1;
(statearr_27050_27068[(2)] = null);

(statearr_27050_27068[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27039 === (9))){
var state_27038__$1 = state_27038;
var statearr_27051_27069 = state_27038__$1;
(statearr_27051_27069[(2)] = null);

(statearr_27051_27069[(1)] = (10));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27039 === (5))){
var state_27038__$1 = state_27038;
var statearr_27052_27070 = state_27038__$1;
(statearr_27052_27070[(2)] = null);

(statearr_27052_27070[(1)] = (6));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27039 === (10))){
var inst_27030 = (state_27038[(2)]);
var state_27038__$1 = state_27038;
var statearr_27053_27071 = state_27038__$1;
(statearr_27053_27071[(2)] = inst_27030);

(statearr_27053_27071[(1)] = (6));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27039 === (8))){
var inst_27020 = (state_27038[(7)]);
var state_27038__$1 = state_27038;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27038__$1,(11),out,inst_27020);
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
});})(c__12070__auto___27061,out))
;
return ((function (switch__12055__auto__,c__12070__auto___27061,out){
return (function() {
var state_machine__12056__auto__ = null;
var state_machine__12056__auto____0 = (function (){
var statearr_27057 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27057[(0)] = state_machine__12056__auto__);

(statearr_27057[(1)] = (1));

return statearr_27057;
});
var state_machine__12056__auto____1 = (function (state_27038){
while(true){
var ret_value__12057__auto__ = (function (){try{while(true){
var result__12058__auto__ = switch__12055__auto__(state_27038);
if(cljs.core.keyword_identical_QMARK_(result__12058__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12058__auto__;
}
break;
}
}catch (e27058){if((e27058 instanceof Object)){
var ex__12059__auto__ = e27058;
var statearr_27059_27072 = state_27038;
(statearr_27059_27072[(5)] = ex__12059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27038);

return cljs.core.constant$keyword$127;
} else {
throw e27058;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12057__auto__,cljs.core.constant$keyword$127)){
var G__27073 = state_27038;
state_27038 = G__27073;
continue;
} else {
return ret_value__12057__auto__;
}
break;
}
});
state_machine__12056__auto__ = function(state_27038){
switch(arguments.length){
case 0:
return state_machine__12056__auto____0.call(this);
case 1:
return state_machine__12056__auto____1.call(this,state_27038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12056__auto____0;
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12056__auto____1;
return state_machine__12056__auto__;
})()
;})(switch__12055__auto__,c__12070__auto___27061,out))
})();
var state__12072__auto__ = (function (){var statearr_27060 = (function (){return (f__12071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12071__auto__.cljs$core$IFn$_invoke$arity$0() : f__12071__auto__.call(null));
})();
(statearr_27060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12070__auto___27061);

return statearr_27060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12072__auto__);
});})(c__12070__auto___27061,out))
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
if(typeof cljs.core.async.t27086 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27086 = (function (ch,f,map_LT_,meta27087){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27087 = meta27087;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27086.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27086.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t27086.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27086.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t27089 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27089 = (function (fn1,_,meta27087,map_LT_,f,ch,meta27090){
this.fn1 = fn1;
this._ = _;
this.meta27087 = meta27087;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27090 = meta27090;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27089.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27089.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t27089.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27074_SHARP_){
var G__27092 = (((p1__27074_SHARP_ == null))?null:(function (){var G__27093 = p1__27074_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__27093) : self__.f.call(null,G__27093));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__27092) : f1.call(null,G__27092));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t27089.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27091){
var self__ = this;
var _27091__$1 = this;
return self__.meta27090;
});})(___$1))
;

cljs.core.async.t27089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27091,meta27090__$1){
var self__ = this;
var _27091__$1 = this;
return (new cljs.core.async.t27089(self__.fn1,self__._,self__.meta27087,self__.map_LT_,self__.f,self__.ch,meta27090__$1));
});})(___$1))
;

cljs.core.async.t27089.cljs$lang$type = true;

cljs.core.async.t27089.cljs$lang$ctorStr = "cljs.core.async/t27089";

cljs.core.async.t27089.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core.async/t27089");
});})(___$1))
;

cljs.core.async.__GT_t27089 = ((function (___$1){
return (function __GT_t27089(fn1__$1,___$2,meta27087__$1,map_LT___$1,f__$1,ch__$1,meta27090){
return (new cljs.core.async.t27089(fn1__$1,___$2,meta27087__$1,map_LT___$1,f__$1,ch__$1,meta27090));
});})(___$1))
;

}

return (new cljs.core.async.t27089(fn1,___$1,self__.meta27087,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,737,cljs.core.constant$keyword$10,10,cljs.core.constant$keyword$11,731,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3719__auto__ = ret;
if(cljs.core.truth_(and__3719__auto__)){
return !(((function (){var G__27094 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27094) : cljs.core.deref.call(null,G__27094));
})() == null));
} else {
return and__3719__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__27095 = (function (){var G__27096 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27096) : cljs.core.deref.call(null,G__27096));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__27095) : self__.f.call(null,G__27095));
})());
} else {
return ret;
}
});

cljs.core.async.t27086.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27086.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t27086.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t27086.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27088){
var self__ = this;
var _27088__$1 = this;
return self__.meta27087;
});

cljs.core.async.t27086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27088,meta27087__$1){
var self__ = this;
var _27088__$1 = this;
return (new cljs.core.async.t27086(self__.ch,self__.f,self__.map_LT_,meta27087__$1));
});

cljs.core.async.t27086.cljs$lang$type = true;

cljs.core.async.t27086.cljs$lang$ctorStr = "cljs.core.async/t27086";

cljs.core.async.t27086.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core.async/t27086");
});

cljs.core.async.__GT_t27086 = (function __GT_t27086(ch__$1,f__$1,map_LT___$1,meta27087){
return (new cljs.core.async.t27086(ch__$1,f__$1,map_LT___$1,meta27087));
});

}

return (new cljs.core.async.t27086(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,743,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,722,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t27101 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27101 = (function (ch,f,map_GT_,meta27102){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27102 = meta27102;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27101.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27101.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__27104 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__27104) : self__.f.call(null,G__27104));
})(),fn1);
});

cljs.core.async.t27101.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27101.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t27101.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27101.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t27101.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27103){
var self__ = this;
var _27103__$1 = this;
return self__.meta27102;
});

cljs.core.async.t27101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27103,meta27102__$1){
var self__ = this;
var _27103__$1 = this;
return (new cljs.core.async.t27101(self__.ch,self__.f,self__.map_GT_,meta27102__$1));
});

cljs.core.async.t27101.cljs$lang$type = true;

cljs.core.async.t27101.cljs$lang$ctorStr = "cljs.core.async/t27101";

cljs.core.async.t27101.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core.async/t27101");
});

cljs.core.async.__GT_t27101 = (function __GT_t27101(ch__$1,f__$1,map_GT___$1,meta27102){
return (new cljs.core.async.t27101(ch__$1,f__$1,map_GT___$1,meta27102));
});

}

return (new cljs.core.async.t27101(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,34,cljs.core.constant$keyword$9,757,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,748,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t27109 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27109 = (function (ch,p,filter_GT_,meta27110){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27110 = meta27110;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27109.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27109.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__27112 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__27112) : self__.p.call(null,G__27112));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t27109.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27109.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t27109.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27109.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t27109.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t27109.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27111){
var self__ = this;
var _27111__$1 = this;
return self__.meta27110;
});

cljs.core.async.t27109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27111,meta27110__$1){
var self__ = this;
var _27111__$1 = this;
return (new cljs.core.async.t27109(self__.ch,self__.p,self__.filter_GT_,meta27110__$1));
});

cljs.core.async.t27109.cljs$lang$type = true;

cljs.core.async.t27109.cljs$lang$ctorStr = "cljs.core.async/t27109";

cljs.core.async.t27109.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core.async/t27109");
});

cljs.core.async.__GT_t27109 = (function __GT_t27109(ch__$1,p__$1,filter_GT___$1,meta27110){
return (new cljs.core.async.t27109(ch__$1,p__$1,filter_GT___$1,meta27110));
});

}

return (new cljs.core.async.t27109(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,774,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,762,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async.cljs"], null)));
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
var c__12070__auto___27200 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12070__auto___27200,out){
return (function (){
var f__12071__auto__ = (function (){var switch__12055__auto__ = ((function (c__12070__auto___27200,out){
return (function (state_27178){
var state_val_27179 = (state_27178[(1)]);
if((state_val_27179 === (7))){
var inst_27174 = (state_27178[(2)]);
var state_27178__$1 = state_27178;
var statearr_27180_27201 = state_27178__$1;
(statearr_27180_27201[(2)] = inst_27174);

(statearr_27180_27201[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27179 === (1))){
var state_27178__$1 = state_27178;
var statearr_27181_27202 = state_27178__$1;
(statearr_27181_27202[(2)] = null);

(statearr_27181_27202[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27179 === (4))){
var inst_27160 = (state_27178[(7)]);
var inst_27160__$1 = (state_27178[(2)]);
var inst_27161 = (inst_27160__$1 == null);
var state_27178__$1 = (function (){var statearr_27182 = state_27178;
(statearr_27182[(7)] = inst_27160__$1);

return statearr_27182;
})();
if(cljs.core.truth_(inst_27161)){
var statearr_27183_27203 = state_27178__$1;
(statearr_27183_27203[(1)] = (5));

} else {
var statearr_27184_27204 = state_27178__$1;
(statearr_27184_27204[(1)] = (6));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_27179 === (6))){
var inst_27160 = (state_27178[(7)]);
var inst_27165 = (function (){var G__27185 = inst_27160;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__27185) : p.call(null,G__27185));
})();
var state_27178__$1 = state_27178;
if(cljs.core.truth_(inst_27165)){
var statearr_27186_27205 = state_27178__$1;
(statearr_27186_27205[(1)] = (8));

} else {
var statearr_27187_27206 = state_27178__$1;
(statearr_27187_27206[(1)] = (9));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_27179 === (3))){
var inst_27176 = (state_27178[(2)]);
var state_27178__$1 = state_27178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27178__$1,inst_27176);
} else {
if((state_val_27179 === (2))){
var state_27178__$1 = state_27178;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27178__$1,(4),ch);
} else {
if((state_val_27179 === (11))){
var inst_27168 = (state_27178[(2)]);
var state_27178__$1 = state_27178;
var statearr_27188_27207 = state_27178__$1;
(statearr_27188_27207[(2)] = inst_27168);

(statearr_27188_27207[(1)] = (10));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27179 === (9))){
var state_27178__$1 = state_27178;
var statearr_27189_27208 = state_27178__$1;
(statearr_27189_27208[(2)] = null);

(statearr_27189_27208[(1)] = (10));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27179 === (5))){
var inst_27163 = cljs.core.async.close_BANG_(out);
var state_27178__$1 = state_27178;
var statearr_27190_27209 = state_27178__$1;
(statearr_27190_27209[(2)] = inst_27163);

(statearr_27190_27209[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27179 === (10))){
var inst_27171 = (state_27178[(2)]);
var state_27178__$1 = (function (){var statearr_27191 = state_27178;
(statearr_27191[(8)] = inst_27171);

return statearr_27191;
})();
var statearr_27192_27210 = state_27178__$1;
(statearr_27192_27210[(2)] = null);

(statearr_27192_27210[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27179 === (8))){
var inst_27160 = (state_27178[(7)]);
var state_27178__$1 = state_27178;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27178__$1,(11),out,inst_27160);
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
});})(c__12070__auto___27200,out))
;
return ((function (switch__12055__auto__,c__12070__auto___27200,out){
return (function() {
var state_machine__12056__auto__ = null;
var state_machine__12056__auto____0 = (function (){
var statearr_27196 = [null,null,null,null,null,null,null,null,null];
(statearr_27196[(0)] = state_machine__12056__auto__);

(statearr_27196[(1)] = (1));

return statearr_27196;
});
var state_machine__12056__auto____1 = (function (state_27178){
while(true){
var ret_value__12057__auto__ = (function (){try{while(true){
var result__12058__auto__ = switch__12055__auto__(state_27178);
if(cljs.core.keyword_identical_QMARK_(result__12058__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12058__auto__;
}
break;
}
}catch (e27197){if((e27197 instanceof Object)){
var ex__12059__auto__ = e27197;
var statearr_27198_27211 = state_27178;
(statearr_27198_27211[(5)] = ex__12059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27178);

return cljs.core.constant$keyword$127;
} else {
throw e27197;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12057__auto__,cljs.core.constant$keyword$127)){
var G__27212 = state_27178;
state_27178 = G__27212;
continue;
} else {
return ret_value__12057__auto__;
}
break;
}
});
state_machine__12056__auto__ = function(state_27178){
switch(arguments.length){
case 0:
return state_machine__12056__auto____0.call(this);
case 1:
return state_machine__12056__auto____1.call(this,state_27178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12056__auto____0;
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12056__auto____1;
return state_machine__12056__auto__;
})()
;})(switch__12055__auto__,c__12070__auto___27200,out))
})();
var state__12072__auto__ = (function (){var statearr_27199 = (function (){return (f__12071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12071__auto__.cljs$core$IFn$_invoke$arity$0() : f__12071__auto__.call(null));
})();
(statearr_27199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12070__auto___27200);

return statearr_27199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12072__auto__);
});})(c__12070__auto___27200,out))
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
var c__12070__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12070__auto__){
return (function (){
var f__12071__auto__ = (function (){var switch__12055__auto__ = ((function (c__12070__auto__){
return (function (state_27382){
var state_val_27383 = (state_27382[(1)]);
if((state_val_27383 === (7))){
var inst_27378 = (state_27382[(2)]);
var state_27382__$1 = state_27382;
var statearr_27384_27426 = state_27382__$1;
(statearr_27384_27426[(2)] = inst_27378);

(statearr_27384_27426[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27383 === (20))){
var inst_27348 = (state_27382[(7)]);
var inst_27359 = (state_27382[(2)]);
var inst_27360 = cljs.core.next(inst_27348);
var inst_27334 = inst_27360;
var inst_27335 = null;
var inst_27336 = (0);
var inst_27337 = (0);
var state_27382__$1 = (function (){var statearr_27385 = state_27382;
(statearr_27385[(8)] = inst_27335);

(statearr_27385[(9)] = inst_27336);

(statearr_27385[(10)] = inst_27337);

(statearr_27385[(11)] = inst_27359);

(statearr_27385[(12)] = inst_27334);

return statearr_27385;
})();
var statearr_27386_27427 = state_27382__$1;
(statearr_27386_27427[(2)] = null);

(statearr_27386_27427[(1)] = (8));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27383 === (1))){
var state_27382__$1 = state_27382;
var statearr_27387_27428 = state_27382__$1;
(statearr_27387_27428[(2)] = null);

(statearr_27387_27428[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27383 === (4))){
var inst_27323 = (state_27382[(13)]);
var inst_27323__$1 = (state_27382[(2)]);
var inst_27324 = (inst_27323__$1 == null);
var state_27382__$1 = (function (){var statearr_27388 = state_27382;
(statearr_27388[(13)] = inst_27323__$1);

return statearr_27388;
})();
if(cljs.core.truth_(inst_27324)){
var statearr_27389_27429 = state_27382__$1;
(statearr_27389_27429[(1)] = (5));

} else {
var statearr_27390_27430 = state_27382__$1;
(statearr_27390_27430[(1)] = (6));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_27383 === (15))){
var state_27382__$1 = state_27382;
var statearr_27394_27431 = state_27382__$1;
(statearr_27394_27431[(2)] = null);

(statearr_27394_27431[(1)] = (16));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27383 === (21))){
var state_27382__$1 = state_27382;
var statearr_27395_27432 = state_27382__$1;
(statearr_27395_27432[(2)] = null);

(statearr_27395_27432[(1)] = (23));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27383 === (13))){
var inst_27335 = (state_27382[(8)]);
var inst_27336 = (state_27382[(9)]);
var inst_27337 = (state_27382[(10)]);
var inst_27334 = (state_27382[(12)]);
var inst_27344 = (state_27382[(2)]);
var inst_27345 = (inst_27337 + (1));
var tmp27391 = inst_27335;
var tmp27392 = inst_27336;
var tmp27393 = inst_27334;
var inst_27334__$1 = tmp27393;
var inst_27335__$1 = tmp27391;
var inst_27336__$1 = tmp27392;
var inst_27337__$1 = inst_27345;
var state_27382__$1 = (function (){var statearr_27396 = state_27382;
(statearr_27396[(8)] = inst_27335__$1);

(statearr_27396[(9)] = inst_27336__$1);

(statearr_27396[(10)] = inst_27337__$1);

(statearr_27396[(14)] = inst_27344);

(statearr_27396[(12)] = inst_27334__$1);

return statearr_27396;
})();
var statearr_27397_27433 = state_27382__$1;
(statearr_27397_27433[(2)] = null);

(statearr_27397_27433[(1)] = (8));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27383 === (22))){
var state_27382__$1 = state_27382;
var statearr_27398_27434 = state_27382__$1;
(statearr_27398_27434[(2)] = null);

(statearr_27398_27434[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27383 === (6))){
var inst_27323 = (state_27382[(13)]);
var inst_27332 = (function (){var G__27399 = inst_27323;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27399) : f.call(null,G__27399));
})();
var inst_27333 = cljs.core.seq(inst_27332);
var inst_27334 = inst_27333;
var inst_27335 = null;
var inst_27336 = (0);
var inst_27337 = (0);
var state_27382__$1 = (function (){var statearr_27400 = state_27382;
(statearr_27400[(8)] = inst_27335);

(statearr_27400[(9)] = inst_27336);

(statearr_27400[(10)] = inst_27337);

(statearr_27400[(12)] = inst_27334);

return statearr_27400;
})();
var statearr_27401_27435 = state_27382__$1;
(statearr_27401_27435[(2)] = null);

(statearr_27401_27435[(1)] = (8));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27383 === (17))){
var inst_27348 = (state_27382[(7)]);
var inst_27352 = cljs.core.chunk_first(inst_27348);
var inst_27353 = cljs.core.chunk_rest(inst_27348);
var inst_27354 = cljs.core.count(inst_27352);
var inst_27334 = inst_27353;
var inst_27335 = inst_27352;
var inst_27336 = inst_27354;
var inst_27337 = (0);
var state_27382__$1 = (function (){var statearr_27402 = state_27382;
(statearr_27402[(8)] = inst_27335);

(statearr_27402[(9)] = inst_27336);

(statearr_27402[(10)] = inst_27337);

(statearr_27402[(12)] = inst_27334);

return statearr_27402;
})();
var statearr_27403_27436 = state_27382__$1;
(statearr_27403_27436[(2)] = null);

(statearr_27403_27436[(1)] = (8));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27383 === (3))){
var inst_27380 = (state_27382[(2)]);
var state_27382__$1 = state_27382;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27382__$1,inst_27380);
} else {
if((state_val_27383 === (12))){
var inst_27368 = (state_27382[(2)]);
var state_27382__$1 = state_27382;
var statearr_27404_27437 = state_27382__$1;
(statearr_27404_27437[(2)] = inst_27368);

(statearr_27404_27437[(1)] = (9));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27383 === (2))){
var state_27382__$1 = state_27382;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27382__$1,(4),in$);
} else {
if((state_val_27383 === (23))){
var inst_27376 = (state_27382[(2)]);
var state_27382__$1 = state_27382;
var statearr_27405_27438 = state_27382__$1;
(statearr_27405_27438[(2)] = inst_27376);

(statearr_27405_27438[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27383 === (19))){
var inst_27363 = (state_27382[(2)]);
var state_27382__$1 = state_27382;
var statearr_27406_27439 = state_27382__$1;
(statearr_27406_27439[(2)] = inst_27363);

(statearr_27406_27439[(1)] = (16));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27383 === (11))){
var inst_27348 = (state_27382[(7)]);
var inst_27334 = (state_27382[(12)]);
var inst_27348__$1 = cljs.core.seq(inst_27334);
var state_27382__$1 = (function (){var statearr_27407 = state_27382;
(statearr_27407[(7)] = inst_27348__$1);

return statearr_27407;
})();
if(inst_27348__$1){
var statearr_27408_27440 = state_27382__$1;
(statearr_27408_27440[(1)] = (14));

} else {
var statearr_27409_27441 = state_27382__$1;
(statearr_27409_27441[(1)] = (15));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_27383 === (9))){
var inst_27370 = (state_27382[(2)]);
var inst_27371 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_27382__$1 = (function (){var statearr_27410 = state_27382;
(statearr_27410[(15)] = inst_27370);

return statearr_27410;
})();
if(cljs.core.truth_(inst_27371)){
var statearr_27411_27442 = state_27382__$1;
(statearr_27411_27442[(1)] = (21));

} else {
var statearr_27412_27443 = state_27382__$1;
(statearr_27412_27443[(1)] = (22));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_27383 === (5))){
var inst_27326 = cljs.core.async.close_BANG_(out);
var state_27382__$1 = state_27382;
var statearr_27413_27444 = state_27382__$1;
(statearr_27413_27444[(2)] = inst_27326);

(statearr_27413_27444[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27383 === (14))){
var inst_27348 = (state_27382[(7)]);
var inst_27350 = cljs.core.chunked_seq_QMARK_(inst_27348);
var state_27382__$1 = state_27382;
if(inst_27350){
var statearr_27414_27445 = state_27382__$1;
(statearr_27414_27445[(1)] = (17));

} else {
var statearr_27415_27446 = state_27382__$1;
(statearr_27415_27446[(1)] = (18));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_27383 === (16))){
var inst_27366 = (state_27382[(2)]);
var state_27382__$1 = state_27382;
var statearr_27416_27447 = state_27382__$1;
(statearr_27416_27447[(2)] = inst_27366);

(statearr_27416_27447[(1)] = (12));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27383 === (10))){
var inst_27335 = (state_27382[(8)]);
var inst_27337 = (state_27382[(10)]);
var inst_27342 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_27335,inst_27337);
var state_27382__$1 = state_27382;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27382__$1,(13),out,inst_27342);
} else {
if((state_val_27383 === (18))){
var inst_27348 = (state_27382[(7)]);
var inst_27357 = cljs.core.first(inst_27348);
var state_27382__$1 = state_27382;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27382__$1,(20),out,inst_27357);
} else {
if((state_val_27383 === (8))){
var inst_27336 = (state_27382[(9)]);
var inst_27337 = (state_27382[(10)]);
var inst_27339 = (inst_27337 < inst_27336);
var inst_27340 = inst_27339;
var state_27382__$1 = state_27382;
if(cljs.core.truth_(inst_27340)){
var statearr_27417_27448 = state_27382__$1;
(statearr_27417_27448[(1)] = (10));

} else {
var statearr_27418_27449 = state_27382__$1;
(statearr_27418_27449[(1)] = (11));

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
});})(c__12070__auto__))
;
return ((function (switch__12055__auto__,c__12070__auto__){
return (function() {
var state_machine__12056__auto__ = null;
var state_machine__12056__auto____0 = (function (){
var statearr_27422 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27422[(0)] = state_machine__12056__auto__);

(statearr_27422[(1)] = (1));

return statearr_27422;
});
var state_machine__12056__auto____1 = (function (state_27382){
while(true){
var ret_value__12057__auto__ = (function (){try{while(true){
var result__12058__auto__ = switch__12055__auto__(state_27382);
if(cljs.core.keyword_identical_QMARK_(result__12058__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12058__auto__;
}
break;
}
}catch (e27423){if((e27423 instanceof Object)){
var ex__12059__auto__ = e27423;
var statearr_27424_27450 = state_27382;
(statearr_27424_27450[(5)] = ex__12059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27382);

return cljs.core.constant$keyword$127;
} else {
throw e27423;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12057__auto__,cljs.core.constant$keyword$127)){
var G__27451 = state_27382;
state_27382 = G__27451;
continue;
} else {
return ret_value__12057__auto__;
}
break;
}
});
state_machine__12056__auto__ = function(state_27382){
switch(arguments.length){
case 0:
return state_machine__12056__auto____0.call(this);
case 1:
return state_machine__12056__auto____1.call(this,state_27382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12056__auto____0;
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12056__auto____1;
return state_machine__12056__auto__;
})()
;})(switch__12055__auto__,c__12070__auto__))
})();
var state__12072__auto__ = (function (){var statearr_27425 = (function (){return (f__12071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12071__auto__.cljs$core$IFn$_invoke$arity$0() : f__12071__auto__.call(null));
})();
(statearr_27425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12070__auto__);

return statearr_27425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12072__auto__);
});})(c__12070__auto__))
);

return c__12070__auto__;
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
var c__12070__auto___27556 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12070__auto___27556,out){
return (function (){
var f__12071__auto__ = (function (){var switch__12055__auto__ = ((function (c__12070__auto___27556,out){
return (function (state_27531){
var state_val_27532 = (state_27531[(1)]);
if((state_val_27532 === (7))){
var inst_27526 = (state_27531[(2)]);
var state_27531__$1 = state_27531;
var statearr_27533_27557 = state_27531__$1;
(statearr_27533_27557[(2)] = inst_27526);

(statearr_27533_27557[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27532 === (1))){
var inst_27508 = null;
var state_27531__$1 = (function (){var statearr_27534 = state_27531;
(statearr_27534[(7)] = inst_27508);

return statearr_27534;
})();
var statearr_27535_27558 = state_27531__$1;
(statearr_27535_27558[(2)] = null);

(statearr_27535_27558[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27532 === (4))){
var inst_27511 = (state_27531[(8)]);
var inst_27511__$1 = (state_27531[(2)]);
var inst_27512 = (inst_27511__$1 == null);
var inst_27513 = cljs.core.not(inst_27512);
var state_27531__$1 = (function (){var statearr_27536 = state_27531;
(statearr_27536[(8)] = inst_27511__$1);

return statearr_27536;
})();
if(inst_27513){
var statearr_27537_27559 = state_27531__$1;
(statearr_27537_27559[(1)] = (5));

} else {
var statearr_27538_27560 = state_27531__$1;
(statearr_27538_27560[(1)] = (6));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_27532 === (6))){
var state_27531__$1 = state_27531;
var statearr_27539_27561 = state_27531__$1;
(statearr_27539_27561[(2)] = null);

(statearr_27539_27561[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27532 === (3))){
var inst_27528 = (state_27531[(2)]);
var inst_27529 = cljs.core.async.close_BANG_(out);
var state_27531__$1 = (function (){var statearr_27540 = state_27531;
(statearr_27540[(9)] = inst_27528);

return statearr_27540;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27531__$1,inst_27529);
} else {
if((state_val_27532 === (2))){
var state_27531__$1 = state_27531;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27531__$1,(4),ch);
} else {
if((state_val_27532 === (11))){
var inst_27511 = (state_27531[(8)]);
var inst_27520 = (state_27531[(2)]);
var inst_27508 = inst_27511;
var state_27531__$1 = (function (){var statearr_27541 = state_27531;
(statearr_27541[(10)] = inst_27520);

(statearr_27541[(7)] = inst_27508);

return statearr_27541;
})();
var statearr_27542_27562 = state_27531__$1;
(statearr_27542_27562[(2)] = null);

(statearr_27542_27562[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27532 === (9))){
var inst_27511 = (state_27531[(8)]);
var state_27531__$1 = state_27531;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27531__$1,(11),out,inst_27511);
} else {
if((state_val_27532 === (5))){
var inst_27508 = (state_27531[(7)]);
var inst_27511 = (state_27531[(8)]);
var inst_27515 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27511,inst_27508);
var state_27531__$1 = state_27531;
if(inst_27515){
var statearr_27544_27563 = state_27531__$1;
(statearr_27544_27563[(1)] = (8));

} else {
var statearr_27545_27564 = state_27531__$1;
(statearr_27545_27564[(1)] = (9));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_27532 === (10))){
var inst_27523 = (state_27531[(2)]);
var state_27531__$1 = state_27531;
var statearr_27546_27565 = state_27531__$1;
(statearr_27546_27565[(2)] = inst_27523);

(statearr_27546_27565[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27532 === (8))){
var inst_27508 = (state_27531[(7)]);
var tmp27543 = inst_27508;
var inst_27508__$1 = tmp27543;
var state_27531__$1 = (function (){var statearr_27547 = state_27531;
(statearr_27547[(7)] = inst_27508__$1);

return statearr_27547;
})();
var statearr_27548_27566 = state_27531__$1;
(statearr_27548_27566[(2)] = null);

(statearr_27548_27566[(1)] = (2));


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
});})(c__12070__auto___27556,out))
;
return ((function (switch__12055__auto__,c__12070__auto___27556,out){
return (function() {
var state_machine__12056__auto__ = null;
var state_machine__12056__auto____0 = (function (){
var statearr_27552 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27552[(0)] = state_machine__12056__auto__);

(statearr_27552[(1)] = (1));

return statearr_27552;
});
var state_machine__12056__auto____1 = (function (state_27531){
while(true){
var ret_value__12057__auto__ = (function (){try{while(true){
var result__12058__auto__ = switch__12055__auto__(state_27531);
if(cljs.core.keyword_identical_QMARK_(result__12058__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12058__auto__;
}
break;
}
}catch (e27553){if((e27553 instanceof Object)){
var ex__12059__auto__ = e27553;
var statearr_27554_27567 = state_27531;
(statearr_27554_27567[(5)] = ex__12059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27531);

return cljs.core.constant$keyword$127;
} else {
throw e27553;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12057__auto__,cljs.core.constant$keyword$127)){
var G__27568 = state_27531;
state_27531 = G__27568;
continue;
} else {
return ret_value__12057__auto__;
}
break;
}
});
state_machine__12056__auto__ = function(state_27531){
switch(arguments.length){
case 0:
return state_machine__12056__auto____0.call(this);
case 1:
return state_machine__12056__auto____1.call(this,state_27531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12056__auto____0;
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12056__auto____1;
return state_machine__12056__auto__;
})()
;})(switch__12055__auto__,c__12070__auto___27556,out))
})();
var state__12072__auto__ = (function (){var statearr_27555 = (function (){return (f__12071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12071__auto__.cljs$core$IFn$_invoke$arity$0() : f__12071__auto__.call(null));
})();
(statearr_27555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12070__auto___27556);

return statearr_27555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12072__auto__);
});})(c__12070__auto___27556,out))
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
var c__12070__auto___27706 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12070__auto___27706,out){
return (function (){
var f__12071__auto__ = (function (){var switch__12055__auto__ = ((function (c__12070__auto___27706,out){
return (function (state_27676){
var state_val_27677 = (state_27676[(1)]);
if((state_val_27677 === (7))){
var inst_27672 = (state_27676[(2)]);
var state_27676__$1 = state_27676;
var statearr_27678_27707 = state_27676__$1;
(statearr_27678_27707[(2)] = inst_27672);

(statearr_27678_27707[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27677 === (1))){
var inst_27639 = (new Array(n));
var inst_27640 = inst_27639;
var inst_27641 = (0);
var state_27676__$1 = (function (){var statearr_27679 = state_27676;
(statearr_27679[(7)] = inst_27640);

(statearr_27679[(8)] = inst_27641);

return statearr_27679;
})();
var statearr_27680_27708 = state_27676__$1;
(statearr_27680_27708[(2)] = null);

(statearr_27680_27708[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27677 === (4))){
var inst_27644 = (state_27676[(9)]);
var inst_27644__$1 = (state_27676[(2)]);
var inst_27645 = (inst_27644__$1 == null);
var inst_27646 = cljs.core.not(inst_27645);
var state_27676__$1 = (function (){var statearr_27681 = state_27676;
(statearr_27681[(9)] = inst_27644__$1);

return statearr_27681;
})();
if(inst_27646){
var statearr_27682_27709 = state_27676__$1;
(statearr_27682_27709[(1)] = (5));

} else {
var statearr_27683_27710 = state_27676__$1;
(statearr_27683_27710[(1)] = (6));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_27677 === (15))){
var inst_27666 = (state_27676[(2)]);
var state_27676__$1 = state_27676;
var statearr_27684_27711 = state_27676__$1;
(statearr_27684_27711[(2)] = inst_27666);

(statearr_27684_27711[(1)] = (14));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27677 === (13))){
var state_27676__$1 = state_27676;
var statearr_27685_27712 = state_27676__$1;
(statearr_27685_27712[(2)] = null);

(statearr_27685_27712[(1)] = (14));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27677 === (6))){
var inst_27641 = (state_27676[(8)]);
var inst_27662 = (inst_27641 > (0));
var state_27676__$1 = state_27676;
if(cljs.core.truth_(inst_27662)){
var statearr_27686_27713 = state_27676__$1;
(statearr_27686_27713[(1)] = (12));

} else {
var statearr_27687_27714 = state_27676__$1;
(statearr_27687_27714[(1)] = (13));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_27677 === (3))){
var inst_27674 = (state_27676[(2)]);
var state_27676__$1 = state_27676;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27676__$1,inst_27674);
} else {
if((state_val_27677 === (12))){
var inst_27640 = (state_27676[(7)]);
var inst_27664 = cljs.core.vec(inst_27640);
var state_27676__$1 = state_27676;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27676__$1,(15),out,inst_27664);
} else {
if((state_val_27677 === (2))){
var state_27676__$1 = state_27676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27676__$1,(4),ch);
} else {
if((state_val_27677 === (11))){
var inst_27656 = (state_27676[(2)]);
var inst_27657 = (new Array(n));
var inst_27640 = inst_27657;
var inst_27641 = (0);
var state_27676__$1 = (function (){var statearr_27688 = state_27676;
(statearr_27688[(7)] = inst_27640);

(statearr_27688[(10)] = inst_27656);

(statearr_27688[(8)] = inst_27641);

return statearr_27688;
})();
var statearr_27689_27715 = state_27676__$1;
(statearr_27689_27715[(2)] = null);

(statearr_27689_27715[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27677 === (9))){
var inst_27640 = (state_27676[(7)]);
var inst_27654 = cljs.core.vec(inst_27640);
var state_27676__$1 = state_27676;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27676__$1,(11),out,inst_27654);
} else {
if((state_val_27677 === (5))){
var inst_27640 = (state_27676[(7)]);
var inst_27644 = (state_27676[(9)]);
var inst_27649 = (state_27676[(11)]);
var inst_27641 = (state_27676[(8)]);
var inst_27648 = (inst_27640[inst_27641] = inst_27644);
var inst_27649__$1 = (inst_27641 + (1));
var inst_27650 = (inst_27649__$1 < n);
var state_27676__$1 = (function (){var statearr_27690 = state_27676;
(statearr_27690[(12)] = inst_27648);

(statearr_27690[(11)] = inst_27649__$1);

return statearr_27690;
})();
if(cljs.core.truth_(inst_27650)){
var statearr_27691_27716 = state_27676__$1;
(statearr_27691_27716[(1)] = (8));

} else {
var statearr_27692_27717 = state_27676__$1;
(statearr_27692_27717[(1)] = (9));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_27677 === (14))){
var inst_27669 = (state_27676[(2)]);
var inst_27670 = cljs.core.async.close_BANG_(out);
var state_27676__$1 = (function (){var statearr_27694 = state_27676;
(statearr_27694[(13)] = inst_27669);

return statearr_27694;
})();
var statearr_27695_27718 = state_27676__$1;
(statearr_27695_27718[(2)] = inst_27670);

(statearr_27695_27718[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27677 === (10))){
var inst_27660 = (state_27676[(2)]);
var state_27676__$1 = state_27676;
var statearr_27696_27719 = state_27676__$1;
(statearr_27696_27719[(2)] = inst_27660);

(statearr_27696_27719[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27677 === (8))){
var inst_27640 = (state_27676[(7)]);
var inst_27649 = (state_27676[(11)]);
var tmp27693 = inst_27640;
var inst_27640__$1 = tmp27693;
var inst_27641 = inst_27649;
var state_27676__$1 = (function (){var statearr_27697 = state_27676;
(statearr_27697[(7)] = inst_27640__$1);

(statearr_27697[(8)] = inst_27641);

return statearr_27697;
})();
var statearr_27698_27720 = state_27676__$1;
(statearr_27698_27720[(2)] = null);

(statearr_27698_27720[(1)] = (2));


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
});})(c__12070__auto___27706,out))
;
return ((function (switch__12055__auto__,c__12070__auto___27706,out){
return (function() {
var state_machine__12056__auto__ = null;
var state_machine__12056__auto____0 = (function (){
var statearr_27702 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27702[(0)] = state_machine__12056__auto__);

(statearr_27702[(1)] = (1));

return statearr_27702;
});
var state_machine__12056__auto____1 = (function (state_27676){
while(true){
var ret_value__12057__auto__ = (function (){try{while(true){
var result__12058__auto__ = switch__12055__auto__(state_27676);
if(cljs.core.keyword_identical_QMARK_(result__12058__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12058__auto__;
}
break;
}
}catch (e27703){if((e27703 instanceof Object)){
var ex__12059__auto__ = e27703;
var statearr_27704_27721 = state_27676;
(statearr_27704_27721[(5)] = ex__12059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27676);

return cljs.core.constant$keyword$127;
} else {
throw e27703;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12057__auto__,cljs.core.constant$keyword$127)){
var G__27722 = state_27676;
state_27676 = G__27722;
continue;
} else {
return ret_value__12057__auto__;
}
break;
}
});
state_machine__12056__auto__ = function(state_27676){
switch(arguments.length){
case 0:
return state_machine__12056__auto____0.call(this);
case 1:
return state_machine__12056__auto____1.call(this,state_27676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12056__auto____0;
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12056__auto____1;
return state_machine__12056__auto__;
})()
;})(switch__12055__auto__,c__12070__auto___27706,out))
})();
var state__12072__auto__ = (function (){var statearr_27705 = (function (){return (f__12071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12071__auto__.cljs$core$IFn$_invoke$arity$0() : f__12071__auto__.call(null));
})();
(statearr_27705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12070__auto___27706);

return statearr_27705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12072__auto__);
});})(c__12070__auto___27706,out))
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
var c__12070__auto___27870 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12070__auto___27870,out){
return (function (){
var f__12071__auto__ = (function (){var switch__12055__auto__ = ((function (c__12070__auto___27870,out){
return (function (state_27839){
var state_val_27840 = (state_27839[(1)]);
if((state_val_27840 === (7))){
var inst_27835 = (state_27839[(2)]);
var state_27839__$1 = state_27839;
var statearr_27841_27871 = state_27839__$1;
(statearr_27841_27871[(2)] = inst_27835);

(statearr_27841_27871[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27840 === (1))){
var inst_27798 = [];
var inst_27799 = inst_27798;
var inst_27800 = cljs.core.constant$keyword$192;
var state_27839__$1 = (function (){var statearr_27842 = state_27839;
(statearr_27842[(7)] = inst_27800);

(statearr_27842[(8)] = inst_27799);

return statearr_27842;
})();
var statearr_27843_27872 = state_27839__$1;
(statearr_27843_27872[(2)] = null);

(statearr_27843_27872[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27840 === (4))){
var inst_27803 = (state_27839[(9)]);
var inst_27803__$1 = (state_27839[(2)]);
var inst_27804 = (inst_27803__$1 == null);
var inst_27805 = cljs.core.not(inst_27804);
var state_27839__$1 = (function (){var statearr_27844 = state_27839;
(statearr_27844[(9)] = inst_27803__$1);

return statearr_27844;
})();
if(inst_27805){
var statearr_27845_27873 = state_27839__$1;
(statearr_27845_27873[(1)] = (5));

} else {
var statearr_27846_27874 = state_27839__$1;
(statearr_27846_27874[(1)] = (6));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_27840 === (15))){
var inst_27829 = (state_27839[(2)]);
var state_27839__$1 = state_27839;
var statearr_27847_27875 = state_27839__$1;
(statearr_27847_27875[(2)] = inst_27829);

(statearr_27847_27875[(1)] = (14));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27840 === (13))){
var state_27839__$1 = state_27839;
var statearr_27848_27876 = state_27839__$1;
(statearr_27848_27876[(2)] = null);

(statearr_27848_27876[(1)] = (14));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27840 === (6))){
var inst_27799 = (state_27839[(8)]);
var inst_27824 = inst_27799.length;
var inst_27825 = (inst_27824 > (0));
var state_27839__$1 = state_27839;
if(cljs.core.truth_(inst_27825)){
var statearr_27849_27877 = state_27839__$1;
(statearr_27849_27877[(1)] = (12));

} else {
var statearr_27850_27878 = state_27839__$1;
(statearr_27850_27878[(1)] = (13));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_27840 === (3))){
var inst_27837 = (state_27839[(2)]);
var state_27839__$1 = state_27839;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27839__$1,inst_27837);
} else {
if((state_val_27840 === (12))){
var inst_27799 = (state_27839[(8)]);
var inst_27827 = cljs.core.vec(inst_27799);
var state_27839__$1 = state_27839;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27839__$1,(15),out,inst_27827);
} else {
if((state_val_27840 === (2))){
var state_27839__$1 = state_27839;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27839__$1,(4),ch);
} else {
if((state_val_27840 === (11))){
var inst_27803 = (state_27839[(9)]);
var inst_27807 = (state_27839[(10)]);
var inst_27817 = (state_27839[(2)]);
var inst_27818 = [];
var inst_27819 = inst_27818.push(inst_27803);
var inst_27799 = inst_27818;
var inst_27800 = inst_27807;
var state_27839__$1 = (function (){var statearr_27851 = state_27839;
(statearr_27851[(11)] = inst_27817);

(statearr_27851[(7)] = inst_27800);

(statearr_27851[(12)] = inst_27819);

(statearr_27851[(8)] = inst_27799);

return statearr_27851;
})();
var statearr_27852_27879 = state_27839__$1;
(statearr_27852_27879[(2)] = null);

(statearr_27852_27879[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27840 === (9))){
var inst_27799 = (state_27839[(8)]);
var inst_27815 = cljs.core.vec(inst_27799);
var state_27839__$1 = state_27839;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27839__$1,(11),out,inst_27815);
} else {
if((state_val_27840 === (5))){
var inst_27800 = (state_27839[(7)]);
var inst_27803 = (state_27839[(9)]);
var inst_27807 = (state_27839[(10)]);
var inst_27807__$1 = (function (){var G__27853 = inst_27803;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27853) : f.call(null,G__27853));
})();
var inst_27808 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27807__$1,inst_27800);
var inst_27809 = cljs.core.keyword_identical_QMARK_(inst_27800,cljs.core.constant$keyword$192);
var inst_27810 = (inst_27808) || (inst_27809);
var state_27839__$1 = (function (){var statearr_27854 = state_27839;
(statearr_27854[(10)] = inst_27807__$1);

return statearr_27854;
})();
if(cljs.core.truth_(inst_27810)){
var statearr_27855_27880 = state_27839__$1;
(statearr_27855_27880[(1)] = (8));

} else {
var statearr_27856_27881 = state_27839__$1;
(statearr_27856_27881[(1)] = (9));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_27840 === (14))){
var inst_27832 = (state_27839[(2)]);
var inst_27833 = cljs.core.async.close_BANG_(out);
var state_27839__$1 = (function (){var statearr_27858 = state_27839;
(statearr_27858[(13)] = inst_27832);

return statearr_27858;
})();
var statearr_27859_27882 = state_27839__$1;
(statearr_27859_27882[(2)] = inst_27833);

(statearr_27859_27882[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27840 === (10))){
var inst_27822 = (state_27839[(2)]);
var state_27839__$1 = state_27839;
var statearr_27860_27883 = state_27839__$1;
(statearr_27860_27883[(2)] = inst_27822);

(statearr_27860_27883[(1)] = (7));


return cljs.core.constant$keyword$127;
} else {
if((state_val_27840 === (8))){
var inst_27803 = (state_27839[(9)]);
var inst_27807 = (state_27839[(10)]);
var inst_27799 = (state_27839[(8)]);
var inst_27812 = inst_27799.push(inst_27803);
var tmp27857 = inst_27799;
var inst_27799__$1 = tmp27857;
var inst_27800 = inst_27807;
var state_27839__$1 = (function (){var statearr_27861 = state_27839;
(statearr_27861[(7)] = inst_27800);

(statearr_27861[(8)] = inst_27799__$1);

(statearr_27861[(14)] = inst_27812);

return statearr_27861;
})();
var statearr_27862_27884 = state_27839__$1;
(statearr_27862_27884[(2)] = null);

(statearr_27862_27884[(1)] = (2));


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
});})(c__12070__auto___27870,out))
;
return ((function (switch__12055__auto__,c__12070__auto___27870,out){
return (function() {
var state_machine__12056__auto__ = null;
var state_machine__12056__auto____0 = (function (){
var statearr_27866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27866[(0)] = state_machine__12056__auto__);

(statearr_27866[(1)] = (1));

return statearr_27866;
});
var state_machine__12056__auto____1 = (function (state_27839){
while(true){
var ret_value__12057__auto__ = (function (){try{while(true){
var result__12058__auto__ = switch__12055__auto__(state_27839);
if(cljs.core.keyword_identical_QMARK_(result__12058__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12058__auto__;
}
break;
}
}catch (e27867){if((e27867 instanceof Object)){
var ex__12059__auto__ = e27867;
var statearr_27868_27885 = state_27839;
(statearr_27868_27885[(5)] = ex__12059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27839);

return cljs.core.constant$keyword$127;
} else {
throw e27867;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12057__auto__,cljs.core.constant$keyword$127)){
var G__27886 = state_27839;
state_27839 = G__27886;
continue;
} else {
return ret_value__12057__auto__;
}
break;
}
});
state_machine__12056__auto__ = function(state_27839){
switch(arguments.length){
case 0:
return state_machine__12056__auto____0.call(this);
case 1:
return state_machine__12056__auto____1.call(this,state_27839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12056__auto____0;
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12056__auto____1;
return state_machine__12056__auto__;
})()
;})(switch__12055__auto__,c__12070__auto___27870,out))
})();
var state__12072__auto__ = (function (){var statearr_27869 = (function (){return (f__12071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12071__auto__.cljs$core$IFn$_invoke$arity$0() : f__12071__auto__.call(null));
})();
(statearr_27869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12070__auto___27870);

return statearr_27869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12072__auto__);
});})(c__12070__auto___27870,out))
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
