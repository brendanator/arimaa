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
var c__5853__auto___16173 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___16173,c){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___16173,c){
return (function (state_16156){
var state_val_16157 = (state_16156[(1)]);
if((state_val_16157 === (9))){
var inst_16148 = (state_16156[(2)]);
var state_16156__$1 = (function (){var statearr_16158 = state_16156;
(statearr_16158[(7)] = inst_16148);

return statearr_16158;
})();
var statearr_16159_16174 = state_16156__$1;
(statearr_16159_16174[(2)] = null);

(statearr_16159_16174[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16157 === (8))){
var inst_16152 = (state_16156[(2)]);
var state_16156__$1 = state_16156;
var statearr_16160_16175 = state_16156__$1;
(statearr_16160_16175[(2)] = inst_16152);

(statearr_16160_16175[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16157 === (7))){
var state_16156__$1 = state_16156;
var statearr_16161_16176 = state_16156__$1;
(statearr_16161_16176[(2)] = null);

(statearr_16161_16176[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16157 === (6))){
var inst_16146 = cljs.core.async.timeout((2000));
var state_16156__$1 = state_16156;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16156__$1,(9),inst_16146);
} else {
if((state_val_16157 === (5))){
var inst_16144 = (state_16156[(2)]);
var state_16156__$1 = state_16156;
if(cljs.core.truth_(inst_16144)){
var statearr_16162_16177 = state_16156__$1;
(statearr_16162_16177[(1)] = (6));

} else {
var statearr_16163_16178 = state_16156__$1;
(statearr_16163_16178[(1)] = (7));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_16157 === (4))){
var inst_16142 = (state_16156[(2)]);
var state_16156__$1 = state_16156;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16156__$1,(5),c,inst_16142);
} else {
if((state_val_16157 === (3))){
var inst_16154 = (state_16156[(2)]);
var state_16156__$1 = state_16156;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16156__$1,inst_16154);
} else {
if((state_val_16157 === (2))){
var inst_16139 = (function (){var G__16164 = arimaa.state.session_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16164) : cljs.core.deref.call(null,G__16164));
})();
var inst_16140 = arimaa.requests.gameroom_state(inst_16139);
var state_16156__$1 = state_16156;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16156__$1,(4),inst_16140);
} else {
if((state_val_16157 === (1))){
var state_16156__$1 = state_16156;
var statearr_16165_16179 = state_16156__$1;
(statearr_16165_16179[(2)] = null);

(statearr_16165_16179[(1)] = (2));


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
});})(c__5853__auto___16173,c))
;
return ((function (switch__5838__auto__,c__5853__auto___16173,c){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_16169 = [null,null,null,null,null,null,null,null];
(statearr_16169[(0)] = state_machine__5839__auto__);

(statearr_16169[(1)] = (1));

return statearr_16169;
});
var state_machine__5839__auto____1 = (function (state_16156){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_16156);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e16170){if((e16170 instanceof Object)){
var ex__5842__auto__ = e16170;
var statearr_16171_16180 = state_16156;
(statearr_16171_16180[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16156);

return cljs.core.constant$keyword$41;
} else {
throw e16170;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__16181 = state_16156;
state_16156 = G__16181;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_16156){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_16156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___16173,c))
})();
var state__5855__auto__ = (function (){var statearr_16172 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_16172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___16173);

return statearr_16172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___16173,c))
);


