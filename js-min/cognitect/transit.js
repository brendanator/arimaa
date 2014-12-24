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
var G__26391 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__26391) : com.cognitect.transit.eq.hashCode.call(null,G__26391));
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__26392 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__26392) : com.cognitect.transit.eq.hashCode.call(null,G__26392));
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__26393 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__26393) : com.cognitect.transit.eq.hashCode.call(null,G__26393));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){
var seq__26398_26402 = cljs.core.seq(cljs.core.js_keys(b));
var chunk__26399_26403 = null;
var count__26400_26404 = (0);
var i__26401_26405 = (0);
while(true){
if((i__26401_26405 < count__26400_26404)){
var k_26406 = chunk__26399_26403.cljs$core$IIndexed$_nth$arity$2(null,i__26401_26405);
var v_26407 = (b[k_26406]);
(a[k_26406] = v_26407);

var G__26408 = seq__26398_26402;
var G__26409 = chunk__26399_26403;
var G__26410 = count__26400_26404;
var G__26411 = (i__26401_26405 + (1));
seq__26398_26402 = G__26408;
chunk__26399_26403 = G__26409;
count__26400_26404 = G__26410;
i__26401_26405 = G__26411;
continue;
} else {
var temp__4126__auto___26412 = cljs.core.seq(seq__26398_26402);
if(temp__4126__auto___26412){
var seq__26398_26413__$1 = temp__4126__auto___26412;
if(cljs.core.chunked_seq_QMARK_(seq__26398_26413__$1)){
var c__4417__auto___26414 = cljs.core.chunk_first(seq__26398_26413__$1);
var G__26415 = cljs.core.chunk_rest(seq__26398_26413__$1);
var G__26416 = c__4417__auto___26414;
var G__26417 = cljs.core.count(c__4417__auto___26414);
var G__26418 = (0);
seq__26398_26402 = G__26415;
chunk__26399_26403 = G__26416;
count__26400_26404 = G__26417;
i__26401_26405 = G__26418;
continue;
} else {
var k_26419 = cljs.core.first(seq__26398_26413__$1);
var v_26420 = (b[k_26419]);
(a[k_26419] = v_26420);

var G__26421 = cljs.core.next(seq__26398_26413__$1);
var G__26422 = null;
var G__26423 = (0);
var G__26424 = (0);
seq__26398_26402 = G__26421;
chunk__26399_26403 = G__26422;
count__26400_26404 = G__26423;
i__26401_26405 = G__26424;
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
var G__26425 = arr;
var G__26426 = true;
var G__26427 = true;
return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__26425,G__26426,G__26427) : cljs.core.PersistentArrayMap.fromArray.call(null,G__26425,G__26426,G__26427));
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
var G__26428 = arr;
var G__26429 = true;
return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__26428,G__26429) : cljs.core.PersistentVector.fromArray.call(null,G__26428,G__26429));
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
var G__26434 = cljs.core.name(type);
var G__26435 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, ["$",((function (G__26434){
return (function (v){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__26434))
,":",((function (G__26434){
return (function (v){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__26434))
,"set",((function (G__26434){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__26434))
,"list",((function (G__26434){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__26434))
,"cmap",((function (G__26434){
return (function (v){
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__26436 = (i + (2));
var G__26437 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__26436;
ret = G__26437;
continue;
} else {
return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__26434))
], null),cljs.core.constant$keyword$72.cljs$core$IFn$_invoke$arity$1(opts)], 0)))},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$72)));
return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__26434,G__26435) : com.cognitect.transit.reader.call(null,G__26434,G__26435));
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
var seq__26438_26444 = cljs.core.seq(v);
var chunk__26439_26445 = null;
var count__26440_26446 = (0);
var i__26441_26447 = (0);
while(true){
if((i__26441_26447 < count__26440_26446)){
var x_26448 = chunk__26439_26445.cljs$core$IIndexed$_nth$arity$2(null,i__26441_26447);
ret.push(x_26448);

var G__26449 = seq__26438_26444;
var G__26450 = chunk__26439_26445;
var G__26451 = count__26440_26446;
var G__26452 = (i__26441_26447 + (1));
seq__26438_26444 = G__26449;
chunk__26439_26445 = G__26450;
count__26440_26446 = G__26451;
i__26441_26447 = G__26452;
continue;
} else {
var temp__4126__auto___26453 = cljs.core.seq(seq__26438_26444);
if(temp__4126__auto___26453){
var seq__26438_26454__$1 = temp__4126__auto___26453;
if(cljs.core.chunked_seq_QMARK_(seq__26438_26454__$1)){
var c__4417__auto___26455 = cljs.core.chunk_first(seq__26438_26454__$1);
var G__26456 = cljs.core.chunk_rest(seq__26438_26454__$1);
var G__26457 = c__4417__auto___26455;
var G__26458 = cljs.core.count(c__4417__auto___26455);
var G__26459 = (0);
seq__26438_26444 = G__26456;
chunk__26439_26445 = G__26457;
count__26440_26446 = G__26458;
i__26441_26447 = G__26459;
continue;
} else {
var x_26460 = cljs.core.first(seq__26438_26454__$1);
ret.push(x_26460);

var G__26461 = cljs.core.next(seq__26438_26454__$1);
var G__26462 = null;
var G__26463 = (0);
var G__26464 = (0);
seq__26438_26444 = G__26461;
chunk__26439_26445 = G__26462;
count__26440_26446 = G__26463;
i__26441_26447 = G__26464;
continue;
}
} else {
}
}
break;
}

var G__26442 = "array";
var G__26443 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__26442,G__26443) : com.cognitect.transit.tagged.call(null,G__26442,G__26443));
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
var seq__26465_26471 = cljs.core.seq(v);
var chunk__26466_26472 = null;
var count__26467_26473 = (0);
var i__26468_26474 = (0);
while(true){
if((i__26468_26474 < count__26467_26473)){
var x_26475 = chunk__26466_26472.cljs$core$IIndexed$_nth$arity$2(null,i__26468_26474);
ret.push(x_26475);

var G__26476 = seq__26465_26471;
var G__26477 = chunk__26466_26472;
var G__26478 = count__26467_26473;
var G__26479 = (i__26468_26474 + (1));
seq__26465_26471 = G__26476;
chunk__26466_26472 = G__26477;
count__26467_26473 = G__26478;
i__26468_26474 = G__26479;
continue;
} else {
var temp__4126__auto___26480 = cljs.core.seq(seq__26465_26471);
if(temp__4126__auto___26480){
var seq__26465_26481__$1 = temp__4126__auto___26480;
if(cljs.core.chunked_seq_QMARK_(seq__26465_26481__$1)){
var c__4417__auto___26482 = cljs.core.chunk_first(seq__26465_26481__$1);
var G__26483 = cljs.core.chunk_rest(seq__26465_26481__$1);
var G__26484 = c__4417__auto___26482;
var G__26485 = cljs.core.count(c__4417__auto___26482);
var G__26486 = (0);
seq__26465_26471 = G__26483;
chunk__26466_26472 = G__26484;
count__26467_26473 = G__26485;
i__26468_26474 = G__26486;
continue;
} else {
var x_26487 = cljs.core.first(seq__26465_26481__$1);
ret.push(x_26487);

var G__26488 = cljs.core.next(seq__26465_26481__$1);
var G__26489 = null;
var G__26490 = (0);
var G__26491 = (0);
seq__26465_26471 = G__26488;
chunk__26466_26472 = G__26489;
count__26467_26473 = G__26490;
i__26468_26474 = G__26491;
continue;
}
} else {
}
}
break;
}

