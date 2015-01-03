// Compiled by ClojureScript 0.0-2511
goog.provide('arimaa.chat');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('arimaa.utils');
goog.require('arimaa.state');
goog.require('arimaa.requests');
arimaa.chat.chat_message = (function chat_message(chat){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$282,cljs.core.constant$keyword$234.cljs$core$IFn$_invoke$arity$1(chat)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$260,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$23,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$238,cljs.core.constant$keyword$238.cljs$core$IFn$_invoke$arity$1(chat)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$283,cljs.core.constant$keyword$235.cljs$core$IFn$_invoke$arity$1(chat)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$284,arimaa.utils.markup_user_messages(cljs.core.constant$keyword$167.cljs$core$IFn$_invoke$arity$1(chat))], null)], null)], null);
});
arimaa.chat.chat_event = (function chat_event(chat,icon,text){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$282,cljs.core.constant$keyword$234.cljs$core$IFn$_invoke$arity$1(chat)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$285,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$283,cljs.core.constant$keyword$235.cljs$core$IFn$_invoke$arity$1(chat)], null),[cljs.core.str(" "),cljs.core.str(text)].join('')], null)], null);
});
arimaa.chat.chat_row = (function chat_row(chat){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$286,(function (){var G__16706 = (((cljs.core.constant$keyword$236.cljs$core$IFn$_invoke$arity$1(chat) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$236.cljs$core$IFn$_invoke$arity$1(chat).fqn:null);
switch (G__16706) {
case "timeout":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_event,chat,cljs.core.constant$keyword$287,"timed out"], null);

break;
case "out":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_event,chat,cljs.core.constant$keyword$288,"went out"], null);

break;
case "in":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_event,chat,cljs.core.constant$keyword$289,"is coming in"], null);

break;
case "msg":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_message,chat], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.constant$keyword$236.cljs$core$IFn$_invoke$arity$1(chat))].join('')));

}
})()], null);
});
arimaa.chat.chat_log_channel = (function chat_log_channel(){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__5853__auto___16848 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto___16848,c){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto___16848,c){
return (function (state_16815){
var state_val_16816 = (state_16815[(1)]);
if((state_val_16816 === (7))){
var inst_16790 = (state_16815[(7)]);
var state_16815__$1 = state_16815;
var statearr_16817_16849 = state_16815__$1;
(statearr_16817_16849[(2)] = inst_16790);

(statearr_16817_16849[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16816 === (1))){
var inst_16778 = cljs.core.PersistentVector.EMPTY;
var inst_16779 = inst_16778;
var inst_16780 = null;
var state_16815__$1 = (function (){var statearr_16818 = state_16815;
(statearr_16818[(8)] = inst_16779);

(statearr_16818[(9)] = inst_16780);

return statearr_16818;
})();
var statearr_16819_16850 = state_16815__$1;
(statearr_16819_16850[(2)] = null);

(statearr_16819_16850[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16816 === (4))){
var inst_16780 = (state_16815[(9)]);
var inst_16784 = (state_16815[(2)]);
var inst_16786 = (function (){var G__16820 = arimaa.state.username;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16820) : cljs.core.deref.call(null,G__16820));
})();
var inst_16787 = arimaa.state.auth();
var inst_16788 = arimaa.requests.fetch_chat(inst_16786,inst_16787,inst_16780);
var state_16815__$1 = (function (){var statearr_16821 = state_16815;
(statearr_16821[(10)] = inst_16784);

return statearr_16821;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16815__$1,(5),inst_16788);
} else {
if((state_val_16816 === (15))){
var inst_16807 = (state_16815[(2)]);
var state_16815__$1 = state_16815;
var statearr_16822_16851 = state_16815__$1;
(statearr_16822_16851[(2)] = inst_16807);

(statearr_16822_16851[(1)] = (11));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16816 === (13))){
var inst_16800 = (state_16815[(11)]);
var inst_16797 = (state_16815[(12)]);
var inst_16779 = inst_16800;
var inst_16780 = inst_16797;
var state_16815__$1 = (function (){var statearr_16823 = state_16815;
(statearr_16823[(8)] = inst_16779);

(statearr_16823[(9)] = inst_16780);

return statearr_16823;
})();
var statearr_16824_16852 = state_16815__$1;
(statearr_16824_16852[(2)] = null);

(statearr_16824_16852[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16816 === (6))){
var inst_16790 = (state_16815[(7)]);
var inst_16793 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16790);
var state_16815__$1 = state_16815;
var statearr_16825_16853 = state_16815__$1;
(statearr_16825_16853[(2)] = inst_16793);

(statearr_16825_16853[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16816 === (3))){
var inst_16813 = (state_16815[(2)]);
var state_16815__$1 = state_16815;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16815__$1,inst_16813);
} else {
if((state_val_16816 === (12))){
var inst_16802 = (state_16815[(2)]);
var state_16815__$1 = state_16815;
if(cljs.core.truth_(inst_16802)){
var statearr_16826_16854 = state_16815__$1;
(statearr_16826_16854[(1)] = (13));

} else {
var statearr_16827_16855 = state_16815__$1;
(statearr_16827_16855[(1)] = (14));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_16816 === (2))){
var inst_16782 = cljs.core.async.timeout((500));
var state_16815__$1 = state_16815;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16815__$1,(4),inst_16782);
} else {
if((state_val_16816 === (11))){
var inst_16811 = (state_16815[(2)]);
var state_16815__$1 = state_16815;
var statearr_16828_16856 = state_16815__$1;
(statearr_16828_16856[(2)] = inst_16811);

(statearr_16828_16856[(1)] = (3));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16816 === (9))){
var inst_16800 = (state_16815[(11)]);
var inst_16798 = (state_16815[(13)]);
var inst_16779 = (state_16815[(8)]);
var inst_16800__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_16779,inst_16798);
var state_16815__$1 = (function (){var statearr_16829 = state_16815;
(statearr_16829[(11)] = inst_16800__$1);

return statearr_16829;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16815__$1,(12),c,inst_16800__$1);
} else {
if((state_val_16816 === (5))){
var inst_16790 = (state_16815[(7)]);
var inst_16790__$1 = (state_16815[(2)]);
var inst_16791 = cljs.core.seq_QMARK_(inst_16790__$1);
var state_16815__$1 = (function (){var statearr_16832 = state_16815;
(statearr_16832[(7)] = inst_16790__$1);

return statearr_16832;
})();
if(inst_16791){
var statearr_16833_16857 = state_16815__$1;
(statearr_16833_16857[(1)] = (6));

} else {
var statearr_16834_16858 = state_16815__$1;
(statearr_16834_16858[(1)] = (7));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_16816 === (14))){
var state_16815__$1 = state_16815;
var statearr_16835_16859 = state_16815__$1;
(statearr_16835_16859[(2)] = null);

(statearr_16835_16859[(1)] = (15));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16816 === (10))){
var inst_16779 = (state_16815[(8)]);
var inst_16780 = (state_16815[(9)]);
var tmp16830 = inst_16779;
var tmp16831 = inst_16780;
var inst_16779__$1 = tmp16830;
var inst_16780__$1 = tmp16831;
var state_16815__$1 = (function (){var statearr_16836 = state_16815;
(statearr_16836[(8)] = inst_16779__$1);

(statearr_16836[(9)] = inst_16780__$1);

return statearr_16836;
})();
var statearr_16837_16860 = state_16815__$1;
(statearr_16837_16860[(2)] = null);

(statearr_16837_16860[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_16816 === (8))){
var inst_16797 = (state_16815[(12)]);
var inst_16796 = (state_16815[(2)]);
var inst_16797__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16796,cljs.core.constant$keyword$239);
var inst_16798 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16796,cljs.core.constant$keyword$240);
var state_16815__$1 = (function (){var statearr_16838 = state_16815;
(statearr_16838[(12)] = inst_16797__$1);

(statearr_16838[(13)] = inst_16798);

return statearr_16838;
})();
if(cljs.core.truth_(inst_16797__$1)){
var statearr_16839_16861 = state_16815__$1;
(statearr_16839_16861[(1)] = (9));

} else {
var statearr_16840_16862 = state_16815__$1;
(statearr_16840_16862[(1)] = (10));

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
});})(c__5853__auto___16848,c))
;
return ((function (switch__5838__auto__,c__5853__auto___16848,c){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_16844 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16844[(0)] = state_machine__5839__auto__);

(statearr_16844[(1)] = (1));

return statearr_16844;
});
var state_machine__5839__auto____1 = (function (state_16815){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_16815);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e16845){if((e16845 instanceof Object)){
var ex__5842__auto__ = e16845;
var statearr_16846_16863 = state_16815;
(statearr_16846_16863[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16815);

return cljs.core.constant$keyword$41;
} else {
throw e16845;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__16864 = state_16815;
state_16815 = G__16864;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_16815){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_16815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto___16848,c))
})();
var state__5855__auto__ = (function (){var statearr_16847 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_16847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto___16848);

return statearr_16847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto___16848,c))
);


