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
var G__26400 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__26400) : com.cognitect.transit.eq.hashCode.call(null,G__26400));
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__26401 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__26401) : com.cognitect.transit.eq.hashCode.call(null,G__26401));
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__26402 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__26402) : com.cognitect.transit.eq.hashCode.call(null,G__26402));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){
var seq__26407_26411 = cljs.core.seq(cljs.core.js_keys(b));
var chunk__26408_26412 = null;
var count__26409_26413 = (0);
var i__26410_26414 = (0);
while(true){
if((i__26410_26414 < count__26409_26413)){
var k_26415 = chunk__26408_26412.cljs$core$IIndexed$_nth$arity$2(null,i__26410_26414);
var v_26416 = (b[k_26415]);
(a[k_26415] = v_26416);

var G__26417 = seq__26407_26411;
var G__26418 = chunk__26408_26412;
var G__26419 = count__26409_26413;
var G__26420 = (i__26410_26414 + (1));
seq__26407_26411 = G__26417;
chunk__26408_26412 = G__26418;
count__26409_26413 = G__26419;
i__26410_26414 = G__26420;
continue;
} else {
var temp__4126__auto___26421 = cljs.core.seq(seq__26407_26411);
if(temp__4126__auto___26421){
var seq__26407_26422__$1 = temp__4126__auto___26421;
if(cljs.core.chunked_seq_QMARK_(seq__26407_26422__$1)){
var c__4417__auto___26423 = cljs.core.chunk_first(seq__26407_26422__$1);
var G__26424 = cljs.core.chunk_rest(seq__26407_26422__$1);
var G__26425 = c__4417__auto___26423;
var G__26426 = cljs.core.count(c__4417__auto___26423);
var G__26427 = (0);
seq__26407_26411 = G__26424;
chunk__26408_26412 = G__26425;
count__26409_26413 = G__26426;
i__26410_26414 = G__26427;
continue;
} else {
var k_26428 = cljs.core.first(seq__26407_26422__$1);
var v_26429 = (b[k_26428]);
(a[k_26428] = v_26429);

var G__26430 = cljs.core.next(seq__26407_26422__$1);
var G__26431 = null;
var G__26432 = (0);
var G__26433 = (0);
seq__26407_26411 = G__26430;
chunk__26408_26412 = G__26431;
count__26409_26413 = G__26432;
i__26410_26414 = G__26433;
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
var G__26434 = arr;
var G__26435 = true;
var G__26436 = true;
return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__26434,G__26435,G__26436) : cljs.core.PersistentArrayMap.fromArray.call(null,G__26434,G__26435,G__26436));
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
var G__26437 = arr;
var G__26438 = true;
return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__26437,G__26438) : cljs.core.PersistentVector.fromArray.call(null,G__26437,G__26438));
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
var G__26443 = cljs.core.name(type);
var G__26444 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, ["$",((function (G__26443){
return (function (v){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__26443))
,":",((function (G__26443){
return (function (v){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__26443))
,"set",((function (G__26443){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__26443))
,"list",((function (G__26443){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__26443))
,"cmap",((function (G__26443){
return (function (v){
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__26445 = (i + (2));
var G__26446 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__26445;
ret = G__26446;
continue;
} else {
return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__26443))
], null),cljs.core.constant$keyword$72.cljs$core$IFn$_invoke$arity$1(opts)], 0)))},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$72)));
return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__26443,G__26444) : com.cognitect.transit.reader.call(null,G__26443,G__26444));
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
var seq__26447_26453 = cljs.core.seq(v);
var chunk__26448_26454 = null;
var count__26449_26455 = (0);
var i__26450_26456 = (0);
while(true){
if((i__26450_26456 < count__26449_26455)){
var x_26457 = chunk__26448_26454.cljs$core$IIndexed$_nth$arity$2(null,i__26450_26456);
ret.push(x_26457);

var G__26458 = seq__26447_26453;
var G__26459 = chunk__26448_26454;
var G__26460 = count__26449_26455;
var G__26461 = (i__26450_26456 + (1));
seq__26447_26453 = G__26458;
chunk__26448_26454 = G__26459;
count__26449_26455 = G__26460;
i__26450_26456 = G__26461;
continue;
} else {
var temp__4126__auto___26462 = cljs.core.seq(seq__26447_26453);
if(temp__4126__auto___26462){
var seq__26447_26463__$1 = temp__4126__auto___26462;
if(cljs.core.chunked_seq_QMARK_(seq__26447_26463__$1)){
var c__4417__auto___26464 = cljs.core.chunk_first(seq__26447_26463__$1);
var G__26465 = cljs.core.chunk_rest(seq__26447_26463__$1);
var G__26466 = c__4417__auto___26464;
var G__26467 = cljs.core.count(c__4417__auto___26464);
var G__26468 = (0);
seq__26447_26453 = G__26465;
chunk__26448_26454 = G__26466;
count__26449_26455 = G__26467;
i__26450_26456 = G__26468;
continue;
} else {
var x_26469 = cljs.core.first(seq__26447_26463__$1);
ret.push(x_26469);

var G__26470 = cljs.core.next(seq__26447_26463__$1);
var G__26471 = null;
var G__26472 = (0);
var G__26473 = (0);
seq__26447_26453 = G__26470;
chunk__26448_26454 = G__26471;
count__26449_26455 = G__26472;
i__26450_26456 = G__26473;
continue;
}
} else {
}
}
break;
}

var G__26451 = "array";
var G__26452 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__26451,G__26452) : com.cognitect.transit.tagged.call(null,G__26451,G__26452));
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
var seq__26474_26480 = cljs.core.seq(v);
var chunk__26475_26481 = null;
var count__26476_26482 = (0);
var i__26477_26483 = (0);
while(true){
if((i__26477_26483 < count__26476_26482)){
var x_26484 = chunk__26475_26481.cljs$core$IIndexed$_nth$arity$2(null,i__26477_26483);
ret.push(x_26484);

var G__26485 = seq__26474_26480;
var G__26486 = chunk__26475_26481;
var G__26487 = count__26476_26482;
var G__26488 = (i__26477_26483 + (1));
seq__26474_26480 = G__26485;
chunk__26475_26481 = G__26486;
count__26476_26482 = G__26487;
i__26477_26483 = G__26488;
continue;
} else {
var temp__4126__auto___26489 = cljs.core.seq(seq__26474_26480);
if(temp__4126__auto___26489){
var seq__26474_26490__$1 = temp__4126__auto___26489;
if(cljs.core.chunked_seq_QMARK_(seq__26474_26490__$1)){
var c__4417__auto___26491 = cljs.core.chunk_first(seq__26474_26490__$1);
var G__26492 = cljs.core.chunk_rest(seq__26474_26490__$1);
var G__26493 = c__4417__auto___26491;
var G__26494 = cljs.core.count(c__4417__auto___26491);
var G__26495 = (0);
seq__26474_26480 = G__26492;
chunk__26475_26481 = G__26493;
count__26476_26482 = G__26494;
i__26477_26483 = G__26495;
continue;
} else {
var x_26496 = cljs.core.first(seq__26474_26490__$1);
ret.push(x_26496);

var G__26497 = cljs.core.next(seq__26474_26490__$1);
var G__26498 = null;
var G__26499 = (0);
var G__26500 = (0);
seq__26474_26480 = G__26497;
chunk__26475_26481 = G__26498;
count__26476_26482 = G__26499;
i__26477_26483 = G__26500;
continue;
}
} else {
}
}
break;
}

