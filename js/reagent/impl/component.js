// Compiled by ClojureScript 0.0-2511
goog.provide('reagent.impl.component');
goog.require('cljs.core');
goog.require('reagent.debug');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.util');
reagent.impl.component.state_atom = (function state_atom(this$){
var sa = (this$["cljsState"]);
if(!((sa == null))){
return sa;
} else {
return (this$["cljsState"] = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null));
}
});
reagent.impl.component.state = (function state(this$){
var G__16894 = reagent.impl.component.state_atom(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16894) : cljs.core.deref.call(null,G__16894));
});
reagent.impl.component.replace_state = (function replace_state(this$,new_state){
var G__16897 = reagent.impl.component.state_atom(this$);
var G__16898 = new_state;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16897,G__16898) : cljs.core.reset_BANG_.call(null,G__16897,G__16898));
});
reagent.impl.component.set_state = (function set_state(this$,new_state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.impl.component.state_atom(this$),cljs.core.merge,new_state);
});
reagent.impl.component.do_render = (function do_render(c){
var _STAR_current_component_STAR_16913 = reagent.impl.component._STAR_current_component_STAR_;
try{reagent.impl.component._STAR_current_component_STAR_ = c;

var f = (c["cljsRender"]);
var _ = ((reagent.impl.util.clj_ifn_QMARK_(f))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("util","clj-ifn?","util/clj-ifn?",259370460,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')))})());
var p = (c["props"]);
var res = ((((c["componentFunction"]) == null))?(function (){var G__16914 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16914) : f.call(null,G__16914));
})():(function (){var argv = (p["argv"]);
var n = cljs.core.count(argv);
var G__16915 = n;
switch (G__16915) {
case (1):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (2):
var G__16916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16916) : f.call(null,G__16916));

break;
case (3):
var G__16917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__16918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16917,G__16918) : f.call(null,G__16917,G__16918));

break;
case (4):
var G__16919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__16920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
var G__16921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__16919,G__16920,G__16921) : f.call(null,G__16919,G__16920,G__16921));

break;
case (5):
var G__16922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__16923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
var G__16924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3));
var G__16925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(4));
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__16922,G__16923,G__16924,G__16925) : f.call(null,G__16922,G__16923,G__16924,G__16925));

break;
default:
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(argv,(1)));

}
})());
if(cljs.core.vector_QMARK_(res)){
return (c["asComponent"])(res,(p["level"]));
} else {
if(cljs.core.ifn_QMARK_(res)){
(c["cljsRender"] = res);

return do_render(c);
} else {
return res;
}
}
}finally {reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR_16913;
}});
reagent.impl.component.custom_wrapper = (function custom_wrapper(key,f){
var G__16939 = (((key instanceof cljs.core.Keyword))?key.fqn:null);
switch (G__16939) {
case "componentWillUnmount":
return ((function (G__16939){
return (function (){
var c = this;
reagent.impl.batching.dispose(c);

if((f == null)){
return null;
} else {
var G__16940 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16940) : f.call(null,G__16940));
}
});
;})(G__16939))

break;
case "componentDidUpdate":
return ((function (G__16939){
return (function (oldprops){
var c = this;
var G__16941 = c;
var G__16942 = (oldprops["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16941,G__16942) : f.call(null,G__16941,G__16942));
});
;})(G__16939))

break;
case "componentWillUpdate":
return ((function (G__16939){
return (function (nextprops){
var c = this;
var G__16943 = c;
var G__16944 = (nextprops["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16943,G__16944) : f.call(null,G__16943,G__16944));
});
;})(G__16939))

break;
case "shouldComponentUpdate":
return ((function (G__16939){
return (function (nextprops,nextstate){
var or__3630__auto__ = reagent.impl.util._STAR_always_update_STAR_;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
var c = this;
var old_argv = (c["props"]["argv"]);
var new_argv = (nextprops["argv"]);
if((f == null)){
return cljs.core.not(reagent.impl.util.equal_args(old_argv,new_argv));
} else {
var G__16945 = c;
var G__16946 = old_argv;
var G__16947 = new_argv;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__16945,G__16946,G__16947) : f.call(null,G__16945,G__16946,G__16947));
}
}
});
;})(G__16939))

break;
case "componentWillReceiveProps":
return ((function (G__16939){
return (function (props){
var c = this;
var G__16948 = c;
var G__16949 = (props["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16948,G__16949) : f.call(null,G__16948,G__16949));
});
;})(G__16939))

break;
case "getInitialState":
return ((function (G__16939){
return (function (){
var c = this;
return reagent.impl.component.set_state(c,(function (){var G__16950 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16950) : f.call(null,G__16950));
})());
});
;})(G__16939))

break;
case "getDefaultProps":
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("getDefaultProps not supported yet"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0)))].join('')));


