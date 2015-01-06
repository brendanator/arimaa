// Compiled by ClojureScript 0.0-2657 {}
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$259,arimaa.chat.format_timestamp(cljs.core.constant$keyword$241.cljs$core$IFn$_invoke$arity$1(chat))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$260,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$23,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$245,cljs.core.constant$keyword$245.cljs$core$IFn$_invoke$arity$1(chat)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$261,cljs.core.constant$keyword$242.cljs$core$IFn$_invoke$arity$1(chat)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$262], null),arimaa.utils.markup_user_messages(cljs.core.constant$keyword$69.cljs$core$IFn$_invoke$arity$1(chat)))], null)], null);
});
arimaa.chat.chat_event = (function chat_event(chat,icon,text){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$259,arimaa.chat.format_timestamp(cljs.core.constant$keyword$241.cljs$core$IFn$_invoke$arity$1(chat))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$263,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$261,cljs.core.constant$keyword$242.cljs$core$IFn$_invoke$arity$1(chat)], null),[cljs.core.str(" "),cljs.core.str(text)].join('')], null)], null);
});
arimaa.chat.chat_row = (function chat_row(chat){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$264,(function (){var G__16820 = (((cljs.core.constant$keyword$243.cljs$core$IFn$_invoke$arity$1(chat) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$243.cljs$core$IFn$_invoke$arity$1(chat).fqn:null);
switch (G__16820) {
case "timeout":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_event,chat,cljs.core.constant$keyword$265,"timed out"], null);

break;
case "out":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_event,chat,cljs.core.constant$keyword$266,"went out"], null);

break;
case "in":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_event,chat,cljs.core.constant$keyword$267,"is coming in"], null);

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
var c__12070__auto___16962 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12070__auto___16962,c){
return (function (){
var f__12071__auto__ = (function (){var switch__12055__auto__ = ((function (c__12070__auto___16962,c){
return (function (state_16929){
var state_val_16930 = (state_16929[(1)]);
if((state_val_16930 === (7))){
var inst_16904 = (state_16929[(7)]);
var state_16929__$1 = state_16929;
var statearr_16931_16963 = state_16929__$1;
(statearr_16931_16963[(2)] = inst_16904);

(statearr_16931_16963[(1)] = (8));


return cljs.core.constant$keyword$127;
} else {
if((state_val_16930 === (1))){
var inst_16892 = cljs.core.PersistentVector.EMPTY;
var inst_16893 = inst_16892;
var inst_16894 = null;
var state_16929__$1 = (function (){var statearr_16932 = state_16929;
(statearr_16932[(8)] = inst_16894);

(statearr_16932[(9)] = inst_16893);

return statearr_16932;
})();
var statearr_16933_16964 = state_16929__$1;
(statearr_16933_16964[(2)] = null);

(statearr_16933_16964[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_16930 === (4))){
var inst_16894 = (state_16929[(8)]);
var inst_16898 = (state_16929[(2)]);
var inst_16900 = (function (){var G__16934 = arimaa.state.username;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16934) : cljs.core.deref.call(null,G__16934));
})();
var inst_16901 = arimaa.state.auth();
var inst_16902 = arimaa.requests.fetch_chat(inst_16900,inst_16901,inst_16894);
var state_16929__$1 = (function (){var statearr_16935 = state_16929;
(statearr_16935[(10)] = inst_16898);

return statearr_16935;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16929__$1,(5),inst_16902);
} else {
if((state_val_16930 === (15))){
var inst_16921 = (state_16929[(2)]);
var state_16929__$1 = state_16929;
var statearr_16936_16965 = state_16929__$1;
(statearr_16936_16965[(2)] = inst_16921);

(statearr_16936_16965[(1)] = (11));


return cljs.core.constant$keyword$127;
} else {
if((state_val_16930 === (13))){
var inst_16911 = (state_16929[(11)]);
var inst_16914 = (state_16929[(12)]);
var inst_16893 = inst_16914;
var inst_16894 = inst_16911;
var state_16929__$1 = (function (){var statearr_16937 = state_16929;
(statearr_16937[(8)] = inst_16894);

(statearr_16937[(9)] = inst_16893);

return statearr_16937;
})();
var statearr_16938_16966 = state_16929__$1;
(statearr_16938_16966[(2)] = null);

(statearr_16938_16966[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_16930 === (6))){
var inst_16904 = (state_16929[(7)]);
var inst_16907 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16904);
var state_16929__$1 = state_16929;
var statearr_16939_16967 = state_16929__$1;
(statearr_16939_16967[(2)] = inst_16907);

(statearr_16939_16967[(1)] = (8));


return cljs.core.constant$keyword$127;
} else {
if((state_val_16930 === (3))){
var inst_16927 = (state_16929[(2)]);
var state_16929__$1 = state_16929;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16929__$1,inst_16927);
} else {
if((state_val_16930 === (12))){
var inst_16916 = (state_16929[(2)]);
var state_16929__$1 = state_16929;
if(cljs.core.truth_(inst_16916)){
var statearr_16940_16968 = state_16929__$1;
(statearr_16940_16968[(1)] = (13));

} else {
var statearr_16941_16969 = state_16929__$1;
(statearr_16941_16969[(1)] = (14));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_16930 === (2))){
var inst_16896 = cljs.core.async.timeout((500));
var state_16929__$1 = state_16929;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16929__$1,(4),inst_16896);
} else {
if((state_val_16930 === (11))){
var inst_16925 = (state_16929[(2)]);
var state_16929__$1 = state_16929;
var statearr_16942_16970 = state_16929__$1;
(statearr_16942_16970[(2)] = inst_16925);

(statearr_16942_16970[(1)] = (3));


return cljs.core.constant$keyword$127;
} else {
if((state_val_16930 === (9))){
var inst_16893 = (state_16929[(9)]);
var inst_16912 = (state_16929[(13)]);
var inst_16914 = (state_16929[(12)]);
var inst_16914__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_16893,inst_16912);
var state_16929__$1 = (function (){var statearr_16943 = state_16929;
(statearr_16943[(12)] = inst_16914__$1);

return statearr_16943;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16929__$1,(12),c,inst_16914__$1);
} else {
if((state_val_16930 === (5))){
var inst_16904 = (state_16929[(7)]);
var inst_16904__$1 = (state_16929[(2)]);
var inst_16905 = cljs.core.seq_QMARK_(inst_16904__$1);
var state_16929__$1 = (function (){var statearr_16946 = state_16929;
(statearr_16946[(7)] = inst_16904__$1);

return statearr_16946;
})();
if(inst_16905){
var statearr_16947_16971 = state_16929__$1;
(statearr_16947_16971[(1)] = (6));

} else {
var statearr_16948_16972 = state_16929__$1;
(statearr_16948_16972[(1)] = (7));

}

return cljs.core.constant$keyword$127;
} else {
if((state_val_16930 === (14))){
var state_16929__$1 = state_16929;
var statearr_16949_16973 = state_16929__$1;
(statearr_16949_16973[(2)] = null);

(statearr_16949_16973[(1)] = (15));


return cljs.core.constant$keyword$127;
} else {
if((state_val_16930 === (10))){
var inst_16894 = (state_16929[(8)]);
var inst_16893 = (state_16929[(9)]);
var tmp16944 = inst_16894;
var tmp16945 = inst_16893;
var inst_16893__$1 = tmp16945;
var inst_16894__$1 = tmp16944;
var state_16929__$1 = (function (){var statearr_16950 = state_16929;
(statearr_16950[(8)] = inst_16894__$1);

(statearr_16950[(9)] = inst_16893__$1);

return statearr_16950;
})();
var statearr_16951_16974 = state_16929__$1;
(statearr_16951_16974[(2)] = null);

(statearr_16951_16974[(1)] = (2));


return cljs.core.constant$keyword$127;
} else {
if((state_val_16930 === (8))){
var inst_16911 = (state_16929[(11)]);
var inst_16910 = (state_16929[(2)]);
var inst_16911__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16910,cljs.core.constant$keyword$246);
var inst_16912 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16910,cljs.core.constant$keyword$247);
var state_16929__$1 = (function (){var statearr_16952 = state_16929;
(statearr_16952[(13)] = inst_16912);

(statearr_16952[(11)] = inst_16911__$1);

return statearr_16952;
})();
if(cljs.core.truth_(inst_16911__$1)){
var statearr_16953_16975 = state_16929__$1;
(statearr_16953_16975[(1)] = (9));

} else {
var statearr_16954_16976 = state_16929__$1;
(statearr_16954_16976[(1)] = (10));

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
});})(c__12070__auto___16962,c))
;
return ((function (switch__12055__auto__,c__12070__auto___16962,c){
return (function() {
var state_machine__12056__auto__ = null;
var state_machine__12056__auto____0 = (function (){
var statearr_16958 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16958[(0)] = state_machine__12056__auto__);

(statearr_16958[(1)] = (1));

return statearr_16958;
});
var state_machine__12056__auto____1 = (function (state_16929){
while(true){
var ret_value__12057__auto__ = (function (){try{while(true){
var result__12058__auto__ = switch__12055__auto__(state_16929);
if(cljs.core.keyword_identical_QMARK_(result__12058__auto__,cljs.core.constant$keyword$127)){
continue;
} else {
return result__12058__auto__;
}
break;
}
}catch (e16959){if((e16959 instanceof Object)){
var ex__12059__auto__ = e16959;
var statearr_16960_16977 = state_16929;
(statearr_16960_16977[(5)] = ex__12059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16929);

return cljs.core.constant$keyword$127;
} else {
throw e16959;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12057__auto__,cljs.core.constant$keyword$127)){
var G__16978 = state_16929;
state_16929 = G__16978;
continue;
} else {
return ret_value__12057__auto__;
}
break;
}
});
state_machine__12056__auto__ = function(state_16929){
switch(arguments.length){
case 0:
return state_machine__12056__auto____0.call(this);
case 1:
return state_machine__12056__auto____1.call(this,state_16929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12056__auto____0;
state_machine__12056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12056__auto____1;
return state_machine__12056__auto__;
})()
;})(switch__12055__auto__,c__12070__auto___16962,c))
})();
var state__12072__auto__ = (function (){var statearr_16961 = (function (){return (f__12071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12071__auto__.cljs$core$IFn$_invoke$arity$0() : f__12071__auto__.call(null));
})();
(statearr_16961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12070__auto___16962);

return statearr_16961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12072__auto__);
});})(c__12070__auto___16962,c))
);


return c;
});
arimaa.chat.chat_log = (function chat_log(chat){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.utils.scroll_bottom_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$268,cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.chat.chat_row,(function (){var G__16980 = chat;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16980) : cljs.core.deref.call(null,G__16980));
})())], null)], null);
});
arimaa.chat.chat_log_view = (function chat_log_view(){
var chat = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var chat_chan = arimaa.chat.chat_log_channel();
var mounted_chat_log = cljs.core.with_meta(arimaa.chat.chat_log,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$269,((function (chat,chat_chan){
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
arimaa.requests.send_chat((function (){var G__16990 = arimaa.state.username;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16990) : cljs.core.deref.call(null,G__16990));
})(),arimaa.state.auth(),(function (){var G__16991 = message;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16991) : cljs.core.deref.call(null,G__16991));
})());

var G__16992 = message;
var G__16993 = "";
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16992,G__16993) : cljs.core.reset_BANG_.call(null,G__16992,G__16993));
});})(message))
;
return ((function (message,send_chat){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$270,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$256,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$257,send_chat], null),"Send"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$260,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.utils.initial_focus_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$252,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$45,"text",cljs.core.constant$keyword$253,(function (){var G__16994 = message;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16994) : cljs.core.deref.call(null,G__16994));
})(),cljs.core.constant$keyword$254,((function (message,send_chat){
return (function (p1__16981_SHARP_){
var G__16995 = message;
var G__16996 = p1__16981_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16995,G__16996) : cljs.core.reset_BANG_.call(null,G__16995,G__16996));
});})(message,send_chat))
,cljs.core.constant$keyword$255,((function (message,send_chat){
return (function (p1__16982_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16982_SHARP_.keyCode,(13))){
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$271,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_log_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_input], null)], null);
});
