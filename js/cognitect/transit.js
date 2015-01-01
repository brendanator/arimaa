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
var G__23354 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__23354) : com.cognitect.transit.eq.hashCode.call(null,G__23354));
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__23355 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__23355) : com.cognitect.transit.eq.hashCode.call(null,G__23355));
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__23356 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__23356) : com.cognitect.transit.eq.hashCode.call(null,G__23356));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){
var seq__23361_23365 = cljs.core.seq(cljs.core.js_keys(b));
var chunk__23362_23366 = null;
var count__23363_23367 = (0);
var i__23364_23368 = (0);
while(true){
if((i__23364_23368 < count__23363_23367)){
var k_23369 = chunk__23362_23366.cljs$core$IIndexed$_nth$arity$2(null,i__23364_23368);
var v_23370 = (b[k_23369]);
(a[k_23369] = v_23370);

var G__23371 = seq__23361_23365;
var G__23372 = chunk__23362_23366;
var G__23373 = count__23363_23367;
var G__23374 = (i__23364_23368 + (1));
seq__23361_23365 = G__23371;
chunk__23362_23366 = G__23372;
count__23363_23367 = G__23373;
i__23364_23368 = G__23374;
continue;
} else {
var temp__4126__auto___23375 = cljs.core.seq(seq__23361_23365);
if(temp__4126__auto___23375){
var seq__23361_23376__$1 = temp__4126__auto___23375;
if(cljs.core.chunked_seq_QMARK_(seq__23361_23376__$1)){
var c__4417__auto___23377 = cljs.core.chunk_first(seq__23361_23376__$1);
var G__23378 = cljs.core.chunk_rest(seq__23361_23376__$1);
var G__23379 = c__4417__auto___23377;
var G__23380 = cljs.core.count(c__4417__auto___23377);
var G__23381 = (0);
seq__23361_23365 = G__23378;
chunk__23362_23366 = G__23379;
count__23363_23367 = G__23380;
i__23364_23368 = G__23381;
continue;
} else {
var k_23382 = cljs.core.first(seq__23361_23376__$1);
var v_23383 = (b[k_23382]);
(a[k_23382] = v_23383);

var G__23384 = cljs.core.next(seq__23361_23376__$1);
var G__23385 = null;
var G__23386 = (0);
var G__23387 = (0);
seq__23361_23365 = G__23384;
chunk__23362_23366 = G__23385;
count__23363_23367 = G__23386;
i__23364_23368 = G__23387;
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
var G__23388 = arr;
var G__23389 = true;
var G__23390 = true;
return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__23388,G__23389,G__23390) : cljs.core.PersistentArrayMap.fromArray.call(null,G__23388,G__23389,G__23390));
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
var G__23391 = arr;
var G__23392 = true;
return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__23391,G__23392) : cljs.core.PersistentVector.fromArray.call(null,G__23391,G__23392));
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
var G__23397 = cljs.core.name(type);
var G__23398 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, ["$",((function (G__23397){
return (function (v){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__23397))
,":",((function (G__23397){
return (function (v){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__23397))
,"set",((function (G__23397){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__23397))
,"list",((function (G__23397){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__23397))
,"cmap",((function (G__23397){
return (function (v){
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__23399 = (i + (2));
var G__23400 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__23399;
ret = G__23400;
continue;
} else {
return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__23397))
], null),cljs.core.constant$keyword$59.cljs$core$IFn$_invoke$arity$1(opts)], 0)))},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$59)));
return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__23397,G__23398) : com.cognitect.transit.reader.call(null,G__23397,G__23398));
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
var seq__23401_23407 = cljs.core.seq(v);
var chunk__23402_23408 = null;
var count__23403_23409 = (0);
var i__23404_23410 = (0);
while(true){
if((i__23404_23410 < count__23403_23409)){
var x_23411 = chunk__23402_23408.cljs$core$IIndexed$_nth$arity$2(null,i__23404_23410);
ret.push(x_23411);

var G__23412 = seq__23401_23407;
var G__23413 = chunk__23402_23408;
var G__23414 = count__23403_23409;
var G__23415 = (i__23404_23410 + (1));
seq__23401_23407 = G__23412;
chunk__23402_23408 = G__23413;
count__23403_23409 = G__23414;
i__23404_23410 = G__23415;
continue;
} else {
var temp__4126__auto___23416 = cljs.core.seq(seq__23401_23407);
if(temp__4126__auto___23416){
var seq__23401_23417__$1 = temp__4126__auto___23416;
if(cljs.core.chunked_seq_QMARK_(seq__23401_23417__$1)){
var c__4417__auto___23418 = cljs.core.chunk_first(seq__23401_23417__$1);
var G__23419 = cljs.core.chunk_rest(seq__23401_23417__$1);
var G__23420 = c__4417__auto___23418;
var G__23421 = cljs.core.count(c__4417__auto___23418);
var G__23422 = (0);
seq__23401_23407 = G__23419;
chunk__23402_23408 = G__23420;
count__23403_23409 = G__23421;
i__23404_23410 = G__23422;
continue;
} else {
var x_23423 = cljs.core.first(seq__23401_23417__$1);
ret.push(x_23423);

var G__23424 = cljs.core.next(seq__23401_23417__$1);
var G__23425 = null;
var G__23426 = (0);
var G__23427 = (0);
seq__23401_23407 = G__23424;
chunk__23402_23408 = G__23425;
count__23403_23409 = G__23426;
i__23404_23410 = G__23427;
continue;
}
} else {
}
}
break;
}

var G__23405 = "array";
var G__23406 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__23405,G__23406) : com.cognitect.transit.tagged.call(null,G__23405,G__23406));
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
var seq__23428_23434 = cljs.core.seq(v);
var chunk__23429_23435 = null;
var count__23430_23436 = (0);
var i__23431_23437 = (0);
while(true){
if((i__23431_23437 < count__23430_23436)){
var x_23438 = chunk__23429_23435.cljs$core$IIndexed$_nth$arity$2(null,i__23431_23437);
ret.push(x_23438);

var G__23439 = seq__23428_23434;
var G__23440 = chunk__23429_23435;
var G__23441 = count__23430_23436;
var G__23442 = (i__23431_23437 + (1));
seq__23428_23434 = G__23439;
chunk__23429_23435 = G__23440;
count__23430_23436 = G__23441;
i__23431_23437 = G__23442;
continue;
} else {
var temp__4126__auto___23443 = cljs.core.seq(seq__23428_23434);
if(temp__4126__auto___23443){
var seq__23428_23444__$1 = temp__4126__auto___23443;
if(cljs.core.chunked_seq_QMARK_(seq__23428_23444__$1)){
var c__4417__auto___23445 = cljs.core.chunk_first(seq__23428_23444__$1);
var G__23446 = cljs.core.chunk_rest(seq__23428_23444__$1);
var G__23447 = c__4417__auto___23445;
var G__23448 = cljs.core.count(c__4417__auto___23445);
var G__23449 = (0);
seq__23428_23434 = G__23446;
chunk__23429_23435 = G__23447;
count__23430_23436 = G__23448;
i__23431_23437 = G__23449;
continue;
} else {
var x_23450 = cljs.core.first(seq__23428_23444__$1);
ret.push(x_23450);

var G__23451 = cljs.core.next(seq__23428_23444__$1);
var G__23452 = null;
var G__23453 = (0);
var G__23454 = (0);
seq__23428_23434 = G__23451;
chunk__23429_23435 = G__23452;
count__23430_23436 = G__23453;
i__23431_23437 = G__23454;
continue;
}
} else {
}
}
break;
}

