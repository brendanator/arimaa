// Compiled by ClojureScript 0.0-2511
goog.provide('arimaa.gameroom');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('arimaa.utils');
goog.require('arimaa.state');
goog.require('arimaa.requests');
goog.require('arimaa.game');
arimaa.gameroom.gameroom_state_channel = (function gameroom_state_channel(){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__5853__auto___16404 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___16404,c){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___16404,c){
return (function (state_16387){
var state_val_16388 = (state_16387[(1)]);
if((state_val_16388 === (9))){
var inst_16379 = (state_16387[(2)]);
var state_16387__$1 = (function (){var statearr_16389 = state_16387;
(statearr_16389[(7)] = inst_16379);

return statearr_16389;
})();
var statearr_16390_16405 = state_16387__$1;
(statearr_16390_16405[(2)] = null);

(statearr_16390_16405[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16388 === (8))){
var inst_16383 = (state_16387[(2)]);
var state_16387__$1 = state_16387;
var statearr_16391_16406 = state_16387__$1;
(statearr_16391_16406[(2)] = inst_16383);

(statearr_16391_16406[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16388 === (7))){
var state_16387__$1 = state_16387;
var statearr_16392_16407 = state_16387__$1;
(statearr_16392_16407[(2)] = null);

(statearr_16392_16407[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16388 === (6))){
var inst_16377 = cljs.core.async.timeout((2000));
var state_16387__$1 = state_16387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16387__$1,(9),inst_16377);
} else {
if((state_val_16388 === (5))){
var inst_16375 = (state_16387[(2)]);
var state_16387__$1 = state_16387;
if(cljs.core.truth_(inst_16375)){
var statearr_16393_16408 = state_16387__$1;
(statearr_16393_16408[(1)] = (6));

} else {
var statearr_16394_16409 = state_16387__$1;
(statearr_16394_16409[(1)] = (7));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_16388 === (4))){
var inst_16373 = (state_16387[(2)]);
var state_16387__$1 = state_16387;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16387__$1,(5),c,inst_16373);
} else {
if((state_val_16388 === (3))){
var inst_16385 = (state_16387[(2)]);
var state_16387__$1 = state_16387;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16387__$1,inst_16385);
} else {
if((state_val_16388 === (2))){
var inst_16370 = (function (){var G__16395 = arimaa.state.session_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16395) : cljs.core.deref.call(null,G__16395));
})();
var inst_16371 = arimaa.requests.gameroom_state(inst_16370);
var state_16387__$1 = state_16387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16387__$1,(4),inst_16371);
} else {
if((state_val_16388 === (1))){
var state_16387__$1 = state_16387;
var statearr_16396_16410 = state_16387__$1;
(statearr_16396_16410[(2)] = null);

(statearr_16396_16410[(1)] = (2));


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
});})(c__5853__auto___16404,c))
;
return ((function (switch__5838__auto__,c__5853__auto___16404,c){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_16400 = [null,null,null,null,null,null,null,null];
(statearr_16400[(0)] = state_machine__5839__auto__);

(statearr_16400[(1)] = (1));

return statearr_16400;
});
var state_machine__5839__auto____1 = (function (state_16387){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_16387);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e16401){if((e16401 instanceof Object)){
var ex__5842__auto__ = e16401;
var statearr_16402_16411 = state_16387;
(statearr_16402_16411[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16387);

return cljs.core.constant$keyword$41;
} else {
throw e16401;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__16412 = state_16387;
state_16387 = G__16412;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_16387){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_16387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___16404,c))
})();
var state__5855__auto__ = (function (){var statearr_16403 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_16403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___16404);

return statearr_16403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___16404,c))
);


