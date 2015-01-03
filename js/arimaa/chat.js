// Compiled by ClojureScript 0.0-2511
goog.provide('arimaa.chat');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('arimaa.utils');
goog.require('arimaa.state');
goog.require('arimaa.requests');
arimaa.chat.chat_message = (function chat_message(chat){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$244,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,cljs.core.constant$keyword$231.cljs$core$IFn$_invoke$arity$1(chat)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$23,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$235,cljs.core.constant$keyword$235.cljs$core$IFn$_invoke$arity$1(chat)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,cljs.core.constant$keyword$232.cljs$core$IFn$_invoke$arity$1(chat)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$248], null),arimaa.utils.markup_user_messages(cljs.core.constant$keyword$164.cljs$core$IFn$_invoke$arity$1(chat)))], null)], null);
});
arimaa.chat.chat_event = (function chat_event(chat,icon,text){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$244,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,cljs.core.constant$keyword$231.cljs$core$IFn$_invoke$arity$1(chat)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,cljs.core.constant$keyword$232.cljs$core$IFn$_invoke$arity$1(chat)], null),[cljs.core.str(" "),cljs.core.str(text)].join('')], null)], null);
});
arimaa.chat.chat_row = (function chat_row(chat){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,(function (){var G__15958 = (((cljs.core.constant$keyword$233.cljs$core$IFn$_invoke$arity$1(chat) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$233.cljs$core$IFn$_invoke$arity$1(chat).fqn:null);
switch (G__15958) {
case "timeout":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_event,chat,cljs.core.constant$keyword$251,"timed out"], null);

break;
case "out":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_event,chat,cljs.core.constant$keyword$252,"went out"], null);

break;
case "in":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_event,chat,cljs.core.constant$keyword$253,"is coming in"], null);

break;
case "msg":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_message,chat], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.constant$keyword$233.cljs$core$IFn$_invoke$arity$1(chat))].join('')));

}
})()], null);
});
arimaa.chat.chat_log_channel = (function chat_log_channel(){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__5853__auto___16100 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___16100,c){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___16100,c){
return (function (state_16067){
var state_val_16068 = (state_16067[(1)]);
if((state_val_16068 === (7))){
var inst_16042 = (state_16067[(7)]);
var state_16067__$1 = state_16067;
var statearr_16069_16101 = state_16067__$1;
(statearr_16069_16101[(2)] = inst_16042);

(statearr_16069_16101[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16068 === (1))){
var inst_16030 = cljs.core.PersistentVector.EMPTY;
var inst_16031 = inst_16030;
var inst_16032 = null;
var state_16067__$1 = (function (){var statearr_16070 = state_16067;
(statearr_16070[(8)] = inst_16032);

(statearr_16070[(9)] = inst_16031);

return statearr_16070;
})();
var statearr_16071_16102 = state_16067__$1;
(statearr_16071_16102[(2)] = null);

(statearr_16071_16102[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16068 === (4))){
var inst_16032 = (state_16067[(8)]);
var inst_16036 = (state_16067[(2)]);
var inst_16038 = (function (){var G__16072 = arimaa.state.username;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16072) : cljs.core.deref.call(null,G__16072));
})();
var inst_16039 = arimaa.state.auth();
var inst_16040 = arimaa.requests.fetch_chat(inst_16038,inst_16039,inst_16032);
var state_16067__$1 = (function (){var statearr_16073 = state_16067;
(statearr_16073[(10)] = inst_16036);

return statearr_16073;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16067__$1,(5),inst_16040);
} else {
if((state_val_16068 === (15))){
var inst_16059 = (state_16067[(2)]);
var state_16067__$1 = state_16067;
var statearr_16074_16103 = state_16067__$1;
(statearr_16074_16103[(2)] = inst_16059);

(statearr_16074_16103[(1)] = (11));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16068 === (13))){
var inst_16052 = (state_16067[(11)]);
var inst_16049 = (state_16067[(12)]);
var inst_16031 = inst_16052;
var inst_16032 = inst_16049;
var state_16067__$1 = (function (){var statearr_16075 = state_16067;
(statearr_16075[(8)] = inst_16032);

(statearr_16075[(9)] = inst_16031);

return statearr_16075;
})();
var statearr_16076_16104 = state_16067__$1;
(statearr_16076_16104[(2)] = null);

(statearr_16076_16104[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16068 === (6))){
var inst_16042 = (state_16067[(7)]);
var inst_16045 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16042);
var state_16067__$1 = state_16067;
var statearr_16077_16105 = state_16067__$1;
(statearr_16077_16105[(2)] = inst_16045);

(statearr_16077_16105[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16068 === (3))){
var inst_16065 = (state_16067[(2)]);
var state_16067__$1 = state_16067;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16067__$1,inst_16065);
} else {
if((state_val_16068 === (12))){
var inst_16054 = (state_16067[(2)]);
var state_16067__$1 = state_16067;
if(cljs.core.truth_(inst_16054)){
var statearr_16078_16106 = state_16067__$1;
(statearr_16078_16106[(1)] = (13));

} else {
var statearr_16079_16107 = state_16067__$1;
(statearr_16079_16107[(1)] = (14));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_16068 === (2))){
var inst_16034 = cljs.core.async.timeout((500));
var state_16067__$1 = state_16067;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16067__$1,(4),inst_16034);
} else {
if((state_val_16068 === (11))){
var inst_16063 = (state_16067[(2)]);
var state_16067__$1 = state_16067;
var statearr_16080_16108 = state_16067__$1;
(statearr_16080_16108[(2)] = inst_16063);

(statearr_16080_16108[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16068 === (9))){
var inst_16050 = (state_16067[(13)]);
var inst_16052 = (state_16067[(11)]);
var inst_16031 = (state_16067[(9)]);
var inst_16052__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_16031,inst_16050);
var state_16067__$1 = (function (){var statearr_16081 = state_16067;
(statearr_16081[(11)] = inst_16052__$1);

return statearr_16081;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16067__$1,(12),c,inst_16052__$1);
} else {
if((state_val_16068 === (5))){
var inst_16042 = (state_16067[(7)]);
var inst_16042__$1 = (state_16067[(2)]);
var inst_16043 = cljs.core.seq_QMARK_(inst_16042__$1);
var state_16067__$1 = (function (){var statearr_16084 = state_16067;
(statearr_16084[(7)] = inst_16042__$1);

return statearr_16084;
})();
if(inst_16043){
var statearr_16085_16109 = state_16067__$1;
(statearr_16085_16109[(1)] = (6));

} else {
var statearr_16086_16110 = state_16067__$1;
(statearr_16086_16110[(1)] = (7));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_16068 === (14))){
var state_16067__$1 = state_16067;
var statearr_16087_16111 = state_16067__$1;
(statearr_16087_16111[(2)] = null);

(statearr_16087_16111[(1)] = (15));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16068 === (10))){
var inst_16032 = (state_16067[(8)]);
var inst_16031 = (state_16067[(9)]);
var tmp16082 = inst_16032;
var tmp16083 = inst_16031;
var inst_16031__$1 = tmp16083;
var inst_16032__$1 = tmp16082;
var state_16067__$1 = (function (){var statearr_16088 = state_16067;
(statearr_16088[(8)] = inst_16032__$1);

(statearr_16088[(9)] = inst_16031__$1);

return statearr_16088;
})();
var statearr_16089_16112 = state_16067__$1;
(statearr_16089_16112[(2)] = null);

(statearr_16089_16112[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16068 === (8))){
var inst_16049 = (state_16067[(12)]);
var inst_16048 = (state_16067[(2)]);
var inst_16049__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16048,cljs.core.constant$keyword$236);
var inst_16050 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16048,cljs.core.constant$keyword$237);
var state_16067__$1 = (function (){var statearr_16090 = state_16067;
(statearr_16090[(13)] = inst_16050);

(statearr_16090[(12)] = inst_16049__$1);

return statearr_16090;
})();
if(cljs.core.truth_(inst_16049__$1)){
var statearr_16091_16113 = state_16067__$1;
(statearr_16091_16113[(1)] = (9));

} else {
var statearr_16092_16114 = state_16067__$1;
(statearr_16092_16114[(1)] = (10));

}

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
}
}
}
}
}
});})(c__5853__auto___16100,c))
;
return ((function (switch__5838__auto__,c__5853__auto___16100,c){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_16096 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16096[(0)] = state_machine__5839__auto__);

(statearr_16096[(1)] = (1));

return statearr_16096;
});
var state_machine__5839__auto____1 = (function (state_16067){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_16067);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e16097){if((e16097 instanceof Object)){
var ex__5842__auto__ = e16097;
var statearr_16098_16115 = state_16067;
(statearr_16098_16115[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16067);

return cljs.core.constant$keyword$41;
} else {
throw e16097;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__16116 = state_16067;
state_16067 = G__16116;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_16067){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_16067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___16100,c))
})();
var state__5855__auto__ = (function (){var statearr_16099 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_16099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___16100);

return statearr_16099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___16100,c))
);


