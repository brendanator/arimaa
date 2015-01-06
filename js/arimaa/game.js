// Compiled by ClojureScript 0.0-2657 {}
goog.provide('arimaa.game');
goog.require('cljs.core');
arimaa.game.animals = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$136,cljs.core.constant$keyword$137,cljs.core.constant$keyword$138,cljs.core.constant$keyword$139,cljs.core.constant$keyword$140,cljs.core.constant$keyword$141], null);
arimaa.game.colour = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$142,cljs.core.constant$keyword$143], null);
arimaa.game.direction = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$144,cljs.core.constant$keyword$145,cljs.core.constant$keyword$146,cljs.core.constant$keyword$147], null);

arimaa.game.AShow = (function (){var obj16999 = {};
return obj16999;
})();

arimaa.game.show = (function show(this$){
if((function (){var and__3719__auto__ = this$;
if(and__3719__auto__){
return this$.arimaa$game$AShow$show$arity$1;
} else {
return and__3719__auto__;
}
})()){
return this$.arimaa$game$AShow$show$arity$1(this$);
} else {
var x__4375__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3731__auto__ = (arimaa.game.show[(function (){var G__17003 = x__4375__auto__;
return goog.typeOf(G__17003);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (arimaa.game.show["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("AShow.show",this$);
}
}
})().call(null,this$);
}
});


/**
* @constructor
* @param {*} col
* @param {*} row
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
arimaa.game.Square = (function (col,row,__meta,__extmap,__hash){
this.col = col;
this.row = row;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
arimaa.game.Square.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4334__auto__,k__4335__auto__){
var self__ = this;
var this__4334__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4334__auto____$1,k__4335__auto__,null);
});

arimaa.game.Square.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4336__auto__,k17005,else__4337__auto__){
var self__ = this;
var this__4336__auto____$1 = this;
var G__17007 = (((k17005 instanceof cljs.core.Keyword))?k17005.fqn:null);
switch (G__17007) {
case "row":
return self__.row;

break;
case "col":
return self__.col;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17005,else__4337__auto__);

}
});

arimaa.game.Square.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4348__auto__,writer__4349__auto__,opts__4350__auto__){
var self__ = this;
var this__4348__auto____$1 = this;
var pr_pair__4351__auto__ = ((function (this__4348__auto____$1){
return (function (keyval__4352__auto__){
return cljs.core.pr_sequential_writer(writer__4349__auto__,cljs.core.pr_writer,""," ","",opts__4350__auto__,keyval__4352__auto__);
});})(this__4348__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4349__auto__,pr_pair__4351__auto__,"#arimaa.game.Square{",", ","}",opts__4350__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$148,self__.col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$149,self__.row],null))], null),self__.__extmap));
});

arimaa.game.Square.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4332__auto__){
var self__ = this;
var this__4332__auto____$1 = this;
return self__.__meta;
});

arimaa.game.Square.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4328__auto__){
var self__ = this;
var this__4328__auto____$1 = this;
return (new arimaa.game.Square(self__.col,self__.row,self__.__meta,self__.__extmap,self__.__hash));
});

arimaa.game.Square.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4338__auto__){
var self__ = this;
var this__4338__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

arimaa.game.Square.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4329__auto__){
var self__ = this;
var this__4329__auto____$1 = this;
var h__4152__auto__ = self__.__hash;
if(!((h__4152__auto__ == null))){
return h__4152__auto__;
} else {
var h__4152__auto____$1 = cljs.core.hash_imap(this__4329__auto____$1);
self__.__hash = h__4152__auto____$1;

return h__4152__auto____$1;
}
});

arimaa.game.Square.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4330__auto__,other__4331__auto__){
var self__ = this;
var this__4330__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3719__auto__ = other__4331__auto__;
if(cljs.core.truth_(and__3719__auto__)){
return ((this__4330__auto____$1.constructor === other__4331__auto__.constructor)) && (cljs.core.equiv_map(this__4330__auto____$1,other__4331__auto__));
} else {
return and__3719__auto__;
}
})())){
return true;
} else {
return false;
}
});

arimaa.game.Square.prototype.arimaa$game$AShow$ = true;

arimaa.game.Square.prototype.arimaa$game$AShow$show$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return [cljs.core.str(self__.col),cljs.core.str(self__.row)].join('');
});

arimaa.game.Square.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4343__auto__,k__4344__auto__){
var self__ = this;
var this__4343__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$148,null,cljs.core.constant$keyword$149,null], null), null),k__4344__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4343__auto____$1),self__.__meta),k__4344__auto__);
} else {
return (new arimaa.game.Square(self__.col,self__.row,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4344__auto__)),null));
}
});

arimaa.game.Square.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4341__auto__,k__4342__auto__,G__17004){
var self__ = this;
var this__4341__auto____$1 = this;
var pred__17008 = cljs.core.keyword_identical_QMARK_;
var expr__17009 = k__4342__auto__;
if(cljs.core.truth_((function (){var G__17011 = cljs.core.constant$keyword$148;
var G__17012 = expr__17009;
return (pred__17008.cljs$core$IFn$_invoke$arity$2 ? pred__17008.cljs$core$IFn$_invoke$arity$2(G__17011,G__17012) : pred__17008.call(null,G__17011,G__17012));
})())){
return (new arimaa.game.Square(G__17004,self__.row,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17013 = cljs.core.constant$keyword$149;
var G__17014 = expr__17009;
return (pred__17008.cljs$core$IFn$_invoke$arity$2 ? pred__17008.cljs$core$IFn$_invoke$arity$2(G__17013,G__17014) : pred__17008.call(null,G__17013,G__17014));
})())){
return (new arimaa.game.Square(self__.col,G__17004,self__.__meta,self__.__extmap,null));
} else {
return (new arimaa.game.Square(self__.col,self__.row,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4342__auto__,G__17004),null));
}
}
});

arimaa.game.Square.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4346__auto__){
var self__ = this;
var this__4346__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$148,self__.col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$149,self__.row],null))], null),self__.__extmap));
});

arimaa.game.Square.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4333__auto__,G__17004){
var self__ = this;
var this__4333__auto____$1 = this;
return (new arimaa.game.Square(self__.col,self__.row,G__17004,self__.__extmap,self__.__hash));
});

arimaa.game.Square.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4339__auto__,entry__4340__auto__){
var self__ = this;
var this__4339__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4340__auto__)){
return cljs.core._assoc(this__4339__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4340__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4340__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4339__auto____$1,entry__4340__auto__);
}
});

arimaa.game.Square.cljs$lang$type = true;

arimaa.game.Square.cljs$lang$ctorPrSeq = (function (this__4368__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"arimaa.game/Square");
});

arimaa.game.Square.cljs$lang$ctorPrWriter = (function (this__4368__auto__,writer__4369__auto__){
return cljs.core._write(writer__4369__auto__,"arimaa.game/Square");
});

arimaa.game.__GT_Square = (function __GT_Square(col,row){
return (new arimaa.game.Square(col,row,null,null,null));
});

arimaa.game.map__GT_Square = (function map__GT_Square(G__17006){
return (new arimaa.game.Square(cljs.core.constant$keyword$148.cljs$core$IFn$_invoke$arity$1(G__17006),cljs.core.constant$keyword$149.cljs$core$IFn$_invoke$arity$1(G__17006),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17006,cljs.core.constant$keyword$148,cljs.core.array_seq([cljs.core.constant$keyword$149], 0)),null));
});


/**
* @constructor
* @param {*} animal
* @param {*} colour
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
arimaa.game.Piece = (function (animal,colour,__meta,__extmap,__hash){
this.animal = animal;
this.colour = colour;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
arimaa.game.Piece.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4334__auto__,k__4335__auto__){
var self__ = this;
var this__4334__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4334__auto____$1,k__4335__auto__,null);
});

arimaa.game.Piece.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4336__auto__,k17017,else__4337__auto__){
var self__ = this;
var this__4336__auto____$1 = this;
var G__17019 = (((k17017 instanceof cljs.core.Keyword))?k17017.fqn:null);
switch (G__17019) {
case "colour":
return self__.colour;

break;
case "animal":
return self__.animal;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17017,else__4337__auto__);

}
});

arimaa.game.Piece.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4348__auto__,writer__4349__auto__,opts__4350__auto__){
var self__ = this;
var this__4348__auto____$1 = this;
var pr_pair__4351__auto__ = ((function (this__4348__auto____$1){
return (function (keyval__4352__auto__){
return cljs.core.pr_sequential_writer(writer__4349__auto__,cljs.core.pr_writer,""," ","",opts__4350__auto__,keyval__4352__auto__);
});})(this__4348__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4349__auto__,pr_pair__4351__auto__,"#arimaa.game.Piece{",", ","}",opts__4350__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$150,self__.animal],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$151,self__.colour],null))], null),self__.__extmap));
});

arimaa.game.Piece.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4332__auto__){
var self__ = this;
var this__4332__auto____$1 = this;
return self__.__meta;
});

arimaa.game.Piece.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4328__auto__){
var self__ = this;
var this__4328__auto____$1 = this;
return (new arimaa.game.Piece(self__.animal,self__.colour,self__.__meta,self__.__extmap,self__.__hash));
});

arimaa.game.Piece.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4338__auto__){
var self__ = this;
var this__4338__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

arimaa.game.Piece.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4329__auto__){
var self__ = this;
var this__4329__auto____$1 = this;
var h__4152__auto__ = self__.__hash;
if(!((h__4152__auto__ == null))){
return h__4152__auto__;
} else {
var h__4152__auto____$1 = cljs.core.hash_imap(this__4329__auto____$1);
self__.__hash = h__4152__auto____$1;

return h__4152__auto____$1;
}
});

arimaa.game.Piece.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4330__auto__,other__4331__auto__){
var self__ = this;
var this__4330__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3719__auto__ = other__4331__auto__;
if(cljs.core.truth_(and__3719__auto__)){
return ((this__4330__auto____$1.constructor === other__4331__auto__.constructor)) && (cljs.core.equiv_map(this__4330__auto____$1,other__4331__auto__));
} else {
return and__3719__auto__;
}
})())){
return true;
} else {
return false;
}
});

arimaa.game.Piece.prototype.arimaa$game$AShow$ = true;

arimaa.game.Piece.prototype.arimaa$game$AShow$show$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var animal_char = (function (){var G__17020 = (((self__.animal instanceof cljs.core.Keyword))?self__.animal.fqn:null);
switch (G__17020) {
case "elephant":
return "e";

break;
case "camel":
return "m";

break;
case "horse":
return "h";

break;
case "dog":
return "d";

break;
case "cat":
return "c";

break;
case "rabbit":
return "r";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(self__.animal)].join('')));

}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$142,self__.colour)){
return animal_char.toUpperCase();
} else {
return animal_char;
}
});

arimaa.game.Piece.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4343__auto__,k__4344__auto__){
var self__ = this;
var this__4343__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$150,null,cljs.core.constant$keyword$151,null], null), null),k__4344__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4343__auto____$1),self__.__meta),k__4344__auto__);
} else {
return (new arimaa.game.Piece(self__.animal,self__.colour,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4344__auto__)),null));
}
});

arimaa.game.Piece.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4341__auto__,k__4342__auto__,G__17016){
var self__ = this;
var this__4341__auto____$1 = this;
var pred__17021 = cljs.core.keyword_identical_QMARK_;
var expr__17022 = k__4342__auto__;
if(cljs.core.truth_((function (){var G__17024 = cljs.core.constant$keyword$150;
var G__17025 = expr__17022;
return (pred__17021.cljs$core$IFn$_invoke$arity$2 ? pred__17021.cljs$core$IFn$_invoke$arity$2(G__17024,G__17025) : pred__17021.call(null,G__17024,G__17025));
})())){
return (new arimaa.game.Piece(G__17016,self__.colour,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17026 = cljs.core.constant$keyword$151;
var G__17027 = expr__17022;
return (pred__17021.cljs$core$IFn$_invoke$arity$2 ? pred__17021.cljs$core$IFn$_invoke$arity$2(G__17026,G__17027) : pred__17021.call(null,G__17026,G__17027));
})())){
return (new arimaa.game.Piece(self__.animal,G__17016,self__.__meta,self__.__extmap,null));
} else {
return (new arimaa.game.Piece(self__.animal,self__.colour,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4342__auto__,G__17016),null));
}
}
});

arimaa.game.Piece.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4346__auto__){
var self__ = this;
var this__4346__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$150,self__.animal],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$151,self__.colour],null))], null),self__.__extmap));
});

arimaa.game.Piece.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4333__auto__,G__17016){
var self__ = this;
var this__4333__auto____$1 = this;
return (new arimaa.game.Piece(self__.animal,self__.colour,G__17016,self__.__extmap,self__.__hash));
});

arimaa.game.Piece.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4339__auto__,entry__4340__auto__){
var self__ = this;
var this__4339__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4340__auto__)){
return cljs.core._assoc(this__4339__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4340__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4340__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4339__auto____$1,entry__4340__auto__);
}
});

arimaa.game.Piece.cljs$lang$type = true;

arimaa.game.Piece.cljs$lang$ctorPrSeq = (function (this__4368__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"arimaa.game/Piece");
});

arimaa.game.Piece.cljs$lang$ctorPrWriter = (function (this__4368__auto__,writer__4369__auto__){
return cljs.core._write(writer__4369__auto__,"arimaa.game/Piece");
});

arimaa.game.__GT_Piece = (function __GT_Piece(animal,colour){
return (new arimaa.game.Piece(animal,colour,null,null,null));
});

arimaa.game.map__GT_Piece = (function map__GT_Piece(G__17018){
return (new arimaa.game.Piece(cljs.core.constant$keyword$150.cljs$core$IFn$_invoke$arity$1(G__17018),cljs.core.constant$keyword$151.cljs$core$IFn$_invoke$arity$1(G__17018),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17018,cljs.core.constant$keyword$150,cljs.core.array_seq([cljs.core.constant$keyword$151], 0)),null));
});


/**
* @constructor
* @param {*} piece
* @param {*} square
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
arimaa.game.PiecePosition = (function (piece,square,__meta,__extmap,__hash){
this.piece = piece;
this.square = square;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
arimaa.game.PiecePosition.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4334__auto__,k__4335__auto__){
var self__ = this;
var this__4334__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4334__auto____$1,k__4335__auto__,null);
});

arimaa.game.PiecePosition.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4336__auto__,k17031,else__4337__auto__){
var self__ = this;
var this__4336__auto____$1 = this;
var G__17033 = (((k17031 instanceof cljs.core.Keyword))?k17031.fqn:null);
switch (G__17033) {
case "square":
return self__.square;

break;
case "piece":
return self__.piece;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17031,else__4337__auto__);

}
});

arimaa.game.PiecePosition.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4348__auto__,writer__4349__auto__,opts__4350__auto__){
var self__ = this;
var this__4348__auto____$1 = this;
var pr_pair__4351__auto__ = ((function (this__4348__auto____$1){
return (function (keyval__4352__auto__){
return cljs.core.pr_sequential_writer(writer__4349__auto__,cljs.core.pr_writer,""," ","",opts__4350__auto__,keyval__4352__auto__);
});})(this__4348__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4349__auto__,pr_pair__4351__auto__,"#arimaa.game.PiecePosition{",", ","}",opts__4350__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$152,self__.piece],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$153,self__.square],null))], null),self__.__extmap));
});

arimaa.game.PiecePosition.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4332__auto__){
var self__ = this;
var this__4332__auto____$1 = this;
return self__.__meta;
});

arimaa.game.PiecePosition.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4328__auto__){
var self__ = this;
var this__4328__auto____$1 = this;
return (new arimaa.game.PiecePosition(self__.piece,self__.square,self__.__meta,self__.__extmap,self__.__hash));
});

arimaa.game.PiecePosition.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4338__auto__){
var self__ = this;
var this__4338__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

arimaa.game.PiecePosition.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4329__auto__){
var self__ = this;
var this__4329__auto____$1 = this;
var h__4152__auto__ = self__.__hash;
if(!((h__4152__auto__ == null))){
return h__4152__auto__;
} else {
var h__4152__auto____$1 = cljs.core.hash_imap(this__4329__auto____$1);
self__.__hash = h__4152__auto____$1;

return h__4152__auto____$1;
}
});

arimaa.game.PiecePosition.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4330__auto__,other__4331__auto__){
var self__ = this;
var this__4330__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3719__auto__ = other__4331__auto__;
if(cljs.core.truth_(and__3719__auto__)){
return ((this__4330__auto____$1.constructor === other__4331__auto__.constructor)) && (cljs.core.equiv_map(this__4330__auto____$1,other__4331__auto__));
} else {
return and__3719__auto__;
}
})())){
return true;
} else {
return false;
}
});

arimaa.game.PiecePosition.prototype.arimaa$game$AShow$ = true;

arimaa.game.PiecePosition.prototype.arimaa$game$AShow$show$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return [cljs.core.str(arimaa.game.show(self__.piece)),cljs.core.str(arimaa.game.show(self__.square))].join('');
});

arimaa.game.PiecePosition.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4343__auto__,k__4344__auto__){
var self__ = this;
var this__4343__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$152,null,cljs.core.constant$keyword$153,null], null), null),k__4344__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4343__auto____$1),self__.__meta),k__4344__auto__);
} else {
return (new arimaa.game.PiecePosition(self__.piece,self__.square,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4344__auto__)),null));
}
});

arimaa.game.PiecePosition.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4341__auto__,k__4342__auto__,G__17030){
var self__ = this;
var this__4341__auto____$1 = this;
var pred__17034 = cljs.core.keyword_identical_QMARK_;
var expr__17035 = k__4342__auto__;
if(cljs.core.truth_((function (){var G__17037 = cljs.core.constant$keyword$152;
var G__17038 = expr__17035;
return (pred__17034.cljs$core$IFn$_invoke$arity$2 ? pred__17034.cljs$core$IFn$_invoke$arity$2(G__17037,G__17038) : pred__17034.call(null,G__17037,G__17038));
})())){
return (new arimaa.game.PiecePosition(G__17030,self__.square,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17039 = cljs.core.constant$keyword$153;
var G__17040 = expr__17035;
return (pred__17034.cljs$core$IFn$_invoke$arity$2 ? pred__17034.cljs$core$IFn$_invoke$arity$2(G__17039,G__17040) : pred__17034.call(null,G__17039,G__17040));
})())){
return (new arimaa.game.PiecePosition(self__.piece,G__17030,self__.__meta,self__.__extmap,null));
} else {
return (new arimaa.game.PiecePosition(self__.piece,self__.square,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4342__auto__,G__17030),null));
}
}
});

arimaa.game.PiecePosition.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4346__auto__){
var self__ = this;
var this__4346__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$152,self__.piece],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$153,self__.square],null))], null),self__.__extmap));
});

arimaa.game.PiecePosition.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4333__auto__,G__17030){
var self__ = this;
var this__4333__auto____$1 = this;
return (new arimaa.game.PiecePosition(self__.piece,self__.square,G__17030,self__.__extmap,self__.__hash));
});

arimaa.game.PiecePosition.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4339__auto__,entry__4340__auto__){
var self__ = this;
var this__4339__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4340__auto__)){
return cljs.core._assoc(this__4339__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4340__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4340__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4339__auto____$1,entry__4340__auto__);
}
});

arimaa.game.PiecePosition.cljs$lang$type = true;

arimaa.game.PiecePosition.cljs$lang$ctorPrSeq = (function (this__4368__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"arimaa.game/PiecePosition");
});

arimaa.game.PiecePosition.cljs$lang$ctorPrWriter = (function (this__4368__auto__,writer__4369__auto__){
return cljs.core._write(writer__4369__auto__,"arimaa.game/PiecePosition");
});

arimaa.game.__GT_PiecePosition = (function __GT_PiecePosition(piece,square){
return (new arimaa.game.PiecePosition(piece,square,null,null,null));
});

arimaa.game.map__GT_PiecePosition = (function map__GT_PiecePosition(G__17032){
return (new arimaa.game.PiecePosition(cljs.core.constant$keyword$152.cljs$core$IFn$_invoke$arity$1(G__17032),cljs.core.constant$keyword$153.cljs$core$IFn$_invoke$arity$1(G__17032),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17032,cljs.core.constant$keyword$152,cljs.core.array_seq([cljs.core.constant$keyword$153], 0)),null));
});


arimaa.game.ASteps = (function (){var obj17043 = {};
return obj17043;
})();

arimaa.game.step_count = (function step_count(this$){
if((function (){var and__3719__auto__ = this$;
if(and__3719__auto__){
return this$.arimaa$game$ASteps$step_count$arity$1;
} else {
return and__3719__auto__;
}
})()){
return this$.arimaa$game$ASteps$step_count$arity$1(this$);
} else {
var x__4375__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3731__auto__ = (arimaa.game.step_count[(function (){var G__17047 = x__4375__auto__;
return goog.typeOf(G__17047);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (arimaa.game.step_count["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("ASteps.step-count",this$);
}
}
})().call(null,this$);
}
});

arimaa.game.steps = (function steps(this$){
if((function (){var and__3719__auto__ = this$;
if(and__3719__auto__){
return this$.arimaa$game$ASteps$steps$arity$1;
} else {
return and__3719__auto__;
}
})()){
return this$.arimaa$game$ASteps$steps$arity$1(this$);
} else {
var x__4375__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3731__auto__ = (arimaa.game.steps[(function (){var G__17051 = x__4375__auto__;
return goog.typeOf(G__17051);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (arimaa.game.steps["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("ASteps.steps",this$);
}
}
})().call(null,this$);
}
});


arimaa.game.AUpdatePosition = (function (){var obj17053 = {};
return obj17053;
})();

arimaa.game.update_position = (function update_position(this$,position){
if((function (){var and__3719__auto__ = this$;
if(and__3719__auto__){
return this$.arimaa$game$AUpdatePosition$update_position$arity$2;
} else {
return and__3719__auto__;
}
})()){
return this$.arimaa$game$AUpdatePosition$update_position$arity$2(this$,position);
} else {
var x__4375__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3731__auto__ = (arimaa.game.update_position[(function (){var G__17057 = x__4375__auto__;
return goog.typeOf(G__17057);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (arimaa.game.update_position["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("AUpdatePosition.update-position",this$);
}
}
})().call(null,this$,position);
}
});


/**
* @constructor
* @param {*} piece_position
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
arimaa.game.PlaceStartingPiece = (function (piece_position,__meta,__extmap,__hash){
this.piece_position = piece_position;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
arimaa.game.PlaceStartingPiece.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4334__auto__,k__4335__auto__){
var self__ = this;
var this__4334__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4334__auto____$1,k__4335__auto__,null);
});

arimaa.game.PlaceStartingPiece.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4336__auto__,k17059,else__4337__auto__){
var self__ = this;
var this__4336__auto____$1 = this;
var G__17061 = (((k17059 instanceof cljs.core.Keyword))?k17059.fqn:null);
switch (G__17061) {
case "piece-position":
return self__.piece_position;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17059,else__4337__auto__);

}
});

arimaa.game.PlaceStartingPiece.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4348__auto__,writer__4349__auto__,opts__4350__auto__){
var self__ = this;
var this__4348__auto____$1 = this;
var pr_pair__4351__auto__ = ((function (this__4348__auto____$1){
return (function (keyval__4352__auto__){
return cljs.core.pr_sequential_writer(writer__4349__auto__,cljs.core.pr_writer,""," ","",opts__4350__auto__,keyval__4352__auto__);
});})(this__4348__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4349__auto__,pr_pair__4351__auto__,"#arimaa.game.PlaceStartingPiece{",", ","}",opts__4350__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$154,self__.piece_position],null))], null),self__.__extmap));
});

arimaa.game.PlaceStartingPiece.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4332__auto__){
var self__ = this;
var this__4332__auto____$1 = this;
return self__.__meta;
});

arimaa.game.PlaceStartingPiece.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4328__auto__){
var self__ = this;
var this__4328__auto____$1 = this;
return (new arimaa.game.PlaceStartingPiece(self__.piece_position,self__.__meta,self__.__extmap,self__.__hash));
});

arimaa.game.PlaceStartingPiece.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4338__auto__){
var self__ = this;
var this__4338__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

arimaa.game.PlaceStartingPiece.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4329__auto__){
var self__ = this;
var this__4329__auto____$1 = this;
var h__4152__auto__ = self__.__hash;
if(!((h__4152__auto__ == null))){
return h__4152__auto__;
} else {
var h__4152__auto____$1 = cljs.core.hash_imap(this__4329__auto____$1);
self__.__hash = h__4152__auto____$1;

return h__4152__auto____$1;
}
});

arimaa.game.PlaceStartingPiece.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4330__auto__,other__4331__auto__){
var self__ = this;
var this__4330__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3719__auto__ = other__4331__auto__;
if(cljs.core.truth_(and__3719__auto__)){
return ((this__4330__auto____$1.constructor === other__4331__auto__.constructor)) && (cljs.core.equiv_map(this__4330__auto____$1,other__4331__auto__));
} else {
return and__3719__auto__;
}
})())){
return true;
} else {
return false;
}
});

arimaa.game.PlaceStartingPiece.prototype.arimaa$game$AShow$ = true;

arimaa.game.PlaceStartingPiece.prototype.arimaa$game$AShow$show$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return arimaa.game.show(self__.piece_position);
});

arimaa.game.PlaceStartingPiece.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4343__auto__,k__4344__auto__){
var self__ = this;
var this__4343__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$154,null], null), null),k__4344__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4343__auto____$1),self__.__meta),k__4344__auto__);
} else {
return (new arimaa.game.PlaceStartingPiece(self__.piece_position,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4344__auto__)),null));
}
});

arimaa.game.PlaceStartingPiece.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4341__auto__,k__4342__auto__,G__17058){
var self__ = this;
var this__4341__auto____$1 = this;
var pred__17062 = cljs.core.keyword_identical_QMARK_;
var expr__17063 = k__4342__auto__;
if(cljs.core.truth_((function (){var G__17065 = cljs.core.constant$keyword$154;
var G__17066 = expr__17063;
return (pred__17062.cljs$core$IFn$_invoke$arity$2 ? pred__17062.cljs$core$IFn$_invoke$arity$2(G__17065,G__17066) : pred__17062.call(null,G__17065,G__17066));
})())){
return (new arimaa.game.PlaceStartingPiece(G__17058,self__.__meta,self__.__extmap,null));
} else {
return (new arimaa.game.PlaceStartingPiece(self__.piece_position,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4342__auto__,G__17058),null));
}
});

arimaa.game.PlaceStartingPiece.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4346__auto__){
var self__ = this;
var this__4346__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$154,self__.piece_position],null))], null),self__.__extmap));
});

arimaa.game.PlaceStartingPiece.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4333__auto__,G__17058){
var self__ = this;
var this__4333__auto____$1 = this;
return (new arimaa.game.PlaceStartingPiece(self__.piece_position,G__17058,self__.__extmap,self__.__hash));
});

arimaa.game.PlaceStartingPiece.prototype.arimaa$game$AUpdatePosition$ = true;

arimaa.game.PlaceStartingPiece.prototype.arimaa$game$AUpdatePosition$update_position$arity$2 = (function (this$,position){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(self__.piece_position,position);
});

arimaa.game.PlaceStartingPiece.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4339__auto__,entry__4340__auto__){
var self__ = this;
var this__4339__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4340__auto__)){
return cljs.core._assoc(this__4339__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4340__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4340__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4339__auto____$1,entry__4340__auto__);
}
});

arimaa.game.PlaceStartingPiece.cljs$lang$type = true;

arimaa.game.PlaceStartingPiece.cljs$lang$ctorPrSeq = (function (this__4368__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"arimaa.game/PlaceStartingPiece");
});

arimaa.game.PlaceStartingPiece.cljs$lang$ctorPrWriter = (function (this__4368__auto__,writer__4369__auto__){
return cljs.core._write(writer__4369__auto__,"arimaa.game/PlaceStartingPiece");
});

arimaa.game.__GT_PlaceStartingPiece = (function __GT_PlaceStartingPiece(piece_position){
return (new arimaa.game.PlaceStartingPiece(piece_position,null,null,null));
});

arimaa.game.map__GT_PlaceStartingPiece = (function map__GT_PlaceStartingPiece(G__17060){
return (new arimaa.game.PlaceStartingPiece(cljs.core.constant$keyword$154.cljs$core$IFn$_invoke$arity$1(G__17060),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__17060,cljs.core.constant$keyword$154),null));
});


/**
* @constructor
* @param {*} piece_position
* @param {*} direction
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
arimaa.game.Step = (function (piece_position,direction,__meta,__extmap,__hash){
this.piece_position = piece_position;
this.direction = direction;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
arimaa.game.Step.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4334__auto__,k__4335__auto__){
var self__ = this;
var this__4334__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4334__auto____$1,k__4335__auto__,null);
});

arimaa.game.Step.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4336__auto__,k17069,else__4337__auto__){
var self__ = this;
var this__4336__auto____$1 = this;
var G__17071 = (((k17069 instanceof cljs.core.Keyword))?k17069.fqn:null);
switch (G__17071) {
case "direction":
return self__.direction;

break;
case "piece-position":
return self__.piece_position;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17069,else__4337__auto__);

}
});

arimaa.game.Step.prototype.arimaa$game$ASteps$ = true;

arimaa.game.Step.prototype.arimaa$game$ASteps$step_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (1);
});

arimaa.game.Step.prototype.arimaa$game$ASteps$steps$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.seq(this$__$1);
});

arimaa.game.Step.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4348__auto__,writer__4349__auto__,opts__4350__auto__){
var self__ = this;
var this__4348__auto____$1 = this;
var pr_pair__4351__auto__ = ((function (this__4348__auto____$1){
return (function (keyval__4352__auto__){
return cljs.core.pr_sequential_writer(writer__4349__auto__,cljs.core.pr_writer,""," ","",opts__4350__auto__,keyval__4352__auto__);
});})(this__4348__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4349__auto__,pr_pair__4351__auto__,"#arimaa.game.Step{",", ","}",opts__4350__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$154,self__.piece_position],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$155,self__.direction],null))], null),self__.__extmap));
});

arimaa.game.Step.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4332__auto__){
var self__ = this;
var this__4332__auto____$1 = this;
return self__.__meta;
});

arimaa.game.Step.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4328__auto__){
var self__ = this;
var this__4328__auto____$1 = this;
return (new arimaa.game.Step(self__.piece_position,self__.direction,self__.__meta,self__.__extmap,self__.__hash));
});

arimaa.game.Step.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4338__auto__){
var self__ = this;
var this__4338__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

arimaa.game.Step.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4329__auto__){
var self__ = this;
var this__4329__auto____$1 = this;
var h__4152__auto__ = self__.__hash;
if(!((h__4152__auto__ == null))){
return h__4152__auto__;
} else {
var h__4152__auto____$1 = cljs.core.hash_imap(this__4329__auto____$1);
self__.__hash = h__4152__auto____$1;

return h__4152__auto____$1;
}
});

arimaa.game.Step.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4330__auto__,other__4331__auto__){
var self__ = this;
var this__4330__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3719__auto__ = other__4331__auto__;
if(cljs.core.truth_(and__3719__auto__)){
return ((this__4330__auto____$1.constructor === other__4331__auto__.constructor)) && (cljs.core.equiv_map(this__4330__auto____$1,other__4331__auto__));
} else {
return and__3719__auto__;
}
})())){
return true;
} else {
return false;
}
});

arimaa.game.Step.prototype.arimaa$game$AShow$ = true;

arimaa.game.Step.prototype.arimaa$game$AShow$show$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var direction_char = (function (){var G__17072 = (((self__.direction instanceof cljs.core.Keyword))?self__.direction.fqn:null);
switch (G__17072) {
case "west":
return "w";

break;
case "east":
return "e";

break;
case "south":
return "s";

break;
case "north":
return "n";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(self__.direction)].join('')));

}
})();
return [cljs.core.str(arimaa.game.show(self__.piece_position)),cljs.core.str(direction_char)].join('');
});

arimaa.game.Step.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4343__auto__,k__4344__auto__){
var self__ = this;
var this__4343__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$154,null,cljs.core.constant$keyword$155,null], null), null),k__4344__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4343__auto____$1),self__.__meta),k__4344__auto__);
} else {
return (new arimaa.game.Step(self__.piece_position,self__.direction,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4344__auto__)),null));
}
});

arimaa.game.Step.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4341__auto__,k__4342__auto__,G__17068){
var self__ = this;
var this__4341__auto____$1 = this;
var pred__17073 = cljs.core.keyword_identical_QMARK_;
var expr__17074 = k__4342__auto__;
if(cljs.core.truth_((function (){var G__17076 = cljs.core.constant$keyword$154;
var G__17077 = expr__17074;
return (pred__17073.cljs$core$IFn$_invoke$arity$2 ? pred__17073.cljs$core$IFn$_invoke$arity$2(G__17076,G__17077) : pred__17073.call(null,G__17076,G__17077));
})())){
return (new arimaa.game.Step(G__17068,self__.direction,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17078 = cljs.core.constant$keyword$155;
var G__17079 = expr__17074;
return (pred__17073.cljs$core$IFn$_invoke$arity$2 ? pred__17073.cljs$core$IFn$_invoke$arity$2(G__17078,G__17079) : pred__17073.call(null,G__17078,G__17079));
})())){
return (new arimaa.game.Step(self__.piece_position,G__17068,self__.__meta,self__.__extmap,null));
} else {
return (new arimaa.game.Step(self__.piece_position,self__.direction,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4342__auto__,G__17068),null));
}
}
});

arimaa.game.Step.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4346__auto__){
var self__ = this;
var this__4346__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$154,self__.piece_position],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$155,self__.direction],null))], null),self__.__extmap));
});

arimaa.game.Step.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4333__auto__,G__17068){
var self__ = this;
var this__4333__auto____$1 = this;
return (new arimaa.game.Step(self__.piece_position,self__.direction,G__17068,self__.__extmap,self__.__hash));
});

arimaa.game.Step.prototype.arimaa$game$AUpdatePosition$ = true;

arimaa.game.Step.prototype.arimaa$game$AUpdatePosition$update_position$arity$2 = (function (this$,position){
var self__ = this;
var this$__$1 = this;
var col = cljs.core.constant$keyword$148.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$153.cljs$core$IFn$_invoke$arity$1(self__.piece_position));
var row = cljs.core.constant$keyword$149.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$153.cljs$core$IFn$_invoke$arity$1(self__.piece_position));
var new_square = (function (){var G__17080 = (((self__.direction instanceof cljs.core.Keyword))?self__.direction.fqn:null);
switch (G__17080) {
case "west":
return (new arimaa.game.Square(cljs.core.char$((col.charCodeAt() - (1))),row,null,null,null));

break;
case "east":
return (new arimaa.game.Square(cljs.core.char$((col.charCodeAt() + (1))),row,null,null,null));

break;
case "south":
return (new arimaa.game.Square(col,(row - (1)),null,null,null));

break;
case "north":
return (new arimaa.game.Square(col,(row + (1)),null,null,null));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(self__.direction)].join('')));

}
})();
var new_piece_position = (new arimaa.game.PiecePosition(cljs.core.constant$keyword$152.cljs$core$IFn$_invoke$arity$1(self__.piece_position),new_square,null,null,null));
return cljs.core.cons(new_piece_position,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([self__.piece_position], true),position));
});

arimaa.game.Step.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4339__auto__,entry__4340__auto__){
var self__ = this;
var this__4339__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4340__auto__)){
return cljs.core._assoc(this__4339__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4340__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4340__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4339__auto____$1,entry__4340__auto__);
}
});

arimaa.game.Step.cljs$lang$type = true;

arimaa.game.Step.cljs$lang$ctorPrSeq = (function (this__4368__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"arimaa.game/Step");
});

arimaa.game.Step.cljs$lang$ctorPrWriter = (function (this__4368__auto__,writer__4369__auto__){
return cljs.core._write(writer__4369__auto__,"arimaa.game/Step");
});

arimaa.game.__GT_Step = (function __GT_Step(piece_position,direction){
return (new arimaa.game.Step(piece_position,direction,null,null,null));
});

arimaa.game.map__GT_Step = (function map__GT_Step(G__17070){
return (new arimaa.game.Step(cljs.core.constant$keyword$154.cljs$core$IFn$_invoke$arity$1(G__17070),cljs.core.constant$keyword$155.cljs$core$IFn$_invoke$arity$1(G__17070),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17070,cljs.core.constant$keyword$154,cljs.core.array_seq([cljs.core.constant$keyword$155], 0)),null));
});


/**
* @constructor
* @param {*} piece_position
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
arimaa.game.Capture = (function (piece_position,__meta,__extmap,__hash){
this.piece_position = piece_position;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
arimaa.game.Capture.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4334__auto__,k__4335__auto__){
var self__ = this;
var this__4334__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4334__auto____$1,k__4335__auto__,null);
});

arimaa.game.Capture.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4336__auto__,k17085,else__4337__auto__){
var self__ = this;
var this__4336__auto____$1 = this;
var G__17087 = (((k17085 instanceof cljs.core.Keyword))?k17085.fqn:null);
switch (G__17087) {
case "piece-position":
return self__.piece_position;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17085,else__4337__auto__);

}
});

arimaa.game.Capture.prototype.arimaa$game$ASteps$ = true;

arimaa.game.Capture.prototype.arimaa$game$ASteps$step_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (0);
});

arimaa.game.Capture.prototype.arimaa$game$ASteps$steps$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.List.EMPTY;
});

arimaa.game.Capture.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4348__auto__,writer__4349__auto__,opts__4350__auto__){
var self__ = this;
var this__4348__auto____$1 = this;
var pr_pair__4351__auto__ = ((function (this__4348__auto____$1){
return (function (keyval__4352__auto__){
return cljs.core.pr_sequential_writer(writer__4349__auto__,cljs.core.pr_writer,""," ","",opts__4350__auto__,keyval__4352__auto__);
});})(this__4348__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4349__auto__,pr_pair__4351__auto__,"#arimaa.game.Capture{",", ","}",opts__4350__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$154,self__.piece_position],null))], null),self__.__extmap));
});

arimaa.game.Capture.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4332__auto__){
var self__ = this;
var this__4332__auto____$1 = this;
return self__.__meta;
});

arimaa.game.Capture.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4328__auto__){
var self__ = this;
var this__4328__auto____$1 = this;
return (new arimaa.game.Capture(self__.piece_position,self__.__meta,self__.__extmap,self__.__hash));
});

arimaa.game.Capture.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4338__auto__){
var self__ = this;
var this__4338__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

arimaa.game.Capture.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4329__auto__){
var self__ = this;
var this__4329__auto____$1 = this;
var h__4152__auto__ = self__.__hash;
if(!((h__4152__auto__ == null))){
return h__4152__auto__;
} else {
var h__4152__auto____$1 = cljs.core.hash_imap(this__4329__auto____$1);
self__.__hash = h__4152__auto____$1;

return h__4152__auto____$1;
}
});

arimaa.game.Capture.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4330__auto__,other__4331__auto__){
var self__ = this;
var this__4330__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3719__auto__ = other__4331__auto__;
if(cljs.core.truth_(and__3719__auto__)){
return ((this__4330__auto____$1.constructor === other__4331__auto__.constructor)) && (cljs.core.equiv_map(this__4330__auto____$1,other__4331__auto__));
} else {
return and__3719__auto__;
}
})())){
return true;
} else {
return false;
}
});

arimaa.game.Capture.prototype.arimaa$game$AShow$ = true;

arimaa.game.Capture.prototype.arimaa$game$AShow$show$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return [cljs.core.str(arimaa.game.show(self__.piece_position)),cljs.core.str("x")].join('');
});

arimaa.game.Capture.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4343__auto__,k__4344__auto__){
var self__ = this;
var this__4343__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$154,null], null), null),k__4344__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4343__auto____$1),self__.__meta),k__4344__auto__);
} else {
return (new arimaa.game.Capture(self__.piece_position,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4344__auto__)),null));
}
});

arimaa.game.Capture.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4341__auto__,k__4342__auto__,G__17084){
var self__ = this;
var this__4341__auto____$1 = this;
var pred__17088 = cljs.core.keyword_identical_QMARK_;
var expr__17089 = k__4342__auto__;
if(cljs.core.truth_((function (){var G__17091 = cljs.core.constant$keyword$154;
var G__17092 = expr__17089;
return (pred__17088.cljs$core$IFn$_invoke$arity$2 ? pred__17088.cljs$core$IFn$_invoke$arity$2(G__17091,G__17092) : pred__17088.call(null,G__17091,G__17092));
})())){
return (new arimaa.game.Capture(G__17084,self__.__meta,self__.__extmap,null));
} else {
return (new arimaa.game.Capture(self__.piece_position,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4342__auto__,G__17084),null));
}
});

arimaa.game.Capture.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4346__auto__){
var self__ = this;
var this__4346__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$154,self__.piece_position],null))], null),self__.__extmap));
});

arimaa.game.Capture.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4333__auto__,G__17084){
var self__ = this;
var this__4333__auto____$1 = this;
return (new arimaa.game.Capture(self__.piece_position,G__17084,self__.__extmap,self__.__hash));
});

arimaa.game.Capture.prototype.arimaa$game$AUpdatePosition$ = true;

arimaa.game.Capture.prototype.arimaa$game$AUpdatePosition$update_position$arity$2 = (function (this$,position){
var self__ = this;
var this$__$1 = this;
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([self__.piece_position], true),position);
});

arimaa.game.Capture.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4339__auto__,entry__4340__auto__){
var self__ = this;
var this__4339__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4340__auto__)){
return cljs.core._assoc(this__4339__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4340__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4340__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4339__auto____$1,entry__4340__auto__);
}
});

arimaa.game.Capture.cljs$lang$type = true;

arimaa.game.Capture.cljs$lang$ctorPrSeq = (function (this__4368__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"arimaa.game/Capture");
});

arimaa.game.Capture.cljs$lang$ctorPrWriter = (function (this__4368__auto__,writer__4369__auto__){
return cljs.core._write(writer__4369__auto__,"arimaa.game/Capture");
});

arimaa.game.__GT_Capture = (function __GT_Capture(piece_position){
return (new arimaa.game.Capture(piece_position,null,null,null));
});

arimaa.game.map__GT_Capture = (function map__GT_Capture(G__17086){
return (new arimaa.game.Capture(cljs.core.constant$keyword$154.cljs$core$IFn$_invoke$arity$1(G__17086),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__17086,cljs.core.constant$keyword$154),null));
});


/**
* @constructor
* @param {*} step1
* @param {*} step2
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
arimaa.game.ForceStep = (function (step1,step2,__meta,__extmap,__hash){
this.step1 = step1;
this.step2 = step2;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
arimaa.game.ForceStep.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4334__auto__,k__4335__auto__){
var self__ = this;
var this__4334__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4334__auto____$1,k__4335__auto__,null);
});

arimaa.game.ForceStep.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4336__auto__,k17095,else__4337__auto__){
var self__ = this;
var this__4336__auto____$1 = this;
var G__17097 = (((k17095 instanceof cljs.core.Keyword))?k17095.fqn:null);
switch (G__17097) {
case "step2":
return self__.step2;

break;
case "step1":
return self__.step1;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17095,else__4337__auto__);

}
});

arimaa.game.ForceStep.prototype.arimaa$game$ASteps$ = true;

arimaa.game.ForceStep.prototype.arimaa$game$ASteps$step_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (2);
});

arimaa.game.ForceStep.prototype.arimaa$game$ASteps$steps$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.step1,self__.step2], null);
});

arimaa.game.ForceStep.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4348__auto__,writer__4349__auto__,opts__4350__auto__){
var self__ = this;
var this__4348__auto____$1 = this;
var pr_pair__4351__auto__ = ((function (this__4348__auto____$1){
return (function (keyval__4352__auto__){
return cljs.core.pr_sequential_writer(writer__4349__auto__,cljs.core.pr_writer,""," ","",opts__4350__auto__,keyval__4352__auto__);
});})(this__4348__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4349__auto__,pr_pair__4351__auto__,"#arimaa.game.ForceStep{",", ","}",opts__4350__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$156,self__.step1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$157,self__.step2],null))], null),self__.__extmap));
});

arimaa.game.ForceStep.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4332__auto__){
var self__ = this;
var this__4332__auto____$1 = this;
return self__.__meta;
});

arimaa.game.ForceStep.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4328__auto__){
var self__ = this;
var this__4328__auto____$1 = this;
return (new arimaa.game.ForceStep(self__.step1,self__.step2,self__.__meta,self__.__extmap,self__.__hash));
});

arimaa.game.ForceStep.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4338__auto__){
var self__ = this;
var this__4338__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

arimaa.game.ForceStep.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4329__auto__){
var self__ = this;
var this__4329__auto____$1 = this;
var h__4152__auto__ = self__.__hash;
if(!((h__4152__auto__ == null))){
return h__4152__auto__;
} else {
var h__4152__auto____$1 = cljs.core.hash_imap(this__4329__auto____$1);
self__.__hash = h__4152__auto____$1;

return h__4152__auto____$1;
}
});

arimaa.game.ForceStep.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4330__auto__,other__4331__auto__){
var self__ = this;
var this__4330__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3719__auto__ = other__4331__auto__;
if(cljs.core.truth_(and__3719__auto__)){
return ((this__4330__auto____$1.constructor === other__4331__auto__.constructor)) && (cljs.core.equiv_map(this__4330__auto____$1,other__4331__auto__));
} else {
return and__3719__auto__;
}
})())){
return true;
} else {
return false;
}
});

arimaa.game.ForceStep.prototype.arimaa$game$AShow$ = true;

arimaa.game.ForceStep.prototype.arimaa$game$AShow$show$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return [cljs.core.str(arimaa.game.show(self__.step1)),cljs.core.str(" "),cljs.core.str(arimaa.game.show(self__.step2))].join('');
});

arimaa.game.ForceStep.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4343__auto__,k__4344__auto__){
var self__ = this;
var this__4343__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$157,null,cljs.core.constant$keyword$156,null], null), null),k__4344__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4343__auto____$1),self__.__meta),k__4344__auto__);
} else {
return (new arimaa.game.ForceStep(self__.step1,self__.step2,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4344__auto__)),null));
}
});

arimaa.game.ForceStep.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4341__auto__,k__4342__auto__,G__17094){
var self__ = this;
var this__4341__auto____$1 = this;
var pred__17098 = cljs.core.keyword_identical_QMARK_;
var expr__17099 = k__4342__auto__;
if(cljs.core.truth_((function (){var G__17101 = cljs.core.constant$keyword$156;
var G__17102 = expr__17099;
return (pred__17098.cljs$core$IFn$_invoke$arity$2 ? pred__17098.cljs$core$IFn$_invoke$arity$2(G__17101,G__17102) : pred__17098.call(null,G__17101,G__17102));
})())){
return (new arimaa.game.ForceStep(G__17094,self__.step2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17103 = cljs.core.constant$keyword$157;
var G__17104 = expr__17099;
return (pred__17098.cljs$core$IFn$_invoke$arity$2 ? pred__17098.cljs$core$IFn$_invoke$arity$2(G__17103,G__17104) : pred__17098.call(null,G__17103,G__17104));
})())){
return (new arimaa.game.ForceStep(self__.step1,G__17094,self__.__meta,self__.__extmap,null));
} else {
return (new arimaa.game.ForceStep(self__.step1,self__.step2,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4342__auto__,G__17094),null));
}
}
});

arimaa.game.ForceStep.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4346__auto__){
var self__ = this;
var this__4346__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$156,self__.step1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$157,self__.step2],null))], null),self__.__extmap));
});

arimaa.game.ForceStep.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4333__auto__,G__17094){
var self__ = this;
var this__4333__auto____$1 = this;
return (new arimaa.game.ForceStep(self__.step1,self__.step2,G__17094,self__.__extmap,self__.__hash));
});

arimaa.game.ForceStep.prototype.arimaa$game$AUpdatePosition$ = true;

arimaa.game.ForceStep.prototype.arimaa$game$AUpdatePosition$update_position$arity$2 = (function (this$,position){
var self__ = this;
var this$__$1 = this;
return arimaa.game.update_position(self__.step2,arimaa.game.update_position(self__.step1,position));
});

arimaa.game.ForceStep.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4339__auto__,entry__4340__auto__){
var self__ = this;
var this__4339__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4340__auto__)){
return cljs.core._assoc(this__4339__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4340__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4340__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4339__auto____$1,entry__4340__auto__);
}
});

arimaa.game.ForceStep.cljs$lang$type = true;

arimaa.game.ForceStep.cljs$lang$ctorPrSeq = (function (this__4368__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"arimaa.game/ForceStep");
});

arimaa.game.ForceStep.cljs$lang$ctorPrWriter = (function (this__4368__auto__,writer__4369__auto__){
return cljs.core._write(writer__4369__auto__,"arimaa.game/ForceStep");
});

arimaa.game.__GT_ForceStep = (function __GT_ForceStep(step1,step2){
return (new arimaa.game.ForceStep(step1,step2,null,null,null));
});

arimaa.game.map__GT_ForceStep = (function map__GT_ForceStep(G__17096){
return (new arimaa.game.ForceStep(cljs.core.constant$keyword$156.cljs$core$IFn$_invoke$arity$1(G__17096),cljs.core.constant$keyword$157.cljs$core$IFn$_invoke$arity$1(G__17096),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17096,cljs.core.constant$keyword$156,cljs.core.array_seq([cljs.core.constant$keyword$157], 0)),null));
});


/**
* @constructor
* @param {*} number
* @param {*} colour
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
arimaa.game.Turn = (function (number,colour,__meta,__extmap,__hash){
this.number = number;
this.colour = colour;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
arimaa.game.Turn.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4334__auto__,k__4335__auto__){
var self__ = this;
var this__4334__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4334__auto____$1,k__4335__auto__,null);
});

arimaa.game.Turn.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4336__auto__,k17107,else__4337__auto__){
var self__ = this;
var this__4336__auto____$1 = this;
var G__17109 = (((k17107 instanceof cljs.core.Keyword))?k17107.fqn:null);
switch (G__17109) {
case "colour":
return self__.colour;

break;
case "number":
return self__.number;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17107,else__4337__auto__);

}
});

arimaa.game.Turn.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4348__auto__,writer__4349__auto__,opts__4350__auto__){
var self__ = this;
var this__4348__auto____$1 = this;
var pr_pair__4351__auto__ = ((function (this__4348__auto____$1){
return (function (keyval__4352__auto__){
return cljs.core.pr_sequential_writer(writer__4349__auto__,cljs.core.pr_writer,""," ","",opts__4350__auto__,keyval__4352__auto__);
});})(this__4348__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4349__auto__,pr_pair__4351__auto__,"#arimaa.game.Turn{",", ","}",opts__4350__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$158,self__.number],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$151,self__.colour],null))], null),self__.__extmap));
});

arimaa.game.Turn.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4332__auto__){
var self__ = this;
var this__4332__auto____$1 = this;
return self__.__meta;
});

arimaa.game.Turn.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4328__auto__){
var self__ = this;
var this__4328__auto____$1 = this;
return (new arimaa.game.Turn(self__.number,self__.colour,self__.__meta,self__.__extmap,self__.__hash));
});

arimaa.game.Turn.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4338__auto__){
var self__ = this;
var this__4338__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

arimaa.game.Turn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4329__auto__){
var self__ = this;
var this__4329__auto____$1 = this;
var h__4152__auto__ = self__.__hash;
if(!((h__4152__auto__ == null))){
return h__4152__auto__;
} else {
var h__4152__auto____$1 = cljs.core.hash_imap(this__4329__auto____$1);
self__.__hash = h__4152__auto____$1;

return h__4152__auto____$1;
}
});

arimaa.game.Turn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4330__auto__,other__4331__auto__){
var self__ = this;
var this__4330__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3719__auto__ = other__4331__auto__;
if(cljs.core.truth_(and__3719__auto__)){
return ((this__4330__auto____$1.constructor === other__4331__auto__.constructor)) && (cljs.core.equiv_map(this__4330__auto____$1,other__4331__auto__));
} else {
return and__3719__auto__;
}
})())){
return true;
} else {
return false;
}
});

arimaa.game.Turn.prototype.arimaa$game$AShow$ = true;

arimaa.game.Turn.prototype.arimaa$game$AShow$show$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return [cljs.core.str(self__.number),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.colour,cljs.core.constant$keyword$142))?"g":"s"))].join('');
});

arimaa.game.Turn.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4343__auto__,k__4344__auto__){
var self__ = this;
var this__4343__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$158,null,cljs.core.constant$keyword$151,null], null), null),k__4344__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4343__auto____$1),self__.__meta),k__4344__auto__);
} else {
return (new arimaa.game.Turn(self__.number,self__.colour,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4344__auto__)),null));
}
});

arimaa.game.Turn.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4341__auto__,k__4342__auto__,G__17106){
var self__ = this;
var this__4341__auto____$1 = this;
var pred__17110 = cljs.core.keyword_identical_QMARK_;
var expr__17111 = k__4342__auto__;
if(cljs.core.truth_((function (){var G__17113 = cljs.core.constant$keyword$158;
var G__17114 = expr__17111;
return (pred__17110.cljs$core$IFn$_invoke$arity$2 ? pred__17110.cljs$core$IFn$_invoke$arity$2(G__17113,G__17114) : pred__17110.call(null,G__17113,G__17114));
})())){
return (new arimaa.game.Turn(G__17106,self__.colour,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17115 = cljs.core.constant$keyword$151;
var G__17116 = expr__17111;
return (pred__17110.cljs$core$IFn$_invoke$arity$2 ? pred__17110.cljs$core$IFn$_invoke$arity$2(G__17115,G__17116) : pred__17110.call(null,G__17115,G__17116));
})())){
return (new arimaa.game.Turn(self__.number,G__17106,self__.__meta,self__.__extmap,null));
} else {
return (new arimaa.game.Turn(self__.number,self__.colour,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4342__auto__,G__17106),null));
}
}
});

arimaa.game.Turn.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4346__auto__){
var self__ = this;
var this__4346__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$158,self__.number],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$151,self__.colour],null))], null),self__.__extmap));
});

arimaa.game.Turn.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4333__auto__,G__17106){
var self__ = this;
var this__4333__auto____$1 = this;
return (new arimaa.game.Turn(self__.number,self__.colour,G__17106,self__.__extmap,self__.__hash));
});

arimaa.game.Turn.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4339__auto__,entry__4340__auto__){
var self__ = this;
var this__4339__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4340__auto__)){
return cljs.core._assoc(this__4339__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4340__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4340__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4339__auto____$1,entry__4340__auto__);
}
});

arimaa.game.Turn.cljs$lang$type = true;

arimaa.game.Turn.cljs$lang$ctorPrSeq = (function (this__4368__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"arimaa.game/Turn");
});

arimaa.game.Turn.cljs$lang$ctorPrWriter = (function (this__4368__auto__,writer__4369__auto__){
return cljs.core._write(writer__4369__auto__,"arimaa.game/Turn");
});

arimaa.game.__GT_Turn = (function __GT_Turn(number,colour){
return (new arimaa.game.Turn(number,colour,null,null,null));
});

arimaa.game.map__GT_Turn = (function map__GT_Turn(G__17108){
return (new arimaa.game.Turn(cljs.core.constant$keyword$158.cljs$core$IFn$_invoke$arity$1(G__17108),cljs.core.constant$keyword$151.cljs$core$IFn$_invoke$arity$1(G__17108),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17108,cljs.core.constant$keyword$158,cljs.core.array_seq([cljs.core.constant$keyword$151], 0)),null));
});


/**
* @constructor
* @param {*} turn
* @param {*} steps
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
arimaa.game.Move = (function (turn,steps,__meta,__extmap,__hash){
this.turn = turn;
this.steps = steps;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
arimaa.game.Move.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4334__auto__,k__4335__auto__){
var self__ = this;
var this__4334__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4334__auto____$1,k__4335__auto__,null);
});

arimaa.game.Move.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4336__auto__,k17119,else__4337__auto__){
var self__ = this;
var this__4336__auto____$1 = this;
var G__17121 = (((k17119 instanceof cljs.core.Keyword))?k17119.fqn:null);
switch (G__17121) {
case "steps":
return self__.steps;

break;
case "turn":
return self__.turn;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17119,else__4337__auto__);

}
});

arimaa.game.Move.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4348__auto__,writer__4349__auto__,opts__4350__auto__){
var self__ = this;
var this__4348__auto____$1 = this;
var pr_pair__4351__auto__ = ((function (this__4348__auto____$1){
return (function (keyval__4352__auto__){
return cljs.core.pr_sequential_writer(writer__4349__auto__,cljs.core.pr_writer,""," ","",opts__4350__auto__,keyval__4352__auto__);
});})(this__4348__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4349__auto__,pr_pair__4351__auto__,"#arimaa.game.Move{",", ","}",opts__4350__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$159,self__.turn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$160,self__.steps],null))], null),self__.__extmap));
});

arimaa.game.Move.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4332__auto__){
var self__ = this;
var this__4332__auto____$1 = this;
return self__.__meta;
});

arimaa.game.Move.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4328__auto__){
var self__ = this;
var this__4328__auto____$1 = this;
return (new arimaa.game.Move(self__.turn,self__.steps,self__.__meta,self__.__extmap,self__.__hash));
});

arimaa.game.Move.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4338__auto__){
var self__ = this;
var this__4338__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

arimaa.game.Move.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4329__auto__){
var self__ = this;
var this__4329__auto____$1 = this;
var h__4152__auto__ = self__.__hash;
if(!((h__4152__auto__ == null))){
return h__4152__auto__;
} else {
var h__4152__auto____$1 = cljs.core.hash_imap(this__4329__auto____$1);
self__.__hash = h__4152__auto____$1;

return h__4152__auto____$1;
}
});

arimaa.game.Move.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4330__auto__,other__4331__auto__){
var self__ = this;
var this__4330__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3719__auto__ = other__4331__auto__;
if(cljs.core.truth_(and__3719__auto__)){
return ((this__4330__auto____$1.constructor === other__4331__auto__.constructor)) && (cljs.core.equiv_map(this__4330__auto____$1,other__4331__auto__));
} else {
return and__3719__auto__;
}
})())){
return true;
} else {
return false;
}
});

arimaa.game.Move.prototype.arimaa$game$AShow$ = true;

arimaa.game.Move.prototype.arimaa$game$AShow$show$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return [cljs.core.str(arimaa.game.show(self__.turn)),cljs.core.str(" "),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.game.show,self__.steps))))].join('');
});

arimaa.game.Move.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4343__auto__,k__4344__auto__){
var self__ = this;
var this__4343__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$160,null,cljs.core.constant$keyword$159,null], null), null),k__4344__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4343__auto____$1),self__.__meta),k__4344__auto__);
} else {
return (new arimaa.game.Move(self__.turn,self__.steps,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4344__auto__)),null));
}
});

arimaa.game.Move.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4341__auto__,k__4342__auto__,G__17118){
var self__ = this;
var this__4341__auto____$1 = this;
var pred__17122 = cljs.core.keyword_identical_QMARK_;
var expr__17123 = k__4342__auto__;
if(cljs.core.truth_((function (){var G__17125 = cljs.core.constant$keyword$159;
var G__17126 = expr__17123;
return (pred__17122.cljs$core$IFn$_invoke$arity$2 ? pred__17122.cljs$core$IFn$_invoke$arity$2(G__17125,G__17126) : pred__17122.call(null,G__17125,G__17126));
})())){
return (new arimaa.game.Move(G__17118,self__.steps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17127 = cljs.core.constant$keyword$160;
var G__17128 = expr__17123;
return (pred__17122.cljs$core$IFn$_invoke$arity$2 ? pred__17122.cljs$core$IFn$_invoke$arity$2(G__17127,G__17128) : pred__17122.call(null,G__17127,G__17128));
})())){
return (new arimaa.game.Move(self__.turn,G__17118,self__.__meta,self__.__extmap,null));
} else {
return (new arimaa.game.Move(self__.turn,self__.steps,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4342__auto__,G__17118),null));
}
}
});

arimaa.game.Move.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4346__auto__){
var self__ = this;
var this__4346__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$159,self__.turn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$160,self__.steps],null))], null),self__.__extmap));
});

arimaa.game.Move.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4333__auto__,G__17118){
var self__ = this;
var this__4333__auto____$1 = this;
return (new arimaa.game.Move(self__.turn,self__.steps,G__17118,self__.__extmap,self__.__hash));
});

arimaa.game.Move.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4339__auto__,entry__4340__auto__){
var self__ = this;
var this__4339__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4340__auto__)){
return cljs.core._assoc(this__4339__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4340__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4340__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4339__auto____$1,entry__4340__auto__);
}
});

arimaa.game.Move.cljs$lang$type = true;

arimaa.game.Move.cljs$lang$ctorPrSeq = (function (this__4368__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"arimaa.game/Move");
});

arimaa.game.Move.cljs$lang$ctorPrWriter = (function (this__4368__auto__,writer__4369__auto__){
return cljs.core._write(writer__4369__auto__,"arimaa.game/Move");
});

arimaa.game.__GT_Move = (function __GT_Move(turn,steps){
return (new arimaa.game.Move(turn,steps,null,null,null));
});

arimaa.game.map__GT_Move = (function map__GT_Move(G__17120){
return (new arimaa.game.Move(cljs.core.constant$keyword$159.cljs$core$IFn$_invoke$arity$1(G__17120),cljs.core.constant$keyword$160.cljs$core$IFn$_invoke$arity$1(G__17120),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17120,cljs.core.constant$keyword$159,cljs.core.array_seq([cljs.core.constant$keyword$160], 0)),null));
});

arimaa.game.adjacent_squares = (function adjacent_squares(square){
var col = cljs.core.constant$keyword$148.cljs$core$IFn$_invoke$arity$1(square);
var row = cljs.core.constant$keyword$149.cljs$core$IFn$_invoke$arity$1(square);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.PersistentHashSet.fromArray([((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),row))?(new arimaa.game.Square(col,(row - (1)),null,null,null)):null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((8),row))?(new arimaa.game.Square(col,(row + (1)),null,null,null)):null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("a",col))?(new arimaa.game.Square((col - (1)),row,null,null,null)):null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("h",col))?(new arimaa.game.Square((col + (1)),row,null,null,null)):null)], true));
});
arimaa.game.pieces_at = (function pieces_at(board,squares){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (piece_position){
var G__17131 = cljs.core.constant$keyword$153.cljs$core$IFn$_invoke$arity$1(piece_position);
return (squares.cljs$core$IFn$_invoke$arity$1 ? squares.cljs$core$IFn$_invoke$arity$1(G__17131) : squares.call(null,G__17131));
}),board);
});
arimaa.game.stronger_animals = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$136,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$137,null,cljs.core.constant$keyword$138,null,cljs.core.constant$keyword$141,null,cljs.core.constant$keyword$140,null,cljs.core.constant$keyword$139,null], null), null),cljs.core.constant$keyword$137,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$138,null,cljs.core.constant$keyword$141,null,cljs.core.constant$keyword$140,null,cljs.core.constant$keyword$139,null], null), null),cljs.core.constant$keyword$138,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$141,null,cljs.core.constant$keyword$140,null,cljs.core.constant$keyword$139,null], null), null),cljs.core.constant$keyword$139,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$141,null,cljs.core.constant$keyword$140,null], null), null),cljs.core.constant$keyword$140,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$141,null], null), null),cljs.core.constant$keyword$141,cljs.core.PersistentHashSet.EMPTY], null);
arimaa.game.weaker_animals = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$141,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$137,null,cljs.core.constant$keyword$138,null,cljs.core.constant$keyword$140,null,cljs.core.constant$keyword$136,null,cljs.core.constant$keyword$139,null], null), null),cljs.core.constant$keyword$140,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$137,null,cljs.core.constant$keyword$138,null,cljs.core.constant$keyword$136,null,cljs.core.constant$keyword$139,null], null), null),cljs.core.constant$keyword$139,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$137,null,cljs.core.constant$keyword$138,null,cljs.core.constant$keyword$136,null], null), null),cljs.core.constant$keyword$138,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$137,null,cljs.core.constant$keyword$136,null], null), null),cljs.core.constant$keyword$137,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$136,null], null), null),cljs.core.constant$keyword$136,cljs.core.PersistentHashSet.EMPTY], null);
arimaa.game.friendly_pieces = (function friendly_pieces(piece_position,piece_positions){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__17132_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$151.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$152.cljs$core$IFn$_invoke$arity$1(piece_position)),cljs.core.constant$keyword$151.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$152.cljs$core$IFn$_invoke$arity$1(p1__17132_SHARP_)));
}),piece_positions);
});
arimaa.game.enemy_pieces = (function enemy_pieces(piece_position,piece_positions){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__17133_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$151.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$152.cljs$core$IFn$_invoke$arity$1(piece_position)),cljs.core.constant$keyword$151.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$152.cljs$core$IFn$_invoke$arity$1(p1__17133_SHARP_)));
}),piece_positions);
});
arimaa.game.stronger_enemy_pieces = (function stronger_enemy_pieces(piece_position,piece_positions){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (){var G__17135 = cljs.core.constant$keyword$150.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$152.cljs$core$IFn$_invoke$arity$1(piece_position));
return (arimaa.game.stronger_animals.cljs$core$IFn$_invoke$arity$1 ? arimaa.game.stronger_animals.cljs$core$IFn$_invoke$arity$1(G__17135) : arimaa.game.stronger_animals.call(null,G__17135));
})(),arimaa.game.enemy_pieces(piece_position,piece_positions));
});
arimaa.game.weaker_enemy_pieces = (function weaker_enemy_pieces(piece_position,piece_positions){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (){var G__17137 = cljs.core.constant$keyword$150.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$152.cljs$core$IFn$_invoke$arity$1(piece_position));
return (arimaa.game.weaker_animals.cljs$core$IFn$_invoke$arity$1 ? arimaa.game.weaker_animals.cljs$core$IFn$_invoke$arity$1(G__17137) : arimaa.game.weaker_animals.call(null,G__17137));
})(),arimaa.game.enemy_pieces(piece_position,piece_positions));
});
arimaa.game.is_frozen = (function is_frozen(piece,adjacent_pieces){
var colour = cljs.core.constant$keyword$151.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$152.cljs$core$IFn$_invoke$arity$1(piece));
var stronger_anmls = (function (){var G__17139 = piece;
return (arimaa.game.stronger_animals.cljs$core$IFn$_invoke$arity$1 ? arimaa.game.stronger_animals.cljs$core$IFn$_invoke$arity$1(G__17139) : arimaa.game.stronger_animals.call(null,G__17139));
})();
return (cljs.core.empty_QMARK_(arimaa.game.friendly_pieces(piece,adjacent_pieces))) && (!(cljs.core.empty_QMARK_(arimaa.game.stronger_enemy_pieces(piece,adjacent_pieces))));
});
arimaa.game.find_empty = (function find_empty(squares,board){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$153,board)),squares);
});
arimaa.game.position_after_move = (function position_after_move(position,move){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__17140_SHARP_){
return arimaa.game.update_position(p1__17140_SHARP_,p1__17140_SHARP_);
}),position,cljs.core.constant$keyword$160.cljs$core$IFn$_invoke$arity$1(move));
});
