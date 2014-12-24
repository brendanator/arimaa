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
var G__22931 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__22931) : com.cognitect.transit.eq.hashCode.call(null,G__22931));
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__22932 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__22932) : com.cognitect.transit.eq.hashCode.call(null,G__22932));
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__22933 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__22933) : com.cognitect.transit.eq.hashCode.call(null,G__22933));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){
var seq__22938_22942 = cljs.core.seq(cljs.core.js_keys(b));
var chunk__22939_22943 = null;
var count__22940_22944 = (0);
var i__22941_22945 = (0);
while(true){
if((i__22941_22945 < count__22940_22944)){
var k_22946 = chunk__22939_22943.cljs$core$IIndexed$_nth$arity$2(null,i__22941_22945);
var v_22947 = (b[k_22946]);
(a[k_22946] = v_22947);

var G__22948 = seq__22938_22942;
var G__22949 = chunk__22939_22943;
var G__22950 = count__22940_22944;
var G__22951 = (i__22941_22945 + (1));
seq__22938_22942 = G__22948;
chunk__22939_22943 = G__22949;
count__22940_22944 = G__22950;
i__22941_22945 = G__22951;
continue;
} else {
var temp__4126__auto___22952 = cljs.core.seq(seq__22938_22942);
if(temp__4126__auto___22952){
var seq__22938_22953__$1 = temp__4126__auto___22952;
if(cljs.core.chunked_seq_QMARK_(seq__22938_22953__$1)){
var c__4417__auto___22954 = cljs.core.chunk_first(seq__22938_22953__$1);
var G__22955 = cljs.core.chunk_rest(seq__22938_22953__$1);
var G__22956 = c__4417__auto___22954;
var G__22957 = cljs.core.count(c__4417__auto___22954);
var G__22958 = (0);
seq__22938_22942 = G__22955;
chunk__22939_22943 = G__22956;
count__22940_22944 = G__22957;
i__22941_22945 = G__22958;
continue;
} else {
var k_22959 = cljs.core.first(seq__22938_22953__$1);
var v_22960 = (b[k_22959]);
(a[k_22959] = v_22960);

var G__22961 = cljs.core.next(seq__22938_22953__$1);
var G__22962 = null;
var G__22963 = (0);
var G__22964 = (0);
seq__22938_22942 = G__22961;
chunk__22939_22943 = G__22962;
count__22940_22944 = G__22963;
i__22941_22945 = G__22964;
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
var G__22965 = arr;
var G__22966 = true;
var G__22967 = true;
return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__22965,G__22966,G__22967) : cljs.core.PersistentArrayMap.fromArray.call(null,G__22965,G__22966,G__22967));
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
var G__22968 = arr;
var G__22969 = true;
return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__22968,G__22969) : cljs.core.PersistentVector.fromArray.call(null,G__22968,G__22969));
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
var G__22974 = cljs.core.name(type);
var G__22975 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, ["$",((function (G__22974){
return (function (v){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__22974))
,":",((function (G__22974){
return (function (v){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__22974))
,"set",((function (G__22974){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__22974))
,"list",((function (G__22974){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__22974))
,"cmap",((function (G__22974){
return (function (v){
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__22976 = (i + (2));
var G__22977 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__22976;
ret = G__22977;
continue;
} else {
return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__22974))
], null),cljs.core.constant$keyword$58.cljs$core$IFn$_invoke$arity$1(opts)], 0)))},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$58)));
return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__22974,G__22975) : com.cognitect.transit.reader.call(null,G__22974,G__22975));
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
var seq__22978_22984 = cljs.core.seq(v);
var chunk__22979_22985 = null;
var count__22980_22986 = (0);
var i__22981_22987 = (0);
while(true){
if((i__22981_22987 < count__22980_22986)){
var x_22988 = chunk__22979_22985.cljs$core$IIndexed$_nth$arity$2(null,i__22981_22987);
ret.push(x_22988);

var G__22989 = seq__22978_22984;
var G__22990 = chunk__22979_22985;
var G__22991 = count__22980_22986;
var G__22992 = (i__22981_22987 + (1));
seq__22978_22984 = G__22989;
chunk__22979_22985 = G__22990;
count__22980_22986 = G__22991;
i__22981_22987 = G__22992;
continue;
} else {
var temp__4126__auto___22993 = cljs.core.seq(seq__22978_22984);
if(temp__4126__auto___22993){
var seq__22978_22994__$1 = temp__4126__auto___22993;
if(cljs.core.chunked_seq_QMARK_(seq__22978_22994__$1)){
var c__4417__auto___22995 = cljs.core.chunk_first(seq__22978_22994__$1);
var G__22996 = cljs.core.chunk_rest(seq__22978_22994__$1);
var G__22997 = c__4417__auto___22995;
var G__22998 = cljs.core.count(c__4417__auto___22995);
var G__22999 = (0);
seq__22978_22984 = G__22996;
chunk__22979_22985 = G__22997;
count__22980_22986 = G__22998;
i__22981_22987 = G__22999;
continue;
} else {
var x_23000 = cljs.core.first(seq__22978_22994__$1);
ret.push(x_23000);

var G__23001 = cljs.core.next(seq__22978_22994__$1);
var G__23002 = null;
var G__23003 = (0);
var G__23004 = (0);
seq__22978_22984 = G__23001;
chunk__22979_22985 = G__23002;
count__22980_22986 = G__23003;
i__22981_22987 = G__23004;
continue;
}
} else {
}
}
break;
}

var G__22982 = "array";
var G__22983 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__22982,G__22983) : com.cognitect.transit.tagged.call(null,G__22982,G__22983));
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
var seq__23005_23011 = cljs.core.seq(v);
var chunk__23006_23012 = null;
var count__23007_23013 = (0);
var i__23008_23014 = (0);
while(true){
if((i__23008_23014 < count__23007_23013)){
var x_23015 = chunk__23006_23012.cljs$core$IIndexed$_nth$arity$2(null,i__23008_23014);
ret.push(x_23015);

var G__23016 = seq__23005_23011;
var G__23017 = chunk__23006_23012;
var G__23018 = count__23007_23013;
var G__23019 = (i__23008_23014 + (1));
seq__23005_23011 = G__23016;
chunk__23006_23012 = G__23017;
count__23007_23013 = G__23018;
i__23008_23014 = G__23019;
continue;
} else {
var temp__4126__auto___23020 = cljs.core.seq(seq__23005_23011);
if(temp__4126__auto___23020){
var seq__23005_23021__$1 = temp__4126__auto___23020;
if(cljs.core.chunked_seq_QMARK_(seq__23005_23021__$1)){
var c__4417__auto___23022 = cljs.core.chunk_first(seq__23005_23021__$1);
var G__23023 = cljs.core.chunk_rest(seq__23005_23021__$1);
var G__23024 = c__4417__auto___23022;
var G__23025 = cljs.core.count(c__4417__auto___23022);
var G__23026 = (0);
seq__23005_23011 = G__23023;
chunk__23006_23012 = G__23024;
count__23007_23013 = G__23025;
i__23008_23014 = G__23026;
continue;
} else {
var x_23027 = cljs.core.first(seq__23005_23021__$1);
ret.push(x_23027);

var G__23028 = cljs.core.next(seq__23005_23021__$1);
var G__23029 = null;
var G__23030 = (0);
var G__23031 = (0);
seq__23005_23011 = G__23028;
chunk__23006_23012 = G__23029;
count__23007_23013 = G__23030;
i__23008_23014 = G__23031;
continue;
}
} else {
}
}
break;
}

