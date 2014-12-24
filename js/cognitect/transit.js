// Compiled by ClojureScript 0.0-2511
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
var G__22933 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__22933) : com.cognitect.transit.eq.hashCode.call(null,G__22933));
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__22934 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__22934) : com.cognitect.transit.eq.hashCode.call(null,G__22934));
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__22935 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__22935) : com.cognitect.transit.eq.hashCode.call(null,G__22935));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){
var seq__22940_22944 = cljs.core.seq(cljs.core.js_keys(b));
var chunk__22941_22945 = null;
var count__22942_22946 = (0);
var i__22943_22947 = (0);
while(true){
if((i__22943_22947 < count__22942_22946)){
var k_22948 = chunk__22941_22945.cljs$core$IIndexed$_nth$arity$2(null,i__22943_22947);
var v_22949 = (b[k_22948]);
(a[k_22948] = v_22949);

var G__22950 = seq__22940_22944;
var G__22951 = chunk__22941_22945;
var G__22952 = count__22942_22946;
var G__22953 = (i__22943_22947 + (1));
seq__22940_22944 = G__22950;
chunk__22941_22945 = G__22951;
count__22942_22946 = G__22952;
i__22943_22947 = G__22953;
continue;
} else {
var temp__4126__auto___22954 = cljs.core.seq(seq__22940_22944);
if(temp__4126__auto___22954){
var seq__22940_22955__$1 = temp__4126__auto___22954;
if(cljs.core.chunked_seq_QMARK_(seq__22940_22955__$1)){
var c__4417__auto___22956 = cljs.core.chunk_first(seq__22940_22955__$1);
var G__22957 = cljs.core.chunk_rest(seq__22940_22955__$1);
var G__22958 = c__4417__auto___22956;
var G__22959 = cljs.core.count(c__4417__auto___22956);
var G__22960 = (0);
seq__22940_22944 = G__22957;
chunk__22941_22945 = G__22958;
count__22942_22946 = G__22959;
i__22943_22947 = G__22960;
continue;
} else {
var k_22961 = cljs.core.first(seq__22940_22955__$1);
var v_22962 = (b[k_22961]);
(a[k_22961] = v_22962);

var G__22963 = cljs.core.next(seq__22940_22955__$1);
var G__22964 = null;
var G__22965 = (0);
var G__22966 = (0);
seq__22940_22944 = G__22963;
chunk__22941_22945 = G__22964;
count__22942_22946 = G__22965;
i__22943_22947 = G__22966;
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
var G__22967 = arr;
var G__22968 = true;
var G__22969 = true;
return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__22967,G__22968,G__22969) : cljs.core.PersistentArrayMap.fromArray.call(null,G__22967,G__22968,G__22969));
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cognitect.transit/MapBuilder");
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
var G__22970 = arr;
var G__22971 = true;
return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__22970,G__22971) : cljs.core.PersistentVector.fromArray.call(null,G__22970,G__22971));
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cognitect.transit/VectorBuilder");
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
var G__22976 = cljs.core.name(type);
var G__22977 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, ["$",((function (G__22976){
return (function (v){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__22976))
,":",((function (G__22976){
return (function (v){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__22976))
,"set",((function (G__22976){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__22976))
,"list",((function (G__22976){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__22976))
,"cmap",((function (G__22976){
return (function (v){
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__22978 = (i + (2));
var G__22979 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__22978;
ret = G__22979;
continue;
} else {
return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__22976))
], null),cljs.core.constant$keyword$55.cljs$core$IFn$_invoke$arity$1(opts)], 0)))},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$55)));
return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__22976,G__22977) : com.cognitect.transit.reader.call(null,G__22976,G__22977));
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cognitect.transit/SymbolHandler");
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
var seq__22980_22986 = cljs.core.seq(v);
var chunk__22981_22987 = null;
var count__22982_22988 = (0);
var i__22983_22989 = (0);
while(true){
if((i__22983_22989 < count__22982_22988)){
var x_22990 = chunk__22981_22987.cljs$core$IIndexed$_nth$arity$2(null,i__22983_22989);
ret.push(x_22990);

var G__22991 = seq__22980_22986;
var G__22992 = chunk__22981_22987;
var G__22993 = count__22982_22988;
var G__22994 = (i__22983_22989 + (1));
seq__22980_22986 = G__22991;
chunk__22981_22987 = G__22992;
count__22982_22988 = G__22993;
i__22983_22989 = G__22994;
continue;
} else {
var temp__4126__auto___22995 = cljs.core.seq(seq__22980_22986);
if(temp__4126__auto___22995){
var seq__22980_22996__$1 = temp__4126__auto___22995;
if(cljs.core.chunked_seq_QMARK_(seq__22980_22996__$1)){
var c__4417__auto___22997 = cljs.core.chunk_first(seq__22980_22996__$1);
var G__22998 = cljs.core.chunk_rest(seq__22980_22996__$1);
var G__22999 = c__4417__auto___22997;
var G__23000 = cljs.core.count(c__4417__auto___22997);
var G__23001 = (0);
seq__22980_22986 = G__22998;
chunk__22981_22987 = G__22999;
count__22982_22988 = G__23000;
i__22983_22989 = G__23001;
continue;
} else {
var x_23002 = cljs.core.first(seq__22980_22996__$1);
ret.push(x_23002);

var G__23003 = cljs.core.next(seq__22980_22996__$1);
var G__23004 = null;
var G__23005 = (0);
var G__23006 = (0);
seq__22980_22986 = G__23003;
chunk__22981_22987 = G__23004;
count__22982_22988 = G__23005;
i__22983_22989 = G__23006;
continue;
}
} else {
}
}
break;
}

var G__22984 = "array";
var G__22985 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__22984,G__22985) : com.cognitect.transit.tagged.call(null,G__22984,G__22985));
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cognitect.transit/MapHandler");
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
var seq__23007_23013 = cljs.core.seq(v);
var chunk__23008_23014 = null;
var count__23009_23015 = (0);
var i__23010_23016 = (0);
while(true){
if((i__23010_23016 < count__23009_23015)){
var x_23017 = chunk__23008_23014.cljs$core$IIndexed$_nth$arity$2(null,i__23010_23016);
ret.push(x_23017);

var G__23018 = seq__23007_23013;
var G__23019 = chunk__23008_23014;
var G__23020 = count__23009_23015;
var G__23021 = (i__23010_23016 + (1));
seq__23007_23013 = G__23018;
chunk__23008_23014 = G__23019;
count__23009_23015 = G__23020;
i__23010_23016 = G__23021;
continue;
} else {
var temp__4126__auto___23022 = cljs.core.seq(seq__23007_23013);
if(temp__4126__auto___23022){
var seq__23007_23023__$1 = temp__4126__auto___23022;
if(cljs.core.chunked_seq_QMARK_(seq__23007_23023__$1)){
var c__4417__auto___23024 = cljs.core.chunk_first(seq__23007_23023__$1);
var G__23025 = cljs.core.chunk_rest(seq__23007_23023__$1);
var G__23026 = c__4417__auto___23024;
var G__23027 = cljs.core.count(c__4417__auto___23024);
var G__23028 = (0);
seq__23007_23013 = G__23025;
chunk__23008_23014 = G__23026;
count__23009_23015 = G__23027;
i__23010_23016 = G__23028;
continue;
} else {
var x_23029 = cljs.core.first(seq__23007_23023__$1);
ret.push(x_23029);

var G__23030 = cljs.core.next(seq__23007_23023__$1);
var G__23031 = null;
var G__23032 = (0);
var G__23033 = (0);
seq__23007_23013 = G__23030;
chunk__23008_23014 = G__23031;
count__23009_23015 = G__23032;
i__23010_23016 = G__23033;
continue;
}
} else {
}
}
break;
}

