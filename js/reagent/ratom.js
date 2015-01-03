// Compiled by ClojureScript 0.0-2511
goog.provide('reagent.ratom');
goog.require('cljs.core');
reagent.ratom.debug = false;
reagent.ratom._running = (function (){var G__16976 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16976) : cljs.core.atom.call(null,G__16976));
})();
reagent.ratom.running = (function running(){
var G__16978 = reagent.ratom._running;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16978) : cljs.core.deref.call(null,G__16978));
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_16980 = reagent.ratom._STAR_ratom_context_STAR_;
try{reagent.ratom._STAR_ratom_context_STAR_ = obj;

return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_16980;
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
var G__16981 = this$__$1;
return goog.getUid(G__16981);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f){
var G__16982_16993 = key;
var G__16983_16994 = this$__$1;
var G__16984_16995 = oldval;
var G__16985_16996 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__16982_16993,G__16983_16994,G__16984_16995,G__16985_16996) : f.call(null,G__16982_16993,G__16983_16994,G__16984_16995,G__16985_16996));

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
return cljs.core._reset_BANG_(a__$1,(function (){var G__16986 = self__.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16986) : f.call(null,G__16986));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__16987 = self__.state;
var G__16988 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16987,G__16988) : f.call(null,G__16987,G__16988));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__16989 = self__.state;
var G__16990 = x;
var G__16991 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__16989,G__16990,G__16991) : f.call(null,G__16989,G__16990,G__16991));
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
if(cljs.core.truth_((function (){var G__16992 = new_value;
return (self__.validator.cljs$core$IFn$_invoke$arity$1 ? self__.validator.cljs$core$IFn$_invoke$arity$1(G__16992) : self__.validator.call(null,G__16992));
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
var G__17000__delegate = function (x,p__16997){
var map__16999 = p__16997;
var map__16999__$1 = ((cljs.core.seq_QMARK_(map__16999))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16999):map__16999);
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16999__$1,cljs.core.constant$keyword$13);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16999__$1,cljs.core.constant$keyword$3);
return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__17000 = function (x,var_args){
var p__16997 = null;
if (arguments.length > 1) {
  p__16997 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__17000__delegate.call(this,x,p__16997);};
G__17000.cljs$lang$maxFixedArity = 1;
G__17000.cljs$lang$applyTo = (function (arglist__17001){
var x = cljs.core.first(arglist__17001);
var p__16997 = cljs.core.rest(arglist__17001);
return G__17000__delegate(x,p__16997);
});
G__17000.cljs$core$IFn$_invoke$arity$variadic = G__17000__delegate;
return G__17000;
})()
;
atom = function(x,var_args){
var p__16997 = var_args;
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
var G__17002 = this$__$1;
return goog.getUid(G__17002);
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
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__17003 = self__.ratom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17003) : cljs.core.deref.call(null,G__17003));
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

