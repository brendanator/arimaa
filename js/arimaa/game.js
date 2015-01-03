// Compiled by ClojureScript 0.0-2511
goog.provide('arimaa.game');
goog.require('cljs.core');
arimaa.game.animals = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$57,cljs.core.constant$keyword$58,cljs.core.constant$keyword$59,cljs.core.constant$keyword$60,cljs.core.constant$keyword$61,cljs.core.constant$keyword$62], null);
arimaa.game.colour = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$63,cljs.core.constant$keyword$64], null);
arimaa.game.direction = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$65,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67,cljs.core.constant$keyword$68], null);

arimaa.game.AShow = (function (){var obj16146 = {};
return obj16146;
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
return (function (){var or__3630__auto__ = (arimaa.game.show[(function (){var G__16150 = x__4274__auto__;
return goog.typeOf(G__16150);
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

arimaa.game.Square.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4235__auto__,k16152,else__4236__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
var G__16154 = (((k16152 instanceof cljs.core.Keyword))?k16152.fqn:null);
switch (G__16154) {
case "row":
return self__.row;

break;
case "col":
return self__.col;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16152,else__4236__auto__);

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
return cljs.core.pr_sequential_writer(writer__4248__auto__,pr_pair__4250__auto__,"#arimaa.game.Square{",", ","}",opts__4249__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$69,self__.col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$70,self__.row],null))], null),self__.__extmap));
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
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$69,null,cljs.core.constant$keyword$70,null], null), null),k__4243__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4242__auto____$1),self__.__meta),k__4243__auto__);
} else {
return (new arimaa.game.Square(self__.col,self__.row,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4243__auto__)),null));
}
});

arimaa.game.Square.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4240__auto__,k__4241__auto__,G__16151){
var self__ = this;
var this__4240__auto____$1 = this;
var pred__16155 = cljs.core.keyword_identical_QMARK_;
var expr__16156 = k__4241__auto__;
if(cljs.core.truth_((function (){var G__16158 = cljs.core.constant$keyword$69;
var G__16159 = expr__16156;
return (pred__16155.cljs$core$IFn$_invoke$arity$2 ? pred__16155.cljs$core$IFn$_invoke$arity$2(G__16158,G__16159) : pred__16155.call(null,G__16158,G__16159));
})())){
return (new arimaa.game.Square(G__16151,self__.row,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16160 = cljs.core.constant$keyword$70;
var G__16161 = expr__16156;
return (pred__16155.cljs$core$IFn$_invoke$arity$2 ? pred__16155.cljs$core$IFn$_invoke$arity$2(G__16160,G__16161) : pred__16155.call(null,G__16160,G__16161));
})())){
return (new arimaa.game.Square(self__.col,G__16151,self__.__meta,self__.__extmap,null));
} else {
return (new arimaa.game.Square(self__.col,self__.row,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4241__auto__,G__16151),null));
}
}
});

arimaa.game.Square.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4245__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$69,self__.col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$70,self__.row],null))], null),self__.__extmap));
});

arimaa.game.Square.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4232__auto__,G__16151){
var self__ = this;
var this__4232__auto____$1 = this;
return (new arimaa.game.Square(self__.col,self__.row,G__16151,self__.__extmap,self__.__hash));
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

arimaa.game.map__GT_Square = (function map__GT_Square(G__16153){
return (new arimaa.game.Square(cljs.core.constant$keyword$69.cljs$core$IFn$_invoke$arity$1(G__16153),cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(G__16153),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16153,cljs.core.constant$keyword$69,cljs.core.array_seq([cljs.core.constant$keyword$70], 0)),null));
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

arimaa.game.Piece.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4235__auto__,k16164,else__4236__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
var G__16166 = (((k16164 instanceof cljs.core.Keyword))?k16164.fqn:null);
switch (G__16166) {
case "colour":
return self__.colour;

break;
case "animal":
return self__.animal;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16164,else__4236__auto__);

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
return cljs.core.pr_sequential_writer(writer__4248__auto__,pr_pair__4250__auto__,"#arimaa.game.Piece{",", ","}",opts__4249__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$71,self__.animal],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$72,self__.colour],null))], null),self__.__extmap));
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
var animal_char = (function (){var G__16167 = (((self__.animal instanceof cljs.core.Keyword))?self__.animal.fqn:null);
switch (G__16167) {
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$63,self__.colour)){
return animal_char.toUpperCase();
} else {
return animal_char;
}
});

