// Compiled by ClojureScript 0.0-2371
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;if((other instanceof cljs.core.UUID))
{return (this$__$1.uuid === other.uuid);
} else
{if((other instanceof com.cognitect.transit.types.UUID))
{return (this$__$1.uuid === other.toString());
} else
{return false;

}
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;if((other instanceof cljs.core.UUID))
{return cljs.core._equiv(other,this$__$1);
} else
{return this$__$1.equiv(other);
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;
goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__21760 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__21760) : com.cognitect.transit.eq.hashCode.call(null,G__21760));
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__21761 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__21761) : com.cognitect.transit.eq.hashCode.call(null,G__21761));
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__21762 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__21762) : com.cognitect.transit.eq.hashCode.call(null,G__21762));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__21767_21771 = cljs.core.seq(cljs.core.js_keys(b));var chunk__21768_21772 = null;var count__21769_21773 = (0);var i__21770_21774 = (0);while(true){
if((i__21770_21774 < count__21769_21773))
{var k_21775 = chunk__21768_21772.cljs$core$IIndexed$_nth$arity$2(null,i__21770_21774);var v_21776 = (b[k_21775]);(a[k_21775] = v_21776);
{
var G__21777 = seq__21767_21771;
var G__21778 = chunk__21768_21772;
var G__21779 = count__21769_21773;
var G__21780 = (i__21770_21774 + (1));
seq__21767_21771 = G__21777;
chunk__21768_21772 = G__21778;
count__21769_21773 = G__21779;
i__21770_21774 = G__21780;
continue;
}
} else
{var temp__4126__auto___21781 = cljs.core.seq(seq__21767_21771);if(temp__4126__auto___21781)
{var seq__21767_21782__$1 = temp__4126__auto___21781;if(cljs.core.chunked_seq_QMARK_(seq__21767_21782__$1))
{var c__4410__auto___21783 = cljs.core.chunk_first(seq__21767_21782__$1);{
var G__21784 = cljs.core.chunk_rest(seq__21767_21782__$1);
var G__21785 = c__4410__auto___21783;
var G__21786 = cljs.core.count(c__4410__auto___21783);
var G__21787 = (0);
seq__21767_21771 = G__21784;
chunk__21768_21772 = G__21785;
count__21769_21773 = G__21786;
i__21770_21774 = G__21787;
continue;
}
} else
{var k_21788 = cljs.core.first(seq__21767_21782__$1);var v_21789 = (b[k_21788]);(a[k_21788] = v_21789);
{
var G__21790 = cljs.core.next(seq__21767_21782__$1);
var G__21791 = null;
var G__21792 = (0);
var G__21793 = (0);
seq__21767_21771 = G__21790;
chunk__21768_21772 = G__21791;
count__21769_21773 = G__21792;
i__21770_21774 = G__21793;
continue;
}
}
} else
{}
}
break;
}
return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.cljs$lang$type = true;
cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";
cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cognitect.transit/MapBuilder");
});
cognitect.transit.MapBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
});
cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){var self__ = this;
var _ = this;return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,v);
});
cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_(m);
});
cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;var G__21794 = arr;var G__21795 = true;var G__21796 = true;return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__21794,G__21795,G__21796) : cljs.core.PersistentArrayMap.fromArray.call(null,G__21794,G__21795,G__21796));
});
cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){return (new cognitect.transit.MapBuilder());
});

