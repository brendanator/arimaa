// Compiled by ClojureScript 0.0-2657 {}
goog.provide('reagent.ratom');
goog.require('cljs.core');
reagent.ratom.debug = false;
reagent.ratom._running = (function (){var G__28103 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28103) : cljs.core.atom.call(null,G__28103));
})();
reagent.ratom.running = (function running(){
var G__28105 = reagent.ratom._running;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28105) : cljs.core.deref.call(null,G__28105));
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_28107 = reagent.ratom._STAR_ratom_context_STAR_;
try{reagent.ratom._STAR_ratom_context_STAR_ = obj;

return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_28107;
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
var G__28108 = this$__$1;
return goog.getUid(G__28108);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f){
var G__28109_28120 = key;
var G__28110_28121 = this$__$1;
var G__28111_28122 = oldval;
var G__28112_28123 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__28109_28120,G__28110_28121,G__28111_28122,G__28112_28123) : f.call(null,G__28109_28120,G__28110_28121,G__28111_28122,G__28112_28123));

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
return cljs.core._reset_BANG_(a__$1,(function (){var G__28113 = self__.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28113) : f.call(null,G__28113));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__28114 = self__.state;
var G__28115 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__28114,G__28115) : f.call(null,G__28114,G__28115));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__28116 = self__.state;
var G__28117 = x;
var G__28118 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__28116,G__28117,G__28118) : f.call(null,G__28116,G__28117,G__28118));
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
if(cljs.core.truth_((function (){var G__28119 = new_value;
return (self__.validator.cljs$core$IFn$_invoke$arity$1 ? self__.validator.cljs$core$IFn$_invoke$arity$1(G__28119) : self__.validator.call(null,G__28119));
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

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"reagent.ratom/RAtom");
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
var G__28127__delegate = function (x,p__28124){
var map__28126 = p__28124;
var map__28126__$1 = ((cljs.core.seq_QMARK_(map__28126))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28126):map__28126);
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28126__$1,cljs.core.constant$keyword$13);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28126__$1,cljs.core.constant$keyword$3);
return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__28127 = function (x,var_args){
var p__28124 = null;
if (arguments.length > 1) {
  p__28124 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__28127__delegate.call(this,x,p__28124);};
G__28127.cljs$lang$maxFixedArity = 1;
G__28127.cljs$lang$applyTo = (function (arglist__28128){
var x = cljs.core.first(arglist__28128);
var p__28124 = cljs.core.rest(arglist__28128);
return G__28127__delegate(x,p__28124);
});
G__28127.cljs$core$IFn$_invoke$arity$variadic = G__28127__delegate;
return G__28127;
})()
;
atom = function(x,var_args){
var p__28124 = var_args;
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
var G__28129 = this$__$1;
return goog.getUid(G__28129);
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
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__28130 = self__.ratom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28130) : cljs.core.deref.call(null,G__28130));
})(),self__.path);
});

reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RCursor.cljs$lang$type = true;

reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";

reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"reagent.ratom/RCursor");
});

reagent.ratom.__GT_RCursor = (function __GT_RCursor(path,ratom){
return (new reagent.ratom.RCursor(path,ratom));
});

reagent.ratom.cursor = (function cursor(path,ra){
return (new reagent.ratom.RCursor(path,ra));
});

reagent.ratom.IDisposable = (function (){var obj28132 = {};
return obj28132;
})();

reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){
if((function (){var and__3719__auto__ = this$;
if(and__3719__auto__){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else {
return and__3719__auto__;
}
})()){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__4375__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3731__auto__ = (reagent.ratom.dispose_BANG_[(function (){var G__28136 = x__4375__auto__;
return goog.typeOf(G__28136);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IRunnable = (function (){var obj28138 = {};
return obj28138;
})();

reagent.ratom.run = (function run(this$){
if((function (){var and__3719__auto__ = this$;
if(and__3719__auto__){
return this$.reagent$ratom$IRunnable$run$arity$1;
} else {
return and__3719__auto__;
}
})()){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__4375__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3731__auto__ = (reagent.ratom.run[(function (){var G__28142 = x__4375__auto__;
return goog.typeOf(G__28142);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (reagent.ratom.run["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IRunnable.run",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IComputedImpl = (function (){var obj28144 = {};
return obj28144;
})();

reagent.ratom._update_watching = (function _update_watching(this$,derefed){
if((function (){var and__3719__auto__ = this$;
if(and__3719__auto__){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else {
return and__3719__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else {
var x__4375__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3731__auto__ = (reagent.ratom._update_watching[(function (){var G__28148 = x__4375__auto__;
return goog.typeOf(G__28148);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (reagent.ratom._update_watching["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});

reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){
if((function (){var and__3719__auto__ = k;
if(and__3719__auto__){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else {
return and__3719__auto__;
}
})()){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else {
var x__4375__auto__ = (((k == null))?null:k);
return (function (){var or__3731__auto__ = (reagent.ratom._handle_change[(function (){var G__28152 = x__4375__auto__;
return goog.typeOf(G__28152);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (reagent.ratom._handle_change["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});

reagent.ratom.call_watches = (function call_watches(obs,watches,oldval,newval){
return cljs.core.reduce_kv((function (_,key,f){
var G__28157_28161 = key;
var G__28158_28162 = obs;
var G__28159_28163 = oldval;
var G__28160_28164 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__28157_28161,G__28158_28162,G__28159_28163,G__28160_28164) : f.call(null,G__28157_28161,G__28158_28162,G__28159_28163,G__28160_28164));

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
if(cljs.core.truth_((function (){var and__3719__auto__ = self__.active_QMARK_;
if(cljs.core.truth_(and__3719__auto__)){
return (cljs.core.not(self__.dirty_QMARK_)) && (!((oldval === newval)));
} else {
return and__3719__auto__;
}
})())){
self__.dirty_QMARK_ = true;

return (function (){var or__3731__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
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
var seq__28165_28186 = cljs.core.seq(derefed);
var chunk__28166_28187 = null;
var count__28167_28188 = (0);
var i__28168_28189 = (0);
while(true){
if((i__28168_28189 < count__28167_28188)){
var w_28190 = chunk__28166_28187.cljs$core$IIndexed$_nth$arity$2(null,i__28168_28189);
if(cljs.core.contains_QMARK_(self__.watching,w_28190)){
} else {
cljs.core.add_watch(w_28190,this$__$1,reagent.ratom._handle_change);
}

var G__28191 = seq__28165_28186;
var G__28192 = chunk__28166_28187;
var G__28193 = count__28167_28188;
var G__28194 = (i__28168_28189 + (1));
seq__28165_28186 = G__28191;
chunk__28166_28187 = G__28192;
count__28167_28188 = G__28193;
i__28168_28189 = G__28194;
continue;
} else {
var temp__4126__auto___28195 = cljs.core.seq(seq__28165_28186);
if(temp__4126__auto___28195){
var seq__28165_28196__$1 = temp__4126__auto___28195;
if(cljs.core.chunked_seq_QMARK_(seq__28165_28196__$1)){
var c__4518__auto___28197 = cljs.core.chunk_first(seq__28165_28196__$1);
var G__28198 = cljs.core.chunk_rest(seq__28165_28196__$1);
var G__28199 = c__4518__auto___28197;
var G__28200 = cljs.core.count(c__4518__auto___28197);
var G__28201 = (0);
seq__28165_28186 = G__28198;
chunk__28166_28187 = G__28199;
count__28167_28188 = G__28200;
i__28168_28189 = G__28201;
continue;
} else {
var w_28202 = cljs.core.first(seq__28165_28196__$1);
if(cljs.core.contains_QMARK_(self__.watching,w_28202)){
} else {
cljs.core.add_watch(w_28202,this$__$1,reagent.ratom._handle_change);
}

var G__28203 = cljs.core.next(seq__28165_28196__$1);
var G__28204 = null;
var G__28205 = (0);
var G__28206 = (0);
seq__28165_28186 = G__28203;
chunk__28166_28187 = G__28204;
count__28167_28188 = G__28205;
i__28168_28189 = G__28206;
continue;
}
} else {
}
}
break;
}

var seq__28169_28207 = cljs.core.seq(self__.watching);
var chunk__28170_28208 = null;
var count__28171_28209 = (0);
var i__28172_28210 = (0);
while(true){
if((i__28172_28210 < count__28171_28209)){
var w_28211 = chunk__28170_28208.cljs$core$IIndexed$_nth$arity$2(null,i__28172_28210);
if(cljs.core.contains_QMARK_(derefed,w_28211)){
} else {
cljs.core.remove_watch(w_28211,this$__$1);
}

var G__28212 = seq__28169_28207;
var G__28213 = chunk__28170_28208;
var G__28214 = count__28171_28209;
var G__28215 = (i__28172_28210 + (1));
seq__28169_28207 = G__28212;
chunk__28170_28208 = G__28213;
count__28171_28209 = G__28214;
i__28172_28210 = G__28215;
continue;
} else {
var temp__4126__auto___28216 = cljs.core.seq(seq__28169_28207);
if(temp__4126__auto___28216){
var seq__28169_28217__$1 = temp__4126__auto___28216;
if(cljs.core.chunked_seq_QMARK_(seq__28169_28217__$1)){
var c__4518__auto___28218 = cljs.core.chunk_first(seq__28169_28217__$1);
var G__28219 = cljs.core.chunk_rest(seq__28169_28217__$1);
var G__28220 = c__4518__auto___28218;
var G__28221 = cljs.core.count(c__4518__auto___28218);
var G__28222 = (0);
seq__28169_28207 = G__28219;
chunk__28170_28208 = G__28220;
count__28171_28209 = G__28221;
i__28172_28210 = G__28222;
continue;
} else {
var w_28223 = cljs.core.first(seq__28169_28217__$1);
if(cljs.core.contains_QMARK_(derefed,w_28223)){
} else {
cljs.core.remove_watch(w_28223,this$__$1);
}

var G__28224 = cljs.core.next(seq__28169_28217__$1);
var G__28225 = null;
var G__28226 = (0);
var G__28227 = (0);
seq__28169_28207 = G__28224;
chunk__28170_28208 = G__28225;
count__28171_28209 = G__28226;
i__28172_28210 = G__28227;
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
var G__28173 = this$__$1;
return goog.getUid(G__28173);
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
var seq__28174_28228 = cljs.core.seq(self__.watching);
var chunk__28175_28229 = null;
var count__28176_28230 = (0);
var i__28177_28231 = (0);
while(true){
if((i__28177_28231 < count__28176_28230)){
var w_28232 = chunk__28175_28229.cljs$core$IIndexed$_nth$arity$2(null,i__28177_28231);
cljs.core.remove_watch(w_28232,this$__$1);

var G__28233 = seq__28174_28228;
var G__28234 = chunk__28175_28229;
var G__28235 = count__28176_28230;
var G__28236 = (i__28177_28231 + (1));
seq__28174_28228 = G__28233;
chunk__28175_28229 = G__28234;
count__28176_28230 = G__28235;
i__28177_28231 = G__28236;
continue;
} else {
var temp__4126__auto___28237 = cljs.core.seq(seq__28174_28228);
if(temp__4126__auto___28237){
var seq__28174_28238__$1 = temp__4126__auto___28237;
if(cljs.core.chunked_seq_QMARK_(seq__28174_28238__$1)){
var c__4518__auto___28239 = cljs.core.chunk_first(seq__28174_28238__$1);
var G__28240 = cljs.core.chunk_rest(seq__28174_28238__$1);
var G__28241 = c__4518__auto___28239;
var G__28242 = cljs.core.count(c__4518__auto___28239);
var G__28243 = (0);
seq__28174_28228 = G__28240;
chunk__28175_28229 = G__28241;
count__28176_28230 = G__28242;
i__28177_28231 = G__28243;
continue;
} else {
var w_28244 = cljs.core.first(seq__28174_28238__$1);
cljs.core.remove_watch(w_28244,this$__$1);

var G__28245 = cljs.core.next(seq__28174_28238__$1);
var G__28246 = null;
var G__28247 = (0);
var G__28248 = (0);
seq__28174_28228 = G__28245;
chunk__28175_28229 = G__28246;
count__28176_28230 = G__28247;
i__28177_28231 = G__28248;
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
return cljs.core._reset_BANG_(a__$1,(function (){var G__28178 = self__.state;
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__28178) : f__$1.call(null,G__28178));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__28179 = self__.state;
var G__28180 = x;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__28179,G__28180) : f__$1.call(null,G__28179,G__28180));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__28181 = self__.state;
var G__28182 = x;
var G__28183 = y;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__28181,G__28182,G__28183) : f__$1.call(null,G__28181,G__28182,G__28183));
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
var G__28184_28249 = oldval;
var G__28185_28250 = newval;
(self__.on_set.cljs$core$IFn$_invoke$arity$2 ? self__.on_set.cljs$core$IFn$_invoke$arity$2(G__28184_28249,G__28185_28250) : self__.on_set.call(null,G__28184_28249,G__28185_28250));
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
if(cljs.core.not((function (){var or__3731__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
return reagent.ratom._STAR_ratom_context_STAR_;
}
})())){
var x__15680__auto___28251 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,reagent.ratom._STAR_ratom_context_STAR_], null);
if(typeof console !== 'undefined'){
console.log([cljs.core.str([cljs.core.str("dbg "),cljs.core.str("reagent.ratom"),cljs.core.str(":"),cljs.core.str(231),cljs.core.str(": "),cljs.core.str("[auto-run *ratom-context*]"),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x__15680__auto___28251], 0)))].join(''))].join(''));
} else {
}

} else {
}

if(cljs.core.truth_((function (){var or__3731__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
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

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"reagent.ratom/Reaction");
});

reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});

/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__28252){
var map__28254 = p__28252;
var map__28254__$1 = ((cljs.core.seq_QMARK_(map__28254))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28254):map__28254);
var derefed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28254__$1,cljs.core.constant$keyword$225);
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28254__$1,cljs.core.constant$keyword$226);
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28254__$1,cljs.core.constant$keyword$227);
var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28254__$1,cljs.core.constant$keyword$228);
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
var p__28252 = null;
if (arguments.length > 1) {
  p__28252 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return make_reaction__delegate.call(this,f,p__28252);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__28255){
var f = cljs.core.first(arglist__28255);
var p__28252 = cljs.core.rest(arglist__28255);
return make_reaction__delegate(f,p__28252);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;
