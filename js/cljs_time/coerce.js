// Compiled by ClojureScript 0.0-2511
goog.provide('cljs_time.coerce');
goog.require('cljs.core');
goog.require('goog.date');
goog.require('cljs_time.format');
goog.require('cljs_time.core');

cljs_time.coerce.ICoerce = (function (){var obj26932 = {};
return obj26932;
})();

cljs_time.coerce.to_date_time = (function to_date_time(obj){
if((function (){var and__3618__auto__ = obj;
if(and__3618__auto__){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1;
} else {
return and__3618__auto__;
}
})()){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
var x__4274__auto__ = (((obj == null))?null:obj);
return (function (){var or__3630__auto__ = (cljs_time.coerce.to_date_time[(function (){var G__26936 = x__4274__auto__;
return goog.typeOf(G__26936);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs_time.coerce.to_date_time["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
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
var G__26938 = (new goog.date.UtcDateTime());
G__26938.setTime(millis);

return G__26938;
});
/**
* Returns DateTime instance from string using formatters in clj-time.format,
* returning first which parses
*/
cljs_time.coerce.from_string = (function from_string(s){
return cljs.core.first((function (){var iter__4386__auto__ = (function iter__26949(s__26950){
return (new cljs.core.LazySeq(null,(function (){
var s__26950__$1 = s__26950;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__26950__$1);
if(temp__4126__auto__){
var s__26950__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26950__$2)){
var c__4384__auto__ = cljs.core.chunk_first(s__26950__$2);
var size__4385__auto__ = cljs.core.count(c__4384__auto__);
var b__26952 = cljs.core.chunk_buffer(size__4385__auto__);
if((function (){var i__26951 = (0);
while(true){
if((i__26951 < size__4385__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4384__auto__,i__26951);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e26957){if((e26957 instanceof Error)){
var _ = e26957;
return null;
} else {
throw e26957;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__26952,d);

var G__26959 = (i__26951 + (1));
i__26951 = G__26959;
continue;
} else {
var G__26960 = (i__26951 + (1));
i__26951 = G__26960;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26952),iter__26949(cljs.core.chunk_rest(s__26950__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26952),null);
}
} else {
var f = cljs.core.first(s__26950__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e26958){if((e26958 instanceof Error)){
var _ = e26958;
return null;
} else {
throw e26958;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,iter__26949(cljs.core.rest(s__26950__$2)));
} else {
var G__26961 = cljs.core.rest(s__26950__$2);
s__26950__$1 = G__26961;
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
return iter__4386__auto__(cljs.core.vals(cljs_time.format.formatters));
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
var and__3618__auto__ = millis;
if(cljs.core.truth_(and__3618__auto__)){
return (millis / (1000));
} else {
return and__3618__auto__;
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
return cljs_time.format.unparse(cljs.core.constant$keyword$154.cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),dt);
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
var G__26963 = (new goog.date.Date());
G__26963.setYear(dt.getYear());

G__26963.setMonth(dt.getMonth());

G__26963.setDate(dt.getDate());

return G__26963;
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
var G__26965 = (new goog.date.DateTime());
G__26965.setYear(dt.getYear());

G__26965.setMonth(dt.getMonth());

G__26965.setDate(dt.getDate());

G__26965.setHours(dt.getHours());

G__26965.setMinutes(dt.getMinutes());

G__26965.setSeconds(dt.getSeconds());

G__26965.setMilliseconds(dt.getMilliseconds());

return G__26965;
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
