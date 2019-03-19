ace.define("ace/mode/css_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text_highlight_rules"],function(r,e,m){"use strict";var o=r("../lib/oop");var l=r("../lib/lang");var T=r("./text_highlight_rules").TextHighlightRules;var s=e.supportType="align-content|align-items|align-self|all|animation|animation-delay|animation-direction|animation-duration|animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|backface-visibility|background|background-attachment|background-blend-mode|background-clip|background-color|background-image|background-origin|background-position|background-repeat|background-size|border|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius|border-bottom-style|border-bottom-width|border-collapse|border-color|border-image|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-left|border-left-color|border-left-style|border-left-width|border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style|border-top-width|border-width|bottom|box-shadow|box-sizing|caption-side|clear|clip|color|column-count|column-fill|column-gap|column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|content|counter-increment|counter-reset|cursor|direction|display|empty-cells|filter|flex|flex-basis|flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|float|font|font-family|font-size|font-size-adjust|font-stretch|font-style|font-variant|font-weight|hanging-punctuation|height|justify-content|left|letter-spacing|line-height|list-style|list-style-image|list-style-position|list-style-type|margin|margin-bottom|margin-left|margin-right|margin-top|max-height|max-width|max-zoom|min-height|min-width|min-zoom|nav-down|nav-index|nav-left|nav-right|nav-up|opacity|order|outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-x|overflow-y|padding|padding-bottom|padding-left|padding-right|padding-top|page-break-after|page-break-before|page-break-inside|perspective|perspective-origin|position|quotes|resize|right|tab-size|table-layout|text-align|text-align-last|text-decoration|text-decoration-color|text-decoration-line|text-decoration-style|text-indent|text-justify|text-overflow|text-shadow|text-transform|top|transform|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function|unicode-bidi|user-select|user-zoom|vertical-align|visibility|white-space|width|word-break|word-spacing|word-wrap|z-index";var a=e.supportFunction="rgb|rgba|url|attr|counter|counters";var b=e.supportConstant="absolute|after-edge|after|all-scroll|all|alphabetic|always|antialiased|armenian|auto|avoid-column|avoid-page|avoid|balance|baseline|before-edge|before|below|bidi-override|block-line-height|block|bold|bolder|border-box|both|bottom|box|break-all|break-word|capitalize|caps-height|caption|center|central|char|circle|cjk-ideographic|clone|close-quote|col-resize|collapse|column|consider-shifts|contain|content-box|cover|crosshair|cubic-bezier|dashed|decimal-leading-zero|decimal|default|disabled|disc|disregard-shifts|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ease-in|ease-in-out|ease-out|ease|ellipsis|end|exclude-ruby|fill|fixed|georgian|glyphs|grid-height|groove|hand|hanging|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|ideographic|inactive|include-ruby|inherit|initial|inline-block|inline-box|inline-line-height|inline-table|inline|inset|inside|inter-ideograph|inter-word|invert|italic|justify|katakana-iroha|katakana|keep-all|last|left|lighter|line-edge|line-through|line|linear|list-item|local|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|mathematical|max-height|max-size|medium|menu|message-box|middle|move|n-resize|ne-resize|newspaper|no-change|no-close-quote|no-drop|no-open-quote|no-repeat|none|normal|not-allowed|nowrap|nw-resize|oblique|open-quote|outset|outside|overline|padding-box|page|pointer|pre-line|pre-wrap|pre|preserve-3d|progress|relative|repeat-x|repeat-y|repeat|replaced|reset-size|ridge|right|round|row-resize|rtl|s-resize|scroll|se-resize|separate|slice|small-caps|small-caption|solid|space|square|start|static|status-bar|step-end|step-start|steps|stretch|strict|sub|super|sw-resize|table-caption|table-cell|table-column-group|table-column|table-footer-group|table-header-group|table-row-group|table-row|table|tb-rl|text-after-edge|text-before-edge|text-bottom|text-size|text-top|text|thick|thin|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|use-script|vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|z-index|zero|zoom";var c=e.supportConstantColor="aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen";var d=e.supportConstantFonts="arial|century|comic|courier|cursive|fantasy|garamond|georgia|helvetica|impact|lucida|symbol|system|tahoma|times|trebuchet|utopia|verdana|webdings|sans-serif|serif|monospace";var n=e.numRe="\\-?(?:(?:[0-9]+(?:\\.[0-9]+)?)|(?:\\.[0-9]+))";var p=e.pseudoElements="(\\:+)\\b(after|before|first-letter|first-line|moz-selection|selection)\\b";var f=e.pseudoClasses="(:)\\b(active|checked|disabled|empty|enabled|first-child|first-of-type|focus|hover|indeterminate|invalid|last-child|last-of-type|link|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|only-child|only-of-type|required|root|target|valid|visited)\\b";var C=function(){var k=this.createKeywordMapper({"support.function":a,"support.constant":b,"support.type":s,"support.constant.color":c,"support.constant.fonts":d},"text",true);this.$rules={"start":[{include:["strings","url","comments"]},{token:"paren.lparen",regex:"\\{",next:"ruleset"},{token:"paren.rparen",regex:"\\}"},{token:"string",regex:"@(?!viewport)",next:"media"},{token:"keyword",regex:"#[a-z0-9-_]+"},{token:"keyword",regex:"%"},{token:"variable",regex:"\\.[a-z0-9-_]+"},{token:"string",regex:":[a-z0-9-_]+"},{token:"constant.numeric",regex:n},{token:"constant",regex:"[a-z0-9-_]+"},{caseInsensitive:true}],"media":[{include:["strings","url","comments"]},{token:"paren.lparen",regex:"\\{",next:"start"},{token:"paren.rparen",regex:"\\}",next:"start"},{token:"string",regex:";",next:"start"},{token:"keyword",regex:"(?:media|supports|document|charset|import|namespace|media|supports|document"+"|page|font|keyframes|viewport|counter-style|font-feature-values"+"|swash|ornaments|annotation|stylistic|styleset|character-variant)"}],"comments":[{token:"comment",regex:"\\/\\*",push:[{token:"comment",regex:"\\*\\/",next:"pop"},{defaultToken:"comment"}]}],"ruleset":[{regex:"-(webkit|ms|moz|o)-",token:"text"},{token:"punctuation.operator",regex:"[:;]"},{token:"paren.rparen",regex:"\\}",next:"start"},{include:["strings","url","comments"]},{token:["constant.numeric","keyword"],regex:"("+n+")(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vmax|vmin|vm|vw|%)"},{token:"constant.numeric",regex:n},{token:"constant.numeric",regex:"#[a-f0-9]{6}"},{token:"constant.numeric",regex:"#[a-f0-9]{3}"},{token:["punctuation","entity.other.attribute-name.pseudo-element.css"],regex:p},{token:["punctuation","entity.other.attribute-name.pseudo-class.css"],regex:f},{include:"url"},{token:k,regex:"\\-?[a-zA-Z_][a-zA-Z0-9_\\-]*"},{caseInsensitive:true}],url:[{token:"support.function",regex:"(?:url(:?-prefix)?|domain|regexp)\\(",push:[{token:"support.function",regex:"\\)",next:"pop"},{defaultToken:"string"}]}],strings:[{token:"string.start",regex:"'",push:[{token:"string.end",regex:"'|$",next:"pop"},{include:"escapes"},{token:"constant.language.escape",regex:/\\$/,consumeLineEnd:true},{defaultToken:"string"}]},{token:"string.start",regex:'"',push:[{token:"string.end",regex:'"|$',next:"pop"},{include:"escapes"},{token:"constant.language.escape",regex:/\\$/,consumeLineEnd:true},{defaultToken:"string"}]}],escapes:[{token:"constant.language.escape",regex:/\\([a-fA-F\d]{1,6}|[^a-fA-F\d])/}]};this.normalizeRules();};o.inherits(C,T);e.CssHighlightRules=C;});ace.define("ace/mode/less_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules","ace/mode/css_highlight_rules"],function(r,e,m){"use strict";var o=r("../lib/oop");var T=r("./text_highlight_rules").TextHighlightRules;var C=r('./css_highlight_rules');var L=function(){var k="@import|@media|@font-face|@keyframes|@-webkit-keyframes|@supports|"+"@charset|@plugin|@namespace|@document|@page|@viewport|@-ms-viewport|"+"or|and|when|not";var a=k.split('|');var p=C.supportType.split('|');var b=this.createKeywordMapper({"support.constant":C.supportConstant,"keyword":k,"support.constant.color":C.supportConstantColor,"support.constant.fonts":C.supportConstantFonts},"identifier",true);var n="\\-?(?:(?:[0-9]+)|(?:[0-9]*\\.[0-9]+))";this.$rules={"start":[{token:"comment",regex:"\\/\\/.*$"},{token:"comment",regex:"\\/\\*",next:"comment"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:["constant.numeric","keyword"],regex:"("+n+")(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vm|vw|%)"},{token:"constant.numeric",regex:"#[a-f0-9]{6}"},{token:"constant.numeric",regex:"#[a-f0-9]{3}"},{token:"constant.numeric",regex:n},{token:["support.function","paren.lparen","string","paren.rparen"],regex:"(url)(\\()(.*)(\\))"},{token:["support.function","paren.lparen"],regex:"(:extend|[a-z0-9_\\-]+)(\\()"},{token:function(v){if(a.indexOf(v.toLowerCase())>-1)return"keyword";else return"variable";},regex:"[@\\$][a-z0-9_\\-@\\$]*\\b"},{token:"variable",regex:"[@\\$]\\{[a-z0-9_\\-@\\$]*\\}"},{token:function(f,s){if(p.indexOf(f.toLowerCase())>-1){return["support.type.property","text"];}else{return["support.type.unknownProperty","text"];}},regex:"([a-z0-9-_]+)(\\s*:)"},{token:"keyword",regex:"&"},{token:b,regex:"\\-?[@a-z_][@a-z0-9_\\-]*"},{token:"variable.language",regex:"#[a-z0-9-_]+"},{token:"variable.language",regex:"\\.[a-z0-9-_]+"},{token:"variable.language",regex:":[a-z_][a-z0-9-_]*"},{token:"constant",regex:"[a-z0-9-_]+"},{token:"keyword.operator",regex:"<|>|<=|>=|=|!=|-|%|\\+|\\*"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"},{caseInsensitive:true}],"comment":[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}]};this.normalizeRules();};o.inherits(L,T);e.LessHighlightRules=L;});ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(r,e,m){"use strict";var R=r("../range").Range;var M=function(){};(function(){this.checkOutdent=function(l,i){if(!/^\s+$/.test(l))return false;return/^\s*\}/.test(i);};this.autoOutdent=function(d,a){var l=d.getLine(a);var b=l.match(/^(\s*\})/);if(!b)return 0;var c=b[1].length;var o=d.findMatchingBracket({row:a,column:c});if(!o||o.row==a)return 0;var i=this.$getIndent(d.getLine(o.row));d.replace(new R(a,0,a,c-1),i);};this.$getIndent=function(l){return l.match(/^\s*/)[0];};}).call(M.prototype);e.MatchingBraceOutdent=M;});ace.define("ace/mode/behaviour/css",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/mode/behaviour/cstyle","ace/token_iterator"],function(r,e,m){"use strict";var o=r("../../lib/oop");var B=r("../behaviour").Behaviour;var C=r("./cstyle").CstyleBehaviour;var T=r("../../token_iterator").TokenIterator;var a=function(){this.inherit(C);this.add("colon","insertion",function(s,b,c,d,t){if(t===':'&&c.selection.isEmpty()){var f=c.getCursorPosition();var i=new T(d,f.row,f.column);var g=i.getCurrentToken();if(g&&g.value.match(/\s+/)){g=i.stepBackward();}if(g&&g.type==='support.type'){var l=d.doc.getLine(f.row);var h=l.substring(f.column,f.column+1);if(h===':'){return{text:'',selection:[1,1]};}if(/^(\s+[^;]|\s*$)/.test(l.substring(f.column))){return{text:':;',selection:[1,1]};}}}});this.add("colon","deletion",function(s,b,c,d,f){var g=d.doc.getTextRange(f);if(!f.isMultiLine()&&g===':'){var h=c.getCursorPosition();var i=new T(d,h.row,h.column);var t=i.getCurrentToken();if(t&&t.value.match(/\s+/)){t=i.stepBackward();}if(t&&t.type==='support.type'){var l=d.doc.getLine(f.start.row);var j=l.substring(f.end.column,f.end.column+1);if(j===';'){f.end.column++;return f;}}}});this.add("semicolon","insertion",function(s,b,c,d,t){if(t===';'&&c.selection.isEmpty()){var f=c.getCursorPosition();var l=d.doc.getLine(f.row);var g=l.substring(f.column,f.column+1);if(g===';'){return{text:'',selection:[1,1]};}}});this.add("!important","insertion",function(s,b,c,d,t){if(t==='!'&&c.selection.isEmpty()){var f=c.getCursorPosition();var l=d.doc.getLine(f.row);if(/^\s*(;|}|$)/.test(l.substring(f.column))){return{text:'!important',selection:[10,10]};}}});};o.inherits(a,C);e.CssBehaviour=a;});ace.define("ace/mode/css_completions",["require","exports","module"],function(r,e,m){"use strict";var p={"background":{"#$0":1},"background-color":{"#$0":1,"transparent":1,"fixed":1},"background-image":{"url('/$0')":1},"background-repeat":{"repeat":1,"repeat-x":1,"repeat-y":1,"no-repeat":1,"inherit":1},"background-position":{"bottom":2,"center":2,"left":2,"right":2,"top":2,"inherit":2},"background-attachment":{"scroll":1,"fixed":1},"background-size":{"cover":1,"contain":1},"background-clip":{"border-box":1,"padding-box":1,"content-box":1},"background-origin":{"border-box":1,"padding-box":1,"content-box":1},"border":{"solid $0":1,"dashed $0":1,"dotted $0":1,"#$0":1},"border-color":{"#$0":1},"border-style":{"solid":2,"dashed":2,"dotted":2,"double":2,"groove":2,"hidden":2,"inherit":2,"inset":2,"none":2,"outset":2,"ridged":2},"border-collapse":{"collapse":1,"separate":1},"bottom":{"px":1,"em":1,"%":1},"clear":{"left":1,"right":1,"both":1,"none":1},"color":{"#$0":1,"rgb(#$00,0,0)":1},"cursor":{"default":1,"pointer":1,"move":1,"text":1,"wait":1,"help":1,"progress":1,"n-resize":1,"ne-resize":1,"e-resize":1,"se-resize":1,"s-resize":1,"sw-resize":1,"w-resize":1,"nw-resize":1},"display":{"none":1,"block":1,"inline":1,"inline-block":1,"table-cell":1},"empty-cells":{"show":1,"hide":1},"float":{"left":1,"right":1,"none":1},"font-family":{"Arial":2,"Comic Sans MS":2,"Consolas":2,"Courier New":2,"Courier":2,"Georgia":2,"Monospace":2,"Sans-Serif":2,"Segoe UI":2,"Tahoma":2,"Times New Roman":2,"Trebuchet MS":2,"Verdana":1},"font-size":{"px":1,"em":1,"%":1},"font-weight":{"bold":1,"normal":1},"font-style":{"italic":1,"normal":1},"font-variant":{"normal":1,"small-caps":1},"height":{"px":1,"em":1,"%":1},"left":{"px":1,"em":1,"%":1},"letter-spacing":{"normal":1},"line-height":{"normal":1},"list-style-type":{"none":1,"disc":1,"circle":1,"square":1,"decimal":1,"decimal-leading-zero":1,"lower-roman":1,"upper-roman":1,"lower-greek":1,"lower-latin":1,"upper-latin":1,"georgian":1,"lower-alpha":1,"upper-alpha":1},"margin":{"px":1,"em":1,"%":1},"margin-right":{"px":1,"em":1,"%":1},"margin-left":{"px":1,"em":1,"%":1},"margin-top":{"px":1,"em":1,"%":1},"margin-bottom":{"px":1,"em":1,"%":1},"max-height":{"px":1,"em":1,"%":1},"max-width":{"px":1,"em":1,"%":1},"min-height":{"px":1,"em":1,"%":1},"min-width":{"px":1,"em":1,"%":1},"overflow":{"hidden":1,"visible":1,"auto":1,"scroll":1},"overflow-x":{"hidden":1,"visible":1,"auto":1,"scroll":1},"overflow-y":{"hidden":1,"visible":1,"auto":1,"scroll":1},"padding":{"px":1,"em":1,"%":1},"padding-top":{"px":1,"em":1,"%":1},"padding-right":{"px":1,"em":1,"%":1},"padding-bottom":{"px":1,"em":1,"%":1},"padding-left":{"px":1,"em":1,"%":1},"page-break-after":{"auto":1,"always":1,"avoid":1,"left":1,"right":1},"page-break-before":{"auto":1,"always":1,"avoid":1,"left":1,"right":1},"position":{"absolute":1,"relative":1,"fixed":1,"static":1},"right":{"px":1,"em":1,"%":1},"table-layout":{"fixed":1,"auto":1},"text-decoration":{"none":1,"underline":1,"line-through":1,"blink":1},"text-align":{"left":1,"right":1,"center":1,"justify":1},"text-transform":{"capitalize":1,"uppercase":1,"lowercase":1,"none":1},"top":{"px":1,"em":1,"%":1},"vertical-align":{"top":1,"bottom":1},"visibility":{"hidden":1,"visible":1},"white-space":{"nowrap":1,"normal":1,"pre":1,"pre-line":1,"pre-wrap":1},"width":{"px":1,"em":1,"%":1},"word-spacing":{"normal":1},"filter":{"alpha(opacity=$0100)":1},"text-shadow":{"$02px 2px 2px #777":1},"text-overflow":{"ellipsis-word":1,"clip":1,"ellipsis":1},"-moz-border-radius":1,"-moz-border-radius-topright":1,"-moz-border-radius-bottomright":1,"-moz-border-radius-topleft":1,"-moz-border-radius-bottomleft":1,"-webkit-border-radius":1,"-webkit-border-top-right-radius":1,"-webkit-border-top-left-radius":1,"-webkit-border-bottom-right-radius":1,"-webkit-border-bottom-left-radius":1,"-moz-box-shadow":1,"-webkit-box-shadow":1,"transform":{"rotate($00deg)":1,"skew($00deg)":1},"-moz-transform":{"rotate($00deg)":1,"skew($00deg)":1},"-webkit-transform":{"rotate($00deg)":1,"skew($00deg)":1}};var C=function(){};(function(){this.completionsDefined=false;this.defineCompletions=function(){if(document){var s=document.createElement('c').style;for(var i in s){if(typeof s[i]!=='string')continue;var n=i.replace(/[A-Z]/g,function(x){return'-'+x.toLowerCase();});if(!p.hasOwnProperty(n))p[n]=1;}}this.completionsDefined=true;};this.getCompletions=function(s,a,b,c){if(!this.completionsDefined){this.defineCompletions();}var t=a.getTokenAt(b.row,b.column);if(!t)return[];if(s==='ruleset'){var l=a.getLine(b.row).substr(0,b.column);if(/:[^;]+$/.test(l)){/([\w\-]+):[^:]*$/.test(l);return this.getPropertyValueCompletions(s,a,b,c);}else{return this.getPropertyCompletions(s,a,b,c);}}return[];};this.getPropertyCompletions=function(s,a,b,c){var d=Object.keys(p);return d.map(function(f){return{caption:f,snippet:f+': $0;',meta:"property",score:1000000};});};this.getPropertyValueCompletions=function(s,a,b,c){var l=a.getLine(b.row).substr(0,b.column);var d=(/([\w\-]+):[^:]*$/.exec(l)||{})[1];if(!d)return[];var v=[];if(d in p&&typeof p[d]==="object"){v=Object.keys(p[d]);}return v.map(function(f){return{caption:f,snippet:f,meta:"property value",score:1000000};});};}).call(C.prototype);e.CssCompletions=C;});ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(r,e,a){"use strict";var o=r("../../lib/oop");var R=r("../../range").Range;var B=r("./fold_mode").FoldMode;var F=e.FoldMode=function(c){if(c){this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+c.start));this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+c.end));}};o.inherits(F,B);(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/;this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/;this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/;this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/;this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/;this._getFoldWidgetBase=this.getFoldWidget;this.getFoldWidget=function(s,f,b){var l=s.getLine(b);if(this.singleLineBlockCommentRe.test(l)){if(!this.startRegionRe.test(l)&&!this.tripleStarBlockCommentRe.test(l))return"";}var c=this._getFoldWidgetBase(s,f,b);if(!c&&this.startRegionRe.test(l))return"start";return c;};this.getFoldWidgetRange=function(s,f,b,c){var l=s.getLine(b);if(this.startRegionRe.test(l))return this.getCommentRegionBlock(s,l,b);var m=l.match(this.foldingStartMarker);if(m){var i=m.index;if(m[1])return this.openingBracketBlock(s,m[1],b,i);var d=s.getCommentFoldRange(b,i+m[0].length,1);if(d&&!d.isMultiLine()){if(c){d=this.getSectionRange(s,b);}else if(f!="all")d=null;}return d;}if(f==="markbegin")return;var m=l.match(this.foldingStopMarker);if(m){var i=m.index+m[0].length;if(m[1])return this.closingBracketBlock(s,m[1],b,i);return s.getCommentFoldRange(b,i,-1);}};this.getSectionRange=function(s,b){var l=s.getLine(b);var c=l.search(/\S/);var d=b;var f=l.length;b=b+1;var g=b;var m=s.getLength();while(++b<m){l=s.getLine(b);var i=l.search(/\S/);if(i===-1)continue;if(c>i)break;var h=this.getFoldWidgetRange(s,"all",b);if(h){if(h.start.row<=d){break;}else if(h.isMultiLine()){b=h.end.row;}else if(c==i){break;}}g=b;}return new R(d,f,g,s.getLine(g).length);};this.getCommentRegionBlock=function(s,l,b){var c=l.search(/\s*$/);var d=s.getLength();var f=b;var g=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;var h=1;while(++b<d){l=s.getLine(b);var m=g.exec(l);if(!m)continue;if(m[1])h--;else h++;if(!h)break;}var i=b;if(i>f){return new R(f,c,i,l.length);}};}).call(F.prototype);});ace.define("ace/mode/less",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/less_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/behaviour/css","ace/mode/css_completions","ace/mode/folding/cstyle"],function(r,e,m){"use strict";var o=r("../lib/oop");var T=r("./text").Mode;var L=r("./less_highlight_rules").LessHighlightRules;var M=r("./matching_brace_outdent").MatchingBraceOutdent;var C=r("./behaviour/css").CssBehaviour;var a=r("./css_completions").CssCompletions;var b=r("./folding/cstyle").FoldMode;var c=function(){this.HighlightRules=L;this.$outdent=new M();this.$behaviour=new C();this.$completer=new a();this.foldingRules=new b();};o.inherits(c,T);(function(){this.lineCommentStart="//";this.blockComment={start:"/*",end:"*/"};this.getNextLineIndent=function(s,l,t){var i=this.$getIndent(l);var d=this.getTokenizer().getLineTokens(l,s).tokens;if(d.length&&d[d.length-1].type=="comment"){return i;}var f=l.match(/^.*\{\s*$/);if(f){i+=t;}return i;};this.checkOutdent=function(s,l,i){return this.$outdent.checkOutdent(l,i);};this.autoOutdent=function(s,d,f){this.$outdent.autoOutdent(d,f);};this.getCompletions=function(s,d,p,f){return this.$completer.getCompletions("ruleset",d,p,f);};this.$id="ace/mode/less";}).call(c.prototype);e.Mode=c;});(function(){ace.require(["ace/mode/less"],function(m){if(typeof module=="object"&&typeof exports=="object"&&module){module.exports=m;}});})();
