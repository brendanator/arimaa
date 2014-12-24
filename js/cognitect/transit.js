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
var G__26629 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__26629) : com.cognitect.transit.eq.hashCode.call(null,G__26629));
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__26630 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__26630) : com.cognitect.transit.eq.hashCode.call(null,G__26630));
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__26631 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__26631) : com.cognitect.transit.eq.hashCode.call(null,G__26631));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){
var seq__26636_26640 = cljs.core.seq(cljs.core.js_keys(b));
var chunk__26637_26641 = null;
var count__26638_26642 = (0);
var i__26639_26643 = (0);
while(true){
if((i__26639_26643 < count__26638_26642)){
var k_26644 = chunk__26637_26641.cljs$core$IIndexed$_nth$arity$2(null,i__26639_26643);
var v_26645 = (b[k_26644]);
(a[k_26644] = v_26645);

var G__26646 = seq__26636_26640;
var G__26647 = chunk__26637_26641;
var G__26648 = count__26638_26642;
var G__26649 = (i__26639_26643 + (1));
seq__26636_26640 = G__26646;
chunk__26637_26641 = G__26647;
count__26638_26642 = G__26648;
i__26639_26643 = G__26649;
continue;
} else {
var temp__4126__auto___26650 = cljs.core.seq(seq__26636_26640);
if(temp__4126__auto___26650){
var seq__26636_26651__$1 = temp__4126__auto___26650;
if(cljs.core.chunked_seq_QMARK_(seq__26636_26651__$1)){
var c__4417__auto___26652 = cljs.core.chunk_first(seq__26636_26651__$1);
var G__26653 = cljs.core.chunk_rest(seq__26636_26651__$1);
var G__26654 = c__4417__auto___26652;
var G__26655 = cljs.core.count(c__4417__auto___26652);
var G__26656 = (0);
seq__26636_26640 = G__26653;
chunk__26637_26641 = G__26654;
count__26638_26642 = G__26655;
i__26639_26643 = G__26656;
continue;
} else {
var k_26657 = cljs.core.first(seq__26636_26651__$1);
var v_26658 = (b[k_26657]);
(a[k_26657] = v_26658);

var G__26659 = cljs.core.next(seq__26636_26651__$1);
var G__26660 = null;
var G__26661 = (0);
var G__26662 = (0);
seq__26636_26640 = G__26659;
chunk__26637_26641 = G__26660;
count__26638_26642 = G__26661;
i__26639_26643 = G__26662;
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
var G__26663 = arr;
var G__26664 = true;
var G__26665 = true;
return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__26663,G__26664,G__26665) : cljs.core.PersistentArrayMap.fromArray.call(null,G__26663,G__26664,G__26665));
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
var G__26666 = arr;
var G__26667 = true;
return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__26666,G__26667) : cljs.core.PersistentVector.fromArray.call(null,G__26666,G__26667));
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
var G__26672 = cljs.core.name(type);
var G__26673 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, ["$",((function (G__26672){
return (function (v){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__26672))
,":",((function (G__26672){
return (function (v){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__26672))
,"set",((function (G__26672){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__26672))
,"list",((function (G__26672){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__26672))
,"cmap",((function (G__26672){
return (function (v){
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__26674 = (i + (2));
var G__26675 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__26674;
ret = G__26675;
continue;
} else {
return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__26672))
], null),cljs.core.constant$keyword$75.cljs$core$IFn$_invoke$arity$1(opts)], 0)))},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$75)));
return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__26672,G__26673) : com.cognitect.transit.reader.call(null,G__26672,G__26673));
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
var seq__26676_26682 = cljs.core.seq(v);
var chunk__26677_26683 = null;
var count__26678_26684 = (0);
var i__26679_26685 = (0);
while(true){
if((i__26679_26685 < count__26678_26684)){
var x_26686 = chunk__26677_26683.cljs$core$IIndexed$_nth$arity$2(null,i__26679_26685);
ret.push(x_26686);

var G__26687 = seq__26676_26682;
var G__26688 = chunk__26677_26683;
var G__26689 = count__26678_26684;
var G__26690 = (i__26679_26685 + (1));
seq__26676_26682 = G__26687;
chunk__26677_26683 = G__26688;
count__26678_26684 = G__26689;
i__26679_26685 = G__26690;
continue;
} else {
var temp__4126__auto___26691 = cljs.core.seq(seq__26676_26682);
if(temp__4126__auto___26691){
var seq__26676_26692__$1 = temp__4126__auto___26691;
if(cljs.core.chunked_seq_QMARK_(seq__26676_26692__$1)){
var c__4417__auto___26693 = cljs.core.chunk_first(seq__26676_26692__$1);
var G__26694 = cljs.core.chunk_rest(seq__26676_26692__$1);
var G__26695 = c__4417__auto___26693;
var G__26696 = cljs.core.count(c__4417__auto___26693);
var G__26697 = (0);
seq__26676_26682 = G__26694;
chunk__26677_26683 = G__26695;
count__26678_26684 = G__26696;
i__26679_26685 = G__26697;
continue;
} else {
var x_26698 = cljs.core.first(seq__26676_26692__$1);
ret.push(x_26698);

var G__26699 = cljs.core.next(seq__26676_26692__$1);
var G__26700 = null;
var G__26701 = (0);
var G__26702 = (0);
seq__26676_26682 = G__26699;
chunk__26677_26683 = G__26700;
count__26678_26684 = G__26701;
i__26679_26685 = G__26702;
continue;
}
} else {
}
}
break;
}

var G__26680 = "array";
var G__26681 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__26680,G__26681) : com.cognitect.transit.tagged.call(null,G__26680,G__26681));
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
var seq__26703_26709 = cljs.core.seq(v);
var chunk__26704_26710 = null;
var count__26705_26711 = (0);
var i__26706_26712 = (0);
while(true){
if((i__26706_26712 < count__26705_26711)){
var x_26713 = chunk__26704_26710.cljs$core$IIndexed$_nth$arity$2(null,i__26706_26712);
ret.push(x_26713);

var G__26714 = seq__26703_26709;
var G__26715 = chunk__26704_26710;
var G__26716 = count__26705_26711;
var G__26717 = (i__26706_26712 + (1));
seq__26703_26709 = G__26714;
chunk__26704_26710 = G__26715;
count__26705_26711 = G__26716;
i__26706_26712 = G__26717;
continue;
} else {
var temp__4126__auto___26718 = cljs.core.seq(seq__26703_26709);
if(temp__4126__auto___26718){
var seq__26703_26719__$1 = temp__4126__auto___26718;
if(cljs.core.chunked_seq_QMARK_(seq__26703_26719__$1)){
var c__4417__auto___26720 = cljs.core.chunk_first(seq__26703_26719__$1);
var G__26721 = cljs.core.chunk_rest(seq__26703_26719__$1);
var G__26722 = c__4417__auto___26720;
var G__26723 = cljs.core.count(c__4417__auto___26720);
var G__26724 = (0);
seq__26703_26709 = G__26721;
chunk__26704_26710 = G__26722;
count__26705_26711 = G__26723;
i__26706_26712 = G__26724;
continue;
} else {
var x_26725 = cljs.core.first(seq__26703_26719__$1);
ret.push(x_26725);

var G__26726 = cljs.core.next(seq__26703_26719__$1);
var G__26727 = null;
var G__26728 = (0);
var G__26729 = (0);
seq__26703_26709 = G__26726;
chunk__26704_26710 = G__26727;
count__26705_26711 = G__26728;
i__26706_26712 = G__26729;
continue;
}
} else {
}
}
break;
}

