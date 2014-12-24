// Compiled by ClojureScript 0.0-2511
goog.provide('arimaa.chat');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('arimaa.state');
goog.require('arimaa.requests');
arimaa.chat.chat_message = (function chat_message(chat){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$207,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$236,cljs.core.constant$keyword$198.cljs$core$IFn$_invoke$arity$1(chat)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$226,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$23,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$202,cljs.core.constant$keyword$202.cljs$core$IFn$_invoke$arity$1(chat)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$237,cljs.core.constant$keyword$199.cljs$core$IFn$_invoke$arity$1(chat)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$238,cljs.core.constant$keyword$139.cljs$core$IFn$_invoke$arity$1(chat)], null)], null)], null);
});
arimaa.chat.chat_event = (function chat_event(chat,icon,text){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$207,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$236,cljs.core.constant$keyword$198.cljs$core$IFn$_invoke$arity$1(chat)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$239,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$237,cljs.core.constant$keyword$199.cljs$core$IFn$_invoke$arity$1(chat)], null),[cljs.core.str(" "),cljs.core.str(text)].join('')], null)], null);
});
arimaa.chat.chat_row = (function chat_row(chat){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$240,(function (){var G__16083 = (((cljs.core.constant$keyword$200.cljs$core$IFn$_invoke$arity$1(chat) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$200.cljs$core$IFn$_invoke$arity$1(chat).fqn:null);
switch (G__16083) {
case "timeout":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_event,chat,cljs.core.constant$keyword$241,"timed out"], null);

break;
case "out":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_event,chat,cljs.core.constant$keyword$242,"went out"], null);

break;
case "in":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_event,chat,cljs.core.constant$keyword$243,"is coming in"], null);

break;
case "msg":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_message,chat], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.constant$keyword$200.cljs$core$IFn$_invoke$arity$1(chat))].join('')));

}
})()], null);
});
arimaa.chat.update_chat_log = (function update_chat_log(chatter,latest_data){
var c__11819__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11819__auto__){
return (function (){
var f__11820__auto__ = (function (){var switch__11739__auto__ = ((function (c__11819__auto__){
return (function (state_16170){
var state_val_16171 = (state_16170[(1)]);
if((state_val_16171 === (7))){
var inst_16151 = (state_16170[(7)]);
var state_16170__$1 = state_16170;
var statearr_16172_16197 = state_16170__$1;
(statearr_16172_16197[(2)] = inst_16151);

(statearr_16172_16197[(1)] = (8));


return cljs.core.constant$keyword$58;
} else {
if((state_val_16171 === (1))){
var state_16170__$1 = state_16170;
var statearr_16173_16198 = state_16170__$1;
(statearr_16173_16198[(2)] = null);

(statearr_16173_16198[(1)] = (2));


return cljs.core.constant$keyword$58;
} else {
if((state_val_16171 === (4))){
var inst_16144 = (state_16170[(2)]);
var inst_16146 = (function (){var G__16174 = arimaa.state.username;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16174) : cljs.core.deref.call(null,G__16174));
})();
var inst_16147 = arimaa.state.auth();
var inst_16148 = (function (){var G__16175 = latest_data;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16175) : cljs.core.deref.call(null,G__16175));
})();
var inst_16149 = arimaa.requests.fetch_chat(inst_16146,inst_16147,inst_16148);
var state_16170__$1 = (function (){var statearr_16176 = state_16170;
(statearr_16176[(8)] = inst_16144);

return statearr_16176;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16170__$1,(5),inst_16149);
} else {
if((state_val_16171 === (6))){
var inst_16151 = (state_16170[(7)]);
var inst_16154 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16151);
var state_16170__$1 = state_16170;
var statearr_16177_16199 = state_16170__$1;
(statearr_16177_16199[(2)] = inst_16154);

(statearr_16177_16199[(1)] = (8));


return cljs.core.constant$keyword$58;
} else {
if((state_val_16171 === (3))){
var inst_16168 = (state_16170[(2)]);
var state_16170__$1 = state_16170;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16170__$1,inst_16168);
} else {
if((state_val_16171 === (2))){
var inst_16142 = cljs.core.async.timeout((500));
var state_16170__$1 = state_16170;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16170__$1,(4),inst_16142);
} else {
if((state_val_16171 === (11))){
var inst_16165 = (state_16170[(2)]);
var state_16170__$1 = (function (){var statearr_16178 = state_16170;
(statearr_16178[(9)] = inst_16165);

return statearr_16178;
})();
var statearr_16179_16200 = state_16170__$1;
(statearr_16179_16200[(2)] = null);

(statearr_16179_16200[(1)] = (2));


return cljs.core.constant$keyword$58;
} else {
if((state_val_16171 === (9))){
var inst_16158 = (state_16170[(10)]);
var inst_16162 = (function (){var G__16180 = latest_data;
var G__16181 = inst_16158;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16180,G__16181) : cljs.core.reset_BANG_.call(null,G__16180,G__16181));
})();
var state_16170__$1 = state_16170;
var statearr_16182_16201 = state_16170__$1;
(statearr_16182_16201[(2)] = inst_16162);

(statearr_16182_16201[(1)] = (11));


return cljs.core.constant$keyword$58;
} else {
if((state_val_16171 === (5))){
var inst_16151 = (state_16170[(7)]);
var inst_16151__$1 = (state_16170[(2)]);
var inst_16152 = cljs.core.seq_QMARK_(inst_16151__$1);
var state_16170__$1 = (function (){var statearr_16183 = state_16170;
(statearr_16183[(7)] = inst_16151__$1);

return statearr_16183;
})();
if(inst_16152){
var statearr_16184_16202 = state_16170__$1;
(statearr_16184_16202[(1)] = (6));

} else {
var statearr_16185_16203 = state_16170__$1;
(statearr_16185_16203[(1)] = (7));

}

return cljs.core.constant$keyword$58;
} else {
if((state_val_16171 === (10))){
var state_16170__$1 = state_16170;
var statearr_16186_16204 = state_16170__$1;
(statearr_16186_16204[(2)] = null);

(statearr_16186_16204[(1)] = (11));


return cljs.core.constant$keyword$58;
} else {
if((state_val_16171 === (8))){
var inst_16158 = (state_16170[(10)]);
var inst_16157 = (state_16170[(2)]);
var inst_16158__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16157,cljs.core.constant$keyword$203);
var inst_16159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16157,cljs.core.constant$keyword$204);
var inst_16160 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(chatter,cljs.core.concat,inst_16159);
var state_16170__$1 = (function (){var statearr_16187 = state_16170;
(statearr_16187[(10)] = inst_16158__$1);

(statearr_16187[(11)] = inst_16160);

return statearr_16187;
})();
if(cljs.core.truth_(inst_16158__$1)){
var statearr_16188_16205 = state_16170__$1;
(statearr_16188_16205[(1)] = (9));

} else {
var statearr_16189_16206 = state_16170__$1;
(statearr_16189_16206[(1)] = (10));

}

return cljs.core.constant$keyword$58;
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
});})(c__11819__auto__))
;
return ((function (switch__11739__auto__,c__11819__auto__){
return (function() {
var state_machine__11740__auto__ = null;
var state_machine__11740__auto____0 = (function (){
var statearr_16193 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16193[(0)] = state_machine__11740__auto__);

(statearr_16193[(1)] = (1));

return statearr_16193;
});
var state_machine__11740__auto____1 = (function (state_16170){
while(true){
var ret_value__11741__auto__ = (function (){try{while(true){
var result__11742__auto__ = switch__11739__auto__(state_16170);
if(cljs.core.keyword_identical_QMARK_(result__11742__auto__,cljs.core.constant$keyword$58)){
continue;
} else {
return result__11742__auto__;
}
break;
}
}catch (e16194){if((e16194 instanceof Object)){
var ex__11743__auto__ = e16194;
var statearr_16195_16207 = state_16170;
(statearr_16195_16207[(5)] = ex__11743__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16170);

return cljs.core.constant$keyword$58;
} else {
throw e16194;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11741__auto__,cljs.core.constant$keyword$58)){
var G__16208 = state_16170;
state_16170 = G__16208;
continue;
} else {
return ret_value__11741__auto__;
}
break;
}
});
state_machine__11740__auto__ = function(state_16170){
switch(arguments.length){
case 0:
return state_machine__11740__auto____0.call(this);
case 1:
return state_machine__11740__auto____1.call(this,state_16170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11740__auto____0;
state_machine__11740__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11740__auto____1;
return state_machine__11740__auto__;
})()
;})(switch__11739__auto__,c__11819__auto__))
})();
var state__11821__auto__ = (function (){var statearr_16196 = (function (){return (f__11820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11820__auto__.cljs$core$IFn$_invoke$arity$0() : f__11820__auto__.call(null));
})();
(statearr_16196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11819__auto__);

return statearr_16196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11821__auto__);
});})(c__11819__auto__))
);

return c__11819__auto__;
});
arimaa.chat.chat_log = (function chat_log(){
var chatter = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var latest_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
arimaa.chat.update_chat_log(chatter,latest_data);

return ((function (chatter,latest_data){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$244,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.chat.chat_row,(function (){var G__16210 = chatter;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16210) : cljs.core.deref.call(null,G__16210));
})())], null);
});
;})(chatter,latest_data))
});
arimaa.chat.scroll_bottom_chat_log = (function (){var scroll_bottom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return cljs.core.with_meta(arimaa.chat.chat_log,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$245,((function (scroll_bottom){
return (function (this$){
var element = reagent.core.dom_node(this$);
var G__16211 = scroll_bottom;
var G__16212 = (element.scrollTop === (element.scrollHeight - element.clientHeight));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16211,G__16212) : cljs.core.reset_BANG_.call(null,G__16211,G__16212));
});})(scroll_bottom))
,cljs.core.constant$keyword$246,((function (scroll_bottom){
return (function (this$){
if(cljs.core.truth_((function (){var G__16213 = scroll_bottom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16213) : cljs.core.deref.call(null,G__16213));
})())){
var element = reagent.core.dom_node(this$);
return element.scrollTop = element.scrollHeight;
} else {
return null;
}
});})(scroll_bottom))
], null));
})();
arimaa.chat.chat_text_input = (function chat_text_input(message,send_chat){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$209,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$115,"text",cljs.core.constant$keyword$210,(function (){var G__16219 = message;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16219) : cljs.core.deref.call(null,G__16219));
})(),cljs.core.constant$keyword$211,(function (p1__16214_SHARP_){
var G__16220 = message;
var G__16221 = p1__16214_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16220,G__16221) : cljs.core.reset_BANG_.call(null,G__16220,G__16221));
}),cljs.core.constant$keyword$212,(function (p1__16215_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16215_SHARP_.keyCode,(13))){
return (send_chat.cljs$core$IFn$_invoke$arity$0 ? send_chat.cljs$core$IFn$_invoke$arity$0() : send_chat.call(null));
} else {
return null;
}
})], null)], null);
});
arimaa.chat.focused_chat_text_input = cljs.core.with_meta(arimaa.chat.chat_text_input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$213,(function (p1__16222_SHARP_){
return reagent.core.dom_node(p1__16222_SHARP_).focus();
})], null));
arimaa.chat.chat_input = (function chat_input(){
var message = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var send_chat = ((function (message){
return (function (){
arimaa.requests.send_chat((function (){var G__16227 = arimaa.state.username;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16227) : cljs.core.deref.call(null,G__16227));
})(),arimaa.state.auth(),(function (){var G__16228 = message;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16228) : cljs.core.deref.call(null,G__16228));
})());

var G__16229 = message;
var G__16230 = "";
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16229,G__16230) : cljs.core.reset_BANG_.call(null,G__16229,G__16230));
});})(message))
;
return ((function (message,send_chat){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$215,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$216,send_chat], null),"Send"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$226,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.focused_chat_text_input,message,send_chat], null)], null)], null);
});
;})(message,send_chat))
});
arimaa.chat.chat_view = (function chat_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$248,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.scroll_bottom_chat_log], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_input], null)], null);
});
