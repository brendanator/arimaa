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
if(typeof cljs.core.async.t22731 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22731 = (function (f,fn_handler,meta22732){
this.f = f;
this.fn_handler = fn_handler;
this.meta22732 = meta22732;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22731.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22731.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t22731.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t22731.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22733){
var self__ = this;
var _22733__$1 = this;
return self__.meta22732;
});

cljs.core.async.t22731.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22733,meta22732__$1){
var self__ = this;
var _22733__$1 = this;
return (new cljs.core.async.t22731(self__.f,self__.fn_handler,meta22732__$1));
});

cljs.core.async.t22731.cljs$lang$type = true;

cljs.core.async.t22731.cljs$lang$ctorStr = "cljs.core.async/t22731";

cljs.core.async.t22731.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t22731");
});

cljs.core.async.__GT_t22731 = (function __GT_t22731(f__$1,fn_handler__$1,meta22732){
return (new cljs.core.async.t22731(f__$1,fn_handler__$1,meta22732));
});

}

return (new cljs.core.async.t22731(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,20,cljs.core.constant$keyword$9,16,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,13,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/resources/public/js-min/cljs/core/async.cljs"], null)));
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
var G__22735 = buff;
if(G__22735){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__22735.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__22735.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__22735);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__22735);
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
var val_22752 = (function (){var G__22749 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22749) : cljs.core.deref.call(null,G__22749));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__22750_22753 = val_22752;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22750_22753) : fn1.call(null,G__22750_22753));
} else {
cljs.core.async.impl.dispatch.run(((function (val_22752,ret){
return (function (){
var G__22751 = val_22752;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22751) : fn1.call(null,G__22751));
});})(val_22752,ret))
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
var G__22762 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22762) : cljs.core.deref.call(null,G__22762));
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
var ret = (function (){var G__22763 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22763) : cljs.core.deref.call(null,G__22763));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__22764_22766 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22764_22766) : fn1.call(null,G__22764_22766));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__22765 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22765) : fn1.call(null,G__22765));
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
var n__4517__auto___22767 = n;
var x_22768 = (0);
while(true){
if((x_22768 < n__4517__auto___22767)){
(a[x_22768] = (0));

var G__22769 = (x_22768 + (1));
x_22768 = G__22769;
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

var G__22770 = (i + (1));
i = G__22770;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__22778 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22778) : cljs.core.atom.call(null,G__22778));
})();
if(typeof cljs.core.async.t22779 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22779 = (function (flag,alt_flag,meta22780){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta22780 = meta22780;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22779.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22779.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22782 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22782) : cljs.core.deref.call(null,G__22782));
});})(flag))
;

cljs.core.async.t22779.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22783_22785 = self__.flag;
var G__22784_22786 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22783_22785,G__22784_22786) : cljs.core.reset_BANG_.call(null,G__22783_22785,G__22784_22786));

return true;
});})(flag))
;

cljs.core.async.t22779.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22781){
var self__ = this;
var _22781__$1 = this;
return self__.meta22780;
});})(flag))
;

cljs.core.async.t22779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22781,meta22780__$1){
var self__ = this;
var _22781__$1 = this;
return (new cljs.core.async.t22779(self__.flag,self__.alt_flag,meta22780__$1));
});})(flag))
;

cljs.core.async.t22779.cljs$lang$type = true;

cljs.core.async.t22779.cljs$lang$ctorStr = "cljs.core.async/t22779";

cljs.core.async.t22779.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t22779");
});})(flag))
;

cljs.core.async.__GT_t22779 = ((function (flag){
return (function __GT_t22779(flag__$1,alt_flag__$1,meta22780){
return (new cljs.core.async.t22779(flag__$1,alt_flag__$1,meta22780));
});})(flag))
;

}

return (new cljs.core.async.t22779(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,15,cljs.core.constant$keyword$9,146,cljs.core.constant$keyword$10,5,cljs.core.constant$keyword$11,141,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/resources/public/js-min/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t22790 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22790 = (function (cb,flag,alt_handler,meta22791){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta22791 = meta22791;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22790.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22790.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t22790.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t22790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22792){
var self__ = this;
var _22792__$1 = this;
return self__.meta22791;
});

cljs.core.async.t22790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22792,meta22791__$1){
var self__ = this;
var _22792__$1 = this;
return (new cljs.core.async.t22790(self__.cb,self__.flag,self__.alt_handler,meta22791__$1));
});

cljs.core.async.t22790.cljs$lang$type = true;

cljs.core.async.t22790.cljs$lang$ctorStr = "cljs.core.async/t22790";

cljs.core.async.t22790.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t22790");
});

cljs.core.async.__GT_t22790 = (function __GT_t22790(cb__$1,flag__$1,alt_handler__$1,meta22791){
return (new cljs.core.async.t22790(cb__$1,flag__$1,alt_handler__$1,meta22791));
});

}

