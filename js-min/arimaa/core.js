// Compiled by ClojureScript 0.0-2371
goog.provide('arimaa.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
goog.require('cljs_http.client');
goog.require('reagent.core');
goog.require('reagent.core');
arimaa.core.log = (function log(message){return console.log(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([message], 0)));
});
arimaa.core.user = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
arimaa.core.session_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
arimaa.core.gameroom_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
arimaa.core.logged_in = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
arimaa.core.open_games = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
arimaa.core.chat = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("Empty?");
arimaa.core.login = (function login(username,password){var c__5823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5823__auto__){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto__){
return (function (state_14895){var state_val_14896 = (state_14895[(1)]);if((state_val_14896 === (2)))
{var inst_14885 = (state_14895[(2)]);var inst_14886 = cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(inst_14885);var inst_14887 = arimaa.core.log(inst_14886);var inst_14888 = (function (){var G__14897 = arimaa.core.user;var G__14898 = username;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14897,G__14898) : cljs.core.reset_BANG_.call(null,G__14897,G__14898));
})();var inst_14889 = cljs.core.constant$keyword$98.cljs$core$IFn$_invoke$arity$1(inst_14886);var inst_14890 = (function (){var G__14899 = arimaa.core.session_id;var G__14900 = inst_14889;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14899,G__14900) : cljs.core.reset_BANG_.call(null,G__14899,G__14900));
})();var inst_14891 = cljs.core.constant$keyword$99.cljs$core$IFn$_invoke$arity$1(inst_14886);var inst_14892 = (function (){var G__14901 = arimaa.core.gameroom_id;var G__14902 = inst_14891;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14901,G__14902) : cljs.core.reset_BANG_.call(null,G__14901,G__14902));
})();var inst_14893 = (function (){var G__14903 = arimaa.core.logged_in;var G__14904 = true;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14903,G__14904) : cljs.core.reset_BANG_.call(null,G__14903,G__14904));
})();var state_14895__$1 = (function (){var statearr_14905 = state_14895;(statearr_14905[(7)] = inst_14892);
(statearr_14905[(8)] = inst_14887);
(statearr_14905[(9)] = inst_14890);
(statearr_14905[(10)] = inst_14888);
return statearr_14905;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_14895__$1,inst_14893);
} else
{if((state_val_14896 === (1)))
{var inst_14877 = [cljs.core.constant$keyword$86];var inst_14878 = [cljs.core.constant$keyword$100,cljs.core.constant$keyword$47,cljs.core.constant$keyword$39];var inst_14879 = ["login",username,password];var inst_14880 = cljs.core.PersistentHashMap.fromArrays(inst_14878,inst_14879);var inst_14881 = [inst_14880];var inst_14882 = cljs.core.PersistentHashMap.fromArrays(inst_14877,inst_14881);var inst_14883 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("http://arimaa.com/arimaa/chat/srv.php",cljs.core.array_seq([inst_14882], 0));var state_14895__$1 = state_14895;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14895__$1,(2),inst_14883);
} else
{return null;
}
}
});})(c__5823__auto__))
;return ((function (switch__5808__auto__,c__5823__auto__){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_14909 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14909[(0)] = state_machine__5809__auto__);
(statearr_14909[(1)] = (1));
return statearr_14909;
});
var state_machine__5809__auto____1 = (function (state_14895){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__(state_14895);if(cljs.core.keyword_identical_QMARK_(result__5811__auto__,cljs.core.constant$keyword$49))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e14910){if((e14910 instanceof Object))
{var ex__5812__auto__ = e14910;var statearr_14911_14913 = state_14895;(statearr_14911_14913[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_14895);
return cljs.core.constant$keyword$49;
} else
{throw e14910;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5810__auto__,cljs.core.constant$keyword$49))
{{
var G__14914 = state_14895;
state_14895 = G__14914;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_14895){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_14895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto__))
})();var state__5825__auto__ = (function (){var statearr_14912 = (function (){return (f__5824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5824__auto__.cljs$core$IFn$_invoke$arity$0() : f__5824__auto__.call(null));
})();(statearr_14912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto__);
return statearr_14912;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5825__auto__);
});})(c__5823__auto__))
);
return c__5823__auto__;
});
arimaa.core.load_chat = (function load_chat(){var c__5823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5823__auto__){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto__){
return (function (state_14957){var state_val_14958 = (state_14957[(1)]);if((state_val_14958 === (2)))
{var inst_14953 = (state_14957[(2)]);var inst_14954 = arimaa.core.log(inst_14953);var inst_14955 = (function (){var G__14959 = arimaa.core.chat;var G__14960 = inst_14953;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14959,G__14960) : cljs.core.reset_BANG_.call(null,G__14959,G__14960));
})();var state_14957__$1 = (function (){var statearr_14961 = state_14957;(statearr_14961[(7)] = inst_14954);
return statearr_14961;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_14957__$1,inst_14955);
} else
{if((state_val_14958 === (1)))
{var inst_14943 = [cljs.core.constant$keyword$86];var inst_14944 = [cljs.core.constant$keyword$40,cljs.core.constant$keyword$101,cljs.core.constant$keyword$102];var inst_14945 = (function (){var G__14962 = arimaa.core.user;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14962) : cljs.core.deref.call(null,G__14962));
})();var inst_14946 = (function (){var G__14963 = arimaa.core.session_id;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14963) : cljs.core.deref.call(null,G__14963));
})();var inst_14947 = [inst_14945,inst_14946,"fetch"];var inst_14948 = cljs.core.PersistentHashMap.fromArrays(inst_14944,inst_14947);var inst_14949 = [inst_14948];var inst_14950 = cljs.core.PersistentHashMap.fromArrays(inst_14943,inst_14949);var inst_14951 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("http://arimaa.com/arimaa/chat/srv.php",cljs.core.array_seq([inst_14950], 0));var state_14957__$1 = state_14957;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14957__$1,(2),inst_14951);
} else
{return null;
}
}
});})(c__5823__auto__))
;return ((function (switch__5808__auto__,c__5823__auto__){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_14967 = [null,null,null,null,null,null,null,null];(statearr_14967[(0)] = state_machine__5809__auto__);
(statearr_14967[(1)] = (1));
return statearr_14967;
});
var state_machine__5809__auto____1 = (function (state_14957){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__(state_14957);if(cljs.core.keyword_identical_QMARK_(result__5811__auto__,cljs.core.constant$keyword$49))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e14968){if((e14968 instanceof Object))
{var ex__5812__auto__ = e14968;var statearr_14969_14971 = state_14957;(statearr_14969_14971[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_14957);
return cljs.core.constant$keyword$49;
} else
{throw e14968;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5810__auto__,cljs.core.constant$keyword$49))
{{
var G__14972 = state_14957;
state_14957 = G__14972;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_14957){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_14957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto__))
})();var state__5825__auto__ = (function (){var statearr_14970 = (function (){return (f__5824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5824__auto__.cljs$core$IFn$_invoke$arity$0() : f__5824__auto__.call(null));
})();(statearr_14970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto__);
return statearr_14970;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5825__auto__);
});})(c__5823__auto__))
);
return c__5823__auto__;
});
arimaa.core.my_games = (function my_games(){var c__5823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5823__auto__){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto__){
return (function (state_15007){var state_val_15008 = (state_15007[(1)]);if((state_val_15008 === (2)))
{var inst_15004 = (state_15007[(2)]);var inst_15005 = arimaa.core.log(inst_15004);var state_15007__$1 = state_15007;return cljs.core.async.impl.ioc_helpers.return_chan(state_15007__$1,inst_15005);
} else
{if((state_val_15008 === (1)))
{var inst_14995 = [cljs.core.constant$keyword$86];var inst_14996 = [cljs.core.constant$keyword$100,cljs.core.constant$keyword$98];var inst_14997 = (function (){var G__15009 = arimaa.core.session_id;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15009) : cljs.core.deref.call(null,G__15009));
})();var inst_14998 = ["mygames",inst_14997];var inst_14999 = cljs.core.PersistentHashMap.fromArrays(inst_14996,inst_14998);var inst_15000 = [inst_14999];var inst_15001 = cljs.core.PersistentHashMap.fromArrays(inst_14995,inst_15000);var inst_15002 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/arimaa-command",cljs.core.array_seq([inst_15001], 0));var state_15007__$1 = state_15007;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15007__$1,(2),inst_15002);
} else
{return null;
}
}
});})(c__5823__auto__))
;return ((function (switch__5808__auto__,c__5823__auto__){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_15013 = [null,null,null,null,null,null,null];(statearr_15013[(0)] = state_machine__5809__auto__);
(statearr_15013[(1)] = (1));
return statearr_15013;
});
var state_machine__5809__auto____1 = (function (state_15007){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__(state_15007);if(cljs.core.keyword_identical_QMARK_(result__5811__auto__,cljs.core.constant$keyword$49))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e15014){if((e15014 instanceof Object))
{var ex__5812__auto__ = e15014;var statearr_15015_15017 = state_15007;(statearr_15015_15017[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_15007);
return cljs.core.constant$keyword$49;
} else
{throw e15014;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5810__auto__,cljs.core.constant$keyword$49))
{{
var G__15018 = state_15007;
state_15007 = G__15018;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_15007){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_15007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto__))
})();var state__5825__auto__ = (function (){var statearr_15016 = (function (){return (f__5824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5824__auto__.cljs$core$IFn$_invoke$arity$0() : f__5824__auto__.call(null));
})();(statearr_15016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto__);
return statearr_15016;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5825__auto__);
});})(c__5823__auto__))
);
return c__5823__auto__;
});
arimaa.core.load_open_games = (function load_open_games(){var c__5823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5823__auto__){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto__){
return (function (state_15064){var state_val_15065 = (state_15064[(1)]);if((state_val_15065 === (2)))
{var inst_15058 = (state_15064[(2)]);var inst_15059 = arimaa.core.log(inst_15058);var inst_15060 = cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(inst_15058);var inst_15061 = cljs.core.constant$keyword$103.cljs$core$IFn$_invoke$arity$1(inst_15060);var inst_15062 = (function (){var G__15066 = arimaa.core.open_games;var G__15067 = inst_15061;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15066,G__15067) : cljs.core.reset_BANG_.call(null,G__15066,G__15067));
})();var state_15064__$1 = (function (){var statearr_15068 = state_15064;(statearr_15068[(7)] = inst_15059);
return statearr_15068;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_15064__$1,inst_15062);
} else
{if((state_val_15065 === (1)))
{var inst_15048 = [cljs.core.constant$keyword$86];var inst_15049 = (function (){var G__15069 = arimaa.core.session_id;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15069) : cljs.core.deref.call(null,G__15069));
})();var inst_15050 = ("{\"sid\":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_15049)+"\",\"action\":\"state\"}");var inst_15051 = [cljs.core.constant$keyword$92,inst_15050];var inst_15052 = ["http://arimaa.com/arimaa/gameroom/client2gr.cgi",""];var inst_15053 = cljs.core.PersistentHashMap.fromArrays(inst_15051,inst_15052);var inst_15054 = [inst_15053];var inst_15055 = cljs.core.PersistentHashMap.fromArrays(inst_15048,inst_15054);var inst_15056 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/arimaa-command",cljs.core.array_seq([inst_15055], 0));var state_15064__$1 = state_15064;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15064__$1,(2),inst_15056);
} else
{return null;
}
}
});})(c__5823__auto__))
;return ((function (switch__5808__auto__,c__5823__auto__){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_15073 = [null,null,null,null,null,null,null,null];(statearr_15073[(0)] = state_machine__5809__auto__);
(statearr_15073[(1)] = (1));
return statearr_15073;
});
var state_machine__5809__auto____1 = (function (state_15064){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__(state_15064);if(cljs.core.keyword_identical_QMARK_(result__5811__auto__,cljs.core.constant$keyword$49))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e15074){if((e15074 instanceof Object))
{var ex__5812__auto__ = e15074;var statearr_15075_15077 = state_15064;(statearr_15075_15077[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_15064);
return cljs.core.constant$keyword$49;
} else
{throw e15074;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5810__auto__,cljs.core.constant$keyword$49))
{{
var G__15078 = state_15064;
state_15064 = G__15078;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_15064){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_15064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto__))
})();var state__5825__auto__ = (function (){var statearr_15076 = (function (){return (f__5824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5824__auto__.cljs$core$IFn$_invoke$arity$0() : f__5824__auto__.call(null));
})();(statearr_15076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto__);
return statearr_15076;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5825__auto__);
});})(c__5823__auto__))
);
return c__5823__auto__;
});
arimaa.core.update_games = (function update_games(){var c__5823__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5823__auto__){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto__){
return (function (state_15137){var state_val_15138 = (state_15137[(1)]);if((state_val_15138 === (7)))
{var inst_15123 = (state_15137[(2)]);var inst_15124 = (function (){var G__15139 = arimaa.core.logged_in;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15139) : cljs.core.deref.call(null,G__15139));
})();var state_15137__$1 = (function (){var statearr_15140 = state_15137;(statearr_15140[(7)] = inst_15123);
return statearr_15140;
})();if(cljs.core.truth_(inst_15124))
{var statearr_15141_15159 = state_15137__$1;(statearr_15141_15159[(1)] = (8));
} else
{var statearr_15142_15160 = state_15137__$1;(statearr_15142_15160[(1)] = (9));
}
return cljs.core.constant$keyword$49;
} else
{if((state_val_15138 === (1)))
{var state_15137__$1 = state_15137;var statearr_15143_15161 = state_15137__$1;(statearr_15143_15161[(2)] = null);
(statearr_15143_15161[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{if((state_val_15138 === (4)))
{var inst_15121 = cljs.core.async.timeout((5000));var state_15137__$1 = state_15137;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15137__$1,(7),inst_15121);
} else
{if((state_val_15138 === (6)))
{var inst_15133 = (state_15137[(2)]);var state_15137__$1 = state_15137;var statearr_15144_15162 = state_15137__$1;(statearr_15144_15162[(2)] = inst_15133);
(statearr_15144_15162[(1)] = (3));
return cljs.core.constant$keyword$49;
} else
{if((state_val_15138 === (3)))
{var inst_15135 = (state_15137[(2)]);var state_15137__$1 = state_15137;return cljs.core.async.impl.ioc_helpers.return_chan(state_15137__$1,inst_15135);
} else
{if((state_val_15138 === (2)))
{var state_15137__$1 = state_15137;var statearr_15145_15163 = state_15137__$1;(statearr_15145_15163[(1)] = (4));

return cljs.core.constant$keyword$49;
} else
{if((state_val_15138 === (9)))
{var state_15137__$1 = state_15137;var statearr_15147_15164 = state_15137__$1;(statearr_15147_15164[(2)] = null);
(statearr_15147_15164[(1)] = (10));
return cljs.core.constant$keyword$49;
} else
{if((state_val_15138 === (5)))
{var state_15137__$1 = state_15137;var statearr_15148_15165 = state_15137__$1;(statearr_15148_15165[(2)] = null);
(statearr_15148_15165[(1)] = (6));
return cljs.core.constant$keyword$49;
} else
{if((state_val_15138 === (10)))
{var inst_15128 = (state_15137[(2)]);var inst_15129 = arimaa.core.load_open_games();var state_15137__$1 = (function (){var statearr_15149 = state_15137;(statearr_15149[(8)] = inst_15129);
(statearr_15149[(9)] = inst_15128);
return statearr_15149;
})();var statearr_15150_15166 = state_15137__$1;(statearr_15150_15166[(2)] = null);
(statearr_15150_15166[(1)] = (2));
return cljs.core.constant$keyword$49;
} else
{if((state_val_15138 === (8)))
{var state_15137__$1 = state_15137;var statearr_15151_15167 = state_15137__$1;(statearr_15151_15167[(2)] = null);
(statearr_15151_15167[(1)] = (10));
return cljs.core.constant$keyword$49;
} else
{return null;
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
});})(c__5823__auto__))
;return ((function (switch__5808__auto__,c__5823__auto__){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_15155 = [null,null,null,null,null,null,null,null,null,null];(statearr_15155[(0)] = state_machine__5809__auto__);
(statearr_15155[(1)] = (1));
return statearr_15155;
});
var state_machine__5809__auto____1 = (function (state_15137){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__(state_15137);if(cljs.core.keyword_identical_QMARK_(result__5811__auto__,cljs.core.constant$keyword$49))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e15156){if((e15156 instanceof Object))
{var ex__5812__auto__ = e15156;var statearr_15157_15168 = state_15137;(statearr_15157_15168[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_15137);
return cljs.core.constant$keyword$49;
} else
{throw e15156;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5810__auto__,cljs.core.constant$keyword$49))
{{
var G__15169 = state_15137;
state_15137 = G__15169;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_15137){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_15137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto__))
})();var state__5825__auto__ = (function (){var statearr_15158 = (function (){return (f__5824__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5824__auto__.cljs$core$IFn$_invoke$arity$0() : f__5824__auto__.call(null));
})();(statearr_15158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto__);
return statearr_15158;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5825__auto__);
});})(c__5823__auto__))
);
return c__5823__auto__;
});
arimaa.core.game_row = (function game_row(game){return null;
});
arimaa.core.games = (function games(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$104,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$105,"Games"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$105,(function (){var G__15178 = arimaa.core.session_id;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15178) : cljs.core.deref.call(null,G__15178));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$106,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$107,(function (){var iter__4379__auto__ = (function iter__15179(s__15180){return (new cljs.core.LazySeq(null,(function (){var s__15180__$1 = s__15180;while(true){
var temp__4126__auto__ = cljs.core.seq(s__15180__$1);if(temp__4126__auto__)
{var s__15180__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__15180__$2))
{var c__4377__auto__ = cljs.core.chunk_first(s__15180__$2);var size__4378__auto__ = cljs.core.count(c__4377__auto__);var b__15182 = cljs.core.chunk_buffer(size__4378__auto__);if((function (){var i__15181 = (0);while(true){
if((i__15181 < size__4378__auto__))
{var game = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4377__auto__,i__15181);cljs.core.chunk_append(b__15182,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$108,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$109,cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(game)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$109,cljs.core.constant$keyword$111.cljs$core$IFn$_invoke$arity$1(game)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$109,cljs.core.constant$keyword$112.cljs$core$IFn$_invoke$arity$1(game)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$109,cljs.core.constant$keyword$113.cljs$core$IFn$_invoke$arity$1(game)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$30,cljs.core.constant$keyword$114.cljs$core$IFn$_invoke$arity$1(game)], null)));
{
var G__15186 = (i__15181 + (1));
i__15181 = G__15186;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__15182),iter__15179(cljs.core.chunk_rest(s__15180__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__15182),null);
}
} else
{var game = cljs.core.first(s__15180__$2);return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$108,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$109,cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(game)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$109,cljs.core.constant$keyword$111.cljs$core$IFn$_invoke$arity$1(game)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$109,cljs.core.constant$keyword$112.cljs$core$IFn$_invoke$arity$1(game)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$109,cljs.core.constant$keyword$113.cljs$core$IFn$_invoke$arity$1(game)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$30,cljs.core.constant$keyword$114.cljs$core$IFn$_invoke$arity$1(game)], null)),iter__15179(cljs.core.rest(s__15180__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4379__auto__((function (){var G__15185 = arimaa.core.open_games;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15185) : cljs.core.deref.call(null,G__15185));
})());
})()], null)], null)], null);
});
arimaa.core.chat_view = (function chat_view(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$115,(function (){var G__15188 = arimaa.core.chat;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15188) : cljs.core.deref.call(null,G__15188));
})()], null);
});
arimaa.core.arimaa_web = (function arimaa_web(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$104,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.core.games], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.core.chat_view], null)], null);
});
arimaa.core.run = (function run(){reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.core.arimaa_web], null),document.body);
arimaa.core.login("Brendan_M","M2n#k7e9#U@$");
return arimaa.core.update_games();
});
goog.exportSymbol('arimaa.core.run', arimaa.core.run);