return c;
});
arimaa.gameroom.new_game_view = (function new_game_view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$264,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$265,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$266,"New game"], null)], null)], null);
});
arimaa.gameroom.game_view = (function game_view(game){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$244,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$244,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$243,[cljs.core.str("http://arimaa.com/arimaa/gameroom/playerpage.cgi?id="),cljs.core.str(cljs.core.constant$keyword$268.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$267,"_blank"], null),cljs.core.constant$keyword$269.cljs$core$IFn$_invoke$arity$1(game)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246," vs "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$243,[cljs.core.str("http://arimaa.com/arimaa/gameroom/playerpage.cgi?id="),cljs.core.str(cljs.core.constant$keyword$270.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$267,"_blank"], null),cljs.core.constant$keyword$271.cljs$core$IFn$_invoke$arity$1(game)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$244,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,cljs.core.constant$keyword$272.cljs$core$IFn$_invoke$arity$1(game)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$243,[cljs.core.str("http://arimaa.com/arimaa/gameroom/opengamewin.cgi?gameid="),cljs.core.str(cljs.core.constant$keyword$145.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$267,"_blank"], null),"View game"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(game)], null)], null)], null);
});
arimaa.gameroom.gameboard_square_class = (function gameboard_square_class(col,row){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(col,"c")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(col,"f"))) && ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row,(3))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row,(6))))){
return "trap";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row,(1))){
return "gold-goal";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row,(8))){
return "silver-goal";
} else {
return null;
}
}
}
});
arimaa.gameroom.game_state_channel = (function game_state_channel(game_id){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__5853__auto___16511 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___16511,c){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___16511,c){
return (function (state_16490){
var state_val_16491 = (state_16490[(1)]);
if((state_val_16491 === (7))){
var inst_16480 = (state_16490[(2)]);
var state_16490__$1 = state_16490;
if(cljs.core.truth_(inst_16480)){
var statearr_16492_16512 = state_16490__$1;
(statearr_16492_16512[(1)] = (8));

} else {
var statearr_16493_16513 = state_16490__$1;
(statearr_16493_16513[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_16491 === (1))){
var inst_16462 = (function (){var G__16494 = arimaa.state.session_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16494) : cljs.core.deref.call(null,G__16494));
})();
var inst_16463 = arimaa.requests.reserve_seat(inst_16462,game_id,cljs.core.constant$keyword$274);
var state_16490__$1 = state_16490;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16490__$1,(2),inst_16463);
} else {
if((state_val_16491 === (4))){
var inst_16471 = (state_16490[(7)]);
var inst_16465 = (state_16490[(8)]);
var inst_16472 = (state_16490[(9)]);
var inst_16474 = cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(inst_16465);
var inst_16475 = cljs.core.constant$keyword$222.cljs$core$IFn$_invoke$arity$1(inst_16471);
var inst_16476 = arimaa.requests.game_state(inst_16474,inst_16475,inst_16472);
var state_16490__$1 = state_16490;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16490__$1,(6),inst_16476);
} else {
if((state_val_16491 === (6))){
var inst_16478 = (state_16490[(10)]);
var inst_16478__$1 = (state_16490[(2)]);
var state_16490__$1 = (function (){var statearr_16495 = state_16490;
(statearr_16495[(10)] = inst_16478__$1);

return statearr_16495;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16490__$1,(7),c,inst_16478__$1);
} else {
if((state_val_16491 === (3))){
var inst_16471 = (state_16490[(2)]);
var inst_16472 = (0);
var state_16490__$1 = (function (){var statearr_16496 = state_16490;
(statearr_16496[(7)] = inst_16471);

(statearr_16496[(9)] = inst_16472);

return statearr_16496;
})();
var statearr_16497_16514 = state_16490__$1;
(statearr_16497_16514[(2)] = null);

(statearr_16497_16514[(1)] = (4));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16491 === (2))){
var inst_16465 = (state_16490[(8)]);
var inst_16465__$1 = (state_16490[(2)]);
var inst_16466 = cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(inst_16465__$1);
var inst_16467 = (function (){var G__16498 = arimaa.state.gameroom_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16498) : cljs.core.deref.call(null,G__16498));
})();
var inst_16468 = cljs.core.constant$keyword$226.cljs$core$IFn$_invoke$arity$1(inst_16465__$1);
var inst_16469 = arimaa.requests.sit(inst_16466,inst_16467,inst_16468);
var state_16490__$1 = (function (){var statearr_16499 = state_16490;
(statearr_16499[(8)] = inst_16465__$1);

return statearr_16499;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16490__$1,(3),inst_16469);
} else {
if((state_val_16491 === (9))){
var state_16490__$1 = state_16490;
var statearr_16500_16515 = state_16490__$1;
(statearr_16500_16515[(2)] = null);

(statearr_16500_16515[(1)] = (10));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16491 === (5))){
var inst_16488 = (state_16490[(2)]);
var state_16490__$1 = state_16490;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16490__$1,inst_16488);
} else {
if((state_val_16491 === (10))){
var inst_16486 = (state_16490[(2)]);
var state_16490__$1 = state_16490;
var statearr_16501_16516 = state_16490__$1;
(statearr_16501_16516[(2)] = inst_16486);

(statearr_16501_16516[(1)] = (5));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16491 === (8))){
var inst_16478 = (state_16490[(10)]);
var inst_16482 = cljs.core.constant$keyword$230.cljs$core$IFn$_invoke$arity$1(inst_16478);
var inst_16472 = inst_16482;
var state_16490__$1 = (function (){var statearr_16502 = state_16490;
(statearr_16502[(9)] = inst_16472);

return statearr_16502;
})();
var statearr_16503_16517 = state_16490__$1;
(statearr_16503_16517[(2)] = null);

(statearr_16503_16517[(1)] = (4));


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
});})(c__5853__auto___16511,c))
;
return ((function (switch__5838__auto__,c__5853__auto___16511,c){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_16507 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16507[(0)] = state_machine__5839__auto__);

(statearr_16507[(1)] = (1));

return statearr_16507;
});
var state_machine__5839__auto____1 = (function (state_16490){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_16490);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e16508){if((e16508 instanceof Object)){
var ex__5842__auto__ = e16508;
var statearr_16509_16518 = state_16490;
(statearr_16509_16518[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16490);

return cljs.core.constant$keyword$41;
} else {
throw e16508;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__16519 = state_16490;
state_16490 = G__16519;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_16490){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_16490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___16511,c))
})();
var state__5855__auto__ = (function (){var statearr_16510 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_16510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___16511);

return statearr_16510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___16511,c))
);