return (new cljs.core.async.t22790(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,11,cljs.core.constant$keyword$9,154,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,149,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/resources/public/js-min/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.constant$keyword$46.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__22800 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__22800) : port.call(null,G__22800));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__22801 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__22801) : port.call(null,G__22801));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22793_SHARP_){
var G__22802 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22793_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22802) : fret.call(null,G__22802));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22794_SHARP_){
var G__22803 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22794_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22803) : fret.call(null,G__22803));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22804 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22804) : cljs.core.deref.call(null,G__22804));
})(),(function (){var or__3630__auto__ = wport;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22805 = (i + (1));
i = G__22805;
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
var alts_BANG___delegate = function (ports,p__22806){
var map__22808 = p__22806;
var map__22808__$1 = ((cljs.core.seq_QMARK_(map__22808))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22808):map__22808);
var opts = map__22808__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__22806 = null;
if (arguments.length > 1) {
  p__22806 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__22806);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__22809){
var ports = cljs.core.first(arglist__22809);
var p__22806 = cljs.core.rest(arglist__22809);
return alts_BANG___delegate(ports,p__22806);
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
var c__11389__auto___22907 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11389__auto___22907){
return (function (){
var f__11390__auto__ = (function (){var switch__11309__auto__ = ((function (c__11389__auto___22907){
return (function (state_22883){
var state_val_22884 = (state_22883[(1)]);
if((state_val_22884 === (7))){
var inst_22879 = (state_22883[(2)]);
var state_22883__$1 = state_22883;
var statearr_22885_22908 = state_22883__$1;
(statearr_22885_22908[(2)] = inst_22879);

(statearr_22885_22908[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22884 === (1))){
var state_22883__$1 = state_22883;
var statearr_22886_22909 = state_22883__$1;
(statearr_22886_22909[(2)] = null);

(statearr_22886_22909[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22884 === (4))){
var inst_22862 = (state_22883[(7)]);
var inst_22862__$1 = (state_22883[(2)]);
var inst_22863 = (inst_22862__$1 == null);
var state_22883__$1 = (function (){var statearr_22887 = state_22883;
(statearr_22887[(7)] = inst_22862__$1);

return statearr_22887;
})();
if(cljs.core.truth_(inst_22863)){
var statearr_22888_22910 = state_22883__$1;
(statearr_22888_22910[(1)] = (5));

} else {
var statearr_22889_22911 = state_22883__$1;
(statearr_22889_22911[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22884 === (13))){
var state_22883__$1 = state_22883;
var statearr_22890_22912 = state_22883__$1;
(statearr_22890_22912[(2)] = null);

(statearr_22890_22912[(1)] = (14));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22884 === (6))){
var inst_22862 = (state_22883[(7)]);
var state_22883__$1 = state_22883;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22883__$1,(11),to,inst_22862);
} else {
if((state_val_22884 === (3))){
var inst_22881 = (state_22883[(2)]);
var state_22883__$1 = state_22883;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22883__$1,inst_22881);
} else {
if((state_val_22884 === (12))){
var state_22883__$1 = state_22883;
var statearr_22891_22913 = state_22883__$1;
(statearr_22891_22913[(2)] = null);

(statearr_22891_22913[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22884 === (2))){
var state_22883__$1 = state_22883;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22883__$1,(4),from);
} else {
if((state_val_22884 === (11))){
var inst_22872 = (state_22883[(2)]);
var state_22883__$1 = state_22883;
if(cljs.core.truth_(inst_22872)){
var statearr_22892_22914 = state_22883__$1;
(statearr_22892_22914[(1)] = (12));

} else {
var statearr_22893_22915 = state_22883__$1;
(statearr_22893_22915[(1)] = (13));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22884 === (9))){
var state_22883__$1 = state_22883;
var statearr_22894_22916 = state_22883__$1;
(statearr_22894_22916[(2)] = null);

(statearr_22894_22916[(1)] = (10));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22884 === (5))){
var state_22883__$1 = state_22883;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22895_22917 = state_22883__$1;
(statearr_22895_22917[(1)] = (8));

} else {
var statearr_22896_22918 = state_22883__$1;
(statearr_22896_22918[(1)] = (9));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22884 === (14))){
var inst_22877 = (state_22883[(2)]);
var state_22883__$1 = state_22883;
var statearr_22897_22919 = state_22883__$1;
(statearr_22897_22919[(2)] = inst_22877);

(statearr_22897_22919[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22884 === (10))){
var inst_22869 = (state_22883[(2)]);
var state_22883__$1 = state_22883;
var statearr_22898_22920 = state_22883__$1;
(statearr_22898_22920[(2)] = inst_22869);

(statearr_22898_22920[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22884 === (8))){
var inst_22866 = cljs.core.async.close_BANG_(to);
var state_22883__$1 = state_22883;
var statearr_22899_22921 = state_22883__$1;
(statearr_22899_22921[(2)] = inst_22866);

(statearr_22899_22921[(1)] = (10));


return cljs.core.constant$keyword$40;
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
});})(c__11389__auto___22907))
;
return ((function (switch__11309__auto__,c__11389__auto___22907){
return (function() {
var state_machine__11310__auto__ = null;
var state_machine__11310__auto____0 = (function (){
var statearr_22903 = [null,null,null,null,null,null,null,null];
(statearr_22903[(0)] = state_machine__11310__auto__);

(statearr_22903[(1)] = (1));

return statearr_22903;
});
var state_machine__11310__auto____1 = (function (state_22883){
while(true){
var ret_value__11311__auto__ = (function (){try{while(true){
var result__11312__auto__ = switch__11309__auto__(state_22883);
if(cljs.core.keyword_identical_QMARK_(result__11312__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11312__auto__;
}
break;
}
}catch (e22904){if((e22904 instanceof Object)){
var ex__11313__auto__ = e22904;
var statearr_22905_22922 = state_22883;
(statearr_22905_22922[(5)] = ex__11313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22883);

return cljs.core.constant$keyword$40;
} else {
throw e22904;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11311__auto__,cljs.core.constant$keyword$40)){
var G__22923 = state_22883;
state_22883 = G__22923;
continue;
} else {
return ret_value__11311__auto__;
}
break;
}
});
state_machine__11310__auto__ = function(state_22883){
switch(arguments.length){
case 0:
return state_machine__11310__auto____0.call(this);
case 1:
return state_machine__11310__auto____1.call(this,state_22883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11310__auto____0;
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11310__auto____1;
return state_machine__11310__auto__;
})()
;})(switch__11309__auto__,c__11389__auto___22907))
})();
var state__11391__auto__ = (function (){var statearr_22906 = (function (){return (f__11390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11390__auto__.cljs$core$IFn$_invoke$arity$0() : f__11390__auto__.call(null));
})();
(statearr_22906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11389__auto___22907);

return statearr_22906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11391__auto__);
});})(c__11389__auto___22907))
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
return (function (p__23109){
var vec__23110 = p__23109;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23110,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23110,(1),null);
var job = vec__23110;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__11389__auto___23294 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11389__auto___23294,res,vec__23110,v,p,job,jobs,results){
return (function (){
var f__11390__auto__ = (function (){var switch__11309__auto__ = ((function (c__11389__auto___23294,res,vec__23110,v,p,job,jobs,results){
return (function (state_23115){
var state_val_23116 = (state_23115[(1)]);
if((state_val_23116 === (2))){
var inst_23112 = (state_23115[(2)]);
var inst_23113 = cljs.core.async.close_BANG_(res);
var state_23115__$1 = (function (){var statearr_23117 = state_23115;
(statearr_23117[(7)] = inst_23112);

return statearr_23117;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23115__$1,inst_23113);
} else {
if((state_val_23116 === (1))){
var state_23115__$1 = state_23115;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23115__$1,(2),res,v);
} else {
return null;
}
}
});})(c__11389__auto___23294,res,vec__23110,v,p,job,jobs,results))
;
return ((function (switch__11309__auto__,c__11389__auto___23294,res,vec__23110,v,p,job,jobs,results){
return (function() {
var state_machine__11310__auto__ = null;
var state_machine__11310__auto____0 = (function (){
var statearr_23121 = [null,null,null,null,null,null,null,null];
(statearr_23121[(0)] = state_machine__11310__auto__);

(statearr_23121[(1)] = (1));

return statearr_23121;
});
var state_machine__11310__auto____1 = (function (state_23115){
while(true){
var ret_value__11311__auto__ = (function (){try{while(true){
var result__11312__auto__ = switch__11309__auto__(state_23115);
if(cljs.core.keyword_identical_QMARK_(result__11312__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11312__auto__;
}
break;
}
}catch (e23122){if((e23122 instanceof Object)){
var ex__11313__auto__ = e23122;
var statearr_23123_23295 = state_23115;
(statearr_23123_23295[(5)] = ex__11313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23115);

return cljs.core.constant$keyword$40;
} else {
throw e23122;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11311__auto__,cljs.core.constant$keyword$40)){
var G__23296 = state_23115;
state_23115 = G__23296;
continue;
} else {
return ret_value__11311__auto__;
}
break;
}
});
state_machine__11310__auto__ = function(state_23115){
switch(arguments.length){
case 0:
return state_machine__11310__auto____0.call(this);
case 1:
return state_machine__11310__auto____1.call(this,state_23115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11310__auto____0;
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11310__auto____1;
return state_machine__11310__auto__;
})()
;})(switch__11309__auto__,c__11389__auto___23294,res,vec__23110,v,p,job,jobs,results))
})();
var state__11391__auto__ = (function (){var statearr_23124 = (function (){return (f__11390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11390__auto__.cljs$core$IFn$_invoke$arity$0() : f__11390__auto__.call(null));
})();
(statearr_23124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11389__auto___23294);

return statearr_23124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11391__auto__);
});})(c__11389__auto___23294,res,vec__23110,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23125){
var vec__23126 = p__23125;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23126,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23126,(1),null);
var job = vec__23126;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__23127_23297 = v;
var G__23128_23298 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__23127_23297,G__23128_23298) : xf.call(null,G__23127_23297,G__23128_23298));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4517__auto___23299 = n;
var __23300 = (0);
while(true){
if((__23300 < n__4517__auto___23299)){
var G__23129_23301 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23129_23301) {
case "async":
var c__11389__auto___23303 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__23300,c__11389__auto___23303,G__23129_23301,n__4517__auto___23299,jobs,results,process,async){
return (function (){
var f__11390__auto__ = (function (){var switch__11309__auto__ = ((function (__23300,c__11389__auto___23303,G__23129_23301,n__4517__auto___23299,jobs,results,process,async){
return (function (state_23142){
var state_val_23143 = (state_23142[(1)]);
if((state_val_23143 === (7))){
var inst_23138 = (state_23142[(2)]);
var state_23142__$1 = state_23142;
var statearr_23144_23304 = state_23142__$1;
(statearr_23144_23304[(2)] = inst_23138);

(statearr_23144_23304[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23143 === (6))){
var state_23142__$1 = state_23142;
var statearr_23145_23305 = state_23142__$1;
(statearr_23145_23305[(2)] = null);

(statearr_23145_23305[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23143 === (5))){
var state_23142__$1 = state_23142;
var statearr_23146_23306 = state_23142__$1;
(statearr_23146_23306[(2)] = null);

(statearr_23146_23306[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23143 === (4))){
var inst_23132 = (state_23142[(2)]);
var inst_23133 = async(inst_23132);
var state_23142__$1 = state_23142;
if(cljs.core.truth_(inst_23133)){
var statearr_23147_23307 = state_23142__$1;
(statearr_23147_23307[(1)] = (5));

} else {
var statearr_23148_23308 = state_23142__$1;
(statearr_23148_23308[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23143 === (3))){
var inst_23140 = (state_23142[(2)]);
var state_23142__$1 = state_23142;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23142__$1,inst_23140);
} else {
if((state_val_23143 === (2))){
var state_23142__$1 = state_23142;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23142__$1,(4),jobs);
} else {
if((state_val_23143 === (1))){
var state_23142__$1 = state_23142;
var statearr_23149_23309 = state_23142__$1;
(statearr_23149_23309[(2)] = null);

(statearr_23149_23309[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
return null;
}
}
}
}
}
}
}
});})(__23300,c__11389__auto___23303,G__23129_23301,n__4517__auto___23299,jobs,results,process,async))
;
return ((function (__23300,switch__11309__auto__,c__11389__auto___23303,G__23129_23301,n__4517__auto___23299,jobs,results,process,async){
return (function() {
var state_machine__11310__auto__ = null;
var state_machine__11310__auto____0 = (function (){
var statearr_23153 = [null,null,null,null,null,null,null];
(statearr_23153[(0)] = state_machine__11310__auto__);

(statearr_23153[(1)] = (1));

return statearr_23153;
});
var state_machine__11310__auto____1 = (function (state_23142){
while(true){
var ret_value__11311__auto__ = (function (){try{while(true){
var result__11312__auto__ = switch__11309__auto__(state_23142);
if(cljs.core.keyword_identical_QMARK_(result__11312__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11312__auto__;
}
break;
}
}catch (e23154){if((e23154 instanceof Object)){
var ex__11313__auto__ = e23154;
var statearr_23155_23310 = state_23142;
(statearr_23155_23310[(5)] = ex__11313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23142);

return cljs.core.constant$keyword$40;
} else {
throw e23154;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11311__auto__,cljs.core.constant$keyword$40)){
var G__23311 = state_23142;
state_23142 = G__23311;
continue;
} else {
return ret_value__11311__auto__;
}
break;
}
});
state_machine__11310__auto__ = function(state_23142){
switch(arguments.length){
case 0:
return state_machine__11310__auto____0.call(this);
case 1:
return state_machine__11310__auto____1.call(this,state_23142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11310__auto____0;
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11310__auto____1;
return state_machine__11310__auto__;
})()
;})(__23300,switch__11309__auto__,c__11389__auto___23303,G__23129_23301,n__4517__auto___23299,jobs,results,process,async))
})();
var state__11391__auto__ = (function (){var statearr_23156 = (function (){return (f__11390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11390__auto__.cljs$core$IFn$_invoke$arity$0() : f__11390__auto__.call(null));
})();
(statearr_23156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11389__auto___23303);

return statearr_23156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11391__auto__);
});})(__23300,c__11389__auto___23303,G__23129_23301,n__4517__auto___23299,jobs,results,process,async))
);


break;
case "compute":
var c__11389__auto___23312 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__23300,c__11389__auto___23312,G__23129_23301,n__4517__auto___23299,jobs,results,process,async){
return (function (){
var f__11390__auto__ = (function (){var switch__11309__auto__ = ((function (__23300,c__11389__auto___23312,G__23129_23301,n__4517__auto___23299,jobs,results,process,async){
return (function (state_23169){
var state_val_23170 = (state_23169[(1)]);
if((state_val_23170 === (7))){
var inst_23165 = (state_23169[(2)]);
var state_23169__$1 = state_23169;
var statearr_23171_23313 = state_23169__$1;
(statearr_23171_23313[(2)] = inst_23165);

(statearr_23171_23313[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23170 === (6))){
var state_23169__$1 = state_23169;
var statearr_23172_23314 = state_23169__$1;
(statearr_23172_23314[(2)] = null);

(statearr_23172_23314[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23170 === (5))){
var state_23169__$1 = state_23169;
var statearr_23173_23315 = state_23169__$1;
(statearr_23173_23315[(2)] = null);

(statearr_23173_23315[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23170 === (4))){
var inst_23159 = (state_23169[(2)]);
var inst_23160 = process(inst_23159);
var state_23169__$1 = state_23169;
if(cljs.core.truth_(inst_23160)){
var statearr_23174_23316 = state_23169__$1;
(statearr_23174_23316[(1)] = (5));

} else {
var statearr_23175_23317 = state_23169__$1;
(statearr_23175_23317[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23170 === (3))){
var inst_23167 = (state_23169[(2)]);
var state_23169__$1 = state_23169;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23169__$1,inst_23167);
} else {
if((state_val_23170 === (2))){
var state_23169__$1 = state_23169;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23169__$1,(4),jobs);
} else {
if((state_val_23170 === (1))){
var state_23169__$1 = state_23169;
var statearr_23176_23318 = state_23169__$1;
(statearr_23176_23318[(2)] = null);

(statearr_23176_23318[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
return null;
}
}
}
}
}
}
}
});})(__23300,c__11389__auto___23312,G__23129_23301,n__4517__auto___23299,jobs,results,process,async))
;
return ((function (__23300,switch__11309__auto__,c__11389__auto___23312,G__23129_23301,n__4517__auto___23299,jobs,results,process,async){
return (function() {
var state_machine__11310__auto__ = null;
var state_machine__11310__auto____0 = (function (){
var statearr_23180 = [null,null,null,null,null,null,null];
(statearr_23180[(0)] = state_machine__11310__auto__);

(statearr_23180[(1)] = (1));

return statearr_23180;
});
var state_machine__11310__auto____1 = (function (state_23169){
while(true){
var ret_value__11311__auto__ = (function (){try{while(true){
var result__11312__auto__ = switch__11309__auto__(state_23169);
if(cljs.core.keyword_identical_QMARK_(result__11312__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11312__auto__;
}
break;
}
}catch (e23181){if((e23181 instanceof Object)){
var ex__11313__auto__ = e23181;
var statearr_23182_23319 = state_23169;
(statearr_23182_23319[(5)] = ex__11313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23169);

return cljs.core.constant$keyword$40;
} else {
throw e23181;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11311__auto__,cljs.core.constant$keyword$40)){
var G__23320 = state_23169;
state_23169 = G__23320;
continue;
} else {
return ret_value__11311__auto__;
}
break;
}
});
state_machine__11310__auto__ = function(state_23169){
switch(arguments.length){
case 0:
return state_machine__11310__auto____0.call(this);
case 1:
return state_machine__11310__auto____1.call(this,state_23169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11310__auto____0;
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11310__auto____1;
return state_machine__11310__auto__;
})()
;})(__23300,switch__11309__auto__,c__11389__auto___23312,G__23129_23301,n__4517__auto___23299,jobs,results,process,async))
})();
var state__11391__auto__ = (function (){var statearr_23183 = (function (){return (f__11390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11390__auto__.cljs$core$IFn$_invoke$arity$0() : f__11390__auto__.call(null));
})();
(statearr_23183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11389__auto___23312);

return statearr_23183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11391__auto__);
});})(__23300,c__11389__auto___23312,G__23129_23301,n__4517__auto___23299,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23321 = (__23300 + (1));
__23300 = G__23321;
continue;
} else {
}
break;
}

var c__11389__auto___23322 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11389__auto___23322,jobs,results,process,async){
return (function (){
var f__11390__auto__ = (function (){var switch__11309__auto__ = ((function (c__11389__auto___23322,jobs,results,process,async){
return (function (state_23205){
var state_val_23206 = (state_23205[(1)]);
if((state_val_23206 === (9))){
var inst_23198 = (state_23205[(2)]);
var state_23205__$1 = (function (){var statearr_23207 = state_23205;
(statearr_23207[(7)] = inst_23198);

return statearr_23207;
})();
var statearr_23208_23323 = state_23205__$1;
(statearr_23208_23323[(2)] = null);

(statearr_23208_23323[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23206 === (8))){
var inst_23191 = (state_23205[(8)]);
var inst_23196 = (state_23205[(2)]);
var state_23205__$1 = (function (){var statearr_23209 = state_23205;
(statearr_23209[(9)] = inst_23196);

return statearr_23209;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23205__$1,(9),results,inst_23191);
} else {
if((state_val_23206 === (7))){
var inst_23201 = (state_23205[(2)]);
var state_23205__$1 = state_23205;
var statearr_23210_23324 = state_23205__$1;
(statearr_23210_23324[(2)] = inst_23201);

(statearr_23210_23324[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23206 === (6))){
var inst_23191 = (state_23205[(8)]);
var inst_23186 = (state_23205[(10)]);
var inst_23191__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_23192 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23193 = [inst_23186,inst_23191__$1];
var inst_23194 = (new cljs.core.PersistentVector(null,2,(5),inst_23192,inst_23193,null));
var state_23205__$1 = (function (){var statearr_23211 = state_23205;
(statearr_23211[(8)] = inst_23191__$1);

return statearr_23211;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23205__$1,(8),jobs,inst_23194);
} else {
if((state_val_23206 === (5))){
var inst_23189 = cljs.core.async.close_BANG_(jobs);
var state_23205__$1 = state_23205;
var statearr_23212_23325 = state_23205__$1;
(statearr_23212_23325[(2)] = inst_23189);

(statearr_23212_23325[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23206 === (4))){
var inst_23186 = (state_23205[(10)]);
var inst_23186__$1 = (state_23205[(2)]);
var inst_23187 = (inst_23186__$1 == null);
var state_23205__$1 = (function (){var statearr_23213 = state_23205;
(statearr_23213[(10)] = inst_23186__$1);

return statearr_23213;
})();
if(cljs.core.truth_(inst_23187)){
var statearr_23214_23326 = state_23205__$1;
(statearr_23214_23326[(1)] = (5));

} else {
var statearr_23215_23327 = state_23205__$1;
(statearr_23215_23327[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23206 === (3))){
var inst_23203 = (state_23205[(2)]);
var state_23205__$1 = state_23205;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23205__$1,inst_23203);
} else {
if((state_val_23206 === (2))){
var state_23205__$1 = state_23205;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23205__$1,(4),from);
} else {
if((state_val_23206 === (1))){
var state_23205__$1 = state_23205;
var statearr_23216_23328 = state_23205__$1;
(statearr_23216_23328[(2)] = null);

(statearr_23216_23328[(1)] = (2));


return cljs.core.constant$keyword$40;
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
});})(c__11389__auto___23322,jobs,results,process,async))
;
return ((function (switch__11309__auto__,c__11389__auto___23322,jobs,results,process,async){
return (function() {
var state_machine__11310__auto__ = null;
var state_machine__11310__auto____0 = (function (){
var statearr_23220 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23220[(0)] = state_machine__11310__auto__);

(statearr_23220[(1)] = (1));

return statearr_23220;
});
var state_machine__11310__auto____1 = (function (state_23205){
while(true){
var ret_value__11311__auto__ = (function (){try{while(true){
var result__11312__auto__ = switch__11309__auto__(state_23205);
if(cljs.core.keyword_identical_QMARK_(result__11312__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11312__auto__;
}
break;
}
}catch (e23221){if((e23221 instanceof Object)){
var ex__11313__auto__ = e23221;
var statearr_23222_23329 = state_23205;
(statearr_23222_23329[(5)] = ex__11313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23205);

return cljs.core.constant$keyword$40;
} else {
throw e23221;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11311__auto__,cljs.core.constant$keyword$40)){
var G__23330 = state_23205;
state_23205 = G__23330;
continue;
} else {
return ret_value__11311__auto__;
}
break;
}
});
state_machine__11310__auto__ = function(state_23205){
switch(arguments.length){
case 0:
return state_machine__11310__auto____0.call(this);
case 1:
return state_machine__11310__auto____1.call(this,state_23205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11310__auto____0;
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11310__auto____1;
return state_machine__11310__auto__;
})()
;})(switch__11309__auto__,c__11389__auto___23322,jobs,results,process,async))
})();
var state__11391__auto__ = (function (){var statearr_23223 = (function (){return (f__11390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11390__auto__.cljs$core$IFn$_invoke$arity$0() : f__11390__auto__.call(null));
})();
(statearr_23223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11389__auto___23322);

return statearr_23223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11391__auto__);
});})(c__11389__auto___23322,jobs,results,process,async))
);


var c__11389__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11389__auto__,jobs,results,process,async){
return (function (){
var f__11390__auto__ = (function (){var switch__11309__auto__ = ((function (c__11389__auto__,jobs,results,process,async){
return (function (state_23261){
var state_val_23262 = (state_23261[(1)]);
if((state_val_23262 === (7))){
var inst_23257 = (state_23261[(2)]);
var state_23261__$1 = state_23261;
var statearr_23263_23331 = state_23261__$1;
(statearr_23263_23331[(2)] = inst_23257);

(statearr_23263_23331[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23262 === (20))){
var state_23261__$1 = state_23261;
var statearr_23264_23332 = state_23261__$1;
(statearr_23264_23332[(2)] = null);

(statearr_23264_23332[(1)] = (21));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23262 === (1))){
var state_23261__$1 = state_23261;
var statearr_23265_23333 = state_23261__$1;
(statearr_23265_23333[(2)] = null);

(statearr_23265_23333[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23262 === (4))){
var inst_23226 = (state_23261[(7)]);
var inst_23226__$1 = (state_23261[(2)]);
var inst_23227 = (inst_23226__$1 == null);
var state_23261__$1 = (function (){var statearr_23266 = state_23261;
(statearr_23266[(7)] = inst_23226__$1);

return statearr_23266;
})();
if(cljs.core.truth_(inst_23227)){
var statearr_23267_23334 = state_23261__$1;
(statearr_23267_23334[(1)] = (5));

} else {
var statearr_23268_23335 = state_23261__$1;
(statearr_23268_23335[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23262 === (15))){
var inst_23239 = (state_23261[(8)]);
var state_23261__$1 = state_23261;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23261__$1,(18),to,inst_23239);
} else {
if((state_val_23262 === (21))){
var inst_23252 = (state_23261[(2)]);
var state_23261__$1 = state_23261;
var statearr_23269_23336 = state_23261__$1;
(statearr_23269_23336[(2)] = inst_23252);

(statearr_23269_23336[(1)] = (13));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23262 === (13))){
var inst_23254 = (state_23261[(2)]);
var state_23261__$1 = (function (){var statearr_23270 = state_23261;
(statearr_23270[(9)] = inst_23254);

return statearr_23270;
})();
var statearr_23271_23337 = state_23261__$1;
(statearr_23271_23337[(2)] = null);

(statearr_23271_23337[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23262 === (6))){
var inst_23226 = (state_23261[(7)]);
var state_23261__$1 = state_23261;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23261__$1,(11),inst_23226);
} else {
if((state_val_23262 === (17))){
var inst_23247 = (state_23261[(2)]);
var state_23261__$1 = state_23261;
if(cljs.core.truth_(inst_23247)){
var statearr_23272_23338 = state_23261__$1;
(statearr_23272_23338[(1)] = (19));

} else {
var statearr_23273_23339 = state_23261__$1;
(statearr_23273_23339[(1)] = (20));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23262 === (3))){
var inst_23259 = (state_23261[(2)]);
var state_23261__$1 = state_23261;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23261__$1,inst_23259);
} else {
if((state_val_23262 === (12))){
var inst_23236 = (state_23261[(10)]);
var state_23261__$1 = state_23261;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23261__$1,(14),inst_23236);
} else {
if((state_val_23262 === (2))){
var state_23261__$1 = state_23261;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23261__$1,(4),results);
} else {
if((state_val_23262 === (19))){
var state_23261__$1 = state_23261;
var statearr_23274_23340 = state_23261__$1;
(statearr_23274_23340[(2)] = null);

(statearr_23274_23340[(1)] = (12));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23262 === (11))){
var inst_23236 = (state_23261[(2)]);
var state_23261__$1 = (function (){var statearr_23275 = state_23261;
(statearr_23275[(10)] = inst_23236);

return statearr_23275;
})();
var statearr_23276_23341 = state_23261__$1;
(statearr_23276_23341[(2)] = null);

(statearr_23276_23341[(1)] = (12));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23262 === (9))){
var state_23261__$1 = state_23261;
var statearr_23277_23342 = state_23261__$1;
(statearr_23277_23342[(2)] = null);

(statearr_23277_23342[(1)] = (10));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23262 === (5))){
var state_23261__$1 = state_23261;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23278_23343 = state_23261__$1;
(statearr_23278_23343[(1)] = (8));

} else {
var statearr_23279_23344 = state_23261__$1;
(statearr_23279_23344[(1)] = (9));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23262 === (14))){
var inst_23239 = (state_23261[(8)]);
var inst_23241 = (state_23261[(11)]);
var inst_23239__$1 = (state_23261[(2)]);
var inst_23240 = (inst_23239__$1 == null);
var inst_23241__$1 = cljs.core.not(inst_23240);
var state_23261__$1 = (function (){var statearr_23280 = state_23261;
(statearr_23280[(8)] = inst_23239__$1);

(statearr_23280[(11)] = inst_23241__$1);

return statearr_23280;
})();
if(inst_23241__$1){
var statearr_23281_23345 = state_23261__$1;
(statearr_23281_23345[(1)] = (15));

} else {
var statearr_23282_23346 = state_23261__$1;
(statearr_23282_23346[(1)] = (16));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23262 === (16))){
var inst_23241 = (state_23261[(11)]);
var state_23261__$1 = state_23261;
var statearr_23283_23347 = state_23261__$1;
(statearr_23283_23347[(2)] = inst_23241);

(statearr_23283_23347[(1)] = (17));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23262 === (10))){
var inst_23233 = (state_23261[(2)]);
var state_23261__$1 = state_23261;
var statearr_23284_23348 = state_23261__$1;
(statearr_23284_23348[(2)] = inst_23233);

(statearr_23284_23348[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23262 === (18))){
var inst_23244 = (state_23261[(2)]);
var state_23261__$1 = state_23261;
var statearr_23285_23349 = state_23261__$1;
(statearr_23285_23349[(2)] = inst_23244);

(statearr_23285_23349[(1)] = (17));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23262 === (8))){
var inst_23230 = cljs.core.async.close_BANG_(to);
var state_23261__$1 = state_23261;
var statearr_23286_23350 = state_23261__$1;
(statearr_23286_23350[(2)] = inst_23230);

(statearr_23286_23350[(1)] = (10));


return cljs.core.constant$keyword$40;
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
});})(c__11389__auto__,jobs,results,process,async))
;
return ((function (switch__11309__auto__,c__11389__auto__,jobs,results,process,async){
return (function() {
var state_machine__11310__auto__ = null;
var state_machine__11310__auto____0 = (function (){
var statearr_23290 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23290[(0)] = state_machine__11310__auto__);

(statearr_23290[(1)] = (1));

return statearr_23290;
});
var state_machine__11310__auto____1 = (function (state_23261){
while(true){
var ret_value__11311__auto__ = (function (){try{while(true){
var result__11312__auto__ = switch__11309__auto__(state_23261);
if(cljs.core.keyword_identical_QMARK_(result__11312__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11312__auto__;
}
break;
}
}catch (e23291){if((e23291 instanceof Object)){
var ex__11313__auto__ = e23291;
var statearr_23292_23351 = state_23261;
(statearr_23292_23351[(5)] = ex__11313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23261);

return cljs.core.constant$keyword$40;
} else {
throw e23291;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11311__auto__,cljs.core.constant$keyword$40)){
var G__23352 = state_23261;
state_23261 = G__23352;
continue;
} else {
return ret_value__11311__auto__;
}
break;
}
});
state_machine__11310__auto__ = function(state_23261){
switch(arguments.length){
case 0:
return state_machine__11310__auto____0.call(this);
case 1:
return state_machine__11310__auto____1.call(this,state_23261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11310__auto____0;
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11310__auto____1;
return state_machine__11310__auto__;
})()
;})(switch__11309__auto__,c__11389__auto__,jobs,results,process,async))
})();
var state__11391__auto__ = (function (){var statearr_23293 = (function (){return (f__11390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11390__auto__.cljs$core$IFn$_invoke$arity$0() : f__11390__auto__.call(null));
})();
(statearr_23293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11389__auto__);

return statearr_23293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11391__auto__);
});})(c__11389__auto__,jobs,results,process,async))
);

return c__11389__auto__;
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
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.constant$keyword$47);
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
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.constant$keyword$48);
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
var c__11389__auto___23475 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11389__auto___23475,tc,fc){
return (function (){
var f__11390__auto__ = (function (){var switch__11309__auto__ = ((function (c__11389__auto___23475,tc,fc){
return (function (state_23449){
var state_val_23450 = (state_23449[(1)]);
if((state_val_23450 === (7))){
var inst_23445 = (state_23449[(2)]);
var state_23449__$1 = state_23449;
var statearr_23451_23476 = state_23449__$1;
(statearr_23451_23476[(2)] = inst_23445);

(statearr_23451_23476[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23450 === (1))){
var state_23449__$1 = state_23449;
var statearr_23452_23477 = state_23449__$1;
(statearr_23452_23477[(2)] = null);

(statearr_23452_23477[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23450 === (4))){
var inst_23426 = (state_23449[(7)]);
var inst_23426__$1 = (state_23449[(2)]);
var inst_23427 = (inst_23426__$1 == null);
var state_23449__$1 = (function (){var statearr_23453 = state_23449;
(statearr_23453[(7)] = inst_23426__$1);

return statearr_23453;
})();
if(cljs.core.truth_(inst_23427)){
var statearr_23454_23478 = state_23449__$1;
(statearr_23454_23478[(1)] = (5));

} else {
var statearr_23455_23479 = state_23449__$1;
(statearr_23455_23479[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23450 === (13))){
var state_23449__$1 = state_23449;
var statearr_23456_23480 = state_23449__$1;
(statearr_23456_23480[(2)] = null);

(statearr_23456_23480[(1)] = (14));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23450 === (6))){
var inst_23426 = (state_23449[(7)]);
var inst_23432 = (function (){var G__23457 = inst_23426;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__23457) : p.call(null,G__23457));
})();
var state_23449__$1 = state_23449;
if(cljs.core.truth_(inst_23432)){
var statearr_23458_23481 = state_23449__$1;
(statearr_23458_23481[(1)] = (9));

} else {
var statearr_23459_23482 = state_23449__$1;
(statearr_23459_23482[(1)] = (10));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23450 === (3))){
var inst_23447 = (state_23449[(2)]);
var state_23449__$1 = state_23449;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23449__$1,inst_23447);
} else {
if((state_val_23450 === (12))){
var state_23449__$1 = state_23449;
var statearr_23460_23483 = state_23449__$1;
(statearr_23460_23483[(2)] = null);

(statearr_23460_23483[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23450 === (2))){
var state_23449__$1 = state_23449;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23449__$1,(4),ch);
} else {
if((state_val_23450 === (11))){
var inst_23426 = (state_23449[(7)]);
var inst_23436 = (state_23449[(2)]);
var state_23449__$1 = state_23449;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23449__$1,(8),inst_23436,inst_23426);
} else {
if((state_val_23450 === (9))){
var state_23449__$1 = state_23449;
var statearr_23461_23484 = state_23449__$1;
(statearr_23461_23484[(2)] = tc);

(statearr_23461_23484[(1)] = (11));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23450 === (5))){
var inst_23429 = cljs.core.async.close_BANG_(tc);
var inst_23430 = cljs.core.async.close_BANG_(fc);
var state_23449__$1 = (function (){var statearr_23462 = state_23449;
(statearr_23462[(8)] = inst_23429);

return statearr_23462;
})();
var statearr_23463_23485 = state_23449__$1;
(statearr_23463_23485[(2)] = inst_23430);

(statearr_23463_23485[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23450 === (14))){
var inst_23443 = (state_23449[(2)]);
var state_23449__$1 = state_23449;
var statearr_23464_23486 = state_23449__$1;
(statearr_23464_23486[(2)] = inst_23443);

(statearr_23464_23486[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23450 === (10))){
var state_23449__$1 = state_23449;
var statearr_23465_23487 = state_23449__$1;
(statearr_23465_23487[(2)] = fc);

(statearr_23465_23487[(1)] = (11));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23450 === (8))){
var inst_23438 = (state_23449[(2)]);
var state_23449__$1 = state_23449;
if(cljs.core.truth_(inst_23438)){
var statearr_23466_23488 = state_23449__$1;
(statearr_23466_23488[(1)] = (12));

} else {
var statearr_23467_23489 = state_23449__$1;
(statearr_23467_23489[(1)] = (13));

}

return cljs.core.constant$keyword$40;
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
});})(c__11389__auto___23475,tc,fc))
;
return ((function (switch__11309__auto__,c__11389__auto___23475,tc,fc){
return (function() {
var state_machine__11310__auto__ = null;
var state_machine__11310__auto____0 = (function (){
var statearr_23471 = [null,null,null,null,null,null,null,null,null];
(statearr_23471[(0)] = state_machine__11310__auto__);

(statearr_23471[(1)] = (1));

return statearr_23471;
});
var state_machine__11310__auto____1 = (function (state_23449){
while(true){
var ret_value__11311__auto__ = (function (){try{while(true){
var result__11312__auto__ = switch__11309__auto__(state_23449);
if(cljs.core.keyword_identical_QMARK_(result__11312__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11312__auto__;
}
break;
}
}catch (e23472){if((e23472 instanceof Object)){
var ex__11313__auto__ = e23472;
var statearr_23473_23490 = state_23449;
(statearr_23473_23490[(5)] = ex__11313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23449);

return cljs.core.constant$keyword$40;
} else {
throw e23472;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11311__auto__,cljs.core.constant$keyword$40)){
var G__23491 = state_23449;
state_23449 = G__23491;
continue;
} else {
return ret_value__11311__auto__;
}
break;
}
});
state_machine__11310__auto__ = function(state_23449){
switch(arguments.length){
case 0:
return state_machine__11310__auto____0.call(this);
case 1:
return state_machine__11310__auto____1.call(this,state_23449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11310__auto____0;
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11310__auto____1;
return state_machine__11310__auto__;
})()
;})(switch__11309__auto__,c__11389__auto___23475,tc,fc))
})();
var state__11391__auto__ = (function (){var statearr_23474 = (function (){return (f__11390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11390__auto__.cljs$core$IFn$_invoke$arity$0() : f__11390__auto__.call(null));
})();
(statearr_23474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11389__auto___23475);

return statearr_23474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11391__auto__);
});})(c__11389__auto___23475,tc,fc))
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
var c__11389__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11389__auto__){
return (function (){
var f__11390__auto__ = (function (){var switch__11309__auto__ = ((function (c__11389__auto__){
return (function (state_23540){
var state_val_23541 = (state_23540[(1)]);
if((state_val_23541 === (7))){
var inst_23536 = (state_23540[(2)]);
var state_23540__$1 = state_23540;
var statearr_23542_23560 = state_23540__$1;
(statearr_23542_23560[(2)] = inst_23536);

(statearr_23542_23560[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23541 === (6))){
var inst_23529 = (state_23540[(7)]);
var inst_23526 = (state_23540[(8)]);
var inst_23533 = (function (){var G__23543 = inst_23526;
var G__23544 = inst_23529;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23543,G__23544) : f.call(null,G__23543,G__23544));
})();
var inst_23526__$1 = inst_23533;
var state_23540__$1 = (function (){var statearr_23545 = state_23540;
(statearr_23545[(8)] = inst_23526__$1);

return statearr_23545;
})();
var statearr_23546_23561 = state_23540__$1;
(statearr_23546_23561[(2)] = null);

(statearr_23546_23561[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23541 === (5))){
var inst_23526 = (state_23540[(8)]);
var state_23540__$1 = state_23540;
var statearr_23547_23562 = state_23540__$1;
(statearr_23547_23562[(2)] = inst_23526);

(statearr_23547_23562[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23541 === (4))){
var inst_23529 = (state_23540[(7)]);
var inst_23529__$1 = (state_23540[(2)]);
var inst_23530 = (inst_23529__$1 == null);
var state_23540__$1 = (function (){var statearr_23548 = state_23540;
(statearr_23548[(7)] = inst_23529__$1);

return statearr_23548;
})();
if(cljs.core.truth_(inst_23530)){
var statearr_23549_23563 = state_23540__$1;
(statearr_23549_23563[(1)] = (5));

} else {
var statearr_23550_23564 = state_23540__$1;
(statearr_23550_23564[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23541 === (3))){
var inst_23538 = (state_23540[(2)]);
var state_23540__$1 = state_23540;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23540__$1,inst_23538);
} else {
if((state_val_23541 === (2))){
var state_23540__$1 = state_23540;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23540__$1,(4),ch);
} else {
if((state_val_23541 === (1))){
var inst_23526 = init;
var state_23540__$1 = (function (){var statearr_23551 = state_23540;
(statearr_23551[(8)] = inst_23526);

return statearr_23551;
})();
var statearr_23552_23565 = state_23540__$1;
(statearr_23552_23565[(2)] = null);

(statearr_23552_23565[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
return null;
}
}
}
}
}
}
}
});})(c__11389__auto__))
;
return ((function (switch__11309__auto__,c__11389__auto__){
return (function() {
var state_machine__11310__auto__ = null;
var state_machine__11310__auto____0 = (function (){
var statearr_23556 = [null,null,null,null,null,null,null,null,null];
(statearr_23556[(0)] = state_machine__11310__auto__);

(statearr_23556[(1)] = (1));

return statearr_23556;
});
var state_machine__11310__auto____1 = (function (state_23540){
while(true){
var ret_value__11311__auto__ = (function (){try{while(true){
var result__11312__auto__ = switch__11309__auto__(state_23540);
if(cljs.core.keyword_identical_QMARK_(result__11312__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11312__auto__;
}
break;
}
}catch (e23557){if((e23557 instanceof Object)){
var ex__11313__auto__ = e23557;
var statearr_23558_23566 = state_23540;
(statearr_23558_23566[(5)] = ex__11313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23540);

return cljs.core.constant$keyword$40;
} else {
throw e23557;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11311__auto__,cljs.core.constant$keyword$40)){
var G__23567 = state_23540;
state_23540 = G__23567;
continue;
} else {
return ret_value__11311__auto__;
}
break;
}
});
state_machine__11310__auto__ = function(state_23540){
switch(arguments.length){
case 0:
return state_machine__11310__auto____0.call(this);
case 1:
return state_machine__11310__auto____1.call(this,state_23540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11310__auto____0;
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11310__auto____1;
return state_machine__11310__auto__;
})()
;})(switch__11309__auto__,c__11389__auto__))
})();
var state__11391__auto__ = (function (){var statearr_23559 = (function (){return (f__11390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11390__auto__.cljs$core$IFn$_invoke$arity$0() : f__11390__auto__.call(null));
})();
(statearr_23559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11389__auto__);

return statearr_23559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11391__auto__);
});})(c__11389__auto__))
);

return c__11389__auto__;
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
var c__11389__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11389__auto__){
return (function (){
var f__11390__auto__ = (function (){var switch__11309__auto__ = ((function (c__11389__auto__){
return (function (state_23644){
var state_val_23645 = (state_23644[(1)]);
if((state_val_23645 === (7))){
var inst_23626 = (state_23644[(2)]);
var state_23644__$1 = state_23644;
var statearr_23646_23669 = state_23644__$1;
(statearr_23646_23669[(2)] = inst_23626);

(statearr_23646_23669[(1)] = (6));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23645 === (1))){
var inst_23620 = cljs.core.seq(coll);
var inst_23621 = inst_23620;
var state_23644__$1 = (function (){var statearr_23647 = state_23644;
(statearr_23647[(7)] = inst_23621);

return statearr_23647;
})();
var statearr_23648_23670 = state_23644__$1;
(statearr_23648_23670[(2)] = null);

(statearr_23648_23670[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23645 === (4))){
var inst_23621 = (state_23644[(7)]);
var inst_23624 = cljs.core.first(inst_23621);
var state_23644__$1 = state_23644;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23644__$1,(7),ch,inst_23624);
} else {
if((state_val_23645 === (13))){
var inst_23638 = (state_23644[(2)]);
var state_23644__$1 = state_23644;
var statearr_23649_23671 = state_23644__$1;
(statearr_23649_23671[(2)] = inst_23638);

(statearr_23649_23671[(1)] = (10));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23645 === (6))){
var inst_23629 = (state_23644[(2)]);
var state_23644__$1 = state_23644;
if(cljs.core.truth_(inst_23629)){
var statearr_23650_23672 = state_23644__$1;
(statearr_23650_23672[(1)] = (8));

} else {
var statearr_23651_23673 = state_23644__$1;
(statearr_23651_23673[(1)] = (9));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23645 === (3))){
var inst_23642 = (state_23644[(2)]);
var state_23644__$1 = state_23644;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23644__$1,inst_23642);
} else {
if((state_val_23645 === (12))){
var state_23644__$1 = state_23644;
var statearr_23652_23674 = state_23644__$1;
(statearr_23652_23674[(2)] = null);

(statearr_23652_23674[(1)] = (13));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23645 === (2))){
var inst_23621 = (state_23644[(7)]);
var state_23644__$1 = state_23644;
if(cljs.core.truth_(inst_23621)){
var statearr_23653_23675 = state_23644__$1;
(statearr_23653_23675[(1)] = (4));

} else {
var statearr_23654_23676 = state_23644__$1;
(statearr_23654_23676[(1)] = (5));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23645 === (11))){
var inst_23635 = cljs.core.async.close_BANG_(ch);
var state_23644__$1 = state_23644;
var statearr_23655_23677 = state_23644__$1;
(statearr_23655_23677[(2)] = inst_23635);

(statearr_23655_23677[(1)] = (13));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23645 === (9))){
var state_23644__$1 = state_23644;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23656_23678 = state_23644__$1;
(statearr_23656_23678[(1)] = (11));

} else {
var statearr_23657_23679 = state_23644__$1;
(statearr_23657_23679[(1)] = (12));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23645 === (5))){
var inst_23621 = (state_23644[(7)]);
var state_23644__$1 = state_23644;
var statearr_23658_23680 = state_23644__$1;
(statearr_23658_23680[(2)] = inst_23621);

(statearr_23658_23680[(1)] = (6));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23645 === (10))){
var inst_23640 = (state_23644[(2)]);
var state_23644__$1 = state_23644;
var statearr_23659_23681 = state_23644__$1;
(statearr_23659_23681[(2)] = inst_23640);

(statearr_23659_23681[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23645 === (8))){
var inst_23621 = (state_23644[(7)]);
var inst_23631 = cljs.core.next(inst_23621);
var inst_23621__$1 = inst_23631;
var state_23644__$1 = (function (){var statearr_23660 = state_23644;
(statearr_23660[(7)] = inst_23621__$1);

return statearr_23660;
})();
var statearr_23661_23682 = state_23644__$1;
(statearr_23661_23682[(2)] = null);

(statearr_23661_23682[(1)] = (2));


return cljs.core.constant$keyword$40;
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
});})(c__11389__auto__))
;
return ((function (switch__11309__auto__,c__11389__auto__){
return (function() {
var state_machine__11310__auto__ = null;
var state_machine__11310__auto____0 = (function (){
var statearr_23665 = [null,null,null,null,null,null,null,null];
(statearr_23665[(0)] = state_machine__11310__auto__);

(statearr_23665[(1)] = (1));

return statearr_23665;
});
var state_machine__11310__auto____1 = (function (state_23644){
while(true){
var ret_value__11311__auto__ = (function (){try{while(true){
var result__11312__auto__ = switch__11309__auto__(state_23644);
if(cljs.core.keyword_identical_QMARK_(result__11312__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11312__auto__;
}
break;
}
}catch (e23666){if((e23666 instanceof Object)){
var ex__11313__auto__ = e23666;
var statearr_23667_23683 = state_23644;
(statearr_23667_23683[(5)] = ex__11313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23644);

return cljs.core.constant$keyword$40;
} else {
throw e23666;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11311__auto__,cljs.core.constant$keyword$40)){
var G__23684 = state_23644;
state_23644 = G__23684;
continue;
} else {
return ret_value__11311__auto__;
}
break;
}
});
state_machine__11310__auto__ = function(state_23644){
switch(arguments.length){
case 0:
return state_machine__11310__auto____0.call(this);
case 1:
return state_machine__11310__auto____1.call(this,state_23644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11310__auto____0;
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11310__auto____1;
return state_machine__11310__auto__;
})()
;})(switch__11309__auto__,c__11389__auto__))
})();
var state__11391__auto__ = (function (){var statearr_23668 = (function (){return (f__11390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11390__auto__.cljs$core$IFn$_invoke$arity$0() : f__11390__auto__.call(null));
})();
(statearr_23668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11389__auto__);

return statearr_23668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11391__auto__);
});})(c__11389__auto__))
);

return c__11389__auto__;
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

cljs.core.async.Mux = (function (){var obj23686 = {};
return obj23686;
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
return (function (){var or__3630__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__23690 = x__4274__auto__;
return goog.typeOf(G__23690);
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


cljs.core.async.Mult = (function (){var obj23692 = {};
return obj23692;
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
return (function (){var or__3630__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__23696 = x__4274__auto__;
return goog.typeOf(G__23696);
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
return (function (){var or__3630__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__23700 = x__4274__auto__;
return goog.typeOf(G__23700);
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
return (function (){var or__3630__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__23704 = x__4274__auto__;
return goog.typeOf(G__23704);
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
var cs = (function (){var G__23934 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23934) : cljs.core.atom.call(null,G__23934));
})();
var m = (function (){
if(typeof cljs.core.async.t23935 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23935 = (function (cs,ch,mult,meta23936){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta23936 = meta23936;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23935.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t23935.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t23935.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t23935.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23938_24163 = self__.cs;
var G__23939_24164 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23938_24163,G__23939_24164) : cljs.core.reset_BANG_.call(null,G__23938_24163,G__23939_24164));

return null;
});})(cs))
;

cljs.core.async.t23935.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t23935.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t23935.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23937){
var self__ = this;
var _23937__$1 = this;
return self__.meta23936;
});})(cs))
;

cljs.core.async.t23935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23937,meta23936__$1){
var self__ = this;
var _23937__$1 = this;
return (new cljs.core.async.t23935(self__.cs,self__.ch,self__.mult,meta23936__$1));
});})(cs))
;

cljs.core.async.t23935.cljs$lang$type = true;

cljs.core.async.t23935.cljs$lang$ctorStr = "cljs.core.async/t23935";

cljs.core.async.t23935.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23935");
});})(cs))
;

cljs.core.async.__GT_t23935 = ((function (cs){
return (function __GT_t23935(cs__$1,ch__$1,mult__$1,meta23936){
return (new cljs.core.async.t23935(cs__$1,ch__$1,mult__$1,meta23936));
});})(cs))
;

}

return (new cljs.core.async.t23935(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,397,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,390,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/resources/public/js-min/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__23940 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23940) : cljs.core.atom.call(null,G__23940));
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
var c__11389__auto___24165 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11389__auto___24165,cs,m,dchan,dctr,done){
return (function (){
var f__11390__auto__ = (function (){var switch__11309__auto__ = ((function (c__11389__auto___24165,cs,m,dchan,dctr,done){
return (function (state_24071){
var state_val_24072 = (state_24071[(1)]);
if((state_val_24072 === (7))){
var inst_24067 = (state_24071[(2)]);
var state_24071__$1 = state_24071;
var statearr_24073_24166 = state_24071__$1;
(statearr_24073_24166[(2)] = inst_24067);

(statearr_24073_24166[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (20))){
var inst_23972 = (state_24071[(7)]);
var inst_23982 = cljs.core.first(inst_23972);
var inst_23983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23982,(0),null);
var inst_23984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23982,(1),null);
var state_24071__$1 = (function (){var statearr_24074 = state_24071;
(statearr_24074[(8)] = inst_23983);

return statearr_24074;
})();
if(cljs.core.truth_(inst_23984)){
var statearr_24075_24167 = state_24071__$1;
(statearr_24075_24167[(1)] = (22));

} else {
var statearr_24076_24168 = state_24071__$1;
(statearr_24076_24168[(1)] = (23));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (27))){
var inst_24012 = (state_24071[(9)]);
var inst_23943 = (state_24071[(10)]);
var inst_24019 = (state_24071[(11)]);
var inst_24014 = (state_24071[(12)]);
var inst_24019__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24012,inst_24014);
var inst_24020 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24019__$1,inst_23943,done);
var state_24071__$1 = (function (){var statearr_24077 = state_24071;
(statearr_24077[(11)] = inst_24019__$1);

return statearr_24077;
})();
if(cljs.core.truth_(inst_24020)){
var statearr_24078_24169 = state_24071__$1;
(statearr_24078_24169[(1)] = (30));

} else {
var statearr_24079_24170 = state_24071__$1;
(statearr_24079_24170[(1)] = (31));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (1))){
var state_24071__$1 = state_24071;
var statearr_24080_24171 = state_24071__$1;
(statearr_24080_24171[(2)] = null);

(statearr_24080_24171[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (24))){
var inst_23972 = (state_24071[(7)]);
var inst_23989 = (state_24071[(2)]);
var inst_23990 = cljs.core.next(inst_23972);
var inst_23952 = inst_23990;
var inst_23953 = null;
var inst_23954 = (0);
var inst_23955 = (0);
var state_24071__$1 = (function (){var statearr_24081 = state_24071;
(statearr_24081[(13)] = inst_23954);

(statearr_24081[(14)] = inst_23953);

(statearr_24081[(15)] = inst_23955);

(statearr_24081[(16)] = inst_23952);

(statearr_24081[(17)] = inst_23989);

return statearr_24081;
})();
var statearr_24082_24172 = state_24071__$1;
(statearr_24082_24172[(2)] = null);

(statearr_24082_24172[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (39))){
var state_24071__$1 = state_24071;
var statearr_24086_24173 = state_24071__$1;
(statearr_24086_24173[(2)] = null);

(statearr_24086_24173[(1)] = (41));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (4))){
var inst_23943 = (state_24071[(10)]);
var inst_23943__$1 = (state_24071[(2)]);
var inst_23944 = (inst_23943__$1 == null);
var state_24071__$1 = (function (){var statearr_24087 = state_24071;
(statearr_24087[(10)] = inst_23943__$1);

return statearr_24087;
})();
if(cljs.core.truth_(inst_23944)){
var statearr_24088_24174 = state_24071__$1;
(statearr_24088_24174[(1)] = (5));

} else {
var statearr_24089_24175 = state_24071__$1;
(statearr_24089_24175[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (15))){
var inst_23954 = (state_24071[(13)]);
var inst_23953 = (state_24071[(14)]);
var inst_23955 = (state_24071[(15)]);
var inst_23952 = (state_24071[(16)]);
var inst_23968 = (state_24071[(2)]);
var inst_23969 = (inst_23955 + (1));
var tmp24083 = inst_23954;
var tmp24084 = inst_23953;
var tmp24085 = inst_23952;
var inst_23952__$1 = tmp24085;
var inst_23953__$1 = tmp24084;
var inst_23954__$1 = tmp24083;
var inst_23955__$1 = inst_23969;
var state_24071__$1 = (function (){var statearr_24090 = state_24071;
(statearr_24090[(13)] = inst_23954__$1);

(statearr_24090[(14)] = inst_23953__$1);

(statearr_24090[(15)] = inst_23955__$1);

(statearr_24090[(16)] = inst_23952__$1);

(statearr_24090[(18)] = inst_23968);

return statearr_24090;
})();
var statearr_24091_24176 = state_24071__$1;
(statearr_24091_24176[(2)] = null);

(statearr_24091_24176[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (21))){
var inst_23993 = (state_24071[(2)]);
var state_24071__$1 = state_24071;
var statearr_24095_24177 = state_24071__$1;
(statearr_24095_24177[(2)] = inst_23993);

(statearr_24095_24177[(1)] = (18));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (31))){
var inst_24019 = (state_24071[(11)]);
var inst_24023 = done(null);
var inst_24024 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24019);
var state_24071__$1 = (function (){var statearr_24096 = state_24071;
(statearr_24096[(19)] = inst_24023);

return statearr_24096;
})();
var statearr_24097_24178 = state_24071__$1;
(statearr_24097_24178[(2)] = inst_24024);

(statearr_24097_24178[(1)] = (32));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (32))){
var inst_24012 = (state_24071[(9)]);
var inst_24014 = (state_24071[(12)]);
var inst_24013 = (state_24071[(20)]);
var inst_24011 = (state_24071[(21)]);
var inst_24026 = (state_24071[(2)]);
var inst_24027 = (inst_24014 + (1));
var tmp24092 = inst_24012;
var tmp24093 = inst_24013;
var tmp24094 = inst_24011;
var inst_24011__$1 = tmp24094;
var inst_24012__$1 = tmp24092;
var inst_24013__$1 = tmp24093;
var inst_24014__$1 = inst_24027;
var state_24071__$1 = (function (){var statearr_24098 = state_24071;
(statearr_24098[(9)] = inst_24012__$1);

(statearr_24098[(22)] = inst_24026);

(statearr_24098[(12)] = inst_24014__$1);

(statearr_24098[(20)] = inst_24013__$1);

(statearr_24098[(21)] = inst_24011__$1);

return statearr_24098;
})();
var statearr_24099_24179 = state_24071__$1;
(statearr_24099_24179[(2)] = null);

(statearr_24099_24179[(1)] = (25));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (40))){
var inst_24039 = (state_24071[(23)]);
var inst_24043 = done(null);
var inst_24044 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24039);
var state_24071__$1 = (function (){var statearr_24100 = state_24071;
(statearr_24100[(24)] = inst_24043);

return statearr_24100;
})();
var statearr_24101_24180 = state_24071__$1;
(statearr_24101_24180[(2)] = inst_24044);

(statearr_24101_24180[(1)] = (41));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (33))){
var inst_24030 = (state_24071[(25)]);
var inst_24032 = cljs.core.chunked_seq_QMARK_(inst_24030);
var state_24071__$1 = state_24071;
if(inst_24032){
var statearr_24102_24181 = state_24071__$1;
(statearr_24102_24181[(1)] = (36));

} else {
var statearr_24103_24182 = state_24071__$1;
(statearr_24103_24182[(1)] = (37));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (13))){
var inst_23962 = (state_24071[(26)]);
var inst_23965 = cljs.core.async.close_BANG_(inst_23962);
var state_24071__$1 = state_24071;
var statearr_24104_24183 = state_24071__$1;
(statearr_24104_24183[(2)] = inst_23965);

(statearr_24104_24183[(1)] = (15));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (22))){
var inst_23983 = (state_24071[(8)]);
var inst_23986 = cljs.core.async.close_BANG_(inst_23983);
var state_24071__$1 = state_24071;
var statearr_24105_24184 = state_24071__$1;
(statearr_24105_24184[(2)] = inst_23986);

(statearr_24105_24184[(1)] = (24));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (36))){
var inst_24030 = (state_24071[(25)]);
var inst_24034 = cljs.core.chunk_first(inst_24030);
var inst_24035 = cljs.core.chunk_rest(inst_24030);
var inst_24036 = cljs.core.count(inst_24034);
var inst_24011 = inst_24035;
var inst_24012 = inst_24034;
var inst_24013 = inst_24036;
var inst_24014 = (0);
var state_24071__$1 = (function (){var statearr_24106 = state_24071;
(statearr_24106[(9)] = inst_24012);

(statearr_24106[(12)] = inst_24014);

(statearr_24106[(20)] = inst_24013);

(statearr_24106[(21)] = inst_24011);

return statearr_24106;
})();
var statearr_24107_24185 = state_24071__$1;
(statearr_24107_24185[(2)] = null);

(statearr_24107_24185[(1)] = (25));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (41))){
var inst_24030 = (state_24071[(25)]);
var inst_24046 = (state_24071[(2)]);
var inst_24047 = cljs.core.next(inst_24030);
var inst_24011 = inst_24047;
var inst_24012 = null;
var inst_24013 = (0);
var inst_24014 = (0);
var state_24071__$1 = (function (){var statearr_24108 = state_24071;
(statearr_24108[(9)] = inst_24012);

(statearr_24108[(27)] = inst_24046);

(statearr_24108[(12)] = inst_24014);

(statearr_24108[(20)] = inst_24013);

(statearr_24108[(21)] = inst_24011);

return statearr_24108;
})();
var statearr_24109_24186 = state_24071__$1;
(statearr_24109_24186[(2)] = null);

(statearr_24109_24186[(1)] = (25));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (43))){
var state_24071__$1 = state_24071;
var statearr_24110_24187 = state_24071__$1;
(statearr_24110_24187[(2)] = null);

(statearr_24110_24187[(1)] = (44));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (29))){
var inst_24055 = (state_24071[(2)]);
var state_24071__$1 = state_24071;
var statearr_24111_24188 = state_24071__$1;
(statearr_24111_24188[(2)] = inst_24055);

(statearr_24111_24188[(1)] = (26));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (44))){
var inst_24064 = (state_24071[(2)]);
var state_24071__$1 = (function (){var statearr_24112 = state_24071;
(statearr_24112[(28)] = inst_24064);

return statearr_24112;
})();
var statearr_24113_24189 = state_24071__$1;
(statearr_24113_24189[(2)] = null);

(statearr_24113_24189[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (6))){
var inst_24003 = (state_24071[(29)]);
var inst_24002 = (function (){var G__24114 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24114) : cljs.core.deref.call(null,G__24114));
})();
var inst_24003__$1 = cljs.core.keys(inst_24002);
var inst_24004 = cljs.core.count(inst_24003__$1);
var inst_24005 = (function (){var G__24115 = dctr;
var G__24116 = inst_24004;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24115,G__24116) : cljs.core.reset_BANG_.call(null,G__24115,G__24116));
})();
var inst_24010 = cljs.core.seq(inst_24003__$1);
var inst_24011 = inst_24010;
var inst_24012 = null;
var inst_24013 = (0);
var inst_24014 = (0);
var state_24071__$1 = (function (){var statearr_24117 = state_24071;
(statearr_24117[(9)] = inst_24012);

(statearr_24117[(12)] = inst_24014);

(statearr_24117[(20)] = inst_24013);

(statearr_24117[(29)] = inst_24003__$1);

(statearr_24117[(30)] = inst_24005);

(statearr_24117[(21)] = inst_24011);

return statearr_24117;
})();
var statearr_24118_24190 = state_24071__$1;
(statearr_24118_24190[(2)] = null);

(statearr_24118_24190[(1)] = (25));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (28))){
var inst_24030 = (state_24071[(25)]);
var inst_24011 = (state_24071[(21)]);
var inst_24030__$1 = cljs.core.seq(inst_24011);
var state_24071__$1 = (function (){var statearr_24119 = state_24071;
(statearr_24119[(25)] = inst_24030__$1);

return statearr_24119;
})();
if(inst_24030__$1){
var statearr_24120_24191 = state_24071__$1;
(statearr_24120_24191[(1)] = (33));

} else {
var statearr_24121_24192 = state_24071__$1;
(statearr_24121_24192[(1)] = (34));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (25))){
var inst_24014 = (state_24071[(12)]);
var inst_24013 = (state_24071[(20)]);
var inst_24016 = (inst_24014 < inst_24013);
var inst_24017 = inst_24016;
var state_24071__$1 = state_24071;
if(cljs.core.truth_(inst_24017)){
var statearr_24122_24193 = state_24071__$1;
(statearr_24122_24193[(1)] = (27));

} else {
var statearr_24123_24194 = state_24071__$1;
(statearr_24123_24194[(1)] = (28));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (34))){
var state_24071__$1 = state_24071;
var statearr_24124_24195 = state_24071__$1;
(statearr_24124_24195[(2)] = null);

(statearr_24124_24195[(1)] = (35));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (17))){
var state_24071__$1 = state_24071;
var statearr_24125_24196 = state_24071__$1;
(statearr_24125_24196[(2)] = null);

(statearr_24125_24196[(1)] = (18));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (3))){
var inst_24069 = (state_24071[(2)]);
var state_24071__$1 = state_24071;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24071__$1,inst_24069);
} else {
if((state_val_24072 === (12))){
var inst_23998 = (state_24071[(2)]);
var state_24071__$1 = state_24071;
var statearr_24126_24197 = state_24071__$1;
(statearr_24126_24197[(2)] = inst_23998);

(statearr_24126_24197[(1)] = (9));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (2))){
var state_24071__$1 = state_24071;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24071__$1,(4),ch);
} else {
if((state_val_24072 === (23))){
var state_24071__$1 = state_24071;
var statearr_24127_24198 = state_24071__$1;
(statearr_24127_24198[(2)] = null);

(statearr_24127_24198[(1)] = (24));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (35))){
var inst_24053 = (state_24071[(2)]);
var state_24071__$1 = state_24071;
var statearr_24128_24199 = state_24071__$1;
(statearr_24128_24199[(2)] = inst_24053);

(statearr_24128_24199[(1)] = (29));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (19))){
var inst_23972 = (state_24071[(7)]);
var inst_23976 = cljs.core.chunk_first(inst_23972);
var inst_23977 = cljs.core.chunk_rest(inst_23972);
var inst_23978 = cljs.core.count(inst_23976);
var inst_23952 = inst_23977;
var inst_23953 = inst_23976;
var inst_23954 = inst_23978;
var inst_23955 = (0);
var state_24071__$1 = (function (){var statearr_24129 = state_24071;
(statearr_24129[(13)] = inst_23954);

(statearr_24129[(14)] = inst_23953);

(statearr_24129[(15)] = inst_23955);

(statearr_24129[(16)] = inst_23952);

return statearr_24129;
})();
var statearr_24130_24200 = state_24071__$1;
(statearr_24130_24200[(2)] = null);

(statearr_24130_24200[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (11))){
var inst_23972 = (state_24071[(7)]);
var inst_23952 = (state_24071[(16)]);
var inst_23972__$1 = cljs.core.seq(inst_23952);
var state_24071__$1 = (function (){var statearr_24131 = state_24071;
(statearr_24131[(7)] = inst_23972__$1);

return statearr_24131;
})();
if(inst_23972__$1){
var statearr_24132_24201 = state_24071__$1;
(statearr_24132_24201[(1)] = (16));

} else {
var statearr_24133_24202 = state_24071__$1;
(statearr_24133_24202[(1)] = (17));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (9))){
var inst_24000 = (state_24071[(2)]);
var state_24071__$1 = state_24071;
var statearr_24134_24203 = state_24071__$1;
(statearr_24134_24203[(2)] = inst_24000);

(statearr_24134_24203[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (5))){
var inst_23950 = (function (){var G__24135 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24135) : cljs.core.deref.call(null,G__24135));
})();
var inst_23951 = cljs.core.seq(inst_23950);
var inst_23952 = inst_23951;
var inst_23953 = null;
var inst_23954 = (0);
var inst_23955 = (0);
var state_24071__$1 = (function (){var statearr_24136 = state_24071;
(statearr_24136[(13)] = inst_23954);

(statearr_24136[(14)] = inst_23953);

(statearr_24136[(15)] = inst_23955);

(statearr_24136[(16)] = inst_23952);

return statearr_24136;
})();
var statearr_24137_24204 = state_24071__$1;
(statearr_24137_24204[(2)] = null);

(statearr_24137_24204[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (14))){
var state_24071__$1 = state_24071;
var statearr_24138_24205 = state_24071__$1;
(statearr_24138_24205[(2)] = null);

(statearr_24138_24205[(1)] = (15));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (45))){
var inst_24061 = (state_24071[(2)]);
var state_24071__$1 = state_24071;
var statearr_24139_24206 = state_24071__$1;
(statearr_24139_24206[(2)] = inst_24061);

(statearr_24139_24206[(1)] = (44));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (26))){
var inst_24003 = (state_24071[(29)]);
var inst_24057 = (state_24071[(2)]);
var inst_24058 = cljs.core.seq(inst_24003);
var state_24071__$1 = (function (){var statearr_24140 = state_24071;
(statearr_24140[(31)] = inst_24057);

return statearr_24140;
})();
if(inst_24058){
var statearr_24141_24207 = state_24071__$1;
(statearr_24141_24207[(1)] = (42));

} else {
var statearr_24142_24208 = state_24071__$1;
(statearr_24142_24208[(1)] = (43));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (16))){
var inst_23972 = (state_24071[(7)]);
var inst_23974 = cljs.core.chunked_seq_QMARK_(inst_23972);
var state_24071__$1 = state_24071;
if(inst_23974){
var statearr_24143_24209 = state_24071__$1;
(statearr_24143_24209[(1)] = (19));

} else {
var statearr_24144_24210 = state_24071__$1;
(statearr_24144_24210[(1)] = (20));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (38))){
var inst_24050 = (state_24071[(2)]);
var state_24071__$1 = state_24071;
var statearr_24145_24211 = state_24071__$1;
(statearr_24145_24211[(2)] = inst_24050);

(statearr_24145_24211[(1)] = (35));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (30))){
var state_24071__$1 = state_24071;
var statearr_24146_24212 = state_24071__$1;
(statearr_24146_24212[(2)] = null);

(statearr_24146_24212[(1)] = (32));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (10))){
var inst_23953 = (state_24071[(14)]);
var inst_23955 = (state_24071[(15)]);
var inst_23961 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23953,inst_23955);
var inst_23962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23961,(0),null);
var inst_23963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23961,(1),null);
var state_24071__$1 = (function (){var statearr_24147 = state_24071;
(statearr_24147[(26)] = inst_23962);

return statearr_24147;
})();
if(cljs.core.truth_(inst_23963)){
var statearr_24148_24213 = state_24071__$1;
(statearr_24148_24213[(1)] = (13));

} else {
var statearr_24149_24214 = state_24071__$1;
(statearr_24149_24214[(1)] = (14));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (18))){
var inst_23996 = (state_24071[(2)]);
var state_24071__$1 = state_24071;
var statearr_24150_24215 = state_24071__$1;
(statearr_24150_24215[(2)] = inst_23996);

(statearr_24150_24215[(1)] = (12));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (42))){
var state_24071__$1 = state_24071;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24071__$1,(45),dchan);
} else {
if((state_val_24072 === (37))){
var inst_23943 = (state_24071[(10)]);
var inst_24030 = (state_24071[(25)]);
var inst_24039 = (state_24071[(23)]);
var inst_24039__$1 = cljs.core.first(inst_24030);
var inst_24040 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24039__$1,inst_23943,done);
var state_24071__$1 = (function (){var statearr_24151 = state_24071;
(statearr_24151[(23)] = inst_24039__$1);

return statearr_24151;
})();
if(cljs.core.truth_(inst_24040)){
var statearr_24152_24216 = state_24071__$1;
(statearr_24152_24216[(1)] = (39));

} else {
var statearr_24153_24217 = state_24071__$1;
(statearr_24153_24217[(1)] = (40));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24072 === (8))){
var inst_23954 = (state_24071[(13)]);
var inst_23955 = (state_24071[(15)]);
var inst_23957 = (inst_23955 < inst_23954);
var inst_23958 = inst_23957;
var state_24071__$1 = state_24071;
if(cljs.core.truth_(inst_23958)){
var statearr_24154_24218 = state_24071__$1;
(statearr_24154_24218[(1)] = (10));

} else {
var statearr_24155_24219 = state_24071__$1;
(statearr_24155_24219[(1)] = (11));

}

return cljs.core.constant$keyword$40;
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
});})(c__11389__auto___24165,cs,m,dchan,dctr,done))
;
return ((function (switch__11309__auto__,c__11389__auto___24165,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11310__auto__ = null;
var state_machine__11310__auto____0 = (function (){
var statearr_24159 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24159[(0)] = state_machine__11310__auto__);

(statearr_24159[(1)] = (1));

return statearr_24159;
});
var state_machine__11310__auto____1 = (function (state_24071){
while(true){
var ret_value__11311__auto__ = (function (){try{while(true){
var result__11312__auto__ = switch__11309__auto__(state_24071);
if(cljs.core.keyword_identical_QMARK_(result__11312__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11312__auto__;
}
break;
}
}catch (e24160){if((e24160 instanceof Object)){
var ex__11313__auto__ = e24160;
var statearr_24161_24220 = state_24071;
(statearr_24161_24220[(5)] = ex__11313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24071);

return cljs.core.constant$keyword$40;
} else {
throw e24160;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11311__auto__,cljs.core.constant$keyword$40)){
var G__24221 = state_24071;
state_24071 = G__24221;
continue;
} else {
return ret_value__11311__auto__;
}
break;
}
});
state_machine__11310__auto__ = function(state_24071){
switch(arguments.length){
case 0:
return state_machine__11310__auto____0.call(this);
case 1:
return state_machine__11310__auto____1.call(this,state_24071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11310__auto____0;
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11310__auto____1;
return state_machine__11310__auto__;
})()
;})(switch__11309__auto__,c__11389__auto___24165,cs,m,dchan,dctr,done))
})();
var state__11391__auto__ = (function (){var statearr_24162 = (function (){return (f__11390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11390__auto__.cljs$core$IFn$_invoke$arity$0() : f__11390__auto__.call(null));
})();
(statearr_24162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11389__auto___24165);

return statearr_24162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11391__auto__);
});})(c__11389__auto___24165,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj24226 = {};
return obj24226;
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
return (function (){var or__3630__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__24230 = x__4274__auto__;
return goog.typeOf(G__24230);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__24234 = x__4274__auto__;
return goog.typeOf(G__24234);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__24238 = x__4274__auto__;
return goog.typeOf(G__24238);
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
return (function (){var or__3630__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__24242 = x__4274__auto__;
return goog.typeOf(G__24242);
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
return (function (){var or__3630__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__24246 = x__4274__auto__;
return goog.typeOf(G__24246);
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__24247){
var map__24253 = p__24247;
var map__24253__$1 = ((cljs.core.seq_QMARK_(map__24253))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24253):map__24253);
var opts = map__24253__$1;
var statearr_24254_24258 = state;
(statearr_24254_24258[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__24253,map__24253__$1,opts){
return (function (val){
var statearr_24255_24259 = state;
(statearr_24255_24259[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__24253,map__24253__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_24256_24260 = state;
(statearr_24256_24260[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__24257 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24257) : cljs.core.deref.call(null,G__24257));
})());


return cljs.core.constant$keyword$40;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__24247 = null;
if (arguments.length > 3) {
  p__24247 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__24247);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__24261){
var state = cljs.core.first(arglist__24261);
arglist__24261 = cljs.core.next(arglist__24261);
var cont_block = cljs.core.first(arglist__24261);
arglist__24261 = cljs.core.next(arglist__24261);
var ports = cljs.core.first(arglist__24261);
var p__24247 = cljs.core.rest(arglist__24261);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__24247);
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
var cs = (function (){var G__24395 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24395) : cljs.core.atom.call(null,G__24395));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$49,null,cljs.core.constant$keyword$50,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$51);
var solo_mode = (function (){var G__24396 = cljs.core.constant$keyword$50;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24396) : cljs.core.atom.call(null,G__24396));
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
if(cljs.core.truth_((function (){var G__24397 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__24397) : attr.call(null,G__24397));
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
var chs = (function (){var G__24398 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24398) : cljs.core.deref.call(null,G__24398));
})();
var mode = (function (){var G__24399 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24399) : cljs.core.deref.call(null,G__24399));
})();
var solos = pick(cljs.core.constant$keyword$51,chs);
var pauses = pick(cljs.core.constant$keyword$49,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$52,solos,cljs.core.constant$keyword$53,pick(cljs.core.constant$keyword$50,chs),cljs.core.constant$keyword$54,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$49)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t24400 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24400 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24401){
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
this.meta24401 = meta24401;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24400.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t24400.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24400.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24400.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__24403_24528 = self__.cs;
var G__24404_24529 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24403_24528,G__24404_24529) : cljs.core.reset_BANG_.call(null,G__24403_24528,G__24404_24529));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24400.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24400.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__24405 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__24405) : self__.solo_modes.call(null,G__24405));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__24406_24530 = self__.solo_mode;
var G__24407_24531 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24406_24530,G__24407_24531) : cljs.core.reset_BANG_.call(null,G__24406_24530,G__24407_24531));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24400.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24400.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24400.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24402){
var self__ = this;
var _24402__$1 = this;
return self__.meta24401;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24402,meta24401__$1){
var self__ = this;
var _24402__$1 = this;
return (new cljs.core.async.t24400(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24401__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24400.cljs$lang$type = true;

cljs.core.async.t24400.cljs$lang$ctorStr = "cljs.core.async/t24400";

cljs.core.async.t24400.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24400");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t24400 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24400(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24401){
return (new cljs.core.async.t24400(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24401));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t24400(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,25,cljs.core.constant$keyword$9,510,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,499,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/resources/public/js-min/cljs/core/async.cljs"], null)));
})()
;
var c__11389__auto___24532 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11389__auto___24532,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11390__auto__ = (function (){var switch__11309__auto__ = ((function (c__11389__auto___24532,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24479){
var state_val_24480 = (state_24479[(1)]);
if((state_val_24480 === (7))){
var inst_24421 = (state_24479[(7)]);
var inst_24426 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24421);
var state_24479__$1 = state_24479;
var statearr_24481_24533 = state_24479__$1;
(statearr_24481_24533[(2)] = inst_24426);

(statearr_24481_24533[(1)] = (9));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24480 === (20))){
var inst_24436 = (state_24479[(8)]);
var state_24479__$1 = state_24479;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24479__$1,(23),out,inst_24436);
} else {
if((state_val_24480 === (1))){
var inst_24411 = (state_24479[(9)]);
var inst_24411__$1 = calc_state();
var inst_24412 = cljs.core.seq_QMARK_(inst_24411__$1);
var state_24479__$1 = (function (){var statearr_24482 = state_24479;
(statearr_24482[(9)] = inst_24411__$1);

return statearr_24482;
})();
if(inst_24412){
var statearr_24483_24534 = state_24479__$1;
(statearr_24483_24534[(1)] = (2));

} else {
var statearr_24484_24535 = state_24479__$1;
(statearr_24484_24535[(1)] = (3));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24480 === (24))){
var inst_24429 = (state_24479[(10)]);
var inst_24421 = inst_24429;
var state_24479__$1 = (function (){var statearr_24485 = state_24479;
(statearr_24485[(7)] = inst_24421);

return statearr_24485;
})();
var statearr_24486_24536 = state_24479__$1;
(statearr_24486_24536[(2)] = null);

(statearr_24486_24536[(1)] = (5));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24480 === (4))){
var inst_24411 = (state_24479[(9)]);
var inst_24417 = (state_24479[(2)]);
var inst_24418 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24417,cljs.core.constant$keyword$54);
var inst_24419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24417,cljs.core.constant$keyword$53);
var inst_24420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24417,cljs.core.constant$keyword$52);
var inst_24421 = inst_24411;
var state_24479__$1 = (function (){var statearr_24487 = state_24479;
(statearr_24487[(11)] = inst_24418);

(statearr_24487[(12)] = inst_24420);

(statearr_24487[(7)] = inst_24421);

(statearr_24487[(13)] = inst_24419);

return statearr_24487;
})();
var statearr_24488_24537 = state_24479__$1;
(statearr_24488_24537[(2)] = null);

(statearr_24488_24537[(1)] = (5));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24480 === (15))){
var state_24479__$1 = state_24479;
var statearr_24489_24538 = state_24479__$1;
(statearr_24489_24538[(2)] = null);

(statearr_24489_24538[(1)] = (16));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24480 === (21))){
var inst_24429 = (state_24479[(10)]);
var inst_24421 = inst_24429;
var state_24479__$1 = (function (){var statearr_24490 = state_24479;
(statearr_24490[(7)] = inst_24421);

return statearr_24490;
})();
var statearr_24491_24539 = state_24479__$1;
(statearr_24491_24539[(2)] = null);

(statearr_24491_24539[(1)] = (5));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24480 === (13))){
var inst_24475 = (state_24479[(2)]);
var state_24479__$1 = state_24479;
var statearr_24492_24540 = state_24479__$1;
(statearr_24492_24540[(2)] = inst_24475);

(statearr_24492_24540[(1)] = (6));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24480 === (22))){
var inst_24473 = (state_24479[(2)]);
var state_24479__$1 = state_24479;
var statearr_24493_24541 = state_24479__$1;
(statearr_24493_24541[(2)] = inst_24473);

(statearr_24493_24541[(1)] = (13));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24480 === (6))){
var inst_24477 = (state_24479[(2)]);
var state_24479__$1 = state_24479;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24479__$1,inst_24477);
} else {
if((state_val_24480 === (25))){
var state_24479__$1 = state_24479;
var statearr_24494_24542 = state_24479__$1;
(statearr_24494_24542[(2)] = null);

(statearr_24494_24542[(1)] = (26));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24480 === (17))){
var inst_24452 = (state_24479[(14)]);
var state_24479__$1 = state_24479;
var statearr_24495_24543 = state_24479__$1;
(statearr_24495_24543[(2)] = inst_24452);

(statearr_24495_24543[(1)] = (19));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24480 === (3))){
var inst_24411 = (state_24479[(9)]);
var state_24479__$1 = state_24479;
var statearr_24496_24544 = state_24479__$1;
(statearr_24496_24544[(2)] = inst_24411);

(statearr_24496_24544[(1)] = (4));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24480 === (12))){
var inst_24432 = (state_24479[(15)]);
var inst_24437 = (state_24479[(16)]);
var inst_24452 = (state_24479[(14)]);
var inst_24452__$1 = (function (){var G__24497 = inst_24437;
return (inst_24432.cljs$core$IFn$_invoke$arity$1 ? inst_24432.cljs$core$IFn$_invoke$arity$1(G__24497) : inst_24432.call(null,G__24497));
})();
var state_24479__$1 = (function (){var statearr_24498 = state_24479;
(statearr_24498[(14)] = inst_24452__$1);

return statearr_24498;
})();
if(cljs.core.truth_(inst_24452__$1)){
var statearr_24499_24545 = state_24479__$1;
(statearr_24499_24545[(1)] = (17));

} else {
var statearr_24500_24546 = state_24479__$1;
(statearr_24500_24546[(1)] = (18));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24480 === (2))){
var inst_24411 = (state_24479[(9)]);
var inst_24414 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24411);
var state_24479__$1 = state_24479;
var statearr_24501_24547 = state_24479__$1;
(statearr_24501_24547[(2)] = inst_24414);

(statearr_24501_24547[(1)] = (4));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24480 === (23))){
var inst_24464 = (state_24479[(2)]);
var state_24479__$1 = state_24479;
if(cljs.core.truth_(inst_24464)){
var statearr_24502_24548 = state_24479__$1;
(statearr_24502_24548[(1)] = (24));

} else {
var statearr_24503_24549 = state_24479__$1;
(statearr_24503_24549[(1)] = (25));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24480 === (19))){
var inst_24461 = (state_24479[(2)]);
var state_24479__$1 = state_24479;
if(cljs.core.truth_(inst_24461)){
var statearr_24504_24550 = state_24479__$1;
(statearr_24504_24550[(1)] = (20));

} else {
var statearr_24505_24551 = state_24479__$1;
(statearr_24505_24551[(1)] = (21));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24480 === (11))){
var inst_24436 = (state_24479[(8)]);
var inst_24442 = (inst_24436 == null);
var state_24479__$1 = state_24479;
if(cljs.core.truth_(inst_24442)){
var statearr_24506_24552 = state_24479__$1;
(statearr_24506_24552[(1)] = (14));

} else {
var statearr_24507_24553 = state_24479__$1;
(statearr_24507_24553[(1)] = (15));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24480 === (9))){
var inst_24429 = (state_24479[(10)]);
var inst_24429__$1 = (state_24479[(2)]);
var inst_24430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24429__$1,cljs.core.constant$keyword$54);
var inst_24431 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24429__$1,cljs.core.constant$keyword$53);
var inst_24432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24429__$1,cljs.core.constant$keyword$52);
var state_24479__$1 = (function (){var statearr_24508 = state_24479;
(statearr_24508[(15)] = inst_24432);

(statearr_24508[(17)] = inst_24431);

(statearr_24508[(10)] = inst_24429__$1);

return statearr_24508;
})();
return cljs.core.async.ioc_alts_BANG_(state_24479__$1,(10),inst_24430);
} else {
if((state_val_24480 === (5))){
var inst_24421 = (state_24479[(7)]);
var inst_24424 = cljs.core.seq_QMARK_(inst_24421);
var state_24479__$1 = state_24479;
if(inst_24424){
var statearr_24509_24554 = state_24479__$1;
(statearr_24509_24554[(1)] = (7));

} else {
var statearr_24510_24555 = state_24479__$1;
(statearr_24510_24555[(1)] = (8));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24480 === (14))){
var inst_24437 = (state_24479[(16)]);
var inst_24444 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_24437);
var state_24479__$1 = state_24479;
var statearr_24511_24556 = state_24479__$1;
(statearr_24511_24556[(2)] = inst_24444);

(statearr_24511_24556[(1)] = (16));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24480 === (26))){
var inst_24469 = (state_24479[(2)]);
var state_24479__$1 = state_24479;
var statearr_24512_24557 = state_24479__$1;
(statearr_24512_24557[(2)] = inst_24469);

(statearr_24512_24557[(1)] = (22));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24480 === (16))){
var inst_24447 = (state_24479[(2)]);
var inst_24448 = calc_state();
var inst_24421 = inst_24448;
var state_24479__$1 = (function (){var statearr_24513 = state_24479;
(statearr_24513[(18)] = inst_24447);

(statearr_24513[(7)] = inst_24421);

return statearr_24513;
})();
var statearr_24514_24558 = state_24479__$1;
(statearr_24514_24558[(2)] = null);

(statearr_24514_24558[(1)] = (5));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24480 === (10))){
var inst_24437 = (state_24479[(16)]);
var inst_24436 = (state_24479[(8)]);
var inst_24435 = (state_24479[(2)]);
var inst_24436__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24435,(0),null);
var inst_24437__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24435,(1),null);
var inst_24438 = (inst_24436__$1 == null);
var inst_24439 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24437__$1,change);
var inst_24440 = (inst_24438) || (inst_24439);
var state_24479__$1 = (function (){var statearr_24515 = state_24479;
(statearr_24515[(16)] = inst_24437__$1);

(statearr_24515[(8)] = inst_24436__$1);

return statearr_24515;
})();
if(cljs.core.truth_(inst_24440)){
var statearr_24516_24559 = state_24479__$1;
(statearr_24516_24559[(1)] = (11));

} else {
var statearr_24517_24560 = state_24479__$1;
(statearr_24517_24560[(1)] = (12));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24480 === (18))){
var inst_24432 = (state_24479[(15)]);
var inst_24437 = (state_24479[(16)]);
var inst_24431 = (state_24479[(17)]);
var inst_24456 = cljs.core.empty_QMARK_(inst_24432);
var inst_24457 = (function (){var G__24518 = inst_24437;
return (inst_24431.cljs$core$IFn$_invoke$arity$1 ? inst_24431.cljs$core$IFn$_invoke$arity$1(G__24518) : inst_24431.call(null,G__24518));
})();
var inst_24458 = cljs.core.not(inst_24457);
var inst_24459 = (inst_24456) && (inst_24458);
var state_24479__$1 = state_24479;
var statearr_24519_24561 = state_24479__$1;
(statearr_24519_24561[(2)] = inst_24459);

(statearr_24519_24561[(1)] = (19));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24480 === (8))){
var inst_24421 = (state_24479[(7)]);
var state_24479__$1 = state_24479;
var statearr_24520_24562 = state_24479__$1;
(statearr_24520_24562[(2)] = inst_24421);

(statearr_24520_24562[(1)] = (9));


return cljs.core.constant$keyword$40;
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
});})(c__11389__auto___24532,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__11309__auto__,c__11389__auto___24532,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11310__auto__ = null;
var state_machine__11310__auto____0 = (function (){
var statearr_24524 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24524[(0)] = state_machine__11310__auto__);

(statearr_24524[(1)] = (1));

return statearr_24524;
});
var state_machine__11310__auto____1 = (function (state_24479){
while(true){
var ret_value__11311__auto__ = (function (){try{while(true){
var result__11312__auto__ = switch__11309__auto__(state_24479);
if(cljs.core.keyword_identical_QMARK_(result__11312__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11312__auto__;
}
break;
}
}catch (e24525){if((e24525 instanceof Object)){
var ex__11313__auto__ = e24525;
var statearr_24526_24563 = state_24479;
(statearr_24526_24563[(5)] = ex__11313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24479);

return cljs.core.constant$keyword$40;
} else {
throw e24525;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11311__auto__,cljs.core.constant$keyword$40)){
var G__24564 = state_24479;
state_24479 = G__24564;
continue;
} else {
return ret_value__11311__auto__;
}
break;
}
});
state_machine__11310__auto__ = function(state_24479){
switch(arguments.length){
case 0:
return state_machine__11310__auto____0.call(this);
case 1:
return state_machine__11310__auto____1.call(this,state_24479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11310__auto____0;
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11310__auto____1;
return state_machine__11310__auto__;
})()
;})(switch__11309__auto__,c__11389__auto___24532,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11391__auto__ = (function (){var statearr_24527 = (function (){return (f__11390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11390__auto__.cljs$core$IFn$_invoke$arity$0() : f__11390__auto__.call(null));
})();
(statearr_24527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11389__auto___24532);

return statearr_24527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11391__auto__);
});})(c__11389__auto___24532,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj24566 = {};
return obj24566;
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
return (function (){var or__3630__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__24570 = x__4274__auto__;
return goog.typeOf(G__24570);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__24574 = x__4274__auto__;
return goog.typeOf(G__24574);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__24580 = x__4274__auto__;
return goog.typeOf(G__24580);
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
return (function (){var or__3630__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__24582 = x__4274__auto__;
return goog.typeOf(G__24582);
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
var mults = (function (){var G__24721 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24721) : cljs.core.atom.call(null,G__24721));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__3630__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__24723 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24723) : cljs.core.deref.call(null,G__24723));
})(),topic);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3630__auto__,mults){
return (function (p1__24583_SHARP_){
if(cljs.core.truth_((function (){var G__24724 = topic;
return (p1__24583_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24583_SHARP_.cljs$core$IFn$_invoke$arity$1(G__24724) : p1__24583_SHARP_.call(null,G__24724));
})())){
return p1__24583_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24583_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__24725 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__24725) : buf_fn.call(null,G__24725));
})())));
}
});})(or__3630__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t24726 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24726 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24727){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24727 = meta24727;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24726.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t24726.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__24729 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__24729) : self__.ensure_mult.call(null,G__24729));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t24726.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__24730 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24730) : cljs.core.deref.call(null,G__24730));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t24726.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__24731 = self__.mults;
var G__24732 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24731,G__24732) : cljs.core.reset_BANG_.call(null,G__24731,G__24732));
});})(mults,ensure_mult))
;