var G__26707 = "array";
var G__26708 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__26707,G__26708) : com.cognitect.transit.tagged.call(null,G__26707,G__26708));
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
var seq__26730_26734 = cljs.core.seq(v);
var chunk__26731_26735 = null;
var count__26732_26736 = (0);
var i__26733_26737 = (0);
while(true){
if((i__26733_26737 < count__26732_26736)){
var x_26738 = chunk__26731_26735.cljs$core$IIndexed$_nth$arity$2(null,i__26733_26737);
ret.push(x_26738);

var G__26739 = seq__26730_26734;
var G__26740 = chunk__26731_26735;
var G__26741 = count__26732_26736;
var G__26742 = (i__26733_26737 + (1));
seq__26730_26734 = G__26739;
chunk__26731_26735 = G__26740;
count__26732_26736 = G__26741;
i__26733_26737 = G__26742;
continue;
} else {
var temp__4126__auto___26743 = cljs.core.seq(seq__26730_26734);
if(temp__4126__auto___26743){
var seq__26730_26744__$1 = temp__4126__auto___26743;
if(cljs.core.chunked_seq_QMARK_(seq__26730_26744__$1)){
var c__4417__auto___26745 = cljs.core.chunk_first(seq__26730_26744__$1);
var G__26746 = cljs.core.chunk_rest(seq__26730_26744__$1);
var G__26747 = c__4417__auto___26745;
var G__26748 = cljs.core.count(c__4417__auto___26745);
var G__26749 = (0);
seq__26730_26734 = G__26746;
chunk__26731_26735 = G__26747;
count__26732_26736 = G__26748;
i__26733_26737 = G__26749;
continue;
} else {
var x_26750 = cljs.core.first(seq__26730_26744__$1);
ret.push(x_26750);

var G__26751 = cljs.core.next(seq__26730_26744__$1);
var G__26752 = null;
var G__26753 = (0);
var G__26754 = (0);
seq__26730_26734 = G__26751;
chunk__26731_26735 = G__26752;
count__26732_26736 = G__26753;
i__26733_26737 = G__26754;
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
var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),cljs.core.constant$keyword$75.cljs$core$IFn$_invoke$arity$1(opts)], 0));
var G__26773 = cljs.core.name(type);
var G__26774 = cognitect.transit.opts_merge({"unpack": ((function (G__26773,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(G__26773,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x26778 = cljs.core.clone(handlers);
x26778.forEach = ((function (x26778,G__26773,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__26779 = cljs.core.seq(coll);
var chunk__26780 = null;
var count__26781 = (0);
var i__26782 = (0);
while(true){
if((i__26782 < count__26781)){
var vec__26783 = chunk__26780.cljs$core$IIndexed$_nth$arity$2(null,i__26782);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26783,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26783,(1),null);
var G__26784_26789 = v;
var G__26785_26790 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26784_26789,G__26785_26790) : f.call(null,G__26784_26789,G__26785_26790));

var G__26791 = seq__26779;
var G__26792 = chunk__26780;
var G__26793 = count__26781;
var G__26794 = (i__26782 + (1));
seq__26779 = G__26791;
chunk__26780 = G__26792;
count__26781 = G__26793;
i__26782 = G__26794;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__26779);
if(temp__4126__auto__){
var seq__26779__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26779__$1)){
var c__4417__auto__ = cljs.core.chunk_first(seq__26779__$1);
var G__26795 = cljs.core.chunk_rest(seq__26779__$1);
var G__26796 = c__4417__auto__;
var G__26797 = cljs.core.count(c__4417__auto__);
var G__26798 = (0);
seq__26779 = G__26795;
chunk__26780 = G__26796;
count__26781 = G__26797;
i__26782 = G__26798;
continue;
} else {
var vec__26786 = cljs.core.first(seq__26779__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26786,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26786,(1),null);
var G__26787_26799 = v;
var G__26788_26800 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26787_26799,G__26788_26800) : f.call(null,G__26787_26799,G__26788_26800));

var G__26801 = cljs.core.next(seq__26779__$1);
var G__26802 = null;
var G__26803 = (0);
var G__26804 = (0);
seq__26779 = G__26801;
chunk__26780 = G__26802;
count__26781 = G__26803;
i__26782 = G__26804;
continue;
}
} else {
return null;
}
}
break;
}
});})(x26778,G__26773,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x26778;
})(), "objectBuilder": ((function (G__26773,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv(((function (G__26773,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__26775 = obj;
G__26775.push((function (){var G__26776 = k;
return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__26776) : kfn.call(null,G__26776));
})(),(function (){var G__26777 = v;
return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__26777) : vfn.call(null,G__26777));
})());

return G__26775;
});})(G__26773,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(G__26773,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$75)));
return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__26773,G__26774) : com.cognitect.transit.writer.call(null,G__26773,G__26774));
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
if(typeof cognitect.transit.t26819 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t26819 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta26820){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta26820 = meta26820;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t26819.prototype.tag = (function (o){
var self__ = this;
var _ = this;
var G__26822 = o;
return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__26822) : self__.tag_fn.call(null,G__26822));
});

