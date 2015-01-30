// Compiled by ClojureScript 0.0-2727 {}
goog.provide('arimaa.game');
goog.require('cljs.core');
arimaa.game.animals = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$22,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26,cljs.core.constant$keyword$27], null);
arimaa.game.colour = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$28,cljs.core.constant$keyword$29], null);
arimaa.game.direction = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$30,cljs.core.constant$keyword$31,cljs.core.constant$keyword$32,cljs.core.constant$keyword$33], null);

arimaa.game.AShow = (function (){var obj16217 = {};
return obj16217;
})();

arimaa.game.show = (function show(this$){
if((function (){var and__3738__auto__ = this$;
if(and__3738__auto__){
return this$.arimaa$game$AShow$show$arity$1;
} else {
return and__3738__auto__;
}
})()){
return this$.arimaa$game$AShow$show$arity$1(this$);
} else {
var x__4394__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3750__auto__ = (arimaa.game.show[(function (){var G__16221 = x__4394__auto__;
return goog.typeOf(G__16221);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (arimaa.game.show["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
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
arimaa.game.Square.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4353__auto__,k__4354__auto__){
var self__ = this;
var this__4353__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4353__auto____$1,k__4354__auto__,null);
});

arimaa.game.Square.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4355__auto__,k16223,else__4356__auto__){
var self__ = this;
var this__4355__auto____$1 = this;
var G__16225 = (((k16223 instanceof cljs.core.Keyword))?k16223.fqn:null);
switch (G__16225) {
case "row":
return self__.row;

break;
case "col":
return self__.col;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16223,else__4356__auto__);

}
});

arimaa.game.Square.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4367__auto__,writer__4368__auto__,opts__4369__auto__){
var self__ = this;
var this__4367__auto____$1 = this;
var pr_pair__4370__auto__ = ((function (this__4367__auto____$1){
return (function (keyval__4371__auto__){
return cljs.core.pr_sequential_writer(writer__4368__auto__,cljs.core.pr_writer,""," ","",opts__4369__auto__,keyval__4371__auto__);
});})(this__4367__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4368__auto__,pr_pair__4370__auto__,"#arimaa.game.Square{",", ","}",opts__4369__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$34,self__.col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$35,self__.row],null))], null),self__.__extmap));
});

arimaa.game.Square.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4351__auto__){
var self__ = this;
var this__4351__auto____$1 = this;
return self__.__meta;
});

arimaa.game.Square.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4347__auto__){
var self__ = this;
var this__4347__auto____$1 = this;
return (new arimaa.game.Square(self__.col,self__.row,self__.__meta,self__.__extmap,self__.__hash));
});

arimaa.game.Square.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4357__auto__){
var self__ = this;
var this__4357__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

arimaa.game.Square.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4348__auto__){
var self__ = this;
var this__4348__auto____$1 = this;
var h__4171__auto__ = self__.__hash;
if(!((h__4171__auto__ == null))){
return h__4171__auto__;
} else {
var h__4171__auto____$1 = cljs.core.hash_imap(this__4348__auto____$1);
self__.__hash = h__4171__auto____$1;

return h__4171__auto____$1;
}
});

arimaa.game.Square.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4349__auto__,other__4350__auto__){
var self__ = this;
var this__4349__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3738__auto__ = other__4350__auto__;
if(cljs.core.truth_(and__3738__auto__)){
return ((this__4349__auto____$1.constructor === other__4350__auto__.constructor)) && (cljs.core.equiv_map(this__4349__auto____$1,other__4350__auto__));
} else {
return and__3738__auto__;
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

arimaa.game.Square.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4362__auto__,k__4363__auto__){
var self__ = this;
var this__4362__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$34,null,cljs.core.constant$keyword$35,null], null), null),k__4363__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4362__auto____$1),self__.__meta),k__4363__auto__);
} else {
return (new arimaa.game.Square(self__.col,self__.row,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4363__auto__)),null));
}
});

arimaa.game.Square.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4360__auto__,k__4361__auto__,G__16222){
var self__ = this;
var this__4360__auto____$1 = this;
var pred__16226 = cljs.core.keyword_identical_QMARK_;
var expr__16227 = k__4361__auto__;
if(cljs.core.truth_((function (){var G__16229 = cljs.core.constant$keyword$34;
var G__16230 = expr__16227;
return (pred__16226.cljs$core$IFn$_invoke$arity$2 ? pred__16226.cljs$core$IFn$_invoke$arity$2(G__16229,G__16230) : pred__16226.call(null,G__16229,G__16230));
})())){
return (new arimaa.game.Square(G__16222,self__.row,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16231 = cljs.core.constant$keyword$35;
var G__16232 = expr__16227;
return (pred__16226.cljs$core$IFn$_invoke$arity$2 ? pred__16226.cljs$core$IFn$_invoke$arity$2(G__16231,G__16232) : pred__16226.call(null,G__16231,G__16232));
})())){
return (new arimaa.game.Square(self__.col,G__16222,self__.__meta,self__.__extmap,null));
} else {
return (new arimaa.game.Square(self__.col,self__.row,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4361__auto__,G__16222),null));
}
}
});

arimaa.game.Square.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4365__auto__){
var self__ = this;
var this__4365__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$34,self__.col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$35,self__.row],null))], null),self__.__extmap));
});

arimaa.game.Square.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4352__auto__,G__16222){
var self__ = this;
var this__4352__auto____$1 = this;
return (new arimaa.game.Square(self__.col,self__.row,G__16222,self__.__extmap,self__.__hash));
});

arimaa.game.Square.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4358__auto__,entry__4359__auto__){
var self__ = this;
var this__4358__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4359__auto__)){
return cljs.core._assoc(this__4358__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4359__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4359__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4358__auto____$1,entry__4359__auto__);
}
});

arimaa.game.Square.cljs$lang$type = true;

arimaa.game.Square.cljs$lang$ctorPrSeq = (function (this__4387__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"arimaa.game/Square");
});

arimaa.game.Square.cljs$lang$ctorPrWriter = (function (this__4387__auto__,writer__4388__auto__){
return cljs.core._write(writer__4388__auto__,"arimaa.game/Square");
});

arimaa.game.__GT_Square = (function __GT_Square(col,row){
return (new arimaa.game.Square(col,row,null,null,null));
});

arimaa.game.map__GT_Square = (function map__GT_Square(G__16224){
return (new arimaa.game.Square(cljs.core.constant$keyword$34.cljs$core$IFn$_invoke$arity$1(G__16224),cljs.core.constant$keyword$35.cljs$core$IFn$_invoke$arity$1(G__16224),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16224,cljs.core.constant$keyword$34,cljs.core.array_seq([cljs.core.constant$keyword$35], 0)),null));
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
arimaa.game.Piece.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4353__auto__,k__4354__auto__){
var self__ = this;
var this__4353__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4353__auto____$1,k__4354__auto__,null);
});

arimaa.game.Piece.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4355__auto__,k16235,else__4356__auto__){
var self__ = this;
var this__4355__auto____$1 = this;
var G__16237 = (((k16235 instanceof cljs.core.Keyword))?k16235.fqn:null);
switch (G__16237) {
case "colour":
return self__.colour;

break;
case "animal":
return self__.animal;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16235,else__4356__auto__);

}
});

arimaa.game.Piece.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4367__auto__,writer__4368__auto__,opts__4369__auto__){
var self__ = this;
var this__4367__auto____$1 = this;
var pr_pair__4370__auto__ = ((function (this__4367__auto____$1){
return (function (keyval__4371__auto__){
return cljs.core.pr_sequential_writer(writer__4368__auto__,cljs.core.pr_writer,""," ","",opts__4369__auto__,keyval__4371__auto__);
});})(this__4367__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4368__auto__,pr_pair__4370__auto__,"#arimaa.game.Piece{",", ","}",opts__4369__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$36,self__.animal],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$37,self__.colour],null))], null),self__.__extmap));
});

