// Compiled by ClojureScript 0.0-2657 {}
goog.provide('reagent.impl.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.interop');
goog.require('reagent.debug');
reagent.impl.util.is_client = (typeof window !== 'undefined') && (!(((window["document"]) == null)));
reagent.impl.util.extract_props = (function extract_props(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
if(cljs.core.map_QMARK_(p)){
return p;
} else {
return null;
}
});
reagent.impl.util.extract_children = (function extract_children(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
var first_child = ((((p == null)) || (cljs.core.map_QMARK_(p)))?(2):(1));
if((cljs.core.count(v) > first_child)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,first_child);
} else {
return null;
}
});
reagent.impl.util.get_argv = (function get_argv(c){
return (c["props"]["argv"]);
});
reagent.impl.util.get_props = (function get_props(c){
return reagent.impl.util.extract_props((c["props"]["argv"]));
});
reagent.impl.util.get_children = (function get_children(c){
return reagent.impl.util.extract_children((c["props"]["argv"]));
});
reagent.impl.util.reagent_component_QMARK_ = (function reagent_component_QMARK_(c){
return !(((c["props"]["argv"]) == null));
});
reagent.impl.util.cached_react_class = (function cached_react_class(c){
return (c["cljsReactClass"]);
});
reagent.impl.util.cache_react_class = (function cache_react_class(c,constructor){
return (c["cljsReactClass"] = constructor);
});
reagent.impl.util.memoize_1 = (function memoize_1(f){
var mem = (function (){var G__17763 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17763) : cljs.core.atom.call(null,G__17763));
})();
return ((function (mem){
return (function (arg){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__17764 = mem;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17764) : cljs.core.deref.call(null,G__17764));
})(),arg);
if(!((v == null))){
return v;
} else {
var ret = (function (){var G__17765 = arg;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17765) : f.call(null,G__17765));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc,arg,ret);

return ret;
}
});
;})(mem))
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function capitalize(s){
if((cljs.core.count(s) < (2))){
return clojure.string.upper_case(s);
} else {
return [cljs.core.str(clojure.string.upper_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1)))),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)))].join('');
}
});
reagent.impl.util.dash_to_camel = (function dash_to_camel(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name(dashed);
var vec__17768 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(name_str,/-/);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17768,(0),null);
var parts = cljs.core.nthnext(vec__17768,(1));
if(cljs.core.truth_((function (){var G__17769 = start;
return (reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1(G__17769) : reagent.impl.util.dont_camel_case.call(null,G__17769));
})())){
return name_str;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,start,cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.capitalize,parts));
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
reagent.impl.util.partial_ifn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.f,other.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.args,other.args));
});

reagent.impl.util.partial_ifn.prototype.call = (function() { 
var G__17771__delegate = function (self__,a){
var self____$1 = this;
var _ = self____$1;
var or__3731__auto___17772 = self__.p;
if(cljs.core.truth_(or__3731__auto___17772)){
} else {
self__.p = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.p,a);
};
var G__17771 = function (self__,var_args){
var self__ = this;
var a = null;
if (arguments.length > 1) {
  a = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__17771__delegate.call(this,self__,a);};
G__17771.cljs$lang$maxFixedArity = 1;
G__17771.cljs$lang$applyTo = (function (arglist__17773){
var self__ = cljs.core.first(arglist__17773);
var a = cljs.core.rest(arglist__17773);
return G__17771__delegate(self__,a);
});
G__17771.cljs$core$IFn$_invoke$arity$variadic = G__17771__delegate;
return G__17771;
})()
;

reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args17770){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args17770)));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__17774__delegate = function (a){
var _ = this;
var or__3731__auto___17775 = self__.p;
if(cljs.core.truth_(or__3731__auto___17775)){
} else {
self__.p = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.p,a);
};
var G__17774 = function (var_args){
var self__ = this;
var a = null;
if (arguments.length > 0) {
  a = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__17774__delegate.call(this,a);};
G__17774.cljs$lang$maxFixedArity = 0;
G__17774.cljs$lang$applyTo = (function (arglist__17776){
var a = cljs.core.seq(arglist__17776);
return G__17774__delegate(a);
});
G__17774.cljs$core$IFn$_invoke$arity$variadic = G__17774__delegate;
return G__17774;
})()
;

reagent.impl.util.partial_ifn.cljs$lang$type = true;

reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";

reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"reagent.impl.util/partial-ifn");
});

reagent.impl.util.__GT_partial_ifn = (function __GT_partial_ifn(f,args,p){
return (new reagent.impl.util.partial_ifn(f,args,p));
});

