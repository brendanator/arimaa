// Compiled by ClojureScript 0.0-2511
goog.provide('reagent.ratom');
goog.require('cljs.core');
reagent.ratom.debug = false;
reagent.ratom._running = (function (){var G__16504 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16504) : cljs.core.atom.call(null,G__16504));
})();
reagent.ratom.running = (function running(){
var G__16506 = reagent.ratom._running;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16506) : cljs.core.deref.call(null,G__16506));
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_16508 = reagent.ratom._STAR_ratom_context_STAR_;
try{reagent.ratom._STAR_ratom_context_STAR_ = obj;

return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_16508;
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
var G__16509 = this$__$1;
return goog.getUid(G__16509);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f){
var G__16510_16521 = key;
var G__16511_16522 = this$__$1;
var G__16512_16523 = oldval;
var G__16513_16524 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__16510_16521,G__16511_16522,G__16512_16523,G__16513_16524) : f.call(null,G__16510_16521,G__16511_16522,G__16512_16523,G__16513_16524));

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
return cljs.core._reset_BANG_(a__$1,(function (){var G__16514 = self__.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16514) : f.call(null,G__16514));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__16515 = self__.state;
var G__16516 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16515,G__16516) : f.call(null,G__16515,G__16516));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__16517 = self__.state;
var G__16518 = x;
var G__16519 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__16517,G__16518,G__16519) : f.call(null,G__16517,G__16518,G__16519));
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
if(cljs.core.truth_((function (){var G__16520 = new_value;
return (self__.validator.cljs$core$IFn$_invoke$arity$1 ? self__.validator.cljs$core$IFn$_invoke$arity$1(G__16520) : self__.validator.call(null,G__16520));
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

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"reagent.ratom/RAtom");
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
var G__16528__delegate = function (x,p__16525){
var map__16527 = p__16525;
var map__16527__$1 = ((cljs.core.seq_QMARK_(map__16527))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16527):map__16527);
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16527__$1,cljs.core.constant$keyword$13);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16527__$1,cljs.core.constant$keyword$3);
return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__16528 = function (x,var_args){
var p__16525 = null;
if (arguments.length > 1) {
  p__16525 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16528__delegate.call(this,x,p__16525);};
G__16528.cljs$lang$maxFixedArity = 1;
G__16528.cljs$lang$applyTo = (function (arglist__16529){
var x = cljs.core.first(arglist__16529);
var p__16525 = cljs.core.rest(arglist__16529);
return G__16528__delegate(x,p__16525);
});
G__16528.cljs$core$IFn$_invoke$arity$variadic = G__16528__delegate;
return G__16528;
})()
;
atom = function(x,var_args){
var p__16525 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
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
var G__16530 = this$__$1;
return goog.getUid(G__16530);
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
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__16531 = self__.ratom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16531) : cljs.core.deref.call(null,G__16531));
})(),self__.path);
});

reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RCursor.cljs$lang$type = true;

reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";

reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"reagent.ratom/RCursor");
});

reagent.ratom.__GT_RCursor = (function __GT_RCursor(path,ratom){
return (new reagent.ratom.RCursor(path,ratom));
});

reagent.ratom.cursor = (function cursor(path,ra){
return (new reagent.ratom.RCursor(path,ra));
});

reagent.ratom.IDisposable = (function (){var obj16533 = {};
return obj16533;
})();

reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else {
return and__3618__auto__;
}
})()){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (reagent.ratom.dispose_BANG_[(function (){var G__16537 = x__4274__auto__;
return goog.typeOf(G__16537);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IRunnable = (function (){var obj16539 = {};
return obj16539;
})();

reagent.ratom.run = (function run(this$){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.reagent$ratom$IRunnable$run$arity$1;
} else {
return and__3618__auto__;
}
})()){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (reagent.ratom.run[(function (){var G__16543 = x__4274__auto__;
return goog.typeOf(G__16543);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (reagent.ratom.run["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IRunnable.run",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IComputedImpl = (function (){var obj16545 = {};
return obj16545;
})();

reagent.ratom._update_watching = (function _update_watching(this$,derefed){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else {
return and__3618__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (reagent.ratom._update_watching[(function (){var G__16549 = x__4274__auto__;
return goog.typeOf(G__16549);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (reagent.ratom._update_watching["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});

reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){
if((function (){var and__3618__auto__ = k;
if(and__3618__auto__){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else {
return and__3618__auto__;
}
})()){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else {
var x__4274__auto__ = (((k == null))?null:k);
return (function (){var or__3630__auto__ = (reagent.ratom._handle_change[(function (){var G__16553 = x__4274__auto__;
return goog.typeOf(G__16553);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (reagent.ratom._handle_change["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});

reagent.ratom.call_watches = (function call_watches(obs,watches,oldval,newval){
return cljs.core.reduce_kv((function (_,key,f){
var G__16558_16562 = key;
var G__16559_16563 = obs;
var G__16560_16564 = oldval;
var G__16561_16565 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__16558_16562,G__16559_16563,G__16560_16564,G__16561_16565) : f.call(null,G__16558_16562,G__16559_16563,G__16560_16564,G__16561_16565));

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
if(cljs.core.truth_((function (){var and__3618__auto__ = self__.active_QMARK_;
if(cljs.core.truth_(and__3618__auto__)){
return (cljs.core.not(self__.dirty_QMARK_)) && (!((oldval === newval)));
} else {
return and__3618__auto__;
}
})())){
self__.dirty_QMARK_ = true;

return (function (){var or__3630__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
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
var seq__16566_16587 = cljs.core.seq(derefed);
var chunk__16567_16588 = null;
var count__16568_16589 = (0);
var i__16569_16590 = (0);
while(true){
if((i__16569_16590 < count__16568_16589)){
var w_16591 = chunk__16567_16588.cljs$core$IIndexed$_nth$arity$2(null,i__16569_16590);
if(cljs.core.contains_QMARK_(self__.watching,w_16591)){
} else {
cljs.core.add_watch(w_16591,this$__$1,reagent.ratom._handle_change);
}

var G__16592 = seq__16566_16587;
var G__16593 = chunk__16567_16588;
var G__16594 = count__16568_16589;
var G__16595 = (i__16569_16590 + (1));
seq__16566_16587 = G__16592;
chunk__16567_16588 = G__16593;
count__16568_16589 = G__16594;
i__16569_16590 = G__16595;
continue;
} else {
var temp__4126__auto___16596 = cljs.core.seq(seq__16566_16587);
if(temp__4126__auto___16596){
var seq__16566_16597__$1 = temp__4126__auto___16596;
if(cljs.core.chunked_seq_QMARK_(seq__16566_16597__$1)){
var c__4417__auto___16598 = cljs.core.chunk_first(seq__16566_16597__$1);
var G__16599 = cljs.core.chunk_rest(seq__16566_16597__$1);
var G__16600 = c__4417__auto___16598;
var G__16601 = cljs.core.count(c__4417__auto___16598);
var G__16602 = (0);
seq__16566_16587 = G__16599;
chunk__16567_16588 = G__16600;
count__16568_16589 = G__16601;
i__16569_16590 = G__16602;
continue;
} else {
var w_16603 = cljs.core.first(seq__16566_16597__$1);
if(cljs.core.contains_QMARK_(self__.watching,w_16603)){
} else {
cljs.core.add_watch(w_16603,this$__$1,reagent.ratom._handle_change);
}

var G__16604 = cljs.core.next(seq__16566_16597__$1);
var G__16605 = null;
var G__16606 = (0);
var G__16607 = (0);
seq__16566_16587 = G__16604;
chunk__16567_16588 = G__16605;
count__16568_16589 = G__16606;
i__16569_16590 = G__16607;
continue;
}
} else {
}
}
break;
}

var seq__16570_16608 = cljs.core.seq(self__.watching);
var chunk__16571_16609 = null;
var count__16572_16610 = (0);
var i__16573_16611 = (0);
while(true){
if((i__16573_16611 < count__16572_16610)){
var w_16612 = chunk__16571_16609.cljs$core$IIndexed$_nth$arity$2(null,i__16573_16611);
if(cljs.core.contains_QMARK_(derefed,w_16612)){
} else {
cljs.core.remove_watch(w_16612,this$__$1);
}

var G__16613 = seq__16570_16608;
var G__16614 = chunk__16571_16609;
var G__16615 = count__16572_16610;
var G__16616 = (i__16573_16611 + (1));
seq__16570_16608 = G__16613;
chunk__16571_16609 = G__16614;
count__16572_16610 = G__16615;
i__16573_16611 = G__16616;
continue;
} else {
var temp__4126__auto___16617 = cljs.core.seq(seq__16570_16608);
if(temp__4126__auto___16617){
var seq__16570_16618__$1 = temp__4126__auto___16617;
if(cljs.core.chunked_seq_QMARK_(seq__16570_16618__$1)){
var c__4417__auto___16619 = cljs.core.chunk_first(seq__16570_16618__$1);
var G__16620 = cljs.core.chunk_rest(seq__16570_16618__$1);
var G__16621 = c__4417__auto___16619;
var G__16622 = cljs.core.count(c__4417__auto___16619);
var G__16623 = (0);
seq__16570_16608 = G__16620;
chunk__16571_16609 = G__16621;
count__16572_16610 = G__16622;
i__16573_16611 = G__16623;
continue;
} else {
var w_16624 = cljs.core.first(seq__16570_16618__$1);
if(cljs.core.contains_QMARK_(derefed,w_16624)){
} else {
cljs.core.remove_watch(w_16624,this$__$1);
}

var G__16625 = cljs.core.next(seq__16570_16618__$1);
var G__16626 = null;
var G__16627 = (0);
var G__16628 = (0);
seq__16570_16608 = G__16625;
chunk__16571_16609 = G__16626;
count__16572_16610 = G__16627;
i__16573_16611 = G__16628;
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
var G__16574 = this$__$1;
return goog.getUid(G__16574);
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
var seq__16575_16629 = cljs.core.seq(self__.watching);
var chunk__16576_16630 = null;
var count__16577_16631 = (0);
var i__16578_16632 = (0);
while(true){
if((i__16578_16632 < count__16577_16631)){
var w_16633 = chunk__16576_16630.cljs$core$IIndexed$_nth$arity$2(null,i__16578_16632);
cljs.core.remove_watch(w_16633,this$__$1);

var G__16634 = seq__16575_16629;
var G__16635 = chunk__16576_16630;
var G__16636 = count__16577_16631;
var G__16637 = (i__16578_16632 + (1));
seq__16575_16629 = G__16634;
chunk__16576_16630 = G__16635;
count__16577_16631 = G__16636;
i__16578_16632 = G__16637;
continue;
} else {
var temp__4126__auto___16638 = cljs.core.seq(seq__16575_16629);
if(temp__4126__auto___16638){
var seq__16575_16639__$1 = temp__4126__auto___16638;
if(cljs.core.chunked_seq_QMARK_(seq__16575_16639__$1)){
var c__4417__auto___16640 = cljs.core.chunk_first(seq__16575_16639__$1);
var G__16641 = cljs.core.chunk_rest(seq__16575_16639__$1);
var G__16642 = c__4417__auto___16640;
var G__16643 = cljs.core.count(c__4417__auto___16640);
var G__16644 = (0);
seq__16575_16629 = G__16641;
chunk__16576_16630 = G__16642;
count__16577_16631 = G__16643;
i__16578_16632 = G__16644;
continue;
} else {
var w_16645 = cljs.core.first(seq__16575_16639__$1);
cljs.core.remove_watch(w_16645,this$__$1);

var G__16646 = cljs.core.next(seq__16575_16639__$1);
var G__16647 = null;
var G__16648 = (0);
var G__16649 = (0);
seq__16575_16629 = G__16646;
chunk__16576_16630 = G__16647;
count__16577_16631 = G__16648;
i__16578_16632 = G__16649;
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
return cljs.core._reset_BANG_(a__$1,(function (){var G__16579 = self__.state;
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__16579) : f__$1.call(null,G__16579));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__16580 = self__.state;
var G__16581 = x;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__16580,G__16581) : f__$1.call(null,G__16580,G__16581));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__16582 = self__.state;
var G__16583 = x;
var G__16584 = y;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__16582,G__16583,G__16584) : f__$1.call(null,G__16582,G__16583,G__16584));
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
var G__16585_16650 = oldval;
var G__16586_16651 = newval;
(self__.on_set.cljs$core$IFn$_invoke$arity$2 ? self__.on_set.cljs$core$IFn$_invoke$arity$2(G__16585_16650,G__16586_16651) : self__.on_set.call(null,G__16585_16650,G__16586_16651));
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
if(cljs.core.not((function (){var or__3630__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return reagent.ratom._STAR_ratom_context_STAR_;
}
})())){
var x__9693__auto___16652 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,reagent.ratom._STAR_ratom_context_STAR_], null);
if(typeof console !== 'undefined'){
console.log([cljs.core.str([cljs.core.str("dbg "),cljs.core.str("reagent.ratom"),cljs.core.str(":"),cljs.core.str(231),cljs.core.str(": "),cljs.core.str("[auto-run *ratom-context*]"),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x__9693__auto___16652], 0)))].join(''))].join(''));
} else {
}

} else {
}

if(cljs.core.truth_((function (){var or__3630__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
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

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"reagent.ratom/Reaction");
});

reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});

/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__16653){
var map__16655 = p__16653;
var map__16655__$1 = ((cljs.core.seq_QMARK_(map__16655))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16655):map__16655);
var derefed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16655__$1,cljs.core.constant$keyword$24);
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16655__$1,cljs.core.constant$keyword$25);
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16655__$1,cljs.core.constant$keyword$26);
var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16655__$1,cljs.core.constant$keyword$27);
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
var p__16653 = null;
if (arguments.length > 1) {
  p__16653 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return make_reaction__delegate.call(this,f,p__16653);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__16656){
var f = cljs.core.first(arglist__16656);
var p__16653 = cljs.core.rest(arglist__16656);
return make_reaction__delegate(f,p__16653);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;
