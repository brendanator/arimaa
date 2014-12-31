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
var G__23434 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__23434) : com.cognitect.transit.eq.hashCode.call(null,G__23434));
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__23435 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__23435) : com.cognitect.transit.eq.hashCode.call(null,G__23435));
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__23436 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__23436) : com.cognitect.transit.eq.hashCode.call(null,G__23436));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){
var seq__23441_23445 = cljs.core.seq(cljs.core.js_keys(b));
var chunk__23442_23446 = null;
var count__23443_23447 = (0);
var i__23444_23448 = (0);
while(true){
if((i__23444_23448 < count__23443_23447)){
var k_23449 = chunk__23442_23446.cljs$core$IIndexed$_nth$arity$2(null,i__23444_23448);
var v_23450 = (b[k_23449]);
(a[k_23449] = v_23450);

var G__23451 = seq__23441_23445;
var G__23452 = chunk__23442_23446;
var G__23453 = count__23443_23447;
var G__23454 = (i__23444_23448 + (1));
seq__23441_23445 = G__23451;
chunk__23442_23446 = G__23452;
count__23443_23447 = G__23453;
i__23444_23448 = G__23454;
continue;
} else {
var temp__4126__auto___23455 = cljs.core.seq(seq__23441_23445);
if(temp__4126__auto___23455){
var seq__23441_23456__$1 = temp__4126__auto___23455;
if(cljs.core.chunked_seq_QMARK_(seq__23441_23456__$1)){
var c__4417__auto___23457 = cljs.core.chunk_first(seq__23441_23456__$1);
var G__23458 = cljs.core.chunk_rest(seq__23441_23456__$1);
var G__23459 = c__4417__auto___23457;
var G__23460 = cljs.core.count(c__4417__auto___23457);
var G__23461 = (0);
seq__23441_23445 = G__23458;
chunk__23442_23446 = G__23459;
count__23443_23447 = G__23460;
i__23444_23448 = G__23461;
continue;
} else {
var k_23462 = cljs.core.first(seq__23441_23456__$1);
var v_23463 = (b[k_23462]);
(a[k_23462] = v_23463);

var G__23464 = cljs.core.next(seq__23441_23456__$1);
var G__23465 = null;
var G__23466 = (0);
var G__23467 = (0);
seq__23441_23445 = G__23464;
chunk__23442_23446 = G__23465;
count__23443_23447 = G__23466;
i__23444_23448 = G__23467;
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
var G__23468 = arr;
var G__23469 = true;
var G__23470 = true;
return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__23468,G__23469,G__23470) : cljs.core.PersistentArrayMap.fromArray.call(null,G__23468,G__23469,G__23470));
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
var G__23471 = arr;
var G__23472 = true;
return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__23471,G__23472) : cljs.core.PersistentVector.fromArray.call(null,G__23471,G__23472));
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
var G__23477 = cljs.core.name(type);
var G__23478 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, ["$",((function (G__23477){
return (function (v){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__23477))
,":",((function (G__23477){
return (function (v){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__23477))
,"set",((function (G__23477){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__23477))
,"list",((function (G__23477){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__23477))
,"cmap",((function (G__23477){
return (function (v){
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__23479 = (i + (2));
var G__23480 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__23479;
ret = G__23480;
continue;
} else {
return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__23477))
], null),cljs.core.constant$keyword$58.cljs$core$IFn$_invoke$arity$1(opts)], 0)))},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$58)));
return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__23477,G__23478) : com.cognitect.transit.reader.call(null,G__23477,G__23478));
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
var seq__23481_23487 = cljs.core.seq(v);
var chunk__23482_23488 = null;
var count__23483_23489 = (0);
var i__23484_23490 = (0);
while(true){
if((i__23484_23490 < count__23483_23489)){
var x_23491 = chunk__23482_23488.cljs$core$IIndexed$_nth$arity$2(null,i__23484_23490);
ret.push(x_23491);

var G__23492 = seq__23481_23487;
var G__23493 = chunk__23482_23488;
var G__23494 = count__23483_23489;
var G__23495 = (i__23484_23490 + (1));
seq__23481_23487 = G__23492;
chunk__23482_23488 = G__23493;
count__23483_23489 = G__23494;
i__23484_23490 = G__23495;
continue;
} else {
var temp__4126__auto___23496 = cljs.core.seq(seq__23481_23487);
if(temp__4126__auto___23496){
var seq__23481_23497__$1 = temp__4126__auto___23496;
if(cljs.core.chunked_seq_QMARK_(seq__23481_23497__$1)){
var c__4417__auto___23498 = cljs.core.chunk_first(seq__23481_23497__$1);
var G__23499 = cljs.core.chunk_rest(seq__23481_23497__$1);
var G__23500 = c__4417__auto___23498;
var G__23501 = cljs.core.count(c__4417__auto___23498);
var G__23502 = (0);
seq__23481_23487 = G__23499;
chunk__23482_23488 = G__23500;
count__23483_23489 = G__23501;
i__23484_23490 = G__23502;
continue;
} else {
var x_23503 = cljs.core.first(seq__23481_23497__$1);
ret.push(x_23503);

var G__23504 = cljs.core.next(seq__23481_23497__$1);
var G__23505 = null;
var G__23506 = (0);
var G__23507 = (0);
seq__23481_23487 = G__23504;
chunk__23482_23488 = G__23505;
count__23483_23489 = G__23506;
i__23484_23490 = G__23507;
continue;
}
} else {
}
}
break;
}

var G__23485 = "array";
var G__23486 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__23485,G__23486) : com.cognitect.transit.tagged.call(null,G__23485,G__23486));
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
var seq__23508_23514 = cljs.core.seq(v);
var chunk__23509_23515 = null;
var count__23510_23516 = (0);
var i__23511_23517 = (0);
while(true){
if((i__23511_23517 < count__23510_23516)){
var x_23518 = chunk__23509_23515.cljs$core$IIndexed$_nth$arity$2(null,i__23511_23517);
ret.push(x_23518);

var G__23519 = seq__23508_23514;
var G__23520 = chunk__23509_23515;
var G__23521 = count__23510_23516;
var G__23522 = (i__23511_23517 + (1));
seq__23508_23514 = G__23519;
chunk__23509_23515 = G__23520;
count__23510_23516 = G__23521;
i__23511_23517 = G__23522;
continue;
} else {
var temp__4126__auto___23523 = cljs.core.seq(seq__23508_23514);
if(temp__4126__auto___23523){
var seq__23508_23524__$1 = temp__4126__auto___23523;
if(cljs.core.chunked_seq_QMARK_(seq__23508_23524__$1)){
var c__4417__auto___23525 = cljs.core.chunk_first(seq__23508_23524__$1);
var G__23526 = cljs.core.chunk_rest(seq__23508_23524__$1);
var G__23527 = c__4417__auto___23525;
var G__23528 = cljs.core.count(c__4417__auto___23525);
var G__23529 = (0);
seq__23508_23514 = G__23526;
chunk__23509_23515 = G__23527;
count__23510_23516 = G__23528;
i__23511_23517 = G__23529;
continue;
} else {
var x_23530 = cljs.core.first(seq__23508_23524__$1);
ret.push(x_23530);

var G__23531 = cljs.core.next(seq__23508_23524__$1);
var G__23532 = null;
var G__23533 = (0);
var G__23534 = (0);
seq__23508_23514 = G__23531;
chunk__23509_23515 = G__23532;
count__23510_23516 = G__23533;
i__23511_23517 = G__23534;
continue;
}
} else {
}
}
break;
}

