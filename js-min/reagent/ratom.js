// Compiled by ClojureScript 0.0-2511
goog.provide('reagent.ratom');
goog.require('cljs.core');
reagent.ratom.debug = false;
reagent.ratom._running = (function (){var G__16266 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16266) : cljs.core.atom.call(null,G__16266));
})();
reagent.ratom.running = (function running(){
var G__16268 = reagent.ratom._running;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16268) : cljs.core.deref.call(null,G__16268));
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_16270 = reagent.ratom._STAR_ratom_context_STAR_;
try{reagent.ratom._STAR_ratom_context_STAR_ = obj;

return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_16270;
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
var G__16271 = this$__$1;
return goog.getUid(G__16271);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f){
var G__16272_16283 = key;
var G__16273_16284 = this$__$1;
var G__16274_16285 = oldval;
var G__16275_16286 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__16272_16283,G__16273_16284,G__16274_16285,G__16275_16286) : f.call(null,G__16272_16283,G__16273_16284,G__16274_16285,G__16275_16286));

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
return cljs.core._reset_BANG_(a__$1,(function (){var G__16276 = self__.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16276) : f.call(null,G__16276));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__16277 = self__.state;
var G__16278 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16277,G__16278) : f.call(null,G__16277,G__16278));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__16279 = self__.state;
var G__16280 = x;
var G__16281 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__16279,G__16280,G__16281) : f.call(null,G__16279,G__16280,G__16281));
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
if(cljs.core.truth_((function (){var G__16282 = new_value;
return (self__.validator.cljs$core$IFn$_invoke$arity$1 ? self__.validator.cljs$core$IFn$_invoke$arity$1(G__16282) : self__.validator.call(null,G__16282));
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
var G__16290__delegate = function (x,p__16287){
var map__16289 = p__16287;
var map__16289__$1 = ((cljs.core.seq_QMARK_(map__16289))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16289):map__16289);
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16289__$1,cljs.core.constant$keyword$13);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16289__$1,cljs.core.constant$keyword$3);
return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__16290 = function (x,var_args){
var p__16287 = null;
if (arguments.length > 1) {
  p__16287 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__16290__delegate.call(this,x,p__16287);};
G__16290.cljs$lang$maxFixedArity = 1;
G__16290.cljs$lang$applyTo = (function (arglist__16291){
var x = cljs.core.first(arglist__16291);
var p__16287 = cljs.core.rest(arglist__16291);
return G__16290__delegate(x,p__16287);
});
G__16290.cljs$core$IFn$_invoke$arity$variadic = G__16290__delegate;
return G__16290;
})()
;
atom = function(x,var_args){
var p__16287 = var_args;
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
var G__16292 = this$__$1;
return goog.getUid(G__16292);
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
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__16293 = self__.ratom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16293) : cljs.core.deref.call(null,G__16293));
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

