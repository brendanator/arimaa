// Compiled by ClojureScript 0.0-2657 {}
goog.provide('arimaa.state');
goog.require('cljs.core');
goog.require('reagent.core');
arimaa.state.session_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
arimaa.state.gameroom_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
arimaa.state.gameroom_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
arimaa.state.username = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
arimaa.state.logged_in = (function logged_in(){
return (!(((function (){var G__16041 = arimaa.state.username;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16041) : cljs.core.deref.call(null,G__16041));
})() == null))) && (!(((function (){var G__16042 = arimaa.state.session_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16042) : cljs.core.deref.call(null,G__16042));
})() == null)));
});
arimaa.state.auth = (function auth(){
return cljs.core.constant$keyword$221.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$239.cljs$core$IFn$_invoke$arity$1((function (){var G__16044 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16044) : cljs.core.deref.call(null,G__16044));
})()));
});
