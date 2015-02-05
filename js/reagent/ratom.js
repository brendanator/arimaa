// Compiled by ClojureScript 0.0-2727 {}
goog.provide('reagent.ratom');
goog.require('cljs.core');
reagent.ratom.debug = false;
reagent.ratom._running = (function (){var G__17340 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17340) : cljs.core.atom.call(null,G__17340));
})();
reagent.ratom.running = (function running(){
var G__17342 = reagent.ratom._running;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17342) : cljs.core.deref.call(null,G__17342));
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_17344 = reagent.ratom._STAR_ratom_context_STAR_;
try{reagent.ratom._STAR_ratom_context_STAR_ = obj;

return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_17344;
}});
reagent.ratom.captured = (function captured(obj){
var c = obj.cljsCaptured;
obj.cljsCaptured = null;

return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){
var obj = reagent.ratom._STAR_ratom_context_STAR_;
if((obj == null)){
return null;
} else {
var captured = obj.cljsCaptured;
return obj.cljsCaptured = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__17345 = this$__$1;
return goog.getUid(G__17345);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f){
var G__17346_17357 = key;
var G__17347_17358 = this$__$1;
var G__17348_17359 = oldval;
var G__17349_17360 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__17346_17357,G__17347_17358,G__17348_17359,G__17349_17360) : f.call(null,G__17346_17357,G__17347_17358,G__17348_17359,G__17349_17360));

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});

reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write(writer,"#<Atom: ");

cljs.core.pr_writer(self__.state,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17350 = self__.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17350) : f.call(null,G__17350));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17351 = self__.state;
var G__17352 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17351,G__17352) : f.call(null,G__17351,G__17352));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17353 = self__.state;
var G__17354 = x;
var G__17355 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__17353,G__17354,G__17355) : f.call(null,G__17353,G__17354,G__17355));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});

reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_((function (){var G__17356 = new_value;
return (self__.validator.cljs$core$IFn$_invoke$arity$1 ? self__.validator.cljs$core$IFn$_invoke$arity$1(G__17356) : self__.validator.call(null,G__17356));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null))], 0)))].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
cljs.core._notify_watches(a__$1,old_value,new_value);
}

return new_value;
});

reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

return self__.state;
});

reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RAtom.cljs$lang$type = true;

reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4337__auto__,writer__4338__auto__,opt__4339__auto__){
return cljs.core._write(writer__4338__auto__,"reagent.ratom/RAtom");
});

reagent.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
* Like clojure.core/atom, except that it keeps track of derefs.
* @param {...*} var_args
*/
reagent.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new reagent.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__17364__delegate = function (x,p__17361){
var map__17363 = p__17361;
var map__17363__$1 = ((cljs.core.seq_QMARK_(map__17363))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17363):map__17363);
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17363__$1,cljs.core.constant$keyword$13);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17363__$1,cljs.core.constant$keyword$3);
return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__17364 = function (x,var_args){
var p__17361 = null;
if (arguments.length > 1) {
var G__17365__i = 0, G__17365__a = new Array(arguments.length -  1);
while (G__17365__i < G__17365__a.length) {G__17365__a[G__17365__i] = arguments[G__17365__i + 1]; ++G__17365__i;}
  p__17361 = new cljs.core.IndexedSeq(G__17365__a,0);
} 
return G__17364__delegate.call(this,x,p__17361);};
G__17364.cljs$lang$maxFixedArity = 1;
G__17364.cljs$lang$applyTo = (function (arglist__17366){
var x = cljs.core.first(arglist__17366);
var p__17361 = cljs.core.rest(arglist__17366);
return G__17364__delegate(x,p__17361);
});
G__17364.cljs$core$IFn$_invoke$arity$variadic = G__17364__delegate;
return G__17364;
})()
;
atom = function(x,var_args){
var p__17361 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
var G__17367 = null;
if (arguments.length > 1) {
var G__17368__i = 0, G__17368__a = new Array(arguments.length -  1);
while (G__17368__i < G__17368__a.length) {G__17368__a[G__17368__i] = arguments[G__17368__i + 1]; ++G__17368__i;}
G__17367 = new cljs.core.IndexedSeq(G__17368__a,0);
}
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, G__17367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;

/**
* @constructor
*/
reagent.ratom.RCursor = (function (path,ratom){
this.path = path;
this.ratom = ratom;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__17369 = this$__$1;
return goog.getUid(G__17369);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core._notify_watches(self__.ratom,oldval,newval);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._add_watch(self__.ratom,key,f);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return cljs.core._remove_watch(self__.ratom,key);
});

reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write(writer,"#<Cursor: ");

cljs.core.pr_writer(self__.path,writer,opts);

cljs.core._write(writer," ");

cljs.core.pr_writer(self__.ratom,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.RCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._meta(self__.ratom);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.ratom,cljs.core.update_in,self__.path,f);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.ratom,cljs.core.update_in,self__.path,f,cljs.core.array_seq([x], 0));
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.ratom,cljs.core.update_in,self__.path,f,cljs.core.array_seq([x,y], 0));
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.ratom,cljs.core.update_in,self__.path,f,cljs.core.array_seq([x,y,more], 0));
});

reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.ratom,cljs.core.assoc_in,self__.path,new_value);
});

reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__17370 = self__.ratom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17370) : cljs.core.deref.call(null,G__17370));
})(),self__.path);
});

reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RCursor.cljs$lang$type = true;

reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";

reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4337__auto__,writer__4338__auto__,opt__4339__auto__){
return cljs.core._write(writer__4338__auto__,"reagent.ratom/RCursor");
});

reagent.ratom.__GT_RCursor = (function __GT_RCursor(path,ratom){
return (new reagent.ratom.RCursor(path,ratom));
});

reagent.ratom.cursor = (function cursor(path,ra){
return (new reagent.ratom.RCursor(path,ra));
});

reagent.ratom.IDisposable = (function (){var obj17372 = {};
return obj17372;
})();

reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){
if((function (){var and__3738__auto__ = this$;
if(and__3738__auto__){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else {
return and__3738__auto__;
}
})()){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__4394__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3750__auto__ = (reagent.ratom.dispose_BANG_[(function (){var G__17376 = x__4394__auto__;
return goog.typeOf(G__17376);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IRunnable = (function (){var obj17378 = {};
return obj17378;
})();

reagent.ratom.run = (function run(this$){
if((function (){var and__3738__auto__ = this$;
if(and__3738__auto__){
return this$.reagent$ratom$IRunnable$run$arity$1;
} else {
return and__3738__auto__;
}
})()){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__4394__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3750__auto__ = (reagent.ratom.run[(function (){var G__17382 = x__4394__auto__;
return goog.typeOf(G__17382);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (reagent.ratom.run["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("IRunnable.run",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IComputedImpl = (function (){var obj17384 = {};
return obj17384;
})();

reagent.ratom._update_watching = (function _update_watching(this$,derefed){
if((function (){var and__3738__auto__ = this$;
if(and__3738__auto__){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else {
return and__3738__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else {
var x__4394__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3750__auto__ = (reagent.ratom._update_watching[(function (){var G__17388 = x__4394__auto__;
return goog.typeOf(G__17388);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (reagent.ratom._update_watching["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});

reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){
if((function (){var and__3738__auto__ = k;
if(and__3738__auto__){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else {
return and__3738__auto__;
}
})()){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else {
var x__4394__auto__ = (((k == null))?null:k);
return (function (){var or__3750__auto__ = (reagent.ratom._handle_change[(function (){var G__17392 = x__4394__auto__;
return goog.typeOf(G__17392);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (reagent.ratom._handle_change["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});

reagent.ratom.call_watches = (function call_watches(obs,watches,oldval,newval){
return cljs.core.reduce_kv((function (_,key,f){
var G__17397_17401 = key;
var G__17398_17402 = obs;
var G__17399_17403 = oldval;
var G__17400_17404 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__17397_17401,G__17398_17402,G__17399_17403,G__17400_17404) : f.call(null,G__17397_17401,G__17398_17402,G__17399_17403,G__17400_17404));

return null;
}),null,watches);
});

/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__3738__auto__ = self__.active_QMARK_;
if(cljs.core.truth_(and__3738__auto__)){
return (cljs.core.not(self__.dirty_QMARK_)) && (!((oldval === newval)));
} else {
return and__3738__auto__;
}
})())){
self__.dirty_QMARK_ = true;

return (function (){var or__3750__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3750__auto__)){
return or__3750__auto__;
} else {
return reagent.ratom.run;
}
})().call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){
var self__ = this;
var this$__$1 = this;
var seq__17405_17426 = cljs.core.seq(derefed);
var chunk__17406_17427 = null;
var count__17407_17428 = (0);
var i__17408_17429 = (0);
while(true){
if((i__17408_17429 < count__17407_17428)){
var w_17430 = chunk__17406_17427.cljs$core$IIndexed$_nth$arity$2(null,i__17408_17429);
if(cljs.core.contains_QMARK_(self__.watching,w_17430)){
} else {
cljs.core.add_watch(w_17430,this$__$1,reagent.ratom._handle_change);
}

var G__17431 = seq__17405_17426;
var G__17432 = chunk__17406_17427;
var G__17433 = count__17407_17428;
var G__17434 = (i__17408_17429 + (1));
seq__17405_17426 = G__17431;
chunk__17406_17427 = G__17432;
count__17407_17428 = G__17433;
i__17408_17429 = G__17434;
continue;
} else {
var temp__4126__auto___17435 = cljs.core.seq(seq__17405_17426);
if(temp__4126__auto___17435){
var seq__17405_17436__$1 = temp__4126__auto___17435;
if(cljs.core.chunked_seq_QMARK_(seq__17405_17436__$1)){
var c__4537__auto___17437 = cljs.core.chunk_first(seq__17405_17436__$1);
var G__17438 = cljs.core.chunk_rest(seq__17405_17436__$1);
var G__17439 = c__4537__auto___17437;
var G__17440 = cljs.core.count(c__4537__auto___17437);
var G__17441 = (0);
seq__17405_17426 = G__17438;
chunk__17406_17427 = G__17439;
count__17407_17428 = G__17440;
i__17408_17429 = G__17441;
continue;
} else {
var w_17442 = cljs.core.first(seq__17405_17436__$1);
if(cljs.core.contains_QMARK_(self__.watching,w_17442)){
} else {
cljs.core.add_watch(w_17442,this$__$1,reagent.ratom._handle_change);
}

var G__17443 = cljs.core.next(seq__17405_17436__$1);
var G__17444 = null;
var G__17445 = (0);
var G__17446 = (0);
seq__17405_17426 = G__17443;
chunk__17406_17427 = G__17444;
count__17407_17428 = G__17445;
i__17408_17429 = G__17446;
continue;
}
} else {
}
}
break;
}

var seq__17409_17447 = cljs.core.seq(self__.watching);
var chunk__17410_17448 = null;
var count__17411_17449 = (0);
var i__17412_17450 = (0);
while(true){
if((i__17412_17450 < count__17411_17449)){
var w_17451 = chunk__17410_17448.cljs$core$IIndexed$_nth$arity$2(null,i__17412_17450);
if(cljs.core.contains_QMARK_(derefed,w_17451)){
} else {
cljs.core.remove_watch(w_17451,this$__$1);
}

var G__17452 = seq__17409_17447;
var G__17453 = chunk__17410_17448;
var G__17454 = count__17411_17449;
var G__17455 = (i__17412_17450 + (1));
seq__17409_17447 = G__17452;
chunk__17410_17448 = G__17453;
count__17411_17449 = G__17454;
i__17412_17450 = G__17455;
continue;
} else {
var temp__4126__auto___17456 = cljs.core.seq(seq__17409_17447);
if(temp__4126__auto___17456){
var seq__17409_17457__$1 = temp__4126__auto___17456;
if(cljs.core.chunked_seq_QMARK_(seq__17409_17457__$1)){
var c__4537__auto___17458 = cljs.core.chunk_first(seq__17409_17457__$1);
var G__17459 = cljs.core.chunk_rest(seq__17409_17457__$1);
var G__17460 = c__4537__auto___17458;
var G__17461 = cljs.core.count(c__4537__auto___17458);
var G__17462 = (0);
seq__17409_17447 = G__17459;
chunk__17410_17448 = G__17460;
count__17411_17449 = G__17461;
i__17412_17450 = G__17462;
continue;
} else {
var w_17463 = cljs.core.first(seq__17409_17457__$1);
if(cljs.core.contains_QMARK_(derefed,w_17463)){
} else {
cljs.core.remove_watch(w_17463,this$__$1);
}

var G__17464 = cljs.core.next(seq__17409_17457__$1);
var G__17465 = null;
var G__17466 = (0);
var G__17467 = (0);
seq__17409_17447 = G__17464;
chunk__17410_17448 = G__17465;
count__17411_17449 = G__17466;
i__17412_17450 = G__17467;
continue;
}
} else {
}
}
break;
}

return self__.watching = derefed;
});

reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write(writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash(this$__$1)),cljs.core.str(": ")].join(''));

cljs.core.pr_writer(self__.state,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__17413 = this$__$1;
return goog.getUid(G__17413);
});

reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__17414_17468 = cljs.core.seq(self__.watching);
var chunk__17415_17469 = null;
var count__17416_17470 = (0);
var i__17417_17471 = (0);
while(true){
if((i__17417_17471 < count__17416_17470)){
var w_17472 = chunk__17415_17469.cljs$core$IIndexed$_nth$arity$2(null,i__17417_17471);
cljs.core.remove_watch(w_17472,this$__$1);

var G__17473 = seq__17414_17468;
var G__17474 = chunk__17415_17469;
var G__17475 = count__17416_17470;
var G__17476 = (i__17417_17471 + (1));
seq__17414_17468 = G__17473;
chunk__17415_17469 = G__17474;
count__17416_17470 = G__17475;
i__17417_17471 = G__17476;
continue;
} else {
var temp__4126__auto___17477 = cljs.core.seq(seq__17414_17468);
if(temp__4126__auto___17477){
var seq__17414_17478__$1 = temp__4126__auto___17477;
if(cljs.core.chunked_seq_QMARK_(seq__17414_17478__$1)){
var c__4537__auto___17479 = cljs.core.chunk_first(seq__17414_17478__$1);
var G__17480 = cljs.core.chunk_rest(seq__17414_17478__$1);
var G__17481 = c__4537__auto___17479;
var G__17482 = cljs.core.count(c__4537__auto___17479);
var G__17483 = (0);
seq__17414_17468 = G__17480;
chunk__17415_17469 = G__17481;
count__17416_17470 = G__17482;
i__17417_17471 = G__17483;
continue;
} else {
var w_17484 = cljs.core.first(seq__17414_17478__$1);
cljs.core.remove_watch(w_17484,this$__$1);

var G__17485 = cljs.core.next(seq__17414_17478__$1);
var G__17486 = null;
var G__17487 = (0);
var G__17488 = (0);
seq__17414_17468 = G__17485;
chunk__17415_17469 = G__17486;
count__17416_17470 = G__17487;
i__17417_17471 = G__17488;
continue;
}
} else {
}
}
break;
}

self__.watching = cljs.core.PersistentHashSet.EMPTY;

self__.state = null;

self__.dirty_QMARK_ = true;

if(cljs.core.truth_(self__.active_QMARK_)){
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.dec);
} else {
}

self__.active_QMARK_ = false;
} else {
}

if(cljs.core.truth_(self__.on_dispose)){
return (self__.on_dispose.cljs$core$IFn$_invoke$arity$0 ? self__.on_dispose.cljs$core$IFn$_invoke$arity$0() : self__.on_dispose.call(null));
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
var old_value = self__.state;
self__.state = new_value;

cljs.core._notify_watches(a__$1,old_value,new_value);

return new_value;
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17418 = self__.state;
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__17418) : f__$1.call(null,G__17418));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17419 = self__.state;
var G__17420 = x;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__17419,G__17420) : f__$1.call(null,G__17419,G__17420));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17421 = self__.state;
var G__17422 = x;
var G__17423 = y;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__17421,G__17422,G__17423) : f__$1.call(null,G__17421,G__17422,G__17423));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,self__.state,x,y,more));
});

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var res = reagent.ratom.capture_derefed(self__.f,this$__$1);
var derefed = reagent.ratom.captured(this$__$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(derefed,self__.watching)){
reagent.ratom._update_watching(this$__$1,derefed);
} else {
}

if(cljs.core.truth_(self__.active_QMARK_)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.inc);
} else {
}

self__.active_QMARK_ = true;
}

self__.dirty_QMARK_ = false;

self__.state = res;

reagent.ratom.call_watches(this$__$1,self__.watches,oldstate,self__.state);

return res;
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.on_set)){
var G__17424_17489 = oldval;
var G__17425_17490 = newval;
(self__.on_set.cljs$core$IFn$_invoke$arity$2 ? self__.on_set.cljs$core$IFn$_invoke$arity$2(G__17424_17489,G__17425_17490) : self__.on_set.call(null,G__17424_17489,G__17425_17490));
} else {
}

return reagent.ratom.call_watches(this$__$1,self__.watches,oldval,newval);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,k,wf);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,k);

if(cljs.core.empty_QMARK_(self__.watches)){
return reagent.ratom.dispose_BANG_(this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not((function (){var or__3750__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3750__auto__)){
return or__3750__auto__;
} else {
return reagent.ratom._STAR_ratom_context_STAR_;
}
})())){
var x__9859__auto___17491 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,reagent.ratom._STAR_ratom_context_STAR_], null);
if(typeof console !== 'undefined'){
console.log([cljs.core.str([cljs.core.str("dbg "),cljs.core.str("reagent.ratom"),cljs.core.str(":"),cljs.core.str(231),cljs.core.str(": "),cljs.core.str("[auto-run *ratom-context*]"),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x__9859__auto___17491], 0)))].join(''))].join(''));
} else {
}

} else {
}

if(cljs.core.truth_((function (){var or__3750__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3750__auto__)){
return or__3750__auto__;
} else {
return reagent.ratom._STAR_ratom_context_STAR_;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Reaction derefed outside auto-running context"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.Symbol(null,"*ratom-context*","*ratom-context*",-1557728360,null))], 0)))].join('')));
}

reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

if(cljs.core.truth_(self__.dirty_QMARK_)){
return reagent.ratom.run(this$__$1);
} else {
return self__.state;
}
});

reagent.ratom.Reaction.cljs$lang$type = true;

reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4337__auto__,writer__4338__auto__,opt__4339__auto__){
return cljs.core._write(writer__4338__auto__,"reagent.ratom/Reaction");
});

reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});