reagent.ratom.IDisposable = (function (){var obj17005 = {};
return obj17005;
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
return (function (){var or__3630__auto__ = (reagent.ratom.dispose_BANG_[(function (){var G__17009 = x__4274__auto__;
return goog.typeOf(G__17009);
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


reagent.ratom.IRunnable = (function (){var obj17011 = {};
return obj17011;
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
return (function (){var or__3630__auto__ = (reagent.ratom.run[(function (){var G__17015 = x__4274__auto__;
return goog.typeOf(G__17015);
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


reagent.ratom.IComputedImpl = (function (){var obj17017 = {};
return obj17017;
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
return (function (){var or__3630__auto__ = (reagent.ratom._update_watching[(function (){var G__17021 = x__4274__auto__;
return goog.typeOf(G__17021);
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
return (function (){var or__3630__auto__ = (reagent.ratom._handle_change[(function (){var G__17025 = x__4274__auto__;
return goog.typeOf(G__17025);
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
var G__17030_17034 = key;
var G__17031_17035 = obs;
var G__17032_17036 = oldval;
var G__17033_17037 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__17030_17034,G__17031_17035,G__17032_17036,G__17033_17037) : f.call(null,G__17030_17034,G__17031_17035,G__17032_17036,G__17033_17037));

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
var seq__17038_17059 = cljs.core.seq(derefed);
var chunk__17039_17060 = null;
var count__17040_17061 = (0);
var i__17041_17062 = (0);
while(true){
if((i__17041_17062 < count__17040_17061)){
var w_17063 = chunk__17039_17060.cljs$core$IIndexed$_nth$arity$2(null,i__17041_17062);
if(cljs.core.contains_QMARK_(self__.watching,w_17063)){
} else {
cljs.core.add_watch(w_17063,this$__$1,reagent.ratom._handle_change);
}

var G__17064 = seq__17038_17059;
var G__17065 = chunk__17039_17060;
var G__17066 = count__17040_17061;
var G__17067 = (i__17041_17062 + (1));
seq__17038_17059 = G__17064;
chunk__17039_17060 = G__17065;
count__17040_17061 = G__17066;
i__17041_17062 = G__17067;
continue;
} else {
var temp__4126__auto___17068 = cljs.core.seq(seq__17038_17059);
if(temp__4126__auto___17068){
var seq__17038_17069__$1 = temp__4126__auto___17068;
if(cljs.core.chunked_seq_QMARK_(seq__17038_17069__$1)){
var c__4417__auto___17070 = cljs.core.chunk_first(seq__17038_17069__$1);
var G__17071 = cljs.core.chunk_rest(seq__17038_17069__$1);
var G__17072 = c__4417__auto___17070;
var G__17073 = cljs.core.count(c__4417__auto___17070);
var G__17074 = (0);
seq__17038_17059 = G__17071;
chunk__17039_17060 = G__17072;
count__17040_17061 = G__17073;
i__17041_17062 = G__17074;
continue;
} else {
var w_17075 = cljs.core.first(seq__17038_17069__$1);
if(cljs.core.contains_QMARK_(self__.watching,w_17075)){
} else {
cljs.core.add_watch(w_17075,this$__$1,reagent.ratom._handle_change);
}

var G__17076 = cljs.core.next(seq__17038_17069__$1);
var G__17077 = null;
var G__17078 = (0);
var G__17079 = (0);
seq__17038_17059 = G__17076;
chunk__17039_17060 = G__17077;
count__17040_17061 = G__17078;
i__17041_17062 = G__17079;
continue;
}
} else {
}
}
break;
}

var seq__17042_17080 = cljs.core.seq(self__.watching);
var chunk__17043_17081 = null;
var count__17044_17082 = (0);
var i__17045_17083 = (0);
while(true){
if((i__17045_17083 < count__17044_17082)){
var w_17084 = chunk__17043_17081.cljs$core$IIndexed$_nth$arity$2(null,i__17045_17083);
if(cljs.core.contains_QMARK_(derefed,w_17084)){
} else {
cljs.core.remove_watch(w_17084,this$__$1);
}

var G__17085 = seq__17042_17080;
var G__17086 = chunk__17043_17081;
var G__17087 = count__17044_17082;
var G__17088 = (i__17045_17083 + (1));
seq__17042_17080 = G__17085;
chunk__17043_17081 = G__17086;
count__17044_17082 = G__17087;
i__17045_17083 = G__17088;
continue;
} else {
var temp__4126__auto___17089 = cljs.core.seq(seq__17042_17080);
if(temp__4126__auto___17089){
var seq__17042_17090__$1 = temp__4126__auto___17089;
if(cljs.core.chunked_seq_QMARK_(seq__17042_17090__$1)){
var c__4417__auto___17091 = cljs.core.chunk_first(seq__17042_17090__$1);
var G__17092 = cljs.core.chunk_rest(seq__17042_17090__$1);
var G__17093 = c__4417__auto___17091;
var G__17094 = cljs.core.count(c__4417__auto___17091);
var G__17095 = (0);
seq__17042_17080 = G__17092;
chunk__17043_17081 = G__17093;
count__17044_17082 = G__17094;
i__17045_17083 = G__17095;
continue;
} else {
var w_17096 = cljs.core.first(seq__17042_17090__$1);
if(cljs.core.contains_QMARK_(derefed,w_17096)){
} else {
cljs.core.remove_watch(w_17096,this$__$1);
}

var G__17097 = cljs.core.next(seq__17042_17090__$1);
var G__17098 = null;
var G__17099 = (0);
var G__17100 = (0);
seq__17042_17080 = G__17097;
chunk__17043_17081 = G__17098;
count__17044_17082 = G__17099;
i__17045_17083 = G__17100;
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
var G__17046 = this$__$1;
return goog.getUid(G__17046);
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
var seq__17047_17101 = cljs.core.seq(self__.watching);
var chunk__17048_17102 = null;
var count__17049_17103 = (0);
var i__17050_17104 = (0);
while(true){
if((i__17050_17104 < count__17049_17103)){
var w_17105 = chunk__17048_17102.cljs$core$IIndexed$_nth$arity$2(null,i__17050_17104);
cljs.core.remove_watch(w_17105,this$__$1);

var G__17106 = seq__17047_17101;
var G__17107 = chunk__17048_17102;
var G__17108 = count__17049_17103;
var G__17109 = (i__17050_17104 + (1));
seq__17047_17101 = G__17106;
chunk__17048_17102 = G__17107;
count__17049_17103 = G__17108;
i__17050_17104 = G__17109;
continue;
} else {
var temp__4126__auto___17110 = cljs.core.seq(seq__17047_17101);
if(temp__4126__auto___17110){
var seq__17047_17111__$1 = temp__4126__auto___17110;
if(cljs.core.chunked_seq_QMARK_(seq__17047_17111__$1)){
var c__4417__auto___17112 = cljs.core.chunk_first(seq__17047_17111__$1);
var G__17113 = cljs.core.chunk_rest(seq__17047_17111__$1);
var G__17114 = c__4417__auto___17112;
var G__17115 = cljs.core.count(c__4417__auto___17112);
var G__17116 = (0);
seq__17047_17101 = G__17113;
chunk__17048_17102 = G__17114;
count__17049_17103 = G__17115;
i__17050_17104 = G__17116;
continue;
} else {
var w_17117 = cljs.core.first(seq__17047_17111__$1);
cljs.core.remove_watch(w_17117,this$__$1);

var G__17118 = cljs.core.next(seq__17047_17111__$1);
var G__17119 = null;
var G__17120 = (0);
var G__17121 = (0);
seq__17047_17101 = G__17118;
chunk__17048_17102 = G__17119;
count__17049_17103 = G__17120;
i__17050_17104 = G__17121;
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
return cljs.core._reset_BANG_(a__$1,(function (){var G__17051 = self__.state;
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__17051) : f__$1.call(null,G__17051));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17052 = self__.state;
var G__17053 = x;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__17052,G__17053) : f__$1.call(null,G__17052,G__17053));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17054 = self__.state;
var G__17055 = x;
var G__17056 = y;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__17054,G__17055,G__17056) : f__$1.call(null,G__17054,G__17055,G__17056));
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
var G__17057_17122 = oldval;
var G__17058_17123 = newval;
(self__.on_set.cljs$core$IFn$_invoke$arity$2 ? self__.on_set.cljs$core$IFn$_invoke$arity$2(G__17057_17122,G__17058_17123) : self__.on_set.call(null,G__17057_17122,G__17058_17123));
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
var x__10958__auto___17124 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,reagent.ratom._STAR_ratom_context_STAR_], null);
if(typeof console !== 'undefined'){
console.log([cljs.core.str([cljs.core.str("dbg "),cljs.core.str("reagent.ratom"),cljs.core.str(":"),cljs.core.str(231),cljs.core.str(": "),cljs.core.str("[auto-run *ratom-context*]"),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x__10958__auto___17124], 0)))].join(''))].join(''));
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
var make_reaction__delegate = function (f,p__17125){
var map__17127 = p__17125;
var map__17127__$1 = ((cljs.core.seq_QMARK_(map__17127))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17127):map__17127);
var derefed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17127__$1,cljs.core.constant$keyword$24);
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17127__$1,cljs.core.constant$keyword$25);
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17127__$1,cljs.core.constant$keyword$26);
var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17127__$1,cljs.core.constant$keyword$27);
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
var p__17125 = null;
if (arguments.length > 1) {
  p__17125 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return make_reaction__delegate.call(this,f,p__17125);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__17128){
var f = cljs.core.first(arglist__17128);
var p__17125 = cljs.core.rest(arglist__17128);
return make_reaction__delegate(f,p__17125);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;