return c;
});
arimaa.gameroom.new_game_view = (function new_game_view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$252,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$253,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$254,"New game"], null)], null)], null);
});
arimaa.gameroom.game_view = (function game_view(game){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$255,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$256,[cljs.core.str("http://arimaa.com/arimaa/gameroom/playerpage.cgi?id="),cljs.core.str(cljs.core.constant$keyword$258.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$257,"_blank"], null),cljs.core.constant$keyword$259.cljs$core$IFn$_invoke$arity$1(game)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$260," vs "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$255,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$256,[cljs.core.str("http://arimaa.com/arimaa/gameroom/playerpage.cgi?id="),cljs.core.str(cljs.core.constant$keyword$261.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$257,"_blank"], null),cljs.core.constant$keyword$262.cljs$core$IFn$_invoke$arity$1(game)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$260,cljs.core.constant$keyword$263.cljs$core$IFn$_invoke$arity$1(game)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$255,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$256,[cljs.core.str("http://arimaa.com/arimaa/gameroom/opengamewin.cgi?gameid="),cljs.core.str(cljs.core.constant$keyword$148.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$257,"_blank"], null),"View game"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$260,cljs.core.constant$keyword$264.cljs$core$IFn$_invoke$arity$1(game)], null)], null)], null);
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
var c__5853__auto___16280 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___16280,c){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___16280,c){
return (function (state_16259){
var state_val_16260 = (state_16259[(1)]);
if((state_val_16260 === (7))){
var inst_16249 = (state_16259[(2)]);
var state_16259__$1 = state_16259;
if(cljs.core.truth_(inst_16249)){
var statearr_16261_16281 = state_16259__$1;
(statearr_16261_16281[(1)] = (8));

} else {
var statearr_16262_16282 = state_16259__$1;
(statearr_16262_16282[(1)] = (9));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_16260 === (1))){
var inst_16231 = (function (){var G__16263 = arimaa.state.session_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16263) : cljs.core.deref.call(null,G__16263));
})();
var inst_16232 = arimaa.requests.reserve_seat(inst_16231,game_id,cljs.core.constant$keyword$265);
var state_16259__$1 = state_16259;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16259__$1,(2),inst_16232);
} else {
if((state_val_16260 === (4))){
var inst_16234 = (state_16259[(7)]);
var inst_16240 = (state_16259[(8)]);
var inst_16241 = (state_16259[(9)]);
var inst_16243 = cljs.core.constant$keyword$266.cljs$core$IFn$_invoke$arity$1(inst_16234);
var inst_16244 = cljs.core.constant$keyword$225.cljs$core$IFn$_invoke$arity$1(inst_16240);
var inst_16245 = arimaa.requests.game_state(inst_16243,inst_16244,inst_16241);
var state_16259__$1 = state_16259;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16259__$1,(6),inst_16245);
} else {
if((state_val_16260 === (6))){
var inst_16247 = (state_16259[(10)]);
var inst_16247__$1 = (state_16259[(2)]);
var state_16259__$1 = (function (){var statearr_16264 = state_16259;
(statearr_16264[(10)] = inst_16247__$1);

return statearr_16264;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16259__$1,(7),c,inst_16247__$1);
} else {
if((state_val_16260 === (3))){
var inst_16240 = (state_16259[(2)]);
var inst_16241 = (0);
var state_16259__$1 = (function (){var statearr_16265 = state_16259;
(statearr_16265[(8)] = inst_16240);

(statearr_16265[(9)] = inst_16241);

return statearr_16265;
})();
var statearr_16266_16283 = state_16259__$1;
(statearr_16266_16283[(2)] = null);

(statearr_16266_16283[(1)] = (4));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16260 === (2))){
var inst_16234 = (state_16259[(7)]);
var inst_16234__$1 = (state_16259[(2)]);
var inst_16235 = cljs.core.constant$keyword$266.cljs$core$IFn$_invoke$arity$1(inst_16234__$1);
var inst_16236 = (function (){var G__16267 = arimaa.state.gameroom_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16267) : cljs.core.deref.call(null,G__16267));
})();
var inst_16237 = cljs.core.constant$keyword$229.cljs$core$IFn$_invoke$arity$1(inst_16234__$1);
var inst_16238 = arimaa.requests.sit(inst_16235,inst_16236,inst_16237);
var state_16259__$1 = (function (){var statearr_16268 = state_16259;
(statearr_16268[(7)] = inst_16234__$1);

return statearr_16268;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16259__$1,(3),inst_16238);
} else {
if((state_val_16260 === (9))){
var state_16259__$1 = state_16259;
var statearr_16269_16284 = state_16259__$1;
(statearr_16269_16284[(2)] = null);

(statearr_16269_16284[(1)] = (10));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16260 === (5))){
var inst_16257 = (state_16259[(2)]);
var state_16259__$1 = state_16259;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16259__$1,inst_16257);
} else {
if((state_val_16260 === (10))){
var inst_16255 = (state_16259[(2)]);
var state_16259__$1 = state_16259;
var statearr_16270_16285 = state_16259__$1;
(statearr_16270_16285[(2)] = inst_16255);

(statearr_16270_16285[(1)] = (5));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16260 === (8))){
var inst_16247 = (state_16259[(10)]);
var inst_16251 = cljs.core.constant$keyword$233.cljs$core$IFn$_invoke$arity$1(inst_16247);
var inst_16241 = inst_16251;
var state_16259__$1 = (function (){var statearr_16271 = state_16259;
(statearr_16271[(9)] = inst_16241);

return statearr_16271;
})();
var statearr_16272_16286 = state_16259__$1;
(statearr_16272_16286[(2)] = null);

(statearr_16272_16286[(1)] = (4));


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
});})(c__5853__auto___16280,c))
;
return ((function (switch__5838__auto__,c__5853__auto___16280,c){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_16276 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16276[(0)] = state_machine__5839__auto__);

(statearr_16276[(1)] = (1));

return statearr_16276;
});
var state_machine__5839__auto____1 = (function (state_16259){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_16259);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e16277){if((e16277 instanceof Object)){
var ex__5842__auto__ = e16277;
var statearr_16278_16287 = state_16259;
(statearr_16278_16287[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16259);

return cljs.core.constant$keyword$41;
} else {
throw e16277;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__16288 = state_16259;
state_16259 = G__16288;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_16259){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_16259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___16280,c))
})();
var state__5855__auto__ = (function (){var statearr_16279 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_16279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___16280);

return statearr_16279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___16280,c))
);


