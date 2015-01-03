// Compiled by ClojureScript 0.0-2511
goog.provide('arimaa.game');
goog.require('cljs.core');
arimaa.game.animals = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$44,cljs.core.constant$keyword$45,cljs.core.constant$keyword$46,cljs.core.constant$keyword$47,cljs.core.constant$keyword$48,cljs.core.constant$keyword$49], null);
arimaa.game.colour = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$50,cljs.core.constant$keyword$51], null);
arimaa.game.direction = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$52,cljs.core.constant$keyword$53,cljs.core.constant$keyword$54,cljs.core.constant$keyword$55], null);

arimaa.game.AShow = (function (){var obj16403 = {};
return obj16403;
})();

arimaa.game.show = (function show(this$){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.arimaa$game$AShow$show$arity$1;
} else {
return and__3618__auto__;
}
})()){
return this$.arimaa$game$AShow$show$arity$1(this$);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (arimaa.game.show[(function (){var G__16407 = x__4274__auto__;
return goog.typeOf(G__16407);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (arimaa.game.show["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
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
arimaa.game.Square.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4233__auto__,k__4234__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4233__auto____$1,k__4234__auto__,null);
});

arimaa.game.Square.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4235__auto__,k16409,else__4236__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
var G__16411 = (((k16409 instanceof cljs.core.Keyword))?k16409.fqn:null);
switch (G__16411) {
case "row":
return self__.row;

break;
case "col":
return self__.col;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16409,else__4236__auto__);

}
});

arimaa.game.Square.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4247__auto__,writer__4248__auto__,opts__4249__auto__){
var self__ = this;
var this__4247__auto____$1 = this;
var pr_pair__4250__auto__ = ((function (this__4247__auto____$1){
return (function (keyval__4251__auto__){
return cljs.core.pr_sequential_writer(writer__4248__auto__,cljs.core.pr_writer,""," ","",opts__4249__auto__,keyval__4251__auto__);
});})(this__4247__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4248__auto__,pr_pair__4250__auto__,"#arimaa.game.Square{",", ","}",opts__4249__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$56,self__.col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$57,self__.row],null))], null),self__.__extmap));
});

arimaa.game.Square.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4231__auto__){
var self__ = this;
var this__4231__auto____$1 = this;
return self__.__meta;
});

arimaa.game.Square.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4227__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
return (new arimaa.game.Square(self__.col,self__.row,self__.__meta,self__.__extmap,self__.__hash));
});

arimaa.game.Square.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4237__auto__){
var self__ = this;
var this__4237__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

arimaa.game.Square.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4228__auto__){
var self__ = this;
var this__4228__auto____$1 = this;
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_imap(this__4228__auto____$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
}
});

arimaa.game.Square.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4229__auto__,other__4230__auto__){
var self__ = this;
var this__4229__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3618__auto__ = other__4230__auto__;
if(cljs.core.truth_(and__3618__auto__)){
return ((this__4229__auto____$1.constructor === other__4230__auto__.constructor)) && (cljs.core.equiv_map(this__4229__auto____$1,other__4230__auto__));
} else {
return and__3618__auto__;
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

arimaa.game.Square.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4242__auto__,k__4243__auto__){
var self__ = this;
var this__4242__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$56,null,cljs.core.constant$keyword$57,null], null), null),k__4243__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4242__auto____$1),self__.__meta),k__4243__auto__);
} else {
return (new arimaa.game.Square(self__.col,self__.row,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4243__auto__)),null));
}
});

arimaa.game.Square.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4240__auto__,k__4241__auto__,G__16408){
var self__ = this;
var this__4240__auto____$1 = this;
var pred__16412 = cljs.core.keyword_identical_QMARK_;
var expr__16413 = k__4241__auto__;
if(cljs.core.truth_((function (){var G__16415 = cljs.core.constant$keyword$56;
var G__16416 = expr__16413;
return (pred__16412.cljs$core$IFn$_invoke$arity$2 ? pred__16412.cljs$core$IFn$_invoke$arity$2(G__16415,G__16416) : pred__16412.call(null,G__16415,G__16416));
})())){
return (new arimaa.game.Square(G__16408,self__.row,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16417 = cljs.core.constant$keyword$57;
var G__16418 = expr__16413;
return (pred__16412.cljs$core$IFn$_invoke$arity$2 ? pred__16412.cljs$core$IFn$_invoke$arity$2(G__16417,G__16418) : pred__16412.call(null,G__16417,G__16418));
})())){
return (new arimaa.game.Square(self__.col,G__16408,self__.__meta,self__.__extmap,null));
} else {
return (new arimaa.game.Square(self__.col,self__.row,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4241__auto__,G__16408),null));
}
}
});

arimaa.game.Square.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4245__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$56,self__.col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$57,self__.row],null))], null),self__.__extmap));
});

arimaa.game.Square.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4232__auto__,G__16408){
var self__ = this;
var this__4232__auto____$1 = this;
return (new arimaa.game.Square(self__.col,self__.row,G__16408,self__.__extmap,self__.__hash));
});

arimaa.game.Square.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4238__auto__,entry__4239__auto__){
var self__ = this;
var this__4238__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4239__auto__)){
return cljs.core._assoc(this__4238__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4239__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4239__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4238__auto____$1,entry__4239__auto__);
}
});

arimaa.game.Square.cljs$lang$type = true;

arimaa.game.Square.cljs$lang$ctorPrSeq = (function (this__4267__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"arimaa.game/Square");
});

arimaa.game.Square.cljs$lang$ctorPrWriter = (function (this__4267__auto__,writer__4268__auto__){
return cljs.core._write(writer__4268__auto__,"arimaa.game/Square");
});

arimaa.game.__GT_Square = (function __GT_Square(col,row){
return (new arimaa.game.Square(col,row,null,null,null));
});

arimaa.game.map__GT_Square = (function map__GT_Square(G__16410){
return (new arimaa.game.Square(cljs.core.constant$keyword$56.cljs$core$IFn$_invoke$arity$1(G__16410),cljs.core.constant$keyword$57.cljs$core$IFn$_invoke$arity$1(G__16410),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16410,cljs.core.constant$keyword$56,cljs.core.array_seq([cljs.core.constant$keyword$57], 0)),null));
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
arimaa.game.Piece.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4233__auto__,k__4234__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4233__auto____$1,k__4234__auto__,null);
});

arimaa.game.Piece.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4235__auto__,k16421,else__4236__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
var G__16423 = (((k16421 instanceof cljs.core.Keyword))?k16421.fqn:null);
switch (G__16423) {
case "colour":
return self__.colour;

break;
case "animal":
return self__.animal;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16421,else__4236__auto__);

}
});

arimaa.game.Piece.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4247__auto__,writer__4248__auto__,opts__4249__auto__){
var self__ = this;
var this__4247__auto____$1 = this;
var pr_pair__4250__auto__ = ((function (this__4247__auto____$1){
return (function (keyval__4251__auto__){
return cljs.core.pr_sequential_writer(writer__4248__auto__,cljs.core.pr_writer,""," ","",opts__4249__auto__,keyval__4251__auto__);
});})(this__4247__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4248__auto__,pr_pair__4250__auto__,"#arimaa.game.Piece{",", ","}",opts__4249__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$58,self__.animal],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$59,self__.colour],null))], null),self__.__extmap));
});