arimaa.game.Piece.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4242__auto__,k__4243__auto__){
var self__ = this;
var this__4242__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$71,null,cljs.core.constant$keyword$72,null], null), null),k__4243__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4242__auto____$1),self__.__meta),k__4243__auto__);
} else {
return (new arimaa.game.Piece(self__.animal,self__.colour,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4243__auto__)),null));
}
});

arimaa.game.Piece.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4240__auto__,k__4241__auto__,G__16163){
var self__ = this;
var this__4240__auto____$1 = this;
var pred__16168 = cljs.core.keyword_identical_QMARK_;
var expr__16169 = k__4241__auto__;
if(cljs.core.truth_((function (){var G__16171 = cljs.core.constant$keyword$71;
var G__16172 = expr__16169;
return (pred__16168.cljs$core$IFn$_invoke$arity$2 ? pred__16168.cljs$core$IFn$_invoke$arity$2(G__16171,G__16172) : pred__16168.call(null,G__16171,G__16172));
})())){
return (new arimaa.game.Piece(G__16163,self__.colour,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16173 = cljs.core.constant$keyword$72;
var G__16174 = expr__16169;
return (pred__16168.cljs$core$IFn$_invoke$arity$2 ? pred__16168.cljs$core$IFn$_invoke$arity$2(G__16173,G__16174) : pred__16168.call(null,G__16173,G__16174));
})())){
return (new arimaa.game.Piece(self__.animal,G__16163,self__.__meta,self__.__extmap,null));
} else {
return (new arimaa.game.Piece(self__.animal,self__.colour,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4241__auto__,G__16163),null));
}
}
});

arimaa.game.Piece.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4245__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$71,self__.animal],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$72,self__.colour],null))], null),self__.__extmap));
});

arimaa.game.Piece.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4232__auto__,G__16163){
var self__ = this;
var this__4232__auto____$1 = this;
return (new arimaa.game.Piece(self__.animal,self__.colour,G__16163,self__.__extmap,self__.__hash));
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

arimaa.game.map__GT_Piece = (function map__GT_Piece(G__16165){
return (new arimaa.game.Piece(cljs.core.constant$keyword$71.cljs$core$IFn$_invoke$arity$1(G__16165),cljs.core.constant$keyword$72.cljs$core$IFn$_invoke$arity$1(G__16165),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16165,cljs.core.constant$keyword$71,cljs.core.array_seq([cljs.core.constant$keyword$72], 0)),null));
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

arimaa.game.PiecePosition.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4235__auto__,k16178,else__4236__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
var G__16180 = (((k16178 instanceof cljs.core.Keyword))?k16178.fqn:null);
switch (G__16180) {
case "square":
return self__.square;

break;
case "piece":
return self__.piece;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16178,else__4236__auto__);

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
return cljs.core.pr_sequential_writer(writer__4248__auto__,pr_pair__4250__auto__,"#arimaa.game.PiecePosition{",", ","}",opts__4249__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$73,self__.piece],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$74,self__.square],null))], null),self__.__extmap));
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
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$73,null,cljs.core.constant$keyword$74,null], null), null),k__4243__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4242__auto____$1),self__.__meta),k__4243__auto__);
} else {
return (new arimaa.game.PiecePosition(self__.piece,self__.square,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4243__auto__)),null));
}
});

