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
var G__22426 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__22426) : com.cognitect.transit.eq.hashCode.call(null,G__22426));
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__22427 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__22427) : com.cognitect.transit.eq.hashCode.call(null,G__22427));
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__22428 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__22428) : com.cognitect.transit.eq.hashCode.call(null,G__22428));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){
var seq__22433_22437 = cljs.core.seq(cljs.core.js_keys(b));
var chunk__22434_22438 = null;
var count__22435_22439 = (0);
var i__22436_22440 = (0);
while(true){
if((i__22436_22440 < count__22435_22439)){
var k_22441 = chunk__22434_22438.cljs$core$IIndexed$_nth$arity$2(null,i__22436_22440);
var v_22442 = (b[k_22441]);
(a[k_22441] = v_22442);

var G__22443 = seq__22433_22437;
var G__22444 = chunk__22434_22438;
var G__22445 = count__22435_22439;
var G__22446 = (i__22436_22440 + (1));
seq__22433_22437 = G__22443;
chunk__22434_22438 = G__22444;
count__22435_22439 = G__22445;
i__22436_22440 = G__22446;
continue;
} else {
var temp__4126__auto___22447 = cljs.core.seq(seq__22433_22437);
if(temp__4126__auto___22447){
var seq__22433_22448__$1 = temp__4126__auto___22447;
if(cljs.core.chunked_seq_QMARK_(seq__22433_22448__$1)){
var c__4417__auto___22449 = cljs.core.chunk_first(seq__22433_22448__$1);
var G__22450 = cljs.core.chunk_rest(seq__22433_22448__$1);
var G__22451 = c__4417__auto___22449;
var G__22452 = cljs.core.count(c__4417__auto___22449);
var G__22453 = (0);
seq__22433_22437 = G__22450;
chunk__22434_22438 = G__22451;
count__22435_22439 = G__22452;
i__22436_22440 = G__22453;
continue;
} else {
var k_22454 = cljs.core.first(seq__22433_22448__$1);
var v_22455 = (b[k_22454]);
(a[k_22454] = v_22455);

var G__22456 = cljs.core.next(seq__22433_22448__$1);
var G__22457 = null;
var G__22458 = (0);
var G__22459 = (0);
seq__22433_22437 = G__22456;
chunk__22434_22438 = G__22457;
count__22435_22439 = G__22458;
i__22436_22440 = G__22459;
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
var G__22460 = arr;
var G__22461 = true;
var G__22462 = true;
return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__22460,G__22461,G__22462) : cljs.core.PersistentArrayMap.fromArray.call(null,G__22460,G__22461,G__22462));
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
var G__22463 = arr;
var G__22464 = true;
return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__22463,G__22464) : cljs.core.PersistentVector.fromArray.call(null,G__22463,G__22464));
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
var G__22469 = cljs.core.name(type);
var G__22470 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, ["$",((function (G__22469){
return (function (v){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__22469))
,":",((function (G__22469){
return (function (v){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__22469))
,"set",((function (G__22469){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__22469))
,"list",((function (G__22469){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__22469))
,"cmap",((function (G__22469){
return (function (v){
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__22471 = (i + (2));
var G__22472 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__22471;
ret = G__22472;
continue;
} else {
return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__22469))
], null),cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(opts)], 0)))},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$37)));
return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__22469,G__22470) : com.cognitect.transit.reader.call(null,G__22469,G__22470));
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
var seq__22473_22479 = cljs.core.seq(v);
var chunk__22474_22480 = null;
var count__22475_22481 = (0);
var i__22476_22482 = (0);
while(true){
if((i__22476_22482 < count__22475_22481)){
var x_22483 = chunk__22474_22480.cljs$core$IIndexed$_nth$arity$2(null,i__22476_22482);
ret.push(x_22483);

var G__22484 = seq__22473_22479;
var G__22485 = chunk__22474_22480;
var G__22486 = count__22475_22481;
var G__22487 = (i__22476_22482 + (1));
seq__22473_22479 = G__22484;
chunk__22474_22480 = G__22485;
count__22475_22481 = G__22486;
i__22476_22482 = G__22487;
continue;
} else {
var temp__4126__auto___22488 = cljs.core.seq(seq__22473_22479);
if(temp__4126__auto___22488){
var seq__22473_22489__$1 = temp__4126__auto___22488;
if(cljs.core.chunked_seq_QMARK_(seq__22473_22489__$1)){
var c__4417__auto___22490 = cljs.core.chunk_first(seq__22473_22489__$1);
var G__22491 = cljs.core.chunk_rest(seq__22473_22489__$1);
var G__22492 = c__4417__auto___22490;
var G__22493 = cljs.core.count(c__4417__auto___22490);
var G__22494 = (0);
seq__22473_22479 = G__22491;
chunk__22474_22480 = G__22492;
count__22475_22481 = G__22493;
i__22476_22482 = G__22494;
continue;
} else {
var x_22495 = cljs.core.first(seq__22473_22489__$1);
ret.push(x_22495);

var G__22496 = cljs.core.next(seq__22473_22489__$1);
var G__22497 = null;
var G__22498 = (0);
var G__22499 = (0);
seq__22473_22479 = G__22496;
chunk__22474_22480 = G__22497;
count__22475_22481 = G__22498;
i__22476_22482 = G__22499;
continue;
}
} else {
}
}
break;
}

var G__22477 = "array";
var G__22478 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__22477,G__22478) : com.cognitect.transit.tagged.call(null,G__22477,G__22478));
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
var seq__22500_22506 = cljs.core.seq(v);
var chunk__22501_22507 = null;
var count__22502_22508 = (0);
var i__22503_22509 = (0);
while(true){
if((i__22503_22509 < count__22502_22508)){
var x_22510 = chunk__22501_22507.cljs$core$IIndexed$_nth$arity$2(null,i__22503_22509);
ret.push(x_22510);

var G__22511 = seq__22500_22506;
var G__22512 = chunk__22501_22507;
var G__22513 = count__22502_22508;
var G__22514 = (i__22503_22509 + (1));
seq__22500_22506 = G__22511;
chunk__22501_22507 = G__22512;
count__22502_22508 = G__22513;
i__22503_22509 = G__22514;
continue;
} else {
var temp__4126__auto___22515 = cljs.core.seq(seq__22500_22506);
if(temp__4126__auto___22515){
var seq__22500_22516__$1 = temp__4126__auto___22515;
if(cljs.core.chunked_seq_QMARK_(seq__22500_22516__$1)){
var c__4417__auto___22517 = cljs.core.chunk_first(seq__22500_22516__$1);
var G__22518 = cljs.core.chunk_rest(seq__22500_22516__$1);
var G__22519 = c__4417__auto___22517;
var G__22520 = cljs.core.count(c__4417__auto___22517);
var G__22521 = (0);
seq__22500_22506 = G__22518;
chunk__22501_22507 = G__22519;
count__22502_22508 = G__22520;
i__22503_22509 = G__22521;
continue;
} else {
var x_22522 = cljs.core.first(seq__22500_22516__$1);
ret.push(x_22522);

var G__22523 = cljs.core.next(seq__22500_22516__$1);
var G__22524 = null;
var G__22525 = (0);
var G__22526 = (0);
seq__22500_22506 = G__22523;
chunk__22501_22507 = G__22524;
count__22502_22508 = G__22525;
i__22503_22509 = G__22526;
continue;
}
} else {
}
}
break;
}

