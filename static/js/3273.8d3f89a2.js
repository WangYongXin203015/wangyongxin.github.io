(self.webpackChunkvue=self.webpackChunkvue||[]).push([[3273],{82623:function(e){e.exports=function(e){return{name:"Q",aliases:["k","kdb"],keywords:{$pattern:/(`?)[A-Za-z0-9_]+\b/,keyword:"do while select delete by update from",literal:"0b 1b",built_in:"neg not null string reciprocal floor ceiling signum mod xbar xlog and or each scan over prior mmu lsq inv md5 ltime gtime count first var dev med cov cor all any rand sums prds mins maxs fills deltas ratios avgs differ prev next rank reverse iasc idesc asc desc msum mcount mavg mdev xrank mmin mmax xprev rotate distinct group where flip type key til get value attr cut set upsert raze union inter except cross sv vs sublist enlist read0 read1 hopen hclose hdel hsym hcount peach system ltrim rtrim trim lower upper ssr view tables views cols xcols keys xkey xcol xasc xdesc fkeys meta lj aj aj0 ij pj asof uj ww wj wj1 fby xgroup ungroup ej save load rsave rload show csv parse eval min max avg wavg wsum sin cos tan sum",type:"`float `double int `timestamp `timespan `datetime `time `boolean `symbol `char `byte `short `long `real `month `date `minute `second `guid"},contains:[e.C_LINE_COMMENT_MODE,e.QUOTE_STRING_MODE,e.C_NUMBER_MODE]}}},23797:function(e){e.exports=function(e){const n="[a-zA-Z_][a-zA-Z0-9\\._]*",a={className:"attribute",begin:"\\bid\\s*:",starts:{className:"string",end:n,returnEnd:!1}},t={begin:n+"\\s*:",returnBegin:!0,contains:[{className:"attribute",begin:n,end:"\\s*:",excludeEnd:!0,relevance:0}],relevance:0},i={begin:e.regex.concat(n,/\s*\{/),end:/\{/,returnBegin:!0,relevance:0,contains:[e.inherit(e.TITLE_MODE,{begin:n})]};return{name:"QML",aliases:["qt"],case_insensitive:!1,keywords:{keyword:"in of on if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await import",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Behavior bool color coordinate date double enumeration font geocircle georectangle geoshape int list matrix4x4 parent point quaternion real rect size string url variant vector2d vector3d vector4d Promise"},contains:[{className:"meta",begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,{className:"subst",begin:"\\$\\{",end:"\\}"}]},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"number",variants:[{begin:"\\b(0[bB][01]+)"},{begin:"\\b(0[oO][0-7]+)"},{begin:e.C_NUMBER_RE}],relevance:0},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{begin:/</,end:/>\s*[);\]]/,relevance:0,subLanguage:"xml"}],relevance:0},{className:"keyword",begin:"\\bsignal\\b",starts:{className:"string",end:"(\\(|:|=|;|,|//|/\\*|$)",returnEnd:!0}},{className:"keyword",begin:"\\bproperty\\b",starts:{className:"string",end:"(:|=|;|,|//|/\\*|$)",returnEnd:!0}},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/[A-Za-z$_][0-9A-Za-z$_]*/}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]}],illegal:/\[|%/},{begin:"\\."+e.IDENT_RE,relevance:0},a,t,i],illegal:/#/}}},54730:function(e){e.exports=function(e){const n=e.regex,a=/(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/,t=n.either(/0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,/0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/,/(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/),i=/[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/,r=n.either(/[()]/,/[{}]/,/\[\[/,/[[\]]/,/\\/,/,/);return{name:"R",keywords:{$pattern:a,keyword:"function if in break next repeat else for while",literal:"NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",built_in:"LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"},contains:[e.COMMENT(/#'/,/$/,{contains:[{scope:"doctag",match:/@examples/,starts:{end:n.lookahead(n.either(/\n^#'\s*(?=@[a-zA-Z]+)/,/\n^(?!#')/)),endsParent:!0}},{scope:"doctag",begin:"@param",end:/$/,contains:[{scope:"variable",variants:[{match:a},{match:/`(?:\\.|[^`\\])+`/}],endsParent:!0}]},{scope:"doctag",match:/@[a-zA-Z]+/},{scope:"keyword",match:/\\[a-zA-Z]+/}]}),e.HASH_COMMENT_MODE,{scope:"string",contains:[e.BACKSLASH_ESCAPE],variants:[e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\(/,end:/\)(-*)"/}),e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\{/,end:/\}(-*)"/}),e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\[/,end:/\](-*)"/}),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\(/,end:/\)(-*)'/}),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\{/,end:/\}(-*)'/}),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\[/,end:/\](-*)'/}),{begin:'"',end:'"',relevance:0},{begin:"'",end:"'",relevance:0}]},{relevance:0,variants:[{scope:{1:"operator",2:"number"},match:[i,t]},{scope:{1:"operator",2:"number"},match:[/%[^%]*%/,t]},{scope:{1:"punctuation",2:"number"},match:[r,t]},{scope:{2:"number"},match:[/[^a-zA-Z0-9._]|^/,t]}]},{scope:{3:"operator"},match:[a,/\s+/,/<-/,/\s+/]},{scope:"operator",relevance:0,variants:[{match:i},{match:/%[^%]*%/}]},{scope:"punctuation",relevance:0,match:r},{begin:"`",end:"`",contains:[{begin:/\\./}]}]}}},2318:function(e){e.exports=function(e){const n="~?[a-z$_][0-9a-zA-Z$_]*",a="`?[A-Z$_][0-9a-zA-Z$_]*",t="("+(["||","++","**","+.","*","/","*.","/.","..."].map((function(e){return e.split("").map((function(e){return"\\"+e})).join("")})).join("|")+"|\\|>|&&|==|===)"),i="\\s+"+t+"\\s+",r={keyword:"and as asr assert begin class constraint do done downto else end exception external for fun function functor if in include inherit initializer land lazy let lor lsl lsr lxor match method mod module mutable new nonrec object of open or private rec sig struct then to try type val virtual when while with",built_in:"array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 ref string unit ",literal:"true false"},s="\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",o={className:"number",relevance:0,variants:[{begin:s},{begin:"\\(-"+s+"\\)"}]},l={className:"operator",relevance:0,begin:t},c=[{className:"identifier",relevance:0,begin:n},l,o],E=[e.QUOTE_STRING_MODE,l,{className:"module",begin:"\\b"+a,returnBegin:!0,relevance:0,end:".",contains:[{className:"identifier",begin:a,relevance:0}]}],d=[{className:"module",begin:"\\b"+a,returnBegin:!0,end:".",relevance:0,contains:[{className:"identifier",begin:a,relevance:0}]}],m={className:"function",relevance:0,keywords:r,variants:[{begin:"\\s(\\(\\.?.*?\\)|"+n+")\\s*=>",end:"\\s*=>",returnBegin:!0,relevance:0,contains:[{className:"params",variants:[{begin:n},{begin:"~?[a-z$_][0-9a-zA-Z$_]*(\\s*:\\s*[a-z$_][0-9a-z$_]*(\\(\\s*('?[a-z$_][0-9a-z$_]*\\s*(,'?[a-z$_][0-9a-z$_]*\\s*)*)?\\))?){0,2}"},{begin:/\(\s*\)/}]}]},{begin:"\\s\\(\\.?[^;\\|]*\\)\\s*=>",end:"\\s=>",returnBegin:!0,relevance:0,contains:[{className:"params",relevance:0,variants:[{begin:n,end:"(,|\\n|\\))",relevance:0,contains:[l,{className:"typing",begin:":",end:"(,|\\n)",returnBegin:!0,relevance:0,contains:d}]}]}]},{begin:"\\(\\.\\s"+n+"\\)\\s*=>"}]};E.push(m);const T={className:"constructor",begin:a+"\\(",end:"\\)",illegal:"\\n",keywords:r,contains:[e.QUOTE_STRING_MODE,l,{className:"params",begin:"\\b"+n}]},N={className:"pattern-match",begin:"\\|",returnBegin:!0,keywords:r,end:"=>",relevance:0,contains:[T,l,{relevance:0,className:"constructor",begin:a}]},b={className:"module-access",keywords:r,returnBegin:!0,variants:[{begin:"\\b("+a+"\\.)+"+n},{begin:"\\b("+a+"\\.)+\\(",end:"\\)",returnBegin:!0,contains:[m,{begin:"\\(",end:"\\)",relevance:0,skip:!0}].concat(E)},{begin:"\\b("+a+"\\.)+\\{",end:/\}/}],contains:E};return d.push(b),{name:"ReasonML",aliases:["re"],keywords:r,illegal:"(:-|:=|\\$\\{|\\+=)",contains:[e.COMMENT("/\\*","\\*/",{illegal:"^(#,\\/\\/)"}),{className:"character",begin:"'(\\\\[^']+|[^'])'",illegal:"\\n",relevance:0},e.QUOTE_STRING_MODE,{className:"literal",begin:"\\(\\)",relevance:0},{className:"literal",begin:"\\[\\|",end:"\\|\\]",relevance:0,contains:c},{className:"literal",begin:"\\[",end:"\\]",relevance:0,contains:c},T,{className:"operator",begin:i,illegal:"--\x3e",relevance:0},o,e.C_LINE_COMMENT_MODE,N,m,{className:"module-def",begin:"\\bmodule\\s+"+n+"\\s+"+a+"\\s+=\\s+\\{",end:/\}/,returnBegin:!0,keywords:r,relevance:0,contains:[{className:"module",relevance:0,begin:a},{begin:/\{/,end:/\}/,relevance:0,skip:!0}].concat(E)},b]}}},94820:function(e){e.exports=function(e){return{name:"RenderMan RIB",keywords:"ArchiveRecord AreaLightSource Atmosphere Attribute AttributeBegin AttributeEnd Basis Begin Blobby Bound Clipping ClippingPlane Color ColorSamples ConcatTransform Cone CoordinateSystem CoordSysTransform CropWindow Curves Cylinder DepthOfField Detail DetailRange Disk Displacement Display End ErrorHandler Exposure Exterior Format FrameAspectRatio FrameBegin FrameEnd GeneralPolygon GeometricApproximation Geometry Hider Hyperboloid Identity Illuminate Imager Interior LightSource MakeCubeFaceEnvironment MakeLatLongEnvironment MakeShadow MakeTexture Matte MotionBegin MotionEnd NuPatch ObjectBegin ObjectEnd ObjectInstance Opacity Option Orientation Paraboloid Patch PatchMesh Perspective PixelFilter PixelSamples PixelVariance Points PointsGeneralPolygons PointsPolygons Polygon Procedural Projection Quantize ReadArchive RelativeDetail ReverseOrientation Rotate Scale ScreenWindow ShadingInterpolation ShadingRate Shutter Sides Skew SolidBegin SolidEnd Sphere SubdivisionMesh Surface TextureCoordinates Torus Transform TransformBegin TransformEnd TransformPoints Translate TrimCurve WorldBegin WorldEnd",illegal:"</",contains:[e.HASH_COMMENT_MODE,e.C_NUMBER_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]}}},41874:function(e){e.exports=function(e){const n="[a-zA-Z-_][^\\n{]+\\{",a={className:"attribute",begin:/[a-zA-Z-_]+/,end:/\s*:/,excludeEnd:!0,starts:{end:";",relevance:0,contains:[{className:"variable",begin:/\.[a-zA-Z-_]+/},{className:"keyword",begin:/\(optional\)/}]}};return{name:"Roboconf",aliases:["graph","instances"],case_insensitive:!0,keywords:"import",contains:[{begin:"^facet "+n,end:/\}/,keywords:"facet",contains:[a,e.HASH_COMMENT_MODE]},{begin:"^\\s*instance of "+n,end:/\}/,keywords:"name count channels instance-data instance-state instance of",illegal:/\S/,contains:["self",a,e.HASH_COMMENT_MODE]},{begin:"^"+n,end:/\}/,contains:[a,e.HASH_COMMENT_MODE]},e.HASH_COMMENT_MODE]}}},74005:function(e){e.exports=function(e){const n="foreach do while for if from to step else on-error and or not in",a="true false yes no nothing nil null",t={className:"variable",variants:[{begin:/\$[\w\d#@][\w\d_]*/},{begin:/\$\{(.*?)\}/}]},i={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,t,{className:"variable",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]}]},r={className:"string",begin:/'/,end:/'/};return{name:"Microtik RouterOS script",aliases:["mikrotik"],case_insensitive:!0,keywords:{$pattern:/:?[\w-]+/,literal:a,keyword:n+" :"+n.split(" ").join(" :")+" :"+"global local beep delay put len typeof pick log time set find environment terminal error execute parse resolve toarray tobool toid toip toip6 tonum tostr totime".split(" ").join(" :")},contains:[{variants:[{begin:/\/\*/,end:/\*\//},{begin:/\/\//,end:/$/},{begin:/<\//,end:/>/}],illegal:/./},e.COMMENT("^#","$"),i,r,t,{begin:/[\w-]+=([^\s{}[\]()>]+)/,relevance:0,returnBegin:!0,contains:[{className:"attribute",begin:/[^=]+/},{begin:/=/,endsWithParent:!0,relevance:0,contains:[i,r,t,{className:"literal",begin:"\\b("+a.split(" ").join("|")+")\\b"},{begin:/("[^"]*"|[^\s{}[\]]+)/}]}]},{className:"number",begin:/\*[0-9a-fA-F]+/},{begin:"\\b("+"add remove enable disable set get print export edit find run debug error info warning".split(" ").join("|")+")([\\s[(\\]|])",returnBegin:!0,contains:[{className:"built_in",begin:/\w+/}]},{className:"built_in",variants:[{begin:"(\\.\\./|/|\\s)(("+"traffic-flow traffic-generator firewall scheduler aaa accounting address-list address align area bandwidth-server bfd bgp bridge client clock community config connection console customer default dhcp-client dhcp-server discovery dns e-mail ethernet filter firmware gps graphing group hardware health hotspot identity igmp-proxy incoming instance interface ip ipsec ipv6 irq l2tp-server lcd ldp logging mac-server mac-winbox mangle manual mirror mme mpls nat nd neighbor network note ntp ospf ospf-v3 ovpn-server page peer pim ping policy pool port ppp pppoe-client pptp-server prefix profile proposal proxy queue radius resource rip ripng route routing screen script security-profiles server service service-port settings shares smb sms sniffer snmp snooper socks sstp-server system tool tracking type upgrade upnp user-manager users user vlan secret vrrp watchdog web-access wireless pptp pppoe lan wan layer7-protocol lease simple raw".split(" ").join("|")+");?\\s)+"},{begin:/\.\./,relevance:0}]}]}}},92852:function(e){e.exports=function(e){const n={match:[/(surface|displacement|light|volume|imager)/,/\s+/,e.IDENT_RE],scope:{1:"keyword",3:"title.class"}};return{name:"RenderMan RSL",keywords:{keyword:["while","for","if","do","return","else","break","extern","continue"],built_in:["abs","acos","ambient","area","asin","atan","atmosphere","attribute","calculatenormal","ceil","cellnoise","clamp","comp","concat","cos","degrees","depth","Deriv","diffuse","distance","Du","Dv","environment","exp","faceforward","filterstep","floor","format","fresnel","incident","length","lightsource","log","match","max","min","mod","noise","normalize","ntransform","opposite","option","phong","pnoise","pow","printf","ptlined","radians","random","reflect","refract","renderinfo","round","setcomp","setxcomp","setycomp","setzcomp","shadow","sign","sin","smoothstep","specular","specularbrdf","spline","sqrt","step","tan","texture","textureinfo","trace","transform","vtransform","xcomp","ycomp","zcomp"],type:["matrix","float","color","point","normal","vector"]},illegal:"</",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,e.C_NUMBER_MODE,{className:"meta",begin:"#",end:"$"},n,{beginKeywords:"illuminate illuminance gather",end:"\\("}]}}},67905:function(e){e.exports=function(e){const n=e.regex,a="([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",t=n.either(/\b([A-Z]+[a-z0-9]+)+/,/\b([A-Z]+[a-z0-9]+)+[A-Z]+/),i=n.concat(t,/(::\w+)*/),r={"variable.constant":["__FILE__","__LINE__"],"variable.language":["self","super"],keyword:["alias","and","attr_accessor","attr_reader","attr_writer","begin","BEGIN","break","case","class","defined","do","else","elsif","end","END","ensure","for","if","in","include","module","next","not","or","redo","require","rescue","retry","return","then","undef","unless","until","when","while","yield"],built_in:["proc","lambda"],literal:["true","false","nil"]},s={className:"doctag",begin:"@[A-Za-z]+"},o={begin:"#<",end:">"},l=[e.COMMENT("#","$",{contains:[s]}),e.COMMENT("^=begin","^=end",{contains:[s],relevance:10}),e.COMMENT("^__END__",e.MATCH_NOTHING_RE)],c={className:"subst",begin:/#\{/,end:/\}/,keywords:r},E={className:"string",contains:[e.BACKSLASH_ESCAPE,c],variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/`/,end:/`/},{begin:/%[qQwWx]?\(/,end:/\)/},{begin:/%[qQwWx]?\[/,end:/\]/},{begin:/%[qQwWx]?\{/,end:/\}/},{begin:/%[qQwWx]?</,end:/>/},{begin:/%[qQwWx]?\//,end:/\//},{begin:/%[qQwWx]?%/,end:/%/},{begin:/%[qQwWx]?-/,end:/-/},{begin:/%[qQwWx]?\|/,end:/\|/},{begin:/\B\?(\\\d{1,3})/},{begin:/\B\?(\\x[A-Fa-f0-9]{1,2})/},{begin:/\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/},{begin:/\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/},{begin:/\B\?\\(c|C-)[\x20-\x7e]/},{begin:/\B\?\\?\S/},{begin:n.concat(/<<[-~]?'?/,n.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,contains:[e.BACKSLASH_ESCAPE,c]})]}]},d="[0-9](_?[0-9])*",m={className:"number",relevance:0,variants:[{begin:`\\b([1-9](_?[0-9])*|0)(\\.(${d}))?([eE][+-]?(${d})|r)?i?\\b`},{begin:"\\b0[dD][0-9](_?[0-9])*r?i?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*r?i?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*r?i?\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"},{begin:"\\b0(_?[0-7])+r?i?\\b"}]},T={variants:[{match:/\(\)/},{className:"params",begin:/\(/,end:/(?=\))/,excludeBegin:!0,endsParent:!0,keywords:r}]},N=[E,{variants:[{match:[/class\s+/,i,/\s+<\s+/,i]},{match:[/class\s+/,i]}],scope:{2:"title.class",4:"title.class.inherited"},keywords:r},{relevance:0,match:[i,/\.new[ (]/],scope:{1:"title.class"}},{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},{match:[/def/,/\s+/,a],scope:{1:"keyword",3:"title.function"},contains:[T]},{begin:e.IDENT_RE+"::"},{className:"symbol",begin:e.UNDERSCORE_IDENT_RE+"(!|\\?)?:",relevance:0},{className:"symbol",begin:":(?!\\s)",contains:[E,{begin:a}],relevance:0},m,{className:"variable",begin:"(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"},{className:"params",begin:/\|/,end:/\|/,excludeBegin:!0,excludeEnd:!0,relevance:0,keywords:r},{begin:"("+e.RE_STARTERS_RE+"|unless)\\s*",keywords:"unless",contains:[{className:"regexp",contains:[e.BACKSLASH_ESCAPE,c],illegal:/\n/,variants:[{begin:"/",end:"/[a-z]*"},{begin:/%r\{/,end:/\}[a-z]*/},{begin:"%r\\(",end:"\\)[a-z]*"},{begin:"%r!",end:"![a-z]*"},{begin:"%r\\[",end:"\\][a-z]*"}]}].concat(o,l),relevance:0}].concat(o,l);c.contains=N,T.contains=N;const b=[{begin:/^\s*=>/,starts:{end:"$",contains:N}},{className:"meta.prompt",begin:"^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])",starts:{end:"$",keywords:r,contains:N}}];return l.unshift(o),{name:"Ruby",aliases:["rb","gemspec","podspec","thor","irb"],keywords:r,illegal:/\/\*/,contains:[e.SHEBANG({binary:"ruby"})].concat(b).concat(l).concat(N)}}},32192:function(e){e.exports=function(e){return{name:"Oracle Rules Language",keywords:{keyword:"BILL_PERIOD BILL_START BILL_STOP RS_EFFECTIVE_START RS_EFFECTIVE_STOP RS_JURIS_CODE RS_OPCO_CODE INTDADDATTRIBUTE|5 INTDADDVMSG|5 INTDBLOCKOP|5 INTDBLOCKOPNA|5 INTDCLOSE|5 INTDCOUNT|5 INTDCOUNTSTATUSCODE|5 INTDCREATEMASK|5 INTDCREATEDAYMASK|5 INTDCREATEFACTORMASK|5 INTDCREATEHANDLE|5 INTDCREATEOVERRIDEDAYMASK|5 INTDCREATEOVERRIDEMASK|5 INTDCREATESTATUSCODEMASK|5 INTDCREATETOUPERIOD|5 INTDDELETE|5 INTDDIPTEST|5 INTDEXPORT|5 INTDGETERRORCODE|5 INTDGETERRORMESSAGE|5 INTDISEQUAL|5 INTDJOIN|5 INTDLOAD|5 INTDLOADACTUALCUT|5 INTDLOADDATES|5 INTDLOADHIST|5 INTDLOADLIST|5 INTDLOADLISTDATES|5 INTDLOADLISTENERGY|5 INTDLOADLISTHIST|5 INTDLOADRELATEDCHANNEL|5 INTDLOADSP|5 INTDLOADSTAGING|5 INTDLOADUOM|5 INTDLOADUOMDATES|5 INTDLOADUOMHIST|5 INTDLOADVERSION|5 INTDOPEN|5 INTDREADFIRST|5 INTDREADNEXT|5 INTDRECCOUNT|5 INTDRELEASE|5 INTDREPLACE|5 INTDROLLAVG|5 INTDROLLPEAK|5 INTDSCALAROP|5 INTDSCALE|5 INTDSETATTRIBUTE|5 INTDSETDSTPARTICIPANT|5 INTDSETSTRING|5 INTDSETVALUE|5 INTDSETVALUESTATUS|5 INTDSHIFTSTARTTIME|5 INTDSMOOTH|5 INTDSORT|5 INTDSPIKETEST|5 INTDSUBSET|5 INTDTOU|5 INTDTOURELEASE|5 INTDTOUVALUE|5 INTDUPDATESTATS|5 INTDVALUE|5 STDEV INTDDELETEEX|5 INTDLOADEXACTUAL|5 INTDLOADEXCUT|5 INTDLOADEXDATES|5 INTDLOADEX|5 INTDLOADEXRELATEDCHANNEL|5 INTDSAVEEX|5 MVLOAD|5 MVLOADACCT|5 MVLOADACCTDATES|5 MVLOADACCTHIST|5 MVLOADDATES|5 MVLOADHIST|5 MVLOADLIST|5 MVLOADLISTDATES|5 MVLOADLISTHIST|5 IF FOR NEXT DONE SELECT END CALL ABORT CLEAR CHANNEL FACTOR LIST NUMBER OVERRIDE SET WEEK DISTRIBUTIONNODE ELSE WHEN THEN OTHERWISE IENUM CSV INCLUDE LEAVE RIDER SAVE DELETE NOVALUE SECTION WARN SAVE_UPDATE DETERMINANT LABEL REPORT REVENUE EACH IN FROM TOTAL CHARGE BLOCK AND OR CSV_FILE RATE_CODE AUXILIARY_DEMAND UIDACCOUNT RS BILL_PERIOD_SELECT HOURS_PER_MONTH INTD_ERROR_STOP SEASON_SCHEDULE_NAME ACCOUNTFACTOR ARRAYUPPERBOUND CALLSTOREDPROC GETADOCONNECTION GETCONNECT GETDATASOURCE GETQUALIFIER GETUSERID HASVALUE LISTCOUNT LISTOP LISTUPDATE LISTVALUE PRORATEFACTOR RSPRORATE SETBINPATH SETDBMONITOR WQ_OPEN BILLINGHOURS DATE DATEFROMFLOAT DATETIMEFROMSTRING DATETIMETOSTRING DATETOFLOAT DAY DAYDIFF DAYNAME DBDATETIME HOUR MINUTE MONTH MONTHDIFF MONTHHOURS MONTHNAME ROUNDDATE SAMEWEEKDAYLASTYEAR SECOND WEEKDAY WEEKDIFF YEAR YEARDAY YEARSTR COMPSUM HISTCOUNT HISTMAX HISTMIN HISTMINNZ HISTVALUE MAXNRANGE MAXRANGE MINRANGE COMPIKVA COMPKVA COMPKVARFROMKQKW COMPLF IDATTR FLAG LF2KW LF2KWH MAXKW POWERFACTOR READING2USAGE AVGSEASON MAXSEASON MONTHLYMERGE SEASONVALUE SUMSEASON ACCTREADDATES ACCTTABLELOAD CONFIGADD CONFIGGET CREATEOBJECT CREATEREPORT EMAILCLIENT EXPBLKMDMUSAGE EXPMDMUSAGE EXPORT_USAGE FACTORINEFFECT GETUSERSPECIFIEDSTOP INEFFECT ISHOLIDAY RUNRATE SAVE_PROFILE SETREPORTTITLE USEREXIT WATFORRUNRATE TO TABLE ACOS ASIN ATAN ATAN2 BITAND CEIL COS COSECANT COSH COTANGENT DIVQUOT DIVREM EXP FABS FLOOR FMOD FREPM FREXPN LOG LOG10 MAX MAXN MIN MINNZ MODF POW ROUND ROUND2VALUE ROUNDINT SECANT SIN SINH SQROOT TAN TANH FLOAT2STRING FLOAT2STRINGNC INSTR LEFT LEN LTRIM MID RIGHT RTRIM STRING STRINGNC TOLOWER TOUPPER TRIM NUMDAYS READ_DATE STAGING",built_in:"IDENTIFIER OPTIONS XML_ELEMENT XML_OP XML_ELEMENT_OF DOMDOCCREATE DOMDOCLOADFILE DOMDOCLOADXML DOMDOCSAVEFILE DOMDOCGETROOT DOMDOCADDPI DOMNODEGETNAME DOMNODEGETTYPE DOMNODEGETVALUE DOMNODEGETCHILDCT DOMNODEGETFIRSTCHILD DOMNODEGETSIBLING DOMNODECREATECHILDELEMENT DOMNODESETATTRIBUTE DOMNODEGETCHILDELEMENTCT DOMNODEGETFIRSTCHILDELEMENT DOMNODEGETSIBLINGELEMENT DOMNODEGETATTRIBUTECT DOMNODEGETATTRIBUTEI DOMNODEGETATTRIBUTEBYNAME DOMNODEGETBYNAME"},contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.C_NUMBER_MODE,{className:"literal",variants:[{begin:"#\\s+",relevance:0},{begin:"#[a-zA-Z .]+"}]}]}}},9880:function(e){e.exports=function(e){const n=e.regex,a={className:"title.function.invoke",relevance:0,begin:n.concat(/\b/,/(?!let\b)/,e.IDENT_RE,n.lookahead(/\s*\(/))},t="([ui](8|16|32|64|128|size)|f(32|64))?",i=["drop ","Copy","Send","Sized","Sync","Drop","Fn","FnMut","FnOnce","ToOwned","Clone","Debug","PartialEq","PartialOrd","Eq","Ord","AsRef","AsMut","Into","From","Default","Iterator","Extend","IntoIterator","DoubleEndedIterator","ExactSizeIterator","SliceConcatExt","ToString","assert!","assert_eq!","bitflags!","bytes!","cfg!","col!","concat!","concat_idents!","debug_assert!","debug_assert_eq!","env!","panic!","file!","format!","format_args!","include_bin!","include_str!","line!","local_data_key!","module_path!","option_env!","print!","println!","select!","stringify!","try!","unimplemented!","unreachable!","vec!","write!","writeln!","macro_rules!","assert_ne!","debug_assert_ne!"];return{name:"Rust",aliases:["rs"],keywords:{$pattern:e.IDENT_RE+"!?",type:["i8","i16","i32","i64","i128","isize","u8","u16","u32","u64","u128","usize","f32","f64","str","char","bool","Box","Option","Result","String","Vec"],keyword:["abstract","as","async","await","become","box","break","const","continue","crate","do","dyn","else","enum","extern","false","final","fn","for","if","impl","in","let","loop","macro","match","mod","move","mut","override","priv","pub","ref","return","self","Self","static","struct","super","trait","true","try","type","typeof","unsafe","unsized","use","virtual","where","while","yield"],literal:["true","false","Some","None","Ok","Err"],built_in:i},illegal:"</",contains:[e.C_LINE_COMMENT_MODE,e.COMMENT("/\\*","\\*/",{contains:["self"]}),e.inherit(e.QUOTE_STRING_MODE,{begin:/b?"/,illegal:null}),{className:"string",variants:[{begin:/b?r(#*)"(.|\n)*?"\1(?!#)/},{begin:/b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/}]},{className:"symbol",begin:/'[a-zA-Z_][a-zA-Z0-9_]*/},{className:"number",variants:[{begin:"\\b0b([01_]+)"+t},{begin:"\\b0o([0-7_]+)"+t},{begin:"\\b0x([A-Fa-f0-9_]+)"+t},{begin:"\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)"+t}],relevance:0},{begin:[/fn/,/\s+/,e.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"title.function"}},{className:"meta",begin:"#!?\\[",end:"\\]",contains:[{className:"string",begin:/"/,end:/"/}]},{begin:[/let/,/\s+/,/(?:mut\s+)?/,e.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"keyword",4:"variable"}},{begin:[/for/,/\s+/,e.UNDERSCORE_IDENT_RE,/\s+/,/in/],className:{1:"keyword",3:"variable",5:"keyword"}},{begin:[/type/,/\s+/,e.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"title.class"}},{begin:[/(?:trait|enum|struct|union|impl|for)/,/\s+/,e.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"title.class"}},{begin:e.IDENT_RE+"::",keywords:{keyword:"Self",built_in:i}},{className:"punctuation",begin:"->"},a]}}},93129:function(e){e.exports=function(e){const n=e.regex;return{name:"SAS",case_insensitive:!0,keywords:{literal:["null","missing","_all_","_automatic_","_character_","_infile_","_n_","_name_","_null_","_numeric_","_user_","_webout_"],keyword:["do","if","then","else","end","until","while","abort","array","attrib","by","call","cards","cards4","catname","continue","datalines","datalines4","delete","delim","delimiter","display","dm","drop","endsas","error","file","filename","footnote","format","goto","in","infile","informat","input","keep","label","leave","length","libname","link","list","lostcard","merge","missing","modify","options","output","out","page","put","redirect","remove","rename","replace","retain","return","select","set","skip","startsas","stop","title","update","waitsas","where","window","x|0","systask","add","and","alter","as","cascade","check","create","delete","describe","distinct","drop","foreign","from","group","having","index","insert","into","in","key","like","message","modify","msgtype","not","null","on","or","order","primary","references","reset","restrict","select","set","table","unique","update","validate","view","where"]},contains:[{className:"keyword",begin:/^\s*(proc [\w\d_]+|data|run|quit)[\s;]/},{className:"variable",begin:/&[a-zA-Z_&][a-zA-Z0-9_]*\.?/},{begin:[/^\s*/,/datalines;|cards;/,/(?:.*\n)+/,/^\s*;\s*$/],className:{2:"keyword",3:"string"}},{begin:[/%mend|%macro/,/\s+/,/[a-zA-Z_&][a-zA-Z0-9_]*/],className:{1:"built_in",3:"title.function"}},{className:"built_in",begin:"%"+n.either("bquote","nrbquote","cmpres","qcmpres","compstor","datatyp","display","do","else","end","eval","global","goto","if","index","input","keydef","label","left","length","let","local","lowcase","macro","mend","nrbquote","nrquote","nrstr","put","qcmpres","qleft","qlowcase","qscan","qsubstr","qsysfunc","qtrim","quote","qupcase","scan","str","substr","superq","syscall","sysevalf","sysexec","sysfunc","sysget","syslput","sysprod","sysrc","sysrput","then","to","trim","unquote","until","upcase","verify","while","window")},{className:"title.function",begin:/%[a-zA-Z_][a-zA-Z_0-9]*/},{className:"meta",begin:n.either("abs","addr","airy","arcos","arsin","atan","attrc","attrn","band","betainv","blshift","bnot","bor","brshift","bxor","byte","cdf","ceil","cexist","cinv","close","cnonct","collate","compbl","compound","compress","cos","cosh","css","curobs","cv","daccdb","daccdbsl","daccsl","daccsyd","dacctab","dairy","date","datejul","datepart","datetime","day","dclose","depdb","depdbsl","depdbsl","depsl","depsl","depsyd","depsyd","deptab","deptab","dequote","dhms","dif","digamma","dim","dinfo","dnum","dopen","doptname","doptnum","dread","dropnote","dsname","erf","erfc","exist","exp","fappend","fclose","fcol","fdelete","fetch","fetchobs","fexist","fget","fileexist","filename","fileref","finfo","finv","fipname","fipnamel","fipstate","floor","fnonct","fnote","fopen","foptname","foptnum","fpoint","fpos","fput","fread","frewind","frlen","fsep","fuzz","fwrite","gaminv","gamma","getoption","getvarc","getvarn","hbound","hms","hosthelp","hour","ibessel","index","indexc","indexw","input","inputc","inputn","int","intck","intnx","intrr","irr","jbessel","juldate","kurtosis","lag","lbound","left","length","lgamma","libname","libref","log","log10","log2","logpdf","logpmf","logsdf","lowcase","max","mdy","mean","min","minute","mod","month","mopen","mort","n","netpv","nmiss","normal","note","npv","open","ordinal","pathname","pdf","peek","peekc","pmf","point","poisson","poke","probbeta","probbnml","probchi","probf","probgam","probhypr","probit","probnegb","probnorm","probt","put","putc","putn","qtr","quote","ranbin","rancau","ranexp","rangam","range","rank","rannor","ranpoi","rantbl","rantri","ranuni","repeat","resolve","reverse","rewind","right","round","saving","scan","sdf","second","sign","sin","sinh","skewness","soundex","spedis","sqrt","std","stderr","stfips","stname","stnamel","substr","sum","symget","sysget","sysmsg","sysprod","sysrc","system","tan","tanh","time","timepart","tinv","tnonct","today","translate","tranwrd","trigamma","trim","trimn","trunc","uniform","upcase","uss","var","varfmt","varinfmt","varlabel","varlen","varname","varnum","varray","varrayx","vartype","verify","vformat","vformatd","vformatdx","vformatn","vformatnx","vformatw","vformatwx","vformatx","vinarray","vinarrayx","vinformat","vinformatd","vinformatdx","vinformatn","vinformatnx","vinformatw","vinformatwx","vinformatx","vlabel","vlabelx","vlength","vlengthx","vname","vnamex","vtype","vtypex","weekday","year","yyq","zipfips","zipname","zipnamel","zipstate")+"(?=\\()"},{className:"string",variants:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},e.COMMENT("\\*",";"),e.C_BLOCK_COMMENT_MODE]}}}}]);