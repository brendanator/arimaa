// Compiled by ClojureScript 0.0-2727 {}
goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');

cljs.reader.PushbackReader = (function (){var obj23671 = {};
return obj23671;
})();

cljs.reader.read_char = (function read_char(reader){
if((function (){var and__3738__auto__ = reader;
if(and__3738__auto__){
return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else {
return and__3738__auto__;
}
})()){
return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else {
var x__4394__auto__ = (((reader == null))?null:reader);
return (function (){var or__3750__auto__ = (cljs.reader.read_char[(function (){var G__23675 = x__4394__auto__;
return goog.typeOf(G__23675);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs.reader.read_char["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});

cljs.reader.unread = (function unread(reader,ch){
if((function (){var and__3738__auto__ = reader;
if(and__3738__auto__){
return reader.cljs$reader$PushbackReader$unread$arity$2;
} else {
return and__3738__auto__;
}
})()){
return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else {
var x__4394__auto__ = (((reader == null))?null:reader);
return (function (){var or__3750__auto__ = (cljs.reader.unread[(function (){var G__23679 = x__4394__auto__;
return goog.typeOf(G__23679);
})()]);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = (cljs.reader.unread["_"]);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
throw cljs.core.missing_protocol("PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});


/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,buffer,idx){
this.s = s;
this.buffer = buffer;
this.idx = idx;
})
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;

cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1 = (function (reader){
var self__ = this;
var reader__$1 = this;
if((self__.buffer.length === (0))){
self__.idx = (self__.idx + (1));

return (self__.s[self__.idx]);
} else {
return self__.buffer.pop();
}
});

cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){
var self__ = this;
var reader__$1 = this;
return self__.buffer.push(ch);
});

cljs.reader.StringPushbackReader.cljs$lang$type = true;

cljs.reader.StringPushbackReader.cljs$lang$ctorStr = "cljs.reader/StringPushbackReader";

cljs.reader.StringPushbackReader.cljs$lang$ctorPrWriter = (function (this__4337__auto__,writer__4338__auto__,opt__4339__auto__){
return cljs.core._write(writer__4338__auto__,"cljs.reader/StringPushbackReader");
});

cljs.reader.__GT_StringPushbackReader = (function __GT_StringPushbackReader(s,buffer,idx){
return (new cljs.reader.StringPushbackReader(s,buffer,idx));
});

cljs.reader.push_back_reader = (function push_back_reader(s){

return (new cljs.reader.StringPushbackReader(s,[],(-1)));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){
var or__3750__auto__ = (function (){var G__23683 = ch;
return goog.string.isBreakingWhitespace(G__23683);
})();
if(cljs.core.truth_(or__3750__auto__)){
return or__3750__auto__;
} else {
return ("," === ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){
var G__23685 = ch;
return goog.string.isNumeric(G__23685);
});
/**
* Checks whether the character begins a comment.
*/
cljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){
return (";" === ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){
return (cljs.reader.numeric_QMARK_(initch)) || (((("+" === initch)) || (("-" === initch))) && (cljs.reader.numeric_QMARK_((function (){var next_ch = cljs.reader.read_char(reader);
cljs.reader.unread(reader,next_ch);

return next_ch;
})())));
});


/**
* @param {...*} var_args
*/
cljs.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){
throw (new Error(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg)));
};
var reader_error = function (rdr,var_args){
var msg = null;
if (arguments.length > 1) {
var G__23686__i = 0, G__23686__a = new Array(arguments.length -  1);
while (G__23686__i < G__23686__a.length) {G__23686__a[G__23686__i] = arguments[G__23686__i + 1]; ++G__23686__i;}
  msg = new cljs.core.IndexedSeq(G__23686__a,0);
} 
return reader_error__delegate.call(this,rdr,msg);};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__23687){
var rdr = cljs.core.first(arglist__23687);
var msg = cljs.core.rest(arglist__23687);
return reader_error__delegate(rdr,msg);
});
reader_error.cljs$core$IFn$_invoke$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3738__auto__ = !((ch === "#"));
if(and__3738__auto__){
var and__3738__auto____$1 = !((ch === "'"));
if(and__3738__auto____$1){
var and__3738__auto____$2 = !((ch === ":"));
if(and__3738__auto____$2){
var G__23695 = ch;
return (cljs.reader.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.macros.cljs$core$IFn$_invoke$arity$1(G__23695) : cljs.reader.macros.call(null,G__23695));
} else {
return and__3738__auto____$2;
}
} else {
return and__3738__auto____$1;
}
} else {
return and__3738__auto__;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb = (new goog.string.StringBuffer(initch));
var ch = cljs.reader.read_char(rdr);
while(true){
if(((ch == null)) || (cljs.reader.whitespace_QMARK_(ch)) || (cljs.reader.macro_terminating_QMARK_(ch))){
cljs.reader.unread(rdr,ch);

return sb.toString();
} else {
var G__23696 = (function (){
sb.append(ch);

return sb;
})()
;
var G__23697 = cljs.reader.read_char(rdr);
sb = G__23696;
ch = G__23697;
continue;
}
break;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljs.reader.skip_line = (function skip_line(reader,_){
while(true){
var ch = cljs.reader.read_char(reader);
if(((ch === "\n")) || ((ch === "\r")) || ((ch == null))){
return reader;
} else {
continue;
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern("^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+))(N)?$");
cljs.reader.ratio_pattern = cljs.core.re_pattern("^([-+]?[0-9]+)/([0-9]+)$");
cljs.reader.float_pattern = cljs.core.re_pattern("^([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?$");
cljs.reader.symbol_pattern = cljs.core.re_pattern("^[:]?([^0-9/].*/)?([^0-9/][^/]*)$");
cljs.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){
var matches = re.exec(s);
if((!((matches == null))) && (((matches[(0)]) === s))){
if((matches.length === (1))){
return (matches[(0)]);
} else {
return matches;
}
} else {
return null;
}
});
cljs.reader.match_int = (function match_int(s){
var groups = cljs.reader.re_matches_STAR_(cljs.reader.int_pattern,s);
var ie8_fix = (groups[(2)]);
var zero = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ie8_fix,""))?null:ie8_fix);
if(!((zero == null))){
return (0);
} else {
var a = (cljs.core.truth_((groups[(3)]))?[(groups[(3)]),(10)]:(cljs.core.truth_((groups[(4)]))?[(groups[(4)]),(16)]:(cljs.core.truth_((groups[(5)]))?[(groups[(5)]),(8)]:(cljs.core.truth_((groups[(6)]))?[(groups[(7)]),(function (){var G__23702 = (groups[(6)]);
var G__23703 = (10);
return parseInt(G__23702,G__23703);
})()]:[null,null]
))));
var n = (a[(0)]);
var radix = (a[(1)]);
if((n == null)){
return null;
} else {
var parsed = (function (){var G__23704 = n;
var G__23705 = radix;
return parseInt(G__23704,G__23705);
})();
if(("-" === (groups[(1)]))){
return (- parsed);
} else {
return parsed;
}
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups = cljs.reader.re_matches_STAR_(cljs.reader.ratio_pattern,s);
var numinator = (groups[(1)]);
var denominator = (groups[(2)]);
return ((function (){var G__23710 = numinator;
var G__23711 = (10);
return parseInt(G__23710,G__23711);
})() / (function (){var G__23712 = denominator;
var G__23713 = (10);
return parseInt(G__23712,G__23713);
})());
});
cljs.reader.match_float = (function match_float(s){
var G__23715 = s;
return parseFloat(G__23715);
});
cljs.reader.match_number = (function match_number(s){
if(cljs.core.truth_(cljs.reader.re_matches_STAR_(cljs.reader.int_pattern,s))){
return cljs.reader.match_int(s);
} else {
if(cljs.core.truth_(cljs.reader.re_matches_STAR_(cljs.reader.ratio_pattern,s))){
return cljs.reader.match_ratio(s);
} else {
if(cljs.core.truth_(cljs.reader.re_matches_STAR_(cljs.reader.float_pattern,s))){
return cljs.reader.match_float(s);
} else {
return null;
}
}
}
});
cljs.reader.escape_char_map = (function escape_char_map(c){
if((c === "t")){
return "\t";
} else {
if((c === "r")){
return "\r";
} else {
if((c === "n")){
return "\n";
} else {
if((c === "\\")){
return "\\";
} else {
if((c === "\"")){
return "\"";
} else {
if((c === "b")){
return "\b";
} else {
if((c === "f")){
return "\f";
} else {
return null;

}
}
}
}
}
}
}
});
cljs.reader.read_2_chars = (function read_2_chars(reader){
return (new goog.string.StringBuffer(cljs.reader.read_char(reader),cljs.reader.read_char(reader))).toString();
});
cljs.reader.read_4_chars = (function read_4_chars(reader){
return (new goog.string.StringBuffer(cljs.reader.read_char(reader),cljs.reader.read_char(reader),cljs.reader.read_char(reader),cljs.reader.read_char(reader))).toString();
});
cljs.reader.unicode_2_pattern = cljs.core.re_pattern("^[0-9A-Fa-f]{2}$");
cljs.reader.unicode_4_pattern = cljs.core.re_pattern("^[0-9A-Fa-f]{4}$");
cljs.reader.validate_unicode_escape = (function validate_unicode_escape(unicode_pattern,reader,escape_char,unicode_str){
if(cljs.core.truth_(cljs.core.re_matches(unicode_pattern,unicode_str))){
return unicode_str;
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Unexpected unicode escape \\",escape_char,unicode_str], 0));
}
});
cljs.reader.make_unicode_char = (function make_unicode_char(code_str){
var code = (function (){var G__23718 = code_str;
var G__23719 = (16);
return parseInt(G__23718,G__23719);
})();
return String.fromCharCode(code);
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch = cljs.reader.read_char(reader);
var mapresult = cljs.reader.escape_char_map(ch);
if(cljs.core.truth_(mapresult)){
return mapresult;
} else {
if((ch === "x")){
return cljs.reader.make_unicode_char(cljs.reader.validate_unicode_escape(cljs.reader.unicode_2_pattern,reader,ch,cljs.reader.read_2_chars(reader)));
} else {
if((ch === "u")){
return cljs.reader.make_unicode_char(cljs.reader.validate_unicode_escape(cljs.reader.unicode_4_pattern,reader,ch,cljs.reader.read_4_chars(reader)));
} else {
if(cljs.reader.numeric_QMARK_(ch)){
return String.fromCharCode(ch);
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Unexpected unicode escape \\",ch], 0));

}
}
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch = cljs.reader.read_char(rdr);
while(true){
if(cljs.core.truth_((function (){var G__23721 = ch;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__23721) : pred.call(null,G__23721));
})())){
var G__23722 = cljs.reader.read_char(rdr);
ch = G__23722;
continue;
} else {
return ch;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var ch = cljs.reader.read_past(cljs.reader.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch)){
} else {
cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["EOF while reading"], 0));
}

if((delim === ch)){
return cljs.core.persistent_BANG_(a);
} else {
var temp__4124__auto__ = (function (){var G__23730 = ch;
return (cljs.reader.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.macros.cljs$core$IFn$_invoke$arity$1(G__23730) : cljs.reader.macros.call(null,G__23730));
})();
if(cljs.core.truth_(temp__4124__auto__)){
var macrofn = temp__4124__auto__;
var mret = (function (){var G__23731 = rdr;
var G__23732 = ch;
return (macrofn.cljs$core$IFn$_invoke$arity$2 ? macrofn.cljs$core$IFn$_invoke$arity$2(G__23731,G__23732) : macrofn.call(null,G__23731,G__23732));
})();
var G__23737 = (((mret === rdr))?a:cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(a,mret));
a = G__23737;
continue;
} else {
cljs.reader.unread(rdr,ch);

var o = (function (){var G__23733 = rdr;
var G__23734 = true;
var G__23735 = null;
var G__23736 = recursive_QMARK_;
return (cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(G__23733,G__23734,G__23735,G__23736) : cljs.reader.read.call(null,G__23733,G__23734,G__23735,G__23736));
})();
var G__23738 = (((o === rdr))?a:cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(a,o));
a = G__23738;
continue;
}
}
break;
}
});
cljs.reader.not_implemented = (function not_implemented(rdr,ch){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Reader for ",ch," not implemented yet"], 0));
});
cljs.reader.read_dispatch = (function read_dispatch(rdr,_){
var ch = cljs.reader.read_char(rdr);
var dm = (function (){var G__23744 = ch;
return (cljs.reader.dispatch_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.dispatch_macros.cljs$core$IFn$_invoke$arity$1(G__23744) : cljs.reader.dispatch_macros.call(null,G__23744));
})();
if(cljs.core.truth_(dm)){
var G__23745 = rdr;
var G__23746 = _;
return (dm.cljs$core$IFn$_invoke$arity$2 ? dm.cljs$core$IFn$_invoke$arity$2(G__23745,G__23746) : dm.call(null,G__23745,G__23746));
} else {
var temp__4124__auto__ = (function (){var G__23747 = rdr;
var G__23748 = ch;
return (cljs.reader.maybe_read_tagged_type.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.maybe_read_tagged_type.cljs$core$IFn$_invoke$arity$2(G__23747,G__23748) : cljs.reader.maybe_read_tagged_type.call(null,G__23747,G__23748));
})();
if(cljs.core.truth_(temp__4124__auto__)){
var obj = temp__4124__auto__;
return obj;
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["No dispatch macro for ",ch], 0));
}
}
});
cljs.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Unmatched delimiter ",ch], 0));
});
cljs.reader.read_list = (function read_list(rdr,_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.reader.read_delimited_list(")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function read_vector(rdr,_){
return cljs.reader.read_delimited_list("]",rdr,true);
});
cljs.reader.read_map = (function read_map(rdr,_){
var l = cljs.reader.read_delimited_list("}",rdr,true);
if(cljs.core.odd_QMARK_(cljs.core.count(l))){
cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Map literal must contain an even number of forms"], 0));
} else {
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,l);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer = (new goog.string.StringBuffer(initch));
var ch = cljs.reader.read_char(reader);
while(true){
if(cljs.core.truth_((function (){var or__3750__auto__ = (ch == null);
if(or__3750__auto__){
return or__3750__auto__;
} else {
var or__3750__auto____$1 = cljs.reader.whitespace_QMARK_(ch);
if(or__3750__auto____$1){
return or__3750__auto____$1;
} else {
var G__23754 = ch;
return (cljs.reader.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.macros.cljs$core$IFn$_invoke$arity$1(G__23754) : cljs.reader.macros.call(null,G__23754));
}
}
})())){
cljs.reader.unread(reader,ch);

var s = buffer.toString();
var or__3750__auto__ = cljs.reader.match_number(s);
if(cljs.core.truth_(or__3750__auto__)){
return or__3750__auto__;
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Invalid number format [",s,"]"], 0));
}
} else {
var G__23755 = (function (){
buffer.append(ch);

return buffer;
})()
;
var G__23756 = cljs.reader.read_char(reader);
buffer = G__23755;
ch = G__23756;
continue;
}
break;
}
});
cljs.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){
var buffer = (new goog.string.StringBuffer());
var ch = cljs.reader.read_char(reader);
while(true){
if((ch == null)){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF while reading"], 0));
} else {
if(("\\" === ch)){
var G__23757 = (function (){
buffer.append(cljs.reader.escape_char(buffer,reader));

return buffer;
})()
;
var G__23758 = cljs.reader.read_char(reader);
buffer = G__23757;
ch = G__23758;
continue;
} else {
if(("\"" === ch)){
return buffer.toString();
} else {
var G__23759 = (function (){
buffer.append(ch);

return buffer;
})()
;
var G__23760 = cljs.reader.read_char(reader);
buffer = G__23759;
ch = G__23760;
continue;

}
}
}
break;
}
});
cljs.reader.read_raw_string_STAR_ = (function read_raw_string_STAR_(reader,_){
var buffer = (new goog.string.StringBuffer());
var ch = cljs.reader.read_char(reader);
while(true){
if((ch == null)){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF while reading"], 0));
} else {
if(("\\" === ch)){
buffer.append(ch);

var nch = cljs.reader.read_char(reader);
if((nch == null)){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF while reading"], 0));
} else {
var G__23765 = (function (){var G__23763 = buffer;
G__23763.append(nch);

return G__23763;
})();
var G__23766 = cljs.reader.read_char(reader);
buffer = G__23765;
ch = G__23766;
continue;
}
} else {
if(("\"" === ch)){
return buffer.toString();
} else {
var G__23767 = (function (){var G__23764 = buffer;
G__23764.append(ch);

return G__23764;
})();
var G__23768 = cljs.reader.read_char(reader);
buffer = G__23767;
ch = G__23768;
continue;

}
}
}
break;
}
});
cljs.reader.special_symbols = (function special_symbols(t,not_found){
if((t === "nil")){
return null;
} else {
if((t === "true")){
return true;
} else {
if((t === "false")){
return false;
} else {
if((t === "/")){
return new cljs.core.Symbol(null,"/","/",-1371932971,null);
} else {
return not_found;

}
}
}
}
});
cljs.reader.read_symbol = (function read_symbol(reader,initch){
var token = cljs.reader.read_token(reader,initch);
if(cljs.core.truth_((function (){var and__3738__auto__ = (function (){var G__23775 = token;
var G__23776 = "/";
return goog.string.contains(G__23775,G__23776);
})();
if(cljs.core.truth_(and__3738__auto__)){
return !((token.length === (1)));
} else {
return and__3738__auto__;
}
})())){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token,(0),token.indexOf("/")),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token,(token.indexOf("/") + (1)),token.length));
} else {
return cljs.reader.special_symbols(token,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(token));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token = cljs.reader.read_token(reader,cljs.reader.read_char(reader));
var a = cljs.reader.re_matches_STAR_(cljs.reader.symbol_pattern,token);
var token__$1 = (a[(0)]);
var ns = (a[(1)]);
var name = (a[(2)]);
if(((!((void 0 === ns))) && ((ns.substring((ns.length - (2)),ns.length) === ":/"))) || (((name[(name.length - (1))]) === ":")) || (!((token__$1.indexOf("::",(1)) === (-1))))){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Invalid token: ",token__$1], 0));
} else {
if((!((ns == null))) && ((ns.length > (0)))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns.substring((0),ns.indexOf("/")),name);
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(token__$1);
}
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){
if((f instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$47,f], null);
} else {
if(typeof f === 'string'){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$47,f], null);
} else {
if((f instanceof cljs.core.Keyword)){
return new cljs.core.PersistentArrayMap.fromArray([f,true], true, false);
} else {
return f;

}
}
}
});
cljs.reader.wrapping_reader = (function wrapping_reader(sym){
return (function (rdr,_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(function (){var G__23781 = rdr;
var G__23782 = true;
var G__23783 = null;
var G__23784 = true;
return (cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(G__23781,G__23782,G__23783,G__23784) : cljs.reader.read.call(null,G__23781,G__23782,G__23783,G__23784));
})()),sym);
});
});
cljs.reader.throwing_reader = (function throwing_reader(msg){
return (function (rdr,_){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq([msg], 0));
});
});
cljs.reader.read_meta = (function read_meta(rdr,_){
var m = cljs.reader.desugar_meta((function (){var G__23794 = rdr;
var G__23795 = true;
var G__23796 = null;
var G__23797 = true;
return (cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(G__23794,G__23795,G__23796,G__23797) : cljs.reader.read.call(null,G__23794,G__23795,G__23796,G__23797));
})());
if(cljs.core.map_QMARK_(m)){
} else {
cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Metadata must be Symbol,Keyword,String or Map"], 0));
}

var o = (function (){var G__23798 = rdr;
var G__23799 = true;
var G__23800 = null;
var G__23801 = true;
return (cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(G__23798,G__23799,G__23800,G__23801) : cljs.reader.read.call(null,G__23798,G__23799,G__23800,G__23801));
})();
if((function (){var G__23802 = o;
if(G__23802){
var bit__4431__auto__ = (G__23802.cljs$lang$protocol_mask$partition0$ & (262144));
if((bit__4431__auto__) || (G__23802.cljs$core$IWithMeta$)){
return true;
} else {
if((!G__23802.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__23802);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__23802);
}
})()){
return cljs.core.with_meta(o,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.meta(o),m], 0)));
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Metadata can only be applied to IWithMetas"], 0));
}
});
cljs.reader.read_set = (function read_set(rdr,_){
return cljs.core.set(cljs.reader.read_delimited_list("}",rdr,true));
});
cljs.reader.read_regex = (function read_regex(rdr,ch){
return cljs.core.re_pattern(cljs.reader.read_raw_string_STAR_(rdr,ch));
});
cljs.reader.read_discard = (function read_discard(rdr,_){
var G__23807_23811 = rdr;
var G__23808_23812 = true;
var G__23809_23813 = null;
var G__23810_23814 = true;
(cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(G__23807_23811,G__23808_23812,G__23809_23813,G__23810_23814) : cljs.reader.read.call(null,G__23807_23811,G__23808_23812,G__23809_23813,G__23810_23814));

return rdr;
});
cljs.reader.macros = (function macros(c){
if((c === "\"")){
return cljs.reader.read_string_STAR_;
} else {
if((c === ":")){
return cljs.reader.read_keyword;
} else {
if((c === ";")){
return cljs.reader.read_comment;
} else {
if((c === "'")){
return cljs.reader.wrapping_reader(new cljs.core.Symbol(null,"quote","quote",1377916282,null));
} else {
if((c === "@")){
return cljs.reader.wrapping_reader(new cljs.core.Symbol(null,"deref","deref",1494944732,null));
} else {
if((c === "^")){
return cljs.reader.read_meta;
} else {
if((c === "`")){
return cljs.reader.not_implemented;
} else {
if((c === "~")){
return cljs.reader.not_implemented;
} else {
if((c === "(")){
return cljs.reader.read_list;
} else {
if((c === ")")){
return cljs.reader.read_unmatched_delimiter;
} else {
if((c === "[")){
return cljs.reader.read_vector;
} else {
if((c === "]")){
return cljs.reader.read_unmatched_delimiter;
} else {
if((c === "{")){
return cljs.reader.read_map;
} else {
if((c === "}")){
return cljs.reader.read_unmatched_delimiter;
} else {
if((c === "\\")){
return cljs.reader.read_char;
} else {
if((c === "#")){
return cljs.reader.read_dispatch;
} else {
return null;

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
cljs.reader.dispatch_macros = (function dispatch_macros(s){
if((s === "{")){
return cljs.reader.read_set;
} else {
if((s === "<")){
return cljs.reader.throwing_reader("Unreadable form");
} else {
if((s === "\"")){
return cljs.reader.read_regex;
} else {
if((s === "!")){
return cljs.reader.read_comment;
} else {
if((s === "_")){
return cljs.reader.read_discard;
} else {
return null;

}
}
}
}
}
});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch = cljs.reader.read_char(reader);
if((ch == null)){
if(cljs.core.truth_(eof_is_error)){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF while reading"], 0));
} else {
return sentinel;
}
} else {
if(cljs.reader.whitespace_QMARK_(ch)){
var G__23823 = reader;
var G__23824 = eof_is_error;
var G__23825 = sentinel;
var G__23826 = is_recursive;
reader = G__23823;
eof_is_error = G__23824;
sentinel = G__23825;
is_recursive = G__23826;
continue;
} else {
if(cljs.reader.comment_prefix_QMARK_(ch)){
var G__23827 = (function (){var G__23819 = reader;
var G__23820 = ch;
return (cljs.reader.read_comment.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.read_comment.cljs$core$IFn$_invoke$arity$2(G__23819,G__23820) : cljs.reader.read_comment.call(null,G__23819,G__23820));
})();
var G__23828 = eof_is_error;
var G__23829 = sentinel;
var G__23830 = is_recursive;
reader = G__23827;
eof_is_error = G__23828;
sentinel = G__23829;
is_recursive = G__23830;
continue;
} else {
var f = cljs.reader.macros(ch);
var res = (cljs.core.truth_(f)?(function (){var G__23821 = reader;
var G__23822 = ch;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23821,G__23822) : f.call(null,G__23821,G__23822));
})():((cljs.reader.number_literal_QMARK_(reader,ch))?cljs.reader.read_number(reader,ch):cljs.reader.read_symbol(reader,ch)
));
if((res === reader)){
var G__23831 = reader;
var G__23832 = eof_is_error;
var G__23833 = sentinel;
var G__23834 = is_recursive;
reader = G__23831;
eof_is_error = G__23832;
sentinel = G__23833;
is_recursive = G__23834;
continue;
} else {
return res;
}

}
}
}
break;
}
});
/**
* Reads one object from the string s
*/
cljs.reader.read_string = (function read_string(s){
var r = cljs.reader.push_back_reader(s);
return cljs.reader.read(r,false,null,false);
});
cljs.reader.zero_fill_right_and_truncate = (function zero_fill_right_and_truncate(s,width){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(width,cljs.core.count(s))){
return s;
} else {
if((width < cljs.core.count(s))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),width);
} else {
var b = (new goog.string.StringBuffer(s));
while(true){
if((b.getLength() < width)){
var G__23835 = b.append("0");
b = G__23835;
continue;
} else {
return b.toString();
}
break;
}

}
}
});
cljs.reader.divisible_QMARK_ = (function divisible_QMARK_(num,div){
return (cljs.core.mod(num,div) === (0));
});
cljs.reader.indivisible_QMARK_ = (function indivisible_QMARK_(num,div){
return !(cljs.reader.divisible_QMARK_(num,div));
});
cljs.reader.leap_year_QMARK_ = (function leap_year_QMARK_(year){
return (cljs.reader.divisible_QMARK_(year,(4))) && ((cljs.reader.indivisible_QMARK_(year,(100))) || (cljs.reader.divisible_QMARK_(year,(400))));
});
cljs.reader.days_in_month = (function (){var dim_norm = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
var dim_leap = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(29),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
return ((function (dim_norm,dim_leap){
return (function (month,leap_year_QMARK_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month);
});
;})(dim_norm,dim_leap))
})();
cljs.reader.timestamp_regex = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
cljs.reader.parse_int = (function parse_int(s){
var n = (function (){var G__23839 = s;
var G__23840 = (10);
return parseInt(G__23839,G__23840);
})();
if(cljs.core.not((function (){var G__23841 = n;
return isNaN(G__23841);
})())){
return n;
} else {
return null;
}
});
cljs.reader.check = (function check(low,n,high,msg){
if(((low <= n)) && ((n <= high))){
} else {
cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join('')], 0));
}

return n;
});
cljs.reader.parse_and_validate_timestamp = (function parse_and_validate_timestamp(s){
var vec__23845 = cljs.core.re_matches(cljs.reader.timestamp_regex,s);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23845,(0),null);
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23845,(1),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23845,(2),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23845,(3),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23845,(4),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23845,(5),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23845,(6),null);
var fraction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23845,(7),null);
var offset_sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23845,(8),null);
var offset_hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23845,(9),null);
var offset_minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23845,(10),null);
var v = vec__23845;
if(cljs.core.not(v)){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str("Unrecognized date/time syntax: "),cljs.core.str(s)].join('')], 0));
} else {
var years__$1 = cljs.reader.parse_int(years);
var months__$1 = (function (){var or__3750__auto__ = cljs.reader.parse_int(months);
if(cljs.core.truth_(or__3750__auto__)){
return or__3750__auto__;
} else {
return (1);
}
})();
var days__$1 = (function (){var or__3750__auto__ = cljs.reader.parse_int(days);
if(cljs.core.truth_(or__3750__auto__)){
return or__3750__auto__;
} else {
return (1);
}
})();
var hours__$1 = (function (){var or__3750__auto__ = cljs.reader.parse_int(hours);
if(cljs.core.truth_(or__3750__auto__)){
return or__3750__auto__;
} else {
return (0);
}
})();
var minutes__$1 = (function (){var or__3750__auto__ = cljs.reader.parse_int(minutes);
if(cljs.core.truth_(or__3750__auto__)){
return or__3750__auto__;
} else {
return (0);
}
})();
var seconds__$1 = (function (){var or__3750__auto__ = cljs.reader.parse_int(seconds);
if(cljs.core.truth_(or__3750__auto__)){
return or__3750__auto__;
} else {
return (0);
}
})();
var fraction__$1 = (function (){var or__3750__auto__ = cljs.reader.parse_int(cljs.reader.zero_fill_right_and_truncate(fraction,(3)));
if(cljs.core.truth_(or__3750__auto__)){
return or__3750__auto__;
} else {
return (0);
}
})();
var offset_sign__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset_sign,"-"))?(-1):(1));
var offset_hours__$1 = (function (){var or__3750__auto__ = cljs.reader.parse_int(offset_hours);
if(cljs.core.truth_(or__3750__auto__)){
return or__3750__auto__;
} else {
return (0);
}
})();
var offset_minutes__$1 = (function (){var or__3750__auto__ = cljs.reader.parse_int(offset_minutes);
if(cljs.core.truth_(or__3750__auto__)){
return or__3750__auto__;
} else {
return (0);
}
})();
var offset = (offset_sign__$1 * ((offset_hours__$1 * (60)) + offset_minutes__$1));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [years__$1,cljs.reader.check((1),months__$1,(12),"timestamp month field must be in range 1..12"),cljs.reader.check((1),days__$1,(function (){var G__23846 = months__$1;
var G__23847 = cljs.reader.leap_year_QMARK_(years__$1);
return (cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2(G__23846,G__23847) : cljs.reader.days_in_month.call(null,G__23846,G__23847));
})(),"timestamp day field must be in range 1..last day in month"),cljs.reader.check((0),hours__$1,(23),"timestamp hour field must be in range 0..23"),cljs.reader.check((0),minutes__$1,(59),"timestamp minute field must be in range 0..59"),cljs.reader.check((0),seconds__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(minutes__$1,(59)))?(60):(59)),"timestamp second field must be in range 0..60"),cljs.reader.check((0),fraction__$1,(999),"timestamp millisecond field must be in range 0..999"),offset], null);
}
});
cljs.reader.parse_timestamp = (function parse_timestamp(ts){
var temp__4124__auto__ = cljs.reader.parse_and_validate_timestamp(ts);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__23849 = temp__4124__auto__;
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23849,(0),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23849,(1),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23849,(2),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23849,(3),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23849,(4),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23849,(5),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23849,(6),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23849,(7),null);
return (new Date((Date.UTC(years,(months - (1)),days,hours,minutes,seconds,ms) - ((offset * (60)) * (1000)))));
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str("Unrecognized date/time syntax: "),cljs.core.str(ts)].join('')], 0));
}
});
cljs.reader.read_date = (function read_date(s){
if(typeof s === 'string'){
return cljs.reader.parse_timestamp(s);
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Instance literal expects a string for its timestamp."], 0));
}
});
cljs.reader.read_queue = (function read_queue(elems){
if(cljs.core.vector_QMARK_(elems)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,elems);
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Queue literal expects a vector for its elements."], 0));
}
});
cljs.reader.read_js = (function read_js(form){
if(cljs.core.vector_QMARK_(form)){
var arr = [];
var seq__23862_23874 = cljs.core.seq(form);
var chunk__23863_23875 = null;
var count__23864_23876 = (0);
var i__23865_23877 = (0);
while(true){
if((i__23865_23877 < count__23864_23876)){
var x_23878 = chunk__23863_23875.cljs$core$IIndexed$_nth$arity$2(null,i__23865_23877);
arr.push(x_23878);

var G__23879 = seq__23862_23874;
var G__23880 = chunk__23863_23875;
var G__23881 = count__23864_23876;
var G__23882 = (i__23865_23877 + (1));
seq__23862_23874 = G__23879;
chunk__23863_23875 = G__23880;
count__23864_23876 = G__23881;
i__23865_23877 = G__23882;
continue;
} else {
var temp__4126__auto___23883 = cljs.core.seq(seq__23862_23874);
if(temp__4126__auto___23883){
var seq__23862_23884__$1 = temp__4126__auto___23883;
if(cljs.core.chunked_seq_QMARK_(seq__23862_23884__$1)){
var c__4537__auto___23885 = cljs.core.chunk_first(seq__23862_23884__$1);
var G__23886 = cljs.core.chunk_rest(seq__23862_23884__$1);
var G__23887 = c__4537__auto___23885;
var G__23888 = cljs.core.count(c__4537__auto___23885);
var G__23889 = (0);
seq__23862_23874 = G__23886;
chunk__23863_23875 = G__23887;
count__23864_23876 = G__23888;
i__23865_23877 = G__23889;
continue;
} else {
var x_23890 = cljs.core.first(seq__23862_23884__$1);
arr.push(x_23890);

var G__23891 = cljs.core.next(seq__23862_23884__$1);
var G__23892 = null;
var G__23893 = (0);
var G__23894 = (0);
seq__23862_23874 = G__23891;
chunk__23863_23875 = G__23892;
count__23864_23876 = G__23893;
i__23865_23877 = G__23894;
continue;
}
} else {
}
}
break;
}

return arr;
} else {
if(cljs.core.map_QMARK_(form)){
var obj = (function (){var obj23867 = {};
return obj23867;
})();
var seq__23868_23895 = cljs.core.seq(form);
var chunk__23869_23896 = null;
var count__23870_23897 = (0);
var i__23871_23898 = (0);
while(true){
if((i__23871_23898 < count__23870_23897)){
var vec__23872_23899 = chunk__23869_23896.cljs$core$IIndexed$_nth$arity$2(null,i__23871_23898);
var k_23900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23872_23899,(0),null);
var v_23901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23872_23899,(1),null);
(obj[cljs.core.name(k_23900)] = v_23901);

var G__23902 = seq__23868_23895;
var G__23903 = chunk__23869_23896;
var G__23904 = count__23870_23897;
var G__23905 = (i__23871_23898 + (1));
seq__23868_23895 = G__23902;
chunk__23869_23896 = G__23903;
count__23870_23897 = G__23904;
i__23871_23898 = G__23905;
continue;
} else {
var temp__4126__auto___23906 = cljs.core.seq(seq__23868_23895);
if(temp__4126__auto___23906){
var seq__23868_23907__$1 = temp__4126__auto___23906;
if(cljs.core.chunked_seq_QMARK_(seq__23868_23907__$1)){
var c__4537__auto___23908 = cljs.core.chunk_first(seq__23868_23907__$1);
var G__23909 = cljs.core.chunk_rest(seq__23868_23907__$1);
var G__23910 = c__4537__auto___23908;
var G__23911 = cljs.core.count(c__4537__auto___23908);
var G__23912 = (0);
seq__23868_23895 = G__23909;
chunk__23869_23896 = G__23910;
count__23870_23897 = G__23911;
i__23871_23898 = G__23912;
continue;
} else {
var vec__23873_23913 = cljs.core.first(seq__23868_23907__$1);
var k_23914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23873_23913,(0),null);
var v_23915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23873_23913,(1),null);
(obj[cljs.core.name(k_23914)] = v_23915);

var G__23916 = cljs.core.next(seq__23868_23907__$1);
var G__23917 = null;
var G__23918 = (0);
var G__23919 = (0);
seq__23868_23895 = G__23916;
chunk__23869_23896 = G__23917;
count__23870_23897 = G__23918;
i__23871_23898 = G__23919;
continue;
}
} else {
}
}
break;
}

