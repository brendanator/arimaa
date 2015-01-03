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
var G__23624 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__23624) : com.cognitect.transit.eq.hashCode.call(null,G__23624));
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__23625 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__23625) : com.cognitect.transit.eq.hashCode.call(null,G__23625));
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__23626 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__23626) : com.cognitect.transit.eq.hashCode.call(null,G__23626));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){
var seq__23631_23635 = cljs.core.seq(cljs.core.js_keys(b));
var chunk__23632_23636 = null;
var count__23633_23637 = (0);
var i__23634_23638 = (0);
while(true){
if((i__23634_23638 < count__23633_23637)){
var k_23639 = chunk__23632_23636.cljs$core$IIndexed$_nth$arity$2(null,i__23634_23638);
var v_23640 = (b[k_23639]);
(a[k_23639] = v_23640);

var G__23641 = seq__23631_23635;
var G__23642 = chunk__23632_23636;
var G__23643 = count__23633_23637;
var G__23644 = (i__23634_23638 + (1));
seq__23631_23635 = G__23641;
chunk__23632_23636 = G__23642;
count__23633_23637 = G__23643;
i__23634_23638 = G__23644;
continue;
} else {
var temp__4126__auto___23645 = cljs.core.seq(seq__23631_23635);
if(temp__4126__auto___23645){
var seq__23631_23646__$1 = temp__4126__auto___23645;
if(cljs.core.chunked_seq_QMARK_(seq__23631_23646__$1)){
var c__4417__auto___23647 = cljs.core.chunk_first(seq__23631_23646__$1);
var G__23648 = cljs.core.chunk_rest(seq__23631_23646__$1);
var G__23649 = c__4417__auto___23647;
var G__23650 = cljs.core.count(c__4417__auto___23647);
var G__23651 = (0);
seq__23631_23635 = G__23648;
chunk__23632_23636 = G__23649;
count__23633_23637 = G__23650;
i__23634_23638 = G__23651;
continue;
} else {
var k_23652 = cljs.core.first(seq__23631_23646__$1);
var v_23653 = (b[k_23652]);
(a[k_23652] = v_23653);

var G__23654 = cljs.core.next(seq__23631_23646__$1);
var G__23655 = null;
var G__23656 = (0);
var G__23657 = (0);
seq__23631_23635 = G__23654;
chunk__23632_23636 = G__23655;
count__23633_23637 = G__23656;
i__23634_23638 = G__23657;
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
var G__23658 = arr;
var G__23659 = true;
var G__23660 = true;
return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__23658,G__23659,G__23660) : cljs.core.PersistentArrayMap.fromArray.call(null,G__23658,G__23659,G__23660));
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
var G__23661 = arr;
var G__23662 = true;
return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__23661,G__23662) : cljs.core.PersistentVector.fromArray.call(null,G__23661,G__23662));
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
var G__23667 = cljs.core.name(type);
var G__23668 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, ["$",((function (G__23667){
return (function (v){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__23667))
,":",((function (G__23667){
return (function (v){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__23667))
,"set",((function (G__23667){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__23667))
,"list",((function (G__23667){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__23667))
,"cmap",((function (G__23667){
return (function (v){
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__23669 = (i + (2));
var G__23670 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__23669;
ret = G__23670;
continue;
} else {
return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__23667))
], null),cljs.core.constant$keyword$84.cljs$core$IFn$_invoke$arity$1(opts)], 0)))},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$84)));
return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__23667,G__23668) : com.cognitect.transit.reader.call(null,G__23667,G__23668));
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
var seq__23671_23677 = cljs.core.seq(v);
var chunk__23672_23678 = null;
var count__23673_23679 = (0);
var i__23674_23680 = (0);
while(true){
if((i__23674_23680 < count__23673_23679)){
var x_23681 = chunk__23672_23678.cljs$core$IIndexed$_nth$arity$2(null,i__23674_23680);
ret.push(x_23681);

var G__23682 = seq__23671_23677;
var G__23683 = chunk__23672_23678;
var G__23684 = count__23673_23679;
var G__23685 = (i__23674_23680 + (1));
seq__23671_23677 = G__23682;
chunk__23672_23678 = G__23683;
count__23673_23679 = G__23684;
i__23674_23680 = G__23685;
continue;
} else {
var temp__4126__auto___23686 = cljs.core.seq(seq__23671_23677);
if(temp__4126__auto___23686){
var seq__23671_23687__$1 = temp__4126__auto___23686;
if(cljs.core.chunked_seq_QMARK_(seq__23671_23687__$1)){
var c__4417__auto___23688 = cljs.core.chunk_first(seq__23671_23687__$1);
var G__23689 = cljs.core.chunk_rest(seq__23671_23687__$1);
var G__23690 = c__4417__auto___23688;
var G__23691 = cljs.core.count(c__4417__auto___23688);
var G__23692 = (0);
seq__23671_23677 = G__23689;
chunk__23672_23678 = G__23690;
count__23673_23679 = G__23691;
i__23674_23680 = G__23692;
continue;
} else {
var x_23693 = cljs.core.first(seq__23671_23687__$1);
ret.push(x_23693);

var G__23694 = cljs.core.next(seq__23671_23687__$1);
var G__23695 = null;
var G__23696 = (0);
var G__23697 = (0);
seq__23671_23677 = G__23694;
chunk__23672_23678 = G__23695;
count__23673_23679 = G__23696;
i__23674_23680 = G__23697;
continue;
}
} else {
}
}
break;
}

var G__23675 = "array";
var G__23676 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__23675,G__23676) : com.cognitect.transit.tagged.call(null,G__23675,G__23676));
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
var seq__23698_23704 = cljs.core.seq(v);
var chunk__23699_23705 = null;
var count__23700_23706 = (0);
var i__23701_23707 = (0);
while(true){
if((i__23701_23707 < count__23700_23706)){
var x_23708 = chunk__23699_23705.cljs$core$IIndexed$_nth$arity$2(null,i__23701_23707);
ret.push(x_23708);

var G__23709 = seq__23698_23704;
var G__23710 = chunk__23699_23705;
var G__23711 = count__23700_23706;
var G__23712 = (i__23701_23707 + (1));
seq__23698_23704 = G__23709;
chunk__23699_23705 = G__23710;
count__23700_23706 = G__23711;
i__23701_23707 = G__23712;
continue;
} else {
var temp__4126__auto___23713 = cljs.core.seq(seq__23698_23704);
if(temp__4126__auto___23713){
var seq__23698_23714__$1 = temp__4126__auto___23713;
if(cljs.core.chunked_seq_QMARK_(seq__23698_23714__$1)){
var c__4417__auto___23715 = cljs.core.chunk_first(seq__23698_23714__$1);
var G__23716 = cljs.core.chunk_rest(seq__23698_23714__$1);
var G__23717 = c__4417__auto___23715;
var G__23718 = cljs.core.count(c__4417__auto___23715);
var G__23719 = (0);
seq__23698_23704 = G__23716;
chunk__23699_23705 = G__23717;
count__23700_23706 = G__23718;
i__23701_23707 = G__23719;
continue;
} else {
var x_23720 = cljs.core.first(seq__23698_23714__$1);
ret.push(x_23720);

var G__23721 = cljs.core.next(seq__23698_23714__$1);
var G__23722 = null;
var G__23723 = (0);
var G__23724 = (0);
seq__23698_23704 = G__23721;
chunk__23699_23705 = G__23722;
count__23700_23706 = G__23723;
i__23701_23707 = G__23724;
continue;
}
} else {
}
}
break;
}

