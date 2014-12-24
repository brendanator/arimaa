// Compiled by ClojureScript 0.0-2511
goog.provide('arimaa.chat');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('arimaa.utils');
goog.require('arimaa.state');
goog.require('arimaa.requests');
arimaa.chat.chat_message = (function chat_message(chat){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$209,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$210,cljs.core.constant$keyword$198.cljs$core$IFn$_invoke$arity$1(chat)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$211,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$23,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$202,cljs.core.constant$keyword$202.cljs$core$IFn$_invoke$arity$1(chat)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$212,cljs.core.constant$keyword$199.cljs$core$IFn$_invoke$arity$1(chat)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$213,cljs.core.constant$keyword$139.cljs$core$IFn$_invoke$arity$1(chat)], null)], null)], null);
});
arimaa.chat.chat_event = (function chat_event(chat,icon,text){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$209,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$210,cljs.core.constant$keyword$198.cljs$core$IFn$_invoke$arity$1(chat)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$214,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$212,cljs.core.constant$keyword$199.cljs$core$IFn$_invoke$arity$1(chat)], null),[cljs.core.str(" "),cljs.core.str(text)].join('')], null)], null);
});
arimaa.chat.chat_row = (function chat_row(chat){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$215,(function (){var G__15729 = (((cljs.core.constant$keyword$200.cljs$core$IFn$_invoke$arity$1(chat) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$200.cljs$core$IFn$_invoke$arity$1(chat).fqn:null);
switch (G__15729) {
case "timeout":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_event,chat,cljs.core.constant$keyword$216,"timed out"], null);

break;
case "out":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_event,chat,cljs.core.constant$keyword$217,"went out"], null);

break;
case "in":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_event,chat,cljs.core.constant$keyword$218,"is coming in"], null);

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
var c__5853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5853__auto__){
return (function (){
var f__5854__auto__ = (function (){var switch__5838__auto__ = ((function (c__5853__auto__){
return (function (state_15816){
var state_val_15817 = (state_15816[(1)]);
if((state_val_15817 === (7))){
var inst_15797 = (state_15816[(7)]);
var state_15816__$1 = state_15816;
var statearr_15818_15843 = state_15816__$1;
(statearr_15818_15843[(2)] = inst_15797);

(statearr_15818_15843[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_15817 === (1))){
var state_15816__$1 = state_15816;
var statearr_15819_15844 = state_15816__$1;
(statearr_15819_15844[(2)] = null);

(statearr_15819_15844[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_15817 === (4))){
var inst_15790 = (state_15816[(2)]);
var inst_15792 = (function (){var G__15820 = arimaa.state.username;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15820) : cljs.core.deref.call(null,G__15820));
})();
var inst_15793 = arimaa.state.auth();
var inst_15794 = (function (){var G__15821 = latest_data;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15821) : cljs.core.deref.call(null,G__15821));
})();
var inst_15795 = arimaa.requests.fetch_chat(inst_15792,inst_15793,inst_15794);
var state_15816__$1 = (function (){var statearr_15822 = state_15816;
(statearr_15822[(8)] = inst_15790);

return statearr_15822;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15816__$1,(5),inst_15795);
} else {
if((state_val_15817 === (6))){
var inst_15797 = (state_15816[(7)]);
var inst_15800 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_15797);
var state_15816__$1 = state_15816;
var statearr_15823_15845 = state_15816__$1;
(statearr_15823_15845[(2)] = inst_15800);

(statearr_15823_15845[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_15817 === (3))){
var inst_15814 = (state_15816[(2)]);
var state_15816__$1 = state_15816;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15816__$1,inst_15814);
} else {
if((state_val_15817 === (2))){
var inst_15788 = cljs.core.async.timeout((500));
var state_15816__$1 = state_15816;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15816__$1,(4),inst_15788);
} else {
if((state_val_15817 === (11))){
var inst_15811 = (state_15816[(2)]);
var state_15816__$1 = (function (){var statearr_15824 = state_15816;
(statearr_15824[(9)] = inst_15811);

return statearr_15824;
})();
var statearr_15825_15846 = state_15816__$1;
(statearr_15825_15846[(2)] = null);

(statearr_15825_15846[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_15817 === (9))){
var inst_15804 = (state_15816[(10)]);
var inst_15808 = (function (){var G__15826 = latest_data;
var G__15827 = inst_15804;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15826,G__15827) : cljs.core.reset_BANG_.call(null,G__15826,G__15827));
})();
var state_15816__$1 = state_15816;
var statearr_15828_15847 = state_15816__$1;
(statearr_15828_15847[(2)] = inst_15808);

(statearr_15828_15847[(1)] = (11));


return cljs.core.constant$keyword$41;
} else {
if((state_val_15817 === (5))){
var inst_15797 = (state_15816[(7)]);
var inst_15797__$1 = (state_15816[(2)]);
var inst_15798 = cljs.core.seq_QMARK_(inst_15797__$1);
var state_15816__$1 = (function (){var statearr_15829 = state_15816;
(statearr_15829[(7)] = inst_15797__$1);

return statearr_15829;
})();
if(inst_15798){
var statearr_15830_15848 = state_15816__$1;
(statearr_15830_15848[(1)] = (6));

} else {
var statearr_15831_15849 = state_15816__$1;
(statearr_15831_15849[(1)] = (7));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_15817 === (10))){
var state_15816__$1 = state_15816;
var statearr_15832_15850 = state_15816__$1;
(statearr_15832_15850[(2)] = null);

(statearr_15832_15850[(1)] = (11));


return cljs.core.constant$keyword$41;
} else {
if((state_val_15817 === (8))){
var inst_15804 = (state_15816[(10)]);
var inst_15803 = (state_15816[(2)]);
var inst_15804__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15803,cljs.core.constant$keyword$203);
var inst_15805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15803,cljs.core.constant$keyword$204);
var inst_15806 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(chatter,cljs.core.concat,inst_15805);
var state_15816__$1 = (function (){var statearr_15833 = state_15816;
(statearr_15833[(11)] = inst_15806);

(statearr_15833[(10)] = inst_15804__$1);

return statearr_15833;
})();
if(cljs.core.truth_(inst_15804__$1)){
var statearr_15834_15851 = state_15816__$1;
(statearr_15834_15851[(1)] = (9));

} else {
var statearr_15835_15852 = state_15816__$1;
(statearr_15835_15852[(1)] = (10));

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
});})(c__5853__auto__))
;
return ((function (switch__5838__auto__,c__5853__auto__){
return (function() {
var state_machine__5839__auto__ = null;
var state_machine__5839__auto____0 = (function (){
var statearr_15839 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15839[(0)] = state_machine__5839__auto__);

(statearr_15839[(1)] = (1));

return statearr_15839;
});
var state_machine__5839__auto____1 = (function (state_15816){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_15816);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e15840){if((e15840 instanceof Object)){
var ex__5842__auto__ = e15840;
var statearr_15841_15853 = state_15816;
(statearr_15841_15853[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15816);

return cljs.core.constant$keyword$41;
} else {
throw e15840;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__15854 = state_15816;
state_15816 = G__15854;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_15816){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_15816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto__))
})();
var state__5855__auto__ = (function (){var statearr_15842 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_15842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto__);

return statearr_15842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5855__auto__);
});})(c__5853__auto__))
);

return c__5853__auto__;
});
arimaa.chat.chat_log = (function chat_log(){
var chatter = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var latest_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
arimaa.chat.update_chat_log(chatter,latest_data);

return ((function (chatter,latest_data){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.utils.scroll_bottom_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$219,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.chat.chat_row,(function (){var G__15856 = chatter;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15856) : cljs.core.deref.call(null,G__15856));
})())], null)], null);
});
;})(chatter,latest_data))
});
arimaa.chat.chat_input = (function chat_input(){
var message = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var send_chat = ((function (message){
return (function (){
arimaa.requests.send_chat((function (){var G__15866 = arimaa.state.username;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15866) : cljs.core.deref.call(null,G__15866));
})(),arimaa.state.auth(),(function (){var G__15867 = message;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15867) : cljs.core.deref.call(null,G__15867));
})());

var G__15868 = message;
var G__15869 = "";
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15868,G__15869) : cljs.core.reset_BANG_.call(null,G__15868,G__15869));
});})(message))
;
return ((function (message,send_chat){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$220,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$221,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$222,send_chat], null),"Send"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$211,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.utils.initial_focus_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$223,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$115,"text",cljs.core.constant$keyword$224,(function (){var G__15870 = message;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15870) : cljs.core.deref.call(null,G__15870));
})(),cljs.core.constant$keyword$225,((function (message,send_chat){
return (function (p1__15857_SHARP_){
var G__15871 = message;
var G__15872 = p1__15857_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15871,G__15872) : cljs.core.reset_BANG_.call(null,G__15871,G__15872));
});})(message,send_chat))
,cljs.core.constant$keyword$226,((function (message,send_chat){
return (function (p1__15858_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__15858_SHARP_.keyCode,(13))){
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$227,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_log], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_input], null)], null);
});