arimaa.game.PiecePosition.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4240__auto__,k__4241__auto__,G__16177){
var self__ = this;
var this__4240__auto____$1 = this;
var pred__16181 = cljs.core.keyword_identical_QMARK_;
var expr__16182 = k__4241__auto__;
if(cljs.core.truth_((function (){var G__16184 = cljs.core.constant$keyword$73;
var G__16185 = expr__16182;
return (pred__16181.cljs$core$IFn$_invoke$arity$2 ? pred__16181.cljs$core$IFn$_invoke$arity$2(G__16184,G__16185) : pred__16181.call(null,G__16184,G__16185));
})())){
return (new arimaa.game.PiecePosition(G__16177,self__.square,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16186 = cljs.core.constant$keyword$74;
var G__16187 = expr__16182;
return (pred__16181.cljs$core$IFn$_invoke$arity$2 ? pred__16181.cljs$core$IFn$_invoke$arity$2(G__16186,G__16187) : pred__16181.call(null,G__16186,G__16187));
})())){
return (new arimaa.game.PiecePosition(self__.piece,G__16177,self__.__meta,self__.__extmap,null));
} else {
return (new arimaa.game.PiecePosition(self__.piece,self__.square,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4241__auto__,G__16177),null));
}
}
});

arimaa.game.PiecePosition.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4245__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$73,self__.piece],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$74,self__.square],null))], null),self__.__extmap));
});

arimaa.game.PiecePosition.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4232__auto__,G__16177){
var self__ = this;
var this__4232__auto____$1 = this;
return (new arimaa.game.PiecePosition(self__.piece,self__.square,G__16177,self__.__extmap,self__.__hash));
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

arimaa.game.map__GT_PiecePosition = (function map__GT_PiecePosition(G__16179){
return (new arimaa.game.PiecePosition(cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(G__16179),cljs.core.constant$keyword$74.cljs$core$IFn$_invoke$arity$1(G__16179),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16179,cljs.core.constant$keyword$73,cljs.core.array_seq([cljs.core.constant$keyword$74], 0)),null));
});


arimaa.game.ASteps = (function (){var obj16190 = {};
return obj16190;
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
return (function (){var or__3630__auto__ = (arimaa.game.step_count[(function (){var G__16194 = x__4274__auto__;
return goog.typeOf(G__16194);
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
return (function (){var or__3630__auto__ = (arimaa.game.steps[(function (){var G__16198 = x__4274__auto__;
return goog.typeOf(G__16198);
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


arimaa.game.AUpdatePosition = (function (){var obj16200 = {};
return obj16200;
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
return (function (){var or__3630__auto__ = (arimaa.game.update_position[(function (){var G__16204 = x__4274__auto__;
return goog.typeOf(G__16204);
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

arimaa.game.PlaceStartingPiece.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4235__auto__,k16206,else__4236__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
var G__16208 = (((k16206 instanceof cljs.core.Keyword))?k16206.fqn:null);
switch (G__16208) {
case "piece-position":
return self__.piece_position;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16206,else__4236__auto__);

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
return cljs.core.pr_sequential_writer(writer__4248__auto__,pr_pair__4250__auto__,"#arimaa.game.PlaceStartingPiece{",", ","}",opts__4249__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$75,self__.piece_position],null))], null),self__.__extmap));
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
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$75,null], null), null),k__4243__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4242__auto____$1),self__.__meta),k__4243__auto__);
} else {
return (new arimaa.game.PlaceStartingPiece(self__.piece_position,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4243__auto__)),null));
}
});

arimaa.game.PlaceStartingPiece.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4240__auto__,k__4241__auto__,G__16205){
var self__ = this;
var this__4240__auto____$1 = this;
var pred__16209 = cljs.core.keyword_identical_QMARK_;
var expr__16210 = k__4241__auto__;
if(cljs.core.truth_((function (){var G__16212 = cljs.core.constant$keyword$75;
var G__16213 = expr__16210;
return (pred__16209.cljs$core$IFn$_invoke$arity$2 ? pred__16209.cljs$core$IFn$_invoke$arity$2(G__16212,G__16213) : pred__16209.call(null,G__16212,G__16213));
})())){
return (new arimaa.game.PlaceStartingPiece(G__16205,self__.__meta,self__.__extmap,null));
} else {
return (new arimaa.game.PlaceStartingPiece(self__.piece_position,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4241__auto__,G__16205),null));
}
});

arimaa.game.PlaceStartingPiece.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4245__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$75,self__.piece_position],null))], null),self__.__extmap));
});

