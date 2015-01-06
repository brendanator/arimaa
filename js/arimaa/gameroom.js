// Compiled by ClojureScript 0.0-2657 {}
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
var c__11621__auto___16515 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11621__auto___16515,c){
return (function (){
var f__11622__auto__ = (function (){var switch__11541__auto__ = ((function (c__11621__auto___16515,c){
return (function (state_16498){
var state_val_16499 = (state_16498[(1)]);
if((state_val_16499 === (9))){
var inst_16490 = (state_16498[(2)]);
var state_16498__$1 = (function (){var statearr_16500 = state_16498;
(statearr_16500[(7)] = inst_16490);

return statearr_16500;
})();
var statearr_16501_16516 = state_16498__$1;
(statearr_16501_16516[(2)] = null);

(statearr_16501_16516[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_16499 === (8))){
var inst_16494 = (state_16498[(2)]);
var state_16498__$1 = state_16498;
var statearr_16502_16517 = state_16498__$1;
(statearr_16502_16517[(2)] = inst_16494);

(statearr_16502_16517[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_16499 === (7))){
var state_16498__$1 = state_16498;
var statearr_16503_16518 = state_16498__$1;
(statearr_16503_16518[(2)] = null);

(statearr_16503_16518[(1)] = (8));


return cljs.core.constant$keyword$65;
} else {
if((state_val_16499 === (6))){
var inst_16488 = cljs.core.async.timeout((2000));
var state_16498__$1 = state_16498;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16498__$1,(9),inst_16488);
} else {
if((state_val_16499 === (5))){
var inst_16486 = (state_16498[(2)]);
var state_16498__$1 = state_16498;
if(cljs.core.truth_(inst_16486)){
var statearr_16504_16519 = state_16498__$1;
(statearr_16504_16519[(1)] = (6));

} else {
var statearr_16505_16520 = state_16498__$1;
(statearr_16505_16520[(1)] = (7));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_16499 === (4))){
var inst_16484 = (state_16498[(2)]);
var state_16498__$1 = state_16498;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16498__$1,(5),c,inst_16484);
} else {
if((state_val_16499 === (3))){
var inst_16496 = (state_16498[(2)]);
var state_16498__$1 = state_16498;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16498__$1,inst_16496);
} else {
if((state_val_16499 === (2))){
var inst_16481 = (function (){var G__16506 = arimaa.state.session_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16506) : cljs.core.deref.call(null,G__16506));
})();
var inst_16482 = arimaa.requests.gameroom_state(inst_16481);
var state_16498__$1 = state_16498;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16498__$1,(4),inst_16482);
} else {
if((state_val_16499 === (1))){
var state_16498__$1 = state_16498;
var statearr_16507_16521 = state_16498__$1;
(statearr_16507_16521[(2)] = null);

(statearr_16507_16521[(1)] = (2));


return cljs.core.constant$keyword$65;
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
});})(c__11621__auto___16515,c))
;
return ((function (switch__11541__auto__,c__11621__auto___16515,c){
return (function() {
var state_machine__11542__auto__ = null;
var state_machine__11542__auto____0 = (function (){
var statearr_16511 = [null,null,null,null,null,null,null,null];
(statearr_16511[(0)] = state_machine__11542__auto__);

(statearr_16511[(1)] = (1));

return statearr_16511;
});
var state_machine__11542__auto____1 = (function (state_16498){
while(true){
var ret_value__11543__auto__ = (function (){try{while(true){
var result__11544__auto__ = switch__11541__auto__(state_16498);
if(cljs.core.keyword_identical_QMARK_(result__11544__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11544__auto__;
}
break;
}
}catch (e16512){if((e16512 instanceof Object)){
var ex__11545__auto__ = e16512;
var statearr_16513_16522 = state_16498;
(statearr_16513_16522[(5)] = ex__11545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16498);

return cljs.core.constant$keyword$65;
} else {
throw e16512;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11543__auto__,cljs.core.constant$keyword$65)){
var G__16523 = state_16498;
state_16498 = G__16523;
continue;
} else {
return ret_value__11543__auto__;
}
break;
}
});
state_machine__11542__auto__ = function(state_16498){
switch(arguments.length){
case 0:
return state_machine__11542__auto____0.call(this);
case 1:
return state_machine__11542__auto____1.call(this,state_16498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11542__auto____0;
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11542__auto____1;
return state_machine__11542__auto__;
})()
;})(switch__11541__auto__,c__11621__auto___16515,c))
})();
var state__11623__auto__ = (function (){var statearr_16514 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_16514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto___16515);

return statearr_16514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(c__11621__auto___16515,c))
);


return c;
});
arimaa.gameroom.new_game_view = (function new_game_view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$265,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$266,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$267,"New game"], null)], null)], null);
});
arimaa.gameroom.game_view = (function game_view(game){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$244,[cljs.core.str("http://arimaa.com/arimaa/gameroom/playerpage.cgi?id="),cljs.core.str(cljs.core.constant$keyword$269.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$268,"_blank"], null),cljs.core.constant$keyword$270.cljs$core$IFn$_invoke$arity$1(game)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247," vs "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$244,[cljs.core.str("http://arimaa.com/arimaa/gameroom/playerpage.cgi?id="),cljs.core.str(cljs.core.constant$keyword$271.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$268,"_blank"], null),cljs.core.constant$keyword$272.cljs$core$IFn$_invoke$arity$1(game)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(game)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$244,[cljs.core.str("http://arimaa.com/arimaa/gameroom/opengamewin.cgi?gameid="),cljs.core.str(cljs.core.constant$keyword$128.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$268,"_blank"], null),"View game"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(game)], null)], null)], null);
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
var c__11621__auto___16622 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11621__auto___16622,c){
return (function (){
var f__11622__auto__ = (function (){var switch__11541__auto__ = ((function (c__11621__auto___16622,c){
return (function (state_16601){
var state_val_16602 = (state_16601[(1)]);
if((state_val_16602 === (7))){
var inst_16591 = (state_16601[(2)]);
var state_16601__$1 = state_16601;
if(cljs.core.truth_(inst_16591)){
var statearr_16603_16623 = state_16601__$1;
(statearr_16603_16623[(1)] = (8));

} else {
var statearr_16604_16624 = state_16601__$1;
(statearr_16604_16624[(1)] = (9));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_16602 === (1))){
var inst_16573 = (function (){var G__16605 = arimaa.state.session_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16605) : cljs.core.deref.call(null,G__16605));
})();
var inst_16574 = arimaa.requests.reserve_seat(inst_16573,game_id,cljs.core.constant$keyword$275);
var state_16601__$1 = state_16601;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16601__$1,(2),inst_16574);
} else {
if((state_val_16602 === (4))){
var inst_16582 = (state_16601[(7)]);
var inst_16583 = (state_16601[(8)]);
var inst_16576 = (state_16601[(9)]);
var inst_16585 = cljs.core.constant$keyword$276.cljs$core$IFn$_invoke$arity$1(inst_16576);
var inst_16586 = cljs.core.constant$keyword$205.cljs$core$IFn$_invoke$arity$1(inst_16582);
var inst_16587 = arimaa.requests.game_state(inst_16585,inst_16586,inst_16583);
var state_16601__$1 = state_16601;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16601__$1,(6),inst_16587);
} else {
if((state_val_16602 === (6))){
var inst_16589 = (state_16601[(10)]);
var inst_16589__$1 = (state_16601[(2)]);
var state_16601__$1 = (function (){var statearr_16606 = state_16601;
(statearr_16606[(10)] = inst_16589__$1);

return statearr_16606;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16601__$1,(7),c,inst_16589__$1);
} else {
if((state_val_16602 === (3))){
var inst_16582 = (state_16601[(2)]);
var inst_16583 = (0);
var state_16601__$1 = (function (){var statearr_16607 = state_16601;
(statearr_16607[(7)] = inst_16582);

(statearr_16607[(8)] = inst_16583);

return statearr_16607;
})();
var statearr_16608_16625 = state_16601__$1;
(statearr_16608_16625[(2)] = null);

(statearr_16608_16625[(1)] = (4));


return cljs.core.constant$keyword$65;
} else {
if((state_val_16602 === (2))){
var inst_16576 = (state_16601[(9)]);
var inst_16576__$1 = (state_16601[(2)]);
var inst_16577 = cljs.core.constant$keyword$276.cljs$core$IFn$_invoke$arity$1(inst_16576__$1);
var inst_16578 = (function (){var G__16609 = arimaa.state.gameroom_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16609) : cljs.core.deref.call(null,G__16609));
})();
var inst_16579 = cljs.core.constant$keyword$209.cljs$core$IFn$_invoke$arity$1(inst_16576__$1);
var inst_16580 = arimaa.requests.sit(inst_16577,inst_16578,inst_16579);
var state_16601__$1 = (function (){var statearr_16610 = state_16601;
(statearr_16610[(9)] = inst_16576__$1);

return statearr_16610;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16601__$1,(3),inst_16580);
} else {
if((state_val_16602 === (9))){
var state_16601__$1 = state_16601;
var statearr_16611_16626 = state_16601__$1;
(statearr_16611_16626[(2)] = null);

(statearr_16611_16626[(1)] = (10));


return cljs.core.constant$keyword$65;
} else {
if((state_val_16602 === (5))){
var inst_16599 = (state_16601[(2)]);
var state_16601__$1 = state_16601;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16601__$1,inst_16599);
} else {
if((state_val_16602 === (10))){
var inst_16597 = (state_16601[(2)]);
var state_16601__$1 = state_16601;
var statearr_16612_16627 = state_16601__$1;
(statearr_16612_16627[(2)] = inst_16597);

(statearr_16612_16627[(1)] = (5));


return cljs.core.constant$keyword$65;
} else {
if((state_val_16602 === (8))){
var inst_16589 = (state_16601[(10)]);
var inst_16593 = cljs.core.constant$keyword$213.cljs$core$IFn$_invoke$arity$1(inst_16589);
var inst_16583 = inst_16593;
var state_16601__$1 = (function (){var statearr_16613 = state_16601;
(statearr_16613[(8)] = inst_16583);

return statearr_16613;
})();
var statearr_16614_16628 = state_16601__$1;
(statearr_16614_16628[(2)] = null);

(statearr_16614_16628[(1)] = (4));


return cljs.core.constant$keyword$65;
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
});})(c__11621__auto___16622,c))
;
return ((function (switch__11541__auto__,c__11621__auto___16622,c){
return (function() {
var state_machine__11542__auto__ = null;
var state_machine__11542__auto____0 = (function (){
var statearr_16618 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16618[(0)] = state_machine__11542__auto__);

(statearr_16618[(1)] = (1));

return statearr_16618;
});
var state_machine__11542__auto____1 = (function (state_16601){
while(true){
var ret_value__11543__auto__ = (function (){try{while(true){
var result__11544__auto__ = switch__11541__auto__(state_16601);
if(cljs.core.keyword_identical_QMARK_(result__11544__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11544__auto__;
}
break;
}
}catch (e16619){if((e16619 instanceof Object)){
var ex__11545__auto__ = e16619;
var statearr_16620_16629 = state_16601;
(statearr_16620_16629[(5)] = ex__11545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16601);

return cljs.core.constant$keyword$65;
} else {
throw e16619;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11543__auto__,cljs.core.constant$keyword$65)){
var G__16630 = state_16601;
state_16601 = G__16630;
continue;
} else {
return ret_value__11543__auto__;
}
break;
}
});
state_machine__11542__auto__ = function(state_16601){
switch(arguments.length){
case 0:
return state_machine__11542__auto____0.call(this);
case 1:
return state_machine__11542__auto____1.call(this,state_16601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11542__auto____0;
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11542__auto____1;
return state_machine__11542__auto__;
})()
;})(switch__11541__auto__,c__11621__auto___16622,c))
})();
var state__11623__auto__ = (function (){var statearr_16621 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_16621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto___16622);

return statearr_16621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(c__11621__auto___16622,c))
);


return c;
});
arimaa.gameroom.piece_at_square = (function piece_at_square(position,col,row){
return cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (piece){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((new arimaa.game.Square(col,row,null,null,null)),cljs.core.constant$keyword$39.cljs$core$IFn$_invoke$arity$1(piece));
}),position)));
});
arimaa.gameroom.piece_to_image = (function piece_to_image(piece){
var colour_char = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$28,cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(piece)))?"w":"b");
var animal_char = (function (){var G__16632 = (((cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(piece) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(piece).fqn:null);
switch (G__16632) {
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
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(piece))].join('')));

}
})();
return [cljs.core.str("http://arimaa.com/arimaa/jsClient/pro/images/"),cljs.core.str(colour_char),cljs.core.str(animal_char),cljs.core.str(".gif")].join('');
});
arimaa.gameroom.piece_image_at_square = (function piece_image_at_square(position,col,row){
var piece = arimaa.gameroom.piece_at_square(position,col,row);
if(cljs.core.truth_(piece)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$277,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$278,arimaa.gameroom.piece_to_image(piece)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$277,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$278,"http://arimaa.com/arimaa/jsClient/pro/images/sp.gif"], null)], null);
}
});
arimaa.gameroom.gameboard_view = (function gameboard_view(position){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$279,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$280,(function (){var iter__4487__auto__ = (function iter__16664(s__16665){
return (new cljs.core.LazySeq(null,(function (){
var s__16665__$1 = s__16665;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__16665__$1);
if(temp__4126__auto__){
var s__16665__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16665__$2)){
var c__4485__auto__ = cljs.core.chunk_first(s__16665__$2);
var size__4486__auto__ = cljs.core.count(c__4485__auto__);
var b__16667 = cljs.core.chunk_buffer(size__4486__auto__);
if((function (){var i__16666 = (0);
while(true){
if((i__16666 < size__4486__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4485__auto__,i__16666);
cljs.core.chunk_append(b__16667,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$281,(function (){var iter__4487__auto__ = ((function (i__16666,row,c__4485__auto__,size__4486__auto__,b__16667,s__16665__$2,temp__4126__auto__){
return (function iter__16682(s__16683){
return (new cljs.core.LazySeq(null,((function (i__16666,row,c__4485__auto__,size__4486__auto__,b__16667,s__16665__$2,temp__4126__auto__){
return (function (){
var s__16683__$1 = s__16683;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__16683__$1);
if(temp__4126__auto____$1){
var s__16683__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16683__$2)){
var c__4485__auto____$1 = cljs.core.chunk_first(s__16683__$2);
var size__4486__auto____$1 = cljs.core.count(c__4485__auto____$1);
var b__16685 = cljs.core.chunk_buffer(size__4486__auto____$1);
if((function (){var i__16684 = (0);
while(true){
if((i__16684 < size__4486__auto____$1)){
var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4485__auto____$1,i__16684);
cljs.core.chunk_append(b__16685,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$282,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$223,arimaa.gameroom.gameboard_square_class(col,row)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.piece_image_at_square,position,col,row], null)], null));

var G__16694 = (i__16684 + (1));
i__16684 = G__16694;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16685),iter__16682(cljs.core.chunk_rest(s__16683__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16685),null);
}
} else {
var col = cljs.core.first(s__16683__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$282,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$223,arimaa.gameroom.gameboard_square_class(col,row)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.piece_image_at_square,position,col,row], null)], null),iter__16682(cljs.core.rest(s__16683__$2)));
}
} else {
return null;
}
break;
}
});})(i__16666,row,c__4485__auto__,size__4486__auto__,b__16667,s__16665__$2,temp__4126__auto__))
,null,null));
});})(i__16666,row,c__4485__auto__,size__4486__auto__,b__16667,s__16665__$2,temp__4126__auto__))
;
return iter__4487__auto__(arimaa.utils.cols);
})()], null));

var G__16695 = (i__16666 + (1));
i__16666 = G__16695;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16667),iter__16664(cljs.core.chunk_rest(s__16665__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16667),null);
}
} else {
var row = cljs.core.first(s__16665__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$281,(function (){var iter__4487__auto__ = ((function (row,s__16665__$2,temp__4126__auto__){
return (function iter__16688(s__16689){
return (new cljs.core.LazySeq(null,((function (row,s__16665__$2,temp__4126__auto__){
return (function (){
var s__16689__$1 = s__16689;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__16689__$1);
if(temp__4126__auto____$1){
var s__16689__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16689__$2)){
var c__4485__auto__ = cljs.core.chunk_first(s__16689__$2);
var size__4486__auto__ = cljs.core.count(c__4485__auto__);
var b__16691 = cljs.core.chunk_buffer(size__4486__auto__);
if((function (){var i__16690 = (0);
while(true){
if((i__16690 < size__4486__auto__)){
var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4485__auto__,i__16690);
cljs.core.chunk_append(b__16691,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$282,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$223,arimaa.gameroom.gameboard_square_class(col,row)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.piece_image_at_square,position,col,row], null)], null));

var G__16696 = (i__16690 + (1));
i__16690 = G__16696;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16691),iter__16688(cljs.core.chunk_rest(s__16689__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16691),null);
}
} else {
var col = cljs.core.first(s__16689__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$282,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$223,arimaa.gameroom.gameboard_square_class(col,row)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.piece_image_at_square,position,col,row], null)], null),iter__16688(cljs.core.rest(s__16689__$2)));
}
} else {
return null;
}
break;
}
});})(row,s__16665__$2,temp__4126__auto__))
,null,null));
});})(row,s__16665__$2,temp__4126__auto__))
;
return iter__4487__auto__(arimaa.utils.cols);
})()], null),iter__16664(cljs.core.rest(s__16665__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4487__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((8),(0),(-1)));
})()], null)], null);
});
arimaa.gameroom.move_box = (function move_box(moves,current_turn){
var turns_lookup = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (move){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.game.show(move),cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(move)], null);
}),moves));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.utils.scroll_bottom_wrapper,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$283,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$284,(15),cljs.core.constant$keyword$262,((function (turns_lookup){
return (function (p1__16697_SHARP_){
var G__16706 = current_turn;
var G__16707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(turns_lookup,p1__16697_SHARP_.target.value);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16706,G__16707) : cljs.core.reset_BANG_.call(null,G__16706,G__16707));
});})(turns_lookup))
], null),(function (){var iter__4487__auto__ = ((function (turns_lookup){
return (function iter__16708(s__16709){
return (new cljs.core.LazySeq(null,((function (turns_lookup){
return (function (){
var s__16709__$1 = s__16709;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__16709__$1);
if(temp__4126__auto__){
var s__16709__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16709__$2)){
var c__4485__auto__ = cljs.core.chunk_first(s__16709__$2);
var size__4486__auto__ = cljs.core.count(c__4485__auto__);
var b__16711 = cljs.core.chunk_buffer(size__4486__auto__);
if((function (){var i__16710 = (0);
while(true){
if((i__16710 < size__4486__auto__)){
var move = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4485__auto__,i__16710);
cljs.core.chunk_append(b__16711,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$285,arimaa.game.show(move)], null));

var G__16714 = (i__16710 + (1));
i__16710 = G__16714;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16711),iter__16708(cljs.core.chunk_rest(s__16709__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16711),null);
}
} else {
var move = cljs.core.first(s__16709__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$285,arimaa.game.show(move)], null),iter__16708(cljs.core.rest(s__16709__$2)));
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
return iter__4487__auto__(moves);
})()], null)], null);
});
arimaa.gameroom.turn_to_moves_count = (function turn_to_moves_count(turn){
return (((2) * cljs.core.constant$keyword$44.cljs$core$IFn$_invoke$arity$1(turn)) + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$28,cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(turn)))?(-1):(0)));
});
arimaa.gameroom.position_at_turn = (function position_at_turn(turn,moves){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__16716_SHARP_,p2__16715_SHARP_){
return arimaa.game.update_position(p2__16715_SHARP_,p1__16716_SHARP_);
}),cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$46,cljs.core.array_seq([(cljs.core.truth_(turn)?cljs.core.take.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.turn_to_moves_count(turn),moves):moves)], 0)));
});
arimaa.gameroom.ingame_view = (function ingame_view(game){
var game_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var current_turn = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var game_state_chan = arimaa.gameroom.game_state_channel(cljs.core.constant$keyword$128.cljs$core$IFn$_invoke$arity$1(game));
var mounted_gameboard_view = cljs.core.with_meta(arimaa.gameroom.gameboard_view,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$240,((function (game_state,current_turn,game_state_chan){
return (function (){
return arimaa.utils.subscribe_atom_to_channel_BANG_(game_state,game_state_chan);
});})(game_state,current_turn,game_state_chan))
,cljs.core.constant$keyword$286,((function (game_state,current_turn,game_state_chan){
return (function (){
return cljs.core.async.close_BANG_(game_state_chan);
});})(game_state,current_turn,game_state_chan))
], null));
return ((function (game_state,current_turn,game_state_chan,mounted_gameboard_view){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mounted_gameboard_view,arimaa.gameroom.position_at_turn((function (){var G__16720 = current_turn;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16720) : cljs.core.deref.call(null,G__16720));
})(),cljs.core.constant$keyword$210.cljs$core$IFn$_invoke$arity$1((function (){var G__16721 = game_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16721) : cljs.core.deref.call(null,G__16721));
})()))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.move_box,cljs.core.constant$keyword$210.cljs$core$IFn$_invoke$arity$1((function (){var G__16722 = game_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16722) : cljs.core.deref.call(null,G__16722));
})()),current_turn], null)], null);
});
;})(game_state,current_turn,game_state_chan,mounted_gameboard_view))
});
arimaa.gameroom.my_games_view = (function my_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$265,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$266,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$267,"My games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$287.cljs$core$IFn$_invoke$arity$1((function (){var G__16724 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16724) : cljs.core.deref.call(null,G__16724));
})()))], null)], null);
});
arimaa.gameroom.open_games_view = (function open_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$265,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$266,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$267,"Open games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$288.cljs$core$IFn$_invoke$arity$1((function (){var G__16726 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16726) : cljs.core.deref.call(null,G__16726));
})()))], null)], null);
});
arimaa.gameroom.live_games_view = (function live_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$265,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$266,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$267,"Live games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,(function (){var iter__4487__auto__ = (function iter__16734(s__16735){
return (new cljs.core.LazySeq(null,(function (){
var s__16735__$1 = s__16735;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__16735__$1);
if(temp__4126__auto__){
var s__16735__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16735__$2)){
var c__4485__auto__ = cljs.core.chunk_first(s__16735__$2);
var size__4486__auto__ = cljs.core.count(c__4485__auto__);
var b__16737 = cljs.core.chunk_buffer(size__4486__auto__);
if((function (){var i__16736 = (0);
while(true){
if((i__16736 < size__4486__auto__)){
var live_game = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4485__auto__,i__16736);
cljs.core.chunk_append(b__16737,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.ingame_view,live_game], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$238,cljs.core.constant$keyword$128.cljs$core$IFn$_invoke$arity$1(live_game)], null)));

var G__16741 = (i__16736 + (1));
i__16736 = G__16741;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16737),iter__16734(cljs.core.chunk_rest(s__16735__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16737),null);
}
} else {
var live_game = cljs.core.first(s__16735__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.ingame_view,live_game], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$238,cljs.core.constant$keyword$128.cljs$core$IFn$_invoke$arity$1(live_game)], null)),iter__16734(cljs.core.rest(s__16735__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4487__auto__(cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1((function (){var G__16740 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16740) : cljs.core.deref.call(null,G__16740));
})()));
})()], null)], null);
});
arimaa.gameroom.recent_games_view = (function recent_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$265,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$266,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$267,"Recent games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$290.cljs$core$IFn$_invoke$arity$1((function (){var G__16743 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16743) : cljs.core.deref.call(null,G__16743));
})()))], null)], null);
});
arimaa.gameroom.gameroom_view = (function gameroom_view(){
arimaa.utils.subscribe_atom_to_channel_BANG_(arimaa.state.gameroom_state,arimaa.gameroom.gameroom_state_channel());

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$291,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.new_game_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.my_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.open_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.live_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.recent_games_view], null)], null);
});
