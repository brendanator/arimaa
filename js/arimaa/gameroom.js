// Compiled by ClojureScript 0.0-2511
goog.provide('arimaa.gameroom');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('arimaa.utils');
goog.require('arimaa.state');
goog.require('arimaa.requests');
arimaa.gameroom.gameroom_state_channel = (function gameroom_state_channel(){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__5853__auto___16036 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___16036,c){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___16036,c){
return (function (state_16019){
var state_val_16020 = (state_16019[(1)]);
if((state_val_16020 === (9))){
var inst_16011 = (state_16019[(2)]);
var state_16019__$1 = (function (){var statearr_16021 = state_16019;
(statearr_16021[(7)] = inst_16011);

return statearr_16021;
})();
var statearr_16022_16037 = state_16019__$1;
(statearr_16022_16037[(2)] = null);

(statearr_16022_16037[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16020 === (8))){
var inst_16015 = (state_16019[(2)]);
var state_16019__$1 = state_16019;
var statearr_16023_16038 = state_16019__$1;
(statearr_16023_16038[(2)] = inst_16015);

(statearr_16023_16038[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16020 === (7))){
var state_16019__$1 = state_16019;
var statearr_16024_16039 = state_16019__$1;
(statearr_16024_16039[(2)] = null);

(statearr_16024_16039[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16020 === (6))){
var inst_16009 = cljs.core.async.timeout((2000));
var state_16019__$1 = state_16019;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16019__$1,(9),inst_16009);
} else {
if((state_val_16020 === (5))){
var inst_16007 = (state_16019[(2)]);
var state_16019__$1 = state_16019;
if(cljs.core.truth_(inst_16007)){
var statearr_16025_16040 = state_16019__$1;
(statearr_16025_16040[(1)] = (6));

} else {
var statearr_16026_16041 = state_16019__$1;
(statearr_16026_16041[(1)] = (7));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_16020 === (4))){
var inst_16005 = (state_16019[(2)]);
var state_16019__$1 = state_16019;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16019__$1,(5),c,inst_16005);
} else {
if((state_val_16020 === (3))){
var inst_16017 = (state_16019[(2)]);
var state_16019__$1 = state_16019;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16019__$1,inst_16017);
} else {
if((state_val_16020 === (2))){
var inst_16002 = (function (){var G__16027 = arimaa.state.session_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16027) : cljs.core.deref.call(null,G__16027));
})();
var inst_16003 = arimaa.requests.gameroom_state(inst_16002);
var state_16019__$1 = state_16019;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16019__$1,(4),inst_16003);
} else {
if((state_val_16020 === (1))){
var state_16019__$1 = state_16019;
var statearr_16028_16042 = state_16019__$1;
(statearr_16028_16042[(2)] = null);

(statearr_16028_16042[(1)] = (2));


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
}
}
});})(c__5853__auto___16036,c))
;
return ((function (switch__5838__auto__,c__5853__auto___16036,c){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_16032 = [null,null,null,null,null,null,null,null];
(statearr_16032[(0)] = state_machine__5839__auto__);

(statearr_16032[(1)] = (1));

return statearr_16032;
});
var state_machine__5839__auto____1 = (function (state_16019){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_16019);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e16033){if((e16033 instanceof Object)){
var ex__5842__auto__ = e16033;
var statearr_16034_16043 = state_16019;
(statearr_16034_16043[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16019);

return cljs.core.constant$keyword$41;
} else {
throw e16033;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__16044 = state_16019;
state_16019 = G__16044;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_16019){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_16019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___16036,c))
})();
var state__5855__auto__ = (function (){var statearr_16035 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_16035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___16036);

return statearr_16035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___16036,c))
);


