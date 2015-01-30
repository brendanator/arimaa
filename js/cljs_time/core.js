// Compiled by ClojureScript 0.0-2727 {}
goog.provide('cljs_time.core');
goog.require('cljs.core');
goog.require('goog.i18n.TimeZone');
goog.require('goog.date.UtcDateTime');
goog.require('goog.date.DateTime');
goog.require('goog.date.Date');
goog.require('cljs_time.internal.core');
cljs_time.core._STAR_sys_time_STAR_ = null;
cljs_time.core._EQ_ = cljs_time.internal.core._EQ_;

cljs_time.core.DateTimeProtocol = (function (){var obj28867 = {};
return obj28867;
})();

cljs_time.core.year = (function year(this$){
if((function (){var and__3738__auto__ = this$;
if(and__3738__auto__){
return this$.cljs_time$core$DateTimeProtocol$year$arity$1;
} else {
return and__3738__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$year$arity$1(this$);
} else {
var x__4394__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3750__auto__ = (cljs_time.core.year[(function (){var G__28871 = x__4394__auto__;
return goog.typeOf(G__28871);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs_time.core.year["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.year",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.month = (function month(this$){
if((function (){var and__3738__auto__ = this$;
if(and__3738__auto__){
return this$.cljs_time$core$DateTimeProtocol$month$arity$1;
} else {
return and__3738__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$month$arity$1(this$);
} else {
var x__4394__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3750__auto__ = (cljs_time.core.month[(function (){var G__28875 = x__4394__auto__;
return goog.typeOf(G__28875);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs_time.core.month["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.month",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.day = (function day(this$){
if((function (){var and__3738__auto__ = this$;
if(and__3738__auto__){
return this$.cljs_time$core$DateTimeProtocol$day$arity$1;
} else {
return and__3738__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$day$arity$1(this$);
} else {
var x__4394__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3750__auto__ = (cljs_time.core.day[(function (){var G__28879 = x__4394__auto__;
return goog.typeOf(G__28879);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs_time.core.day["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.day",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.day_of_week = (function day_of_week(this$){
if((function (){var and__3738__auto__ = this$;
if(and__3738__auto__){
return this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1;
} else {
return and__3738__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1(this$);
} else {
var x__4394__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3750__auto__ = (cljs_time.core.day_of_week[(function (){var G__28883 = x__4394__auto__;
return goog.typeOf(G__28883);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs_time.core.day_of_week["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.day-of-week",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.hour = (function hour(this$){
if((function (){var and__3738__auto__ = this$;
if(and__3738__auto__){
return this$.cljs_time$core$DateTimeProtocol$hour$arity$1;
} else {
return and__3738__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$hour$arity$1(this$);
} else {
var x__4394__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3750__auto__ = (cljs_time.core.hour[(function (){var G__28887 = x__4394__auto__;
return goog.typeOf(G__28887);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs_time.core.hour["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.hour",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.minute = (function minute(this$){
if((function (){var and__3738__auto__ = this$;
if(and__3738__auto__){
return this$.cljs_time$core$DateTimeProtocol$minute$arity$1;
} else {
return and__3738__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$minute$arity$1(this$);
} else {
var x__4394__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3750__auto__ = (cljs_time.core.minute[(function (){var G__28891 = x__4394__auto__;
return goog.typeOf(G__28891);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs_time.core.minute["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.minute",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.sec = (function sec(this$){
if((function (){var and__3738__auto__ = this$;
if(and__3738__auto__){
return this$.cljs_time$core$DateTimeProtocol$sec$arity$1;
} else {
return and__3738__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$sec$arity$1(this$);
} else {
var x__4394__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3750__auto__ = (cljs_time.core.sec[(function (){var G__28895 = x__4394__auto__;
return goog.typeOf(G__28895);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs_time.core.sec["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.sec",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.second = (function second(this$){
if((function (){var and__3738__auto__ = this$;
if(and__3738__auto__){
return this$.cljs_time$core$DateTimeProtocol$second$arity$1;
} else {
return and__3738__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$second$arity$1(this$);
} else {
var x__4394__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3750__auto__ = (cljs_time.core.second[(function (){var G__28899 = x__4394__auto__;
return goog.typeOf(G__28899);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs_time.core.second["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.second",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.milli = (function milli(this$){
if((function (){var and__3738__auto__ = this$;
if(and__3738__auto__){
return this$.cljs_time$core$DateTimeProtocol$milli$arity$1;
} else {
return and__3738__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$milli$arity$1(this$);
} else {
var x__4394__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3750__auto__ = (cljs_time.core.milli[(function (){var G__28903 = x__4394__auto__;
return goog.typeOf(G__28903);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs_time.core.milli["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.milli",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.after_QMARK_ = (function after_QMARK_(this$,that){
if((function (){var and__3738__auto__ = this$;
if(and__3738__auto__){
return this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2;
} else {
return and__3738__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2(this$,that);
} else {
var x__4394__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3750__auto__ = (cljs_time.core.after_QMARK_[(function (){var G__28907 = x__4394__auto__;
return goog.typeOf(G__28907);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs_time.core.after_QMARK_["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.after?",this$);
}
}
})().call(null,this$,that);
}
});

cljs_time.core.before_QMARK_ = (function before_QMARK_(this$,that){
if((function (){var and__3738__auto__ = this$;
if(and__3738__auto__){
return this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2;
} else {
return and__3738__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2(this$,that);
} else {
var x__4394__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3750__auto__ = (cljs_time.core.before_QMARK_[(function (){var G__28911 = x__4394__auto__;
return goog.typeOf(G__28911);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs_time.core.before_QMARK_["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.before?",this$);
}
}
})().call(null,this$,that);
}
});

cljs_time.core.plus_ = (function plus_(this$,period){
if((function (){var and__3738__auto__ = this$;
if(and__3738__auto__){
return this$.cljs_time$core$DateTimeProtocol$plus_$arity$2;
} else {
return and__3738__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$plus_$arity$2(this$,period);
} else {
var x__4394__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3750__auto__ = (cljs_time.core.plus_[(function (){var G__28915 = x__4394__auto__;
return goog.typeOf(G__28915);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs_time.core.plus_["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.plus-",this$);
}
}
})().call(null,this$,period);
}
});

cljs_time.core.minus_ = (function minus_(this$,period){
if((function (){var and__3738__auto__ = this$;
if(and__3738__auto__){
return this$.cljs_time$core$DateTimeProtocol$minus_$arity$2;
} else {
return and__3738__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$minus_$arity$2(this$,period);
} else {
var x__4394__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3750__auto__ = (cljs_time.core.minus_[(function (){var G__28919 = x__4394__auto__;
return goog.typeOf(G__28919);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs_time.core.minus_["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.minus-",this$);
}
}
})().call(null,this$,period);
}
});

cljs_time.core.periods = (function (){var fixed_time_fn = (function (f,set_fn,op,date,value){
var date__$1 = date.clone();
var G__28930_28949 = date__$1;
var G__28931_28950 = (function (){var G__28932 = (function (){var G__28934 = date__$1;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28934) : f.call(null,G__28934));
})();
var G__28933 = value;
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__28932,G__28933) : op.call(null,G__28932,G__28933));
})();
(set_fn.cljs$core$IFn$_invoke$arity$2 ? set_fn.cljs$core$IFn$_invoke$arity$2(G__28930_28949,G__28931_28950) : set_fn.call(null,G__28930_28949,G__28931_28950));

return date__$1;
});
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$132,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.milli,((function (fixed_time_fn){
return (function (p1__28920_SHARP_,p2__28921_SHARP_){
return p1__28920_SHARP_.setMilliseconds(p2__28921_SHARP_);
});})(fixed_time_fn))
),cljs.core.constant$keyword$133,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.second,((function (fixed_time_fn){
return (function (p1__28922_SHARP_,p2__28923_SHARP_){
return p1__28922_SHARP_.setSeconds(p2__28923_SHARP_);
});})(fixed_time_fn))
),cljs.core.constant$keyword$134,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.minute,((function (fixed_time_fn){
return (function (p1__28924_SHARP_,p2__28925_SHARP_){
return p1__28924_SHARP_.setMinutes(p2__28925_SHARP_);
});})(fixed_time_fn))
),cljs.core.constant$keyword$135,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.hour,((function (fixed_time_fn){
return (function (p1__28926_SHARP_,p2__28927_SHARP_){
return p1__28926_SHARP_.setHours(p2__28927_SHARP_);
});})(fixed_time_fn))
),cljs.core.constant$keyword$136,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.day,((function (fixed_time_fn){
return (function (p1__28928_SHARP_,p2__28929_SHARP_){
return p1__28928_SHARP_.setDate(p2__28929_SHARP_);
});})(fixed_time_fn))
),cljs.core.constant$keyword$143,((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
date__$1.setDate((function (){var G__28935 = cljs_time.core.day(date__$1);
var G__28936 = ((7) * value);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__28935,G__28936) : op.call(null,G__28935,G__28936));
})());

return date__$1;
});})(fixed_time_fn))
,cljs.core.constant$keyword$137,((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
var m = (function (){var G__28937 = cljs_time.core.month(date__$1);
var G__28938 = value;
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__28937,G__28938) : op.call(null,G__28937,G__28938));
})();
var y = cljs_time.core.year(date__$1);
var y__$1 = (((m > (12)))?(y + (1)):(((m < (1)))?(y - (1)):y
));
var m__$1 = (((m > (12)))?cljs.core.mod(m,(12)):(((m < (1)))?(m + (12)):m
));
date__$1.setMonth((m__$1 - (1)));

date__$1.setYear(y__$1);

return date__$1;
});})(fixed_time_fn))
,cljs.core.constant$keyword$138,((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_((function (){var and__3738__auto__ = cljs_time.internal.core.leap_year_QMARK_(cljs_time.core.year(date__$1));
if(and__3738__auto__){
var and__3738__auto____$1 = (function (){var G__28943 = (2);
var G__28944 = cljs_time.core.month(date__$1);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__28943,G__28944) : cljs_time.core._EQ_.call(null,G__28943,G__28944));
})();
if(cljs.core.truth_(and__3738__auto____$1)){
var G__28945 = (29);
var G__28946 = cljs_time.core.day(date__$1);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__28945,G__28946) : cljs_time.core._EQ_.call(null,G__28945,G__28946));
} else {
return and__3738__auto____$1;
}
} else {
return and__3738__auto__;
}
})())){
date__$1.setDate((28));
} else {
}

date__$1.setYear((function (){var G__28947 = cljs_time.core.year(date__$1);
var G__28948 = value;
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__28947,G__28948) : op.call(null,G__28947,G__28948));
})());

return date__$1;
});})(fixed_time_fn))
], null);
})();
cljs_time.core.period_fn = (function period_fn(p){
return (function (operator,date){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__28952_SHARP_,p2__28951_SHARP_){
return (function (){var G__28954 = cljs.core.key(p2__28951_SHARP_);
return (cljs_time.core.periods.cljs$core$IFn$_invoke$arity$1 ? cljs_time.core.periods.cljs$core$IFn$_invoke$arity$1(G__28954) : cljs_time.core.periods.call(null,G__28954));
})().call(null,operator,p1__28952_SHARP_,cljs.core.val(p2__28951_SHARP_));
}),date,p);
});
});
goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$ = true;

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_((function (){var G__28955 = d;
var G__28956 = (0);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__28955,G__28956) : cljs_time.core._EQ_.call(null,G__28955,G__28956));
})())){
return (7);
} else {
return d;
}
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period).call(null,cljs.core._,this$__$1);
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$ = true;

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_((function (){var G__28957 = d;
var G__28958 = (0);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__28957,G__28958) : cljs_time.core._EQ_.call(null,G__28957,G__28958));
})())){
return (7);
} else {
return d;
}
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getHours();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMinutes();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getSeconds();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMilliseconds();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period).call(null,cljs.core._,this$__$1);
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$ = true;

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_((function (){var G__28959 = d;
var G__28960 = (0);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__28959,G__28960) : cljs_time.core._EQ_.call(null,G__28959,G__28960));
})())){
return (7);
} else {
return d;
}
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getHours();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMinutes();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getSeconds();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMilliseconds();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period).call(null,cljs.core._,this$__$1);
});
cljs_time.core.utc = (function (){var G__28961 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$144,"UTC",cljs.core.constant$keyword$145,(0),cljs.core.constant$keyword$146,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["UTC"], null),cljs.core.constant$keyword$147,cljs.core.PersistentVector.EMPTY], null));
return goog.i18n.TimeZone.createTimeZone(G__28961);
})();
/**
* Returns a DateTime for the current instant in the UTC time zone.
*/
cljs_time.core.now = (function now(){
if(cljs.core.truth_(cljs_time.core._STAR_sys_time_STAR_)){
return cljs_time.core._STAR_sys_time_STAR_;
} else {
return (new goog.date.UtcDateTime());
}
});
/**
* Returns a LocalTime for the current instant without date or time zone
* using ISOChronology in the current time zone.
*/
cljs_time.core.time_now = (function time_now(){
return (new goog.date.DateTime());
});
cljs_time.core.at_midnight = (function at_midnight(datetime){
var datetime__$1 = datetime.clone();
var G__28963 = datetime__$1;
G__28963.setHours((0));

G__28963.setMinutes((0));

G__28963.setSeconds((0));

G__28963.setMilliseconds((0));

return G__28963;
});
/**
* Returns a DateMidnight for today at midnight in the UTC time zone.
*/
cljs_time.core.today_at_midnight = (function today_at_midnight(){
return cljs_time.core.at_midnight(cljs_time.core.now());
});
/**
* Returns a DateTime for the begining of the Unix epoch in the UTC time zone.
*/
cljs_time.core.epoch = (function epoch(){
var G__28965 = (new goog.date.UtcDateTime());
G__28965.setTime((0));

return G__28965;
});
/**
* Constructs and returns a new DateMidnight in UTC.
* 
* Specify the year, month of year, day of month. Note that month and day are
* 1-indexed. Any number of least-significant components can be ommited, in
* which case they will default to 1.
*/
cljs_time.core.date_midnight = (function() {
var date_midnight = null;
var date_midnight__1 = (function (year){
return date_midnight.cljs$core$IFn$_invoke$arity$3(year,(1),(1));
});
var date_midnight__2 = (function (year,month){
return date_midnight.cljs$core$IFn$_invoke$arity$3(year,month,(1));
});
var date_midnight__3 = (function (year,month,day){
return (new goog.date.UtcDateTime(year,(month - (1)),day));
});
date_midnight = function(year,month,day){
switch(arguments.length){
case 1:
return date_midnight__1.call(this,year);
case 2:
return date_midnight__2.call(this,year,month);
case 3:
return date_midnight__3.call(this,year,month,day);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_midnight.cljs$core$IFn$_invoke$arity$1 = date_midnight__1;
date_midnight.cljs$core$IFn$_invoke$arity$2 = date_midnight__2;
date_midnight.cljs$core$IFn$_invoke$arity$3 = date_midnight__3;
return date_midnight;
})()
;
/**
* Constructs and returns a new DateTime in UTC.
* 
* Specify the year, month of year, day of month, hour of day, minute if hour,
* second of minute, and millisecond of second. Note that month and day are
* 1-indexed while hour, second, minute, and millis are 0-indexed.
* 
* Any number of least-significant components can be ommited, in which case
* they will default to 1 or 0 as appropriate.
*/
cljs_time.core.date_time = (function() {
var date_time = null;
var date_time__1 = (function (year){
return date_time.cljs$core$IFn$_invoke$arity$7(year,(1),(1),(0),(0),(0),(0));
});
var date_time__2 = (function (year,month){
return date_time.cljs$core$IFn$_invoke$arity$7(year,month,(1),(0),(0),(0),(0));
});
var date_time__3 = (function (year,month,day){
return date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,(0),(0),(0),(0));
});
var date_time__4 = (function (year,month,day,hour){
return date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,(0),(0),(0));
});
var date_time__5 = (function (year,month,day,hour,minute){
return date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,minute,(0),(0));
});
var date_time__6 = (function (year,month,day,hour,minute,second){
return date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,minute,second,(0));
});
var date_time__7 = (function (year,month,day,hour,minute,second,millis){
return (new goog.date.UtcDateTime(year,(month - (1)),day,hour,minute,second,millis));
});
date_time = function(year,month,day,hour,minute,second,millis){
switch(arguments.length){
case 1:
return date_time__1.call(this,year);
case 2:
return date_time__2.call(this,year,month);
case 3:
return date_time__3.call(this,year,month,day);
case 4:
return date_time__4.call(this,year,month,day,hour);
case 5:
return date_time__5.call(this,year,month,day,hour,minute);
case 6:
return date_time__6.call(this,year,month,day,hour,minute,second);
case 7:
return date_time__7.call(this,year,month,day,hour,minute,second,millis);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_time.cljs$core$IFn$_invoke$arity$1 = date_time__1;
date_time.cljs$core$IFn$_invoke$arity$2 = date_time__2;
date_time.cljs$core$IFn$_invoke$arity$3 = date_time__3;
date_time.cljs$core$IFn$_invoke$arity$4 = date_time__4;
date_time.cljs$core$IFn$_invoke$arity$5 = date_time__5;
date_time.cljs$core$IFn$_invoke$arity$6 = date_time__6;
date_time.cljs$core$IFn$_invoke$arity$7 = date_time__7;
return date_time;
})()
;
/**
* Constructs and returns a new LocalDateTime.
* Specify the year, month of year, day of month, hour of day, minute of hour,
* second of minute, and millisecond of second. Note that month and day are
* 1-indexed while hour, second, minute, and millis are 0-indexed.
* Any number of least-significant components can be ommited, in which case
* they will default to 1 or 0 as appropriate.
*/
cljs_time.core.local_date_time = (function() {
var local_date_time = null;
var local_date_time__1 = (function (year){
return local_date_time.cljs$core$IFn$_invoke$arity$7(year,(1),(1),(0),(0),(0),(0));
});
var local_date_time__2 = (function (year,month){
return local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,(1),(0),(0),(0),(0));
});
var local_date_time__3 = (function (year,month,day){
return local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,(0),(0),(0),(0));
});
var local_date_time__4 = (function (year,month,day,hour){
return local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,(0),(0),(0));
});
var local_date_time__5 = (function (year,month,day,hour,minute){
return local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,minute,(0),(0));
});
var local_date_time__6 = (function (year,month,day,hour,minute,second){
return local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,minute,second,(0));
});
var local_date_time__7 = (function (year,month,day,hour,minute,second,millis){
return (new goog.date.DateTime(year,(month - (1)),day,hour,minute,second,millis));
});
local_date_time = function(year,month,day,hour,minute,second,millis){
switch(arguments.length){
case 1:
return local_date_time__1.call(this,year);
case 2:
return local_date_time__2.call(this,year,month);
case 3:
return local_date_time__3.call(this,year,month,day);
case 4:
return local_date_time__4.call(this,year,month,day,hour);
case 5:
return local_date_time__5.call(this,year,month,day,hour,minute);
case 6:
return local_date_time__6.call(this,year,month,day,hour,minute,second);
case 7:
return local_date_time__7.call(this,year,month,day,hour,minute,second,millis);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
local_date_time.cljs$core$IFn$_invoke$arity$1 = local_date_time__1;
local_date_time.cljs$core$IFn$_invoke$arity$2 = local_date_time__2;
local_date_time.cljs$core$IFn$_invoke$arity$3 = local_date_time__3;
local_date_time.cljs$core$IFn$_invoke$arity$4 = local_date_time__4;
local_date_time.cljs$core$IFn$_invoke$arity$5 = local_date_time__5;
local_date_time.cljs$core$IFn$_invoke$arity$6 = local_date_time__6;
local_date_time.cljs$core$IFn$_invoke$arity$7 = local_date_time__7;
return local_date_time;
})()
;
/**
* Constructs and returns a new LocalDate.
* Specify the year, month, and day. Does not deal with timezones.
*/
cljs_time.core.local_date = (function local_date(year,month,day){
return (new goog.date.Date(year,(month - (1)),day));
});
/**
* Constructs and returns a new LocalDate representing today's date.
* LocalDate objects do not deal with timezones at all.
*/
cljs_time.core.today = (function today(){
if(cljs.core.truth_(cljs_time.core._STAR_sys_time_STAR_)){
var d = cljs_time.core._STAR_sys_time_STAR_;
return (new goog.date.Date(d.getYear(),d.getMonth(),d.getDate()));
} else {
return (new goog.date.Date());
}
});
/**
* Returns a DateTimeZone for the given offset, specified either in hours or
* hours and minutes.
*/
cljs_time.core.time_zone_for_offset = (function() {
var time_zone_for_offset = null;
var time_zone_for_offset__1 = (function (hours){
return time_zone_for_offset.cljs$core$IFn$_invoke$arity$2(hours,null);
});
var time_zone_for_offset__2 = (function (hours,minutes){
var sign = (((hours < (0)))?cljs.core.constant$keyword$148:cljs.core.constant$keyword$149);
var fmt = [cljs.core.str("UTC%s%02d"),cljs.core.str((cljs.core.truth_(minutes)?":%02d":null))].join('');
var hours__$1 = (((hours < (0)))?((-1) * hours):hours);
var tz_name = (cljs.core.truth_(minutes)?cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic(fmt,cljs.core.array_seq([cljs.core.name(sign),hours__$1,minutes], 0)):cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic(fmt,cljs.core.array_seq([cljs.core.name(sign),hours__$1], 0)));
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$144,tz_name,cljs.core.constant$keyword$150,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sign,hours__$1,(function (){var or__3750__auto__ = minutes;
if(cljs.core.truth_(or__3750__auto__)){
return or__3750__auto__;
} else {
return (0);
}
})(),(0)], null),cljs.core.constant$keyword$151,"-",cljs.core.constant$keyword$146,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tz_name], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$139,cljs.core.constant$keyword$152], null));
});
time_zone_for_offset = function(hours,minutes){
switch(arguments.length){
case 1:
return time_zone_for_offset__1.call(this,hours);
case 2:
return time_zone_for_offset__2.call(this,hours,minutes);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_zone_for_offset.cljs$core$IFn$_invoke$arity$1 = time_zone_for_offset__1;
time_zone_for_offset.cljs$core$IFn$_invoke$arity$2 = time_zone_for_offset__2;
return time_zone_for_offset;
})()
;
/**
* Returns the default DateTimeZone for the current environment.
*/
cljs_time.core.default_time_zone = (function default_time_zone(){
var hours = (((-1) * (new goog.date.DateTime()).getTimezoneOffset()) / (60));
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2((hours | (0)),cljs.core.mod(hours,(1)));
});
/**
* Assuming `dt` is in the UTC timezone, returns an adjusted DateTime
* in the default (local) timezone.
*/
cljs_time.core.to_default_time_zone = (function to_default_time_zone(dt){
var map__29068 = cljs_time.core.default_time_zone();
var map__29068__$1 = ((cljs.core.seq_QMARK_(map__29068))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29068):map__29068);
var vec__29069 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29068__$1,cljs.core.constant$keyword$150);
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29069,(0),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29069,(1),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29069,(2),null);
var secs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29069,(3),null);
var f = (cljs.core.truth_((function (){var G__29070 = cljs.core.constant$keyword$149;
var G__29071 = sign;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__29070,G__29071) : cljs_time.core._EQ_.call(null,G__29070,G__29071));
})())?cljs.core._PLUS_:cljs.core._);
return (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate(),(function (){var G__29072 = hours;
var G__29073 = dt.getHours();
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29072,G__29073) : f.call(null,G__29072,G__29073));
})(),(function (){var G__29074 = minutes;
var G__29075 = dt.getMinutes();
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29074,G__29075) : f.call(null,G__29074,G__29075));
})(),(function (){var G__29076 = secs;
var G__29077 = dt.getSeconds();
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29076,G__29077) : f.call(null,G__29076,G__29077));
})(),dt.getMilliseconds()));
});
/**
* Returns a new ReadableDateTime corresponding to the same absolute instant in time as
* the given ReadableDateTime, but with calendar fields corresponding to the given
* TimeZone.
*/
cljs_time.core.to_time_zone = (function to_time_zone(dt,tz){
return dt.withZone(tz);
});
/**
* Returns a new ReadableDateTime corresponding to the same point in calendar time as
* the given ReadableDateTime, but for a correspondingly different absolute instant in
* time.
*/
cljs_time.core.from_time_zone = (function from_time_zone(dt,tz){
return dt.withZoneRetainFields(tz);
});
/**
* Given a number, returns a Period representing that many years.
* Without an argument, returns a PeriodType representing only years.
*/
cljs_time.core.years = (function() {
var years = null;
var years__0 = (function (){
return years.cljs$core$IFn$_invoke$arity$1(null);
});
var years__1 = (function (n){
return cljs_time.internal.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$138,n);
});
years = function(n){
switch(arguments.length){
case 0:
return years__0.call(this);
case 1:
return years__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
years.cljs$core$IFn$_invoke$arity$0 = years__0;
years.cljs$core$IFn$_invoke$arity$1 = years__1;
return years;
})()
;
/**
* Given a number, returns a Period representing that many months.
* Without an argument, returns a PeriodType representing only months.
*/
cljs_time.core.months = (function() {
var months = null;
var months__0 = (function (){
return months.cljs$core$IFn$_invoke$arity$1(null);
});
var months__1 = (function (n){
return cljs_time.internal.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$137,n);
});
months = function(n){
switch(arguments.length){
case 0:
return months__0.call(this);
case 1:
return months__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
months.cljs$core$IFn$_invoke$arity$0 = months__0;
months.cljs$core$IFn$_invoke$arity$1 = months__1;
return months;
})()
;
/**
* Given a number, returns a Period representing that many weeks.
* Without an argument, returns a PeriodType representing only weeks.
*/
cljs_time.core.weeks = (function() {
var weeks = null;
var weeks__0 = (function (){
return weeks.cljs$core$IFn$_invoke$arity$1(null);
});
var weeks__1 = (function (n){
return cljs_time.internal.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$143,n);
});
weeks = function(n){
switch(arguments.length){
case 0:
return weeks__0.call(this);
case 1:
return weeks__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
weeks.cljs$core$IFn$_invoke$arity$0 = weeks__0;
weeks.cljs$core$IFn$_invoke$arity$1 = weeks__1;
return weeks;
})()
;
/**
* Given a number, returns a Period representing that many days.
* Without an argument, returns a PeriodType representing only days.
*/
cljs_time.core.days = (function() {
var days = null;
var days__0 = (function (){
return days.cljs$core$IFn$_invoke$arity$1(null);
});
var days__1 = (function (n){
return cljs_time.internal.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$136,n);
});
days = function(n){
switch(arguments.length){
case 0:
return days__0.call(this);
case 1:
return days__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
days.cljs$core$IFn$_invoke$arity$0 = days__0;
days.cljs$core$IFn$_invoke$arity$1 = days__1;
return days;
})()
;
/**
* Given a number, returns a Period representing that many hours.
* Without an argument, returns a PeriodType representing only hours.
*/
cljs_time.core.hours = (function() {
var hours = null;
var hours__0 = (function (){
return hours.cljs$core$IFn$_invoke$arity$1(null);
});
var hours__1 = (function (n){
return cljs_time.internal.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$135,n);
});
hours = function(n){
switch(arguments.length){
case 0:
return hours__0.call(this);
case 1:
return hours__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hours.cljs$core$IFn$_invoke$arity$0 = hours__0;
hours.cljs$core$IFn$_invoke$arity$1 = hours__1;
return hours;
})()
;
/**
* Given a number, returns a Period representing that many minutes.
* Without an argument, returns a PeriodType representing only minutes.
*/
cljs_time.core.minutes = (function() {
var minutes = null;
var minutes__0 = (function (){
return minutes.cljs$core$IFn$_invoke$arity$1(null);
});
var minutes__1 = (function (n){
return cljs_time.internal.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$134,n);
});
minutes = function(n){
switch(arguments.length){
case 0:
return minutes__0.call(this);
case 1:
return minutes__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
minutes.cljs$core$IFn$_invoke$arity$0 = minutes__0;
minutes.cljs$core$IFn$_invoke$arity$1 = minutes__1;
return minutes;
})()
;
/**
* Given a number, returns a Period representing that many seconds.
* Without an argument, returns a PeriodType representing only seconds.
*/
cljs_time.core.seconds = (function() {
var seconds = null;
var seconds__0 = (function (){
return seconds.cljs$core$IFn$_invoke$arity$1(null);
});
var seconds__1 = (function (n){
return cljs_time.internal.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$133,n);
});
seconds = function(n){
switch(arguments.length){
case 0:
return seconds__0.call(this);
case 1:
return seconds__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
seconds.cljs$core$IFn$_invoke$arity$0 = seconds__0;
seconds.cljs$core$IFn$_invoke$arity$1 = seconds__1;
return seconds;
})()
;
/**
* Given a number, returns a Period representing that many milliseconds.
* Without an argument, returns a PeriodType representing only milliseconds.
*/
cljs_time.core.millis = (function() {
var millis = null;
var millis__0 = (function (){
return millis.cljs$core$IFn$_invoke$arity$1(null);
});
var millis__1 = (function (n){
return cljs_time.internal.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$132,n);
});
millis = function(n){
switch(arguments.length){
case 0:
return millis__0.call(this);
case 1:
return millis__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
millis.cljs$core$IFn$_invoke$arity$0 = millis__0;
millis.cljs$core$IFn$_invoke$arity$1 = millis__1;
return millis;
})()
;
/**
* Returns a new date/time corresponding to the given date/time moved forwards by
* the given Period(s).
* @param {...*} var_args
*/
cljs_time.core.plus = (function() {
var plus = null;
var plus__2 = (function (dt,p){
return cljs_time.core.plus_(dt,p);
});
var plus__3 = (function() { 
var G__29086__delegate = function (dt,p,ps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs_time.core.plus_,cljs_time.core.plus_(dt,p),ps);
};
var G__29086 = function (dt,p,var_args){
var ps = null;
if (arguments.length > 2) {
var G__29087__i = 0, G__29087__a = new Array(arguments.length -  2);
while (G__29087__i < G__29087__a.length) {G__29087__a[G__29087__i] = arguments[G__29087__i + 2]; ++G__29087__i;}
  ps = new cljs.core.IndexedSeq(G__29087__a,0);
} 
return G__29086__delegate.call(this,dt,p,ps);};
G__29086.cljs$lang$maxFixedArity = 2;
G__29086.cljs$lang$applyTo = (function (arglist__29088){
var dt = cljs.core.first(arglist__29088);
arglist__29088 = cljs.core.next(arglist__29088);
var p = cljs.core.first(arglist__29088);
var ps = cljs.core.rest(arglist__29088);
return G__29086__delegate(dt,p,ps);
});
G__29086.cljs$core$IFn$_invoke$arity$variadic = G__29086__delegate;
return G__29086;
})()
;
plus = function(dt,p,var_args){
var ps = var_args;
switch(arguments.length){
case 2:
return plus__2.call(this,dt,p);
default:
var G__29089 = null;
if (arguments.length > 2) {
var G__29090__i = 0, G__29090__a = new Array(arguments.length -  2);
while (G__29090__i < G__29090__a.length) {G__29090__a[G__29090__i] = arguments[G__29090__i + 2]; ++G__29090__i;}
G__29089 = new cljs.core.IndexedSeq(G__29090__a,0);
}
return plus__3.cljs$core$IFn$_invoke$arity$variadic(dt,p, G__29089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
plus.cljs$lang$maxFixedArity = 2;
plus.cljs$lang$applyTo = plus__3.cljs$lang$applyTo;
plus.cljs$core$IFn$_invoke$arity$2 = plus__2;
plus.cljs$core$IFn$_invoke$arity$variadic = plus__3.cljs$core$IFn$_invoke$arity$variadic;
return plus;
})()
;
/**
* Returns a new date/time object corresponding to the given date/time moved backwards by
* the given Period(s).
* @param {...*} var_args
*/
cljs_time.core.minus = (function() {
var minus = null;
var minus__2 = (function (dt,p){
return cljs_time.core.minus_(dt,p);
});
var minus__3 = (function() { 
var G__29091__delegate = function (dt,p,ps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs_time.core.minus_,cljs_time.core.minus_(dt,p),ps);
};
var G__29091 = function (dt,p,var_args){
var ps = null;
if (arguments.length > 2) {
var G__29092__i = 0, G__29092__a = new Array(arguments.length -  2);
while (G__29092__i < G__29092__a.length) {G__29092__a[G__29092__i] = arguments[G__29092__i + 2]; ++G__29092__i;}
  ps = new cljs.core.IndexedSeq(G__29092__a,0);
} 
return G__29091__delegate.call(this,dt,p,ps);};
G__29091.cljs$lang$maxFixedArity = 2;
G__29091.cljs$lang$applyTo = (function (arglist__29093){
var dt = cljs.core.first(arglist__29093);
arglist__29093 = cljs.core.next(arglist__29093);
var p = cljs.core.first(arglist__29093);
var ps = cljs.core.rest(arglist__29093);
return G__29091__delegate(dt,p,ps);
});
G__29091.cljs$core$IFn$_invoke$arity$variadic = G__29091__delegate;
return G__29091;
})()
;
minus = function(dt,p,var_args){
var ps = var_args;
switch(arguments.length){
case 2:
return minus__2.call(this,dt,p);
default:
var G__29094 = null;
if (arguments.length > 2) {
var G__29095__i = 0, G__29095__a = new Array(arguments.length -  2);
while (G__29095__i < G__29095__a.length) {G__29095__a[G__29095__i] = arguments[G__29095__i + 2]; ++G__29095__i;}
G__29094 = new cljs.core.IndexedSeq(G__29095__a,0);
}
return minus__3.cljs$core$IFn$_invoke$arity$variadic(dt,p, G__29094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
minus.cljs$lang$maxFixedArity = 2;
minus.cljs$lang$applyTo = minus__3.cljs$lang$applyTo;
minus.cljs$core$IFn$_invoke$arity$2 = minus__2;
minus.cljs$core$IFn$_invoke$arity$variadic = minus__3.cljs$core$IFn$_invoke$arity$variadic;
return minus;
})()
;
/**
* Returns a DateTime a supplied period before the present.
* 
* e.g. `(-> 5 years ago)`
*/
cljs_time.core.ago = (function ago(period){
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.now(),period);
});
/**
* Returns a DateTime for yesterday relative to now
*/
cljs_time.core.yesterday = (function yesterday(){
return cljs_time.core.ago(cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1)));
});
/**
* Returns a DateTime a supplied period after the present.
* e.g. `(-> 30 minutes from-now)`
*/
cljs_time.core.from_now = (function from_now(period){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.now(),period);
});
/**
* Returns the earliest of the supplied DateTimes
*/
cljs_time.core.earliest = (function() {
var earliest = null;
var earliest__1 = (function (dts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(earliest,dts);
});
var earliest__2 = (function (dt1,dt2){
if(cljs.core.truth_(cljs_time.core.before_QMARK_(dt1,dt2))){
return dt1;
} else {
return dt2;
}
});
earliest = function(dt1,dt2){
switch(arguments.length){
case 1:
return earliest__1.call(this,dt1);
case 2:
return earliest__2.call(this,dt1,dt2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
earliest.cljs$core$IFn$_invoke$arity$1 = earliest__1;
earliest.cljs$core$IFn$_invoke$arity$2 = earliest__2;
return earliest;
})()
;
/**
* Returns the latest of the supplied DateTimes
*/
cljs_time.core.latest = (function() {
var latest = null;
var latest__1 = (function (dts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(latest,dts);
});
var latest__2 = (function (dt1,dt2){
if(cljs.core.truth_(cljs_time.core.after_QMARK_(dt1,dt2))){
return dt1;
} else {
return dt2;
}
});
latest = function(dt1,dt2){
switch(arguments.length){
case 1:
return latest__1.call(this,dt1);
case 2:
return latest__2.call(this,dt1,dt2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
latest.cljs$core$IFn$_invoke$arity$1 = latest__1;
latest.cljs$core$IFn$_invoke$arity$2 = latest__2;
return latest;
})()
;
/**
* Returns an interval representing the span between the two given ReadableDateTimes.
* Note that intervals are closed on the left and open on the right.
*/
cljs_time.core.interval = (function interval(start,end){
if((start.getTime() <= end.getTime())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),new cljs.core.Symbol(null,"end","end",1372345569,null)))], 0)))].join('')));
}

return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$153,start,cljs.core.constant$keyword$154,end], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$139,cljs.core.constant$keyword$155], null));
});
/**
* Returns the start DateTime of an Interval.
*/
cljs_time.core.start = (function start(in$){
return cljs.core.constant$keyword$153.cljs$core$IFn$_invoke$arity$1(in$);
});
/**
* Returns the end DateTime of an Interval.
*/
cljs_time.core.end = (function end(in$){
return cljs.core.constant$keyword$154.cljs$core$IFn$_invoke$arity$1(in$);
});
/**
* Returns an Interval with an end ReadableDateTime the specified Period after the end
* of the given Interval
* @param {...*} var_args
*/
cljs_time.core.extend = (function() { 
var extend__delegate = function (in$,by){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(in$,cljs.core.constant$keyword$154,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs_time.core.plus,cljs_time.core.end(in$),by));
};
var extend = function (in$,var_args){
var by = null;
if (arguments.length > 1) {
var G__29096__i = 0, G__29096__a = new Array(arguments.length -  1);
while (G__29096__i < G__29096__a.length) {G__29096__a[G__29096__i] = arguments[G__29096__i + 1]; ++G__29096__i;}
  by = new cljs.core.IndexedSeq(G__29096__a,0);
} 
return extend__delegate.call(this,in$,by);};
extend.cljs$lang$maxFixedArity = 1;
extend.cljs$lang$applyTo = (function (arglist__29097){
var in$ = cljs.core.first(arglist__29097);
var by = cljs.core.rest(arglist__29097);
return extend__delegate(in$,by);
});
extend.cljs$core$IFn$_invoke$arity$variadic = extend__delegate;
return extend;
})()
;
/**
* Returns the number of milliseconds in the given Interval.
*/
cljs_time.core.in_millis = (function in_millis(p__29098){
var map__29100 = p__29098;
var map__29100__$1 = ((cljs.core.seq_QMARK_(map__29100))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29100):map__29100);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29100__$1,cljs.core.constant$keyword$154);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29100__$1,cljs.core.constant$keyword$153);
return (end.getTime() - start.getTime());
});
/**
* Returns the number of standard seconds in the given Interval.
*/
cljs_time.core.in_seconds = (function in_seconds(in$){
return ((cljs_time.core.in_millis(in$) / (1000)) | (0));
});
/**
* Returns the number of standard minutes in the given Interval.
*/
cljs_time.core.in_minutes = (function in_minutes(in$){
return ((cljs_time.core.in_seconds(in$) / (60)) | (0));
});
/**
* Returns the number of standard hours in the given Interval.
*/
cljs_time.core.in_hours = (function in_hours(in$){
return ((cljs_time.core.in_minutes(in$) / (60)) | (0));
});
/**
* Returns the number of standard days in the given Interval.
*/
cljs_time.core.in_days = (function in_days(in$){
return ((cljs_time.core.in_hours(in$) / (24)) | (0));
});
/**
* Returns the number of standard weeks in the given Interval.
*/
cljs_time.core.in_weeks = (function in_weeks(in$){
return ((cljs_time.core.in_days(in$) / (7)) | (0));
});
cljs_time.core.month_range = (function month_range(p__29103){
var map__29105 = p__29103;
var map__29105__$1 = ((cljs.core.seq_QMARK_(map__29105))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29105):map__29105);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29105__$1,cljs.core.constant$keyword$154);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29105__$1,cljs.core.constant$keyword$153);
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (map__29105,map__29105__$1,end,start){
return (function (p1__29101_SHARP_){
return cljs_time.core.before_QMARK_(p1__29101_SHARP_,end);
});})(map__29105,map__29105__$1,end,start))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__29105,map__29105__$1,end,start){
return (function (p1__29102_SHARP_){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(start,cljs_time.core.months.cljs$core$IFn$_invoke$arity$1((p1__29102_SHARP_ + (1))));
});})(map__29105,map__29105__$1,end,start))
,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});
cljs_time.core.total_days_in_whole_months = (function total_days_in_whole_months(interval){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29106_SHARP_){
return p1__29106_SHARP_.getNumberOfDaysInMonth();
}),cljs_time.core.month_range(interval));
});
/**
* Returns the number of months in the given Interval.
* 
* For example, the interval 2nd Jan 2012 midnight to 2nd Feb 2012 midnight,
* returns 1 month.
* 
* Likewise, 29th Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.
* 
* But also, 31st Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.
* 
* And, 28th Dec 2012 midnight to 28th Feb 2013 midnight returns 2 months.
*/
cljs_time.core.in_months = (function in_months(p__29107){
var map__29109 = p__29107;
var map__29109__$1 = ((cljs.core.seq_QMARK_(map__29109))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29109):map__29109);
var interval = map__29109__$1;
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29109__$1,cljs.core.constant$keyword$154);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29109__$1,cljs.core.constant$keyword$153);
return cljs.core.count(cljs_time.core.total_days_in_whole_months(interval));
});
/**
* Returns the number of standard years in the given Interval.
*/
cljs_time.core.in_years = (function in_years(p__29110){
var map__29126 = p__29110;
var map__29126__$1 = ((cljs.core.seq_QMARK_(map__29126))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29126):map__29126);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29126__$1,cljs.core.constant$keyword$154);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29126__$1,cljs.core.constant$keyword$153);
var sm = cljs_time.core.month(start);
var sd = cljs_time.core.day(start);
var em = cljs_time.core.month(end);
var ed = cljs_time.core.day(end);
var d1 = (cljs.core.truth_((function (){var and__3738__auto__ = (function (){var G__29129 = sm;
var G__29130 = (2);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__29129,G__29130) : cljs_time.core._EQ_.call(null,G__29129,G__29130));
})();
if(cljs.core.truth_(and__3738__auto__)){
var and__3738__auto____$1 = (function (){var G__29133 = sd;
var G__29134 = (29);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__29133,G__29134) : cljs_time.core._EQ_.call(null,G__29133,G__29134));
})();
if(cljs.core.truth_(and__3738__auto____$1)){
var and__3738__auto____$2 = (function (){var G__29137 = em;
var G__29138 = (2);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__29137,G__29138) : cljs_time.core._EQ_.call(null,G__29137,G__29138));
})();
if(cljs.core.truth_(and__3738__auto____$2)){
var G__29139 = ed;
var G__29140 = (28);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__29139,G__29140) : cljs_time.core._EQ_.call(null,G__29139,G__29140));
} else {
return and__3738__auto____$2;
}
} else {
return and__3738__auto____$1;
}
} else {
return and__3738__auto__;
}
})())?(0):(cljs.core.truth_(cljs_time.core.before_QMARK_(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(start),sm,sd),cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(start),em,ed)))?(0):(cljs.core.truth_(cljs_time.core.after_QMARK_(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(start),sm,sd),cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(start),em,ed)))?(1):(0)
)));
return ((cljs_time.core.year(end) - cljs_time.core.year(start)) - d1);
});
/**
* With 2 arguments: Returns true if the given Interval contains the given
* ReadableDateTime. Note that if the ReadableDateTime is exactly equal to the
* end of the interval, this function returns false.
* 
* With 3 arguments: Returns true if the start ReadablePartial is
* equal to or before and the end ReadablePartial is equal to or after the test
* ReadablePartial.
*/
cljs_time.core.within_QMARK_ = (function() {
var within_QMARK_ = null;
var within_QMARK___2 = (function (p__29141,date){
var map__29150 = p__29141;
var map__29150__$1 = ((cljs.core.seq_QMARK_(map__29150))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29150):map__29150);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29150__$1,cljs.core.constant$keyword$154);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29150__$1,cljs.core.constant$keyword$153);
return within_QMARK_.cljs$core$IFn$_invoke$arity$3(start,end,date);
});
var within_QMARK___3 = (function (start,end,date){
var or__3750__auto__ = (function (){var G__29153 = start;
var G__29154 = date;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__29153,G__29154) : cljs_time.core._EQ_.call(null,G__29153,G__29154));
})();
if(cljs.core.truth_(or__3750__auto__)){
return or__3750__auto__;
} else {
var and__3738__auto__ = cljs_time.core.before_QMARK_(start,date);
if(cljs.core.truth_(and__3738__auto__)){
return cljs_time.core.after_QMARK_(end,date);
} else {
return and__3738__auto__;
}
}
});
within_QMARK_ = function(start,end,date){
switch(arguments.length){
case 2:
return within_QMARK___2.call(this,start,end);
case 3:
return within_QMARK___3.call(this,start,end,date);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
within_QMARK_.cljs$core$IFn$_invoke$arity$2 = within_QMARK___2;
within_QMARK_.cljs$core$IFn$_invoke$arity$3 = within_QMARK___3;
return within_QMARK_;
})()
;
/**
* With 2 arguments: Returns true of the two given Intervals overlap.
* Note that intervals that satisfy abuts? do not satisfy overlaps?
* 
* With 4 arguments: Returns true if the range specified by start-a and end-a
* overlaps with the range specified by start-b and end-b.
*/
cljs_time.core.overlaps_QMARK_ = (function() {
var overlaps_QMARK_ = null;
var overlaps_QMARK___2 = (function (p__29155,p__29156){
var map__29185 = p__29155;
var map__29185__$1 = ((cljs.core.seq_QMARK_(map__29185))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29185):map__29185);
var start_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29185__$1,cljs.core.constant$keyword$153);
var end_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29185__$1,cljs.core.constant$keyword$154);
var map__29186 = p__29156;
var map__29186__$1 = ((cljs.core.seq_QMARK_(map__29186))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29186):map__29186);
var start_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29186__$1,cljs.core.constant$keyword$153);
var end_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29186__$1,cljs.core.constant$keyword$154);
var and__3738__auto__ = cljs.core.not((function (){var or__3750__auto__ = (function (){var G__29195 = start_a;
var G__29196 = end_b;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__29195,G__29196) : cljs_time.core._EQ_.call(null,G__29195,G__29196));
})();
if(cljs.core.truth_(or__3750__auto__)){
return or__3750__auto__;
} else {
var G__29197 = end_a;
var G__29198 = start_b;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__29197,G__29198) : cljs_time.core._EQ_.call(null,G__29197,G__29198));
}
})());
if(and__3738__auto__){
return overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4(start_a,end_a,start_b,end_b);
} else {
return and__3738__auto__;
}
});
var overlaps_QMARK___4 = (function (start_a,end_a,start_b,end_b){
var or__3750__auto__ = (function (){var and__3738__auto__ = cljs_time.core.before_QMARK_(start_b,end_a);
if(cljs.core.truth_(and__3738__auto__)){
return cljs_time.core.after_QMARK_(end_b,start_a);
} else {
return and__3738__auto__;
}
})();
if(cljs.core.truth_(or__3750__auto__)){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (function (){var and__3738__auto__ = cljs_time.core.after_QMARK_(end_b,start_a);
if(cljs.core.truth_(and__3738__auto__)){
return cljs_time.core.before_QMARK_(start_b,end_a);
} else {
return and__3738__auto__;
}
})();
if(cljs.core.truth_(or__3750__auto____$1)){
return or__3750__auto____$1;
} else {
var or__3750__auto____$2 = (function (){var G__29201 = start_a;
var G__29202 = end_b;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__29201,G__29202) : cljs_time.core._EQ_.call(null,G__29201,G__29202));
})();
if(cljs.core.truth_(or__3750__auto____$2)){
return or__3750__auto____$2;
} else {
var G__29203 = start_b;
var G__29204 = end_a;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__29203,G__29204) : cljs_time.core._EQ_.call(null,G__29203,G__29204));
}
}
}
});
overlaps_QMARK_ = function(start_a,end_a,start_b,end_b){
switch(arguments.length){
case 2:
return overlaps_QMARK___2.call(this,start_a,end_a);
case 4:
return overlaps_QMARK___4.call(this,start_a,end_a,start_b,end_b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2 = overlaps_QMARK___2;
overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4 = overlaps_QMARK___4;
return overlaps_QMARK_;
})()
;
/**
* Returns true if Interval a abuts b, i.e. then end of a is exactly the
* beginning of b.
*/
cljs_time.core.abuts_QMARK_ = (function abuts_QMARK_(p__29205,p__29206){
var map__29215 = p__29205;
var map__29215__$1 = ((cljs.core.seq_QMARK_(map__29215))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29215):map__29215);
var start_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29215__$1,cljs.core.constant$keyword$153);
var end_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29215__$1,cljs.core.constant$keyword$154);
var map__29216 = p__29206;
var map__29216__$1 = ((cljs.core.seq_QMARK_(map__29216))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29216):map__29216);
var start_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29216__$1,cljs.core.constant$keyword$153);
var end_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29216__$1,cljs.core.constant$keyword$154);
var or__3750__auto__ = (function (){var G__29219 = start_a;
var G__29220 = end_b;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__29219,G__29220) : cljs_time.core._EQ_.call(null,G__29219,G__29220));
})();
if(cljs.core.truth_(or__3750__auto__)){
return or__3750__auto__;
} else {
var G__29221 = end_a;
var G__29222 = start_b;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__29221,G__29222) : cljs_time.core._EQ_.call(null,G__29221,G__29222));
}
});
cljs_time.core.date_QMARK_ = (function date_QMARK_(x){
var G__29224 = x;
if(G__29224){
var bit__4431__auto__ = null;
if(cljs.core.truth_((function (){var or__3750__auto__ = bit__4431__auto__;
if(cljs.core.truth_(or__3750__auto__)){
return or__3750__auto__;
} else {
return G__29224.cljs_time$core$DateTimeProtocol$;
}
})())){
return true;
} else {
if((!G__29224.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs_time.core.DateTimeProtocol,G__29224);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs_time.core.DateTimeProtocol,G__29224);
}
});
cljs_time.core.interval_QMARK_ = (function interval_QMARK_(x){
var G__29227 = cljs.core.constant$keyword$155;
var G__29228 = cljs.core.constant$keyword$139.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x));
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__29227,G__29228) : cljs_time.core._EQ_.call(null,G__29227,G__29228));
});
cljs_time.core.period_QMARK_ = (function period_QMARK_(x){
var G__29231 = cljs.core.constant$keyword$142;
var G__29232 = cljs.core.constant$keyword$139.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x));
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__29231,G__29232) : cljs_time.core._EQ_.call(null,G__29231,G__29232));
});
cljs_time.core.period_type_QMARK_ = (function period_type_QMARK_(type,x){
var and__3738__auto__ = cljs_time.core.period_QMARK_(x);
if(cljs.core.truth_(and__3738__auto__)){
return cljs.core.contains_QMARK_(x,type);
} else {
return and__3738__auto__;
}
});
/**
* Returns true if the given value is an instance of Years
*/
cljs_time.core.years_QMARK_ = (function years_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$138,val);
});
/**
* Returns true if the given value is an instance of Months
*/
cljs_time.core.months_QMARK_ = (function months_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$137,val);
});
/**
* Returns true if the given value is an instance of Weeks
*/
cljs_time.core.weeks_QMARK_ = (function weeks_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$143,val);
});
/**
* Returns true if the given value is an instance of Days
*/
cljs_time.core.days_QMARK_ = (function days_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$136,val);
});
/**
* Returns true if the given value is an instance of Hours
*/
cljs_time.core.hours_QMARK_ = (function hours_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$135,val);
});
/**
* Returns true if the given value is an instance of Minutes
*/
cljs_time.core.minutes_QMARK_ = (function minutes_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$134,val);
});
/**
* Returns true if the given value is an instance of Seconds
*/
cljs_time.core.seconds_QMARK_ = (function seconds_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$133,val);
});
cljs_time.core.mins_ago = (function mins_ago(d){
return cljs_time.core.in_minutes(cljs_time.core.interval(d,cljs_time.core.now()));
});
cljs_time.core.last_day_of_the_month = (function() {
var last_day_of_the_month = null;
var last_day_of_the_month__1 = (function (dt){
return last_day_of_the_month.cljs$core$IFn$_invoke$arity$2(cljs_time.core.year(dt),cljs_time.core.month(dt));
});
var last_day_of_the_month__2 = (function (year,month){
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(year,(month + (1)),(1)),cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1)));
});
last_day_of_the_month = function(year,month){
switch(arguments.length){
case 1:
return last_day_of_the_month__1.call(this,year);
case 2:
return last_day_of_the_month__2.call(this,year,month);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
last_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = last_day_of_the_month__1;
last_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = last_day_of_the_month__2;
return last_day_of_the_month;
})()
;
cljs_time.core.number_of_days_in_the_month = (function() {
var number_of_days_in_the_month = null;
var number_of_days_in_the_month__1 = (function (dt){
return number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2(cljs_time.core.year(dt),cljs_time.core.month(dt));
});
var number_of_days_in_the_month__2 = (function (year,month){
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2(year,month).getDate();
});
number_of_days_in_the_month = function(year,month){
switch(arguments.length){
case 1:
return number_of_days_in_the_month__1.call(this,year);
case 2:
return number_of_days_in_the_month__2.call(this,year,month);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$1 = number_of_days_in_the_month__1;
number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2 = number_of_days_in_the_month__2;
return number_of_days_in_the_month;
})()
;
cljs_time.core.first_day_of_the_month = (function() {
var first_day_of_the_month = null;
var first_day_of_the_month__1 = (function (dt){
return first_day_of_the_month.cljs$core$IFn$_invoke$arity$2(cljs_time.core.year(dt),cljs_time.core.month(dt));
});
var first_day_of_the_month__2 = (function (year,month){
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(year,month,(1));
});
first_day_of_the_month = function(year,month){
switch(arguments.length){
case 1:
return first_day_of_the_month__1.call(this,year);
case 2:
return first_day_of_the_month__2.call(this,year,month);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
first_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = first_day_of_the_month__1;
first_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = first_day_of_the_month__2;
return first_day_of_the_month;
})()
;
cljs_time.core.__GT_period = (function (){var method_table__4647__auto__ = (function (){var G__29239 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29239) : cljs.core.atom.call(null,G__29239));
})();
var prefer_table__4648__auto__ = (function (){var G__29240 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29240) : cljs.core.atom.call(null,G__29240));
})();
var method_cache__4649__auto__ = (function (){var G__29241 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29241) : cljs.core.atom.call(null,G__29241));
})();
var cached_hierarchy__4650__auto__ = (function (){var G__29242 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29242) : cljs.core.atom.call(null,G__29242));
})();
var hierarchy__4651__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$157,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs-time.core","->period"),cljs.core.meta,cljs.core.constant$keyword$7,hierarchy__4651__auto__,method_table__4647__auto__,prefer_table__4648__auto__,method_cache__4649__auto__,cached_hierarchy__4650__auto__));
})();
cljs_time.core.__GT_period.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$139,cljs.core.constant$keyword$155], null),(function (p__29243){
var map__29244 = p__29243;
var map__29244__$1 = ((cljs.core.seq_QMARK_(map__29244))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29244):map__29244);
var interval = map__29244__$1;
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29244__$1,cljs.core.constant$keyword$154);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29244__$1,cljs.core.constant$keyword$153);
var years = cljs_time.core.in_years(interval);
var start_year = cljs_time.core.year(start);
var leap_years = cljs.core.count(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.false_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.core.leap_year_QMARK_,cljs.core.range.cljs$core$IFn$_invoke$arity$2(start_year,(start_year + years)))));
var start_month = cljs_time.core.month(start);
var days_in_months = cljs_time.core.total_days_in_whole_months(interval);
var months = cljs.core.count(days_in_months);
var days_to_remove = ((((365) * years) + leap_years) + cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,days_in_months));
var days = (cljs_time.core.in_days(interval) - days_to_remove);
var hours_to_remove = ((24) * (days + days_to_remove));
var hours = (cljs_time.core.in_hours(interval) - hours_to_remove);
var minutes_to_remove = ((60) * (hours + hours_to_remove));
var minutes = (cljs_time.core.in_minutes(interval) - minutes_to_remove);
var seconds_to_remove = ((60) * (minutes + minutes_to_remove));
var seconds = (cljs_time.core.in_seconds(interval) - seconds_to_remove);
return cljs_time.internal.core.period.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$138,years,cljs.core.array_seq([cljs.core.constant$keyword$137,months,cljs.core.constant$keyword$136,days,cljs.core.constant$keyword$135,hours,cljs.core.constant$keyword$134,minutes,cljs.core.constant$keyword$133,seconds,cljs.core.constant$keyword$132,(cljs_time.core.in_millis(interval) - ((1000) * (seconds + seconds_to_remove)))], 0));
}));
cljs_time.core.today_at = (function() {
var today_at = null;
var today_at__2 = (function (hours,minutes){
return today_at.cljs$core$IFn$_invoke$arity$3(hours,minutes,(0));
});
var today_at__3 = (function (hours,minutes,seconds){
return today_at.cljs$core$IFn$_invoke$arity$4(hours,minutes,seconds,(0));
});
var today_at__4 = (function (hours,minutes,seconds,millis){
var midnight = (new goog.date.Date());
var G__29253 = (new goog.date.UtcDateTime((0)));
G__29253.setYear(midnight.getYear());

G__29253.setMonth(midnight.getMonth());

G__29253.setDate(midnight.getDate());

G__29253.setHours(hours);

G__29253.setMinutes(minutes);

G__29253.setSeconds(seconds);

G__29253.setMilliseconds(millis);

return G__29253;
});
today_at = function(hours,minutes,seconds,millis){
switch(arguments.length){
case 2:
return today_at__2.call(this,hours,minutes);
case 3:
return today_at__3.call(this,hours,minutes,seconds);
case 4:
return today_at__4.call(this,hours,minutes,seconds,millis);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
today_at.cljs$core$IFn$_invoke$arity$2 = today_at__2;
today_at.cljs$core$IFn$_invoke$arity$3 = today_at__3;
today_at.cljs$core$IFn$_invoke$arity$4 = today_at__4;
return today_at;
})()
;
cljs_time.core.do_at_STAR_ = (function do_at_STAR_(base_date_time,body_fn){
var _STAR_sys_time_STAR_29255 = cljs_time.core._STAR_sys_time_STAR_;
try{cljs_time.core._STAR_sys_time_STAR_ = base_date_time;

return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}finally {cljs_time.core._STAR_sys_time_STAR_ = _STAR_sys_time_STAR_29255;
}});
