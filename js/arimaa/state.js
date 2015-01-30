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
return (!(((function (){var G__17028 = arimaa.state.username;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17028) : cljs.core.deref.call(null,G__17028));
})() == null))) && (!(((function (){var G__17029 = arimaa.state.session_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17029) : cljs.core.deref.call(null,G__17029));
})() == null)));
});
arimaa.state.auth = (function auth(){
return cljs.core.constant$keyword$242.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$244.cljs$core$IFn$_invoke$arity$1((function (){var G__17031 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17031) : cljs.core.deref.call(null,G__17031));
})()));
});
arimaa.state.is_my_game = (function is_my_game(username,game){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(username,cljs.core.constant$keyword$245.cljs$core$IFn$_invoke$arity$1(game))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(username,cljs.core.constant$keyword$246.cljs$core$IFn$_invoke$arity$1(game)));
});
arimaa.state.is_scheduled = (function is_scheduled(game){
return cljs_time.core.after_QMARK_(arimaa.utils.parse_timestamp(cljs.core.constant$keyword$247.cljs$core$IFn$_invoke$arity$1(game)),cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.now(),cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1((15))));
});
arimaa.state.my_games = (function my_games(username){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__17032_SHARP_){
return arimaa.state.is_my_game(username,p1__17032_SHARP_);
}),cljs.core.constant$keyword$248.cljs$core$IFn$_invoke$arity$1((function (){var G__17034 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17034) : cljs.core.deref.call(null,G__17034));
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
}),cljs.core.constant$keyword$248.cljs$core$IFn$_invoke$arity$1((function (){var G__17036 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17036) : cljs.core.deref.call(null,G__17036));
})()));
});
arimaa.state.scheduled_games = (function scheduled_games(){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(arimaa.state.is_scheduled,cljs.core.constant$keyword$248.cljs$core$IFn$_invoke$arity$1((function (){var G__17038 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17038) : cljs.core.deref.call(null,G__17038));
})()));
});