arimaa.game.PlaceStartingPiece.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4232__auto__,G__16205){
var self__ = this;
var this__4232__auto____$1 = this;
return (new arimaa.game.PlaceStartingPiece(self__.piece_position,G__16205,self__.__extmap,self__.__hash));
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

arimaa.game.map__GT_PlaceStartingPiece = (function map__GT_PlaceStartingPiece(G__16207){
return (new arimaa.game.PlaceStartingPiece(cljs.core.constant$keyword$75.cljs$core$IFn$_invoke$arity$1(G__16207),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16207,cljs.core.constant$keyword$75),null));
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

arimaa.game.Step.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4235__auto__,k16216,else__4236__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
var G__16218 = (((k16216 instanceof cljs.core.Keyword))?k16216.fqn:null);
switch (G__16218) {
case "direction":
return self__.direction;

break;
case "piece-position":
return self__.piece_position;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16216,else__4236__auto__);

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
return cljs.core.pr_sequential_writer(writer__4248__auto__,pr_pair__4250__auto__,"#arimaa.game.Step{",", ","}",opts__4249__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$75,self__.piece_position],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$76,self__.direction],null))], null),self__.__extmap));
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
var direction_char = (function (){var G__16219 = (((self__.direction instanceof cljs.core.Keyword))?self__.direction.fqn:null);
switch (G__16219) {
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
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$75,null,cljs.core.constant$keyword$76,null], null), null),k__4243__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4242__auto____$1),self__.__meta),k__4243__auto__);
} else {
return (new arimaa.game.Step(self__.piece_position,self__.direction,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4243__auto__)),null));
}
});

arimaa.game.Step.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4240__auto__,k__4241__auto__,G__16215){
var self__ = this;
var this__4240__auto____$1 = this;
var pred__16220 = cljs.core.keyword_identical_QMARK_;
var expr__16221 = k__4241__auto__;
if(cljs.core.truth_((function (){var G__16223 = cljs.core.constant$keyword$75;
var G__16224 = expr__16221;
return (pred__16220.cljs$core$IFn$_invoke$arity$2 ? pred__16220.cljs$core$IFn$_invoke$arity$2(G__16223,G__16224) : pred__16220.call(null,G__16223,G__16224));
})())){
return (new arimaa.game.Step(G__16215,self__.direction,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16225 = cljs.core.constant$keyword$76;
var G__16226 = expr__16221;
return (pred__16220.cljs$core$IFn$_invoke$arity$2 ? pred__16220.cljs$core$IFn$_invoke$arity$2(G__16225,G__16226) : pred__16220.call(null,G__16225,G__16226));
})())){
return (new arimaa.game.Step(self__.piece_position,G__16215,self__.__meta,self__.__extmap,null));
} else {
return (new arimaa.game.Step(self__.piece_position,self__.direction,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4241__auto__,G__16215),null));
}
}
});

arimaa.game.Step.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4245__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$75,self__.piece_position],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$76,self__.direction],null))], null),self__.__extmap));
});

arimaa.game.Step.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4232__auto__,G__16215){
var self__ = this;
var this__4232__auto____$1 = this;
return (new arimaa.game.Step(self__.piece_position,self__.direction,G__16215,self__.__extmap,self__.__hash));
});

arimaa.game.Step.prototype.arimaa$game$AUpdatePosition$ = true;