arimaa.game.Piece.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4231__auto__){
var self__ = this;
var this__4231__auto____$1 = this;
return self__.__meta;
});

arimaa.game.Piece.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4227__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
return (new arimaa.game.Piece(self__.animal,self__.colour,self__.__meta,self__.__extmap,self__.__hash));
});

arimaa.game.Piece.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4237__auto__){
var self__ = this;
var this__4237__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

arimaa.game.Piece.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4228__auto__){
var self__ = this;
var this__4228__auto____$1 = this;
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_imap(this__4228__auto____$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
}
});

arimaa.game.Piece.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4229__auto__,other__4230__auto__){
var self__ = this;
var this__4229__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3618__auto__ = other__4230__auto__;
if(cljs.core.truth_(and__3618__auto__)){
return ((this__4229__auto____$1.constructor === other__4230__auto__.constructor)) && (cljs.core.equiv_map(this__4229__auto____$1,other__4230__auto__));
} else {
return and__3618__auto__;
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
var animal_char = (function (){var G__16424 = (((self__.animal instanceof cljs.core.Keyword))?self__.animal.fqn:null);
switch (G__16424) {
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$50,self__.colour)){
return animal_char.toUpperCase();
} else {
return animal_char;
}
});

arimaa.game.Piece.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4242__auto__,k__4243__auto__){
var self__ = this;
var this__4242__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$58,null,cljs.core.constant$keyword$59,null], null), null),k__4243__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4242__auto____$1),self__.__meta),k__4243__auto__);
} else {
return (new arimaa.game.Piece(self__.animal,self__.colour,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4243__auto__)),null));
}
});

arimaa.game.Piece.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4240__auto__,k__4241__auto__,G__16420){
var self__ = this;
var this__4240__auto____$1 = this;
var pred__16425 = cljs.core.keyword_identical_QMARK_;
var expr__16426 = k__4241__auto__;
if(cljs.core.truth_((function (){var G__16428 = cljs.core.constant$keyword$58;
var G__16429 = expr__16426;
return (pred__16425.cljs$core$IFn$_invoke$arity$2 ? pred__16425.cljs$core$IFn$_invoke$arity$2(G__16428,G__16429) : pred__16425.call(null,G__16428,G__16429));
})())){
return (new arimaa.game.Piece(G__16420,self__.colour,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16430 = cljs.core.constant$keyword$59;
var G__16431 = expr__16426;
return (pred__16425.cljs$core$IFn$_invoke$arity$2 ? pred__16425.cljs$core$IFn$_invoke$arity$2(G__16430,G__16431) : pred__16425.call(null,G__16430,G__16431));
})())){
return (new arimaa.game.Piece(self__.animal,G__16420,self__.__meta,self__.__extmap,null));
} else {
return (new arimaa.game.Piece(self__.animal,self__.colour,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4241__auto__,G__16420),null));
}
}
});

arimaa.game.Piece.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4245__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$58,self__.animal],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$59,self__.colour],null))], null),self__.__extmap));
});

arimaa.game.Piece.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4232__auto__,G__16420){
var self__ = this;
var this__4232__auto____$1 = this;
return (new arimaa.game.Piece(self__.animal,self__.colour,G__16420,self__.__extmap,self__.__hash));
});

arimaa.game.Piece.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4238__auto__,entry__4239__auto__){
var self__ = this;
var this__4238__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4239__auto__)){
return cljs.core._assoc(this__4238__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4239__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4239__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4238__auto____$1,entry__4239__auto__);
}
});

arimaa.game.Piece.cljs$lang$type = true;

arimaa.game.Piece.cljs$lang$ctorPrSeq = (function (this__4267__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"arimaa.game/Piece");
});

arimaa.game.Piece.cljs$lang$ctorPrWriter = (function (this__4267__auto__,writer__4268__auto__){
return cljs.core._write(writer__4268__auto__,"arimaa.game/Piece");
});

arimaa.game.__GT_Piece = (function __GT_Piece(animal,colour){
return (new arimaa.game.Piece(animal,colour,null,null,null));
});

arimaa.game.map__GT_Piece = (function map__GT_Piece(G__16422){
return (new arimaa.game.Piece(cljs.core.constant$keyword$58.cljs$core$IFn$_invoke$arity$1(G__16422),cljs.core.constant$keyword$59.cljs$core$IFn$_invoke$arity$1(G__16422),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16422,cljs.core.constant$keyword$58,cljs.core.array_seq([cljs.core.constant$keyword$59], 0)),null));
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
arimaa.game.PiecePosition.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4233__auto__,k__4234__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4233__auto____$1,k__4234__auto__,null);
});

arimaa.game.PiecePosition.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4235__auto__,k16435,else__4236__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
var G__16437 = (((k16435 instanceof cljs.core.Keyword))?k16435.fqn:null);
switch (G__16437) {
case "square":
return self__.square;

break;
case "piece":
return self__.piece;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16435,else__4236__auto__);

}
});

arimaa.game.PiecePosition.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4247__auto__,writer__4248__auto__,opts__4249__auto__){
var self__ = this;
var this__4247__auto____$1 = this;
var pr_pair__4250__auto__ = ((function (this__4247__auto____$1){
return (function (keyval__4251__auto__){
return cljs.core.pr_sequential_writer(writer__4248__auto__,cljs.core.pr_writer,""," ","",opts__4249__auto__,keyval__4251__auto__);
});})(this__4247__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4248__auto__,pr_pair__4250__auto__,"#arimaa.game.PiecePosition{",", ","}",opts__4249__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$60,self__.piece],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$61,self__.square],null))], null),self__.__extmap));
});

arimaa.game.PiecePosition.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4231__auto__){
var self__ = this;
var this__4231__auto____$1 = this;
return self__.__meta;
});

arimaa.game.PiecePosition.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4227__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
return (new arimaa.game.PiecePosition(self__.piece,self__.square,self__.__meta,self__.__extmap,self__.__hash));
});

arimaa.game.PiecePosition.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4237__auto__){
var self__ = this;
var this__4237__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

arimaa.game.PiecePosition.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4228__auto__){
var self__ = this;
var this__4228__auto____$1 = this;
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_imap(this__4228__auto____$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
}
});

arimaa.game.PiecePosition.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4229__auto__,other__4230__auto__){
var self__ = this;
var this__4229__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3618__auto__ = other__4230__auto__;
if(cljs.core.truth_(and__3618__auto__)){
return ((this__4229__auto____$1.constructor === other__4230__auto__.constructor)) && (cljs.core.equiv_map(this__4229__auto____$1,other__4230__auto__));
} else {
return and__3618__auto__;
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

arimaa.game.PiecePosition.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4242__auto__,k__4243__auto__){
var self__ = this;
var this__4242__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$60,null,cljs.core.constant$keyword$61,null], null), null),k__4243__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4242__auto____$1),self__.__meta),k__4243__auto__);
} else {
return (new arimaa.game.PiecePosition(self__.piece,self__.square,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4243__auto__)),null));
}
});