var G__23009 = "array";
var G__23010 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__23009,G__23010) : com.cognitect.transit.tagged.call(null,G__23009,G__23010));
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
var seq__23032_23036 = cljs.core.seq(v);
var chunk__23033_23037 = null;
var count__23034_23038 = (0);
var i__23035_23039 = (0);
while(true){
if((i__23035_23039 < count__23034_23038)){
var x_23040 = chunk__23033_23037.cljs$core$IIndexed$_nth$arity$2(null,i__23035_23039);
ret.push(x_23040);

var G__23041 = seq__23032_23036;
var G__23042 = chunk__23033_23037;
var G__23043 = count__23034_23038;
var G__23044 = (i__23035_23039 + (1));
seq__23032_23036 = G__23041;
chunk__23033_23037 = G__23042;
count__23034_23038 = G__23043;
i__23035_23039 = G__23044;
continue;
} else {
var temp__4126__auto___23045 = cljs.core.seq(seq__23032_23036);
if(temp__4126__auto___23045){
var seq__23032_23046__$1 = temp__4126__auto___23045;
if(cljs.core.chunked_seq_QMARK_(seq__23032_23046__$1)){
var c__4417__auto___23047 = cljs.core.chunk_first(seq__23032_23046__$1);
var G__23048 = cljs.core.chunk_rest(seq__23032_23046__$1);
var G__23049 = c__4417__auto___23047;
var G__23050 = cljs.core.count(c__4417__auto___23047);
var G__23051 = (0);
seq__23032_23036 = G__23048;
chunk__23033_23037 = G__23049;
count__23034_23038 = G__23050;
i__23035_23039 = G__23051;
continue;
} else {
var x_23052 = cljs.core.first(seq__23032_23046__$1);
ret.push(x_23052);

var G__23053 = cljs.core.next(seq__23032_23046__$1);
var G__23054 = null;
var G__23055 = (0);
var G__23056 = (0);
seq__23032_23036 = G__23053;
chunk__23033_23037 = G__23054;
count__23034_23038 = G__23055;
i__23035_23039 = G__23056;
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
var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),cljs.core.constant$keyword$58.cljs$core$IFn$_invoke$arity$1(opts)], 0));
var G__23075 = cljs.core.name(type);
var G__23076 = cognitect.transit.opts_merge({"unpack": ((function (G__23075,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(G__23075,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x23080 = cljs.core.clone(handlers);
x23080.forEach = ((function (x23080,G__23075,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__23081 = cljs.core.seq(coll);
var chunk__23082 = null;
var count__23083 = (0);
var i__23084 = (0);
while(true){
if((i__23084 < count__23083)){
var vec__23085 = chunk__23082.cljs$core$IIndexed$_nth$arity$2(null,i__23084);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23085,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23085,(1),null);
var G__23086_23091 = v;
var G__23087_23092 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23086_23091,G__23087_23092) : f.call(null,G__23086_23091,G__23087_23092));

var G__23093 = seq__23081;
var G__23094 = chunk__23082;
var G__23095 = count__23083;
var G__23096 = (i__23084 + (1));
seq__23081 = G__23093;
chunk__23082 = G__23094;
count__23083 = G__23095;
i__23084 = G__23096;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__23081);
if(temp__4126__auto__){
var seq__23081__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23081__$1)){
var c__4417__auto__ = cljs.core.chunk_first(seq__23081__$1);
var G__23097 = cljs.core.chunk_rest(seq__23081__$1);
var G__23098 = c__4417__auto__;
var G__23099 = cljs.core.count(c__4417__auto__);
var G__23100 = (0);
seq__23081 = G__23097;
chunk__23082 = G__23098;
count__23083 = G__23099;
i__23084 = G__23100;
continue;
} else {
var vec__23088 = cljs.core.first(seq__23081__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23088,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23088,(1),null);
var G__23089_23101 = v;
var G__23090_23102 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23089_23101,G__23090_23102) : f.call(null,G__23089_23101,G__23090_23102));

var G__23103 = cljs.core.next(seq__23081__$1);
var G__23104 = null;
var G__23105 = (0);
var G__23106 = (0);
seq__23081 = G__23103;
chunk__23082 = G__23104;
count__23083 = G__23105;
i__23084 = G__23106;
continue;
}
} else {
return null;
}
}
break;
}
});})(x23080,G__23075,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x23080;
})(), "objectBuilder": ((function (G__23075,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv(((function (G__23075,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__23077 = obj;
G__23077.push((function (){var G__23078 = k;
return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__23078) : kfn.call(null,G__23078));
})(),(function (){var G__23079 = v;
return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__23079) : vfn.call(null,G__23079));
})());

return G__23077;
});})(G__23075,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(G__23075,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$58)));
return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__23075,G__23076) : com.cognitect.transit.writer.call(null,G__23075,G__23076));
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
if(typeof cognitect.transit.t23121 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t23121 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta23122){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta23122 = meta23122;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t23121.prototype.tag = (function (o){
var self__ = this;
var _ = this;
var G__23124 = o;
return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__23124) : self__.tag_fn.call(null,G__23124));
});

