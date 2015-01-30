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
var G__23961 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__23961) : com.cognitect.transit.eq.hashCode.call(null,G__23961));
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__23962 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__23962) : com.cognitect.transit.eq.hashCode.call(null,G__23962));
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__23963 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__23963) : com.cognitect.transit.eq.hashCode.call(null,G__23963));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){
var seq__23968_23972 = cljs.core.seq(cljs.core.js_keys(b));
var chunk__23969_23973 = null;
var count__23970_23974 = (0);
var i__23971_23975 = (0);
while(true){
if((i__23971_23975 < count__23970_23974)){
var k_23976 = chunk__23969_23973.cljs$core$IIndexed$_nth$arity$2(null,i__23971_23975);
var v_23977 = (b[k_23976]);
(a[k_23976] = v_23977);

var G__23978 = seq__23968_23972;
var G__23979 = chunk__23969_23973;
var G__23980 = count__23970_23974;
var G__23981 = (i__23971_23975 + (1));
seq__23968_23972 = G__23978;
chunk__23969_23973 = G__23979;
count__23970_23974 = G__23980;
i__23971_23975 = G__23981;
continue;
} else {
var temp__4126__auto___23982 = cljs.core.seq(seq__23968_23972);
if(temp__4126__auto___23982){
var seq__23968_23983__$1 = temp__4126__auto___23982;
if(cljs.core.chunked_seq_QMARK_(seq__23968_23983__$1)){
var c__4537__auto___23984 = cljs.core.chunk_first(seq__23968_23983__$1);
var G__23985 = cljs.core.chunk_rest(seq__23968_23983__$1);
var G__23986 = c__4537__auto___23984;
var G__23987 = cljs.core.count(c__4537__auto___23984);
var G__23988 = (0);
seq__23968_23972 = G__23985;
chunk__23969_23973 = G__23986;
count__23970_23974 = G__23987;
i__23971_23975 = G__23988;
continue;
} else {
var k_23989 = cljs.core.first(seq__23968_23983__$1);
var v_23990 = (b[k_23989]);
(a[k_23989] = v_23990);

var G__23991 = cljs.core.next(seq__23968_23983__$1);
var G__23992 = null;
var G__23993 = (0);
var G__23994 = (0);
seq__23968_23972 = G__23991;
chunk__23969_23973 = G__23992;
count__23970_23974 = G__23993;
i__23971_23975 = G__23994;
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
var G__23995 = arr;
var G__23996 = true;
var G__23997 = true;
return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__23995,G__23996,G__23997) : cljs.core.PersistentArrayMap.fromArray.call(null,G__23995,G__23996,G__23997));
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
var G__23998 = arr;
var G__23999 = true;
return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__23998,G__23999) : cljs.core.PersistentVector.fromArray.call(null,G__23998,G__23999));
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
var G__24004 = cljs.core.name(type);
var G__24005 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, ["$",((function (G__24004){
return (function (v){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__24004))
,":",((function (G__24004){
return (function (v){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__24004))
,"set",((function (G__24004){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__24004))
,"list",((function (G__24004){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__24004))
,"cmap",((function (G__24004){
return (function (v){
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__24006 = (i + (2));
var G__24007 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__24006;
ret = G__24007;
continue;
} else {
return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__24004))
], null),cljs.core.constant$keyword$62.cljs$core$IFn$_invoke$arity$1(opts)], 0)))},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$62)));
return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__24004,G__24005) : com.cognitect.transit.reader.call(null,G__24004,G__24005));
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
var seq__24008_24014 = cljs.core.seq(v);
var chunk__24009_24015 = null;
var count__24010_24016 = (0);
var i__24011_24017 = (0);
while(true){
if((i__24011_24017 < count__24010_24016)){
var x_24018 = chunk__24009_24015.cljs$core$IIndexed$_nth$arity$2(null,i__24011_24017);
ret.push(x_24018);

var G__24019 = seq__24008_24014;
var G__24020 = chunk__24009_24015;
var G__24021 = count__24010_24016;
var G__24022 = (i__24011_24017 + (1));
seq__24008_24014 = G__24019;
chunk__24009_24015 = G__24020;
count__24010_24016 = G__24021;
i__24011_24017 = G__24022;
continue;
} else {
var temp__4126__auto___24023 = cljs.core.seq(seq__24008_24014);
if(temp__4126__auto___24023){
var seq__24008_24024__$1 = temp__4126__auto___24023;
if(cljs.core.chunked_seq_QMARK_(seq__24008_24024__$1)){
var c__4537__auto___24025 = cljs.core.chunk_first(seq__24008_24024__$1);
var G__24026 = cljs.core.chunk_rest(seq__24008_24024__$1);
var G__24027 = c__4537__auto___24025;
var G__24028 = cljs.core.count(c__4537__auto___24025);
var G__24029 = (0);
seq__24008_24014 = G__24026;
chunk__24009_24015 = G__24027;
count__24010_24016 = G__24028;
i__24011_24017 = G__24029;
continue;
} else {
var x_24030 = cljs.core.first(seq__24008_24024__$1);
ret.push(x_24030);

var G__24031 = cljs.core.next(seq__24008_24024__$1);
var G__24032 = null;
var G__24033 = (0);
var G__24034 = (0);
seq__24008_24014 = G__24031;
chunk__24009_24015 = G__24032;
count__24010_24016 = G__24033;
i__24011_24017 = G__24034;
continue;
}
} else {
}
}
break;
}

var G__24012 = "array";
var G__24013 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__24012,G__24013) : com.cognitect.transit.tagged.call(null,G__24012,G__24013));
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
var seq__24035_24041 = cljs.core.seq(v);
var chunk__24036_24042 = null;
var count__24037_24043 = (0);
var i__24038_24044 = (0);
while(true){
if((i__24038_24044 < count__24037_24043)){
var x_24045 = chunk__24036_24042.cljs$core$IIndexed$_nth$arity$2(null,i__24038_24044);
ret.push(x_24045);

var G__24046 = seq__24035_24041;
var G__24047 = chunk__24036_24042;
var G__24048 = count__24037_24043;
var G__24049 = (i__24038_24044 + (1));
seq__24035_24041 = G__24046;
chunk__24036_24042 = G__24047;
count__24037_24043 = G__24048;
i__24038_24044 = G__24049;
continue;
} else {
var temp__4126__auto___24050 = cljs.core.seq(seq__24035_24041);
if(temp__4126__auto___24050){
var seq__24035_24051__$1 = temp__4126__auto___24050;
if(cljs.core.chunked_seq_QMARK_(seq__24035_24051__$1)){
var c__4537__auto___24052 = cljs.core.chunk_first(seq__24035_24051__$1);
var G__24053 = cljs.core.chunk_rest(seq__24035_24051__$1);
var G__24054 = c__4537__auto___24052;
var G__24055 = cljs.core.count(c__4537__auto___24052);
var G__24056 = (0);
seq__24035_24041 = G__24053;
chunk__24036_24042 = G__24054;
count__24037_24043 = G__24055;
i__24038_24044 = G__24056;
continue;
} else {
var x_24057 = cljs.core.first(seq__24035_24051__$1);
ret.push(x_24057);

var G__24058 = cljs.core.next(seq__24035_24051__$1);
var G__24059 = null;
var G__24060 = (0);
var G__24061 = (0);
seq__24035_24041 = G__24058;
chunk__24036_24042 = G__24059;
count__24037_24043 = G__24060;
i__24038_24044 = G__24061;
continue;
}
} else {
}
}
break;
}