var G__26478 = "array";
var G__26479 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__26478,G__26479) : com.cognitect.transit.tagged.call(null,G__26478,G__26479));
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
var seq__26501_26505 = cljs.core.seq(v);
var chunk__26502_26506 = null;
var count__26503_26507 = (0);
var i__26504_26508 = (0);
while(true){
if((i__26504_26508 < count__26503_26507)){
var x_26509 = chunk__26502_26506.cljs$core$IIndexed$_nth$arity$2(null,i__26504_26508);
ret.push(x_26509);

var G__26510 = seq__26501_26505;
var G__26511 = chunk__26502_26506;
var G__26512 = count__26503_26507;
var G__26513 = (i__26504_26508 + (1));
seq__26501_26505 = G__26510;
chunk__26502_26506 = G__26511;
count__26503_26507 = G__26512;
i__26504_26508 = G__26513;
continue;
} else {
var temp__4126__auto___26514 = cljs.core.seq(seq__26501_26505);
if(temp__4126__auto___26514){
var seq__26501_26515__$1 = temp__4126__auto___26514;
if(cljs.core.chunked_seq_QMARK_(seq__26501_26515__$1)){
var c__4417__auto___26516 = cljs.core.chunk_first(seq__26501_26515__$1);
var G__26517 = cljs.core.chunk_rest(seq__26501_26515__$1);
var G__26518 = c__4417__auto___26516;
var G__26519 = cljs.core.count(c__4417__auto___26516);
var G__26520 = (0);
seq__26501_26505 = G__26517;
chunk__26502_26506 = G__26518;
count__26503_26507 = G__26519;
i__26504_26508 = G__26520;
continue;
} else {
var x_26521 = cljs.core.first(seq__26501_26515__$1);
ret.push(x_26521);

var G__26522 = cljs.core.next(seq__26501_26515__$1);
var G__26523 = null;
var G__26524 = (0);
var G__26525 = (0);
seq__26501_26505 = G__26522;
chunk__26502_26506 = G__26523;
count__26503_26507 = G__26524;
i__26504_26508 = G__26525;
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
var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),cljs.core.constant$keyword$72.cljs$core$IFn$_invoke$arity$1(opts)], 0));
var G__26544 = cljs.core.name(type);
var G__26545 = cognitect.transit.opts_merge({"unpack": ((function (G__26544,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(G__26544,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x26549 = cljs.core.clone(handlers);
x26549.forEach = ((function (x26549,G__26544,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__26550 = cljs.core.seq(coll);
var chunk__26551 = null;
var count__26552 = (0);
var i__26553 = (0);
while(true){
if((i__26553 < count__26552)){
var vec__26554 = chunk__26551.cljs$core$IIndexed$_nth$arity$2(null,i__26553);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26554,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26554,(1),null);
var G__26555_26560 = v;
var G__26556_26561 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26555_26560,G__26556_26561) : f.call(null,G__26555_26560,G__26556_26561));

var G__26562 = seq__26550;
var G__26563 = chunk__26551;
var G__26564 = count__26552;
var G__26565 = (i__26553 + (1));
seq__26550 = G__26562;
chunk__26551 = G__26563;
count__26552 = G__26564;
i__26553 = G__26565;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__26550);
if(temp__4126__auto__){
var seq__26550__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26550__$1)){
var c__4417__auto__ = cljs.core.chunk_first(seq__26550__$1);
var G__26566 = cljs.core.chunk_rest(seq__26550__$1);
var G__26567 = c__4417__auto__;
var G__26568 = cljs.core.count(c__4417__auto__);
var G__26569 = (0);
seq__26550 = G__26566;
chunk__26551 = G__26567;
count__26552 = G__26568;
i__26553 = G__26569;
continue;
} else {
var vec__26557 = cljs.core.first(seq__26550__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26557,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26557,(1),null);
var G__26558_26570 = v;
var G__26559_26571 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26558_26570,G__26559_26571) : f.call(null,G__26558_26570,G__26559_26571));

var G__26572 = cljs.core.next(seq__26550__$1);
var G__26573 = null;
var G__26574 = (0);
var G__26575 = (0);
seq__26550 = G__26572;
chunk__26551 = G__26573;
count__26552 = G__26574;
i__26553 = G__26575;
continue;
}
} else {
return null;
}
}
break;
}
});})(x26549,G__26544,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x26549;
})(), "objectBuilder": ((function (G__26544,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv(((function (G__26544,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__26546 = obj;
G__26546.push((function (){var G__26547 = k;
return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__26547) : kfn.call(null,G__26547));
})(),(function (){var G__26548 = v;
return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__26548) : vfn.call(null,G__26548));
})());

return G__26546;
});})(G__26544,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(G__26544,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$72)));
return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__26544,G__26545) : com.cognitect.transit.writer.call(null,G__26544,G__26545));
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
if(typeof cognitect.transit.t26590 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t26590 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta26591){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta26591 = meta26591;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t26590.prototype.tag = (function (o){
var self__ = this;
var _ = this;
var G__26593 = o;
return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__26593) : self__.tag_fn.call(null,G__26593));
});