arimaa.game.Piece.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4351__auto__){
var self__ = this;
var this__4351__auto____$1 = this;
return self__.__meta;
});

arimaa.game.Piece.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4347__auto__){
var self__ = this;
var this__4347__auto____$1 = this;
return (new arimaa.game.Piece(self__.animal,self__.colour,self__.__meta,self__.__extmap,self__.__hash));
});

arimaa.game.Piece.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4357__auto__){
var self__ = this;
var this__4357__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

arimaa.game.Piece.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4348__auto__){
var self__ = this;
var this__4348__auto____$1 = this;
var h__4171__auto__ = self__.__hash;
if(!((h__4171__auto__ == null))){
return h__4171__auto__;
} else {
var h__4171__auto____$1 = cljs.core.hash_imap(this__4348__auto____$1);
self__.__hash = h__4171__auto____$1;

return h__4171__auto____$1;
}
});

arimaa.game.Piece.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4349__auto__,other__4350__auto__){
var self__ = this;
var this__4349__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3738__auto__ = other__4350__auto__;
if(cljs.core.truth_(and__3738__auto__)){
return ((this__4349__auto____$1.constructor === other__4350__auto__.constructor)) && (cljs.core.equiv_map(this__4349__auto____$1,other__4350__auto__));
} else {
return and__3738__auto__;
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
var animal_char = (function (){var G__16238 = (((self__.animal instanceof cljs.core.Keyword))?self__.animal.fqn:null);
switch (G__16238) {
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$28,self__.colour)){
return animal_char.toUpperCase();
} else {
return animal_char;
}
});

arimaa.game.Piece.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4362__auto__,k__4363__auto__){
var self__ = this;
var this__4362__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$36,null,cljs.core.constant$keyword$37,null], null), null),k__4363__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4362__auto____$1),self__.__meta),k__4363__auto__);
} else {
return (new arimaa.game.Piece(self__.animal,self__.colour,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4363__auto__)),null));
}
});

arimaa.game.Piece.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4360__auto__,k__4361__auto__,G__16234){
var self__ = this;
var this__4360__auto____$1 = this;
var pred__16239 = cljs.core.keyword_identical_QMARK_;
var expr__16240 = k__4361__auto__;
if(cljs.core.truth_((function (){var G__16242 = cljs.core.constant$keyword$36;
var G__16243 = expr__16240;
return (pred__16239.cljs$core$IFn$_invoke$arity$2 ? pred__16239.cljs$core$IFn$_invoke$arity$2(G__16242,G__16243) : pred__16239.call(null,G__16242,G__16243));
})())){
return (new arimaa.game.Piece(G__16234,self__.colour,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16244 = cljs.core.constant$keyword$37;
var G__16245 = expr__16240;
return (pred__16239.cljs$core$IFn$_invoke$arity$2 ? pred__16239.cljs$core$IFn$_invoke$arity$2(G__16244,G__16245) : pred__16239.call(null,G__16244,G__16245));
})())){
return (new arimaa.game.Piece(self__.animal,G__16234,self__.__meta,self__.__extmap,null));
} else {
return (new arimaa.game.Piece(self__.animal,self__.colour,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4361__auto__,G__16234),null));
}
}
});

arimaa.game.Piece.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4365__auto__){
var self__ = this;
var this__4365__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$36,self__.animal],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$37,self__.colour],null))], null),self__.__extmap));
});

arimaa.game.Piece.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4352__auto__,G__16234){
var self__ = this;
var this__4352__auto____$1 = this;
return (new arimaa.game.Piece(self__.animal,self__.colour,G__16234,self__.__extmap,self__.__hash));
});

arimaa.game.Piece.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4358__auto__,entry__4359__auto__){
var self__ = this;
var this__4358__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4359__auto__)){
return cljs.core._assoc(this__4358__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4359__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4359__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4358__auto____$1,entry__4359__auto__);
}
});

arimaa.game.Piece.cljs$lang$type = true;

arimaa.game.Piece.cljs$lang$ctorPrSeq = (function (this__4387__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"arimaa.game/Piece");
});

arimaa.game.Piece.cljs$lang$ctorPrWriter = (function (this__4387__auto__,writer__4388__auto__){
return cljs.core._write(writer__4388__auto__,"arimaa.game/Piece");
});

arimaa.game.__GT_Piece = (function __GT_Piece(animal,colour){
return (new arimaa.game.Piece(animal,colour,null,null,null));
});

arimaa.game.map__GT_Piece = (function map__GT_Piece(G__16236){
return (new arimaa.game.Piece(cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(G__16236),cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(G__16236),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16236,cljs.core.constant$keyword$36,cljs.core.array_seq([cljs.core.constant$keyword$37], 0)),null));
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
arimaa.game.PiecePosition.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4353__auto__,k__4354__auto__){
var self__ = this;
var this__4353__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4353__auto____$1,k__4354__auto__,null);
});

arimaa.game.PiecePosition.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4355__auto__,k16249,else__4356__auto__){
var self__ = this;
var this__4355__auto____$1 = this;
var G__16251 = (((k16249 instanceof cljs.core.Keyword))?k16249.fqn:null);
switch (G__16251) {
case "square":
return self__.square;

break;
case "piece":
return self__.piece;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16249,else__4356__auto__);

}
});

arimaa.game.PiecePosition.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4367__auto__,writer__4368__auto__,opts__4369__auto__){
var self__ = this;
var this__4367__auto____$1 = this;
var pr_pair__4370__auto__ = ((function (this__4367__auto____$1){
return (function (keyval__4371__auto__){
return cljs.core.pr_sequential_writer(writer__4368__auto__,cljs.core.pr_writer,""," ","",opts__4369__auto__,keyval__4371__auto__);
});})(this__4367__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4368__auto__,pr_pair__4370__auto__,"#arimaa.game.PiecePosition{",", ","}",opts__4369__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$38,self__.piece],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$39,self__.square],null))], null),self__.__extmap));
});

arimaa.game.PiecePosition.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4351__auto__){
var self__ = this;
var this__4351__auto____$1 = this;
return self__.__meta;
});

arimaa.game.PiecePosition.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4347__auto__){
var self__ = this;
var this__4347__auto____$1 = this;
return (new arimaa.game.PiecePosition(self__.piece,self__.square,self__.__meta,self__.__extmap,self__.__hash));
});

arimaa.game.PiecePosition.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4357__auto__){
var self__ = this;
var this__4357__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

arimaa.game.PiecePosition.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4348__auto__){
var self__ = this;
var this__4348__auto____$1 = this;
var h__4171__auto__ = self__.__hash;
if(!((h__4171__auto__ == null))){
return h__4171__auto__;
} else {
var h__4171__auto____$1 = cljs.core.hash_imap(this__4348__auto____$1);
self__.__hash = h__4171__auto____$1;

return h__4171__auto____$1;
}
});

arimaa.game.PiecePosition.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4349__auto__,other__4350__auto__){
var self__ = this;
var this__4349__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3738__auto__ = other__4350__auto__;
if(cljs.core.truth_(and__3738__auto__)){
return ((this__4349__auto____$1.constructor === other__4350__auto__.constructor)) && (cljs.core.equiv_map(this__4349__auto____$1,other__4350__auto__));
} else {
return and__3738__auto__;
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

arimaa.game.PiecePosition.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4362__auto__,k__4363__auto__){
var self__ = this;
var this__4362__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$38,null,cljs.core.constant$keyword$39,null], null), null),k__4363__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4362__auto____$1),self__.__meta),k__4363__auto__);
} else {
return (new arimaa.game.PiecePosition(self__.piece,self__.square,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4363__auto__)),null));
}
});

