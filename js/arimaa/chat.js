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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,arimaa.chat.format_timestamp(cljs.core.constant$keyword$235.cljs$core$IFn$_invoke$arity$1(chat))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$251,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$117,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$239,cljs.core.constant$keyword$239.cljs$core$IFn$_invoke$arity$1(chat)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$252,cljs.core.constant$keyword$236.cljs$core$IFn$_invoke$arity$1(chat)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$253], null),arimaa.utils.markup_user_messages(cljs.core.constant$keyword$163.cljs$core$IFn$_invoke$arity$1(chat)))], null)], null);
});
arimaa.chat.chat_event = (function chat_event(chat,icon,text){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,arimaa.chat.format_timestamp(cljs.core.constant$keyword$235.cljs$core$IFn$_invoke$arity$1(chat))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$254,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$252,cljs.core.constant$keyword$236.cljs$core$IFn$_invoke$arity$1(chat)], null),[cljs.core.str(" "),cljs.core.str(text)].join('')], null)], null);
});
arimaa.chat.chat_row = (function chat_row(chat){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$255,(function (){var G__16379 = (((cljs.core.constant$keyword$237.cljs$core$IFn$_invoke$arity$1(chat) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$237.cljs$core$IFn$_invoke$arity$1(chat).fqn:null);
switch (G__16379) {
case "timeout":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_event,chat,cljs.core.constant$keyword$256,"timed out"], null);

break;
case "out":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_event,chat,cljs.core.constant$keyword$257,"went out"], null);

break;
case "in":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_event,chat,cljs.core.constant$keyword$258,"is coming in"], null);

break;
case "msg":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_message,chat], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.constant$keyword$237.cljs$core$IFn$_invoke$arity$1(chat))].join('')));

}
})()], null);
});
arimaa.chat.chat_log_channel = (function chat_log_channel(){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__11733__auto___16521 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11733__auto___16521,c){
return (function (){
var f__11734__auto__ = (function (){var switch__11653__auto__ = ((function (c__11733__auto___16521,c){
return (function (state_16488){
var state_val_16489 = (state_16488[(1)]);
if((state_val_16489 === (7))){
var inst_16463 = (state_16488[(7)]);
var state_16488__$1 = state_16488;
var statearr_16490_16522 = state_16488__$1;
(statearr_16490_16522[(2)] = inst_16463);

(statearr_16490_16522[(1)] = (8));


return cljs.core.constant$keyword$65;
} else {
if((state_val_16489 === (1))){
var inst_16451 = cljs.core.PersistentVector.EMPTY;
var inst_16452 = inst_16451;
var inst_16453 = null;
var state_16488__$1 = (function (){var statearr_16491 = state_16488;
(statearr_16491[(8)] = inst_16452);

(statearr_16491[(9)] = inst_16453);

return statearr_16491;
})();
var statearr_16492_16523 = state_16488__$1;
(statearr_16492_16523[(2)] = null);

(statearr_16492_16523[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_16489 === (4))){
var inst_16453 = (state_16488[(9)]);
var inst_16457 = (state_16488[(2)]);
var inst_16459 = (function (){var G__16493 = arimaa.state.username;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16493) : cljs.core.deref.call(null,G__16493));
})();
var inst_16460 = arimaa.state.auth();
var inst_16461 = arimaa.requests.fetch_chat(inst_16459,inst_16460,inst_16453);
var state_16488__$1 = (function (){var statearr_16494 = state_16488;
(statearr_16494[(10)] = inst_16457);

return statearr_16494;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16488__$1,(5),inst_16461);
} else {
if((state_val_16489 === (15))){
var inst_16480 = (state_16488[(2)]);
var state_16488__$1 = state_16488;
var statearr_16495_16524 = state_16488__$1;
(statearr_16495_16524[(2)] = inst_16480);

(statearr_16495_16524[(1)] = (11));


return cljs.core.constant$keyword$65;
} else {
if((state_val_16489 === (13))){
var inst_16470 = (state_16488[(11)]);
var inst_16473 = (state_16488[(12)]);
var inst_16452 = inst_16473;
var inst_16453 = inst_16470;
var state_16488__$1 = (function (){var statearr_16496 = state_16488;
(statearr_16496[(8)] = inst_16452);

(statearr_16496[(9)] = inst_16453);

return statearr_16496;
})();
var statearr_16497_16525 = state_16488__$1;
(statearr_16497_16525[(2)] = null);

(statearr_16497_16525[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_16489 === (6))){
var inst_16463 = (state_16488[(7)]);
var inst_16466 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16463);
var state_16488__$1 = state_16488;
var statearr_16498_16526 = state_16488__$1;
(statearr_16498_16526[(2)] = inst_16466);

(statearr_16498_16526[(1)] = (8));


return cljs.core.constant$keyword$65;
} else {
if((state_val_16489 === (3))){
var inst_16486 = (state_16488[(2)]);
var state_16488__$1 = state_16488;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16488__$1,inst_16486);
} else {
if((state_val_16489 === (12))){
var inst_16475 = (state_16488[(2)]);
var state_16488__$1 = state_16488;
if(cljs.core.truth_(inst_16475)){
var statearr_16499_16527 = state_16488__$1;
(statearr_16499_16527[(1)] = (13));

} else {
var statearr_16500_16528 = state_16488__$1;
(statearr_16500_16528[(1)] = (14));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_16489 === (2))){
var inst_16455 = cljs.core.async.timeout((500));
var state_16488__$1 = state_16488;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16488__$1,(4),inst_16455);
} else {
if((state_val_16489 === (11))){
var inst_16484 = (state_16488[(2)]);
var state_16488__$1 = state_16488;
var statearr_16501_16529 = state_16488__$1;
(statearr_16501_16529[(2)] = inst_16484);

(statearr_16501_16529[(1)] = (3));


return cljs.core.constant$keyword$65;
} else {
if((state_val_16489 === (9))){
var inst_16452 = (state_16488[(8)]);
var inst_16471 = (state_16488[(13)]);
var inst_16473 = (state_16488[(12)]);
var inst_16473__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_16452,inst_16471);
var state_16488__$1 = (function (){var statearr_16502 = state_16488;
(statearr_16502[(12)] = inst_16473__$1);

return statearr_16502;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16488__$1,(12),c,inst_16473__$1);
} else {
if((state_val_16489 === (5))){
var inst_16463 = (state_16488[(7)]);
var inst_16463__$1 = (state_16488[(2)]);
var inst_16464 = cljs.core.seq_QMARK_(inst_16463__$1);
var state_16488__$1 = (function (){var statearr_16505 = state_16488;
(statearr_16505[(7)] = inst_16463__$1);

return statearr_16505;
})();
if(inst_16464){
var statearr_16506_16530 = state_16488__$1;
(statearr_16506_16530[(1)] = (6));

} else {
var statearr_16507_16531 = state_16488__$1;
(statearr_16507_16531[(1)] = (7));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_16489 === (14))){
var state_16488__$1 = state_16488;
var statearr_16508_16532 = state_16488__$1;
(statearr_16508_16532[(2)] = null);

(statearr_16508_16532[(1)] = (15));


return cljs.core.constant$keyword$65;
} else {
if((state_val_16489 === (10))){
var inst_16452 = (state_16488[(8)]);
var inst_16453 = (state_16488[(9)]);
var tmp16503 = inst_16452;
var tmp16504 = inst_16453;
var inst_16452__$1 = tmp16503;
var inst_16453__$1 = tmp16504;
var state_16488__$1 = (function (){var statearr_16509 = state_16488;
(statearr_16509[(8)] = inst_16452__$1);

(statearr_16509[(9)] = inst_16453__$1);

return statearr_16509;
})();
var statearr_16510_16533 = state_16488__$1;
(statearr_16510_16533[(2)] = null);

(statearr_16510_16533[(1)] = (2));


return cljs.core.constant$keyword$65;
} else {
if((state_val_16489 === (8))){
var inst_16470 = (state_16488[(11)]);
var inst_16469 = (state_16488[(2)]);
var inst_16470__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16469,cljs.core.constant$keyword$240);
var inst_16471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16469,cljs.core.constant$keyword$241);
var state_16488__$1 = (function (){var statearr_16511 = state_16488;
(statearr_16511[(13)] = inst_16471);

(statearr_16511[(11)] = inst_16470__$1);

return statearr_16511;
})();
if(cljs.core.truth_(inst_16470__$1)){
var statearr_16512_16534 = state_16488__$1;
(statearr_16512_16534[(1)] = (9));

} else {
var statearr_16513_16535 = state_16488__$1;
(statearr_16513_16535[(1)] = (10));

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
});})(c__11733__auto___16521,c))
;
return ((function (switch__11653__auto__,c__11733__auto___16521,c){
return (function() {
var state_machine__11654__auto__ = null;
var state_machine__11654__auto____0 = (function (){
var statearr_16517 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16517[(0)] = state_machine__11654__auto__);

(statearr_16517[(1)] = (1));

return statearr_16517;
});
var state_machine__11654__auto____1 = (function (state_16488){
while(true){
var ret_value__11655__auto__ = (function (){try{while(true){
var result__11656__auto__ = switch__11653__auto__(state_16488);
if(cljs.core.keyword_identical_QMARK_(result__11656__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11656__auto__;
}
break;
}
}catch (e16518){if((e16518 instanceof Object)){
var ex__11657__auto__ = e16518;
var statearr_16519_16536 = state_16488;
(statearr_16519_16536[(5)] = ex__11657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16488);

return cljs.core.constant$keyword$65;
} else {
throw e16518;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11655__auto__,cljs.core.constant$keyword$65)){
var G__16537 = state_16488;
state_16488 = G__16537;
continue;
} else {
return ret_value__11655__auto__;
}
break;
}
});
state_machine__11654__auto__ = function(state_16488){
switch(arguments.length){
case 0:
return state_machine__11654__auto____0.call(this);
case 1:
return state_machine__11654__auto____1.call(this,state_16488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11654__auto____0;
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11654__auto____1;
return state_machine__11654__auto__;
})()
;})(switch__11653__auto__,c__11733__auto___16521,c))
})();
var state__11735__auto__ = (function (){var statearr_16520 = (function (){return (f__11734__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11734__auto__.cljs$core$IFn$_invoke$arity$0() : f__11734__auto__.call(null));
})();
(statearr_16520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11733__auto___16521);

return statearr_16520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11735__auto__);
});})(c__11733__auto___16521,c))
);


return c;
});
arimaa.chat.chat_log = (function chat_log(chat){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.utils.scroll_bottom_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$259,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.chat.chat_row,(function (){var G__16539 = chat;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16539) : cljs.core.deref.call(null,G__16539));
})())], null)], null);
});
arimaa.chat.chat_log_view = (function chat_log_view(){
var chat = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var chat_chan = arimaa.chat.chat_log_channel();
var mounted_chat_log = cljs.core.with_meta(arimaa.chat.chat_log,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,((function (chat,chat_chan){
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
arimaa.requests.send_chat((function (){var G__16549 = arimaa.state.username;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16549) : cljs.core.deref.call(null,G__16549));
})(),arimaa.state.auth(),(function (){var G__16550 = message;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16550) : cljs.core.deref.call(null,G__16550));
})());

var G__16551 = message;
var G__16552 = "";
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16551,G__16552) : cljs.core.reset_BANG_.call(null,G__16551,G__16552));
});})(message))
;
return ((function (message,send_chat){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$261,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$262,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$263,send_chat], null),"Send"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$251,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.utils.initial_focus_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$264,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$139,"text",cljs.core.constant$keyword$265,(function (){var G__16553 = message;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16553) : cljs.core.deref.call(null,G__16553));
})(),cljs.core.constant$keyword$266,((function (message,send_chat){
return (function (p1__16540_SHARP_){
var G__16554 = message;
var G__16555 = p1__16540_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16554,G__16555) : cljs.core.reset_BANG_.call(null,G__16554,G__16555));
});})(message,send_chat))
,cljs.core.constant$keyword$267,((function (message,send_chat){
return (function (p1__16541_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16541_SHARP_.keyCode,(13))){
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$268,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_log_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_input], null)], null);
});