arimaa.game.Step.prototype.arimaa$game$AUpdatePosition$update_position$arity$2 = (function (this$,position){
var self__ = this;
var this$__$1 = this;
var col = cljs.core.constant$keyword$69.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$74.cljs$core$IFn$_invoke$arity$1(self__.piece_position));
var row = cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$74.cljs$core$IFn$_invoke$arity$1(self__.piece_position));
var new_square = (function (){var G__16227 = (((self__.direction instanceof cljs.core.Keyword))?self__.direction.fqn:null);
switch (G__16227) {
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
var new_piece_position = (new arimaa.game.PiecePosition(cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(self__.piece_position),new_square,null,null,null));
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

arimaa.game.map__GT_Step = (function map__GT_Step(G__16217){
return (new arimaa.game.Step(cljs.core.constant$keyword$75.cljs$core$IFn$_invoke$arity$1(G__16217),cljs.core.constant$keyword$76.cljs$core$IFn$_invoke$arity$1(G__16217),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16217,cljs.core.constant$keyword$75,cljs.core.array_seq([cljs.core.constant$keyword$76], 0)),null));
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

arimaa.game.Capture.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4235__auto__,k16232,else__4236__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
var G__16234 = (((k16232 instanceof cljs.core.Keyword))?k16232.fqn:null);
switch (G__16234) {
case "piece-position":
return self__.piece_position;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16232,else__4236__auto__);

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
return cljs.core.pr_sequential_writer(writer__4248__auto__,pr_pair__4250__auto__,"#arimaa.game.Capture{",", ","}",opts__4249__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$75,self__.piece_position],null))], null),self__.__extmap));
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
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$75,null], null), null),k__4243__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4242__auto____$1),self__.__meta),k__4243__auto__);
} else {
return (new arimaa.game.Capture(self__.piece_position,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4243__auto__)),null));
}
});

arimaa.game.Capture.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4240__auto__,k__4241__auto__,G__16231){
var self__ = this;
var this__4240__auto____$1 = this;
var pred__16235 = cljs.core.keyword_identical_QMARK_;
var expr__16236 = k__4241__auto__;
if(cljs.core.truth_((function (){var G__16238 = cljs.core.constant$keyword$75;
var G__16239 = expr__16236;
return (pred__16235.cljs$core$IFn$_invoke$arity$2 ? pred__16235.cljs$core$IFn$_invoke$arity$2(G__16238,G__16239) : pred__16235.call(null,G__16238,G__16239));
})())){
return (new arimaa.game.Capture(G__16231,self__.__meta,self__.__extmap,null));
} else {
return (new arimaa.game.Capture(self__.piece_position,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4241__auto__,G__16231),null));
}
});

arimaa.game.Capture.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4245__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$75,self__.piece_position],null))], null),self__.__extmap));
});

arimaa.game.Capture.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4232__auto__,G__16231){
var self__ = this;
var this__4232__auto____$1 = this;
return (new arimaa.game.Capture(self__.piece_position,G__16231,self__.__extmap,self__.__hash));
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

arimaa.game.map__GT_Capture = (function map__GT_Capture(G__16233){
return (new arimaa.game.Capture(cljs.core.constant$keyword$75.cljs$core$IFn$_invoke$arity$1(G__16233),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16233,cljs.core.constant$keyword$75),null));
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

arimaa.game.ForceStep.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4235__auto__,k16242,else__4236__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
var G__16244 = (((k16242 instanceof cljs.core.Keyword))?k16242.fqn:null);
switch (G__16244) {
case "step2":
return self__.step2;

break;
case "step1":
return self__.step1;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16242,else__4236__auto__);

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
return cljs.core.pr_sequential_writer(writer__4248__auto__,pr_pair__4250__auto__,"#arimaa.game.ForceStep{",", ","}",opts__4249__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$77,self__.step1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$78,self__.step2],null))], null),self__.__extmap));
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
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$78,null,cljs.core.constant$keyword$77,null], null), null),k__4243__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4242__auto____$1),self__.__meta),k__4243__auto__);
} else {
return (new arimaa.game.ForceStep(self__.step1,self__.step2,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4243__auto__)),null));
}
});

arimaa.game.ForceStep.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4240__auto__,k__4241__auto__,G__16241){
var self__ = this;
var this__4240__auto____$1 = this;
var pred__16245 = cljs.core.keyword_identical_QMARK_;
var expr__16246 = k__4241__auto__;
if(cljs.core.truth_((function (){var G__16248 = cljs.core.constant$keyword$77;
var G__16249 = expr__16246;
return (pred__16245.cljs$core$IFn$_invoke$arity$2 ? pred__16245.cljs$core$IFn$_invoke$arity$2(G__16248,G__16249) : pred__16245.call(null,G__16248,G__16249));
})())){
return (new arimaa.game.ForceStep(G__16241,self__.step2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16250 = cljs.core.constant$keyword$78;
var G__16251 = expr__16246;
return (pred__16245.cljs$core$IFn$_invoke$arity$2 ? pred__16245.cljs$core$IFn$_invoke$arity$2(G__16250,G__16251) : pred__16245.call(null,G__16250,G__16251));
})())){
return (new arimaa.game.ForceStep(self__.step1,G__16241,self__.__meta,self__.__extmap,null));
} else {
return (new arimaa.game.ForceStep(self__.step1,self__.step2,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4241__auto__,G__16241),null));
}
}
});

