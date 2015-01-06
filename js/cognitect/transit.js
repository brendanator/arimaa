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
var G__24156 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__24156) : com.cognitect.transit.eq.hashCode.call(null,G__24156));
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__24157 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__24157) : com.cognitect.transit.eq.hashCode.call(null,G__24157));
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__24158 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__24158) : com.cognitect.transit.eq.hashCode.call(null,G__24158));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){
var seq__24163_24167 = cljs.core.seq(cljs.core.js_keys(b));
var chunk__24164_24168 = null;
var count__24165_24169 = (0);
var i__24166_24170 = (0);
while(true){
if((i__24166_24170 < count__24165_24169)){
var k_24171 = chunk__24164_24168.cljs$core$IIndexed$_nth$arity$2(null,i__24166_24170);
var v_24172 = (b[k_24171]);
(a[k_24171] = v_24172);

var G__24173 = seq__24163_24167;
var G__24174 = chunk__24164_24168;
var G__24175 = count__24165_24169;
var G__24176 = (i__24166_24170 + (1));
seq__24163_24167 = G__24173;
chunk__24164_24168 = G__24174;
count__24165_24169 = G__24175;
i__24166_24170 = G__24176;
continue;
} else {
var temp__4126__auto___24177 = cljs.core.seq(seq__24163_24167);
if(temp__4126__auto___24177){
var seq__24163_24178__$1 = temp__4126__auto___24177;
if(cljs.core.chunked_seq_QMARK_(seq__24163_24178__$1)){
var c__4518__auto___24179 = cljs.core.chunk_first(seq__24163_24178__$1);
var G__24180 = cljs.core.chunk_rest(seq__24163_24178__$1);
var G__24181 = c__4518__auto___24179;
var G__24182 = cljs.core.count(c__4518__auto___24179);
var G__24183 = (0);
seq__24163_24167 = G__24180;
chunk__24164_24168 = G__24181;
count__24165_24169 = G__24182;
i__24166_24170 = G__24183;
continue;
} else {
var k_24184 = cljs.core.first(seq__24163_24178__$1);
var v_24185 = (b[k_24184]);
(a[k_24184] = v_24185);

var G__24186 = cljs.core.next(seq__24163_24178__$1);
var G__24187 = null;
var G__24188 = (0);
var G__24189 = (0);
seq__24163_24167 = G__24186;
chunk__24164_24168 = G__24187;
count__24165_24169 = G__24188;
i__24166_24170 = G__24189;
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
var G__24190 = arr;
var G__24191 = true;
var G__24192 = true;
return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__24190,G__24191,G__24192) : cljs.core.PersistentArrayMap.fromArray.call(null,G__24190,G__24191,G__24192));
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
var G__24193 = arr;
var G__24194 = true;
return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__24193,G__24194) : cljs.core.PersistentVector.fromArray.call(null,G__24193,G__24194));
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
var G__24199 = cljs.core.name(type);
var G__24200 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, ["$",((function (G__24199){
return (function (v){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__24199))
,":",((function (G__24199){
return (function (v){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__24199))
,"set",((function (G__24199){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__24199))
,"list",((function (G__24199){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__24199))
,"cmap",((function (G__24199){
return (function (v){
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__24201 = (i + (2));
var G__24202 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__24201;
ret = G__24202;
continue;
} else {
return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__24199))
], null),cljs.core.constant$keyword$175.cljs$core$IFn$_invoke$arity$1(opts)], 0)))},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$175)));
return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__24199,G__24200) : com.cognitect.transit.reader.call(null,G__24199,G__24200));
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
var seq__24203_24209 = cljs.core.seq(v);
var chunk__24204_24210 = null;
var count__24205_24211 = (0);
var i__24206_24212 = (0);
while(true){
if((i__24206_24212 < count__24205_24211)){
var x_24213 = chunk__24204_24210.cljs$core$IIndexed$_nth$arity$2(null,i__24206_24212);
ret.push(x_24213);

var G__24214 = seq__24203_24209;
var G__24215 = chunk__24204_24210;
var G__24216 = count__24205_24211;
var G__24217 = (i__24206_24212 + (1));
seq__24203_24209 = G__24214;
chunk__24204_24210 = G__24215;
count__24205_24211 = G__24216;
i__24206_24212 = G__24217;
continue;
} else {
var temp__4126__auto___24218 = cljs.core.seq(seq__24203_24209);
if(temp__4126__auto___24218){
var seq__24203_24219__$1 = temp__4126__auto___24218;
if(cljs.core.chunked_seq_QMARK_(seq__24203_24219__$1)){
var c__4518__auto___24220 = cljs.core.chunk_first(seq__24203_24219__$1);
var G__24221 = cljs.core.chunk_rest(seq__24203_24219__$1);
var G__24222 = c__4518__auto___24220;
var G__24223 = cljs.core.count(c__4518__auto___24220);
var G__24224 = (0);
seq__24203_24209 = G__24221;
chunk__24204_24210 = G__24222;
count__24205_24211 = G__24223;
i__24206_24212 = G__24224;
continue;
} else {
var x_24225 = cljs.core.first(seq__24203_24219__$1);
ret.push(x_24225);

var G__24226 = cljs.core.next(seq__24203_24219__$1);
var G__24227 = null;
var G__24228 = (0);
var G__24229 = (0);
seq__24203_24209 = G__24226;
chunk__24204_24210 = G__24227;
count__24205_24211 = G__24228;
i__24206_24212 = G__24229;
continue;
}
} else {
}
}
break;
}

var G__24207 = "array";
var G__24208 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__24207,G__24208) : com.cognitect.transit.tagged.call(null,G__24207,G__24208));
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
var seq__24230_24236 = cljs.core.seq(v);
var chunk__24231_24237 = null;
var count__24232_24238 = (0);
var i__24233_24239 = (0);
while(true){
if((i__24233_24239 < count__24232_24238)){
var x_24240 = chunk__24231_24237.cljs$core$IIndexed$_nth$arity$2(null,i__24233_24239);
ret.push(x_24240);

var G__24241 = seq__24230_24236;
var G__24242 = chunk__24231_24237;
var G__24243 = count__24232_24238;
var G__24244 = (i__24233_24239 + (1));
seq__24230_24236 = G__24241;
chunk__24231_24237 = G__24242;
count__24232_24238 = G__24243;
i__24233_24239 = G__24244;
continue;
} else {
var temp__4126__auto___24245 = cljs.core.seq(seq__24230_24236);
if(temp__4126__auto___24245){
var seq__24230_24246__$1 = temp__4126__auto___24245;
if(cljs.core.chunked_seq_QMARK_(seq__24230_24246__$1)){
var c__4518__auto___24247 = cljs.core.chunk_first(seq__24230_24246__$1);
var G__24248 = cljs.core.chunk_rest(seq__24230_24246__$1);
var G__24249 = c__4518__auto___24247;
var G__24250 = cljs.core.count(c__4518__auto___24247);
var G__24251 = (0);
seq__24230_24236 = G__24248;
chunk__24231_24237 = G__24249;
count__24232_24238 = G__24250;
i__24233_24239 = G__24251;
continue;
} else {
var x_24252 = cljs.core.first(seq__24230_24246__$1);
ret.push(x_24252);

var G__24253 = cljs.core.next(seq__24230_24246__$1);
var G__24254 = null;
var G__24255 = (0);
var G__24256 = (0);
seq__24230_24236 = G__24253;
chunk__24231_24237 = G__24254;
count__24232_24238 = G__24255;
i__24233_24239 = G__24256;
continue;
}
} else {
}
}
break;
}

