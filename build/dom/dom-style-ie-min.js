/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.2.0PR1
build: nightly
*/
YUI.add("dom-style-ie",function(A){(function(D){var X="hasLayout",K="px",L="filter",B="filters",U="opacity",N="auto",G="borderWidth",J="borderTopWidth",R="borderRightWidth",W="borderBottomWidth",H="borderLeftWidth",I="width",P="height",S="transparent",T="visible",C="getComputedStyle",a=undefined,Z=D.config.doc.documentElement,Q=/^(\d[.\d]*)+(em|ex|px|gd|rem|vw|vh|vm|ch|mm|cm|in|pt|pc|deg|rad|ms|s|hz|khz|%){1}?/i,M=(D.UA.ie>=8),E=function(Y){return Y.currentStyle||Y.style;},O={CUSTOM_STYLES:{},get:function(Y,c){var b="",d;if(Y){d=E(Y)[c];if(c===U&&D.DOM.CUSTOM_STYLES[U]){b=D.DOM.CUSTOM_STYLES[U].get(Y);}else{if(!d||(d.indexOf&&d.indexOf(K)>-1)){b=d;}else{if(D.DOM.IE.COMPUTED[c]){b=D.DOM.IE.COMPUTED[c](Y,c);}else{if(Q.test(d)){b=O.getPixel(Y,c)+K;}else{b=d;}}}}}return b;},sizeOffsets:{width:["Left","Right"],height:["Top","Bottom"],top:["Top"],bottom:["Bottom"]},getOffset:function(c,Y){var g=E(c)[Y],h=Y.charAt(0).toUpperCase()+Y.substr(1),d="offset"+h,b="pixel"+h,f=O.sizeOffsets[Y],e=c.ownerDocument.compatMode,i="";if(g===N||g.indexOf("%")>-1){i=c["offset"+h];if(e!=="BackCompat"){if(f[0]){i-=O.getPixel(c,"padding"+f[0]);i-=O.getBorderWidth(c,"border"+f[0]+"Width",1);}if(f[1]){i-=O.getPixel(c,"padding"+f[1]);i-=O.getBorderWidth(c,"border"+f[1]+"Width",1);}}}else{if(!c.style[b]&&!c.style[Y]){c.style[Y]=g;}i=c.style[b];}return i+K;},borderMap:{thin:(M)?"1px":"2px",medium:(M)?"3px":"4px",thick:(M)?"5px":"6px"},getBorderWidth:function(b,d,Y){var c=Y?"":K,e=b.currentStyle[d];if(e.indexOf(K)<0){if(O.borderMap[e]&&b.currentStyle.borderStyle!=="none"){e=O.borderMap[e];}else{e=0;}}return(Y)?parseFloat(e):e;},getPixel:function(c,Y){var e=null,b=E(c),f=b.right,d=b[Y];c.style.right=d;e=c.style.pixelRight;c.style.right=f;return e;},getMargin:function(c,Y){var d,b=E(c);if(b[Y]==N){d=0;}else{d=O.getPixel(c,Y);}return d+K;},getVisibility:function(b,Y){var c;while((c=b.currentStyle)&&c[Y]=="inherit"){b=b.parentNode;}return(c)?c[Y]:T;},getColor:function(b,Y){var c=E(b)[Y];if(!c||c===S){D.DOM.elementByAxis(b,"parentNode",null,function(d){c=E(d)[Y];if(c&&c!==S){b=d;return true;}});}return D.Color.toRGB(c);},getBorderColor:function(b,Y){var c=E(b),d=c[Y]||c.color;return D.Color.toRGB(D.Color.toHex(d));}},F={};if(D.UA.ie){D.DOM.CUSTOM_STYLES[U]={get:function(b){var d=100;try{d=b[B]["DXImageTransform.Microsoft.Alpha"][U];}catch(c){try{d=b[B]("alpha")[U];}catch(Y){}}return d/100;},set:function(b,e,Y){var d,c;if(e===""){c=E(b);d=(U in c)?c[U]:1;e=d;}if(typeof Y[L]=="string"){Y[L]="alpha("+U+"="+e*100+")";if(!b.currentStyle||!b.currentStyle[X]){Y.zoom=1;}}}};}try{D.config.doc.createElement("div").style.height="-1px";}catch(V){D.DOM.CUSTOM_STYLES.height={set:function(c,d,b){var Y=parseFloat(d);if(isNaN(Y)||Y>=0){b.height=d;}else{}}};D.DOM.CUSTOM_STYLES.width={set:function(c,d,b){var Y=parseFloat(d);if(isNaN(Y)||Y>=0){b.width=d;}else{}}};}F[I]=F[P]=O.getOffset;F.color=F.backgroundColor=O.getColor;F[G]=F[J]=F[R]=F[W]=F[H]=O.getBorderWidth;F.marginTop=F.marginRight=F.marginBottom=F.marginLeft=O.getMargin;F.visibility=O.getVisibility;F.borderColor=F.borderTopColor=F.borderRightColor=F.borderBottomColor=F.borderLeftColor=O.getBorderColor;if(!D.config.win[C]){D.DOM[C]=O.get;}D.namespace("DOM.IE");D.DOM.IE.COMPUTED=F;D.DOM.IE.ComputedStyle=O;})(A);},"3.2.0PR1",{requires:["dom-style"]});