// Compiled by ClojureScript 0.0-2657 {}
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
var G__23191 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__23191) : com.cognitect.transit.eq.hashCode.call(null,G__23191));
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__23192 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__23192) : com.cognitect.transit.eq.hashCode.call(null,G__23192));
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__23193 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__23193) : com.cognitect.transit.eq.hashCode.call(null,G__23193));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){
var seq__23198_23202 = cljs.core.seq(cljs.core.js_keys(b));
var chunk__23199_23203 = null;
var count__23200_23204 = (0);
var i__23201_23205 = (0);
while(true){
if((i__23201_23205 < count__23200_23204)){
var k_23206 = chunk__23199_23203.cljs$core$IIndexed$_nth$arity$2(null,i__23201_23205);
var v_23207 = (b[k_23206]);
(a[k_23206] = v_23207);

var G__23208 = seq__23198_23202;
var G__23209 = chunk__23199_23203;
var G__23210 = count__23200_23204;
var G__23211 = (i__23201_23205 + (1));
seq__23198_23202 = G__23208;
chunk__23199_23203 = G__23209;
count__23200_23204 = G__23210;
i__23201_23205 = G__23211;
continue;
} else {
var temp__4126__auto___23212 = cljs.core.seq(seq__23198_23202);
if(temp__4126__auto___23212){
var seq__23198_23213__$1 = temp__4126__auto___23212;
if(cljs.core.chunked_seq_QMARK_(seq__23198_23213__$1)){
var c__4518__auto___23214 = cljs.core.chunk_first(seq__23198_23213__$1);
var G__23215 = cljs.core.chunk_rest(seq__23198_23213__$1);
var G__23216 = c__4518__auto___23214;
var G__23217 = cljs.core.count(c__4518__auto___23214);
var G__23218 = (0);
seq__23198_23202 = G__23215;
chunk__23199_23203 = G__23216;
count__23200_23204 = G__23217;
i__23201_23205 = G__23218;
continue;
} else {
var k_23219 = cljs.core.first(seq__23198_23213__$1);
var v_23220 = (b[k_23219]);
(a[k_23219] = v_23220);

var G__23221 = cljs.core.next(seq__23198_23213__$1);
var G__23222 = null;
var G__23223 = (0);
var G__23224 = (0);
seq__23198_23202 = G__23221;
chunk__23199_23203 = G__23222;
count__23200_23204 = G__23223;
i__23201_23205 = G__23224;
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
var G__23225 = arr;
var G__23226 = true;
var G__23227 = true;
return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__23225,G__23226,G__23227) : cljs.core.PersistentArrayMap.fromArray.call(null,G__23225,G__23226,G__23227));
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cognitect.transit/MapBuilder");
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
var G__23228 = arr;
var G__23229 = true;
return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__23228,G__23229) : cljs.core.PersistentVector.fromArray.call(null,G__23228,G__23229));
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cognitect.transit/VectorBuilder");
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
var G__23234 = cljs.core.name(type);
var G__23235 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, ["$",((function (G__23234){
return (function (v){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__23234))
,":",((function (G__23234){
return (function (v){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__23234))
,"set",((function (G__23234){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__23234))
,"list",((function (G__23234){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__23234))
,"cmap",((function (G__23234){
return (function (v){
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__23236 = (i + (2));
var G__23237 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__23236;
ret = G__23237;
continue;
} else {
return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__23234))
], null),cljs.core.constant$keyword$62.cljs$core$IFn$_invoke$arity$1(opts)], 0)))},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$62)));
return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__23234,G__23235) : com.cognitect.transit.reader.call(null,G__23234,G__23235));
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cognitect.transit/SymbolHandler");
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
var seq__23238_23244 = cljs.core.seq(v);
var chunk__23239_23245 = null;
var count__23240_23246 = (0);
var i__23241_23247 = (0);
while(true){
if((i__23241_23247 < count__23240_23246)){
var x_23248 = chunk__23239_23245.cljs$core$IIndexed$_nth$arity$2(null,i__23241_23247);
ret.push(x_23248);

var G__23249 = seq__23238_23244;
var G__23250 = chunk__23239_23245;
var G__23251 = count__23240_23246;
var G__23252 = (i__23241_23247 + (1));
seq__23238_23244 = G__23249;
chunk__23239_23245 = G__23250;
count__23240_23246 = G__23251;
i__23241_23247 = G__23252;
continue;
} else {
var temp__4126__auto___23253 = cljs.core.seq(seq__23238_23244);
if(temp__4126__auto___23253){
var seq__23238_23254__$1 = temp__4126__auto___23253;
if(cljs.core.chunked_seq_QMARK_(seq__23238_23254__$1)){
var c__4518__auto___23255 = cljs.core.chunk_first(seq__23238_23254__$1);
var G__23256 = cljs.core.chunk_rest(seq__23238_23254__$1);
var G__23257 = c__4518__auto___23255;
var G__23258 = cljs.core.count(c__4518__auto___23255);
var G__23259 = (0);
seq__23238_23244 = G__23256;
chunk__23239_23245 = G__23257;
count__23240_23246 = G__23258;
i__23241_23247 = G__23259;
continue;
} else {
var x_23260 = cljs.core.first(seq__23238_23254__$1);
ret.push(x_23260);

var G__23261 = cljs.core.next(seq__23238_23254__$1);
var G__23262 = null;
var G__23263 = (0);
var G__23264 = (0);
seq__23238_23244 = G__23261;
chunk__23239_23245 = G__23262;
count__23240_23246 = G__23263;
i__23241_23247 = G__23264;
continue;
}
} else {
}
}
break;
}

var G__23242 = "array";
var G__23243 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__23242,G__23243) : com.cognitect.transit.tagged.call(null,G__23242,G__23243));
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cognitect.transit/MapHandler");
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
var seq__23265_23271 = cljs.core.seq(v);
var chunk__23266_23272 = null;
var count__23267_23273 = (0);
var i__23268_23274 = (0);
while(true){
if((i__23268_23274 < count__23267_23273)){
var x_23275 = chunk__23266_23272.cljs$core$IIndexed$_nth$arity$2(null,i__23268_23274);
ret.push(x_23275);

var G__23276 = seq__23265_23271;
var G__23277 = chunk__23266_23272;
var G__23278 = count__23267_23273;
var G__23279 = (i__23268_23274 + (1));
seq__23265_23271 = G__23276;
chunk__23266_23272 = G__23277;
count__23267_23273 = G__23278;
i__23268_23274 = G__23279;
continue;
} else {
var temp__4126__auto___23280 = cljs.core.seq(seq__23265_23271);
if(temp__4126__auto___23280){
var seq__23265_23281__$1 = temp__4126__auto___23280;
if(cljs.core.chunked_seq_QMARK_(seq__23265_23281__$1)){
var c__4518__auto___23282 = cljs.core.chunk_first(seq__23265_23281__$1);
var G__23283 = cljs.core.chunk_rest(seq__23265_23281__$1);
var G__23284 = c__4518__auto___23282;
var G__23285 = cljs.core.count(c__4518__auto___23282);
var G__23286 = (0);
seq__23265_23271 = G__23283;
chunk__23266_23272 = G__23284;
count__23267_23273 = G__23285;
i__23268_23274 = G__23286;
continue;
} else {
var x_23287 = cljs.core.first(seq__23265_23281__$1);
ret.push(x_23287);

var G__23288 = cljs.core.next(seq__23265_23281__$1);
var G__23289 = null;
var G__23290 = (0);
var G__23291 = (0);
seq__23265_23271 = G__23288;
chunk__23266_23272 = G__23289;
count__23267_23273 = G__23290;
i__23268_23274 = G__23291;
continue;
}
} else {
}
}
break;
}

