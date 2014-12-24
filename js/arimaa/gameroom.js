// Compiled by ClojureScript 0.0-2511
goog.provide('arimaa.gameroom');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('arimaa.state');
goog.require('arimaa.requests');
arimaa.gameroom.update_gameroom_state = (function update_gameroom_state(){
var c__5853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto__){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto__){
return (function (state_15910){
var state_val_15911 = (state_15910[(1)]);
if((state_val_15911 === (2))){
var inst_15907 = (state_15910[(2)]);
var inst_15908 = (function (){var G__15912 = arimaa.state.gameroom_state;
var G__15913 = inst_15907;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15912,G__15913) : cljs.core.reset_BANG_.call(null,G__15912,G__15913));
})();
var state_15910__$1 = state_15910;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15910__$1,inst_15908);
} else {
if((state_val_15911 === (1))){
var inst_15904 = (function (){var G__15914 = arimaa.state.session_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15914) : cljs.core.deref.call(null,G__15914));
})();
var inst_15905 = arimaa.requests.gameroom_state(inst_15904);
var state_15910__$1 = state_15910;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15910__$1,(2),inst_15905);
} else {
return null;
}
}
});})(c__5853__auto__))
;
return ((function (switch__5838__auto__,c__5853__auto__){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_15918 = [null,null,null,null,null,null,null];
(statearr_15918[(0)] = state_machine__5839__auto__);

(statearr_15918[(1)] = (1));

return statearr_15918;
});
var state_machine__5839__auto____1 = (function (state_15910){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_15910);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e15919){if((e15919 instanceof Object)){
var ex__5842__auto__ = e15919;
var statearr_15920_15922 = state_15910;
(statearr_15920_15922[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15910);

return cljs.core.constant$keyword$41;
} else {
throw e15919;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__15923 = state_15910;
state_15910 = G__15923;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_15910){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_15910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto__))
})();
var state__5855__auto__ = (function (){var statearr_15921 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_15921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto__);

return statearr_15921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto__))
);

return c__5853__auto__;
});
arimaa.gameroom.update_games = (function update_games(){
var c__5853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto__){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto__){
return (function (state_15968){
var state_val_15969 = (state_15968[(1)]);
if((state_val_15969 === (7))){
var inst_15959 = (state_15968[(2)]);
var inst_15960 = arimaa.gameroom.update_gameroom_state();
var state_15968__$1 = (function (){var statearr_15970 = state_15968;
(statearr_15970[(7)] = inst_15959);

(statearr_15970[(8)] = inst_15960);

return statearr_15970;
})();
var statearr_15971_15984 = state_15968__$1;
(statearr_15971_15984[(2)] = null);

(statearr_15971_15984[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_15969 === (6))){
var inst_15964 = (state_15968[(2)]);
var state_15968__$1 = state_15968;
var statearr_15972_15985 = state_15968__$1;
(statearr_15972_15985[(2)] = inst_15964);

(statearr_15972_15985[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_15969 === (5))){
var state_15968__$1 = state_15968;
var statearr_15973_15986 = state_15968__$1;
(statearr_15973_15986[(2)] = null);

(statearr_15973_15986[(1)] = (6));


return cljs.core.constant$keyword$41;
} else {
if((state_val_15969 === (4))){
var inst_15957 = cljs.core.async.timeout((2000));
var state_15968__$1 = state_15968;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15968__$1,(7),inst_15957);
} else {
if((state_val_15969 === (3))){
var inst_15966 = (state_15968[(2)]);
var state_15968__$1 = state_15968;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15968__$1,inst_15966);
} else {
if((state_val_15969 === (2))){
var inst_15955 = arimaa.state.logged_in();
var state_15968__$1 = state_15968;
if(inst_15955){
var statearr_15974_15987 = state_15968__$1;
(statearr_15974_15987[(1)] = (4));

} else {
var statearr_15975_15988 = state_15968__$1;
(statearr_15975_15988[(1)] = (5));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_15969 === (1))){
var state_15968__$1 = state_15968;
var statearr_15976_15989 = state_15968__$1;
(statearr_15976_15989[(2)] = null);

(statearr_15976_15989[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
return null;
}
}
}
}
}
}
}
});})(c__5853__auto__))
;
return ((function (switch__5838__auto__,c__5853__auto__){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_15980 = [null,null,null,null,null,null,null,null,null];
(statearr_15980[(0)] = state_machine__5839__auto__);

(statearr_15980[(1)] = (1));

return statearr_15980;
});
var state_machine__5839__auto____1 = (function (state_15968){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_15968);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e15981){if((e15981 instanceof Object)){
var ex__5842__auto__ = e15981;
var statearr_15982_15990 = state_15968;
(statearr_15982_15990[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15968);

return cljs.core.constant$keyword$41;
} else {
throw e15981;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__15991 = state_15968;
state_15968 = G__15991;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_15968){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_15968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto__))
})();
var state__5855__auto__ = (function (){var statearr_15983 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_15983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto__);

return statearr_15983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto__))
);

return c__5853__auto__;
});
arimaa.gameroom.new_game_view = (function new_game_view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$228,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$229,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230,"New game"], null)], null)], null);
});
arimaa.gameroom.game_view = (function game_view(game){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$209,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$209,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$232,[cljs.core.str("http://arimaa.com/arimaa/gameroom/playerpage.cgi?id="),cljs.core.str(cljs.core.constant$keyword$234.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$233,"_blank"], null),cljs.core.constant$keyword$235.cljs$core$IFn$_invoke$arity$1(game)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$211," vs "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$232,[cljs.core.str("http://arimaa.com/arimaa/gameroom/playerpage.cgi?id="),cljs.core.str(cljs.core.constant$keyword$236.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$233,"_blank"], null),cljs.core.constant$keyword$237.cljs$core$IFn$_invoke$arity$1(game)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$209,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$211,cljs.core.constant$keyword$238.cljs$core$IFn$_invoke$arity$1(game)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$232,[cljs.core.str("http://arimaa.com/arimaa/gameroom/opengamewin.cgi?gameid="),cljs.core.str(cljs.core.constant$keyword$120.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$233,"_blank"], null),"View game"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$211,cljs.core.constant$keyword$239.cljs$core$IFn$_invoke$arity$1(game)], null)], null)], null);
});
arimaa.gameroom.my_games_view = (function my_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$228,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$229,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230,"My games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$209,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$240.cljs$core$IFn$_invoke$arity$1((function (){var G__15993 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15993) : cljs.core.deref.call(null,G__15993));
})()))], null)], null);
});
arimaa.gameroom.open_games_view = (function open_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$228,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$229,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230,"Open games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$209,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$241.cljs$core$IFn$_invoke$arity$1((function (){var G__15995 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15995) : cljs.core.deref.call(null,G__15995));
})()))], null)], null);
});
arimaa.gameroom.live_games_view = (function live_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$228,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$229,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230,"Live games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$209,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$242.cljs$core$IFn$_invoke$arity$1((function (){var G__15997 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15997) : cljs.core.deref.call(null,G__15997));
})()))], null)], null);
});
arimaa.gameroom.recent_games_view = (function recent_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$228,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$229,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230,"Recent games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$209,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$243.cljs$core$IFn$_invoke$arity$1((function (){var G__15999 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15999) : cljs.core.deref.call(null,G__15999));
})()))], null)], null);
});
arimaa.gameroom.gameroom_view = (function gameroom_view(){
arimaa.gameroom.update_gameroom_state();

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$244,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.new_game_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.my_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.open_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.live_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.recent_games_view], null)], null);
});