/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.cljs$lang$type = true;
cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";
cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cognitect.transit/VectorBuilder");
});
cognitect.transit.VectorBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
});
cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){var self__ = this;
var _ = this;return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,x);
});
cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_(v);
});
cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;var G__21797 = arr;var G__21798 = true;return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__21797,G__21798) : cljs.core.PersistentVector.fromArray.call(null,G__21797,G__21798));
});
cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){return (new cognitect.transit.VectorBuilder());
});
/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){return reader.cljs$core$IFn$_invoke$arity$2(type,null);
});
var reader__2 = (function (type,opts){var G__21803 = cljs.core.name(type);var G__21804 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, ["$",((function (G__21803){
return (function (v){return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__21803))
,":",((function (G__21803){
return (function (v){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__21803))
,"set",((function (G__21803){
return (function (v){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__21803))
,"list",((function (G__21803){
return (function (v){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__21803))
,"cmap",((function (G__21803){
return (function (v){var i = (0);var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__21805 = (i + (2));
var G__21806 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__21805;
ret = G__21806;
continue;
}
} else
{return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__21803))
], null),cljs.core.constant$keyword$46.cljs$core$IFn$_invoke$arity$1(opts)], 0)))},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$46)));return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__21803,G__21804) : com.cognitect.transit.reader.call(null,G__21803,G__21804));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.cljs$lang$type = true;
cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";
cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cognitect.transit/KeywordHandler");
});
cognitect.transit.KeywordHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return ":";
});
cognitect.transit.KeywordHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){return (new cognitect.transit.KeywordHandler());
});

/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.cljs$lang$type = true;
cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";
cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cognitect.transit/SymbolHandler");
});
cognitect.transit.SymbolHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "$";
});
cognitect.transit.SymbolHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){return (new cognitect.transit.SymbolHandler());
});

/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.cljs$lang$type = true;
cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";
cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cognitect.transit/ListHandler");
});
cognitect.transit.ListHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "list";
});
cognitect.transit.ListHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__21807_21813 = cljs.core.seq(v);var chunk__21808_21814 = null;var count__21809_21815 = (0);var i__21810_21816 = (0);while(true){
if((i__21810_21816 < count__21809_21815))
{var x_21817 = chunk__21808_21814.cljs$core$IIndexed$_nth$arity$2(null,i__21810_21816);ret.push(x_21817);
{
var G__21818 = seq__21807_21813;
var G__21819 = chunk__21808_21814;
var G__21820 = count__21809_21815;
var G__21821 = (i__21810_21816 + (1));
seq__21807_21813 = G__21818;
chunk__21808_21814 = G__21819;
count__21809_21815 = G__21820;
i__21810_21816 = G__21821;
continue;
}
} else
{var temp__4126__auto___21822 = cljs.core.seq(seq__21807_21813);if(temp__4126__auto___21822)
{var seq__21807_21823__$1 = temp__4126__auto___21822;if(cljs.core.chunked_seq_QMARK_(seq__21807_21823__$1))
{var c__4410__auto___21824 = cljs.core.chunk_first(seq__21807_21823__$1);{
var G__21825 = cljs.core.chunk_rest(seq__21807_21823__$1);
var G__21826 = c__4410__auto___21824;
var G__21827 = cljs.core.count(c__4410__auto___21824);
var G__21828 = (0);
seq__21807_21813 = G__21825;
chunk__21808_21814 = G__21826;
count__21809_21815 = G__21827;
i__21810_21816 = G__21828;
continue;
}
} else
{var x_21829 = cljs.core.first(seq__21807_21823__$1);ret.push(x_21829);
{
var G__21830 = cljs.core.next(seq__21807_21823__$1);
var G__21831 = null;
var G__21832 = (0);
var G__21833 = (0);
seq__21807_21813 = G__21830;
chunk__21808_21814 = G__21831;
count__21809_21815 = G__21832;
i__21810_21816 = G__21833;
continue;
}
}
} else
{}
}
break;
}
var G__21811 = "array";var G__21812 = ret;return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__21811,G__21812) : com.cognitect.transit.tagged.call(null,G__21811,G__21812));
});
cognitect.transit.ListHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){return (new cognitect.transit.ListHandler());
});

/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.cljs$lang$type = true;
cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";
cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cognitect.transit/MapHandler");
});
cognitect.transit.MapHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "map";
});
cognitect.transit.MapHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v;
});
cognitect.transit.MapHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){return (new cognitect.transit.MapHandler());
});

