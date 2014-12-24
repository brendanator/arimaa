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
return (function (state_15907){
var state_val_15908 = (state_15907[(1)]);
if((state_val_15908 === (2))){
var inst_15904 = (state_15907[(2)]);
var inst_15905 = (function (){var G__15909 = arimaa.state.gameroom_state;
var G__15910 = inst_15904;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15909,G__15910) : cljs.core.reset_BANG_.call(null,G__15909,G__15910));
})();
var state_15907__$1 = state_15907;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15907__$1,inst_15905);
} else {
if((state_val_15908 === (1))){
var inst_15901 = (function (){var G__15911 = arimaa.state.session_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15911) : cljs.core.deref.call(null,G__15911));
})();
var inst_15902 = arimaa.requests.gameroom_state(inst_15901);
var state_15907__$1 = state_15907;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15907__$1,(2),inst_15902);
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
var statearr_15915 = [null,null,null,null,null,null,null];
(statearr_15915[(0)] = state_machine__5839__auto__);

(statearr_15915[(1)] = (1));

return statearr_15915;
});
var state_machine__5839__auto____1 = (function (state_15907){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_15907);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e15916){if((e15916 instanceof Object)){
var ex__5842__auto__ = e15916;
var statearr_15917_15919 = state_15907;
(statearr_15917_15919[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15907);

return cljs.core.constant$keyword$41;
} else {
throw e15916;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__15920 = state_15907;
state_15907 = G__15920;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_15907){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_15907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto__))
})();
var state__5855__auto__ = (function (){var statearr_15918 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_15918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto__);

return statearr_15918;
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
return (function (state_15965){
var state_val_15966 = (state_15965[(1)]);
if((state_val_15966 === (7))){
var inst_15956 = (state_15965[(2)]);
var inst_15957 = arimaa.gameroom.update_gameroom_state();
var state_15965__$1 = (function (){var statearr_15967 = state_15965;
(statearr_15967[(7)] = inst_15956);

(statearr_15967[(8)] = inst_15957);

return statearr_15967;
})();
var statearr_15968_15981 = state_15965__$1;
(statearr_15968_15981[(2)] = null);

(statearr_15968_15981[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_15966 === (6))){
var inst_15961 = (state_15965[(2)]);
var state_15965__$1 = state_15965;
var statearr_15969_15982 = state_15965__$1;
(statearr_15969_15982[(2)] = inst_15961);

(statearr_15969_15982[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_15966 === (5))){
var state_15965__$1 = state_15965;
var statearr_15970_15983 = state_15965__$1;
(statearr_15970_15983[(2)] = null);

(statearr_15970_15983[(1)] = (6));


return cljs.core.constant$keyword$41;
} else {
if((state_val_15966 === (4))){
var inst_15954 = cljs.core.async.timeout((2000));
var state_15965__$1 = state_15965;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15965__$1,(7),inst_15954);
} else {
if((state_val_15966 === (3))){
var inst_15963 = (state_15965[(2)]);
var state_15965__$1 = state_15965;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15965__$1,inst_15963);
} else {
if((state_val_15966 === (2))){
var inst_15952 = arimaa.state.logged_in();
var state_15965__$1 = state_15965;
if(inst_15952){
var statearr_15971_15984 = state_15965__$1;
(statearr_15971_15984[(1)] = (4));

} else {
var statearr_15972_15985 = state_15965__$1;
(statearr_15972_15985[(1)] = (5));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_15966 === (1))){
var state_15965__$1 = state_15965;
var statearr_15973_15986 = state_15965__$1;
(statearr_15973_15986[(2)] = null);

(statearr_15973_15986[(1)] = (2));


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
var statearr_15977 = [null,null,null,null,null,null,null,null,null];
(statearr_15977[(0)] = state_machine__5839__auto__);

(statearr_15977[(1)] = (1));

return statearr_15977;
});
var state_machine__5839__auto____1 = (function (state_15965){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_15965);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e15978){if((e15978 instanceof Object)){
var ex__5842__auto__ = e15978;
var statearr_15979_15987 = state_15965;
(statearr_15979_15987[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15965);

return cljs.core.constant$keyword$41;
} else {
throw e15978;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__15988 = state_15965;
state_15965 = G__15988;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_15965){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_15965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto__))
})();
var state__5855__auto__ = (function (){var statearr_15980 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_15980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto__);

return statearr_15980;
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$206,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$206,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$232,[cljs.core.str("http://arimaa.com/arimaa/gameroom/playerpage.cgi?id="),cljs.core.str(cljs.core.constant$keyword$234.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$233,"_blank"], null),cljs.core.constant$keyword$235.cljs$core$IFn$_invoke$arity$1(game)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$208," vs "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$232,[cljs.core.str("http://arimaa.com/arimaa/gameroom/playerpage.cgi?id="),cljs.core.str(cljs.core.constant$keyword$236.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$233,"_blank"], null),cljs.core.constant$keyword$237.cljs$core$IFn$_invoke$arity$1(game)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$206,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$208,cljs.core.constant$keyword$238.cljs$core$IFn$_invoke$arity$1(game)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$232,[cljs.core.str("http://arimaa.com/arimaa/gameroom/opengamewin.cgi?gameid="),cljs.core.str(cljs.core.constant$keyword$120.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$233,"_blank"], null),"View game"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$208,cljs.core.constant$keyword$239.cljs$core$IFn$_invoke$arity$1(game)], null)], null)], null);
});
arimaa.gameroom.my_games_view = (function my_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$228,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$229,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230,"My games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$206,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$240.cljs$core$IFn$_invoke$arity$1((function (){var G__15990 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15990) : cljs.core.deref.call(null,G__15990));
})()))], null)], null);
});
arimaa.gameroom.open_games_view = (function open_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$228,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$229,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230,"Open games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$206,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$241.cljs$core$IFn$_invoke$arity$1((function (){var G__15992 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15992) : cljs.core.deref.call(null,G__15992));
})()))], null)], null);
});
arimaa.gameroom.live_games_view = (function live_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$228,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$229,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230,"Live games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$206,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$242.cljs$core$IFn$_invoke$arity$1((function (){var G__15994 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15994) : cljs.core.deref.call(null,G__15994));
})()))], null)], null);
});
arimaa.gameroom.recent_games_view = (function recent_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$228,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$229,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230,"Recent games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$206,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$243.cljs$core$IFn$_invoke$arity$1((function (){var G__15996 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15996) : cljs.core.deref.call(null,G__15996));
})()))], null)], null);
});
arimaa.gameroom.gameroom_view = (function gameroom_view(){
arimaa.gameroom.update_gameroom_state();

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$244,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.new_game_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.my_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.open_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.live_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.recent_games_view], null)], null);
});
