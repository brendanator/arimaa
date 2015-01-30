// Compiled by ClojureScript 0.0-2727 {}
goog.provide('arimaa.login');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('arimaa.utils');
goog.require('arimaa.state');
goog.require('arimaa.requests');
arimaa.login.login = (function login(username_input,password,login_error){
var c__11733__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11733__auto__){
return (function (){
var f__11734__auto__ = (function (){var switch__11653__auto__ = ((function (c__11733__auto__){
return (function (state_16690){
var state_val_16691 = (state_16690[(1)]);
if((state_val_16691 === (5))){
var inst_16688 = (state_16690[(2)]);
var state_16690__$1 = state_16690;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16690__$1,inst_16688);
} else {
if((state_val_16691 === (4))){
var inst_16676 = (state_16690[(7)]);
var inst_16682 = (function (){var G__16692 = arimaa.state.username;
var G__16693 = username_input;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16692,G__16693) : cljs.core.reset_BANG_.call(null,G__16692,G__16693));
})();
var inst_16683 = cljs.core.constant$keyword$226.cljs$core$IFn$_invoke$arity$1(inst_16676);
var inst_16684 = (function (){var G__16694 = arimaa.state.session_id;
var G__16695 = inst_16683;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16694,G__16695) : cljs.core.reset_BANG_.call(null,G__16694,G__16695));
})();
var inst_16685 = cljs.core.constant$keyword$229.cljs$core$IFn$_invoke$arity$1(inst_16676);
var inst_16686 = (function (){var G__16696 = arimaa.state.gameroom_id;
var G__16697 = inst_16685;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16696,G__16697) : cljs.core.reset_BANG_.call(null,G__16696,G__16697));
})();
var state_16690__$1 = (function (){var statearr_16698 = state_16690;
(statearr_16698[(8)] = inst_16682);

(statearr_16698[(9)] = inst_16684);

return statearr_16698;
})();
var statearr_16699_16713 = state_16690__$1;
(statearr_16699_16713[(2)] = inst_16686);

(statearr_16699_16713[(1)] = (5));


return cljs.core.constant$keyword$65;
} else {
if((state_val_16691 === (3))){
var inst_16676 = (state_16690[(7)]);
var inst_16679 = cljs.core.constant$keyword$222.cljs$core$IFn$_invoke$arity$1(inst_16676);
var inst_16680 = (function (){var G__16700 = login_error;
var G__16701 = inst_16679;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16700,G__16701) : cljs.core.reset_BANG_.call(null,G__16700,G__16701));
})();
var state_16690__$1 = state_16690;
var statearr_16702_16714 = state_16690__$1;
(statearr_16702_16714[(2)] = inst_16680);

(statearr_16702_16714[(1)] = (5));


return cljs.core.constant$keyword$65;
} else {
if((state_val_16691 === (2))){
var inst_16676 = (state_16690[(7)]);
var inst_16676__$1 = (state_16690[(2)]);
var inst_16677 = cljs.core.constant$keyword$222.cljs$core$IFn$_invoke$arity$1(inst_16676__$1);
var state_16690__$1 = (function (){var statearr_16703 = state_16690;
(statearr_16703[(7)] = inst_16676__$1);

return statearr_16703;
})();
if(cljs.core.truth_(inst_16677)){
var statearr_16704_16715 = state_16690__$1;
(statearr_16704_16715[(1)] = (3));

} else {
var statearr_16705_16716 = state_16690__$1;
(statearr_16705_16716[(1)] = (4));

}

return cljs.core.constant$keyword$65;
} else {
if((state_val_16691 === (1))){
var inst_16674 = arimaa.requests.login(username_input,password);
var state_16690__$1 = state_16690;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16690__$1,(2),inst_16674);
} else {
return null;
}
}
}
}
}
});})(c__11733__auto__))
;
return ((function (switch__11653__auto__,c__11733__auto__){
return (function() {
var state_machine__11654__auto__ = null;
var state_machine__11654__auto____0 = (function (){
var statearr_16709 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16709[(0)] = state_machine__11654__auto__);

(statearr_16709[(1)] = (1));

return statearr_16709;
});
var state_machine__11654__auto____1 = (function (state_16690){
while(true){
var ret_value__11655__auto__ = (function (){try{while(true){
var result__11656__auto__ = switch__11653__auto__(state_16690);
if(cljs.core.keyword_identical_QMARK_(result__11656__auto__,cljs.core.constant$keyword$65)){
continue;
} else {
return result__11656__auto__;
}
break;
}
}catch (e16710){if((e16710 instanceof Object)){
var ex__11657__auto__ = e16710;
var statearr_16711_16717 = state_16690;
(statearr_16711_16717[(5)] = ex__11657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16690);

return cljs.core.constant$keyword$65;
} else {
throw e16710;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11655__auto__,cljs.core.constant$keyword$65)){
var G__16718 = state_16690;
state_16690 = G__16718;
continue;
} else {
return ret_value__11655__auto__;
}
break;
}
});
state_machine__11654__auto__ = function(state_16690){
switch(arguments.length){
case 0:
return state_machine__11654__auto____0.call(this);
case 1:
return state_machine__11654__auto____1.call(this,state_16690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11654__auto____0;
state_machine__11654__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11654__auto____1;
return state_machine__11654__auto__;
})()
;})(switch__11653__auto__,c__11733__auto__))
})();
var state__11735__auto__ = (function (){var statearr_16712 = (function (){return (f__11734__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11734__auto__.cljs$core$IFn$_invoke$arity$0() : f__11734__auto__.call(null));
})();
(statearr_16712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11733__auto__);

return statearr_16712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11735__auto__);
});})(c__11733__auto__))
);

