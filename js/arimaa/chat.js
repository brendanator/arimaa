// Compiled by ClojureScript 0.0-2511
goog.provide('arimaa.chat');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('arimaa.utils');
goog.require('arimaa.state');
goog.require('arimaa.requests');
arimaa.chat.chat_message = (function chat_message(chat){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$212,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$238,cljs.core.constant$keyword$201.cljs$core$IFn$_invoke$arity$1(chat)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$218,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$23,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$205,cljs.core.constant$keyword$205.cljs$core$IFn$_invoke$arity$1(chat)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$239,cljs.core.constant$keyword$202.cljs$core$IFn$_invoke$arity$1(chat)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$240,cljs.core.constant$keyword$142.cljs$core$IFn$_invoke$arity$1(chat)], null)], null)], null);
});
arimaa.chat.chat_event = (function chat_event(chat,icon,text){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$212,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$238,cljs.core.constant$keyword$201.cljs$core$IFn$_invoke$arity$1(chat)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$241,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$239,cljs.core.constant$keyword$202.cljs$core$IFn$_invoke$arity$1(chat)], null),[cljs.core.str(" "),cljs.core.str(text)].join('')], null)], null);
});
arimaa.chat.chat_row = (function chat_row(chat){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,(function (){var G__16088 = (((cljs.core.constant$keyword$203.cljs$core$IFn$_invoke$arity$1(chat) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$203.cljs$core$IFn$_invoke$arity$1(chat).fqn:null);
switch (G__16088) {
case "timeout":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_event,chat,cljs.core.constant$keyword$243,"timed out"], null);

break;
case "out":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_event,chat,cljs.core.constant$keyword$244,"went out"], null);

break;
case "in":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_event,chat,cljs.core.constant$keyword$245,"is coming in"], null);

break;
case "msg":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_message,chat], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.constant$keyword$203.cljs$core$IFn$_invoke$arity$1(chat))].join('')));

}
})()], null);
});
arimaa.chat.update_chat_log = (function update_chat_log(chatter,latest_data){
var c__11276__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11276__auto__){
return (function (){
var f__11277__auto__ = (function (){var switch__11261__auto__ = ((function (c__11276__auto__){
return (function (state_16175){
var state_val_16176 = (state_16175[(1)]);
if((state_val_16176 === (7))){
var inst_16156 = (state_16175[(7)]);
var state_16175__$1 = state_16175;
var statearr_16177_16202 = state_16175__$1;
(statearr_16177_16202[(2)] = inst_16156);

(statearr_16177_16202[(1)] = (8));


return cljs.core.constant$keyword$44;
} else {
if((state_val_16176 === (1))){
var state_16175__$1 = state_16175;
var statearr_16178_16203 = state_16175__$1;
(statearr_16178_16203[(2)] = null);

(statearr_16178_16203[(1)] = (2));


return cljs.core.constant$keyword$44;
} else {
if((state_val_16176 === (4))){
var inst_16149 = (state_16175[(2)]);
var inst_16151 = (function (){var G__16179 = arimaa.state.username;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16179) : cljs.core.deref.call(null,G__16179));
})();
var inst_16152 = arimaa.state.auth();
var inst_16153 = (function (){var G__16180 = latest_data;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16180) : cljs.core.deref.call(null,G__16180));
})();
var inst_16154 = arimaa.requests.fetch_chat(inst_16151,inst_16152,inst_16153);
var state_16175__$1 = (function (){var statearr_16181 = state_16175;
(statearr_16181[(8)] = inst_16149);

return statearr_16181;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16175__$1,(5),inst_16154);
} else {
if((state_val_16176 === (6))){
var inst_16156 = (state_16175[(7)]);
var inst_16159 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16156);
var state_16175__$1 = state_16175;
var statearr_16182_16204 = state_16175__$1;
(statearr_16182_16204[(2)] = inst_16159);

(statearr_16182_16204[(1)] = (8));


return cljs.core.constant$keyword$44;
} else {
if((state_val_16176 === (3))){
var inst_16173 = (state_16175[(2)]);
var state_16175__$1 = state_16175;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16175__$1,inst_16173);
} else {
if((state_val_16176 === (2))){
var inst_16147 = cljs.core.async.timeout((500));
var state_16175__$1 = state_16175;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16175__$1,(4),inst_16147);
} else {
if((state_val_16176 === (11))){
var inst_16170 = (state_16175[(2)]);
var state_16175__$1 = (function (){var statearr_16183 = state_16175;
(statearr_16183[(9)] = inst_16170);

return statearr_16183;
})();
var statearr_16184_16205 = state_16175__$1;
(statearr_16184_16205[(2)] = null);

(statearr_16184_16205[(1)] = (2));


return cljs.core.constant$keyword$44;
} else {
if((state_val_16176 === (9))){
var inst_16163 = (state_16175[(10)]);
var inst_16167 = (function (){var G__16185 = latest_data;
var G__16186 = inst_16163;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16185,G__16186) : cljs.core.reset_BANG_.call(null,G__16185,G__16186));
})();
var state_16175__$1 = state_16175;
var statearr_16187_16206 = state_16175__$1;
(statearr_16187_16206[(2)] = inst_16167);

(statearr_16187_16206[(1)] = (11));


return cljs.core.constant$keyword$44;
} else {
if((state_val_16176 === (5))){
var inst_16156 = (state_16175[(7)]);
var inst_16156__$1 = (state_16175[(2)]);
var inst_16157 = cljs.core.seq_QMARK_(inst_16156__$1);
var state_16175__$1 = (function (){var statearr_16188 = state_16175;
(statearr_16188[(7)] = inst_16156__$1);

return statearr_16188;
})();
if(inst_16157){
var statearr_16189_16207 = state_16175__$1;
(statearr_16189_16207[(1)] = (6));

} else {
var statearr_16190_16208 = state_16175__$1;
(statearr_16190_16208[(1)] = (7));

}

return cljs.core.constant$keyword$44;
} else {
if((state_val_16176 === (10))){
var state_16175__$1 = state_16175;
var statearr_16191_16209 = state_16175__$1;
(statearr_16191_16209[(2)] = null);

(statearr_16191_16209[(1)] = (11));


return cljs.core.constant$keyword$44;
} else {
if((state_val_16176 === (8))){
var inst_16163 = (state_16175[(10)]);
var inst_16162 = (state_16175[(2)]);
var inst_16163__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16162,cljs.core.constant$keyword$206);
var inst_16164 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16162,cljs.core.constant$keyword$207);
var inst_16165 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(chatter,cljs.core.concat,inst_16164);
var state_16175__$1 = (function (){var statearr_16192 = state_16175;
(statearr_16192[(10)] = inst_16163__$1);

(statearr_16192[(11)] = inst_16165);

return statearr_16192;
})();
if(cljs.core.truth_(inst_16163__$1)){
var statearr_16193_16210 = state_16175__$1;
(statearr_16193_16210[(1)] = (9));

} else {
var statearr_16194_16211 = state_16175__$1;
(statearr_16194_16211[(1)] = (10));

}

return cljs.core.constant$keyword$44;
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
}
});})(c__11276__auto__))
;
return ((function (switch__11261__auto__,c__11276__auto__){
return (function() {
var state_machine__11262__auto__ = null;
var state_machine__11262__auto____0 = (function (){
var statearr_16198 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16198[(0)] = state_machine__11262__auto__);

(statearr_16198[(1)] = (1));

return statearr_16198;
});
var state_machine__11262__auto____1 = (function (state_16175){
while(true){
var ret_value__11263__auto__ = (function (){try{while(true){
var result__11264__auto__ = switch__11261__auto__(state_16175);
if(cljs.core.keyword_identical_QMARK_(result__11264__auto__,cljs.core.constant$keyword$44)){
continue;
} else {
return result__11264__auto__;
}
break;
}
}catch (e16199){if((e16199 instanceof Object)){
var ex__11265__auto__ = e16199;
var statearr_16200_16212 = state_16175;
(statearr_16200_16212[(5)] = ex__11265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16175);

return cljs.core.constant$keyword$44;
} else {
throw e16199;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11263__auto__,cljs.core.constant$keyword$44)){
var G__16213 = state_16175;
state_16175 = G__16213;
continue;
} else {
return ret_value__11263__auto__;
}
break;
}
});
state_machine__11262__auto__ = function(state_16175){
switch(arguments.length){
case 0:
return state_machine__11262__auto____0.call(this);
case 1:
return state_machine__11262__auto____1.call(this,state_16175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11262__auto____0;
state_machine__11262__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11262__auto____1;
return state_machine__11262__auto__;
})()
;})(switch__11261__auto__,c__11276__auto__))
})();
var state__11278__auto__ = (function (){var statearr_16201 = (function (){return (f__11277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11277__auto__.cljs$core$IFn$_invoke$arity$0() : f__11277__auto__.call(null));
})();
(statearr_16201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11276__auto__);

return statearr_16201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11278__auto__);
});})(c__11276__auto__))
);

return c__11276__auto__;
});
arimaa.chat.chat_log = (function chat_log(){
var chatter = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var latest_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
arimaa.chat.update_chat_log(chatter,latest_data);

return ((function (chatter,latest_data){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.utils.scroll_bottom_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.chat.chat_row,(function (){var G__16215 = chatter;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16215) : cljs.core.deref.call(null,G__16215));
})())], null)], null);
});
;})(chatter,latest_data))
});
arimaa.chat.chat_input = (function chat_input(){
var message = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var send_chat = ((function (message){
return (function (){
arimaa.requests.send_chat((function (){var G__16225 = arimaa.state.username;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16225) : cljs.core.deref.call(null,G__16225));
})(),arimaa.state.auth(),(function (){var G__16226 = message;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16226) : cljs.core.deref.call(null,G__16226));
})());

var G__16227 = message;
var G__16228 = "";
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16227,G__16228) : cljs.core.reset_BANG_.call(null,G__16227,G__16228));
});})(message))
;
return ((function (message,send_chat){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$235,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$236,send_chat], null),"Send"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$218,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.utils.initial_focus_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$118,"text",cljs.core.constant$keyword$232,(function (){var G__16229 = message;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16229) : cljs.core.deref.call(null,G__16229));
})(),cljs.core.constant$keyword$233,((function (message,send_chat){
return (function (p1__16216_SHARP_){
var G__16230 = message;
var G__16231 = p1__16216_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16230,G__16231) : cljs.core.reset_BANG_.call(null,G__16230,G__16231));
});})(message,send_chat))
,cljs.core.constant$keyword$234,((function (message,send_chat){
return (function (p1__16217_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16217_SHARP_.keyCode,(13))){
return send_chat();
} else {
return null;
}
});})(message,send_chat))
], null)], null)], null)], null)], null);
});
;})(message,send_chat))
});
arimaa.chat.chat_view = (function chat_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$248,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_log], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_input], null)], null);
});