arimaa.game.PiecePosition.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4360__auto__,k__4361__auto__,G__16248){
var self__ = this;
var this__4360__auto____$1 = this;
var pred__16252 = cljs.core.keyword_identical_QMARK_;
var expr__16253 = k__4361__auto__;
if(cljs.core.truth_((function (){var G__16255 = cljs.core.constant$keyword$38;
var G__16256 = expr__16253;
return (pred__16252.cljs$core$IFn$_invoke$arity$2 ? pred__16252.cljs$core$IFn$_invoke$arity$2(G__16255,G__16256) : pred__16252.call(null,G__16255,G__16256));
})())){
return (new arimaa.game.PiecePosition(G__16248,self__.square,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16257 = cljs.core.constant$keyword$39;
var G__16258 = expr__16253;
return (pred__16252.cljs$core$IFn$_invoke$arity$2 ? pred__16252.cljs$core$IFn$_invoke$arity$2(G__16257,G__16258) : pred__16252.call(null,G__16257,G__16258));
})())){
return (new arimaa.game.PiecePosition(self__.piece,G__16248,self__.__meta,self__.__extmap,null));
} else {
return (new arimaa.game.PiecePosition(self__.piece,self__.square,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4361__auto__,G__16248),null));
}
}
});

arimaa.game.PiecePosition.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4365__auto__){
var self__ = this;
var this__4365__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$38,self__.piece],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$39,self__.square],null))], null),self__.__extmap));
});

arimaa.game.PiecePosition.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4352__auto__,G__16248){
var self__ = this;
var this__4352__auto____$1 = this;
return (new arimaa.game.PiecePosition(self__.piece,self__.square,G__16248,self__.__extmap,self__.__hash));
});

arimaa.game.PiecePosition.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4358__auto__,entry__4359__auto__){
var self__ = this;
var this__4358__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4359__auto__)){
return cljs.core._assoc(this__4358__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4359__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4359__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4358__auto____$1,entry__4359__auto__);
}
});

arimaa.game.PiecePosition.cljs$lang$type = true;

arimaa.game.PiecePosition.cljs$lang$ctorPrSeq = (function (this__4387__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"arimaa.game/PiecePosition");
});

arimaa.game.PiecePosition.cljs$lang$ctorPrWriter = (function (this__4387__auto__,writer__4388__auto__){
return cljs.core._write(writer__4388__auto__,"arimaa.game/PiecePosition");
});

arimaa.game.__GT_PiecePosition = (function __GT_PiecePosition(piece,square){
return (new arimaa.game.PiecePosition(piece,square,null,null,null));
});

arimaa.game.map__GT_PiecePosition = (function map__GT_PiecePosition(G__16250){
return (new arimaa.game.PiecePosition(cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1(G__16250),cljs.core.constant$keyword$39.cljs$core$IFn$_invoke$arity$1(G__16250),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16250,cljs.core.constant$keyword$38,cljs.core.array_seq([cljs.core.constant$keyword$39], 0)),null));
});


arimaa.game.ASteps = (function (){var obj16261 = {};
return obj16261;
})();

arimaa.game.step_count = (function step_count(this$){
if((function (){var and__3738__auto__ = this$;
if(and__3738__auto__){
return this$.arimaa$game$ASteps$step_count$arity$1;
} else {
return and__3738__auto__;
}
})()){
return this$.arimaa$game$ASteps$step_count$arity$1(this$);
} else {
var x__4394__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3750__auto__ = (arimaa.game.step_count[(function (){var G__16265 = x__4394__auto__;
return goog.typeOf(G__16265);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (arimaa.game.step_count["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("ASteps.step-count",this$);
}
}
})().call(null,this$);
}
});

arimaa.game.steps = (function steps(this$){
if((function (){var and__3738__auto__ = this$;
if(and__3738__auto__){
return this$.arimaa$game$ASteps$steps$arity$1;
} else {
return and__3738__auto__;
}
})()){
return this$.arimaa$game$ASteps$steps$arity$1(this$);
} else {
var x__4394__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3750__auto__ = (arimaa.game.steps[(function (){var G__16269 = x__4394__auto__;
return goog.typeOf(G__16269);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (arimaa.game.steps["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("ASteps.steps",this$);
}
}
})().call(null,this$);
}
});


arimaa.game.AUpdatePosition = (function (){var obj16271 = {};
return obj16271;
})();

arimaa.game.update_position = (function update_position(this$,position){
if((function (){var and__3738__auto__ = this$;
if(and__3738__auto__){
return this$.arimaa$game$AUpdatePosition$update_position$arity$2;
} else {
return and__3738__auto__;
}
})()){
return this$.arimaa$game$AUpdatePosition$update_position$arity$2(this$,position);
} else {
var x__4394__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3750__auto__ = (arimaa.game.update_position[(function (){var G__16275 = x__4394__auto__;
return goog.typeOf(G__16275);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (arimaa.game.update_position["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
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
arimaa.game.PlaceStartingPiece.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4353__auto__,k__4354__auto__){
var self__ = this;
var this__4353__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4353__auto____$1,k__4354__auto__,null);
});

arimaa.game.PlaceStartingPiece.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4355__auto__,k16277,else__4356__auto__){
var self__ = this;
var this__4355__auto____$1 = this;
var G__16279 = (((k16277 instanceof cljs.core.Keyword))?k16277.fqn:null);
switch (G__16279) {
case "piece-position":
return self__.piece_position;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16277,else__4356__auto__);

}
});

arimaa.game.PlaceStartingPiece.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4367__auto__,writer__4368__auto__,opts__4369__auto__){
var self__ = this;
var this__4367__auto____$1 = this;
var pr_pair__4370__auto__ = ((function (this__4367__auto____$1){
return (function (keyval__4371__auto__){
return cljs.core.pr_sequential_writer(writer__4368__auto__,cljs.core.pr_writer,""," ","",opts__4369__auto__,keyval__4371__auto__);
});})(this__4367__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4368__auto__,pr_pair__4370__auto__,"#arimaa.game.PlaceStartingPiece{",", ","}",opts__4369__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$40,self__.piece_position],null))], null),self__.__extmap));
});

arimaa.game.PlaceStartingPiece.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4351__auto__){
var self__ = this;
var this__4351__auto____$1 = this;
return self__.__meta;
});

arimaa.game.PlaceStartingPiece.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4347__auto__){
var self__ = this;
var this__4347__auto____$1 = this;
return (new arimaa.game.PlaceStartingPiece(self__.piece_position,self__.__meta,self__.__extmap,self__.__hash));
});

arimaa.game.PlaceStartingPiece.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4357__auto__){
var self__ = this;
var this__4357__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

arimaa.game.PlaceStartingPiece.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4348__auto__){
var self__ = this;
var this__4348__auto____$1 = this;
var h__4171__auto__ = self__.__hash;
if(!((h__4171__auto__ == null))){
return h__4171__auto__;
} else {
var h__4171__auto____$1 = cljs.core.hash_imap(this__4348__auto____$1);
self__.__hash = h__4171__auto____$1;

return h__4171__auto____$1;
}
});

arimaa.game.PlaceStartingPiece.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4349__auto__,other__4350__auto__){
var self__ = this;
var this__4349__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3738__auto__ = other__4350__auto__;
if(cljs.core.truth_(and__3738__auto__)){
return ((this__4349__auto____$1.constructor === other__4350__auto__.constructor)) && (cljs.core.equiv_map(this__4349__auto____$1,other__4350__auto__));
} else {
return and__3738__auto__;
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

arimaa.game.PlaceStartingPiece.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4362__auto__,k__4363__auto__){
var self__ = this;
var this__4362__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$40,null], null), null),k__4363__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4362__auto____$1),self__.__meta),k__4363__auto__);
} else {
return (new arimaa.game.PlaceStartingPiece(self__.piece_position,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4363__auto__)),null));
}
});

