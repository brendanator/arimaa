// Compiled by ClojureScript 0.0-2511
goog.provide('no.en.core');
goog.require('cljs.core');
goog.require('goog.crypt.base64');
goog.require('cljs.reader');
goog.require('clojure.string');
no.en.core.port_number = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$70,(80),cljs.core.constant$keyword$71,(443),cljs.core.constant$keyword$72,(3306),cljs.core.constant$keyword$73,(5432),cljs.core.constant$keyword$74,(5672)], null);
no.en.core.url_regex = /([^:]+):\/\/(([^:]+):([^@]+)@)?(([^:\/]+)(:([0-9]+))?((\/[^?]*)(\?([^#]*))?)?)(\#(.*))?/;
/**
* Split the string `s` by the regex `pattern`.
*/
no.en.core.split_by_regex = (function split_by_regex(s,pattern){
if(cljs.core.sequential_QMARK_(s)){
return s;
} else {
if(cljs.core.not(clojure.string.blank_QMARK_(s))){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,pattern);
} else {
return null;
}
}
});
/**
* Split the string `s` by comma.
*/
no.en.core.split_by_comma = (function split_by_comma(s){
return no.en.core.split_by_regex(s,/\s*,\s*/);
});
/**
* Returns `bytes` as an UTF-8 encoded string.
*/
no.en.core.utf8_string = (function utf8_string(bytes){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("utf8-string not implemented yet",bytes);
});
/**
* Returns `s` as a Base64 encoded string.
*/
no.en.core.base64_encode = (function base64_encode(bytes){
if(cljs.core.truth_(bytes)){
var G__23860 = bytes;
var G__23861 = false;
return goog.crypt.base64.encodeString(G__23860,G__23861);
} else {
return null;
}
});
/**
* Returns `s` as a Base64 decoded string.
*/
no.en.core.base64_decode = (function base64_decode(s){
if(cljs.core.truth_(s)){
var G__23864 = s;
var G__23865 = false;
return goog.crypt.base64.decodeString(G__23864,G__23865);
} else {
return null;
}
});
/**
* Removes all map entries where the value of the entry is empty.
*/
no.en.core.compact_map = (function compact_map(m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,k){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);
if(((v == null)) || (((cljs.core.map_QMARK_(v)) || (cljs.core.sequential_QMARK_(v))) && (cljs.core.empty_QMARK_(v)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),m,cljs.core.keys(m));
});
/**
* Returns `s` as an URL encoded string.
* @param {...*} var_args
*/
no.en.core.url_encode = (function() { 
var url_encode__delegate = function (s,p__23866){
var vec__23869 = p__23866;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23869,(0),null);
if(cljs.core.truth_(s)){
return clojure.string.replace((function (){var G__23870 = [cljs.core.str(s)].join('');
return encodeURIComponent(G__23870);
})(),"*","%2A");
} else {
return null;
}
};
var url_encode = function (s,var_args){
var p__23866 = null;
if (arguments.length > 1) {
  p__23866 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return url_encode__delegate.call(this,s,p__23866);};
url_encode.cljs$lang$maxFixedArity = 1;
url_encode.cljs$lang$applyTo = (function (arglist__23871){
var s = cljs.core.first(arglist__23871);
var p__23866 = cljs.core.rest(arglist__23871);
return url_encode__delegate(s,p__23866);
});
url_encode.cljs$core$IFn$_invoke$arity$variadic = url_encode__delegate;
return url_encode;
})()
;
/**
* Returns `s` as an URL decoded string.
* @param {...*} var_args
*/
no.en.core.url_decode = (function() { 
var url_decode__delegate = function (s,p__23872){
var vec__23875 = p__23872;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23875,(0),null);
if(cljs.core.truth_(s)){
var G__23876 = s;
return decodeURIComponent(G__23876);
} else {
return null;
}
};
var url_decode = function (s,var_args){
var p__23872 = null;
if (arguments.length > 1) {
  p__23872 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return url_decode__delegate.call(this,s,p__23872);};
url_decode.cljs$lang$maxFixedArity = 1;
url_decode.cljs$lang$applyTo = (function (arglist__23877){
var s = cljs.core.first(arglist__23877);
var p__23872 = cljs.core.rest(arglist__23877);
return url_decode__delegate(s,p__23872);
});
url_decode.cljs$core$IFn$_invoke$arity$variadic = url_decode__delegate;
return url_decode;
})()
;
no.en.core.pow = (function pow(n,x){
return Math.pow(n,x);
});
no.en.core.byte_scale = cljs.core.PersistentHashMap.fromArrays(["T","K","G","M","Y","Z","E","B","P"],[no.en.core.pow((1024),(4)),no.en.core.pow((1024),(1)),no.en.core.pow((1024),(3)),no.en.core.pow((1024),(2)),no.en.core.pow((1024),(8)),no.en.core.pow((1024),(7)),no.en.core.pow((1024),(6)),no.en.core.pow((1024),(0)),no.en.core.pow((1024),(5))]);
no.en.core.apply_unit = (function apply_unit(number,unit){
if(typeof unit === 'string'){
var G__23880 = clojure.string.upper_case(unit);
switch (G__23880) {
default:
var G__23881 = unit;
switch (G__23881) {
case "M":
return (number * (1000000));

break;
case "B":
return (number * (1000000000));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(unit)].join('')));

}

}
} else {
return number;
}
});
no.en.core.parse_number = (function parse_number(s,parse_fn){
var temp__4124__auto__ = cljs.core.re_matches(/\s*([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)(M|B)?.*/,[cljs.core.str(s)].join(''));
if(cljs.core.truth_(temp__4124__auto__)){
var matches = temp__4124__auto__;
var number = (function (){var G__23886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(1));
return (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(G__23886) : parse_fn.call(null,G__23886));
})();
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(3));
if(cljs.core.not((function (){var G__23887 = number;
return isNaN(G__23887);
})())){
return no.en.core.apply_unit(number,unit);
} else {
return null;
}
} else {
return null;
}
});
no.en.core.parse_bytes = (function parse_bytes(s){
var temp__4124__auto__ = cljs.core.re_matches(/\s*([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)(B|K|M|G|T|P|E|Z|Y)?.*/,[cljs.core.str(s)].join(''));
if(cljs.core.truth_(temp__4124__auto__)){
var matches = temp__4124__auto__;
var number = cljs.reader.read_string(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(1)));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(3));
return cljs.core.long$((cljs.core.long$(cljs.reader.read_string([cljs.core.str(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(1)))].join(''))) * cljs.core.get.cljs$core$IFn$_invoke$arity$3(no.en.core.byte_scale,clojure.string.upper_case((function (){var or__3630__auto__ = unit;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return "";
}
})()),(1))));
} else {
return null;
}
});
/**
* Parse `s` as a integer number.
*/
no.en.core.parse_integer = (function parse_integer(s){
return no.en.core.parse_number(s,(function (p1__23888_SHARP_){
var G__23890 = p1__23888_SHARP_;
return parseInt(G__23890);
}));
});
/**
* Parse `s` as a long number.
*/
no.en.core.parse_long = (function parse_long(s){
return no.en.core.parse_number(s,(function (p1__23891_SHARP_){
var G__23893 = p1__23891_SHARP_;
return parseInt(G__23893);
}));
});
/**
* Parse `s` as a double number.
*/
no.en.core.parse_double = (function parse_double(s){
return no.en.core.parse_number(s,(function (p1__23894_SHARP_){
var G__23896 = p1__23894_SHARP_;
return parseFloat(G__23896);
}));
});
/**
* Parse `s` as a float number.
*/
no.en.core.parse_float = (function parse_float(s){
return no.en.core.parse_number(s,(function (p1__23897_SHARP_){
var G__23899 = p1__23897_SHARP_;
return parseFloat(G__23899);
}));
});
/**
* Format the map `m` into a query parameter string.
*/
no.en.core.format_query_params = (function format_query_params(m){
var params = clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23902_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("=",p1__23902_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23901_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[no.en.core.url_encode(cljs.core.name(cljs.core.first(p1__23901_SHARP_))),no.en.core.url_encode(cljs.core.second(p1__23901_SHARP_))],null));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__23900_SHARP_){
return clojure.string.blank_QMARK_([cljs.core.str(cljs.core.second(p1__23900_SHARP_))].join(''));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.seq(m))))));
if(cljs.core.not(clojure.string.blank_QMARK_(params))){
return params;
} else {
return null;
}
});
/**
* Format the Ring map as an url.
*/
no.en.core.format_url = (function format_url(m){
if(!(cljs.core.empty_QMARK_(m))){
var query_params = cljs.core.constant$keyword$75.cljs$core$IFn$_invoke$arity$1(m);
return [cljs.core.str((cljs.core.truth_(cljs.core.constant$keyword$76.cljs$core$IFn$_invoke$arity$1(m))?[cljs.core.str(cljs.core.name(cljs.core.constant$keyword$76.cljs$core$IFn$_invoke$arity$1(m))),cljs.core.str("://")].join(''):null)),cljs.core.str((function (){var map__23905 = m;
var map__23905__$1 = ((cljs.core.seq_QMARK_(map__23905))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23905):map__23905);
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23905__$1,cljs.core.constant$keyword$77);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23905__$1,cljs.core.constant$keyword$78);
if(cljs.core.truth_(user)){
return [cljs.core.str((cljs.core.truth_(user)?user:null)),cljs.core.str((cljs.core.truth_(password)?[cljs.core.str(":"),cljs.core.str(password)].join(''):null)),cljs.core.str("@")].join('');
} else {
return null;
}
})()),cljs.core.str(cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(m)),cljs.core.str((function (){var temp__4124__auto__ = cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4124__auto__)){
var port = temp__4124__auto__;
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(port,(function (){var G__23906 = cljs.core.constant$keyword$76.cljs$core$IFn$_invoke$arity$1(m);
return (no.en.core.port_number.cljs$core$IFn$_invoke$arity$1 ? no.en.core.port_number.cljs$core$IFn$_invoke$arity$1(G__23906) : no.en.core.port_number.call(null,G__23906));
})()))){
return [cljs.core.str(":"),cljs.core.str(port)].join('');
} else {
return null;
}
} else {
return null;
}
})()),cljs.core.str(((((cljs.core.constant$keyword$81.cljs$core$IFn$_invoke$arity$1(m) == null)) && (!(cljs.core.empty_QMARK_(query_params))))?"/":cljs.core.constant$keyword$81.cljs$core$IFn$_invoke$arity$1(m))),cljs.core.str(((!(cljs.core.empty_QMARK_(query_params)))?[cljs.core.str("?"),cljs.core.str(no.en.core.format_query_params(query_params))].join(''):null)),cljs.core.str(((cljs.core.not(clojure.string.blank_QMARK_(cljs.core.constant$keyword$82.cljs$core$IFn$_invoke$arity$1(m))))?[cljs.core.str("#"),cljs.core.str(cljs.core.constant$keyword$82.cljs$core$IFn$_invoke$arity$1(m))].join(''):null))].join('');
} else {
return null;
}
});
/**
* Parse `s` as a percentage.
*/
no.en.core.parse_percent = (function parse_percent(s){
return no.en.core.parse_double(clojure.string.replace(s,"%",""));
});
/**
* Quote the special characters in `s` that are used in regular expressions.
*/
no.en.core.pattern_quote = (function pattern_quote(s){
return clojure.string.replace(cljs.core.name(s),/([\[\]\^\$\|\(\)\\\+\*\?\{\}\=\!.])/,"\\\\$1");
});
/**
* Returns the first string that separates the components in `s`.
*/
no.en.core.separator = (function separator(s){
var temp__4124__auto__ = cljs.core.re_matches(/([a-z0-9_-]+)([^a-z0-9_-]+).*/i,s);
if(cljs.core.truth_(temp__4124__auto__)){
var matches = temp__4124__auto__;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(2));
} else {
return null;
}
});
/**
* Parse the query parameter string `s` and return a map.
*/
no.en.core.parse_query_params = (function parse_query_params(s){
if(cljs.core.truth_(s)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__23909_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(cljs.core.first(p1__23909_SHARP_))),no.en.core.url_decode(cljs.core.second(p1__23909_SHARP_))],null));
}),cljs.core.array_seq([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__23908_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(p1__23908_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23907_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__23907_SHARP_,/=/);
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str(s)].join(''),/&/)))], 0)));
} else {
return null;
}
});
/**
* Parse the url `s` and return a Ring compatible map.
*/
no.en.core.parse_url = (function parse_url(s){
var temp__4124__auto__ = cljs.core.re_matches(no.en.core.url_regex,[cljs.core.str(s)].join(''));
if(cljs.core.truth_(temp__4124__auto__)){
var matches = temp__4124__auto__;
var scheme = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(1)));
return no.en.core.compact_map(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$77,cljs.core.constant$keyword$82,cljs.core.constant$keyword$80,cljs.core.constant$keyword$75,cljs.core.constant$keyword$81,cljs.core.constant$keyword$79,cljs.core.constant$keyword$83,cljs.core.constant$keyword$78,cljs.core.constant$keyword$76],[cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(14)),(function (){var or__3630__auto__ = no.en.core.parse_integer(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(8)));
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
var G__23911 = scheme;
return (no.en.core.port_number.cljs$core$IFn$_invoke$arity$1 ? no.en.core.port_number.cljs$core$IFn$_invoke$arity$1(G__23911) : no.en.core.port_number.call(null,G__23911));
}
})(),no.en.core.parse_query_params(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(12))),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(3)),scheme]));
} else {
return null;
}
});
/**
* Executes thunk. If an exception is thrown, will retry. At most n retries
* are done. If still some exception is thrown it is bubbled upwards in
* the call chain.
*/
no.en.core.with_retries_STAR_ = (function with_retries_STAR_(n,thunk){
var n__$1 = n;
while(true){
var temp__4124__auto__ = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return (thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));
})()], null);
}catch (e23914){if((e23914 instanceof Error)){
var e = e23914;
if((n__$1 === (0))){
throw e;
} else {
return null;
}
} else {
throw e23914;

}
}})();
if(cljs.core.truth_(temp__4124__auto__)){
var result = temp__4124__auto__;
var G__23915 = (0);
return (result.cljs$core$IFn$_invoke$arity$1 ? result.cljs$core$IFn$_invoke$arity$1(G__23915) : result.call(null,G__23915));
} else {
var G__23916 = (n__$1 - (1));
n__$1 = G__23916;
continue;
}
break;
}
});