break;
default:
return null;

}
});
reagent.impl.component.default_wrapper = (function default_wrapper(f){
if(cljs.core.ifn_QMARK_(f)){
return (function() { 
var G__16952__delegate = function (args){
var c = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,c,args);
};
var G__16952 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__16952__delegate.call(this,args);};
G__16952.cljs$lang$maxFixedArity = 0;
G__16952.cljs$lang$applyTo = (function (arglist__16953){
var args = cljs.core.seq(arglist__16953);
return G__16952__delegate(args);
});
G__16952.cljs$core$IFn$_invoke$arity$variadic = G__16952__delegate;
return G__16952;
})()
;
} else {
return f;
}
});
reagent.impl.component.dont_wrap = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$28,null,cljs.core.constant$keyword$29,null,cljs.core.constant$keyword$30,null], null), null);
reagent.impl.component.dont_bind = (function dont_bind(f){
if(cljs.core.ifn_QMARK_(f)){
var G__16955 = f;
(G__16955["__reactDontBind"] = true);

return G__16955;
} else {
return f;
}
});
reagent.impl.component.get_wrapper = (function get_wrapper(key,f,name){
if(cljs.core.truth_((function (){var G__16957 = key;
return (reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1(G__16957) : reagent.impl.component.dont_wrap.call(null,G__16957));
})())){
return reagent.impl.component.dont_bind(f);
} else {
var wrap = reagent.impl.component.custom_wrapper(key,f);
if(cljs.core.truth_((function (){var and__3618__auto__ = wrap;
if(cljs.core.truth_(and__3618__auto__)){
return f;
} else {
return and__3618__auto__;
}
})())){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Expected function in "),cljs.core.str(name),cljs.core.str(key),cljs.core.str(" but got "),cljs.core.str(f)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}
} else {
}

var or__3630__auto__ = wrap;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return reagent.impl.component.default_wrapper(f);
}
}
});
reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$31,null,cljs.core.constant$keyword$32,null], null);
reagent.impl.component.dash_to_camel = reagent.impl.util.memoize_1(reagent.impl.util.dash_to_camel);
reagent.impl.component.camelify_map_keys = (function camelify_map_keys(fun_map){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var G__16959 = k;
return (reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1(G__16959) : reagent.impl.component.dash_to_camel.call(null,G__16959));
})()),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
reagent.impl.component.add_obligatory = (function add_obligatory(fun_map){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.impl.component.obligatory,fun_map], 0));
});
reagent.impl.component.add_render = (function add_render(fun_map,render_f){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fun_map,cljs.core.constant$keyword$28,render_f,cljs.core.array_seq([cljs.core.constant$keyword$29,(cljs.core.truth_(reagent.impl.util.is_client)?(function (){
var c = this;
return reagent.impl.batching.run_reactively(c,((function (c){
return (function (){
return reagent.impl.component.do_render(c);
});})(c))
);
}):(function (){
var c = this;
return reagent.impl.component.do_render(c);
}))], 0));
});
reagent.impl.component.wrap_funs = (function wrap_funs(fun_map){
var render_fun = (function (){var or__3630__auto__ = cljs.core.constant$keyword$30.cljs$core$IFn$_invoke$arity$1(fun_map);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return cljs.core.constant$keyword$29.cljs$core$IFn$_invoke$arity$1(fun_map);
}
})();
var _ = ((reagent.impl.util.clj_ifn_QMARK_(render_fun))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Render must be a function, not "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([render_fun], 0)))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("util","clj-ifn?","util/clj-ifn?",259370460,null),new cljs.core.Symbol(null,"render-fun","render-fun",-1209513086,null))], 0)))].join('')))})());
var name = (function (){var or__3630__auto__ = cljs.core.constant$keyword$33.cljs$core$IFn$_invoke$arity$1(fun_map);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (render_fun["displayName"]);
if(cljs.core.truth_(or__3630__auto____$1)){
return or__3630__auto____$1;
} else {
return (render_fun["name"]);
}
}
})();
var name_SINGLEQUOTE_ = ((cljs.core.empty_QMARK_(name))?[cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("reagent"))].join(''):name);
var fmap = reagent.impl.component.add_render(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fun_map,cljs.core.constant$keyword$33,name_SINGLEQUOTE_),render_fun);
return cljs.core.reduce_kv(((function (render_fun,_,name,name_SINGLEQUOTE_,fmap){
return (function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,reagent.impl.component.get_wrapper(k,v,name_SINGLEQUOTE_));
});})(render_fun,_,name,name_SINGLEQUOTE_,fmap))
,cljs.core.PersistentArrayMap.EMPTY,fmap);
});
reagent.impl.component.map_to_js = (function map_to_js(m){
return cljs.core.reduce_kv((function (o,k,v){
var G__16961 = o;
(G__16961[cljs.core.name(k)] = v);

return G__16961;
}),{},m);
});
reagent.impl.component.cljsify = (function cljsify(body){
return reagent.impl.component.map_to_js(reagent.impl.component.wrap_funs(reagent.impl.component.add_obligatory(reagent.impl.component.camelify_map_keys(body))));
});
reagent.impl.component.create_class = (function create_class(body,as_component){
if(cljs.core.map_QMARK_(body)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"body","body",-408674142,null))], 0)))].join('')));
}

var spec = reagent.impl.component.cljsify(body);
var _ = (spec["asComponent"] = reagent.impl.component.dont_bind(as_component));
var res = (React["createClass"])(spec);
var f = ((function (spec,_,res){
return (function() { 
var G__16964__delegate = function (args){
var G__16963 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,res,args);
return (as_component.cljs$core$IFn$_invoke$arity$1 ? as_component.cljs$core$IFn$_invoke$arity$1(G__16963) : as_component.call(null,G__16963));
};
var G__16964 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__16964__delegate.call(this,args);};
G__16964.cljs$lang$maxFixedArity = 0;
G__16964.cljs$lang$applyTo = (function (arglist__16965){
var args = cljs.core.seq(arglist__16965);
return G__16964__delegate(args);
});
G__16964.cljs$core$IFn$_invoke$arity$variadic = G__16964__delegate;
return G__16964;
})()
;})(spec,_,res))
;
reagent.impl.util.cache_react_class(f,res);

reagent.impl.util.cache_react_class(res,res);

return f;
});
