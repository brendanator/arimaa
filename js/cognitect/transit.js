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
var G__27101 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__27101) : com.cognitect.transit.eq.hashCode.call(null,G__27101));
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__27102 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__27102) : com.cognitect.transit.eq.hashCode.call(null,G__27102));
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__27103 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__27103) : com.cognitect.transit.eq.hashCode.call(null,G__27103));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){
var seq__27108_27112 = cljs.core.seq(cljs.core.js_keys(b));
var chunk__27109_27113 = null;
var count__27110_27114 = (0);
var i__27111_27115 = (0);
while(true){
if((i__27111_27115 < count__27110_27114)){
var k_27116 = chunk__27109_27113.cljs$core$IIndexed$_nth$arity$2(null,i__27111_27115);
var v_27117 = (b[k_27116]);
(a[k_27116] = v_27117);

var G__27118 = seq__27108_27112;
var G__27119 = chunk__27109_27113;
var G__27120 = count__27110_27114;
var G__27121 = (i__27111_27115 + (1));
seq__27108_27112 = G__27118;
chunk__27109_27113 = G__27119;
count__27110_27114 = G__27120;
i__27111_27115 = G__27121;
continue;
} else {
var temp__4126__auto___27122 = cljs.core.seq(seq__27108_27112);
if(temp__4126__auto___27122){
var seq__27108_27123__$1 = temp__4126__auto___27122;
if(cljs.core.chunked_seq_QMARK_(seq__27108_27123__$1)){
var c__4417__auto___27124 = cljs.core.chunk_first(seq__27108_27123__$1);
var G__27125 = cljs.core.chunk_rest(seq__27108_27123__$1);
var G__27126 = c__4417__auto___27124;
var G__27127 = cljs.core.count(c__4417__auto___27124);
var G__27128 = (0);
seq__27108_27112 = G__27125;
chunk__27109_27113 = G__27126;
count__27110_27114 = G__27127;
i__27111_27115 = G__27128;
continue;
} else {
var k_27129 = cljs.core.first(seq__27108_27123__$1);
var v_27130 = (b[k_27129]);
(a[k_27129] = v_27130);

var G__27131 = cljs.core.next(seq__27108_27123__$1);
var G__27132 = null;
var G__27133 = (0);
var G__27134 = (0);
seq__27108_27112 = G__27131;
chunk__27109_27113 = G__27132;
count__27110_27114 = G__27133;
i__27111_27115 = G__27134;
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
var G__27135 = arr;
var G__27136 = true;
var G__27137 = true;
return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__27135,G__27136,G__27137) : cljs.core.PersistentArrayMap.fromArray.call(null,G__27135,G__27136,G__27137));
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
var G__27138 = arr;
var G__27139 = true;
return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__27138,G__27139) : cljs.core.PersistentVector.fromArray.call(null,G__27138,G__27139));
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
var G__27144 = cljs.core.name(type);
var G__27145 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, ["$",((function (G__27144){
return (function (v){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__27144))
,":",((function (G__27144){
return (function (v){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__27144))
,"set",((function (G__27144){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__27144))
,"list",((function (G__27144){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__27144))
,"cmap",((function (G__27144){
return (function (v){
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__27146 = (i + (2));
var G__27147 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__27146;
ret = G__27147;
continue;
} else {
return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__27144))
], null),cljs.core.constant$keyword$97.cljs$core$IFn$_invoke$arity$1(opts)], 0)))},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$97)));
return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__27144,G__27145) : com.cognitect.transit.reader.call(null,G__27144,G__27145));
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
var seq__27148_27154 = cljs.core.seq(v);
var chunk__27149_27155 = null;
var count__27150_27156 = (0);
var i__27151_27157 = (0);
while(true){
if((i__27151_27157 < count__27150_27156)){
var x_27158 = chunk__27149_27155.cljs$core$IIndexed$_nth$arity$2(null,i__27151_27157);
ret.push(x_27158);

var G__27159 = seq__27148_27154;
var G__27160 = chunk__27149_27155;
var G__27161 = count__27150_27156;
var G__27162 = (i__27151_27157 + (1));
seq__27148_27154 = G__27159;
chunk__27149_27155 = G__27160;
count__27150_27156 = G__27161;
i__27151_27157 = G__27162;
continue;
} else {
var temp__4126__auto___27163 = cljs.core.seq(seq__27148_27154);
if(temp__4126__auto___27163){
var seq__27148_27164__$1 = temp__4126__auto___27163;
if(cljs.core.chunked_seq_QMARK_(seq__27148_27164__$1)){
var c__4417__auto___27165 = cljs.core.chunk_first(seq__27148_27164__$1);
var G__27166 = cljs.core.chunk_rest(seq__27148_27164__$1);
var G__27167 = c__4417__auto___27165;
var G__27168 = cljs.core.count(c__4417__auto___27165);
var G__27169 = (0);
seq__27148_27154 = G__27166;
chunk__27149_27155 = G__27167;
count__27150_27156 = G__27168;
i__27151_27157 = G__27169;
continue;
} else {
var x_27170 = cljs.core.first(seq__27148_27164__$1);
ret.push(x_27170);

var G__27171 = cljs.core.next(seq__27148_27164__$1);
var G__27172 = null;
var G__27173 = (0);
var G__27174 = (0);
seq__27148_27154 = G__27171;
chunk__27149_27155 = G__27172;
count__27150_27156 = G__27173;
i__27151_27157 = G__27174;
continue;
}
} else {
}
}
break;
}

var G__27152 = "array";
var G__27153 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__27152,G__27153) : com.cognitect.transit.tagged.call(null,G__27152,G__27153));
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
var seq__27175_27181 = cljs.core.seq(v);
var chunk__27176_27182 = null;
var count__27177_27183 = (0);
var i__27178_27184 = (0);
while(true){
if((i__27178_27184 < count__27177_27183)){
var x_27185 = chunk__27176_27182.cljs$core$IIndexed$_nth$arity$2(null,i__27178_27184);
ret.push(x_27185);

var G__27186 = seq__27175_27181;
var G__27187 = chunk__27176_27182;
var G__27188 = count__27177_27183;
var G__27189 = (i__27178_27184 + (1));
seq__27175_27181 = G__27186;
chunk__27176_27182 = G__27187;
count__27177_27183 = G__27188;
i__27178_27184 = G__27189;
continue;
} else {
var temp__4126__auto___27190 = cljs.core.seq(seq__27175_27181);
if(temp__4126__auto___27190){
var seq__27175_27191__$1 = temp__4126__auto___27190;
if(cljs.core.chunked_seq_QMARK_(seq__27175_27191__$1)){
var c__4417__auto___27192 = cljs.core.chunk_first(seq__27175_27191__$1);
var G__27193 = cljs.core.chunk_rest(seq__27175_27191__$1);
var G__27194 = c__4417__auto___27192;
var G__27195 = cljs.core.count(c__4417__auto___27192);
var G__27196 = (0);
seq__27175_27181 = G__27193;
chunk__27176_27182 = G__27194;
count__27177_27183 = G__27195;
i__27178_27184 = G__27196;
continue;
} else {
var x_27197 = cljs.core.first(seq__27175_27191__$1);
ret.push(x_27197);

var G__27198 = cljs.core.next(seq__27175_27191__$1);
var G__27199 = null;
var G__27200 = (0);
var G__27201 = (0);
seq__27175_27181 = G__27198;
chunk__27176_27182 = G__27199;
count__27177_27183 = G__27200;
i__27178_27184 = G__27201;
continue;
}
} else {
}
}
break;
}