var G__24234 = "array";
var G__24235 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__24234,G__24235) : com.cognitect.transit.tagged.call(null,G__24234,G__24235));
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
var seq__24257_24261 = cljs.core.seq(v);
var chunk__24258_24262 = null;
var count__24259_24263 = (0);
var i__24260_24264 = (0);
while(true){
if((i__24260_24264 < count__24259_24263)){
var x_24265 = chunk__24258_24262.cljs$core$IIndexed$_nth$arity$2(null,i__24260_24264);
ret.push(x_24265);

var G__24266 = seq__24257_24261;
var G__24267 = chunk__24258_24262;
var G__24268 = count__24259_24263;
var G__24269 = (i__24260_24264 + (1));
seq__24257_24261 = G__24266;
chunk__24258_24262 = G__24267;
count__24259_24263 = G__24268;
i__24260_24264 = G__24269;
continue;
} else {
var temp__4126__auto___24270 = cljs.core.seq(seq__24257_24261);
if(temp__4126__auto___24270){
var seq__24257_24271__$1 = temp__4126__auto___24270;
if(cljs.core.chunked_seq_QMARK_(seq__24257_24271__$1)){
var c__4518__auto___24272 = cljs.core.chunk_first(seq__24257_24271__$1);
var G__24273 = cljs.core.chunk_rest(seq__24257_24271__$1);
var G__24274 = c__4518__auto___24272;
var G__24275 = cljs.core.count(c__4518__auto___24272);
var G__24276 = (0);
seq__24257_24261 = G__24273;
chunk__24258_24262 = G__24274;
count__24259_24263 = G__24275;
i__24260_24264 = G__24276;
continue;
} else {
var x_24277 = cljs.core.first(seq__24257_24271__$1);
ret.push(x_24277);

var G__24278 = cljs.core.next(seq__24257_24271__$1);
var G__24279 = null;
var G__24280 = (0);
var G__24281 = (0);
seq__24257_24261 = G__24278;
chunk__24258_24262 = G__24279;
count__24259_24263 = G__24280;
i__24260_24264 = G__24281;
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
var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),cljs.core.constant$keyword$175.cljs$core$IFn$_invoke$arity$1(opts)], 0));
var G__24300 = cljs.core.name(type);
var G__24301 = cognitect.transit.opts_merge({"unpack": ((function (G__24300,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(G__24300,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x24305 = cljs.core.clone(handlers);
x24305.forEach = ((function (x24305,G__24300,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__24306 = cljs.core.seq(coll);
var chunk__24307 = null;
var count__24308 = (0);
var i__24309 = (0);
while(true){
if((i__24309 < count__24308)){
var vec__24310 = chunk__24307.cljs$core$IIndexed$_nth$arity$2(null,i__24309);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24310,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24310,(1),null);
var G__24311_24316 = v;
var G__24312_24317 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24311_24316,G__24312_24317) : f.call(null,G__24311_24316,G__24312_24317));

var G__24318 = seq__24306;
var G__24319 = chunk__24307;
var G__24320 = count__24308;
var G__24321 = (i__24309 + (1));
seq__24306 = G__24318;
chunk__24307 = G__24319;
count__24308 = G__24320;
i__24309 = G__24321;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__24306);
if(temp__4126__auto__){
var seq__24306__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24306__$1)){
var c__4518__auto__ = cljs.core.chunk_first(seq__24306__$1);
var G__24322 = cljs.core.chunk_rest(seq__24306__$1);
var G__24323 = c__4518__auto__;
var G__24324 = cljs.core.count(c__4518__auto__);
var G__24325 = (0);
seq__24306 = G__24322;
chunk__24307 = G__24323;
count__24308 = G__24324;
i__24309 = G__24325;
continue;
} else {
var vec__24313 = cljs.core.first(seq__24306__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24313,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24313,(1),null);
var G__24314_24326 = v;
var G__24315_24327 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24314_24326,G__24315_24327) : f.call(null,G__24314_24326,G__24315_24327));

var G__24328 = cljs.core.next(seq__24306__$1);
var G__24329 = null;
var G__24330 = (0);
var G__24331 = (0);
seq__24306 = G__24328;
chunk__24307 = G__24329;
count__24308 = G__24330;
i__24309 = G__24331;
continue;
}
} else {
return null;
}
}
break;
}
});})(x24305,G__24300,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x24305;
})(), "objectBuilder": ((function (G__24300,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv(((function (G__24300,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__24302 = obj;
G__24302.push((function (){var G__24303 = k;
return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__24303) : kfn.call(null,G__24303));
})(),(function (){var G__24304 = v;
return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__24304) : vfn.call(null,G__24304));
})());

return G__24302;
});})(G__24300,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(G__24300,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$175)));
return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__24300,G__24301) : com.cognitect.transit.writer.call(null,G__24300,G__24301));
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
if(typeof cognitect.transit.t24346 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t24346 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta24347){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta24347 = meta24347;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t24346.prototype.tag = (function (o){
var self__ = this;
var _ = this;
var G__24349 = o;
return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__24349) : self__.tag_fn.call(null,G__24349));
});

