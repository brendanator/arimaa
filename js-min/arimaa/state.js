// Compiled by ClojureScript 0.0-2511
goog.provide('arimaa.state');
goog.require('cljs.core');
goog.require('reagent.core');
arimaa.state.session_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
arimaa.state.gameroom_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
arimaa.state.gameroom_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
arimaa.state.username = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
arimaa.state.logged_in = (function logged_in(){
return !(((function (){var G__15871 = arimaa.state.username;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15871) : cljs.core.deref.call(null,G__15871));
})() == null));
});
arimaa.state.auth = (function auth(){
return cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$39.cljs$core$IFn$_invoke$arity$1((function (){var G__15873 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15873) : cljs.core.deref.call(null,G__15873));
})()));
});