var G__23512 = "array";
var G__23513 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__23512,G__23513) : com.cognitect.transit.tagged.call(null,G__23512,G__23513));
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
var seq__23535_23539 = cljs.core.seq(v);
var chunk__23536_23540 = null;
var count__23537_23541 = (0);
var i__23538_23542 = (0);
while(true){
if((i__23538_23542 < count__23537_23541)){
var x_23543 = chunk__23536_23540.cljs$core$IIndexed$_nth$arity$2(null,i__23538_23542);
ret.push(x_23543);

var G__23544 = seq__23535_23539;
var G__23545 = chunk__23536_23540;
var G__23546 = count__23537_23541;
var G__23547 = (i__23538_23542 + (1));
seq__23535_23539 = G__23544;
chunk__23536_23540 = G__23545;
count__23537_23541 = G__23546;
i__23538_23542 = G__23547;
continue;
} else {
var temp__4126__auto___23548 = cljs.core.seq(seq__23535_23539);
if(temp__4126__auto___23548){
var seq__23535_23549__$1 = temp__4126__auto___23548;
if(cljs.core.chunked_seq_QMARK_(seq__23535_23549__$1)){
var c__4417__auto___23550 = cljs.core.chunk_first(seq__23535_23549__$1);
var G__23551 = cljs.core.chunk_rest(seq__23535_23549__$1);
var G__23552 = c__4417__auto___23550;
var G__23553 = cljs.core.count(c__4417__auto___23550);
var G__23554 = (0);
seq__23535_23539 = G__23551;
chunk__23536_23540 = G__23552;
count__23537_23541 = G__23553;
i__23538_23542 = G__23554;
continue;
} else {
var x_23555 = cljs.core.first(seq__23535_23549__$1);
ret.push(x_23555);

var G__23556 = cljs.core.next(seq__23535_23549__$1);
var G__23557 = null;
var G__23558 = (0);
var G__23559 = (0);
seq__23535_23539 = G__23556;
chunk__23536_23540 = G__23557;
count__23537_23541 = G__23558;
i__23538_23542 = G__23559;
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
var G__23578 = cljs.core.name(type);
var G__23579 = cognitect.transit.opts_merge({"unpack": ((function (G__23578,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(G__23578,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x23583 = cljs.core.clone(handlers);
x23583.forEach = ((function (x23583,G__23578,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__23584 = cljs.core.seq(coll);
var chunk__23585 = null;
var count__23586 = (0);
var i__23587 = (0);
while(true){
if((i__23587 < count__23586)){
var vec__23588 = chunk__23585.cljs$core$IIndexed$_nth$arity$2(null,i__23587);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23588,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23588,(1),null);
var G__23589_23594 = v;
var G__23590_23595 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23589_23594,G__23590_23595) : f.call(null,G__23589_23594,G__23590_23595));

var G__23596 = seq__23584;
var G__23597 = chunk__23585;
var G__23598 = count__23586;
var G__23599 = (i__23587 + (1));
seq__23584 = G__23596;
chunk__23585 = G__23597;
count__23586 = G__23598;
i__23587 = G__23599;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__23584);
if(temp__4126__auto__){
var seq__23584__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23584__$1)){
var c__4417__auto__ = cljs.core.chunk_first(seq__23584__$1);
var G__23600 = cljs.core.chunk_rest(seq__23584__$1);
var G__23601 = c__4417__auto__;
var G__23602 = cljs.core.count(c__4417__auto__);
var G__23603 = (0);
seq__23584 = G__23600;
chunk__23585 = G__23601;
count__23586 = G__23602;
i__23587 = G__23603;
continue;
} else {
var vec__23591 = cljs.core.first(seq__23584__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23591,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23591,(1),null);
var G__23592_23604 = v;
var G__23593_23605 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23592_23604,G__23593_23605) : f.call(null,G__23592_23604,G__23593_23605));

var G__23606 = cljs.core.next(seq__23584__$1);
var G__23607 = null;
var G__23608 = (0);
var G__23609 = (0);
seq__23584 = G__23606;
chunk__23585 = G__23607;
count__23586 = G__23608;
i__23587 = G__23609;
continue;
}
} else {
return null;
}
}
break;
}
});})(x23583,G__23578,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x23583;
})(), "objectBuilder": ((function (G__23578,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv(((function (G__23578,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__23580 = obj;
G__23580.push((function (){var G__23581 = k;
return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__23581) : kfn.call(null,G__23581));
})(),(function (){var G__23582 = v;
return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__23582) : vfn.call(null,G__23582));
})());

return G__23580;
});})(G__23578,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(G__23578,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$58)));
return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__23578,G__23579) : com.cognitect.transit.writer.call(null,G__23578,G__23579));
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
if(typeof cognitect.transit.t23624 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t23624 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta23625){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta23625 = meta23625;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t23624.prototype.tag = (function (o){
var self__ = this;
var _ = this;
var G__23627 = o;
return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__23627) : self__.tag_fn.call(null,G__23627));
});

