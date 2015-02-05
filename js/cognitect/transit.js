// Compiled by ClojureScript 0.0-2727 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv(other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__24783 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__24783) : com.cognitect.transit.eq.hashCode.call(null,G__24783));
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__24784 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__24784) : com.cognitect.transit.eq.hashCode.call(null,G__24784));
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__24785 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__24785) : com.cognitect.transit.eq.hashCode.call(null,G__24785));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){
var seq__24790_24794 = cljs.core.seq(cljs.core.js_keys(b));
var chunk__24791_24795 = null;
var count__24792_24796 = (0);
var i__24793_24797 = (0);
while(true){
if((i__24793_24797 < count__24792_24796)){
var k_24798 = chunk__24791_24795.cljs$core$IIndexed$_nth$arity$2(null,i__24793_24797);
var v_24799 = (b[k_24798]);
(a[k_24798] = v_24799);

var G__24800 = seq__24790_24794;
var G__24801 = chunk__24791_24795;
var G__24802 = count__24792_24796;
var G__24803 = (i__24793_24797 + (1));
seq__24790_24794 = G__24800;
chunk__24791_24795 = G__24801;
count__24792_24796 = G__24802;
i__24793_24797 = G__24803;
continue;
} else {
var temp__4126__auto___24804 = cljs.core.seq(seq__24790_24794);
if(temp__4126__auto___24804){
var seq__24790_24805__$1 = temp__4126__auto___24804;
if(cljs.core.chunked_seq_QMARK_(seq__24790_24805__$1)){
var c__4537__auto___24806 = cljs.core.chunk_first(seq__24790_24805__$1);
var G__24807 = cljs.core.chunk_rest(seq__24790_24805__$1);
var G__24808 = c__4537__auto___24806;
var G__24809 = cljs.core.count(c__4537__auto___24806);
var G__24810 = (0);
seq__24790_24794 = G__24807;
chunk__24791_24795 = G__24808;
count__24792_24796 = G__24809;
i__24793_24797 = G__24810;
continue;
} else {
var k_24811 = cljs.core.first(seq__24790_24805__$1);
var v_24812 = (b[k_24811]);
(a[k_24811] = v_24812);

var G__24813 = cljs.core.next(seq__24790_24805__$1);
var G__24814 = null;
var G__24815 = (0);
var G__24816 = (0);
seq__24790_24794 = G__24813;
chunk__24791_24795 = G__24814;
count__24792_24796 = G__24815;
i__24793_24797 = G__24816;
continue;
}
} else {
}
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
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_(m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
var G__24817 = arr;
var G__24818 = true;
var G__24819 = true;
return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__24817,G__24818,G__24819) : cljs.core.PersistentArrayMap.fromArray.call(null,G__24817,G__24818,G__24819));
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4337__auto__,writer__4338__auto__,opt__4339__auto__){
return cljs.core._write(writer__4338__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_(v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
var G__24820 = arr;
var G__24821 = true;
return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__24820,G__24821) : cljs.core.PersistentVector.fromArray.call(null,G__24820,G__24821));
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4337__auto__,writer__4338__auto__,opt__4339__auto__){
return cljs.core._write(writer__4338__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){
return reader.cljs$core$IFn$_invoke$arity$2(type,null);
});
var reader__2 = (function (type,opts){
var G__24826 = cljs.core.name(type);
var G__24827 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, ["$",((function (G__24826){
return (function (v){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__24826))
,":",((function (G__24826){
return (function (v){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__24826))
,"set",((function (G__24826){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__24826))
,"list",((function (G__24826){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__24826))
,"cmap",((function (G__24826){
return (function (v){
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__24828 = (i + (2));
var G__24829 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__24828;
ret = G__24829;
continue;
} else {
return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__24826))
], null),cljs.core.constant$keyword$175.cljs$core$IFn$_invoke$arity$1(opts)], 0)))},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$175)));
return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__24826,G__24827) : com.cognitect.transit.reader.call(null,G__24826,G__24827));
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
cognitect.transit.read = (function read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4337__auto__,writer__4338__auto__,opt__4339__auto__){
return cljs.core._write(writer__4338__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4337__auto__,writer__4338__auto__,opt__4339__auto__){
return cljs.core._write(writer__4338__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__24830_24836 = cljs.core.seq(v);
var chunk__24831_24837 = null;
var count__24832_24838 = (0);
var i__24833_24839 = (0);
while(true){
if((i__24833_24839 < count__24832_24838)){
var x_24840 = chunk__24831_24837.cljs$core$IIndexed$_nth$arity$2(null,i__24833_24839);
ret.push(x_24840);

var G__24841 = seq__24830_24836;
var G__24842 = chunk__24831_24837;
var G__24843 = count__24832_24838;
var G__24844 = (i__24833_24839 + (1));
seq__24830_24836 = G__24841;
chunk__24831_24837 = G__24842;
count__24832_24838 = G__24843;
i__24833_24839 = G__24844;
continue;
} else {
var temp__4126__auto___24845 = cljs.core.seq(seq__24830_24836);
if(temp__4126__auto___24845){
var seq__24830_24846__$1 = temp__4126__auto___24845;
if(cljs.core.chunked_seq_QMARK_(seq__24830_24846__$1)){
var c__4537__auto___24847 = cljs.core.chunk_first(seq__24830_24846__$1);
var G__24848 = cljs.core.chunk_rest(seq__24830_24846__$1);
var G__24849 = c__4537__auto___24847;
var G__24850 = cljs.core.count(c__4537__auto___24847);
var G__24851 = (0);
seq__24830_24836 = G__24848;
chunk__24831_24837 = G__24849;
count__24832_24838 = G__24850;
i__24833_24839 = G__24851;
continue;
} else {
var x_24852 = cljs.core.first(seq__24830_24846__$1);
ret.push(x_24852);

var G__24853 = cljs.core.next(seq__24830_24846__$1);
var G__24854 = null;
var G__24855 = (0);
var G__24856 = (0);
seq__24830_24836 = G__24853;
chunk__24831_24837 = G__24854;
count__24832_24838 = G__24855;
i__24833_24839 = G__24856;
continue;
}
} else {
}
}
break;
}

var G__24834 = "array";
var G__24835 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__24834,G__24835) : com.cognitect.transit.tagged.call(null,G__24834,G__24835));
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4337__auto__,writer__4338__auto__,opt__4339__auto__){
return cljs.core._write(writer__4338__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4337__auto__,writer__4338__auto__,opt__4339__auto__){
return cljs.core._write(writer__4338__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__24857_24863 = cljs.core.seq(v);
var chunk__24858_24864 = null;
var count__24859_24865 = (0);
var i__24860_24866 = (0);
while(true){
if((i__24860_24866 < count__24859_24865)){
var x_24867 = chunk__24858_24864.cljs$core$IIndexed$_nth$arity$2(null,i__24860_24866);
ret.push(x_24867);

var G__24868 = seq__24857_24863;
var G__24869 = chunk__24858_24864;
var G__24870 = count__24859_24865;
var G__24871 = (i__24860_24866 + (1));
seq__24857_24863 = G__24868;
chunk__24858_24864 = G__24869;
count__24859_24865 = G__24870;
i__24860_24866 = G__24871;
continue;
} else {
var temp__4126__auto___24872 = cljs.core.seq(seq__24857_24863);
if(temp__4126__auto___24872){
var seq__24857_24873__$1 = temp__4126__auto___24872;
if(cljs.core.chunked_seq_QMARK_(seq__24857_24873__$1)){
var c__4537__auto___24874 = cljs.core.chunk_first(seq__24857_24873__$1);
var G__24875 = cljs.core.chunk_rest(seq__24857_24873__$1);
var G__24876 = c__4537__auto___24874;
var G__24877 = cljs.core.count(c__4537__auto___24874);
var G__24878 = (0);
seq__24857_24863 = G__24875;
chunk__24858_24864 = G__24876;
count__24859_24865 = G__24877;
i__24860_24866 = G__24878;
continue;
} else {
var x_24879 = cljs.core.first(seq__24857_24873__$1);
ret.push(x_24879);

var G__24880 = cljs.core.next(seq__24857_24873__$1);
var G__24881 = null;
var G__24882 = (0);
var G__24883 = (0);
seq__24857_24863 = G__24880;
chunk__24858_24864 = G__24881;
count__24859_24865 = G__24882;
i__24860_24866 = G__24883;
continue;
}
} else {
}
}
break;
}

var G__24861 = "array";
var G__24862 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__24861,G__24862) : com.cognitect.transit.tagged.call(null,G__24861,G__24862));
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4337__auto__,writer__4338__auto__,opt__4339__auto__){
return cljs.core._write(writer__4338__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__24884_24888 = cljs.core.seq(v);
var chunk__24885_24889 = null;
var count__24886_24890 = (0);
var i__24887_24891 = (0);
while(true){
if((i__24887_24891 < count__24886_24890)){
var x_24892 = chunk__24885_24889.cljs$core$IIndexed$_nth$arity$2(null,i__24887_24891);
ret.push(x_24892);

var G__24893 = seq__24884_24888;
var G__24894 = chunk__24885_24889;
var G__24895 = count__24886_24890;
var G__24896 = (i__24887_24891 + (1));
seq__24884_24888 = G__24893;
chunk__24885_24889 = G__24894;
count__24886_24890 = G__24895;
i__24887_24891 = G__24896;
continue;
} else {
var temp__4126__auto___24897 = cljs.core.seq(seq__24884_24888);
if(temp__4126__auto___24897){
var seq__24884_24898__$1 = temp__4126__auto___24897;
if(cljs.core.chunked_seq_QMARK_(seq__24884_24898__$1)){
var c__4537__auto___24899 = cljs.core.chunk_first(seq__24884_24898__$1);
var G__24900 = cljs.core.chunk_rest(seq__24884_24898__$1);
var G__24901 = c__4537__auto___24899;
var G__24902 = cljs.core.count(c__4537__auto___24899);
var G__24903 = (0);
seq__24884_24888 = G__24900;
chunk__24885_24889 = G__24901;
count__24886_24890 = G__24902;
i__24887_24891 = G__24903;
continue;
} else {
var x_24904 = cljs.core.first(seq__24884_24898__$1);
ret.push(x_24904);

var G__24905 = cljs.core.next(seq__24884_24898__$1);
var G__24906 = null;
var G__24907 = (0);
var G__24908 = (0);
seq__24884_24888 = G__24905;
chunk__24885_24889 = G__24906;
count__24886_24890 = G__24907;
i__24887_24891 = G__24908;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4337__auto__,writer__4338__auto__,opt__4339__auto__){
return cljs.core._write(writer__4338__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4337__auto__,writer__4338__auto__,opt__4339__auto__){
return cljs.core._write(writer__4338__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function __GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a map of
* type constructors to handler instances.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){
return writer.cljs$core$IFn$_invoke$arity$2(type,null);
});
var writer__2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),cljs.core.constant$keyword$175.cljs$core$IFn$_invoke$arity$1(opts)], 0));
var G__24927 = cljs.core.name(type);
var G__24928 = cognitect.transit.opts_merge({"unpack": ((function (G__24927,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(G__24927,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x24932 = cljs.core.clone(handlers);
x24932.forEach = ((function (x24932,G__24927,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__24933 = cljs.core.seq(coll);
var chunk__24934 = null;
var count__24935 = (0);
var i__24936 = (0);
while(true){
if((i__24936 < count__24935)){
var vec__24937 = chunk__24934.cljs$core$IIndexed$_nth$arity$2(null,i__24936);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24937,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24937,(1),null);
var G__24938_24943 = v;
var G__24939_24944 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24938_24943,G__24939_24944) : f.call(null,G__24938_24943,G__24939_24944));

var G__24945 = seq__24933;
var G__24946 = chunk__24934;
var G__24947 = count__24935;
var G__24948 = (i__24936 + (1));
seq__24933 = G__24945;
chunk__24934 = G__24946;
count__24935 = G__24947;
i__24936 = G__24948;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__24933);
if(temp__4126__auto__){
var seq__24933__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24933__$1)){
var c__4537__auto__ = cljs.core.chunk_first(seq__24933__$1);
var G__24949 = cljs.core.chunk_rest(seq__24933__$1);
var G__24950 = c__4537__auto__;
var G__24951 = cljs.core.count(c__4537__auto__);
var G__24952 = (0);
seq__24933 = G__24949;
chunk__24934 = G__24950;
count__24935 = G__24951;
i__24936 = G__24952;
continue;
} else {
var vec__24940 = cljs.core.first(seq__24933__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24940,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24940,(1),null);
var G__24941_24953 = v;
var G__24942_24954 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24941_24953,G__24942_24954) : f.call(null,G__24941_24953,G__24942_24954));

var G__24955 = cljs.core.next(seq__24933__$1);
var G__24956 = null;
var G__24957 = (0);
var G__24958 = (0);
seq__24933 = G__24955;
chunk__24934 = G__24956;
count__24935 = G__24957;
i__24936 = G__24958;
continue;
}
} else {
return null;
}
}
break;
}
});})(x24932,G__24927,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x24932;
})(), "objectBuilder": ((function (G__24927,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv(((function (G__24927,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__24929 = obj;
G__24929.push((function (){var G__24930 = k;
return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__24930) : kfn.call(null,G__24930));
})(),(function (){var G__24931 = v;
return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__24931) : vfn.call(null,G__24931));
})());

return G__24929;
});})(G__24927,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(G__24927,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$175)));
return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__24927,G__24928) : com.cognitect.transit.writer.call(null,G__24927,G__24928));
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
cognitect.transit.write = (function write(w,o){
return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){
return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){
return write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){
return write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t24973 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t24973 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta24974){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta24974 = meta24974;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t24973.prototype.tag = (function (o){
var self__ = this;
var _ = this;
var G__24976 = o;
return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__24976) : self__.tag_fn.call(null,G__24976));
});