cljs.core.async.t24726.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t24726.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24726.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t24726.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24728){
var self__ = this;
var _24728__$1 = this;
return self__.meta24727;
});})(mults,ensure_mult))
;

cljs.core.async.t24726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24728,meta24727__$1){
var self__ = this;
var _24728__$1 = this;
return (new cljs.core.async.t24726(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24727__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t24726.cljs$lang$type = true;

cljs.core.async.t24726.cljs$lang$ctorStr = "cljs.core.async/t24726";

cljs.core.async.t24726.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t24726");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t24726 = ((function (mults,ensure_mult){
return (function __GT_t24726(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24727){
return (new cljs.core.async.t24726(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24727));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t24726(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,65,cljs.core.constant$keyword$9,603,cljs.core.constant$keyword$10,14,cljs.core.constant$keyword$11,591,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/resources/public/js-min/cljs/core/async.cljs"], null)));
})()
;
var c__11389__auto___24855 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11389__auto___24855,mults,ensure_mult,p){
return (function (){
var f__11390__auto__ = (function (){var switch__11309__auto__ = ((function (c__11389__auto___24855,mults,ensure_mult,p){
return (function (state_24804){
var state_val_24805 = (state_24804[(1)]);
if((state_val_24805 === (7))){
var inst_24800 = (state_24804[(2)]);
var state_24804__$1 = state_24804;
var statearr_24806_24856 = state_24804__$1;
(statearr_24806_24856[(2)] = inst_24800);

(statearr_24806_24856[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24805 === (20))){
var state_24804__$1 = state_24804;
var statearr_24807_24857 = state_24804__$1;
(statearr_24807_24857[(2)] = null);

(statearr_24807_24857[(1)] = (21));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24805 === (1))){
var state_24804__$1 = state_24804;
var statearr_24808_24858 = state_24804__$1;
(statearr_24808_24858[(2)] = null);

(statearr_24808_24858[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24805 === (24))){
var inst_24783 = (state_24804[(7)]);
var inst_24792 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_24783);
var state_24804__$1 = state_24804;
var statearr_24809_24859 = state_24804__$1;
(statearr_24809_24859[(2)] = inst_24792);

(statearr_24809_24859[(1)] = (25));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24805 === (4))){
var inst_24735 = (state_24804[(8)]);
var inst_24735__$1 = (state_24804[(2)]);
var inst_24736 = (inst_24735__$1 == null);
var state_24804__$1 = (function (){var statearr_24810 = state_24804;
(statearr_24810[(8)] = inst_24735__$1);

return statearr_24810;
})();
if(cljs.core.truth_(inst_24736)){
var statearr_24811_24860 = state_24804__$1;
(statearr_24811_24860[(1)] = (5));

} else {
var statearr_24812_24861 = state_24804__$1;
(statearr_24812_24861[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24805 === (15))){
var inst_24777 = (state_24804[(2)]);
var state_24804__$1 = state_24804;
var statearr_24813_24862 = state_24804__$1;
(statearr_24813_24862[(2)] = inst_24777);

(statearr_24813_24862[(1)] = (12));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24805 === (21))){
var inst_24797 = (state_24804[(2)]);
var state_24804__$1 = (function (){var statearr_24814 = state_24804;
(statearr_24814[(9)] = inst_24797);

return statearr_24814;
})();
var statearr_24815_24863 = state_24804__$1;
(statearr_24815_24863[(2)] = null);

(statearr_24815_24863[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24805 === (13))){
var inst_24759 = (state_24804[(10)]);
var inst_24761 = cljs.core.chunked_seq_QMARK_(inst_24759);
var state_24804__$1 = state_24804;
if(inst_24761){
var statearr_24816_24864 = state_24804__$1;
(statearr_24816_24864[(1)] = (16));

} else {
var statearr_24817_24865 = state_24804__$1;
(statearr_24817_24865[(1)] = (17));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24805 === (22))){
var inst_24789 = (state_24804[(2)]);
var state_24804__$1 = state_24804;
if(cljs.core.truth_(inst_24789)){
var statearr_24818_24866 = state_24804__$1;
(statearr_24818_24866[(1)] = (23));

} else {
var statearr_24819_24867 = state_24804__$1;
(statearr_24819_24867[(1)] = (24));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24805 === (6))){
var inst_24783 = (state_24804[(7)]);
var inst_24735 = (state_24804[(8)]);
var inst_24785 = (state_24804[(11)]);
var inst_24783__$1 = (function (){var G__24820 = inst_24735;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__24820) : topic_fn.call(null,G__24820));
})();
var inst_24784 = (function (){var G__24821 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24821) : cljs.core.deref.call(null,G__24821));
})();
var inst_24785__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24784,inst_24783__$1);
var state_24804__$1 = (function (){var statearr_24822 = state_24804;
(statearr_24822[(7)] = inst_24783__$1);

(statearr_24822[(11)] = inst_24785__$1);

return statearr_24822;
})();
if(cljs.core.truth_(inst_24785__$1)){
var statearr_24823_24868 = state_24804__$1;
(statearr_24823_24868[(1)] = (19));

} else {
var statearr_24824_24869 = state_24804__$1;
(statearr_24824_24869[(1)] = (20));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24805 === (25))){
var inst_24794 = (state_24804[(2)]);
var state_24804__$1 = state_24804;
var statearr_24825_24870 = state_24804__$1;
(statearr_24825_24870[(2)] = inst_24794);

(statearr_24825_24870[(1)] = (21));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24805 === (17))){
var inst_24759 = (state_24804[(10)]);
var inst_24768 = cljs.core.first(inst_24759);
var inst_24769 = cljs.core.async.muxch_STAR_(inst_24768);
var inst_24770 = cljs.core.async.close_BANG_(inst_24769);
var inst_24771 = cljs.core.next(inst_24759);
var inst_24745 = inst_24771;
var inst_24746 = null;
var inst_24747 = (0);
var inst_24748 = (0);
var state_24804__$1 = (function (){var statearr_24826 = state_24804;
(statearr_24826[(12)] = inst_24747);

(statearr_24826[(13)] = inst_24745);

(statearr_24826[(14)] = inst_24746);

(statearr_24826[(15)] = inst_24748);

(statearr_24826[(16)] = inst_24770);

return statearr_24826;
})();
var statearr_24827_24871 = state_24804__$1;
(statearr_24827_24871[(2)] = null);

(statearr_24827_24871[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24805 === (3))){
var inst_24802 = (state_24804[(2)]);
var state_24804__$1 = state_24804;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24804__$1,inst_24802);
} else {
if((state_val_24805 === (12))){
var inst_24779 = (state_24804[(2)]);
var state_24804__$1 = state_24804;
var statearr_24828_24872 = state_24804__$1;
(statearr_24828_24872[(2)] = inst_24779);

(statearr_24828_24872[(1)] = (9));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24805 === (2))){
var state_24804__$1 = state_24804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24804__$1,(4),ch);
} else {
if((state_val_24805 === (23))){
var state_24804__$1 = state_24804;
var statearr_24829_24873 = state_24804__$1;
(statearr_24829_24873[(2)] = null);

(statearr_24829_24873[(1)] = (25));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24805 === (19))){
var inst_24735 = (state_24804[(8)]);
var inst_24785 = (state_24804[(11)]);
var inst_24787 = cljs.core.async.muxch_STAR_(inst_24785);
var state_24804__$1 = state_24804;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24804__$1,(22),inst_24787,inst_24735);
} else {
if((state_val_24805 === (11))){
var inst_24745 = (state_24804[(13)]);
var inst_24759 = (state_24804[(10)]);
var inst_24759__$1 = cljs.core.seq(inst_24745);
var state_24804__$1 = (function (){var statearr_24830 = state_24804;
(statearr_24830[(10)] = inst_24759__$1);

return statearr_24830;
})();
if(inst_24759__$1){
var statearr_24831_24874 = state_24804__$1;
(statearr_24831_24874[(1)] = (13));

} else {
var statearr_24832_24875 = state_24804__$1;
(statearr_24832_24875[(1)] = (14));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24805 === (9))){
var inst_24781 = (state_24804[(2)]);
var state_24804__$1 = state_24804;
var statearr_24833_24876 = state_24804__$1;
(statearr_24833_24876[(2)] = inst_24781);

(statearr_24833_24876[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24805 === (5))){
var inst_24742 = (function (){var G__24834 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24834) : cljs.core.deref.call(null,G__24834));
})();
var inst_24743 = cljs.core.vals(inst_24742);
var inst_24744 = cljs.core.seq(inst_24743);
var inst_24745 = inst_24744;
var inst_24746 = null;
var inst_24747 = (0);
var inst_24748 = (0);
var state_24804__$1 = (function (){var statearr_24835 = state_24804;
(statearr_24835[(12)] = inst_24747);

(statearr_24835[(13)] = inst_24745);

(statearr_24835[(14)] = inst_24746);

(statearr_24835[(15)] = inst_24748);

return statearr_24835;
})();
var statearr_24836_24877 = state_24804__$1;
(statearr_24836_24877[(2)] = null);

(statearr_24836_24877[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24805 === (14))){
var state_24804__$1 = state_24804;
var statearr_24840_24878 = state_24804__$1;
(statearr_24840_24878[(2)] = null);

(statearr_24840_24878[(1)] = (15));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24805 === (16))){
var inst_24759 = (state_24804[(10)]);
var inst_24763 = cljs.core.chunk_first(inst_24759);
var inst_24764 = cljs.core.chunk_rest(inst_24759);
var inst_24765 = cljs.core.count(inst_24763);
var inst_24745 = inst_24764;
var inst_24746 = inst_24763;
var inst_24747 = inst_24765;
var inst_24748 = (0);
var state_24804__$1 = (function (){var statearr_24841 = state_24804;
(statearr_24841[(12)] = inst_24747);

(statearr_24841[(13)] = inst_24745);

(statearr_24841[(14)] = inst_24746);

(statearr_24841[(15)] = inst_24748);

return statearr_24841;
})();
var statearr_24842_24879 = state_24804__$1;
(statearr_24842_24879[(2)] = null);

(statearr_24842_24879[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24805 === (10))){
var inst_24747 = (state_24804[(12)]);
var inst_24745 = (state_24804[(13)]);
var inst_24746 = (state_24804[(14)]);
var inst_24748 = (state_24804[(15)]);
var inst_24753 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24746,inst_24748);
var inst_24754 = cljs.core.async.muxch_STAR_(inst_24753);
var inst_24755 = cljs.core.async.close_BANG_(inst_24754);
var inst_24756 = (inst_24748 + (1));
var tmp24837 = inst_24747;
var tmp24838 = inst_24745;
var tmp24839 = inst_24746;
var inst_24745__$1 = tmp24838;
var inst_24746__$1 = tmp24839;
var inst_24747__$1 = tmp24837;
var inst_24748__$1 = inst_24756;
var state_24804__$1 = (function (){var statearr_24843 = state_24804;
(statearr_24843[(12)] = inst_24747__$1);

(statearr_24843[(13)] = inst_24745__$1);

(statearr_24843[(14)] = inst_24746__$1);

(statearr_24843[(17)] = inst_24755);

(statearr_24843[(15)] = inst_24748__$1);

return statearr_24843;
})();
var statearr_24844_24880 = state_24804__$1;
(statearr_24844_24880[(2)] = null);

(statearr_24844_24880[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24805 === (18))){
var inst_24774 = (state_24804[(2)]);
var state_24804__$1 = state_24804;
var statearr_24845_24881 = state_24804__$1;
(statearr_24845_24881[(2)] = inst_24774);

(statearr_24845_24881[(1)] = (15));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24805 === (8))){
var inst_24747 = (state_24804[(12)]);
var inst_24748 = (state_24804[(15)]);
var inst_24750 = (inst_24748 < inst_24747);
var inst_24751 = inst_24750;
var state_24804__$1 = state_24804;
if(cljs.core.truth_(inst_24751)){
var statearr_24846_24882 = state_24804__$1;
(statearr_24846_24882[(1)] = (10));

} else {
var statearr_24847_24883 = state_24804__$1;
(statearr_24847_24883[(1)] = (11));

}

return cljs.core.constant$keyword$40;
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
});})(c__11389__auto___24855,mults,ensure_mult,p))
;
return ((function (switch__11309__auto__,c__11389__auto___24855,mults,ensure_mult,p){
return (function() {
var state_machine__11310__auto__ = null;
var state_machine__11310__auto____0 = (function (){
var statearr_24851 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24851[(0)] = state_machine__11310__auto__);

(statearr_24851[(1)] = (1));

return statearr_24851;
});
var state_machine__11310__auto____1 = (function (state_24804){
while(true){
var ret_value__11311__auto__ = (function (){try{while(true){
var result__11312__auto__ = switch__11309__auto__(state_24804);
if(cljs.core.keyword_identical_QMARK_(result__11312__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11312__auto__;
}
break;
}
}catch (e24852){if((e24852 instanceof Object)){
var ex__11313__auto__ = e24852;
var statearr_24853_24884 = state_24804;
(statearr_24853_24884[(5)] = ex__11313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24804);

return cljs.core.constant$keyword$40;
} else {
throw e24852;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11311__auto__,cljs.core.constant$keyword$40)){
var G__24885 = state_24804;
state_24804 = G__24885;
continue;
} else {
return ret_value__11311__auto__;
}
break;
}
});
state_machine__11310__auto__ = function(state_24804){
switch(arguments.length){
case 0:
return state_machine__11310__auto____0.call(this);
case 1:
return state_machine__11310__auto____1.call(this,state_24804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11310__auto____0;
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11310__auto____1;
return state_machine__11310__auto__;
})()
;})(switch__11309__auto__,c__11389__auto___24855,mults,ensure_mult,p))
})();
var state__11391__auto__ = (function (){var statearr_24854 = (function (){return (f__11390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11390__auto__.cljs$core$IFn$_invoke$arity$0() : f__11390__auto__.call(null));
})();
(statearr_24854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11389__auto___24855);

return statearr_24854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11391__auto__);
});})(c__11389__auto___24855,mults,ensure_mult,p))
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
var dctr = (function (){var G__24966 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24966) : cljs.core.atom.call(null,G__24966));
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
var c__11389__auto___25039 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11389__auto___25039,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11390__auto__ = (function (){var switch__11309__auto__ = ((function (c__11389__auto___25039,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25005){
var state_val_25006 = (state_25005[(1)]);
if((state_val_25006 === (7))){
var state_25005__$1 = state_25005;
var statearr_25007_25040 = state_25005__$1;
(statearr_25007_25040[(2)] = null);

(statearr_25007_25040[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25006 === (1))){
var state_25005__$1 = state_25005;
var statearr_25008_25041 = state_25005__$1;
(statearr_25008_25041[(2)] = null);

(statearr_25008_25041[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25006 === (4))){
var inst_24969 = (state_25005[(7)]);
var inst_24971 = (inst_24969 < cnt);
var state_25005__$1 = state_25005;
if(cljs.core.truth_(inst_24971)){
var statearr_25009_25042 = state_25005__$1;
(statearr_25009_25042[(1)] = (6));

} else {
var statearr_25010_25043 = state_25005__$1;
(statearr_25010_25043[(1)] = (7));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_25006 === (15))){
var inst_25001 = (state_25005[(2)]);
var state_25005__$1 = state_25005;
var statearr_25011_25044 = state_25005__$1;
(statearr_25011_25044[(2)] = inst_25001);

(statearr_25011_25044[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25006 === (13))){
var inst_24994 = cljs.core.async.close_BANG_(out);
var state_25005__$1 = state_25005;
var statearr_25012_25045 = state_25005__$1;
(statearr_25012_25045[(2)] = inst_24994);

(statearr_25012_25045[(1)] = (15));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25006 === (6))){
var state_25005__$1 = state_25005;
var statearr_25013_25046 = state_25005__$1;
(statearr_25013_25046[(2)] = null);

(statearr_25013_25046[(1)] = (11));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25006 === (3))){
var inst_25003 = (state_25005[(2)]);
var state_25005__$1 = state_25005;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25005__$1,inst_25003);
} else {
if((state_val_25006 === (12))){
var inst_24991 = (state_25005[(8)]);
var inst_24991__$1 = (state_25005[(2)]);
var inst_24992 = cljs.core.some(cljs.core.nil_QMARK_,inst_24991__$1);
var state_25005__$1 = (function (){var statearr_25014 = state_25005;
(statearr_25014[(8)] = inst_24991__$1);

return statearr_25014;
})();
if(cljs.core.truth_(inst_24992)){
var statearr_25015_25047 = state_25005__$1;
(statearr_25015_25047[(1)] = (13));

} else {
var statearr_25016_25048 = state_25005__$1;
(statearr_25016_25048[(1)] = (14));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_25006 === (2))){
var inst_24968 = (function (){var G__25017 = dctr;
var G__25018 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25017,G__25018) : cljs.core.reset_BANG_.call(null,G__25017,G__25018));
})();
var inst_24969 = (0);
var state_25005__$1 = (function (){var statearr_25019 = state_25005;
(statearr_25019[(7)] = inst_24969);

(statearr_25019[(9)] = inst_24968);

return statearr_25019;
})();
var statearr_25020_25049 = state_25005__$1;
(statearr_25020_25049[(2)] = null);

(statearr_25020_25049[(1)] = (4));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25006 === (11))){
var inst_24969 = (state_25005[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25005,(10),Object,null,(9));
var inst_24978 = (function (){var G__25021 = inst_24969;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__25021) : chs__$1.call(null,G__25021));
})();
var inst_24979 = (function (){var G__25022 = inst_24969;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__25022) : done.call(null,G__25022));
})();
var inst_24980 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_24978,inst_24979);
var state_25005__$1 = state_25005;
var statearr_25023_25050 = state_25005__$1;
(statearr_25023_25050[(2)] = inst_24980);


cljs.core.async.impl.ioc_helpers.process_exception(state_25005__$1);

return cljs.core.constant$keyword$40;
} else {
if((state_val_25006 === (9))){
var inst_24969 = (state_25005[(7)]);
var inst_24982 = (state_25005[(2)]);
var inst_24983 = (inst_24969 + (1));
var inst_24969__$1 = inst_24983;
var state_25005__$1 = (function (){var statearr_25024 = state_25005;
(statearr_25024[(10)] = inst_24982);

(statearr_25024[(7)] = inst_24969__$1);

return statearr_25024;
})();
var statearr_25025_25051 = state_25005__$1;
(statearr_25025_25051[(2)] = null);

(statearr_25025_25051[(1)] = (4));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25006 === (5))){
var inst_24989 = (state_25005[(2)]);
var state_25005__$1 = (function (){var statearr_25026 = state_25005;
(statearr_25026[(11)] = inst_24989);

return statearr_25026;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25005__$1,(12),dchan);
} else {
if((state_val_25006 === (14))){
var inst_24991 = (state_25005[(8)]);
var inst_24996 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_24991);
var state_25005__$1 = state_25005;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25005__$1,(16),out,inst_24996);
} else {
if((state_val_25006 === (16))){
var inst_24998 = (state_25005[(2)]);
var state_25005__$1 = (function (){var statearr_25027 = state_25005;
(statearr_25027[(12)] = inst_24998);

return statearr_25027;
})();
var statearr_25028_25052 = state_25005__$1;
(statearr_25028_25052[(2)] = null);

(statearr_25028_25052[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25006 === (10))){
var inst_24973 = (state_25005[(2)]);
var inst_24974 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_25005__$1 = (function (){var statearr_25029 = state_25005;
(statearr_25029[(13)] = inst_24973);

return statearr_25029;
})();
var statearr_25030_25053 = state_25005__$1;
(statearr_25030_25053[(2)] = inst_24974);


cljs.core.async.impl.ioc_helpers.process_exception(state_25005__$1);

return cljs.core.constant$keyword$40;
} else {
if((state_val_25006 === (8))){
var inst_24987 = (state_25005[(2)]);
var state_25005__$1 = state_25005;
var statearr_25031_25054 = state_25005__$1;
(statearr_25031_25054[(2)] = inst_24987);

(statearr_25031_25054[(1)] = (5));


return cljs.core.constant$keyword$40;
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
});})(c__11389__auto___25039,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__11309__auto__,c__11389__auto___25039,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11310__auto__ = null;
var state_machine__11310__auto____0 = (function (){
var statearr_25035 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25035[(0)] = state_machine__11310__auto__);

(statearr_25035[(1)] = (1));

return statearr_25035;
});
var state_machine__11310__auto____1 = (function (state_25005){
while(true){
var ret_value__11311__auto__ = (function (){try{while(true){
var result__11312__auto__ = switch__11309__auto__(state_25005);
if(cljs.core.keyword_identical_QMARK_(result__11312__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11312__auto__;
}
break;
}
}catch (e25036){if((e25036 instanceof Object)){
var ex__11313__auto__ = e25036;
var statearr_25037_25055 = state_25005;
(statearr_25037_25055[(5)] = ex__11313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25005);

return cljs.core.constant$keyword$40;
} else {
throw e25036;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11311__auto__,cljs.core.constant$keyword$40)){
var G__25056 = state_25005;
state_25005 = G__25056;
continue;
} else {
return ret_value__11311__auto__;
}
break;
}
});
state_machine__11310__auto__ = function(state_25005){
switch(arguments.length){
case 0:
return state_machine__11310__auto____0.call(this);
case 1:
return state_machine__11310__auto____1.call(this,state_25005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11310__auto____0;
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11310__auto____1;
return state_machine__11310__auto__;
})()
;})(switch__11309__auto__,c__11389__auto___25039,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11391__auto__ = (function (){var statearr_25038 = (function (){return (f__11390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11390__auto__.cljs$core$IFn$_invoke$arity$0() : f__11390__auto__.call(null));
})();
(statearr_25038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11389__auto___25039);

return statearr_25038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11391__auto__);
});})(c__11389__auto___25039,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__11389__auto___25166 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11389__auto___25166,out){
return (function (){
var f__11390__auto__ = (function (){var switch__11309__auto__ = ((function (c__11389__auto___25166,out){
return (function (state_25142){
var state_val_25143 = (state_25142[(1)]);
if((state_val_25143 === (7))){
var inst_25121 = (state_25142[(7)]);
var inst_25122 = (state_25142[(8)]);
var inst_25121__$1 = (state_25142[(2)]);
var inst_25122__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25121__$1,(0),null);
var inst_25123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25121__$1,(1),null);
var inst_25124 = (inst_25122__$1 == null);
var state_25142__$1 = (function (){var statearr_25144 = state_25142;
(statearr_25144[(7)] = inst_25121__$1);

(statearr_25144[(9)] = inst_25123);

(statearr_25144[(8)] = inst_25122__$1);

return statearr_25144;
})();
if(cljs.core.truth_(inst_25124)){
var statearr_25145_25167 = state_25142__$1;
(statearr_25145_25167[(1)] = (8));

} else {
var statearr_25146_25168 = state_25142__$1;
(statearr_25146_25168[(1)] = (9));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_25143 === (1))){
var inst_25113 = cljs.core.vec(chs);
var inst_25114 = inst_25113;
var state_25142__$1 = (function (){var statearr_25147 = state_25142;
(statearr_25147[(10)] = inst_25114);

return statearr_25147;
})();
var statearr_25148_25169 = state_25142__$1;
(statearr_25148_25169[(2)] = null);

(statearr_25148_25169[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25143 === (4))){
var inst_25114 = (state_25142[(10)]);
var state_25142__$1 = state_25142;
return cljs.core.async.ioc_alts_BANG_(state_25142__$1,(7),inst_25114);
} else {
if((state_val_25143 === (6))){
var inst_25138 = (state_25142[(2)]);
var state_25142__$1 = state_25142;
var statearr_25149_25170 = state_25142__$1;
(statearr_25149_25170[(2)] = inst_25138);

(statearr_25149_25170[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25143 === (3))){
var inst_25140 = (state_25142[(2)]);
var state_25142__$1 = state_25142;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25142__$1,inst_25140);
} else {
if((state_val_25143 === (2))){
var inst_25114 = (state_25142[(10)]);
var inst_25116 = cljs.core.count(inst_25114);
var inst_25117 = (inst_25116 > (0));
var state_25142__$1 = state_25142;
if(cljs.core.truth_(inst_25117)){
var statearr_25151_25171 = state_25142__$1;
(statearr_25151_25171[(1)] = (4));

} else {
var statearr_25152_25172 = state_25142__$1;
(statearr_25152_25172[(1)] = (5));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_25143 === (11))){
var inst_25114 = (state_25142[(10)]);
var inst_25131 = (state_25142[(2)]);
var tmp25150 = inst_25114;
var inst_25114__$1 = tmp25150;
var state_25142__$1 = (function (){var statearr_25153 = state_25142;
(statearr_25153[(10)] = inst_25114__$1);

(statearr_25153[(11)] = inst_25131);

return statearr_25153;
})();
var statearr_25154_25173 = state_25142__$1;
(statearr_25154_25173[(2)] = null);

(statearr_25154_25173[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25143 === (9))){
var inst_25122 = (state_25142[(8)]);
var state_25142__$1 = state_25142;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25142__$1,(11),out,inst_25122);
} else {
if((state_val_25143 === (5))){
var inst_25136 = cljs.core.async.close_BANG_(out);
var state_25142__$1 = state_25142;
var statearr_25155_25174 = state_25142__$1;
(statearr_25155_25174[(2)] = inst_25136);

(statearr_25155_25174[(1)] = (6));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25143 === (10))){
var inst_25134 = (state_25142[(2)]);
var state_25142__$1 = state_25142;
var statearr_25156_25175 = state_25142__$1;
(statearr_25156_25175[(2)] = inst_25134);

(statearr_25156_25175[(1)] = (6));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25143 === (8))){
var inst_25114 = (state_25142[(10)]);
var inst_25121 = (state_25142[(7)]);
var inst_25123 = (state_25142[(9)]);
var inst_25122 = (state_25142[(8)]);
var inst_25126 = (function (){var c = inst_25123;
var v = inst_25122;
var vec__25119 = inst_25121;
var cs = inst_25114;
return ((function (c,v,vec__25119,cs,inst_25114,inst_25121,inst_25123,inst_25122,state_val_25143,c__11389__auto___25166,out){
return (function (p1__25057_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__25057_SHARP_);
});
;})(c,v,vec__25119,cs,inst_25114,inst_25121,inst_25123,inst_25122,state_val_25143,c__11389__auto___25166,out))
})();
var inst_25127 = cljs.core.filterv(inst_25126,inst_25114);
var inst_25114__$1 = inst_25127;
var state_25142__$1 = (function (){var statearr_25157 = state_25142;
(statearr_25157[(10)] = inst_25114__$1);

return statearr_25157;
})();
var statearr_25158_25176 = state_25142__$1;
(statearr_25158_25176[(2)] = null);

(statearr_25158_25176[(1)] = (2));


return cljs.core.constant$keyword$40;
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
});})(c__11389__auto___25166,out))
;
return ((function (switch__11309__auto__,c__11389__auto___25166,out){
return (function() {
var state_machine__11310__auto__ = null;
var state_machine__11310__auto____0 = (function (){
var statearr_25162 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25162[(0)] = state_machine__11310__auto__);

(statearr_25162[(1)] = (1));

return statearr_25162;
});
var state_machine__11310__auto____1 = (function (state_25142){
while(true){
var ret_value__11311__auto__ = (function (){try{while(true){
var result__11312__auto__ = switch__11309__auto__(state_25142);
if(cljs.core.keyword_identical_QMARK_(result__11312__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11312__auto__;
}
break;
}
}catch (e25163){if((e25163 instanceof Object)){
var ex__11313__auto__ = e25163;
var statearr_25164_25177 = state_25142;
(statearr_25164_25177[(5)] = ex__11313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25142);

return cljs.core.constant$keyword$40;
} else {
throw e25163;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11311__auto__,cljs.core.constant$keyword$40)){
var G__25178 = state_25142;
state_25142 = G__25178;
continue;
} else {
return ret_value__11311__auto__;
}
break;
}
});
state_machine__11310__auto__ = function(state_25142){
switch(arguments.length){
case 0:
return state_machine__11310__auto____0.call(this);
case 1:
return state_machine__11310__auto____1.call(this,state_25142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11310__auto____0;
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11310__auto____1;
return state_machine__11310__auto__;
})()
;})(switch__11309__auto__,c__11389__auto___25166,out))
})();
var state__11391__auto__ = (function (){var statearr_25165 = (function (){return (f__11390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11390__auto__.cljs$core$IFn$_invoke$arity$0() : f__11390__auto__.call(null));
})();
(statearr_25165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11389__auto___25166);

return statearr_25165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11391__auto__);
});})(c__11389__auto___25166,out))
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
var c__11389__auto___25274 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11389__auto___25274,out){
return (function (){
var f__11390__auto__ = (function (){var switch__11309__auto__ = ((function (c__11389__auto___25274,out){
return (function (state_25251){
var state_val_25252 = (state_25251[(1)]);
if((state_val_25252 === (7))){
var inst_25233 = (state_25251[(7)]);
var inst_25233__$1 = (state_25251[(2)]);
var inst_25234 = (inst_25233__$1 == null);
var inst_25235 = cljs.core.not(inst_25234);
var state_25251__$1 = (function (){var statearr_25253 = state_25251;
(statearr_25253[(7)] = inst_25233__$1);

return statearr_25253;
})();
if(inst_25235){
var statearr_25254_25275 = state_25251__$1;
(statearr_25254_25275[(1)] = (8));

} else {
var statearr_25255_25276 = state_25251__$1;
(statearr_25255_25276[(1)] = (9));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_25252 === (1))){
var inst_25228 = (0);
var state_25251__$1 = (function (){var statearr_25256 = state_25251;
(statearr_25256[(8)] = inst_25228);

return statearr_25256;
})();
var statearr_25257_25277 = state_25251__$1;
(statearr_25257_25277[(2)] = null);

(statearr_25257_25277[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25252 === (4))){
var state_25251__$1 = state_25251;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25251__$1,(7),ch);
} else {
if((state_val_25252 === (6))){
var inst_25246 = (state_25251[(2)]);
var state_25251__$1 = state_25251;
var statearr_25258_25278 = state_25251__$1;
(statearr_25258_25278[(2)] = inst_25246);

(statearr_25258_25278[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25252 === (3))){
var inst_25248 = (state_25251[(2)]);
var inst_25249 = cljs.core.async.close_BANG_(out);
var state_25251__$1 = (function (){var statearr_25259 = state_25251;
(statearr_25259[(9)] = inst_25248);

return statearr_25259;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25251__$1,inst_25249);
} else {
if((state_val_25252 === (2))){
var inst_25228 = (state_25251[(8)]);
var inst_25230 = (inst_25228 < n);
var state_25251__$1 = state_25251;
if(cljs.core.truth_(inst_25230)){
var statearr_25260_25279 = state_25251__$1;
(statearr_25260_25279[(1)] = (4));

} else {
var statearr_25261_25280 = state_25251__$1;
(statearr_25261_25280[(1)] = (5));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_25252 === (11))){
var inst_25228 = (state_25251[(8)]);
var inst_25238 = (state_25251[(2)]);
var inst_25239 = (inst_25228 + (1));
var inst_25228__$1 = inst_25239;
var state_25251__$1 = (function (){var statearr_25262 = state_25251;
(statearr_25262[(10)] = inst_25238);

(statearr_25262[(8)] = inst_25228__$1);

return statearr_25262;
})();
var statearr_25263_25281 = state_25251__$1;
(statearr_25263_25281[(2)] = null);

(statearr_25263_25281[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25252 === (9))){
var state_25251__$1 = state_25251;
var statearr_25264_25282 = state_25251__$1;
(statearr_25264_25282[(2)] = null);

(statearr_25264_25282[(1)] = (10));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25252 === (5))){
var state_25251__$1 = state_25251;
var statearr_25265_25283 = state_25251__$1;
(statearr_25265_25283[(2)] = null);

(statearr_25265_25283[(1)] = (6));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25252 === (10))){
var inst_25243 = (state_25251[(2)]);
var state_25251__$1 = state_25251;
var statearr_25266_25284 = state_25251__$1;
(statearr_25266_25284[(2)] = inst_25243);

(statearr_25266_25284[(1)] = (6));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25252 === (8))){
var inst_25233 = (state_25251[(7)]);
var state_25251__$1 = state_25251;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25251__$1,(11),out,inst_25233);
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
});})(c__11389__auto___25274,out))
;
return ((function (switch__11309__auto__,c__11389__auto___25274,out){
return (function() {
var state_machine__11310__auto__ = null;
var state_machine__11310__auto____0 = (function (){
var statearr_25270 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25270[(0)] = state_machine__11310__auto__);

(statearr_25270[(1)] = (1));

return statearr_25270;
});
var state_machine__11310__auto____1 = (function (state_25251){
while(true){
var ret_value__11311__auto__ = (function (){try{while(true){
var result__11312__auto__ = switch__11309__auto__(state_25251);
if(cljs.core.keyword_identical_QMARK_(result__11312__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11312__auto__;
}
break;
}
}catch (e25271){if((e25271 instanceof Object)){
var ex__11313__auto__ = e25271;
var statearr_25272_25285 = state_25251;
(statearr_25272_25285[(5)] = ex__11313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25251);

return cljs.core.constant$keyword$40;
} else {
throw e25271;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11311__auto__,cljs.core.constant$keyword$40)){
var G__25286 = state_25251;
state_25251 = G__25286;
continue;
} else {
return ret_value__11311__auto__;
}
break;
}
});
state_machine__11310__auto__ = function(state_25251){
switch(arguments.length){
case 0:
return state_machine__11310__auto____0.call(this);
case 1:
return state_machine__11310__auto____1.call(this,state_25251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11310__auto____0;
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11310__auto____1;
return state_machine__11310__auto__;
})()
;})(switch__11309__auto__,c__11389__auto___25274,out))
})();
var state__11391__auto__ = (function (){var statearr_25273 = (function (){return (f__11390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11390__auto__.cljs$core$IFn$_invoke$arity$0() : f__11390__auto__.call(null));
})();
(statearr_25273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11389__auto___25274);

return statearr_25273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11391__auto__);
});})(c__11389__auto___25274,out))
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
if(typeof cljs.core.async.t25299 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25299 = (function (ch,f,map_LT_,meta25300){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25300 = meta25300;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25299.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25299.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t25299.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25299.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t25302 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25302 = (function (fn1,_,meta25300,map_LT_,f,ch,meta25303){
this.fn1 = fn1;
this._ = _;
this.meta25300 = meta25300;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25303 = meta25303;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25302.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25302.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t25302.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25287_SHARP_){
var G__25305 = (((p1__25287_SHARP_ == null))?null:(function (){var G__25306 = p1__25287_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__25306) : self__.f.call(null,G__25306));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__25305) : f1.call(null,G__25305));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t25302.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25304){
var self__ = this;
var _25304__$1 = this;
return self__.meta25303;
});})(___$1))
;

cljs.core.async.t25302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25304,meta25303__$1){
var self__ = this;
var _25304__$1 = this;
return (new cljs.core.async.t25302(self__.fn1,self__._,self__.meta25300,self__.map_LT_,self__.f,self__.ch,meta25303__$1));
});})(___$1))
;

cljs.core.async.t25302.cljs$lang$type = true;

cljs.core.async.t25302.cljs$lang$ctorStr = "cljs.core.async/t25302";

cljs.core.async.t25302.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25302");
});})(___$1))
;