var G__23269 = "array";
var G__23270 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__23269,G__23270) : com.cognitect.transit.tagged.call(null,G__23269,G__23270));
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cognitect.transit/SetHandler");
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
var seq__23292_23296 = cljs.core.seq(v);
var chunk__23293_23297 = null;
var count__23294_23298 = (0);
var i__23295_23299 = (0);
while(true){
if((i__23295_23299 < count__23294_23298)){
var x_23300 = chunk__23293_23297.cljs$core$IIndexed$_nth$arity$2(null,i__23295_23299);
ret.push(x_23300);

var G__23301 = seq__23292_23296;
var G__23302 = chunk__23293_23297;
var G__23303 = count__23294_23298;
var G__23304 = (i__23295_23299 + (1));
seq__23292_23296 = G__23301;
chunk__23293_23297 = G__23302;
count__23294_23298 = G__23303;
i__23295_23299 = G__23304;
continue;
} else {
var temp__4126__auto___23305 = cljs.core.seq(seq__23292_23296);
if(temp__4126__auto___23305){
var seq__23292_23306__$1 = temp__4126__auto___23305;
if(cljs.core.chunked_seq_QMARK_(seq__23292_23306__$1)){
var c__4518__auto___23307 = cljs.core.chunk_first(seq__23292_23306__$1);
var G__23308 = cljs.core.chunk_rest(seq__23292_23306__$1);
var G__23309 = c__4518__auto___23307;
var G__23310 = cljs.core.count(c__4518__auto___23307);
var G__23311 = (0);
seq__23292_23296 = G__23308;
chunk__23293_23297 = G__23309;
count__23294_23298 = G__23310;
i__23295_23299 = G__23311;
continue;
} else {
var x_23312 = cljs.core.first(seq__23292_23306__$1);
ret.push(x_23312);

var G__23313 = cljs.core.next(seq__23292_23306__$1);
var G__23314 = null;
var G__23315 = (0);
var G__23316 = (0);
seq__23292_23296 = G__23313;
chunk__23293_23297 = G__23314;
count__23294_23298 = G__23315;
i__23295_23299 = G__23316;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cognitect.transit/UUIDHandler");
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
var G__23335 = cljs.core.name(type);
var G__23336 = cognitect.transit.opts_merge({"unpack": ((function (G__23335,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(G__23335,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x23340 = cljs.core.clone(handlers);
x23340.forEach = ((function (x23340,G__23335,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__23341 = cljs.core.seq(coll);
var chunk__23342 = null;
var count__23343 = (0);
var i__23344 = (0);
while(true){
if((i__23344 < count__23343)){
var vec__23345 = chunk__23342.cljs$core$IIndexed$_nth$arity$2(null,i__23344);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23345,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23345,(1),null);
var G__23346_23351 = v;
var G__23347_23352 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23346_23351,G__23347_23352) : f.call(null,G__23346_23351,G__23347_23352));

var G__23353 = seq__23341;
var G__23354 = chunk__23342;
var G__23355 = count__23343;
var G__23356 = (i__23344 + (1));
seq__23341 = G__23353;
chunk__23342 = G__23354;
count__23343 = G__23355;
i__23344 = G__23356;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__23341);
if(temp__4126__auto__){
var seq__23341__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23341__$1)){
var c__4518__auto__ = cljs.core.chunk_first(seq__23341__$1);
var G__23357 = cljs.core.chunk_rest(seq__23341__$1);
var G__23358 = c__4518__auto__;
var G__23359 = cljs.core.count(c__4518__auto__);
var G__23360 = (0);
seq__23341 = G__23357;
chunk__23342 = G__23358;
count__23343 = G__23359;
i__23344 = G__23360;
continue;
} else {
var vec__23348 = cljs.core.first(seq__23341__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23348,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23348,(1),null);
var G__23349_23361 = v;
var G__23350_23362 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23349_23361,G__23350_23362) : f.call(null,G__23349_23361,G__23350_23362));

var G__23363 = cljs.core.next(seq__23341__$1);
var G__23364 = null;
var G__23365 = (0);
var G__23366 = (0);
seq__23341 = G__23363;
chunk__23342 = G__23364;
count__23343 = G__23365;
i__23344 = G__23366;
continue;
}
} else {
return null;
}
}
break;
}
});})(x23340,G__23335,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x23340;
})(), "objectBuilder": ((function (G__23335,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv(((function (G__23335,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__23337 = obj;
G__23337.push((function (){var G__23338 = k;
return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__23338) : kfn.call(null,G__23338));
})(),(function (){var G__23339 = v;
return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__23339) : vfn.call(null,G__23339));
})());

return G__23337;
});})(G__23335,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(G__23335,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$62)));
return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__23335,G__23336) : com.cognitect.transit.writer.call(null,G__23335,G__23336));
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
if(typeof cognitect.transit.t23381 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t23381 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta23382){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta23382 = meta23382;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t23381.prototype.tag = (function (o){
var self__ = this;
var _ = this;
var G__23384 = o;
return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__23384) : self__.tag_fn.call(null,G__23384));
});

