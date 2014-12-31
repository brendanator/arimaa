// Compiled by ClojureScript 0.0-2511
goog.provide('arimaa.gameroom');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('arimaa.utils');
goog.require('arimaa.state');
goog.require('arimaa.requests');
arimaa.gameroom.update_gameroom_state = (function update_gameroom_state(){
var c__11833__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11833__auto__){
return (function (){
var f__11834__auto__ = (function (){var switch__11753__auto__ = ((function (c__11833__auto__){
return (function (state_15901){
var state_val_15902 = (state_15901[(1)]);
if((state_val_15902 === (2))){
var inst_15898 = (state_15901[(2)]);
var inst_15899 = (function (){var G__15903 = arimaa.state.gameroom_state;
var G__15904 = inst_15898;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15903,G__15904) : cljs.core.reset_BANG_.call(null,G__15903,G__15904));
})();
var state_15901__$1 = state_15901;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15901__$1,inst_15899);
} else {
if((state_val_15902 === (1))){
var inst_15895 = (function (){var G__15905 = arimaa.state.session_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15905) : cljs.core.deref.call(null,G__15905));
})();
var inst_15896 = arimaa.requests.gameroom_state(inst_15895);
var state_15901__$1 = state_15901;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15901__$1,(2),inst_15896);
} else {
return null;
}
}
});})(c__11833__auto__))
;
return ((function (switch__11753__auto__,c__11833__auto__){
return (function() {
var state_machine__11754__auto__ = null;
var state_machine__11754__auto____0 = (function (){
var statearr_15909 = [null,null,null,null,null,null,null];
(statearr_15909[(0)] = state_machine__11754__auto__);

(statearr_15909[(1)] = (1));

return statearr_15909;
});
var state_machine__11754__auto____1 = (function (state_15901){
while(true){
var ret_value__11755__auto__ = (function (){try{while(true){
var result__11756__auto__ = switch__11753__auto__(state_15901);
if(cljs.core.keyword_identical_QMARK_(result__11756__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11756__auto__;
}
break;
}
}catch (e15910){if((e15910 instanceof Object)){
var ex__11757__auto__ = e15910;
var statearr_15911_15913 = state_15901;
(statearr_15911_15913[(5)] = ex__11757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15901);

return cljs.core.constant$keyword$61;
} else {
throw e15910;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11755__auto__,cljs.core.constant$keyword$61)){
var G__15914 = state_15901;
state_15901 = G__15914;
continue;
} else {
return ret_value__11755__auto__;
}
break;
}
});
state_machine__11754__auto__ = function(state_15901){
switch(arguments.length){
case 0:
return state_machine__11754__auto____0.call(this);
case 1:
return state_machine__11754__auto____1.call(this,state_15901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11754__auto____0;
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11754__auto____1;
return state_machine__11754__auto__;
})()
;})(switch__11753__auto__,c__11833__auto__))
})();
var state__11835__auto__ = (function (){var statearr_15912 = (function (){return (f__11834__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11834__auto__.cljs$core$IFn$_invoke$arity$0() : f__11834__auto__.call(null));
})();
(statearr_15912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11833__auto__);

return statearr_15912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11835__auto__);
});})(c__11833__auto__))
);

