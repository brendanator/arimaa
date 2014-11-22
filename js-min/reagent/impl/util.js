// Compiled by ClojureScript 0.0-2371
goog.provide('reagent.impl.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('reagent.interop');
goog.require('reagent.debug');
reagent.impl.util.is_client = (typeof window !== 'undefined') && (!(((window["document"]) == null)));
reagent.impl.util.extract_props = (function extract_props(v){var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);if(cljs.core.map_QMARK_(p))
{return p;
} else
{return null;
}
});
reagent.impl.util.extract_children = (function extract_children(v){var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);var first_child = ((((p == null)) || (cljs.core.map_QMARK_(p)))?(2):(1));if((cljs.core.count(v) > first_child))
{return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,first_child);
} else
{return null;
}
});
reagent.impl.util.get_argv = (function get_argv(c){return (c["props"]["argv"]);
});
reagent.impl.util.get_props = (function get_props(c){return reagent.impl.util.extract_props((c["props"]["argv"]));
});
reagent.impl.util.get_children = (function get_children(c){return reagent.impl.util.extract_children((c["props"]["argv"]));
});
reagent.impl.util.reagent_component_QMARK_ = (function reagent_component_QMARK_(c){return !(((c["props"]["argv"]) == null));
});
reagent.impl.util.cached_react_class = (function cached_react_class(c){return (c["cljsReactClass"]);
});
reagent.impl.util.cache_react_class = (function cache_react_class(c,constructor){return (c["cljsReactClass"] = constructor);
});
reagent.impl.util.memoize_1 = (function memoize_1(f){var mem = (function (){var G__15538 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15538) : cljs.core.atom.call(null,G__15538));
})();return ((function (mem){
return (function (arg){var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__15539 = mem;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15539) : cljs.core.deref.call(null,G__15539));
})(),arg);if(!((v == null)))
{return v;
} else
{var ret = (function (){var G__15540 = arg;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15540) : f.call(null,G__15540));
})();cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc,arg,ret);
return ret;
}
});
;})(mem))
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function capitalize(s){if((cljs.core.count(s) < (2)))
{return clojure.string.upper_case(s);
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1))))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1))));
}
});
reagent.impl.util.dash_to_camel = (function dash_to_camel(dashed){if(typeof dashed === 'string')
{return dashed;
} else
{var name_str = cljs.core.name(dashed);var vec__15543 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(name_str,/-/);var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15543,(0),null);var parts = cljs.core.nthnext(vec__15543,(1));if(cljs.core.truth_((function (){var G__15544 = start;return (reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1(G__15544) : reagent.impl.util.dont_camel_case.call(null,G__15544));
})()))
{return name_str;
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,start,cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.capitalize,parts));
}
}
});

