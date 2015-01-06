// Compiled by ClojureScript 0.0-2657 {}
goog.provide('cljs.core');
goog.require('goog.string.StringBuffer');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string');
cljs.core._STAR_clojurescript_version_STAR_ = "0.0-2657";
cljs.core._STAR_unchecked_if_STAR_ = false;
if(typeof cljs.core._STAR_print_fn_STAR_ !== 'undefined'){
} else {
/**
* Each runtime environment provides a different way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
}
/**
* Set *print-fn* to f.
*/
cljs.core.set_print_fn_BANG_ = (function set_print_fn_BANG_(f){
return cljs.core._STAR_print_fn_STAR_ = f;
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core._STAR_print_length_STAR_ = null;
cljs.core._STAR_print_level_STAR_ = null;
if(typeof cljs.core._STAR_loaded_libs_STAR_ !== 'undefined'){
} else {
cljs.core._STAR_loaded_libs_STAR_ = null;
}
cljs.core.pr_opts = (function pr_opts(){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1,cljs.core._STAR_flush_on_newline_STAR_,cljs.core.constant$keyword$2,cljs.core._STAR_print_readably_STAR_,cljs.core.constant$keyword$3,cljs.core._STAR_print_meta_STAR_,cljs.core.constant$keyword$4,cljs.core._STAR_print_dup_STAR_,cljs.core.constant$keyword$5,cljs.core._STAR_print_length_STAR_], null);
});
/**
* Set *print-fn* to console.log
*/
cljs.core.enable_console_print_BANG_ = (function enable_console_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16963__delegate = function (args){
return console.log.apply(console,(function (){var G__16962 = args;
return (cljs.core.into_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(G__16962) : cljs.core.into_array.call(null,G__16962));
})());
};
var G__16963 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__16963__delegate.call(this,args);};
G__16963.cljs$lang$maxFixedArity = 0;
G__16963.cljs$lang$applyTo = (function (arglist__16964){
var args = cljs.core.seq(arglist__16964);
return G__16963__delegate(args);
});
G__16963.cljs$core$IFn$_invoke$arity$variadic = G__16963__delegate;
return G__16963;
})()
;
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
cljs.core.not_native = null;

/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
cljs.core.array_QMARK_ = (function array_QMARK_(x){
return x instanceof Array;
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return typeof n === 'number';
});
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x)){
return false;
} else {
return true;
}
});
/**
* Returns true if x is not nil, false otherwise.
*/
cljs.core.some_QMARK_ = (function some_QMARK_(x){
return !((x == null));
});
cljs.core.object_QMARK_ = (function object_QMARK_(x){
if(!((x == null))){
return (x.constructor === Object);
} else {
return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var G__16966 = x;
return goog.isString(G__16966);
});
/**
* Internal - do not use!
*/
cljs.core.native_satisfies_QMARK_ = (function native_satisfies_QMARK_(p,x){
var x__$1 = (((x == null))?null:x);
if((p[(function (){var G__16968 = x__$1;
return goog.typeOf(G__16968);
})()])){
return true;
} else {
if((p["_"])){
return true;
} else {
return false;

}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.type = (function type(x){
if((x == null)){
return null;
} else {
return x.constructor;
}
});
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
var ty = cljs.core.type(obj);
var ty__$1 = (cljs.core.truth_((function (){var and__3719__auto__ = ty;
if(cljs.core.truth_(and__3719__auto__)){
return ty.cljs$lang$type;
} else {
return and__3719__auto__;
}
})())?ty.cljs$lang$ctorStr:(function (){var G__16970 = obj;
return goog.typeOf(G__16970);
})());
return (new Error(["No protocol method ",proto," defined for type ",ty__$1,": ",obj].join("")));
});
cljs.core.type__GT_str = (function type__GT_str(ty){
var temp__4124__auto__ = ty.cljs$lang$ctorStr;
if(cljs.core.truth_(temp__4124__auto__)){
var s = temp__4124__auto__;
return s;
} else {
return [cljs.core.str(ty)].join('');
}
});
if((typeof Symbol !== 'undefined') && (((function (){var G__16972 = Symbol;
return goog.typeOf(G__16972);
})() === "function"))){
cljs.core.ITER_SYMBOL = Symbol.iterator;
} else {
cljs.core.ITER_SYMBOL = "@@iterator";
}
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.cljs$core$IFn$_invoke$arity$1(size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
make_array.cljs$core$IFn$_invoke$arity$1 = make_array__1;
make_array.cljs$core$IFn$_invoke$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(arr){
var len = arr.length;
var new_arr = (new Array(len));
var n__4618__auto___16974 = len;
var i_16975 = (0);
while(true){
if((i_16975 < n__4618__auto___16974)){
(new_arr[i_16975] = (arr[i_16975]));

var G__16976 = (i_16975 + (1));
i_16975 = G__16976;
continue;
} else {
}
break;
}

return new_arr;
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__16985__delegate = function (array,i,idxs){
var G__16982 = aget;
var G__16983 = aget.cljs$core$IFn$_invoke$arity$2(array,i);
var G__16984 = idxs;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$3 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$3(G__16982,G__16983,G__16984) : cljs.core.apply.call(null,G__16982,G__16983,G__16984));
};
var G__16985 = function (array,i,var_args){
var idxs = null;
if (arguments.length > 2) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__16985__delegate.call(this,array,i,idxs);};
G__16985.cljs$lang$maxFixedArity = 2;
G__16985.cljs$lang$applyTo = (function (arglist__16986){
var array = cljs.core.first(arglist__16986);
arglist__16986 = cljs.core.next(arglist__16986);
var i = cljs.core.first(arglist__16986);
var idxs = cljs.core.rest(arglist__16986);
return G__16985__delegate(array,i,idxs);
});
G__16985.cljs$core$IFn$_invoke$arity$variadic = G__16985__delegate;
return G__16985;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$core$IFn$_invoke$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$core$IFn$_invoke$arity$2 = aget__2;
aget.cljs$core$IFn$_invoke$arity$variadic = aget__3.cljs$core$IFn$_invoke$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
* @param {...*} var_args
*/
cljs.core.aset = (function() {
var aset = null;
var aset__3 = (function (array,i,val){
return (array[i] = val);
});
var aset__4 = (function() { 
var G__16995__delegate = function (array,idx,idx2,idxv){
var G__16991 = aset;
var G__16992 = (array[idx]);
var G__16993 = idx2;
var G__16994 = idxv;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$4(G__16991,G__16992,G__16993,G__16994) : cljs.core.apply.call(null,G__16991,G__16992,G__16993,G__16994));
};
var G__16995 = function (array,idx,idx2,var_args){
var idxv = null;
if (arguments.length > 3) {
  idxv = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__16995__delegate.call(this,array,idx,idx2,idxv);};
G__16995.cljs$lang$maxFixedArity = 3;
G__16995.cljs$lang$applyTo = (function (arglist__16996){
var array = cljs.core.first(arglist__16996);
arglist__16996 = cljs.core.next(arglist__16996);
var idx = cljs.core.first(arglist__16996);
arglist__16996 = cljs.core.next(arglist__16996);
var idx2 = cljs.core.first(arglist__16996);
var idxv = cljs.core.rest(arglist__16996);
return G__16995__delegate(array,idx,idx2,idxv);
});
G__16995.cljs$core$IFn$_invoke$arity$variadic = G__16995__delegate;
return G__16995;
})()
;
aset = function(array,idx,idx2,var_args){
var idxv = var_args;
switch(arguments.length){
case 3:
return aset__3.call(this,array,idx,idx2);
default:
return aset__4.cljs$core$IFn$_invoke$arity$variadic(array,idx,idx2, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aset.cljs$lang$maxFixedArity = 3;
aset.cljs$lang$applyTo = aset__4.cljs$lang$applyTo;
aset.cljs$core$IFn$_invoke$arity$3 = aset__3;
aset.cljs$core$IFn$_invoke$arity$variadic = aset__4.cljs$core$IFn$_invoke$arity$variadic;
return aset;
})()
;
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.cljs$core$IFn$_invoke$arity$2(null,aseq);
});
var into_array__2 = (function (type,aseq){
var G__17002 = (function (a,x){
a.push(x);

return a;
});
var G__17003 = [];
var G__17004 = aseq;
return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(G__17002,G__17003,G__17004) : cljs.core.reduce.call(null,G__17002,G__17003,G__17004));
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
into_array.cljs$core$IFn$_invoke$arity$1 = into_array__1;
into_array.cljs$core$IFn$_invoke$arity$2 = into_array__2;
return into_array;
})()
;
/**
* Invoke JavaScript object method via string. Needed when the
* string is not a valid unquoted property name.
* @param {...*} var_args
*/
cljs.core.js_invoke = (function() { 
var js_invoke__delegate = function (obj,s,args){
return (obj[s]).apply(obj,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var js_invoke = function (obj,s,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return js_invoke__delegate.call(this,obj,s,args);};
js_invoke.cljs$lang$maxFixedArity = 2;
js_invoke.cljs$lang$applyTo = (function (arglist__17005){
var obj = cljs.core.first(arglist__17005);
arglist__17005 = cljs.core.next(arglist__17005);
var s = cljs.core.first(arglist__17005);
var args = cljs.core.rest(arglist__17005);
return js_invoke__delegate(obj,s,args);
});
js_invoke.cljs$core$IFn$_invoke$arity$variadic = js_invoke__delegate;
return js_invoke;
})()
;

cljs.core.Fn = (function (){var obj17007 = {};
return obj17007;
})();


cljs.core.IFn = (function (){var obj17009 = {};
return obj17009;
})();

cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3719__auto__ = this$;
if(and__3719__auto__){
return this$.cljs$core$IFn$_invoke$arity$1;
} else {
return and__3719__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else {
var x__4375__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3731__auto__ = (cljs.core._invoke[(function (){var G__17055 = x__4375__auto__;
return goog.typeOf(G__17055);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._invoke["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3719__auto__ = this$;
if(and__3719__auto__){
return this$.cljs$core$IFn$_invoke$arity$2;
} else {
return and__3719__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else {
var x__4375__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3731__auto__ = (cljs.core._invoke[(function (){var G__17057 = x__4375__auto__;
return goog.typeOf(G__17057);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._invoke["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3719__auto__ = this$;
if(and__3719__auto__){
return this$.cljs$core$IFn$_invoke$arity$3;
} else {
return and__3719__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else {
var x__4375__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3731__auto__ = (cljs.core._invoke[(function (){var G__17059 = x__4375__auto__;
return goog.typeOf(G__17059);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._invoke["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3719__auto__ = this$;
if(and__3719__auto__){
return this$.cljs$core$IFn$_invoke$arity$4;
} else {
return and__3719__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else {
var x__4375__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3731__auto__ = (cljs.core._invoke[(function (){var G__17061 = x__4375__auto__;
return goog.typeOf(G__17061);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._invoke["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3719__auto__ = this$;
if(and__3719__auto__){
return this$.cljs$core$IFn$_invoke$arity$5;
} else {
return and__3719__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else {
var x__4375__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3731__auto__ = (cljs.core._invoke[(function (){var G__17063 = x__4375__auto__;
return goog.typeOf(G__17063);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._invoke["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3719__auto__ = this$;
if(and__3719__auto__){
return this$.cljs$core$IFn$_invoke$arity$6;
} else {
return and__3719__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else {
var x__4375__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3731__auto__ = (cljs.core._invoke[(function (){var G__17065 = x__4375__auto__;
return goog.typeOf(G__17065);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._invoke["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3719__auto__ = this$;
if(and__3719__auto__){
return this$.cljs$core$IFn$_invoke$arity$7;
} else {
return and__3719__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else {
var x__4375__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3731__auto__ = (cljs.core._invoke[(function (){var G__17067 = x__4375__auto__;
return goog.typeOf(G__17067);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._invoke["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3719__auto__ = this$;
if(and__3719__auto__){
return this$.cljs$core$IFn$_invoke$arity$8;
} else {
return and__3719__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else {
var x__4375__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3731__auto__ = (cljs.core._invoke[(function (){var G__17069 = x__4375__auto__;
return goog.typeOf(G__17069);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._invoke["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3719__auto__ = this$;
if(and__3719__auto__){
return this$.cljs$core$IFn$_invoke$arity$9;
} else {
return and__3719__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else {
var x__4375__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3731__auto__ = (cljs.core._invoke[(function (){var G__17071 = x__4375__auto__;
return goog.typeOf(G__17071);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._invoke["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3719__auto__ = this$;
if(and__3719__auto__){
return this$.cljs$core$IFn$_invoke$arity$10;
} else {
return and__3719__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else {
var x__4375__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3731__auto__ = (cljs.core._invoke[(function (){var G__17073 = x__4375__auto__;
return goog.typeOf(G__17073);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._invoke["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3719__auto__ = this$;
if(and__3719__auto__){
return this$.cljs$core$IFn$_invoke$arity$11;
} else {
return and__3719__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else {
var x__4375__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3731__auto__ = (cljs.core._invoke[(function (){var G__17075 = x__4375__auto__;
return goog.typeOf(G__17075);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._invoke["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3719__auto__ = this$;
if(and__3719__auto__){
return this$.cljs$core$IFn$_invoke$arity$12;
} else {
return and__3719__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else {
var x__4375__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3731__auto__ = (cljs.core._invoke[(function (){var G__17077 = x__4375__auto__;
return goog.typeOf(G__17077);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._invoke["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3719__auto__ = this$;
if(and__3719__auto__){
return this$.cljs$core$IFn$_invoke$arity$13;
} else {
return and__3719__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else {
var x__4375__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3731__auto__ = (cljs.core._invoke[(function (){var G__17079 = x__4375__auto__;
return goog.typeOf(G__17079);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._invoke["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3719__auto__ = this$;
if(and__3719__auto__){
return this$.cljs$core$IFn$_invoke$arity$14;
} else {
return and__3719__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else {
var x__4375__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3731__auto__ = (cljs.core._invoke[(function (){var G__17081 = x__4375__auto__;
return goog.typeOf(G__17081);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._invoke["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3719__auto__ = this$;
if(and__3719__auto__){
return this$.cljs$core$IFn$_invoke$arity$15;
} else {
return and__3719__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else {
var x__4375__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3731__auto__ = (cljs.core._invoke[(function (){var G__17083 = x__4375__auto__;
return goog.typeOf(G__17083);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._invoke["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3719__auto__ = this$;
if(and__3719__auto__){
return this$.cljs$core$IFn$_invoke$arity$16;
} else {
return and__3719__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else {
var x__4375__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3731__auto__ = (cljs.core._invoke[(function (){var G__17085 = x__4375__auto__;
return goog.typeOf(G__17085);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._invoke["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3719__auto__ = this$;
if(and__3719__auto__){
return this$.cljs$core$IFn$_invoke$arity$17;
} else {
return and__3719__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else {
var x__4375__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3731__auto__ = (cljs.core._invoke[(function (){var G__17087 = x__4375__auto__;
return goog.typeOf(G__17087);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._invoke["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3719__auto__ = this$;
if(and__3719__auto__){
return this$.cljs$core$IFn$_invoke$arity$18;
} else {
return and__3719__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else {
var x__4375__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3731__auto__ = (cljs.core._invoke[(function (){var G__17089 = x__4375__auto__;
return goog.typeOf(G__17089);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._invoke["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
if((function (){var and__3719__auto__ = this$;
if(and__3719__auto__){
return this$.cljs$core$IFn$_invoke$arity$19;
} else {
return and__3719__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
} else {
var x__4375__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3731__auto__ = (cljs.core._invoke[(function (){var G__17091 = x__4375__auto__;
return goog.typeOf(G__17091);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._invoke["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
if((function (){var and__3719__auto__ = this$;
if(and__3719__auto__){
return this$.cljs$core$IFn$_invoke$arity$20;
} else {
return and__3719__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
} else {
var x__4375__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3731__auto__ = (cljs.core._invoke[(function (){var G__17093 = x__4375__auto__;
return goog.typeOf(G__17093);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._invoke["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
if((function (){var and__3719__auto__ = this$;
if(and__3719__auto__){
return this$.cljs$core$IFn$_invoke$arity$21;
} else {
return and__3719__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
} else {
var x__4375__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3731__auto__ = (cljs.core._invoke[(function (){var G__17095 = x__4375__auto__;
return goog.typeOf(G__17095);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._invoke["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
}
});
var _invoke__22 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
if((function (){var and__3719__auto__ = this$;
if(and__3719__auto__){
return this$.cljs$core$IFn$_invoke$arity$22;
} else {
return and__3719__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$22(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
} else {
var x__4375__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3731__auto__ = (cljs.core._invoke[(function (){var G__17097 = x__4375__auto__;
return goog.typeOf(G__17097);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._invoke["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return _invoke__22.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_invoke.cljs$core$IFn$_invoke$arity$1 = _invoke__1;
_invoke.cljs$core$IFn$_invoke$arity$2 = _invoke__2;
_invoke.cljs$core$IFn$_invoke$arity$3 = _invoke__3;
_invoke.cljs$core$IFn$_invoke$arity$4 = _invoke__4;
_invoke.cljs$core$IFn$_invoke$arity$5 = _invoke__5;
_invoke.cljs$core$IFn$_invoke$arity$6 = _invoke__6;
_invoke.cljs$core$IFn$_invoke$arity$7 = _invoke__7;
_invoke.cljs$core$IFn$_invoke$arity$8 = _invoke__8;
_invoke.cljs$core$IFn$_invoke$arity$9 = _invoke__9;
_invoke.cljs$core$IFn$_invoke$arity$10 = _invoke__10;
_invoke.cljs$core$IFn$_invoke$arity$11 = _invoke__11;
_invoke.cljs$core$IFn$_invoke$arity$12 = _invoke__12;
_invoke.cljs$core$IFn$_invoke$arity$13 = _invoke__13;
_invoke.cljs$core$IFn$_invoke$arity$14 = _invoke__14;
_invoke.cljs$core$IFn$_invoke$arity$15 = _invoke__15;
_invoke.cljs$core$IFn$_invoke$arity$16 = _invoke__16;
_invoke.cljs$core$IFn$_invoke$arity$17 = _invoke__17;
_invoke.cljs$core$IFn$_invoke$arity$18 = _invoke__18;
_invoke.cljs$core$IFn$_invoke$arity$19 = _invoke__19;
_invoke.cljs$core$IFn$_invoke$arity$20 = _invoke__20;
_invoke.cljs$core$IFn$_invoke$arity$21 = _invoke__21;
_invoke.cljs$core$IFn$_invoke$arity$22 = _invoke__22;
return _invoke;
})()
;


cljs.core.ICloneable = (function (){var obj17099 = {};
return obj17099;
})();

cljs.core._clone = (function _clone(value){
if((function (){var and__3719__auto__ = value;
if(and__3719__auto__){
return value.cljs$core$ICloneable$_clone$arity$1;
} else {
return and__3719__auto__;
}
})()){
return value.cljs$core$ICloneable$_clone$arity$1(value);
} else {
var x__4375__auto__ = (((value == null))?null:value);
return (function (){var or__3731__auto__ = (cljs.core._clone[(function (){var G__17103 = x__4375__auto__;
return goog.typeOf(G__17103);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._clone["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("ICloneable.-clone",value);
}
}
})().call(null,value);
}
});


cljs.core.ICounted = (function (){var obj17105 = {};
return obj17105;
})();

cljs.core._count = (function _count(coll){
if((function (){var and__3719__auto__ = coll;
if(and__3719__auto__){
return coll.cljs$core$ICounted$_count$arity$1;
} else {
return and__3719__auto__;
}
})()){
return coll.cljs$core$ICounted$_count$arity$1(coll);
} else {
var x__4375__auto__ = (((coll == null))?null:coll);
return (function (){var or__3731__auto__ = (cljs.core._count[(function (){var G__17109 = x__4375__auto__;
return goog.typeOf(G__17109);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._count["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("ICounted.-count",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IEmptyableCollection = (function (){var obj17111 = {};
return obj17111;
})();

cljs.core._empty = (function _empty(coll){
if((function (){var and__3719__auto__ = coll;
if(and__3719__auto__){
return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else {
return and__3719__auto__;
}
})()){
return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else {
var x__4375__auto__ = (((coll == null))?null:coll);
return (function (){var or__3731__auto__ = (cljs.core._empty[(function (){var G__17115 = x__4375__auto__;
return goog.typeOf(G__17115);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._empty["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ICollection = (function (){var obj17117 = {};
return obj17117;
})();

cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3719__auto__ = coll;
if(and__3719__auto__){
return coll.cljs$core$ICollection$_conj$arity$2;
} else {
return and__3719__auto__;
}
})()){
return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else {
var x__4375__auto__ = (((coll == null))?null:coll);
return (function (){var or__3731__auto__ = (cljs.core._conj[(function (){var G__17121 = x__4375__auto__;
return goog.typeOf(G__17121);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._conj["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});


cljs.core.IIndexed = (function (){var obj17123 = {};
return obj17123;
})();

cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3719__auto__ = coll;
if(and__3719__auto__){
return coll.cljs$core$IIndexed$_nth$arity$2;
} else {
return and__3719__auto__;
}
})()){
return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else {
var x__4375__auto__ = (((coll == null))?null:coll);
return (function (){var or__3731__auto__ = (cljs.core._nth[(function (){var G__17129 = x__4375__auto__;
return goog.typeOf(G__17129);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._nth["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3719__auto__ = coll;
if(and__3719__auto__){
return coll.cljs$core$IIndexed$_nth$arity$3;
} else {
return and__3719__auto__;
}
})()){
return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else {
var x__4375__auto__ = (((coll == null))?null:coll);
return (function (){var or__3731__auto__ = (cljs.core._nth[(function (){var G__17131 = x__4375__auto__;
return goog.typeOf(G__17131);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._nth["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_nth.cljs$core$IFn$_invoke$arity$2 = _nth__2;
_nth.cljs$core$IFn$_invoke$arity$3 = _nth__3;
return _nth;
})()
;


cljs.core.ASeq = (function (){var obj17133 = {};
return obj17133;
})();


cljs.core.ISeq = (function (){var obj17135 = {};
return obj17135;
})();

cljs.core._first = (function _first(coll){
if((function (){var and__3719__auto__ = coll;
if(and__3719__auto__){
return coll.cljs$core$ISeq$_first$arity$1;
} else {
return and__3719__auto__;
}
})()){
return coll.cljs$core$ISeq$_first$arity$1(coll);
} else {
var x__4375__auto__ = (((coll == null))?null:coll);
return (function (){var or__3731__auto__ = (cljs.core._first[(function (){var G__17139 = x__4375__auto__;
return goog.typeOf(G__17139);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._first["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("ISeq.-first",coll);
}
}
})().call(null,coll);
}
});

cljs.core._rest = (function _rest(coll){
if((function (){var and__3719__auto__ = coll;
if(and__3719__auto__){
return coll.cljs$core$ISeq$_rest$arity$1;
} else {
return and__3719__auto__;
}
})()){
return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else {
var x__4375__auto__ = (((coll == null))?null:coll);
return (function (){var or__3731__auto__ = (cljs.core._rest[(function (){var G__17143 = x__4375__auto__;
return goog.typeOf(G__17143);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._rest["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});


cljs.core.INext = (function (){var obj17145 = {};
return obj17145;
})();

cljs.core._next = (function _next(coll){
if((function (){var and__3719__auto__ = coll;
if(and__3719__auto__){
return coll.cljs$core$INext$_next$arity$1;
} else {
return and__3719__auto__;
}
})()){
return coll.cljs$core$INext$_next$arity$1(coll);
} else {
var x__4375__auto__ = (((coll == null))?null:coll);
return (function (){var or__3731__auto__ = (cljs.core._next[(function (){var G__17149 = x__4375__auto__;
return goog.typeOf(G__17149);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._next["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("INext.-next",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ILookup = (function (){var obj17151 = {};
return obj17151;
})();

cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3719__auto__ = o;
if(and__3719__auto__){
return o.cljs$core$ILookup$_lookup$arity$2;
} else {
return and__3719__auto__;
}
})()){
return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else {
var x__4375__auto__ = (((o == null))?null:o);
return (function (){var or__3731__auto__ = (cljs.core._lookup[(function (){var G__17157 = x__4375__auto__;
return goog.typeOf(G__17157);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._lookup["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3719__auto__ = o;
if(and__3719__auto__){
return o.cljs$core$ILookup$_lookup$arity$3;
} else {
return and__3719__auto__;
}
})()){
return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else {
var x__4375__auto__ = (((o == null))?null:o);
return (function (){var or__3731__auto__ = (cljs.core._lookup[(function (){var G__17159 = x__4375__auto__;
return goog.typeOf(G__17159);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._lookup["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_lookup.cljs$core$IFn$_invoke$arity$2 = _lookup__2;
_lookup.cljs$core$IFn$_invoke$arity$3 = _lookup__3;
return _lookup;
})()
;


cljs.core.IAssociative = (function (){var obj17161 = {};
return obj17161;
})();

cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3719__auto__ = coll;
if(and__3719__auto__){
return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else {
return and__3719__auto__;
}
})()){
return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else {
var x__4375__auto__ = (((coll == null))?null:coll);
return (function (){var or__3731__auto__ = (cljs.core._contains_key_QMARK_[(function (){var G__17165 = x__4375__auto__;
return goog.typeOf(G__17165);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});

cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3719__auto__ = coll;
if(and__3719__auto__){
return coll.cljs$core$IAssociative$_assoc$arity$3;
} else {
return and__3719__auto__;
}
})()){
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else {
var x__4375__auto__ = (((coll == null))?null:coll);
return (function (){var or__3731__auto__ = (cljs.core._assoc[(function (){var G__17169 = x__4375__auto__;
return goog.typeOf(G__17169);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._assoc["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});


cljs.core.IMap = (function (){var obj17171 = {};
return obj17171;
})();

cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3719__auto__ = coll;
if(and__3719__auto__){
return coll.cljs$core$IMap$_dissoc$arity$2;
} else {
return and__3719__auto__;
}
})()){
return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else {
var x__4375__auto__ = (((coll == null))?null:coll);
return (function (){var or__3731__auto__ = (cljs.core._dissoc[(function (){var G__17175 = x__4375__auto__;
return goog.typeOf(G__17175);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._dissoc["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});


cljs.core.IMapEntry = (function (){var obj17177 = {};
return obj17177;
})();

cljs.core._key = (function _key(coll){
if((function (){var and__3719__auto__ = coll;
if(and__3719__auto__){
return coll.cljs$core$IMapEntry$_key$arity$1;
} else {
return and__3719__auto__;
}
})()){
return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else {
var x__4375__auto__ = (((coll == null))?null:coll);
return (function (){var or__3731__auto__ = (cljs.core._key[(function (){var G__17181 = x__4375__auto__;
return goog.typeOf(G__17181);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._key["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});

cljs.core._val = (function _val(coll){
if((function (){var and__3719__auto__ = coll;
if(and__3719__auto__){
return coll.cljs$core$IMapEntry$_val$arity$1;
} else {
return and__3719__auto__;
}
})()){
return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else {
var x__4375__auto__ = (((coll == null))?null:coll);
return (function (){var or__3731__auto__ = (cljs.core._val[(function (){var G__17185 = x__4375__auto__;
return goog.typeOf(G__17185);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._val["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ISet = (function (){var obj17187 = {};
return obj17187;
})();

cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3719__auto__ = coll;
if(and__3719__auto__){
return coll.cljs$core$ISet$_disjoin$arity$2;
} else {
return and__3719__auto__;
}
})()){
return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else {
var x__4375__auto__ = (((coll == null))?null:coll);
return (function (){var or__3731__auto__ = (cljs.core._disjoin[(function (){var G__17191 = x__4375__auto__;
return goog.typeOf(G__17191);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._disjoin["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});


cljs.core.IStack = (function (){var obj17193 = {};
return obj17193;
})();

cljs.core._peek = (function _peek(coll){
if((function (){var and__3719__auto__ = coll;
if(and__3719__auto__){
return coll.cljs$core$IStack$_peek$arity$1;
} else {
return and__3719__auto__;
}
})()){
return coll.cljs$core$IStack$_peek$arity$1(coll);
} else {
var x__4375__auto__ = (((coll == null))?null:coll);
return (function (){var or__3731__auto__ = (cljs.core._peek[(function (){var G__17197 = x__4375__auto__;
return goog.typeOf(G__17197);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._peek["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IStack.-peek",coll);
}
}
})().call(null,coll);
}
});

cljs.core._pop = (function _pop(coll){
if((function (){var and__3719__auto__ = coll;
if(and__3719__auto__){
return coll.cljs$core$IStack$_pop$arity$1;
} else {
return and__3719__auto__;
}
})()){
return coll.cljs$core$IStack$_pop$arity$1(coll);
} else {
var x__4375__auto__ = (((coll == null))?null:coll);
return (function (){var or__3731__auto__ = (cljs.core._pop[(function (){var G__17201 = x__4375__auto__;
return goog.typeOf(G__17201);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._pop["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IStack.-pop",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IVector = (function (){var obj17203 = {};
return obj17203;
})();

cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3719__auto__ = coll;
if(and__3719__auto__){
return coll.cljs$core$IVector$_assoc_n$arity$3;
} else {
return and__3719__auto__;
}
})()){
return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else {
var x__4375__auto__ = (((coll == null))?null:coll);
return (function (){var or__3731__auto__ = (cljs.core._assoc_n[(function (){var G__17207 = x__4375__auto__;
return goog.typeOf(G__17207);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._assoc_n["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});


cljs.core.IDeref = (function (){var obj17209 = {};
return obj17209;
})();

cljs.core._deref = (function _deref(o){
if((function (){var and__3719__auto__ = o;
if(and__3719__auto__){
return o.cljs$core$IDeref$_deref$arity$1;
} else {
return and__3719__auto__;
}
})()){
return o.cljs$core$IDeref$_deref$arity$1(o);
} else {
var x__4375__auto__ = (((o == null))?null:o);
return (function (){var or__3731__auto__ = (cljs.core._deref[(function (){var G__17213 = x__4375__auto__;
return goog.typeOf(G__17213);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._deref["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IDeref.-deref",o);
}
}
})().call(null,o);
}
});


cljs.core.IDerefWithTimeout = (function (){var obj17215 = {};
return obj17215;
})();

cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3719__auto__ = o;
if(and__3719__auto__){
return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else {
return and__3719__auto__;
}
})()){
return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else {
var x__4375__auto__ = (((o == null))?null:o);
return (function (){var or__3731__auto__ = (cljs.core._deref_with_timeout[(function (){var G__17219 = x__4375__auto__;
return goog.typeOf(G__17219);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._deref_with_timeout["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});


cljs.core.IMeta = (function (){var obj17221 = {};
return obj17221;
})();

cljs.core._meta = (function _meta(o){
if((function (){var and__3719__auto__ = o;
if(and__3719__auto__){
return o.cljs$core$IMeta$_meta$arity$1;
} else {
return and__3719__auto__;
}
})()){
return o.cljs$core$IMeta$_meta$arity$1(o);
} else {
var x__4375__auto__ = (((o == null))?null:o);
return (function (){var or__3731__auto__ = (cljs.core._meta[(function (){var G__17225 = x__4375__auto__;
return goog.typeOf(G__17225);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._meta["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IMeta.-meta",o);
}
}
})().call(null,o);
}
});


cljs.core.IWithMeta = (function (){var obj17227 = {};
return obj17227;
})();

cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3719__auto__ = o;
if(and__3719__auto__){
return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else {
return and__3719__auto__;
}
})()){
return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else {
var x__4375__auto__ = (((o == null))?null:o);
return (function (){var or__3731__auto__ = (cljs.core._with_meta[(function (){var G__17231 = x__4375__auto__;
return goog.typeOf(G__17231);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._with_meta["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});


cljs.core.IReduce = (function (){var obj17233 = {};
return obj17233;
})();

cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3719__auto__ = coll;
if(and__3719__auto__){
return coll.cljs$core$IReduce$_reduce$arity$2;
} else {
return and__3719__auto__;
}
})()){
return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else {
var x__4375__auto__ = (((coll == null))?null:coll);
return (function (){var or__3731__auto__ = (cljs.core._reduce[(function (){var G__17239 = x__4375__auto__;
return goog.typeOf(G__17239);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._reduce["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3719__auto__ = coll;
if(and__3719__auto__){
return coll.cljs$core$IReduce$_reduce$arity$3;
} else {
return and__3719__auto__;
}
})()){
return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else {
var x__4375__auto__ = (((coll == null))?null:coll);
return (function (){var or__3731__auto__ = (cljs.core._reduce[(function (){var G__17241 = x__4375__auto__;
return goog.typeOf(G__17241);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._reduce["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_reduce.cljs$core$IFn$_invoke$arity$2 = _reduce__2;
_reduce.cljs$core$IFn$_invoke$arity$3 = _reduce__3;
return _reduce;
})()
;


cljs.core.IKVReduce = (function (){var obj17243 = {};
return obj17243;
})();

cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3719__auto__ = coll;
if(and__3719__auto__){
return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else {
return and__3719__auto__;
}
})()){
return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else {
var x__4375__auto__ = (((coll == null))?null:coll);
return (function (){var or__3731__auto__ = (cljs.core._kv_reduce[(function (){var G__17247 = x__4375__auto__;
return goog.typeOf(G__17247);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._kv_reduce["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});


cljs.core.IEquiv = (function (){var obj17249 = {};
return obj17249;
})();

cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3719__auto__ = o;
if(and__3719__auto__){
return o.cljs$core$IEquiv$_equiv$arity$2;
} else {
return and__3719__auto__;
}
})()){
return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else {
var x__4375__auto__ = (((o == null))?null:o);
return (function (){var or__3731__auto__ = (cljs.core._equiv[(function (){var G__17253 = x__4375__auto__;
return goog.typeOf(G__17253);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._equiv["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});


cljs.core.IHash = (function (){var obj17255 = {};
return obj17255;
})();

cljs.core._hash = (function _hash(o){
if((function (){var and__3719__auto__ = o;
if(and__3719__auto__){
return o.cljs$core$IHash$_hash$arity$1;
} else {
return and__3719__auto__;
}
})()){
return o.cljs$core$IHash$_hash$arity$1(o);
} else {
var x__4375__auto__ = (((o == null))?null:o);
return (function (){var or__3731__auto__ = (cljs.core._hash[(function (){var G__17259 = x__4375__auto__;
return goog.typeOf(G__17259);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._hash["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IHash.-hash",o);
}
}
})().call(null,o);
}
});


cljs.core.ISeqable = (function (){var obj17261 = {};
return obj17261;
})();

cljs.core._seq = (function _seq(o){
if((function (){var and__3719__auto__ = o;
if(and__3719__auto__){
return o.cljs$core$ISeqable$_seq$arity$1;
} else {
return and__3719__auto__;
}
})()){
return o.cljs$core$ISeqable$_seq$arity$1(o);
} else {
var x__4375__auto__ = (((o == null))?null:o);
return (function (){var or__3731__auto__ = (cljs.core._seq[(function (){var G__17265 = x__4375__auto__;
return goog.typeOf(G__17265);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._seq["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("ISeqable.-seq",o);
}
}
})().call(null,o);
}
});


cljs.core.ISequential = (function (){var obj17267 = {};
return obj17267;
})();


cljs.core.IList = (function (){var obj17269 = {};
return obj17269;
})();


cljs.core.IRecord = (function (){var obj17271 = {};
return obj17271;
})();


cljs.core.IReversible = (function (){var obj17273 = {};
return obj17273;
})();

cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3719__auto__ = coll;
if(and__3719__auto__){
return coll.cljs$core$IReversible$_rseq$arity$1;
} else {
return and__3719__auto__;
}
})()){
return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else {
var x__4375__auto__ = (((coll == null))?null:coll);
return (function (){var or__3731__auto__ = (cljs.core._rseq[(function (){var G__17277 = x__4375__auto__;
return goog.typeOf(G__17277);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._rseq["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ISorted = (function (){var obj17279 = {};
return obj17279;
})();

cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3719__auto__ = coll;
if(and__3719__auto__){
return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else {
return and__3719__auto__;
}
})()){
return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else {
var x__4375__auto__ = (((coll == null))?null:coll);
return (function (){var or__3731__auto__ = (cljs.core._sorted_seq[(function (){var G__17283 = x__4375__auto__;
return goog.typeOf(G__17283);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._sorted_seq["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});

cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3719__auto__ = coll;
if(and__3719__auto__){
return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else {
return and__3719__auto__;
}
})()){
return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else {
var x__4375__auto__ = (((coll == null))?null:coll);
return (function (){var or__3731__auto__ = (cljs.core._sorted_seq_from[(function (){var G__17287 = x__4375__auto__;
return goog.typeOf(G__17287);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._sorted_seq_from["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});

cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3719__auto__ = coll;
if(and__3719__auto__){
return coll.cljs$core$ISorted$_entry_key$arity$2;
} else {
return and__3719__auto__;
}
})()){
return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else {
var x__4375__auto__ = (((coll == null))?null:coll);
return (function (){var or__3731__auto__ = (cljs.core._entry_key[(function (){var G__17291 = x__4375__auto__;
return goog.typeOf(G__17291);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._entry_key["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});

cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3719__auto__ = coll;
if(and__3719__auto__){
return coll.cljs$core$ISorted$_comparator$arity$1;
} else {
return and__3719__auto__;
}
})()){
return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else {
var x__4375__auto__ = (((coll == null))?null:coll);
return (function (){var or__3731__auto__ = (cljs.core._comparator[(function (){var G__17295 = x__4375__auto__;
return goog.typeOf(G__17295);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._comparator["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IWriter = (function (){var obj17297 = {};
return obj17297;
})();

cljs.core._write = (function _write(writer,s){
if((function (){var and__3719__auto__ = writer;
if(and__3719__auto__){
return writer.cljs$core$IWriter$_write$arity$2;
} else {
return and__3719__auto__;
}
})()){
return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else {
var x__4375__auto__ = (((writer == null))?null:writer);
return (function (){var or__3731__auto__ = (cljs.core._write[(function (){var G__17301 = x__4375__auto__;
return goog.typeOf(G__17301);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._write["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});

cljs.core._flush = (function _flush(writer){
if((function (){var and__3719__auto__ = writer;
if(and__3719__auto__){
return writer.cljs$core$IWriter$_flush$arity$1;
} else {
return and__3719__auto__;
}
})()){
return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else {
var x__4375__auto__ = (((writer == null))?null:writer);
return (function (){var or__3731__auto__ = (cljs.core._flush[(function (){var G__17305 = x__4375__auto__;
return goog.typeOf(G__17305);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._flush["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});


cljs.core.IPrintWithWriter = (function (){var obj17307 = {};
return obj17307;
})();

cljs.core._pr_writer = (function _pr_writer(o,writer,opts){
if((function (){var and__3719__auto__ = o;
if(and__3719__auto__){
return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else {
return and__3719__auto__;
}
})()){
return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else {
var x__4375__auto__ = (((o == null))?null:o);
return (function (){var or__3731__auto__ = (cljs.core._pr_writer[(function (){var G__17311 = x__4375__auto__;
return goog.typeOf(G__17311);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._pr_writer["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});


cljs.core.IPending = (function (){var obj17313 = {};
return obj17313;
})();

cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3719__auto__ = d;
if(and__3719__auto__){
return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else {
return and__3719__auto__;
}
})()){
return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else {
var x__4375__auto__ = (((d == null))?null:d);
return (function (){var or__3731__auto__ = (cljs.core._realized_QMARK_[(function (){var G__17317 = x__4375__auto__;
return goog.typeOf(G__17317);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._realized_QMARK_["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IPending.-realized?",d);
}
}
})().call(null,d);
}
});


cljs.core.IWatchable = (function (){var obj17319 = {};
return obj17319;
})();

cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3719__auto__ = this$;
if(and__3719__auto__){
return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else {
return and__3719__auto__;
}
})()){
return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else {
var x__4375__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3731__auto__ = (cljs.core._notify_watches[(function (){var G__17323 = x__4375__auto__;
return goog.typeOf(G__17323);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._notify_watches["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});

cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3719__auto__ = this$;
if(and__3719__auto__){
return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else {
return and__3719__auto__;
}
})()){
return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else {
var x__4375__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3731__auto__ = (cljs.core._add_watch[(function (){var G__17327 = x__4375__auto__;
return goog.typeOf(G__17327);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._add_watch["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});

cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3719__auto__ = this$;
if(and__3719__auto__){
return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else {
return and__3719__auto__;
}
})()){
return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else {
var x__4375__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3731__auto__ = (cljs.core._remove_watch[(function (){var G__17331 = x__4375__auto__;
return goog.typeOf(G__17331);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._remove_watch["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});


cljs.core.IEditableCollection = (function (){var obj17333 = {};
return obj17333;
})();

cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3719__auto__ = coll;
if(and__3719__auto__){
return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else {
return and__3719__auto__;
}
})()){
return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else {
var x__4375__auto__ = (((coll == null))?null:coll);
return (function (){var or__3731__auto__ = (cljs.core._as_transient[(function (){var G__17337 = x__4375__auto__;
return goog.typeOf(G__17337);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._as_transient["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ITransientCollection = (function (){var obj17339 = {};
return obj17339;
})();

cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3719__auto__ = tcoll;
if(and__3719__auto__){
return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else {
return and__3719__auto__;
}
})()){
return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else {
var x__4375__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3731__auto__ = (cljs.core._conj_BANG_[(function (){var G__17343 = x__4375__auto__;
return goog.typeOf(G__17343);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._conj_BANG_["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});

cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3719__auto__ = tcoll;
if(and__3719__auto__){
return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else {
return and__3719__auto__;
}
})()){
return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else {
var x__4375__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3731__auto__ = (cljs.core._persistent_BANG_[(function (){var G__17347 = x__4375__auto__;
return goog.typeOf(G__17347);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._persistent_BANG_["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});


cljs.core.ITransientAssociative = (function (){var obj17349 = {};
return obj17349;
})();

cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3719__auto__ = tcoll;
if(and__3719__auto__){
return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else {
return and__3719__auto__;
}
})()){
return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else {
var x__4375__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3731__auto__ = (cljs.core._assoc_BANG_[(function (){var G__17353 = x__4375__auto__;
return goog.typeOf(G__17353);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._assoc_BANG_["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});


cljs.core.ITransientMap = (function (){var obj17355 = {};
return obj17355;
})();

cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3719__auto__ = tcoll;
if(and__3719__auto__){
return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else {
return and__3719__auto__;
}
})()){
return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else {
var x__4375__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3731__auto__ = (cljs.core._dissoc_BANG_[(function (){var G__17359 = x__4375__auto__;
return goog.typeOf(G__17359);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._dissoc_BANG_["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});


cljs.core.ITransientVector = (function (){var obj17361 = {};
return obj17361;
})();

cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3719__auto__ = tcoll;
if(and__3719__auto__){
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else {
return and__3719__auto__;
}
})()){
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else {
var x__4375__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3731__auto__ = (cljs.core._assoc_n_BANG_[(function (){var G__17365 = x__4375__auto__;
return goog.typeOf(G__17365);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});

cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3719__auto__ = tcoll;
if(and__3719__auto__){
return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else {
return and__3719__auto__;
}
})()){
return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else {
var x__4375__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3731__auto__ = (cljs.core._pop_BANG_[(function (){var G__17369 = x__4375__auto__;
return goog.typeOf(G__17369);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._pop_BANG_["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});


cljs.core.ITransientSet = (function (){var obj17371 = {};
return obj17371;
})();

cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3719__auto__ = tcoll;
if(and__3719__auto__){
return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else {
return and__3719__auto__;
}
})()){
return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else {
var x__4375__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3731__auto__ = (cljs.core._disjoin_BANG_[(function (){var G__17375 = x__4375__auto__;
return goog.typeOf(G__17375);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._disjoin_BANG_["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});


cljs.core.IComparable = (function (){var obj17377 = {};
return obj17377;
})();

cljs.core._compare = (function _compare(x,y){
if((function (){var and__3719__auto__ = x;
if(and__3719__auto__){
return x.cljs$core$IComparable$_compare$arity$2;
} else {
return and__3719__auto__;
}
})()){
return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else {
var x__4375__auto__ = (((x == null))?null:x);
return (function (){var or__3731__auto__ = (cljs.core._compare[(function (){var G__17381 = x__4375__auto__;
return goog.typeOf(G__17381);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._compare["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});


cljs.core.IChunk = (function (){var obj17383 = {};
return obj17383;
})();

cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3719__auto__ = coll;
if(and__3719__auto__){
return coll.cljs$core$IChunk$_drop_first$arity$1;
} else {
return and__3719__auto__;
}
})()){
return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else {
var x__4375__auto__ = (((coll == null))?null:coll);
return (function (){var or__3731__auto__ = (cljs.core._drop_first[(function (){var G__17387 = x__4375__auto__;
return goog.typeOf(G__17387);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._drop_first["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IChunkedSeq = (function (){var obj17389 = {};
return obj17389;
})();

cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3719__auto__ = coll;
if(and__3719__auto__){
return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else {
return and__3719__auto__;
}
})()){
return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else {
var x__4375__auto__ = (((coll == null))?null:coll);
return (function (){var or__3731__auto__ = (cljs.core._chunked_first[(function (){var G__17393 = x__4375__auto__;
return goog.typeOf(G__17393);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._chunked_first["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});

cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3719__auto__ = coll;
if(and__3719__auto__){
return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else {
return and__3719__auto__;
}
})()){
return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else {
var x__4375__auto__ = (((coll == null))?null:coll);
return (function (){var or__3731__auto__ = (cljs.core._chunked_rest[(function (){var G__17397 = x__4375__auto__;
return goog.typeOf(G__17397);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._chunked_rest["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IChunkedNext = (function (){var obj17399 = {};
return obj17399;
})();

cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3719__auto__ = coll;
if(and__3719__auto__){
return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else {
return and__3719__auto__;
}
})()){
return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else {
var x__4375__auto__ = (((coll == null))?null:coll);
return (function (){var or__3731__auto__ = (cljs.core._chunked_next[(function (){var G__17403 = x__4375__auto__;
return goog.typeOf(G__17403);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._chunked_next["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});


cljs.core.INamed = (function (){var obj17405 = {};
return obj17405;
})();

cljs.core._name = (function _name(x){
if((function (){var and__3719__auto__ = x;
if(and__3719__auto__){
return x.cljs$core$INamed$_name$arity$1;
} else {
return and__3719__auto__;
}
})()){
return x.cljs$core$INamed$_name$arity$1(x);
} else {
var x__4375__auto__ = (((x == null))?null:x);
return (function (){var or__3731__auto__ = (cljs.core._name[(function (){var G__17409 = x__4375__auto__;
return goog.typeOf(G__17409);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._name["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("INamed.-name",x);
}
}
})().call(null,x);
}
});

cljs.core._namespace = (function _namespace(x){
if((function (){var and__3719__auto__ = x;
if(and__3719__auto__){
return x.cljs$core$INamed$_namespace$arity$1;
} else {
return and__3719__auto__;
}
})()){
return x.cljs$core$INamed$_namespace$arity$1(x);
} else {
var x__4375__auto__ = (((x == null))?null:x);
return (function (){var or__3731__auto__ = (cljs.core._namespace[(function (){var G__17413 = x__4375__auto__;
return goog.typeOf(G__17413);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._namespace["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("INamed.-namespace",x);
}
}
})().call(null,x);
}
});


cljs.core.IAtom = (function (){var obj17415 = {};
return obj17415;
})();


cljs.core.IReset = (function (){var obj17417 = {};
return obj17417;
})();

cljs.core._reset_BANG_ = (function _reset_BANG_(o,new_value){
if((function (){var and__3719__auto__ = o;
if(and__3719__auto__){
return o.cljs$core$IReset$_reset_BANG_$arity$2;
} else {
return and__3719__auto__;
}
})()){
return o.cljs$core$IReset$_reset_BANG_$arity$2(o,new_value);
} else {
var x__4375__auto__ = (((o == null))?null:o);
return (function (){var or__3731__auto__ = (cljs.core._reset_BANG_[(function (){var G__17421 = x__4375__auto__;
return goog.typeOf(G__17421);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._reset_BANG_["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IReset.-reset!",o);
}
}
})().call(null,o,new_value);
}
});


cljs.core.ISwap = (function (){var obj17423 = {};
return obj17423;
})();

cljs.core._swap_BANG_ = (function() {
var _swap_BANG_ = null;
var _swap_BANG___2 = (function (o,f){
if((function (){var and__3719__auto__ = o;
if(and__3719__auto__){
return o.cljs$core$ISwap$_swap_BANG_$arity$2;
} else {
return and__3719__auto__;
}
})()){
return o.cljs$core$ISwap$_swap_BANG_$arity$2(o,f);
} else {
var x__4375__auto__ = (((o == null))?null:o);
return (function (){var or__3731__auto__ = (cljs.core._swap_BANG_[(function (){var G__17433 = x__4375__auto__;
return goog.typeOf(G__17433);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._swap_BANG_["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f);
}
});
var _swap_BANG___3 = (function (o,f,a){
if((function (){var and__3719__auto__ = o;
if(and__3719__auto__){
return o.cljs$core$ISwap$_swap_BANG_$arity$3;
} else {
return and__3719__auto__;
}
})()){
return o.cljs$core$ISwap$_swap_BANG_$arity$3(o,f,a);
} else {
var x__4375__auto__ = (((o == null))?null:o);
return (function (){var or__3731__auto__ = (cljs.core._swap_BANG_[(function (){var G__17435 = x__4375__auto__;
return goog.typeOf(G__17435);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._swap_BANG_["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a);
}
});
var _swap_BANG___4 = (function (o,f,a,b){
if((function (){var and__3719__auto__ = o;
if(and__3719__auto__){
return o.cljs$core$ISwap$_swap_BANG_$arity$4;
} else {
return and__3719__auto__;
}
})()){
return o.cljs$core$ISwap$_swap_BANG_$arity$4(o,f,a,b);
} else {
var x__4375__auto__ = (((o == null))?null:o);
return (function (){var or__3731__auto__ = (cljs.core._swap_BANG_[(function (){var G__17437 = x__4375__auto__;
return goog.typeOf(G__17437);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._swap_BANG_["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a,b);
}
});
var _swap_BANG___5 = (function (o,f,a,b,xs){
if((function (){var and__3719__auto__ = o;
if(and__3719__auto__){
return o.cljs$core$ISwap$_swap_BANG_$arity$5;
} else {
return and__3719__auto__;
}
})()){
return o.cljs$core$ISwap$_swap_BANG_$arity$5(o,f,a,b,xs);
} else {
var x__4375__auto__ = (((o == null))?null:o);
return (function (){var or__3731__auto__ = (cljs.core._swap_BANG_[(function (){var G__17439 = x__4375__auto__;
return goog.typeOf(G__17439);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._swap_BANG_["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a,b,xs);
}
});
_swap_BANG_ = function(o,f,a,b,xs){
switch(arguments.length){
case 2:
return _swap_BANG___2.call(this,o,f);
case 3:
return _swap_BANG___3.call(this,o,f,a);
case 4:
return _swap_BANG___4.call(this,o,f,a,b);
case 5:
return _swap_BANG___5.call(this,o,f,a,b,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = _swap_BANG___2;
_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = _swap_BANG___3;
_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = _swap_BANG___4;
_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = _swap_BANG___5;
return _swap_BANG_;
})()
;


cljs.core.IVolatile = (function (){var obj17441 = {};
return obj17441;
})();

cljs.core._vreset_BANG_ = (function _vreset_BANG_(o,new_value){
if((function (){var and__3719__auto__ = o;
if(and__3719__auto__){
return o.cljs$core$IVolatile$_vreset_BANG_$arity$2;
} else {
return and__3719__auto__;
}
})()){
return o.cljs$core$IVolatile$_vreset_BANG_$arity$2(o,new_value);
} else {
var x__4375__auto__ = (((o == null))?null:o);
return (function (){var or__3731__auto__ = (cljs.core._vreset_BANG_[(function (){var G__17445 = x__4375__auto__;
return goog.typeOf(G__17445);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._vreset_BANG_["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IVolatile.-vreset!",o);
}
}
})().call(null,o,new_value);
}
});


cljs.core.IIterable = (function (){var obj17447 = {};
return obj17447;
})();

cljs.core._iterator = (function _iterator(coll){
if((function (){var and__3719__auto__ = coll;
if(and__3719__auto__){
return coll.cljs$core$IIterable$_iterator$arity$1;
} else {
return and__3719__auto__;
}
})()){
return coll.cljs$core$IIterable$_iterator$arity$1(coll);
} else {
var x__4375__auto__ = (((coll == null))?null:coll);
return (function (){var or__3731__auto__ = (cljs.core._iterator[(function (){var G__17451 = x__4375__auto__;
return goog.typeOf(G__17451);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._iterator["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IIterable.-iterator",coll);
}
}
})().call(null,coll);
}
});


/**
* @constructor
*/
cljs.core.StringBufferWriter = (function (sb){
this.sb = sb;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073741824;
})
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return self__.sb.append(s);
});

cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
});

cljs.core.StringBufferWriter.cljs$lang$type = true;

cljs.core.StringBufferWriter.cljs$lang$ctorStr = "cljs.core/StringBufferWriter";

cljs.core.StringBufferWriter.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/StringBufferWriter");
});

cljs.core.__GT_StringBufferWriter = (function __GT_StringBufferWriter(sb){
return (new cljs.core.StringBufferWriter(sb));
});

/**
* Support so that collections can implement toString without
* loading all the printing machinery.
*/
cljs.core.pr_str_STAR_ = (function pr_str_STAR_(obj){
var sb = (new goog.string.StringBuffer());
var writer = (new cljs.core.StringBufferWriter(sb));
obj.cljs$core$IPrintWithWriter$_pr_writer$arity$3(null,writer,cljs.core.pr_opts());

writer.cljs$core$IWriter$_flush$arity$1(null);

return [cljs.core.str(sb)].join('');
});
cljs.core.int_rotate_left = (function int_rotate_left(x,n){
return ((x << n) | (x >>> (- n)));
});
if((typeof Math.imul !== 'undefined') && (!(((function (){var G__17454 = (4294967295);
var G__17455 = (5);
return (Math.imul.cljs$core$IFn$_invoke$arity$2 ? Math.imul.cljs$core$IFn$_invoke$arity$2(G__17454,G__17455) : Math.imul.call(null,G__17454,G__17455));
})() === (0))))){
cljs.core.imul = (function imul(a,b){
var G__17458 = a;
var G__17459 = b;
return (Math.imul.cljs$core$IFn$_invoke$arity$2 ? Math.imul.cljs$core$IFn$_invoke$arity$2(G__17458,G__17459) : Math.imul.call(null,G__17458,G__17459));
});
} else {
cljs.core.imul = (function imul(a,b){
var ah = ((a >>> (16)) & (65535));
var al = (a & (65535));
var bh = ((b >>> (16)) & (65535));
var bl = (b & (65535));
return (((al * bl) + ((((ah * bl) + (al * bh)) << (16)) >>> (0))) | (0));
});
}
cljs.core.m3_seed = (0);
cljs.core.m3_C1 = (3432918353);
cljs.core.m3_C2 = (461845907);
cljs.core.m3_mix_K1 = (function m3_mix_K1(k1){
return cljs.core.imul(cljs.core.int_rotate_left(cljs.core.imul(k1,cljs.core.m3_C1),(15)),cljs.core.m3_C2);
});
cljs.core.m3_mix_H1 = (function m3_mix_H1(h1,k1){
return (cljs.core.imul(cljs.core.int_rotate_left((h1 ^ k1),(13)),(5)) + (3864292196));
});
cljs.core.m3_fmix = (function m3_fmix(h1,len){
var h1__$1 = h1;
var h1__$2 = (h1__$1 ^ len);
var h1__$3 = (h1__$2 ^ (h1__$2 >>> (16)));
var h1__$4 = cljs.core.imul(h1__$3,(2246822507));
var h1__$5 = (h1__$4 ^ (h1__$4 >>> (13)));
var h1__$6 = cljs.core.imul(h1__$5,(3266489909));
var h1__$7 = (h1__$6 ^ (h1__$6 >>> (16)));
return h1__$7;
});
cljs.core.m3_hash_int = (function m3_hash_int(in$){
if((in$ === (0))){
return in$;
} else {
var k1 = cljs.core.m3_mix_K1(in$);
var h1 = cljs.core.m3_mix_H1(cljs.core.m3_seed,k1);
return cljs.core.m3_fmix(h1,(4));
}
});
cljs.core.m3_hash_unencoded_chars = (function m3_hash_unencoded_chars(in$){
var h1 = (function (){var i = (1);
var h1 = cljs.core.m3_seed;
while(true){
if((i < in$.length)){
var G__17460 = (i + (2));
var G__17461 = cljs.core.m3_mix_H1(h1,cljs.core.m3_mix_K1((in$.charCodeAt((i - (1))) | (in$.charCodeAt(i) << (16)))));
i = G__17460;
h1 = G__17461;
continue;
} else {
return h1;
}
break;
}
})();
var h1__$1 = ((((in$.length & (1)) === (1)))?(h1 ^ cljs.core.m3_mix_K1(in$.charCodeAt((in$.length - (1))))):h1);
return cljs.core.m3_fmix(h1__$1,cljs.core.imul((2),in$.length));
});



cljs.core.string_hash_cache = (function (){var obj17463 = {};
return obj17463;
})();
cljs.core.string_hash_cache_count = (0);
cljs.core.hash_string_STAR_ = (function hash_string_STAR_(s){
if(!((s == null))){
var len = s.length;
if((len > (0))){
var i = (0);
var hash = (0);
while(true){
if((i < len)){
var G__17464 = (i + (1));
var G__17465 = (cljs.core.imul((31),hash) + s.charCodeAt(i));
i = G__17464;
hash = G__17465;
continue;
} else {
return hash;
}
break;
}
} else {
return (0);
}
} else {
return (0);
}
});
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h = cljs.core.hash_string_STAR_(k);
(cljs.core.string_hash_cache[k] = h);

cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + (1));

return h;
});
cljs.core.hash_string = (function hash_string(k){
if((cljs.core.string_hash_cache_count > (255))){
cljs.core.string_hash_cache = (function (){var obj17469 = {};
return obj17469;
})();

cljs.core.string_hash_cache_count = (0);
} else {
}

var h = (cljs.core.string_hash_cache[k]);
if(typeof h === 'number'){
return h;
} else {
return cljs.core.add_to_string_hash_cache(k);
}
});
cljs.core.hash = (function hash(o){
if((function (){var G__17472 = o;
if(G__17472){
var bit__4405__auto__ = (G__17472.cljs$lang$protocol_mask$partition0$ & (4194304));
if((bit__4405__auto__) || (G__17472.cljs$core$IHash$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return o.cljs$core$IHash$_hash$arity$1(null);
} else {
if(typeof o === 'number'){
return ((function (){var G__17473 = o;
return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__17473) : Math.floor.call(null,G__17473));
})() % (2147483647));
} else {
if(o === true){
return (1);
} else {
if(o === false){
return (0);
} else {
if(typeof o === 'string'){
return cljs.core.m3_hash_int(cljs.core.hash_string(o));
} else {
if((o instanceof Date)){
return o.valueOf();
} else {
if((o == null)){
return (0);
} else {
return cljs.core._hash(o);

}
}
}
}
}
}
}
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + (2654435769)) + (seed << (6))) + (seed >> (2))));
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
return (x instanceof cljs.core.Symbol);
});
cljs.core.hash_symbol = (function hash_symbol(sym){
return cljs.core.hash_combine(cljs.core.m3_hash_unencoded_chars(sym.name),cljs.core.hash_string(sym.ns));
});
cljs.core.compare_symbols = (function compare_symbols(a,b){
if((a.str === b.str)){
return (0);
} else {
if(cljs.core.truth_((function (){var and__3719__auto__ = cljs.core.not(a.ns);
if(and__3719__auto__){
return b.ns;
} else {
return and__3719__auto__;
}
})())){
return (-1);
} else {
if(cljs.core.truth_(a.ns)){
if(cljs.core.not(b.ns)){
return (1);
} else {
var nsc = (function (){var G__17480 = a.ns;
var G__17481 = b.ns;
return goog.array.defaultCompare(G__17480,G__17481);
})();
if(((0) === nsc)){
var G__17482 = a.name;
var G__17483 = b.name;
return goog.array.defaultCompare(G__17482,G__17483);
} else {
return nsc;
}
}
} else {
var G__17484 = a.name;
var G__17485 = b.name;
return goog.array.defaultCompare(G__17484,G__17485);

}
}
}
});

/**
* @constructor
*/
cljs.core.Symbol = (function (ns,name,str,_hash,_meta){
this.ns = ns;
this.name = name;
this.str = str;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 2154168321;
this.cljs$lang$protocol_mask$partition1$ = 4096;
})
cljs.core.Symbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,_){
var self__ = this;
var o__$1 = this;
return cljs.core._write(writer,self__.str);
});

cljs.core.Symbol.prototype.cljs$core$INamed$_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.name;
});

cljs.core.Symbol.prototype.cljs$core$INamed$_namespace$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ns;
});

cljs.core.Symbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (sym){
var self__ = this;
var sym__$1 = this;
var h__4152__auto__ = self__._hash;
if(!((h__4152__auto__ == null))){
return h__4152__auto__;
} else {
var h__4152__auto____$1 = cljs.core.hash_symbol(sym__$1);
self__._hash = h__4152__auto____$1;

return h__4152__auto____$1;
}
});

cljs.core.Symbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.Symbol(self__.ns,self__.name,self__.str,self__._hash,new_meta));
});

cljs.core.Symbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

cljs.core.Symbol.prototype.call = (function() {
var G__17487 = null;
var G__17487__2 = (function (self__,coll){
var self__ = this;
var self____$1 = this;
var sym = self____$1;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,null);
});
var G__17487__3 = (function (self__,coll,not_found){
var self__ = this;
var self____$1 = this;
var sym = self____$1;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,not_found);
});
G__17487 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__17487__2.call(this,self__,coll);
case 3:
return G__17487__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17487.cljs$core$IFn$_invoke$arity$2 = G__17487__2;
G__17487.cljs$core$IFn$_invoke$arity$3 = G__17487__3;
return G__17487;
})()
;

cljs.core.Symbol.prototype.apply = (function (self__,args17486){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args17486)));
});

cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$1 = (function (coll){
var self__ = this;
var sym = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,null);
});

cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$2 = (function (coll,not_found){
var self__ = this;
var sym = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,not_found);
});

cljs.core.Symbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if((other instanceof cljs.core.Symbol)){
return (self__.str === other.str);
} else {
return false;
}
});

cljs.core.Symbol.prototype.toString = (function (){
var self__ = this;
var _ = this;
return self__.str;
});

cljs.core.Symbol.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Symbol.cljs$lang$type = true;

cljs.core.Symbol.cljs$lang$ctorStr = "cljs.core/Symbol";

cljs.core.Symbol.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/Symbol");
});

cljs.core.__GT_Symbol = (function __GT_Symbol(ns,name,str,_hash,_meta){
return (new cljs.core.Symbol(ns,name,str,_hash,_meta));
});

cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if((name instanceof cljs.core.Symbol)){
return name;
} else {
return symbol.cljs$core$IFn$_invoke$arity$2(null,name);
}
});
var symbol__2 = (function (ns,name){
var sym_str = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
return (new cljs.core.Symbol(ns,name,sym_str,null,null));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
symbol.cljs$core$IFn$_invoke$arity$1 = symbol__1;
symbol.cljs$core$IFn$_invoke$arity$2 = symbol__2;
return symbol;
})()
;

/**
* @constructor
*/
cljs.core.Var = (function (val,sym,_meta){
this.val = val;
this.sym = sym;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 163840;
})
cljs.core.Var.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

cljs.core.Var.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.Var.cljs$lang$type = true;

cljs.core.Var.cljs$lang$ctorStr = "cljs.core/Var";

cljs.core.Var.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/Var");
});

cljs.core.__GT_Var = (function __GT_Var(val,sym,_meta){
return (new cljs.core.Var(val,sym,_meta));
});



cljs.core.iterable_QMARK_ = (function iterable_QMARK_(x){
var G__17491 = x;
if(G__17491){
var bit__4412__auto__ = null;
if(cljs.core.truth_((function (){var or__3731__auto__ = bit__4412__auto__;
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
return G__17491.cljs$core$IIterable$;
}
})())){
return true;
} else {
if((!G__17491.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IIterable,G__17491);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IIterable,G__17491);
}
});
cljs.core.clone = (function clone(value){
return cljs.core._clone(value);
});
cljs.core.cloneable_QMARK_ = (function cloneable_QMARK_(value){
var G__17493 = value;
if(G__17493){
var bit__4412__auto__ = (G__17493.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__4412__auto__) || (G__17493.cljs$core$ICloneable$)){
return true;
} else {
if((!G__17493.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__17493);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__17493);
}
});
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll == null)){
return null;
} else {
if((function (){var G__17495 = coll;
if(G__17495){
var bit__4405__auto__ = (G__17495.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4405__auto__) || (G__17495.cljs$core$ISeqable$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$ISeqable$_seq$arity$1(null);
} else {
if(coll instanceof Array){
if((coll.length === (0))){
return null;
} else {
return (new cljs.core.IndexedSeq(coll,(0)));
}
} else {
if(typeof coll === 'string'){
if((coll.length === (0))){
return null;
} else {
return (new cljs.core.IndexedSeq(coll,(0)));
}
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,coll)){
return cljs.core._seq(coll);
} else {
throw (new Error([cljs.core.str(coll),cljs.core.str(" is not ISeqable")].join('')));

}
}
}
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll == null)){
return null;
} else {
if((function (){var G__17497 = coll;
if(G__17497){
var bit__4405__auto__ = (G__17497.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4405__auto__) || (G__17497.cljs$core$ISeq$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$ISeq$_first$arity$1(null);
} else {
var s = cljs.core.seq(coll);
if((s == null)){
return null;
} else {
return cljs.core._first(s);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if(!((coll == null))){
if((function (){var G__17499 = coll;
if(G__17499){
var bit__4405__auto__ = (G__17499.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4405__auto__) || (G__17499.cljs$core$ISeq$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$ISeq$_rest$arity$1(null);
} else {
var s = cljs.core.seq(coll);
if(s){
return cljs.core._rest(s);
} else {
return cljs.core.List.EMPTY;
}
}
} else {
return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll == null)){
return null;
} else {
if((function (){var G__17501 = coll;
if(G__17501){
var bit__4405__auto__ = (G__17501.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__4405__auto__) || (G__17501.cljs$core$INext$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$INext$_next$arity$1(null);
} else {
return cljs.core.seq(cljs.core.rest(coll));
}
}
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
if((x == null)){
return (y == null);
} else {
return ((x === y)) || (cljs.core._equiv(x,y));
}
});
var _EQ___3 = (function() { 
var G__17506__delegate = function (x,y,more){
while(true){
if(_EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
if(cljs.core.next(more)){
var G__17507 = y;
var G__17508 = cljs.core.first(more);
var G__17509 = cljs.core.next(more);
x = G__17507;
y = G__17508;
more = G__17509;
continue;
} else {
return _EQ_.cljs$core$IFn$_invoke$arity$2(y,cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__17506 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17506__delegate.call(this,x,y,more);};
G__17506.cljs$lang$maxFixedArity = 2;
G__17506.cljs$lang$applyTo = (function (arglist__17510){
var x = cljs.core.first(arglist__17510);
arglist__17510 = cljs.core.next(arglist__17510);
var y = cljs.core.first(arglist__17510);
var more = cljs.core.rest(arglist__17510);
return G__17506__delegate(x,y,more);
});
G__17506.cljs$core$IFn$_invoke$arity$variadic = G__17506__delegate;
return G__17506;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$core$IFn$_invoke$arity$1 = _EQ___1;
_EQ_.cljs$core$IFn$_invoke$arity$2 = _EQ___2;
_EQ_.cljs$core$IFn$_invoke$arity$variadic = _EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _EQ_;
})()
;

/**
* @constructor
*/
cljs.core.ES6Iterator = (function (s){
this.s = s;
})
cljs.core.ES6Iterator.prototype.next = (function (){
var self__ = this;
var _ = this;
if(!((self__.s == null))){
var x = cljs.core.first(self__.s);
self__.s = cljs.core.next(self__.s);

return {"done": false, "value": x};
} else {
return {"done": true, "value": null};
}
});

cljs.core.ES6Iterator.cljs$lang$type = true;

cljs.core.ES6Iterator.cljs$lang$ctorStr = "cljs.core/ES6Iterator";

cljs.core.ES6Iterator.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/ES6Iterator");
});

cljs.core.__GT_ES6Iterator = (function __GT_ES6Iterator(s){
return (new cljs.core.ES6Iterator(s));
});

cljs.core.es6_iterator = (function es6_iterator(coll){
return (new cljs.core.ES6Iterator(cljs.core.seq(coll)));
});

/**
* @constructor
*/
cljs.core.ES6IteratorSeq = (function (value,iter,_rest){
this.value = value;
this.iter = iter;
this._rest = _rest;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 8388672;
})
cljs.core.ES6IteratorSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

cljs.core.ES6IteratorSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if((self__._rest == null)){
self__._rest = (function (){var G__17511 = self__.iter;
return (cljs.core.es6_iterator_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.es6_iterator_seq.cljs$core$IFn$_invoke$arity$1(G__17511) : cljs.core.es6_iterator_seq.call(null,G__17511));
})();
} else {
}

return self__._rest;
});

cljs.core.ES6IteratorSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.ES6IteratorSeq.cljs$lang$type = true;

cljs.core.ES6IteratorSeq.cljs$lang$ctorStr = "cljs.core/ES6IteratorSeq";

cljs.core.ES6IteratorSeq.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/ES6IteratorSeq");
});

cljs.core.__GT_ES6IteratorSeq = (function __GT_ES6IteratorSeq(value,iter,_rest){
return (new cljs.core.ES6IteratorSeq(value,iter,_rest));
});

cljs.core.es6_iterator_seq = (function es6_iterator_seq(iter){
var v = iter.next();
if(cljs.core.truth_(v.done)){
return cljs.core.List.EMPTY;
} else {
return (new cljs.core.ES6IteratorSeq(v.value,iter,null));
}
});
/**
* Mix final collection hash for ordered or unordered collections.
* hash-basis is the combined collection hash, count is the number
* of elements included in the basis. Note this is the hash code
* consistent with =, different from .hashCode.
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.mix_collection_hash = (function mix_collection_hash(hash_basis,count){
var h1 = cljs.core.m3_seed;
var k1 = cljs.core.m3_mix_K1(hash_basis);
var h1__$1 = cljs.core.m3_mix_H1(h1,k1);
return cljs.core.m3_fmix(h1__$1,count);
});
/**
* Returns the hash code, consistent with =, for an external ordered
* collection implementing Iterable.
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.hash_ordered_coll = (function hash_ordered_coll(coll){
var n = (0);
var hash_code = (1);
var coll__$1 = cljs.core.seq(coll);
while(true){
if(!((coll__$1 == null))){
var G__17512 = (n + (1));
var G__17513 = ((cljs.core.imul((31),hash_code) + cljs.core.hash(cljs.core.first(coll__$1))) | (0));
var G__17514 = cljs.core.next(coll__$1);
n = G__17512;
hash_code = G__17513;
coll__$1 = G__17514;
continue;
} else {
return cljs.core.mix_collection_hash(hash_code,n);
}
break;
}
});
/**
* Returns the hash code, consistent with =, for an external unordered
* collection implementing Iterable. For maps, the iterator should
* return map entries whose hash is computed as
* (hash-ordered-coll [k v]).
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.hash_unordered_coll = (function hash_unordered_coll(coll){
var n = (0);
var hash_code = (0);
var coll__$1 = cljs.core.seq(coll);
while(true){
if(!((coll__$1 == null))){
var G__17515 = (n + (1));
var G__17516 = ((hash_code + cljs.core.hash(cljs.core.first(coll__$1))) | (0));
var G__17517 = cljs.core.next(coll__$1);
n = G__17515;
hash_code = G__17516;
coll__$1 = G__17517;
continue;
} else {
return cljs.core.mix_collection_hash(hash_code,n);
}
break;
}
});


(cljs.core.ICounted["null"] = true);

(cljs.core._count["null"] = (function (_){
return (0);
}));
Date.prototype.cljs$core$IEquiv$ = true;

Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var o__$1 = this;
return ((other instanceof Date)) && ((o__$1.toString() === other.toString()));
});
(cljs.core.IEquiv["number"] = true);

(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IMeta["function"] = true);

(cljs.core._meta["function"] = (function (_){
return null;
}));

(cljs.core.Fn["function"] = true);
(cljs.core.IHash["_"] = true);

(cljs.core._hash["_"] = (function (o){
var G__17518 = o;
return goog.getUid(G__17518);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + (1));
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.val;
});

cljs.core.Reduced.cljs$lang$type = true;

cljs.core.Reduced.cljs$lang$ctorStr = "cljs.core/Reduced";

cljs.core.Reduced.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/Reduced");
});

cljs.core.__GT_Reduced = (function __GT_Reduced(val){
return (new cljs.core.Reduced(val));
});

/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return (r instanceof cljs.core.Reduced);
});
/**
* If x is already reduced?, returns it, else returns (reduced x)
*/
cljs.core.ensure_reduced = (function ensure_reduced(x){
if(cljs.core.reduced_QMARK_(x)){
return x;
} else {
return cljs.core.reduced(x);
}
});
/**
* If x is reduced?, returns (deref x), else returns x
*/
cljs.core.unreduced = (function unreduced(x){
if(cljs.core.reduced_QMARK_(x)){
var G__17520 = x;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17520) : cljs.core.deref.call(null,G__17520));
} else {
return x;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref(o);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt = cljs.core._count(cicoll);
if((cnt === (0))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var val = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,(0));
var n = (1);
while(true){
if((n < cnt)){
var nval = (function (){var G__17527 = val;
var G__17528 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17527,G__17528) : f.call(null,G__17527,G__17528));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__17533 = nval;
var G__17534 = (n + (1));
val = G__17533;
n = G__17534;
continue;
}
} else {
return val;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt = cljs.core._count(cicoll);
var val__$1 = val;
var n = (0);
while(true){
if((n < cnt)){
var nval = (function (){var G__17529 = val__$1;
var G__17530 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17529,G__17530) : f.call(null,G__17529,G__17530));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__17535 = nval;
var G__17536 = (n + (1));
val__$1 = G__17535;
n = G__17536;
continue;
}
} else {
return val__$1;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt = cljs.core._count(cicoll);
var val__$1 = val;
var n = idx;
while(true){
if((n < cnt)){
var nval = (function (){var G__17531 = val__$1;
var G__17532 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17531,G__17532) : f.call(null,G__17531,G__17532));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__17537 = nval;
var G__17538 = (n + (1));
val__$1 = G__17537;
n = G__17538;
continue;
}
} else {
return val__$1;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ci_reduce.cljs$core$IFn$_invoke$arity$2 = ci_reduce__2;
ci_reduce.cljs$core$IFn$_invoke$arity$3 = ci_reduce__3;
ci_reduce.cljs$core$IFn$_invoke$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt = arr.length;
if((arr.length === (0))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var val = (arr[(0)]);
var n = (1);
while(true){
if((n < cnt)){
var nval = (function (){var G__17545 = val;
var G__17546 = (arr[n]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17545,G__17546) : f.call(null,G__17545,G__17546));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__17551 = nval;
var G__17552 = (n + (1));
val = G__17551;
n = G__17552;
continue;
}
} else {
return val;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt = arr.length;
var val__$1 = val;
var n = (0);
while(true){
if((n < cnt)){
var nval = (function (){var G__17547 = val__$1;
var G__17548 = (arr[n]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17547,G__17548) : f.call(null,G__17547,G__17548));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__17553 = nval;
var G__17554 = (n + (1));
val__$1 = G__17553;
n = G__17554;
continue;
}
} else {
return val__$1;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt = arr.length;
var val__$1 = val;
var n = idx;
while(true){
if((n < cnt)){
var nval = (function (){var G__17549 = val__$1;
var G__17550 = (arr[n]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17549,G__17550) : f.call(null,G__17549,G__17550));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__17555 = nval;
var G__17556 = (n + (1));
val__$1 = G__17555;
n = G__17556;
continue;
}
} else {
return val__$1;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_reduce.cljs$core$IFn$_invoke$arity$2 = array_reduce__2;
array_reduce.cljs$core$IFn$_invoke$arity$3 = array_reduce__3;
array_reduce.cljs$core$IFn$_invoke$arity$4 = array_reduce__4;
return array_reduce;
})()
;



/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__17558 = x;
if(G__17558){
var bit__4412__auto__ = (G__17558.cljs$lang$protocol_mask$partition0$ & (2));
if((bit__4412__auto__) || (G__17558.cljs$core$ICounted$)){
return true;
} else {
if((!G__17558.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,G__17558);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,G__17558);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__17560 = x;
if(G__17560){
var bit__4412__auto__ = (G__17560.cljs$lang$protocol_mask$partition0$ & (16));
if((bit__4412__auto__) || (G__17560.cljs$core$IIndexed$)){
return true;
} else {
if((!G__17560.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,G__17560);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,G__17560);
}
});

/**
* @constructor
*/
cljs.core.IndexedSeqIterator = (function (arr,i){
this.arr = arr;
this.i = i;
})
cljs.core.IndexedSeqIterator.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return (self__.i < self__.arr.length);
});

cljs.core.IndexedSeqIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = (self__.arr[self__.i]);
self__.i = (self__.i + (1));

return ret;
});

cljs.core.IndexedSeqIterator.cljs$lang$type = true;

cljs.core.IndexedSeqIterator.cljs$lang$ctorStr = "cljs.core/IndexedSeqIterator";

cljs.core.IndexedSeqIterator.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/IndexedSeqIterator");
});

cljs.core.__GT_IndexedSeqIterator = (function __GT_IndexedSeqIterator(arr,i){
return (new cljs.core.IndexedSeqIterator(arr,i));
});


/**
* @constructor
*/
cljs.core.IndexedSeq = (function (arr,i){
this.arr = arr;
this.i = i;
this.cljs$lang$protocol_mask$partition0$ = 166199550;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.IndexedSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.IndexedSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
var coll__$1 = this;
var i__$1 = (n + self__.i);
if((i__$1 < self__.arr.length)){
return (self__.arr[i__$1]);
} else {
return null;
}
});

cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var coll__$1 = this;
var i__$1 = (n + self__.i);
if((i__$1 < self__.arr.length)){
return (self__.arr[i__$1]);
} else {
return not_found;
}
});

cljs.core.IndexedSeq.prototype.cljs$core$IIterable$ = true;

cljs.core.IndexedSeq.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.IndexedSeqIterator(self__.arr,self__.i));
});

cljs.core.IndexedSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.IndexedSeq(self__.arr,self__.i));
});

cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(((self__.i + (1)) < self__.arr.length)){
return (new cljs.core.IndexedSeq(self__.arr,(self__.i + (1))));
} else {
return null;
}
});

cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.arr.length - self__.i);
});

cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var c = cljs.core._count(coll__$1);
if((c > (0))){
return (new cljs.core.RSeq(coll__$1,(c - (1)),null));
} else {
return null;
}
});

cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll(coll__$1);
});

cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
var G__17561 = coll__$1;
var G__17562 = other;
return (cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2 ? cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2(G__17561,G__17562) : cljs.core.equiv_sequential.call(null,G__17561,G__17562));
});

cljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.List.EMPTY;
});

cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,(self__.arr[self__.i]),(self__.i + (1)));
});

cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,start,self__.i);
});

cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.arr[self__.i]);
});

cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(((self__.i + (1)) < self__.arr.length)){
return (new cljs.core.IndexedSeq(self__.arr,(self__.i + (1))));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
var G__17563 = o;
var G__17564 = coll__$1;
return (cljs.core.cons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.cons.cljs$core$IFn$_invoke$arity$2(G__17563,G__17564) : cljs.core.cons.call(null,G__17563,G__17564));
});

cljs.core.IndexedSeq.cljs$lang$type = true;

cljs.core.IndexedSeq.cljs$lang$ctorStr = "cljs.core/IndexedSeq";

cljs.core.IndexedSeq.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/IndexedSeq");
});

cljs.core.__GT_IndexedSeq = (function __GT_IndexedSeq(arr,i){
return (new cljs.core.IndexedSeq(arr,i));
});

(cljs.core.IndexedSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4709__auto__ = this;
return cljs.core.es6_iterator(this__4709__auto__);
}));
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.cljs$core$IFn$_invoke$arity$2(prim,(0));
});
var prim_seq__2 = (function (prim,i){
if((i < prim.length)){
return (new cljs.core.IndexedSeq(prim,i));
} else {
return null;
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prim_seq.cljs$core$IFn$_invoke$arity$1 = prim_seq__1;
prim_seq.cljs$core$IFn$_invoke$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(array,(0));
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_seq.cljs$core$IFn$_invoke$arity$1 = array_seq__1;
array_seq.cljs$core$IFn$_invoke$arity$2 = array_seq__2;
return array_seq;
})()
;


/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 32374990;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.RSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.RSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.RSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.RSeq(self__.ci,self__.i,self__.meta));
});

cljs.core.RSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.i > (0))){
return (new cljs.core.RSeq(self__.ci,(self__.i - (1)),null));
} else {
return null;
}
});

cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (self__.i + (1));
});

cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll(coll__$1);
});

cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
var G__17567 = coll__$1;
var G__17568 = other;
return (cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2 ? cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2(G__17567,G__17568) : cljs.core.equiv_sequential.call(null,G__17567,G__17568));
});

cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var G__17569 = cljs.core.List.EMPTY;
var G__17570 = self__.meta;
return (cljs.core.with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.core.with_meta.cljs$core$IFn$_invoke$arity$2(G__17569,G__17570) : cljs.core.with_meta.call(null,G__17569,G__17570));
});

cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (col,f){
var self__ = this;
var col__$1 = this;
var G__17571 = f;
var G__17572 = col__$1;
return (cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2 ? cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(G__17571,G__17572) : cljs.core.seq_reduce.call(null,G__17571,G__17572));
});

cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (col,f,start){
var self__ = this;
var col__$1 = this;
var G__17573 = f;
var G__17574 = start;
var G__17575 = col__$1;
return (cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(G__17573,G__17574,G__17575) : cljs.core.seq_reduce.call(null,G__17573,G__17574,G__17575));
});

cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.ci,self__.i);
});

cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.i > (0))){
return (new cljs.core.RSeq(self__.ci,(self__.i - (1)),null));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.RSeq(self__.ci,self__.i,new_meta));
});

cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
var G__17576 = o;
var G__17577 = coll__$1;
return (cljs.core.cons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.cons.cljs$core$IFn$_invoke$arity$2(G__17576,G__17577) : cljs.core.cons.call(null,G__17576,G__17577));
});

cljs.core.RSeq.cljs$lang$type = true;

cljs.core.RSeq.cljs$lang$ctorStr = "cljs.core/RSeq";

cljs.core.RSeq.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/RSeq");
});

cljs.core.__GT_RSeq = (function __GT_RSeq(ci,i,meta){
return (new cljs.core.RSeq(ci,i,meta));
});

(cljs.core.RSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4709__auto__ = this;
return cljs.core.es6_iterator(this__4709__auto__);
}));
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first(cljs.core.next(coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first(cljs.core.first(coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next(cljs.core.first(coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first(cljs.core.next(coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next(cljs.core.next(coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
var sn = cljs.core.next(s);
if(!((sn == null))){
var G__17578 = sn;
s = G__17578;
continue;
} else {
return cljs.core.first(s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);

(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});
var conj__1 = (function (coll){
return coll;
});
var conj__2 = (function (coll,x){
if(!((coll == null))){
return cljs.core._conj(coll,x);
} else {
return cljs.core._conj(cljs.core.List.EMPTY,x);
}
});
var conj__3 = (function() { 
var G__17583__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__17584 = conj.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__17585 = cljs.core.first(xs);
var G__17586 = cljs.core.next(xs);
coll = G__17584;
x = G__17585;
xs = G__17586;
continue;
} else {
return conj.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__17583 = function (coll,x,var_args){
var xs = null;
if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17583__delegate.call(this,coll,x,xs);};
G__17583.cljs$lang$maxFixedArity = 2;
G__17583.cljs$lang$applyTo = (function (arglist__17587){
var coll = cljs.core.first(arglist__17587);
arglist__17587 = cljs.core.next(arglist__17587);
var x = cljs.core.first(arglist__17587);
var xs = cljs.core.rest(arglist__17587);
return G__17583__delegate(coll,x,xs);
});
G__17583.cljs$core$IFn$_invoke$arity$variadic = G__17583__delegate;
return G__17583;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 0:
return conj__0.call(this);
case 1:
return conj__1.call(this,coll);
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$core$IFn$_invoke$arity$0 = conj__0;
conj.cljs$core$IFn$_invoke$arity$1 = conj__1;
conj.cljs$core$IFn$_invoke$arity$2 = conj__2;
conj.cljs$core$IFn$_invoke$arity$variadic = conj__3.cljs$core$IFn$_invoke$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
if((coll == null)){
return null;
} else {
return cljs.core._empty(coll);
}
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s = cljs.core.seq(coll);
var acc = (0);
while(true){
if(cljs.core.counted_QMARK_(s)){
return (acc + cljs.core._count(s));
} else {
var G__17588 = cljs.core.next(s);
var G__17589 = (acc + (1));
s = G__17588;
acc = G__17589;
continue;
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(!((coll == null))){
if((function (){var G__17591 = coll;
if(G__17591){
var bit__4405__auto__ = (G__17591.cljs$lang$protocol_mask$partition0$ & (2));
if((bit__4405__auto__) || (G__17591.cljs$core$ICounted$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$ICounted$_count$arity$1(null);
} else {
if(coll instanceof Array){
return coll.length;
} else {
if(typeof coll === 'string'){
return coll.length;
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,coll)){
return cljs.core._count(coll);
} else {
return cljs.core.accumulating_seq_count(coll);

}
}
}
}
} else {
return (0);
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
while(true){
if((coll == null)){
throw (new Error("Index out of bounds"));
} else {
if((n === (0))){
if(cljs.core.seq(coll)){
return cljs.core.first(coll);
} else {
throw (new Error("Index out of bounds"));
}
} else {
if(cljs.core.indexed_QMARK_(coll)){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else {
if(cljs.core.seq(coll)){
var G__17592 = cljs.core.next(coll);
var G__17593 = (n - (1));
coll = G__17592;
n = G__17593;
continue;
} else {
throw (new Error("Index out of bounds"));

}
}
}
}
break;
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
while(true){
if((coll == null)){
return not_found;
} else {
if((n === (0))){
if(cljs.core.seq(coll)){
return cljs.core.first(coll);
} else {
return not_found;
}
} else {
if(cljs.core.indexed_QMARK_(coll)){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll,n,not_found);
} else {
if(cljs.core.seq(coll)){
var G__17594 = cljs.core.next(coll);
var G__17595 = (n - (1));
var G__17596 = not_found;
coll = G__17594;
n = G__17595;
not_found = G__17596;
continue;
} else {
return not_found;

}
}
}
}
break;
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
linear_traversal_nth.cljs$core$IFn$_invoke$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$core$IFn$_invoke$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if(!(typeof n === 'number')){
throw (new Error("index argument to nth must be a number"));
} else {
if((coll == null)){
return coll;
} else {
if((function (){var G__17601 = coll;
if(G__17601){
var bit__4405__auto__ = (G__17601.cljs$lang$protocol_mask$partition0$ & (16));
if((bit__4405__auto__) || (G__17601.cljs$core$IIndexed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$IIndexed$_nth$arity$2(null,n);
} else {
if(coll instanceof Array){
if((n < coll.length)){
return (coll[n]);
} else {
return null;
}
} else {
if(typeof coll === 'string'){
if((n < coll.length)){
return (coll[n]);
} else {
return null;
}
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,coll)){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else {
if((function (){var G__17602 = coll;
if(G__17602){
var bit__4412__auto__ = (G__17602.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4412__auto__) || (G__17602.cljs$core$ISeq$)){
return true;
} else {
if((!G__17602.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__17602);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__17602);
}
})()){
return cljs.core.linear_traversal_nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else {
throw (new Error([cljs.core.str("nth not supported on this type "),cljs.core.str(cljs.core.type__GT_str(cljs.core.type(coll)))].join('')));

}
}
}
}
}
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!(typeof n === 'number')){
throw (new Error("index argument to nth must be a number."));
} else {
if((coll == null)){
return not_found;
} else {
if((function (){var G__17603 = coll;
if(G__17603){
var bit__4405__auto__ = (G__17603.cljs$lang$protocol_mask$partition0$ & (16));
if((bit__4405__auto__) || (G__17603.cljs$core$IIndexed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$IIndexed$_nth$arity$3(null,n,not_found);
} else {
if(coll instanceof Array){
if((n < coll.length)){
return (coll[n]);
} else {
return not_found;
}
} else {
if(typeof coll === 'string'){
if((n < coll.length)){
return (coll[n]);
} else {
return not_found;
}
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,coll)){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else {
if((function (){var G__17604 = coll;
if(G__17604){
var bit__4412__auto__ = (G__17604.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4412__auto__) || (G__17604.cljs$core$ISeq$)){
return true;
} else {
if((!G__17604.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__17604);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__17604);
}
})()){
return cljs.core.linear_traversal_nth.cljs$core$IFn$_invoke$arity$3(coll,n,not_found);
} else {
throw (new Error([cljs.core.str("nth not supported on this type "),cljs.core.str(cljs.core.type__GT_str(cljs.core.type(coll)))].join('')));

}
}
}
}
}
}
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth.cljs$core$IFn$_invoke$arity$2 = nth__2;
nth.cljs$core$IFn$_invoke$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the nth rest of coll, coll when n is 0.
*/
cljs.core.nthrest = (function nthrest(coll,n){
var n__$1 = n;
var xs = coll;
while(true){
if(((n__$1 > (0))) && (cljs.core.seq(xs))){
var G__17605 = (n__$1 - (1));
var G__17606 = cljs.core.rest(xs);
n__$1 = G__17605;
xs = G__17606;
continue;
} else {
return xs;
}
break;
}
});
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
if((o == null)){
return null;
} else {
if((function (){var G__17609 = o;
if(G__17609){
var bit__4405__auto__ = (G__17609.cljs$lang$protocol_mask$partition0$ & (256));
if((bit__4405__auto__) || (G__17609.cljs$core$ILookup$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return o.cljs$core$ILookup$_lookup$arity$2(null,k);
} else {
if(o instanceof Array){
if((k < o.length)){
return (o[k]);
} else {
return null;
}
} else {
if(typeof o === 'string'){
if((k < o.length)){
return (o[k]);
} else {
return null;
}
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,o)){
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o,k);
} else {
return null;

}
}
}
}
}
});
var get__3 = (function (o,k,not_found){
if(!((o == null))){
if((function (){var G__17610 = o;
if(G__17610){
var bit__4405__auto__ = (G__17610.cljs$lang$protocol_mask$partition0$ & (256));
if((bit__4405__auto__) || (G__17610.cljs$core$ILookup$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return o.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
} else {
if(o instanceof Array){
if((k < o.length)){
return (o[k]);
} else {
return not_found;
}
} else {
if(typeof o === 'string'){
if((k < o.length)){
return (o[k]);
} else {
return not_found;
}
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,o)){
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(o,k,not_found);
} else {
return not_found;

}
}
}
}
} else {
return not_found;
}
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get.cljs$core$IFn$_invoke$arity$2 = get__2;
get.cljs$core$IFn$_invoke$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
if(!((coll == null))){
return cljs.core._assoc(coll,k,v);
} else {
return cljs.core.PersistentHashMap.fromArrays([k],[v]);
}
});
var assoc__4 = (function() { 
var G__17614__delegate = function (coll,k,v,kvs){
while(true){
var ret = assoc.cljs$core$IFn$_invoke$arity$3(coll,k,v);
if(cljs.core.truth_(kvs)){
var G__17615 = ret;
var G__17616 = cljs.core.first(kvs);
var G__17617 = cljs.core.second(kvs);
var G__17618 = cljs.core.nnext(kvs);
coll = G__17615;
k = G__17616;
v = G__17617;
kvs = G__17618;
continue;
} else {
return ret;
}
break;
}
};
var G__17614 = function (coll,k,v,var_args){
var kvs = null;
if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__17614__delegate.call(this,coll,k,v,kvs);};
G__17614.cljs$lang$maxFixedArity = 3;
G__17614.cljs$lang$applyTo = (function (arglist__17619){
var coll = cljs.core.first(arglist__17619);
arglist__17619 = cljs.core.next(arglist__17619);
var k = cljs.core.first(arglist__17619);
arglist__17619 = cljs.core.next(arglist__17619);
var v = cljs.core.first(arglist__17619);
var kvs = cljs.core.rest(arglist__17619);
return G__17614__delegate(coll,k,v,kvs);
});
G__17614.cljs$core$IFn$_invoke$arity$variadic = G__17614__delegate;
return G__17614;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$core$IFn$_invoke$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$core$IFn$_invoke$arity$3 = assoc__3;
assoc.cljs$core$IFn$_invoke$arity$variadic = assoc__4.cljs$core$IFn$_invoke$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
if((coll == null)){
return null;
} else {
return cljs.core._dissoc(coll,k);
}
});
var dissoc__3 = (function() { 
var G__17622__delegate = function (coll,k,ks){
while(true){
if((coll == null)){
return null;
} else {
var ret = dissoc.cljs$core$IFn$_invoke$arity$2(coll,k);
if(cljs.core.truth_(ks)){
var G__17623 = ret;
var G__17624 = cljs.core.first(ks);
var G__17625 = cljs.core.next(ks);
coll = G__17623;
k = G__17624;
ks = G__17625;
continue;
} else {
return ret;
}
}
break;
}
};
var G__17622 = function (coll,k,var_args){
var ks = null;
if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17622__delegate.call(this,coll,k,ks);};
G__17622.cljs$lang$maxFixedArity = 2;
G__17622.cljs$lang$applyTo = (function (arglist__17626){
var coll = cljs.core.first(arglist__17626);
arglist__17626 = cljs.core.next(arglist__17626);
var k = cljs.core.first(arglist__17626);
var ks = cljs.core.rest(arglist__17626);
return G__17622__delegate(coll,k,ks);
});
G__17622.cljs$core$IFn$_invoke$arity$variadic = G__17622__delegate;
return G__17622;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$core$IFn$_invoke$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$core$IFn$_invoke$arity$1 = dissoc__1;
dissoc.cljs$core$IFn$_invoke$arity$2 = dissoc__2;
dissoc.cljs$core$IFn$_invoke$arity$variadic = dissoc__3.cljs$core$IFn$_invoke$arity$variadic;
return dissoc;
})()
;
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
var or__3731__auto__ = (function (){var G__17631 = f;
return goog.isFunction(G__17631);
})();
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
var G__17632 = f;
if(G__17632){
var bit__4412__auto__ = null;
if(cljs.core.truth_((function (){var or__3731__auto____$1 = bit__4412__auto__;
if(cljs.core.truth_(or__3731__auto____$1)){
return or__3731__auto____$1;
} else {
return G__17632.cljs$core$Fn$;
}
})())){
return true;
} else {
if((!G__17632.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.Fn,G__17632);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.Fn,G__17632);
}
}
});

/**
* @constructor
*/
cljs.core.MetaFn = (function (afn,meta){
this.afn = afn;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.MetaFn.prototype.call = (function() {
var G__18098 = null;
var G__18098__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.afn.cljs$core$IFn$_invoke$arity$0 ? self__.afn.cljs$core$IFn$_invoke$arity$0() : self__.afn.call(null));
});
var G__18098__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__17634 = a;
return (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(G__17634) : self__.afn.call(null,G__17634));
});
var G__18098__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__17635 = a;
var G__17636 = b;
return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(G__17635,G__17636) : self__.afn.call(null,G__17635,G__17636));
});
var G__18098__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__17637 = a;
var G__17638 = b;
var G__17639 = c;
return (self__.afn.cljs$core$IFn$_invoke$arity$3 ? self__.afn.cljs$core$IFn$_invoke$arity$3(G__17637,G__17638,G__17639) : self__.afn.call(null,G__17637,G__17638,G__17639));
});
var G__18098__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__17640 = a;
var G__17641 = b;
var G__17642 = c;
var G__17643 = d;
return (self__.afn.cljs$core$IFn$_invoke$arity$4 ? self__.afn.cljs$core$IFn$_invoke$arity$4(G__17640,G__17641,G__17642,G__17643) : self__.afn.call(null,G__17640,G__17641,G__17642,G__17643));
});
var G__18098__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__17644 = a;
var G__17645 = b;
var G__17646 = c;
var G__17647 = d;
var G__17648 = e;
return (self__.afn.cljs$core$IFn$_invoke$arity$5 ? self__.afn.cljs$core$IFn$_invoke$arity$5(G__17644,G__17645,G__17646,G__17647,G__17648) : self__.afn.call(null,G__17644,G__17645,G__17646,G__17647,G__17648));
});
var G__18098__7 = (function (self__,a,b,c,d,e,f){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__17649 = a;
var G__17650 = b;
var G__17651 = c;
var G__17652 = d;
var G__17653 = e;
var G__17654 = f;
return (self__.afn.cljs$core$IFn$_invoke$arity$6 ? self__.afn.cljs$core$IFn$_invoke$arity$6(G__17649,G__17650,G__17651,G__17652,G__17653,G__17654) : self__.afn.call(null,G__17649,G__17650,G__17651,G__17652,G__17653,G__17654));
});
var G__18098__8 = (function (self__,a,b,c,d,e,f,g){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__17655 = a;
var G__17656 = b;
var G__17657 = c;
var G__17658 = d;
var G__17659 = e;
var G__17660 = f;
var G__17661 = g;
return (self__.afn.cljs$core$IFn$_invoke$arity$7 ? self__.afn.cljs$core$IFn$_invoke$arity$7(G__17655,G__17656,G__17657,G__17658,G__17659,G__17660,G__17661) : self__.afn.call(null,G__17655,G__17656,G__17657,G__17658,G__17659,G__17660,G__17661));
});
var G__18098__9 = (function (self__,a,b,c,d,e,f,g,h){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__17662 = a;
var G__17663 = b;
var G__17664 = c;
var G__17665 = d;
var G__17666 = e;
var G__17667 = f;
var G__17668 = g;
var G__17669 = h;
return (self__.afn.cljs$core$IFn$_invoke$arity$8 ? self__.afn.cljs$core$IFn$_invoke$arity$8(G__17662,G__17663,G__17664,G__17665,G__17666,G__17667,G__17668,G__17669) : self__.afn.call(null,G__17662,G__17663,G__17664,G__17665,G__17666,G__17667,G__17668,G__17669));
});
var G__18098__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__17670 = a;
var G__17671 = b;
var G__17672 = c;
var G__17673 = d;
var G__17674 = e;
var G__17675 = f;
var G__17676 = g;
var G__17677 = h;
var G__17678 = i;
return (self__.afn.cljs$core$IFn$_invoke$arity$9 ? self__.afn.cljs$core$IFn$_invoke$arity$9(G__17670,G__17671,G__17672,G__17673,G__17674,G__17675,G__17676,G__17677,G__17678) : self__.afn.call(null,G__17670,G__17671,G__17672,G__17673,G__17674,G__17675,G__17676,G__17677,G__17678));
});
var G__18098__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__17679 = a;
var G__17680 = b;
var G__17681 = c;
var G__17682 = d;
var G__17683 = e;
var G__17684 = f;
var G__17685 = g;
var G__17686 = h;
var G__17687 = i;
var G__17688 = j;
return (self__.afn.cljs$core$IFn$_invoke$arity$10 ? self__.afn.cljs$core$IFn$_invoke$arity$10(G__17679,G__17680,G__17681,G__17682,G__17683,G__17684,G__17685,G__17686,G__17687,G__17688) : self__.afn.call(null,G__17679,G__17680,G__17681,G__17682,G__17683,G__17684,G__17685,G__17686,G__17687,G__17688));
});
var G__18098__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__17689 = a;
var G__17690 = b;
var G__17691 = c;
var G__17692 = d;
var G__17693 = e;
var G__17694 = f;
var G__17695 = g;
var G__17696 = h;
var G__17697 = i;
var G__17698 = j;
var G__17699 = k;
return (self__.afn.cljs$core$IFn$_invoke$arity$11 ? self__.afn.cljs$core$IFn$_invoke$arity$11(G__17689,G__17690,G__17691,G__17692,G__17693,G__17694,G__17695,G__17696,G__17697,G__17698,G__17699) : self__.afn.call(null,G__17689,G__17690,G__17691,G__17692,G__17693,G__17694,G__17695,G__17696,G__17697,G__17698,G__17699));
});
var G__18098__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__17700 = a;
var G__17701 = b;
var G__17702 = c;
var G__17703 = d;
var G__17704 = e;
var G__17705 = f;
var G__17706 = g;
var G__17707 = h;
var G__17708 = i;
var G__17709 = j;
var G__17710 = k;
var G__17711 = l;
return (self__.afn.cljs$core$IFn$_invoke$arity$12 ? self__.afn.cljs$core$IFn$_invoke$arity$12(G__17700,G__17701,G__17702,G__17703,G__17704,G__17705,G__17706,G__17707,G__17708,G__17709,G__17710,G__17711) : self__.afn.call(null,G__17700,G__17701,G__17702,G__17703,G__17704,G__17705,G__17706,G__17707,G__17708,G__17709,G__17710,G__17711));
});
var G__18098__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__17712 = a;
var G__17713 = b;
var G__17714 = c;
var G__17715 = d;
var G__17716 = e;
var G__17717 = f;
var G__17718 = g;
var G__17719 = h;
var G__17720 = i;
var G__17721 = j;
var G__17722 = k;
var G__17723 = l;
var G__17724 = m;
return (self__.afn.cljs$core$IFn$_invoke$arity$13 ? self__.afn.cljs$core$IFn$_invoke$arity$13(G__17712,G__17713,G__17714,G__17715,G__17716,G__17717,G__17718,G__17719,G__17720,G__17721,G__17722,G__17723,G__17724) : self__.afn.call(null,G__17712,G__17713,G__17714,G__17715,G__17716,G__17717,G__17718,G__17719,G__17720,G__17721,G__17722,G__17723,G__17724));
});
var G__18098__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__17725 = a;
var G__17726 = b;
var G__17727 = c;
var G__17728 = d;
var G__17729 = e;
var G__17730 = f;
var G__17731 = g;
var G__17732 = h;
var G__17733 = i;
var G__17734 = j;
var G__17735 = k;
var G__17736 = l;
var G__17737 = m;
var G__17738 = n;
return (self__.afn.cljs$core$IFn$_invoke$arity$14 ? self__.afn.cljs$core$IFn$_invoke$arity$14(G__17725,G__17726,G__17727,G__17728,G__17729,G__17730,G__17731,G__17732,G__17733,G__17734,G__17735,G__17736,G__17737,G__17738) : self__.afn.call(null,G__17725,G__17726,G__17727,G__17728,G__17729,G__17730,G__17731,G__17732,G__17733,G__17734,G__17735,G__17736,G__17737,G__17738));
});
var G__18098__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__17739 = a;
var G__17740 = b;
var G__17741 = c;
var G__17742 = d;
var G__17743 = e;
var G__17744 = f;
var G__17745 = g;
var G__17746 = h;
var G__17747 = i;
var G__17748 = j;
var G__17749 = k;
var G__17750 = l;
var G__17751 = m;
var G__17752 = n;
var G__17753 = o;
return (self__.afn.cljs$core$IFn$_invoke$arity$15 ? self__.afn.cljs$core$IFn$_invoke$arity$15(G__17739,G__17740,G__17741,G__17742,G__17743,G__17744,G__17745,G__17746,G__17747,G__17748,G__17749,G__17750,G__17751,G__17752,G__17753) : self__.afn.call(null,G__17739,G__17740,G__17741,G__17742,G__17743,G__17744,G__17745,G__17746,G__17747,G__17748,G__17749,G__17750,G__17751,G__17752,G__17753));
});
var G__18098__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__17754 = a;
var G__17755 = b;
var G__17756 = c;
var G__17757 = d;
var G__17758 = e;
var G__17759 = f;
var G__17760 = g;
var G__17761 = h;
var G__17762 = i;
var G__17763 = j;
var G__17764 = k;
var G__17765 = l;
var G__17766 = m;
var G__17767 = n;
var G__17768 = o;
var G__17769 = p;
return (self__.afn.cljs$core$IFn$_invoke$arity$16 ? self__.afn.cljs$core$IFn$_invoke$arity$16(G__17754,G__17755,G__17756,G__17757,G__17758,G__17759,G__17760,G__17761,G__17762,G__17763,G__17764,G__17765,G__17766,G__17767,G__17768,G__17769) : self__.afn.call(null,G__17754,G__17755,G__17756,G__17757,G__17758,G__17759,G__17760,G__17761,G__17762,G__17763,G__17764,G__17765,G__17766,G__17767,G__17768,G__17769));
});
var G__18098__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__17770 = a;
var G__17771 = b;
var G__17772 = c;
var G__17773 = d;
var G__17774 = e;
var G__17775 = f;
var G__17776 = g;
var G__17777 = h;
var G__17778 = i;
var G__17779 = j;
var G__17780 = k;
var G__17781 = l;
var G__17782 = m;
var G__17783 = n;
var G__17784 = o;
var G__17785 = p;
var G__17786 = q;
return (self__.afn.cljs$core$IFn$_invoke$arity$17 ? self__.afn.cljs$core$IFn$_invoke$arity$17(G__17770,G__17771,G__17772,G__17773,G__17774,G__17775,G__17776,G__17777,G__17778,G__17779,G__17780,G__17781,G__17782,G__17783,G__17784,G__17785,G__17786) : self__.afn.call(null,G__17770,G__17771,G__17772,G__17773,G__17774,G__17775,G__17776,G__17777,G__17778,G__17779,G__17780,G__17781,G__17782,G__17783,G__17784,G__17785,G__17786));
});
var G__18098__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__17787 = a;
var G__17788 = b;
var G__17789 = c;
var G__17790 = d;
var G__17791 = e;
var G__17792 = f;
var G__17793 = g;
var G__17794 = h;
var G__17795 = i;
var G__17796 = j;
var G__17797 = k;
var G__17798 = l;
var G__17799 = m;
var G__17800 = n;
var G__17801 = o;
var G__17802 = p;
var G__17803 = q;
var G__17804 = r;
return (self__.afn.cljs$core$IFn$_invoke$arity$18 ? self__.afn.cljs$core$IFn$_invoke$arity$18(G__17787,G__17788,G__17789,G__17790,G__17791,G__17792,G__17793,G__17794,G__17795,G__17796,G__17797,G__17798,G__17799,G__17800,G__17801,G__17802,G__17803,G__17804) : self__.afn.call(null,G__17787,G__17788,G__17789,G__17790,G__17791,G__17792,G__17793,G__17794,G__17795,G__17796,G__17797,G__17798,G__17799,G__17800,G__17801,G__17802,G__17803,G__17804));
});
var G__18098__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__17805 = a;
var G__17806 = b;
var G__17807 = c;
var G__17808 = d;
var G__17809 = e;
var G__17810 = f;
var G__17811 = g;
var G__17812 = h;
var G__17813 = i;
var G__17814 = j;
var G__17815 = k;
var G__17816 = l;
var G__17817 = m;
var G__17818 = n;
var G__17819 = o;
var G__17820 = p;
var G__17821 = q;
var G__17822 = r;
var G__17823 = s;
return (self__.afn.cljs$core$IFn$_invoke$arity$19 ? self__.afn.cljs$core$IFn$_invoke$arity$19(G__17805,G__17806,G__17807,G__17808,G__17809,G__17810,G__17811,G__17812,G__17813,G__17814,G__17815,G__17816,G__17817,G__17818,G__17819,G__17820,G__17821,G__17822,G__17823) : self__.afn.call(null,G__17805,G__17806,G__17807,G__17808,G__17809,G__17810,G__17811,G__17812,G__17813,G__17814,G__17815,G__17816,G__17817,G__17818,G__17819,G__17820,G__17821,G__17822,G__17823));
});
var G__18098__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__17824 = a;
var G__17825 = b;
var G__17826 = c;
var G__17827 = d;
var G__17828 = e;
var G__17829 = f;
var G__17830 = g;
var G__17831 = h;
var G__17832 = i;
var G__17833 = j;
var G__17834 = k;
var G__17835 = l;
var G__17836 = m;
var G__17837 = n;
var G__17838 = o;
var G__17839 = p;
var G__17840 = q;
var G__17841 = r;
var G__17842 = s;
var G__17843 = t;
return (self__.afn.cljs$core$IFn$_invoke$arity$20 ? self__.afn.cljs$core$IFn$_invoke$arity$20(G__17824,G__17825,G__17826,G__17827,G__17828,G__17829,G__17830,G__17831,G__17832,G__17833,G__17834,G__17835,G__17836,G__17837,G__17838,G__17839,G__17840,G__17841,G__17842,G__17843) : self__.afn.call(null,G__17824,G__17825,G__17826,G__17827,G__17828,G__17829,G__17830,G__17831,G__17832,G__17833,G__17834,G__17835,G__17836,G__17837,G__17838,G__17839,G__17840,G__17841,G__17842,G__17843));
});
var G__18098__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__17844 = self__.afn;
var G__17845 = a;
var G__17846 = b;
var G__17847 = c;
var G__17848 = d;
var G__17849 = e;
var G__17850 = f;
var G__17851 = g;
var G__17852 = h;
var G__17853 = i;
var G__17854 = j;
var G__17855 = k;
var G__17856 = l;
var G__17857 = m;
var G__17858 = n;
var G__17859 = o;
var G__17860 = p;
var G__17861 = q;
var G__17862 = r;
var G__17863 = s;
var G__17864 = t;
var G__17865 = rest;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$22 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$22(G__17844,G__17845,G__17846,G__17847,G__17848,G__17849,G__17850,G__17851,G__17852,G__17853,G__17854,G__17855,G__17856,G__17857,G__17858,G__17859,G__17860,G__17861,G__17862,G__17863,G__17864,G__17865) : cljs.core.apply.call(null,G__17844,G__17845,G__17846,G__17847,G__17848,G__17849,G__17850,G__17851,G__17852,G__17853,G__17854,G__17855,G__17856,G__17857,G__17858,G__17859,G__17860,G__17861,G__17862,G__17863,G__17864,G__17865));
});
G__18098 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__18098__1.call(this,self__);
case 2:
return G__18098__2.call(this,self__,a);
case 3:
return G__18098__3.call(this,self__,a,b);
case 4:
return G__18098__4.call(this,self__,a,b,c);
case 5:
return G__18098__5.call(this,self__,a,b,c,d);
case 6:
return G__18098__6.call(this,self__,a,b,c,d,e);
case 7:
return G__18098__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__18098__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__18098__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__18098__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__18098__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__18098__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__18098__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__18098__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__18098__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__18098__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__18098__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__18098__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__18098__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__18098__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__18098__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__18098__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18098.cljs$core$IFn$_invoke$arity$1 = G__18098__1;
G__18098.cljs$core$IFn$_invoke$arity$2 = G__18098__2;
G__18098.cljs$core$IFn$_invoke$arity$3 = G__18098__3;
G__18098.cljs$core$IFn$_invoke$arity$4 = G__18098__4;
G__18098.cljs$core$IFn$_invoke$arity$5 = G__18098__5;
G__18098.cljs$core$IFn$_invoke$arity$6 = G__18098__6;
G__18098.cljs$core$IFn$_invoke$arity$7 = G__18098__7;
G__18098.cljs$core$IFn$_invoke$arity$8 = G__18098__8;
G__18098.cljs$core$IFn$_invoke$arity$9 = G__18098__9;
G__18098.cljs$core$IFn$_invoke$arity$10 = G__18098__10;
G__18098.cljs$core$IFn$_invoke$arity$11 = G__18098__11;
G__18098.cljs$core$IFn$_invoke$arity$12 = G__18098__12;
G__18098.cljs$core$IFn$_invoke$arity$13 = G__18098__13;
G__18098.cljs$core$IFn$_invoke$arity$14 = G__18098__14;
G__18098.cljs$core$IFn$_invoke$arity$15 = G__18098__15;
G__18098.cljs$core$IFn$_invoke$arity$16 = G__18098__16;
G__18098.cljs$core$IFn$_invoke$arity$17 = G__18098__17;
G__18098.cljs$core$IFn$_invoke$arity$18 = G__18098__18;
G__18098.cljs$core$IFn$_invoke$arity$19 = G__18098__19;
G__18098.cljs$core$IFn$_invoke$arity$20 = G__18098__20;
G__18098.cljs$core$IFn$_invoke$arity$21 = G__18098__21;
G__18098.cljs$core$IFn$_invoke$arity$22 = G__18098__22;
return G__18098;
})()
;

cljs.core.MetaFn.prototype.apply = (function (self__,args17633){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args17633)));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$0 ? self__.afn.cljs$core$IFn$_invoke$arity$0() : self__.afn.call(null));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
var G__17866 = a;
return (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(G__17866) : self__.afn.call(null,G__17866));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var _ = this;
var G__17867 = a;
var G__17868 = b;
return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(G__17867,G__17868) : self__.afn.call(null,G__17867,G__17868));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var _ = this;
var G__17869 = a;
var G__17870 = b;
var G__17871 = c;
return (self__.afn.cljs$core$IFn$_invoke$arity$3 ? self__.afn.cljs$core$IFn$_invoke$arity$3(G__17869,G__17870,G__17871) : self__.afn.call(null,G__17869,G__17870,G__17871));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var _ = this;
var G__17872 = a;
var G__17873 = b;
var G__17874 = c;
var G__17875 = d;
return (self__.afn.cljs$core$IFn$_invoke$arity$4 ? self__.afn.cljs$core$IFn$_invoke$arity$4(G__17872,G__17873,G__17874,G__17875) : self__.afn.call(null,G__17872,G__17873,G__17874,G__17875));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var _ = this;
var G__17876 = a;
var G__17877 = b;
var G__17878 = c;
var G__17879 = d;
var G__17880 = e;
return (self__.afn.cljs$core$IFn$_invoke$arity$5 ? self__.afn.cljs$core$IFn$_invoke$arity$5(G__17876,G__17877,G__17878,G__17879,G__17880) : self__.afn.call(null,G__17876,G__17877,G__17878,G__17879,G__17880));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var _ = this;
var G__17881 = a;
var G__17882 = b;
var G__17883 = c;
var G__17884 = d;
var G__17885 = e;
var G__17886 = f;
return (self__.afn.cljs$core$IFn$_invoke$arity$6 ? self__.afn.cljs$core$IFn$_invoke$arity$6(G__17881,G__17882,G__17883,G__17884,G__17885,G__17886) : self__.afn.call(null,G__17881,G__17882,G__17883,G__17884,G__17885,G__17886));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var _ = this;
var G__17887 = a;
var G__17888 = b;
var G__17889 = c;
var G__17890 = d;
var G__17891 = e;
var G__17892 = f;
var G__17893 = g;
return (self__.afn.cljs$core$IFn$_invoke$arity$7 ? self__.afn.cljs$core$IFn$_invoke$arity$7(G__17887,G__17888,G__17889,G__17890,G__17891,G__17892,G__17893) : self__.afn.call(null,G__17887,G__17888,G__17889,G__17890,G__17891,G__17892,G__17893));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var _ = this;
var G__17894 = a;
var G__17895 = b;
var G__17896 = c;
var G__17897 = d;
var G__17898 = e;
var G__17899 = f;
var G__17900 = g;
var G__17901 = h;
return (self__.afn.cljs$core$IFn$_invoke$arity$8 ? self__.afn.cljs$core$IFn$_invoke$arity$8(G__17894,G__17895,G__17896,G__17897,G__17898,G__17899,G__17900,G__17901) : self__.afn.call(null,G__17894,G__17895,G__17896,G__17897,G__17898,G__17899,G__17900,G__17901));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var _ = this;
var G__17902 = a;
var G__17903 = b;
var G__17904 = c;
var G__17905 = d;
var G__17906 = e;
var G__17907 = f;
var G__17908 = g;
var G__17909 = h;
var G__17910 = i;
return (self__.afn.cljs$core$IFn$_invoke$arity$9 ? self__.afn.cljs$core$IFn$_invoke$arity$9(G__17902,G__17903,G__17904,G__17905,G__17906,G__17907,G__17908,G__17909,G__17910) : self__.afn.call(null,G__17902,G__17903,G__17904,G__17905,G__17906,G__17907,G__17908,G__17909,G__17910));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var _ = this;
var G__17911 = a;
var G__17912 = b;
var G__17913 = c;
var G__17914 = d;
var G__17915 = e;
var G__17916 = f;
var G__17917 = g;
var G__17918 = h;
var G__17919 = i;
var G__17920 = j;
return (self__.afn.cljs$core$IFn$_invoke$arity$10 ? self__.afn.cljs$core$IFn$_invoke$arity$10(G__17911,G__17912,G__17913,G__17914,G__17915,G__17916,G__17917,G__17918,G__17919,G__17920) : self__.afn.call(null,G__17911,G__17912,G__17913,G__17914,G__17915,G__17916,G__17917,G__17918,G__17919,G__17920));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var _ = this;
var G__17921 = a;
var G__17922 = b;
var G__17923 = c;
var G__17924 = d;
var G__17925 = e;
var G__17926 = f;
var G__17927 = g;
var G__17928 = h;
var G__17929 = i;
var G__17930 = j;
var G__17931 = k;
return (self__.afn.cljs$core$IFn$_invoke$arity$11 ? self__.afn.cljs$core$IFn$_invoke$arity$11(G__17921,G__17922,G__17923,G__17924,G__17925,G__17926,G__17927,G__17928,G__17929,G__17930,G__17931) : self__.afn.call(null,G__17921,G__17922,G__17923,G__17924,G__17925,G__17926,G__17927,G__17928,G__17929,G__17930,G__17931));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var _ = this;
var G__17932 = a;
var G__17933 = b;
var G__17934 = c;
var G__17935 = d;
var G__17936 = e;
var G__17937 = f;
var G__17938 = g;
var G__17939 = h;
var G__17940 = i;
var G__17941 = j;
var G__17942 = k;
var G__17943 = l;
return (self__.afn.cljs$core$IFn$_invoke$arity$12 ? self__.afn.cljs$core$IFn$_invoke$arity$12(G__17932,G__17933,G__17934,G__17935,G__17936,G__17937,G__17938,G__17939,G__17940,G__17941,G__17942,G__17943) : self__.afn.call(null,G__17932,G__17933,G__17934,G__17935,G__17936,G__17937,G__17938,G__17939,G__17940,G__17941,G__17942,G__17943));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var _ = this;
var G__17944 = a;
var G__17945 = b;
var G__17946 = c;
var G__17947 = d;
var G__17948 = e;
var G__17949 = f;
var G__17950 = g;
var G__17951 = h;
var G__17952 = i;
var G__17953 = j;
var G__17954 = k;
var G__17955 = l;
var G__17956 = m;
return (self__.afn.cljs$core$IFn$_invoke$arity$13 ? self__.afn.cljs$core$IFn$_invoke$arity$13(G__17944,G__17945,G__17946,G__17947,G__17948,G__17949,G__17950,G__17951,G__17952,G__17953,G__17954,G__17955,G__17956) : self__.afn.call(null,G__17944,G__17945,G__17946,G__17947,G__17948,G__17949,G__17950,G__17951,G__17952,G__17953,G__17954,G__17955,G__17956));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var _ = this;
var G__17957 = a;
var G__17958 = b;
var G__17959 = c;
var G__17960 = d;
var G__17961 = e;
var G__17962 = f;
var G__17963 = g;
var G__17964 = h;
var G__17965 = i;
var G__17966 = j;
var G__17967 = k;
var G__17968 = l;
var G__17969 = m;
var G__17970 = n;
return (self__.afn.cljs$core$IFn$_invoke$arity$14 ? self__.afn.cljs$core$IFn$_invoke$arity$14(G__17957,G__17958,G__17959,G__17960,G__17961,G__17962,G__17963,G__17964,G__17965,G__17966,G__17967,G__17968,G__17969,G__17970) : self__.afn.call(null,G__17957,G__17958,G__17959,G__17960,G__17961,G__17962,G__17963,G__17964,G__17965,G__17966,G__17967,G__17968,G__17969,G__17970));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var _ = this;
var G__17971 = a;
var G__17972 = b;
var G__17973 = c;
var G__17974 = d;
var G__17975 = e;
var G__17976 = f;
var G__17977 = g;
var G__17978 = h;
var G__17979 = i;
var G__17980 = j;
var G__17981 = k;
var G__17982 = l;
var G__17983 = m;
var G__17984 = n;
var G__17985 = o;
return (self__.afn.cljs$core$IFn$_invoke$arity$15 ? self__.afn.cljs$core$IFn$_invoke$arity$15(G__17971,G__17972,G__17973,G__17974,G__17975,G__17976,G__17977,G__17978,G__17979,G__17980,G__17981,G__17982,G__17983,G__17984,G__17985) : self__.afn.call(null,G__17971,G__17972,G__17973,G__17974,G__17975,G__17976,G__17977,G__17978,G__17979,G__17980,G__17981,G__17982,G__17983,G__17984,G__17985));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var _ = this;
var G__17986 = a;
var G__17987 = b;
var G__17988 = c;
var G__17989 = d;
var G__17990 = e;
var G__17991 = f;
var G__17992 = g;
var G__17993 = h;
var G__17994 = i;
var G__17995 = j;
var G__17996 = k;
var G__17997 = l;
var G__17998 = m;
var G__17999 = n;
var G__18000 = o;
var G__18001 = p;
return (self__.afn.cljs$core$IFn$_invoke$arity$16 ? self__.afn.cljs$core$IFn$_invoke$arity$16(G__17986,G__17987,G__17988,G__17989,G__17990,G__17991,G__17992,G__17993,G__17994,G__17995,G__17996,G__17997,G__17998,G__17999,G__18000,G__18001) : self__.afn.call(null,G__17986,G__17987,G__17988,G__17989,G__17990,G__17991,G__17992,G__17993,G__17994,G__17995,G__17996,G__17997,G__17998,G__17999,G__18000,G__18001));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var _ = this;
var G__18002 = a;
var G__18003 = b;
var G__18004 = c;
var G__18005 = d;
var G__18006 = e;
var G__18007 = f;
var G__18008 = g;
var G__18009 = h;
var G__18010 = i;
var G__18011 = j;
var G__18012 = k;
var G__18013 = l;
var G__18014 = m;
var G__18015 = n;
var G__18016 = o;
var G__18017 = p;
var G__18018 = q;
return (self__.afn.cljs$core$IFn$_invoke$arity$17 ? self__.afn.cljs$core$IFn$_invoke$arity$17(G__18002,G__18003,G__18004,G__18005,G__18006,G__18007,G__18008,G__18009,G__18010,G__18011,G__18012,G__18013,G__18014,G__18015,G__18016,G__18017,G__18018) : self__.afn.call(null,G__18002,G__18003,G__18004,G__18005,G__18006,G__18007,G__18008,G__18009,G__18010,G__18011,G__18012,G__18013,G__18014,G__18015,G__18016,G__18017,G__18018));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var _ = this;
var G__18019 = a;
var G__18020 = b;
var G__18021 = c;
var G__18022 = d;
var G__18023 = e;
var G__18024 = f;
var G__18025 = g;
var G__18026 = h;
var G__18027 = i;
var G__18028 = j;
var G__18029 = k;
var G__18030 = l;
var G__18031 = m;
var G__18032 = n;
var G__18033 = o;
var G__18034 = p;
var G__18035 = q;
var G__18036 = r;
return (self__.afn.cljs$core$IFn$_invoke$arity$18 ? self__.afn.cljs$core$IFn$_invoke$arity$18(G__18019,G__18020,G__18021,G__18022,G__18023,G__18024,G__18025,G__18026,G__18027,G__18028,G__18029,G__18030,G__18031,G__18032,G__18033,G__18034,G__18035,G__18036) : self__.afn.call(null,G__18019,G__18020,G__18021,G__18022,G__18023,G__18024,G__18025,G__18026,G__18027,G__18028,G__18029,G__18030,G__18031,G__18032,G__18033,G__18034,G__18035,G__18036));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var _ = this;
var G__18037 = a;
var G__18038 = b;
var G__18039 = c;
var G__18040 = d;
var G__18041 = e;
var G__18042 = f;
var G__18043 = g;
var G__18044 = h;
var G__18045 = i;
var G__18046 = j;
var G__18047 = k;
var G__18048 = l;
var G__18049 = m;
var G__18050 = n;
var G__18051 = o;
var G__18052 = p;
var G__18053 = q;
var G__18054 = r;
var G__18055 = s;
return (self__.afn.cljs$core$IFn$_invoke$arity$19 ? self__.afn.cljs$core$IFn$_invoke$arity$19(G__18037,G__18038,G__18039,G__18040,G__18041,G__18042,G__18043,G__18044,G__18045,G__18046,G__18047,G__18048,G__18049,G__18050,G__18051,G__18052,G__18053,G__18054,G__18055) : self__.afn.call(null,G__18037,G__18038,G__18039,G__18040,G__18041,G__18042,G__18043,G__18044,G__18045,G__18046,G__18047,G__18048,G__18049,G__18050,G__18051,G__18052,G__18053,G__18054,G__18055));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var _ = this;
var G__18056 = a;
var G__18057 = b;
var G__18058 = c;
var G__18059 = d;
var G__18060 = e;
var G__18061 = f;
var G__18062 = g;
var G__18063 = h;
var G__18064 = i;
var G__18065 = j;
var G__18066 = k;
var G__18067 = l;
var G__18068 = m;
var G__18069 = n;
var G__18070 = o;
var G__18071 = p;
var G__18072 = q;
var G__18073 = r;
var G__18074 = s;
var G__18075 = t;
return (self__.afn.cljs$core$IFn$_invoke$arity$20 ? self__.afn.cljs$core$IFn$_invoke$arity$20(G__18056,G__18057,G__18058,G__18059,G__18060,G__18061,G__18062,G__18063,G__18064,G__18065,G__18066,G__18067,G__18068,G__18069,G__18070,G__18071,G__18072,G__18073,G__18074,G__18075) : self__.afn.call(null,G__18056,G__18057,G__18058,G__18059,G__18060,G__18061,G__18062,G__18063,G__18064,G__18065,G__18066,G__18067,G__18068,G__18069,G__18070,G__18071,G__18072,G__18073,G__18074,G__18075));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var _ = this;
var G__18076 = self__.afn;
var G__18077 = a;
var G__18078 = b;
var G__18079 = c;
var G__18080 = d;
var G__18081 = e;
var G__18082 = f;
var G__18083 = g;
var G__18084 = h;
var G__18085 = i;
var G__18086 = j;
var G__18087 = k;
var G__18088 = l;
var G__18089 = m;
var G__18090 = n;
var G__18091 = o;
var G__18092 = p;
var G__18093 = q;
var G__18094 = r;
var G__18095 = s;
var G__18096 = t;
var G__18097 = rest;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$22 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$22(G__18076,G__18077,G__18078,G__18079,G__18080,G__18081,G__18082,G__18083,G__18084,G__18085,G__18086,G__18087,G__18088,G__18089,G__18090,G__18091,G__18092,G__18093,G__18094,G__18095,G__18096,G__18097) : cljs.core.apply.call(null,G__18076,G__18077,G__18078,G__18079,G__18080,G__18081,G__18082,G__18083,G__18084,G__18085,G__18086,G__18087,G__18088,G__18089,G__18090,G__18091,G__18092,G__18093,G__18094,G__18095,G__18096,G__18097));
});

cljs.core.MetaFn.prototype.cljs$core$Fn$ = true;

cljs.core.MetaFn.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.MetaFn(self__.afn,new_meta));
});

cljs.core.MetaFn.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

cljs.core.MetaFn.cljs$lang$type = true;

cljs.core.MetaFn.cljs$lang$ctorStr = "cljs.core/MetaFn";

cljs.core.MetaFn.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/MetaFn");
});

cljs.core.__GT_MetaFn = (function __GT_MetaFn(afn,meta){
return (new cljs.core.MetaFn(afn,meta));
});

/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
if((cljs.core.fn_QMARK_(o)) && (!((function (){var G__18102 = o;
if(G__18102){
var bit__4412__auto__ = (G__18102.cljs$lang$protocol_mask$partition0$ & (262144));
if((bit__4412__auto__) || (G__18102.cljs$core$IWithMeta$)){
return true;
} else {
if((!G__18102.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__18102);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__18102);
}
})()))){
return (new cljs.core.MetaFn(o,meta));
} else {
if((o == null)){
return null;
} else {
return cljs.core._with_meta(o,meta);
}
}
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var and__3719__auto__ = !((o == null));
if(and__3719__auto__){
var G__18106 = o;
if(G__18106){
var bit__4412__auto__ = (G__18106.cljs$lang$protocol_mask$partition0$ & (131072));
if((bit__4412__auto__) || (G__18106.cljs$core$IMeta$)){
return true;
} else {
if((!G__18106.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__18106);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__18106);
}
} else {
return and__3719__auto__;
}
})()){
return cljs.core._meta(o);
} else {
return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
if((coll == null)){
return null;
} else {
return cljs.core._peek(coll);
}
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
if((coll == null)){
return null;
} else {
return cljs.core._pop(coll);
}
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
if((coll == null)){
return null;
} else {
return cljs.core._disjoin(coll,k);
}
});
var disj__3 = (function() { 
var G__18109__delegate = function (coll,k,ks){
while(true){
if((coll == null)){
return null;
} else {
var ret = disj.cljs$core$IFn$_invoke$arity$2(coll,k);
if(cljs.core.truth_(ks)){
var G__18110 = ret;
var G__18111 = cljs.core.first(ks);
var G__18112 = cljs.core.next(ks);
coll = G__18110;
k = G__18111;
ks = G__18112;
continue;
} else {
return ret;
}
}
break;
}
};
var G__18109 = function (coll,k,var_args){
var ks = null;
if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18109__delegate.call(this,coll,k,ks);};
G__18109.cljs$lang$maxFixedArity = 2;
G__18109.cljs$lang$applyTo = (function (arglist__18113){
var coll = cljs.core.first(arglist__18113);
arglist__18113 = cljs.core.next(arglist__18113);
var k = cljs.core.first(arglist__18113);
var ks = cljs.core.rest(arglist__18113);
return G__18109__delegate(coll,k,ks);
});
G__18109.cljs$core$IFn$_invoke$arity$variadic = G__18109__delegate;
return G__18109;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$core$IFn$_invoke$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$core$IFn$_invoke$arity$1 = disj__1;
disj.cljs$core$IFn$_invoke$arity$2 = disj__2;
disj.cljs$core$IFn$_invoke$arity$variadic = disj__3.cljs$core$IFn$_invoke$arity$variadic;
return disj;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return ((coll == null)) || (cljs.core.not(cljs.core.seq(coll)));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null)){
return false;
} else {
var G__18115 = x;
if(G__18115){
var bit__4412__auto__ = (G__18115.cljs$lang$protocol_mask$partition0$ & (8));
if((bit__4412__auto__) || (G__18115.cljs$core$ICollection$)){
return true;
} else {
if((!G__18115.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ICollection,G__18115);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ICollection,G__18115);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null)){
return false;
} else {
var G__18117 = x;
if(G__18117){
var bit__4412__auto__ = (G__18117.cljs$lang$protocol_mask$partition0$ & (4096));
if((bit__4412__auto__) || (G__18117.cljs$core$ISet$)){
return true;
} else {
if((!G__18117.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISet,G__18117);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISet,G__18117);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__18119 = x;
if(G__18119){
var bit__4412__auto__ = (G__18119.cljs$lang$protocol_mask$partition0$ & (512));
if((bit__4412__auto__) || (G__18119.cljs$core$IAssociative$)){
return true;
} else {
if((!G__18119.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAssociative,G__18119);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAssociative,G__18119);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__18121 = x;
if(G__18121){
var bit__4412__auto__ = (G__18121.cljs$lang$protocol_mask$partition0$ & (16777216));
if((bit__4412__auto__) || (G__18121.cljs$core$ISequential$)){
return true;
} else {
if((!G__18121.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,G__18121);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,G__18121);
}
});
/**
* Returns true if coll satisfies ISorted
*/
cljs.core.sorted_QMARK_ = (function sorted_QMARK_(x){
var G__18123 = x;
if(G__18123){
var bit__4412__auto__ = (G__18123.cljs$lang$protocol_mask$partition0$ & (268435456));
if((bit__4412__auto__) || (G__18123.cljs$core$ISorted$)){
return true;
} else {
if((!G__18123.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISorted,G__18123);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISorted,G__18123);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__18125 = x;
if(G__18125){
var bit__4412__auto__ = (G__18125.cljs$lang$protocol_mask$partition0$ & (524288));
if((bit__4412__auto__) || (G__18125.cljs$core$IReduce$)){
return true;
} else {
if((!G__18125.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,G__18125);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,G__18125);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null)){
return false;
} else {
var G__18127 = x;
if(G__18127){
var bit__4412__auto__ = (G__18127.cljs$lang$protocol_mask$partition0$ & (1024));
if((bit__4412__auto__) || (G__18127.cljs$core$IMap$)){
return true;
} else {
if((!G__18127.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMap,G__18127);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMap,G__18127);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__18129 = x;
if(G__18129){
var bit__4412__auto__ = (G__18129.cljs$lang$protocol_mask$partition0$ & (16384));
if((bit__4412__auto__) || (G__18129.cljs$core$IVector$)){
return true;
} else {
if((!G__18129.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IVector,G__18129);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IVector,G__18129);
}
});

cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__18131 = x;
if(G__18131){
var bit__4405__auto__ = (G__18131.cljs$lang$protocol_mask$partition1$ & (512));
if((bit__4405__auto__) || (G__18131.cljs$core$IChunkedSeq$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
var obj18137 = {};
return obj18137;
});
var js_obj__1 = (function() { 
var G__18140__delegate = function (keyvals){
var G__18138 = goog.object.create;
var G__18139 = keyvals;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__18138,G__18139) : cljs.core.apply.call(null,G__18138,G__18139));
};
var G__18140 = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__18140__delegate.call(this,keyvals);};
G__18140.cljs$lang$maxFixedArity = 0;
G__18140.cljs$lang$applyTo = (function (arglist__18141){
var keyvals = cljs.core.seq(arglist__18141);
return G__18140__delegate(keyvals);
});
G__18140.cljs$core$IFn$_invoke$arity$variadic = G__18140__delegate;
return G__18140;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$core$IFn$_invoke$arity$0 = js_obj__0;
js_obj.cljs$core$IFn$_invoke$arity$variadic = js_obj__1.cljs$core$IFn$_invoke$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys = [];
var G__18144_18146 = obj;
var G__18145_18147 = ((function (G__18144_18146,keys){
return (function (val,key,obj__$1){
return keys.push(key);
});})(G__18144_18146,keys))
;
goog.object.forEach(G__18144_18146,G__18145_18147);

return keys;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__$1 = i;
var j__$1 = j;
var len__$1 = len;
while(true){
if((len__$1 === (0))){
return to;
} else {
(to[j__$1] = (from[i__$1]));

var G__18148 = (i__$1 + (1));
var G__18149 = (j__$1 + (1));
var G__18150 = (len__$1 - (1));
i__$1 = G__18148;
j__$1 = G__18149;
len__$1 = G__18150;
continue;
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__$1 = (i + (len - (1)));
var j__$1 = (j + (len - (1)));
var len__$1 = len;
while(true){
if((len__$1 === (0))){
return to;
} else {
(to[j__$1] = (from[i__$1]));

var G__18151 = (i__$1 - (1));
var G__18152 = (j__$1 - (1));
var G__18153 = (len__$1 - (1));
i__$1 = G__18151;
j__$1 = G__18152;
len__$1 = G__18153;
continue;
}
break;
}
});
cljs.core.lookup_sentinel = (function (){var obj18155 = {};
return obj18155;
})();
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null)){
return false;
} else {
var G__18157 = s;
if(G__18157){
var bit__4412__auto__ = (G__18157.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4412__auto__) || (G__18157.cljs$core$ISeq$)){
return true;
} else {
if((!G__18157.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__18157);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__18157);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__18159 = s;
if(G__18159){
var bit__4412__auto__ = (G__18159.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4412__auto__) || (G__18159.cljs$core$ISeqable$)){
return true;
} else {
if((!G__18159.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__18159);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__18159);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x)){
return true;
} else {
return false;
}
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3731__auto__ = cljs.core.fn_QMARK_(f);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var G__18163 = f;
if(G__18163){
var bit__4412__auto__ = (G__18163.cljs$lang$protocol_mask$partition0$ & (1));
if((bit__4412__auto__) || (G__18163.cljs$core$IFn$)){
return true;
} else {
if((!G__18163.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IFn,G__18163);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IFn,G__18163);
}
}
});
/**
* Returns true if n is an integer.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
return (typeof n === 'number') && (cljs.core.not((function (){var G__18176 = n;
return isNaN(G__18176);
})())) && (!((n === Infinity))) && (((function (){var G__18177 = n;
return parseFloat(G__18177);
})() === (function (){var G__18178 = n;
var G__18179 = (10);
return parseInt(G__18178,G__18179);
})()));
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return false;
} else {
return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if((!((coll == null))) && (cljs.core.associative_QMARK_(coll)) && (cljs.core.contains_QMARK_(coll,k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,k)], null);
} else {
return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y));
});
var distinct_QMARK___3 = (function() { 
var G__18180__delegate = function (x,y,more){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y))){
var s = cljs.core.PersistentHashSet.fromArray([x,y], true);
var xs = more;
while(true){
var x__$1 = cljs.core.first(xs);
var etc = cljs.core.next(xs);
if(cljs.core.truth_(xs)){
if(cljs.core.contains_QMARK_(s,x__$1)){
return false;
} else {
var G__18181 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,x__$1);
var G__18182 = etc;
s = G__18181;
xs = G__18182;
continue;
}
} else {
return true;
}
break;
}
} else {
return false;
}
};
var G__18180 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18180__delegate.call(this,x,y,more);};
G__18180.cljs$lang$maxFixedArity = 2;
G__18180.cljs$lang$applyTo = (function (arglist__18183){
var x = cljs.core.first(arglist__18183);
arglist__18183 = cljs.core.next(arglist__18183);
var y = cljs.core.first(arglist__18183);
var more = cljs.core.rest(arglist__18183);
return G__18180__delegate(x,y,more);
});
G__18180.cljs$core$IFn$_invoke$arity$variadic = G__18180__delegate;
return G__18180;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$variadic = distinct_QMARK___3.cljs$core$IFn$_invoke$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((x === y)){
return (0);
} else {
if((x == null)){
return (-1);
} else {
if((y == null)){
return (1);
} else {
if((cljs.core.type(x) === cljs.core.type(y))){
if((function (){var G__18187 = x;
if(G__18187){
var bit__4405__auto__ = (G__18187.cljs$lang$protocol_mask$partition1$ & (2048));
if((bit__4405__auto__) || (G__18187.cljs$core$IComparable$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return x.cljs$core$IComparable$_compare$arity$2(null,y);
} else {
var G__18188 = x;
var G__18189 = y;
return goog.array.defaultCompare(G__18188,G__18189);
}
} else {
throw (new Error("compare on non-nil objects of different types"));

}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl = cljs.core.count(xs);
var yl = cljs.core.count(ys);
if((xl < yl)){
return (-1);
} else {
if((xl > yl)){
return (1);
} else {
return compare_indexed.cljs$core$IFn$_invoke$arity$4(xs,ys,xl,(0));

}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d = cljs.core.compare(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(xs,n),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ys,n));
if(((d === (0))) && (((n + (1)) < len))){
var G__18194 = xs;
var G__18195 = ys;
var G__18196 = len;
var G__18197 = (n + (1));
xs = G__18194;
ys = G__18195;
len = G__18196;
n = G__18197;
continue;
} else {
return d;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compare_indexed.cljs$core$IFn$_invoke$arity$2 = compare_indexed__2;
compare_indexed.cljs$core$IFn$_invoke$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,cljs.core.compare)){
return cljs.core.compare;
} else {
return (function (x,y){
var r = (function (){var G__18202 = x;
var G__18203 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__18202,G__18203) : f.call(null,G__18202,G__18203));
})();
if(typeof r === 'number'){
return r;
} else {
if(cljs.core.truth_(r)){
return (-1);
} else {
if(cljs.core.truth_((function (){var G__18204 = y;
var G__18205 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__18204,G__18205) : f.call(null,G__18204,G__18205));
})())){
return (1);
} else {
return (0);
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison function, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq(coll)){
var a = (function (){var G__18211 = coll;
return (cljs.core.to_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.to_array.cljs$core$IFn$_invoke$arity$1(G__18211) : cljs.core.to_array.call(null,G__18211));
})();
var G__18212_18214 = a;
var G__18213_18215 = cljs.core.fn__GT_comparator(comp);
goog.array.stableSort(G__18212_18214,G__18213_18215);

return cljs.core.seq(a);
} else {
return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort.cljs$core$IFn$_invoke$arity$1 = sort__1;
sort.cljs$core$IFn$_invoke$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.cljs$core$IFn$_invoke$arity$3(keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (x,y){
return cljs.core.fn__GT_comparator(comp).call(null,(function (){var G__18221 = x;
return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__18221) : keyfn.call(null,G__18221));
})(),(function (){var G__18222 = y;
return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__18222) : keyfn.call(null,G__18222));
})());
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort_by.cljs$core$IFn$_invoke$arity$2 = sort_by__2;
sort_by.cljs$core$IFn$_invoke$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__4124__auto__ = cljs.core.seq(coll);
if(temp__4124__auto__){
var s = temp__4124__auto__;
var G__18228 = f;
var G__18229 = cljs.core.first(s);
var G__18230 = cljs.core.next(s);
return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(G__18228,G__18229,G__18230) : cljs.core.reduce.call(null,G__18228,G__18229,G__18230));
} else {
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__$1 = val;
var coll__$1 = cljs.core.seq(coll);
while(true){
if(coll__$1){
var nval = (function (){var G__18231 = val__$1;
var G__18232 = cljs.core.first(coll__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__18231,G__18232) : f.call(null,G__18231,G__18232));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__18233 = nval;
var G__18234 = cljs.core.next(coll__$1);
val__$1 = G__18233;
coll__$1 = G__18234;
continue;
}
} else {
return val__$1;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
seq_reduce.cljs$core$IFn$_invoke$arity$2 = seq_reduce__2;
seq_reduce.cljs$core$IFn$_invoke$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){
var a = (function (){var G__18238 = coll;
return (cljs.core.to_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.to_array.cljs$core$IFn$_invoke$arity$1(G__18238) : cljs.core.to_array.call(null,G__18238));
})();
var G__18239_18241 = a;
goog.array.shuffle(G__18239_18241);

var G__18240 = a;
return (cljs.core.vec.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vec.cljs$core$IFn$_invoke$arity$1(G__18240) : cljs.core.vec.call(null,G__18240));
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__18244 = coll;
if(G__18244){
var bit__4405__auto__ = (G__18244.cljs$lang$protocol_mask$partition0$ & (524288));
if((bit__4405__auto__) || (G__18244.cljs$core$IReduce$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$IReduce$_reduce$arity$2(null,f);
} else {
if(coll instanceof Array){
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$2(coll,f);
} else {
if(typeof coll === 'string'){
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$2(coll,f);
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,coll)){
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$2(coll,f);
} else {
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll);

}
}
}
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__18245 = coll;
if(G__18245){
var bit__4405__auto__ = (G__18245.cljs$lang$protocol_mask$partition0$ & (524288));
if((bit__4405__auto__) || (G__18245.cljs$core$IReduce$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$IReduce$_reduce$arity$3(null,f,val);
} else {
if(coll instanceof Array){
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$3(coll,f,val);
} else {
if(typeof coll === 'string'){
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$3(coll,f,val);
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,coll)){
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(coll,f,val);
} else {
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,val,coll);

}
}
}
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reduce.cljs$core$IFn$_invoke$arity$2 = reduce__2;
reduce.cljs$core$IFn$_invoke$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
if(!((coll == null))){
return cljs.core._kv_reduce(coll,f,init);
} else {
return init;
}
});
cljs.core.identity = (function identity(x){
return x;
});
cljs.core.completing = (function() {
var completing = null;
var completing__1 = (function (f){
return completing.cljs$core$IFn$_invoke$arity$2(f,cljs.core.identity);
});
var completing__2 = (function (f,cf){
return (function() {
var G__18254 = null;
var G__18254__0 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__18254__1 = (function (x){
var G__18251 = x;
return (cf.cljs$core$IFn$_invoke$arity$1 ? cf.cljs$core$IFn$_invoke$arity$1(G__18251) : cf.call(null,G__18251));
});
var G__18254__2 = (function (x,y){
var G__18252 = x;
var G__18253 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__18252,G__18253) : f.call(null,G__18252,G__18253));
});
G__18254 = function(x,y){
switch(arguments.length){
case 0:
return G__18254__0.call(this);
case 1:
return G__18254__1.call(this,x);
case 2:
return G__18254__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18254.cljs$core$IFn$_invoke$arity$0 = G__18254__0;
G__18254.cljs$core$IFn$_invoke$arity$1 = G__18254__1;
G__18254.cljs$core$IFn$_invoke$arity$2 = G__18254__2;
return G__18254;
})()
});
completing = function(f,cf){
switch(arguments.length){
case 1:
return completing__1.call(this,f);
case 2:
return completing__2.call(this,f,cf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
completing.cljs$core$IFn$_invoke$arity$1 = completing__1;
completing.cljs$core$IFn$_invoke$arity$2 = completing__2;
return completing;
})()
;
/**
* reduce with a transformation of f (xf). If init is not
* supplied, (f) will be called to produce it. f should be a reducing
* step function that accepts both 1 and 2 arguments, if it accepts
* only 2 you can add the arity-1 with 'completing'. Returns the result
* of applying (the transformed) xf to init and the first item in coll,
* then applying xf to that result and the 2nd item, etc. If coll
* contains no items, returns init and f is not called. Note that
* certain transforms may inject or skip items.
*/
cljs.core.transduce = (function() {
var transduce = null;
var transduce__3 = (function (xform,f,coll){
return transduce.cljs$core$IFn$_invoke$arity$4(xform,f,(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),coll);
});
var transduce__4 = (function (xform,f,init,coll){
var f__$1 = (function (){var G__18261 = f;
return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__18261) : xform.call(null,G__18261));
})();
var ret = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f__$1,init,coll);
var G__18262 = ret;
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__18262) : f__$1.call(null,G__18262));
});
transduce = function(xform,f,init,coll){
switch(arguments.length){
case 3:
return transduce__3.call(this,xform,f,init);
case 4:
return transduce__4.call(this,xform,f,init,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transduce.cljs$core$IFn$_invoke$arity$3 = transduce__3;
transduce.cljs$core$IFn$_invoke$arity$4 = transduce__4;
return transduce;
})()
;
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return (0);
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__18263__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_PLUS_,(x + y),more);
};
var G__18263 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18263__delegate.call(this,x,y,more);};
G__18263.cljs$lang$maxFixedArity = 2;
G__18263.cljs$lang$applyTo = (function (arglist__18264){
var x = cljs.core.first(arglist__18264);
arglist__18264 = cljs.core.next(arglist__18264);
var y = cljs.core.first(arglist__18264);
var more = cljs.core.rest(arglist__18264);
return G__18263__delegate(x,y,more);
});
G__18263.cljs$core$IFn$_invoke$arity$variadic = G__18263__delegate;
return G__18263;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$core$IFn$_invoke$arity$0 = _PLUS___0;
_PLUS_.cljs$core$IFn$_invoke$arity$1 = _PLUS___1;
_PLUS_.cljs$core$IFn$_invoke$arity$2 = _PLUS___2;
_PLUS_.cljs$core$IFn$_invoke$arity$variadic = _PLUS___3.cljs$core$IFn$_invoke$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__18265__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_,(x - y),more);
};
var G__18265 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18265__delegate.call(this,x,y,more);};
G__18265.cljs$lang$maxFixedArity = 2;
G__18265.cljs$lang$applyTo = (function (arglist__18266){
var x = cljs.core.first(arglist__18266);
arglist__18266 = cljs.core.next(arglist__18266);
var y = cljs.core.first(arglist__18266);
var more = cljs.core.rest(arglist__18266);
return G__18265__delegate(x,y,more);
});
G__18265.cljs$core$IFn$_invoke$arity$variadic = G__18265__delegate;
return G__18265;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$core$IFn$_invoke$arity$1 = ___1;
_.cljs$core$IFn$_invoke$arity$2 = ___2;
_.cljs$core$IFn$_invoke$arity$variadic = ___3.cljs$core$IFn$_invoke$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return (1);
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__18267__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_STAR_,(x * y),more);
};
var G__18267 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18267__delegate.call(this,x,y,more);};
G__18267.cljs$lang$maxFixedArity = 2;
G__18267.cljs$lang$applyTo = (function (arglist__18268){
var x = cljs.core.first(arglist__18268);
arglist__18268 = cljs.core.next(arglist__18268);
var y = cljs.core.first(arglist__18268);
var more = cljs.core.rest(arglist__18268);
return G__18267__delegate(x,y,more);
});
G__18267.cljs$core$IFn$_invoke$arity$variadic = G__18267__delegate;
return G__18267;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$core$IFn$_invoke$arity$0 = _STAR___0;
_STAR_.cljs$core$IFn$_invoke$arity$1 = _STAR___1;
_STAR_.cljs$core$IFn$_invoke$arity$2 = _STAR___2;
_STAR_.cljs$core$IFn$_invoke$arity$variadic = _STAR___3.cljs$core$IFn$_invoke$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.cljs$core$IFn$_invoke$arity$2((1),x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__18273__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_SLASH_,_SLASH_.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__18273 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18273__delegate.call(this,x,y,more);};
G__18273.cljs$lang$maxFixedArity = 2;
G__18273.cljs$lang$applyTo = (function (arglist__18274){
var x = cljs.core.first(arglist__18274);
arglist__18274 = cljs.core.next(arglist__18274);
var y = cljs.core.first(arglist__18274);
var more = cljs.core.rest(arglist__18274);
return G__18273__delegate(x,y,more);
});
G__18273.cljs$core$IFn$_invoke$arity$variadic = G__18273__delegate;
return G__18273;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$core$IFn$_invoke$arity$1 = _SLASH___1;
_SLASH_.cljs$core$IFn$_invoke$arity$2 = _SLASH___2;
_SLASH_.cljs$core$IFn$_invoke$arity$variadic = _SLASH___3.cljs$core$IFn$_invoke$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__18275__delegate = function (x,y,more){
while(true){
if((x < y)){
if(cljs.core.next(more)){
var G__18276 = y;
var G__18277 = cljs.core.first(more);
var G__18278 = cljs.core.next(more);
x = G__18276;
y = G__18277;
more = G__18278;
continue;
} else {
return (y < cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__18275 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18275__delegate.call(this,x,y,more);};
G__18275.cljs$lang$maxFixedArity = 2;
G__18275.cljs$lang$applyTo = (function (arglist__18279){
var x = cljs.core.first(arglist__18279);
arglist__18279 = cljs.core.next(arglist__18279);
var y = cljs.core.first(arglist__18279);
var more = cljs.core.rest(arglist__18279);
return G__18275__delegate(x,y,more);
});
G__18275.cljs$core$IFn$_invoke$arity$variadic = G__18275__delegate;
return G__18275;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$core$IFn$_invoke$arity$1 = _LT___1;
_LT_.cljs$core$IFn$_invoke$arity$2 = _LT___2;
_LT_.cljs$core$IFn$_invoke$arity$variadic = _LT___3.cljs$core$IFn$_invoke$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__18280__delegate = function (x,y,more){
while(true){
if((x <= y)){
if(cljs.core.next(more)){
var G__18281 = y;
var G__18282 = cljs.core.first(more);
var G__18283 = cljs.core.next(more);
x = G__18281;
y = G__18282;
more = G__18283;
continue;
} else {
return (y <= cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__18280 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18280__delegate.call(this,x,y,more);};
G__18280.cljs$lang$maxFixedArity = 2;
G__18280.cljs$lang$applyTo = (function (arglist__18284){
var x = cljs.core.first(arglist__18284);
arglist__18284 = cljs.core.next(arglist__18284);
var y = cljs.core.first(arglist__18284);
var more = cljs.core.rest(arglist__18284);
return G__18280__delegate(x,y,more);
});
G__18280.cljs$core$IFn$_invoke$arity$variadic = G__18280__delegate;
return G__18280;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$core$IFn$_invoke$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$core$IFn$_invoke$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = _LT__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__18285__delegate = function (x,y,more){
while(true){
if((x > y)){
if(cljs.core.next(more)){
var G__18286 = y;
var G__18287 = cljs.core.first(more);
var G__18288 = cljs.core.next(more);
x = G__18286;
y = G__18287;
more = G__18288;
continue;
} else {
return (y > cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__18285 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18285__delegate.call(this,x,y,more);};
G__18285.cljs$lang$maxFixedArity = 2;
G__18285.cljs$lang$applyTo = (function (arglist__18289){
var x = cljs.core.first(arglist__18289);
arglist__18289 = cljs.core.next(arglist__18289);
var y = cljs.core.first(arglist__18289);
var more = cljs.core.rest(arglist__18289);
return G__18285__delegate(x,y,more);
});
G__18285.cljs$core$IFn$_invoke$arity$variadic = G__18285__delegate;
return G__18285;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$core$IFn$_invoke$arity$1 = _GT___1;
_GT_.cljs$core$IFn$_invoke$arity$2 = _GT___2;
_GT_.cljs$core$IFn$_invoke$arity$variadic = _GT___3.cljs$core$IFn$_invoke$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__18290__delegate = function (x,y,more){
while(true){
if((x >= y)){
if(cljs.core.next(more)){
var G__18291 = y;
var G__18292 = cljs.core.first(more);
var G__18293 = cljs.core.next(more);
x = G__18291;
y = G__18292;
more = G__18293;
continue;
} else {
return (y >= cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__18290 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18290__delegate.call(this,x,y,more);};
G__18290.cljs$lang$maxFixedArity = 2;
G__18290.cljs$lang$applyTo = (function (arglist__18294){
var x = cljs.core.first(arglist__18294);
arglist__18294 = cljs.core.next(arglist__18294);
var y = cljs.core.first(arglist__18294);
var more = cljs.core.rest(arglist__18294);
return G__18290__delegate(x,y,more);
});
G__18290.cljs$core$IFn$_invoke$arity$variadic = G__18290__delegate;
return G__18290;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$core$IFn$_invoke$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$core$IFn$_invoke$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = _GT__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - (1));
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
var x__4048__auto__ = x;
var y__4049__auto__ = y;
return ((x__4048__auto__ > y__4049__auto__) ? x__4048__auto__ : y__4049__auto__);
});
var max__3 = (function() { 
var G__18295__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(max,(function (){var x__4048__auto__ = x;
var y__4049__auto__ = y;
return ((x__4048__auto__ > y__4049__auto__) ? x__4048__auto__ : y__4049__auto__);
})(),more);
};
var G__18295 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18295__delegate.call(this,x,y,more);};
G__18295.cljs$lang$maxFixedArity = 2;
G__18295.cljs$lang$applyTo = (function (arglist__18296){
var x = cljs.core.first(arglist__18296);
arglist__18296 = cljs.core.next(arglist__18296);
var y = cljs.core.first(arglist__18296);
var more = cljs.core.rest(arglist__18296);
return G__18295__delegate(x,y,more);
});
G__18295.cljs$core$IFn$_invoke$arity$variadic = G__18295__delegate;
return G__18295;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$core$IFn$_invoke$arity$1 = max__1;
max.cljs$core$IFn$_invoke$arity$2 = max__2;
max.cljs$core$IFn$_invoke$arity$variadic = max__3.cljs$core$IFn$_invoke$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
var x__4055__auto__ = x;
var y__4056__auto__ = y;
return ((x__4055__auto__ < y__4056__auto__) ? x__4055__auto__ : y__4056__auto__);
});
var min__3 = (function() { 
var G__18297__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(min,(function (){var x__4055__auto__ = x;
var y__4056__auto__ = y;
return ((x__4055__auto__ < y__4056__auto__) ? x__4055__auto__ : y__4056__auto__);
})(),more);
};
var G__18297 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18297__delegate.call(this,x,y,more);};
G__18297.cljs$lang$maxFixedArity = 2;
G__18297.cljs$lang$applyTo = (function (arglist__18298){
var x = cljs.core.first(arglist__18298);
arglist__18298 = cljs.core.next(arglist__18298);
var y = cljs.core.first(arglist__18298);
var more = cljs.core.rest(arglist__18298);
return G__18297__delegate(x,y,more);
});
G__18297.cljs$core$IFn$_invoke$arity$variadic = G__18297__delegate;
return G__18297;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$core$IFn$_invoke$arity$1 = min__1;
min.cljs$core$IFn$_invoke$arity$2 = min__2;
min.cljs$core$IFn$_invoke$arity$variadic = min__3.cljs$core$IFn$_invoke$arity$variadic;
return min;
})()
;
cljs.core.byte$ = (function byte$(x){
return x;
});
/**
* Coerce to char
*/
cljs.core.char$ = (function char$(x){
if(typeof x === 'number'){
return String.fromCharCode(x);
} else {
if((typeof x === 'string') && ((x.length === (1)))){
return x;
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.core.short$ = (function short$(x){
return x;
});
cljs.core.float$ = (function float$(x){
return x;
});
cljs.core.double$ = (function double$(x){
return x;
});
cljs.core.unchecked_byte = (function unchecked_byte(x){
return x;
});
cljs.core.unchecked_char = (function unchecked_char(x){
return x;
});
cljs.core.unchecked_short = (function unchecked_short(x){
return x;
});
cljs.core.unchecked_float = (function unchecked_float(x){
return x;
});
cljs.core.unchecked_double = (function unchecked_double(x){
return x;
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core.unchecked_add = (function() {
var unchecked_add = null;
var unchecked_add__0 = (function (){
return (0);
});
var unchecked_add__1 = (function (x){
return x;
});
var unchecked_add__2 = (function (x,y){
return (x + y);
});
var unchecked_add__3 = (function() { 
var G__18299__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_add,(x + y),more);
};
var G__18299 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18299__delegate.call(this,x,y,more);};
G__18299.cljs$lang$maxFixedArity = 2;
G__18299.cljs$lang$applyTo = (function (arglist__18300){
var x = cljs.core.first(arglist__18300);
arglist__18300 = cljs.core.next(arglist__18300);
var y = cljs.core.first(arglist__18300);
var more = cljs.core.rest(arglist__18300);
return G__18299__delegate(x,y,more);
});
G__18299.cljs$core$IFn$_invoke$arity$variadic = G__18299__delegate;
return G__18299;
})()
;
unchecked_add = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_add__0.call(this);
case 1:
return unchecked_add__1.call(this,x);
case 2:
return unchecked_add__2.call(this,x,y);
default:
return unchecked_add__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_add.cljs$lang$maxFixedArity = 2;
unchecked_add.cljs$lang$applyTo = unchecked_add__3.cljs$lang$applyTo;
unchecked_add.cljs$core$IFn$_invoke$arity$0 = unchecked_add__0;
unchecked_add.cljs$core$IFn$_invoke$arity$1 = unchecked_add__1;
unchecked_add.cljs$core$IFn$_invoke$arity$2 = unchecked_add__2;
unchecked_add.cljs$core$IFn$_invoke$arity$variadic = unchecked_add__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_add;
})()
;
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core.unchecked_add_int = (function() {
var unchecked_add_int = null;
var unchecked_add_int__0 = (function (){
return (0);
});
var unchecked_add_int__1 = (function (x){
return x;
});
var unchecked_add_int__2 = (function (x,y){
return (x + y);
});
var unchecked_add_int__3 = (function() { 
var G__18301__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_add_int,(x + y),more);
};
var G__18301 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18301__delegate.call(this,x,y,more);};
G__18301.cljs$lang$maxFixedArity = 2;
G__18301.cljs$lang$applyTo = (function (arglist__18302){
var x = cljs.core.first(arglist__18302);
arglist__18302 = cljs.core.next(arglist__18302);
var y = cljs.core.first(arglist__18302);
var more = cljs.core.rest(arglist__18302);
return G__18301__delegate(x,y,more);
});
G__18301.cljs$core$IFn$_invoke$arity$variadic = G__18301__delegate;
return G__18301;
})()
;
unchecked_add_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_add_int__0.call(this);
case 1:
return unchecked_add_int__1.call(this,x);
case 2:
return unchecked_add_int__2.call(this,x,y);
default:
return unchecked_add_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_add_int.cljs$lang$maxFixedArity = 2;
unchecked_add_int.cljs$lang$applyTo = unchecked_add_int__3.cljs$lang$applyTo;
unchecked_add_int.cljs$core$IFn$_invoke$arity$0 = unchecked_add_int__0;
unchecked_add_int.cljs$core$IFn$_invoke$arity$1 = unchecked_add_int__1;
unchecked_add_int.cljs$core$IFn$_invoke$arity$2 = unchecked_add_int__2;
unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_add_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_add_int;
})()
;
cljs.core.unchecked_dec = (function unchecked_dec(x){
return (x - (1));
});
cljs.core.unchecked_dec_int = (function unchecked_dec_int(x){
return (x - (1));
});
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core.unchecked_divide_int = (function() {
var unchecked_divide_int = null;
var unchecked_divide_int__1 = (function (x){
return unchecked_divide_int.cljs$core$IFn$_invoke$arity$2((1),x);
});
var unchecked_divide_int__2 = (function (x,y){
return (x / y);
});
var unchecked_divide_int__3 = (function() { 
var G__18307__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_divide_int,unchecked_divide_int.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__18307 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18307__delegate.call(this,x,y,more);};
G__18307.cljs$lang$maxFixedArity = 2;
G__18307.cljs$lang$applyTo = (function (arglist__18308){
var x = cljs.core.first(arglist__18308);
arglist__18308 = cljs.core.next(arglist__18308);
var y = cljs.core.first(arglist__18308);
var more = cljs.core.rest(arglist__18308);
return G__18307__delegate(x,y,more);
});
G__18307.cljs$core$IFn$_invoke$arity$variadic = G__18307__delegate;
return G__18307;
})()
;
unchecked_divide_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_divide_int__1.call(this,x);
case 2:
return unchecked_divide_int__2.call(this,x,y);
default:
return unchecked_divide_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_divide_int.cljs$lang$maxFixedArity = 2;
unchecked_divide_int.cljs$lang$applyTo = unchecked_divide_int__3.cljs$lang$applyTo;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$1 = unchecked_divide_int__1;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$2 = unchecked_divide_int__2;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_divide_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_divide_int;
})()
;
cljs.core.unchecked_inc = (function unchecked_inc(x){
return (x + (1));
});
cljs.core.unchecked_inc_int = (function unchecked_inc_int(x){
return (x + (1));
});
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core.unchecked_multiply = (function() {
var unchecked_multiply = null;
var unchecked_multiply__0 = (function (){
return (1);
});
var unchecked_multiply__1 = (function (x){
return x;
});
var unchecked_multiply__2 = (function (x,y){
return (x * y);
});
var unchecked_multiply__3 = (function() { 
var G__18309__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_multiply,(x * y),more);
};
var G__18309 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18309__delegate.call(this,x,y,more);};
G__18309.cljs$lang$maxFixedArity = 2;
G__18309.cljs$lang$applyTo = (function (arglist__18310){
var x = cljs.core.first(arglist__18310);
arglist__18310 = cljs.core.next(arglist__18310);
var y = cljs.core.first(arglist__18310);
var more = cljs.core.rest(arglist__18310);
return G__18309__delegate(x,y,more);
});
G__18309.cljs$core$IFn$_invoke$arity$variadic = G__18309__delegate;
return G__18309;
})()
;
unchecked_multiply = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_multiply__0.call(this);
case 1:
return unchecked_multiply__1.call(this,x);
case 2:
return unchecked_multiply__2.call(this,x,y);
default:
return unchecked_multiply__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_multiply.cljs$lang$maxFixedArity = 2;
unchecked_multiply.cljs$lang$applyTo = unchecked_multiply__3.cljs$lang$applyTo;
unchecked_multiply.cljs$core$IFn$_invoke$arity$0 = unchecked_multiply__0;
unchecked_multiply.cljs$core$IFn$_invoke$arity$1 = unchecked_multiply__1;
unchecked_multiply.cljs$core$IFn$_invoke$arity$2 = unchecked_multiply__2;
unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = unchecked_multiply__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_multiply;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core.unchecked_multiply_int = (function() {
var unchecked_multiply_int = null;
var unchecked_multiply_int__0 = (function (){
return (1);
});
var unchecked_multiply_int__1 = (function (x){
return x;
});
var unchecked_multiply_int__2 = (function (x,y){
return (x * y);
});
var unchecked_multiply_int__3 = (function() { 
var G__18311__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_multiply_int,(x * y),more);
};
var G__18311 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18311__delegate.call(this,x,y,more);};
G__18311.cljs$lang$maxFixedArity = 2;
G__18311.cljs$lang$applyTo = (function (arglist__18312){
var x = cljs.core.first(arglist__18312);
arglist__18312 = cljs.core.next(arglist__18312);
var y = cljs.core.first(arglist__18312);
var more = cljs.core.rest(arglist__18312);
return G__18311__delegate(x,y,more);
});
G__18311.cljs$core$IFn$_invoke$arity$variadic = G__18311__delegate;
return G__18311;
})()
;
unchecked_multiply_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_multiply_int__0.call(this);
case 1:
return unchecked_multiply_int__1.call(this,x);
case 2:
return unchecked_multiply_int__2.call(this,x,y);
default:
return unchecked_multiply_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_multiply_int.cljs$lang$maxFixedArity = 2;
unchecked_multiply_int.cljs$lang$applyTo = unchecked_multiply_int__3.cljs$lang$applyTo;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$0 = unchecked_multiply_int__0;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$1 = unchecked_multiply_int__1;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$2 = unchecked_multiply_int__2;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_multiply_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_multiply_int;
})()
;
cljs.core.unchecked_negate = (function unchecked_negate(x){
return (- x);
});
cljs.core.unchecked_negate_int = (function unchecked_negate_int(x){
return (- x);
});
cljs.core.unchecked_remainder_int = (function unchecked_remainder_int(x,n){
var G__18315 = x;
var G__18316 = n;
return (cljs.core.mod.cljs$core$IFn$_invoke$arity$2 ? cljs.core.mod.cljs$core$IFn$_invoke$arity$2(G__18315,G__18316) : cljs.core.mod.call(null,G__18315,G__18316));
});
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core.unchecked_subtract = (function() {
var unchecked_subtract = null;
var unchecked_subtract__1 = (function (x){
return (- x);
});
var unchecked_subtract__2 = (function (x,y){
return (x - y);
});
var unchecked_subtract__3 = (function() { 
var G__18317__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_subtract,(x - y),more);
};
var G__18317 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18317__delegate.call(this,x,y,more);};
G__18317.cljs$lang$maxFixedArity = 2;
G__18317.cljs$lang$applyTo = (function (arglist__18318){
var x = cljs.core.first(arglist__18318);
arglist__18318 = cljs.core.next(arglist__18318);
var y = cljs.core.first(arglist__18318);
var more = cljs.core.rest(arglist__18318);
return G__18317__delegate(x,y,more);
});
G__18317.cljs$core$IFn$_invoke$arity$variadic = G__18317__delegate;
return G__18317;
})()
;
unchecked_subtract = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_subtract__1.call(this,x);
case 2:
return unchecked_subtract__2.call(this,x,y);
default:
return unchecked_subtract__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_subtract.cljs$lang$maxFixedArity = 2;
unchecked_subtract.cljs$lang$applyTo = unchecked_subtract__3.cljs$lang$applyTo;
unchecked_subtract.cljs$core$IFn$_invoke$arity$1 = unchecked_subtract__1;
unchecked_subtract.cljs$core$IFn$_invoke$arity$2 = unchecked_subtract__2;
unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = unchecked_subtract__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_subtract;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core.unchecked_subtract_int = (function() {
var unchecked_subtract_int = null;
var unchecked_subtract_int__1 = (function (x){
return (- x);
});
var unchecked_subtract_int__2 = (function (x,y){
return (x - y);
});
var unchecked_subtract_int__3 = (function() { 
var G__18319__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_subtract_int,(x - y),more);
};
var G__18319 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18319__delegate.call(this,x,y,more);};
G__18319.cljs$lang$maxFixedArity = 2;
G__18319.cljs$lang$applyTo = (function (arglist__18320){
var x = cljs.core.first(arglist__18320);
arglist__18320 = cljs.core.next(arglist__18320);
var y = cljs.core.first(arglist__18320);
var more = cljs.core.rest(arglist__18320);
return G__18319__delegate(x,y,more);
});
G__18319.cljs$core$IFn$_invoke$arity$variadic = G__18319__delegate;
return G__18319;
})()
;
unchecked_subtract_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_subtract_int__1.call(this,x);
case 2:
return unchecked_subtract_int__2.call(this,x,y);
default:
return unchecked_subtract_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_subtract_int.cljs$lang$maxFixedArity = 2;
unchecked_subtract_int.cljs$lang$applyTo = unchecked_subtract_int__3.cljs$lang$applyTo;
unchecked_subtract_int.cljs$core$IFn$_invoke$arity$1 = unchecked_subtract_int__1;
unchecked_subtract_int.cljs$core$IFn$_invoke$arity$2 = unchecked_subtract_int__2;
unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_subtract_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_subtract_int;
})()
;
cljs.core.fix = (function fix(q){
if((q >= (0))){
var G__18323 = q;
return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__18323) : Math.floor.call(null,G__18323));
} else {
var G__18324 = q;
return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(G__18324) : Math.ceil.call(null,G__18324));
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return (x | (0));
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.unchecked_int = (function unchecked_int(x){
return cljs.core.fix(x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix(x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.unchecked_long = (function unchecked_long(x){
return cljs.core.fix(x);
});
cljs.core.booleans = (function booleans(x){
return x;
});
cljs.core.bytes = (function bytes(x){
return x;
});
cljs.core.chars = (function chars(x){
return x;
});
cljs.core.shorts = (function shorts(x){
return x;
});
cljs.core.ints = (function ints(x){
return x;
});
cljs.core.floats = (function floats(x){
return x;
});
cljs.core.doubles = (function doubles(x){
return x;
});
cljs.core.longs = (function longs(x){
return x;
});
/**
* Modulus of num and div with original javascript behavior. i.e. bug for negative numbers
*/
cljs.core.js_mod = (function js_mod(n,d){
return (n % d);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (((n % d) + d) % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem = (n % d);
return cljs.core.fix(((n - rem) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q = cljs.core.quot(n,d);
return (n - (d * q));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* DEPRECATED: Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.unsigned_bit_shift_right = (function unsigned_bit_shift_right(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){
var v__$1 = (v - ((v >> (1)) & (1431655765)));
var v__$2 = ((v__$1 & (858993459)) + ((v__$1 >> (2)) & (858993459)));
return ((((v__$2 + (v__$2 >> (4))) & (252645135)) * (16843009)) >> (24));
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv(x,y);
});
var _EQ__EQ___3 = (function() { 
var G__18329__delegate = function (x,y,more){
while(true){
if(_EQ__EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
if(cljs.core.next(more)){
var G__18330 = y;
var G__18331 = cljs.core.first(more);
var G__18332 = cljs.core.next(more);
x = G__18330;
y = G__18331;
more = G__18332;
continue;
} else {
return _EQ__EQ_.cljs$core$IFn$_invoke$arity$2(y,cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__18329 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18329__delegate.call(this,x,y,more);};
G__18329.cljs$lang$maxFixedArity = 2;
G__18329.cljs$lang$applyTo = (function (arglist__18333){
var x = cljs.core.first(arglist__18333);
arglist__18333 = cljs.core.next(arglist__18333);
var y = cljs.core.first(arglist__18333);
var more = cljs.core.rest(arglist__18333);
return G__18329__delegate(x,y,more);
});
G__18329.cljs$core$IFn$_invoke$arity$variadic = G__18329__delegate;
return G__18329;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = _EQ__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > (0));
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === (0));
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < (0));
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__$1 = n;
var xs = cljs.core.seq(coll);
while(true){
if((xs) && ((n__$1 > (0)))){
var G__18334 = (n__$1 - (1));
var G__18335 = cljs.core.next(xs);
n__$1 = G__18334;
xs = G__18335;
continue;
} else {
return xs;
}
break;
}
});
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if((x == null)){
return "";
} else {
var G__18339 = x;
return goog.string.buildString(G__18339);
}
});
var str__2 = (function() { 
var G__18340__delegate = function (x,ys){
var sb = (new goog.string.StringBuffer(str.cljs$core$IFn$_invoke$arity$1(x)));
var more = ys;
while(true){
if(cljs.core.truth_(more)){
var G__18341 = sb.append(str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(more)));
var G__18342 = cljs.core.next(more);
sb = G__18341;
more = G__18342;
continue;
} else {
return sb.toString();
}
break;
}
};
var G__18340 = function (x,var_args){
var ys = null;
if (arguments.length > 1) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__18340__delegate.call(this,x,ys);};
G__18340.cljs$lang$maxFixedArity = 1;
G__18340.cljs$lang$applyTo = (function (arglist__18343){
var x = cljs.core.first(arglist__18343);
var ys = cljs.core.rest(arglist__18343);
return G__18340__delegate(x,ys);
});
G__18340.cljs$core$IFn$_invoke$arity$variadic = G__18340__delegate;
return G__18340;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$core$IFn$_invoke$arity$0 = str__0;
str.cljs$core$IFn$_invoke$arity$1 = str__1;
str.cljs$core$IFn$_invoke$arity$variadic = str__2.cljs$core$IFn$_invoke$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subs.cljs$core$IFn$_invoke$arity$2 = subs__2;
subs.cljs$core$IFn$_invoke$arity$3 = subs__3;
return subs;
})()
;

/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$(((cljs.core.sequential_QMARK_(y))?(((cljs.core.counted_QMARK_(x)) && (cljs.core.counted_QMARK_(y)) && (!((cljs.core.count(x) === cljs.core.count(y)))))?false:(function (){var xs = cljs.core.seq(x);
var ys = cljs.core.seq(y);
while(true){
if((xs == null)){
return (ys == null);
} else {
if((ys == null)){
return false;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs),cljs.core.first(ys))){
var G__18344 = cljs.core.next(xs);
var G__18345 = cljs.core.next(ys);
xs = G__18344;
ys = G__18345;
continue;
} else {
return false;

}
}
}
break;
}
})()):null));
});
cljs.core.hash_coll = (function hash_coll(coll){
if(cljs.core.seq(coll)){
var res = cljs.core.hash(cljs.core.first(coll));
var s = cljs.core.next(coll);
while(true){
if((s == null)){
return res;
} else {
var G__18346 = cljs.core.hash_combine(res,cljs.core.hash(cljs.core.first(s)));
var G__18347 = cljs.core.next(s);
res = G__18346;
s = G__18347;
continue;
}
break;
}
} else {
return (0);
}
});

cljs.core.hash_imap = (function hash_imap(m){
var h = (0);
var s = cljs.core.seq(m);
while(true){
if(s){
var e = cljs.core.first(s);
var G__18352 = ((h + (cljs.core.hash((function (){var G__18350 = e;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__18350) : cljs.core.key.call(null,G__18350));
})()) ^ cljs.core.hash((function (){var G__18351 = e;
return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__18351) : cljs.core.val.call(null,G__18351));
})()))) % (4503599627370496));
var G__18353 = cljs.core.next(s);
h = G__18352;
s = G__18353;
continue;
} else {
return h;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h = (0);
var s__$1 = cljs.core.seq(s);
while(true){
if(s__$1){
var e = cljs.core.first(s__$1);
var G__18354 = ((h + cljs.core.hash(e)) % (4503599627370496));
var G__18355 = cljs.core.next(s__$1);
h = G__18354;
s__$1 = G__18355;
continue;
} else {
return h;
}
break;
}
});


/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implicit this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var seq__18366_18376 = cljs.core.seq(fn_map);
var chunk__18367_18377 = null;
var count__18368_18378 = (0);
var i__18369_18379 = (0);
while(true){
if((i__18369_18379 < count__18368_18378)){
var vec__18370_18380 = chunk__18367_18377.cljs$core$IIndexed$_nth$arity$2(null,i__18369_18379);
var key_name_18381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18370_18380,(0),null);
var f_18382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18370_18380,(1),null);
var str_name_18383 = (function (){var G__18371 = key_name_18381;
return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__18371) : cljs.core.name.call(null,G__18371));
})();
(obj[str_name_18383] = f_18382);

var G__18384 = seq__18366_18376;
var G__18385 = chunk__18367_18377;
var G__18386 = count__18368_18378;
var G__18387 = (i__18369_18379 + (1));
seq__18366_18376 = G__18384;
chunk__18367_18377 = G__18385;
count__18368_18378 = G__18386;
i__18369_18379 = G__18387;
continue;
} else {
var temp__4126__auto___18388 = cljs.core.seq(seq__18366_18376);
if(temp__4126__auto___18388){
var seq__18366_18389__$1 = temp__4126__auto___18388;
if(cljs.core.chunked_seq_QMARK_(seq__18366_18389__$1)){
var c__4518__auto___18390 = (function (){var G__18372 = seq__18366_18389__$1;
return (cljs.core.chunk_first.cljs$core$IFn$_invoke$arity$1 ? cljs.core.chunk_first.cljs$core$IFn$_invoke$arity$1(G__18372) : cljs.core.chunk_first.call(null,G__18372));
})();
var G__18391 = (function (){var G__18373 = seq__18366_18389__$1;
return (cljs.core.chunk_rest.cljs$core$IFn$_invoke$arity$1 ? cljs.core.chunk_rest.cljs$core$IFn$_invoke$arity$1(G__18373) : cljs.core.chunk_rest.call(null,G__18373));
})();
var G__18392 = c__4518__auto___18390;
var G__18393 = cljs.core.count(c__4518__auto___18390);
var G__18394 = (0);
seq__18366_18376 = G__18391;
chunk__18367_18377 = G__18392;
count__18368_18378 = G__18393;
i__18369_18379 = G__18394;
continue;
} else {
var vec__18374_18395 = cljs.core.first(seq__18366_18389__$1);
var key_name_18396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18374_18395,(0),null);
var f_18397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18374_18395,(1),null);
var str_name_18398 = (function (){var G__18375 = key_name_18396;
return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__18375) : cljs.core.name.call(null,G__18375));
})();
(obj[str_name_18398] = f_18397);

var G__18399 = cljs.core.next(seq__18366_18389__$1);
var G__18400 = null;
var G__18401 = (0);
var G__18402 = (0);
seq__18366_18376 = G__18399;
chunk__18367_18377 = G__18400;
count__18368_18378 = G__18401;
i__18369_18379 = G__18402;
continue;
}
} else {
}
}
break;
}

return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 65937646;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.List.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.List.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.List.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.List(self__.meta,self__.first,self__.rest,self__.count,self__.__hash));
});

cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.count === (1))){
return null;
} else {
return self__.rest;
}
});

cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.count;
});

cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.first;
});

cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._rest(coll__$1);
});

cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4152__auto__ = self__.__hash;
if(!((h__4152__auto__ == null))){
return h__4152__auto__;
} else {
var h__4152__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4152__auto____$1;

return h__4152__auto____$1;
}
});

cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.first;
});

cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.count === (1))){
return cljs.core.List.EMPTY;
} else {
return self__.rest;
}
});

cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.List(meta__$1,self__.first,self__.rest,self__.count,self__.__hash));
});

cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.List(self__.meta,o,coll__$1,(self__.count + (1)),null));
});

cljs.core.List.cljs$lang$type = true;

cljs.core.List.cljs$lang$ctorStr = "cljs.core/List";

cljs.core.List.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/List");
});

cljs.core.__GT_List = (function __GT_List(meta,first,rest,count,__hash){
return (new cljs.core.List(meta,first,rest,count,__hash));
});

(cljs.core.List.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4709__auto__ = this;
return cljs.core.es6_iterator(this__4709__auto__);
}));

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 65937614;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.EmptyList.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.EmptyList.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.EmptyList.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.EmptyList(self__.meta));
});

cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return null;
});

cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (0);
});

cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return null;
});

cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
throw (new Error("Can't pop empty list"));
});

cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (0);
});

cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return null;
});

cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.List.EMPTY;
});

cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return null;
});

cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.EmptyList(meta__$1));
});

cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.List(self__.meta,o,null,(1),null));
});

cljs.core.EmptyList.cljs$lang$type = true;

cljs.core.EmptyList.cljs$lang$ctorStr = "cljs.core/EmptyList";

cljs.core.EmptyList.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/EmptyList");
});

cljs.core.__GT_EmptyList = (function __GT_EmptyList(meta){
return (new cljs.core.EmptyList(meta));
});

cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
(cljs.core.EmptyList.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4709__auto__ = this;
return cljs.core.es6_iterator(this__4709__auto__);
}));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__18404 = coll;
if(G__18404){
var bit__4412__auto__ = (G__18404.cljs$lang$protocol_mask$partition0$ & (134217728));
if((bit__4412__auto__) || (G__18404.cljs$core$IReversible$)){
return true;
} else {
if((!G__18404.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IReversible,G__18404);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IReversible,G__18404);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq(coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
if(cljs.core.reversible_QMARK_(coll)){
return cljs.core.rseq(coll);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (xs){
var arr = ((((xs instanceof cljs.core.IndexedSeq)) && ((xs.i === (0))))?xs.arr:(function (){var arr = [];
var xs__$1 = xs;
while(true){
if(!((xs__$1 == null))){
arr.push(xs__$1.cljs$core$ISeq$_first$arity$1(null));

var G__18405 = xs__$1.cljs$core$INext$_next$arity$1(null);
xs__$1 = G__18405;
continue;
} else {
return arr;
}
break;
}
})());
var i = arr.length;
var r = cljs.core.List.EMPTY;
while(true){
if((i > (0))){
var G__18406 = (i - (1));
var G__18407 = r.cljs$core$ICollection$_conj$arity$2(null,(arr[(i - (1))]));
i = G__18406;
r = G__18407;
continue;
} else {
return r;
}
break;
}
};
var list = function (var_args){
var xs = null;
if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this,xs);};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__18408){
var xs = cljs.core.seq(arglist__18408);
return list__delegate(xs);
});
list.cljs$core$IFn$_invoke$arity$variadic = list__delegate;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 65929452;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Cons.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.Cons.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.Cons.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.Cons(self__.meta,self__.first,self__.rest,self__.__hash));
});

cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.rest == null)){
return null;
} else {
return cljs.core.seq(self__.rest);
}
});

cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4152__auto__ = self__.__hash;
if(!((h__4152__auto__ == null))){
return h__4152__auto__;
} else {
var h__4152__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4152__auto____$1;

return h__4152__auto____$1;
}
});

cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.first;
});

cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.rest == null)){
return cljs.core.List.EMPTY;
} else {
return self__.rest;
}
});

cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.Cons(meta__$1,self__.first,self__.rest,self__.__hash));
});

cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.Cons(null,o,coll__$1,self__.__hash));
});

cljs.core.Cons.cljs$lang$type = true;

cljs.core.Cons.cljs$lang$ctorStr = "cljs.core/Cons";

cljs.core.Cons.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/Cons");
});

cljs.core.__GT_Cons = (function __GT_Cons(meta,first,rest,__hash){
return (new cljs.core.Cons(meta,first,rest,__hash));
});

(cljs.core.Cons.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4709__auto__ = this;
return cljs.core.es6_iterator(this__4709__auto__);
}));
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3731__auto__ = (coll == null);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var G__18412 = coll;
if(G__18412){
var bit__4405__auto__ = (G__18412.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4405__auto__) || (G__18412.cljs$core$ISeq$)){
return true;
} else {
return false;
}
} else {
return false;
}
}
})()){
return (new cljs.core.Cons(null,x,coll,null));
} else {
return (new cljs.core.Cons(null,x,cljs.core.seq(coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__18414 = x;
if(G__18414){
var bit__4412__auto__ = (G__18414.cljs$lang$protocol_mask$partition0$ & (33554432));
if((bit__4412__auto__) || (G__18414.cljs$core$IList$)){
return true;
} else {
if((!G__18414.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IList,G__18414);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IList,G__18414);
}
});
cljs.core.hash_keyword = (function hash_keyword(k){
return ((cljs.core.hash_symbol(k) + (2654435769)) | (0));
});
cljs.core.compare_keywords = (function compare_keywords(a,b){
if((a.fqn === b.fqn)){
return (0);
} else {
if(cljs.core.truth_((function (){var and__3719__auto__ = cljs.core.not(a.ns);
if(and__3719__auto__){
return b.ns;
} else {
return and__3719__auto__;
}
})())){
return (-1);
} else {
if(cljs.core.truth_(a.ns)){
if(cljs.core.not(b.ns)){
return (1);
} else {
var nsc = (function (){var G__18421 = a.ns;
var G__18422 = b.ns;
return goog.array.defaultCompare(G__18421,G__18422);
})();
if(((0) === nsc)){
var G__18423 = a.name;
var G__18424 = b.name;
return goog.array.defaultCompare(G__18423,G__18424);
} else {
return nsc;
}
}
} else {
var G__18425 = a.name;
var G__18426 = b.name;
return goog.array.defaultCompare(G__18425,G__18426);

}
}
}
});

/**
* @constructor
*/
cljs.core.Keyword = (function (ns,name,fqn,_hash){
this.ns = ns;
this.name = name;
this.fqn = fqn;
this._hash = _hash;
this.cljs$lang$protocol_mask$partition0$ = 2153775105;
this.cljs$lang$protocol_mask$partition1$ = 4096;
})
cljs.core.Keyword.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,_){
var self__ = this;
var o__$1 = this;
return cljs.core._write(writer,[cljs.core.str(":"),cljs.core.str(self__.fqn)].join(''));
});

cljs.core.Keyword.prototype.cljs$core$INamed$_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.name;
});

cljs.core.Keyword.prototype.cljs$core$INamed$_namespace$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ns;
});

cljs.core.Keyword.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__4152__auto__ = self__._hash;
if(!((h__4152__auto__ == null))){
return h__4152__auto__;
} else {
var h__4152__auto____$1 = cljs.core.hash_keyword(this$__$1);
self__._hash = h__4152__auto____$1;

return h__4152__auto____$1;
}
});

cljs.core.Keyword.prototype.call = (function() {
var G__18428 = null;
var G__18428__2 = (function (self__,coll){
var self__ = this;
var self____$1 = this;
var kw = self____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,kw);
});
var G__18428__3 = (function (self__,coll,not_found){
var self__ = this;
var self____$1 = this;
var kw = self____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,kw,not_found);
});
G__18428 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__18428__2.call(this,self__,coll);
case 3:
return G__18428__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18428.cljs$core$IFn$_invoke$arity$2 = G__18428__2;
G__18428.cljs$core$IFn$_invoke$arity$3 = G__18428__3;
return G__18428;
})()
;

cljs.core.Keyword.prototype.apply = (function (self__,args18427){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args18427)));
});

cljs.core.Keyword.prototype.cljs$core$IFn$_invoke$arity$1 = (function (coll){
var self__ = this;
var kw = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,kw);
});

cljs.core.Keyword.prototype.cljs$core$IFn$_invoke$arity$2 = (function (coll,not_found){
var self__ = this;
var kw = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,kw,not_found);
});

cljs.core.Keyword.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if((other instanceof cljs.core.Keyword)){
return (self__.fqn === other.fqn);
} else {
return false;
}
});

cljs.core.Keyword.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str(":"),cljs.core.str(self__.fqn)].join('');
});

cljs.core.Keyword.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Keyword.cljs$lang$type = true;

cljs.core.Keyword.cljs$lang$ctorStr = "cljs.core/Keyword";

cljs.core.Keyword.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/Keyword");
});

cljs.core.__GT_Keyword = (function __GT_Keyword(ns,name,fqn,_hash){
return (new cljs.core.Keyword(ns,name,fqn,_hash));
});

cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
return (x instanceof cljs.core.Keyword);
});
cljs.core.keyword_identical_QMARK_ = (function keyword_identical_QMARK_(x,y){
if((x === y)){
return true;
} else {
if(((x instanceof cljs.core.Keyword)) && ((y instanceof cljs.core.Keyword))){
return (x.fqn === y.fqn);
} else {
return false;
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if((function (){var G__18430 = x;
if(G__18430){
var bit__4405__auto__ = (G__18430.cljs$lang$protocol_mask$partition1$ & (4096));
if((bit__4405__auto__) || (G__18430.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return x.cljs$core$INamed$_namespace$arity$1(null);
} else {
throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if((name instanceof cljs.core.Keyword)){
return name;
} else {
if((name instanceof cljs.core.Symbol)){
return (new cljs.core.Keyword(cljs.core.namespace(name),(function (){var G__18432 = name;
return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__18432) : cljs.core.name.call(null,G__18432));
})(),name.str,null));
} else {
if(typeof name === 'string'){
var parts = name.split("/");
if((parts.length === (2))){
return (new cljs.core.Keyword((parts[(0)]),(parts[(1)]),name,null));
} else {
return (new cljs.core.Keyword(null,(parts[(0)]),name,null));
}
} else {
return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return (new cljs.core.Keyword(ns,name,[cljs.core.str((cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/")].join(''):null)),cljs.core.str(name)].join(''),null));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keyword.cljs$core$IFn$_invoke$arity$1 = keyword__1;
keyword.cljs$core$IFn$_invoke$arity$2 = keyword__2;
return keyword;
})()
;

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,fn,s,__hash){
this.meta = meta;
this.fn = fn;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.LazySeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.LazySeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.LazySeq.prototype.sval = (function (){
var self__ = this;
var coll = this;
if((self__.fn == null)){
return self__.s;
} else {
self__.s = (function (){return (self__.fn.cljs$core$IFn$_invoke$arity$0 ? self__.fn.cljs$core$IFn$_invoke$arity$0() : self__.fn.call(null));
})();

self__.fn = null;

return self__.s;
}
});

cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
cljs.core._seq(coll__$1);

if((self__.s == null)){
return null;
} else {
return cljs.core.next(self__.s);
}
});

cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4152__auto__ = self__.__hash;
if(!((h__4152__auto__ == null))){
return h__4152__auto__;
} else {
var h__4152__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4152__auto____$1;

return h__4152__auto____$1;
}
});

cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.LazySeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.LazySeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
cljs.core._seq(coll__$1);

if((self__.s == null)){
return null;
} else {
return cljs.core.first(self__.s);
}
});

cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
cljs.core._seq(coll__$1);

if(!((self__.s == null))){
return cljs.core.rest(self__.s);
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
coll__$1.sval();

if((self__.s == null)){
return null;
} else {
var ls = self__.s;
while(true){
if((ls instanceof cljs.core.LazySeq)){
var G__18433 = ls.sval();
ls = G__18433;
continue;
} else {
self__.s = ls;

return cljs.core.seq(self__.s);
}
break;
}
}
});

cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.LazySeq(meta__$1,self__.fn,self__.s,self__.__hash));
});

cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.LazySeq.cljs$lang$type = true;

cljs.core.LazySeq.cljs$lang$ctorStr = "cljs.core/LazySeq";

cljs.core.LazySeq.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/LazySeq");
});

cljs.core.__GT_LazySeq = (function __GT_LazySeq(meta,fn,s,__hash){
return (new cljs.core.LazySeq(meta,fn,s,__hash));
});

(cljs.core.LazySeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4709__auto__ = this;
return cljs.core.es6_iterator(this__4709__auto__);
}));

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.end;
});

cljs.core.ChunkBuffer.prototype.add = (function (o){
var self__ = this;
var _ = this;
(self__.buf[self__.end] = o);

return self__.end = (self__.end + (1));
});

cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var self__ = this;
var _ = this;
var ret = (new cljs.core.ArrayChunk(self__.buf,(0),self__.end));
self__.buf = null;

return ret;
});

cljs.core.ChunkBuffer.cljs$lang$type = true;

cljs.core.ChunkBuffer.cljs$lang$ctorStr = "cljs.core/ChunkBuffer";

cljs.core.ChunkBuffer.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/ChunkBuffer");
});

cljs.core.__GT_ChunkBuffer = (function __GT_ChunkBuffer(buf,end){
return (new cljs.core.ChunkBuffer(buf,end));
});

cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer((new Array(capacity)),(0)));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,(self__.arr[self__.off]),(self__.off + (1)));
});

cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,start,self__.off);
});

cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;

cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.off === self__.end)){
throw (new Error("-drop-first of empty chunk"));
} else {
return (new cljs.core.ArrayChunk(self__.arr,(self__.off + (1)),self__.end));
}
});

cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var self__ = this;
var coll__$1 = this;
return (self__.arr[(self__.off + i)]);
});

cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var self__ = this;
var coll__$1 = this;
if(((i >= (0))) && ((i < (self__.end - self__.off)))){
return (self__.arr[(self__.off + i)]);
} else {
return not_found;
}
});

cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.end - self__.off);
});

cljs.core.ArrayChunk.cljs$lang$type = true;

cljs.core.ArrayChunk.cljs$lang$ctorStr = "cljs.core/ArrayChunk";

cljs.core.ArrayChunk.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/ArrayChunk");
});

cljs.core.__GT_ArrayChunk = (function __GT_ArrayChunk(arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});

cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return (new cljs.core.ArrayChunk(arr,(0),arr.length));
});
var array_chunk__2 = (function (arr,off){
return (new cljs.core.ArrayChunk(arr,off,arr.length));
});
var array_chunk__3 = (function (arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_chunk.cljs$core$IFn$_invoke$arity$1 = array_chunk__1;
array_chunk.cljs$core$IFn$_invoke$arity$2 = array_chunk__2;
array_chunk.cljs$core$IFn$_invoke$arity$3 = array_chunk__3;
return array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta,__hash){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31850732;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedCons.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.ChunkedCons.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.ChunkedCons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((cljs.core._count(self__.chunk) > (1))){
return (new cljs.core.ChunkedCons(cljs.core._drop_first(self__.chunk),self__.more,self__.meta,null));
} else {
var more__$1 = cljs.core._seq(self__.more);
if((more__$1 == null)){
return null;
} else {
return more__$1;
}
}
});

cljs.core.ChunkedCons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4152__auto__ = self__.__hash;
if(!((h__4152__auto__ == null))){
return h__4152__auto__;
} else {
var h__4152__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4152__auto____$1;

return h__4152__auto____$1;
}
});

cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.chunk,(0));
});

cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((cljs.core._count(self__.chunk) > (1))){
return (new cljs.core.ChunkedCons(cljs.core._drop_first(self__.chunk),self__.more,self__.meta,null));
} else {
if((self__.more == null)){
return cljs.core.List.EMPTY;
} else {
return self__.more;
}
}
});

cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.chunk;
});

cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.more == null)){
return cljs.core.List.EMPTY;
} else {
return self__.more;
}
});

cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.ChunkedCons(self__.chunk,self__.more,m,self__.__hash));
});

cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(o,this$__$1);
});

cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.more == null)){
return null;
} else {
return self__.more;
}
});

cljs.core.ChunkedCons.cljs$lang$type = true;

cljs.core.ChunkedCons.cljs$lang$ctorStr = "cljs.core/ChunkedCons";

cljs.core.ChunkedCons.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/ChunkedCons");
});

cljs.core.__GT_ChunkedCons = (function __GT_ChunkedCons(chunk,more,meta,__hash){
return (new cljs.core.ChunkedCons(chunk,more,meta,__hash));
});

(cljs.core.ChunkedCons.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4709__auto__ = this;
return cljs.core.es6_iterator(this__4709__auto__);
}));
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count(chunk) === (0))){
return rest;
} else {
return (new cljs.core.ChunkedCons(chunk,rest,null,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
cljs.core.chunk = (function chunk(b){
return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){
return cljs.core._chunked_first(s);
});
cljs.core.chunk_rest = (function chunk_rest(s){
return cljs.core._chunked_rest(s);
});
cljs.core.chunk_next = (function chunk_next(s){
if((function (){var G__18435 = s;
if(G__18435){
var bit__4405__auto__ = (G__18435.cljs$lang$protocol_mask$partition1$ & (1024));
if((bit__4405__auto__) || (G__18435.cljs$core$IChunkedNext$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core._chunked_next(s);
} else {
return cljs.core.seq(cljs.core._chunked_rest(s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary = [];
var s__$1 = s;
while(true){
if(cljs.core.seq(s__$1)){
ary.push(cljs.core.first(s__$1));

var G__18436 = cljs.core.next(s__$1);
s__$1 = G__18436;
continue;
} else {
return ary;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret = (new Array(cljs.core.count(coll)));
var i_18437 = (0);
var xs_18438 = cljs.core.seq(coll);
while(true){
if(xs_18438){
(ret[i_18437] = cljs.core.to_array(cljs.core.first(xs_18438)));

var G__18439 = (i_18437 + (1));
var G__18440 = cljs.core.next(xs_18438);
i_18437 = G__18439;
xs_18438 = G__18440;
continue;
} else {
}
break;
}

return ret;
});
cljs.core.int_array = (function() {
var int_array = null;
var int_array__1 = (function (size_or_seq){
if(typeof size_or_seq === 'number'){
return int_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else {
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var int_array__2 = (function (size,init_val_or_seq){
var a = (new Array(size));
if(cljs.core.seq_QMARK_(init_val_or_seq)){
var s = cljs.core.seq(init_val_or_seq);
var i = (0);
var s__$1 = s;
while(true){
if((s__$1) && ((i < size))){
(a[i] = cljs.core.first(s__$1));

var G__18443 = (i + (1));
var G__18444 = cljs.core.next(s__$1);
i = G__18443;
s__$1 = G__18444;
continue;
} else {
return a;
}
break;
}
} else {
var n__4618__auto___18445 = size;
var i_18446 = (0);
while(true){
if((i_18446 < n__4618__auto___18445)){
(a[i_18446] = init_val_or_seq);

var G__18447 = (i_18446 + (1));
i_18446 = G__18447;
continue;
} else {
}
break;
}

return a;
}
});
int_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return int_array__1.call(this,size);
case 2:
return int_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
int_array.cljs$core$IFn$_invoke$arity$1 = int_array__1;
int_array.cljs$core$IFn$_invoke$arity$2 = int_array__2;
return int_array;
})()
;
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(typeof size_or_seq === 'number'){
return long_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else {
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a = (new Array(size));
if(cljs.core.seq_QMARK_(init_val_or_seq)){
var s = cljs.core.seq(init_val_or_seq);
var i = (0);
var s__$1 = s;
while(true){
if((s__$1) && ((i < size))){
(a[i] = cljs.core.first(s__$1));

var G__18450 = (i + (1));
var G__18451 = cljs.core.next(s__$1);
i = G__18450;
s__$1 = G__18451;
continue;
} else {
return a;
}
break;
}
} else {
var n__4618__auto___18452 = size;
var i_18453 = (0);
while(true){
if((i_18453 < n__4618__auto___18452)){
(a[i_18453] = init_val_or_seq);

var G__18454 = (i_18453 + (1));
i_18453 = G__18454;
continue;
} else {
}
break;
}

return a;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
long_array.cljs$core$IFn$_invoke$arity$1 = long_array__1;
long_array.cljs$core$IFn$_invoke$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(typeof size_or_seq === 'number'){
return double_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else {
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a = (new Array(size));
if(cljs.core.seq_QMARK_(init_val_or_seq)){
var s = cljs.core.seq(init_val_or_seq);
var i = (0);
var s__$1 = s;
while(true){
if((s__$1) && ((i < size))){
(a[i] = cljs.core.first(s__$1));

var G__18457 = (i + (1));
var G__18458 = cljs.core.next(s__$1);
i = G__18457;
s__$1 = G__18458;
continue;
} else {
return a;
}
break;
}
} else {
var n__4618__auto___18459 = size;
var i_18460 = (0);
while(true){
if((i_18460 < n__4618__auto___18459)){
(a[i_18460] = init_val_or_seq);

var G__18461 = (i_18460 + (1));
i_18460 = G__18461;
continue;
} else {
}
break;
}

return a;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
double_array.cljs$core$IFn$_invoke$arity$1 = double_array__1;
double_array.cljs$core$IFn$_invoke$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(typeof size_or_seq === 'number'){
return object_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else {
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a = (new Array(size));
if(cljs.core.seq_QMARK_(init_val_or_seq)){
var s = cljs.core.seq(init_val_or_seq);
var i = (0);
var s__$1 = s;
while(true){
if((s__$1) && ((i < size))){
(a[i] = cljs.core.first(s__$1));

var G__18464 = (i + (1));
var G__18465 = cljs.core.next(s__$1);
i = G__18464;
s__$1 = G__18465;
continue;
} else {
return a;
}
break;
}
} else {
var n__4618__auto___18466 = size;
var i_18467 = (0);
while(true){
if((i_18467 < n__4618__auto___18466)){
(a[i_18467] = init_val_or_seq);

var G__18468 = (i_18467 + (1));
i_18467 = G__18468;
continue;
} else {
}
break;
}

return a;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
object_array.cljs$core$IFn$_invoke$arity$1 = object_array__1;
object_array.cljs$core$IFn$_invoke$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_(s)){
return cljs.core.count(s);
} else {
var s__$1 = s;
var i = n;
var sum = (0);
while(true){
if(((i > (0))) && (cljs.core.seq(s__$1))){
var G__18469 = cljs.core.next(s__$1);
var G__18470 = (i - (1));
var G__18471 = (sum + (1));
s__$1 = G__18469;
i = G__18470;
sum = G__18471;
continue;
} else {
return sum;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null)){
return null;
} else {
if((cljs.core.next(arglist) == null)){
return cljs.core.seq(cljs.core.first(arglist));
} else {
return cljs.core.cons(cljs.core.first(arglist),spread(cljs.core.next(arglist)));

}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,(function (){
return null;
}),null,null));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,(function (){
return x;
}),null,null));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,(function (){
var s = cljs.core.seq(x);
if(s){
if(cljs.core.chunked_seq_QMARK_(s)){
return cljs.core.chunk_cons(cljs.core.chunk_first(s),concat.cljs$core$IFn$_invoke$arity$2(cljs.core.chunk_rest(s),y));
} else {
return cljs.core.cons(cljs.core.first(s),concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s),y));
}
} else {
return y;
}
}),null,null));
});
var concat__3 = (function() { 
var G__18491__delegate = function (x,y,zs){
var cat = (function cat(xys,zs__$1){
return (new cljs.core.LazySeq(null,(function (){
var xys__$1 = cljs.core.seq(xys);
if(xys__$1){
if(cljs.core.chunked_seq_QMARK_(xys__$1)){
return cljs.core.chunk_cons(cljs.core.chunk_first(xys__$1),cat(cljs.core.chunk_rest(xys__$1),zs__$1));
} else {
return cljs.core.cons(cljs.core.first(xys__$1),cat(cljs.core.rest(xys__$1),zs__$1));
}
} else {
if(cljs.core.truth_(zs__$1)){
return cat(cljs.core.first(zs__$1),cljs.core.next(zs__$1));
} else {
return null;
}
}
}),null,null));
});
return cat(concat.cljs$core$IFn$_invoke$arity$2(x,y),zs);
};
var G__18491 = function (x,y,var_args){
var zs = null;
if (arguments.length > 2) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18491__delegate.call(this,x,y,zs);};
G__18491.cljs$lang$maxFixedArity = 2;
G__18491.cljs$lang$applyTo = (function (arglist__18492){
var x = cljs.core.first(arglist__18492);
arglist__18492 = cljs.core.next(arglist__18492);
var y = cljs.core.first(arglist__18492);
var zs = cljs.core.rest(arglist__18492);
return G__18491__delegate(x,y,zs);
});
G__18491.cljs$core$IFn$_invoke$arity$variadic = G__18491__delegate;
return G__18491;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$core$IFn$_invoke$arity$0 = concat__0;
concat.cljs$core$IFn$_invoke$arity$1 = concat__1;
concat.cljs$core$IFn$_invoke$arity$2 = concat__2;
concat.cljs$core$IFn$_invoke$arity$variadic = concat__3.cljs$core$IFn$_invoke$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq(args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons(a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons(a,cljs.core.cons(b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,args)));
});
var list_STAR___5 = (function() { 
var G__18493__delegate = function (a,b,c,d,more){
return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(more)))));
};
var G__18493 = function (a,b,c,d,var_args){
var more = null;
if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__18493__delegate.call(this,a,b,c,d,more);};
G__18493.cljs$lang$maxFixedArity = 4;
G__18493.cljs$lang$applyTo = (function (arglist__18494){
var a = cljs.core.first(arglist__18494);
arglist__18494 = cljs.core.next(arglist__18494);
var b = cljs.core.first(arglist__18494);
arglist__18494 = cljs.core.next(arglist__18494);
var c = cljs.core.first(arglist__18494);
arglist__18494 = cljs.core.next(arglist__18494);
var d = cljs.core.first(arglist__18494);
var more = cljs.core.rest(arglist__18494);
return G__18493__delegate(a,b,c,d,more);
});
G__18493.cljs$core$IFn$_invoke$arity$variadic = G__18493__delegate;
return G__18493;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$core$IFn$_invoke$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$core$IFn$_invoke$arity$1 = list_STAR___1;
list_STAR_.cljs$core$IFn$_invoke$arity$2 = list_STAR___2;
list_STAR_.cljs$core$IFn$_invoke$arity$3 = list_STAR___3;
list_STAR_.cljs$core$IFn$_invoke$arity$4 = list_STAR___4;
list_STAR_.cljs$core$IFn$_invoke$arity$variadic = list_STAR___5.cljs$core$IFn$_invoke$arity$variadic;
return list_STAR_;
})()
;
/**
* Returns a new, transient version of the collection, in constant time.
*/
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient(coll);
});
/**
* Returns a new, persistent version of the transient collection, in
* constant time. The transient collection cannot be used after this
* call, any such use will throw an exception.
*/
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_(tcoll);
});
/**
* Adds x to the transient collection, and return coll. The 'addition'
* may happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj_BANG_ = (function() {
var conj_BANG_ = null;
var conj_BANG___0 = (function (){
return cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
});
var conj_BANG___1 = (function (coll){
return coll;
});
var conj_BANG___2 = (function (tcoll,val){
return cljs.core._conj_BANG_(tcoll,val);
});
var conj_BANG___3 = (function() { 
var G__18495__delegate = function (tcoll,val,vals){
while(true){
var ntcoll = cljs.core._conj_BANG_(tcoll,val);
if(cljs.core.truth_(vals)){
var G__18496 = ntcoll;
var G__18497 = cljs.core.first(vals);
var G__18498 = cljs.core.next(vals);
tcoll = G__18496;
val = G__18497;
vals = G__18498;
continue;
} else {
return ntcoll;
}
break;
}
};
var G__18495 = function (tcoll,val,var_args){
var vals = null;
if (arguments.length > 2) {
  vals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18495__delegate.call(this,tcoll,val,vals);};
G__18495.cljs$lang$maxFixedArity = 2;
G__18495.cljs$lang$applyTo = (function (arglist__18499){
var tcoll = cljs.core.first(arglist__18499);
arglist__18499 = cljs.core.next(arglist__18499);
var val = cljs.core.first(arglist__18499);
var vals = cljs.core.rest(arglist__18499);
return G__18495__delegate(tcoll,val,vals);
});
G__18495.cljs$core$IFn$_invoke$arity$variadic = G__18495__delegate;
return G__18495;
})()
;
conj_BANG_ = function(tcoll,val,var_args){
var vals = var_args;
switch(arguments.length){
case 0:
return conj_BANG___0.call(this);
case 1:
return conj_BANG___1.call(this,tcoll);
case 2:
return conj_BANG___2.call(this,tcoll,val);
default:
return conj_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,val, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_BANG_.cljs$lang$maxFixedArity = 2;
conj_BANG_.cljs$lang$applyTo = conj_BANG___3.cljs$lang$applyTo;
conj_BANG_.cljs$core$IFn$_invoke$arity$0 = conj_BANG___0;
conj_BANG_.cljs$core$IFn$_invoke$arity$1 = conj_BANG___1;
conj_BANG_.cljs$core$IFn$_invoke$arity$2 = conj_BANG___2;
conj_BANG_.cljs$core$IFn$_invoke$arity$variadic = conj_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return conj_BANG_;
})()
;
/**
* When applied to a transient map, adds mapping of key(s) to
* val(s). When applied to a transient vector, sets the val at index.
* Note - index must be <= (count vector). Returns coll.
* @param {...*} var_args
*/
cljs.core.assoc_BANG_ = (function() {
var assoc_BANG_ = null;
var assoc_BANG___3 = (function (tcoll,key,val){
return cljs.core._assoc_BANG_(tcoll,key,val);
});
var assoc_BANG___4 = (function() { 
var G__18500__delegate = function (tcoll,key,val,kvs){
while(true){
var ntcoll = cljs.core._assoc_BANG_(tcoll,key,val);
if(cljs.core.truth_(kvs)){
var G__18501 = ntcoll;
var G__18502 = cljs.core.first(kvs);
var G__18503 = cljs.core.second(kvs);
var G__18504 = cljs.core.nnext(kvs);
tcoll = G__18501;
key = G__18502;
val = G__18503;
kvs = G__18504;
continue;
} else {
return ntcoll;
}
break;
}
};
var G__18500 = function (tcoll,key,val,var_args){
var kvs = null;
if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18500__delegate.call(this,tcoll,key,val,kvs);};
G__18500.cljs$lang$maxFixedArity = 3;
G__18500.cljs$lang$applyTo = (function (arglist__18505){
var tcoll = cljs.core.first(arglist__18505);
arglist__18505 = cljs.core.next(arglist__18505);
var key = cljs.core.first(arglist__18505);
arglist__18505 = cljs.core.next(arglist__18505);
var val = cljs.core.first(arglist__18505);
var kvs = cljs.core.rest(arglist__18505);
return G__18500__delegate(tcoll,key,val,kvs);
});
G__18500.cljs$core$IFn$_invoke$arity$variadic = G__18500__delegate;
return G__18500;
})()
;
assoc_BANG_ = function(tcoll,key,val,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc_BANG___3.call(this,tcoll,key,val);
default:
return assoc_BANG___4.cljs$core$IFn$_invoke$arity$variadic(tcoll,key,val, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assoc_BANG_.cljs$lang$maxFixedArity = 3;
assoc_BANG_.cljs$lang$applyTo = assoc_BANG___4.cljs$lang$applyTo;
assoc_BANG_.cljs$core$IFn$_invoke$arity$3 = assoc_BANG___3;
assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = assoc_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return assoc_BANG_;
})()
;
/**
* Returns a transient map that doesn't contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc_BANG_ = (function() {
var dissoc_BANG_ = null;
var dissoc_BANG___2 = (function (tcoll,key){
return cljs.core._dissoc_BANG_(tcoll,key);
});
var dissoc_BANG___3 = (function() { 
var G__18506__delegate = function (tcoll,key,ks){
while(true){
var ntcoll = cljs.core._dissoc_BANG_(tcoll,key);
if(cljs.core.truth_(ks)){
var G__18507 = ntcoll;
var G__18508 = cljs.core.first(ks);
var G__18509 = cljs.core.next(ks);
tcoll = G__18507;
key = G__18508;
ks = G__18509;
continue;
} else {
return ntcoll;
}
break;
}
};
var G__18506 = function (tcoll,key,var_args){
var ks = null;
if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18506__delegate.call(this,tcoll,key,ks);};
G__18506.cljs$lang$maxFixedArity = 2;
G__18506.cljs$lang$applyTo = (function (arglist__18510){
var tcoll = cljs.core.first(arglist__18510);
arglist__18510 = cljs.core.next(arglist__18510);
var key = cljs.core.first(arglist__18510);
var ks = cljs.core.rest(arglist__18510);
return G__18506__delegate(tcoll,key,ks);
});
G__18506.cljs$core$IFn$_invoke$arity$variadic = G__18506__delegate;
return G__18506;
})()
;
dissoc_BANG_ = function(tcoll,key,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return dissoc_BANG___2.call(this,tcoll,key);
default:
return dissoc_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,key, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dissoc_BANG_.cljs$lang$maxFixedArity = 2;
dissoc_BANG_.cljs$lang$applyTo = dissoc_BANG___3.cljs$lang$applyTo;
dissoc_BANG_.cljs$core$IFn$_invoke$arity$2 = dissoc_BANG___2;
dissoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = dissoc_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return dissoc_BANG_;
})()
;
/**
* Removes the last item from a transient vector. If
* the collection is empty, throws an exception. Returns coll
*/
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_(tcoll);
});
/**
* disj[oin]. Returns a transient set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj_BANG_ = (function() {
var disj_BANG_ = null;
var disj_BANG___2 = (function (tcoll,val){
return cljs.core._disjoin_BANG_(tcoll,val);
});
var disj_BANG___3 = (function() { 
var G__18511__delegate = function (tcoll,val,vals){
while(true){
var ntcoll = cljs.core._disjoin_BANG_(tcoll,val);
if(cljs.core.truth_(vals)){
var G__18512 = ntcoll;
var G__18513 = cljs.core.first(vals);
var G__18514 = cljs.core.next(vals);
tcoll = G__18512;
val = G__18513;
vals = G__18514;
continue;
} else {
return ntcoll;
}
break;
}
};
var G__18511 = function (tcoll,val,var_args){
var vals = null;
if (arguments.length > 2) {
  vals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18511__delegate.call(this,tcoll,val,vals);};
G__18511.cljs$lang$maxFixedArity = 2;
G__18511.cljs$lang$applyTo = (function (arglist__18515){
var tcoll = cljs.core.first(arglist__18515);
arglist__18515 = cljs.core.next(arglist__18515);
var val = cljs.core.first(arglist__18515);
var vals = cljs.core.rest(arglist__18515);
return G__18511__delegate(tcoll,val,vals);
});
G__18511.cljs$core$IFn$_invoke$arity$variadic = G__18511__delegate;
return G__18511;
})()
;
disj_BANG_ = function(tcoll,val,var_args){
var vals = var_args;
switch(arguments.length){
case 2:
return disj_BANG___2.call(this,tcoll,val);
default:
return disj_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,val, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
disj_BANG_.cljs$lang$maxFixedArity = 2;
disj_BANG_.cljs$lang$applyTo = disj_BANG___3.cljs$lang$applyTo;
disj_BANG_.cljs$core$IFn$_invoke$arity$2 = disj_BANG___2;
disj_BANG_.cljs$core$IFn$_invoke$arity$variadic = disj_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return disj_BANG_;
})()
;

cljs.core.apply_to = (function apply_to(f,argc,args){
var args__$1 = cljs.core.seq(args);
if((argc === (0))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var a4662 = cljs.core._first(args__$1);
var args__$2 = cljs.core._rest(args__$1);
if((argc === (1))){
if(f.cljs$core$IFn$_invoke$arity$1){
return f.cljs$core$IFn$_invoke$arity$1(a4662);
} else {
var G__18726 = a4662;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18726) : f.call(null,G__18726));
}
} else {
var b4663 = cljs.core._first(args__$2);
var args__$3 = cljs.core._rest(args__$2);
if((argc === (2))){
if(f.cljs$core$IFn$_invoke$arity$2){
return f.cljs$core$IFn$_invoke$arity$2(a4662,b4663);
} else {
var G__18727 = a4662;
var G__18728 = b4663;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__18727,G__18728) : f.call(null,G__18727,G__18728));
}
} else {
var c4664 = cljs.core._first(args__$3);
var args__$4 = cljs.core._rest(args__$3);
if((argc === (3))){
if(f.cljs$core$IFn$_invoke$arity$3){
return f.cljs$core$IFn$_invoke$arity$3(a4662,b4663,c4664);
} else {
var G__18729 = a4662;
var G__18730 = b4663;
var G__18731 = c4664;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__18729,G__18730,G__18731) : f.call(null,G__18729,G__18730,G__18731));
}
} else {
var d4665 = cljs.core._first(args__$4);
var args__$5 = cljs.core._rest(args__$4);
if((argc === (4))){
if(f.cljs$core$IFn$_invoke$arity$4){
return f.cljs$core$IFn$_invoke$arity$4(a4662,b4663,c4664,d4665);
} else {
var G__18732 = a4662;
var G__18733 = b4663;
var G__18734 = c4664;
var G__18735 = d4665;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__18732,G__18733,G__18734,G__18735) : f.call(null,G__18732,G__18733,G__18734,G__18735));
}
} else {
var e4666 = cljs.core._first(args__$5);
var args__$6 = cljs.core._rest(args__$5);
if((argc === (5))){
if(f.cljs$core$IFn$_invoke$arity$5){
return f.cljs$core$IFn$_invoke$arity$5(a4662,b4663,c4664,d4665,e4666);
} else {
var G__18736 = a4662;
var G__18737 = b4663;
var G__18738 = c4664;
var G__18739 = d4665;
var G__18740 = e4666;
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__18736,G__18737,G__18738,G__18739,G__18740) : f.call(null,G__18736,G__18737,G__18738,G__18739,G__18740));
}
} else {
var f4667 = cljs.core._first(args__$6);
var args__$7 = cljs.core._rest(args__$6);
if((argc === (6))){
if(f.cljs$core$IFn$_invoke$arity$6){
return f.cljs$core$IFn$_invoke$arity$6(a4662,b4663,c4664,d4665,e4666,f4667);
} else {
var G__18741 = a4662;
var G__18742 = b4663;
var G__18743 = c4664;
var G__18744 = d4665;
var G__18745 = e4666;
var G__18746 = f4667;
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__18741,G__18742,G__18743,G__18744,G__18745,G__18746) : f.call(null,G__18741,G__18742,G__18743,G__18744,G__18745,G__18746));
}
} else {
var g4668 = cljs.core._first(args__$7);
var args__$8 = cljs.core._rest(args__$7);
if((argc === (7))){
if(f.cljs$core$IFn$_invoke$arity$7){
return f.cljs$core$IFn$_invoke$arity$7(a4662,b4663,c4664,d4665,e4666,f4667,g4668);
} else {
var G__18747 = a4662;
var G__18748 = b4663;
var G__18749 = c4664;
var G__18750 = d4665;
var G__18751 = e4666;
var G__18752 = f4667;
var G__18753 = g4668;
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__18747,G__18748,G__18749,G__18750,G__18751,G__18752,G__18753) : f.call(null,G__18747,G__18748,G__18749,G__18750,G__18751,G__18752,G__18753));
}
} else {
var h4669 = cljs.core._first(args__$8);
var args__$9 = cljs.core._rest(args__$8);
if((argc === (8))){
if(f.cljs$core$IFn$_invoke$arity$8){
return f.cljs$core$IFn$_invoke$arity$8(a4662,b4663,c4664,d4665,e4666,f4667,g4668,h4669);
} else {
var G__18754 = a4662;
var G__18755 = b4663;
var G__18756 = c4664;
var G__18757 = d4665;
var G__18758 = e4666;
var G__18759 = f4667;
var G__18760 = g4668;
var G__18761 = h4669;
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__18754,G__18755,G__18756,G__18757,G__18758,G__18759,G__18760,G__18761) : f.call(null,G__18754,G__18755,G__18756,G__18757,G__18758,G__18759,G__18760,G__18761));
}
} else {
var i4670 = cljs.core._first(args__$9);
var args__$10 = cljs.core._rest(args__$9);
if((argc === (9))){
if(f.cljs$core$IFn$_invoke$arity$9){
return f.cljs$core$IFn$_invoke$arity$9(a4662,b4663,c4664,d4665,e4666,f4667,g4668,h4669,i4670);
} else {
var G__18762 = a4662;
var G__18763 = b4663;
var G__18764 = c4664;
var G__18765 = d4665;
var G__18766 = e4666;
var G__18767 = f4667;
var G__18768 = g4668;
var G__18769 = h4669;
var G__18770 = i4670;
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__18762,G__18763,G__18764,G__18765,G__18766,G__18767,G__18768,G__18769,G__18770) : f.call(null,G__18762,G__18763,G__18764,G__18765,G__18766,G__18767,G__18768,G__18769,G__18770));
}
} else {
var j4671 = cljs.core._first(args__$10);
var args__$11 = cljs.core._rest(args__$10);
if((argc === (10))){
if(f.cljs$core$IFn$_invoke$arity$10){
return f.cljs$core$IFn$_invoke$arity$10(a4662,b4663,c4664,d4665,e4666,f4667,g4668,h4669,i4670,j4671);
} else {
var G__18771 = a4662;
var G__18772 = b4663;
var G__18773 = c4664;
var G__18774 = d4665;
var G__18775 = e4666;
var G__18776 = f4667;
var G__18777 = g4668;
var G__18778 = h4669;
var G__18779 = i4670;
var G__18780 = j4671;
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__18771,G__18772,G__18773,G__18774,G__18775,G__18776,G__18777,G__18778,G__18779,G__18780) : f.call(null,G__18771,G__18772,G__18773,G__18774,G__18775,G__18776,G__18777,G__18778,G__18779,G__18780));
}
} else {
var k4672 = cljs.core._first(args__$11);
var args__$12 = cljs.core._rest(args__$11);
if((argc === (11))){
if(f.cljs$core$IFn$_invoke$arity$11){
return f.cljs$core$IFn$_invoke$arity$11(a4662,b4663,c4664,d4665,e4666,f4667,g4668,h4669,i4670,j4671,k4672);
} else {
var G__18781 = a4662;
var G__18782 = b4663;
var G__18783 = c4664;
var G__18784 = d4665;
var G__18785 = e4666;
var G__18786 = f4667;
var G__18787 = g4668;
var G__18788 = h4669;
var G__18789 = i4670;
var G__18790 = j4671;
var G__18791 = k4672;
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__18781,G__18782,G__18783,G__18784,G__18785,G__18786,G__18787,G__18788,G__18789,G__18790,G__18791) : f.call(null,G__18781,G__18782,G__18783,G__18784,G__18785,G__18786,G__18787,G__18788,G__18789,G__18790,G__18791));
}
} else {
var l4673 = cljs.core._first(args__$12);
var args__$13 = cljs.core._rest(args__$12);
if((argc === (12))){
if(f.cljs$core$IFn$_invoke$arity$12){
return f.cljs$core$IFn$_invoke$arity$12(a4662,b4663,c4664,d4665,e4666,f4667,g4668,h4669,i4670,j4671,k4672,l4673);
} else {
var G__18792 = a4662;
var G__18793 = b4663;
var G__18794 = c4664;
var G__18795 = d4665;
var G__18796 = e4666;
var G__18797 = f4667;
var G__18798 = g4668;
var G__18799 = h4669;
var G__18800 = i4670;
var G__18801 = j4671;
var G__18802 = k4672;
var G__18803 = l4673;
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__18792,G__18793,G__18794,G__18795,G__18796,G__18797,G__18798,G__18799,G__18800,G__18801,G__18802,G__18803) : f.call(null,G__18792,G__18793,G__18794,G__18795,G__18796,G__18797,G__18798,G__18799,G__18800,G__18801,G__18802,G__18803));
}
} else {
var m4674 = cljs.core._first(args__$13);
var args__$14 = cljs.core._rest(args__$13);
if((argc === (13))){
if(f.cljs$core$IFn$_invoke$arity$13){
return f.cljs$core$IFn$_invoke$arity$13(a4662,b4663,c4664,d4665,e4666,f4667,g4668,h4669,i4670,j4671,k4672,l4673,m4674);
} else {
var G__18804 = a4662;
var G__18805 = b4663;
var G__18806 = c4664;
var G__18807 = d4665;
var G__18808 = e4666;
var G__18809 = f4667;
var G__18810 = g4668;
var G__18811 = h4669;
var G__18812 = i4670;
var G__18813 = j4671;
var G__18814 = k4672;
var G__18815 = l4673;
var G__18816 = m4674;
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__18804,G__18805,G__18806,G__18807,G__18808,G__18809,G__18810,G__18811,G__18812,G__18813,G__18814,G__18815,G__18816) : f.call(null,G__18804,G__18805,G__18806,G__18807,G__18808,G__18809,G__18810,G__18811,G__18812,G__18813,G__18814,G__18815,G__18816));
}
} else {
var n4675 = cljs.core._first(args__$14);
var args__$15 = cljs.core._rest(args__$14);
if((argc === (14))){
if(f.cljs$core$IFn$_invoke$arity$14){
return f.cljs$core$IFn$_invoke$arity$14(a4662,b4663,c4664,d4665,e4666,f4667,g4668,h4669,i4670,j4671,k4672,l4673,m4674,n4675);
} else {
var G__18817 = a4662;
var G__18818 = b4663;
var G__18819 = c4664;
var G__18820 = d4665;
var G__18821 = e4666;
var G__18822 = f4667;
var G__18823 = g4668;
var G__18824 = h4669;
var G__18825 = i4670;
var G__18826 = j4671;
var G__18827 = k4672;
var G__18828 = l4673;
var G__18829 = m4674;
var G__18830 = n4675;
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__18817,G__18818,G__18819,G__18820,G__18821,G__18822,G__18823,G__18824,G__18825,G__18826,G__18827,G__18828,G__18829,G__18830) : f.call(null,G__18817,G__18818,G__18819,G__18820,G__18821,G__18822,G__18823,G__18824,G__18825,G__18826,G__18827,G__18828,G__18829,G__18830));
}
} else {
var o4676 = cljs.core._first(args__$15);
var args__$16 = cljs.core._rest(args__$15);
if((argc === (15))){
if(f.cljs$core$IFn$_invoke$arity$15){
return f.cljs$core$IFn$_invoke$arity$15(a4662,b4663,c4664,d4665,e4666,f4667,g4668,h4669,i4670,j4671,k4672,l4673,m4674,n4675,o4676);
} else {
var G__18831 = a4662;
var G__18832 = b4663;
var G__18833 = c4664;
var G__18834 = d4665;
var G__18835 = e4666;
var G__18836 = f4667;
var G__18837 = g4668;
var G__18838 = h4669;
var G__18839 = i4670;
var G__18840 = j4671;
var G__18841 = k4672;
var G__18842 = l4673;
var G__18843 = m4674;
var G__18844 = n4675;
var G__18845 = o4676;
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__18831,G__18832,G__18833,G__18834,G__18835,G__18836,G__18837,G__18838,G__18839,G__18840,G__18841,G__18842,G__18843,G__18844,G__18845) : f.call(null,G__18831,G__18832,G__18833,G__18834,G__18835,G__18836,G__18837,G__18838,G__18839,G__18840,G__18841,G__18842,G__18843,G__18844,G__18845));
}
} else {
var p4677 = cljs.core._first(args__$16);
var args__$17 = cljs.core._rest(args__$16);
if((argc === (16))){
if(f.cljs$core$IFn$_invoke$arity$16){
return f.cljs$core$IFn$_invoke$arity$16(a4662,b4663,c4664,d4665,e4666,f4667,g4668,h4669,i4670,j4671,k4672,l4673,m4674,n4675,o4676,p4677);
} else {
var G__18846 = a4662;
var G__18847 = b4663;
var G__18848 = c4664;
var G__18849 = d4665;
var G__18850 = e4666;
var G__18851 = f4667;
var G__18852 = g4668;
var G__18853 = h4669;
var G__18854 = i4670;
var G__18855 = j4671;
var G__18856 = k4672;
var G__18857 = l4673;
var G__18858 = m4674;
var G__18859 = n4675;
var G__18860 = o4676;
var G__18861 = p4677;
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__18846,G__18847,G__18848,G__18849,G__18850,G__18851,G__18852,G__18853,G__18854,G__18855,G__18856,G__18857,G__18858,G__18859,G__18860,G__18861) : f.call(null,G__18846,G__18847,G__18848,G__18849,G__18850,G__18851,G__18852,G__18853,G__18854,G__18855,G__18856,G__18857,G__18858,G__18859,G__18860,G__18861));
}
} else {
var q4678 = cljs.core._first(args__$17);
var args__$18 = cljs.core._rest(args__$17);
if((argc === (17))){
if(f.cljs$core$IFn$_invoke$arity$17){
return f.cljs$core$IFn$_invoke$arity$17(a4662,b4663,c4664,d4665,e4666,f4667,g4668,h4669,i4670,j4671,k4672,l4673,m4674,n4675,o4676,p4677,q4678);
} else {
var G__18862 = a4662;
var G__18863 = b4663;
var G__18864 = c4664;
var G__18865 = d4665;
var G__18866 = e4666;
var G__18867 = f4667;
var G__18868 = g4668;
var G__18869 = h4669;
var G__18870 = i4670;
var G__18871 = j4671;
var G__18872 = k4672;
var G__18873 = l4673;
var G__18874 = m4674;
var G__18875 = n4675;
var G__18876 = o4676;
var G__18877 = p4677;
var G__18878 = q4678;
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__18862,G__18863,G__18864,G__18865,G__18866,G__18867,G__18868,G__18869,G__18870,G__18871,G__18872,G__18873,G__18874,G__18875,G__18876,G__18877,G__18878) : f.call(null,G__18862,G__18863,G__18864,G__18865,G__18866,G__18867,G__18868,G__18869,G__18870,G__18871,G__18872,G__18873,G__18874,G__18875,G__18876,G__18877,G__18878));
}
} else {
var r4679 = cljs.core._first(args__$18);
var args__$19 = cljs.core._rest(args__$18);
if((argc === (18))){
if(f.cljs$core$IFn$_invoke$arity$18){
return f.cljs$core$IFn$_invoke$arity$18(a4662,b4663,c4664,d4665,e4666,f4667,g4668,h4669,i4670,j4671,k4672,l4673,m4674,n4675,o4676,p4677,q4678,r4679);
} else {
var G__18879 = a4662;
var G__18880 = b4663;
var G__18881 = c4664;
var G__18882 = d4665;
var G__18883 = e4666;
var G__18884 = f4667;
var G__18885 = g4668;
var G__18886 = h4669;
var G__18887 = i4670;
var G__18888 = j4671;
var G__18889 = k4672;
var G__18890 = l4673;
var G__18891 = m4674;
var G__18892 = n4675;
var G__18893 = o4676;
var G__18894 = p4677;
var G__18895 = q4678;
var G__18896 = r4679;
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__18879,G__18880,G__18881,G__18882,G__18883,G__18884,G__18885,G__18886,G__18887,G__18888,G__18889,G__18890,G__18891,G__18892,G__18893,G__18894,G__18895,G__18896) : f.call(null,G__18879,G__18880,G__18881,G__18882,G__18883,G__18884,G__18885,G__18886,G__18887,G__18888,G__18889,G__18890,G__18891,G__18892,G__18893,G__18894,G__18895,G__18896));
}
} else {
var s4680 = cljs.core._first(args__$19);
var args__$20 = cljs.core._rest(args__$19);
if((argc === (19))){
if(f.cljs$core$IFn$_invoke$arity$19){
return f.cljs$core$IFn$_invoke$arity$19(a4662,b4663,c4664,d4665,e4666,f4667,g4668,h4669,i4670,j4671,k4672,l4673,m4674,n4675,o4676,p4677,q4678,r4679,s4680);
} else {
var G__18897 = a4662;
var G__18898 = b4663;
var G__18899 = c4664;
var G__18900 = d4665;
var G__18901 = e4666;
var G__18902 = f4667;
var G__18903 = g4668;
var G__18904 = h4669;
var G__18905 = i4670;
var G__18906 = j4671;
var G__18907 = k4672;
var G__18908 = l4673;
var G__18909 = m4674;
var G__18910 = n4675;
var G__18911 = o4676;
var G__18912 = p4677;
var G__18913 = q4678;
var G__18914 = r4679;
var G__18915 = s4680;
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__18897,G__18898,G__18899,G__18900,G__18901,G__18902,G__18903,G__18904,G__18905,G__18906,G__18907,G__18908,G__18909,G__18910,G__18911,G__18912,G__18913,G__18914,G__18915) : f.call(null,G__18897,G__18898,G__18899,G__18900,G__18901,G__18902,G__18903,G__18904,G__18905,G__18906,G__18907,G__18908,G__18909,G__18910,G__18911,G__18912,G__18913,G__18914,G__18915));
}
} else {
var t4681 = cljs.core._first(args__$20);
var args__$21 = cljs.core._rest(args__$20);
if((argc === (20))){
if(f.cljs$core$IFn$_invoke$arity$20){
return f.cljs$core$IFn$_invoke$arity$20(a4662,b4663,c4664,d4665,e4666,f4667,g4668,h4669,i4670,j4671,k4672,l4673,m4674,n4675,o4676,p4677,q4678,r4679,s4680,t4681);
} else {
var G__18916 = a4662;
var G__18917 = b4663;
var G__18918 = c4664;
var G__18919 = d4665;
var G__18920 = e4666;
var G__18921 = f4667;
var G__18922 = g4668;
var G__18923 = h4669;
var G__18924 = i4670;
var G__18925 = j4671;
var G__18926 = k4672;
var G__18927 = l4673;
var G__18928 = m4674;
var G__18929 = n4675;
var G__18930 = o4676;
var G__18931 = p4677;
var G__18932 = q4678;
var G__18933 = r4679;
var G__18934 = s4680;
var G__18935 = t4681;
return (f.cljs$core$IFn$_invoke$arity$20 ? f.cljs$core$IFn$_invoke$arity$20(G__18916,G__18917,G__18918,G__18919,G__18920,G__18921,G__18922,G__18923,G__18924,G__18925,G__18926,G__18927,G__18928,G__18929,G__18930,G__18931,G__18932,G__18933,G__18934,G__18935) : f.call(null,G__18916,G__18917,G__18918,G__18919,G__18920,G__18921,G__18922,G__18923,G__18924,G__18925,G__18926,G__18927,G__18928,G__18929,G__18930,G__18931,G__18932,G__18933,G__18934,G__18935));
}
} else {
throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo){
var bc = cljs.core.bounded_count(args,(fixed_arity + (1)));
if((bc <= fixed_arity)){
return cljs.core.apply_to(f,bc,args);
} else {
return f.cljs$lang$applyTo(args);
}
} else {
return f.apply(f,cljs.core.to_array(args));
}
});
var apply__3 = (function (f,x,args){
var arglist = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(x,args);
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo){
var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));
if((bc <= fixed_arity)){
return cljs.core.apply_to(f,bc,arglist);
} else {
return f.cljs$lang$applyTo(arglist);
}
} else {
return f.apply(f,cljs.core.to_array(arglist));
}
});
var apply__4 = (function (f,x,y,args){
var arglist = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(x,y,args);
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo){
var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));
if((bc <= fixed_arity)){
return cljs.core.apply_to(f,bc,arglist);
} else {
return f.cljs$lang$applyTo(arglist);
}
} else {
return f.apply(f,cljs.core.to_array(arglist));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(x,y,z,args);
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo){
var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));
if((bc <= fixed_arity)){
return cljs.core.apply_to(f,bc,arglist);
} else {
return f.cljs$lang$applyTo(arglist);
}
} else {
return f.apply(f,cljs.core.to_array(arglist));
}
});
var apply__6 = (function() { 
var G__18936__delegate = function (f,a,b,c,d,args){
var arglist = cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(args)))));
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo){
var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));
if((bc <= fixed_arity)){
return cljs.core.apply_to(f,bc,arglist);
} else {
return f.cljs$lang$applyTo(arglist);
}
} else {
return f.apply(f,cljs.core.to_array(arglist));
}
};
var G__18936 = function (f,a,b,c,d,var_args){
var args = null;
if (arguments.length > 5) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__18936__delegate.call(this,f,a,b,c,d,args);};
G__18936.cljs$lang$maxFixedArity = 5;
G__18936.cljs$lang$applyTo = (function (arglist__18937){
var f = cljs.core.first(arglist__18937);
arglist__18937 = cljs.core.next(arglist__18937);
var a = cljs.core.first(arglist__18937);
arglist__18937 = cljs.core.next(arglist__18937);
var b = cljs.core.first(arglist__18937);
arglist__18937 = cljs.core.next(arglist__18937);
var c = cljs.core.first(arglist__18937);
arglist__18937 = cljs.core.next(arglist__18937);
var d = cljs.core.first(arglist__18937);
var args = cljs.core.rest(arglist__18937);
return G__18936__delegate(f,a,b,c,d,args);
});
G__18936.cljs$core$IFn$_invoke$arity$variadic = G__18936__delegate;
return G__18936;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$core$IFn$_invoke$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$core$IFn$_invoke$arity$2 = apply__2;
apply.cljs$core$IFn$_invoke$arity$3 = apply__3;
apply.cljs$core$IFn$_invoke$arity$4 = apply__4;
apply.cljs$core$IFn$_invoke$arity$5 = apply__5;
apply.cljs$core$IFn$_invoke$arity$variadic = apply__6.cljs$core$IFn$_invoke$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() {
var vary_meta = null;
var vary_meta__2 = (function (obj,f){
return cljs.core.with_meta(obj,(function (){var G__18953 = cljs.core.meta(obj);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18953) : f.call(null,G__18953));
})());
});
var vary_meta__3 = (function (obj,f,a){
return cljs.core.with_meta(obj,(function (){var G__18954 = cljs.core.meta(obj);
var G__18955 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__18954,G__18955) : f.call(null,G__18954,G__18955));
})());
});
var vary_meta__4 = (function (obj,f,a,b){
return cljs.core.with_meta(obj,(function (){var G__18956 = cljs.core.meta(obj);
var G__18957 = a;
var G__18958 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__18956,G__18957,G__18958) : f.call(null,G__18956,G__18957,G__18958));
})());
});
var vary_meta__5 = (function (obj,f,a,b,c){
return cljs.core.with_meta(obj,(function (){var G__18959 = cljs.core.meta(obj);
var G__18960 = a;
var G__18961 = b;
var G__18962 = c;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__18959,G__18960,G__18961,G__18962) : f.call(null,G__18959,G__18960,G__18961,G__18962));
})());
});
var vary_meta__6 = (function (obj,f,a,b,c,d){
return cljs.core.with_meta(obj,(function (){var G__18963 = cljs.core.meta(obj);
var G__18964 = a;
var G__18965 = b;
var G__18966 = c;
var G__18967 = d;
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__18963,G__18964,G__18965,G__18966,G__18967) : f.call(null,G__18963,G__18964,G__18965,G__18966,G__18967));
})());
});
var vary_meta__7 = (function() { 
var G__18968__delegate = function (obj,f,a,b,c,d,args){
return cljs.core.with_meta(obj,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.meta(obj),a,b,c,cljs.core.array_seq([d,args], 0)));
};
var G__18968 = function (obj,f,a,b,c,d,var_args){
var args = null;
if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);
} 
return G__18968__delegate.call(this,obj,f,a,b,c,d,args);};
G__18968.cljs$lang$maxFixedArity = 6;
G__18968.cljs$lang$applyTo = (function (arglist__18969){
var obj = cljs.core.first(arglist__18969);
arglist__18969 = cljs.core.next(arglist__18969);
var f = cljs.core.first(arglist__18969);
arglist__18969 = cljs.core.next(arglist__18969);
var a = cljs.core.first(arglist__18969);
arglist__18969 = cljs.core.next(arglist__18969);
var b = cljs.core.first(arglist__18969);
arglist__18969 = cljs.core.next(arglist__18969);
var c = cljs.core.first(arglist__18969);
arglist__18969 = cljs.core.next(arglist__18969);
var d = cljs.core.first(arglist__18969);
var args = cljs.core.rest(arglist__18969);
return G__18968__delegate(obj,f,a,b,c,d,args);
});
G__18968.cljs$core$IFn$_invoke$arity$variadic = G__18968__delegate;
return G__18968;
})()
;
vary_meta = function(obj,f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return vary_meta__2.call(this,obj,f);
case 3:
return vary_meta__3.call(this,obj,f,a);
case 4:
return vary_meta__4.call(this,obj,f,a,b);
case 5:
return vary_meta__5.call(this,obj,f,a,b,c);
case 6:
return vary_meta__6.call(this,obj,f,a,b,c,d);
default:
return vary_meta__7.cljs$core$IFn$_invoke$arity$variadic(obj,f,a,b,c,d, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vary_meta.cljs$lang$maxFixedArity = 6;
vary_meta.cljs$lang$applyTo = vary_meta__7.cljs$lang$applyTo;
vary_meta.cljs$core$IFn$_invoke$arity$2 = vary_meta__2;
vary_meta.cljs$core$IFn$_invoke$arity$3 = vary_meta__3;
vary_meta.cljs$core$IFn$_invoke$arity$4 = vary_meta__4;
vary_meta.cljs$core$IFn$_invoke$arity$5 = vary_meta__5;
vary_meta.cljs$core$IFn$_invoke$arity$6 = vary_meta__6;
vary_meta.cljs$core$IFn$_invoke$arity$variadic = vary_meta__7.cljs$core$IFn$_invoke$arity$variadic;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y));
});
var not_EQ___3 = (function() { 
var G__18970__delegate = function (x,y,more){
return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._EQ_,x,y,more));
};
var G__18970 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18970__delegate.call(this,x,y,more);};
G__18970.cljs$lang$maxFixedArity = 2;
G__18970.cljs$lang$applyTo = (function (arglist__18971){
var x = cljs.core.first(arglist__18971);
arglist__18971 = cljs.core.next(arglist__18971);
var y = cljs.core.first(arglist__18971);
var more = cljs.core.rest(arglist__18971);
return G__18970__delegate(x,y,more);
});
G__18970.cljs$core$IFn$_invoke$arity$variadic = G__18970__delegate;
return G__18970;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$core$IFn$_invoke$arity$1 = not_EQ___1;
not_EQ_.cljs$core$IFn$_invoke$arity$2 = not_EQ___2;
not_EQ_.cljs$core$IFn$_invoke$arity$variadic = not_EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.seq(coll)){
return coll;
} else {
return null;
}
});
cljs.core.nil_iter = (function nil_iter(){
if(typeof cljs.core.t18975 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.t18975 = (function (nil_iter,meta18976){
this.nil_iter = nil_iter;
this.meta18976 = meta18976;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.t18975.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return false;
});

cljs.core.t18975.prototype.next = (function (){
var self__ = this;
var _ = this;
return (new Error("No such element"));
});

cljs.core.t18975.prototype.remove = (function (){
var self__ = this;
var _ = this;
return (new Error("Unsupported operation"));
});

cljs.core.t18975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18977){
var self__ = this;
var _18977__$1 = this;
return self__.meta18976;
});

cljs.core.t18975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18977,meta18976__$1){
var self__ = this;
var _18977__$1 = this;
return (new cljs.core.t18975(self__.nil_iter,meta18976__$1));
});

cljs.core.t18975.cljs$lang$type = true;

cljs.core.t18975.cljs$lang$ctorStr = "cljs.core/t18975";

cljs.core.t18975.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/t18975");
});

cljs.core.__GT_t18975 = (function __GT_t18975(nil_iter__$1,meta18976){
return (new cljs.core.t18975(nil_iter__$1,meta18976));
});

}

return (new cljs.core.t18975(nil_iter,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,54,cljs.core.constant$keyword$9,2992,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,2988,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/production/js/cljs/core.cljs"], null)));
});

/**
* @constructor
*/
cljs.core.StringIter = (function (s,i){
this.s = s;
this.i = i;
})
cljs.core.StringIter.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return (self__.i < self__.s.length);
});

cljs.core.StringIter.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = self__.s.charAt(self__.i);
self__.i = (self__.i + (1));

return ret;
});

cljs.core.StringIter.prototype.remove = (function (){
var self__ = this;
var _ = this;
return (new Error("Unsupported operation"));
});

cljs.core.StringIter.cljs$lang$type = true;

cljs.core.StringIter.cljs$lang$ctorStr = "cljs.core/StringIter";

cljs.core.StringIter.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/StringIter");
});

cljs.core.__GT_StringIter = (function __GT_StringIter(s,i){
return (new cljs.core.StringIter(s,i));
});

cljs.core.string_iter = (function string_iter(x){
return (new cljs.core.StringIter(x,(0)));
});

/**
* @constructor
*/
cljs.core.ArrayIter = (function (arr,i){
this.arr = arr;
this.i = i;
})
cljs.core.ArrayIter.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return (self__.i < self__.arr.length);
});

cljs.core.ArrayIter.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = (self__.arr[self__.i]);
self__.i = (self__.i + (1));

return ret;
});

cljs.core.ArrayIter.prototype.remove = (function (){
var self__ = this;
var _ = this;
return (new Error("Unsupported operation"));
});

cljs.core.ArrayIter.cljs$lang$type = true;

cljs.core.ArrayIter.cljs$lang$ctorStr = "cljs.core/ArrayIter";

cljs.core.ArrayIter.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/ArrayIter");
});

cljs.core.__GT_ArrayIter = (function __GT_ArrayIter(arr,i){
return (new cljs.core.ArrayIter(arr,i));
});

cljs.core.array_iter = (function array_iter(x){
return (new cljs.core.ArrayIter(x,(0)));
});
cljs.core.INIT = {};
cljs.core.START = {};

/**
* @constructor
*/
cljs.core.SeqIter = (function (_seq,_next){
this._seq = _seq;
this._next = _next;
})
cljs.core.SeqIter.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
if((self__._seq === cljs.core.INIT)){
self__._seq = cljs.core.START;

self__._next = cljs.core.seq(self__._next);
} else {
if((self__._seq === self__._next)){
self__._next = cljs.core.next(self__._seq);
} else {
}
}

return !((self__._next == null));
});

cljs.core.SeqIter.prototype.next = (function (){
var self__ = this;
var this$ = this;
if(cljs.core.not(this$.hasNext())){
throw (new Error("No such element"));
} else {
self__._seq = self__._next;

return cljs.core.first(self__._next);
}
});

cljs.core.SeqIter.prototype.remove = (function (){
var self__ = this;
var _ = this;
return (new Error("Unsupported operation"));
});

cljs.core.SeqIter.cljs$lang$type = true;

cljs.core.SeqIter.cljs$lang$ctorStr = "cljs.core/SeqIter";

cljs.core.SeqIter.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/SeqIter");
});

cljs.core.__GT_SeqIter = (function __GT_SeqIter(_seq,_next){
return (new cljs.core.SeqIter(_seq,_next));
});

cljs.core.seq_iter = (function seq_iter(coll){
return (new cljs.core.SeqIter(cljs.core.INIT,coll));
});
cljs.core.iter = (function iter(coll){
if((coll == null)){
return cljs.core.nil_iter();
} else {
if(typeof coll === 'string'){
return cljs.core.string_iter(coll);
} else {
if(coll instanceof Array){
return cljs.core.array_iter(coll);
} else {
if(cljs.core.iterable_QMARK_(coll)){
return cljs.core._iterator(coll);
} else {
if(cljs.core.seqable_QMARK_(coll)){
return cljs.core.seq_iter(coll);
} else {
throw (new Error([cljs.core.str("Cannot create iterator from "),cljs.core.str(coll)].join('')));

}
}
}
}
}
});
cljs.core.lazy_transformer = (function lazy_transformer(stepper){
return (new cljs.core.LazyTransformer(stepper,null,null,null));
});

/**
* @constructor
*/
cljs.core.Stepper = (function (xform,iter){
this.xform = xform;
this.iter = iter;
})
cljs.core.Stepper.prototype.step = (function (lt){
var self__ = this;
var this$ = this;
while(true){
if(cljs.core.truth_((function (){var and__3719__auto__ = !((lt.stepper == null));
if(and__3719__auto__){
return self__.iter.hasNext();
} else {
return and__3719__auto__;
}
})())){
if(cljs.core.reduced_QMARK_((function (){var G__18978 = lt;
var G__18979 = self__.iter.next();
return (self__.xform.cljs$core$IFn$_invoke$arity$2 ? self__.xform.cljs$core$IFn$_invoke$arity$2(G__18978,G__18979) : self__.xform.call(null,G__18978,G__18979));
})())){
if((lt.rest == null)){
} else {
lt.rest.stepper = null;
}
} else {
continue;
}
} else {
}
break;
}

if((lt.stepper == null)){
return null;
} else {
var G__18980 = lt;
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__18980) : self__.xform.call(null,G__18980));
}
});

cljs.core.Stepper.cljs$lang$type = true;

cljs.core.Stepper.cljs$lang$ctorStr = "cljs.core/Stepper";

cljs.core.Stepper.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/Stepper");
});

cljs.core.__GT_Stepper = (function __GT_Stepper(xform,iter){
return (new cljs.core.Stepper(xform,iter));
});

cljs.core.stepper = (function stepper(xform,iter){
var stepfn = (function() {
var stepfn = null;
var stepfn__1 = (function (result){
var lt = ((cljs.core.reduced_QMARK_(result))?cljs.core.deref(result):result);
lt.stepper = null;

return result;
});
var stepfn__2 = (function (result,input){
var lt = result;
lt.first = input;

lt.rest = cljs.core.lazy_transformer(lt.stepper);

lt.stepper = null;

return lt.rest;
});
stepfn = function(result,input){
switch(arguments.length){
case 1:
return stepfn__1.call(this,result);
case 2:
return stepfn__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stepfn.cljs$core$IFn$_invoke$arity$1 = stepfn__1;
stepfn.cljs$core$IFn$_invoke$arity$2 = stepfn__2;
return stepfn;
})()
;
return (new cljs.core.Stepper((function (){var G__18982 = stepfn;
return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__18982) : xform.call(null,G__18982));
})(),iter));
});

/**
* @constructor
*/
cljs.core.MultiStepper = (function (xform,iters,nexts){
this.xform = xform;
this.iters = iters;
this.nexts = nexts;
})
cljs.core.MultiStepper.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
var iters__$1 = cljs.core.seq(self__.iters);
while(true){
if(!((iters__$1 == null))){
var iter = cljs.core.first(iters__$1);
if(cljs.core.not(iter.hasNext())){
return false;
} else {
var G__18984 = cljs.core.next(iters__$1);
iters__$1 = G__18984;
continue;
}
} else {
return true;
}
break;
}
});

cljs.core.MultiStepper.prototype.next = (function (){
var self__ = this;
var _ = this;
var n__4618__auto___18985 = self__.iters.length;
var i_18986 = (0);
while(true){
if((i_18986 < n__4618__auto___18985)){
(self__.nexts[i_18986] = (self__.iters[i_18986]).next());

var G__18987 = (i_18986 + (1));
i_18986 = G__18987;
continue;
} else {
}
break;
}

return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(self__.nexts,(0));
});

cljs.core.MultiStepper.prototype.step = (function (lt){
var self__ = this;
var this$ = this;
while(true){
if(cljs.core.truth_((function (){var and__3719__auto__ = !((lt.stepper == null));
if(and__3719__auto__){
return this$.hasNext();
} else {
return and__3719__auto__;
}
})())){
if(cljs.core.reduced_QMARK_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.xform,cljs.core.cons(lt,this$.next())))){
if((lt.rest == null)){
} else {
lt.rest.stepper = null;
}
} else {
continue;
}
} else {
}
break;
}

if((lt.stepper == null)){
return null;
} else {
var G__18983 = lt;
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__18983) : self__.xform.call(null,G__18983));
}
});

cljs.core.MultiStepper.cljs$lang$type = true;

cljs.core.MultiStepper.cljs$lang$ctorStr = "cljs.core/MultiStepper";

cljs.core.MultiStepper.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/MultiStepper");
});

cljs.core.__GT_MultiStepper = (function __GT_MultiStepper(xform,iters,nexts){
return (new cljs.core.MultiStepper(xform,iters,nexts));
});

cljs.core.multi_stepper = (function() {
var multi_stepper = null;
var multi_stepper__2 = (function (xform,iters){
return multi_stepper.cljs$core$IFn$_invoke$arity$3(xform,iters,(new Array(iters.length)));
});
var multi_stepper__3 = (function (xform,iters,nexts){
var stepfn = (function() {
var stepfn = null;
var stepfn__1 = (function (result){
var lt = ((cljs.core.reduced_QMARK_(result))?cljs.core.deref(result):result);
lt.stepper = null;

return lt;
});
var stepfn__2 = (function (result,input){
var lt = result;
lt.first = input;

lt.rest = cljs.core.lazy_transformer(lt.stepper);

lt.stepper = null;

return lt.rest;
});
stepfn = function(result,input){
switch(arguments.length){
case 1:
return stepfn__1.call(this,result);
case 2:
return stepfn__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stepfn.cljs$core$IFn$_invoke$arity$1 = stepfn__1;
stepfn.cljs$core$IFn$_invoke$arity$2 = stepfn__2;
return stepfn;
})()
;
return (new cljs.core.MultiStepper((function (){var G__18992 = stepfn;
return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__18992) : xform.call(null,G__18992));
})(),iters,nexts));
});
multi_stepper = function(xform,iters,nexts){
switch(arguments.length){
case 2:
return multi_stepper__2.call(this,xform,iters);
case 3:
return multi_stepper__3.call(this,xform,iters,nexts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
multi_stepper.cljs$core$IFn$_invoke$arity$2 = multi_stepper__2;
multi_stepper.cljs$core$IFn$_invoke$arity$3 = multi_stepper__3;
return multi_stepper;
})()
;

/**
* @constructor
*/
cljs.core.LazyTransformer = (function (stepper,first,rest,meta){
this.stepper = stepper;
this.first = first;
this.rest = rest;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31719628;
})
cljs.core.LazyTransformer.prototype.cljs$core$INext$_next$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.stepper == null)){
} else {
cljs.core._seq(this$__$1);
}

if((self__.rest == null)){
return null;
} else {
return cljs.core._seq(self__.rest);
}
});

cljs.core.LazyTransformer.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.stepper == null)){
} else {
cljs.core._seq(this$__$1);
}

if((self__.rest == null)){
return null;
} else {
return self__.first;
}
});

cljs.core.LazyTransformer.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.stepper == null)){
} else {
cljs.core._seq(this$__$1);
}

if((self__.rest == null)){
return cljs.core.List.EMPTY;
} else {
return self__.rest;
}
});

cljs.core.LazyTransformer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.stepper == null)){
} else {
self__.stepper.step(this$__$1);
}

if((self__.rest == null)){
return null;
} else {
return this$__$1;
}
});

cljs.core.LazyTransformer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.hash_ordered_coll(this$__$1);
});

cljs.core.LazyTransformer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
var s = cljs.core._seq(this$__$1);
if(!((s == null))){
return cljs.core.equiv_sequential(this$__$1,other);
} else {
return (cljs.core.sequential_QMARK_(other)) && ((cljs.core.seq(other) == null));
}
});

cljs.core.LazyTransformer.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.List.EMPTY;
});

cljs.core.LazyTransformer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(o,cljs.core._seq(this$__$1));
});

cljs.core.LazyTransformer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.LazyTransformer(self__.stepper,self__.first,self__.rest,new_meta));
});

cljs.core.LazyTransformer.cljs$lang$type = true;

cljs.core.LazyTransformer.cljs$lang$ctorStr = "cljs.core/LazyTransformer";

cljs.core.LazyTransformer.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/LazyTransformer");
});

cljs.core.__GT_LazyTransformer = (function __GT_LazyTransformer(stepper,first,rest,meta){
return (new cljs.core.LazyTransformer(stepper,first,rest,meta));
});

(cljs.core.LazyTransformer.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4709__auto__ = this;
return cljs.core.es6_iterator(this__4709__auto__);
}));
cljs.core.LazyTransformer.create = (function (xform,coll){
return (new cljs.core.LazyTransformer(cljs.core.stepper(xform,cljs.core.iter(coll)),null,null,null));
});
cljs.core.LazyTransformer.createMulti = (function (xform,colls){
var iters = [];
var seq__18993_18997 = cljs.core.seq(colls);
var chunk__18994_18998 = null;
var count__18995_18999 = (0);
var i__18996_19000 = (0);
while(true){
if((i__18996_19000 < count__18995_18999)){
var coll_19001 = chunk__18994_18998.cljs$core$IIndexed$_nth$arity$2(null,i__18996_19000);
iters.push(cljs.core.iter(coll_19001));

var G__19002 = seq__18993_18997;
var G__19003 = chunk__18994_18998;
var G__19004 = count__18995_18999;
var G__19005 = (i__18996_19000 + (1));
seq__18993_18997 = G__19002;
chunk__18994_18998 = G__19003;
count__18995_18999 = G__19004;
i__18996_19000 = G__19005;
continue;
} else {
var temp__4126__auto___19006 = cljs.core.seq(seq__18993_18997);
if(temp__4126__auto___19006){
var seq__18993_19007__$1 = temp__4126__auto___19006;
if(cljs.core.chunked_seq_QMARK_(seq__18993_19007__$1)){
var c__4518__auto___19008 = cljs.core.chunk_first(seq__18993_19007__$1);
var G__19009 = cljs.core.chunk_rest(seq__18993_19007__$1);
var G__19010 = c__4518__auto___19008;
var G__19011 = cljs.core.count(c__4518__auto___19008);
var G__19012 = (0);
seq__18993_18997 = G__19009;
chunk__18994_18998 = G__19010;
count__18995_18999 = G__19011;
i__18996_19000 = G__19012;
continue;
} else {
var coll_19013 = cljs.core.first(seq__18993_19007__$1);
iters.push(cljs.core.iter(coll_19013));

var G__19014 = cljs.core.next(seq__18993_19007__$1);
var G__19015 = null;
var G__19016 = (0);
var G__19017 = (0);
seq__18993_18997 = G__19014;
chunk__18994_18998 = G__19015;
count__18995_18999 = G__19016;
i__18996_19000 = G__19017;
continue;
}
} else {
}
}
break;
}

return (new cljs.core.LazyTransformer(cljs.core.multi_stepper.cljs$core$IFn$_invoke$arity$3(xform,iters,(new Array(iters.length))),null,null,null));
});
/**
* Coerces coll to a (possibly empty) sequence, if it is not already
* one. Will not force a lazy seq. (sequence nil) yields (), When a
* transducer is supplied, returns a lazy sequence of applications of
* the transform to the items in coll(s), i.e. to the set of first
* items of each coll, followed by the set of second
* items in each coll, until any one of the colls is exhausted.  Any
* remaining items in other colls are ignored. The transform should accept
* number-of-colls arguments
* @param {...*} var_args
*/
cljs.core.sequence = (function() {
var sequence = null;
var sequence__1 = (function (coll){
if(cljs.core.seq_QMARK_(coll)){
return coll;
} else {
var or__3731__auto__ = cljs.core.seq(coll);
if(or__3731__auto__){
return or__3731__auto__;
} else {
return cljs.core.List.EMPTY;
}
}
});
var sequence__2 = (function (xform,coll){
return cljs.core.LazyTransformer.create(xform,coll);
});
var sequence__3 = (function() { 
var G__19018__delegate = function (xform,coll,colls){
return cljs.core.LazyTransformer.createMulti(xform,cljs.core.to_array(cljs.core.cons(coll,colls)));
};
var G__19018 = function (xform,coll,var_args){
var colls = null;
if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19018__delegate.call(this,xform,coll,colls);};
G__19018.cljs$lang$maxFixedArity = 2;
G__19018.cljs$lang$applyTo = (function (arglist__19019){
var xform = cljs.core.first(arglist__19019);
arglist__19019 = cljs.core.next(arglist__19019);
var coll = cljs.core.first(arglist__19019);
var colls = cljs.core.rest(arglist__19019);
return G__19018__delegate(xform,coll,colls);
});
G__19018.cljs$core$IFn$_invoke$arity$variadic = G__19018__delegate;
return G__19018;
})()
;
sequence = function(xform,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 1:
return sequence__1.call(this,xform);
case 2:
return sequence__2.call(this,xform,coll);
default:
return sequence__3.cljs$core$IFn$_invoke$arity$variadic(xform,coll, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sequence.cljs$lang$maxFixedArity = 2;
sequence.cljs$lang$applyTo = sequence__3.cljs$lang$applyTo;
sequence.cljs$core$IFn$_invoke$arity$1 = sequence__1;
sequence.cljs$core$IFn$_invoke$arity$2 = sequence__2;
sequence.cljs$core$IFn$_invoke$arity$variadic = sequence__3.cljs$core$IFn$_invoke$arity$variadic;
return sequence;
})()
;
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq(coll) == null)){
return true;
} else {
if(cljs.core.truth_((function (){var G__19021 = cljs.core.first(coll);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__19021) : pred.call(null,G__19021));
})())){
var G__19022 = pred;
var G__19023 = cljs.core.next(coll);
pred = G__19022;
coll = G__19023;
continue;
} else {
return false;

}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return !(cljs.core.every_QMARK_(pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.seq(coll)){
var or__3731__auto__ = (function (){var G__19027 = cljs.core.first(coll);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__19027) : pred.call(null,G__19027));
})();
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
var G__19028 = pred;
var G__19029 = cljs.core.next(coll);
pred = G__19028;
coll = G__19029;
continue;
}
} else {
return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not(cljs.core.some(pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_(n)){
return ((n & (1)) === (0));
} else {
throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljs.core.even_QMARK_(n));
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__19036 = null;
var G__19036__0 = (function (){
return cljs.core.not((function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})());
});
var G__19036__1 = (function (x){
return cljs.core.not((function (){var G__19033 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19033) : f.call(null,G__19033));
})());
});
var G__19036__2 = (function (x,y){
return cljs.core.not((function (){var G__19034 = x;
var G__19035 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19034,G__19035) : f.call(null,G__19034,G__19035));
})());
});
var G__19036__3 = (function() { 
var G__19037__delegate = function (x,y,zs){
return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f,x,y,zs));
};
var G__19037 = function (x,y,var_args){
var zs = null;
if (arguments.length > 2) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19037__delegate.call(this,x,y,zs);};
G__19037.cljs$lang$maxFixedArity = 2;
G__19037.cljs$lang$applyTo = (function (arglist__19038){
var x = cljs.core.first(arglist__19038);
arglist__19038 = cljs.core.next(arglist__19038);
var y = cljs.core.first(arglist__19038);
var zs = cljs.core.rest(arglist__19038);
return G__19037__delegate(x,y,zs);
});
G__19037.cljs$core$IFn$_invoke$arity$variadic = G__19037__delegate;
return G__19037;
})()
;
G__19036 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__19036__0.call(this);
case 1:
return G__19036__1.call(this,x);
case 2:
return G__19036__2.call(this,x,y);
default:
return G__19036__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19036.cljs$lang$maxFixedArity = 2;
G__19036.cljs$lang$applyTo = G__19036__3.cljs$lang$applyTo;
G__19036.cljs$core$IFn$_invoke$arity$0 = G__19036__0;
G__19036.cljs$core$IFn$_invoke$arity$1 = G__19036__1;
G__19036.cljs$core$IFn$_invoke$arity$2 = G__19036__2;
G__19036.cljs$core$IFn$_invoke$arity$variadic = G__19036__3.cljs$core$IFn$_invoke$arity$variadic;
return G__19036;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__19039__delegate = function (args){
return x;
};
var G__19039 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__19039__delegate.call(this,args);};
G__19039.cljs$lang$maxFixedArity = 0;
G__19039.cljs$lang$applyTo = (function (arglist__19040){
var args = cljs.core.seq(arglist__19040);
return G__19039__delegate(args);
});
G__19039.cljs$core$IFn$_invoke$arity$variadic = G__19039__delegate;
return G__19039;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__19095 = null;
var G__19095__0 = (function (){
var G__19068 = (function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19068) : f.call(null,G__19068));
});
var G__19095__1 = (function (x){
var G__19069 = (function (){var G__19070 = x;
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__19070) : g.call(null,G__19070));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19069) : f.call(null,G__19069));
});
var G__19095__2 = (function (x,y){
var G__19071 = (function (){var G__19072 = x;
var G__19073 = y;
return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__19072,G__19073) : g.call(null,G__19072,G__19073));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19071) : f.call(null,G__19071));
});
var G__19095__3 = (function (x,y,z){
var G__19074 = (function (){var G__19075 = x;
var G__19076 = y;
var G__19077 = z;
return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__19075,G__19076,G__19077) : g.call(null,G__19075,G__19076,G__19077));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19074) : f.call(null,G__19074));
});
var G__19095__4 = (function() { 
var G__19096__delegate = function (x,y,z,args){
var G__19078 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19078) : f.call(null,G__19078));
};
var G__19096 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19096__delegate.call(this,x,y,z,args);};
G__19096.cljs$lang$maxFixedArity = 3;
G__19096.cljs$lang$applyTo = (function (arglist__19097){
var x = cljs.core.first(arglist__19097);
arglist__19097 = cljs.core.next(arglist__19097);
var y = cljs.core.first(arglist__19097);
arglist__19097 = cljs.core.next(arglist__19097);
var z = cljs.core.first(arglist__19097);
var args = cljs.core.rest(arglist__19097);
return G__19096__delegate(x,y,z,args);
});
G__19096.cljs$core$IFn$_invoke$arity$variadic = G__19096__delegate;
return G__19096;
})()
;
G__19095 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__19095__0.call(this);
case 1:
return G__19095__1.call(this,x);
case 2:
return G__19095__2.call(this,x,y);
case 3:
return G__19095__3.call(this,x,y,z);
default:
return G__19095__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19095.cljs$lang$maxFixedArity = 3;
G__19095.cljs$lang$applyTo = G__19095__4.cljs$lang$applyTo;
G__19095.cljs$core$IFn$_invoke$arity$0 = G__19095__0;
G__19095.cljs$core$IFn$_invoke$arity$1 = G__19095__1;
G__19095.cljs$core$IFn$_invoke$arity$2 = G__19095__2;
G__19095.cljs$core$IFn$_invoke$arity$3 = G__19095__3;
G__19095.cljs$core$IFn$_invoke$arity$variadic = G__19095__4.cljs$core$IFn$_invoke$arity$variadic;
return G__19095;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__19098 = null;
var G__19098__0 = (function (){
var G__19079 = (function (){var G__19080 = (function (){return (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
})();
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__19080) : g.call(null,G__19080));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19079) : f.call(null,G__19079));
});
var G__19098__1 = (function (x){
var G__19081 = (function (){var G__19082 = (function (){var G__19083 = x;
return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__19083) : h.call(null,G__19083));
})();
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__19082) : g.call(null,G__19082));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19081) : f.call(null,G__19081));
});
var G__19098__2 = (function (x,y){
var G__19084 = (function (){var G__19085 = (function (){var G__19086 = x;
var G__19087 = y;
return (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(G__19086,G__19087) : h.call(null,G__19086,G__19087));
})();
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__19085) : g.call(null,G__19085));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19084) : f.call(null,G__19084));
});
var G__19098__3 = (function (x,y,z){
var G__19088 = (function (){var G__19089 = (function (){var G__19090 = x;
var G__19091 = y;
var G__19092 = z;
return (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(G__19090,G__19091,G__19092) : h.call(null,G__19090,G__19091,G__19092));
})();
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__19089) : g.call(null,G__19089));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19088) : f.call(null,G__19088));
});
var G__19098__4 = (function() { 
var G__19099__delegate = function (x,y,z,args){
var G__19093 = (function (){var G__19094 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,x,y,z,args);
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__19094) : g.call(null,G__19094));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19093) : f.call(null,G__19093));
};
var G__19099 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19099__delegate.call(this,x,y,z,args);};
G__19099.cljs$lang$maxFixedArity = 3;
G__19099.cljs$lang$applyTo = (function (arglist__19100){
var x = cljs.core.first(arglist__19100);
arglist__19100 = cljs.core.next(arglist__19100);
var y = cljs.core.first(arglist__19100);
arglist__19100 = cljs.core.next(arglist__19100);
var z = cljs.core.first(arglist__19100);
var args = cljs.core.rest(arglist__19100);
return G__19099__delegate(x,y,z,args);
});
G__19099.cljs$core$IFn$_invoke$arity$variadic = G__19099__delegate;
return G__19099;
})()
;
G__19098 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__19098__0.call(this);
case 1:
return G__19098__1.call(this,x);
case 2:
return G__19098__2.call(this,x,y);
case 3:
return G__19098__3.call(this,x,y,z);
default:
return G__19098__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19098.cljs$lang$maxFixedArity = 3;
G__19098.cljs$lang$applyTo = G__19098__4.cljs$lang$applyTo;
G__19098.cljs$core$IFn$_invoke$arity$0 = G__19098__0;
G__19098.cljs$core$IFn$_invoke$arity$1 = G__19098__1;
G__19098.cljs$core$IFn$_invoke$arity$2 = G__19098__2;
G__19098.cljs$core$IFn$_invoke$arity$3 = G__19098__3;
G__19098.cljs$core$IFn$_invoke$arity$variadic = G__19098__4.cljs$core$IFn$_invoke$arity$variadic;
return G__19098;
})()
});
var comp__4 = (function() { 
var G__19101__delegate = function (f1,f2,f3,fs){
var fs__$1 = cljs.core.reverse(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(f1,f2,f3,fs));
return ((function (fs__$1){
return (function() { 
var G__19102__delegate = function (args){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fs__$1),args);
var fs__$2 = cljs.core.next(fs__$1);
while(true){
if(fs__$2){
var G__19103 = cljs.core.first(fs__$2).call(null,ret);
var G__19104 = cljs.core.next(fs__$2);
ret = G__19103;
fs__$2 = G__19104;
continue;
} else {
return ret;
}
break;
}
};
var G__19102 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__19102__delegate.call(this,args);};
G__19102.cljs$lang$maxFixedArity = 0;
G__19102.cljs$lang$applyTo = (function (arglist__19105){
var args = cljs.core.seq(arglist__19105);
return G__19102__delegate(args);
});
G__19102.cljs$core$IFn$_invoke$arity$variadic = G__19102__delegate;
return G__19102;
})()
;
;})(fs__$1))
};
var G__19101 = function (f1,f2,f3,var_args){
var fs = null;
if (arguments.length > 3) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19101__delegate.call(this,f1,f2,f3,fs);};
G__19101.cljs$lang$maxFixedArity = 3;
G__19101.cljs$lang$applyTo = (function (arglist__19106){
var f1 = cljs.core.first(arglist__19106);
arglist__19106 = cljs.core.next(arglist__19106);
var f2 = cljs.core.first(arglist__19106);
arglist__19106 = cljs.core.next(arglist__19106);
var f3 = cljs.core.first(arglist__19106);
var fs = cljs.core.rest(arglist__19106);
return G__19101__delegate(f1,f2,f3,fs);
});
G__19101.cljs$core$IFn$_invoke$arity$variadic = G__19101__delegate;
return G__19101;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$core$IFn$_invoke$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$core$IFn$_invoke$arity$0 = comp__0;
comp.cljs$core$IFn$_invoke$arity$1 = comp__1;
comp.cljs$core$IFn$_invoke$arity$2 = comp__2;
comp.cljs$core$IFn$_invoke$arity$3 = comp__3;
comp.cljs$core$IFn$_invoke$arity$variadic = comp__4.cljs$core$IFn$_invoke$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__1 = (function (f){
return f;
});
var partial__2 = (function (f,arg1){
return (function() {
var G__19191 = null;
var G__19191__0 = (function (){
var G__19149 = arg1;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19149) : f.call(null,G__19149));
});
var G__19191__1 = (function (x){
var G__19150 = arg1;
var G__19151 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19150,G__19151) : f.call(null,G__19150,G__19151));
});
var G__19191__2 = (function (x,y){
var G__19152 = arg1;
var G__19153 = x;
var G__19154 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__19152,G__19153,G__19154) : f.call(null,G__19152,G__19153,G__19154));
});
var G__19191__3 = (function (x,y,z){
var G__19155 = arg1;
var G__19156 = x;
var G__19157 = y;
var G__19158 = z;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__19155,G__19156,G__19157,G__19158) : f.call(null,G__19155,G__19156,G__19157,G__19158));
});
var G__19191__4 = (function() { 
var G__19192__delegate = function (x,y,z,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,arg1,x,y,z,cljs.core.array_seq([args], 0));
};
var G__19192 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19192__delegate.call(this,x,y,z,args);};
G__19192.cljs$lang$maxFixedArity = 3;
G__19192.cljs$lang$applyTo = (function (arglist__19193){
var x = cljs.core.first(arglist__19193);
arglist__19193 = cljs.core.next(arglist__19193);
var y = cljs.core.first(arglist__19193);
arglist__19193 = cljs.core.next(arglist__19193);
var z = cljs.core.first(arglist__19193);
var args = cljs.core.rest(arglist__19193);
return G__19192__delegate(x,y,z,args);
});
G__19192.cljs$core$IFn$_invoke$arity$variadic = G__19192__delegate;
return G__19192;
})()
;
G__19191 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__19191__0.call(this);
case 1:
return G__19191__1.call(this,x);
case 2:
return G__19191__2.call(this,x,y);
case 3:
return G__19191__3.call(this,x,y,z);
default:
return G__19191__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19191.cljs$lang$maxFixedArity = 3;
G__19191.cljs$lang$applyTo = G__19191__4.cljs$lang$applyTo;
G__19191.cljs$core$IFn$_invoke$arity$0 = G__19191__0;
G__19191.cljs$core$IFn$_invoke$arity$1 = G__19191__1;
G__19191.cljs$core$IFn$_invoke$arity$2 = G__19191__2;
G__19191.cljs$core$IFn$_invoke$arity$3 = G__19191__3;
G__19191.cljs$core$IFn$_invoke$arity$variadic = G__19191__4.cljs$core$IFn$_invoke$arity$variadic;
return G__19191;
})()
});
var partial__3 = (function (f,arg1,arg2){
return (function() {
var G__19194 = null;
var G__19194__0 = (function (){
var G__19159 = arg1;
var G__19160 = arg2;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19159,G__19160) : f.call(null,G__19159,G__19160));
});
var G__19194__1 = (function (x){
var G__19161 = arg1;
var G__19162 = arg2;
var G__19163 = x;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__19161,G__19162,G__19163) : f.call(null,G__19161,G__19162,G__19163));
});
var G__19194__2 = (function (x,y){
var G__19164 = arg1;
var G__19165 = arg2;
var G__19166 = x;
var G__19167 = y;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__19164,G__19165,G__19166,G__19167) : f.call(null,G__19164,G__19165,G__19166,G__19167));
});
var G__19194__3 = (function (x,y,z){
var G__19168 = arg1;
var G__19169 = arg2;
var G__19170 = x;
var G__19171 = y;
var G__19172 = z;
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__19168,G__19169,G__19170,G__19171,G__19172) : f.call(null,G__19168,G__19169,G__19170,G__19171,G__19172));
});
var G__19194__4 = (function() { 
var G__19195__delegate = function (x,y,z,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,arg1,arg2,x,y,cljs.core.array_seq([z,args], 0));
};
var G__19195 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19195__delegate.call(this,x,y,z,args);};
G__19195.cljs$lang$maxFixedArity = 3;
G__19195.cljs$lang$applyTo = (function (arglist__19196){
var x = cljs.core.first(arglist__19196);
arglist__19196 = cljs.core.next(arglist__19196);
var y = cljs.core.first(arglist__19196);
arglist__19196 = cljs.core.next(arglist__19196);
var z = cljs.core.first(arglist__19196);
var args = cljs.core.rest(arglist__19196);
return G__19195__delegate(x,y,z,args);
});
G__19195.cljs$core$IFn$_invoke$arity$variadic = G__19195__delegate;
return G__19195;
})()
;
G__19194 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__19194__0.call(this);
case 1:
return G__19194__1.call(this,x);
case 2:
return G__19194__2.call(this,x,y);
case 3:
return G__19194__3.call(this,x,y,z);
default:
return G__19194__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19194.cljs$lang$maxFixedArity = 3;
G__19194.cljs$lang$applyTo = G__19194__4.cljs$lang$applyTo;
G__19194.cljs$core$IFn$_invoke$arity$0 = G__19194__0;
G__19194.cljs$core$IFn$_invoke$arity$1 = G__19194__1;
G__19194.cljs$core$IFn$_invoke$arity$2 = G__19194__2;
G__19194.cljs$core$IFn$_invoke$arity$3 = G__19194__3;
G__19194.cljs$core$IFn$_invoke$arity$variadic = G__19194__4.cljs$core$IFn$_invoke$arity$variadic;
return G__19194;
})()
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() {
var G__19197 = null;
var G__19197__0 = (function (){
var G__19173 = arg1;
var G__19174 = arg2;
var G__19175 = arg3;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__19173,G__19174,G__19175) : f.call(null,G__19173,G__19174,G__19175));
});
var G__19197__1 = (function (x){
var G__19176 = arg1;
var G__19177 = arg2;
var G__19178 = arg3;
var G__19179 = x;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__19176,G__19177,G__19178,G__19179) : f.call(null,G__19176,G__19177,G__19178,G__19179));
});
var G__19197__2 = (function (x,y){
var G__19180 = arg1;
var G__19181 = arg2;
var G__19182 = arg3;
var G__19183 = x;
var G__19184 = y;
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__19180,G__19181,G__19182,G__19183,G__19184) : f.call(null,G__19180,G__19181,G__19182,G__19183,G__19184));
});
var G__19197__3 = (function (x,y,z){
var G__19185 = arg1;
var G__19186 = arg2;
var G__19187 = arg3;
var G__19188 = x;
var G__19189 = y;
var G__19190 = z;
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__19185,G__19186,G__19187,G__19188,G__19189,G__19190) : f.call(null,G__19185,G__19186,G__19187,G__19188,G__19189,G__19190));
});
var G__19197__4 = (function() { 
var G__19198__delegate = function (x,y,z,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,arg1,arg2,arg3,x,cljs.core.array_seq([y,z,args], 0));
};
var G__19198 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19198__delegate.call(this,x,y,z,args);};
G__19198.cljs$lang$maxFixedArity = 3;
G__19198.cljs$lang$applyTo = (function (arglist__19199){
var x = cljs.core.first(arglist__19199);
arglist__19199 = cljs.core.next(arglist__19199);
var y = cljs.core.first(arglist__19199);
arglist__19199 = cljs.core.next(arglist__19199);
var z = cljs.core.first(arglist__19199);
var args = cljs.core.rest(arglist__19199);
return G__19198__delegate(x,y,z,args);
});
G__19198.cljs$core$IFn$_invoke$arity$variadic = G__19198__delegate;
return G__19198;
})()
;
G__19197 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__19197__0.call(this);
case 1:
return G__19197__1.call(this,x);
case 2:
return G__19197__2.call(this,x,y);
case 3:
return G__19197__3.call(this,x,y,z);
default:
return G__19197__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19197.cljs$lang$maxFixedArity = 3;
G__19197.cljs$lang$applyTo = G__19197__4.cljs$lang$applyTo;
G__19197.cljs$core$IFn$_invoke$arity$0 = G__19197__0;
G__19197.cljs$core$IFn$_invoke$arity$1 = G__19197__1;
G__19197.cljs$core$IFn$_invoke$arity$2 = G__19197__2;
G__19197.cljs$core$IFn$_invoke$arity$3 = G__19197__3;
G__19197.cljs$core$IFn$_invoke$arity$variadic = G__19197__4.cljs$core$IFn$_invoke$arity$variadic;
return G__19197;
})()
});
var partial__5 = (function() { 
var G__19200__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__19201__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,arg1,arg2,arg3,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(more,args));
};
var G__19201 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__19201__delegate.call(this,args);};
G__19201.cljs$lang$maxFixedArity = 0;
G__19201.cljs$lang$applyTo = (function (arglist__19202){
var args = cljs.core.seq(arglist__19202);
return G__19201__delegate(args);
});
G__19201.cljs$core$IFn$_invoke$arity$variadic = G__19201__delegate;
return G__19201;
})()
;
};
var G__19200 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__19200__delegate.call(this,f,arg1,arg2,arg3,more);};
G__19200.cljs$lang$maxFixedArity = 4;
G__19200.cljs$lang$applyTo = (function (arglist__19203){
var f = cljs.core.first(arglist__19203);
arglist__19203 = cljs.core.next(arglist__19203);
var arg1 = cljs.core.first(arglist__19203);
arglist__19203 = cljs.core.next(arglist__19203);
var arg2 = cljs.core.first(arglist__19203);
arglist__19203 = cljs.core.next(arglist__19203);
var arg3 = cljs.core.first(arglist__19203);
var more = cljs.core.rest(arglist__19203);
return G__19200__delegate(f,arg1,arg2,arg3,more);
});
G__19200.cljs$core$IFn$_invoke$arity$variadic = G__19200__delegate;
return G__19200;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return partial__1.call(this,f);
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$core$IFn$_invoke$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$core$IFn$_invoke$arity$1 = partial__1;
partial.cljs$core$IFn$_invoke$arity$2 = partial__2;
partial.cljs$core$IFn$_invoke$arity$3 = partial__3;
partial.cljs$core$IFn$_invoke$arity$4 = partial__4;
partial.cljs$core$IFn$_invoke$arity$variadic = partial__5.cljs$core$IFn$_invoke$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__19236 = null;
var G__19236__1 = (function (a){
var G__19220 = (((a == null))?x:a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19220) : f.call(null,G__19220));
});
var G__19236__2 = (function (a,b){
var G__19221 = (((a == null))?x:a);
var G__19222 = b;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19221,G__19222) : f.call(null,G__19221,G__19222));
});
var G__19236__3 = (function (a,b,c){
var G__19223 = (((a == null))?x:a);
var G__19224 = b;
var G__19225 = c;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__19223,G__19224,G__19225) : f.call(null,G__19223,G__19224,G__19225));
});
var G__19236__4 = (function() { 
var G__19237__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),b,c,ds);
};
var G__19237 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19237__delegate.call(this,a,b,c,ds);};
G__19237.cljs$lang$maxFixedArity = 3;
G__19237.cljs$lang$applyTo = (function (arglist__19238){
var a = cljs.core.first(arglist__19238);
arglist__19238 = cljs.core.next(arglist__19238);
var b = cljs.core.first(arglist__19238);
arglist__19238 = cljs.core.next(arglist__19238);
var c = cljs.core.first(arglist__19238);
var ds = cljs.core.rest(arglist__19238);
return G__19237__delegate(a,b,c,ds);
});
G__19237.cljs$core$IFn$_invoke$arity$variadic = G__19237__delegate;
return G__19237;
})()
;
G__19236 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__19236__1.call(this,a);
case 2:
return G__19236__2.call(this,a,b);
case 3:
return G__19236__3.call(this,a,b,c);
default:
return G__19236__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19236.cljs$lang$maxFixedArity = 3;
G__19236.cljs$lang$applyTo = G__19236__4.cljs$lang$applyTo;
G__19236.cljs$core$IFn$_invoke$arity$1 = G__19236__1;
G__19236.cljs$core$IFn$_invoke$arity$2 = G__19236__2;
G__19236.cljs$core$IFn$_invoke$arity$3 = G__19236__3;
G__19236.cljs$core$IFn$_invoke$arity$variadic = G__19236__4.cljs$core$IFn$_invoke$arity$variadic;
return G__19236;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__19239 = null;
var G__19239__2 = (function (a,b){
var G__19226 = (((a == null))?x:a);
var G__19227 = (((b == null))?y:b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19226,G__19227) : f.call(null,G__19226,G__19227));
});
var G__19239__3 = (function (a,b,c){
var G__19228 = (((a == null))?x:a);
var G__19229 = (((b == null))?y:b);
var G__19230 = c;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__19228,G__19229,G__19230) : f.call(null,G__19228,G__19229,G__19230));
});
var G__19239__4 = (function() { 
var G__19240__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__19240 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19240__delegate.call(this,a,b,c,ds);};
G__19240.cljs$lang$maxFixedArity = 3;
G__19240.cljs$lang$applyTo = (function (arglist__19241){
var a = cljs.core.first(arglist__19241);
arglist__19241 = cljs.core.next(arglist__19241);
var b = cljs.core.first(arglist__19241);
arglist__19241 = cljs.core.next(arglist__19241);
var c = cljs.core.first(arglist__19241);
var ds = cljs.core.rest(arglist__19241);
return G__19240__delegate(a,b,c,ds);
});
G__19240.cljs$core$IFn$_invoke$arity$variadic = G__19240__delegate;
return G__19240;
})()
;
G__19239 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__19239__2.call(this,a,b);
case 3:
return G__19239__3.call(this,a,b,c);
default:
return G__19239__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19239.cljs$lang$maxFixedArity = 3;
G__19239.cljs$lang$applyTo = G__19239__4.cljs$lang$applyTo;
G__19239.cljs$core$IFn$_invoke$arity$2 = G__19239__2;
G__19239.cljs$core$IFn$_invoke$arity$3 = G__19239__3;
G__19239.cljs$core$IFn$_invoke$arity$variadic = G__19239__4.cljs$core$IFn$_invoke$arity$variadic;
return G__19239;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__19242 = null;
var G__19242__2 = (function (a,b){
var G__19231 = (((a == null))?x:a);
var G__19232 = (((b == null))?y:b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19231,G__19232) : f.call(null,G__19231,G__19232));
});
var G__19242__3 = (function (a,b,c){
var G__19233 = (((a == null))?x:a);
var G__19234 = (((b == null))?y:b);
var G__19235 = (((c == null))?z:c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__19233,G__19234,G__19235) : f.call(null,G__19233,G__19234,G__19235));
});
var G__19242__4 = (function() { 
var G__19243__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__19243 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19243__delegate.call(this,a,b,c,ds);};
G__19243.cljs$lang$maxFixedArity = 3;
G__19243.cljs$lang$applyTo = (function (arglist__19244){
var a = cljs.core.first(arglist__19244);
arglist__19244 = cljs.core.next(arglist__19244);
var b = cljs.core.first(arglist__19244);
arglist__19244 = cljs.core.next(arglist__19244);
var c = cljs.core.first(arglist__19244);
var ds = cljs.core.rest(arglist__19244);
return G__19243__delegate(a,b,c,ds);
});
G__19243.cljs$core$IFn$_invoke$arity$variadic = G__19243__delegate;
return G__19243;
})()
;
G__19242 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__19242__2.call(this,a,b);
case 3:
return G__19242__3.call(this,a,b,c);
default:
return G__19242__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19242.cljs$lang$maxFixedArity = 3;
G__19242.cljs$lang$applyTo = G__19242__4.cljs$lang$applyTo;
G__19242.cljs$core$IFn$_invoke$arity$2 = G__19242__2;
G__19242.cljs$core$IFn$_invoke$arity$3 = G__19242__3;
G__19242.cljs$core$IFn$_invoke$arity$variadic = G__19242__4.cljs$core$IFn$_invoke$arity$variadic;
return G__19242;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fnil.cljs$core$IFn$_invoke$arity$2 = fnil__2;
fnil.cljs$core$IFn$_invoke$arity$3 = fnil__3;
fnil.cljs$core$IFn$_invoke$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi = (function mapi(idx,coll__$1){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll__$1);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s)){
var c = cljs.core.chunk_first(s);
var size = cljs.core.count(c);
var b = cljs.core.chunk_buffer(size);
var n__4618__auto___19293 = size;
var i_19294 = (0);
while(true){
if((i_19294 < n__4618__auto___19293)){
cljs.core.chunk_append(b,(function (){var G__19289 = (idx + i_19294);
var G__19290 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_19294);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19289,G__19290) : f.call(null,G__19289,G__19290));
})());

var G__19295 = (i_19294 + (1));
i_19294 = G__19295;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons(cljs.core.chunk(b),mapi((idx + size),cljs.core.chunk_rest(s)));
} else {
return cljs.core.cons((function (){var G__19291 = idx;
var G__19292 = cljs.core.first(s);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19291,G__19292) : f.call(null,G__19291,G__19292));
})(),mapi((idx + (1)),cljs.core.rest(s)));
}
} else {
return null;
}
}),null,null));
});
return mapi((0),coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.  Returns a transducer when no collection is provided.
*/
cljs.core.keep = (function() {
var keep = null;
var keep__1 = (function (f){
return (function (rf){
return (function() {
var G__19314 = null;
var G__19314__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__19314__1 = (function (result){
var G__19308 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__19308) : rf.call(null,G__19308));
});
var G__19314__2 = (function (result,input){
var v = (function (){var G__19309 = input;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19309) : f.call(null,G__19309));
})();
if((v == null)){
return result;
} else {
var G__19310 = result;
var G__19311 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__19310,G__19311) : rf.call(null,G__19310,G__19311));
}
});
G__19314 = function(result,input){
switch(arguments.length){
case 0:
return G__19314__0.call(this);
case 1:
return G__19314__1.call(this,result);
case 2:
return G__19314__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19314.cljs$core$IFn$_invoke$arity$0 = G__19314__0;
G__19314.cljs$core$IFn$_invoke$arity$1 = G__19314__1;
G__19314.cljs$core$IFn$_invoke$arity$2 = G__19314__2;
return G__19314;
})()
});
});
var keep__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s)){
var c = cljs.core.chunk_first(s);
var size = cljs.core.count(c);
var b = cljs.core.chunk_buffer(size);
var n__4618__auto___19315 = size;
var i_19316 = (0);
while(true){
if((i_19316 < n__4618__auto___19315)){
var x_19317 = (function (){var G__19312 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_19316);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19312) : f.call(null,G__19312));
})();
if((x_19317 == null)){
} else {
cljs.core.chunk_append(b,x_19317);
}

var G__19318 = (i_19316 + (1));
i_19316 = G__19318;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons(cljs.core.chunk(b),keep.cljs$core$IFn$_invoke$arity$2(f,cljs.core.chunk_rest(s)));
} else {
var x = (function (){var G__19313 = cljs.core.first(s);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19313) : f.call(null,G__19313));
})();
if((x == null)){
return keep.cljs$core$IFn$_invoke$arity$2(f,cljs.core.rest(s));
} else {
return cljs.core.cons(x,keep.cljs$core$IFn$_invoke$arity$2(f,cljs.core.rest(s)));
}
}
} else {
return null;
}
}),null,null));
});
keep = function(f,coll){
switch(arguments.length){
case 1:
return keep__1.call(this,f);
case 2:
return keep__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keep.cljs$core$IFn$_invoke$arity$1 = keep__1;
keep.cljs$core$IFn$_invoke$arity$2 = keep__2;
return keep;
})()
;

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 6455296;
this.cljs$lang$protocol_mask$partition1$ = 16386;
})
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__19319 = this$__$1;
return goog.getUid(G__19319);
});

cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__19320 = cljs.core.seq(self__.watches);
var chunk__19321 = null;
var count__19322 = (0);
var i__19323 = (0);
while(true){
if((i__19323 < count__19322)){
var vec__19324 = chunk__19321.cljs$core$IIndexed$_nth$arity$2(null,i__19323);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19324,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19324,(1),null);
var G__19325_19334 = key;
var G__19326_19335 = this$__$1;
var G__19327_19336 = oldval;
var G__19328_19337 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__19325_19334,G__19326_19335,G__19327_19336,G__19328_19337) : f.call(null,G__19325_19334,G__19326_19335,G__19327_19336,G__19328_19337));

var G__19338 = seq__19320;
var G__19339 = chunk__19321;
var G__19340 = count__19322;
var G__19341 = (i__19323 + (1));
seq__19320 = G__19338;
chunk__19321 = G__19339;
count__19322 = G__19340;
i__19323 = G__19341;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__19320);
if(temp__4126__auto__){
var seq__19320__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19320__$1)){
var c__4518__auto__ = cljs.core.chunk_first(seq__19320__$1);
var G__19342 = cljs.core.chunk_rest(seq__19320__$1);
var G__19343 = c__4518__auto__;
var G__19344 = cljs.core.count(c__4518__auto__);
var G__19345 = (0);
seq__19320 = G__19342;
chunk__19321 = G__19343;
count__19322 = G__19344;
i__19323 = G__19345;
continue;
} else {
var vec__19329 = cljs.core.first(seq__19320__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19329,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19329,(1),null);
var G__19330_19346 = key;
var G__19331_19347 = this$__$1;
var G__19332_19348 = oldval;
var G__19333_19349 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__19330_19346,G__19331_19347,G__19332_19348,G__19333_19349) : f.call(null,G__19330_19346,G__19331_19347,G__19332_19348,G__19333_19349));

var G__19350 = cljs.core.next(seq__19320__$1);
var G__19351 = null;
var G__19352 = (0);
var G__19353 = (0);
seq__19320 = G__19350;
chunk__19321 = G__19351;
count__19322 = G__19352;
i__19323 = G__19353;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);

return this$__$1;
});

cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});

cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

cljs.core.Atom.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Atom.cljs$lang$type = true;

cljs.core.Atom.cljs$lang$ctorStr = "cljs.core/Atom";

cljs.core.Atom.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/Atom");
});

cljs.core.__GT_Atom = (function __GT_Atom(state,meta,validator,watches){
return (new cljs.core.Atom(state,meta,validator,watches));
});

/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__19357__delegate = function (x,p__19354){
var map__19356 = p__19354;
var map__19356__$1 = ((cljs.core.seq_QMARK_(map__19356))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19356):map__19356);
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19356__$1,cljs.core.constant$keyword$13);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19356__$1,cljs.core.constant$keyword$3);
return (new cljs.core.Atom(x,meta,validator,null));
};
var G__19357 = function (x,var_args){
var p__19354 = null;
if (arguments.length > 1) {
  p__19354 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__19357__delegate.call(this,x,p__19354);};
G__19357.cljs$lang$maxFixedArity = 1;
G__19357.cljs$lang$applyTo = (function (arglist__19358){
var x = cljs.core.first(arglist__19358);
var p__19354 = cljs.core.rest(arglist__19358);
return G__19357__delegate(x,p__19354);
});
G__19357.cljs$core$IFn$_invoke$arity$variadic = G__19357__delegate;
return G__19357;
})()
;
atom = function(x,var_args){
var p__19354 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
if((a instanceof cljs.core.Atom)){
var validate = a.validator;
if((validate == null)){
} else {
if(cljs.core.truth_((function (){var G__19361 = new_value;
return (validate.cljs$core$IFn$_invoke$arity$1 ? validate.cljs$core$IFn$_invoke$arity$1(G__19361) : validate.call(null,G__19361));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str((function (){var G__19362 = cljs.core.list(new cljs.core.Symbol(null,"validate","validate",1439230700,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null));
return (cljs.core.pr_str.cljs$core$IFn$_invoke$arity$1 ? cljs.core.pr_str.cljs$core$IFn$_invoke$arity$1(G__19362) : cljs.core.pr_str.call(null,G__19362));
})())].join('')));
}
}

var old_value = a.state;
a.state = new_value;

if((a.watches == null)){
} else {
cljs.core._notify_watches(a,old_value,new_value);
}

return new_value;
} else {
return cljs.core._reset_BANG_(a,new_value);
}
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
if((a instanceof cljs.core.Atom)){
return cljs.core.reset_BANG_(a,(function (){var G__19369 = a.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19369) : f.call(null,G__19369));
})());
} else {
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$2(a,f);
}
});
var swap_BANG___3 = (function (a,f,x){
if((a instanceof cljs.core.Atom)){
return cljs.core.reset_BANG_(a,(function (){var G__19370 = a.state;
var G__19371 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19370,G__19371) : f.call(null,G__19370,G__19371));
})());
} else {
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$3(a,f,x);
}
});
var swap_BANG___4 = (function (a,f,x,y){
if((a instanceof cljs.core.Atom)){
return cljs.core.reset_BANG_(a,(function (){var G__19372 = a.state;
var G__19373 = x;
var G__19374 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__19372,G__19373,G__19374) : f.call(null,G__19372,G__19373,G__19374));
})());
} else {
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,f,x,y);
}
});
var swap_BANG___5 = (function() { 
var G__19375__delegate = function (a,f,x,y,more){
if((a instanceof cljs.core.Atom)){
return cljs.core.reset_BANG_(a,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,a.state,x,y,more));
} else {
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$5(a,f,x,y,more);
}
};
var G__19375 = function (a,f,x,y,var_args){
var more = null;
if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__19375__delegate.call(this,a,f,x,y,more);};
G__19375.cljs$lang$maxFixedArity = 4;
G__19375.cljs$lang$applyTo = (function (arglist__19376){
var a = cljs.core.first(arglist__19376);
arglist__19376 = cljs.core.next(arglist__19376);
var f = cljs.core.first(arglist__19376);
arglist__19376 = cljs.core.next(arglist__19376);
var x = cljs.core.first(arglist__19376);
arglist__19376 = cljs.core.next(arglist__19376);
var y = cljs.core.first(arglist__19376);
var more = cljs.core.rest(arglist__19376);
return G__19375__delegate(a,f,x,y,more);
});
G__19375.cljs$core$IFn$_invoke$arity$variadic = G__19375__delegate;
return G__19375;
})()
;
swap_BANG_ = function(a,f,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
default:
return swap_BANG___5.cljs$core$IFn$_invoke$arity$variadic(a,f,x,y, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_BANG_.cljs$lang$maxFixedArity = 4;
swap_BANG_.cljs$lang$applyTo = swap_BANG___5.cljs$lang$applyTo;
swap_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_BANG___2;
swap_BANG_.cljs$core$IFn$_invoke$arity$3 = swap_BANG___3;
swap_BANG_.cljs$core$IFn$_invoke$arity$4 = swap_BANG___4;
swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_BANG___5.cljs$core$IFn$_invoke$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is equal to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a.cljs$core$IDeref$_deref$arity$1(null),oldval)){
cljs.core.reset_BANG_(a,newval);

return true;
} else {
return false;
}
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});

/**
* @constructor
*/
cljs.core.Volatile = (function (state){
this.state = state;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Volatile.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

cljs.core.Volatile.prototype.cljs$core$IVolatile$ = true;

cljs.core.Volatile.prototype.cljs$core$IVolatile$_vreset_BANG_$arity$2 = (function (_,new_state){
var self__ = this;
var ___$1 = this;
return self__.state = new_state;
});

cljs.core.Volatile.cljs$lang$type = true;

cljs.core.Volatile.cljs$lang$ctorStr = "cljs.core/Volatile";

cljs.core.Volatile.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/Volatile");
});

cljs.core.__GT_Volatile = (function __GT_Volatile(state){
return (new cljs.core.Volatile(state));
});

/**
* Creates and returns a Volatile with an initial value of val.
*/
cljs.core.volatile_BANG_ = (function volatile_BANG_(val){
return (new cljs.core.Volatile(val));
});
/**
* Returns true if x is a volatile.
*/
cljs.core.volatile_QMARK_ = (function volatile_QMARK_(x){
return (x instanceof cljs.core.Volatile);
});
/**
* Sets the value of volatile to newval without regard for the
* current value. Returns newval.
*/
cljs.core.vreset_BANG_ = (function vreset_BANG_(vol,newval){
return cljs.core._vreset_BANG_(vol,newval);
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.  Returns a stateful transducer when no collection is
* provided.
*/
cljs.core.keep_indexed = (function() {
var keep_indexed = null;
var keep_indexed__1 = (function (f){
return (function (rf){
var ia = cljs.core.volatile_BANG_((-1));
return ((function (ia){
return (function() {
var G__19443 = null;
var G__19443__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__19443__1 = (function (result){
var G__19410 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__19410) : rf.call(null,G__19410));
});
var G__19443__2 = (function (result,input){
var i = ia.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(ia.cljs$core$IDeref$_deref$arity$1(null) + (1)));
var v = (function (){var G__19411 = i;
var G__19412 = input;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19411,G__19412) : f.call(null,G__19411,G__19412));
})();
if((v == null)){
return result;
} else {
var G__19413 = result;
var G__19414 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__19413,G__19414) : rf.call(null,G__19413,G__19414));
}
});
G__19443 = function(result,input){
switch(arguments.length){
case 0:
return G__19443__0.call(this);
case 1:
return G__19443__1.call(this,result);
case 2:
return G__19443__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19443.cljs$core$IFn$_invoke$arity$0 = G__19443__0;
G__19443.cljs$core$IFn$_invoke$arity$1 = G__19443__1;
G__19443.cljs$core$IFn$_invoke$arity$2 = G__19443__2;
return G__19443;
})()
;})(ia))
});
});
var keep_indexed__2 = (function (f,coll){
var keepi = (function keepi(idx,coll__$1){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll__$1);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s)){
var c = cljs.core.chunk_first(s);
var size = cljs.core.count(c);
var b = cljs.core.chunk_buffer(size);
var n__4618__auto___19444 = size;
var i_19445 = (0);
while(true){
if((i_19445 < n__4618__auto___19444)){
var x_19446 = (function (){var G__19439 = (idx + i_19445);
var G__19440 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_19445);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19439,G__19440) : f.call(null,G__19439,G__19440));
})();
if((x_19446 == null)){
} else {
cljs.core.chunk_append(b,x_19446);
}

var G__19447 = (i_19445 + (1));
i_19445 = G__19447;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons(cljs.core.chunk(b),keepi((idx + size),cljs.core.chunk_rest(s)));
} else {
var x = (function (){var G__19441 = idx;
var G__19442 = cljs.core.first(s);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19441,G__19442) : f.call(null,G__19441,G__19442));
})();
if((x == null)){
return keepi((idx + (1)),cljs.core.rest(s));
} else {
return cljs.core.cons(x,keepi((idx + (1)),cljs.core.rest(s)));
}
}
} else {
return null;
}
}),null,null));
});
return keepi((0),coll);
});
keep_indexed = function(f,coll){
switch(arguments.length){
case 1:
return keep_indexed__1.call(this,f);
case 2:
return keep_indexed__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keep_indexed.cljs$core$IFn$_invoke$arity$1 = keep_indexed__1;
keep_indexed.cljs$core$IFn$_invoke$arity$2 = keep_indexed__2;
return keep_indexed;
})()
;
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$((function (){var G__19661 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__19661) : p.call(null,G__19661));
})());
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3719__auto__ = (function (){var G__19663 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__19663) : p.call(null,G__19663));
})();
if(cljs.core.truth_(and__3719__auto__)){
var G__19664 = y;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__19664) : p.call(null,G__19664));
} else {
return and__3719__auto__;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3719__auto__ = (function (){var G__19666 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__19666) : p.call(null,G__19666));
})();
if(cljs.core.truth_(and__3719__auto__)){
var and__3719__auto____$1 = (function (){var G__19668 = y;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__19668) : p.call(null,G__19668));
})();
if(cljs.core.truth_(and__3719__auto____$1)){
var G__19669 = z;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__19669) : p.call(null,G__19669));
} else {
return and__3719__auto____$1;
}
} else {
return and__3719__auto__;
}
})());
});
var ep1__4 = (function() { 
var G__19838__delegate = function (x,y,z,args){
return cljs.core.boolean$((ep1.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_(p,args)));
};
var G__19838 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19838__delegate.call(this,x,y,z,args);};
G__19838.cljs$lang$maxFixedArity = 3;
G__19838.cljs$lang$applyTo = (function (arglist__19839){
var x = cljs.core.first(arglist__19839);
arglist__19839 = cljs.core.next(arglist__19839);
var y = cljs.core.first(arglist__19839);
arglist__19839 = cljs.core.next(arglist__19839);
var z = cljs.core.first(arglist__19839);
var args = cljs.core.rest(arglist__19839);
return G__19838__delegate(x,y,z,args);
});
G__19838.cljs$core$IFn$_invoke$arity$variadic = G__19838__delegate;
return G__19838;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$core$IFn$_invoke$arity$0 = ep1__0;
ep1.cljs$core$IFn$_invoke$arity$1 = ep1__1;
ep1.cljs$core$IFn$_invoke$arity$2 = ep1__2;
ep1.cljs$core$IFn$_invoke$arity$3 = ep1__3;
ep1.cljs$core$IFn$_invoke$arity$variadic = ep1__4.cljs$core$IFn$_invoke$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$((function (){var and__3719__auto__ = (function (){var G__19701 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__19701) : p1.call(null,G__19701));
})();
if(cljs.core.truth_(and__3719__auto__)){
var G__19702 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__19702) : p2.call(null,G__19702));
} else {
return and__3719__auto__;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3719__auto__ = (function (){var G__19704 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__19704) : p1.call(null,G__19704));
})();
if(cljs.core.truth_(and__3719__auto__)){
var and__3719__auto____$1 = (function (){var G__19706 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__19706) : p1.call(null,G__19706));
})();
if(cljs.core.truth_(and__3719__auto____$1)){
var and__3719__auto____$2 = (function (){var G__19708 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__19708) : p2.call(null,G__19708));
})();
if(cljs.core.truth_(and__3719__auto____$2)){
var G__19709 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__19709) : p2.call(null,G__19709));
} else {
return and__3719__auto____$2;
}
} else {
return and__3719__auto____$1;
}
} else {
return and__3719__auto__;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3719__auto__ = (function (){var G__19711 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__19711) : p1.call(null,G__19711));
})();
if(cljs.core.truth_(and__3719__auto__)){
var and__3719__auto____$1 = (function (){var G__19713 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__19713) : p1.call(null,G__19713));
})();
if(cljs.core.truth_(and__3719__auto____$1)){
var and__3719__auto____$2 = (function (){var G__19715 = z;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__19715) : p1.call(null,G__19715));
})();
if(cljs.core.truth_(and__3719__auto____$2)){
var and__3719__auto____$3 = (function (){var G__19717 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__19717) : p2.call(null,G__19717));
})();
if(cljs.core.truth_(and__3719__auto____$3)){
var and__3719__auto____$4 = (function (){var G__19719 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__19719) : p2.call(null,G__19719));
})();
if(cljs.core.truth_(and__3719__auto____$4)){
var G__19720 = z;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__19720) : p2.call(null,G__19720));
} else {
return and__3719__auto____$4;
}
} else {
return and__3719__auto____$3;
}
} else {
return and__3719__auto____$2;
}
} else {
return and__3719__auto____$1;
}
} else {
return and__3719__auto__;
}
})());
});
var ep2__4 = (function() { 
var G__19840__delegate = function (x,y,z,args){
return cljs.core.boolean$((ep2.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_((function (p1__19448_SHARP_){
var and__3719__auto__ = (function (){var G__19725 = p1__19448_SHARP_;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__19725) : p1.call(null,G__19725));
})();
if(cljs.core.truth_(and__3719__auto__)){
var G__19726 = p1__19448_SHARP_;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__19726) : p2.call(null,G__19726));
} else {
return and__3719__auto__;
}
}),args)));
};
var G__19840 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19840__delegate.call(this,x,y,z,args);};
G__19840.cljs$lang$maxFixedArity = 3;
G__19840.cljs$lang$applyTo = (function (arglist__19841){
var x = cljs.core.first(arglist__19841);
arglist__19841 = cljs.core.next(arglist__19841);
var y = cljs.core.first(arglist__19841);
arglist__19841 = cljs.core.next(arglist__19841);
var z = cljs.core.first(arglist__19841);
var args = cljs.core.rest(arglist__19841);
return G__19840__delegate(x,y,z,args);
});
G__19840.cljs$core$IFn$_invoke$arity$variadic = G__19840__delegate;
return G__19840;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$core$IFn$_invoke$arity$0 = ep2__0;
ep2.cljs$core$IFn$_invoke$arity$1 = ep2__1;
ep2.cljs$core$IFn$_invoke$arity$2 = ep2__2;
ep2.cljs$core$IFn$_invoke$arity$3 = ep2__3;
ep2.cljs$core$IFn$_invoke$arity$variadic = ep2__4.cljs$core$IFn$_invoke$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$((function (){var and__3719__auto__ = (function (){var G__19772 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__19772) : p1.call(null,G__19772));
})();
if(cljs.core.truth_(and__3719__auto__)){
var and__3719__auto____$1 = (function (){var G__19774 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__19774) : p2.call(null,G__19774));
})();
if(cljs.core.truth_(and__3719__auto____$1)){
var G__19775 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__19775) : p3.call(null,G__19775));
} else {
return and__3719__auto____$1;
}
} else {
return and__3719__auto__;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3719__auto__ = (function (){var G__19777 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__19777) : p1.call(null,G__19777));
})();
if(cljs.core.truth_(and__3719__auto__)){
var and__3719__auto____$1 = (function (){var G__19779 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__19779) : p2.call(null,G__19779));
})();
if(cljs.core.truth_(and__3719__auto____$1)){
var and__3719__auto____$2 = (function (){var G__19781 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__19781) : p3.call(null,G__19781));
})();
if(cljs.core.truth_(and__3719__auto____$2)){
var and__3719__auto____$3 = (function (){var G__19783 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__19783) : p1.call(null,G__19783));
})();
if(cljs.core.truth_(and__3719__auto____$3)){
var and__3719__auto____$4 = (function (){var G__19785 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__19785) : p2.call(null,G__19785));
})();
if(cljs.core.truth_(and__3719__auto____$4)){
var G__19786 = y;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__19786) : p3.call(null,G__19786));
} else {
return and__3719__auto____$4;
}
} else {
return and__3719__auto____$3;
}
} else {
return and__3719__auto____$2;
}
} else {
return and__3719__auto____$1;
}
} else {
return and__3719__auto__;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3719__auto__ = (function (){var G__19788 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__19788) : p1.call(null,G__19788));
})();
if(cljs.core.truth_(and__3719__auto__)){
var and__3719__auto____$1 = (function (){var G__19790 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__19790) : p2.call(null,G__19790));
})();
if(cljs.core.truth_(and__3719__auto____$1)){
var and__3719__auto____$2 = (function (){var G__19792 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__19792) : p3.call(null,G__19792));
})();
if(cljs.core.truth_(and__3719__auto____$2)){
var and__3719__auto____$3 = (function (){var G__19794 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__19794) : p1.call(null,G__19794));
})();
if(cljs.core.truth_(and__3719__auto____$3)){
var and__3719__auto____$4 = (function (){var G__19796 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__19796) : p2.call(null,G__19796));
})();
if(cljs.core.truth_(and__3719__auto____$4)){
var and__3719__auto____$5 = (function (){var G__19798 = y;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__19798) : p3.call(null,G__19798));
})();
if(cljs.core.truth_(and__3719__auto____$5)){
var and__3719__auto____$6 = (function (){var G__19800 = z;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__19800) : p1.call(null,G__19800));
})();
if(cljs.core.truth_(and__3719__auto____$6)){
var and__3719__auto____$7 = (function (){var G__19802 = z;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__19802) : p2.call(null,G__19802));
})();
if(cljs.core.truth_(and__3719__auto____$7)){
var G__19803 = z;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__19803) : p3.call(null,G__19803));
} else {
return and__3719__auto____$7;
}
} else {
return and__3719__auto____$6;
}
} else {
return and__3719__auto____$5;
}
} else {
return and__3719__auto____$4;
}
} else {
return and__3719__auto____$3;
}
} else {
return and__3719__auto____$2;
}
} else {
return and__3719__auto____$1;
}
} else {
return and__3719__auto__;
}
})());
});
var ep3__4 = (function() { 
var G__19842__delegate = function (x,y,z,args){
return cljs.core.boolean$((ep3.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_((function (p1__19449_SHARP_){
var and__3719__auto__ = (function (){var G__19810 = p1__19449_SHARP_;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__19810) : p1.call(null,G__19810));
})();
if(cljs.core.truth_(and__3719__auto__)){
var and__3719__auto____$1 = (function (){var G__19812 = p1__19449_SHARP_;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__19812) : p2.call(null,G__19812));
})();
if(cljs.core.truth_(and__3719__auto____$1)){
var G__19813 = p1__19449_SHARP_;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__19813) : p3.call(null,G__19813));
} else {
return and__3719__auto____$1;
}
} else {
return and__3719__auto__;
}
}),args)));
};
var G__19842 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19842__delegate.call(this,x,y,z,args);};
G__19842.cljs$lang$maxFixedArity = 3;
G__19842.cljs$lang$applyTo = (function (arglist__19843){
var x = cljs.core.first(arglist__19843);
arglist__19843 = cljs.core.next(arglist__19843);
var y = cljs.core.first(arglist__19843);
arglist__19843 = cljs.core.next(arglist__19843);
var z = cljs.core.first(arglist__19843);
var args = cljs.core.rest(arglist__19843);
return G__19842__delegate(x,y,z,args);
});
G__19842.cljs$core$IFn$_invoke$arity$variadic = G__19842__delegate;
return G__19842;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$core$IFn$_invoke$arity$0 = ep3__0;
ep3.cljs$core$IFn$_invoke$arity$1 = ep3__1;
ep3.cljs$core$IFn$_invoke$arity$2 = ep3__2;
ep3.cljs$core$IFn$_invoke$arity$3 = ep3__3;
ep3.cljs$core$IFn$_invoke$arity$variadic = ep3__4.cljs$core$IFn$_invoke$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__19844__delegate = function (p1,p2,p3,ps){
var ps__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(p1,p2,p3,ps);
return ((function (ps__$1){
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__19450_SHARP_){
var G__19829 = x;
return (p1__19450_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19450_SHARP_.cljs$core$IFn$_invoke$arity$1(G__19829) : p1__19450_SHARP_.call(null,G__19829));
});})(ps__$1))
,ps__$1);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__19451_SHARP_){
var and__3719__auto__ = (function (){var G__19831 = x;
return (p1__19451_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19451_SHARP_.cljs$core$IFn$_invoke$arity$1(G__19831) : p1__19451_SHARP_.call(null,G__19831));
})();
if(cljs.core.truth_(and__3719__auto__)){
var G__19832 = y;
return (p1__19451_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19451_SHARP_.cljs$core$IFn$_invoke$arity$1(G__19832) : p1__19451_SHARP_.call(null,G__19832));
} else {
return and__3719__auto__;
}
});})(ps__$1))
,ps__$1);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__19452_SHARP_){
var and__3719__auto__ = (function (){var G__19834 = x;
return (p1__19452_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19452_SHARP_.cljs$core$IFn$_invoke$arity$1(G__19834) : p1__19452_SHARP_.call(null,G__19834));
})();
if(cljs.core.truth_(and__3719__auto__)){
var and__3719__auto____$1 = (function (){var G__19836 = y;
return (p1__19452_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19452_SHARP_.cljs$core$IFn$_invoke$arity$1(G__19836) : p1__19452_SHARP_.call(null,G__19836));
})();
if(cljs.core.truth_(and__3719__auto____$1)){
var G__19837 = z;
return (p1__19452_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19452_SHARP_.cljs$core$IFn$_invoke$arity$1(G__19837) : p1__19452_SHARP_.call(null,G__19837));
} else {
return and__3719__auto____$1;
}
} else {
return and__3719__auto__;
}
});})(ps__$1))
,ps__$1);
});
var epn__4 = (function() { 
var G__19845__delegate = function (x,y,z,args){
return cljs.core.boolean$((epn.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__19453_SHARP_){
return cljs.core.every_QMARK_(p1__19453_SHARP_,args);
});})(ps__$1))
,ps__$1)));
};
var G__19845 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19845__delegate.call(this,x,y,z,args);};
G__19845.cljs$lang$maxFixedArity = 3;
G__19845.cljs$lang$applyTo = (function (arglist__19846){
var x = cljs.core.first(arglist__19846);
arglist__19846 = cljs.core.next(arglist__19846);
var y = cljs.core.first(arglist__19846);
arglist__19846 = cljs.core.next(arglist__19846);
var z = cljs.core.first(arglist__19846);
var args = cljs.core.rest(arglist__19846);
return G__19845__delegate(x,y,z,args);
});
G__19845.cljs$core$IFn$_invoke$arity$variadic = G__19845__delegate;
return G__19845;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$core$IFn$_invoke$arity$0 = epn__0;
epn.cljs$core$IFn$_invoke$arity$1 = epn__1;
epn.cljs$core$IFn$_invoke$arity$2 = epn__2;
epn.cljs$core$IFn$_invoke$arity$3 = epn__3;
epn.cljs$core$IFn$_invoke$arity$variadic = epn__4.cljs$core$IFn$_invoke$arity$variadic;
return epn;
})()
;})(ps__$1))
};
var G__19844 = function (p1,p2,p3,var_args){
var ps = null;
if (arguments.length > 3) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19844__delegate.call(this,p1,p2,p3,ps);};
G__19844.cljs$lang$maxFixedArity = 3;
G__19844.cljs$lang$applyTo = (function (arglist__19847){
var p1 = cljs.core.first(arglist__19847);
arglist__19847 = cljs.core.next(arglist__19847);
var p2 = cljs.core.first(arglist__19847);
arglist__19847 = cljs.core.next(arglist__19847);
var p3 = cljs.core.first(arglist__19847);
var ps = cljs.core.rest(arglist__19847);
return G__19844__delegate(p1,p2,p3,ps);
});
G__19844.cljs$core$IFn$_invoke$arity$variadic = G__19844__delegate;
return G__19844;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$core$IFn$_invoke$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$core$IFn$_invoke$arity$1 = every_pred__1;
every_pred.cljs$core$IFn$_invoke$arity$2 = every_pred__2;
every_pred.cljs$core$IFn$_invoke$arity$3 = every_pred__3;
every_pred.cljs$core$IFn$_invoke$arity$variadic = every_pred__4.cljs$core$IFn$_invoke$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
var G__20053 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__20053) : p.call(null,G__20053));
});
var sp1__2 = (function (x,y){
var or__3731__auto__ = (function (){var G__20055 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__20055) : p.call(null,G__20055));
})();
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
var G__20056 = y;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__20056) : p.call(null,G__20056));
}
});
var sp1__3 = (function (x,y,z){
var or__3731__auto__ = (function (){var G__20058 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__20058) : p.call(null,G__20058));
})();
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (function (){var G__20060 = y;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__20060) : p.call(null,G__20060));
})();
if(cljs.core.truth_(or__3731__auto____$1)){
return or__3731__auto____$1;
} else {
var G__20061 = z;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__20061) : p.call(null,G__20061));
}
}
});
var sp1__4 = (function() { 
var G__20222__delegate = function (x,y,z,args){
var or__3731__auto__ = sp1.cljs$core$IFn$_invoke$arity$3(x,y,z);
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
return cljs.core.some(p,args);
}
};
var G__20222 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20222__delegate.call(this,x,y,z,args);};
G__20222.cljs$lang$maxFixedArity = 3;
G__20222.cljs$lang$applyTo = (function (arglist__20223){
var x = cljs.core.first(arglist__20223);
arglist__20223 = cljs.core.next(arglist__20223);
var y = cljs.core.first(arglist__20223);
arglist__20223 = cljs.core.next(arglist__20223);
var z = cljs.core.first(arglist__20223);
var args = cljs.core.rest(arglist__20223);
return G__20222__delegate(x,y,z,args);
});
G__20222.cljs$core$IFn$_invoke$arity$variadic = G__20222__delegate;
return G__20222;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$core$IFn$_invoke$arity$0 = sp1__0;
sp1.cljs$core$IFn$_invoke$arity$1 = sp1__1;
sp1.cljs$core$IFn$_invoke$arity$2 = sp1__2;
sp1.cljs$core$IFn$_invoke$arity$3 = sp1__3;
sp1.cljs$core$IFn$_invoke$arity$variadic = sp1__4.cljs$core$IFn$_invoke$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3731__auto__ = (function (){var G__20093 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__20093) : p1.call(null,G__20093));
})();
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
var G__20094 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__20094) : p2.call(null,G__20094));
}
});
var sp2__2 = (function (x,y){
var or__3731__auto__ = (function (){var G__20096 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__20096) : p1.call(null,G__20096));
})();
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (function (){var G__20098 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__20098) : p1.call(null,G__20098));
})();
if(cljs.core.truth_(or__3731__auto____$1)){
return or__3731__auto____$1;
} else {
var or__3731__auto____$2 = (function (){var G__20100 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__20100) : p2.call(null,G__20100));
})();
if(cljs.core.truth_(or__3731__auto____$2)){
return or__3731__auto____$2;
} else {
var G__20101 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__20101) : p2.call(null,G__20101));
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3731__auto__ = (function (){var G__20103 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__20103) : p1.call(null,G__20103));
})();
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (function (){var G__20105 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__20105) : p1.call(null,G__20105));
})();
if(cljs.core.truth_(or__3731__auto____$1)){
return or__3731__auto____$1;
} else {
var or__3731__auto____$2 = (function (){var G__20107 = z;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__20107) : p1.call(null,G__20107));
})();
if(cljs.core.truth_(or__3731__auto____$2)){
return or__3731__auto____$2;
} else {
var or__3731__auto____$3 = (function (){var G__20109 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__20109) : p2.call(null,G__20109));
})();
if(cljs.core.truth_(or__3731__auto____$3)){
return or__3731__auto____$3;
} else {
var or__3731__auto____$4 = (function (){var G__20111 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__20111) : p2.call(null,G__20111));
})();
if(cljs.core.truth_(or__3731__auto____$4)){
return or__3731__auto____$4;
} else {
var G__20112 = z;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__20112) : p2.call(null,G__20112));
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__20224__delegate = function (x,y,z,args){
var or__3731__auto__ = sp2.cljs$core$IFn$_invoke$arity$3(x,y,z);
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
return cljs.core.some(((function (or__3731__auto__){
return (function (p1__19848_SHARP_){
var or__3731__auto____$1 = (function (){var G__20114 = p1__19848_SHARP_;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__20114) : p1.call(null,G__20114));
})();
if(cljs.core.truth_(or__3731__auto____$1)){
return or__3731__auto____$1;
} else {
var G__20115 = p1__19848_SHARP_;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__20115) : p2.call(null,G__20115));
}
});})(or__3731__auto__))
,args);
}
};
var G__20224 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20224__delegate.call(this,x,y,z,args);};
G__20224.cljs$lang$maxFixedArity = 3;
G__20224.cljs$lang$applyTo = (function (arglist__20225){
var x = cljs.core.first(arglist__20225);
arglist__20225 = cljs.core.next(arglist__20225);
var y = cljs.core.first(arglist__20225);
arglist__20225 = cljs.core.next(arglist__20225);
var z = cljs.core.first(arglist__20225);
var args = cljs.core.rest(arglist__20225);
return G__20224__delegate(x,y,z,args);
});
G__20224.cljs$core$IFn$_invoke$arity$variadic = G__20224__delegate;
return G__20224;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$core$IFn$_invoke$arity$0 = sp2__0;
sp2.cljs$core$IFn$_invoke$arity$1 = sp2__1;
sp2.cljs$core$IFn$_invoke$arity$2 = sp2__2;
sp2.cljs$core$IFn$_invoke$arity$3 = sp2__3;
sp2.cljs$core$IFn$_invoke$arity$variadic = sp2__4.cljs$core$IFn$_invoke$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3731__auto__ = (function (){var G__20161 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__20161) : p1.call(null,G__20161));
})();
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (function (){var G__20163 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__20163) : p2.call(null,G__20163));
})();
if(cljs.core.truth_(or__3731__auto____$1)){
return or__3731__auto____$1;
} else {
var G__20164 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__20164) : p3.call(null,G__20164));
}
}
});
var sp3__2 = (function (x,y){
var or__3731__auto__ = (function (){var G__20166 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__20166) : p1.call(null,G__20166));
})();
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (function (){var G__20168 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__20168) : p2.call(null,G__20168));
})();
if(cljs.core.truth_(or__3731__auto____$1)){
return or__3731__auto____$1;
} else {
var or__3731__auto____$2 = (function (){var G__20170 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__20170) : p3.call(null,G__20170));
})();
if(cljs.core.truth_(or__3731__auto____$2)){
return or__3731__auto____$2;
} else {
var or__3731__auto____$3 = (function (){var G__20172 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__20172) : p1.call(null,G__20172));
})();
if(cljs.core.truth_(or__3731__auto____$3)){
return or__3731__auto____$3;
} else {
var or__3731__auto____$4 = (function (){var G__20174 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__20174) : p2.call(null,G__20174));
})();
if(cljs.core.truth_(or__3731__auto____$4)){
return or__3731__auto____$4;
} else {
var G__20175 = y;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__20175) : p3.call(null,G__20175));
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3731__auto__ = (function (){var G__20177 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__20177) : p1.call(null,G__20177));
})();
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (function (){var G__20179 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__20179) : p2.call(null,G__20179));
})();
if(cljs.core.truth_(or__3731__auto____$1)){
return or__3731__auto____$1;
} else {
var or__3731__auto____$2 = (function (){var G__20181 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__20181) : p3.call(null,G__20181));
})();
if(cljs.core.truth_(or__3731__auto____$2)){
return or__3731__auto____$2;
} else {
var or__3731__auto____$3 = (function (){var G__20183 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__20183) : p1.call(null,G__20183));
})();
if(cljs.core.truth_(or__3731__auto____$3)){
return or__3731__auto____$3;
} else {
var or__3731__auto____$4 = (function (){var G__20185 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__20185) : p2.call(null,G__20185));
})();
if(cljs.core.truth_(or__3731__auto____$4)){
return or__3731__auto____$4;
} else {
var or__3731__auto____$5 = (function (){var G__20187 = y;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__20187) : p3.call(null,G__20187));
})();
if(cljs.core.truth_(or__3731__auto____$5)){
return or__3731__auto____$5;
} else {
var or__3731__auto____$6 = (function (){var G__20189 = z;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__20189) : p1.call(null,G__20189));
})();
if(cljs.core.truth_(or__3731__auto____$6)){
return or__3731__auto____$6;
} else {
var or__3731__auto____$7 = (function (){var G__20191 = z;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__20191) : p2.call(null,G__20191));
})();
if(cljs.core.truth_(or__3731__auto____$7)){
return or__3731__auto____$7;
} else {
var G__20192 = z;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__20192) : p3.call(null,G__20192));
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__20226__delegate = function (x,y,z,args){
var or__3731__auto__ = sp3.cljs$core$IFn$_invoke$arity$3(x,y,z);
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
return cljs.core.some(((function (or__3731__auto__){
return (function (p1__19849_SHARP_){
var or__3731__auto____$1 = (function (){var G__20194 = p1__19849_SHARP_;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__20194) : p1.call(null,G__20194));
})();
if(cljs.core.truth_(or__3731__auto____$1)){
return or__3731__auto____$1;
} else {
var or__3731__auto____$2 = (function (){var G__20196 = p1__19849_SHARP_;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__20196) : p2.call(null,G__20196));
})();
if(cljs.core.truth_(or__3731__auto____$2)){
return or__3731__auto____$2;
} else {
var G__20197 = p1__19849_SHARP_;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__20197) : p3.call(null,G__20197));
}
}
});})(or__3731__auto__))
,args);
}
};
var G__20226 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20226__delegate.call(this,x,y,z,args);};
G__20226.cljs$lang$maxFixedArity = 3;
G__20226.cljs$lang$applyTo = (function (arglist__20227){
var x = cljs.core.first(arglist__20227);
arglist__20227 = cljs.core.next(arglist__20227);
var y = cljs.core.first(arglist__20227);
arglist__20227 = cljs.core.next(arglist__20227);
var z = cljs.core.first(arglist__20227);
var args = cljs.core.rest(arglist__20227);
return G__20226__delegate(x,y,z,args);
});
G__20226.cljs$core$IFn$_invoke$arity$variadic = G__20226__delegate;
return G__20226;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$core$IFn$_invoke$arity$0 = sp3__0;
sp3.cljs$core$IFn$_invoke$arity$1 = sp3__1;
sp3.cljs$core$IFn$_invoke$arity$2 = sp3__2;
sp3.cljs$core$IFn$_invoke$arity$3 = sp3__3;
sp3.cljs$core$IFn$_invoke$arity$variadic = sp3__4.cljs$core$IFn$_invoke$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__20228__delegate = function (p1,p2,p3,ps){
var ps__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(p1,p2,p3,ps);
return ((function (ps__$1){
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some(((function (ps__$1){
return (function (p1__19850_SHARP_){
var G__20213 = x;
return (p1__19850_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19850_SHARP_.cljs$core$IFn$_invoke$arity$1(G__20213) : p1__19850_SHARP_.call(null,G__20213));
});})(ps__$1))
,ps__$1);
});
var spn__2 = (function (x,y){
return cljs.core.some(((function (ps__$1){
return (function (p1__19851_SHARP_){
var or__3731__auto__ = (function (){var G__20215 = x;
return (p1__19851_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19851_SHARP_.cljs$core$IFn$_invoke$arity$1(G__20215) : p1__19851_SHARP_.call(null,G__20215));
})();
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
var G__20216 = y;
return (p1__19851_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19851_SHARP_.cljs$core$IFn$_invoke$arity$1(G__20216) : p1__19851_SHARP_.call(null,G__20216));
}
});})(ps__$1))
,ps__$1);
});
var spn__3 = (function (x,y,z){
return cljs.core.some(((function (ps__$1){
return (function (p1__19852_SHARP_){
var or__3731__auto__ = (function (){var G__20218 = x;
return (p1__19852_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19852_SHARP_.cljs$core$IFn$_invoke$arity$1(G__20218) : p1__19852_SHARP_.call(null,G__20218));
})();
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (function (){var G__20220 = y;
return (p1__19852_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19852_SHARP_.cljs$core$IFn$_invoke$arity$1(G__20220) : p1__19852_SHARP_.call(null,G__20220));
})();
if(cljs.core.truth_(or__3731__auto____$1)){
return or__3731__auto____$1;
} else {
var G__20221 = z;
return (p1__19852_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19852_SHARP_.cljs$core$IFn$_invoke$arity$1(G__20221) : p1__19852_SHARP_.call(null,G__20221));
}
}
});})(ps__$1))
,ps__$1);
});
var spn__4 = (function() { 
var G__20229__delegate = function (x,y,z,args){
var or__3731__auto__ = spn.cljs$core$IFn$_invoke$arity$3(x,y,z);
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
return cljs.core.some(((function (or__3731__auto__,ps__$1){
return (function (p1__19853_SHARP_){
return cljs.core.some(p1__19853_SHARP_,args);
});})(or__3731__auto__,ps__$1))
,ps__$1);
}
};
var G__20229 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20229__delegate.call(this,x,y,z,args);};
G__20229.cljs$lang$maxFixedArity = 3;
G__20229.cljs$lang$applyTo = (function (arglist__20230){
var x = cljs.core.first(arglist__20230);
arglist__20230 = cljs.core.next(arglist__20230);
var y = cljs.core.first(arglist__20230);
arglist__20230 = cljs.core.next(arglist__20230);
var z = cljs.core.first(arglist__20230);
var args = cljs.core.rest(arglist__20230);
return G__20229__delegate(x,y,z,args);
});
G__20229.cljs$core$IFn$_invoke$arity$variadic = G__20229__delegate;
return G__20229;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$core$IFn$_invoke$arity$0 = spn__0;
spn.cljs$core$IFn$_invoke$arity$1 = spn__1;
spn.cljs$core$IFn$_invoke$arity$2 = spn__2;
spn.cljs$core$IFn$_invoke$arity$3 = spn__3;
spn.cljs$core$IFn$_invoke$arity$variadic = spn__4.cljs$core$IFn$_invoke$arity$variadic;
return spn;
})()
;})(ps__$1))
};
var G__20228 = function (p1,p2,p3,var_args){
var ps = null;
if (arguments.length > 3) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20228__delegate.call(this,p1,p2,p3,ps);};
G__20228.cljs$lang$maxFixedArity = 3;
G__20228.cljs$lang$applyTo = (function (arglist__20231){
var p1 = cljs.core.first(arglist__20231);
arglist__20231 = cljs.core.next(arglist__20231);
var p2 = cljs.core.first(arglist__20231);
arglist__20231 = cljs.core.next(arglist__20231);
var p3 = cljs.core.first(arglist__20231);
var ps = cljs.core.rest(arglist__20231);
return G__20228__delegate(p1,p2,p3,ps);
});
G__20228.cljs$core$IFn$_invoke$arity$variadic = G__20228__delegate;
return G__20228;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$core$IFn$_invoke$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$core$IFn$_invoke$arity$1 = some_fn__1;
some_fn.cljs$core$IFn$_invoke$arity$2 = some_fn__2;
some_fn.cljs$core$IFn$_invoke$arity$3 = some_fn__3;
some_fn.cljs$core$IFn$_invoke$arity$variadic = some_fn__4.cljs$core$IFn$_invoke$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to
* the set of first items of each coll, followed by applying f to the
* set of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments. Returns a transducer when
* no collection is provided.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__1 = (function (f){
return (function (rf){
return (function() {
var G__20286 = null;
var G__20286__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__20286__1 = (function (result){
var G__20272 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__20272) : rf.call(null,G__20272));
});
var G__20286__2 = (function (result,input){
var G__20273 = result;
var G__20274 = (function (){var G__20275 = input;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20275) : f.call(null,G__20275));
})();
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__20273,G__20274) : rf.call(null,G__20273,G__20274));
});
var G__20286__3 = (function() { 
var G__20287__delegate = function (result,input,inputs){
var G__20276 = result;
var G__20277 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,input,inputs);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__20276,G__20277) : rf.call(null,G__20276,G__20277));
};
var G__20287 = function (result,input,var_args){
var inputs = null;
if (arguments.length > 2) {
  inputs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__20287__delegate.call(this,result,input,inputs);};
G__20287.cljs$lang$maxFixedArity = 2;
G__20287.cljs$lang$applyTo = (function (arglist__20288){
var result = cljs.core.first(arglist__20288);
arglist__20288 = cljs.core.next(arglist__20288);
var input = cljs.core.first(arglist__20288);
var inputs = cljs.core.rest(arglist__20288);
return G__20287__delegate(result,input,inputs);
});
G__20287.cljs$core$IFn$_invoke$arity$variadic = G__20287__delegate;
return G__20287;
})()
;
G__20286 = function(result,input,var_args){
var inputs = var_args;
switch(arguments.length){
case 0:
return G__20286__0.call(this);
case 1:
return G__20286__1.call(this,result);
case 2:
return G__20286__2.call(this,result,input);
default:
return G__20286__3.cljs$core$IFn$_invoke$arity$variadic(result,input, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20286.cljs$lang$maxFixedArity = 2;
G__20286.cljs$lang$applyTo = G__20286__3.cljs$lang$applyTo;
G__20286.cljs$core$IFn$_invoke$arity$0 = G__20286__0;
G__20286.cljs$core$IFn$_invoke$arity$1 = G__20286__1;
G__20286.cljs$core$IFn$_invoke$arity$2 = G__20286__2;
G__20286.cljs$core$IFn$_invoke$arity$variadic = G__20286__3.cljs$core$IFn$_invoke$arity$variadic;
return G__20286;
})()
});
});
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s)){
var c = cljs.core.chunk_first(s);
var size = cljs.core.count(c);
var b = cljs.core.chunk_buffer(size);
var n__4618__auto___20289 = size;
var i_20290 = (0);
while(true){
if((i_20290 < n__4618__auto___20289)){
cljs.core.chunk_append(b,(function (){var G__20278 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_20290);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20278) : f.call(null,G__20278));
})());

var G__20291 = (i_20290 + (1));
i_20290 = G__20291;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons(cljs.core.chunk(b),map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.chunk_rest(s)));
} else {
return cljs.core.cons((function (){var G__20279 = cljs.core.first(s);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20279) : f.call(null,G__20279));
})(),map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.rest(s)));
}
} else {
return null;
}
}),null,null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
if((s1) && (s2)){
return cljs.core.cons((function (){var G__20280 = cljs.core.first(s1);
var G__20281 = cljs.core.first(s2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20280,G__20281) : f.call(null,G__20280,G__20281));
})(),map.cljs$core$IFn$_invoke$arity$3(f,cljs.core.rest(s1),cljs.core.rest(s2)));
} else {
return null;
}
}),null,null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
var s3 = cljs.core.seq(c3);
if((s1) && (s2) && (s3)){
return cljs.core.cons((function (){var G__20282 = cljs.core.first(s1);
var G__20283 = cljs.core.first(s2);
var G__20284 = cljs.core.first(s3);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__20282,G__20283,G__20284) : f.call(null,G__20282,G__20283,G__20284));
})(),map.cljs$core$IFn$_invoke$arity$4(f,cljs.core.rest(s1),cljs.core.rest(s2),cljs.core.rest(s3)));
} else {
return null;
}
}),null,null));
});
var map__5 = (function() { 
var G__20292__delegate = function (f,c1,c2,c3,colls){
var step = (function step(cs){
return (new cljs.core.LazySeq(null,(function (){
var ss = map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cs);
if(cljs.core.every_QMARK_(cljs.core.identity,ss)){
return cljs.core.cons(map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),step(map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
} else {
return null;
}
}),null,null));
});
return map.cljs$core$IFn$_invoke$arity$2(((function (step){
return (function (p1__20232_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,p1__20232_SHARP_);
});})(step))
,step(cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c3,cljs.core.array_seq([c2,c1], 0))));
};
var G__20292 = function (f,c1,c2,c3,var_args){
var colls = null;
if (arguments.length > 4) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__20292__delegate.call(this,f,c1,c2,c3,colls);};
G__20292.cljs$lang$maxFixedArity = 4;
G__20292.cljs$lang$applyTo = (function (arglist__20293){
var f = cljs.core.first(arglist__20293);
arglist__20293 = cljs.core.next(arglist__20293);
var c1 = cljs.core.first(arglist__20293);
arglist__20293 = cljs.core.next(arglist__20293);
var c2 = cljs.core.first(arglist__20293);
arglist__20293 = cljs.core.next(arglist__20293);
var c3 = cljs.core.first(arglist__20293);
var colls = cljs.core.rest(arglist__20293);
return G__20292__delegate(f,c1,c2,c3,colls);
});
G__20292.cljs$core$IFn$_invoke$arity$variadic = G__20292__delegate;
return G__20292;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 1:
return map__1.call(this,f);
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$core$IFn$_invoke$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$core$IFn$_invoke$arity$1 = map__1;
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
map.cljs$core$IFn$_invoke$arity$4 = map__4;
map.cljs$core$IFn$_invoke$arity$variadic = map__5.cljs$core$IFn$_invoke$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.  Returns a stateful transducer when
* no collection is provided.
*/
cljs.core.take = (function() {
var take = null;
var take__1 = (function (n){
return (function (rf){
var na = cljs.core.volatile_BANG_(n);
return ((function (na){
return (function() {
var G__20302 = null;
var G__20302__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__20302__1 = (function (result){
var G__20299 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__20299) : rf.call(null,G__20299));
});
var G__20302__2 = (function (result,input){
var n__$1 = cljs.core.deref(na);
var nn = na.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(na.cljs$core$IDeref$_deref$arity$1(null) - (1)));
var result__$1 = (((n__$1 > (0)))?(function (){var G__20300 = result;
var G__20301 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__20300,G__20301) : rf.call(null,G__20300,G__20301));
})():result);
if(!((nn > (0)))){
return cljs.core.ensure_reduced(result__$1);
} else {
return result__$1;
}
});
G__20302 = function(result,input){
switch(arguments.length){
case 0:
return G__20302__0.call(this);
case 1:
return G__20302__1.call(this,result);
case 2:
return G__20302__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20302.cljs$core$IFn$_invoke$arity$0 = G__20302__0;
G__20302.cljs$core$IFn$_invoke$arity$1 = G__20302__1;
G__20302.cljs$core$IFn$_invoke$arity$2 = G__20302__2;
return G__20302;
})()
;})(na))
});
});
var take__2 = (function (n,coll){
return (new cljs.core.LazySeq(null,(function (){
if((n > (0))){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
return cljs.core.cons(cljs.core.first(s),take.cljs$core$IFn$_invoke$arity$2((n - (1)),cljs.core.rest(s)));
} else {
return null;
}
} else {
return null;
}
}),null,null));
});
take = function(n,coll){
switch(arguments.length){
case 1:
return take__1.call(this,n);
case 2:
return take__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$1 = take__1;
take.cljs$core$IFn$_invoke$arity$2 = take__2;
return take;
})()
;
/**
* Returns a lazy sequence of all but the first n items in coll.
* Returns a stateful transducer when no collection is provided.
*/
cljs.core.drop = (function() {
var drop = null;
var drop__1 = (function (n){
return (function (rf){
var na = cljs.core.volatile_BANG_(n);
return ((function (na){
return (function() {
var G__20309 = null;
var G__20309__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__20309__1 = (function (result){
var G__20306 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__20306) : rf.call(null,G__20306));
});
var G__20309__2 = (function (result,input){
var n__$1 = cljs.core.deref(na);
na.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(na.cljs$core$IDeref$_deref$arity$1(null) - (1)));

if((n__$1 > (0))){
return result;
} else {
var G__20307 = result;
var G__20308 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__20307,G__20308) : rf.call(null,G__20307,G__20308));
}
});
G__20309 = function(result,input){
switch(arguments.length){
case 0:
return G__20309__0.call(this);
case 1:
return G__20309__1.call(this,result);
case 2:
return G__20309__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20309.cljs$core$IFn$_invoke$arity$0 = G__20309__0;
G__20309.cljs$core$IFn$_invoke$arity$1 = G__20309__1;
G__20309.cljs$core$IFn$_invoke$arity$2 = G__20309__2;
return G__20309;
})()
;})(na))
});
});
var drop__2 = (function (n,coll){
var step = (function (n__$1,coll__$1){
while(true){
var s = cljs.core.seq(coll__$1);
if(((n__$1 > (0))) && (s)){
var G__20310 = (n__$1 - (1));
var G__20311 = cljs.core.rest(s);
n__$1 = G__20310;
coll__$1 = G__20311;
continue;
} else {
return s;
}
break;
}
});
return (new cljs.core.LazySeq(null,((function (step){
return (function (){
return step(n,coll);
});})(step))
,null,null));
});
drop = function(n,coll){
switch(arguments.length){
case 1:
return drop__1.call(this,n);
case 2:
return drop__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop.cljs$core$IFn$_invoke$arity$1 = drop__1;
drop.cljs$core$IFn$_invoke$arity$2 = drop__2;
return drop;
})()
;
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.cljs$core$IFn$_invoke$arity$2((1),s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,_){
return x;
}),s,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_last.cljs$core$IFn$_invoke$arity$1 = drop_last__1;
drop_last.cljs$core$IFn$_invoke$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s = cljs.core.seq(coll);
var lead = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,coll));
while(true){
if(lead){
var G__20314 = cljs.core.next(s);
var G__20315 = cljs.core.next(lead);
s = G__20314;
lead = G__20315;
continue;
} else {
return s;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the
* first item for which (pred item) returns logical false.  Returns a
* stateful transducer when no collection is provided.
*/
cljs.core.drop_while = (function() {
var drop_while = null;
var drop_while__1 = (function (pred){
return (function (rf){
var da = cljs.core.volatile_BANG_(true);
return ((function (da){
return (function() {
var G__20328 = null;
var G__20328__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__20328__1 = (function (result){
var G__20322 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__20322) : rf.call(null,G__20322));
});
var G__20328__2 = (function (result,input){
var drop_QMARK_ = cljs.core.deref(da);
if(cljs.core.truth_((function (){var and__3719__auto__ = drop_QMARK_;
if(cljs.core.truth_(and__3719__auto__)){
var G__20323 = input;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__20323) : pred.call(null,G__20323));
} else {
return and__3719__auto__;
}
})())){
return result;
} else {
cljs.core.vreset_BANG_(da,null);

var G__20324 = result;
var G__20325 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__20324,G__20325) : rf.call(null,G__20324,G__20325));
}
});
G__20328 = function(result,input){
switch(arguments.length){
case 0:
return G__20328__0.call(this);
case 1:
return G__20328__1.call(this,result);
case 2:
return G__20328__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20328.cljs$core$IFn$_invoke$arity$0 = G__20328__0;
G__20328.cljs$core$IFn$_invoke$arity$1 = G__20328__1;
G__20328.cljs$core$IFn$_invoke$arity$2 = G__20328__2;
return G__20328;
})()
;})(da))
});
});
var drop_while__2 = (function (pred,coll){
var step = (function (pred__$1,coll__$1){
while(true){
var s = cljs.core.seq(coll__$1);
if(cljs.core.truth_((function (){var and__3719__auto__ = s;
if(and__3719__auto__){
var G__20327 = cljs.core.first(s);
return (pred__$1.cljs$core$IFn$_invoke$arity$1 ? pred__$1.cljs$core$IFn$_invoke$arity$1(G__20327) : pred__$1.call(null,G__20327));
} else {
return and__3719__auto__;
}
})())){
var G__20329 = pred__$1;
var G__20330 = cljs.core.rest(s);
pred__$1 = G__20329;
coll__$1 = G__20330;
continue;
} else {
return s;
}
break;
}
});
return (new cljs.core.LazySeq(null,((function (step){
return (function (){
return step(pred,coll);
});})(step))
,null,null));
});
drop_while = function(pred,coll){
switch(arguments.length){
case 1:
return drop_while__1.call(this,pred);
case 2:
return drop_while__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_while.cljs$core$IFn$_invoke$arity$1 = drop_while__1;
drop_while.cljs$core$IFn$_invoke$arity$2 = drop_while__2;
return drop_while;
})()
;
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(s,cycle(s));
} else {
return null;
}
}),null,null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,coll),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,coll)], null);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(x,repeat.cljs$core$IFn$_invoke$arity$1(x));
}),null,null));
});
var repeat__2 = (function (n,x){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,repeat.cljs$core$IFn$_invoke$arity$1(x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeat.cljs$core$IFn$_invoke$arity$1 = repeat__1;
repeat.cljs$core$IFn$_invoke$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),repeatedly.cljs$core$IFn$_invoke$arity$1(f));
}),null,null));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,repeatedly.cljs$core$IFn$_invoke$arity$1(f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeatedly.cljs$core$IFn$_invoke$arity$1 = repeatedly__1;
repeatedly.cljs$core$IFn$_invoke$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons(x,(new cljs.core.LazySeq(null,(function (){
return iterate(f,(function (){var G__20339 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20339) : f.call(null,G__20339));
})());
}),null,null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
if((s1) && (s2)){
return cljs.core.cons(cljs.core.first(s1),cljs.core.cons(cljs.core.first(s2),interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s1),cljs.core.rest(s2))));
} else {
return null;
}
}),null,null));
});
var interleave__3 = (function() { 
var G__20342__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c2,cljs.core.array_seq([c1], 0)));
if(cljs.core.every_QMARK_(cljs.core.identity,ss)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(interleave,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
} else {
return null;
}
}),null,null));
};
var G__20342 = function (c1,c2,var_args){
var colls = null;
if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__20342__delegate.call(this,c1,c2,colls);};
G__20342.cljs$lang$maxFixedArity = 2;
G__20342.cljs$lang$applyTo = (function (arglist__20343){
var c1 = cljs.core.first(arglist__20343);
arglist__20343 = cljs.core.next(arglist__20343);
var c2 = cljs.core.first(arglist__20343);
var colls = cljs.core.rest(arglist__20343);
return G__20342__delegate(c1,c2,colls);
});
G__20342.cljs$core$IFn$_invoke$arity$variadic = G__20342__delegate;
return G__20342;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$core$IFn$_invoke$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$core$IFn$_invoke$arity$2 = interleave__2;
interleave.cljs$core$IFn$_invoke$arity$variadic = interleave__3.cljs$core$IFn$_invoke$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat = (function cat(coll,colls__$1){
return (new cljs.core.LazySeq(null,(function (){
var temp__4124__auto__ = cljs.core.seq(coll);
if(temp__4124__auto__){
var coll__$1 = temp__4124__auto__;
return cljs.core.cons(cljs.core.first(coll__$1),cat(cljs.core.rest(coll__$1),colls__$1));
} else {
if(cljs.core.seq(colls__$1)){
return cat(cljs.core.first(colls__$1),cljs.core.rest(colls__$1));
} else {
return null;
}
}
}),null,null));
});
return cat(null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection. Returns
* a transducer when no collections are provided
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__1 = (function (f){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(f),cljs.core.cat);
});
var mapcat__2 = (function() { 
var G__20352__delegate = function (f,colls){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,f,colls));
};
var G__20352 = function (f,var_args){
var colls = null;
if (arguments.length > 1) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__20352__delegate.call(this,f,colls);};
G__20352.cljs$lang$maxFixedArity = 1;
G__20352.cljs$lang$applyTo = (function (arglist__20353){
var f = cljs.core.first(arglist__20353);
var colls = cljs.core.rest(arglist__20353);
return G__20352__delegate(f,colls);
});
G__20352.cljs$core$IFn$_invoke$arity$variadic = G__20352__delegate;
return G__20352;
})()
;
mapcat = function(f,var_args){
var colls = var_args;
switch(arguments.length){
case 1:
return mapcat__1.call(this,f);
default:
return mapcat__2.cljs$core$IFn$_invoke$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat.cljs$lang$maxFixedArity = 1;
mapcat.cljs$lang$applyTo = mapcat__2.cljs$lang$applyTo;
mapcat.cljs$core$IFn$_invoke$arity$1 = mapcat__1;
mapcat.cljs$core$IFn$_invoke$arity$variadic = mapcat__2.cljs$core$IFn$_invoke$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
* Returns a transducer when no collection is provided.
*/
cljs.core.filter = (function() {
var filter = null;
var filter__1 = (function (pred){
return (function (rf){
return (function() {
var G__20372 = null;
var G__20372__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__20372__1 = (function (result){
var G__20366 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__20366) : rf.call(null,G__20366));
});
var G__20372__2 = (function (result,input){
if(cljs.core.truth_((function (){var G__20367 = input;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__20367) : pred.call(null,G__20367));
})())){
var G__20368 = result;
var G__20369 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__20368,G__20369) : rf.call(null,G__20368,G__20369));
} else {
return result;
}
});
G__20372 = function(result,input){
switch(arguments.length){
case 0:
return G__20372__0.call(this);
case 1:
return G__20372__1.call(this,result);
case 2:
return G__20372__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20372.cljs$core$IFn$_invoke$arity$0 = G__20372__0;
G__20372.cljs$core$IFn$_invoke$arity$1 = G__20372__1;
G__20372.cljs$core$IFn$_invoke$arity$2 = G__20372__2;
return G__20372;
})()
});
});
var filter__2 = (function (pred,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s)){
var c = cljs.core.chunk_first(s);
var size = cljs.core.count(c);
var b = cljs.core.chunk_buffer(size);
var n__4618__auto___20373 = size;
var i_20374 = (0);
while(true){
if((i_20374 < n__4618__auto___20373)){
if(cljs.core.truth_((function (){var G__20370 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_20374);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__20370) : pred.call(null,G__20370));
})())){
cljs.core.chunk_append(b,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_20374));
} else {
}

var G__20375 = (i_20374 + (1));
i_20374 = G__20375;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons(cljs.core.chunk(b),filter.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.chunk_rest(s)));
} else {
var f = cljs.core.first(s);
var r = cljs.core.rest(s);
if(cljs.core.truth_((function (){var G__20371 = f;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__20371) : pred.call(null,G__20371));
})())){
return cljs.core.cons(f,filter.cljs$core$IFn$_invoke$arity$2(pred,r));
} else {
return filter.cljs$core$IFn$_invoke$arity$2(pred,r);
}
}
} else {
return null;
}
}),null,null));
});
filter = function(pred,coll){
switch(arguments.length){
case 1:
return filter__1.call(this,pred);
case 2:
return filter__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter.cljs$core$IFn$_invoke$arity$1 = filter__1;
filter.cljs$core$IFn$_invoke$arity$2 = filter__2;
return filter;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
* Returns a transducer when no collection is provided.
*/
cljs.core.remove = (function() {
var remove = null;
var remove__1 = (function (pred){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.complement(pred));
});
var remove__2 = (function (pred,coll){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(pred),coll);
});
remove = function(pred,coll){
switch(arguments.length){
case 1:
return remove__1.call(this,pred);
case 2:
return remove__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove.cljs$core$IFn$_invoke$arity$1 = remove__1;
remove.cljs$core$IFn$_invoke$arity$2 = remove__2;
return remove;
})()
;
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk = (function walk(node){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(node,(cljs.core.truth_((function (){var G__20382 = node;
return (branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(G__20382) : branch_QMARK_.call(null,G__20382));
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(walk,cljs.core.array_seq([(function (){var G__20383 = node;
return (children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(G__20383) : children.call(null,G__20383));
})()], 0)):null));
}),null,null));
});
return walk(root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20384_SHARP_){
return !(cljs.core.sequential_QMARK_(p1__20384_SHARP_));
}),cljs.core.rest(cljs.core.tree_seq(cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined. A transducer may be supplied.
*/
cljs.core.into = (function() {
var into = null;
var into__2 = (function (to,from){
if(!((to == null))){
if((function (){var G__20387 = to;
if(G__20387){
var bit__4405__auto__ = (G__20387.cljs$lang$protocol_mask$partition1$ & (4));
if((bit__4405__auto__) || (G__20387.cljs$core$IEditableCollection$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj_BANG_,cljs.core.transient$(to),from)),cljs.core.meta(to));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,to,from);
}
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.List.EMPTY,from);
}
});
var into__3 = (function (to,xform,from){
if((function (){var G__20388 = to;
if(G__20388){
var bit__4405__auto__ = (G__20388.cljs$lang$protocol_mask$partition1$ & (4));
if((bit__4405__auto__) || (G__20388.cljs$core$IEditableCollection$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.conj_BANG_,cljs.core.transient$(to),from)),cljs.core.meta(to));
} else {
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.conj,to,from);
}
});
into = function(to,xform,from){
switch(arguments.length){
case 2:
return into__2.call(this,to,xform);
case 3:
return into__3.call(this,to,xform,from);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
into.cljs$core$IFn$_invoke$arity$2 = into__2;
into.cljs$core$IFn$_invoke$arity$3 = into__3;
return into;
})()
;
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__20390 = o;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20390) : f.call(null,G__20390));
})());
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$4(f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__20391__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map,f,c1,c2,c3,cljs.core.array_seq([colls], 0)));
};
var G__20391 = function (f,c1,c2,c3,var_args){
var colls = null;
if (arguments.length > 4) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__20391__delegate.call(this,f,c1,c2,c3,colls);};
G__20391.cljs$lang$maxFixedArity = 4;
G__20391.cljs$lang$applyTo = (function (arglist__20392){
var f = cljs.core.first(arglist__20392);
arglist__20392 = cljs.core.next(arglist__20392);
var c1 = cljs.core.first(arglist__20392);
arglist__20392 = cljs.core.next(arglist__20392);
var c2 = cljs.core.first(arglist__20392);
arglist__20392 = cljs.core.next(arglist__20392);
var c3 = cljs.core.first(arglist__20392);
var colls = cljs.core.rest(arglist__20392);
return G__20391__delegate(f,c1,c2,c3,colls);
});
G__20391.cljs$core$IFn$_invoke$arity$variadic = G__20391__delegate;
return G__20391;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$core$IFn$_invoke$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$core$IFn$_invoke$arity$2 = mapv__2;
mapv.cljs$core$IFn$_invoke$arity$3 = mapv__3;
mapv.cljs$core$IFn$_invoke$arity$4 = mapv__4;
mapv.cljs$core$IFn$_invoke$arity$variadic = mapv__5.cljs$core$IFn$_invoke$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,o){
if(cljs.core.truth_((function (){var G__20394 = o;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__20394) : pred.call(null,G__20394));
})())){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,o);
} else {
return v;
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition up to n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.cljs$core$IFn$_invoke$arity$3(n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
var p = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,s);
if((n === cljs.core.count(p))){
return cljs.core.cons(p,partition.cljs$core$IFn$_invoke$arity$3(n,step,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(step,s)));
} else {
return null;
}
} else {
return null;
}
}),null,null));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
var p = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,s);
if((n === cljs.core.count(p))){
return cljs.core.cons(p,partition.cljs$core$IFn$_invoke$arity$4(n,step,pad,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(step,s)));
} else {
return cljs.core._conj(cljs.core.List.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p,pad)));
}
} else {
return null;
}
}),null,null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
partition.cljs$core$IFn$_invoke$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return get_in.cljs$core$IFn$_invoke$arity$3(m,ks,null);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel = cljs.core.lookup_sentinel;
var m__$1 = m;
var ks__$1 = cljs.core.seq(ks);
while(true){
if(ks__$1){
if(!((function (){var G__20409 = m__$1;
if(G__20409){
var bit__4412__auto__ = (G__20409.cljs$lang$protocol_mask$partition0$ & (256));
if((bit__4412__auto__) || (G__20409.cljs$core$ILookup$)){
return true;
} else {
if((!G__20409.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__20409);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__20409);
}
})())){
return not_found;
} else {
var m__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m__$1,cljs.core.first(ks__$1),sentinel);
if((sentinel === m__$2)){
return not_found;
} else {
var G__20410 = sentinel;
var G__20411 = m__$2;
var G__20412 = cljs.core.next(ks__$1);
sentinel = G__20410;
m__$1 = G__20411;
ks__$1 = G__20412;
continue;
}
}
} else {
return m__$1;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_in.cljs$core$IFn$_invoke$arity$2 = get_in__2;
get_in.cljs$core$IFn$_invoke$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__20413,v){
var vec__20418 = p__20413;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20418,(0),null);
var ks = cljs.core.nthnext(vec__20418,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,assoc_in(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,v));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() {
var update_in = null;
var update_in__3 = (function (m,p__20419,f){
var vec__20457 = p__20419;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20457,(0),null);
var ks = cljs.core.nthnext(vec__20457,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__20458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20458) : f.call(null,G__20458));
})());
}
});
var update_in__4 = (function (m,p__20420,f,a){
var vec__20459 = p__20420;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20459,(0),null);
var ks = cljs.core.nthnext(vec__20459,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__20460 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__20461 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20460,G__20461) : f.call(null,G__20460,G__20461));
})());
}
});
var update_in__5 = (function (m,p__20421,f,a,b){
var vec__20462 = p__20421;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20462,(0),null);
var ks = cljs.core.nthnext(vec__20462,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,b));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__20463 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__20464 = a;
var G__20465 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__20463,G__20464,G__20465) : f.call(null,G__20463,G__20464,G__20465));
})());
}
});
var update_in__6 = (function (m,p__20422,f,a,b,c){
var vec__20466 = p__20422;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20466,(0),null);
var ks = cljs.core.nthnext(vec__20466,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$6(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,b,c));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__20467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__20468 = a;
var G__20469 = b;
var G__20470 = c;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__20467,G__20468,G__20469,G__20470) : f.call(null,G__20467,G__20468,G__20469,G__20470));
})());
}
});
var update_in__7 = (function() { 
var G__20472__delegate = function (m,p__20423,f,a,b,c,args){
var vec__20471 = p__20423;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20471,(0),null);
var ks = cljs.core.nthnext(vec__20471,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(update_in,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,cljs.core.array_seq([b,c,args], 0)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),a,b,c,cljs.core.array_seq([args], 0)));
}
};
var G__20472 = function (m,p__20423,f,a,b,c,var_args){
var args = null;
if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);
} 
return G__20472__delegate.call(this,m,p__20423,f,a,b,c,args);};
G__20472.cljs$lang$maxFixedArity = 6;
G__20472.cljs$lang$applyTo = (function (arglist__20473){
var m = cljs.core.first(arglist__20473);
arglist__20473 = cljs.core.next(arglist__20473);
var p__20423 = cljs.core.first(arglist__20473);
arglist__20473 = cljs.core.next(arglist__20473);
var f = cljs.core.first(arglist__20473);
arglist__20473 = cljs.core.next(arglist__20473);
var a = cljs.core.first(arglist__20473);
arglist__20473 = cljs.core.next(arglist__20473);
var b = cljs.core.first(arglist__20473);
arglist__20473 = cljs.core.next(arglist__20473);
var c = cljs.core.first(arglist__20473);
var args = cljs.core.rest(arglist__20473);
return G__20472__delegate(m,p__20423,f,a,b,c,args);
});
G__20472.cljs$core$IFn$_invoke$arity$variadic = G__20472__delegate;
return G__20472;
})()
;
update_in = function(m,p__20423,f,a,b,c,var_args){
var args = var_args;
switch(arguments.length){
case 3:
return update_in__3.call(this,m,p__20423,f);
case 4:
return update_in__4.call(this,m,p__20423,f,a);
case 5:
return update_in__5.call(this,m,p__20423,f,a,b);
case 6:
return update_in__6.call(this,m,p__20423,f,a,b,c);
default:
return update_in__7.cljs$core$IFn$_invoke$arity$variadic(m,p__20423,f,a,b,c, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_in.cljs$lang$maxFixedArity = 6;
update_in.cljs$lang$applyTo = update_in__7.cljs$lang$applyTo;
update_in.cljs$core$IFn$_invoke$arity$3 = update_in__3;
update_in.cljs$core$IFn$_invoke$arity$4 = update_in__4;
update_in.cljs$core$IFn$_invoke$arity$5 = update_in__5;
update_in.cljs$core$IFn$_invoke$arity$6 = update_in__6;
update_in.cljs$core$IFn$_invoke$arity$variadic = update_in__7.cljs$core$IFn$_invoke$arity$variadic;
return update_in;
})()
;
/**
* 'Updates' a value in an associative structure, where k is a
* key and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* structure.  If the key does not exist, nil is passed as the old value.
* @param {...*} var_args
*/
cljs.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__20484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20484) : f.call(null,G__20484));
})());
});
var update__4 = (function (m,k,f,x){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__20485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__20486 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20485,G__20486) : f.call(null,G__20485,G__20486));
})());
});
var update__5 = (function (m,k,f,x,y){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__20487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__20488 = x;
var G__20489 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__20487,G__20488,G__20489) : f.call(null,G__20487,G__20488,G__20489));
})());
});
var update__6 = (function (m,k,f,x,y,z){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__20490 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__20491 = x;
var G__20492 = y;
var G__20493 = z;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__20490,G__20491,G__20492,G__20493) : f.call(null,G__20490,G__20491,G__20492,G__20493));
})());
});
var update__7 = (function() { 
var G__20494__delegate = function (m,k,f,x,y,z,more){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x,y,z,cljs.core.array_seq([more], 0)));
};
var G__20494 = function (m,k,f,x,y,z,var_args){
var more = null;
if (arguments.length > 6) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);
} 
return G__20494__delegate.call(this,m,k,f,x,y,z,more);};
G__20494.cljs$lang$maxFixedArity = 6;
G__20494.cljs$lang$applyTo = (function (arglist__20495){
var m = cljs.core.first(arglist__20495);
arglist__20495 = cljs.core.next(arglist__20495);
var k = cljs.core.first(arglist__20495);
arglist__20495 = cljs.core.next(arglist__20495);
var f = cljs.core.first(arglist__20495);
arglist__20495 = cljs.core.next(arglist__20495);
var x = cljs.core.first(arglist__20495);
arglist__20495 = cljs.core.next(arglist__20495);
var y = cljs.core.first(arglist__20495);
arglist__20495 = cljs.core.next(arglist__20495);
var z = cljs.core.first(arglist__20495);
var more = cljs.core.rest(arglist__20495);
return G__20494__delegate(m,k,f,x,y,z,more);
});
G__20494.cljs$core$IFn$_invoke$arity$variadic = G__20494__delegate;
return G__20494;
})()
;
update = function(m,k,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x);
case 5:
return update__5.call(this,m,k,f,x,y);
case 6:
return update__6.call(this,m,k,f,x,y,z);
default:
return update__7.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x,y,z, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 6;
update.cljs$lang$applyTo = update__7.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$6 = update__6;
update.cljs$core$IFn$_invoke$arity$variadic = update__7.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})

cljs.core.VectorNode.cljs$lang$type = true;

cljs.core.VectorNode.cljs$lang$ctorStr = "cljs.core/VectorNode";

cljs.core.VectorNode.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/VectorNode");
});

cljs.core.__GT_VectorNode = (function __GT_VectorNode(edit,arr){
return (new cljs.core.VectorNode(edit,arr));
});

cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,cljs.core.aclone(node.arr)));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt = pv.cnt;
if((cnt < (32))){
return (0);
} else {
return (((cnt - (1)) >>> (5)) << (5));
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll = level;
var ret = node;
while(true){
if((ll === (0))){
return ret;
} else {
var embed = ret;
var r = cljs.core.pv_fresh_node(edit);
var _ = cljs.core.pv_aset(r,(0),embed);
var G__20496 = (ll - (5));
var G__20497 = r;
ll = G__20496;
ret = G__20497;
continue;
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret = cljs.core.pv_clone_node(parent);
var subidx = (((pv.cnt - (1)) >>> level) & (31));
if(((5) === level)){
cljs.core.pv_aset(ret,subidx,tailnode);

return ret;
} else {
var child = cljs.core.pv_aget(parent,subidx);
if(!((child == null))){
var node_to_insert = push_tail(pv,(level - (5)),child,tailnode);
cljs.core.pv_aset(ret,subidx,node_to_insert);

return ret;
} else {
var node_to_insert = cljs.core.new_path(null,(level - (5)),tailnode);
cljs.core.pv_aset(ret,subidx,node_to_insert);

return ret;
}
}
});
cljs.core.vector_index_out_of_bounds = (function vector_index_out_of_bounds(i,cnt){
throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(cnt)].join('')));
});
cljs.core.first_array_for_longvec = (function first_array_for_longvec(pv){
var node = pv.root;
var level = pv.shift;
while(true){
if((level > (0))){
var G__20502 = cljs.core.pv_aget(node,(0));
var G__20503 = (level - (5));
node = G__20502;
level = G__20503;
continue;
} else {
return node.arr;
}
break;
}
});
cljs.core.unchecked_array_for = (function unchecked_array_for(pv,i){
if((i >= cljs.core.tail_off(pv))){
return pv.tail;
} else {
var node = pv.root;
var level = pv.shift;
while(true){
if((level > (0))){
var G__20504 = cljs.core.pv_aget(node,((i >>> level) & (31)));
var G__20505 = (level - (5));
node = G__20504;
level = G__20505;
continue;
} else {
return node.arr;
}
break;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((((0) <= i)) && ((i < pv.cnt))){
return cljs.core.unchecked_array_for(pv,i);
} else {
return cljs.core.vector_index_out_of_bounds(i,pv.cnt);
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret = cljs.core.pv_clone_node(node);
if((level === (0))){
cljs.core.pv_aset(ret,(i & (31)),val);

return ret;
} else {
var subidx = ((i >>> level) & (31));
cljs.core.pv_aset(ret,subidx,do_assoc(pv,(level - (5)),cljs.core.pv_aget(node,subidx),i,val));

return ret;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx = (((pv.cnt - (2)) >>> level) & (31));
if((level > (5))){
var new_child = pop_tail(pv,(level - (5)),cljs.core.pv_aget(node,subidx));
if(((new_child == null)) && ((subidx === (0)))){
return null;
} else {
var ret = cljs.core.pv_clone_node(node);
cljs.core.pv_aset(ret,subidx,new_child);

return ret;
}
} else {
if((subidx === (0))){
return null;
} else {
var ret = cljs.core.pv_clone_node(node);
cljs.core.pv_aset(ret,subidx,null);

return ret;

}
}
});

/**
* @constructor
*/
cljs.core.RangedIterator = (function (i,base,arr,v,start,end){
this.i = i;
this.base = base;
this.arr = arr;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.RangedIterator.prototype.hasNext = (function (){
var self__ = this;
var this$ = this;
return (self__.i < self__.end);
});

cljs.core.RangedIterator.prototype.next = (function (){
var self__ = this;
var this$ = this;
if(((self__.i - self__.base) === (32))){
self__.arr = cljs.core.unchecked_array_for(self__.v,self__.i);

self__.base = (self__.base + (32));
} else {
}

var ret = (self__.arr[(self__.i & (31))]);
self__.i = (self__.i + (1));

return ret;
});

cljs.core.RangedIterator.cljs$lang$type = true;

cljs.core.RangedIterator.cljs$lang$ctorStr = "cljs.core/RangedIterator";

cljs.core.RangedIterator.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/RangedIterator");
});

cljs.core.__GT_RangedIterator = (function __GT_RangedIterator(i,base,arr,v,start,end){
return (new cljs.core.RangedIterator(i,base,arr,v,start,end));
});

cljs.core.ranged_iterator = (function ranged_iterator(v,start,end){
var i = start;
return (new cljs.core.RangedIterator(i,(i - (i % (32))),(((start < cljs.core.count(v)))?cljs.core.unchecked_array_for(v,i):null),v,start,end));
});







/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentVector.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentVector.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if(typeof k === 'number'){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,not_found);
} else {
return not_found;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var self__ = this;
var v__$1 = this;
var i = (0);
var init__$1 = init;
while(true){
if((i < self__.cnt)){
var arr = cljs.core.unchecked_array_for(v__$1,i);
var len = arr.length;
var init__$2 = (function (){var j = (0);
var init__$2 = init__$1;
while(true){
if((j < len)){
var init__$3 = (function (){var G__20515 = init__$2;
var G__20516 = (j + i);
var G__20517 = (arr[j]);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__20515,G__20516,G__20517) : f.call(null,G__20515,G__20516,G__20517));
})();
if(cljs.core.reduced_QMARK_(init__$3)){
return init__$3;
} else {
var G__20528 = (j + (1));
var G__20529 = init__$3;
j = G__20528;
init__$2 = G__20529;
continue;
}
} else {
return init__$2;
}
break;
}
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__20518 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20518) : cljs.core.deref.call(null,G__20518));
} else {
var G__20530 = (i + len);
var G__20531 = init__$2;
i = G__20530;
init__$1 = G__20531;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
var coll__$1 = this;
return (cljs.core.array_for(coll__$1,n)[(n & (31))]);
});

cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var coll__$1 = this;
if((((0) <= n)) && ((n < self__.cnt))){
return (cljs.core.unchecked_array_for(coll__$1,n)[(n & (31))]);
} else {
return not_found;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var self__ = this;
var coll__$1 = this;
if((((0) <= n)) && ((n < self__.cnt))){
if((cljs.core.tail_off(coll__$1) <= n)){
var new_tail = cljs.core.aclone(self__.tail);
(new_tail[(n & (31))] = val);

return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,self__.root,new_tail,null));
} else {
return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,cljs.core.do_assoc(coll__$1,self__.shift,self__.root,n,val),self__.tail,null));
}
} else {
if((n === self__.cnt)){
return cljs.core._conj(coll__$1,val);
} else {
throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds  [0,"),cljs.core.str(self__.cnt),cljs.core.str("]")].join('')));

}
}
});

cljs.core.PersistentVector.prototype.cljs$core$IIterable$ = true;

cljs.core.PersistentVector.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.ranged_iterator(this$__$1,(0),self__.cnt);
});

cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentVector.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,self__.root,self__.tail,self__.__hash));
});

cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.cnt;
});

cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,(0));
});

cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,(1));
});

cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,(self__.cnt - (1)));
} else {
return null;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt === (0))){
throw (new Error("Can't pop empty vector"));
} else {
if(((1) === self__.cnt)){
return cljs.core._with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
} else {
if(((1) < (self__.cnt - cljs.core.tail_off(coll__$1)))){
return (new cljs.core.PersistentVector(self__.meta,(self__.cnt - (1)),self__.shift,self__.root,self__.tail.slice((0),(-1)),null));
} else {
var new_tail = cljs.core.unchecked_array_for(coll__$1,(self__.cnt - (2)));
var nr = cljs.core.pop_tail(coll__$1,self__.shift,self__.root);
var new_root = (((nr == null))?cljs.core.PersistentVector.EMPTY_NODE:nr);
var cnt_1 = (self__.cnt - (1));
if((((5) < self__.shift)) && ((cljs.core.pv_aget(new_root,(1)) == null))){
return (new cljs.core.PersistentVector(self__.meta,cnt_1,(self__.shift - (5)),cljs.core.pv_aget(new_root,(0)),new_tail,null));
} else {
return (new cljs.core.PersistentVector(self__.meta,cnt_1,self__.shift,new_root,new_tail,null));
}

}
}
}
});

cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return (new cljs.core.RSeq(coll__$1,(self__.cnt - (1)),null));
} else {
return null;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4152__auto__ = self__.__hash;
if(!((h__4152__auto__ == null))){
return h__4152__auto__;
} else {
var h__4152__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4152__auto____$1;

return h__4152__auto____$1;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
if((other instanceof cljs.core.PersistentVector)){
if((self__.cnt === cljs.core.count(other))){
var me_iter = cljs.core._iterator(coll__$1);
var you_iter = cljs.core._iterator(other);
while(true){
if(cljs.core.truth_(me_iter.hasNext())){
var x = me_iter.next();
var y = you_iter.next();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
} else {
return cljs.core.equiv_sequential(coll__$1,other);
}
});

cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.TransientVector(self__.cnt,self__.shift,(function (){var G__20519 = self__.root;
return (cljs.core.tv_editable_root.cljs$core$IFn$_invoke$arity$1 ? cljs.core.tv_editable_root.cljs$core$IFn$_invoke$arity$1(G__20519) : cljs.core.tv_editable_root.call(null,G__20519));
})(),(function (){var G__20520 = self__.tail;
return (cljs.core.tv_editable_tail.cljs$core$IFn$_invoke$arity$1 ? cljs.core.tv_editable_tail.cljs$core$IFn$_invoke$arity$1(G__20520) : cljs.core.tv_editable_tail.call(null,G__20520));
})()));
});

cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});

cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var self__ = this;
var v__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(v__$1,f);
});

cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,init){
var self__ = this;
var v__$1 = this;
var i = (0);
var init__$1 = init;
while(true){
if((i < self__.cnt)){
var arr = cljs.core.unchecked_array_for(v__$1,i);
var len = arr.length;
var init__$2 = (function (){var j = (0);
var init__$2 = init__$1;
while(true){
if((j < len)){
var init__$3 = (function (){var G__20521 = init__$2;
var G__20522 = (arr[j]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20521,G__20522) : f.call(null,G__20521,G__20522));
})();
if(cljs.core.reduced_QMARK_(init__$3)){
return init__$3;
} else {
var G__20532 = (j + (1));
var G__20533 = init__$3;
j = G__20532;
init__$2 = G__20533;
continue;
}
} else {
return init__$2;
}
break;
}
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__20523 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20523) : cljs.core.deref.call(null,G__20523));
} else {
var G__20534 = (i + len);
var G__20535 = init__$2;
i = G__20534;
init__$1 = G__20535;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
if(typeof k === 'number'){
return cljs.core._assoc_n(coll__$1,k,v);
} else {
throw (new Error("Vector's key for assoc must be a number."));
}
});

cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt === (0))){
return null;
} else {
if((self__.cnt <= (32))){
return (new cljs.core.IndexedSeq(self__.tail,(0)));
} else {
var G__20524 = coll__$1;
var G__20525 = cljs.core.first_array_for_longvec(coll__$1);
var G__20526 = (0);
var G__20527 = (0);
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__20524,G__20525,G__20526,G__20527) : cljs.core.chunked_seq.call(null,G__20524,G__20525,G__20526,G__20527));

}
}
});

cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentVector(meta__$1,self__.cnt,self__.shift,self__.root,self__.tail,self__.__hash));
});

cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
if(((self__.cnt - cljs.core.tail_off(coll__$1)) < (32))){
var len = self__.tail.length;
var new_tail = (new Array((len + (1))));
var n__4618__auto___20536 = len;
var i_20537 = (0);
while(true){
if((i_20537 < n__4618__auto___20536)){
(new_tail[i_20537] = (self__.tail[i_20537]));

var G__20538 = (i_20537 + (1));
i_20537 = G__20538;
continue;
} else {
}
break;
}

(new_tail[len] = o);

return (new cljs.core.PersistentVector(self__.meta,(self__.cnt + (1)),self__.shift,self__.root,new_tail,null));
} else {
var root_overflow_QMARK_ = ((self__.cnt >>> (5)) > ((1) << self__.shift));
var new_shift = ((root_overflow_QMARK_)?(self__.shift + (5)):self__.shift);
var new_root = ((root_overflow_QMARK_)?(function (){var n_r = cljs.core.pv_fresh_node(null);
cljs.core.pv_aset(n_r,(0),self__.root);

cljs.core.pv_aset(n_r,(1),cljs.core.new_path(null,self__.shift,(new cljs.core.VectorNode(null,self__.tail))));

return n_r;
})():cljs.core.push_tail(coll__$1,self__.shift,self__.root,(new cljs.core.VectorNode(null,self__.tail))));
return (new cljs.core.PersistentVector(self__.meta,(self__.cnt + (1)),new_shift,new_root,[o],null));
}
});

cljs.core.PersistentVector.prototype.call = (function() {
var G__20539 = null;
var G__20539__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__20539__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__20539 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__20539__2.call(this,self__,k);
case 3:
return G__20539__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20539.cljs$core$IFn$_invoke$arity$2 = G__20539__2;
G__20539.cljs$core$IFn$_invoke$arity$3 = G__20539__3;
return G__20539;
})()
;

cljs.core.PersistentVector.prototype.apply = (function (self__,args20514){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args20514)));
});

cljs.core.PersistentVector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});

cljs.core.PersistentVector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});

cljs.core.PersistentVector.cljs$lang$type = true;

cljs.core.PersistentVector.cljs$lang$ctorStr = "cljs.core/PersistentVector";

cljs.core.PersistentVector.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/PersistentVector");
});

cljs.core.__GT_PersistentVector = (function __GT_PersistentVector(meta,cnt,shift,root,tail,__hash){
return (new cljs.core.PersistentVector(meta,cnt,shift,root,tail,__hash));
});

cljs.core.PersistentVector.EMPTY_NODE = (new cljs.core.VectorNode(null,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,(0),(5),cljs.core.PersistentVector.EMPTY_NODE,[],(0)));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l = xs.length;
var xs__$1 = ((no_clone)?xs:cljs.core.aclone(xs));
if((l < (32))){
return (new cljs.core.PersistentVector(null,l,(5),cljs.core.PersistentVector.EMPTY_NODE,xs__$1,null));
} else {
var node = xs__$1.slice((0),(32));
var v = (new cljs.core.PersistentVector(null,(32),(5),cljs.core.PersistentVector.EMPTY_NODE,node,null));
var i = (32);
var out = v.cljs$core$IEditableCollection$_as_transient$arity$1(null);
while(true){
if((i < l)){
var G__20540 = (i + (1));
var G__20541 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,(xs__$1[i]));
i = G__20540;
out = G__20541;
continue;
} else {
return cljs.core.persistent_BANG_(out);
}
break;
}
}
});
(cljs.core.PersistentVector.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4709__auto__ = this;
return cljs.core.es6_iterator(this__4709__auto__);
}));
cljs.core.vec = (function vec(coll){
return cljs.core._persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj_BANG_,cljs.core._as_transient(cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
if(((args instanceof cljs.core.IndexedSeq)) && ((args.i === (0)))){
return cljs.core.PersistentVector.fromArray(args.arr,true);
} else {
return cljs.core.vec(args);
}
};
var vector = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this,args);};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__20542){
var args = cljs.core.seq(arglist__20542);
return vector__delegate(args);
});
vector.cljs$core$IFn$_invoke$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta,__hash){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 32375020;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.ChunkedSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(((self__.off + (1)) < self__.node.length)){
var s = (function (){var G__20543 = self__.vec;
var G__20544 = self__.node;
var G__20545 = self__.i;
var G__20546 = (self__.off + (1));
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__20543,G__20544,G__20545,G__20546) : cljs.core.chunked_seq.call(null,G__20543,G__20544,G__20545,G__20546));
})();
if((s == null)){
return null;
} else {
return s;
}
} else {
return cljs.core._chunked_next(coll__$1);
}
});

cljs.core.ChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4152__auto__ = self__.__hash;
if(!((h__4152__auto__ == null))){
return h__4152__auto__;
} else {
var h__4152__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4152__auto____$1;

return h__4152__auto____$1;
}
});

cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2((function (){var G__20547 = self__.vec;
var G__20548 = (self__.i + self__.off);
var G__20549 = cljs.core.count(self__.vec);
return (cljs.core.subvec.cljs$core$IFn$_invoke$arity$3 ? cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(G__20547,G__20548,G__20549) : cljs.core.subvec.call(null,G__20547,G__20548,G__20549));
})(),f);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3((function (){var G__20550 = self__.vec;
var G__20551 = (self__.i + self__.off);
var G__20552 = cljs.core.count(self__.vec);
return (cljs.core.subvec.cljs$core$IFn$_invoke$arity$3 ? cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(G__20550,G__20551,G__20552) : cljs.core.subvec.call(null,G__20550,G__20551,G__20552));
})(),f,start);
});

cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (self__.node[self__.off]);
});

cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(((self__.off + (1)) < self__.node.length)){
var s = (function (){var G__20553 = self__.vec;
var G__20554 = self__.node;
var G__20555 = self__.i;
var G__20556 = (self__.off + (1));
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__20553,G__20554,G__20555,G__20556) : cljs.core.chunked_seq.call(null,G__20553,G__20554,G__20555,G__20556));
})();
if((s == null)){
return cljs.core.List.EMPTY;
} else {
return s;
}
} else {
return cljs.core._chunked_rest(coll__$1);
}
});

cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_chunk.cljs$core$IFn$_invoke$arity$2(self__.node,self__.off);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var end = (self__.i + self__.node.length);
if((end < cljs.core._count(self__.vec))){
var G__20557 = self__.vec;
var G__20558 = cljs.core.unchecked_array_for(self__.vec,end);
var G__20559 = end;
var G__20560 = (0);
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__20557,G__20558,G__20559,G__20560) : cljs.core.chunked_seq.call(null,G__20557,G__20558,G__20559,G__20560));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var self__ = this;
var coll__$1 = this;
var G__20561 = self__.vec;
var G__20562 = self__.node;
var G__20563 = self__.i;
var G__20564 = self__.off;
var G__20565 = m;
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$5 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$5(G__20561,G__20562,G__20563,G__20564,G__20565) : cljs.core.chunked_seq.call(null,G__20561,G__20562,G__20563,G__20564,G__20565));
});

cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var end = (self__.i + self__.node.length);
if((end < cljs.core._count(self__.vec))){
var G__20566 = self__.vec;
var G__20567 = cljs.core.unchecked_array_for(self__.vec,end);
var G__20568 = end;
var G__20569 = (0);
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__20566,G__20567,G__20568,G__20569) : cljs.core.chunked_seq.call(null,G__20566,G__20567,G__20568,G__20569));
} else {
return null;
}
});

cljs.core.ChunkedSeq.cljs$lang$type = true;

cljs.core.ChunkedSeq.cljs$lang$ctorStr = "cljs.core/ChunkedSeq";

cljs.core.ChunkedSeq.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/ChunkedSeq");
});

cljs.core.__GT_ChunkedSeq = (function __GT_ChunkedSeq(vec,node,i,off,meta,__hash){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,__hash));
});

(cljs.core.ChunkedSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4709__auto__ = this;
return cljs.core.es6_iterator(this__4709__auto__);
}));
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return (new cljs.core.ChunkedSeq(vec,cljs.core.array_for(vec,i),i,off,null,null));
});
var chunked_seq__4 = (function (vec,node,i,off){
return (new cljs.core.ChunkedSeq(vec,node,i,off,null,null));
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,null));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chunked_seq.cljs$core$IFn$_invoke$arity$3 = chunked_seq__3;
chunked_seq.cljs$core$IFn$_invoke$arity$4 = chunked_seq__4;
chunked_seq.cljs$core$IFn$_invoke$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 166617887;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Subvec.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.Subvec.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if(typeof k === 'number'){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,not_found);
} else {
return not_found;
}
});

cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
var coll__$1 = this;
if(((n < (0))) || ((self__.end <= (self__.start + n)))){
return cljs.core.vector_index_out_of_bounds(n,(self__.end - self__.start));
} else {
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.v,(self__.start + n));
}
});

cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var coll__$1 = this;
if(((n < (0))) || ((self__.end <= (self__.start + n)))){
return not_found;
} else {
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(self__.v,(self__.start + n),not_found);
}
});

cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var self__ = this;
var coll__$1 = this;
var v_pos = (self__.start + n);
var G__20571 = self__.meta;
var G__20572 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.v,v_pos,val);
var G__20573 = self__.start;
var G__20574 = (function (){var x__4048__auto__ = self__.end;
var y__4049__auto__ = (v_pos + (1));
return ((x__4048__auto__ > y__4049__auto__) ? x__4048__auto__ : y__4049__auto__);
})();
var G__20575 = null;
return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__20571,G__20572,G__20573,G__20574,G__20575) : cljs.core.build_subvec.call(null,G__20571,G__20572,G__20573,G__20574,G__20575));
});

cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.Subvec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.Subvec(self__.meta,self__.v,self__.start,self__.end,self__.__hash));
});

cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (self__.end - self__.start);
});

cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.v,(self__.end - (1)));
});

cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.start === self__.end)){
throw (new Error("Can't pop empty vector"));
} else {
var G__20576 = self__.meta;
var G__20577 = self__.v;
var G__20578 = self__.start;
var G__20579 = (self__.end - (1));
var G__20580 = null;
return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__20576,G__20577,G__20578,G__20579,G__20580) : cljs.core.build_subvec.call(null,G__20576,G__20577,G__20578,G__20579,G__20580));
}
});

cljs.core.Subvec.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(!((self__.start === self__.end))){
return (new cljs.core.RSeq(coll__$1,((self__.end - self__.start) - (1)),null));
} else {
return null;
}
});

cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4152__auto__ = self__.__hash;
if(!((h__4152__auto__ == null))){
return h__4152__auto__;
} else {
var h__4152__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4152__auto____$1;

return h__4152__auto____$1;
}
});

cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});

cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(coll__$1,f);
});

cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start__$1){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(coll__$1,f,start__$1);
});

cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var self__ = this;
var coll__$1 = this;
if(typeof key === 'number'){
return cljs.core._assoc_n(coll__$1,key,val);
} else {
throw (new Error("Subvec's key for assoc must be a number."));
}
});

cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var subvec_seq = ((function (coll__$1){
return (function subvec_seq(i){
if((i === self__.end)){
return null;
} else {
return cljs.core.cons(cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.v,i),(new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
return subvec_seq((i + (1)));
});})(coll__$1))
,null,null)));
}
});})(coll__$1))
;
return subvec_seq(self__.start);
});

cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
var G__20582 = meta__$1;
var G__20583 = self__.v;
var G__20584 = self__.start;
var G__20585 = self__.end;
var G__20586 = self__.__hash;
return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__20582,G__20583,G__20584,G__20585,G__20586) : cljs.core.build_subvec.call(null,G__20582,G__20583,G__20584,G__20585,G__20586));
});

cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
var G__20587 = self__.meta;
var G__20588 = cljs.core._assoc_n(self__.v,self__.end,o);
var G__20589 = self__.start;
var G__20590 = (self__.end + (1));
var G__20591 = null;
return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__20587,G__20588,G__20589,G__20590,G__20591) : cljs.core.build_subvec.call(null,G__20587,G__20588,G__20589,G__20590,G__20591));
});

cljs.core.Subvec.prototype.call = (function() {
var G__20592 = null;
var G__20592__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__20592__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__20592 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__20592__2.call(this,self__,k);
case 3:
return G__20592__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20592.cljs$core$IFn$_invoke$arity$2 = G__20592__2;
G__20592.cljs$core$IFn$_invoke$arity$3 = G__20592__3;
return G__20592;
})()
;

cljs.core.Subvec.prototype.apply = (function (self__,args20570){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args20570)));
});

cljs.core.Subvec.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});

cljs.core.Subvec.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});

cljs.core.Subvec.cljs$lang$type = true;

cljs.core.Subvec.cljs$lang$ctorStr = "cljs.core/Subvec";

cljs.core.Subvec.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/Subvec");
});

cljs.core.__GT_Subvec = (function __GT_Subvec(meta,v,start,end,__hash){
return (new cljs.core.Subvec(meta,v,start,end,__hash));
});

(cljs.core.Subvec.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4709__auto__ = this;
return cljs.core.es6_iterator(this__4709__auto__);
}));
cljs.core.build_subvec = (function build_subvec(meta,v,start,end,__hash){
while(true){
if((v instanceof cljs.core.Subvec)){
var G__20593 = meta;
var G__20594 = v.v;
var G__20595 = (v.start + start);
var G__20596 = (v.start + end);
var G__20597 = __hash;
meta = G__20593;
v = G__20594;
start = G__20595;
end = G__20596;
__hash = G__20597;
continue;
} else {
var c = cljs.core.count(v);
if(((start < (0))) || ((end < (0))) || ((start > c)) || ((end > c))){
throw (new Error("Index out of bounds"));
} else {
}

return (new cljs.core.Subvec(meta,v,start,end,__hash));
}
break;
}
});
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.cljs$core$IFn$_invoke$arity$3(v,start,cljs.core.count(v));
});
var subvec__3 = (function (v,start,end){
return cljs.core.build_subvec(null,v,start,end,null);
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subvec.cljs$core$IFn$_invoke$arity$2 = subvec__2;
subvec.cljs$core$IFn$_invoke$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit)){
return node;
} else {
return (new cljs.core.VectorNode(edit,cljs.core.aclone(node.arr)));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode((function (){var obj20604 = {};
return obj20604;
})(),cljs.core.aclone(node.arr)));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
cljs.core.array_copy(tl,(0),ret,(0),tl.length);

return ret;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret = cljs.core.tv_ensure_editable(tv.root.edit,parent);
var subidx = (((tv.cnt - (1)) >>> level) & (31));
cljs.core.pv_aset(ret,subidx,(((level === (5)))?tail_node:(function (){var child = cljs.core.pv_aget(ret,subidx);
if(!((child == null))){
return tv_push_tail(tv,(level - (5)),child,tail_node);
} else {
return cljs.core.new_path(tv.root.edit,(level - (5)),tail_node);
}
})()));

return ret;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__$1 = cljs.core.tv_ensure_editable(tv.root.edit,node);
var subidx = (((tv.cnt - (2)) >>> level) & (31));
if((level > (5))){
var new_child = tv_pop_tail(tv,(level - (5)),cljs.core.pv_aget(node__$1,subidx));
if(((new_child == null)) && ((subidx === (0)))){
return null;
} else {
cljs.core.pv_aset(node__$1,subidx,new_child);

return node__$1;
}
} else {
if((subidx === (0))){
return null;
} else {
cljs.core.pv_aset(node__$1,subidx,null);

return node__$1;

}
}
});
cljs.core.unchecked_editable_array_for = (function unchecked_editable_array_for(tv,i){
if((i >= cljs.core.tail_off(tv))){
return tv.tail;
} else {
var root = tv.root;
var node = root;
var level = tv.shift;
while(true){
if((level > (0))){
var G__20612 = cljs.core.tv_ensure_editable(root.edit,cljs.core.pv_aget(node,((i >>> level) & (31))));
var G__20613 = (level - (5));
node = G__20612;
level = G__20613;
continue;
} else {
return node.arr;
}
break;
}
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 88;
})
cljs.core.TransientVector.prototype.call = (function() {
var G__20617 = null;
var G__20617__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__20617__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__20617 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__20617__2.call(this,self__,k);
case 3:
return G__20617__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20617.cljs$core$IFn$_invoke$arity$2 = G__20617__2;
G__20617.cljs$core$IFn$_invoke$arity$3 = G__20617__3;
return G__20617;
})()
;

cljs.core.TransientVector.prototype.apply = (function (self__,args20614){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args20614)));
});

cljs.core.TransientVector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.TransientVector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if(typeof k === 'number'){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,not_found);
} else {
return not_found;
}
});

cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
var coll__$1 = this;
if(self__.root.edit){
return (cljs.core.array_for(coll__$1,n)[(n & (31))]);
} else {
throw (new Error("nth after persistent!"));
}
});

cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var coll__$1 = this;
if((((0) <= n)) && ((n < self__.cnt))){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,n);
} else {
return not_found;
}
});

cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(self__.root.edit){
return self__.cnt;
} else {
throw (new Error("count after persistent!"));
}
});

cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var self__ = this;
var tcoll__$1 = this;
if(self__.root.edit){
if((((0) <= n)) && ((n < self__.cnt))){
if((cljs.core.tail_off(tcoll__$1) <= n)){
(self__.tail[(n & (31))] = val);

return tcoll__$1;
} else {
var new_root = ((function (tcoll__$1){
return (function go(level,node){
var node__$1 = cljs.core.tv_ensure_editable(self__.root.edit,node);
if((level === (0))){
cljs.core.pv_aset(node__$1,(n & (31)),val);

return node__$1;
} else {
var subidx = ((n >>> level) & (31));
cljs.core.pv_aset(node__$1,subidx,go((level - (5)),cljs.core.pv_aget(node__$1,subidx)));

return node__$1;
}
});})(tcoll__$1))
.call(null,self__.shift,self__.root);
self__.root = new_root;

return tcoll__$1;
}
} else {
if((n === self__.cnt)){
return cljs.core._conj_BANG_(tcoll__$1,val);
} else {
throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(self__.cnt)].join('')));

}
}
} else {
throw (new Error("assoc! after persistent!"));
}
});

cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
if(self__.root.edit){
if((self__.cnt === (0))){
throw (new Error("Can't pop empty vector"));
} else {
if(((1) === self__.cnt)){
self__.cnt = (0);

return tcoll__$1;
} else {
if((((self__.cnt - (1)) & (31)) > (0))){
self__.cnt = (self__.cnt - (1));

return tcoll__$1;
} else {
var new_tail = cljs.core.unchecked_editable_array_for(tcoll__$1,(self__.cnt - (2)));
var new_root = (function (){var nr = cljs.core.tv_pop_tail(tcoll__$1,self__.shift,self__.root);
if(!((nr == null))){
return nr;
} else {
return (new cljs.core.VectorNode(self__.root.edit,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
}
})();
if((((5) < self__.shift)) && ((cljs.core.pv_aget(new_root,(1)) == null))){
var new_root__$1 = cljs.core.tv_ensure_editable(self__.root.edit,cljs.core.pv_aget(new_root,(0)));
self__.root = new_root__$1;

self__.shift = (self__.shift - (5));

self__.cnt = (self__.cnt - (1));

self__.tail = new_tail;

return tcoll__$1;
} else {
self__.root = new_root;

self__.cnt = (self__.cnt - (1));

self__.tail = new_tail;

return tcoll__$1;
}

}
}
}
} else {
throw (new Error("pop! after persistent!"));
}
});

cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
var tcoll__$1 = this;
if(typeof key === 'number'){
return cljs.core._assoc_n_BANG_(tcoll__$1,key,val);
} else {
throw (new Error("TransientVector's key for assoc! must be a number."));
}
});

cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
var tcoll__$1 = this;
if(self__.root.edit){
if(((self__.cnt - cljs.core.tail_off(tcoll__$1)) < (32))){
(self__.tail[(self__.cnt & (31))] = o);

self__.cnt = (self__.cnt + (1));

return tcoll__$1;
} else {
var tail_node = (new cljs.core.VectorNode(self__.root.edit,self__.tail));
var new_tail = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(new_tail[(0)] = o);

self__.tail = new_tail;

if(((self__.cnt >>> (5)) > ((1) << self__.shift))){
var new_root_array = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_shift = (self__.shift + (5));
(new_root_array[(0)] = self__.root);

(new_root_array[(1)] = cljs.core.new_path(self__.root.edit,self__.shift,tail_node));

self__.root = (new cljs.core.VectorNode(self__.root.edit,new_root_array));

self__.shift = new_shift;

self__.cnt = (self__.cnt + (1));

return tcoll__$1;
} else {
var new_root = cljs.core.tv_push_tail(tcoll__$1,self__.shift,self__.root,tail_node);
self__.root = new_root;

self__.cnt = (self__.cnt + (1));

return tcoll__$1;
}
}
} else {
throw (new Error("conj! after persistent!"));
}
});

cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
if(self__.root.edit){
self__.root.edit = null;

var len = (self__.cnt - cljs.core.tail_off(tcoll__$1));
var trimmed_tail = (new Array(len));
cljs.core.array_copy(self__.tail,(0),trimmed_tail,(0),len);

return (new cljs.core.PersistentVector(null,self__.cnt,self__.shift,self__.root,trimmed_tail,null));
} else {
throw (new Error("persistent! called twice"));
}
});

cljs.core.TransientVector.cljs$lang$type = true;

cljs.core.TransientVector.cljs$lang$ctorStr = "cljs.core/TransientVector";

cljs.core.TransientVector.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/TransientVector");
});

cljs.core.__GT_TransientVector = (function __GT_TransientVector(cnt,shift,root,tail){
return (new cljs.core.TransientVector(cnt,shift,root,tail));
});


/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentQueueSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4152__auto__ = self__.__hash;
if(!((h__4152__auto__ == null))){
return h__4152__auto__;
} else {
var h__4152__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4152__auto____$1;

return h__4152__auto____$1;
}
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.first(self__.front);
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var temp__4124__auto__ = cljs.core.next(self__.front);
if(temp__4124__auto__){
var f1 = temp__4124__auto__;
return (new cljs.core.PersistentQueueSeq(self__.meta,f1,self__.rear,null));
} else {
if((self__.rear == null)){
return cljs.core._empty(coll__$1);
} else {
return (new cljs.core.PersistentQueueSeq(self__.meta,self__.rear,null,null));
}
}
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentQueueSeq(meta__$1,self__.front,self__.rear,self__.__hash));
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.PersistentQueueSeq.cljs$lang$type = true;

cljs.core.PersistentQueueSeq.cljs$lang$ctorStr = "cljs.core/PersistentQueueSeq";

cljs.core.PersistentQueueSeq.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/PersistentQueueSeq");
});

cljs.core.__GT_PersistentQueueSeq = (function __GT_PersistentQueueSeq(meta,front,rear,__hash){
return (new cljs.core.PersistentQueueSeq(meta,front,rear,__hash));
});

(cljs.core.PersistentQueueSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4709__auto__ = this;
return cljs.core.es6_iterator(this__4709__auto__);
}));

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentQueue.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentQueue.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentQueue.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentQueue(self__.meta,self__.count,self__.front,self__.rear,self__.__hash));
});

cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.count;
});

cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.first(self__.front);
});

cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_(self__.front)){
var temp__4124__auto__ = cljs.core.next(self__.front);
if(temp__4124__auto__){
var f1 = temp__4124__auto__;
return (new cljs.core.PersistentQueue(self__.meta,(self__.count - (1)),f1,self__.rear,null));
} else {
return (new cljs.core.PersistentQueue(self__.meta,(self__.count - (1)),cljs.core.seq(self__.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else {
return coll__$1;
}
});

cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4152__auto__ = self__.__hash;
if(!((h__4152__auto__ == null))){
return h__4152__auto__;
} else {
var h__4152__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4152__auto____$1;

return h__4152__auto____$1;
}
});

cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.PersistentQueue.EMPTY,self__.meta);
});

cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.first(self__.front);
});

cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.rest(cljs.core.seq(coll__$1));
});

cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var rear__$1 = cljs.core.seq(self__.rear);
if(cljs.core.truth_((function (){var or__3731__auto__ = self__.front;
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
return rear__$1;
}
})())){
return (new cljs.core.PersistentQueueSeq(null,self__.front,cljs.core.seq(rear__$1),null));
} else {
return null;
}
});

cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentQueue(meta__$1,self__.count,self__.front,self__.rear,self__.__hash));
});

cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_(self__.front)){
return (new cljs.core.PersistentQueue(self__.meta,(self__.count + (1)),self__.front,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__3731__auto__ = self__.rear;
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else {
return (new cljs.core.PersistentQueue(self__.meta,(self__.count + (1)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});

cljs.core.PersistentQueue.cljs$lang$type = true;

cljs.core.PersistentQueue.cljs$lang$ctorStr = "cljs.core/PersistentQueue";

cljs.core.PersistentQueue.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/PersistentQueue");
});

cljs.core.__GT_PersistentQueue = (function __GT_PersistentQueue(meta,count,front,rear,__hash){
return (new cljs.core.PersistentQueue(meta,count,front,rear,__hash));
});

cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,(0),null,cljs.core.PersistentVector.EMPTY,(0)));
(cljs.core.PersistentQueue.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4709__auto__ = this;
return cljs.core.es6_iterator(this__4709__auto__);
}));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return false;
});

cljs.core.NeverEquiv.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.NeverEquiv.cljs$lang$type = true;

cljs.core.NeverEquiv.cljs$lang$ctorStr = "cljs.core/NeverEquiv";

cljs.core.NeverEquiv.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/NeverEquiv");
});

cljs.core.__GT_NeverEquiv = (function __GT_NeverEquiv(){
return (new cljs.core.NeverEquiv());
});

cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$(((cljs.core.map_QMARK_(y))?(((cljs.core.count(x) === cljs.core.count(y)))?cljs.core.every_QMARK_(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (xkv){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(y,cljs.core.first(xkv),cljs.core.never_equiv),cljs.core.second(xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len = array.length;
var i = (0);
while(true){
if((i < len)){
if((k === (array[i]))){
return i;
} else {
var G__20618 = (i + incr);
i = G__20618;
continue;
}
} else {
return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__$1 = cljs.core.hash(a);
var b__$1 = cljs.core.hash(b);
if((a__$1 < b__$1)){
return (-1);
} else {
if((a__$1 > b__$1)){
return (1);
} else {
return (0);

}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks = m.keys;
var len = ks.length;
var so = m.strobj;
var mm = cljs.core.meta(m);
var i = (0);
var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i < len)){
var k__$1 = (ks[i]);
var G__20619 = (i + (1));
var G__20620 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,k__$1,(so[k__$1]));
i = G__20619;
out = G__20620;
continue;
} else {
return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,k,v)),mm);
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj = (function (){var obj20624 = {};
return obj20624;
})();
var l = ks.length;
var i_20625 = (0);
while(true){
if((i_20625 < l)){
var k_20626 = (ks[i_20625]);
(new_obj[k_20626] = (obj[k_20626]));

var G__20627 = (i_20625 + (1));
i_20625 = G__20627;
continue;
} else {
}
break;
}

return new_obj;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
this.cljs$lang$protocol_mask$partition1$ = 4;
})
cljs.core.ObjMap.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.ObjMap.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_((function (){var and__3719__auto__ = (function (){var G__20631 = k;
return goog.isString(G__20631);
})();
if(cljs.core.truth_(and__3719__auto__)){
return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else {
return and__3719__auto__;
}
})())){
return (self__.strobj[k]);
} else {
return not_found;
}
});

cljs.core.ObjMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var coll__$1 = this;
var len = self__.keys.length;
var keys__$1 = self__.keys.sort(cljs.core.obj_map_compare_keys);
var init__$1 = init;
while(true){
if(cljs.core.seq(keys__$1)){
var k = cljs.core.first(keys__$1);
var init__$2 = (function (){var G__20632 = init__$1;
var G__20633 = k;
var G__20634 = (self__.strobj[k]);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__20632,G__20633,G__20634) : f.call(null,G__20632,G__20633,G__20634));
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__20635 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20635) : cljs.core.deref.call(null,G__20635));
} else {
var G__20641 = cljs.core.rest(keys__$1);
var G__20642 = init__$2;
keys__$1 = G__20641;
init__$1 = G__20642;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.keys.length;
});

cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4152__auto__ = self__.__hash;
if(!((h__4152__auto__ == null))){
return h__4152__auto__;
} else {
var h__4152__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4152__auto____$1;

return h__4152__auto____$1;
}
});

cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_map(coll__$1,other);
});

cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.transient$(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.EMPTY,coll__$1));
});

cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.ObjMap.EMPTY,self__.meta);
});

cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_((function (){var and__3719__auto__ = (function (){var G__20637 = k;
return goog.isString(G__20637);
})();
if(cljs.core.truth_(and__3719__auto__)){
return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else {
return and__3719__auto__;
}
})())){
var new_keys = cljs.core.aclone(self__.keys);
var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);
new_keys.splice(cljs.core.scan_array((1),k,new_keys),(1));

delete new_strobj[k];

return (new cljs.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + (1)),null));
} else {
return coll__$1;
}
});

cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_((function (){var G__20638 = k;
return goog.isString(G__20638);
})())){
if(((self__.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD)) || ((self__.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD))){
return cljs.core.obj_map__GT_hash_map(coll__$1,k,v);
} else {
if(!((cljs.core.scan_array((1),k,self__.keys) == null))){
var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);
(new_strobj[k] = v);

return (new cljs.core.ObjMap(self__.meta,self__.keys,new_strobj,(self__.update_count + (1)),null));
} else {
var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);
var new_keys = cljs.core.aclone(self__.keys);
(new_strobj[k] = v);

new_keys.push(k);

return (new cljs.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + (1)),null));
}
}
} else {
return cljs.core.obj_map__GT_hash_map(coll__$1,k,v);
}
});

cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_((function (){var and__3719__auto__ = (function (){var G__20640 = k;
return goog.isString(G__20640);
})();
if(cljs.core.truth_(and__3719__auto__)){
return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else {
return and__3719__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.keys.length > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (coll__$1){
return (function (p1__20628_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__20628_SHARP_,(self__.strobj[p1__20628_SHARP_])],null));
});})(coll__$1))
,self__.keys.sort(cljs.core.obj_map_compare_keys));
} else {
return null;
}
});

cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.ObjMap(meta__$1,self__.keys,self__.strobj,self__.update_count,self__.__hash));
});

cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,coll__$1,entry);
}
});

cljs.core.ObjMap.prototype.call = (function() {
var G__20643 = null;
var G__20643__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__20643__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__20643 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__20643__2.call(this,self__,k);
case 3:
return G__20643__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20643.cljs$core$IFn$_invoke$arity$2 = G__20643__2;
G__20643.cljs$core$IFn$_invoke$arity$3 = G__20643__3;
return G__20643;
})()
;

cljs.core.ObjMap.prototype.apply = (function (self__,args20629){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args20629)));
});

cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.ObjMap.cljs$lang$type = true;

cljs.core.ObjMap.cljs$lang$ctorStr = "cljs.core/ObjMap";

cljs.core.ObjMap.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/ObjMap");
});

cljs.core.__GT_ObjMap = (function __GT_ObjMap(meta,keys,strobj,update_count,__hash){
return (new cljs.core.ObjMap(meta,keys,strobj,update_count,__hash));
});

cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],(function (){var obj20645 = {};
return obj20645;
})(),(0),(0)));
cljs.core.ObjMap.HASHMAP_THRESHOLD = (8);
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,(0),null));
});

/**
* @constructor
*/
cljs.core.ES6EntriesIterator = (function (s){
this.s = s;
})
cljs.core.ES6EntriesIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
if(!((self__.s == null))){
var vec__20646 = cljs.core.first(self__.s);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20646,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20646,(1),null);
self__.s = cljs.core.next(self__.s);

return {"done": false, "value": [k,v]};
} else {
return {"done": true, "value": null};
}
});

cljs.core.ES6EntriesIterator.cljs$lang$type = true;

cljs.core.ES6EntriesIterator.cljs$lang$ctorStr = "cljs.core/ES6EntriesIterator";

cljs.core.ES6EntriesIterator.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/ES6EntriesIterator");
});

cljs.core.__GT_ES6EntriesIterator = (function __GT_ES6EntriesIterator(s){
return (new cljs.core.ES6EntriesIterator(s));
});

cljs.core.es6_entries_iterator = (function es6_entries_iterator(coll){
return (new cljs.core.ES6EntriesIterator(cljs.core.seq(coll)));
});

/**
* @constructor
*/
cljs.core.ES6SetEntriesIterator = (function (s){
this.s = s;
})
cljs.core.ES6SetEntriesIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
if(!((self__.s == null))){
var x = cljs.core.first(self__.s);
self__.s = cljs.core.next(self__.s);

return {"done": false, "value": [x,x]};
} else {
return {"done": true, "value": null};
}
});

cljs.core.ES6SetEntriesIterator.cljs$lang$type = true;

cljs.core.ES6SetEntriesIterator.cljs$lang$ctorStr = "cljs.core/ES6SetEntriesIterator";

cljs.core.ES6SetEntriesIterator.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/ES6SetEntriesIterator");
});

cljs.core.__GT_ES6SetEntriesIterator = (function __GT_ES6SetEntriesIterator(s){
return (new cljs.core.ES6SetEntriesIterator(s));
});

cljs.core.es6_set_entries_iterator = (function es6_set_entries_iterator(coll){
return (new cljs.core.ES6SetEntriesIterator(cljs.core.seq(coll)));
});
cljs.core.array_map_index_of_nil_QMARK_ = (function array_map_index_of_nil_QMARK_(arr,m,k){
var len = arr.length;
var i = (0);
while(true){
if((len <= i)){
return (-1);
} else {
if(((arr[i]) == null)){
return i;
} else {
var G__20647 = (i + (2));
i = G__20647;
continue;

}
}
break;
}
});
cljs.core.array_map_index_of_keyword_QMARK_ = (function array_map_index_of_keyword_QMARK_(arr,m,k){
var len = arr.length;
var kstr = k.fqn;
var i = (0);
while(true){
if((len <= i)){
return (-1);
} else {
if((function (){var k_SINGLEQUOTE_ = (arr[i]);
return ((k_SINGLEQUOTE_ instanceof cljs.core.Keyword)) && ((kstr === k_SINGLEQUOTE_.fqn));
})()){
return i;
} else {
var G__20648 = (i + (2));
i = G__20648;
continue;

}
}
break;
}
});
cljs.core.array_map_index_of_symbol_QMARK_ = (function array_map_index_of_symbol_QMARK_(arr,m,k){
var len = arr.length;
var kstr = k.str;
var i = (0);
while(true){
if((len <= i)){
return (-1);
} else {
if((function (){var k_SINGLEQUOTE_ = (arr[i]);
return ((k_SINGLEQUOTE_ instanceof cljs.core.Symbol)) && ((kstr === k_SINGLEQUOTE_.str));
})()){
return i;
} else {
var G__20649 = (i + (2));
i = G__20649;
continue;

}
}
break;
}
});
cljs.core.array_map_index_of_identical_QMARK_ = (function array_map_index_of_identical_QMARK_(arr,m,k){
var len = arr.length;
var i = (0);
while(true){
if((len <= i)){
return (-1);
} else {
if((k === (arr[i]))){
return i;
} else {
var G__20650 = (i + (2));
i = G__20650;
continue;

}
}
break;
}
});
cljs.core.array_map_index_of_equiv_QMARK_ = (function array_map_index_of_equiv_QMARK_(arr,m,k){
var len = arr.length;
var i = (0);
while(true){
if((len <= i)){
return (-1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(arr[i]))){
return i;
} else {
var G__20651 = (i + (2));
i = G__20651;
continue;

}
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr = m.arr;
if((k instanceof cljs.core.Keyword)){
return cljs.core.array_map_index_of_keyword_QMARK_(arr,m,k);
} else {
if(cljs.core.truth_((function (){var or__3731__auto__ = (function (){var G__20655 = k;
return goog.isString(G__20655);
})();
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
return typeof k === 'number';
}
})())){
return cljs.core.array_map_index_of_identical_QMARK_(arr,m,k);
} else {
if((k instanceof cljs.core.Symbol)){
return cljs.core.array_map_index_of_symbol_QMARK_(arr,m,k);
} else {
if((k == null)){
return cljs.core.array_map_index_of_nil_QMARK_(arr,m,k);
} else {
return cljs.core.array_map_index_of_equiv_QMARK_(arr,m,k);

}
}
}
}
});
cljs.core.array_map_extend_kv = (function array_map_extend_kv(m,k,v){
var arr = m.arr;
var l = arr.length;
var narr = (new Array((l + (2))));
var i_20656 = (0);
while(true){
if((i_20656 < l)){
(narr[i_20656] = (arr[i_20656]));

var G__20657 = (i_20656 + (1));
i_20656 = G__20657;
continue;
} else {
}
break;
}

(narr[l] = k);

(narr[(l + (1))] = v);

return narr;
});

/**
* @constructor
*/
cljs.core.PersistentArrayMapSeq = (function (arr,i,_meta){
this.arr = arr;
this.i = i;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374990;
})
cljs.core.PersistentArrayMapSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentArrayMapSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__._meta;
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.i < (self__.arr.length - (2)))){
return (new cljs.core.PersistentArrayMapSeq(self__.arr,(self__.i + (2)),self__._meta));
} else {
return null;
}
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return ((self__.arr.length - self__.i) / (2));
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll(coll__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__._meta);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[self__.i]),(self__.arr[(self__.i + (1))])], null);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.i < (self__.arr.length - (2)))){
return (new cljs.core.PersistentArrayMapSeq(self__.arr,(self__.i + (2)),self__._meta));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentArrayMapSeq(self__.arr,self__.i,new_meta));
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.PersistentArrayMapSeq.cljs$lang$type = true;

cljs.core.PersistentArrayMapSeq.cljs$lang$ctorStr = "cljs.core/PersistentArrayMapSeq";

cljs.core.PersistentArrayMapSeq.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/PersistentArrayMapSeq");
});

cljs.core.__GT_PersistentArrayMapSeq = (function __GT_PersistentArrayMapSeq(arr,i,_meta){
return (new cljs.core.PersistentArrayMapSeq(arr,i,_meta));
});

(cljs.core.PersistentArrayMapSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4709__auto__ = this;
return cljs.core.es6_iterator(this__4709__auto__);
}));
cljs.core.persistent_array_map_seq = (function persistent_array_map_seq(arr,i,_meta){
if((i <= (arr.length - (2)))){
return (new cljs.core.PersistentArrayMapSeq(arr,i,_meta));
} else {
return null;
}
});


/**
* @constructor
*/
cljs.core.PersistentArrayMapIterator = (function (arr,i,cnt){
this.arr = arr;
this.i = i;
this.cnt = cnt;
})
cljs.core.PersistentArrayMapIterator.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return (self__.i < self__.cnt);
});

cljs.core.PersistentArrayMapIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[self__.i]),(self__.arr[(self__.i + (1))])], null);
self__.i = (self__.i + (2));

return ret;
});

cljs.core.PersistentArrayMapIterator.cljs$lang$type = true;

cljs.core.PersistentArrayMapIterator.cljs$lang$ctorStr = "cljs.core/PersistentArrayMapIterator";

cljs.core.PersistentArrayMapIterator.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/PersistentArrayMapIterator");
});

cljs.core.__GT_PersistentArrayMapIterator = (function __GT_PersistentArrayMapIterator(arr,i,cnt){
return (new cljs.core.PersistentArrayMapIterator(arr,i,cnt));
});


/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16647951;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentArrayMap.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentArrayMap.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((function (){var G__20659 = coll;
return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__20659) : cljs.core.keys.call(null,G__20659));
})());
});

cljs.core.PersistentArrayMap.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_entries_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentArrayMap.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((function (){var G__20660 = coll;
return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__20660) : cljs.core.vals.call(null,G__20660));
})());
});

cljs.core.PersistentArrayMap.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_(coll,k);
});

cljs.core.PersistentArrayMap.prototype.get = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentArrayMap.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__20661 = cljs.core.seq(coll);
var chunk__20662 = null;
var count__20663 = (0);
var i__20664 = (0);
while(true){
if((i__20664 < count__20663)){
var vec__20665 = chunk__20662.cljs$core$IIndexed$_nth$arity$2(null,i__20664);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20665,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20665,(1),null);
var G__20666_20679 = v;
var G__20667_20680 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20666_20679,G__20667_20680) : f.call(null,G__20666_20679,G__20667_20680));

var G__20681 = seq__20661;
var G__20682 = chunk__20662;
var G__20683 = count__20663;
var G__20684 = (i__20664 + (1));
seq__20661 = G__20681;
chunk__20662 = G__20682;
count__20663 = G__20683;
i__20664 = G__20684;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__20661);
if(temp__4126__auto__){
var seq__20661__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20661__$1)){
var c__4518__auto__ = cljs.core.chunk_first(seq__20661__$1);
var G__20685 = cljs.core.chunk_rest(seq__20661__$1);
var G__20686 = c__4518__auto__;
var G__20687 = cljs.core.count(c__4518__auto__);
var G__20688 = (0);
seq__20661 = G__20685;
chunk__20662 = G__20686;
count__20663 = G__20687;
i__20664 = G__20688;
continue;
} else {
var vec__20668 = cljs.core.first(seq__20661__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20668,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20668,(1),null);
var G__20669_20689 = v;
var G__20670_20690 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20669_20689,G__20670_20690) : f.call(null,G__20669_20689,G__20670_20690));

var G__20691 = cljs.core.next(seq__20661__$1);
var G__20692 = null;
var G__20693 = (0);
var G__20694 = (0);
seq__20661 = G__20691;
chunk__20662 = G__20692;
count__20663 = G__20693;
i__20664 = G__20694;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
var idx = cljs.core.array_map_index_of(coll__$1,k);
if((idx === (-1))){
return not_found;
} else {
return (self__.arr[(idx + (1))]);
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var coll__$1 = this;
var len = self__.arr.length;
var i = (0);
var init__$1 = init;
while(true){
if((i < len)){
var init__$2 = (function (){var G__20671 = init__$1;
var G__20672 = (self__.arr[i]);
var G__20673 = (self__.arr[(i + (1))]);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__20671,G__20672,G__20673) : f.call(null,G__20671,G__20672,G__20673));
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__20674 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20674) : cljs.core.deref.call(null,G__20674));
} else {
var G__20695 = (i + (2));
var G__20696 = init__$2;
i = G__20695;
init__$1 = G__20696;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IIterable$ = true;

cljs.core.PersistentArrayMap.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.PersistentArrayMapIterator(self__.arr,(0),(self__.cnt * (2))));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentArrayMap(self__.meta,self__.cnt,self__.arr,self__.__hash));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.cnt;
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4152__auto__ = self__.__hash;
if(!((h__4152__auto__ == null))){
return h__4152__auto__;
} else {
var h__4152__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4152__auto____$1;

return h__4152__auto____$1;
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
if((function (){var G__20675 = other;
if(G__20675){
var bit__4405__auto__ = (G__20675.cljs$lang$protocol_mask$partition0$ & (1024));
if((bit__4405__auto__) || (G__20675.cljs$core$IMap$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
var alen = self__.arr.length;
var other__$1 = other;
if((self__.cnt === other__$1.cljs$core$ICounted$_count$arity$1(null))){
var i = (0);
while(true){
if((i < alen)){
var v = other__$1.cljs$core$ILookup$_lookup$arity$3(null,(self__.arr[i]),cljs.core.lookup_sentinel);
if(!((v === cljs.core.lookup_sentinel))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.arr[(i + (1))]),v)){
var G__20697 = (i + (2));
i = G__20697;
continue;
} else {
return false;
}
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
} else {
return cljs.core.equiv_map(coll__$1,other);
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.TransientArrayMap((function (){var obj20677 = {};
return obj20677;
})(),self__.arr.length,cljs.core.aclone(self__.arr)));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._with_meta(cljs.core.PersistentArrayMap.EMPTY,self__.meta);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
var idx = cljs.core.array_map_index_of(coll__$1,k);
if((idx >= (0))){
var len = self__.arr.length;
var new_len = (len - (2));
if((new_len === (0))){
return cljs.core._empty(coll__$1);
} else {
var new_arr = (new Array(new_len));
var s = (0);
var d = (0);
while(true){
if((s >= len)){
return (new cljs.core.PersistentArrayMap(self__.meta,(self__.cnt - (1)),new_arr,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(self__.arr[s]))){
var G__20698 = (s + (2));
var G__20699 = d;
s = G__20698;
d = G__20699;
continue;
} else {
(new_arr[d] = (self__.arr[s]));

(new_arr[(d + (1))] = (self__.arr[(s + (1))]));

var G__20700 = (s + (2));
var G__20701 = (d + (2));
s = G__20700;
d = G__20701;
continue;

}
}
break;
}
}
} else {
return coll__$1;
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
var idx = cljs.core.array_map_index_of(coll__$1,k);
if((idx === (-1))){
if((self__.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)){
var arr__$1 = cljs.core.array_map_extend_kv(coll__$1,k,v);
return (new cljs.core.PersistentArrayMap(self__.meta,(self__.cnt + (1)),arr__$1,null));
} else {
return cljs.core._with_meta(cljs.core._assoc(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.EMPTY,coll__$1),k,v),self__.meta);
}
} else {
if((v === (self__.arr[(idx + (1))]))){
return coll__$1;
} else {
var arr__$1 = (function (){var G__20678 = cljs.core.aclone(self__.arr);
(G__20678[(idx + (1))] = v);

return G__20678;
})();
return (new cljs.core.PersistentArrayMap(self__.meta,self__.cnt,arr__$1,null));

}
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return !((cljs.core.array_map_index_of(coll__$1,k) === (-1)));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.persistent_array_map_seq(self__.arr,(0),null);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentArrayMap(meta__$1,self__.cnt,self__.arr,self__.__hash));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else {
var ret = coll__$1;
var es = cljs.core.seq(entry);
while(true){
if((es == null)){
return ret;
} else {
var e = cljs.core.first(es);
if(cljs.core.vector_QMARK_(e)){
var G__20702 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__20703 = cljs.core.next(es);
ret = G__20702;
es = G__20703;
continue;
} else {
throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});

cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__20704 = null;
var G__20704__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__20704__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__20704 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__20704__2.call(this,self__,k);
case 3:
return G__20704__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20704.cljs$core$IFn$_invoke$arity$2 = G__20704__2;
G__20704.cljs$core$IFn$_invoke$arity$3 = G__20704__3;
return G__20704;
})()
;

cljs.core.PersistentArrayMap.prototype.apply = (function (self__,args20658){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args20658)));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.PersistentArrayMap.cljs$lang$type = true;

cljs.core.PersistentArrayMap.cljs$lang$ctorStr = "cljs.core/PersistentArrayMap";

cljs.core.PersistentArrayMap.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/PersistentArrayMap");
});

cljs.core.__GT_PersistentArrayMap = (function __GT_PersistentArrayMap(meta,cnt,arr,__hash){
return (new cljs.core.PersistentArrayMap(meta,cnt,arr,__hash));
});

cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,(0),[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = (8);
cljs.core.PersistentArrayMap.fromArray = (function (arr,no_clone,no_check){
var arr__$1 = ((no_clone)?arr:cljs.core.aclone(arr));
if(no_check){
var cnt = (arr__$1.length / (2));
return (new cljs.core.PersistentArrayMap(null,cnt,arr__$1,null));
} else {
var len = arr__$1.length;
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < len)){
var G__20705 = (i + (2));
var G__20706 = cljs.core._assoc_BANG_(ret,(arr__$1[i]),(arr__$1[(i + (1))]));
i = G__20705;
ret = G__20706;
continue;
} else {
return cljs.core._persistent_BANG_(ret);
}
break;
}
}
});
(cljs.core.PersistentArrayMap.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4709__auto__ = this;
return cljs.core.es6_iterator(this__4709__auto__);
}));

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
var idx = cljs.core.array_map_index_of(tcoll__$1,key);
if((idx >= (0))){
(self__.arr[idx] = (self__.arr[(self__.len - (2))]));

(self__.arr[(idx + (1))] = (self__.arr[(self__.len - (1))]));

var G__20707_20715 = self__.arr;
G__20707_20715.pop();

G__20707_20715.pop();


self__.len = (self__.len - (2));
} else {
}

return tcoll__$1;
} else {
throw (new Error("dissoc! after persistent!"));
}
});

cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
var idx = cljs.core.array_map_index_of(tcoll__$1,key);
if((idx === (-1))){
if(((self__.len + (2)) <= ((2) * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))){
self__.len = (self__.len + (2));

self__.arr.push(key);

self__.arr.push(val);

return tcoll__$1;
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3((function (){var G__20708 = self__.len;
var G__20709 = self__.arr;
return (cljs.core.array__GT_transient_hash_map.cljs$core$IFn$_invoke$arity$2 ? cljs.core.array__GT_transient_hash_map.cljs$core$IFn$_invoke$arity$2(G__20708,G__20709) : cljs.core.array__GT_transient_hash_map.call(null,G__20708,G__20709));
})(),key,val);
}
} else {
if((val === (self__.arr[(idx + (1))]))){
return tcoll__$1;
} else {
(self__.arr[(idx + (1))] = val);

return tcoll__$1;
}
}
} else {
throw (new Error("assoc! after persistent!"));
}
});

cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
if((function (){var G__20710 = o;
if(G__20710){
var bit__4412__auto__ = (G__20710.cljs$lang$protocol_mask$partition0$ & (2048));
if((bit__4412__auto__) || (G__20710.cljs$core$IMapEntry$)){
return true;
} else {
if((!G__20710.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__20710);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__20710);
}
})()){
return cljs.core._assoc_BANG_(tcoll__$1,(function (){var G__20711 = o;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__20711) : cljs.core.key.call(null,G__20711));
})(),(function (){var G__20712 = o;
return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__20712) : cljs.core.val.call(null,G__20712));
})());
} else {
var es = cljs.core.seq(o);
var tcoll__$2 = tcoll__$1;
while(true){
var temp__4124__auto__ = cljs.core.first(es);
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
var G__20716 = cljs.core.next(es);
var G__20717 = cljs.core._assoc_BANG_(tcoll__$2,(function (){var G__20713 = e;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__20713) : cljs.core.key.call(null,G__20713));
})(),(function (){var G__20714 = e;
return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__20714) : cljs.core.val.call(null,G__20714));
})());
es = G__20716;
tcoll__$2 = G__20717;
continue;
} else {
return tcoll__$2;
}
break;
}
}
} else {
throw (new Error("conj! after persistent!"));
}
});

cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
self__.editable_QMARK_ = false;

return (new cljs.core.PersistentArrayMap(null,cljs.core.quot(self__.len,(2)),self__.arr,null));
} else {
throw (new Error("persistent! called twice"));
}
});

cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var self__ = this;
var tcoll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(tcoll__$1,k,null);
});

cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
var idx = cljs.core.array_map_index_of(tcoll__$1,k);
if((idx === (-1))){
return not_found;
} else {
return (self__.arr[(idx + (1))]);
}
} else {
throw (new Error("lookup after persistent!"));
}
});

cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
return cljs.core.quot(self__.len,(2));
} else {
throw (new Error("count after persistent!"));
}
});

cljs.core.TransientArrayMap.cljs$lang$type = true;

cljs.core.TransientArrayMap.cljs$lang$ctorStr = "cljs.core/TransientArrayMap";

cljs.core.TransientArrayMap.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/TransientArrayMap");
});

cljs.core.__GT_TransientArrayMap = (function __GT_TransientArrayMap(editable_QMARK_,len,arr){
return (new cljs.core.TransientArrayMap(editable_QMARK_,len,arr));
});


cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
var i = (0);
while(true){
if((i < len)){
var G__20718 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,(arr[i]),(arr[(i + (1))]));
var G__20719 = (i + (2));
out = G__20718;
i = G__20719;
continue;
} else {
return out;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})

cljs.core.Box.cljs$lang$type = true;

cljs.core.Box.cljs$lang$ctorStr = "cljs.core/Box";

cljs.core.Box.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/Box");
});

cljs.core.__GT_Box = (function __GT_Box(val){
return (new cljs.core.Box(val));
});






cljs.core.key_test = (function key_test(key,other){
if((key === other)){
return true;
} else {
if(cljs.core.keyword_identical_QMARK_(key,other)){
return true;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,other);

}
}
});
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & (31));
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__20722 = cljs.core.aclone(arr);
(G__20722[i] = a);

return G__20722;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__20723 = cljs.core.aclone(arr);
(G__20723[i] = a);

(G__20723[j] = b);

return G__20723;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clone_and_set.cljs$core$IFn$_invoke$arity$3 = clone_and_set__3;
clone_and_set.cljs$core$IFn$_invoke$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr = (new Array((arr.length - (2))));
cljs.core.array_copy(arr,(0),new_arr,(0),((2) * i));

cljs.core.array_copy(arr,((2) * (i + (1))),new_arr,((2) * i),(new_arr.length - ((2) * i)));

return new_arr;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count((bitmap & (bit - (1))));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return ((1) << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable = inode.ensure_editable(edit);
(editable.arr[i] = a);

return editable;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable = inode.ensure_editable(edit);
(editable.arr[i] = a);

(editable.arr[j] = b);

return editable;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
edit_and_set.cljs$core$IFn$_invoke$arity$4 = edit_and_set__4;
edit_and_set.cljs$core$IFn$_invoke$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len = arr.length;
var i = (0);
var init__$1 = init;
while(true){
if((i < len)){
var init__$2 = (function (){var k = (arr[i]);
if(!((k == null))){
var G__20728 = init__$1;
var G__20729 = k;
var G__20730 = (arr[(i + (1))]);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__20728,G__20729,G__20730) : f.call(null,G__20728,G__20729,G__20730));
} else {
var node = (arr[(i + (1))]);
if(!((node == null))){
return node.kv_reduce(f,init__$1);
} else {
return init__$1;
}
}
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__20731 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20731) : cljs.core.deref.call(null,G__20731));
} else {
var G__20732 = (i + (2));
var G__20733 = init__$2;
i = G__20732;
init__$1 = G__20733;
continue;
}
} else {
return init__$1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var self__ = this;
var inode = this;
if((e === self__.edit)){
return inode;
} else {
var n = cljs.core.bit_count(self__.bitmap);
var new_arr = (new Array((((n < (0)))?(4):((2) * (n + (1))))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * n));

return (new cljs.core.BitmapIndexedNode(e,self__.bitmap,new_arr));
}
});

cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === (0))){
return inode;
} else {
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
var n = val_or_node.inode_without_BANG_(edit__$1,(shift + (5)),hash,key,removed_leaf_QMARK_);
if((n === val_or_node)){
return inode;
} else {
if(!((n == null))){
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(((2) * idx) + (1)),n);
} else {
if((self__.bitmap === bit)){
return null;
} else {
return inode.edit_and_remove_pair(edit__$1,bit,idx);

}
}
}
} else {
if(cljs.core.key_test(key,key_or_nil)){
(removed_leaf_QMARK_[(0)] = true);

return inode.edit_and_remove_pair(edit__$1,bit,idx);
} else {
return inode;

}
}
}
});

cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var self__ = this;
var inode = this;
if((self__.bitmap === bit)){
return null;
} else {
var editable = inode.ensure_editable(e);
var earr = editable.arr;
var len = earr.length;
editable.bitmap = (bit ^ editable.bitmap);

cljs.core.array_copy(earr,((2) * (i + (1))),earr,((2) * i),(len - ((2) * (i + (1)))));

(earr[(len - (2))] = null);

(earr[(len - (1))] = null);

return editable;
}
});

cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var self__ = this;
var inode = this;
var G__20734 = self__.arr;
return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1(G__20734) : cljs.core.create_inode_seq.call(null,G__20734));
});

cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
return cljs.core.inode_kv_reduce(self__.arr,f,init);
});

cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === (0))){
return not_found;
} else {
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
return val_or_node.inode_lookup((shift + (5)),hash,key,not_found);
} else {
if(cljs.core.key_test(key,key_or_nil)){
return val_or_node;
} else {
return not_found;

}
}
}
});

cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
if(((self__.bitmap & bit) === (0))){
var n = cljs.core.bit_count(self__.bitmap);
if((((2) * n) < self__.arr.length)){
var editable = inode.ensure_editable(edit__$1);
var earr = editable.arr;
added_leaf_QMARK_.val = true;

cljs.core.array_copy_downward(earr,((2) * idx),earr,((2) * (idx + (1))),((2) * (n - idx)));

(earr[((2) * idx)] = key);

(earr[(((2) * idx) + (1))] = val);

editable.bitmap = (editable.bitmap | bit);

return editable;
} else {
if((n >= (16))){
var nodes = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var jdx = ((hash >>> shift) & 0x01f);
(nodes[jdx] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_));

var i_20748 = (0);
var j_20749 = (0);
while(true){
if((i_20748 < (32))){
if((((self__.bitmap >>> i_20748) & (1)) === (0))){
var G__20750 = (i_20748 + (1));
var G__20751 = j_20749;
i_20748 = G__20750;
j_20749 = G__20751;
continue;
} else {
(nodes[i_20748] = ((!(((self__.arr[j_20749]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),cljs.core.hash((self__.arr[j_20749])),(self__.arr[j_20749]),(self__.arr[(j_20749 + (1))]),added_leaf_QMARK_):(self__.arr[(j_20749 + (1))])));

var G__20752 = (i_20748 + (1));
var G__20753 = (j_20749 + (2));
i_20748 = G__20752;
j_20749 = G__20753;
continue;
}
} else {
}
break;
}

return (new cljs.core.ArrayNode(edit__$1,(n + (1)),nodes));
} else {
var new_arr = (new Array(((2) * (n + (4)))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * idx));

(new_arr[((2) * idx)] = key);

(new_arr[(((2) * idx) + (1))] = val);

cljs.core.array_copy(self__.arr,((2) * idx),new_arr,((2) * (idx + (1))),((2) * (n - idx)));

added_leaf_QMARK_.val = true;

var editable = inode.ensure_editable(edit__$1);
editable.arr = new_arr;

editable.bitmap = (editable.bitmap | bit);

return editable;

}
}
} else {
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
var n = val_or_node.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_);
if((n === val_or_node)){
return inode;
} else {
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(((2) * idx) + (1)),n);
}
} else {
if(cljs.core.key_test(key,key_or_nil)){
if((val === val_or_node)){
return inode;
} else {
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(((2) * idx) + (1)),val);
}
} else {
added_leaf_QMARK_.val = true;

return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$6(inode,edit__$1,((2) * idx),null,(((2) * idx) + (1)),(function (){var G__20735 = edit__$1;
var G__20736 = (shift + (5));
var G__20737 = key_or_nil;
var G__20738 = val_or_node;
var G__20739 = hash;
var G__20740 = key;
var G__20741 = val;
return (cljs.core.create_node.cljs$core$IFn$_invoke$arity$7 ? cljs.core.create_node.cljs$core$IFn$_invoke$arity$7(G__20735,G__20736,G__20737,G__20738,G__20739,G__20740,G__20741) : cljs.core.create_node.call(null,G__20735,G__20736,G__20737,G__20738,G__20739,G__20740,G__20741));
})());

}
}
}
});

cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
if(((self__.bitmap & bit) === (0))){
var n = cljs.core.bit_count(self__.bitmap);
if((n >= (16))){
var nodes = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var jdx = ((hash >>> shift) & 0x01f);
(nodes[jdx] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_));

var i_20754 = (0);
var j_20755 = (0);
while(true){
if((i_20754 < (32))){
if((((self__.bitmap >>> i_20754) & (1)) === (0))){
var G__20756 = (i_20754 + (1));
var G__20757 = j_20755;
i_20754 = G__20756;
j_20755 = G__20757;
continue;
} else {
(nodes[i_20754] = ((!(((self__.arr[j_20755]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),cljs.core.hash((self__.arr[j_20755])),(self__.arr[j_20755]),(self__.arr[(j_20755 + (1))]),added_leaf_QMARK_):(self__.arr[(j_20755 + (1))])));

var G__20758 = (i_20754 + (1));
var G__20759 = (j_20755 + (2));
i_20754 = G__20758;
j_20755 = G__20759;
continue;
}
} else {
}
break;
}

return (new cljs.core.ArrayNode(null,(n + (1)),nodes));
} else {
var new_arr = (new Array(((2) * (n + (1)))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * idx));

(new_arr[((2) * idx)] = key);

(new_arr[(((2) * idx) + (1))] = val);

cljs.core.array_copy(self__.arr,((2) * idx),new_arr,((2) * (idx + (1))),((2) * (n - idx)));

added_leaf_QMARK_.val = true;

return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap | bit),new_arr));
}
} else {
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
var n = val_or_node.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_);
if((n === val_or_node)){
return inode;
} else {
return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(((2) * idx) + (1)),n)));
}
} else {
if(cljs.core.key_test(key,key_or_nil)){
if((val === val_or_node)){
return inode;
} else {
return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(((2) * idx) + (1)),val)));
}
} else {
added_leaf_QMARK_.val = true;

return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$5(self__.arr,((2) * idx),null,(((2) * idx) + (1)),(function (){var G__20742 = (shift + (5));
var G__20743 = key_or_nil;
var G__20744 = val_or_node;
var G__20745 = hash;
var G__20746 = key;
var G__20747 = val;
return (cljs.core.create_node.cljs$core$IFn$_invoke$arity$6 ? cljs.core.create_node.cljs$core$IFn$_invoke$arity$6(G__20742,G__20743,G__20744,G__20745,G__20746,G__20747) : cljs.core.create_node.call(null,G__20742,G__20743,G__20744,G__20745,G__20746,G__20747));
})())));

}
}
}
});

cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === (0))){
return not_found;
} else {
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
return val_or_node.inode_find((shift + (5)),hash,key,not_found);
} else {
if(cljs.core.key_test(key,key_or_nil)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_nil,val_or_node], null);
} else {
return not_found;

}
}
}
});

cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === (0))){
return inode;
} else {
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
var n = val_or_node.inode_without((shift + (5)),hash,key);
if((n === val_or_node)){
return inode;
} else {
if(!((n == null))){
return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(((2) * idx) + (1)),n)));
} else {
if((self__.bitmap === bit)){
return null;
} else {
return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),cljs.core.remove_pair(self__.arr,idx)));

}
}
}
} else {
if(cljs.core.key_test(key,key_or_nil)){
return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),cljs.core.remove_pair(self__.arr,idx)));
} else {
return inode;

}
}
}
});

cljs.core.BitmapIndexedNode.cljs$lang$type = true;

cljs.core.BitmapIndexedNode.cljs$lang$ctorStr = "cljs.core/BitmapIndexedNode";

cljs.core.BitmapIndexedNode.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/BitmapIndexedNode");
});

cljs.core.__GT_BitmapIndexedNode = (function __GT_BitmapIndexedNode(edit,bitmap,arr){
return (new cljs.core.BitmapIndexedNode(edit,bitmap,arr));
});

cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,(0),[]));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr = array_node.arr;
var len = arr.length;
var new_arr = (new Array(((2) * (array_node.cnt - (1)))));
var i = (0);
var j = (1);
var bitmap = (0);
while(true){
if((i < len)){
if((!((i === idx))) && (!(((arr[i]) == null)))){
(new_arr[j] = (arr[i]));

var G__20760 = (i + (1));
var G__20761 = (j + (2));
var G__20762 = (bitmap | ((1) << i));
i = G__20760;
j = G__20761;
bitmap = G__20762;
continue;
} else {
var G__20763 = (i + (1));
var G__20764 = j;
var G__20765 = bitmap;
i = G__20763;
j = G__20764;
bitmap = G__20765;
continue;
}
} else {
return (new cljs.core.BitmapIndexedNode(edit,bitmap,new_arr));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var self__ = this;
var inode = this;
if((e === self__.edit)){
return inode;
} else {
return (new cljs.core.ArrayNode(e,self__.cnt,cljs.core.aclone(self__.arr)));
}
});

cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if((node == null)){
return inode;
} else {
var n = node.inode_without_BANG_(edit__$1,(shift + (5)),hash,key,removed_leaf_QMARK_);
if((n === node)){
return inode;
} else {
if((n == null)){
if((self__.cnt <= (8))){
return cljs.core.pack_array_node(inode,edit__$1,idx);
} else {
var editable = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,n);
editable.cnt = (editable.cnt - (1));

return editable;
}
} else {
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,n);

}
}
}
});

cljs.core.ArrayNode.prototype.inode_seq = (function (){
var self__ = this;
var inode = this;
var G__20766 = self__.arr;
return (cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$1(G__20766) : cljs.core.create_array_node_seq.call(null,G__20766));
});

cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
var len = self__.arr.length;
var i = (0);
var init__$1 = init;
while(true){
if((i < len)){
var node = (self__.arr[i]);
if(!((node == null))){
var init__$2 = node.kv_reduce(f,init__$1);
if(cljs.core.reduced_QMARK_(init__$2)){
var G__20767 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20767) : cljs.core.deref.call(null,G__20767));
} else {
var G__20768 = (i + (1));
var G__20769 = init__$2;
i = G__20768;
init__$1 = G__20769;
continue;
}
} else {
var G__20770 = (i + (1));
var G__20771 = init__$1;
i = G__20770;
init__$1 = G__20771;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if(!((node == null))){
return node.inode_lookup((shift + (5)),hash,key,not_found);
} else {
return not_found;
}
});

cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if((node == null)){
var editable = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_));
editable.cnt = (editable.cnt + (1));

return editable;
} else {
var n = node.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_);
if((n === node)){
return inode;
} else {
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,n);
}
}
});

cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if((node == null)){
return (new cljs.core.ArrayNode(null,(self__.cnt + (1)),cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_))));
} else {
var n = node.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_);
if((n === node)){
return inode;
} else {
return (new cljs.core.ArrayNode(null,self__.cnt,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,n)));
}
}
});

cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if(!((node == null))){
return node.inode_find((shift + (5)),hash,key,not_found);
} else {
return not_found;
}
});

cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if(!((node == null))){
var n = node.inode_without((shift + (5)),hash,key);
if((n === node)){
return inode;
} else {
if((n == null)){
if((self__.cnt <= (8))){
return cljs.core.pack_array_node(inode,null,idx);
} else {
return (new cljs.core.ArrayNode(null,(self__.cnt - (1)),cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,n)));
}
} else {
return (new cljs.core.ArrayNode(null,self__.cnt,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,n)));

}
}
} else {
return inode;
}
});

cljs.core.ArrayNode.cljs$lang$type = true;

cljs.core.ArrayNode.cljs$lang$ctorStr = "cljs.core/ArrayNode";

cljs.core.ArrayNode.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/ArrayNode");
});

cljs.core.__GT_ArrayNode = (function __GT_ArrayNode(edit,cnt,arr){
return (new cljs.core.ArrayNode(edit,cnt,arr));
});

cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim = ((2) * cnt);
var i = (0);
while(true){
if((i < lim)){
if(cljs.core.key_test(key,(arr[i]))){
return i;
} else {
var G__20772 = (i + (2));
i = G__20772;
continue;
}
} else {
return (-1);
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var self__ = this;
var inode = this;
if((e === self__.edit)){
return inode;
} else {
var new_arr = (new Array(((2) * (self__.cnt + (1)))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * self__.cnt));

return (new cljs.core.HashCollisionNode(e,self__.collision_hash,self__.cnt,new_arr));
}
});

cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx === (-1))){
return inode;
} else {
(removed_leaf_QMARK_[(0)] = true);

if((self__.cnt === (1))){
return null;
} else {
var editable = inode.ensure_editable(edit__$1);
var earr = editable.arr;
(earr[idx] = (earr[(((2) * self__.cnt) - (2))]));

(earr[(idx + (1))] = (earr[(((2) * self__.cnt) - (1))]));

(earr[(((2) * self__.cnt) - (1))] = null);

(earr[(((2) * self__.cnt) - (2))] = null);

editable.cnt = (editable.cnt - (1));

return editable;
}
}
});

cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var self__ = this;
var inode = this;
var G__20773 = self__.arr;
return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1(G__20773) : cljs.core.create_inode_seq.call(null,G__20773));
});

cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
return cljs.core.inode_kv_reduce(self__.arr,f,init);
});

cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx < (0))){
return not_found;
} else {
if(cljs.core.key_test(key,(self__.arr[idx]))){
return (self__.arr[(idx + (1))]);
} else {
return not_found;

}
}
});

cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
if((hash === self__.collision_hash)){
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx === (-1))){
if((self__.arr.length > ((2) * self__.cnt))){
var editable = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$6(inode,edit__$1,((2) * self__.cnt),key,(((2) * self__.cnt) + (1)),val);
added_leaf_QMARK_.val = true;

editable.cnt = (editable.cnt + (1));

return editable;
} else {
var len = self__.arr.length;
var new_arr = (new Array((len + (2))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),len);

(new_arr[len] = key);

(new_arr[(len + (1))] = val);

added_leaf_QMARK_.val = true;

return inode.ensure_editable_array(edit__$1,(self__.cnt + (1)),new_arr);
}
} else {
if(((self__.arr[(idx + (1))]) === val)){
return inode;
} else {
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(idx + (1)),val);
}
}
} else {
return (new cljs.core.BitmapIndexedNode(edit__$1,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode,null,null])).inode_assoc_BANG_(edit__$1,shift,hash,key,val,added_leaf_QMARK_);
}
});

cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
if((hash === self__.collision_hash)){
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx === (-1))){
var len = ((2) * self__.cnt);
var new_arr = (new Array((len + (2))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),len);

(new_arr[len] = key);

(new_arr[(len + (1))] = val);

added_leaf_QMARK_.val = true;

return (new cljs.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt + (1)),new_arr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.arr[idx]),val)){
return inode;
} else {
return (new cljs.core.HashCollisionNode(null,self__.collision_hash,self__.cnt,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(idx + (1)),val)));
}
}
} else {
return (new cljs.core.BitmapIndexedNode(null,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});

cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var self__ = this;
var inode = this;
if((e === self__.edit)){
self__.arr = array;

self__.cnt = count;

return inode;
} else {
return (new cljs.core.HashCollisionNode(self__.edit,self__.collision_hash,count,array));
}
});

cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx < (0))){
return not_found;
} else {
if(cljs.core.key_test(key,(self__.arr[idx]))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[idx]),(self__.arr[(idx + (1))])], null);
} else {
return not_found;

}
}
});

cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx === (-1))){
return inode;
} else {
if((self__.cnt === (1))){
return null;
} else {
return (new cljs.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt - (1)),cljs.core.remove_pair(self__.arr,cljs.core.quot(idx,(2)))));

}
}
});

cljs.core.HashCollisionNode.cljs$lang$type = true;

cljs.core.HashCollisionNode.cljs$lang$ctorStr = "cljs.core/HashCollisionNode";

cljs.core.HashCollisionNode.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/HashCollisionNode");
});

cljs.core.__GT_HashCollisionNode = (function __GT_HashCollisionNode(edit,collision_hash,cnt,arr){
return (new cljs.core.HashCollisionNode(edit,collision_hash,cnt,arr));
});

cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash = cljs.core.hash(key1);
if((key1hash === key2hash)){
return (new cljs.core.HashCollisionNode(null,key1hash,(2),[key1,val1,key2,val2]));
} else {
var added_leaf_QMARK_ = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash = cljs.core.hash(key1);
if((key1hash === key2hash)){
return (new cljs.core.HashCollisionNode(null,key1hash,(2),[key1,val1,key2,val2]));
} else {
var added_leaf_QMARK_ = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_node.cljs$core$IFn$_invoke$arity$6 = create_node__6;
create_node.cljs$core$IFn$_invoke$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374860;
})
cljs.core.NodeSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.NodeSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4152__auto__ = self__.__hash;
if(!((h__4152__auto__ == null))){
return h__4152__auto__;
} else {
var h__4152__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4152__auto____$1;

return h__4152__auto____$1;
}
});

cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.NodeSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.NodeSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.s == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.nodes[self__.i]),(self__.nodes[(self__.i + (1))])], null);
} else {
return cljs.core.first(self__.s);
}
});

cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.s == null)){
var G__20774 = self__.nodes;
var G__20775 = (self__.i + (2));
var G__20776 = null;
return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3(G__20774,G__20775,G__20776) : cljs.core.create_inode_seq.call(null,G__20774,G__20775,G__20776));
} else {
var G__20777 = self__.nodes;
var G__20778 = self__.i;
var G__20779 = cljs.core.next(self__.s);
return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3(G__20777,G__20778,G__20779) : cljs.core.create_inode_seq.call(null,G__20777,G__20778,G__20779));
}
});

cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.NodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});

cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.NodeSeq.cljs$lang$type = true;

cljs.core.NodeSeq.cljs$lang$ctorStr = "cljs.core/NodeSeq";

cljs.core.NodeSeq.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/NodeSeq");
});

cljs.core.__GT_NodeSeq = (function __GT_NodeSeq(meta,nodes,i,s,__hash){
return (new cljs.core.NodeSeq(meta,nodes,i,s,__hash));
});

(cljs.core.NodeSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4709__auto__ = this;
return cljs.core.es6_iterator(this__4709__auto__);
}));
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.cljs$core$IFn$_invoke$arity$3(nodes,(0),null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null)){
var len = nodes.length;
var j = i;
while(true){
if((j < len)){
if(!(((nodes[j]) == null))){
return (new cljs.core.NodeSeq(null,nodes,j,null,null));
} else {
var temp__4124__auto__ = (nodes[(j + (1))]);
if(cljs.core.truth_(temp__4124__auto__)){
var node = temp__4124__auto__;
var temp__4124__auto____$1 = node.inode_seq();
if(cljs.core.truth_(temp__4124__auto____$1)){
var node_seq = temp__4124__auto____$1;
return (new cljs.core.NodeSeq(null,nodes,(j + (2)),node_seq,null));
} else {
var G__20783 = (j + (2));
j = G__20783;
continue;
}
} else {
var G__20784 = (j + (2));
j = G__20784;
continue;
}
}
} else {
return null;
}
break;
}
} else {
return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_inode_seq.cljs$core$IFn$_invoke$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$core$IFn$_invoke$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374860;
})
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.ArrayNodeSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4152__auto__ = self__.__hash;
if(!((h__4152__auto__ == null))){
return h__4152__auto__;
} else {
var h__4152__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4152__auto____$1;

return h__4152__auto____$1;
}
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.first(self__.s);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var G__20785 = null;
var G__20786 = self__.nodes;
var G__20787 = self__.i;
var G__20788 = cljs.core.next(self__.s);
return (cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$4(G__20785,G__20786,G__20787,G__20788) : cljs.core.create_array_node_seq.call(null,G__20785,G__20786,G__20787,G__20788));
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.ArrayNodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.ArrayNodeSeq.cljs$lang$type = true;

cljs.core.ArrayNodeSeq.cljs$lang$ctorStr = "cljs.core/ArrayNodeSeq";

cljs.core.ArrayNodeSeq.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/ArrayNodeSeq");
});

cljs.core.__GT_ArrayNodeSeq = (function __GT_ArrayNodeSeq(meta,nodes,i,s,__hash){
return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,__hash));
});

(cljs.core.ArrayNodeSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4709__auto__ = this;
return cljs.core.es6_iterator(this__4709__auto__);
}));
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.cljs$core$IFn$_invoke$arity$4(null,nodes,(0),null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null)){
var len = nodes.length;
var j = i;
while(true){
if((j < len)){
var temp__4124__auto__ = (nodes[j]);
if(cljs.core.truth_(temp__4124__auto__)){
var nj = temp__4124__auto__;
var temp__4124__auto____$1 = nj.inode_seq();
if(cljs.core.truth_(temp__4124__auto____$1)){
var ns = temp__4124__auto____$1;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j + (1)),ns,null));
} else {
var G__20793 = (j + (1));
j = G__20793;
continue;
}
} else {
var G__20794 = (j + (1));
j = G__20794;
continue;
}
} else {
return null;
}
break;
}
} else {
return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_array_node_seq.cljs$core$IFn$_invoke$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$core$IFn$_invoke$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentHashMap.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentHashMap.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentHashMap.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((function (){var G__20796 = coll;
return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__20796) : cljs.core.keys.call(null,G__20796));
})());
});

cljs.core.PersistentHashMap.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_entries_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentHashMap.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((function (){var G__20797 = coll;
return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__20797) : cljs.core.vals.call(null,G__20797));
})());
});

cljs.core.PersistentHashMap.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_(coll,k);
});

cljs.core.PersistentHashMap.prototype.get = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentHashMap.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__20798 = cljs.core.seq(coll);
var chunk__20799 = null;
var count__20800 = (0);
var i__20801 = (0);
while(true){
if((i__20801 < count__20800)){
var vec__20802 = chunk__20799.cljs$core$IIndexed$_nth$arity$2(null,i__20801);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20802,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20802,(1),null);
var G__20803_20814 = v;
var G__20804_20815 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20803_20814,G__20804_20815) : f.call(null,G__20803_20814,G__20804_20815));

var G__20816 = seq__20798;
var G__20817 = chunk__20799;
var G__20818 = count__20800;
var G__20819 = (i__20801 + (1));
seq__20798 = G__20816;
chunk__20799 = G__20817;
count__20800 = G__20818;
i__20801 = G__20819;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__20798);
if(temp__4126__auto__){
var seq__20798__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20798__$1)){
var c__4518__auto__ = cljs.core.chunk_first(seq__20798__$1);
var G__20820 = cljs.core.chunk_rest(seq__20798__$1);
var G__20821 = c__4518__auto__;
var G__20822 = cljs.core.count(c__4518__auto__);
var G__20823 = (0);
seq__20798 = G__20820;
chunk__20799 = G__20821;
count__20800 = G__20822;
i__20801 = G__20823;
continue;
} else {
var vec__20805 = cljs.core.first(seq__20798__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20805,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20805,(1),null);
var G__20806_20824 = v;
var G__20807_20825 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20806_20824,G__20807_20825) : f.call(null,G__20806_20824,G__20807_20825));

var G__20826 = cljs.core.next(seq__20798__$1);
var G__20827 = null;
var G__20828 = (0);
var G__20829 = (0);
seq__20798 = G__20826;
chunk__20799 = G__20827;
count__20800 = G__20828;
i__20801 = G__20829;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if((k == null)){
if(self__.has_nil_QMARK_){
return self__.nil_val;
} else {
return not_found;
}
} else {
if((self__.root == null)){
return not_found;
} else {
return self__.root.inode_lookup((0),cljs.core.hash(k),k,not_found);

}
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var coll__$1 = this;
var init__$1 = ((self__.has_nil_QMARK_)?(function (){var G__20808 = init;
var G__20809 = null;
var G__20810 = self__.nil_val;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__20808,G__20809,G__20810) : f.call(null,G__20808,G__20809,G__20810));
})():init);
if(cljs.core.reduced_QMARK_(init__$1)){
var G__20811 = init__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20811) : cljs.core.deref.call(null,G__20811));
} else {
if(!((self__.root == null))){
return self__.root.kv_reduce(f,init__$1);
} else {
return init__$1;

}
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentHashMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentHashMap(self__.meta,self__.cnt,self__.root,self__.has_nil_QMARK_,self__.nil_val,self__.__hash));
});

cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.cnt;
});

cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4152__auto__ = self__.__hash;
if(!((h__4152__auto__ == null))){
return h__4152__auto__;
} else {
var h__4152__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4152__auto____$1;

return h__4152__auto____$1;
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_map(coll__$1,other);
});

cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.TransientHashMap((function (){var obj20813 = {};
return obj20813;
})(),self__.root,self__.cnt,self__.has_nil_QMARK_,self__.nil_val));
});

cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._with_meta(cljs.core.PersistentHashMap.EMPTY,self__.meta);
});

cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
if((k == null)){
if(self__.has_nil_QMARK_){
return (new cljs.core.PersistentHashMap(self__.meta,(self__.cnt - (1)),self__.root,false,null,null));
} else {
return coll__$1;
}
} else {
if((self__.root == null)){
return coll__$1;
} else {
var new_root = self__.root.inode_without((0),cljs.core.hash(k),k);
if((new_root === self__.root)){
return coll__$1;
} else {
return (new cljs.core.PersistentHashMap(self__.meta,(self__.cnt - (1)),new_root,self__.has_nil_QMARK_,self__.nil_val,null));
}

}
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
if((k == null)){
if((self__.has_nil_QMARK_) && ((v === self__.nil_val))){
return coll__$1;
} else {
return (new cljs.core.PersistentHashMap(self__.meta,((self__.has_nil_QMARK_)?self__.cnt:(self__.cnt + (1))),self__.root,true,v,null));
}
} else {
var added_leaf_QMARK_ = (new cljs.core.Box(false));
var new_root = (((self__.root == null))?cljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc((0),cljs.core.hash(k),k,v,added_leaf_QMARK_);
if((new_root === self__.root)){
return coll__$1;
} else {
return (new cljs.core.PersistentHashMap(self__.meta,((added_leaf_QMARK_.val)?(self__.cnt + (1)):self__.cnt),new_root,self__.has_nil_QMARK_,self__.nil_val,null));
}
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
if((k == null)){
return self__.has_nil_QMARK_;
} else {
if((self__.root == null)){
return false;
} else {
return !((self__.root.inode_lookup((0),cljs.core.hash(k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));

}
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
var s = ((!((self__.root == null)))?self__.root.inode_seq():null);
if(self__.has_nil_QMARK_){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,self__.nil_val], null),s);
} else {
return s;
}
} else {
return null;
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentHashMap(meta__$1,self__.cnt,self__.root,self__.has_nil_QMARK_,self__.nil_val,self__.__hash));
});

cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else {
var ret = coll__$1;
var es = cljs.core.seq(entry);
while(true){
if((es == null)){
return ret;
} else {
var e = cljs.core.first(es);
if(cljs.core.vector_QMARK_(e)){
var G__20830 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__20831 = cljs.core.next(es);
ret = G__20830;
es = G__20831;
continue;
} else {
throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});

cljs.core.PersistentHashMap.prototype.call = (function() {
var G__20832 = null;
var G__20832__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__20832__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__20832 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__20832__2.call(this,self__,k);
case 3:
return G__20832__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20832.cljs$core$IFn$_invoke$arity$2 = G__20832__2;
G__20832.cljs$core$IFn$_invoke$arity$3 = G__20832__3;
return G__20832;
})()
;

cljs.core.PersistentHashMap.prototype.apply = (function (self__,args20795){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args20795)));
});

cljs.core.PersistentHashMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentHashMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.PersistentHashMap.cljs$lang$type = true;

cljs.core.PersistentHashMap.cljs$lang$ctorStr = "cljs.core/PersistentHashMap";

cljs.core.PersistentHashMap.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/PersistentHashMap");
});

cljs.core.__GT_PersistentHashMap = (function __GT_PersistentHashMap(meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
return (new cljs.core.PersistentHashMap(meta,cnt,root,has_nil_QMARK_,nil_val,__hash));
});

cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,(0),null,false,null,(0)));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len = ks.length;
var i = (0);
var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i < len)){
var G__20833 = (i + (1));
var G__20834 = out.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(null,(ks[i]),(vs[i]));
i = G__20833;
out = G__20834;
continue;
} else {
return cljs.core.persistent_BANG_(out);
}
break;
}
});
(cljs.core.PersistentHashMap.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4709__auto__ = this;
return cljs.core.es6_iterator(this__4709__auto__);
}));

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var self__ = this;
var tcoll__$1 = this;
return tcoll__$1.without_BANG_(key);
});

cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
var tcoll__$1 = this;
return tcoll__$1.assoc_BANG_(key,val);
});

cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var self__ = this;
var tcoll__$1 = this;
return tcoll__$1.conj_BANG_(val);
});

cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
return tcoll__$1.persistent_BANG_();
});

cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var self__ = this;
var tcoll__$1 = this;
if((k == null)){
if(self__.has_nil_QMARK_){
return self__.nil_val;
} else {
return null;
}
} else {
if((self__.root == null)){
return null;
} else {
return self__.root.inode_lookup((0),cljs.core.hash(k),k);
}
}
});

cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var self__ = this;
var tcoll__$1 = this;
if((k == null)){
if(self__.has_nil_QMARK_){
return self__.nil_val;
} else {
return not_found;
}
} else {
if((self__.root == null)){
return not_found;
} else {
return self__.root.inode_lookup((0),cljs.core.hash(k),k,not_found);
}
}
});

cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(self__.edit){
return self__.count;
} else {
throw (new Error("count after persistent!"));
}
});

cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var self__ = this;
var tcoll = this;
if(self__.edit){
if((function (){var G__20835 = o;
if(G__20835){
var bit__4412__auto__ = (G__20835.cljs$lang$protocol_mask$partition0$ & (2048));
if((bit__4412__auto__) || (G__20835.cljs$core$IMapEntry$)){
return true;
} else {
if((!G__20835.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__20835);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__20835);
}
})()){
return tcoll.assoc_BANG_((function (){var G__20836 = o;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__20836) : cljs.core.key.call(null,G__20836));
})(),(function (){var G__20837 = o;
return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__20837) : cljs.core.val.call(null,G__20837));
})());
} else {
var es = cljs.core.seq(o);
var tcoll__$1 = tcoll;
while(true){
var temp__4124__auto__ = cljs.core.first(es);
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
var G__20840 = cljs.core.next(es);
var G__20841 = tcoll__$1.assoc_BANG_((function (){var G__20838 = e;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__20838) : cljs.core.key.call(null,G__20838));
})(),(function (){var G__20839 = e;
return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__20839) : cljs.core.val.call(null,G__20839));
})());
es = G__20840;
tcoll__$1 = G__20841;
continue;
} else {
return tcoll__$1;
}
break;
}
}
} else {
throw (new Error("conj! after persistent"));
}
});

cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var self__ = this;
var tcoll = this;
if(self__.edit){
if((k == null)){
if((self__.nil_val === v)){
} else {
self__.nil_val = v;
}

if(self__.has_nil_QMARK_){
} else {
self__.count = (self__.count + (1));

self__.has_nil_QMARK_ = true;
}

return tcoll;
} else {
var added_leaf_QMARK_ = (new cljs.core.Box(false));
var node = (((self__.root == null))?cljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc_BANG_(self__.edit,(0),cljs.core.hash(k),k,v,added_leaf_QMARK_);
if((node === self__.root)){
} else {
self__.root = node;
}

if(added_leaf_QMARK_.val){
self__.count = (self__.count + (1));
} else {
}

return tcoll;
}
} else {
throw (new Error("assoc! after persistent!"));
}
});

cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var self__ = this;
var tcoll = this;
if(self__.edit){
if((k == null)){
if(self__.has_nil_QMARK_){
self__.has_nil_QMARK_ = false;

self__.nil_val = null;

self__.count = (self__.count - (1));

return tcoll;
} else {
return tcoll;
}
} else {
if((self__.root == null)){
return tcoll;
} else {
var removed_leaf_QMARK_ = (new cljs.core.Box(false));
var node = self__.root.inode_without_BANG_(self__.edit,(0),cljs.core.hash(k),k,removed_leaf_QMARK_);
if((node === self__.root)){
} else {
self__.root = node;
}

if(cljs.core.truth_((removed_leaf_QMARK_[(0)]))){
self__.count = (self__.count - (1));
} else {
}

return tcoll;
}
}
} else {
throw (new Error("dissoc! after persistent!"));
}
});

cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var self__ = this;
var tcoll = this;
if(self__.edit){
self__.edit = null;

return (new cljs.core.PersistentHashMap(null,self__.count,self__.root,self__.has_nil_QMARK_,self__.nil_val,null));
} else {
throw (new Error("persistent! called twice"));
}
});

cljs.core.TransientHashMap.cljs$lang$type = true;

cljs.core.TransientHashMap.cljs$lang$ctorStr = "cljs.core/TransientHashMap";

cljs.core.TransientHashMap.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/TransientHashMap");
});

cljs.core.__GT_TransientHashMap = (function __GT_TransientHashMap(edit,root,count,has_nil_QMARK_,nil_val){
return (new cljs.core.TransientHashMap(edit,root,count,has_nil_QMARK_,nil_val));
});

cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t = node;
var stack__$1 = stack;
while(true){
if(!((t == null))){
var G__20842 = ((ascending_QMARK_)?t.left:t.right);
var G__20843 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack__$1,t);
t = G__20842;
stack__$1 = G__20843;
continue;
} else {
return stack__$1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374862;
})
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentTreeMapSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt < (0))){
return (cljs.core.count(cljs.core.next(coll__$1)) + (1));
} else {
return self__.cnt;
}
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4152__auto__ = self__.__hash;
if(!((h__4152__auto__ == null))){
return h__4152__auto__;
} else {
var h__4152__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4152__auto____$1;

return h__4152__auto____$1;
}
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.peek(self__.stack);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var t = cljs.core.first(self__.stack);
var next_stack = cljs.core.tree_map_seq_push(((self__.ascending_QMARK_)?t.right:t.left),cljs.core.next(self__.stack),self__.ascending_QMARK_);
if(!((next_stack == null))){
return (new cljs.core.PersistentTreeMapSeq(null,next_stack,self__.ascending_QMARK_,(self__.cnt - (1)),null));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeMapSeq(meta__$1,self__.stack,self__.ascending_QMARK_,self__.cnt,self__.__hash));
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;

cljs.core.PersistentTreeMapSeq.cljs$lang$ctorStr = "cljs.core/PersistentTreeMapSeq";

cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/PersistentTreeMapSeq");
});

cljs.core.__GT_PersistentTreeMapSeq = (function __GT_PersistentTreeMapSeq(meta,stack,ascending_QMARK_,cnt,__hash){
return (new cljs.core.PersistentTreeMapSeq(meta,stack,ascending_QMARK_,cnt,__hash));
});

(cljs.core.PersistentTreeMapSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4709__auto__ = this;
return cljs.core.es6_iterator(this__4709__auto__);
}));
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push(tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});

cljs.core.balance_left = (function balance_left(key,val,ins,right){
if((ins instanceof cljs.core.RedNode)){
if((ins.left instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else {
if((ins.right instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else {
return (new cljs.core.BlackNode(key,val,ins,right,null));

}
}
} else {
return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if((ins instanceof cljs.core.RedNode)){
if((ins.right instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else {
if((ins.left instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else {
return (new cljs.core.BlackNode(key,val,left,ins,null));

}
}
} else {
return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if((del instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else {
if((right instanceof cljs.core.BlackNode)){
return cljs.core.balance_right(key,val,del,right.redden());
} else {
if(((right instanceof cljs.core.RedNode)) && ((right.left instanceof cljs.core.BlackNode))){
return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right(right.key,right.val,right.left.right,right.right.redden()),null));
} else {
throw (new Error("red-black tree invariant violation"));

}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if((del instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else {
if((left instanceof cljs.core.BlackNode)){
return cljs.core.balance_left(key,val,left.redden(),del);
} else {
if(((left instanceof cljs.core.RedNode)) && ((left.right instanceof cljs.core.BlackNode))){
return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left(left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else {
throw (new Error("red-black tree invariant violation"));

}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__$1 = ((!((node.left == null)))?tree_map_kv_reduce(node.left,f,init):init);
if(cljs.core.reduced_QMARK_(init__$1)){
var G__20856 = init__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20856) : cljs.core.deref.call(null,G__20856));
} else {
var init__$2 = (function (){var G__20857 = init__$1;
var G__20858 = node.key;
var G__20859 = node.val;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__20857,G__20858,G__20859) : f.call(null,G__20857,G__20858,G__20859));
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__20860 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20860) : cljs.core.deref.call(null,G__20860));
} else {
var init__$3 = ((!((node.right == null)))?tree_map_kv_reduce(node.right,f,init__$2):init__$2);
if(cljs.core.reduced_QMARK_(init__$3)){
var G__20861 = init__$3;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20861) : cljs.core.deref.call(null,G__20861));
} else {
return init__$3;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.prototype.add_right = (function (ins){
var self__ = this;
var node = this;
return ins.balance_right(node);
});

cljs.core.BlackNode.prototype.redden = (function (){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,self__.left,self__.right,null));
});

cljs.core.BlackNode.prototype.blacken = (function (){
var self__ = this;
var node = this;
return node;
});

cljs.core.BlackNode.prototype.add_left = (function (ins){
var self__ = this;
var node = this;
return ins.balance_left(node);
});

cljs.core.BlackNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(key__$1,val__$1,left__$1,right__$1,null));
});

cljs.core.BlackNode.prototype.balance_left = (function (parent){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node,parent.right,null));
});

cljs.core.BlackNode.prototype.balance_right = (function (parent){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node,null));
});

cljs.core.BlackNode.prototype.remove_left = (function (del){
var self__ = this;
var node = this;
return cljs.core.balance_left_del(self__.key,self__.val,del,self__.right);
});

cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var node = this;
return cljs.core.tree_map_kv_reduce(node,f,init);
});

cljs.core.BlackNode.prototype.remove_right = (function (del){
var self__ = this;
var node = this;
return cljs.core.balance_right_del(self__.key,self__.val,self__.left,del);
});

cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var self__ = this;
var node__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,null);
});

cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var self__ = this;
var node__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,not_found);
});

cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var self__ = this;
var node__$1 = this;
if((n === (0))){
return self__.key;
} else {
if((n === (1))){
return self__.val;
} else {
return null;

}
}
});

cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var self__ = this;
var node__$1 = this;
if((n === (0))){
return self__.key;
} else {
if((n === (1))){
return self__.val;
} else {
return not_found;

}
}
});

cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null).cljs$core$IVector$_assoc_n$arity$3(null,n,v);
});

cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return null;
});

cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return (2);
});

cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.key;
});

cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.val;
});

cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.val;
});

cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key], null);
});

cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4152__auto__ = self__.__hash;
if(!((h__4152__auto__ == null))){
return h__4152__auto__;
} else {
var h__4152__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4152__auto____$1;

return h__4152__auto____$1;
}
});

cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var self__ = this;
var node__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(node__$1,f);
});

cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var self__ = this;
var node__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(node__$1,f,start);
});

cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var self__ = this;
var node__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),k,v);
});

cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.val),self__.key);
});

cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var self__ = this;
var node__$1 = this;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),meta);
});

cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val,o], null);
});

cljs.core.BlackNode.prototype.call = (function() {
var G__20863 = null;
var G__20863__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var node = self____$1;
return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__20863__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var node = self____$1;
return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__20863 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__20863__2.call(this,self__,k);
case 3:
return G__20863__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20863.cljs$core$IFn$_invoke$arity$2 = G__20863__2;
G__20863.cljs$core$IFn$_invoke$arity$3 = G__20863__3;
return G__20863;
})()
;

cljs.core.BlackNode.prototype.apply = (function (self__,args20862){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args20862)));
});

cljs.core.BlackNode.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var node = this;
return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.BlackNode.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var node = this;
return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.BlackNode.cljs$lang$type = true;

cljs.core.BlackNode.cljs$lang$ctorStr = "cljs.core/BlackNode";

cljs.core.BlackNode.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/BlackNode");
});

cljs.core.__GT_BlackNode = (function __GT_BlackNode(key,val,left,right,__hash){
return (new cljs.core.BlackNode(key,val,left,right,__hash));
});

(cljs.core.BlackNode.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4709__auto__ = this;
return cljs.core.es6_iterator(this__4709__auto__);
}));

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.prototype.add_right = (function (ins){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,self__.left,ins,null));
});

cljs.core.RedNode.prototype.redden = (function (){
var self__ = this;
var node = this;
throw (new Error("red-black tree invariant violation"));
});

cljs.core.RedNode.prototype.blacken = (function (){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(self__.key,self__.val,self__.left,self__.right,null));
});

cljs.core.RedNode.prototype.add_left = (function (ins){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,ins,self__.right,null));
});

cljs.core.RedNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(key__$1,val__$1,left__$1,right__$1,null));
});

cljs.core.RedNode.prototype.balance_left = (function (parent){
var self__ = this;
var node = this;
if((self__.left instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(self__.key,self__.val,self__.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,self__.right,parent.right,null)),null));
} else {
if((self__.right instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(self__.right.key,self__.right.val,(new cljs.core.BlackNode(self__.key,self__.val,self__.left,self__.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,self__.right.right,parent.right,null)),null));
} else {
return (new cljs.core.BlackNode(parent.key,parent.val,node,parent.right,null));

}
}
});

cljs.core.RedNode.prototype.balance_right = (function (parent){
var self__ = this;
var node = this;
if((self__.right instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(self__.key,self__.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,self__.left,null)),self__.right.blacken(),null));
} else {
if((self__.left instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(self__.left.key,self__.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,self__.left.left,null)),(new cljs.core.BlackNode(self__.key,self__.val,self__.left.right,self__.right,null)),null));
} else {
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node,null));

}
}
});

cljs.core.RedNode.prototype.remove_left = (function (del){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,del,self__.right,null));
});

cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var node = this;
return cljs.core.tree_map_kv_reduce(node,f,init);
});

cljs.core.RedNode.prototype.remove_right = (function (del){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,self__.left,del,null));
});

cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var self__ = this;
var node__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,null);
});

cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var self__ = this;
var node__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,not_found);
});

cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var self__ = this;
var node__$1 = this;
if((n === (0))){
return self__.key;
} else {
if((n === (1))){
return self__.val;
} else {
return null;

}
}
});

cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var self__ = this;
var node__$1 = this;
if((n === (0))){
return self__.key;
} else {
if((n === (1))){
return self__.val;
} else {
return not_found;

}
}
});

cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null).cljs$core$IVector$_assoc_n$arity$3(null,n,v);
});

cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return null;
});

cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return (2);
});

cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.key;
});

cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.val;
});

cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.val;
});

cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key], null);
});

cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4152__auto__ = self__.__hash;
if(!((h__4152__auto__ == null))){
return h__4152__auto__;
} else {
var h__4152__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4152__auto____$1;

return h__4152__auto____$1;
}
});

cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var self__ = this;
var node__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(node__$1,f);
});

cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var self__ = this;
var node__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(node__$1,f,start);
});

cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var self__ = this;
var node__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),k,v);
});

cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.val),self__.key);
});

cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var self__ = this;
var node__$1 = this;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),meta);
});

cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val,o], null);
});

cljs.core.RedNode.prototype.call = (function() {
var G__20865 = null;
var G__20865__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var node = self____$1;
return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__20865__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var node = self____$1;
return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__20865 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__20865__2.call(this,self__,k);
case 3:
return G__20865__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20865.cljs$core$IFn$_invoke$arity$2 = G__20865__2;
G__20865.cljs$core$IFn$_invoke$arity$3 = G__20865__3;
return G__20865;
})()
;

cljs.core.RedNode.prototype.apply = (function (self__,args20864){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args20864)));
});

cljs.core.RedNode.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var node = this;
return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.RedNode.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var node = this;
return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.RedNode.cljs$lang$type = true;

cljs.core.RedNode.cljs$lang$ctorStr = "cljs.core/RedNode";

cljs.core.RedNode.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/RedNode");
});

cljs.core.__GT_RedNode = (function __GT_RedNode(key,val,left,right,__hash){
return (new cljs.core.RedNode(key,val,left,right,__hash));
});

(cljs.core.RedNode.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4709__auto__ = this;
return cljs.core.es6_iterator(this__4709__auto__);
}));
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null)){
return (new cljs.core.RedNode(k,v,null,null,null));
} else {
var c = (function (){var G__20878 = k;
var G__20879 = tree.key;
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__20878,G__20879) : comp.call(null,G__20878,G__20879));
})();
if((c === (0))){
(found[(0)] = tree);

return null;
} else {
if((c < (0))){
var ins = tree_map_add(comp,tree.left,k,v,found);
if(!((ins == null))){
return tree.add_left(ins);
} else {
return null;
}
} else {
var ins = tree_map_add(comp,tree.right,k,v,found);
if(!((ins == null))){
return tree.add_right(ins);
} else {
return null;
}

}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null)){
return right;
} else {
if((right == null)){
return left;
} else {
if((left instanceof cljs.core.RedNode)){
if((right instanceof cljs.core.RedNode)){
var app = tree_map_append(left.right,right.left);
if((app instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(app.key,app.val,(new cljs.core.RedNode(left.key,left.val,left.left,app.left,null)),(new cljs.core.RedNode(right.key,right.val,app.right,right.right,null)),null));
} else {
return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app,right.right,null)),null));
}
} else {
return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append(left.right,right),null));
}
} else {
if((right instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(right.key,right.val,tree_map_append(left,right.left),right.right,null));
} else {
var app = tree_map_append(left.right,right.left);
if((app instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(app.key,app.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app.left,null)),(new cljs.core.BlackNode(right.key,right.val,app.right,right.right,null)),null));
} else {
return cljs.core.balance_left_del(left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app,right.right,null)));
}

}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null))){
var c = (function (){var G__20898 = k;
var G__20899 = tree.key;
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__20898,G__20899) : comp.call(null,G__20898,G__20899));
})();
if((c === (0))){
(found[(0)] = tree);

return cljs.core.tree_map_append(tree.left,tree.right);
} else {
if((c < (0))){
var del = tree_map_remove(comp,tree.left,k,found);
if((!((del == null))) || (!(((found[(0)]) == null)))){
if((tree.left instanceof cljs.core.BlackNode)){
return cljs.core.balance_left_del(tree.key,tree.val,del,tree.right);
} else {
return (new cljs.core.RedNode(tree.key,tree.val,del,tree.right,null));
}
} else {
return null;
}
} else {
var del = tree_map_remove(comp,tree.right,k,found);
if((!((del == null))) || (!(((found[(0)]) == null)))){
if((tree.right instanceof cljs.core.BlackNode)){
return cljs.core.balance_right_del(tree.key,tree.val,tree.left,del);
} else {
return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del,null));
}
} else {
return null;
}

}
}
} else {
return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk = tree.key;
var c = (function (){var G__20910 = k;
var G__20911 = tk;
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__20910,G__20911) : comp.call(null,G__20910,G__20911));
})();
if((c === (0))){
return tree.replace(tk,v,tree.left,tree.right);
} else {
if((c < (0))){
return tree.replace(tk,tree.val,tree_map_replace(comp,tree.left,k,v),tree.right);
} else {
return tree.replace(tk,tree.val,tree.left,tree_map_replace(comp,tree.right,k,v));

}
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentTreeMap.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__20913 = cljs.core.seq(coll);
var chunk__20914 = null;
var count__20915 = (0);
var i__20916 = (0);
while(true){
if((i__20916 < count__20915)){
var vec__20917 = chunk__20914.cljs$core$IIndexed$_nth$arity$2(null,i__20916);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20917,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20917,(1),null);
var G__20918_20930 = v;
var G__20919_20931 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20918_20930,G__20919_20931) : f.call(null,G__20918_20930,G__20919_20931));

var G__20932 = seq__20913;
var G__20933 = chunk__20914;
var G__20934 = count__20915;
var G__20935 = (i__20916 + (1));
seq__20913 = G__20932;
chunk__20914 = G__20933;
count__20915 = G__20934;
i__20916 = G__20935;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__20913);
if(temp__4126__auto__){
var seq__20913__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20913__$1)){
var c__4518__auto__ = cljs.core.chunk_first(seq__20913__$1);
var G__20936 = cljs.core.chunk_rest(seq__20913__$1);
var G__20937 = c__4518__auto__;
var G__20938 = cljs.core.count(c__4518__auto__);
var G__20939 = (0);
seq__20913 = G__20936;
chunk__20914 = G__20937;
count__20915 = G__20938;
i__20916 = G__20939;
continue;
} else {
var vec__20920 = cljs.core.first(seq__20913__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20920,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20920,(1),null);
var G__20921_20940 = v;
var G__20922_20941 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20921_20940,G__20922_20941) : f.call(null,G__20921_20940,G__20922_20941));

var G__20942 = cljs.core.next(seq__20913__$1);
var G__20943 = null;
var G__20944 = (0);
var G__20945 = (0);
seq__20913 = G__20942;
chunk__20914 = G__20943;
count__20915 = G__20944;
i__20916 = G__20945;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.PersistentTreeMap.prototype.get = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentTreeMap.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_entries_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentTreeMap.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentTreeMap.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((function (){var G__20923 = coll;
return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__20923) : cljs.core.keys.call(null,G__20923));
})());
});

cljs.core.PersistentTreeMap.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((function (){var G__20924 = coll;
return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__20924) : cljs.core.vals.call(null,G__20924));
})());
});

cljs.core.PersistentTreeMap.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var self__ = this;
var coll = this;
var t = self__.tree;
while(true){
if(!((t == null))){
var c = (function (){var G__20925 = k;
var G__20926 = t.key;
return (self__.comp.cljs$core$IFn$_invoke$arity$2 ? self__.comp.cljs$core$IFn$_invoke$arity$2(G__20925,G__20926) : self__.comp.call(null,G__20925,G__20926));
})();
if((c === (0))){
return t;
} else {
if((c < (0))){
var G__20946 = t.left;
t = G__20946;
continue;
} else {
var G__20947 = t.right;
t = G__20947;
continue;

}
}
} else {
return null;
}
break;
}
});

cljs.core.PersistentTreeMap.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_(coll,k);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
var n = coll__$1.entry_at(k);
if(!((n == null))){
return n.val;
} else {
return not_found;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var coll__$1 = this;
if(!((self__.tree == null))){
return cljs.core.tree_map_kv_reduce(self__.tree,f,init);
} else {
return init;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentTreeMap(self__.comp,self__.tree,self__.cnt,self__.meta,self__.__hash));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.cnt;
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return cljs.core.create_tree_map_seq(self__.tree,false,self__.cnt);
} else {
return null;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4152__auto__ = self__.__hash;
if(!((h__4152__auto__ == null))){
return h__4152__auto__;
} else {
var h__4152__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4152__auto____$1;

return h__4152__auto____$1;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_map(coll__$1,other);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeMap(self__.comp,null,(0),self__.meta,(0)));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
var found = [null];
var t = cljs.core.tree_map_remove(self__.comp,self__.tree,k,found);
if((t == null)){
if((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(found,(0)) == null)){
return coll__$1;
} else {
return (new cljs.core.PersistentTreeMap(self__.comp,null,(0),self__.meta,null));
}
} else {
return (new cljs.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt - (1)),self__.meta,null));
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
var found = [null];
var t = cljs.core.tree_map_add(self__.comp,self__.tree,k,v,found);
if((t == null)){
var found_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(found,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,found_node.val)){
return coll__$1;
} else {
return (new cljs.core.PersistentTreeMap(self__.comp,cljs.core.tree_map_replace(self__.comp,self__.tree,k,v),self__.cnt,self__.meta,null));
}
} else {
return (new cljs.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt + (1)),self__.meta,null));
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return !((coll__$1.entry_at(k) == null));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return cljs.core.create_tree_map_seq(self__.tree,true,self__.cnt);
} else {
return null;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeMap(self__.comp,self__.tree,self__.cnt,meta__$1,self__.__hash));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else {
var ret = coll__$1;
var es = cljs.core.seq(entry);
while(true){
if((es == null)){
return ret;
} else {
var e = cljs.core.first(es);
if(cljs.core.vector_QMARK_(e)){
var G__20948 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__20949 = cljs.core.next(es);
ret = G__20948;
es = G__20949;
continue;
} else {
throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});

cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__20950 = null;
var G__20950__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__20950__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__20950 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__20950__2.call(this,self__,k);
case 3:
return G__20950__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20950.cljs$core$IFn$_invoke$arity$2 = G__20950__2;
G__20950.cljs$core$IFn$_invoke$arity$3 = G__20950__3;
return G__20950;
})()
;

cljs.core.PersistentTreeMap.prototype.apply = (function (self__,args20912){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args20912)));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return cljs.core.create_tree_map_seq(self__.tree,ascending_QMARK_,self__.cnt);
} else {
return null;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
var stack = null;
var t = self__.tree;
while(true){
if(!((t == null))){
var c = (function (){var G__20927 = k;
var G__20928 = t.key;
return (self__.comp.cljs$core$IFn$_invoke$arity$2 ? self__.comp.cljs$core$IFn$_invoke$arity$2(G__20927,G__20928) : self__.comp.call(null,G__20927,G__20928));
})();
if((c === (0))){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t),ascending_QMARK_,(-1),null));
} else {
if(cljs.core.truth_(ascending_QMARK_)){
if((c < (0))){
var G__20951 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t);
var G__20952 = t.left;
stack = G__20951;
t = G__20952;
continue;
} else {
var G__20953 = stack;
var G__20954 = t.right;
stack = G__20953;
t = G__20954;
continue;
}
} else {
if((c > (0))){
var G__20955 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t);
var G__20956 = t.right;
stack = G__20955;
t = G__20956;
continue;
} else {
var G__20957 = stack;
var G__20958 = t.left;
stack = G__20957;
t = G__20958;
continue;
}

}
}
} else {
if((stack == null)){
return null;
} else {
return (new cljs.core.PersistentTreeMapSeq(null,stack,ascending_QMARK_,(-1),null));
}
}
break;
}
} else {
return null;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
var G__20929 = entry;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__20929) : cljs.core.key.call(null,G__20929));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.comp;
});

cljs.core.PersistentTreeMap.cljs$lang$type = true;

cljs.core.PersistentTreeMap.cljs$lang$ctorStr = "cljs.core/PersistentTreeMap";

cljs.core.PersistentTreeMap.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/PersistentTreeMap");
});

cljs.core.__GT_PersistentTreeMap = (function __GT_PersistentTreeMap(comp,tree,cnt,meta,__hash){
return (new cljs.core.PersistentTreeMap(comp,tree,cnt,meta,__hash));
});

cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,(0),null,(0)));
(cljs.core.PersistentTreeMap.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4709__auto__ = this;
return cljs.core.es6_iterator(this__4709__auto__);
}));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$ = cljs.core.seq(keyvals);
var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in$){
var G__20959 = cljs.core.nnext(in$);
var G__20960 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__20959;
out = G__20960;
continue;
} else {
return cljs.core.persistent_BANG_(out);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this,keyvals);};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__20961){
var keyvals = cljs.core.seq(arglist__20961);
return hash_map__delegate(keyvals);
});
hash_map.cljs$core$IFn$_invoke$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return cljs.core.PersistentArrayMap.fromArray(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,keyvals),true,false);
};
var array_map = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this,keyvals);};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__20962){
var keyvals = cljs.core.seq(arglist__20962);
return array_map__delegate(keyvals);
});
array_map.cljs$core$IFn$_invoke$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){
var ks = [];
var obj = (function (){var obj20966 = {};
return obj20966;
})();
var kvs = cljs.core.seq(keyvals);
while(true){
if(kvs){
ks.push(cljs.core.first(kvs));

(obj[cljs.core.first(kvs)] = cljs.core.second(kvs));

var G__20967 = cljs.core.nnext(kvs);
kvs = G__20967;
continue;
} else {
return cljs.core.ObjMap.fromObject(ks,obj);
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return obj_map__delegate.call(this,keyvals);};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__20968){
var keyvals = cljs.core.seq(arglist__20968);
return obj_map__delegate(keyvals);
});
obj_map.cljs$core$IFn$_invoke$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in$ = cljs.core.seq(keyvals);
var out = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in$){
var G__20969 = cljs.core.nnext(in$);
var G__20970 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__20969;
out = G__20970;
continue;
} else {
return out;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this,keyvals);};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__20971){
var keyvals = cljs.core.seq(arglist__20971);
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$core$IFn$_invoke$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = (new cljs.core.PersistentTreeMap(cljs.core.fn__GT_comparator(comparator),null,(0),null,(0)));
while(true){
if(in$){
var G__20972 = cljs.core.nnext(in$);
var G__20973 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__20972;
out = G__20973;
continue;
} else {
return out;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (arguments.length > 1) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this,comparator,keyvals);};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__20974){
var comparator = cljs.core.first(arglist__20974);
var keyvals = cljs.core.rest(arglist__20974);
return sorted_map_by__delegate(comparator,keyvals);
});
sorted_map_by.cljs$core$IFn$_invoke$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;

/**
* @constructor
*/
cljs.core.KeySeq = (function (mseq,_meta){
this.mseq = mseq;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.KeySeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.KeySeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.KeySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__._meta;
});

cljs.core.KeySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var nseq = (((function (){var G__20975 = self__.mseq;
if(G__20975){
var bit__4412__auto__ = (G__20975.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__4412__auto__) || (G__20975.cljs$core$INext$)){
return true;
} else {
if((!G__20975.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__20975);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__20975);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));
if((nseq == null)){
return null;
} else {
return (new cljs.core.KeySeq(nseq,self__._meta));
}
});

cljs.core.KeySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll(coll__$1);
});

cljs.core.KeySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.KeySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__._meta);
});

cljs.core.KeySeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.KeySeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.KeySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var me = self__.mseq.cljs$core$ISeq$_first$arity$1(null);
return me.cljs$core$IMapEntry$_key$arity$1(null);
});

cljs.core.KeySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var nseq = (((function (){var G__20976 = self__.mseq;
if(G__20976){
var bit__4412__auto__ = (G__20976.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__4412__auto__) || (G__20976.cljs$core$INext$)){
return true;
} else {
if((!G__20976.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__20976);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__20976);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));
if(!((nseq == null))){
return (new cljs.core.KeySeq(nseq,self__._meta));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.KeySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.KeySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.KeySeq(self__.mseq,new_meta));
});

cljs.core.KeySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.KeySeq.cljs$lang$type = true;

cljs.core.KeySeq.cljs$lang$ctorStr = "cljs.core/KeySeq";

cljs.core.KeySeq.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/KeySeq");
});

cljs.core.__GT_KeySeq = (function __GT_KeySeq(mseq,_meta){
return (new cljs.core.KeySeq(mseq,_meta));
});

(cljs.core.KeySeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4709__auto__ = this;
return cljs.core.es6_iterator(this__4709__auto__);
}));
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
var temp__4126__auto__ = cljs.core.seq(hash_map);
if(temp__4126__auto__){
var mseq = temp__4126__auto__;
return (new cljs.core.KeySeq(mseq,null));
} else {
return null;
}
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key(map_entry);
});

/**
* @constructor
*/
cljs.core.ValSeq = (function (mseq,_meta){
this.mseq = mseq;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.ValSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.ValSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.ValSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__._meta;
});

cljs.core.ValSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var nseq = (((function (){var G__20977 = self__.mseq;
if(G__20977){
var bit__4412__auto__ = (G__20977.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__4412__auto__) || (G__20977.cljs$core$INext$)){
return true;
} else {
if((!G__20977.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__20977);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__20977);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));
if((nseq == null)){
return null;
} else {
return (new cljs.core.ValSeq(nseq,self__._meta));
}
});

cljs.core.ValSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll(coll__$1);
});

cljs.core.ValSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.ValSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__._meta);
});

cljs.core.ValSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.ValSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.ValSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var me = self__.mseq.cljs$core$ISeq$_first$arity$1(null);
return me.cljs$core$IMapEntry$_val$arity$1(null);
});

cljs.core.ValSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var nseq = (((function (){var G__20978 = self__.mseq;
if(G__20978){
var bit__4412__auto__ = (G__20978.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__4412__auto__) || (G__20978.cljs$core$INext$)){
return true;
} else {
if((!G__20978.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__20978);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__20978);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));
if(!((nseq == null))){
return (new cljs.core.ValSeq(nseq,self__._meta));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.ValSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.ValSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.ValSeq(self__.mseq,new_meta));
});

cljs.core.ValSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.ValSeq.cljs$lang$type = true;

cljs.core.ValSeq.cljs$lang$ctorStr = "cljs.core/ValSeq";

cljs.core.ValSeq.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/ValSeq");
});

cljs.core.__GT_ValSeq = (function __GT_ValSeq(mseq,_meta){
return (new cljs.core.ValSeq(mseq,_meta));
});

(cljs.core.ValSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4709__auto__ = this;
return cljs.core.es6_iterator(this__4709__auto__);
}));
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
var temp__4126__auto__ = cljs.core.seq(hash_map);
if(temp__4126__auto__){
var mseq = temp__4126__auto__;
return (new cljs.core.ValSeq(mseq,null));
} else {
return null;
}
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val(map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__20979_SHARP_,p2__20980_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__3731__auto__ = p1__20979_SHARP_;
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),p2__20980_SHARP_);
}),maps);
} else {
return null;
}
};
var merge = function (var_args){
var maps = null;
if (arguments.length > 0) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this,maps);};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__20981){
var maps = cljs.core.seq(arglist__20981);
return merge__delegate(maps);
});
merge.cljs$core$IFn$_invoke$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps))){
var merge_entry = (function (m,e){
var k = cljs.core.first(e);
var v = cljs.core.second(e);
if(cljs.core.contains_QMARK_(m,k)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__20984 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__20985 = v;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20984,G__20985) : f.call(null,G__20984,G__20985));
})());
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});
var merge2 = ((function (merge_entry){
return (function (m1,m2){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(merge_entry,(function (){var or__3731__auto__ = m1;
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq(m2));
});})(merge_entry))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(merge2,maps);
} else {
return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (arguments.length > 1) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this,f,maps);};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__20986){
var f = cljs.core.first(arglist__20986);
var maps = cljs.core.rest(arglist__20986);
return merge_with__delegate(f,maps);
});
merge_with.cljs$core$IFn$_invoke$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var keys = cljs.core.seq(keyseq);
while(true){
if(keys){
var key = cljs.core.first(keys);
var entry = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map,key,cljs.core.constant$keyword$14);
var G__20987 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(entry,cljs.core.constant$keyword$14))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,key,entry):ret);
var G__20988 = cljs.core.next(keys);
ret = G__20987;
keys = G__20988;
continue;
} else {
return cljs.core.with_meta(ret,cljs.core.meta(map));
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentHashSet.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentHashSet.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentHashSet.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentHashSet.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_set_entries_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentHashSet.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentHashSet.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_(coll,k);
});

cljs.core.PersistentHashSet.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__20991 = cljs.core.seq(coll);
var chunk__20992 = null;
var count__20993 = (0);
var i__20994 = (0);
while(true){
if((i__20994 < count__20993)){
var vec__20995 = chunk__20992.cljs$core$IIndexed$_nth$arity$2(null,i__20994);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20995,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20995,(1),null);
var G__20996_21001 = v;
var G__20997_21002 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20996_21001,G__20997_21002) : f.call(null,G__20996_21001,G__20997_21002));

var G__21003 = seq__20991;
var G__21004 = chunk__20992;
var G__21005 = count__20993;
var G__21006 = (i__20994 + (1));
seq__20991 = G__21003;
chunk__20992 = G__21004;
count__20993 = G__21005;
i__20994 = G__21006;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__20991);
if(temp__4126__auto__){
var seq__20991__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20991__$1)){
var c__4518__auto__ = cljs.core.chunk_first(seq__20991__$1);
var G__21007 = cljs.core.chunk_rest(seq__20991__$1);
var G__21008 = c__4518__auto__;
var G__21009 = cljs.core.count(c__4518__auto__);
var G__21010 = (0);
seq__20991 = G__21007;
chunk__20992 = G__21008;
count__20993 = G__21009;
i__20994 = G__21010;
continue;
} else {
var vec__20998 = cljs.core.first(seq__20991__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20998,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20998,(1),null);
var G__20999_21011 = v;
var G__21000_21012 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20999_21011,G__21000_21012) : f.call(null,G__20999_21011,G__21000_21012));

var G__21013 = cljs.core.next(seq__20991__$1);
var G__21014 = null;
var G__21015 = (0);
var G__21016 = (0);
seq__20991 = G__21013;
chunk__20992 = G__21014;
count__20993 = G__21015;
i__20994 = G__21016;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,v,null);
});

cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var self__ = this;
var coll__$1 = this;
if(cljs.core._contains_key_QMARK_(self__.hash_map,v)){
return v;
} else {
return not_found;
}
});

cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentHashSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentHashSet(self__.meta,self__.hash_map,self__.__hash));
});

cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._count(self__.hash_map);
});

cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4152__auto__ = self__.__hash;
if(!((h__4152__auto__ == null))){
return h__4152__auto__;
} else {
var h__4152__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4152__auto____$1;

return h__4152__auto____$1;
}
});

cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return (cljs.core.set_QMARK_(other)) && ((cljs.core.count(coll__$1) === cljs.core.count(other))) && (cljs.core.every_QMARK_(((function (coll__$1){
return (function (p1__20989_SHARP_){
return cljs.core.contains_QMARK_(coll__$1,p1__20989_SHARP_);
});})(coll__$1))
,other));
});

cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.TransientHashSet(cljs.core._as_transient(self__.hash_map)));
});

cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.PersistentHashSet.EMPTY,self__.meta);
});

cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentHashSet(self__.meta,cljs.core._dissoc(self__.hash_map,v),null));
});

cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.keys(self__.hash_map);
});

cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentHashSet(meta__$1,self__.hash_map,self__.__hash));
});

cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentHashSet(self__.meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.hash_map,o,null),null));
});

cljs.core.PersistentHashSet.prototype.call = (function() {
var G__21017 = null;
var G__21017__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__21017__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__21017 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__21017__2.call(this,self__,k);
case 3:
return G__21017__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21017.cljs$core$IFn$_invoke$arity$2 = G__21017__2;
G__21017.cljs$core$IFn$_invoke$arity$3 = G__21017__3;
return G__21017;
})()
;

cljs.core.PersistentHashSet.prototype.apply = (function (self__,args20990){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args20990)));
});

cljs.core.PersistentHashSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentHashSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.PersistentHashSet.cljs$lang$type = true;

cljs.core.PersistentHashSet.cljs$lang$ctorStr = "cljs.core/PersistentHashSet";

cljs.core.PersistentHashSet.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/PersistentHashSet");
});

cljs.core.__GT_PersistentHashSet = (function __GT_PersistentHashSet(meta,hash_map,__hash){
return (new cljs.core.PersistentHashSet(meta,hash_map,__hash));
});

cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.PersistentArrayMap.EMPTY,(0)));
cljs.core.PersistentHashSet.fromArray = (function (items,no_clone){
var len = items.length;
if((len <= cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)){
var arr = ((no_clone)?items:cljs.core.aclone(items));
var i = (0);
var out = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < len)){
var G__21018 = (i + (1));
var G__21019 = cljs.core._assoc_BANG_(out,(items[i]),null);
i = G__21018;
out = G__21019;
continue;
} else {
return (new cljs.core.PersistentHashSet(null,cljs.core._persistent_BANG_(out),null));
}
break;
}
} else {
var i = (0);
var out = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i < len)){
var G__21020 = (i + (1));
var G__21021 = cljs.core._conj_BANG_(out,(items[i]));
i = G__21020;
out = G__21021;
continue;
} else {
return cljs.core._persistent_BANG_(out);
}
break;
}
}
});
(cljs.core.PersistentHashSet.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4709__auto__ = this;
return cljs.core.es6_iterator(this__4709__auto__);
}));

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 136;
})
cljs.core.TransientHashSet.prototype.call = (function() {
var G__21023 = null;
var G__21023__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var tcoll = self____$1;
if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return null;
} else {
return k;
}
});
var G__21023__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var tcoll = self____$1;
if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return not_found;
} else {
return k;
}
});
G__21023 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__21023__2.call(this,self__,k);
case 3:
return G__21023__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21023.cljs$core$IFn$_invoke$arity$2 = G__21023__2;
G__21023.cljs$core$IFn$_invoke$arity$3 = G__21023__3;
return G__21023;
})()
;

cljs.core.TransientHashSet.prototype.apply = (function (self__,args21022){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args21022)));
});

cljs.core.TransientHashSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var tcoll = this;
if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return null;
} else {
return k;
}
});

cljs.core.TransientHashSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var tcoll = this;
if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return not_found;
} else {
return k;
}
});

cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var self__ = this;
var tcoll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(tcoll__$1,v,null);
});

cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var self__ = this;
var tcoll__$1 = this;
if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return not_found;
} else {
return v;
}
});

cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
return cljs.core.count(self__.transient_map);
});

cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var self__ = this;
var tcoll__$1 = this;
self__.transient_map = cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(self__.transient_map,v);

return tcoll__$1;
});

cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
var tcoll__$1 = this;
self__.transient_map = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(self__.transient_map,o,null);

return tcoll__$1;
});

cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_(self__.transient_map),null));
});

cljs.core.TransientHashSet.cljs$lang$type = true;

cljs.core.TransientHashSet.cljs$lang$ctorStr = "cljs.core/TransientHashSet";

cljs.core.TransientHashSet.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/TransientHashSet");
});

cljs.core.__GT_TransientHashSet = (function __GT_TransientHashSet(transient_map){
return (new cljs.core.TransientHashSet(transient_map));
});


/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentTreeSet.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentTreeSet.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentTreeSet.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_set_entries_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentTreeSet.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentTreeSet.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_(coll,k);
});

cljs.core.PersistentTreeSet.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__21026 = cljs.core.seq(coll);
var chunk__21027 = null;
var count__21028 = (0);
var i__21029 = (0);
while(true){
if((i__21029 < count__21028)){
var vec__21030 = chunk__21027.cljs$core$IIndexed$_nth$arity$2(null,i__21029);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21030,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21030,(1),null);
var G__21031_21036 = v;
var G__21032_21037 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21031_21036,G__21032_21037) : f.call(null,G__21031_21036,G__21032_21037));

var G__21038 = seq__21026;
var G__21039 = chunk__21027;
var G__21040 = count__21028;
var G__21041 = (i__21029 + (1));
seq__21026 = G__21038;
chunk__21027 = G__21039;
count__21028 = G__21040;
i__21029 = G__21041;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__21026);
if(temp__4126__auto__){
var seq__21026__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21026__$1)){
var c__4518__auto__ = cljs.core.chunk_first(seq__21026__$1);
var G__21042 = cljs.core.chunk_rest(seq__21026__$1);
var G__21043 = c__4518__auto__;
var G__21044 = cljs.core.count(c__4518__auto__);
var G__21045 = (0);
seq__21026 = G__21042;
chunk__21027 = G__21043;
count__21028 = G__21044;
i__21029 = G__21045;
continue;
} else {
var vec__21033 = cljs.core.first(seq__21026__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21033,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21033,(1),null);
var G__21034_21046 = v;
var G__21035_21047 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21034_21046,G__21035_21047) : f.call(null,G__21034_21046,G__21035_21047));

var G__21048 = cljs.core.next(seq__21026__$1);
var G__21049 = null;
var G__21050 = (0);
var G__21051 = (0);
seq__21026 = G__21048;
chunk__21027 = G__21049;
count__21028 = G__21050;
i__21029 = G__21051;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,v,null);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var self__ = this;
var coll__$1 = this;
var n = self__.tree_map.entry_at(v);
if(!((n == null))){
return n.key;
} else {
return not_found;
}
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentTreeSet(self__.meta,self__.tree_map,self__.__hash));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.count(self__.tree_map);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((cljs.core.count(self__.tree_map) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.rseq(self__.tree_map));
} else {
return null;
}
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4152__auto__ = self__.__hash;
if(!((h__4152__auto__ == null))){
return h__4152__auto__;
} else {
var h__4152__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4152__auto____$1;

return h__4152__auto____$1;
}
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return (cljs.core.set_QMARK_(other)) && ((cljs.core.count(coll__$1) === cljs.core.count(other))) && (cljs.core.every_QMARK_(((function (coll__$1){
return (function (p1__21024_SHARP_){
return cljs.core.contains_QMARK_(coll__$1,p1__21024_SHARP_);
});})(coll__$1))
,other));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core._empty(self__.tree_map),(0)));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.tree_map,v),null));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.keys(self__.tree_map);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeSet(meta__$1,self__.tree_map,self__.__hash));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.tree_map,o,null),null));
});

cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__21052 = null;
var G__21052__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__21052__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__21052 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__21052__2.call(this,self__,k);
case 3:
return G__21052__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21052.cljs$core$IFn$_invoke$arity$2 = G__21052__2;
G__21052.cljs$core$IFn$_invoke$arity$3 = G__21052__3;
return G__21052;
})()
;

cljs.core.PersistentTreeSet.prototype.apply = (function (self__,args21025){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args21025)));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var self__ = this;
var coll__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core._sorted_seq(self__.tree_map,ascending_QMARK_));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var self__ = this;
var coll__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core._sorted_seq_from(self__.tree_map,k,ascending_QMARK_));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
return entry;
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._comparator(self__.tree_map);
});

cljs.core.PersistentTreeSet.cljs$lang$type = true;

cljs.core.PersistentTreeSet.cljs$lang$ctorStr = "cljs.core/PersistentTreeSet";

cljs.core.PersistentTreeSet.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/PersistentTreeSet");
});

cljs.core.__GT_PersistentTreeSet = (function __GT_PersistentTreeSet(meta,tree_map,__hash){
return (new cljs.core.PersistentTreeSet(meta,tree_map,__hash));
});

cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.PersistentTreeMap.EMPTY,(0)));
(cljs.core.PersistentTreeSet.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4709__auto__ = this;
return cljs.core.es6_iterator(this__4709__auto__);
}));
cljs.core.set_from_indexed_seq = (function set_from_indexed_seq(iseq){
var arr = iseq.arr;
var ret = (function (){var a__4612__auto__ = arr;
var i = (0);
var res = cljs.core._as_transient(cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i < a__4612__auto__.length)){
var G__21053 = (i + (1));
var G__21054 = res.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null,(arr[i]));
i = G__21053;
res = G__21054;
continue;
} else {
return res;
}
break;
}
})();
return ret.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(null);
});
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$ = cljs.core.seq(coll);
if((in$ == null)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(((in$ instanceof cljs.core.IndexedSeq)) && ((in$.i === (0)))){
return cljs.core.set_from_indexed_seq(in$);
} else {
var in$__$1 = in$;
var out = cljs.core._as_transient(cljs.core.PersistentHashSet.EMPTY);
while(true){
if(!((in$__$1 == null))){
var G__21055 = in$__$1.cljs$core$INext$_next$arity$1(null);
var G__21056 = out.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null,in$__$1.cljs$core$ISeq$_first$arity$1(null));
in$__$1 = G__21055;
out = G__21056;
continue;
} else {
return out.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(null);
}
break;
}

}
}
});
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__21057__delegate = function (keys){
return cljs.core.set(keys);
};
var G__21057 = function (var_args){
var keys = null;
if (arguments.length > 0) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__21057__delegate.call(this,keys);};
G__21057.cljs$lang$maxFixedArity = 0;
G__21057.cljs$lang$applyTo = (function (arglist__21058){
var keys = cljs.core.seq(arglist__21058);
return G__21057__delegate(keys);
});
G__21057.cljs$core$IFn$_invoke$arity$variadic = G__21057__delegate;
return G__21057;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$core$IFn$_invoke$arity$0 = hash_set__0;
hash_set.cljs$core$IFn$_invoke$arity$variadic = hash_set__1.cljs$core$IFn$_invoke$arity$variadic;
return hash_set;
})()
;
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (arguments.length > 0) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this,keys);};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__21059){
var keys = cljs.core.seq(arglist__21059);
return sorted_set__delegate(keys);
});
sorted_set.cljs$core$IFn$_invoke$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by(comparator),(0))),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (arguments.length > 1) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this,comparator,keys);};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__21060){
var comparator = cljs.core.first(arglist__21060);
var keys = cljs.core.rest(arglist__21060);
return sorted_set_by__delegate(comparator,keys);
});
sorted_set_by.cljs$core$IFn$_invoke$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap.  Returns a transducer when no collection
* is provided.
*/
cljs.core.replace = (function() {
var replace = null;
var replace__1 = (function (smap){
return cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__21061_SHARP_){
var temp__4124__auto__ = cljs.core.find(smap,p1__21061_SHARP_);
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
return cljs.core.val(e);
} else {
return p1__21061_SHARP_;
}
}));
});
var replace__2 = (function (smap,coll){
if(cljs.core.vector_QMARK_(coll)){
var n = cljs.core.count(coll);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (n){
return (function (v,i){
var temp__4124__auto__ = cljs.core.find(smap,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,i));
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,i,cljs.core.second(e));
} else {
return v;
}
});})(n))
,coll,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.iterate(cljs.core.inc,(0))));
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21062_SHARP_){
var temp__4124__auto__ = cljs.core.find(smap,p1__21062_SHARP_);
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
return cljs.core.second(e);
} else {
return p1__21062_SHARP_;
}
}),coll);
}
});
replace = function(smap,coll){
switch(arguments.length){
case 1:
return replace__1.call(this,smap);
case 2:
return replace__2.call(this,smap,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
replace.cljs$core$IFn$_invoke$arity$1 = replace__1;
replace.cljs$core$IFn$_invoke$arity$2 = replace__2;
return replace;
})()
;
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step = (function step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__21073,seen__$1){
while(true){
var vec__21074 = p__21073;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21074,(0),null);
var xs__$1 = vec__21074;
var temp__4126__auto__ = cljs.core.seq(xs__$1);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.contains_QMARK_(seen__$1,f)){
var G__21075 = cljs.core.rest(s);
var G__21076 = seen__$1;
p__21073 = G__21075;
seen__$1 = G__21076;
continue;
} else {
return cljs.core.cons(f,step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,f)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret = cljs.core.PersistentVector.EMPTY;
var s__$1 = s;
while(true){
if(cljs.core.next(s__$1)){
var G__21077 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.first(s__$1));
var G__21078 = cljs.core.next(s__$1);
ret = G__21077;
s__$1 = G__21078;
continue;
} else {
return cljs.core.seq(ret);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if((function (){var G__21080 = x;
if(G__21080){
var bit__4405__auto__ = (G__21080.cljs$lang$protocol_mask$partition1$ & (4096));
if((bit__4405__auto__) || (G__21080.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return x.cljs$core$INamed$_name$arity$1(null);
} else {
if(typeof x === 'string'){
return x;
} else {
throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
}
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var ks = cljs.core.seq(keys);
var vs = cljs.core.seq(vals);
while(true){
if((ks) && (vs)){
var G__21081 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(map,cljs.core.first(ks),cljs.core.first(vs));
var G__21082 = cljs.core.next(ks);
var G__21083 = cljs.core.next(vs);
map = G__21081;
ks = G__21082;
vs = G__21083;
continue;
} else {
return cljs.core.persistent_BANG_(map);
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if(((function (){var G__21094 = x;
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__21094) : k.call(null,G__21094));
})() > (function (){var G__21095 = y;
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__21095) : k.call(null,G__21095));
})())){
return x;
} else {
return y;
}
});
var max_key__4 = (function() { 
var G__21096__delegate = function (k,x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__21084_SHARP_,p2__21085_SHARP_){
return max_key.cljs$core$IFn$_invoke$arity$3(k,p1__21084_SHARP_,p2__21085_SHARP_);
}),max_key.cljs$core$IFn$_invoke$arity$3(k,x,y),more);
};
var G__21096 = function (k,x,y,var_args){
var more = null;
if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__21096__delegate.call(this,k,x,y,more);};
G__21096.cljs$lang$maxFixedArity = 3;
G__21096.cljs$lang$applyTo = (function (arglist__21097){
var k = cljs.core.first(arglist__21097);
arglist__21097 = cljs.core.next(arglist__21097);
var x = cljs.core.first(arglist__21097);
arglist__21097 = cljs.core.next(arglist__21097);
var y = cljs.core.first(arglist__21097);
var more = cljs.core.rest(arglist__21097);
return G__21096__delegate(k,x,y,more);
});
G__21096.cljs$core$IFn$_invoke$arity$variadic = G__21096__delegate;
return G__21096;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$core$IFn$_invoke$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$core$IFn$_invoke$arity$2 = max_key__2;
max_key.cljs$core$IFn$_invoke$arity$3 = max_key__3;
max_key.cljs$core$IFn$_invoke$arity$variadic = max_key__4.cljs$core$IFn$_invoke$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if(((function (){var G__21108 = x;
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__21108) : k.call(null,G__21108));
})() < (function (){var G__21109 = y;
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__21109) : k.call(null,G__21109));
})())){
return x;
} else {
return y;
}
});
var min_key__4 = (function() { 
var G__21110__delegate = function (k,x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__21098_SHARP_,p2__21099_SHARP_){
return min_key.cljs$core$IFn$_invoke$arity$3(k,p1__21098_SHARP_,p2__21099_SHARP_);
}),min_key.cljs$core$IFn$_invoke$arity$3(k,x,y),more);
};
var G__21110 = function (k,x,y,var_args){
var more = null;
if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__21110__delegate.call(this,k,x,y,more);};
G__21110.cljs$lang$maxFixedArity = 3;
G__21110.cljs$lang$applyTo = (function (arglist__21111){
var k = cljs.core.first(arglist__21111);
arglist__21111 = cljs.core.next(arglist__21111);
var x = cljs.core.first(arglist__21111);
arglist__21111 = cljs.core.next(arglist__21111);
var y = cljs.core.first(arglist__21111);
var more = cljs.core.rest(arglist__21111);
return G__21110__delegate(k,x,y,more);
});
G__21110.cljs$core$IFn$_invoke$arity$variadic = G__21110__delegate;
return G__21110;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$core$IFn$_invoke$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$core$IFn$_invoke$arity$2 = min_key__2;
min_key.cljs$core$IFn$_invoke$arity$3 = min_key__3;
min_key.cljs$core$IFn$_invoke$arity$variadic = min_key__4.cljs$core$IFn$_invoke$arity$variadic;
return min_key;
})()
;

/**
* @constructor
*/
cljs.core.ArrayList = (function (arr){
this.arr = arr;
})
cljs.core.ArrayList.prototype.add = (function (x){
var self__ = this;
var _ = this;
return self__.arr.push(x);
});

cljs.core.ArrayList.prototype.size = (function (){
var self__ = this;
var _ = this;
return self__.arr.length;
});

cljs.core.ArrayList.prototype.clear = (function (){
var self__ = this;
var _ = this;
return self__.arr = [];
});

cljs.core.ArrayList.prototype.isEmpty = (function (){
var self__ = this;
var _ = this;
return (self__.arr.length === (0));
});

cljs.core.ArrayList.prototype.toArray = (function (){
var self__ = this;
var _ = this;
return self__.arr;
});

cljs.core.ArrayList.cljs$lang$type = true;

cljs.core.ArrayList.cljs$lang$ctorStr = "cljs.core/ArrayList";

cljs.core.ArrayList.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/ArrayList");
});

cljs.core.__GT_ArrayList = (function __GT_ArrayList(arr){
return (new cljs.core.ArrayList(arr));
});

cljs.core.array_list = (function array_list(){
return (new cljs.core.ArrayList([]));
});
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.  Returns a stateful
* transducer when no collection is provided.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__1 = (function (n){
return (function (rf){
var a = cljs.core.array_list();
return ((function (a){
return (function() {
var G__21128 = null;
var G__21128__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__21128__1 = (function (result){
var result__$1 = (cljs.core.truth_(a.isEmpty())?result:(function (){var v = cljs.core.vec(a.toArray());
a.clear();

return cljs.core.unreduced((function (){var G__21123 = result;
var G__21124 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__21123,G__21124) : rf.call(null,G__21123,G__21124));
})());
})());
var G__21125 = result__$1;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__21125) : rf.call(null,G__21125));
});
var G__21128__2 = (function (result,input){
a.add(input);

if((n === a.size())){
var v = cljs.core.vec(a.toArray());
a.clear();

var G__21126 = result;
var G__21127 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__21126,G__21127) : rf.call(null,G__21126,G__21127));
} else {
return result;
}
});
G__21128 = function(result,input){
switch(arguments.length){
case 0:
return G__21128__0.call(this);
case 1:
return G__21128__1.call(this,result);
case 2:
return G__21128__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21128.cljs$core$IFn$_invoke$arity$0 = G__21128__0;
G__21128.cljs$core$IFn$_invoke$arity$1 = G__21128__1;
G__21128.cljs$core$IFn$_invoke$arity$2 = G__21128__2;
return G__21128;
})()
;})(a))
});
});
var partition_all__2 = (function (n,coll){
return partition_all.cljs$core$IFn$_invoke$arity$3(n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
return cljs.core.cons(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,s),partition_all.cljs$core$IFn$_invoke$arity$3(n,step,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(step,s)));
} else {
return null;
}
}),null,null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 1:
return partition_all__1.call(this,n);
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_all.cljs$core$IFn$_invoke$arity$1 = partition_all__1;
partition_all.cljs$core$IFn$_invoke$arity$2 = partition_all__2;
partition_all.cljs$core$IFn$_invoke$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
* Returns a transducer when no collection is provided.
*/
cljs.core.take_while = (function() {
var take_while = null;
var take_while__1 = (function (pred){
return (function (rf){
return (function() {
var G__21141 = null;
var G__21141__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__21141__1 = (function (result){
var G__21136 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__21136) : rf.call(null,G__21136));
});
var G__21141__2 = (function (result,input){
if(cljs.core.truth_((function (){var G__21137 = input;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__21137) : pred.call(null,G__21137));
})())){
var G__21138 = result;
var G__21139 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__21138,G__21139) : rf.call(null,G__21138,G__21139));
} else {
return cljs.core.reduced(result);
}
});
G__21141 = function(result,input){
switch(arguments.length){
case 0:
return G__21141__0.call(this);
case 1:
return G__21141__1.call(this,result);
case 2:
return G__21141__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21141.cljs$core$IFn$_invoke$arity$0 = G__21141__0;
G__21141.cljs$core$IFn$_invoke$arity$1 = G__21141__1;
G__21141.cljs$core$IFn$_invoke$arity$2 = G__21141__2;
return G__21141;
})()
});
});
var take_while__2 = (function (pred,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.truth_((function (){var G__21140 = cljs.core.first(s);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__21140) : pred.call(null,G__21140));
})())){
return cljs.core.cons(cljs.core.first(s),take_while.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.rest(s)));
} else {
return null;
}
} else {
return null;
}
}),null,null));
});
take_while = function(pred,coll){
switch(arguments.length){
case 1:
return take_while__1.call(this,pred);
case 2:
return take_while__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_while.cljs$core$IFn$_invoke$arity$1 = take_while__1;
take_while.cljs$core$IFn$_invoke$arity$2 = take_while__2;
return take_while;
})()
;
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp = cljs.core._comparator(sc);
var G__21146 = (function (){var G__21148 = cljs.core._entry_key(sc,e);
var G__21149 = key;
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__21148,G__21149) : comp.call(null,G__21148,G__21149));
})();
var G__21147 = (0);
return (test.cljs$core$IFn$_invoke$arity$2 ? test.cljs$core$IFn$_invoke$arity$2(G__21146,G__21147) : test.call(null,G__21146,G__21147));
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include = cljs.core.mk_bound_fn(sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_], true).call(null,test))){
var temp__4126__auto__ = cljs.core._sorted_seq_from(sc,key,true);
if(cljs.core.truth_(temp__4126__auto__)){
var vec__21153 = temp__4126__auto__;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21153,(0),null);
var s = vec__21153;
if(cljs.core.truth_((function (){var G__21154 = e;
return (include.cljs$core$IFn$_invoke$arity$1 ? include.cljs$core$IFn$_invoke$arity$1(G__21154) : include.call(null,G__21154));
})())){
return s;
} else {
return cljs.core.next(s);
}
} else {
return null;
}
} else {
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(include,cljs.core._sorted_seq(sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4126__auto__ = cljs.core._sorted_seq_from(sc,start_key,true);
if(cljs.core.truth_(temp__4126__auto__)){
var vec__21155 = temp__4126__auto__;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21155,(0),null);
var s = vec__21155;
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.mk_bound_fn(sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,start_test,start_key).call(null,e))?s:cljs.core.next(s)));
} else {
return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subseq.cljs$core$IFn$_invoke$arity$3 = subseq__3;
subseq.cljs$core$IFn$_invoke$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include = cljs.core.mk_bound_fn(sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_], true).call(null,test))){
var temp__4126__auto__ = cljs.core._sorted_seq_from(sc,key,false);
if(cljs.core.truth_(temp__4126__auto__)){
var vec__21159 = temp__4126__auto__;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21159,(0),null);
var s = vec__21159;
if(cljs.core.truth_((function (){var G__21160 = e;
return (include.cljs$core$IFn$_invoke$arity$1 ? include.cljs$core$IFn$_invoke$arity$1(G__21160) : include.call(null,G__21160));
})())){
return s;
} else {
return cljs.core.next(s);
}
} else {
return null;
}
} else {
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(include,cljs.core._sorted_seq(sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4126__auto__ = cljs.core._sorted_seq_from(sc,end_key,false);
if(cljs.core.truth_(temp__4126__auto__)){
var vec__21161 = temp__4126__auto__;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21161,(0),null);
var s = vec__21161;
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.mk_bound_fn(sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,end_test,end_key).call(null,e))?s:cljs.core.next(s)));
} else {
return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rsubseq.cljs$core$IFn$_invoke$arity$3 = rsubseq__3;
rsubseq.cljs$core$IFn$_invoke$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.RangeIterator = (function (i,end,step){
this.i = i;
this.end = end;
this.step = step;
})
cljs.core.RangeIterator.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
if((self__.step > (0))){
return (self__.i < self__.end);
} else {
return (self__.i > self__.end);
}
});

cljs.core.RangeIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = self__.i;
self__.i = (self__.i + self__.step);

return ret;
});

cljs.core.RangeIterator.cljs$lang$type = true;

cljs.core.RangeIterator.cljs$lang$ctorStr = "cljs.core/RangeIterator";

cljs.core.RangeIterator.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/RangeIterator");
});

cljs.core.__GT_RangeIterator = (function __GT_RangeIterator(i,end,step){
return (new cljs.core.RangeIterator(i,end,step));
});


/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Range.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.Range.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var self__ = this;
var rng__$1 = this;
if((n < cljs.core._count(rng__$1))){
return (self__.start + (n * self__.step));
} else {
if(((self__.start > self__.end)) && ((self__.step === (0)))){
return self__.start;
} else {
throw (new Error("Index out of bounds"));
}
}
});

cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var self__ = this;
var rng__$1 = this;
if((n < cljs.core._count(rng__$1))){
return (self__.start + (n * self__.step));
} else {
if(((self__.start > self__.end)) && ((self__.step === (0)))){
return self__.start;
} else {
return not_found;
}
}
});

cljs.core.Range.prototype.cljs$core$IIterable$ = true;

cljs.core.Range.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.RangeIterator(self__.start,self__.end,self__.step));
});

cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
return self__.meta;
});

cljs.core.Range.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.Range(self__.meta,self__.start,self__.end,self__.step,self__.__hash));
});

cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
if((self__.step > (0))){
if(((self__.start + self__.step) < self__.end)){
return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else {
return null;
}
} else {
if(((self__.start + self__.step) > self__.end)){
return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else {
return null;
}
}
});

cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
if(cljs.core.not(cljs.core._seq(rng__$1))){
return (0);
} else {
var G__21162 = ((self__.end - self__.start) / self__.step);
return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(G__21162) : Math.ceil.call(null,G__21162));
}
});

cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
var h__4152__auto__ = self__.__hash;
if(!((h__4152__auto__ == null))){
return h__4152__auto__;
} else {
var h__4152__auto____$1 = cljs.core.hash_ordered_coll(rng__$1);
self__.__hash = h__4152__auto____$1;

return h__4152__auto____$1;
}
});

cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var self__ = this;
var rng__$1 = this;
return cljs.core.equiv_sequential(rng__$1,other);
});

cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var self__ = this;
var rng__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(rng__$1,f);
});

cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,init){
var self__ = this;
var rng__$1 = this;
var i = self__.start;
var ret = init;
while(true){
if((((self__.step > (0)))?(i < self__.end):(i > self__.end))){
var ret__$1 = (function (){var G__21163 = ret;
var G__21164 = i;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21163,G__21164) : f.call(null,G__21163,G__21164));
})();
if(cljs.core.reduced_QMARK_(ret__$1)){
var G__21165 = ret__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21165) : cljs.core.deref.call(null,G__21165));
} else {
var G__21166 = (i + self__.step);
var G__21167 = ret__$1;
i = G__21166;
ret = G__21167;
continue;
}
} else {
return ret;
}
break;
}
});

cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
if((cljs.core._seq(rng__$1) == null)){
return null;
} else {
return self__.start;
}
});

cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
if(!((cljs.core._seq(rng__$1) == null))){
return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
if((self__.step > (0))){
if((self__.start < self__.end)){
return rng__$1;
} else {
return null;
}
} else {
if((self__.start > self__.end)){
return rng__$1;
} else {
return null;
}
}
});

cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta__$1){
var self__ = this;
var rng__$1 = this;
return (new cljs.core.Range(meta__$1,self__.start,self__.end,self__.step,self__.__hash));
});

cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var self__ = this;
var rng__$1 = this;
return cljs.core.cons(o,rng__$1);
});

cljs.core.Range.cljs$lang$type = true;

cljs.core.Range.cljs$lang$ctorStr = "cljs.core/Range";

cljs.core.Range.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/Range");
});

cljs.core.__GT_Range = (function __GT_Range(meta,start,end,step,__hash){
return (new cljs.core.Range(meta,start,end,step,__hash));
});

(cljs.core.Range.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4709__auto__ = this;
return cljs.core.es6_iterator(this__4709__auto__);
}));
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.cljs$core$IFn$_invoke$arity$3((0),Number.MAX_VALUE,(1));
});
var range__1 = (function (end){
return range.cljs$core$IFn$_invoke$arity$3((0),end,(1));
});
var range__2 = (function (start,end){
return range.cljs$core$IFn$_invoke$arity$3(start,end,(1));
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range.cljs$core$IFn$_invoke$arity$0 = range__0;
range.cljs$core$IFn$_invoke$arity$1 = range__1;
range.cljs$core$IFn$_invoke$arity$2 = range__2;
range.cljs$core$IFn$_invoke$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.  Returns a stateful
* transducer when no collection is provided.
*/
cljs.core.take_nth = (function() {
var take_nth = null;
var take_nth__1 = (function (n){
return (function (rf){
var ia = cljs.core.volatile_BANG_((-1));
return ((function (ia){
return (function() {
var G__21185 = null;
var G__21185__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__21185__1 = (function (result){
var G__21182 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__21182) : rf.call(null,G__21182));
});
var G__21185__2 = (function (result,input){
var i = ia.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(ia.cljs$core$IDeref$_deref$arity$1(null) + (1)));
if((cljs.core.rem(i,n) === (0))){
var G__21183 = result;
var G__21184 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__21183,G__21184) : rf.call(null,G__21183,G__21184));
} else {
return result;
}
});
G__21185 = function(result,input){
switch(arguments.length){
case 0:
return G__21185__0.call(this);
case 1:
return G__21185__1.call(this,result);
case 2:
return G__21185__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21185.cljs$core$IFn$_invoke$arity$0 = G__21185__0;
G__21185.cljs$core$IFn$_invoke$arity$1 = G__21185__1;
G__21185.cljs$core$IFn$_invoke$arity$2 = G__21185__2;
return G__21185;
})()
;})(ia))
});
});
var take_nth__2 = (function (n,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
return cljs.core.cons(cljs.core.first(s),take_nth.cljs$core$IFn$_invoke$arity$2(n,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s)));
} else {
return null;
}
}),null,null));
});
take_nth = function(n,coll){
switch(arguments.length){
case 1:
return take_nth__1.call(this,n);
case 2:
return take_nth__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_nth.cljs$core$IFn$_invoke$arity$1 = take_nth__1;
take_nth.cljs$core$IFn$_invoke$arity$2 = take_nth__2;
return take_nth;
})()
;
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(pred,coll),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(pred,coll)], null);
});
/**
* Applies f to each value in coll, splitting it each time f returns a
* new value.  Returns a lazy seq of partitions.  Returns a stateful
* transducer when no collection is provided.
*/
cljs.core.partition_by = (function() {
var partition_by = null;
var partition_by__1 = (function (f){
return (function (rf){
var a = cljs.core.array_list();
var pa = cljs.core.volatile_BANG_(cljs.core.constant$keyword$15);
return ((function (a,pa){
return (function() {
var G__21207 = null;
var G__21207__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__21207__1 = (function (result){
var result__$1 = (cljs.core.truth_(a.isEmpty())?result:(function (){var v = cljs.core.vec(a.toArray());
a.clear();

return cljs.core.unreduced((function (){var G__21198 = result;
var G__21199 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__21198,G__21199) : rf.call(null,G__21198,G__21199));
})());
})());
var G__21200 = result__$1;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__21200) : rf.call(null,G__21200));
});
var G__21207__2 = (function (result,input){
var pval = (function (){var G__21201 = pa;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21201) : cljs.core.deref.call(null,G__21201));
})();
var val = (function (){var G__21202 = input;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21202) : f.call(null,G__21202));
})();
cljs.core.vreset_BANG_(pa,val);

if((cljs.core.keyword_identical_QMARK_(pval,cljs.core.constant$keyword$15)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,pval))){
a.add(input);

return result;
} else {
var v = cljs.core.vec(a.toArray());
a.clear();

var ret = (function (){var G__21203 = result;
var G__21204 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__21203,G__21204) : rf.call(null,G__21203,G__21204));
})();
if(cljs.core.reduced_QMARK_(ret)){
} else {
a.add(input);
}

return ret;
}
});
G__21207 = function(result,input){
switch(arguments.length){
case 0:
return G__21207__0.call(this);
case 1:
return G__21207__1.call(this,result);
case 2:
return G__21207__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21207.cljs$core$IFn$_invoke$arity$0 = G__21207__0;
G__21207.cljs$core$IFn$_invoke$arity$1 = G__21207__1;
G__21207.cljs$core$IFn$_invoke$arity$2 = G__21207__2;
return G__21207;
})()
;})(a,pa))
});
});
var partition_by__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
var fst = cljs.core.first(s);
var fv = (function (){var G__21205 = fst;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21205) : f.call(null,G__21205));
})();
var run = cljs.core.cons(fst,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (fst,fv,s,temp__4126__auto__){
return (function (p1__21186_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fv,(function (){var G__21206 = p1__21186_SHARP_;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21206) : f.call(null,G__21206));
})());
});})(fst,fv,s,temp__4126__auto__))
,cljs.core.next(s)));
return cljs.core.cons(run,partition_by.cljs$core$IFn$_invoke$arity$2(f,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(run),s))));
} else {
return null;
}
}),null,null));
});
partition_by = function(f,coll){
switch(arguments.length){
case 1:
return partition_by__1.call(this,f);
case 2:
return partition_by__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$1 = partition_by__1;
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
return partition_by;
})()
;
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (counts,x){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(counts,x,(cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,x,(0)) + (1)));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4124__auto__ = cljs.core.seq(coll);
if(temp__4124__auto__){
var s = temp__4124__auto__;
return reductions.cljs$core$IFn$_invoke$arity$3(f,cljs.core.first(s),cljs.core.rest(s));
} else {
return cljs.core._conj(cljs.core.List.EMPTY,(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})());
}
}),null,null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons(init,(new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
return reductions.cljs$core$IFn$_invoke$arity$3(f,(function (){var G__21216 = init;
var G__21217 = cljs.core.first(s);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21216,G__21217) : f.call(null,G__21216,G__21217));
})(),cljs.core.rest(s));
} else {
return null;
}
}),null,null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reductions.cljs$core$IFn$_invoke$arity$2 = reductions__2;
reductions.cljs$core$IFn$_invoke$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__21312 = null;
var G__21312__0 = (function (){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})()],null));
});
var G__21312__1 = (function (x){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__21270 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21270) : f.call(null,G__21270));
})()],null));
});
var G__21312__2 = (function (x,y){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__21271 = x;
var G__21272 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21271,G__21272) : f.call(null,G__21271,G__21272));
})()],null));
});
var G__21312__3 = (function (x,y,z){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__21273 = x;
var G__21274 = y;
var G__21275 = z;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__21273,G__21274,G__21275) : f.call(null,G__21273,G__21274,G__21275));
})()],null));
});
var G__21312__4 = (function() { 
var G__21313__delegate = function (x,y,z,args){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args)],null));
};
var G__21313 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__21313__delegate.call(this,x,y,z,args);};
G__21313.cljs$lang$maxFixedArity = 3;
G__21313.cljs$lang$applyTo = (function (arglist__21314){
var x = cljs.core.first(arglist__21314);
arglist__21314 = cljs.core.next(arglist__21314);
var y = cljs.core.first(arglist__21314);
arglist__21314 = cljs.core.next(arglist__21314);
var z = cljs.core.first(arglist__21314);
var args = cljs.core.rest(arglist__21314);
return G__21313__delegate(x,y,z,args);
});
G__21313.cljs$core$IFn$_invoke$arity$variadic = G__21313__delegate;
return G__21313;
})()
;
G__21312 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__21312__0.call(this);
case 1:
return G__21312__1.call(this,x);
case 2:
return G__21312__2.call(this,x,y);
case 3:
return G__21312__3.call(this,x,y,z);
default:
return G__21312__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21312.cljs$lang$maxFixedArity = 3;
G__21312.cljs$lang$applyTo = G__21312__4.cljs$lang$applyTo;
G__21312.cljs$core$IFn$_invoke$arity$0 = G__21312__0;
G__21312.cljs$core$IFn$_invoke$arity$1 = G__21312__1;
G__21312.cljs$core$IFn$_invoke$arity$2 = G__21312__2;
G__21312.cljs$core$IFn$_invoke$arity$3 = G__21312__3;
G__21312.cljs$core$IFn$_invoke$arity$variadic = G__21312__4.cljs$core$IFn$_invoke$arity$variadic;
return G__21312;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__21315 = null;
var G__21315__0 = (function (){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),(function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})()],null));
});
var G__21315__1 = (function (x){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__21276 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21276) : f.call(null,G__21276));
})(),(function (){var G__21277 = x;
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__21277) : g.call(null,G__21277));
})()],null));
});
var G__21315__2 = (function (x,y){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__21278 = x;
var G__21279 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21278,G__21279) : f.call(null,G__21278,G__21279));
})(),(function (){var G__21280 = x;
var G__21281 = y;
return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__21280,G__21281) : g.call(null,G__21280,G__21281));
})()],null));
});
var G__21315__3 = (function (x,y,z){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__21282 = x;
var G__21283 = y;
var G__21284 = z;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__21282,G__21283,G__21284) : f.call(null,G__21282,G__21283,G__21284));
})(),(function (){var G__21285 = x;
var G__21286 = y;
var G__21287 = z;
return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__21285,G__21286,G__21287) : g.call(null,G__21285,G__21286,G__21287));
})()],null));
});
var G__21315__4 = (function() { 
var G__21316__delegate = function (x,y,z,args){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args)],null));
};
var G__21316 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__21316__delegate.call(this,x,y,z,args);};
G__21316.cljs$lang$maxFixedArity = 3;
G__21316.cljs$lang$applyTo = (function (arglist__21317){
var x = cljs.core.first(arglist__21317);
arglist__21317 = cljs.core.next(arglist__21317);
var y = cljs.core.first(arglist__21317);
arglist__21317 = cljs.core.next(arglist__21317);
var z = cljs.core.first(arglist__21317);
var args = cljs.core.rest(arglist__21317);
return G__21316__delegate(x,y,z,args);
});
G__21316.cljs$core$IFn$_invoke$arity$variadic = G__21316__delegate;
return G__21316;
})()
;
G__21315 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__21315__0.call(this);
case 1:
return G__21315__1.call(this,x);
case 2:
return G__21315__2.call(this,x,y);
case 3:
return G__21315__3.call(this,x,y,z);
default:
return G__21315__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21315.cljs$lang$maxFixedArity = 3;
G__21315.cljs$lang$applyTo = G__21315__4.cljs$lang$applyTo;
G__21315.cljs$core$IFn$_invoke$arity$0 = G__21315__0;
G__21315.cljs$core$IFn$_invoke$arity$1 = G__21315__1;
G__21315.cljs$core$IFn$_invoke$arity$2 = G__21315__2;
G__21315.cljs$core$IFn$_invoke$arity$3 = G__21315__3;
G__21315.cljs$core$IFn$_invoke$arity$variadic = G__21315__4.cljs$core$IFn$_invoke$arity$variadic;
return G__21315;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__21318 = null;
var G__21318__0 = (function (){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),(function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})(),(function (){return (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
})()],null));
});
var G__21318__1 = (function (x){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__21288 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21288) : f.call(null,G__21288));
})(),(function (){var G__21289 = x;
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__21289) : g.call(null,G__21289));
})(),(function (){var G__21290 = x;
return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__21290) : h.call(null,G__21290));
})()],null));
});
var G__21318__2 = (function (x,y){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__21291 = x;
var G__21292 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21291,G__21292) : f.call(null,G__21291,G__21292));
})(),(function (){var G__21293 = x;
var G__21294 = y;
return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__21293,G__21294) : g.call(null,G__21293,G__21294));
})(),(function (){var G__21295 = x;
var G__21296 = y;
return (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(G__21295,G__21296) : h.call(null,G__21295,G__21296));
})()],null));
});
var G__21318__3 = (function (x,y,z){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__21297 = x;
var G__21298 = y;
var G__21299 = z;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__21297,G__21298,G__21299) : f.call(null,G__21297,G__21298,G__21299));
})(),(function (){var G__21300 = x;
var G__21301 = y;
var G__21302 = z;
return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__21300,G__21301,G__21302) : g.call(null,G__21300,G__21301,G__21302));
})(),(function (){var G__21303 = x;
var G__21304 = y;
var G__21305 = z;
return (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(G__21303,G__21304,G__21305) : h.call(null,G__21303,G__21304,G__21305));
})()],null));
});
var G__21318__4 = (function() { 
var G__21319__delegate = function (x,y,z,args){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,x,y,z,args)],null));
};
var G__21319 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__21319__delegate.call(this,x,y,z,args);};
G__21319.cljs$lang$maxFixedArity = 3;
G__21319.cljs$lang$applyTo = (function (arglist__21320){
var x = cljs.core.first(arglist__21320);
arglist__21320 = cljs.core.next(arglist__21320);
var y = cljs.core.first(arglist__21320);
arglist__21320 = cljs.core.next(arglist__21320);
var z = cljs.core.first(arglist__21320);
var args = cljs.core.rest(arglist__21320);
return G__21319__delegate(x,y,z,args);
});
G__21319.cljs$core$IFn$_invoke$arity$variadic = G__21319__delegate;
return G__21319;
})()
;
G__21318 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__21318__0.call(this);
case 1:
return G__21318__1.call(this,x);
case 2:
return G__21318__2.call(this,x,y);
case 3:
return G__21318__3.call(this,x,y,z);
default:
return G__21318__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21318.cljs$lang$maxFixedArity = 3;
G__21318.cljs$lang$applyTo = G__21318__4.cljs$lang$applyTo;
G__21318.cljs$core$IFn$_invoke$arity$0 = G__21318__0;
G__21318.cljs$core$IFn$_invoke$arity$1 = G__21318__1;
G__21318.cljs$core$IFn$_invoke$arity$2 = G__21318__2;
G__21318.cljs$core$IFn$_invoke$arity$3 = G__21318__3;
G__21318.cljs$core$IFn$_invoke$arity$variadic = G__21318__4.cljs$core$IFn$_invoke$arity$variadic;
return G__21318;
})()
});
var juxt__4 = (function() { 
var G__21321__delegate = function (f,g,h,fs){
var fs__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(f,g,h,fs);
return ((function (fs__$1){
return (function() {
var G__21322 = null;
var G__21322__0 = (function (){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__21218_SHARP_,p2__21219_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21218_SHARP_,(function (){return (p2__21219_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p2__21219_SHARP_.cljs$core$IFn$_invoke$arity$0() : p2__21219_SHARP_.call(null));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__21322__1 = (function (x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__21220_SHARP_,p2__21221_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21220_SHARP_,(function (){var G__21306 = x;
return (p2__21221_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__21221_SHARP_.cljs$core$IFn$_invoke$arity$1(G__21306) : p2__21221_SHARP_.call(null,G__21306));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__21322__2 = (function (x,y){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__21222_SHARP_,p2__21223_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21222_SHARP_,(function (){var G__21307 = x;
var G__21308 = y;
return (p2__21223_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__21223_SHARP_.cljs$core$IFn$_invoke$arity$2(G__21307,G__21308) : p2__21223_SHARP_.call(null,G__21307,G__21308));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__21322__3 = (function (x,y,z){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__21224_SHARP_,p2__21225_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21224_SHARP_,(function (){var G__21309 = x;
var G__21310 = y;
var G__21311 = z;
return (p2__21225_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p2__21225_SHARP_.cljs$core$IFn$_invoke$arity$3(G__21309,G__21310,G__21311) : p2__21225_SHARP_.call(null,G__21309,G__21310,G__21311));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__21322__4 = (function() { 
var G__21323__delegate = function (x,y,z,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__21226_SHARP_,p2__21227_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21226_SHARP_,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(p2__21227_SHARP_,x,y,z,args));
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
};
var G__21323 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__21323__delegate.call(this,x,y,z,args);};
G__21323.cljs$lang$maxFixedArity = 3;
G__21323.cljs$lang$applyTo = (function (arglist__21324){
var x = cljs.core.first(arglist__21324);
arglist__21324 = cljs.core.next(arglist__21324);
var y = cljs.core.first(arglist__21324);
arglist__21324 = cljs.core.next(arglist__21324);
var z = cljs.core.first(arglist__21324);
var args = cljs.core.rest(arglist__21324);
return G__21323__delegate(x,y,z,args);
});
G__21323.cljs$core$IFn$_invoke$arity$variadic = G__21323__delegate;
return G__21323;
})()
;
G__21322 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__21322__0.call(this);
case 1:
return G__21322__1.call(this,x);
case 2:
return G__21322__2.call(this,x,y);
case 3:
return G__21322__3.call(this,x,y,z);
default:
return G__21322__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21322.cljs$lang$maxFixedArity = 3;
G__21322.cljs$lang$applyTo = G__21322__4.cljs$lang$applyTo;
G__21322.cljs$core$IFn$_invoke$arity$0 = G__21322__0;
G__21322.cljs$core$IFn$_invoke$arity$1 = G__21322__1;
G__21322.cljs$core$IFn$_invoke$arity$2 = G__21322__2;
G__21322.cljs$core$IFn$_invoke$arity$3 = G__21322__3;
G__21322.cljs$core$IFn$_invoke$arity$variadic = G__21322__4.cljs$core$IFn$_invoke$arity$variadic;
return G__21322;
})()
;})(fs__$1))
};
var G__21321 = function (f,g,h,var_args){
var fs = null;
if (arguments.length > 3) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__21321__delegate.call(this,f,g,h,fs);};
G__21321.cljs$lang$maxFixedArity = 3;
G__21321.cljs$lang$applyTo = (function (arglist__21325){
var f = cljs.core.first(arglist__21325);
arglist__21325 = cljs.core.next(arglist__21325);
var g = cljs.core.first(arglist__21325);
arglist__21325 = cljs.core.next(arglist__21325);
var h = cljs.core.first(arglist__21325);
var fs = cljs.core.rest(arglist__21325);
return G__21321__delegate(f,g,h,fs);
});
G__21321.cljs$core$IFn$_invoke$arity$variadic = G__21321__delegate;
return G__21321;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$core$IFn$_invoke$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$core$IFn$_invoke$arity$1 = juxt__1;
juxt.cljs$core$IFn$_invoke$arity$2 = juxt__2;
juxt.cljs$core$IFn$_invoke$arity$3 = juxt__3;
juxt.cljs$core$IFn$_invoke$arity$variadic = juxt__4.cljs$core$IFn$_invoke$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.seq(coll)){
var G__21326 = cljs.core.next(coll);
coll = G__21326;
continue;
} else {
return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if((cljs.core.seq(coll)) && ((n > (0)))){
var G__21327 = (n - (1));
var G__21328 = cljs.core.next(coll);
n = G__21327;
coll = G__21328;
continue;
} else {
return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dorun.cljs$core$IFn$_invoke$arity$1 = dorun__1;
dorun.cljs$core$IFn$_invoke$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(coll);

return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.cljs$core$IFn$_invoke$arity$2(n,coll);

return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
doall.cljs$core$IFn$_invoke$arity$1 = doall__1;
doall.cljs$core$IFn$_invoke$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return (o instanceof RegExp);
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
if(typeof s === 'string'){
var matches = re.exec(s);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(matches),s)){
if((cljs.core.count(matches) === (1))){
return cljs.core.first(matches);
} else {
return cljs.core.vec(matches);
}
} else {
return null;
}
} else {
throw (new TypeError("re-matches must match against a string."));
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
if(typeof s === 'string'){
var matches = re.exec(s);
if((matches == null)){
return null;
} else {
if((cljs.core.count(matches) === (1))){
return cljs.core.first(matches);
} else {
return cljs.core.vec(matches);
}
}
} else {
throw (new TypeError("re-find must match against a string."));
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data = cljs.core.re_find(re,s);
var match_idx = s.search(re);
var match_str = ((cljs.core.coll_QMARK_(match_data))?cljs.core.first(match_data):match_data);
var post_match = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(match_idx + cljs.core.count(match_str)));
if(cljs.core.truth_(match_data)){
return (new cljs.core.LazySeq(null,((function (match_data,match_idx,match_str,post_match){
return (function (){
return cljs.core.cons(match_data,((cljs.core.seq(post_match))?re_seq(re,post_match):null));
});})(match_data,match_idx,match_str,post_match))
,null,null));
} else {
return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
if((s instanceof RegExp)){
return s;
} else {
var vec__21332 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21332,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21332,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21332,(2),null);
return (new RegExp(pattern,flags));
}
});
cljs.core.pr_sequential_writer = (function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){
var _STAR_print_level_STAR_21340 = cljs.core._STAR_print_level_STAR_;
try{cljs.core._STAR_print_level_STAR_ = (((cljs.core._STAR_print_level_STAR_ == null))?null:(cljs.core._STAR_print_level_STAR_ - (1)));

if((!((cljs.core._STAR_print_level_STAR_ == null))) && ((cljs.core._STAR_print_level_STAR_ < (0)))){
return cljs.core._write(writer,"#");
} else {
cljs.core._write(writer,begin);

if(cljs.core.seq(coll)){
var G__21341_21347 = cljs.core.first(coll);
var G__21342_21348 = writer;
var G__21343_21349 = opts;
(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__21341_21347,G__21342_21348,G__21343_21349) : print_one.call(null,G__21341_21347,G__21342_21348,G__21343_21349));
} else {
}

var coll_21350__$1 = cljs.core.next(coll);
var n_21351 = (cljs.core.constant$keyword$5.cljs$core$IFn$_invoke$arity$1(opts) - (1));
while(true){
if((coll_21350__$1) && (((n_21351 == null)) || (!((n_21351 === (0)))))){
cljs.core._write(writer,sep);

var G__21344_21352 = cljs.core.first(coll_21350__$1);
var G__21345_21353 = writer;
var G__21346_21354 = opts;
(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__21344_21352,G__21345_21353,G__21346_21354) : print_one.call(null,G__21344_21352,G__21345_21353,G__21346_21354));

var G__21355 = cljs.core.next(coll_21350__$1);
var G__21356 = (n_21351 - (1));
coll_21350__$1 = G__21355;
n_21351 = G__21356;
continue;
} else {
if((cljs.core.seq(coll_21350__$1)) && ((n_21351 === (0)))){
cljs.core._write(writer,sep);

cljs.core._write(writer,"...");
} else {
}
}
break;
}

return cljs.core._write(writer,end);
}
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_21340;
}});
/**
* @param {...*} var_args
*/
cljs.core.write_all = (function() { 
var write_all__delegate = function (writer,ss){
var seq__21361 = cljs.core.seq(ss);
var chunk__21362 = null;
var count__21363 = (0);
var i__21364 = (0);
while(true){
if((i__21364 < count__21363)){
var s = chunk__21362.cljs$core$IIndexed$_nth$arity$2(null,i__21364);
cljs.core._write(writer,s);

var G__21365 = seq__21361;
var G__21366 = chunk__21362;
var G__21367 = count__21363;
var G__21368 = (i__21364 + (1));
seq__21361 = G__21365;
chunk__21362 = G__21366;
count__21363 = G__21367;
i__21364 = G__21368;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__21361);
if(temp__4126__auto__){
var seq__21361__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21361__$1)){
var c__4518__auto__ = cljs.core.chunk_first(seq__21361__$1);
var G__21369 = cljs.core.chunk_rest(seq__21361__$1);
var G__21370 = c__4518__auto__;
var G__21371 = cljs.core.count(c__4518__auto__);
var G__21372 = (0);
seq__21361 = G__21369;
chunk__21362 = G__21370;
count__21363 = G__21371;
i__21364 = G__21372;
continue;
} else {
var s = cljs.core.first(seq__21361__$1);
cljs.core._write(writer,s);

var G__21373 = cljs.core.next(seq__21361__$1);
var G__21374 = null;
var G__21375 = (0);
var G__21376 = (0);
seq__21361 = G__21373;
chunk__21362 = G__21374;
count__21363 = G__21375;
i__21364 = G__21376;
continue;
}
} else {
return null;
}
}
break;
}
};
var write_all = function (writer,var_args){
var ss = null;
if (arguments.length > 1) {
  ss = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return write_all__delegate.call(this,writer,ss);};
write_all.cljs$lang$maxFixedArity = 1;
write_all.cljs$lang$applyTo = (function (arglist__21377){
var writer = cljs.core.first(arglist__21377);
var ss = cljs.core.rest(arglist__21377);
return write_all__delegate(writer,ss);
});
write_all.cljs$core$IFn$_invoke$arity$variadic = write_all__delegate;
return write_all;
})()
;
cljs.core.string_print = (function string_print(x){
(cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1(x) : cljs.core._STAR_print_fn_STAR_.call(null,x));

return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.char_escapes = (function (){var obj21379 = {"\"":"\\\"","\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};
return obj21379;
})();
cljs.core.quote_string = (function quote_string(s){
return [cljs.core.str("\""),cljs.core.str(s.replace((function (){var G__21382 = "[\\\\\"\b\f\n\r\t]";
var G__21383 = "g";
return RegExp(G__21382,G__21383);
})(),(function (match){
return (cljs.core.char_escapes[match]);
}))),cljs.core.str("\"")].join('');
});
/**
* Prefer this to pr-seq, because it makes the printing function
* configurable, allowing efficient implementations such as appending
* to a StringBuffer.
*/
cljs.core.pr_writer = (function pr_writer(obj,writer,opts){
if((obj == null)){
return cljs.core._write(writer,"nil");
} else {
if((void 0 === obj)){
return cljs.core._write(writer,"#<undefined>");
} else {
if(cljs.core.truth_((function (){var and__3719__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$3);
if(cljs.core.truth_(and__3719__auto__)){
var and__3719__auto____$1 = (function (){var G__21397 = obj;
if(G__21397){
var bit__4412__auto__ = (G__21397.cljs$lang$protocol_mask$partition0$ & (131072));
if((bit__4412__auto__) || (G__21397.cljs$core$IMeta$)){
return true;
} else {
if((!G__21397.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__21397);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__21397);
}
})();
if(and__3719__auto____$1){
return cljs.core.meta(obj);
} else {
return and__3719__auto____$1;
}
} else {
return and__3719__auto__;
}
})())){
cljs.core._write(writer,"^");

pr_writer(cljs.core.meta(obj),writer,opts);

cljs.core._write(writer," ");
} else {
}

if((obj == null)){
return cljs.core._write(writer,"nil");
} else {
if(obj.cljs$lang$type){
return obj.cljs$lang$ctorPrWriter(obj,writer,opts);
} else {
if((function (){var G__21398 = obj;
if(G__21398){
var bit__4405__auto__ = (G__21398.cljs$lang$protocol_mask$partition0$ & (2147483648));
if((bit__4405__auto__) || (G__21398.cljs$core$IPrintWithWriter$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return obj.cljs$core$IPrintWithWriter$_pr_writer$arity$3(null,writer,opts);
} else {
if(((cljs.core.type(obj) === Boolean)) || (typeof obj === 'number')){
return cljs.core._write(writer,[cljs.core.str(obj)].join(''));
} else {
if(cljs.core.object_QMARK_(obj)){
cljs.core._write(writer,"#js ");

var G__21399 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(obj[k])], null);
}),cljs.core.js_keys(obj));
var G__21400 = pr_writer;
var G__21401 = writer;
var G__21402 = opts;
return (cljs.core.print_map.cljs$core$IFn$_invoke$arity$4 ? cljs.core.print_map.cljs$core$IFn$_invoke$arity$4(G__21399,G__21400,G__21401,G__21402) : cljs.core.print_map.call(null,G__21399,G__21400,G__21401,G__21402));
} else {
if(obj instanceof Array){
return cljs.core.pr_sequential_writer(writer,pr_writer,"#js ["," ","]",opts,obj);
} else {
if(cljs.core.truth_((function (){var G__21403 = obj;
return goog.isString(G__21403);
})())){
if(cljs.core.truth_(cljs.core.constant$keyword$2.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core._write(writer,cljs.core.quote_string(obj));
} else {
return cljs.core._write(writer,obj);
}
} else {
if(cljs.core.fn_QMARK_(obj)){
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<",[cljs.core.str(obj)].join(''),">"], 0));
} else {
if((obj instanceof Date)){
var normalize = (function (n,len){
var ns = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count(ns) < len)){
var G__21405 = [cljs.core.str("0"),cljs.core.str(ns)].join('');
ns = G__21405;
continue;
} else {
return ns;
}
break;
}
});
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#inst \"",[cljs.core.str(obj.getUTCFullYear())].join(''),"-",normalize((obj.getUTCMonth() + (1)),(2)),"-",normalize(obj.getUTCDate(),(2)),"T",normalize(obj.getUTCHours(),(2)),":",normalize(obj.getUTCMinutes(),(2)),":",normalize(obj.getUTCSeconds(),(2)),".",normalize(obj.getUTCMilliseconds(),(3)),"-","00:00\""], 0));
} else {
if(cljs.core.regexp_QMARK_(obj)){
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#\"",obj.source,"\""], 0));
} else {
if((function (){var G__21404 = obj;
if(G__21404){
var bit__4412__auto__ = (G__21404.cljs$lang$protocol_mask$partition0$ & (2147483648));
if((bit__4412__auto__) || (G__21404.cljs$core$IPrintWithWriter$)){
return true;
} else {
if((!G__21404.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,G__21404);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,G__21404);
}
})()){
return cljs.core._pr_writer(obj,writer,opts);
} else {
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<",[cljs.core.str(obj)].join(''),">"], 0));

}
}
}
}
}
}
}
}
}
}
}

}
}
});
cljs.core.pr_seq_writer = (function pr_seq_writer(objs,writer,opts){
cljs.core.pr_writer(cljs.core.first(objs),writer,opts);

var seq__21410 = cljs.core.seq(cljs.core.next(objs));
var chunk__21411 = null;
var count__21412 = (0);
var i__21413 = (0);
while(true){
if((i__21413 < count__21412)){
var obj = chunk__21411.cljs$core$IIndexed$_nth$arity$2(null,i__21413);
cljs.core._write(writer," ");

cljs.core.pr_writer(obj,writer,opts);

var G__21414 = seq__21410;
var G__21415 = chunk__21411;
var G__21416 = count__21412;
var G__21417 = (i__21413 + (1));
seq__21410 = G__21414;
chunk__21411 = G__21415;
count__21412 = G__21416;
i__21413 = G__21417;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__21410);
if(temp__4126__auto__){
var seq__21410__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21410__$1)){
var c__4518__auto__ = cljs.core.chunk_first(seq__21410__$1);
var G__21418 = cljs.core.chunk_rest(seq__21410__$1);
var G__21419 = c__4518__auto__;
var G__21420 = cljs.core.count(c__4518__auto__);
var G__21421 = (0);
seq__21410 = G__21418;
chunk__21411 = G__21419;
count__21412 = G__21420;
i__21413 = G__21421;
continue;
} else {
var obj = cljs.core.first(seq__21410__$1);
cljs.core._write(writer," ");

cljs.core.pr_writer(obj,writer,opts);

var G__21422 = cljs.core.next(seq__21410__$1);
var G__21423 = null;
var G__21424 = (0);
var G__21425 = (0);
seq__21410 = G__21422;
chunk__21411 = G__21423;
count__21412 = G__21424;
i__21413 = G__21425;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.core.pr_sb_with_opts = (function pr_sb_with_opts(objs,opts){
var sb = (new goog.string.StringBuffer());
var writer = (new cljs.core.StringBufferWriter(sb));
cljs.core.pr_seq_writer(objs,writer,opts);

writer.cljs$core$IWriter$_flush$arity$1(null);

return sb;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
if(cljs.core.empty_QMARK_(objs)){
return "";
} else {
return [cljs.core.str(cljs.core.pr_sb_with_opts(objs,opts))].join('');
}
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
if(cljs.core.empty_QMARK_(objs)){
return "\n";
} else {
var sb = cljs.core.pr_sb_with_opts(objs,opts);
sb.append("\n");

return [cljs.core.str(sb)].join('');
}
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
return cljs.core.string_print(cljs.core.pr_str_with_opts(objs,opts));
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print("\n");

if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$1))){
return cljs.core.flush();
} else {
return null;
}
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintWithWriter.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts(objs,cljs.core.pr_opts());
};
var pr_str = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this,objs);};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__21426){
var objs = cljs.core.seq(arglist__21426);
return pr_str__delegate(objs);
});
pr_str.cljs$core$IFn$_invoke$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts(objs,cljs.core.pr_opts());
};
var prn_str = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this,objs);};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__21427){
var objs = cljs.core.seq(arglist__21427);
return prn_str__delegate(objs);
});
prn_str.cljs$core$IFn$_invoke$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts(objs,cljs.core.pr_opts());
};
var pr = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this,objs);};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__21428){
var objs = cljs.core.seq(arglist__21428);
return pr__delegate(objs);
});
pr.cljs$core$IFn$_invoke$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$2,false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this,objs);};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__21429){
var objs = cljs.core.seq(arglist__21429);
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$core$IFn$_invoke$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$2,false));
};
var print_str = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this,objs);};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__21430){
var objs = cljs.core.seq(arglist__21430);
return print_str__delegate(objs);
});
print_str.cljs$core$IFn$_invoke$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$2,false));

if(cljs.core.truth_(cljs.core._STAR_print_newline_STAR_)){
return cljs.core.newline(cljs.core.pr_opts());
} else {
return null;
}
};
var println = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this,objs);};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__21431){
var objs = cljs.core.seq(arglist__21431);
return println__delegate(objs);
});
println.cljs$core$IFn$_invoke$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$2,false));
};
var println_str = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this,objs);};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__21432){
var objs = cljs.core.seq(arglist__21432);
return println_str__delegate(objs);
});
println_str.cljs$core$IFn$_invoke$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts(objs,cljs.core.pr_opts());

if(cljs.core.truth_(cljs.core._STAR_print_newline_STAR_)){
return cljs.core.newline(cljs.core.pr_opts());
} else {
return null;
}
};
var prn = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this,objs);};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__21433){
var objs = cljs.core.seq(arglist__21433);
return prn__delegate(objs);
});
prn.cljs$core$IFn$_invoke$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.print_map = (function print_map(m,print_one,writer,opts){
return cljs.core.pr_sequential_writer(writer,(function (e,w,opts__$1){
var G__21440_21446 = cljs.core.key(e);
var G__21441_21447 = w;
var G__21442_21448 = opts__$1;
(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__21440_21446,G__21441_21447,G__21442_21448) : print_one.call(null,G__21440_21446,G__21441_21447,G__21442_21448));

cljs.core._write(w," ");

var G__21443 = cljs.core.val(e);
var G__21444 = w;
var G__21445 = opts__$1;
return (print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__21443,G__21444,G__21445) : print_one.call(null,G__21443,G__21444,G__21445));
}),"{",", ","}",opts,cljs.core.seq(m));
});
cljs.core.Volatile.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Volatile.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var a__$1 = this;
cljs.core._write(writer,"#<Volatile: ");

cljs.core.pr_writer(a__$1.state,writer,opts);

return cljs.core._write(writer,">");
});

cljs.core.Var.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Var.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var a__$1 = this;
cljs.core._write(writer,"#'");

return cljs.core.pr_writer(a__$1.sym,writer,opts);
});

cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.ES6IteratorSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ES6IteratorSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#{"," ","}",opts,coll__$1);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});

cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});

cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#{"," ","}",opts,coll__$1);
});

cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var a__$1 = this;
cljs.core._write(writer,"#<Atom: ");

cljs.core.pr_writer(a__$1.state,writer,opts);

return cljs.core._write(writer,">");
});

cljs.core.ValSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ValSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});

cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core._write(writer,"()");
});

cljs.core.LazyTransformer.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.LazyTransformer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#queue ["," ","]",opts,cljs.core.seq(coll__$1));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});

cljs.core.Range.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Range.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.KeySeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.KeySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.List.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.List.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;

cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2(x__$1,y);
});

cljs.core.Subvec.prototype.cljs$core$IComparable$ = true;

cljs.core.Subvec.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2(x__$1,y);
});

cljs.core.Keyword.prototype.cljs$core$IComparable$ = true;

cljs.core.Keyword.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.compare_keywords(x__$1,y);
});

cljs.core.Symbol.prototype.cljs$core$IComparable$ = true;

cljs.core.Symbol.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.compare_symbols(x__$1,y);
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this,iref,f,args);};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__21449){
var iref = cljs.core.first(arglist__21449);
arglist__21449 = cljs.core.next(arglist__21449);
var f = cljs.core.first(arglist__21449);
var args = cljs.core.rest(arglist__21449);
return alter_meta_BANG___delegate(iref,f,args);
});
alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
cljs.core._add_watch(iref,key,f);

return iref;
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
cljs.core._remove_watch(iref,key);

return iref;
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.cljs$core$IFn$_invoke$arity$1("G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null)){
cljs.core.gensym_counter = (function (){var G__21452 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21452) : cljs.core.atom.call(null,G__21452));
})();
} else {
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gensym.cljs$core$IFn$_invoke$arity$0 = gensym__0;
gensym.cljs$core$IFn$_invoke$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = (1);
cljs.core.fixture2 = (2);

/**
* @constructor
*/
cljs.core.Delay = (function (f,value){
this.f = f;
this.value = value;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var self__ = this;
var d__$1 = this;
return cljs.core.not(self__.f);
});

cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.f)){
self__.value = (function (){return (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
})();

self__.f = null;
} else {
}

return self__.value;
});

cljs.core.Delay.cljs$lang$type = true;

cljs.core.Delay.cljs$lang$ctorStr = "cljs.core/Delay";

cljs.core.Delay.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/Delay");
});

cljs.core.__GT_Delay = (function __GT_Delay(f,value){
return (new cljs.core.Delay(f,value));
});

/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return (x instanceof cljs.core.Delay);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_(x)){
var G__21454 = x;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21454) : cljs.core.deref.call(null,G__21454));
} else {
return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_(d);
});
cljs.core.preserving_reduced = (function preserving_reduced(rf){
return (function (p1__21455_SHARP_,p2__21456_SHARP_){
var ret = (function (){var G__21459 = p1__21455_SHARP_;
var G__21460 = p2__21456_SHARP_;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__21459,G__21460) : rf.call(null,G__21459,G__21460));
})();
if(cljs.core.reduced_QMARK_(ret)){
return cljs.core.reduced(ret);
} else {
return ret;
}
});
});
/**
* A transducer which concatenates the contents of each input, which must be a
* collection, into the reduction.
*/
cljs.core.cat = (function cat(rf){
var rf1 = cljs.core.preserving_reduced(rf);
return ((function (rf1){
return (function() {
var G__21463 = null;
var G__21463__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__21463__1 = (function (result){
var G__21462 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__21462) : rf.call(null,G__21462));
});
var G__21463__2 = (function (result,input){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf1,result,input);
});
G__21463 = function(result,input){
switch(arguments.length){
case 0:
return G__21463__0.call(this);
case 1:
return G__21463__1.call(this,result);
case 2:
return G__21463__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21463.cljs$core$IFn$_invoke$arity$0 = G__21463__0;
G__21463.cljs$core$IFn$_invoke$arity$1 = G__21463__1;
G__21463.cljs$core$IFn$_invoke$arity$2 = G__21463__2;
return G__21463;
})()
;})(rf1))
});
/**
* Returns a lazy sequence removing consecutive duplicates in coll.
* Returns a transducer when no collection is provided.
*/
cljs.core.dedupe = (function() {
var dedupe = null;
var dedupe__0 = (function (){
return (function (rf){
var pa = cljs.core.volatile_BANG_(cljs.core.constant$keyword$15);
return ((function (pa){
return (function() {
var G__21472 = null;
var G__21472__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__21472__1 = (function (result){
var G__21468 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__21468) : rf.call(null,G__21468));
});
var G__21472__2 = (function (result,input){
var prior = (function (){var G__21469 = pa;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21469) : cljs.core.deref.call(null,G__21469));
})();
cljs.core.vreset_BANG_(pa,input);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prior,input)){
return result;
} else {
var G__21470 = result;
var G__21471 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__21470,G__21471) : rf.call(null,G__21470,G__21471));
}
});
G__21472 = function(result,input){
switch(arguments.length){
case 0:
return G__21472__0.call(this);
case 1:
return G__21472__1.call(this,result);
case 2:
return G__21472__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21472.cljs$core$IFn$_invoke$arity$0 = G__21472__0;
G__21472.cljs$core$IFn$_invoke$arity$1 = G__21472__1;
G__21472.cljs$core$IFn$_invoke$arity$2 = G__21472__2;
return G__21472;
})()
;})(pa))
});
});
var dedupe__1 = (function (coll){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(dedupe.cljs$core$IFn$_invoke$arity$0(),coll);
});
dedupe = function(coll){
switch(arguments.length){
case 0:
return dedupe__0.call(this);
case 1:
return dedupe__1.call(this,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dedupe.cljs$core$IFn$_invoke$arity$0 = dedupe__0;
dedupe.cljs$core$IFn$_invoke$arity$1 = dedupe__1;
return dedupe;
})()
;
/**
* Returns items from coll with random probability of prob (0.0 -
* 1.0).  Returns a transducer when no collection is provided.
*/
cljs.core.random_sample = (function() {
var random_sample = null;
var random_sample__1 = (function (prob){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (_){
return ((function (){return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0 ? cljs.core.rand.cljs$core$IFn$_invoke$arity$0() : cljs.core.rand.call(null));
})() < prob);
}));
});
var random_sample__2 = (function (prob,coll){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (_){
return ((function (){return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0 ? cljs.core.rand.cljs$core$IFn$_invoke$arity$0() : cljs.core.rand.call(null));
})() < prob);
}),coll);
});
random_sample = function(prob,coll){
switch(arguments.length){
case 1:
return random_sample__1.call(this,prob);
case 2:
return random_sample__2.call(this,prob,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
random_sample.cljs$core$IFn$_invoke$arity$1 = random_sample__1;
random_sample.cljs$core$IFn$_invoke$arity$2 = random_sample__2;
return random_sample;
})()
;

/**
* @constructor
*/
cljs.core.Eduction = (function (xform,coll){
this.xform = xform;
this.coll = coll;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2173173760;
})
cljs.core.Eduction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll__$1,writer,opts){
var self__ = this;
var coll__$2 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$2);
});

cljs.core.Eduction.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(self__.xform,f,init,self__.coll);
});

cljs.core.Eduction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.seq(cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(self__.xform,self__.coll));
});

cljs.core.Eduction.cljs$lang$type = true;

cljs.core.Eduction.cljs$lang$ctorStr = "cljs.core/Eduction";

cljs.core.Eduction.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/Eduction");
});

cljs.core.__GT_Eduction = (function __GT_Eduction(xform,coll){
return (new cljs.core.Eduction(xform,coll));
});

(cljs.core.Eduction.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4709__auto__ = this;
return cljs.core.es6_iterator(this__4709__auto__);
}));
/**
* Returns a reducible/iterable/seqable application of
* the transducer to the items in coll. Note that these applications
* will be performed every time iterator/seq/reduce is called.
*/
cljs.core.eduction = (function eduction(xform,coll){
return (new cljs.core.Eduction(xform,coll));
});
/**
* Runs the supplied procedure (via reduce), for purposes of side
* effects, on successive items in the collection. Returns nil
*/
cljs.core.run_BANG_ = (function run_BANG_(proc,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__21474_SHARP_,p2__21473_SHARP_){
var G__21476 = p2__21473_SHARP_;
return (proc.cljs$core$IFn$_invoke$arity$1 ? proc.cljs$core$IFn$_invoke$arity$1(G__21476) : proc.call(null,G__21476));
}),null,coll);
});

cljs.core.IEncodeJS = (function (){var obj21478 = {};
return obj21478;
})();

cljs.core._clj__GT_js = (function _clj__GT_js(x){
if((function (){var and__3719__auto__ = x;
if(and__3719__auto__){
return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1;
} else {
return and__3719__auto__;
}
})()){
return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1(x);
} else {
var x__4375__auto__ = (((x == null))?null:x);
return (function (){var or__3731__auto__ = (cljs.core._clj__GT_js[(function (){var G__21482 = x__4375__auto__;
return goog.typeOf(G__21482);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._clj__GT_js["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IEncodeJS.-clj->js",x);
}
}
})().call(null,x);
}
});

cljs.core._key__GT_js = (function _key__GT_js(x){
if((function (){var and__3719__auto__ = x;
if(and__3719__auto__){
return x.cljs$core$IEncodeJS$_key__GT_js$arity$1;
} else {
return and__3719__auto__;
}
})()){
return x.cljs$core$IEncodeJS$_key__GT_js$arity$1(x);
} else {
var x__4375__auto__ = (((x == null))?null:x);
return (function (){var or__3731__auto__ = (cljs.core._key__GT_js[(function (){var G__21486 = x__4375__auto__;
return goog.typeOf(G__21486);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._key__GT_js["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IEncodeJS.-key->js",x);
}
}
})().call(null,x);
}
});

cljs.core.key__GT_js = (function key__GT_js(k){
if((function (){var G__21489 = k;
if(G__21489){
var bit__4412__auto__ = null;
if(cljs.core.truth_((function (){var or__3731__auto__ = bit__4412__auto__;
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
return G__21489.cljs$core$IEncodeJS$;
}
})())){
return true;
} else {
if((!G__21489.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__21489);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__21489);
}
})()){
return cljs.core._clj__GT_js(k);
} else {
if((typeof k === 'string') || (typeof k === 'number') || ((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol))){
var G__21490 = k;
return (cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1 ? cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1(G__21490) : cljs.core.clj__GT_js.call(null,G__21490));
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k], 0));
}
}
});
/**
* Recursively transforms ClojureScript values to JavaScript.
* sets/vectors/lists become Arrays, Keywords and Symbol become Strings,
* Maps become Objects. Arbitrary keys are encoded to by key->js.
*/
cljs.core.clj__GT_js = (function clj__GT_js(x){
if((x == null)){
return null;
} else {
if((function (){var G__21506 = x;
if(G__21506){
var bit__4412__auto__ = null;
if(cljs.core.truth_((function (){var or__3731__auto__ = bit__4412__auto__;
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
return G__21506.cljs$core$IEncodeJS$;
}
})())){
return true;
} else {
if((!G__21506.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__21506);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__21506);
}
})()){
return cljs.core._clj__GT_js(x);
} else {
if((x instanceof cljs.core.Keyword)){
return cljs.core.name(x);
} else {
if((x instanceof cljs.core.Symbol)){
return [cljs.core.str(x)].join('');
} else {
if(cljs.core.map_QMARK_(x)){
var m = (function (){var obj21508 = {};
return obj21508;
})();
var seq__21509_21519 = cljs.core.seq(x);
var chunk__21510_21520 = null;
var count__21511_21521 = (0);
var i__21512_21522 = (0);
while(true){
if((i__21512_21522 < count__21511_21521)){
var vec__21513_21523 = chunk__21510_21520.cljs$core$IIndexed$_nth$arity$2(null,i__21512_21522);
var k_21524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21513_21523,(0),null);
var v_21525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21513_21523,(1),null);
(m[cljs.core.key__GT_js(k_21524)] = clj__GT_js(v_21525));

var G__21526 = seq__21509_21519;
var G__21527 = chunk__21510_21520;
var G__21528 = count__21511_21521;
var G__21529 = (i__21512_21522 + (1));
seq__21509_21519 = G__21526;
chunk__21510_21520 = G__21527;
count__21511_21521 = G__21528;
i__21512_21522 = G__21529;
continue;
} else {
var temp__4126__auto___21530 = cljs.core.seq(seq__21509_21519);
if(temp__4126__auto___21530){
var seq__21509_21531__$1 = temp__4126__auto___21530;
if(cljs.core.chunked_seq_QMARK_(seq__21509_21531__$1)){
var c__4518__auto___21532 = cljs.core.chunk_first(seq__21509_21531__$1);
var G__21533 = cljs.core.chunk_rest(seq__21509_21531__$1);
var G__21534 = c__4518__auto___21532;
var G__21535 = cljs.core.count(c__4518__auto___21532);
var G__21536 = (0);
seq__21509_21519 = G__21533;
chunk__21510_21520 = G__21534;
count__21511_21521 = G__21535;
i__21512_21522 = G__21536;
continue;
} else {
var vec__21514_21537 = cljs.core.first(seq__21509_21531__$1);
var k_21538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21514_21537,(0),null);
var v_21539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21514_21537,(1),null);
(m[cljs.core.key__GT_js(k_21538)] = clj__GT_js(v_21539));

var G__21540 = cljs.core.next(seq__21509_21531__$1);
var G__21541 = null;
var G__21542 = (0);
var G__21543 = (0);
seq__21509_21519 = G__21540;
chunk__21510_21520 = G__21541;
count__21511_21521 = G__21542;
i__21512_21522 = G__21543;
continue;
}
} else {
}
}
break;
}

return m;
} else {
if(cljs.core.coll_QMARK_(x)){
var arr = [];
var seq__21515_21544 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clj__GT_js,x));
var chunk__21516_21545 = null;
var count__21517_21546 = (0);
var i__21518_21547 = (0);
while(true){
if((i__21518_21547 < count__21517_21546)){
var x_21548__$1 = chunk__21516_21545.cljs$core$IIndexed$_nth$arity$2(null,i__21518_21547);
arr.push(x_21548__$1);

var G__21549 = seq__21515_21544;
var G__21550 = chunk__21516_21545;
var G__21551 = count__21517_21546;
var G__21552 = (i__21518_21547 + (1));
seq__21515_21544 = G__21549;
chunk__21516_21545 = G__21550;
count__21517_21546 = G__21551;
i__21518_21547 = G__21552;
continue;
} else {
var temp__4126__auto___21553 = cljs.core.seq(seq__21515_21544);
if(temp__4126__auto___21553){
var seq__21515_21554__$1 = temp__4126__auto___21553;
if(cljs.core.chunked_seq_QMARK_(seq__21515_21554__$1)){
var c__4518__auto___21555 = cljs.core.chunk_first(seq__21515_21554__$1);
var G__21556 = cljs.core.chunk_rest(seq__21515_21554__$1);
var G__21557 = c__4518__auto___21555;
var G__21558 = cljs.core.count(c__4518__auto___21555);
var G__21559 = (0);
seq__21515_21544 = G__21556;
chunk__21516_21545 = G__21557;
count__21517_21546 = G__21558;
i__21518_21547 = G__21559;
continue;
} else {
var x_21560__$1 = cljs.core.first(seq__21515_21554__$1);
arr.push(x_21560__$1);

var G__21561 = cljs.core.next(seq__21515_21554__$1);
var G__21562 = null;
var G__21563 = (0);
var G__21564 = (0);
seq__21515_21544 = G__21561;
chunk__21516_21545 = G__21562;
count__21517_21546 = G__21563;
i__21518_21547 = G__21564;
continue;
}
} else {
}
}
break;
}

return arr;
} else {
return x;

}
}
}
}
}
}
});

cljs.core.IEncodeClojure = (function (){var obj21566 = {};
return obj21566;
})();

cljs.core._js__GT_clj = (function _js__GT_clj(x,options){
if((function (){var and__3719__auto__ = x;
if(and__3719__auto__){
return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2;
} else {
return and__3719__auto__;
}
})()){
return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2(x,options);
} else {
var x__4375__auto__ = (((x == null))?null:x);
return (function (){var or__3731__auto__ = (cljs.core._js__GT_clj[(function (){var G__21570 = x__4375__auto__;
return goog.typeOf(G__21570);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._js__GT_clj["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IEncodeClojure.-js->clj",x);
}
}
})().call(null,x,options);
}
});

/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() {
var js__GT_clj = null;
var js__GT_clj__1 = (function (x){
return js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$16,false], null)], 0));
});
var js__GT_clj__2 = (function() { 
var G__21627__delegate = function (x,opts){
var map__21600 = opts;
var map__21600__$1 = ((cljs.core.seq_QMARK_(map__21600))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21600):map__21600);
var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21600__$1,cljs.core.constant$keyword$16);
var keyfn = (cljs.core.truth_(keywordize_keys)?cljs.core.keyword:cljs.core.str);
var f = ((function (map__21600,map__21600__$1,keywordize_keys,keyfn){
return (function thisfn(x__$1){
if((function (){var G__21616 = x__$1;
if(G__21616){
var bit__4412__auto__ = null;
if(cljs.core.truth_((function (){var or__3731__auto__ = bit__4412__auto__;
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
return G__21616.cljs$core$IEncodeClojure$;
}
})())){
return true;
} else {
if((!G__21616.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeClojure,G__21616);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeClojure,G__21616);
}
})()){
return cljs.core._js__GT_clj(x__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,opts));
} else {
if(cljs.core.seq_QMARK_(x__$1)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(thisfn,x__$1));
} else {
if(cljs.core.coll_QMARK_(x__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(x__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(thisfn,x__$1));
} else {
if(x__$1 instanceof Array){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(thisfn,x__$1));
} else {
if((cljs.core.type(x__$1) === Object)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4487__auto__ = ((function (map__21600,map__21600__$1,keywordize_keys,keyfn){
return (function iter__21617(s__21618){
return (new cljs.core.LazySeq(null,((function (map__21600,map__21600__$1,keywordize_keys,keyfn){
return (function (){
var s__21618__$1 = s__21618;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__21618__$1);
if(temp__4126__auto__){
var s__21618__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21618__$2)){
var c__4485__auto__ = cljs.core.chunk_first(s__21618__$2);
var size__4486__auto__ = cljs.core.count(c__4485__auto__);
var b__21620 = cljs.core.chunk_buffer(size__4486__auto__);
if((function (){var i__21619 = (0);
while(true){
if((i__21619 < size__4486__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4485__auto__,i__21619);
cljs.core.chunk_append(b__21620,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__21625 = k;
return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__21625) : keyfn.call(null,G__21625));
})(),thisfn((x__$1[k]))], null));

var G__21628 = (i__21619 + (1));
i__21619 = G__21628;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21620),iter__21617(cljs.core.chunk_rest(s__21618__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21620),null);
}
} else {
var k = cljs.core.first(s__21618__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__21626 = k;
return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__21626) : keyfn.call(null,G__21626));
})(),thisfn((x__$1[k]))], null),iter__21617(cljs.core.rest(s__21618__$2)));
}
} else {
return null;
}
break;
}
});})(map__21600,map__21600__$1,keywordize_keys,keyfn))
,null,null));
});})(map__21600,map__21600__$1,keywordize_keys,keyfn))
;
return iter__4487__auto__(cljs.core.js_keys(x__$1));
})());
} else {
return x__$1;

}
}
}
}
}
});})(map__21600,map__21600__$1,keywordize_keys,keyfn))
;
return f(x);
};
var G__21627 = function (x,var_args){
var opts = null;
if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__21627__delegate.call(this,x,opts);};
G__21627.cljs$lang$maxFixedArity = 1;
G__21627.cljs$lang$applyTo = (function (arglist__21629){
var x = cljs.core.first(arglist__21629);
var opts = cljs.core.rest(arglist__21629);
return G__21627__delegate(x,opts);
});
G__21627.cljs$core$IFn$_invoke$arity$variadic = G__21627__delegate;
return G__21627;
})()
;
js__GT_clj = function(x,var_args){
var opts = var_args;
switch(arguments.length){
case 1:
return js__GT_clj__1.call(this,x);
default:
return js__GT_clj__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = js__GT_clj__2.cljs$lang$applyTo;
js__GT_clj.cljs$core$IFn$_invoke$arity$1 = js__GT_clj__1;
js__GT_clj.cljs$core$IFn$_invoke$arity$variadic = js__GT_clj__2.cljs$core$IFn$_invoke$arity$variadic;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem = (function (){var G__21632 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21632) : cljs.core.atom.call(null,G__21632));
})();
return ((function (mem){
return (function() { 
var G__21634__delegate = function (args){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var G__21633 = mem;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21633) : cljs.core.deref.call(null,G__21633));
})(),args,cljs.core.lookup_sentinel);
if((v === cljs.core.lookup_sentinel)){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc,args,ret);

return ret;
} else {
return v;
}
};
var G__21634 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__21634__delegate.call(this,args);};
G__21634.cljs$lang$maxFixedArity = 0;
G__21634.cljs$lang$applyTo = (function (arglist__21635){
var args = cljs.core.seq(arglist__21635);
return G__21634__delegate(args);
});
G__21634.cljs$core$IFn$_invoke$arity$variadic = G__21634__delegate;
return G__21634;
})()
;
;})(mem))
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret = (function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})();
if(cljs.core.fn_QMARK_(ret)){
var G__21637 = ret;
f = G__21637;
continue;
} else {
return ret;
}
break;
}
});
var trampoline__2 = (function() { 
var G__21638__delegate = function (f,args){
return trampoline.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}));
};
var G__21638 = function (f,var_args){
var args = null;
if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__21638__delegate.call(this,f,args);};
G__21638.cljs$lang$maxFixedArity = 1;
G__21638.cljs$lang$applyTo = (function (arglist__21639){
var f = cljs.core.first(arglist__21639);
var args = cljs.core.rest(arglist__21639);
return G__21638__delegate(f,args);
});
G__21638.cljs$core$IFn$_invoke$arity$variadic = G__21638__delegate;
return G__21638;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$core$IFn$_invoke$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$core$IFn$_invoke$arity$1 = trampoline__1;
trampoline.cljs$core$IFn$_invoke$arity$variadic = trampoline__2.cljs$core$IFn$_invoke$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.cljs$core$IFn$_invoke$arity$1((1));
});
var rand__1 = (function (n){
return ((function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})() * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand.cljs$core$IFn$_invoke$arity$0 = rand__0;
rand.cljs$core$IFn$_invoke$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
var G__21642 = ((function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})() * n);
return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__21642) : Math.floor.call(null,G__21642));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,cljs.core.rand_int(cljs.core.count(coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){
var k = (function (){var G__21644 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21644) : f.call(null,G__21644));
})();
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$17,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$18,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$19,cljs.core.PersistentArrayMap.EMPTY], null);
});
cljs.core._global_hierarchy = null;
cljs.core.get_global_hierarchy = (function get_global_hierarchy(){
if((cljs.core._global_hierarchy == null)){
cljs.core._global_hierarchy = (function (){var G__21646 = cljs.core.make_hierarchy();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21646) : cljs.core.atom.call(null,G__21646));
})();
} else {
}

return cljs.core._global_hierarchy;
});
/**
* @param {...*} var_args
*/
cljs.core.swap_global_hierarchy_BANG_ = (function() { 
var swap_global_hierarchy_BANG___delegate = function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,cljs.core.get_global_hierarchy(),f,args);
};
var swap_global_hierarchy_BANG_ = function (f,var_args){
var args = null;
if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return swap_global_hierarchy_BANG___delegate.call(this,f,args);};
swap_global_hierarchy_BANG_.cljs$lang$maxFixedArity = 1;
swap_global_hierarchy_BANG_.cljs$lang$applyTo = (function (arglist__21647){
var f = cljs.core.first(arglist__21647);
var args = cljs.core.rest(arglist__21647);
return swap_global_hierarchy_BANG___delegate(f,args);
});
swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_global_hierarchy_BANG___delegate;
return swap_global_hierarchy_BANG_;
})()
;
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.cljs$core$IFn$_invoke$arity$3((function (){var G__21712 = cljs.core.get_global_hierarchy();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21712) : cljs.core.deref.call(null,G__21712));
})(),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3731__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child,parent);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = cljs.core.contains_QMARK_(cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(h).call(null,child),parent);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
var and__3719__auto__ = cljs.core.vector_QMARK_(parent);
if(and__3719__auto__){
var and__3719__auto____$1 = cljs.core.vector_QMARK_(child);
if(and__3719__auto____$1){
var and__3719__auto____$2 = (cljs.core.count(parent) === cljs.core.count(child));
if(and__3719__auto____$2){
var ret = true;
var i = (0);
while(true){
if((!(ret)) || ((i === cljs.core.count(parent)))){
return ret;
} else {
var G__21737 = isa_QMARK_.cljs$core$IFn$_invoke$arity$3(h,(function (){var G__21735 = i;
return (child.cljs$core$IFn$_invoke$arity$1 ? child.cljs$core$IFn$_invoke$arity$1(G__21735) : child.call(null,G__21735));
})(),(function (){var G__21736 = i;
return (parent.cljs$core$IFn$_invoke$arity$1 ? parent.cljs$core$IFn$_invoke$arity$1(G__21736) : parent.call(null,G__21736));
})());
var G__21738 = (i + (1));
ret = G__21737;
i = G__21738;
continue;
}
break;
}
} else {
return and__3719__auto____$2;
}
} else {
return and__3719__auto____$1;
}
} else {
return and__3719__auto__;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
isa_QMARK_.cljs$core$IFn$_invoke$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$core$IFn$_invoke$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.cljs$core$IFn$_invoke$arity$2((function (){var G__21742 = cljs.core.get_global_hierarchy();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21742) : cljs.core.deref.call(null,G__21742));
})(),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parents.cljs$core$IFn$_invoke$arity$1 = parents__1;
parents.cljs$core$IFn$_invoke$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.cljs$core$IFn$_invoke$arity$2((function (){var G__21746 = cljs.core.get_global_hierarchy();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21746) : cljs.core.deref.call(null,G__21746));
})(),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestors.cljs$core$IFn$_invoke$arity$1 = ancestors__1;
ancestors.cljs$core$IFn$_invoke$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.cljs$core$IFn$_invoke$arity$2((function (){var G__21750 = cljs.core.get_global_hierarchy();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21750) : cljs.core.deref.call(null,G__21750));
})(),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
descendants.cljs$core$IFn$_invoke$arity$1 = descendants__1;
descendants.cljs$core$IFn$_invoke$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace(parent))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.Symbol(null,"parent","parent",761652748,null))], 0)))].join('')));
}

cljs.core.swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic(derive,cljs.core.array_seq([tag,parent], 0));

return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tag,parent)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"parent","parent",761652748,null))], 0)))].join('')));
}

var tp = cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(h);
var td = cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(h);
var ta = cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(h);
var tf = ((function (tp,td,ta){
return (function (m,source,sources,target,targets){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (tp,td,ta){
return (function (ret,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.get.cljs$core$IFn$_invoke$arity$3(targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons(target,(function (){var G__21759 = target;
return (targets.cljs$core$IFn$_invoke$arity$1 ? targets.cljs$core$IFn$_invoke$arity$1(G__21759) : targets.call(null,G__21759));
})())));
});})(tp,td,ta))
,m,cljs.core.cons(source,(function (){var G__21760 = source;
return (sources.cljs$core$IFn$_invoke$arity$1 ? sources.cljs$core$IFn$_invoke$arity$1(G__21760) : sources.call(null,G__21760));
})()));
});})(tp,td,ta))
;
var or__3731__auto__ = ((cljs.core.contains_QMARK_((function (){var G__21764 = tag;
return (tp.cljs$core$IFn$_invoke$arity$1 ? tp.cljs$core$IFn$_invoke$arity$1(G__21764) : tp.call(null,G__21764));
})(),parent))?null:(function (){
if(cljs.core.contains_QMARK_((function (){var G__21765 = tag;
return (ta.cljs$core$IFn$_invoke$arity$1 ? ta.cljs$core$IFn$_invoke$arity$1(G__21765) : ta.call(null,G__21765));
})(),parent)){
throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else {
}

if(cljs.core.contains_QMARK_((function (){var G__21766 = parent;
return (ta.cljs$core$IFn$_invoke$arity$1 ? ta.cljs$core$IFn$_invoke$arity$1(G__21766) : ta.call(null,G__21766));
})(),tag)){
throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else {
}

return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$17,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(h),tag,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(tp,tag,cljs.core.PersistentHashSet.EMPTY),parent)),cljs.core.constant$keyword$19,tf(cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(h),tag,td,parent,ta),cljs.core.constant$keyword$18,tf(cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(h),parent,ta,tag,td)], null);
})()
);
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
derive.cljs$core$IFn$_invoke$arity$2 = derive__2;
derive.cljs$core$IFn$_invoke$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic(underive,cljs.core.array_seq([tag,parent], 0));

return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap = cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(h);
var childsParents = (cljs.core.truth_((function (){var G__21773 = tag;
return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__21773) : parentMap.call(null,G__21773));
})())?cljs.core.disj.cljs$core$IFn$_invoke$arity$2((function (){var G__21774 = tag;
return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__21774) : parentMap.call(null,G__21774));
})(),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents = (cljs.core.truth_(cljs.core.not_empty(childsParents))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parentMap,tag,childsParents):cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(parentMap,tag));
var deriv_seq = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (parentMap,childsParents,newParents){
return (function (p1__21767_SHARP_){
return cljs.core.cons(cljs.core.first(p1__21767_SHARP_),cljs.core.interpose(cljs.core.first(p1__21767_SHARP_),cljs.core.second(p1__21767_SHARP_)));
});})(parentMap,childsParents,newParents))
,cljs.core.seq(newParents)));
if(cljs.core.contains_QMARK_((function (){var G__21775 = tag;
return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__21775) : parentMap.call(null,G__21775));
})(),parent)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (parentMap,childsParents,newParents,deriv_seq){
return (function (p1__21768_SHARP_,p2__21769_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.derive,p1__21768_SHARP_,p2__21769_SHARP_);
});})(parentMap,childsParents,newParents,deriv_seq))
,cljs.core.make_hierarchy(),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),deriv_seq));
} else {
return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
underive.cljs$core$IFn$_invoke$arity$2 = underive__2;
underive.cljs$core$IFn$_invoke$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(method_cache,(function (_){
var G__21778 = method_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21778) : cljs.core.deref.call(null,G__21778));
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cached_hierarchy,(function (_){
var G__21779 = hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21779) : cljs.core.deref.call(null,G__21779));
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs = (function (){var G__21795 = prefer_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21795) : cljs.core.deref.call(null,G__21795));
})().call(null,x);
var or__3731__auto__ = (cljs.core.truth_((function (){var and__3719__auto__ = xprefs;
if(cljs.core.truth_(and__3719__auto__)){
var G__21797 = y;
return (xprefs.cljs$core$IFn$_invoke$arity$1 ? xprefs.cljs$core$IFn$_invoke$arity$1(G__21797) : xprefs.call(null,G__21797));
} else {
return and__3719__auto__;
}
})())?true:null);
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (function (){var ps = cljs.core.parents.cljs$core$IFn$_invoke$arity$1(y);
while(true){
if((cljs.core.count(ps) > (0))){
if(cljs.core.truth_(prefers_STAR_(x,cljs.core.first(ps),prefer_table))){
} else {
}

var G__21798 = cljs.core.rest(ps);
ps = G__21798;
continue;
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(or__3731__auto____$1)){
return or__3731__auto____$1;
} else {
var or__3731__auto____$2 = (function (){var ps = cljs.core.parents.cljs$core$IFn$_invoke$arity$1(x);
while(true){
if((cljs.core.count(ps) > (0))){
if(cljs.core.truth_(prefers_STAR_(cljs.core.first(ps),y,prefer_table))){
} else {
}

var G__21799 = cljs.core.rest(ps);
ps = G__21799;
continue;
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(or__3731__auto____$2)){
return or__3731__auto____$2;
} else {
return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3731__auto__ = cljs.core.prefers_STAR_(x,y,prefer_table);
if(cljs.core.truth_(or__3731__auto__)){
return or__3731__auto__;
} else {
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (be,p__21813){
var vec__21814 = p__21813;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21814,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21814,(1),null);
var e = vec__21814;
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3((function (){var G__21815 = hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21815) : cljs.core.deref.call(null,G__21815));
})(),dispatch_val,k)){
var be2 = (cljs.core.truth_((function (){var or__3731__auto__ = (be == null);
if(or__3731__auto__){
return or__3731__auto__;
} else {
return cljs.core.dominates(k,cljs.core.first(be),prefer_table);
}
})())?e:be);
if(cljs.core.truth_(cljs.core.dominates(cljs.core.first(be2),k,prefer_table))){
} else {
throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k),cljs.core.str(" and "),cljs.core.str(cljs.core.first(be2)),cljs.core.str(", and neither is preferred")].join('')));
}

return be2;
} else {
return be;
}
}),null,(function (){var G__21816 = method_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21816) : cljs.core.deref.call(null,G__21816));
})());
if(cljs.core.truth_(best_entry)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__21817 = cached_hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21817) : cljs.core.deref.call(null,G__21817));
})(),(function (){var G__21818 = hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21818) : cljs.core.deref.call(null,G__21818));
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(method_cache,cljs.core.assoc,dispatch_val,cljs.core.second(best_entry));

return cljs.core.second(best_entry);
} else {
cljs.core.reset_cache(method_cache,method_table,cached_hierarchy,hierarchy);

return find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else {
return null;
}
});

cljs.core.IMultiFn = (function (){var obj21820 = {};
return obj21820;
})();

cljs.core._reset = (function _reset(mf){
if((function (){var and__3719__auto__ = mf;
if(and__3719__auto__){
return mf.cljs$core$IMultiFn$_reset$arity$1;
} else {
return and__3719__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else {
var x__4375__auto__ = (((mf == null))?null:mf);
return (function (){var or__3731__auto__ = (cljs.core._reset[(function (){var G__21824 = x__4375__auto__;
return goog.typeOf(G__21824);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._reset["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});

cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3719__auto__ = mf;
if(and__3719__auto__){
return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else {
return and__3719__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else {
var x__4375__auto__ = (((mf == null))?null:mf);
return (function (){var or__3731__auto__ = (cljs.core._add_method[(function (){var G__21828 = x__4375__auto__;
return goog.typeOf(G__21828);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._add_method["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});

cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3719__auto__ = mf;
if(and__3719__auto__){
return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else {
return and__3719__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else {
var x__4375__auto__ = (((mf == null))?null:mf);
return (function (){var or__3731__auto__ = (cljs.core._remove_method[(function (){var G__21832 = x__4375__auto__;
return goog.typeOf(G__21832);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._remove_method["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});

cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3719__auto__ = mf;
if(and__3719__auto__){
return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else {
return and__3719__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else {
var x__4375__auto__ = (((mf == null))?null:mf);
return (function (){var or__3731__auto__ = (cljs.core._prefer_method[(function (){var G__21836 = x__4375__auto__;
return goog.typeOf(G__21836);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._prefer_method["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});

cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3719__auto__ = mf;
if(and__3719__auto__){
return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else {
return and__3719__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else {
var x__4375__auto__ = (((mf == null))?null:mf);
return (function (){var or__3731__auto__ = (cljs.core._get_method[(function (){var G__21840 = x__4375__auto__;
return goog.typeOf(G__21840);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._get_method["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});

cljs.core._methods = (function _methods(mf){
if((function (){var and__3719__auto__ = mf;
if(and__3719__auto__){
return mf.cljs$core$IMultiFn$_methods$arity$1;
} else {
return and__3719__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else {
var x__4375__auto__ = (((mf == null))?null:mf);
return (function (){var or__3731__auto__ = (cljs.core._methods[(function (){var G__21844 = x__4375__auto__;
return goog.typeOf(G__21844);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._methods["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});

cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3719__auto__ = mf;
if(and__3719__auto__){
return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else {
return and__3719__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else {
var x__4375__auto__ = (((mf == null))?null:mf);
return (function (){var or__3731__auto__ = (cljs.core._prefers[(function (){var G__21848 = x__4375__auto__;
return goog.typeOf(G__21848);
})()]);
if(or__3731__auto__){
return or__3731__auto__;
} else {
var or__3731__auto____$1 = (cljs.core._prefers["_"]);
if(or__3731__auto____$1){
return or__3731__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});

cljs.core.throw_no_method_error = (function throw_no_method_error(name,dispatch_val){
throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val)].join('')));
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194305;
this.cljs$lang$protocol_mask$partition1$ = 4352;
})
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__21850 = this$__$1;
return goog.getUid(G__21850);
});

cljs.core.MultiFn.prototype.cljs$core$INamed$_name$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._name(self__.name);
});

cljs.core.MultiFn.prototype.cljs$core$INamed$_namespace$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._namespace(self__.name);
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var self__ = this;
var mf__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.method_table,((function (mf__$1){
return (function (mf__$2){
return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.method_cache,((function (mf__$1){
return (function (mf__$2){
return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.prefer_table,((function (mf__$1){
return (function (mf__$2){
return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.cached_hierarchy,((function (mf__$1){
return (function (mf__$2){
return null;
});})(mf__$1))
);

return mf__$1;
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var self__ = this;
var mf__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.method_table,cljs.core.assoc,dispatch_val,method);

cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);

return mf__$1;
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var self__ = this;
var mf__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.method_table,cljs.core.dissoc,dispatch_val);

cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);

return mf__$1;
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var self__ = this;
var mf__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__21851 = self__.cached_hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21851) : cljs.core.deref.call(null,G__21851));
})(),(function (){var G__21852 = self__.hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21852) : cljs.core.deref.call(null,G__21852));
})())){
} else {
cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
}

var temp__4124__auto__ = (function (){var G__21853 = self__.method_cache;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21853) : cljs.core.deref.call(null,G__21853));
})().call(null,dispatch_val);
if(cljs.core.truth_(temp__4124__auto__)){
var target_fn = temp__4124__auto__;
return target_fn;
} else {
var temp__4124__auto____$1 = cljs.core.find_and_cache_best_method(self__.name,dispatch_val,self__.hierarchy,self__.method_table,self__.prefer_table,self__.method_cache,self__.cached_hierarchy);
if(cljs.core.truth_(temp__4124__auto____$1)){
var target_fn = temp__4124__auto____$1;
return target_fn;
} else {
return (function (){var G__21854 = self__.method_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21854) : cljs.core.deref.call(null,G__21854));
})().call(null,self__.default_dispatch_val);
}
}
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var self__ = this;
var mf__$1 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_(dispatch_val_x,dispatch_val_y,self__.prefer_table))){
throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(self__.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.prefer_table,((function (mf__$1){
return (function (old){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old,dispatch_val_x,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
});})(mf__$1))
);

return cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var self__ = this;
var mf__$1 = this;
var G__21855 = self__.method_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21855) : cljs.core.deref.call(null,G__21855));
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var self__ = this;
var mf__$1 = this;
var G__21856 = self__.prefer_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21856) : cljs.core.deref.call(null,G__21856));
});

cljs.core.MultiFn.prototype.call = (function() {
var G__22697 = null;
var G__22697__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$0 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$0() : self__.dispatch_fn.call(null));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$0 ? target_fn.cljs$core$IFn$_invoke$arity$0() : target_fn.call(null));
});
var G__22697__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__21857 = a;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(G__21857) : self__.dispatch_fn.call(null,G__21857));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21858 = a;
return (target_fn.cljs$core$IFn$_invoke$arity$1 ? target_fn.cljs$core$IFn$_invoke$arity$1(G__21858) : target_fn.call(null,G__21858));
});
var G__22697__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__21859 = a;
var G__21860 = b;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2(G__21859,G__21860) : self__.dispatch_fn.call(null,G__21859,G__21860));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21861 = a;
var G__21862 = b;
return (target_fn.cljs$core$IFn$_invoke$arity$2 ? target_fn.cljs$core$IFn$_invoke$arity$2(G__21861,G__21862) : target_fn.call(null,G__21861,G__21862));
});
var G__22697__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__21863 = a;
var G__21864 = b;
var G__21865 = c;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3(G__21863,G__21864,G__21865) : self__.dispatch_fn.call(null,G__21863,G__21864,G__21865));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21866 = a;
var G__21867 = b;
var G__21868 = c;
return (target_fn.cljs$core$IFn$_invoke$arity$3 ? target_fn.cljs$core$IFn$_invoke$arity$3(G__21866,G__21867,G__21868) : target_fn.call(null,G__21866,G__21867,G__21868));
});
var G__22697__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__21869 = a;
var G__21870 = b;
var G__21871 = c;
var G__21872 = d;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4(G__21869,G__21870,G__21871,G__21872) : self__.dispatch_fn.call(null,G__21869,G__21870,G__21871,G__21872));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21873 = a;
var G__21874 = b;
var G__21875 = c;
var G__21876 = d;
return (target_fn.cljs$core$IFn$_invoke$arity$4 ? target_fn.cljs$core$IFn$_invoke$arity$4(G__21873,G__21874,G__21875,G__21876) : target_fn.call(null,G__21873,G__21874,G__21875,G__21876));
});
var G__22697__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__21877 = a;
var G__21878 = b;
var G__21879 = c;
var G__21880 = d;
var G__21881 = e;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5(G__21877,G__21878,G__21879,G__21880,G__21881) : self__.dispatch_fn.call(null,G__21877,G__21878,G__21879,G__21880,G__21881));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21882 = a;
var G__21883 = b;
var G__21884 = c;
var G__21885 = d;
var G__21886 = e;
return (target_fn.cljs$core$IFn$_invoke$arity$5 ? target_fn.cljs$core$IFn$_invoke$arity$5(G__21882,G__21883,G__21884,G__21885,G__21886) : target_fn.call(null,G__21882,G__21883,G__21884,G__21885,G__21886));
});
var G__22697__7 = (function (self__,a,b,c,d,e,f){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__21887 = a;
var G__21888 = b;
var G__21889 = c;
var G__21890 = d;
var G__21891 = e;
var G__21892 = f;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6(G__21887,G__21888,G__21889,G__21890,G__21891,G__21892) : self__.dispatch_fn.call(null,G__21887,G__21888,G__21889,G__21890,G__21891,G__21892));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21893 = a;
var G__21894 = b;
var G__21895 = c;
var G__21896 = d;
var G__21897 = e;
var G__21898 = f;
return (target_fn.cljs$core$IFn$_invoke$arity$6 ? target_fn.cljs$core$IFn$_invoke$arity$6(G__21893,G__21894,G__21895,G__21896,G__21897,G__21898) : target_fn.call(null,G__21893,G__21894,G__21895,G__21896,G__21897,G__21898));
});
var G__22697__8 = (function (self__,a,b,c,d,e,f,g){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__21899 = a;
var G__21900 = b;
var G__21901 = c;
var G__21902 = d;
var G__21903 = e;
var G__21904 = f;
var G__21905 = g;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7(G__21899,G__21900,G__21901,G__21902,G__21903,G__21904,G__21905) : self__.dispatch_fn.call(null,G__21899,G__21900,G__21901,G__21902,G__21903,G__21904,G__21905));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21906 = a;
var G__21907 = b;
var G__21908 = c;
var G__21909 = d;
var G__21910 = e;
var G__21911 = f;
var G__21912 = g;
return (target_fn.cljs$core$IFn$_invoke$arity$7 ? target_fn.cljs$core$IFn$_invoke$arity$7(G__21906,G__21907,G__21908,G__21909,G__21910,G__21911,G__21912) : target_fn.call(null,G__21906,G__21907,G__21908,G__21909,G__21910,G__21911,G__21912));
});
var G__22697__9 = (function (self__,a,b,c,d,e,f,g,h){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__21913 = a;
var G__21914 = b;
var G__21915 = c;
var G__21916 = d;
var G__21917 = e;
var G__21918 = f;
var G__21919 = g;
var G__21920 = h;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8(G__21913,G__21914,G__21915,G__21916,G__21917,G__21918,G__21919,G__21920) : self__.dispatch_fn.call(null,G__21913,G__21914,G__21915,G__21916,G__21917,G__21918,G__21919,G__21920));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21921 = a;
var G__21922 = b;
var G__21923 = c;
var G__21924 = d;
var G__21925 = e;
var G__21926 = f;
var G__21927 = g;
var G__21928 = h;
return (target_fn.cljs$core$IFn$_invoke$arity$8 ? target_fn.cljs$core$IFn$_invoke$arity$8(G__21921,G__21922,G__21923,G__21924,G__21925,G__21926,G__21927,G__21928) : target_fn.call(null,G__21921,G__21922,G__21923,G__21924,G__21925,G__21926,G__21927,G__21928));
});
var G__22697__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__21929 = a;
var G__21930 = b;
var G__21931 = c;
var G__21932 = d;
var G__21933 = e;
var G__21934 = f;
var G__21935 = g;
var G__21936 = h;
var G__21937 = i;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9(G__21929,G__21930,G__21931,G__21932,G__21933,G__21934,G__21935,G__21936,G__21937) : self__.dispatch_fn.call(null,G__21929,G__21930,G__21931,G__21932,G__21933,G__21934,G__21935,G__21936,G__21937));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21938 = a;
var G__21939 = b;
var G__21940 = c;
var G__21941 = d;
var G__21942 = e;
var G__21943 = f;
var G__21944 = g;
var G__21945 = h;
var G__21946 = i;
return (target_fn.cljs$core$IFn$_invoke$arity$9 ? target_fn.cljs$core$IFn$_invoke$arity$9(G__21938,G__21939,G__21940,G__21941,G__21942,G__21943,G__21944,G__21945,G__21946) : target_fn.call(null,G__21938,G__21939,G__21940,G__21941,G__21942,G__21943,G__21944,G__21945,G__21946));
});
var G__22697__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__21947 = a;
var G__21948 = b;
var G__21949 = c;
var G__21950 = d;
var G__21951 = e;
var G__21952 = f;
var G__21953 = g;
var G__21954 = h;
var G__21955 = i;
var G__21956 = j;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10(G__21947,G__21948,G__21949,G__21950,G__21951,G__21952,G__21953,G__21954,G__21955,G__21956) : self__.dispatch_fn.call(null,G__21947,G__21948,G__21949,G__21950,G__21951,G__21952,G__21953,G__21954,G__21955,G__21956));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21957 = a;
var G__21958 = b;
var G__21959 = c;
var G__21960 = d;
var G__21961 = e;
var G__21962 = f;
var G__21963 = g;
var G__21964 = h;
var G__21965 = i;
var G__21966 = j;
return (target_fn.cljs$core$IFn$_invoke$arity$10 ? target_fn.cljs$core$IFn$_invoke$arity$10(G__21957,G__21958,G__21959,G__21960,G__21961,G__21962,G__21963,G__21964,G__21965,G__21966) : target_fn.call(null,G__21957,G__21958,G__21959,G__21960,G__21961,G__21962,G__21963,G__21964,G__21965,G__21966));
});
var G__22697__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__21967 = a;
var G__21968 = b;
var G__21969 = c;
var G__21970 = d;
var G__21971 = e;
var G__21972 = f;
var G__21973 = g;
var G__21974 = h;
var G__21975 = i;
var G__21976 = j;
var G__21977 = k;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11(G__21967,G__21968,G__21969,G__21970,G__21971,G__21972,G__21973,G__21974,G__21975,G__21976,G__21977) : self__.dispatch_fn.call(null,G__21967,G__21968,G__21969,G__21970,G__21971,G__21972,G__21973,G__21974,G__21975,G__21976,G__21977));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21978 = a;
var G__21979 = b;
var G__21980 = c;
var G__21981 = d;
var G__21982 = e;
var G__21983 = f;
var G__21984 = g;
var G__21985 = h;
var G__21986 = i;
var G__21987 = j;
var G__21988 = k;
return (target_fn.cljs$core$IFn$_invoke$arity$11 ? target_fn.cljs$core$IFn$_invoke$arity$11(G__21978,G__21979,G__21980,G__21981,G__21982,G__21983,G__21984,G__21985,G__21986,G__21987,G__21988) : target_fn.call(null,G__21978,G__21979,G__21980,G__21981,G__21982,G__21983,G__21984,G__21985,G__21986,G__21987,G__21988));
});
var G__22697__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__21989 = a;
var G__21990 = b;
var G__21991 = c;
var G__21992 = d;
var G__21993 = e;
var G__21994 = f;
var G__21995 = g;
var G__21996 = h;
var G__21997 = i;
var G__21998 = j;
var G__21999 = k;
var G__22000 = l;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12(G__21989,G__21990,G__21991,G__21992,G__21993,G__21994,G__21995,G__21996,G__21997,G__21998,G__21999,G__22000) : self__.dispatch_fn.call(null,G__21989,G__21990,G__21991,G__21992,G__21993,G__21994,G__21995,G__21996,G__21997,G__21998,G__21999,G__22000));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__22001 = a;
var G__22002 = b;
var G__22003 = c;
var G__22004 = d;
var G__22005 = e;
var G__22006 = f;
var G__22007 = g;
var G__22008 = h;
var G__22009 = i;
var G__22010 = j;
var G__22011 = k;
var G__22012 = l;
return (target_fn.cljs$core$IFn$_invoke$arity$12 ? target_fn.cljs$core$IFn$_invoke$arity$12(G__22001,G__22002,G__22003,G__22004,G__22005,G__22006,G__22007,G__22008,G__22009,G__22010,G__22011,G__22012) : target_fn.call(null,G__22001,G__22002,G__22003,G__22004,G__22005,G__22006,G__22007,G__22008,G__22009,G__22010,G__22011,G__22012));
});
var G__22697__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__22013 = a;
var G__22014 = b;
var G__22015 = c;
var G__22016 = d;
var G__22017 = e;
var G__22018 = f;
var G__22019 = g;
var G__22020 = h;
var G__22021 = i;
var G__22022 = j;
var G__22023 = k;
var G__22024 = l;
var G__22025 = m;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13(G__22013,G__22014,G__22015,G__22016,G__22017,G__22018,G__22019,G__22020,G__22021,G__22022,G__22023,G__22024,G__22025) : self__.dispatch_fn.call(null,G__22013,G__22014,G__22015,G__22016,G__22017,G__22018,G__22019,G__22020,G__22021,G__22022,G__22023,G__22024,G__22025));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__22026 = a;
var G__22027 = b;
var G__22028 = c;
var G__22029 = d;
var G__22030 = e;
var G__22031 = f;
var G__22032 = g;
var G__22033 = h;
var G__22034 = i;
var G__22035 = j;
var G__22036 = k;
var G__22037 = l;
var G__22038 = m;
return (target_fn.cljs$core$IFn$_invoke$arity$13 ? target_fn.cljs$core$IFn$_invoke$arity$13(G__22026,G__22027,G__22028,G__22029,G__22030,G__22031,G__22032,G__22033,G__22034,G__22035,G__22036,G__22037,G__22038) : target_fn.call(null,G__22026,G__22027,G__22028,G__22029,G__22030,G__22031,G__22032,G__22033,G__22034,G__22035,G__22036,G__22037,G__22038));
});
var G__22697__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__22039 = a;
var G__22040 = b;
var G__22041 = c;
var G__22042 = d;
var G__22043 = e;
var G__22044 = f;
var G__22045 = g;
var G__22046 = h;
var G__22047 = i;
var G__22048 = j;
var G__22049 = k;
var G__22050 = l;
var G__22051 = m;
var G__22052 = n;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14(G__22039,G__22040,G__22041,G__22042,G__22043,G__22044,G__22045,G__22046,G__22047,G__22048,G__22049,G__22050,G__22051,G__22052) : self__.dispatch_fn.call(null,G__22039,G__22040,G__22041,G__22042,G__22043,G__22044,G__22045,G__22046,G__22047,G__22048,G__22049,G__22050,G__22051,G__22052));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__22053 = a;
var G__22054 = b;
var G__22055 = c;
var G__22056 = d;
var G__22057 = e;
var G__22058 = f;
var G__22059 = g;
var G__22060 = h;
var G__22061 = i;
var G__22062 = j;
var G__22063 = k;
var G__22064 = l;
var G__22065 = m;
var G__22066 = n;
return (target_fn.cljs$core$IFn$_invoke$arity$14 ? target_fn.cljs$core$IFn$_invoke$arity$14(G__22053,G__22054,G__22055,G__22056,G__22057,G__22058,G__22059,G__22060,G__22061,G__22062,G__22063,G__22064,G__22065,G__22066) : target_fn.call(null,G__22053,G__22054,G__22055,G__22056,G__22057,G__22058,G__22059,G__22060,G__22061,G__22062,G__22063,G__22064,G__22065,G__22066));
});
var G__22697__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__22067 = a;
var G__22068 = b;
var G__22069 = c;
var G__22070 = d;
var G__22071 = e;
var G__22072 = f;
var G__22073 = g;
var G__22074 = h;
var G__22075 = i;
var G__22076 = j;
var G__22077 = k;
var G__22078 = l;
var G__22079 = m;
var G__22080 = n;
var G__22081 = o;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15(G__22067,G__22068,G__22069,G__22070,G__22071,G__22072,G__22073,G__22074,G__22075,G__22076,G__22077,G__22078,G__22079,G__22080,G__22081) : self__.dispatch_fn.call(null,G__22067,G__22068,G__22069,G__22070,G__22071,G__22072,G__22073,G__22074,G__22075,G__22076,G__22077,G__22078,G__22079,G__22080,G__22081));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__22082 = a;
var G__22083 = b;
var G__22084 = c;
var G__22085 = d;
var G__22086 = e;
var G__22087 = f;
var G__22088 = g;
var G__22089 = h;
var G__22090 = i;
var G__22091 = j;
var G__22092 = k;
var G__22093 = l;
var G__22094 = m;
var G__22095 = n;
var G__22096 = o;
return (target_fn.cljs$core$IFn$_invoke$arity$15 ? target_fn.cljs$core$IFn$_invoke$arity$15(G__22082,G__22083,G__22084,G__22085,G__22086,G__22087,G__22088,G__22089,G__22090,G__22091,G__22092,G__22093,G__22094,G__22095,G__22096) : target_fn.call(null,G__22082,G__22083,G__22084,G__22085,G__22086,G__22087,G__22088,G__22089,G__22090,G__22091,G__22092,G__22093,G__22094,G__22095,G__22096));
});
var G__22697__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__22097 = a;
var G__22098 = b;
var G__22099 = c;
var G__22100 = d;
var G__22101 = e;
var G__22102 = f;
var G__22103 = g;
var G__22104 = h;
var G__22105 = i;
var G__22106 = j;
var G__22107 = k;
var G__22108 = l;
var G__22109 = m;
var G__22110 = n;
var G__22111 = o;
var G__22112 = p;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16(G__22097,G__22098,G__22099,G__22100,G__22101,G__22102,G__22103,G__22104,G__22105,G__22106,G__22107,G__22108,G__22109,G__22110,G__22111,G__22112) : self__.dispatch_fn.call(null,G__22097,G__22098,G__22099,G__22100,G__22101,G__22102,G__22103,G__22104,G__22105,G__22106,G__22107,G__22108,G__22109,G__22110,G__22111,G__22112));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__22113 = a;
var G__22114 = b;
var G__22115 = c;
var G__22116 = d;
var G__22117 = e;
var G__22118 = f;
var G__22119 = g;
var G__22120 = h;
var G__22121 = i;
var G__22122 = j;
var G__22123 = k;
var G__22124 = l;
var G__22125 = m;
var G__22126 = n;
var G__22127 = o;
var G__22128 = p;
return (target_fn.cljs$core$IFn$_invoke$arity$16 ? target_fn.cljs$core$IFn$_invoke$arity$16(G__22113,G__22114,G__22115,G__22116,G__22117,G__22118,G__22119,G__22120,G__22121,G__22122,G__22123,G__22124,G__22125,G__22126,G__22127,G__22128) : target_fn.call(null,G__22113,G__22114,G__22115,G__22116,G__22117,G__22118,G__22119,G__22120,G__22121,G__22122,G__22123,G__22124,G__22125,G__22126,G__22127,G__22128));
});
var G__22697__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__22129 = a;
var G__22130 = b;
var G__22131 = c;
var G__22132 = d;
var G__22133 = e;
var G__22134 = f;
var G__22135 = g;
var G__22136 = h;
var G__22137 = i;
var G__22138 = j;
var G__22139 = k;
var G__22140 = l;
var G__22141 = m;
var G__22142 = n;
var G__22143 = o;
var G__22144 = p;
var G__22145 = q;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17(G__22129,G__22130,G__22131,G__22132,G__22133,G__22134,G__22135,G__22136,G__22137,G__22138,G__22139,G__22140,G__22141,G__22142,G__22143,G__22144,G__22145) : self__.dispatch_fn.call(null,G__22129,G__22130,G__22131,G__22132,G__22133,G__22134,G__22135,G__22136,G__22137,G__22138,G__22139,G__22140,G__22141,G__22142,G__22143,G__22144,G__22145));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__22146 = a;
var G__22147 = b;
var G__22148 = c;
var G__22149 = d;
var G__22150 = e;
var G__22151 = f;
var G__22152 = g;
var G__22153 = h;
var G__22154 = i;
var G__22155 = j;
var G__22156 = k;
var G__22157 = l;
var G__22158 = m;
var G__22159 = n;
var G__22160 = o;
var G__22161 = p;
var G__22162 = q;
return (target_fn.cljs$core$IFn$_invoke$arity$17 ? target_fn.cljs$core$IFn$_invoke$arity$17(G__22146,G__22147,G__22148,G__22149,G__22150,G__22151,G__22152,G__22153,G__22154,G__22155,G__22156,G__22157,G__22158,G__22159,G__22160,G__22161,G__22162) : target_fn.call(null,G__22146,G__22147,G__22148,G__22149,G__22150,G__22151,G__22152,G__22153,G__22154,G__22155,G__22156,G__22157,G__22158,G__22159,G__22160,G__22161,G__22162));
});
var G__22697__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__22163 = a;
var G__22164 = b;
var G__22165 = c;
var G__22166 = d;
var G__22167 = e;
var G__22168 = f;
var G__22169 = g;
var G__22170 = h;
var G__22171 = i;
var G__22172 = j;
var G__22173 = k;
var G__22174 = l;
var G__22175 = m;
var G__22176 = n;
var G__22177 = o;
var G__22178 = p;
var G__22179 = q;
var G__22180 = r;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18(G__22163,G__22164,G__22165,G__22166,G__22167,G__22168,G__22169,G__22170,G__22171,G__22172,G__22173,G__22174,G__22175,G__22176,G__22177,G__22178,G__22179,G__22180) : self__.dispatch_fn.call(null,G__22163,G__22164,G__22165,G__22166,G__22167,G__22168,G__22169,G__22170,G__22171,G__22172,G__22173,G__22174,G__22175,G__22176,G__22177,G__22178,G__22179,G__22180));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__22181 = a;
var G__22182 = b;
var G__22183 = c;
var G__22184 = d;
var G__22185 = e;
var G__22186 = f;
var G__22187 = g;
var G__22188 = h;
var G__22189 = i;
var G__22190 = j;
var G__22191 = k;
var G__22192 = l;
var G__22193 = m;
var G__22194 = n;
var G__22195 = o;
var G__22196 = p;
var G__22197 = q;
var G__22198 = r;
return (target_fn.cljs$core$IFn$_invoke$arity$18 ? target_fn.cljs$core$IFn$_invoke$arity$18(G__22181,G__22182,G__22183,G__22184,G__22185,G__22186,G__22187,G__22188,G__22189,G__22190,G__22191,G__22192,G__22193,G__22194,G__22195,G__22196,G__22197,G__22198) : target_fn.call(null,G__22181,G__22182,G__22183,G__22184,G__22185,G__22186,G__22187,G__22188,G__22189,G__22190,G__22191,G__22192,G__22193,G__22194,G__22195,G__22196,G__22197,G__22198));
});
var G__22697__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__22199 = a;
var G__22200 = b;
var G__22201 = c;
var G__22202 = d;
var G__22203 = e;
var G__22204 = f;
var G__22205 = g;
var G__22206 = h;
var G__22207 = i;
var G__22208 = j;
var G__22209 = k;
var G__22210 = l;
var G__22211 = m;
var G__22212 = n;
var G__22213 = o;
var G__22214 = p;
var G__22215 = q;
var G__22216 = r;
var G__22217 = s;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19(G__22199,G__22200,G__22201,G__22202,G__22203,G__22204,G__22205,G__22206,G__22207,G__22208,G__22209,G__22210,G__22211,G__22212,G__22213,G__22214,G__22215,G__22216,G__22217) : self__.dispatch_fn.call(null,G__22199,G__22200,G__22201,G__22202,G__22203,G__22204,G__22205,G__22206,G__22207,G__22208,G__22209,G__22210,G__22211,G__22212,G__22213,G__22214,G__22215,G__22216,G__22217));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__22218 = a;
var G__22219 = b;
var G__22220 = c;
var G__22221 = d;
var G__22222 = e;
var G__22223 = f;
var G__22224 = g;
var G__22225 = h;
var G__22226 = i;
var G__22227 = j;
var G__22228 = k;
var G__22229 = l;
var G__22230 = m;
var G__22231 = n;
var G__22232 = o;
var G__22233 = p;
var G__22234 = q;
var G__22235 = r;
var G__22236 = s;
return (target_fn.cljs$core$IFn$_invoke$arity$19 ? target_fn.cljs$core$IFn$_invoke$arity$19(G__22218,G__22219,G__22220,G__22221,G__22222,G__22223,G__22224,G__22225,G__22226,G__22227,G__22228,G__22229,G__22230,G__22231,G__22232,G__22233,G__22234,G__22235,G__22236) : target_fn.call(null,G__22218,G__22219,G__22220,G__22221,G__22222,G__22223,G__22224,G__22225,G__22226,G__22227,G__22228,G__22229,G__22230,G__22231,G__22232,G__22233,G__22234,G__22235,G__22236));
});
var G__22697__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__22237 = a;
var G__22238 = b;
var G__22239 = c;
var G__22240 = d;
var G__22241 = e;
var G__22242 = f;
var G__22243 = g;
var G__22244 = h;
var G__22245 = i;
var G__22246 = j;
var G__22247 = k;
var G__22248 = l;
var G__22249 = m;
var G__22250 = n;
var G__22251 = o;
var G__22252 = p;
var G__22253 = q;
var G__22254 = r;
var G__22255 = s;
var G__22256 = t;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20(G__22237,G__22238,G__22239,G__22240,G__22241,G__22242,G__22243,G__22244,G__22245,G__22246,G__22247,G__22248,G__22249,G__22250,G__22251,G__22252,G__22253,G__22254,G__22255,G__22256) : self__.dispatch_fn.call(null,G__22237,G__22238,G__22239,G__22240,G__22241,G__22242,G__22243,G__22244,G__22245,G__22246,G__22247,G__22248,G__22249,G__22250,G__22251,G__22252,G__22253,G__22254,G__22255,G__22256));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__22257 = a;
var G__22258 = b;
var G__22259 = c;
var G__22260 = d;
var G__22261 = e;
var G__22262 = f;
var G__22263 = g;
var G__22264 = h;
var G__22265 = i;
var G__22266 = j;
var G__22267 = k;
var G__22268 = l;
var G__22269 = m;
var G__22270 = n;
var G__22271 = o;
var G__22272 = p;
var G__22273 = q;
var G__22274 = r;
var G__22275 = s;
var G__22276 = t;
return (target_fn.cljs$core$IFn$_invoke$arity$20 ? target_fn.cljs$core$IFn$_invoke$arity$20(G__22257,G__22258,G__22259,G__22260,G__22261,G__22262,G__22263,G__22264,G__22265,G__22266,G__22267,G__22268,G__22269,G__22270,G__22271,G__22272,G__22273,G__22274,G__22275,G__22276) : target_fn.call(null,G__22257,G__22258,G__22259,G__22260,G__22261,G__22262,G__22263,G__22264,G__22265,G__22266,G__22267,G__22268,G__22269,G__22270,G__22271,G__22272,G__22273,G__22274,G__22275,G__22276));
});
var G__22697__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(self__.dispatch_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(target_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__22697 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__22697__1.call(this,self__);
case 2:
return G__22697__2.call(this,self__,a);
case 3:
return G__22697__3.call(this,self__,a,b);
case 4:
return G__22697__4.call(this,self__,a,b,c);
case 5:
return G__22697__5.call(this,self__,a,b,c,d);
case 6:
return G__22697__6.call(this,self__,a,b,c,d,e);
case 7:
return G__22697__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__22697__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__22697__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__22697__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__22697__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__22697__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__22697__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__22697__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__22697__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__22697__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__22697__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__22697__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__22697__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__22697__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__22697__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__22697__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22697.cljs$core$IFn$_invoke$arity$1 = G__22697__1;
G__22697.cljs$core$IFn$_invoke$arity$2 = G__22697__2;
G__22697.cljs$core$IFn$_invoke$arity$3 = G__22697__3;
G__22697.cljs$core$IFn$_invoke$arity$4 = G__22697__4;
G__22697.cljs$core$IFn$_invoke$arity$5 = G__22697__5;
G__22697.cljs$core$IFn$_invoke$arity$6 = G__22697__6;
G__22697.cljs$core$IFn$_invoke$arity$7 = G__22697__7;
G__22697.cljs$core$IFn$_invoke$arity$8 = G__22697__8;
G__22697.cljs$core$IFn$_invoke$arity$9 = G__22697__9;
G__22697.cljs$core$IFn$_invoke$arity$10 = G__22697__10;
G__22697.cljs$core$IFn$_invoke$arity$11 = G__22697__11;
G__22697.cljs$core$IFn$_invoke$arity$12 = G__22697__12;
G__22697.cljs$core$IFn$_invoke$arity$13 = G__22697__13;
G__22697.cljs$core$IFn$_invoke$arity$14 = G__22697__14;
G__22697.cljs$core$IFn$_invoke$arity$15 = G__22697__15;
G__22697.cljs$core$IFn$_invoke$arity$16 = G__22697__16;
G__22697.cljs$core$IFn$_invoke$arity$17 = G__22697__17;
G__22697.cljs$core$IFn$_invoke$arity$18 = G__22697__18;
G__22697.cljs$core$IFn$_invoke$arity$19 = G__22697__19;
G__22697.cljs$core$IFn$_invoke$arity$20 = G__22697__20;
G__22697.cljs$core$IFn$_invoke$arity$21 = G__22697__21;
G__22697.cljs$core$IFn$_invoke$arity$22 = G__22697__22;
return G__22697;
})()
;

cljs.core.MultiFn.prototype.apply = (function (self__,args21849){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args21849)));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var mf = this;
var dispatch_val = (function (){return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$0 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$0() : self__.dispatch_fn.call(null));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$0 ? target_fn.cljs$core$IFn$_invoke$arity$0() : target_fn.call(null));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__22277 = a;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(G__22277) : self__.dispatch_fn.call(null,G__22277));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__22278 = a;
return (target_fn.cljs$core$IFn$_invoke$arity$1 ? target_fn.cljs$core$IFn$_invoke$arity$1(G__22278) : target_fn.call(null,G__22278));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__22279 = a;
var G__22280 = b;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2(G__22279,G__22280) : self__.dispatch_fn.call(null,G__22279,G__22280));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__22281 = a;
var G__22282 = b;
return (target_fn.cljs$core$IFn$_invoke$arity$2 ? target_fn.cljs$core$IFn$_invoke$arity$2(G__22281,G__22282) : target_fn.call(null,G__22281,G__22282));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__22283 = a;
var G__22284 = b;
var G__22285 = c;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3(G__22283,G__22284,G__22285) : self__.dispatch_fn.call(null,G__22283,G__22284,G__22285));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__22286 = a;
var G__22287 = b;
var G__22288 = c;
return (target_fn.cljs$core$IFn$_invoke$arity$3 ? target_fn.cljs$core$IFn$_invoke$arity$3(G__22286,G__22287,G__22288) : target_fn.call(null,G__22286,G__22287,G__22288));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__22289 = a;
var G__22290 = b;
var G__22291 = c;
var G__22292 = d;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4(G__22289,G__22290,G__22291,G__22292) : self__.dispatch_fn.call(null,G__22289,G__22290,G__22291,G__22292));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__22293 = a;
var G__22294 = b;
var G__22295 = c;
var G__22296 = d;
return (target_fn.cljs$core$IFn$_invoke$arity$4 ? target_fn.cljs$core$IFn$_invoke$arity$4(G__22293,G__22294,G__22295,G__22296) : target_fn.call(null,G__22293,G__22294,G__22295,G__22296));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__22297 = a;
var G__22298 = b;
var G__22299 = c;
var G__22300 = d;
var G__22301 = e;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5(G__22297,G__22298,G__22299,G__22300,G__22301) : self__.dispatch_fn.call(null,G__22297,G__22298,G__22299,G__22300,G__22301));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__22302 = a;
var G__22303 = b;
var G__22304 = c;
var G__22305 = d;
var G__22306 = e;
return (target_fn.cljs$core$IFn$_invoke$arity$5 ? target_fn.cljs$core$IFn$_invoke$arity$5(G__22302,G__22303,G__22304,G__22305,G__22306) : target_fn.call(null,G__22302,G__22303,G__22304,G__22305,G__22306));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__22307 = a;
var G__22308 = b;
var G__22309 = c;
var G__22310 = d;
var G__22311 = e;
var G__22312 = f;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6(G__22307,G__22308,G__22309,G__22310,G__22311,G__22312) : self__.dispatch_fn.call(null,G__22307,G__22308,G__22309,G__22310,G__22311,G__22312));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__22313 = a;
var G__22314 = b;
var G__22315 = c;
var G__22316 = d;
var G__22317 = e;
var G__22318 = f;
return (target_fn.cljs$core$IFn$_invoke$arity$6 ? target_fn.cljs$core$IFn$_invoke$arity$6(G__22313,G__22314,G__22315,G__22316,G__22317,G__22318) : target_fn.call(null,G__22313,G__22314,G__22315,G__22316,G__22317,G__22318));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__22319 = a;
var G__22320 = b;
var G__22321 = c;
var G__22322 = d;
var G__22323 = e;
var G__22324 = f;
var G__22325 = g;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7(G__22319,G__22320,G__22321,G__22322,G__22323,G__22324,G__22325) : self__.dispatch_fn.call(null,G__22319,G__22320,G__22321,G__22322,G__22323,G__22324,G__22325));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__22326 = a;
var G__22327 = b;
var G__22328 = c;
var G__22329 = d;
var G__22330 = e;
var G__22331 = f;
var G__22332 = g;
return (target_fn.cljs$core$IFn$_invoke$arity$7 ? target_fn.cljs$core$IFn$_invoke$arity$7(G__22326,G__22327,G__22328,G__22329,G__22330,G__22331,G__22332) : target_fn.call(null,G__22326,G__22327,G__22328,G__22329,G__22330,G__22331,G__22332));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__22333 = a;
var G__22334 = b;
var G__22335 = c;
var G__22336 = d;
var G__22337 = e;
var G__22338 = f;
var G__22339 = g;
var G__22340 = h;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8(G__22333,G__22334,G__22335,G__22336,G__22337,G__22338,G__22339,G__22340) : self__.dispatch_fn.call(null,G__22333,G__22334,G__22335,G__22336,G__22337,G__22338,G__22339,G__22340));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__22341 = a;
var G__22342 = b;
var G__22343 = c;
var G__22344 = d;
var G__22345 = e;
var G__22346 = f;
var G__22347 = g;
var G__22348 = h;
return (target_fn.cljs$core$IFn$_invoke$arity$8 ? target_fn.cljs$core$IFn$_invoke$arity$8(G__22341,G__22342,G__22343,G__22344,G__22345,G__22346,G__22347,G__22348) : target_fn.call(null,G__22341,G__22342,G__22343,G__22344,G__22345,G__22346,G__22347,G__22348));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__22349 = a;
var G__22350 = b;
var G__22351 = c;
var G__22352 = d;
var G__22353 = e;
var G__22354 = f;
var G__22355 = g;
var G__22356 = h;
var G__22357 = i;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9(G__22349,G__22350,G__22351,G__22352,G__22353,G__22354,G__22355,G__22356,G__22357) : self__.dispatch_fn.call(null,G__22349,G__22350,G__22351,G__22352,G__22353,G__22354,G__22355,G__22356,G__22357));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__22358 = a;
var G__22359 = b;
var G__22360 = c;
var G__22361 = d;
var G__22362 = e;
var G__22363 = f;
var G__22364 = g;
var G__22365 = h;
var G__22366 = i;
return (target_fn.cljs$core$IFn$_invoke$arity$9 ? target_fn.cljs$core$IFn$_invoke$arity$9(G__22358,G__22359,G__22360,G__22361,G__22362,G__22363,G__22364,G__22365,G__22366) : target_fn.call(null,G__22358,G__22359,G__22360,G__22361,G__22362,G__22363,G__22364,G__22365,G__22366));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__22367 = a;
var G__22368 = b;
var G__22369 = c;
var G__22370 = d;
var G__22371 = e;
var G__22372 = f;
var G__22373 = g;
var G__22374 = h;
var G__22375 = i;
var G__22376 = j;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10(G__22367,G__22368,G__22369,G__22370,G__22371,G__22372,G__22373,G__22374,G__22375,G__22376) : self__.dispatch_fn.call(null,G__22367,G__22368,G__22369,G__22370,G__22371,G__22372,G__22373,G__22374,G__22375,G__22376));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__22377 = a;
var G__22378 = b;
var G__22379 = c;
var G__22380 = d;
var G__22381 = e;
var G__22382 = f;
var G__22383 = g;
var G__22384 = h;
var G__22385 = i;
var G__22386 = j;
return (target_fn.cljs$core$IFn$_invoke$arity$10 ? target_fn.cljs$core$IFn$_invoke$arity$10(G__22377,G__22378,G__22379,G__22380,G__22381,G__22382,G__22383,G__22384,G__22385,G__22386) : target_fn.call(null,G__22377,G__22378,G__22379,G__22380,G__22381,G__22382,G__22383,G__22384,G__22385,G__22386));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__22387 = a;
var G__22388 = b;
var G__22389 = c;
var G__22390 = d;
var G__22391 = e;
var G__22392 = f;
var G__22393 = g;
var G__22394 = h;
var G__22395 = i;
var G__22396 = j;
var G__22397 = k;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11(G__22387,G__22388,G__22389,G__22390,G__22391,G__22392,G__22393,G__22394,G__22395,G__22396,G__22397) : self__.dispatch_fn.call(null,G__22387,G__22388,G__22389,G__22390,G__22391,G__22392,G__22393,G__22394,G__22395,G__22396,G__22397));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__22398 = a;
var G__22399 = b;
var G__22400 = c;
var G__22401 = d;
var G__22402 = e;
var G__22403 = f;
var G__22404 = g;
var G__22405 = h;
var G__22406 = i;
var G__22407 = j;
var G__22408 = k;
return (target_fn.cljs$core$IFn$_invoke$arity$11 ? target_fn.cljs$core$IFn$_invoke$arity$11(G__22398,G__22399,G__22400,G__22401,G__22402,G__22403,G__22404,G__22405,G__22406,G__22407,G__22408) : target_fn.call(null,G__22398,G__22399,G__22400,G__22401,G__22402,G__22403,G__22404,G__22405,G__22406,G__22407,G__22408));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__22409 = a;
var G__22410 = b;
var G__22411 = c;
var G__22412 = d;
var G__22413 = e;
var G__22414 = f;
var G__22415 = g;
var G__22416 = h;
var G__22417 = i;
var G__22418 = j;
var G__22419 = k;
var G__22420 = l;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12(G__22409,G__22410,G__22411,G__22412,G__22413,G__22414,G__22415,G__22416,G__22417,G__22418,G__22419,G__22420) : self__.dispatch_fn.call(null,G__22409,G__22410,G__22411,G__22412,G__22413,G__22414,G__22415,G__22416,G__22417,G__22418,G__22419,G__22420));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__22421 = a;
var G__22422 = b;
var G__22423 = c;
var G__22424 = d;
var G__22425 = e;
var G__22426 = f;
var G__22427 = g;
var G__22428 = h;
var G__22429 = i;
var G__22430 = j;
var G__22431 = k;
var G__22432 = l;
return (target_fn.cljs$core$IFn$_invoke$arity$12 ? target_fn.cljs$core$IFn$_invoke$arity$12(G__22421,G__22422,G__22423,G__22424,G__22425,G__22426,G__22427,G__22428,G__22429,G__22430,G__22431,G__22432) : target_fn.call(null,G__22421,G__22422,G__22423,G__22424,G__22425,G__22426,G__22427,G__22428,G__22429,G__22430,G__22431,G__22432));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__22433 = a;
var G__22434 = b;
var G__22435 = c;
var G__22436 = d;
var G__22437 = e;
var G__22438 = f;
var G__22439 = g;
var G__22440 = h;
var G__22441 = i;
var G__22442 = j;
var G__22443 = k;
var G__22444 = l;
var G__22445 = m;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13(G__22433,G__22434,G__22435,G__22436,G__22437,G__22438,G__22439,G__22440,G__22441,G__22442,G__22443,G__22444,G__22445) : self__.dispatch_fn.call(null,G__22433,G__22434,G__22435,G__22436,G__22437,G__22438,G__22439,G__22440,G__22441,G__22442,G__22443,G__22444,G__22445));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__22446 = a;
var G__22447 = b;
var G__22448 = c;
var G__22449 = d;
var G__22450 = e;
var G__22451 = f;
var G__22452 = g;
var G__22453 = h;
var G__22454 = i;
var G__22455 = j;
var G__22456 = k;
var G__22457 = l;
var G__22458 = m;
return (target_fn.cljs$core$IFn$_invoke$arity$13 ? target_fn.cljs$core$IFn$_invoke$arity$13(G__22446,G__22447,G__22448,G__22449,G__22450,G__22451,G__22452,G__22453,G__22454,G__22455,G__22456,G__22457,G__22458) : target_fn.call(null,G__22446,G__22447,G__22448,G__22449,G__22450,G__22451,G__22452,G__22453,G__22454,G__22455,G__22456,G__22457,G__22458));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__22459 = a;
var G__22460 = b;
var G__22461 = c;
var G__22462 = d;
var G__22463 = e;
var G__22464 = f;
var G__22465 = g;
var G__22466 = h;
var G__22467 = i;
var G__22468 = j;
var G__22469 = k;
var G__22470 = l;
var G__22471 = m;
var G__22472 = n;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14(G__22459,G__22460,G__22461,G__22462,G__22463,G__22464,G__22465,G__22466,G__22467,G__22468,G__22469,G__22470,G__22471,G__22472) : self__.dispatch_fn.call(null,G__22459,G__22460,G__22461,G__22462,G__22463,G__22464,G__22465,G__22466,G__22467,G__22468,G__22469,G__22470,G__22471,G__22472));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__22473 = a;
var G__22474 = b;
var G__22475 = c;
var G__22476 = d;
var G__22477 = e;
var G__22478 = f;
var G__22479 = g;
var G__22480 = h;
var G__22481 = i;
var G__22482 = j;
var G__22483 = k;
var G__22484 = l;
var G__22485 = m;
var G__22486 = n;
return (target_fn.cljs$core$IFn$_invoke$arity$14 ? target_fn.cljs$core$IFn$_invoke$arity$14(G__22473,G__22474,G__22475,G__22476,G__22477,G__22478,G__22479,G__22480,G__22481,G__22482,G__22483,G__22484,G__22485,G__22486) : target_fn.call(null,G__22473,G__22474,G__22475,G__22476,G__22477,G__22478,G__22479,G__22480,G__22481,G__22482,G__22483,G__22484,G__22485,G__22486));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__22487 = a;
var G__22488 = b;
var G__22489 = c;
var G__22490 = d;
var G__22491 = e;
var G__22492 = f;
var G__22493 = g;
var G__22494 = h;
var G__22495 = i;
var G__22496 = j;
var G__22497 = k;
var G__22498 = l;
var G__22499 = m;
var G__22500 = n;
var G__22501 = o;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15(G__22487,G__22488,G__22489,G__22490,G__22491,G__22492,G__22493,G__22494,G__22495,G__22496,G__22497,G__22498,G__22499,G__22500,G__22501) : self__.dispatch_fn.call(null,G__22487,G__22488,G__22489,G__22490,G__22491,G__22492,G__22493,G__22494,G__22495,G__22496,G__22497,G__22498,G__22499,G__22500,G__22501));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__22502 = a;
var G__22503 = b;
var G__22504 = c;
var G__22505 = d;
var G__22506 = e;
var G__22507 = f;
var G__22508 = g;
var G__22509 = h;
var G__22510 = i;
var G__22511 = j;
var G__22512 = k;
var G__22513 = l;
var G__22514 = m;
var G__22515 = n;
var G__22516 = o;
return (target_fn.cljs$core$IFn$_invoke$arity$15 ? target_fn.cljs$core$IFn$_invoke$arity$15(G__22502,G__22503,G__22504,G__22505,G__22506,G__22507,G__22508,G__22509,G__22510,G__22511,G__22512,G__22513,G__22514,G__22515,G__22516) : target_fn.call(null,G__22502,G__22503,G__22504,G__22505,G__22506,G__22507,G__22508,G__22509,G__22510,G__22511,G__22512,G__22513,G__22514,G__22515,G__22516));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__22517 = a;
var G__22518 = b;
var G__22519 = c;
var G__22520 = d;
var G__22521 = e;
var G__22522 = f;
var G__22523 = g;
var G__22524 = h;
var G__22525 = i;
var G__22526 = j;
var G__22527 = k;
var G__22528 = l;
var G__22529 = m;
var G__22530 = n;
var G__22531 = o;
var G__22532 = p;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16(G__22517,G__22518,G__22519,G__22520,G__22521,G__22522,G__22523,G__22524,G__22525,G__22526,G__22527,G__22528,G__22529,G__22530,G__22531,G__22532) : self__.dispatch_fn.call(null,G__22517,G__22518,G__22519,G__22520,G__22521,G__22522,G__22523,G__22524,G__22525,G__22526,G__22527,G__22528,G__22529,G__22530,G__22531,G__22532));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__22533 = a;
var G__22534 = b;
var G__22535 = c;
var G__22536 = d;
var G__22537 = e;
var G__22538 = f;
var G__22539 = g;
var G__22540 = h;
var G__22541 = i;
var G__22542 = j;
var G__22543 = k;
var G__22544 = l;
var G__22545 = m;
var G__22546 = n;
var G__22547 = o;
var G__22548 = p;
return (target_fn.cljs$core$IFn$_invoke$arity$16 ? target_fn.cljs$core$IFn$_invoke$arity$16(G__22533,G__22534,G__22535,G__22536,G__22537,G__22538,G__22539,G__22540,G__22541,G__22542,G__22543,G__22544,G__22545,G__22546,G__22547,G__22548) : target_fn.call(null,G__22533,G__22534,G__22535,G__22536,G__22537,G__22538,G__22539,G__22540,G__22541,G__22542,G__22543,G__22544,G__22545,G__22546,G__22547,G__22548));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__22549 = a;
var G__22550 = b;
var G__22551 = c;
var G__22552 = d;
var G__22553 = e;
var G__22554 = f;
var G__22555 = g;
var G__22556 = h;
var G__22557 = i;
var G__22558 = j;
var G__22559 = k;
var G__22560 = l;
var G__22561 = m;
var G__22562 = n;
var G__22563 = o;
var G__22564 = p;
var G__22565 = q;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17(G__22549,G__22550,G__22551,G__22552,G__22553,G__22554,G__22555,G__22556,G__22557,G__22558,G__22559,G__22560,G__22561,G__22562,G__22563,G__22564,G__22565) : self__.dispatch_fn.call(null,G__22549,G__22550,G__22551,G__22552,G__22553,G__22554,G__22555,G__22556,G__22557,G__22558,G__22559,G__22560,G__22561,G__22562,G__22563,G__22564,G__22565));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__22566 = a;
var G__22567 = b;
var G__22568 = c;
var G__22569 = d;
var G__22570 = e;
var G__22571 = f;
var G__22572 = g;
var G__22573 = h;
var G__22574 = i;
var G__22575 = j;
var G__22576 = k;
var G__22577 = l;
var G__22578 = m;
var G__22579 = n;
var G__22580 = o;
var G__22581 = p;
var G__22582 = q;
return (target_fn.cljs$core$IFn$_invoke$arity$17 ? target_fn.cljs$core$IFn$_invoke$arity$17(G__22566,G__22567,G__22568,G__22569,G__22570,G__22571,G__22572,G__22573,G__22574,G__22575,G__22576,G__22577,G__22578,G__22579,G__22580,G__22581,G__22582) : target_fn.call(null,G__22566,G__22567,G__22568,G__22569,G__22570,G__22571,G__22572,G__22573,G__22574,G__22575,G__22576,G__22577,G__22578,G__22579,G__22580,G__22581,G__22582));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__22583 = a;
var G__22584 = b;
var G__22585 = c;
var G__22586 = d;
var G__22587 = e;
var G__22588 = f;
var G__22589 = g;
var G__22590 = h;
var G__22591 = i;
var G__22592 = j;
var G__22593 = k;
var G__22594 = l;
var G__22595 = m;
var G__22596 = n;
var G__22597 = o;
var G__22598 = p;
var G__22599 = q;
var G__22600 = r;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18(G__22583,G__22584,G__22585,G__22586,G__22587,G__22588,G__22589,G__22590,G__22591,G__22592,G__22593,G__22594,G__22595,G__22596,G__22597,G__22598,G__22599,G__22600) : self__.dispatch_fn.call(null,G__22583,G__22584,G__22585,G__22586,G__22587,G__22588,G__22589,G__22590,G__22591,G__22592,G__22593,G__22594,G__22595,G__22596,G__22597,G__22598,G__22599,G__22600));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__22601 = a;
var G__22602 = b;
var G__22603 = c;
var G__22604 = d;
var G__22605 = e;
var G__22606 = f;
var G__22607 = g;
var G__22608 = h;
var G__22609 = i;
var G__22610 = j;
var G__22611 = k;
var G__22612 = l;
var G__22613 = m;
var G__22614 = n;
var G__22615 = o;
var G__22616 = p;
var G__22617 = q;
var G__22618 = r;
return (target_fn.cljs$core$IFn$_invoke$arity$18 ? target_fn.cljs$core$IFn$_invoke$arity$18(G__22601,G__22602,G__22603,G__22604,G__22605,G__22606,G__22607,G__22608,G__22609,G__22610,G__22611,G__22612,G__22613,G__22614,G__22615,G__22616,G__22617,G__22618) : target_fn.call(null,G__22601,G__22602,G__22603,G__22604,G__22605,G__22606,G__22607,G__22608,G__22609,G__22610,G__22611,G__22612,G__22613,G__22614,G__22615,G__22616,G__22617,G__22618));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__22619 = a;
var G__22620 = b;
var G__22621 = c;
var G__22622 = d;
var G__22623 = e;
var G__22624 = f;
var G__22625 = g;
var G__22626 = h;
var G__22627 = i;
var G__22628 = j;
var G__22629 = k;
var G__22630 = l;
var G__22631 = m;
var G__22632 = n;
var G__22633 = o;
var G__22634 = p;
var G__22635 = q;
var G__22636 = r;
var G__22637 = s;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19(G__22619,G__22620,G__22621,G__22622,G__22623,G__22624,G__22625,G__22626,G__22627,G__22628,G__22629,G__22630,G__22631,G__22632,G__22633,G__22634,G__22635,G__22636,G__22637) : self__.dispatch_fn.call(null,G__22619,G__22620,G__22621,G__22622,G__22623,G__22624,G__22625,G__22626,G__22627,G__22628,G__22629,G__22630,G__22631,G__22632,G__22633,G__22634,G__22635,G__22636,G__22637));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__22638 = a;
var G__22639 = b;
var G__22640 = c;
var G__22641 = d;
var G__22642 = e;
var G__22643 = f;
var G__22644 = g;
var G__22645 = h;
var G__22646 = i;
var G__22647 = j;
var G__22648 = k;
var G__22649 = l;
var G__22650 = m;
var G__22651 = n;
var G__22652 = o;
var G__22653 = p;
var G__22654 = q;
var G__22655 = r;
var G__22656 = s;
return (target_fn.cljs$core$IFn$_invoke$arity$19 ? target_fn.cljs$core$IFn$_invoke$arity$19(G__22638,G__22639,G__22640,G__22641,G__22642,G__22643,G__22644,G__22645,G__22646,G__22647,G__22648,G__22649,G__22650,G__22651,G__22652,G__22653,G__22654,G__22655,G__22656) : target_fn.call(null,G__22638,G__22639,G__22640,G__22641,G__22642,G__22643,G__22644,G__22645,G__22646,G__22647,G__22648,G__22649,G__22650,G__22651,G__22652,G__22653,G__22654,G__22655,G__22656));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__22657 = a;
var G__22658 = b;
var G__22659 = c;
var G__22660 = d;
var G__22661 = e;
var G__22662 = f;
var G__22663 = g;
var G__22664 = h;
var G__22665 = i;
var G__22666 = j;
var G__22667 = k;
var G__22668 = l;
var G__22669 = m;
var G__22670 = n;
var G__22671 = o;
var G__22672 = p;
var G__22673 = q;
var G__22674 = r;
var G__22675 = s;
var G__22676 = t;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20(G__22657,G__22658,G__22659,G__22660,G__22661,G__22662,G__22663,G__22664,G__22665,G__22666,G__22667,G__22668,G__22669,G__22670,G__22671,G__22672,G__22673,G__22674,G__22675,G__22676) : self__.dispatch_fn.call(null,G__22657,G__22658,G__22659,G__22660,G__22661,G__22662,G__22663,G__22664,G__22665,G__22666,G__22667,G__22668,G__22669,G__22670,G__22671,G__22672,G__22673,G__22674,G__22675,G__22676));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__22677 = a;
var G__22678 = b;
var G__22679 = c;
var G__22680 = d;
var G__22681 = e;
var G__22682 = f;
var G__22683 = g;
var G__22684 = h;
var G__22685 = i;
var G__22686 = j;
var G__22687 = k;
var G__22688 = l;
var G__22689 = m;
var G__22690 = n;
var G__22691 = o;
var G__22692 = p;
var G__22693 = q;
var G__22694 = r;
var G__22695 = s;
var G__22696 = t;
return (target_fn.cljs$core$IFn$_invoke$arity$20 ? target_fn.cljs$core$IFn$_invoke$arity$20(G__22677,G__22678,G__22679,G__22680,G__22681,G__22682,G__22683,G__22684,G__22685,G__22686,G__22687,G__22688,G__22689,G__22690,G__22691,G__22692,G__22693,G__22694,G__22695,G__22696) : target_fn.call(null,G__22677,G__22678,G__22679,G__22680,G__22681,G__22682,G__22683,G__22684,G__22685,G__22686,G__22687,G__22688,G__22689,G__22690,G__22691,G__22692,G__22693,G__22694,G__22695,G__22696));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var mf = this;
var dispatch_val = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(self__.dispatch_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(target_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});

cljs.core.MultiFn.cljs$lang$type = true;

cljs.core.MultiFn.cljs$lang$ctorStr = "cljs.core/MultiFn";

cljs.core.MultiFn.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/MultiFn");
});

cljs.core.__GT_MultiFn = (function __GT_MultiFn(name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
return (new cljs.core.MultiFn(name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy));
});

/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset(multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method(multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method(multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods(multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method(multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers(multifn);
});

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2153775104;
})
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__22698 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([this$__$1], 0));
return goog.string.hashCode(G__22698);
});

cljs.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,___$1){
var self__ = this;
var ___$2 = this;
return cljs.core._write(writer,[cljs.core.str("#uuid \""),cljs.core.str(self__.uuid),cljs.core.str("\"")].join(''));
});

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((other instanceof cljs.core.UUID)) && ((self__.uuid === other.uuid));
});

cljs.core.UUID.prototype.toString = (function (){
var self__ = this;
var _ = this;
return self__.uuid;
});

cljs.core.UUID.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.UUID.cljs$lang$type = true;

cljs.core.UUID.cljs$lang$ctorStr = "cljs.core/UUID";

cljs.core.UUID.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/UUID");
});

cljs.core.__GT_UUID = (function __GT_UUID(uuid){
return (new cljs.core.UUID(uuid));
});


/**
* @constructor
*/
cljs.core.ExceptionInfo = (function (message,data,cause){
this.message = message;
this.data = data;
this.cause = cause;
})

cljs.core.ExceptionInfo.cljs$lang$type = true;

cljs.core.ExceptionInfo.cljs$lang$ctorStr = "cljs.core/ExceptionInfo";

cljs.core.ExceptionInfo.cljs$lang$ctorPrWriter = (function (this__4318__auto__,writer__4319__auto__,opt__4320__auto__){
return cljs.core._write(writer__4319__auto__,"cljs.core/ExceptionInfo");
});

cljs.core.__GT_ExceptionInfo = (function __GT_ExceptionInfo(message,data,cause){
return (new cljs.core.ExceptionInfo(message,data,cause));
});

cljs.core.ExceptionInfo.prototype = (new Error());
cljs.core.ExceptionInfo.prototype.constructor = cljs.core.ExceptionInfo;
/**
* Alpha - subject to change.
* Create an instance of ExceptionInfo, an Error type that carries a
* map of additional data.
*/
cljs.core.ex_info = (function() {
var ex_info = null;
var ex_info__2 = (function (msg,map){
return (new cljs.core.ExceptionInfo(msg,map,null));
});
var ex_info__3 = (function (msg,map,cause){
return (new cljs.core.ExceptionInfo(msg,map,cause));
});
ex_info = function(msg,map,cause){
switch(arguments.length){
case 2:
return ex_info__2.call(this,msg,map);
case 3:
return ex_info__3.call(this,msg,map,cause);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ex_info.cljs$core$IFn$_invoke$arity$2 = ex_info__2;
ex_info.cljs$core$IFn$_invoke$arity$3 = ex_info__3;
return ex_info;
})()
;
/**
* Alpha - subject to change.
* Returns exception data (a map) if ex is an ExceptionInfo.
* Otherwise returns nil.
*/
cljs.core.ex_data = (function ex_data(ex){
if((ex instanceof cljs.core.ExceptionInfo)){
return ex.data;
} else {
return null;
}
});
/**
* Alpha - subject to change.
* Returns the message attached to the given Error / ExceptionInfo object.
* For non-Errors returns nil.
*/
cljs.core.ex_message = (function ex_message(ex){
if((ex instanceof Error)){
return ex.message;
} else {
return null;
}
});
/**
* Alpha - subject to change.
* Returns exception cause (an Error / ExceptionInfo) if ex is an
* ExceptionInfo.
* Otherwise returns nil.
*/
cljs.core.ex_cause = (function ex_cause(ex){
if((ex instanceof cljs.core.ExceptionInfo)){
return ex.cause;
} else {
return null;
}
});
/**
* Returns an JavaScript compatible comparator based upon pred.
*/
cljs.core.comparator = (function comparator(pred){
return (function (x,y){
if(cljs.core.truth_((function (){var G__22703 = x;
var G__22704 = y;
return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(G__22703,G__22704) : pred.call(null,G__22703,G__22704));
})())){
return (-1);
} else {
if(cljs.core.truth_((function (){var G__22705 = y;
var G__22706 = x;
return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(G__22705,G__22706) : pred.call(null,G__22705,G__22706));
})())){
return (1);
} else {
return (0);

}
}
});
});
cljs.core.special_symbol_QMARK_ = (function special_symbol_QMARK_(x){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null),null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,new cljs.core.Symbol(null,"loop*","loop*",615029416,null),null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null),null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),null,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null),null,new cljs.core.Symbol(null,"let*","let*",1920721458,null),null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,new cljs.core.Symbol(null,".",".",1975675962,null),null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,new cljs.core.Symbol(null,"def","def",597100991,null),null], null), null),x);
});
/**
* test [v] finds fn at key :test in var metadata and calls it,
* presuming failure will throw exception
*/
cljs.core.test = (function test(v){
var f = v.cljs$lang$test;
if(cljs.core.truth_(f)){
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

return cljs.core.constant$keyword$20;
} else {
return cljs.core.constant$keyword$21;
}
});