return c;
});
arimaa.chat.chat_log = (function chat_log(chat){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.utils.scroll_bottom_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$254,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.chat.chat_row,(function (){var G__16118 = chat;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16118) : cljs.core.deref.call(null,G__16118));
})())], null)], null);
});
arimaa.chat.chat_log_view = (function chat_log_view(){
var chat = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var chat_chan = arimaa.chat.chat_log_channel();
var mounted_chat_log = cljs.core.with_meta(arimaa.chat.chat_log,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$255,((function (chat,chat_chan){
return (function (){
return cljs.core.async.close_BANG_(chat_chan);
});})(chat,chat_chan))
], null));
arimaa.utils.subscribe_atom_to_channel_BANG_(chat,chat_chan);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mounted_chat_log,chat], null);
});
arimaa.chat.chat_input = (function chat_input(){
var message = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var send_chat = ((function (message){
return (function (){
arimaa.requests.send_chat((function (){var G__16128 = arimaa.state.username;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16128) : cljs.core.deref.call(null,G__16128));
})(),arimaa.state.auth(),(function (){var G__16129 = message;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16129) : cljs.core.deref.call(null,G__16129));
})());

var G__16130 = message;
var G__16131 = "";
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16130,G__16131) : cljs.core.reset_BANG_.call(null,G__16130,G__16131));
});})(message))
;
return ((function (message,send_chat){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$256,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$257,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$258,send_chat], null),"Send"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.utils.initial_focus_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$259,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$140,"text",cljs.core.constant$keyword$260,(function (){var G__16132 = message;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16132) : cljs.core.deref.call(null,G__16132));
})(),cljs.core.constant$keyword$261,((function (message,send_chat){
return (function (p1__16119_SHARP_){
var G__16133 = message;
var G__16134 = p1__16119_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16133,G__16134) : cljs.core.reset_BANG_.call(null,G__16133,G__16134));
});})(message,send_chat))
,cljs.core.constant$keyword$262,((function (message,send_chat){
return (function (p1__16120_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16120_SHARP_.keyCode,(13))){
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$263,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_log_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_input], null)], null);
});
