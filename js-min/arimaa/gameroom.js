// Compiled by ClojureScript 0.0-2511
goog.provide('arimaa.gameroom');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('arimaa.state');
goog.require('arimaa.requests');
arimaa.gameroom.update_gameroom_state = (function update_gameroom_state(){
var c__11819__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11819__auto__){
return (function (){
var f__11820__auto__ = (function (){var switch__11739__auto__ = ((function (c__11819__auto__){
return (function (state_15856){
var state_val_15857 = (state_15856[(1)]);
if((state_val_15857 === (2))){
var inst_15853 = (state_15856[(2)]);
var inst_15854 = (function (){var G__15858 = arimaa.state.gameroom_state;
var G__15859 = inst_15853;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15858,G__15859) : cljs.core.reset_BANG_.call(null,G__15858,G__15859));
})();
var state_15856__$1 = state_15856;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15856__$1,inst_15854);
} else {
if((state_val_15857 === (1))){
var inst_15850 = (function (){var G__15860 = arimaa.state.session_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15860) : cljs.core.deref.call(null,G__15860));
})();
var inst_15851 = arimaa.requests.gameroom_state(inst_15850);
var state_15856__$1 = state_15856;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15856__$1,(2),inst_15851);
} else {
return null;
}
}
});})(c__11819__auto__))
;
return ((function (switch__11739__auto__,c__11819__auto__){
return (function() {
var state_machine__11740__auto__ = null;
var state_machine__11740__auto____0 = (function (){
var statearr_15864 = [null,null,null,null,null,null,null];
(statearr_15864[(0)] = state_machine__11740__auto__);

(statearr_15864[(1)] = (1));

return statearr_15864;
});
var state_machine__11740__auto____1 = (function (state_15856){
while(true){
var ret_value__11741__auto__ = (function (){try{while(true){
var result__11742__auto__ = switch__11739__auto__(state_15856);
if(cljs.core.keyword_identical_QMARK_(result__11742__auto__,cljs.core.constant$keyword$58)){
continue;
} else {
return result__11742__auto__;
}
break;
}
}catch (e15865){if((e15865 instanceof Object)){
var ex__11743__auto__ = e15865;
var statearr_15866_15868 = state_15856;
(statearr_15866_15868[(5)] = ex__11743__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15856);

return cljs.core.constant$keyword$58;
} else {
throw e15865;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11741__auto__,cljs.core.constant$keyword$58)){
var G__15869 = state_15856;
state_15856 = G__15869;
continue;
} else {
return ret_value__11741__auto__;
}
break;
}
});
state_machine__11740__auto__ = function(state_15856){
switch(arguments.length){
case 0:
return state_machine__11740__auto____0.call(this);
case 1:
return state_machine__11740__auto____1.call(this,state_15856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11740__auto____0;
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11740__auto____1;
return state_machine__11740__auto__;
})()
;})(switch__11739__auto__,c__11819__auto__))
})();
var state__11821__auto__ = (function (){var statearr_15867 = (function (){return (f__11820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11820__auto__.cljs$core$IFn$_invoke$arity$0() : f__11820__auto__.call(null));
})();
(statearr_15867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11819__auto__);

return statearr_15867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11821__auto__);
});})(c__11819__auto__))
);

