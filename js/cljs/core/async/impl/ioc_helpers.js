// Compiled by ClojureScript 0.0-2511
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){
return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){
return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$43);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.impl.ioc_helpers.t25977 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t25977 = (function (f,fn_handler,meta25978){
this.f = f;
this.fn_handler = fn_handler;
this.meta25978 = meta25978;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t25977.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.impl.ioc_helpers.t25977.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t25977.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t25977.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25979){
var self__ = this;
var _25979__$1 = this;
return self__.meta25978;
});

cljs.core.async.impl.ioc_helpers.t25977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25979,meta25978__$1){
var self__ = this;
var _25979__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t25977(self__.f,self__.fn_handler,meta25978__$1));
});

cljs.core.async.impl.ioc_helpers.t25977.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t25977.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t25977";

cljs.core.async.impl.ioc_helpers.t25977.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core.async.impl.ioc-helpers/t25977");
});

cljs.core.async.impl.ioc_helpers.__GT_t25977 = (function __GT_t25977(f__$1,fn_handler__$1,meta25978){
return (new cljs.core.async.impl.ioc_helpers.t25977(f__$1,fn_handler__$1,meta25978));
});

}

return (new cljs.core.async.impl.ioc_helpers.t25977(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,19,cljs.core.constant$keyword$9,30,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,27,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async/impl/ioc_helpers.cljs"], null)));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){
return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e25981){if((e25981 instanceof Object)){
var ex = e25981;
cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e25981;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_25985_25988 = state;
(statearr_25985_25988[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);

(statearr_25985_25988[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_25986_25989 = state;
(statearr_25986_25989[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__25987 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25987) : cljs.core.deref.call(null,G__25987));
})());

(statearr_25986_25989[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$44;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){
var statearr_25993_25996 = state;
(statearr_25993_25996[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);

(statearr_25993_25996[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_25994_25997 = state;
(statearr_25994_25997[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__25995 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25995) : cljs.core.deref.call(null,G__25995));
})());

(statearr_25994_25997[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$44;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){
var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);
if((value == null)){
} else {
c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler(((function (c){
return (function (){
return null;
});})(c))
));
}

c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap,__hash){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4233__auto__,k__4234__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4233__auto____$1,k__4234__auto__,null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4235__auto__,k25999,else__4236__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
var G__26001 = (((k25999 instanceof cljs.core.Keyword))?k25999.fqn:null);
switch (G__26001) {
case "prev":
return self__.prev;

break;
case "continue-block":
return self__.continue_block;

break;
case "finally-block":
return self__.finally_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "catch-block":
return self__.catch_block;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25999,else__4236__auto__);

}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4247__auto__,writer__4248__auto__,opts__4249__auto__){
var self__ = this;
var this__4247__auto____$1 = this;
var pr_pair__4250__auto__ = ((function (this__4247__auto____$1){
return (function (keyval__4251__auto__){
return cljs.core.pr_sequential_writer(writer__4248__auto__,cljs.core.pr_writer,""," ","",opts__4249__auto__,keyval__4251__auto__);
});})(this__4247__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4248__auto__,pr_pair__4250__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4249__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$45,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$46,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$47,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$48,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$49,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4231__auto__){
var self__ = this;
var this__4231__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4227__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4237__auto__){
var self__ = this;
var this__4237__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4228__auto__){
var self__ = this;
var this__4228__auto____$1 = this;
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_imap(this__4228__auto____$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4229__auto__,other__4230__auto__){
var self__ = this;
var this__4229__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3618__auto__ = other__4230__auto__;
if(cljs.core.truth_(and__3618__auto__)){
return ((this__4229__auto____$1.constructor === other__4230__auto__.constructor)) && (cljs.core.equiv_map(this__4229__auto____$1,other__4230__auto__));
} else {
return and__3618__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4242__auto__,k__4243__auto__){
var self__ = this;
var this__4242__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$47,null,cljs.core.constant$keyword$45,null,cljs.core.constant$keyword$46,null,cljs.core.constant$keyword$49,null,cljs.core.constant$keyword$48,null], null), null),k__4243__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4242__auto____$1),self__.__meta),k__4243__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4243__auto__)),null));
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4240__auto__,k__4241__auto__,G__25998){
var self__ = this;
var this__4240__auto____$1 = this;
var pred__26002 = cljs.core.keyword_identical_QMARK_;
var expr__26003 = k__4241__auto__;
if(cljs.core.truth_((function (){var G__26005 = cljs.core.constant$keyword$45;
var G__26006 = expr__26003;
return (pred__26002.cljs$core$IFn$_invoke$arity$2 ? pred__26002.cljs$core$IFn$_invoke$arity$2(G__26005,G__26006) : pred__26002.call(null,G__26005,G__26006));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__25998,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26007 = cljs.core.constant$keyword$46;
var G__26008 = expr__26003;
return (pred__26002.cljs$core$IFn$_invoke$arity$2 ? pred__26002.cljs$core$IFn$_invoke$arity$2(G__26007,G__26008) : pred__26002.call(null,G__26007,G__26008));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__25998,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26009 = cljs.core.constant$keyword$47;
var G__26010 = expr__26003;
return (pred__26002.cljs$core$IFn$_invoke$arity$2 ? pred__26002.cljs$core$IFn$_invoke$arity$2(G__26009,G__26010) : pred__26002.call(null,G__26009,G__26010));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__25998,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26011 = cljs.core.constant$keyword$48;
var G__26012 = expr__26003;
return (pred__26002.cljs$core$IFn$_invoke$arity$2 ? pred__26002.cljs$core$IFn$_invoke$arity$2(G__26011,G__26012) : pred__26002.call(null,G__26011,G__26012));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__25998,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26013 = cljs.core.constant$keyword$49;
var G__26014 = expr__26003;
return (pred__26002.cljs$core$IFn$_invoke$arity$2 ? pred__26002.cljs$core$IFn$_invoke$arity$2(G__26013,G__26014) : pred__26002.call(null,G__26013,G__26014));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__25998,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4241__auto__,G__25998),null));
}
}
}
}
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4245__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$45,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$46,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$47,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$48,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$49,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4232__auto__,G__25998){
var self__ = this;
var this__4232__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__25998,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4238__auto__,entry__4239__auto__){
var self__ = this;
var this__4238__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4239__auto__)){
return cljs.core._assoc(this__4238__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4239__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4239__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4238__auto____$1,entry__4239__auto__);
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__4267__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__4267__auto__,writer__4268__auto__){
return cljs.core._write(writer__4268__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev,null,null,null));
});

cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__26000){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(G__26000),cljs.core.constant$keyword$46.cljs$core$IFn$_invoke$arity$1(G__26000),cljs.core.constant$keyword$47.cljs$core$IFn$_invoke$arity$1(G__26000),cljs.core.constant$keyword$48.cljs$core$IFn$_invoke$arity$1(G__26000),cljs.core.constant$keyword$49.cljs$core$IFn$_invoke$arity$1(G__26000),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26000,cljs.core.constant$keyword$45,cljs.core.array_seq([cljs.core.constant$keyword$46,cljs.core.constant$keyword$47,cljs.core.constant$keyword$48,cljs.core.constant$keyword$49], 0)),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_26017 = state;
(statearr_26017[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));

return statearr_26017;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);
var catch_block = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = cljs.core.constant$keyword$46.cljs$core$IFn$_invoke$arity$1(exception_frame);
var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);
if(cljs.core.truth_((function (){var and__3618__auto__ = exception;
if(cljs.core.truth_(and__3618__auto__)){
return cljs.core.not(exception_frame);
} else {
return and__3618__auto__;
}
})())){
throw exception;
} else {
if(cljs.core.truth_((function (){var and__3618__auto__ = exception;
if(cljs.core.truth_(and__3618__auto__)){
var and__3618__auto____$1 = catch_block;
if(cljs.core.truth_(and__3618__auto____$1)){
return (exception instanceof catch_exception);
} else {
return and__3618__auto____$1;
}
} else {
return and__3618__auto__;
}
})())){
var statearr_26023 = state;
(statearr_26023[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);

(statearr_26023[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);

(statearr_26023[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);

(statearr_26023[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$45,null,cljs.core.array_seq([cljs.core.constant$keyword$46,null], 0)));

return statearr_26023;
} else {
if(cljs.core.truth_((function (){var and__3618__auto__ = exception;
if(cljs.core.truth_(and__3618__auto__)){
return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$47.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else {
return and__3618__auto__;
}
})())){
var statearr_26024_26028 = state;
(statearr_26024_26028[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$49.cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__26029 = state;
state = G__26029;
continue;
} else {
if(cljs.core.truth_((function (){var and__3618__auto__ = exception;
if(cljs.core.truth_(and__3618__auto__)){
var and__3618__auto____$1 = cljs.core.not(catch_block);
if(and__3618__auto____$1){
return cljs.core.constant$keyword$47.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__3618__auto____$1;
}
} else {
return and__3618__auto__;
}
})())){
var statearr_26025 = state;
(statearr_26025[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$47.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_26025[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$47,null));

return statearr_26025;
} else {
if(cljs.core.truth_((function (){var and__3618__auto__ = cljs.core.not(exception);
if(and__3618__auto__){
return cljs.core.constant$keyword$47.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__3618__auto__;
}
})())){
var statearr_26026 = state;
(statearr_26026[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$47.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_26026[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$47,null));

return statearr_26026;
} else {
if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$47.cljs$core$IFn$_invoke$arity$1(exception_frame)))){
var statearr_26027 = state;
(statearr_26027[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$48.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_26027[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$49.cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_26027;
} else {
throw (new Error("No matching clause"));

}
}
}
}
}
}
break;
}
});
