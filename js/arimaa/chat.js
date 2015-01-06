// Compiled by ClojureScript 0.0-2657 {}
goog.provide('arimaa.chat');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('arimaa.utils');
goog.require('arimaa.state');
goog.require('arimaa.requests');
arimaa.chat.chat_message = (function chat_message(chat){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,cljs.core.constant$keyword$214.cljs$core$IFn$_invoke$arity$1(chat)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$224,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$218,cljs.core.constant$keyword$218.cljs$core$IFn$_invoke$arity$1(chat)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$248,cljs.core.constant$keyword$215.cljs$core$IFn$_invoke$arity$1(chat)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$249], null),arimaa.utils.markup_user_messages(cljs.core.constant$keyword$147.cljs$core$IFn$_invoke$arity$1(chat)))], null)], null);
});
arimaa.chat.chat_event = (function chat_event(chat,icon,text){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,cljs.core.constant$keyword$214.cljs$core$IFn$_invoke$arity$1(chat)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$248,cljs.core.constant$keyword$215.cljs$core$IFn$_invoke$arity$1(chat)], null),[cljs.core.str(" "),cljs.core.str(text)].join('')], null)], null);
});
arimaa.chat.chat_row = (function chat_row(chat){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$251,(function (){var G__16123 = (((cljs.core.constant$keyword$216.cljs$core$IFn$_invoke$arity$1(chat) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$216.cljs$core$IFn$_invoke$arity$1(chat).fqn:null);
switch (G__16123) {
case "timeout":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_event,chat,cljs.core.constant$keyword$252,"timed out"], null);

break;
case "out":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_event,chat,cljs.core.constant$keyword$253,"went out"], null);

break;
case "in":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_event,chat,cljs.core.constant$keyword$254,"is coming in"], null);

break;
case "msg":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_message,chat], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.constant$keyword$216.cljs$core$IFn$_invoke$arity$1(chat))].join('')));

}
})()], null);
});
arimaa.chat.chat_log_channel = (function chat_log_channel(){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__11621__auto___16265 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11621__auto___16265,c){
return (function (){
var f__11622__auto__ = (function (){var switch__11541__auto__ = ((function (c__11621__auto___16265,c){
return (function (state_16232){
var state_val_16233 = (state_16232[(1)]);
if((state_val_16233 === (7))){
var inst_16207 = (state_16232[(7)]);
var state_16232__$1 = state_16232;
var statearr_16234_16266 = state_16232__$1;
(statearr_16234_16266[(2)] = inst_16207);

(statearr_16234_16266[(1)] = (8));


return cljs.core.constant$keyword$65;
} else {
if((state_val_16233 === (1))){
var inst_16195 = cljs.core.PersistentVector.EMPTY;
var inst_16196 = inst_16195;
var inst_16197 = null;
var state_16232__$1 = (function (){var statearr_16235 = state_16232;
(statearr_16235[(8)] = inst_16197);

(statearr_16235[(9)] = inst_16196);

return statearr_16235;
})();
var statearr_16236_16267 = state_16232__$1;
(statearr_16236_16267[(2)] = null);

(statearr_16236_16267[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_16233 === (4))){
var inst_16197 = (state_16232[(8)]);
var inst_16201 = (state_16232[(2)]);
var inst_16203 = (function (){var G__16237 = arimaa.state.username;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16237) : cljs.core.deref.call(null,G__16237));
})();
var inst_16204 = arimaa.state.auth();
var inst_16205 = arimaa.requests.fetch_chat(inst_16203,inst_16204,inst_16197);
var state_16232__$1 = (function (){var statearr_16238 = state_16232;
(statearr_16238[(10)] = inst_16201);

return statearr_16238;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16232__$1,(5),inst_16205);
} else {
if((state_val_16233 === (15))){
var inst_16224 = (state_16232[(2)]);
var state_16232__$1 = state_16232;
var statearr_16239_16268 = state_16232__$1;
(statearr_16239_16268[(2)] = inst_16224);

(statearr_16239_16268[(1)] = (11));


return cljs.core.constant$keyword$65;
} else {
if((state_val_16233 === (13))){
var inst_16217 = (state_16232[(11)]);
var inst_16214 = (state_16232[(12)]);
var inst_16196 = inst_16217;
var inst_16197 = inst_16214;
var state_16232__$1 = (function (){var statearr_16240 = state_16232;
(statearr_16240[(8)] = inst_16197);

(statearr_16240[(9)] = inst_16196);

return statearr_16240;
})();
var statearr_16241_16269 = state_16232__$1;
(statearr_16241_16269[(2)] = null);

(statearr_16241_16269[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_16233 === (6))){
var inst_16207 = (state_16232[(7)]);
var inst_16210 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16207);
var state_16232__$1 = state_16232;
var statearr_16242_16270 = state_16232__$1;
(statearr_16242_16270[(2)] = inst_16210);

(statearr_16242_16270[(1)] = (8));


return cljs.core.constant$keyword$65;
} else {
if((state_val_16233 === (3))){
var inst_16230 = (state_16232[(2)]);
var state_16232__$1 = state_16232;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16232__$1,inst_16230);
} else {
if((state_val_16233 === (12))){
var inst_16219 = (state_16232[(2)]);
var state_16232__$1 = state_16232;
if(cljs.core.truth_(inst_16219)){
var statearr_16243_16271 = state_16232__$1;
(statearr_16243_16271[(1)] = (13));

} else {
var statearr_16244_16272 = state_16232__$1;
(statearr_16244_16272[(1)] = (14));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_16233 === (2))){
var inst_16199 = cljs.core.async.timeout((500));
var state_16232__$1 = state_16232;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16232__$1,(4),inst_16199);
} else {
if((state_val_16233 === (11))){
var inst_16228 = (state_16232[(2)]);
var state_16232__$1 = state_16232;
var statearr_16245_16273 = state_16232__$1;
(statearr_16245_16273[(2)] = inst_16228);

(statearr_16245_16273[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_16233 === (9))){
var inst_16215 = (state_16232[(13)]);
var inst_16196 = (state_16232[(9)]);
var inst_16217 = (state_16232[(11)]);
var inst_16217__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_16196,inst_16215);
var state_16232__$1 = (function (){var statearr_16246 = state_16232;
(statearr_16246[(11)] = inst_16217__$1);

return statearr_16246;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16232__$1,(12),c,inst_16217__$1);
} else {
if((state_val_16233 === (5))){
var inst_16207 = (state_16232[(7)]);
var inst_16207__$1 = (state_16232[(2)]);
var inst_16208 = cljs.core.seq_QMARK_(inst_16207__$1);
var state_16232__$1 = (function (){var statearr_16249 = state_16232;
(statearr_16249[(7)] = inst_16207__$1);

return statearr_16249;
})();
if(inst_16208){
var statearr_16250_16274 = state_16232__$1;
(statearr_16250_16274[(1)] = (6));

} else {
var statearr_16251_16275 = state_16232__$1;
(statearr_16251_16275[(1)] = (7));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_16233 === (14))){
var state_16232__$1 = state_16232;
var statearr_16252_16276 = state_16232__$1;
(statearr_16252_16276[(2)] = null);

(statearr_16252_16276[(1)] = (15));


return cljs.core.constant$keyword$65;
} else {
if((state_val_16233 === (10))){
var inst_16197 = (state_16232[(8)]);
var inst_16196 = (state_16232[(9)]);
var tmp16247 = inst_16197;
var tmp16248 = inst_16196;
var inst_16196__$1 = tmp16248;
var inst_16197__$1 = tmp16247;
var state_16232__$1 = (function (){var statearr_16253 = state_16232;
(statearr_16253[(8)] = inst_16197__$1);

(statearr_16253[(9)] = inst_16196__$1);

return statearr_16253;
})();
var statearr_16254_16277 = state_16232__$1;
(statearr_16254_16277[(2)] = null);

(statearr_16254_16277[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_16233 === (8))){
var inst_16214 = (state_16232[(12)]);
var inst_16213 = (state_16232[(2)]);
var inst_16214__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16213,cljs.core.constant$keyword$219);
var inst_16215 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16213,cljs.core.constant$keyword$220);
var state_16232__$1 = (function (){var statearr_16255 = state_16232;
(statearr_16255[(13)] = inst_16215);

(statearr_16255[(12)] = inst_16214__$1);

return statearr_16255;
})();
if(cljs.core.truth_(inst_16214__$1)){
var statearr_16256_16278 = state_16232__$1;
(statearr_16256_16278[(1)] = (9));

} else {
var statearr_16257_16279 = state_16232__$1;
(statearr_16257_16279[(1)] = (10));

}

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
}
}
}
}
}
});})(c__11621__auto___16265,c))
;
return ((function (switch__11541__auto__,c__11621__auto___16265,c){
return (function() {
var state_machine__11542__auto__ = null;
var state_machine__11542__auto____0 = (function (){
var statearr_16261 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16261[(0)] = state_machine__11542__auto__);

(statearr_16261[(1)] = (1));

return statearr_16261;
});
var state_machine__11542__auto____1 = (function (state_16232){
while(true){
var ret_value__11543__auto__ = (function (){try{while(true){
var result__11544__auto__ = switch__11541__auto__(state_16232);
if(cljs.core.keyword_identical_QMARK_(result__11544__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11544__auto__;
}
break;
}
}catch (e16262){if((e16262 instanceof Object)){
var ex__11545__auto__ = e16262;
var statearr_16263_16280 = state_16232;
(statearr_16263_16280[(5)] = ex__11545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16232);

return cljs.core.constant$keyword$65;
} else {
throw e16262;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11543__auto__,cljs.core.constant$keyword$65)){
var G__16281 = state_16232;
state_16232 = G__16281;
continue;
} else {
return ret_value__11543__auto__;
}
break;
}
});
state_machine__11542__auto__ = function(state_16232){
switch(arguments.length){
case 0:
return state_machine__11542__auto____0.call(this);
case 1:
return state_machine__11542__auto____1.call(this,state_16232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11542__auto____0;
state_machine__11542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11542__auto____1;
return state_machine__11542__auto__;
})()
;})(switch__11541__auto__,c__11621__auto___16265,c))
})();
var state__11623__auto__ = (function (){var statearr_16264 = (function (){return (f__11622__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11622__auto__.cljs$core$IFn$_invoke$arity$0() : f__11622__auto__.call(null));
})();
(statearr_16264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11621__auto___16265);

return statearr_16264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11623__auto__);
});})(c__11621__auto___16265,c))
);


return c;
});
arimaa.chat.chat_log = (function chat_log(chat){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.utils.scroll_bottom_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$255,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.chat.chat_row,(function (){var G__16283 = chat;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16283) : cljs.core.deref.call(null,G__16283));
})())], null)], null);
});
arimaa.chat.chat_log_view = (function chat_log_view(){
var chat = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var chat_chan = arimaa.chat.chat_log_channel();
var mounted_chat_log = cljs.core.with_meta(arimaa.chat.chat_log,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$256,((function (chat,chat_chan){
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
arimaa.requests.send_chat((function (){var G__16293 = arimaa.state.username;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16293) : cljs.core.deref.call(null,G__16293));
})(),arimaa.state.auth(),(function (){var G__16294 = message;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16294) : cljs.core.deref.call(null,G__16294));
})());

var G__16295 = message;
var G__16296 = "";
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16295,G__16296) : cljs.core.reset_BANG_.call(null,G__16295,G__16296));
});})(message))
;
return ((function (message,send_chat){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$257,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$258,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$259,send_chat], null),"Send"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.utils.initial_focus_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$260,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$123,"text",cljs.core.constant$keyword$261,(function (){var G__16297 = message;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16297) : cljs.core.deref.call(null,G__16297));
})(),cljs.core.constant$keyword$262,((function (message,send_chat){
return (function (p1__16284_SHARP_){
var G__16298 = message;
var G__16299 = p1__16284_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16298,G__16299) : cljs.core.reset_BANG_.call(null,G__16298,G__16299));
});})(message,send_chat))
,cljs.core.constant$keyword$263,((function (message,send_chat){
return (function (p1__16285_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16285_SHARP_.keyCode,(13))){
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$264,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_log_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_input], null)], null);
});