var G__23432 = "array";
var G__23433 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__23432,G__23433) : com.cognitect.transit.tagged.call(null,G__23432,G__23433));
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
var seq__23455_23459 = cljs.core.seq(v);
var chunk__23456_23460 = null;
var count__23457_23461 = (0);
var i__23458_23462 = (0);
while(true){
if((i__23458_23462 < count__23457_23461)){
var x_23463 = chunk__23456_23460.cljs$core$IIndexed$_nth$arity$2(null,i__23458_23462);
ret.push(x_23463);

var G__23464 = seq__23455_23459;
var G__23465 = chunk__23456_23460;
var G__23466 = count__23457_23461;
var G__23467 = (i__23458_23462 + (1));
seq__23455_23459 = G__23464;
chunk__23456_23460 = G__23465;
count__23457_23461 = G__23466;
i__23458_23462 = G__23467;
continue;
} else {
var temp__4126__auto___23468 = cljs.core.seq(seq__23455_23459);
if(temp__4126__auto___23468){
var seq__23455_23469__$1 = temp__4126__auto___23468;
if(cljs.core.chunked_seq_QMARK_(seq__23455_23469__$1)){
var c__4417__auto___23470 = cljs.core.chunk_first(seq__23455_23469__$1);
var G__23471 = cljs.core.chunk_rest(seq__23455_23469__$1);
var G__23472 = c__4417__auto___23470;
var G__23473 = cljs.core.count(c__4417__auto___23470);
var G__23474 = (0);
seq__23455_23459 = G__23471;
chunk__23456_23460 = G__23472;
count__23457_23461 = G__23473;
i__23458_23462 = G__23474;
continue;
} else {
var x_23475 = cljs.core.first(seq__23455_23469__$1);
ret.push(x_23475);

var G__23476 = cljs.core.next(seq__23455_23469__$1);
var G__23477 = null;
var G__23478 = (0);
var G__23479 = (0);
seq__23455_23459 = G__23476;
chunk__23456_23460 = G__23477;
count__23457_23461 = G__23478;
i__23458_23462 = G__23479;
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
var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),cljs.core.constant$keyword$59.cljs$core$IFn$_invoke$arity$1(opts)], 0));
var G__23498 = cljs.core.name(type);
var G__23499 = cognitect.transit.opts_merge({"unpack": ((function (G__23498,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(G__23498,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x23503 = cljs.core.clone(handlers);
x23503.forEach = ((function (x23503,G__23498,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__23504 = cljs.core.seq(coll);
var chunk__23505 = null;
var count__23506 = (0);
var i__23507 = (0);
while(true){
if((i__23507 < count__23506)){
var vec__23508 = chunk__23505.cljs$core$IIndexed$_nth$arity$2(null,i__23507);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23508,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23508,(1),null);
var G__23509_23514 = v;
var G__23510_23515 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23509_23514,G__23510_23515) : f.call(null,G__23509_23514,G__23510_23515));

var G__23516 = seq__23504;
var G__23517 = chunk__23505;
var G__23518 = count__23506;
var G__23519 = (i__23507 + (1));
seq__23504 = G__23516;
chunk__23505 = G__23517;
count__23506 = G__23518;
i__23507 = G__23519;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__23504);
if(temp__4126__auto__){
var seq__23504__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23504__$1)){
var c__4417__auto__ = cljs.core.chunk_first(seq__23504__$1);
var G__23520 = cljs.core.chunk_rest(seq__23504__$1);
var G__23521 = c__4417__auto__;
var G__23522 = cljs.core.count(c__4417__auto__);
var G__23523 = (0);
seq__23504 = G__23520;
chunk__23505 = G__23521;
count__23506 = G__23522;
i__23507 = G__23523;
continue;
} else {
var vec__23511 = cljs.core.first(seq__23504__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23511,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23511,(1),null);
var G__23512_23524 = v;
var G__23513_23525 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23512_23524,G__23513_23525) : f.call(null,G__23512_23524,G__23513_23525));

var G__23526 = cljs.core.next(seq__23504__$1);
var G__23527 = null;
var G__23528 = (0);
var G__23529 = (0);
seq__23504 = G__23526;
chunk__23505 = G__23527;
count__23506 = G__23528;
i__23507 = G__23529;
continue;
}
} else {
return null;
}
}
break;
}
});})(x23503,G__23498,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x23503;
})(), "objectBuilder": ((function (G__23498,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv(((function (G__23498,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__23500 = obj;
G__23500.push((function (){var G__23501 = k;
return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__23501) : kfn.call(null,G__23501));
})(),(function (){var G__23502 = v;
return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__23502) : vfn.call(null,G__23502));
})());

return G__23500;
});})(G__23498,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(G__23498,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$59)));
return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__23498,G__23499) : com.cognitect.transit.writer.call(null,G__23498,G__23499));
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
if(typeof cognitect.transit.t23544 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t23544 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta23545){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta23545 = meta23545;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t23544.prototype.tag = (function (o){
var self__ = this;
var _ = this;
var G__23547 = o;
return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__23547) : self__.tag_fn.call(null,G__23547));
});