/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.cljs$lang$type = true;
cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";
cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cognitect.transit/SetHandler");
});
cognitect.transit.SetHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "set";
});
cognitect.transit.SetHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__21834_21840 = cljs.core.seq(v);var chunk__21835_21841 = null;var count__21836_21842 = (0);var i__21837_21843 = (0);while(true){
if((i__21837_21843 < count__21836_21842))
{var x_21844 = chunk__21835_21841.cljs$core$IIndexed$_nth$arity$2(null,i__21837_21843);ret.push(x_21844);
{
var G__21845 = seq__21834_21840;
var G__21846 = chunk__21835_21841;
var G__21847 = count__21836_21842;
var G__21848 = (i__21837_21843 + (1));
seq__21834_21840 = G__21845;
chunk__21835_21841 = G__21846;
count__21836_21842 = G__21847;
i__21837_21843 = G__21848;
continue;
}
} else
{var temp__4126__auto___21849 = cljs.core.seq(seq__21834_21840);if(temp__4126__auto___21849)
{var seq__21834_21850__$1 = temp__4126__auto___21849;if(cljs.core.chunked_seq_QMARK_(seq__21834_21850__$1))
{var c__4410__auto___21851 = cljs.core.chunk_first(seq__21834_21850__$1);{
var G__21852 = cljs.core.chunk_rest(seq__21834_21850__$1);
var G__21853 = c__4410__auto___21851;
var G__21854 = cljs.core.count(c__4410__auto___21851);
var G__21855 = (0);
seq__21834_21840 = G__21852;
chunk__21835_21841 = G__21853;
count__21836_21842 = G__21854;
i__21837_21843 = G__21855;
continue;
}
} else
{var x_21856 = cljs.core.first(seq__21834_21850__$1);ret.push(x_21856);
{
var G__21857 = cljs.core.next(seq__21834_21850__$1);
var G__21858 = null;
var G__21859 = (0);
var G__21860 = (0);
seq__21834_21840 = G__21857;
chunk__21835_21841 = G__21858;
count__21836_21842 = G__21859;
i__21837_21843 = G__21860;
continue;
}
}
} else
{}
}
break;
}
var G__21838 = "array";var G__21839 = ret;return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__21838,G__21839) : com.cognitect.transit.tagged.call(null,G__21838,G__21839));
});
cognitect.transit.SetHandler.prototype.stringRep = (function (){var self__ = this;
var v = this;return null;
});
cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){return (new cognitect.transit.SetHandler());
});

/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.cljs$lang$type = true;
cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";
cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cognitect.transit/VectorHandler");
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "array";
});
cognitect.transit.VectorHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__21861_21865 = cljs.core.seq(v);var chunk__21862_21866 = null;var count__21863_21867 = (0);var i__21864_21868 = (0);while(true){
if((i__21864_21868 < count__21863_21867))
{var x_21869 = chunk__21862_21866.cljs$core$IIndexed$_nth$arity$2(null,i__21864_21868);ret.push(x_21869);
{
var G__21870 = seq__21861_21865;
var G__21871 = chunk__21862_21866;
var G__21872 = count__21863_21867;
var G__21873 = (i__21864_21868 + (1));
seq__21861_21865 = G__21870;
chunk__21862_21866 = G__21871;
count__21863_21867 = G__21872;
i__21864_21868 = G__21873;
continue;
}
} else
{var temp__4126__auto___21874 = cljs.core.seq(seq__21861_21865);if(temp__4126__auto___21874)
{var seq__21861_21875__$1 = temp__4126__auto___21874;if(cljs.core.chunked_seq_QMARK_(seq__21861_21875__$1))
{var c__4410__auto___21876 = cljs.core.chunk_first(seq__21861_21875__$1);{
var G__21877 = cljs.core.chunk_rest(seq__21861_21875__$1);
var G__21878 = c__4410__auto___21876;
var G__21879 = cljs.core.count(c__4410__auto___21876);
var G__21880 = (0);
seq__21861_21865 = G__21877;
chunk__21862_21866 = G__21878;
count__21863_21867 = G__21879;
i__21864_21868 = G__21880;
continue;
}
} else
{var x_21881 = cljs.core.first(seq__21861_21875__$1);ret.push(x_21881);
{
var G__21882 = cljs.core.next(seq__21861_21875__$1);
var G__21883 = null;
var G__21884 = (0);
var G__21885 = (0);
seq__21861_21865 = G__21882;
chunk__21862_21866 = G__21883;
count__21863_21867 = G__21884;
i__21864_21868 = G__21885;
continue;
}
}
} else
{}
}
break;
}
return ret;
});
cognitect.transit.VectorHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){return (new cognitect.transit.VectorHandler());
});