cognitect.transit.t24346.prototype.rep = (function (o){
var self__ = this;
var _ = this;
var G__24350 = o;
return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__24350) : self__.rep_fn.call(null,G__24350));
});

cognitect.transit.t24346.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
var G__24351 = o;
return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__24351) : self__.str_rep_fn.call(null,G__24351));
} else {
return null;
}
});

cognitect.transit.t24346.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else {
return null;
}
});

cognitect.transit.t24346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24348){
var self__ = this;
var _24348__$1 = this;
return self__.meta24347;
});

cognitect.transit.t24346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24348,meta24347__$1){
var self__ = this;
var _24348__$1 = this;
return (new cognitect.transit.t24346(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta24347__$1));
});

cognitect.transit.t24346.cljs$lang$type = true;

cognitect.transit.t24346.cljs$lang$ctorStr = "cognitect.transit/t24346";

cognitect.transit.t24346.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cognitect.transit/t24346");
});

cognitect.transit.__GT_t24346 = (function __GT_t24346(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta24347){
return (new cognitect.transit.t24346(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta24347));
});

}

return (new cognitect.transit.t24346(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,79,cljs.core.constant$keyword$9,259,cljs.core.constant$keyword$10,6,cljs.core.constant$keyword$11,254,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cognitect/transit.cljs"], null)));
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
var G__24354 = tag;
var G__24355 = rep;
return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__24354,G__24355) : com.cognitect.transit.types.taggedValue.call(null,G__24354,G__24355));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){
var G__24357 = x;
return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__24357) : com.cognitect.transit.types.isTaggedValue.call(null,G__24357));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){
var G__24359 = s;
return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__24359) : com.cognitect.transit.types.integer.call(null,G__24359));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){
var G__24361 = x;
return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__24361) : com.cognitect.transit.types.isInteger.call(null,G__24361));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){
var G__24363 = s;
return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__24363) : com.cognitect.transit.types.bigInteger.call(null,G__24363));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){
var G__24365 = x;
return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__24365) : com.cognitect.transit.types.isBigInteger.call(null,G__24365));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){
var G__24367 = s;
return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__24367) : com.cognitect.transit.types.bigDecimalValue.call(null,G__24367));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){
var G__24369 = x;
return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__24369) : com.cognitect.transit.types.isBigDecimal.call(null,G__24369));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){
var G__24371 = s;
return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__24371) : com.cognitect.transit.types.uri.call(null,G__24371));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){
var G__24373 = x;
return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__24373) : com.cognitect.transit.types.isURI.call(null,G__24373));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){
var G__24375 = s;
return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__24375) : com.cognitect.transit.types.uuid.call(null,G__24375));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){
var G__24377 = x;
return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__24377) : com.cognitect.transit.types.isUUID.call(null,G__24377));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){
var G__24379 = s;
return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__24379) : com.cognitect.transit.types.binary.call(null,G__24379));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){
var G__24381 = x;
return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__24381) : com.cognitect.transit.types.isBinary.call(null,G__24381));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){
var G__24383 = x;
return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__24383) : com.cognitect.transit.types.quoted.call(null,G__24383));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){
var G__24385 = x;
return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__24385) : com.cognitect.transit.types.isQuoted.call(null,G__24385));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){
var G__24387 = x;
return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__24387) : com.cognitect.transit.types.link.call(null,G__24387));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){
var G__24389 = x;
return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__24389) : com.cognitect.transit.types.isLink.call(null,G__24389));
});