arimaa.game.ForceStep.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4245__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$77,self__.step1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$78,self__.step2],null))], null),self__.__extmap));
});

arimaa.game.ForceStep.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4232__auto__,G__16241){
var self__ = this;
var this__4232__auto____$1 = this;
return (new arimaa.game.ForceStep(self__.step1,self__.step2,G__16241,self__.__extmap,self__.__hash));
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

arimaa.game.map__GT_ForceStep = (function map__GT_ForceStep(G__16243){
return (new arimaa.game.ForceStep(cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(G__16243),cljs.core.constant$keyword$78.cljs$core$IFn$_invoke$arity$1(G__16243),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16243,cljs.core.constant$keyword$77,cljs.core.array_seq([cljs.core.constant$keyword$78], 0)),null));
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

arimaa.game.Turn.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4235__auto__,k16254,else__4236__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
var G__16256 = (((k16254 instanceof cljs.core.Keyword))?k16254.fqn:null);
switch (G__16256) {
case "colour":
return self__.colour;

break;
case "number":
return self__.number;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16254,else__4236__auto__);

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
return cljs.core.pr_sequential_writer(writer__4248__auto__,pr_pair__4250__auto__,"#arimaa.game.Turn{",", ","}",opts__4249__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$79,self__.number],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$72,self__.colour],null))], null),self__.__extmap));
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
return [cljs.core.str(self__.number),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.colour,cljs.core.constant$keyword$63))?"g":"s"))].join('');
});

arimaa.game.Turn.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4242__auto__,k__4243__auto__){
var self__ = this;
var this__4242__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$79,null,cljs.core.constant$keyword$72,null], null), null),k__4243__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4242__auto____$1),self__.__meta),k__4243__auto__);
} else {
return (new arimaa.game.Turn(self__.number,self__.colour,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4243__auto__)),null));
}
});

arimaa.game.Turn.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4240__auto__,k__4241__auto__,G__16253){
var self__ = this;
var this__4240__auto____$1 = this;
var pred__16257 = cljs.core.keyword_identical_QMARK_;
var expr__16258 = k__4241__auto__;
if(cljs.core.truth_((function (){var G__16260 = cljs.core.constant$keyword$79;
var G__16261 = expr__16258;
return (pred__16257.cljs$core$IFn$_invoke$arity$2 ? pred__16257.cljs$core$IFn$_invoke$arity$2(G__16260,G__16261) : pred__16257.call(null,G__16260,G__16261));
})())){
return (new arimaa.game.Turn(G__16253,self__.colour,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16262 = cljs.core.constant$keyword$72;
var G__16263 = expr__16258;
return (pred__16257.cljs$core$IFn$_invoke$arity$2 ? pred__16257.cljs$core$IFn$_invoke$arity$2(G__16262,G__16263) : pred__16257.call(null,G__16262,G__16263));
})())){
return (new arimaa.game.Turn(self__.number,G__16253,self__.__meta,self__.__extmap,null));
} else {
return (new arimaa.game.Turn(self__.number,self__.colour,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4241__auto__,G__16253),null));
}
}
});

arimaa.game.Turn.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4245__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$79,self__.number],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$72,self__.colour],null))], null),self__.__extmap));
});