var G__23702 = "array";
var G__23703 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__23702,G__23703) : com.cognitect.transit.tagged.call(null,G__23702,G__23703));
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
var seq__23725_23729 = cljs.core.seq(v);
var chunk__23726_23730 = null;
var count__23727_23731 = (0);
var i__23728_23732 = (0);
while(true){
if((i__23728_23732 < count__23727_23731)){
var x_23733 = chunk__23726_23730.cljs$core$IIndexed$_nth$arity$2(null,i__23728_23732);
ret.push(x_23733);

var G__23734 = seq__23725_23729;
var G__23735 = chunk__23726_23730;
var G__23736 = count__23727_23731;
var G__23737 = (i__23728_23732 + (1));
seq__23725_23729 = G__23734;
chunk__23726_23730 = G__23735;
count__23727_23731 = G__23736;
i__23728_23732 = G__23737;
continue;
} else {
var temp__4126__auto___23738 = cljs.core.seq(seq__23725_23729);
if(temp__4126__auto___23738){
var seq__23725_23739__$1 = temp__4126__auto___23738;
if(cljs.core.chunked_seq_QMARK_(seq__23725_23739__$1)){
var c__4417__auto___23740 = cljs.core.chunk_first(seq__23725_23739__$1);
var G__23741 = cljs.core.chunk_rest(seq__23725_23739__$1);
var G__23742 = c__4417__auto___23740;
var G__23743 = cljs.core.count(c__4417__auto___23740);
var G__23744 = (0);
seq__23725_23729 = G__23741;
chunk__23726_23730 = G__23742;
count__23727_23731 = G__23743;
i__23728_23732 = G__23744;
continue;
} else {
var x_23745 = cljs.core.first(seq__23725_23739__$1);
ret.push(x_23745);

var G__23746 = cljs.core.next(seq__23725_23739__$1);
var G__23747 = null;
var G__23748 = (0);
var G__23749 = (0);
seq__23725_23729 = G__23746;
chunk__23726_23730 = G__23747;
count__23727_23731 = G__23748;
i__23728_23732 = G__23749;
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
var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),cljs.core.constant$keyword$84.cljs$core$IFn$_invoke$arity$1(opts)], 0));
var G__23768 = cljs.core.name(type);
var G__23769 = cognitect.transit.opts_merge({"unpack": ((function (G__23768,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(G__23768,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x23773 = cljs.core.clone(handlers);
x23773.forEach = ((function (x23773,G__23768,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__23774 = cljs.core.seq(coll);
var chunk__23775 = null;
var count__23776 = (0);
var i__23777 = (0);
while(true){
if((i__23777 < count__23776)){
var vec__23778 = chunk__23775.cljs$core$IIndexed$_nth$arity$2(null,i__23777);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23778,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23778,(1),null);
var G__23779_23784 = v;
var G__23780_23785 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23779_23784,G__23780_23785) : f.call(null,G__23779_23784,G__23780_23785));

var G__23786 = seq__23774;
var G__23787 = chunk__23775;
var G__23788 = count__23776;
var G__23789 = (i__23777 + (1));
seq__23774 = G__23786;
chunk__23775 = G__23787;
count__23776 = G__23788;
i__23777 = G__23789;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__23774);
if(temp__4126__auto__){
var seq__23774__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23774__$1)){
var c__4417__auto__ = cljs.core.chunk_first(seq__23774__$1);
var G__23790 = cljs.core.chunk_rest(seq__23774__$1);
var G__23791 = c__4417__auto__;
var G__23792 = cljs.core.count(c__4417__auto__);
var G__23793 = (0);
seq__23774 = G__23790;
chunk__23775 = G__23791;
count__23776 = G__23792;
i__23777 = G__23793;
continue;
} else {
var vec__23781 = cljs.core.first(seq__23774__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23781,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23781,(1),null);
var G__23782_23794 = v;
var G__23783_23795 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23782_23794,G__23783_23795) : f.call(null,G__23782_23794,G__23783_23795));

var G__23796 = cljs.core.next(seq__23774__$1);
var G__23797 = null;
var G__23798 = (0);
var G__23799 = (0);
seq__23774 = G__23796;
chunk__23775 = G__23797;
count__23776 = G__23798;
i__23777 = G__23799;
continue;
}
} else {
return null;
}
}
break;
}
});})(x23773,G__23768,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x23773;
})(), "objectBuilder": ((function (G__23768,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv(((function (G__23768,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__23770 = obj;
G__23770.push((function (){var G__23771 = k;
return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__23771) : kfn.call(null,G__23771));
})(),(function (){var G__23772 = v;
return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__23772) : vfn.call(null,G__23772));
})());

return G__23770;
});})(G__23768,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(G__23768,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$84)));
return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__23768,G__23769) : com.cognitect.transit.writer.call(null,G__23768,G__23769));
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
if(typeof cognitect.transit.t23814 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t23814 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta23815){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta23815 = meta23815;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t23814.prototype.tag = (function (o){
var self__ = this;
var _ = this;
var G__23817 = o;
return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__23817) : self__.tag_fn.call(null,G__23817));
});

