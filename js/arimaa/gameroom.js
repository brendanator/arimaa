// Compiled by ClojureScript 0.0-2511
goog.provide('arimaa.gameroom');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('arimaa.state');
goog.require('arimaa.requests');
arimaa.gameroom.update_gameroom_state = (function update_gameroom_state(){
var c__11826__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11826__auto__){
return (function (){
var f__11827__auto__ = (function (){var switch__11746__auto__ = ((function (c__11826__auto__){
return (function (state_15862){
var state_val_15863 = (state_15862[(1)]);
if((state_val_15863 === (2))){
var inst_15859 = (state_15862[(2)]);
var inst_15860 = (function (){var G__15864 = arimaa.state.gameroom_state;
var G__15865 = inst_15859;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15864,G__15865) : cljs.core.reset_BANG_.call(null,G__15864,G__15865));
})();
var state_15862__$1 = state_15862;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15862__$1,inst_15860);
} else {
if((state_val_15863 === (1))){
var inst_15856 = (function (){var G__15866 = arimaa.state.session_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15866) : cljs.core.deref.call(null,G__15866));
})();
var inst_15857 = arimaa.requests.gameroom_state(inst_15856);
var state_15862__$1 = state_15862;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15862__$1,(2),inst_15857);
} else {
return null;
}
}
});})(c__11826__auto__))
;
return ((function (switch__11746__auto__,c__11826__auto__){
return (function() {
var state_machine__11747__auto__ = null;
var state_machine__11747__auto____0 = (function (){
var statearr_15870 = [null,null,null,null,null,null,null];
(statearr_15870[(0)] = state_machine__11747__auto__);

(statearr_15870[(1)] = (1));

return statearr_15870;
});
var state_machine__11747__auto____1 = (function (state_15862){
while(true){
var ret_value__11748__auto__ = (function (){try{while(true){
var result__11749__auto__ = switch__11746__auto__(state_15862);
if(cljs.core.keyword_identical_QMARK_(result__11749__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11749__auto__;
}
break;
}
}catch (e15871){if((e15871 instanceof Object)){
var ex__11750__auto__ = e15871;
var statearr_15872_15874 = state_15862;
(statearr_15872_15874[(5)] = ex__11750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15862);

return cljs.core.constant$keyword$61;
} else {
throw e15871;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11748__auto__,cljs.core.constant$keyword$61)){
var G__15875 = state_15862;
state_15862 = G__15875;
continue;
} else {
return ret_value__11748__auto__;
}
break;
}
});
state_machine__11747__auto__ = function(state_15862){
switch(arguments.length){
case 0:
return state_machine__11747__auto____0.call(this);
case 1:
return state_machine__11747__auto____1.call(this,state_15862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11747__auto____0;
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11747__auto____1;
return state_machine__11747__auto__;
})()
;})(switch__11746__auto__,c__11826__auto__))
})();
var state__11828__auto__ = (function (){var statearr_15873 = (function (){return (f__11827__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11827__auto__.cljs$core$IFn$_invoke$arity$0() : f__11827__auto__.call(null));
})();
(statearr_15873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11826__auto__);

return statearr_15873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11828__auto__);
});})(c__11826__auto__))
);