arimaa.game.PlaceStartingPiece.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4360__auto__,k__4361__auto__,G__16276){
var self__ = this;
var this__4360__auto____$1 = this;
var pred__16280 = cljs.core.keyword_identical_QMARK_;
var expr__16281 = k__4361__auto__;
if(cljs.core.truth_((function (){var G__16283 = cljs.core.constant$keyword$40;
var G__16284 = expr__16281;
return (pred__16280.cljs$core$IFn$_invoke$arity$2 ? pred__16280.cljs$core$IFn$_invoke$arity$2(G__16283,G__16284) : pred__16280.call(null,G__16283,G__16284));
})())){
return (new arimaa.game.PlaceStartingPiece(G__16276,self__.__meta,self__.__extmap,null));
} else {
return (new arimaa.game.PlaceStartingPiece(self__.piece_position,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4361__auto__,G__16276),null));
}
});

arimaa.game.PlaceStartingPiece.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4365__auto__){
var self__ = this;
var this__4365__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$40,self__.piece_position],null))], null),self__.__extmap));
});

arimaa.game.PlaceStartingPiece.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4352__auto__,G__16276){
var self__ = this;
var this__4352__auto____$1 = this;
return (new arimaa.game.PlaceStartingPiece(self__.piece_position,G__16276,self__.__extmap,self__.__hash));
});

arimaa.game.PlaceStartingPiece.prototype.arimaa$game$AUpdatePosition$ = true;

arimaa.game.PlaceStartingPiece.prototype.arimaa$game$AUpdatePosition$update_position$arity$2 = (function (this$,position){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(self__.piece_position,position);
});

arimaa.game.PlaceStartingPiece.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4358__auto__,entry__4359__auto__){
var self__ = this;
var this__4358__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4359__auto__)){
return cljs.core._assoc(this__4358__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4359__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4359__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4358__auto____$1,entry__4359__auto__);
}
});

arimaa.game.PlaceStartingPiece.cljs$lang$type = true;

arimaa.game.PlaceStartingPiece.cljs$lang$ctorPrSeq = (function (this__4387__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"arimaa.game/PlaceStartingPiece");
});

arimaa.game.PlaceStartingPiece.cljs$lang$ctorPrWriter = (function (this__4387__auto__,writer__4388__auto__){
return cljs.core._write(writer__4388__auto__,"arimaa.game/PlaceStartingPiece");
});

arimaa.game.__GT_PlaceStartingPiece = (function __GT_PlaceStartingPiece(piece_position){
return (new arimaa.game.PlaceStartingPiece(piece_position,null,null,null));
});

arimaa.game.map__GT_PlaceStartingPiece = (function map__GT_PlaceStartingPiece(G__16278){
return (new arimaa.game.PlaceStartingPiece(cljs.core.constant$keyword$40.cljs$core$IFn$_invoke$arity$1(G__16278),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16278,cljs.core.constant$keyword$40),null));
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
arimaa.game.Step.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4353__auto__,k__4354__auto__){
var self__ = this;
var this__4353__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4353__auto____$1,k__4354__auto__,null);
});

arimaa.game.Step.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4355__auto__,k16287,else__4356__auto__){
var self__ = this;
var this__4355__auto____$1 = this;
var G__16289 = (((k16287 instanceof cljs.core.Keyword))?k16287.fqn:null);
switch (G__16289) {
case "direction":
return self__.direction;

break;
case "piece-position":
return self__.piece_position;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16287,else__4356__auto__);

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

arimaa.game.Step.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4367__auto__,writer__4368__auto__,opts__4369__auto__){
var self__ = this;
var this__4367__auto____$1 = this;
var pr_pair__4370__auto__ = ((function (this__4367__auto____$1){
return (function (keyval__4371__auto__){
return cljs.core.pr_sequential_writer(writer__4368__auto__,cljs.core.pr_writer,""," ","",opts__4369__auto__,keyval__4371__auto__);
});})(this__4367__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4368__auto__,pr_pair__4370__auto__,"#arimaa.game.Step{",", ","}",opts__4369__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$40,self__.piece_position],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$41,self__.direction],null))], null),self__.__extmap));
});

arimaa.game.Step.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4351__auto__){
var self__ = this;
var this__4351__auto____$1 = this;
return self__.__meta;
});

arimaa.game.Step.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4347__auto__){
var self__ = this;
var this__4347__auto____$1 = this;
return (new arimaa.game.Step(self__.piece_position,self__.direction,self__.__meta,self__.__extmap,self__.__hash));
});

arimaa.game.Step.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4357__auto__){
var self__ = this;
var this__4357__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

arimaa.game.Step.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4348__auto__){
var self__ = this;
var this__4348__auto____$1 = this;
var h__4171__auto__ = self__.__hash;
if(!((h__4171__auto__ == null))){
return h__4171__auto__;
} else {
var h__4171__auto____$1 = cljs.core.hash_imap(this__4348__auto____$1);
self__.__hash = h__4171__auto____$1;

return h__4171__auto____$1;
}
});

arimaa.game.Step.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4349__auto__,other__4350__auto__){
var self__ = this;
var this__4349__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3738__auto__ = other__4350__auto__;
if(cljs.core.truth_(and__3738__auto__)){
return ((this__4349__auto____$1.constructor === other__4350__auto__.constructor)) && (cljs.core.equiv_map(this__4349__auto____$1,other__4350__auto__));
} else {
return and__3738__auto__;
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
var direction_char = (function (){var G__16290 = (((self__.direction instanceof cljs.core.Keyword))?self__.direction.fqn:null);
switch (G__16290) {
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

arimaa.game.Step.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4362__auto__,k__4363__auto__){
var self__ = this;
var this__4362__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$40,null,cljs.core.constant$keyword$41,null], null), null),k__4363__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4362__auto____$1),self__.__meta),k__4363__auto__);
} else {
return (new arimaa.game.Step(self__.piece_position,self__.direction,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4363__auto__)),null));
}
});

arimaa.game.Step.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4360__auto__,k__4361__auto__,G__16286){
var self__ = this;
var this__4360__auto____$1 = this;
var pred__16291 = cljs.core.keyword_identical_QMARK_;
var expr__16292 = k__4361__auto__;
if(cljs.core.truth_((function (){var G__16294 = cljs.core.constant$keyword$40;
var G__16295 = expr__16292;
return (pred__16291.cljs$core$IFn$_invoke$arity$2 ? pred__16291.cljs$core$IFn$_invoke$arity$2(G__16294,G__16295) : pred__16291.call(null,G__16294,G__16295));
})())){
return (new arimaa.game.Step(G__16286,self__.direction,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16296 = cljs.core.constant$keyword$41;
var G__16297 = expr__16292;
return (pred__16291.cljs$core$IFn$_invoke$arity$2 ? pred__16291.cljs$core$IFn$_invoke$arity$2(G__16296,G__16297) : pred__16291.call(null,G__16296,G__16297));
})())){
return (new arimaa.game.Step(self__.piece_position,G__16286,self__.__meta,self__.__extmap,null));
} else {
return (new arimaa.game.Step(self__.piece_position,self__.direction,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4361__auto__,G__16286),null));
}
}
});

arimaa.game.Step.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4365__auto__){
var self__ = this;
var this__4365__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$40,self__.piece_position],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$41,self__.direction],null))], null),self__.__extmap));
});