arimaa.game.PiecePosition.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4240__auto__,k__4241__auto__,G__16434){
var self__ = this;
var this__4240__auto____$1 = this;
var pred__16438 = cljs.core.keyword_identical_QMARK_;
var expr__16439 = k__4241__auto__;
if(cljs.core.truth_((function (){var G__16441 = cljs.core.constant$keyword$60;
var G__16442 = expr__16439;
return (pred__16438.cljs$core$IFn$_invoke$arity$2 ? pred__16438.cljs$core$IFn$_invoke$arity$2(G__16441,G__16442) : pred__16438.call(null,G__16441,G__16442));
})())){
return (new arimaa.game.PiecePosition(G__16434,self__.square,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16443 = cljs.core.constant$keyword$61;
var G__16444 = expr__16439;
return (pred__16438.cljs$core$IFn$_invoke$arity$2 ? pred__16438.cljs$core$IFn$_invoke$arity$2(G__16443,G__16444) : pred__16438.call(null,G__16443,G__16444));
})())){
return (new arimaa.game.PiecePosition(self__.piece,G__16434,self__.__meta,self__.__extmap,null));
} else {
return (new arimaa.game.PiecePosition(self__.piece,self__.square,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4241__auto__,G__16434),null));
}
}
});

arimaa.game.PiecePosition.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4245__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$60,self__.piece],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$61,self__.square],null))], null),self__.__extmap));
});

arimaa.game.PiecePosition.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4232__auto__,G__16434){
var self__ = this;
var this__4232__auto____$1 = this;
return (new arimaa.game.PiecePosition(self__.piece,self__.square,G__16434,self__.__extmap,self__.__hash));
});

arimaa.game.PiecePosition.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4238__auto__,entry__4239__auto__){
var self__ = this;
var this__4238__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4239__auto__)){
return cljs.core._assoc(this__4238__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4239__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4239__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4238__auto____$1,entry__4239__auto__);
}
});

arimaa.game.PiecePosition.cljs$lang$type = true;

arimaa.game.PiecePosition.cljs$lang$ctorPrSeq = (function (this__4267__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"arimaa.game/PiecePosition");
});

arimaa.game.PiecePosition.cljs$lang$ctorPrWriter = (function (this__4267__auto__,writer__4268__auto__){
return cljs.core._write(writer__4268__auto__,"arimaa.game/PiecePosition");
});

arimaa.game.__GT_PiecePosition = (function __GT_PiecePosition(piece,square){
return (new arimaa.game.PiecePosition(piece,square,null,null,null));
});

arimaa.game.map__GT_PiecePosition = (function map__GT_PiecePosition(G__16436){
return (new arimaa.game.PiecePosition(cljs.core.constant$keyword$60.cljs$core$IFn$_invoke$arity$1(G__16436),cljs.core.constant$keyword$61.cljs$core$IFn$_invoke$arity$1(G__16436),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16436,cljs.core.constant$keyword$60,cljs.core.array_seq([cljs.core.constant$keyword$61], 0)),null));
});


arimaa.game.ASteps = (function (){var obj16447 = {};
return obj16447;
})();

arimaa.game.step_count = (function step_count(this$){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.arimaa$game$ASteps$step_count$arity$1;
} else {
return and__3618__auto__;
}
})()){
return this$.arimaa$game$ASteps$step_count$arity$1(this$);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (arimaa.game.step_count[(function (){var G__16451 = x__4274__auto__;
return goog.typeOf(G__16451);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (arimaa.game.step_count["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("ASteps.step-count",this$);
}
}
})().call(null,this$);
}
});

arimaa.game.steps = (function steps(this$){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.arimaa$game$ASteps$steps$arity$1;
} else {
return and__3618__auto__;
}
})()){
return this$.arimaa$game$ASteps$steps$arity$1(this$);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (arimaa.game.steps[(function (){var G__16455 = x__4274__auto__;
return goog.typeOf(G__16455);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (arimaa.game.steps["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("ASteps.steps",this$);
}
}
})().call(null,this$);
}
});


arimaa.game.AUpdatePosition = (function (){var obj16457 = {};
return obj16457;
})();

arimaa.game.update_position = (function update_position(this$,position){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.arimaa$game$AUpdatePosition$update_position$arity$2;
} else {
return and__3618__auto__;
}
})()){
return this$.arimaa$game$AUpdatePosition$update_position$arity$2(this$,position);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (arimaa.game.update_position[(function (){var G__16461 = x__4274__auto__;
return goog.typeOf(G__16461);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (arimaa.game.update_position["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
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
arimaa.game.PlaceStartingPiece.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4233__auto__,k__4234__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4233__auto____$1,k__4234__auto__,null);
});

arimaa.game.PlaceStartingPiece.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4235__auto__,k16463,else__4236__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
var G__16465 = (((k16463 instanceof cljs.core.Keyword))?k16463.fqn:null);
switch (G__16465) {
case "piece-position":
return self__.piece_position;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16463,else__4236__auto__);

}
});

arimaa.game.PlaceStartingPiece.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4247__auto__,writer__4248__auto__,opts__4249__auto__){
var self__ = this;
var this__4247__auto____$1 = this;
var pr_pair__4250__auto__ = ((function (this__4247__auto____$1){
return (function (keyval__4251__auto__){
return cljs.core.pr_sequential_writer(writer__4248__auto__,cljs.core.pr_writer,""," ","",opts__4249__auto__,keyval__4251__auto__);
});})(this__4247__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4248__auto__,pr_pair__4250__auto__,"#arimaa.game.PlaceStartingPiece{",", ","}",opts__4249__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$62,self__.piece_position],null))], null),self__.__extmap));
});

arimaa.game.PlaceStartingPiece.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4231__auto__){
var self__ = this;
var this__4231__auto____$1 = this;
return self__.__meta;
});

arimaa.game.PlaceStartingPiece.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4227__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
return (new arimaa.game.PlaceStartingPiece(self__.piece_position,self__.__meta,self__.__extmap,self__.__hash));
});

arimaa.game.PlaceStartingPiece.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4237__auto__){
var self__ = this;
var this__4237__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

arimaa.game.PlaceStartingPiece.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4228__auto__){
var self__ = this;
var this__4228__auto____$1 = this;
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_imap(this__4228__auto____$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
}
});

arimaa.game.PlaceStartingPiece.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4229__auto__,other__4230__auto__){
var self__ = this;
var this__4229__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3618__auto__ = other__4230__auto__;
if(cljs.core.truth_(and__3618__auto__)){
return ((this__4229__auto____$1.constructor === other__4230__auto__.constructor)) && (cljs.core.equiv_map(this__4229__auto____$1,other__4230__auto__));
} else {
return and__3618__auto__;
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

arimaa.game.PlaceStartingPiece.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4242__auto__,k__4243__auto__){
var self__ = this;
var this__4242__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$62,null], null), null),k__4243__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4242__auto____$1),self__.__meta),k__4243__auto__);
} else {
return (new arimaa.game.PlaceStartingPiece(self__.piece_position,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4243__auto__)),null));
}
});

