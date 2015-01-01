// Compiled by ClojureScript 0.0-2511
goog.provide('arimaa.chat');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('arimaa.utils');
goog.require('arimaa.state');
goog.require('arimaa.requests');
arimaa.chat.chat_message = (function chat_message(chat){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$276,cljs.core.constant$keyword$224.cljs$core$IFn$_invoke$arity$1(chat)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$23,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$228,cljs.core.constant$keyword$228.cljs$core$IFn$_invoke$arity$1(chat)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$277,cljs.core.constant$keyword$225.cljs$core$IFn$_invoke$arity$1(chat)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$278,cljs.core.constant$keyword$142.cljs$core$IFn$_invoke$arity$1(chat)], null)], null)], null);
});
arimaa.chat.chat_event = (function chat_event(chat,icon,text){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$276,cljs.core.constant$keyword$224.cljs$core$IFn$_invoke$arity$1(chat)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$279,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$277,cljs.core.constant$keyword$225.cljs$core$IFn$_invoke$arity$1(chat)], null),[cljs.core.str(" "),cljs.core.str(text)].join('')], null)], null);
});
arimaa.chat.chat_row = (function chat_row(chat){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$280,(function (){var G__16475 = (((cljs.core.constant$keyword$226.cljs$core$IFn$_invoke$arity$1(chat) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$226.cljs$core$IFn$_invoke$arity$1(chat).fqn:null);
switch (G__16475) {
case "timeout":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_event,chat,cljs.core.constant$keyword$281,"timed out"], null);

break;
case "out":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_event,chat,cljs.core.constant$keyword$282,"went out"], null);

break;
case "in":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_event,chat,cljs.core.constant$keyword$283,"is coming in"], null);

break;
case "msg":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_message,chat], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.constant$keyword$226.cljs$core$IFn$_invoke$arity$1(chat))].join('')));

}
})()], null);
});
arimaa.chat.chat_log_channel = (function chat_log_channel(){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__5853__auto___16617 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___16617,c){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___16617,c){
return (function (state_16584){
var state_val_16585 = (state_16584[(1)]);
if((state_val_16585 === (7))){
var inst_16559 = (state_16584[(7)]);
var state_16584__$1 = state_16584;
var statearr_16586_16618 = state_16584__$1;
(statearr_16586_16618[(2)] = inst_16559);

(statearr_16586_16618[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16585 === (1))){
var inst_16547 = cljs.core.PersistentVector.EMPTY;
var inst_16548 = inst_16547;
var inst_16549 = null;
var state_16584__$1 = (function (){var statearr_16587 = state_16584;
(statearr_16587[(8)] = inst_16548);

(statearr_16587[(9)] = inst_16549);

return statearr_16587;
})();
var statearr_16588_16619 = state_16584__$1;
(statearr_16588_16619[(2)] = null);

(statearr_16588_16619[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16585 === (4))){
var inst_16549 = (state_16584[(9)]);
var inst_16553 = (state_16584[(2)]);
var inst_16555 = (function (){var G__16589 = arimaa.state.username;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16589) : cljs.core.deref.call(null,G__16589));
})();
var inst_16556 = arimaa.state.auth();
var inst_16557 = arimaa.requests.fetch_chat(inst_16555,inst_16556,inst_16549);
var state_16584__$1 = (function (){var statearr_16590 = state_16584;
(statearr_16590[(10)] = inst_16553);

return statearr_16590;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16584__$1,(5),inst_16557);
} else {
if((state_val_16585 === (15))){
var inst_16576 = (state_16584[(2)]);
var state_16584__$1 = state_16584;
var statearr_16591_16620 = state_16584__$1;
(statearr_16591_16620[(2)] = inst_16576);

(statearr_16591_16620[(1)] = (11));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16585 === (13))){
var inst_16569 = (state_16584[(11)]);
var inst_16566 = (state_16584[(12)]);
var inst_16548 = inst_16569;
var inst_16549 = inst_16566;
var state_16584__$1 = (function (){var statearr_16592 = state_16584;
(statearr_16592[(8)] = inst_16548);

(statearr_16592[(9)] = inst_16549);

return statearr_16592;
})();
var statearr_16593_16621 = state_16584__$1;
(statearr_16593_16621[(2)] = null);

(statearr_16593_16621[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16585 === (6))){
var inst_16559 = (state_16584[(7)]);
var inst_16562 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16559);
var state_16584__$1 = state_16584;
var statearr_16594_16622 = state_16584__$1;
(statearr_16594_16622[(2)] = inst_16562);

(statearr_16594_16622[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16585 === (3))){
var inst_16582 = (state_16584[(2)]);
var state_16584__$1 = state_16584;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16584__$1,inst_16582);
} else {
if((state_val_16585 === (12))){
var inst_16571 = (state_16584[(2)]);
var state_16584__$1 = state_16584;
if(cljs.core.truth_(inst_16571)){
var statearr_16595_16623 = state_16584__$1;
(statearr_16595_16623[(1)] = (13));

} else {
var statearr_16596_16624 = state_16584__$1;
(statearr_16596_16624[(1)] = (14));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_16585 === (2))){
var inst_16551 = cljs.core.async.timeout((500));
var state_16584__$1 = state_16584;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16584__$1,(4),inst_16551);
} else {
if((state_val_16585 === (11))){
var inst_16580 = (state_16584[(2)]);
var state_16584__$1 = state_16584;
var statearr_16597_16625 = state_16584__$1;
(statearr_16597_16625[(2)] = inst_16580);

(statearr_16597_16625[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16585 === (9))){
var inst_16569 = (state_16584[(11)]);
var inst_16548 = (state_16584[(8)]);
var inst_16567 = (state_16584[(13)]);
var inst_16569__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_16548,inst_16567);
var state_16584__$1 = (function (){var statearr_16598 = state_16584;
(statearr_16598[(11)] = inst_16569__$1);

return statearr_16598;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16584__$1,(12),c,inst_16569__$1);
} else {
if((state_val_16585 === (5))){
var inst_16559 = (state_16584[(7)]);
var inst_16559__$1 = (state_16584[(2)]);
var inst_16560 = cljs.core.seq_QMARK_(inst_16559__$1);
var state_16584__$1 = (function (){var statearr_16601 = state_16584;
(statearr_16601[(7)] = inst_16559__$1);

return statearr_16601;
})();
if(inst_16560){
var statearr_16602_16626 = state_16584__$1;
(statearr_16602_16626[(1)] = (6));

} else {
var statearr_16603_16627 = state_16584__$1;
(statearr_16603_16627[(1)] = (7));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_16585 === (14))){
var state_16584__$1 = state_16584;
var statearr_16604_16628 = state_16584__$1;
(statearr_16604_16628[(2)] = null);

(statearr_16604_16628[(1)] = (15));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16585 === (10))){
var inst_16548 = (state_16584[(8)]);
var inst_16549 = (state_16584[(9)]);
var tmp16599 = inst_16548;
var tmp16600 = inst_16549;
var inst_16548__$1 = tmp16599;
var inst_16549__$1 = tmp16600;
var state_16584__$1 = (function (){var statearr_16605 = state_16584;
(statearr_16605[(8)] = inst_16548__$1);

(statearr_16605[(9)] = inst_16549__$1);

return statearr_16605;
})();
var statearr_16606_16629 = state_16584__$1;
(statearr_16606_16629[(2)] = null);

(statearr_16606_16629[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16585 === (8))){
var inst_16566 = (state_16584[(12)]);
var inst_16565 = (state_16584[(2)]);
var inst_16566__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16565,cljs.core.constant$keyword$229);
var inst_16567 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16565,cljs.core.constant$keyword$230);
var state_16584__$1 = (function (){var statearr_16607 = state_16584;
(statearr_16607[(12)] = inst_16566__$1);

(statearr_16607[(13)] = inst_16567);

return statearr_16607;
})();
if(cljs.core.truth_(inst_16566__$1)){
var statearr_16608_16630 = state_16584__$1;
(statearr_16608_16630[(1)] = (9));

} else {
var statearr_16609_16631 = state_16584__$1;
(statearr_16609_16631[(1)] = (10));

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
});})(c__5853__auto___16617,c))
;
return ((function (switch__5838__auto__,c__5853__auto___16617,c){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_16613 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16613[(0)] = state_machine__5839__auto__);

(statearr_16613[(1)] = (1));

return statearr_16613;
});
var state_machine__5839__auto____1 = (function (state_16584){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_16584);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e16614){if((e16614 instanceof Object)){
var ex__5842__auto__ = e16614;
var statearr_16615_16632 = state_16584;
(statearr_16615_16632[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16584);

return cljs.core.constant$keyword$41;
} else {
throw e16614;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__16633 = state_16584;
state_16584 = G__16633;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_16584){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_16584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___16617,c))
})();
var state__5855__auto__ = (function (){var statearr_16616 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_16616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___16617);

return statearr_16616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___16617,c))
);