return obj;
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str("JS literal expects a vector or map containing "),cljs.core.str("only string or unqualified keyword keys")].join('')], 0));

}
}
});
cljs.reader.read_uuid = (function read_uuid(uuid){
if(typeof uuid === 'string'){
return (new cljs.core.UUID(uuid));
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["UUID literal expects a string as its representation."], 0));
}
});
cljs.reader._STAR_tag_table_STAR_ = (function (){var G__23920 = new cljs.core.PersistentArrayMap(null, 4, ["inst",cljs.reader.read_date,"uuid",cljs.reader.read_uuid,"queue",cljs.reader.read_queue,"js",cljs.reader.read_js], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23920) : cljs.core.atom.call(null,G__23920));
})();
cljs.reader._STAR_default_data_reader_fn_STAR_ = (function (){var G__23921 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23921) : cljs.core.atom.call(null,G__23921));
})();
cljs.reader.maybe_read_tagged_type = (function maybe_read_tagged_type(rdr,initch){
var tag = cljs.reader.read_symbol(rdr,initch);
var pfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__23928 = cljs.reader._STAR_tag_table_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23928) : cljs.core.deref.call(null,G__23928));
})(),[cljs.core.str(tag)].join(''));
var dfn = (function (){var G__23929 = cljs.reader._STAR_default_data_reader_fn_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23929) : cljs.core.deref.call(null,G__23929));
})();
if(cljs.core.truth_(pfn)){
var G__23930 = cljs.reader.read(rdr,true,null,false);
return (pfn.cljs$core$IFn$_invoke$arity$1 ? pfn.cljs$core$IFn$_invoke$arity$1(G__23930) : pfn.call(null,G__23930));
} else {
if(cljs.core.truth_(dfn)){
var G__23931 = tag;
var G__23932 = cljs.reader.read(rdr,true,null,false);
return (dfn.cljs$core$IFn$_invoke$arity$2 ? dfn.cljs$core$IFn$_invoke$arity$2(G__23931,G__23932) : dfn.call(null,G__23931,G__23932));
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Could not find tag parser for ",[cljs.core.str(tag)].join('')," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.keys((function (){var G__23933 = cljs.reader._STAR_tag_table_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23933) : cljs.core.deref.call(null,G__23933));
})())], 0))], 0));

}
}
});
cljs.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){
var tag__$1 = [cljs.core.str(tag)].join('');
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__23935 = cljs.reader._STAR_tag_table_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23935) : cljs.core.deref.call(null,G__23935));
})(),tag__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__$1,f);

return old_parser;
});
cljs.reader.deregister_tag_parser_BANG_ = (function deregister_tag_parser_BANG_(tag){
var tag__$1 = [cljs.core.str(tag)].join('');
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__23937 = cljs.reader._STAR_tag_table_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23937) : cljs.core.deref.call(null,G__23937));
})(),tag__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__$1);

return old_parser;
});
cljs.reader.register_default_tag_parser_BANG_ = (function register_default_tag_parser_BANG_(f){
var old_parser = (function (){var G__23939 = cljs.reader._STAR_default_data_reader_fn_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23939) : cljs.core.deref.call(null,G__23939));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return f;
});})(old_parser))
);

return old_parser;
});
cljs.reader.deregister_default_tag_parser_BANG_ = (function deregister_default_tag_parser_BANG_(){
var old_parser = (function (){var G__23941 = cljs.reader._STAR_default_data_reader_fn_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23941) : cljs.core.deref.call(null,G__23941));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return null;
});})(old_parser))
);

return old_parser;
});