arimaa.game.Step.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4352__auto__,G__16286){
var self__ = this;
var this__4352__auto____$1 = this;
return (new arimaa.game.Step(self__.piece_position,self__.direction,G__16286,self__.__extmap,self__.__hash));
});

arimaa.game.Step.prototype.arimaa$game$AUpdatePosition$ = true;

arimaa.game.Step.prototype.arimaa$game$AUpdatePosition$update_position$arity$2 = (function (this$,position){
var self__ = this;
var this$__$1 = this;
var col = cljs.core.constant$keyword$34.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$39.cljs$core$IFn$_invoke$arity$1(self__.piece_position));
var row = cljs.core.constant$keyword$35.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$39.cljs$core$IFn$_invoke$arity$1(self__.piece_position));
var new_square = (function (){var G__16298 = (((self__.direction instanceof cljs.core.Keyword))?self__.direction.fqn:null);
switch (G__16298) {
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
var new_piece_position = (new arimaa.game.PiecePosition(cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1(self__.piece_position),new_square,null,null,null));
return cljs.core.cons(new_piece_position,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([self__.piece_position], true),position));
});

arimaa.game.Step.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4358__auto__,entry__4359__auto__){
var self__ = this;
var this__4358__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4359__auto__)){
return cljs.core._assoc(this__4358__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4359__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4359__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4358__auto____$1,entry__4359__auto__);
}
});

arimaa.game.Step.cljs$lang$type = true;

arimaa.game.Step.cljs$lang$ctorPrSeq = (function (this__4387__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"arimaa.game/Step");
});

arimaa.game.Step.cljs$lang$ctorPrWriter = (function (this__4387__auto__,writer__4388__auto__){
return cljs.core._write(writer__4388__auto__,"arimaa.game/Step");
});

arimaa.game.__GT_Step = (function __GT_Step(piece_position,direction){
return (new arimaa.game.Step(piece_position,direction,null,null,null));
});

arimaa.game.map__GT_Step = (function map__GT_Step(G__16288){
return (new arimaa.game.Step(cljs.core.constant$keyword$40.cljs$core$IFn$_invoke$arity$1(G__16288),cljs.core.constant$keyword$41.cljs$core$IFn$_invoke$arity$1(G__16288),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16288,cljs.core.constant$keyword$40,cljs.core.array_seq([cljs.core.constant$keyword$41], 0)),null));
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
arimaa.game.Capture.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4353__auto__,k__4354__auto__){
var self__ = this;
var this__4353__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4353__auto____$1,k__4354__auto__,null);
});

arimaa.game.Capture.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4355__auto__,k16303,else__4356__auto__){
var self__ = this;
var this__4355__auto____$1 = this;
var G__16305 = (((k16303 instanceof cljs.core.Keyword))?k16303.fqn:null);
switch (G__16305) {
case "piece-position":
return self__.piece_position;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16303,else__4356__auto__);

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

arimaa.game.Capture.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4367__auto__,writer__4368__auto__,opts__4369__auto__){
var self__ = this;
var this__4367__auto____$1 = this;
var pr_pair__4370__auto__ = ((function (this__4367__auto____$1){
return (function (keyval__4371__auto__){
return cljs.core.pr_sequential_writer(writer__4368__auto__,cljs.core.pr_writer,""," ","",opts__4369__auto__,keyval__4371__auto__);
});})(this__4367__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4368__auto__,pr_pair__4370__auto__,"#arimaa.game.Capture{",", ","}",opts__4369__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$40,self__.piece_position],null))], null),self__.__extmap));
});

arimaa.game.Capture.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4351__auto__){
var self__ = this;
var this__4351__auto____$1 = this;
return self__.__meta;
});

arimaa.game.Capture.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4347__auto__){
var self__ = this;
var this__4347__auto____$1 = this;
return (new arimaa.game.Capture(self__.piece_position,self__.__meta,self__.__extmap,self__.__hash));
});

arimaa.game.Capture.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4357__auto__){
var self__ = this;
var this__4357__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

arimaa.game.Capture.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4348__auto__){
var self__ = this;
var this__4348__auto____$1 = this;
var h__4171__auto__ = self__.__hash;
if(!((h__4171__auto__ == null))){
return h__4171__auto__;
} else {
var h__4171__auto____$1 = cljs.core.hash_imap(this__4348__auto____$1);
self__.__hash = h__4171__auto____$1;

return h__4171__auto____$1;
}
});

arimaa.game.Capture.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4349__auto__,other__4350__auto__){
var self__ = this;
var this__4349__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3738__auto__ = other__4350__auto__;
if(cljs.core.truth_(and__3738__auto__)){
return ((this__4349__auto____$1.constructor === other__4350__auto__.constructor)) && (cljs.core.equiv_map(this__4349__auto____$1,other__4350__auto__));
} else {
return and__3738__auto__;
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

arimaa.game.Capture.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4362__auto__,k__4363__auto__){
var self__ = this;
var this__4362__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$40,null], null), null),k__4363__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4362__auto____$1),self__.__meta),k__4363__auto__);
} else {
return (new arimaa.game.Capture(self__.piece_position,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4363__auto__)),null));
}
});

arimaa.game.Capture.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4360__auto__,k__4361__auto__,G__16302){
var self__ = this;
var this__4360__auto____$1 = this;
var pred__16306 = cljs.core.keyword_identical_QMARK_;
var expr__16307 = k__4361__auto__;
if(cljs.core.truth_((function (){var G__16309 = cljs.core.constant$keyword$40;
var G__16310 = expr__16307;
return (pred__16306.cljs$core$IFn$_invoke$arity$2 ? pred__16306.cljs$core$IFn$_invoke$arity$2(G__16309,G__16310) : pred__16306.call(null,G__16309,G__16310));
})())){
return (new arimaa.game.Capture(G__16302,self__.__meta,self__.__extmap,null));
} else {
return (new arimaa.game.Capture(self__.piece_position,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4361__auto__,G__16302),null));
}
});

arimaa.game.Capture.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4365__auto__){
var self__ = this;
var this__4365__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$40,self__.piece_position],null))], null),self__.__extmap));
});

arimaa.game.Capture.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4352__auto__,G__16302){
var self__ = this;
var this__4352__auto____$1 = this;
return (new arimaa.game.Capture(self__.piece_position,G__16302,self__.__extmap,self__.__hash));
});

arimaa.game.Capture.prototype.arimaa$game$AUpdatePosition$ = true;

arimaa.game.Capture.prototype.arimaa$game$AUpdatePosition$update_position$arity$2 = (function (this$,position){
var self__ = this;
var this$__$1 = this;
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([self__.piece_position], true),position);
});

arimaa.game.Capture.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4358__auto__,entry__4359__auto__){
var self__ = this;
var this__4358__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4359__auto__)){
return cljs.core._assoc(this__4358__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4359__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4359__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4358__auto____$1,entry__4359__auto__);
}
});

arimaa.game.Capture.cljs$lang$type = true;

arimaa.game.Capture.cljs$lang$ctorPrSeq = (function (this__4387__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"arimaa.game/Capture");
});

arimaa.game.Capture.cljs$lang$ctorPrWriter = (function (this__4387__auto__,writer__4388__auto__){
return cljs.core._write(writer__4388__auto__,"arimaa.game/Capture");
});

arimaa.game.__GT_Capture = (function __GT_Capture(piece_position){
return (new arimaa.game.Capture(piece_position,null,null,null));
});

arimaa.game.map__GT_Capture = (function map__GT_Capture(G__16304){
return (new arimaa.game.Capture(cljs.core.constant$keyword$40.cljs$core$IFn$_invoke$arity$1(G__16304),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16304,cljs.core.constant$keyword$40),null));
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
arimaa.game.ForceStep.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4353__auto__,k__4354__auto__){
var self__ = this;
var this__4353__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4353__auto____$1,k__4354__auto__,null);
});

