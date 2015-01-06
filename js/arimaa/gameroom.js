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
var c__12070__auto___17212 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12070__auto___17212,c){
return (function (){
var f__12071__auto__ = (function (){var switch__12055__auto__ = ((function (c__12070__auto___17212,c){
return (function (state_17195){
var state_val_17196 = (state_17195[(1)]);
if((state_val_17196 === (9))){
var inst_17187 = (state_17195[(2)]);
var state_17195__$1 = (function (){var statearr_17197 = state_17195;
(statearr_17197[(7)] = inst_17187);

return statearr_17197;
})();
var statearr_17198_17213 = state_17195__$1;
(statearr_17198_17213[(2)] = null);

(statearr_17198_17213[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_17196 === (8))){
var inst_17191 = (state_17195[(2)]);
var state_17195__$1 = state_17195;
var statearr_17199_17214 = state_17195__$1;
(statearr_17199_17214[(2)] = inst_17191);

(statearr_17199_17214[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_17196 === (7))){
var state_17195__$1 = state_17195;
var statearr_17200_17215 = state_17195__$1;
(statearr_17200_17215[(2)] = null);

(statearr_17200_17215[(1)] = (8));


return cljs.core.constant$keyword$127;
} else {
if((state_val_17196 === (6))){
var inst_17185 = cljs.core.async.timeout((2000));
var state_17195__$1 = state_17195;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17195__$1,(9),inst_17185);
} else {
if((state_val_17196 === (5))){
var inst_17183 = (state_17195[(2)]);
var state_17195__$1 = state_17195;
if(cljs.core.truth_(inst_17183)){
var statearr_17201_17216 = state_17195__$1;
(statearr_17201_17216[(1)] = (6));

} else {
var statearr_17202_17217 = state_17195__$1;
(statearr_17202_17217[(1)] = (7));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_17196 === (4))){
var inst_17181 = (state_17195[(2)]);
var state_17195__$1 = state_17195;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17195__$1,(5),c,inst_17181);
} else {
if((state_val_17196 === (3))){
var inst_17193 = (state_17195[(2)]);
var state_17195__$1 = state_17195;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17195__$1,inst_17193);
} else {
if((state_val_17196 === (2))){
var inst_17178 = (function (){var G__17203 = arimaa.state.session_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17203) : cljs.core.deref.call(null,G__17203));
})();
var inst_17179 = arimaa.requests.gameroom_state(inst_17178);
var state_17195__$1 = state_17195;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17195__$1,(4),inst_17179);
} else {
if((state_val_17196 === (1))){
var state_17195__$1 = state_17195;
var statearr_17204_17218 = state_17195__$1;
(statearr_17204_17218[(2)] = null);

(statearr_17204_17218[(1)] = (2));


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
});})(c__12070__auto___17212,c))
;
return ((function (switch__12055__auto__,c__12070__auto___17212,c){
return (function() {
var state_machine__12056__auto__ = null;
var state_machine__12056__auto____0 = (function (){
var statearr_17208 = [null,null,null,null,null,null,null,null];
(statearr_17208[(0)] = state_machine__12056__auto__);

(statearr_17208[(1)] = (1));

return statearr_17208;
});
var state_machine__12056__auto____1 = (function (state_17195){
while(true){
var ret_value__12057__auto__ = (function (){try{while(true){
var result__12058__auto__ = switch__12055__auto__(state_17195);
if(cljs.core.keyword_identical_QMARK_(result__12058__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12058__auto__;
}
break;
}
}catch (e17209){if((e17209 instanceof Object)){
var ex__12059__auto__ = e17209;
var statearr_17210_17219 = state_17195;
(statearr_17210_17219[(5)] = ex__12059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17195);

return cljs.core.constant$keyword$127;
} else {
throw e17209;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12057__auto__,cljs.core.constant$keyword$127)){
var G__17220 = state_17195;
state_17195 = G__17220;
continue;
} else {
return ret_value__12057__auto__;
}
break;
}
});
state_machine__12056__auto__ = function(state_17195){
switch(arguments.length){
case 0:
return state_machine__12056__auto____0.call(this);
case 1:
return state_machine__12056__auto____1.call(this,state_17195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12056__auto____0;
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12056__auto____1;
return state_machine__12056__auto__;
})()
;})(switch__12055__auto__,c__12070__auto___17212,c))
})();
var state__12072__auto__ = (function (){var statearr_17211 = (function (){return (f__12071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12071__auto__.cljs$core$IFn$_invoke$arity$0() : f__12071__auto__.call(null));
})();
(statearr_17211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12070__auto___17212);

return statearr_17211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12072__auto__);
});})(c__12070__auto___17212,c))
);


return c;
});
arimaa.gameroom.new_game_view = (function new_game_view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$272,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$273,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$274,"New game"], null)], null)], null);
});
arimaa.gameroom.game_view = (function game_view(game){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$129,[cljs.core.str("http://arimaa.com/arimaa/gameroom/playerpage.cgi?id="),cljs.core.str(cljs.core.constant$keyword$276.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$275,"_blank"], null),cljs.core.constant$keyword$132.cljs$core$IFn$_invoke$arity$1(game)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$260," vs "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$129,[cljs.core.str("http://arimaa.com/arimaa/gameroom/playerpage.cgi?id="),cljs.core.str(cljs.core.constant$keyword$277.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$275,"_blank"], null),cljs.core.constant$keyword$133.cljs$core$IFn$_invoke$arity$1(game)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$260,cljs.core.constant$keyword$278.cljs$core$IFn$_invoke$arity$1(game)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$129,[cljs.core.str("http://arimaa.com/arimaa/gameroom/opengamewin.cgi?gameid="),cljs.core.str(cljs.core.constant$keyword$50.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$275,"_blank"], null),"View game"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$260,cljs.core.constant$keyword$279.cljs$core$IFn$_invoke$arity$1(game)], null)], null)], null);
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
var c__12070__auto___17319 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12070__auto___17319,c){
return (function (){
var f__12071__auto__ = (function (){var switch__12055__auto__ = ((function (c__12070__auto___17319,c){
return (function (state_17298){
var state_val_17299 = (state_17298[(1)]);
if((state_val_17299 === (7))){
var inst_17288 = (state_17298[(2)]);
var state_17298__$1 = state_17298;
if(cljs.core.truth_(inst_17288)){
var statearr_17300_17320 = state_17298__$1;
(statearr_17300_17320[(1)] = (8));

} else {
var statearr_17301_17321 = state_17298__$1;
(statearr_17301_17321[(1)] = (9));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_17299 === (1))){
var inst_17270 = (function (){var G__17302 = arimaa.state.session_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17302) : cljs.core.deref.call(null,G__17302));
})();
var inst_17271 = arimaa.requests.reserve_seat(inst_17270,game_id,cljs.core.constant$keyword$280);
var state_17298__$1 = state_17298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17298__$1,(2),inst_17271);
} else {
if((state_val_17299 === (4))){
var inst_17273 = (state_17298[(7)]);
var inst_17279 = (state_17298[(8)]);
var inst_17280 = (state_17298[(9)]);
var inst_17282 = cljs.core.constant$keyword$281.cljs$core$IFn$_invoke$arity$1(inst_17273);
var inst_17283 = cljs.core.constant$keyword$232.cljs$core$IFn$_invoke$arity$1(inst_17279);
var inst_17284 = arimaa.requests.game_state(inst_17282,inst_17283,inst_17280);
var state_17298__$1 = state_17298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17298__$1,(6),inst_17284);
} else {
if((state_val_17299 === (6))){
var inst_17286 = (state_17298[(10)]);
var inst_17286__$1 = (state_17298[(2)]);
var state_17298__$1 = (function (){var statearr_17303 = state_17298;
(statearr_17303[(10)] = inst_17286__$1);

return statearr_17303;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17298__$1,(7),c,inst_17286__$1);
} else {
if((state_val_17299 === (3))){
var inst_17279 = (state_17298[(2)]);
var inst_17280 = (0);
var state_17298__$1 = (function (){var statearr_17304 = state_17298;
(statearr_17304[(8)] = inst_17279);

(statearr_17304[(9)] = inst_17280);

return statearr_17304;
})();
var statearr_17305_17322 = state_17298__$1;
(statearr_17305_17322[(2)] = null);

(statearr_17305_17322[(1)] = (4));


return cljs.core.constant$keyword$127;
} else {
if((state_val_17299 === (2))){
var inst_17273 = (state_17298[(7)]);
var inst_17273__$1 = (state_17298[(2)]);
var inst_17274 = cljs.core.constant$keyword$281.cljs$core$IFn$_invoke$arity$1(inst_17273__$1);
var inst_17275 = (function (){var G__17306 = arimaa.state.gameroom_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17306) : cljs.core.deref.call(null,G__17306));
})();
var inst_17276 = cljs.core.constant$keyword$236.cljs$core$IFn$_invoke$arity$1(inst_17273__$1);
var inst_17277 = arimaa.requests.sit(inst_17274,inst_17275,inst_17276);
var state_17298__$1 = (function (){var statearr_17307 = state_17298;
(statearr_17307[(7)] = inst_17273__$1);

return statearr_17307;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17298__$1,(3),inst_17277);
} else {
if((state_val_17299 === (9))){
var state_17298__$1 = state_17298;
var statearr_17308_17323 = state_17298__$1;
(statearr_17308_17323[(2)] = null);

(statearr_17308_17323[(1)] = (10));


return cljs.core.constant$keyword$127;
} else {
if((state_val_17299 === (5))){
var inst_17296 = (state_17298[(2)]);
var state_17298__$1 = state_17298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17298__$1,inst_17296);
} else {
if((state_val_17299 === (10))){
var inst_17294 = (state_17298[(2)]);
var state_17298__$1 = state_17298;
var statearr_17309_17324 = state_17298__$1;
(statearr_17309_17324[(2)] = inst_17294);

(statearr_17309_17324[(1)] = (5));


return cljs.core.constant$keyword$127;
} else {
if((state_val_17299 === (8))){
var inst_17286 = (state_17298[(10)]);
var inst_17290 = cljs.core.constant$keyword$240.cljs$core$IFn$_invoke$arity$1(inst_17286);
var inst_17280 = inst_17290;
var state_17298__$1 = (function (){var statearr_17310 = state_17298;
(statearr_17310[(9)] = inst_17280);

return statearr_17310;
})();
var statearr_17311_17325 = state_17298__$1;
(statearr_17311_17325[(2)] = null);

(statearr_17311_17325[(1)] = (4));


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
});})(c__12070__auto___17319,c))
;
return ((function (switch__12055__auto__,c__12070__auto___17319,c){
return (function() {
var state_machine__12056__auto__ = null;
var state_machine__12056__auto____0 = (function (){
var statearr_17315 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17315[(0)] = state_machine__12056__auto__);

(statearr_17315[(1)] = (1));

return statearr_17315;
});
var state_machine__12056__auto____1 = (function (state_17298){
while(true){
var ret_value__12057__auto__ = (function (){try{while(true){
var result__12058__auto__ = switch__12055__auto__(state_17298);
if(cljs.core.keyword_identical_QMARK_(result__12058__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12058__auto__;
}
break;
}
}catch (e17316){if((e17316 instanceof Object)){
var ex__12059__auto__ = e17316;
var statearr_17317_17326 = state_17298;
(statearr_17317_17326[(5)] = ex__12059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17298);

return cljs.core.constant$keyword$127;
} else {
throw e17316;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12057__auto__,cljs.core.constant$keyword$127)){
var G__17327 = state_17298;
state_17298 = G__17327;
continue;
} else {
return ret_value__12057__auto__;
}
break;
}
});
state_machine__12056__auto__ = function(state_17298){
switch(arguments.length){
case 0:
return state_machine__12056__auto____0.call(this);
case 1:
return state_machine__12056__auto____1.call(this,state_17298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12056__auto____0;
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12056__auto____1;
return state_machine__12056__auto__;
})()
;})(switch__12055__auto__,c__12070__auto___17319,c))
})();
var state__12072__auto__ = (function (){var statearr_17318 = (function (){return (f__12071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12071__auto__.cljs$core$IFn$_invoke$arity$0() : f__12071__auto__.call(null));
})();
(statearr_17318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12070__auto___17319);

return statearr_17318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12072__auto__);
});})(c__12070__auto___17319,c))
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
var animal_char = (function (){var G__17329 = (((cljs.core.constant$keyword$150.cljs$core$IFn$_invoke$arity$1(piece) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$150.cljs$core$IFn$_invoke$arity$1(piece).fqn:null);
switch (G__17329) {
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$282,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$283,arimaa.gameroom.piece_to_image(piece)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$282,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$283,"http://arimaa.com/arimaa/jsClient/pro/images/sp.gif"], null)], null);
}
});
arimaa.gameroom.gameboard_view = (function gameboard_view(position){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$284,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$285,(function (){var iter__4487__auto__ = (function iter__17361(s__17362){
return (new cljs.core.LazySeq(null,(function (){
var s__17362__$1 = s__17362;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__17362__$1);
if(temp__4126__auto__){
var s__17362__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17362__$2)){
var c__4485__auto__ = cljs.core.chunk_first(s__17362__$2);
var size__4486__auto__ = cljs.core.count(c__4485__auto__);
var b__17364 = cljs.core.chunk_buffer(size__4486__auto__);
if((function (){var i__17363 = (0);
while(true){
if((i__17363 < size__4486__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4485__auto__,i__17363);
cljs.core.chunk_append(b__17364,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$286,(function (){var iter__4487__auto__ = ((function (i__17363,row,c__4485__auto__,size__4486__auto__,b__17364,s__17362__$2,temp__4126__auto__){
return (function iter__17379(s__17380){
return (new cljs.core.LazySeq(null,((function (i__17363,row,c__4485__auto__,size__4486__auto__,b__17364,s__17362__$2,temp__4126__auto__){
return (function (){
var s__17380__$1 = s__17380;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__17380__$1);
if(temp__4126__auto____$1){
var s__17380__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17380__$2)){
var c__4485__auto____$1 = cljs.core.chunk_first(s__17380__$2);
var size__4486__auto____$1 = cljs.core.count(c__4485__auto____$1);
var b__17382 = cljs.core.chunk_buffer(size__4486__auto____$1);
if((function (){var i__17381 = (0);
while(true){
if((i__17381 < size__4486__auto____$1)){
var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4485__auto____$1,i__17381);
cljs.core.chunk_append(b__17382,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$287,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$22,arimaa.gameroom.gameboard_square_class(col,row)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.piece_image_at_square,position,col,row], null)], null));

var G__17391 = (i__17381 + (1));
i__17381 = G__17391;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17382),iter__17379(cljs.core.chunk_rest(s__17380__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17382),null);
}
} else {
var col = cljs.core.first(s__17380__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$287,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$22,arimaa.gameroom.gameboard_square_class(col,row)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.piece_image_at_square,position,col,row], null)], null),iter__17379(cljs.core.rest(s__17380__$2)));
}
} else {
return null;
}
break;
}
});})(i__17363,row,c__4485__auto__,size__4486__auto__,b__17364,s__17362__$2,temp__4126__auto__))
,null,null));
});})(i__17363,row,c__4485__auto__,size__4486__auto__,b__17364,s__17362__$2,temp__4126__auto__))
;
return iter__4487__auto__(arimaa.utils.cols);
})()], null));

var G__17392 = (i__17363 + (1));
i__17363 = G__17392;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17364),iter__17361(cljs.core.chunk_rest(s__17362__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17364),null);
}
} else {
var row = cljs.core.first(s__17362__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$286,(function (){var iter__4487__auto__ = ((function (row,s__17362__$2,temp__4126__auto__){
return (function iter__17385(s__17386){
return (new cljs.core.LazySeq(null,((function (row,s__17362__$2,temp__4126__auto__){
return (function (){
var s__17386__$1 = s__17386;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__17386__$1);
if(temp__4126__auto____$1){
var s__17386__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17386__$2)){
var c__4485__auto__ = cljs.core.chunk_first(s__17386__$2);
var size__4486__auto__ = cljs.core.count(c__4485__auto__);
var b__17388 = cljs.core.chunk_buffer(size__4486__auto__);
if((function (){var i__17387 = (0);
while(true){
if((i__17387 < size__4486__auto__)){
var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4485__auto__,i__17387);
cljs.core.chunk_append(b__17388,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$287,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$22,arimaa.gameroom.gameboard_square_class(col,row)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.piece_image_at_square,position,col,row], null)], null));

var G__17393 = (i__17387 + (1));
i__17387 = G__17393;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17388),iter__17385(cljs.core.chunk_rest(s__17386__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17388),null);
}
} else {
var col = cljs.core.first(s__17386__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$287,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$22,arimaa.gameroom.gameboard_square_class(col,row)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.piece_image_at_square,position,col,row], null)], null),iter__17385(cljs.core.rest(s__17386__$2)));
}
} else {
return null;
}
break;
}
});})(row,s__17362__$2,temp__4126__auto__))
,null,null));
});})(row,s__17362__$2,temp__4126__auto__))
;
return iter__4487__auto__(arimaa.utils.cols);
})()], null),iter__17361(cljs.core.rest(s__17362__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.game.show(move),cljs.core.constant$keyword$159.cljs$core$IFn$_invoke$arity$1(move)], null);
}),moves));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.utils.scroll_bottom_wrapper,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$288,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$289,(15),cljs.core.constant$keyword$254,((function (turns_lookup){
return (function (p1__17394_SHARP_){
var G__17403 = current_turn;
var G__17404 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(turns_lookup,p1__17394_SHARP_.target.value);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17403,G__17404) : cljs.core.reset_BANG_.call(null,G__17403,G__17404));
});})(turns_lookup))
], null),(function (){var iter__4487__auto__ = ((function (turns_lookup){
return (function iter__17405(s__17406){
return (new cljs.core.LazySeq(null,((function (turns_lookup){
return (function (){
var s__17406__$1 = s__17406;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__17406__$1);
if(temp__4126__auto__){
var s__17406__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17406__$2)){
var c__4485__auto__ = cljs.core.chunk_first(s__17406__$2);
var size__4486__auto__ = cljs.core.count(c__4485__auto__);
var b__17408 = cljs.core.chunk_buffer(size__4486__auto__);
if((function (){var i__17407 = (0);
while(true){
if((i__17407 < size__4486__auto__)){
var move = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4485__auto__,i__17407);
cljs.core.chunk_append(b__17408,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$290,arimaa.game.show(move)], null));

var G__17411 = (i__17407 + (1));
i__17407 = G__17411;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17408),iter__17405(cljs.core.chunk_rest(s__17406__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17408),null);
}
} else {
var move = cljs.core.first(s__17406__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$290,arimaa.game.show(move)], null),iter__17405(cljs.core.rest(s__17406__$2)));
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
return (((2) * cljs.core.constant$keyword$158.cljs$core$IFn$_invoke$arity$1(turn)) + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$142,cljs.core.constant$keyword$151.cljs$core$IFn$_invoke$arity$1(turn)))?(-1):(0)));
});
arimaa.gameroom.position_at_turn = (function position_at_turn(turn,moves){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__17413_SHARP_,p2__17412_SHARP_){
return arimaa.game.update_position(p2__17412_SHARP_,p1__17413_SHARP_);
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
,cljs.core.constant$keyword$291,((function (game_state,current_turn,game_state_chan){
return (function (){
return cljs.core.async.close_BANG_(game_state_chan);
});})(game_state,current_turn,game_state_chan))
], null));
return ((function (game_state,current_turn,game_state_chan,mounted_gameboard_view){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mounted_gameboard_view,arimaa.gameroom.position_at_turn((function (){var G__17417 = current_turn;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17417) : cljs.core.deref.call(null,G__17417));
})(),cljs.core.constant$keyword$237.cljs$core$IFn$_invoke$arity$1((function (){var G__17418 = game_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17418) : cljs.core.deref.call(null,G__17418));
})()))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.move_box,cljs.core.constant$keyword$237.cljs$core$IFn$_invoke$arity$1((function (){var G__17419 = game_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17419) : cljs.core.deref.call(null,G__17419));
})()),current_turn], null)], null);
});
;})(game_state,current_turn,game_state_chan,mounted_gameboard_view))
});
arimaa.gameroom.my_games_view = (function my_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$272,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$273,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$274,"My games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,arimaa.state.my_games((function (){var G__17421 = arimaa.state.username;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17421) : cljs.core.deref.call(null,G__17421));
})()))], null)], null);
});
arimaa.gameroom.open_games_view = (function open_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$272,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$273,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$274,"Open games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$292.cljs$core$IFn$_invoke$arity$1((function (){var G__17423 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17423) : cljs.core.deref.call(null,G__17423));
})()))], null)], null);
});
arimaa.gameroom.live_games_view = (function live_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$272,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$273,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$274,"Live games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,(function (){var iter__4487__auto__ = (function iter__17431(s__17432){
return (new cljs.core.LazySeq(null,(function (){
var s__17432__$1 = s__17432;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__17432__$1);
if(temp__4126__auto__){
var s__17432__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17432__$2)){
var c__4485__auto__ = cljs.core.chunk_first(s__17432__$2);
var size__4486__auto__ = cljs.core.count(c__4485__auto__);
var b__17434 = cljs.core.chunk_buffer(size__4486__auto__);
if((function (){var i__17433 = (0);
while(true){
if((i__17433 < size__4486__auto__)){
var live_game = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4485__auto__,i__17433);
cljs.core.chunk_append(b__17434,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.ingame_view,live_game], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$37,cljs.core.constant$keyword$50.cljs$core$IFn$_invoke$arity$1(live_game)], null)));

var G__17438 = (i__17433 + (1));
i__17433 = G__17438;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17434),iter__17431(cljs.core.chunk_rest(s__17432__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17434),null);
}
} else {
var live_game = cljs.core.first(s__17432__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.ingame_view,live_game], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$37,cljs.core.constant$keyword$50.cljs$core$IFn$_invoke$arity$1(live_game)], null)),iter__17431(cljs.core.rest(s__17432__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4487__auto__(arimaa.state.live_games((function (){var G__17437 = arimaa.state.username;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17437) : cljs.core.deref.call(null,G__17437));
})()));
})()], null)], null);
});
arimaa.gameroom.recent_games_view = (function recent_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$272,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$273,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$274,"Recent games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$293.cljs$core$IFn$_invoke$arity$1((function (){var G__17440 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17440) : cljs.core.deref.call(null,G__17440));
})()))], null)], null);
});
arimaa.gameroom.scheduled_games_view = (function scheduled_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$272,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$273,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$274,"Scheduled games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,arimaa.state.scheduled_games())], null)], null);
});
arimaa.gameroom.gameroom_view = (function gameroom_view(){
arimaa.utils.subscribe_atom_to_channel_BANG_(arimaa.state.gameroom_state,arimaa.gameroom.gameroom_state_channel());

return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$294,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.new_game_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.my_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.open_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.live_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.recent_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.scheduled_games_view], null)], null);
});