cognitect.transit.t23544.prototype.rep = (function (o){
var self__ = this;
var _ = this;
var G__23548 = o;
return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__23548) : self__.rep_fn.call(null,G__23548));
});

cognitect.transit.t23544.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
var G__23549 = o;
return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__23549) : self__.str_rep_fn.call(null,G__23549));
} else {
return null;
}
});

cognitect.transit.t23544.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else {
return null;
}
});

cognitect.transit.t23544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23546){
var self__ = this;
var _23546__$1 = this;
return self__.meta23545;
});

cognitect.transit.t23544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23546,meta23545__$1){
var self__ = this;
var _23546__$1 = this;
return (new cognitect.transit.t23544(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta23545__$1));
});

cognitect.transit.t23544.cljs$lang$type = true;

cognitect.transit.t23544.cljs$lang$ctorStr = "cognitect.transit/t23544";

cognitect.transit.t23544.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cognitect.transit/t23544");
});

cognitect.transit.__GT_t23544 = (function __GT_t23544(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta23545){
return (new cognitect.transit.t23544(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta23545));
});

}

return (new cognitect.transit.t23544(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,79,cljs.core.constant$keyword$9,259,cljs.core.constant$keyword$10,6,cljs.core.constant$keyword$11,254,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cognitect/transit.cljs"], null)));
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
var G__23552 = tag;
var G__23553 = rep;
return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__23552,G__23553) : com.cognitect.transit.types.taggedValue.call(null,G__23552,G__23553));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){
var G__23555 = x;
return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__23555) : com.cognitect.transit.types.isTaggedValue.call(null,G__23555));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){
var G__23557 = s;
return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__23557) : com.cognitect.transit.types.integer.call(null,G__23557));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){
var G__23559 = x;
return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__23559) : com.cognitect.transit.types.isInteger.call(null,G__23559));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){
var G__23561 = s;
return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__23561) : com.cognitect.transit.types.bigInteger.call(null,G__23561));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){
var G__23563 = x;
return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__23563) : com.cognitect.transit.types.isBigInteger.call(null,G__23563));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){
var G__23565 = s;
return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__23565) : com.cognitect.transit.types.bigDecimalValue.call(null,G__23565));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){
var G__23567 = x;
return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__23567) : com.cognitect.transit.types.isBigDecimal.call(null,G__23567));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){
var G__23569 = s;
return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__23569) : com.cognitect.transit.types.uri.call(null,G__23569));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){
var G__23571 = x;
return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__23571) : com.cognitect.transit.types.isURI.call(null,G__23571));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){
var G__23573 = s;
return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__23573) : com.cognitect.transit.types.uuid.call(null,G__23573));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){
var G__23575 = x;
return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__23575) : com.cognitect.transit.types.isUUID.call(null,G__23575));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){
var G__23577 = s;
return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__23577) : com.cognitect.transit.types.binary.call(null,G__23577));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){
var G__23579 = x;
return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__23579) : com.cognitect.transit.types.isBinary.call(null,G__23579));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){
var G__23581 = x;
return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__23581) : com.cognitect.transit.types.quoted.call(null,G__23581));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){
var G__23583 = x;
return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__23583) : com.cognitect.transit.types.isQuoted.call(null,G__23583));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){
var G__23585 = x;
return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__23585) : com.cognitect.transit.types.link.call(null,G__23585));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){
var G__23587 = x;
return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__23587) : com.cognitect.transit.types.isLink.call(null,G__23587));
});