return c__11833__auto__;
});
arimaa.gameroom.update_games = (function update_games(){
var c__11833__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11833__auto__){
return (function (){
var f__11834__auto__ = (function (){var switch__11753__auto__ = ((function (c__11833__auto__){
return (function (state_15959){
var state_val_15960 = (state_15959[(1)]);
if((state_val_15960 === (7))){
var inst_15950 = (state_15959[(2)]);
var inst_15951 = arimaa.gameroom.update_gameroom_state();
var state_15959__$1 = (function (){var statearr_15961 = state_15959;
(statearr_15961[(7)] = inst_15951);

(statearr_15961[(8)] = inst_15950);

return statearr_15961;
})();
var statearr_15962_15975 = state_15959__$1;
(statearr_15962_15975[(2)] = null);

(statearr_15962_15975[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_15960 === (6))){
var inst_15955 = (state_15959[(2)]);
var state_15959__$1 = state_15959;
var statearr_15963_15976 = state_15959__$1;
(statearr_15963_15976[(2)] = inst_15955);

(statearr_15963_15976[(1)] = (3));


return cljs.core.constant$keyword$61;
} else {
if((state_val_15960 === (5))){
var state_15959__$1 = state_15959;
var statearr_15964_15977 = state_15959__$1;
(statearr_15964_15977[(2)] = null);

(statearr_15964_15977[(1)] = (6));


return cljs.core.constant$keyword$61;
} else {
if((state_val_15960 === (4))){
var inst_15948 = cljs.core.async.timeout((2000));
var state_15959__$1 = state_15959;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15959__$1,(7),inst_15948);
} else {
if((state_val_15960 === (3))){
var inst_15957 = (state_15959[(2)]);
var state_15959__$1 = state_15959;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15959__$1,inst_15957);
} else {
if((state_val_15960 === (2))){
var inst_15946 = arimaa.state.logged_in();
var state_15959__$1 = state_15959;
if(inst_15946){
var statearr_15965_15978 = state_15959__$1;
(statearr_15965_15978[(1)] = (4));

} else {
var statearr_15966_15979 = state_15959__$1;
(statearr_15966_15979[(1)] = (5));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_15960 === (1))){
var state_15959__$1 = state_15959;
var statearr_15967_15980 = state_15959__$1;
(statearr_15967_15980[(2)] = null);

(statearr_15967_15980[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
return null;
}
}
}
}
}
}
}
});})(c__11833__auto__))
;
return ((function (switch__11753__auto__,c__11833__auto__){
return (function() {
var state_machine__11754__auto__ = null;
var state_machine__11754__auto____0 = (function (){
var statearr_15971 = [null,null,null,null,null,null,null,null,null];
(statearr_15971[(0)] = state_machine__11754__auto__);

(statearr_15971[(1)] = (1));

return statearr_15971;
});
var state_machine__11754__auto____1 = (function (state_15959){
while(true){
var ret_value__11755__auto__ = (function (){try{while(true){
var result__11756__auto__ = switch__11753__auto__(state_15959);
if(cljs.core.keyword_identical_QMARK_(result__11756__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11756__auto__;
}
break;
}
}catch (e15972){if((e15972 instanceof Object)){
var ex__11757__auto__ = e15972;
var statearr_15973_15981 = state_15959;
(statearr_15973_15981[(5)] = ex__11757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15959);

return cljs.core.constant$keyword$61;
} else {
throw e15972;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11755__auto__,cljs.core.constant$keyword$61)){
var G__15982 = state_15959;
state_15959 = G__15982;
continue;
} else {
return ret_value__11755__auto__;
}
break;
}
});
state_machine__11754__auto__ = function(state_15959){
switch(arguments.length){
case 0:
return state_machine__11754__auto____0.call(this);
case 1:
return state_machine__11754__auto____1.call(this,state_15959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11754__auto____0;
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11754__auto____1;
return state_machine__11754__auto__;
})()
;})(switch__11753__auto__,c__11833__auto__))
})();
var state__11835__auto__ = (function (){var statearr_15974 = (function (){return (f__11834__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11834__auto__.cljs$core$IFn$_invoke$arity$0() : f__11834__auto__.call(null));
})();
(statearr_15974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11833__auto__);

return statearr_15974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11835__auto__);
});})(c__11833__auto__))
);

return c__11833__auto__;
});
arimaa.gameroom.new_game_view = (function new_game_view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$240,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$241,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,"New game"], null)], null)], null);
});
arimaa.gameroom.game_view = (function game_view(game){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$244,[cljs.core.str("http://arimaa.com/arimaa/gameroom/playerpage.cgi?id="),cljs.core.str(cljs.core.constant$keyword$246.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$245,"_blank"], null),cljs.core.constant$keyword$247.cljs$core$IFn$_invoke$arity$1(game)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$248," vs "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$244,[cljs.core.str("http://arimaa.com/arimaa/gameroom/playerpage.cgi?id="),cljs.core.str(cljs.core.constant$keyword$249.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$245,"_blank"], null),cljs.core.constant$keyword$250.cljs$core$IFn$_invoke$arity$1(game)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$248,cljs.core.constant$keyword$251.cljs$core$IFn$_invoke$arity$1(game)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$244,[cljs.core.str("http://arimaa.com/arimaa/gameroom/opengamewin.cgi?gameid="),cljs.core.str(cljs.core.constant$keyword$123.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$245,"_blank"], null),"View game"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$248,cljs.core.constant$keyword$252.cljs$core$IFn$_invoke$arity$1(game)], null)], null)], null);
});
arimaa.gameroom.gameboard_square_class = (function gameboard_square_class(row,col){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(col,"c")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(col,"f"))) && ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row,(3))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row,(6))))){
return "trap";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row,(8))){
return "gold-goal";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row,(1))){
return "silver-goal";
} else {
return null;
}
}
}
});
arimaa.gameroom.update_game_state = (function update_game_state(game_id,game_state){
var c__11833__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11833__auto__){
return (function (){
var f__11834__auto__ = (function (){var switch__11753__auto__ = ((function (c__11833__auto__){
return (function (state_16075){
var state_val_16076 = (state_16075[(1)]);
if((state_val_16076 === (8))){
var inst_16059 = (state_16075[(7)]);
var inst_16066 = (state_16075[(8)]);
var inst_16060 = (state_16075[(9)]);
var inst_16069 = (state_16075[(2)]);
var inst_16070 = (function (){var G__16079 = game_state;
var G__16080 = inst_16066;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16079,G__16080) : cljs.core.reset_BANG_.call(null,G__16079,G__16080));
})();
var tmp16077 = inst_16059;
var tmp16078 = inst_16060;
var inst_16059__$1 = tmp16077;
var inst_16060__$1 = tmp16078;
var state_16075__$1 = (function (){var statearr_16081 = state_16075;
(statearr_16081[(7)] = inst_16059__$1);

(statearr_16081[(10)] = inst_16070);

(statearr_16081[(9)] = inst_16060__$1);

(statearr_16081[(11)] = inst_16069);

return statearr_16081;
})();
var statearr_16082_16099 = state_16075__$1;
(statearr_16082_16099[(2)] = null);

(statearr_16082_16099[(1)] = (5));


return cljs.core.constant$keyword$61;
} else {
if((state_val_16076 === (7))){
var inst_16066 = (state_16075[(2)]);
var inst_16067 = cljs.core.async.timeout((1000));
var state_16075__$1 = (function (){var statearr_16083 = state_16075;
(statearr_16083[(8)] = inst_16066);

return statearr_16083;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16075__$1,(8),inst_16067);
} else {
if((state_val_16076 === (6))){
var inst_16073 = (state_16075[(2)]);
var state_16075__$1 = state_16075;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16075__$1,inst_16073);
} else {
if((state_val_16076 === (5))){
var inst_16050 = (state_16075[(12)]);
var inst_16044 = (state_16075[(13)]);
var inst_16062 = cljs.core.constant$keyword$253.cljs$core$IFn$_invoke$arity$1(inst_16044);
var inst_16063 = cljs.core.constant$keyword$200.cljs$core$IFn$_invoke$arity$1(inst_16050);
var inst_16064 = arimaa.requests.game_state(inst_16062,inst_16063);
var state_16075__$1 = state_16075;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16075__$1,(7),inst_16064);
} else {
if((state_val_16076 === (4))){
var inst_16055 = (state_16075[(2)]);
var inst_16056 = (function (){var G__16084 = game_state;
var G__16085 = inst_16055;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16084,G__16085) : cljs.core.reset_BANG_.call(null,G__16084,G__16085));
})();
var inst_16057 = cljs.core.constant$keyword$254.cljs$core$IFn$_invoke$arity$1(inst_16055);
var inst_16058 = cljs.core.constant$keyword$255.cljs$core$IFn$_invoke$arity$1(arimaa.gameroom.gameroom_state_response);
var inst_16059 = inst_16057;
var inst_16060 = inst_16058;
var state_16075__$1 = (function (){var statearr_16086 = state_16075;
(statearr_16086[(7)] = inst_16059);

(statearr_16086[(9)] = inst_16060);

(statearr_16086[(14)] = inst_16056);

return statearr_16086;
})();
var statearr_16087_16100 = state_16075__$1;
(statearr_16087_16100[(2)] = null);

(statearr_16087_16100[(1)] = (5));


return cljs.core.constant$keyword$61;
} else {
if((state_val_16076 === (3))){
var inst_16050 = (state_16075[(12)]);
var inst_16044 = (state_16075[(13)]);
var inst_16050__$1 = (state_16075[(2)]);
var inst_16051 = cljs.core.constant$keyword$253.cljs$core$IFn$_invoke$arity$1(inst_16044);
var inst_16052 = cljs.core.constant$keyword$200.cljs$core$IFn$_invoke$arity$1(inst_16050__$1);
var inst_16053 = arimaa.requests.game_state(inst_16051,inst_16052);
var state_16075__$1 = (function (){var statearr_16088 = state_16075;
(statearr_16088[(12)] = inst_16050__$1);

return statearr_16088;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16075__$1,(4),inst_16053);
} else {
if((state_val_16076 === (2))){
var inst_16044 = (state_16075[(13)]);
var inst_16044__$1 = (state_16075[(2)]);
var inst_16045 = cljs.core.constant$keyword$253.cljs$core$IFn$_invoke$arity$1(inst_16044__$1);
var inst_16046 = (function (){var G__16089 = arimaa.state.gameroom_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16089) : cljs.core.deref.call(null,G__16089));
})();
var inst_16047 = cljs.core.constant$keyword$204.cljs$core$IFn$_invoke$arity$1(inst_16044__$1);
var inst_16048 = arimaa.requests.sit(inst_16045,inst_16046,inst_16047);
var state_16075__$1 = (function (){var statearr_16090 = state_16075;
(statearr_16090[(13)] = inst_16044__$1);

return statearr_16090;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16075__$1,(3),inst_16048);
} else {
if((state_val_16076 === (1))){
var inst_16041 = (function (){var G__16091 = arimaa.state.session_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16091) : cljs.core.deref.call(null,G__16091));
})();
var inst_16042 = arimaa.requests.reserve_seat(inst_16041,game_id,cljs.core.constant$keyword$256);
var state_16075__$1 = state_16075;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16075__$1,(2),inst_16042);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__11833__auto__))
;
return ((function (switch__11753__auto__,c__11833__auto__){
return (function() {
var state_machine__11754__auto__ = null;
var state_machine__11754__auto____0 = (function (){
var statearr_16095 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16095[(0)] = state_machine__11754__auto__);

(statearr_16095[(1)] = (1));

return statearr_16095;
});
var state_machine__11754__auto____1 = (function (state_16075){
while(true){
var ret_value__11755__auto__ = (function (){try{while(true){
var result__11756__auto__ = switch__11753__auto__(state_16075);
if(cljs.core.keyword_identical_QMARK_(result__11756__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11756__auto__;
}
break;
}
}catch (e16096){if((e16096 instanceof Object)){
var ex__11757__auto__ = e16096;
var statearr_16097_16101 = state_16075;
(statearr_16097_16101[(5)] = ex__11757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16075);

return cljs.core.constant$keyword$61;
} else {
throw e16096;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11755__auto__,cljs.core.constant$keyword$61)){
var G__16102 = state_16075;
state_16075 = G__16102;
continue;
} else {
return ret_value__11755__auto__;
}
break;
}
});
state_machine__11754__auto__ = function(state_16075){
switch(arguments.length){
case 0:
return state_machine__11754__auto____0.call(this);
case 1:
return state_machine__11754__auto____1.call(this,state_16075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11754__auto____0;
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11754__auto____1;
return state_machine__11754__auto__;
})()
;})(switch__11753__auto__,c__11833__auto__))
})();
var state__11835__auto__ = (function (){var statearr_16098 = (function (){return (f__11834__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11834__auto__.cljs$core$IFn$_invoke$arity$0() : f__11834__auto__.call(null));
})();
(statearr_16098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11833__auto__);

return statearr_16098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11835__auto__);
});})(c__11833__auto__))
);

return c__11833__auto__;
});
arimaa.gameroom.piece_at_square = (function piece_at_square(position,col,row){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (piece){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$218,col,cljs.core.constant$keyword$217,row], null),cljs.core.constant$keyword$216.cljs$core$IFn$_invoke$arity$1(piece));
}),position));
});
arimaa.gameroom.piece_to_image = (function piece_to_image(piece){
var colour_char = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$212,cljs.core.constant$keyword$215.cljs$core$IFn$_invoke$arity$1(piece)))?"w":"b");
var animal_char = (function (){var G__16104 = (((cljs.core.constant$keyword$214.cljs$core$IFn$_invoke$arity$1(piece) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$214.cljs$core$IFn$_invoke$arity$1(piece).fqn:null);
switch (G__16104) {
case "elephant":
return "e";

break;
case "camel":
return "m";

break;
case "horse":
return "h";

break;
case "dog":
return "d";

break;
case "cat":
return "c";

break;
case "rabbit":
return "r";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.constant$keyword$214.cljs$core$IFn$_invoke$arity$1(piece))].join('')));

}
})();
return [cljs.core.str("http://arimaa.com/arimaa/jsClient/pro/images/"),cljs.core.str(colour_char),cljs.core.str(animal_char),cljs.core.str(".gif")].join('');
});
arimaa.gameroom.piece_image_at_square = (function piece_image_at_square(position,col,row){
var piece = arimaa.gameroom.piece_at_square(position,col,row);
if(cljs.core.truth_(piece)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$257,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$258,arimaa.gameroom.piece_to_image(piece)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$257,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$258,"http://arimaa.com/arimaa/jsClient/pro/images/sp.gif"], null)], null);
}
});
arimaa.gameroom.ingame_view = (function ingame_view(game){
var game_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
arimaa.gameroom.update_game_state(cljs.core.constant$keyword$123.cljs$core$IFn$_invoke$arity$1(game),game_state);

return ((function (game_state){
return (function (){
var position = cljs.core.constant$keyword$220.cljs$core$IFn$_invoke$arity$1((function (){var G__16137 = game_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16137) : cljs.core.deref.call(null,G__16137));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$259,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$260,(function (){var iter__4386__auto__ = ((function (position,game_state){
return (function iter__16138(s__16139){
return (new cljs.core.LazySeq(null,((function (position,game_state){
return (function (){
var s__16139__$1 = s__16139;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__16139__$1);
if(temp__4126__auto__){
var s__16139__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16139__$2)){
var c__4384__auto__ = cljs.core.chunk_first(s__16139__$2);
var size__4385__auto__ = cljs.core.count(c__4384__auto__);
var b__16141 = cljs.core.chunk_buffer(size__4385__auto__);
if((function (){var i__16140 = (0);
while(true){
if((i__16140 < size__4385__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4384__auto__,i__16140);
cljs.core.chunk_append(b__16141,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$261,(function (){var iter__4386__auto__ = ((function (i__16140,row,c__4384__auto__,size__4385__auto__,b__16141,s__16139__$2,temp__4126__auto__,position,game_state){
return (function iter__16156(s__16157){
return (new cljs.core.LazySeq(null,((function (i__16140,row,c__4384__auto__,size__4385__auto__,b__16141,s__16139__$2,temp__4126__auto__,position,game_state){
return (function (){
var s__16157__$1 = s__16157;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__16157__$1);
if(temp__4126__auto____$1){
var s__16157__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16157__$2)){
var c__4384__auto____$1 = cljs.core.chunk_first(s__16157__$2);
var size__4385__auto____$1 = cljs.core.count(c__4384__auto____$1);
var b__16159 = cljs.core.chunk_buffer(size__4385__auto____$1);
if((function (){var i__16158 = (0);
while(true){
if((i__16158 < size__4385__auto____$1)){
var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4384__auto____$1,i__16158);
cljs.core.chunk_append(b__16159,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$262,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$22,arimaa.gameroom.gameboard_square_class(row,col)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.piece_image_at_square,position,col,row], null)], null));

var G__16168 = (i__16158 + (1));
i__16158 = G__16168;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16159),iter__16156(cljs.core.chunk_rest(s__16157__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16159),null);
}
} else {
var col = cljs.core.first(s__16157__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$262,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$22,arimaa.gameroom.gameboard_square_class(row,col)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.piece_image_at_square,position,col,row], null)], null),iter__16156(cljs.core.rest(s__16157__$2)));
}
} else {
return null;
}
break;
}
});})(i__16140,row,c__4384__auto__,size__4385__auto__,b__16141,s__16139__$2,temp__4126__auto__,position,game_state))
,null,null));
});})(i__16140,row,c__4384__auto__,size__4385__auto__,b__16141,s__16139__$2,temp__4126__auto__,position,game_state))
;
return iter__4386__auto__(arimaa.utils.cols);
})()], null));

var G__16169 = (i__16140 + (1));
i__16140 = G__16169;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16141),iter__16138(cljs.core.chunk_rest(s__16139__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16141),null);
}
} else {
var row = cljs.core.first(s__16139__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$261,(function (){var iter__4386__auto__ = ((function (row,s__16139__$2,temp__4126__auto__,position,game_state){
return (function iter__16162(s__16163){
return (new cljs.core.LazySeq(null,((function (row,s__16139__$2,temp__4126__auto__,position,game_state){
return (function (){
var s__16163__$1 = s__16163;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__16163__$1);
if(temp__4126__auto____$1){
var s__16163__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16163__$2)){
var c__4384__auto__ = cljs.core.chunk_first(s__16163__$2);
var size__4385__auto__ = cljs.core.count(c__4384__auto__);
var b__16165 = cljs.core.chunk_buffer(size__4385__auto__);
if((function (){var i__16164 = (0);
while(true){
if((i__16164 < size__4385__auto__)){
var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4384__auto__,i__16164);
cljs.core.chunk_append(b__16165,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$262,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$22,arimaa.gameroom.gameboard_square_class(row,col)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.piece_image_at_square,position,col,row], null)], null));

var G__16170 = (i__16164 + (1));
i__16164 = G__16170;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16165),iter__16162(cljs.core.chunk_rest(s__16163__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16165),null);
}
} else {
var col = cljs.core.first(s__16163__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$262,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$22,arimaa.gameroom.gameboard_square_class(row,col)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.piece_image_at_square,position,col,row], null)], null),iter__16162(cljs.core.rest(s__16163__$2)));
}
} else {
return null;
}
break;
}
});})(row,s__16139__$2,temp__4126__auto__,position,game_state))
,null,null));
});})(row,s__16139__$2,temp__4126__auto__,position,game_state))
;
return iter__4386__auto__(arimaa.utils.cols);
})()], null),iter__16138(cljs.core.rest(s__16139__$2)));
}
} else {
return null;
}
break;
}
});})(position,game_state))
,null,null));
});})(position,game_state))
;
return iter__4386__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(9)));
})()], null)], null);
});
;})(game_state))
});
arimaa.gameroom.my_games_view = (function my_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$240,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$241,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,"My games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$263.cljs$core$IFn$_invoke$arity$1((function (){var G__16172 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16172) : cljs.core.deref.call(null,G__16172));
})()))], null)], null);
});
arimaa.gameroom.open_games_view = (function open_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$240,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$241,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,"Open games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$264.cljs$core$IFn$_invoke$arity$1((function (){var G__16174 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16174) : cljs.core.deref.call(null,G__16174));
})()))], null)], null);
});
arimaa.gameroom.live_games_view = (function live_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$240,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$241,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,"Live games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231,(function (){var iter__4386__auto__ = (function iter__16182(s__16183){
return (new cljs.core.LazySeq(null,(function (){
var s__16183__$1 = s__16183;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__16183__$1);
if(temp__4126__auto__){
var s__16183__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16183__$2)){
var c__4384__auto__ = cljs.core.chunk_first(s__16183__$2);
var size__4385__auto__ = cljs.core.count(c__4384__auto__);
var b__16185 = cljs.core.chunk_buffer(size__4385__auto__);
if((function (){var i__16184 = (0);
while(true){
if((i__16184 < size__4385__auto__)){
var live_game = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4384__auto__,i__16184);
cljs.core.chunk_append(b__16185,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.ingame_view,live_game], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$37,cljs.core.constant$keyword$123.cljs$core$IFn$_invoke$arity$1(live_game)], null)));

var G__16189 = (i__16184 + (1));
i__16184 = G__16189;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16185),iter__16182(cljs.core.chunk_rest(s__16183__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16185),null);
}
} else {
var live_game = cljs.core.first(s__16183__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.ingame_view,live_game], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$37,cljs.core.constant$keyword$123.cljs$core$IFn$_invoke$arity$1(live_game)], null)),iter__16182(cljs.core.rest(s__16183__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4386__auto__(cljs.core.constant$keyword$265.cljs$core$IFn$_invoke$arity$1((function (){var G__16188 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16188) : cljs.core.deref.call(null,G__16188));
})()));
})()], null)], null);
});
arimaa.gameroom.recent_games_view = (function recent_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$240,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$241,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,"Recent games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$266.cljs$core$IFn$_invoke$arity$1((function (){var G__16191 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16191) : cljs.core.deref.call(null,G__16191));
})()))], null)], null);
});
arimaa.gameroom.gameroom_view = (function gameroom_view(){
arimaa.gameroom.update_gameroom_state();

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$267,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.new_game_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.my_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.open_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.live_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.recent_games_view], null)], null);
});