var G__22504 = "array";
var G__22505 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__22504,G__22505) : com.cognitect.transit.tagged.call(null,G__22504,G__22505));
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
var seq__22527_22531 = cljs.core.seq(v);
var chunk__22528_22532 = null;
var count__22529_22533 = (0);
var i__22530_22534 = (0);
while(true){
if((i__22530_22534 < count__22529_22533)){
var x_22535 = chunk__22528_22532.cljs$core$IIndexed$_nth$arity$2(null,i__22530_22534);
ret.push(x_22535);

var G__22536 = seq__22527_22531;
var G__22537 = chunk__22528_22532;
var G__22538 = count__22529_22533;
var G__22539 = (i__22530_22534 + (1));
seq__22527_22531 = G__22536;
chunk__22528_22532 = G__22537;
count__22529_22533 = G__22538;
i__22530_22534 = G__22539;
continue;
} else {
var temp__4126__auto___22540 = cljs.core.seq(seq__22527_22531);
if(temp__4126__auto___22540){
var seq__22527_22541__$1 = temp__4126__auto___22540;
if(cljs.core.chunked_seq_QMARK_(seq__22527_22541__$1)){
var c__4417__auto___22542 = cljs.core.chunk_first(seq__22527_22541__$1);
var G__22543 = cljs.core.chunk_rest(seq__22527_22541__$1);
var G__22544 = c__4417__auto___22542;
var G__22545 = cljs.core.count(c__4417__auto___22542);
var G__22546 = (0);
seq__22527_22531 = G__22543;
chunk__22528_22532 = G__22544;
count__22529_22533 = G__22545;
i__22530_22534 = G__22546;
continue;
} else {
var x_22547 = cljs.core.first(seq__22527_22541__$1);
ret.push(x_22547);

var G__22548 = cljs.core.next(seq__22527_22541__$1);
var G__22549 = null;
var G__22550 = (0);
var G__22551 = (0);
seq__22527_22531 = G__22548;
chunk__22528_22532 = G__22549;
count__22529_22533 = G__22550;
i__22530_22534 = G__22551;
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
var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(opts)], 0));
var G__22570 = cljs.core.name(type);
var G__22571 = cognitect.transit.opts_merge({"unpack": ((function (G__22570,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(G__22570,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x22575 = cljs.core.clone(handlers);
x22575.forEach = ((function (x22575,G__22570,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__22576 = cljs.core.seq(coll);
var chunk__22577 = null;
var count__22578 = (0);
var i__22579 = (0);
while(true){
if((i__22579 < count__22578)){
var vec__22580 = chunk__22577.cljs$core$IIndexed$_nth$arity$2(null,i__22579);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22580,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22580,(1),null);
var G__22581_22586 = v;
var G__22582_22587 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22581_22586,G__22582_22587) : f.call(null,G__22581_22586,G__22582_22587));

var G__22588 = seq__22576;
var G__22589 = chunk__22577;
var G__22590 = count__22578;
var G__22591 = (i__22579 + (1));
seq__22576 = G__22588;
chunk__22577 = G__22589;
count__22578 = G__22590;
i__22579 = G__22591;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__22576);
if(temp__4126__auto__){
var seq__22576__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22576__$1)){
var c__4417__auto__ = cljs.core.chunk_first(seq__22576__$1);
var G__22592 = cljs.core.chunk_rest(seq__22576__$1);
var G__22593 = c__4417__auto__;
var G__22594 = cljs.core.count(c__4417__auto__);
var G__22595 = (0);
seq__22576 = G__22592;
chunk__22577 = G__22593;
count__22578 = G__22594;
i__22579 = G__22595;
continue;
} else {
var vec__22583 = cljs.core.first(seq__22576__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22583,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22583,(1),null);
var G__22584_22596 = v;
var G__22585_22597 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22584_22596,G__22585_22597) : f.call(null,G__22584_22596,G__22585_22597));

var G__22598 = cljs.core.next(seq__22576__$1);
var G__22599 = null;
var G__22600 = (0);
var G__22601 = (0);
seq__22576 = G__22598;
chunk__22577 = G__22599;
count__22578 = G__22600;
i__22579 = G__22601;
continue;
}
} else {
return null;
}
}
break;
}
});})(x22575,G__22570,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x22575;
})(), "objectBuilder": ((function (G__22570,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv(((function (G__22570,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__22572 = obj;
G__22572.push((function (){var G__22573 = k;
return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__22573) : kfn.call(null,G__22573));
})(),(function (){var G__22574 = v;
return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__22574) : vfn.call(null,G__22574));
})());

return G__22572;
});})(G__22570,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(G__22570,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$37)));
return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__22570,G__22571) : com.cognitect.transit.writer.call(null,G__22570,G__22571));
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
if(typeof cognitect.transit.t22616 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t22616 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta22617){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta22617 = meta22617;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t22616.prototype.tag = (function (o){
var self__ = this;
var _ = this;
var G__22619 = o;
return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__22619) : self__.tag_fn.call(null,G__22619));
});

