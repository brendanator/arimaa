// Compiled by ClojureScript 0.0-2511
goog.provide('arimaa.requests');
goog.require('cljs.core');
goog.require('cljs_time.coerce');
goog.require('cljs_time.format');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
arimaa.requests.protocol1_url = "http://arimaa.com/arimaa/gameroom/client1gr.cgi";
arimaa.requests.protocol2_url = "http://arimaa.com/arimaa/gameroom/client2gr.cgi";
arimaa.requests.chat_url = "http://arimaa.com/arimaa/chat/srv.php";
arimaa.requests.decode_value = (function decode_value(value){
return clojure.string.replace(clojure.string.replace(value,"%13","\n"),"%25","%");
});
arimaa.requests.parse_protocol1 = (function parse_protocol1(response){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15816_SHARP_){
var vec__15818 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(p1__15816_SHARP_,/=/,(2));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15818,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15818,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),arimaa.requests.decode_value(v)], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__15815_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__15815_SHARP_,"--END--");
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$78.cljs$core$IFn$_invoke$arity$1(response),/\n/))));
});
arimaa.requests.parse_games = (function parse_games(response){
if(cljs.core.truth_(cljs.core.constant$keyword$196.cljs$core$IFn$_invoke$arity$1(response))){
return response;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$197,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.requests.parse_protocol1,cljs.core.vals(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(response,cljs.core.constant$keyword$198)))], null);
}
});
arimaa.requests.login = (function login(username,password){
return cljs.core.async.map_LT_(arimaa.requests.parse_protocol1,cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(arimaa.requests.protocol1_url,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$77,false,cljs.core.constant$keyword$98,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$199,"login",cljs.core.constant$keyword$60,username,cljs.core.constant$keyword$52,password], null)], null)], 0)));
});
arimaa.requests.reserve_seat = (function reserve_seat(session_id,game_id,role){
return cljs.core.async.map_LT_(arimaa.requests.parse_protocol1,cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(arimaa.requests.protocol1_url,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$77,false,cljs.core.constant$keyword$98,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$199,"reserveseat",cljs.core.constant$keyword$200,session_id,cljs.core.constant$keyword$201,game_id,cljs.core.constant$keyword$202,(function (){var G__15820 = (((role instanceof cljs.core.Keyword))?role.fqn:null);
switch (G__15820) {
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
return cljs.core.async.map_LT_(arimaa.requests.parse_protocol1,cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(gameserver_url,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$77,false,cljs.core.constant$keyword$98,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$199,"sit",cljs.core.constant$keyword$203,gameroom_id,cljs.core.constant$keyword$204,temporary_authentication_id], null)], null)], 0)));
});
arimaa.requests.parse_move = (function parse_move(move_string){
var items = clojure.string.split.cljs$core$IFn$_invoke$arity$2(move_string," ");
var vec__15823 = cljs.core.split_at((1),items);
var move = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15823,(0),null);
var steps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15823,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$109,cljs.core.first(move),cljs.core.constant$keyword$205,cljs.core.vec(steps)], null);
});
arimaa.requests.parse_moves = (function parse_moves(moves_string){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.requests.parse_move,clojure.string.split.cljs$core$IFn$_invoke$arity$2(moves_string,"\n"));
});
arimaa.requests.make_piece = (function make_piece(piece_string,row,col){
var animal = (function (){var G__15825 = piece_string.toUpperCase();
switch (G__15825) {
case "R":
return cljs.core.constant$keyword$206;

break;
case "C":
return cljs.core.constant$keyword$207;

break;
case "D":
return cljs.core.constant$keyword$208;

break;
case "H":
return cljs.core.constant$keyword$209;

break;
case "M":
return cljs.core.constant$keyword$210;

break;
case "E":
return cljs.core.constant$keyword$211;

break;
default:
return null;

}
})();
var colour = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(piece_string,piece_string.toUpperCase()))?cljs.core.constant$keyword$212:cljs.core.constant$keyword$213);
if(cljs.core.truth_(animal)){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$214,animal,cljs.core.constant$keyword$215,colour,cljs.core.constant$keyword$216,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$217,row,cljs.core.constant$keyword$218,cljs.core.char$(((96) + col))], null)], null);
} else {
return null;
}
});
arimaa.requests.parse_piece = (function parse_piece(position_string,row,col){
return arimaa.requests.make_piece(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(position_string,row),((1) + ((2) * col))),row,col);
});
arimaa.requests.parse_position = (function parse_position(value){
var piece_string = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.rest(clojure.string.split.cljs$core$IFn$_invoke$arity$2(arimaa.requests.decode_value(value),/\n/)));
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__4386__auto__ = ((function (piece_string){
return (function iter__15838(s__15839){
return (new cljs.core.LazySeq(null,((function (piece_string){
return (function (){
var s__15839__$1 = s__15839;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__15839__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var row = cljs.core.first(xs__4624__auto__);
var iterys__4382__auto__ = ((function (s__15839__$1,row,xs__4624__auto__,temp__4126__auto__,piece_string){
return (function iter__15840(s__15841){
return (new cljs.core.LazySeq(null,((function (s__15839__$1,row,xs__4624__auto__,temp__4126__auto__,piece_string){
return (function (){
var s__15841__$1 = s__15841;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__15841__$1);
if(temp__4126__auto____$1){
var s__15841__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15841__$2)){
var c__4384__auto__ = cljs.core.chunk_first(s__15841__$2);
var size__4385__auto__ = cljs.core.count(c__4384__auto__);
var b__15843 = cljs.core.chunk_buffer(size__4385__auto__);
if((function (){var i__15842 = (0);
while(true){
if((i__15842 < size__4385__auto__)){
var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4384__auto__,i__15842);
cljs.core.chunk_append(b__15843,arimaa.requests.parse_piece(piece_string,row,col));

var G__15849 = (i__15842 + (1));
i__15842 = G__15849;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15843),iter__15840(cljs.core.chunk_rest(s__15841__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15843),null);
}
} else {
var col = cljs.core.first(s__15841__$2);
return cljs.core.cons(arimaa.requests.parse_piece(piece_string,row,col),iter__15840(cljs.core.rest(s__15841__$2)));
}
} else {
return null;
}
break;
}
});})(s__15839__$1,row,xs__4624__auto__,temp__4126__auto__,piece_string))
,null,null));
});})(s__15839__$1,row,xs__4624__auto__,temp__4126__auto__,piece_string))
;
var fs__4383__auto__ = cljs.core.seq(iterys__4382__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(9))));
if(fs__4383__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4383__auto__,iter__15838(cljs.core.rest(s__15839__$1)));
} else {
var G__15850 = cljs.core.rest(s__15839__$1);
s__15839__$1 = G__15850;
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
return iter__4386__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(9)));
})());
});
arimaa.requests.parse_game_state = (function parse_game_state(value){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(arimaa.requests.parse_protocol1(value),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$219], null),arimaa.requests.parse_moves),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$220], null),arimaa.requests.parse_position);
});
arimaa.requests.game_state = (function game_state(gameserver_url,gameserver_session_id,last_change){
return cljs.core.async.map_LT_(arimaa.requests.parse_game_state,cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(gameserver_url,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$77,false,cljs.core.constant$keyword$98,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$199,"gamestate",cljs.core.constant$keyword$200,gameserver_session_id,cljs.core.constant$keyword$221,(1),cljs.core.constant$keyword$222,last_change,cljs.core.constant$keyword$223,(1)], null)], null)], 0)));
});
arimaa.requests.gameroom_state = (function gameroom_state(session_id){
return cljs.core.async.map_LT_((function (response){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic((function (){var G__15852 = cljs.core.constant$keyword$78.cljs$core$IFn$_invoke$arity$1(response);
return JSON.parse(G__15852);
})(),cljs.core.array_seq([cljs.core.constant$keyword$16,true], 0));
}),cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(arimaa.requests.protocol2_url,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$77,false,cljs.core.constant$keyword$89,"text/plain",cljs.core.constant$keyword$97,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$200,session_id,cljs.core.constant$keyword$199,"state"], null)], null)], 0)));
});
arimaa.requests.parse_chat_line = (function parse_chat_line(chat_line){
var timestamp = cljs_time.format.unparse(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm"),cljs_time.coerce.from_long(((1000) * cljs.core.first(chat_line))));
var player_name = cljs.core.second(chat_line);
var chat_type = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(chat_line,(2)));
var chat = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$224,timestamp,cljs.core.constant$keyword$225,player_name,cljs.core.constant$keyword$226,chat_type], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(chat_type,cljs.core.constant$keyword$227)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([chat,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$228,[cljs.core.str("#"),cljs.core.str(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(chat_line,(3)))].join(''),cljs.core.constant$keyword$142,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(chat_line,(4))], null)], 0));
} else {
return chat;
}
});
arimaa.requests.parse_chat = (function parse_chat(response){
var response_lines = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15853_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$3(p1__15853_SHARP_,/\t/,(5));
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$78.cljs$core$IFn$_invoke$arity$1(response),/\n/));
var header = cljs.core.first(cljs.core.first(response_lines));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(header,"OK")){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$229,cljs.core.first(cljs.core.second(response_lines)),cljs.core.constant$keyword$230,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.requests.parse_chat_line,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),response_lines))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(header,"Nothing new")){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$230,cljs.core.PersistentVector.EMPTY], null);
} else {
if(cljs.core.truth_(header)){
var G__15855 = [cljs.core.str("Unhandled header"),cljs.core.str(response)].join('');
return alert(G__15855);
} else {
return null;
}
}
}
});
arimaa.requests.fetch_chat = (function fetch_chat(username,auth,data){
return cljs.core.async.map_LT_(arimaa.requests.parse_chat,cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(arimaa.requests.chat_url,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$77,false,cljs.core.constant$keyword$98,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$53,username,cljs.core.constant$keyword$42,auth,cljs.core.constant$keyword$229,data,cljs.core.constant$keyword$231,"fetch"], null)], null)], 0)));
});
arimaa.requests.send_chat = (function send_chat(username,auth,message){
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(arimaa.requests.chat_url,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$77,false,cljs.core.constant$keyword$98,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$53,username,cljs.core.constant$keyword$42,auth,cljs.core.constant$keyword$231,"msg",cljs.core.constant$keyword$229,message], null)], null)], 0));
});