cognitect.transit.t26590.prototype.rep = (function (o){
var self__ = this;
var _ = this;
var G__26594 = o;
return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__26594) : self__.rep_fn.call(null,G__26594));
});

cognitect.transit.t26590.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
var G__26595 = o;
return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__26595) : self__.str_rep_fn.call(null,G__26595));
} else {
return null;
}
});

cognitect.transit.t26590.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else {
return null;
}
});

cognitect.transit.t26590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26592){
var self__ = this;
var _26592__$1 = this;
return self__.meta26591;
});

cognitect.transit.t26590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26592,meta26591__$1){
var self__ = this;
var _26592__$1 = this;
return (new cognitect.transit.t26590(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta26591__$1));
});

cognitect.transit.t26590.cljs$lang$type = true;

cognitect.transit.t26590.cljs$lang$ctorStr = "cognitect.transit/t26590";

cognitect.transit.t26590.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cognitect.transit/t26590");
});

cognitect.transit.__GT_t26590 = (function __GT_t26590(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta26591){
return (new cognitect.transit.t26590(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta26591));
});

}

return (new cognitect.transit.t26590(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,79,cljs.core.constant$keyword$9,259,cljs.core.constant$keyword$10,6,cljs.core.constant$keyword$11,254,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cognitect/transit.cljs"], null)));
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
var G__26598 = tag;
var G__26599 = rep;
return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__26598,G__26599) : com.cognitect.transit.types.taggedValue.call(null,G__26598,G__26599));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){
var G__26601 = x;
return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__26601) : com.cognitect.transit.types.isTaggedValue.call(null,G__26601));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){
var G__26603 = s;
return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__26603) : com.cognitect.transit.types.integer.call(null,G__26603));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){
var G__26605 = x;
return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__26605) : com.cognitect.transit.types.isInteger.call(null,G__26605));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){
var G__26607 = s;
return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__26607) : com.cognitect.transit.types.bigInteger.call(null,G__26607));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){
var G__26609 = x;
return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__26609) : com.cognitect.transit.types.isBigInteger.call(null,G__26609));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){
var G__26611 = s;
return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__26611) : com.cognitect.transit.types.bigDecimalValue.call(null,G__26611));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){
var G__26613 = x;
return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__26613) : com.cognitect.transit.types.isBigDecimal.call(null,G__26613));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){
var G__26615 = s;
return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__26615) : com.cognitect.transit.types.uri.call(null,G__26615));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){
var G__26617 = x;
return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__26617) : com.cognitect.transit.types.isURI.call(null,G__26617));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){
var G__26619 = s;
return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__26619) : com.cognitect.transit.types.uuid.call(null,G__26619));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){
var G__26621 = x;
return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__26621) : com.cognitect.transit.types.isUUID.call(null,G__26621));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){
var G__26623 = s;
return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__26623) : com.cognitect.transit.types.binary.call(null,G__26623));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){
var G__26625 = x;
return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__26625) : com.cognitect.transit.types.isBinary.call(null,G__26625));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){
var G__26627 = x;
return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__26627) : com.cognitect.transit.types.quoted.call(null,G__26627));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){
var G__26629 = x;
return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__26629) : com.cognitect.transit.types.isQuoted.call(null,G__26629));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){
var G__26631 = x;
return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__26631) : com.cognitect.transit.types.link.call(null,G__26631));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){
var G__26633 = x;
return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__26633) : com.cognitect.transit.types.isLink.call(null,G__26633));
});
