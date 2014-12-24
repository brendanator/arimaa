// Compiled by ClojureScript 0.0-2511
goog.provide('cljs_time.core');
goog.require('cljs.core');
goog.require('goog.i18n.TimeZone');
goog.require('goog.date.UtcDateTime');
goog.require('goog.date.DateTime');
goog.require('goog.date.Date');
goog.require('cljs_time.internal.core');
cljs_time.core._STAR_sys_time_STAR_ = null;
cljs_time.core._EQ_ = cljs_time.internal.core._EQ_;

cljs_time.core.DateTimeProtocol = (function (){var obj26850 = {};
return obj26850;
})();

cljs_time.core.year = (function year(this$){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs_time$core$DateTimeProtocol$year$arity$1;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$year$arity$1(this$);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs_time.core.year[(function (){var G__26854 = x__4274__auto__;
return goog.typeOf(G__26854);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs_time.core.year["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.year",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.month = (function month(this$){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs_time$core$DateTimeProtocol$month$arity$1;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$month$arity$1(this$);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs_time.core.month[(function (){var G__26858 = x__4274__auto__;
return goog.typeOf(G__26858);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs_time.core.month["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.month",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.day = (function day(this$){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs_time$core$DateTimeProtocol$day$arity$1;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$day$arity$1(this$);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs_time.core.day[(function (){var G__26862 = x__4274__auto__;
return goog.typeOf(G__26862);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs_time.core.day["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.day",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.day_of_week = (function day_of_week(this$){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1(this$);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs_time.core.day_of_week[(function (){var G__26866 = x__4274__auto__;
return goog.typeOf(G__26866);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs_time.core.day_of_week["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.day-of-week",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.hour = (function hour(this$){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs_time$core$DateTimeProtocol$hour$arity$1;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$hour$arity$1(this$);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs_time.core.hour[(function (){var G__26870 = x__4274__auto__;
return goog.typeOf(G__26870);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs_time.core.hour["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.hour",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.minute = (function minute(this$){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs_time$core$DateTimeProtocol$minute$arity$1;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$minute$arity$1(this$);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs_time.core.minute[(function (){var G__26874 = x__4274__auto__;
return goog.typeOf(G__26874);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs_time.core.minute["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.minute",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.sec = (function sec(this$){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs_time$core$DateTimeProtocol$sec$arity$1;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$sec$arity$1(this$);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs_time.core.sec[(function (){var G__26878 = x__4274__auto__;
return goog.typeOf(G__26878);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs_time.core.sec["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.sec",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.second = (function second(this$){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs_time$core$DateTimeProtocol$second$arity$1;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$second$arity$1(this$);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs_time.core.second[(function (){var G__26882 = x__4274__auto__;
return goog.typeOf(G__26882);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs_time.core.second["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.second",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.milli = (function milli(this$){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs_time$core$DateTimeProtocol$milli$arity$1;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$milli$arity$1(this$);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs_time.core.milli[(function (){var G__26886 = x__4274__auto__;
return goog.typeOf(G__26886);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs_time.core.milli["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.milli",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.after_QMARK_ = (function after_QMARK_(this$,that){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2(this$,that);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs_time.core.after_QMARK_[(function (){var G__26890 = x__4274__auto__;
return goog.typeOf(G__26890);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs_time.core.after_QMARK_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.after?",this$);
}
}
})().call(null,this$,that);
}
});

cljs_time.core.before_QMARK_ = (function before_QMARK_(this$,that){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2(this$,that);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs_time.core.before_QMARK_[(function (){var G__26894 = x__4274__auto__;
return goog.typeOf(G__26894);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs_time.core.before_QMARK_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.before?",this$);
}
}
})().call(null,this$,that);
}
});

cljs_time.core.plus_ = (function plus_(this$,period){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs_time$core$DateTimeProtocol$plus_$arity$2;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$plus_$arity$2(this$,period);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs_time.core.plus_[(function (){var G__26898 = x__4274__auto__;
return goog.typeOf(G__26898);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs_time.core.plus_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.plus-",this$);
}
}
})().call(null,this$,period);
}
});

cljs_time.core.minus_ = (function minus_(this$,period){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs_time$core$DateTimeProtocol$minus_$arity$2;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$minus_$arity$2(this$,period);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs_time.core.minus_[(function (){var G__26902 = x__4274__auto__;
return goog.typeOf(G__26902);
})()]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs_time.core.minus_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.minus-",this$);
}
}
})().call(null,this$,period);
}
});

cljs_time.core.periods = (function (){var fixed_time_fn = (function (f,set_fn,op,date,value){
var date__$1 = date.clone();
var G__26913_26932 = date__$1;
var G__26914_26933 = (function (){var G__26915 = (function (){var G__26917 = date__$1;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26917) : f.call(null,G__26917));
})();
var G__26916 = value;
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__26915,G__26916) : op.call(null,G__26915,G__26916));
})();
(set_fn.cljs$core$IFn$_invoke$arity$2 ? set_fn.cljs$core$IFn$_invoke$arity$2(G__26913_26932,G__26914_26933) : set_fn.call(null,G__26913_26932,G__26914_26933));

return date__$1;
});
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$111,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.milli,((function (fixed_time_fn){
return (function (p1__26903_SHARP_,p2__26904_SHARP_){
return p1__26903_SHARP_.setMilliseconds(p2__26904_SHARP_);
});})(fixed_time_fn))
),cljs.core.constant$keyword$112,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.second,((function (fixed_time_fn){
return (function (p1__26905_SHARP_,p2__26906_SHARP_){
return p1__26905_SHARP_.setSeconds(p2__26906_SHARP_);
});})(fixed_time_fn))
),cljs.core.constant$keyword$113,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.minute,((function (fixed_time_fn){
return (function (p1__26907_SHARP_,p2__26908_SHARP_){
return p1__26907_SHARP_.setMinutes(p2__26908_SHARP_);
});})(fixed_time_fn))
),cljs.core.constant$keyword$114,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.hour,((function (fixed_time_fn){
return (function (p1__26909_SHARP_,p2__26910_SHARP_){
return p1__26909_SHARP_.setHours(p2__26910_SHARP_);
});})(fixed_time_fn))
),cljs.core.constant$keyword$115,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.day,((function (fixed_time_fn){
return (function (p1__26911_SHARP_,p2__26912_SHARP_){
return p1__26911_SHARP_.setDate(p2__26912_SHARP_);
});})(fixed_time_fn))
),cljs.core.constant$keyword$122,((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
date__$1.setDate((function (){var G__26918 = cljs_time.core.day(date__$1);
var G__26919 = ((7) * value);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__26918,G__26919) : op.call(null,G__26918,G__26919));
})());

return date__$1;
});})(fixed_time_fn))
,cljs.core.constant$keyword$116,((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
var m = (function (){var G__26920 = cljs_time.core.month(date__$1);
var G__26921 = value;
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__26920,G__26921) : op.call(null,G__26920,G__26921));
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
,cljs.core.constant$keyword$117,((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_((function (){var and__3618__auto__ = cljs_time.internal.core.leap_year_QMARK_(cljs_time.core.year(date__$1));
if(and__3618__auto__){
var and__3618__auto____$1 = (function (){var G__26926 = (2);
var G__26927 = cljs_time.core.month(date__$1);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__26926,G__26927) : cljs_time.core._EQ_.call(null,G__26926,G__26927));
})();
if(cljs.core.truth_(and__3618__auto____$1)){
var G__26928 = (29);
var G__26929 = cljs_time.core.day(date__$1);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__26928,G__26929) : cljs_time.core._EQ_.call(null,G__26928,G__26929));
} else {
return and__3618__auto____$1;
}
} else {
return and__3618__auto__;
}
})())){
date__$1.setDate((28));
} else {
}

date__$1.setYear((function (){var G__26930 = cljs_time.core.year(date__$1);
var G__26931 = value;
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__26930,G__26931) : op.call(null,G__26930,G__26931));
})());

return date__$1;
});})(fixed_time_fn))
], null);
})();
cljs_time.core.period_fn = (function period_fn(p){
return (function (operator,date){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__26935_SHARP_,p2__26934_SHARP_){
return (function (){var G__26937 = cljs.core.key(p2__26934_SHARP_);
return (cljs_time.core.periods.cljs$core$IFn$_invoke$arity$1 ? cljs_time.core.periods.cljs$core$IFn$_invoke$arity$1(G__26937) : cljs_time.core.periods.call(null,G__26937));
})().call(null,operator,p1__26935_SHARP_,cljs.core.val(p2__26934_SHARP_));
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
if(cljs.core.truth_((function (){var G__26938 = d;
var G__26939 = (0);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__26938,G__26939) : cljs_time.core._EQ_.call(null,G__26938,G__26939));
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
if(cljs.core.truth_((function (){var G__26940 = d;
var G__26941 = (0);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__26940,G__26941) : cljs_time.core._EQ_.call(null,G__26940,G__26941));
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
if(cljs.core.truth_((function (){var G__26942 = d;
var G__26943 = (0);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__26942,G__26943) : cljs_time.core._EQ_.call(null,G__26942,G__26943));
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
cljs_time.core.utc = (function (){var G__26944 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$123,"UTC",cljs.core.constant$keyword$124,(0),cljs.core.constant$keyword$125,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["UTC"], null),cljs.core.constant$keyword$126,cljs.core.PersistentVector.EMPTY], null));
return goog.i18n.TimeZone.createTimeZone(G__26944);
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
var G__26946 = datetime__$1;
G__26946.setHours((0));

G__26946.setMinutes((0));

G__26946.setSeconds((0));

G__26946.setMilliseconds((0));

return G__26946;
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
var G__26948 = (new goog.date.UtcDateTime());
G__26948.setTime((0));

return G__26948;
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
var sign = (((hours < (0)))?cljs.core.constant$keyword$127:cljs.core.constant$keyword$128);
var fmt = [cljs.core.str("UTC%s%02d"),cljs.core.str((cljs.core.truth_(minutes)?":%02d":null))].join('');
var hours__$1 = (((hours < (0)))?((-1) * hours):hours);
var tz_name = (cljs.core.truth_(minutes)?cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic(fmt,cljs.core.array_seq([cljs.core.name(sign),hours__$1,minutes], 0)):cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic(fmt,cljs.core.array_seq([cljs.core.name(sign),hours__$1], 0)));
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$123,tz_name,cljs.core.constant$keyword$129,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sign,hours__$1,(function (){var or__3630__auto__ = minutes;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return (0);
}
})(),(0)], null),cljs.core.constant$keyword$130,"-",cljs.core.constant$keyword$125,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tz_name], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$118,cljs.core.constant$keyword$131], null));
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
var map__27051 = cljs_time.core.default_time_zone();
var map__27051__$1 = ((cljs.core.seq_QMARK_(map__27051))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27051):map__27051);
var vec__27052 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27051__$1,cljs.core.constant$keyword$129);
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27052,(0),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27052,(1),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27052,(2),null);
var secs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27052,(3),null);
var f = (cljs.core.truth_((function (){var G__27053 = cljs.core.constant$keyword$128;
var G__27054 = sign;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__27053,G__27054) : cljs_time.core._EQ_.call(null,G__27053,G__27054));
})())?cljs.core._PLUS_:cljs.core._);
return (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate(),(function (){var G__27055 = hours;
var G__27056 = dt.getHours();
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27055,G__27056) : f.call(null,G__27055,G__27056));
})(),(function (){var G__27057 = minutes;
var G__27058 = dt.getMinutes();
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27057,G__27058) : f.call(null,G__27057,G__27058));
})(),(function (){var G__27059 = secs;
var G__27060 = dt.getSeconds();
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27059,G__27060) : f.call(null,G__27059,G__27060));
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
return cljs_time.internal.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$117,n);
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
return cljs_time.internal.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$116,n);
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
return cljs_time.internal.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$122,n);
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
return cljs_time.internal.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$115,n);
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
return cljs_time.internal.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$114,n);
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
return cljs_time.internal.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$113,n);
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
return cljs_time.internal.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$112,n);
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
return cljs_time.internal.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$111,n);
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
var G__27069__delegate = function (dt,p,ps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs_time.core.plus_,cljs_time.core.plus_(dt,p),ps);
};
var G__27069 = function (dt,p,var_args){
var ps = null;
if (arguments.length > 2) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__27069__delegate.call(this,dt,p,ps);};
G__27069.cljs$lang$maxFixedArity = 2;
G__27069.cljs$lang$applyTo = (function (arglist__27070){
var dt = cljs.core.first(arglist__27070);
arglist__27070 = cljs.core.next(arglist__27070);
var p = cljs.core.first(arglist__27070);
var ps = cljs.core.rest(arglist__27070);
return G__27069__delegate(dt,p,ps);
});
G__27069.cljs$core$IFn$_invoke$arity$variadic = G__27069__delegate;
return G__27069;
})()
;
plus = function(dt,p,var_args){
var ps = var_args;
switch(arguments.length){
case 2:
return plus__2.call(this,dt,p);
default:
return plus__3.cljs$core$IFn$_invoke$arity$variadic(dt,p, cljs.core.array_seq(arguments, 2));
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
var G__27071__delegate = function (dt,p,ps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs_time.core.minus_,cljs_time.core.minus_(dt,p),ps);
};
var G__27071 = function (dt,p,var_args){
var ps = null;
if (arguments.length > 2) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__27071__delegate.call(this,dt,p,ps);};
G__27071.cljs$lang$maxFixedArity = 2;
G__27071.cljs$lang$applyTo = (function (arglist__27072){
var dt = cljs.core.first(arglist__27072);
arglist__27072 = cljs.core.next(arglist__27072);
var p = cljs.core.first(arglist__27072);
var ps = cljs.core.rest(arglist__27072);
return G__27071__delegate(dt,p,ps);
});
G__27071.cljs$core$IFn$_invoke$arity$variadic = G__27071__delegate;
return G__27071;
})()
;
minus = function(dt,p,var_args){
var ps = var_args;
switch(arguments.length){
case 2:
return minus__2.call(this,dt,p);
default:
return minus__3.cljs$core$IFn$_invoke$arity$variadic(dt,p, cljs.core.array_seq(arguments, 2));
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

return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$132,start,cljs.core.constant$keyword$133,end], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$118,cljs.core.constant$keyword$134], null));
});
/**
* Returns the start DateTime of an Interval.
*/
cljs_time.core.start = (function start(in$){
return cljs.core.constant$keyword$132.cljs$core$IFn$_invoke$arity$1(in$);
});
/**
* Returns the end DateTime of an Interval.
*/
cljs_time.core.end = (function end(in$){
return cljs.core.constant$keyword$133.cljs$core$IFn$_invoke$arity$1(in$);
});
/**
* Returns an Interval with an end ReadableDateTime the specified Period after the end
* of the given Interval
* @param {...*} var_args
*/
cljs_time.core.extend = (function() { 
var extend__delegate = function (in$,by){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(in$,cljs.core.constant$keyword$133,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs_time.core.plus,cljs_time.core.end(in$),by));
};
var extend = function (in$,var_args){
var by = null;
if (arguments.length > 1) {
  by = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return extend__delegate.call(this,in$,by);};
extend.cljs$lang$maxFixedArity = 1;
extend.cljs$lang$applyTo = (function (arglist__27073){
var in$ = cljs.core.first(arglist__27073);
var by = cljs.core.rest(arglist__27073);
return extend__delegate(in$,by);
});
extend.cljs$core$IFn$_invoke$arity$variadic = extend__delegate;
return extend;
})()
;
/**
* Returns the number of milliseconds in the given Interval.
*/
cljs_time.core.in_millis = (function in_millis(p__27074){
var map__27076 = p__27074;
var map__27076__$1 = ((cljs.core.seq_QMARK_(map__27076))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27076):map__27076);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27076__$1,cljs.core.constant$keyword$133);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27076__$1,cljs.core.constant$keyword$132);
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
cljs_time.core.month_range = (function month_range(p__27079){
var map__27081 = p__27079;
var map__27081__$1 = ((cljs.core.seq_QMARK_(map__27081))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27081):map__27081);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27081__$1,cljs.core.constant$keyword$133);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27081__$1,cljs.core.constant$keyword$132);
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (map__27081,map__27081__$1,end,start){
return (function (p1__27077_SHARP_){
return cljs_time.core.before_QMARK_(p1__27077_SHARP_,end);
});})(map__27081,map__27081__$1,end,start))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__27081,map__27081__$1,end,start){
return (function (p1__27078_SHARP_){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(start,cljs_time.core.months.cljs$core$IFn$_invoke$arity$1((p1__27078_SHARP_ + (1))));
});})(map__27081,map__27081__$1,end,start))
,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});
cljs_time.core.total_days_in_whole_months = (function total_days_in_whole_months(interval){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27082_SHARP_){
return p1__27082_SHARP_.getNumberOfDaysInMonth();
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
cljs_time.core.in_months = (function in_months(p__27083){
var map__27085 = p__27083;
var map__27085__$1 = ((cljs.core.seq_QMARK_(map__27085))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27085):map__27085);
var interval = map__27085__$1;
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27085__$1,cljs.core.constant$keyword$133);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27085__$1,cljs.core.constant$keyword$132);
return cljs.core.count(cljs_time.core.total_days_in_whole_months(interval));
});
/**
* Returns the number of standard years in the given Interval.
*/
cljs_time.core.in_years = (function in_years(p__27086){
var map__27102 = p__27086;
var map__27102__$1 = ((cljs.core.seq_QMARK_(map__27102))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27102):map__27102);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27102__$1,cljs.core.constant$keyword$133);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27102__$1,cljs.core.constant$keyword$132);
var sm = cljs_time.core.month(start);
var sd = cljs_time.core.day(start);
var em = cljs_time.core.month(end);
var ed = cljs_time.core.day(end);
var d1 = (cljs.core.truth_((function (){var and__3618__auto__ = (function (){var G__27105 = sm;
var G__27106 = (2);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__27105,G__27106) : cljs_time.core._EQ_.call(null,G__27105,G__27106));
})();
if(cljs.core.truth_(and__3618__auto__)){
var and__3618__auto____$1 = (function (){var G__27109 = sd;
var G__27110 = (29);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__27109,G__27110) : cljs_time.core._EQ_.call(null,G__27109,G__27110));
})();
if(cljs.core.truth_(and__3618__auto____$1)){
var and__3618__auto____$2 = (function (){var G__27113 = em;
var G__27114 = (2);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__27113,G__27114) : cljs_time.core._EQ_.call(null,G__27113,G__27114));
})();
if(cljs.core.truth_(and__3618__auto____$2)){
var G__27115 = ed;
var G__27116 = (28);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__27115,G__27116) : cljs_time.core._EQ_.call(null,G__27115,G__27116));
} else {
return and__3618__auto____$2;
}
} else {
return and__3618__auto____$1;
}
} else {
return and__3618__auto__;
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
var within_QMARK___2 = (function (p__27117,date){
var map__27126 = p__27117;
var map__27126__$1 = ((cljs.core.seq_QMARK_(map__27126))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27126):map__27126);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27126__$1,cljs.core.constant$keyword$133);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27126__$1,cljs.core.constant$keyword$132);
return within_QMARK_.cljs$core$IFn$_invoke$arity$3(start,end,date);
});
var within_QMARK___3 = (function (start,end,date){
var or__3630__auto__ = (function (){var G__27129 = start;
var G__27130 = date;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__27129,G__27130) : cljs_time.core._EQ_.call(null,G__27129,G__27130));
})();
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
var and__3618__auto__ = cljs_time.core.before_QMARK_(start,date);
if(cljs.core.truth_(and__3618__auto__)){
return cljs_time.core.after_QMARK_(end,date);
} else {
return and__3618__auto__;
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
var overlaps_QMARK___2 = (function (p__27131,p__27132){
var map__27161 = p__27131;
var map__27161__$1 = ((cljs.core.seq_QMARK_(map__27161))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27161):map__27161);
var start_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27161__$1,cljs.core.constant$keyword$132);
var end_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27161__$1,cljs.core.constant$keyword$133);
var map__27162 = p__27132;
var map__27162__$1 = ((cljs.core.seq_QMARK_(map__27162))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27162):map__27162);
var start_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27162__$1,cljs.core.constant$keyword$132);
var end_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27162__$1,cljs.core.constant$keyword$133);
var and__3618__auto__ = cljs.core.not((function (){var or__3630__auto__ = (function (){var G__27171 = start_a;
var G__27172 = end_b;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__27171,G__27172) : cljs_time.core._EQ_.call(null,G__27171,G__27172));
})();
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
var G__27173 = end_a;
var G__27174 = start_b;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__27173,G__27174) : cljs_time.core._EQ_.call(null,G__27173,G__27174));
}
})());
if(and__3618__auto__){
return overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4(start_a,end_a,start_b,end_b);
} else {
return and__3618__auto__;
}
});
var overlaps_QMARK___4 = (function (start_a,end_a,start_b,end_b){
var or__3630__auto__ = (function (){var and__3618__auto__ = cljs_time.core.before_QMARK_(start_b,end_a);
if(cljs.core.truth_(and__3618__auto__)){
return cljs_time.core.after_QMARK_(end_b,start_a);
} else {
return and__3618__auto__;
}
})();
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (function (){var and__3618__auto__ = cljs_time.core.after_QMARK_(end_b,start_a);
if(cljs.core.truth_(and__3618__auto__)){
return cljs_time.core.before_QMARK_(start_b,end_a);
} else {
return and__3618__auto__;
}
})();
if(cljs.core.truth_(or__3630__auto____$1)){
return or__3630__auto____$1;
} else {
var or__3630__auto____$2 = (function (){var G__27177 = start_a;
var G__27178 = end_b;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__27177,G__27178) : cljs_time.core._EQ_.call(null,G__27177,G__27178));
})();
if(cljs.core.truth_(or__3630__auto____$2)){
return or__3630__auto____$2;
} else {
var G__27179 = start_b;
var G__27180 = end_a;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__27179,G__27180) : cljs_time.core._EQ_.call(null,G__27179,G__27180));
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
cljs_time.core.abuts_QMARK_ = (function abuts_QMARK_(p__27181,p__27182){
var map__27191 = p__27181;
var map__27191__$1 = ((cljs.core.seq_QMARK_(map__27191))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27191):map__27191);
var start_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27191__$1,cljs.core.constant$keyword$132);
var end_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27191__$1,cljs.core.constant$keyword$133);
var map__27192 = p__27182;
var map__27192__$1 = ((cljs.core.seq_QMARK_(map__27192))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27192):map__27192);
var start_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27192__$1,cljs.core.constant$keyword$132);
var end_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27192__$1,cljs.core.constant$keyword$133);
var or__3630__auto__ = (function (){var G__27195 = start_a;
var G__27196 = end_b;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__27195,G__27196) : cljs_time.core._EQ_.call(null,G__27195,G__27196));
})();
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
var G__27197 = end_a;
var G__27198 = start_b;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__27197,G__27198) : cljs_time.core._EQ_.call(null,G__27197,G__27198));
}
});
cljs_time.core.date_QMARK_ = (function date_QMARK_(x){
var G__27200 = x;
if(G__27200){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__27200.cljs_time$core$DateTimeProtocol$;
}
})())){
return true;
} else {
if((!G__27200.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs_time.core.DateTimeProtocol,G__27200);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs_time.core.DateTimeProtocol,G__27200);
}
});
cljs_time.core.interval_QMARK_ = (function interval_QMARK_(x){
var G__27203 = cljs.core.constant$keyword$134;
var G__27204 = cljs.core.constant$keyword$118.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x));
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__27203,G__27204) : cljs_time.core._EQ_.call(null,G__27203,G__27204));
});
cljs_time.core.period_QMARK_ = (function period_QMARK_(x){
var G__27207 = cljs.core.constant$keyword$121;
var G__27208 = cljs.core.constant$keyword$118.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x));
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__27207,G__27208) : cljs_time.core._EQ_.call(null,G__27207,G__27208));
});
cljs_time.core.period_type_QMARK_ = (function period_type_QMARK_(type,x){
var and__3618__auto__ = cljs_time.core.period_QMARK_(x);
if(cljs.core.truth_(and__3618__auto__)){
return cljs.core.contains_QMARK_(x,type);
} else {
return and__3618__auto__;
}
});
/**
* Returns true if the given value is an instance of Years
*/
cljs_time.core.years_QMARK_ = (function years_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$117,val);
});
/**
* Returns true if the given value is an instance of Months
*/
cljs_time.core.months_QMARK_ = (function months_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$116,val);
});
/**
* Returns true if the given value is an instance of Weeks
*/
cljs_time.core.weeks_QMARK_ = (function weeks_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$122,val);
});
/**
* Returns true if the given value is an instance of Days
*/
cljs_time.core.days_QMARK_ = (function days_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$115,val);
});
/**
* Returns true if the given value is an instance of Hours
*/
cljs_time.core.hours_QMARK_ = (function hours_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$114,val);
});
/**
* Returns true if the given value is an instance of Minutes
*/
cljs_time.core.minutes_QMARK_ = (function minutes_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$113,val);
});
/**
* Returns true if the given value is an instance of Seconds
*/
cljs_time.core.seconds_QMARK_ = (function seconds_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$112,val);
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
cljs_time.core.__GT_period = (function (){var method_table__4527__auto__ = (function (){var G__27215 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27215) : cljs.core.atom.call(null,G__27215));
})();
var prefer_table__4528__auto__ = (function (){var G__27216 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27216) : cljs.core.atom.call(null,G__27216));
})();
var method_cache__4529__auto__ = (function (){var G__27217 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27217) : cljs.core.atom.call(null,G__27217));
})();
var cached_hierarchy__4530__auto__ = (function (){var G__27218 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27218) : cljs.core.atom.call(null,G__27218));
})();
var hierarchy__4531__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$136,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs-time.core","->period"),cljs.core.meta,cljs.core.constant$keyword$7,hierarchy__4531__auto__,method_table__4527__auto__,prefer_table__4528__auto__,method_cache__4529__auto__,cached_hierarchy__4530__auto__));
})();
cljs_time.core.__GT_period.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$118,cljs.core.constant$keyword$134], null),(function (p__27219){
var map__27220 = p__27219;
var map__27220__$1 = ((cljs.core.seq_QMARK_(map__27220))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27220):map__27220);
var interval = map__27220__$1;
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27220__$1,cljs.core.constant$keyword$133);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27220__$1,cljs.core.constant$keyword$132);
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
return cljs_time.internal.core.period.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$117,years,cljs.core.array_seq([cljs.core.constant$keyword$116,months,cljs.core.constant$keyword$115,days,cljs.core.constant$keyword$114,hours,cljs.core.constant$keyword$113,minutes,cljs.core.constant$keyword$112,seconds,cljs.core.constant$keyword$111,(cljs_time.core.in_millis(interval) - ((1000) * (seconds + seconds_to_remove)))], 0));
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
var G__27229 = (new goog.date.UtcDateTime((0)));
G__27229.setYear(midnight.getYear());

G__27229.setMonth(midnight.getMonth());

G__27229.setDate(midnight.getDate());

G__27229.setHours(hours);

G__27229.setMinutes(minutes);

G__27229.setSeconds(seconds);

G__27229.setMilliseconds(millis);

return G__27229;
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
var _STAR_sys_time_STAR_27231 = cljs_time.core._STAR_sys_time_STAR_;
try{cljs_time.core._STAR_sys_time_STAR_ = base_date_time;

return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}finally {cljs_time.core._STAR_sys_time_STAR_ = _STAR_sys_time_STAR_27231;
}});