var G__26469 = "array";
var G__26470 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__26469,G__26470) : com.cognitect.transit.tagged.call(null,G__26469,G__26470));
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
var seq__26492_26496 = cljs.core.seq(v);
var chunk__26493_26497 = null;
var count__26494_26498 = (0);
var i__26495_26499 = (0);
while(true){
if((i__26495_26499 < count__26494_26498)){
var x_26500 = chunk__26493_26497.cljs$core$IIndexed$_nth$arity$2(null,i__26495_26499);
ret.push(x_26500);

var G__26501 = seq__26492_26496;
var G__26502 = chunk__26493_26497;
var G__26503 = count__26494_26498;
var G__26504 = (i__26495_26499 + (1));
seq__26492_26496 = G__26501;
chunk__26493_26497 = G__26502;
count__26494_26498 = G__26503;
i__26495_26499 = G__26504;
continue;
} else {
var temp__4126__auto___26505 = cljs.core.seq(seq__26492_26496);
if(temp__4126__auto___26505){
var seq__26492_26506__$1 = temp__4126__auto___26505;
if(cljs.core.chunked_seq_QMARK_(seq__26492_26506__$1)){
var c__4417__auto___26507 = cljs.core.chunk_first(seq__26492_26506__$1);
var G__26508 = cljs.core.chunk_rest(seq__26492_26506__$1);
var G__26509 = c__4417__auto___26507;
var G__26510 = cljs.core.count(c__4417__auto___26507);
var G__26511 = (0);
seq__26492_26496 = G__26508;
chunk__26493_26497 = G__26509;
count__26494_26498 = G__26510;
i__26495_26499 = G__26511;
continue;
} else {
var x_26512 = cljs.core.first(seq__26492_26506__$1);
ret.push(x_26512);

var G__26513 = cljs.core.next(seq__26492_26506__$1);
var G__26514 = null;
var G__26515 = (0);
var G__26516 = (0);
seq__26492_26496 = G__26513;
chunk__26493_26497 = G__26514;
count__26494_26498 = G__26515;
i__26495_26499 = G__26516;
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
var G__26535 = cljs.core.name(type);
var G__26536 = cognitect.transit.opts_merge({"unpack": ((function (G__26535,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(G__26535,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x26540 = cljs.core.clone(handlers);
x26540.forEach = ((function (x26540,G__26535,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__26541 = cljs.core.seq(coll);
var chunk__26542 = null;
var count__26543 = (0);
var i__26544 = (0);
while(true){
if((i__26544 < count__26543)){
var vec__26545 = chunk__26542.cljs$core$IIndexed$_nth$arity$2(null,i__26544);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26545,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26545,(1),null);
var G__26546_26551 = v;
var G__26547_26552 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26546_26551,G__26547_26552) : f.call(null,G__26546_26551,G__26547_26552));

var G__26553 = seq__26541;
var G__26554 = chunk__26542;
var G__26555 = count__26543;
var G__26556 = (i__26544 + (1));
seq__26541 = G__26553;
chunk__26542 = G__26554;
count__26543 = G__26555;
i__26544 = G__26556;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__26541);
if(temp__4126__auto__){
var seq__26541__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26541__$1)){
var c__4417__auto__ = cljs.core.chunk_first(seq__26541__$1);
var G__26557 = cljs.core.chunk_rest(seq__26541__$1);
var G__26558 = c__4417__auto__;
var G__26559 = cljs.core.count(c__4417__auto__);
var G__26560 = (0);
seq__26541 = G__26557;
chunk__26542 = G__26558;
count__26543 = G__26559;
i__26544 = G__26560;
continue;
} else {
var vec__26548 = cljs.core.first(seq__26541__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26548,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26548,(1),null);
var G__26549_26561 = v;
var G__26550_26562 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26549_26561,G__26550_26562) : f.call(null,G__26549_26561,G__26550_26562));

var G__26563 = cljs.core.next(seq__26541__$1);
var G__26564 = null;
var G__26565 = (0);
var G__26566 = (0);
seq__26541 = G__26563;
chunk__26542 = G__26564;
count__26543 = G__26565;
i__26544 = G__26566;
continue;
}
} else {
return null;
}
}
break;
}
});})(x26540,G__26535,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x26540;
})(), "objectBuilder": ((function (G__26535,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv(((function (G__26535,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__26537 = obj;
G__26537.push((function (){var G__26538 = k;
return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__26538) : kfn.call(null,G__26538));
})(),(function (){var G__26539 = v;
return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__26539) : vfn.call(null,G__26539));
})());

return G__26537;
});})(G__26535,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(G__26535,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$72)));
return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__26535,G__26536) : com.cognitect.transit.writer.call(null,G__26535,G__26536));
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
if(typeof cognitect.transit.t26581 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t26581 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta26582){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta26582 = meta26582;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t26581.prototype.tag = (function (o){
var self__ = this;
var _ = this;
var G__26584 = o;
return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__26584) : self__.tag_fn.call(null,G__26584));
});