arimaa.game.PlaceStartingPiece.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4240__auto__,k__4241__auto__,G__16462){
var self__ = this;
var this__4240__auto____$1 = this;
var pred__16466 = cljs.core.keyword_identical_QMARK_;
var expr__16467 = k__4241__auto__;
if(cljs.core.truth_((function (){var G__16469 = cljs.core.constant$keyword$62;
var G__16470 = expr__16467;
return (pred__16466.cljs$core$IFn$_invoke$arity$2 ? pred__16466.cljs$core$IFn$_invoke$arity$2(G__16469,G__16470) : pred__16466.call(null,G__16469,G__16470));
})())){
return (new arimaa.game.PlaceStartingPiece(G__16462,self__.__meta,self__.__extmap,null));
} else {
return (new arimaa.game.PlaceStartingPiece(self__.piece_position,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4241__auto__,G__16462),null));
}
});

arimaa.game.PlaceStartingPiece.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4245__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$62,self__.piece_position],null))], null),self__.__extmap));
});

arimaa.game.PlaceStartingPiece.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4232__auto__,G__16462){
var self__ = this;
var this__4232__auto____$1 = this;
return (new arimaa.game.PlaceStartingPiece(self__.piece_position,G__16462,self__.__extmap,self__.__hash));
});

arimaa.game.PlaceStartingPiece.prototype.arimaa$game$AUpdatePosition$ = true;

arimaa.game.PlaceStartingPiece.prototype.arimaa$game$AUpdatePosition$update_position$arity$2 = (function (this$,position){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(self__.piece_position,position);
});

arimaa.game.PlaceStartingPiece.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4238__auto__,entry__4239__auto__){
var self__ = this;
var this__4238__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4239__auto__)){
return cljs.core._assoc(this__4238__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4239__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4239__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4238__auto____$1,entry__4239__auto__);
}
});

arimaa.game.PlaceStartingPiece.cljs$lang$type = true;

arimaa.game.PlaceStartingPiece.cljs$lang$ctorPrSeq = (function (this__4267__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"arimaa.game/PlaceStartingPiece");
});

arimaa.game.PlaceStartingPiece.cljs$lang$ctorPrWriter = (function (this__4267__auto__,writer__4268__auto__){
return cljs.core._write(writer__4268__auto__,"arimaa.game/PlaceStartingPiece");
});

arimaa.game.__GT_PlaceStartingPiece = (function __GT_PlaceStartingPiece(piece_position){
return (new arimaa.game.PlaceStartingPiece(piece_position,null,null,null));
});

arimaa.game.map__GT_PlaceStartingPiece = (function map__GT_PlaceStartingPiece(G__16464){
return (new arimaa.game.PlaceStartingPiece(cljs.core.constant$keyword$62.cljs$core$IFn$_invoke$arity$1(G__16464),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16464,cljs.core.constant$keyword$62),null));
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
arimaa.game.Step.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4233__auto__,k__4234__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4233__auto____$1,k__4234__auto__,null);
});

arimaa.game.Step.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4235__auto__,k16473,else__4236__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
var G__16475 = (((k16473 instanceof cljs.core.Keyword))?k16473.fqn:null);
switch (G__16475) {
case "direction":
return self__.direction;

break;
case "piece-position":
return self__.piece_position;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16473,else__4236__auto__);

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

arimaa.game.Step.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4247__auto__,writer__4248__auto__,opts__4249__auto__){
var self__ = this;
var this__4247__auto____$1 = this;
var pr_pair__4250__auto__ = ((function (this__4247__auto____$1){
return (function (keyval__4251__auto__){
return cljs.core.pr_sequential_writer(writer__4248__auto__,cljs.core.pr_writer,""," ","",opts__4249__auto__,keyval__4251__auto__);
});})(this__4247__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4248__auto__,pr_pair__4250__auto__,"#arimaa.game.Step{",", ","}",opts__4249__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$62,self__.piece_position],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$63,self__.direction],null))], null),self__.__extmap));
});

arimaa.game.Step.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4231__auto__){
var self__ = this;
var this__4231__auto____$1 = this;
return self__.__meta;
});

arimaa.game.Step.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4227__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
return (new arimaa.game.Step(self__.piece_position,self__.direction,self__.__meta,self__.__extmap,self__.__hash));
});

arimaa.game.Step.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4237__auto__){
var self__ = this;
var this__4237__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

arimaa.game.Step.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4228__auto__){
var self__ = this;
var this__4228__auto____$1 = this;
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_imap(this__4228__auto____$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
}
});

arimaa.game.Step.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4229__auto__,other__4230__auto__){
var self__ = this;
var this__4229__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3618__auto__ = other__4230__auto__;
if(cljs.core.truth_(and__3618__auto__)){
return ((this__4229__auto____$1.constructor === other__4230__auto__.constructor)) && (cljs.core.equiv_map(this__4229__auto____$1,other__4230__auto__));
} else {
return and__3618__auto__;
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
var direction_char = (function (){var G__16476 = (((self__.direction instanceof cljs.core.Keyword))?self__.direction.fqn:null);
switch (G__16476) {
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

arimaa.game.Step.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4242__auto__,k__4243__auto__){
var self__ = this;
var this__4242__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$62,null,cljs.core.constant$keyword$63,null], null), null),k__4243__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4242__auto____$1),self__.__meta),k__4243__auto__);
} else {
return (new arimaa.game.Step(self__.piece_position,self__.direction,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4243__auto__)),null));
}
});

arimaa.game.Step.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4240__auto__,k__4241__auto__,G__16472){
var self__ = this;
var this__4240__auto____$1 = this;
var pred__16477 = cljs.core.keyword_identical_QMARK_;
var expr__16478 = k__4241__auto__;
if(cljs.core.truth_((function (){var G__16480 = cljs.core.constant$keyword$62;
var G__16481 = expr__16478;
return (pred__16477.cljs$core$IFn$_invoke$arity$2 ? pred__16477.cljs$core$IFn$_invoke$arity$2(G__16480,G__16481) : pred__16477.call(null,G__16480,G__16481));
})())){
return (new arimaa.game.Step(G__16472,self__.direction,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16482 = cljs.core.constant$keyword$63;
var G__16483 = expr__16478;
return (pred__16477.cljs$core$IFn$_invoke$arity$2 ? pred__16477.cljs$core$IFn$_invoke$arity$2(G__16482,G__16483) : pred__16477.call(null,G__16482,G__16483));
})())){
return (new arimaa.game.Step(self__.piece_position,G__16472,self__.__meta,self__.__extmap,null));
} else {
return (new arimaa.game.Step(self__.piece_position,self__.direction,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4241__auto__,G__16472),null));
}
}
});

arimaa.game.Step.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4245__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$62,self__.piece_position],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$63,self__.direction],null))], null),self__.__extmap));
});

arimaa.game.Step.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4232__auto__,G__16472){
var self__ = this;
var this__4232__auto____$1 = this;
return (new arimaa.game.Step(self__.piece_position,self__.direction,G__16472,self__.__extmap,self__.__hash));
});

arimaa.game.Step.prototype.arimaa$game$AUpdatePosition$ = true;

