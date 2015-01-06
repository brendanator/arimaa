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
return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$177);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.impl.ioc_helpers.t27926 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t27926 = (function (f,fn_handler,meta27927){
this.f = f;
this.fn_handler = fn_handler;
this.meta27927 = meta27927;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t27926.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.impl.ioc_helpers.t27926.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t27926.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t27926.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27928){
var self__ = this;
var _27928__$1 = this;
return self__.meta27927;
});

cljs.core.async.impl.ioc_helpers.t27926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27928,meta27927__$1){
var self__ = this;
var _27928__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t27926(self__.f,self__.fn_handler,meta27927__$1));
});

cljs.core.async.impl.ioc_helpers.t27926.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t27926.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t27926";

cljs.core.async.impl.ioc_helpers.t27926.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core.async.impl.ioc-helpers/t27926");
});

cljs.core.async.impl.ioc_helpers.__GT_t27926 = (function __GT_t27926(f__$1,fn_handler__$1,meta27927){
return (new cljs.core.async.impl.ioc_helpers.t27926(f__$1,fn_handler__$1,meta27927));
});

}

return (new cljs.core.async.impl.ioc_helpers.t27926(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,19,cljs.core.constant$keyword$9,30,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,27,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core/async/impl/ioc_helpers.cljs"], null)));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){
return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e27930){if((e27930 instanceof Object)){
var ex = e27930;
cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e27930;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_27934_27937 = state;
(statearr_27934_27937[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);

(statearr_27934_27937[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_27935_27938 = state;
(statearr_27935_27938[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__27936 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27936) : cljs.core.deref.call(null,G__27936));
})());

(statearr_27935_27938[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$127;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){
var statearr_27942_27945 = state;
(statearr_27942_27945[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);

(statearr_27942_27945[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_27943_27946 = state;
(statearr_27943_27946[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__27944 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27944) : cljs.core.deref.call(null,G__27944));
})());

(statearr_27943_27946[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4334__auto__,k__4335__auto__){
var self__ = this;
var this__4334__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4334__auto____$1,k__4335__auto__,null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4336__auto__,k27948,else__4337__auto__){
var self__ = this;
var this__4336__auto____$1 = this;
var G__27950 = (((k27948 instanceof cljs.core.Keyword))?k27948.fqn:null);
switch (G__27950) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27948,else__4337__auto__);

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
return cljs.core.pr_sequential_writer(writer__4349__auto__,pr_pair__4351__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4350__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$178,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$179,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$180,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$181,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$182,self__.prev],null))], null),self__.__extmap));
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
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$180,null,cljs.core.constant$keyword$178,null,cljs.core.constant$keyword$179,null,cljs.core.constant$keyword$182,null,cljs.core.constant$keyword$181,null], null), null),k__4344__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4343__auto____$1),self__.__meta),k__4344__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4344__auto__)),null));
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4341__auto__,k__4342__auto__,G__27947){
var self__ = this;
var this__4341__auto____$1 = this;
var pred__27951 = cljs.core.keyword_identical_QMARK_;
var expr__27952 = k__4342__auto__;
if(cljs.core.truth_((function (){var G__27954 = cljs.core.constant$keyword$178;
var G__27955 = expr__27952;
return (pred__27951.cljs$core$IFn$_invoke$arity$2 ? pred__27951.cljs$core$IFn$_invoke$arity$2(G__27954,G__27955) : pred__27951.call(null,G__27954,G__27955));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__27947,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27956 = cljs.core.constant$keyword$179;
var G__27957 = expr__27952;
return (pred__27951.cljs$core$IFn$_invoke$arity$2 ? pred__27951.cljs$core$IFn$_invoke$arity$2(G__27956,G__27957) : pred__27951.call(null,G__27956,G__27957));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__27947,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27958 = cljs.core.constant$keyword$180;
var G__27959 = expr__27952;
return (pred__27951.cljs$core$IFn$_invoke$arity$2 ? pred__27951.cljs$core$IFn$_invoke$arity$2(G__27958,G__27959) : pred__27951.call(null,G__27958,G__27959));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__27947,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27960 = cljs.core.constant$keyword$181;
var G__27961 = expr__27952;
return (pred__27951.cljs$core$IFn$_invoke$arity$2 ? pred__27951.cljs$core$IFn$_invoke$arity$2(G__27960,G__27961) : pred__27951.call(null,G__27960,G__27961));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__27947,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27962 = cljs.core.constant$keyword$182;
var G__27963 = expr__27952;
return (pred__27951.cljs$core$IFn$_invoke$arity$2 ? pred__27951.cljs$core$IFn$_invoke$arity$2(G__27962,G__27963) : pred__27951.call(null,G__27962,G__27963));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__27947,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4342__auto__,G__27947),null));
}
}
}
}
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4346__auto__){
var self__ = this;
var this__4346__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$178,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$179,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$180,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$181,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$182,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4333__auto__,G__27947){
var self__ = this;
var this__4333__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__27947,self__.__extmap,self__.__hash));
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

cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__27949){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$178.cljs$core$IFn$_invoke$arity$1(G__27949),cljs.core.constant$keyword$179.cljs$core$IFn$_invoke$arity$1(G__27949),cljs.core.constant$keyword$180.cljs$core$IFn$_invoke$arity$1(G__27949),cljs.core.constant$keyword$181.cljs$core$IFn$_invoke$arity$1(G__27949),cljs.core.constant$keyword$182.cljs$core$IFn$_invoke$arity$1(G__27949),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27949,cljs.core.constant$keyword$178,cljs.core.array_seq([cljs.core.constant$keyword$179,cljs.core.constant$keyword$180,cljs.core.constant$keyword$181,cljs.core.constant$keyword$182], 0)),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_27966 = state;
(statearr_27966[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));

return statearr_27966;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);
var catch_block = cljs.core.constant$keyword$178.cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = cljs.core.constant$keyword$179.cljs$core$IFn$_invoke$arity$1(exception_frame);
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
var statearr_27972 = state;
(statearr_27972[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);

(statearr_27972[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);

(statearr_27972[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);

(statearr_27972[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$178,null,cljs.core.array_seq([cljs.core.constant$keyword$179,null], 0)));

return statearr_27972;
} else {
if(cljs.core.truth_((function (){var and__3719__auto__ = exception;
if(cljs.core.truth_(and__3719__auto__)){
return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$180.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else {
return and__3719__auto__;
}
})())){
var statearr_27973_27977 = state;
(statearr_27973_27977[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$182.cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__27978 = state;
state = G__27978;
continue;
} else {
if(cljs.core.truth_((function (){var and__3719__auto__ = exception;
if(cljs.core.truth_(and__3719__auto__)){
var and__3719__auto____$1 = cljs.core.not(catch_block);
if(and__3719__auto____$1){
return cljs.core.constant$keyword$180.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__3719__auto____$1;
}
} else {
return and__3719__auto__;
}
})())){
var statearr_27974 = state;
(statearr_27974[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$180.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_27974[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$180,null));

return statearr_27974;
} else {
if(cljs.core.truth_((function (){var and__3719__auto__ = cljs.core.not(exception);
if(and__3719__auto__){
return cljs.core.constant$keyword$180.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__3719__auto__;
}
})())){
var statearr_27975 = state;
(statearr_27975[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$180.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_27975[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$180,null));

return statearr_27975;
} else {
if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$180.cljs$core$IFn$_invoke$arity$1(exception_frame)))){
var statearr_27976 = state;
(statearr_27976[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$181.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_27976[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$182.cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_27976;
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