arimaa.game.ForceStep.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4355__auto__,k16313,else__4356__auto__){
var self__ = this;
var this__4355__auto____$1 = this;
var G__16315 = (((k16313 instanceof cljs.core.Keyword))?k16313.fqn:null);
switch (G__16315) {
case "step2":
return self__.step2;

break;
case "step1":
return self__.step1;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16313,else__4356__auto__);

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

arimaa.game.ForceStep.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4367__auto__,writer__4368__auto__,opts__4369__auto__){
var self__ = this;
var this__4367__auto____$1 = this;
var pr_pair__4370__auto__ = ((function (this__4367__auto____$1){
return (function (keyval__4371__auto__){
return cljs.core.pr_sequential_writer(writer__4368__auto__,cljs.core.pr_writer,""," ","",opts__4369__auto__,keyval__4371__auto__);
});})(this__4367__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4368__auto__,pr_pair__4370__auto__,"#arimaa.game.ForceStep{",", ","}",opts__4369__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$42,self__.step1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$43,self__.step2],null))], null),self__.__extmap));
});

arimaa.game.ForceStep.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4351__auto__){
var self__ = this;
var this__4351__auto____$1 = this;
return self__.__meta;
});

arimaa.game.ForceStep.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4347__auto__){
var self__ = this;
var this__4347__auto____$1 = this;
return (new arimaa.game.ForceStep(self__.step1,self__.step2,self__.__meta,self__.__extmap,self__.__hash));
});

arimaa.game.ForceStep.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4357__auto__){
var self__ = this;
var this__4357__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

arimaa.game.ForceStep.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4348__auto__){
var self__ = this;
var this__4348__auto____$1 = this;
var h__4171__auto__ = self__.__hash;
if(!((h__4171__auto__ == null))){
return h__4171__auto__;
} else {
var h__4171__auto____$1 = cljs.core.hash_imap(this__4348__auto____$1);
self__.__hash = h__4171__auto____$1;

return h__4171__auto____$1;
}
});

arimaa.game.ForceStep.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4349__auto__,other__4350__auto__){
var self__ = this;
var this__4349__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3738__auto__ = other__4350__auto__;
if(cljs.core.truth_(and__3738__auto__)){
return ((this__4349__auto____$1.constructor === other__4350__auto__.constructor)) && (cljs.core.equiv_map(this__4349__auto____$1,other__4350__auto__));
} else {
return and__3738__auto__;
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

arimaa.game.ForceStep.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4362__auto__,k__4363__auto__){
var self__ = this;
var this__4362__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$43,null,cljs.core.constant$keyword$42,null], null), null),k__4363__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4362__auto____$1),self__.__meta),k__4363__auto__);
} else {
return (new arimaa.game.ForceStep(self__.step1,self__.step2,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4363__auto__)),null));
}
});

arimaa.game.ForceStep.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4360__auto__,k__4361__auto__,G__16312){
var self__ = this;
var this__4360__auto____$1 = this;
var pred__16316 = cljs.core.keyword_identical_QMARK_;
var expr__16317 = k__4361__auto__;
if(cljs.core.truth_((function (){var G__16319 = cljs.core.constant$keyword$42;
var G__16320 = expr__16317;
return (pred__16316.cljs$core$IFn$_invoke$arity$2 ? pred__16316.cljs$core$IFn$_invoke$arity$2(G__16319,G__16320) : pred__16316.call(null,G__16319,G__16320));
})())){
return (new arimaa.game.ForceStep(G__16312,self__.step2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16321 = cljs.core.constant$keyword$43;
var G__16322 = expr__16317;
return (pred__16316.cljs$core$IFn$_invoke$arity$2 ? pred__16316.cljs$core$IFn$_invoke$arity$2(G__16321,G__16322) : pred__16316.call(null,G__16321,G__16322));
})())){
return (new arimaa.game.ForceStep(self__.step1,G__16312,self__.__meta,self__.__extmap,null));
} else {
return (new arimaa.game.ForceStep(self__.step1,self__.step2,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4361__auto__,G__16312),null));
}
}
});

arimaa.game.ForceStep.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4365__auto__){
var self__ = this;
var this__4365__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$42,self__.step1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$43,self__.step2],null))], null),self__.__extmap));
});

arimaa.game.ForceStep.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4352__auto__,G__16312){
var self__ = this;
var this__4352__auto____$1 = this;
return (new arimaa.game.ForceStep(self__.step1,self__.step2,G__16312,self__.__extmap,self__.__hash));
});

arimaa.game.ForceStep.prototype.arimaa$game$AUpdatePosition$ = true;

arimaa.game.ForceStep.prototype.arimaa$game$AUpdatePosition$update_position$arity$2 = (function (this$,position){
var self__ = this;
var this$__$1 = this;
return arimaa.game.update_position(self__.step2,arimaa.game.update_position(self__.step1,position));
});

arimaa.game.ForceStep.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4358__auto__,entry__4359__auto__){
var self__ = this;
var this__4358__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4359__auto__)){
return cljs.core._assoc(this__4358__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4359__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4359__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4358__auto____$1,entry__4359__auto__);
}
});

arimaa.game.ForceStep.cljs$lang$type = true;

arimaa.game.ForceStep.cljs$lang$ctorPrSeq = (function (this__4387__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"arimaa.game/ForceStep");
});

arimaa.game.ForceStep.cljs$lang$ctorPrWriter = (function (this__4387__auto__,writer__4388__auto__){
return cljs.core._write(writer__4388__auto__,"arimaa.game/ForceStep");
});

arimaa.game.__GT_ForceStep = (function __GT_ForceStep(step1,step2){
return (new arimaa.game.ForceStep(step1,step2,null,null,null));
});

arimaa.game.map__GT_ForceStep = (function map__GT_ForceStep(G__16314){
return (new arimaa.game.ForceStep(cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(G__16314),cljs.core.constant$keyword$43.cljs$core$IFn$_invoke$arity$1(G__16314),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16314,cljs.core.constant$keyword$42,cljs.core.array_seq([cljs.core.constant$keyword$43], 0)),null));
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
arimaa.game.Turn.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4353__auto__,k__4354__auto__){
var self__ = this;
var this__4353__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4353__auto____$1,k__4354__auto__,null);
});

arimaa.game.Turn.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4355__auto__,k16325,else__4356__auto__){
var self__ = this;
var this__4355__auto____$1 = this;
var G__16327 = (((k16325 instanceof cljs.core.Keyword))?k16325.fqn:null);
switch (G__16327) {
case "colour":
return self__.colour;

break;
case "number":
return self__.number;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16325,else__4356__auto__);

}
});

arimaa.game.Turn.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4367__auto__,writer__4368__auto__,opts__4369__auto__){
var self__ = this;
var this__4367__auto____$1 = this;
var pr_pair__4370__auto__ = ((function (this__4367__auto____$1){
return (function (keyval__4371__auto__){
return cljs.core.pr_sequential_writer(writer__4368__auto__,cljs.core.pr_writer,""," ","",opts__4369__auto__,keyval__4371__auto__);
});})(this__4367__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4368__auto__,pr_pair__4370__auto__,"#arimaa.game.Turn{",", ","}",opts__4369__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$44,self__.number],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$37,self__.colour],null))], null),self__.__extmap));
});

arimaa.game.Turn.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4351__auto__){
var self__ = this;
var this__4351__auto____$1 = this;
return self__.__meta;
});

