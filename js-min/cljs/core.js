// Compiled by ClojureScript 0.0-2511
goog.provide('cljs.core');
goog.require('goog.string.StringBuffer');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string');
cljs.core._STAR_clojurescript_version_STAR_ = "0.0-2511";
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a different way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
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
cljs.core.pr_opts = (function pr_opts(){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1,cljs.core._STAR_flush_on_newline_STAR_,cljs.core.constant$keyword$2,cljs.core._STAR_print_readably_STAR_,cljs.core.constant$keyword$3,cljs.core._STAR_print_meta_STAR_,cljs.core.constant$keyword$4,cljs.core._STAR_print_dup_STAR_,cljs.core.constant$keyword$5,cljs.core._STAR_print_length_STAR_], null);
});
/**
* Set *print-fn* to console.log
*/
cljs.core.enable_console_print_BANG_ = (function enable_console_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16202__delegate = function (args){
return console.log.apply(console,(function (){var G__16201 = args;
return (cljs.core.into_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(G__16201) : cljs.core.into_array.call(null,G__16201));
})());
};
var G__16202 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__16202__delegate.call(this,args);};
G__16202.cljs$lang$maxFixedArity = 0;
G__16202.cljs$lang$applyTo = (function (arglist__16203){
var args = cljs.core.seq(arglist__16203);
return G__16202__delegate(args);
});
G__16202.cljs$core$IFn$_invoke$arity$variadic = G__16202__delegate;
return G__16202;
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
var G__16205 = x;
return goog.isString(G__16205);
});
/**
* Internal - do not use!
*/
cljs.core.native_satisfies_QMARK_ = (function native_satisfies_QMARK_(p,x){
var x__$1 = (((x == null))?null:x);
if((p[(function (){var G__16207 = x__$1;
return goog.typeOf(G__16207);
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
var ty__$1 = (cljs.core.truth_((function (){var and__3618__auto__ = ty;
if(cljs.core.truth_(and__3618__auto__)){
return ty.cljs$lang$type;
} else {
return and__3618__auto__;
}
})())?ty.cljs$lang$ctorStr:(function (){var G__16209 = obj;
return goog.typeOf(G__16209);
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
if((typeof Symbol !== 'undefined') && (((function (){var G__16211 = Symbol;
return goog.typeOf(G__16211);
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
var n__4517__auto___16213 = len;
var i_16214 = (0);
while(true){
if((i_16214 < n__4517__auto___16213)){
(new_arr[i_16214] = (arr[i_16214]));

var G__16215 = (i_16214 + (1));
i_16214 = G__16215;
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
var G__16224__delegate = function (array,i,idxs){
var G__16221 = aget;
var G__16222 = aget.cljs$core$IFn$_invoke$arity$2(array,i);
var G__16223 = idxs;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$3 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$3(G__16221,G__16222,G__16223) : cljs.core.apply.call(null,G__16221,G__16222,G__16223));
};
var G__16224 = function (array,i,var_args){
var idxs = null;
if (arguments.length > 2) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__16224__delegate.call(this,array,i,idxs);};
G__16224.cljs$lang$maxFixedArity = 2;
G__16224.cljs$lang$applyTo = (function (arglist__16225){
var array = cljs.core.first(arglist__16225);
arglist__16225 = cljs.core.next(arglist__16225);
var i = cljs.core.first(arglist__16225);
var idxs = cljs.core.rest(arglist__16225);
return G__16224__delegate(array,i,idxs);
});
G__16224.cljs$core$IFn$_invoke$arity$variadic = G__16224__delegate;
return G__16224;
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
var G__16234__delegate = function (array,idx,idx2,idxv){
var G__16230 = aset;
var G__16231 = (array[idx]);
var G__16232 = idx2;
var G__16233 = idxv;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$4(G__16230,G__16231,G__16232,G__16233) : cljs.core.apply.call(null,G__16230,G__16231,G__16232,G__16233));
};
var G__16234 = function (array,idx,idx2,var_args){
var idxv = null;
if (arguments.length > 3) {
  idxv = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__16234__delegate.call(this,array,idx,idx2,idxv);};
G__16234.cljs$lang$maxFixedArity = 3;
G__16234.cljs$lang$applyTo = (function (arglist__16235){
var array = cljs.core.first(arglist__16235);
arglist__16235 = cljs.core.next(arglist__16235);
var idx = cljs.core.first(arglist__16235);
arglist__16235 = cljs.core.next(arglist__16235);
var idx2 = cljs.core.first(arglist__16235);
var idxv = cljs.core.rest(arglist__16235);
return G__16234__delegate(array,idx,idx2,idxv);
});
G__16234.cljs$core$IFn$_invoke$arity$variadic = G__16234__delegate;
return G__16234;
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
var G__16241 = (function (a,x){
a.push(x);

return a;
});
var G__16242 = [];
var G__16243 = aseq;
return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(G__16241,G__16242,G__16243) : cljs.core.reduce.call(null,G__16241,G__16242,G__16243));
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
js_invoke.cljs$lang$applyTo = (function (arglist__16244){
var obj = cljs.core.first(arglist__16244);
arglist__16244 = cljs.core.next(arglist__16244);
var s = cljs.core.first(arglist__16244);
var args = cljs.core.rest(arglist__16244);
return js_invoke__delegate(obj,s,args);
});
js_invoke.cljs$core$IFn$_invoke$arity$variadic = js_invoke__delegate;
return js_invoke;
})()
;

cljs.core.Fn = (function (){var obj16246 = {};
return obj16246;
})();


cljs.core.IFn = (function (){var obj16248 = {};
return obj16248;
})();

cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$1;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[(function (){var G__16294 = x__4274__auto__;
return goog.typeOf(G__16294);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$2;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[(function (){var G__16296 = x__4274__auto__;
return goog.typeOf(G__16296);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$3;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[(function (){var G__16298 = x__4274__auto__;
return goog.typeOf(G__16298);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$4;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[(function (){var G__16300 = x__4274__auto__;
return goog.typeOf(G__16300);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$5;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[(function (){var G__16302 = x__4274__auto__;
return goog.typeOf(G__16302);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$6;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[(function (){var G__16304 = x__4274__auto__;
return goog.typeOf(G__16304);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$7;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[(function (){var G__16306 = x__4274__auto__;
return goog.typeOf(G__16306);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$8;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[(function (){var G__16308 = x__4274__auto__;
return goog.typeOf(G__16308);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$9;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[(function (){var G__16310 = x__4274__auto__;
return goog.typeOf(G__16310);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$10;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[(function (){var G__16312 = x__4274__auto__;
return goog.typeOf(G__16312);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$11;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[(function (){var G__16314 = x__4274__auto__;
return goog.typeOf(G__16314);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$12;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[(function (){var G__16316 = x__4274__auto__;
return goog.typeOf(G__16316);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$13;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[(function (){var G__16318 = x__4274__auto__;
return goog.typeOf(G__16318);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$14;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[(function (){var G__16320 = x__4274__auto__;
return goog.typeOf(G__16320);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$15;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[(function (){var G__16322 = x__4274__auto__;
return goog.typeOf(G__16322);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$16;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[(function (){var G__16324 = x__4274__auto__;
return goog.typeOf(G__16324);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$17;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[(function (){var G__16326 = x__4274__auto__;
return goog.typeOf(G__16326);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$18;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[(function (){var G__16328 = x__4274__auto__;
return goog.typeOf(G__16328);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$19;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[(function (){var G__16330 = x__4274__auto__;
return goog.typeOf(G__16330);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$20;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[(function (){var G__16332 = x__4274__auto__;
return goog.typeOf(G__16332);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$21;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[(function (){var G__16334 = x__4274__auto__;
return goog.typeOf(G__16334);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
}
});
var _invoke__22 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$22;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$22(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[(function (){var G__16336 = x__4274__auto__;
return goog.typeOf(G__16336);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
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


cljs.core.ICloneable = (function (){var obj16338 = {};
return obj16338;
})();

cljs.core._clone = (function _clone(value){
if((function (){var and__3618__auto__ = value;
if(and__3618__auto__){
return value.cljs$core$ICloneable$_clone$arity$1;
} else {
return and__3618__auto__;
}
})()){
return value.cljs$core$ICloneable$_clone$arity$1(value);
} else {
var x__4274__auto__ = (((value == null))?null:value);
return (function (){var or__3630__auto__ = (cljs.core._clone[(function (){var G__16342 = x__4274__auto__;
return goog.typeOf(G__16342);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._clone["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("ICloneable.-clone",value);
}
}
})().call(null,value);
}
});


cljs.core.ICounted = (function (){var obj16344 = {};
return obj16344;
})();

cljs.core._count = (function _count(coll){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$ICounted$_count$arity$1;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$ICounted$_count$arity$1(coll);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._count[(function (){var G__16348 = x__4274__auto__;
return goog.typeOf(G__16348);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._count["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("ICounted.-count",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IEmptyableCollection = (function (){var obj16350 = {};
return obj16350;
})();

cljs.core._empty = (function _empty(coll){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._empty[(function (){var G__16354 = x__4274__auto__;
return goog.typeOf(G__16354);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._empty["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ICollection = (function (){var obj16356 = {};
return obj16356;
})();

cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$ICollection$_conj$arity$2;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._conj[(function (){var G__16360 = x__4274__auto__;
return goog.typeOf(G__16360);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._conj["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});


cljs.core.IIndexed = (function (){var obj16362 = {};
return obj16362;
})();

cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IIndexed$_nth$arity$2;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._nth[(function (){var G__16368 = x__4274__auto__;
return goog.typeOf(G__16368);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._nth["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IIndexed$_nth$arity$3;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._nth[(function (){var G__16370 = x__4274__auto__;
return goog.typeOf(G__16370);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._nth["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
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


cljs.core.ASeq = (function (){var obj16372 = {};
return obj16372;
})();


cljs.core.ISeq = (function (){var obj16374 = {};
return obj16374;
})();

cljs.core._first = (function _first(coll){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$ISeq$_first$arity$1;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$ISeq$_first$arity$1(coll);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._first[(function (){var G__16378 = x__4274__auto__;
return goog.typeOf(G__16378);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._first["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("ISeq.-first",coll);
}
}
})().call(null,coll);
}
});

cljs.core._rest = (function _rest(coll){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$ISeq$_rest$arity$1;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._rest[(function (){var G__16382 = x__4274__auto__;
return goog.typeOf(G__16382);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._rest["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});


cljs.core.INext = (function (){var obj16384 = {};
return obj16384;
})();

cljs.core._next = (function _next(coll){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$INext$_next$arity$1;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$INext$_next$arity$1(coll);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._next[(function (){var G__16388 = x__4274__auto__;
return goog.typeOf(G__16388);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._next["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("INext.-next",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ILookup = (function (){var obj16390 = {};
return obj16390;
})();

cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3618__auto__ = o;
if(and__3618__auto__){
return o.cljs$core$ILookup$_lookup$arity$2;
} else {
return and__3618__auto__;
}
})()){
return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else {
var x__4274__auto__ = (((o == null))?null:o);
return (function (){var or__3630__auto__ = (cljs.core._lookup[(function (){var G__16396 = x__4274__auto__;
return goog.typeOf(G__16396);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._lookup["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3618__auto__ = o;
if(and__3618__auto__){
return o.cljs$core$ILookup$_lookup$arity$3;
} else {
return and__3618__auto__;
}
})()){
return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else {
var x__4274__auto__ = (((o == null))?null:o);
return (function (){var or__3630__auto__ = (cljs.core._lookup[(function (){var G__16398 = x__4274__auto__;
return goog.typeOf(G__16398);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._lookup["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
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


cljs.core.IAssociative = (function (){var obj16400 = {};
return obj16400;
})();

cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._contains_key_QMARK_[(function (){var G__16404 = x__4274__auto__;
return goog.typeOf(G__16404);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});

cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IAssociative$_assoc$arity$3;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._assoc[(function (){var G__16408 = x__4274__auto__;
return goog.typeOf(G__16408);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._assoc["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});


cljs.core.IMap = (function (){var obj16410 = {};
return obj16410;
})();

cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IMap$_dissoc$arity$2;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._dissoc[(function (){var G__16414 = x__4274__auto__;
return goog.typeOf(G__16414);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._dissoc["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});


cljs.core.IMapEntry = (function (){var obj16416 = {};
return obj16416;
})();

cljs.core._key = (function _key(coll){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IMapEntry$_key$arity$1;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._key[(function (){var G__16420 = x__4274__auto__;
return goog.typeOf(G__16420);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._key["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});

cljs.core._val = (function _val(coll){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IMapEntry$_val$arity$1;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._val[(function (){var G__16424 = x__4274__auto__;
return goog.typeOf(G__16424);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._val["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ISet = (function (){var obj16426 = {};
return obj16426;
})();

cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$ISet$_disjoin$arity$2;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._disjoin[(function (){var G__16430 = x__4274__auto__;
return goog.typeOf(G__16430);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._disjoin["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});


cljs.core.IStack = (function (){var obj16432 = {};
return obj16432;
})();

cljs.core._peek = (function _peek(coll){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IStack$_peek$arity$1;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IStack$_peek$arity$1(coll);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._peek[(function (){var G__16436 = x__4274__auto__;
return goog.typeOf(G__16436);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._peek["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IStack.-peek",coll);
}
}
})().call(null,coll);
}
});

cljs.core._pop = (function _pop(coll){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IStack$_pop$arity$1;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IStack$_pop$arity$1(coll);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._pop[(function (){var G__16440 = x__4274__auto__;
return goog.typeOf(G__16440);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._pop["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IStack.-pop",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IVector = (function (){var obj16442 = {};
return obj16442;
})();

cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IVector$_assoc_n$arity$3;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._assoc_n[(function (){var G__16446 = x__4274__auto__;
return goog.typeOf(G__16446);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._assoc_n["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});


cljs.core.IDeref = (function (){var obj16448 = {};
return obj16448;
})();

cljs.core._deref = (function _deref(o){
if((function (){var and__3618__auto__ = o;
if(and__3618__auto__){
return o.cljs$core$IDeref$_deref$arity$1;
} else {
return and__3618__auto__;
}
})()){
return o.cljs$core$IDeref$_deref$arity$1(o);
} else {
var x__4274__auto__ = (((o == null))?null:o);
return (function (){var or__3630__auto__ = (cljs.core._deref[(function (){var G__16452 = x__4274__auto__;
return goog.typeOf(G__16452);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._deref["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IDeref.-deref",o);
}
}
})().call(null,o);
}
});


cljs.core.IDerefWithTimeout = (function (){var obj16454 = {};
return obj16454;
})();

cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3618__auto__ = o;
if(and__3618__auto__){
return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else {
return and__3618__auto__;
}
})()){
return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else {
var x__4274__auto__ = (((o == null))?null:o);
return (function (){var or__3630__auto__ = (cljs.core._deref_with_timeout[(function (){var G__16458 = x__4274__auto__;
return goog.typeOf(G__16458);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._deref_with_timeout["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});


cljs.core.IMeta = (function (){var obj16460 = {};
return obj16460;
})();

cljs.core._meta = (function _meta(o){
if((function (){var and__3618__auto__ = o;
if(and__3618__auto__){
return o.cljs$core$IMeta$_meta$arity$1;
} else {
return and__3618__auto__;
}
})()){
return o.cljs$core$IMeta$_meta$arity$1(o);
} else {
var x__4274__auto__ = (((o == null))?null:o);
return (function (){var or__3630__auto__ = (cljs.core._meta[(function (){var G__16464 = x__4274__auto__;
return goog.typeOf(G__16464);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._meta["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IMeta.-meta",o);
}
}
})().call(null,o);
}
});


cljs.core.IWithMeta = (function (){var obj16466 = {};
return obj16466;
})();

cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3618__auto__ = o;
if(and__3618__auto__){
return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else {
return and__3618__auto__;
}
})()){
return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else {
var x__4274__auto__ = (((o == null))?null:o);
return (function (){var or__3630__auto__ = (cljs.core._with_meta[(function (){var G__16470 = x__4274__auto__;
return goog.typeOf(G__16470);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._with_meta["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});


cljs.core.IReduce = (function (){var obj16472 = {};
return obj16472;
})();

cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IReduce$_reduce$arity$2;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._reduce[(function (){var G__16478 = x__4274__auto__;
return goog.typeOf(G__16478);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._reduce["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IReduce$_reduce$arity$3;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._reduce[(function (){var G__16480 = x__4274__auto__;
return goog.typeOf(G__16480);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._reduce["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
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


cljs.core.IKVReduce = (function (){var obj16482 = {};
return obj16482;
})();

cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._kv_reduce[(function (){var G__16486 = x__4274__auto__;
return goog.typeOf(G__16486);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._kv_reduce["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});


cljs.core.IEquiv = (function (){var obj16488 = {};
return obj16488;
})();

cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3618__auto__ = o;
if(and__3618__auto__){
return o.cljs$core$IEquiv$_equiv$arity$2;
} else {
return and__3618__auto__;
}
})()){
return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else {
var x__4274__auto__ = (((o == null))?null:o);
return (function (){var or__3630__auto__ = (cljs.core._equiv[(function (){var G__16492 = x__4274__auto__;
return goog.typeOf(G__16492);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._equiv["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});


cljs.core.IHash = (function (){var obj16494 = {};
return obj16494;
})();

cljs.core._hash = (function _hash(o){
if((function (){var and__3618__auto__ = o;
if(and__3618__auto__){
return o.cljs$core$IHash$_hash$arity$1;
} else {
return and__3618__auto__;
}
})()){
return o.cljs$core$IHash$_hash$arity$1(o);
} else {
var x__4274__auto__ = (((o == null))?null:o);
return (function (){var or__3630__auto__ = (cljs.core._hash[(function (){var G__16498 = x__4274__auto__;
return goog.typeOf(G__16498);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._hash["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IHash.-hash",o);
}
}
})().call(null,o);
}
});


cljs.core.ISeqable = (function (){var obj16500 = {};
return obj16500;
})();

cljs.core._seq = (function _seq(o){
if((function (){var and__3618__auto__ = o;
if(and__3618__auto__){
return o.cljs$core$ISeqable$_seq$arity$1;
} else {
return and__3618__auto__;
}
})()){
return o.cljs$core$ISeqable$_seq$arity$1(o);
} else {
var x__4274__auto__ = (((o == null))?null:o);
return (function (){var or__3630__auto__ = (cljs.core._seq[(function (){var G__16504 = x__4274__auto__;
return goog.typeOf(G__16504);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._seq["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("ISeqable.-seq",o);
}
}
})().call(null,o);
}
});


cljs.core.ISequential = (function (){var obj16506 = {};
return obj16506;
})();


cljs.core.IList = (function (){var obj16508 = {};
return obj16508;
})();


cljs.core.IRecord = (function (){var obj16510 = {};
return obj16510;
})();


cljs.core.IReversible = (function (){var obj16512 = {};
return obj16512;
})();

cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IReversible$_rseq$arity$1;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._rseq[(function (){var G__16516 = x__4274__auto__;
return goog.typeOf(G__16516);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._rseq["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ISorted = (function (){var obj16518 = {};
return obj16518;
})();

cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._sorted_seq[(function (){var G__16522 = x__4274__auto__;
return goog.typeOf(G__16522);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._sorted_seq["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});

cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._sorted_seq_from[(function (){var G__16526 = x__4274__auto__;
return goog.typeOf(G__16526);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._sorted_seq_from["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});

cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$ISorted$_entry_key$arity$2;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._entry_key[(function (){var G__16530 = x__4274__auto__;
return goog.typeOf(G__16530);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._entry_key["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});

cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$ISorted$_comparator$arity$1;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._comparator[(function (){var G__16534 = x__4274__auto__;
return goog.typeOf(G__16534);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._comparator["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IWriter = (function (){var obj16536 = {};
return obj16536;
})();

cljs.core._write = (function _write(writer,s){
if((function (){var and__3618__auto__ = writer;
if(and__3618__auto__){
return writer.cljs$core$IWriter$_write$arity$2;
} else {
return and__3618__auto__;
}
})()){
return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else {
var x__4274__auto__ = (((writer == null))?null:writer);
return (function (){var or__3630__auto__ = (cljs.core._write[(function (){var G__16540 = x__4274__auto__;
return goog.typeOf(G__16540);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._write["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});

cljs.core._flush = (function _flush(writer){
if((function (){var and__3618__auto__ = writer;
if(and__3618__auto__){
return writer.cljs$core$IWriter$_flush$arity$1;
} else {
return and__3618__auto__;
}
})()){
return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else {
var x__4274__auto__ = (((writer == null))?null:writer);
return (function (){var or__3630__auto__ = (cljs.core._flush[(function (){var G__16544 = x__4274__auto__;
return goog.typeOf(G__16544);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._flush["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});


cljs.core.IPrintWithWriter = (function (){var obj16546 = {};
return obj16546;
})();

cljs.core._pr_writer = (function _pr_writer(o,writer,opts){
if((function (){var and__3618__auto__ = o;
if(and__3618__auto__){
return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else {
return and__3618__auto__;
}
})()){
return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else {
var x__4274__auto__ = (((o == null))?null:o);
return (function (){var or__3630__auto__ = (cljs.core._pr_writer[(function (){var G__16550 = x__4274__auto__;
return goog.typeOf(G__16550);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._pr_writer["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});


cljs.core.IPending = (function (){var obj16552 = {};
return obj16552;
})();

cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3618__auto__ = d;
if(and__3618__auto__){
return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else {
return and__3618__auto__;
}
})()){
return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else {
var x__4274__auto__ = (((d == null))?null:d);
return (function (){var or__3630__auto__ = (cljs.core._realized_QMARK_[(function (){var G__16556 = x__4274__auto__;
return goog.typeOf(G__16556);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._realized_QMARK_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IPending.-realized?",d);
}
}
})().call(null,d);
}
});


cljs.core.IWatchable = (function (){var obj16558 = {};
return obj16558;
})();

cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._notify_watches[(function (){var G__16562 = x__4274__auto__;
return goog.typeOf(G__16562);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._notify_watches["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});

cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._add_watch[(function (){var G__16566 = x__4274__auto__;
return goog.typeOf(G__16566);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._add_watch["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});

cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._remove_watch[(function (){var G__16570 = x__4274__auto__;
return goog.typeOf(G__16570);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._remove_watch["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});


cljs.core.IEditableCollection = (function (){var obj16572 = {};
return obj16572;
})();

cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._as_transient[(function (){var G__16576 = x__4274__auto__;
return goog.typeOf(G__16576);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._as_transient["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ITransientCollection = (function (){var obj16578 = {};
return obj16578;
})();

cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3618__auto__ = tcoll;
if(and__3618__auto__){
return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else {
return and__3618__auto__;
}
})()){
return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else {
var x__4274__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3630__auto__ = (cljs.core._conj_BANG_[(function (){var G__16582 = x__4274__auto__;
return goog.typeOf(G__16582);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._conj_BANG_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});

cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3618__auto__ = tcoll;
if(and__3618__auto__){
return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else {
return and__3618__auto__;
}
})()){
return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else {
var x__4274__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3630__auto__ = (cljs.core._persistent_BANG_[(function (){var G__16586 = x__4274__auto__;
return goog.typeOf(G__16586);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._persistent_BANG_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});


cljs.core.ITransientAssociative = (function (){var obj16588 = {};
return obj16588;
})();

cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3618__auto__ = tcoll;
if(and__3618__auto__){
return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else {
return and__3618__auto__;
}
})()){
return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else {
var x__4274__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3630__auto__ = (cljs.core._assoc_BANG_[(function (){var G__16592 = x__4274__auto__;
return goog.typeOf(G__16592);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._assoc_BANG_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});


cljs.core.ITransientMap = (function (){var obj16594 = {};
return obj16594;
})();

cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3618__auto__ = tcoll;
if(and__3618__auto__){
return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else {
return and__3618__auto__;
}
})()){
return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else {
var x__4274__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3630__auto__ = (cljs.core._dissoc_BANG_[(function (){var G__16598 = x__4274__auto__;
return goog.typeOf(G__16598);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._dissoc_BANG_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});


cljs.core.ITransientVector = (function (){var obj16600 = {};
return obj16600;
})();

cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3618__auto__ = tcoll;
if(and__3618__auto__){
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else {
return and__3618__auto__;
}
})()){
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else {
var x__4274__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3630__auto__ = (cljs.core._assoc_n_BANG_[(function (){var G__16604 = x__4274__auto__;
return goog.typeOf(G__16604);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});

cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3618__auto__ = tcoll;
if(and__3618__auto__){
return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else {
return and__3618__auto__;
}
})()){
return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else {
var x__4274__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3630__auto__ = (cljs.core._pop_BANG_[(function (){var G__16608 = x__4274__auto__;
return goog.typeOf(G__16608);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._pop_BANG_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});


cljs.core.ITransientSet = (function (){var obj16610 = {};
return obj16610;
})();

cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3618__auto__ = tcoll;
if(and__3618__auto__){
return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else {
return and__3618__auto__;
}
})()){
return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else {
var x__4274__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3630__auto__ = (cljs.core._disjoin_BANG_[(function (){var G__16614 = x__4274__auto__;
return goog.typeOf(G__16614);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._disjoin_BANG_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});


cljs.core.IComparable = (function (){var obj16616 = {};
return obj16616;
})();

cljs.core._compare = (function _compare(x,y){
if((function (){var and__3618__auto__ = x;
if(and__3618__auto__){
return x.cljs$core$IComparable$_compare$arity$2;
} else {
return and__3618__auto__;
}
})()){
return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else {
var x__4274__auto__ = (((x == null))?null:x);
return (function (){var or__3630__auto__ = (cljs.core._compare[(function (){var G__16620 = x__4274__auto__;
return goog.typeOf(G__16620);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._compare["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});


cljs.core.IChunk = (function (){var obj16622 = {};
return obj16622;
})();

cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IChunk$_drop_first$arity$1;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._drop_first[(function (){var G__16626 = x__4274__auto__;
return goog.typeOf(G__16626);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._drop_first["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IChunkedSeq = (function (){var obj16628 = {};
return obj16628;
})();

cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._chunked_first[(function (){var G__16632 = x__4274__auto__;
return goog.typeOf(G__16632);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._chunked_first["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});

cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._chunked_rest[(function (){var G__16636 = x__4274__auto__;
return goog.typeOf(G__16636);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._chunked_rest["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IChunkedNext = (function (){var obj16638 = {};
return obj16638;
})();

cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._chunked_next[(function (){var G__16642 = x__4274__auto__;
return goog.typeOf(G__16642);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._chunked_next["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});


cljs.core.INamed = (function (){var obj16644 = {};
return obj16644;
})();

cljs.core._name = (function _name(x){
if((function (){var and__3618__auto__ = x;
if(and__3618__auto__){
return x.cljs$core$INamed$_name$arity$1;
} else {
return and__3618__auto__;
}
})()){
return x.cljs$core$INamed$_name$arity$1(x);
} else {
var x__4274__auto__ = (((x == null))?null:x);
return (function (){var or__3630__auto__ = (cljs.core._name[(function (){var G__16648 = x__4274__auto__;
return goog.typeOf(G__16648);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._name["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("INamed.-name",x);
}
}
})().call(null,x);
}
});

cljs.core._namespace = (function _namespace(x){
if((function (){var and__3618__auto__ = x;
if(and__3618__auto__){
return x.cljs$core$INamed$_namespace$arity$1;
} else {
return and__3618__auto__;
}
})()){
return x.cljs$core$INamed$_namespace$arity$1(x);
} else {
var x__4274__auto__ = (((x == null))?null:x);
return (function (){var or__3630__auto__ = (cljs.core._namespace[(function (){var G__16652 = x__4274__auto__;
return goog.typeOf(G__16652);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._namespace["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("INamed.-namespace",x);
}
}
})().call(null,x);
}
});


cljs.core.IAtom = (function (){var obj16654 = {};
return obj16654;
})();


cljs.core.IReset = (function (){var obj16656 = {};
return obj16656;
})();

cljs.core._reset_BANG_ = (function _reset_BANG_(o,new_value){
if((function (){var and__3618__auto__ = o;
if(and__3618__auto__){
return o.cljs$core$IReset$_reset_BANG_$arity$2;
} else {
return and__3618__auto__;
}
})()){
return o.cljs$core$IReset$_reset_BANG_$arity$2(o,new_value);
} else {
var x__4274__auto__ = (((o == null))?null:o);
return (function (){var or__3630__auto__ = (cljs.core._reset_BANG_[(function (){var G__16660 = x__4274__auto__;
return goog.typeOf(G__16660);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._reset_BANG_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IReset.-reset!",o);
}
}
})().call(null,o,new_value);
}
});


cljs.core.ISwap = (function (){var obj16662 = {};
return obj16662;
})();

cljs.core._swap_BANG_ = (function() {
var _swap_BANG_ = null;
var _swap_BANG___2 = (function (o,f){
if((function (){var and__3618__auto__ = o;
if(and__3618__auto__){
return o.cljs$core$ISwap$_swap_BANG_$arity$2;
} else {
return and__3618__auto__;
}
})()){
return o.cljs$core$ISwap$_swap_BANG_$arity$2(o,f);
} else {
var x__4274__auto__ = (((o == null))?null:o);
return (function (){var or__3630__auto__ = (cljs.core._swap_BANG_[(function (){var G__16672 = x__4274__auto__;
return goog.typeOf(G__16672);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._swap_BANG_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f);
}
});
var _swap_BANG___3 = (function (o,f,a){
if((function (){var and__3618__auto__ = o;
if(and__3618__auto__){
return o.cljs$core$ISwap$_swap_BANG_$arity$3;
} else {
return and__3618__auto__;
}
})()){
return o.cljs$core$ISwap$_swap_BANG_$arity$3(o,f,a);
} else {
var x__4274__auto__ = (((o == null))?null:o);
return (function (){var or__3630__auto__ = (cljs.core._swap_BANG_[(function (){var G__16674 = x__4274__auto__;
return goog.typeOf(G__16674);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._swap_BANG_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a);
}
});
var _swap_BANG___4 = (function (o,f,a,b){
if((function (){var and__3618__auto__ = o;
if(and__3618__auto__){
return o.cljs$core$ISwap$_swap_BANG_$arity$4;
} else {
return and__3618__auto__;
}
})()){
return o.cljs$core$ISwap$_swap_BANG_$arity$4(o,f,a,b);
} else {
var x__4274__auto__ = (((o == null))?null:o);
return (function (){var or__3630__auto__ = (cljs.core._swap_BANG_[(function (){var G__16676 = x__4274__auto__;
return goog.typeOf(G__16676);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._swap_BANG_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a,b);
}
});
var _swap_BANG___5 = (function (o,f,a,b,xs){
if((function (){var and__3618__auto__ = o;
if(and__3618__auto__){
return o.cljs$core$ISwap$_swap_BANG_$arity$5;
} else {
return and__3618__auto__;
}
})()){
return o.cljs$core$ISwap$_swap_BANG_$arity$5(o,f,a,b,xs);
} else {
var x__4274__auto__ = (((o == null))?null:o);
return (function (){var or__3630__auto__ = (cljs.core._swap_BANG_[(function (){var G__16678 = x__4274__auto__;
return goog.typeOf(G__16678);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._swap_BANG_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
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


cljs.core.IVolatile = (function (){var obj16680 = {};
return obj16680;
})();

cljs.core._vreset_BANG_ = (function _vreset_BANG_(o,new_value){
if((function (){var and__3618__auto__ = o;
if(and__3618__auto__){
return o.cljs$core$IVolatile$_vreset_BANG_$arity$2;
} else {
return and__3618__auto__;
}
})()){
return o.cljs$core$IVolatile$_vreset_BANG_$arity$2(o,new_value);
} else {
var x__4274__auto__ = (((o == null))?null:o);
return (function (){var or__3630__auto__ = (cljs.core._vreset_BANG_[(function (){var G__16684 = x__4274__auto__;
return goog.typeOf(G__16684);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._vreset_BANG_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IVolatile.-vreset!",o);
}
}
})().call(null,o,new_value);
}
});


cljs.core.IIterable = (function (){var obj16686 = {};
return obj16686;
})();

cljs.core._iterator = (function _iterator(coll){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IIterable$_iterator$arity$1;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IIterable$_iterator$arity$1(coll);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._iterator[(function (){var G__16690 = x__4274__auto__;
return goog.typeOf(G__16690);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._iterator["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
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

cljs.core.StringBufferWriter.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/StringBufferWriter");
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
if((typeof Math.imul !== 'undefined') && (!(((function (){var G__16693 = (4294967295);
var G__16694 = (5);
return (Math.imul.cljs$core$IFn$_invoke$arity$2 ? Math.imul.cljs$core$IFn$_invoke$arity$2(G__16693,G__16694) : Math.imul.call(null,G__16693,G__16694));
})() === (0))))){
cljs.core.imul = (function imul(a,b){
var G__16697 = a;
var G__16698 = b;
return (Math.imul.cljs$core$IFn$_invoke$arity$2 ? Math.imul.cljs$core$IFn$_invoke$arity$2(G__16697,G__16698) : Math.imul.call(null,G__16697,G__16698));
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
var G__16699 = (i + (2));
var G__16700 = cljs.core.m3_mix_H1(h1,cljs.core.m3_mix_K1((in$.charCodeAt((i - (1))) | (in$.charCodeAt(i) << (16)))));
i = G__16699;
h1 = G__16700;
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



cljs.core.string_hash_cache = (function (){var obj16702 = {};
return obj16702;
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
var G__16703 = (i + (1));
var G__16704 = (cljs.core.imul((31),hash) + s.charCodeAt(i));
i = G__16703;
hash = G__16704;
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
cljs.core.string_hash_cache = (function (){var obj16708 = {};
return obj16708;
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
if((function (){var G__16711 = o;
if(G__16711){
var bit__4304__auto__ = (G__16711.cljs$lang$protocol_mask$partition0$ & (4194304));
if((bit__4304__auto__) || (G__16711.cljs$core$IHash$)){
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
return ((function (){var G__16712 = o;
return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__16712) : Math.floor.call(null,G__16712));
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
if(cljs.core.truth_((function (){var and__3618__auto__ = cljs.core.not(a.ns);
if(and__3618__auto__){
return b.ns;
} else {
return and__3618__auto__;
}
})())){
return (-1);
} else {
if(cljs.core.truth_(a.ns)){
if(cljs.core.not(b.ns)){
return (1);
} else {
var nsc = (function (){var G__16719 = a.ns;
var G__16720 = b.ns;
return goog.array.defaultCompare(G__16719,G__16720);
})();
if(((0) === nsc)){
var G__16721 = a.name;
var G__16722 = b.name;
return goog.array.defaultCompare(G__16721,G__16722);
} else {
return nsc;
}
}
} else {
var G__16723 = a.name;
var G__16724 = b.name;
return goog.array.defaultCompare(G__16723,G__16724);

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
var h__4051__auto__ = self__._hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_symbol(sym__$1);
self__._hash = h__4051__auto____$1;

return h__4051__auto____$1;
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
var G__16726 = null;
var G__16726__2 = (function (self__,coll){
var self__ = this;
var self____$1 = this;
var sym = self____$1;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,null);
});
var G__16726__3 = (function (self__,coll,not_found){
var self__ = this;
var self____$1 = this;
var sym = self____$1;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,not_found);
});
G__16726 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__16726__2.call(this,self__,coll);
case 3:
return G__16726__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16726.cljs$core$IFn$_invoke$arity$2 = G__16726__2;
G__16726.cljs$core$IFn$_invoke$arity$3 = G__16726__3;
return G__16726;
})()
;

cljs.core.Symbol.prototype.apply = (function (self__,args16725){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args16725)));
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

cljs.core.Symbol.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/Symbol");
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

cljs.core.Var.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/Var");
});

cljs.core.__GT_Var = (function __GT_Var(val,sym,_meta){
return (new cljs.core.Var(val,sym,_meta));
});



cljs.core.iterable_QMARK_ = (function iterable_QMARK_(x){
var G__16730 = x;
if(G__16730){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__16730.cljs$core$IIterable$;
}
})())){
return true;
} else {
if((!G__16730.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IIterable,G__16730);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IIterable,G__16730);
}
});
cljs.core.clone = (function clone(value){
return cljs.core._clone(value);
});
cljs.core.cloneable_QMARK_ = (function cloneable_QMARK_(value){
var G__16732 = value;
if(G__16732){
var bit__4311__auto__ = (G__16732.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__4311__auto__) || (G__16732.cljs$core$ICloneable$)){
return true;
} else {
if((!G__16732.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__16732);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__16732);
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
if((function (){var G__16734 = coll;
if(G__16734){
var bit__4304__auto__ = (G__16734.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4304__auto__) || (G__16734.cljs$core$ISeqable$)){
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
if((function (){var G__16736 = coll;
if(G__16736){
var bit__4304__auto__ = (G__16736.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4304__auto__) || (G__16736.cljs$core$ISeq$)){
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
if((function (){var G__16738 = coll;
if(G__16738){
var bit__4304__auto__ = (G__16738.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4304__auto__) || (G__16738.cljs$core$ISeq$)){
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
if((function (){var G__16740 = coll;
if(G__16740){
var bit__4304__auto__ = (G__16740.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__4304__auto__) || (G__16740.cljs$core$INext$)){
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
var G__16745__delegate = function (x,y,more){
while(true){
if(_EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
if(cljs.core.next(more)){
var G__16746 = y;
var G__16747 = cljs.core.first(more);
var G__16748 = cljs.core.next(more);
x = G__16746;
y = G__16747;
more = G__16748;
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
var G__16745 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__16745__delegate.call(this,x,y,more);};
G__16745.cljs$lang$maxFixedArity = 2;
G__16745.cljs$lang$applyTo = (function (arglist__16749){
var x = cljs.core.first(arglist__16749);
arglist__16749 = cljs.core.next(arglist__16749);
var y = cljs.core.first(arglist__16749);
var more = cljs.core.rest(arglist__16749);
return G__16745__delegate(x,y,more);
});
G__16745.cljs$core$IFn$_invoke$arity$variadic = G__16745__delegate;
return G__16745;
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

cljs.core.ES6Iterator.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/ES6Iterator");
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
self__._rest = (function (){var G__16750 = self__.iter;
return (cljs.core.es6_iterator_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.es6_iterator_seq.cljs$core$IFn$_invoke$arity$1(G__16750) : cljs.core.es6_iterator_seq.call(null,G__16750));
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

cljs.core.ES6IteratorSeq.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/ES6IteratorSeq");
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
var G__16751 = (n + (1));
var G__16752 = ((cljs.core.imul((31),hash_code) + cljs.core.hash(cljs.core.first(coll__$1))) | (0));
var G__16753 = cljs.core.next(coll__$1);
n = G__16751;
hash_code = G__16752;
coll__$1 = G__16753;
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
var G__16754 = (n + (1));
var G__16755 = ((hash_code + cljs.core.hash(cljs.core.first(coll__$1))) | (0));
var G__16756 = cljs.core.next(coll__$1);
n = G__16754;
hash_code = G__16755;
coll__$1 = G__16756;
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
var G__16757 = o;
return goog.getUid(G__16757);
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

cljs.core.Reduced.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/Reduced");
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
var G__16759 = x;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16759) : cljs.core.deref.call(null,G__16759));
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
var nval = (function (){var G__16766 = val;
var G__16767 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16766,G__16767) : f.call(null,G__16766,G__16767));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__16772 = nval;
var G__16773 = (n + (1));
val = G__16772;
n = G__16773;
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
var nval = (function (){var G__16768 = val__$1;
var G__16769 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16768,G__16769) : f.call(null,G__16768,G__16769));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__16774 = nval;
var G__16775 = (n + (1));
val__$1 = G__16774;
n = G__16775;
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
var nval = (function (){var G__16770 = val__$1;
var G__16771 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16770,G__16771) : f.call(null,G__16770,G__16771));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__16776 = nval;
var G__16777 = (n + (1));
val__$1 = G__16776;
n = G__16777;
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
var nval = (function (){var G__16784 = val;
var G__16785 = (arr[n]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16784,G__16785) : f.call(null,G__16784,G__16785));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__16790 = nval;
var G__16791 = (n + (1));
val = G__16790;
n = G__16791;
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
var nval = (function (){var G__16786 = val__$1;
var G__16787 = (arr[n]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16786,G__16787) : f.call(null,G__16786,G__16787));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__16792 = nval;
var G__16793 = (n + (1));
val__$1 = G__16792;
n = G__16793;
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
var nval = (function (){var G__16788 = val__$1;
var G__16789 = (arr[n]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16788,G__16789) : f.call(null,G__16788,G__16789));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__16794 = nval;
var G__16795 = (n + (1));
val__$1 = G__16794;
n = G__16795;
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
var G__16797 = x;
if(G__16797){
var bit__4311__auto__ = (G__16797.cljs$lang$protocol_mask$partition0$ & (2));
if((bit__4311__auto__) || (G__16797.cljs$core$ICounted$)){
return true;
} else {
if((!G__16797.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,G__16797);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,G__16797);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__16799 = x;
if(G__16799){
var bit__4311__auto__ = (G__16799.cljs$lang$protocol_mask$partition0$ & (16));
if((bit__4311__auto__) || (G__16799.cljs$core$IIndexed$)){
return true;
} else {
if((!G__16799.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,G__16799);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,G__16799);
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

cljs.core.IndexedSeqIterator.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/IndexedSeqIterator");
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
var G__16800 = coll__$1;
var G__16801 = other;
return (cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2 ? cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2(G__16800,G__16801) : cljs.core.equiv_sequential.call(null,G__16800,G__16801));
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
var G__16802 = o;
var G__16803 = coll__$1;
return (cljs.core.cons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.cons.cljs$core$IFn$_invoke$arity$2(G__16802,G__16803) : cljs.core.cons.call(null,G__16802,G__16803));
});

cljs.core.IndexedSeq.cljs$lang$type = true;

cljs.core.IndexedSeq.cljs$lang$ctorStr = "cljs.core/IndexedSeq";

cljs.core.IndexedSeq.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/IndexedSeq");
});

cljs.core.__GT_IndexedSeq = (function __GT_IndexedSeq(arr,i){
return (new cljs.core.IndexedSeq(arr,i));
});

(cljs.core.IndexedSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator(this__4608__auto__);
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
var G__16806 = coll__$1;
var G__16807 = other;
return (cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2 ? cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2(G__16806,G__16807) : cljs.core.equiv_sequential.call(null,G__16806,G__16807));
});

cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var G__16808 = cljs.core.List.EMPTY;
var G__16809 = self__.meta;
return (cljs.core.with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.core.with_meta.cljs$core$IFn$_invoke$arity$2(G__16808,G__16809) : cljs.core.with_meta.call(null,G__16808,G__16809));
});

cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (col,f){
var self__ = this;
var col__$1 = this;
var G__16810 = f;
var G__16811 = col__$1;
return (cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2 ? cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(G__16810,G__16811) : cljs.core.seq_reduce.call(null,G__16810,G__16811));
});

cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (col,f,start){
var self__ = this;
var col__$1 = this;
var G__16812 = f;
var G__16813 = start;
var G__16814 = col__$1;
return (cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(G__16812,G__16813,G__16814) : cljs.core.seq_reduce.call(null,G__16812,G__16813,G__16814));
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
var G__16815 = o;
var G__16816 = coll__$1;
return (cljs.core.cons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.cons.cljs$core$IFn$_invoke$arity$2(G__16815,G__16816) : cljs.core.cons.call(null,G__16815,G__16816));
});

cljs.core.RSeq.cljs$lang$type = true;

cljs.core.RSeq.cljs$lang$ctorStr = "cljs.core/RSeq";

cljs.core.RSeq.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/RSeq");
});

cljs.core.__GT_RSeq = (function __GT_RSeq(ci,i,meta){
return (new cljs.core.RSeq(ci,i,meta));
});

(cljs.core.RSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator(this__4608__auto__);
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
var G__16817 = sn;
s = G__16817;
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
var G__16822__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__16823 = conj.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__16824 = cljs.core.first(xs);
var G__16825 = cljs.core.next(xs);
coll = G__16823;
x = G__16824;
xs = G__16825;
continue;
} else {
return conj.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__16822 = function (coll,x,var_args){
var xs = null;
if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__16822__delegate.call(this,coll,x,xs);};
G__16822.cljs$lang$maxFixedArity = 2;
G__16822.cljs$lang$applyTo = (function (arglist__16826){
var coll = cljs.core.first(arglist__16826);
arglist__16826 = cljs.core.next(arglist__16826);
var x = cljs.core.first(arglist__16826);
var xs = cljs.core.rest(arglist__16826);
return G__16822__delegate(coll,x,xs);
});
G__16822.cljs$core$IFn$_invoke$arity$variadic = G__16822__delegate;
return G__16822;
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
var G__16827 = cljs.core.next(s);
var G__16828 = (acc + (1));
s = G__16827;
acc = G__16828;
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
if((function (){var G__16830 = coll;
if(G__16830){
var bit__4304__auto__ = (G__16830.cljs$lang$protocol_mask$partition0$ & (2));
if((bit__4304__auto__) || (G__16830.cljs$core$ICounted$)){
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
var G__16831 = cljs.core.next(coll);
var G__16832 = (n - (1));
coll = G__16831;
n = G__16832;
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
var G__16833 = cljs.core.next(coll);
var G__16834 = (n - (1));
var G__16835 = not_found;
coll = G__16833;
n = G__16834;
not_found = G__16835;
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
if((function (){var G__16840 = coll;
if(G__16840){
var bit__4304__auto__ = (G__16840.cljs$lang$protocol_mask$partition0$ & (16));
if((bit__4304__auto__) || (G__16840.cljs$core$IIndexed$)){
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
if((function (){var G__16841 = coll;
if(G__16841){
var bit__4311__auto__ = (G__16841.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4311__auto__) || (G__16841.cljs$core$ISeq$)){
return true;
} else {
if((!G__16841.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__16841);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__16841);
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
if((function (){var G__16842 = coll;
if(G__16842){
var bit__4304__auto__ = (G__16842.cljs$lang$protocol_mask$partition0$ & (16));
if((bit__4304__auto__) || (G__16842.cljs$core$IIndexed$)){
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
if((function (){var G__16843 = coll;
if(G__16843){
var bit__4311__auto__ = (G__16843.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4311__auto__) || (G__16843.cljs$core$ISeq$)){
return true;
} else {
if((!G__16843.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__16843);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__16843);
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
var G__16844 = (n__$1 - (1));
var G__16845 = cljs.core.rest(xs);
n__$1 = G__16844;
xs = G__16845;
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
if((function (){var G__16848 = o;
if(G__16848){
var bit__4304__auto__ = (G__16848.cljs$lang$protocol_mask$partition0$ & (256));
if((bit__4304__auto__) || (G__16848.cljs$core$ILookup$)){
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
if((function (){var G__16849 = o;
if(G__16849){
var bit__4304__auto__ = (G__16849.cljs$lang$protocol_mask$partition0$ & (256));
if((bit__4304__auto__) || (G__16849.cljs$core$ILookup$)){
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
var G__16853__delegate = function (coll,k,v,kvs){
while(true){
var ret = assoc.cljs$core$IFn$_invoke$arity$3(coll,k,v);
if(cljs.core.truth_(kvs)){
var G__16854 = ret;
var G__16855 = cljs.core.first(kvs);
var G__16856 = cljs.core.second(kvs);
var G__16857 = cljs.core.nnext(kvs);
coll = G__16854;
k = G__16855;
v = G__16856;
kvs = G__16857;
continue;
} else {
return ret;
}
break;
}
};
var G__16853 = function (coll,k,v,var_args){
var kvs = null;
if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__16853__delegate.call(this,coll,k,v,kvs);};
G__16853.cljs$lang$maxFixedArity = 3;
G__16853.cljs$lang$applyTo = (function (arglist__16858){
var coll = cljs.core.first(arglist__16858);
arglist__16858 = cljs.core.next(arglist__16858);
var k = cljs.core.first(arglist__16858);
arglist__16858 = cljs.core.next(arglist__16858);
var v = cljs.core.first(arglist__16858);
var kvs = cljs.core.rest(arglist__16858);
return G__16853__delegate(coll,k,v,kvs);
});
G__16853.cljs$core$IFn$_invoke$arity$variadic = G__16853__delegate;
return G__16853;
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
var G__16861__delegate = function (coll,k,ks){
while(true){
if((coll == null)){
return null;
} else {
var ret = dissoc.cljs$core$IFn$_invoke$arity$2(coll,k);
if(cljs.core.truth_(ks)){
var G__16862 = ret;
var G__16863 = cljs.core.first(ks);
var G__16864 = cljs.core.next(ks);
coll = G__16862;
k = G__16863;
ks = G__16864;
continue;
} else {
return ret;
}
}
break;
}
};
var G__16861 = function (coll,k,var_args){
var ks = null;
if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__16861__delegate.call(this,coll,k,ks);};
G__16861.cljs$lang$maxFixedArity = 2;
G__16861.cljs$lang$applyTo = (function (arglist__16865){
var coll = cljs.core.first(arglist__16865);
arglist__16865 = cljs.core.next(arglist__16865);
var k = cljs.core.first(arglist__16865);
var ks = cljs.core.rest(arglist__16865);
return G__16861__delegate(coll,k,ks);
});
G__16861.cljs$core$IFn$_invoke$arity$variadic = G__16861__delegate;
return G__16861;
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
var or__3630__auto__ = (function (){var G__16870 = f;
return goog.isFunction(G__16870);
})();
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
var G__16871 = f;
if(G__16871){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto____$1 = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto____$1)){
return or__3630__auto____$1;
} else {
return G__16871.cljs$core$Fn$;
}
})())){
return true;
} else {
if((!G__16871.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.Fn,G__16871);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.Fn,G__16871);
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
var G__17337 = null;
var G__17337__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.afn.cljs$core$IFn$_invoke$arity$0 ? self__.afn.cljs$core$IFn$_invoke$arity$0() : self__.afn.call(null));
});
var G__17337__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__16873 = a;
return (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(G__16873) : self__.afn.call(null,G__16873));
});
var G__17337__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__16874 = a;
var G__16875 = b;
return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(G__16874,G__16875) : self__.afn.call(null,G__16874,G__16875));
});
var G__17337__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__16876 = a;
var G__16877 = b;
var G__16878 = c;
return (self__.afn.cljs$core$IFn$_invoke$arity$3 ? self__.afn.cljs$core$IFn$_invoke$arity$3(G__16876,G__16877,G__16878) : self__.afn.call(null,G__16876,G__16877,G__16878));
});
var G__17337__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__16879 = a;
var G__16880 = b;
var G__16881 = c;
var G__16882 = d;
return (self__.afn.cljs$core$IFn$_invoke$arity$4 ? self__.afn.cljs$core$IFn$_invoke$arity$4(G__16879,G__16880,G__16881,G__16882) : self__.afn.call(null,G__16879,G__16880,G__16881,G__16882));
});
var G__17337__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__16883 = a;
var G__16884 = b;
var G__16885 = c;
var G__16886 = d;
var G__16887 = e;
return (self__.afn.cljs$core$IFn$_invoke$arity$5 ? self__.afn.cljs$core$IFn$_invoke$arity$5(G__16883,G__16884,G__16885,G__16886,G__16887) : self__.afn.call(null,G__16883,G__16884,G__16885,G__16886,G__16887));
});
var G__17337__7 = (function (self__,a,b,c,d,e,f){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__16888 = a;
var G__16889 = b;
var G__16890 = c;
var G__16891 = d;
var G__16892 = e;
var G__16893 = f;
return (self__.afn.cljs$core$IFn$_invoke$arity$6 ? self__.afn.cljs$core$IFn$_invoke$arity$6(G__16888,G__16889,G__16890,G__16891,G__16892,G__16893) : self__.afn.call(null,G__16888,G__16889,G__16890,G__16891,G__16892,G__16893));
});
var G__17337__8 = (function (self__,a,b,c,d,e,f,g){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__16894 = a;
var G__16895 = b;
var G__16896 = c;
var G__16897 = d;
var G__16898 = e;
var G__16899 = f;
var G__16900 = g;
return (self__.afn.cljs$core$IFn$_invoke$arity$7 ? self__.afn.cljs$core$IFn$_invoke$arity$7(G__16894,G__16895,G__16896,G__16897,G__16898,G__16899,G__16900) : self__.afn.call(null,G__16894,G__16895,G__16896,G__16897,G__16898,G__16899,G__16900));
});
var G__17337__9 = (function (self__,a,b,c,d,e,f,g,h){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__16901 = a;
var G__16902 = b;
var G__16903 = c;
var G__16904 = d;
var G__16905 = e;
var G__16906 = f;
var G__16907 = g;
var G__16908 = h;
return (self__.afn.cljs$core$IFn$_invoke$arity$8 ? self__.afn.cljs$core$IFn$_invoke$arity$8(G__16901,G__16902,G__16903,G__16904,G__16905,G__16906,G__16907,G__16908) : self__.afn.call(null,G__16901,G__16902,G__16903,G__16904,G__16905,G__16906,G__16907,G__16908));
});
var G__17337__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__16909 = a;
var G__16910 = b;
var G__16911 = c;
var G__16912 = d;
var G__16913 = e;
var G__16914 = f;
var G__16915 = g;
var G__16916 = h;
var G__16917 = i;
return (self__.afn.cljs$core$IFn$_invoke$arity$9 ? self__.afn.cljs$core$IFn$_invoke$arity$9(G__16909,G__16910,G__16911,G__16912,G__16913,G__16914,G__16915,G__16916,G__16917) : self__.afn.call(null,G__16909,G__16910,G__16911,G__16912,G__16913,G__16914,G__16915,G__16916,G__16917));
});
var G__17337__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__16918 = a;
var G__16919 = b;
var G__16920 = c;
var G__16921 = d;
var G__16922 = e;
var G__16923 = f;
var G__16924 = g;
var G__16925 = h;
var G__16926 = i;
var G__16927 = j;
return (self__.afn.cljs$core$IFn$_invoke$arity$10 ? self__.afn.cljs$core$IFn$_invoke$arity$10(G__16918,G__16919,G__16920,G__16921,G__16922,G__16923,G__16924,G__16925,G__16926,G__16927) : self__.afn.call(null,G__16918,G__16919,G__16920,G__16921,G__16922,G__16923,G__16924,G__16925,G__16926,G__16927));
});
var G__17337__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__16928 = a;
var G__16929 = b;
var G__16930 = c;
var G__16931 = d;
var G__16932 = e;
var G__16933 = f;
var G__16934 = g;
var G__16935 = h;
var G__16936 = i;
var G__16937 = j;
var G__16938 = k;
return (self__.afn.cljs$core$IFn$_invoke$arity$11 ? self__.afn.cljs$core$IFn$_invoke$arity$11(G__16928,G__16929,G__16930,G__16931,G__16932,G__16933,G__16934,G__16935,G__16936,G__16937,G__16938) : self__.afn.call(null,G__16928,G__16929,G__16930,G__16931,G__16932,G__16933,G__16934,G__16935,G__16936,G__16937,G__16938));
});
var G__17337__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__16939 = a;
var G__16940 = b;
var G__16941 = c;
var G__16942 = d;
var G__16943 = e;
var G__16944 = f;
var G__16945 = g;
var G__16946 = h;
var G__16947 = i;
var G__16948 = j;
var G__16949 = k;
var G__16950 = l;
return (self__.afn.cljs$core$IFn$_invoke$arity$12 ? self__.afn.cljs$core$IFn$_invoke$arity$12(G__16939,G__16940,G__16941,G__16942,G__16943,G__16944,G__16945,G__16946,G__16947,G__16948,G__16949,G__16950) : self__.afn.call(null,G__16939,G__16940,G__16941,G__16942,G__16943,G__16944,G__16945,G__16946,G__16947,G__16948,G__16949,G__16950));
});
var G__17337__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__16951 = a;
var G__16952 = b;
var G__16953 = c;
var G__16954 = d;
var G__16955 = e;
var G__16956 = f;
var G__16957 = g;
var G__16958 = h;
var G__16959 = i;
var G__16960 = j;
var G__16961 = k;
var G__16962 = l;
var G__16963 = m;
return (self__.afn.cljs$core$IFn$_invoke$arity$13 ? self__.afn.cljs$core$IFn$_invoke$arity$13(G__16951,G__16952,G__16953,G__16954,G__16955,G__16956,G__16957,G__16958,G__16959,G__16960,G__16961,G__16962,G__16963) : self__.afn.call(null,G__16951,G__16952,G__16953,G__16954,G__16955,G__16956,G__16957,G__16958,G__16959,G__16960,G__16961,G__16962,G__16963));
});
var G__17337__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__16964 = a;
var G__16965 = b;
var G__16966 = c;
var G__16967 = d;
var G__16968 = e;
var G__16969 = f;
var G__16970 = g;
var G__16971 = h;
var G__16972 = i;
var G__16973 = j;
var G__16974 = k;
var G__16975 = l;
var G__16976 = m;
var G__16977 = n;
return (self__.afn.cljs$core$IFn$_invoke$arity$14 ? self__.afn.cljs$core$IFn$_invoke$arity$14(G__16964,G__16965,G__16966,G__16967,G__16968,G__16969,G__16970,G__16971,G__16972,G__16973,G__16974,G__16975,G__16976,G__16977) : self__.afn.call(null,G__16964,G__16965,G__16966,G__16967,G__16968,G__16969,G__16970,G__16971,G__16972,G__16973,G__16974,G__16975,G__16976,G__16977));
});
var G__17337__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__16978 = a;
var G__16979 = b;
var G__16980 = c;
var G__16981 = d;
var G__16982 = e;
var G__16983 = f;
var G__16984 = g;
var G__16985 = h;
var G__16986 = i;
var G__16987 = j;
var G__16988 = k;
var G__16989 = l;
var G__16990 = m;
var G__16991 = n;
var G__16992 = o;
return (self__.afn.cljs$core$IFn$_invoke$arity$15 ? self__.afn.cljs$core$IFn$_invoke$arity$15(G__16978,G__16979,G__16980,G__16981,G__16982,G__16983,G__16984,G__16985,G__16986,G__16987,G__16988,G__16989,G__16990,G__16991,G__16992) : self__.afn.call(null,G__16978,G__16979,G__16980,G__16981,G__16982,G__16983,G__16984,G__16985,G__16986,G__16987,G__16988,G__16989,G__16990,G__16991,G__16992));
});
var G__17337__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__16993 = a;
var G__16994 = b;
var G__16995 = c;
var G__16996 = d;
var G__16997 = e;
var G__16998 = f;
var G__16999 = g;
var G__17000 = h;
var G__17001 = i;
var G__17002 = j;
var G__17003 = k;
var G__17004 = l;
var G__17005 = m;
var G__17006 = n;
var G__17007 = o;
var G__17008 = p;
return (self__.afn.cljs$core$IFn$_invoke$arity$16 ? self__.afn.cljs$core$IFn$_invoke$arity$16(G__16993,G__16994,G__16995,G__16996,G__16997,G__16998,G__16999,G__17000,G__17001,G__17002,G__17003,G__17004,G__17005,G__17006,G__17007,G__17008) : self__.afn.call(null,G__16993,G__16994,G__16995,G__16996,G__16997,G__16998,G__16999,G__17000,G__17001,G__17002,G__17003,G__17004,G__17005,G__17006,G__17007,G__17008));
});
var G__17337__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__17009 = a;
var G__17010 = b;
var G__17011 = c;
var G__17012 = d;
var G__17013 = e;
var G__17014 = f;
var G__17015 = g;
var G__17016 = h;
var G__17017 = i;
var G__17018 = j;
var G__17019 = k;
var G__17020 = l;
var G__17021 = m;
var G__17022 = n;
var G__17023 = o;
var G__17024 = p;
var G__17025 = q;
return (self__.afn.cljs$core$IFn$_invoke$arity$17 ? self__.afn.cljs$core$IFn$_invoke$arity$17(G__17009,G__17010,G__17011,G__17012,G__17013,G__17014,G__17015,G__17016,G__17017,G__17018,G__17019,G__17020,G__17021,G__17022,G__17023,G__17024,G__17025) : self__.afn.call(null,G__17009,G__17010,G__17011,G__17012,G__17013,G__17014,G__17015,G__17016,G__17017,G__17018,G__17019,G__17020,G__17021,G__17022,G__17023,G__17024,G__17025));
});
var G__17337__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__17026 = a;
var G__17027 = b;
var G__17028 = c;
var G__17029 = d;
var G__17030 = e;
var G__17031 = f;
var G__17032 = g;
var G__17033 = h;
var G__17034 = i;
var G__17035 = j;
var G__17036 = k;
var G__17037 = l;
var G__17038 = m;
var G__17039 = n;
var G__17040 = o;
var G__17041 = p;
var G__17042 = q;
var G__17043 = r;
return (self__.afn.cljs$core$IFn$_invoke$arity$18 ? self__.afn.cljs$core$IFn$_invoke$arity$18(G__17026,G__17027,G__17028,G__17029,G__17030,G__17031,G__17032,G__17033,G__17034,G__17035,G__17036,G__17037,G__17038,G__17039,G__17040,G__17041,G__17042,G__17043) : self__.afn.call(null,G__17026,G__17027,G__17028,G__17029,G__17030,G__17031,G__17032,G__17033,G__17034,G__17035,G__17036,G__17037,G__17038,G__17039,G__17040,G__17041,G__17042,G__17043));
});
var G__17337__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__17044 = a;
var G__17045 = b;
var G__17046 = c;
var G__17047 = d;
var G__17048 = e;
var G__17049 = f;
var G__17050 = g;
var G__17051 = h;
var G__17052 = i;
var G__17053 = j;
var G__17054 = k;
var G__17055 = l;
var G__17056 = m;
var G__17057 = n;
var G__17058 = o;
var G__17059 = p;
var G__17060 = q;
var G__17061 = r;
var G__17062 = s;
return (self__.afn.cljs$core$IFn$_invoke$arity$19 ? self__.afn.cljs$core$IFn$_invoke$arity$19(G__17044,G__17045,G__17046,G__17047,G__17048,G__17049,G__17050,G__17051,G__17052,G__17053,G__17054,G__17055,G__17056,G__17057,G__17058,G__17059,G__17060,G__17061,G__17062) : self__.afn.call(null,G__17044,G__17045,G__17046,G__17047,G__17048,G__17049,G__17050,G__17051,G__17052,G__17053,G__17054,G__17055,G__17056,G__17057,G__17058,G__17059,G__17060,G__17061,G__17062));
});
var G__17337__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__17063 = a;
var G__17064 = b;
var G__17065 = c;
var G__17066 = d;
var G__17067 = e;
var G__17068 = f;
var G__17069 = g;
var G__17070 = h;
var G__17071 = i;
var G__17072 = j;
var G__17073 = k;
var G__17074 = l;
var G__17075 = m;
var G__17076 = n;
var G__17077 = o;
var G__17078 = p;
var G__17079 = q;
var G__17080 = r;
var G__17081 = s;
var G__17082 = t;
return (self__.afn.cljs$core$IFn$_invoke$arity$20 ? self__.afn.cljs$core$IFn$_invoke$arity$20(G__17063,G__17064,G__17065,G__17066,G__17067,G__17068,G__17069,G__17070,G__17071,G__17072,G__17073,G__17074,G__17075,G__17076,G__17077,G__17078,G__17079,G__17080,G__17081,G__17082) : self__.afn.call(null,G__17063,G__17064,G__17065,G__17066,G__17067,G__17068,G__17069,G__17070,G__17071,G__17072,G__17073,G__17074,G__17075,G__17076,G__17077,G__17078,G__17079,G__17080,G__17081,G__17082));
});
var G__17337__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__17083 = self__.afn;
var G__17084 = a;
var G__17085 = b;
var G__17086 = c;
var G__17087 = d;
var G__17088 = e;
var G__17089 = f;
var G__17090 = g;
var G__17091 = h;
var G__17092 = i;
var G__17093 = j;
var G__17094 = k;
var G__17095 = l;
var G__17096 = m;
var G__17097 = n;
var G__17098 = o;
var G__17099 = p;
var G__17100 = q;
var G__17101 = r;
var G__17102 = s;
var G__17103 = t;
var G__17104 = rest;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$22 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$22(G__17083,G__17084,G__17085,G__17086,G__17087,G__17088,G__17089,G__17090,G__17091,G__17092,G__17093,G__17094,G__17095,G__17096,G__17097,G__17098,G__17099,G__17100,G__17101,G__17102,G__17103,G__17104) : cljs.core.apply.call(null,G__17083,G__17084,G__17085,G__17086,G__17087,G__17088,G__17089,G__17090,G__17091,G__17092,G__17093,G__17094,G__17095,G__17096,G__17097,G__17098,G__17099,G__17100,G__17101,G__17102,G__17103,G__17104));
});
G__17337 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__17337__1.call(this,self__);
case 2:
return G__17337__2.call(this,self__,a);
case 3:
return G__17337__3.call(this,self__,a,b);
case 4:
return G__17337__4.call(this,self__,a,b,c);
case 5:
return G__17337__5.call(this,self__,a,b,c,d);
case 6:
return G__17337__6.call(this,self__,a,b,c,d,e);
case 7:
return G__17337__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__17337__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__17337__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__17337__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__17337__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__17337__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__17337__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__17337__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__17337__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__17337__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__17337__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__17337__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__17337__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__17337__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__17337__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__17337__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17337.cljs$core$IFn$_invoke$arity$1 = G__17337__1;
G__17337.cljs$core$IFn$_invoke$arity$2 = G__17337__2;
G__17337.cljs$core$IFn$_invoke$arity$3 = G__17337__3;
G__17337.cljs$core$IFn$_invoke$arity$4 = G__17337__4;
G__17337.cljs$core$IFn$_invoke$arity$5 = G__17337__5;
G__17337.cljs$core$IFn$_invoke$arity$6 = G__17337__6;
G__17337.cljs$core$IFn$_invoke$arity$7 = G__17337__7;
G__17337.cljs$core$IFn$_invoke$arity$8 = G__17337__8;
G__17337.cljs$core$IFn$_invoke$arity$9 = G__17337__9;
G__17337.cljs$core$IFn$_invoke$arity$10 = G__17337__10;
G__17337.cljs$core$IFn$_invoke$arity$11 = G__17337__11;
G__17337.cljs$core$IFn$_invoke$arity$12 = G__17337__12;
G__17337.cljs$core$IFn$_invoke$arity$13 = G__17337__13;
G__17337.cljs$core$IFn$_invoke$arity$14 = G__17337__14;
G__17337.cljs$core$IFn$_invoke$arity$15 = G__17337__15;
G__17337.cljs$core$IFn$_invoke$arity$16 = G__17337__16;
G__17337.cljs$core$IFn$_invoke$arity$17 = G__17337__17;
G__17337.cljs$core$IFn$_invoke$arity$18 = G__17337__18;
G__17337.cljs$core$IFn$_invoke$arity$19 = G__17337__19;
G__17337.cljs$core$IFn$_invoke$arity$20 = G__17337__20;
G__17337.cljs$core$IFn$_invoke$arity$21 = G__17337__21;
G__17337.cljs$core$IFn$_invoke$arity$22 = G__17337__22;
return G__17337;
})()
;

cljs.core.MetaFn.prototype.apply = (function (self__,args16872){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args16872)));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$0 ? self__.afn.cljs$core$IFn$_invoke$arity$0() : self__.afn.call(null));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
var G__17105 = a;
return (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(G__17105) : self__.afn.call(null,G__17105));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var _ = this;
var G__17106 = a;
var G__17107 = b;
return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(G__17106,G__17107) : self__.afn.call(null,G__17106,G__17107));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var _ = this;
var G__17108 = a;
var G__17109 = b;
var G__17110 = c;
return (self__.afn.cljs$core$IFn$_invoke$arity$3 ? self__.afn.cljs$core$IFn$_invoke$arity$3(G__17108,G__17109,G__17110) : self__.afn.call(null,G__17108,G__17109,G__17110));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var _ = this;
var G__17111 = a;
var G__17112 = b;
var G__17113 = c;
var G__17114 = d;
return (self__.afn.cljs$core$IFn$_invoke$arity$4 ? self__.afn.cljs$core$IFn$_invoke$arity$4(G__17111,G__17112,G__17113,G__17114) : self__.afn.call(null,G__17111,G__17112,G__17113,G__17114));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var _ = this;
var G__17115 = a;
var G__17116 = b;
var G__17117 = c;
var G__17118 = d;
var G__17119 = e;
return (self__.afn.cljs$core$IFn$_invoke$arity$5 ? self__.afn.cljs$core$IFn$_invoke$arity$5(G__17115,G__17116,G__17117,G__17118,G__17119) : self__.afn.call(null,G__17115,G__17116,G__17117,G__17118,G__17119));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var _ = this;
var G__17120 = a;
var G__17121 = b;
var G__17122 = c;
var G__17123 = d;
var G__17124 = e;
var G__17125 = f;
return (self__.afn.cljs$core$IFn$_invoke$arity$6 ? self__.afn.cljs$core$IFn$_invoke$arity$6(G__17120,G__17121,G__17122,G__17123,G__17124,G__17125) : self__.afn.call(null,G__17120,G__17121,G__17122,G__17123,G__17124,G__17125));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var _ = this;
var G__17126 = a;
var G__17127 = b;
var G__17128 = c;
var G__17129 = d;
var G__17130 = e;
var G__17131 = f;
var G__17132 = g;
return (self__.afn.cljs$core$IFn$_invoke$arity$7 ? self__.afn.cljs$core$IFn$_invoke$arity$7(G__17126,G__17127,G__17128,G__17129,G__17130,G__17131,G__17132) : self__.afn.call(null,G__17126,G__17127,G__17128,G__17129,G__17130,G__17131,G__17132));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var _ = this;
var G__17133 = a;
var G__17134 = b;
var G__17135 = c;
var G__17136 = d;
var G__17137 = e;
var G__17138 = f;
var G__17139 = g;
var G__17140 = h;
return (self__.afn.cljs$core$IFn$_invoke$arity$8 ? self__.afn.cljs$core$IFn$_invoke$arity$8(G__17133,G__17134,G__17135,G__17136,G__17137,G__17138,G__17139,G__17140) : self__.afn.call(null,G__17133,G__17134,G__17135,G__17136,G__17137,G__17138,G__17139,G__17140));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var _ = this;
var G__17141 = a;
var G__17142 = b;
var G__17143 = c;
var G__17144 = d;
var G__17145 = e;
var G__17146 = f;
var G__17147 = g;
var G__17148 = h;
var G__17149 = i;
return (self__.afn.cljs$core$IFn$_invoke$arity$9 ? self__.afn.cljs$core$IFn$_invoke$arity$9(G__17141,G__17142,G__17143,G__17144,G__17145,G__17146,G__17147,G__17148,G__17149) : self__.afn.call(null,G__17141,G__17142,G__17143,G__17144,G__17145,G__17146,G__17147,G__17148,G__17149));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var _ = this;
var G__17150 = a;
var G__17151 = b;
var G__17152 = c;
var G__17153 = d;
var G__17154 = e;
var G__17155 = f;
var G__17156 = g;
var G__17157 = h;
var G__17158 = i;
var G__17159 = j;
return (self__.afn.cljs$core$IFn$_invoke$arity$10 ? self__.afn.cljs$core$IFn$_invoke$arity$10(G__17150,G__17151,G__17152,G__17153,G__17154,G__17155,G__17156,G__17157,G__17158,G__17159) : self__.afn.call(null,G__17150,G__17151,G__17152,G__17153,G__17154,G__17155,G__17156,G__17157,G__17158,G__17159));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var _ = this;
var G__17160 = a;
var G__17161 = b;
var G__17162 = c;
var G__17163 = d;
var G__17164 = e;
var G__17165 = f;
var G__17166 = g;
var G__17167 = h;
var G__17168 = i;
var G__17169 = j;
var G__17170 = k;
return (self__.afn.cljs$core$IFn$_invoke$arity$11 ? self__.afn.cljs$core$IFn$_invoke$arity$11(G__17160,G__17161,G__17162,G__17163,G__17164,G__17165,G__17166,G__17167,G__17168,G__17169,G__17170) : self__.afn.call(null,G__17160,G__17161,G__17162,G__17163,G__17164,G__17165,G__17166,G__17167,G__17168,G__17169,G__17170));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var _ = this;
var G__17171 = a;
var G__17172 = b;
var G__17173 = c;
var G__17174 = d;
var G__17175 = e;
var G__17176 = f;
var G__17177 = g;
var G__17178 = h;
var G__17179 = i;
var G__17180 = j;
var G__17181 = k;
var G__17182 = l;
return (self__.afn.cljs$core$IFn$_invoke$arity$12 ? self__.afn.cljs$core$IFn$_invoke$arity$12(G__17171,G__17172,G__17173,G__17174,G__17175,G__17176,G__17177,G__17178,G__17179,G__17180,G__17181,G__17182) : self__.afn.call(null,G__17171,G__17172,G__17173,G__17174,G__17175,G__17176,G__17177,G__17178,G__17179,G__17180,G__17181,G__17182));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var _ = this;
var G__17183 = a;
var G__17184 = b;
var G__17185 = c;
var G__17186 = d;
var G__17187 = e;
var G__17188 = f;
var G__17189 = g;
var G__17190 = h;
var G__17191 = i;
var G__17192 = j;
var G__17193 = k;
var G__17194 = l;
var G__17195 = m;
return (self__.afn.cljs$core$IFn$_invoke$arity$13 ? self__.afn.cljs$core$IFn$_invoke$arity$13(G__17183,G__17184,G__17185,G__17186,G__17187,G__17188,G__17189,G__17190,G__17191,G__17192,G__17193,G__17194,G__17195) : self__.afn.call(null,G__17183,G__17184,G__17185,G__17186,G__17187,G__17188,G__17189,G__17190,G__17191,G__17192,G__17193,G__17194,G__17195));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var _ = this;
var G__17196 = a;
var G__17197 = b;
var G__17198 = c;
var G__17199 = d;
var G__17200 = e;
var G__17201 = f;
var G__17202 = g;
var G__17203 = h;
var G__17204 = i;
var G__17205 = j;
var G__17206 = k;
var G__17207 = l;
var G__17208 = m;
var G__17209 = n;
return (self__.afn.cljs$core$IFn$_invoke$arity$14 ? self__.afn.cljs$core$IFn$_invoke$arity$14(G__17196,G__17197,G__17198,G__17199,G__17200,G__17201,G__17202,G__17203,G__17204,G__17205,G__17206,G__17207,G__17208,G__17209) : self__.afn.call(null,G__17196,G__17197,G__17198,G__17199,G__17200,G__17201,G__17202,G__17203,G__17204,G__17205,G__17206,G__17207,G__17208,G__17209));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var _ = this;
var G__17210 = a;
var G__17211 = b;
var G__17212 = c;
var G__17213 = d;
var G__17214 = e;
var G__17215 = f;
var G__17216 = g;
var G__17217 = h;
var G__17218 = i;
var G__17219 = j;
var G__17220 = k;
var G__17221 = l;
var G__17222 = m;
var G__17223 = n;
var G__17224 = o;
return (self__.afn.cljs$core$IFn$_invoke$arity$15 ? self__.afn.cljs$core$IFn$_invoke$arity$15(G__17210,G__17211,G__17212,G__17213,G__17214,G__17215,G__17216,G__17217,G__17218,G__17219,G__17220,G__17221,G__17222,G__17223,G__17224) : self__.afn.call(null,G__17210,G__17211,G__17212,G__17213,G__17214,G__17215,G__17216,G__17217,G__17218,G__17219,G__17220,G__17221,G__17222,G__17223,G__17224));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var _ = this;
var G__17225 = a;
var G__17226 = b;
var G__17227 = c;
var G__17228 = d;
var G__17229 = e;
var G__17230 = f;
var G__17231 = g;
var G__17232 = h;
var G__17233 = i;
var G__17234 = j;
var G__17235 = k;
var G__17236 = l;
var G__17237 = m;
var G__17238 = n;
var G__17239 = o;
var G__17240 = p;
return (self__.afn.cljs$core$IFn$_invoke$arity$16 ? self__.afn.cljs$core$IFn$_invoke$arity$16(G__17225,G__17226,G__17227,G__17228,G__17229,G__17230,G__17231,G__17232,G__17233,G__17234,G__17235,G__17236,G__17237,G__17238,G__17239,G__17240) : self__.afn.call(null,G__17225,G__17226,G__17227,G__17228,G__17229,G__17230,G__17231,G__17232,G__17233,G__17234,G__17235,G__17236,G__17237,G__17238,G__17239,G__17240));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var _ = this;
var G__17241 = a;
var G__17242 = b;
var G__17243 = c;
var G__17244 = d;
var G__17245 = e;
var G__17246 = f;
var G__17247 = g;
var G__17248 = h;
var G__17249 = i;
var G__17250 = j;
var G__17251 = k;
var G__17252 = l;
var G__17253 = m;
var G__17254 = n;
var G__17255 = o;
var G__17256 = p;
var G__17257 = q;
return (self__.afn.cljs$core$IFn$_invoke$arity$17 ? self__.afn.cljs$core$IFn$_invoke$arity$17(G__17241,G__17242,G__17243,G__17244,G__17245,G__17246,G__17247,G__17248,G__17249,G__17250,G__17251,G__17252,G__17253,G__17254,G__17255,G__17256,G__17257) : self__.afn.call(null,G__17241,G__17242,G__17243,G__17244,G__17245,G__17246,G__17247,G__17248,G__17249,G__17250,G__17251,G__17252,G__17253,G__17254,G__17255,G__17256,G__17257));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var _ = this;
var G__17258 = a;
var G__17259 = b;
var G__17260 = c;
var G__17261 = d;
var G__17262 = e;
var G__17263 = f;
var G__17264 = g;
var G__17265 = h;
var G__17266 = i;
var G__17267 = j;
var G__17268 = k;
var G__17269 = l;
var G__17270 = m;
var G__17271 = n;
var G__17272 = o;
var G__17273 = p;
var G__17274 = q;
var G__17275 = r;
return (self__.afn.cljs$core$IFn$_invoke$arity$18 ? self__.afn.cljs$core$IFn$_invoke$arity$18(G__17258,G__17259,G__17260,G__17261,G__17262,G__17263,G__17264,G__17265,G__17266,G__17267,G__17268,G__17269,G__17270,G__17271,G__17272,G__17273,G__17274,G__17275) : self__.afn.call(null,G__17258,G__17259,G__17260,G__17261,G__17262,G__17263,G__17264,G__17265,G__17266,G__17267,G__17268,G__17269,G__17270,G__17271,G__17272,G__17273,G__17274,G__17275));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var _ = this;
var G__17276 = a;
var G__17277 = b;
var G__17278 = c;
var G__17279 = d;
var G__17280 = e;
var G__17281 = f;
var G__17282 = g;
var G__17283 = h;
var G__17284 = i;
var G__17285 = j;
var G__17286 = k;
var G__17287 = l;
var G__17288 = m;
var G__17289 = n;
var G__17290 = o;
var G__17291 = p;
var G__17292 = q;
var G__17293 = r;
var G__17294 = s;
return (self__.afn.cljs$core$IFn$_invoke$arity$19 ? self__.afn.cljs$core$IFn$_invoke$arity$19(G__17276,G__17277,G__17278,G__17279,G__17280,G__17281,G__17282,G__17283,G__17284,G__17285,G__17286,G__17287,G__17288,G__17289,G__17290,G__17291,G__17292,G__17293,G__17294) : self__.afn.call(null,G__17276,G__17277,G__17278,G__17279,G__17280,G__17281,G__17282,G__17283,G__17284,G__17285,G__17286,G__17287,G__17288,G__17289,G__17290,G__17291,G__17292,G__17293,G__17294));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var _ = this;
var G__17295 = a;
var G__17296 = b;
var G__17297 = c;
var G__17298 = d;
var G__17299 = e;
var G__17300 = f;
var G__17301 = g;
var G__17302 = h;
var G__17303 = i;
var G__17304 = j;
var G__17305 = k;
var G__17306 = l;
var G__17307 = m;
var G__17308 = n;
var G__17309 = o;
var G__17310 = p;
var G__17311 = q;
var G__17312 = r;
var G__17313 = s;
var G__17314 = t;
return (self__.afn.cljs$core$IFn$_invoke$arity$20 ? self__.afn.cljs$core$IFn$_invoke$arity$20(G__17295,G__17296,G__17297,G__17298,G__17299,G__17300,G__17301,G__17302,G__17303,G__17304,G__17305,G__17306,G__17307,G__17308,G__17309,G__17310,G__17311,G__17312,G__17313,G__17314) : self__.afn.call(null,G__17295,G__17296,G__17297,G__17298,G__17299,G__17300,G__17301,G__17302,G__17303,G__17304,G__17305,G__17306,G__17307,G__17308,G__17309,G__17310,G__17311,G__17312,G__17313,G__17314));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var _ = this;
var G__17315 = self__.afn;
var G__17316 = a;
var G__17317 = b;
var G__17318 = c;
var G__17319 = d;
var G__17320 = e;
var G__17321 = f;
var G__17322 = g;
var G__17323 = h;
var G__17324 = i;
var G__17325 = j;
var G__17326 = k;
var G__17327 = l;
var G__17328 = m;
var G__17329 = n;
var G__17330 = o;
var G__17331 = p;
var G__17332 = q;
var G__17333 = r;
var G__17334 = s;
var G__17335 = t;
var G__17336 = rest;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$22 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$22(G__17315,G__17316,G__17317,G__17318,G__17319,G__17320,G__17321,G__17322,G__17323,G__17324,G__17325,G__17326,G__17327,G__17328,G__17329,G__17330,G__17331,G__17332,G__17333,G__17334,G__17335,G__17336) : cljs.core.apply.call(null,G__17315,G__17316,G__17317,G__17318,G__17319,G__17320,G__17321,G__17322,G__17323,G__17324,G__17325,G__17326,G__17327,G__17328,G__17329,G__17330,G__17331,G__17332,G__17333,G__17334,G__17335,G__17336));
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

cljs.core.MetaFn.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/MetaFn");
});

cljs.core.__GT_MetaFn = (function __GT_MetaFn(afn,meta){
return (new cljs.core.MetaFn(afn,meta));
});

/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
if((cljs.core.fn_QMARK_(o)) && (!((function (){var G__17341 = o;
if(G__17341){
var bit__4311__auto__ = (G__17341.cljs$lang$protocol_mask$partition0$ & (262144));
if((bit__4311__auto__) || (G__17341.cljs$core$IWithMeta$)){
return true;
} else {
if((!G__17341.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__17341);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__17341);
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
if((function (){var and__3618__auto__ = !((o == null));
if(and__3618__auto__){
var G__17345 = o;
if(G__17345){
var bit__4311__auto__ = (G__17345.cljs$lang$protocol_mask$partition0$ & (131072));
if((bit__4311__auto__) || (G__17345.cljs$core$IMeta$)){
return true;
} else {
if((!G__17345.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__17345);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__17345);
}
} else {
return and__3618__auto__;
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
var G__17348__delegate = function (coll,k,ks){
while(true){
if((coll == null)){
return null;
} else {
var ret = disj.cljs$core$IFn$_invoke$arity$2(coll,k);
if(cljs.core.truth_(ks)){
var G__17349 = ret;
var G__17350 = cljs.core.first(ks);
var G__17351 = cljs.core.next(ks);
coll = G__17349;
k = G__17350;
ks = G__17351;
continue;
} else {
return ret;
}
}
break;
}
};
var G__17348 = function (coll,k,var_args){
var ks = null;
if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17348__delegate.call(this,coll,k,ks);};
G__17348.cljs$lang$maxFixedArity = 2;
G__17348.cljs$lang$applyTo = (function (arglist__17352){
var coll = cljs.core.first(arglist__17352);
arglist__17352 = cljs.core.next(arglist__17352);
var k = cljs.core.first(arglist__17352);
var ks = cljs.core.rest(arglist__17352);
return G__17348__delegate(coll,k,ks);
});
G__17348.cljs$core$IFn$_invoke$arity$variadic = G__17348__delegate;
return G__17348;
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
var G__17354 = x;
if(G__17354){
var bit__4311__auto__ = (G__17354.cljs$lang$protocol_mask$partition0$ & (8));
if((bit__4311__auto__) || (G__17354.cljs$core$ICollection$)){
return true;
} else {
if((!G__17354.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ICollection,G__17354);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ICollection,G__17354);
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
var G__17356 = x;
if(G__17356){
var bit__4311__auto__ = (G__17356.cljs$lang$protocol_mask$partition0$ & (4096));
if((bit__4311__auto__) || (G__17356.cljs$core$ISet$)){
return true;
} else {
if((!G__17356.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISet,G__17356);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISet,G__17356);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__17358 = x;
if(G__17358){
var bit__4311__auto__ = (G__17358.cljs$lang$protocol_mask$partition0$ & (512));
if((bit__4311__auto__) || (G__17358.cljs$core$IAssociative$)){
return true;
} else {
if((!G__17358.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAssociative,G__17358);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAssociative,G__17358);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__17360 = x;
if(G__17360){
var bit__4311__auto__ = (G__17360.cljs$lang$protocol_mask$partition0$ & (16777216));
if((bit__4311__auto__) || (G__17360.cljs$core$ISequential$)){
return true;
} else {
if((!G__17360.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,G__17360);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,G__17360);
}
});
/**
* Returns true if coll satisfies ISorted
*/
cljs.core.sorted_QMARK_ = (function sorted_QMARK_(x){
var G__17362 = x;
if(G__17362){
var bit__4311__auto__ = (G__17362.cljs$lang$protocol_mask$partition0$ & (268435456));
if((bit__4311__auto__) || (G__17362.cljs$core$ISorted$)){
return true;
} else {
if((!G__17362.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISorted,G__17362);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISorted,G__17362);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__17364 = x;
if(G__17364){
var bit__4311__auto__ = (G__17364.cljs$lang$protocol_mask$partition0$ & (524288));
if((bit__4311__auto__) || (G__17364.cljs$core$IReduce$)){
return true;
} else {
if((!G__17364.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,G__17364);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,G__17364);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null)){
return false;
} else {
var G__17366 = x;
if(G__17366){
var bit__4311__auto__ = (G__17366.cljs$lang$protocol_mask$partition0$ & (1024));
if((bit__4311__auto__) || (G__17366.cljs$core$IMap$)){
return true;
} else {
if((!G__17366.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMap,G__17366);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMap,G__17366);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__17368 = x;
if(G__17368){
var bit__4311__auto__ = (G__17368.cljs$lang$protocol_mask$partition0$ & (16384));
if((bit__4311__auto__) || (G__17368.cljs$core$IVector$)){
return true;
} else {
if((!G__17368.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IVector,G__17368);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IVector,G__17368);
}
});

cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__17370 = x;
if(G__17370){
var bit__4304__auto__ = (G__17370.cljs$lang$protocol_mask$partition1$ & (512));
if((bit__4304__auto__) || (G__17370.cljs$core$IChunkedSeq$)){
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
var obj17376 = {};
return obj17376;
});
var js_obj__1 = (function() { 
var G__17379__delegate = function (keyvals){
var G__17377 = goog.object.create;
var G__17378 = keyvals;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__17377,G__17378) : cljs.core.apply.call(null,G__17377,G__17378));
};
var G__17379 = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__17379__delegate.call(this,keyvals);};
G__17379.cljs$lang$maxFixedArity = 0;
G__17379.cljs$lang$applyTo = (function (arglist__17380){
var keyvals = cljs.core.seq(arglist__17380);
return G__17379__delegate(keyvals);
});
G__17379.cljs$core$IFn$_invoke$arity$variadic = G__17379__delegate;
return G__17379;
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
var G__17383_17385 = obj;
var G__17384_17386 = ((function (G__17383_17385,keys){
return (function (val,key,obj__$1){
return keys.push(key);
});})(G__17383_17385,keys))
;
goog.object.forEach(G__17383_17385,G__17384_17386);

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

var G__17387 = (i__$1 + (1));
var G__17388 = (j__$1 + (1));
var G__17389 = (len__$1 - (1));
i__$1 = G__17387;
j__$1 = G__17388;
len__$1 = G__17389;
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

var G__17390 = (i__$1 - (1));
var G__17391 = (j__$1 - (1));
var G__17392 = (len__$1 - (1));
i__$1 = G__17390;
j__$1 = G__17391;
len__$1 = G__17392;
continue;
}
break;
}
});
cljs.core.lookup_sentinel = (function (){var obj17394 = {};
return obj17394;
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
var G__17396 = s;
if(G__17396){
var bit__4311__auto__ = (G__17396.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4311__auto__) || (G__17396.cljs$core$ISeq$)){
return true;
} else {
if((!G__17396.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__17396);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__17396);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__17398 = s;
if(G__17398){
var bit__4311__auto__ = (G__17398.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4311__auto__) || (G__17398.cljs$core$ISeqable$)){
return true;
} else {
if((!G__17398.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__17398);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__17398);
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
var or__3630__auto__ = cljs.core.fn_QMARK_(f);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var G__17402 = f;
if(G__17402){
var bit__4311__auto__ = (G__17402.cljs$lang$protocol_mask$partition0$ & (1));
if((bit__4311__auto__) || (G__17402.cljs$core$IFn$)){
return true;
} else {
if((!G__17402.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IFn,G__17402);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IFn,G__17402);
}
}
});
/**
* Returns true if n is an integer.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
return (typeof n === 'number') && (cljs.core.not((function (){var G__17415 = n;
return isNaN(G__17415);
})())) && (!((n === Infinity))) && (((function (){var G__17416 = n;
return parseFloat(G__17416);
})() === (function (){var G__17417 = n;
var G__17418 = (10);
return parseInt(G__17417,G__17418);
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
var G__17419__delegate = function (x,y,more){
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
var G__17420 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,x__$1);
var G__17421 = etc;
s = G__17420;
xs = G__17421;
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
var G__17419 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17419__delegate.call(this,x,y,more);};
G__17419.cljs$lang$maxFixedArity = 2;
G__17419.cljs$lang$applyTo = (function (arglist__17422){
var x = cljs.core.first(arglist__17422);
arglist__17422 = cljs.core.next(arglist__17422);
var y = cljs.core.first(arglist__17422);
var more = cljs.core.rest(arglist__17422);
return G__17419__delegate(x,y,more);
});
G__17419.cljs$core$IFn$_invoke$arity$variadic = G__17419__delegate;
return G__17419;
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
* Coerces coll to a (possibly empty) sequence, if it is not already
* one. Will not force a lazy seq. (sequence nil) yields ()
*/
cljs.core.sequence = (function sequence(coll){
if(cljs.core.seq_QMARK_(coll)){
return coll;
} else {
var or__3630__auto__ = cljs.core.seq(coll);
if(or__3630__auto__){
return or__3630__auto__;
} else {
return cljs.core.List.EMPTY;
}
}
});
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
if((function (){var G__17426 = x;
if(G__17426){
var bit__4304__auto__ = (G__17426.cljs$lang$protocol_mask$partition1$ & (2048));
if((bit__4304__auto__) || (G__17426.cljs$core$IComparable$)){
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
var G__17427 = x;
var G__17428 = y;
return goog.array.defaultCompare(G__17427,G__17428);
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
var G__17433 = xs;
var G__17434 = ys;
var G__17435 = len;
var G__17436 = (n + (1));
xs = G__17433;
ys = G__17434;
len = G__17435;
n = G__17436;
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
var r = (function (){var G__17441 = x;
var G__17442 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17441,G__17442) : f.call(null,G__17441,G__17442));
})();
if(typeof r === 'number'){
return r;
} else {
if(cljs.core.truth_(r)){
return (-1);
} else {
if(cljs.core.truth_((function (){var G__17443 = y;
var G__17444 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17443,G__17444) : f.call(null,G__17443,G__17444));
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
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq(coll)){
var a = (function (){var G__17450 = coll;
return (cljs.core.to_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.to_array.cljs$core$IFn$_invoke$arity$1(G__17450) : cljs.core.to_array.call(null,G__17450));
})();
var G__17451_17453 = a;
var G__17452_17454 = cljs.core.fn__GT_comparator(comp);
goog.array.stableSort(G__17451_17453,G__17452_17454);

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
return cljs.core.fn__GT_comparator(comp).call(null,(function (){var G__17460 = x;
return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__17460) : keyfn.call(null,G__17460));
})(),(function (){var G__17461 = y;
return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__17461) : keyfn.call(null,G__17461));
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
var G__17467 = f;
var G__17468 = cljs.core.first(s);
var G__17469 = cljs.core.next(s);
return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(G__17467,G__17468,G__17469) : cljs.core.reduce.call(null,G__17467,G__17468,G__17469));
} else {
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__$1 = val;
var coll__$1 = cljs.core.seq(coll);
while(true){
if(coll__$1){
var nval = (function (){var G__17470 = val__$1;
var G__17471 = cljs.core.first(coll__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17470,G__17471) : f.call(null,G__17470,G__17471));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__17472 = nval;
var G__17473 = cljs.core.next(coll__$1);
val__$1 = G__17472;
coll__$1 = G__17473;
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
var a = (function (){var G__17477 = coll;
return (cljs.core.to_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.to_array.cljs$core$IFn$_invoke$arity$1(G__17477) : cljs.core.to_array.call(null,G__17477));
})();
var G__17478_17480 = a;
goog.array.shuffle(G__17478_17480);

var G__17479 = a;
return (cljs.core.vec.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vec.cljs$core$IFn$_invoke$arity$1(G__17479) : cljs.core.vec.call(null,G__17479));
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
if((function (){var G__17483 = coll;
if(G__17483){
var bit__4304__auto__ = (G__17483.cljs$lang$protocol_mask$partition0$ & (524288));
if((bit__4304__auto__) || (G__17483.cljs$core$IReduce$)){
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
if((function (){var G__17484 = coll;
if(G__17484){
var bit__4304__auto__ = (G__17484.cljs$lang$protocol_mask$partition0$ & (524288));
if((bit__4304__auto__) || (G__17484.cljs$core$IReduce$)){
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
var G__17493 = null;
var G__17493__0 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__17493__1 = (function (x){
var G__17490 = x;
return (cf.cljs$core$IFn$_invoke$arity$1 ? cf.cljs$core$IFn$_invoke$arity$1(G__17490) : cf.call(null,G__17490));
});
var G__17493__2 = (function (x,y){
var G__17491 = x;
var G__17492 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17491,G__17492) : f.call(null,G__17491,G__17492));
});
G__17493 = function(x,y){
switch(arguments.length){
case 0:
return G__17493__0.call(this);
case 1:
return G__17493__1.call(this,x);
case 2:
return G__17493__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17493.cljs$core$IFn$_invoke$arity$0 = G__17493__0;
G__17493.cljs$core$IFn$_invoke$arity$1 = G__17493__1;
G__17493.cljs$core$IFn$_invoke$arity$2 = G__17493__2;
return G__17493;
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
var f__$1 = (function (){var G__17500 = f;
return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__17500) : xform.call(null,G__17500));
})();
var ret = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f__$1,init,coll);
var G__17501 = ret;
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__17501) : f__$1.call(null,G__17501));
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
var G__17502__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_PLUS_,(x + y),more);
};
var G__17502 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17502__delegate.call(this,x,y,more);};
G__17502.cljs$lang$maxFixedArity = 2;
G__17502.cljs$lang$applyTo = (function (arglist__17503){
var x = cljs.core.first(arglist__17503);
arglist__17503 = cljs.core.next(arglist__17503);
var y = cljs.core.first(arglist__17503);
var more = cljs.core.rest(arglist__17503);
return G__17502__delegate(x,y,more);
});
G__17502.cljs$core$IFn$_invoke$arity$variadic = G__17502__delegate;
return G__17502;
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
var G__17504__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_,(x - y),more);
};
var G__17504 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17504__delegate.call(this,x,y,more);};
G__17504.cljs$lang$maxFixedArity = 2;
G__17504.cljs$lang$applyTo = (function (arglist__17505){
var x = cljs.core.first(arglist__17505);
arglist__17505 = cljs.core.next(arglist__17505);
var y = cljs.core.first(arglist__17505);
var more = cljs.core.rest(arglist__17505);
return G__17504__delegate(x,y,more);
});
G__17504.cljs$core$IFn$_invoke$arity$variadic = G__17504__delegate;
return G__17504;
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
var G__17506__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_STAR_,(x * y),more);
};
var G__17506 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17506__delegate.call(this,x,y,more);};
G__17506.cljs$lang$maxFixedArity = 2;
G__17506.cljs$lang$applyTo = (function (arglist__17507){
var x = cljs.core.first(arglist__17507);
arglist__17507 = cljs.core.next(arglist__17507);
var y = cljs.core.first(arglist__17507);
var more = cljs.core.rest(arglist__17507);
return G__17506__delegate(x,y,more);
});
G__17506.cljs$core$IFn$_invoke$arity$variadic = G__17506__delegate;
return G__17506;
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
var G__17512__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_SLASH_,_SLASH_.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__17512 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17512__delegate.call(this,x,y,more);};
G__17512.cljs$lang$maxFixedArity = 2;
G__17512.cljs$lang$applyTo = (function (arglist__17513){
var x = cljs.core.first(arglist__17513);
arglist__17513 = cljs.core.next(arglist__17513);
var y = cljs.core.first(arglist__17513);
var more = cljs.core.rest(arglist__17513);
return G__17512__delegate(x,y,more);
});
G__17512.cljs$core$IFn$_invoke$arity$variadic = G__17512__delegate;
return G__17512;
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
var G__17514__delegate = function (x,y,more){
while(true){
if((x < y)){
if(cljs.core.next(more)){
var G__17515 = y;
var G__17516 = cljs.core.first(more);
var G__17517 = cljs.core.next(more);
x = G__17515;
y = G__17516;
more = G__17517;
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
var G__17514 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17514__delegate.call(this,x,y,more);};
G__17514.cljs$lang$maxFixedArity = 2;
G__17514.cljs$lang$applyTo = (function (arglist__17518){
var x = cljs.core.first(arglist__17518);
arglist__17518 = cljs.core.next(arglist__17518);
var y = cljs.core.first(arglist__17518);
var more = cljs.core.rest(arglist__17518);
return G__17514__delegate(x,y,more);
});
G__17514.cljs$core$IFn$_invoke$arity$variadic = G__17514__delegate;
return G__17514;
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
var G__17519__delegate = function (x,y,more){
while(true){
if((x <= y)){
if(cljs.core.next(more)){
var G__17520 = y;
var G__17521 = cljs.core.first(more);
var G__17522 = cljs.core.next(more);
x = G__17520;
y = G__17521;
more = G__17522;
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
var G__17519 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17519__delegate.call(this,x,y,more);};
G__17519.cljs$lang$maxFixedArity = 2;
G__17519.cljs$lang$applyTo = (function (arglist__17523){
var x = cljs.core.first(arglist__17523);
arglist__17523 = cljs.core.next(arglist__17523);
var y = cljs.core.first(arglist__17523);
var more = cljs.core.rest(arglist__17523);
return G__17519__delegate(x,y,more);
});
G__17519.cljs$core$IFn$_invoke$arity$variadic = G__17519__delegate;
return G__17519;
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
var G__17524__delegate = function (x,y,more){
while(true){
if((x > y)){
if(cljs.core.next(more)){
var G__17525 = y;
var G__17526 = cljs.core.first(more);
var G__17527 = cljs.core.next(more);
x = G__17525;
y = G__17526;
more = G__17527;
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
var G__17524 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17524__delegate.call(this,x,y,more);};
G__17524.cljs$lang$maxFixedArity = 2;
G__17524.cljs$lang$applyTo = (function (arglist__17528){
var x = cljs.core.first(arglist__17528);
arglist__17528 = cljs.core.next(arglist__17528);
var y = cljs.core.first(arglist__17528);
var more = cljs.core.rest(arglist__17528);
return G__17524__delegate(x,y,more);
});
G__17524.cljs$core$IFn$_invoke$arity$variadic = G__17524__delegate;
return G__17524;
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
var G__17529__delegate = function (x,y,more){
while(true){
if((x >= y)){
if(cljs.core.next(more)){
var G__17530 = y;
var G__17531 = cljs.core.first(more);
var G__17532 = cljs.core.next(more);
x = G__17530;
y = G__17531;
more = G__17532;
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
var G__17529 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17529__delegate.call(this,x,y,more);};
G__17529.cljs$lang$maxFixedArity = 2;
G__17529.cljs$lang$applyTo = (function (arglist__17533){
var x = cljs.core.first(arglist__17533);
arglist__17533 = cljs.core.next(arglist__17533);
var y = cljs.core.first(arglist__17533);
var more = cljs.core.rest(arglist__17533);
return G__17529__delegate(x,y,more);
});
G__17529.cljs$core$IFn$_invoke$arity$variadic = G__17529__delegate;
return G__17529;
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
var x__3947__auto__ = x;
var y__3948__auto__ = y;
return ((x__3947__auto__ > y__3948__auto__) ? x__3947__auto__ : y__3948__auto__);
});
var max__3 = (function() { 
var G__17534__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(max,(function (){var x__3947__auto__ = x;
var y__3948__auto__ = y;
return ((x__3947__auto__ > y__3948__auto__) ? x__3947__auto__ : y__3948__auto__);
})(),more);
};
var G__17534 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17534__delegate.call(this,x,y,more);};
G__17534.cljs$lang$maxFixedArity = 2;
G__17534.cljs$lang$applyTo = (function (arglist__17535){
var x = cljs.core.first(arglist__17535);
arglist__17535 = cljs.core.next(arglist__17535);
var y = cljs.core.first(arglist__17535);
var more = cljs.core.rest(arglist__17535);
return G__17534__delegate(x,y,more);
});
G__17534.cljs$core$IFn$_invoke$arity$variadic = G__17534__delegate;
return G__17534;
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
var x__3954__auto__ = x;
var y__3955__auto__ = y;
return ((x__3954__auto__ < y__3955__auto__) ? x__3954__auto__ : y__3955__auto__);
});
var min__3 = (function() { 
var G__17536__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(min,(function (){var x__3954__auto__ = x;
var y__3955__auto__ = y;
return ((x__3954__auto__ < y__3955__auto__) ? x__3954__auto__ : y__3955__auto__);
})(),more);
};
var G__17536 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17536__delegate.call(this,x,y,more);};
G__17536.cljs$lang$maxFixedArity = 2;
G__17536.cljs$lang$applyTo = (function (arglist__17537){
var x = cljs.core.first(arglist__17537);
arglist__17537 = cljs.core.next(arglist__17537);
var y = cljs.core.first(arglist__17537);
var more = cljs.core.rest(arglist__17537);
return G__17536__delegate(x,y,more);
});
G__17536.cljs$core$IFn$_invoke$arity$variadic = G__17536__delegate;
return G__17536;
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
var G__17538__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_add,(x + y),more);
};
var G__17538 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17538__delegate.call(this,x,y,more);};
G__17538.cljs$lang$maxFixedArity = 2;
G__17538.cljs$lang$applyTo = (function (arglist__17539){
var x = cljs.core.first(arglist__17539);
arglist__17539 = cljs.core.next(arglist__17539);
var y = cljs.core.first(arglist__17539);
var more = cljs.core.rest(arglist__17539);
return G__17538__delegate(x,y,more);
});
G__17538.cljs$core$IFn$_invoke$arity$variadic = G__17538__delegate;
return G__17538;
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
var G__17540__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_add_int,(x + y),more);
};
var G__17540 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17540__delegate.call(this,x,y,more);};
G__17540.cljs$lang$maxFixedArity = 2;
G__17540.cljs$lang$applyTo = (function (arglist__17541){
var x = cljs.core.first(arglist__17541);
arglist__17541 = cljs.core.next(arglist__17541);
var y = cljs.core.first(arglist__17541);
var more = cljs.core.rest(arglist__17541);
return G__17540__delegate(x,y,more);
});
G__17540.cljs$core$IFn$_invoke$arity$variadic = G__17540__delegate;
return G__17540;
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
var G__17546__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_divide_int,unchecked_divide_int.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__17546 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17546__delegate.call(this,x,y,more);};
G__17546.cljs$lang$maxFixedArity = 2;
G__17546.cljs$lang$applyTo = (function (arglist__17547){
var x = cljs.core.first(arglist__17547);
arglist__17547 = cljs.core.next(arglist__17547);
var y = cljs.core.first(arglist__17547);
var more = cljs.core.rest(arglist__17547);
return G__17546__delegate(x,y,more);
});
G__17546.cljs$core$IFn$_invoke$arity$variadic = G__17546__delegate;
return G__17546;
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
var G__17548__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_multiply,(x * y),more);
};
var G__17548 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17548__delegate.call(this,x,y,more);};
G__17548.cljs$lang$maxFixedArity = 2;
G__17548.cljs$lang$applyTo = (function (arglist__17549){
var x = cljs.core.first(arglist__17549);
arglist__17549 = cljs.core.next(arglist__17549);
var y = cljs.core.first(arglist__17549);
var more = cljs.core.rest(arglist__17549);
return G__17548__delegate(x,y,more);
});
G__17548.cljs$core$IFn$_invoke$arity$variadic = G__17548__delegate;
return G__17548;
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
var G__17550__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_multiply_int,(x * y),more);
};
var G__17550 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17550__delegate.call(this,x,y,more);};
G__17550.cljs$lang$maxFixedArity = 2;
G__17550.cljs$lang$applyTo = (function (arglist__17551){
var x = cljs.core.first(arglist__17551);
arglist__17551 = cljs.core.next(arglist__17551);
var y = cljs.core.first(arglist__17551);
var more = cljs.core.rest(arglist__17551);
return G__17550__delegate(x,y,more);
});
G__17550.cljs$core$IFn$_invoke$arity$variadic = G__17550__delegate;
return G__17550;
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
var G__17554 = x;
var G__17555 = n;
return (cljs.core.mod.cljs$core$IFn$_invoke$arity$2 ? cljs.core.mod.cljs$core$IFn$_invoke$arity$2(G__17554,G__17555) : cljs.core.mod.call(null,G__17554,G__17555));
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
var G__17556__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_subtract,(x - y),more);
};
var G__17556 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17556__delegate.call(this,x,y,more);};
G__17556.cljs$lang$maxFixedArity = 2;
G__17556.cljs$lang$applyTo = (function (arglist__17557){
var x = cljs.core.first(arglist__17557);
arglist__17557 = cljs.core.next(arglist__17557);
var y = cljs.core.first(arglist__17557);
var more = cljs.core.rest(arglist__17557);
return G__17556__delegate(x,y,more);
});
G__17556.cljs$core$IFn$_invoke$arity$variadic = G__17556__delegate;
return G__17556;
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
var G__17558__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_subtract_int,(x - y),more);
};
var G__17558 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17558__delegate.call(this,x,y,more);};
G__17558.cljs$lang$maxFixedArity = 2;
G__17558.cljs$lang$applyTo = (function (arglist__17559){
var x = cljs.core.first(arglist__17559);
arglist__17559 = cljs.core.next(arglist__17559);
var y = cljs.core.first(arglist__17559);
var more = cljs.core.rest(arglist__17559);
return G__17558__delegate(x,y,more);
});
G__17558.cljs$core$IFn$_invoke$arity$variadic = G__17558__delegate;
return G__17558;
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
var G__17562 = q;
return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__17562) : Math.floor.call(null,G__17562));
} else {
var G__17563 = q;
return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(G__17563) : Math.ceil.call(null,G__17563));
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
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
});
var rand__1 = (function (n){
return (n * rand.cljs$core$IFn$_invoke$arity$0());
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
return cljs.core.fix(cljs.core.rand.cljs$core$IFn$_invoke$arity$1(n));
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
var G__17568__delegate = function (x,y,more){
while(true){
if(_EQ__EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
if(cljs.core.next(more)){
var G__17569 = y;
var G__17570 = cljs.core.first(more);
var G__17571 = cljs.core.next(more);
x = G__17569;
y = G__17570;
more = G__17571;
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
var G__17568 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17568__delegate.call(this,x,y,more);};
G__17568.cljs$lang$maxFixedArity = 2;
G__17568.cljs$lang$applyTo = (function (arglist__17572){
var x = cljs.core.first(arglist__17572);
arglist__17572 = cljs.core.next(arglist__17572);
var y = cljs.core.first(arglist__17572);
var more = cljs.core.rest(arglist__17572);
return G__17568__delegate(x,y,more);
});
G__17568.cljs$core$IFn$_invoke$arity$variadic = G__17568__delegate;
return G__17568;
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
var G__17573 = (n__$1 - (1));
var G__17574 = cljs.core.next(xs);
n__$1 = G__17573;
xs = G__17574;
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
var G__17578 = x;
return goog.string.buildString(G__17578);
}
});
var str__2 = (function() { 
var G__17579__delegate = function (x,ys){
var sb = (new goog.string.StringBuffer(str.cljs$core$IFn$_invoke$arity$1(x)));
var more = ys;
while(true){
if(cljs.core.truth_(more)){
var G__17580 = sb.append(str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(more)));
var G__17581 = cljs.core.next(more);
sb = G__17580;
more = G__17581;
continue;
} else {
return sb.toString();
}
break;
}
};
var G__17579 = function (x,var_args){
var ys = null;
if (arguments.length > 1) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__17579__delegate.call(this,x,ys);};
G__17579.cljs$lang$maxFixedArity = 1;
G__17579.cljs$lang$applyTo = (function (arglist__17582){
var x = cljs.core.first(arglist__17582);
var ys = cljs.core.rest(arglist__17582);
return G__17579__delegate(x,ys);
});
G__17579.cljs$core$IFn$_invoke$arity$variadic = G__17579__delegate;
return G__17579;
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
var G__17583 = cljs.core.next(xs);
var G__17584 = cljs.core.next(ys);
xs = G__17583;
ys = G__17584;
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
var G__17585 = cljs.core.hash_combine(res,cljs.core.hash(cljs.core.first(s)));
var G__17586 = cljs.core.next(s);
res = G__17585;
s = G__17586;
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
var G__17591 = ((h + (cljs.core.hash((function (){var G__17589 = e;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__17589) : cljs.core.key.call(null,G__17589));
})()) ^ cljs.core.hash((function (){var G__17590 = e;
return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__17590) : cljs.core.val.call(null,G__17590));
})()))) % (4503599627370496));
var G__17592 = cljs.core.next(s);
h = G__17591;
s = G__17592;
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
var G__17593 = ((h + cljs.core.hash(e)) % (4503599627370496));
var G__17594 = cljs.core.next(s__$1);
h = G__17593;
s__$1 = G__17594;
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
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var seq__17605_17615 = cljs.core.seq(fn_map);
var chunk__17606_17616 = null;
var count__17607_17617 = (0);
var i__17608_17618 = (0);
while(true){
if((i__17608_17618 < count__17607_17617)){
var vec__17609_17619 = chunk__17606_17616.cljs$core$IIndexed$_nth$arity$2(null,i__17608_17618);
var key_name_17620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17609_17619,(0),null);
var f_17621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17609_17619,(1),null);
var str_name_17622 = (function (){var G__17610 = key_name_17620;
return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__17610) : cljs.core.name.call(null,G__17610));
})();
(obj[str_name_17622] = f_17621);

var G__17623 = seq__17605_17615;
var G__17624 = chunk__17606_17616;
var G__17625 = count__17607_17617;
var G__17626 = (i__17608_17618 + (1));
seq__17605_17615 = G__17623;
chunk__17606_17616 = G__17624;
count__17607_17617 = G__17625;
i__17608_17618 = G__17626;
continue;
} else {
var temp__4126__auto___17627 = cljs.core.seq(seq__17605_17615);
if(temp__4126__auto___17627){
var seq__17605_17628__$1 = temp__4126__auto___17627;
if(cljs.core.chunked_seq_QMARK_(seq__17605_17628__$1)){
var c__4417__auto___17629 = (function (){var G__17611 = seq__17605_17628__$1;
return (cljs.core.chunk_first.cljs$core$IFn$_invoke$arity$1 ? cljs.core.chunk_first.cljs$core$IFn$_invoke$arity$1(G__17611) : cljs.core.chunk_first.call(null,G__17611));
})();
var G__17630 = (function (){var G__17612 = seq__17605_17628__$1;
return (cljs.core.chunk_rest.cljs$core$IFn$_invoke$arity$1 ? cljs.core.chunk_rest.cljs$core$IFn$_invoke$arity$1(G__17612) : cljs.core.chunk_rest.call(null,G__17612));
})();
var G__17631 = c__4417__auto___17629;
var G__17632 = cljs.core.count(c__4417__auto___17629);
var G__17633 = (0);
seq__17605_17615 = G__17630;
chunk__17606_17616 = G__17631;
count__17607_17617 = G__17632;
i__17608_17618 = G__17633;
continue;
} else {
var vec__17613_17634 = cljs.core.first(seq__17605_17628__$1);
var key_name_17635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17613_17634,(0),null);
var f_17636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17613_17634,(1),null);
var str_name_17637 = (function (){var G__17614 = key_name_17635;
return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__17614) : cljs.core.name.call(null,G__17614));
})();
(obj[str_name_17637] = f_17636);

var G__17638 = cljs.core.next(seq__17605_17628__$1);
var G__17639 = null;
var G__17640 = (0);
var G__17641 = (0);
seq__17605_17615 = G__17638;
chunk__17606_17616 = G__17639;
count__17607_17617 = G__17640;
i__17608_17618 = G__17641;
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
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
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

cljs.core.List.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/List");
});

cljs.core.__GT_List = (function __GT_List(meta,first,rest,count,__hash){
return (new cljs.core.List(meta,first,rest,count,__hash));
});

(cljs.core.List.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator(this__4608__auto__);
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

cljs.core.EmptyList.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/EmptyList");
});

cljs.core.__GT_EmptyList = (function __GT_EmptyList(meta){
return (new cljs.core.EmptyList(meta));
});

cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
(cljs.core.EmptyList.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator(this__4608__auto__);
}));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__17643 = coll;
if(G__17643){
var bit__4311__auto__ = (G__17643.cljs$lang$protocol_mask$partition0$ & (134217728));
if((bit__4311__auto__) || (G__17643.cljs$core$IReversible$)){
return true;
} else {
if((!G__17643.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IReversible,G__17643);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IReversible,G__17643);
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

var G__17644 = xs__$1.cljs$core$INext$_next$arity$1(null);
xs__$1 = G__17644;
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
var G__17645 = (i - (1));
var G__17646 = r.cljs$core$ICollection$_conj$arity$2(null,(arr[(i - (1))]));
i = G__17645;
r = G__17646;
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
list.cljs$lang$applyTo = (function (arglist__17647){
var xs = cljs.core.seq(arglist__17647);
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
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
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

cljs.core.Cons.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/Cons");
});

cljs.core.__GT_Cons = (function __GT_Cons(meta,first,rest,__hash){
return (new cljs.core.Cons(meta,first,rest,__hash));
});

(cljs.core.Cons.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator(this__4608__auto__);
}));
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3630__auto__ = (coll == null);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var G__17651 = coll;
if(G__17651){
var bit__4304__auto__ = (G__17651.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4304__auto__) || (G__17651.cljs$core$ISeq$)){
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
var G__17653 = x;
if(G__17653){
var bit__4311__auto__ = (G__17653.cljs$lang$protocol_mask$partition0$ & (33554432));
if((bit__4311__auto__) || (G__17653.cljs$core$IList$)){
return true;
} else {
if((!G__17653.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IList,G__17653);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IList,G__17653);
}
});
cljs.core.hash_keyword = (function hash_keyword(k){
return ((cljs.core.hash_symbol(k) + (2654435769)) | (0));
});
cljs.core.compare_keywords = (function compare_keywords(a,b){
if((a.fqn === b.fqn)){
return (0);
} else {
if(cljs.core.truth_((function (){var and__3618__auto__ = cljs.core.not(a.ns);
if(and__3618__auto__){
return b.ns;
} else {
return and__3618__auto__;
}
})())){
return (-1);
} else {
if(cljs.core.truth_(a.ns)){
if(cljs.core.not(b.ns)){
return (1);
} else {
var nsc = (function (){var G__17660 = a.ns;
var G__17661 = b.ns;
return goog.array.defaultCompare(G__17660,G__17661);
})();
if(((0) === nsc)){
var G__17662 = a.name;
var G__17663 = b.name;
return goog.array.defaultCompare(G__17662,G__17663);
} else {
return nsc;
}
}
} else {
var G__17664 = a.name;
var G__17665 = b.name;
return goog.array.defaultCompare(G__17664,G__17665);

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
var h__4051__auto__ = self__._hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_keyword(this$__$1);
self__._hash = h__4051__auto____$1;

return h__4051__auto____$1;
}
});

cljs.core.Keyword.prototype.call = (function() {
var G__17667 = null;
var G__17667__2 = (function (self__,coll){
var self__ = this;
var self____$1 = this;
var kw = self____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,kw);
});
var G__17667__3 = (function (self__,coll,not_found){
var self__ = this;
var self____$1 = this;
var kw = self____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,kw,not_found);
});
G__17667 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__17667__2.call(this,self__,coll);
case 3:
return G__17667__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17667.cljs$core$IFn$_invoke$arity$2 = G__17667__2;
G__17667.cljs$core$IFn$_invoke$arity$3 = G__17667__3;
return G__17667;
})()
;

cljs.core.Keyword.prototype.apply = (function (self__,args17666){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args17666)));
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

cljs.core.Keyword.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/Keyword");
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
if((function (){var G__17669 = x;
if(G__17669){
var bit__4304__auto__ = (G__17669.cljs$lang$protocol_mask$partition1$ & (4096));
if((bit__4304__auto__) || (G__17669.cljs$core$INamed$)){
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
return (new cljs.core.Keyword(cljs.core.namespace(name),(function (){var G__17671 = name;
return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__17671) : cljs.core.name.call(null,G__17671));
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
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
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
var G__17672 = ls.sval();
ls = G__17672;
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

cljs.core.LazySeq.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/LazySeq");
});

cljs.core.__GT_LazySeq = (function __GT_LazySeq(meta,fn,s,__hash){
return (new cljs.core.LazySeq(meta,fn,s,__hash));
});

(cljs.core.LazySeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator(this__4608__auto__);
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

cljs.core.ChunkBuffer.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/ChunkBuffer");
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

cljs.core.ArrayChunk.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/ArrayChunk");
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
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
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

cljs.core.ChunkedCons.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/ChunkedCons");
});

cljs.core.__GT_ChunkedCons = (function __GT_ChunkedCons(chunk,more,meta,__hash){
return (new cljs.core.ChunkedCons(chunk,more,meta,__hash));
});

(cljs.core.ChunkedCons.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator(this__4608__auto__);
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
if((function (){var G__17674 = s;
if(G__17674){
var bit__4304__auto__ = (G__17674.cljs$lang$protocol_mask$partition1$ & (1024));
if((bit__4304__auto__) || (G__17674.cljs$core$IChunkedNext$)){
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

var G__17675 = cljs.core.next(s__$1);
s__$1 = G__17675;
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
var i_17676 = (0);
var xs_17677 = cljs.core.seq(coll);
while(true){
if(xs_17677){
(ret[i_17676] = cljs.core.to_array(cljs.core.first(xs_17677)));

var G__17678 = (i_17676 + (1));
var G__17679 = cljs.core.next(xs_17677);
i_17676 = G__17678;
xs_17677 = G__17679;
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

var G__17682 = (i + (1));
var G__17683 = cljs.core.next(s__$1);
i = G__17682;
s__$1 = G__17683;
continue;
} else {
return a;
}
break;
}
} else {
var n__4517__auto___17684 = size;
var i_17685 = (0);
while(true){
if((i_17685 < n__4517__auto___17684)){
(a[i_17685] = init_val_or_seq);

var G__17686 = (i_17685 + (1));
i_17685 = G__17686;
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

var G__17689 = (i + (1));
var G__17690 = cljs.core.next(s__$1);
i = G__17689;
s__$1 = G__17690;
continue;
} else {
return a;
}
break;
}
} else {
var n__4517__auto___17691 = size;
var i_17692 = (0);
while(true){
if((i_17692 < n__4517__auto___17691)){
(a[i_17692] = init_val_or_seq);

var G__17693 = (i_17692 + (1));
i_17692 = G__17693;
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

var G__17696 = (i + (1));
var G__17697 = cljs.core.next(s__$1);
i = G__17696;
s__$1 = G__17697;
continue;
} else {
return a;
}
break;
}
} else {
var n__4517__auto___17698 = size;
var i_17699 = (0);
while(true){
if((i_17699 < n__4517__auto___17698)){
(a[i_17699] = init_val_or_seq);

var G__17700 = (i_17699 + (1));
i_17699 = G__17700;
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

var G__17703 = (i + (1));
var G__17704 = cljs.core.next(s__$1);
i = G__17703;
s__$1 = G__17704;
continue;
} else {
return a;
}
break;
}
} else {
var n__4517__auto___17705 = size;
var i_17706 = (0);
while(true){
if((i_17706 < n__4517__auto___17705)){
(a[i_17706] = init_val_or_seq);

var G__17707 = (i_17706 + (1));
i_17706 = G__17707;
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
var G__17708 = cljs.core.next(s__$1);
var G__17709 = (i - (1));
var G__17710 = (sum + (1));
s__$1 = G__17708;
i = G__17709;
sum = G__17710;
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
var G__17730__delegate = function (x,y,zs){
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
var G__17730 = function (x,y,var_args){
var zs = null;
if (arguments.length > 2) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17730__delegate.call(this,x,y,zs);};
G__17730.cljs$lang$maxFixedArity = 2;
G__17730.cljs$lang$applyTo = (function (arglist__17731){
var x = cljs.core.first(arglist__17731);
arglist__17731 = cljs.core.next(arglist__17731);
var y = cljs.core.first(arglist__17731);
var zs = cljs.core.rest(arglist__17731);
return G__17730__delegate(x,y,zs);
});
G__17730.cljs$core$IFn$_invoke$arity$variadic = G__17730__delegate;
return G__17730;
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
var G__17732__delegate = function (a,b,c,d,more){
return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(more)))));
};
var G__17732 = function (a,b,c,d,var_args){
var more = null;
if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__17732__delegate.call(this,a,b,c,d,more);};
G__17732.cljs$lang$maxFixedArity = 4;
G__17732.cljs$lang$applyTo = (function (arglist__17733){
var a = cljs.core.first(arglist__17733);
arglist__17733 = cljs.core.next(arglist__17733);
var b = cljs.core.first(arglist__17733);
arglist__17733 = cljs.core.next(arglist__17733);
var c = cljs.core.first(arglist__17733);
arglist__17733 = cljs.core.next(arglist__17733);
var d = cljs.core.first(arglist__17733);
var more = cljs.core.rest(arglist__17733);
return G__17732__delegate(a,b,c,d,more);
});
G__17732.cljs$core$IFn$_invoke$arity$variadic = G__17732__delegate;
return G__17732;
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
var G__17734__delegate = function (tcoll,val,vals){
while(true){
var ntcoll = cljs.core._conj_BANG_(tcoll,val);
if(cljs.core.truth_(vals)){
var G__17735 = ntcoll;
var G__17736 = cljs.core.first(vals);
var G__17737 = cljs.core.next(vals);
tcoll = G__17735;
val = G__17736;
vals = G__17737;
continue;
} else {
return ntcoll;
}
break;
}
};
var G__17734 = function (tcoll,val,var_args){
var vals = null;
if (arguments.length > 2) {
  vals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17734__delegate.call(this,tcoll,val,vals);};
G__17734.cljs$lang$maxFixedArity = 2;
G__17734.cljs$lang$applyTo = (function (arglist__17738){
var tcoll = cljs.core.first(arglist__17738);
arglist__17738 = cljs.core.next(arglist__17738);
var val = cljs.core.first(arglist__17738);
var vals = cljs.core.rest(arglist__17738);
return G__17734__delegate(tcoll,val,vals);
});
G__17734.cljs$core$IFn$_invoke$arity$variadic = G__17734__delegate;
return G__17734;
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
var G__17739__delegate = function (tcoll,key,val,kvs){
while(true){
var ntcoll = cljs.core._assoc_BANG_(tcoll,key,val);
if(cljs.core.truth_(kvs)){
var G__17740 = ntcoll;
var G__17741 = cljs.core.first(kvs);
var G__17742 = cljs.core.second(kvs);
var G__17743 = cljs.core.nnext(kvs);
tcoll = G__17740;
key = G__17741;
val = G__17742;
kvs = G__17743;
continue;
} else {
return ntcoll;
}
break;
}
};
var G__17739 = function (tcoll,key,val,var_args){
var kvs = null;
if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__17739__delegate.call(this,tcoll,key,val,kvs);};
G__17739.cljs$lang$maxFixedArity = 3;
G__17739.cljs$lang$applyTo = (function (arglist__17744){
var tcoll = cljs.core.first(arglist__17744);
arglist__17744 = cljs.core.next(arglist__17744);
var key = cljs.core.first(arglist__17744);
arglist__17744 = cljs.core.next(arglist__17744);
var val = cljs.core.first(arglist__17744);
var kvs = cljs.core.rest(arglist__17744);
return G__17739__delegate(tcoll,key,val,kvs);
});
G__17739.cljs$core$IFn$_invoke$arity$variadic = G__17739__delegate;
return G__17739;
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
var G__17745__delegate = function (tcoll,key,ks){
while(true){
var ntcoll = cljs.core._dissoc_BANG_(tcoll,key);
if(cljs.core.truth_(ks)){
var G__17746 = ntcoll;
var G__17747 = cljs.core.first(ks);
var G__17748 = cljs.core.next(ks);
tcoll = G__17746;
key = G__17747;
ks = G__17748;
continue;
} else {
return ntcoll;
}
break;
}
};
var G__17745 = function (tcoll,key,var_args){
var ks = null;
if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17745__delegate.call(this,tcoll,key,ks);};
G__17745.cljs$lang$maxFixedArity = 2;
G__17745.cljs$lang$applyTo = (function (arglist__17749){
var tcoll = cljs.core.first(arglist__17749);
arglist__17749 = cljs.core.next(arglist__17749);
var key = cljs.core.first(arglist__17749);
var ks = cljs.core.rest(arglist__17749);
return G__17745__delegate(tcoll,key,ks);
});
G__17745.cljs$core$IFn$_invoke$arity$variadic = G__17745__delegate;
return G__17745;
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
var G__17750__delegate = function (tcoll,val,vals){
while(true){
var ntcoll = cljs.core._disjoin_BANG_(tcoll,val);
if(cljs.core.truth_(vals)){
var G__17751 = ntcoll;
var G__17752 = cljs.core.first(vals);
var G__17753 = cljs.core.next(vals);
tcoll = G__17751;
val = G__17752;
vals = G__17753;
continue;
} else {
return ntcoll;
}
break;
}
};
var G__17750 = function (tcoll,val,var_args){
var vals = null;
if (arguments.length > 2) {
  vals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17750__delegate.call(this,tcoll,val,vals);};
G__17750.cljs$lang$maxFixedArity = 2;
G__17750.cljs$lang$applyTo = (function (arglist__17754){
var tcoll = cljs.core.first(arglist__17754);
arglist__17754 = cljs.core.next(arglist__17754);
var val = cljs.core.first(arglist__17754);
var vals = cljs.core.rest(arglist__17754);
return G__17750__delegate(tcoll,val,vals);
});
G__17750.cljs$core$IFn$_invoke$arity$variadic = G__17750__delegate;
return G__17750;
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
var a4561 = cljs.core._first(args__$1);
var args__$2 = cljs.core._rest(args__$1);
if((argc === (1))){
if(f.cljs$core$IFn$_invoke$arity$1){
return f.cljs$core$IFn$_invoke$arity$1(a4561);
} else {
var G__17965 = a4561;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17965) : f.call(null,G__17965));
}
} else {
var b4562 = cljs.core._first(args__$2);
var args__$3 = cljs.core._rest(args__$2);
if((argc === (2))){
if(f.cljs$core$IFn$_invoke$arity$2){
return f.cljs$core$IFn$_invoke$arity$2(a4561,b4562);
} else {
var G__17966 = a4561;
var G__17967 = b4562;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17966,G__17967) : f.call(null,G__17966,G__17967));
}
} else {
var c4563 = cljs.core._first(args__$3);
var args__$4 = cljs.core._rest(args__$3);
if((argc === (3))){
if(f.cljs$core$IFn$_invoke$arity$3){
return f.cljs$core$IFn$_invoke$arity$3(a4561,b4562,c4563);
} else {
var G__17968 = a4561;
var G__17969 = b4562;
var G__17970 = c4563;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__17968,G__17969,G__17970) : f.call(null,G__17968,G__17969,G__17970));
}
} else {
var d4564 = cljs.core._first(args__$4);
var args__$5 = cljs.core._rest(args__$4);
if((argc === (4))){
if(f.cljs$core$IFn$_invoke$arity$4){
return f.cljs$core$IFn$_invoke$arity$4(a4561,b4562,c4563,d4564);
} else {
var G__17971 = a4561;
var G__17972 = b4562;
var G__17973 = c4563;
var G__17974 = d4564;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__17971,G__17972,G__17973,G__17974) : f.call(null,G__17971,G__17972,G__17973,G__17974));
}
} else {
var e4565 = cljs.core._first(args__$5);
var args__$6 = cljs.core._rest(args__$5);
if((argc === (5))){
if(f.cljs$core$IFn$_invoke$arity$5){
return f.cljs$core$IFn$_invoke$arity$5(a4561,b4562,c4563,d4564,e4565);
} else {
var G__17975 = a4561;
var G__17976 = b4562;
var G__17977 = c4563;
var G__17978 = d4564;
var G__17979 = e4565;
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__17975,G__17976,G__17977,G__17978,G__17979) : f.call(null,G__17975,G__17976,G__17977,G__17978,G__17979));
}
} else {
var f4566 = cljs.core._first(args__$6);
var args__$7 = cljs.core._rest(args__$6);
if((argc === (6))){
if(f.cljs$core$IFn$_invoke$arity$6){
return f.cljs$core$IFn$_invoke$arity$6(a4561,b4562,c4563,d4564,e4565,f4566);
} else {
var G__17980 = a4561;
var G__17981 = b4562;
var G__17982 = c4563;
var G__17983 = d4564;
var G__17984 = e4565;
var G__17985 = f4566;
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__17980,G__17981,G__17982,G__17983,G__17984,G__17985) : f.call(null,G__17980,G__17981,G__17982,G__17983,G__17984,G__17985));
}
} else {
var g4567 = cljs.core._first(args__$7);
var args__$8 = cljs.core._rest(args__$7);
if((argc === (7))){
if(f.cljs$core$IFn$_invoke$arity$7){
return f.cljs$core$IFn$_invoke$arity$7(a4561,b4562,c4563,d4564,e4565,f4566,g4567);
} else {
var G__17986 = a4561;
var G__17987 = b4562;
var G__17988 = c4563;
var G__17989 = d4564;
var G__17990 = e4565;
var G__17991 = f4566;
var G__17992 = g4567;
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__17986,G__17987,G__17988,G__17989,G__17990,G__17991,G__17992) : f.call(null,G__17986,G__17987,G__17988,G__17989,G__17990,G__17991,G__17992));
}
} else {
var h4568 = cljs.core._first(args__$8);
var args__$9 = cljs.core._rest(args__$8);
if((argc === (8))){
if(f.cljs$core$IFn$_invoke$arity$8){
return f.cljs$core$IFn$_invoke$arity$8(a4561,b4562,c4563,d4564,e4565,f4566,g4567,h4568);
} else {
var G__17993 = a4561;
var G__17994 = b4562;
var G__17995 = c4563;
var G__17996 = d4564;
var G__17997 = e4565;
var G__17998 = f4566;
var G__17999 = g4567;
var G__18000 = h4568;
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__17993,G__17994,G__17995,G__17996,G__17997,G__17998,G__17999,G__18000) : f.call(null,G__17993,G__17994,G__17995,G__17996,G__17997,G__17998,G__17999,G__18000));
}
} else {
var i4569 = cljs.core._first(args__$9);
var args__$10 = cljs.core._rest(args__$9);
if((argc === (9))){
if(f.cljs$core$IFn$_invoke$arity$9){
return f.cljs$core$IFn$_invoke$arity$9(a4561,b4562,c4563,d4564,e4565,f4566,g4567,h4568,i4569);
} else {
var G__18001 = a4561;
var G__18002 = b4562;
var G__18003 = c4563;
var G__18004 = d4564;
var G__18005 = e4565;
var G__18006 = f4566;
var G__18007 = g4567;
var G__18008 = h4568;
var G__18009 = i4569;
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__18001,G__18002,G__18003,G__18004,G__18005,G__18006,G__18007,G__18008,G__18009) : f.call(null,G__18001,G__18002,G__18003,G__18004,G__18005,G__18006,G__18007,G__18008,G__18009));
}
} else {
var j4570 = cljs.core._first(args__$10);
var args__$11 = cljs.core._rest(args__$10);
if((argc === (10))){
if(f.cljs$core$IFn$_invoke$arity$10){
return f.cljs$core$IFn$_invoke$arity$10(a4561,b4562,c4563,d4564,e4565,f4566,g4567,h4568,i4569,j4570);
} else {
var G__18010 = a4561;
var G__18011 = b4562;
var G__18012 = c4563;
var G__18013 = d4564;
var G__18014 = e4565;
var G__18015 = f4566;
var G__18016 = g4567;
var G__18017 = h4568;
var G__18018 = i4569;
var G__18019 = j4570;
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__18010,G__18011,G__18012,G__18013,G__18014,G__18015,G__18016,G__18017,G__18018,G__18019) : f.call(null,G__18010,G__18011,G__18012,G__18013,G__18014,G__18015,G__18016,G__18017,G__18018,G__18019));
}
} else {
var k4571 = cljs.core._first(args__$11);
var args__$12 = cljs.core._rest(args__$11);
if((argc === (11))){
if(f.cljs$core$IFn$_invoke$arity$11){
return f.cljs$core$IFn$_invoke$arity$11(a4561,b4562,c4563,d4564,e4565,f4566,g4567,h4568,i4569,j4570,k4571);
} else {
var G__18020 = a4561;
var G__18021 = b4562;
var G__18022 = c4563;
var G__18023 = d4564;
var G__18024 = e4565;
var G__18025 = f4566;
var G__18026 = g4567;
var G__18027 = h4568;
var G__18028 = i4569;
var G__18029 = j4570;
var G__18030 = k4571;
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__18020,G__18021,G__18022,G__18023,G__18024,G__18025,G__18026,G__18027,G__18028,G__18029,G__18030) : f.call(null,G__18020,G__18021,G__18022,G__18023,G__18024,G__18025,G__18026,G__18027,G__18028,G__18029,G__18030));
}
} else {
var l4572 = cljs.core._first(args__$12);
var args__$13 = cljs.core._rest(args__$12);
if((argc === (12))){
if(f.cljs$core$IFn$_invoke$arity$12){
return f.cljs$core$IFn$_invoke$arity$12(a4561,b4562,c4563,d4564,e4565,f4566,g4567,h4568,i4569,j4570,k4571,l4572);
} else {
var G__18031 = a4561;
var G__18032 = b4562;
var G__18033 = c4563;
var G__18034 = d4564;
var G__18035 = e4565;
var G__18036 = f4566;
var G__18037 = g4567;
var G__18038 = h4568;
var G__18039 = i4569;
var G__18040 = j4570;
var G__18041 = k4571;
var G__18042 = l4572;
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__18031,G__18032,G__18033,G__18034,G__18035,G__18036,G__18037,G__18038,G__18039,G__18040,G__18041,G__18042) : f.call(null,G__18031,G__18032,G__18033,G__18034,G__18035,G__18036,G__18037,G__18038,G__18039,G__18040,G__18041,G__18042));
}
} else {
var m4573 = cljs.core._first(args__$13);
var args__$14 = cljs.core._rest(args__$13);
if((argc === (13))){
if(f.cljs$core$IFn$_invoke$arity$13){
return f.cljs$core$IFn$_invoke$arity$13(a4561,b4562,c4563,d4564,e4565,f4566,g4567,h4568,i4569,j4570,k4571,l4572,m4573);
} else {
var G__18043 = a4561;
var G__18044 = b4562;
var G__18045 = c4563;
var G__18046 = d4564;
var G__18047 = e4565;
var G__18048 = f4566;
var G__18049 = g4567;
var G__18050 = h4568;
var G__18051 = i4569;
var G__18052 = j4570;
var G__18053 = k4571;
var G__18054 = l4572;
var G__18055 = m4573;
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__18043,G__18044,G__18045,G__18046,G__18047,G__18048,G__18049,G__18050,G__18051,G__18052,G__18053,G__18054,G__18055) : f.call(null,G__18043,G__18044,G__18045,G__18046,G__18047,G__18048,G__18049,G__18050,G__18051,G__18052,G__18053,G__18054,G__18055));
}
} else {
var n4574 = cljs.core._first(args__$14);
var args__$15 = cljs.core._rest(args__$14);
if((argc === (14))){
if(f.cljs$core$IFn$_invoke$arity$14){
return f.cljs$core$IFn$_invoke$arity$14(a4561,b4562,c4563,d4564,e4565,f4566,g4567,h4568,i4569,j4570,k4571,l4572,m4573,n4574);
} else {
var G__18056 = a4561;
var G__18057 = b4562;
var G__18058 = c4563;
var G__18059 = d4564;
var G__18060 = e4565;
var G__18061 = f4566;
var G__18062 = g4567;
var G__18063 = h4568;
var G__18064 = i4569;
var G__18065 = j4570;
var G__18066 = k4571;
var G__18067 = l4572;
var G__18068 = m4573;
var G__18069 = n4574;
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__18056,G__18057,G__18058,G__18059,G__18060,G__18061,G__18062,G__18063,G__18064,G__18065,G__18066,G__18067,G__18068,G__18069) : f.call(null,G__18056,G__18057,G__18058,G__18059,G__18060,G__18061,G__18062,G__18063,G__18064,G__18065,G__18066,G__18067,G__18068,G__18069));
}
} else {
var o4575 = cljs.core._first(args__$15);
var args__$16 = cljs.core._rest(args__$15);
if((argc === (15))){
if(f.cljs$core$IFn$_invoke$arity$15){
return f.cljs$core$IFn$_invoke$arity$15(a4561,b4562,c4563,d4564,e4565,f4566,g4567,h4568,i4569,j4570,k4571,l4572,m4573,n4574,o4575);
} else {
var G__18070 = a4561;
var G__18071 = b4562;
var G__18072 = c4563;
var G__18073 = d4564;
var G__18074 = e4565;
var G__18075 = f4566;
var G__18076 = g4567;
var G__18077 = h4568;
var G__18078 = i4569;
var G__18079 = j4570;
var G__18080 = k4571;
var G__18081 = l4572;
var G__18082 = m4573;
var G__18083 = n4574;
var G__18084 = o4575;
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__18070,G__18071,G__18072,G__18073,G__18074,G__18075,G__18076,G__18077,G__18078,G__18079,G__18080,G__18081,G__18082,G__18083,G__18084) : f.call(null,G__18070,G__18071,G__18072,G__18073,G__18074,G__18075,G__18076,G__18077,G__18078,G__18079,G__18080,G__18081,G__18082,G__18083,G__18084));
}
} else {
var p4576 = cljs.core._first(args__$16);
var args__$17 = cljs.core._rest(args__$16);
if((argc === (16))){
if(f.cljs$core$IFn$_invoke$arity$16){
return f.cljs$core$IFn$_invoke$arity$16(a4561,b4562,c4563,d4564,e4565,f4566,g4567,h4568,i4569,j4570,k4571,l4572,m4573,n4574,o4575,p4576);
} else {
var G__18085 = a4561;
var G__18086 = b4562;
var G__18087 = c4563;
var G__18088 = d4564;
var G__18089 = e4565;
var G__18090 = f4566;
var G__18091 = g4567;
var G__18092 = h4568;
var G__18093 = i4569;
var G__18094 = j4570;
var G__18095 = k4571;
var G__18096 = l4572;
var G__18097 = m4573;
var G__18098 = n4574;
var G__18099 = o4575;
var G__18100 = p4576;
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__18085,G__18086,G__18087,G__18088,G__18089,G__18090,G__18091,G__18092,G__18093,G__18094,G__18095,G__18096,G__18097,G__18098,G__18099,G__18100) : f.call(null,G__18085,G__18086,G__18087,G__18088,G__18089,G__18090,G__18091,G__18092,G__18093,G__18094,G__18095,G__18096,G__18097,G__18098,G__18099,G__18100));
}
} else {
var q4577 = cljs.core._first(args__$17);
var args__$18 = cljs.core._rest(args__$17);
if((argc === (17))){
if(f.cljs$core$IFn$_invoke$arity$17){
return f.cljs$core$IFn$_invoke$arity$17(a4561,b4562,c4563,d4564,e4565,f4566,g4567,h4568,i4569,j4570,k4571,l4572,m4573,n4574,o4575,p4576,q4577);
} else {
var G__18101 = a4561;
var G__18102 = b4562;
var G__18103 = c4563;
var G__18104 = d4564;
var G__18105 = e4565;
var G__18106 = f4566;
var G__18107 = g4567;
var G__18108 = h4568;
var G__18109 = i4569;
var G__18110 = j4570;
var G__18111 = k4571;
var G__18112 = l4572;
var G__18113 = m4573;
var G__18114 = n4574;
var G__18115 = o4575;
var G__18116 = p4576;
var G__18117 = q4577;
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__18101,G__18102,G__18103,G__18104,G__18105,G__18106,G__18107,G__18108,G__18109,G__18110,G__18111,G__18112,G__18113,G__18114,G__18115,G__18116,G__18117) : f.call(null,G__18101,G__18102,G__18103,G__18104,G__18105,G__18106,G__18107,G__18108,G__18109,G__18110,G__18111,G__18112,G__18113,G__18114,G__18115,G__18116,G__18117));
}
} else {
var r4578 = cljs.core._first(args__$18);
var args__$19 = cljs.core._rest(args__$18);
if((argc === (18))){
if(f.cljs$core$IFn$_invoke$arity$18){
return f.cljs$core$IFn$_invoke$arity$18(a4561,b4562,c4563,d4564,e4565,f4566,g4567,h4568,i4569,j4570,k4571,l4572,m4573,n4574,o4575,p4576,q4577,r4578);
} else {
var G__18118 = a4561;
var G__18119 = b4562;
var G__18120 = c4563;
var G__18121 = d4564;
var G__18122 = e4565;
var G__18123 = f4566;
var G__18124 = g4567;
var G__18125 = h4568;
var G__18126 = i4569;
var G__18127 = j4570;
var G__18128 = k4571;
var G__18129 = l4572;
var G__18130 = m4573;
var G__18131 = n4574;
var G__18132 = o4575;
var G__18133 = p4576;
var G__18134 = q4577;
var G__18135 = r4578;
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__18118,G__18119,G__18120,G__18121,G__18122,G__18123,G__18124,G__18125,G__18126,G__18127,G__18128,G__18129,G__18130,G__18131,G__18132,G__18133,G__18134,G__18135) : f.call(null,G__18118,G__18119,G__18120,G__18121,G__18122,G__18123,G__18124,G__18125,G__18126,G__18127,G__18128,G__18129,G__18130,G__18131,G__18132,G__18133,G__18134,G__18135));
}
} else {
var s4579 = cljs.core._first(args__$19);
var args__$20 = cljs.core._rest(args__$19);
if((argc === (19))){
if(f.cljs$core$IFn$_invoke$arity$19){
return f.cljs$core$IFn$_invoke$arity$19(a4561,b4562,c4563,d4564,e4565,f4566,g4567,h4568,i4569,j4570,k4571,l4572,m4573,n4574,o4575,p4576,q4577,r4578,s4579);
} else {
var G__18136 = a4561;
var G__18137 = b4562;
var G__18138 = c4563;
var G__18139 = d4564;
var G__18140 = e4565;
var G__18141 = f4566;
var G__18142 = g4567;
var G__18143 = h4568;
var G__18144 = i4569;
var G__18145 = j4570;
var G__18146 = k4571;
var G__18147 = l4572;
var G__18148 = m4573;
var G__18149 = n4574;
var G__18150 = o4575;
var G__18151 = p4576;
var G__18152 = q4577;
var G__18153 = r4578;
var G__18154 = s4579;
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__18136,G__18137,G__18138,G__18139,G__18140,G__18141,G__18142,G__18143,G__18144,G__18145,G__18146,G__18147,G__18148,G__18149,G__18150,G__18151,G__18152,G__18153,G__18154) : f.call(null,G__18136,G__18137,G__18138,G__18139,G__18140,G__18141,G__18142,G__18143,G__18144,G__18145,G__18146,G__18147,G__18148,G__18149,G__18150,G__18151,G__18152,G__18153,G__18154));
}
} else {
var t4580 = cljs.core._first(args__$20);
var args__$21 = cljs.core._rest(args__$20);
if((argc === (20))){
if(f.cljs$core$IFn$_invoke$arity$20){
return f.cljs$core$IFn$_invoke$arity$20(a4561,b4562,c4563,d4564,e4565,f4566,g4567,h4568,i4569,j4570,k4571,l4572,m4573,n4574,o4575,p4576,q4577,r4578,s4579,t4580);
} else {
var G__18155 = a4561;
var G__18156 = b4562;
var G__18157 = c4563;
var G__18158 = d4564;
var G__18159 = e4565;
var G__18160 = f4566;
var G__18161 = g4567;
var G__18162 = h4568;
var G__18163 = i4569;
var G__18164 = j4570;
var G__18165 = k4571;
var G__18166 = l4572;
var G__18167 = m4573;
var G__18168 = n4574;
var G__18169 = o4575;
var G__18170 = p4576;
var G__18171 = q4577;
var G__18172 = r4578;
var G__18173 = s4579;
var G__18174 = t4580;
return (f.cljs$core$IFn$_invoke$arity$20 ? f.cljs$core$IFn$_invoke$arity$20(G__18155,G__18156,G__18157,G__18158,G__18159,G__18160,G__18161,G__18162,G__18163,G__18164,G__18165,G__18166,G__18167,G__18168,G__18169,G__18170,G__18171,G__18172,G__18173,G__18174) : f.call(null,G__18155,G__18156,G__18157,G__18158,G__18159,G__18160,G__18161,G__18162,G__18163,G__18164,G__18165,G__18166,G__18167,G__18168,G__18169,G__18170,G__18171,G__18172,G__18173,G__18174));
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
var G__18175__delegate = function (f,a,b,c,d,args){
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
var G__18175 = function (f,a,b,c,d,var_args){
var args = null;
if (arguments.length > 5) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__18175__delegate.call(this,f,a,b,c,d,args);};
G__18175.cljs$lang$maxFixedArity = 5;
G__18175.cljs$lang$applyTo = (function (arglist__18176){
var f = cljs.core.first(arglist__18176);
arglist__18176 = cljs.core.next(arglist__18176);
var a = cljs.core.first(arglist__18176);
arglist__18176 = cljs.core.next(arglist__18176);
var b = cljs.core.first(arglist__18176);
arglist__18176 = cljs.core.next(arglist__18176);
var c = cljs.core.first(arglist__18176);
arglist__18176 = cljs.core.next(arglist__18176);
var d = cljs.core.first(arglist__18176);
var args = cljs.core.rest(arglist__18176);
return G__18175__delegate(f,a,b,c,d,args);
});
G__18175.cljs$core$IFn$_invoke$arity$variadic = G__18175__delegate;
return G__18175;
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
return cljs.core.with_meta(obj,(function (){var G__18192 = cljs.core.meta(obj);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18192) : f.call(null,G__18192));
})());
});
var vary_meta__3 = (function (obj,f,a){
return cljs.core.with_meta(obj,(function (){var G__18193 = cljs.core.meta(obj);
var G__18194 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__18193,G__18194) : f.call(null,G__18193,G__18194));
})());
});
var vary_meta__4 = (function (obj,f,a,b){
return cljs.core.with_meta(obj,(function (){var G__18195 = cljs.core.meta(obj);
var G__18196 = a;
var G__18197 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__18195,G__18196,G__18197) : f.call(null,G__18195,G__18196,G__18197));
})());
});
var vary_meta__5 = (function (obj,f,a,b,c){
return cljs.core.with_meta(obj,(function (){var G__18198 = cljs.core.meta(obj);
var G__18199 = a;
var G__18200 = b;
var G__18201 = c;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__18198,G__18199,G__18200,G__18201) : f.call(null,G__18198,G__18199,G__18200,G__18201));
})());
});
var vary_meta__6 = (function (obj,f,a,b,c,d){
return cljs.core.with_meta(obj,(function (){var G__18202 = cljs.core.meta(obj);
var G__18203 = a;
var G__18204 = b;
var G__18205 = c;
var G__18206 = d;
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__18202,G__18203,G__18204,G__18205,G__18206) : f.call(null,G__18202,G__18203,G__18204,G__18205,G__18206));
})());
});
var vary_meta__7 = (function() { 
var G__18207__delegate = function (obj,f,a,b,c,d,args){
return cljs.core.with_meta(obj,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.meta(obj),a,b,c,cljs.core.array_seq([d,args], 0)));
};
var G__18207 = function (obj,f,a,b,c,d,var_args){
var args = null;
if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);
} 
return G__18207__delegate.call(this,obj,f,a,b,c,d,args);};
G__18207.cljs$lang$maxFixedArity = 6;
G__18207.cljs$lang$applyTo = (function (arglist__18208){
var obj = cljs.core.first(arglist__18208);
arglist__18208 = cljs.core.next(arglist__18208);
var f = cljs.core.first(arglist__18208);
arglist__18208 = cljs.core.next(arglist__18208);
var a = cljs.core.first(arglist__18208);
arglist__18208 = cljs.core.next(arglist__18208);
var b = cljs.core.first(arglist__18208);
arglist__18208 = cljs.core.next(arglist__18208);
var c = cljs.core.first(arglist__18208);
arglist__18208 = cljs.core.next(arglist__18208);
var d = cljs.core.first(arglist__18208);
var args = cljs.core.rest(arglist__18208);
return G__18207__delegate(obj,f,a,b,c,d,args);
});
G__18207.cljs$core$IFn$_invoke$arity$variadic = G__18207__delegate;
return G__18207;
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
var G__18209__delegate = function (x,y,more){
return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._EQ_,x,y,more));
};
var G__18209 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18209__delegate.call(this,x,y,more);};
G__18209.cljs$lang$maxFixedArity = 2;
G__18209.cljs$lang$applyTo = (function (arglist__18210){
var x = cljs.core.first(arglist__18210);
arglist__18210 = cljs.core.next(arglist__18210);
var y = cljs.core.first(arglist__18210);
var more = cljs.core.rest(arglist__18210);
return G__18209__delegate(x,y,more);
});
G__18209.cljs$core$IFn$_invoke$arity$variadic = G__18209__delegate;
return G__18209;
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
if(typeof cljs.core.t18214 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.t18214 = (function (nil_iter,meta18215){
this.nil_iter = nil_iter;
this.meta18215 = meta18215;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.t18214.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return false;
});

cljs.core.t18214.prototype.next = (function (){
var self__ = this;
var _ = this;
return (new Error("No such element"));
});

cljs.core.t18214.prototype.remove = (function (){
var self__ = this;
var _ = this;
return (new Error("Unsupported operation"));
});

cljs.core.t18214.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18216){
var self__ = this;
var _18216__$1 = this;
return self__.meta18215;
});

cljs.core.t18214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18216,meta18215__$1){
var self__ = this;
var _18216__$1 = this;
return (new cljs.core.t18214(self__.nil_iter,meta18215__$1));
});

cljs.core.t18214.cljs$lang$type = true;

cljs.core.t18214.cljs$lang$ctorStr = "cljs.core/t18214";

cljs.core.t18214.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/t18214");
});

cljs.core.__GT_t18214 = (function __GT_t18214(nil_iter__$1,meta18215){
return (new cljs.core.t18214(nil_iter__$1,meta18215));
});

}

return (new cljs.core.t18214(nil_iter,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,54,cljs.core.constant$keyword$9,3007,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,3003,cljs.core.constant$keyword$12,"/home/travis/build/brendanator/arimaa/resources/public/js-min/cljs/core.cljs"], null)));
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

cljs.core.StringIter.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/StringIter");
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

cljs.core.ArrayIter.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/ArrayIter");
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

cljs.core.SeqIter.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/SeqIter");
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
if(cljs.core.truth_((function (){var and__3618__auto__ = !((lt.stepper == null));
if(and__3618__auto__){
return self__.iter.hasNext();
} else {
return and__3618__auto__;
}
})())){
if(cljs.core.reduced_QMARK_((function (){var G__18217 = lt;
var G__18218 = self__.iter.next();
return (self__.xform.cljs$core$IFn$_invoke$arity$2 ? self__.xform.cljs$core$IFn$_invoke$arity$2(G__18217,G__18218) : self__.xform.call(null,G__18217,G__18218));
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
var G__18219 = lt;
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__18219) : self__.xform.call(null,G__18219));
}
});

cljs.core.Stepper.cljs$lang$type = true;

cljs.core.Stepper.cljs$lang$ctorStr = "cljs.core/Stepper";

cljs.core.Stepper.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/Stepper");
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
return (new cljs.core.Stepper((function (){var G__18221 = stepfn;
return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__18221) : xform.call(null,G__18221));
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
var G__18223 = cljs.core.next(iters__$1);
iters__$1 = G__18223;
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
var n__4517__auto___18224 = self__.iters.length;
var i_18225 = (0);
while(true){
if((i_18225 < n__4517__auto___18224)){
(self__.nexts[i_18225] = (self__.iters[i_18225]).next());

var G__18226 = (i_18225 + (1));
i_18225 = G__18226;
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
if(cljs.core.truth_((function (){var and__3618__auto__ = !((lt.stepper == null));
if(and__3618__auto__){
return this$.hasNext();
} else {
return and__3618__auto__;
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
var G__18222 = lt;
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__18222) : self__.xform.call(null,G__18222));
}
});

cljs.core.MultiStepper.cljs$lang$type = true;

cljs.core.MultiStepper.cljs$lang$ctorStr = "cljs.core/MultiStepper";

cljs.core.MultiStepper.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/MultiStepper");
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
return (new cljs.core.MultiStepper((function (){var G__18231 = stepfn;
return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__18231) : xform.call(null,G__18231));
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

cljs.core.LazyTransformer.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/LazyTransformer");
});

cljs.core.__GT_LazyTransformer = (function __GT_LazyTransformer(stepper,first,rest,meta){
return (new cljs.core.LazyTransformer(stepper,first,rest,meta));
});

(cljs.core.LazyTransformer.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator(this__4608__auto__);
}));
cljs.core.LazyTransformer.create = (function (xform,coll){
return (new cljs.core.LazyTransformer(cljs.core.stepper(xform,cljs.core.iter(coll)),null,null,null));
});
cljs.core.LazyTransformer.createMulti = (function (xform,colls){
var iters = [];
var seq__18232_18236 = cljs.core.seq(colls);
var chunk__18233_18237 = null;
var count__18234_18238 = (0);
var i__18235_18239 = (0);
while(true){
if((i__18235_18239 < count__18234_18238)){
var coll_18240 = chunk__18233_18237.cljs$core$IIndexed$_nth$arity$2(null,i__18235_18239);
iters.push(cljs.core.iter(coll_18240));

var G__18241 = seq__18232_18236;
var G__18242 = chunk__18233_18237;
var G__18243 = count__18234_18238;
var G__18244 = (i__18235_18239 + (1));
seq__18232_18236 = G__18241;
chunk__18233_18237 = G__18242;
count__18234_18238 = G__18243;
i__18235_18239 = G__18244;
continue;
} else {
var temp__4126__auto___18245 = cljs.core.seq(seq__18232_18236);
if(temp__4126__auto___18245){
var seq__18232_18246__$1 = temp__4126__auto___18245;
if(cljs.core.chunked_seq_QMARK_(seq__18232_18246__$1)){
var c__4417__auto___18247 = cljs.core.chunk_first(seq__18232_18246__$1);
var G__18248 = cljs.core.chunk_rest(seq__18232_18246__$1);
var G__18249 = c__4417__auto___18247;
var G__18250 = cljs.core.count(c__4417__auto___18247);
var G__18251 = (0);
seq__18232_18236 = G__18248;
chunk__18233_18237 = G__18249;
count__18234_18238 = G__18250;
i__18235_18239 = G__18251;
continue;
} else {
var coll_18252 = cljs.core.first(seq__18232_18246__$1);
iters.push(cljs.core.iter(coll_18252));

var G__18253 = cljs.core.next(seq__18232_18246__$1);
var G__18254 = null;
var G__18255 = (0);
var G__18256 = (0);
seq__18232_18236 = G__18253;
chunk__18233_18237 = G__18254;
count__18234_18238 = G__18255;
i__18235_18239 = G__18256;
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
var or__3630__auto__ = cljs.core.seq(coll);
if(or__3630__auto__){
return or__3630__auto__;
} else {
return cljs.core.List.EMPTY;
}
}
});
var sequence__2 = (function (xform,coll){
return cljs.core.LazyTransformer.create(xform,coll);
});
var sequence__3 = (function() { 
var G__18257__delegate = function (xform,coll,colls){
return cljs.core.LazyTransformer.createMulti(xform,cljs.core.to_array(cljs.core.cons(coll,colls)));
};
var G__18257 = function (xform,coll,var_args){
var colls = null;
if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18257__delegate.call(this,xform,coll,colls);};
G__18257.cljs$lang$maxFixedArity = 2;
G__18257.cljs$lang$applyTo = (function (arglist__18258){
var xform = cljs.core.first(arglist__18258);
arglist__18258 = cljs.core.next(arglist__18258);
var coll = cljs.core.first(arglist__18258);
var colls = cljs.core.rest(arglist__18258);
return G__18257__delegate(xform,coll,colls);
});
G__18257.cljs$core$IFn$_invoke$arity$variadic = G__18257__delegate;
return G__18257;
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
if(cljs.core.truth_((function (){var G__18260 = cljs.core.first(coll);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__18260) : pred.call(null,G__18260));
})())){
var G__18261 = pred;
var G__18262 = cljs.core.next(coll);
pred = G__18261;
coll = G__18262;
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
var or__3630__auto__ = (function (){var G__18266 = cljs.core.first(coll);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__18266) : pred.call(null,G__18266));
})();
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
var G__18267 = pred;
var G__18268 = cljs.core.next(coll);
pred = G__18267;
coll = G__18268;
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
var G__18275 = null;
var G__18275__0 = (function (){
return cljs.core.not((function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})());
});
var G__18275__1 = (function (x){
return cljs.core.not((function (){var G__18272 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18272) : f.call(null,G__18272));
})());
});
var G__18275__2 = (function (x,y){
return cljs.core.not((function (){var G__18273 = x;
var G__18274 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__18273,G__18274) : f.call(null,G__18273,G__18274));
})());
});
var G__18275__3 = (function() { 
var G__18276__delegate = function (x,y,zs){
return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f,x,y,zs));
};
var G__18276 = function (x,y,var_args){
var zs = null;
if (arguments.length > 2) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18276__delegate.call(this,x,y,zs);};
G__18276.cljs$lang$maxFixedArity = 2;
G__18276.cljs$lang$applyTo = (function (arglist__18277){
var x = cljs.core.first(arglist__18277);
arglist__18277 = cljs.core.next(arglist__18277);
var y = cljs.core.first(arglist__18277);
var zs = cljs.core.rest(arglist__18277);
return G__18276__delegate(x,y,zs);
});
G__18276.cljs$core$IFn$_invoke$arity$variadic = G__18276__delegate;
return G__18276;
})()
;
G__18275 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__18275__0.call(this);
case 1:
return G__18275__1.call(this,x);
case 2:
return G__18275__2.call(this,x,y);
default:
return G__18275__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18275.cljs$lang$maxFixedArity = 2;
G__18275.cljs$lang$applyTo = G__18275__3.cljs$lang$applyTo;
G__18275.cljs$core$IFn$_invoke$arity$0 = G__18275__0;
G__18275.cljs$core$IFn$_invoke$arity$1 = G__18275__1;
G__18275.cljs$core$IFn$_invoke$arity$2 = G__18275__2;
G__18275.cljs$core$IFn$_invoke$arity$variadic = G__18275__3.cljs$core$IFn$_invoke$arity$variadic;
return G__18275;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__18278__delegate = function (args){
return x;
};
var G__18278 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__18278__delegate.call(this,args);};
G__18278.cljs$lang$maxFixedArity = 0;
G__18278.cljs$lang$applyTo = (function (arglist__18279){
var args = cljs.core.seq(arglist__18279);
return G__18278__delegate(args);
});
G__18278.cljs$core$IFn$_invoke$arity$variadic = G__18278__delegate;
return G__18278;
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
var G__18334 = null;
var G__18334__0 = (function (){
var G__18307 = (function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18307) : f.call(null,G__18307));
});
var G__18334__1 = (function (x){
var G__18308 = (function (){var G__18309 = x;
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__18309) : g.call(null,G__18309));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18308) : f.call(null,G__18308));
});
var G__18334__2 = (function (x,y){
var G__18310 = (function (){var G__18311 = x;
var G__18312 = y;
return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__18311,G__18312) : g.call(null,G__18311,G__18312));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18310) : f.call(null,G__18310));
});
var G__18334__3 = (function (x,y,z){
var G__18313 = (function (){var G__18314 = x;
var G__18315 = y;
var G__18316 = z;
return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__18314,G__18315,G__18316) : g.call(null,G__18314,G__18315,G__18316));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18313) : f.call(null,G__18313));
});
var G__18334__4 = (function() { 
var G__18335__delegate = function (x,y,z,args){
var G__18317 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18317) : f.call(null,G__18317));
};
var G__18335 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18335__delegate.call(this,x,y,z,args);};
G__18335.cljs$lang$maxFixedArity = 3;
G__18335.cljs$lang$applyTo = (function (arglist__18336){
var x = cljs.core.first(arglist__18336);
arglist__18336 = cljs.core.next(arglist__18336);
var y = cljs.core.first(arglist__18336);
arglist__18336 = cljs.core.next(arglist__18336);
var z = cljs.core.first(arglist__18336);
var args = cljs.core.rest(arglist__18336);
return G__18335__delegate(x,y,z,args);
});
G__18335.cljs$core$IFn$_invoke$arity$variadic = G__18335__delegate;
return G__18335;
})()
;
G__18334 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__18334__0.call(this);
case 1:
return G__18334__1.call(this,x);
case 2:
return G__18334__2.call(this,x,y);
case 3:
return G__18334__3.call(this,x,y,z);
default:
return G__18334__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18334.cljs$lang$maxFixedArity = 3;
G__18334.cljs$lang$applyTo = G__18334__4.cljs$lang$applyTo;
G__18334.cljs$core$IFn$_invoke$arity$0 = G__18334__0;
G__18334.cljs$core$IFn$_invoke$arity$1 = G__18334__1;
G__18334.cljs$core$IFn$_invoke$arity$2 = G__18334__2;
G__18334.cljs$core$IFn$_invoke$arity$3 = G__18334__3;
G__18334.cljs$core$IFn$_invoke$arity$variadic = G__18334__4.cljs$core$IFn$_invoke$arity$variadic;
return G__18334;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__18337 = null;
var G__18337__0 = (function (){
var G__18318 = (function (){var G__18319 = (function (){return (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
})();
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__18319) : g.call(null,G__18319));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18318) : f.call(null,G__18318));
});
var G__18337__1 = (function (x){
var G__18320 = (function (){var G__18321 = (function (){var G__18322 = x;
return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__18322) : h.call(null,G__18322));
})();
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__18321) : g.call(null,G__18321));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18320) : f.call(null,G__18320));
});
var G__18337__2 = (function (x,y){
var G__18323 = (function (){var G__18324 = (function (){var G__18325 = x;
var G__18326 = y;
return (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(G__18325,G__18326) : h.call(null,G__18325,G__18326));
})();
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__18324) : g.call(null,G__18324));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18323) : f.call(null,G__18323));
});
var G__18337__3 = (function (x,y,z){
var G__18327 = (function (){var G__18328 = (function (){var G__18329 = x;
var G__18330 = y;
var G__18331 = z;
return (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(G__18329,G__18330,G__18331) : h.call(null,G__18329,G__18330,G__18331));
})();
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__18328) : g.call(null,G__18328));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18327) : f.call(null,G__18327));
});
var G__18337__4 = (function() { 
var G__18338__delegate = function (x,y,z,args){
var G__18332 = (function (){var G__18333 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,x,y,z,args);
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__18333) : g.call(null,G__18333));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18332) : f.call(null,G__18332));
};
var G__18338 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18338__delegate.call(this,x,y,z,args);};
G__18338.cljs$lang$maxFixedArity = 3;
G__18338.cljs$lang$applyTo = (function (arglist__18339){
var x = cljs.core.first(arglist__18339);
arglist__18339 = cljs.core.next(arglist__18339);
var y = cljs.core.first(arglist__18339);
arglist__18339 = cljs.core.next(arglist__18339);
var z = cljs.core.first(arglist__18339);
var args = cljs.core.rest(arglist__18339);
return G__18338__delegate(x,y,z,args);
});
G__18338.cljs$core$IFn$_invoke$arity$variadic = G__18338__delegate;
return G__18338;
})()
;
G__18337 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__18337__0.call(this);
case 1:
return G__18337__1.call(this,x);
case 2:
return G__18337__2.call(this,x,y);
case 3:
return G__18337__3.call(this,x,y,z);
default:
return G__18337__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18337.cljs$lang$maxFixedArity = 3;
G__18337.cljs$lang$applyTo = G__18337__4.cljs$lang$applyTo;
G__18337.cljs$core$IFn$_invoke$arity$0 = G__18337__0;
G__18337.cljs$core$IFn$_invoke$arity$1 = G__18337__1;
G__18337.cljs$core$IFn$_invoke$arity$2 = G__18337__2;
G__18337.cljs$core$IFn$_invoke$arity$3 = G__18337__3;
G__18337.cljs$core$IFn$_invoke$arity$variadic = G__18337__4.cljs$core$IFn$_invoke$arity$variadic;
return G__18337;
})()
});
var comp__4 = (function() { 
var G__18340__delegate = function (f1,f2,f3,fs){
var fs__$1 = cljs.core.reverse(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(f1,f2,f3,fs));
return ((function (fs__$1){
return (function() { 
var G__18341__delegate = function (args){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fs__$1),args);
var fs__$2 = cljs.core.next(fs__$1);
while(true){
if(fs__$2){
var G__18342 = cljs.core.first(fs__$2).call(null,ret);
var G__18343 = cljs.core.next(fs__$2);
ret = G__18342;
fs__$2 = G__18343;
continue;
} else {
return ret;
}
break;
}
};
var G__18341 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__18341__delegate.call(this,args);};
G__18341.cljs$lang$maxFixedArity = 0;
G__18341.cljs$lang$applyTo = (function (arglist__18344){
var args = cljs.core.seq(arglist__18344);
return G__18341__delegate(args);
});
G__18341.cljs$core$IFn$_invoke$arity$variadic = G__18341__delegate;
return G__18341;
})()
;
;})(fs__$1))
};
var G__18340 = function (f1,f2,f3,var_args){
var fs = null;
if (arguments.length > 3) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18340__delegate.call(this,f1,f2,f3,fs);};
G__18340.cljs$lang$maxFixedArity = 3;
G__18340.cljs$lang$applyTo = (function (arglist__18345){
var f1 = cljs.core.first(arglist__18345);
arglist__18345 = cljs.core.next(arglist__18345);
var f2 = cljs.core.first(arglist__18345);
arglist__18345 = cljs.core.next(arglist__18345);
var f3 = cljs.core.first(arglist__18345);
var fs = cljs.core.rest(arglist__18345);
return G__18340__delegate(f1,f2,f3,fs);
});
G__18340.cljs$core$IFn$_invoke$arity$variadic = G__18340__delegate;
return G__18340;
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
var G__18430 = null;
var G__18430__0 = (function (){
var G__18388 = arg1;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18388) : f.call(null,G__18388));
});
var G__18430__1 = (function (x){
var G__18389 = arg1;
var G__18390 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__18389,G__18390) : f.call(null,G__18389,G__18390));
});
var G__18430__2 = (function (x,y){
var G__18391 = arg1;
var G__18392 = x;
var G__18393 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__18391,G__18392,G__18393) : f.call(null,G__18391,G__18392,G__18393));
});
var G__18430__3 = (function (x,y,z){
var G__18394 = arg1;
var G__18395 = x;
var G__18396 = y;
var G__18397 = z;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__18394,G__18395,G__18396,G__18397) : f.call(null,G__18394,G__18395,G__18396,G__18397));
});
var G__18430__4 = (function() { 
var G__18431__delegate = function (x,y,z,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,arg1,x,y,z,cljs.core.array_seq([args], 0));
};
var G__18431 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18431__delegate.call(this,x,y,z,args);};
G__18431.cljs$lang$maxFixedArity = 3;
G__18431.cljs$lang$applyTo = (function (arglist__18432){
var x = cljs.core.first(arglist__18432);
arglist__18432 = cljs.core.next(arglist__18432);
var y = cljs.core.first(arglist__18432);
arglist__18432 = cljs.core.next(arglist__18432);
var z = cljs.core.first(arglist__18432);
var args = cljs.core.rest(arglist__18432);
return G__18431__delegate(x,y,z,args);
});
G__18431.cljs$core$IFn$_invoke$arity$variadic = G__18431__delegate;
return G__18431;
})()
;
G__18430 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__18430__0.call(this);
case 1:
return G__18430__1.call(this,x);
case 2:
return G__18430__2.call(this,x,y);
case 3:
return G__18430__3.call(this,x,y,z);
default:
return G__18430__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18430.cljs$lang$maxFixedArity = 3;
G__18430.cljs$lang$applyTo = G__18430__4.cljs$lang$applyTo;
G__18430.cljs$core$IFn$_invoke$arity$0 = G__18430__0;
G__18430.cljs$core$IFn$_invoke$arity$1 = G__18430__1;
G__18430.cljs$core$IFn$_invoke$arity$2 = G__18430__2;
G__18430.cljs$core$IFn$_invoke$arity$3 = G__18430__3;
G__18430.cljs$core$IFn$_invoke$arity$variadic = G__18430__4.cljs$core$IFn$_invoke$arity$variadic;
return G__18430;
})()
});
var partial__3 = (function (f,arg1,arg2){
return (function() {
var G__18433 = null;
var G__18433__0 = (function (){
var G__18398 = arg1;
var G__18399 = arg2;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__18398,G__18399) : f.call(null,G__18398,G__18399));
});
var G__18433__1 = (function (x){
var G__18400 = arg1;
var G__18401 = arg2;
var G__18402 = x;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__18400,G__18401,G__18402) : f.call(null,G__18400,G__18401,G__18402));
});
var G__18433__2 = (function (x,y){
var G__18403 = arg1;
var G__18404 = arg2;
var G__18405 = x;
var G__18406 = y;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__18403,G__18404,G__18405,G__18406) : f.call(null,G__18403,G__18404,G__18405,G__18406));
});
var G__18433__3 = (function (x,y,z){
var G__18407 = arg1;
var G__18408 = arg2;
var G__18409 = x;
var G__18410 = y;
var G__18411 = z;
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__18407,G__18408,G__18409,G__18410,G__18411) : f.call(null,G__18407,G__18408,G__18409,G__18410,G__18411));
});
var G__18433__4 = (function() { 
var G__18434__delegate = function (x,y,z,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,arg1,arg2,x,y,cljs.core.array_seq([z,args], 0));
};
var G__18434 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18434__delegate.call(this,x,y,z,args);};
G__18434.cljs$lang$maxFixedArity = 3;
G__18434.cljs$lang$applyTo = (function (arglist__18435){
var x = cljs.core.first(arglist__18435);
arglist__18435 = cljs.core.next(arglist__18435);
var y = cljs.core.first(arglist__18435);
arglist__18435 = cljs.core.next(arglist__18435);
var z = cljs.core.first(arglist__18435);
var args = cljs.core.rest(arglist__18435);
return G__18434__delegate(x,y,z,args);
});
G__18434.cljs$core$IFn$_invoke$arity$variadic = G__18434__delegate;
return G__18434;
})()
;
G__18433 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__18433__0.call(this);
case 1:
return G__18433__1.call(this,x);
case 2:
return G__18433__2.call(this,x,y);
case 3:
return G__18433__3.call(this,x,y,z);
default:
return G__18433__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18433.cljs$lang$maxFixedArity = 3;
G__18433.cljs$lang$applyTo = G__18433__4.cljs$lang$applyTo;
G__18433.cljs$core$IFn$_invoke$arity$0 = G__18433__0;
G__18433.cljs$core$IFn$_invoke$arity$1 = G__18433__1;
G__18433.cljs$core$IFn$_invoke$arity$2 = G__18433__2;
G__18433.cljs$core$IFn$_invoke$arity$3 = G__18433__3;
G__18433.cljs$core$IFn$_invoke$arity$variadic = G__18433__4.cljs$core$IFn$_invoke$arity$variadic;
return G__18433;
})()
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() {
var G__18436 = null;
var G__18436__0 = (function (){
var G__18412 = arg1;
var G__18413 = arg2;
var G__18414 = arg3;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__18412,G__18413,G__18414) : f.call(null,G__18412,G__18413,G__18414));
});
var G__18436__1 = (function (x){
var G__18415 = arg1;
var G__18416 = arg2;
var G__18417 = arg3;
var G__18418 = x;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__18415,G__18416,G__18417,G__18418) : f.call(null,G__18415,G__18416,G__18417,G__18418));
});
var G__18436__2 = (function (x,y){
var G__18419 = arg1;
var G__18420 = arg2;
var G__18421 = arg3;
var G__18422 = x;
var G__18423 = y;
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__18419,G__18420,G__18421,G__18422,G__18423) : f.call(null,G__18419,G__18420,G__18421,G__18422,G__18423));
});
var G__18436__3 = (function (x,y,z){
var G__18424 = arg1;
var G__18425 = arg2;
var G__18426 = arg3;
var G__18427 = x;
var G__18428 = y;
var G__18429 = z;
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__18424,G__18425,G__18426,G__18427,G__18428,G__18429) : f.call(null,G__18424,G__18425,G__18426,G__18427,G__18428,G__18429));
});
var G__18436__4 = (function() { 
var G__18437__delegate = function (x,y,z,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,arg1,arg2,arg3,x,cljs.core.array_seq([y,z,args], 0));
};
var G__18437 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18437__delegate.call(this,x,y,z,args);};
G__18437.cljs$lang$maxFixedArity = 3;
G__18437.cljs$lang$applyTo = (function (arglist__18438){
var x = cljs.core.first(arglist__18438);
arglist__18438 = cljs.core.next(arglist__18438);
var y = cljs.core.first(arglist__18438);
arglist__18438 = cljs.core.next(arglist__18438);
var z = cljs.core.first(arglist__18438);
var args = cljs.core.rest(arglist__18438);
return G__18437__delegate(x,y,z,args);
});
G__18437.cljs$core$IFn$_invoke$arity$variadic = G__18437__delegate;
return G__18437;
})()
;
G__18436 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__18436__0.call(this);
case 1:
return G__18436__1.call(this,x);
case 2:
return G__18436__2.call(this,x,y);
case 3:
return G__18436__3.call(this,x,y,z);
default:
return G__18436__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18436.cljs$lang$maxFixedArity = 3;
G__18436.cljs$lang$applyTo = G__18436__4.cljs$lang$applyTo;
G__18436.cljs$core$IFn$_invoke$arity$0 = G__18436__0;
G__18436.cljs$core$IFn$_invoke$arity$1 = G__18436__1;
G__18436.cljs$core$IFn$_invoke$arity$2 = G__18436__2;
G__18436.cljs$core$IFn$_invoke$arity$3 = G__18436__3;
G__18436.cljs$core$IFn$_invoke$arity$variadic = G__18436__4.cljs$core$IFn$_invoke$arity$variadic;
return G__18436;
})()
});
var partial__5 = (function() { 
var G__18439__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__18440__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,arg1,arg2,arg3,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(more,args));
};
var G__18440 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__18440__delegate.call(this,args);};
G__18440.cljs$lang$maxFixedArity = 0;
G__18440.cljs$lang$applyTo = (function (arglist__18441){
var args = cljs.core.seq(arglist__18441);
return G__18440__delegate(args);
});
G__18440.cljs$core$IFn$_invoke$arity$variadic = G__18440__delegate;
return G__18440;
})()
;
};
var G__18439 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__18439__delegate.call(this,f,arg1,arg2,arg3,more);};
G__18439.cljs$lang$maxFixedArity = 4;
G__18439.cljs$lang$applyTo = (function (arglist__18442){
var f = cljs.core.first(arglist__18442);
arglist__18442 = cljs.core.next(arglist__18442);
var arg1 = cljs.core.first(arglist__18442);
arglist__18442 = cljs.core.next(arglist__18442);
var arg2 = cljs.core.first(arglist__18442);
arglist__18442 = cljs.core.next(arglist__18442);
var arg3 = cljs.core.first(arglist__18442);
var more = cljs.core.rest(arglist__18442);
return G__18439__delegate(f,arg1,arg2,arg3,more);
});
G__18439.cljs$core$IFn$_invoke$arity$variadic = G__18439__delegate;
return G__18439;
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
var G__18475 = null;
var G__18475__1 = (function (a){
var G__18459 = (((a == null))?x:a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18459) : f.call(null,G__18459));
});
var G__18475__2 = (function (a,b){
var G__18460 = (((a == null))?x:a);
var G__18461 = b;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__18460,G__18461) : f.call(null,G__18460,G__18461));
});
var G__18475__3 = (function (a,b,c){
var G__18462 = (((a == null))?x:a);
var G__18463 = b;
var G__18464 = c;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__18462,G__18463,G__18464) : f.call(null,G__18462,G__18463,G__18464));
});
var G__18475__4 = (function() { 
var G__18476__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),b,c,ds);
};
var G__18476 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18476__delegate.call(this,a,b,c,ds);};
G__18476.cljs$lang$maxFixedArity = 3;
G__18476.cljs$lang$applyTo = (function (arglist__18477){
var a = cljs.core.first(arglist__18477);
arglist__18477 = cljs.core.next(arglist__18477);
var b = cljs.core.first(arglist__18477);
arglist__18477 = cljs.core.next(arglist__18477);
var c = cljs.core.first(arglist__18477);
var ds = cljs.core.rest(arglist__18477);
return G__18476__delegate(a,b,c,ds);
});
G__18476.cljs$core$IFn$_invoke$arity$variadic = G__18476__delegate;
return G__18476;
})()
;
G__18475 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__18475__1.call(this,a);
case 2:
return G__18475__2.call(this,a,b);
case 3:
return G__18475__3.call(this,a,b,c);
default:
return G__18475__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18475.cljs$lang$maxFixedArity = 3;
G__18475.cljs$lang$applyTo = G__18475__4.cljs$lang$applyTo;
G__18475.cljs$core$IFn$_invoke$arity$1 = G__18475__1;
G__18475.cljs$core$IFn$_invoke$arity$2 = G__18475__2;
G__18475.cljs$core$IFn$_invoke$arity$3 = G__18475__3;
G__18475.cljs$core$IFn$_invoke$arity$variadic = G__18475__4.cljs$core$IFn$_invoke$arity$variadic;
return G__18475;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__18478 = null;
var G__18478__2 = (function (a,b){
var G__18465 = (((a == null))?x:a);
var G__18466 = (((b == null))?y:b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__18465,G__18466) : f.call(null,G__18465,G__18466));
});
var G__18478__3 = (function (a,b,c){
var G__18467 = (((a == null))?x:a);
var G__18468 = (((b == null))?y:b);
var G__18469 = c;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__18467,G__18468,G__18469) : f.call(null,G__18467,G__18468,G__18469));
});
var G__18478__4 = (function() { 
var G__18479__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__18479 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18479__delegate.call(this,a,b,c,ds);};
G__18479.cljs$lang$maxFixedArity = 3;
G__18479.cljs$lang$applyTo = (function (arglist__18480){
var a = cljs.core.first(arglist__18480);
arglist__18480 = cljs.core.next(arglist__18480);
var b = cljs.core.first(arglist__18480);
arglist__18480 = cljs.core.next(arglist__18480);
var c = cljs.core.first(arglist__18480);
var ds = cljs.core.rest(arglist__18480);
return G__18479__delegate(a,b,c,ds);
});
G__18479.cljs$core$IFn$_invoke$arity$variadic = G__18479__delegate;
return G__18479;
})()
;
G__18478 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__18478__2.call(this,a,b);
case 3:
return G__18478__3.call(this,a,b,c);
default:
return G__18478__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18478.cljs$lang$maxFixedArity = 3;
G__18478.cljs$lang$applyTo = G__18478__4.cljs$lang$applyTo;
G__18478.cljs$core$IFn$_invoke$arity$2 = G__18478__2;
G__18478.cljs$core$IFn$_invoke$arity$3 = G__18478__3;
G__18478.cljs$core$IFn$_invoke$arity$variadic = G__18478__4.cljs$core$IFn$_invoke$arity$variadic;
return G__18478;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__18481 = null;
var G__18481__2 = (function (a,b){
var G__18470 = (((a == null))?x:a);
var G__18471 = (((b == null))?y:b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__18470,G__18471) : f.call(null,G__18470,G__18471));
});
var G__18481__3 = (function (a,b,c){
var G__18472 = (((a == null))?x:a);
var G__18473 = (((b == null))?y:b);
var G__18474 = (((c == null))?z:c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__18472,G__18473,G__18474) : f.call(null,G__18472,G__18473,G__18474));
});
var G__18481__4 = (function() { 
var G__18482__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__18482 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18482__delegate.call(this,a,b,c,ds);};
G__18482.cljs$lang$maxFixedArity = 3;
G__18482.cljs$lang$applyTo = (function (arglist__18483){
var a = cljs.core.first(arglist__18483);
arglist__18483 = cljs.core.next(arglist__18483);
var b = cljs.core.first(arglist__18483);
arglist__18483 = cljs.core.next(arglist__18483);
var c = cljs.core.first(arglist__18483);
var ds = cljs.core.rest(arglist__18483);
return G__18482__delegate(a,b,c,ds);
});
G__18482.cljs$core$IFn$_invoke$arity$variadic = G__18482__delegate;
return G__18482;
})()
;
G__18481 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__18481__2.call(this,a,b);
case 3:
return G__18481__3.call(this,a,b,c);
default:
return G__18481__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18481.cljs$lang$maxFixedArity = 3;
G__18481.cljs$lang$applyTo = G__18481__4.cljs$lang$applyTo;
G__18481.cljs$core$IFn$_invoke$arity$2 = G__18481__2;
G__18481.cljs$core$IFn$_invoke$arity$3 = G__18481__3;
G__18481.cljs$core$IFn$_invoke$arity$variadic = G__18481__4.cljs$core$IFn$_invoke$arity$variadic;
return G__18481;
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
var n__4517__auto___18532 = size;
var i_18533 = (0);
while(true){
if((i_18533 < n__4517__auto___18532)){
cljs.core.chunk_append(b,(function (){var G__18528 = (idx + i_18533);
var G__18529 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_18533);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__18528,G__18529) : f.call(null,G__18528,G__18529));
})());

var G__18534 = (i_18533 + (1));
i_18533 = G__18534;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons(cljs.core.chunk(b),mapi((idx + size),cljs.core.chunk_rest(s)));
} else {
return cljs.core.cons((function (){var G__18530 = idx;
var G__18531 = cljs.core.first(s);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__18530,G__18531) : f.call(null,G__18530,G__18531));
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
var G__18553 = null;
var G__18553__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__18553__1 = (function (result){
var G__18547 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__18547) : rf.call(null,G__18547));
});
var G__18553__2 = (function (result,input){
var v = (function (){var G__18548 = input;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18548) : f.call(null,G__18548));
})();
if((v == null)){
return result;
} else {
var G__18549 = result;
var G__18550 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__18549,G__18550) : rf.call(null,G__18549,G__18550));
}
});
G__18553 = function(result,input){
switch(arguments.length){
case 0:
return G__18553__0.call(this);
case 1:
return G__18553__1.call(this,result);
case 2:
return G__18553__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18553.cljs$core$IFn$_invoke$arity$0 = G__18553__0;
G__18553.cljs$core$IFn$_invoke$arity$1 = G__18553__1;
G__18553.cljs$core$IFn$_invoke$arity$2 = G__18553__2;
return G__18553;
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
var n__4517__auto___18554 = size;
var i_18555 = (0);
while(true){
if((i_18555 < n__4517__auto___18554)){
var x_18556 = (function (){var G__18551 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_18555);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18551) : f.call(null,G__18551));
})();
if((x_18556 == null)){
} else {
cljs.core.chunk_append(b,x_18556);
}

var G__18557 = (i_18555 + (1));
i_18555 = G__18557;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons(cljs.core.chunk(b),keep.cljs$core$IFn$_invoke$arity$2(f,cljs.core.chunk_rest(s)));
} else {
var x = (function (){var G__18552 = cljs.core.first(s);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18552) : f.call(null,G__18552));
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
var G__18558 = this$__$1;
return goog.getUid(G__18558);
});

cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__18559 = cljs.core.seq(self__.watches);
var chunk__18560 = null;
var count__18561 = (0);
var i__18562 = (0);
while(true){
if((i__18562 < count__18561)){
var vec__18563 = chunk__18560.cljs$core$IIndexed$_nth$arity$2(null,i__18562);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18563,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18563,(1),null);
var G__18564_18573 = key;
var G__18565_18574 = this$__$1;
var G__18566_18575 = oldval;
var G__18567_18576 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__18564_18573,G__18565_18574,G__18566_18575,G__18567_18576) : f.call(null,G__18564_18573,G__18565_18574,G__18566_18575,G__18567_18576));

var G__18577 = seq__18559;
var G__18578 = chunk__18560;
var G__18579 = count__18561;
var G__18580 = (i__18562 + (1));
seq__18559 = G__18577;
chunk__18560 = G__18578;
count__18561 = G__18579;
i__18562 = G__18580;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__18559);
if(temp__4126__auto__){
var seq__18559__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18559__$1)){
var c__4417__auto__ = cljs.core.chunk_first(seq__18559__$1);
var G__18581 = cljs.core.chunk_rest(seq__18559__$1);
var G__18582 = c__4417__auto__;
var G__18583 = cljs.core.count(c__4417__auto__);
var G__18584 = (0);
seq__18559 = G__18581;
chunk__18560 = G__18582;
count__18561 = G__18583;
i__18562 = G__18584;
continue;
} else {
var vec__18568 = cljs.core.first(seq__18559__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18568,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18568,(1),null);
var G__18569_18585 = key;
var G__18570_18586 = this$__$1;
var G__18571_18587 = oldval;
var G__18572_18588 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__18569_18585,G__18570_18586,G__18571_18587,G__18572_18588) : f.call(null,G__18569_18585,G__18570_18586,G__18571_18587,G__18572_18588));

var G__18589 = cljs.core.next(seq__18559__$1);
var G__18590 = null;
var G__18591 = (0);
var G__18592 = (0);
seq__18559 = G__18589;
chunk__18560 = G__18590;
count__18561 = G__18591;
i__18562 = G__18592;
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

cljs.core.Atom.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/Atom");
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
var G__18596__delegate = function (x,p__18593){
var map__18595 = p__18593;
var map__18595__$1 = ((cljs.core.seq_QMARK_(map__18595))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18595):map__18595);
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18595__$1,cljs.core.constant$keyword$13);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18595__$1,cljs.core.constant$keyword$3);
return (new cljs.core.Atom(x,meta,validator,null));
};
var G__18596 = function (x,var_args){
var p__18593 = null;
if (arguments.length > 1) {
  p__18593 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__18596__delegate.call(this,x,p__18593);};
G__18596.cljs$lang$maxFixedArity = 1;
G__18596.cljs$lang$applyTo = (function (arglist__18597){
var x = cljs.core.first(arglist__18597);
var p__18593 = cljs.core.rest(arglist__18597);
return G__18596__delegate(x,p__18593);
});
G__18596.cljs$core$IFn$_invoke$arity$variadic = G__18596__delegate;
return G__18596;
})()
;
atom = function(x,var_args){
var p__18593 = var_args;
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
if(cljs.core.truth_((function (){var G__18600 = new_value;
return (validate.cljs$core$IFn$_invoke$arity$1 ? validate.cljs$core$IFn$_invoke$arity$1(G__18600) : validate.call(null,G__18600));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str((function (){var G__18601 = cljs.core.list(new cljs.core.Symbol(null,"validate","validate",1439230700,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null));
return (cljs.core.pr_str.cljs$core$IFn$_invoke$arity$1 ? cljs.core.pr_str.cljs$core$IFn$_invoke$arity$1(G__18601) : cljs.core.pr_str.call(null,G__18601));
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
return cljs.core.reset_BANG_(a,(function (){var G__18608 = a.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18608) : f.call(null,G__18608));
})());
} else {
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$2(a,f);
}
});
var swap_BANG___3 = (function (a,f,x){
if((a instanceof cljs.core.Atom)){
return cljs.core.reset_BANG_(a,(function (){var G__18609 = a.state;
var G__18610 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__18609,G__18610) : f.call(null,G__18609,G__18610));
})());
} else {
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$3(a,f,x);
}
});
var swap_BANG___4 = (function (a,f,x,y){
if((a instanceof cljs.core.Atom)){
return cljs.core.reset_BANG_(a,(function (){var G__18611 = a.state;
var G__18612 = x;
var G__18613 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__18611,G__18612,G__18613) : f.call(null,G__18611,G__18612,G__18613));
})());
} else {
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,f,x,y);
}
});
var swap_BANG___5 = (function() { 
var G__18614__delegate = function (a,f,x,y,more){
if((a instanceof cljs.core.Atom)){
return cljs.core.reset_BANG_(a,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,a.state,x,y,more));
} else {
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$5(a,f,x,y,more);
}
};
var G__18614 = function (a,f,x,y,var_args){
var more = null;
if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__18614__delegate.call(this,a,f,x,y,more);};
G__18614.cljs$lang$maxFixedArity = 4;
G__18614.cljs$lang$applyTo = (function (arglist__18615){
var a = cljs.core.first(arglist__18615);
arglist__18615 = cljs.core.next(arglist__18615);
var f = cljs.core.first(arglist__18615);
arglist__18615 = cljs.core.next(arglist__18615);
var x = cljs.core.first(arglist__18615);
arglist__18615 = cljs.core.next(arglist__18615);
var y = cljs.core.first(arglist__18615);
var more = cljs.core.rest(arglist__18615);
return G__18614__delegate(a,f,x,y,more);
});
G__18614.cljs$core$IFn$_invoke$arity$variadic = G__18614__delegate;
return G__18614;
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
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a.state,oldval)){
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

cljs.core.Volatile.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/Volatile");
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
var G__18682 = null;
var G__18682__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__18682__1 = (function (result){
var G__18649 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__18649) : rf.call(null,G__18649));
});
var G__18682__2 = (function (result,input){
var i = ia.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(ia.cljs$core$IDeref$_deref$arity$1(null) + (1)));
var v = (function (){var G__18650 = i;
var G__18651 = input;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__18650,G__18651) : f.call(null,G__18650,G__18651));
})();
if((v == null)){
return result;
} else {
var G__18652 = result;
var G__18653 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__18652,G__18653) : rf.call(null,G__18652,G__18653));
}
});
G__18682 = function(result,input){
switch(arguments.length){
case 0:
return G__18682__0.call(this);
case 1:
return G__18682__1.call(this,result);
case 2:
return G__18682__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18682.cljs$core$IFn$_invoke$arity$0 = G__18682__0;
G__18682.cljs$core$IFn$_invoke$arity$1 = G__18682__1;
G__18682.cljs$core$IFn$_invoke$arity$2 = G__18682__2;
return G__18682;
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
var n__4517__auto___18683 = size;
var i_18684 = (0);
while(true){
if((i_18684 < n__4517__auto___18683)){
var x_18685 = (function (){var G__18678 = (idx + i_18684);
var G__18679 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_18684);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__18678,G__18679) : f.call(null,G__18678,G__18679));
})();
if((x_18685 == null)){
} else {
cljs.core.chunk_append(b,x_18685);
}

var G__18686 = (i_18684 + (1));
i_18684 = G__18686;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons(cljs.core.chunk(b),keepi((idx + size),cljs.core.chunk_rest(s)));
} else {
var x = (function (){var G__18680 = idx;
var G__18681 = cljs.core.first(s);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__18680,G__18681) : f.call(null,G__18680,G__18681));
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
return cljs.core.boolean$((function (){var G__18900 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__18900) : p.call(null,G__18900));
})());
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3618__auto__ = (function (){var G__18902 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__18902) : p.call(null,G__18902));
})();
if(cljs.core.truth_(and__3618__auto__)){
var G__18903 = y;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__18903) : p.call(null,G__18903));
} else {
return and__3618__auto__;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3618__auto__ = (function (){var G__18905 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__18905) : p.call(null,G__18905));
})();
if(cljs.core.truth_(and__3618__auto__)){
var and__3618__auto____$1 = (function (){var G__18907 = y;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__18907) : p.call(null,G__18907));
})();
if(cljs.core.truth_(and__3618__auto____$1)){
var G__18908 = z;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__18908) : p.call(null,G__18908));
} else {
return and__3618__auto____$1;
}
} else {
return and__3618__auto__;
}
})());
});
var ep1__4 = (function() { 
var G__19077__delegate = function (x,y,z,args){
return cljs.core.boolean$((ep1.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_(p,args)));
};
var G__19077 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19077__delegate.call(this,x,y,z,args);};
G__19077.cljs$lang$maxFixedArity = 3;
G__19077.cljs$lang$applyTo = (function (arglist__19078){
var x = cljs.core.first(arglist__19078);
arglist__19078 = cljs.core.next(arglist__19078);
var y = cljs.core.first(arglist__19078);
arglist__19078 = cljs.core.next(arglist__19078);
var z = cljs.core.first(arglist__19078);
var args = cljs.core.rest(arglist__19078);
return G__19077__delegate(x,y,z,args);
});
G__19077.cljs$core$IFn$_invoke$arity$variadic = G__19077__delegate;
return G__19077;
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
return cljs.core.boolean$((function (){var and__3618__auto__ = (function (){var G__18940 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__18940) : p1.call(null,G__18940));
})();
if(cljs.core.truth_(and__3618__auto__)){
var G__18941 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__18941) : p2.call(null,G__18941));
} else {
return and__3618__auto__;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3618__auto__ = (function (){var G__18943 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__18943) : p1.call(null,G__18943));
})();
if(cljs.core.truth_(and__3618__auto__)){
var and__3618__auto____$1 = (function (){var G__18945 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__18945) : p1.call(null,G__18945));
})();
if(cljs.core.truth_(and__3618__auto____$1)){
var and__3618__auto____$2 = (function (){var G__18947 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__18947) : p2.call(null,G__18947));
})();
if(cljs.core.truth_(and__3618__auto____$2)){
var G__18948 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__18948) : p2.call(null,G__18948));
} else {
return and__3618__auto____$2;
}
} else {
return and__3618__auto____$1;
}
} else {
return and__3618__auto__;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3618__auto__ = (function (){var G__18950 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__18950) : p1.call(null,G__18950));
})();
if(cljs.core.truth_(and__3618__auto__)){
var and__3618__auto____$1 = (function (){var G__18952 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__18952) : p1.call(null,G__18952));
})();
if(cljs.core.truth_(and__3618__auto____$1)){
var and__3618__auto____$2 = (function (){var G__18954 = z;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__18954) : p1.call(null,G__18954));
})();
if(cljs.core.truth_(and__3618__auto____$2)){
var and__3618__auto____$3 = (function (){var G__18956 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__18956) : p2.call(null,G__18956));
})();
if(cljs.core.truth_(and__3618__auto____$3)){
var and__3618__auto____$4 = (function (){var G__18958 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__18958) : p2.call(null,G__18958));
})();
if(cljs.core.truth_(and__3618__auto____$4)){
var G__18959 = z;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__18959) : p2.call(null,G__18959));
} else {
return and__3618__auto____$4;
}
} else {
return and__3618__auto____$3;
}
} else {
return and__3618__auto____$2;
}
} else {
return and__3618__auto____$1;
}
} else {
return and__3618__auto__;
}
})());
});
var ep2__4 = (function() { 
var G__19079__delegate = function (x,y,z,args){
return cljs.core.boolean$((ep2.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_((function (p1__18687_SHARP_){
var and__3618__auto__ = (function (){var G__18964 = p1__18687_SHARP_;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__18964) : p1.call(null,G__18964));
})();
if(cljs.core.truth_(and__3618__auto__)){
var G__18965 = p1__18687_SHARP_;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__18965) : p2.call(null,G__18965));
} else {
return and__3618__auto__;
}
}),args)));
};
var G__19079 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19079__delegate.call(this,x,y,z,args);};
G__19079.cljs$lang$maxFixedArity = 3;
G__19079.cljs$lang$applyTo = (function (arglist__19080){
var x = cljs.core.first(arglist__19080);
arglist__19080 = cljs.core.next(arglist__19080);
var y = cljs.core.first(arglist__19080);
arglist__19080 = cljs.core.next(arglist__19080);
var z = cljs.core.first(arglist__19080);
var args = cljs.core.rest(arglist__19080);
return G__19079__delegate(x,y,z,args);
});
G__19079.cljs$core$IFn$_invoke$arity$variadic = G__19079__delegate;
return G__19079;
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
return cljs.core.boolean$((function (){var and__3618__auto__ = (function (){var G__19011 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__19011) : p1.call(null,G__19011));
})();
if(cljs.core.truth_(and__3618__auto__)){
var and__3618__auto____$1 = (function (){var G__19013 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__19013) : p2.call(null,G__19013));
})();
if(cljs.core.truth_(and__3618__auto____$1)){
var G__19014 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__19014) : p3.call(null,G__19014));
} else {
return and__3618__auto____$1;
}
} else {
return and__3618__auto__;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3618__auto__ = (function (){var G__19016 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__19016) : p1.call(null,G__19016));
})();
if(cljs.core.truth_(and__3618__auto__)){
var and__3618__auto____$1 = (function (){var G__19018 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__19018) : p2.call(null,G__19018));
})();
if(cljs.core.truth_(and__3618__auto____$1)){
var and__3618__auto____$2 = (function (){var G__19020 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__19020) : p3.call(null,G__19020));
})();
if(cljs.core.truth_(and__3618__auto____$2)){
var and__3618__auto____$3 = (function (){var G__19022 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__19022) : p1.call(null,G__19022));
})();
if(cljs.core.truth_(and__3618__auto____$3)){
var and__3618__auto____$4 = (function (){var G__19024 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__19024) : p2.call(null,G__19024));
})();
if(cljs.core.truth_(and__3618__auto____$4)){
var G__19025 = y;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__19025) : p3.call(null,G__19025));
} else {
return and__3618__auto____$4;
}
} else {
return and__3618__auto____$3;
}
} else {
return and__3618__auto____$2;
}
} else {
return and__3618__auto____$1;
}
} else {
return and__3618__auto__;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3618__auto__ = (function (){var G__19027 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__19027) : p1.call(null,G__19027));
})();
if(cljs.core.truth_(and__3618__auto__)){
var and__3618__auto____$1 = (function (){var G__19029 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__19029) : p2.call(null,G__19029));
})();
if(cljs.core.truth_(and__3618__auto____$1)){
var and__3618__auto____$2 = (function (){var G__19031 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__19031) : p3.call(null,G__19031));
})();
if(cljs.core.truth_(and__3618__auto____$2)){
var and__3618__auto____$3 = (function (){var G__19033 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__19033) : p1.call(null,G__19033));
})();
if(cljs.core.truth_(and__3618__auto____$3)){
var and__3618__auto____$4 = (function (){var G__19035 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__19035) : p2.call(null,G__19035));
})();
if(cljs.core.truth_(and__3618__auto____$4)){
var and__3618__auto____$5 = (function (){var G__19037 = y;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__19037) : p3.call(null,G__19037));
})();
if(cljs.core.truth_(and__3618__auto____$5)){
var and__3618__auto____$6 = (function (){var G__19039 = z;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__19039) : p1.call(null,G__19039));
})();
if(cljs.core.truth_(and__3618__auto____$6)){
var and__3618__auto____$7 = (function (){var G__19041 = z;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__19041) : p2.call(null,G__19041));
})();
if(cljs.core.truth_(and__3618__auto____$7)){
var G__19042 = z;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__19042) : p3.call(null,G__19042));
} else {
return and__3618__auto____$7;
}
} else {
return and__3618__auto____$6;
}
} else {
return and__3618__auto____$5;
}
} else {
return and__3618__auto____$4;
}
} else {
return and__3618__auto____$3;
}
} else {
return and__3618__auto____$2;
}
} else {
return and__3618__auto____$1;
}
} else {
return and__3618__auto__;
}
})());
});
var ep3__4 = (function() { 
var G__19081__delegate = function (x,y,z,args){
return cljs.core.boolean$((ep3.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_((function (p1__18688_SHARP_){
var and__3618__auto__ = (function (){var G__19049 = p1__18688_SHARP_;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__19049) : p1.call(null,G__19049));
})();
if(cljs.core.truth_(and__3618__auto__)){
var and__3618__auto____$1 = (function (){var G__19051 = p1__18688_SHARP_;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__19051) : p2.call(null,G__19051));
})();
if(cljs.core.truth_(and__3618__auto____$1)){
var G__19052 = p1__18688_SHARP_;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__19052) : p3.call(null,G__19052));
} else {
return and__3618__auto____$1;
}
} else {
return and__3618__auto__;
}
}),args)));
};
var G__19081 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19081__delegate.call(this,x,y,z,args);};
G__19081.cljs$lang$maxFixedArity = 3;
G__19081.cljs$lang$applyTo = (function (arglist__19082){
var x = cljs.core.first(arglist__19082);
arglist__19082 = cljs.core.next(arglist__19082);
var y = cljs.core.first(arglist__19082);
arglist__19082 = cljs.core.next(arglist__19082);
var z = cljs.core.first(arglist__19082);
var args = cljs.core.rest(arglist__19082);
return G__19081__delegate(x,y,z,args);
});
G__19081.cljs$core$IFn$_invoke$arity$variadic = G__19081__delegate;
return G__19081;
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
var G__19083__delegate = function (p1,p2,p3,ps){
var ps__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(p1,p2,p3,ps);
return ((function (ps__$1){
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__18689_SHARP_){
var G__19068 = x;
return (p1__18689_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18689_SHARP_.cljs$core$IFn$_invoke$arity$1(G__19068) : p1__18689_SHARP_.call(null,G__19068));
});})(ps__$1))
,ps__$1);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__18690_SHARP_){
var and__3618__auto__ = (function (){var G__19070 = x;
return (p1__18690_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18690_SHARP_.cljs$core$IFn$_invoke$arity$1(G__19070) : p1__18690_SHARP_.call(null,G__19070));
})();
if(cljs.core.truth_(and__3618__auto__)){
var G__19071 = y;
return (p1__18690_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18690_SHARP_.cljs$core$IFn$_invoke$arity$1(G__19071) : p1__18690_SHARP_.call(null,G__19071));
} else {
return and__3618__auto__;
}
});})(ps__$1))
,ps__$1);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__18691_SHARP_){
var and__3618__auto__ = (function (){var G__19073 = x;
return (p1__18691_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18691_SHARP_.cljs$core$IFn$_invoke$arity$1(G__19073) : p1__18691_SHARP_.call(null,G__19073));
})();
if(cljs.core.truth_(and__3618__auto__)){
var and__3618__auto____$1 = (function (){var G__19075 = y;
return (p1__18691_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18691_SHARP_.cljs$core$IFn$_invoke$arity$1(G__19075) : p1__18691_SHARP_.call(null,G__19075));
})();
if(cljs.core.truth_(and__3618__auto____$1)){
var G__19076 = z;
return (p1__18691_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18691_SHARP_.cljs$core$IFn$_invoke$arity$1(G__19076) : p1__18691_SHARP_.call(null,G__19076));
} else {
return and__3618__auto____$1;
}
} else {
return and__3618__auto__;
}
});})(ps__$1))
,ps__$1);
});
var epn__4 = (function() { 
var G__19084__delegate = function (x,y,z,args){
return cljs.core.boolean$((epn.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__18692_SHARP_){
return cljs.core.every_QMARK_(p1__18692_SHARP_,args);
});})(ps__$1))
,ps__$1)));
};
var G__19084 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19084__delegate.call(this,x,y,z,args);};
G__19084.cljs$lang$maxFixedArity = 3;
G__19084.cljs$lang$applyTo = (function (arglist__19085){
var x = cljs.core.first(arglist__19085);
arglist__19085 = cljs.core.next(arglist__19085);
var y = cljs.core.first(arglist__19085);
arglist__19085 = cljs.core.next(arglist__19085);
var z = cljs.core.first(arglist__19085);
var args = cljs.core.rest(arglist__19085);
return G__19084__delegate(x,y,z,args);
});
G__19084.cljs$core$IFn$_invoke$arity$variadic = G__19084__delegate;
return G__19084;
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
var G__19083 = function (p1,p2,p3,var_args){
var ps = null;
if (arguments.length > 3) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19083__delegate.call(this,p1,p2,p3,ps);};
G__19083.cljs$lang$maxFixedArity = 3;
G__19083.cljs$lang$applyTo = (function (arglist__19086){
var p1 = cljs.core.first(arglist__19086);
arglist__19086 = cljs.core.next(arglist__19086);
var p2 = cljs.core.first(arglist__19086);
arglist__19086 = cljs.core.next(arglist__19086);
var p3 = cljs.core.first(arglist__19086);
var ps = cljs.core.rest(arglist__19086);
return G__19083__delegate(p1,p2,p3,ps);
});
G__19083.cljs$core$IFn$_invoke$arity$variadic = G__19083__delegate;
return G__19083;
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
var G__19292 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__19292) : p.call(null,G__19292));
});
var sp1__2 = (function (x,y){
var or__3630__auto__ = (function (){var G__19294 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__19294) : p.call(null,G__19294));
})();
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
var G__19295 = y;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__19295) : p.call(null,G__19295));
}
});
var sp1__3 = (function (x,y,z){
var or__3630__auto__ = (function (){var G__19297 = x;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__19297) : p.call(null,G__19297));
})();
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (function (){var G__19299 = y;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__19299) : p.call(null,G__19299));
})();
if(cljs.core.truth_(or__3630__auto____$1)){
return or__3630__auto____$1;
} else {
var G__19300 = z;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__19300) : p.call(null,G__19300));
}
}
});
var sp1__4 = (function() { 
var G__19461__delegate = function (x,y,z,args){
var or__3630__auto__ = sp1.cljs$core$IFn$_invoke$arity$3(x,y,z);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return cljs.core.some(p,args);
}
};
var G__19461 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19461__delegate.call(this,x,y,z,args);};
G__19461.cljs$lang$maxFixedArity = 3;
G__19461.cljs$lang$applyTo = (function (arglist__19462){
var x = cljs.core.first(arglist__19462);
arglist__19462 = cljs.core.next(arglist__19462);
var y = cljs.core.first(arglist__19462);
arglist__19462 = cljs.core.next(arglist__19462);
var z = cljs.core.first(arglist__19462);
var args = cljs.core.rest(arglist__19462);
return G__19461__delegate(x,y,z,args);
});
G__19461.cljs$core$IFn$_invoke$arity$variadic = G__19461__delegate;
return G__19461;
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
var or__3630__auto__ = (function (){var G__19332 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__19332) : p1.call(null,G__19332));
})();
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
var G__19333 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__19333) : p2.call(null,G__19333));
}
});
var sp2__2 = (function (x,y){
var or__3630__auto__ = (function (){var G__19335 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__19335) : p1.call(null,G__19335));
})();
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (function (){var G__19337 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__19337) : p1.call(null,G__19337));
})();
if(cljs.core.truth_(or__3630__auto____$1)){
return or__3630__auto____$1;
} else {
var or__3630__auto____$2 = (function (){var G__19339 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__19339) : p2.call(null,G__19339));
})();
if(cljs.core.truth_(or__3630__auto____$2)){
return or__3630__auto____$2;
} else {
var G__19340 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__19340) : p2.call(null,G__19340));
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3630__auto__ = (function (){var G__19342 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__19342) : p1.call(null,G__19342));
})();
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (function (){var G__19344 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__19344) : p1.call(null,G__19344));
})();
if(cljs.core.truth_(or__3630__auto____$1)){
return or__3630__auto____$1;
} else {
var or__3630__auto____$2 = (function (){var G__19346 = z;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__19346) : p1.call(null,G__19346));
})();
if(cljs.core.truth_(or__3630__auto____$2)){
return or__3630__auto____$2;
} else {
var or__3630__auto____$3 = (function (){var G__19348 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__19348) : p2.call(null,G__19348));
})();
if(cljs.core.truth_(or__3630__auto____$3)){
return or__3630__auto____$3;
} else {
var or__3630__auto____$4 = (function (){var G__19350 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__19350) : p2.call(null,G__19350));
})();
if(cljs.core.truth_(or__3630__auto____$4)){
return or__3630__auto____$4;
} else {
var G__19351 = z;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__19351) : p2.call(null,G__19351));
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__19463__delegate = function (x,y,z,args){
var or__3630__auto__ = sp2.cljs$core$IFn$_invoke$arity$3(x,y,z);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return cljs.core.some(((function (or__3630__auto__){
return (function (p1__19087_SHARP_){
var or__3630__auto____$1 = (function (){var G__19353 = p1__19087_SHARP_;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__19353) : p1.call(null,G__19353));
})();
if(cljs.core.truth_(or__3630__auto____$1)){
return or__3630__auto____$1;
} else {
var G__19354 = p1__19087_SHARP_;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__19354) : p2.call(null,G__19354));
}
});})(or__3630__auto__))
,args);
}
};
var G__19463 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19463__delegate.call(this,x,y,z,args);};
G__19463.cljs$lang$maxFixedArity = 3;
G__19463.cljs$lang$applyTo = (function (arglist__19464){
var x = cljs.core.first(arglist__19464);
arglist__19464 = cljs.core.next(arglist__19464);
var y = cljs.core.first(arglist__19464);
arglist__19464 = cljs.core.next(arglist__19464);
var z = cljs.core.first(arglist__19464);
var args = cljs.core.rest(arglist__19464);
return G__19463__delegate(x,y,z,args);
});
G__19463.cljs$core$IFn$_invoke$arity$variadic = G__19463__delegate;
return G__19463;
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
var or__3630__auto__ = (function (){var G__19400 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__19400) : p1.call(null,G__19400));
})();
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (function (){var G__19402 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__19402) : p2.call(null,G__19402));
})();
if(cljs.core.truth_(or__3630__auto____$1)){
return or__3630__auto____$1;
} else {
var G__19403 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__19403) : p3.call(null,G__19403));
}
}
});
var sp3__2 = (function (x,y){
var or__3630__auto__ = (function (){var G__19405 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__19405) : p1.call(null,G__19405));
})();
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (function (){var G__19407 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__19407) : p2.call(null,G__19407));
})();
if(cljs.core.truth_(or__3630__auto____$1)){
return or__3630__auto____$1;
} else {
var or__3630__auto____$2 = (function (){var G__19409 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__19409) : p3.call(null,G__19409));
})();
if(cljs.core.truth_(or__3630__auto____$2)){
return or__3630__auto____$2;
} else {
var or__3630__auto____$3 = (function (){var G__19411 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__19411) : p1.call(null,G__19411));
})();
if(cljs.core.truth_(or__3630__auto____$3)){
return or__3630__auto____$3;
} else {
var or__3630__auto____$4 = (function (){var G__19413 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__19413) : p2.call(null,G__19413));
})();
if(cljs.core.truth_(or__3630__auto____$4)){
return or__3630__auto____$4;
} else {
var G__19414 = y;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__19414) : p3.call(null,G__19414));
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3630__auto__ = (function (){var G__19416 = x;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__19416) : p1.call(null,G__19416));
})();
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (function (){var G__19418 = x;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__19418) : p2.call(null,G__19418));
})();
if(cljs.core.truth_(or__3630__auto____$1)){
return or__3630__auto____$1;
} else {
var or__3630__auto____$2 = (function (){var G__19420 = x;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__19420) : p3.call(null,G__19420));
})();
if(cljs.core.truth_(or__3630__auto____$2)){
return or__3630__auto____$2;
} else {
var or__3630__auto____$3 = (function (){var G__19422 = y;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__19422) : p1.call(null,G__19422));
})();
if(cljs.core.truth_(or__3630__auto____$3)){
return or__3630__auto____$3;
} else {
var or__3630__auto____$4 = (function (){var G__19424 = y;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__19424) : p2.call(null,G__19424));
})();
if(cljs.core.truth_(or__3630__auto____$4)){
return or__3630__auto____$4;
} else {
var or__3630__auto____$5 = (function (){var G__19426 = y;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__19426) : p3.call(null,G__19426));
})();
if(cljs.core.truth_(or__3630__auto____$5)){
return or__3630__auto____$5;
} else {
var or__3630__auto____$6 = (function (){var G__19428 = z;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__19428) : p1.call(null,G__19428));
})();
if(cljs.core.truth_(or__3630__auto____$6)){
return or__3630__auto____$6;
} else {
var or__3630__auto____$7 = (function (){var G__19430 = z;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__19430) : p2.call(null,G__19430));
})();
if(cljs.core.truth_(or__3630__auto____$7)){
return or__3630__auto____$7;
} else {
var G__19431 = z;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__19431) : p3.call(null,G__19431));
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
var G__19465__delegate = function (x,y,z,args){
var or__3630__auto__ = sp3.cljs$core$IFn$_invoke$arity$3(x,y,z);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return cljs.core.some(((function (or__3630__auto__){
return (function (p1__19088_SHARP_){
var or__3630__auto____$1 = (function (){var G__19433 = p1__19088_SHARP_;
return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__19433) : p1.call(null,G__19433));
})();
if(cljs.core.truth_(or__3630__auto____$1)){
return or__3630__auto____$1;
} else {
var or__3630__auto____$2 = (function (){var G__19435 = p1__19088_SHARP_;
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__19435) : p2.call(null,G__19435));
})();
if(cljs.core.truth_(or__3630__auto____$2)){
return or__3630__auto____$2;
} else {
var G__19436 = p1__19088_SHARP_;
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__19436) : p3.call(null,G__19436));
}
}
});})(or__3630__auto__))
,args);
}
};
var G__19465 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19465__delegate.call(this,x,y,z,args);};
G__19465.cljs$lang$maxFixedArity = 3;
G__19465.cljs$lang$applyTo = (function (arglist__19466){
var x = cljs.core.first(arglist__19466);
arglist__19466 = cljs.core.next(arglist__19466);
var y = cljs.core.first(arglist__19466);
arglist__19466 = cljs.core.next(arglist__19466);
var z = cljs.core.first(arglist__19466);
var args = cljs.core.rest(arglist__19466);
return G__19465__delegate(x,y,z,args);
});
G__19465.cljs$core$IFn$_invoke$arity$variadic = G__19465__delegate;
return G__19465;
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
var G__19467__delegate = function (p1,p2,p3,ps){
var ps__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(p1,p2,p3,ps);
return ((function (ps__$1){
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some(((function (ps__$1){
return (function (p1__19089_SHARP_){
var G__19452 = x;
return (p1__19089_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19089_SHARP_.cljs$core$IFn$_invoke$arity$1(G__19452) : p1__19089_SHARP_.call(null,G__19452));
});})(ps__$1))
,ps__$1);
});
var spn__2 = (function (x,y){
return cljs.core.some(((function (ps__$1){
return (function (p1__19090_SHARP_){
var or__3630__auto__ = (function (){var G__19454 = x;
return (p1__19090_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19090_SHARP_.cljs$core$IFn$_invoke$arity$1(G__19454) : p1__19090_SHARP_.call(null,G__19454));
})();
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
var G__19455 = y;
return (p1__19090_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19090_SHARP_.cljs$core$IFn$_invoke$arity$1(G__19455) : p1__19090_SHARP_.call(null,G__19455));
}
});})(ps__$1))
,ps__$1);
});
var spn__3 = (function (x,y,z){
return cljs.core.some(((function (ps__$1){
return (function (p1__19091_SHARP_){
var or__3630__auto__ = (function (){var G__19457 = x;
return (p1__19091_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19091_SHARP_.cljs$core$IFn$_invoke$arity$1(G__19457) : p1__19091_SHARP_.call(null,G__19457));
})();
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (function (){var G__19459 = y;
return (p1__19091_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19091_SHARP_.cljs$core$IFn$_invoke$arity$1(G__19459) : p1__19091_SHARP_.call(null,G__19459));
})();
if(cljs.core.truth_(or__3630__auto____$1)){
return or__3630__auto____$1;
} else {
var G__19460 = z;
return (p1__19091_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19091_SHARP_.cljs$core$IFn$_invoke$arity$1(G__19460) : p1__19091_SHARP_.call(null,G__19460));
}
}
});})(ps__$1))
,ps__$1);
});
var spn__4 = (function() { 
var G__19468__delegate = function (x,y,z,args){
var or__3630__auto__ = spn.cljs$core$IFn$_invoke$arity$3(x,y,z);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return cljs.core.some(((function (or__3630__auto__,ps__$1){
return (function (p1__19092_SHARP_){
return cljs.core.some(p1__19092_SHARP_,args);
});})(or__3630__auto__,ps__$1))
,ps__$1);
}
};
var G__19468 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19468__delegate.call(this,x,y,z,args);};
G__19468.cljs$lang$maxFixedArity = 3;
G__19468.cljs$lang$applyTo = (function (arglist__19469){
var x = cljs.core.first(arglist__19469);
arglist__19469 = cljs.core.next(arglist__19469);
var y = cljs.core.first(arglist__19469);
arglist__19469 = cljs.core.next(arglist__19469);
var z = cljs.core.first(arglist__19469);
var args = cljs.core.rest(arglist__19469);
return G__19468__delegate(x,y,z,args);
});
G__19468.cljs$core$IFn$_invoke$arity$variadic = G__19468__delegate;
return G__19468;
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
var G__19467 = function (p1,p2,p3,var_args){
var ps = null;
if (arguments.length > 3) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19467__delegate.call(this,p1,p2,p3,ps);};
G__19467.cljs$lang$maxFixedArity = 3;
G__19467.cljs$lang$applyTo = (function (arglist__19470){
var p1 = cljs.core.first(arglist__19470);
arglist__19470 = cljs.core.next(arglist__19470);
var p2 = cljs.core.first(arglist__19470);
arglist__19470 = cljs.core.next(arglist__19470);
var p3 = cljs.core.first(arglist__19470);
var ps = cljs.core.rest(arglist__19470);
return G__19467__delegate(p1,p2,p3,ps);
});
G__19467.cljs$core$IFn$_invoke$arity$variadic = G__19467__delegate;
return G__19467;
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
var G__19525 = null;
var G__19525__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__19525__1 = (function (result){
var G__19511 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__19511) : rf.call(null,G__19511));
});
var G__19525__2 = (function (result,input){
var G__19512 = result;
var G__19513 = (function (){var G__19514 = input;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19514) : f.call(null,G__19514));
})();
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__19512,G__19513) : rf.call(null,G__19512,G__19513));
});
var G__19525__3 = (function() { 
var G__19526__delegate = function (result,input,inputs){
var G__19515 = result;
var G__19516 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,input,inputs);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__19515,G__19516) : rf.call(null,G__19515,G__19516));
};
var G__19526 = function (result,input,var_args){
var inputs = null;
if (arguments.length > 2) {
  inputs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19526__delegate.call(this,result,input,inputs);};
G__19526.cljs$lang$maxFixedArity = 2;
G__19526.cljs$lang$applyTo = (function (arglist__19527){
var result = cljs.core.first(arglist__19527);
arglist__19527 = cljs.core.next(arglist__19527);
var input = cljs.core.first(arglist__19527);
var inputs = cljs.core.rest(arglist__19527);
return G__19526__delegate(result,input,inputs);
});
G__19526.cljs$core$IFn$_invoke$arity$variadic = G__19526__delegate;
return G__19526;
})()
;
G__19525 = function(result,input,var_args){
var inputs = var_args;
switch(arguments.length){
case 0:
return G__19525__0.call(this);
case 1:
return G__19525__1.call(this,result);
case 2:
return G__19525__2.call(this,result,input);
default:
return G__19525__3.cljs$core$IFn$_invoke$arity$variadic(result,input, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19525.cljs$lang$maxFixedArity = 2;
G__19525.cljs$lang$applyTo = G__19525__3.cljs$lang$applyTo;
G__19525.cljs$core$IFn$_invoke$arity$0 = G__19525__0;
G__19525.cljs$core$IFn$_invoke$arity$1 = G__19525__1;
G__19525.cljs$core$IFn$_invoke$arity$2 = G__19525__2;
G__19525.cljs$core$IFn$_invoke$arity$variadic = G__19525__3.cljs$core$IFn$_invoke$arity$variadic;
return G__19525;
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
var n__4517__auto___19528 = size;
var i_19529 = (0);
while(true){
if((i_19529 < n__4517__auto___19528)){
cljs.core.chunk_append(b,(function (){var G__19517 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_19529);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19517) : f.call(null,G__19517));
})());

var G__19530 = (i_19529 + (1));
i_19529 = G__19530;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons(cljs.core.chunk(b),map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.chunk_rest(s)));
} else {
return cljs.core.cons((function (){var G__19518 = cljs.core.first(s);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19518) : f.call(null,G__19518));
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
return cljs.core.cons((function (){var G__19519 = cljs.core.first(s1);
var G__19520 = cljs.core.first(s2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19519,G__19520) : f.call(null,G__19519,G__19520));
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
return cljs.core.cons((function (){var G__19521 = cljs.core.first(s1);
var G__19522 = cljs.core.first(s2);
var G__19523 = cljs.core.first(s3);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__19521,G__19522,G__19523) : f.call(null,G__19521,G__19522,G__19523));
})(),map.cljs$core$IFn$_invoke$arity$4(f,cljs.core.rest(s1),cljs.core.rest(s2),cljs.core.rest(s3)));
} else {
return null;
}
}),null,null));
});
var map__5 = (function() { 
var G__19531__delegate = function (f,c1,c2,c3,colls){
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
return (function (p1__19471_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,p1__19471_SHARP_);
});})(step))
,step(cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c3,cljs.core.array_seq([c2,c1], 0))));
};
var G__19531 = function (f,c1,c2,c3,var_args){
var colls = null;
if (arguments.length > 4) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__19531__delegate.call(this,f,c1,c2,c3,colls);};
G__19531.cljs$lang$maxFixedArity = 4;
G__19531.cljs$lang$applyTo = (function (arglist__19532){
var f = cljs.core.first(arglist__19532);
arglist__19532 = cljs.core.next(arglist__19532);
var c1 = cljs.core.first(arglist__19532);
arglist__19532 = cljs.core.next(arglist__19532);
var c2 = cljs.core.first(arglist__19532);
arglist__19532 = cljs.core.next(arglist__19532);
var c3 = cljs.core.first(arglist__19532);
var colls = cljs.core.rest(arglist__19532);
return G__19531__delegate(f,c1,c2,c3,colls);
});
G__19531.cljs$core$IFn$_invoke$arity$variadic = G__19531__delegate;
return G__19531;
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
var G__19541 = null;
var G__19541__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__19541__1 = (function (result){
var G__19538 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__19538) : rf.call(null,G__19538));
});
var G__19541__2 = (function (result,input){
var n__$1 = cljs.core.deref(na);
var nn = na.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(na.cljs$core$IDeref$_deref$arity$1(null) - (1)));
var result__$1 = (((n__$1 > (0)))?(function (){var G__19539 = result;
var G__19540 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__19539,G__19540) : rf.call(null,G__19539,G__19540));
})():result);
if(!((nn > (0)))){
return cljs.core.ensure_reduced(result__$1);
} else {
return result__$1;
}
});
G__19541 = function(result,input){
switch(arguments.length){
case 0:
return G__19541__0.call(this);
case 1:
return G__19541__1.call(this,result);
case 2:
return G__19541__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19541.cljs$core$IFn$_invoke$arity$0 = G__19541__0;
G__19541.cljs$core$IFn$_invoke$arity$1 = G__19541__1;
G__19541.cljs$core$IFn$_invoke$arity$2 = G__19541__2;
return G__19541;
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
var G__19548 = null;
var G__19548__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__19548__1 = (function (result){
var G__19545 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__19545) : rf.call(null,G__19545));
});
var G__19548__2 = (function (result,input){
var n__$1 = cljs.core.deref(na);
na.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(na.cljs$core$IDeref$_deref$arity$1(null) - (1)));

if((n__$1 > (0))){
return result;
} else {
var G__19546 = result;
var G__19547 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__19546,G__19547) : rf.call(null,G__19546,G__19547));
}
});
G__19548 = function(result,input){
switch(arguments.length){
case 0:
return G__19548__0.call(this);
case 1:
return G__19548__1.call(this,result);
case 2:
return G__19548__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19548.cljs$core$IFn$_invoke$arity$0 = G__19548__0;
G__19548.cljs$core$IFn$_invoke$arity$1 = G__19548__1;
G__19548.cljs$core$IFn$_invoke$arity$2 = G__19548__2;
return G__19548;
})()
;})(na))
});
});
var drop__2 = (function (n,coll){
var step = (function (n__$1,coll__$1){
while(true){
var s = cljs.core.seq(coll__$1);
if(((n__$1 > (0))) && (s)){
var G__19549 = (n__$1 - (1));
var G__19550 = cljs.core.rest(s);
n__$1 = G__19549;
coll__$1 = G__19550;
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
var G__19553 = cljs.core.next(s);
var G__19554 = cljs.core.next(lead);
s = G__19553;
lead = G__19554;
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
var G__19567 = null;
var G__19567__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__19567__1 = (function (result){
var G__19561 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__19561) : rf.call(null,G__19561));
});
var G__19567__2 = (function (result,input){
var drop_QMARK_ = cljs.core.deref(da);
if(cljs.core.truth_((function (){var and__3618__auto__ = drop_QMARK_;
if(cljs.core.truth_(and__3618__auto__)){
var G__19562 = input;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__19562) : pred.call(null,G__19562));
} else {
return and__3618__auto__;
}
})())){
return result;
} else {
cljs.core.vreset_BANG_(da,null);

var G__19563 = result;
var G__19564 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__19563,G__19564) : rf.call(null,G__19563,G__19564));
}
});
G__19567 = function(result,input){
switch(arguments.length){
case 0:
return G__19567__0.call(this);
case 1:
return G__19567__1.call(this,result);
case 2:
return G__19567__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19567.cljs$core$IFn$_invoke$arity$0 = G__19567__0;
G__19567.cljs$core$IFn$_invoke$arity$1 = G__19567__1;
G__19567.cljs$core$IFn$_invoke$arity$2 = G__19567__2;
return G__19567;
})()
;})(da))
});
});
var drop_while__2 = (function (pred,coll){
var step = (function (pred__$1,coll__$1){
while(true){
var s = cljs.core.seq(coll__$1);
if(cljs.core.truth_((function (){var and__3618__auto__ = s;
if(and__3618__auto__){
var G__19566 = cljs.core.first(s);
return (pred__$1.cljs$core$IFn$_invoke$arity$1 ? pred__$1.cljs$core$IFn$_invoke$arity$1(G__19566) : pred__$1.call(null,G__19566));
} else {
return and__3618__auto__;
}
})())){
var G__19568 = pred__$1;
var G__19569 = cljs.core.rest(s);
pred__$1 = G__19568;
coll__$1 = G__19569;
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
return iterate(f,(function (){var G__19578 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19578) : f.call(null,G__19578));
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
var G__19581__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c2,cljs.core.array_seq([c1], 0)));
if(cljs.core.every_QMARK_(cljs.core.identity,ss)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(interleave,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
} else {
return null;
}
}),null,null));
};
var G__19581 = function (c1,c2,var_args){
var colls = null;
if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19581__delegate.call(this,c1,c2,colls);};
G__19581.cljs$lang$maxFixedArity = 2;
G__19581.cljs$lang$applyTo = (function (arglist__19582){
var c1 = cljs.core.first(arglist__19582);
arglist__19582 = cljs.core.next(arglist__19582);
var c2 = cljs.core.first(arglist__19582);
var colls = cljs.core.rest(arglist__19582);
return G__19581__delegate(c1,c2,colls);
});
G__19581.cljs$core$IFn$_invoke$arity$variadic = G__19581__delegate;
return G__19581;
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
var G__19591__delegate = function (f,colls){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,f,colls));
};
var G__19591 = function (f,var_args){
var colls = null;
if (arguments.length > 1) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__19591__delegate.call(this,f,colls);};
G__19591.cljs$lang$maxFixedArity = 1;
G__19591.cljs$lang$applyTo = (function (arglist__19592){
var f = cljs.core.first(arglist__19592);
var colls = cljs.core.rest(arglist__19592);
return G__19591__delegate(f,colls);
});
G__19591.cljs$core$IFn$_invoke$arity$variadic = G__19591__delegate;
return G__19591;
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
var G__19611 = null;
var G__19611__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__19611__1 = (function (result){
var G__19605 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__19605) : rf.call(null,G__19605));
});
var G__19611__2 = (function (result,input){
if(cljs.core.truth_((function (){var G__19606 = input;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__19606) : pred.call(null,G__19606));
})())){
var G__19607 = result;
var G__19608 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__19607,G__19608) : rf.call(null,G__19607,G__19608));
} else {
return result;
}
});
G__19611 = function(result,input){
switch(arguments.length){
case 0:
return G__19611__0.call(this);
case 1:
return G__19611__1.call(this,result);
case 2:
return G__19611__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19611.cljs$core$IFn$_invoke$arity$0 = G__19611__0;
G__19611.cljs$core$IFn$_invoke$arity$1 = G__19611__1;
G__19611.cljs$core$IFn$_invoke$arity$2 = G__19611__2;
return G__19611;
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
var n__4517__auto___19612 = size;
var i_19613 = (0);
while(true){
if((i_19613 < n__4517__auto___19612)){
if(cljs.core.truth_((function (){var G__19609 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_19613);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__19609) : pred.call(null,G__19609));
})())){
cljs.core.chunk_append(b,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_19613));
} else {
}

var G__19614 = (i_19613 + (1));
i_19613 = G__19614;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons(cljs.core.chunk(b),filter.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.chunk_rest(s)));
} else {
var f = cljs.core.first(s);
var r = cljs.core.rest(s);
if(cljs.core.truth_((function (){var G__19610 = f;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__19610) : pred.call(null,G__19610));
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
return cljs.core.cons(node,(cljs.core.truth_((function (){var G__19621 = node;
return (branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(G__19621) : branch_QMARK_.call(null,G__19621));
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(walk,cljs.core.array_seq([(function (){var G__19622 = node;
return (children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(G__19622) : children.call(null,G__19622));
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
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__19623_SHARP_){
return !(cljs.core.sequential_QMARK_(p1__19623_SHARP_));
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
if((function (){var G__19626 = to;
if(G__19626){
var bit__4304__auto__ = (G__19626.cljs$lang$protocol_mask$partition1$ & (4));
if((bit__4304__auto__) || (G__19626.cljs$core$IEditableCollection$)){
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
if((function (){var G__19627 = to;
if(G__19627){
var bit__4304__auto__ = (G__19627.cljs$lang$protocol_mask$partition1$ & (4));
if((bit__4304__auto__) || (G__19627.cljs$core$IEditableCollection$)){
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
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__19629 = o;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19629) : f.call(null,G__19629));
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
var G__19630__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map,f,c1,c2,c3,cljs.core.array_seq([colls], 0)));
};
var G__19630 = function (f,c1,c2,c3,var_args){
var colls = null;
if (arguments.length > 4) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__19630__delegate.call(this,f,c1,c2,c3,colls);};
G__19630.cljs$lang$maxFixedArity = 4;
G__19630.cljs$lang$applyTo = (function (arglist__19631){
var f = cljs.core.first(arglist__19631);
arglist__19631 = cljs.core.next(arglist__19631);
var c1 = cljs.core.first(arglist__19631);
arglist__19631 = cljs.core.next(arglist__19631);
var c2 = cljs.core.first(arglist__19631);
arglist__19631 = cljs.core.next(arglist__19631);
var c3 = cljs.core.first(arglist__19631);
var colls = cljs.core.rest(arglist__19631);
return G__19630__delegate(f,c1,c2,c3,colls);
});
G__19630.cljs$core$IFn$_invoke$arity$variadic = G__19630__delegate;
return G__19630;
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
if(cljs.core.truth_((function (){var G__19633 = o;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__19633) : pred.call(null,G__19633));
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
* necessary to complete last partition upto n items. In case there are
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
if(!((function (){var G__19648 = m__$1;
if(G__19648){
var bit__4311__auto__ = (G__19648.cljs$lang$protocol_mask$partition0$ & (256));
if((bit__4311__auto__) || (G__19648.cljs$core$ILookup$)){
return true;
} else {
if((!G__19648.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__19648);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__19648);
}
})())){
return not_found;
} else {
var m__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m__$1,cljs.core.first(ks__$1),sentinel);
if((sentinel === m__$2)){
return not_found;
} else {
var G__19649 = sentinel;
var G__19650 = m__$2;
var G__19651 = cljs.core.next(ks__$1);
sentinel = G__19649;
m__$1 = G__19650;
ks__$1 = G__19651;
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
cljs.core.assoc_in = (function assoc_in(m,p__19652,v){
var vec__19657 = p__19652;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19657,(0),null);
var ks = cljs.core.nthnext(vec__19657,(1));
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
var update_in__3 = (function (m,p__19658,f){
var vec__19696 = p__19658;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19696,(0),null);
var ks = cljs.core.nthnext(vec__19696,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__19697 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19697) : f.call(null,G__19697));
})());
}
});
var update_in__4 = (function (m,p__19659,f,a){
var vec__19698 = p__19659;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19698,(0),null);
var ks = cljs.core.nthnext(vec__19698,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__19699 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__19700 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19699,G__19700) : f.call(null,G__19699,G__19700));
})());
}
});
var update_in__5 = (function (m,p__19660,f,a,b){
var vec__19701 = p__19660;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19701,(0),null);
var ks = cljs.core.nthnext(vec__19701,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,b));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__19702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__19703 = a;
var G__19704 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__19702,G__19703,G__19704) : f.call(null,G__19702,G__19703,G__19704));
})());
}
});
var update_in__6 = (function (m,p__19661,f,a,b,c){
var vec__19705 = p__19661;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19705,(0),null);
var ks = cljs.core.nthnext(vec__19705,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$6(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,b,c));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__19706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__19707 = a;
var G__19708 = b;
var G__19709 = c;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__19706,G__19707,G__19708,G__19709) : f.call(null,G__19706,G__19707,G__19708,G__19709));
})());
}
});
var update_in__7 = (function() { 
var G__19711__delegate = function (m,p__19662,f,a,b,c,args){
var vec__19710 = p__19662;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19710,(0),null);
var ks = cljs.core.nthnext(vec__19710,(1));
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(update_in,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,cljs.core.array_seq([b,c,args], 0)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),a,b,c,cljs.core.array_seq([args], 0)));
}
};
var G__19711 = function (m,p__19662,f,a,b,c,var_args){
var args = null;
if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);
} 
return G__19711__delegate.call(this,m,p__19662,f,a,b,c,args);};
G__19711.cljs$lang$maxFixedArity = 6;
G__19711.cljs$lang$applyTo = (function (arglist__19712){
var m = cljs.core.first(arglist__19712);
arglist__19712 = cljs.core.next(arglist__19712);
var p__19662 = cljs.core.first(arglist__19712);
arglist__19712 = cljs.core.next(arglist__19712);
var f = cljs.core.first(arglist__19712);
arglist__19712 = cljs.core.next(arglist__19712);
var a = cljs.core.first(arglist__19712);
arglist__19712 = cljs.core.next(arglist__19712);
var b = cljs.core.first(arglist__19712);
arglist__19712 = cljs.core.next(arglist__19712);
var c = cljs.core.first(arglist__19712);
var args = cljs.core.rest(arglist__19712);
return G__19711__delegate(m,p__19662,f,a,b,c,args);
});
G__19711.cljs$core$IFn$_invoke$arity$variadic = G__19711__delegate;
return G__19711;
})()
;
update_in = function(m,p__19662,f,a,b,c,var_args){
var args = var_args;
switch(arguments.length){
case 3:
return update_in__3.call(this,m,p__19662,f);
case 4:
return update_in__4.call(this,m,p__19662,f,a);
case 5:
return update_in__5.call(this,m,p__19662,f,a,b);
case 6:
return update_in__6.call(this,m,p__19662,f,a,b,c);
default:
return update_in__7.cljs$core$IFn$_invoke$arity$variadic(m,p__19662,f,a,b,c, cljs.core.array_seq(arguments, 6));
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__19723 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19723) : f.call(null,G__19723));
})());
});
var update__4 = (function (m,k,f,x){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__19724 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__19725 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19724,G__19725) : f.call(null,G__19724,G__19725));
})());
});
var update__5 = (function (m,k,f,x,y){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__19726 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__19727 = x;
var G__19728 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__19726,G__19727,G__19728) : f.call(null,G__19726,G__19727,G__19728));
})());
});
var update__6 = (function (m,k,f,x,y,z){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__19729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__19730 = x;
var G__19731 = y;
var G__19732 = z;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__19729,G__19730,G__19731,G__19732) : f.call(null,G__19729,G__19730,G__19731,G__19732));
})());
});
var update__7 = (function() { 
var G__19733__delegate = function (m,k,f,x,y,z,more){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x,y,z,cljs.core.array_seq([more], 0)));
};
var G__19733 = function (m,k,f,x,y,z,var_args){
var more = null;
if (arguments.length > 6) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);
} 
return G__19733__delegate.call(this,m,k,f,x,y,z,more);};
G__19733.cljs$lang$maxFixedArity = 6;
G__19733.cljs$lang$applyTo = (function (arglist__19734){
var m = cljs.core.first(arglist__19734);
arglist__19734 = cljs.core.next(arglist__19734);
var k = cljs.core.first(arglist__19734);
arglist__19734 = cljs.core.next(arglist__19734);
var f = cljs.core.first(arglist__19734);
arglist__19734 = cljs.core.next(arglist__19734);
var x = cljs.core.first(arglist__19734);
arglist__19734 = cljs.core.next(arglist__19734);
var y = cljs.core.first(arglist__19734);
arglist__19734 = cljs.core.next(arglist__19734);
var z = cljs.core.first(arglist__19734);
var more = cljs.core.rest(arglist__19734);
return G__19733__delegate(m,k,f,x,y,z,more);
});
G__19733.cljs$core$IFn$_invoke$arity$variadic = G__19733__delegate;
return G__19733;
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

cljs.core.VectorNode.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/VectorNode");
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
var G__19735 = (ll - (5));
var G__19736 = r;
ll = G__19735;
ret = G__19736;
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
var G__19741 = cljs.core.pv_aget(node,(0));
var G__19742 = (level - (5));
node = G__19741;
level = G__19742;
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
var G__19743 = cljs.core.pv_aget(node,((i >>> level) & (31)));
var G__19744 = (level - (5));
node = G__19743;
level = G__19744;
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

cljs.core.RangedIterator.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/RangedIterator");
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
var init__$3 = (function (){var G__19754 = init__$2;
var G__19755 = (j + i);
var G__19756 = (arr[j]);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__19754,G__19755,G__19756) : f.call(null,G__19754,G__19755,G__19756));
})();
if(cljs.core.reduced_QMARK_(init__$3)){
return init__$3;
} else {
var G__19767 = (j + (1));
var G__19768 = init__$3;
j = G__19767;
init__$2 = G__19768;
continue;
}
} else {
return init__$2;
}
break;
}
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__19757 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19757) : cljs.core.deref.call(null,G__19757));
} else {
var G__19769 = (i + len);
var G__19770 = init__$2;
i = G__19769;
init__$1 = G__19770;
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
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
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
return (new cljs.core.TransientVector(self__.cnt,self__.shift,(function (){var G__19758 = self__.root;
return (cljs.core.tv_editable_root.cljs$core$IFn$_invoke$arity$1 ? cljs.core.tv_editable_root.cljs$core$IFn$_invoke$arity$1(G__19758) : cljs.core.tv_editable_root.call(null,G__19758));
})(),(function (){var G__19759 = self__.tail;
return (cljs.core.tv_editable_tail.cljs$core$IFn$_invoke$arity$1 ? cljs.core.tv_editable_tail.cljs$core$IFn$_invoke$arity$1(G__19759) : cljs.core.tv_editable_tail.call(null,G__19759));
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
var init__$3 = (function (){var G__19760 = init__$2;
var G__19761 = (arr[j]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19760,G__19761) : f.call(null,G__19760,G__19761));
})();
if(cljs.core.reduced_QMARK_(init__$3)){
return init__$3;
} else {
var G__19771 = (j + (1));
var G__19772 = init__$3;
j = G__19771;
init__$2 = G__19772;
continue;
}
} else {
return init__$2;
}
break;
}
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__19762 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19762) : cljs.core.deref.call(null,G__19762));
} else {
var G__19773 = (i + len);
var G__19774 = init__$2;
i = G__19773;
init__$1 = G__19774;
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
var G__19763 = coll__$1;
var G__19764 = cljs.core.first_array_for_longvec(coll__$1);
var G__19765 = (0);
var G__19766 = (0);
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__19763,G__19764,G__19765,G__19766) : cljs.core.chunked_seq.call(null,G__19763,G__19764,G__19765,G__19766));

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
var n__4517__auto___19775 = len;
var i_19776 = (0);
while(true){
if((i_19776 < n__4517__auto___19775)){
(new_tail[i_19776] = (self__.tail[i_19776]));

var G__19777 = (i_19776 + (1));
i_19776 = G__19777;
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
var G__19778 = null;
var G__19778__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__19778__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__19778 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__19778__2.call(this,self__,k);
case 3:
return G__19778__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19778.cljs$core$IFn$_invoke$arity$2 = G__19778__2;
G__19778.cljs$core$IFn$_invoke$arity$3 = G__19778__3;
return G__19778;
})()
;

cljs.core.PersistentVector.prototype.apply = (function (self__,args19753){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args19753)));
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

cljs.core.PersistentVector.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/PersistentVector");
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
var G__19779 = (i + (1));
var G__19780 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,(xs__$1[i]));
i = G__19779;
out = G__19780;
continue;
} else {
return cljs.core.persistent_BANG_(out);
}
break;
}
}
});
(cljs.core.PersistentVector.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator(this__4608__auto__);
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
vector.cljs$lang$applyTo = (function (arglist__19781){
var args = cljs.core.seq(arglist__19781);
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
var s = (function (){var G__19782 = self__.vec;
var G__19783 = self__.node;
var G__19784 = self__.i;
var G__19785 = (self__.off + (1));
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__19782,G__19783,G__19784,G__19785) : cljs.core.chunked_seq.call(null,G__19782,G__19783,G__19784,G__19785));
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
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
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
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2((function (){var G__19786 = self__.vec;
var G__19787 = (self__.i + self__.off);
var G__19788 = cljs.core.count(self__.vec);
return (cljs.core.subvec.cljs$core$IFn$_invoke$arity$3 ? cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(G__19786,G__19787,G__19788) : cljs.core.subvec.call(null,G__19786,G__19787,G__19788));
})(),f);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3((function (){var G__19789 = self__.vec;
var G__19790 = (self__.i + self__.off);
var G__19791 = cljs.core.count(self__.vec);
return (cljs.core.subvec.cljs$core$IFn$_invoke$arity$3 ? cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(G__19789,G__19790,G__19791) : cljs.core.subvec.call(null,G__19789,G__19790,G__19791));
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
var s = (function (){var G__19792 = self__.vec;
var G__19793 = self__.node;
var G__19794 = self__.i;
var G__19795 = (self__.off + (1));
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__19792,G__19793,G__19794,G__19795) : cljs.core.chunked_seq.call(null,G__19792,G__19793,G__19794,G__19795));
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
var G__19796 = self__.vec;
var G__19797 = cljs.core.unchecked_array_for(self__.vec,end);
var G__19798 = end;
var G__19799 = (0);
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__19796,G__19797,G__19798,G__19799) : cljs.core.chunked_seq.call(null,G__19796,G__19797,G__19798,G__19799));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var self__ = this;
var coll__$1 = this;
var G__19800 = self__.vec;
var G__19801 = self__.node;
var G__19802 = self__.i;
var G__19803 = self__.off;
var G__19804 = m;
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$5 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$5(G__19800,G__19801,G__19802,G__19803,G__19804) : cljs.core.chunked_seq.call(null,G__19800,G__19801,G__19802,G__19803,G__19804));
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
var G__19805 = self__.vec;
var G__19806 = cljs.core.unchecked_array_for(self__.vec,end);
var G__19807 = end;
var G__19808 = (0);
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__19805,G__19806,G__19807,G__19808) : cljs.core.chunked_seq.call(null,G__19805,G__19806,G__19807,G__19808));
} else {
return null;
}
});

cljs.core.ChunkedSeq.cljs$lang$type = true;

cljs.core.ChunkedSeq.cljs$lang$ctorStr = "cljs.core/ChunkedSeq";

cljs.core.ChunkedSeq.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/ChunkedSeq");
});

cljs.core.__GT_ChunkedSeq = (function __GT_ChunkedSeq(vec,node,i,off,meta,__hash){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,__hash));
});

(cljs.core.ChunkedSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator(this__4608__auto__);
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
var G__19810 = self__.meta;
var G__19811 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.v,v_pos,val);
var G__19812 = self__.start;
var G__19813 = (function (){var x__3947__auto__ = self__.end;
var y__3948__auto__ = (v_pos + (1));
return ((x__3947__auto__ > y__3948__auto__) ? x__3947__auto__ : y__3948__auto__);
})();
var G__19814 = null;
return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__19810,G__19811,G__19812,G__19813,G__19814) : cljs.core.build_subvec.call(null,G__19810,G__19811,G__19812,G__19813,G__19814));
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
var G__19815 = self__.meta;
var G__19816 = self__.v;
var G__19817 = self__.start;
var G__19818 = (self__.end - (1));
var G__19819 = null;
return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__19815,G__19816,G__19817,G__19818,G__19819) : cljs.core.build_subvec.call(null,G__19815,G__19816,G__19817,G__19818,G__19819));
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
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
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
var G__19821 = meta__$1;
var G__19822 = self__.v;
var G__19823 = self__.start;
var G__19824 = self__.end;
var G__19825 = self__.__hash;
return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__19821,G__19822,G__19823,G__19824,G__19825) : cljs.core.build_subvec.call(null,G__19821,G__19822,G__19823,G__19824,G__19825));
});

cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
var G__19826 = self__.meta;
var G__19827 = cljs.core._assoc_n(self__.v,self__.end,o);
var G__19828 = self__.start;
var G__19829 = (self__.end + (1));
var G__19830 = null;
return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__19826,G__19827,G__19828,G__19829,G__19830) : cljs.core.build_subvec.call(null,G__19826,G__19827,G__19828,G__19829,G__19830));
});

cljs.core.Subvec.prototype.call = (function() {
var G__19831 = null;
var G__19831__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__19831__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__19831 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__19831__2.call(this,self__,k);
case 3:
return G__19831__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19831.cljs$core$IFn$_invoke$arity$2 = G__19831__2;
G__19831.cljs$core$IFn$_invoke$arity$3 = G__19831__3;
return G__19831;
})()
;

cljs.core.Subvec.prototype.apply = (function (self__,args19809){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args19809)));
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

cljs.core.Subvec.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/Subvec");
});

cljs.core.__GT_Subvec = (function __GT_Subvec(meta,v,start,end,__hash){
return (new cljs.core.Subvec(meta,v,start,end,__hash));
});

(cljs.core.Subvec.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator(this__4608__auto__);
}));
cljs.core.build_subvec = (function build_subvec(meta,v,start,end,__hash){
while(true){
if((v instanceof cljs.core.Subvec)){
var G__19832 = meta;
var G__19833 = v.v;
var G__19834 = (v.start + start);
var G__19835 = (v.start + end);
var G__19836 = __hash;
meta = G__19832;
v = G__19833;
start = G__19834;
end = G__19835;
__hash = G__19836;
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
return (new cljs.core.VectorNode((function (){var obj19843 = {};
return obj19843;
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
var G__19851 = cljs.core.tv_ensure_editable(root.edit,cljs.core.pv_aget(node,((i >>> level) & (31))));
var G__19852 = (level - (5));
node = G__19851;
level = G__19852;
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
var G__19856 = null;
var G__19856__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__19856__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__19856 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__19856__2.call(this,self__,k);
case 3:
return G__19856__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19856.cljs$core$IFn$_invoke$arity$2 = G__19856__2;
G__19856.cljs$core$IFn$_invoke$arity$3 = G__19856__3;
return G__19856;
})()
;

cljs.core.TransientVector.prototype.apply = (function (self__,args19853){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args19853)));
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

cljs.core.TransientVector.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/TransientVector");
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
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
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

cljs.core.PersistentQueueSeq.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/PersistentQueueSeq");
});

cljs.core.__GT_PersistentQueueSeq = (function __GT_PersistentQueueSeq(meta,front,rear,__hash){
return (new cljs.core.PersistentQueueSeq(meta,front,rear,__hash));
});

(cljs.core.PersistentQueueSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator(this__4608__auto__);
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
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
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
if(cljs.core.truth_((function (){var or__3630__auto__ = self__.front;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
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
return (new cljs.core.PersistentQueue(self__.meta,(self__.count + (1)),self__.front,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__3630__auto__ = self__.rear;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
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

cljs.core.PersistentQueue.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/PersistentQueue");
});

cljs.core.__GT_PersistentQueue = (function __GT_PersistentQueue(meta,count,front,rear,__hash){
return (new cljs.core.PersistentQueue(meta,count,front,rear,__hash));
});

cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,(0),null,cljs.core.PersistentVector.EMPTY,(0)));
(cljs.core.PersistentQueue.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator(this__4608__auto__);
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

cljs.core.NeverEquiv.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/NeverEquiv");
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
var G__19857 = (i + incr);
i = G__19857;
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
var G__19858 = (i + (1));
var G__19859 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,k__$1,(so[k__$1]));
i = G__19858;
out = G__19859;
continue;
} else {
return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,k,v)),mm);
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj = (function (){var obj19863 = {};
return obj19863;
})();
var l = ks.length;
var i_19864 = (0);
while(true){
if((i_19864 < l)){
var k_19865 = (ks[i_19864]);
(new_obj[k_19865] = (obj[k_19865]));

var G__19866 = (i_19864 + (1));
i_19864 = G__19866;
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
if(cljs.core.truth_((function (){var and__3618__auto__ = (function (){var G__19870 = k;
return goog.isString(G__19870);
})();
if(cljs.core.truth_(and__3618__auto__)){
return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else {
return and__3618__auto__;
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
var init__$2 = (function (){var G__19871 = init__$1;
var G__19872 = k;
var G__19873 = (self__.strobj[k]);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__19871,G__19872,G__19873) : f.call(null,G__19871,G__19872,G__19873));
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__19874 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19874) : cljs.core.deref.call(null,G__19874));
} else {
var G__19880 = cljs.core.rest(keys__$1);
var G__19881 = init__$2;
keys__$1 = G__19880;
init__$1 = G__19881;
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
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
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
if(cljs.core.truth_((function (){var and__3618__auto__ = (function (){var G__19876 = k;
return goog.isString(G__19876);
})();
if(cljs.core.truth_(and__3618__auto__)){
return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else {
return and__3618__auto__;
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
if(cljs.core.truth_((function (){var G__19877 = k;
return goog.isString(G__19877);
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
if(cljs.core.truth_((function (){var and__3618__auto__ = (function (){var G__19879 = k;
return goog.isString(G__19879);
})();
if(cljs.core.truth_(and__3618__auto__)){
return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else {
return and__3618__auto__;
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
return (function (p1__19867_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__19867_SHARP_,(self__.strobj[p1__19867_SHARP_])],null));
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
var G__19882 = null;
var G__19882__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__19882__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__19882 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__19882__2.call(this,self__,k);
case 3:
return G__19882__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19882.cljs$core$IFn$_invoke$arity$2 = G__19882__2;
G__19882.cljs$core$IFn$_invoke$arity$3 = G__19882__3;
return G__19882;
})()
;

cljs.core.ObjMap.prototype.apply = (function (self__,args19868){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args19868)));
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

cljs.core.ObjMap.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/ObjMap");
});

cljs.core.__GT_ObjMap = (function __GT_ObjMap(meta,keys,strobj,update_count,__hash){
return (new cljs.core.ObjMap(meta,keys,strobj,update_count,__hash));
});

cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],(function (){var obj19884 = {};
return obj19884;
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
var vec__19885 = cljs.core.first(self__.s);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19885,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19885,(1),null);
self__.s = cljs.core.next(self__.s);

return {"done": false, "value": [k,v]};
} else {
return {"done": true, "value": null};
}
});

cljs.core.ES6EntriesIterator.cljs$lang$type = true;

cljs.core.ES6EntriesIterator.cljs$lang$ctorStr = "cljs.core/ES6EntriesIterator";

cljs.core.ES6EntriesIterator.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/ES6EntriesIterator");
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

cljs.core.ES6SetEntriesIterator.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/ES6SetEntriesIterator");
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
var G__19886 = (i + (2));
i = G__19886;
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
var G__19887 = (i + (2));
i = G__19887;
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
var G__19888 = (i + (2));
i = G__19888;
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
var G__19889 = (i + (2));
i = G__19889;
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
var G__19890 = (i + (2));
i = G__19890;
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
if(cljs.core.truth_((function (){var or__3630__auto__ = (function (){var G__19894 = k;
return goog.isString(G__19894);
})();
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
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
var i_19895 = (0);
while(true){
if((i_19895 < l)){
(narr[i_19895] = (arr[i_19895]));

var G__19896 = (i_19895 + (1));
i_19895 = G__19896;
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

cljs.core.PersistentArrayMapSeq.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/PersistentArrayMapSeq");
});

cljs.core.__GT_PersistentArrayMapSeq = (function __GT_PersistentArrayMapSeq(arr,i,_meta){
return (new cljs.core.PersistentArrayMapSeq(arr,i,_meta));
});

(cljs.core.PersistentArrayMapSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator(this__4608__auto__);
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

cljs.core.PersistentArrayMapIterator.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/PersistentArrayMapIterator");
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
return cljs.core.es6_iterator((function (){var G__19898 = coll;
return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__19898) : cljs.core.keys.call(null,G__19898));
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
return cljs.core.es6_iterator((function (){var G__19899 = coll;
return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__19899) : cljs.core.vals.call(null,G__19899));
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
var seq__19900 = cljs.core.seq(coll);
var chunk__19901 = null;
var count__19902 = (0);
var i__19903 = (0);
while(true){
if((i__19903 < count__19902)){
var vec__19904 = chunk__19901.cljs$core$IIndexed$_nth$arity$2(null,i__19903);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19904,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19904,(1),null);
var G__19905_19918 = v;
var G__19906_19919 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19905_19918,G__19906_19919) : f.call(null,G__19905_19918,G__19906_19919));

var G__19920 = seq__19900;
var G__19921 = chunk__19901;
var G__19922 = count__19902;
var G__19923 = (i__19903 + (1));
seq__19900 = G__19920;
chunk__19901 = G__19921;
count__19902 = G__19922;
i__19903 = G__19923;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__19900);
if(temp__4126__auto__){
var seq__19900__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19900__$1)){
var c__4417__auto__ = cljs.core.chunk_first(seq__19900__$1);
var G__19924 = cljs.core.chunk_rest(seq__19900__$1);
var G__19925 = c__4417__auto__;
var G__19926 = cljs.core.count(c__4417__auto__);
var G__19927 = (0);
seq__19900 = G__19924;
chunk__19901 = G__19925;
count__19902 = G__19926;
i__19903 = G__19927;
continue;
} else {
var vec__19907 = cljs.core.first(seq__19900__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19907,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19907,(1),null);
var G__19908_19928 = v;
var G__19909_19929 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19908_19928,G__19909_19929) : f.call(null,G__19908_19928,G__19909_19929));

var G__19930 = cljs.core.next(seq__19900__$1);
var G__19931 = null;
var G__19932 = (0);
var G__19933 = (0);
seq__19900 = G__19930;
chunk__19901 = G__19931;
count__19902 = G__19932;
i__19903 = G__19933;
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
var init__$2 = (function (){var G__19910 = init__$1;
var G__19911 = (self__.arr[i]);
var G__19912 = (self__.arr[(i + (1))]);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__19910,G__19911,G__19912) : f.call(null,G__19910,G__19911,G__19912));
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__19913 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19913) : cljs.core.deref.call(null,G__19913));
} else {
var G__19934 = (i + (2));
var G__19935 = init__$2;
i = G__19934;
init__$1 = G__19935;
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
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
if((function (){var G__19914 = other;
if(G__19914){
var bit__4304__auto__ = (G__19914.cljs$lang$protocol_mask$partition0$ & (1024));
if((bit__4304__auto__) || (G__19914.cljs$core$IMap$)){
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
var G__19936 = (i + (2));
i = G__19936;
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
return (new cljs.core.TransientArrayMap((function (){var obj19916 = {};
return obj19916;
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
var G__19937 = (s + (2));
var G__19938 = d;
s = G__19937;
d = G__19938;
continue;
} else {
(new_arr[d] = (self__.arr[s]));

(new_arr[(d + (1))] = (self__.arr[(s + (1))]));

var G__19939 = (s + (2));
var G__19940 = (d + (2));
s = G__19939;
d = G__19940;
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
var arr__$1 = (function (){var G__19917 = cljs.core.aclone(self__.arr);
(G__19917[(idx + (1))] = v);

return G__19917;
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
var G__19941 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__19942 = cljs.core.next(es);
ret = G__19941;
es = G__19942;
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
var G__19943 = null;
var G__19943__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__19943__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__19943 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__19943__2.call(this,self__,k);
case 3:
return G__19943__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19943.cljs$core$IFn$_invoke$arity$2 = G__19943__2;
G__19943.cljs$core$IFn$_invoke$arity$3 = G__19943__3;
return G__19943;
})()
;

cljs.core.PersistentArrayMap.prototype.apply = (function (self__,args19897){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args19897)));
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

cljs.core.PersistentArrayMap.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/PersistentArrayMap");
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
var G__19944 = (i + (2));
var G__19945 = cljs.core._assoc_BANG_(ret,(arr__$1[i]),(arr__$1[(i + (1))]));
i = G__19944;
ret = G__19945;
continue;
} else {
return cljs.core._persistent_BANG_(ret);
}
break;
}
}
});
(cljs.core.PersistentArrayMap.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator(this__4608__auto__);
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

var G__19946_19954 = self__.arr;
G__19946_19954.pop();

G__19946_19954.pop();


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
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3((function (){var G__19947 = self__.len;
var G__19948 = self__.arr;
return (cljs.core.array__GT_transient_hash_map.cljs$core$IFn$_invoke$arity$2 ? cljs.core.array__GT_transient_hash_map.cljs$core$IFn$_invoke$arity$2(G__19947,G__19948) : cljs.core.array__GT_transient_hash_map.call(null,G__19947,G__19948));
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
if((function (){var G__19949 = o;
if(G__19949){
var bit__4311__auto__ = (G__19949.cljs$lang$protocol_mask$partition0$ & (2048));
if((bit__4311__auto__) || (G__19949.cljs$core$IMapEntry$)){
return true;
} else {
if((!G__19949.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__19949);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__19949);
}
})()){
return cljs.core._assoc_BANG_(tcoll__$1,(function (){var G__19950 = o;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__19950) : cljs.core.key.call(null,G__19950));
})(),(function (){var G__19951 = o;
return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__19951) : cljs.core.val.call(null,G__19951));
})());
} else {
var es = cljs.core.seq(o);
var tcoll__$2 = tcoll__$1;
while(true){
var temp__4124__auto__ = cljs.core.first(es);
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
var G__19955 = cljs.core.next(es);
var G__19956 = cljs.core._assoc_BANG_(tcoll__$2,(function (){var G__19952 = e;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__19952) : cljs.core.key.call(null,G__19952));
})(),(function (){var G__19953 = e;
return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__19953) : cljs.core.val.call(null,G__19953));
})());
es = G__19955;
tcoll__$2 = G__19956;
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

cljs.core.TransientArrayMap.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/TransientArrayMap");
});

cljs.core.__GT_TransientArrayMap = (function __GT_TransientArrayMap(editable_QMARK_,len,arr){
return (new cljs.core.TransientArrayMap(editable_QMARK_,len,arr));
});


cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
var i = (0);
while(true){
if((i < len)){
var G__19957 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,(arr[i]),(arr[(i + (1))]));
var G__19958 = (i + (2));
out = G__19957;
i = G__19958;
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

cljs.core.Box.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/Box");
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
var G__19961 = cljs.core.aclone(arr);
(G__19961[i] = a);

return G__19961;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__19962 = cljs.core.aclone(arr);
(G__19962[i] = a);

(G__19962[j] = b);

return G__19962;
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
var G__19967 = init__$1;
var G__19968 = k;
var G__19969 = (arr[(i + (1))]);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__19967,G__19968,G__19969) : f.call(null,G__19967,G__19968,G__19969));
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
var G__19970 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19970) : cljs.core.deref.call(null,G__19970));
} else {
var G__19971 = (i + (2));
var G__19972 = init__$2;
i = G__19971;
init__$1 = G__19972;
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
var G__19973 = self__.arr;
return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1(G__19973) : cljs.core.create_inode_seq.call(null,G__19973));
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

var i_19987 = (0);
var j_19988 = (0);
while(true){
if((i_19987 < (32))){
if((((self__.bitmap >>> i_19987) & (1)) === (0))){
var G__19989 = (i_19987 + (1));
var G__19990 = j_19988;
i_19987 = G__19989;
j_19988 = G__19990;
continue;
} else {
(nodes[i_19987] = ((!(((self__.arr[j_19988]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),cljs.core.hash((self__.arr[j_19988])),(self__.arr[j_19988]),(self__.arr[(j_19988 + (1))]),added_leaf_QMARK_):(self__.arr[(j_19988 + (1))])));

var G__19991 = (i_19987 + (1));
var G__19992 = (j_19988 + (2));
i_19987 = G__19991;
j_19988 = G__19992;
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

return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$6(inode,edit__$1,((2) * idx),null,(((2) * idx) + (1)),(function (){var G__19974 = edit__$1;
var G__19975 = (shift + (5));
var G__19976 = key_or_nil;
var G__19977 = val_or_node;
var G__19978 = hash;
var G__19979 = key;
var G__19980 = val;
return (cljs.core.create_node.cljs$core$IFn$_invoke$arity$7 ? cljs.core.create_node.cljs$core$IFn$_invoke$arity$7(G__19974,G__19975,G__19976,G__19977,G__19978,G__19979,G__19980) : cljs.core.create_node.call(null,G__19974,G__19975,G__19976,G__19977,G__19978,G__19979,G__19980));
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

var i_19993 = (0);
var j_19994 = (0);
while(true){
if((i_19993 < (32))){
if((((self__.bitmap >>> i_19993) & (1)) === (0))){
var G__19995 = (i_19993 + (1));
var G__19996 = j_19994;
i_19993 = G__19995;
j_19994 = G__19996;
continue;
} else {
(nodes[i_19993] = ((!(((self__.arr[j_19994]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),cljs.core.hash((self__.arr[j_19994])),(self__.arr[j_19994]),(self__.arr[(j_19994 + (1))]),added_leaf_QMARK_):(self__.arr[(j_19994 + (1))])));

var G__19997 = (i_19993 + (1));
var G__19998 = (j_19994 + (2));
i_19993 = G__19997;
j_19994 = G__19998;
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

return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$5(self__.arr,((2) * idx),null,(((2) * idx) + (1)),(function (){var G__19981 = (shift + (5));
var G__19982 = key_or_nil;
var G__19983 = val_or_node;
var G__19984 = hash;
var G__19985 = key;
var G__19986 = val;
return (cljs.core.create_node.cljs$core$IFn$_invoke$arity$6 ? cljs.core.create_node.cljs$core$IFn$_invoke$arity$6(G__19981,G__19982,G__19983,G__19984,G__19985,G__19986) : cljs.core.create_node.call(null,G__19981,G__19982,G__19983,G__19984,G__19985,G__19986));
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

cljs.core.BitmapIndexedNode.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/BitmapIndexedNode");
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

var G__19999 = (i + (1));
var G__20000 = (j + (2));
var G__20001 = (bitmap | ((1) << i));
i = G__19999;
j = G__20000;
bitmap = G__20001;
continue;
} else {
var G__20002 = (i + (1));
var G__20003 = j;
var G__20004 = bitmap;
i = G__20002;
j = G__20003;
bitmap = G__20004;
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
var G__20005 = self__.arr;
return (cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$1(G__20005) : cljs.core.create_array_node_seq.call(null,G__20005));
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
var G__20006 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20006) : cljs.core.deref.call(null,G__20006));
} else {
var G__20007 = (i + (1));
var G__20008 = init__$2;
i = G__20007;
init__$1 = G__20008;
continue;
}
} else {
var G__20009 = (i + (1));
var G__20010 = init__$1;
i = G__20009;
init__$1 = G__20010;
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

cljs.core.ArrayNode.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/ArrayNode");
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
var G__20011 = (i + (2));
i = G__20011;
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
var G__20012 = self__.arr;
return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1(G__20012) : cljs.core.create_inode_seq.call(null,G__20012));
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

cljs.core.HashCollisionNode.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/HashCollisionNode");
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
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
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
var G__20013 = self__.nodes;
var G__20014 = (self__.i + (2));
var G__20015 = null;
return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3(G__20013,G__20014,G__20015) : cljs.core.create_inode_seq.call(null,G__20013,G__20014,G__20015));
} else {
var G__20016 = self__.nodes;
var G__20017 = self__.i;
var G__20018 = cljs.core.next(self__.s);
return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3(G__20016,G__20017,G__20018) : cljs.core.create_inode_seq.call(null,G__20016,G__20017,G__20018));
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

cljs.core.NodeSeq.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/NodeSeq");
});

cljs.core.__GT_NodeSeq = (function __GT_NodeSeq(meta,nodes,i,s,__hash){
return (new cljs.core.NodeSeq(meta,nodes,i,s,__hash));
});

(cljs.core.NodeSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator(this__4608__auto__);
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
var G__20022 = (j + (2));
j = G__20022;
continue;
}
} else {
var G__20023 = (j + (2));
j = G__20023;
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
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
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
var G__20024 = null;
var G__20025 = self__.nodes;
var G__20026 = self__.i;
var G__20027 = cljs.core.next(self__.s);
return (cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$4(G__20024,G__20025,G__20026,G__20027) : cljs.core.create_array_node_seq.call(null,G__20024,G__20025,G__20026,G__20027));
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

cljs.core.ArrayNodeSeq.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/ArrayNodeSeq");
});

cljs.core.__GT_ArrayNodeSeq = (function __GT_ArrayNodeSeq(meta,nodes,i,s,__hash){
return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,__hash));
});

(cljs.core.ArrayNodeSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator(this__4608__auto__);
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
var G__20032 = (j + (1));
j = G__20032;
continue;
}
} else {
var G__20033 = (j + (1));
j = G__20033;
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
return cljs.core.es6_iterator((function (){var G__20035 = coll;
return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__20035) : cljs.core.keys.call(null,G__20035));
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
return cljs.core.es6_iterator((function (){var G__20036 = coll;
return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__20036) : cljs.core.vals.call(null,G__20036));
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
var seq__20037 = cljs.core.seq(coll);
var chunk__20038 = null;
var count__20039 = (0);
var i__20040 = (0);
while(true){
if((i__20040 < count__20039)){
var vec__20041 = chunk__20038.cljs$core$IIndexed$_nth$arity$2(null,i__20040);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20041,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20041,(1),null);
var G__20042_20053 = v;
var G__20043_20054 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20042_20053,G__20043_20054) : f.call(null,G__20042_20053,G__20043_20054));

var G__20055 = seq__20037;
var G__20056 = chunk__20038;
var G__20057 = count__20039;
var G__20058 = (i__20040 + (1));
seq__20037 = G__20055;
chunk__20038 = G__20056;
count__20039 = G__20057;
i__20040 = G__20058;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__20037);
if(temp__4126__auto__){
var seq__20037__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20037__$1)){
var c__4417__auto__ = cljs.core.chunk_first(seq__20037__$1);
var G__20059 = cljs.core.chunk_rest(seq__20037__$1);
var G__20060 = c__4417__auto__;
var G__20061 = cljs.core.count(c__4417__auto__);
var G__20062 = (0);
seq__20037 = G__20059;
chunk__20038 = G__20060;
count__20039 = G__20061;
i__20040 = G__20062;
continue;
} else {
var vec__20044 = cljs.core.first(seq__20037__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20044,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20044,(1),null);
var G__20045_20063 = v;
var G__20046_20064 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20045_20063,G__20046_20064) : f.call(null,G__20045_20063,G__20046_20064));

var G__20065 = cljs.core.next(seq__20037__$1);
var G__20066 = null;
var G__20067 = (0);
var G__20068 = (0);
seq__20037 = G__20065;
chunk__20038 = G__20066;
count__20039 = G__20067;
i__20040 = G__20068;
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
var init__$1 = ((self__.has_nil_QMARK_)?(function (){var G__20047 = init;
var G__20048 = null;
var G__20049 = self__.nil_val;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__20047,G__20048,G__20049) : f.call(null,G__20047,G__20048,G__20049));
})():init);
if(cljs.core.reduced_QMARK_(init__$1)){
var G__20050 = init__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20050) : cljs.core.deref.call(null,G__20050));
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
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
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
return (new cljs.core.TransientHashMap((function (){var obj20052 = {};
return obj20052;
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
var G__20069 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__20070 = cljs.core.next(es);
ret = G__20069;
es = G__20070;
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
var G__20071 = null;
var G__20071__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__20071__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__20071 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__20071__2.call(this,self__,k);
case 3:
return G__20071__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20071.cljs$core$IFn$_invoke$arity$2 = G__20071__2;
G__20071.cljs$core$IFn$_invoke$arity$3 = G__20071__3;
return G__20071;
})()
;

cljs.core.PersistentHashMap.prototype.apply = (function (self__,args20034){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args20034)));
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

cljs.core.PersistentHashMap.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/PersistentHashMap");
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
var G__20072 = (i + (1));
var G__20073 = out.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(null,(ks[i]),(vs[i]));
i = G__20072;
out = G__20073;
continue;
} else {
return cljs.core.persistent_BANG_(out);
}
break;
}
});
(cljs.core.PersistentHashMap.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator(this__4608__auto__);
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
if((function (){var G__20074 = o;
if(G__20074){
var bit__4311__auto__ = (G__20074.cljs$lang$protocol_mask$partition0$ & (2048));
if((bit__4311__auto__) || (G__20074.cljs$core$IMapEntry$)){
return true;
} else {
if((!G__20074.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__20074);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__20074);
}
})()){
return tcoll.assoc_BANG_((function (){var G__20075 = o;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__20075) : cljs.core.key.call(null,G__20075));
})(),(function (){var G__20076 = o;
return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__20076) : cljs.core.val.call(null,G__20076));
})());
} else {
var es = cljs.core.seq(o);
var tcoll__$1 = tcoll;
while(true){
var temp__4124__auto__ = cljs.core.first(es);
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
var G__20079 = cljs.core.next(es);
var G__20080 = tcoll__$1.assoc_BANG_((function (){var G__20077 = e;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__20077) : cljs.core.key.call(null,G__20077));
})(),(function (){var G__20078 = e;
return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__20078) : cljs.core.val.call(null,G__20078));
})());
es = G__20079;
tcoll__$1 = G__20080;
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

cljs.core.TransientHashMap.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/TransientHashMap");
});

cljs.core.__GT_TransientHashMap = (function __GT_TransientHashMap(edit,root,count,has_nil_QMARK_,nil_val){
return (new cljs.core.TransientHashMap(edit,root,count,has_nil_QMARK_,nil_val));
});

cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t = node;
var stack__$1 = stack;
while(true){
if(!((t == null))){
var G__20081 = ((ascending_QMARK_)?t.left:t.right);
var G__20082 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack__$1,t);
t = G__20081;
stack__$1 = G__20082;
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
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
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

cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/PersistentTreeMapSeq");
});

cljs.core.__GT_PersistentTreeMapSeq = (function __GT_PersistentTreeMapSeq(meta,stack,ascending_QMARK_,cnt,__hash){
return (new cljs.core.PersistentTreeMapSeq(meta,stack,ascending_QMARK_,cnt,__hash));
});

(cljs.core.PersistentTreeMapSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator(this__4608__auto__);
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
var G__20095 = init__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20095) : cljs.core.deref.call(null,G__20095));
} else {
var init__$2 = (function (){var G__20096 = init__$1;
var G__20097 = node.key;
var G__20098 = node.val;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__20096,G__20097,G__20098) : f.call(null,G__20096,G__20097,G__20098));
})();
if(cljs.core.reduced_QMARK_(init__$2)){
var G__20099 = init__$2;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20099) : cljs.core.deref.call(null,G__20099));
} else {
var init__$3 = ((!((node.right == null)))?tree_map_kv_reduce(node.right,f,init__$2):init__$2);
if(cljs.core.reduced_QMARK_(init__$3)){
var G__20100 = init__$3;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20100) : cljs.core.deref.call(null,G__20100));
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
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
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
var G__20102 = null;
var G__20102__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var node = self____$1;
return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__20102__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var node = self____$1;
return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__20102 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__20102__2.call(this,self__,k);
case 3:
return G__20102__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20102.cljs$core$IFn$_invoke$arity$2 = G__20102__2;
G__20102.cljs$core$IFn$_invoke$arity$3 = G__20102__3;
return G__20102;
})()
;

cljs.core.BlackNode.prototype.apply = (function (self__,args20101){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args20101)));
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

cljs.core.BlackNode.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/BlackNode");
});

cljs.core.__GT_BlackNode = (function __GT_BlackNode(key,val,left,right,__hash){
return (new cljs.core.BlackNode(key,val,left,right,__hash));
});

(cljs.core.BlackNode.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator(this__4608__auto__);
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
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
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
var G__20104 = null;
var G__20104__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var node = self____$1;
return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__20104__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var node = self____$1;
return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__20104 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__20104__2.call(this,self__,k);
case 3:
return G__20104__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20104.cljs$core$IFn$_invoke$arity$2 = G__20104__2;
G__20104.cljs$core$IFn$_invoke$arity$3 = G__20104__3;
return G__20104;
})()
;

cljs.core.RedNode.prototype.apply = (function (self__,args20103){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args20103)));
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

cljs.core.RedNode.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/RedNode");
});

cljs.core.__GT_RedNode = (function __GT_RedNode(key,val,left,right,__hash){
return (new cljs.core.RedNode(key,val,left,right,__hash));
});

(cljs.core.RedNode.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator(this__4608__auto__);
}));
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null)){
return (new cljs.core.RedNode(k,v,null,null,null));
} else {
var c = (function (){var G__20117 = k;
var G__20118 = tree.key;
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__20117,G__20118) : comp.call(null,G__20117,G__20118));
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
var c = (function (){var G__20137 = k;
var G__20138 = tree.key;
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__20137,G__20138) : comp.call(null,G__20137,G__20138));
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
var c = (function (){var G__20149 = k;
var G__20150 = tk;
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__20149,G__20150) : comp.call(null,G__20149,G__20150));
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
var seq__20152 = cljs.core.seq(coll);
var chunk__20153 = null;
var count__20154 = (0);
var i__20155 = (0);
while(true){
if((i__20155 < count__20154)){
var vec__20156 = chunk__20153.cljs$core$IIndexed$_nth$arity$2(null,i__20155);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20156,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20156,(1),null);
var G__20157_20169 = v;
var G__20158_20170 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20157_20169,G__20158_20170) : f.call(null,G__20157_20169,G__20158_20170));

var G__20171 = seq__20152;
var G__20172 = chunk__20153;
var G__20173 = count__20154;
var G__20174 = (i__20155 + (1));
seq__20152 = G__20171;
chunk__20153 = G__20172;
count__20154 = G__20173;
i__20155 = G__20174;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__20152);
if(temp__4126__auto__){
var seq__20152__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20152__$1)){
var c__4417__auto__ = cljs.core.chunk_first(seq__20152__$1);
var G__20175 = cljs.core.chunk_rest(seq__20152__$1);
var G__20176 = c__4417__auto__;
var G__20177 = cljs.core.count(c__4417__auto__);
var G__20178 = (0);
seq__20152 = G__20175;
chunk__20153 = G__20176;
count__20154 = G__20177;
i__20155 = G__20178;
continue;
} else {
var vec__20159 = cljs.core.first(seq__20152__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20159,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20159,(1),null);
var G__20160_20179 = v;
var G__20161_20180 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20160_20179,G__20161_20180) : f.call(null,G__20160_20179,G__20161_20180));

var G__20181 = cljs.core.next(seq__20152__$1);
var G__20182 = null;
var G__20183 = (0);
var G__20184 = (0);
seq__20152 = G__20181;
chunk__20153 = G__20182;
count__20154 = G__20183;
i__20155 = G__20184;
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
return cljs.core.es6_iterator((function (){var G__20162 = coll;
return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__20162) : cljs.core.keys.call(null,G__20162));
})());
});

cljs.core.PersistentTreeMap.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((function (){var G__20163 = coll;
return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__20163) : cljs.core.vals.call(null,G__20163));
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
var c = (function (){var G__20164 = k;
var G__20165 = t.key;
return (self__.comp.cljs$core$IFn$_invoke$arity$2 ? self__.comp.cljs$core$IFn$_invoke$arity$2(G__20164,G__20165) : self__.comp.call(null,G__20164,G__20165));
})();
if((c === (0))){
return t;
} else {
if((c < (0))){
var G__20185 = t.left;
t = G__20185;
continue;
} else {
var G__20186 = t.right;
t = G__20186;
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
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
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
var G__20187 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__20188 = cljs.core.next(es);
ret = G__20187;
es = G__20188;
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
var G__20189 = null;
var G__20189__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__20189__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__20189 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__20189__2.call(this,self__,k);
case 3:
return G__20189__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20189.cljs$core$IFn$_invoke$arity$2 = G__20189__2;
G__20189.cljs$core$IFn$_invoke$arity$3 = G__20189__3;
return G__20189;
})()
;

cljs.core.PersistentTreeMap.prototype.apply = (function (self__,args20151){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args20151)));
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
var c = (function (){var G__20166 = k;
var G__20167 = t.key;
return (self__.comp.cljs$core$IFn$_invoke$arity$2 ? self__.comp.cljs$core$IFn$_invoke$arity$2(G__20166,G__20167) : self__.comp.call(null,G__20166,G__20167));
})();
if((c === (0))){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t),ascending_QMARK_,(-1),null));
} else {
if(cljs.core.truth_(ascending_QMARK_)){
if((c < (0))){
var G__20190 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t);
var G__20191 = t.left;
stack = G__20190;
t = G__20191;
continue;
} else {
var G__20192 = stack;
var G__20193 = t.right;
stack = G__20192;
t = G__20193;
continue;
}
} else {
if((c > (0))){
var G__20194 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t);
var G__20195 = t.right;
stack = G__20194;
t = G__20195;
continue;
} else {
var G__20196 = stack;
var G__20197 = t.left;
stack = G__20196;
t = G__20197;
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
var G__20168 = entry;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__20168) : cljs.core.key.call(null,G__20168));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.comp;
});

cljs.core.PersistentTreeMap.cljs$lang$type = true;

cljs.core.PersistentTreeMap.cljs$lang$ctorStr = "cljs.core/PersistentTreeMap";

cljs.core.PersistentTreeMap.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/PersistentTreeMap");
});

cljs.core.__GT_PersistentTreeMap = (function __GT_PersistentTreeMap(comp,tree,cnt,meta,__hash){
return (new cljs.core.PersistentTreeMap(comp,tree,cnt,meta,__hash));
});

cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,(0),null,(0)));
(cljs.core.PersistentTreeMap.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator(this__4608__auto__);
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
var G__20198 = cljs.core.nnext(in$);
var G__20199 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__20198;
out = G__20199;
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
hash_map.cljs$lang$applyTo = (function (arglist__20200){
var keyvals = cljs.core.seq(arglist__20200);
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
array_map.cljs$lang$applyTo = (function (arglist__20201){
var keyvals = cljs.core.seq(arglist__20201);
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
var obj = (function (){var obj20205 = {};
return obj20205;
})();
var kvs = cljs.core.seq(keyvals);
while(true){
if(kvs){
ks.push(cljs.core.first(kvs));

(obj[cljs.core.first(kvs)] = cljs.core.second(kvs));

var G__20206 = cljs.core.nnext(kvs);
kvs = G__20206;
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
obj_map.cljs$lang$applyTo = (function (arglist__20207){
var keyvals = cljs.core.seq(arglist__20207);
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
var G__20208 = cljs.core.nnext(in$);
var G__20209 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__20208;
out = G__20209;
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
sorted_map.cljs$lang$applyTo = (function (arglist__20210){
var keyvals = cljs.core.seq(arglist__20210);
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
var G__20211 = cljs.core.nnext(in$);
var G__20212 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__20211;
out = G__20212;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__20213){
var comparator = cljs.core.first(arglist__20213);
var keyvals = cljs.core.rest(arglist__20213);
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
var nseq = (((function (){var G__20214 = self__.mseq;
if(G__20214){
var bit__4311__auto__ = (G__20214.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__4311__auto__) || (G__20214.cljs$core$INext$)){
return true;
} else {
if((!G__20214.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__20214);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__20214);
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
var nseq = (((function (){var G__20215 = self__.mseq;
if(G__20215){
var bit__4311__auto__ = (G__20215.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__4311__auto__) || (G__20215.cljs$core$INext$)){
return true;
} else {
if((!G__20215.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__20215);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__20215);
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

cljs.core.KeySeq.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/KeySeq");
});

cljs.core.__GT_KeySeq = (function __GT_KeySeq(mseq,_meta){
return (new cljs.core.KeySeq(mseq,_meta));
});

(cljs.core.KeySeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator(this__4608__auto__);
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
var nseq = (((function (){var G__20216 = self__.mseq;
if(G__20216){
var bit__4311__auto__ = (G__20216.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__4311__auto__) || (G__20216.cljs$core$INext$)){
return true;
} else {
if((!G__20216.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__20216);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__20216);
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
var nseq = (((function (){var G__20217 = self__.mseq;
if(G__20217){
var bit__4311__auto__ = (G__20217.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__4311__auto__) || (G__20217.cljs$core$INext$)){
return true;
} else {
if((!G__20217.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__20217);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__20217);
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

cljs.core.ValSeq.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/ValSeq");
});

cljs.core.__GT_ValSeq = (function __GT_ValSeq(mseq,_meta){
return (new cljs.core.ValSeq(mseq,_meta));
});

(cljs.core.ValSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator(this__4608__auto__);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__20218_SHARP_,p2__20219_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__3630__auto__ = p1__20218_SHARP_;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),p2__20219_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__20220){
var maps = cljs.core.seq(arglist__20220);
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__20223 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__20224 = v;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20223,G__20224) : f.call(null,G__20223,G__20224));
})());
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});
var merge2 = ((function (merge_entry){
return (function (m1,m2){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(merge_entry,(function (){var or__3630__auto__ = m1;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
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
merge_with.cljs$lang$applyTo = (function (arglist__20225){
var f = cljs.core.first(arglist__20225);
var maps = cljs.core.rest(arglist__20225);
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
var G__20226 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(entry,cljs.core.constant$keyword$14))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,key,entry):ret);
var G__20227 = cljs.core.next(keys);
ret = G__20226;
keys = G__20227;
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
var seq__20230 = cljs.core.seq(coll);
var chunk__20231 = null;
var count__20232 = (0);
var i__20233 = (0);
while(true){
if((i__20233 < count__20232)){
var vec__20234 = chunk__20231.cljs$core$IIndexed$_nth$arity$2(null,i__20233);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20234,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20234,(1),null);
var G__20235_20240 = v;
var G__20236_20241 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20235_20240,G__20236_20241) : f.call(null,G__20235_20240,G__20236_20241));

var G__20242 = seq__20230;
var G__20243 = chunk__20231;
var G__20244 = count__20232;
var G__20245 = (i__20233 + (1));
seq__20230 = G__20242;
chunk__20231 = G__20243;
count__20232 = G__20244;
i__20233 = G__20245;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__20230);
if(temp__4126__auto__){
var seq__20230__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20230__$1)){
var c__4417__auto__ = cljs.core.chunk_first(seq__20230__$1);
var G__20246 = cljs.core.chunk_rest(seq__20230__$1);
var G__20247 = c__4417__auto__;
var G__20248 = cljs.core.count(c__4417__auto__);
var G__20249 = (0);
seq__20230 = G__20246;
chunk__20231 = G__20247;
count__20232 = G__20248;
i__20233 = G__20249;
continue;
} else {
var vec__20237 = cljs.core.first(seq__20230__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20237,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20237,(1),null);
var G__20238_20250 = v;
var G__20239_20251 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20238_20250,G__20239_20251) : f.call(null,G__20238_20250,G__20239_20251));

var G__20252 = cljs.core.next(seq__20230__$1);
var G__20253 = null;
var G__20254 = (0);
var G__20255 = (0);
seq__20230 = G__20252;
chunk__20231 = G__20253;
count__20232 = G__20254;
i__20233 = G__20255;
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
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
}
});

cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return (cljs.core.set_QMARK_(other)) && ((cljs.core.count(coll__$1) === cljs.core.count(other))) && (cljs.core.every_QMARK_(((function (coll__$1){
return (function (p1__20228_SHARP_){
return cljs.core.contains_QMARK_(coll__$1,p1__20228_SHARP_);
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
var G__20256 = null;
var G__20256__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__20256__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__20256 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__20256__2.call(this,self__,k);
case 3:
return G__20256__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20256.cljs$core$IFn$_invoke$arity$2 = G__20256__2;
G__20256.cljs$core$IFn$_invoke$arity$3 = G__20256__3;
return G__20256;
})()
;

cljs.core.PersistentHashSet.prototype.apply = (function (self__,args20229){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args20229)));
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

cljs.core.PersistentHashSet.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/PersistentHashSet");
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
var G__20257 = (i + (1));
var G__20258 = cljs.core._assoc_BANG_(out,(items[i]),null);
i = G__20257;
out = G__20258;
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
var G__20259 = (i + (1));
var G__20260 = cljs.core._conj_BANG_(out,(items[i]));
i = G__20259;
out = G__20260;
continue;
} else {
return cljs.core._persistent_BANG_(out);
}
break;
}
}
});
(cljs.core.PersistentHashSet.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator(this__4608__auto__);
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
var G__20262 = null;
var G__20262__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var tcoll = self____$1;
if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return null;
} else {
return k;
}
});
var G__20262__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var tcoll = self____$1;
if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return not_found;
} else {
return k;
}
});
G__20262 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__20262__2.call(this,self__,k);
case 3:
return G__20262__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20262.cljs$core$IFn$_invoke$arity$2 = G__20262__2;
G__20262.cljs$core$IFn$_invoke$arity$3 = G__20262__3;
return G__20262;
})()
;

cljs.core.TransientHashSet.prototype.apply = (function (self__,args20261){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args20261)));
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

cljs.core.TransientHashSet.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/TransientHashSet");
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
var seq__20265 = cljs.core.seq(coll);
var chunk__20266 = null;
var count__20267 = (0);
var i__20268 = (0);
while(true){
if((i__20268 < count__20267)){
var vec__20269 = chunk__20266.cljs$core$IIndexed$_nth$arity$2(null,i__20268);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20269,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20269,(1),null);
var G__20270_20275 = v;
var G__20271_20276 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20270_20275,G__20271_20276) : f.call(null,G__20270_20275,G__20271_20276));

var G__20277 = seq__20265;
var G__20278 = chunk__20266;
var G__20279 = count__20267;
var G__20280 = (i__20268 + (1));
seq__20265 = G__20277;
chunk__20266 = G__20278;
count__20267 = G__20279;
i__20268 = G__20280;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__20265);
if(temp__4126__auto__){
var seq__20265__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20265__$1)){
var c__4417__auto__ = cljs.core.chunk_first(seq__20265__$1);
var G__20281 = cljs.core.chunk_rest(seq__20265__$1);
var G__20282 = c__4417__auto__;
var G__20283 = cljs.core.count(c__4417__auto__);
var G__20284 = (0);
seq__20265 = G__20281;
chunk__20266 = G__20282;
count__20267 = G__20283;
i__20268 = G__20284;
continue;
} else {
var vec__20272 = cljs.core.first(seq__20265__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20272,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20272,(1),null);
var G__20273_20285 = v;
var G__20274_20286 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20273_20285,G__20274_20286) : f.call(null,G__20273_20285,G__20274_20286));

var G__20287 = cljs.core.next(seq__20265__$1);
var G__20288 = null;
var G__20289 = (0);
var G__20290 = (0);
seq__20265 = G__20287;
chunk__20266 = G__20288;
count__20267 = G__20289;
i__20268 = G__20290;
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
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
}
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return (cljs.core.set_QMARK_(other)) && ((cljs.core.count(coll__$1) === cljs.core.count(other))) && (cljs.core.every_QMARK_(((function (coll__$1){
return (function (p1__20263_SHARP_){
return cljs.core.contains_QMARK_(coll__$1,p1__20263_SHARP_);
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
var G__20291 = null;
var G__20291__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__20291__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__20291 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__20291__2.call(this,self__,k);
case 3:
return G__20291__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20291.cljs$core$IFn$_invoke$arity$2 = G__20291__2;
G__20291.cljs$core$IFn$_invoke$arity$3 = G__20291__3;
return G__20291;
})()
;

cljs.core.PersistentTreeSet.prototype.apply = (function (self__,args20264){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args20264)));
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

cljs.core.PersistentTreeSet.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/PersistentTreeSet");
});

cljs.core.__GT_PersistentTreeSet = (function __GT_PersistentTreeSet(meta,tree_map,__hash){
return (new cljs.core.PersistentTreeSet(meta,tree_map,__hash));
});

cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.PersistentTreeMap.EMPTY,(0)));
(cljs.core.PersistentTreeSet.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator(this__4608__auto__);
}));
cljs.core.set_from_indexed_seq = (function set_from_indexed_seq(iseq){
var arr = iseq.arr;
var ret = (function (){var a__4511__auto__ = arr;
var i = (0);
var res = cljs.core._as_transient(cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i < a__4511__auto__.length)){
var G__20292 = (i + (1));
var G__20293 = res.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null,(arr[i]));
i = G__20292;
res = G__20293;
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
var G__20294 = in$__$1.cljs$core$INext$_next$arity$1(null);
var G__20295 = out.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null,in$__$1.cljs$core$ISeq$_first$arity$1(null));
in$__$1 = G__20294;
out = G__20295;
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
var G__20296__delegate = function (keys){
return cljs.core.set(keys);
};
var G__20296 = function (var_args){
var keys = null;
if (arguments.length > 0) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__20296__delegate.call(this,keys);};
G__20296.cljs$lang$maxFixedArity = 0;
G__20296.cljs$lang$applyTo = (function (arglist__20297){
var keys = cljs.core.seq(arglist__20297);
return G__20296__delegate(keys);
});
G__20296.cljs$core$IFn$_invoke$arity$variadic = G__20296__delegate;
return G__20296;
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
sorted_set.cljs$lang$applyTo = (function (arglist__20298){
var keys = cljs.core.seq(arglist__20298);
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__20299){
var comparator = cljs.core.first(arglist__20299);
var keys = cljs.core.rest(arglist__20299);
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__20300_SHARP_){
var temp__4124__auto__ = cljs.core.find(smap,p1__20300_SHARP_);
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
return cljs.core.val(e);
} else {
return p1__20300_SHARP_;
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20301_SHARP_){
var temp__4124__auto__ = cljs.core.find(smap,p1__20301_SHARP_);
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
return cljs.core.second(e);
} else {
return p1__20301_SHARP_;
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
return (function (p__20312,seen__$1){
while(true){
var vec__20313 = p__20312;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20313,(0),null);
var xs__$1 = vec__20313;
var temp__4126__auto__ = cljs.core.seq(xs__$1);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.contains_QMARK_(seen__$1,f)){
var G__20314 = cljs.core.rest(s);
var G__20315 = seen__$1;
p__20312 = G__20314;
seen__$1 = G__20315;
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
var G__20316 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.first(s__$1));
var G__20317 = cljs.core.next(s__$1);
ret = G__20316;
s__$1 = G__20317;
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
if((function (){var G__20319 = x;
if(G__20319){
var bit__4304__auto__ = (G__20319.cljs$lang$protocol_mask$partition1$ & (4096));
if((bit__4304__auto__) || (G__20319.cljs$core$INamed$)){
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
var G__20320 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(map,cljs.core.first(ks),cljs.core.first(vs));
var G__20321 = cljs.core.next(ks);
var G__20322 = cljs.core.next(vs);
map = G__20320;
ks = G__20321;
vs = G__20322;
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
if(((function (){var G__20333 = x;
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__20333) : k.call(null,G__20333));
})() > (function (){var G__20334 = y;
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__20334) : k.call(null,G__20334));
})())){
return x;
} else {
return y;
}
});
var max_key__4 = (function() { 
var G__20335__delegate = function (k,x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__20323_SHARP_,p2__20324_SHARP_){
return max_key.cljs$core$IFn$_invoke$arity$3(k,p1__20323_SHARP_,p2__20324_SHARP_);
}),max_key.cljs$core$IFn$_invoke$arity$3(k,x,y),more);
};
var G__20335 = function (k,x,y,var_args){
var more = null;
if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20335__delegate.call(this,k,x,y,more);};
G__20335.cljs$lang$maxFixedArity = 3;
G__20335.cljs$lang$applyTo = (function (arglist__20336){
var k = cljs.core.first(arglist__20336);
arglist__20336 = cljs.core.next(arglist__20336);
var x = cljs.core.first(arglist__20336);
arglist__20336 = cljs.core.next(arglist__20336);
var y = cljs.core.first(arglist__20336);
var more = cljs.core.rest(arglist__20336);
return G__20335__delegate(k,x,y,more);
});
G__20335.cljs$core$IFn$_invoke$arity$variadic = G__20335__delegate;
return G__20335;
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
if(((function (){var G__20347 = x;
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__20347) : k.call(null,G__20347));
})() < (function (){var G__20348 = y;
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__20348) : k.call(null,G__20348));
})())){
return x;
} else {
return y;
}
});
var min_key__4 = (function() { 
var G__20349__delegate = function (k,x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__20337_SHARP_,p2__20338_SHARP_){
return min_key.cljs$core$IFn$_invoke$arity$3(k,p1__20337_SHARP_,p2__20338_SHARP_);
}),min_key.cljs$core$IFn$_invoke$arity$3(k,x,y),more);
};
var G__20349 = function (k,x,y,var_args){
var more = null;
if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20349__delegate.call(this,k,x,y,more);};
G__20349.cljs$lang$maxFixedArity = 3;
G__20349.cljs$lang$applyTo = (function (arglist__20350){
var k = cljs.core.first(arglist__20350);
arglist__20350 = cljs.core.next(arglist__20350);
var x = cljs.core.first(arglist__20350);
arglist__20350 = cljs.core.next(arglist__20350);
var y = cljs.core.first(arglist__20350);
var more = cljs.core.rest(arglist__20350);
return G__20349__delegate(k,x,y,more);
});
G__20349.cljs$core$IFn$_invoke$arity$variadic = G__20349__delegate;
return G__20349;
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

cljs.core.ArrayList.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/ArrayList");
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
var G__20367 = null;
var G__20367__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__20367__1 = (function (result){
var result__$1 = (cljs.core.truth_(a.isEmpty())?result:(function (){var v = cljs.core.vec(a.toArray());
a.clear();

return cljs.core.unreduced((function (){var G__20362 = result;
var G__20363 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__20362,G__20363) : rf.call(null,G__20362,G__20363));
})());
})());
var G__20364 = result__$1;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__20364) : rf.call(null,G__20364));
});
var G__20367__2 = (function (result,input){
a.add(input);

if((n === a.size())){
var v = cljs.core.vec(a.toArray());
a.clear();

var G__20365 = result;
var G__20366 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__20365,G__20366) : rf.call(null,G__20365,G__20366));
} else {
return result;
}
});
G__20367 = function(result,input){
switch(arguments.length){
case 0:
return G__20367__0.call(this);
case 1:
return G__20367__1.call(this,result);
case 2:
return G__20367__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20367.cljs$core$IFn$_invoke$arity$0 = G__20367__0;
G__20367.cljs$core$IFn$_invoke$arity$1 = G__20367__1;
G__20367.cljs$core$IFn$_invoke$arity$2 = G__20367__2;
return G__20367;
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
var G__20380 = null;
var G__20380__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__20380__1 = (function (result){
var G__20375 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__20375) : rf.call(null,G__20375));
});
var G__20380__2 = (function (result,input){
if(cljs.core.truth_((function (){var G__20376 = input;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__20376) : pred.call(null,G__20376));
})())){
var G__20377 = result;
var G__20378 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__20377,G__20378) : rf.call(null,G__20377,G__20378));
} else {
return cljs.core.reduced(result);
}
});
G__20380 = function(result,input){
switch(arguments.length){
case 0:
return G__20380__0.call(this);
case 1:
return G__20380__1.call(this,result);
case 2:
return G__20380__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20380.cljs$core$IFn$_invoke$arity$0 = G__20380__0;
G__20380.cljs$core$IFn$_invoke$arity$1 = G__20380__1;
G__20380.cljs$core$IFn$_invoke$arity$2 = G__20380__2;
return G__20380;
})()
});
});
var take_while__2 = (function (pred,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq(coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.truth_((function (){var G__20379 = cljs.core.first(s);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__20379) : pred.call(null,G__20379));
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
var G__20385 = (function (){var G__20387 = cljs.core._entry_key(sc,e);
var G__20388 = key;
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__20387,G__20388) : comp.call(null,G__20387,G__20388));
})();
var G__20386 = (0);
return (test.cljs$core$IFn$_invoke$arity$2 ? test.cljs$core$IFn$_invoke$arity$2(G__20385,G__20386) : test.call(null,G__20385,G__20386));
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
var vec__20392 = temp__4126__auto__;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20392,(0),null);
var s = vec__20392;
if(cljs.core.truth_((function (){var G__20393 = e;
return (include.cljs$core$IFn$_invoke$arity$1 ? include.cljs$core$IFn$_invoke$arity$1(G__20393) : include.call(null,G__20393));
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
var vec__20394 = temp__4126__auto__;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20394,(0),null);
var s = vec__20394;
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
var vec__20398 = temp__4126__auto__;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20398,(0),null);
var s = vec__20398;
if(cljs.core.truth_((function (){var G__20399 = e;
return (include.cljs$core$IFn$_invoke$arity$1 ? include.cljs$core$IFn$_invoke$arity$1(G__20399) : include.call(null,G__20399));
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
var vec__20400 = temp__4126__auto__;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20400,(0),null);
var s = vec__20400;
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

cljs.core.RangeIterator.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/RangeIterator");
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
var G__20401 = ((self__.end - self__.start) / self__.step);
return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(G__20401) : Math.ceil.call(null,G__20401));
}
});

cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_ordered_coll(rng__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
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
var ret__$1 = (function (){var G__20402 = ret;
var G__20403 = i;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20402,G__20403) : f.call(null,G__20402,G__20403));
})();
if(cljs.core.reduced_QMARK_(ret__$1)){
var G__20404 = ret__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20404) : cljs.core.deref.call(null,G__20404));
} else {
var G__20405 = (i + self__.step);
var G__20406 = ret__$1;
i = G__20405;
ret = G__20406;
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

cljs.core.Range.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/Range");
});

cljs.core.__GT_Range = (function __GT_Range(meta,start,end,step,__hash){
return (new cljs.core.Range(meta,start,end,step,__hash));
});

(cljs.core.Range.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator(this__4608__auto__);
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
var G__20424 = null;
var G__20424__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__20424__1 = (function (result){
var G__20421 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__20421) : rf.call(null,G__20421));
});
var G__20424__2 = (function (result,input){
var i = ia.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(ia.cljs$core$IDeref$_deref$arity$1(null) + (1)));
if((cljs.core.rem(i,n) === (0))){
var G__20422 = result;
var G__20423 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__20422,G__20423) : rf.call(null,G__20422,G__20423));
} else {
return result;
}
});
G__20424 = function(result,input){
switch(arguments.length){
case 0:
return G__20424__0.call(this);
case 1:
return G__20424__1.call(this,result);
case 2:
return G__20424__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20424.cljs$core$IFn$_invoke$arity$0 = G__20424__0;
G__20424.cljs$core$IFn$_invoke$arity$1 = G__20424__1;
G__20424.cljs$core$IFn$_invoke$arity$2 = G__20424__2;
return G__20424;
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
var G__20446 = null;
var G__20446__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__20446__1 = (function (result){
var result__$1 = (cljs.core.truth_(a.isEmpty())?result:(function (){var v = cljs.core.vec(a.toArray());
a.clear();

return cljs.core.unreduced((function (){var G__20437 = result;
var G__20438 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__20437,G__20438) : rf.call(null,G__20437,G__20438));
})());
})());
var G__20439 = result__$1;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__20439) : rf.call(null,G__20439));
});
var G__20446__2 = (function (result,input){
var pval = (function (){var G__20440 = pa;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20440) : cljs.core.deref.call(null,G__20440));
})();
var val = (function (){var G__20441 = input;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20441) : f.call(null,G__20441));
})();
cljs.core.vreset_BANG_(pa,val);

if((cljs.core.keyword_identical_QMARK_(pval,cljs.core.constant$keyword$15)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,pval))){
a.add(input);

return result;
} else {
var v = cljs.core.vec(a.toArray());
a.clear();

var ret = (function (){var G__20442 = result;
var G__20443 = v;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__20442,G__20443) : rf.call(null,G__20442,G__20443));
})();
if(cljs.core.reduced_QMARK_(ret)){
} else {
a.add(input);
}

return ret;
}
});
G__20446 = function(result,input){
switch(arguments.length){
case 0:
return G__20446__0.call(this);
case 1:
return G__20446__1.call(this,result);
case 2:
return G__20446__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20446.cljs$core$IFn$_invoke$arity$0 = G__20446__0;
G__20446.cljs$core$IFn$_invoke$arity$1 = G__20446__1;
G__20446.cljs$core$IFn$_invoke$arity$2 = G__20446__2;
return G__20446;
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
var fv = (function (){var G__20444 = fst;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20444) : f.call(null,G__20444));
})();
var run = cljs.core.cons(fst,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (fst,fv,s,temp__4126__auto__){
return (function (p1__20425_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fv,(function (){var G__20445 = p1__20425_SHARP_;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20445) : f.call(null,G__20445));
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
return reductions.cljs$core$IFn$_invoke$arity$3(f,(function (){var G__20455 = init;
var G__20456 = cljs.core.first(s);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20455,G__20456) : f.call(null,G__20455,G__20456));
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
var G__20551 = null;
var G__20551__0 = (function (){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})()],null));
});
var G__20551__1 = (function (x){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__20509 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20509) : f.call(null,G__20509));
})()],null));
});
var G__20551__2 = (function (x,y){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__20510 = x;
var G__20511 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20510,G__20511) : f.call(null,G__20510,G__20511));
})()],null));
});
var G__20551__3 = (function (x,y,z){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__20512 = x;
var G__20513 = y;
var G__20514 = z;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__20512,G__20513,G__20514) : f.call(null,G__20512,G__20513,G__20514));
})()],null));
});
var G__20551__4 = (function() { 
var G__20552__delegate = function (x,y,z,args){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args)],null));
};
var G__20552 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20552__delegate.call(this,x,y,z,args);};
G__20552.cljs$lang$maxFixedArity = 3;
G__20552.cljs$lang$applyTo = (function (arglist__20553){
var x = cljs.core.first(arglist__20553);
arglist__20553 = cljs.core.next(arglist__20553);
var y = cljs.core.first(arglist__20553);
arglist__20553 = cljs.core.next(arglist__20553);
var z = cljs.core.first(arglist__20553);
var args = cljs.core.rest(arglist__20553);
return G__20552__delegate(x,y,z,args);
});
G__20552.cljs$core$IFn$_invoke$arity$variadic = G__20552__delegate;
return G__20552;
})()
;
G__20551 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__20551__0.call(this);
case 1:
return G__20551__1.call(this,x);
case 2:
return G__20551__2.call(this,x,y);
case 3:
return G__20551__3.call(this,x,y,z);
default:
return G__20551__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20551.cljs$lang$maxFixedArity = 3;
G__20551.cljs$lang$applyTo = G__20551__4.cljs$lang$applyTo;
G__20551.cljs$core$IFn$_invoke$arity$0 = G__20551__0;
G__20551.cljs$core$IFn$_invoke$arity$1 = G__20551__1;
G__20551.cljs$core$IFn$_invoke$arity$2 = G__20551__2;
G__20551.cljs$core$IFn$_invoke$arity$3 = G__20551__3;
G__20551.cljs$core$IFn$_invoke$arity$variadic = G__20551__4.cljs$core$IFn$_invoke$arity$variadic;
return G__20551;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__20554 = null;
var G__20554__0 = (function (){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),(function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})()],null));
});
var G__20554__1 = (function (x){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__20515 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20515) : f.call(null,G__20515));
})(),(function (){var G__20516 = x;
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__20516) : g.call(null,G__20516));
})()],null));
});
var G__20554__2 = (function (x,y){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__20517 = x;
var G__20518 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20517,G__20518) : f.call(null,G__20517,G__20518));
})(),(function (){var G__20519 = x;
var G__20520 = y;
return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__20519,G__20520) : g.call(null,G__20519,G__20520));
})()],null));
});
var G__20554__3 = (function (x,y,z){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__20521 = x;
var G__20522 = y;
var G__20523 = z;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__20521,G__20522,G__20523) : f.call(null,G__20521,G__20522,G__20523));
})(),(function (){var G__20524 = x;
var G__20525 = y;
var G__20526 = z;
return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__20524,G__20525,G__20526) : g.call(null,G__20524,G__20525,G__20526));
})()],null));
});
var G__20554__4 = (function() { 
var G__20555__delegate = function (x,y,z,args){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args)],null));
};
var G__20555 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20555__delegate.call(this,x,y,z,args);};
G__20555.cljs$lang$maxFixedArity = 3;
G__20555.cljs$lang$applyTo = (function (arglist__20556){
var x = cljs.core.first(arglist__20556);
arglist__20556 = cljs.core.next(arglist__20556);
var y = cljs.core.first(arglist__20556);
arglist__20556 = cljs.core.next(arglist__20556);
var z = cljs.core.first(arglist__20556);
var args = cljs.core.rest(arglist__20556);
return G__20555__delegate(x,y,z,args);
});
G__20555.cljs$core$IFn$_invoke$arity$variadic = G__20555__delegate;
return G__20555;
})()
;
G__20554 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__20554__0.call(this);
case 1:
return G__20554__1.call(this,x);
case 2:
return G__20554__2.call(this,x,y);
case 3:
return G__20554__3.call(this,x,y,z);
default:
return G__20554__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20554.cljs$lang$maxFixedArity = 3;
G__20554.cljs$lang$applyTo = G__20554__4.cljs$lang$applyTo;
G__20554.cljs$core$IFn$_invoke$arity$0 = G__20554__0;
G__20554.cljs$core$IFn$_invoke$arity$1 = G__20554__1;
G__20554.cljs$core$IFn$_invoke$arity$2 = G__20554__2;
G__20554.cljs$core$IFn$_invoke$arity$3 = G__20554__3;
G__20554.cljs$core$IFn$_invoke$arity$variadic = G__20554__4.cljs$core$IFn$_invoke$arity$variadic;
return G__20554;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__20557 = null;
var G__20557__0 = (function (){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),(function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})(),(function (){return (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
})()],null));
});
var G__20557__1 = (function (x){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__20527 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20527) : f.call(null,G__20527));
})(),(function (){var G__20528 = x;
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__20528) : g.call(null,G__20528));
})(),(function (){var G__20529 = x;
return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__20529) : h.call(null,G__20529));
})()],null));
});
var G__20557__2 = (function (x,y){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__20530 = x;
var G__20531 = y;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20530,G__20531) : f.call(null,G__20530,G__20531));
})(),(function (){var G__20532 = x;
var G__20533 = y;
return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__20532,G__20533) : g.call(null,G__20532,G__20533));
})(),(function (){var G__20534 = x;
var G__20535 = y;
return (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(G__20534,G__20535) : h.call(null,G__20534,G__20535));
})()],null));
});
var G__20557__3 = (function (x,y,z){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__20536 = x;
var G__20537 = y;
var G__20538 = z;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__20536,G__20537,G__20538) : f.call(null,G__20536,G__20537,G__20538));
})(),(function (){var G__20539 = x;
var G__20540 = y;
var G__20541 = z;
return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__20539,G__20540,G__20541) : g.call(null,G__20539,G__20540,G__20541));
})(),(function (){var G__20542 = x;
var G__20543 = y;
var G__20544 = z;
return (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(G__20542,G__20543,G__20544) : h.call(null,G__20542,G__20543,G__20544));
})()],null));
});
var G__20557__4 = (function() { 
var G__20558__delegate = function (x,y,z,args){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,x,y,z,args)],null));
};
var G__20558 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20558__delegate.call(this,x,y,z,args);};
G__20558.cljs$lang$maxFixedArity = 3;
G__20558.cljs$lang$applyTo = (function (arglist__20559){
var x = cljs.core.first(arglist__20559);
arglist__20559 = cljs.core.next(arglist__20559);
var y = cljs.core.first(arglist__20559);
arglist__20559 = cljs.core.next(arglist__20559);
var z = cljs.core.first(arglist__20559);
var args = cljs.core.rest(arglist__20559);
return G__20558__delegate(x,y,z,args);
});
G__20558.cljs$core$IFn$_invoke$arity$variadic = G__20558__delegate;
return G__20558;
})()
;
G__20557 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__20557__0.call(this);
case 1:
return G__20557__1.call(this,x);
case 2:
return G__20557__2.call(this,x,y);
case 3:
return G__20557__3.call(this,x,y,z);
default:
return G__20557__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20557.cljs$lang$maxFixedArity = 3;
G__20557.cljs$lang$applyTo = G__20557__4.cljs$lang$applyTo;
G__20557.cljs$core$IFn$_invoke$arity$0 = G__20557__0;
G__20557.cljs$core$IFn$_invoke$arity$1 = G__20557__1;
G__20557.cljs$core$IFn$_invoke$arity$2 = G__20557__2;
G__20557.cljs$core$IFn$_invoke$arity$3 = G__20557__3;
G__20557.cljs$core$IFn$_invoke$arity$variadic = G__20557__4.cljs$core$IFn$_invoke$arity$variadic;
return G__20557;
})()
});
var juxt__4 = (function() { 
var G__20560__delegate = function (f,g,h,fs){
var fs__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(f,g,h,fs);
return ((function (fs__$1){
return (function() {
var G__20561 = null;
var G__20561__0 = (function (){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__20457_SHARP_,p2__20458_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__20457_SHARP_,(function (){return (p2__20458_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p2__20458_SHARP_.cljs$core$IFn$_invoke$arity$0() : p2__20458_SHARP_.call(null));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__20561__1 = (function (x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__20459_SHARP_,p2__20460_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__20459_SHARP_,(function (){var G__20545 = x;
return (p2__20460_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__20460_SHARP_.cljs$core$IFn$_invoke$arity$1(G__20545) : p2__20460_SHARP_.call(null,G__20545));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__20561__2 = (function (x,y){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__20461_SHARP_,p2__20462_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__20461_SHARP_,(function (){var G__20546 = x;
var G__20547 = y;
return (p2__20462_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__20462_SHARP_.cljs$core$IFn$_invoke$arity$2(G__20546,G__20547) : p2__20462_SHARP_.call(null,G__20546,G__20547));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__20561__3 = (function (x,y,z){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__20463_SHARP_,p2__20464_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__20463_SHARP_,(function (){var G__20548 = x;
var G__20549 = y;
var G__20550 = z;
return (p2__20464_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p2__20464_SHARP_.cljs$core$IFn$_invoke$arity$3(G__20548,G__20549,G__20550) : p2__20464_SHARP_.call(null,G__20548,G__20549,G__20550));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__20561__4 = (function() { 
var G__20562__delegate = function (x,y,z,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__20465_SHARP_,p2__20466_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__20465_SHARP_,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(p2__20466_SHARP_,x,y,z,args));
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
};
var G__20562 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20562__delegate.call(this,x,y,z,args);};
G__20562.cljs$lang$maxFixedArity = 3;
G__20562.cljs$lang$applyTo = (function (arglist__20563){
var x = cljs.core.first(arglist__20563);
arglist__20563 = cljs.core.next(arglist__20563);
var y = cljs.core.first(arglist__20563);
arglist__20563 = cljs.core.next(arglist__20563);
var z = cljs.core.first(arglist__20563);
var args = cljs.core.rest(arglist__20563);
return G__20562__delegate(x,y,z,args);
});
G__20562.cljs$core$IFn$_invoke$arity$variadic = G__20562__delegate;
return G__20562;
})()
;
G__20561 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__20561__0.call(this);
case 1:
return G__20561__1.call(this,x);
case 2:
return G__20561__2.call(this,x,y);
case 3:
return G__20561__3.call(this,x,y,z);
default:
return G__20561__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20561.cljs$lang$maxFixedArity = 3;
G__20561.cljs$lang$applyTo = G__20561__4.cljs$lang$applyTo;
G__20561.cljs$core$IFn$_invoke$arity$0 = G__20561__0;
G__20561.cljs$core$IFn$_invoke$arity$1 = G__20561__1;
G__20561.cljs$core$IFn$_invoke$arity$2 = G__20561__2;
G__20561.cljs$core$IFn$_invoke$arity$3 = G__20561__3;
G__20561.cljs$core$IFn$_invoke$arity$variadic = G__20561__4.cljs$core$IFn$_invoke$arity$variadic;
return G__20561;
})()
;})(fs__$1))
};
var G__20560 = function (f,g,h,var_args){
var fs = null;
if (arguments.length > 3) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20560__delegate.call(this,f,g,h,fs);};
G__20560.cljs$lang$maxFixedArity = 3;
G__20560.cljs$lang$applyTo = (function (arglist__20564){
var f = cljs.core.first(arglist__20564);
arglist__20564 = cljs.core.next(arglist__20564);
var g = cljs.core.first(arglist__20564);
arglist__20564 = cljs.core.next(arglist__20564);
var h = cljs.core.first(arglist__20564);
var fs = cljs.core.rest(arglist__20564);
return G__20560__delegate(f,g,h,fs);
});
G__20560.cljs$core$IFn$_invoke$arity$variadic = G__20560__delegate;
return G__20560;
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
var G__20565 = cljs.core.next(coll);
coll = G__20565;
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
var G__20566 = (n - (1));
var G__20567 = cljs.core.next(coll);
n = G__20566;
coll = G__20567;
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
var vec__20571 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20571,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20571,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20571,(2),null);
return (new RegExp(pattern,flags));
}
});
cljs.core.pr_sequential_writer = (function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){
var _STAR_print_level_STAR_20579 = cljs.core._STAR_print_level_STAR_;
try{cljs.core._STAR_print_level_STAR_ = (((cljs.core._STAR_print_level_STAR_ == null))?null:(cljs.core._STAR_print_level_STAR_ - (1)));

if((!((cljs.core._STAR_print_level_STAR_ == null))) && ((cljs.core._STAR_print_level_STAR_ < (0)))){
return cljs.core._write(writer,"#");
} else {
cljs.core._write(writer,begin);

if(cljs.core.seq(coll)){
var G__20580_20586 = cljs.core.first(coll);
var G__20581_20587 = writer;
var G__20582_20588 = opts;
(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__20580_20586,G__20581_20587,G__20582_20588) : print_one.call(null,G__20580_20586,G__20581_20587,G__20582_20588));
} else {
}

var coll_20589__$1 = cljs.core.next(coll);
var n_20590 = (cljs.core.constant$keyword$5.cljs$core$IFn$_invoke$arity$1(opts) - (1));
while(true){
if((coll_20589__$1) && (((n_20590 == null)) || (!((n_20590 === (0)))))){
cljs.core._write(writer,sep);

var G__20583_20591 = cljs.core.first(coll_20589__$1);
var G__20584_20592 = writer;
var G__20585_20593 = opts;
(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__20583_20591,G__20584_20592,G__20585_20593) : print_one.call(null,G__20583_20591,G__20584_20592,G__20585_20593));

var G__20594 = cljs.core.next(coll_20589__$1);
var G__20595 = (n_20590 - (1));
coll_20589__$1 = G__20594;
n_20590 = G__20595;
continue;
} else {
if((cljs.core.seq(coll_20589__$1)) && ((n_20590 === (0)))){
cljs.core._write(writer,sep);

cljs.core._write(writer,"...");
} else {
}
}
break;
}

return cljs.core._write(writer,end);
}
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_20579;
}});
/**
* @param {...*} var_args
*/
cljs.core.write_all = (function() { 
var write_all__delegate = function (writer,ss){
var seq__20600 = cljs.core.seq(ss);
var chunk__20601 = null;
var count__20602 = (0);
var i__20603 = (0);
while(true){
if((i__20603 < count__20602)){
var s = chunk__20601.cljs$core$IIndexed$_nth$arity$2(null,i__20603);
cljs.core._write(writer,s);

var G__20604 = seq__20600;
var G__20605 = chunk__20601;
var G__20606 = count__20602;
var G__20607 = (i__20603 + (1));
seq__20600 = G__20604;
chunk__20601 = G__20605;
count__20602 = G__20606;
i__20603 = G__20607;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__20600);
if(temp__4126__auto__){
var seq__20600__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20600__$1)){
var c__4417__auto__ = cljs.core.chunk_first(seq__20600__$1);
var G__20608 = cljs.core.chunk_rest(seq__20600__$1);
var G__20609 = c__4417__auto__;
var G__20610 = cljs.core.count(c__4417__auto__);
var G__20611 = (0);
seq__20600 = G__20608;
chunk__20601 = G__20609;
count__20602 = G__20610;
i__20603 = G__20611;
continue;
} else {
var s = cljs.core.first(seq__20600__$1);
cljs.core._write(writer,s);

var G__20612 = cljs.core.next(seq__20600__$1);
var G__20613 = null;
var G__20614 = (0);
var G__20615 = (0);
seq__20600 = G__20612;
chunk__20601 = G__20613;
count__20602 = G__20614;
i__20603 = G__20615;
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
write_all.cljs$lang$applyTo = (function (arglist__20616){
var writer = cljs.core.first(arglist__20616);
var ss = cljs.core.rest(arglist__20616);
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
cljs.core.char_escapes = (function (){var obj20618 = {"\"":"\\\"","\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};
return obj20618;
})();
cljs.core.quote_string = (function quote_string(s){
return [cljs.core.str("\""),cljs.core.str(s.replace((function (){var G__20621 = "[\\\\\"\b\f\n\r\t]";
var G__20622 = "g";
return RegExp(G__20621,G__20622);
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
if(cljs.core.truth_((function (){var and__3618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$3);
if(cljs.core.truth_(and__3618__auto__)){
var and__3618__auto____$1 = (function (){var G__20636 = obj;
if(G__20636){
var bit__4311__auto__ = (G__20636.cljs$lang$protocol_mask$partition0$ & (131072));
if((bit__4311__auto__) || (G__20636.cljs$core$IMeta$)){
return true;
} else {
if((!G__20636.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__20636);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__20636);
}
})();
if(and__3618__auto____$1){
return cljs.core.meta(obj);
} else {
return and__3618__auto____$1;
}
} else {
return and__3618__auto__;
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
if((function (){var G__20637 = obj;
if(G__20637){
var bit__4304__auto__ = (G__20637.cljs$lang$protocol_mask$partition0$ & (2147483648));
if((bit__4304__auto__) || (G__20637.cljs$core$IPrintWithWriter$)){
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

var G__20638 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(obj[k])], null);
}),cljs.core.js_keys(obj));
var G__20639 = pr_writer;
var G__20640 = writer;
var G__20641 = opts;
return (cljs.core.print_map.cljs$core$IFn$_invoke$arity$4 ? cljs.core.print_map.cljs$core$IFn$_invoke$arity$4(G__20638,G__20639,G__20640,G__20641) : cljs.core.print_map.call(null,G__20638,G__20639,G__20640,G__20641));
} else {
if(obj instanceof Array){
return cljs.core.pr_sequential_writer(writer,pr_writer,"#js ["," ","]",opts,obj);
} else {
if(cljs.core.truth_((function (){var G__20642 = obj;
return goog.isString(G__20642);
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
var G__20644 = [cljs.core.str("0"),cljs.core.str(ns)].join('');
ns = G__20644;
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
if((function (){var G__20643 = obj;
if(G__20643){
var bit__4311__auto__ = (G__20643.cljs$lang$protocol_mask$partition0$ & (2147483648));
if((bit__4311__auto__) || (G__20643.cljs$core$IPrintWithWriter$)){
return true;
} else {
if((!G__20643.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,G__20643);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,G__20643);
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

var seq__20649 = cljs.core.seq(cljs.core.next(objs));
var chunk__20650 = null;
var count__20651 = (0);
var i__20652 = (0);
while(true){
if((i__20652 < count__20651)){
var obj = chunk__20650.cljs$core$IIndexed$_nth$arity$2(null,i__20652);
cljs.core._write(writer," ");

cljs.core.pr_writer(obj,writer,opts);

var G__20653 = seq__20649;
var G__20654 = chunk__20650;
var G__20655 = count__20651;
var G__20656 = (i__20652 + (1));
seq__20649 = G__20653;
chunk__20650 = G__20654;
count__20651 = G__20655;
i__20652 = G__20656;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__20649);
if(temp__4126__auto__){
var seq__20649__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20649__$1)){
var c__4417__auto__ = cljs.core.chunk_first(seq__20649__$1);
var G__20657 = cljs.core.chunk_rest(seq__20649__$1);
var G__20658 = c__4417__auto__;
var G__20659 = cljs.core.count(c__4417__auto__);
var G__20660 = (0);
seq__20649 = G__20657;
chunk__20650 = G__20658;
count__20651 = G__20659;
i__20652 = G__20660;
continue;
} else {
var obj = cljs.core.first(seq__20649__$1);
cljs.core._write(writer," ");

cljs.core.pr_writer(obj,writer,opts);

var G__20661 = cljs.core.next(seq__20649__$1);
var G__20662 = null;
var G__20663 = (0);
var G__20664 = (0);
seq__20649 = G__20661;
chunk__20650 = G__20662;
count__20651 = G__20663;
i__20652 = G__20664;
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
pr_str.cljs$lang$applyTo = (function (arglist__20665){
var objs = cljs.core.seq(arglist__20665);
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
prn_str.cljs$lang$applyTo = (function (arglist__20666){
var objs = cljs.core.seq(arglist__20666);
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
pr.cljs$lang$applyTo = (function (arglist__20667){
var objs = cljs.core.seq(arglist__20667);
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__20668){
var objs = cljs.core.seq(arglist__20668);
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
print_str.cljs$lang$applyTo = (function (arglist__20669){
var objs = cljs.core.seq(arglist__20669);
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
println.cljs$lang$applyTo = (function (arglist__20670){
var objs = cljs.core.seq(arglist__20670);
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
println_str.cljs$lang$applyTo = (function (arglist__20671){
var objs = cljs.core.seq(arglist__20671);
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
prn.cljs$lang$applyTo = (function (arglist__20672){
var objs = cljs.core.seq(arglist__20672);
return prn__delegate(objs);
});
prn.cljs$core$IFn$_invoke$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.print_map = (function print_map(m,print_one,writer,opts){
return cljs.core.pr_sequential_writer(writer,(function (e,w,opts__$1){
var G__20679_20685 = cljs.core.key(e);
var G__20680_20686 = w;
var G__20681_20687 = opts__$1;
(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__20679_20685,G__20680_20686,G__20681_20687) : print_one.call(null,G__20679_20685,G__20680_20686,G__20681_20687));

cljs.core._write(w," ");

var G__20682 = cljs.core.val(e);
var G__20683 = w;
var G__20684 = opts__$1;
return (print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__20682,G__20683,G__20684) : print_one.call(null,G__20682,G__20683,G__20684));
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__20688){
var iref = cljs.core.first(arglist__20688);
arglist__20688 = cljs.core.next(arglist__20688);
var f = cljs.core.first(arglist__20688);
var args = cljs.core.rest(arglist__20688);
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
return cljs.core._add_watch(iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch(iref,key);
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
cljs.core.gensym_counter = (function (){var G__20691 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20691) : cljs.core.atom.call(null,G__20691));
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

cljs.core.Delay.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/Delay");
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
var G__20693 = x;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20693) : cljs.core.deref.call(null,G__20693));
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
return (function (p1__20694_SHARP_,p2__20695_SHARP_){
var ret = (function (){var G__20698 = p1__20694_SHARP_;
var G__20699 = p2__20695_SHARP_;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__20698,G__20699) : rf.call(null,G__20698,G__20699));
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
var G__20702 = null;
var G__20702__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__20702__1 = (function (result){
var G__20701 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__20701) : rf.call(null,G__20701));
});
var G__20702__2 = (function (result,input){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf1,result,input);
});
G__20702 = function(result,input){
switch(arguments.length){
case 0:
return G__20702__0.call(this);
case 1:
return G__20702__1.call(this,result);
case 2:
return G__20702__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20702.cljs$core$IFn$_invoke$arity$0 = G__20702__0;
G__20702.cljs$core$IFn$_invoke$arity$1 = G__20702__1;
G__20702.cljs$core$IFn$_invoke$arity$2 = G__20702__2;
return G__20702;
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
var G__20711 = null;
var G__20711__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__20711__1 = (function (result){
var G__20707 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__20707) : rf.call(null,G__20707));
});
var G__20711__2 = (function (result,input){
var prior = (function (){var G__20708 = pa;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20708) : cljs.core.deref.call(null,G__20708));
})();
cljs.core.vreset_BANG_(pa,input);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prior,input)){
return result;
} else {
var G__20709 = result;
var G__20710 = input;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__20709,G__20710) : rf.call(null,G__20709,G__20710));
}
});
G__20711 = function(result,input){
switch(arguments.length){
case 0:
return G__20711__0.call(this);
case 1:
return G__20711__1.call(this,result);
case 2:
return G__20711__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20711.cljs$core$IFn$_invoke$arity$0 = G__20711__0;
G__20711.cljs$core$IFn$_invoke$arity$1 = G__20711__1;
G__20711.cljs$core$IFn$_invoke$arity$2 = G__20711__2;
return G__20711;
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
return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < prob);
}));
});
var random_sample__2 = (function (prob,coll){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (_){
return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < prob);
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

cljs.core.Eduction.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/Eduction");
});

cljs.core.__GT_Eduction = (function __GT_Eduction(xform,coll){
return (new cljs.core.Eduction(xform,coll));
});

(cljs.core.Eduction.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator(this__4608__auto__);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__20713_SHARP_,p2__20712_SHARP_){
var G__20715 = p2__20712_SHARP_;
return (proc.cljs$core$IFn$_invoke$arity$1 ? proc.cljs$core$IFn$_invoke$arity$1(G__20715) : proc.call(null,G__20715));
}),null,coll);
});

cljs.core.IEncodeJS = (function (){var obj20717 = {};
return obj20717;
})();

cljs.core._clj__GT_js = (function _clj__GT_js(x){
if((function (){var and__3618__auto__ = x;
if(and__3618__auto__){
return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1;
} else {
return and__3618__auto__;
}
})()){
return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1(x);
} else {
var x__4274__auto__ = (((x == null))?null:x);
return (function (){var or__3630__auto__ = (cljs.core._clj__GT_js[(function (){var G__20721 = x__4274__auto__;
return goog.typeOf(G__20721);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._clj__GT_js["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IEncodeJS.-clj->js",x);
}
}
})().call(null,x);
}
});

cljs.core._key__GT_js = (function _key__GT_js(x){
if((function (){var and__3618__auto__ = x;
if(and__3618__auto__){
return x.cljs$core$IEncodeJS$_key__GT_js$arity$1;
} else {
return and__3618__auto__;
}
})()){
return x.cljs$core$IEncodeJS$_key__GT_js$arity$1(x);
} else {
var x__4274__auto__ = (((x == null))?null:x);
return (function (){var or__3630__auto__ = (cljs.core._key__GT_js[(function (){var G__20725 = x__4274__auto__;
return goog.typeOf(G__20725);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._key__GT_js["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IEncodeJS.-key->js",x);
}
}
})().call(null,x);
}
});

cljs.core.key__GT_js = (function key__GT_js(k){
if((function (){var G__20728 = k;
if(G__20728){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__20728.cljs$core$IEncodeJS$;
}
})())){
return true;
} else {
if((!G__20728.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__20728);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__20728);
}
})()){
return cljs.core._clj__GT_js(k);
} else {
if((typeof k === 'string') || (typeof k === 'number') || ((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol))){
var G__20729 = k;
return (cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1 ? cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1(G__20729) : cljs.core.clj__GT_js.call(null,G__20729));
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
if((function (){var G__20745 = x;
if(G__20745){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__20745.cljs$core$IEncodeJS$;
}
})())){
return true;
} else {
if((!G__20745.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__20745);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__20745);
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
var m = (function (){var obj20747 = {};
return obj20747;
})();
var seq__20748_20758 = cljs.core.seq(x);
var chunk__20749_20759 = null;
var count__20750_20760 = (0);
var i__20751_20761 = (0);
while(true){
if((i__20751_20761 < count__20750_20760)){
var vec__20752_20762 = chunk__20749_20759.cljs$core$IIndexed$_nth$arity$2(null,i__20751_20761);
var k_20763 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20752_20762,(0),null);
var v_20764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20752_20762,(1),null);
(m[cljs.core.key__GT_js(k_20763)] = clj__GT_js(v_20764));

var G__20765 = seq__20748_20758;
var G__20766 = chunk__20749_20759;
var G__20767 = count__20750_20760;
var G__20768 = (i__20751_20761 + (1));
seq__20748_20758 = G__20765;
chunk__20749_20759 = G__20766;
count__20750_20760 = G__20767;
i__20751_20761 = G__20768;
continue;
} else {
var temp__4126__auto___20769 = cljs.core.seq(seq__20748_20758);
if(temp__4126__auto___20769){
var seq__20748_20770__$1 = temp__4126__auto___20769;
if(cljs.core.chunked_seq_QMARK_(seq__20748_20770__$1)){
var c__4417__auto___20771 = cljs.core.chunk_first(seq__20748_20770__$1);
var G__20772 = cljs.core.chunk_rest(seq__20748_20770__$1);
var G__20773 = c__4417__auto___20771;
var G__20774 = cljs.core.count(c__4417__auto___20771);
var G__20775 = (0);
seq__20748_20758 = G__20772;
chunk__20749_20759 = G__20773;
count__20750_20760 = G__20774;
i__20751_20761 = G__20775;
continue;
} else {
var vec__20753_20776 = cljs.core.first(seq__20748_20770__$1);
var k_20777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20753_20776,(0),null);
var v_20778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20753_20776,(1),null);
(m[cljs.core.key__GT_js(k_20777)] = clj__GT_js(v_20778));

var G__20779 = cljs.core.next(seq__20748_20770__$1);
var G__20780 = null;
var G__20781 = (0);
var G__20782 = (0);
seq__20748_20758 = G__20779;
chunk__20749_20759 = G__20780;
count__20750_20760 = G__20781;
i__20751_20761 = G__20782;
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
var seq__20754_20783 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clj__GT_js,x));
var chunk__20755_20784 = null;
var count__20756_20785 = (0);
var i__20757_20786 = (0);
while(true){
if((i__20757_20786 < count__20756_20785)){
var x_20787__$1 = chunk__20755_20784.cljs$core$IIndexed$_nth$arity$2(null,i__20757_20786);
arr.push(x_20787__$1);

var G__20788 = seq__20754_20783;
var G__20789 = chunk__20755_20784;
var G__20790 = count__20756_20785;
var G__20791 = (i__20757_20786 + (1));
seq__20754_20783 = G__20788;
chunk__20755_20784 = G__20789;
count__20756_20785 = G__20790;
i__20757_20786 = G__20791;
continue;
} else {
var temp__4126__auto___20792 = cljs.core.seq(seq__20754_20783);
if(temp__4126__auto___20792){
var seq__20754_20793__$1 = temp__4126__auto___20792;
if(cljs.core.chunked_seq_QMARK_(seq__20754_20793__$1)){
var c__4417__auto___20794 = cljs.core.chunk_first(seq__20754_20793__$1);
var G__20795 = cljs.core.chunk_rest(seq__20754_20793__$1);
var G__20796 = c__4417__auto___20794;
var G__20797 = cljs.core.count(c__4417__auto___20794);
var G__20798 = (0);
seq__20754_20783 = G__20795;
chunk__20755_20784 = G__20796;
count__20756_20785 = G__20797;
i__20757_20786 = G__20798;
continue;
} else {
var x_20799__$1 = cljs.core.first(seq__20754_20793__$1);
arr.push(x_20799__$1);

var G__20800 = cljs.core.next(seq__20754_20793__$1);
var G__20801 = null;
var G__20802 = (0);
var G__20803 = (0);
seq__20754_20783 = G__20800;
chunk__20755_20784 = G__20801;
count__20756_20785 = G__20802;
i__20757_20786 = G__20803;
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

cljs.core.IEncodeClojure = (function (){var obj20805 = {};
return obj20805;
})();

cljs.core._js__GT_clj = (function _js__GT_clj(x,options){
if((function (){var and__3618__auto__ = x;
if(and__3618__auto__){
return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2;
} else {
return and__3618__auto__;
}
})()){
return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2(x,options);
} else {
var x__4274__auto__ = (((x == null))?null:x);
return (function (){var or__3630__auto__ = (cljs.core._js__GT_clj[(function (){var G__20809 = x__4274__auto__;
return goog.typeOf(G__20809);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._js__GT_clj["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
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
var G__20866__delegate = function (x,opts){
var map__20839 = opts;
var map__20839__$1 = ((cljs.core.seq_QMARK_(map__20839))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20839):map__20839);
var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20839__$1,cljs.core.constant$keyword$16);
var keyfn = (cljs.core.truth_(keywordize_keys)?cljs.core.keyword:cljs.core.str);
var f = ((function (map__20839,map__20839__$1,keywordize_keys,keyfn){
return (function thisfn(x__$1){
if((function (){var G__20855 = x__$1;
if(G__20855){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__20855.cljs$core$IEncodeClojure$;
}
})())){
return true;
} else {
if((!G__20855.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeClojure,G__20855);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeClojure,G__20855);
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4386__auto__ = ((function (map__20839,map__20839__$1,keywordize_keys,keyfn){
return (function iter__20856(s__20857){
return (new cljs.core.LazySeq(null,((function (map__20839,map__20839__$1,keywordize_keys,keyfn){
return (function (){
var s__20857__$1 = s__20857;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__20857__$1);
if(temp__4126__auto__){
var s__20857__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20857__$2)){
var c__4384__auto__ = cljs.core.chunk_first(s__20857__$2);
var size__4385__auto__ = cljs.core.count(c__4384__auto__);
var b__20859 = cljs.core.chunk_buffer(size__4385__auto__);
if((function (){var i__20858 = (0);
while(true){
if((i__20858 < size__4385__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4384__auto__,i__20858);
cljs.core.chunk_append(b__20859,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20864 = k;
return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__20864) : keyfn.call(null,G__20864));
})(),thisfn((x__$1[k]))], null));

var G__20867 = (i__20858 + (1));
i__20858 = G__20867;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20859),iter__20856(cljs.core.chunk_rest(s__20857__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20859),null);
}
} else {
var k = cljs.core.first(s__20857__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20865 = k;
return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__20865) : keyfn.call(null,G__20865));
})(),thisfn((x__$1[k]))], null),iter__20856(cljs.core.rest(s__20857__$2)));
}
} else {
return null;
}
break;
}
});})(map__20839,map__20839__$1,keywordize_keys,keyfn))
,null,null));
});})(map__20839,map__20839__$1,keywordize_keys,keyfn))
;
return iter__4386__auto__(cljs.core.js_keys(x__$1));
})());
} else {
return x__$1;

}
}
}
}
}
});})(map__20839,map__20839__$1,keywordize_keys,keyfn))
;
return f(x);
};
var G__20866 = function (x,var_args){
var opts = null;
if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__20866__delegate.call(this,x,opts);};
G__20866.cljs$lang$maxFixedArity = 1;
G__20866.cljs$lang$applyTo = (function (arglist__20868){
var x = cljs.core.first(arglist__20868);
var opts = cljs.core.rest(arglist__20868);
return G__20866__delegate(x,opts);
});
G__20866.cljs$core$IFn$_invoke$arity$variadic = G__20866__delegate;
return G__20866;
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
var mem = (function (){var G__20871 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20871) : cljs.core.atom.call(null,G__20871));
})();
return ((function (mem){
return (function() { 
var G__20873__delegate = function (args){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var G__20872 = mem;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20872) : cljs.core.deref.call(null,G__20872));
})(),args,cljs.core.lookup_sentinel);
if((v === cljs.core.lookup_sentinel)){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc,args,ret);

return ret;
} else {
return v;
}
};
var G__20873 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__20873__delegate.call(this,args);};
G__20873.cljs$lang$maxFixedArity = 0;
G__20873.cljs$lang$applyTo = (function (arglist__20874){
var args = cljs.core.seq(arglist__20874);
return G__20873__delegate(args);
});
G__20873.cljs$core$IFn$_invoke$arity$variadic = G__20873__delegate;
return G__20873;
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
var G__20876 = ret;
f = G__20876;
continue;
} else {
return ret;
}
break;
}
});
var trampoline__2 = (function() { 
var G__20877__delegate = function (f,args){
return trampoline.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}));
};
var G__20877 = function (f,var_args){
var args = null;
if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__20877__delegate.call(this,f,args);};
G__20877.cljs$lang$maxFixedArity = 1;
G__20877.cljs$lang$applyTo = (function (arglist__20878){
var f = cljs.core.first(arglist__20878);
var args = cljs.core.rest(arglist__20878);
return G__20877__delegate(f,args);
});
G__20877.cljs$core$IFn$_invoke$arity$variadic = G__20877__delegate;
return G__20877;
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
var G__20881 = ((function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})() * n);
return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__20881) : Math.floor.call(null,G__20881));
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
var k = (function (){var G__20883 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20883) : f.call(null,G__20883));
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
cljs.core._global_hierarchy = (function (){var G__20885 = cljs.core.make_hierarchy();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20885) : cljs.core.atom.call(null,G__20885));
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
swap_global_hierarchy_BANG_.cljs$lang$applyTo = (function (arglist__20886){
var f = cljs.core.first(arglist__20886);
var args = cljs.core.rest(arglist__20886);
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
return isa_QMARK_.cljs$core$IFn$_invoke$arity$3((function (){var G__20951 = cljs.core.get_global_hierarchy();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20951) : cljs.core.deref.call(null,G__20951));
})(),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3630__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child,parent);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = cljs.core.contains_QMARK_(cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(h).call(null,child),parent);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
var and__3618__auto__ = cljs.core.vector_QMARK_(parent);
if(and__3618__auto__){
var and__3618__auto____$1 = cljs.core.vector_QMARK_(child);
if(and__3618__auto____$1){
var and__3618__auto____$2 = (cljs.core.count(parent) === cljs.core.count(child));
if(and__3618__auto____$2){
var ret = true;
var i = (0);
while(true){
if((!(ret)) || ((i === cljs.core.count(parent)))){
return ret;
} else {
var G__20976 = isa_QMARK_.cljs$core$IFn$_invoke$arity$3(h,(function (){var G__20974 = i;
return (child.cljs$core$IFn$_invoke$arity$1 ? child.cljs$core$IFn$_invoke$arity$1(G__20974) : child.call(null,G__20974));
})(),(function (){var G__20975 = i;
return (parent.cljs$core$IFn$_invoke$arity$1 ? parent.cljs$core$IFn$_invoke$arity$1(G__20975) : parent.call(null,G__20975));
})());
var G__20977 = (i + (1));
ret = G__20976;
i = G__20977;
continue;
}
break;
}
} else {
return and__3618__auto____$2;
}
} else {
return and__3618__auto____$1;
}
} else {
return and__3618__auto__;
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
return parents.cljs$core$IFn$_invoke$arity$2((function (){var G__20981 = cljs.core.get_global_hierarchy();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20981) : cljs.core.deref.call(null,G__20981));
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
return ancestors.cljs$core$IFn$_invoke$arity$2((function (){var G__20985 = cljs.core.get_global_hierarchy();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20985) : cljs.core.deref.call(null,G__20985));
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
return descendants.cljs$core$IFn$_invoke$arity$2((function (){var G__20989 = cljs.core.get_global_hierarchy();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20989) : cljs.core.deref.call(null,G__20989));
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.get.cljs$core$IFn$_invoke$arity$3(targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons(target,(function (){var G__20998 = target;
return (targets.cljs$core$IFn$_invoke$arity$1 ? targets.cljs$core$IFn$_invoke$arity$1(G__20998) : targets.call(null,G__20998));
})())));
});})(tp,td,ta))
,m,cljs.core.cons(source,(function (){var G__20999 = source;
return (sources.cljs$core$IFn$_invoke$arity$1 ? sources.cljs$core$IFn$_invoke$arity$1(G__20999) : sources.call(null,G__20999));
})()));
});})(tp,td,ta))
;
var or__3630__auto__ = ((cljs.core.contains_QMARK_((function (){var G__21003 = tag;
return (tp.cljs$core$IFn$_invoke$arity$1 ? tp.cljs$core$IFn$_invoke$arity$1(G__21003) : tp.call(null,G__21003));
})(),parent))?null:(function (){
if(cljs.core.contains_QMARK_((function (){var G__21004 = tag;
return (ta.cljs$core$IFn$_invoke$arity$1 ? ta.cljs$core$IFn$_invoke$arity$1(G__21004) : ta.call(null,G__21004));
})(),parent)){
throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else {
}

if(cljs.core.contains_QMARK_((function (){var G__21005 = parent;
return (ta.cljs$core$IFn$_invoke$arity$1 ? ta.cljs$core$IFn$_invoke$arity$1(G__21005) : ta.call(null,G__21005));
})(),tag)){
throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else {
}

return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$17,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(h),tag,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(tp,tag,cljs.core.PersistentHashSet.EMPTY),parent)),cljs.core.constant$keyword$19,tf(cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(h),tag,td,parent,ta),cljs.core.constant$keyword$18,tf(cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(h),parent,ta,tag,td)], null);
})()
);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
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
var childsParents = (cljs.core.truth_((function (){var G__21012 = tag;
return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__21012) : parentMap.call(null,G__21012));
})())?cljs.core.disj.cljs$core$IFn$_invoke$arity$2((function (){var G__21013 = tag;
return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__21013) : parentMap.call(null,G__21013));
})(),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents = (cljs.core.truth_(cljs.core.not_empty(childsParents))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parentMap,tag,childsParents):cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(parentMap,tag));
var deriv_seq = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (parentMap,childsParents,newParents){
return (function (p1__21006_SHARP_){
return cljs.core.cons(cljs.core.first(p1__21006_SHARP_),cljs.core.interpose(cljs.core.first(p1__21006_SHARP_),cljs.core.second(p1__21006_SHARP_)));
});})(parentMap,childsParents,newParents))
,cljs.core.seq(newParents)));
if(cljs.core.contains_QMARK_((function (){var G__21014 = tag;
return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__21014) : parentMap.call(null,G__21014));
})(),parent)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (parentMap,childsParents,newParents,deriv_seq){
return (function (p1__21007_SHARP_,p2__21008_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.derive,p1__21007_SHARP_,p2__21008_SHARP_);
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
var G__21017 = method_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21017) : cljs.core.deref.call(null,G__21017));
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cached_hierarchy,(function (_){
var G__21018 = hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21018) : cljs.core.deref.call(null,G__21018));
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs = (function (){var G__21034 = prefer_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21034) : cljs.core.deref.call(null,G__21034));
})().call(null,x);
var or__3630__auto__ = (cljs.core.truth_((function (){var and__3618__auto__ = xprefs;
if(cljs.core.truth_(and__3618__auto__)){
var G__21036 = y;
return (xprefs.cljs$core$IFn$_invoke$arity$1 ? xprefs.cljs$core$IFn$_invoke$arity$1(G__21036) : xprefs.call(null,G__21036));
} else {
return and__3618__auto__;
}
})())?true:null);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (function (){var ps = cljs.core.parents.cljs$core$IFn$_invoke$arity$1(y);
while(true){
if((cljs.core.count(ps) > (0))){
if(cljs.core.truth_(prefers_STAR_(x,cljs.core.first(ps),prefer_table))){
} else {
}

var G__21037 = cljs.core.rest(ps);
ps = G__21037;
continue;
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(or__3630__auto____$1)){
return or__3630__auto____$1;
} else {
var or__3630__auto____$2 = (function (){var ps = cljs.core.parents.cljs$core$IFn$_invoke$arity$1(x);
while(true){
if((cljs.core.count(ps) > (0))){
if(cljs.core.truth_(prefers_STAR_(cljs.core.first(ps),y,prefer_table))){
} else {
}

var G__21038 = cljs.core.rest(ps);
ps = G__21038;
continue;
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(or__3630__auto____$2)){
return or__3630__auto____$2;
} else {
return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3630__auto__ = cljs.core.prefers_STAR_(x,y,prefer_table);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (be,p__21052){
var vec__21053 = p__21052;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21053,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21053,(1),null);
var e = vec__21053;
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3((function (){var G__21054 = hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21054) : cljs.core.deref.call(null,G__21054));
})(),dispatch_val,k)){
var be2 = (cljs.core.truth_((function (){var or__3630__auto__ = (be == null);
if(or__3630__auto__){
return or__3630__auto__;
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
}),null,(function (){var G__21055 = method_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21055) : cljs.core.deref.call(null,G__21055));
})());
if(cljs.core.truth_(best_entry)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__21056 = cached_hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21056) : cljs.core.deref.call(null,G__21056));
})(),(function (){var G__21057 = hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21057) : cljs.core.deref.call(null,G__21057));
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

cljs.core.IMultiFn = (function (){var obj21059 = {};
return obj21059;
})();

cljs.core._reset = (function _reset(mf){
if((function (){var and__3618__auto__ = mf;
if(and__3618__auto__){
return mf.cljs$core$IMultiFn$_reset$arity$1;
} else {
return and__3618__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else {
var x__4274__auto__ = (((mf == null))?null:mf);
return (function (){var or__3630__auto__ = (cljs.core._reset[(function (){var G__21063 = x__4274__auto__;
return goog.typeOf(G__21063);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._reset["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});

cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3618__auto__ = mf;
if(and__3618__auto__){
return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else {
return and__3618__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else {
var x__4274__auto__ = (((mf == null))?null:mf);
return (function (){var or__3630__auto__ = (cljs.core._add_method[(function (){var G__21067 = x__4274__auto__;
return goog.typeOf(G__21067);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._add_method["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});

cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3618__auto__ = mf;
if(and__3618__auto__){
return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else {
return and__3618__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else {
var x__4274__auto__ = (((mf == null))?null:mf);
return (function (){var or__3630__auto__ = (cljs.core._remove_method[(function (){var G__21071 = x__4274__auto__;
return goog.typeOf(G__21071);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._remove_method["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});

cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3618__auto__ = mf;
if(and__3618__auto__){
return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else {
return and__3618__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else {
var x__4274__auto__ = (((mf == null))?null:mf);
return (function (){var or__3630__auto__ = (cljs.core._prefer_method[(function (){var G__21075 = x__4274__auto__;
return goog.typeOf(G__21075);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._prefer_method["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});

cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3618__auto__ = mf;
if(and__3618__auto__){
return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else {
return and__3618__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else {
var x__4274__auto__ = (((mf == null))?null:mf);
return (function (){var or__3630__auto__ = (cljs.core._get_method[(function (){var G__21079 = x__4274__auto__;
return goog.typeOf(G__21079);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._get_method["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});

cljs.core._methods = (function _methods(mf){
if((function (){var and__3618__auto__ = mf;
if(and__3618__auto__){
return mf.cljs$core$IMultiFn$_methods$arity$1;
} else {
return and__3618__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else {
var x__4274__auto__ = (((mf == null))?null:mf);
return (function (){var or__3630__auto__ = (cljs.core._methods[(function (){var G__21083 = x__4274__auto__;
return goog.typeOf(G__21083);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._methods["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});

cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3618__auto__ = mf;
if(and__3618__auto__){
return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else {
return and__3618__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else {
var x__4274__auto__ = (((mf == null))?null:mf);
return (function (){var or__3630__auto__ = (cljs.core._prefers[(function (){var G__21087 = x__4274__auto__;
return goog.typeOf(G__21087);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._prefers["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
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
var G__21089 = this$__$1;
return goog.getUid(G__21089);
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__21090 = self__.cached_hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21090) : cljs.core.deref.call(null,G__21090));
})(),(function (){var G__21091 = self__.hierarchy;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21091) : cljs.core.deref.call(null,G__21091));
})())){
} else {
cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
}

var temp__4124__auto__ = (function (){var G__21092 = self__.method_cache;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21092) : cljs.core.deref.call(null,G__21092));
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
return (function (){var G__21093 = self__.method_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21093) : cljs.core.deref.call(null,G__21093));
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
var G__21094 = self__.method_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21094) : cljs.core.deref.call(null,G__21094));
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var self__ = this;
var mf__$1 = this;
var G__21095 = self__.prefer_table;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21095) : cljs.core.deref.call(null,G__21095));
});

cljs.core.MultiFn.prototype.call = (function() {
var G__21936 = null;
var G__21936__1 = (function (self__){
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
var G__21936__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__21096 = a;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(G__21096) : self__.dispatch_fn.call(null,G__21096));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21097 = a;
return (target_fn.cljs$core$IFn$_invoke$arity$1 ? target_fn.cljs$core$IFn$_invoke$arity$1(G__21097) : target_fn.call(null,G__21097));
});
var G__21936__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__21098 = a;
var G__21099 = b;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2(G__21098,G__21099) : self__.dispatch_fn.call(null,G__21098,G__21099));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21100 = a;
var G__21101 = b;
return (target_fn.cljs$core$IFn$_invoke$arity$2 ? target_fn.cljs$core$IFn$_invoke$arity$2(G__21100,G__21101) : target_fn.call(null,G__21100,G__21101));
});
var G__21936__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__21102 = a;
var G__21103 = b;
var G__21104 = c;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3(G__21102,G__21103,G__21104) : self__.dispatch_fn.call(null,G__21102,G__21103,G__21104));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21105 = a;
var G__21106 = b;
var G__21107 = c;
return (target_fn.cljs$core$IFn$_invoke$arity$3 ? target_fn.cljs$core$IFn$_invoke$arity$3(G__21105,G__21106,G__21107) : target_fn.call(null,G__21105,G__21106,G__21107));
});
var G__21936__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__21108 = a;
var G__21109 = b;
var G__21110 = c;
var G__21111 = d;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4(G__21108,G__21109,G__21110,G__21111) : self__.dispatch_fn.call(null,G__21108,G__21109,G__21110,G__21111));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21112 = a;
var G__21113 = b;
var G__21114 = c;
var G__21115 = d;
return (target_fn.cljs$core$IFn$_invoke$arity$4 ? target_fn.cljs$core$IFn$_invoke$arity$4(G__21112,G__21113,G__21114,G__21115) : target_fn.call(null,G__21112,G__21113,G__21114,G__21115));
});
var G__21936__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__21116 = a;
var G__21117 = b;
var G__21118 = c;
var G__21119 = d;
var G__21120 = e;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5(G__21116,G__21117,G__21118,G__21119,G__21120) : self__.dispatch_fn.call(null,G__21116,G__21117,G__21118,G__21119,G__21120));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21121 = a;
var G__21122 = b;
var G__21123 = c;
var G__21124 = d;
var G__21125 = e;
return (target_fn.cljs$core$IFn$_invoke$arity$5 ? target_fn.cljs$core$IFn$_invoke$arity$5(G__21121,G__21122,G__21123,G__21124,G__21125) : target_fn.call(null,G__21121,G__21122,G__21123,G__21124,G__21125));
});
var G__21936__7 = (function (self__,a,b,c,d,e,f){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__21126 = a;
var G__21127 = b;
var G__21128 = c;
var G__21129 = d;
var G__21130 = e;
var G__21131 = f;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6(G__21126,G__21127,G__21128,G__21129,G__21130,G__21131) : self__.dispatch_fn.call(null,G__21126,G__21127,G__21128,G__21129,G__21130,G__21131));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21132 = a;
var G__21133 = b;
var G__21134 = c;
var G__21135 = d;
var G__21136 = e;
var G__21137 = f;
return (target_fn.cljs$core$IFn$_invoke$arity$6 ? target_fn.cljs$core$IFn$_invoke$arity$6(G__21132,G__21133,G__21134,G__21135,G__21136,G__21137) : target_fn.call(null,G__21132,G__21133,G__21134,G__21135,G__21136,G__21137));
});
var G__21936__8 = (function (self__,a,b,c,d,e,f,g){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__21138 = a;
var G__21139 = b;
var G__21140 = c;
var G__21141 = d;
var G__21142 = e;
var G__21143 = f;
var G__21144 = g;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7(G__21138,G__21139,G__21140,G__21141,G__21142,G__21143,G__21144) : self__.dispatch_fn.call(null,G__21138,G__21139,G__21140,G__21141,G__21142,G__21143,G__21144));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21145 = a;
var G__21146 = b;
var G__21147 = c;
var G__21148 = d;
var G__21149 = e;
var G__21150 = f;
var G__21151 = g;
return (target_fn.cljs$core$IFn$_invoke$arity$7 ? target_fn.cljs$core$IFn$_invoke$arity$7(G__21145,G__21146,G__21147,G__21148,G__21149,G__21150,G__21151) : target_fn.call(null,G__21145,G__21146,G__21147,G__21148,G__21149,G__21150,G__21151));
});
var G__21936__9 = (function (self__,a,b,c,d,e,f,g,h){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__21152 = a;
var G__21153 = b;
var G__21154 = c;
var G__21155 = d;
var G__21156 = e;
var G__21157 = f;
var G__21158 = g;
var G__21159 = h;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8(G__21152,G__21153,G__21154,G__21155,G__21156,G__21157,G__21158,G__21159) : self__.dispatch_fn.call(null,G__21152,G__21153,G__21154,G__21155,G__21156,G__21157,G__21158,G__21159));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21160 = a;
var G__21161 = b;
var G__21162 = c;
var G__21163 = d;
var G__21164 = e;
var G__21165 = f;
var G__21166 = g;
var G__21167 = h;
return (target_fn.cljs$core$IFn$_invoke$arity$8 ? target_fn.cljs$core$IFn$_invoke$arity$8(G__21160,G__21161,G__21162,G__21163,G__21164,G__21165,G__21166,G__21167) : target_fn.call(null,G__21160,G__21161,G__21162,G__21163,G__21164,G__21165,G__21166,G__21167));
});
var G__21936__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__21168 = a;
var G__21169 = b;
var G__21170 = c;
var G__21171 = d;
var G__21172 = e;
var G__21173 = f;
var G__21174 = g;
var G__21175 = h;
var G__21176 = i;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9(G__21168,G__21169,G__21170,G__21171,G__21172,G__21173,G__21174,G__21175,G__21176) : self__.dispatch_fn.call(null,G__21168,G__21169,G__21170,G__21171,G__21172,G__21173,G__21174,G__21175,G__21176));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21177 = a;
var G__21178 = b;
var G__21179 = c;
var G__21180 = d;
var G__21181 = e;
var G__21182 = f;
var G__21183 = g;
var G__21184 = h;
var G__21185 = i;
return (target_fn.cljs$core$IFn$_invoke$arity$9 ? target_fn.cljs$core$IFn$_invoke$arity$9(G__21177,G__21178,G__21179,G__21180,G__21181,G__21182,G__21183,G__21184,G__21185) : target_fn.call(null,G__21177,G__21178,G__21179,G__21180,G__21181,G__21182,G__21183,G__21184,G__21185));
});
var G__21936__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__21186 = a;
var G__21187 = b;
var G__21188 = c;
var G__21189 = d;
var G__21190 = e;
var G__21191 = f;
var G__21192 = g;
var G__21193 = h;
var G__21194 = i;
var G__21195 = j;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10(G__21186,G__21187,G__21188,G__21189,G__21190,G__21191,G__21192,G__21193,G__21194,G__21195) : self__.dispatch_fn.call(null,G__21186,G__21187,G__21188,G__21189,G__21190,G__21191,G__21192,G__21193,G__21194,G__21195));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21196 = a;
var G__21197 = b;
var G__21198 = c;
var G__21199 = d;
var G__21200 = e;
var G__21201 = f;
var G__21202 = g;
var G__21203 = h;
var G__21204 = i;
var G__21205 = j;
return (target_fn.cljs$core$IFn$_invoke$arity$10 ? target_fn.cljs$core$IFn$_invoke$arity$10(G__21196,G__21197,G__21198,G__21199,G__21200,G__21201,G__21202,G__21203,G__21204,G__21205) : target_fn.call(null,G__21196,G__21197,G__21198,G__21199,G__21200,G__21201,G__21202,G__21203,G__21204,G__21205));
});
var G__21936__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__21206 = a;
var G__21207 = b;
var G__21208 = c;
var G__21209 = d;
var G__21210 = e;
var G__21211 = f;
var G__21212 = g;
var G__21213 = h;
var G__21214 = i;
var G__21215 = j;
var G__21216 = k;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11(G__21206,G__21207,G__21208,G__21209,G__21210,G__21211,G__21212,G__21213,G__21214,G__21215,G__21216) : self__.dispatch_fn.call(null,G__21206,G__21207,G__21208,G__21209,G__21210,G__21211,G__21212,G__21213,G__21214,G__21215,G__21216));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21217 = a;
var G__21218 = b;
var G__21219 = c;
var G__21220 = d;
var G__21221 = e;
var G__21222 = f;
var G__21223 = g;
var G__21224 = h;
var G__21225 = i;
var G__21226 = j;
var G__21227 = k;
return (target_fn.cljs$core$IFn$_invoke$arity$11 ? target_fn.cljs$core$IFn$_invoke$arity$11(G__21217,G__21218,G__21219,G__21220,G__21221,G__21222,G__21223,G__21224,G__21225,G__21226,G__21227) : target_fn.call(null,G__21217,G__21218,G__21219,G__21220,G__21221,G__21222,G__21223,G__21224,G__21225,G__21226,G__21227));
});
var G__21936__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__21228 = a;
var G__21229 = b;
var G__21230 = c;
var G__21231 = d;
var G__21232 = e;
var G__21233 = f;
var G__21234 = g;
var G__21235 = h;
var G__21236 = i;
var G__21237 = j;
var G__21238 = k;
var G__21239 = l;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12(G__21228,G__21229,G__21230,G__21231,G__21232,G__21233,G__21234,G__21235,G__21236,G__21237,G__21238,G__21239) : self__.dispatch_fn.call(null,G__21228,G__21229,G__21230,G__21231,G__21232,G__21233,G__21234,G__21235,G__21236,G__21237,G__21238,G__21239));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21240 = a;
var G__21241 = b;
var G__21242 = c;
var G__21243 = d;
var G__21244 = e;
var G__21245 = f;
var G__21246 = g;
var G__21247 = h;
var G__21248 = i;
var G__21249 = j;
var G__21250 = k;
var G__21251 = l;
return (target_fn.cljs$core$IFn$_invoke$arity$12 ? target_fn.cljs$core$IFn$_invoke$arity$12(G__21240,G__21241,G__21242,G__21243,G__21244,G__21245,G__21246,G__21247,G__21248,G__21249,G__21250,G__21251) : target_fn.call(null,G__21240,G__21241,G__21242,G__21243,G__21244,G__21245,G__21246,G__21247,G__21248,G__21249,G__21250,G__21251));
});
var G__21936__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__21252 = a;
var G__21253 = b;
var G__21254 = c;
var G__21255 = d;
var G__21256 = e;
var G__21257 = f;
var G__21258 = g;
var G__21259 = h;
var G__21260 = i;
var G__21261 = j;
var G__21262 = k;
var G__21263 = l;
var G__21264 = m;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13(G__21252,G__21253,G__21254,G__21255,G__21256,G__21257,G__21258,G__21259,G__21260,G__21261,G__21262,G__21263,G__21264) : self__.dispatch_fn.call(null,G__21252,G__21253,G__21254,G__21255,G__21256,G__21257,G__21258,G__21259,G__21260,G__21261,G__21262,G__21263,G__21264));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21265 = a;
var G__21266 = b;
var G__21267 = c;
var G__21268 = d;
var G__21269 = e;
var G__21270 = f;
var G__21271 = g;
var G__21272 = h;
var G__21273 = i;
var G__21274 = j;
var G__21275 = k;
var G__21276 = l;
var G__21277 = m;
return (target_fn.cljs$core$IFn$_invoke$arity$13 ? target_fn.cljs$core$IFn$_invoke$arity$13(G__21265,G__21266,G__21267,G__21268,G__21269,G__21270,G__21271,G__21272,G__21273,G__21274,G__21275,G__21276,G__21277) : target_fn.call(null,G__21265,G__21266,G__21267,G__21268,G__21269,G__21270,G__21271,G__21272,G__21273,G__21274,G__21275,G__21276,G__21277));
});
var G__21936__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__21278 = a;
var G__21279 = b;
var G__21280 = c;
var G__21281 = d;
var G__21282 = e;
var G__21283 = f;
var G__21284 = g;
var G__21285 = h;
var G__21286 = i;
var G__21287 = j;
var G__21288 = k;
var G__21289 = l;
var G__21290 = m;
var G__21291 = n;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14(G__21278,G__21279,G__21280,G__21281,G__21282,G__21283,G__21284,G__21285,G__21286,G__21287,G__21288,G__21289,G__21290,G__21291) : self__.dispatch_fn.call(null,G__21278,G__21279,G__21280,G__21281,G__21282,G__21283,G__21284,G__21285,G__21286,G__21287,G__21288,G__21289,G__21290,G__21291));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21292 = a;
var G__21293 = b;
var G__21294 = c;
var G__21295 = d;
var G__21296 = e;
var G__21297 = f;
var G__21298 = g;
var G__21299 = h;
var G__21300 = i;
var G__21301 = j;
var G__21302 = k;
var G__21303 = l;
var G__21304 = m;
var G__21305 = n;
return (target_fn.cljs$core$IFn$_invoke$arity$14 ? target_fn.cljs$core$IFn$_invoke$arity$14(G__21292,G__21293,G__21294,G__21295,G__21296,G__21297,G__21298,G__21299,G__21300,G__21301,G__21302,G__21303,G__21304,G__21305) : target_fn.call(null,G__21292,G__21293,G__21294,G__21295,G__21296,G__21297,G__21298,G__21299,G__21300,G__21301,G__21302,G__21303,G__21304,G__21305));
});
var G__21936__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__21306 = a;
var G__21307 = b;
var G__21308 = c;
var G__21309 = d;
var G__21310 = e;
var G__21311 = f;
var G__21312 = g;
var G__21313 = h;
var G__21314 = i;
var G__21315 = j;
var G__21316 = k;
var G__21317 = l;
var G__21318 = m;
var G__21319 = n;
var G__21320 = o;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15(G__21306,G__21307,G__21308,G__21309,G__21310,G__21311,G__21312,G__21313,G__21314,G__21315,G__21316,G__21317,G__21318,G__21319,G__21320) : self__.dispatch_fn.call(null,G__21306,G__21307,G__21308,G__21309,G__21310,G__21311,G__21312,G__21313,G__21314,G__21315,G__21316,G__21317,G__21318,G__21319,G__21320));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21321 = a;
var G__21322 = b;
var G__21323 = c;
var G__21324 = d;
var G__21325 = e;
var G__21326 = f;
var G__21327 = g;
var G__21328 = h;
var G__21329 = i;
var G__21330 = j;
var G__21331 = k;
var G__21332 = l;
var G__21333 = m;
var G__21334 = n;
var G__21335 = o;
return (target_fn.cljs$core$IFn$_invoke$arity$15 ? target_fn.cljs$core$IFn$_invoke$arity$15(G__21321,G__21322,G__21323,G__21324,G__21325,G__21326,G__21327,G__21328,G__21329,G__21330,G__21331,G__21332,G__21333,G__21334,G__21335) : target_fn.call(null,G__21321,G__21322,G__21323,G__21324,G__21325,G__21326,G__21327,G__21328,G__21329,G__21330,G__21331,G__21332,G__21333,G__21334,G__21335));
});
var G__21936__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__21336 = a;
var G__21337 = b;
var G__21338 = c;
var G__21339 = d;
var G__21340 = e;
var G__21341 = f;
var G__21342 = g;
var G__21343 = h;
var G__21344 = i;
var G__21345 = j;
var G__21346 = k;
var G__21347 = l;
var G__21348 = m;
var G__21349 = n;
var G__21350 = o;
var G__21351 = p;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16(G__21336,G__21337,G__21338,G__21339,G__21340,G__21341,G__21342,G__21343,G__21344,G__21345,G__21346,G__21347,G__21348,G__21349,G__21350,G__21351) : self__.dispatch_fn.call(null,G__21336,G__21337,G__21338,G__21339,G__21340,G__21341,G__21342,G__21343,G__21344,G__21345,G__21346,G__21347,G__21348,G__21349,G__21350,G__21351));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21352 = a;
var G__21353 = b;
var G__21354 = c;
var G__21355 = d;
var G__21356 = e;
var G__21357 = f;
var G__21358 = g;
var G__21359 = h;
var G__21360 = i;
var G__21361 = j;
var G__21362 = k;
var G__21363 = l;
var G__21364 = m;
var G__21365 = n;
var G__21366 = o;
var G__21367 = p;
return (target_fn.cljs$core$IFn$_invoke$arity$16 ? target_fn.cljs$core$IFn$_invoke$arity$16(G__21352,G__21353,G__21354,G__21355,G__21356,G__21357,G__21358,G__21359,G__21360,G__21361,G__21362,G__21363,G__21364,G__21365,G__21366,G__21367) : target_fn.call(null,G__21352,G__21353,G__21354,G__21355,G__21356,G__21357,G__21358,G__21359,G__21360,G__21361,G__21362,G__21363,G__21364,G__21365,G__21366,G__21367));
});
var G__21936__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__21368 = a;
var G__21369 = b;
var G__21370 = c;
var G__21371 = d;
var G__21372 = e;
var G__21373 = f;
var G__21374 = g;
var G__21375 = h;
var G__21376 = i;
var G__21377 = j;
var G__21378 = k;
var G__21379 = l;
var G__21380 = m;
var G__21381 = n;
var G__21382 = o;
var G__21383 = p;
var G__21384 = q;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17(G__21368,G__21369,G__21370,G__21371,G__21372,G__21373,G__21374,G__21375,G__21376,G__21377,G__21378,G__21379,G__21380,G__21381,G__21382,G__21383,G__21384) : self__.dispatch_fn.call(null,G__21368,G__21369,G__21370,G__21371,G__21372,G__21373,G__21374,G__21375,G__21376,G__21377,G__21378,G__21379,G__21380,G__21381,G__21382,G__21383,G__21384));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21385 = a;
var G__21386 = b;
var G__21387 = c;
var G__21388 = d;
var G__21389 = e;
var G__21390 = f;
var G__21391 = g;
var G__21392 = h;
var G__21393 = i;
var G__21394 = j;
var G__21395 = k;
var G__21396 = l;
var G__21397 = m;
var G__21398 = n;
var G__21399 = o;
var G__21400 = p;
var G__21401 = q;
return (target_fn.cljs$core$IFn$_invoke$arity$17 ? target_fn.cljs$core$IFn$_invoke$arity$17(G__21385,G__21386,G__21387,G__21388,G__21389,G__21390,G__21391,G__21392,G__21393,G__21394,G__21395,G__21396,G__21397,G__21398,G__21399,G__21400,G__21401) : target_fn.call(null,G__21385,G__21386,G__21387,G__21388,G__21389,G__21390,G__21391,G__21392,G__21393,G__21394,G__21395,G__21396,G__21397,G__21398,G__21399,G__21400,G__21401));
});
var G__21936__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__21402 = a;
var G__21403 = b;
var G__21404 = c;
var G__21405 = d;
var G__21406 = e;
var G__21407 = f;
var G__21408 = g;
var G__21409 = h;
var G__21410 = i;
var G__21411 = j;
var G__21412 = k;
var G__21413 = l;
var G__21414 = m;
var G__21415 = n;
var G__21416 = o;
var G__21417 = p;
var G__21418 = q;
var G__21419 = r;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18(G__21402,G__21403,G__21404,G__21405,G__21406,G__21407,G__21408,G__21409,G__21410,G__21411,G__21412,G__21413,G__21414,G__21415,G__21416,G__21417,G__21418,G__21419) : self__.dispatch_fn.call(null,G__21402,G__21403,G__21404,G__21405,G__21406,G__21407,G__21408,G__21409,G__21410,G__21411,G__21412,G__21413,G__21414,G__21415,G__21416,G__21417,G__21418,G__21419));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21420 = a;
var G__21421 = b;
var G__21422 = c;
var G__21423 = d;
var G__21424 = e;
var G__21425 = f;
var G__21426 = g;
var G__21427 = h;
var G__21428 = i;
var G__21429 = j;
var G__21430 = k;
var G__21431 = l;
var G__21432 = m;
var G__21433 = n;
var G__21434 = o;
var G__21435 = p;
var G__21436 = q;
var G__21437 = r;
return (target_fn.cljs$core$IFn$_invoke$arity$18 ? target_fn.cljs$core$IFn$_invoke$arity$18(G__21420,G__21421,G__21422,G__21423,G__21424,G__21425,G__21426,G__21427,G__21428,G__21429,G__21430,G__21431,G__21432,G__21433,G__21434,G__21435,G__21436,G__21437) : target_fn.call(null,G__21420,G__21421,G__21422,G__21423,G__21424,G__21425,G__21426,G__21427,G__21428,G__21429,G__21430,G__21431,G__21432,G__21433,G__21434,G__21435,G__21436,G__21437));
});
var G__21936__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__21438 = a;
var G__21439 = b;
var G__21440 = c;
var G__21441 = d;
var G__21442 = e;
var G__21443 = f;
var G__21444 = g;
var G__21445 = h;
var G__21446 = i;
var G__21447 = j;
var G__21448 = k;
var G__21449 = l;
var G__21450 = m;
var G__21451 = n;
var G__21452 = o;
var G__21453 = p;
var G__21454 = q;
var G__21455 = r;
var G__21456 = s;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19(G__21438,G__21439,G__21440,G__21441,G__21442,G__21443,G__21444,G__21445,G__21446,G__21447,G__21448,G__21449,G__21450,G__21451,G__21452,G__21453,G__21454,G__21455,G__21456) : self__.dispatch_fn.call(null,G__21438,G__21439,G__21440,G__21441,G__21442,G__21443,G__21444,G__21445,G__21446,G__21447,G__21448,G__21449,G__21450,G__21451,G__21452,G__21453,G__21454,G__21455,G__21456));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21457 = a;
var G__21458 = b;
var G__21459 = c;
var G__21460 = d;
var G__21461 = e;
var G__21462 = f;
var G__21463 = g;
var G__21464 = h;
var G__21465 = i;
var G__21466 = j;
var G__21467 = k;
var G__21468 = l;
var G__21469 = m;
var G__21470 = n;
var G__21471 = o;
var G__21472 = p;
var G__21473 = q;
var G__21474 = r;
var G__21475 = s;
return (target_fn.cljs$core$IFn$_invoke$arity$19 ? target_fn.cljs$core$IFn$_invoke$arity$19(G__21457,G__21458,G__21459,G__21460,G__21461,G__21462,G__21463,G__21464,G__21465,G__21466,G__21467,G__21468,G__21469,G__21470,G__21471,G__21472,G__21473,G__21474,G__21475) : target_fn.call(null,G__21457,G__21458,G__21459,G__21460,G__21461,G__21462,G__21463,G__21464,G__21465,G__21466,G__21467,G__21468,G__21469,G__21470,G__21471,G__21472,G__21473,G__21474,G__21475));
});
var G__21936__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (function (){var G__21476 = a;
var G__21477 = b;
var G__21478 = c;
var G__21479 = d;
var G__21480 = e;
var G__21481 = f;
var G__21482 = g;
var G__21483 = h;
var G__21484 = i;
var G__21485 = j;
var G__21486 = k;
var G__21487 = l;
var G__21488 = m;
var G__21489 = n;
var G__21490 = o;
var G__21491 = p;
var G__21492 = q;
var G__21493 = r;
var G__21494 = s;
var G__21495 = t;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20(G__21476,G__21477,G__21478,G__21479,G__21480,G__21481,G__21482,G__21483,G__21484,G__21485,G__21486,G__21487,G__21488,G__21489,G__21490,G__21491,G__21492,G__21493,G__21494,G__21495) : self__.dispatch_fn.call(null,G__21476,G__21477,G__21478,G__21479,G__21480,G__21481,G__21482,G__21483,G__21484,G__21485,G__21486,G__21487,G__21488,G__21489,G__21490,G__21491,G__21492,G__21493,G__21494,G__21495));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21496 = a;
var G__21497 = b;
var G__21498 = c;
var G__21499 = d;
var G__21500 = e;
var G__21501 = f;
var G__21502 = g;
var G__21503 = h;
var G__21504 = i;
var G__21505 = j;
var G__21506 = k;
var G__21507 = l;
var G__21508 = m;
var G__21509 = n;
var G__21510 = o;
var G__21511 = p;
var G__21512 = q;
var G__21513 = r;
var G__21514 = s;
var G__21515 = t;
return (target_fn.cljs$core$IFn$_invoke$arity$20 ? target_fn.cljs$core$IFn$_invoke$arity$20(G__21496,G__21497,G__21498,G__21499,G__21500,G__21501,G__21502,G__21503,G__21504,G__21505,G__21506,G__21507,G__21508,G__21509,G__21510,G__21511,G__21512,G__21513,G__21514,G__21515) : target_fn.call(null,G__21496,G__21497,G__21498,G__21499,G__21500,G__21501,G__21502,G__21503,G__21504,G__21505,G__21506,G__21507,G__21508,G__21509,G__21510,G__21511,G__21512,G__21513,G__21514,G__21515));
});
var G__21936__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
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
G__21936 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__21936__1.call(this,self__);
case 2:
return G__21936__2.call(this,self__,a);
case 3:
return G__21936__3.call(this,self__,a,b);
case 4:
return G__21936__4.call(this,self__,a,b,c);
case 5:
return G__21936__5.call(this,self__,a,b,c,d);
case 6:
return G__21936__6.call(this,self__,a,b,c,d,e);
case 7:
return G__21936__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__21936__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__21936__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__21936__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__21936__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__21936__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__21936__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__21936__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__21936__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__21936__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__21936__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__21936__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__21936__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__21936__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__21936__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__21936__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21936.cljs$core$IFn$_invoke$arity$1 = G__21936__1;
G__21936.cljs$core$IFn$_invoke$arity$2 = G__21936__2;
G__21936.cljs$core$IFn$_invoke$arity$3 = G__21936__3;
G__21936.cljs$core$IFn$_invoke$arity$4 = G__21936__4;
G__21936.cljs$core$IFn$_invoke$arity$5 = G__21936__5;
G__21936.cljs$core$IFn$_invoke$arity$6 = G__21936__6;
G__21936.cljs$core$IFn$_invoke$arity$7 = G__21936__7;
G__21936.cljs$core$IFn$_invoke$arity$8 = G__21936__8;
G__21936.cljs$core$IFn$_invoke$arity$9 = G__21936__9;
G__21936.cljs$core$IFn$_invoke$arity$10 = G__21936__10;
G__21936.cljs$core$IFn$_invoke$arity$11 = G__21936__11;
G__21936.cljs$core$IFn$_invoke$arity$12 = G__21936__12;
G__21936.cljs$core$IFn$_invoke$arity$13 = G__21936__13;
G__21936.cljs$core$IFn$_invoke$arity$14 = G__21936__14;
G__21936.cljs$core$IFn$_invoke$arity$15 = G__21936__15;
G__21936.cljs$core$IFn$_invoke$arity$16 = G__21936__16;
G__21936.cljs$core$IFn$_invoke$arity$17 = G__21936__17;
G__21936.cljs$core$IFn$_invoke$arity$18 = G__21936__18;
G__21936.cljs$core$IFn$_invoke$arity$19 = G__21936__19;
G__21936.cljs$core$IFn$_invoke$arity$20 = G__21936__20;
G__21936.cljs$core$IFn$_invoke$arity$21 = G__21936__21;
G__21936.cljs$core$IFn$_invoke$arity$22 = G__21936__22;
return G__21936;
})()
;

cljs.core.MultiFn.prototype.apply = (function (self__,args21088){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args21088)));
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
var dispatch_val = (function (){var G__21516 = a;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(G__21516) : self__.dispatch_fn.call(null,G__21516));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21517 = a;
return (target_fn.cljs$core$IFn$_invoke$arity$1 ? target_fn.cljs$core$IFn$_invoke$arity$1(G__21517) : target_fn.call(null,G__21517));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__21518 = a;
var G__21519 = b;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2(G__21518,G__21519) : self__.dispatch_fn.call(null,G__21518,G__21519));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21520 = a;
var G__21521 = b;
return (target_fn.cljs$core$IFn$_invoke$arity$2 ? target_fn.cljs$core$IFn$_invoke$arity$2(G__21520,G__21521) : target_fn.call(null,G__21520,G__21521));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__21522 = a;
var G__21523 = b;
var G__21524 = c;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3(G__21522,G__21523,G__21524) : self__.dispatch_fn.call(null,G__21522,G__21523,G__21524));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21525 = a;
var G__21526 = b;
var G__21527 = c;
return (target_fn.cljs$core$IFn$_invoke$arity$3 ? target_fn.cljs$core$IFn$_invoke$arity$3(G__21525,G__21526,G__21527) : target_fn.call(null,G__21525,G__21526,G__21527));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__21528 = a;
var G__21529 = b;
var G__21530 = c;
var G__21531 = d;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4(G__21528,G__21529,G__21530,G__21531) : self__.dispatch_fn.call(null,G__21528,G__21529,G__21530,G__21531));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21532 = a;
var G__21533 = b;
var G__21534 = c;
var G__21535 = d;
return (target_fn.cljs$core$IFn$_invoke$arity$4 ? target_fn.cljs$core$IFn$_invoke$arity$4(G__21532,G__21533,G__21534,G__21535) : target_fn.call(null,G__21532,G__21533,G__21534,G__21535));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__21536 = a;
var G__21537 = b;
var G__21538 = c;
var G__21539 = d;
var G__21540 = e;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5(G__21536,G__21537,G__21538,G__21539,G__21540) : self__.dispatch_fn.call(null,G__21536,G__21537,G__21538,G__21539,G__21540));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21541 = a;
var G__21542 = b;
var G__21543 = c;
var G__21544 = d;
var G__21545 = e;
return (target_fn.cljs$core$IFn$_invoke$arity$5 ? target_fn.cljs$core$IFn$_invoke$arity$5(G__21541,G__21542,G__21543,G__21544,G__21545) : target_fn.call(null,G__21541,G__21542,G__21543,G__21544,G__21545));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__21546 = a;
var G__21547 = b;
var G__21548 = c;
var G__21549 = d;
var G__21550 = e;
var G__21551 = f;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6(G__21546,G__21547,G__21548,G__21549,G__21550,G__21551) : self__.dispatch_fn.call(null,G__21546,G__21547,G__21548,G__21549,G__21550,G__21551));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21552 = a;
var G__21553 = b;
var G__21554 = c;
var G__21555 = d;
var G__21556 = e;
var G__21557 = f;
return (target_fn.cljs$core$IFn$_invoke$arity$6 ? target_fn.cljs$core$IFn$_invoke$arity$6(G__21552,G__21553,G__21554,G__21555,G__21556,G__21557) : target_fn.call(null,G__21552,G__21553,G__21554,G__21555,G__21556,G__21557));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__21558 = a;
var G__21559 = b;
var G__21560 = c;
var G__21561 = d;
var G__21562 = e;
var G__21563 = f;
var G__21564 = g;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7(G__21558,G__21559,G__21560,G__21561,G__21562,G__21563,G__21564) : self__.dispatch_fn.call(null,G__21558,G__21559,G__21560,G__21561,G__21562,G__21563,G__21564));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21565 = a;
var G__21566 = b;
var G__21567 = c;
var G__21568 = d;
var G__21569 = e;
var G__21570 = f;
var G__21571 = g;
return (target_fn.cljs$core$IFn$_invoke$arity$7 ? target_fn.cljs$core$IFn$_invoke$arity$7(G__21565,G__21566,G__21567,G__21568,G__21569,G__21570,G__21571) : target_fn.call(null,G__21565,G__21566,G__21567,G__21568,G__21569,G__21570,G__21571));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__21572 = a;
var G__21573 = b;
var G__21574 = c;
var G__21575 = d;
var G__21576 = e;
var G__21577 = f;
var G__21578 = g;
var G__21579 = h;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8(G__21572,G__21573,G__21574,G__21575,G__21576,G__21577,G__21578,G__21579) : self__.dispatch_fn.call(null,G__21572,G__21573,G__21574,G__21575,G__21576,G__21577,G__21578,G__21579));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21580 = a;
var G__21581 = b;
var G__21582 = c;
var G__21583 = d;
var G__21584 = e;
var G__21585 = f;
var G__21586 = g;
var G__21587 = h;
return (target_fn.cljs$core$IFn$_invoke$arity$8 ? target_fn.cljs$core$IFn$_invoke$arity$8(G__21580,G__21581,G__21582,G__21583,G__21584,G__21585,G__21586,G__21587) : target_fn.call(null,G__21580,G__21581,G__21582,G__21583,G__21584,G__21585,G__21586,G__21587));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__21588 = a;
var G__21589 = b;
var G__21590 = c;
var G__21591 = d;
var G__21592 = e;
var G__21593 = f;
var G__21594 = g;
var G__21595 = h;
var G__21596 = i;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9(G__21588,G__21589,G__21590,G__21591,G__21592,G__21593,G__21594,G__21595,G__21596) : self__.dispatch_fn.call(null,G__21588,G__21589,G__21590,G__21591,G__21592,G__21593,G__21594,G__21595,G__21596));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21597 = a;
var G__21598 = b;
var G__21599 = c;
var G__21600 = d;
var G__21601 = e;
var G__21602 = f;
var G__21603 = g;
var G__21604 = h;
var G__21605 = i;
return (target_fn.cljs$core$IFn$_invoke$arity$9 ? target_fn.cljs$core$IFn$_invoke$arity$9(G__21597,G__21598,G__21599,G__21600,G__21601,G__21602,G__21603,G__21604,G__21605) : target_fn.call(null,G__21597,G__21598,G__21599,G__21600,G__21601,G__21602,G__21603,G__21604,G__21605));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__21606 = a;
var G__21607 = b;
var G__21608 = c;
var G__21609 = d;
var G__21610 = e;
var G__21611 = f;
var G__21612 = g;
var G__21613 = h;
var G__21614 = i;
var G__21615 = j;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10(G__21606,G__21607,G__21608,G__21609,G__21610,G__21611,G__21612,G__21613,G__21614,G__21615) : self__.dispatch_fn.call(null,G__21606,G__21607,G__21608,G__21609,G__21610,G__21611,G__21612,G__21613,G__21614,G__21615));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21616 = a;
var G__21617 = b;
var G__21618 = c;
var G__21619 = d;
var G__21620 = e;
var G__21621 = f;
var G__21622 = g;
var G__21623 = h;
var G__21624 = i;
var G__21625 = j;
return (target_fn.cljs$core$IFn$_invoke$arity$10 ? target_fn.cljs$core$IFn$_invoke$arity$10(G__21616,G__21617,G__21618,G__21619,G__21620,G__21621,G__21622,G__21623,G__21624,G__21625) : target_fn.call(null,G__21616,G__21617,G__21618,G__21619,G__21620,G__21621,G__21622,G__21623,G__21624,G__21625));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__21626 = a;
var G__21627 = b;
var G__21628 = c;
var G__21629 = d;
var G__21630 = e;
var G__21631 = f;
var G__21632 = g;
var G__21633 = h;
var G__21634 = i;
var G__21635 = j;
var G__21636 = k;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11(G__21626,G__21627,G__21628,G__21629,G__21630,G__21631,G__21632,G__21633,G__21634,G__21635,G__21636) : self__.dispatch_fn.call(null,G__21626,G__21627,G__21628,G__21629,G__21630,G__21631,G__21632,G__21633,G__21634,G__21635,G__21636));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21637 = a;
var G__21638 = b;
var G__21639 = c;
var G__21640 = d;
var G__21641 = e;
var G__21642 = f;
var G__21643 = g;
var G__21644 = h;
var G__21645 = i;
var G__21646 = j;
var G__21647 = k;
return (target_fn.cljs$core$IFn$_invoke$arity$11 ? target_fn.cljs$core$IFn$_invoke$arity$11(G__21637,G__21638,G__21639,G__21640,G__21641,G__21642,G__21643,G__21644,G__21645,G__21646,G__21647) : target_fn.call(null,G__21637,G__21638,G__21639,G__21640,G__21641,G__21642,G__21643,G__21644,G__21645,G__21646,G__21647));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__21648 = a;
var G__21649 = b;
var G__21650 = c;
var G__21651 = d;
var G__21652 = e;
var G__21653 = f;
var G__21654 = g;
var G__21655 = h;
var G__21656 = i;
var G__21657 = j;
var G__21658 = k;
var G__21659 = l;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12(G__21648,G__21649,G__21650,G__21651,G__21652,G__21653,G__21654,G__21655,G__21656,G__21657,G__21658,G__21659) : self__.dispatch_fn.call(null,G__21648,G__21649,G__21650,G__21651,G__21652,G__21653,G__21654,G__21655,G__21656,G__21657,G__21658,G__21659));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21660 = a;
var G__21661 = b;
var G__21662 = c;
var G__21663 = d;
var G__21664 = e;
var G__21665 = f;
var G__21666 = g;
var G__21667 = h;
var G__21668 = i;
var G__21669 = j;
var G__21670 = k;
var G__21671 = l;
return (target_fn.cljs$core$IFn$_invoke$arity$12 ? target_fn.cljs$core$IFn$_invoke$arity$12(G__21660,G__21661,G__21662,G__21663,G__21664,G__21665,G__21666,G__21667,G__21668,G__21669,G__21670,G__21671) : target_fn.call(null,G__21660,G__21661,G__21662,G__21663,G__21664,G__21665,G__21666,G__21667,G__21668,G__21669,G__21670,G__21671));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__21672 = a;
var G__21673 = b;
var G__21674 = c;
var G__21675 = d;
var G__21676 = e;
var G__21677 = f;
var G__21678 = g;
var G__21679 = h;
var G__21680 = i;
var G__21681 = j;
var G__21682 = k;
var G__21683 = l;
var G__21684 = m;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13(G__21672,G__21673,G__21674,G__21675,G__21676,G__21677,G__21678,G__21679,G__21680,G__21681,G__21682,G__21683,G__21684) : self__.dispatch_fn.call(null,G__21672,G__21673,G__21674,G__21675,G__21676,G__21677,G__21678,G__21679,G__21680,G__21681,G__21682,G__21683,G__21684));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21685 = a;
var G__21686 = b;
var G__21687 = c;
var G__21688 = d;
var G__21689 = e;
var G__21690 = f;
var G__21691 = g;
var G__21692 = h;
var G__21693 = i;
var G__21694 = j;
var G__21695 = k;
var G__21696 = l;
var G__21697 = m;
return (target_fn.cljs$core$IFn$_invoke$arity$13 ? target_fn.cljs$core$IFn$_invoke$arity$13(G__21685,G__21686,G__21687,G__21688,G__21689,G__21690,G__21691,G__21692,G__21693,G__21694,G__21695,G__21696,G__21697) : target_fn.call(null,G__21685,G__21686,G__21687,G__21688,G__21689,G__21690,G__21691,G__21692,G__21693,G__21694,G__21695,G__21696,G__21697));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__21698 = a;
var G__21699 = b;
var G__21700 = c;
var G__21701 = d;
var G__21702 = e;
var G__21703 = f;
var G__21704 = g;
var G__21705 = h;
var G__21706 = i;
var G__21707 = j;
var G__21708 = k;
var G__21709 = l;
var G__21710 = m;
var G__21711 = n;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14(G__21698,G__21699,G__21700,G__21701,G__21702,G__21703,G__21704,G__21705,G__21706,G__21707,G__21708,G__21709,G__21710,G__21711) : self__.dispatch_fn.call(null,G__21698,G__21699,G__21700,G__21701,G__21702,G__21703,G__21704,G__21705,G__21706,G__21707,G__21708,G__21709,G__21710,G__21711));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21712 = a;
var G__21713 = b;
var G__21714 = c;
var G__21715 = d;
var G__21716 = e;
var G__21717 = f;
var G__21718 = g;
var G__21719 = h;
var G__21720 = i;
var G__21721 = j;
var G__21722 = k;
var G__21723 = l;
var G__21724 = m;
var G__21725 = n;
return (target_fn.cljs$core$IFn$_invoke$arity$14 ? target_fn.cljs$core$IFn$_invoke$arity$14(G__21712,G__21713,G__21714,G__21715,G__21716,G__21717,G__21718,G__21719,G__21720,G__21721,G__21722,G__21723,G__21724,G__21725) : target_fn.call(null,G__21712,G__21713,G__21714,G__21715,G__21716,G__21717,G__21718,G__21719,G__21720,G__21721,G__21722,G__21723,G__21724,G__21725));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__21726 = a;
var G__21727 = b;
var G__21728 = c;
var G__21729 = d;
var G__21730 = e;
var G__21731 = f;
var G__21732 = g;
var G__21733 = h;
var G__21734 = i;
var G__21735 = j;
var G__21736 = k;
var G__21737 = l;
var G__21738 = m;
var G__21739 = n;
var G__21740 = o;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15(G__21726,G__21727,G__21728,G__21729,G__21730,G__21731,G__21732,G__21733,G__21734,G__21735,G__21736,G__21737,G__21738,G__21739,G__21740) : self__.dispatch_fn.call(null,G__21726,G__21727,G__21728,G__21729,G__21730,G__21731,G__21732,G__21733,G__21734,G__21735,G__21736,G__21737,G__21738,G__21739,G__21740));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21741 = a;
var G__21742 = b;
var G__21743 = c;
var G__21744 = d;
var G__21745 = e;
var G__21746 = f;
var G__21747 = g;
var G__21748 = h;
var G__21749 = i;
var G__21750 = j;
var G__21751 = k;
var G__21752 = l;
var G__21753 = m;
var G__21754 = n;
var G__21755 = o;
return (target_fn.cljs$core$IFn$_invoke$arity$15 ? target_fn.cljs$core$IFn$_invoke$arity$15(G__21741,G__21742,G__21743,G__21744,G__21745,G__21746,G__21747,G__21748,G__21749,G__21750,G__21751,G__21752,G__21753,G__21754,G__21755) : target_fn.call(null,G__21741,G__21742,G__21743,G__21744,G__21745,G__21746,G__21747,G__21748,G__21749,G__21750,G__21751,G__21752,G__21753,G__21754,G__21755));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__21756 = a;
var G__21757 = b;
var G__21758 = c;
var G__21759 = d;
var G__21760 = e;
var G__21761 = f;
var G__21762 = g;
var G__21763 = h;
var G__21764 = i;
var G__21765 = j;
var G__21766 = k;
var G__21767 = l;
var G__21768 = m;
var G__21769 = n;
var G__21770 = o;
var G__21771 = p;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16(G__21756,G__21757,G__21758,G__21759,G__21760,G__21761,G__21762,G__21763,G__21764,G__21765,G__21766,G__21767,G__21768,G__21769,G__21770,G__21771) : self__.dispatch_fn.call(null,G__21756,G__21757,G__21758,G__21759,G__21760,G__21761,G__21762,G__21763,G__21764,G__21765,G__21766,G__21767,G__21768,G__21769,G__21770,G__21771));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21772 = a;
var G__21773 = b;
var G__21774 = c;
var G__21775 = d;
var G__21776 = e;
var G__21777 = f;
var G__21778 = g;
var G__21779 = h;
var G__21780 = i;
var G__21781 = j;
var G__21782 = k;
var G__21783 = l;
var G__21784 = m;
var G__21785 = n;
var G__21786 = o;
var G__21787 = p;
return (target_fn.cljs$core$IFn$_invoke$arity$16 ? target_fn.cljs$core$IFn$_invoke$arity$16(G__21772,G__21773,G__21774,G__21775,G__21776,G__21777,G__21778,G__21779,G__21780,G__21781,G__21782,G__21783,G__21784,G__21785,G__21786,G__21787) : target_fn.call(null,G__21772,G__21773,G__21774,G__21775,G__21776,G__21777,G__21778,G__21779,G__21780,G__21781,G__21782,G__21783,G__21784,G__21785,G__21786,G__21787));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__21788 = a;
var G__21789 = b;
var G__21790 = c;
var G__21791 = d;
var G__21792 = e;
var G__21793 = f;
var G__21794 = g;
var G__21795 = h;
var G__21796 = i;
var G__21797 = j;
var G__21798 = k;
var G__21799 = l;
var G__21800 = m;
var G__21801 = n;
var G__21802 = o;
var G__21803 = p;
var G__21804 = q;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17(G__21788,G__21789,G__21790,G__21791,G__21792,G__21793,G__21794,G__21795,G__21796,G__21797,G__21798,G__21799,G__21800,G__21801,G__21802,G__21803,G__21804) : self__.dispatch_fn.call(null,G__21788,G__21789,G__21790,G__21791,G__21792,G__21793,G__21794,G__21795,G__21796,G__21797,G__21798,G__21799,G__21800,G__21801,G__21802,G__21803,G__21804));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21805 = a;
var G__21806 = b;
var G__21807 = c;
var G__21808 = d;
var G__21809 = e;
var G__21810 = f;
var G__21811 = g;
var G__21812 = h;
var G__21813 = i;
var G__21814 = j;
var G__21815 = k;
var G__21816 = l;
var G__21817 = m;
var G__21818 = n;
var G__21819 = o;
var G__21820 = p;
var G__21821 = q;
return (target_fn.cljs$core$IFn$_invoke$arity$17 ? target_fn.cljs$core$IFn$_invoke$arity$17(G__21805,G__21806,G__21807,G__21808,G__21809,G__21810,G__21811,G__21812,G__21813,G__21814,G__21815,G__21816,G__21817,G__21818,G__21819,G__21820,G__21821) : target_fn.call(null,G__21805,G__21806,G__21807,G__21808,G__21809,G__21810,G__21811,G__21812,G__21813,G__21814,G__21815,G__21816,G__21817,G__21818,G__21819,G__21820,G__21821));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__21822 = a;
var G__21823 = b;
var G__21824 = c;
var G__21825 = d;
var G__21826 = e;
var G__21827 = f;
var G__21828 = g;
var G__21829 = h;
var G__21830 = i;
var G__21831 = j;
var G__21832 = k;
var G__21833 = l;
var G__21834 = m;
var G__21835 = n;
var G__21836 = o;
var G__21837 = p;
var G__21838 = q;
var G__21839 = r;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18(G__21822,G__21823,G__21824,G__21825,G__21826,G__21827,G__21828,G__21829,G__21830,G__21831,G__21832,G__21833,G__21834,G__21835,G__21836,G__21837,G__21838,G__21839) : self__.dispatch_fn.call(null,G__21822,G__21823,G__21824,G__21825,G__21826,G__21827,G__21828,G__21829,G__21830,G__21831,G__21832,G__21833,G__21834,G__21835,G__21836,G__21837,G__21838,G__21839));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21840 = a;
var G__21841 = b;
var G__21842 = c;
var G__21843 = d;
var G__21844 = e;
var G__21845 = f;
var G__21846 = g;
var G__21847 = h;
var G__21848 = i;
var G__21849 = j;
var G__21850 = k;
var G__21851 = l;
var G__21852 = m;
var G__21853 = n;
var G__21854 = o;
var G__21855 = p;
var G__21856 = q;
var G__21857 = r;
return (target_fn.cljs$core$IFn$_invoke$arity$18 ? target_fn.cljs$core$IFn$_invoke$arity$18(G__21840,G__21841,G__21842,G__21843,G__21844,G__21845,G__21846,G__21847,G__21848,G__21849,G__21850,G__21851,G__21852,G__21853,G__21854,G__21855,G__21856,G__21857) : target_fn.call(null,G__21840,G__21841,G__21842,G__21843,G__21844,G__21845,G__21846,G__21847,G__21848,G__21849,G__21850,G__21851,G__21852,G__21853,G__21854,G__21855,G__21856,G__21857));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__21858 = a;
var G__21859 = b;
var G__21860 = c;
var G__21861 = d;
var G__21862 = e;
var G__21863 = f;
var G__21864 = g;
var G__21865 = h;
var G__21866 = i;
var G__21867 = j;
var G__21868 = k;
var G__21869 = l;
var G__21870 = m;
var G__21871 = n;
var G__21872 = o;
var G__21873 = p;
var G__21874 = q;
var G__21875 = r;
var G__21876 = s;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19(G__21858,G__21859,G__21860,G__21861,G__21862,G__21863,G__21864,G__21865,G__21866,G__21867,G__21868,G__21869,G__21870,G__21871,G__21872,G__21873,G__21874,G__21875,G__21876) : self__.dispatch_fn.call(null,G__21858,G__21859,G__21860,G__21861,G__21862,G__21863,G__21864,G__21865,G__21866,G__21867,G__21868,G__21869,G__21870,G__21871,G__21872,G__21873,G__21874,G__21875,G__21876));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21877 = a;
var G__21878 = b;
var G__21879 = c;
var G__21880 = d;
var G__21881 = e;
var G__21882 = f;
var G__21883 = g;
var G__21884 = h;
var G__21885 = i;
var G__21886 = j;
var G__21887 = k;
var G__21888 = l;
var G__21889 = m;
var G__21890 = n;
var G__21891 = o;
var G__21892 = p;
var G__21893 = q;
var G__21894 = r;
var G__21895 = s;
return (target_fn.cljs$core$IFn$_invoke$arity$19 ? target_fn.cljs$core$IFn$_invoke$arity$19(G__21877,G__21878,G__21879,G__21880,G__21881,G__21882,G__21883,G__21884,G__21885,G__21886,G__21887,G__21888,G__21889,G__21890,G__21891,G__21892,G__21893,G__21894,G__21895) : target_fn.call(null,G__21877,G__21878,G__21879,G__21880,G__21881,G__21882,G__21883,G__21884,G__21885,G__21886,G__21887,G__21888,G__21889,G__21890,G__21891,G__21892,G__21893,G__21894,G__21895));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var mf = this;
var dispatch_val = (function (){var G__21896 = a;
var G__21897 = b;
var G__21898 = c;
var G__21899 = d;
var G__21900 = e;
var G__21901 = f;
var G__21902 = g;
var G__21903 = h;
var G__21904 = i;
var G__21905 = j;
var G__21906 = k;
var G__21907 = l;
var G__21908 = m;
var G__21909 = n;
var G__21910 = o;
var G__21911 = p;
var G__21912 = q;
var G__21913 = r;
var G__21914 = s;
var G__21915 = t;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20(G__21896,G__21897,G__21898,G__21899,G__21900,G__21901,G__21902,G__21903,G__21904,G__21905,G__21906,G__21907,G__21908,G__21909,G__21910,G__21911,G__21912,G__21913,G__21914,G__21915) : self__.dispatch_fn.call(null,G__21896,G__21897,G__21898,G__21899,G__21900,G__21901,G__21902,G__21903,G__21904,G__21905,G__21906,G__21907,G__21908,G__21909,G__21910,G__21911,G__21912,G__21913,G__21914,G__21915));
})();
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

var G__21916 = a;
var G__21917 = b;
var G__21918 = c;
var G__21919 = d;
var G__21920 = e;
var G__21921 = f;
var G__21922 = g;
var G__21923 = h;
var G__21924 = i;
var G__21925 = j;
var G__21926 = k;
var G__21927 = l;
var G__21928 = m;
var G__21929 = n;
var G__21930 = o;
var G__21931 = p;
var G__21932 = q;
var G__21933 = r;
var G__21934 = s;
var G__21935 = t;
return (target_fn.cljs$core$IFn$_invoke$arity$20 ? target_fn.cljs$core$IFn$_invoke$arity$20(G__21916,G__21917,G__21918,G__21919,G__21920,G__21921,G__21922,G__21923,G__21924,G__21925,G__21926,G__21927,G__21928,G__21929,G__21930,G__21931,G__21932,G__21933,G__21934,G__21935) : target_fn.call(null,G__21916,G__21917,G__21918,G__21919,G__21920,G__21921,G__21922,G__21923,G__21924,G__21925,G__21926,G__21927,G__21928,G__21929,G__21930,G__21931,G__21932,G__21933,G__21934,G__21935));
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

cljs.core.MultiFn.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/MultiFn");
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
var G__21937 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([this$__$1], 0));
return goog.string.hashCode(G__21937);
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

cljs.core.UUID.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/UUID");
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

cljs.core.ExceptionInfo.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write(writer__4218__auto__,"cljs.core/ExceptionInfo");
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
if(cljs.core.truth_((function (){var G__21942 = x;
var G__21943 = y;
return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(G__21942,G__21943) : pred.call(null,G__21942,G__21943));
})())){
return (-1);
} else {
if(cljs.core.truth_((function (){var G__21944 = y;
var G__21945 = x;
return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(G__21944,G__21945) : pred.call(null,G__21944,G__21945));
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