var G__24039 = "array";
var G__24040 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__24039,G__24040) : com.cognitect.transit.tagged.call(null,G__24039,G__24040));
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
var seq__24062_24066 = cljs.core.seq(v);
var chunk__24063_24067 = null;
var count__24064_24068 = (0);
var i__24065_24069 = (0);
while(true){
if((i__24065_24069 < count__24064_24068)){
var x_24070 = chunk__24063_24067.cljs$core$IIndexed$_nth$arity$2(null,i__24065_24069);
ret.push(x_24070);

var G__24071 = seq__24062_24066;
var G__24072 = chunk__24063_24067;
var G__24073 = count__24064_24068;
var G__24074 = (i__24065_24069 + (1));
seq__24062_24066 = G__24071;
chunk__24063_24067 = G__24072;
count__24064_24068 = G__24073;
i__24065_24069 = G__24074;
continue;
} else {
var temp__4126__auto___24075 = cljs.core.seq(seq__24062_24066);
if(temp__4126__auto___24075){
var seq__24062_24076__$1 = temp__4126__auto___24075;
if(cljs.core.chunked_seq_QMARK_(seq__24062_24076__$1)){
var c__4537__auto___24077 = cljs.core.chunk_first(seq__24062_24076__$1);
var G__24078 = cljs.core.chunk_rest(seq__24062_24076__$1);
var G__24079 = c__4537__auto___24077;
var G__24080 = cljs.core.count(c__4537__auto___24077);
var G__24081 = (0);
seq__24062_24066 = G__24078;
chunk__24063_24067 = G__24079;
count__24064_24068 = G__24080;
i__24065_24069 = G__24081;
continue;
} else {
var x_24082 = cljs.core.first(seq__24062_24076__$1);
ret.push(x_24082);

var G__24083 = cljs.core.next(seq__24062_24076__$1);
var G__24084 = null;
var G__24085 = (0);
var G__24086 = (0);
seq__24062_24066 = G__24083;
chunk__24063_24067 = G__24084;
count__24064_24068 = G__24085;
i__24065_24069 = G__24086;
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
var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),cljs.core.constant$keyword$62.cljs$core$IFn$_invoke$arity$1(opts)], 0));
var G__24105 = cljs.core.name(type);
var G__24106 = cognitect.transit.opts_merge({"unpack": ((function (G__24105,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(G__24105,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x24110 = cljs.core.clone(handlers);
x24110.forEach = ((function (x24110,G__24105,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__24111 = cljs.core.seq(coll);
var chunk__24112 = null;
var count__24113 = (0);
var i__24114 = (0);
while(true){
if((i__24114 < count__24113)){
var vec__24115 = chunk__24112.cljs$core$IIndexed$_nth$arity$2(null,i__24114);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24115,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24115,(1),null);
var G__24116_24121 = v;
var G__24117_24122 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24116_24121,G__24117_24122) : f.call(null,G__24116_24121,G__24117_24122));

var G__24123 = seq__24111;
var G__24124 = chunk__24112;
var G__24125 = count__24113;
var G__24126 = (i__24114 + (1));
seq__24111 = G__24123;
chunk__24112 = G__24124;
count__24113 = G__24125;
i__24114 = G__24126;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__24111);
if(temp__4126__auto__){
var seq__24111__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24111__$1)){
var c__4537__auto__ = cljs.core.chunk_first(seq__24111__$1);
var G__24127 = cljs.core.chunk_rest(seq__24111__$1);
var G__24128 = c__4537__auto__;
var G__24129 = cljs.core.count(c__4537__auto__);
var G__24130 = (0);
seq__24111 = G__24127;
chunk__24112 = G__24128;
count__24113 = G__24129;
i__24114 = G__24130;
continue;
} else {
var vec__24118 = cljs.core.first(seq__24111__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24118,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24118,(1),null);
var G__24119_24131 = v;
var G__24120_24132 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24119_24131,G__24120_24132) : f.call(null,G__24119_24131,G__24120_24132));

var G__24133 = cljs.core.next(seq__24111__$1);
var G__24134 = null;
var G__24135 = (0);
var G__24136 = (0);
seq__24111 = G__24133;
chunk__24112 = G__24134;
count__24113 = G__24135;
i__24114 = G__24136;
continue;
}
} else {
return null;
}
}
break;
}
});})(x24110,G__24105,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x24110;
})(), "objectBuilder": ((function (G__24105,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv(((function (G__24105,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__24107 = obj;
G__24107.push((function (){var G__24108 = k;
return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__24108) : kfn.call(null,G__24108));
})(),(function (){var G__24109 = v;
return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__24109) : vfn.call(null,G__24109));
})());

return G__24107;
});})(G__24105,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(G__24105,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$62)));
return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__24105,G__24106) : com.cognitect.transit.writer.call(null,G__24105,G__24106));
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
if(typeof cognitect.transit.t24151 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t24151 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta24152){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta24152 = meta24152;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t24151.prototype.tag = (function (o){
var self__ = this;
var _ = this;
var G__24154 = o;
return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__24154) : self__.tag_fn.call(null,G__24154));
});

