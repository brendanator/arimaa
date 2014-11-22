// Compiled by ClojureScript 0.0-2371
goog.provide('reagent.impl.component');
goog.require('cljs.core');
goog.require('reagent.debug');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.ratom');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.util');
goog.require('reagent.impl.util');
reagent.impl.component.state_atom = (function state_atom(this$){var sa = (this$["cljsState"]);if(!((sa == null)))
{return sa;
} else
{return (this$["cljsState"] = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null));
}
});
reagent.impl.component.state = (function state(this$){var G__15200 = reagent.impl.component.state_atom(this$);return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15200) : cljs.core.deref.call(null,G__15200));
});
reagent.impl.component.replace_state = (function replace_state(this$,new_state){var G__15203 = reagent.impl.component.state_atom(this$);var G__15204 = new_state;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15203,G__15204) : cljs.core.reset_BANG_.call(null,G__15203,G__15204));
});
reagent.impl.component.set_state = (function set_state(this$,new_state){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.impl.component.state_atom(this$),cljs.core.merge,new_state);
});
reagent.impl.component.do_render = (function do_render(c){var _STAR_current_component_STAR_15219 = reagent.impl.component._STAR_current_component_STAR_;try{reagent.impl.component._STAR_current_component_STAR_ = c;
var f = (c["cljsRender"]);var _ = ((reagent.impl.util.clj_ifn_QMARK_(f))?null:(function(){throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("util","clj-ifn?","util/clj-ifn?",259370460,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0))))))})());var p = (c["props"]);var res = ((((c["componentFunction"]) == null))?(function (){var G__15220 = c;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15220) : f.call(null,G__15220));
})():(function (){var argv = (p["argv"]);var n = cljs.core.count(argv);var G__15221 = n;switch (G__15221) {
case (1):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (2):
var G__15222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15222) : f.call(null,G__15222));

break;
case (3):
var G__15223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));var G__15224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15223,G__15224) : f.call(null,G__15223,G__15224));

break;
case (4):
var G__15225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));var G__15226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));var G__15227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3));return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__15225,G__15226,G__15227) : f.call(null,G__15225,G__15226,G__15227));

break;
case (5):
var G__15228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));var G__15229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));var G__15230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3));var G__15231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(4));return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__15228,G__15229,G__15230,G__15231) : f.call(null,G__15228,G__15229,G__15230,G__15231));

break;
default:
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(argv,(1)));

}
})());if(cljs.core.vector_QMARK_(res))
{return (c["asComponent"])(res,(p["level"]));
} else
{if(cljs.core.ifn_QMARK_(res))
{(c["cljsRender"] = res);
return do_render(c);
} else
{return res;
}
}
}finally {reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR_15219;
}});
reagent.impl.component.custom_wrapper = (function custom_wrapper(key,f){var G__15245 = (((key instanceof cljs.core.Keyword))?key.fqn:null);switch (G__15245) {
case "componentWillUnmount":
return ((function (G__15245){
return (function (){var c = this;reagent.impl.batching.dispose(c);
if((f == null))
{return null;
} else
{var G__15246 = c;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15246) : f.call(null,G__15246));
}
});
;})(G__15245))

break;
case "componentDidUpdate":
return ((function (G__15245){
return (function (oldprops){var c = this;var G__15247 = c;var G__15248 = (oldprops["argv"]);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15247,G__15248) : f.call(null,G__15247,G__15248));
});
;})(G__15245))

break;
case "componentWillUpdate":
return ((function (G__15245){
return (function (nextprops){var c = this;var G__15249 = c;var G__15250 = (nextprops["argv"]);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15249,G__15250) : f.call(null,G__15249,G__15250));
});
;})(G__15245))

break;
case "shouldComponentUpdate":
return ((function (G__15245){
return (function (nextprops,nextstate){var or__3640__auto__ = reagent.impl.util._STAR_always_update_STAR_;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{var c = this;var old_argv = (c["props"]["argv"]);var new_argv = (nextprops["argv"]);if((f == null))
{return cljs.core.not(reagent.impl.util.equal_args(old_argv,new_argv));
} else
{var G__15251 = c;var G__15252 = old_argv;var G__15253 = new_argv;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__15251,G__15252,G__15253) : f.call(null,G__15251,G__15252,G__15253));
}
}
});
;})(G__15245))

break;
case "componentWillReceiveProps":
return ((function (G__15245){
return (function (props){var c = this;var G__15254 = c;var G__15255 = (props["argv"]);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15254,G__15255) : f.call(null,G__15254,G__15255));
});
;})(G__15245))

break;
case "getInitialState":
return ((function (G__15245){
return (function (){var c = this;return reagent.impl.component.set_state(c,(function (){var G__15256 = c;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15256) : f.call(null,G__15256));
})());
});
;})(G__15245))

