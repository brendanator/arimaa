// Compiled by ClojureScript 0.0-2511
goog.provide('arimaa.game');
goog.require('cljs.core');
arimaa.game.animals = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$206,cljs.core.constant$keyword$207,cljs.core.constant$keyword$208,cljs.core.constant$keyword$209,cljs.core.constant$keyword$210,cljs.core.constant$keyword$211], null);
arimaa.game.colour = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$212,cljs.core.constant$keyword$213], null);
arimaa.game.direction = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$268,cljs.core.constant$keyword$269,cljs.core.constant$keyword$270,cljs.core.constant$keyword$271], null);

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

arimaa.game.Square.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4235__auto__,k16242,else__4236__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
var G__16244 = (((k16242 instanceof cljs.core.Keyword))?k16242.fqn:null);
switch (G__16244) {
case "row":
return self__.row;

break;
case "col":
return self__.col;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16242,else__4236__auto__);

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
return cljs.core.pr_sequential_writer(writer__4248__auto__,pr_pair__4250__auto__,"#arimaa.game.Square{",", ","}",opts__4249__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$218,self__.col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$217,self__.row],null))], null),self__.__extmap));
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

arimaa.game.Square.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4242__auto__,k__4243__auto__){
var self__ = this;
var this__4242__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$218,null,cljs.core.constant$keyword$217,null], null), null),k__4243__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4242__auto____$1),self__.__meta),k__4243__auto__);
} else {
return (new arimaa.game.Square(self__.col,self__.row,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4243__auto__)),null));
}
});

arimaa.game.Square.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4240__auto__,k__4241__auto__,G__16241){
var self__ = this;
var this__4240__auto____$1 = this;
var pred__16245 = cljs.core.keyword_identical_QMARK_;
var expr__16246 = k__4241__auto__;
if(cljs.core.truth_((function (){var G__16248 = cljs.core.constant$keyword$218;
var G__16249 = expr__16246;
return (pred__16245.cljs$core$IFn$_invoke$arity$2 ? pred__16245.cljs$core$IFn$_invoke$arity$2(G__16248,G__16249) : pred__16245.call(null,G__16248,G__16249));
})())){
return (new arimaa.game.Square(G__16241,self__.row,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16250 = cljs.core.constant$keyword$217;
var G__16251 = expr__16246;
return (pred__16245.cljs$core$IFn$_invoke$arity$2 ? pred__16245.cljs$core$IFn$_invoke$arity$2(G__16250,G__16251) : pred__16245.call(null,G__16250,G__16251));
})())){
return (new arimaa.game.Square(self__.col,G__16241,self__.__meta,self__.__extmap,null));
} else {
return (new arimaa.game.Square(self__.col,self__.row,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4241__auto__,G__16241),null));
}
}
});

arimaa.game.Square.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4245__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$218,self__.col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$217,self__.row],null))], null),self__.__extmap));
});

arimaa.game.Square.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4232__auto__,G__16241){
var self__ = this;
var this__4232__auto____$1 = this;
return (new arimaa.game.Square(self__.col,self__.row,G__16241,self__.__extmap,self__.__hash));
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

arimaa.game.map__GT_Square = (function map__GT_Square(G__16243){
return (new arimaa.game.Square(cljs.core.constant$keyword$218.cljs$core$IFn$_invoke$arity$1(G__16243),cljs.core.constant$keyword$217.cljs$core$IFn$_invoke$arity$1(G__16243),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16243,cljs.core.constant$keyword$218,cljs.core.array_seq([cljs.core.constant$keyword$217], 0)),null));
});