/**
* @constructor
*/
reagent.impl.util.partial_ifn = (function (f,args,p){
this.f = f;
this.args = args;
this.p = p;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
})
reagent.impl.util.partial_ifn.cljs$lang$type = true;
reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";
reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"reagent.impl.util/partial-ifn");
});
reagent.impl.util.partial_ifn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});
reagent.impl.util.partial_ifn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.f,other.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.args,other.args));
});
reagent.impl.util.partial_ifn.prototype.call = (function() { 
var G__15546__delegate = function (self__,a){var self____$1 = this;var _ = self____$1;var or__3640__auto___15547 = self__.p;if(cljs.core.truth_(or__3640__auto___15547))
{} else
{self__.p = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,self__.f,self__.args);
}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.p,a);
};
var G__15546 = function (self__,var_args){
var self__ = this;
var a = null;if (arguments.length > 1) {
  a = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__15546__delegate.call(this,self__,a);};
G__15546.cljs$lang$maxFixedArity = 1;
G__15546.cljs$lang$applyTo = (function (arglist__15548){
var self__ = cljs.core.first(arglist__15548);
var a = cljs.core.rest(arglist__15548);
return G__15546__delegate(self__,a);
});
G__15546.cljs$core$IFn$_invoke$arity$variadic = G__15546__delegate;
return G__15546;
})()
;
reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args15545){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args15545)));
});
reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__15549__delegate = function (a){var _ = this;var or__3640__auto___15550 = self__.p;if(cljs.core.truth_(or__3640__auto___15550))
{} else
{self__.p = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,self__.f,self__.args);
}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.p,a);
};
var G__15549 = function (var_args){
var self__ = this;
var a = null;if (arguments.length > 0) {
  a = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15549__delegate.call(this,a);};
G__15549.cljs$lang$maxFixedArity = 0;
G__15549.cljs$lang$applyTo = (function (arglist__15551){
var a = cljs.core.seq(arglist__15551);
return G__15549__delegate(a);
});
G__15549.cljs$core$IFn$_invoke$arity$variadic = G__15549__delegate;
return G__15549;
})()
;
reagent.impl.util.__GT_partial_ifn = (function __GT_partial_ifn(f,args,p){return (new reagent.impl.util.partial_ifn(f,args,p));
});
reagent.impl.util.clj_ifn_QMARK_ = (function clj_ifn_QMARK_(x){var or__3640__auto__ = cljs.core.ifn_QMARK_(x);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var G__15555 = x;if(G__15555)
{var bit__4304__auto__ = (G__15555.cljs$lang$protocol_mask$partition1$ & (256));if((bit__4304__auto__) || (G__15555.cljs$core$IMultiFn$))
{return true;
} else
{if((!G__15555.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMultiFn,G__15555);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMultiFn,G__15555);
}
}
});
reagent.impl.util.merge_class = (function merge_class(p1,p2){var class$ = (function (){var temp__4126__auto__ = cljs.core.constant$keyword$15.cljs$core$IFn$_invoke$arity$1(p1);if(cljs.core.truth_(temp__4126__auto__))
{var c1 = temp__4126__auto__;var temp__4126__auto____$1 = cljs.core.constant$keyword$15.cljs$core$IFn$_invoke$arity$1(p2);if(cljs.core.truth_(temp__4126__auto____$1))
{var c2 = temp__4126__auto____$1;return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c1)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c2));
} else
{return null;
}
} else
{return null;
}
})();if((class$ == null))
{return p2;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,cljs.core.constant$keyword$15,class$);
}
});
reagent.impl.util.merge_style = (function merge_style(p1,p2){var style = (function (){var temp__4126__auto__ = cljs.core.constant$keyword$16.cljs$core$IFn$_invoke$arity$1(p1);if(cljs.core.truth_(temp__4126__auto__))
{var s1 = temp__4126__auto__;var temp__4126__auto____$1 = cljs.core.constant$keyword$16.cljs$core$IFn$_invoke$arity$1(p2);if(cljs.core.truth_(temp__4126__auto____$1))
{var s2 = temp__4126__auto____$1;return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s1,s2], 0));
} else
{return null;
}
} else
{return null;
}
})();if((style == null))
{return p2;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,cljs.core.constant$keyword$16,style);
}
});
reagent.impl.util.merge_props = (function merge_props(p1,p2){if((p1 == null))
{return p2;
} else
{if(cljs.core.map_QMARK_(p1))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"p1","p1",703771573,null))], 0))))));
}
return reagent.impl.util.merge_style(p1,reagent.impl.util.merge_class(p1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1,p2], 0))));
}
});
reagent.impl.util.doc_node_type = (9);
reagent.impl.util.react_id_name = "data-reactid";
reagent.impl.util.get_react_node = (function get_react_node(cont){if((cont == null))
{return null;
} else
{if((reagent.impl.util.doc_node_type === (cont["nodeType"])))
{return (cont["documentElement"]);
} else
{return (cont["firstChild"]);
}
}
});
reagent.impl.util.get_root_id = (function get_root_id(cont){var G__15557 = reagent.impl.util.get_react_node(cont);var G__15557__$1 = (((G__15557 == null))?null:(G__15557["getAttribute"])(reagent.impl.util.react_id_name));return G__15557__$1;
});
reagent.impl.util.roots = (function (){var G__15558 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15558) : cljs.core.atom.call(null,G__15558));
})();
reagent.impl.util.re_render_component = (function re_render_component(comp,container){try{return (React["renderComponent"])((function (){return (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
})(),container);
}catch (e15561){if((e15561 instanceof Object))
{var e = e15561;try{(React["unmountComponentAtNode"])(container);
}catch (e15562){if((e15562 instanceof Object))
{var e_15563__$1 = e15562;if(typeof console !== 'undefined')
{console.log(e_15563__$1);
} else
{}
} else
{throw e15562;

}
}var temp__4126__auto___15564 = reagent.impl.util.get_react_node(container);if(cljs.core.truth_(temp__4126__auto___15564))
{var n_15565 = temp__4126__auto___15564;(n_15565["removeAttribute"])(reagent.impl.util.react_id_name);
(n_15565["innerHTML"] = "");
} else
{}
throw e;
} else
{throw e15561;

}
}});
reagent.impl.util.render_component = (function render_component(comp,container,callback){return (React["renderComponent"])((function (){return (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
})(),container,(function (){var id_15566 = reagent.impl.util.get_root_id(container);if((id_15566 == null))
{} else
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.impl.util.roots,cljs.core.assoc,id_15566,((function (id_15566){
return (function (){return reagent.impl.util.re_render_component(comp,container);
});})(id_15566))
);
}
if((callback == null))
{return null;
} else
{return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
}
}));
});
reagent.impl.util.unmount_component_at_node = (function unmount_component_at_node(container){var id_15567 = reagent.impl.util.get_root_id(container);if((id_15567 == null))
{} else
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.impl.util.roots,cljs.core.dissoc,id_15567);
}
return (React["unmountComponentAtNode"])(container);
});
reagent.impl.util.force_update_all = (function force_update_all(){var _STAR_always_update_STAR_15574_15580 = reagent.impl.util._STAR_always_update_STAR_;try{reagent.impl.util._STAR_always_update_STAR_ = true;
var seq__15575_15581 = cljs.core.seq(cljs.core.vals((function (){var G__15579 = reagent.impl.util.roots;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15579) : cljs.core.deref.call(null,G__15579));
})()));var chunk__15576_15582 = null;var count__15577_15583 = (0);var i__15578_15584 = (0);while(true){
if((i__15578_15584 < count__15577_15583))
{var f_15585 = chunk__15576_15582.cljs$core$IIndexed$_nth$arity$2(null,i__15578_15584);(f_15585.cljs$core$IFn$_invoke$arity$0 ? f_15585.cljs$core$IFn$_invoke$arity$0() : f_15585.call(null));
{
var G__15586 = seq__15575_15581;
var G__15587 = chunk__15576_15582;
var G__15588 = count__15577_15583;
var G__15589 = (i__15578_15584 + (1));
seq__15575_15581 = G__15586;
chunk__15576_15582 = G__15587;
count__15577_15583 = G__15588;
i__15578_15584 = G__15589;
continue;
}
} else
{var temp__4126__auto___15590 = cljs.core.seq(seq__15575_15581);if(temp__4126__auto___15590)
{var seq__15575_15591__$1 = temp__4126__auto___15590;if(cljs.core.chunked_seq_QMARK_(seq__15575_15591__$1))
{var c__4410__auto___15592 = cljs.core.chunk_first(seq__15575_15591__$1);{
var G__15593 = cljs.core.chunk_rest(seq__15575_15591__$1);
var G__15594 = c__4410__auto___15592;
var G__15595 = cljs.core.count(c__4410__auto___15592);
var G__15596 = (0);
seq__15575_15581 = G__15593;
chunk__15576_15582 = G__15594;
count__15577_15583 = G__15595;
i__15578_15584 = G__15596;
continue;
}
} else
{var f_15597 = cljs.core.first(seq__15575_15591__$1);(f_15597.cljs$core$IFn$_invoke$arity$0 ? f_15597.cljs$core$IFn$_invoke$arity$0() : f_15597.call(null));
{
var G__15598 = cljs.core.next(seq__15575_15591__$1);
var G__15599 = null;
var G__15600 = (0);
var G__15601 = (0);
seq__15575_15581 = G__15598;
chunk__15576_15582 = G__15599;
count__15577_15583 = G__15600;
i__15578_15584 = G__15601;
continue;
}
}
} else
{}
}
break;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_15574_15580;
}return "Updated";
});
reagent.impl.util._not_found = (function (){var obj15603 = {};return obj15603;
})();
reagent.impl.util.identical_ish_QMARK_ = (function identical_ish_QMARK_(x,y){return (cljs.core.keyword_identical_QMARK_(x,y)) || ((((x instanceof cljs.core.Symbol)) || ((cljs.core.type(x) === reagent.impl.util.partial_ifn))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)));
});
reagent.impl.util.shallow_equal_maps = (function shallow_equal_maps(x,y){var or__3640__auto__ = (x === y);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var and__3628__auto__ = cljs.core.map_QMARK_(x);if(and__3628__auto__)
{var and__3628__auto____$1 = cljs.core.map_QMARK_(y);if(and__3628__auto____$1)
{var and__3628__auto____$2 = (cljs.core.count(x) === cljs.core.count(y));if(and__3628__auto____$2)
{return cljs.core.reduce_kv(((function (and__3628__auto____$2,and__3628__auto____$1,and__3628__auto__,or__3640__auto__){
return (function (res,k,v){var yv = cljs.core.get.cljs$core$IFn$_invoke$arity$3(y,k,reagent.impl.util._not_found);if(cljs.core.truth_((function (){var or__3640__auto____$1 = (v === yv);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{var or__3640__auto____$2 = reagent.impl.util.identical_ish_QMARK_(v,yv);if(or__3640__auto____$2)
{return or__3640__auto____$2;
} else
{var and__3628__auto____$3 = cljs.core.keyword_identical_QMARK_(k,cljs.core.constant$keyword$16);if(and__3628__auto____$3)
{return shallow_equal_maps(v,yv);
} else
{return and__3628__auto____$3;
}
}
}
})()))
{return res;
} else
{return cljs.core.reduced(false);
}
});})(and__3628__auto____$2,and__3628__auto____$1,and__3628__auto__,or__3640__auto__))
,true,x);
} else
{return and__3628__auto____$2;
}
} else
{return and__3628__auto____$1;
}
} else
{return and__3628__auto__;
}
}
});
reagent.impl.util.equal_args = (function equal_args(v1,v2){if(cljs.core.vector_QMARK_(v1))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"v1","v1",-2141311508,null))], 0))))));
}
if(cljs.core.vector_QMARK_(v2))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"v2","v2",1875554983,null))], 0))))));
}
var or__3640__auto__ = (v1 === v2);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var and__3628__auto__ = (cljs.core.count(v1) === cljs.core.count(v2));if(and__3628__auto__)
{return cljs.core.reduce_kv(((function (and__3628__auto__,or__3640__auto__){
return (function (res,k,v){var v_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v2,k);if(cljs.core.truth_((function (){var or__3640__auto____$1 = (v === v_SINGLEQUOTE_);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{var or__3640__auto____$2 = reagent.impl.util.identical_ish_QMARK_(v,v_SINGLEQUOTE_);if(or__3640__auto____$2)
{return or__3640__auto____$2;
} else
{var and__3628__auto____$1 = cljs.core.map_QMARK_(v);if(and__3628__auto____$1)
{return reagent.impl.util.shallow_equal_maps(v,v_SINGLEQUOTE_);
} else
{return and__3628__auto____$1;
}
}
}
})()))
{return res;
} else
{return cljs.core.reduced(false);
}
});})(and__3628__auto__,or__3640__auto__))
,true,v1);
} else
{return and__3628__auto__;
}
}
});
