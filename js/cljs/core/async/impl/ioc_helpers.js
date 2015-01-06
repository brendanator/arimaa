// Compiled by ClojureScript 0.0-2657 {}
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
return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$64);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.impl.ioc_helpers.t26961 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t26961 = (function (f,fn_handler,meta26962){
this.f = f;
this.fn_handler = fn_handler;
this.meta26962 = meta26962;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t26961.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.impl.ioc_helpers.t26961.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t26961.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t26961.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26963){
var self__ = this;
var _26963__$1 = this;
return self__.meta26962;
});

cljs.core.async.impl.ioc_helpers.t26961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26963,meta26962__$1){
var self__ = this;
var _26963__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t26961(self__.f,self__.fn_handler,meta26962__$1));
});

cljs.core.async.impl.ioc_helpers.t26961.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t26961.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t26961";

cljs.core.async.impl.ioc_helpers.t26961.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core.async.impl.ioc-helpers/t26961");
});

cljs.core.async.impl.ioc_helpers.__GT_t26961 = (function __GT_t26961(f__$1,fn_handler__$1,meta26962){
return (new cljs.core.async.impl.ioc_helpers.t26961(f__$1,fn_handler__$1,meta26962));
});

}

return (new cljs.core.async.impl.ioc_helpers.t26961(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,19,cljs.core.constant$keyword$9,30,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,27,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async/impl/ioc_helpers.cljs"], null)));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){
return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e26965){if((e26965 instanceof Object)){
var ex = e26965;
cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e26965;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_26969_26972 = state;
(statearr_26969_26972[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);

(statearr_26969_26972[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_26970_26973 = state;
(statearr_26970_26973[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__26971 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26971) : cljs.core.deref.call(null,G__26971));
})());

(statearr_26970_26973[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$65;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){
var statearr_26977_26980 = state;
(statearr_26977_26980[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);

(statearr_26977_26980[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_26978_26981 = state;
(statearr_26978_26981[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__26979 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26979) : cljs.core.deref.call(null,G__26979));
})());

(statearr_26978_26981[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$65;
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4334__auto__,k__4335__auto__){
var self__ = this;
var this__4334__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4334__auto____$1,k__4335__auto__,null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4336__auto__,k26983,else__4337__auto__){
var self__ = this;
var this__4336__auto____$1 = this;
var G__26985 = (((k26983 instanceof cljs.core.Keyword))?k26983.fqn:null);
switch (G__26985) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26983,else__4337__auto__);

}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4348__auto__,writer__4349__auto__,opts__4350__auto__){
var self__ = this;
var this__4348__auto____$1 = this;
var pr_pair__4351__auto__ = ((function (this__4348__auto____$1){
return (function (keyval__4352__auto__){
return cljs.core.pr_sequential_writer(writer__4349__auto__,cljs.core.pr_writer,""," ","",opts__4350__auto__,keyval__4352__auto__);
});})(this__4348__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4349__auto__,pr_pair__4351__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4350__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$66,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$67,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$68,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$69,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$70,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4332__auto__){
var self__ = this;
var this__4332__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4328__auto__){
var self__ = this;
var this__4328__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4338__auto__){
var self__ = this;
var this__4338__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4329__auto__){
var self__ = this;
var this__4329__auto____$1 = this;
var h__4152__auto__ = self__.__hash;
if(!((h__4152__auto__ == null))){
return h__4152__auto__;
} else {
var h__4152__auto____$1 = cljs.core.hash_imap(this__4329__auto____$1);
self__.__hash = h__4152__auto____$1;

return h__4152__auto____$1;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4330__auto__,other__4331__auto__){
var self__ = this;
var this__4330__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3719__auto__ = other__4331__auto__;
if(cljs.core.truth_(and__3719__auto__)){
return ((this__4330__auto____$1.constructor === other__4331__auto__.constructor)) && (cljs.core.equiv_map(this__4330__auto____$1,other__4331__auto__));
} else {
return and__3719__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4343__auto__,k__4344__auto__){
var self__ = this;
var this__4343__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$68,null,cljs.core.constant$keyword$66,null,cljs.core.constant$keyword$67,null,cljs.core.constant$keyword$70,null,cljs.core.constant$keyword$69,null], null), null),k__4344__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4343__auto____$1),self__.__meta),k__4344__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4344__auto__)),null));
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4341__auto__,k__4342__auto__,G__26982){
var self__ = this;
var this__4341__auto____$1 = this;
var pred__26986 = cljs.core.keyword_identical_QMARK_;
var expr__26987 = k__4342__auto__;
if(cljs.core.truth_((function (){var G__26989 = cljs.core.constant$keyword$66;
var G__26990 = expr__26987;
return (pred__26986.cljs$core$IFn$_invoke$arity$2 ? pred__26986.cljs$core$IFn$_invoke$arity$2(G__26989,G__26990) : pred__26986.call(null,G__26989,G__26990));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__26982,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26991 = cljs.core.constant$keyword$67;
var G__26992 = expr__26987;
return (pred__26986.cljs$core$IFn$_invoke$arity$2 ? pred__26986.cljs$core$IFn$_invoke$arity$2(G__26991,G__26992) : pred__26986.call(null,G__26991,G__26992));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__26982,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26993 = cljs.core.constant$keyword$68;
var G__26994 = expr__26987;
return (pred__26986.cljs$core$IFn$_invoke$arity$2 ? pred__26986.cljs$core$IFn$_invoke$arity$2(G__26993,G__26994) : pred__26986.call(null,G__26993,G__26994));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__26982,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26995 = cljs.core.constant$keyword$69;
var G__26996 = expr__26987;
return (pred__26986.cljs$core$IFn$_invoke$arity$2 ? pred__26986.cljs$core$IFn$_invoke$arity$2(G__26995,G__26996) : pred__26986.call(null,G__26995,G__26996));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__26982,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26997 = cljs.core.constant$keyword$70;
var G__26998 = expr__26987;
return (pred__26986.cljs$core$IFn$_invoke$arity$2 ? pred__26986.cljs$core$IFn$_invoke$arity$2(G__26997,G__26998) : pred__26986.call(null,G__26997,G__26998));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__26982,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4342__auto__,G__26982),null));
}
}
}
}
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4346__auto__){
var self__ = this;
var this__4346__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$66,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$67,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$68,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$69,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$70,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4333__auto__,G__26982){
var self__ = this;
var this__4333__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__26982,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4339__auto__,entry__4340__auto__){
var self__ = this;
var this__4339__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4340__auto__)){
return cljs.core._assoc(this__4339__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4340__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4340__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4339__auto____$1,entry__4340__auto__);
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__4368__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__4368__auto__,writer__4369__auto__){
return cljs.core._write(writer__4369__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev,null,null,null));
});

cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__26984){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(G__26984),cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(G__26984),cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(G__26984),cljs.core.constant$keyword$69.cljs$core$IFn$_invoke$arity$1(G__26984),cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(G__26984),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26984,cljs.core.constant$keyword$66,cljs.core.array_seq([cljs.core.constant$keyword$67,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69,cljs.core.constant$keyword$70], 0)),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_27001 = state;
(statearr_27001[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));

return statearr_27001;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);
var catch_block = cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(exception_frame);
var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);
if(cljs.core.truth_((function (){var and__3719__auto__ = exception;
if(cljs.core.truth_(and__3719__auto__)){
return cljs.core.not(exception_frame);
} else {
return and__3719__auto__;
}
})())){
throw exception;
} else {
if(cljs.core.truth_((function (){var and__3719__auto__ = exception;
if(cljs.core.truth_(and__3719__auto__)){
var and__3719__auto____$1 = catch_block;
if(cljs.core.truth_(and__3719__auto____$1)){
return (exception instanceof catch_exception);
} else {
return and__3719__auto____$1;
}
} else {
return and__3719__auto__;
}
})())){
var statearr_27007 = state;
(statearr_27007[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);

(statearr_27007[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);

(statearr_27007[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);

(statearr_27007[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$66,null,cljs.core.array_seq([cljs.core.constant$keyword$67,null], 0)));

return statearr_27007;
} else {
if(cljs.core.truth_((function (){var and__3719__auto__ = exception;
if(cljs.core.truth_(and__3719__auto__)){
return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else {
return and__3719__auto__;
}
})())){
var statearr_27008_27012 = state;
(statearr_27008_27012[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__27013 = state;
state = G__27013;
continue;
} else {
if(cljs.core.truth_((function (){var and__3719__auto__ = exception;
if(cljs.core.truth_(and__3719__auto__)){
var and__3719__auto____$1 = cljs.core.not(catch_block);
if(and__3719__auto____$1){
return cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__3719__auto____$1;
}
} else {
return and__3719__auto__;
}
})())){
var statearr_27009 = state;
(statearr_27009[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_27009[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$68,null));

return statearr_27009;
} else {
if(cljs.core.truth_((function (){var and__3719__auto__ = cljs.core.not(exception);
if(and__3719__auto__){
return cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__3719__auto__;
}
})())){
var statearr_27010 = state;
(statearr_27010[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_27010[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$68,null));

return statearr_27010;
} else {
if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(exception_frame)))){
var statearr_27011 = state;
(statearr_27011[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$69.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_27011[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_27011;
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
