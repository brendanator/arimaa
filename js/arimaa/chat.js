// Compiled by ClojureScript 0.0-2511
goog.provide('arimaa.chat');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('arimaa.utils');
goog.require('arimaa.state');
goog.require('arimaa.requests');
arimaa.chat.chat_message = (function chat_message(chat){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$276,cljs.core.constant$keyword$222.cljs$core$IFn$_invoke$arity$1(chat)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$248,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$23,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$226,cljs.core.constant$keyword$226.cljs$core$IFn$_invoke$arity$1(chat)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$277,cljs.core.constant$keyword$223.cljs$core$IFn$_invoke$arity$1(chat)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$278,cljs.core.constant$keyword$142.cljs$core$IFn$_invoke$arity$1(chat)], null)], null)], null);
});
arimaa.chat.chat_event = (function chat_event(chat,icon,text){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$276,cljs.core.constant$keyword$222.cljs$core$IFn$_invoke$arity$1(chat)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$279,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$277,cljs.core.constant$keyword$223.cljs$core$IFn$_invoke$arity$1(chat)], null),[cljs.core.str(" "),cljs.core.str(text)].join('')], null)], null);
});
arimaa.chat.chat_row = (function chat_row(chat){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$280,(function (){var G__16486 = (((cljs.core.constant$keyword$224.cljs$core$IFn$_invoke$arity$1(chat) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$224.cljs$core$IFn$_invoke$arity$1(chat).fqn:null);
switch (G__16486) {
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
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.constant$keyword$224.cljs$core$IFn$_invoke$arity$1(chat))].join('')));

}
})()], null);
});
arimaa.chat.chat_log_channel = (function chat_log_channel(){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__11833__auto___16628 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11833__auto___16628,c){
return (function (){
var f__11834__auto__ = (function (){var switch__11753__auto__ = ((function (c__11833__auto___16628,c){
return (function (state_16595){
var state_val_16596 = (state_16595[(1)]);
if((state_val_16596 === (7))){
var inst_16570 = (state_16595[(7)]);
var state_16595__$1 = state_16595;
var statearr_16597_16629 = state_16595__$1;
(statearr_16597_16629[(2)] = inst_16570);

(statearr_16597_16629[(1)] = (8));


return cljs.core.constant$keyword$61;
} else {
if((state_val_16596 === (1))){
var inst_16558 = cljs.core.PersistentVector.EMPTY;
var inst_16559 = inst_16558;
var inst_16560 = null;
var state_16595__$1 = (function (){var statearr_16598 = state_16595;
(statearr_16598[(8)] = inst_16560);

(statearr_16598[(9)] = inst_16559);

return statearr_16598;
})();
var statearr_16599_16630 = state_16595__$1;
(statearr_16599_16630[(2)] = null);

(statearr_16599_16630[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_16596 === (4))){
var inst_16560 = (state_16595[(8)]);
var inst_16564 = (state_16595[(2)]);
var inst_16566 = (function (){var G__16600 = arimaa.state.username;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16600) : cljs.core.deref.call(null,G__16600));
})();
var inst_16567 = arimaa.state.auth();
var inst_16568 = arimaa.requests.fetch_chat(inst_16566,inst_16567,inst_16560);
var state_16595__$1 = (function (){var statearr_16601 = state_16595;
(statearr_16601[(10)] = inst_16564);

return statearr_16601;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16595__$1,(5),inst_16568);
} else {
if((state_val_16596 === (15))){
var inst_16587 = (state_16595[(2)]);
var state_16595__$1 = state_16595;
var statearr_16602_16631 = state_16595__$1;
(statearr_16602_16631[(2)] = inst_16587);

(statearr_16602_16631[(1)] = (11));


return cljs.core.constant$keyword$61;
} else {
if((state_val_16596 === (13))){
var inst_16577 = (state_16595[(11)]);
var inst_16580 = (state_16595[(12)]);
var inst_16559 = inst_16580;
var inst_16560 = inst_16577;
var state_16595__$1 = (function (){var statearr_16603 = state_16595;
(statearr_16603[(8)] = inst_16560);

(statearr_16603[(9)] = inst_16559);

return statearr_16603;
})();
var statearr_16604_16632 = state_16595__$1;
(statearr_16604_16632[(2)] = null);

(statearr_16604_16632[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_16596 === (6))){
var inst_16570 = (state_16595[(7)]);
var inst_16573 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16570);
var state_16595__$1 = state_16595;
var statearr_16605_16633 = state_16595__$1;
(statearr_16605_16633[(2)] = inst_16573);

(statearr_16605_16633[(1)] = (8));


return cljs.core.constant$keyword$61;
} else {
if((state_val_16596 === (3))){
var inst_16593 = (state_16595[(2)]);
var state_16595__$1 = state_16595;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16595__$1,inst_16593);
} else {
if((state_val_16596 === (12))){
var inst_16582 = (state_16595[(2)]);
var state_16595__$1 = state_16595;
if(cljs.core.truth_(inst_16582)){
var statearr_16606_16634 = state_16595__$1;
(statearr_16606_16634[(1)] = (13));

} else {
var statearr_16607_16635 = state_16595__$1;
(statearr_16607_16635[(1)] = (14));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_16596 === (2))){
var inst_16562 = cljs.core.async.timeout((500));
var state_16595__$1 = state_16595;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16595__$1,(4),inst_16562);
} else {
if((state_val_16596 === (11))){
var inst_16591 = (state_16595[(2)]);
var state_16595__$1 = state_16595;
var statearr_16608_16636 = state_16595__$1;
(statearr_16608_16636[(2)] = inst_16591);

(statearr_16608_16636[(1)] = (3));


return cljs.core.constant$keyword$61;
} else {
if((state_val_16596 === (9))){
var inst_16580 = (state_16595[(12)]);
var inst_16578 = (state_16595[(13)]);
var inst_16559 = (state_16595[(9)]);
var inst_16580__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_16559,inst_16578);
var state_16595__$1 = (function (){var statearr_16609 = state_16595;
(statearr_16609[(12)] = inst_16580__$1);

return statearr_16609;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16595__$1,(12),c,inst_16580__$1);
} else {
if((state_val_16596 === (5))){
var inst_16570 = (state_16595[(7)]);
var inst_16570__$1 = (state_16595[(2)]);
var inst_16571 = cljs.core.seq_QMARK_(inst_16570__$1);
var state_16595__$1 = (function (){var statearr_16612 = state_16595;
(statearr_16612[(7)] = inst_16570__$1);

return statearr_16612;
})();
if(inst_16571){
var statearr_16613_16637 = state_16595__$1;
(statearr_16613_16637[(1)] = (6));

} else {
var statearr_16614_16638 = state_16595__$1;
(statearr_16614_16638[(1)] = (7));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_16596 === (14))){
var state_16595__$1 = state_16595;
var statearr_16615_16639 = state_16595__$1;
(statearr_16615_16639[(2)] = null);

(statearr_16615_16639[(1)] = (15));


return cljs.core.constant$keyword$61;
} else {
if((state_val_16596 === (10))){
var inst_16560 = (state_16595[(8)]);
var inst_16559 = (state_16595[(9)]);
var tmp16610 = inst_16560;
var tmp16611 = inst_16559;
var inst_16559__$1 = tmp16611;
var inst_16560__$1 = tmp16610;
var state_16595__$1 = (function (){var statearr_16616 = state_16595;
(statearr_16616[(8)] = inst_16560__$1);

(statearr_16616[(9)] = inst_16559__$1);

return statearr_16616;
})();
var statearr_16617_16640 = state_16595__$1;
(statearr_16617_16640[(2)] = null);

(statearr_16617_16640[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_16596 === (8))){
var inst_16577 = (state_16595[(11)]);
var inst_16576 = (state_16595[(2)]);
var inst_16577__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16576,cljs.core.constant$keyword$227);
var inst_16578 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16576,cljs.core.constant$keyword$228);
var state_16595__$1 = (function (){var statearr_16618 = state_16595;
(statearr_16618[(11)] = inst_16577__$1);

(statearr_16618[(13)] = inst_16578);

return statearr_16618;
})();
if(cljs.core.truth_(inst_16577__$1)){
var statearr_16619_16641 = state_16595__$1;
(statearr_16619_16641[(1)] = (9));

} else {
var statearr_16620_16642 = state_16595__$1;
(statearr_16620_16642[(1)] = (10));

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
}
}
}
}
});})(c__11833__auto___16628,c))
;
return ((function (switch__11753__auto__,c__11833__auto___16628,c){
return (function() {
var state_machine__11754__auto__ = null;
var state_machine__11754__auto____0 = (function (){
var statearr_16624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16624[(0)] = state_machine__11754__auto__);

(statearr_16624[(1)] = (1));

return statearr_16624;
});
var state_machine__11754__auto____1 = (function (state_16595){
while(true){
var ret_value__11755__auto__ = (function (){try{while(true){
var result__11756__auto__ = switch__11753__auto__(state_16595);
if(cljs.core.keyword_identical_QMARK_(result__11756__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11756__auto__;
}
break;
}
}catch (e16625){if((e16625 instanceof Object)){
var ex__11757__auto__ = e16625;
var statearr_16626_16643 = state_16595;
(statearr_16626_16643[(5)] = ex__11757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16595);

return cljs.core.constant$keyword$61;
} else {
throw e16625;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11755__auto__,cljs.core.constant$keyword$61)){
var G__16644 = state_16595;
state_16595 = G__16644;
continue;
} else {
return ret_value__11755__auto__;
}
break;
}
});
state_machine__11754__auto__ = function(state_16595){
switch(arguments.length){
case 0:
return state_machine__11754__auto____0.call(this);
case 1:
return state_machine__11754__auto____1.call(this,state_16595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11754__auto____0;
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11754__auto____1;
return state_machine__11754__auto__;
})()
;})(switch__11753__auto__,c__11833__auto___16628,c))
})();
var state__11835__auto__ = (function (){var statearr_16627 = (function (){return (f__11834__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11834__auto__.cljs$core$IFn$_invoke$arity$0() : f__11834__auto__.call(null));
})();
(statearr_16627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11833__auto___16628);

return statearr_16627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11835__auto__);
});})(c__11833__auto___16628,c))
);


return c;
});
arimaa.chat.chat_log = (function chat_log(chat){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.utils.scroll_bottom_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$284,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.chat.chat_row,(function (){var G__16646 = chat;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16646) : cljs.core.deref.call(null,G__16646));
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
var c__11833__auto___16707 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11833__auto___16707,chat,chat_chan,mounted_chat_log){
return (function (){
var f__11834__auto__ = (function (){var switch__11753__auto__ = ((function (c__11833__auto___16707,chat,chat_chan,mounted_chat_log){
return (function (state_16689){
var state_val_16690 = (state_16689[(1)]);
if((state_val_16690 === (7))){
var inst_16685 = (state_16689[(2)]);
var state_16689__$1 = state_16689;
var statearr_16691_16708 = state_16689__$1;
(statearr_16691_16708[(2)] = inst_16685);

(statearr_16691_16708[(1)] = (3));


return cljs.core.constant$keyword$61;
} else {
if((state_val_16690 === (6))){
var state_16689__$1 = state_16689;
var statearr_16692_16709 = state_16689__$1;
(statearr_16692_16709[(2)] = null);

(statearr_16692_16709[(1)] = (7));


return cljs.core.constant$keyword$61;
} else {
if((state_val_16690 === (5))){
var state_16689__$1 = state_16689;
var statearr_16693_16710 = state_16689__$1;
(statearr_16693_16710[(2)] = null);

(statearr_16693_16710[(1)] = (2));


return cljs.core.constant$keyword$61;
} else {
if((state_val_16690 === (4))){
var inst_16679 = (state_16689[(2)]);
var inst_16680 = (function (){var G__16694 = chat;
var G__16695 = inst_16679;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16694,G__16695) : cljs.core.reset_BANG_.call(null,G__16694,G__16695));
})();
var state_16689__$1 = (function (){var statearr_16696 = state_16689;
(statearr_16696[(7)] = inst_16680);

return statearr_16696;
})();
if(cljs.core.truth_(inst_16679)){
var statearr_16697_16711 = state_16689__$1;
(statearr_16697_16711[(1)] = (5));

} else {
var statearr_16698_16712 = state_16689__$1;
(statearr_16698_16712[(1)] = (6));

}

return cljs.core.constant$keyword$61;
} else {
if((state_val_16690 === (3))){
var inst_16687 = (state_16689[(2)]);
var state_16689__$1 = state_16689;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16689__$1,inst_16687);
} else {
if((state_val_16690 === (2))){
var state_16689__$1 = state_16689;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16689__$1,(4),chat_chan);
} else {
if((state_val_16690 === (1))){
var state_16689__$1 = state_16689;
var statearr_16699_16713 = state_16689__$1;
(statearr_16699_16713[(2)] = null);

(statearr_16699_16713[(1)] = (2));


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
});})(c__11833__auto___16707,chat,chat_chan,mounted_chat_log))
;
return ((function (switch__11753__auto__,c__11833__auto___16707,chat,chat_chan,mounted_chat_log){
return (function() {
var state_machine__11754__auto__ = null;
var state_machine__11754__auto____0 = (function (){
var statearr_16703 = [null,null,null,null,null,null,null,null];
(statearr_16703[(0)] = state_machine__11754__auto__);

(statearr_16703[(1)] = (1));

return statearr_16703;
});
var state_machine__11754__auto____1 = (function (state_16689){
while(true){
var ret_value__11755__auto__ = (function (){try{while(true){
var result__11756__auto__ = switch__11753__auto__(state_16689);
if(cljs.core.keyword_identical_QMARK_(result__11756__auto__,cljs.core.constant$keyword$61)){
continue;
} else {
return result__11756__auto__;
}
break;
}
}catch (e16704){if((e16704 instanceof Object)){
var ex__11757__auto__ = e16704;
var statearr_16705_16714 = state_16689;
(statearr_16705_16714[(5)] = ex__11757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16689);

return cljs.core.constant$keyword$61;
} else {
throw e16704;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11755__auto__,cljs.core.constant$keyword$61)){
var G__16715 = state_16689;
state_16689 = G__16715;
continue;
} else {
return ret_value__11755__auto__;
}
break;
}
});
state_machine__11754__auto__ = function(state_16689){
switch(arguments.length){
case 0:
return state_machine__11754__auto____0.call(this);
case 1:
return state_machine__11754__auto____1.call(this,state_16689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11754__auto____0;
state_machine__11754__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11754__auto____1;
return state_machine__11754__auto__;
})()
;})(switch__11753__auto__,c__11833__auto___16707,chat,chat_chan,mounted_chat_log))
})();
var state__11835__auto__ = (function (){var statearr_16706 = (function (){return (f__11834__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11834__auto__.cljs$core$IFn$_invoke$arity$0() : f__11834__auto__.call(null));
})();
(statearr_16706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11833__auto___16707);

return statearr_16706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11835__auto__);
});})(c__11833__auto___16707,chat,chat_chan,mounted_chat_log))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mounted_chat_log,chat], null);
});
arimaa.chat.chat_input = (function chat_input(){
var message = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var send_chat = ((function (message){
return (function (){
arimaa.requests.send_chat((function (){var G__16725 = arimaa.state.username;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16725) : cljs.core.deref.call(null,G__16725));
})(),arimaa.state.auth(),(function (){var G__16726 = message;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16726) : cljs.core.deref.call(null,G__16726));
})());

var G__16727 = message;
var G__16728 = "";
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16727,G__16728) : cljs.core.reset_BANG_.call(null,G__16727,G__16728));
});})(message))
;
return ((function (message,send_chat){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$286,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$237,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$238,send_chat], null),"Send"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$248,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.utils.initial_focus_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$118,"text",cljs.core.constant$keyword$234,(function (){var G__16729 = message;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16729) : cljs.core.deref.call(null,G__16729));
})(),cljs.core.constant$keyword$235,((function (message,send_chat){
return (function (p1__16716_SHARP_){
var G__16730 = message;
var G__16731 = p1__16716_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16730,G__16731) : cljs.core.reset_BANG_.call(null,G__16730,G__16731));
});})(message,send_chat))
,cljs.core.constant$keyword$236,((function (message,send_chat){
return (function (p1__16717_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16717_SHARP_.keyCode,(13))){
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