cognitect.transit.t23624.prototype.rep = (function (o){
var self__ = this;
var _ = this;
var G__23628 = o;
return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__23628) : self__.rep_fn.call(null,G__23628));
});

cognitect.transit.t23624.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
var G__23629 = o;
return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__23629) : self__.str_rep_fn.call(null,G__23629));
} else {
return null;
}
});

cognitect.transit.t23624.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else {
return null;
}
});

cognitect.transit.t23624.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23626){
var self__ = this;
var _23626__$1 = this;
return self__.meta23625;
});

cognitect.transit.t23624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23626,meta23625__$1){
var self__ = this;
var _23626__$1 = this;
return (new cognitect.transit.t23624(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta23625__$1));
});

cognitect.transit.t23624.cljs$lang$type = true;

cognitect.transit.t23624.cljs$lang$ctorStr = "cognitect.transit/t23624";

cognitect.transit.t23624.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cognitect.transit/t23624");
});

cognitect.transit.__GT_t23624 = (function __GT_t23624(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta23625){
return (new cognitect.transit.t23624(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta23625));
});

}

return (new cognitect.transit.t23624(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,79,cljs.core.constant$keyword$9,259,cljs.core.constant$keyword$10,6,cljs.core.constant$keyword$11,254,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cognitect/transit.cljs"], null)));
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
var G__23632 = tag;
var G__23633 = rep;
return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__23632,G__23633) : com.cognitect.transit.types.taggedValue.call(null,G__23632,G__23633));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){
var G__23635 = x;
return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__23635) : com.cognitect.transit.types.isTaggedValue.call(null,G__23635));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){
var G__23637 = s;
return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__23637) : com.cognitect.transit.types.integer.call(null,G__23637));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){
var G__23639 = x;
return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__23639) : com.cognitect.transit.types.isInteger.call(null,G__23639));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){
var G__23641 = s;
return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__23641) : com.cognitect.transit.types.bigInteger.call(null,G__23641));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){
var G__23643 = x;
return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__23643) : com.cognitect.transit.types.isBigInteger.call(null,G__23643));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){
var G__23645 = s;
return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__23645) : com.cognitect.transit.types.bigDecimalValue.call(null,G__23645));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){
var G__23647 = x;
return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__23647) : com.cognitect.transit.types.isBigDecimal.call(null,G__23647));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){
var G__23649 = s;
return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__23649) : com.cognitect.transit.types.uri.call(null,G__23649));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){
var G__23651 = x;
return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__23651) : com.cognitect.transit.types.isURI.call(null,G__23651));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){
var G__23653 = s;
return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__23653) : com.cognitect.transit.types.uuid.call(null,G__23653));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){
var G__23655 = x;
return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__23655) : com.cognitect.transit.types.isUUID.call(null,G__23655));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){
var G__23657 = s;
return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__23657) : com.cognitect.transit.types.binary.call(null,G__23657));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){
var G__23659 = x;
return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__23659) : com.cognitect.transit.types.isBinary.call(null,G__23659));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){
var G__23661 = x;
return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__23661) : com.cognitect.transit.types.quoted.call(null,G__23661));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){
var G__23663 = x;
return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__23663) : com.cognitect.transit.types.isQuoted.call(null,G__23663));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){
var G__23665 = x;
return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__23665) : com.cognitect.transit.types.link.call(null,G__23665));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){
var G__23667 = x;
return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__23667) : com.cognitect.transit.types.isLink.call(null,G__23667));
});
