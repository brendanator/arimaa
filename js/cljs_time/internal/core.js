// Compiled by ClojureScript 0.0-2727 {}
goog.provide('cljs_time.internal.core');
goog.require('cljs.core');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('clojure.string');
/**
* @param {...*} var_args
*/
cljs_time.internal.core._EQ_ = (function() { 
var _EQ___delegate = function (args){
if(cljs.core.every_QMARK_((function (p1__28758_SHARP_){
return (p1__28758_SHARP_ instanceof goog.date.Date);
}),args)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28759_SHARP_){
return p1__28759_SHARP_.getTime();
}),args));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,args);

}
};
var _EQ_ = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28760__i = 0, G__28760__a = new Array(arguments.length -  0);
while (G__28760__i < G__28760__a.length) {G__28760__a[G__28760__i] = arguments[G__28760__i + 0]; ++G__28760__i;}
  args = new cljs.core.IndexedSeq(G__28760__a,0);
} 
return _EQ___delegate.call(this,args);};
_EQ_.cljs$lang$maxFixedArity = 0;
_EQ_.cljs$lang$applyTo = (function (arglist__28761){
var args = cljs.core.seq(arglist__28761);
return _EQ___delegate(args);
});
_EQ_.cljs$core$IFn$_invoke$arity$variadic = _EQ___delegate;
return _EQ_;
})()
;
cljs_time.internal.core.leap_year_QMARK_ = (function leap_year_QMARK_(y){
if((cljs.core.mod(y,(400)) === (0))){
return true;
} else {
if((cljs.core.mod(y,(100)) === (0))){
return false;
} else {
if((cljs.core.mod(y,(4)) === (0))){
return true;
} else {
return false;

}
}
}
});
cljs_time.internal.core.days_in_month = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
cljs_time.internal.core.year_corrected_dim = (function year_corrected_dim(year,month){
var G__28764 = (function (){var G__28765 = (cljs.core.truth_(cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([month,(1)], 0)))?(11):(month - (1)));
return (cljs_time.internal.core.days_in_month.cljs$core$IFn$_invoke$arity$1 ? cljs_time.internal.core.days_in_month.cljs$core$IFn$_invoke$arity$1(G__28765) : cljs_time.internal.core.days_in_month.call(null,G__28765));
})();
var G__28764__$1 = (cljs.core.truth_((function (){var and__3738__auto__ = cljs_time.internal.core.leap_year_QMARK_(year);
if(and__3738__auto__){
return cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([month,(2)], 0));
} else {
return and__3738__auto__;
}
})())?(G__28764 + (1)):G__28764);
return G__28764__$1;
});
cljs_time.internal.core.valid_date_QMARK_ = (function valid_date_QMARK_(p__28766){
var map__28768 = p__28766;
var map__28768__$1 = ((cljs.core.seq_QMARK_(map__28768))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28768):map__28768);
var d = map__28768__$1;
var millis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28768__$1,cljs.core.constant$keyword$132);
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28768__$1,cljs.core.constant$keyword$133);
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28768__$1,cljs.core.constant$keyword$134);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28768__$1,cljs.core.constant$keyword$135);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28768__$1,cljs.core.constant$keyword$136);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28768__$1,cljs.core.constant$keyword$137);
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28768__$1,cljs.core.constant$keyword$138);
var months__$1 = (months + (1));
var _GT__LT_ = ((function (months__$1,map__28768,map__28768__$1,d,millis,seconds,minutes,hours,days,months,years){
return (function _GT__LT_(a,b,x){
return ((x >= a)) && ((x <= b));
});})(months__$1,map__28768,map__28768__$1,d,millis,seconds,minutes,hours,days,months,years))
;
if(cljs.core.truth_((function (){var and__3738__auto__ = years;
if(cljs.core.truth_(and__3738__auto__)){
return (_GT__LT_((1),(12),months__$1)) && (_GT__LT_((1),cljs_time.internal.core.year_corrected_dim(years,months__$1),days)) && (_GT__LT_((0),(23),hours)) && (_GT__LT_((0),(59),minutes)) && (_GT__LT_((0),(60),seconds)) && (_GT__LT_((0),(999),millis));
} else {
return and__3738__auto__;
}
})())){
return d;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Date is not valid",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$139,cljs.core.constant$keyword$141,cljs.core.constant$keyword$140,d], null));
}
});
cljs_time.internal.core.index_of = (function index_of(coll,x){
return cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__28770_SHARP_,p2__28769_SHARP_){
if(cljs.core.truth_(cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p2__28769_SHARP_,x], 0)))){
return p1__28770_SHARP_;
} else {
return null;
}
}),coll));
});
/**
* @param {...*} var_args
*/
cljs_time.internal.core.period = (function() {
var period = null;
var period__2 = (function (period__$1,value){
return cljs.core.with_meta(new cljs.core.PersistentArrayMap.fromArray([period__$1,value], true, false),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$139,cljs.core.constant$keyword$142], null));
});
var period__3 = (function() { 
var G__28773__delegate = function (p1,v1,kvs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,period.cljs$core$IFn$_invoke$arity$2(p1,v1),kvs);
};
var G__28773 = function (p1,v1,var_args){
var kvs = null;
if (arguments.length > 2) {
var G__28774__i = 0, G__28774__a = new Array(arguments.length -  2);
while (G__28774__i < G__28774__a.length) {G__28774__a[G__28774__i] = arguments[G__28774__i + 2]; ++G__28774__i;}
  kvs = new cljs.core.IndexedSeq(G__28774__a,0);
} 
return G__28773__delegate.call(this,p1,v1,kvs);};
G__28773.cljs$lang$maxFixedArity = 2;
G__28773.cljs$lang$applyTo = (function (arglist__28775){
var p1 = cljs.core.first(arglist__28775);
arglist__28775 = cljs.core.next(arglist__28775);
var v1 = cljs.core.first(arglist__28775);
var kvs = cljs.core.rest(arglist__28775);
return G__28773__delegate(p1,v1,kvs);
});
G__28773.cljs$core$IFn$_invoke$arity$variadic = G__28773__delegate;
return G__28773;
})()
;
period = function(p1,v1,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return period__2.call(this,p1,v1);
default:
var G__28776 = null;
if (arguments.length > 2) {
var G__28777__i = 0, G__28777__a = new Array(arguments.length -  2);
while (G__28777__i < G__28777__a.length) {G__28777__a[G__28777__i] = arguments[G__28777__i + 2]; ++G__28777__i;}
G__28776 = new cljs.core.IndexedSeq(G__28777__a,0);
}
return period__3.cljs$core$IFn$_invoke$arity$variadic(p1,v1, G__28776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
period.cljs$lang$maxFixedArity = 2;
period.cljs$lang$applyTo = period__3.cljs$lang$applyTo;
period.cljs$core$IFn$_invoke$arity$2 = period__2;
period.cljs$core$IFn$_invoke$arity$variadic = period__3.cljs$core$IFn$_invoke$arity$variadic;
return period;
})()
;
/**
* Formats a string using goog.string.format.
* @param {...*} var_args
*/
cljs_time.internal.core.format = (function() { 
var format__delegate = function (fmt,args){
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
if(((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol))){
return [cljs.core.str(x)].join('');
} else {
return x;
}
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args__$1);
};
var format = function (fmt,var_args){
var args = null;
if (arguments.length > 1) {
var G__28778__i = 0, G__28778__a = new Array(arguments.length -  1);
while (G__28778__i < G__28778__a.length) {G__28778__a[G__28778__i] = arguments[G__28778__i + 1]; ++G__28778__i;}
  args = new cljs.core.IndexedSeq(G__28778__a,0);
} 
return format__delegate.call(this,fmt,args);};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__28779){
var fmt = cljs.core.first(arglist__28779);
var args = cljs.core.rest(arglist__28779);
return format__delegate(fmt,args);
});
format.cljs$core$IFn$_invoke$arity$variadic = format__delegate;
return format;
})()
;
/**
* Remove the need to pull in gstring/format code in advanced compilation
*/
cljs_time.internal.core.zero_pad = (function() {
var zero_pad = null;
var zero_pad__1 = (function (n){
if((((0) <= n)) && ((n <= (9)))){
return [cljs.core.str("0"),cljs.core.str(n)].join('');
} else {
return [cljs.core.str(n)].join('');
}
});
var zero_pad__2 = (function (n,zeros){
if(((1) > zeros)){
return [cljs.core.str(n)].join('');
} else {
return [cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2((zeros - cljs.core.count([cljs.core.str(n)].join(''))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("0")))),cljs.core.str(n)].join('');
}
});
zero_pad = function(n,zeros){
switch(arguments.length){
case 1:
return zero_pad__1.call(this,n);
case 2:
return zero_pad__2.call(this,n,zeros);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
zero_pad.cljs$core$IFn$_invoke$arity$1 = zero_pad__1;
zero_pad.cljs$core$IFn$_invoke$arity$2 = zero_pad__2;
return zero_pad;
})()
;