return c;
});
arimaa.chat.chat_log = (function chat_log(chat){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.utils.scroll_bottom_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$284,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.chat.chat_row,(function (){var G__16635 = chat;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16635) : cljs.core.deref.call(null,G__16635));
})())], null)], null);
});
arimaa.chat.chat_log_view = (function chat_log_view(){
var chat = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var chat_chan = arimaa.chat.chat_log_channel();
var mounted_chat_log = cljs.core.with_meta(arimaa.chat.chat_log,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$285,((function (chat,chat_chan){
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
arimaa.requests.send_chat((function (){var G__16645 = arimaa.state.username;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16645) : cljs.core.deref.call(null,G__16645));
})(),arimaa.state.auth(),(function (){var G__16646 = message;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16646) : cljs.core.deref.call(null,G__16646));
})());

var G__16647 = message;
var G__16648 = "";
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16647,G__16648) : cljs.core.reset_BANG_.call(null,G__16647,G__16648));
});})(message))
;
return ((function (message,send_chat){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$286,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$239,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$240,send_chat], null),"Send"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.utils.initial_focus_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$235,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$118,"text",cljs.core.constant$keyword$236,(function (){var G__16649 = message;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16649) : cljs.core.deref.call(null,G__16649));
})(),cljs.core.constant$keyword$237,((function (message,send_chat){
return (function (p1__16636_SHARP_){
var G__16650 = message;
var G__16651 = p1__16636_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16650,G__16651) : cljs.core.reset_BANG_.call(null,G__16650,G__16651));
});})(message,send_chat))
,cljs.core.constant$keyword$238,((function (message,send_chat){
return (function (p1__16637_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16637_SHARP_.keyCode,(13))){
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$287,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_log_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_input], null)], null);
});
