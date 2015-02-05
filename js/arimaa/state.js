// Compiled by ClojureScript 0.0-2727 {}
goog.provide('arimaa.state');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('reagent.core');
goog.require('arimaa.utils');
arimaa.state.session_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
arimaa.state.gameroom_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
arimaa.state.gameroom_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
arimaa.state.username = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
arimaa.state.logged_in = (function logged_in(){
return (!(((function (){var G__12332 = arimaa.state.username;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12332) : cljs.core.deref.call(null,G__12332));
})() == null))) && (!(((function (){var G__12333 = arimaa.state.session_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12333) : cljs.core.deref.call(null,G__12333));
})() == null)));
});
arimaa.state.auth = (function auth(){
return cljs.core.constant$keyword$130.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$131.cljs$core$IFn$_invoke$arity$1((function (){var G__12335 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12335) : cljs.core.deref.call(null,G__12335));
})()));
});
arimaa.state.is_my_game = (function is_my_game(username,game){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(username,cljs.core.constant$keyword$132.cljs$core$IFn$_invoke$arity$1(game))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(username,cljs.core.constant$keyword$133.cljs$core$IFn$_invoke$arity$1(game)));
});
arimaa.state.is_scheduled = (function is_scheduled(game){
return cljs_time.core.after_QMARK_(arimaa.utils.parse_timestamp(cljs.core.constant$keyword$134.cljs$core$IFn$_invoke$arity$1(game)),cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.now(),cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1((15))));
});
arimaa.state.my_games = (function my_games(username){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12336_SHARP_){
return arimaa.state.is_my_game(username,p1__12336_SHARP_);
}),cljs.core.constant$keyword$135.cljs$core$IFn$_invoke$arity$1((function (){var G__12338 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12338) : cljs.core.deref.call(null,G__12338));
})()));
});
arimaa.state.live_games = (function live_games(username){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (game){
return cljs.core.not((function (){var or__3750__auto__ = arimaa.state.is_my_game(username,game);
if(or__3750__auto__){
return or__3750__auto__;
} else {
return arimaa.state.is_scheduled(game);
}
})());
}),cljs.core.constant$keyword$135.cljs$core$IFn$_invoke$arity$1((function (){var G__12340 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12340) : cljs.core.deref.call(null,G__12340));
})()));
});
arimaa.state.scheduled_games = (function scheduled_games(){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(arimaa.state.is_scheduled,cljs.core.constant$keyword$135.cljs$core$IFn$_invoke$arity$1((function (){var G__12342 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12342) : cljs.core.deref.call(null,G__12342));
})()));
});