cognitect.transit.t23381.prototype.rep = (function (o){
var self__ = this;
var _ = this;
var G__23385 = o;
return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__23385) : self__.rep_fn.call(null,G__23385));
});

cognitect.transit.t23381.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
var G__23386 = o;
return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__23386) : self__.str_rep_fn.call(null,G__23386));
} else {
return null;
}
});

cognitect.transit.t23381.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else {
return null;
}
});

cognitect.transit.t23381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23383){
var self__ = this;
var _23383__$1 = this;
return self__.meta23382;
});

cognitect.transit.t23381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23383,meta23382__$1){
var self__ = this;
var _23383__$1 = this;
return (new cognitect.transit.t23381(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta23382__$1));
});

cognitect.transit.t23381.cljs$lang$type = true;

cognitect.transit.t23381.cljs$lang$ctorStr = "cognitect.transit/t23381";

cognitect.transit.t23381.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cognitect.transit/t23381");
});

cognitect.transit.__GT_t23381 = (function __GT_t23381(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta23382){
return (new cognitect.transit.t23381(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta23382));
});

}

return (new cognitect.transit.t23381(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,79,cljs.core.constant$keyword$9,259,cljs.core.constant$keyword$10,6,cljs.core.constant$keyword$11,254,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cognitect/transit.cljs"], null)));
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
var G__23389 = tag;
var G__23390 = rep;
return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__23389,G__23390) : com.cognitect.transit.types.taggedValue.call(null,G__23389,G__23390));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){
var G__23392 = x;
return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__23392) : com.cognitect.transit.types.isTaggedValue.call(null,G__23392));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){
var G__23394 = s;
return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__23394) : com.cognitect.transit.types.integer.call(null,G__23394));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){
var G__23396 = x;
return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__23396) : com.cognitect.transit.types.isInteger.call(null,G__23396));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){
var G__23398 = s;
return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__23398) : com.cognitect.transit.types.bigInteger.call(null,G__23398));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){
var G__23400 = x;
return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__23400) : com.cognitect.transit.types.isBigInteger.call(null,G__23400));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){
var G__23402 = s;
return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__23402) : com.cognitect.transit.types.bigDecimalValue.call(null,G__23402));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){
var G__23404 = x;
return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__23404) : com.cognitect.transit.types.isBigDecimal.call(null,G__23404));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){
var G__23406 = s;
return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__23406) : com.cognitect.transit.types.uri.call(null,G__23406));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){
var G__23408 = x;
return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__23408) : com.cognitect.transit.types.isURI.call(null,G__23408));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){
var G__23410 = s;
return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__23410) : com.cognitect.transit.types.uuid.call(null,G__23410));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){
var G__23412 = x;
return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__23412) : com.cognitect.transit.types.isUUID.call(null,G__23412));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){
var G__23414 = s;
return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__23414) : com.cognitect.transit.types.binary.call(null,G__23414));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){
var G__23416 = x;
return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__23416) : com.cognitect.transit.types.isBinary.call(null,G__23416));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){
var G__23418 = x;
return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__23418) : com.cognitect.transit.types.quoted.call(null,G__23418));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){
var G__23420 = x;
return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__23420) : com.cognitect.transit.types.isQuoted.call(null,G__23420));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){
var G__23422 = x;
return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__23422) : com.cognitect.transit.types.link.call(null,G__23422));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){
var G__23424 = x;
return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__23424) : com.cognitect.transit.types.isLink.call(null,G__23424));
});
