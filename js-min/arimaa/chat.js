// Compiled by ClojureScript 0.0-2511
goog.provide('arimaa.chat');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('arimaa.state');
goog.require('arimaa.requests');
arimaa.chat.chat_message = (function chat_message(chat){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$206,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$207,cljs.core.constant$keyword$198.cljs$core$IFn$_invoke$arity$1(chat)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$208,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$23,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$202,cljs.core.constant$keyword$202.cljs$core$IFn$_invoke$arity$1(chat)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$209,cljs.core.constant$keyword$199.cljs$core$IFn$_invoke$arity$1(chat)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$210,cljs.core.constant$keyword$139.cljs$core$IFn$_invoke$arity$1(chat)], null)], null)], null);
});
arimaa.chat.chat_event = (function chat_event(chat,icon,text){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$206,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$207,cljs.core.constant$keyword$198.cljs$core$IFn$_invoke$arity$1(chat)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$211,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$209,cljs.core.constant$keyword$199.cljs$core$IFn$_invoke$arity$1(chat)], null),[cljs.core.str(" "),cljs.core.str(text)].join('')], null)], null);
});
arimaa.chat.chat_row = (function chat_row(chat){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$212,(function (){var G__15722 = (((cljs.core.constant$keyword$200.cljs$core$IFn$_invoke$arity$1(chat) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$200.cljs$core$IFn$_invoke$arity$1(chat).fqn:null);
switch (G__15722) {
case "timeout":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_event,chat,cljs.core.constant$keyword$213,"timed out"], null);

break;
case "out":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_event,chat,cljs.core.constant$keyword$214,"went out"], null);

break;
case "in":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_event,chat,cljs.core.constant$keyword$215,"is coming in"], null);

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
return (function (state_15809){
var state_val_15810 = (state_15809[(1)]);
if((state_val_15810 === (7))){
var inst_15790 = (state_15809[(7)]);
var state_15809__$1 = state_15809;
var statearr_15811_15836 = state_15809__$1;
(statearr_15811_15836[(2)] = inst_15790);

(statearr_15811_15836[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_15810 === (1))){
var state_15809__$1 = state_15809;
var statearr_15812_15837 = state_15809__$1;
(statearr_15812_15837[(2)] = null);

(statearr_15812_15837[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_15810 === (4))){
var inst_15783 = (state_15809[(2)]);
var inst_15785 = (function (){var G__15813 = arimaa.state.username;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15813) : cljs.core.deref.call(null,G__15813));
})();
var inst_15786 = arimaa.state.auth();
var inst_15787 = (function (){var G__15814 = latest_data;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15814) : cljs.core.deref.call(null,G__15814));
})();
var inst_15788 = arimaa.requests.fetch_chat(inst_15785,inst_15786,inst_15787);
var state_15809__$1 = (function (){var statearr_15815 = state_15809;
(statearr_15815[(8)] = inst_15783);

return statearr_15815;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15809__$1,(5),inst_15788);
} else {
if((state_val_15810 === (6))){
var inst_15790 = (state_15809[(7)]);
var inst_15793 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_15790);
var state_15809__$1 = state_15809;
var statearr_15816_15838 = state_15809__$1;
(statearr_15816_15838[(2)] = inst_15793);

(statearr_15816_15838[(1)] = (8));


return cljs.core.constant$keyword$41;
} else {
if((state_val_15810 === (3))){
var inst_15807 = (state_15809[(2)]);
var state_15809__$1 = state_15809;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15809__$1,inst_15807);
} else {
if((state_val_15810 === (2))){
var inst_15781 = cljs.core.async.timeout((500));
var state_15809__$1 = state_15809;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15809__$1,(4),inst_15781);
} else {
if((state_val_15810 === (11))){
var inst_15804 = (state_15809[(2)]);
var state_15809__$1 = (function (){var statearr_15817 = state_15809;
(statearr_15817[(9)] = inst_15804);

return statearr_15817;
})();
var statearr_15818_15839 = state_15809__$1;
(statearr_15818_15839[(2)] = null);

(statearr_15818_15839[(1)] = (2));


return cljs.core.constant$keyword$41;
} else {
if((state_val_15810 === (9))){
var inst_15797 = (state_15809[(10)]);
var inst_15801 = (function (){var G__15819 = latest_data;
var G__15820 = inst_15797;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15819,G__15820) : cljs.core.reset_BANG_.call(null,G__15819,G__15820));
})();
var state_15809__$1 = state_15809;
var statearr_15821_15840 = state_15809__$1;
(statearr_15821_15840[(2)] = inst_15801);

(statearr_15821_15840[(1)] = (11));


return cljs.core.constant$keyword$41;
} else {
if((state_val_15810 === (5))){
var inst_15790 = (state_15809[(7)]);
var inst_15790__$1 = (state_15809[(2)]);
var inst_15791 = cljs.core.seq_QMARK_(inst_15790__$1);
var state_15809__$1 = (function (){var statearr_15822 = state_15809;
(statearr_15822[(7)] = inst_15790__$1);

return statearr_15822;
})();
if(inst_15791){
var statearr_15823_15841 = state_15809__$1;
(statearr_15823_15841[(1)] = (6));

} else {
var statearr_15824_15842 = state_15809__$1;
(statearr_15824_15842[(1)] = (7));

}

return cljs.core.constant$keyword$41;
} else {
if((state_val_15810 === (10))){
var state_15809__$1 = state_15809;
var statearr_15825_15843 = state_15809__$1;
(statearr_15825_15843[(2)] = null);

(statearr_15825_15843[(1)] = (11));


return cljs.core.constant$keyword$41;
} else {
if((state_val_15810 === (8))){
var inst_15797 = (state_15809[(10)]);
var inst_15796 = (state_15809[(2)]);
var inst_15797__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15796,cljs.core.constant$keyword$203);
var inst_15798 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15796,cljs.core.constant$keyword$204);
var inst_15799 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(chatter,cljs.core.concat,inst_15798);
var state_15809__$1 = (function (){var statearr_15826 = state_15809;
(statearr_15826[(11)] = inst_15799);

(statearr_15826[(10)] = inst_15797__$1);

return statearr_15826;
})();
if(cljs.core.truth_(inst_15797__$1)){
var statearr_15827_15844 = state_15809__$1;
(statearr_15827_15844[(1)] = (9));

} else {
var statearr_15828_15845 = state_15809__$1;
(statearr_15828_15845[(1)] = (10));

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
var statearr_15832 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15832[(0)] = state_machine__5839__auto__);

(statearr_15832[(1)] = (1));

return statearr_15832;
});
var state_machine__5839__auto____1 = (function (state_15809){
while(true){
var ret_value__5840__auto__ = (function (){try{while(true){
var result__5841__auto__ = switch__5838__auto__(state_15809);
if(cljs.core.keyword_identical_QMARK_(result__5841__auto__,cljs.core.constant$keyword$41)){
continue;
} else {
return result__5841__auto__;
}
break;
}
}catch (e15833){if((e15833 instanceof Object)){
var ex__5842__auto__ = e15833;
var statearr_15834_15846 = state_15809;
(statearr_15834_15846[(5)] = ex__5842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15809);

return cljs.core.constant$keyword$41;
} else {
throw e15833;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5840__auto__,cljs.core.constant$keyword$41)){
var G__15847 = state_15809;
state_15809 = G__15847;
continue;
} else {
return ret_value__5840__auto__;
}
break;
}
});
state_machine__5839__auto__ = function(state_15809){
switch(arguments.length){
case 0:
return state_machine__5839__auto____0.call(this);
case 1:
return state_machine__5839__auto____1.call(this,state_15809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5839__auto____0;
state_machine__5839__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5839__auto____1;
return state_machine__5839__auto__;
})()
;})(switch__5838__auto__,c__5853__auto__))
})();
var state__5855__auto__ = (function (){var statearr_15835 = (function (){return (f__5854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5854__auto__.cljs$core$IFn$_invoke$arity$0() : f__5854__auto__.call(null));
})();
(statearr_15835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5853__auto__);

return statearr_15835;
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$216,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.chat.chat_row,(function (){var G__15849 = chatter;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15849) : cljs.core.deref.call(null,G__15849));
})())], null);
});
;})(chatter,latest_data))
});
arimaa.chat.scroll_bottom_chat_log = (function (){var scroll_bottom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return cljs.core.with_meta(arimaa.chat.chat_log,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$217,((function (scroll_bottom){
return (function (this$){
var element = reagent.core.dom_node(this$);
var G__15850 = scroll_bottom;
var G__15851 = (element.scrollTop === (element.scrollHeight - element.clientHeight));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15850,G__15851) : cljs.core.reset_BANG_.call(null,G__15850,G__15851));
});})(scroll_bottom))
,cljs.core.constant$keyword$218,((function (scroll_bottom){
return (function (this$){
if(cljs.core.truth_((function (){var G__15852 = scroll_bottom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15852) : cljs.core.deref.call(null,G__15852));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$219,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$115,"text",cljs.core.constant$keyword$220,(function (){var G__15858 = message;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15858) : cljs.core.deref.call(null,G__15858));
})(),cljs.core.constant$keyword$221,(function (p1__15853_SHARP_){
var G__15859 = message;
var G__15860 = p1__15853_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15859,G__15860) : cljs.core.reset_BANG_.call(null,G__15859,G__15860));
}),cljs.core.constant$keyword$222,(function (p1__15854_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__15854_SHARP_.keyCode,(13))){
return (send_chat.cljs$core$IFn$_invoke$arity$0 ? send_chat.cljs$core$IFn$_invoke$arity$0() : send_chat.call(null));
} else {
return null;
}
})], null)], null);
});
arimaa.chat.focused_chat_text_input = cljs.core.with_meta(arimaa.chat.chat_text_input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$223,(function (p1__15861_SHARP_){
return reagent.core.dom_node(p1__15861_SHARP_).focus();
})], null));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$224,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$225,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$226,send_chat], null),"Send"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$208,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.focused_chat_text_input,message,send_chat], null)], null)], null);
});
;})(message,send_chat))
});
arimaa.chat.chat_view = (function chat_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$227,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.scroll_bottom_chat_log], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_input], null)], null);
});