cljs.core.async.__GT_t25302 = ((function (___$1){
return (function __GT_t25302(fn1__$1,___$2,meta25300__$1,map_LT___$1,f__$1,ch__$1,meta25303){
return (new cljs.core.async.t25302(fn1__$1,___$2,meta25300__$1,map_LT___$1,f__$1,ch__$1,meta25303));
});})(___$1))
;

}

return (new cljs.core.async.t25302(fn1,___$1,self__.meta25300,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,737,cljs.core.constant$keyword$10,10,cljs.core.constant$keyword$11,731,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/resources/public/js-min/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3618__auto__ = ret;
if(cljs.core.truth_(and__3618__auto__)){
return !(((function (){var G__25307 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25307) : cljs.core.deref.call(null,G__25307));
})() == null));
} else {
return and__3618__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__25308 = (function (){var G__25309 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25309) : cljs.core.deref.call(null,G__25309));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__25308) : self__.f.call(null,G__25308));
})());
} else {
return ret;
}
});

cljs.core.async.t25299.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25299.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t25299.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t25299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25301){
var self__ = this;
var _25301__$1 = this;
return self__.meta25300;
});

cljs.core.async.t25299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25301,meta25300__$1){
var self__ = this;
var _25301__$1 = this;
return (new cljs.core.async.t25299(self__.ch,self__.f,self__.map_LT_,meta25300__$1));
});