var G__27179 = "array";
var G__27180 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__27179,G__27180) : com.cognitect.transit.tagged.call(null,G__27179,G__27180));
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
var seq__27202_27206 = cljs.core.seq(v);
var chunk__27203_27207 = null;
var count__27204_27208 = (0);
var i__27205_27209 = (0);
while(true){
if((i__27205_27209 < count__27204_27208)){
var x_27210 = chunk__27203_27207.cljs$core$IIndexed$_nth$arity$2(null,i__27205_27209);
ret.push(x_27210);

var G__27211 = seq__27202_27206;
var G__27212 = chunk__27203_27207;
var G__27213 = count__27204_27208;
var G__27214 = (i__27205_27209 + (1));
seq__27202_27206 = G__27211;
chunk__27203_27207 = G__27212;
count__27204_27208 = G__27213;
i__27205_27209 = G__27214;
continue;
} else {
var temp__4126__auto___27215 = cljs.core.seq(seq__27202_27206);
if(temp__4126__auto___27215){
var seq__27202_27216__$1 = temp__4126__auto___27215;
if(cljs.core.chunked_seq_QMARK_(seq__27202_27216__$1)){
var c__4417__auto___27217 = cljs.core.chunk_first(seq__27202_27216__$1);
var G__27218 = cljs.core.chunk_rest(seq__27202_27216__$1);
var G__27219 = c__4417__auto___27217;
var G__27220 = cljs.core.count(c__4417__auto___27217);
var G__27221 = (0);
seq__27202_27206 = G__27218;
chunk__27203_27207 = G__27219;
count__27204_27208 = G__27220;
i__27205_27209 = G__27221;
continue;
} else {
var x_27222 = cljs.core.first(seq__27202_27216__$1);
ret.push(x_27222);

var G__27223 = cljs.core.next(seq__27202_27216__$1);
var G__27224 = null;
var G__27225 = (0);
var G__27226 = (0);
seq__27202_27206 = G__27223;
chunk__27203_27207 = G__27224;
count__27204_27208 = G__27225;
i__27205_27209 = G__27226;
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
var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),cljs.core.constant$keyword$97.cljs$core$IFn$_invoke$arity$1(opts)], 0));
var G__27245 = cljs.core.name(type);
var G__27246 = cognitect.transit.opts_merge({"unpack": ((function (G__27245,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(G__27245,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x27250 = cljs.core.clone(handlers);
x27250.forEach = ((function (x27250,G__27245,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__27251 = cljs.core.seq(coll);
var chunk__27252 = null;
var count__27253 = (0);
var i__27254 = (0);
while(true){
if((i__27254 < count__27253)){
var vec__27255 = chunk__27252.cljs$core$IIndexed$_nth$arity$2(null,i__27254);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27255,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27255,(1),null);
var G__27256_27261 = v;
var G__27257_27262 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27256_27261,G__27257_27262) : f.call(null,G__27256_27261,G__27257_27262));

var G__27263 = seq__27251;
var G__27264 = chunk__27252;
var G__27265 = count__27253;
var G__27266 = (i__27254 + (1));
seq__27251 = G__27263;
chunk__27252 = G__27264;
count__27253 = G__27265;
i__27254 = G__27266;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__27251);
if(temp__4126__auto__){
var seq__27251__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27251__$1)){
var c__4417__auto__ = cljs.core.chunk_first(seq__27251__$1);
var G__27267 = cljs.core.chunk_rest(seq__27251__$1);
var G__27268 = c__4417__auto__;
var G__27269 = cljs.core.count(c__4417__auto__);
var G__27270 = (0);
seq__27251 = G__27267;
chunk__27252 = G__27268;
count__27253 = G__27269;
i__27254 = G__27270;
continue;
} else {
var vec__27258 = cljs.core.first(seq__27251__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27258,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27258,(1),null);
var G__27259_27271 = v;
var G__27260_27272 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27259_27271,G__27260_27272) : f.call(null,G__27259_27271,G__27260_27272));

var G__27273 = cljs.core.next(seq__27251__$1);
var G__27274 = null;
var G__27275 = (0);
var G__27276 = (0);
seq__27251 = G__27273;
chunk__27252 = G__27274;
count__27253 = G__27275;
i__27254 = G__27276;
continue;
}
} else {
return null;
}
}
break;
}
});})(x27250,G__27245,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x27250;
})(), "objectBuilder": ((function (G__27245,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv(((function (G__27245,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__27247 = obj;
G__27247.push((function (){var G__27248 = k;
return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__27248) : kfn.call(null,G__27248));
})(),(function (){var G__27249 = v;
return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__27249) : vfn.call(null,G__27249));
})());

return G__27247;
});})(G__27245,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(G__27245,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$97)));
return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__27245,G__27246) : com.cognitect.transit.writer.call(null,G__27245,G__27246));
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
if(typeof cognitect.transit.t27291 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t27291 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta27292){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta27292 = meta27292;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t27291.prototype.tag = (function (o){
var self__ = this;
var _ = this;
var G__27294 = o;
return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__27294) : self__.tag_fn.call(null,G__27294));
});

