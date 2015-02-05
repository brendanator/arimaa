// Compiled by ClojureScript 0.0-2727 {}
goog.provide('arimaa.chat');
goog.require('cljs.core');
goog.require('cljs_time.format');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('arimaa.utils');
goog.require('arimaa.state');
goog.require('arimaa.requests');
arimaa.chat.format_timestamp = (function format_timestamp(timestamp){
return cljs_time.format.unparse(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss"),timestamp);
});
arimaa.chat.chat_message = (function chat_message(chat){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$283,arimaa.chat.format_timestamp(cljs.core.constant$keyword$241.cljs$core$IFn$_invoke$arity$1(chat))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$264,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$23,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$245,cljs.core.constant$keyword$245.cljs$core$IFn$_invoke$arity$1(chat)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$284,cljs.core.constant$keyword$242.cljs$core$IFn$_invoke$arity$1(chat)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$285], null),arimaa.utils.markup_user_messages(cljs.core.constant$keyword$69.cljs$core$IFn$_invoke$arity$1(chat)))], null)], null);
});
arimaa.chat.chat_event = (function chat_event(chat,icon,text){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$283,arimaa.chat.format_timestamp(cljs.core.constant$keyword$241.cljs$core$IFn$_invoke$arity$1(chat))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$286,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$284,cljs.core.constant$keyword$242.cljs$core$IFn$_invoke$arity$1(chat)], null),[cljs.core.str(" "),cljs.core.str(text)].join('')], null)], null);
});
arimaa.chat.chat_row = (function chat_row(chat){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$287,(function (){var G__16986 = (((cljs.core.constant$keyword$243.cljs$core$IFn$_invoke$arity$1(chat) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$243.cljs$core$IFn$_invoke$arity$1(chat).fqn:null);
switch (G__16986) {
case "timeout":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_event,chat,cljs.core.constant$keyword$288,"timed out"], null);

break;
case "out":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_event,chat,cljs.core.constant$keyword$289,"went out"], null);

break;
case "in":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_event,chat,cljs.core.constant$keyword$290,"is coming in"], null);

break;
case "msg":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_message,chat], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.constant$keyword$243.cljs$core$IFn$_invoke$arity$1(chat))].join('')));

}
})()], null);
});
arimaa.chat.chat_log_channel = (function chat_log_channel(){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__12182__auto___17128 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12182__auto___17128,c){
return (function (){
var f__12183__auto__ = (function (){var switch__12167__auto__ = ((function (c__12182__auto___17128,c){
return (function (state_17095){
var state_val_17096 = (state_17095[(1)]);
if((state_val_17096 === (7))){
var inst_17070 = (state_17095[(7)]);
var state_17095__$1 = state_17095;
var statearr_17097_17129 = state_17095__$1;
(statearr_17097_17129[(2)] = inst_17070);

(statearr_17097_17129[(1)] = (8));


return cljs.core.constant$keyword$127;
} else {
if((state_val_17096 === (1))){
var inst_17058 = cljs.core.PersistentVector.EMPTY;
var inst_17059 = inst_17058;
var inst_17060 = null;
var state_17095__$1 = (function (){var statearr_17098 = state_17095;
(statearr_17098[(8)] = inst_17060);

(statearr_17098[(9)] = inst_17059);

return statearr_17098;
})();
var statearr_17099_17130 = state_17095__$1;
(statearr_17099_17130[(2)] = null);

(statearr_17099_17130[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_17096 === (4))){
var inst_17060 = (state_17095[(8)]);
var inst_17064 = (state_17095[(2)]);
var inst_17066 = (function (){var G__17100 = arimaa.state.username;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17100) : cljs.core.deref.call(null,G__17100));
})();
var inst_17067 = arimaa.state.auth();
var inst_17068 = arimaa.requests.fetch_chat(inst_17066,inst_17067,inst_17060);
var state_17095__$1 = (function (){var statearr_17101 = state_17095;
(statearr_17101[(10)] = inst_17064);

return statearr_17101;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17095__$1,(5),inst_17068);
} else {
if((state_val_17096 === (15))){
var inst_17087 = (state_17095[(2)]);
var state_17095__$1 = state_17095;
var statearr_17102_17131 = state_17095__$1;
(statearr_17102_17131[(2)] = inst_17087);

(statearr_17102_17131[(1)] = (11));


return cljs.core.constant$keyword$127;
} else {
if((state_val_17096 === (13))){
var inst_17080 = (state_17095[(11)]);
var inst_17077 = (state_17095[(12)]);
var inst_17059 = inst_17080;
var inst_17060 = inst_17077;
var state_17095__$1 = (function (){var statearr_17103 = state_17095;
(statearr_17103[(8)] = inst_17060);

(statearr_17103[(9)] = inst_17059);

return statearr_17103;
})();
var statearr_17104_17132 = state_17095__$1;
(statearr_17104_17132[(2)] = null);

(statearr_17104_17132[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_17096 === (6))){
var inst_17070 = (state_17095[(7)]);
var inst_17073 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17070);
var state_17095__$1 = state_17095;
var statearr_17105_17133 = state_17095__$1;
(statearr_17105_17133[(2)] = inst_17073);

(statearr_17105_17133[(1)] = (8));


return cljs.core.constant$keyword$127;
} else {
if((state_val_17096 === (3))){
var inst_17093 = (state_17095[(2)]);
var state_17095__$1 = state_17095;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17095__$1,inst_17093);
} else {
if((state_val_17096 === (12))){
var inst_17082 = (state_17095[(2)]);
var state_17095__$1 = state_17095;
if(cljs.core.truth_(inst_17082)){
var statearr_17106_17134 = state_17095__$1;
(statearr_17106_17134[(1)] = (13));

} else {
var statearr_17107_17135 = state_17095__$1;
(statearr_17107_17135[(1)] = (14));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_17096 === (2))){
var inst_17062 = cljs.core.async.timeout((500));
var state_17095__$1 = state_17095;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17095__$1,(4),inst_17062);
} else {
if((state_val_17096 === (11))){
var inst_17091 = (state_17095[(2)]);
var state_17095__$1 = state_17095;
var statearr_17108_17136 = state_17095__$1;
(statearr_17108_17136[(2)] = inst_17091);

(statearr_17108_17136[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_17096 === (9))){
var inst_17080 = (state_17095[(11)]);
var inst_17078 = (state_17095[(13)]);
var inst_17059 = (state_17095[(9)]);
var inst_17080__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_17059,inst_17078);
var state_17095__$1 = (function (){var statearr_17109 = state_17095;
(statearr_17109[(11)] = inst_17080__$1);

return statearr_17109;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17095__$1,(12),c,inst_17080__$1);
} else {
if((state_val_17096 === (5))){
var inst_17070 = (state_17095[(7)]);
var inst_17070__$1 = (state_17095[(2)]);
var inst_17071 = cljs.core.seq_QMARK_(inst_17070__$1);
var state_17095__$1 = (function (){var statearr_17112 = state_17095;
(statearr_17112[(7)] = inst_17070__$1);

return statearr_17112;
})();
if(inst_17071){
var statearr_17113_17137 = state_17095__$1;
(statearr_17113_17137[(1)] = (6));

} else {
var statearr_17114_17138 = state_17095__$1;
(statearr_17114_17138[(1)] = (7));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_17096 === (14))){
var state_17095__$1 = state_17095;
var statearr_17115_17139 = state_17095__$1;
(statearr_17115_17139[(2)] = null);

(statearr_17115_17139[(1)] = (15));


return cljs.core.constant$keyword$127;
} else {
if((state_val_17096 === (10))){
var inst_17060 = (state_17095[(8)]);
var inst_17059 = (state_17095[(9)]);
var tmp17110 = inst_17060;
var tmp17111 = inst_17059;
var inst_17059__$1 = tmp17111;
var inst_17060__$1 = tmp17110;
var state_17095__$1 = (function (){var statearr_17116 = state_17095;
(statearr_17116[(8)] = inst_17060__$1);

(statearr_17116[(9)] = inst_17059__$1);

return statearr_17116;
})();
var statearr_17117_17140 = state_17095__$1;
(statearr_17117_17140[(2)] = null);

(statearr_17117_17140[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_17096 === (8))){
var inst_17077 = (state_17095[(12)]);
var inst_17076 = (state_17095[(2)]);
var inst_17077__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17076,cljs.core.constant$keyword$246);
var inst_17078 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17076,cljs.core.constant$keyword$247);
var state_17095__$1 = (function (){var statearr_17118 = state_17095;
(statearr_17118[(12)] = inst_17077__$1);

(statearr_17118[(13)] = inst_17078);

return statearr_17118;
})();
if(cljs.core.truth_(inst_17077__$1)){
var statearr_17119_17141 = state_17095__$1;
(statearr_17119_17141[(1)] = (9));

} else {
var statearr_17120_17142 = state_17095__$1;
(statearr_17120_17142[(1)] = (10));

}

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
}
}
}
}
}
});})(c__12182__auto___17128,c))
;
return ((function (switch__12167__auto__,c__12182__auto___17128,c){
return (function() {
var state_machine__12168__auto__ = null;
var state_machine__12168__auto____0 = (function (){
var statearr_17124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17124[(0)] = state_machine__12168__auto__);

(statearr_17124[(1)] = (1));

return statearr_17124;
});
var state_machine__12168__auto____1 = (function (state_17095){
while(true){
var ret_value__12169__auto__ = (function (){try{while(true){
var result__12170__auto__ = switch__12167__auto__(state_17095);
if(cljs.core.keyword_identical_QMARK_(result__12170__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12170__auto__;
}
break;
}
}catch (e17125){if((e17125 instanceof Object)){
var ex__12171__auto__ = e17125;
var statearr_17126_17143 = state_17095;
(statearr_17126_17143[(5)] = ex__12171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17095);

return cljs.core.constant$keyword$127;
} else {
throw e17125;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12169__auto__,cljs.core.constant$keyword$127)){
var G__17144 = state_17095;
state_17095 = G__17144;
continue;
} else {
return ret_value__12169__auto__;
}
break;
}
});
state_machine__12168__auto__ = function(state_17095){
switch(arguments.length){
case 0:
return state_machine__12168__auto____0.call(this);
case 1:
return state_machine__12168__auto____1.call(this,state_17095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12168__auto____0;
state_machine__12168__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12168__auto____1;
return state_machine__12168__auto__;
})()
;})(switch__12167__auto__,c__12182__auto___17128,c))
})();
var state__12184__auto__ = (function (){var statearr_17127 = (function (){return (f__12183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12183__auto__.cljs$core$IFn$_invoke$arity$0() : f__12183__auto__.call(null));
})();
(statearr_17127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12182__auto___17128);

return statearr_17127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12184__auto__);
});})(c__12182__auto___17128,c))
);


return c;
});
arimaa.chat.chat_log = (function chat_log(chat){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.utils.scroll_bottom_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$291,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.chat.chat_row,(function (){var G__17146 = chat;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17146) : cljs.core.deref.call(null,G__17146));
})())], null)], null);
});
arimaa.chat.chat_log_view = (function chat_log_view(){
var chat = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var chat_chan = arimaa.chat.chat_log_channel();
var mounted_chat_log = cljs.core.with_meta(arimaa.chat.chat_log,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$292,((function (chat,chat_chan){
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
arimaa.requests.send_chat((function (){var G__17156 = arimaa.state.username;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17156) : cljs.core.deref.call(null,G__17156));
})(),arimaa.state.auth(),(function (){var G__17157 = message;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17157) : cljs.core.deref.call(null,G__17157));
})());

var G__17158 = message;
var G__17159 = "";
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17158,G__17159) : cljs.core.reset_BANG_.call(null,G__17158,G__17159));
});})(message))
;
return ((function (message,send_chat){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$293,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$256,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$257,send_chat], null),"Send"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$264,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.utils.initial_focus_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$252,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$45,"text",cljs.core.constant$keyword$253,(function (){var G__17160 = message;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17160) : cljs.core.deref.call(null,G__17160));
})(),cljs.core.constant$keyword$254,((function (message,send_chat){
return (function (p1__17147_SHARP_){
var G__17161 = message;
var G__17162 = p1__17147_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17161,G__17162) : cljs.core.reset_BANG_.call(null,G__17161,G__17162));
});})(message,send_chat))
,cljs.core.constant$keyword$255,((function (message,send_chat){
return (function (p1__17148_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__17148_SHARP_.keyCode,(13))){
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$294,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_log_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_input], null)], null);
});