cljs.core.async.t25299.cljs$lang$type = true;

cljs.core.async.t25299.cljs$lang$ctorStr = "cljs.core.async/t25299";

cljs.core.async.t25299.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25299");
});

cljs.core.async.__GT_t25299 = (function __GT_t25299(ch__$1,f__$1,map_LT___$1,meta25300){
return (new cljs.core.async.t25299(ch__$1,f__$1,map_LT___$1,meta25300));
});

}

return (new cljs.core.async.t25299(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,743,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,722,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/resources/public/js-min/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t25314 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25314 = (function (ch,f,map_GT_,meta25315){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25315 = meta25315;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25314.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25314.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__25317 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__25317) : self__.f.call(null,G__25317));
})(),fn1);
});

cljs.core.async.t25314.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25314.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t25314.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25314.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t25314.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25316){
var self__ = this;
var _25316__$1 = this;
return self__.meta25315;
});

cljs.core.async.t25314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25316,meta25315__$1){
var self__ = this;
var _25316__$1 = this;
return (new cljs.core.async.t25314(self__.ch,self__.f,self__.map_GT_,meta25315__$1));
});

cljs.core.async.t25314.cljs$lang$type = true;

cljs.core.async.t25314.cljs$lang$ctorStr = "cljs.core.async/t25314";