arimaa.game.Step.prototype.arimaa$game$AUpdatePosition$update_position$arity$2 = (function (this$,position){
var self__ = this;
var this$__$1 = this;
var col = cljs.core.constant$keyword$56.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$61.cljs$core$IFn$_invoke$arity$1(self__.piece_position));
var row = cljs.core.constant$keyword$57.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$61.cljs$core$IFn$_invoke$arity$1(self__.piece_position));
var new_square = (function (){var G__16484 = (((self__.direction instanceof cljs.core.Keyword))?self__.direction.fqn:null);
switch (G__16484) {
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
var new_piece_position = (new arimaa.game.PiecePosition(cljs.core.constant$keyword$60.cljs$core$IFn$_invoke$arity$1(self__.piece_position),new_square,null,null,null));
return cljs.core.cons(new_piece_position,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([self__.piece_position], true),position));
});

arimaa.game.Step.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4238__auto__,entry__4239__auto__){
var self__ = this;
var this__4238__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4239__auto__)){
return cljs.core._assoc(this__4238__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4239__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4239__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4238__auto____$1,entry__4239__auto__);
}
});

arimaa.game.Step.cljs$lang$type = true;

arimaa.game.Step.cljs$lang$ctorPrSeq = (function (this__4267__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"arimaa.game/Step");
});

arimaa.game.Step.cljs$lang$ctorPrWriter = (function (this__4267__auto__,writer__4268__auto__){
return cljs.core._write(writer__4268__auto__,"arimaa.game/Step");
});

arimaa.game.__GT_Step = (function __GT_Step(piece_position,direction){
return (new arimaa.game.Step(piece_position,direction,null,null,null));
});

arimaa.game.map__GT_Step = (function map__GT_Step(G__16474){
return (new arimaa.game.Step(cljs.core.constant$keyword$62.cljs$core$IFn$_invoke$arity$1(G__16474),cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1(G__16474),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16474,cljs.core.constant$keyword$62,cljs.core.array_seq([cljs.core.constant$keyword$63], 0)),null));
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
arimaa.game.Capture.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4233__auto__,k__4234__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4233__auto____$1,k__4234__auto__,null);
});

arimaa.game.Capture.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4235__auto__,k16489,else__4236__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
var G__16491 = (((k16489 instanceof cljs.core.Keyword))?k16489.fqn:null);
switch (G__16491) {
case "piece-position":
return self__.piece_position;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16489,else__4236__auto__);

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

arimaa.game.Capture.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4247__auto__,writer__4248__auto__,opts__4249__auto__){
var self__ = this;
var this__4247__auto____$1 = this;
var pr_pair__4250__auto__ = ((function (this__4247__auto____$1){
return (function (keyval__4251__auto__){
return cljs.core.pr_sequential_writer(writer__4248__auto__,cljs.core.pr_writer,""," ","",opts__4249__auto__,keyval__4251__auto__);
});})(this__4247__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4248__auto__,pr_pair__4250__auto__,"#arimaa.game.Capture{",", ","}",opts__4249__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$62,self__.piece_position],null))], null),self__.__extmap));
});

arimaa.game.Capture.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4231__auto__){
var self__ = this;
var this__4231__auto____$1 = this;
return self__.__meta;
});

arimaa.game.Capture.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4227__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
return (new arimaa.game.Capture(self__.piece_position,self__.__meta,self__.__extmap,self__.__hash));
});

arimaa.game.Capture.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4237__auto__){
var self__ = this;
var this__4237__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

arimaa.game.Capture.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4228__auto__){
var self__ = this;
var this__4228__auto____$1 = this;
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_imap(this__4228__auto____$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
}
});

arimaa.game.Capture.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4229__auto__,other__4230__auto__){
var self__ = this;
var this__4229__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3618__auto__ = other__4230__auto__;
if(cljs.core.truth_(and__3618__auto__)){
return ((this__4229__auto____$1.constructor === other__4230__auto__.constructor)) && (cljs.core.equiv_map(this__4229__auto____$1,other__4230__auto__));
} else {
return and__3618__auto__;
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

arimaa.game.Capture.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4242__auto__,k__4243__auto__){
var self__ = this;
var this__4242__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$62,null], null), null),k__4243__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4242__auto____$1),self__.__meta),k__4243__auto__);
} else {
return (new arimaa.game.Capture(self__.piece_position,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4243__auto__)),null));
}
});

arimaa.game.Capture.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4240__auto__,k__4241__auto__,G__16488){
var self__ = this;
var this__4240__auto____$1 = this;
var pred__16492 = cljs.core.keyword_identical_QMARK_;
var expr__16493 = k__4241__auto__;
if(cljs.core.truth_((function (){var G__16495 = cljs.core.constant$keyword$62;
var G__16496 = expr__16493;
return (pred__16492.cljs$core$IFn$_invoke$arity$2 ? pred__16492.cljs$core$IFn$_invoke$arity$2(G__16495,G__16496) : pred__16492.call(null,G__16495,G__16496));
})())){
return (new arimaa.game.Capture(G__16488,self__.__meta,self__.__extmap,null));
} else {
return (new arimaa.game.Capture(self__.piece_position,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4241__auto__,G__16488),null));
}
});

arimaa.game.Capture.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4245__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$62,self__.piece_position],null))], null),self__.__extmap));
});

arimaa.game.Capture.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4232__auto__,G__16488){
var self__ = this;
var this__4232__auto____$1 = this;
return (new arimaa.game.Capture(self__.piece_position,G__16488,self__.__extmap,self__.__hash));
});

arimaa.game.Capture.prototype.arimaa$game$AUpdatePosition$ = true;

arimaa.game.Capture.prototype.arimaa$game$AUpdatePosition$update_position$arity$2 = (function (this$,position){
var self__ = this;
var this$__$1 = this;
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([self__.piece_position], true),position);
});

arimaa.game.Capture.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4238__auto__,entry__4239__auto__){
var self__ = this;
var this__4238__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4239__auto__)){
return cljs.core._assoc(this__4238__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4239__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4239__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4238__auto____$1,entry__4239__auto__);
}
});

arimaa.game.Capture.cljs$lang$type = true;

arimaa.game.Capture.cljs$lang$ctorPrSeq = (function (this__4267__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"arimaa.game/Capture");
});

arimaa.game.Capture.cljs$lang$ctorPrWriter = (function (this__4267__auto__,writer__4268__auto__){
return cljs.core._write(writer__4268__auto__,"arimaa.game/Capture");
});

arimaa.game.__GT_Capture = (function __GT_Capture(piece_position){
return (new arimaa.game.Capture(piece_position,null,null,null));
});

arimaa.game.map__GT_Capture = (function map__GT_Capture(G__16490){
return (new arimaa.game.Capture(cljs.core.constant$keyword$62.cljs$core$IFn$_invoke$arity$1(G__16490),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16490,cljs.core.constant$keyword$62),null));
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
arimaa.game.ForceStep.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4233__auto__,k__4234__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4233__auto____$1,k__4234__auto__,null);
});

arimaa.game.ForceStep.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4235__auto__,k16499,else__4236__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
var G__16501 = (((k16499 instanceof cljs.core.Keyword))?k16499.fqn:null);
switch (G__16501) {
case "step2":
return self__.step2;

break;
case "step1":
return self__.step1;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16499,else__4236__auto__);

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