cognitect.transit.t27291.prototype.rep = (function (o){
var self__ = this;
var _ = this;
var G__27295 = o;
return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__27295) : self__.rep_fn.call(null,G__27295));
});

cognitect.transit.t27291.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
var G__27296 = o;
return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__27296) : self__.str_rep_fn.call(null,G__27296));
} else {
return null;
}
});

cognitect.transit.t27291.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else {
return null;
}
});

cognitect.transit.t27291.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27293){
var self__ = this;
var _27293__$1 = this;
return self__.meta27292;
});

cognitect.transit.t27291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27293,meta27292__$1){
var self__ = this;
var _27293__$1 = this;
return (new cognitect.transit.t27291(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta27292__$1));
});

cognitect.transit.t27291.cljs$lang$type = true;

cognitect.transit.t27291.cljs$lang$ctorStr = "cognitect.transit/t27291";

cognitect.transit.t27291.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cognitect.transit/t27291");
});

cognitect.transit.__GT_t27291 = (function __GT_t27291(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta27292){
return (new cognitect.transit.t27291(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta27292));
});

}

return (new cognitect.transit.t27291(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,79,cljs.core.constant$keyword$9,259,cljs.core.constant$keyword$10,6,cljs.core.constant$keyword$11,254,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cognitect/transit.cljs"], null)));
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
var G__27299 = tag;
var G__27300 = rep;
return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__27299,G__27300) : com.cognitect.transit.types.taggedValue.call(null,G__27299,G__27300));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){
var G__27302 = x;
return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__27302) : com.cognitect.transit.types.isTaggedValue.call(null,G__27302));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){
var G__27304 = s;
return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__27304) : com.cognitect.transit.types.integer.call(null,G__27304));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){
var G__27306 = x;
return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__27306) : com.cognitect.transit.types.isInteger.call(null,G__27306));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){
var G__27308 = s;
return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__27308) : com.cognitect.transit.types.bigInteger.call(null,G__27308));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){
var G__27310 = x;
return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__27310) : com.cognitect.transit.types.isBigInteger.call(null,G__27310));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){
var G__27312 = s;
return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__27312) : com.cognitect.transit.types.bigDecimalValue.call(null,G__27312));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){
var G__27314 = x;
return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__27314) : com.cognitect.transit.types.isBigDecimal.call(null,G__27314));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){
var G__27316 = s;
return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__27316) : com.cognitect.transit.types.uri.call(null,G__27316));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){
var G__27318 = x;
return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__27318) : com.cognitect.transit.types.isURI.call(null,G__27318));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){
var G__27320 = s;
return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__27320) : com.cognitect.transit.types.uuid.call(null,G__27320));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){
var G__27322 = x;
return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__27322) : com.cognitect.transit.types.isUUID.call(null,G__27322));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){
var G__27324 = s;
return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__27324) : com.cognitect.transit.types.binary.call(null,G__27324));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){
var G__27326 = x;
return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__27326) : com.cognitect.transit.types.isBinary.call(null,G__27326));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){
var G__27328 = x;
return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__27328) : com.cognitect.transit.types.quoted.call(null,G__27328));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){
var G__27330 = x;
return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__27330) : com.cognitect.transit.types.isQuoted.call(null,G__27330));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){
var G__27332 = x;
return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__27332) : com.cognitect.transit.types.link.call(null,G__27332));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){
var G__27334 = x;
return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__27334) : com.cognitect.transit.types.isLink.call(null,G__27334));
});