/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__17492){
var map__17494 = p__17492;
var map__17494__$1 = ((cljs.core.seq_QMARK_(map__17494))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17494):map__17494);
var derefed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17494__$1,cljs.core.constant$keyword$24);
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17494__$1,cljs.core.constant$keyword$25);
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17494__$1,cljs.core.constant$keyword$26);
var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17494__$1,cljs.core.constant$keyword$27);
var runner = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(auto_run,true))?reagent.ratom.run:auto_run);
var active = !((derefed == null));
var dirty = !(active);
var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,cljs.core.PersistentArrayMap.EMPTY,runner,on_set,on_dispose));
if((derefed == null)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.inc);
} else {
}

reaction.reagent$ratom$IComputedImpl$_update_watching$arity$2(null,derefed);
}

return reaction;
};
var make_reaction = function (f,var_args){
var p__17492 = null;
if (arguments.length > 1) {
var G__17495__i = 0, G__17495__a = new Array(arguments.length -  1);
while (G__17495__i < G__17495__a.length) {G__17495__a[G__17495__i] = arguments[G__17495__i + 1]; ++G__17495__i;}
  p__17492 = new cljs.core.IndexedSeq(G__17495__a,0);
} 
return make_reaction__delegate.call(this,f,p__17492);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__17496){
var f = cljs.core.first(arglist__17496);
var p__17492 = cljs.core.rest(arglist__17496);
return make_reaction__delegate(f,p__17492);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;