cognitect.transit.t24973.prototype.rep = (function (o){
var self__ = this;
var _ = this;
var G__24977 = o;
return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__24977) : self__.rep_fn.call(null,G__24977));
});

cognitect.transit.t24973.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
var G__24978 = o;
return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__24978) : self__.str_rep_fn.call(null,G__24978));
} else {
return null;
}
});

cognitect.transit.t24973.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else {
return null;
}
});

cognitect.transit.t24973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24975){
var self__ = this;
var _24975__$1 = this;
return self__.meta24974;
});

cognitect.transit.t24973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24975,meta24974__$1){
var self__ = this;
var _24975__$1 = this;
return (new cognitect.transit.t24973(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta24974__$1));
});

cognitect.transit.t24973.cljs$lang$type = true;

cognitect.transit.t24973.cljs$lang$ctorStr = "cognitect.transit/t24973";

cognitect.transit.t24973.cljs$lang$ctorPrWriter = (function (this__4337__auto__,writer__4338__auto__,opt__4339__auto__){
return cljs.core._write(writer__4338__auto__,"cognitect.transit/t24973");
});

cognitect.transit.__GT_t24973 = (function __GT_t24973(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta24974){
return (new cognitect.transit.t24973(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta24974));
});

}

return (new cognitect.transit.t24973(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,79,cljs.core.constant$keyword$9,259,cljs.core.constant$keyword$10,6,cljs.core.constant$keyword$11,254,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cognitect/transit.cljs"], null)));
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
cognitect.transit.tagged_value = (function tagged_value(tag,rep){
var G__24981 = tag;
var G__24982 = rep;
return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__24981,G__24982) : com.cognitect.transit.types.taggedValue.call(null,G__24981,G__24982));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){
var G__24984 = x;
return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__24984) : com.cognitect.transit.types.isTaggedValue.call(null,G__24984));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){
var G__24986 = s;
return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__24986) : com.cognitect.transit.types.integer.call(null,G__24986));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){
var G__24988 = x;
return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__24988) : com.cognitect.transit.types.isInteger.call(null,G__24988));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){
var G__24990 = s;
return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__24990) : com.cognitect.transit.types.bigInteger.call(null,G__24990));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){
var G__24992 = x;
return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__24992) : com.cognitect.transit.types.isBigInteger.call(null,G__24992));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){
var G__24994 = s;
return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__24994) : com.cognitect.transit.types.bigDecimalValue.call(null,G__24994));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){
var G__24996 = x;
return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__24996) : com.cognitect.transit.types.isBigDecimal.call(null,G__24996));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){
var G__24998 = s;
return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__24998) : com.cognitect.transit.types.uri.call(null,G__24998));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){
var G__25000 = x;
return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__25000) : com.cognitect.transit.types.isURI.call(null,G__25000));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){
var G__25002 = s;
return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__25002) : com.cognitect.transit.types.uuid.call(null,G__25002));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){
var G__25004 = x;
return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__25004) : com.cognitect.transit.types.isUUID.call(null,G__25004));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){
var G__25006 = s;
return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__25006) : com.cognitect.transit.types.binary.call(null,G__25006));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){
var G__25008 = x;
return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__25008) : com.cognitect.transit.types.isBinary.call(null,G__25008));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){
var G__25010 = x;
return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__25010) : com.cognitect.transit.types.quoted.call(null,G__25010));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){
var G__25012 = x;
return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__25012) : com.cognitect.transit.types.isQuoted.call(null,G__25012));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){
var G__25014 = x;
return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__25014) : com.cognitect.transit.types.link.call(null,G__25014));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){
var G__25016 = x;
return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__25016) : com.cognitect.transit.types.isLink.call(null,G__25016));
});
