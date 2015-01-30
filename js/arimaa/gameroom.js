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
var c__11733__auto___17111 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11733__auto___17111,c){
return (function (){
var f__11734__auto__ = (function (){var switch__11653__auto__ = ((function (c__11733__auto___17111,c){
return (function (state_17094){
var state_val_17095 = (state_17094[(1)]);
if((state_val_17095 === (9))){
var inst_17086 = (state_17094[(2)]);
var state_17094__$1 = (function (){var statearr_17096 = state_17094;
(statearr_17096[(7)] = inst_17086);

return statearr_17096;
})();
var statearr_17097_17112 = state_17094__$1;
(statearr_17097_17112[(2)] = null);

(statearr_17097_17112[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_17095 === (8))){
var inst_17090 = (state_17094[(2)]);
var state_17094__$1 = state_17094;
var statearr_17098_17113 = state_17094__$1;
(statearr_17098_17113[(2)] = inst_17090);

(statearr_17098_17113[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_17095 === (7))){
var state_17094__$1 = state_17094;
var statearr_17099_17114 = state_17094__$1;
(statearr_17099_17114[(2)] = null);

(statearr_17099_17114[(1)] = (8));


return cljs.core.constant$keyword$65;
} else {
if((state_val_17095 === (6))){
var inst_17084 = cljs.core.async.timeout((2000));
var state_17094__$1 = state_17094;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17094__$1,(9),inst_17084);
} else {
if((state_val_17095 === (5))){
var inst_17082 = (state_17094[(2)]);
var state_17094__$1 = state_17094;
if(cljs.core.truth_(inst_17082)){
var statearr_17100_17115 = state_17094__$1;
(statearr_17100_17115[(1)] = (6));

} else {
var statearr_17101_17116 = state_17094__$1;
(statearr_17101_17116[(1)] = (7));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_17095 === (4))){
var inst_17080 = (state_17094[(2)]);
var state_17094__$1 = state_17094;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17094__$1,(5),c,inst_17080);
} else {
if((state_val_17095 === (3))){
var inst_17092 = (state_17094[(2)]);
var state_17094__$1 = state_17094;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17094__$1,inst_17092);
} else {
if((state_val_17095 === (2))){
var inst_17077 = (function (){var G__17102 = arimaa.state.session_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17102) : cljs.core.deref.call(null,G__17102));
})();
var inst_17078 = arimaa.requests.gameroom_state(inst_17077);
var state_17094__$1 = state_17094;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17094__$1,(4),inst_17078);
} else {
if((state_val_17095 === (1))){
var state_17094__$1 = state_17094;
var statearr_17103_17117 = state_17094__$1;
(statearr_17103_17117[(2)] = null);

(statearr_17103_17117[(1)] = (2));


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
});})(c__11733__auto___17111,c))
;
return ((function (switch__11653__auto__,c__11733__auto___17111,c){
return (function() {
var state_machine__11654__auto__ = null;
var state_machine__11654__auto____0 = (function (){
var statearr_17107 = [null,null,null,null,null,null,null,null];
(statearr_17107[(0)] = state_machine__11654__auto__);

(statearr_17107[(1)] = (1));

return statearr_17107;
});
var state_machine__11654__auto____1 = (function (state_17094){
while(true){
var ret_value__11655__auto__ = (function (){try{while(true){
var result__11656__auto__ = switch__11653__auto__(state_17094);
if(cljs.core.keyword_identical_QMARK_(result__11656__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11656__auto__;
}
break;
}
}catch (e17108){if((e17108 instanceof Object)){
var ex__11657__auto__ = e17108;
var statearr_17109_17118 = state_17094;
(statearr_17109_17118[(5)] = ex__11657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17094);

return cljs.core.constant$keyword$65;
} else {
throw e17108;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11655__auto__,cljs.core.constant$keyword$65)){
var G__17119 = state_17094;
state_17094 = G__17119;
continue;
} else {
return ret_value__11655__auto__;
}
break;
}
});
state_machine__11654__auto__ = function(state_17094){
switch(arguments.length){
case 0:
return state_machine__11654__auto____0.call(this);
case 1:
return state_machine__11654__auto____1.call(this,state_17094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11654__auto____0;
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11654__auto____1;
return state_machine__11654__auto__;
})()
;})(switch__11653__auto__,c__11733__auto___17111,c))
})();
var state__11735__auto__ = (function (){var statearr_17110 = (function (){return (f__11734__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11734__auto__.cljs$core$IFn$_invoke$arity$0() : f__11734__auto__.call(null));
})();
(statearr_17110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11733__auto___17111);

return statearr_17110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11735__auto__);
});})(c__11733__auto___17111,c))
);


return c;
});
arimaa.gameroom.new_game_view = (function new_game_view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$272,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$273,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$274,"New game"], null)], null)], null);
});
arimaa.gameroom.game_view = (function game_view(game){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$220,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$221,[cljs.core.str("http://arimaa.com/arimaa/gameroom/playerpage.cgi?id="),cljs.core.str(cljs.core.constant$keyword$276.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$275,"_blank"], null),cljs.core.constant$keyword$245.cljs$core$IFn$_invoke$arity$1(game)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$251," vs "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$220,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$221,[cljs.core.str("http://arimaa.com/arimaa/gameroom/playerpage.cgi?id="),cljs.core.str(cljs.core.constant$keyword$277.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$275,"_blank"], null),cljs.core.constant$keyword$246.cljs$core$IFn$_invoke$arity$1(game)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$251,cljs.core.constant$keyword$278.cljs$core$IFn$_invoke$arity$1(game)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$220,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$221,[cljs.core.str("http://arimaa.com/arimaa/gameroom/opengamewin.cgi?gameid="),cljs.core.str(cljs.core.constant$keyword$144.cljs$core$IFn$_invoke$arity$1(game))].join(''),cljs.core.constant$keyword$275,"_blank"], null),"View game"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$251,cljs.core.constant$keyword$279.cljs$core$IFn$_invoke$arity$1(game)], null)], null)], null);
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
var c__11733__auto___17218 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11733__auto___17218,c){
return (function (){
var f__11734__auto__ = (function (){var switch__11653__auto__ = ((function (c__11733__auto___17218,c){
return (function (state_17197){
var state_val_17198 = (state_17197[(1)]);
if((state_val_17198 === (7))){
var inst_17187 = (state_17197[(2)]);
var state_17197__$1 = state_17197;
if(cljs.core.truth_(inst_17187)){
var statearr_17199_17219 = state_17197__$1;
(statearr_17199_17219[(1)] = (8));

} else {
var statearr_17200_17220 = state_17197__$1;
(statearr_17200_17220[(1)] = (9));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_17198 === (1))){
var inst_17169 = (function (){var G__17201 = arimaa.state.session_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17201) : cljs.core.deref.call(null,G__17201));
})();
var inst_17170 = arimaa.requests.reserve_seat(inst_17169,game_id,cljs.core.constant$keyword$280);
var state_17197__$1 = state_17197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17197__$1,(2),inst_17170);
} else {
if((state_val_17198 === (4))){
var inst_17178 = (state_17197[(7)]);
var inst_17172 = (state_17197[(8)]);
var inst_17179 = (state_17197[(9)]);
var inst_17181 = cljs.core.constant$keyword$281.cljs$core$IFn$_invoke$arity$1(inst_17172);
var inst_17182 = cljs.core.constant$keyword$226.cljs$core$IFn$_invoke$arity$1(inst_17178);
var inst_17183 = arimaa.requests.game_state(inst_17181,inst_17182,inst_17179);
var state_17197__$1 = state_17197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17197__$1,(6),inst_17183);
} else {
if((state_val_17198 === (6))){
var inst_17185 = (state_17197[(10)]);
var inst_17185__$1 = (state_17197[(2)]);
var state_17197__$1 = (function (){var statearr_17202 = state_17197;
(statearr_17202[(10)] = inst_17185__$1);

return statearr_17202;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17197__$1,(7),c,inst_17185__$1);
} else {
if((state_val_17198 === (3))){
var inst_17178 = (state_17197[(2)]);
var inst_17179 = (0);
var state_17197__$1 = (function (){var statearr_17203 = state_17197;
(statearr_17203[(7)] = inst_17178);

(statearr_17203[(9)] = inst_17179);

return statearr_17203;
})();
var statearr_17204_17221 = state_17197__$1;
(statearr_17204_17221[(2)] = null);

(statearr_17204_17221[(1)] = (4));


return cljs.core.constant$keyword$65;
} else {
if((state_val_17198 === (2))){
var inst_17172 = (state_17197[(8)]);
var inst_17172__$1 = (state_17197[(2)]);
var inst_17173 = cljs.core.constant$keyword$281.cljs$core$IFn$_invoke$arity$1(inst_17172__$1);
var inst_17174 = (function (){var G__17205 = arimaa.state.gameroom_id;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17205) : cljs.core.deref.call(null,G__17205));
})();
var inst_17175 = cljs.core.constant$keyword$230.cljs$core$IFn$_invoke$arity$1(inst_17172__$1);
var inst_17176 = arimaa.requests.sit(inst_17173,inst_17174,inst_17175);
var state_17197__$1 = (function (){var statearr_17206 = state_17197;
(statearr_17206[(8)] = inst_17172__$1);

return statearr_17206;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17197__$1,(3),inst_17176);
} else {
if((state_val_17198 === (9))){
var state_17197__$1 = state_17197;
var statearr_17207_17222 = state_17197__$1;
(statearr_17207_17222[(2)] = null);

(statearr_17207_17222[(1)] = (10));


return cljs.core.constant$keyword$65;
} else {
if((state_val_17198 === (5))){
var inst_17195 = (state_17197[(2)]);
var state_17197__$1 = state_17197;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17197__$1,inst_17195);
} else {
if((state_val_17198 === (10))){
var inst_17193 = (state_17197[(2)]);
var state_17197__$1 = state_17197;
var statearr_17208_17223 = state_17197__$1;
(statearr_17208_17223[(2)] = inst_17193);

(statearr_17208_17223[(1)] = (5));


return cljs.core.constant$keyword$65;
} else {
if((state_val_17198 === (8))){
var inst_17185 = (state_17197[(10)]);
var inst_17189 = cljs.core.constant$keyword$234.cljs$core$IFn$_invoke$arity$1(inst_17185);
var inst_17179 = inst_17189;
var state_17197__$1 = (function (){var statearr_17209 = state_17197;
(statearr_17209[(9)] = inst_17179);

return statearr_17209;
})();
var statearr_17210_17224 = state_17197__$1;
(statearr_17210_17224[(2)] = null);

(statearr_17210_17224[(1)] = (4));


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
});})(c__11733__auto___17218,c))
;
return ((function (switch__11653__auto__,c__11733__auto___17218,c){
return (function() {
var state_machine__11654__auto__ = null;
var state_machine__11654__auto____0 = (function (){
var statearr_17214 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17214[(0)] = state_machine__11654__auto__);

(statearr_17214[(1)] = (1));

return statearr_17214;
});
var state_machine__11654__auto____1 = (function (state_17197){
while(true){
var ret_value__11655__auto__ = (function (){try{while(true){
var result__11656__auto__ = switch__11653__auto__(state_17197);
if(cljs.core.keyword_identical_QMARK_(result__11656__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11656__auto__;
}
break;
}
}catch (e17215){if((e17215 instanceof Object)){
var ex__11657__auto__ = e17215;
var statearr_17216_17225 = state_17197;
(statearr_17216_17225[(5)] = ex__11657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17197);

return cljs.core.constant$keyword$65;
} else {
throw e17215;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11655__auto__,cljs.core.constant$keyword$65)){
var G__17226 = state_17197;
state_17197 = G__17226;
continue;
} else {
return ret_value__11655__auto__;
}
break;
}
});
state_machine__11654__auto__ = function(state_17197){
switch(arguments.length){
case 0:
return state_machine__11654__auto____0.call(this);
case 1:
return state_machine__11654__auto____1.call(this,state_17197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11654__auto____0;
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11654__auto____1;
return state_machine__11654__auto__;
})()
;})(switch__11653__auto__,c__11733__auto___17218,c))
})();
var state__11735__auto__ = (function (){var statearr_17217 = (function (){return (f__11734__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11734__auto__.cljs$core$IFn$_invoke$arity$0() : f__11734__auto__.call(null));
})();
(statearr_17217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11733__auto___17218);

return statearr_17217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11735__auto__);
});})(c__11733__auto___17218,c))
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
var animal_char = (function (){var G__17228 = (((cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(piece) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(piece).fqn:null);
switch (G__17228) {
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$282,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$283,arimaa.gameroom.piece_to_image(piece)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$282,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$283,"http://arimaa.com/arimaa/jsClient/pro/images/sp.gif"], null)], null);
}
});
arimaa.gameroom.gameboard_view = (function gameboard_view(position){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$284,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$285,(function (){var iter__4506__auto__ = (function iter__17260(s__17261){
return (new cljs.core.LazySeq(null,(function (){
var s__17261__$1 = s__17261;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__17261__$1);
if(temp__4126__auto__){
var s__17261__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17261__$2)){
var c__4504__auto__ = cljs.core.chunk_first(s__17261__$2);
var size__4505__auto__ = cljs.core.count(c__4504__auto__);
var b__17263 = cljs.core.chunk_buffer(size__4505__auto__);
if((function (){var i__17262 = (0);
while(true){
if((i__17262 < size__4505__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4504__auto__,i__17262);
cljs.core.chunk_append(b__17263,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$286,(function (){var iter__4506__auto__ = ((function (i__17262,row,c__4504__auto__,size__4505__auto__,b__17263,s__17261__$2,temp__4126__auto__){
return (function iter__17278(s__17279){
return (new cljs.core.LazySeq(null,((function (i__17262,row,c__4504__auto__,size__4505__auto__,b__17263,s__17261__$2,temp__4126__auto__){
return (function (){
var s__17279__$1 = s__17279;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__17279__$1);
if(temp__4126__auto____$1){
var s__17279__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17279__$2)){
var c__4504__auto____$1 = cljs.core.chunk_first(s__17279__$2);
var size__4505__auto____$1 = cljs.core.count(c__4504__auto____$1);
var b__17281 = cljs.core.chunk_buffer(size__4505__auto____$1);
if((function (){var i__17280 = (0);
while(true){
if((i__17280 < size__4505__auto____$1)){
var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4504__auto____$1,i__17280);
cljs.core.chunk_append(b__17281,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$287,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,arimaa.gameroom.gameboard_square_class(col,row)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.piece_image_at_square,position,col,row], null)], null));

var G__17290 = (i__17280 + (1));
i__17280 = G__17290;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17281),iter__17278(cljs.core.chunk_rest(s__17279__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17281),null);
}
} else {
var col = cljs.core.first(s__17279__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$287,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,arimaa.gameroom.gameboard_square_class(col,row)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.piece_image_at_square,position,col,row], null)], null),iter__17278(cljs.core.rest(s__17279__$2)));
}
} else {
return null;
}
break;
}
});})(i__17262,row,c__4504__auto__,size__4505__auto__,b__17263,s__17261__$2,temp__4126__auto__))
,null,null));
});})(i__17262,row,c__4504__auto__,size__4505__auto__,b__17263,s__17261__$2,temp__4126__auto__))
;
return iter__4506__auto__(arimaa.utils.cols);
})()], null));

var G__17291 = (i__17262 + (1));
i__17262 = G__17291;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17263),iter__17260(cljs.core.chunk_rest(s__17261__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17263),null);
}
} else {
var row = cljs.core.first(s__17261__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$286,(function (){var iter__4506__auto__ = ((function (row,s__17261__$2,temp__4126__auto__){
return (function iter__17284(s__17285){
return (new cljs.core.LazySeq(null,((function (row,s__17261__$2,temp__4126__auto__){
return (function (){
var s__17285__$1 = s__17285;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__17285__$1);
if(temp__4126__auto____$1){
var s__17285__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17285__$2)){
var c__4504__auto__ = cljs.core.chunk_first(s__17285__$2);
var size__4505__auto__ = cljs.core.count(c__4504__auto__);
var b__17287 = cljs.core.chunk_buffer(size__4505__auto__);
if((function (){var i__17286 = (0);
while(true){
if((i__17286 < size__4505__auto__)){
var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4504__auto__,i__17286);
cljs.core.chunk_append(b__17287,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$287,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,arimaa.gameroom.gameboard_square_class(col,row)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.piece_image_at_square,position,col,row], null)], null));

var G__17292 = (i__17286 + (1));
i__17286 = G__17292;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17287),iter__17284(cljs.core.chunk_rest(s__17285__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17287),null);
}
} else {
var col = cljs.core.first(s__17285__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$287,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,arimaa.gameroom.gameboard_square_class(col,row)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.piece_image_at_square,position,col,row], null)], null),iter__17284(cljs.core.rest(s__17285__$2)));
}
} else {
return null;
}
break;
}
});})(row,s__17261__$2,temp__4126__auto__))
,null,null));
});})(row,s__17261__$2,temp__4126__auto__))
;
return iter__4506__auto__(arimaa.utils.cols);
})()], null),iter__17260(cljs.core.rest(s__17261__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.game.show(move),cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(move)], null);
}),moves));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.utils.scroll_bottom_wrapper,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$288,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$289,(15),cljs.core.constant$keyword$266,((function (turns_lookup){
return (function (p1__17293_SHARP_){
var G__17302 = current_turn;
var G__17303 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(turns_lookup,p1__17293_SHARP_.target.value);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17302,G__17303) : cljs.core.reset_BANG_.call(null,G__17302,G__17303));
});})(turns_lookup))
], null),(function (){var iter__4506__auto__ = ((function (turns_lookup){
return (function iter__17304(s__17305){
return (new cljs.core.LazySeq(null,((function (turns_lookup){
return (function (){
var s__17305__$1 = s__17305;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__17305__$1);
if(temp__4126__auto__){
var s__17305__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17305__$2)){
var c__4504__auto__ = cljs.core.chunk_first(s__17305__$2);
var size__4505__auto__ = cljs.core.count(c__4504__auto__);
var b__17307 = cljs.core.chunk_buffer(size__4505__auto__);
if((function (){var i__17306 = (0);
while(true){
if((i__17306 < size__4505__auto__)){
var move = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4504__auto__,i__17306);
cljs.core.chunk_append(b__17307,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$290,arimaa.game.show(move)], null));

var G__17310 = (i__17306 + (1));
i__17306 = G__17310;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17307),iter__17304(cljs.core.chunk_rest(s__17305__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17307),null);
}
} else {
var move = cljs.core.first(s__17305__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$290,arimaa.game.show(move)], null),iter__17304(cljs.core.rest(s__17305__$2)));
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
return (((2) * cljs.core.constant$keyword$44.cljs$core$IFn$_invoke$arity$1(turn)) + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$28,cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(turn)))?(-1):(0)));
});
arimaa.gameroom.position_at_turn = (function position_at_turn(turn,moves){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__17312_SHARP_,p2__17311_SHARP_){
return arimaa.game.update_position(p2__17311_SHARP_,p1__17312_SHARP_);
}),cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$46,cljs.core.array_seq([(cljs.core.truth_(turn)?cljs.core.take.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.turn_to_moves_count(turn),moves):moves)], 0)));
});
arimaa.gameroom.ingame_view = (function ingame_view(game){
var game_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var current_turn = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var game_state_chan = arimaa.gameroom.game_state_channel(cljs.core.constant$keyword$144.cljs$core$IFn$_invoke$arity$1(game));
var mounted_gameboard_view = cljs.core.with_meta(arimaa.gameroom.gameboard_view,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$217,((function (game_state,current_turn,game_state_chan){
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mounted_gameboard_view,arimaa.gameroom.position_at_turn((function (){var G__17316 = current_turn;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17316) : cljs.core.deref.call(null,G__17316));
})(),cljs.core.constant$keyword$231.cljs$core$IFn$_invoke$arity$1((function (){var G__17317 = game_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17317) : cljs.core.deref.call(null,G__17317));
})()))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.move_box,cljs.core.constant$keyword$231.cljs$core$IFn$_invoke$arity$1((function (){var G__17318 = game_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17318) : cljs.core.deref.call(null,G__17318));
})()),current_turn], null)], null);
});
;})(game_state,current_turn,game_state_chan,mounted_gameboard_view))
});
arimaa.gameroom.my_games_view = (function my_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$272,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$273,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$274,"My games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$249,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,arimaa.state.my_games((function (){var G__17320 = arimaa.state.username;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17320) : cljs.core.deref.call(null,G__17320));
})()))], null)], null);
});
arimaa.gameroom.open_games_view = (function open_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$272,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$273,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$274,"Open games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$249,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$292.cljs$core$IFn$_invoke$arity$1((function (){var G__17322 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17322) : cljs.core.deref.call(null,G__17322));
})()))], null)], null);
});
arimaa.gameroom.live_games_view = (function live_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$272,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$273,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$274,"Live games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$249,(function (){var iter__4506__auto__ = (function iter__17330(s__17331){
return (new cljs.core.LazySeq(null,(function (){
var s__17331__$1 = s__17331;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__17331__$1);
if(temp__4126__auto__){
var s__17331__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17331__$2)){
var c__4504__auto__ = cljs.core.chunk_first(s__17331__$2);
var size__4505__auto__ = cljs.core.count(c__4504__auto__);
var b__17333 = cljs.core.chunk_buffer(size__4505__auto__);
if((function (){var i__17332 = (0);
while(true){
if((i__17332 < size__4505__auto__)){
var live_game = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4504__auto__,i__17332);
cljs.core.chunk_append(b__17333,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.ingame_view,live_game], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$131,cljs.core.constant$keyword$144.cljs$core$IFn$_invoke$arity$1(live_game)], null)));

var G__17337 = (i__17332 + (1));
i__17332 = G__17337;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17333),iter__17330(cljs.core.chunk_rest(s__17331__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17333),null);
}
} else {
var live_game = cljs.core.first(s__17331__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.ingame_view,live_game], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$131,cljs.core.constant$keyword$144.cljs$core$IFn$_invoke$arity$1(live_game)], null)),iter__17330(cljs.core.rest(s__17331__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4506__auto__(arimaa.state.live_games((function (){var G__17336 = arimaa.state.username;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17336) : cljs.core.deref.call(null,G__17336));
})()));
})()], null)], null);
});
arimaa.gameroom.recent_games_view = (function recent_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$272,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$273,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$274,"Recent games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$249,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,cljs.core.constant$keyword$293.cljs$core$IFn$_invoke$arity$1((function (){var G__17339 = arimaa.state.gameroom_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17339) : cljs.core.deref.call(null,G__17339));
})()))], null)], null);
});
arimaa.gameroom.scheduled_games_view = (function scheduled_games_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$272,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$273,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$274,"Scheduled games"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$249,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.gameroom.game_view,arimaa.state.scheduled_games())], null)], null);
});
arimaa.gameroom.gameroom_view = (function gameroom_view(){
arimaa.utils.subscribe_atom_to_channel_BANG_(arimaa.state.gameroom_state,arimaa.gameroom.gameroom_state_channel());

return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$294,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.new_game_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.my_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.open_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.live_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.recent_games_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.scheduled_games_view], null)], null);
});