cognitect.transit.t22616.prototype.rep = (function (o){
var self__ = this;
var _ = this;
var G__22620 = o;
return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__22620) : self__.rep_fn.call(null,G__22620));
});

cognitect.transit.t22616.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
var G__22621 = o;
return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__22621) : self__.str_rep_fn.call(null,G__22621));
} else {
return null;
}
});

cognitect.transit.t22616.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else {
return null;
}
});

cognitect.transit.t22616.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22618){
var self__ = this;
var _22618__$1 = this;
return self__.meta22617;
});

cognitect.transit.t22616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22618,meta22617__$1){
var self__ = this;
var _22618__$1 = this;
return (new cognitect.transit.t22616(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta22617__$1));
});

cognitect.transit.t22616.cljs$lang$type = true;

cognitect.transit.t22616.cljs$lang$ctorStr = "cognitect.transit/t22616";

cognitect.transit.t22616.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cognitect.transit/t22616");
});

cognitect.transit.__GT_t22616 = (function __GT_t22616(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta22617){
return (new cognitect.transit.t22616(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta22617));
});

}

return (new cognitect.transit.t22616(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,79,cljs.core.constant$keyword$9,259,cljs.core.constant$keyword$10,6,cljs.core.constant$keyword$11,254,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/resources/public/js-min/cognitect/transit.cljs"], null)));
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
var G__22624 = tag;
var G__22625 = rep;
return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__22624,G__22625) : com.cognitect.transit.types.taggedValue.call(null,G__22624,G__22625));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){
var G__22627 = x;
return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__22627) : com.cognitect.transit.types.isTaggedValue.call(null,G__22627));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){
var G__22629 = s;
return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__22629) : com.cognitect.transit.types.integer.call(null,G__22629));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){
var G__22631 = x;
return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__22631) : com.cognitect.transit.types.isInteger.call(null,G__22631));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){
var G__22633 = s;
return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__22633) : com.cognitect.transit.types.bigInteger.call(null,G__22633));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){
var G__22635 = x;
return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__22635) : com.cognitect.transit.types.isBigInteger.call(null,G__22635));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){
var G__22637 = s;
return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__22637) : com.cognitect.transit.types.bigDecimalValue.call(null,G__22637));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){
var G__22639 = x;
return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__22639) : com.cognitect.transit.types.isBigDecimal.call(null,G__22639));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){
var G__22641 = s;
return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__22641) : com.cognitect.transit.types.uri.call(null,G__22641));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){
var G__22643 = x;
return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__22643) : com.cognitect.transit.types.isURI.call(null,G__22643));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){
var G__22645 = s;
return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__22645) : com.cognitect.transit.types.uuid.call(null,G__22645));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){
var G__22647 = x;
return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__22647) : com.cognitect.transit.types.isUUID.call(null,G__22647));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){
var G__22649 = s;
return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__22649) : com.cognitect.transit.types.binary.call(null,G__22649));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){
var G__22651 = x;
return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__22651) : com.cognitect.transit.types.isBinary.call(null,G__22651));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){
var G__22653 = x;
return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__22653) : com.cognitect.transit.types.quoted.call(null,G__22653));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){
var G__22655 = x;
return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__22655) : com.cognitect.transit.types.isQuoted.call(null,G__22655));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){
var G__22657 = x;
return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__22657) : com.cognitect.transit.types.link.call(null,G__22657));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){
var G__22659 = x;
return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__22659) : com.cognitect.transit.types.isLink.call(null,G__22659));
});
