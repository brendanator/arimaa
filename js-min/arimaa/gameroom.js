// Compiled by ClojureScript 0.0-2511
goog.provide('arimaa.gameroom');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('arimaa.state');
goog.require('arimaa.requests');
arimaa.gameroom.update_gameroom_state = (function update_gameroom_state(){
var c__11389__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11389__auto__){
return (function (){
var f__11390__auto__ = (function (){var switch__11309__auto__ = ((function (c__11389__auto__){
return (function (state_15894){
var state_val_15895 = (state_15894[(1)]);
if((state_val_15895 === (2))){
var inst_15891 = (state_15894[(2)]);
var inst_15892 = (function (){var G__15896 = arimaa.state.gameroom_state;
var G__15897 = inst_15891;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15896,G__15897) : cljs.core.reset_BANG_.call(null,G__15896,G__15897));
})();
var state_15894__$1 = state_15894;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15894__$1,inst_15892);
} else {
if((state_val_15895 === (1))){
var inst_15888 = (function (){var G__15898 = arimaa.state.session_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15898) : cljs.core.deref.call(null,G__15898));
})();
var inst_15889 = arimaa.requests.gameroom_state(inst_15888);
var state_15894__$1 = state_15894;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15894__$1,(2),inst_15889);
} else {
return null;
}
}
});})(c__11389__auto__))
;
return ((function (switch__11309__auto__,c__11389__auto__){
return (function() {
var state_machine__11310__auto__ = null;
var state_machine__11310__auto____0 = (function (){
var statearr_15902 = [null,null,null,null,null,null,null];
(statearr_15902[(0)] = state_machine__11310__auto__);

(statearr_15902[(1)] = (1));

return statearr_15902;
});
var state_machine__11310__auto____1 = (function (state_15894){
while(true){
var ret_value__11311__auto__ = (function (){try{while(true){
var result__11312__auto__ = switch__11309__auto__(state_15894);
if(cljs.core.keyword_identical_QMARK_(result__11312__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11312__auto__;
}
break;
}
}catch (e15903){if((e15903 instanceof Object)){
var ex__11313__auto__ = e15903;
var statearr_15904_15906 = state_15894;
(statearr_15904_15906[(5)] = ex__11313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15894);

return cljs.core.constant$keyword$40;
} else {
throw e15903;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11311__auto__,cljs.core.constant$keyword$40)){
var G__15907 = state_15894;
state_15894 = G__15907;
continue;
} else {
return ret_value__11311__auto__;
}
break;
}
});
state_machine__11310__auto__ = function(state_15894){
switch(arguments.length){
case 0:
return state_machine__11310__auto____0.call(this);
case 1:
return state_machine__11310__auto____1.call(this,state_15894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11310__auto____0;
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11310__auto____1;
return state_machine__11310__auto__;
})()
;})(switch__11309__auto__,c__11389__auto__))
})();
var state__11391__auto__ = (function (){var statearr_15905 = (function (){return (f__11390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11390__auto__.cljs$core$IFn$_invoke$arity$0() : f__11390__auto__.call(null));
})();
(statearr_15905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11389__auto__);

return statearr_15905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11391__auto__);
});})(c__11389__auto__))
);

