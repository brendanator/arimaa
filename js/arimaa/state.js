// Compiled by ClojureScript 0.0-2511
goog.provide('arimaa.state');
goog.require('cljs.core');
goog.require('reagent.core');
arimaa.state.session_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
arimaa.state.gameroom_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
arimaa.state.gameroom_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
arimaa.state.username = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
arimaa.state.logged_in = (function logged_in(){
return !(((function (){var G__10055 = arimaa.state.username;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10055) : cljs.core.deref.call(null,G__10055));
})() == null));
});
arimaa.state.auth = (function auth(){
return cljs.core.constant$keyword$41.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1((function (){var G__10057 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10057) : cljs.core.deref.call(null,G__10057));
})()));
});