arimaa.game.Turn.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4347__auto__){
var self__ = this;
var this__4347__auto____$1 = this;
return (new arimaa.game.Turn(self__.number,self__.colour,self__.__meta,self__.__extmap,self__.__hash));
});

arimaa.game.Turn.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4357__auto__){
var self__ = this;
var this__4357__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

arimaa.game.Turn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4348__auto__){
var self__ = this;
var this__4348__auto____$1 = this;
var h__4171__auto__ = self__.__hash;
if(!((h__4171__auto__ == null))){
return h__4171__auto__;
} else {
var h__4171__auto____$1 = cljs.core.hash_imap(this__4348__auto____$1);
self__.__hash = h__4171__auto____$1;

return h__4171__auto____$1;
}
});

arimaa.game.Turn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4349__auto__,other__4350__auto__){
var self__ = this;
var this__4349__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3738__auto__ = other__4350__auto__;
if(cljs.core.truth_(and__3738__auto__)){
return ((this__4349__auto____$1.constructor === other__4350__auto__.constructor)) && (cljs.core.equiv_map(this__4349__auto____$1,other__4350__auto__));
} else {
return and__3738__auto__;
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
return [cljs.core.str(self__.number),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.colour,cljs.core.constant$keyword$28))?"g":"s"))].join('');
});

arimaa.game.Turn.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4362__auto__,k__4363__auto__){
var self__ = this;
var this__4362__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$44,null,cljs.core.constant$keyword$37,null], null), null),k__4363__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4362__auto____$1),self__.__meta),k__4363__auto__);
} else {
return (new arimaa.game.Turn(self__.number,self__.colour,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4363__auto__)),null));
}
});

arimaa.game.Turn.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4360__auto__,k__4361__auto__,G__16324){
var self__ = this;
var this__4360__auto____$1 = this;
var pred__16328 = cljs.core.keyword_identical_QMARK_;
var expr__16329 = k__4361__auto__;
if(cljs.core.truth_((function (){var G__16331 = cljs.core.constant$keyword$44;
var G__16332 = expr__16329;
return (pred__16328.cljs$core$IFn$_invoke$arity$2 ? pred__16328.cljs$core$IFn$_invoke$arity$2(G__16331,G__16332) : pred__16328.call(null,G__16331,G__16332));
})())){
return (new arimaa.game.Turn(G__16324,self__.colour,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16333 = cljs.core.constant$keyword$37;
var G__16334 = expr__16329;
return (pred__16328.cljs$core$IFn$_invoke$arity$2 ? pred__16328.cljs$core$IFn$_invoke$arity$2(G__16333,G__16334) : pred__16328.call(null,G__16333,G__16334));
})())){
return (new arimaa.game.Turn(self__.number,G__16324,self__.__meta,self__.__extmap,null));
} else {
return (new arimaa.game.Turn(self__.number,self__.colour,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4361__auto__,G__16324),null));
}
}
});

arimaa.game.Turn.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4365__auto__){
var self__ = this;
var this__4365__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$44,self__.number],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$37,self__.colour],null))], null),self__.__extmap));
});

arimaa.game.Turn.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4352__auto__,G__16324){
var self__ = this;
var this__4352__auto____$1 = this;
return (new arimaa.game.Turn(self__.number,self__.colour,G__16324,self__.__extmap,self__.__hash));
});

arimaa.game.Turn.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4358__auto__,entry__4359__auto__){
var self__ = this;
var this__4358__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4359__auto__)){
return cljs.core._assoc(this__4358__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4359__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4359__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4358__auto____$1,entry__4359__auto__);
}
});

arimaa.game.Turn.cljs$lang$type = true;

arimaa.game.Turn.cljs$lang$ctorPrSeq = (function (this__4387__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"arimaa.game/Turn");
});

arimaa.game.Turn.cljs$lang$ctorPrWriter = (function (this__4387__auto__,writer__4388__auto__){
return cljs.core._write(writer__4388__auto__,"arimaa.game/Turn");
});

arimaa.game.__GT_Turn = (function __GT_Turn(number,colour){
return (new arimaa.game.Turn(number,colour,null,null,null));
});

arimaa.game.map__GT_Turn = (function map__GT_Turn(G__16326){
return (new arimaa.game.Turn(cljs.core.constant$keyword$44.cljs$core$IFn$_invoke$arity$1(G__16326),cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(G__16326),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16326,cljs.core.constant$keyword$44,cljs.core.array_seq([cljs.core.constant$keyword$37], 0)),null));
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
arimaa.game.Move.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4353__auto__,k__4354__auto__){
var self__ = this;
var this__4353__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4353__auto____$1,k__4354__auto__,null);
});

arimaa.game.Move.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4355__auto__,k16337,else__4356__auto__){
var self__ = this;
var this__4355__auto____$1 = this;
var G__16339 = (((k16337 instanceof cljs.core.Keyword))?k16337.fqn:null);
switch (G__16339) {
case "steps":
return self__.steps;

break;
case "turn":
return self__.turn;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16337,else__4356__auto__);

}
});

arimaa.game.Move.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4367__auto__,writer__4368__auto__,opts__4369__auto__){
var self__ = this;
var this__4367__auto____$1 = this;
var pr_pair__4370__auto__ = ((function (this__4367__auto____$1){
return (function (keyval__4371__auto__){
return cljs.core.pr_sequential_writer(writer__4368__auto__,cljs.core.pr_writer,""," ","",opts__4369__auto__,keyval__4371__auto__);
});})(this__4367__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4368__auto__,pr_pair__4370__auto__,"#arimaa.game.Move{",", ","}",opts__4369__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$45,self__.turn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$46,self__.steps],null))], null),self__.__extmap));
});

arimaa.game.Move.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4351__auto__){
var self__ = this;
var this__4351__auto____$1 = this;
return self__.__meta;
});

arimaa.game.Move.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4347__auto__){
var self__ = this;
var this__4347__auto____$1 = this;
return (new arimaa.game.Move(self__.turn,self__.steps,self__.__meta,self__.__extmap,self__.__hash));
});

arimaa.game.Move.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4357__auto__){
var self__ = this;
var this__4357__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

arimaa.game.Move.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4348__auto__){
var self__ = this;
var this__4348__auto____$1 = this;
var h__4171__auto__ = self__.__hash;
if(!((h__4171__auto__ == null))){
return h__4171__auto__;
} else {
var h__4171__auto____$1 = cljs.core.hash_imap(this__4348__auto____$1);
self__.__hash = h__4171__auto____$1;

return h__4171__auto____$1;
}
});

arimaa.game.Move.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4349__auto__,other__4350__auto__){
var self__ = this;
var this__4349__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3738__auto__ = other__4350__auto__;
if(cljs.core.truth_(and__3738__auto__)){
return ((this__4349__auto____$1.constructor === other__4350__auto__.constructor)) && (cljs.core.equiv_map(this__4349__auto____$1,other__4350__auto__));
} else {
return and__3738__auto__;
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
return [cljs.core.str(arimaa.game.show(self__.turn)),cljs.core.str(" "),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(arimaa.game.show,self__.steps))))].join('');
});

arimaa.game.Move.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4362__auto__,k__4363__auto__){
var self__ = this;
var this__4362__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$46,null,cljs.core.constant$keyword$45,null], null), null),k__4363__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4362__auto____$1),self__.__meta),k__4363__auto__);
} else {
return (new arimaa.game.Move(self__.turn,self__.steps,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4363__auto__)),null));
}
});