cognitect.transit.t23814.prototype.rep = (function (o){
var self__ = this;
var _ = this;
var G__23818 = o;
return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__23818) : self__.rep_fn.call(null,G__23818));
});

cognitect.transit.t23814.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
var G__23819 = o;
return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__23819) : self__.str_rep_fn.call(null,G__23819));
} else {
return null;
}
});

cognitect.transit.t23814.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else {
return null;
}
});

cognitect.transit.t23814.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23816){
var self__ = this;
var _23816__$1 = this;
return self__.meta23815;
});

cognitect.transit.t23814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23816,meta23815__$1){
var self__ = this;
var _23816__$1 = this;
return (new cognitect.transit.t23814(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta23815__$1));
});

cognitect.transit.t23814.cljs$lang$type = true;

cognitect.transit.t23814.cljs$lang$ctorStr = "cognitect.transit/t23814";

cognitect.transit.t23814.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cognitect.transit/t23814");
});

cognitect.transit.__GT_t23814 = (function __GT_t23814(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta23815){
return (new cognitect.transit.t23814(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta23815));
});

}

return (new cognitect.transit.t23814(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,79,cljs.core.constant$keyword$9,259,cljs.core.constant$keyword$10,6,cljs.core.constant$keyword$11,254,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cognitect/transit.cljs"], null)));
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
var G__23822 = tag;
var G__23823 = rep;
return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__23822,G__23823) : com.cognitect.transit.types.taggedValue.call(null,G__23822,G__23823));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){
var G__23825 = x;
return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__23825) : com.cognitect.transit.types.isTaggedValue.call(null,G__23825));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){
var G__23827 = s;
return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__23827) : com.cognitect.transit.types.integer.call(null,G__23827));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){
var G__23829 = x;
return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__23829) : com.cognitect.transit.types.isInteger.call(null,G__23829));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){
var G__23831 = s;
return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__23831) : com.cognitect.transit.types.bigInteger.call(null,G__23831));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){
var G__23833 = x;
return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__23833) : com.cognitect.transit.types.isBigInteger.call(null,G__23833));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){
var G__23835 = s;
return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__23835) : com.cognitect.transit.types.bigDecimalValue.call(null,G__23835));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){
var G__23837 = x;
return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__23837) : com.cognitect.transit.types.isBigDecimal.call(null,G__23837));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){
var G__23839 = s;
return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__23839) : com.cognitect.transit.types.uri.call(null,G__23839));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){
var G__23841 = x;
return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__23841) : com.cognitect.transit.types.isURI.call(null,G__23841));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){
var G__23843 = s;
return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__23843) : com.cognitect.transit.types.uuid.call(null,G__23843));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){
var G__23845 = x;
return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__23845) : com.cognitect.transit.types.isUUID.call(null,G__23845));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){
var G__23847 = s;
return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__23847) : com.cognitect.transit.types.binary.call(null,G__23847));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){
var G__23849 = x;
return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__23849) : com.cognitect.transit.types.isBinary.call(null,G__23849));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){
var G__23851 = x;
return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__23851) : com.cognitect.transit.types.quoted.call(null,G__23851));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){
var G__23853 = x;
return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__23853) : com.cognitect.transit.types.isQuoted.call(null,G__23853));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){
var G__23855 = x;
return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__23855) : com.cognitect.transit.types.link.call(null,G__23855));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){
var G__23857 = x;
return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__23857) : com.cognitect.transit.types.isLink.call(null,G__23857));
});