reagent.ratom.IDisposable = (function (){var obj16295 = {};
return obj16295;
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
return (function (){var or__3630__auto__ = (reagent.ratom.dispose_BANG_[(function (){var G__16299 = x__4274__auto__;
return goog.typeOf(G__16299);
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


reagent.ratom.IRunnable = (function (){var obj16301 = {};
return obj16301;
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
return (function (){var or__3630__auto__ = (reagent.ratom.run[(function (){var G__16305 = x__4274__auto__;
return goog.typeOf(G__16305);
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


reagent.ratom.IComputedImpl = (function (){var obj16307 = {};
return obj16307;
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
return (function (){var or__3630__auto__ = (reagent.ratom._update_watching[(function (){var G__16311 = x__4274__auto__;
return goog.typeOf(G__16311);
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
return (function (){var or__3630__auto__ = (reagent.ratom._handle_change[(function (){var G__16315 = x__4274__auto__;
return goog.typeOf(G__16315);
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
var G__16320_16324 = key;
var G__16321_16325 = obs;
var G__16322_16326 = oldval;
var G__16323_16327 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__16320_16324,G__16321_16325,G__16322_16326,G__16323_16327) : f.call(null,G__16320_16324,G__16321_16325,G__16322_16326,G__16323_16327));

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
var seq__16328_16349 = cljs.core.seq(derefed);
var chunk__16329_16350 = null;
var count__16330_16351 = (0);
var i__16331_16352 = (0);
while(true){
if((i__16331_16352 < count__16330_16351)){
var w_16353 = chunk__16329_16350.cljs$core$IIndexed$_nth$arity$2(null,i__16331_16352);
if(cljs.core.contains_QMARK_(self__.watching,w_16353)){
} else {
cljs.core.add_watch(w_16353,this$__$1,reagent.ratom._handle_change);
}

var G__16354 = seq__16328_16349;
var G__16355 = chunk__16329_16350;
var G__16356 = count__16330_16351;
var G__16357 = (i__16331_16352 + (1));
seq__16328_16349 = G__16354;
chunk__16329_16350 = G__16355;
count__16330_16351 = G__16356;
i__16331_16352 = G__16357;
continue;
} else {
var temp__4126__auto___16358 = cljs.core.seq(seq__16328_16349);
if(temp__4126__auto___16358){
var seq__16328_16359__$1 = temp__4126__auto___16358;
if(cljs.core.chunked_seq_QMARK_(seq__16328_16359__$1)){
var c__4417__auto___16360 = cljs.core.chunk_first(seq__16328_16359__$1);
var G__16361 = cljs.core.chunk_rest(seq__16328_16359__$1);
var G__16362 = c__4417__auto___16360;
var G__16363 = cljs.core.count(c__4417__auto___16360);
var G__16364 = (0);
seq__16328_16349 = G__16361;
chunk__16329_16350 = G__16362;
count__16330_16351 = G__16363;
i__16331_16352 = G__16364;
continue;
} else {
var w_16365 = cljs.core.first(seq__16328_16359__$1);
if(cljs.core.contains_QMARK_(self__.watching,w_16365)){
} else {
cljs.core.add_watch(w_16365,this$__$1,reagent.ratom._handle_change);
}

var G__16366 = cljs.core.next(seq__16328_16359__$1);
var G__16367 = null;
var G__16368 = (0);
var G__16369 = (0);
seq__16328_16349 = G__16366;
chunk__16329_16350 = G__16367;
count__16330_16351 = G__16368;
i__16331_16352 = G__16369;
continue;
}
} else {
}
}
break;
}

var seq__16332_16370 = cljs.core.seq(self__.watching);
var chunk__16333_16371 = null;
var count__16334_16372 = (0);
var i__16335_16373 = (0);
while(true){
if((i__16335_16373 < count__16334_16372)){
var w_16374 = chunk__16333_16371.cljs$core$IIndexed$_nth$arity$2(null,i__16335_16373);
if(cljs.core.contains_QMARK_(derefed,w_16374)){
} else {
cljs.core.remove_watch(w_16374,this$__$1);
}

var G__16375 = seq__16332_16370;
var G__16376 = chunk__16333_16371;
var G__16377 = count__16334_16372;
var G__16378 = (i__16335_16373 + (1));
seq__16332_16370 = G__16375;
chunk__16333_16371 = G__16376;
count__16334_16372 = G__16377;
i__16335_16373 = G__16378;
continue;
} else {
var temp__4126__auto___16379 = cljs.core.seq(seq__16332_16370);
if(temp__4126__auto___16379){
var seq__16332_16380__$1 = temp__4126__auto___16379;
if(cljs.core.chunked_seq_QMARK_(seq__16332_16380__$1)){
var c__4417__auto___16381 = cljs.core.chunk_first(seq__16332_16380__$1);
var G__16382 = cljs.core.chunk_rest(seq__16332_16380__$1);
var G__16383 = c__4417__auto___16381;
var G__16384 = cljs.core.count(c__4417__auto___16381);
var G__16385 = (0);
seq__16332_16370 = G__16382;
chunk__16333_16371 = G__16383;
count__16334_16372 = G__16384;
i__16335_16373 = G__16385;
continue;
} else {
var w_16386 = cljs.core.first(seq__16332_16380__$1);
if(cljs.core.contains_QMARK_(derefed,w_16386)){
} else {
cljs.core.remove_watch(w_16386,this$__$1);
}

var G__16387 = cljs.core.next(seq__16332_16380__$1);
var G__16388 = null;
var G__16389 = (0);
var G__16390 = (0);
seq__16332_16370 = G__16387;
chunk__16333_16371 = G__16388;
count__16334_16372 = G__16389;
i__16335_16373 = G__16390;
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
var G__16336 = this$__$1;
return goog.getUid(G__16336);
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
var seq__16337_16391 = cljs.core.seq(self__.watching);
var chunk__16338_16392 = null;
var count__16339_16393 = (0);
var i__16340_16394 = (0);
while(true){
if((i__16340_16394 < count__16339_16393)){
var w_16395 = chunk__16338_16392.cljs$core$IIndexed$_nth$arity$2(null,i__16340_16394);
cljs.core.remove_watch(w_16395,this$__$1);

var G__16396 = seq__16337_16391;
var G__16397 = chunk__16338_16392;
var G__16398 = count__16339_16393;
var G__16399 = (i__16340_16394 + (1));
seq__16337_16391 = G__16396;
chunk__16338_16392 = G__16397;
count__16339_16393 = G__16398;
i__16340_16394 = G__16399;
continue;
} else {
var temp__4126__auto___16400 = cljs.core.seq(seq__16337_16391);
if(temp__4126__auto___16400){
var seq__16337_16401__$1 = temp__4126__auto___16400;
if(cljs.core.chunked_seq_QMARK_(seq__16337_16401__$1)){
var c__4417__auto___16402 = cljs.core.chunk_first(seq__16337_16401__$1);
var G__16403 = cljs.core.chunk_rest(seq__16337_16401__$1);
var G__16404 = c__4417__auto___16402;
var G__16405 = cljs.core.count(c__4417__auto___16402);
var G__16406 = (0);
seq__16337_16391 = G__16403;
chunk__16338_16392 = G__16404;
count__16339_16393 = G__16405;
i__16340_16394 = G__16406;
continue;
} else {
var w_16407 = cljs.core.first(seq__16337_16401__$1);
cljs.core.remove_watch(w_16407,this$__$1);

var G__16408 = cljs.core.next(seq__16337_16401__$1);
var G__16409 = null;
var G__16410 = (0);
var G__16411 = (0);
seq__16337_16391 = G__16408;
chunk__16338_16392 = G__16409;
count__16339_16393 = G__16410;
i__16340_16394 = G__16411;
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
return cljs.core._reset_BANG_(a__$1,(function (){var G__16341 = self__.state;
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__16341) : f__$1.call(null,G__16341));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__16342 = self__.state;
var G__16343 = x;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__16342,G__16343) : f__$1.call(null,G__16342,G__16343));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__16344 = self__.state;
var G__16345 = x;
var G__16346 = y;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__16344,G__16345,G__16346) : f__$1.call(null,G__16344,G__16345,G__16346));
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
var G__16347_16412 = oldval;
var G__16348_16413 = newval;
(self__.on_set.cljs$core$IFn$_invoke$arity$2 ? self__.on_set.cljs$core$IFn$_invoke$arity$2(G__16347_16412,G__16348_16413) : self__.on_set.call(null,G__16347_16412,G__16348_16413));
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
var x__10958__auto___16414 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,reagent.ratom._STAR_ratom_context_STAR_], null);
if(typeof console !== 'undefined'){
console.log([cljs.core.str([cljs.core.str("dbg "),cljs.core.str("reagent.ratom"),cljs.core.str(":"),cljs.core.str(231),cljs.core.str(": "),cljs.core.str("[auto-run *ratom-context*]"),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x__10958__auto___16414], 0)))].join(''))].join(''));
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
var make_reaction__delegate = function (f,p__16415){
var map__16417 = p__16415;
var map__16417__$1 = ((cljs.core.seq_QMARK_(map__16417))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16417):map__16417);
var derefed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16417__$1,cljs.core.constant$keyword$24);
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16417__$1,cljs.core.constant$keyword$25);
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16417__$1,cljs.core.constant$keyword$26);
var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16417__$1,cljs.core.constant$keyword$27);
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
var p__16415 = null;
if (arguments.length > 1) {
  p__16415 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return make_reaction__delegate.call(this,f,p__16415);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__16418){
var f = cljs.core.first(arglist__16418);
var p__16415 = cljs.core.rest(arglist__16418);
return make_reaction__delegate(f,p__16415);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;
