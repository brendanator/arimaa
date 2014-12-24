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
return value.replace("%13","\n").replace("%25","%");
});
arimaa.requests.parse_response = (function parse_response(response){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15878_SHARP_){
var vec__15880 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(p1__15878_SHARP_,/=/,(2));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15880,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15880,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),arimaa.requests.decode_value(v)], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__15877_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__15877_SHARP_,"--END--");
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$75.cljs$core$IFn$_invoke$arity$1(response),/\n/))));
});
arimaa.requests.parse_games = (function parse_games(response){
if(cljs.core.truth_(cljs.core.constant$keyword$193.cljs$core$IFn$_invoke$arity$1(response))){
return response;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$194,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.requests.parse_response,cljs.core.vals(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(response,cljs.core.constant$keyword$195)))], null);
}
});
arimaa.requests.login = (function login(username,password){
return cljs.core.async.map_LT_(arimaa.requests.parse_response,cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(arimaa.requests.protocol1_url,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$74,false,cljs.core.constant$keyword$95,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$196,"login",cljs.core.constant$keyword$73,username,cljs.core.constant$keyword$65,password], null)], null)], 0)));
});
arimaa.requests.gameroom_state = (function gameroom_state(session_id){
return cljs.core.async.map_LT_((function (response){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic((function (){var G__15882 = cljs.core.constant$keyword$75.cljs$core$IFn$_invoke$arity$1(response);
return JSON.parse(G__15882);
})(),cljs.core.array_seq([cljs.core.constant$keyword$16,true], 0));
}),cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(arimaa.requests.protocol2_url,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$74,false,cljs.core.constant$keyword$86,"text/plain",cljs.core.constant$keyword$94,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$197,session_id,cljs.core.constant$keyword$196,"state"], null)], null)], 0)));
});
arimaa.requests.parse_chat_line = (function parse_chat_line(chat_line){
var timestamp = cljs_time.format.unparse(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm"),cljs_time.coerce.from_long(((1000) * cljs.core.first(chat_line))));
var player_name = cljs.core.second(chat_line);
var chat_type = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(chat_line,(2)));
var chat = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$198,timestamp,cljs.core.constant$keyword$199,player_name,cljs.core.constant$keyword$200,chat_type], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(chat_type,cljs.core.constant$keyword$201)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([chat,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$202,[cljs.core.str("#"),cljs.core.str(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(chat_line,(3)))].join(''),cljs.core.constant$keyword$139,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(chat_line,(4))], null)], 0));
} else {
return chat;
}
});
arimaa.requests.parse_chat = (function parse_chat(response){
var response_lines = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15883_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$3(p1__15883_SHARP_,/\t/,(5));
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$75.cljs$core$IFn$_invoke$arity$1(response),/\n/));
var header = cljs.core.first(cljs.core.first(response_lines));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(header,"OK")){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$203,cljs.core.first(cljs.core.second(response_lines)),cljs.core.constant$keyword$204,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.requests.parse_chat_line,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),response_lines))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(header,"Nothing new")){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$204,cljs.core.PersistentVector.EMPTY], null);
} else {
if(cljs.core.truth_(header)){
var G__15885 = [cljs.core.str("Unhandled header"),cljs.core.str(response)].join('');
return alert(G__15885);
} else {
return null;
}
}
}
});
arimaa.requests.fetch_chat = (function fetch_chat(username,auth,data){
return cljs.core.async.map_LT_(arimaa.requests.parse_chat,cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(arimaa.requests.chat_url,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$74,false,cljs.core.constant$keyword$95,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$66,username,cljs.core.constant$keyword$38,auth,cljs.core.constant$keyword$203,data,cljs.core.constant$keyword$205,"fetch"], null)], null)], 0)));
});
arimaa.requests.send_chat = (function send_chat(username,auth,message){
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(arimaa.requests.chat_url,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$74,false,cljs.core.constant$keyword$95,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$66,username,cljs.core.constant$keyword$38,auth,cljs.core.constant$keyword$205,"msg",cljs.core.constant$keyword$203,message], null)], null)], 0));
});
