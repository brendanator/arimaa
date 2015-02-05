// Compiled by ClojureScript 0.0-2727 {}
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
return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$177);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.impl.ioc_helpers.t28562 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t28562 = (function (f,fn_handler,meta28563){
this.f = f;
this.fn_handler = fn_handler;
this.meta28563 = meta28563;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t28562.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.impl.ioc_helpers.t28562.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t28562.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t28562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28564){
var self__ = this;
var _28564__$1 = this;
return self__.meta28563;
});

cljs.core.async.impl.ioc_helpers.t28562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28564,meta28563__$1){
var self__ = this;
var _28564__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t28562(self__.f,self__.fn_handler,meta28563__$1));
});

cljs.core.async.impl.ioc_helpers.t28562.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t28562.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t28562";

cljs.core.async.impl.ioc_helpers.t28562.cljs$lang$ctorPrWriter = (function (this__4337__auto__,writer__4338__auto__,opt__4339__auto__){
return cljs.core._write(writer__4338__auto__,"cljs.core.async.impl.ioc-helpers/t28562");
});

cljs.core.async.impl.ioc_helpers.__GT_t28562 = (function __GT_t28562(f__$1,fn_handler__$1,meta28563){
return (new cljs.core.async.impl.ioc_helpers.t28562(f__$1,fn_handler__$1,meta28563));
});

}

return (new cljs.core.async.impl.ioc_helpers.t28562(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,19,cljs.core.constant$keyword$9,30,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,27,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async/impl/ioc_helpers.cljs"], null)));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){
return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e28566){if((e28566 instanceof Object)){
var ex = e28566;
cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e28566;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_28570_28573 = state;
(statearr_28570_28573[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);

(statearr_28570_28573[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_28571_28574 = state;
(statearr_28571_28574[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__28572 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28572) : cljs.core.deref.call(null,G__28572));
})());

(statearr_28571_28574[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$127;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){
var statearr_28578_28581 = state;
(statearr_28578_28581[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);

(statearr_28578_28581[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_28579_28582 = state;
(statearr_28579_28582[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__28580 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28580) : cljs.core.deref.call(null,G__28580));
})());

(statearr_28579_28582[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$127;
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4353__auto__,k__4354__auto__){
var self__ = this;
var this__4353__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4353__auto____$1,k__4354__auto__,null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4355__auto__,k28584,else__4356__auto__){
var self__ = this;
var this__4355__auto____$1 = this;
var G__28586 = (((k28584 instanceof cljs.core.Keyword))?k28584.fqn:null);
switch (G__28586) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28584,else__4356__auto__);

}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4367__auto__,writer__4368__auto__,opts__4369__auto__){
var self__ = this;
var this__4367__auto____$1 = this;
var pr_pair__4370__auto__ = ((function (this__4367__auto____$1){
return (function (keyval__4371__auto__){
return cljs.core.pr_sequential_writer(writer__4368__auto__,cljs.core.pr_writer,""," ","",opts__4369__auto__,keyval__4371__auto__);
});})(this__4367__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4368__auto__,pr_pair__4370__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4369__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$178,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$179,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$180,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$181,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$182,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4351__auto__){
var self__ = this;
var this__4351__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4347__auto__){
var self__ = this;
var this__4347__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4357__auto__){
var self__ = this;
var this__4357__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4348__auto__){
var self__ = this;
var this__4348__auto____$1 = this;
var h__4171__auto__ = self__.__hash;
if(!((h__4171__auto__ == null))){
return h__4171__auto__;
} else {
var h__4171__auto____$1 = cljs.core.hash_imap(this__4348__auto____$1);
self__.__hash = h__4171__auto____$1;

return h__4171__auto____$1;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4349__auto__,other__4350__auto__){
var self__ = this;
var this__4349__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3738__auto__ = other__4350__auto__;
if(cljs.core.truth_(and__3738__auto__)){
return ((this__4349__auto____$1.constructor === other__4350__auto__.constructor)) && (cljs.core.equiv_map(this__4349__auto____$1,other__4350__auto__));
} else {
return and__3738__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4362__auto__,k__4363__auto__){
var self__ = this;
var this__4362__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$180,null,cljs.core.constant$keyword$178,null,cljs.core.constant$keyword$179,null,cljs.core.constant$keyword$182,null,cljs.core.constant$keyword$181,null], null), null),k__4363__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4362__auto____$1),self__.__meta),k__4363__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4363__auto__)),null));
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4360__auto__,k__4361__auto__,G__28583){
var self__ = this;
var this__4360__auto____$1 = this;
var pred__28587 = cljs.core.keyword_identical_QMARK_;
var expr__28588 = k__4361__auto__;
if(cljs.core.truth_((function (){var G__28590 = cljs.core.constant$keyword$178;
var G__28591 = expr__28588;
return (pred__28587.cljs$core$IFn$_invoke$arity$2 ? pred__28587.cljs$core$IFn$_invoke$arity$2(G__28590,G__28591) : pred__28587.call(null,G__28590,G__28591));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__28583,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28592 = cljs.core.constant$keyword$179;
var G__28593 = expr__28588;
return (pred__28587.cljs$core$IFn$_invoke$arity$2 ? pred__28587.cljs$core$IFn$_invoke$arity$2(G__28592,G__28593) : pred__28587.call(null,G__28592,G__28593));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__28583,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28594 = cljs.core.constant$keyword$180;
var G__28595 = expr__28588;
return (pred__28587.cljs$core$IFn$_invoke$arity$2 ? pred__28587.cljs$core$IFn$_invoke$arity$2(G__28594,G__28595) : pred__28587.call(null,G__28594,G__28595));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__28583,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28596 = cljs.core.constant$keyword$181;
var G__28597 = expr__28588;
return (pred__28587.cljs$core$IFn$_invoke$arity$2 ? pred__28587.cljs$core$IFn$_invoke$arity$2(G__28596,G__28597) : pred__28587.call(null,G__28596,G__28597));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__28583,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28598 = cljs.core.constant$keyword$182;
var G__28599 = expr__28588;
return (pred__28587.cljs$core$IFn$_invoke$arity$2 ? pred__28587.cljs$core$IFn$_invoke$arity$2(G__28598,G__28599) : pred__28587.call(null,G__28598,G__28599));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__28583,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4361__auto__,G__28583),null));
}
}
}
}
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4365__auto__){
var self__ = this;
var this__4365__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$178,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$179,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$180,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$181,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$182,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4352__auto__,G__28583){
var self__ = this;
var this__4352__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__28583,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4358__auto__,entry__4359__auto__){
var self__ = this;
var this__4358__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4359__auto__)){
return cljs.core._assoc(this__4358__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4359__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4359__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4358__auto____$1,entry__4359__auto__);
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__4387__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__4387__auto__,writer__4388__auto__){
return cljs.core._write(writer__4388__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev,null,null,null));
});

cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__28585){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$178.cljs$core$IFn$_invoke$arity$1(G__28585),cljs.core.constant$keyword$179.cljs$core$IFn$_invoke$arity$1(G__28585),cljs.core.constant$keyword$180.cljs$core$IFn$_invoke$arity$1(G__28585),cljs.core.constant$keyword$181.cljs$core$IFn$_invoke$arity$1(G__28585),cljs.core.constant$keyword$182.cljs$core$IFn$_invoke$arity$1(G__28585),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28585,cljs.core.constant$keyword$178,cljs.core.array_seq([cljs.core.constant$keyword$179,cljs.core.constant$keyword$180,cljs.core.constant$keyword$181,cljs.core.constant$keyword$182], 0)),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_28602 = state;
(statearr_28602[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));

return statearr_28602;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);
var catch_block = cljs.core.constant$keyword$178.cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = cljs.core.constant$keyword$179.cljs$core$IFn$_invoke$arity$1(exception_frame);
var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);
if(cljs.core.truth_((function (){var and__3738__auto__ = exception;
if(cljs.core.truth_(and__3738__auto__)){
return cljs.core.not(exception_frame);
} else {
return and__3738__auto__;
}
})())){
throw exception;
} else {
if(cljs.core.truth_((function (){var and__3738__auto__ = exception;
if(cljs.core.truth_(and__3738__auto__)){
var and__3738__auto____$1 = catch_block;
if(cljs.core.truth_(and__3738__auto____$1)){
return (exception instanceof catch_exception);
} else {
return and__3738__auto____$1;
}
} else {
return and__3738__auto__;
}
})())){
var statearr_28608 = state;
(statearr_28608[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);

(statearr_28608[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);

(statearr_28608[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);

(statearr_28608[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$178,null,cljs.core.array_seq([cljs.core.constant$keyword$179,null], 0)));

return statearr_28608;
} else {
if(cljs.core.truth_((function (){var and__3738__auto__ = exception;
if(cljs.core.truth_(and__3738__auto__)){
return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$180.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else {
return and__3738__auto__;
}
})())){
var statearr_28609_28613 = state;
(statearr_28609_28613[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$182.cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__28614 = state;
state = G__28614;
continue;
} else {
if(cljs.core.truth_((function (){var and__3738__auto__ = exception;
if(cljs.core.truth_(and__3738__auto__)){
var and__3738__auto____$1 = cljs.core.not(catch_block);
if(and__3738__auto____$1){
return cljs.core.constant$keyword$180.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__3738__auto____$1;
}
} else {
return and__3738__auto__;
}
})())){
var statearr_28610 = state;
(statearr_28610[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$180.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_28610[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$180,null));

return statearr_28610;
} else {
if(cljs.core.truth_((function (){var and__3738__auto__ = cljs.core.not(exception);
if(and__3738__auto__){
return cljs.core.constant$keyword$180.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__3738__auto__;
}
})())){
var statearr_28611 = state;
(statearr_28611[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$180.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_28611[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$180,null));

return statearr_28611;
} else {
if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$180.cljs$core$IFn$_invoke$arity$1(exception_frame)))){
var statearr_28612 = state;
(statearr_28612[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$181.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_28612[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$182.cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_28612;
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