var G__23011 = "array";
var G__23012 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__23011,G__23012) : com.cognitect.transit.tagged.call(null,G__23011,G__23012));
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cognitect.transit/SetHandler");
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
var seq__23034_23038 = cljs.core.seq(v);
var chunk__23035_23039 = null;
var count__23036_23040 = (0);
var i__23037_23041 = (0);
while(true){
if((i__23037_23041 < count__23036_23040)){
var x_23042 = chunk__23035_23039.cljs$core$IIndexed$_nth$arity$2(null,i__23037_23041);
ret.push(x_23042);

var G__23043 = seq__23034_23038;
var G__23044 = chunk__23035_23039;
var G__23045 = count__23036_23040;
var G__23046 = (i__23037_23041 + (1));
seq__23034_23038 = G__23043;
chunk__23035_23039 = G__23044;
count__23036_23040 = G__23045;
i__23037_23041 = G__23046;
continue;
} else {
var temp__4126__auto___23047 = cljs.core.seq(seq__23034_23038);
if(temp__4126__auto___23047){
var seq__23034_23048__$1 = temp__4126__auto___23047;
if(cljs.core.chunked_seq_QMARK_(seq__23034_23048__$1)){
var c__4417__auto___23049 = cljs.core.chunk_first(seq__23034_23048__$1);
var G__23050 = cljs.core.chunk_rest(seq__23034_23048__$1);
var G__23051 = c__4417__auto___23049;
var G__23052 = cljs.core.count(c__4417__auto___23049);
var G__23053 = (0);
seq__23034_23038 = G__23050;
chunk__23035_23039 = G__23051;
count__23036_23040 = G__23052;
i__23037_23041 = G__23053;
continue;
} else {
var x_23054 = cljs.core.first(seq__23034_23048__$1);
ret.push(x_23054);

var G__23055 = cljs.core.next(seq__23034_23048__$1);
var G__23056 = null;
var G__23057 = (0);
var G__23058 = (0);
seq__23034_23038 = G__23055;
chunk__23035_23039 = G__23056;
count__23036_23040 = G__23057;
i__23037_23041 = G__23058;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cognitect.transit/UUIDHandler");
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
var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),cljs.core.constant$keyword$55.cljs$core$IFn$_invoke$arity$1(opts)], 0));
var G__23077 = cljs.core.name(type);
var G__23078 = cognitect.transit.opts_merge({"unpack": ((function (G__23077,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(G__23077,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x23082 = cljs.core.clone(handlers);
x23082.forEach = ((function (x23082,G__23077,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__23083 = cljs.core.seq(coll);
var chunk__23084 = null;
var count__23085 = (0);
var i__23086 = (0);
while(true){
if((i__23086 < count__23085)){
var vec__23087 = chunk__23084.cljs$core$IIndexed$_nth$arity$2(null,i__23086);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23087,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23087,(1),null);
var G__23088_23093 = v;
var G__23089_23094 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23088_23093,G__23089_23094) : f.call(null,G__23088_23093,G__23089_23094));

var G__23095 = seq__23083;
var G__23096 = chunk__23084;
var G__23097 = count__23085;
var G__23098 = (i__23086 + (1));
seq__23083 = G__23095;
chunk__23084 = G__23096;
count__23085 = G__23097;
i__23086 = G__23098;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__23083);
if(temp__4126__auto__){
var seq__23083__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23083__$1)){
var c__4417__auto__ = cljs.core.chunk_first(seq__23083__$1);
var G__23099 = cljs.core.chunk_rest(seq__23083__$1);
var G__23100 = c__4417__auto__;
var G__23101 = cljs.core.count(c__4417__auto__);
var G__23102 = (0);
seq__23083 = G__23099;
chunk__23084 = G__23100;
count__23085 = G__23101;
i__23086 = G__23102;
continue;
} else {
var vec__23090 = cljs.core.first(seq__23083__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23090,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23090,(1),null);
var G__23091_23103 = v;
var G__23092_23104 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23091_23103,G__23092_23104) : f.call(null,G__23091_23103,G__23092_23104));

var G__23105 = cljs.core.next(seq__23083__$1);
var G__23106 = null;
var G__23107 = (0);
var G__23108 = (0);
seq__23083 = G__23105;
chunk__23084 = G__23106;
count__23085 = G__23107;
i__23086 = G__23108;
continue;
}
} else {
return null;
}
}
break;
}
});})(x23082,G__23077,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x23082;
})(), "objectBuilder": ((function (G__23077,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv(((function (G__23077,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__23079 = obj;
G__23079.push((function (){var G__23080 = k;
return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__23080) : kfn.call(null,G__23080));
})(),(function (){var G__23081 = v;
return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__23081) : vfn.call(null,G__23081));
})());

return G__23079;
});})(G__23077,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(G__23077,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$55)));
return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__23077,G__23078) : com.cognitect.transit.writer.call(null,G__23077,G__23078));
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
if(typeof cognitect.transit.t23123 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t23123 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta23124){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta23124 = meta23124;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t23123.prototype.tag = (function (o){
var self__ = this;
var _ = this;
var G__23126 = o;
return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__23126) : self__.tag_fn.call(null,G__23126));
});

