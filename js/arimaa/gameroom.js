// Compiled by ClojureScript 0.0-2511
goog.provide('arimaa.gameroom');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('arimaa.state');
goog.require('arimaa.requests');
arimaa.gameroom.update_gameroom_state = (function update_gameroom_state(){
var c__11276__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11276__auto__){
return (function (){
var f__11277__auto__ = (function (){var switch__11261__auto__ = ((function (c__11276__auto__){
return (function (state_15752){
var state_val_15753 = (state_15752[(1)]);
if((state_val_15753 === (2))){
var inst_15749 = (state_15752[(2)]);
var inst_15750 = (function (){var G__15754 = arimaa.state.gameroom_state;
var G__15755 = inst_15749;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15754,G__15755) : cljs.core.reset_BANG_.call(null,G__15754,G__15755));
})();
var state_15752__$1 = state_15752;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15752__$1,inst_15750);
} else {
if((state_val_15753 === (1))){
var inst_15746 = (function (){var G__15756 = arimaa.state.session_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15756) : cljs.core.deref.call(null,G__15756));
})();
var inst_15747 = arimaa.requests.gameroom_state(inst_15746);
var state_15752__$1 = state_15752;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15752__$1,(2),inst_15747);
} else {
return null;
}
}
});})(c__11276__auto__))
;
return ((function (switch__11261__auto__,c__11276__auto__){
return (function() {
var state_machine__11262__auto__ = null;
var state_machine__11262__auto____0 = (function (){
var statearr_15760 = [null,null,null,null,null,null,null];
(statearr_15760[(0)] = state_machine__11262__auto__);

(statearr_15760[(1)] = (1));

return statearr_15760;
});
var state_machine__11262__auto____1 = (function (state_15752){
while(true){
var ret_value__11263__auto__ = (function (){try{while(true){
var result__11264__auto__ = switch__11261__auto__(state_15752);
if(cljs.core.keyword_identical_QMARK_(result__11264__auto__,cljs.core.constant$keyword$44)){
continue;
} else {
return result__11264__auto__;
}
break;
}
}catch (e15761){if((e15761 instanceof Object)){
var ex__11265__auto__ = e15761;
var statearr_15762_15764 = state_15752;
(statearr_15762_15764[(5)] = ex__11265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15752);

return cljs.core.constant$keyword$44;
} else {
throw e15761;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11263__auto__,cljs.core.constant$keyword$44)){
var G__15765 = state_15752;
state_15752 = G__15765;
continue;
} else {
return ret_value__11263__auto__;
}
break;
}
});
state_machine__11262__auto__ = function(state_15752){
switch(arguments.length){
case 0:
return state_machine__11262__auto____0.call(this);
case 1:
return state_machine__11262__auto____1.call(this,state_15752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11262__auto____0;
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11262__auto____1;
return state_machine__11262__auto__;
})()
;})(switch__11261__auto__,c__11276__auto__))
})();
var state__11278__auto__ = (function (){var statearr_15763 = (function (){return (f__11277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11277__auto__.cljs$core$IFn$_invoke$arity$0() : f__11277__auto__.call(null));
})();
(statearr_15763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11276__auto__);

return statearr_15763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11278__auto__);
});})(c__11276__auto__))
);