/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.cljs$lang$type = true;
cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";
cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cognitect.transit/UUIDHandler");
});
cognitect.transit.UUIDHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "u";
});
cognitect.transit.UUIDHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.uuid;
});
cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){var self__ = this;
var this$ = this;return this$.rep(v);
});
cognitect.transit.__GT_UUIDHandler = (function __GT_UUIDHandler(){return (new cognitect.transit.UUIDHandler());
});
/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a JavaScript
* array of interleaved type constructors and handler instances for those
* type constructors.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){return writer.cljs$core$IFn$_invoke$arity$2(type,null);
});
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var uuid_handler = (new cognitect.transit.UUIDHandler());var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),cljs.core.constant$keyword$46.cljs$core$IFn$_invoke$arity$1(opts)], 0));var G__21904 = cljs.core.name(type);var G__21905 = cognitect.transit.opts_merge({"unpack": ((function (G__21904,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(G__21904,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x21909 = cljs.core.clone(handlers);x21909.forEach = ((function (x21909,G__21904,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){var coll = this;var seq__21910 = cljs.core.seq(coll);var chunk__21911 = null;var count__21912 = (0);var i__21913 = (0);while(true){
if((i__21913 < count__21912))
{var vec__21914 = chunk__21911.cljs$core$IIndexed$_nth$arity$2(null,i__21913);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21914,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21914,(1),null);var G__21915_21920 = v;var G__21916_21921 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21915_21920,G__21916_21921) : f.call(null,G__21915_21920,G__21916_21921));
{
var G__21922 = seq__21910;
var G__21923 = chunk__21911;
var G__21924 = count__21912;
var G__21925 = (i__21913 + (1));
seq__21910 = G__21922;
chunk__21911 = G__21923;
count__21912 = G__21924;
i__21913 = G__21925;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__21910);if(temp__4126__auto__)
{var seq__21910__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__21910__$1))
{var c__4410__auto__ = cljs.core.chunk_first(seq__21910__$1);{
var G__21926 = cljs.core.chunk_rest(seq__21910__$1);
var G__21927 = c__4410__auto__;
var G__21928 = cljs.core.count(c__4410__auto__);
var G__21929 = (0);
seq__21910 = G__21926;
chunk__21911 = G__21927;
count__21912 = G__21928;
i__21913 = G__21929;
continue;
}
} else
{var vec__21917 = cljs.core.first(seq__21910__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21917,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21917,(1),null);var G__21918_21930 = v;var G__21919_21931 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21918_21930,G__21919_21931) : f.call(null,G__21918_21930,G__21919_21931));
{
var G__21932 = cljs.core.next(seq__21910__$1);
var G__21933 = null;
var G__21934 = (0);
var G__21935 = (0);
seq__21910 = G__21932;
chunk__21911 = G__21933;
count__21912 = G__21934;
i__21913 = G__21935;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x21909,G__21904,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;
return x21909;
})(), "objectBuilder": ((function (G__21904,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv(((function (G__21904,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){var G__21906 = obj;G__21906.push((function (){var G__21907 = k;return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__21907) : kfn.call(null,G__21907));
})(),(function (){var G__21908 = v;return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__21908) : vfn.call(null,G__21908));
})());
return G__21906;
});})(G__21904,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(G__21904,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$46)));return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__21904,G__21905) : com.cognitect.transit.writer.call(null,G__21904,G__21905));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){return write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){return write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t21950 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t21950 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta21951){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta21951 = meta21951;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t21950.cljs$lang$type = true;
cognitect.transit.t21950.cljs$lang$ctorStr = "cognitect.transit/t21950";
cognitect.transit.t21950.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cognitect.transit/t21950");
});
cognitect.transit.t21950.prototype.tag = (function (o){var self__ = this;
var _ = this;var G__21953 = o;return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__21953) : self__.tag_fn.call(null,G__21953));
});
cognitect.transit.t21950.prototype.rep = (function (o){var self__ = this;
var _ = this;var G__21954 = o;return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__21954) : self__.rep_fn.call(null,G__21954));
});
cognitect.transit.t21950.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{var G__21955 = o;return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__21955) : self__.str_rep_fn.call(null,G__21955));
} else
{return null;
}
});
cognitect.transit.t21950.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else
{return null;
}
});
cognitect.transit.t21950.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21952){var self__ = this;
var _21952__$1 = this;return self__.meta21951;
});
cognitect.transit.t21950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21952,meta21951__$1){var self__ = this;
var _21952__$1 = this;return (new cognitect.transit.t21950(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta21951__$1));
});
cognitect.transit.__GT_t21950 = (function __GT_t21950(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta21951){return (new cognitect.transit.t21950(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta21951));
});
}
return (new cognitect.transit.t21950(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){var G__21958 = tag;var G__21959 = rep;return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__21958,G__21959) : com.cognitect.transit.types.taggedValue.call(null,G__21958,G__21959));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){var G__21961 = x;return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__21961) : com.cognitect.transit.types.isTaggedValue.call(null,G__21961));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){var G__21963 = s;return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__21963) : com.cognitect.transit.types.integer.call(null,G__21963));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){var G__21965 = x;return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__21965) : com.cognitect.transit.types.isInteger.call(null,G__21965));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){var G__21967 = s;return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__21967) : com.cognitect.transit.types.bigInteger.call(null,G__21967));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){var G__21969 = x;return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__21969) : com.cognitect.transit.types.isBigInteger.call(null,G__21969));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){var G__21971 = s;return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__21971) : com.cognitect.transit.types.bigDecimalValue.call(null,G__21971));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){var G__21973 = x;return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__21973) : com.cognitect.transit.types.isBigDecimal.call(null,G__21973));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){var G__21975 = s;return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__21975) : com.cognitect.transit.types.uri.call(null,G__21975));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){var G__21977 = x;return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__21977) : com.cognitect.transit.types.isURI.call(null,G__21977));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){var G__21979 = s;return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__21979) : com.cognitect.transit.types.uuid.call(null,G__21979));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){var G__21981 = x;return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__21981) : com.cognitect.transit.types.isUUID.call(null,G__21981));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){var G__21983 = s;return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__21983) : com.cognitect.transit.types.binary.call(null,G__21983));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){var G__21985 = x;return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__21985) : com.cognitect.transit.types.isBinary.call(null,G__21985));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){var G__21987 = x;return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__21987) : com.cognitect.transit.types.quoted.call(null,G__21987));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){var G__21989 = x;return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__21989) : com.cognitect.transit.types.isQuoted.call(null,G__21989));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){var G__21991 = x;return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__21991) : com.cognitect.transit.types.link.call(null,G__21991));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){var G__21993 = x;return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__21993) : com.cognitect.transit.types.isLink.call(null,G__21993));
});