reagent.impl.util.clj_ifn_QMARK_ = (function clj_ifn_QMARK_(x){
var or__3731__auto__ = cljs.core.ifn_QMARK_(x);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var G__17780 = x;
if(G__17780){
var bit__4412__auto__ = (G__17780.cljs$lang$protocol_mask$partition1$ & (256));
if((bit__4412__auto__) || (G__17780.cljs$core$IMultiFn$)){
return true;
} else {
if((!G__17780.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMultiFn,G__17780);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMultiFn,G__17780);
}
}
});
reagent.impl.util.merge_class = (function merge_class(p1,p2){
var class$ = (function (){var temp__4126__auto__ = cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4126__auto__)){
var c1 = temp__4126__auto__;
var temp__4126__auto____$1 = cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4126__auto____$1)){
var c2 = temp__4126__auto____$1;
return [cljs.core.str(c1),cljs.core.str(" "),cljs.core.str(c2)].join('');
} else {
return null;
}
} else {
return null;
}
})();
if((class$ == null)){
return p2;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,cljs.core.constant$keyword$22,class$);
}
});
reagent.impl.util.merge_style = (function merge_style(p1,p2){
var style = (function (){var temp__4126__auto__ = cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4126__auto__)){
var s1 = temp__4126__auto__;
var temp__4126__auto____$1 = cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4126__auto____$1)){
var s2 = temp__4126__auto____$1;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s1,s2], 0));
} else {
return null;
}
} else {
return null;
}
})();
if((style == null)){
return p2;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,cljs.core.constant$keyword$23,style);
}
});
reagent.impl.util.merge_props = (function merge_props(p1,p2){
if((p1 == null)){
return p2;
} else {
if(cljs.core.map_QMARK_(p1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"p1","p1",703771573,null))], 0)))].join('')));
}