return c;
});
arimaa.gameroom.piece_at_square = (function piece_at_square(position,col,row){
return cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (piece){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((new arimaa.game.Square(col,row,null,null,null)),cljs.core.constant$keyword$74.cljs$core$IFn$_invoke$arity$1(piece));
}),position)));
});
arimaa.gameroom.piece_to_image = (function piece_to_image(piece){
var colour_char = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$63,cljs.core.constant$keyword$72.cljs$core$IFn$_invoke$arity$1(piece)))?"w":"b");
var animal_char = (function (){var G__16521 = (((cljs.core.constant$keyword$71.cljs$core$IFn$_invoke$arity$1(piece) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$71.cljs$core$IFn$_invoke$arity$1(piece).fqn:null);
switch (G__16521) {
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
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.constant$keyword$71.cljs$core$IFn$_invoke$arity$1(piece))].join('')));

}
})();
return [cljs.core.str("http://arimaa.com/arimaa/jsClient/pro/images/"),cljs.core.str(colour_char),cljs.core.str(animal_char),cljs.core.str(".gif")].join('');
});
arimaa.gameroom.piece_image_at_square = (function piece_image_at_square(position,col,row){
var piece = arimaa.gameroom.piece_at_square(position,col,row);
if(cljs.core.truth_(piece)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$276,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$277,arimaa.gameroom.piece_to_image(piece)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$276,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$277,"http://arimaa.com/arimaa/jsClient/pro/images/sp.gif"], null)], null);
}
});
arimaa.gameroom.gameboard_view = (function gameboard_view(position){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$278,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$279,(function (){var iter__4386__auto__ = (function iter__16553(s__16554){
return (new cljs.core.LazySeq(null,(function (){
var s__16554__$1 = s__16554;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__16554__$1);
if(temp__4126__auto__){
var s__16554__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16554__$2)){
var c__4384__auto__ = cljs.core.chunk_first(s__16554__$2);
var size__4385__auto__ = cljs.core.count(c__4384__auto__);
var b__16556 = cljs.core.chunk_buffer(size__4385__auto__);
if((function (){var i__16555 = (0);
while(true){
if((i__16555 < size__4385__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4384__auto__,i__16555);
cljs.core.chunk_append(b__16556,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$280,(function (){var iter__4386__auto__ = ((function (i__16555,row,c__4384__auto__,size__4385__auto__,b__16556,s__16554__$2,temp__4126__auto__){
return (function iter__16571(s__16572){
return (new cljs.core.LazySeq(null,((function (i__16555,row,c__4384__auto__,size__4385__auto__,b__16556,s__16554__$2,temp__4126__auto__){
return (function (){
var s__16572__$1 = s__16572;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__16572__$1);
if(temp__4126__auto____$1){
var s__16572__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16572__$2)){
var c__4384__auto____$1 = cljs.core.chunk_first(s__16572__$2);
var size__4385__auto____$1 = cljs.core.count(c__4384__auto____$1);
var b__16574 = cljs.core.chunk_buffer(size__4385__auto____$1);
if((function (){var i__16573 = (0);
while(true){
if((i__16573 < size__4385__auto____$1)){
var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4384__auto____$1,i__16573);
cljs.core.chunk_append(b__16574,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$281,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$22,arimaa.gameroom.gameboard_square_class(col,row)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.piece_image_at_square,position,col,row], null)], null));

var G__16583 = (i__16573 + (1));
i__16573 = G__16583;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16574),iter__16571(cljs.core.chunk_rest(s__16572__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16574),null);
}
} else {
var col = cljs.core.first(s__16572__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$281,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$22,arimaa.gameroom.gameboard_square_class(col,row)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.piece_image_at_square,position,col,row], null)], null),iter__16571(cljs.core.rest(s__16572__$2)));
}
} else {
return null;
}
break;
}
});})(i__16555,row,c__4384__auto__,size__4385__auto__,b__16556,s__16554__$2,temp__4126__auto__))
,null,null));
});})(i__16555,row,c__4384__auto__,size__4385__auto__,b__16556,s__16554__$2,temp__4126__auto__))
;
return iter__4386__auto__(arimaa.utils.cols);
})()], null));

var G__16584 = (i__16555 + (1));
i__16555 = G__16584;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16556),iter__16553(cljs.core.chunk_rest(s__16554__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16556),null);
}
} else {
var row = cljs.core.first(s__16554__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$280,(function (){var iter__4386__auto__ = ((function (row,s__16554__$2,temp__4126__auto__){
return (function iter__16577(s__16578){
return (new cljs.core.LazySeq(null,((function (row,s__16554__$2,temp__4126__auto__){
return (function (){
var s__16578__$1 = s__16578;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__16578__$1);
if(temp__4126__auto____$1){
var s__16578__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16578__$2)){
var c__4384__auto__ = cljs.core.chunk_first(s__16578__$2);
var size__4385__auto__ = cljs.core.count(c__4384__auto__);
var b__16580 = cljs.core.chunk_buffer(size__4385__auto__);
if((function (){var i__16579 = (0);
while(true){
if((i__16579 < size__4385__auto__)){
var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4384__auto__,i__16579);
cljs.core.chunk_append(b__16580,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$281,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$22,arimaa.gameroom.gameboard_square_class(col,row)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.piece_image_at_square,position,col,row], null)], null));

var G__16585 = (i__16579 + (1));
i__16579 = G__16585;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16580),iter__16577(cljs.core.chunk_rest(s__16578__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16580),null);
}
} else {
var col = cljs.core.first(s__16578__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$281,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$22,arimaa.gameroom.gameboard_square_class(col,row)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.piece_image_at_square,position,col,row], null)], null),iter__16577(cljs.core.rest(s__16578__$2)));
}
} else {
return null;
}
break;
}
});})(row,s__16554__$2,temp__4126__auto__))
,null,null));
});})(row,s__16554__$2,temp__4126__auto__))
;
return iter__4386__auto__(arimaa.utils.cols);
})()], null),iter__16553(cljs.core.rest(s__16554__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4386__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((8),(0),(-1)));
})()], null)], null);
});
arimaa.gameroom.move_box = (function move_box(moves,current_turn){
var turns_lookup = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (move){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.game.show(move),cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(move)], null);
}),moves));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.utils.scroll_bottom_wrapper,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$282,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$283,(15),cljs.core.constant$keyword$261,((function (turns_lookup){
return (function (p1__16586_SHARP_){
var G__16595 = current_turn;
var G__16596 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(turns_lookup,p1__16586_SHARP_.target.value);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16595,G__16596) : cljs.core.reset_BANG_.call(null,G__16595,G__16596));
});})(turns_lookup))
], null),(function (){var iter__4386__auto__ = ((function (turns_lookup){
return (function iter__16597(s__16598){
return (new cljs.core.LazySeq(null,((function (turns_lookup){
return (function (){
var s__16598__$1 = s__16598;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__16598__$1);
if(temp__4126__auto__){
var s__16598__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16598__$2)){
var c__4384__auto__ = cljs.core.chunk_first(s__16598__$2);
var size__4385__auto__ = cljs.core.count(c__4384__auto__);
var b__16600 = cljs.core.chunk_buffer(size__4385__auto__);
if((function (){var i__16599 = (0);
while(true){
if((i__16599 < size__4385__auto__)){
var move = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4384__auto__,i__16599);
cljs.core.chunk_append(b__16600,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$284,arimaa.game.show(move)], null));

var G__16603 = (i__16599 + (1));
i__16599 = G__16603;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16600),iter__16597(cljs.core.chunk_rest(s__16598__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16600),null);
}
} else {
var move = cljs.core.first(s__16598__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$284,arimaa.game.show(move)], null),iter__16597(cljs.core.rest(s__16598__$2)));
}
} else {
return null;
}
break;
}
});})(turns_lookup))
,null,null));
});})(turns_lookup))
;
return iter__4386__auto__(moves);
})()], null)], null);
});
arimaa.gameroom.turn_to_moves_count = (function turn_to_moves_count(turn){
return (((2) * cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(turn)) + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$63,cljs.core.constant$keyword$72.cljs$core$IFn$_invoke$arity$1(turn)))?(-1):(0)));
});
arimaa.gameroom.position_at_turn = (function position_at_turn(turn,moves){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__16605_SHARP_,p2__16604_SHARP_){
return arimaa.game.update_position(p2__16604_SHARP_,p1__16605_SHARP_);
}),cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$81,cljs.core.array_seq([(cljs.core.truth_(turn)?cljs.core.take.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.turn_to_moves_count(turn),moves):moves)], 0)));
});
arimaa.gameroom.ingame_view = (function ingame_view(game){
var game_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var current_turn = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var game_state_chan = arimaa.gameroom.game_state_channel(cljs.core.constant$keyword$145.cljs$core$IFn$_invoke$arity$1(game));
var mounted_gameboard_view = cljs.core.with_meta(arimaa.gameroom.gameboard_view,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$239,((function (game_state,current_turn,game_state_chan){
return (function (){
return arimaa.utils.subscribe_atom_to_channel_BANG_(game_state,game_state_chan);
});})(game_state,current_turn,game_state_chan))
,cljs.core.constant$keyword$285,((function (game_state,current_turn,game_state_chan){
return (function (){
return cljs.core.async.close_BANG_(game_state_chan);
});})(game_state,current_turn,game_state_chan))
], null));
return ((function (game_state,current_turn,game_state_chan,mounted_gameboard_view){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$244,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mounted_gameboard_view,arimaa.gameroom.position_at_turn((function (){var G__16609 = current_turn;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16609) : cljs.core.deref.call(null,G__16609));
})(),cljs.core.constant$keyword$227.cljs$core$IFn$_invoke$arity$1((function (){var G__16610 = game_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16610) : cljs.core.deref.call(null,G__16610));
})()))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.move_box,cljs.core.constant$keyword$227.cljs$core$IFn$_invoke$arity$1((function (){var G__16611 = game_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16611) : cljs.core.deref.call(null,G__16611));
})()),current_turn], null)], null);
});
;})(game_state,current_turn,game_state_chan,mounted_gameboard_view))
});
arimaa.gameroom.my_games_view = (function my_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$264,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$265,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$266,"My games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$244,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$286.cljs$core$IFn$_invoke$arity$1((function (){var G__16613 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16613) : cljs.core.deref.call(null,G__16613));
})()))], null)], null);
});
arimaa.gameroom.open_games_view = (function open_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$264,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$265,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$266,"Open games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$244,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$287.cljs$core$IFn$_invoke$arity$1((function (){var G__16615 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16615) : cljs.core.deref.call(null,G__16615));
})()))], null)], null);
});
arimaa.gameroom.live_games_view = (function live_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$264,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$265,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$266,"Live games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$244,(function (){var iter__4386__auto__ = (function iter__16623(s__16624){
return (new cljs.core.LazySeq(null,(function (){
var s__16624__$1 = s__16624;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__16624__$1);
if(temp__4126__auto__){
var s__16624__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16624__$2)){
var c__4384__auto__ = cljs.core.chunk_first(s__16624__$2);
var size__4385__auto__ = cljs.core.count(c__4384__auto__);
var b__16626 = cljs.core.chunk_buffer(size__4385__auto__);
if((function (){var i__16625 = (0);
while(true){
if((i__16625 < size__4385__auto__)){
var live_game = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4384__auto__,i__16625);
cljs.core.chunk_append(b__16626,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.ingame_view,live_game], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$37,cljs.core.constant$keyword$145.cljs$core$IFn$_invoke$arity$1(live_game)], null)));

var G__16630 = (i__16625 + (1));
i__16625 = G__16630;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16626),iter__16623(cljs.core.chunk_rest(s__16624__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16626),null);
}
} else {
var live_game = cljs.core.first(s__16624__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.ingame_view,live_game], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$37,cljs.core.constant$keyword$145.cljs$core$IFn$_invoke$arity$1(live_game)], null)),iter__16623(cljs.core.rest(s__16624__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4386__auto__(cljs.core.constant$keyword$288.cljs$core$IFn$_invoke$arity$1((function (){var G__16629 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16629) : cljs.core.deref.call(null,G__16629));
})()));
})()], null)], null);
});
arimaa.gameroom.recent_games_view = (function recent_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$264,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$265,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$266,"Recent games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$244,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1((function (){var G__16632 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16632) : cljs.core.deref.call(null,G__16632));
})()))], null)], null);
});
arimaa.gameroom.gameroom_view = (function gameroom_view(){
arimaa.utils.subscribe_atom_to_channel_BANG_(arimaa.state.gameroom_state,arimaa.gameroom.gameroom_state_channel());

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$290,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.new_game_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.my_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.open_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.live_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.recent_games_view], null)], null);
});