arimaa.game.Turn.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4232__auto__,G__16253){
var self__ = this;
var this__4232__auto____$1 = this;
return (new arimaa.game.Turn(self__.number,self__.colour,G__16253,self__.__extmap,self__.__hash));
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

arimaa.game.map__GT_Turn = (function map__GT_Turn(G__16255){
return (new arimaa.game.Turn(cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(G__16255),cljs.core.constant$keyword$72.cljs$core$IFn$_invoke$arity$1(G__16255),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16255,cljs.core.constant$keyword$79,cljs.core.array_seq([cljs.core.constant$keyword$72], 0)),null));
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

arimaa.game.Move.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4235__auto__,k16266,else__4236__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
var G__16268 = (((k16266 instanceof cljs.core.Keyword))?k16266.fqn:null);
switch (G__16268) {
case "steps":
return self__.steps;

break;
case "turn":
return self__.turn;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16266,else__4236__auto__);

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
return cljs.core.pr_sequential_writer(writer__4248__auto__,pr_pair__4250__auto__,"#arimaa.game.Move{",", ","}",opts__4249__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$80,self__.turn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$81,self__.steps],null))], null),self__.__extmap));
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
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$81,null,cljs.core.constant$keyword$80,null], null), null),k__4243__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4242__auto____$1),self__.__meta),k__4243__auto__);
} else {
return (new arimaa.game.Move(self__.turn,self__.steps,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4243__auto__)),null));
}
});

arimaa.game.Move.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4240__auto__,k__4241__auto__,G__16265){
var self__ = this;
var this__4240__auto____$1 = this;
var pred__16269 = cljs.core.keyword_identical_QMARK_;
var expr__16270 = k__4241__auto__;
if(cljs.core.truth_((function (){var G__16272 = cljs.core.constant$keyword$80;
var G__16273 = expr__16270;
return (pred__16269.cljs$core$IFn$_invoke$arity$2 ? pred__16269.cljs$core$IFn$_invoke$arity$2(G__16272,G__16273) : pred__16269.call(null,G__16272,G__16273));
})())){
return (new arimaa.game.Move(G__16265,self__.steps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16274 = cljs.core.constant$keyword$81;
var G__16275 = expr__16270;
return (pred__16269.cljs$core$IFn$_invoke$arity$2 ? pred__16269.cljs$core$IFn$_invoke$arity$2(G__16274,G__16275) : pred__16269.call(null,G__16274,G__16275));
})())){
return (new arimaa.game.Move(self__.turn,G__16265,self__.__meta,self__.__extmap,null));
} else {
return (new arimaa.game.Move(self__.turn,self__.steps,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4241__auto__,G__16265),null));
}
}
});

arimaa.game.Move.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4245__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$80,self__.turn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$81,self__.steps],null))], null),self__.__extmap));
});

arimaa.game.Move.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4232__auto__,G__16265){
var self__ = this;
var this__4232__auto____$1 = this;
return (new arimaa.game.Move(self__.turn,self__.steps,G__16265,self__.__extmap,self__.__hash));
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

arimaa.game.map__GT_Move = (function map__GT_Move(G__16267){
return (new arimaa.game.Move(cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(G__16267),cljs.core.constant$keyword$81.cljs$core$IFn$_invoke$arity$1(G__16267),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16267,cljs.core.constant$keyword$80,cljs.core.array_seq([cljs.core.constant$keyword$81], 0)),null));
});