return c;
});
arimaa.chat.chat_log = (function chat_log(chat){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.utils.scroll_bottom_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$290,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.chat.chat_row,(function (){var G__16866 = chat;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16866) : cljs.core.deref.call(null,G__16866));
})())], null)], null);
});
arimaa.chat.chat_log_view = (function chat_log_view(){
var chat = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var chat_chan = arimaa.chat.chat_log_channel();
var mounted_chat_log = cljs.core.with_meta(arimaa.chat.chat_log,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$291,((function (chat,chat_chan){
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
arimaa.requests.send_chat((function (){var G__16876 = arimaa.state.username;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16876) : cljs.core.deref.call(null,G__16876));
})(),arimaa.state.auth(),(function (){var G__16877 = message;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16877) : cljs.core.deref.call(null,G__16877));
})());

var G__16878 = message;
var G__16879 = "";
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16878,G__16879) : cljs.core.reset_BANG_.call(null,G__16878,G__16879));
});})(message))
;
return ((function (message,send_chat){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$292,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$249,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$250,send_chat], null),"Send"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$260,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.utils.initial_focus_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$143,"text",cljs.core.constant$keyword$246,(function (){var G__16880 = message;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16880) : cljs.core.deref.call(null,G__16880));
})(),cljs.core.constant$keyword$247,((function (message,send_chat){
return (function (p1__16867_SHARP_){
var G__16881 = message;
var G__16882 = p1__16867_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16881,G__16882) : cljs.core.reset_BANG_.call(null,G__16881,G__16882));
});})(message,send_chat))
,cljs.core.constant$keyword$248,((function (message,send_chat){
return (function (p1__16868_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16868_SHARP_.keyCode,(13))){
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$293,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_log_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_input], null)], null);
});