cognitect.transit.t26819.prototype.rep = (function (o){
var self__ = this;
var _ = this;
var G__26823 = o;
return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__26823) : self__.rep_fn.call(null,G__26823));
});

cognitect.transit.t26819.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
var G__26824 = o;
return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__26824) : self__.str_rep_fn.call(null,G__26824));
} else {
return null;
}
});

cognitect.transit.t26819.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else {
return null;
}
});

cognitect.transit.t26819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26821){
var self__ = this;
var _26821__$1 = this;
return self__.meta26820;
});

cognitect.transit.t26819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26821,meta26820__$1){
var self__ = this;
var _26821__$1 = this;
return (new cognitect.transit.t26819(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta26820__$1));
});

cognitect.transit.t26819.cljs$lang$type = true;

cognitect.transit.t26819.cljs$lang$ctorStr = "cognitect.transit/t26819";

cognitect.transit.t26819.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cognitect.transit/t26819");
});

cognitect.transit.__GT_t26819 = (function __GT_t26819(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta26820){
return (new cognitect.transit.t26819(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta26820));
});

}

return (new cognitect.transit.t26819(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,79,cljs.core.constant$keyword$9,259,cljs.core.constant$keyword$10,6,cljs.core.constant$keyword$11,254,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cognitect/transit.cljs"], null)));
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
var G__26827 = tag;
var G__26828 = rep;
return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__26827,G__26828) : com.cognitect.transit.types.taggedValue.call(null,G__26827,G__26828));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){
var G__26830 = x;
return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__26830) : com.cognitect.transit.types.isTaggedValue.call(null,G__26830));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){
var G__26832 = s;
return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__26832) : com.cognitect.transit.types.integer.call(null,G__26832));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){
var G__26834 = x;
return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__26834) : com.cognitect.transit.types.isInteger.call(null,G__26834));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){
var G__26836 = s;
return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__26836) : com.cognitect.transit.types.bigInteger.call(null,G__26836));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){
var G__26838 = x;
return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__26838) : com.cognitect.transit.types.isBigInteger.call(null,G__26838));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){
var G__26840 = s;
return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__26840) : com.cognitect.transit.types.bigDecimalValue.call(null,G__26840));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){
var G__26842 = x;
return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__26842) : com.cognitect.transit.types.isBigDecimal.call(null,G__26842));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){
var G__26844 = s;
return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__26844) : com.cognitect.transit.types.uri.call(null,G__26844));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){
var G__26846 = x;
return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__26846) : com.cognitect.transit.types.isURI.call(null,G__26846));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){
var G__26848 = s;
return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__26848) : com.cognitect.transit.types.uuid.call(null,G__26848));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){
var G__26850 = x;
return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__26850) : com.cognitect.transit.types.isUUID.call(null,G__26850));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){
var G__26852 = s;
return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__26852) : com.cognitect.transit.types.binary.call(null,G__26852));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){
var G__26854 = x;
return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__26854) : com.cognitect.transit.types.isBinary.call(null,G__26854));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){
var G__26856 = x;
return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__26856) : com.cognitect.transit.types.quoted.call(null,G__26856));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){
var G__26858 = x;
return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__26858) : com.cognitect.transit.types.isQuoted.call(null,G__26858));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){
var G__26860 = x;
return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__26860) : com.cognitect.transit.types.link.call(null,G__26860));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){
var G__26862 = x;
return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__26862) : com.cognitect.transit.types.isLink.call(null,G__26862));
});