arimaa.game.adjacent_squares = (function adjacent_squares(square){
var col = cljs.core.constant$keyword$69.cljs$core$IFn$_invoke$arity$1(square);
var row = cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(square);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.PersistentHashSet.fromArray([((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),row))?(new arimaa.game.Square(col,(row - (1)),null,null,null)):null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((8),row))?(new arimaa.game.Square(col,(row + (1)),null,null,null)):null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("a",col))?(new arimaa.game.Square((col - (1)),row,null,null,null)):null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("h",col))?(new arimaa.game.Square((col + (1)),row,null,null,null)):null)], true));
});
arimaa.game.pieces_at = (function pieces_at(board,squares){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (piece_position){
var G__16278 = cljs.core.constant$keyword$74.cljs$core$IFn$_invoke$arity$1(piece_position);
return (squares.cljs$core$IFn$_invoke$arity$1 ? squares.cljs$core$IFn$_invoke$arity$1(G__16278) : squares.call(null,G__16278));
}),board);
});
arimaa.game.stronger_animals = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$57,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$58,null,cljs.core.constant$keyword$59,null,cljs.core.constant$keyword$62,null,cljs.core.constant$keyword$61,null,cljs.core.constant$keyword$60,null], null), null),cljs.core.constant$keyword$58,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$59,null,cljs.core.constant$keyword$62,null,cljs.core.constant$keyword$61,null,cljs.core.constant$keyword$60,null], null), null),cljs.core.constant$keyword$59,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$62,null,cljs.core.constant$keyword$61,null,cljs.core.constant$keyword$60,null], null), null),cljs.core.constant$keyword$60,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$62,null,cljs.core.constant$keyword$61,null], null), null),cljs.core.constant$keyword$61,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$62,null], null), null),cljs.core.constant$keyword$62,cljs.core.PersistentHashSet.EMPTY], null);
arimaa.game.weaker_animals = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$62,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$58,null,cljs.core.constant$keyword$59,null,cljs.core.constant$keyword$61,null,cljs.core.constant$keyword$57,null,cljs.core.constant$keyword$60,null], null), null),cljs.core.constant$keyword$61,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$58,null,cljs.core.constant$keyword$59,null,cljs.core.constant$keyword$57,null,cljs.core.constant$keyword$60,null], null), null),cljs.core.constant$keyword$60,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$58,null,cljs.core.constant$keyword$59,null,cljs.core.constant$keyword$57,null], null), null),cljs.core.constant$keyword$59,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$58,null,cljs.core.constant$keyword$57,null], null), null),cljs.core.constant$keyword$58,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$57,null], null), null),cljs.core.constant$keyword$57,cljs.core.PersistentHashSet.EMPTY], null);
arimaa.game.friendly_pieces = (function friendly_pieces(piece_position,piece_positions){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__16279_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$72.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(piece_position)),cljs.core.constant$keyword$72.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(p1__16279_SHARP_)));
}),piece_positions);
});
arimaa.game.enemy_pieces = (function enemy_pieces(piece_position,piece_positions){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__16280_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$72.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(piece_position)),cljs.core.constant$keyword$72.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(p1__16280_SHARP_)));
}),piece_positions);
});
arimaa.game.stronger_enemy_pieces = (function stronger_enemy_pieces(piece_position,piece_positions){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (){var G__16282 = cljs.core.constant$keyword$71.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(piece_position));
return (arimaa.game.stronger_animals.cljs$core$IFn$_invoke$arity$1 ? arimaa.game.stronger_animals.cljs$core$IFn$_invoke$arity$1(G__16282) : arimaa.game.stronger_animals.call(null,G__16282));
})(),arimaa.game.enemy_pieces(piece_position,piece_positions));
});
arimaa.game.weaker_enemy_pieces = (function weaker_enemy_pieces(piece_position,piece_positions){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (){var G__16284 = cljs.core.constant$keyword$71.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(piece_position));
return (arimaa.game.weaker_animals.cljs$core$IFn$_invoke$arity$1 ? arimaa.game.weaker_animals.cljs$core$IFn$_invoke$arity$1(G__16284) : arimaa.game.weaker_animals.call(null,G__16284));
})(),arimaa.game.enemy_pieces(piece_position,piece_positions));
});
arimaa.game.is_frozen = (function is_frozen(piece,adjacent_pieces){
var colour = cljs.core.constant$keyword$72.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(piece));
var stronger_anmls = (function (){var G__16286 = piece;
return (arimaa.game.stronger_animals.cljs$core$IFn$_invoke$arity$1 ? arimaa.game.stronger_animals.cljs$core$IFn$_invoke$arity$1(G__16286) : arimaa.game.stronger_animals.call(null,G__16286));
})();
return (cljs.core.empty_QMARK_(arimaa.game.friendly_pieces(piece,adjacent_pieces))) && (!(cljs.core.empty_QMARK_(arimaa.game.stronger_enemy_pieces(piece,adjacent_pieces))));
});
arimaa.game.find_empty = (function find_empty(squares,board){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$74,board)),squares);
});
arimaa.game.position_after_move = (function position_after_move(position,move){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__16287_SHARP_){
return arimaa.game.update_position(p1__16287_SHARP_,p1__16287_SHARP_);
}),position,cljs.core.constant$keyword$81.cljs$core$IFn$_invoke$arity$1(move));
});
