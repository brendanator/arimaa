// Compiled by ClojureScript 0.0-2511
goog.provide('arimaa.chat');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('arimaa.utils');
goog.require('arimaa.state');
goog.require('arimaa.requests');
arimaa.chat.chat_message = (function chat_message(chat){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$211,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$238,cljs.core.constant$keyword$201.cljs$core$IFn$_invoke$arity$1(chat)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$228,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$23,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$205,cljs.core.constant$keyword$205.cljs$core$IFn$_invoke$arity$1(chat)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$239,cljs.core.constant$keyword$202.cljs$core$IFn$_invoke$arity$1(chat)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$240,cljs.core.constant$keyword$142.cljs$core$IFn$_invoke$arity$1(chat)], null)], null)], null);
});
arimaa.chat.chat_event = (function chat_event(chat,icon,text){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$211,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$238,cljs.core.constant$keyword$201.cljs$core$IFn$_invoke$arity$1(chat)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$241,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$239,cljs.core.constant$keyword$202.cljs$core$IFn$_invoke$arity$1(chat)], null),[cljs.core.str(" "),cljs.core.str(text)].join('')], null)], null);
});
arimaa.chat.chat_row = (function chat_row(chat){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,(function (){var G__16085 = (((cljs.core.constant$keyword$203.cljs$core$IFn$_invoke$arity$1(chat) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$203.cljs$core$IFn$_invoke$arity$1(chat).fqn:null);
switch (G__16085) {
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
var c__11826__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11826__auto__){
return (function (){
var f__11827__auto__ = (function (){var switch__11746__auto__ = ((function (c__11826__auto__){
return (function (state_16172){
var state_val_16173 = (state_16172[(1)]);
if((state_val_16173 === (7))){
var inst_16153 = (state_16172[(7)]);
var state_16172__$1 = state_16172;
var statearr_16174_16199 = state_16172__$1;
(statearr_16174_16199[(2)] = inst_16153);

(statearr_16174_16199[(1)] = (8));


return cljs.core.constant$keyword$61;
} else {
if((state_val_16173 === (1))){
var state_16172__$1 = state_16172;
var statearr_16175_16200 = state_16172__$1;
(statearr_16175_16200[(2)] = null);

(statearr_16175_16200[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_16173 === (4))){
var inst_16146 = (state_16172[(2)]);
var inst_16148 = (function (){var G__16176 = arimaa.state.username;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16176) : cljs.core.deref.call(null,G__16176));
})();
var inst_16149 = arimaa.state.auth();
var inst_16150 = (function (){var G__16177 = latest_data;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16177) : cljs.core.deref.call(null,G__16177));
})();
var inst_16151 = arimaa.requests.fetch_chat(inst_16148,inst_16149,inst_16150);
var state_16172__$1 = (function (){var statearr_16178 = state_16172;
(statearr_16178[(8)] = inst_16146);

return statearr_16178;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16172__$1,(5),inst_16151);
} else {
if((state_val_16173 === (6))){
var inst_16153 = (state_16172[(7)]);
var inst_16156 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16153);
var state_16172__$1 = state_16172;
var statearr_16179_16201 = state_16172__$1;
(statearr_16179_16201[(2)] = inst_16156);

(statearr_16179_16201[(1)] = (8));


return cljs.core.constant$keyword$61;
} else {
if((state_val_16173 === (3))){
var inst_16170 = (state_16172[(2)]);
var state_16172__$1 = state_16172;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16172__$1,inst_16170);
} else {
if((state_val_16173 === (2))){
var inst_16144 = cljs.core.async.timeout((500));
var state_16172__$1 = state_16172;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16172__$1,(4),inst_16144);
} else {
if((state_val_16173 === (11))){
var inst_16167 = (state_16172[(2)]);
var state_16172__$1 = (function (){var statearr_16180 = state_16172;
(statearr_16180[(9)] = inst_16167);

return statearr_16180;
})();
var statearr_16181_16202 = state_16172__$1;
(statearr_16181_16202[(2)] = null);

(statearr_16181_16202[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_16173 === (9))){
var inst_16160 = (state_16172[(10)]);
var inst_16164 = (function (){var G__16182 = latest_data;
var G__16183 = inst_16160;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16182,G__16183) : cljs.core.reset_BANG_.call(null,G__16182,G__16183));
})();
var state_16172__$1 = state_16172;
var statearr_16184_16203 = state_16172__$1;
(statearr_16184_16203[(2)] = inst_16164);

(statearr_16184_16203[(1)] = (11));


return cljs.core.constant$keyword$61;
} else {
if((state_val_16173 === (5))){
var inst_16153 = (state_16172[(7)]);
var inst_16153__$1 = (state_16172[(2)]);
var inst_16154 = cljs.core.seq_QMARK_(inst_16153__$1);
var state_16172__$1 = (function (){var statearr_16185 = state_16172;
(statearr_16185[(7)] = inst_16153__$1);

return statearr_16185;
})();
if(inst_16154){
var statearr_16186_16204 = state_16172__$1;
(statearr_16186_16204[(1)] = (6));

} else {
var statearr_16187_16205 = state_16172__$1;
(statearr_16187_16205[(1)] = (7));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_16173 === (10))){
var state_16172__$1 = state_16172;
var statearr_16188_16206 = state_16172__$1;
(statearr_16188_16206[(2)] = null);

(statearr_16188_16206[(1)] = (11));


return cljs.core.constant$keyword$61;
} else {
if((state_val_16173 === (8))){
var inst_16160 = (state_16172[(10)]);
var inst_16159 = (state_16172[(2)]);
var inst_16160__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16159,cljs.core.constant$keyword$206);
var inst_16161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16159,cljs.core.constant$keyword$207);
var inst_16162 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(chatter,cljs.core.concat,inst_16161);
var state_16172__$1 = (function (){var statearr_16189 = state_16172;
(statearr_16189[(11)] = inst_16162);

(statearr_16189[(10)] = inst_16160__$1);

return statearr_16189;
})();
if(cljs.core.truth_(inst_16160__$1)){
var statearr_16190_16207 = state_16172__$1;
(statearr_16190_16207[(1)] = (9));

} else {
var statearr_16191_16208 = state_16172__$1;
(statearr_16191_16208[(1)] = (10));

}

return cljs.core.constant$keyword$61;
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
});})(c__11826__auto__))
;
return ((function (switch__11746__auto__,c__11826__auto__){
return (function() {
var state_machine__11747__auto__ = null;
var state_machine__11747__auto____0 = (function (){
var statearr_16195 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16195[(0)] = state_machine__11747__auto__);

(statearr_16195[(1)] = (1));

return statearr_16195;
});
var state_machine__11747__auto____1 = (function (state_16172){
while(true){
var ret_value__11748__auto__ = (function (){try{while(true){
var result__11749__auto__ = switch__11746__auto__(state_16172);
if(cljs.core.keyword_identical_QMARK_(result__11749__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11749__auto__;
}
break;
}
}catch (e16196){if((e16196 instanceof Object)){
var ex__11750__auto__ = e16196;
var statearr_16197_16209 = state_16172;
(statearr_16197_16209[(5)] = ex__11750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16172);

return cljs.core.constant$keyword$61;
} else {
throw e16196;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11748__auto__,cljs.core.constant$keyword$61)){
var G__16210 = state_16172;
state_16172 = G__16210;
continue;
} else {
return ret_value__11748__auto__;
}
break;
}
});
state_machine__11747__auto__ = function(state_16172){
switch(arguments.length){
case 0:
return state_machine__11747__auto____0.call(this);
case 1:
return state_machine__11747__auto____1.call(this,state_16172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11747__auto____0;
state_machine__11747__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11747__auto____1;
return state_machine__11747__auto__;
})()
;})(switch__11746__auto__,c__11826__auto__))
})();
var state__11828__auto__ = (function (){var statearr_16198 = (function (){return (f__11827__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11827__auto__.cljs$core$IFn$_invoke$arity$0() : f__11827__auto__.call(null));
})();
(statearr_16198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11826__auto__);

return statearr_16198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11828__auto__);
});})(c__11826__auto__))
);

return c__11826__auto__;
});
arimaa.chat.chat_log = (function chat_log(){
var chatter = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var latest_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
arimaa.chat.update_chat_log(chatter,latest_data);

return ((function (chatter,latest_data){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.utils.scroll_bottom_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.chat.chat_row,(function (){var G__16212 = chatter;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16212) : cljs.core.deref.call(null,G__16212));
})())], null)], null);
});
;})(chatter,latest_data))
});
arimaa.chat.chat_input = (function chat_input(){
var message = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var send_chat = ((function (message){
return (function (){
arimaa.requests.send_chat((function (){var G__16222 = arimaa.state.username;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16222) : cljs.core.deref.call(null,G__16222));
})(),arimaa.state.auth(),(function (){var G__16223 = message;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16223) : cljs.core.deref.call(null,G__16223));
})());

var G__16224 = message;
var G__16225 = "";
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16224,G__16225) : cljs.core.reset_BANG_.call(null,G__16224,G__16225));
});})(message))
;
return ((function (message,send_chat){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$217,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$218,send_chat], null),"Send"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$228,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.utils.initial_focus_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$213,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$118,"text",cljs.core.constant$keyword$214,(function (){var G__16226 = message;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16226) : cljs.core.deref.call(null,G__16226));
})(),cljs.core.constant$keyword$215,((function (message,send_chat){
return (function (p1__16213_SHARP_){
var G__16227 = message;
var G__16228 = p1__16213_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16227,G__16228) : cljs.core.reset_BANG_.call(null,G__16227,G__16228));
});})(message,send_chat))
,cljs.core.constant$keyword$216,((function (message,send_chat){
return (function (p1__16214_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16214_SHARP_.keyCode,(13))){
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
