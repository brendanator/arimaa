// Compiled by ClojureScript 0.0-2727 {}
goog.provide('arimaa.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('arimaa.state');
goog.require('arimaa.login');
goog.require('arimaa.gameroom');
goog.require('arimaa.chat');
cljs.core.enable_console_print_BANG_();
arimaa.core.arimaa_web = (function arimaa_web(){
if(arimaa.state.logged_in()){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$295,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.chat.chat_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.gameroom.gameroom_view], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.login.login_view], null);
}
});
arimaa.core.run = (function run(){
return reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arimaa.core.arimaa_web], null),document.body);
});
goog.exportSymbol('arimaa.core.run', arimaa.core.run);