cljs.core.async.t25314.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25314");
});

cljs.core.async.__GT_t25314 = (function __GT_t25314(ch__$1,f__$1,map_GT___$1,meta25315){
return (new cljs.core.async.t25314(ch__$1,f__$1,map_GT___$1,meta25315));
});

}

return (new cljs.core.async.t25314(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,34,cljs.core.constant$keyword$9,757,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,748,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/resources/public/js-min/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t25322 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25322 = (function (ch,p,filter_GT_,meta25323){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25323 = meta25323;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25322.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25322.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__25325 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__25325) : self__.p.call(null,G__25325));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t25322.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25322.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t25322.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25322.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t25322.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t25322.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25324){
var self__ = this;
var _25324__$1 = this;
return self__.meta25323;
});

cljs.core.async.t25322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25324,meta25323__$1){
var self__ = this;
var _25324__$1 = this;
return (new cljs.core.async.t25322(self__.ch,self__.p,self__.filter_GT_,meta25323__$1));
});

cljs.core.async.t25322.cljs$lang$type = true;

cljs.core.async.t25322.cljs$lang$ctorStr = "cljs.core.async/t25322";

cljs.core.async.t25322.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async/t25322");
});

cljs.core.async.__GT_t25322 = (function __GT_t25322(ch__$1,p__$1,filter_GT___$1,meta25323){
return (new cljs.core.async.t25322(ch__$1,p__$1,filter_GT___$1,meta25323));
});

}