return c__11819__auto__;
});
arimaa.gameroom.update_games = (function update_games(){
var c__11819__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11819__auto__){
return (function (){
var f__11820__auto__ = (function (){var switch__11739__auto__ = ((function (c__11819__auto__){
return (function (state_15914){
var state_val_15915 = (state_15914[(1)]);
if((state_val_15915 === (7))){
var inst_15905 = (state_15914[(2)]);
var inst_15906 = arimaa.gameroom.update_gameroom_state();
var state_15914__$1 = (function (){var statearr_15916 = state_15914;
(statearr_15916[(7)] = inst_15905);

(statearr_15916[(8)] = inst_15906);

return statearr_15916;
})();
var statearr_15917_15930 = state_15914__$1;
(statearr_15917_15930[(2)] = null);

(statearr_15917_15930[(1)] = (2));


return cljs.core.constant$keyword$58;
} else {
if((state_val_15915 === (6))){
var inst_15910 = (state_15914[(2)]);
var state_15914__$1 = state_15914;
var statearr_15918_15931 = state_15914__$1;
(statearr_15918_15931[(2)] = inst_15910);

(statearr_15918_15931[(1)] = (3));


return cljs.core.constant$keyword$58;
} else {
if((state_val_15915 === (5))){
var state_15914__$1 = state_15914;
var statearr_15919_15932 = state_15914__$1;
(statearr_15919_15932[(2)] = null);

(statearr_15919_15932[(1)] = (6));


return cljs.core.constant$keyword$58;
} else {
if((state_val_15915 === (4))){
var inst_15903 = cljs.core.async.timeout((2000));
var state_15914__$1 = state_15914;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15914__$1,(7),inst_15903);
} else {
if((state_val_15915 === (3))){
var inst_15912 = (state_15914[(2)]);
var state_15914__$1 = state_15914;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15914__$1,inst_15912);
} else {
if((state_val_15915 === (2))){
var inst_15901 = arimaa.state.logged_in();
var state_15914__$1 = state_15914;
if(inst_15901){
var statearr_15920_15933 = state_15914__$1;
(statearr_15920_15933[(1)] = (4));

} else {
var statearr_15921_15934 = state_15914__$1;
(statearr_15921_15934[(1)] = (5));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_15915 === (1))){
var state_15914__$1 = state_15914;
var statearr_15922_15935 = state_15914__$1;
(statearr_15922_15935[(2)] = null);

(statearr_15922_15935[(1)] = (2));


return cljs.core.constant$keyword$58;
} else {
return null;
}
}
}
}
}
}
}
});})(c__11819__auto__))
;
return ((function (switch__11739__auto__,c__11819__auto__){
return (function() {
var state_machine__11740__auto__ = null;
var state_machine__11740__auto____0 = (function (){
var statearr_15926 = [null,null,null,null,null,null,null,null,null];
(statearr_15926[(0)] = state_machine__11740__auto__);

(statearr_15926[(1)] = (1));

return statearr_15926;
});
var state_machine__11740__auto____1 = (function (state_15914){
while(true){
var ret_value__11741__auto__ = (function (){try{while(true){
var result__11742__auto__ = switch__11739__auto__(state_15914);
if(cljs.core.keyword_identical_QMARK_(result__11742__auto__,cljs.core.constant$keyword$58)){
continue;
} else {
return result__11742__auto__;
}
break;
}
}catch (e15927){if((e15927 instanceof Object)){
var ex__11743__auto__ = e15927;
var statearr_15928_15936 = state_15914;
(statearr_15928_15936[(5)] = ex__11743__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15914);

return cljs.core.constant$keyword$58;
} else {
throw e15927;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11741__auto__,cljs.core.constant$keyword$58)){
var G__15937 = state_15914;
state_15914 = G__15937;
continue;
} else {
return ret_value__11741__auto__;
}
break;
}
});
state_machine__11740__auto__ = function(state_15914){
switch(arguments.length){
case 0:
return state_machine__11740__auto____0.call(this);
case 1:
return state_machine__11740__auto____1.call(this,state_15914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11740__auto____0;
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11740__auto____1;
return state_machine__11740__auto__;
})()
;})(switch__11739__auto__,c__11819__auto__))
})();
var state__11821__auto__ = (function (){var statearr_15929 = (function (){return (f__11820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11820__auto__.cljs$core$IFn$_invoke$arity$0() : f__11820__auto__.call(null));
})();
(statearr_15929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11819__auto__);

return statearr_15929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11821__auto__);
});})(c__11819__auto__))
);

return c__11819__auto__;
});
arimaa.gameroom.new_game_view = (function new_game_view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$218,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$219,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$220,"New game"], null)], null)], null);
});
arimaa.gameroom.game_view = (function game_view(game){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$207,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$207,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$221,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$222,[cljs.core.str("http://arimaa.com/arimaa/gameroom/playerpage.cgi?id="),cljs.core.str(cljs.core.constant$keyword$224.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$223,"_blank"], null),cljs.core.constant$keyword$225.cljs$core$IFn$_invoke$arity$1(game)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$226," vs "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$221,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$222,[cljs.core.str("http://arimaa.com/arimaa/gameroom/playerpage.cgi?id="),cljs.core.str(cljs.core.constant$keyword$227.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$223,"_blank"], null),cljs.core.constant$keyword$228.cljs$core$IFn$_invoke$arity$1(game)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$207,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$226,cljs.core.constant$keyword$229.cljs$core$IFn$_invoke$arity$1(game)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$221,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$222,[cljs.core.str("http://arimaa.com/arimaa/gameroom/opengamewin.cgi?gameid="),cljs.core.str(cljs.core.constant$keyword$120.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$223,"_blank"], null),"View game"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$226,cljs.core.constant$keyword$230.cljs$core$IFn$_invoke$arity$1(game)], null)], null)], null);
});
arimaa.gameroom.my_games_view = (function my_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$218,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$219,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$220,"My games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$207,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$231.cljs$core$IFn$_invoke$arity$1((function (){var G__15939 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15939) : cljs.core.deref.call(null,G__15939));
})()))], null)], null);
});
arimaa.gameroom.open_games_view = (function open_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$218,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$219,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$220,"Open games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$207,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$232.cljs$core$IFn$_invoke$arity$1((function (){var G__15941 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15941) : cljs.core.deref.call(null,G__15941));
})()))], null)], null);
});
arimaa.gameroom.live_games_view = (function live_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$218,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$219,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$220,"Live games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$207,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$233.cljs$core$IFn$_invoke$arity$1((function (){var G__15943 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15943) : cljs.core.deref.call(null,G__15943));
})()))], null)], null);
});
arimaa.gameroom.recent_games_view = (function recent_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$218,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$219,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$220,"Recent games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$207,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$234.cljs$core$IFn$_invoke$arity$1((function (){var G__15945 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15945) : cljs.core.deref.call(null,G__15945));
})()))], null)], null);
});
arimaa.gameroom.gameroom_view = (function gameroom_view(){
arimaa.gameroom.update_gameroom_state();

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$235,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.new_game_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.my_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.open_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.live_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.recent_games_view], null)], null);
});