cognitect.transit.t24151.prototype.rep = (function (o){
var self__ = this;
var _ = this;
var G__24155 = o;
return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__24155) : self__.rep_fn.call(null,G__24155));
});

cognitect.transit.t24151.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
var G__24156 = o;
return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__24156) : self__.str_rep_fn.call(null,G__24156));
} else {
return null;
}
});

cognitect.transit.t24151.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else {
return null;
}
});

cognitect.transit.t24151.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24153){
var self__ = this;
var _24153__$1 = this;
return self__.meta24152;
});

cognitect.transit.t24151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24153,meta24152__$1){
var self__ = this;
var _24153__$1 = this;
return (new cognitect.transit.t24151(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta24152__$1));
});

cognitect.transit.t24151.cljs$lang$type = true;

cognitect.transit.t24151.cljs$lang$ctorStr = "cognitect.transit/t24151";

cognitect.transit.t24151.cljs$lang$ctorPrWriter = (function (this__4337__auto__,writer__4338__auto__,opt__4339__auto__){
return cljs.core._write(writer__4338__auto__,"cognitect.transit/t24151");
});

cognitect.transit.__GT_t24151 = (function __GT_t24151(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta24152){
return (new cognitect.transit.t24151(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta24152));
});

}

return (new cognitect.transit.t24151(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,79,cljs.core.constant$keyword$9,259,cljs.core.constant$keyword$10,6,cljs.core.constant$keyword$11,254,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cognitect/transit.cljs"], null)));
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
var G__24159 = tag;
var G__24160 = rep;
return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__24159,G__24160) : com.cognitect.transit.types.taggedValue.call(null,G__24159,G__24160));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){
var G__24162 = x;
return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__24162) : com.cognitect.transit.types.isTaggedValue.call(null,G__24162));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){
var G__24164 = s;
return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__24164) : com.cognitect.transit.types.integer.call(null,G__24164));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){
var G__24166 = x;
return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__24166) : com.cognitect.transit.types.isInteger.call(null,G__24166));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){
var G__24168 = s;
return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__24168) : com.cognitect.transit.types.bigInteger.call(null,G__24168));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){
var G__24170 = x;
return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__24170) : com.cognitect.transit.types.isBigInteger.call(null,G__24170));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){
var G__24172 = s;
return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__24172) : com.cognitect.transit.types.bigDecimalValue.call(null,G__24172));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){
var G__24174 = x;
return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__24174) : com.cognitect.transit.types.isBigDecimal.call(null,G__24174));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){
var G__24176 = s;
return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__24176) : com.cognitect.transit.types.uri.call(null,G__24176));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){
var G__24178 = x;
return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__24178) : com.cognitect.transit.types.isURI.call(null,G__24178));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){
var G__24180 = s;
return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__24180) : com.cognitect.transit.types.uuid.call(null,G__24180));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){
var G__24182 = x;
return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__24182) : com.cognitect.transit.types.isUUID.call(null,G__24182));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){
var G__24184 = s;
return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__24184) : com.cognitect.transit.types.binary.call(null,G__24184));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){
var G__24186 = x;
return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__24186) : com.cognitect.transit.types.isBinary.call(null,G__24186));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){
var G__24188 = x;
return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__24188) : com.cognitect.transit.types.quoted.call(null,G__24188));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){
var G__24190 = x;
return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__24190) : com.cognitect.transit.types.isQuoted.call(null,G__24190));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){
var G__24192 = x;
return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__24192) : com.cognitect.transit.types.link.call(null,G__24192));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){
var G__24194 = x;
return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__24194) : com.cognitect.transit.types.isLink.call(null,G__24194));
});