return c__11389__auto__;
});
arimaa.gameroom.update_games = (function update_games(){
var c__11389__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11389__auto__){
return (function (){
var f__11390__auto__ = (function (){var switch__11309__auto__ = ((function (c__11389__auto__){
return (function (state_15952){
var state_val_15953 = (state_15952[(1)]);
if((state_val_15953 === (7))){
var inst_15943 = (state_15952[(2)]);
var inst_15944 = arimaa.gameroom.update_gameroom_state();
var state_15952__$1 = (function (){var statearr_15954 = state_15952;
(statearr_15954[(7)] = inst_15944);

(statearr_15954[(8)] = inst_15943);

return statearr_15954;
})();
var statearr_15955_15968 = state_15952__$1;
(statearr_15955_15968[(2)] = null);

(statearr_15955_15968[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_15953 === (6))){
var inst_15948 = (state_15952[(2)]);
var state_15952__$1 = state_15952;
var statearr_15956_15969 = state_15952__$1;
(statearr_15956_15969[(2)] = inst_15948);

(statearr_15956_15969[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_15953 === (5))){
var state_15952__$1 = state_15952;
var statearr_15957_15970 = state_15952__$1;
(statearr_15957_15970[(2)] = null);

(statearr_15957_15970[(1)] = (6));


return cljs.core.constant$keyword$40;
} else {
if((state_val_15953 === (4))){
var inst_15941 = cljs.core.async.timeout((2000));
var state_15952__$1 = state_15952;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15952__$1,(7),inst_15941);
} else {
if((state_val_15953 === (3))){
var inst_15950 = (state_15952[(2)]);
var state_15952__$1 = state_15952;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15952__$1,inst_15950);
} else {
if((state_val_15953 === (2))){
var inst_15939 = arimaa.state.logged_in();
var state_15952__$1 = state_15952;
if(inst_15939){
var statearr_15958_15971 = state_15952__$1;
(statearr_15958_15971[(1)] = (4));

} else {
var statearr_15959_15972 = state_15952__$1;
(statearr_15959_15972[(1)] = (5));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_15953 === (1))){
var state_15952__$1 = state_15952;
var statearr_15960_15973 = state_15952__$1;
(statearr_15960_15973[(2)] = null);

(statearr_15960_15973[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
return null;
}
}
}
}
}
}
}
});})(c__11389__auto__))
;
return ((function (switch__11309__auto__,c__11389__auto__){
return (function() {
var state_machine__11310__auto__ = null;
var state_machine__11310__auto____0 = (function (){
var statearr_15964 = [null,null,null,null,null,null,null,null,null];
(statearr_15964[(0)] = state_machine__11310__auto__);

(statearr_15964[(1)] = (1));

return statearr_15964;
});
var state_machine__11310__auto____1 = (function (state_15952){
while(true){
var ret_value__11311__auto__ = (function (){try{while(true){
var result__11312__auto__ = switch__11309__auto__(state_15952);
if(cljs.core.keyword_identical_QMARK_(result__11312__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11312__auto__;
}
break;
}
}catch (e15965){if((e15965 instanceof Object)){
var ex__11313__auto__ = e15965;
var statearr_15966_15974 = state_15952;
(statearr_15966_15974[(5)] = ex__11313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15952);

return cljs.core.constant$keyword$40;
} else {
throw e15965;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11311__auto__,cljs.core.constant$keyword$40)){
var G__15975 = state_15952;
state_15952 = G__15975;
continue;
} else {
return ret_value__11311__auto__;
}
break;
}
});
state_machine__11310__auto__ = function(state_15952){
switch(arguments.length){
case 0:
return state_machine__11310__auto____0.call(this);
case 1:
return state_machine__11310__auto____1.call(this,state_15952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11310__auto____0;
state_machine__11310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11310__auto____1;
return state_machine__11310__auto__;
})()
;})(switch__11309__auto__,c__11389__auto__))
})();
var state__11391__auto__ = (function (){var statearr_15967 = (function (){return (f__11390__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11390__auto__.cljs$core$IFn$_invoke$arity$0() : f__11390__auto__.call(null));
})();
(statearr_15967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11389__auto__);

return statearr_15967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11391__auto__);
});})(c__11389__auto__))
);

return c__11389__auto__;
});
arimaa.gameroom.new_game_view = (function new_game_view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$228,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$229,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230,"New game"], null)], null)], null);
});
arimaa.gameroom.game_view = (function game_view(game){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$206,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$206,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$232,[cljs.core.str("http://arimaa.com/arimaa/gameroom/playerpage.cgi?id="),cljs.core.str(cljs.core.constant$keyword$234.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$233,"_blank"], null),cljs.core.constant$keyword$235.cljs$core$IFn$_invoke$arity$1(game)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$208," vs "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$232,[cljs.core.str("http://arimaa.com/arimaa/gameroom/playerpage.cgi?id="),cljs.core.str(cljs.core.constant$keyword$236.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$233,"_blank"], null),cljs.core.constant$keyword$237.cljs$core$IFn$_invoke$arity$1(game)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$206,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$208,cljs.core.constant$keyword$238.cljs$core$IFn$_invoke$arity$1(game)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$232,[cljs.core.str("http://arimaa.com/arimaa/gameroom/opengamewin.cgi?gameid="),cljs.core.str(cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$233,"_blank"], null),"View game"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$208,cljs.core.constant$keyword$239.cljs$core$IFn$_invoke$arity$1(game)], null)], null)], null);
});
arimaa.gameroom.my_games_view = (function my_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$228,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$229,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230,"My games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$206,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$240.cljs$core$IFn$_invoke$arity$1((function (){var G__15977 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15977) : cljs.core.deref.call(null,G__15977));
})()))], null)], null);
});
arimaa.gameroom.open_games_view = (function open_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$228,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$229,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230,"Open games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$206,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$241.cljs$core$IFn$_invoke$arity$1((function (){var G__15979 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15979) : cljs.core.deref.call(null,G__15979));
})()))], null)], null);
});
arimaa.gameroom.live_games_view = (function live_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$228,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$229,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230,"Live games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$206,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$242.cljs$core$IFn$_invoke$arity$1((function (){var G__15981 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15981) : cljs.core.deref.call(null,G__15981));
})()))], null)], null);
});
arimaa.gameroom.recent_games_view = (function recent_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$228,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$229,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230,"Recent games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$206,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$243.cljs$core$IFn$_invoke$arity$1((function (){var G__15983 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15983) : cljs.core.deref.call(null,G__15983));
})()))], null)], null);
});
arimaa.gameroom.gameroom_view = (function gameroom_view(){
arimaa.gameroom.update_gameroom_state();

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$244,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.new_game_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.my_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.open_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.live_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.recent_games_view], null)], null);
});