cognitect.transit.t23121.prototype.rep = (function (o){
var self__ = this;
var _ = this;
var G__23125 = o;
return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__23125) : self__.rep_fn.call(null,G__23125));
});

cognitect.transit.t23121.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
var G__23126 = o;
return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__23126) : self__.str_rep_fn.call(null,G__23126));
} else {
return null;
}
});

cognitect.transit.t23121.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else {
return null;
}
});

cognitect.transit.t23121.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23123){
var self__ = this;
var _23123__$1 = this;
return self__.meta23122;
});

cognitect.transit.t23121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23123,meta23122__$1){
var self__ = this;
var _23123__$1 = this;
return (new cognitect.transit.t23121(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta23122__$1));
});

cognitect.transit.t23121.cljs$lang$type = true;

cognitect.transit.t23121.cljs$lang$ctorStr = "cognitect.transit/t23121";

cognitect.transit.t23121.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cognitect.transit/t23121");
});

cognitect.transit.__GT_t23121 = (function __GT_t23121(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta23122){
return (new cognitect.transit.t23121(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta23122));
});

}

return (new cognitect.transit.t23121(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,79,cljs.core.constant$keyword$9,259,cljs.core.constant$keyword$10,6,cljs.core.constant$keyword$11,254,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cognitect/transit.cljs"], null)));
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
var G__23129 = tag;
var G__23130 = rep;
return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__23129,G__23130) : com.cognitect.transit.types.taggedValue.call(null,G__23129,G__23130));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){
var G__23132 = x;
return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__23132) : com.cognitect.transit.types.isTaggedValue.call(null,G__23132));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){
var G__23134 = s;
return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__23134) : com.cognitect.transit.types.integer.call(null,G__23134));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){
var G__23136 = x;
return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__23136) : com.cognitect.transit.types.isInteger.call(null,G__23136));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){
var G__23138 = s;
return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__23138) : com.cognitect.transit.types.bigInteger.call(null,G__23138));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){
var G__23140 = x;
return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__23140) : com.cognitect.transit.types.isBigInteger.call(null,G__23140));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){
var G__23142 = s;
return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__23142) : com.cognitect.transit.types.bigDecimalValue.call(null,G__23142));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){
var G__23144 = x;
return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__23144) : com.cognitect.transit.types.isBigDecimal.call(null,G__23144));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){
var G__23146 = s;
return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__23146) : com.cognitect.transit.types.uri.call(null,G__23146));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){
var G__23148 = x;
return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__23148) : com.cognitect.transit.types.isURI.call(null,G__23148));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){
var G__23150 = s;
return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__23150) : com.cognitect.transit.types.uuid.call(null,G__23150));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){
var G__23152 = x;
return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__23152) : com.cognitect.transit.types.isUUID.call(null,G__23152));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){
var G__23154 = s;
return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__23154) : com.cognitect.transit.types.binary.call(null,G__23154));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){
var G__23156 = x;
return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__23156) : com.cognitect.transit.types.isBinary.call(null,G__23156));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){
var G__23158 = x;
return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__23158) : com.cognitect.transit.types.quoted.call(null,G__23158));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){
var G__23160 = x;
return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__23160) : com.cognitect.transit.types.isQuoted.call(null,G__23160));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){
var G__23162 = x;
return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__23162) : com.cognitect.transit.types.link.call(null,G__23162));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){
var G__23164 = x;
return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__23164) : com.cognitect.transit.types.isLink.call(null,G__23164));
});
