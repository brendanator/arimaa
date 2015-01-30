// Compiled by ClojureScript 0.0-2727 {}
goog.provide('arimaa.requests');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
goog.require('arimaa.utils');
goog.require('arimaa.game');
arimaa.requests.protocol1_url = "http://arimaa.com/arimaa/gameroom/client1gr.cgi";
arimaa.requests.protocol2_url = "http://arimaa.com/arimaa/gameroom/client2gr.cgi";
arimaa.requests.chat_url = "http://arimaa.com/arimaa/chat/srv.php";
arimaa.requests.decode_value = (function decode_value(value){
return clojure.string.replace(clojure.string.replace(value,"%13","\n"),"%25","%");
});
arimaa.requests.parse_protocol1 = (function parse_protocol1(response){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16169_SHARP_){
var vec__16171 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(p1__16169_SHARP_,/=/,(2));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16171,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16171,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),arimaa.requests.decode_value(v)], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__16168_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__16168_SHARP_,"--END--");
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$83.cljs$core$IFn$_invoke$arity$1(response),/\n/))));
});
arimaa.requests.parse_games = (function parse_games(response){
if(cljs.core.truth_(cljs.core.constant$keyword$222.cljs$core$IFn$_invoke$arity$1(response))){
return response;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$223,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.requests.parse_protocol1,cljs.core.vals(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(response,cljs.core.constant$keyword$224)))], null);
}
});
arimaa.requests.login = (function login(username,password){
return cljs.core.async.map_LT_(arimaa.requests.parse_protocol1,cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(arimaa.requests.protocol1_url,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$82,false,cljs.core.constant$keyword$103,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$225,"login",cljs.core.constant$keyword$63,username,cljs.core.constant$keyword$55,password], null)], null)], 0)));
});
arimaa.requests.reserve_seat = (function reserve_seat(session_id,game_id,role){
return cljs.core.async.map_LT_(arimaa.requests.parse_protocol1,cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(arimaa.requests.protocol1_url,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$82,false,cljs.core.constant$keyword$103,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$225,"reserveseat",cljs.core.constant$keyword$226,session_id,cljs.core.constant$keyword$227,game_id,cljs.core.constant$keyword$228,(function (){var G__16173 = (((role instanceof cljs.core.Keyword))?role.fqn:null);
switch (G__16173) {
case "view":
return "v";

break;
case "silver":
return "b";

break;
case "gold":
return "w";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(role)].join('')));

}
})()], null)], null)], 0)));
});
arimaa.requests.sit = (function sit(gameserver_url,gameroom_id,temporary_authentication_id){
return cljs.core.async.map_LT_(arimaa.requests.parse_protocol1,cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(gameserver_url,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$82,false,cljs.core.constant$keyword$103,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$225,"sit",cljs.core.constant$keyword$229,gameroom_id,cljs.core.constant$keyword$230,temporary_authentication_id], null)], null)], 0)));
});
arimaa.requests.parse_piece = (function parse_piece(piece_string){
if(cljs.core.truth_(piece_string)){
var animal = (function (){var G__16176 = piece_string.toUpperCase();
switch (G__16176) {
case "R":
return cljs.core.constant$keyword$22;

break;
case "C":
return cljs.core.constant$keyword$23;

break;
case "D":
return cljs.core.constant$keyword$24;

break;
case "H":
return cljs.core.constant$keyword$25;

break;
case "M":
return cljs.core.constant$keyword$26;

break;
case "E":
return cljs.core.constant$keyword$27;

break;
default:
return null;

}
})();
var colour = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(piece_string,piece_string.toUpperCase()))?cljs.core.constant$keyword$28:cljs.core.constant$keyword$29);
if(cljs.core.truth_(animal)){
return (new arimaa.game.Piece(animal,colour,null,null,null));
} else {
return null;
}
} else {
return null;
}
});
arimaa.requests.step_regex = /^([rcdhme])([a-h])([1-8])([nsew])$/i;
arimaa.requests.place_starting_piece_regex = /^([rcdhme])([a-h])([1-8])$/i;
arimaa.requests.capture_regex = /^([rcdhme])([a-h])([1-8])x$/i;
arimaa.requests.parse_direction = (function parse_direction(direction_string){
var G__16179 = direction_string;
switch (G__16179) {
case "n":
return cljs.core.constant$keyword$30;

break;
case "s":
return cljs.core.constant$keyword$32;

break;
case "e":
return cljs.core.constant$keyword$31;

break;
case "w":
return cljs.core.constant$keyword$33;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(direction_string)].join('')));

}
});
arimaa.requests.parse_step = (function parse_step(step_string){
var temp__4124__auto__ = cljs.core.re_find(arimaa.requests.step_regex,step_string);
if(cljs.core.truth_(temp__4124__auto__)){
var step = temp__4124__auto__;
return (new arimaa.game.Step((new arimaa.game.PiecePosition(arimaa.requests.parse_piece(cljs.core.second(step)),(new arimaa.game.Square(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(step,(2)),(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(step,(3)) | (0)),null,null,null)),null,null,null)),arimaa.requests.parse_direction(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(step,(4))),null,null,null));
} else {
var temp__4124__auto____$1 = cljs.core.re_find(arimaa.requests.place_starting_piece_regex,step_string);
if(cljs.core.truth_(temp__4124__auto____$1)){
var place_starting_piece = temp__4124__auto____$1;
return (new arimaa.game.PlaceStartingPiece((new arimaa.game.PiecePosition(arimaa.requests.parse_piece(cljs.core.second(place_starting_piece)),(new arimaa.game.Square(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(place_starting_piece,(2)),(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(place_starting_piece,(3)) | (0)),null,null,null)),null,null,null)),null,null,null));
} else {
var temp__4124__auto____$2 = cljs.core.re_find(arimaa.requests.capture_regex,step_string);
if(cljs.core.truth_(temp__4124__auto____$2)){
var capture = temp__4124__auto____$2;
return (new arimaa.game.Capture((new arimaa.game.PiecePosition(arimaa.requests.parse_piece(cljs.core.second(capture)),(new arimaa.game.Square(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(capture,(2)),(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(capture,(3)) | (0)),null,null,null)),null,null,null)),null,null,null));
} else {
return null;
}
}
}
});
arimaa.requests.parse_turn = (function parse_turn(turn_string){
var vec__16182 = cljs.core.re_find(/(\d+)([wb])/,turn_string);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16182,(0),null);
var number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16182,(1),null);
var colour_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16182,(2),null);
return (new arimaa.game.Turn(number,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(colour_string,"w"))?cljs.core.constant$keyword$28:cljs.core.constant$keyword$29),null,null,null));
});
arimaa.requests.parse_move = (function parse_move(move_string){
var items = clojure.string.split.cljs$core$IFn$_invoke$arity$2(move_string," ");
var vec__16184 = cljs.core.split_at((1),items);
var turn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16184,(0),null);
var steps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16184,(1),null);
return (new arimaa.game.Move(arimaa.requests.parse_turn(cljs.core.first(turn)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.requests.parse_step,steps),null,null,null));
});
arimaa.requests.parse_moves = (function parse_moves(moves_string){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.requests.parse_move,clojure.string.split.cljs$core$IFn$_invoke$arity$2(moves_string,"\n"));
});
arimaa.requests.parse_piece_position = (function parse_piece_position(position_string,col,row){
return (new arimaa.game.PiecePosition(arimaa.requests.parse_piece(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(position_string,row),((1) + ((2) * col)))),(new arimaa.game.Square(cljs.core.char$(((96) + col)),row,null,null,null)),null,null,null));
});
arimaa.requests.parse_position = (function parse_position(value){
var piece_string = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.rest(clojure.string.split.cljs$core$IFn$_invoke$arity$2(arimaa.requests.decode_value(value),/\n/)));
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__4506__auto__ = ((function (piece_string){
return (function iter__16196(s__16197){
return (new cljs.core.LazySeq(null,((function (piece_string){
return (function (){
var s__16197__$1 = s__16197;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__16197__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var col = cljs.core.first(xs__4624__auto__);
var iterys__4502__auto__ = ((function (s__16197__$1,col,xs__4624__auto__,temp__4126__auto__,piece_string){
return (function iter__16198(s__16199){
return (new cljs.core.LazySeq(null,((function (s__16197__$1,col,xs__4624__auto__,temp__4126__auto__,piece_string){
return (function (){
var s__16199__$1 = s__16199;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__16199__$1);
if(temp__4126__auto____$1){
var s__16199__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16199__$2)){
var c__4504__auto__ = cljs.core.chunk_first(s__16199__$2);
var size__4505__auto__ = cljs.core.count(c__4504__auto__);
var b__16201 = cljs.core.chunk_buffer(size__4505__auto__);
if((function (){var i__16200 = (0);
while(true){
if((i__16200 < size__4505__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4504__auto__,i__16200);
cljs.core.chunk_append(b__16201,arimaa.requests.parse_piece_position(piece_string,col,row));

var G__16207 = (i__16200 + (1));
i__16200 = G__16207;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16201),iter__16198(cljs.core.chunk_rest(s__16199__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16201),null);
}
} else {
var row = cljs.core.first(s__16199__$2);
return cljs.core.cons(arimaa.requests.parse_piece_position(piece_string,col,row),iter__16198(cljs.core.rest(s__16199__$2)));
}
} else {
return null;
}
break;
}
});})(s__16197__$1,col,xs__4624__auto__,temp__4126__auto__,piece_string))
,null,null));
});})(s__16197__$1,col,xs__4624__auto__,temp__4126__auto__,piece_string))
;
var fs__4503__auto__ = cljs.core.seq(iterys__4502__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(9))));
if(fs__4503__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4503__auto__,iter__16196(cljs.core.rest(s__16197__$1)));
} else {
var G__16208 = cljs.core.rest(s__16197__$1);
s__16197__$1 = G__16208;
continue;
}
} else {
return null;
}
break;
}
});})(piece_string))
,null,null));
});})(piece_string))
;
return iter__4506__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(9)));
})());
});
arimaa.requests.parse_game_state = (function parse_game_state(value){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(arimaa.requests.parse_protocol1(value),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231], null),arimaa.requests.parse_moves),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$232], null),arimaa.requests.parse_position);
});
arimaa.requests.game_state = (function game_state(gameserver_url,gameserver_session_id,last_change){
return cljs.core.async.map_LT_(arimaa.requests.parse_game_state,cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(gameserver_url,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$82,false,cljs.core.constant$keyword$103,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$225,"gamestate",cljs.core.constant$keyword$226,gameserver_session_id,cljs.core.constant$keyword$233,(1),cljs.core.constant$keyword$234,last_change], null)], null)], 0)));
});
arimaa.requests.gameroom_state = (function gameroom_state(session_id){
return cljs.core.async.map_LT_((function (response){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic((function (){var G__16210 = cljs.core.constant$keyword$83.cljs$core$IFn$_invoke$arity$1(response);
return JSON.parse(G__16210);
})(),cljs.core.array_seq([cljs.core.constant$keyword$16,true], 0));
}),cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(arimaa.requests.protocol2_url,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$82,false,cljs.core.constant$keyword$94,"text/plain",cljs.core.constant$keyword$102,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$226,session_id,cljs.core.constant$keyword$225,"state"], null)], null)], 0)));
});
arimaa.requests.parse_chat_line = (function parse_chat_line(chat_line){
var timestamp = arimaa.utils.parse_timestamp(cljs.core.first(chat_line));
var player_name = cljs.core.second(chat_line);
var chat_type = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(chat_line,(2)));
var chat = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$235,timestamp,cljs.core.constant$keyword$236,player_name,cljs.core.constant$keyword$237,chat_type], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(chat_type,cljs.core.constant$keyword$238)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([chat,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$239,[cljs.core.str("#"),cljs.core.str(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(chat_line,(3)))].join(''),cljs.core.constant$keyword$163,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(chat_line,(4))], null)], 0));
} else {
return chat;
}
});
arimaa.requests.parse_chat = (function parse_chat(response){
var response_lines = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16211_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$3(p1__16211_SHARP_,/\t/,(5));
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$83.cljs$core$IFn$_invoke$arity$1(response),/\n/));
var header = cljs.core.first(cljs.core.first(response_lines));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(header,"OK")){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$240,cljs.core.first(cljs.core.second(response_lines)),cljs.core.constant$keyword$241,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.requests.parse_chat_line,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),response_lines))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(header,"Nothing new")){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$241,cljs.core.PersistentVector.EMPTY], null);
} else {
if(cljs.core.truth_(header)){
var G__16213 = [cljs.core.str("Unhandled header"),cljs.core.str(response)].join('');
return alert(G__16213);
} else {
return null;
}
}
}
});
arimaa.requests.fetch_chat = (function fetch_chat(username,auth,data){
return cljs.core.async.map_LT_(arimaa.requests.parse_chat,cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(arimaa.requests.chat_url,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$82,false,cljs.core.constant$keyword$103,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$56,username,cljs.core.constant$keyword$242,auth,cljs.core.constant$keyword$240,data,cljs.core.constant$keyword$243,"fetch"], null)], null)], 0)));
});
arimaa.requests.send_chat = (function send_chat(username,auth,message){
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(arimaa.requests.chat_url,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$82,false,cljs.core.constant$keyword$103,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$56,username,cljs.core.constant$keyword$242,auth,cljs.core.constant$keyword$243,"msg",cljs.core.constant$keyword$240,message], null)], null)], 0));
});