arimaa.game.Move.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4360__auto__,k__4361__auto__,G__16336){
var self__ = this;
var this__4360__auto____$1 = this;
var pred__16340 = cljs.core.keyword_identical_QMARK_;
var expr__16341 = k__4361__auto__;
if(cljs.core.truth_((function (){var G__16343 = cljs.core.constant$keyword$45;
var G__16344 = expr__16341;
return (pred__16340.cljs$core$IFn$_invoke$arity$2 ? pred__16340.cljs$core$IFn$_invoke$arity$2(G__16343,G__16344) : pred__16340.call(null,G__16343,G__16344));
})())){
return (new arimaa.game.Move(G__16336,self__.steps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16345 = cljs.core.constant$keyword$46;
var G__16346 = expr__16341;
return (pred__16340.cljs$core$IFn$_invoke$arity$2 ? pred__16340.cljs$core$IFn$_invoke$arity$2(G__16345,G__16346) : pred__16340.call(null,G__16345,G__16346));
})())){
return (new arimaa.game.Move(self__.turn,G__16336,self__.__meta,self__.__extmap,null));
} else {
return (new arimaa.game.Move(self__.turn,self__.steps,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4361__auto__,G__16336),null));
}
}
});

arimaa.game.Move.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4365__auto__){
var self__ = this;
var this__4365__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$45,self__.turn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$46,self__.steps],null))], null),self__.__extmap));
});

arimaa.game.Move.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4352__auto__,G__16336){
var self__ = this;
var this__4352__auto____$1 = this;
return (new arimaa.game.Move(self__.turn,self__.steps,G__16336,self__.__extmap,self__.__hash));
});

arimaa.game.Move.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4358__auto__,entry__4359__auto__){
var self__ = this;
var this__4358__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4359__auto__)){
return cljs.core._assoc(this__4358__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4359__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4359__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4358__auto____$1,entry__4359__auto__);
}
});

arimaa.game.Move.cljs$lang$type = true;

arimaa.game.Move.cljs$lang$ctorPrSeq = (function (this__4387__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"arimaa.game/Move");
});

arimaa.game.Move.cljs$lang$ctorPrWriter = (function (this__4387__auto__,writer__4388__auto__){
return cljs.core._write(writer__4388__auto__,"arimaa.game/Move");
});

arimaa.game.__GT_Move = (function __GT_Move(turn,steps){
return (new arimaa.game.Move(turn,steps,null,null,null));
});

arimaa.game.map__GT_Move = (function map__GT_Move(G__16338){
return (new arimaa.game.Move(cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(G__16338),cljs.core.constant$keyword$46.cljs$core$IFn$_invoke$arity$1(G__16338),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16338,cljs.core.constant$keyword$45,cljs.core.array_seq([cljs.core.constant$keyword$46], 0)),null));
});

arimaa.game.adjacent_squares = (function adjacent_squares(square){
var col = cljs.core.constant$keyword$34.cljs$core$IFn$_invoke$arity$1(square);
var row = cljs.core.constant$keyword$35.cljs$core$IFn$_invoke$arity$1(square);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.PersistentHashSet.fromArray([((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),row))?(new arimaa.game.Square(col,(row - (1)),null,null,null)):null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((8),row))?(new arimaa.game.Square(col,(row + (1)),null,null,null)):null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("a",col))?(new arimaa.game.Square((col - (1)),row,null,null,null)):null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("h",col))?(new arimaa.game.Square((col + (1)),row,null,null,null)):null)], true));
});
arimaa.game.pieces_at = (function pieces_at(board,squares){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (piece_position){
var G__16349 = cljs.core.constant$keyword$39.cljs$core$IFn$_invoke$arity$1(piece_position);
return (squares.cljs$core$IFn$_invoke$arity$1 ? squares.cljs$core$IFn$_invoke$arity$1(G__16349) : squares.call(null,G__16349));
}),board);
});
arimaa.game.stronger_animals = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$22,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$23,null,cljs.core.constant$keyword$24,null,cljs.core.constant$keyword$27,null,cljs.core.constant$keyword$26,null,cljs.core.constant$keyword$25,null], null), null),cljs.core.constant$keyword$23,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$24,null,cljs.core.constant$keyword$27,null,cljs.core.constant$keyword$26,null,cljs.core.constant$keyword$25,null], null), null),cljs.core.constant$keyword$24,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$27,null,cljs.core.constant$keyword$26,null,cljs.core.constant$keyword$25,null], null), null),cljs.core.constant$keyword$25,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$27,null,cljs.core.constant$keyword$26,null], null), null),cljs.core.constant$keyword$26,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$27,null], null), null),cljs.core.constant$keyword$27,cljs.core.PersistentHashSet.EMPTY], null);
arimaa.game.weaker_animals = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$27,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$23,null,cljs.core.constant$keyword$24,null,cljs.core.constant$keyword$26,null,cljs.core.constant$keyword$22,null,cljs.core.constant$keyword$25,null], null), null),cljs.core.constant$keyword$26,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$23,null,cljs.core.constant$keyword$24,null,cljs.core.constant$keyword$22,null,cljs.core.constant$keyword$25,null], null), null),cljs.core.constant$keyword$25,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$23,null,cljs.core.constant$keyword$24,null,cljs.core.constant$keyword$22,null], null), null),cljs.core.constant$keyword$24,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$23,null,cljs.core.constant$keyword$22,null], null), null),cljs.core.constant$keyword$23,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$22,null], null), null),cljs.core.constant$keyword$22,cljs.core.PersistentHashSet.EMPTY], null);
arimaa.game.friendly_pieces = (function friendly_pieces(piece_position,piece_positions){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__16350_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1(piece_position)),cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1(p1__16350_SHARP_)));
}),piece_positions);
});
arimaa.game.enemy_pieces = (function enemy_pieces(piece_position,piece_positions){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__16351_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1(piece_position)),cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1(p1__16351_SHARP_)));
}),piece_positions);
});
arimaa.game.stronger_enemy_pieces = (function stronger_enemy_pieces(piece_position,piece_positions){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (){var G__16353 = cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1(piece_position));
return (arimaa.game.stronger_animals.cljs$core$IFn$_invoke$arity$1 ? arimaa.game.stronger_animals.cljs$core$IFn$_invoke$arity$1(G__16353) : arimaa.game.stronger_animals.call(null,G__16353));
})(),arimaa.game.enemy_pieces(piece_position,piece_positions));
});
arimaa.game.weaker_enemy_pieces = (function weaker_enemy_pieces(piece_position,piece_positions){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (){var G__16355 = cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1(piece_position));
return (arimaa.game.weaker_animals.cljs$core$IFn$_invoke$arity$1 ? arimaa.game.weaker_animals.cljs$core$IFn$_invoke$arity$1(G__16355) : arimaa.game.weaker_animals.call(null,G__16355));
})(),arimaa.game.enemy_pieces(piece_position,piece_positions));
});
arimaa.game.is_frozen = (function is_frozen(piece,adjacent_pieces){
var colour = cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1(piece));
var stronger_anmls = (function (){var G__16357 = piece;
return (arimaa.game.stronger_animals.cljs$core$IFn$_invoke$arity$1 ? arimaa.game.stronger_animals.cljs$core$IFn$_invoke$arity$1(G__16357) : arimaa.game.stronger_animals.call(null,G__16357));
})();
return (cljs.core.empty_QMARK_(arimaa.game.friendly_pieces(piece,adjacent_pieces))) && (!(cljs.core.empty_QMARK_(arimaa.game.stronger_enemy_pieces(piece,adjacent_pieces))));
});
arimaa.game.find_empty = (function find_empty(squares,board){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$39,board)),squares);
});
arimaa.game.position_after_move = (function position_after_move(position,move){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__16358_SHARP_){
return arimaa.game.update_position(p1__16358_SHARP_,p1__16358_SHARP_);
}),position,cljs.core.constant$keyword$46.cljs$core$IFn$_invoke$arity$1(move));
});
