// Compiled by ClojureScript 0.0-2727 {}
goog.provide('reagent.ratom');
goog.require('cljs.core');
reagent.ratom.debug = false;
reagent.ratom._running = (function (){var G__28138 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28138) : cljs.core.atom.call(null,G__28138));
})();
reagent.ratom.running = (function running(){
var G__28140 = reagent.ratom._running;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28140) : cljs.core.deref.call(null,G__28140));
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_28142 = reagent.ratom._STAR_ratom_context_STAR_;
try{reagent.ratom._STAR_ratom_context_STAR_ = obj;

return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_28142;
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
var G__28143 = this$__$1;
return goog.getUid(G__28143);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f){
var G__28144_28155 = key;
var G__28145_28156 = this$__$1;
var G__28146_28157 = oldval;
var G__28147_28158 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__28144_28155,G__28145_28156,G__28146_28157,G__28147_28158) : f.call(null,G__28144_28155,G__28145_28156,G__28146_28157,G__28147_28158));

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
return cljs.core._reset_BANG_(a__$1,(function (){var G__28148 = self__.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28148) : f.call(null,G__28148));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__28149 = self__.state;
var G__28150 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__28149,G__28150) : f.call(null,G__28149,G__28150));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__28151 = self__.state;
var G__28152 = x;
var G__28153 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__28151,G__28152,G__28153) : f.call(null,G__28151,G__28152,G__28153));
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
if(cljs.core.truth_((function (){var G__28154 = new_value;
return (self__.validator.cljs$core$IFn$_invoke$arity$1 ? self__.validator.cljs$core$IFn$_invoke$arity$1(G__28154) : self__.validator.call(null,G__28154));
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
var G__28162__delegate = function (x,p__28159){
var map__28161 = p__28159;
var map__28161__$1 = ((cljs.core.seq_QMARK_(map__28161))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28161):map__28161);
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28161__$1,cljs.core.constant$keyword$13);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28161__$1,cljs.core.constant$keyword$3);
return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__28162 = function (x,var_args){
var p__28159 = null;
if (arguments.length > 1) {
var G__28163__i = 0, G__28163__a = new Array(arguments.length -  1);
while (G__28163__i < G__28163__a.length) {G__28163__a[G__28163__i] = arguments[G__28163__i + 1]; ++G__28163__i;}
  p__28159 = new cljs.core.IndexedSeq(G__28163__a,0);
} 
return G__28162__delegate.call(this,x,p__28159);};
G__28162.cljs$lang$maxFixedArity = 1;
G__28162.cljs$lang$applyTo = (function (arglist__28164){
var x = cljs.core.first(arglist__28164);
var p__28159 = cljs.core.rest(arglist__28164);
return G__28162__delegate(x,p__28159);
});
G__28162.cljs$core$IFn$_invoke$arity$variadic = G__28162__delegate;
return G__28162;
})()
;
atom = function(x,var_args){
var p__28159 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
var G__28165 = null;
if (arguments.length > 1) {
var G__28166__i = 0, G__28166__a = new Array(arguments.length -  1);
while (G__28166__i < G__28166__a.length) {G__28166__a[G__28166__i] = arguments[G__28166__i + 1]; ++G__28166__i;}
G__28165 = new cljs.core.IndexedSeq(G__28166__a,0);
}
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, G__28165);
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
var G__28167 = this$__$1;
return goog.getUid(G__28167);
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
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__28168 = self__.ratom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28168) : cljs.core.deref.call(null,G__28168));
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