return (new cljs.core.async.t25322(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,774,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,762,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/resources/public/js-min/cljs/core/async.cljs"], null)));
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
var c__11389__auto___25413 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11389__auto___25413,out){
return (function (){
var f__11390__auto__ = (function (){var switch__11309__auto__ = ((function (c__11389__auto___25413,out){
return (function (state_25391){
var state_val_25392 = (state_25391[(1)]);
if((state_val_25392 === (7))){
var inst_25387 = (state_25391[(2)]);
var state_25391__$1 = state_25391;
var statearr_25393_25414 = state_25391__$1;
(statearr_25393_25414[(2)] = inst_25387);

(statearr_25393_25414[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25392 === (1))){
var state_25391__$1 = state_25391;
var statearr_25394_25415 = state_25391__$1;
(statearr_25394_25415[(2)] = null);

(statearr_25394_25415[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25392 === (4))){
var inst_25373 = (state_25391[(7)]);
var inst_25373__$1 = (state_25391[(2)]);
var inst_25374 = (inst_25373__$1 == null);
var state_25391__$1 = (function (){var statearr_25395 = state_25391;
(statearr_25395[(7)] = inst_25373__$1);

return statearr_25395;
})();
if(cljs.core.truth_(inst_25374)){
var statearr_25396_25416 = state_25391__$1;
(statearr_25396_25416[(1)] = (5));

} else {
var statearr_25397_25417 = state_25391__$1;
(statearr_25397_25417[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_25392 === (6))){
var inst_25373 = (state_25391[(7)]);
var inst_25378 = (function (){var G__25398 = inst_25373;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__25398) : p.call(null,G__25398));
})();
var state_25391__$1 = state_25391;
if(cljs.core.truth_(inst_25378)){
var statearr_25399_25418 = state_25391__$1;
(statearr_25399_25418[(1)] = (8));

} else {
var statearr_25400_25419 = state_25391__$1;
(statearr_25400_25419[(1)] = (9));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_25392 === (3))){
var inst_25389 = (state_25391[(2)]);
var state_25391__$1 = state_25391;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25391__$1,inst_25389);
} else {
if((state_val_25392 === (2))){
var state_25391__$1 = state_25391;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25391__$1,(4),ch);
} else {
if((state_val_25392 === (11))){
var inst_25381 = (state_25391[(2)]);
var state_25391__$1 = state_25391;
var statearr_25401_25420 = state_25391__$1;
(statearr_25401_25420[(2)] = inst_25381);

(statearr_25401_25420[(1)] = (10));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25392 === (9))){
var state_25391__$1 = state_25391;
var statearr_25402_25421 = state_25391__$1;
(statearr_25402_25421[(2)] = null);

(statearr_25402_25421[(1)] = (10));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25392 === (5))){
var inst_25376 = cljs.core.async.close_BANG_(out);
var state_25391__$1 = state_25391;
var statearr_25403_25422 = state_25391__$1;
(statearr_25403_25422[(2)] = inst_25376);

(statearr_25403_25422[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25392 === (10))){
var inst_25384 = (state_25391[(2)]);
var state_25391__$1 = (function (){var statearr_25404 = state_25391;
(statearr_25404[(8)] = inst_25384);

return statearr_25404;
})();
var statearr_25405_25423 = state_25391__$1;
(statearr_25405_25423[(2)] = null);

(statearr_25405_25423[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25392 === (8))){
var inst_25373 = (state_25391[(7)]);
var state_25391__$1 = state_25391;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25391__$1,(11),out,inst_25373);
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
});})(c__11389__auto___25413,out))
;
return ((function (switch__11309__auto__,c__11389__auto___25413,out){
return (function() {
var state_machine__11310__auto__ = null;
var state_machine__11310__auto____0 = (function (){
var statearr_25409 = [null,null,null,null,null,null,null,null,null];
(statearr_25409[(0)] = state_machine__11310__auto__);

(statearr_25409[(1)] = (1));

return statearr_25409;
});
var state_machine__11310__auto____1 = (function (state_25391){
while(true){
var ret_value__11311__auto__ = (function (){try{while(true){
var result__11312__auto__ = switch__11309__auto__(state_25391);
if(cljs.core.keyword_identical_QMARK_(result__11312__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11312__auto__;
}
break;
}
}catch (e25410){if((e25410 instanceof Object)){
var ex__11313__auto__ = e25410;
var statearr_25411_25424 = state_25391;
(statearr_25411_25424[(5)] = ex__11313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25391);

return cljs.core.constant$keyword$40;
} else {
throw e25410;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11311__auto__,cljs.core.constant$keyword$40)){
var G__25425 = state_25391;
state_25391 = G__25425;
continue;
} else {
return ret_value__11311__auto__;
}
break;
}
});
state_machine__11310__auto__ = function(state_25391){
switch(arguments.length){
case 0:
return state_machine__11310__auto____0.call(this);
case 1:
return state_machine__11310__auto____1.call(this,state_25391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11310__auto____0;
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11310__auto____1;
return state_machine__11310__auto__;
})()
;})(switch__11309__auto__,c__11389__auto___25413,out))
})();
var state__11391__auto__ = (function (){var statearr_25412 = (function (){return (f__11390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11390__auto__.cljs$core$IFn$_invoke$arity$0() : f__11390__auto__.call(null));
})();
(statearr_25412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11389__auto___25413);

return statearr_25412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11391__auto__);
});})(c__11389__auto___25413,out))
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
var c__11389__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11389__auto__){
return (function (){
var f__11390__auto__ = (function (){var switch__11309__auto__ = ((function (c__11389__auto__){
return (function (state_25595){
var state_val_25596 = (state_25595[(1)]);
if((state_val_25596 === (7))){
var inst_25591 = (state_25595[(2)]);
var state_25595__$1 = state_25595;
var statearr_25597_25639 = state_25595__$1;
(statearr_25597_25639[(2)] = inst_25591);

(statearr_25597_25639[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25596 === (20))){
var inst_25561 = (state_25595[(7)]);
var inst_25572 = (state_25595[(2)]);
var inst_25573 = cljs.core.next(inst_25561);
var inst_25547 = inst_25573;
var inst_25548 = null;
var inst_25549 = (0);
var inst_25550 = (0);
var state_25595__$1 = (function (){var statearr_25598 = state_25595;
(statearr_25598[(8)] = inst_25550);

(statearr_25598[(9)] = inst_25549);

(statearr_25598[(10)] = inst_25572);

(statearr_25598[(11)] = inst_25548);

(statearr_25598[(12)] = inst_25547);

return statearr_25598;
})();
var statearr_25599_25640 = state_25595__$1;
(statearr_25599_25640[(2)] = null);

(statearr_25599_25640[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25596 === (1))){
var state_25595__$1 = state_25595;
var statearr_25600_25641 = state_25595__$1;
(statearr_25600_25641[(2)] = null);

(statearr_25600_25641[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25596 === (4))){
var inst_25536 = (state_25595[(13)]);
var inst_25536__$1 = (state_25595[(2)]);
var inst_25537 = (inst_25536__$1 == null);
var state_25595__$1 = (function (){var statearr_25601 = state_25595;
(statearr_25601[(13)] = inst_25536__$1);

return statearr_25601;
})();
if(cljs.core.truth_(inst_25537)){
var statearr_25602_25642 = state_25595__$1;
(statearr_25602_25642[(1)] = (5));

} else {
var statearr_25603_25643 = state_25595__$1;
(statearr_25603_25643[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_25596 === (15))){
var state_25595__$1 = state_25595;
var statearr_25607_25644 = state_25595__$1;
(statearr_25607_25644[(2)] = null);

(statearr_25607_25644[(1)] = (16));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25596 === (21))){
var state_25595__$1 = state_25595;
var statearr_25608_25645 = state_25595__$1;
(statearr_25608_25645[(2)] = null);

(statearr_25608_25645[(1)] = (23));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25596 === (13))){
var inst_25550 = (state_25595[(8)]);
var inst_25549 = (state_25595[(9)]);
var inst_25548 = (state_25595[(11)]);
var inst_25547 = (state_25595[(12)]);
var inst_25557 = (state_25595[(2)]);
var inst_25558 = (inst_25550 + (1));
var tmp25604 = inst_25549;
var tmp25605 = inst_25548;
var tmp25606 = inst_25547;
var inst_25547__$1 = tmp25606;
var inst_25548__$1 = tmp25605;
var inst_25549__$1 = tmp25604;
var inst_25550__$1 = inst_25558;
var state_25595__$1 = (function (){var statearr_25609 = state_25595;
(statearr_25609[(8)] = inst_25550__$1);

(statearr_25609[(9)] = inst_25549__$1);

(statearr_25609[(14)] = inst_25557);

(statearr_25609[(11)] = inst_25548__$1);

(statearr_25609[(12)] = inst_25547__$1);

return statearr_25609;
})();
var statearr_25610_25646 = state_25595__$1;
(statearr_25610_25646[(2)] = null);

(statearr_25610_25646[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25596 === (22))){
var state_25595__$1 = state_25595;
var statearr_25611_25647 = state_25595__$1;
(statearr_25611_25647[(2)] = null);

(statearr_25611_25647[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25596 === (6))){
var inst_25536 = (state_25595[(13)]);
var inst_25545 = (function (){var G__25612 = inst_25536;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25612) : f.call(null,G__25612));
})();
var inst_25546 = cljs.core.seq(inst_25545);
var inst_25547 = inst_25546;
var inst_25548 = null;
var inst_25549 = (0);
var inst_25550 = (0);
var state_25595__$1 = (function (){var statearr_25613 = state_25595;
(statearr_25613[(8)] = inst_25550);

(statearr_25613[(9)] = inst_25549);

(statearr_25613[(11)] = inst_25548);

(statearr_25613[(12)] = inst_25547);

return statearr_25613;
})();
var statearr_25614_25648 = state_25595__$1;
(statearr_25614_25648[(2)] = null);

(statearr_25614_25648[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25596 === (17))){
var inst_25561 = (state_25595[(7)]);
var inst_25565 = cljs.core.chunk_first(inst_25561);
var inst_25566 = cljs.core.chunk_rest(inst_25561);
var inst_25567 = cljs.core.count(inst_25565);
var inst_25547 = inst_25566;
var inst_25548 = inst_25565;
var inst_25549 = inst_25567;
var inst_25550 = (0);
var state_25595__$1 = (function (){var statearr_25615 = state_25595;
(statearr_25615[(8)] = inst_25550);

(statearr_25615[(9)] = inst_25549);

(statearr_25615[(11)] = inst_25548);

(statearr_25615[(12)] = inst_25547);

return statearr_25615;
})();
var statearr_25616_25649 = state_25595__$1;
(statearr_25616_25649[(2)] = null);

(statearr_25616_25649[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25596 === (3))){
var inst_25593 = (state_25595[(2)]);
var state_25595__$1 = state_25595;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25595__$1,inst_25593);
} else {
if((state_val_25596 === (12))){
var inst_25581 = (state_25595[(2)]);
var state_25595__$1 = state_25595;
var statearr_25617_25650 = state_25595__$1;
(statearr_25617_25650[(2)] = inst_25581);

(statearr_25617_25650[(1)] = (9));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25596 === (2))){
var state_25595__$1 = state_25595;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25595__$1,(4),in$);
} else {
if((state_val_25596 === (23))){
var inst_25589 = (state_25595[(2)]);
var state_25595__$1 = state_25595;
var statearr_25618_25651 = state_25595__$1;
(statearr_25618_25651[(2)] = inst_25589);

(statearr_25618_25651[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25596 === (19))){
var inst_25576 = (state_25595[(2)]);
var state_25595__$1 = state_25595;
var statearr_25619_25652 = state_25595__$1;
(statearr_25619_25652[(2)] = inst_25576);

(statearr_25619_25652[(1)] = (16));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25596 === (11))){
var inst_25547 = (state_25595[(12)]);
var inst_25561 = (state_25595[(7)]);
var inst_25561__$1 = cljs.core.seq(inst_25547);
var state_25595__$1 = (function (){var statearr_25620 = state_25595;
(statearr_25620[(7)] = inst_25561__$1);

return statearr_25620;
})();
if(inst_25561__$1){
var statearr_25621_25653 = state_25595__$1;
(statearr_25621_25653[(1)] = (14));

} else {
var statearr_25622_25654 = state_25595__$1;
(statearr_25622_25654[(1)] = (15));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_25596 === (9))){
var inst_25583 = (state_25595[(2)]);
var inst_25584 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_25595__$1 = (function (){var statearr_25623 = state_25595;
(statearr_25623[(15)] = inst_25583);

return statearr_25623;
})();
if(cljs.core.truth_(inst_25584)){
var statearr_25624_25655 = state_25595__$1;
(statearr_25624_25655[(1)] = (21));

} else {
var statearr_25625_25656 = state_25595__$1;
(statearr_25625_25656[(1)] = (22));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_25596 === (5))){
var inst_25539 = cljs.core.async.close_BANG_(out);
var state_25595__$1 = state_25595;
var statearr_25626_25657 = state_25595__$1;
(statearr_25626_25657[(2)] = inst_25539);

(statearr_25626_25657[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25596 === (14))){
var inst_25561 = (state_25595[(7)]);
var inst_25563 = cljs.core.chunked_seq_QMARK_(inst_25561);
var state_25595__$1 = state_25595;
if(inst_25563){
var statearr_25627_25658 = state_25595__$1;
(statearr_25627_25658[(1)] = (17));

} else {
var statearr_25628_25659 = state_25595__$1;
(statearr_25628_25659[(1)] = (18));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_25596 === (16))){
var inst_25579 = (state_25595[(2)]);
var state_25595__$1 = state_25595;
var statearr_25629_25660 = state_25595__$1;
(statearr_25629_25660[(2)] = inst_25579);

(statearr_25629_25660[(1)] = (12));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25596 === (10))){
var inst_25550 = (state_25595[(8)]);
var inst_25548 = (state_25595[(11)]);
var inst_25555 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25548,inst_25550);
var state_25595__$1 = state_25595;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25595__$1,(13),out,inst_25555);
} else {
if((state_val_25596 === (18))){
var inst_25561 = (state_25595[(7)]);
var inst_25570 = cljs.core.first(inst_25561);
var state_25595__$1 = state_25595;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25595__$1,(20),out,inst_25570);
} else {
if((state_val_25596 === (8))){
var inst_25550 = (state_25595[(8)]);
var inst_25549 = (state_25595[(9)]);
var inst_25552 = (inst_25550 < inst_25549);
var inst_25553 = inst_25552;
var state_25595__$1 = state_25595;
if(cljs.core.truth_(inst_25553)){
var statearr_25630_25661 = state_25595__$1;
(statearr_25630_25661[(1)] = (10));

} else {
var statearr_25631_25662 = state_25595__$1;
(statearr_25631_25662[(1)] = (11));

}

return cljs.core.constant$keyword$40;
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
});})(c__11389__auto__))
;
return ((function (switch__11309__auto__,c__11389__auto__){
return (function() {
var state_machine__11310__auto__ = null;
var state_machine__11310__auto____0 = (function (){
var statearr_25635 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25635[(0)] = state_machine__11310__auto__);

(statearr_25635[(1)] = (1));

return statearr_25635;
});
var state_machine__11310__auto____1 = (function (state_25595){
while(true){
var ret_value__11311__auto__ = (function (){try{while(true){
var result__11312__auto__ = switch__11309__auto__(state_25595);
if(cljs.core.keyword_identical_QMARK_(result__11312__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11312__auto__;
}
break;
}
}catch (e25636){if((e25636 instanceof Object)){
var ex__11313__auto__ = e25636;
var statearr_25637_25663 = state_25595;
(statearr_25637_25663[(5)] = ex__11313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25595);

return cljs.core.constant$keyword$40;
} else {
throw e25636;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11311__auto__,cljs.core.constant$keyword$40)){
var G__25664 = state_25595;
state_25595 = G__25664;
continue;
} else {
return ret_value__11311__auto__;
}
break;
}
});
state_machine__11310__auto__ = function(state_25595){
switch(arguments.length){
case 0:
return state_machine__11310__auto____0.call(this);
case 1:
return state_machine__11310__auto____1.call(this,state_25595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11310__auto____0;
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11310__auto____1;
return state_machine__11310__auto__;
})()
;})(switch__11309__auto__,c__11389__auto__))
})();
var state__11391__auto__ = (function (){var statearr_25638 = (function (){return (f__11390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11390__auto__.cljs$core$IFn$_invoke$arity$0() : f__11390__auto__.call(null));
})();
(statearr_25638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11389__auto__);

return statearr_25638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11391__auto__);
});})(c__11389__auto__))
);

return c__11389__auto__;
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
var c__11389__auto___25769 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11389__auto___25769,out){
return (function (){
var f__11390__auto__ = (function (){var switch__11309__auto__ = ((function (c__11389__auto___25769,out){
return (function (state_25744){
var state_val_25745 = (state_25744[(1)]);
if((state_val_25745 === (7))){
var inst_25739 = (state_25744[(2)]);
var state_25744__$1 = state_25744;
var statearr_25746_25770 = state_25744__$1;
(statearr_25746_25770[(2)] = inst_25739);

(statearr_25746_25770[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25745 === (1))){
var inst_25721 = null;
var state_25744__$1 = (function (){var statearr_25747 = state_25744;
(statearr_25747[(7)] = inst_25721);

return statearr_25747;
})();
var statearr_25748_25771 = state_25744__$1;
(statearr_25748_25771[(2)] = null);

(statearr_25748_25771[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25745 === (4))){
var inst_25724 = (state_25744[(8)]);
var inst_25724__$1 = (state_25744[(2)]);
var inst_25725 = (inst_25724__$1 == null);
var inst_25726 = cljs.core.not(inst_25725);
var state_25744__$1 = (function (){var statearr_25749 = state_25744;
(statearr_25749[(8)] = inst_25724__$1);

return statearr_25749;
})();
if(inst_25726){
var statearr_25750_25772 = state_25744__$1;
(statearr_25750_25772[(1)] = (5));

} else {
var statearr_25751_25773 = state_25744__$1;
(statearr_25751_25773[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_25745 === (6))){
var state_25744__$1 = state_25744;
var statearr_25752_25774 = state_25744__$1;
(statearr_25752_25774[(2)] = null);

(statearr_25752_25774[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25745 === (3))){
var inst_25741 = (state_25744[(2)]);
var inst_25742 = cljs.core.async.close_BANG_(out);
var state_25744__$1 = (function (){var statearr_25753 = state_25744;
(statearr_25753[(9)] = inst_25741);

return statearr_25753;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25744__$1,inst_25742);
} else {
if((state_val_25745 === (2))){
var state_25744__$1 = state_25744;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25744__$1,(4),ch);
} else {
if((state_val_25745 === (11))){
var inst_25724 = (state_25744[(8)]);
var inst_25733 = (state_25744[(2)]);
var inst_25721 = inst_25724;
var state_25744__$1 = (function (){var statearr_25754 = state_25744;
(statearr_25754[(7)] = inst_25721);

(statearr_25754[(10)] = inst_25733);

return statearr_25754;
})();
var statearr_25755_25775 = state_25744__$1;
(statearr_25755_25775[(2)] = null);

(statearr_25755_25775[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25745 === (9))){
var inst_25724 = (state_25744[(8)]);
var state_25744__$1 = state_25744;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25744__$1,(11),out,inst_25724);
} else {
if((state_val_25745 === (5))){
var inst_25724 = (state_25744[(8)]);
var inst_25721 = (state_25744[(7)]);
var inst_25728 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25724,inst_25721);
var state_25744__$1 = state_25744;
if(inst_25728){
var statearr_25757_25776 = state_25744__$1;
(statearr_25757_25776[(1)] = (8));

} else {
var statearr_25758_25777 = state_25744__$1;
(statearr_25758_25777[(1)] = (9));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_25745 === (10))){
var inst_25736 = (state_25744[(2)]);
var state_25744__$1 = state_25744;
var statearr_25759_25778 = state_25744__$1;
(statearr_25759_25778[(2)] = inst_25736);

(statearr_25759_25778[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25745 === (8))){
var inst_25721 = (state_25744[(7)]);
var tmp25756 = inst_25721;
var inst_25721__$1 = tmp25756;
var state_25744__$1 = (function (){var statearr_25760 = state_25744;
(statearr_25760[(7)] = inst_25721__$1);

return statearr_25760;
})();
var statearr_25761_25779 = state_25744__$1;
(statearr_25761_25779[(2)] = null);

(statearr_25761_25779[(1)] = (2));


return cljs.core.constant$keyword$40;
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
});})(c__11389__auto___25769,out))
;
return ((function (switch__11309__auto__,c__11389__auto___25769,out){
return (function() {
var state_machine__11310__auto__ = null;
var state_machine__11310__auto____0 = (function (){
var statearr_25765 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25765[(0)] = state_machine__11310__auto__);

(statearr_25765[(1)] = (1));

return statearr_25765;
});
var state_machine__11310__auto____1 = (function (state_25744){
while(true){
var ret_value__11311__auto__ = (function (){try{while(true){
var result__11312__auto__ = switch__11309__auto__(state_25744);
if(cljs.core.keyword_identical_QMARK_(result__11312__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11312__auto__;
}
break;
}
}catch (e25766){if((e25766 instanceof Object)){
var ex__11313__auto__ = e25766;
var statearr_25767_25780 = state_25744;
(statearr_25767_25780[(5)] = ex__11313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25744);

return cljs.core.constant$keyword$40;
} else {
throw e25766;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11311__auto__,cljs.core.constant$keyword$40)){
var G__25781 = state_25744;
state_25744 = G__25781;
continue;
} else {
return ret_value__11311__auto__;
}
break;
}
});
state_machine__11310__auto__ = function(state_25744){
switch(arguments.length){
case 0:
return state_machine__11310__auto____0.call(this);
case 1:
return state_machine__11310__auto____1.call(this,state_25744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11310__auto____0;
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11310__auto____1;
return state_machine__11310__auto__;
})()
;})(switch__11309__auto__,c__11389__auto___25769,out))
})();
var state__11391__auto__ = (function (){var statearr_25768 = (function (){return (f__11390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11390__auto__.cljs$core$IFn$_invoke$arity$0() : f__11390__auto__.call(null));
})();
(statearr_25768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11389__auto___25769);

return statearr_25768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11391__auto__);
});})(c__11389__auto___25769,out))
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
var c__11389__auto___25919 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11389__auto___25919,out){
return (function (){
var f__11390__auto__ = (function (){var switch__11309__auto__ = ((function (c__11389__auto___25919,out){
return (function (state_25889){
var state_val_25890 = (state_25889[(1)]);
if((state_val_25890 === (7))){
var inst_25885 = (state_25889[(2)]);
var state_25889__$1 = state_25889;
var statearr_25891_25920 = state_25889__$1;
(statearr_25891_25920[(2)] = inst_25885);

(statearr_25891_25920[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25890 === (1))){
var inst_25852 = (new Array(n));
var inst_25853 = inst_25852;
var inst_25854 = (0);
var state_25889__$1 = (function (){var statearr_25892 = state_25889;
(statearr_25892[(7)] = inst_25853);

(statearr_25892[(8)] = inst_25854);

return statearr_25892;
})();
var statearr_25893_25921 = state_25889__$1;
(statearr_25893_25921[(2)] = null);

(statearr_25893_25921[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25890 === (4))){
var inst_25857 = (state_25889[(9)]);
var inst_25857__$1 = (state_25889[(2)]);
var inst_25858 = (inst_25857__$1 == null);
var inst_25859 = cljs.core.not(inst_25858);
var state_25889__$1 = (function (){var statearr_25894 = state_25889;
(statearr_25894[(9)] = inst_25857__$1);

return statearr_25894;
})();
if(inst_25859){
var statearr_25895_25922 = state_25889__$1;
(statearr_25895_25922[(1)] = (5));

} else {
var statearr_25896_25923 = state_25889__$1;
(statearr_25896_25923[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_25890 === (15))){
var inst_25879 = (state_25889[(2)]);
var state_25889__$1 = state_25889;
var statearr_25897_25924 = state_25889__$1;
(statearr_25897_25924[(2)] = inst_25879);

(statearr_25897_25924[(1)] = (14));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25890 === (13))){
var state_25889__$1 = state_25889;
var statearr_25898_25925 = state_25889__$1;
(statearr_25898_25925[(2)] = null);

(statearr_25898_25925[(1)] = (14));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25890 === (6))){
var inst_25854 = (state_25889[(8)]);
var inst_25875 = (inst_25854 > (0));
var state_25889__$1 = state_25889;
if(cljs.core.truth_(inst_25875)){
var statearr_25899_25926 = state_25889__$1;
(statearr_25899_25926[(1)] = (12));

} else {
var statearr_25900_25927 = state_25889__$1;
(statearr_25900_25927[(1)] = (13));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_25890 === (3))){
var inst_25887 = (state_25889[(2)]);
var state_25889__$1 = state_25889;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25889__$1,inst_25887);
} else {
if((state_val_25890 === (12))){
var inst_25853 = (state_25889[(7)]);
var inst_25877 = cljs.core.vec(inst_25853);
var state_25889__$1 = state_25889;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25889__$1,(15),out,inst_25877);
} else {
if((state_val_25890 === (2))){
var state_25889__$1 = state_25889;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25889__$1,(4),ch);
} else {
if((state_val_25890 === (11))){
var inst_25869 = (state_25889[(2)]);
var inst_25870 = (new Array(n));
var inst_25853 = inst_25870;
var inst_25854 = (0);
var state_25889__$1 = (function (){var statearr_25901 = state_25889;
(statearr_25901[(7)] = inst_25853);

(statearr_25901[(10)] = inst_25869);

(statearr_25901[(8)] = inst_25854);

return statearr_25901;
})();
var statearr_25902_25928 = state_25889__$1;
(statearr_25902_25928[(2)] = null);

(statearr_25902_25928[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25890 === (9))){
var inst_25853 = (state_25889[(7)]);
var inst_25867 = cljs.core.vec(inst_25853);
var state_25889__$1 = state_25889;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25889__$1,(11),out,inst_25867);
} else {
if((state_val_25890 === (5))){
var inst_25853 = (state_25889[(7)]);
var inst_25857 = (state_25889[(9)]);
var inst_25862 = (state_25889[(11)]);
var inst_25854 = (state_25889[(8)]);
var inst_25861 = (inst_25853[inst_25854] = inst_25857);
var inst_25862__$1 = (inst_25854 + (1));
var inst_25863 = (inst_25862__$1 < n);
var state_25889__$1 = (function (){var statearr_25903 = state_25889;
(statearr_25903[(12)] = inst_25861);

(statearr_25903[(11)] = inst_25862__$1);

return statearr_25903;
})();
if(cljs.core.truth_(inst_25863)){
var statearr_25904_25929 = state_25889__$1;
(statearr_25904_25929[(1)] = (8));

} else {
var statearr_25905_25930 = state_25889__$1;
(statearr_25905_25930[(1)] = (9));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_25890 === (14))){
var inst_25882 = (state_25889[(2)]);
var inst_25883 = cljs.core.async.close_BANG_(out);
var state_25889__$1 = (function (){var statearr_25907 = state_25889;
(statearr_25907[(13)] = inst_25882);

return statearr_25907;
})();
var statearr_25908_25931 = state_25889__$1;
(statearr_25908_25931[(2)] = inst_25883);

(statearr_25908_25931[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25890 === (10))){
var inst_25873 = (state_25889[(2)]);
var state_25889__$1 = state_25889;
var statearr_25909_25932 = state_25889__$1;
(statearr_25909_25932[(2)] = inst_25873);

(statearr_25909_25932[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_25890 === (8))){
var inst_25853 = (state_25889[(7)]);
var inst_25862 = (state_25889[(11)]);
var tmp25906 = inst_25853;
var inst_25853__$1 = tmp25906;
var inst_25854 = inst_25862;
var state_25889__$1 = (function (){var statearr_25910 = state_25889;
(statearr_25910[(7)] = inst_25853__$1);

(statearr_25910[(8)] = inst_25854);

return statearr_25910;
})();
var statearr_25911_25933 = state_25889__$1;
(statearr_25911_25933[(2)] = null);

(statearr_25911_25933[(1)] = (2));


return cljs.core.constant$keyword$40;
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
});})(c__11389__auto___25919,out))
;
return ((function (switch__11309__auto__,c__11389__auto___25919,out){
return (function() {
var state_machine__11310__auto__ = null;
var state_machine__11310__auto____0 = (function (){
var statearr_25915 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25915[(0)] = state_machine__11310__auto__);

(statearr_25915[(1)] = (1));

return statearr_25915;
});
var state_machine__11310__auto____1 = (function (state_25889){
while(true){
var ret_value__11311__auto__ = (function (){try{while(true){
var result__11312__auto__ = switch__11309__auto__(state_25889);
if(cljs.core.keyword_identical_QMARK_(result__11312__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11312__auto__;
}
break;
}
}catch (e25916){if((e25916 instanceof Object)){
var ex__11313__auto__ = e25916;
var statearr_25917_25934 = state_25889;
(statearr_25917_25934[(5)] = ex__11313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25889);

return cljs.core.constant$keyword$40;
} else {
throw e25916;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11311__auto__,cljs.core.constant$keyword$40)){
var G__25935 = state_25889;
state_25889 = G__25935;
continue;
} else {
return ret_value__11311__auto__;
}
break;
}
});
state_machine__11310__auto__ = function(state_25889){
switch(arguments.length){
case 0:
return state_machine__11310__auto____0.call(this);
case 1:
return state_machine__11310__auto____1.call(this,state_25889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11310__auto____0;
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11310__auto____1;
return state_machine__11310__auto__;
})()
;})(switch__11309__auto__,c__11389__auto___25919,out))
})();
var state__11391__auto__ = (function (){var statearr_25918 = (function (){return (f__11390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11390__auto__.cljs$core$IFn$_invoke$arity$0() : f__11390__auto__.call(null));
})();
(statearr_25918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11389__auto___25919);

return statearr_25918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11391__auto__);
});})(c__11389__auto___25919,out))
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
var c__11389__auto___26083 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11389__auto___26083,out){
return (function (){
var f__11390__auto__ = (function (){var switch__11309__auto__ = ((function (c__11389__auto___26083,out){
return (function (state_26052){
var state_val_26053 = (state_26052[(1)]);
if((state_val_26053 === (7))){
var inst_26048 = (state_26052[(2)]);
var state_26052__$1 = state_26052;
var statearr_26054_26084 = state_26052__$1;
(statearr_26054_26084[(2)] = inst_26048);

(statearr_26054_26084[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_26053 === (1))){
var inst_26011 = [];
var inst_26012 = inst_26011;
var inst_26013 = cljs.core.constant$keyword$55;
var state_26052__$1 = (function (){var statearr_26055 = state_26052;
(statearr_26055[(7)] = inst_26013);

(statearr_26055[(8)] = inst_26012);

return statearr_26055;
})();
var statearr_26056_26085 = state_26052__$1;
(statearr_26056_26085[(2)] = null);

(statearr_26056_26085[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_26053 === (4))){
var inst_26016 = (state_26052[(9)]);
var inst_26016__$1 = (state_26052[(2)]);
var inst_26017 = (inst_26016__$1 == null);
var inst_26018 = cljs.core.not(inst_26017);
var state_26052__$1 = (function (){var statearr_26057 = state_26052;
(statearr_26057[(9)] = inst_26016__$1);

return statearr_26057;
})();
if(inst_26018){
var statearr_26058_26086 = state_26052__$1;
(statearr_26058_26086[(1)] = (5));

} else {
var statearr_26059_26087 = state_26052__$1;
(statearr_26059_26087[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_26053 === (15))){
var inst_26042 = (state_26052[(2)]);
var state_26052__$1 = state_26052;
var statearr_26060_26088 = state_26052__$1;
(statearr_26060_26088[(2)] = inst_26042);

(statearr_26060_26088[(1)] = (14));


return cljs.core.constant$keyword$40;
} else {
if((state_val_26053 === (13))){
var state_26052__$1 = state_26052;
var statearr_26061_26089 = state_26052__$1;
(statearr_26061_26089[(2)] = null);

(statearr_26061_26089[(1)] = (14));


return cljs.core.constant$keyword$40;
} else {
if((state_val_26053 === (6))){
var inst_26012 = (state_26052[(8)]);
var inst_26037 = inst_26012.length;
var inst_26038 = (inst_26037 > (0));
var state_26052__$1 = state_26052;
if(cljs.core.truth_(inst_26038)){
var statearr_26062_26090 = state_26052__$1;
(statearr_26062_26090[(1)] = (12));

} else {
var statearr_26063_26091 = state_26052__$1;
(statearr_26063_26091[(1)] = (13));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_26053 === (3))){
var inst_26050 = (state_26052[(2)]);
var state_26052__$1 = state_26052;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26052__$1,inst_26050);
} else {
if((state_val_26053 === (12))){
var inst_26012 = (state_26052[(8)]);
var inst_26040 = cljs.core.vec(inst_26012);
var state_26052__$1 = state_26052;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26052__$1,(15),out,inst_26040);
} else {
if((state_val_26053 === (2))){
var state_26052__$1 = state_26052;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26052__$1,(4),ch);
} else {
if((state_val_26053 === (11))){
var inst_26020 = (state_26052[(10)]);
var inst_26016 = (state_26052[(9)]);
var inst_26030 = (state_26052[(2)]);
var inst_26031 = [];
var inst_26032 = inst_26031.push(inst_26016);
var inst_26012 = inst_26031;
var inst_26013 = inst_26020;
var state_26052__$1 = (function (){var statearr_26064 = state_26052;
(statearr_26064[(7)] = inst_26013);

(statearr_26064[(11)] = inst_26030);

(statearr_26064[(8)] = inst_26012);

(statearr_26064[(12)] = inst_26032);

return statearr_26064;
})();
var statearr_26065_26092 = state_26052__$1;
(statearr_26065_26092[(2)] = null);

(statearr_26065_26092[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_26053 === (9))){
var inst_26012 = (state_26052[(8)]);
var inst_26028 = cljs.core.vec(inst_26012);
var state_26052__$1 = state_26052;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26052__$1,(11),out,inst_26028);
} else {
if((state_val_26053 === (5))){
var inst_26013 = (state_26052[(7)]);
var inst_26020 = (state_26052[(10)]);
var inst_26016 = (state_26052[(9)]);
var inst_26020__$1 = (function (){var G__26066 = inst_26016;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26066) : f.call(null,G__26066));
})();
var inst_26021 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26020__$1,inst_26013);
var inst_26022 = cljs.core.keyword_identical_QMARK_(inst_26013,cljs.core.constant$keyword$55);
var inst_26023 = (inst_26021) || (inst_26022);
var state_26052__$1 = (function (){var statearr_26067 = state_26052;
(statearr_26067[(10)] = inst_26020__$1);

return statearr_26067;
})();
if(cljs.core.truth_(inst_26023)){
var statearr_26068_26093 = state_26052__$1;
(statearr_26068_26093[(1)] = (8));

} else {
var statearr_26069_26094 = state_26052__$1;
(statearr_26069_26094[(1)] = (9));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_26053 === (14))){
var inst_26045 = (state_26052[(2)]);
var inst_26046 = cljs.core.async.close_BANG_(out);
var state_26052__$1 = (function (){var statearr_26071 = state_26052;
(statearr_26071[(13)] = inst_26045);

return statearr_26071;
})();
var statearr_26072_26095 = state_26052__$1;
(statearr_26072_26095[(2)] = inst_26046);

(statearr_26072_26095[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_26053 === (10))){
var inst_26035 = (state_26052[(2)]);
var state_26052__$1 = state_26052;
var statearr_26073_26096 = state_26052__$1;
(statearr_26073_26096[(2)] = inst_26035);

(statearr_26073_26096[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_26053 === (8))){
var inst_26020 = (state_26052[(10)]);
var inst_26012 = (state_26052[(8)]);
var inst_26016 = (state_26052[(9)]);
var inst_26025 = inst_26012.push(inst_26016);
var tmp26070 = inst_26012;
var inst_26012__$1 = tmp26070;
var inst_26013 = inst_26020;
var state_26052__$1 = (function (){var statearr_26074 = state_26052;
(statearr_26074[(14)] = inst_26025);

(statearr_26074[(7)] = inst_26013);

(statearr_26074[(8)] = inst_26012__$1);

return statearr_26074;
})();
var statearr_26075_26097 = state_26052__$1;
(statearr_26075_26097[(2)] = null);

(statearr_26075_26097[(1)] = (2));


return cljs.core.constant$keyword$40;
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
});})(c__11389__auto___26083,out))
;
return ((function (switch__11309__auto__,c__11389__auto___26083,out){
return (function() {
var state_machine__11310__auto__ = null;
var state_machine__11310__auto____0 = (function (){
var statearr_26079 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26079[(0)] = state_machine__11310__auto__);

(statearr_26079[(1)] = (1));

return statearr_26079;
});
var state_machine__11310__auto____1 = (function (state_26052){
while(true){
var ret_value__11311__auto__ = (function (){try{while(true){
var result__11312__auto__ = switch__11309__auto__(state_26052);
if(cljs.core.keyword_identical_QMARK_(result__11312__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11312__auto__;
}
break;
}
}catch (e26080){if((e26080 instanceof Object)){
var ex__11313__auto__ = e26080;
var statearr_26081_26098 = state_26052;
(statearr_26081_26098[(5)] = ex__11313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26052);

return cljs.core.constant$keyword$40;
} else {
throw e26080;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11311__auto__,cljs.core.constant$keyword$40)){
var G__26099 = state_26052;
state_26052 = G__26099;
continue;
} else {
return ret_value__11311__auto__;
}
break;
}
});
state_machine__11310__auto__ = function(state_26052){
switch(arguments.length){
case 0:
return state_machine__11310__auto____0.call(this);
case 1:
return state_machine__11310__auto____1.call(this,state_26052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11310__auto____0;
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11310__auto____1;
return state_machine__11310__auto__;
})()
;})(switch__11309__auto__,c__11389__auto___26083,out))
})();
var state__11391__auto__ = (function (){var statearr_26082 = (function (){return (f__11390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11390__auto__.cljs$core$IFn$_invoke$arity$0() : f__11390__auto__.call(null));
})();
(statearr_26082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11389__auto___26083);

return statearr_26082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11391__auto__);
});})(c__11389__auto___26083,out))
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