break;
case "getDefaultProps":
throw (new Error(("Assert failed: getDefaultProps not supported yet\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0))))));


break;
default:
return null;

}
});
reagent.impl.component.default_wrapper = (function default_wrapper(f){if(cljs.core.ifn_QMARK_(f))
{return (function() { 
var G__15258__delegate = function (args){var c = this;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,c,args);
};
var G__15258 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15258__delegate.call(this,args);};
G__15258.cljs$lang$maxFixedArity = 0;
G__15258.cljs$lang$applyTo = (function (arglist__15259){
var args = cljs.core.seq(arglist__15259);
return G__15258__delegate(args);
});
G__15258.cljs$core$IFn$_invoke$arity$variadic = G__15258__delegate;
return G__15258;
})()
;
} else
{return f;
}
});
reagent.impl.component.dont_wrap = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$21,null,cljs.core.constant$keyword$22,null,cljs.core.constant$keyword$23,null], null), null);
reagent.impl.component.dont_bind = (function dont_bind(f){if(cljs.core.ifn_QMARK_(f))
{var G__15261 = f;(G__15261["__reactDontBind"] = true);
return G__15261;
} else
{return f;
}
});
reagent.impl.component.get_wrapper = (function get_wrapper(key,f,name){if(cljs.core.truth_((function (){var G__15263 = key;return (reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1(G__15263) : reagent.impl.component.dont_wrap.call(null,G__15263));
})()))
{return reagent.impl.component.dont_bind(f);
} else
{var wrap = reagent.impl.component.custom_wrapper(key,f);if(cljs.core.truth_((function (){var and__3628__auto__ = wrap;if(cljs.core.truth_(and__3628__auto__))
{return f;
} else
{return and__3628__auto__;
}
})()))
{if(cljs.core.ifn_QMARK_(f))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("Expected function in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+" but got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0))))));
}
} else
{}
var or__3640__auto__ = wrap;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return reagent.impl.component.default_wrapper(f);
}
}
});
reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$24,null,cljs.core.constant$keyword$25,null], null);
reagent.impl.component.dash_to_camel = reagent.impl.util.memoize_1(reagent.impl.util.dash_to_camel);
reagent.impl.component.camelify_map_keys = (function camelify_map_keys(fun_map){return cljs.core.reduce_kv((function (m,k,v){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var G__15265 = k;return (reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1(G__15265) : reagent.impl.component.dash_to_camel.call(null,G__15265));
})()),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
reagent.impl.component.add_obligatory = (function add_obligatory(fun_map){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.impl.component.obligatory,fun_map], 0));
});
reagent.impl.component.add_render = (function add_render(fun_map,render_f){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fun_map,cljs.core.constant$keyword$21,render_f,cljs.core.array_seq([cljs.core.constant$keyword$22,(cljs.core.truth_(reagent.impl.util.is_client)?(function (){var c = this;return reagent.impl.batching.run_reactively(c,((function (c){
return (function (){return reagent.impl.component.do_render(c);
});})(c))
);
}):(function (){var c = this;return reagent.impl.component.do_render(c);
}))], 0));
});
reagent.impl.component.wrap_funs = (function wrap_funs(fun_map){var render_fun = (function (){var or__3640__auto__ = cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(fun_map);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(fun_map);
}
})();var _ = ((reagent.impl.util.clj_ifn_QMARK_(render_fun))?null:(function(){throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("Render must be a function, not "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([render_fun], 0)))))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("util","clj-ifn?","util/clj-ifn?",259370460,null),new cljs.core.Symbol(null,"render-fun","render-fun",-1209513086,null))], 0))))))})());var name = (function (){var or__3640__auto__ = cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(fun_map);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (render_fun["displayName"]);if(cljs.core.truth_(or__3640__auto____$1))
{return or__3640__auto____$1;
} else
{return (render_fun["name"]);
}
}
})();var name_SINGLEQUOTE_ = ((cljs.core.empty_QMARK_(name))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("reagent"))):name);var fmap = reagent.impl.component.add_render(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fun_map,cljs.core.constant$keyword$26,name_SINGLEQUOTE_),render_fun);return cljs.core.reduce_kv(((function (render_fun,_,name,name_SINGLEQUOTE_,fmap){
return (function (m,k,v){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,reagent.impl.component.get_wrapper(k,v,name_SINGLEQUOTE_));
});})(render_fun,_,name,name_SINGLEQUOTE_,fmap))
,cljs.core.PersistentArrayMap.EMPTY,fmap);
});
reagent.impl.component.map_to_js = (function map_to_js(m){return cljs.core.reduce_kv((function (o,k,v){var G__15267 = o;(G__15267[cljs.core.name(k)] = v);
return G__15267;
}),{},m);
});
reagent.impl.component.cljsify = (function cljsify(body){return reagent.impl.component.map_to_js(reagent.impl.component.wrap_funs(reagent.impl.component.add_obligatory(reagent.impl.component.camelify_map_keys(body))));
});
reagent.impl.component.create_class = (function create_class(body,as_component){if(cljs.core.map_QMARK_(body))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"body","body",-408674142,null))], 0))))));
}
var spec = reagent.impl.component.cljsify(body);var _ = (spec["asComponent"] = reagent.impl.component.dont_bind(as_component));var res = (React["createClass"])(spec);var f = ((function (spec,_,res){
return (function() { 
var G__15270__delegate = function (args){var G__15269 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,res,args);return (as_component.cljs$core$IFn$_invoke$arity$1 ? as_component.cljs$core$IFn$_invoke$arity$1(G__15269) : as_component.call(null,G__15269));
};
var G__15270 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15270__delegate.call(this,args);};
G__15270.cljs$lang$maxFixedArity = 0;
G__15270.cljs$lang$applyTo = (function (arglist__15271){
var args = cljs.core.seq(arglist__15271);
return G__15270__delegate(args);
});
G__15270.cljs$core$IFn$_invoke$arity$variadic = G__15270__delegate;
return G__15270;
})()
;})(spec,_,res))
;reagent.impl.util.cache_react_class(f,res);
reagent.impl.util.cache_react_class(res,res);
return f;
});