return c;
});
arimaa.gameroom.new_game_view = (function new_game_view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$244,"New game"], null)], null)], null);
});
arimaa.gameroom.game_view = (function game_view(game){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$246,[cljs.core.str("http://arimaa.com/arimaa/gameroom/playerpage.cgi?id="),cljs.core.str(cljs.core.constant$keyword$248.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$247,"_blank"], null),cljs.core.constant$keyword$249.cljs$core$IFn$_invoke$arity$1(game)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250," vs "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$246,[cljs.core.str("http://arimaa.com/arimaa/gameroom/playerpage.cgi?id="),cljs.core.str(cljs.core.constant$keyword$251.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$247,"_blank"], null),cljs.core.constant$keyword$252.cljs$core$IFn$_invoke$arity$1(game)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,cljs.core.constant$keyword$253.cljs$core$IFn$_invoke$arity$1(game)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$246,[cljs.core.str("http://arimaa.com/arimaa/gameroom/opengamewin.cgi?gameid="),cljs.core.str(cljs.core.constant$keyword$123.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$247,"_blank"], null),"View game"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,cljs.core.constant$keyword$254.cljs$core$IFn$_invoke$arity$1(game)], null)], null)], null);
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
arimaa.gameroom.game_state_channel = (function game_state_channel(game_id){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__5853__auto___16143 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___16143,c){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___16143,c){
return (function (state_16122){
var state_val_16123 = (state_16122[(1)]);
if((state_val_16123 === (7))){
var inst_16112 = (state_16122[(2)]);
var state_16122__$1 = state_16122;
if(cljs.core.truth_(inst_16112)){
var statearr_16124_16144 = state_16122__$1;
(statearr_16124_16144[(1)] = (8));

} else {
var statearr_16125_16145 = state_16122__$1;
(statearr_16125_16145[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_16123 === (1))){
var inst_16094 = (function (){var G__16126 = arimaa.state.session_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16126) : cljs.core.deref.call(null,G__16126));
})();
var inst_16095 = arimaa.requests.reserve_seat(inst_16094,game_id,cljs.core.constant$keyword$255);
var state_16122__$1 = state_16122;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16122__$1,(2),inst_16095);
} else {
if((state_val_16123 === (4))){
var inst_16104 = (state_16122[(7)]);
var inst_16103 = (state_16122[(8)]);
var inst_16097 = (state_16122[(9)]);
var inst_16106 = cljs.core.constant$keyword$256.cljs$core$IFn$_invoke$arity$1(inst_16097);
var inst_16107 = cljs.core.constant$keyword$200.cljs$core$IFn$_invoke$arity$1(inst_16103);
var inst_16108 = arimaa.requests.game_state(inst_16106,inst_16107,inst_16104);
var state_16122__$1 = state_16122;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16122__$1,(6),inst_16108);
} else {
if((state_val_16123 === (6))){
var inst_16110 = (state_16122[(10)]);
var inst_16110__$1 = (state_16122[(2)]);
var state_16122__$1 = (function (){var statearr_16127 = state_16122;
(statearr_16127[(10)] = inst_16110__$1);

return statearr_16127;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16122__$1,(7),c,inst_16110__$1);
} else {
if((state_val_16123 === (3))){
var inst_16103 = (state_16122[(2)]);
var inst_16104 = (0);
var state_16122__$1 = (function (){var statearr_16128 = state_16122;
(statearr_16128[(7)] = inst_16104);

(statearr_16128[(8)] = inst_16103);

return statearr_16128;
})();
var statearr_16129_16146 = state_16122__$1;
(statearr_16129_16146[(2)] = null);

(statearr_16129_16146[(1)] = (4));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16123 === (2))){
var inst_16097 = (state_16122[(9)]);
var inst_16097__$1 = (state_16122[(2)]);
var inst_16098 = cljs.core.constant$keyword$256.cljs$core$IFn$_invoke$arity$1(inst_16097__$1);
var inst_16099 = (function (){var G__16130 = arimaa.state.gameroom_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16130) : cljs.core.deref.call(null,G__16130));
})();
var inst_16100 = cljs.core.constant$keyword$204.cljs$core$IFn$_invoke$arity$1(inst_16097__$1);
var inst_16101 = arimaa.requests.sit(inst_16098,inst_16099,inst_16100);
var state_16122__$1 = (function (){var statearr_16131 = state_16122;
(statearr_16131[(9)] = inst_16097__$1);

return statearr_16131;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16122__$1,(3),inst_16101);
} else {
if((state_val_16123 === (9))){
var state_16122__$1 = state_16122;
var statearr_16132_16147 = state_16122__$1;
(statearr_16132_16147[(2)] = null);

(statearr_16132_16147[(1)] = (10));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16123 === (5))){
var inst_16120 = (state_16122[(2)]);
var state_16122__$1 = state_16122;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16122__$1,inst_16120);
} else {
if((state_val_16123 === (10))){
var inst_16118 = (state_16122[(2)]);
var state_16122__$1 = state_16122;
var statearr_16133_16148 = state_16122__$1;
(statearr_16133_16148[(2)] = inst_16118);

(statearr_16133_16148[(1)] = (5));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16123 === (8))){
var inst_16110 = (state_16122[(10)]);
var inst_16114 = cljs.core.constant$keyword$222.cljs$core$IFn$_invoke$arity$1(inst_16110);
var inst_16104 = inst_16114;
var state_16122__$1 = (function (){var statearr_16134 = state_16122;
(statearr_16134[(7)] = inst_16104);

return statearr_16134;
})();
var statearr_16135_16149 = state_16122__$1;
(statearr_16135_16149[(2)] = null);

(statearr_16135_16149[(1)] = (4));


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
}
}
}
});})(c__5853__auto___16143,c))
;
return ((function (switch__5838__auto__,c__5853__auto___16143,c){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_16139 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16139[(0)] = state_machine__5839__auto__);

(statearr_16139[(1)] = (1));

return statearr_16139;
});
var state_machine__5839__auto____1 = (function (state_16122){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_16122);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e16140){if((e16140 instanceof Object)){
var ex__5842__auto__ = e16140;
var statearr_16141_16150 = state_16122;
(statearr_16141_16150[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16122);

return cljs.core.constant$keyword$41;
} else {
throw e16140;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__16151 = state_16122;
state_16122 = G__16151;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_16122){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_16122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___16143,c))
})();
var state__5855__auto__ = (function (){var statearr_16142 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_16142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___16143);

return statearr_16142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___16143,c))
);