return c__11733__auto__;
});
arimaa.login.login_view = (function login_view(){
var username_input = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var password = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var login_error = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var login = ((function (username_input,password,login_error){
return (function (){
return arimaa.login.login((function (){var G__16733 = username_input;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16733) : cljs.core.deref.call(null,G__16733));
})(),(function (){var G__16734 = password;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16734) : cljs.core.deref.call(null,G__16734));
})(),login_error);
});})(username_input,password,login_error))
;
return ((function (username_input,password,login_error,login){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$269,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$270,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$128,"username"], null),"Username"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.utils.initial_focus_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$264,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$162,"username",cljs.core.constant$keyword$265,(function (){var G__16735 = username_input;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16735) : cljs.core.deref.call(null,G__16735));
})(),cljs.core.constant$keyword$139,"text",cljs.core.constant$keyword$266,((function (username_input,password,login_error,login){
return (function (p1__16719_SHARP_){
var G__16736 = username_input;
var G__16737 = p1__16719_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16736,G__16737) : cljs.core.reset_BANG_.call(null,G__16736,G__16737));
});})(username_input,password,login_error,login))
,cljs.core.constant$keyword$267,((function (username_input,password,login_error,login){
return (function (p1__16720_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16720_SHARP_.keyCode,(13))){
return login();
} else {
return null;
}
});})(username_input,password,login_error,login))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$270,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$128,"password"], null),"Password"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$264,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$162,"password",cljs.core.constant$keyword$265,(function (){var G__16738 = password;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16738) : cljs.core.deref.call(null,G__16738));
})(),cljs.core.constant$keyword$139,"password",cljs.core.constant$keyword$266,((function (username_input,password,login_error,login){
return (function (p1__16721_SHARP_){
var G__16739 = password;
var G__16740 = p1__16721_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16739,G__16740) : cljs.core.reset_BANG_.call(null,G__16739,G__16740));
});})(username_input,password,login_error,login))
,cljs.core.constant$keyword$267,((function (username_input,password,login_error,login){
return (function (p1__16722_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16722_SHARP_.keyCode,(13))){
return login();
} else {
return null;
}
});})(username_input,password,login_error,login))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$262,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$263,login], null),"Login"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$220,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$221,"http://arimaa.com/arimaa/gameroom/"], null),"Register"], null),(cljs.core.truth_((function (){var G__16741 = login_error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16741) : cljs.core.deref.call(null,G__16741));
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$271,(function (){var G__16742 = login_error;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16742) : cljs.core.deref.call(null,G__16742));
})()], null):null)], null);
});
;})(username_input,password,login_error,login))
});