reagent.ratom.IDisposable = (function (){var obj28170 = {};
return obj28170;
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
return (function (){var or__3750__auto__ = (reagent.ratom.dispose_BANG_[(function (){var G__28174 = x__4394__auto__;
return goog.typeOf(G__28174);
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


reagent.ratom.IRunnable = (function (){var obj28176 = {};
return obj28176;
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
return (function (){var or__3750__auto__ = (reagent.ratom.run[(function (){var G__28180 = x__4394__auto__;
return goog.typeOf(G__28180);
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


reagent.ratom.IComputedImpl = (function (){var obj28182 = {};
return obj28182;
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
return (function (){var or__3750__auto__ = (reagent.ratom._update_watching[(function (){var G__28186 = x__4394__auto__;
return goog.typeOf(G__28186);
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
return (function (){var or__3750__auto__ = (reagent.ratom._handle_change[(function (){var G__28190 = x__4394__auto__;
return goog.typeOf(G__28190);
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
var G__28195_28199 = key;
var G__28196_28200 = obs;
var G__28197_28201 = oldval;
var G__28198_28202 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__28195_28199,G__28196_28200,G__28197_28201,G__28198_28202) : f.call(null,G__28195_28199,G__28196_28200,G__28197_28201,G__28198_28202));

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
var seq__28203_28224 = cljs.core.seq(derefed);
var chunk__28204_28225 = null;
var count__28205_28226 = (0);
var i__28206_28227 = (0);
while(true){
if((i__28206_28227 < count__28205_28226)){
var w_28228 = chunk__28204_28225.cljs$core$IIndexed$_nth$arity$2(null,i__28206_28227);
if(cljs.core.contains_QMARK_(self__.watching,w_28228)){
} else {
cljs.core.add_watch(w_28228,this$__$1,reagent.ratom._handle_change);
}

var G__28229 = seq__28203_28224;
var G__28230 = chunk__28204_28225;
var G__28231 = count__28205_28226;
var G__28232 = (i__28206_28227 + (1));
seq__28203_28224 = G__28229;
chunk__28204_28225 = G__28230;
count__28205_28226 = G__28231;
i__28206_28227 = G__28232;
continue;
} else {
var temp__4126__auto___28233 = cljs.core.seq(seq__28203_28224);
if(temp__4126__auto___28233){
var seq__28203_28234__$1 = temp__4126__auto___28233;
if(cljs.core.chunked_seq_QMARK_(seq__28203_28234__$1)){
var c__4537__auto___28235 = cljs.core.chunk_first(seq__28203_28234__$1);
var G__28236 = cljs.core.chunk_rest(seq__28203_28234__$1);
var G__28237 = c__4537__auto___28235;
var G__28238 = cljs.core.count(c__4537__auto___28235);
var G__28239 = (0);
seq__28203_28224 = G__28236;
chunk__28204_28225 = G__28237;
count__28205_28226 = G__28238;
i__28206_28227 = G__28239;
continue;
} else {
var w_28240 = cljs.core.first(seq__28203_28234__$1);
if(cljs.core.contains_QMARK_(self__.watching,w_28240)){
} else {
cljs.core.add_watch(w_28240,this$__$1,reagent.ratom._handle_change);
}

var G__28241 = cljs.core.next(seq__28203_28234__$1);
var G__28242 = null;
var G__28243 = (0);
var G__28244 = (0);
seq__28203_28224 = G__28241;
chunk__28204_28225 = G__28242;
count__28205_28226 = G__28243;
i__28206_28227 = G__28244;
continue;
}
} else {
}
}
break;
}

var seq__28207_28245 = cljs.core.seq(self__.watching);
var chunk__28208_28246 = null;
var count__28209_28247 = (0);
var i__28210_28248 = (0);
while(true){
if((i__28210_28248 < count__28209_28247)){
var w_28249 = chunk__28208_28246.cljs$core$IIndexed$_nth$arity$2(null,i__28210_28248);
if(cljs.core.contains_QMARK_(derefed,w_28249)){
} else {
cljs.core.remove_watch(w_28249,this$__$1);
}

var G__28250 = seq__28207_28245;
var G__28251 = chunk__28208_28246;
var G__28252 = count__28209_28247;
var G__28253 = (i__28210_28248 + (1));
seq__28207_28245 = G__28250;
chunk__28208_28246 = G__28251;
count__28209_28247 = G__28252;
i__28210_28248 = G__28253;
continue;
} else {
var temp__4126__auto___28254 = cljs.core.seq(seq__28207_28245);
if(temp__4126__auto___28254){
var seq__28207_28255__$1 = temp__4126__auto___28254;
if(cljs.core.chunked_seq_QMARK_(seq__28207_28255__$1)){
var c__4537__auto___28256 = cljs.core.chunk_first(seq__28207_28255__$1);
var G__28257 = cljs.core.chunk_rest(seq__28207_28255__$1);
var G__28258 = c__4537__auto___28256;
var G__28259 = cljs.core.count(c__4537__auto___28256);
var G__28260 = (0);
seq__28207_28245 = G__28257;
chunk__28208_28246 = G__28258;
count__28209_28247 = G__28259;
i__28210_28248 = G__28260;
continue;
} else {
var w_28261 = cljs.core.first(seq__28207_28255__$1);
if(cljs.core.contains_QMARK_(derefed,w_28261)){
} else {
cljs.core.remove_watch(w_28261,this$__$1);
}

var G__28262 = cljs.core.next(seq__28207_28255__$1);
var G__28263 = null;
var G__28264 = (0);
var G__28265 = (0);
seq__28207_28245 = G__28262;
chunk__28208_28246 = G__28263;
count__28209_28247 = G__28264;
i__28210_28248 = G__28265;
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
var G__28211 = this$__$1;
return goog.getUid(G__28211);
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
var seq__28212_28266 = cljs.core.seq(self__.watching);
var chunk__28213_28267 = null;
var count__28214_28268 = (0);
var i__28215_28269 = (0);
while(true){
if((i__28215_28269 < count__28214_28268)){
var w_28270 = chunk__28213_28267.cljs$core$IIndexed$_nth$arity$2(null,i__28215_28269);
cljs.core.remove_watch(w_28270,this$__$1);

var G__28271 = seq__28212_28266;
var G__28272 = chunk__28213_28267;
var G__28273 = count__28214_28268;
var G__28274 = (i__28215_28269 + (1));
seq__28212_28266 = G__28271;
chunk__28213_28267 = G__28272;
count__28214_28268 = G__28273;
i__28215_28269 = G__28274;
continue;
} else {
var temp__4126__auto___28275 = cljs.core.seq(seq__28212_28266);
if(temp__4126__auto___28275){
var seq__28212_28276__$1 = temp__4126__auto___28275;
if(cljs.core.chunked_seq_QMARK_(seq__28212_28276__$1)){
var c__4537__auto___28277 = cljs.core.chunk_first(seq__28212_28276__$1);
var G__28278 = cljs.core.chunk_rest(seq__28212_28276__$1);
var G__28279 = c__4537__auto___28277;
var G__28280 = cljs.core.count(c__4537__auto___28277);
var G__28281 = (0);
seq__28212_28266 = G__28278;
chunk__28213_28267 = G__28279;
count__28214_28268 = G__28280;
i__28215_28269 = G__28281;
continue;
} else {
var w_28282 = cljs.core.first(seq__28212_28276__$1);
cljs.core.remove_watch(w_28282,this$__$1);

var G__28283 = cljs.core.next(seq__28212_28276__$1);
var G__28284 = null;
var G__28285 = (0);
var G__28286 = (0);
seq__28212_28266 = G__28283;
chunk__28213_28267 = G__28284;
count__28214_28268 = G__28285;
i__28215_28269 = G__28286;
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
return cljs.core._reset_BANG_(a__$1,(function (){var G__28216 = self__.state;
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__28216) : f__$1.call(null,G__28216));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__28217 = self__.state;
var G__28218 = x;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__28217,G__28218) : f__$1.call(null,G__28217,G__28218));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__28219 = self__.state;
var G__28220 = x;
var G__28221 = y;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__28219,G__28220,G__28221) : f__$1.call(null,G__28219,G__28220,G__28221));
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
var G__28222_28287 = oldval;
var G__28223_28288 = newval;
(self__.on_set.cljs$core$IFn$_invoke$arity$2 ? self__.on_set.cljs$core$IFn$_invoke$arity$2(G__28222_28287,G__28223_28288) : self__.on_set.call(null,G__28222_28287,G__28223_28288));
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
var x__14998__auto___28289 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,reagent.ratom._STAR_ratom_context_STAR_], null);
if(typeof console !== 'undefined'){
console.log([cljs.core.str([cljs.core.str("dbg "),cljs.core.str("reagent.ratom"),cljs.core.str(":"),cljs.core.str(231),cljs.core.str(": "),cljs.core.str("[auto-run *ratom-context*]"),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x__14998__auto___28289], 0)))].join(''))].join(''));
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
var make_reaction__delegate = function (f,p__28290){
var map__28292 = p__28290;
var map__28292__$1 = ((cljs.core.seq_QMARK_(map__28292))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28292):map__28292);
var derefed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28292__$1,cljs.core.constant$keyword$118);
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28292__$1,cljs.core.constant$keyword$119);
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28292__$1,cljs.core.constant$keyword$120);
var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28292__$1,cljs.core.constant$keyword$121);
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
var p__28290 = null;
if (arguments.length > 1) {
var G__28293__i = 0, G__28293__a = new Array(arguments.length -  1);
while (G__28293__i < G__28293__a.length) {G__28293__a[G__28293__i] = arguments[G__28293__i + 1]; ++G__28293__i;}
  p__28290 = new cljs.core.IndexedSeq(G__28293__a,0);
} 
return make_reaction__delegate.call(this,f,p__28290);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__28294){
var f = cljs.core.first(arglist__28294);
var p__28290 = cljs.core.rest(arglist__28294);
return make_reaction__delegate(f,p__28290);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;
