// Compiled by ClojureScript 0.0-2727 {}
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
var c__12182__auto___16447 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12182__auto___16447,c){
return (function (){
var f__12183__auto__ = (function (){var switch__12167__auto__ = ((function (c__12182__auto___16447,c){
return (function (state_16430){
var state_val_16431 = (state_16430[(1)]);
if((state_val_16431 === (9))){
var inst_16422 = (state_16430[(2)]);
var state_16430__$1 = (function (){var statearr_16432 = state_16430;
(statearr_16432[(7)] = inst_16422);

return statearr_16432;
})();
var statearr_16433_16448 = state_16430__$1;
(statearr_16433_16448[(2)] = null);

(statearr_16433_16448[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_16431 === (8))){
var inst_16426 = (state_16430[(2)]);
var state_16430__$1 = state_16430;
var statearr_16434_16449 = state_16430__$1;
(statearr_16434_16449[(2)] = inst_16426);

(statearr_16434_16449[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_16431 === (7))){
var state_16430__$1 = state_16430;
var statearr_16435_16450 = state_16430__$1;
(statearr_16435_16450[(2)] = null);

(statearr_16435_16450[(1)] = (8));


return cljs.core.constant$keyword$127;
} else {
if((state_val_16431 === (6))){
var inst_16420 = cljs.core.async.timeout((2000));
var state_16430__$1 = state_16430;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16430__$1,(9),inst_16420);
} else {
if((state_val_16431 === (5))){
var inst_16418 = (state_16430[(2)]);
var state_16430__$1 = state_16430;
if(cljs.core.truth_(inst_16418)){
var statearr_16436_16451 = state_16430__$1;
(statearr_16436_16451[(1)] = (6));

} else {
var statearr_16437_16452 = state_16430__$1;
(statearr_16437_16452[(1)] = (7));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_16431 === (4))){
var inst_16416 = (state_16430[(2)]);
var state_16430__$1 = state_16430;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16430__$1,(5),c,inst_16416);
} else {
if((state_val_16431 === (3))){
var inst_16428 = (state_16430[(2)]);
var state_16430__$1 = state_16430;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16430__$1,inst_16428);
} else {
if((state_val_16431 === (2))){
var inst_16413 = (function (){var G__16438 = arimaa.state.session_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16438) : cljs.core.deref.call(null,G__16438));
})();
var inst_16414 = arimaa.requests.gameroom_state(inst_16413);
var state_16430__$1 = state_16430;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16430__$1,(4),inst_16414);
} else {
if((state_val_16431 === (1))){
var state_16430__$1 = state_16430;
var statearr_16439_16453 = state_16430__$1;
(statearr_16439_16453[(2)] = null);

(statearr_16439_16453[(1)] = (2));


return cljs.core.constant$keyword$127;
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
});})(c__12182__auto___16447,c))
;
return ((function (switch__12167__auto__,c__12182__auto___16447,c){
return (function() {
var state_machine__12168__auto__ = null;
var state_machine__12168__auto____0 = (function (){
var statearr_16443 = [null,null,null,null,null,null,null,null];
(statearr_16443[(0)] = state_machine__12168__auto__);

(statearr_16443[(1)] = (1));

return statearr_16443;
});
var state_machine__12168__auto____1 = (function (state_16430){
while(true){
var ret_value__12169__auto__ = (function (){try{while(true){
var result__12170__auto__ = switch__12167__auto__(state_16430);
if(cljs.core.keyword_identical_QMARK_(result__12170__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12170__auto__;
}
break;
}
}catch (e16444){if((e16444 instanceof Object)){
var ex__12171__auto__ = e16444;
var statearr_16445_16454 = state_16430;
(statearr_16445_16454[(5)] = ex__12171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16430);

return cljs.core.constant$keyword$127;
} else {
throw e16444;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12169__auto__,cljs.core.constant$keyword$127)){
var G__16455 = state_16430;
state_16430 = G__16455;
continue;
} else {
return ret_value__12169__auto__;
}
break;
}
});
state_machine__12168__auto__ = function(state_16430){
switch(arguments.length){
case 0:
return state_machine__12168__auto____0.call(this);
case 1:
return state_machine__12168__auto____1.call(this,state_16430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12168__auto____0;
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12168__auto____1;
return state_machine__12168__auto__;
})()
;})(switch__12167__auto__,c__12182__auto___16447,c))
})();
var state__12184__auto__ = (function (){var statearr_16446 = (function (){return (f__12183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12183__auto__.cljs$core$IFn$_invoke$arity$0() : f__12183__auto__.call(null));
})();
(statearr_16446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12182__auto___16447);

return statearr_16446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12184__auto__);
});})(c__12182__auto___16447,c))
);


return c;
});
arimaa.gameroom.new_game_view = (function new_game_view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$259,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$260,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$261,"New game"], null)], null)], null);
});
arimaa.gameroom.game_view = (function game_view(game){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$129,[cljs.core.str("http://arimaa.com/arimaa/gameroom/playerpage.cgi?id="),cljs.core.str(cljs.core.constant$keyword$263.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$262,"_blank"], null),cljs.core.constant$keyword$132.cljs$core$IFn$_invoke$arity$1(game)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$264," vs "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$129,[cljs.core.str("http://arimaa.com/arimaa/gameroom/playerpage.cgi?id="),cljs.core.str(cljs.core.constant$keyword$265.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$262,"_blank"], null),cljs.core.constant$keyword$133.cljs$core$IFn$_invoke$arity$1(game)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$264,cljs.core.constant$keyword$266.cljs$core$IFn$_invoke$arity$1(game)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$129,[cljs.core.str("http://arimaa.com/arimaa/gameroom/opengamewin.cgi?gameid="),cljs.core.str(cljs.core.constant$keyword$50.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$262,"_blank"], null),"View game"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$264,cljs.core.constant$keyword$267.cljs$core$IFn$_invoke$arity$1(game)], null)], null)], null);
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
var c__12182__auto___16554 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12182__auto___16554,c){
return (function (){
var f__12183__auto__ = (function (){var switch__12167__auto__ = ((function (c__12182__auto___16554,c){
return (function (state_16533){
var state_val_16534 = (state_16533[(1)]);
if((state_val_16534 === (7))){
var inst_16523 = (state_16533[(2)]);
var state_16533__$1 = state_16533;
if(cljs.core.truth_(inst_16523)){
var statearr_16535_16555 = state_16533__$1;
(statearr_16535_16555[(1)] = (8));

} else {
var statearr_16536_16556 = state_16533__$1;
(statearr_16536_16556[(1)] = (9));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_16534 === (1))){
var inst_16505 = (function (){var G__16537 = arimaa.state.session_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16537) : cljs.core.deref.call(null,G__16537));
})();
var inst_16506 = arimaa.requests.reserve_seat(inst_16505,game_id,cljs.core.constant$keyword$268);
var state_16533__$1 = state_16533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16533__$1,(2),inst_16506);
} else {
if((state_val_16534 === (4))){
var inst_16515 = (state_16533[(7)]);
var inst_16514 = (state_16533[(8)]);
var inst_16508 = (state_16533[(9)]);
var inst_16517 = cljs.core.constant$keyword$269.cljs$core$IFn$_invoke$arity$1(inst_16508);
var inst_16518 = cljs.core.constant$keyword$232.cljs$core$IFn$_invoke$arity$1(inst_16514);
var inst_16519 = arimaa.requests.game_state(inst_16517,inst_16518,inst_16515);
var state_16533__$1 = state_16533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16533__$1,(6),inst_16519);
} else {
if((state_val_16534 === (6))){
var inst_16521 = (state_16533[(10)]);
var inst_16521__$1 = (state_16533[(2)]);
var state_16533__$1 = (function (){var statearr_16538 = state_16533;
(statearr_16538[(10)] = inst_16521__$1);

return statearr_16538;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16533__$1,(7),c,inst_16521__$1);
} else {
if((state_val_16534 === (3))){
var inst_16514 = (state_16533[(2)]);
var inst_16515 = (0);
var state_16533__$1 = (function (){var statearr_16539 = state_16533;
(statearr_16539[(7)] = inst_16515);

(statearr_16539[(8)] = inst_16514);

return statearr_16539;
})();
var statearr_16540_16557 = state_16533__$1;
(statearr_16540_16557[(2)] = null);

(statearr_16540_16557[(1)] = (4));


return cljs.core.constant$keyword$127;
} else {
if((state_val_16534 === (2))){
var inst_16508 = (state_16533[(9)]);
var inst_16508__$1 = (state_16533[(2)]);
var inst_16509 = cljs.core.constant$keyword$269.cljs$core$IFn$_invoke$arity$1(inst_16508__$1);
var inst_16510 = (function (){var G__16541 = arimaa.state.gameroom_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16541) : cljs.core.deref.call(null,G__16541));
})();
var inst_16511 = cljs.core.constant$keyword$236.cljs$core$IFn$_invoke$arity$1(inst_16508__$1);
var inst_16512 = arimaa.requests.sit(inst_16509,inst_16510,inst_16511);
var state_16533__$1 = (function (){var statearr_16542 = state_16533;
(statearr_16542[(9)] = inst_16508__$1);

return statearr_16542;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16533__$1,(3),inst_16512);
} else {
if((state_val_16534 === (9))){
var state_16533__$1 = state_16533;
var statearr_16543_16558 = state_16533__$1;
(statearr_16543_16558[(2)] = null);

(statearr_16543_16558[(1)] = (10));


return cljs.core.constant$keyword$127;
} else {
if((state_val_16534 === (5))){
var inst_16531 = (state_16533[(2)]);
var state_16533__$1 = state_16533;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16533__$1,inst_16531);
} else {
if((state_val_16534 === (10))){
var inst_16529 = (state_16533[(2)]);
var state_16533__$1 = state_16533;
var statearr_16544_16559 = state_16533__$1;
(statearr_16544_16559[(2)] = inst_16529);

(statearr_16544_16559[(1)] = (5));


return cljs.core.constant$keyword$127;
} else {
if((state_val_16534 === (8))){
var inst_16521 = (state_16533[(10)]);
var inst_16525 = cljs.core.constant$keyword$240.cljs$core$IFn$_invoke$arity$1(inst_16521);
var inst_16515 = inst_16525;
var state_16533__$1 = (function (){var statearr_16545 = state_16533;
(statearr_16545[(7)] = inst_16515);

return statearr_16545;
})();
var statearr_16546_16560 = state_16533__$1;
(statearr_16546_16560[(2)] = null);

(statearr_16546_16560[(1)] = (4));


return cljs.core.constant$keyword$127;
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
});})(c__12182__auto___16554,c))
;
return ((function (switch__12167__auto__,c__12182__auto___16554,c){
return (function() {
var state_machine__12168__auto__ = null;
var state_machine__12168__auto____0 = (function (){
var statearr_16550 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16550[(0)] = state_machine__12168__auto__);

(statearr_16550[(1)] = (1));

return statearr_16550;
});
var state_machine__12168__auto____1 = (function (state_16533){
while(true){
var ret_value__12169__auto__ = (function (){try{while(true){
var result__12170__auto__ = switch__12167__auto__(state_16533);
if(cljs.core.keyword_identical_QMARK_(result__12170__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12170__auto__;
}
break;
}
}catch (e16551){if((e16551 instanceof Object)){
var ex__12171__auto__ = e16551;
var statearr_16552_16561 = state_16533;
(statearr_16552_16561[(5)] = ex__12171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16533);

return cljs.core.constant$keyword$127;
} else {
throw e16551;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12169__auto__,cljs.core.constant$keyword$127)){
var G__16562 = state_16533;
state_16533 = G__16562;
continue;
} else {
return ret_value__12169__auto__;
}
break;
}
});
state_machine__12168__auto__ = function(state_16533){
switch(arguments.length){
case 0:
return state_machine__12168__auto____0.call(this);
case 1:
return state_machine__12168__auto____1.call(this,state_16533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12168__auto____0;
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12168__auto____1;
return state_machine__12168__auto__;
})()
;})(switch__12167__auto__,c__12182__auto___16554,c))
})();
var state__12184__auto__ = (function (){var statearr_16553 = (function (){return (f__12183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12183__auto__.cljs$core$IFn$_invoke$arity$0() : f__12183__auto__.call(null));
})();
(statearr_16553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12182__auto___16554);

return statearr_16553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12184__auto__);
});})(c__12182__auto___16554,c))
);


return c;
});
arimaa.gameroom.piece_at_square = (function piece_at_square(position,col,row){
return cljs.core.constant$keyword$152.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (piece){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((new arimaa.game.Square(col,row,null,null,null)),cljs.core.constant$keyword$153.cljs$core$IFn$_invoke$arity$1(piece));
}),position)));
});
arimaa.gameroom.piece_to_image = (function piece_to_image(piece){
var colour_char = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$142,cljs.core.constant$keyword$151.cljs$core$IFn$_invoke$arity$1(piece)))?"w":"b");
var animal_char = (function (){var G__16564 = (((cljs.core.constant$keyword$150.cljs$core$IFn$_invoke$arity$1(piece) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$150.cljs$core$IFn$_invoke$arity$1(piece).fqn:null);
switch (G__16564) {
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
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.constant$keyword$150.cljs$core$IFn$_invoke$arity$1(piece))].join('')));

}
})();
return [cljs.core.str("http://arimaa.com/arimaa/jsClient/pro/images/"),cljs.core.str(colour_char),cljs.core.str(animal_char),cljs.core.str(".gif")].join('');
});
arimaa.gameroom.piece_image_at_square = (function piece_image_at_square(position,col,row){
var piece = arimaa.gameroom.piece_at_square(position,col,row);
if(cljs.core.truth_(piece)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$270,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$271,arimaa.gameroom.piece_to_image(piece)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$270,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$271,"http://arimaa.com/arimaa/jsClient/pro/images/sp.gif"], null)], null);
}
});
arimaa.gameroom.gameboard_view = (function gameboard_view(position){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$272,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$273,(function (){var iter__4506__auto__ = (function iter__16596(s__16597){
return (new cljs.core.LazySeq(null,(function (){
var s__16597__$1 = s__16597;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__16597__$1);
if(temp__4126__auto__){
var s__16597__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16597__$2)){
var c__4504__auto__ = cljs.core.chunk_first(s__16597__$2);
var size__4505__auto__ = cljs.core.count(c__4504__auto__);
var b__16599 = cljs.core.chunk_buffer(size__4505__auto__);
if((function (){var i__16598 = (0);
while(true){
if((i__16598 < size__4505__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4504__auto__,i__16598);
cljs.core.chunk_append(b__16599,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$274,(function (){var iter__4506__auto__ = ((function (i__16598,row,c__4504__auto__,size__4505__auto__,b__16599,s__16597__$2,temp__4126__auto__){
return (function iter__16614(s__16615){
return (new cljs.core.LazySeq(null,((function (i__16598,row,c__4504__auto__,size__4505__auto__,b__16599,s__16597__$2,temp__4126__auto__){
return (function (){
var s__16615__$1 = s__16615;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__16615__$1);
if(temp__4126__auto____$1){
var s__16615__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16615__$2)){
var c__4504__auto____$1 = cljs.core.chunk_first(s__16615__$2);
var size__4505__auto____$1 = cljs.core.count(c__4504__auto____$1);
var b__16617 = cljs.core.chunk_buffer(size__4505__auto____$1);
if((function (){var i__16616 = (0);
while(true){
if((i__16616 < size__4505__auto____$1)){
var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4504__auto____$1,i__16616);
cljs.core.chunk_append(b__16617,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$275,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$22,arimaa.gameroom.gameboard_square_class(col,row)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.piece_image_at_square,position,col,row], null)], null));

var G__16626 = (i__16616 + (1));
i__16616 = G__16626;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16617),iter__16614(cljs.core.chunk_rest(s__16615__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16617),null);
}
} else {
var col = cljs.core.first(s__16615__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$275,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$22,arimaa.gameroom.gameboard_square_class(col,row)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.piece_image_at_square,position,col,row], null)], null),iter__16614(cljs.core.rest(s__16615__$2)));
}
} else {
return null;
}
break;
}
});})(i__16598,row,c__4504__auto__,size__4505__auto__,b__16599,s__16597__$2,temp__4126__auto__))
,null,null));
});})(i__16598,row,c__4504__auto__,size__4505__auto__,b__16599,s__16597__$2,temp__4126__auto__))
;
return iter__4506__auto__(arimaa.utils.cols);
})()], null));

var G__16627 = (i__16598 + (1));
i__16598 = G__16627;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16599),iter__16596(cljs.core.chunk_rest(s__16597__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16599),null);
}
} else {
var row = cljs.core.first(s__16597__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$274,(function (){var iter__4506__auto__ = ((function (row,s__16597__$2,temp__4126__auto__){
return (function iter__16620(s__16621){
return (new cljs.core.LazySeq(null,((function (row,s__16597__$2,temp__4126__auto__){
return (function (){
var s__16621__$1 = s__16621;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__16621__$1);
if(temp__4126__auto____$1){
var s__16621__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16621__$2)){
var c__4504__auto__ = cljs.core.chunk_first(s__16621__$2);
var size__4505__auto__ = cljs.core.count(c__4504__auto__);
var b__16623 = cljs.core.chunk_buffer(size__4505__auto__);
if((function (){var i__16622 = (0);
while(true){
if((i__16622 < size__4505__auto__)){
var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4504__auto__,i__16622);
cljs.core.chunk_append(b__16623,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$275,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$22,arimaa.gameroom.gameboard_square_class(col,row)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.piece_image_at_square,position,col,row], null)], null));

var G__16628 = (i__16622 + (1));
i__16622 = G__16628;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16623),iter__16620(cljs.core.chunk_rest(s__16621__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16623),null);
}
} else {
var col = cljs.core.first(s__16621__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$275,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$22,arimaa.gameroom.gameboard_square_class(col,row)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.piece_image_at_square,position,col,row], null)], null),iter__16620(cljs.core.rest(s__16621__$2)));
}
} else {
return null;
}
break;
}
});})(row,s__16597__$2,temp__4126__auto__))
,null,null));
});})(row,s__16597__$2,temp__4126__auto__))
;
return iter__4506__auto__(arimaa.utils.cols);
})()], null),iter__16596(cljs.core.rest(s__16597__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4506__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((8),(0),(-1)));
})()], null)], null);
});
arimaa.gameroom.move_box = (function move_box(moves,current_turn){
var turns_lookup = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (move){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.game.show(move),cljs.core.constant$keyword$159.cljs$core$IFn$_invoke$arity$1(move)], null);
}),moves));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.utils.scroll_bottom_wrapper,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$276,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$277,(15),cljs.core.constant$keyword$254,((function (turns_lookup){
return (function (p1__16629_SHARP_){
var G__16638 = current_turn;
var G__16639 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(turns_lookup,p1__16629_SHARP_.target.value);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16638,G__16639) : cljs.core.reset_BANG_.call(null,G__16638,G__16639));
});})(turns_lookup))
], null),(function (){var iter__4506__auto__ = ((function (turns_lookup){
return (function iter__16640(s__16641){
return (new cljs.core.LazySeq(null,((function (turns_lookup){
return (function (){
var s__16641__$1 = s__16641;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__16641__$1);
if(temp__4126__auto__){
var s__16641__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16641__$2)){
var c__4504__auto__ = cljs.core.chunk_first(s__16641__$2);
var size__4505__auto__ = cljs.core.count(c__4504__auto__);
var b__16643 = cljs.core.chunk_buffer(size__4505__auto__);
if((function (){var i__16642 = (0);
while(true){
if((i__16642 < size__4505__auto__)){
var move = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4504__auto__,i__16642);
cljs.core.chunk_append(b__16643,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$278,arimaa.game.show(move)], null));

var G__16646 = (i__16642 + (1));
i__16642 = G__16646;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16643),iter__16640(cljs.core.chunk_rest(s__16641__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16643),null);
}
} else {
var move = cljs.core.first(s__16641__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$278,arimaa.game.show(move)], null),iter__16640(cljs.core.rest(s__16641__$2)));
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
return iter__4506__auto__(moves);
})()], null)], null);
});
arimaa.gameroom.turn_to_moves_count = (function turn_to_moves_count(turn){
return (((2) * cljs.core.constant$keyword$158.cljs$core$IFn$_invoke$arity$1(turn)) + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$142,cljs.core.constant$keyword$151.cljs$core$IFn$_invoke$arity$1(turn)))?(-1):(0)));
});
arimaa.gameroom.position_at_turn = (function position_at_turn(turn,moves){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__16648_SHARP_,p2__16647_SHARP_){
return arimaa.game.update_position(p2__16647_SHARP_,p1__16648_SHARP_);
}),cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$160,cljs.core.array_seq([(cljs.core.truth_(turn)?cljs.core.take.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.turn_to_moves_count(turn),moves):moves)], 0)));
});
arimaa.gameroom.ingame_view = (function ingame_view(game){
var game_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var current_turn = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var game_state_chan = arimaa.gameroom.game_state_channel(cljs.core.constant$keyword$50.cljs$core$IFn$_invoke$arity$1(game));
var mounted_gameboard_view = cljs.core.with_meta(arimaa.gameroom.gameboard_view,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$124,((function (game_state,current_turn,game_state_chan){
return (function (){
return arimaa.utils.subscribe_atom_to_channel_BANG_(game_state,game_state_chan);
});})(game_state,current_turn,game_state_chan))
,cljs.core.constant$keyword$279,((function (game_state,current_turn,game_state_chan){
return (function (){
return cljs.core.async.close_BANG_(game_state_chan);
});})(game_state,current_turn,game_state_chan))
], null));
return ((function (game_state,current_turn,game_state_chan,mounted_gameboard_view){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mounted_gameboard_view,arimaa.gameroom.position_at_turn((function (){var G__16652 = current_turn;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16652) : cljs.core.deref.call(null,G__16652));
})(),cljs.core.constant$keyword$237.cljs$core$IFn$_invoke$arity$1((function (){var G__16653 = game_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16653) : cljs.core.deref.call(null,G__16653));
})()))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.move_box,cljs.core.constant$keyword$237.cljs$core$IFn$_invoke$arity$1((function (){var G__16654 = game_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16654) : cljs.core.deref.call(null,G__16654));
})()),current_turn], null)], null);
});
;})(game_state,current_turn,game_state_chan,mounted_gameboard_view))
});
arimaa.gameroom.my_games_view = (function my_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$259,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$260,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$261,"My games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,arimaa.state.my_games((function (){var G__16656 = arimaa.state.username;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16656) : cljs.core.deref.call(null,G__16656));
})()))], null)], null);
});
arimaa.gameroom.open_games_view = (function open_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$259,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$260,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$261,"Open games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$280.cljs$core$IFn$_invoke$arity$1((function (){var G__16658 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16658) : cljs.core.deref.call(null,G__16658));
})()))], null)], null);
});
arimaa.gameroom.live_games_view = (function live_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$259,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$260,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$261,"Live games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,(function (){var iter__4506__auto__ = (function iter__16666(s__16667){
return (new cljs.core.LazySeq(null,(function (){
var s__16667__$1 = s__16667;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__16667__$1);
if(temp__4126__auto__){
var s__16667__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16667__$2)){
var c__4504__auto__ = cljs.core.chunk_first(s__16667__$2);
var size__4505__auto__ = cljs.core.count(c__4504__auto__);
var b__16669 = cljs.core.chunk_buffer(size__4505__auto__);
if((function (){var i__16668 = (0);
while(true){
if((i__16668 < size__4505__auto__)){
var live_game = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4504__auto__,i__16668);
cljs.core.chunk_append(b__16669,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.ingame_view,live_game], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$37,cljs.core.constant$keyword$50.cljs$core$IFn$_invoke$arity$1(live_game)], null)));

var G__16673 = (i__16668 + (1));
i__16668 = G__16673;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16669),iter__16666(cljs.core.chunk_rest(s__16667__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16669),null);
}
} else {
var live_game = cljs.core.first(s__16667__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.ingame_view,live_game], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$37,cljs.core.constant$keyword$50.cljs$core$IFn$_invoke$arity$1(live_game)], null)),iter__16666(cljs.core.rest(s__16667__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4506__auto__(arimaa.state.live_games((function (){var G__16672 = arimaa.state.username;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16672) : cljs.core.deref.call(null,G__16672));
})()));
})()], null)], null);
});
arimaa.gameroom.recent_games_view = (function recent_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$259,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$260,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$261,"Recent games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$281.cljs$core$IFn$_invoke$arity$1((function (){var G__16675 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16675) : cljs.core.deref.call(null,G__16675));
})()))], null)], null);
});
arimaa.gameroom.scheduled_games_view = (function scheduled_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$259,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$260,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$261,"Scheduled games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,arimaa.state.scheduled_games())], null)], null);
});
arimaa.gameroom.gameroom_view = (function gameroom_view(){
arimaa.utils.subscribe_atom_to_channel_BANG_(arimaa.state.gameroom_state,arimaa.gameroom.gameroom_state_channel());

return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$282,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.new_game_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.my_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.open_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.live_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.recent_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.scheduled_games_view], null)], null);
});