return reagent.impl.util.merge_style(p1,reagent.impl.util.merge_class(p1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1,p2], 0))));
}
});
reagent.impl.util.doc_node_type = (9);
reagent.impl.util.react_id_name = "data-reactid";
reagent.impl.util.get_react_node = (function get_react_node(cont){
if((cont == null)){
return null;
} else {
if((reagent.impl.util.doc_node_type === (cont["nodeType"]))){
return (cont["documentElement"]);
} else {
return (cont["firstChild"]);
}
}
});
reagent.impl.util.get_root_id = (function get_root_id(cont){
var G__17782 = reagent.impl.util.get_react_node(cont);
var G__17782__$1 = (((G__17782 == null))?null:(G__17782["getAttribute"])(reagent.impl.util.react_id_name));
return G__17782__$1;
});
reagent.impl.util.roots = (function (){var G__17783 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17783) : cljs.core.atom.call(null,G__17783));
})();
reagent.impl.util.re_render_component = (function re_render_component(comp,container){
try{return (React["renderComponent"])((function (){return (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
})(),container);
}catch (e17786){if((e17786 instanceof Object)){
var e = e17786;
try{(React["unmountComponentAtNode"])(container);
}catch (e17787){if((e17787 instanceof Object)){
var e_17788__$1 = e17787;
if(typeof console !== 'undefined'){
console.log(e_17788__$1);
} else {
}
} else {
throw e17787;

}
}
var temp__4126__auto___17789 = reagent.impl.util.get_react_node(container);
if(cljs.core.truth_(temp__4126__auto___17789)){
var n_17790 = temp__4126__auto___17789;
(n_17790["removeAttribute"])(reagent.impl.util.react_id_name);

(n_17790["innerHTML"] = "");
} else {
}

throw e;
} else {
throw e17786;

}
}});
reagent.impl.util.render_component = (function render_component(comp,container,callback){
return (React["renderComponent"])((function (){return (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
})(),container,(function (){
var id_17791 = reagent.impl.util.get_root_id(container);
if((id_17791 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.impl.util.roots,cljs.core.assoc,id_17791,((function (id_17791){
return (function (){
return reagent.impl.util.re_render_component(comp,container);
});})(id_17791))
);
}

if((callback == null)){
return null;
} else {
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
}
}));
});
reagent.impl.util.unmount_component_at_node = (function unmount_component_at_node(container){
var id_17792 = reagent.impl.util.get_root_id(container);
if((id_17792 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.impl.util.roots,cljs.core.dissoc,id_17792);
}

return (React["unmountComponentAtNode"])(container);
});
reagent.impl.util.force_update_all = (function force_update_all(){
var _STAR_always_update_STAR_17799_17805 = reagent.impl.util._STAR_always_update_STAR_;
try{reagent.impl.util._STAR_always_update_STAR_ = true;

var seq__17800_17806 = cljs.core.seq(cljs.core.vals((function (){var G__17804 = reagent.impl.util.roots;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17804) : cljs.core.deref.call(null,G__17804));
})()));
var chunk__17801_17807 = null;
var count__17802_17808 = (0);
var i__17803_17809 = (0);
while(true){
if((i__17803_17809 < count__17802_17808)){
var f_17810 = chunk__17801_17807.cljs$core$IIndexed$_nth$arity$2(null,i__17803_17809);
(f_17810.cljs$core$IFn$_invoke$arity$0 ? f_17810.cljs$core$IFn$_invoke$arity$0() : f_17810.call(null));

var G__17811 = seq__17800_17806;
var G__17812 = chunk__17801_17807;
var G__17813 = count__17802_17808;
var G__17814 = (i__17803_17809 + (1));
seq__17800_17806 = G__17811;
chunk__17801_17807 = G__17812;
count__17802_17808 = G__17813;
i__17803_17809 = G__17814;
continue;
} else {
var temp__4126__auto___17815 = cljs.core.seq(seq__17800_17806);
if(temp__4126__auto___17815){
var seq__17800_17816__$1 = temp__4126__auto___17815;
if(cljs.core.chunked_seq_QMARK_(seq__17800_17816__$1)){
var c__4518__auto___17817 = cljs.core.chunk_first(seq__17800_17816__$1);
var G__17818 = cljs.core.chunk_rest(seq__17800_17816__$1);
var G__17819 = c__4518__auto___17817;
var G__17820 = cljs.core.count(c__4518__auto___17817);
var G__17821 = (0);
seq__17800_17806 = G__17818;
chunk__17801_17807 = G__17819;
count__17802_17808 = G__17820;
i__17803_17809 = G__17821;
continue;
} else {
var f_17822 = cljs.core.first(seq__17800_17816__$1);
(f_17822.cljs$core$IFn$_invoke$arity$0 ? f_17822.cljs$core$IFn$_invoke$arity$0() : f_17822.call(null));

var G__17823 = cljs.core.next(seq__17800_17816__$1);
var G__17824 = null;
var G__17825 = (0);
var G__17826 = (0);
seq__17800_17806 = G__17823;
chunk__17801_17807 = G__17824;
count__17802_17808 = G__17825;
i__17803_17809 = G__17826;
continue;
}
} else {
}
}
break;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_17799_17805;
}
return "Updated";
});
reagent.impl.util._not_found = (function (){var obj17828 = {};
return obj17828;
})();
reagent.impl.util.identical_ish_QMARK_ = (function identical_ish_QMARK_(x,y){
return (cljs.core.keyword_identical_QMARK_(x,y)) || ((((x instanceof cljs.core.Symbol)) || ((cljs.core.type(x) === reagent.impl.util.partial_ifn))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)));
});
reagent.impl.util.shallow_equal_maps = (function shallow_equal_maps(x,y){
var or__3731__auto__ = (x === y);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var and__3719__auto__ = cljs.core.map_QMARK_(x);
if(and__3719__auto__){
var and__3719__auto____$1 = cljs.core.map_QMARK_(y);
if(and__3719__auto____$1){
var and__3719__auto____$2 = (cljs.core.count(x) === cljs.core.count(y));
if(and__3719__auto____$2){
return cljs.core.reduce_kv(((function (and__3719__auto____$2,and__3719__auto____$1,and__3719__auto__,or__3731__auto__){
return (function (res,k,v){
var yv = cljs.core.get.cljs$core$IFn$_invoke$arity$3(y,k,reagent.impl.util._not_found);
if(cljs.core.truth_((function (){var or__3731__auto____$1 = (v === yv);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
var or__3731__auto____$2 = reagent.impl.util.identical_ish_QMARK_(v,yv);
if(or__3731__auto____$2){
return or__3731__auto____$2;
} else {
var and__3719__auto____$3 = cljs.core.keyword_identical_QMARK_(k,cljs.core.constant$keyword$23);
if(and__3719__auto____$3){
return shallow_equal_maps(v,yv);
} else {
return and__3719__auto____$3;
}
}
}
})())){
return res;
} else {
return cljs.core.reduced(false);
}
});})(and__3719__auto____$2,and__3719__auto____$1,and__3719__auto__,or__3731__auto__))
,true,x);
} else {
return and__3719__auto____$2;
}
} else {
return and__3719__auto____$1;
}
} else {
return and__3719__auto__;
}
}
});
reagent.impl.util.equal_args = (function equal_args(v1,v2){
if(cljs.core.vector_QMARK_(v1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"v1","v1",-2141311508,null))], 0)))].join('')));
}

if(cljs.core.vector_QMARK_(v2)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"v2","v2",1875554983,null))], 0)))].join('')));
}

var or__3731__auto__ = (v1 === v2);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var and__3719__auto__ = (cljs.core.count(v1) === cljs.core.count(v2));
if(and__3719__auto__){
return cljs.core.reduce_kv(((function (and__3719__auto__,or__3731__auto__){
return (function (res,k,v){
var v_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v2,k);
if(cljs.core.truth_((function (){var or__3731__auto____$1 = (v === v_SINGLEQUOTE_);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
var or__3731__auto____$2 = reagent.impl.util.identical_ish_QMARK_(v,v_SINGLEQUOTE_);
if(or__3731__auto____$2){
return or__3731__auto____$2;
} else {
var and__3719__auto____$1 = cljs.core.map_QMARK_(v);
if(and__3719__auto____$1){
return reagent.impl.util.shallow_equal_maps(v,v_SINGLEQUOTE_);
} else {
return and__3719__auto____$1;
}
}
}
})())){
return res;
} else {
return cljs.core.reduced(false);
}
});})(and__3719__auto__,or__3731__auto__))
,true,v1);
} else {
return and__3719__auto__;
}
}
});
