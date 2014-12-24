// Compiled by ClojureScript 0.0-2511
goog.provide('no.en.core');
goog.require('cljs.core');
goog.require('goog.crypt.base64');
goog.require('cljs.reader');
goog.require('clojure.string');
no.en.core.port_number = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$23,(80),cljs.core.constant$keyword$24,(443),cljs.core.constant$keyword$25,(3306),cljs.core.constant$keyword$26,(5432),cljs.core.constant$keyword$27,(5672)], null);
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
var G__22662 = bytes;
var G__22663 = false;
return goog.crypt.base64.encodeString(G__22662,G__22663);
} else {
return null;
}
});
/**
* Returns `s` as a Base64 decoded string.
*/
no.en.core.base64_decode = (function base64_decode(s){
if(cljs.core.truth_(s)){
var G__22666 = s;
var G__22667 = false;
return goog.crypt.base64.decodeString(G__22666,G__22667);
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
var url_encode__delegate = function (s,p__22668){
var vec__22671 = p__22668;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22671,(0),null);
if(cljs.core.truth_(s)){
return clojure.string.replace((function (){var G__22672 = [cljs.core.str(s)].join('');
return encodeURIComponent(G__22672);
})(),"*","%2A");
} else {
return null;
}
};
var url_encode = function (s,var_args){
var p__22668 = null;
if (arguments.length > 1) {
  p__22668 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return url_encode__delegate.call(this,s,p__22668);};
url_encode.cljs$lang$maxFixedArity = 1;
url_encode.cljs$lang$applyTo = (function (arglist__22673){
var s = cljs.core.first(arglist__22673);
var p__22668 = cljs.core.rest(arglist__22673);
return url_encode__delegate(s,p__22668);
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
var url_decode__delegate = function (s,p__22674){
var vec__22677 = p__22674;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22677,(0),null);
if(cljs.core.truth_(s)){
var G__22678 = s;
return decodeURIComponent(G__22678);
} else {
return null;
}
};
var url_decode = function (s,var_args){
var p__22674 = null;
if (arguments.length > 1) {
  p__22674 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return url_decode__delegate.call(this,s,p__22674);};
url_decode.cljs$lang$maxFixedArity = 1;
url_decode.cljs$lang$applyTo = (function (arglist__22679){
var s = cljs.core.first(arglist__22679);
var p__22674 = cljs.core.rest(arglist__22679);
return url_decode__delegate(s,p__22674);
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
var G__22682 = clojure.string.upper_case(unit);
switch (G__22682) {
default:
var G__22683 = unit;
switch (G__22683) {
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
var number = (function (){var G__22688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(1));
return (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(G__22688) : parse_fn.call(null,G__22688));
})();
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(3));
if(cljs.core.not((function (){var G__22689 = number;
return isNaN(G__22689);
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
return no.en.core.parse_number(s,(function (p1__22690_SHARP_){
var G__22692 = p1__22690_SHARP_;
return parseInt(G__22692);
}));
});
/**
* Parse `s` as a long number.
*/
no.en.core.parse_long = (function parse_long(s){
return no.en.core.parse_number(s,(function (p1__22693_SHARP_){
var G__22695 = p1__22693_SHARP_;
return parseInt(G__22695);
}));
});
/**
* Parse `s` as a double number.
*/
no.en.core.parse_double = (function parse_double(s){
return no.en.core.parse_number(s,(function (p1__22696_SHARP_){
var G__22698 = p1__22696_SHARP_;
return parseFloat(G__22698);
}));
});
/**
* Parse `s` as a float number.
*/
no.en.core.parse_float = (function parse_float(s){
return no.en.core.parse_number(s,(function (p1__22699_SHARP_){
var G__22701 = p1__22699_SHARP_;
return parseFloat(G__22701);
}));
});
/**
* Format the map `m` into a query parameter string.
*/
no.en.core.format_query_params = (function format_query_params(m){
var params = clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22704_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("=",p1__22704_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22703_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[no.en.core.url_encode(cljs.core.name(cljs.core.first(p1__22703_SHARP_))),no.en.core.url_encode(cljs.core.second(p1__22703_SHARP_))],null));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__22702_SHARP_){
return clojure.string.blank_QMARK_([cljs.core.str(cljs.core.second(p1__22702_SHARP_))].join(''));
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
var query_params = cljs.core.constant$keyword$28.cljs$core$IFn$_invoke$arity$1(m);
return [cljs.core.str((cljs.core.truth_(cljs.core.constant$keyword$29.cljs$core$IFn$_invoke$arity$1(m))?[cljs.core.str(cljs.core.name(cljs.core.constant$keyword$29.cljs$core$IFn$_invoke$arity$1(m))),cljs.core.str("://")].join(''):null)),cljs.core.str((function (){var map__22707 = m;
var map__22707__$1 = ((cljs.core.seq_QMARK_(map__22707))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22707):map__22707);
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22707__$1,cljs.core.constant$keyword$30);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22707__$1,cljs.core.constant$keyword$31);
if(cljs.core.truth_(user)){
return [cljs.core.str((cljs.core.truth_(user)?user:null)),cljs.core.str((cljs.core.truth_(password)?[cljs.core.str(":"),cljs.core.str(password)].join(''):null)),cljs.core.str("@")].join('');
} else {
return null;
}
})()),cljs.core.str(cljs.core.constant$keyword$32.cljs$core$IFn$_invoke$arity$1(m)),cljs.core.str((function (){var temp__4124__auto__ = cljs.core.constant$keyword$33.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4124__auto__)){
var port = temp__4124__auto__;
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(port,(function (){var G__22708 = cljs.core.constant$keyword$29.cljs$core$IFn$_invoke$arity$1(m);
return (no.en.core.port_number.cljs$core$IFn$_invoke$arity$1 ? no.en.core.port_number.cljs$core$IFn$_invoke$arity$1(G__22708) : no.en.core.port_number.call(null,G__22708));
})()))){
return [cljs.core.str(":"),cljs.core.str(port)].join('');
} else {
return null;
}
} else {
return null;
}
})()),cljs.core.str(((((cljs.core.constant$keyword$34.cljs$core$IFn$_invoke$arity$1(m) == null)) && (!(cljs.core.empty_QMARK_(query_params))))?"/":cljs.core.constant$keyword$34.cljs$core$IFn$_invoke$arity$1(m))),cljs.core.str(((!(cljs.core.empty_QMARK_(query_params)))?[cljs.core.str("?"),cljs.core.str(no.en.core.format_query_params(query_params))].join(''):null)),cljs.core.str(((cljs.core.not(clojure.string.blank_QMARK_(cljs.core.constant$keyword$35.cljs$core$IFn$_invoke$arity$1(m))))?[cljs.core.str("#"),cljs.core.str(cljs.core.constant$keyword$35.cljs$core$IFn$_invoke$arity$1(m))].join(''):null))].join('');
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__22711_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(cljs.core.first(p1__22711_SHARP_))),no.en.core.url_decode(cljs.core.second(p1__22711_SHARP_))],null));
}),cljs.core.array_seq([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__22710_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(p1__22710_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22709_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__22709_SHARP_,/=/);
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
return no.en.core.compact_map(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$30,cljs.core.constant$keyword$35,cljs.core.constant$keyword$33,cljs.core.constant$keyword$28,cljs.core.constant$keyword$34,cljs.core.constant$keyword$32,cljs.core.constant$keyword$36,cljs.core.constant$keyword$31,cljs.core.constant$keyword$29],[cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(14)),(function (){var or__3630__auto__ = no.en.core.parse_integer(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(8)));
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
var G__22713 = scheme;
return (no.en.core.port_number.cljs$core$IFn$_invoke$arity$1 ? no.en.core.port_number.cljs$core$IFn$_invoke$arity$1(G__22713) : no.en.core.port_number.call(null,G__22713));
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
}catch (e22716){if((e22716 instanceof Error)){
var e = e22716;
if((n__$1 === (0))){
throw e;
} else {
return null;
}
} else {
throw e22716;

}
}})();
if(cljs.core.truth_(temp__4124__auto__)){
var result = temp__4124__auto__;
var G__22717 = (0);
return (result.cljs$core$IFn$_invoke$arity$1 ? result.cljs$core$IFn$_invoke$arity$1(G__22717) : result.call(null,G__22717));
} else {
var G__22718 = (n__$1 - (1));
n__$1 = G__22718;
continue;
}
break;
}
});