arimaa.game.ForceStep.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4247__auto__,writer__4248__auto__,opts__4249__auto__){
var self__ = this;
var this__4247__auto____$1 = this;
var pr_pair__4250__auto__ = ((function (this__4247__auto____$1){
return (function (keyval__4251__auto__){
return cljs.core.pr_sequential_writer(writer__4248__auto__,cljs.core.pr_writer,""," ","",opts__4249__auto__,keyval__4251__auto__);
});})(this__4247__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4248__auto__,pr_pair__4250__auto__,"#arimaa.game.ForceStep{",", ","}",opts__4249__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$64,self__.step1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$65,self__.step2],null))], null),self__.__extmap));
});

arimaa.game.ForceStep.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4231__auto__){
var self__ = this;
var this__4231__auto____$1 = this;
return self__.__meta;
});

arimaa.game.ForceStep.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4227__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
return (new arimaa.game.ForceStep(self__.step1,self__.step2,self__.__meta,self__.__extmap,self__.__hash));
});

arimaa.game.ForceStep.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4237__auto__){
var self__ = this;
var this__4237__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

arimaa.game.ForceStep.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4228__auto__){
var self__ = this;
var this__4228__auto____$1 = this;
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_imap(this__4228__auto____$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
}
});

arimaa.game.ForceStep.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4229__auto__,other__4230__auto__){
var self__ = this;
var this__4229__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3618__auto__ = other__4230__auto__;
if(cljs.core.truth_(and__3618__auto__)){
return ((this__4229__auto____$1.constructor === other__4230__auto__.constructor)) && (cljs.core.equiv_map(this__4229__auto____$1,other__4230__auto__));
} else {
return and__3618__auto__;
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

arimaa.game.ForceStep.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4242__auto__,k__4243__auto__){
var self__ = this;
var this__4242__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$65,null,cljs.core.constant$keyword$64,null], null), null),k__4243__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4242__auto____$1),self__.__meta),k__4243__auto__);
} else {
return (new arimaa.game.ForceStep(self__.step1,self__.step2,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4243__auto__)),null));
}
});

arimaa.game.ForceStep.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4240__auto__,k__4241__auto__,G__16498){
var self__ = this;
var this__4240__auto____$1 = this;
var pred__16502 = cljs.core.keyword_identical_QMARK_;
var expr__16503 = k__4241__auto__;
if(cljs.core.truth_((function (){var G__16505 = cljs.core.constant$keyword$64;
var G__16506 = expr__16503;
return (pred__16502.cljs$core$IFn$_invoke$arity$2 ? pred__16502.cljs$core$IFn$_invoke$arity$2(G__16505,G__16506) : pred__16502.call(null,G__16505,G__16506));
})())){
return (new arimaa.game.ForceStep(G__16498,self__.step2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16507 = cljs.core.constant$keyword$65;
var G__16508 = expr__16503;
return (pred__16502.cljs$core$IFn$_invoke$arity$2 ? pred__16502.cljs$core$IFn$_invoke$arity$2(G__16507,G__16508) : pred__16502.call(null,G__16507,G__16508));
})())){
return (new arimaa.game.ForceStep(self__.step1,G__16498,self__.__meta,self__.__extmap,null));
} else {
return (new arimaa.game.ForceStep(self__.step1,self__.step2,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4241__auto__,G__16498),null));
}
}
});

arimaa.game.ForceStep.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4245__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$64,self__.step1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$65,self__.step2],null))], null),self__.__extmap));
});

arimaa.game.ForceStep.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4232__auto__,G__16498){
var self__ = this;
var this__4232__auto____$1 = this;
return (new arimaa.game.ForceStep(self__.step1,self__.step2,G__16498,self__.__extmap,self__.__hash));
});

arimaa.game.ForceStep.prototype.arimaa$game$AUpdatePosition$ = true;

arimaa.game.ForceStep.prototype.arimaa$game$AUpdatePosition$update_position$arity$2 = (function (this$,position){
var self__ = this;
var this$__$1 = this;
return arimaa.game.update_position(self__.step2,arimaa.game.update_position(self__.step1,position));
});

arimaa.game.ForceStep.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4238__auto__,entry__4239__auto__){
var self__ = this;
var this__4238__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4239__auto__)){
return cljs.core._assoc(this__4238__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4239__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4239__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4238__auto____$1,entry__4239__auto__);
}
});

arimaa.game.ForceStep.cljs$lang$type = true;

arimaa.game.ForceStep.cljs$lang$ctorPrSeq = (function (this__4267__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"arimaa.game/ForceStep");
});

arimaa.game.ForceStep.cljs$lang$ctorPrWriter = (function (this__4267__auto__,writer__4268__auto__){
return cljs.core._write(writer__4268__auto__,"arimaa.game/ForceStep");
});

arimaa.game.__GT_ForceStep = (function __GT_ForceStep(step1,step2){
return (new arimaa.game.ForceStep(step1,step2,null,null,null));
});

arimaa.game.map__GT_ForceStep = (function map__GT_ForceStep(G__16500){
return (new arimaa.game.ForceStep(cljs.core.constant$keyword$64.cljs$core$IFn$_invoke$arity$1(G__16500),cljs.core.constant$keyword$65.cljs$core$IFn$_invoke$arity$1(G__16500),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16500,cljs.core.constant$keyword$64,cljs.core.array_seq([cljs.core.constant$keyword$65], 0)),null));
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
arimaa.game.Turn.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4233__auto__,k__4234__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4233__auto____$1,k__4234__auto__,null);
});

arimaa.game.Turn.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4235__auto__,k16511,else__4236__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
var G__16513 = (((k16511 instanceof cljs.core.Keyword))?k16511.fqn:null);
switch (G__16513) {
case "colour":
return self__.colour;

break;
case "number":
return self__.number;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16511,else__4236__auto__);

}
});

arimaa.game.Turn.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4247__auto__,writer__4248__auto__,opts__4249__auto__){
var self__ = this;
var this__4247__auto____$1 = this;
var pr_pair__4250__auto__ = ((function (this__4247__auto____$1){
return (function (keyval__4251__auto__){
return cljs.core.pr_sequential_writer(writer__4248__auto__,cljs.core.pr_writer,""," ","",opts__4249__auto__,keyval__4251__auto__);
});})(this__4247__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4248__auto__,pr_pair__4250__auto__,"#arimaa.game.Turn{",", ","}",opts__4249__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$66,self__.number],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$59,self__.colour],null))], null),self__.__extmap));
});

arimaa.game.Turn.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4231__auto__){
var self__ = this;
var this__4231__auto____$1 = this;
return self__.__meta;
});

arimaa.game.Turn.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4227__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
return (new arimaa.game.Turn(self__.number,self__.colour,self__.__meta,self__.__extmap,self__.__hash));
});

arimaa.game.Turn.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4237__auto__){
var self__ = this;
var this__4237__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

arimaa.game.Turn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4228__auto__){
var self__ = this;
var this__4228__auto____$1 = this;
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_imap(this__4228__auto____$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
}
});