return c__11276__auto__;
});
arimaa.gameroom.update_games = (function update_games(){
var c__11276__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11276__auto__){
return (function (){
var f__11277__auto__ = (function (){var switch__11261__auto__ = ((function (c__11276__auto__){
return (function (state_15810){
var state_val_15811 = (state_15810[(1)]);
if((state_val_15811 === (7))){
var inst_15801 = (state_15810[(2)]);
var inst_15802 = arimaa.gameroom.update_gameroom_state();
var state_15810__$1 = (function (){var statearr_15812 = state_15810;
(statearr_15812[(7)] = inst_15802);

(statearr_15812[(8)] = inst_15801);

return statearr_15812;
})();
var statearr_15813_15826 = state_15810__$1;
(statearr_15813_15826[(2)] = null);

(statearr_15813_15826[(1)] = (2));


return cljs.core.constant$keyword$44;
} else {
if((state_val_15811 === (6))){
var inst_15806 = (state_15810[(2)]);
var state_15810__$1 = state_15810;
var statearr_15814_15827 = state_15810__$1;
(statearr_15814_15827[(2)] = inst_15806);

(statearr_15814_15827[(1)] = (3));


return cljs.core.constant$keyword$44;
} else {
if((state_val_15811 === (5))){
var state_15810__$1 = state_15810;
var statearr_15815_15828 = state_15810__$1;
(statearr_15815_15828[(2)] = null);

(statearr_15815_15828[(1)] = (6));


return cljs.core.constant$keyword$44;
} else {
if((state_val_15811 === (4))){
var inst_15799 = cljs.core.async.timeout((2000));
var state_15810__$1 = state_15810;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15810__$1,(7),inst_15799);
} else {
if((state_val_15811 === (3))){
var inst_15808 = (state_15810[(2)]);
var state_15810__$1 = state_15810;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15810__$1,inst_15808);
} else {
if((state_val_15811 === (2))){
var inst_15797 = arimaa.state.logged_in();
var state_15810__$1 = state_15810;
if(inst_15797){
var statearr_15816_15829 = state_15810__$1;
(statearr_15816_15829[(1)] = (4));

} else {
var statearr_15817_15830 = state_15810__$1;
(statearr_15817_15830[(1)] = (5));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_15811 === (1))){
var state_15810__$1 = state_15810;
var statearr_15818_15831 = state_15810__$1;
(statearr_15818_15831[(2)] = null);

(statearr_15818_15831[(1)] = (2));


return cljs.core.constant$keyword$44;
} else {
return null;
}
}
}
}
}
}
}
});})(c__11276__auto__))
;
return ((function (switch__11261__auto__,c__11276__auto__){
return (function() {
var state_machine__11262__auto__ = null;
var state_machine__11262__auto____0 = (function (){
var statearr_15822 = [null,null,null,null,null,null,null,null,null];
(statearr_15822[(0)] = state_machine__11262__auto__);

(statearr_15822[(1)] = (1));

return statearr_15822;
});
var state_machine__11262__auto____1 = (function (state_15810){
while(true){
var ret_value__11263__auto__ = (function (){try{while(true){
var result__11264__auto__ = switch__11261__auto__(state_15810);
if(cljs.core.keyword_identical_QMARK_(result__11264__auto__,cljs.core.constant$keyword$44)){
continue;
} else {
return result__11264__auto__;
}
break;
}
}catch (e15823){if((e15823 instanceof Object)){
var ex__11265__auto__ = e15823;
var statearr_15824_15832 = state_15810;
(statearr_15824_15832[(5)] = ex__11265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15810);

return cljs.core.constant$keyword$44;
} else {
throw e15823;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11263__auto__,cljs.core.constant$keyword$44)){
var G__15833 = state_15810;
state_15810 = G__15833;
continue;
} else {
return ret_value__11263__auto__;
}
break;
}
});
state_machine__11262__auto__ = function(state_15810){
switch(arguments.length){
case 0:
return state_machine__11262__auto____0.call(this);
case 1:
return state_machine__11262__auto____1.call(this,state_15810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11262__auto____0;
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11262__auto____1;
return state_machine__11262__auto__;
})()
;})(switch__11261__auto__,c__11276__auto__))
})();
var state__11278__auto__ = (function (){var statearr_15825 = (function (){return (f__11277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11277__auto__.cljs$core$IFn$_invoke$arity$0() : f__11277__auto__.call(null));
})();
(statearr_15825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11276__auto__);

return statearr_15825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11278__auto__);
});})(c__11276__auto__))
);

return c__11276__auto__;
});
arimaa.gameroom.new_game_view = (function new_game_view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$209,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$210,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$211,"New game"], null)], null)], null);
});
arimaa.gameroom.game_view = (function game_view(game){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$212,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$212,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$213,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$214,[cljs.core.str("http://arimaa.com/arimaa/gameroom/playerpage.cgi?id="),cljs.core.str(cljs.core.constant$keyword$216.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$215,"_blank"], null),cljs.core.constant$keyword$217.cljs$core$IFn$_invoke$arity$1(game)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$218," vs "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$213,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$214,[cljs.core.str("http://arimaa.com/arimaa/gameroom/playerpage.cgi?id="),cljs.core.str(cljs.core.constant$keyword$219.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$215,"_blank"], null),cljs.core.constant$keyword$220.cljs$core$IFn$_invoke$arity$1(game)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$212,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$218,cljs.core.constant$keyword$221.cljs$core$IFn$_invoke$arity$1(game)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$213,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$214,[cljs.core.str("http://arimaa.com/arimaa/gameroom/opengamewin.cgi?gameid="),cljs.core.str(cljs.core.constant$keyword$123.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$215,"_blank"], null),"View game"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$218,cljs.core.constant$keyword$222.cljs$core$IFn$_invoke$arity$1(game)], null)], null)], null);
});
arimaa.gameroom.my_games_view = (function my_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$209,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$210,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$211,"My games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$212,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$223.cljs$core$IFn$_invoke$arity$1((function (){var G__15835 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15835) : cljs.core.deref.call(null,G__15835));
})()))], null)], null);
});
arimaa.gameroom.open_games_view = (function open_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$209,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$210,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$211,"Open games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$212,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$224.cljs$core$IFn$_invoke$arity$1((function (){var G__15837 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15837) : cljs.core.deref.call(null,G__15837));
})()))], null)], null);
});
arimaa.gameroom.live_games_view = (function live_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$209,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$210,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$211,"Live games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$212,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$225.cljs$core$IFn$_invoke$arity$1((function (){var G__15839 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15839) : cljs.core.deref.call(null,G__15839));
})()))], null)], null);
});
arimaa.gameroom.recent_games_view = (function recent_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$209,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$210,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$211,"Recent games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$212,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$226.cljs$core$IFn$_invoke$arity$1((function (){var G__15841 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15841) : cljs.core.deref.call(null,G__15841));
})()))], null)], null);
});
arimaa.gameroom.gameroom_view = (function gameroom_view(){
arimaa.gameroom.update_gameroom_state();

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$227,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.new_game_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.my_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.open_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.live_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.recent_games_view], null)], null);
});