/**
* @constructor
* @param {*} animal
* @param {*} colour
* @param {*} square
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
arimaa.game.Piece = (function (animal,colour,square,__meta,__extmap,__hash){
this.animal = animal;
this.colour = colour;
this.square = square;
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

arimaa.game.Piece.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4235__auto__,k16254,else__4236__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
var G__16256 = (((k16254 instanceof cljs.core.Keyword))?k16254.fqn:null);
switch (G__16256) {
case "square":
return self__.square;

break;
case "colour":
return self__.colour;

break;
case "animal":
return self__.animal;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16254,else__4236__auto__);

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
return cljs.core.pr_sequential_writer(writer__4248__auto__,pr_pair__4250__auto__,"#arimaa.game.Piece{",", ","}",opts__4249__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$214,self__.animal],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$215,self__.colour],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$216,self__.square],null))], null),self__.__extmap));
});

arimaa.game.Piece.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4231__auto__){
var self__ = this;
var this__4231__auto____$1 = this;
return self__.__meta;
});

arimaa.game.Piece.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4227__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
return (new arimaa.game.Piece(self__.animal,self__.colour,self__.square,self__.__meta,self__.__extmap,self__.__hash));
});

arimaa.game.Piece.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4237__auto__){
var self__ = this;
var this__4237__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
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

arimaa.game.Piece.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4242__auto__,k__4243__auto__){
var self__ = this;
var this__4242__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$216,null,cljs.core.constant$keyword$214,null,cljs.core.constant$keyword$215,null], null), null),k__4243__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4242__auto____$1),self__.__meta),k__4243__auto__);
} else {
return (new arimaa.game.Piece(self__.animal,self__.colour,self__.square,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4243__auto__)),null));
}
});

arimaa.game.Piece.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4240__auto__,k__4241__auto__,G__16253){
var self__ = this;
var this__4240__auto____$1 = this;
var pred__16257 = cljs.core.keyword_identical_QMARK_;
var expr__16258 = k__4241__auto__;
if(cljs.core.truth_((function (){var G__16260 = cljs.core.constant$keyword$214;
var G__16261 = expr__16258;
return (pred__16257.cljs$core$IFn$_invoke$arity$2 ? pred__16257.cljs$core$IFn$_invoke$arity$2(G__16260,G__16261) : pred__16257.call(null,G__16260,G__16261));
})())){
return (new arimaa.game.Piece(G__16253,self__.colour,self__.square,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16262 = cljs.core.constant$keyword$215;
var G__16263 = expr__16258;
return (pred__16257.cljs$core$IFn$_invoke$arity$2 ? pred__16257.cljs$core$IFn$_invoke$arity$2(G__16262,G__16263) : pred__16257.call(null,G__16262,G__16263));
})())){
return (new arimaa.game.Piece(self__.animal,G__16253,self__.square,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16264 = cljs.core.constant$keyword$216;
var G__16265 = expr__16258;
return (pred__16257.cljs$core$IFn$_invoke$arity$2 ? pred__16257.cljs$core$IFn$_invoke$arity$2(G__16264,G__16265) : pred__16257.call(null,G__16264,G__16265));
})())){
return (new arimaa.game.Piece(self__.animal,self__.colour,G__16253,self__.__meta,self__.__extmap,null));
} else {
return (new arimaa.game.Piece(self__.animal,self__.colour,self__.square,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4241__auto__,G__16253),null));
}
}
}
});

arimaa.game.Piece.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4245__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$214,self__.animal],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$215,self__.colour],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$216,self__.square],null))], null),self__.__extmap));
});

arimaa.game.Piece.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4232__auto__,G__16253){
var self__ = this;
var this__4232__auto____$1 = this;
return (new arimaa.game.Piece(self__.animal,self__.colour,self__.square,G__16253,self__.__extmap,self__.__hash));
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

arimaa.game.__GT_Piece = (function __GT_Piece(animal,colour,square){
return (new arimaa.game.Piece(animal,colour,square,null,null,null));
});

arimaa.game.map__GT_Piece = (function map__GT_Piece(G__16255){
return (new arimaa.game.Piece(cljs.core.constant$keyword$214.cljs$core$IFn$_invoke$arity$1(G__16255),cljs.core.constant$keyword$215.cljs$core$IFn$_invoke$arity$1(G__16255),cljs.core.constant$keyword$216.cljs$core$IFn$_invoke$arity$1(G__16255),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16255,cljs.core.constant$keyword$214,cljs.core.array_seq([cljs.core.constant$keyword$215,cljs.core.constant$keyword$216], 0)),null));
});


arimaa.game.ASteps = (function (){var obj16268 = {};
return obj16268;
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
return (function (){var or__3630__auto__ = (arimaa.game.step_count[(function (){var G__16272 = x__4274__auto__;
return goog.typeOf(G__16272);
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
return (function (){var or__3630__auto__ = (arimaa.game.steps[(function (){var G__16276 = x__4274__auto__;
return goog.typeOf(G__16276);
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


/**
* @constructor
* @param {*} start_piece
* @param {*} end_piece
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
arimaa.game.Step = (function (start_piece,end_piece,__meta,__extmap,__hash){
this.start_piece = start_piece;
this.end_piece = end_piece;
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

arimaa.game.Step.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4235__auto__,k16278,else__4236__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
var G__16280 = (((k16278 instanceof cljs.core.Keyword))?k16278.fqn:null);
switch (G__16280) {
case "end-piece":
return self__.end_piece;

break;
case "start-piece":
return self__.start_piece;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16278,else__4236__auto__);

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
return cljs.core.pr_sequential_writer(writer__4248__auto__,pr_pair__4250__auto__,"#arimaa.game.Step{",", ","}",opts__4249__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$272,self__.start_piece],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$273,self__.end_piece],null))], null),self__.__extmap));
});

arimaa.game.Step.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4231__auto__){
var self__ = this;
var this__4231__auto____$1 = this;
return self__.__meta;
});

arimaa.game.Step.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4227__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
return (new arimaa.game.Step(self__.start_piece,self__.end_piece,self__.__meta,self__.__extmap,self__.__hash));
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

arimaa.game.Step.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4242__auto__,k__4243__auto__){
var self__ = this;
var this__4242__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$273,null,cljs.core.constant$keyword$272,null], null), null),k__4243__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4242__auto____$1),self__.__meta),k__4243__auto__);
} else {
return (new arimaa.game.Step(self__.start_piece,self__.end_piece,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4243__auto__)),null));
}
});

arimaa.game.Step.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4240__auto__,k__4241__auto__,G__16277){
var self__ = this;
var this__4240__auto____$1 = this;
var pred__16281 = cljs.core.keyword_identical_QMARK_;
var expr__16282 = k__4241__auto__;
if(cljs.core.truth_((function (){var G__16284 = cljs.core.constant$keyword$272;
var G__16285 = expr__16282;
return (pred__16281.cljs$core$IFn$_invoke$arity$2 ? pred__16281.cljs$core$IFn$_invoke$arity$2(G__16284,G__16285) : pred__16281.call(null,G__16284,G__16285));
})())){
return (new arimaa.game.Step(G__16277,self__.end_piece,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16286 = cljs.core.constant$keyword$273;
var G__16287 = expr__16282;
return (pred__16281.cljs$core$IFn$_invoke$arity$2 ? pred__16281.cljs$core$IFn$_invoke$arity$2(G__16286,G__16287) : pred__16281.call(null,G__16286,G__16287));
})())){
return (new arimaa.game.Step(self__.start_piece,G__16277,self__.__meta,self__.__extmap,null));
} else {
return (new arimaa.game.Step(self__.start_piece,self__.end_piece,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4241__auto__,G__16277),null));
}
}
});

arimaa.game.Step.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4245__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$272,self__.start_piece],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$273,self__.end_piece],null))], null),self__.__extmap));
});

arimaa.game.Step.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4232__auto__,G__16277){
var self__ = this;
var this__4232__auto____$1 = this;
return (new arimaa.game.Step(self__.start_piece,self__.end_piece,G__16277,self__.__extmap,self__.__hash));
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

arimaa.game.__GT_Step = (function __GT_Step(start_piece,end_piece){
return (new arimaa.game.Step(start_piece,end_piece,null,null,null));
});

arimaa.game.map__GT_Step = (function map__GT_Step(G__16279){
return (new arimaa.game.Step(cljs.core.constant$keyword$272.cljs$core$IFn$_invoke$arity$1(G__16279),cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(G__16279),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16279,cljs.core.constant$keyword$272,cljs.core.array_seq([cljs.core.constant$keyword$273], 0)),null));
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

arimaa.game.ForceStep.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4235__auto__,k16290,else__4236__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
var G__16292 = (((k16290 instanceof cljs.core.Keyword))?k16290.fqn:null);
switch (G__16292) {
case "step2":
return self__.step2;

break;
case "step1":
return self__.step1;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16290,else__4236__auto__);

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
return cljs.core.pr_sequential_writer(writer__4248__auto__,pr_pair__4250__auto__,"#arimaa.game.ForceStep{",", ","}",opts__4249__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$274,self__.step1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$275,self__.step2],null))], null),self__.__extmap));
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

arimaa.game.ForceStep.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4242__auto__,k__4243__auto__){
var self__ = this;
var this__4242__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$275,null,cljs.core.constant$keyword$274,null], null), null),k__4243__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4242__auto____$1),self__.__meta),k__4243__auto__);
} else {
return (new arimaa.game.ForceStep(self__.step1,self__.step2,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4243__auto__)),null));
}
});

arimaa.game.ForceStep.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4240__auto__,k__4241__auto__,G__16289){
var self__ = this;
var this__4240__auto____$1 = this;
var pred__16293 = cljs.core.keyword_identical_QMARK_;
var expr__16294 = k__4241__auto__;
if(cljs.core.truth_((function (){var G__16296 = cljs.core.constant$keyword$274;
var G__16297 = expr__16294;
return (pred__16293.cljs$core$IFn$_invoke$arity$2 ? pred__16293.cljs$core$IFn$_invoke$arity$2(G__16296,G__16297) : pred__16293.call(null,G__16296,G__16297));
})())){
return (new arimaa.game.ForceStep(G__16289,self__.step2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16298 = cljs.core.constant$keyword$275;
var G__16299 = expr__16294;
return (pred__16293.cljs$core$IFn$_invoke$arity$2 ? pred__16293.cljs$core$IFn$_invoke$arity$2(G__16298,G__16299) : pred__16293.call(null,G__16298,G__16299));
})())){
return (new arimaa.game.ForceStep(self__.step1,G__16289,self__.__meta,self__.__extmap,null));
} else {
return (new arimaa.game.ForceStep(self__.step1,self__.step2,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4241__auto__,G__16289),null));
}
}
});

arimaa.game.ForceStep.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4245__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$274,self__.step1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$275,self__.step2],null))], null),self__.__extmap));
});

arimaa.game.ForceStep.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4232__auto__,G__16289){
var self__ = this;
var this__4232__auto____$1 = this;
return (new arimaa.game.ForceStep(self__.step1,self__.step2,G__16289,self__.__extmap,self__.__hash));
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

arimaa.game.map__GT_ForceStep = (function map__GT_ForceStep(G__16291){
return (new arimaa.game.ForceStep(cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(G__16291),cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(G__16291),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16291,cljs.core.constant$keyword$274,cljs.core.array_seq([cljs.core.constant$keyword$275], 0)),null));
});

arimaa.game.adjacent_squares = (function adjacent_squares(square){
var col = cljs.core.constant$keyword$218.cljs$core$IFn$_invoke$arity$1(square);
var row = cljs.core.constant$keyword$217.cljs$core$IFn$_invoke$arity$1(square);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.PersistentHashSet.fromArray([((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),row))?(new arimaa.game.Square(col,(row - (1)),null,null,null)):null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((8),row))?(new arimaa.game.Square(col,(row + (1)),null,null,null)):null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("a",col))?(new arimaa.game.Square((col - (1)),row,null,null,null)):null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("h",col))?(new arimaa.game.Square((col + (1)),row,null,null,null)):null)], true));
});
arimaa.game.pieces_at = (function pieces_at(board,squares){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (piece){
var G__16302 = cljs.core.constant$keyword$216.cljs$core$IFn$_invoke$arity$1(piece);
return (squares.cljs$core$IFn$_invoke$arity$1 ? squares.cljs$core$IFn$_invoke$arity$1(G__16302) : squares.call(null,G__16302));
}),board);
});
arimaa.game.stronger_animals = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$206,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$207,null,cljs.core.constant$keyword$208,null,cljs.core.constant$keyword$211,null,cljs.core.constant$keyword$210,null,cljs.core.constant$keyword$209,null], null), null),cljs.core.constant$keyword$207,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$208,null,cljs.core.constant$keyword$211,null,cljs.core.constant$keyword$210,null,cljs.core.constant$keyword$209,null], null), null),cljs.core.constant$keyword$208,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$211,null,cljs.core.constant$keyword$210,null,cljs.core.constant$keyword$209,null], null), null),cljs.core.constant$keyword$209,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$211,null,cljs.core.constant$keyword$210,null], null), null),cljs.core.constant$keyword$210,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$211,null], null), null),cljs.core.constant$keyword$211,cljs.core.PersistentHashSet.EMPTY], null);
arimaa.game.weaker_animals = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$211,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$207,null,cljs.core.constant$keyword$208,null,cljs.core.constant$keyword$210,null,cljs.core.constant$keyword$206,null,cljs.core.constant$keyword$209,null], null), null),cljs.core.constant$keyword$210,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$207,null,cljs.core.constant$keyword$208,null,cljs.core.constant$keyword$206,null,cljs.core.constant$keyword$209,null], null), null),cljs.core.constant$keyword$209,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$207,null,cljs.core.constant$keyword$208,null,cljs.core.constant$keyword$206,null], null), null),cljs.core.constant$keyword$208,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$207,null,cljs.core.constant$keyword$206,null], null), null),cljs.core.constant$keyword$207,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$206,null], null), null),cljs.core.constant$keyword$206,cljs.core.PersistentHashSet.EMPTY], null);
arimaa.game.friendly_pieces = (function friendly_pieces(piece,pieces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__16303_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$215.cljs$core$IFn$_invoke$arity$1(piece),cljs.core.constant$keyword$215.cljs$core$IFn$_invoke$arity$1(p1__16303_SHARP_));
}),pieces);
});
arimaa.game.enemy_pieces = (function enemy_pieces(piece,pieces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__16304_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$215.cljs$core$IFn$_invoke$arity$1(piece),cljs.core.constant$keyword$215.cljs$core$IFn$_invoke$arity$1(p1__16304_SHARP_));
}),pieces);
});
arimaa.game.stronger_enemy_pieces = (function stronger_enemy_pieces(piece,pieces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (){var G__16306 = cljs.core.constant$keyword$214.cljs$core$IFn$_invoke$arity$1(piece);
return (arimaa.game.stronger_animals.cljs$core$IFn$_invoke$arity$1 ? arimaa.game.stronger_animals.cljs$core$IFn$_invoke$arity$1(G__16306) : arimaa.game.stronger_animals.call(null,G__16306));
})(),arimaa.game.enemy_pieces(piece,pieces));
});
arimaa.game.weaker_enemy_pieces = (function weaker_enemy_pieces(piece,pieces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (){var G__16308 = cljs.core.constant$keyword$214.cljs$core$IFn$_invoke$arity$1(piece);
return (arimaa.game.weaker_animals.cljs$core$IFn$_invoke$arity$1 ? arimaa.game.weaker_animals.cljs$core$IFn$_invoke$arity$1(G__16308) : arimaa.game.weaker_animals.call(null,G__16308));
})(),arimaa.game.enemy_pieces(piece,pieces));
});
arimaa.game.is_frozen = (function is_frozen(piece,adjacent_pieces){
var colour = cljs.core.constant$keyword$215.cljs$core$IFn$_invoke$arity$1(piece);
var stronger_anmls = (function (){var G__16310 = piece;
return (arimaa.game.stronger_animals.cljs$core$IFn$_invoke$arity$1 ? arimaa.game.stronger_animals.cljs$core$IFn$_invoke$arity$1(G__16310) : arimaa.game.stronger_animals.call(null,G__16310));
})();
return (cljs.core.empty_QMARK_(arimaa.game.friendly_pieces(piece,adjacent_pieces))) && (!(cljs.core.empty_QMARK_(arimaa.game.stronger_enemy_pieces(piece,adjacent_pieces))));
});
arimaa.game.find_empty = (function find_empty(squares,board){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$216,board)),squares);
});
arimaa.game.make_step = (function make_step(piece,square){
return (new arimaa.game.Step(piece,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(piece,cljs.core.constant$keyword$216,square),null,null,null));
});
arimaa.game.piece_steps = (function piece_steps(piece,board){
var adjacent_sqs = arimaa.game.adjacent_squares(piece);
var adjacent_pieces = arimaa.game.pieces_at(board,arimaa.game.adjacent_squares);
if(!(arimaa.game.is_frozen(piece,adjacent_pieces))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (adjacent_sqs,adjacent_pieces){
return (function (p1__16311_SHARP_){
return arimaa.game.make_step(piece,p1__16311_SHARP_);
});})(adjacent_sqs,adjacent_pieces))
,arimaa.game.find_empty(adjacent_sqs,board));
} else {
return null;
}
});