arimaa.game.Turn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4229__auto__,other__4230__auto__){
var self__ = this;
var this__4229__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3618__auto__ = other__4230__auto__;
if(cljs.core.truth_(and__3618__auto__)){
return ((this__4229__auto____$1.constructor === other__4230__auto__.constructor)) && (cljs.core.equiv_map(this__4229__auto____$1,other__4230__auto__));
} else {
return and__3618__auto__;
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
return [cljs.core.str(self__.number),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.colour,cljs.core.constant$keyword$50))?"g":"s"))].join('');
});

arimaa.game.Turn.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4242__auto__,k__4243__auto__){
var self__ = this;
var this__4242__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$66,null,cljs.core.constant$keyword$59,null], null), null),k__4243__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4242__auto____$1),self__.__meta),k__4243__auto__);
} else {
return (new arimaa.game.Turn(self__.number,self__.colour,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4243__auto__)),null));
}
});

arimaa.game.Turn.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4240__auto__,k__4241__auto__,G__16510){
var self__ = this;
var this__4240__auto____$1 = this;
var pred__16514 = cljs.core.keyword_identical_QMARK_;
var expr__16515 = k__4241__auto__;
if(cljs.core.truth_((function (){var G__16517 = cljs.core.constant$keyword$66;
var G__16518 = expr__16515;
return (pred__16514.cljs$core$IFn$_invoke$arity$2 ? pred__16514.cljs$core$IFn$_invoke$arity$2(G__16517,G__16518) : pred__16514.call(null,G__16517,G__16518));
})())){
return (new arimaa.game.Turn(G__16510,self__.colour,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16519 = cljs.core.constant$keyword$59;
var G__16520 = expr__16515;
return (pred__16514.cljs$core$IFn$_invoke$arity$2 ? pred__16514.cljs$core$IFn$_invoke$arity$2(G__16519,G__16520) : pred__16514.call(null,G__16519,G__16520));
})())){
return (new arimaa.game.Turn(self__.number,G__16510,self__.__meta,self__.__extmap,null));
} else {
return (new arimaa.game.Turn(self__.number,self__.colour,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4241__auto__,G__16510),null));
}
}
});

arimaa.game.Turn.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4245__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$66,self__.number],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$59,self__.colour],null))], null),self__.__extmap));
});

arimaa.game.Turn.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4232__auto__,G__16510){
var self__ = this;
var this__4232__auto____$1 = this;
return (new arimaa.game.Turn(self__.number,self__.colour,G__16510,self__.__extmap,self__.__hash));
});

arimaa.game.Turn.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4238__auto__,entry__4239__auto__){
var self__ = this;
var this__4238__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4239__auto__)){
return cljs.core._assoc(this__4238__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4239__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4239__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4238__auto____$1,entry__4239__auto__);
}
});

arimaa.game.Turn.cljs$lang$type = true;

arimaa.game.Turn.cljs$lang$ctorPrSeq = (function (this__4267__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"arimaa.game/Turn");
});

arimaa.game.Turn.cljs$lang$ctorPrWriter = (function (this__4267__auto__,writer__4268__auto__){
return cljs.core._write(writer__4268__auto__,"arimaa.game/Turn");
});

arimaa.game.__GT_Turn = (function __GT_Turn(number,colour){
return (new arimaa.game.Turn(number,colour,null,null,null));
});

arimaa.game.map__GT_Turn = (function map__GT_Turn(G__16512){
return (new arimaa.game.Turn(cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(G__16512),cljs.core.constant$keyword$59.cljs$core$IFn$_invoke$arity$1(G__16512),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16512,cljs.core.constant$keyword$66,cljs.core.array_seq([cljs.core.constant$keyword$59], 0)),null));
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
arimaa.game.Move.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4233__auto__,k__4234__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4233__auto____$1,k__4234__auto__,null);
});

arimaa.game.Move.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4235__auto__,k16523,else__4236__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
var G__16525 = (((k16523 instanceof cljs.core.Keyword))?k16523.fqn:null);
switch (G__16525) {
case "steps":
return self__.steps;

break;
case "turn":
return self__.turn;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16523,else__4236__auto__);

}
});

arimaa.game.Move.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4247__auto__,writer__4248__auto__,opts__4249__auto__){
var self__ = this;
var this__4247__auto____$1 = this;
var pr_pair__4250__auto__ = ((function (this__4247__auto____$1){
return (function (keyval__4251__auto__){
return cljs.core.pr_sequential_writer(writer__4248__auto__,cljs.core.pr_writer,""," ","",opts__4249__auto__,keyval__4251__auto__);
});})(this__4247__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4248__auto__,pr_pair__4250__auto__,"#arimaa.game.Move{",", ","}",opts__4249__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$67,self__.turn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$68,self__.steps],null))], null),self__.__extmap));
});

arimaa.game.Move.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4231__auto__){
var self__ = this;
var this__4231__auto____$1 = this;
return self__.__meta;
});

arimaa.game.Move.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4227__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
return (new arimaa.game.Move(self__.turn,self__.steps,self__.__meta,self__.__extmap,self__.__hash));
});

arimaa.game.Move.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4237__auto__){
var self__ = this;
var this__4237__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

arimaa.game.Move.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4228__auto__){
var self__ = this;
var this__4228__auto____$1 = this;
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_imap(this__4228__auto____$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
}
});

arimaa.game.Move.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4229__auto__,other__4230__auto__){
var self__ = this;
var this__4229__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3618__auto__ = other__4230__auto__;
if(cljs.core.truth_(and__3618__auto__)){
return ((this__4229__auto____$1.constructor === other__4230__auto__.constructor)) && (cljs.core.equiv_map(this__4229__auto____$1,other__4230__auto__));
} else {
return and__3618__auto__;
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

arimaa.game.Move.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4242__auto__,k__4243__auto__){
var self__ = this;
var this__4242__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$68,null,cljs.core.constant$keyword$67,null], null), null),k__4243__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4242__auto____$1),self__.__meta),k__4243__auto__);
} else {
return (new arimaa.game.Move(self__.turn,self__.steps,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4243__auto__)),null));
}
});

arimaa.game.Move.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4240__auto__,k__4241__auto__,G__16522){
var self__ = this;
var this__4240__auto____$1 = this;
var pred__16526 = cljs.core.keyword_identical_QMARK_;
var expr__16527 = k__4241__auto__;
if(cljs.core.truth_((function (){var G__16529 = cljs.core.constant$keyword$67;
var G__16530 = expr__16527;
return (pred__16526.cljs$core$IFn$_invoke$arity$2 ? pred__16526.cljs$core$IFn$_invoke$arity$2(G__16529,G__16530) : pred__16526.call(null,G__16529,G__16530));
})())){
return (new arimaa.game.Move(G__16522,self__.steps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16531 = cljs.core.constant$keyword$68;
var G__16532 = expr__16527;
return (pred__16526.cljs$core$IFn$_invoke$arity$2 ? pred__16526.cljs$core$IFn$_invoke$arity$2(G__16531,G__16532) : pred__16526.call(null,G__16531,G__16532));
})())){
return (new arimaa.game.Move(self__.turn,G__16522,self__.__meta,self__.__extmap,null));
} else {
return (new arimaa.game.Move(self__.turn,self__.steps,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4241__auto__,G__16522),null));
}
}
});