return c__11826__auto__;
});
arimaa.gameroom.update_games = (function update_games(){
var c__11826__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11826__auto__){
return (function (){
var f__11827__auto__ = (function (){var switch__11746__auto__ = ((function (c__11826__auto__){
return (function (state_15920){
var state_val_15921 = (state_15920[(1)]);
if((state_val_15921 === (7))){
var inst_15911 = (state_15920[(2)]);
var inst_15912 = arimaa.gameroom.update_gameroom_state();
var state_15920__$1 = (function (){var statearr_15922 = state_15920;
(statearr_15922[(7)] = inst_15912);

(statearr_15922[(8)] = inst_15911);

return statearr_15922;
})();
var statearr_15923_15936 = state_15920__$1;
(statearr_15923_15936[(2)] = null);

(statearr_15923_15936[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_15921 === (6))){
var inst_15916 = (state_15920[(2)]);
var state_15920__$1 = state_15920;
var statearr_15924_15937 = state_15920__$1;
(statearr_15924_15937[(2)] = inst_15916);

(statearr_15924_15937[(1)] = (3));


return cljs.core.constant$keyword$61;
} else {
if((state_val_15921 === (5))){
var state_15920__$1 = state_15920;
var statearr_15925_15938 = state_15920__$1;
(statearr_15925_15938[(2)] = null);

(statearr_15925_15938[(1)] = (6));


return cljs.core.constant$keyword$61;
} else {
if((state_val_15921 === (4))){
var inst_15909 = cljs.core.async.timeout((2000));
var state_15920__$1 = state_15920;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15920__$1,(7),inst_15909);
} else {
if((state_val_15921 === (3))){
var inst_15918 = (state_15920[(2)]);
var state_15920__$1 = state_15920;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15920__$1,inst_15918);
} else {
if((state_val_15921 === (2))){
var inst_15907 = arimaa.state.logged_in();
var state_15920__$1 = state_15920;
if(inst_15907){
var statearr_15926_15939 = state_15920__$1;
(statearr_15926_15939[(1)] = (4));

} else {
var statearr_15927_15940 = state_15920__$1;
(statearr_15927_15940[(1)] = (5));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_15921 === (1))){
var state_15920__$1 = state_15920;
var statearr_15928_15941 = state_15920__$1;
(statearr_15928_15941[(2)] = null);

(statearr_15928_15941[(1)] = (2));


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
});})(c__11826__auto__))
;
return ((function (switch__11746__auto__,c__11826__auto__){
return (function() {
var state_machine__11747__auto__ = null;
var state_machine__11747__auto____0 = (function (){
var statearr_15932 = [null,null,null,null,null,null,null,null,null];
(statearr_15932[(0)] = state_machine__11747__auto__);

(statearr_15932[(1)] = (1));

return statearr_15932;
});
var state_machine__11747__auto____1 = (function (state_15920){
while(true){
var ret_value__11748__auto__ = (function (){try{while(true){
var result__11749__auto__ = switch__11746__auto__(state_15920);
if(cljs.core.keyword_identical_QMARK_(result__11749__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11749__auto__;
}
break;
}
}catch (e15933){if((e15933 instanceof Object)){
var ex__11750__auto__ = e15933;
var statearr_15934_15942 = state_15920;
(statearr_15934_15942[(5)] = ex__11750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15920);

return cljs.core.constant$keyword$61;
} else {
throw e15933;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11748__auto__,cljs.core.constant$keyword$61)){
var G__15943 = state_15920;
state_15920 = G__15943;
continue;
} else {
return ret_value__11748__auto__;
}
break;
}
});
state_machine__11747__auto__ = function(state_15920){
switch(arguments.length){
case 0:
return state_machine__11747__auto____0.call(this);
case 1:
return state_machine__11747__auto____1.call(this,state_15920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11747__auto____0;
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11747__auto____1;
return state_machine__11747__auto__;
})()
;})(switch__11746__auto__,c__11826__auto__))
})();
var state__11828__auto__ = (function (){var statearr_15935 = (function (){return (f__11827__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11827__auto__.cljs$core$IFn$_invoke$arity$0() : f__11827__auto__.call(null));
})();
(statearr_15935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11826__auto__);

return statearr_15935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11828__auto__);
});})(c__11826__auto__))
);

return c__11826__auto__;
});
arimaa.gameroom.new_game_view = (function new_game_view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$220,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$221,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$222,"New game"], null)], null)], null);
});
arimaa.gameroom.game_view = (function game_view(game){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$211,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$211,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$223,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$224,[cljs.core.str("http://arimaa.com/arimaa/gameroom/playerpage.cgi?id="),cljs.core.str(cljs.core.constant$keyword$226.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$225,"_blank"], null),cljs.core.constant$keyword$227.cljs$core$IFn$_invoke$arity$1(game)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$228," vs "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$223,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$224,[cljs.core.str("http://arimaa.com/arimaa/gameroom/playerpage.cgi?id="),cljs.core.str(cljs.core.constant$keyword$229.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$225,"_blank"], null),cljs.core.constant$keyword$230.cljs$core$IFn$_invoke$arity$1(game)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$211,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$228,cljs.core.constant$keyword$231.cljs$core$IFn$_invoke$arity$1(game)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$223,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$224,[cljs.core.str("http://arimaa.com/arimaa/gameroom/opengamewin.cgi?gameid="),cljs.core.str(cljs.core.constant$keyword$123.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$225,"_blank"], null),"View game"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$228,cljs.core.constant$keyword$232.cljs$core$IFn$_invoke$arity$1(game)], null)], null)], null);
});
arimaa.gameroom.my_games_view = (function my_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$220,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$221,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$222,"My games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$211,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$233.cljs$core$IFn$_invoke$arity$1((function (){var G__15945 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15945) : cljs.core.deref.call(null,G__15945));
})()))], null)], null);
});
arimaa.gameroom.open_games_view = (function open_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$220,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$221,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$222,"Open games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$211,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$234.cljs$core$IFn$_invoke$arity$1((function (){var G__15947 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15947) : cljs.core.deref.call(null,G__15947));
})()))], null)], null);
});
arimaa.gameroom.live_games_view = (function live_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$220,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$221,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$222,"Live games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$211,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$235.cljs$core$IFn$_invoke$arity$1((function (){var G__15949 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15949) : cljs.core.deref.call(null,G__15949));
})()))], null)], null);
});
arimaa.gameroom.recent_games_view = (function recent_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$220,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$221,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$222,"Recent games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$211,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$236.cljs$core$IFn$_invoke$arity$1((function (){var G__15951 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15951) : cljs.core.deref.call(null,G__15951));
})()))], null)], null);
});
arimaa.gameroom.gameroom_view = (function gameroom_view(){
arimaa.gameroom.update_gameroom_state();

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$237,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.new_game_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.my_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.open_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.live_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.recent_games_view], null)], null);
});
