// Compiled by ClojureScript 0.0-2371
goog.provide('reagent.ratom');
goog.require('cljs.core');
reagent.ratom.debug = false;
reagent.ratom._running = (function (){var G__15382 = (0);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15382) : cljs.core.atom.call(null,G__15382));
})();
reagent.ratom.running = (function running(){var G__15384 = reagent.ratom._running;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15384) : cljs.core.deref.call(null,G__15384));
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){obj.cljsCaptured = null;
var _STAR_ratom_context_STAR_15386 = reagent.ratom._STAR_ratom_context_STAR_;try{reagent.ratom._STAR_ratom_context_STAR_ = obj;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_15386;
}});
reagent.ratom.captured = (function captured(obj){var c = obj.cljsCaptured;obj.cljsCaptured = null;
return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){var obj = reagent.ratom._STAR_ratom_context_STAR_;if((obj == null))
{return null;
} else
{var captured = obj.cljsCaptured;return obj.cljsCaptured = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
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
reagent.ratom.RAtom.cljs$lang$type = true;
reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";
reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"reagent.ratom/RAtom");
});
reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__15387 = this$__$1;return goog.getUid(G__15387);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f){var G__15388_15399 = key;var G__15389_15400 = this$__$1;var G__15390_15401 = oldval;var G__15391_15402 = newval;(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__15388_15399,G__15389_15400,G__15390_15401,G__15391_15402) : f.call(null,G__15388_15399,G__15389_15400,G__15390_15401,G__15391_15402));
return null;
});})(this$__$1))
,null,self__.watches);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});
reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var self__ = this;
var a__$1 = this;cljs.core._write(writer,"#<Atom: ");
cljs.core.pr_writer(self__.state,writer,opts);
return cljs.core._write(writer,">");
});
reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.meta;
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,(function (){var G__15392 = self__.state;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15392) : f.call(null,G__15392));
})());
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,(function (){var G__15393 = self__.state;var G__15394 = x;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15393,G__15394) : f.call(null,G__15393,G__15394));
})());
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,(function (){var G__15395 = self__.state;var G__15396 = x;var G__15397 = y;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__15395,G__15396,G__15397) : f.call(null,G__15395,G__15396,G__15397));
})());
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});
reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){var self__ = this;
var a__$1 = this;if((self__.validator == null))
{} else
{if(cljs.core.truth_((function (){var G__15398 = new_value;return (self__.validator.cljs$core$IFn$_invoke$arity$1 ? self__.validator.cljs$core$IFn$_invoke$arity$1(G__15398) : self__.validator.call(null,G__15398));
})()))
{} else
{throw (new Error(("Assert failed: Validator rejected reference state\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null))], 0))))));
}
}
var old_value = self__.state;self__.state = new_value;
if((self__.watches == null))
{} else
{cljs.core._notify_watches(a__$1,old_value,new_value);
}
return new_value;
});
reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;reagent.ratom.notify_deref_watcher_BANG_(this$__$1);
return self__.state;
});
reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){return (new reagent.ratom.RAtom(state,meta,validator,watches));
});
/**
* Like clojure.core/atom, except that it keeps track of derefs.
* @param {...*} var_args
*/
reagent.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){return (new reagent.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__15406__delegate = function (x,p__15403){var map__15405 = p__15403;var map__15405__$1 = ((cljs.core.seq_QMARK_(map__15405))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15405):map__15405);var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15405__$1,cljs.core.constant$keyword$8);var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15405__$1,cljs.core.constant$keyword$3);return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__15406 = function (x,var_args){
var p__15403 = null;if (arguments.length > 1) {
  p__15403 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__15406__delegate.call(this,x,p__15403);};
G__15406.cljs$lang$maxFixedArity = 1;
G__15406.cljs$lang$applyTo = (function (arglist__15407){
var x = cljs.core.first(arglist__15407);
var p__15403 = cljs.core.rest(arglist__15407);
return G__15406__delegate(x,p__15403);
});
G__15406.cljs$core$IFn$_invoke$arity$variadic = G__15406__delegate;
return G__15406;
})()
;
atom = function(x,var_args){
var p__15403 = var_args;
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
reagent.ratom.RCursor.cljs$lang$type = true;
reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";
reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"reagent.ratom/RCursor");
});
reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__15408 = this$__$1;return goog.getUid(G__15408);
});
reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;return cljs.core._notify_watches(self__.ratom,oldval,newval);
});
reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return cljs.core._add_watch(self__.ratom,key,f);
});
reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return cljs.core._remove_watch(self__.ratom,key);
});
reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var self__ = this;
var a__$1 = this;cljs.core._write(writer,"#<Cursor: ");
cljs.core.pr_writer(self__.path,writer,opts);
cljs.core._write(writer," ");
cljs.core.pr_writer(self__.ratom,writer,opts);
return cljs.core._write(writer,">");
});
reagent.ratom.RCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core._meta(self__.ratom);
});
reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){var self__ = this;
var a__$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.ratom,cljs.core.update_in,self__.path,f);
});
reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){var self__ = this;
var a__$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.ratom,cljs.core.update_in,self__.path,f,cljs.core.array_seq([x], 0));
});
reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){var self__ = this;
var a__$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.ratom,cljs.core.update_in,self__.path,f,cljs.core.array_seq([x,y], 0));
});
reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.ratom,cljs.core.update_in,self__.path,f,cljs.core.array_seq([x,y,more], 0));
});
reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){var self__ = this;
var a__$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.ratom,cljs.core.assoc_in,self__.path,new_value);
});
reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__15409 = self__.ratom;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15409) : cljs.core.deref.call(null,G__15409));
})(),self__.path);
});
reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.__GT_RCursor = (function __GT_RCursor(path,ratom){return (new reagent.ratom.RCursor(path,ratom));
});
reagent.ratom.cursor = (function cursor(path,ra){return (new reagent.ratom.RCursor(path,ra));
});
reagent.ratom.IDisposable = (function (){var obj15411 = {};return obj15411;
})();
reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (reagent.ratom.dispose_BANG_[(function (){var G__15415 = x__4277__auto__;return goog.typeOf(G__15415);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});
reagent.ratom.IRunnable = (function (){var obj15417 = {};return obj15417;
})();
reagent.ratom.run = (function run(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.reagent$ratom$IRunnable$run$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (reagent.ratom.run[(function (){var G__15421 = x__4277__auto__;return goog.typeOf(G__15421);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (reagent.ratom.run["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IRunnable.run",this$);
}
}
})().call(null,this$);
}
});
reagent.ratom.IComputedImpl = (function (){var obj15423 = {};return obj15423;
})();
reagent.ratom._update_watching = (function _update_watching(this$,derefed){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else
{return and__3628__auto__;
}
})())
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (reagent.ratom._update_watching[(function (){var G__15427 = x__4277__auto__;return goog.typeOf(G__15427);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (reagent.ratom._update_watching["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});
reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){if((function (){var and__3628__auto__ = k;if(and__3628__auto__)
{return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else
{return and__3628__auto__;
}
})())
{return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else
{var x__4277__auto__ = (((k == null))?null:k);return (function (){var or__3640__auto__ = (reagent.ratom._handle_change[(function (){var G__15431 = x__4277__auto__;return goog.typeOf(G__15431);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (reagent.ratom._handle_change["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});
reagent.ratom.call_watches = (function call_watches(obs,watches,oldval,newval){return cljs.core.reduce_kv((function (_,key,f){var G__15436_15440 = key;var G__15437_15441 = obs;var G__15438_15442 = oldval;var G__15439_15443 = newval;(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__15436_15440,G__15437_15441,G__15438_15442,G__15439_15443) : f.call(null,G__15436_15440,G__15437_15441,G__15438_15442,G__15439_15443));
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
reagent.ratom.Reaction.cljs$lang$type = true;
reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";
reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"reagent.ratom/Reaction");
});
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_((function (){var and__3628__auto__ = self__.active_QMARK_;if(cljs.core.truth_(and__3628__auto__))
{return (cljs.core.not(self__.dirty_QMARK_)) && (!((oldval === newval)));
} else
{return and__3628__auto__;
}
})()))
{self__.dirty_QMARK_ = true;
return (function (){var or__3640__auto__ = self__.auto_run;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return reagent.ratom.run;
}
})().call(null,this$__$1);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){var self__ = this;
var this$__$1 = this;var seq__15444_15465 = cljs.core.seq(derefed);var chunk__15445_15466 = null;var count__15446_15467 = (0);var i__15447_15468 = (0);while(true){
if((i__15447_15468 < count__15446_15467))
{var w_15469 = chunk__15445_15466.cljs$core$IIndexed$_nth$arity$2(null,i__15447_15468);if(cljs.core.contains_QMARK_(self__.watching,w_15469))
{} else
{cljs.core.add_watch(w_15469,this$__$1,reagent.ratom._handle_change);
}
{
var G__15470 = seq__15444_15465;
var G__15471 = chunk__15445_15466;
var G__15472 = count__15446_15467;
var G__15473 = (i__15447_15468 + (1));
seq__15444_15465 = G__15470;
chunk__15445_15466 = G__15471;
count__15446_15467 = G__15472;
i__15447_15468 = G__15473;
continue;
}
} else
{var temp__4126__auto___15474 = cljs.core.seq(seq__15444_15465);if(temp__4126__auto___15474)
{var seq__15444_15475__$1 = temp__4126__auto___15474;if(cljs.core.chunked_seq_QMARK_(seq__15444_15475__$1))
{var c__4410__auto___15476 = cljs.core.chunk_first(seq__15444_15475__$1);{
var G__15477 = cljs.core.chunk_rest(seq__15444_15475__$1);
var G__15478 = c__4410__auto___15476;
var G__15479 = cljs.core.count(c__4410__auto___15476);
var G__15480 = (0);
seq__15444_15465 = G__15477;
chunk__15445_15466 = G__15478;
count__15446_15467 = G__15479;
i__15447_15468 = G__15480;
continue;
}
} else
{var w_15481 = cljs.core.first(seq__15444_15475__$1);if(cljs.core.contains_QMARK_(self__.watching,w_15481))
{} else
{cljs.core.add_watch(w_15481,this$__$1,reagent.ratom._handle_change);
}
{
var G__15482 = cljs.core.next(seq__15444_15475__$1);
var G__15483 = null;
var G__15484 = (0);
var G__15485 = (0);
seq__15444_15465 = G__15482;
chunk__15445_15466 = G__15483;
count__15446_15467 = G__15484;
i__15447_15468 = G__15485;
continue;
}
}
} else
{}
}
break;
}
var seq__15448_15486 = cljs.core.seq(self__.watching);var chunk__15449_15487 = null;var count__15450_15488 = (0);var i__15451_15489 = (0);while(true){
if((i__15451_15489 < count__15450_15488))
{var w_15490 = chunk__15449_15487.cljs$core$IIndexed$_nth$arity$2(null,i__15451_15489);if(cljs.core.contains_QMARK_(derefed,w_15490))
{} else
{cljs.core.remove_watch(w_15490,this$__$1);
}
{
var G__15491 = seq__15448_15486;
var G__15492 = chunk__15449_15487;
var G__15493 = count__15450_15488;
var G__15494 = (i__15451_15489 + (1));
seq__15448_15486 = G__15491;
chunk__15449_15487 = G__15492;
count__15450_15488 = G__15493;
i__15451_15489 = G__15494;
continue;
}
} else
{var temp__4126__auto___15495 = cljs.core.seq(seq__15448_15486);if(temp__4126__auto___15495)
{var seq__15448_15496__$1 = temp__4126__auto___15495;if(cljs.core.chunked_seq_QMARK_(seq__15448_15496__$1))
{var c__4410__auto___15497 = cljs.core.chunk_first(seq__15448_15496__$1);{
var G__15498 = cljs.core.chunk_rest(seq__15448_15496__$1);
var G__15499 = c__4410__auto___15497;
var G__15500 = cljs.core.count(c__4410__auto___15497);
var G__15501 = (0);
seq__15448_15486 = G__15498;
chunk__15449_15487 = G__15499;
count__15450_15488 = G__15500;
i__15451_15489 = G__15501;
continue;
}
} else
{var w_15502 = cljs.core.first(seq__15448_15496__$1);if(cljs.core.contains_QMARK_(derefed,w_15502))
{} else
{cljs.core.remove_watch(w_15502,this$__$1);
}
{
var G__15503 = cljs.core.next(seq__15448_15496__$1);
var G__15504 = null;
var G__15505 = (0);
var G__15506 = (0);
seq__15448_15486 = G__15503;
chunk__15449_15487 = G__15504;
count__15450_15488 = G__15505;
i__15451_15489 = G__15506;
continue;
}
}
} else
{}
}
break;
}
return self__.watching = derefed;
});
reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;cljs.core._write(writer,("#<Reaction "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(this$__$1))+": "));
cljs.core.pr_writer(self__.state,writer,opts);
return cljs.core._write(writer,">");
});
reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__15452 = this$__$1;return goog.getUid(G__15452);
});
reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var seq__15453_15507 = cljs.core.seq(self__.watching);var chunk__15454_15508 = null;var count__15455_15509 = (0);var i__15456_15510 = (0);while(true){
if((i__15456_15510 < count__15455_15509))
{var w_15511 = chunk__15454_15508.cljs$core$IIndexed$_nth$arity$2(null,i__15456_15510);cljs.core.remove_watch(w_15511,this$__$1);
{
var G__15512 = seq__15453_15507;
var G__15513 = chunk__15454_15508;
var G__15514 = count__15455_15509;
var G__15515 = (i__15456_15510 + (1));
seq__15453_15507 = G__15512;
chunk__15454_15508 = G__15513;
count__15455_15509 = G__15514;
i__15456_15510 = G__15515;
continue;
}
} else
{var temp__4126__auto___15516 = cljs.core.seq(seq__15453_15507);if(temp__4126__auto___15516)
{var seq__15453_15517__$1 = temp__4126__auto___15516;if(cljs.core.chunked_seq_QMARK_(seq__15453_15517__$1))
{var c__4410__auto___15518 = cljs.core.chunk_first(seq__15453_15517__$1);{
var G__15519 = cljs.core.chunk_rest(seq__15453_15517__$1);
var G__15520 = c__4410__auto___15518;
var G__15521 = cljs.core.count(c__4410__auto___15518);
var G__15522 = (0);
seq__15453_15507 = G__15519;
chunk__15454_15508 = G__15520;
count__15455_15509 = G__15521;
i__15456_15510 = G__15522;
continue;
}
} else
{var w_15523 = cljs.core.first(seq__15453_15517__$1);cljs.core.remove_watch(w_15523,this$__$1);
{
var G__15524 = cljs.core.next(seq__15453_15517__$1);
var G__15525 = null;
var G__15526 = (0);
var G__15527 = (0);
seq__15453_15507 = G__15524;
chunk__15454_15508 = G__15525;
count__15455_15509 = G__15526;
i__15456_15510 = G__15527;
continue;
}
}
} else
{}
}
break;
}
self__.watching = cljs.core.PersistentHashSet.EMPTY;
self__.state = null;
self__.dirty_QMARK_ = true;
if(cljs.core.truth_(self__.active_QMARK_))
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.dec);
} else
{}
self__.active_QMARK_ = false;
} else
{}
if(cljs.core.truth_(self__.on_dispose))
{return (self__.on_dispose.cljs$core$IFn$_invoke$arity$0 ? self__.on_dispose.cljs$core$IFn$_invoke$arity$0() : self__.on_dispose.call(null));
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){var self__ = this;
var a__$1 = this;var old_value = self__.state;self__.state = new_value;
cljs.core._notify_watches(a__$1,old_value,new_value);
return new_value;
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,(function (){var G__15457 = self__.state;return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__15457) : f__$1.call(null,G__15457));
})());
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,(function (){var G__15458 = self__.state;var G__15459 = x;return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__15458,G__15459) : f__$1.call(null,G__15458,G__15459));
})());
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,(function (){var G__15460 = self__.state;var G__15461 = x;var G__15462 = y;return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__15460,G__15461,G__15462) : f__$1.call(null,G__15460,G__15461,G__15462));
})());
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,self__.state,x,y,more));
});
reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var oldstate = self__.state;var res = reagent.ratom.capture_derefed(self__.f,this$__$1);var derefed = reagent.ratom.captured(this$__$1);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(derefed,self__.watching))
{reagent.ratom._update_watching(this$__$1,derefed);
} else
{}
if(cljs.core.truth_(self__.active_QMARK_))
{} else
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.inc);
} else
{}
self__.active_QMARK_ = true;
}
self__.dirty_QMARK_ = false;
self__.state = res;
reagent.ratom.call_watches(this$__$1,self__.watches,oldstate,self__.state);
return res;
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(self__.on_set))
{var G__15463_15528 = oldval;var G__15464_15529 = newval;(self__.on_set.cljs$core$IFn$_invoke$arity$2 ? self__.on_set.cljs$core$IFn$_invoke$arity$2(G__15463_15528,G__15464_15529) : self__.on_set.call(null,G__15463_15528,G__15464_15529));
} else
{}
return reagent.ratom.call_watches(this$__$1,self__.watches,oldval,newval);
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,k,wf);
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,k);
if(cljs.core.empty_QMARK_(self__.watches))
{return reagent.ratom.dispose_BANG_(this$__$1);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core.not((function (){var or__3640__auto__ = self__.auto_run;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return reagent.ratom._STAR_ratom_context_STAR_;
}
})()))
{var x__10815__auto___15530 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,reagent.ratom._STAR_ratom_context_STAR_], null);if(typeof console !== 'undefined')
{console.log((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("dbg reagent.ratom:"+231+": [auto-run *ratom-context*]: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x__10815__auto___15530], 0)))))));
} else
{}
} else
{}
if(cljs.core.truth_((function (){var or__3640__auto__ = self__.auto_run;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return reagent.ratom._STAR_ratom_context_STAR_;
}
})()))
{} else
{throw (new Error(("Assert failed: Reaction derefed outside auto-running context\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.Symbol(null,"*ratom-context*","*ratom-context*",-1557728360,null))], 0))))));
}
reagent.ratom.notify_deref_watcher_BANG_(this$__$1);
if(cljs.core.truth_(self__.dirty_QMARK_))
{return reagent.ratom.run(this$__$1);
} else
{return self__.state;
}
});
reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});
/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__15531){var map__15533 = p__15531;var map__15533__$1 = ((cljs.core.seq_QMARK_(map__15533))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15533):map__15533);var derefed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15533__$1,cljs.core.constant$keyword$17);var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15533__$1,cljs.core.constant$keyword$18);var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15533__$1,cljs.core.constant$keyword$19);var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15533__$1,cljs.core.constant$keyword$20);var runner = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(auto_run,true))?reagent.ratom.run:auto_run);var active = !((derefed == null));var dirty = !(active);var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,cljs.core.PersistentArrayMap.EMPTY,runner,on_set,on_dispose));if((derefed == null))
{} else
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.inc);
} else
{}
reaction.reagent$ratom$IComputedImpl$_update_watching$arity$2(null,derefed);
}
return reaction;
};
var make_reaction = function (f,var_args){
var p__15531 = null;if (arguments.length > 1) {
  p__15531 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return make_reaction__delegate.call(this,f,p__15531);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__15534){
var f = cljs.core.first(arglist__15534);
var p__15531 = cljs.core.rest(arglist__15534);
return make_reaction__delegate(f,p__15531);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;
