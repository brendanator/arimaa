// Compiled by ClojureScript 0.0-2727 {}
goog.provide('cljs_time.coerce');
goog.require('cljs.core');
goog.require('goog.date');
goog.require('cljs_time.format');
goog.require('cljs_time.core');

cljs_time.coerce.ICoerce = (function (){var obj23792 = {};
return obj23792;
})();

cljs_time.coerce.to_date_time = (function to_date_time(obj){
if((function (){var and__3738__auto__ = obj;
if(and__3738__auto__){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1;
} else {
return and__3738__auto__;
}
})()){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
var x__4394__auto__ = (((obj == null))?null:obj);
return (function (){var or__3750__auto__ = (cljs_time.coerce.to_date_time[(function (){var G__23796 = x__4394__auto__;
return goog.typeOf(G__23796);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs_time.coerce.to_date_time["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("ICoerce.to-date-time",obj);
}
}
})().call(null,obj);
}
});

/**
* Returns a DateTime instance in the UTC time zone corresponding to the given
* number of milliseconds after the Unix epoch.
*/
cljs_time.coerce.from_long = (function from_long(millis){
var G__23798 = (new goog.date.UtcDateTime());
G__23798.setTime(millis);

return G__23798;
});
/**
* Returns DateTime instance from string using formatters in clj-time.format,
* returning first which parses
*/
cljs_time.coerce.from_string = (function from_string(s){
return cljs.core.first((function (){var iter__4506__auto__ = (function iter__23809(s__23810){
return (new cljs.core.LazySeq(null,(function (){
var s__23810__$1 = s__23810;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__23810__$1);
if(temp__4126__auto__){
var s__23810__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23810__$2)){
var c__4504__auto__ = cljs.core.chunk_first(s__23810__$2);
var size__4505__auto__ = cljs.core.count(c__4504__auto__);
var b__23812 = cljs.core.chunk_buffer(size__4505__auto__);
if((function (){var i__23811 = (0);
while(true){
if((i__23811 < size__4505__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4504__auto__,i__23811);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e23817){if((e23817 instanceof Error)){
var _ = e23817;
return null;
} else {
throw e23817;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__23812,d);

var G__23819 = (i__23811 + (1));
i__23811 = G__23819;
continue;
} else {
var G__23820 = (i__23811 + (1));
i__23811 = G__23820;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23812),iter__23809(cljs.core.chunk_rest(s__23810__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23812),null);
}
} else {
var f = cljs.core.first(s__23810__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e23818){if((e23818 instanceof Error)){
var _ = e23818;
return null;
} else {
throw e23818;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,iter__23809(cljs.core.rest(s__23810__$2)));
} else {
var G__23821 = cljs.core.rest(s__23810__$2);
s__23810__$1 = G__23821;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4506__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
});
/**
* Returns a DateTime instance in the UTC time zone corresponding to the given
* Java Date object.
*/
cljs_time.coerce.from_date = (function from_date(date){
return cljs_time.coerce.from_long(date.getTime());
});
/**
* Convert `obj` to the number of milliseconds after the Unix epoch.
*/
cljs_time.coerce.to_long = (function to_long(obj){
var temp__4124__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__4124__auto__)){
var dt = temp__4124__auto__;
return dt.getTime();
} else {
return null;
}
});
/**
* Convert `obj` to Unix epoch.
*/
cljs_time.coerce.to_epoch = (function to_epoch(obj){
var millis = cljs_time.coerce.to_long(obj);
var and__3738__auto__ = millis;
if(cljs.core.truth_(and__3738__auto__)){
return (millis / (1000));
} else {
return and__3738__auto__;
}
});
/**
* Convert `obj` to a JavaScript Date instance.
*/
cljs_time.coerce.to_date = (function to_date(obj){
var temp__4124__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__4124__auto__)){
var dt = temp__4124__auto__;
return (new Date(dt.getTime()));
} else {
return null;
}
});
/**
* Returns a string representation of obj in UTC time-zone
* using (ISODateTimeFormat/dateTime) date-time representation.
*/
cljs_time.coerce.to_string = (function to_string(obj){
var temp__4124__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__4124__auto__)){
var dt = temp__4124__auto__;
return cljs_time.format.unparse(cljs.core.constant$keyword$81.cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),dt);
} else {
return null;
}
});
/**
* Convert `obj` to a goog.date.Date instance
*/
cljs_time.coerce.to_local_date = (function to_local_date(obj){
var temp__4124__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__4124__auto__)){
var dt = temp__4124__auto__;
var G__23823 = (new goog.date.Date());
G__23823.setYear(dt.getYear());

G__23823.setMonth(dt.getMonth());

G__23823.setDate(dt.getDate());

return G__23823;
} else {
return null;
}
});
/**
* Convert `obj` to a goog.date.DateTime instance
*/
cljs_time.coerce.to_local_date_time = (function to_local_date_time(obj){
var temp__4124__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__4124__auto__)){
var dt = temp__4124__auto__;
var G__23825 = (new goog.date.DateTime());
G__23825.setYear(dt.getYear());

G__23825.setMonth(dt.getMonth());

G__23825.setDate(dt.getDate());

G__23825.setHours(dt.getHours());

G__23825.setMinutes(dt.getMinutes());

G__23825.setSeconds(dt.getSeconds());

G__23825.setMilliseconds(dt.getMilliseconds());

return G__23825;
} else {
return null;
}
});
(cljs_time.coerce.ICoerce["string"] = true);

(cljs_time.coerce.to_date_time["string"] = (function (string){
return cljs_time.coerce.from_string(string);
}));

(cljs_time.coerce.ICoerce["number"] = true);

(cljs_time.coerce.to_date_time["number"] = (function (long$){
return cljs_time.coerce.from_long(long$);
}));

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = true;

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return date_time__$1;
});

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = true;

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date_time){
var local_date_time__$1 = this;
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7(cljs_time.core.year(local_date_time__$1),cljs_time.core.month(local_date_time__$1),cljs_time.core.day(local_date_time__$1),cljs_time.core.hour(local_date_time__$1),cljs_time.core.minute(local_date_time__$1),cljs_time.core.second(local_date_time__$1),cljs_time.core.milli(local_date_time__$1));
});

goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = true;

goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date){
var local_date__$1 = this;
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(local_date__$1),cljs_time.core.month(local_date__$1),cljs_time.core.day(local_date__$1));
});

Date.prototype.cljs_time$coerce$ICoerce$ = true;

Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.coerce.from_date(date__$1);
});

(cljs_time.coerce.ICoerce["null"] = true);

(cljs_time.coerce.to_date_time["null"] = (function (_){
return null;
}));