arimaa.game.Move.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4245__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$67,self__.turn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$68,self__.steps],null))], null),self__.__extmap));
});

arimaa.game.Move.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4232__auto__,G__16522){
var self__ = this;
var this__4232__auto____$1 = this;
return (new arimaa.game.Move(self__.turn,self__.steps,G__16522,self__.__extmap,self__.__hash));
});

arimaa.game.Move.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4238__auto__,entry__4239__auto__){
var self__ = this;
var this__4238__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4239__auto__)){
return cljs.core._assoc(this__4238__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4239__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4239__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4238__auto____$1,entry__4239__auto__);
}
});

arimaa.game.Move.cljs$lang$type = true;

arimaa.game.Move.cljs$lang$ctorPrSeq = (function (this__4267__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"arimaa.game/Move");
});

arimaa.game.Move.cljs$lang$ctorPrWriter = (function (this__4267__auto__,writer__4268__auto__){
return cljs.core._write(writer__4268__auto__,"arimaa.game/Move");
});

arimaa.game.__GT_Move = (function __GT_Move(turn,steps){
return (new arimaa.game.Move(turn,steps,null,null,null));
});

arimaa.game.map__GT_Move = (function map__GT_Move(G__16524){
return (new arimaa.game.Move(cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(G__16524),cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(G__16524),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16524,cljs.core.constant$keyword$67,cljs.core.array_seq([cljs.core.constant$keyword$68], 0)),null));
});

arimaa.game.adjacent_squares = (function adjacent_squares(square){
var col = cljs.core.constant$keyword$56.cljs$core$IFn$_invoke$arity$1(square);
var row = cljs.core.constant$keyword$57.cljs$core$IFn$_invoke$arity$1(square);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.PersistentHashSet.fromArray([((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),row))?(new arimaa.game.Square(col,(row - (1)),null,null,null)):null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((8),row))?(new arimaa.game.Square(col,(row + (1)),null,null,null)):null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("a",col))?(new arimaa.game.Square((col - (1)),row,null,null,null)):null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("h",col))?(new arimaa.game.Square((col + (1)),row,null,null,null)):null)], true));
});
arimaa.game.pieces_at = (function pieces_at(board,squares){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (piece_position){
var G__16535 = cljs.core.constant$keyword$61.cljs$core$IFn$_invoke$arity$1(piece_position);
return (squares.cljs$core$IFn$_invoke$arity$1 ? squares.cljs$core$IFn$_invoke$arity$1(G__16535) : squares.call(null,G__16535));
}),board);
});
arimaa.game.stronger_animals = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$44,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$45,null,cljs.core.constant$keyword$46,null,cljs.core.constant$keyword$49,null,cljs.core.constant$keyword$48,null,cljs.core.constant$keyword$47,null], null), null),cljs.core.constant$keyword$45,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$46,null,cljs.core.constant$keyword$49,null,cljs.core.constant$keyword$48,null,cljs.core.constant$keyword$47,null], null), null),cljs.core.constant$keyword$46,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$49,null,cljs.core.constant$keyword$48,null,cljs.core.constant$keyword$47,null], null), null),cljs.core.constant$keyword$47,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$49,null,cljs.core.constant$keyword$48,null], null), null),cljs.core.constant$keyword$48,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$49,null], null), null),cljs.core.constant$keyword$49,cljs.core.PersistentHashSet.EMPTY], null);
arimaa.game.weaker_animals = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$49,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$45,null,cljs.core.constant$keyword$46,null,cljs.core.constant$keyword$48,null,cljs.core.constant$keyword$44,null,cljs.core.constant$keyword$47,null], null), null),cljs.core.constant$keyword$48,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$45,null,cljs.core.constant$keyword$46,null,cljs.core.constant$keyword$44,null,cljs.core.constant$keyword$47,null], null), null),cljs.core.constant$keyword$47,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$45,null,cljs.core.constant$keyword$46,null,cljs.core.constant$keyword$44,null], null), null),cljs.core.constant$keyword$46,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$45,null,cljs.core.constant$keyword$44,null], null), null),cljs.core.constant$keyword$45,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$44,null], null), null),cljs.core.constant$keyword$44,cljs.core.PersistentHashSet.EMPTY], null);
arimaa.game.friendly_pieces = (function friendly_pieces(piece_position,piece_positions){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__16536_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$59.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$60.cljs$core$IFn$_invoke$arity$1(piece_position)),cljs.core.constant$keyword$59.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$60.cljs$core$IFn$_invoke$arity$1(p1__16536_SHARP_)));
}),piece_positions);
});
arimaa.game.enemy_pieces = (function enemy_pieces(piece_position,piece_positions){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__16537_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$59.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$60.cljs$core$IFn$_invoke$arity$1(piece_position)),cljs.core.constant$keyword$59.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$60.cljs$core$IFn$_invoke$arity$1(p1__16537_SHARP_)));
}),piece_positions);
});
arimaa.game.stronger_enemy_pieces = (function stronger_enemy_pieces(piece_position,piece_positions){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (){var G__16539 = cljs.core.constant$keyword$58.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$60.cljs$core$IFn$_invoke$arity$1(piece_position));
return (arimaa.game.stronger_animals.cljs$core$IFn$_invoke$arity$1 ? arimaa.game.stronger_animals.cljs$core$IFn$_invoke$arity$1(G__16539) : arimaa.game.stronger_animals.call(null,G__16539));
})(),arimaa.game.enemy_pieces(piece_position,piece_positions));
});
arimaa.game.weaker_enemy_pieces = (function weaker_enemy_pieces(piece_position,piece_positions){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (){var G__16541 = cljs.core.constant$keyword$58.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$60.cljs$core$IFn$_invoke$arity$1(piece_position));
return (arimaa.game.weaker_animals.cljs$core$IFn$_invoke$arity$1 ? arimaa.game.weaker_animals.cljs$core$IFn$_invoke$arity$1(G__16541) : arimaa.game.weaker_animals.call(null,G__16541));
})(),arimaa.game.enemy_pieces(piece_position,piece_positions));
});
arimaa.game.is_frozen = (function is_frozen(piece,adjacent_pieces){
var colour = cljs.core.constant$keyword$59.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$60.cljs$core$IFn$_invoke$arity$1(piece));
var stronger_anmls = (function (){var G__16543 = piece;
return (arimaa.game.stronger_animals.cljs$core$IFn$_invoke$arity$1 ? arimaa.game.stronger_animals.cljs$core$IFn$_invoke$arity$1(G__16543) : arimaa.game.stronger_animals.call(null,G__16543));
})();
return (cljs.core.empty_QMARK_(arimaa.game.friendly_pieces(piece,adjacent_pieces))) && (!(cljs.core.empty_QMARK_(arimaa.game.stronger_enemy_pieces(piece,adjacent_pieces))));
});
arimaa.game.find_empty = (function find_empty(squares,board){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$61,board)),squares);
});
arimaa.game.position_after_move = (function position_after_move(position,move){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__16544_SHARP_){
return arimaa.game.update_position(p1__16544_SHARP_,p1__16544_SHARP_);
}),position,cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(move));
});
