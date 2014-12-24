// Compiled by ClojureScript 0.0-2511
goog.provide('no.en.core');
goog.require('cljs.core');
goog.require('goog.crypt.base64');
goog.require('cljs.reader');
goog.require('clojure.string');
no.en.core.port_number = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$58,(80),cljs.core.constant$keyword$59,(443),cljs.core.constant$keyword$60,(3306),cljs.core.constant$keyword$61,(5432),cljs.core.constant$keyword$62,(5672)], null);
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
var G__26636 = bytes;
var G__26637 = false;
return goog.crypt.base64.encodeString(G__26636,G__26637);
} else {
return null;
}
});
/**
* Returns `s` as a Base64 decoded string.
*/
no.en.core.base64_decode = (function base64_decode(s){
if(cljs.core.truth_(s)){
var G__26640 = s;
var G__26641 = false;
return goog.crypt.base64.decodeString(G__26640,G__26641);
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
var url_encode__delegate = function (s,p__26642){
var vec__26645 = p__26642;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26645,(0),null);
if(cljs.core.truth_(s)){
return clojure.string.replace((function (){var G__26646 = [cljs.core.str(s)].join('');
return encodeURIComponent(G__26646);
})(),"*","%2A");
} else {
return null;
}
};
var url_encode = function (s,var_args){
var p__26642 = null;
if (arguments.length > 1) {
  p__26642 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return url_encode__delegate.call(this,s,p__26642);};
url_encode.cljs$lang$maxFixedArity = 1;
url_encode.cljs$lang$applyTo = (function (arglist__26647){
var s = cljs.core.first(arglist__26647);
var p__26642 = cljs.core.rest(arglist__26647);
return url_encode__delegate(s,p__26642);
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
var url_decode__delegate = function (s,p__26648){
var vec__26651 = p__26648;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26651,(0),null);
if(cljs.core.truth_(s)){
var G__26652 = s;
return decodeURIComponent(G__26652);
} else {
return null;
}
};
var url_decode = function (s,var_args){
var p__26648 = null;
if (arguments.length > 1) {
  p__26648 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return url_decode__delegate.call(this,s,p__26648);};
url_decode.cljs$lang$maxFixedArity = 1;
url_decode.cljs$lang$applyTo = (function (arglist__26653){
var s = cljs.core.first(arglist__26653);
var p__26648 = cljs.core.rest(arglist__26653);
return url_decode__delegate(s,p__26648);
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
var G__26656 = clojure.string.upper_case(unit);
switch (G__26656) {
default:
var G__26657 = unit;
switch (G__26657) {
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
var number = (function (){var G__26662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(1));
return (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(G__26662) : parse_fn.call(null,G__26662));
})();
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(3));
if(cljs.core.not((function (){var G__26663 = number;
return isNaN(G__26663);
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
return no.en.core.parse_number(s,(function (p1__26664_SHARP_){
var G__26666 = p1__26664_SHARP_;
return parseInt(G__26666);
}));
});
/**
* Parse `s` as a long number.
*/
no.en.core.parse_long = (function parse_long(s){
return no.en.core.parse_number(s,(function (p1__26667_SHARP_){
var G__26669 = p1__26667_SHARP_;
return parseInt(G__26669);
}));
});
/**
* Parse `s` as a double number.
*/
no.en.core.parse_double = (function parse_double(s){
return no.en.core.parse_number(s,(function (p1__26670_SHARP_){
var G__26672 = p1__26670_SHARP_;
return parseFloat(G__26672);
}));
});
/**
* Parse `s` as a float number.
*/
no.en.core.parse_float = (function parse_float(s){
return no.en.core.parse_number(s,(function (p1__26673_SHARP_){
var G__26675 = p1__26673_SHARP_;
return parseFloat(G__26675);
}));
});
/**
* Format the map `m` into a query parameter string.
*/
no.en.core.format_query_params = (function format_query_params(m){
var params = clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26678_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("=",p1__26678_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26677_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[no.en.core.url_encode(cljs.core.name(cljs.core.first(p1__26677_SHARP_))),no.en.core.url_encode(cljs.core.second(p1__26677_SHARP_))],null));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__26676_SHARP_){
return clojure.string.blank_QMARK_([cljs.core.str(cljs.core.second(p1__26676_SHARP_))].join(''));
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
var query_params = cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1(m);
return [cljs.core.str((cljs.core.truth_(cljs.core.constant$keyword$64.cljs$core$IFn$_invoke$arity$1(m))?[cljs.core.str(cljs.core.name(cljs.core.constant$keyword$64.cljs$core$IFn$_invoke$arity$1(m))),cljs.core.str("://")].join(''):null)),cljs.core.str((function (){var map__26681 = m;
var map__26681__$1 = ((cljs.core.seq_QMARK_(map__26681))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26681):map__26681);
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26681__$1,cljs.core.constant$keyword$65);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26681__$1,cljs.core.constant$keyword$66);
if(cljs.core.truth_(user)){
return [cljs.core.str((cljs.core.truth_(user)?user:null)),cljs.core.str((cljs.core.truth_(password)?[cljs.core.str(":"),cljs.core.str(password)].join(''):null)),cljs.core.str("@")].join('');
} else {
return null;
}
})()),cljs.core.str(cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(m)),cljs.core.str((function (){var temp__4124__auto__ = cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4124__auto__)){
var port = temp__4124__auto__;
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(port,(function (){var G__26682 = cljs.core.constant$keyword$64.cljs$core$IFn$_invoke$arity$1(m);
return (no.en.core.port_number.cljs$core$IFn$_invoke$arity$1 ? no.en.core.port_number.cljs$core$IFn$_invoke$arity$1(G__26682) : no.en.core.port_number.call(null,G__26682));
})()))){
return [cljs.core.str(":"),cljs.core.str(port)].join('');
} else {
return null;
}
} else {
return null;
}
})()),cljs.core.str(((((cljs.core.constant$keyword$69.cljs$core$IFn$_invoke$arity$1(m) == null)) && (!(cljs.core.empty_QMARK_(query_params))))?"/":cljs.core.constant$keyword$69.cljs$core$IFn$_invoke$arity$1(m))),cljs.core.str(((!(cljs.core.empty_QMARK_(query_params)))?[cljs.core.str("?"),cljs.core.str(no.en.core.format_query_params(query_params))].join(''):null)),cljs.core.str(((cljs.core.not(clojure.string.blank_QMARK_(cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(m))))?[cljs.core.str("#"),cljs.core.str(cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(m))].join(''):null))].join('');
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__26685_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(cljs.core.first(p1__26685_SHARP_))),no.en.core.url_decode(cljs.core.second(p1__26685_SHARP_))],null));
}),cljs.core.array_seq([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26684_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(p1__26684_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26683_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__26683_SHARP_,/=/);
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
return no.en.core.compact_map(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$65,cljs.core.constant$keyword$70,cljs.core.constant$keyword$68,cljs.core.constant$keyword$63,cljs.core.constant$keyword$69,cljs.core.constant$keyword$67,cljs.core.constant$keyword$71,cljs.core.constant$keyword$66,cljs.core.constant$keyword$64],[cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(14)),(function (){var or__3630__auto__ = no.en.core.parse_integer(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(8)));
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
var G__26687 = scheme;
return (no.en.core.port_number.cljs$core$IFn$_invoke$arity$1 ? no.en.core.port_number.cljs$core$IFn$_invoke$arity$1(G__26687) : no.en.core.port_number.call(null,G__26687));
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
}catch (e26690){if((e26690 instanceof Error)){
var e = e26690;
if((n__$1 === (0))){
throw e;
} else {
return null;
}
} else {
throw e26690;

}
}})();
if(cljs.core.truth_(temp__4124__auto__)){
var result = temp__4124__auto__;
var G__26691 = (0);
return (result.cljs$core$IFn$_invoke$arity$1 ? result.cljs$core$IFn$_invoke$arity$1(G__26691) : result.call(null,G__26691));
} else {
var G__26692 = (n__$1 - (1));
n__$1 = G__26692;
continue;
}
break;
}
});