return c;
});
arimaa.gameroom.piece_at_square = (function piece_at_square(position,col,row){
return cljs.core.constant$keyword$60.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (piece){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((new arimaa.game.Square(col,row,null,null,null)),cljs.core.constant$keyword$61.cljs$core$IFn$_invoke$arity$1(piece));
}),position)));
});
arimaa.gameroom.piece_to_image = (function piece_to_image(piece){
var colour_char = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$50,cljs.core.constant$keyword$59.cljs$core$IFn$_invoke$arity$1(piece)))?"w":"b");
var animal_char = (function (){var G__16290 = (((cljs.core.constant$keyword$58.cljs$core$IFn$_invoke$arity$1(piece) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$58.cljs$core$IFn$_invoke$arity$1(piece).fqn:null);
switch (G__16290) {
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
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.constant$keyword$58.cljs$core$IFn$_invoke$arity$1(piece))].join('')));

}
})();
return [cljs.core.str("http://arimaa.com/arimaa/jsClient/pro/images/"),cljs.core.str(colour_char),cljs.core.str(animal_char),cljs.core.str(".gif")].join('');
});
arimaa.gameroom.piece_image_at_square = (function piece_image_at_square(position,col,row){
var piece = arimaa.gameroom.piece_at_square(position,col,row);
if(cljs.core.truth_(piece)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$267,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$268,arimaa.gameroom.piece_to_image(piece)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$267,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$268,"http://arimaa.com/arimaa/jsClient/pro/images/sp.gif"], null)], null);
}
});
arimaa.gameroom.gameboard_view = (function gameboard_view(position){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$269,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$270,(function (){var iter__4386__auto__ = (function iter__16322(s__16323){
return (new cljs.core.LazySeq(null,(function (){
var s__16323__$1 = s__16323;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__16323__$1);
if(temp__4126__auto__){
var s__16323__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16323__$2)){
var c__4384__auto__ = cljs.core.chunk_first(s__16323__$2);
var size__4385__auto__ = cljs.core.count(c__4384__auto__);
var b__16325 = cljs.core.chunk_buffer(size__4385__auto__);
if((function (){var i__16324 = (0);
while(true){
if((i__16324 < size__4385__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4384__auto__,i__16324);
cljs.core.chunk_append(b__16325,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$271,(function (){var iter__4386__auto__ = ((function (i__16324,row,c__4384__auto__,size__4385__auto__,b__16325,s__16323__$2,temp__4126__auto__){
return (function iter__16340(s__16341){
return (new cljs.core.LazySeq(null,((function (i__16324,row,c__4384__auto__,size__4385__auto__,b__16325,s__16323__$2,temp__4126__auto__){
return (function (){
var s__16341__$1 = s__16341;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__16341__$1);
if(temp__4126__auto____$1){
var s__16341__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16341__$2)){
var c__4384__auto____$1 = cljs.core.chunk_first(s__16341__$2);
var size__4385__auto____$1 = cljs.core.count(c__4384__auto____$1);
var b__16343 = cljs.core.chunk_buffer(size__4385__auto____$1);
if((function (){var i__16342 = (0);
while(true){
if((i__16342 < size__4385__auto____$1)){
var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4384__auto____$1,i__16342);
cljs.core.chunk_append(b__16343,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$272,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$22,arimaa.gameroom.gameboard_square_class(col,row)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.piece_image_at_square,position,col,row], null)], null));

var G__16352 = (i__16342 + (1));
i__16342 = G__16352;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16343),iter__16340(cljs.core.chunk_rest(s__16341__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16343),null);
}
} else {
var col = cljs.core.first(s__16341__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$272,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$22,arimaa.gameroom.gameboard_square_class(col,row)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.piece_image_at_square,position,col,row], null)], null),iter__16340(cljs.core.rest(s__16341__$2)));
}
} else {
return null;
}
break;
}
});})(i__16324,row,c__4384__auto__,size__4385__auto__,b__16325,s__16323__$2,temp__4126__auto__))
,null,null));
});})(i__16324,row,c__4384__auto__,size__4385__auto__,b__16325,s__16323__$2,temp__4126__auto__))
;
return iter__4386__auto__(arimaa.utils.cols);
})()], null));

var G__16353 = (i__16324 + (1));
i__16324 = G__16353;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16325),iter__16322(cljs.core.chunk_rest(s__16323__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16325),null);
}
} else {
var row = cljs.core.first(s__16323__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$271,(function (){var iter__4386__auto__ = ((function (row,s__16323__$2,temp__4126__auto__){
return (function iter__16346(s__16347){
return (new cljs.core.LazySeq(null,((function (row,s__16323__$2,temp__4126__auto__){
return (function (){
var s__16347__$1 = s__16347;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__16347__$1);
if(temp__4126__auto____$1){
var s__16347__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16347__$2)){
var c__4384__auto__ = cljs.core.chunk_first(s__16347__$2);
var size__4385__auto__ = cljs.core.count(c__4384__auto__);
var b__16349 = cljs.core.chunk_buffer(size__4385__auto__);
if((function (){var i__16348 = (0);
while(true){
if((i__16348 < size__4385__auto__)){
var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4384__auto__,i__16348);
cljs.core.chunk_append(b__16349,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$272,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$22,arimaa.gameroom.gameboard_square_class(col,row)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.piece_image_at_square,position,col,row], null)], null));

var G__16354 = (i__16348 + (1));
i__16348 = G__16354;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16349),iter__16346(cljs.core.chunk_rest(s__16347__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16349),null);
}
} else {
var col = cljs.core.first(s__16347__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$272,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$22,arimaa.gameroom.gameboard_square_class(col,row)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.piece_image_at_square,position,col,row], null)], null),iter__16346(cljs.core.rest(s__16347__$2)));
}
} else {
return null;
}
break;
}
});})(row,s__16323__$2,temp__4126__auto__))
,null,null));
});})(row,s__16323__$2,temp__4126__auto__))
;
return iter__4386__auto__(arimaa.utils.cols);
})()], null),iter__16322(cljs.core.rest(s__16323__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.game.show(move),cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(move)], null);
}),moves));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.utils.scroll_bottom_wrapper,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$273,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$274,(15),cljs.core.constant$keyword$247,((function (turns_lookup){
return (function (p1__16355_SHARP_){
var G__16364 = current_turn;
var G__16365 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(turns_lookup,p1__16355_SHARP_.target.value);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16364,G__16365) : cljs.core.reset_BANG_.call(null,G__16364,G__16365));
});})(turns_lookup))
], null),(function (){var iter__4386__auto__ = ((function (turns_lookup){
return (function iter__16366(s__16367){
return (new cljs.core.LazySeq(null,((function (turns_lookup){
return (function (){
var s__16367__$1 = s__16367;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__16367__$1);
if(temp__4126__auto__){
var s__16367__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16367__$2)){
var c__4384__auto__ = cljs.core.chunk_first(s__16367__$2);
var size__4385__auto__ = cljs.core.count(c__4384__auto__);
var b__16369 = cljs.core.chunk_buffer(size__4385__auto__);
if((function (){var i__16368 = (0);
while(true){
if((i__16368 < size__4385__auto__)){
var move = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4384__auto__,i__16368);
cljs.core.chunk_append(b__16369,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$275,arimaa.game.show(move)], null));

var G__16372 = (i__16368 + (1));
i__16368 = G__16372;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16369),iter__16366(cljs.core.chunk_rest(s__16367__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16369),null);
}
} else {
var move = cljs.core.first(s__16367__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$275,arimaa.game.show(move)], null),iter__16366(cljs.core.rest(s__16367__$2)));
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
return (((2) * cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(turn)) + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$50,cljs.core.constant$keyword$59.cljs$core$IFn$_invoke$arity$1(turn)))?(-1):(0)));
});
arimaa.gameroom.position_at_turn = (function position_at_turn(turn,moves){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__16374_SHARP_,p2__16373_SHARP_){
return arimaa.game.update_position(p2__16373_SHARP_,p1__16374_SHARP_);
}),cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$68,cljs.core.array_seq([(cljs.core.truth_(turn)?cljs.core.take.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.turn_to_moves_count(turn),moves):moves)], 0)));
});
arimaa.gameroom.ingame_view = (function ingame_view(game){
var game_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var current_turn = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var game_state_chan = arimaa.gameroom.game_state_channel(cljs.core.constant$keyword$148.cljs$core$IFn$_invoke$arity$1(game));
var mounted_gameboard_view = cljs.core.with_meta(arimaa.gameroom.gameboard_view,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$38,((function (game_state,current_turn,game_state_chan){
return (function (){
return arimaa.utils.subscribe_atom_to_channel_BANG_(game_state,game_state_chan);
});})(game_state,current_turn,game_state_chan))
,cljs.core.constant$keyword$276,((function (game_state,current_turn,game_state_chan){
return (function (){
return cljs.core.async.close_BANG_(game_state_chan);
});})(game_state,current_turn,game_state_chan))
], null));
return ((function (game_state,current_turn,game_state_chan,mounted_gameboard_view){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mounted_gameboard_view,arimaa.gameroom.position_at_turn((function (){var G__16378 = current_turn;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16378) : cljs.core.deref.call(null,G__16378));
})(),cljs.core.constant$keyword$230.cljs$core$IFn$_invoke$arity$1((function (){var G__16379 = game_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16379) : cljs.core.deref.call(null,G__16379));
})()))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.move_box,cljs.core.constant$keyword$230.cljs$core$IFn$_invoke$arity$1((function (){var G__16380 = game_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16380) : cljs.core.deref.call(null,G__16380));
})()),current_turn], null)], null);
});
;})(game_state,current_turn,game_state_chan,mounted_gameboard_view))
});
arimaa.gameroom.my_games_view = (function my_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$252,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$253,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$254,"My games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$277.cljs$core$IFn$_invoke$arity$1((function (){var G__16382 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16382) : cljs.core.deref.call(null,G__16382));
})()))], null)], null);
});
arimaa.gameroom.open_games_view = (function open_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$252,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$253,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$254,"Open games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$278.cljs$core$IFn$_invoke$arity$1((function (){var G__16384 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16384) : cljs.core.deref.call(null,G__16384));
})()))], null)], null);
});
arimaa.gameroom.live_games_view = (function live_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$252,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$253,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$254,"Live games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,(function (){var iter__4386__auto__ = (function iter__16392(s__16393){
return (new cljs.core.LazySeq(null,(function (){
var s__16393__$1 = s__16393;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__16393__$1);
if(temp__4126__auto__){
var s__16393__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16393__$2)){
var c__4384__auto__ = cljs.core.chunk_first(s__16393__$2);
var size__4385__auto__ = cljs.core.count(c__4384__auto__);
var b__16395 = cljs.core.chunk_buffer(size__4385__auto__);
if((function (){var i__16394 = (0);
while(true){
if((i__16394 < size__4385__auto__)){
var live_game = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4384__auto__,i__16394);
cljs.core.chunk_append(b__16395,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.ingame_view,live_game], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$37,cljs.core.constant$keyword$148.cljs$core$IFn$_invoke$arity$1(live_game)], null)));

var G__16399 = (i__16394 + (1));
i__16394 = G__16399;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16395),iter__16392(cljs.core.chunk_rest(s__16393__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16395),null);
}
} else {
var live_game = cljs.core.first(s__16393__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.ingame_view,live_game], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$37,cljs.core.constant$keyword$148.cljs$core$IFn$_invoke$arity$1(live_game)], null)),iter__16392(cljs.core.rest(s__16393__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4386__auto__(cljs.core.constant$keyword$279.cljs$core$IFn$_invoke$arity$1((function (){var G__16398 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16398) : cljs.core.deref.call(null,G__16398));
})()));
})()], null)], null);
});
arimaa.gameroom.recent_games_view = (function recent_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$252,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$253,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$254,"Recent games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$280.cljs$core$IFn$_invoke$arity$1((function (){var G__16401 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16401) : cljs.core.deref.call(null,G__16401));
})()))], null)], null);
});
arimaa.gameroom.gameroom_view = (function gameroom_view(){
arimaa.utils.subscribe_atom_to_channel_BANG_(arimaa.state.gameroom_state,arimaa.gameroom.gameroom_state_channel());

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$281,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.new_game_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.my_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.open_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.live_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.recent_games_view], null)], null);
});