return c;
});
arimaa.gameroom.piece_at_square = (function piece_at_square(position,col,row){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (piece){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$218,col,cljs.core.constant$keyword$217,row], null),cljs.core.constant$keyword$216.cljs$core$IFn$_invoke$arity$1(piece));
}),position));
});
arimaa.gameroom.piece_to_image = (function piece_to_image(piece){
var colour_char = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$212,cljs.core.constant$keyword$215.cljs$core$IFn$_invoke$arity$1(piece)))?"w":"b");
var animal_char = (function (){var G__16153 = (((cljs.core.constant$keyword$214.cljs$core$IFn$_invoke$arity$1(piece) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$214.cljs$core$IFn$_invoke$arity$1(piece).fqn:null);
switch (G__16153) {
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
var game_state_chan = arimaa.gameroom.game_state_channel(cljs.core.constant$keyword$123.cljs$core$IFn$_invoke$arity$1(game));
arimaa.utils.subscribe_atom_to_channel_BANG_(game_state,game_state_chan);

return ((function (game_state,game_state_chan){
return (function (){
var position = cljs.core.constant$keyword$220.cljs$core$IFn$_invoke$arity$1((function (){var G__16186 = game_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16186) : cljs.core.deref.call(null,G__16186));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$259,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$260,(function (){var iter__4386__auto__ = ((function (position,game_state,game_state_chan){
return (function iter__16187(s__16188){
return (new cljs.core.LazySeq(null,((function (position,game_state,game_state_chan){
return (function (){
var s__16188__$1 = s__16188;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__16188__$1);
if(temp__4126__auto__){
var s__16188__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16188__$2)){
var c__4384__auto__ = cljs.core.chunk_first(s__16188__$2);
var size__4385__auto__ = cljs.core.count(c__4384__auto__);
var b__16190 = cljs.core.chunk_buffer(size__4385__auto__);
if((function (){var i__16189 = (0);
while(true){
if((i__16189 < size__4385__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4384__auto__,i__16189);
cljs.core.chunk_append(b__16190,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$261,(function (){var iter__4386__auto__ = ((function (i__16189,row,c__4384__auto__,size__4385__auto__,b__16190,s__16188__$2,temp__4126__auto__,position,game_state,game_state_chan){
return (function iter__16205(s__16206){
return (new cljs.core.LazySeq(null,((function (i__16189,row,c__4384__auto__,size__4385__auto__,b__16190,s__16188__$2,temp__4126__auto__,position,game_state,game_state_chan){
return (function (){
var s__16206__$1 = s__16206;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__16206__$1);
if(temp__4126__auto____$1){
var s__16206__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16206__$2)){
var c__4384__auto____$1 = cljs.core.chunk_first(s__16206__$2);
var size__4385__auto____$1 = cljs.core.count(c__4384__auto____$1);
var b__16208 = cljs.core.chunk_buffer(size__4385__auto____$1);
if((function (){var i__16207 = (0);
while(true){
if((i__16207 < size__4385__auto____$1)){
var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4384__auto____$1,i__16207);
cljs.core.chunk_append(b__16208,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$262,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$22,arimaa.gameroom.gameboard_square_class(row,col)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.piece_image_at_square,position,col,row], null)], null));

var G__16217 = (i__16207 + (1));
i__16207 = G__16217;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16208),iter__16205(cljs.core.chunk_rest(s__16206__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16208),null);
}
} else {
var col = cljs.core.first(s__16206__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$262,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$22,arimaa.gameroom.gameboard_square_class(row,col)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.piece_image_at_square,position,col,row], null)], null),iter__16205(cljs.core.rest(s__16206__$2)));
}
} else {
return null;
}
break;
}
});})(i__16189,row,c__4384__auto__,size__4385__auto__,b__16190,s__16188__$2,temp__4126__auto__,position,game_state,game_state_chan))
,null,null));
});})(i__16189,row,c__4384__auto__,size__4385__auto__,b__16190,s__16188__$2,temp__4126__auto__,position,game_state,game_state_chan))
;
return iter__4386__auto__(arimaa.utils.cols);
})()], null));

var G__16218 = (i__16189 + (1));
i__16189 = G__16218;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16190),iter__16187(cljs.core.chunk_rest(s__16188__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16190),null);
}
} else {
var row = cljs.core.first(s__16188__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$261,(function (){var iter__4386__auto__ = ((function (row,s__16188__$2,temp__4126__auto__,position,game_state,game_state_chan){
return (function iter__16211(s__16212){
return (new cljs.core.LazySeq(null,((function (row,s__16188__$2,temp__4126__auto__,position,game_state,game_state_chan){
return (function (){
var s__16212__$1 = s__16212;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__16212__$1);
if(temp__4126__auto____$1){
var s__16212__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16212__$2)){
var c__4384__auto__ = cljs.core.chunk_first(s__16212__$2);
var size__4385__auto__ = cljs.core.count(c__4384__auto__);
var b__16214 = cljs.core.chunk_buffer(size__4385__auto__);
if((function (){var i__16213 = (0);
while(true){
if((i__16213 < size__4385__auto__)){
var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4384__auto__,i__16213);
cljs.core.chunk_append(b__16214,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$262,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$22,arimaa.gameroom.gameboard_square_class(row,col)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.piece_image_at_square,position,col,row], null)], null));

var G__16219 = (i__16213 + (1));
i__16213 = G__16219;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16214),iter__16211(cljs.core.chunk_rest(s__16212__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16214),null);
}
} else {
var col = cljs.core.first(s__16212__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$262,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$22,arimaa.gameroom.gameboard_square_class(row,col)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.piece_image_at_square,position,col,row], null)], null),iter__16211(cljs.core.rest(s__16212__$2)));
}
} else {
return null;
}
break;
}
});})(row,s__16188__$2,temp__4126__auto__,position,game_state,game_state_chan))
,null,null));
});})(row,s__16188__$2,temp__4126__auto__,position,game_state,game_state_chan))
;
return iter__4386__auto__(arimaa.utils.cols);
})()], null),iter__16187(cljs.core.rest(s__16188__$2)));
}
} else {
return null;
}
break;
}
});})(position,game_state,game_state_chan))
,null,null));
});})(position,game_state,game_state_chan))
;
return iter__4386__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(9)));
})()], null)], null);
});
;})(game_state,game_state_chan))
});
arimaa.gameroom.my_games_view = (function my_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$244,"My games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$263.cljs$core$IFn$_invoke$arity$1((function (){var G__16221 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16221) : cljs.core.deref.call(null,G__16221));
})()))], null)], null);
});
arimaa.gameroom.open_games_view = (function open_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$244,"Open games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$264.cljs$core$IFn$_invoke$arity$1((function (){var G__16223 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16223) : cljs.core.deref.call(null,G__16223));
})()))], null)], null);
});
arimaa.gameroom.live_games_view = (function live_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$244,"Live games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233,(function (){var iter__4386__auto__ = (function iter__16231(s__16232){
return (new cljs.core.LazySeq(null,(function (){
var s__16232__$1 = s__16232;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__16232__$1);
if(temp__4126__auto__){
var s__16232__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16232__$2)){
var c__4384__auto__ = cljs.core.chunk_first(s__16232__$2);
var size__4385__auto__ = cljs.core.count(c__4384__auto__);
var b__16234 = cljs.core.chunk_buffer(size__4385__auto__);
if((function (){var i__16233 = (0);
while(true){
if((i__16233 < size__4385__auto__)){
var live_game = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4384__auto__,i__16233);
cljs.core.chunk_append(b__16234,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.ingame_view,live_game], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$37,cljs.core.constant$keyword$123.cljs$core$IFn$_invoke$arity$1(live_game)], null)));

var G__16238 = (i__16233 + (1));
i__16233 = G__16238;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16234),iter__16231(cljs.core.chunk_rest(s__16232__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16234),null);
}
} else {
var live_game = cljs.core.first(s__16232__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.ingame_view,live_game], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$37,cljs.core.constant$keyword$123.cljs$core$IFn$_invoke$arity$1(live_game)], null)),iter__16231(cljs.core.rest(s__16232__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4386__auto__(cljs.core.constant$keyword$265.cljs$core$IFn$_invoke$arity$1((function (){var G__16237 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16237) : cljs.core.deref.call(null,G__16237));
})()));
})()], null)], null);
});
arimaa.gameroom.recent_games_view = (function recent_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$244,"Recent games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$266.cljs$core$IFn$_invoke$arity$1((function (){var G__16240 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16240) : cljs.core.deref.call(null,G__16240));
})()))], null)], null);
});
arimaa.gameroom.gameroom_view = (function gameroom_view(){
arimaa.utils.subscribe_atom_to_channel_BANG_(arimaa.state.gameroom_state,arimaa.gameroom.gameroom_state_channel());

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$267,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.new_game_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.my_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.open_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.live_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.recent_games_view], null)], null);
});