cognitect.transit.t23123.prototype.rep = (function (o){
var self__ = this;
var _ = this;
var G__23127 = o;
return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__23127) : self__.rep_fn.call(null,G__23127));
});

cognitect.transit.t23123.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
var G__23128 = o;
return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__23128) : self__.str_rep_fn.call(null,G__23128));
} else {
return null;
}
});

cognitect.transit.t23123.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else {
return null;
}
});

cognitect.transit.t23123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23125){
var self__ = this;
var _23125__$1 = this;
return self__.meta23124;
});

cognitect.transit.t23123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23125,meta23124__$1){
var self__ = this;
var _23125__$1 = this;
return (new cognitect.transit.t23123(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta23124__$1));
});

cognitect.transit.t23123.cljs$lang$type = true;

cognitect.transit.t23123.cljs$lang$ctorStr = "cognitect.transit/t23123";

cognitect.transit.t23123.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cognitect.transit/t23123");
});

cognitect.transit.__GT_t23123 = (function __GT_t23123(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta23124){
return (new cognitect.transit.t23123(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta23124));
});

}

return (new cognitect.transit.t23123(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,79,cljs.core.constant$keyword$9,259,cljs.core.constant$keyword$10,6,cljs.core.constant$keyword$11,254,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cognitect/transit.cljs"], null)));
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
var G__23131 = tag;
var G__23132 = rep;
return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__23131,G__23132) : com.cognitect.transit.types.taggedValue.call(null,G__23131,G__23132));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){
var G__23134 = x;
return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__23134) : com.cognitect.transit.types.isTaggedValue.call(null,G__23134));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){
var G__23136 = s;
return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__23136) : com.cognitect.transit.types.integer.call(null,G__23136));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){
var G__23138 = x;
return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__23138) : com.cognitect.transit.types.isInteger.call(null,G__23138));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){
var G__23140 = s;
return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__23140) : com.cognitect.transit.types.bigInteger.call(null,G__23140));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){
var G__23142 = x;
return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__23142) : com.cognitect.transit.types.isBigInteger.call(null,G__23142));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){
var G__23144 = s;
return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__23144) : com.cognitect.transit.types.bigDecimalValue.call(null,G__23144));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){
var G__23146 = x;
return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__23146) : com.cognitect.transit.types.isBigDecimal.call(null,G__23146));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){
var G__23148 = s;
return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__23148) : com.cognitect.transit.types.uri.call(null,G__23148));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){
var G__23150 = x;
return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__23150) : com.cognitect.transit.types.isURI.call(null,G__23150));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){
var G__23152 = s;
return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__23152) : com.cognitect.transit.types.uuid.call(null,G__23152));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){
var G__23154 = x;
return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__23154) : com.cognitect.transit.types.isUUID.call(null,G__23154));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){
var G__23156 = s;
return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__23156) : com.cognitect.transit.types.binary.call(null,G__23156));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){
var G__23158 = x;
return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__23158) : com.cognitect.transit.types.isBinary.call(null,G__23158));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){
var G__23160 = x;
return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__23160) : com.cognitect.transit.types.quoted.call(null,G__23160));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){
var G__23162 = x;
return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__23162) : com.cognitect.transit.types.isQuoted.call(null,G__23162));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){
var G__23164 = x;
return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__23164) : com.cognitect.transit.types.link.call(null,G__23164));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){
var G__23166 = x;
return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__23166) : com.cognitect.transit.types.isLink.call(null,G__23166));
});