cognitect.transit.t26581.prototype.rep = (function (o){
var self__ = this;
var _ = this;
var G__26585 = o;
return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__26585) : self__.rep_fn.call(null,G__26585));
});

cognitect.transit.t26581.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
var G__26586 = o;
return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__26586) : self__.str_rep_fn.call(null,G__26586));
} else {
return null;
}
});

cognitect.transit.t26581.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else {
return null;
}
});

cognitect.transit.t26581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26583){
var self__ = this;
var _26583__$1 = this;
return self__.meta26582;
});

cognitect.transit.t26581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26583,meta26582__$1){
var self__ = this;
var _26583__$1 = this;
return (new cognitect.transit.t26581(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta26582__$1));
});

cognitect.transit.t26581.cljs$lang$type = true;

cognitect.transit.t26581.cljs$lang$ctorStr = "cognitect.transit/t26581";

cognitect.transit.t26581.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cognitect.transit/t26581");
});

cognitect.transit.__GT_t26581 = (function __GT_t26581(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta26582){
return (new cognitect.transit.t26581(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta26582));
});

}

return (new cognitect.transit.t26581(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,79,cljs.core.constant$keyword$9,259,cljs.core.constant$keyword$10,6,cljs.core.constant$keyword$11,254,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/resources/public/js-min/cognitect/transit.cljs"], null)));
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
var G__26589 = tag;
var G__26590 = rep;
return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__26589,G__26590) : com.cognitect.transit.types.taggedValue.call(null,G__26589,G__26590));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){
var G__26592 = x;
return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__26592) : com.cognitect.transit.types.isTaggedValue.call(null,G__26592));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){
var G__26594 = s;
return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__26594) : com.cognitect.transit.types.integer.call(null,G__26594));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){
var G__26596 = x;
return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__26596) : com.cognitect.transit.types.isInteger.call(null,G__26596));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){
var G__26598 = s;
return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__26598) : com.cognitect.transit.types.bigInteger.call(null,G__26598));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){
var G__26600 = x;
return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__26600) : com.cognitect.transit.types.isBigInteger.call(null,G__26600));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){
var G__26602 = s;
return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__26602) : com.cognitect.transit.types.bigDecimalValue.call(null,G__26602));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){
var G__26604 = x;
return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__26604) : com.cognitect.transit.types.isBigDecimal.call(null,G__26604));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){
var G__26606 = s;
return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__26606) : com.cognitect.transit.types.uri.call(null,G__26606));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){
var G__26608 = x;
return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__26608) : com.cognitect.transit.types.isURI.call(null,G__26608));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){
var G__26610 = s;
return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__26610) : com.cognitect.transit.types.uuid.call(null,G__26610));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){
var G__26612 = x;
return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__26612) : com.cognitect.transit.types.isUUID.call(null,G__26612));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){
var G__26614 = s;
return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__26614) : com.cognitect.transit.types.binary.call(null,G__26614));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){
var G__26616 = x;
return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__26616) : com.cognitect.transit.types.isBinary.call(null,G__26616));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){
var G__26618 = x;
return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__26618) : com.cognitect.transit.types.quoted.call(null,G__26618));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){
var G__26620 = x;
return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__26620) : com.cognitect.transit.types.isQuoted.call(null,G__26620));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){
var G__26622 = x;
return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__26622) : com.cognitect.transit.types.link.call(null,G__26622));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){
var G__26624 = x;
return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__26624) : com.cognitect.transit.types.isLink.call(null,G__26624));
});
